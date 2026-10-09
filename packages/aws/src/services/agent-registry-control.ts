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
  sdkId: "Agent Registry Control",
  serviceShapeName: "AgentRegistryControl",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "agent-registry" });
const ver = /*@__PURE__*/ T.ServiceVersion("2025-12-01");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p) => {
  const { Region, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    return e(Endpoint);
  }
  if (Region != null) {
    return e(`https://agent-registry-control.${Region}.api.aws`);
  }
  return err(
    "Unable to resolve an Agent Registry Control endpoint: Region was not set and no explicit Endpoint override was provided.",
  );
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
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.suspend(() => S.String).annotate({
        identifier: "ValidationExceptionReason",
      }),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(108)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type RegistryName = string;
export type Description = string | redacted.Redacted<string>;
export type KmsKeyArn = string;
export interface EncryptionConfiguration {
  kmsKeyArn: string;
}
export type DiscoveryUrl = string;
export type AllowedAudience = string;
export type AllowedAudienceList = string[];
export type AllowedClient = string;
export type AllowedClientsList = string[];
export type AllowedScopeType = string;
export type AllowedScopesType = string[];
export type InboundTokenClaimNameType = string;
export type InboundTokenClaimValueType = "STRING" | "STRING_ARRAY" | (string & {});
export type MatchValueString = string;
export type MatchValueStringList = string[];
export type ClaimMatchValueType =
  | { matchValueString: string; matchValueStringList?: never }
  | { matchValueString?: never; matchValueStringList: string[] };
export type ClaimMatchOperatorType = "EQUALS" | "CONTAINS" | "CONTAINS_ANY" | (string & {});
export interface AuthorizingClaimMatchValueType {
  claimMatchValue: ClaimMatchValueType;
  claimMatchOperator: ClaimMatchOperatorType;
}
export interface CustomClaimValidationType {
  inboundTokenClaimName: string;
  inboundTokenClaimValueType: InboundTokenClaimValueType;
  authorizingClaimMatchValue: AuthorizingClaimMatchValueType;
}
export type CustomClaimValidationsType = CustomClaimValidationType[];
export type ResourceConfigurationIdentifier = string;
export type SelfManagedLatticeResource = { resourceConfigurationIdentifier: string };
export type VpcIdentifier = string;
export type SubnetId = string;
export type SubnetIds = string[];
export type EndpointIpAddressType = "IPV4" | "IPV6" | (string & {});
export type SecurityGroupIdentifier = string;
export type SecurityGroupIds = string[];
export type TagKey = string;
export type TagValue = string;
export type TagsMap = { [key: string]: string | undefined };
export type RoutingDomain = string;
export interface ManagedVpcResource {
  vpcIdentifier: string;
  subnetIds: string[];
  endpointIpAddressType: EndpointIpAddressType;
  securityGroupIds?: string[];
  tags?: { [key: string]: string | undefined };
  routingDomain?: string;
}
export type PrivateEndpoint =
  | { selfManagedLatticeResource: SelfManagedLatticeResource; managedVpcResource?: never }
  | { selfManagedLatticeResource?: never; managedVpcResource: ManagedVpcResource };
export type PrivateEndpointOverrideDomain = string;
export interface PrivateEndpointOverride {
  domain: string;
  privateEndpoint: PrivateEndpoint;
}
export type PrivateEndpointOverrides = PrivateEndpointOverride[];
export interface CustomJWTAuthorizerConfiguration {
  discoveryUrl: string;
  allowedAudience?: string[];
  allowedClients?: string[];
  allowedScopes?: string[];
  customClaims?: CustomClaimValidationType[];
  privateEndpoint?: PrivateEndpoint;
  privateEndpointOverrides?: PrivateEndpointOverride[];
}
export type AuthorizerConfiguration = { customJWTAuthorizer: CustomJWTAuthorizerConfiguration };
export type RegistryAuthorizerType = "CUSTOM_JWT" | "AWS_IAM" | (string & {});
export interface DiscoveryConfiguration {
  authorizerConfiguration?: AuthorizerConfiguration;
  authorizerType?: RegistryAuthorizerType;
}
export type ClientToken = string;
export type AutoApprovalRule = "APPROVE_ALL" | (string & {});
export type AutoApprovalRuleList = AutoApprovalRule[];
export interface ApprovalConfiguration {
  autoApprovalRules?: AutoApprovalRule[];
}
export type CustomMetadataSchemaDefinition = string | redacted.Redacted<string>;
export type RecordType = "MCP" | "AGENT" | "CUSTOM" | "SKILL" | "GATEWAY" | (string & {});
export interface RecordTypeSchemaOverride {
  recordType: RecordType;
  schema: string | redacted.Redacted<string>;
}
export type RecordTypeSchemaOverrideList = RecordTypeSchemaOverride[];
export interface CustomMetadataSchemaConfiguration {
  defaultSchema?: string | redacted.Redacted<string>;
  recordTypeSchemaOverrides?: RecordTypeSchemaOverride[];
}
export type AutoDetectionScope = "ORGANIZATION" | (string & {});
export interface AutoDetectionConfiguration {
  scope: AutoDetectionScope;
  enabled: boolean;
}
export interface CreateRegistryRequest {
  name: string;
  description?: string | redacted.Redacted<string>;
  encryptionConfiguration?: EncryptionConfiguration;
  discoveryConfiguration?: DiscoveryConfiguration;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
  approvalConfiguration?: ApprovalConfiguration;
  customMetadataSchemaConfiguration?: CustomMetadataSchemaConfiguration;
  autoDetectionConfiguration?: AutoDetectionConfiguration;
}
export type RegistryArn = string;
export interface CreateRegistryResponse {
  registryArn: string;
}
export type RegistryIdentifier = string;
export type RegistryRecordName = string;
export type RegistryRecordDisplayName = string;
export type DescriptorData = string | redacted.Redacted<string>;
export type DataSchemaVersion = string;
export interface McpToolsDescriptor {
  data?: string | redacted.Redacted<string>;
  dataSchemaVersion?: string;
}
export interface McpServerAdditionalData {
  tools?: McpToolsDescriptor;
}
export type DescriptorSourceUrl = string;
export type RegistryRecordCredentialProviderType = "OAUTH" | "IAM" | (string & {});
export type CredentialProviderArn = string;
export type RegistryRecordOAuthGrantType = "CLIENT_CREDENTIALS" | (string & {});
export type ScopeList = string[];
export type CustomParameterMap = { [key: string]: string | undefined };
export interface RegistryRecordOAuthCredentialProvider {
  providerArn: string;
  grantType?: RegistryRecordOAuthGrantType;
  scopes?: string[];
  customParameters?: { [key: string]: string | undefined };
}
export type IamRoleArn = string;
export type IamSigningServiceName = string;
export type IamSigningRegion = string;
export interface RegistryRecordIamCredentialProvider {
  roleArn?: string;
  service?: string;
  region?: string;
}
export type RegistryRecordCredentialProviderUnion =
  | {
      oauthCredentialProvider: RegistryRecordOAuthCredentialProvider;
      iamCredentialProvider?: never;
    }
  | { oauthCredentialProvider?: never; iamCredentialProvider: RegistryRecordIamCredentialProvider };
export interface RegistryRecordCredentialProviderConfiguration {
  credentialProviderType: RegistryRecordCredentialProviderType;
  credentialProvider: RegistryRecordCredentialProviderUnion;
}
export type RegistryRecordCredentialProviderConfigurationList =
  RegistryRecordCredentialProviderConfiguration[];
export interface DescriptorSourceFromUrl {
  url: string;
  credentialProviderConfigurations?: RegistryRecordCredentialProviderConfiguration[];
}
export interface DescriptorSource {
  fromUrl?: DescriptorSourceFromUrl;
}
export interface McpServerDescriptor {
  data?: string | redacted.Redacted<string>;
  dataSchemaVersion?: string;
  additionalData?: McpServerAdditionalData;
  source?: DescriptorSource;
}
export interface A2aAgentCardDescriptor {
  data?: string | redacted.Redacted<string>;
  dataSchemaVersion?: string;
  source?: DescriptorSource;
}
export interface AgentSkillsMdDescriptor {
  data?: string | redacted.Redacted<string>;
  dataSchemaVersion?: string;
  source?: DescriptorSource;
}
export interface AgentSkillsAdditionalData {
  skillMd?: AgentSkillsMdDescriptor;
}
export interface AgentSkillsDefinitionDescriptor {
  data?: string | redacted.Redacted<string>;
  dataSchemaVersion?: string;
  additionalData?: AgentSkillsAdditionalData;
}
export interface CustomDescriptor {
  data?: string | redacted.Redacted<string>;
}
export interface HttpDescriptor {
  source?: DescriptorSource;
}
export interface AgUiDescriptor {
  source?: DescriptorSource;
}
export interface Descriptors {
  mcpServer?: McpServerDescriptor;
  a2aAgentCard?: A2aAgentCardDescriptor;
  agentSkillsDefinition?: AgentSkillsDefinitionDescriptor;
  custom?: CustomDescriptor;
  http?: HttpDescriptor;
  agui?: AgUiDescriptor;
}
export type RegistryRecordVersion = string;
export type ProvenanceRelation = "DETECTED_FROM" | (string & {});
export type SourceId = string;
export type SourceType =
  | "AWS::BedrockAgentCore::Runtime"
  | "AWS::BedrockAgentCore::Gateway"
  | (string & {});
export type AgentCoreRuntimeServerProtocol = "HTTP" | "A2A" | "MCP" | "AGUI" | (string & {});
export interface AgentCoreRuntimeProtocolConfiguration {
  serverProtocol?: AgentCoreRuntimeServerProtocol;
}
export interface WorkloadIdentityDetails {
  workloadIdentityArn: string;
}
export interface AgentCoreRuntimeSourceDetails {
  protocolConfiguration?: AgentCoreRuntimeProtocolConfiguration;
  authorizerConfiguration?: AuthorizerConfiguration;
  workloadIdentityDetails?: WorkloadIdentityDetails;
}
export type AgentCoreGatewayProtocolType = "MCP" | (string & {});
export interface AgentCoreGatewaySourceDetails {
  protocolType?: AgentCoreGatewayProtocolType;
  authorizerType?: string;
  authorizerConfiguration?: AuthorizerConfiguration;
  workloadIdentityDetails?: WorkloadIdentityDetails;
}
export type SourceDetails =
  | { agentcoreRuntime: AgentCoreRuntimeSourceDetails; agentcoreGateway?: never }
  | { agentcoreRuntime?: never; agentcoreGateway: AgentCoreGatewaySourceDetails };
export interface Provenance {
  relation: ProvenanceRelation;
  sourceId: string;
  sourceType?: SourceType;
  sourceDetails?: SourceDetails;
}
export type ProvenanceList = Provenance[];
export type CustomMetadataDocument = unknown;
export interface CreateRegistryRecordRequest {
  registryId: string;
  name: string;
  displayName?: string;
  description?: string | redacted.Redacted<string>;
  recordType: RecordType;
  descriptors: Descriptors;
  recordVersion?: string;
  clientToken?: string;
  provenance?: Provenance[];
  customMetadata?: any;
  tags?: { [key: string]: string | undefined };
}
export type RegistryRecordArn = string;
export type RegistryRecordStatus =
  | "DRAFT"
  | "PENDING_APPROVAL"
  | "APPROVED"
  | "REJECTED"
  | "DEPRECATED"
  | "CREATING"
  | "UPDATING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | (string & {});
export interface CreateRegistryRecordResponse {
  recordArn: string;
  status: RegistryRecordStatus;
}
export interface DeleteRegistryRequest {
  registryId: string;
}
export type RegistryStatus =
  | "CREATING"
  | "READY"
  | "UPDATING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "DELETING"
  | "DELETE_FAILED"
  | (string & {});
export interface DeleteRegistryResponse {
  status: RegistryStatus;
}
export type RecordIdentifier = string;
export interface DeleteRegistryRecordRequest {
  registryId: string;
  recordId: string;
}
export interface DeleteRegistryRecordResponse {}
export interface GetRegistryRequest {
  registryId: string;
}
export type RegistryId = string;
export type AutoDetectionStatus = "ACTIVE" | "INACTIVE" | (string & {});
export interface AutoDetection {
  configuration: AutoDetectionConfiguration;
  status: AutoDetectionStatus;
  statusReason?: string;
}
export interface GetRegistryResponse {
  name: string;
  description?: string | redacted.Redacted<string>;
  registryId: string;
  registryArn: string;
  discoveryConfiguration?: DiscoveryConfiguration;
  encryptionConfiguration?: EncryptionConfiguration;
  approvalConfiguration?: ApprovalConfiguration;
  customMetadataSchemaConfiguration?: CustomMetadataSchemaConfiguration;
  status: RegistryStatus;
  statusReason?: string;
  autoDetection?: AutoDetection;
  createdAt: Date;
  updatedAt: Date;
}
export interface GetRegistryRecordRequest {
  registryId: string;
  recordId: string;
}
export type RegistryRecordId = string;
export type CreatorAccountId = string;
export type CustomMetadataSchemaComplianceStatus = "COMPLIANT" | "NON_COMPLIANT" | (string & {});
export interface GetRegistryRecordResponse {
  registryArn: string;
  recordArn: string;
  recordId: string;
  name: string;
  displayName?: string;
  description?: string | redacted.Redacted<string>;
  recordType: RecordType;
  descriptors?: Descriptors;
  recordVersion?: string;
  status: RegistryRecordStatus;
  createdAt: Date;
  updatedAt: Date;
  statusReason?: string;
  provenance?: Provenance[];
  createdByAutoDetection?: boolean;
  createdBy?: string;
  customMetadata?: any;
  customMetadataSchemaComplianceStatus?: CustomMetadataSchemaComplianceStatus;
}
export type MaxResults = number;
export type NextToken = string;
export type RegistryFilterName = "status" | "discoveryConfiguration.authorizerType" | (string & {});
export type FilterValue = string;
export type FilterValues = string[];
export interface RegistryFilter {
  name: RegistryFilterName;
  values: string[];
}
export type RegistryFilterList = RegistryFilter[];
export interface ListRegistriesRequest {
  maxResults?: number;
  nextToken?: string;
  filters?: RegistryFilter[];
}
export interface RegistrySummary {
  name: string;
  description?: string | redacted.Redacted<string>;
  registryId: string;
  registryArn: string;
  discoveryConfiguration?: DiscoveryConfiguration;
  status: RegistryStatus;
  statusReason?: string;
  autoDetection?: AutoDetection;
  createdAt: Date;
  updatedAt: Date;
}
export type RegistrySummaryList = RegistrySummary[];
export interface ListRegistriesResponse {
  registries: RegistrySummary[];
  nextToken?: string;
}
export type RegistryRecordFilterName = "name" | "status" | "recordType" | (string & {});
export interface RegistryRecordFilter {
  name: RegistryRecordFilterName;
  values: string[];
}
export type RegistryRecordFilterList = RegistryRecordFilter[];
export interface ListRegistryRecordsRequest {
  registryId: string;
  maxResults?: number;
  nextToken?: string;
  filters?: RegistryRecordFilter[];
}
export interface ProvenanceSummary {
  relation: ProvenanceRelation;
  sourceId: string;
  sourceType?: SourceType;
}
export type ProvenanceSummaryList = ProvenanceSummary[];
export interface RegistryRecordSummary {
  registryArn: string;
  recordArn: string;
  recordId: string;
  name: string;
  displayName?: string;
  description?: string | redacted.Redacted<string>;
  recordType: RecordType;
  recordVersion: string;
  status: RegistryRecordStatus;
  createdAt: Date;
  updatedAt: Date;
  createdByAutoDetection?: boolean;
  createdBy?: string;
  provenanceSummaryList?: ProvenanceSummary[];
  customMetadataSchemaComplianceStatus?: CustomMetadataSchemaComplianceStatus;
}
export type RegistryRecordSummaryList = RegistryRecordSummary[];
export interface ListRegistryRecordsResponse {
  registryRecords: RegistryRecordSummary[];
  nextToken?: string;
}
export type ResourceArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export type ResourceTagsMap = { [key: string]: string | undefined };
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface SubmitRegistryRecordForApprovalRequest {
  registryId: string;
  recordId: string;
}
export interface SubmitRegistryRecordForApprovalResponse {
  registryArn: string;
  recordArn: string;
  recordId: string;
  status: RegistryRecordStatus;
  updatedAt: Date;
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
export interface UpdatedDescription {
  optionalValue?: string | redacted.Redacted<string>;
}
export interface UpdatedAuthorizerConfiguration {
  optionalValue?: AuthorizerConfiguration;
}
export interface UpdatedDiscoveryConfiguration {
  authorizerConfiguration?: UpdatedAuthorizerConfiguration;
}
export interface UpdatedApprovalConfiguration {
  optionalValue?: ApprovalConfiguration;
}
export interface UpdatedCustomMetadataSchemaConfiguration {
  optionalValue?: CustomMetadataSchemaConfiguration;
}
export interface UpdatedAutoDetectionConfiguration {
  optionalValue?: AutoDetectionConfiguration;
}
export interface UpdateRegistryRequest {
  registryId: string;
  name?: string;
  description?: UpdatedDescription;
  discoveryConfiguration?: UpdatedDiscoveryConfiguration;
  approvalConfiguration?: UpdatedApprovalConfiguration;
  customMetadataSchemaConfiguration?: UpdatedCustomMetadataSchemaConfiguration;
  autoDetectionConfiguration?: UpdatedAutoDetectionConfiguration;
}
export interface UpdateRegistryResponse {
  name: string;
  description?: string | redacted.Redacted<string>;
  registryId: string;
  registryArn: string;
  discoveryConfiguration?: DiscoveryConfiguration;
  encryptionConfiguration?: EncryptionConfiguration;
  approvalConfiguration?: ApprovalConfiguration;
  customMetadataSchemaConfiguration?: CustomMetadataSchemaConfiguration;
  status: RegistryStatus;
  statusReason?: string;
  autoDetection?: AutoDetection;
  createdAt: Date;
  updatedAt: Date;
}
export interface UpdatedDisplayName {
  optionalValue?: string;
}
export interface UpdatedDescriptorData {
  optionalValue?: string | redacted.Redacted<string>;
}
export interface UpdatedDataSchemaVersion {
  optionalValue?: string;
}
export interface UpdatedDescriptorSource {
  optionalValue?: DescriptorSource;
}
export interface UpdatedMcpToolsDescriptorFields {
  data?: UpdatedDescriptorData;
  dataSchemaVersion?: UpdatedDataSchemaVersion;
}
export interface UpdatedMcpToolsDescriptor {
  optionalValue?: UpdatedMcpToolsDescriptorFields;
}
export interface UpdatedMcpServerAdditionalDataFields {
  tools?: UpdatedMcpToolsDescriptor;
}
export interface UpdatedMcpServerAdditionalData {
  optionalValue?: UpdatedMcpServerAdditionalDataFields;
}
export interface UpdatedMcpServerDescriptorFields {
  data?: UpdatedDescriptorData;
  dataSchemaVersion?: UpdatedDataSchemaVersion;
  source?: UpdatedDescriptorSource;
  additionalData?: UpdatedMcpServerAdditionalData;
}
export interface UpdatedMcpServerDescriptor {
  optionalValue?: UpdatedMcpServerDescriptorFields;
}
export interface UpdatedA2aAgentCardDescriptorFields {
  data?: UpdatedDescriptorData;
  dataSchemaVersion?: UpdatedDataSchemaVersion;
  source?: UpdatedDescriptorSource;
}
export interface UpdatedA2aAgentCardDescriptor {
  optionalValue?: UpdatedA2aAgentCardDescriptorFields;
}
export interface UpdatedAgentSkillsMdDescriptorFields {
  data?: UpdatedDescriptorData;
  dataSchemaVersion?: UpdatedDataSchemaVersion;
  source?: UpdatedDescriptorSource;
}
export interface UpdatedAgentSkillsMdDescriptor {
  optionalValue?: UpdatedAgentSkillsMdDescriptorFields;
}
export interface UpdatedAgentSkillsAdditionalDataFields {
  skillMd?: UpdatedAgentSkillsMdDescriptor;
}
export interface UpdatedAgentSkillsAdditionalData {
  optionalValue?: UpdatedAgentSkillsAdditionalDataFields;
}
export interface UpdatedAgentSkillsDefinitionDescriptorFields {
  data?: UpdatedDescriptorData;
  dataSchemaVersion?: UpdatedDataSchemaVersion;
  additionalData?: UpdatedAgentSkillsAdditionalData;
}
export interface UpdatedAgentSkillsDefinitionDescriptor {
  optionalValue?: UpdatedAgentSkillsDefinitionDescriptorFields;
}
export interface UpdatedCustomDescriptorFields {
  data?: UpdatedDescriptorData;
}
export interface UpdatedCustomDescriptor {
  optionalValue?: UpdatedCustomDescriptorFields;
}
export interface UpdatedHttpDescriptorFields {
  source?: UpdatedDescriptorSource;
}
export interface UpdatedHttpDescriptor {
  optionalValue?: UpdatedHttpDescriptorFields;
}
export interface UpdatedAgUiDescriptorFields {
  source?: UpdatedDescriptorSource;
}
export interface UpdatedAgUiDescriptor {
  optionalValue?: UpdatedAgUiDescriptorFields;
}
export interface UpdatedDescriptorsFields {
  mcpServer?: UpdatedMcpServerDescriptor;
  a2aAgentCard?: UpdatedA2aAgentCardDescriptor;
  agentSkillsDefinition?: UpdatedAgentSkillsDefinitionDescriptor;
  custom?: UpdatedCustomDescriptor;
  http?: UpdatedHttpDescriptor;
  agui?: UpdatedAgUiDescriptor;
}
export interface UpdatedDescriptors {
  optionalValue?: UpdatedDescriptorsFields;
}
export interface UpdatedCustomMetadataMap {
  optionalValue?: any;
}
export interface UpdateRegistryRecordRequest {
  registryId: string;
  recordId: string;
  name?: string;
  displayName?: UpdatedDisplayName;
  description?: UpdatedDescription;
  recordType?: RecordType;
  descriptors?: UpdatedDescriptors;
  recordVersion?: string;
  customMetadata?: UpdatedCustomMetadataMap;
  triggerSynchronization?: boolean;
  provenance?: Provenance[];
}
export interface UpdateRegistryRecordResponse {
  registryArn: string;
  recordArn: string;
  recordId: string;
  name: string;
  displayName?: string;
  description?: string | redacted.Redacted<string>;
  recordType: RecordType;
  descriptors?: Descriptors;
  recordVersion?: string;
  status: RegistryRecordStatus;
  createdAt: Date;
  updatedAt: Date;
  statusReason?: string;
  provenance?: Provenance[];
  createdByAutoDetection?: boolean;
  createdBy?: string;
  customMetadata?: any;
  customMetadataSchemaComplianceStatus?: CustomMetadataSchemaComplianceStatus;
}
export interface UpdateRegistryRecordStatusRequest {
  registryId: string;
  recordId: string;
  status: RegistryRecordStatus;
  statusReason: string;
}
export interface UpdateRegistryRecordStatusResponse {
  registryArn: string;
  recordArn: string;
  recordId: string;
  status: RegistryRecordStatus;
  statusReason: string;
  updatedAt: Date;
}
export type NonBlankString = string;
export type ValidationExceptionReason =
  | "CannotParse"
  | "FieldValidationFailed"
  | "IdempotentParameterMismatchException"
  | "EventInOtherSession"
  | "ResourceConflict"
  | (string & {});
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type CreateRegistryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new registry, a catalog that organizes registry records and defines their discovery authorization and record approval behavior. Creation is asynchronous: the registry begins in the CREATING status and becomes usable once it reaches READY.
 */
export const createRegistry: API.OperationMethod<
  CreateRegistryRequest,
  CreateRegistryResponse,
  CreateRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21) as any as S.Schema<CreateRegistryRequest>,
  output: __S(22) as any as S.Schema<CreateRegistryResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRegistry",
}));

