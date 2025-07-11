import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface SandstoneConfigurationServiceLambda {
  cancelFlowExecutions(
    input: CancelFlowExecutionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createConnectorProfile(
    input: CreateConnectorProfileRequest,
  ): Effect.Effect<
    {},
    ConflictException | ConnectorAuthenticationException | InternalServerException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createFlow(
    input: CreateFlowRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ConnectorAuthenticationException | ConnectorServerException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  deleteConnectorProfile(
    input: DeleteConnectorProfileRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  deleteFlow(
    input: DeleteFlowRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  describeConnector(
    input: DescribeConnectorRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeConnectorEntity(
    input: DescribeConnectorEntityRequest,
  ): Effect.Effect<
    {},
    ConnectorAuthenticationException | ConnectorServerException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeConnectorProfiles(
    input: DescribeConnectorProfilesRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ValidationException | CommonAwsError
  >;
  describeConnectors(
    input: DescribeConnectorsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ValidationException | CommonAwsError
  >;
  describeFlow(
    input: DescribeFlowRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  describeFlowExecutionRecords(
    input: DescribeFlowExecutionRecordsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listConnectorEntities(
    input: ListConnectorEntitiesRequest,
  ): Effect.Effect<
    {},
    ConnectorAuthenticationException | ConnectorServerException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listConnectors(
    input: ListConnectorsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ValidationException | CommonAwsError
  >;
  listFlows(
    input: ListFlowsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  registerConnector(
    input: RegisterConnectorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ConnectorAuthenticationException | ConnectorServerException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  resetConnectorMetadataCache(
    input: ResetConnectorMetadataCacheRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  startFlow(
    input: StartFlowRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | CommonAwsError
  >;
  stopFlow(
    input: StopFlowRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  unregisterConnector(
    input: UnregisterConnectorRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateConnectorProfile(
    input: UpdateConnectorProfileRequest,
  ): Effect.Effect<
    {},
    ConflictException | ConnectorAuthenticationException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateConnectorRegistration(
    input: UpdateConnectorRegistrationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ConnectorAuthenticationException | ConnectorServerException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateFlow(
    input: UpdateFlowRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ConnectorAuthenticationException | ConnectorServerException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
}

export type Appflow = SandstoneConfigurationServiceLambda;

export interface AccessDeniedException {
}
export type AccessKeyId = string;

export type AccessToken = string;

export type AccountName = string;

export interface AggregationConfig {
}
export type AggregationType = never;
export type AmplitudeConnectorOperator = never;
export interface AmplitudeConnectorProfileCredentials {
}
export interface AmplitudeConnectorProfileProperties {
}
export interface AmplitudeMetadata {
}
export interface AmplitudeSourceProperties {
}
export type ApiKey = string;

export interface ApiKeyCredentials {
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

export type AuthCodeUrlList = Array<unknown>;
export interface AuthenticationConfig {
}
export type AuthenticationType = never;
export interface AuthParameter {
}
export type AuthParameterList = Array<unknown>;
export interface BasicAuthCredentials {
}
export type BucketName = string;

export type BucketPrefix = string;

export type BusinessUnitId = string;

export interface CancelFlowExecutionsRequest {
}
export interface CancelFlowExecutionsResponse {
}
export type CatalogType = never;
export type ClientCredentialsArn = string;

export type ClientId = string;

export type ClientNumber = string;

export type ClientSecret = string;

export type ClientToken = string;

export type ClusterIdentifier = string;

export interface ConflictException {
}
export type ConnectionMode = never;
export interface ConnectorAuthenticationException {
}
export interface ConnectorConfiguration {
}
export type ConnectorConfigurationsMap = Record<string, unknown>;
export type ConnectorDescription = string;

export interface ConnectorDetail {
}
export interface ConnectorEntity {
}
export interface ConnectorEntityField {
}
export type ConnectorEntityFieldList = Array<unknown>;
export type ConnectorEntityList = Array<unknown>;
export type ConnectorEntityMap = Record<string, unknown>;
export type ConnectorLabel = string;

export type ConnectorList = Array<unknown>;
export interface ConnectorMetadata {
}
export type ConnectorMode = string;

export type ConnectorModeList = Array<unknown>;
export type ConnectorName = string;

export interface ConnectorOAuthRequest {
}
export interface ConnectorOperator {
}
export type ConnectorOwner = string;

export interface ConnectorProfile {
}
export type ConnectorProfileArn = string;

export interface ConnectorProfileConfig {
}
export interface ConnectorProfileCredentials {
}
export type ConnectorProfileDetailList = Array<unknown>;
export type ConnectorProfileName = string;

export type ConnectorProfileNameList = Array<unknown>;
export interface ConnectorProfileProperties {
}
export interface ConnectorProvisioningConfig {
}
export type ConnectorProvisioningType = never;
export interface ConnectorRuntimeSetting {
}
export type ConnectorRuntimeSettingDataType = string;

export type ConnectorRuntimeSettingList = Array<unknown>;
export type ConnectorRuntimeSettingScope = string;

export interface ConnectorServerException {
}
export type ConnectorSuppliedValue = string;

export type ConnectorSuppliedValueList = Array<unknown>;
export type ConnectorSuppliedValueOptionList = Array<unknown>;
export type ConnectorType = never;
export type ConnectorTypeList = Array<unknown>;
export type ConnectorVersion = string;

export interface CreateConnectorProfileRequest {
}
export interface CreateConnectorProfileResponse {
}
export type CreatedBy = string;

export interface CreateFlowRequest {
}
export interface CreateFlowResponse {
}
export type CredentialsMap = Record<string, unknown>;
export type CredentialsMapKey = string;

export type CredentialsMapValue = string;

export interface CustomAuthConfig {
}
export type CustomAuthConfigList = Array<unknown>;
export interface CustomAuthCredentials {
}
export type CustomAuthenticationType = string;

export interface CustomConnectorDestinationProperties {
}
export interface CustomConnectorProfileCredentials {
}
export interface CustomConnectorProfileProperties {
}
export interface CustomConnectorSourceProperties {
}
export interface CustomerProfilesDestinationProperties {
}
export interface CustomerProfilesMetadata {
}
export type CustomProperties = Record<string, unknown>;
export type CustomPropertyKey = string;

export type CustomPropertyValue = string;

export type DataApiRoleArn = string;

export type DatabaseName = string;

export type DatabaseUrl = string;

export type DatadogConnectorOperator = never;
export interface DatadogConnectorProfileCredentials {
}
export interface DatadogConnectorProfileProperties {
}
export interface DatadogMetadata {
}
export interface DatadogSourceProperties {
}
export type DataPullMode = never;
export interface DataTransferApi {
}
export type DataTransferApiType = never;
export type DataTransferApiTypeName = string;

export type DatetimeTypeFieldName = string;

export interface DeleteConnectorProfileRequest {
}
export interface DeleteConnectorProfileResponse {
}
export interface DeleteFlowRequest {
}
export interface DeleteFlowResponse {
}
export interface DescribeConnectorEntityRequest {
}
export interface DescribeConnectorEntityResponse {
}
export interface DescribeConnectorProfilesRequest {
}
export interface DescribeConnectorProfilesResponse {
}
export interface DescribeConnectorRequest {
}
export interface DescribeConnectorResponse {
}
export interface DescribeConnectorsRequest {
}
export interface DescribeConnectorsResponse {
}
export interface DescribeFlowExecutionRecordsRequest {
}
export interface DescribeFlowExecutionRecordsResponse {
}
export interface DescribeFlowRequest {
}
export interface DescribeFlowResponse {
}
export type Description = string;

export interface DestinationConnectorProperties {
}
export type DestinationField = string;

export interface DestinationFieldProperties {
}
export interface DestinationFlowConfig {
}
export type DestinationFlowConfigList = Array<unknown>;
export type DocumentType = string;

export type DomainName = string;

export type Double = number;

export type DynatraceConnectorOperator = never;
export interface DynatraceConnectorProfileCredentials {
}
export interface DynatraceConnectorProfileProperties {
}
export interface DynatraceMetadata {
}
export interface DynatraceSourceProperties {
}
export type EntitiesPath = string;

export type EntityName = string;

export interface ErrorHandlingConfig {
}
export interface ErrorInfo {
}
export type ErrorMessage = string;

export interface EventBridgeDestinationProperties {
}
export interface EventBridgeMetadata {
}
export interface ExecutionDetails {
}
export type ExecutionId = string;

export type ExecutionIds = Array<unknown>;
export type ExecutionMessage = string;

export interface ExecutionRecord {
}
export interface ExecutionResult {
}
export type ExecutionStatus = never;
export type FieldType = string;

export interface FieldTypeDetails {
}
export type FileType = never;
export type FilterOperatorList = Array<unknown>;
export type FlowArn = string;

export interface FlowDefinition {
}
export type FlowDescription = string;

export type FlowErrorDeactivationThreshold = number;

export type FlowExecutionList = Array<unknown>;
export type FlowList = Array<unknown>;
export type FlowName = string;

export type FlowStatus = never;
export type FlowStatusMessage = string;

export interface GlueDataCatalogConfig {
}
export type GlueDataCatalogDatabaseName = string;

export type GlueDataCatalogIAMRole = string;

export type GlueDataCatalogTablePrefix = string;

export type GoogleAnalyticsConnectorOperator = never;
export interface GoogleAnalyticsConnectorProfileCredentials {
}
export interface GoogleAnalyticsConnectorProfileProperties {
}
export interface GoogleAnalyticsMetadata {
}
export interface GoogleAnalyticsSourceProperties {
}
export type Group = string;

export interface HoneycodeConnectorProfileCredentials {
}
export interface HoneycodeConnectorProfileProperties {
}
export interface HoneycodeDestinationProperties {
}
export interface HoneycodeMetadata {
}
export type Identifier = string;

export type IdFieldNameList = Array<unknown>;
export interface IncrementalPullConfig {
}
export type InforNexusConnectorOperator = never;
export interface InforNexusConnectorProfileCredentials {
}
export interface InforNexusConnectorProfileProperties {
}
export interface InforNexusMetadata {
}
export interface InforNexusSourceProperties {
}
export type InstanceUrl = string;

export interface InternalServerException {
}
export type JavaBoolean = boolean;

export type JwtToken = string;

export type Key = string;

export type KMSArn = string;

export type Label = string;

export interface LambdaConnectorProvisioningConfig {
}
export interface ListConnectorEntitiesRequest {
}
export interface ListConnectorEntitiesResponse {
}
export interface ListConnectorsRequest {
}
export interface ListConnectorsResponse {
}
export type ListEntitiesMaxResults = number;

export interface ListFlowsRequest {
}
export interface ListFlowsResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export type LogonLanguage = string;

export type LogoURL = string;

export type Long = number;

export interface LookoutMetricsDestinationProperties {
}
export type MarketoConnectorOperator = never;
export interface MarketoConnectorProfileCredentials {
}
export interface MarketoConnectorProfileProperties {
}
export interface MarketoDestinationProperties {
}
export interface MarketoMetadata {
}
export interface MarketoSourceProperties {
}
export type MaxResults = number;

export interface MetadataCatalogConfig {
}
export interface MetadataCatalogDetail {
}
export type MetadataCatalogDetails = Array<unknown>;
export type MostRecentExecutionMessage = string;

export type Name = string;

export type NextToken = string;

export interface OAuth2Credentials {
}
export interface OAuth2CustomParameter {
}
export type OAuth2CustomPropertiesList = Array<unknown>;
export type OAuth2CustomPropType = never;
export interface OAuth2Defaults {
}
export type OAuth2GrantType = never;
export type OAuth2GrantTypeSupportedList = Array<unknown>;
export interface OAuth2Properties {
}
export interface OAuthCredentials {
}
export interface OAuthProperties {
}
export type OAuthScope = string;

export type OAuthScopeList = Array<unknown>;
export type Object = string;

export type ObjectTypeName = string;

export type Operator = never;
export type OperatorPropertiesKeys = never;
export type Operators = never;
export type PardotConnectorOperator = never;
export interface PardotConnectorProfileCredentials {
}
export interface PardotConnectorProfileProperties {
}
export interface PardotMetadata {
}
export interface PardotSourceProperties {
}
export type Password = string;

export type PathPrefix = never;
export type PathPrefixHierarchy = Array<unknown>;
export type PortNumber = number;

export interface PrefixConfig {
}
export type PrefixFormat = never;
export type PrefixType = never;
export type PrivateConnectionProvisioningFailureCause = never;
export type PrivateConnectionProvisioningFailureMessage = string;

export interface PrivateConnectionProvisioningState {
}
export type PrivateConnectionProvisioningStatus = never;
export type PrivateLinkServiceName = string;

export type ProfilePropertiesMap = Record<string, unknown>;
export type ProfilePropertyKey = string;

export type ProfilePropertyValue = string;

export type Property = string;

export interface Range {
}
export type RedirectUri = string;

export interface RedshiftConnectorProfileCredentials {
}
export interface RedshiftConnectorProfileProperties {
}
export interface RedshiftDestinationProperties {
}
export interface RedshiftMetadata {
}
export type RefreshToken = string;

export type Region = string;

export type RegionList = Array<unknown>;
export interface RegisterConnectorRequest {
}
export interface RegisterConnectorResponse {
}
export type RegisteredBy = string;

export interface RegistrationOutput {
}
export interface ResetConnectorMetadataCacheRequest {
}
export interface ResetConnectorMetadataCacheResponse {
}
export interface ResourceNotFoundException {
}
export type RoleArn = string;

export type S3ConnectorOperator = never;
export interface S3DestinationProperties {
}
export type S3InputFileType = never;
export interface S3InputFormatConfig {
}
export interface S3Metadata {
}
export interface S3OutputFormatConfig {
}
export interface S3SourceProperties {
}
export type SalesforceConnectorOperator = never;
export interface SalesforceConnectorProfileCredentials {
}
export interface SalesforceConnectorProfileProperties {
}
export type SalesforceDataTransferApi = never;
export type SalesforceDataTransferApiList = Array<unknown>;
export interface SalesforceDestinationProperties {
}
export interface SalesforceMetadata {
}
export interface SalesforceSourceProperties {
}
export type SAPODataConnectorOperator = never;
export interface SAPODataConnectorProfileCredentials {
}
export interface SAPODataConnectorProfileProperties {
}
export interface SAPODataDestinationProperties {
}
export type SAPODataMaxPageSize = number;

export type SAPODataMaxParallelism = number;

export interface SAPODataMetadata {
}
export interface SAPODataPaginationConfig {
}
export interface SAPODataParallelismConfig {
}
export interface SAPODataSourceProperties {
}
export interface ScheduledTriggerProperties {
}
export type ScheduleExpression = string;

export type ScheduleFrequencyType = never;
export type ScheduleOffset = number;

export type SchedulingFrequencyTypeList = Array<unknown>;
export type SecretKey = string;

export type ServiceNowConnectorOperator = never;
export interface ServiceNowConnectorProfileCredentials {
}
export interface ServiceNowConnectorProfileProperties {
}
export interface ServiceNowMetadata {
}
export interface ServiceNowSourceProperties {
}
export interface ServiceQuotaExceededException {
}
export type SingularConnectorOperator = never;
export interface SingularConnectorProfileCredentials {
}
export interface SingularConnectorProfileProperties {
}
export interface SingularMetadata {
}
export interface SingularSourceProperties {
}
export type SlackConnectorOperator = never;
export interface SlackConnectorProfileCredentials {
}
export interface SlackConnectorProfileProperties {
}
export interface SlackMetadata {
}
export interface SlackSourceProperties {
}
export interface SnowflakeConnectorProfileCredentials {
}
export interface SnowflakeConnectorProfileProperties {
}
export interface SnowflakeDestinationProperties {
}
export interface SnowflakeMetadata {
}
export interface SourceConnectorProperties {
}
export interface SourceFieldProperties {
}
export type SourceFields = Array<unknown>;
export interface SourceFlowConfig {
}
export type Stage = string;

export interface StartFlowRequest {
}
export interface StartFlowResponse {
}
export interface StopFlowRequest {
}
export interface StopFlowResponse {
}
export interface SuccessResponseHandlingConfig {
}
export type SupportedApiVersion = string;

export type SupportedApiVersionList = Array<unknown>;
export type SupportedDataTransferApis = Array<unknown>;
export type SupportedDataTransferType = never;
export type SupportedDataTransferTypeList = Array<unknown>;
export interface SupportedFieldTypeDetails {
}
export type SupportedOperatorList = Array<unknown>;
export type SupportedValueList = Array<unknown>;
export type SupportedWriteOperationList = Array<unknown>;
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagMap = Record<string, unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValue = string;

export interface Task {
}
export type TaskPropertiesMap = Record<string, unknown>;
export type Tasks = Array<unknown>;
export type TaskType = never;
export interface ThrottlingException {
}
export type Timezone = string;

export type TokenUrl = string;

export type TokenUrlCustomProperties = Record<string, unknown>;
export type TokenUrlList = Array<unknown>;
export type TrendmicroConnectorOperator = never;
export interface TrendmicroConnectorProfileCredentials {
}
export interface TrendmicroConnectorProfileProperties {
}
export interface TrendmicroMetadata {
}
export interface TrendmicroSourceProperties {
}
export interface TriggerConfig {
}
export interface TriggerProperties {
}
export type TriggerType = never;
export type TriggerTypeList = Array<unknown>;
export interface UnregisterConnectorRequest {
}
export interface UnregisterConnectorResponse {
}
export interface UnsupportedOperationException {
}
export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateConnectorProfileRequest {
}
export interface UpdateConnectorProfileResponse {
}
export interface UpdateConnectorRegistrationRequest {
}
export interface UpdateConnectorRegistrationResponse {
}
export type UpdatedBy = string;

export interface UpdateFlowRequest {
}
export interface UpdateFlowResponse {
}
export type UpsolverBucketName = string;

export interface UpsolverDestinationProperties {
}
export interface UpsolverMetadata {
}
export interface UpsolverS3OutputFormatConfig {
}
export type Username = string;

export interface ValidationException {
}
export type Value = string;

export type VeevaConnectorOperator = never;
export interface VeevaConnectorProfileCredentials {
}
export interface VeevaConnectorProfileProperties {
}
export interface VeevaMetadata {
}
export interface VeevaSourceProperties {
}
export type Warehouse = string;

export type WorkgroupName = string;

export type WriteOperationType = never;
export type ZendeskConnectorOperator = never;
export interface ZendeskConnectorProfileCredentials {
}
export interface ZendeskConnectorProfileProperties {
}
export interface ZendeskDestinationProperties {
}
export interface ZendeskMetadata {
}
export interface ZendeskSourceProperties {
}
export declare namespace CancelFlowExecutions {
  export type Input = CancelFlowExecutionsRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteFlow {
  export type Input = DeleteFlowRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeConnector {
  export type Input = DescribeConnectorRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeConnectorEntity {
  export type Input = DescribeConnectorEntityRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeConnectors {
  export type Input = DescribeConnectorsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeFlow {
  export type Input = DescribeFlowRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeFlowExecutionRecords {
  export type Input = DescribeFlowExecutionRecordsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConnectorEntities {
  export type Input = ListConnectorEntitiesRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFlows {
  export type Input = ListFlowsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
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

export declare namespace RegisterConnector {
  export type Input = RegisterConnectorRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartFlow {
  export type Input = StartFlowRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace StopFlow {
  export type Input = StopFlowRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | UnsupportedOperationException
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

export declare namespace UnregisterConnector {
  export type Input = UnregisterConnectorRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
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

export declare namespace UpdateConnectorProfile {
  export type Input = UpdateConnectorProfileRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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

