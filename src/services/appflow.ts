import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface SandstoneConfigurationServiceLambda {
  cancelFlowExecutions(
    input: CancelFlowExecutionsRequest,
  ): Effect.Effect<
    CancelFlowExecutionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createConnectorProfile(
    input: CreateConnectorProfileRequest,
  ): Effect.Effect<
    CreateConnectorProfileResponse,
    | ConflictException
    | ConnectorAuthenticationException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createFlow(
    input: CreateFlowRequest,
  ): Effect.Effect<
    CreateFlowResponse,
    | AccessDeniedException
    | ConflictException
    | ConnectorAuthenticationException
    | ConnectorServerException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteConnectorProfile(
    input: DeleteConnectorProfileRequest,
  ): Effect.Effect<
    DeleteConnectorProfileResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteFlow(
    input: DeleteFlowRequest,
  ): Effect.Effect<
    DeleteFlowResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeConnector(
    input: DescribeConnectorRequest,
  ): Effect.Effect<
    DescribeConnectorResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeConnectorEntity(
    input: DescribeConnectorEntityRequest,
  ): Effect.Effect<
    DescribeConnectorEntityResponse,
    | ConnectorAuthenticationException
    | ConnectorServerException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeConnectorProfiles(
    input: DescribeConnectorProfilesRequest,
  ): Effect.Effect<
    DescribeConnectorProfilesResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  describeConnectors(
    input: DescribeConnectorsRequest,
  ): Effect.Effect<
    DescribeConnectorsResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  describeFlow(
    input: DescribeFlowRequest,
  ): Effect.Effect<
    DescribeFlowResponse,
    InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  describeFlowExecutionRecords(
    input: DescribeFlowExecutionRecordsRequest,
  ): Effect.Effect<
    DescribeFlowExecutionRecordsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listConnectorEntities(
    input: ListConnectorEntitiesRequest,
  ): Effect.Effect<
    ListConnectorEntitiesResponse,
    | ConnectorAuthenticationException
    | ConnectorServerException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listConnectors(
    input: ListConnectorsRequest,
  ): Effect.Effect<
    ListConnectorsResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listFlows(
    input: ListFlowsRequest,
  ): Effect.Effect<
    ListFlowsResponse,
    InternalServerException | ValidationException | CommonAwsError
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
  registerConnector(
    input: RegisterConnectorRequest,
  ): Effect.Effect<
    RegisterConnectorResponse,
    | AccessDeniedException
    | ConflictException
    | ConnectorAuthenticationException
    | ConnectorServerException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  resetConnectorMetadataCache(
    input: ResetConnectorMetadataCacheRequest,
  ): Effect.Effect<
    ResetConnectorMetadataCacheResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  startFlow(
    input: StartFlowRequest,
  ): Effect.Effect<
    StartFlowResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  stopFlow(
    input: StopFlowRequest,
  ): Effect.Effect<
    StopFlowResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | UnsupportedOperationException
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
  unregisterConnector(
    input: UnregisterConnectorRequest,
  ): Effect.Effect<
    UnregisterConnectorResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
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
  updateConnectorProfile(
    input: UpdateConnectorProfileRequest,
  ): Effect.Effect<
    UpdateConnectorProfileResponse,
    | ConflictException
    | ConnectorAuthenticationException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateConnectorRegistration(
    input: UpdateConnectorRegistrationRequest,
  ): Effect.Effect<
    UpdateConnectorRegistrationResponse,
    | AccessDeniedException
    | ConflictException
    | ConnectorAuthenticationException
    | ConnectorServerException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateFlow(
    input: UpdateFlowRequest,
  ): Effect.Effect<
    UpdateFlowResponse,
    | AccessDeniedException
    | ConflictException
    | ConnectorAuthenticationException
    | ConnectorServerException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
}

export type Appflow = SandstoneConfigurationServiceLambda;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AccessKeyId = string;

export type AccessToken = string;

export type AccountName = string;

export interface AggregationConfig {
  aggregationType?: AggregationType;
  targetFileSize?: number;
}
export type AggregationType = "NONE" | "SINGLE_FILE";
export type AmplitudeConnectorOperator = "BETWEEN";
export interface AmplitudeConnectorProfileCredentials {
  apiKey: string;
  secretKey: string;
}
export interface AmplitudeConnectorProfileProperties {}
export interface AmplitudeMetadata {}
export interface AmplitudeSourceProperties {
  object: string;
}
export type ApiKey = string;

export interface ApiKeyCredentials {
  apiKey: string;
  apiSecretKey?: string;
}
export type ApiSecretKey = string;

export type ApiToken = string;

export type ApiVersion = string;

export type ApplicationHostUrl = string;

export type ApplicationKey = string;

export type ApplicationServicePath = string;

export type ApplicationType = string;

export type ARN = string;

export type AuthCode = string;

export type AuthCodeUrl = string;

export type AuthCodeUrlList = Array<string>;
export interface AuthenticationConfig {
  isBasicAuthSupported?: boolean;
  isApiKeyAuthSupported?: boolean;
  isOAuth2Supported?: boolean;
  isCustomAuthSupported?: boolean;
  oAuth2Defaults?: OAuth2Defaults;
  customAuthConfigs?: Array<CustomAuthConfig>;
}
export type AuthenticationType = "OAUTH2" | "APIKEY" | "BASIC" | "CUSTOM";
export interface AuthParameter {
  key?: string;
  isRequired?: boolean;
  label?: string;
  description?: string;
  isSensitiveField?: boolean;
  connectorSuppliedValues?: Array<string>;
}
export type AuthParameterList = Array<AuthParameter>;
export interface BasicAuthCredentials {
  username: string;
  password: string;
}
export type BucketName = string;