export type CreateRegistryRecordError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a registry record within a registry. A registry record describes a discoverable resource, such as an MCP server, an agent, an agent skill, or a custom resource. Creation is asynchronous: the record is returned with the CREATING status while it is processed.
 */
export const createRegistryRecord: API.OperationMethod<
  CreateRegistryRecordRequest,
  CreateRegistryRecordResponse,
  CreateRegistryRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47) as any as S.Schema<CreateRegistryRecordRequest>,
  output: __S(48) as any as S.Schema<CreateRegistryRecordResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRegistryRecord",
}));

export type DeleteRegistryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a registry. Deletion is asynchronous: the registry transitions to the DELETING status and is removed along with its registry records.
 */
export const deleteRegistry: API.OperationMethod<
  DeleteRegistryRequest,
  DeleteRegistryResponse,
  DeleteRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49) as any as S.Schema<DeleteRegistryRequest>,
  output: __S(50) as any as S.Schema<DeleteRegistryResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRegistry",
}));

export type DeleteRegistryRecordError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a registry record
 */
export const deleteRegistryRecord: API.OperationMethod<
  DeleteRegistryRecordRequest,
  DeleteRegistryRecordResponse,
  DeleteRegistryRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51) as any as S.Schema<DeleteRegistryRecordRequest>,
  output: __S(52) as any as S.Schema<DeleteRegistryRecordResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRegistryRecord",
}));

