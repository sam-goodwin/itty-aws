import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const ns = /*@__PURE__*/ T.XmlNamespace("http://appsync.amazonaws.com");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "AppSync",
  serviceShapeName: "AWSDeepdishControlPlaneService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "appsync" });
const ver = /*@__PURE__*/ T.ServiceVersion("2017-07-25");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://appsync-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://appsync-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://appsync.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://appsync.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ApiKeyLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ApiKeyLimitExceededException>()(
    "ApiKeyLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ApiKeyValidityOutOfBoundsException
  extends /*@__PURE__*/ S.TaggedError<ApiKeyValidityOutOfBoundsException>()(
    "ApiKeyValidityOutOfBoundsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ApiLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ApiLimitExceededException>()(
    "ApiLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({
          identifier: "BadRequestReason",
        }),
      ),
      detail: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(188, __c23, 4)).annotate({
          identifier: "BadRequestDetail",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConcurrentModificationException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentModificationException>()(
    "ConcurrentModificationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class GraphQLSchemaException
  extends /*@__PURE__*/ S.TaggedError<GraphQLSchemaException>()(
    "GraphQLSchemaException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InternalFailureException
  extends /*@__PURE__*/ S.TaggedError<InternalFailureException>()(
    "InternalFailureException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class UnauthorizedException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedException>()(
    "UnauthorizedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export type DomainName = string;
export interface AssociateApiRequest {
  domainName: string;
  apiId: string;
}
export type AssociationStatus = "PROCESSING" | "FAILED" | "SUCCESS" | (string & {});
export interface ApiAssociation {
  domainName?: string;
  apiId?: string;
  associationStatus?: AssociationStatus;
  deploymentDetail?: string;
}
export interface AssociateApiResponse {
  apiAssociation?: ApiAssociation;
}
export type MergeType = "MANUAL_MERGE" | "AUTO_MERGE" | (string & {});
export interface SourceApiAssociationConfig {
  mergeType?: MergeType;
}
export interface AssociateMergedGraphqlApiRequest {
  sourceApiIdentifier: string;
  mergedApiIdentifier: string;
  description?: string;
  sourceApiAssociationConfig?: SourceApiAssociationConfig;
}
export type SourceApiAssociationStatus =
  | "MERGE_SCHEDULED"
  | "MERGE_FAILED"
  | "MERGE_SUCCESS"
  | "MERGE_IN_PROGRESS"
  | "AUTO_MERGE_SCHEDULE_FAILED"
  | "DELETION_SCHEDULED"
  | "DELETION_IN_PROGRESS"
  | "DELETION_FAILED"
  | (string & {});
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
  lastSuccessfulMergeDate?: Date;
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
export type ApiName = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export type AuthenticationType =
  | "API_KEY"
  | "AWS_IAM"
  | "AMAZON_COGNITO_USER_POOLS"
  | "OPENID_CONNECT"
  | "AWS_LAMBDA"
  | (string & {});
export interface CognitoConfig {
  userPoolId: string;
  awsRegion: string;
  appIdClientRegex?: string;
}
export interface OpenIDConnectConfig {
  issuer: string;
  clientId?: string;
  iatTTL?: number;
  authTTL?: number;
}
export type TTL = number;
export interface LambdaAuthorizerConfig {
  authorizerResultTtlInSeconds?: number;
  authorizerUri: string;
  identityValidationExpression?: string;
}
export interface AuthProvider {
  authType: AuthenticationType;
  cognitoConfig?: CognitoConfig;
  openIDConnectConfig?: OpenIDConnectConfig;
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
}
export type AuthProviders = AuthProvider[];
export interface AuthMode {
  authType: AuthenticationType;
}
export type AuthModes = AuthMode[];
export type EventLogLevel = "NONE" | "ERROR" | "ALL" | "INFO" | "DEBUG" | (string & {});
export interface EventLogConfig {
  logLevel: EventLogLevel;
  cloudWatchLogsRoleArn: string;
}
export interface EventConfig {
  authProviders: AuthProvider[];
  connectionAuthModes: AuthMode[];
  defaultPublishAuthModes: AuthMode[];
  defaultSubscribeAuthModes: AuthMode[];
  logConfig?: EventLogConfig;
}
export interface CreateApiRequest {
  name: string;
  ownerContact?: string;
  tags?: { [key: string]: string | undefined };
  eventConfig: EventConfig;
}
export type OwnerContact = string;
export type MapOfStringToString = { [key: string]: string | undefined };
export interface Api {
  apiId?: string;
  name?: string;
  ownerContact?: string;
  tags?: { [key: string]: string | undefined };
  dns?: { [key: string]: string | undefined };
  apiArn?: string;
  created?: Date;
  xrayEnabled?: boolean;
  wafWebAclArn?: string;
  eventConfig?: EventConfig;
}
export interface CreateApiResponse {
  api?: Api;
}
export type ApiCachingBehavior =
  | "FULL_REQUEST_CACHING"
  | "PER_RESOLVER_CACHING"
  | "OPERATION_LEVEL_CACHING"
  | (string & {});
export type ApiCacheType =
  | "T2_SMALL"
  | "T2_MEDIUM"
  | "R4_LARGE"
  | "R4_XLARGE"
  | "R4_2XLARGE"
  | "R4_4XLARGE"
  | "R4_8XLARGE"
  | "SMALL"
  | "MEDIUM"
  | "LARGE"
  | "XLARGE"
  | "LARGE_2X"
  | "LARGE_4X"
  | "LARGE_8X"
  | "LARGE_12X"
  | (string & {});
export type CacheHealthMetricsConfig = "ENABLED" | "DISABLED" | (string & {});
export interface CreateApiCacheRequest {
  apiId: string;
  ttl: number;
  transitEncryptionEnabled?: boolean;
  atRestEncryptionEnabled?: boolean;
  apiCachingBehavior: ApiCachingBehavior;
  type: ApiCacheType;
  healthMetricsConfig?: CacheHealthMetricsConfig;
}
export type ApiCacheStatus =
  | "AVAILABLE"
  | "CREATING"
  | "DELETING"
  | "MODIFYING"
  | "FAILED"
  | (string & {});
export interface ApiCache {
  ttl?: number;
  apiCachingBehavior?: ApiCachingBehavior;
  transitEncryptionEnabled?: boolean;
  atRestEncryptionEnabled?: boolean;
  type?: ApiCacheType;
  status?: ApiCacheStatus;
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
export interface ApiKey {
  id?: string;
  description?: string;
  expires?: number;
  deletes?: number;
}
export interface CreateApiKeyResponse {
  apiKey?: ApiKey;
}
export type Namespace = string;
export type Code = string;
export type HandlerBehavior = "CODE" | "DIRECT" | (string & {});
export type InvokeType = "REQUEST_RESPONSE" | "EVENT" | (string & {});
export interface LambdaConfig {
  invokeType?: InvokeType;
}
export interface Integration {
  dataSourceName: string;
  lambdaConfig?: LambdaConfig;
}
export interface HandlerConfig {
  behavior: HandlerBehavior;
  integration: Integration;
}
export interface HandlerConfigs {
  onPublish?: HandlerConfig;
  onSubscribe?: HandlerConfig;
}
export interface CreateChannelNamespaceRequest {
  apiId: string;
  name: string;
  subscribeAuthModes?: AuthMode[];
  publishAuthModes?: AuthMode[];
  codeHandlers?: string;
  tags?: { [key: string]: string | undefined };
  handlerConfigs?: HandlerConfigs;
}
export interface ChannelNamespace {
  apiId?: string;
  name?: string;
  subscribeAuthModes?: AuthMode[];
  publishAuthModes?: AuthMode[];
  codeHandlers?: string;
  tags?: { [key: string]: string | undefined };
  channelNamespaceArn?: string;
  created?: Date;
  lastModified?: Date;
  handlerConfigs?: HandlerConfigs;
}
export interface CreateChannelNamespaceResponse {
  channelNamespace?: ChannelNamespace;
}
export type ResourceName = string;
export type DataSourceType =
  | "AWS_LAMBDA"
  | "AMAZON_DYNAMODB"
  | "AMAZON_ELASTICSEARCH"
  | "NONE"
  | "HTTP"
  | "RELATIONAL_DATABASE"
  | "AMAZON_OPENSEARCH_SERVICE"
  | "AMAZON_EVENTBRIDGE"
  | "AMAZON_BEDROCK_RUNTIME"
  | (string & {});
export interface DeltaSyncConfig {
  baseTableTTL?: number;
  deltaSyncTableName?: string;
  deltaSyncTableTTL?: number;
}
export interface DynamodbDataSourceConfig {
  tableName: string;
  awsRegion: string;
  useCallerCredentials?: boolean;
  deltaSyncConfig?: DeltaSyncConfig;
  versioned?: boolean;
}
export interface LambdaDataSourceConfig {
  lambdaFunctionArn: string;
}
export interface ElasticsearchDataSourceConfig {
  endpoint: string;
  awsRegion: string;
}
export interface OpenSearchServiceDataSourceConfig {
  endpoint: string;
  awsRegion: string;
}
export type AuthorizationType = "AWS_IAM" | (string & {});
export interface AwsIamConfig {
  signingRegion?: string;
  signingServiceName?: string;
}
export interface AuthorizationConfig {
  authorizationType: AuthorizationType;
  awsIamConfig?: AwsIamConfig;
}
export interface HttpDataSourceConfig {
  endpoint?: string;
  authorizationConfig?: AuthorizationConfig;
}
export type RelationalDatabaseSourceType = "RDS_HTTP_ENDPOINT" | (string & {});
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
export interface EventBridgeDataSourceConfig {
  eventBusArn: string;
}
export type DataSourceLevelMetricsConfig = "ENABLED" | "DISABLED" | (string & {});
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
export interface CreateDataSourceResponse {
  dataSource?: DataSource;
}
export type CertificateArn = string;
export type Description = string;
export interface CreateDomainNameRequest {
  domainName: string;
  certificateArn: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
}
export interface DomainNameConfig {
  domainName?: string;
  description?: string;
  certificateArn?: string;
  appsyncDomainName?: string;
  hostedZoneId?: string;
  tags?: { [key: string]: string | undefined };
  domainNameArn?: string;
}
export interface CreateDomainNameResponse {
  domainNameConfig?: DomainNameConfig;
}
export type MappingTemplate = string;
export type ConflictHandlerType =
  | "OPTIMISTIC_CONCURRENCY"
  | "LAMBDA"
  | "AUTOMERGE"
  | "NONE"
  | (string & {});
export type ConflictDetectionType = "VERSION" | "NONE" | (string & {});
export interface LambdaConflictHandlerConfig {
  lambdaConflictHandlerArn?: string;
}
export interface SyncConfig {
  conflictHandler?: ConflictHandlerType;
  conflictDetection?: ConflictDetectionType;
  lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
}
export type MaxBatchSize = number;
export type RuntimeName = "APPSYNC_JS" | (string & {});
export interface AppSyncRuntime {
  name: RuntimeName;
  runtimeVersion: string;
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
export interface CreateFunctionResponse {
  functionConfiguration?: FunctionConfiguration;
}
export type FieldLogLevel = "NONE" | "ERROR" | "ALL" | "INFO" | "DEBUG" | (string & {});
export interface LogConfig {
  fieldLogLevel: FieldLogLevel;
  cloudWatchLogsRoleArn: string;
  excludeVerboseContent?: boolean;
}
export type DefaultAction = "ALLOW" | "DENY" | (string & {});
export interface UserPoolConfig {
  userPoolId: string;
  awsRegion: string;
  defaultAction: DefaultAction;
  appIdClientRegex?: string;
}
export interface CognitoUserPoolConfig {
  userPoolId: string;
  awsRegion: string;
  appIdClientRegex?: string;
}
export interface AdditionalAuthenticationProvider {
  authenticationType?: AuthenticationType;
  openIDConnectConfig?: OpenIDConnectConfig;
  userPoolConfig?: CognitoUserPoolConfig;
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
}
export type AdditionalAuthenticationProviders = AdditionalAuthenticationProvider[];
export type GraphQLApiType = "GRAPHQL" | "MERGED" | (string & {});
export type GraphQLApiVisibility = "GLOBAL" | "PRIVATE" | (string & {});
export type GraphQLApiIntrospectionConfig = "ENABLED" | "DISABLED" | (string & {});
export type QueryDepthLimit = number;
export type ResolverCountLimit = number;
export type ResolverLevelMetricsBehavior =
  | "FULL_REQUEST_RESOLVER_METRICS"
  | "PER_RESOLVER_METRICS"
  | (string & {});
export type DataSourceLevelMetricsBehavior =
  | "FULL_REQUEST_DATA_SOURCE_METRICS"
  | "PER_DATA_SOURCE_METRICS"
  | (string & {});
export type OperationLevelMetricsConfig = "ENABLED" | "DISABLED" | (string & {});
export interface EnhancedMetricsConfig {
  resolverLevelMetricsBehavior: ResolverLevelMetricsBehavior;
  dataSourceLevelMetricsBehavior: DataSourceLevelMetricsBehavior;
  operationLevelMetricsConfig: OperationLevelMetricsConfig;
}
export interface CreateGraphqlApiRequest {
  name: string;
  logConfig?: LogConfig;
  authenticationType: AuthenticationType;
  userPoolConfig?: UserPoolConfig;
  openIDConnectConfig?: OpenIDConnectConfig;
  tags?: { [key: string]: string | undefined };
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];
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
export interface GraphqlApi {
  name?: string;
  apiId?: string;
  authenticationType?: AuthenticationType;
  logConfig?: LogConfig;
  userPoolConfig?: UserPoolConfig;
  openIDConnectConfig?: OpenIDConnectConfig;
  arn?: string;
  uris?: { [key: string]: string | undefined };
  tags?: { [key: string]: string | undefined };
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];
  xrayEnabled?: boolean;
  wafWebAclArn?: string;
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
  dns?: { [key: string]: string | undefined };
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
export interface CreateGraphqlApiResponse {
  graphqlApi?: GraphqlApi;
}
export type ResolverKind = "UNIT" | "PIPELINE" | (string & {});
export type FunctionsIds = string[];
export interface PipelineConfig {
  functions?: string[];
}
export type CachingKeys = string[];
export interface CachingConfig {
  ttl: number;
  cachingKeys?: string[];
}
export type ResolverLevelMetricsConfig = "ENABLED" | "DISABLED" | (string & {});
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
export interface CreateResolverResponse {
  resolver?: Resolver;
}
export type TypeDefinitionFormat = "SDL" | "JSON" | (string & {});
export interface CreateTypeRequest {
  apiId: string;
  definition: string;
  format: TypeDefinitionFormat;
}
export interface Type {
  name?: string;
  description?: string;
  arn?: string;
  definition?: string;
  format?: TypeDefinitionFormat;
}
export interface CreateTypeResponse {
  type?: Type;
}
export interface DeleteApiRequest {
  apiId: string;
}
export interface DeleteApiResponse {}
export interface DeleteApiCacheRequest {
  apiId: string;
}
export interface DeleteApiCacheResponse {}
export interface DeleteApiKeyRequest {
  apiId: string;
  id: string;
}
export interface DeleteApiKeyResponse {}
export interface DeleteChannelNamespaceRequest {
  apiId: string;
  name: string;
}
export interface DeleteChannelNamespaceResponse {}
export interface DeleteDataSourceRequest {
  apiId: string;
  name: string;
}
export interface DeleteDataSourceResponse {}
export interface DeleteDomainNameRequest {
  domainName: string;
}
export interface DeleteDomainNameResponse {}
export interface DeleteFunctionRequest {
  apiId: string;
  functionId: string;
}
export interface DeleteFunctionResponse {}
export interface DeleteGraphqlApiRequest {
  apiId: string;
}
export interface DeleteGraphqlApiResponse {}
export interface DeleteResolverRequest {
  apiId: string;
  typeName: string;
  fieldName: string;
}
export interface DeleteResolverResponse {}
export interface DeleteTypeRequest {
  apiId: string;
  typeName: string;
}
export interface DeleteTypeResponse {}
export interface DisassociateApiRequest {
  domainName: string;
}
export interface DisassociateApiResponse {}
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
export type Context = string;
export interface EvaluateCodeRequest {
  runtime: AppSyncRuntime;
  code: string;
  context: string;
  function?: string;
}
export type EvaluationResult = string;
export type ErrorMessage = string;
export type CodeErrorLine = number;
export type CodeErrorColumn = number;
export type CodeErrorSpan = number;
export interface CodeErrorLocation {
  line?: number;
  column?: number;
  span?: number;
}
export interface CodeError {
  errorType?: string;
  value?: string;
  location?: CodeErrorLocation;
}
export type CodeErrors = CodeError[];
export interface EvaluateCodeErrorDetail {
  message?: string;
  codeErrors?: CodeError[];
}
export type Logs = string[];
export type Stash = string;
export type OutErrors = string;
export interface EvaluateCodeResponse {
  evaluationResult?: string;
  error?: EvaluateCodeErrorDetail;
  logs?: string[];
  stash?: string;
  outErrors?: string;
}
export type Template = string;
export interface EvaluateMappingTemplateRequest {
  template: string;
  context: string;
}
export interface ErrorDetail {
  message?: string;
}
export interface EvaluateMappingTemplateResponse {
  evaluationResult?: string;
  error?: ErrorDetail;
  logs?: string[];
  stash?: string;
  outErrors?: string;
}
export interface FlushApiCacheRequest {
  apiId: string;
}
export interface FlushApiCacheResponse {}
export interface GetApiRequest {
  apiId: string;
}
export interface GetApiResponse {
  api?: Api;
}
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
export interface GetChannelNamespaceRequest {
  apiId: string;
  name: string;
}
export interface GetChannelNamespaceResponse {
  channelNamespace?: ChannelNamespace;
}
export interface GetDataSourceRequest {
  apiId: string;
  name: string;
}
export interface GetDataSourceResponse {
  dataSource?: DataSource;
}
export type PaginationToken = string;
export type MaxResults = number;
export interface GetDataSourceIntrospectionRequest {
  introspectionId: string;
  includeModelsSDL?: boolean;
  nextToken?: string;
  maxResults?: number;
}
export type DataSourceIntrospectionStatus = "PROCESSING" | "FAILED" | "SUCCESS" | (string & {});
export type DataSourceIntrospectionModelFieldTypeValues = string[];
export interface DataSourceIntrospectionModelFieldType {
  kind?: string;
  name?: string;
  type?: DataSourceIntrospectionModelFieldType;
  values?: string[];
}
export interface DataSourceIntrospectionModelField {
  name?: string;
  type?: DataSourceIntrospectionModelFieldType;
  length?: number;
}
export type DataSourceIntrospectionModelFields = DataSourceIntrospectionModelField[];
export type DataSourceIntrospectionModelIndexFields = string[];
export interface DataSourceIntrospectionModelIndex {
  name?: string;
  fields?: string[];
}
export type DataSourceIntrospectionModelIndexes = DataSourceIntrospectionModelIndex[];
export interface DataSourceIntrospectionModel {
  name?: string;
  fields?: DataSourceIntrospectionModelField[];
  primaryKey?: DataSourceIntrospectionModelIndex;
  indexes?: DataSourceIntrospectionModelIndex[];
  sdl?: string;
}
export type DataSourceIntrospectionModels = DataSourceIntrospectionModel[];
export interface DataSourceIntrospectionResult {
  models?: DataSourceIntrospectionModel[];
  nextToken?: string;
}
export interface GetDataSourceIntrospectionResponse {
  introspectionId?: string;
  introspectionStatus?: DataSourceIntrospectionStatus;
  introspectionStatusDetail?: string;
  introspectionResult?: DataSourceIntrospectionResult;
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
export interface GetGraphqlApiRequest {
  apiId: string;
}
export interface GetGraphqlApiResponse {
  graphqlApi?: GraphqlApi;
}
export interface GetGraphqlApiEnvironmentVariablesRequest {
  apiId: string;
}
export type EnvironmentVariableKey = string;
export type EnvironmentVariableValue = string;
export type EnvironmentVariableMap = { [key: string]: string | undefined };
export interface GetGraphqlApiEnvironmentVariablesResponse {
  environmentVariables?: { [key: string]: string | undefined };
}
export type OutputType = "SDL" | "JSON" | (string & {});
export interface GetIntrospectionSchemaRequest {
  apiId: string;
  format: OutputType;
  includeDirectives?: boolean;
}
export interface GetIntrospectionSchemaResponse {
  schema?: T.StreamingOutputBody;
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
export type SchemaStatus =
  | "PROCESSING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "SUCCESS"
  | "NOT_APPLICABLE"
  | (string & {});
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
export interface ListApiKeysRequest {
  apiId: string;
  nextToken?: string;
  maxResults?: number;
}
export type ApiKeys = ApiKey[];
export interface ListApiKeysResponse {
  apiKeys?: ApiKey[];
  nextToken?: string;
}
export interface ListApisRequest {
  nextToken?: string;
  maxResults?: number;
}
export type Apis = Api[];
export interface ListApisResponse {
  apis?: Api[];
  nextToken?: string;
}
export interface ListChannelNamespacesRequest {
  apiId: string;
  nextToken?: string;
  maxResults?: number;
}
export type ChannelNamespaces = ChannelNamespace[];
export interface ListChannelNamespacesResponse {
  channelNamespaces?: ChannelNamespace[];
  nextToken?: string;
}
export interface ListDataSourcesRequest {
  apiId: string;
  nextToken?: string;
  maxResults?: number;
}
export type DataSources = DataSource[];
export interface ListDataSourcesResponse {
  dataSources?: DataSource[];
  nextToken?: string;
}
export interface ListDomainNamesRequest {
  nextToken?: string;
  maxResults?: number;
}
export type DomainNameConfigs = DomainNameConfig[];
export interface ListDomainNamesResponse {
  domainNameConfigs?: DomainNameConfig[];
  nextToken?: string;
}
export interface ListFunctionsRequest {
  apiId: string;
  nextToken?: string;
  maxResults?: number;
}
export type Functions = FunctionConfiguration[];
export interface ListFunctionsResponse {
  functions?: FunctionConfiguration[];
  nextToken?: string;
}
export type Ownership = "CURRENT_ACCOUNT" | "OTHER_ACCOUNTS" | (string & {});
export interface ListGraphqlApisRequest {
  nextToken?: string;
  maxResults?: number;
  apiType?: GraphQLApiType;
  owner?: Ownership;
}
export type GraphqlApis = GraphqlApi[];
export interface ListGraphqlApisResponse {
  graphqlApis?: GraphqlApi[];
  nextToken?: string;
}
export interface ListResolversRequest {
  apiId: string;
  typeName: string;
  nextToken?: string;
  maxResults?: number;
}
export type Resolvers = Resolver[];
export interface ListResolversResponse {
  resolvers?: Resolver[];
  nextToken?: string;
}
export interface ListResolversByFunctionRequest {
  apiId: string;
  functionId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListResolversByFunctionResponse {
  resolvers?: Resolver[];
  nextToken?: string;
}
export interface ListSourceApiAssociationsRequest {
  apiId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface SourceApiAssociationSummary {
  associationId?: string;
  associationArn?: string;
  sourceApiId?: string;
  sourceApiArn?: string;
  mergedApiId?: string;
  mergedApiArn?: string;
  description?: string;
}
export type SourceApiAssociationSummaryList = SourceApiAssociationSummary[];
export interface ListSourceApiAssociationsResponse {
  sourceApiAssociationSummaries?: SourceApiAssociationSummary[];
  nextToken?: string;
}
export type ResourceArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface ListTypesRequest {
  apiId: string;
  format: TypeDefinitionFormat;
  nextToken?: string;
  maxResults?: number;
}
export type TypeList = Type[];
export interface ListTypesResponse {
  types?: Type[];
  nextToken?: string;
}
export interface ListTypesByAssociationRequest {
  mergedApiIdentifier: string;
  associationId: string;
  format: TypeDefinitionFormat;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTypesByAssociationResponse {
  types?: Type[];
  nextToken?: string;
}
export interface PutGraphqlApiEnvironmentVariablesRequest {
  apiId: string;
  environmentVariables: { [key: string]: string | undefined };
}
export interface PutGraphqlApiEnvironmentVariablesResponse {
  environmentVariables?: { [key: string]: string | undefined };
}
export type RdsDataApiConfigResourceArn = string;
export type RdsDataApiConfigSecretArn = string;
export type RdsDataApiConfigDatabaseName = string;
export interface RdsDataApiConfig {
  resourceArn: string;
  secretArn: string;
  databaseName: string;
}
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
  definition: Uint8Array;
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
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateApiRequest {
  apiId: string;
  name: string;
  ownerContact?: string;
  eventConfig: EventConfig;
}
export interface UpdateApiResponse {
  api?: Api;
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
export interface UpdateChannelNamespaceRequest {
  apiId: string;
  name: string;
  subscribeAuthModes?: AuthMode[];
  publishAuthModes?: AuthMode[];
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
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];
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
export type BadRequestReason = "CODE_ERROR" | (string & {});
export interface BadRequestDetail {
  codeErrors?: CodeError[];
}
export type AssociateApiError =
  | AccessDeniedException
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | CommonErrors;
/**
 * Maps an endpoint to your custom domain.
 */
export const associateApi: API.OperationMethod<
  AssociateApiRequest,
  AssociateApiResponse,
  AssociateApiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<AssociateApiRequest>,
  output: __S(2, __c0, 2) as any as S.Schema<AssociateApiResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalFailureException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateApi",
}));

export type AssociateMergedGraphqlApiError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates an association between a Merged API and source API using the source API's
 * identifier.
 */
export const associateMergedGraphqlApi: API.OperationMethod<
  AssociateMergedGraphqlApiRequest,
  AssociateMergedGraphqlApiResponse,
  AssociateMergedGraphqlApiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4, __c0, 4) as any as S.Schema<AssociateMergedGraphqlApiRequest>,
  output: __S(6, __c0, 6) as any as S.Schema<AssociateMergedGraphqlApiResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateMergedGraphqlApi",
}));

export type AssociateSourceGraphqlApiError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates an association between a Merged API and source API using the Merged API's
 * identifier.
 */
export const associateSourceGraphqlApi: API.OperationMethod<
  AssociateSourceGraphqlApiRequest,
  AssociateSourceGraphqlApiResponse,
  AssociateSourceGraphqlApiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7, __c0, 7) as any as S.Schema<AssociateSourceGraphqlApiRequest>,
  output: __S(6, __c0, 6) as any as S.Schema<AssociateSourceGraphqlApiResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateSourceGraphqlApi",
}));

export type CreateApiError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | ServiceQuotaExceededException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates an `Api` object. Use this operation to create an AppSync
 * API with your preferred configuration, such as an Event API that provides real-time message
 * publishing and message subscriptions over WebSockets.
 */
export const createApi: API.OperationMethod<
  CreateApiRequest,
  CreateApiResponse,
  CreateApiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18, __c2, 2) as any as S.Schema<CreateApiRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<CreateApiResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    ServiceQuotaExceededException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApi",
}));