export type BucketPrefix = string;

export type BusinessUnitId = string;

export interface CancelFlowExecutionsRequest {
  flowName: string;
  executionIds?: Array<string>;
}
export interface CancelFlowExecutionsResponse {
  invalidExecutions?: Array<string>;
}
export type CatalogType = "GLUE";
export type ClientCredentialsArn = string;

export type ClientId = string;

export type ClientNumber = string;

export type ClientSecret = string;

export type ClientToken = string;

export type ClusterIdentifier = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ConnectionMode = "PUBLIC" | "PRIVATE";
export declare class ConnectorAuthenticationException extends Data.TaggedError(
  "ConnectorAuthenticationException",
)<{
  readonly message?: string;
}> {}
export interface ConnectorConfiguration {
  canUseAsSource?: boolean;
  canUseAsDestination?: boolean;
  supportedDestinationConnectors?: Array<ConnectorType>;
  supportedSchedulingFrequencies?: Array<ScheduleFrequencyType>;
  isPrivateLinkEnabled?: boolean;
  isPrivateLinkEndpointUrlRequired?: boolean;
  supportedTriggerTypes?: Array<TriggerType>;
  connectorMetadata?: ConnectorMetadata;
  connectorType?: ConnectorType;
  connectorLabel?: string;
  connectorDescription?: string;
  connectorOwner?: string;
  connectorName?: string;
  connectorVersion?: string;
  connectorArn?: string;
  connectorModes?: Array<string>;
  authenticationConfig?: AuthenticationConfig;
  connectorRuntimeSettings?: Array<ConnectorRuntimeSetting>;
  supportedApiVersions?: Array<string>;
  supportedOperators?: Array<Operators>;
  supportedWriteOperations?: Array<WriteOperationType>;
  connectorProvisioningType?: ConnectorProvisioningType;
  connectorProvisioningConfig?: ConnectorProvisioningConfig;
  logoURL?: string;
  registeredAt?: Date | string;
  registeredBy?: string;
  supportedDataTransferTypes?: Array<SupportedDataTransferType>;
  supportedDataTransferApis?: Array<DataTransferApi>;
}
export type ConnectorConfigurationsMap = Record<
  ConnectorType,
  ConnectorConfiguration
>;
export type ConnectorDescription = string;

export interface ConnectorDetail {
  connectorDescription?: string;
  connectorName?: string;
  connectorOwner?: string;
  connectorVersion?: string;
  applicationType?: string;
  connectorType?: ConnectorType;
  connectorLabel?: string;
  registeredAt?: Date | string;
  registeredBy?: string;
  connectorProvisioningType?: ConnectorProvisioningType;
  connectorModes?: Array<string>;
  supportedDataTransferTypes?: Array<SupportedDataTransferType>;
}
export interface ConnectorEntity {
  name: string;
  label?: string;
  hasNestedEntities?: boolean;
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
  customProperties?: Record<string, string>;
}
export type ConnectorEntityFieldList = Array<ConnectorEntityField>;
export type ConnectorEntityList = Array<ConnectorEntity>;
export type ConnectorEntityMap = Record<string, Array<ConnectorEntity>>;
export type ConnectorLabel = string;

export type ConnectorList = Array<ConnectorDetail>;
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
export type ConnectorMode = string;

export type ConnectorModeList = Array<string>;
export type ConnectorName = string;

export interface ConnectorOAuthRequest {
  authCode?: string;
  redirectUri?: string;
}
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
export type ConnectorOwner = string;

export interface ConnectorProfile {
  connectorProfileArn?: string;
  connectorProfileName?: string;
  connectorType?: ConnectorType;
  connectorLabel?: string;
  connectionMode?: ConnectionMode;
  credentialsArn?: string;
  connectorProfileProperties?: ConnectorProfileProperties;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  privateConnectionProvisioningState?: PrivateConnectionProvisioningState;
}
export type ConnectorProfileArn = string;