export type GetRegistryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a registry by identifier (ARN or ID)
 */
export const getRegistry: API.OperationMethod<
  GetRegistryRequest,
  GetRegistryResponse,
  GetRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53) as any as S.Schema<GetRegistryRequest>,
  output: __S(55) as any as S.Schema<GetRegistryResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRegistry",
}));

export type GetRegistryRecordError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of a registry record
 */
export const getRegistryRecord: API.OperationMethod<
  GetRegistryRecordRequest,
  GetRegistryRecordResponse,
  GetRegistryRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56) as any as S.Schema<GetRegistryRecordRequest>,
  output: __S(57) as any as S.Schema<GetRegistryRecordResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRegistryRecord",
}));

export type ListRegistriesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the registries in the caller's account and Region, with optional filtering by status and discovery authorizer type
 */
export const listRegistries: API.PaginatedOperationMethod<
  ListRegistriesRequest,
  ListRegistriesResponse,
  ListRegistriesError,
  Credentials | HttpClient.HttpClient,
  RegistrySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(60) as any as S.Schema<ListRegistriesRequest>,
  output: __S(63) as any as S.Schema<ListRegistriesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRegistries",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "registries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRegistryRecordsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the registry records within a registry, with optional filtering by name, status, and record type
 */
export const listRegistryRecords: API.PaginatedOperationMethod<
  ListRegistryRecordsRequest,
  ListRegistryRecordsResponse,
  ListRegistryRecordsError,
  Credentials | HttpClient.HttpClient,
  RegistryRecordSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(64) as any as S.Schema<ListRegistryRecordsRequest>,
  output: __S(69) as any as S.Schema<ListRegistryRecordsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRegistryRecords",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "registryRecords",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags associated with the specified Amazon Web Services Agent Registry resource. Returns the current tag key-value pairs on the resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(71) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type SubmitRegistryRecordForApprovalError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Submits a DRAFT registry record for approval, moving it into the registry's approval workflow. Depending on the registry's approval configuration, the record is either auto-approved or set to PENDING_APPROVAL for a curator to approve or reject.
 */