export type CreateApiCacheError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a cache for the GraphQL API.
 */
export const createApiCache: API.OperationMethod<
  CreateApiCacheRequest,
  CreateApiCacheResponse,
  CreateApiCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22, __c2, 6) as any as S.Schema<CreateApiCacheRequest>,
  output: __S(24, __c3, 0) as any as S.Schema<CreateApiCacheResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApiCache",
}));

export type CreateApiKeyError =
  | ApiKeyLimitExceededException
  | ApiKeyValidityOutOfBoundsException
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a unique key that you can distribute to clients who invoke your API.
 */
export const createApiKey: API.OperationMethod<
  CreateApiKeyRequest,
  CreateApiKeyResponse,
  CreateApiKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25, __c3, 1) as any as S.Schema<CreateApiKeyRequest>,
  output: __S(27, __c3, 3) as any as S.Schema<CreateApiKeyResponse>,
  errors: [
    ApiKeyLimitExceededException,
    ApiKeyValidityOutOfBoundsException,
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApiKey",
}));

export type CreateChannelNamespaceError =
  | BadRequestException
  | ConcurrentModificationException
  | ConflictException
  | InternalFailureException
  | NotFoundException
  | ServiceQuotaExceededException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a `ChannelNamespace` for an `Api`.
 */