export interface ConnectorProfileConfig {
  connectorProfileProperties: ConnectorProfileProperties;
  connectorProfileCredentials?: ConnectorProfileCredentials;
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
export type ConnectorProfileDetailList = Array<ConnectorProfile>;
export type ConnectorProfileName = string;

export type ConnectorProfileNameList = Array<string>;
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
export interface ConnectorProvisioningConfig {
  lambda?: LambdaConnectorProvisioningConfig;
}
export type ConnectorProvisioningType = "LAMBDA";
export interface ConnectorRuntimeSetting {
  key?: string;
  dataType?: string;
  isRequired?: boolean;
  label?: string;
  description?: string;
  scope?: string;
  connectorSuppliedValueOptions?: Array<string>;
}
export type ConnectorRuntimeSettingDataType = string;

export type ConnectorRuntimeSettingList = Array<ConnectorRuntimeSetting>;
export type ConnectorRuntimeSettingScope = string;

export declare class ConnectorServerException extends Data.TaggedError(
  "ConnectorServerException",
)<{
  readonly message?: string;
}> {}
export type ConnectorSuppliedValue = string;

export type ConnectorSuppliedValueList = Array<string>;
export type ConnectorSuppliedValueOptionList = Array<string>;
export type ConnectorType =
  | "SALESFORCE"
  | "SINGULAR"
  | "SLACK"
  | "REDSHIFT"
  | "S3"
  | "MARKETO"
  | "GOOGLEANALYTICS"
  | "ZENDESK"
  | "SERVICENOW"
  | "DATADOG"
  | "TRENDMICRO"
  | "SNOWFLAKE"
  | "DYNATRACE"
  | "INFORNEXUS"
  | "AMPLITUDE"
  | "VEEVA"
  | "EVENTBRIDGE"
  | "LOOKOUTMETRICS"
  | "UPSOLVER"
  | "HONEYCODE"
  | "CUSTOMERPROFILES"
  | "SAPODATA"
  | "CUSTOMCONNECTOR"
  | "PARDOT";
export type ConnectorTypeList = Array<ConnectorType>;
export type ConnectorVersion = string;

export interface CreateConnectorProfileRequest {
  connectorProfileName: string;
  kmsArn?: string;
  connectorType: ConnectorType;
  connectorLabel?: string;
  connectionMode: ConnectionMode;
  connectorProfileConfig: ConnectorProfileConfig;
  clientToken?: string;
}
export interface CreateConnectorProfileResponse {
  connectorProfileArn?: string;
}
export type CreatedBy = string;

export interface CreateFlowRequest {
  flowName: string;
  description?: string;
  kmsArn?: string;
  triggerConfig: TriggerConfig;
  sourceFlowConfig: SourceFlowConfig;
  destinationFlowConfigList: Array<DestinationFlowConfig>;
  tasks: Array<Task>;
  tags?: Record<string, string>;
  metadataCatalogConfig?: MetadataCatalogConfig;
  clientToken?: string;
}
export interface CreateFlowResponse {
  flowArn?: string;
  flowStatus?: FlowStatus;
}
export type CredentialsMap = Record<string, string>;
export type CredentialsMapKey = string;

export type CredentialsMapValue = string;

export interface CustomAuthConfig {
  customAuthenticationType?: string;
  authParameters?: Array<AuthParameter>;
}
export type CustomAuthConfigList = Array<CustomAuthConfig>;
export interface CustomAuthCredentials {
  customAuthenticationType: string;
  credentialsMap?: Record<string, string>;
}
export type CustomAuthenticationType = string;

export interface CustomConnectorDestinationProperties {
  entityName: string;
  errorHandlingConfig?: ErrorHandlingConfig;
  writeOperationType?: WriteOperationType;
  idFieldNames?: Array<string>;
  customProperties?: Record<string, string>;
}
export interface CustomConnectorProfileCredentials {
  authenticationType: AuthenticationType;
  basic?: BasicAuthCredentials;
  oauth2?: OAuth2Credentials;
  apiKey?: ApiKeyCredentials;
  custom?: CustomAuthCredentials;
}
export interface CustomConnectorProfileProperties {
  profileProperties?: Record<string, string>;
  oAuth2Properties?: OAuth2Properties;
}
export interface CustomConnectorSourceProperties {
  entityName: string;
  customProperties?: Record<string, string>;
  dataTransferApi?: DataTransferApi;
}
export interface CustomerProfilesDestinationProperties {
  domainName: string;
  objectTypeName?: string;
}
export interface CustomerProfilesMetadata {}
export type CustomProperties = Record<string, string>;
export type CustomPropertyKey = string;

export type CustomPropertyValue = string;

export type DataApiRoleArn = string;

export type DatabaseName = string;

export type DatabaseUrl = string;

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
  | "NO_OP";
export interface DatadogConnectorProfileCredentials {
  apiKey: string;
  applicationKey: string;
}
export interface DatadogConnectorProfileProperties {
  instanceUrl: string;
}
export interface DatadogMetadata {}
export interface DatadogSourceProperties {
  object: string;
}
export type DataPullMode = "INCREMENTAL" | "COMPLETE";
export interface DataTransferApi {
  Name?: string;
  Type?: DataTransferApiType;
}
export type DataTransferApiType = "SYNC" | "ASYNC" | "AUTOMATIC";
export type DataTransferApiTypeName = string;

export type DatetimeTypeFieldName = string;

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
export interface DescribeConnectorEntityRequest {
  connectorEntityName: string;
  connectorType?: ConnectorType;
  connectorProfileName?: string;
  apiVersion?: string;
}
export interface DescribeConnectorEntityResponse {
  connectorEntityFields: Array<ConnectorEntityField>;
}
export interface DescribeConnectorProfilesRequest {
  connectorProfileNames?: Array<string>;
  connectorType?: ConnectorType;
  connectorLabel?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeConnectorProfilesResponse {
  connectorProfileDetails?: Array<ConnectorProfile>;
  nextToken?: string;
}
export interface DescribeConnectorRequest {
  connectorType: ConnectorType;
  connectorLabel?: string;
}
export interface DescribeConnectorResponse {
  connectorConfiguration?: ConnectorConfiguration;
}
export interface DescribeConnectorsRequest {
  connectorTypes?: Array<ConnectorType>;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeConnectorsResponse {
  connectorConfigurations?: Record<ConnectorType, ConnectorConfiguration>;
  connectors?: Array<ConnectorDetail>;
  nextToken?: string;
}
export interface DescribeFlowExecutionRecordsRequest {
  flowName: string;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeFlowExecutionRecordsResponse {
  flowExecutions?: Array<ExecutionRecord>;
  nextToken?: string;
}
export interface DescribeFlowRequest {
  flowName: string;
}
export interface DescribeFlowResponse {
  flowArn?: string;
  description?: string;
  flowName?: string;
  kmsArn?: string;
  flowStatus?: FlowStatus;
  flowStatusMessage?: string;
  sourceFlowConfig?: SourceFlowConfig;
  destinationFlowConfigList?: Array<DestinationFlowConfig>;
  lastRunExecutionDetails?: ExecutionDetails;
  triggerConfig?: TriggerConfig;
  tasks?: Array<Task>;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  createdBy?: string;
  lastUpdatedBy?: string;
  tags?: Record<string, string>;
  metadataCatalogConfig?: MetadataCatalogConfig;
  lastRunMetadataCatalogDetails?: Array<MetadataCatalogDetail>;
  schemaVersion?: number;
}
export type Description = string;

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
export type DestinationField = string;

export interface DestinationFieldProperties {
  isCreatable?: boolean;
  isNullable?: boolean;
  isUpsertable?: boolean;
  isUpdatable?: boolean;
  isDefaultedOnCreate?: boolean;
  supportedWriteOperations?: Array<WriteOperationType>;
}
export interface DestinationFlowConfig {
  connectorType: ConnectorType;
  apiVersion?: string;
  connectorProfileName?: string;
  destinationConnectorProperties: DestinationConnectorProperties;
}
export type DestinationFlowConfigList = Array<DestinationFlowConfig>;
export type DocumentType = string;

export type DomainName = string;

export type Double = number;

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
  | "NO_OP";
export interface DynatraceConnectorProfileCredentials {
  apiToken: string;
}
export interface DynatraceConnectorProfileProperties {
  instanceUrl: string;
}
export interface DynatraceMetadata {}
export interface DynatraceSourceProperties {
  object: string;
}
export type EntitiesPath = string;

export type EntityName = string;

export interface ErrorHandlingConfig {
  failOnFirstDestinationError?: boolean;
  bucketPrefix?: string;
  bucketName?: string;
}
export interface ErrorInfo {
  putFailuresCount?: number;
  executionMessage?: string;
}
export type ErrorMessage = string;

export interface EventBridgeDestinationProperties {
  object: string;
  errorHandlingConfig?: ErrorHandlingConfig;
}
export interface EventBridgeMetadata {}
export interface ExecutionDetails {
  mostRecentExecutionMessage?: string;
  mostRecentExecutionTime?: Date | string;
  mostRecentExecutionStatus?: ExecutionStatus;
}
export type ExecutionId = string;

export type ExecutionIds = Array<string>;
export type ExecutionMessage = string;

export interface ExecutionRecord {
  executionId?: string;
  executionStatus?: ExecutionStatus;
  executionResult?: ExecutionResult;
  startedAt?: Date | string;
  lastUpdatedAt?: Date | string;
  dataPullStartTime?: Date | string;
  dataPullEndTime?: Date | string;
  metadataCatalogDetails?: Array<MetadataCatalogDetail>;
}
export interface ExecutionResult {
  errorInfo?: ErrorInfo;
  bytesProcessed?: number;
  bytesWritten?: number;
  recordsProcessed?: number;
  numParallelProcesses?: number;
  maxPageSize?: number;
}
export type ExecutionStatus =
  | "INPROGRESS"
  | "SUCCESSFUL"
  | "ERROR"
  | "CANCELSTARTED"
  | "CANCELED";
export type FieldType = string;

export interface FieldTypeDetails {
  fieldType: string;
  filterOperators: Array<Operator>;
  supportedValues?: Array<string>;
  valueRegexPattern?: string;
  supportedDateFormat?: string;
  fieldValueRange?: Range;
  fieldLengthRange?: Range;
}
export type FileType = "CSV" | "JSON" | "PARQUET";
export type FilterOperatorList = Array<Operator>;
export type FlowArn = string;

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
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  createdBy?: string;
  lastUpdatedBy?: string;
  tags?: Record<string, string>;
  lastRunExecutionDetails?: ExecutionDetails;
}
export type FlowDescription = string;

export type FlowErrorDeactivationThreshold = number;

export type FlowExecutionList = Array<ExecutionRecord>;
export type FlowList = Array<FlowDefinition>;
export type FlowName = string;

export type FlowStatus =
  | "ACTIVE"
  | "DEPRECATED"
  | "DELETED"
  | "DRAFT"
  | "ERRORED"
  | "SUSPENDED";
export type FlowStatusMessage = string;

export interface GlueDataCatalogConfig {
  roleArn: string;
  databaseName: string;
  tablePrefix: string;
}
export type GlueDataCatalogDatabaseName = string;

export type GlueDataCatalogIAMRole = string;

export type GlueDataCatalogTablePrefix = string;

export type GoogleAnalyticsConnectorOperator = "PROJECTION" | "BETWEEN";
export interface GoogleAnalyticsConnectorProfileCredentials {
  clientId: string;
  clientSecret: string;
  accessToken?: string;
  refreshToken?: string;
  oAuthRequest?: ConnectorOAuthRequest;
}
export interface GoogleAnalyticsConnectorProfileProperties {}
export interface GoogleAnalyticsMetadata {
  oAuthScopes?: Array<string>;
}
export interface GoogleAnalyticsSourceProperties {
  object: string;
}
export type Group = string;

export interface HoneycodeConnectorProfileCredentials {
  accessToken?: string;
  refreshToken?: string;
  oAuthRequest?: ConnectorOAuthRequest;
}
export interface HoneycodeConnectorProfileProperties {}
export interface HoneycodeDestinationProperties {
  object: string;
  errorHandlingConfig?: ErrorHandlingConfig;
}
export interface HoneycodeMetadata {
  oAuthScopes?: Array<string>;
}
export type Identifier = string;

export type IdFieldNameList = Array<string>;
export interface IncrementalPullConfig {
  datetimeTypeFieldName?: string;
}
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
  | "NO_OP";
export interface InforNexusConnectorProfileCredentials {
  accessKeyId: string;
  userId: string;
  secretAccessKey: string;
  datakey: string;
}
export interface InforNexusConnectorProfileProperties {
  instanceUrl: string;
}
export interface InforNexusMetadata {}
export interface InforNexusSourceProperties {
  object: string;
}
export type InstanceUrl = string;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type JavaBoolean = boolean;

export type JwtToken = string;

export type Key = string;

export type KMSArn = string;

export type Label = string;

export interface LambdaConnectorProvisioningConfig {
  lambdaArn: string;
}
export interface ListConnectorEntitiesRequest {
  connectorProfileName?: string;
  connectorType?: ConnectorType;
  entitiesPath?: string;
  apiVersion?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListConnectorEntitiesResponse {
  connectorEntityMap: Record<string, Array<ConnectorEntity>>;
  nextToken?: string;
}
export interface ListConnectorsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListConnectorsResponse {
  connectors?: Array<ConnectorDetail>;
  nextToken?: string;
}
export type ListEntitiesMaxResults = number;

export interface ListFlowsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListFlowsResponse {
  flows?: Array<FlowDefinition>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type LogonLanguage = string;

export type LogoURL = string;

export type Long = number;

export interface LookoutMetricsDestinationProperties {}
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
  | "NO_OP";
export interface MarketoConnectorProfileCredentials {
  clientId: string;
  clientSecret: string;
  accessToken?: string;
  oAuthRequest?: ConnectorOAuthRequest;
}
export interface MarketoConnectorProfileProperties {
  instanceUrl: string;
}
export interface MarketoDestinationProperties {
  object: string;
  errorHandlingConfig?: ErrorHandlingConfig;
}
export interface MarketoMetadata {}
export interface MarketoSourceProperties {
  object: string;
}
export type MaxResults = number;

export interface MetadataCatalogConfig {
  glueDataCatalog?: GlueDataCatalogConfig;
}
export interface MetadataCatalogDetail {
  catalogType?: CatalogType;
  tableName?: string;
  tableRegistrationOutput?: RegistrationOutput;
  partitionRegistrationOutput?: RegistrationOutput;
}
export type MetadataCatalogDetails = Array<MetadataCatalogDetail>;
export type MostRecentExecutionMessage = string;

export type Name = string;

export type NextToken = string;

export interface OAuth2Credentials {
  clientId?: string;
  clientSecret?: string;
  accessToken?: string;
  refreshToken?: string;
  oAuthRequest?: ConnectorOAuthRequest;
}
export interface OAuth2CustomParameter {
  key?: string;
  isRequired?: boolean;
  label?: string;
  description?: string;
  isSensitiveField?: boolean;
  connectorSuppliedValues?: Array<string>;
  type?: OAuth2CustomPropType;
}
export type OAuth2CustomPropertiesList = Array<OAuth2CustomParameter>;
export type OAuth2CustomPropType = "TOKEN_URL" | "AUTH_URL";
export interface OAuth2Defaults {
  oauthScopes?: Array<string>;
  tokenUrls?: Array<string>;
  authCodeUrls?: Array<string>;
  oauth2GrantTypesSupported?: Array<OAuth2GrantType>;
  oauth2CustomProperties?: Array<OAuth2CustomParameter>;
}
export type OAuth2GrantType =
  | "CLIENT_CREDENTIALS"
  | "AUTHORIZATION_CODE"
  | "JWT_BEARER";
export type OAuth2GrantTypeSupportedList = Array<OAuth2GrantType>;
export interface OAuth2Properties {
  tokenUrl: string;
  oAuth2GrantType: OAuth2GrantType;
  tokenUrlCustomProperties?: Record<string, string>;
}
export interface OAuthCredentials {
  clientId: string;
  clientSecret: string;
  accessToken?: string;
  refreshToken?: string;
  oAuthRequest?: ConnectorOAuthRequest;
}
export interface OAuthProperties {
  tokenUrl: string;
  authCodeUrl: string;
  oAuthScopes: Array<string>;
}
export type OAuthScope = string;

export type OAuthScopeList = Array<string>;
export type Object = string;

export type ObjectTypeName = string;

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
  | "NO_OP";
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
  | "ORDERED_PARTITION_KEYS_LIST";
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
  | "NO_OP";
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
  | "VALIDATE_NUMERIC";
export interface PardotConnectorProfileCredentials {
  accessToken?: string;
  refreshToken?: string;
  oAuthRequest?: ConnectorOAuthRequest;
  clientCredentialsArn?: string;
}
export interface PardotConnectorProfileProperties {
  instanceUrl?: string;
  isSandboxEnvironment?: boolean;
  businessUnitId?: string;
}
export interface PardotMetadata {}
export interface PardotSourceProperties {
  object: string;
}
export type Password = string;

export type PathPrefix = "EXECUTION_ID" | "SCHEMA_VERSION";
export type PathPrefixHierarchy = Array<PathPrefix>;
export type PortNumber = number;

export interface PrefixConfig {
  prefixType?: PrefixType;
  prefixFormat?: PrefixFormat;
  pathPrefixHierarchy?: Array<PathPrefix>;
}
export type PrefixFormat = "YEAR" | "MONTH" | "DAY" | "HOUR" | "MINUTE";
export type PrefixType = "FILENAME" | "PATH" | "PATH_AND_FILENAME";
export type PrivateConnectionProvisioningFailureCause =
  | "CONNECTOR_AUTHENTICATION"
  | "CONNECTOR_SERVER"
  | "INTERNAL_SERVER"
  | "ACCESS_DENIED"
  | "VALIDATION";
export type PrivateConnectionProvisioningFailureMessage = string;

export interface PrivateConnectionProvisioningState {
  status?: PrivateConnectionProvisioningStatus;
  failureMessage?: string;
  failureCause?: PrivateConnectionProvisioningFailureCause;
}
export type PrivateConnectionProvisioningStatus =
  | "FAILED"
  | "PENDING"
  | "CREATED";
export type PrivateLinkServiceName = string;

export type ProfilePropertiesMap = Record<string, string>;
export type ProfilePropertyKey = string;

export type ProfilePropertyValue = string;

export type Property = string;

export interface Range {
  maximum?: number;
  minimum?: number;
}
export type RedirectUri = string;

export interface RedshiftConnectorProfileCredentials {
  username?: string;
  password?: string;
}
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
export interface RedshiftDestinationProperties {
  object: string;
  intermediateBucketName: string;
  bucketPrefix?: string;
  errorHandlingConfig?: ErrorHandlingConfig;
}
export interface RedshiftMetadata {}
export type RefreshToken = string;

export type Region = string;

export type RegionList = Array<string>;
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
export type RegisteredBy = string;

export interface RegistrationOutput {
  message?: string;
  result?: string;
  status?: ExecutionStatus;
}
export interface ResetConnectorMetadataCacheRequest {
  connectorProfileName?: string;
  connectorType?: ConnectorType;
  connectorEntityName?: string;
  entitiesPath?: string;
  apiVersion?: string;
}
export interface ResetConnectorMetadataCacheResponse {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RoleArn = string;

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
  | "NO_OP";
export interface S3DestinationProperties {
  bucketName: string;
  bucketPrefix?: string;
  s3OutputFormatConfig?: S3OutputFormatConfig;
}
export type S3InputFileType = "CSV" | "JSON";
export interface S3InputFormatConfig {
  s3InputFileType?: S3InputFileType;
}
export interface S3Metadata {}
export interface S3OutputFormatConfig {
  fileType?: FileType;
  prefixConfig?: PrefixConfig;
  aggregationConfig?: AggregationConfig;
  preserveSourceDataTyping?: boolean;
}
export interface S3SourceProperties {
  bucketName: string;
  bucketPrefix?: string;
  s3InputFormatConfig?: S3InputFormatConfig;
}
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
  | "NO_OP";
export interface SalesforceConnectorProfileCredentials {
  accessToken?: string;
  refreshToken?: string;
  oAuthRequest?: ConnectorOAuthRequest;
  clientCredentialsArn?: string;
  oAuth2GrantType?: OAuth2GrantType;
  jwtToken?: string;
}
export interface SalesforceConnectorProfileProperties {
  instanceUrl?: string;
  isSandboxEnvironment?: boolean;
  usePrivateLinkForMetadataAndAuthorization?: boolean;
}
export type SalesforceDataTransferApi = "AUTOMATIC" | "BULKV2" | "REST_SYNC";
export type SalesforceDataTransferApiList = Array<SalesforceDataTransferApi>;
export interface SalesforceDestinationProperties {
  object: string;
  idFieldNames?: Array<string>;
  errorHandlingConfig?: ErrorHandlingConfig;
  writeOperationType?: WriteOperationType;
  dataTransferApi?: SalesforceDataTransferApi;
}
export interface SalesforceMetadata {
  oAuthScopes?: Array<string>;
  dataTransferApis?: Array<SalesforceDataTransferApi>;
  oauth2GrantTypesSupported?: Array<OAuth2GrantType>;
}
export interface SalesforceSourceProperties {
  object: string;
  enableDynamicFieldUpdate?: boolean;
  includeDeletedRecords?: boolean;
  dataTransferApi?: SalesforceDataTransferApi;
}
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
  | "NO_OP";
export interface SAPODataConnectorProfileCredentials {
  basicAuthCredentials?: BasicAuthCredentials;
  oAuthCredentials?: OAuthCredentials;
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
export interface SAPODataDestinationProperties {
  objectPath: string;
  successResponseHandlingConfig?: SuccessResponseHandlingConfig;
  idFieldNames?: Array<string>;
  errorHandlingConfig?: ErrorHandlingConfig;
  writeOperationType?: WriteOperationType;
}
export type SAPODataMaxPageSize = number;

export type SAPODataMaxParallelism = number;

export interface SAPODataMetadata {}
export interface SAPODataPaginationConfig {
  maxPageSize: number;
}
export interface SAPODataParallelismConfig {
  maxParallelism: number;
}
export interface SAPODataSourceProperties {
  objectPath?: string;
  parallelismConfig?: SAPODataParallelismConfig;
  paginationConfig?: SAPODataPaginationConfig;
}
export interface ScheduledTriggerProperties {
  scheduleExpression: string;
  dataPullMode?: DataPullMode;
  scheduleStartTime?: Date | string;
  scheduleEndTime?: Date | string;
  timezone?: string;
  scheduleOffset?: number;
  firstExecutionFrom?: Date | string;
  flowErrorDeactivationThreshold?: number;
}
export type ScheduleExpression = string;

export type ScheduleFrequencyType =
  | "BYMINUTE"
  | "HOURLY"
  | "DAILY"
  | "WEEKLY"
  | "MONTHLY"
  | "ONCE";
export type ScheduleOffset = number;

export type SchedulingFrequencyTypeList = Array<ScheduleFrequencyType>;
export type SecretKey = string;

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
  | "NO_OP";
export interface ServiceNowConnectorProfileCredentials {
  username?: string;
  password?: string;
  oAuth2Credentials?: OAuth2Credentials;
}
export interface ServiceNowConnectorProfileProperties {
  instanceUrl: string;
}
export interface ServiceNowMetadata {}
export interface ServiceNowSourceProperties {
  object: string;
}
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
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
  | "NO_OP";
export interface SingularConnectorProfileCredentials {
  apiKey: string;
}
export interface SingularConnectorProfileProperties {}
export interface SingularMetadata {}
export interface SingularSourceProperties {
  object: string;
}
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
  | "NO_OP";
export interface SlackConnectorProfileCredentials {
  clientId: string;
  clientSecret: string;
  accessToken?: string;
  oAuthRequest?: ConnectorOAuthRequest;
}
export interface SlackConnectorProfileProperties {
  instanceUrl: string;
}
export interface SlackMetadata {
  oAuthScopes?: Array<string>;
}
export interface SlackSourceProperties {
  object: string;
}
export interface SnowflakeConnectorProfileCredentials {
  username: string;
  password: string;
}
export interface SnowflakeConnectorProfileProperties {
  warehouse: string;
  stage: string;
  bucketName: string;
  bucketPrefix?: string;
  privateLinkServiceName?: string;
  accountName?: string;
  region?: string;
}
export interface SnowflakeDestinationProperties {
  object: string;
  intermediateBucketName: string;
  bucketPrefix?: string;
  errorHandlingConfig?: ErrorHandlingConfig;
}
export interface SnowflakeMetadata {
  supportedRegions?: Array<string>;
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
export interface SourceFieldProperties {
  isRetrievable?: boolean;
  isQueryable?: boolean;
  isTimestampFieldForIncrementalQueries?: boolean;
}
export type SourceFields = Array<string>;
export interface SourceFlowConfig {
  connectorType: ConnectorType;
  apiVersion?: string;
  connectorProfileName?: string;
  sourceConnectorProperties: SourceConnectorProperties;
  incrementalPullConfig?: IncrementalPullConfig;
}
export type Stage = string;

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
export interface SuccessResponseHandlingConfig {
  bucketPrefix?: string;
  bucketName?: string;
}
export type SupportedApiVersion = string;

export type SupportedApiVersionList = Array<string>;
export type SupportedDataTransferApis = Array<DataTransferApi>;
export type SupportedDataTransferType = "RECORD" | "FILE";
export type SupportedDataTransferTypeList = Array<SupportedDataTransferType>;
export interface SupportedFieldTypeDetails {
  v1: FieldTypeDetails;
}
export type SupportedOperatorList = Array<Operators>;
export type SupportedValueList = Array<string>;
export type SupportedWriteOperationList = Array<WriteOperationType>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export interface Task {
  sourceFields: Array<string>;
  connectorOperator?: ConnectorOperator;
  destinationField?: string;
  taskType: TaskType;
  taskProperties?: Record<OperatorPropertiesKeys, string>;
}
export type TaskPropertiesMap = Record<OperatorPropertiesKeys, string>;
export type Tasks = Array<Task>;
export type TaskType =
  | "ARITHMETIC"
  | "FILTER"
  | "MAP"
  | "MAP_ALL"
  | "MASK"
  | "MERGE"
  | "PASSTHROUGH"
  | "TRUNCATE"
  | "VALIDATE"
  | "PARTITION";
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type Timezone = string;

export type TokenUrl = string;

export type TokenUrlCustomProperties = Record<string, string>;
export type TokenUrlList = Array<string>;
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
  | "NO_OP";
export interface TrendmicroConnectorProfileCredentials {
  apiSecretKey: string;
}
export interface TrendmicroConnectorProfileProperties {}
export interface TrendmicroMetadata {}
export interface TrendmicroSourceProperties {
  object: string;
}
export interface TriggerConfig {
  triggerType: TriggerType;
  triggerProperties?: TriggerProperties;
}
export interface TriggerProperties {
  Scheduled?: ScheduledTriggerProperties;
}
export type TriggerType = "SCHEDULED" | "EVENT" | "ONDEMAND";
export type TriggerTypeList = Array<TriggerType>;
export interface UnregisterConnectorRequest {
  connectorLabel: string;
  forceDelete?: boolean;
}
export interface UnregisterConnectorResponse {}
export declare class UnsupportedOperationException extends Data.TaggedError(
  "UnsupportedOperationException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
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
export type UpdatedBy = string;

export interface UpdateFlowRequest {
  flowName: string;
  description?: string;
  triggerConfig: TriggerConfig;
  sourceFlowConfig: SourceFlowConfig;
  destinationFlowConfigList: Array<DestinationFlowConfig>;
  tasks: Array<Task>;
  metadataCatalogConfig?: MetadataCatalogConfig;
  clientToken?: string;
}
export interface UpdateFlowResponse {
  flowStatus?: FlowStatus;
}
export type UpsolverBucketName = string;

export interface UpsolverDestinationProperties {
  bucketName: string;
  bucketPrefix?: string;
  s3OutputFormatConfig: UpsolverS3OutputFormatConfig;
}
export interface UpsolverMetadata {}
export interface UpsolverS3OutputFormatConfig {
  fileType?: FileType;
  prefixConfig: PrefixConfig;
  aggregationConfig?: AggregationConfig;
}
export type Username = string;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type Value = string;

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
  | "NO_OP";
export interface VeevaConnectorProfileCredentials {
  username: string;
  password: string;
}
export interface VeevaConnectorProfileProperties {
  instanceUrl: string;
}
export interface VeevaMetadata {}
export interface VeevaSourceProperties {
  object: string;
  documentType?: string;
  includeSourceFiles?: boolean;
  includeRenditions?: boolean;
  includeAllVersions?: boolean;
}
export type Warehouse = string;

export type WorkgroupName = string;

export type WriteOperationType = "INSERT" | "UPSERT" | "UPDATE" | "DELETE";
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
  | "NO_OP";
export interface ZendeskConnectorProfileCredentials {
  clientId: string;
  clientSecret: string;
  accessToken?: string;
  oAuthRequest?: ConnectorOAuthRequest;
}
export interface ZendeskConnectorProfileProperties {
  instanceUrl: string;
}
export interface ZendeskDestinationProperties {
  object: string;
  idFieldNames?: Array<string>;
  errorHandlingConfig?: ErrorHandlingConfig;
  writeOperationType?: WriteOperationType;
}
export interface ZendeskMetadata {
  oAuthScopes?: Array<string>;
}
export interface ZendeskSourceProperties {
  object: string;
}
export declare namespace CancelFlowExecutions {
  export type Input = CancelFlowExecutionsRequest;
  export type Output = CancelFlowExecutionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateConnectorProfile {
  export type Input = CreateConnectorProfileRequest;
  export type Output = CreateConnectorProfileResponse;
  export type Error =
    | ConflictException
    | ConnectorAuthenticationException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateFlow {
  export type Input = CreateFlowRequest;
  export type Output = CreateFlowResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ConnectorAuthenticationException
    | ConnectorServerException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConnectorProfile {
  export type Input = DeleteConnectorProfileRequest;
  export type Output = DeleteConnectorProfileResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteFlow {
  export type Input = DeleteFlowRequest;
  export type Output = DeleteFlowResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeConnector {
  export type Input = DescribeConnectorRequest;
  export type Output = DescribeConnectorResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeConnectorEntity {
  export type Input = DescribeConnectorEntityRequest;
  export type Output = DescribeConnectorEntityResponse;
  export type Error =
    | ConnectorAuthenticationException
    | ConnectorServerException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeConnectorProfiles {
  export type Input = DescribeConnectorProfilesRequest;
  export type Output = DescribeConnectorProfilesResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeConnectors {
  export type Input = DescribeConnectorsRequest;
  export type Output = DescribeConnectorsResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeFlow {
  export type Input = DescribeFlowRequest;
  export type Output = DescribeFlowResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeFlowExecutionRecords {
  export type Input = DescribeFlowExecutionRecordsRequest;
  export type Output = DescribeFlowExecutionRecordsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConnectorEntities {
  export type Input = ListConnectorEntitiesRequest;
  export type Output = ListConnectorEntitiesResponse;
  export type Error =
    | ConnectorAuthenticationException
    | ConnectorServerException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConnectors {
  export type Input = ListConnectorsRequest;
  export type Output = ListConnectorsResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFlows {
  export type Input = ListFlowsRequest;
  export type Output = ListFlowsResponse;
  export type Error =
    | InternalServerException
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

export declare namespace RegisterConnector {
  export type Input = RegisterConnectorRequest;
  export type Output = RegisterConnectorResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ConnectorAuthenticationException
    | ConnectorServerException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResetConnectorMetadataCache {
  export type Input = ResetConnectorMetadataCacheRequest;
  export type Output = ResetConnectorMetadataCacheResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartFlow {
  export type Input = StartFlowRequest;
  export type Output = StartFlowResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace StopFlow {
  export type Input = StopFlowRequest;
  export type Output = StopFlowResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | UnsupportedOperationException
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

export declare namespace UnregisterConnector {
  export type Input = UnregisterConnectorRequest;
  export type Output = UnregisterConnectorResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
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

export declare namespace UpdateConnectorProfile {
  export type Input = UpdateConnectorProfileRequest;
  export type Output = UpdateConnectorProfileResponse;
  export type Error =
    | ConflictException
    | ConnectorAuthenticationException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateConnectorRegistration {
  export type Input = UpdateConnectorRegistrationRequest;
  export type Output = UpdateConnectorRegistrationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ConnectorAuthenticationException
    | ConnectorServerException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateFlow {
  export type Input = UpdateFlowRequest;
  export type Output = UpdateFlowResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ConnectorAuthenticationException
    | ConnectorServerException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}