export const submitRegistryRecordForApproval: API.OperationMethod<
  SubmitRegistryRecordForApprovalRequest,
  SubmitRegistryRecordForApprovalResponse,
  SubmitRegistryRecordForApprovalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72) as any as S.Schema<SubmitRegistryRecordForApprovalRequest>,
  output: __S(73) as any as S.Schema<SubmitRegistryRecordForApprovalResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SubmitRegistryRecordForApproval",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds or overwrites one or more tags for the specified Amazon Web Services Agent Registry resource. Tags are key-value pairs that you can use to categorize and manage Amazon Web Services resources. If a tag with the same key already exists on the resource, the service replaces its value with the value you specify.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74) as any as S.Schema<TagResourceRequest>,
  output: __S(52) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes one or more tags from the specified Amazon Web Services Agent Registry resource. The operation removes only the tags whose keys you supply; other tags on the resource remain unchanged.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75) as any as S.Schema<UntagResourceRequest>,
  output: __S(52) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateRegistryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing registry. This operation uses PATCH semantics: specify only the fields you want to change, and omit the rest to leave them unchanged. Updates are applied asynchronously and the registry transitions to the UPDATING status while they are processed.
 */
export const updateRegistry: API.OperationMethod<
  UpdateRegistryRequest,
  UpdateRegistryResponse,
  UpdateRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(82) as any as S.Schema<UpdateRegistryRequest>,
  output: __S(55) as any as S.Schema<UpdateRegistryResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRegistry",
}));