export const createChannelNamespace: API.OperationMethod<
  CreateChannelNamespaceRequest,
  CreateChannelNamespaceResponse,
  CreateChannelNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32, __c4, 0) as any as S.Schema<CreateChannelNamespaceRequest>,
  output: __S(34, __c4, 2) as any as S.Schema<CreateChannelNamespaceResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    ConflictException,
    InternalFailureException,
    NotFoundException,
    ServiceQuotaExceededException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateChannelNamespace",
}));

export type CreateDataSourceError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a `DataSource` object.
 */
export const createDataSource: API.OperationMethod<
  CreateDataSourceRequest,
  CreateDataSourceResponse,
  CreateDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45, __c5, 5) as any as S.Schema<CreateDataSourceRequest>,
  output: __S(47, __c5, 7) as any as S.Schema<CreateDataSourceResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataSource",
}));

export type CreateDomainNameError =
  | AccessDeniedException
  | BadRequestException
  | InternalFailureException
  | CommonErrors;
/**
 * Creates a custom `DomainName` object.
 */
export const createDomainName: API.OperationMethod<
  CreateDomainNameRequest,
  CreateDomainNameResponse,
  CreateDomainNameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48, __c6, 0) as any as S.Schema<CreateDomainNameRequest>,
  output: __S(50, __c6, 2) as any as S.Schema<CreateDomainNameResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDomainName",
}));

export type CreateFunctionError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a `Function` object.
 *
 * A function is a reusable entity. You can use multiple functions to compose the resolver
 * logic.
 */
export const createFunction: API.OperationMethod<
  CreateFunctionRequest,
  CreateFunctionResponse,
  CreateFunctionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54, __c6, 6) as any as S.Schema<CreateFunctionRequest>,
  output: __S(56, __c7, 0) as any as S.Schema<CreateFunctionResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFunction",
}));

export type CreateGraphqlApiError =
  | ApiLimitExceededException
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | LimitExceededException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a `GraphqlApi` object.
 */
export const createGraphqlApi: API.OperationMethod<
  CreateGraphqlApiRequest,
  CreateGraphqlApiResponse,
  CreateGraphqlApiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62, __c7, 6) as any as S.Schema<CreateGraphqlApiRequest>,
  output: __S(64, __c8, 0) as any as S.Schema<CreateGraphqlApiResponse>,
  errors: [
    ApiLimitExceededException,
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    LimitExceededException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGraphqlApi",
}));

export type CreateResolverError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a `Resolver` object.
 *
 * A resolver converts incoming requests into a format that a data source can understand,
 * and converts the data source's responses into GraphQL.
 */
export const createResolver: API.OperationMethod<
  CreateResolverRequest,
  CreateResolverResponse,
  CreateResolverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68, __c8, 4) as any as S.Schema<CreateResolverRequest>,
  output: __S(70, __c8, 6) as any as S.Schema<CreateResolverResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateResolver",
}));

export type CreateTypeError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a `Type` object.
 */
export const createType: API.OperationMethod<
  CreateTypeRequest,
  CreateTypeResponse,
  CreateTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71, __c8, 7) as any as S.Schema<CreateTypeRequest>,
  output: __S(73, __c9, 1) as any as S.Schema<CreateTypeResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateType",
}));

export type DeleteApiError =
  | AccessDeniedException
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes an `Api` object
 */
export const deleteApi: API.OperationMethod<
  DeleteApiRequest,
  DeleteApiResponse,
  DeleteApiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74, __c9, 2) as any as S.Schema<DeleteApiRequest>,
  output: __S(75, __c9, 3) as any as S.Schema<DeleteApiResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApi",
}));

export type DeleteApiCacheError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes an `ApiCache` object.
 */
export const deleteApiCache: API.OperationMethod<
  DeleteApiCacheRequest,
  DeleteApiCacheResponse,
  DeleteApiCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76, __c9, 4) as any as S.Schema<DeleteApiCacheRequest>,
  output: __S(77, __c9, 5) as any as S.Schema<DeleteApiCacheResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApiCache",
}));

export type DeleteApiKeyError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes an API key.
 */
export const deleteApiKey: API.OperationMethod<
  DeleteApiKeyRequest,
  DeleteApiKeyResponse,
  DeleteApiKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78, __c9, 6) as any as S.Schema<DeleteApiKeyRequest>,
  output: __S(75, __c9, 3) as any as S.Schema<DeleteApiKeyResponse>,
  errors: [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApiKey",
}));

export type DeleteChannelNamespaceError =
  | AccessDeniedException
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a `ChannelNamespace`.
 */
export const deleteChannelNamespace: API.OperationMethod<
  DeleteChannelNamespaceRequest,
  DeleteChannelNamespaceResponse,
  DeleteChannelNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79, __c9, 7) as any as S.Schema<DeleteChannelNamespaceRequest>,
  output: __S(80, __c10, 0) as any as S.Schema<DeleteChannelNamespaceResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteChannelNamespace",
}));

export type DeleteDataSourceError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a `DataSource` object.
 */
export const deleteDataSource: API.OperationMethod<
  DeleteDataSourceRequest,
  DeleteDataSourceResponse,
  DeleteDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81, __c10, 1) as any as S.Schema<DeleteDataSourceRequest>,
  output: __S(82, __c10, 2) as any as S.Schema<DeleteDataSourceResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataSource",
}));

export type DeleteDomainNameError =
  | AccessDeniedException
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | CommonErrors;
/**
 * Deletes a custom `DomainName` object.
 */
export const deleteDomainName: API.OperationMethod<
  DeleteDomainNameRequest,
  DeleteDomainNameResponse,
  DeleteDomainNameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(83, __c10, 3) as any as S.Schema<DeleteDomainNameRequest>,
  output: __S(82, __c10, 2) as any as S.Schema<DeleteDomainNameResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDomainName",
}));

export type DeleteFunctionError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a `Function`.
 */
export const deleteFunction: API.OperationMethod<
  DeleteFunctionRequest,
  DeleteFunctionResponse,
  DeleteFunctionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(84, __c10, 4) as any as S.Schema<DeleteFunctionRequest>,
  output: __S(77, __c9, 5) as any as S.Schema<DeleteFunctionResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFunction",
}));

export type DeleteGraphqlApiError =
  | AccessDeniedException
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a `GraphqlApi` object.
 */
export const deleteGraphqlApi: API.OperationMethod<
  DeleteGraphqlApiRequest,
  DeleteGraphqlApiResponse,
  DeleteGraphqlApiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(85, __c10, 5) as any as S.Schema<DeleteGraphqlApiRequest>,
  output: __S(82, __c10, 2) as any as S.Schema<DeleteGraphqlApiResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGraphqlApi",
}));

export type DeleteResolverError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a `Resolver` object.
 */
export const deleteResolver: API.OperationMethod<
  DeleteResolverRequest,
  DeleteResolverResponse,
  DeleteResolverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86, __c10, 6) as any as S.Schema<DeleteResolverRequest>,
  output: __S(77, __c9, 5) as any as S.Schema<DeleteResolverResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResolver",
}));

export type DeleteTypeError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a `Type` object.
 */
export const deleteType: API.OperationMethod<
  DeleteTypeRequest,
  DeleteTypeResponse,
  DeleteTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(87, __c10, 7) as any as S.Schema<DeleteTypeRequest>,
  output: __S(75, __c9, 3) as any as S.Schema<DeleteTypeResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteType",
}));

export type DisassociateApiError =
  | AccessDeniedException
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | CommonErrors;
/**
 * Removes an `ApiAssociation` object from a custom domain.
 */
export const disassociateApi: API.OperationMethod<
  DisassociateApiRequest,
  DisassociateApiResponse,
  DisassociateApiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(88, __c11, 0) as any as S.Schema<DisassociateApiRequest>,
  output: __S(82, __c10, 2) as any as S.Schema<DisassociateApiResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateApi",
}));

export type DisassociateMergedGraphqlApiError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes an association between a Merged API and source API using the source API's
 * identifier and the association ID.
 */
export const disassociateMergedGraphqlApi: API.OperationMethod<
  DisassociateMergedGraphqlApiRequest,
  DisassociateMergedGraphqlApiResponse,
  DisassociateMergedGraphqlApiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89, __c11, 1) as any as S.Schema<DisassociateMergedGraphqlApiRequest>,
  output: __S(90, __c11, 2) as any as S.Schema<DisassociateMergedGraphqlApiResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateMergedGraphqlApi",
}));

export type DisassociateSourceGraphqlApiError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes an association between a Merged API and source API using the Merged API's
 * identifier and the association ID.
 */
