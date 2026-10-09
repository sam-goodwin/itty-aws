import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Appflow",
  serviceShapeName: "SandstoneConfigurationServiceLambda",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "appflow" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-08-23");
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
              `https://appflow-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://appflow-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://appflow.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://appflow.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ConnectorAuthenticationException
  extends /*@__PURE__*/ S.TaggedError<ConnectorAuthenticationException>()(
    "ConnectorAuthenticationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export class ConnectorServerException
  extends /*@__PURE__*/ S.TaggedError<ConnectorServerException>()(
    "ConnectorServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnsupportedOperationException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedOperationException>()(
    "UnsupportedOperationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type FlowName = string;
export type ExecutionId = string;
export type ExecutionIds = string[];
export interface CancelFlowExecutionsRequest {
  flowName: string;
  executionIds?: string[];
}
export interface CancelFlowExecutionsResponse {
  invalidExecutions?: string[];
}
export type ConnectorProfileName = string;
export type KMSArn = string;
export type ConnectorType =
  | "Salesforce"
  | "Singular"
  | "Slack"
  | "Redshift"
  | "S3"
  | "Marketo"
  | "Googleanalytics"
  | "Zendesk"
  | "Servicenow"
  | "Datadog"
  | "Trendmicro"
  | "Snowflake"
  | "Dynatrace"
  | "Infornexus"
  | "Amplitude"
  | "Veeva"
  | "EventBridge"
  | "LookoutMetrics"
  | "Upsolver"
  | "Honeycode"
  | "CustomerProfiles"
  | "SAPOData"
  | "CustomConnector"
  | "Pardot"
  | (string & {});
export type ConnectorLabel = string;
export type ConnectionMode = "Public" | "Private" | (string & {});
export interface AmplitudeConnectorProfileProperties {}
export type InstanceUrl = string;
export interface DatadogConnectorProfileProperties {
  instanceUrl: string;
}
export interface DynatraceConnectorProfileProperties {
  instanceUrl: string;
}
export interface GoogleAnalyticsConnectorProfileProperties {}
export interface HoneycodeConnectorProfileProperties {}
export interface InforNexusConnectorProfileProperties {
  instanceUrl: string;
}
export interface MarketoConnectorProfileProperties {
  instanceUrl: string;
}
export type DatabaseUrl = string;
export type BucketName = string;
export type BucketPrefix = string;
export type RoleArn = string;
export type DataApiRoleArn = string;
export type ClusterIdentifier = string;
export type WorkgroupName = string;
export type DatabaseName = string;
export interface RedshiftConnectorProfileProperties {
  databaseUrl?: string;
  bucketName: string;
  bucketPrefix?: string;
  roleArn: string;
  dataApiRoleArn?: string;
  isRedshiftServerless?: boolean;
  clusterIdentifier?: string;
  workgroupName?: string;
  databaseName?: string;
}
export interface SalesforceConnectorProfileProperties {
  instanceUrl?: string;
  isSandboxEnvironment?: boolean;
  usePrivateLinkForMetadataAndAuthorization?: boolean;
}
export interface ServiceNowConnectorProfileProperties {
  instanceUrl: string;
}
export interface SingularConnectorProfileProperties {}
export interface SlackConnectorProfileProperties {
  instanceUrl: string;
}
export type Warehouse = string;
export type Stage = string;
export type PrivateLinkServiceName = string;
export type AccountName = string;
export type Region = string;
export interface SnowflakeConnectorProfileProperties {
  warehouse: string;
  stage: string;
  bucketName: string;
  bucketPrefix?: string;
  privateLinkServiceName?: string;
  accountName?: string;
  region?: string;
}
export interface TrendmicroConnectorProfileProperties {}
export interface VeevaConnectorProfileProperties {
  instanceUrl: string;
}
export interface ZendeskConnectorProfileProperties {
  instanceUrl: string;
}
export type ApplicationHostUrl = string;
export type ApplicationServicePath = string;
export type PortNumber = number;
export type ClientNumber = string;
export type LogonLanguage = string;
export type TokenUrl = string;
export type AuthCodeUrl = string;
export type OAuthScope = string;
export type OAuthScopeList = string[];
export interface OAuthProperties {
  tokenUrl: string;
  authCodeUrl: string;
  oAuthScopes: string[];
}
export interface SAPODataConnectorProfileProperties {
  applicationHostUrl: string;
  applicationServicePath: string;
  portNumber: number;
  clientNumber: string;
  logonLanguage?: string;
  privateLinkServiceName?: string;
  oAuthProperties?: OAuthProperties;
  disableSSO?: boolean;
}
export type ProfilePropertyKey = string;
export type ProfilePropertyValue = string;
export type ProfilePropertiesMap = { [key: string]: string | undefined };
export type OAuth2GrantType =
  | "CLIENT_CREDENTIALS"
  | "AUTHORIZATION_CODE"
  | "JWT_BEARER"
  | (string & {});
export type CustomPropertyKey = string;
export type CustomPropertyValue = string;
export type TokenUrlCustomProperties = { [key: string]: string | undefined };
export interface OAuth2Properties {
  tokenUrl: string;
  oAuth2GrantType: OAuth2GrantType;
  tokenUrlCustomProperties?: { [key: string]: string | undefined };
}
export interface CustomConnectorProfileProperties {
  profileProperties?: { [key: string]: string | undefined };
  oAuth2Properties?: OAuth2Properties;
}
export type BusinessUnitId = string;
export interface PardotConnectorProfileProperties {
  instanceUrl?: string;
  isSandboxEnvironment?: boolean;
  businessUnitId?: string;
}
export interface ConnectorProfileProperties {
  Amplitude?: AmplitudeConnectorProfileProperties;
  Datadog?: DatadogConnectorProfileProperties;
  Dynatrace?: DynatraceConnectorProfileProperties;
  GoogleAnalytics?: GoogleAnalyticsConnectorProfileProperties;
  Honeycode?: HoneycodeConnectorProfileProperties;
  InforNexus?: InforNexusConnectorProfileProperties;
  Marketo?: MarketoConnectorProfileProperties;
  Redshift?: RedshiftConnectorProfileProperties;
  Salesforce?: SalesforceConnectorProfileProperties;
  ServiceNow?: ServiceNowConnectorProfileProperties;
  Singular?: SingularConnectorProfileProperties;
  Slack?: SlackConnectorProfileProperties;
  Snowflake?: SnowflakeConnectorProfileProperties;
  Trendmicro?: TrendmicroConnectorProfileProperties;
  Veeva?: VeevaConnectorProfileProperties;
  Zendesk?: ZendeskConnectorProfileProperties;
  SAPOData?: SAPODataConnectorProfileProperties;
  CustomConnector?: CustomConnectorProfileProperties;
  Pardot?: PardotConnectorProfileProperties;
}
export type ApiKey = string | redacted.Redacted<string>;
export type SecretKey = string | redacted.Redacted<string>;
export interface AmplitudeConnectorProfileCredentials {
  apiKey: string | redacted.Redacted<string>;
  secretKey: string | redacted.Redacted<string>;
}
export type ApplicationKey = string;
export interface DatadogConnectorProfileCredentials {
  apiKey: string | redacted.Redacted<string>;
  applicationKey: string | redacted.Redacted<string>;
}
export type ApiToken = string;
export interface DynatraceConnectorProfileCredentials {
  apiToken: string | redacted.Redacted<string>;
}
export type ClientId = string;
export type ClientSecret = string | redacted.Redacted<string>;
export type AccessToken = string | redacted.Redacted<string>;
export type RefreshToken = string;
export type AuthCode = string;
export type RedirectUri = string;
export type CodeVerifier = string | redacted.Redacted<string>;
export interface ConnectorOAuthRequest {
  authCode?: string;
  redirectUri?: string;
  codeVerifier?: string | redacted.Redacted<string>;
}
export interface GoogleAnalyticsConnectorProfileCredentials {
  clientId: string;
  clientSecret: string | redacted.Redacted<string>;
  accessToken?: string | redacted.Redacted<string>;
  refreshToken?: string | redacted.Redacted<string>;
  oAuthRequest?: ConnectorOAuthRequest;
}
export interface HoneycodeConnectorProfileCredentials {
  accessToken?: string | redacted.Redacted<string>;
  refreshToken?: string | redacted.Redacted<string>;
  oAuthRequest?: ConnectorOAuthRequest;
}
export type AccessKeyId = string | redacted.Redacted<string>;
export type Username = string;
export type Key = string;
export interface InforNexusConnectorProfileCredentials {
  accessKeyId: string | redacted.Redacted<string>;
  userId: string;
  secretAccessKey: string | redacted.Redacted<string>;
  datakey: string | redacted.Redacted<string>;
}
export interface MarketoConnectorProfileCredentials {
  clientId: string;
  clientSecret: string | redacted.Redacted<string>;
  accessToken?: string | redacted.Redacted<string>;
  oAuthRequest?: ConnectorOAuthRequest;
}
export type Password = string | redacted.Redacted<string>;
export interface RedshiftConnectorProfileCredentials {
  username?: string;
  password?: string | redacted.Redacted<string>;
}
export type ClientCredentialsArn = string | redacted.Redacted<string>;
export type JwtToken = string | redacted.Redacted<string>;
export interface SalesforceConnectorProfileCredentials {
  accessToken?: string | redacted.Redacted<string>;
  refreshToken?: string | redacted.Redacted<string>;
  oAuthRequest?: ConnectorOAuthRequest;
  clientCredentialsArn?: string | redacted.Redacted<string>;
  oAuth2GrantType?: OAuth2GrantType;
  jwtToken?: string | redacted.Redacted<string>;
}
export interface OAuth2Credentials {
  clientId?: string;
  clientSecret?: string | redacted.Redacted<string>;
  accessToken?: string | redacted.Redacted<string>;
  refreshToken?: string | redacted.Redacted<string>;
  oAuthRequest?: ConnectorOAuthRequest;
}
export interface ServiceNowConnectorProfileCredentials {
  username?: string;
  password?: string | redacted.Redacted<string>;
  oAuth2Credentials?: OAuth2Credentials;
}
export interface SingularConnectorProfileCredentials {
  apiKey: string | redacted.Redacted<string>;
}
export interface SlackConnectorProfileCredentials {
  clientId: string;
  clientSecret: string | redacted.Redacted<string>;
  accessToken?: string | redacted.Redacted<string>;
  oAuthRequest?: ConnectorOAuthRequest;
}
export type PrivateKey = string | redacted.Redacted<string>;
export interface SnowflakeConnectorProfileCredentials {
  username: string;
  password?: string | redacted.Redacted<string>;
  privateKey?: string | redacted.Redacted<string>;
}
export type ApiSecretKey = string | redacted.Redacted<string>;
export interface TrendmicroConnectorProfileCredentials {
  apiSecretKey: string | redacted.Redacted<string>;
}
export interface VeevaConnectorProfileCredentials {
  username: string;
  password: string | redacted.Redacted<string>;
}
export interface ZendeskConnectorProfileCredentials {
  clientId: string;
  clientSecret: string | redacted.Redacted<string>;
  accessToken?: string | redacted.Redacted<string>;
  oAuthRequest?: ConnectorOAuthRequest;
}
export interface BasicAuthCredentials {
  username: string;
  password: string | redacted.Redacted<string>;
}
export interface OAuthCredentials {
  clientId: string;
  clientSecret: string | redacted.Redacted<string>;
  accessToken?: string | redacted.Redacted<string>;
  refreshToken?: string | redacted.Redacted<string>;
  oAuthRequest?: ConnectorOAuthRequest;
}
export interface SAPODataConnectorProfileCredentials {
  basicAuthCredentials?: BasicAuthCredentials;
  oAuthCredentials?: OAuthCredentials;
}
export type AuthenticationType = "OAUTH2" | "APIKEY" | "BASIC" | "CUSTOM" | (string & {});
export interface ApiKeyCredentials {
  apiKey: string | redacted.Redacted<string>;
  apiSecretKey?: string | redacted.Redacted<string>;
}
export type CustomAuthenticationType = string;
export type CredentialsMapKey = string | redacted.Redacted<string>;
export type CredentialsMapValue = string | redacted.Redacted<string>;
export type CredentialsMap = { [key: string]: string | redacted.Redacted<string> | undefined };
export interface CustomAuthCredentials {
  customAuthenticationType: string;
  credentialsMap?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
export interface CustomConnectorProfileCredentials {
  authenticationType: AuthenticationType;
  basic?: BasicAuthCredentials;
  oauth2?: OAuth2Credentials;
  apiKey?: ApiKeyCredentials;
  custom?: CustomAuthCredentials;
}
export interface PardotConnectorProfileCredentials {
  accessToken?: string | redacted.Redacted<string>;
  refreshToken?: string | redacted.Redacted<string>;
  oAuthRequest?: ConnectorOAuthRequest;
  clientCredentialsArn?: string | redacted.Redacted<string>;
}
export interface ConnectorProfileCredentials {
  Amplitude?: AmplitudeConnectorProfileCredentials;
  Datadog?: DatadogConnectorProfileCredentials;
  Dynatrace?: DynatraceConnectorProfileCredentials;
  GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentials;
  Honeycode?: HoneycodeConnectorProfileCredentials;
  InforNexus?: InforNexusConnectorProfileCredentials;
  Marketo?: MarketoConnectorProfileCredentials;
  Redshift?: RedshiftConnectorProfileCredentials;
  Salesforce?: SalesforceConnectorProfileCredentials;
  ServiceNow?: ServiceNowConnectorProfileCredentials;
  Singular?: SingularConnectorProfileCredentials;
  Slack?: SlackConnectorProfileCredentials;
  Snowflake?: SnowflakeConnectorProfileCredentials;
  Trendmicro?: TrendmicroConnectorProfileCredentials;
  Veeva?: VeevaConnectorProfileCredentials;
  Zendesk?: ZendeskConnectorProfileCredentials;
  SAPOData?: SAPODataConnectorProfileCredentials;
  CustomConnector?: CustomConnectorProfileCredentials;
  Pardot?: PardotConnectorProfileCredentials;
}
export interface ConnectorProfileConfig {
  connectorProfileProperties: ConnectorProfileProperties;
  connectorProfileCredentials?: ConnectorProfileCredentials;
}
export type ClientToken = string;
export interface CreateConnectorProfileRequest {
  connectorProfileName: string;
  kmsArn?: string;
  connectorType: ConnectorType;
  connectorLabel?: string;
  connectionMode: ConnectionMode;
  connectorProfileConfig: ConnectorProfileConfig;
  clientToken?: string;
}
export type ConnectorProfileArn = string;
export interface CreateConnectorProfileResponse {
  connectorProfileArn?: string;
}
export type FlowDescription = string;
export type TriggerType = "Scheduled" | "Event" | "OnDemand" | (string & {});
export type ScheduleExpression = string;
export type DataPullMode = "Incremental" | "Complete" | (string & {});
export type Timezone = string;
export type ScheduleOffset = number;
export type FlowErrorDeactivationThreshold = number;
export interface ScheduledTriggerProperties {
  scheduleExpression: string;
  dataPullMode?: DataPullMode;
  scheduleStartTime?: Date;
  scheduleEndTime?: Date;
  timezone?: string;
  scheduleOffset?: number;
  firstExecutionFrom?: Date;
  flowErrorDeactivationThreshold?: number;
}
export interface TriggerProperties {
  Scheduled?: ScheduledTriggerProperties;
}
export interface TriggerConfig {
  triggerType: TriggerType;
  triggerProperties?: TriggerProperties;
}
export type ApiVersion = string;
export interface AmplitudeSourceProperties {
  object: string;
}
export interface DatadogSourceProperties {
  object: string;
}
export interface DynatraceSourceProperties {
  object: string;
}
export interface GoogleAnalyticsSourceProperties {
  object: string;
}
export interface InforNexusSourceProperties {
  object: string;
}
export interface MarketoSourceProperties {
  object: string;
}
export type S3InputFileType = "CSV" | "JSON" | (string & {});
export interface S3InputFormatConfig {
  s3InputFileType?: S3InputFileType;
}
export interface S3SourceProperties {
  bucketName: string;
  bucketPrefix?: string;
  s3InputFormatConfig?: S3InputFormatConfig;
}
export type SalesforceDataTransferApi = "AUTOMATIC" | "BULKV2" | "REST_SYNC" | (string & {});
export interface SalesforceSourceProperties {
  object: string;
  enableDynamicFieldUpdate?: boolean;
  includeDeletedRecords?: boolean;
  dataTransferApi?: SalesforceDataTransferApi;
}
export interface ServiceNowSourceProperties {
  object: string;
}
export interface SingularSourceProperties {
  object: string;
}
export interface SlackSourceProperties {
  object: string;
}
export interface TrendmicroSourceProperties {
  object: string;
}
export type DocumentType = string;
export interface VeevaSourceProperties {
  object: string;
  documentType?: string;
  includeSourceFiles?: boolean;
  includeRenditions?: boolean;
  includeAllVersions?: boolean;
}
export interface ZendeskSourceProperties {
  object: string;
}
export type SAPODataMaxParallelism = number;
export interface SAPODataParallelismConfig {
  maxParallelism: number;
}
export type SAPODataMaxPageSize = number;
export interface SAPODataPaginationConfig {
  maxPageSize: number;
}
export interface SAPODataSourceProperties {
  objectPath?: string;
  parallelismConfig?: SAPODataParallelismConfig;
  paginationConfig?: SAPODataPaginationConfig;
}
export type EntityName = string;
export type CustomProperties = { [key: string]: string | undefined };
export type DataTransferApiTypeName = string;
export type DataTransferApiType = "SYNC" | "ASYNC" | "AUTOMATIC" | (string & {});
export interface DataTransferApi {
  Name?: string;
  Type?: DataTransferApiType;
}
export interface CustomConnectorSourceProperties {
  entityName: string;
  customProperties?: { [key: string]: string | undefined };
  dataTransferApi?: DataTransferApi;
}
export interface PardotSourceProperties {
  object: string;
}
export interface SourceConnectorProperties {
  Amplitude?: AmplitudeSourceProperties;
  Datadog?: DatadogSourceProperties;
  Dynatrace?: DynatraceSourceProperties;
  GoogleAnalytics?: GoogleAnalyticsSourceProperties;
  InforNexus?: InforNexusSourceProperties;
  Marketo?: MarketoSourceProperties;
  S3?: S3SourceProperties;
  Salesforce?: SalesforceSourceProperties;
  ServiceNow?: ServiceNowSourceProperties;
  Singular?: SingularSourceProperties;
  Slack?: SlackSourceProperties;
  Trendmicro?: TrendmicroSourceProperties;
  Veeva?: VeevaSourceProperties;
  Zendesk?: ZendeskSourceProperties;
  SAPOData?: SAPODataSourceProperties;
  CustomConnector?: CustomConnectorSourceProperties;
  Pardot?: PardotSourceProperties;
}
export type DatetimeTypeFieldName = string;
export interface IncrementalPullConfig {
  datetimeTypeFieldName?: string;
}
export interface SourceFlowConfig {
  connectorType: ConnectorType;
  apiVersion?: string;
  connectorProfileName?: string;
  sourceConnectorProperties: SourceConnectorProperties;
  incrementalPullConfig?: IncrementalPullConfig;
}
export interface ErrorHandlingConfig {
  failOnFirstDestinationError?: boolean;
  bucketPrefix?: string;
  bucketName?: string;
}
export interface RedshiftDestinationProperties {
  object: string;
  intermediateBucketName: string;
  bucketPrefix?: string;
  errorHandlingConfig?: ErrorHandlingConfig;
}
export type FileType = "CSV" | "JSON" | "PARQUET" | (string & {});
export type PrefixType = "FILENAME" | "PATH" | "PATH_AND_FILENAME" | (string & {});
export type PrefixFormat = "YEAR" | "MONTH" | "DAY" | "HOUR" | "MINUTE" | (string & {});
export type PathPrefix = "EXECUTION_ID" | "SCHEMA_VERSION" | (string & {});
export type PathPrefixHierarchy = PathPrefix[];
export interface PrefixConfig {
  prefixType?: PrefixType;
  prefixFormat?: PrefixFormat;
  pathPrefixHierarchy?: PathPrefix[];
}
export type AggregationType = "None" | "SingleFile" | (string & {});
export interface AggregationConfig {
  aggregationType?: AggregationType;
  targetFileSize?: number;
}
export type JavaBoolean = boolean;
export interface S3OutputFormatConfig {
  fileType?: FileType;
  prefixConfig?: PrefixConfig;
  aggregationConfig?: AggregationConfig;
  preserveSourceDataTyping?: boolean;
}
export interface S3DestinationProperties {
  bucketName: string;
  bucketPrefix?: string;
  s3OutputFormatConfig?: S3OutputFormatConfig;
}
export type Name = string;
export type IdFieldNameList = string[];
export type WriteOperationType = "INSERT" | "UPSERT" | "UPDATE" | "DELETE" | (string & {});
export interface SalesforceDestinationProperties {
  object: string;
  idFieldNames?: string[];
  errorHandlingConfig?: ErrorHandlingConfig;
  writeOperationType?: WriteOperationType;
  dataTransferApi?: SalesforceDataTransferApi;
}
export interface SnowflakeDestinationProperties {
  object: string;
  intermediateBucketName: string;
  bucketPrefix?: string;
  errorHandlingConfig?: ErrorHandlingConfig;
}
export interface EventBridgeDestinationProperties {
  object: string;
  errorHandlingConfig?: ErrorHandlingConfig;
}
export interface LookoutMetricsDestinationProperties {}
export type UpsolverBucketName = string;
export interface UpsolverS3OutputFormatConfig {
  fileType?: FileType;
  prefixConfig: PrefixConfig;
  aggregationConfig?: AggregationConfig;
}
export interface UpsolverDestinationProperties {
  bucketName: string;
  bucketPrefix?: string;
  s3OutputFormatConfig: UpsolverS3OutputFormatConfig;
}
export interface HoneycodeDestinationProperties {
  object: string;
  errorHandlingConfig?: ErrorHandlingConfig;
}
export type DomainName = string;
export type ObjectTypeName = string;
export interface CustomerProfilesDestinationProperties {
  domainName: string;
  objectTypeName?: string;
}
export interface ZendeskDestinationProperties {
  object: string;
  idFieldNames?: string[];
  errorHandlingConfig?: ErrorHandlingConfig;
  writeOperationType?: WriteOperationType;
}
export interface MarketoDestinationProperties {
  object: string;
  errorHandlingConfig?: ErrorHandlingConfig;
}
export interface CustomConnectorDestinationProperties {
  entityName: string;
  errorHandlingConfig?: ErrorHandlingConfig;
  writeOperationType?: WriteOperationType;
  idFieldNames?: string[];
  customProperties?: { [key: string]: string | undefined };
}
export interface SuccessResponseHandlingConfig {
  bucketPrefix?: string;
  bucketName?: string;
}
export interface SAPODataDestinationProperties {
  objectPath: string;
  successResponseHandlingConfig?: SuccessResponseHandlingConfig;
  idFieldNames?: string[];
  errorHandlingConfig?: ErrorHandlingConfig;
  writeOperationType?: WriteOperationType;
}
export interface DestinationConnectorProperties {
  Redshift?: RedshiftDestinationProperties;
  S3?: S3DestinationProperties;
  Salesforce?: SalesforceDestinationProperties;
  Snowflake?: SnowflakeDestinationProperties;
  EventBridge?: EventBridgeDestinationProperties;
  LookoutMetrics?: LookoutMetricsDestinationProperties;
  Upsolver?: UpsolverDestinationProperties;
  Honeycode?: HoneycodeDestinationProperties;
  CustomerProfiles?: CustomerProfilesDestinationProperties;
  Zendesk?: ZendeskDestinationProperties;
  Marketo?: MarketoDestinationProperties;
  CustomConnector?: CustomConnectorDestinationProperties;
  SAPOData?: SAPODataDestinationProperties;
}
export interface DestinationFlowConfig {
  connectorType: ConnectorType;
  apiVersion?: string;
  connectorProfileName?: string;
  destinationConnectorProperties: DestinationConnectorProperties;
}
export type DestinationFlowConfigList = DestinationFlowConfig[];
export type SourceFields = string[];
export type AmplitudeConnectorOperator = "BETWEEN" | (string & {});
export type DatadogConnectorOperator =
  | "PROJECTION"
  | "BETWEEN"
  | "EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
export type DynatraceConnectorOperator =
  | "PROJECTION"
  | "BETWEEN"
  | "EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
export type GoogleAnalyticsConnectorOperator = "PROJECTION" | "BETWEEN" | (string & {});
export type InforNexusConnectorOperator =
  | "PROJECTION"
  | "BETWEEN"
  | "EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
export type MarketoConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
export type S3ConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
export type SalesforceConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "CONTAINS"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
export type ServiceNowConnectorOperator =
  | "PROJECTION"
  | "CONTAINS"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
export type SingularConnectorOperator =
  | "PROJECTION"
  | "EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
export type SlackConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
export type TrendmicroConnectorOperator =
  | "PROJECTION"
  | "EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
export type VeevaConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "CONTAINS"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
export type ZendeskConnectorOperator =
  | "PROJECTION"
  | "GREATER_THAN"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
export type SAPODataConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "CONTAINS"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
export type Operator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "CONTAINS"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
export type PardotConnectorOperator =
  | "PROJECTION"
  | "EQUAL_TO"
  | "NO_OP"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | (string & {});
export interface ConnectorOperator {
  Amplitude?: AmplitudeConnectorOperator;
  Datadog?: DatadogConnectorOperator;
  Dynatrace?: DynatraceConnectorOperator;
  GoogleAnalytics?: GoogleAnalyticsConnectorOperator;
  InforNexus?: InforNexusConnectorOperator;
  Marketo?: MarketoConnectorOperator;
  S3?: S3ConnectorOperator;
  Salesforce?: SalesforceConnectorOperator;
  ServiceNow?: ServiceNowConnectorOperator;
  Singular?: SingularConnectorOperator;
  Slack?: SlackConnectorOperator;
  Trendmicro?: TrendmicroConnectorOperator;
  Veeva?: VeevaConnectorOperator;
  Zendesk?: ZendeskConnectorOperator;
  SAPOData?: SAPODataConnectorOperator;
  CustomConnector?: Operator;
  Pardot?: PardotConnectorOperator;
}
export type DestinationField = string;
export type TaskType =
  | "Arithmetic"
  | "Filter"
  | "Map"
  | "Map_all"
  | "Mask"
  | "Merge"
  | "Passthrough"
  | "Truncate"
  | "Validate"
  | "Partition"
  | (string & {});
export type OperatorPropertiesKeys =
  | "VALUE"
  | "VALUES"
  | "DATA_TYPE"
  | "UPPER_BOUND"
  | "LOWER_BOUND"
  | "SOURCE_DATA_TYPE"
  | "DESTINATION_DATA_TYPE"
  | "VALIDATION_ACTION"
  | "MASK_VALUE"
  | "MASK_LENGTH"
  | "TRUNCATE_LENGTH"
  | "MATH_OPERATION_FIELDS_ORDER"
  | "CONCAT_FORMAT"
  | "SUBFIELD_CATEGORY_MAP"
  | "EXCLUDE_SOURCE_FIELDS_LIST"
  | "INCLUDE_NEW_FIELDS"
  | "ORDERED_PARTITION_KEYS_LIST"
  | (string & {});
export type Property = string;
export type TaskPropertiesMap = { [key in OperatorPropertiesKeys]?: string };
export interface Task {
  sourceFields: string[];
  connectorOperator?: ConnectorOperator;
  destinationField?: string;
  taskType: TaskType;
  taskProperties?: { [key: string]: string | undefined };
}
export type Tasks = Task[];
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export type GlueDataCatalogIAMRole = string;
export type GlueDataCatalogDatabaseName = string;
export type GlueDataCatalogTablePrefix = string;
export interface GlueDataCatalogConfig {
  roleArn: string;
  databaseName: string;
  tablePrefix: string;
}
export interface MetadataCatalogConfig {
  glueDataCatalog?: GlueDataCatalogConfig;
}
export interface CreateFlowRequest {
  flowName: string;
  description?: string;
  kmsArn?: string;
  triggerConfig: TriggerConfig;
  sourceFlowConfig: SourceFlowConfig;
  destinationFlowConfigList: DestinationFlowConfig[];
  tasks: Task[];
  tags?: { [key: string]: string | undefined };
  metadataCatalogConfig?: MetadataCatalogConfig;
  clientToken?: string;
}
export type FlowArn = string;
export type FlowStatus =
  | "Active"
  | "Deprecated"
  | "Deleted"
  | "Draft"
  | "Errored"
  | "Suspended"
  | (string & {});
export interface CreateFlowResponse {
  flowArn?: string;
  flowStatus?: FlowStatus;
}
export interface DeleteConnectorProfileRequest {
  connectorProfileName: string;
  forceDelete?: boolean;
}
export interface DeleteConnectorProfileResponse {}
export interface DeleteFlowRequest {
  flowName: string;
  forceDelete?: boolean;
}
export interface DeleteFlowResponse {}
export interface DescribeConnectorRequest {
  connectorType: ConnectorType;
  connectorLabel?: string;
}
export type ConnectorTypeList = ConnectorType[];
export type ScheduleFrequencyType =
  | "BYMINUTE"
  | "HOURLY"
  | "DAILY"
  | "WEEKLY"
  | "MONTHLY"
  | "ONCE"
  | (string & {});
export type SchedulingFrequencyTypeList = ScheduleFrequencyType[];
export type TriggerTypeList = TriggerType[];
export interface AmplitudeMetadata {}
export interface DatadogMetadata {}
export interface DynatraceMetadata {}
export interface GoogleAnalyticsMetadata {
  oAuthScopes?: string[];
}
export interface InforNexusMetadata {}
export interface MarketoMetadata {}
export interface RedshiftMetadata {}
export interface S3Metadata {}
export type SalesforceDataTransferApiList = SalesforceDataTransferApi[];
export type OAuth2GrantTypeSupportedList = OAuth2GrantType[];
export interface SalesforceMetadata {
  oAuthScopes?: string[];
  dataTransferApis?: SalesforceDataTransferApi[];
  oauth2GrantTypesSupported?: OAuth2GrantType[];
}
export interface ServiceNowMetadata {}
export interface SingularMetadata {}
export interface SlackMetadata {
  oAuthScopes?: string[];
}
export type RegionList = string[];
export interface SnowflakeMetadata {
  supportedRegions?: string[];
}
export interface TrendmicroMetadata {}
export interface VeevaMetadata {}
export interface ZendeskMetadata {
  oAuthScopes?: string[];
}
export interface EventBridgeMetadata {}
export interface UpsolverMetadata {}
export interface CustomerProfilesMetadata {}
export interface HoneycodeMetadata {
  oAuthScopes?: string[];
}
export interface SAPODataMetadata {}
export interface PardotMetadata {}
export interface ConnectorMetadata {
  Amplitude?: AmplitudeMetadata;
  Datadog?: DatadogMetadata;
  Dynatrace?: DynatraceMetadata;
  GoogleAnalytics?: GoogleAnalyticsMetadata;
  InforNexus?: InforNexusMetadata;
  Marketo?: MarketoMetadata;
  Redshift?: RedshiftMetadata;
  S3?: S3Metadata;
  Salesforce?: SalesforceMetadata;
  ServiceNow?: ServiceNowMetadata;
  Singular?: SingularMetadata;
  Slack?: SlackMetadata;
  Snowflake?: SnowflakeMetadata;
  Trendmicro?: TrendmicroMetadata;
  Veeva?: VeevaMetadata;
  Zendesk?: ZendeskMetadata;
  EventBridge?: EventBridgeMetadata;
  Upsolver?: UpsolverMetadata;
  CustomerProfiles?: CustomerProfilesMetadata;
  Honeycode?: HoneycodeMetadata;
  SAPOData?: SAPODataMetadata;
  Pardot?: PardotMetadata;
}
export type ConnectorDescription = string;
export type ConnectorOwner = string;
export type ConnectorName = string;
export type ConnectorVersion = string;
export type ARN = string;
export type ConnectorMode = string;
export type ConnectorModeList = string[];
export type TokenUrlList = string[];
export type AuthCodeUrlList = string[];
export type Label = string;
export type Description = string;
export type ConnectorSuppliedValue = string;
export type ConnectorSuppliedValueList = string[];
export type OAuth2CustomPropType = "TOKEN_URL" | "AUTH_URL" | (string & {});
export interface OAuth2CustomParameter {
  key?: string;
  isRequired?: boolean;
  label?: string;
  description?: string;
  isSensitiveField?: boolean;
  connectorSuppliedValues?: string[];
  type?: OAuth2CustomPropType;
}
export type OAuth2CustomPropertiesList = OAuth2CustomParameter[];
export interface OAuth2Defaults {
  oauthScopes?: string[];
  tokenUrls?: string[];
  authCodeUrls?: string[];
  oauth2GrantTypesSupported?: OAuth2GrantType[];
  oauth2CustomProperties?: OAuth2CustomParameter[];
}
export interface AuthParameter {
  key?: string;
  isRequired?: boolean;
  label?: string;
  description?: string;
  isSensitiveField?: boolean;
  connectorSuppliedValues?: string[];
}
export type AuthParameterList = AuthParameter[];
export interface CustomAuthConfig {
  customAuthenticationType?: string;
  authParameters?: AuthParameter[];
}
export type CustomAuthConfigList = CustomAuthConfig[];
export interface AuthenticationConfig {
  isBasicAuthSupported?: boolean;
  isApiKeyAuthSupported?: boolean;
  isOAuth2Supported?: boolean;
  isCustomAuthSupported?: boolean;
  oAuth2Defaults?: OAuth2Defaults;
  customAuthConfigs?: CustomAuthConfig[];
}
export type ConnectorRuntimeSettingDataType = string;
export type ConnectorRuntimeSettingScope = string;
export type ConnectorSuppliedValueOptionList = string[];
export interface ConnectorRuntimeSetting {
  key?: string;
  dataType?: string;
  isRequired?: boolean;
  label?: string;
  description?: string;
  scope?: string;
  connectorSuppliedValueOptions?: string[];
}
export type ConnectorRuntimeSettingList = ConnectorRuntimeSetting[];
export type SupportedApiVersion = string;
export type SupportedApiVersionList = string[];
export type Operators =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "CONTAINS"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
export type SupportedOperatorList = Operators[];
export type SupportedWriteOperationList = WriteOperationType[];
export type ConnectorProvisioningType = "LAMBDA" | (string & {});
export interface LambdaConnectorProvisioningConfig {
  lambdaArn: string;
}
export interface ConnectorProvisioningConfig {
  lambda?: LambdaConnectorProvisioningConfig;
}
export type LogoURL = string;
export type RegisteredBy = string;
export type SupportedDataTransferType = "RECORD" | "FILE" | (string & {});
export type SupportedDataTransferTypeList = SupportedDataTransferType[];
export type SupportedDataTransferApis = DataTransferApi[];
export interface ConnectorConfiguration {
  canUseAsSource?: boolean;
  canUseAsDestination?: boolean;
  supportedDestinationConnectors?: ConnectorType[];
  supportedSchedulingFrequencies?: ScheduleFrequencyType[];
  isPrivateLinkEnabled?: boolean;
  isPrivateLinkEndpointUrlRequired?: boolean;
  supportedTriggerTypes?: TriggerType[];
  connectorMetadata?: ConnectorMetadata;
  connectorType?: ConnectorType;
  connectorLabel?: string;
  connectorDescription?: string;
  connectorOwner?: string;
  connectorName?: string;
  connectorVersion?: string;
  connectorArn?: string;
  connectorModes?: string[];
  authenticationConfig?: AuthenticationConfig;
  connectorRuntimeSettings?: ConnectorRuntimeSetting[];
  supportedApiVersions?: string[];
  supportedOperators?: Operators[];
  supportedWriteOperations?: WriteOperationType[];
  connectorProvisioningType?: ConnectorProvisioningType;
  connectorProvisioningConfig?: ConnectorProvisioningConfig;
  logoURL?: string;
  registeredAt?: Date;
  registeredBy?: string;
  supportedDataTransferTypes?: SupportedDataTransferType[];
  supportedDataTransferApis?: DataTransferApi[];
}
export interface DescribeConnectorResponse {
  connectorConfiguration?: ConnectorConfiguration;
}
export interface DescribeConnectorEntityRequest {
  connectorEntityName: string;
  connectorType?: ConnectorType;
  connectorProfileName?: string;
  apiVersion?: string;
}
export type Identifier = string;
export type FieldType = string;
export type FilterOperatorList = Operator[];
export type Value = string;
export type SupportedValueList = string[];
export interface Range {
  maximum?: number;
  minimum?: number;
}
export interface FieldTypeDetails {
  fieldType: string;
  filterOperators: Operator[];
  supportedValues?: string[];
  valueRegexPattern?: string;
  supportedDateFormat?: string;
  fieldValueRange?: Range;
  fieldLengthRange?: Range;
}
export interface SupportedFieldTypeDetails {
  v1: FieldTypeDetails;
}
export interface SourceFieldProperties {
  isRetrievable?: boolean;
  isQueryable?: boolean;
  isTimestampFieldForIncrementalQueries?: boolean;
}
export interface DestinationFieldProperties {
  isCreatable?: boolean;
  isNullable?: boolean;
  isUpsertable?: boolean;
  isUpdatable?: boolean;
  isDefaultedOnCreate?: boolean;
  supportedWriteOperations?: WriteOperationType[];
}
export interface ConnectorEntityField {
  identifier: string;
  parentIdentifier?: string;
  label?: string;
  isPrimaryKey?: boolean;
  defaultValue?: string;
  isDeprecated?: boolean;
  supportedFieldTypeDetails?: SupportedFieldTypeDetails;
  description?: string;
  sourceProperties?: SourceFieldProperties;
  destinationProperties?: DestinationFieldProperties;
  customProperties?: { [key: string]: string | undefined };
}
export type ConnectorEntityFieldList = ConnectorEntityField[];
export interface DescribeConnectorEntityResponse {
  connectorEntityFields: ConnectorEntityField[];
}
export type ConnectorProfileNameList = string[];
export type MaxResults = number;
export type NextToken = string;
export interface DescribeConnectorProfilesRequest {
  connectorProfileNames?: string[];
  connectorType?: ConnectorType;
  connectorLabel?: string;
  maxResults?: number;
  nextToken?: string;
}
export type PrivateConnectionProvisioningStatus = "FAILED" | "PENDING" | "CREATED" | (string & {});
export type PrivateConnectionProvisioningFailureMessage = string;
export type PrivateConnectionProvisioningFailureCause =
  | "CONNECTOR_AUTHENTICATION"
  | "CONNECTOR_SERVER"
  | "INTERNAL_SERVER"
  | "ACCESS_DENIED"
  | "VALIDATION"
  | (string & {});
export interface PrivateConnectionProvisioningState {
  status?: PrivateConnectionProvisioningStatus;
  failureMessage?: string;
  failureCause?: PrivateConnectionProvisioningFailureCause;
}
export interface ConnectorProfile {
  connectorProfileArn?: string;
  connectorProfileName?: string;
  connectorType?: ConnectorType;
  connectorLabel?: string;
  connectionMode?: ConnectionMode;
  credentialsArn?: string;
  connectorProfileProperties?: ConnectorProfileProperties;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  privateConnectionProvisioningState?: PrivateConnectionProvisioningState;
}
export type ConnectorProfileDetailList = ConnectorProfile[];
export interface DescribeConnectorProfilesResponse {
  connectorProfileDetails?: ConnectorProfile[];
  nextToken?: string;
}
export interface DescribeConnectorsRequest {
  connectorTypes?: ConnectorType[];
  maxResults?: number;
  nextToken?: string;
}
export type ConnectorConfigurationsMap = { [key in ConnectorType]?: ConnectorConfiguration };
export type ApplicationType = string;
export interface ConnectorDetail {
  connectorDescription?: string;
  connectorName?: string;
  connectorOwner?: string;
  connectorVersion?: string;
  applicationType?: string;
  connectorType?: ConnectorType;
  connectorLabel?: string;
  registeredAt?: Date;
  registeredBy?: string;
  connectorProvisioningType?: ConnectorProvisioningType;
  connectorModes?: string[];
  supportedDataTransferTypes?: SupportedDataTransferType[];
}
export type ConnectorList = ConnectorDetail[];
export interface DescribeConnectorsResponse {
  connectorConfigurations?: { [key: string]: ConnectorConfiguration | undefined };
  connectors?: ConnectorDetail[];
  nextToken?: string;
}
export interface DescribeFlowRequest {
  flowName: string;
}
export type FlowStatusMessage = string;
export type MostRecentExecutionMessage = string;
export type ExecutionStatus =
  | "InProgress"
  | "Successful"
  | "Error"
  | "CancelStarted"
  | "Canceled"
  | (string & {});
export interface ExecutionDetails {
  mostRecentExecutionMessage?: string;
  mostRecentExecutionTime?: Date;
  mostRecentExecutionStatus?: ExecutionStatus;
}
export type CreatedBy = string;
export type UpdatedBy = string;
export type CatalogType = "GLUE" | (string & {});
export interface RegistrationOutput {
  message?: string;
  result?: string;
  status?: ExecutionStatus;
}
export interface MetadataCatalogDetail {
  catalogType?: CatalogType;
  tableName?: string;
  tableRegistrationOutput?: RegistrationOutput;
  partitionRegistrationOutput?: RegistrationOutput;
}
export type MetadataCatalogDetails = MetadataCatalogDetail[];
export interface DescribeFlowResponse {
  flowArn?: string;
  description?: string;
  flowName?: string;
  kmsArn?: string;
  flowStatus?: FlowStatus;
  flowStatusMessage?: string;
  sourceFlowConfig?: SourceFlowConfig;
  destinationFlowConfigList?: DestinationFlowConfig[];
  lastRunExecutionDetails?: ExecutionDetails;
  triggerConfig?: TriggerConfig;
  tasks?: Task[];
  createdAt?: Date;
  lastUpdatedAt?: Date;
  createdBy?: string;
  lastUpdatedBy?: string;
  tags?: { [key: string]: string | undefined };
  metadataCatalogConfig?: MetadataCatalogConfig;
  lastRunMetadataCatalogDetails?: MetadataCatalogDetail[];
  schemaVersion?: number;
}
export interface DescribeFlowExecutionRecordsRequest {
  flowName: string;
  maxResults?: number;
  nextToken?: string;
}
export type ExecutionMessage = string;
export interface ErrorInfo {
  putFailuresCount?: number;
  executionMessage?: string;
}
export interface ExecutionResult {
  errorInfo?: ErrorInfo;
  bytesProcessed?: number;
  bytesWritten?: number;
  recordsProcessed?: number;
  numParallelProcesses?: number;
  maxPageSize?: number;
}
export interface ExecutionRecord {
  executionId?: string;
  executionStatus?: ExecutionStatus;
  executionResult?: ExecutionResult;
  startedAt?: Date;
  lastUpdatedAt?: Date;
  dataPullStartTime?: Date;
  dataPullEndTime?: Date;
  metadataCatalogDetails?: MetadataCatalogDetail[];
}
export type FlowExecutionList = ExecutionRecord[];
export interface DescribeFlowExecutionRecordsResponse {
  flowExecutions?: ExecutionRecord[];
  nextToken?: string;
}
export type EntitiesPath = string;
export type ListEntitiesMaxResults = number;
export interface ListConnectorEntitiesRequest {
  connectorProfileName?: string;
  connectorType?: ConnectorType;
  entitiesPath?: string;
  apiVersion?: string;
  maxResults?: number;
  nextToken?: string;
}
export type Group = string;
export interface ConnectorEntity {
  name: string;
  label?: string;
  hasNestedEntities?: boolean;
}
export type ConnectorEntityList = ConnectorEntity[];
export type ConnectorEntityMap = { [key: string]: ConnectorEntity[] | undefined };
export interface ListConnectorEntitiesResponse {
  connectorEntityMap: { [key: string]: ConnectorEntity[] | undefined };
  nextToken?: string;
}
export interface ListConnectorsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListConnectorsResponse {
  connectors?: ConnectorDetail[];
  nextToken?: string;
}
export interface ListFlowsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface FlowDefinition {
  flowArn?: string;
  description?: string;
  flowName?: string;
  flowStatus?: FlowStatus;
  sourceConnectorType?: ConnectorType;
  sourceConnectorLabel?: string;
  destinationConnectorType?: ConnectorType;
  destinationConnectorLabel?: string;
  triggerType?: TriggerType;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  createdBy?: string;
  lastUpdatedBy?: string;
  tags?: { [key: string]: string | undefined };
  lastRunExecutionDetails?: ExecutionDetails;
}
export type FlowList = FlowDefinition[];
export interface ListFlowsResponse {
  flows?: FlowDefinition[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface RegisterConnectorRequest {
  connectorLabel?: string;
  description?: string;
  connectorProvisioningType?: ConnectorProvisioningType;
  connectorProvisioningConfig?: ConnectorProvisioningConfig;
  clientToken?: string;
}
export interface RegisterConnectorResponse {
  connectorArn?: string;
}
export interface ResetConnectorMetadataCacheRequest {
  connectorProfileName?: string;
  connectorType?: ConnectorType;
  connectorEntityName?: string;
  entitiesPath?: string;
  apiVersion?: string;
}
export interface ResetConnectorMetadataCacheResponse {}
export interface StartFlowRequest {
  flowName: string;
  clientToken?: string;
}
export interface StartFlowResponse {
  flowArn?: string;
  flowStatus?: FlowStatus;
  executionId?: string;
}
export interface StopFlowRequest {
  flowName: string;
}
export interface StopFlowResponse {
  flowArn?: string;
  flowStatus?: FlowStatus;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export interface UnregisterConnectorRequest {
  connectorLabel: string;
  forceDelete?: boolean;
}
export interface UnregisterConnectorResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateConnectorProfileRequest {
  connectorProfileName: string;
  connectionMode: ConnectionMode;
  connectorProfileConfig: ConnectorProfileConfig;
  clientToken?: string;
}
export interface UpdateConnectorProfileResponse {
  connectorProfileArn?: string;
}
export interface UpdateConnectorRegistrationRequest {
  connectorLabel: string;
  description?: string;
  connectorProvisioningConfig?: ConnectorProvisioningConfig;
  clientToken?: string;
}
export interface UpdateConnectorRegistrationResponse {
  connectorArn?: string;
}
export interface UpdateFlowRequest {
  flowName: string;
  description?: string;
  triggerConfig: TriggerConfig;
  sourceFlowConfig: SourceFlowConfig;
  destinationFlowConfigList: DestinationFlowConfig[];
  tasks: Task[];
  metadataCatalogConfig?: MetadataCatalogConfig;
  clientToken?: string;
}
export interface UpdateFlowResponse {
  flowStatus?: FlowStatus;
}
export type ErrorMessage = string;
export type CancelFlowExecutionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels active runs for a flow.
 *
 * You can cancel all of the active runs for a flow, or you can cancel specific runs by
 * providing their IDs.
 *
 * You can cancel a flow run only when the run is in progress. You can't cancel a run that
 * has already completed or failed. You also can't cancel a run that's scheduled to occur but
 * hasn't started yet. To prevent a scheduled run, you can deactivate the flow with the
 * `StopFlow` action.
 *
 * You cannot resume a run after you cancel it.
 *
 * When you send your request, the status for each run becomes `CancelStarted`.
 * When the cancellation completes, the status becomes `Canceled`.
 *
 * When you cancel a run, you still incur charges for any data that the run already
 * processed before the cancellation. If the run had already written some data to the flow
 * destination, then that data remains in the destination. If you configured the flow to use a
 * batch API (such as the Salesforce Bulk API 2.0), then the run will finish reading or writing
 * its entire batch of data after the cancellation. For these operations, the data processing
 * charges for Amazon AppFlow apply. For the pricing information, see Amazon AppFlow pricing.
 */
export const cancelFlowExecutions: API.OperationMethod<
  CancelFlowExecutionsRequest,
  CancelFlowExecutionsResponse,
  CancelFlowExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1, __c0, 1) as any as S.Schema<CancelFlowExecutionsRequest>,
  output: __S(2, __c0, 2) as any as S.Schema<CancelFlowExecutionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelFlowExecutions",
}));

export type CreateConnectorProfileError =
  | ConflictException
  | ConnectorAuthenticationException
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | ConnectorServerException
  | CommonErrors;
/**
 * Creates a new connector profile associated with your Amazon Web Services account. There is
 * a soft quota of 100 connector profiles per Amazon Web Services account. If you need more
 * connector profiles than this quota allows, you can submit a request to the Amazon AppFlow
 * team through the Amazon AppFlow support channel. In each connector profile that you
 * create, you can provide the credentials and properties for only one connector.
 */
export const createConnectorProfile: API.OperationMethod<
  CreateConnectorProfileRequest,
  CreateConnectorProfileResponse,
  CreateConnectorProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41, __c5, 1) as any as S.Schema<CreateConnectorProfileRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<CreateConnectorProfileResponse>,
  errors: [
    ConflictException,
    ConnectorAuthenticationException,
    InternalServerException,
    ServiceQuotaExceededException,
    ValidationException,
    ConnectorServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConnectorProfile",
}));

export type CreateFlowError =
  | AccessDeniedException
  | ConflictException
  | ConnectorAuthenticationException
  | ConnectorServerException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Enables your application to create a new flow using Amazon AppFlow. You must create
 * a connector profile before calling this API. Please note that the Request Syntax below shows
 * syntax for multiple destinations, however, you can only transfer data to one item in this list
 * at a time. Amazon AppFlow does not currently support flows to multiple destinations at
 * once.
 */
export const createFlow: API.OperationMethod<
  CreateFlowRequest,
  CreateFlowResponse,
  CreateFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86, __c10, 6) as any as S.Schema<CreateFlowRequest>,
  output: __S(87, __c10, 7) as any as S.Schema<CreateFlowResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ConnectorAuthenticationException,
    ConnectorServerException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFlow",
}));

export type DeleteConnectorProfileError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Enables you to delete an existing connector profile.
 */
export const deleteConnectorProfile: API.OperationMethod<
  DeleteConnectorProfileRequest,
  DeleteConnectorProfileResponse,
  DeleteConnectorProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(88, __c11, 0) as any as S.Schema<DeleteConnectorProfileRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<DeleteConnectorProfileResponse>,
  errors: [ConflictException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnectorProfile",
}));

export type DeleteFlowError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can
 * delete flows one at a time.
 */
export const deleteFlow: API.OperationMethod<
  DeleteFlowRequest,
  DeleteFlowResponse,
  DeleteFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(90, __c11, 2) as any as S.Schema<DeleteFlowRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<DeleteFlowResponse>,
  errors: [ConflictException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFlow",
}));

export type DescribeConnectorError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes the given custom connector registered in your Amazon Web Services account. This
 * API can be used for custom connectors that are registered in your account and also for Amazon
 * authored connectors.
 */
export const describeConnector: API.OperationMethod<
  DescribeConnectorRequest,
  DescribeConnectorResponse,
  DescribeConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(91, __c11, 3) as any as S.Schema<DescribeConnectorRequest>,
  output: __S(110, __c13, 6) as any as S.Schema<DescribeConnectorResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConnector",
}));

export type DescribeConnectorEntityError =
  | ConnectorAuthenticationException
  | ConnectorServerException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Provides details regarding the entity used with the connector, with a description of the
 * data model for each field in that entity.
 */
export const describeConnectorEntity: API.OperationMethod<
  DescribeConnectorEntityRequest,
  DescribeConnectorEntityResponse,
  DescribeConnectorEntityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(111, __c13, 7) as any as S.Schema<DescribeConnectorEntityRequest>,
  output: __S(119, __c14, 7) as any as S.Schema<DescribeConnectorEntityResponse>,
  errors: [
    ConnectorAuthenticationException,
    ConnectorServerException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConnectorEntity",
}));

export type DescribeConnectorProfilesError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of `connector-profile` details matching the provided
 * `connector-profile` names and `connector-types`. Both input lists are
 * optional, and you can use them to filter the result.
 *
 * If no names or `connector-types` are provided, returns all connector profiles
 * in a paginated form. If there is no match, this operation returns an empty list.
 */
export const describeConnectorProfiles: API.PaginatedOperationMethod<
  DescribeConnectorProfilesRequest,
  DescribeConnectorProfilesResponse,
  DescribeConnectorProfilesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(120, __c15, 0) as any as S.Schema<DescribeConnectorProfilesRequest>,
  output: __S(124, __c15, 4) as any as S.Schema<DescribeConnectorProfilesResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConnectorProfiles",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeConnectorsError = InternalServerException | ValidationException | CommonErrors;
/**
 * Describes the connectors vended by Amazon AppFlow for specified connector types. If
 * you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response
 * contains a `nextToken` object, which can be be passed in to the next call to the
 * `DescribeConnectors` API operation to retrieve the next page.
 */
export const describeConnectors: API.PaginatedOperationMethod<
  DescribeConnectorsRequest,
  DescribeConnectorsResponse,
  DescribeConnectorsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(125, __c15, 5) as any as S.Schema<DescribeConnectorsRequest>,
  output: __S(129, __c16, 1) as any as S.Schema<DescribeConnectorsResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConnectors",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeFlowError = InternalServerException | ResourceNotFoundException | CommonErrors;
/**
 * Provides a description of the specified flow.
 */
export const describeFlow: API.OperationMethod<
  DescribeFlowRequest,
  DescribeFlowResponse,
  DescribeFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(130, __c16, 2) as any as S.Schema<DescribeFlowRequest>,
  output: __S(135, __c16, 7) as any as S.Schema<DescribeFlowResponse>,
  errors: [InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFlow",
}));

export type DescribeFlowExecutionRecordsError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Fetches the execution history of the flow.
 */
export const describeFlowExecutionRecords: API.PaginatedOperationMethod<
  DescribeFlowExecutionRecordsRequest,
  DescribeFlowExecutionRecordsResponse,
  DescribeFlowExecutionRecordsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(136, __c17, 0) as any as S.Schema<DescribeFlowExecutionRecordsRequest>,
  output: __S(141, __c17, 5) as any as S.Schema<DescribeFlowExecutionRecordsResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFlowExecutionRecords",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConnectorEntitiesError =
  | ConnectorAuthenticationException
  | ConnectorServerException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns the list of available connector entities supported by Amazon AppFlow. For
 * example, you can query Salesforce for *Account* and
 * *Opportunity* entities, or query ServiceNow for the
 * *Incident* entity.
 */
export const listConnectorEntities: API.OperationMethod<
  ListConnectorEntitiesRequest,
  ListConnectorEntitiesResponse,
  ListConnectorEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(142, __c17, 6) as any as S.Schema<ListConnectorEntitiesRequest>,
  output: __S(146, __c18, 2) as any as S.Schema<ListConnectorEntitiesResponse>,
  errors: [
    ConnectorAuthenticationException,
    ConnectorServerException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnectorEntities",
}));

export type ListConnectorsError = InternalServerException | ValidationException | CommonErrors;
/**
 * Returns the list of all registered custom connectors in your Amazon Web Services account.
 * This API lists only custom connectors registered in this account, not the Amazon Web Services
 * authored connectors.
 */
export const listConnectors: API.PaginatedOperationMethod<
  ListConnectorsRequest,
  ListConnectorsResponse,
  ListConnectorsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(147, __c18, 3) as any as S.Schema<ListConnectorsRequest>,
  output: __S(148, __c18, 4) as any as S.Schema<ListConnectorsResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnectors",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFlowsError = InternalServerException | ValidationException | CommonErrors;
/**
 * Lists all of the flows associated with your account.
 */
export const listFlows: API.PaginatedOperationMethod<
  ListFlowsRequest,
  ListFlowsResponse,
  ListFlowsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(149, __c18, 5) as any as S.Schema<ListFlowsRequest>,
  output: __S(152, __c19, 0) as any as S.Schema<ListFlowsResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFlows",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the tags that are associated with a specified flow.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(153, __c19, 1) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(154, __c19, 2) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type RegisterConnectorError =
  | AccessDeniedException
  | ConflictException
  | ConnectorAuthenticationException
  | ConnectorServerException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Registers a new custom connector with your Amazon Web Services account. Before you can
 * register the connector, you must deploy the associated AWS lambda function in your
 * account.
 */
export const registerConnector: API.OperationMethod<
  RegisterConnectorRequest,
  RegisterConnectorResponse,
  RegisterConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(155, __c19, 3) as any as S.Schema<RegisterConnectorRequest>,
  output: __S(156, __c19, 4) as any as S.Schema<RegisterConnectorResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ConnectorAuthenticationException,
    ConnectorServerException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterConnector",
}));

export type ResetConnectorMetadataCacheError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Resets metadata about your connector entities that Amazon AppFlow stored in its
 * cache. Use this action when you want Amazon AppFlow to return the latest information
 * about the data that you have in a source application.
 *
 * Amazon AppFlow returns metadata about your entities when you use the
 * ListConnectorEntities or DescribeConnectorEntities actions. Following these actions, Amazon AppFlow caches the metadata to reduce the number of API requests that it must send to
 * the source application. Amazon AppFlow automatically resets the cache once every hour,
 * but you can use this action when you want to get the latest metadata right away.
 */
export const resetConnectorMetadataCache: API.OperationMethod<
  ResetConnectorMetadataCacheRequest,
  ResetConnectorMetadataCacheResponse,
  ResetConnectorMetadataCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(157, __c19, 5) as any as S.Schema<ResetConnectorMetadataCacheRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<ResetConnectorMetadataCacheResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResetConnectorMetadataCache",
}));

export type StartFlowError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Activates an existing flow. For on-demand flows, this operation runs the flow
 * immediately. For schedule and event-triggered flows, this operation activates the flow.
 */
export const startFlow: API.OperationMethod<
  StartFlowRequest,
  StartFlowResponse,
  StartFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(158, __c19, 6) as any as S.Schema<StartFlowRequest>,
  output: __S(159, __c19, 7) as any as S.Schema<StartFlowResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartFlow",
}));

export type StopFlowError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Deactivates the existing flow. For on-demand flows, this operation returns an
 * `unsupportedOperationException` error message. For schedule and event-triggered
 * flows, this operation deactivates the flow.
 */
export const stopFlow: API.OperationMethod<
  StopFlowRequest,
  StopFlowResponse,
  StopFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(160, __c20, 0) as any as S.Schema<StopFlowRequest>,
  output: __S(87, __c10, 7) as any as S.Schema<StopFlowResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopFlow",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Applies a tag to the specified flow.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(161, __c20, 1) as any as S.Schema<TagResourceRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<TagResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UnregisterConnectorError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Unregisters the custom connector registered in your account that matches the connector
 * label provided in the request.
 */
export const unregisterConnector: API.OperationMethod<
  UnregisterConnectorRequest,
  UnregisterConnectorResponse,
  UnregisterConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(162, __c20, 2) as any as S.Schema<UnregisterConnectorRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<UnregisterConnectorResponse>,
  errors: [ConflictException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UnregisterConnector",
}));

export type UntagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes a tag from the specified flow.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(163, __c20, 3) as any as S.Schema<UntagResourceRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<UntagResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateConnectorProfileError =
  | ConflictException
  | ConnectorAuthenticationException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | ConnectorServerException
  | CommonErrors;
/**
 * Updates a given connector profile associated with your account.
 */
export const updateConnectorProfile: API.OperationMethod<
  UpdateConnectorProfileRequest,
  UpdateConnectorProfileResponse,
  UpdateConnectorProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(164, __c20, 4) as any as S.Schema<UpdateConnectorProfileRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<UpdateConnectorProfileResponse>,
  errors: [
    ConflictException,
    ConnectorAuthenticationException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    ConnectorServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConnectorProfile",
}));

export type UpdateConnectorRegistrationError =
  | AccessDeniedException
  | ConflictException
  | ConnectorAuthenticationException
  | ConnectorServerException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a custom connector that you've previously registered. This operation updates the
 * connector with one of the following:
 *
 * - The latest version of the AWS Lambda function that's assigned to the connector
 *
 * - A new AWS Lambda function that you specify
 */
export const updateConnectorRegistration: API.OperationMethod<
  UpdateConnectorRegistrationRequest,
  UpdateConnectorRegistrationResponse,
  UpdateConnectorRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(165, __c20, 5) as any as S.Schema<UpdateConnectorRegistrationRequest>,
  output: __S(156, __c19, 4) as any as S.Schema<UpdateConnectorRegistrationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ConnectorAuthenticationException,
    ConnectorServerException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConnectorRegistration",
}));

export type UpdateFlowError =
  | AccessDeniedException
  | ConflictException
  | ConnectorAuthenticationException
  | ConnectorServerException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing flow.
 */
export const updateFlow: API.OperationMethod<
  UpdateFlowRequest,
  UpdateFlowResponse,
  UpdateFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(166, __c20, 6) as any as S.Schema<UpdateFlowRequest>,
  output: __S(167, __c20, 7) as any as S.Schema<UpdateFlowResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ConnectorAuthenticationException,
    ConnectorServerException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFlow",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({ flowName: S.String, executionIds: S.optional(__S(0, __c0, 0)) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/cancel-flow-executions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelFlowExecutionsRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ invalidExecutions: S.optional(__S(0, __c0, 0)) })).annotate(
        {
          identifier: "CancelFlowExecutionsResponse",
        },
      );
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AmplitudeConnectorProfileProperties",
      });
    case 4:
      return S.suspend(() => S.Struct({ instanceUrl: S.String })).annotate({
        identifier: "DatadogConnectorProfileProperties",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          databaseUrl: S.optional(S.String),
          bucketName: S.String,
          bucketPrefix: S.optional(S.String),
          roleArn: S.String,
          dataApiRoleArn: S.optional(S.String),
          isRedshiftServerless: S.optional(S.Boolean),
          clusterIdentifier: S.optional(S.String),
          workgroupName: S.optional(S.String),
          databaseName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RedshiftConnectorProfileProperties",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          instanceUrl: S.optional(S.String),
          isSandboxEnvironment: S.optional(S.Boolean),
          usePrivateLinkForMetadataAndAuthorization: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "SalesforceConnectorProfileProperties",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          warehouse: S.String,
          stage: S.String,
          bucketName: S.String,
          bucketPrefix: S.optional(S.String),
          privateLinkServiceName: S.optional(S.String),
          accountName: S.optional(S.String),
          region: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SnowflakeConnectorProfileProperties",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ tokenUrl: S.String, authCodeUrl: S.String, oAuthScopes: __S(0, __c0, 0) }),
      ).annotate({ identifier: "OAuthProperties" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          applicationHostUrl: S.String,
          applicationServicePath: S.String,
          portNumber: S.Number,
          clientNumber: S.String,
          logonLanguage: S.optional(S.String),
          privateLinkServiceName: S.optional(S.String),
          oAuthProperties: S.optional(__S(8, __c1, 0)),
          disableSSO: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "SAPODataConnectorProfileProperties",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          tokenUrl: S.String,
          oAuth2GrantType: S.String,
          tokenUrlCustomProperties: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({ identifier: "OAuth2Properties" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          profileProperties: S.optional(__S(10, __c1, 2)),
          oAuth2Properties: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({
        identifier: "CustomConnectorProfileProperties",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          instanceUrl: S.optional(S.String),
          isSandboxEnvironment: S.optional(S.Boolean),
          businessUnitId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PardotConnectorProfileProperties",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Amplitude: S.optional(__S(3, __c0, 3)),
          Datadog: S.optional(__S(4, __c0, 4)),
          Dynatrace: S.optional(__S(4, __c0, 4)),
          GoogleAnalytics: S.optional(__S(3, __c0, 3)),
          Honeycode: S.optional(__S(3, __c0, 3)),
          InforNexus: S.optional(__S(4, __c0, 4)),
          Marketo: S.optional(__S(4, __c0, 4)),
          Redshift: S.optional(__S(5, __c0, 5)),
          Salesforce: S.optional(__S(6, __c0, 6)),
          ServiceNow: S.optional(__S(4, __c0, 4)),
          Singular: S.optional(__S(3, __c0, 3)),
          Slack: S.optional(__S(4, __c0, 4)),
          Snowflake: S.optional(__S(7, __c0, 7)),
          Trendmicro: S.optional(__S(3, __c0, 3)),
          Veeva: S.optional(__S(4, __c0, 4)),
          Zendesk: S.optional(__S(4, __c0, 4)),
          SAPOData: S.optional(__S(9, __c1, 1)),
          CustomConnector: S.optional(__S(12, __c1, 4)),
          Pardot: S.optional(__S(13, __c1, 5)),
        }),
      ).annotate({
        identifier: "ConnectorProfileProperties",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ apiKey: SensitiveString, secretKey: SensitiveString }),
      ).annotate({
        identifier: "AmplitudeConnectorProfileCredentials",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ apiKey: SensitiveString, applicationKey: SensitiveString }),
      ).annotate({
        identifier: "DatadogConnectorProfileCredentials",
      });
    case 1:
      return S.suspend(() => S.Struct({ apiToken: SensitiveString })).annotate({
        identifier: "DynatraceConnectorProfileCredentials",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          authCode: S.optional(S.String),
          redirectUri: S.optional(S.String),
          codeVerifier: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ConnectorOAuthRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clientId: S.String,
          clientSecret: SensitiveString,
          accessToken: S.optional(SensitiveString),
          refreshToken: S.optional(SensitiveString),
          oAuthRequest: S.optional(__S(18, __c2, 2)),
        }),
      ).annotate({
        identifier: "GoogleAnalyticsConnectorProfileCredentials",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          accessToken: S.optional(SensitiveString),
          refreshToken: S.optional(SensitiveString),
          oAuthRequest: S.optional(__S(18, __c2, 2)),
        }),
      ).annotate({
        identifier: "HoneycodeConnectorProfileCredentials",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          accessKeyId: SensitiveString,
          userId: S.String,
          secretAccessKey: SensitiveString,
          datakey: SensitiveString,
        }),
      ).annotate({
        identifier: "InforNexusConnectorProfileCredentials",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientId: S.String,
          clientSecret: SensitiveString,
          accessToken: S.optional(SensitiveString),
          oAuthRequest: S.optional(__S(18, __c2, 2)),
        }),
      ).annotate({
        identifier: "MarketoConnectorProfileCredentials",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ username: S.optional(S.String), password: S.optional(SensitiveString) }),
      ).annotate({
        identifier: "RedshiftConnectorProfileCredentials",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accessToken: S.optional(SensitiveString),
          refreshToken: S.optional(SensitiveString),
          oAuthRequest: S.optional(__S(18, __c2, 2)),
          clientCredentialsArn: S.optional(SensitiveString),
          oAuth2GrantType: S.optional(S.String),
          jwtToken: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "SalesforceConnectorProfileCredentials",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          clientId: S.optional(S.String),
          clientSecret: S.optional(SensitiveString),
          accessToken: S.optional(SensitiveString),
          refreshToken: S.optional(SensitiveString),
          oAuthRequest: S.optional(__S(18, __c2, 2)),
        }),
      ).annotate({ identifier: "OAuth2Credentials" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          username: S.optional(S.String),
          password: S.optional(SensitiveString),
          oAuth2Credentials: S.optional(__S(25, __c3, 1)),
        }),
      ).annotate({
        identifier: "ServiceNowConnectorProfileCredentials",
      });
    case 3:
      return S.suspend(() => S.Struct({ apiKey: SensitiveString })).annotate({
        identifier: "SingularConnectorProfileCredentials",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          username: S.String,
          password: S.optional(SensitiveString),
          privateKey: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "SnowflakeConnectorProfileCredentials",
      });
    case 5:
      return S.suspend(() => S.Struct({ apiSecretKey: SensitiveString })).annotate({
        identifier: "TrendmicroConnectorProfileCredentials",
      });
    case 6:
      return S.suspend(() => S.Struct({ username: S.String, password: SensitiveString })).annotate({
        identifier: "VeevaConnectorProfileCredentials",
      });
    case 7:
      return S.suspend(() => S.Struct({ username: S.String, password: SensitiveString })).annotate({
        identifier: "BasicAuthCredentials",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clientId: S.String,
          clientSecret: SensitiveString,
          accessToken: S.optional(SensitiveString),
          refreshToken: S.optional(SensitiveString),
          oAuthRequest: S.optional(__S(18, __c2, 2)),
        }),
      ).annotate({ identifier: "OAuthCredentials" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          basicAuthCredentials: S.optional(__S(31, __c3, 7)),
          oAuthCredentials: S.optional(__S(32, __c4, 0)),
        }),
      ).annotate({
        identifier: "SAPODataConnectorProfileCredentials",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ apiKey: SensitiveString, apiSecretKey: S.optional(SensitiveString) }),
      ).annotate({ identifier: "ApiKeyCredentials" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ SensitiveString.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          customAuthenticationType: S.String,
          credentialsMap: S.optional(__S(35, __c4, 3)),
        }),
      ).annotate({ identifier: "CustomAuthCredentials" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          authenticationType: S.String,
          basic: S.optional(__S(31, __c3, 7)),
          oauth2: S.optional(__S(25, __c3, 1)),
          apiKey: S.optional(__S(34, __c4, 2)),
          custom: S.optional(__S(36, __c4, 4)),
        }),
      ).annotate({
        identifier: "CustomConnectorProfileCredentials",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          accessToken: S.optional(SensitiveString),
          refreshToken: S.optional(SensitiveString),
          oAuthRequest: S.optional(__S(18, __c2, 2)),
          clientCredentialsArn: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "PardotConnectorProfileCredentials",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Amplitude: S.optional(__S(15, __c1, 7)),
          Datadog: S.optional(__S(16, __c2, 0)),
          Dynatrace: S.optional(__S(17, __c2, 1)),
          GoogleAnalytics: S.optional(__S(19, __c2, 3)),
          Honeycode: S.optional(__S(20, __c2, 4)),
          InforNexus: S.optional(__S(21, __c2, 5)),
          Marketo: S.optional(__S(22, __c2, 6)),
          Redshift: S.optional(__S(23, __c2, 7)),
          Salesforce: S.optional(__S(24, __c3, 0)),
          ServiceNow: S.optional(__S(26, __c3, 2)),
          Singular: S.optional(__S(27, __c3, 3)),
          Slack: S.optional(__S(22, __c2, 6)),
          Snowflake: S.optional(__S(28, __c3, 4)),
          Trendmicro: S.optional(__S(29, __c3, 5)),
          Veeva: S.optional(__S(30, __c3, 6)),
          Zendesk: S.optional(__S(22, __c2, 6)),
          SAPOData: S.optional(__S(33, __c4, 1)),
          CustomConnector: S.optional(__S(37, __c4, 5)),
          Pardot: S.optional(__S(38, __c4, 6)),
        }),
      ).annotate({
        identifier: "ConnectorProfileCredentials",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          connectorProfileProperties: __S(14, __c1, 6),
          connectorProfileCredentials: S.optional(__S(39, __c4, 7)),
        }),
      ).annotate({ identifier: "ConnectorProfileConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          connectorProfileName: S.String,
          kmsArn: S.optional(S.String),
          connectorType: S.String,
          connectorLabel: S.optional(S.String),
          connectionMode: S.String,
          connectorProfileConfig: __S(40, __c5, 0),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/create-connector-profile" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConnectorProfileRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ connectorProfileArn: S.optional(S.String) })).annotate({
        identifier: "CreateConnectorProfileResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          scheduleExpression: S.String,
          dataPullMode: S.optional(S.String),
          scheduleStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          scheduleEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          timezone: S.optional(S.String),
          scheduleOffset: S.optional(S.Number),
          firstExecutionFrom: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          flowErrorDeactivationThreshold: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ScheduledTriggerProperties",
      });
    case 4:
      return S.suspend(() => S.Struct({ Scheduled: S.optional(__S(43, __c5, 3)) })).annotate({
        identifier: "TriggerProperties",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ triggerType: S.String, triggerProperties: S.optional(__S(44, __c5, 4)) }),
      ).annotate({ identifier: "TriggerConfig" });
    case 6:
      return S.suspend(() => S.Struct({ object: S.String })).annotate({
        identifier: "AmplitudeSourceProperties",
      });
    case 7:
      return S.suspend(() => S.Struct({ object: S.String })).annotate({
        identifier: "DatadogSourceProperties",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ s3InputFileType: S.optional(S.String) })).annotate({
        identifier: "S3InputFormatConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          bucketName: S.String,
          bucketPrefix: S.optional(S.String),
          s3InputFormatConfig: S.optional(__S(48, __c6, 0)),
        }),
      ).annotate({ identifier: "S3SourceProperties" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          object: S.String,
          enableDynamicFieldUpdate: S.optional(S.Boolean),
          includeDeletedRecords: S.optional(S.Boolean),
          dataTransferApi: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SalesforceSourceProperties",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          object: S.String,
          documentType: S.optional(S.String),
          includeSourceFiles: S.optional(S.Boolean),
          includeRenditions: S.optional(S.Boolean),
          includeAllVersions: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "VeevaSourceProperties" });
    case 4:
      return S.suspend(() => S.Struct({ maxParallelism: S.Number })).annotate({
        identifier: "SAPODataParallelismConfig",
      });
    case 5:
      return S.suspend(() => S.Struct({ maxPageSize: S.Number })).annotate({
        identifier: "SAPODataPaginationConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          objectPath: S.optional(S.String),
          parallelismConfig: S.optional(__S(52, __c6, 4)),
          paginationConfig: S.optional(__S(53, __c6, 5)),
        }),
      ).annotate({ identifier: "SAPODataSourceProperties" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Type: S.optional(S.String) }),
      ).annotate({ identifier: "DataTransferApi" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          entityName: S.String,
          customProperties: S.optional(__S(10, __c1, 2)),
          dataTransferApi: S.optional(__S(55, __c6, 7)),
        }),
      ).annotate({
        identifier: "CustomConnectorSourceProperties",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Amplitude: S.optional(__S(46, __c5, 6)),
          Datadog: S.optional(__S(47, __c5, 7)),
          Dynatrace: S.optional(__S(46, __c5, 6)),
          GoogleAnalytics: S.optional(__S(46, __c5, 6)),
          InforNexus: S.optional(__S(46, __c5, 6)),
          Marketo: S.optional(__S(47, __c5, 7)),
          S3: S.optional(__S(49, __c6, 1)),
          Salesforce: S.optional(__S(50, __c6, 2)),
          ServiceNow: S.optional(__S(46, __c5, 6)),
          Singular: S.optional(__S(47, __c5, 7)),
          Slack: S.optional(__S(47, __c5, 7)),
          Trendmicro: S.optional(__S(46, __c5, 6)),
          Veeva: S.optional(__S(51, __c6, 3)),
          Zendesk: S.optional(__S(47, __c5, 7)),
          SAPOData: S.optional(__S(54, __c6, 6)),
          CustomConnector: S.optional(__S(56, __c7, 0)),
          Pardot: S.optional(__S(47, __c5, 7)),
        }),
      ).annotate({
        identifier: "SourceConnectorProperties",
      });
    case 2:
      return S.suspend(() => S.Struct({ datetimeTypeFieldName: S.optional(S.String) })).annotate({
        identifier: "IncrementalPullConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          connectorType: S.String,
          apiVersion: S.optional(S.String),
          connectorProfileName: S.optional(S.String),
          sourceConnectorProperties: __S(57, __c7, 1),
          incrementalPullConfig: S.optional(__S(58, __c7, 2)),
        }),
      ).annotate({ identifier: "SourceFlowConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          failOnFirstDestinationError: S.optional(S.Boolean),
          bucketPrefix: S.optional(S.String),
          bucketName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ErrorHandlingConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          object: S.String,
          intermediateBucketName: S.String,
          bucketPrefix: S.optional(S.String),
          errorHandlingConfig: S.optional(__S(60, __c7, 4)),
        }),
      ).annotate({
        identifier: "RedshiftDestinationProperties",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          prefixType: S.optional(S.String),
          prefixFormat: S.optional(S.String),
          pathPrefixHierarchy: S.optional(__S(62, __c7, 6)),
        }),
      ).annotate({ identifier: "PrefixConfig" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          aggregationType: S.optional(S.String),
          targetFileSize: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AggregationConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          fileType: S.optional(S.String),
          prefixConfig: S.optional(__S(63, __c7, 7)),
          aggregationConfig: S.optional(__S(64, __c8, 0)),
          preserveSourceDataTyping: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "S3OutputFormatConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          bucketName: S.String,
          bucketPrefix: S.optional(S.String),
          s3OutputFormatConfig: S.optional(__S(65, __c8, 1)),
        }),
      ).annotate({ identifier: "S3DestinationProperties" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          object: S.String,
          idFieldNames: S.optional(__S(0, __c0, 0)),
          errorHandlingConfig: S.optional(__S(60, __c7, 4)),
          writeOperationType: S.optional(S.String),
          dataTransferApi: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SalesforceDestinationProperties",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ object: S.String, errorHandlingConfig: S.optional(__S(60, __c7, 4)) }),
      ).annotate({
        identifier: "EventBridgeDestinationProperties",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          fileType: S.optional(S.String),
          prefixConfig: __S(63, __c7, 7),
          aggregationConfig: S.optional(__S(64, __c8, 0)),
        }),
      ).annotate({
        identifier: "UpsolverS3OutputFormatConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          bucketName: S.String,
          bucketPrefix: S.optional(S.String),
          s3OutputFormatConfig: __S(69, __c8, 5),
        }),
      ).annotate({
        identifier: "UpsolverDestinationProperties",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ domainName: S.String, objectTypeName: S.optional(S.String) }),
      ).annotate({
        identifier: "CustomerProfilesDestinationProperties",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          object: S.String,
          idFieldNames: S.optional(__S(0, __c0, 0)),
          errorHandlingConfig: S.optional(__S(60, __c7, 4)),
          writeOperationType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ZendeskDestinationProperties",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          entityName: S.String,
          errorHandlingConfig: S.optional(__S(60, __c7, 4)),
          writeOperationType: S.optional(S.String),
          idFieldNames: S.optional(__S(0, __c0, 0)),
          customProperties: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({
        identifier: "CustomConnectorDestinationProperties",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ bucketPrefix: S.optional(S.String), bucketName: S.optional(S.String) }),
      ).annotate({
        identifier: "SuccessResponseHandlingConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          objectPath: S.String,
          successResponseHandlingConfig: S.optional(__S(74, __c9, 2)),
          idFieldNames: S.optional(__S(0, __c0, 0)),
          errorHandlingConfig: S.optional(__S(60, __c7, 4)),
          writeOperationType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SAPODataDestinationProperties",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Redshift: S.optional(__S(61, __c7, 5)),
          S3: S.optional(__S(66, __c8, 2)),
          Salesforce: S.optional(__S(67, __c8, 3)),
          Snowflake: S.optional(__S(61, __c7, 5)),
          EventBridge: S.optional(__S(68, __c8, 4)),
          LookoutMetrics: S.optional(__S(3, __c0, 3)),
          Upsolver: S.optional(__S(70, __c8, 6)),
          Honeycode: S.optional(__S(68, __c8, 4)),
          CustomerProfiles: S.optional(__S(71, __c8, 7)),
          Zendesk: S.optional(__S(72, __c9, 0)),
          Marketo: S.optional(__S(68, __c8, 4)),
          CustomConnector: S.optional(__S(73, __c9, 1)),
          SAPOData: S.optional(__S(75, __c9, 3)),
        }),
      ).annotate({
        identifier: "DestinationConnectorProperties",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          connectorType: S.String,
          apiVersion: S.optional(S.String),
          connectorProfileName: S.optional(S.String),
          destinationConnectorProperties: __S(76, __c9, 4),
        }),
      ).annotate({ identifier: "DestinationFlowConfig" });
    case 6:
      return S.Array(__S(77, __c9, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Amplitude: S.optional(S.String),
          Datadog: S.optional(S.String),
          Dynatrace: S.optional(S.String),
          GoogleAnalytics: S.optional(S.String),
          InforNexus: S.optional(S.String),
          Marketo: S.optional(S.String),
          S3: S.optional(S.String),
          Salesforce: S.optional(S.String),
          ServiceNow: S.optional(S.String),
          Singular: S.optional(S.String),
          Slack: S.optional(S.String),
          Trendmicro: S.optional(S.String),
          Veeva: S.optional(S.String),
          Zendesk: S.optional(S.String),
          SAPOData: S.optional(S.String),
          CustomConnector: S.optional(S.String),
          Pardot: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConnectorOperator" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          sourceFields: __S(0, __c0, 0),
          connectorOperator: S.optional(__S(79, __c9, 7)),
          destinationField: S.optional(S.String),
          taskType: S.String,
          taskProperties: S.optional(__S(80, __c10, 0)),
        }),
      ).annotate({ identifier: "Task" });
    case 2:
      return S.Array(__S(81, __c10, 1));
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({ roleArn: S.String, databaseName: S.String, tablePrefix: S.String }),
      ).annotate({ identifier: "GlueDataCatalogConfig" });
    case 5:
      return S.suspend(() => S.Struct({ glueDataCatalog: S.optional(__S(84, __c10, 4)) })).annotate(
        { identifier: "MetadataCatalogConfig" },
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          flowName: S.String,
          description: S.optional(S.String),
          kmsArn: S.optional(S.String),
          triggerConfig: __S(45, __c5, 5),
          sourceFlowConfig: __S(59, __c7, 3),
          destinationFlowConfigList: __S(78, __c9, 6),
          tasks: __S(82, __c10, 2),
          tags: S.optional(__S(83, __c10, 3)),
          metadataCatalogConfig: S.optional(__S(85, __c10, 5)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/create-flow" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateFlowRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ flowArn: S.optional(S.String), flowStatus: S.optional(S.String) }),
      ).annotate({ identifier: "CreateFlowResponse" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ connectorProfileName: S.String, forceDelete: S.optional(S.Boolean) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/delete-connector-profile" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConnectorProfileRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteConnectorProfileResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ flowName: S.String, forceDelete: S.optional(S.Boolean) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/delete-flow" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteFlowRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ connectorType: S.String, connectorLabel: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describe-connector" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeConnectorRequest" });
    case 4:
      return S.suspend(() => S.Struct({ oAuthScopes: S.optional(__S(0, __c0, 0)) })).annotate({
        identifier: "GoogleAnalyticsMetadata",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          oAuthScopes: S.optional(__S(0, __c0, 0)),
          dataTransferApis: S.optional(__S(62, __c7, 6)),
          oauth2GrantTypesSupported: S.optional(__S(62, __c7, 6)),
        }),
      ).annotate({ identifier: "SalesforceMetadata" });
    case 6:
      return S.suspend(() => S.Struct({ supportedRegions: S.optional(__S(0, __c0, 0)) })).annotate({
        identifier: "SnowflakeMetadata",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Amplitude: S.optional(__S(89, __c11, 1)),
          Datadog: S.optional(__S(89, __c11, 1)),
          Dynatrace: S.optional(__S(89, __c11, 1)),
          GoogleAnalytics: S.optional(__S(92, __c11, 4)),
          InforNexus: S.optional(__S(89, __c11, 1)),
          Marketo: S.optional(__S(89, __c11, 1)),
          Redshift: S.optional(__S(89, __c11, 1)),
          S3: S.optional(__S(89, __c11, 1)),
          Salesforce: S.optional(__S(93, __c11, 5)),
          ServiceNow: S.optional(__S(89, __c11, 1)),
          Singular: S.optional(__S(89, __c11, 1)),
          Slack: S.optional(__S(92, __c11, 4)),
          Snowflake: S.optional(__S(94, __c11, 6)),
          Trendmicro: S.optional(__S(89, __c11, 1)),
          Veeva: S.optional(__S(89, __c11, 1)),
          Zendesk: S.optional(__S(92, __c11, 4)),
          EventBridge: S.optional(__S(89, __c11, 1)),
          Upsolver: S.optional(__S(89, __c11, 1)),
          CustomerProfiles: S.optional(__S(89, __c11, 1)),
          Honeycode: S.optional(__S(92, __c11, 4)),
          SAPOData: S.optional(__S(89, __c11, 1)),
          Pardot: S.optional(__S(89, __c11, 1)),
        }),
      ).annotate({ identifier: "ConnectorMetadata" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          isRequired: S.optional(S.Boolean),
          label: S.optional(S.String),
          description: S.optional(S.String),
          isSensitiveField: S.optional(S.Boolean),
          connectorSuppliedValues: S.optional(__S(0, __c0, 0)),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "OAuth2CustomParameter" });
    case 1:
      return S.Array(__S(96, __c12, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          oauthScopes: S.optional(__S(0, __c0, 0)),
          tokenUrls: S.optional(__S(0, __c0, 0)),
          authCodeUrls: S.optional(__S(0, __c0, 0)),
          oauth2GrantTypesSupported: S.optional(__S(62, __c7, 6)),
          oauth2CustomProperties: S.optional(__S(97, __c12, 1)),
        }),
      ).annotate({ identifier: "OAuth2Defaults" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          isRequired: S.optional(S.Boolean),
          label: S.optional(S.String),
          description: S.optional(S.String),
          isSensitiveField: S.optional(S.Boolean),
          connectorSuppliedValues: S.optional(__S(0, __c0, 0)),
        }),
      ).annotate({ identifier: "AuthParameter" });
    case 4:
      return S.Array(__S(99, __c12, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          customAuthenticationType: S.optional(S.String),
          authParameters: S.optional(__S(100, __c12, 4)),
        }),
      ).annotate({ identifier: "CustomAuthConfig" });
    case 6:
      return S.Array(__S(101, __c12, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          isBasicAuthSupported: S.optional(S.Boolean),
          isApiKeyAuthSupported: S.optional(S.Boolean),
          isOAuth2Supported: S.optional(S.Boolean),
          isCustomAuthSupported: S.optional(S.Boolean),
          oAuth2Defaults: S.optional(__S(98, __c12, 2)),
          customAuthConfigs: S.optional(__S(102, __c12, 6)),
        }),
      ).annotate({ identifier: "AuthenticationConfig" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          dataType: S.optional(S.String),
          isRequired: S.optional(S.Boolean),
          label: S.optional(S.String),
          description: S.optional(S.String),
          scope: S.optional(S.String),
          connectorSuppliedValueOptions: S.optional(__S(0, __c0, 0)),
        }),
      ).annotate({ identifier: "ConnectorRuntimeSetting" });
    case 1:
      return S.Array(__S(104, __c13, 0));
    case 2:
      return S.suspend(() => S.Struct({ lambdaArn: S.String })).annotate({
        identifier: "LambdaConnectorProvisioningConfig",
      });
    case 3:
      return S.suspend(() => S.Struct({ lambda: S.optional(__S(106, __c13, 2)) })).annotate({
        identifier: "ConnectorProvisioningConfig",
      });
    case 4:
      return S.Array(__S(55, __c6, 7));
    case 5:
      return S.suspend(() =>
        S.Struct({
          canUseAsSource: S.optional(S.Boolean),
          canUseAsDestination: S.optional(S.Boolean),
          supportedDestinationConnectors: S.optional(__S(62, __c7, 6)),
          supportedSchedulingFrequencies: S.optional(__S(62, __c7, 6)),
          isPrivateLinkEnabled: S.optional(S.Boolean),
          isPrivateLinkEndpointUrlRequired: S.optional(S.Boolean),
          supportedTriggerTypes: S.optional(__S(62, __c7, 6)),
          connectorMetadata: S.optional(__S(95, __c11, 7)),
          connectorType: S.optional(S.String),
          connectorLabel: S.optional(S.String),
          connectorDescription: S.optional(S.String),
          connectorOwner: S.optional(S.String),
          connectorName: S.optional(S.String),
          connectorVersion: S.optional(S.String),
          connectorArn: S.optional(S.String),
          connectorModes: S.optional(__S(0, __c0, 0)),
          authenticationConfig: S.optional(__S(103, __c12, 7)),
          connectorRuntimeSettings: S.optional(__S(105, __c13, 1)),
          supportedApiVersions: S.optional(__S(0, __c0, 0)),
          supportedOperators: S.optional(__S(62, __c7, 6)),
          supportedWriteOperations: S.optional(__S(62, __c7, 6)),
          connectorProvisioningType: S.optional(S.String),
          connectorProvisioningConfig: S.optional(__S(107, __c13, 3)),
          logoURL: S.optional(S.String),
          registeredAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          registeredBy: S.optional(S.String),
          supportedDataTransferTypes: S.optional(__S(62, __c7, 6)),
          supportedDataTransferApis: S.optional(__S(108, __c13, 4)),
        }),
      ).annotate({ identifier: "ConnectorConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({ connectorConfiguration: S.optional(__S(109, __c13, 5)) }),
      ).annotate({
        identifier: "DescribeConnectorResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          connectorEntityName: S.String,
          connectorType: S.optional(S.String),
          connectorProfileName: S.optional(S.String),
          apiVersion: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describe-connector-entity" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeConnectorEntityRequest",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ maximum: S.optional(S.Number), minimum: S.optional(S.Number) }),
      ).annotate({ identifier: "Range" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          fieldType: S.String,
          filterOperators: __S(62, __c7, 6),
          supportedValues: S.optional(__S(0, __c0, 0)),
          valueRegexPattern: S.optional(S.String),
          supportedDateFormat: S.optional(S.String),
          fieldValueRange: S.optional(__S(112, __c14, 0)),
          fieldLengthRange: S.optional(__S(112, __c14, 0)),
        }),
      ).annotate({ identifier: "FieldTypeDetails" });
    case 2:
      return S.suspend(() => S.Struct({ v1: __S(113, __c14, 1) })).annotate({
        identifier: "SupportedFieldTypeDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          isRetrievable: S.optional(S.Boolean),
          isQueryable: S.optional(S.Boolean),
          isTimestampFieldForIncrementalQueries: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "SourceFieldProperties" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          isCreatable: S.optional(S.Boolean),
          isNullable: S.optional(S.Boolean),
          isUpsertable: S.optional(S.Boolean),
          isUpdatable: S.optional(S.Boolean),
          isDefaultedOnCreate: S.optional(S.Boolean),
          supportedWriteOperations: S.optional(__S(62, __c7, 6)),
        }),
      ).annotate({
        identifier: "DestinationFieldProperties",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          parentIdentifier: S.optional(S.String),
          label: S.optional(S.String),
          isPrimaryKey: S.optional(S.Boolean),
          defaultValue: S.optional(S.String),
          isDeprecated: S.optional(S.Boolean),
          supportedFieldTypeDetails: S.optional(__S(114, __c14, 2)),
          description: S.optional(S.String),
          sourceProperties: S.optional(__S(115, __c14, 3)),
          destinationProperties: S.optional(__S(116, __c14, 4)),
          customProperties: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({ identifier: "ConnectorEntityField" });
    case 6:
      return S.Array(__S(117, __c14, 5));
    case 7:
      return S.suspend(() => S.Struct({ connectorEntityFields: __S(118, __c14, 6) })).annotate({
        identifier: "DescribeConnectorEntityResponse",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          connectorProfileNames: S.optional(__S(0, __c0, 0)),
          connectorType: S.optional(S.String),
          connectorLabel: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describe-connector-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeConnectorProfilesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          failureMessage: S.optional(S.String),
          failureCause: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PrivateConnectionProvisioningState",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          connectorProfileArn: S.optional(S.String),
          connectorProfileName: S.optional(S.String),
          connectorType: S.optional(S.String),
          connectorLabel: S.optional(S.String),
          connectionMode: S.optional(S.String),
          credentialsArn: S.optional(S.String),
          connectorProfileProperties: S.optional(__S(14, __c1, 6)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          privateConnectionProvisioningState: S.optional(__S(121, __c15, 1)),
        }),
      ).annotate({ identifier: "ConnectorProfile" });
    case 3:
      return S.Array(__S(122, __c15, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          connectorProfileDetails: S.optional(__S(123, __c15, 3)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeConnectorProfilesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          connectorTypes: S.optional(__S(62, __c7, 6)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describe-connectors" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeConnectorsRequest",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(109, __c13, 5).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          connectorDescription: S.optional(S.String),
          connectorName: S.optional(S.String),
          connectorOwner: S.optional(S.String),
          connectorVersion: S.optional(S.String),
          applicationType: S.optional(S.String),
          connectorType: S.optional(S.String),
          connectorLabel: S.optional(S.String),
          registeredAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          registeredBy: S.optional(S.String),
          connectorProvisioningType: S.optional(S.String),
          connectorModes: S.optional(__S(0, __c0, 0)),
          supportedDataTransferTypes: S.optional(__S(62, __c7, 6)),
        }),
      ).annotate({ identifier: "ConnectorDetail" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(127, __c15, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          connectorConfigurations: S.optional(__S(126, __c15, 6)),
          connectors: S.optional(__S(128, __c16, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeConnectorsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ flowName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/describe-flow" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeFlowRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          mostRecentExecutionMessage: S.optional(S.String),
          mostRecentExecutionTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          mostRecentExecutionStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExecutionDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          message: S.optional(S.String),
          result: S.optional(S.String),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "RegistrationOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          catalogType: S.optional(S.String),
          tableName: S.optional(S.String),
          tableRegistrationOutput: S.optional(__S(132, __c16, 4)),
          partitionRegistrationOutput: S.optional(__S(132, __c16, 4)),
        }),
      ).annotate({ identifier: "MetadataCatalogDetail" });
    case 6:
      return S.Array(__S(133, __c16, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          flowArn: S.optional(S.String),
          description: S.optional(S.String),
          flowName: S.optional(S.String),
          kmsArn: S.optional(S.String),
          flowStatus: S.optional(S.String),
          flowStatusMessage: S.optional(S.String),
          sourceFlowConfig: S.optional(__S(59, __c7, 3)),
          destinationFlowConfigList: S.optional(__S(78, __c9, 6)),
          lastRunExecutionDetails: S.optional(__S(131, __c16, 3)),
          triggerConfig: S.optional(__S(45, __c5, 5)),
          tasks: S.optional(__S(82, __c10, 2)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          lastUpdatedBy: S.optional(S.String),
          tags: S.optional(__S(83, __c10, 3)),
          metadataCatalogConfig: S.optional(__S(85, __c10, 5)),
          lastRunMetadataCatalogDetails: S.optional(__S(134, __c16, 6)),
          schemaVersion: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DescribeFlowResponse" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          flowName: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describe-flow-execution-records" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeFlowExecutionRecordsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          putFailuresCount: S.optional(S.Number),
          executionMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "ErrorInfo" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          errorInfo: S.optional(__S(137, __c17, 1)),
          bytesProcessed: S.optional(S.Number),
          bytesWritten: S.optional(S.Number),
          recordsProcessed: S.optional(S.Number),
          numParallelProcesses: S.optional(S.Number),
          maxPageSize: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ExecutionResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          executionId: S.optional(S.String),
          executionStatus: S.optional(S.String),
          executionResult: S.optional(__S(138, __c17, 2)),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          dataPullStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          dataPullEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          metadataCatalogDetails: S.optional(__S(134, __c16, 6)),
        }),
      ).annotate({ identifier: "ExecutionRecord" });
    case 4:
      return S.Array(__S(139, __c17, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          flowExecutions: S.optional(__S(140, __c17, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeFlowExecutionRecordsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          connectorProfileName: S.optional(S.String),
          connectorType: S.optional(S.String),
          entitiesPath: S.optional(S.String),
          apiVersion: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-connector-entities" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConnectorEntitiesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          label: S.optional(S.String),
          hasNestedEntities: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ConnectorEntity" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(143, __c17, 7));
    case 1:
      return S.Record(S.String, /*@__PURE__*/ __S(144, __c18, 0).pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({ connectorEntityMap: __S(145, __c18, 1), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListConnectorEntitiesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/list-connectors" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListConnectorsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ connectors: S.optional(__S(128, __c16, 0)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListConnectorsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/list-flows" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListFlowsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          flowArn: S.optional(S.String),
          description: S.optional(S.String),
          flowName: S.optional(S.String),
          flowStatus: S.optional(S.String),
          sourceConnectorType: S.optional(S.String),
          sourceConnectorLabel: S.optional(S.String),
          destinationConnectorType: S.optional(S.String),
          destinationConnectorLabel: S.optional(S.String),
          triggerType: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          lastUpdatedBy: S.optional(S.String),
          tags: S.optional(__S(83, __c10, 3)),
          lastRunExecutionDetails: S.optional(__S(131, __c16, 3)),
        }),
      ).annotate({ identifier: "FlowDefinition" });
    case 7:
      return S.Array(__S(150, __c18, 6));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ flows: S.optional(__S(151, __c18, 7)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFlowsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
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
    case 2:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(83, __c10, 3)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          connectorLabel: S.optional(S.String),
          description: S.optional(S.String),
          connectorProvisioningType: S.optional(S.String),
          connectorProvisioningConfig: S.optional(__S(107, __c13, 3)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/register-connector" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RegisterConnectorRequest" });
    case 4:
      return S.suspend(() => S.Struct({ connectorArn: S.optional(S.String) })).annotate({
        identifier: "RegisterConnectorResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          connectorProfileName: S.optional(S.String),
          connectorType: S.optional(S.String),
          connectorEntityName: S.optional(S.String),
          entitiesPath: S.optional(S.String),
          apiVersion: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/reset-connector-metadata-cache" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ResetConnectorMetadataCacheRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          flowName: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/start-flow" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartFlowRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          flowArn: S.optional(S.String),
          flowStatus: S.optional(S.String),
          executionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "StartFlowResponse" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ flowName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/stop-flow" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopFlowRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(83, __c10, 3),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ connectorLabel: S.String, forceDelete: S.optional(S.Boolean) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/unregister-connector" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UnregisterConnectorRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(0, __c0, 0).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          connectorProfileName: S.String,
          connectionMode: S.String,
          connectorProfileConfig: __S(40, __c5, 0),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/update-connector-profile" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConnectorProfileRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          connectorLabel: S.String,
          description: S.optional(S.String),
          connectorProvisioningConfig: S.optional(__S(107, __c13, 3)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/update-connector-registration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConnectorRegistrationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          flowName: S.String,
          description: S.optional(S.String),
          triggerConfig: __S(45, __c5, 5),
          sourceFlowConfig: __S(59, __c7, 3),
          destinationFlowConfigList: __S(78, __c9, 6),
          tasks: __S(82, __c10, 2),
          metadataCatalogConfig: S.optional(__S(85, __c10, 5)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/update-flow" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateFlowRequest" });
    case 7:
      return S.suspend(() => S.Struct({ flowStatus: S.optional(S.String) })).annotate({
        identifier: "UpdateFlowResponse",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