export type UpdateRegistryRecordError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a registry record. The update is asynchronous: the record is returned with the UPDATING status while it is processed. Fields that use update wrappers follow PATCH semantics: omit the field to leave it unchanged.
 */
export const updateRegistryRecord: API.OperationMethod<
  UpdateRegistryRecordRequest,
  UpdateRegistryRecordResponse,
  UpdateRegistryRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(104) as any as S.Schema<UpdateRegistryRecordRequest>,
  output: __S(57) as any as S.Schema<UpdateRegistryRecordResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRegistryRecord",
}));

export type UpdateRegistryRecordStatusError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the status of a registry record as part of the registry's curation workflow, for example to approve or reject a record that is pending approval, or to deprecate an approved record so that it is no longer discoverable
 */
export const updateRegistryRecordStatus: API.OperationMethod<
  UpdateRegistryRecordStatusRequest,
  UpdateRegistryRecordStatusResponse,
  UpdateRegistryRecordStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(105) as any as S.Schema<UpdateRegistryRecordStatusRequest>,
  output: __S(106) as any as S.Schema<UpdateRegistryRecordStatusResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRegistryRecordStatus",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ kmsKeyArn: S.String })).annotate({
        identifier: "EncryptionConfiguration",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ matchValueString: S.String }),
        /*@__PURE__*/ S.Struct({ matchValueStringList: __S(1) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          claimMatchValue: __S(2),
          claimMatchOperator: S.String,
        }),
      ).annotate({
        identifier: "AuthorizingClaimMatchValueType",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          inboundTokenClaimName: S.String,
          inboundTokenClaimValueType: S.String,
          authorizingClaimMatchValue: __S(3),
        }),
      ).annotate({
        identifier: "CustomClaimValidationType",
      });
    case 5:
      return S.Array(__S(4));
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ resourceConfigurationIdentifier: S.String })]);
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          vpcIdentifier: S.String,
          subnetIds: __S(1),
          endpointIpAddressType: S.String,
          securityGroupIds: S.optional(__S(1)),
          tags: S.optional(__S(7)),
          routingDomain: S.optional(S.String),
        }),
      ).annotate({ identifier: "ManagedVpcResource" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ selfManagedLatticeResource: __S(6) }),
        /*@__PURE__*/ S.Struct({ managedVpcResource: __S(8) }),
      ]);
    case 2:
      return S.suspend(() => S.Struct({ domain: S.String, privateEndpoint: __S(9) })).annotate({
        identifier: "PrivateEndpointOverride",
      });
    case 3:
      return S.Array(__S(10));
    case 4:
      return S.suspend(() =>
        S.Struct({
          discoveryUrl: S.String,
          allowedAudience: S.optional(__S(1)),
          allowedClients: S.optional(__S(1)),
          allowedScopes: S.optional(__S(1)),
          customClaims: S.optional(__S(5)),
          privateEndpoint: S.optional(__S(9)),
          privateEndpointOverrides: S.optional(__S(11)),
        }),
      ).annotate({
        identifier: "CustomJWTAuthorizerConfiguration",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ customJWTAuthorizer: __S(12) })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          authorizerConfiguration: S.optional(__S(13)),
          authorizerType: S.optional(S.String),
        }),
      ).annotate({ identifier: "DiscoveryConfiguration" });
    case 7:
      return S.Array(S.String);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ autoApprovalRules: S.optional(__S(15)) })).annotate({
        identifier: "ApprovalConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ recordType: S.String, schema: SensitiveString })).annotate({
        identifier: "RecordTypeSchemaOverride",
      });
    case 2:
      return S.Array(__S(17));
    case 3:
      return S.suspend(() =>
        S.Struct({
          defaultSchema: S.optional(SensitiveString),
          recordTypeSchemaOverrides: S.optional(__S(18)),
        }),
      ).annotate({
        identifier: "CustomMetadataSchemaConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ scope: S.String, enabled: S.Boolean })).annotate({
        identifier: "AutoDetectionConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          encryptionConfiguration: S.optional(__S(0)),
          discoveryConfiguration: S.optional(__S(14)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(7)),
          approvalConfiguration: S.optional(__S(16)),
          customMetadataSchemaConfiguration: S.optional(__S(19)),
          autoDetectionConfiguration: S.optional(__S(20)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/registries" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateRegistryRequest" });
    case 6:
      return S.suspend(() => S.Struct({ registryArn: S.String })).annotate({
        identifier: "CreateRegistryResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ data: S.optional(SensitiveString), dataSchemaVersion: S.optional(S.String) }),
      ).annotate({ identifier: "McpToolsDescriptor" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ tools: S.optional(__S(23)) })).annotate({
        identifier: "McpServerAdditionalData",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          providerArn: S.String,
          grantType: S.optional(S.String),
          scopes: S.optional(__S(1)),
          customParameters: S.optional(__S(25)),
        }),
      ).annotate({
        identifier: "RegistryRecordOAuthCredentialProvider",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.optional(S.String),
          service: S.optional(S.String),
          region: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RegistryRecordIamCredentialProvider",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ oauthCredentialProvider: __S(26) }),
        /*@__PURE__*/ S.Struct({ iamCredentialProvider: __S(27) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          credentialProviderType: S.String,
          credentialProvider: __S(28),
        }),
      ).annotate({
        identifier: "RegistryRecordCredentialProviderConfiguration",
      });
    case 6:
      return S.Array(__S(29));
    case 7:
      return S.suspend(() =>
        S.Struct({
          url: S.String,
          credentialProviderConfigurations: S.optional(__S(30)),
        }),
      ).annotate({ identifier: "DescriptorSourceFromUrl" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ fromUrl: S.optional(__S(31)) })).annotate({
        identifier: "DescriptorSource",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          data: S.optional(SensitiveString),
          dataSchemaVersion: S.optional(S.String),
          additionalData: S.optional(__S(24)),
          source: S.optional(__S(32)),
        }),
      ).annotate({ identifier: "McpServerDescriptor" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          data: S.optional(SensitiveString),
          dataSchemaVersion: S.optional(S.String),
          source: S.optional(__S(32)),
        }),
      ).annotate({ identifier: "A2aAgentCardDescriptor" });
    case 3:
      return S.suspend(() => S.Struct({ skillMd: S.optional(__S(34)) })).annotate({
        identifier: "AgentSkillsAdditionalData",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          data: S.optional(SensitiveString),
          dataSchemaVersion: S.optional(S.String),
          additionalData: S.optional(__S(35)),
        }),
      ).annotate({
        identifier: "AgentSkillsDefinitionDescriptor",
      });
    case 5:
      return S.suspend(() => S.Struct({ data: S.optional(SensitiveString) })).annotate({
        identifier: "CustomDescriptor",
      });
    case 6:
      return S.suspend(() => S.Struct({ source: S.optional(__S(32)) })).annotate({
        identifier: "HttpDescriptor",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          mcpServer: S.optional(__S(33)),
          a2aAgentCard: S.optional(__S(34)),
          agentSkillsDefinition: S.optional(__S(36)),
          custom: S.optional(__S(37)),
          http: S.optional(__S(38)),
          agui: S.optional(__S(38)),
        }),
      ).annotate({ identifier: "Descriptors" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ serverProtocol: S.optional(S.String) })).annotate({
        identifier: "AgentCoreRuntimeProtocolConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ workloadIdentityArn: S.String })).annotate({
        identifier: "WorkloadIdentityDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          protocolConfiguration: S.optional(__S(40)),
          authorizerConfiguration: S.optional(__S(13)),
          workloadIdentityDetails: S.optional(__S(41)),
        }),
      ).annotate({
        identifier: "AgentCoreRuntimeSourceDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          protocolType: S.optional(S.String),
          authorizerType: S.optional(S.String),
          authorizerConfiguration: S.optional(__S(13)),
          workloadIdentityDetails: S.optional(__S(41)),
        }),
      ).annotate({
        identifier: "AgentCoreGatewaySourceDetails",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ agentcoreRuntime: __S(42) }),
        /*@__PURE__*/ S.Struct({ agentcoreGateway: __S(43) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          relation: S.String,
          sourceId: S.String,
          sourceType: S.optional(S.String),
          sourceDetails: S.optional(__S(44)),
        }),
      ).annotate({ identifier: "Provenance" });
    case 6:
      return S.Array(__S(45));
    case 7:
      return S.suspend(() =>
        S.Struct({
          registryId: S.String.pipe(T.HttpLabel("registryId")),
          name: S.String,
          displayName: S.optional(S.String),
          description: S.optional(SensitiveString),
          recordType: S.String,
          descriptors: __S(39),
          recordVersion: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          provenance: S.optional(__S(46)),
          customMetadata: S.optional(S.Any),
          tags: S.optional(__S(7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/registries/{registryId}/records" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateRegistryRecordRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ recordArn: S.String, status: S.String })).annotate({
        identifier: "CreateRegistryRecordResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ registryId: S.String.pipe(T.HttpLabel("registryId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/registries/{registryId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteRegistryRequest" });
    case 2:
      return S.suspend(() => S.Struct({ status: S.String })).annotate({
        identifier: "DeleteRegistryResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          registryId: S.String.pipe(T.HttpLabel("registryId")),
          recordId: S.String.pipe(T.HttpLabel("recordId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/registries/{registryId}/records/{recordId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRegistryRecordRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteRegistryRecordResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ registryId: S.String.pipe(T.HttpLabel("registryId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/registries/{registryId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRegistryRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          configuration: __S(20),
          status: S.String,
          statusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "AutoDetection" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          registryId: S.String,
          registryArn: S.String,
          discoveryConfiguration: S.optional(__S(14)),
          encryptionConfiguration: S.optional(__S(0)),
          approvalConfiguration: S.optional(__S(16)),
          customMetadataSchemaConfiguration: S.optional(__S(19)),
          status: S.String,
          statusReason: S.optional(S.String),
          autoDetection: S.optional(__S(54)),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "GetRegistryResponse" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          registryId: S.String.pipe(T.HttpLabel("registryId")),
          recordId: S.String.pipe(T.HttpLabel("recordId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/registries/{registryId}/records/{recordId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRegistryRecordRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          registryArn: S.String,
          recordArn: S.String,
          recordId: S.String,
          name: S.String,
          displayName: S.optional(S.String),
          description: S.optional(SensitiveString),
          recordType: S.String,
          descriptors: S.optional(__S(39)),
          recordVersion: S.optional(S.String),
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          statusReason: S.optional(S.String),
          provenance: S.optional(__S(46)),
          createdByAutoDetection: S.optional(S.Boolean),
          createdBy: S.optional(S.String),
          customMetadata: S.optional(S.Any),
          customMetadataSchemaComplianceStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetRegistryRecordResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ name: S.String, values: __S(1) })).annotate({
        identifier: "RegistryFilter",
      });
    case 3:
      return S.Array(__S(58));
    case 4:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          filters: S.optional(__S(59)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/registries-list" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListRegistriesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          registryId: S.String,
          registryArn: S.String,
          discoveryConfiguration: S.optional(__S(14)),
          status: S.String,
          statusReason: S.optional(S.String),
          autoDetection: S.optional(__S(54)),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "RegistrySummary" });
    case 6:
      return S.Array(__S(61));
    case 7:
      return S.suspend(() =>
        S.Struct({ registries: __S(62), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRegistriesResponse" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          registryId: S.String.pipe(T.HttpLabel("registryId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          filters: S.optional(__S(59)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/registries/{registryId}/records-list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRegistryRecordsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          relation: S.String,
          sourceId: S.String,
          sourceType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProvenanceSummary" });
    case 2:
      return S.Array(__S(65));
    case 3:
      return S.suspend(() =>
        S.Struct({
          registryArn: S.String,
          recordArn: S.String,
          recordId: S.String,
          name: S.String,
          displayName: S.optional(S.String),
          description: S.optional(SensitiveString),
          recordType: S.String,
          recordVersion: S.String,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdByAutoDetection: S.optional(S.Boolean),
          createdBy: S.optional(S.String),
          provenanceSummaryList: S.optional(__S(66)),
          customMetadataSchemaComplianceStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "RegistryRecordSummary" });
    case 4:
      return S.Array(__S(67));
    case 5:
      return S.suspend(() =>
        S.Struct({ registryRecords: __S(68), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListRegistryRecordsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn+}" }),
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
    case 7:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(25)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          registryId: S.String.pipe(T.HttpLabel("registryId")),
          recordId: S.String.pipe(T.HttpLabel("recordId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/registries/{registryId}/records/{recordId}/submit-for-approval",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SubmitRegistryRecordForApprovalRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          registryArn: S.String,
          recordArn: S.String,
          recordId: S.String,
          status: S.String,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "SubmitRegistryRecordForApprovalResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: __S(7) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(1).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 4:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(SensitiveString) })).annotate({
        identifier: "UpdatedDescription",
      });
    case 5:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(13)) })).annotate({
        identifier: "UpdatedAuthorizerConfiguration",
      });
    case 6:
      return S.suspend(() => S.Struct({ authorizerConfiguration: S.optional(__S(77)) })).annotate({
        identifier: "UpdatedDiscoveryConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(16)) })).annotate({
        identifier: "UpdatedApprovalConfiguration",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(19)) })).annotate({
        identifier: "UpdatedCustomMetadataSchemaConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(20)) })).annotate({
        identifier: "UpdatedAutoDetectionConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          registryId: S.String.pipe(T.HttpLabel("registryId")),
          name: S.optional(S.String),
          description: S.optional(__S(76)),
          discoveryConfiguration: S.optional(__S(78)),
          approvalConfiguration: S.optional(__S(79)),
          customMetadataSchemaConfiguration: S.optional(__S(80)),
          autoDetectionConfiguration: S.optional(__S(81)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/registries/{registryId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateRegistryRequest" });
    case 3:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(S.String) })).annotate({
        identifier: "UpdatedDisplayName",
      });
    case 4:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(32)) })).annotate({
        identifier: "UpdatedDescriptorSource",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          data: S.optional(__S(76)),
          dataSchemaVersion: S.optional(__S(83)),
        }),
      ).annotate({
        identifier: "UpdatedMcpToolsDescriptorFields",
      });
    case 6:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(85)) })).annotate({
        identifier: "UpdatedMcpToolsDescriptor",
      });
    case 7:
      return S.suspend(() => S.Struct({ tools: S.optional(__S(86)) })).annotate({
        identifier: "UpdatedMcpServerAdditionalDataFields",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(87)) })).annotate({
        identifier: "UpdatedMcpServerAdditionalData",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          data: S.optional(__S(76)),
          dataSchemaVersion: S.optional(__S(83)),
          source: S.optional(__S(84)),
          additionalData: S.optional(__S(88)),
        }),
      ).annotate({
        identifier: "UpdatedMcpServerDescriptorFields",
      });
    case 2:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(89)) })).annotate({
        identifier: "UpdatedMcpServerDescriptor",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          data: S.optional(__S(76)),
          dataSchemaVersion: S.optional(__S(83)),
          source: S.optional(__S(84)),
        }),
      ).annotate({
        identifier: "UpdatedA2aAgentCardDescriptorFields",
      });
    case 4:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(91)) })).annotate({
        identifier: "UpdatedA2aAgentCardDescriptor",
      });
    case 5:
      return S.suspend(() => S.Struct({ skillMd: S.optional(__S(92)) })).annotate({
        identifier: "UpdatedAgentSkillsAdditionalDataFields",
      });
    case 6:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(93)) })).annotate({
        identifier: "UpdatedAgentSkillsAdditionalData",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          data: S.optional(__S(76)),
          dataSchemaVersion: S.optional(__S(83)),
          additionalData: S.optional(__S(94)),
        }),
      ).annotate({
        identifier: "UpdatedAgentSkillsDefinitionDescriptorFields",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(95)) })).annotate({
        identifier: "UpdatedAgentSkillsDefinitionDescriptor",
      });
    case 1:
      return S.suspend(() => S.Struct({ data: S.optional(__S(76)) })).annotate({
        identifier: "UpdatedCustomDescriptorFields",
      });
    case 2:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(97)) })).annotate({
        identifier: "UpdatedCustomDescriptor",
      });
    case 3:
      return S.suspend(() => S.Struct({ source: S.optional(__S(84)) })).annotate({
        identifier: "UpdatedHttpDescriptorFields",
      });
    case 4:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(99)) })).annotate({
        identifier: "UpdatedHttpDescriptor",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          mcpServer: S.optional(__S(90)),
          a2aAgentCard: S.optional(__S(92)),
          agentSkillsDefinition: S.optional(__S(96)),
          custom: S.optional(__S(98)),
          http: S.optional(__S(100)),
          agui: S.optional(__S(100)),
        }),
      ).annotate({ identifier: "UpdatedDescriptorsFields" });
    case 6:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(__S(101)) })).annotate({
        identifier: "UpdatedDescriptors",
      });
    case 7:
      return S.suspend(() => S.Struct({ optionalValue: S.optional(S.Any) })).annotate({
        identifier: "UpdatedCustomMetadataMap",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          registryId: S.String.pipe(T.HttpLabel("registryId")),
          recordId: S.String.pipe(T.HttpLabel("recordId")),
          name: S.optional(S.String),
          displayName: S.optional(__S(83)),
          description: S.optional(__S(76)),
          recordType: S.optional(S.String),
          descriptors: S.optional(__S(102)),
          recordVersion: S.optional(S.String),
          customMetadata: S.optional(__S(103)),
          triggerSynchronization: S.optional(S.Boolean),
          provenance: S.optional(__S(46)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/registries/{registryId}/records/{recordId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateRegistryRecordRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          registryId: S.String.pipe(T.HttpLabel("registryId")),
          recordId: S.String.pipe(T.HttpLabel("recordId")),
          status: S.String,
          statusReason: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/registries/{registryId}/records/{recordId}/status" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateRegistryRecordStatusRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          registryArn: S.String,
          recordArn: S.String,
          recordId: S.String,
          status: S.String,
          statusReason: S.String,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "UpdateRegistryRecordStatusResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 4:
      return S.Array(__S(107));
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
  }
}