export const disassociateSourceGraphqlApi: API.OperationMethod<
  DisassociateSourceGraphqlApiRequest,
  DisassociateSourceGraphqlApiResponse,
  DisassociateSourceGraphqlApiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(91, __c11, 3) as any as S.Schema<DisassociateSourceGraphqlApiRequest>,
  output: __S(90, __c11, 2) as any as S.Schema<DisassociateSourceGraphqlApiResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateSourceGraphqlApi",
}));

export type EvaluateCodeError =
  | AccessDeniedException
  | BadRequestException
  | InternalFailureException
  | CommonErrors;
/**
 * Evaluates the given code and returns the response. The code definition requirements
 * depend on the specified runtime. For `APPSYNC_JS` runtimes, the code defines the
 * request and response functions. The request function takes the incoming request after a
 * GraphQL operation is parsed and converts it into a request configuration for the selected
 * data source operation. The response function interprets responses from the data source and
 * maps it to the shape of the GraphQL field output type.
 */
export const evaluateCode: API.OperationMethod<
  EvaluateCodeRequest,
  EvaluateCodeResponse,
  EvaluateCodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(92, __c11, 4) as any as S.Schema<EvaluateCodeRequest>,
  output: __S(97, __c12, 1) as any as S.Schema<EvaluateCodeResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EvaluateCode",
}));

export type EvaluateMappingTemplateError =
  | AccessDeniedException
  | BadRequestException
  | InternalFailureException
  | CommonErrors;
/**
 * Evaluates a given template and returns the response. The mapping template can be a
 * request or response template.
 *
 * Request templates take the incoming request after a GraphQL operation is parsed and
 * convert it into a request configuration for the selected data source operation. Response
 * templates interpret responses from the data source and map it to the shape of the GraphQL
 * field output type.
 *
 * Mapping templates are written in the Apache Velocity Template Language (VTL).
 */
export const evaluateMappingTemplate: API.OperationMethod<
  EvaluateMappingTemplateRequest,
  EvaluateMappingTemplateResponse,
  EvaluateMappingTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(98, __c12, 2) as any as S.Schema<EvaluateMappingTemplateRequest>,
  output: __S(100, __c12, 4) as any as S.Schema<EvaluateMappingTemplateResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EvaluateMappingTemplate",
}));

export type FlushApiCacheError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Flushes an `ApiCache` object.
 */
export const flushApiCache: API.OperationMethod<
  FlushApiCacheRequest,
  FlushApiCacheResponse,
  FlushApiCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(101, __c12, 5) as any as S.Schema<FlushApiCacheRequest>,
  output: __S(75, __c9, 3) as any as S.Schema<FlushApiCacheResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "FlushApiCache",
}));

export type GetApiError =
  | AccessDeniedException
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Retrieves an `Api` object.
 */
export const getApi: API.OperationMethod<
  GetApiRequest,
  GetApiResponse,
  GetApiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(102, __c12, 6) as any as S.Schema<GetApiRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<GetApiResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApi",
}));

export type GetApiAssociationError =
  | AccessDeniedException
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | CommonErrors;
/**
 * Retrieves an `ApiAssociation` object.
 */
export const getApiAssociation: API.OperationMethod<
  GetApiAssociationRequest,
  GetApiAssociationResponse,
  GetApiAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(103, __c12, 7) as any as S.Schema<GetApiAssociationRequest>,
  output: __S(104, __c13, 0) as any as S.Schema<GetApiAssociationResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalFailureException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApiAssociation",
}));

export type GetApiCacheError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Retrieves an `ApiCache` object.
 */
export const getApiCache: API.OperationMethod<
  GetApiCacheRequest,
  GetApiCacheResponse,
  GetApiCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(105, __c13, 1) as any as S.Schema<GetApiCacheRequest>,
  output: __S(24, __c3, 0) as any as S.Schema<GetApiCacheResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApiCache",
}));

export type GetChannelNamespaceError =
  | AccessDeniedException
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Retrieves the channel namespace for a specified `Api`.
 */
export const getChannelNamespace: API.OperationMethod<
  GetChannelNamespaceRequest,
  GetChannelNamespaceResponse,
  GetChannelNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106, __c13, 2) as any as S.Schema<GetChannelNamespaceRequest>,
  output: __S(34, __c4, 2) as any as S.Schema<GetChannelNamespaceResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetChannelNamespace",
}));

export type GetDataSourceError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Retrieves a `DataSource` object.
 */
export const getDataSource: API.OperationMethod<
  GetDataSourceRequest,
  GetDataSourceResponse,
  GetDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(107, __c13, 3) as any as S.Schema<GetDataSourceRequest>,
  output: __S(47, __c5, 7) as any as S.Schema<GetDataSourceResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataSource",
}));

export type GetDataSourceIntrospectionError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | CommonErrors;
/**
 * Retrieves the record of an existing introspection. If the retrieval is successful, the
 * result of the instrospection will also be returned. If the retrieval fails the operation,
 * an error message will be returned instead.
 */
export const getDataSourceIntrospection: API.OperationMethod<
  GetDataSourceIntrospectionRequest,
  GetDataSourceIntrospectionResponse,
  GetDataSourceIntrospectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(108, __c13, 4) as any as S.Schema<GetDataSourceIntrospectionRequest>,
  output: __S(117, __c14, 5) as any as S.Schema<GetDataSourceIntrospectionResponse>,
  errors: [BadRequestException, InternalFailureException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataSourceIntrospection",
}));

export type GetDomainNameError =
  | AccessDeniedException
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | CommonErrors;
/**
 * Retrieves a custom `DomainName` object.
 */
export const getDomainName: API.OperationMethod<
  GetDomainNameRequest,
  GetDomainNameResponse,
  GetDomainNameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(118, __c14, 6) as any as S.Schema<GetDomainNameRequest>,
  output: __S(50, __c6, 2) as any as S.Schema<GetDomainNameResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalFailureException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDomainName",
}));

export type GetFunctionError =
  | ConcurrentModificationException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Get a `Function`.
 */
export const getFunction: API.OperationMethod<
  GetFunctionRequest,
  GetFunctionResponse,
  GetFunctionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(119, __c14, 7) as any as S.Schema<GetFunctionRequest>,
  output: __S(56, __c7, 0) as any as S.Schema<GetFunctionResponse>,
  errors: [ConcurrentModificationException, NotFoundException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFunction",
}));

export type GetGraphqlApiError =
  | AccessDeniedException
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Retrieves a `GraphqlApi` object.
 */
export const getGraphqlApi: API.OperationMethod<
  GetGraphqlApiRequest,
  GetGraphqlApiResponse,
  GetGraphqlApiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120, __c15, 0) as any as S.Schema<GetGraphqlApiRequest>,
  output: __S(64, __c8, 0) as any as S.Schema<GetGraphqlApiResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGraphqlApi",
}));

export type GetGraphqlApiEnvironmentVariablesError =
  | AccessDeniedException
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Retrieves the list of environmental variable key-value pairs associated with an API by
 * its ID value.
 */
export const getGraphqlApiEnvironmentVariables: API.OperationMethod<
  GetGraphqlApiEnvironmentVariablesRequest,
  GetGraphqlApiEnvironmentVariablesResponse,
  GetGraphqlApiEnvironmentVariablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(121, __c15, 1) as any as S.Schema<GetGraphqlApiEnvironmentVariablesRequest>,
  output: __S(122, __c15, 2) as any as S.Schema<GetGraphqlApiEnvironmentVariablesResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGraphqlApiEnvironmentVariables",
}));

export type GetIntrospectionSchemaError =
  | GraphQLSchemaException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Retrieves the introspection schema for a GraphQL API.
 */
export const getIntrospectionSchema: API.OperationMethod<
  GetIntrospectionSchemaRequest,
  GetIntrospectionSchemaResponse,
  GetIntrospectionSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(123, __c15, 3) as any as S.Schema<GetIntrospectionSchemaRequest>,
  output: __S(124, __c15, 4) as any as S.Schema<GetIntrospectionSchemaResponse>,
  errors: [
    GraphQLSchemaException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIntrospectionSchema",
}));

export type GetResolverError =
  | ConcurrentModificationException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Retrieves a `Resolver` object.
 */
export const getResolver: API.OperationMethod<
  GetResolverRequest,
  GetResolverResponse,
  GetResolverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(125, __c15, 5) as any as S.Schema<GetResolverRequest>,
  output: __S(70, __c8, 6) as any as S.Schema<GetResolverResponse>,
  errors: [ConcurrentModificationException, NotFoundException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResolver",
}));

export type GetSchemaCreationStatusError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Retrieves the current status of a schema creation operation.
 */
export const getSchemaCreationStatus: API.OperationMethod<
  GetSchemaCreationStatusRequest,
  GetSchemaCreationStatusResponse,
  GetSchemaCreationStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126, __c15, 6) as any as S.Schema<GetSchemaCreationStatusRequest>,
  output: __S(127, __c15, 7) as any as S.Schema<GetSchemaCreationStatusResponse>,
  errors: [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSchemaCreationStatus",
}));

export type GetSourceApiAssociationError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Retrieves a `SourceApiAssociation` object.
 */
export const getSourceApiAssociation: API.OperationMethod<
  GetSourceApiAssociationRequest,
  GetSourceApiAssociationResponse,
  GetSourceApiAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(128, __c16, 0) as any as S.Schema<GetSourceApiAssociationRequest>,
  output: __S(6, __c0, 6) as any as S.Schema<GetSourceApiAssociationResponse>,
  errors: [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSourceApiAssociation",
}));

export type GetTypeError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Retrieves a `Type` object.
 */
export const getType: API.OperationMethod<
  GetTypeRequest,
  GetTypeResponse,
  GetTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(129, __c16, 1) as any as S.Schema<GetTypeRequest>,
  output: __S(73, __c9, 1) as any as S.Schema<GetTypeResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetType",
}));

export type ListApiKeysError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the API keys for a given API.
 *
 * API keys are deleted automatically 60 days after they expire. However, they may still
 * be included in the response until they have actually been deleted. You can safely call
 * `DeleteApiKey` to manually delete a key before it's automatically
 * deleted.
 */
export const listApiKeys: API.PaginatedOperationMethod<
  ListApiKeysRequest,
  ListApiKeysResponse,
  ListApiKeysError,
  Credentials | HttpClient.HttpClient,
  ApiKey
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(130, __c16, 2) as any as S.Schema<ListApiKeysRequest>,
  output: __S(132, __c16, 4) as any as S.Schema<ListApiKeysResponse>,
  errors: [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApiKeys",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "apiKeys",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListApisError =
  | BadRequestException
  | InternalFailureException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the APIs in your AppSync account.
 *
 * `ListApis` returns only the high level API details. For more detailed
 * information about an API, use `GetApi`.
 */
export const listApis: API.PaginatedOperationMethod<
  ListApisRequest,
  ListApisResponse,
  ListApisError,
  Credentials | HttpClient.HttpClient,
  Api
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(133, __c16, 5) as any as S.Schema<ListApisRequest>,
  output: __S(135, __c16, 7) as any as S.Schema<ListApisResponse>,
  errors: [BadRequestException, InternalFailureException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApis",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "apis",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListChannelNamespacesError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the channel namespaces for a specified `Api`.
 *
 * `ListChannelNamespaces` returns only high level details for the channel
 * namespace. To retrieve code handlers, use `GetChannelNamespace`.
 */
export const listChannelNamespaces: API.PaginatedOperationMethod<
  ListChannelNamespacesRequest,
  ListChannelNamespacesResponse,
  ListChannelNamespacesError,
  Credentials | HttpClient.HttpClient,
  ChannelNamespace
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(136, __c17, 0) as any as S.Schema<ListChannelNamespacesRequest>,
  output: __S(138, __c17, 2) as any as S.Schema<ListChannelNamespacesResponse>,
  errors: [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChannelNamespaces",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "channelNamespaces",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataSourcesError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the data sources for a given API.
 */
export const listDataSources: API.PaginatedOperationMethod<
  ListDataSourcesRequest,
  ListDataSourcesResponse,
  ListDataSourcesError,
  Credentials | HttpClient.HttpClient,
  DataSource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(139, __c17, 3) as any as S.Schema<ListDataSourcesRequest>,
  output: __S(141, __c17, 5) as any as S.Schema<ListDataSourcesResponse>,
  errors: [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataSources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dataSources",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDomainNamesError =
  | AccessDeniedException
  | BadRequestException
  | InternalFailureException
  | CommonErrors;
/**
 * Lists multiple custom domain names.
 */
export const listDomainNames: API.PaginatedOperationMethod<
  ListDomainNamesRequest,
  ListDomainNamesResponse,
  ListDomainNamesError,
  Credentials | HttpClient.HttpClient,
  DomainNameConfig
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(142, __c17, 6) as any as S.Schema<ListDomainNamesRequest>,
  output: __S(144, __c18, 0) as any as S.Schema<ListDomainNamesResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomainNames",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "domainNameConfigs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFunctionsError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * List multiple functions.
 */
export const listFunctions: API.PaginatedOperationMethod<
  ListFunctionsRequest,
  ListFunctionsResponse,
  ListFunctionsError,
  Credentials | HttpClient.HttpClient,
  FunctionConfiguration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(145, __c18, 1) as any as S.Schema<ListFunctionsRequest>,
  output: __S(147, __c18, 3) as any as S.Schema<ListFunctionsResponse>,
  errors: [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFunctions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "functions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListGraphqlApisError =
  | BadRequestException
  | InternalFailureException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists your GraphQL APIs.
 */
export const listGraphqlApis: API.PaginatedOperationMethod<
  ListGraphqlApisRequest,
  ListGraphqlApisResponse,
  ListGraphqlApisError,
  Credentials | HttpClient.HttpClient,
  GraphqlApi
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(148, __c18, 4) as any as S.Schema<ListGraphqlApisRequest>,
  output: __S(150, __c18, 6) as any as S.Schema<ListGraphqlApisResponse>,
  errors: [BadRequestException, InternalFailureException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGraphqlApis",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "graphqlApis",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListResolversError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the resolvers for a given API and type.
 */
export const listResolvers: API.PaginatedOperationMethod<
  ListResolversRequest,
  ListResolversResponse,
  ListResolversError,
  Credentials | HttpClient.HttpClient,
  Resolver
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(151, __c18, 7) as any as S.Schema<ListResolversRequest>,
  output: __S(153, __c19, 1) as any as S.Schema<ListResolversResponse>,
  errors: [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResolvers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "resolvers",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListResolversByFunctionError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * List the resolvers that are associated with a specific function.
 */
export const listResolversByFunction: API.PaginatedOperationMethod<
  ListResolversByFunctionRequest,
  ListResolversByFunctionResponse,
  ListResolversByFunctionError,
  Credentials | HttpClient.HttpClient,
  Resolver
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(154, __c19, 2) as any as S.Schema<ListResolversByFunctionRequest>,
  output: __S(155, __c19, 3) as any as S.Schema<ListResolversByFunctionResponse>,
  errors: [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResolversByFunction",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "resolvers",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSourceApiAssociationsError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the `SourceApiAssociationSummary` data.
 */
export const listSourceApiAssociations: API.PaginatedOperationMethod<
  ListSourceApiAssociationsRequest,
  ListSourceApiAssociationsResponse,
  ListSourceApiAssociationsError,
  Credentials | HttpClient.HttpClient,
  SourceApiAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(156, __c19, 4) as any as S.Schema<ListSourceApiAssociationsRequest>,
  output: __S(159, __c19, 7) as any as S.Schema<ListSourceApiAssociationsResponse>,
  errors: [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSourceApiAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "sourceApiAssociationSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the tags for a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(160, __c20, 0) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(161, __c20, 1) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTypesError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the types for a given API.
 */
export const listTypes: API.PaginatedOperationMethod<
  ListTypesRequest,
  ListTypesResponse,
  ListTypesError,
  Credentials | HttpClient.HttpClient,
  Type
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(162, __c20, 2) as any as S.Schema<ListTypesRequest>,
  output: __S(164, __c20, 4) as any as S.Schema<ListTypesResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTypes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "types",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTypesByAssociationError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists `Type` objects by the source API association ID.
 */
export const listTypesByAssociation: API.PaginatedOperationMethod<
  ListTypesByAssociationRequest,
  ListTypesByAssociationResponse,
  ListTypesByAssociationError,
  Credentials | HttpClient.HttpClient,
  Type
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(165, __c20, 5) as any as S.Schema<ListTypesByAssociationRequest>,
  output: __S(166, __c20, 6) as any as S.Schema<ListTypesByAssociationResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTypesByAssociation",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "types",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutGraphqlApiEnvironmentVariablesError =
  | AccessDeniedException
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a list of environmental variables in an API by its ID value.
 *
 * When creating an environmental variable, it must follow the constraints below:
 *
 * - Both JavaScript and VTL templates support environmental variables.
 *
 * - Environmental variables are not evaluated before function invocation.
 *
 * - Environmental variables only support string values.
 *
 * - Any defined value in an environmental variable is considered a string literal
 * and not expanded.
 *
 * - Variable evaluations should ideally be performed in the function
 * code.
 *
 * When creating an environmental variable key-value pair, it must follow the additional
 * constraints below:
 *
 * - Keys must begin with a letter.
 *
 * - Keys must be at least two characters long.
 *
 * - Keys can only contain letters, numbers, and the underscore character
 * (_).
 *
 * - Values can be up to 512 characters long.
 *
 * - You can configure up to 50 key-value pairs in a GraphQL API.
 *
 * You can create a list of environmental variables by adding it to the
 * `environmentVariables` payload as a list in the format
 * `{"key1":"value1","key2":"value2", ...}`. Note that each call of the
 * `PutGraphqlApiEnvironmentVariables` action will result in the overwriting of
 * the existing environmental variable list of that API. This means the existing environmental
 * variables will be lost. To avoid this, you must include all existing and new environmental
 * variables in the list each time you call this action.
 */
export const putGraphqlApiEnvironmentVariables: API.OperationMethod<
  PutGraphqlApiEnvironmentVariablesRequest,
  PutGraphqlApiEnvironmentVariablesResponse,
  PutGraphqlApiEnvironmentVariablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(167, __c20, 7) as any as S.Schema<PutGraphqlApiEnvironmentVariablesRequest>,
  output: __S(122, __c15, 2) as any as S.Schema<PutGraphqlApiEnvironmentVariablesResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutGraphqlApiEnvironmentVariables",
}));

export type StartDataSourceIntrospectionError =
  | BadRequestException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a new introspection. Returns the `introspectionId` of the new
 * introspection after its creation.
 */
export const startDataSourceIntrospection: API.OperationMethod<
  StartDataSourceIntrospectionRequest,
  StartDataSourceIntrospectionResponse,
  StartDataSourceIntrospectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(169, __c21, 1) as any as S.Schema<StartDataSourceIntrospectionRequest>,
  output: __S(170, __c21, 2) as any as S.Schema<StartDataSourceIntrospectionResponse>,
  errors: [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDataSourceIntrospection",
}));

export type StartSchemaCreationError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Adds a new schema to your GraphQL API.
 *
 * This operation is asynchronous. Use to
 * determine when it has completed.
 */
export const startSchemaCreation: API.OperationMethod<
  StartSchemaCreationRequest,
  StartSchemaCreationResponse,
  StartSchemaCreationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(171, __c21, 3) as any as S.Schema<StartSchemaCreationRequest>,
  output: __S(172, __c21, 4) as any as S.Schema<StartSchemaCreationResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartSchemaCreation",
}));

export type StartSchemaMergeError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Initiates a merge operation. Returns a status that shows the result of the merge
 * operation.
 */
export const startSchemaMerge: API.OperationMethod<
  StartSchemaMergeRequest,
  StartSchemaMergeResponse,
  StartSchemaMergeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(173, __c21, 5) as any as S.Schema<StartSchemaMergeRequest>,
  output: __S(174, __c21, 6) as any as S.Schema<StartSchemaMergeResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartSchemaMerge",
}));

export type TagResourceError =
  | AccessDeniedException
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Tags a resource with user-supplied tags.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(175, __c21, 7) as any as S.Schema<TagResourceRequest>,
  output: __S(75, __c9, 3) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Untags a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(176, __c22, 0) as any as S.Schema<UntagResourceRequest>,
  output: __S(75, __c9, 3) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateApiError =
  | AccessDeniedException
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates an `Api`.
 */
export const updateApi: API.OperationMethod<
  UpdateApiRequest,
  UpdateApiResponse,
  UpdateApiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(177, __c22, 1) as any as S.Schema<UpdateApiRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<UpdateApiResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApi",
}));

export type UpdateApiCacheError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates the cache for the GraphQL API.
 */
export const updateApiCache: API.OperationMethod<
  UpdateApiCacheRequest,
  UpdateApiCacheResponse,
  UpdateApiCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(178, __c22, 2) as any as S.Schema<UpdateApiCacheRequest>,
  output: __S(24, __c3, 0) as any as S.Schema<UpdateApiCacheResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApiCache",
}));

export type UpdateApiKeyError =
  | ApiKeyValidityOutOfBoundsException
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates an API key. You can update the key as long as it's not deleted.
 */
export const updateApiKey: API.OperationMethod<
  UpdateApiKeyRequest,
  UpdateApiKeyResponse,
  UpdateApiKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(179, __c22, 3) as any as S.Schema<UpdateApiKeyRequest>,
  output: __S(27, __c3, 3) as any as S.Schema<UpdateApiKeyResponse>,
  errors: [
    ApiKeyValidityOutOfBoundsException,
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApiKey",
}));

export type UpdateChannelNamespaceError =
  | AccessDeniedException
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates a `ChannelNamespace` associated with an `Api`.
 */
export const updateChannelNamespace: API.OperationMethod<
  UpdateChannelNamespaceRequest,
  UpdateChannelNamespaceResponse,
  UpdateChannelNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(180, __c22, 4) as any as S.Schema<UpdateChannelNamespaceRequest>,
  output: __S(34, __c4, 2) as any as S.Schema<UpdateChannelNamespaceResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateChannelNamespace",
}));

export type UpdateDataSourceError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates a `DataSource` object.
 */
export const updateDataSource: API.OperationMethod<
  UpdateDataSourceRequest,
  UpdateDataSourceResponse,
  UpdateDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(181, __c22, 5) as any as S.Schema<UpdateDataSourceRequest>,
  output: __S(47, __c5, 7) as any as S.Schema<UpdateDataSourceResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDataSource",
}));

export type UpdateDomainNameError =
  | AccessDeniedException
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | CommonErrors;
/**
 * Updates a custom `DomainName` object.
 */
export const updateDomainName: API.OperationMethod<
  UpdateDomainNameRequest,
  UpdateDomainNameResponse,
  UpdateDomainNameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182, __c22, 6) as any as S.Schema<UpdateDomainNameRequest>,
  output: __S(50, __c6, 2) as any as S.Schema<UpdateDomainNameResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDomainName",
}));

export type UpdateFunctionError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates a `Function` object.
 */
export const updateFunction: API.OperationMethod<
  UpdateFunctionRequest,
  UpdateFunctionResponse,
  UpdateFunctionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(183, __c22, 7) as any as S.Schema<UpdateFunctionRequest>,
  output: __S(56, __c7, 0) as any as S.Schema<UpdateFunctionResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFunction",
}));

export type UpdateGraphqlApiError =
  | AccessDeniedException
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates a `GraphqlApi` object.
 */
export const updateGraphqlApi: API.OperationMethod<
  UpdateGraphqlApiRequest,
  UpdateGraphqlApiResponse,
  UpdateGraphqlApiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(184, __c23, 0) as any as S.Schema<UpdateGraphqlApiRequest>,
  output: __S(64, __c8, 0) as any as S.Schema<UpdateGraphqlApiResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGraphqlApi",
}));

export type UpdateResolverError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates a `Resolver` object.
 */
export const updateResolver: API.OperationMethod<
  UpdateResolverRequest,
  UpdateResolverResponse,
  UpdateResolverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(185, __c23, 1) as any as S.Schema<UpdateResolverRequest>,
  output: __S(70, __c8, 6) as any as S.Schema<UpdateResolverResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateResolver",
}));

export type UpdateSourceApiAssociationError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates some of the configuration choices of a particular source API association.
 */
export const updateSourceApiAssociation: API.OperationMethod<
  UpdateSourceApiAssociationRequest,
  UpdateSourceApiAssociationResponse,
  UpdateSourceApiAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186, __c23, 2) as any as S.Schema<UpdateSourceApiAssociationRequest>,
  output: __S(6, __c0, 6) as any as S.Schema<UpdateSourceApiAssociationResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSourceApiAssociation",
}));

export type UpdateTypeError =
  | BadRequestException
  | ConcurrentModificationException
  | InternalFailureException
  | NotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates a `Type` object.
 */
export const updateType: API.OperationMethod<
  UpdateTypeRequest,
  UpdateTypeResponse,
  UpdateTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(187, __c23, 3) as any as S.Schema<UpdateTypeRequest>,
  output: __S(73, __c9, 1) as any as S.Schema<UpdateTypeResponse>,
  errors: [
    BadRequestException,
    ConcurrentModificationException,
    InternalFailureException,
    NotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateType",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ domainName: S.String.pipe(T.HttpLabel("domainName")), apiId: S.String }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/domainnames/{domainName}/apiassociation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AssociateApiRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainName: S.optional(S.String),
          apiId: S.optional(S.String),
          associationStatus: S.optional(S.String),
          deploymentDetail: S.optional(S.String),
        }),
      ).annotate({ identifier: "ApiAssociation" });
    case 2:
      return S.suspend(() =>
        S.Struct({ apiAssociation: S.optional(__S(1, __c0, 1)) }).pipe(ns),
      ).annotate({ identifier: "AssociateApiResponse" });
    case 3:
      return S.suspend(() => S.Struct({ mergeType: S.optional(S.String) })).annotate({
        identifier: "SourceApiAssociationConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sourceApiIdentifier: S.String.pipe(T.HttpLabel("sourceApiIdentifier")),
          mergedApiIdentifier: S.String,
          description: S.optional(S.String),
          sourceApiAssociationConfig: S.optional(__S(3, __c0, 3)),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateMergedGraphqlApiRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          associationId: S.optional(S.String),
          associationArn: S.optional(S.String),
          sourceApiId: S.optional(S.String),
          sourceApiArn: S.optional(S.String),
          mergedApiArn: S.optional(S.String),
          mergedApiId: S.optional(S.String),
          description: S.optional(S.String),
          sourceApiAssociationConfig: S.optional(__S(3, __c0, 3)),
          sourceApiAssociationStatus: S.optional(S.String),
          sourceApiAssociationStatusDetail: S.optional(S.String),
          lastSuccessfulMergeDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SourceApiAssociation" });
    case 6:
      return S.suspend(() =>
        S.Struct({ sourceApiAssociation: S.optional(__S(5, __c0, 5)) }).pipe(ns),
      ).annotate({
        identifier: "AssociateMergedGraphqlApiResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          mergedApiIdentifier: S.String.pipe(T.HttpLabel("mergedApiIdentifier")),
          sourceApiIdentifier: S.String,
          description: S.optional(S.String),
          sourceApiAssociationConfig: S.optional(__S(3, __c0, 3)),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateSourceGraphqlApiRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          userPoolId: S.String,
          awsRegion: S.String,
          appIdClientRegex: S.optional(S.String),
        }),
      ).annotate({ identifier: "CognitoConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          issuer: S.String,
          clientId: S.optional(S.String),
          iatTTL: S.optional(S.Number),
          authTTL: S.optional(S.Number),
        }),
      ).annotate({ identifier: "OpenIDConnectConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          authorizerResultTtlInSeconds: S.optional(S.Number),
          authorizerUri: S.String,
          identityValidationExpression: S.optional(S.String),
        }),
      ).annotate({ identifier: "LambdaAuthorizerConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          authType: S.String,
          cognitoConfig: S.optional(__S(9, __c1, 1)),
          openIDConnectConfig: S.optional(__S(10, __c1, 2)),
          lambdaAuthorizerConfig: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({ identifier: "AuthProvider" });
    case 5:
      return S.Array(__S(12, __c1, 4));
    case 6:
      return S.suspend(() => S.Struct({ authType: S.String })).annotate({
        identifier: "AuthMode",
      });
    case 7:
      return S.Array(__S(14, __c1, 6));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ logLevel: S.String, cloudWatchLogsRoleArn: S.String }),
      ).annotate({ identifier: "EventLogConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          authProviders: __S(13, __c1, 5),
          connectionAuthModes: __S(15, __c1, 7),
          defaultPublishAuthModes: __S(15, __c1, 7),
          defaultSubscribeAuthModes: __S(15, __c1, 7),
          logConfig: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({ identifier: "EventConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          ownerContact: S.optional(S.String),
          tags: S.optional(__S(8, __c1, 0)),
          eventConfig: __S(17, __c2, 1),
        }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/v2/apis" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateApiRequest" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          apiId: S.optional(S.String),
          name: S.optional(S.String),
          ownerContact: S.optional(S.String),
          tags: S.optional(__S(8, __c1, 0)),
          dns: S.optional(__S(19, __c2, 3)),
          apiArn: S.optional(S.String),
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          xrayEnabled: S.optional(S.Boolean),
          wafWebAclArn: S.optional(S.String),
          eventConfig: S.optional(__S(17, __c2, 1)),
        }),
      ).annotate({ identifier: "Api" });
    case 5:
      return S.suspend(() => S.Struct({ api: S.optional(__S(20, __c2, 4)) }).pipe(ns)).annotate({
        identifier: "CreateApiResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          ttl: S.Number,
          transitEncryptionEnabled: S.optional(S.Boolean),
          atRestEncryptionEnabled: S.optional(S.Boolean),
          apiCachingBehavior: S.String,
          type: S.String,
          healthMetricsConfig: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/apis/{apiId}/ApiCaches" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateApiCacheRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ttl: S.optional(S.Number),
          apiCachingBehavior: S.optional(S.String),
          transitEncryptionEnabled: S.optional(S.Boolean),
          atRestEncryptionEnabled: S.optional(S.Boolean),
          type: S.optional(S.String),
          status: S.optional(S.String),
          healthMetricsConfig: S.optional(S.String),
        }),
      ).annotate({ identifier: "ApiCache" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ apiCache: S.optional(__S(23, __c2, 7)) }).pipe(ns),
      ).annotate({
        identifier: "CreateApiCacheResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          description: S.optional(S.String),
          expires: S.optional(S.Number),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/apis/{apiId}/apikeys" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateApiKeyRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          description: S.optional(S.String),
          expires: S.optional(S.Number),
          deletes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ApiKey" });
    case 3:
      return S.suspend(() => S.Struct({ apiKey: S.optional(__S(26, __c3, 2)) }).pipe(ns)).annotate({
        identifier: "CreateApiKeyResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ invokeType: S.optional(S.String) })).annotate({
        identifier: "LambdaConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ dataSourceName: S.String, lambdaConfig: S.optional(__S(28, __c3, 4)) }),
      ).annotate({ identifier: "Integration" });
    case 6:
      return S.suspend(() =>
        S.Struct({ behavior: S.String, integration: __S(29, __c3, 5) }),
      ).annotate({ identifier: "HandlerConfig" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          onPublish: S.optional(__S(30, __c3, 6)),
          onSubscribe: S.optional(__S(30, __c3, 6)),
        }),
      ).annotate({ identifier: "HandlerConfigs" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          name: S.String,
          subscribeAuthModes: S.optional(__S(15, __c1, 7)),
          publishAuthModes: S.optional(__S(15, __c1, 7)),
          codeHandlers: S.optional(S.String),
          tags: S.optional(__S(8, __c1, 0)),
          handlerConfigs: S.optional(__S(31, __c3, 7)),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v2/apis/{apiId}/channelNamespaces" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateChannelNamespaceRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          apiId: S.optional(S.String),
          name: S.optional(S.String),
          subscribeAuthModes: S.optional(__S(15, __c1, 7)),
          publishAuthModes: S.optional(__S(15, __c1, 7)),
          codeHandlers: S.optional(S.String),
          tags: S.optional(__S(8, __c1, 0)),
          channelNamespaceArn: S.optional(S.String),
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModified: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          handlerConfigs: S.optional(__S(31, __c3, 7)),
        }),
      ).annotate({ identifier: "ChannelNamespace" });
    case 2:
      return S.suspend(() =>
        S.Struct({ channelNamespace: S.optional(__S(33, __c4, 1)) }).pipe(ns),
      ).annotate({
        identifier: "CreateChannelNamespaceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          baseTableTTL: S.optional(S.Number),
          deltaSyncTableName: S.optional(S.String),
          deltaSyncTableTTL: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DeltaSyncConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          tableName: S.String,
          awsRegion: S.String,
          useCallerCredentials: S.optional(S.Boolean),
          deltaSyncConfig: S.optional(__S(35, __c4, 3)),
          versioned: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DynamodbDataSourceConfig" });
    case 5:
      return S.suspend(() => S.Struct({ lambdaFunctionArn: S.String })).annotate({
        identifier: "LambdaDataSourceConfig",
      });
    case 6:
      return S.suspend(() => S.Struct({ endpoint: S.String, awsRegion: S.String })).annotate({
        identifier: "ElasticsearchDataSourceConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ signingRegion: S.optional(S.String), signingServiceName: S.optional(S.String) }),
      ).annotate({ identifier: "AwsIamConfig" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ authorizationType: S.String, awsIamConfig: S.optional(__S(39, __c4, 7)) }),
      ).annotate({ identifier: "AuthorizationConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          endpoint: S.optional(S.String),
          authorizationConfig: S.optional(__S(40, __c5, 0)),
        }),
      ).annotate({ identifier: "HttpDataSourceConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          awsRegion: S.optional(S.String),
          dbClusterIdentifier: S.optional(S.String),
          databaseName: S.optional(S.String),
          schema: S.optional(S.String),
          awsSecretStoreArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "RdsHttpEndpointConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          relationalDatabaseSourceType: S.optional(S.String),
          rdsHttpEndpointConfig: S.optional(__S(42, __c5, 2)),
        }),
      ).annotate({
        identifier: "RelationalDatabaseDataSourceConfig",
      });
    case 4:
      return S.suspend(() => S.Struct({ eventBusArn: S.String })).annotate({
        identifier: "EventBridgeDataSourceConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          name: S.String,
          description: S.optional(S.String),
          type: S.String,
          serviceRoleArn: S.optional(S.String),
          dynamodbConfig: S.optional(__S(36, __c4, 4)),
          lambdaConfig: S.optional(__S(37, __c4, 5)),
          elasticsearchConfig: S.optional(__S(38, __c4, 6)),
          openSearchServiceConfig: S.optional(__S(38, __c4, 6)),
          httpConfig: S.optional(__S(41, __c5, 1)),
          relationalDatabaseConfig: S.optional(__S(43, __c5, 3)),
          eventBridgeConfig: S.optional(__S(44, __c5, 4)),
          metricsConfig: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/apis/{apiId}/datasources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateDataSourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          dataSourceArn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          type: S.optional(S.String),
          serviceRoleArn: S.optional(S.String),
          dynamodbConfig: S.optional(__S(36, __c4, 4)),
          lambdaConfig: S.optional(__S(37, __c4, 5)),
          elasticsearchConfig: S.optional(__S(38, __c4, 6)),
          openSearchServiceConfig: S.optional(__S(38, __c4, 6)),
          httpConfig: S.optional(__S(41, __c5, 1)),
          relationalDatabaseConfig: S.optional(__S(43, __c5, 3)),
          eventBridgeConfig: S.optional(__S(44, __c5, 4)),
          metricsConfig: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataSource" });
    case 7:
      return S.suspend(() =>
        S.Struct({ dataSource: S.optional(__S(46, __c5, 6)) }).pipe(ns),
      ).annotate({
        identifier: "CreateDataSourceResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainName: S.String,
          certificateArn: S.String,
          description: S.optional(S.String),
          tags: S.optional(__S(8, __c1, 0)),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/domainnames" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateDomainNameRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainName: S.optional(S.String),
          description: S.optional(S.String),
          certificateArn: S.optional(S.String),
          appsyncDomainName: S.optional(S.String),
          hostedZoneId: S.optional(S.String),
          tags: S.optional(__S(8, __c1, 0)),
          domainNameArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DomainNameConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({ domainNameConfig: S.optional(__S(49, __c6, 1)) }).pipe(ns),
      ).annotate({ identifier: "CreateDomainNameResponse" });
    case 3:
      return S.suspend(() => S.Struct({ lambdaConflictHandlerArn: S.optional(S.String) })).annotate(
        {
          identifier: "LambdaConflictHandlerConfig",
        },
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          conflictHandler: S.optional(S.String),
          conflictDetection: S.optional(S.String),
          lambdaConflictHandlerConfig: S.optional(__S(51, __c6, 3)),
        }),
      ).annotate({ identifier: "SyncConfig" });
    case 5:
      return S.suspend(() => S.Struct({ name: S.String, runtimeVersion: S.String })).annotate({
        identifier: "AppSyncRuntime",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          name: S.String,
          description: S.optional(S.String),
          dataSourceName: S.String,
          requestMappingTemplate: S.optional(S.String),
          responseMappingTemplate: S.optional(S.String),
          functionVersion: S.optional(S.String),
          syncConfig: S.optional(__S(52, __c6, 4)),
          maxBatchSize: S.optional(S.Number),
          runtime: S.optional(__S(53, __c6, 5)),
          code: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/apis/{apiId}/functions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateFunctionRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          functionId: S.optional(S.String),
          functionArn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          dataSourceName: S.optional(S.String),
          requestMappingTemplate: S.optional(S.String),
          responseMappingTemplate: S.optional(S.String),
          functionVersion: S.optional(S.String),
          syncConfig: S.optional(__S(52, __c6, 4)),
          maxBatchSize: S.optional(S.Number),
          runtime: S.optional(__S(53, __c6, 5)),
          code: S.optional(S.String),
        }),
      ).annotate({ identifier: "FunctionConfiguration" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ functionConfiguration: S.optional(__S(55, __c6, 7)) }).pipe(ns),
      ).annotate({ identifier: "CreateFunctionResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          fieldLogLevel: S.String,
          cloudWatchLogsRoleArn: S.String,
          excludeVerboseContent: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "LogConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          userPoolId: S.String,
          awsRegion: S.String,
          defaultAction: S.String,
          appIdClientRegex: S.optional(S.String),
        }),
      ).annotate({ identifier: "UserPoolConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          authenticationType: S.optional(S.String),
          openIDConnectConfig: S.optional(__S(10, __c1, 2)),
          userPoolConfig: S.optional(__S(9, __c1, 1)),
          lambdaAuthorizerConfig: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({
        identifier: "AdditionalAuthenticationProvider",
      });
    case 4:
      return S.Array(__S(59, __c7, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          resolverLevelMetricsBehavior: S.String,
          dataSourceLevelMetricsBehavior: S.String,
          operationLevelMetricsConfig: S.String,
        }),
      ).annotate({ identifier: "EnhancedMetricsConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          logConfig: S.optional(__S(57, __c7, 1)),
          authenticationType: S.String,
          userPoolConfig: S.optional(__S(58, __c7, 2)),
          openIDConnectConfig: S.optional(__S(10, __c1, 2)),
          tags: S.optional(__S(8, __c1, 0)),
          additionalAuthenticationProviders: S.optional(__S(60, __c7, 4)),
          xrayEnabled: S.optional(S.Boolean),
          lambdaAuthorizerConfig: S.optional(__S(11, __c1, 3)),
          apiType: S.optional(S.String),
          mergedApiExecutionRoleArn: S.optional(S.String),
          visibility: S.optional(S.String),
          ownerContact: S.optional(S.String),
          introspectionConfig: S.optional(S.String),
          queryDepthLimit: S.optional(S.Number),
          resolverCountLimit: S.optional(S.Number),
          enhancedMetricsConfig: S.optional(__S(61, __c7, 5)),
        }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/v1/apis" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateGraphqlApiRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          apiId: S.optional(S.String),
          authenticationType: S.optional(S.String),
          logConfig: S.optional(__S(57, __c7, 1)),
          userPoolConfig: S.optional(__S(58, __c7, 2)),
          openIDConnectConfig: S.optional(__S(10, __c1, 2)),
          arn: S.optional(S.String),
          uris: S.optional(__S(19, __c2, 3)),
          tags: S.optional(__S(8, __c1, 0)),
          additionalAuthenticationProviders: S.optional(__S(60, __c7, 4)),
          xrayEnabled: S.optional(S.Boolean),
          wafWebAclArn: S.optional(S.String),
          lambdaAuthorizerConfig: S.optional(__S(11, __c1, 3)),
          dns: S.optional(__S(19, __c2, 3)),
          visibility: S.optional(S.String),
          apiType: S.optional(S.String),
          mergedApiExecutionRoleArn: S.optional(S.String),
          owner: S.optional(S.String),
          ownerContact: S.optional(S.String),
          introspectionConfig: S.optional(S.String),
          queryDepthLimit: S.optional(S.Number),
          resolverCountLimit: S.optional(S.Number),
          enhancedMetricsConfig: S.optional(__S(61, __c7, 5)),
        }),
      ).annotate({ identifier: "GraphqlApi" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ graphqlApi: S.optional(__S(63, __c7, 7)) }).pipe(ns),
      ).annotate({
        identifier: "CreateGraphqlApiResponse",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() => S.Struct({ functions: S.optional(__S(65, __c8, 1)) })).annotate({
        identifier: "PipelineConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ttl: S.Number, cachingKeys: S.optional(__S(65, __c8, 1)) }),
      ).annotate({ identifier: "CachingConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          typeName: S.String.pipe(T.HttpLabel("typeName")),
          fieldName: S.String,
          dataSourceName: S.optional(S.String),
          requestMappingTemplate: S.optional(S.String),
          responseMappingTemplate: S.optional(S.String),
          kind: S.optional(S.String),
          pipelineConfig: S.optional(__S(66, __c8, 2)),
          syncConfig: S.optional(__S(52, __c6, 4)),
          cachingConfig: S.optional(__S(67, __c8, 3)),
          maxBatchSize: S.optional(S.Number),
          runtime: S.optional(__S(53, __c6, 5)),
          code: S.optional(S.String),
          metricsConfig: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/apis/{apiId}/types/{typeName}/resolvers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateResolverRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          typeName: S.optional(S.String),
          fieldName: S.optional(S.String),
          dataSourceName: S.optional(S.String),
          resolverArn: S.optional(S.String),
          requestMappingTemplate: S.optional(S.String),
          responseMappingTemplate: S.optional(S.String),
          kind: S.optional(S.String),
          pipelineConfig: S.optional(__S(66, __c8, 2)),
          syncConfig: S.optional(__S(52, __c6, 4)),
          cachingConfig: S.optional(__S(67, __c8, 3)),
          maxBatchSize: S.optional(S.Number),
          runtime: S.optional(__S(53, __c6, 5)),
          code: S.optional(S.String),
          metricsConfig: S.optional(S.String),
        }),
      ).annotate({ identifier: "Resolver" });
    case 6:
      return S.suspend(() =>
        S.Struct({ resolver: S.optional(__S(69, __c8, 5)) }).pipe(ns),
      ).annotate({
        identifier: "CreateResolverResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          definition: S.String,
          format: S.String,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/apis/{apiId}/types" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateTypeRequest" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          description: S.optional(S.String),
          arn: S.optional(S.String),
          definition: S.optional(S.String),
          format: S.optional(S.String),
        }),
      ).annotate({ identifier: "Type" });
    case 1:
      return S.suspend(() => S.Struct({ type: S.optional(__S(72, __c9, 0)) }).pipe(ns)).annotate({
        identifier: "CreateTypeResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ apiId: S.String.pipe(T.HttpLabel("apiId")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v2/apis/{apiId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteApiRequest" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteApiResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ apiId: S.String.pipe(T.HttpLabel("apiId")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v1/apis/{apiId}/ApiCaches" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteApiCacheRequest" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteApiCacheResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v1/apis/{apiId}/apikeys/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteApiKeyRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v2/apis/{apiId}/channelNamespaces/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteChannelNamespaceRequest",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteChannelNamespaceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v1/apis/{apiId}/datasources/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDataSourceRequest" });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteDataSourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ domainName: S.String.pipe(T.HttpLabel("domainName")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v1/domainnames/{domainName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDomainNameRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          functionId: S.String.pipe(T.HttpLabel("functionId")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v1/apis/{apiId}/functions/{functionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteFunctionRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ apiId: S.String.pipe(T.HttpLabel("apiId")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v1/apis/{apiId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteGraphqlApiRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          typeName: S.String.pipe(T.HttpLabel("typeName")),
          fieldName: S.String.pipe(T.HttpLabel("fieldName")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "DELETE",
              uri: "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteResolverRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          typeName: S.String.pipe(T.HttpLabel("typeName")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v1/apis/{apiId}/types/{typeName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTypeRequest" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ domainName: S.String.pipe(T.HttpLabel("domainName")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v1/domainnames/{domainName}/apiassociation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DisassociateApiRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          sourceApiIdentifier: S.String.pipe(T.HttpLabel("sourceApiIdentifier")),
          associationId: S.String.pipe(T.HttpLabel("associationId")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "DELETE",
              uri: "/v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations/{associationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateMergedGraphqlApiRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ sourceApiAssociationStatus: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DisassociateMergedGraphqlApiResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          mergedApiIdentifier: S.String.pipe(T.HttpLabel("mergedApiIdentifier")),
          associationId: S.String.pipe(T.HttpLabel("associationId")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "DELETE",
              uri: "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateSourceGraphqlApiRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          runtime: __S(53, __c6, 5),
          code: S.String,
          context: S.String,
          function: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/dataplane-evaluatecode" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "EvaluateCodeRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          line: S.optional(S.Number),
          column: S.optional(S.Number),
          span: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CodeErrorLocation" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          errorType: S.optional(S.String),
          value: S.optional(S.String),
          location: S.optional(__S(93, __c11, 5)),
        }),
      ).annotate({ identifier: "CodeError" });
    case 7:
      return S.Array(__S(94, __c11, 6));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ message: S.optional(S.String), codeErrors: S.optional(__S(95, __c11, 7)) }),
      ).annotate({ identifier: "EvaluateCodeErrorDetail" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          evaluationResult: S.optional(S.String),
          error: S.optional(__S(96, __c12, 0)),
          logs: S.optional(__S(65, __c8, 1)),
          stash: S.optional(S.String),
          outErrors: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "EvaluateCodeResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ template: S.String, context: S.String }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/dataplane-evaluatetemplate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "EvaluateMappingTemplateRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ message: S.optional(S.String) })).annotate({
        identifier: "ErrorDetail",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          evaluationResult: S.optional(S.String),
          error: S.optional(__S(99, __c12, 3)),
          logs: S.optional(__S(65, __c8, 1)),
          stash: S.optional(S.String),
          outErrors: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "EvaluateMappingTemplateResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ apiId: S.String.pipe(T.HttpLabel("apiId")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v1/apis/{apiId}/FlushCache" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "FlushApiCacheRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ apiId: S.String.pipe(T.HttpLabel("apiId")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v2/apis/{apiId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetApiRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ domainName: S.String.pipe(T.HttpLabel("domainName")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/domainnames/{domainName}/apiassociation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetApiAssociationRequest" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ apiAssociation: S.optional(__S(1, __c0, 1)) }).pipe(ns),
      ).annotate({
        identifier: "GetApiAssociationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ apiId: S.String.pipe(T.HttpLabel("apiId")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/apis/{apiId}/ApiCaches" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetApiCacheRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v2/apis/{apiId}/channelNamespaces/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetChannelNamespaceRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/apis/{apiId}/datasources/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDataSourceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          introspectionId: S.String.pipe(T.HttpLabel("introspectionId")),
          includeModelsSDL: S.optional(S.Boolean).pipe(T.HttpQuery("includeModelsSDL")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/datasources/introspections/{introspectionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDataSourceIntrospectionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          kind: S.optional(S.String),
          name: S.optional(S.String),
          type: S.optional(
            S.suspend((): S.Schema<DataSourceIntrospectionModelFieldType> =>
              __S(109, __c13, 5),
            ).annotate({ identifier: "DataSourceIntrospectionModelFieldType" }),
          ),
          values: S.optional(__S(65, __c8, 1)),
        }),
      ).annotate({
        identifier: "DataSourceIntrospectionModelFieldType",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          type: S.optional(__S(109, __c13, 5)),
          length: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DataSourceIntrospectionModelField",
      });
    case 7:
      return S.Array(__S(110, __c13, 6));
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          fields: S.optional(__S(65, __c8, 1)),
        }),
      ).annotate({
        identifier: "DataSourceIntrospectionModelIndex",
      });
    case 1:
      return S.Array(__S(112, __c14, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          fields: S.optional(__S(111, __c13, 7)),
          primaryKey: S.optional(__S(112, __c14, 0)),
          indexes: S.optional(__S(113, __c14, 1)),
          sdl: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DataSourceIntrospectionModel",
      });
    case 3:
      return S.Array(__S(114, __c14, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          models: S.optional(__S(115, __c14, 3)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DataSourceIntrospectionResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          introspectionId: S.optional(S.String),
          introspectionStatus: S.optional(S.String),
          introspectionStatusDetail: S.optional(S.String),
          introspectionResult: S.optional(__S(116, __c14, 4)),
        }).pipe(ns),
      ).annotate({
        identifier: "GetDataSourceIntrospectionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ domainName: S.String.pipe(T.HttpLabel("domainName")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/domainnames/{domainName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDomainNameRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          functionId: S.String.pipe(T.HttpLabel("functionId")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/apis/{apiId}/functions/{functionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFunctionRequest" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ apiId: S.String.pipe(T.HttpLabel("apiId")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/apis/{apiId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetGraphqlApiRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ apiId: S.String.pipe(T.HttpLabel("apiId")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/apis/{apiId}/environmentVariables" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetGraphqlApiEnvironmentVariablesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ environmentVariables: S.optional(__S(19, __c2, 3)) }).pipe(ns),
      ).annotate({
        identifier: "GetGraphqlApiEnvironmentVariablesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          format: S.String.pipe(T.HttpQuery("format")),
          includeDirectives: S.optional(S.Boolean).pipe(T.HttpQuery("includeDirectives")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/apis/{apiId}/schema" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetIntrospectionSchemaRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ schema: S.optional(T.StreamingOutput).pipe(T.HttpPayload()) }).pipe(ns),
      ).annotate({
        identifier: "GetIntrospectionSchemaResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          typeName: S.String.pipe(T.HttpLabel("typeName")),
          fieldName: S.String.pipe(T.HttpLabel("fieldName")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetResolverRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ apiId: S.String.pipe(T.HttpLabel("apiId")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/apis/{apiId}/schemacreation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSchemaCreationStatusRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ status: S.optional(S.String), details: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "GetSchemaCreationStatusResponse",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          mergedApiIdentifier: S.String.pipe(T.HttpLabel("mergedApiIdentifier")),
          associationId: S.String.pipe(T.HttpLabel("associationId")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSourceApiAssociationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          typeName: S.String.pipe(T.HttpLabel("typeName")),
          format: S.String.pipe(T.HttpQuery("format")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/apis/{apiId}/types/{typeName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetTypeRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/apis/{apiId}/apikeys" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListApiKeysRequest" });
    case 3:
      return S.Array(__S(26, __c3, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ apiKeys: S.optional(__S(131, __c16, 3)), nextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "ListApiKeysResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(ns, T.Http({ method: "GET", uri: "/v2/apis" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListApisRequest" });
    case 6:
      return S.Array(__S(20, __c2, 4));
    case 7:
      return S.suspend(() =>
        S.Struct({ apis: S.optional(__S(134, __c16, 6)), nextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "ListApisResponse" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v2/apis/{apiId}/channelNamespaces" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListChannelNamespacesRequest",
      });
    case 1:
      return S.Array(__S(33, __c4, 1));
    case 2:
      return S.suspend(() =>
        S.Struct({
          channelNamespaces: S.optional(__S(137, __c17, 1)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListChannelNamespacesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/apis/{apiId}/datasources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListDataSourcesRequest" });
    case 4:
      return S.Array(__S(46, __c5, 6));
    case 5:
      return S.suspend(() =>
        S.Struct({
          dataSources: S.optional(__S(140, __c17, 4)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListDataSourcesResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/domainnames" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListDomainNamesRequest" });
    case 7:
      return S.Array(__S(49, __c6, 1));
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainNameConfigs: S.optional(__S(143, __c17, 7)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListDomainNamesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/apis/{apiId}/functions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListFunctionsRequest" });
    case 2:
      return S.Array(__S(55, __c6, 7));
    case 3:
      return S.suspend(() =>
        S.Struct({
          functions: S.optional(__S(146, __c18, 2)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListFunctionsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          apiType: S.optional(S.String).pipe(T.HttpQuery("apiType")),
          owner: S.optional(S.String).pipe(T.HttpQuery("owner")),
        }).pipe(
          T.all(ns, T.Http({ method: "GET", uri: "/v1/apis" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListGraphqlApisRequest" });
    case 5:
      return S.Array(__S(63, __c7, 7));
    case 6:
      return S.suspend(() =>
        S.Struct({
          graphqlApis: S.optional(__S(149, __c18, 5)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListGraphqlApisResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          typeName: S.String.pipe(T.HttpLabel("typeName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/apis/{apiId}/types/{typeName}/resolvers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListResolversRequest" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(69, __c8, 5));
    case 1:
      return S.suspend(() =>
        S.Struct({
          resolvers: S.optional(__S(152, __c19, 0)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListResolversResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          functionId: S.String.pipe(T.HttpLabel("functionId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/apis/{apiId}/functions/{functionId}/resolvers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResolversByFunctionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resolvers: S.optional(__S(152, __c19, 0)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListResolversByFunctionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/apis/{apiId}/sourceApiAssociations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSourceApiAssociationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          associationId: S.optional(S.String),
          associationArn: S.optional(S.String),
          sourceApiId: S.optional(S.String),
          sourceApiArn: S.optional(S.String),
          mergedApiId: S.optional(S.String),
          mergedApiArn: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SourceApiAssociationSummary",
      });
    case 6:
      return S.Array(__S(157, __c19, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          sourceApiAssociationSummaries: S.optional(__S(158, __c19, 6)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListSourceApiAssociationsResponse",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(8, __c1, 0)) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          format: S.String.pipe(T.HttpQuery("format")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/apis/{apiId}/types" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTypesRequest" });
    case 3:
      return S.Array(__S(72, __c9, 0));
    case 4:
      return S.suspend(() =>
        S.Struct({ types: S.optional(__S(163, __c20, 3)), nextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "ListTypesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          mergedApiIdentifier: S.String.pipe(T.HttpLabel("mergedApiIdentifier")),
          associationId: S.String.pipe(T.HttpLabel("associationId")),
          format: S.String.pipe(T.HttpQuery("format")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/types",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTypesByAssociationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ types: S.optional(__S(163, __c20, 3)), nextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "ListTypesByAssociationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          environmentVariables: __S(19, __c2, 3),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v1/apis/{apiId}/environmentVariables" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutGraphqlApiEnvironmentVariablesRequest",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, secretArn: S.String, databaseName: S.String }),
      ).annotate({ identifier: "RdsDataApiConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({ rdsDataApiConfig: S.optional(__S(168, __c21, 0)) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/datasources/introspections" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartDataSourceIntrospectionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          introspectionId: S.optional(S.String),
          introspectionStatus: S.optional(S.String),
          introspectionStatusDetail: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "StartDataSourceIntrospectionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ apiId: S.String.pipe(T.HttpLabel("apiId")), definition: T.Blob }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/apis/{apiId}/schemacreation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartSchemaCreationRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ status: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "StartSchemaCreationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          associationId: S.String.pipe(T.HttpLabel("associationId")),
          mergedApiIdentifier: S.String.pipe(T.HttpLabel("mergedApiIdentifier")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/merge",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartSchemaMergeRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ sourceApiAssociationStatus: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "StartSchemaMergeResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(8, __c1, 0),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(65, __c8, 1).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          name: S.String,
          ownerContact: S.optional(S.String),
          eventConfig: __S(17, __c2, 1),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v2/apis/{apiId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateApiRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          ttl: S.Number,
          apiCachingBehavior: S.String,
          type: S.String,
          healthMetricsConfig: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/apis/{apiId}/ApiCaches/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateApiCacheRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          id: S.String.pipe(T.HttpLabel("id")),
          description: S.optional(S.String),
          expires: S.optional(S.Number),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/apis/{apiId}/apikeys/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateApiKeyRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          name: S.String.pipe(T.HttpLabel("name")),
          subscribeAuthModes: S.optional(__S(15, __c1, 7)),
          publishAuthModes: S.optional(__S(15, __c1, 7)),
          codeHandlers: S.optional(S.String),
          handlerConfigs: S.optional(__S(31, __c3, 7)),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v2/apis/{apiId}/channelNamespaces/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateChannelNamespaceRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          name: S.String.pipe(T.HttpLabel("name")),
          description: S.optional(S.String),
          type: S.String,
          serviceRoleArn: S.optional(S.String),
          dynamodbConfig: S.optional(__S(36, __c4, 4)),
          lambdaConfig: S.optional(__S(37, __c4, 5)),
          elasticsearchConfig: S.optional(__S(38, __c4, 6)),
          openSearchServiceConfig: S.optional(__S(38, __c4, 6)),
          httpConfig: S.optional(__S(41, __c5, 1)),
          relationalDatabaseConfig: S.optional(__S(43, __c5, 3)),
          eventBridgeConfig: S.optional(__S(44, __c5, 4)),
          metricsConfig: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/apis/{apiId}/datasources/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDataSourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainName: S.String.pipe(T.HttpLabel("domainName")),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/domainnames/{domainName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDomainNameRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          name: S.String,
          description: S.optional(S.String),
          functionId: S.String.pipe(T.HttpLabel("functionId")),
          dataSourceName: S.String,
          requestMappingTemplate: S.optional(S.String),
          responseMappingTemplate: S.optional(S.String),
          functionVersion: S.optional(S.String),
          syncConfig: S.optional(__S(52, __c6, 4)),
          maxBatchSize: S.optional(S.Number),
          runtime: S.optional(__S(53, __c6, 5)),
          code: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/apis/{apiId}/functions/{functionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateFunctionRequest" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          name: S.String,
          logConfig: S.optional(__S(57, __c7, 1)),
          authenticationType: S.String,
          userPoolConfig: S.optional(__S(58, __c7, 2)),
          openIDConnectConfig: S.optional(__S(10, __c1, 2)),
          additionalAuthenticationProviders: S.optional(__S(60, __c7, 4)),
          xrayEnabled: S.optional(S.Boolean),
          lambdaAuthorizerConfig: S.optional(__S(11, __c1, 3)),
          mergedApiExecutionRoleArn: S.optional(S.String),
          ownerContact: S.optional(S.String),
          introspectionConfig: S.optional(S.String),
          queryDepthLimit: S.optional(S.Number),
          resolverCountLimit: S.optional(S.Number),
          enhancedMetricsConfig: S.optional(__S(61, __c7, 5)),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/apis/{apiId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateGraphqlApiRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          typeName: S.String.pipe(T.HttpLabel("typeName")),
          fieldName: S.String.pipe(T.HttpLabel("fieldName")),
          dataSourceName: S.optional(S.String),
          requestMappingTemplate: S.optional(S.String),
          responseMappingTemplate: S.optional(S.String),
          kind: S.optional(S.String),
          pipelineConfig: S.optional(__S(66, __c8, 2)),
          syncConfig: S.optional(__S(52, __c6, 4)),
          cachingConfig: S.optional(__S(67, __c8, 3)),
          maxBatchSize: S.optional(S.Number),
          runtime: S.optional(__S(53, __c6, 5)),
          code: S.optional(S.String),
          metricsConfig: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateResolverRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          associationId: S.String.pipe(T.HttpLabel("associationId")),
          mergedApiIdentifier: S.String.pipe(T.HttpLabel("mergedApiIdentifier")),
          description: S.optional(S.String),
          sourceApiAssociationConfig: S.optional(__S(3, __c0, 3)),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSourceApiAssociationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          apiId: S.String.pipe(T.HttpLabel("apiId")),
          typeName: S.String.pipe(T.HttpLabel("typeName")),
          definition: S.optional(S.String),
          format: S.String,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/apis/{apiId}/types/{typeName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateTypeRequest" });
    case 4:
      return S.suspend(() => S.Struct({ codeErrors: S.optional(__S(95, __c11, 7)) })).annotate({
        identifier: "BadRequestDetail",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
