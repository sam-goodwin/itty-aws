import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface VerifiedPermissions {
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | TooManyTagsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
}

export type Verifiedpermissions = VerifiedPermissions;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type ActionId = string;

export interface ActionIdentifier {
  actionType: string;
  actionId: string;
}
export type ActionIdentifierList = Array<ActionIdentifier>;
export type ActionType = string;

export type AmazonResourceName = string;

export type AttributeValue =
  | { boolean: boolean }
  | { entityIdentifier: EntityIdentifier }
  | { long: number }
  | { string: string }
  | { set: Array<AttributeValue> }
  | { record: Record<string, AttributeValue> }
  | { ipaddr: string }
  | { decimal: string };
export type Audience = string;

export type Audiences = Array<string>;
export type BatchGetPolicyErrorCode =
  | "POLICY_STORE_NOT_FOUND"
  | "POLICY_NOT_FOUND";
export interface BatchGetPolicyErrorItem {
  code: BatchGetPolicyErrorCode;
  policyStoreId: string;
  policyId: string;
  message: string;
}
export type BatchGetPolicyErrorList = Array<BatchGetPolicyErrorItem>;
export interface BatchGetPolicyInput {
  requests: Array<BatchGetPolicyInputItem>;
}
export interface BatchGetPolicyInputItem {
  policyStoreId: string;
  policyId: string;
}
export type BatchGetPolicyInputList = Array<BatchGetPolicyInputItem>;
export interface BatchGetPolicyOutput {
  results: Array<BatchGetPolicyOutputItem>;
  errors: Array<BatchGetPolicyErrorItem>;
}
export interface BatchGetPolicyOutputItem {
  policyStoreId: string;
  policyId: string;
  policyType: PolicyType;
  definition: PolicyDefinitionDetail;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
}
export type BatchGetPolicyOutputList = Array<BatchGetPolicyOutputItem>;
export interface BatchIsAuthorizedInput {
  policyStoreId: string;
  entities?: EntitiesDefinition;
  requests: Array<BatchIsAuthorizedInputItem>;
}
export interface BatchIsAuthorizedInputItem {
  principal?: EntityIdentifier;
  action?: ActionIdentifier;
  resource?: EntityIdentifier;
  context?: ContextDefinition;
}
export type BatchIsAuthorizedInputList = Array<BatchIsAuthorizedInputItem>;
export interface BatchIsAuthorizedOutput {
  results: Array<BatchIsAuthorizedOutputItem>;
}
export interface BatchIsAuthorizedOutputItem {
  request: BatchIsAuthorizedInputItem;
  decision: Decision;
  determiningPolicies: Array<DeterminingPolicyItem>;
  errors: Array<EvaluationErrorItem>;
}
export type BatchIsAuthorizedOutputList = Array<BatchIsAuthorizedOutputItem>;
export interface BatchIsAuthorizedWithTokenInput {
  policyStoreId: string;
  identityToken?: string;
  accessToken?: string;
  entities?: EntitiesDefinition;
  requests: Array<BatchIsAuthorizedWithTokenInputItem>;
}
export interface BatchIsAuthorizedWithTokenInputItem {
  action?: ActionIdentifier;
  resource?: EntityIdentifier;
  context?: ContextDefinition;
}
export type BatchIsAuthorizedWithTokenInputList =
  Array<BatchIsAuthorizedWithTokenInputItem>;
export interface BatchIsAuthorizedWithTokenOutput {
  principal?: EntityIdentifier;
  results: Array<BatchIsAuthorizedWithTokenOutputItem>;
}
export interface BatchIsAuthorizedWithTokenOutputItem {
  request: BatchIsAuthorizedWithTokenInputItem;
  decision: Decision;
  determiningPolicies: Array<DeterminingPolicyItem>;
  errors: Array<EvaluationErrorItem>;
}
export type BatchIsAuthorizedWithTokenOutputList =
  Array<BatchIsAuthorizedWithTokenOutputItem>;
export type BooleanAttribute = boolean;

export type CedarJson = string;

export type CedarVersion = "CEDAR_2" | "CEDAR_4";
export type Claim = string;

export type ClientId = string;

export type ClientIds = Array<string>;
export interface CognitoGroupConfiguration {
  groupEntityType: string;
}
export interface CognitoGroupConfigurationDetail {
  groupEntityType?: string;
}
export interface CognitoGroupConfigurationItem {
  groupEntityType?: string;
}
export interface CognitoUserPoolConfiguration {
  userPoolArn: string;
  clientIds?: Array<string>;
  groupConfiguration?: CognitoGroupConfiguration;
}
export interface CognitoUserPoolConfigurationDetail {
  userPoolArn: string;
  clientIds: Array<string>;
  issuer: string;
  groupConfiguration?: CognitoGroupConfigurationDetail;
}
export interface CognitoUserPoolConfigurationItem {
  userPoolArn: string;
  clientIds: Array<string>;
  issuer: string;
  groupConfiguration?: CognitoGroupConfigurationItem;
}
export type Configuration =
  | { cognitoUserPoolConfiguration: CognitoUserPoolConfiguration }
  | { openIdConnectConfiguration: OpenIdConnectConfiguration };
export type ConfigurationDetail =
  | { cognitoUserPoolConfiguration: CognitoUserPoolConfigurationDetail }
  | { openIdConnectConfiguration: OpenIdConnectConfigurationDetail };
export type ConfigurationItem =
  | { cognitoUserPoolConfiguration: CognitoUserPoolConfigurationItem }
  | { openIdConnectConfiguration: OpenIdConnectConfigurationItem };
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resources: Array<ResourceConflict>;
}> {}
export type ContextDefinition =
  | { contextMap: Record<string, AttributeValue> }
  | { cedarJson: string };
export type ContextMap = Record<string, AttributeValue>;
export interface CreateIdentitySourceInput {
  clientToken?: string;
  policyStoreId: string;
  configuration: Configuration;
  principalEntityType?: string;
}
export interface CreateIdentitySourceOutput {
  createdDate: Date | string;
  identitySourceId: string;
  lastUpdatedDate: Date | string;
  policyStoreId: string;
}
export interface CreatePolicyInput {
  clientToken?: string;
  policyStoreId: string;
  definition: PolicyDefinition;
}
export interface CreatePolicyOutput {
  policyStoreId: string;
  policyId: string;
  policyType: PolicyType;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
  actions?: Array<ActionIdentifier>;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
  effect?: PolicyEffect;
}
export interface CreatePolicyStoreInput {
  clientToken?: string;
  validationSettings: ValidationSettings;
  description?: string;
  deletionProtection?: DeletionProtection;
  tags?: Record<string, string>;
}
export interface CreatePolicyStoreOutput {
  policyStoreId: string;
  arn: string;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
}
export interface CreatePolicyTemplateInput {
  clientToken?: string;
  policyStoreId: string;
  description?: string;
  statement: string;
}
export interface CreatePolicyTemplateOutput {
  policyStoreId: string;
  policyTemplateId: string;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
}
export type Decimal = string;

export type Decision = "ALLOW" | "DENY";
export interface DeleteIdentitySourceInput {
  policyStoreId: string;
  identitySourceId: string;
}
export interface DeleteIdentitySourceOutput {}
export interface DeletePolicyInput {
  policyStoreId: string;
  policyId: string;
}
export interface DeletePolicyOutput {}
export interface DeletePolicyStoreInput {
  policyStoreId: string;
}
export interface DeletePolicyStoreOutput {}
export interface DeletePolicyTemplateInput {
  policyStoreId: string;
  policyTemplateId: string;
}
export interface DeletePolicyTemplateOutput {}
export type DeletionProtection = "ENABLED" | "DISABLED";
export interface DeterminingPolicyItem {
  policyId: string;
}
export type DeterminingPolicyList = Array<DeterminingPolicyItem>;
export type DiscoveryUrl = string;

export type EntitiesDefinition =
  | { entityList: Array<EntityItem> }
  | { cedarJson: string };
export type EntityAttributes = Record<string, AttributeValue>;
export type EntityId = string;

export interface EntityIdentifier {
  entityType: string;
  entityId: string;
}
export type EntityIdPrefix = string;

export interface EntityItem {
  identifier: EntityIdentifier;
  attributes?: Record<string, AttributeValue>;
  parents?: Array<EntityIdentifier>;
}
export type EntityList = Array<EntityItem>;
export type EntityReference =
  | { unspecified: boolean }
  | { identifier: EntityIdentifier };
export type EntityType = string;

export interface EvaluationErrorItem {
  errorDescription: string;
}
export type EvaluationErrorList = Array<EvaluationErrorItem>;
export interface GetIdentitySourceInput {
  policyStoreId: string;
  identitySourceId: string;
}
export interface GetIdentitySourceOutput {
  createdDate: Date | string;
  details?: IdentitySourceDetails;
  identitySourceId: string;
  lastUpdatedDate: Date | string;
  policyStoreId: string;
  principalEntityType: string;
  configuration?: ConfigurationDetail;
}
export interface GetPolicyInput {
  policyStoreId: string;
  policyId: string;
}
export interface GetPolicyOutput {
  policyStoreId: string;
  policyId: string;
  policyType: PolicyType;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
  actions?: Array<ActionIdentifier>;
  definition: PolicyDefinitionDetail;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
  effect?: PolicyEffect;
}
export interface GetPolicyStoreInput {
  policyStoreId: string;
  tags?: boolean;
}
export interface GetPolicyStoreOutput {
  policyStoreId: string;
  arn: string;
  validationSettings: ValidationSettings;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
  description?: string;
  deletionProtection?: DeletionProtection;
  cedarVersion?: CedarVersion;
  tags?: Record<string, string>;
}
export interface GetPolicyTemplateInput {
  policyStoreId: string;
  policyTemplateId: string;
}
export interface GetPolicyTemplateOutput {
  policyStoreId: string;
  policyTemplateId: string;
  description?: string;
  statement: string;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
}
export interface GetSchemaInput {
  policyStoreId: string;
}
export interface GetSchemaOutput {
  policyStoreId: string;
  schema: string;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
  namespaces?: Array<string>;
}
export type GroupEntityType = string;

export type IdempotencyToken = string;

export interface IdentitySourceDetails {
  clientIds?: Array<string>;
  userPoolArn?: string;
  discoveryUrl?: string;
  openIdIssuer?: OpenIdIssuer;
}
export interface IdentitySourceFilter {
  principalEntityType?: string;
}
export type IdentitySourceFilters = Array<IdentitySourceFilter>;
export type IdentitySourceId = string;

export interface IdentitySourceItem {
  createdDate: Date | string;
  details?: IdentitySourceItemDetails;
  identitySourceId: string;
  lastUpdatedDate: Date | string;
  policyStoreId: string;
  principalEntityType: string;
  configuration?: ConfigurationItem;
}
export interface IdentitySourceItemDetails {
  clientIds?: Array<string>;
  userPoolArn?: string;
  discoveryUrl?: string;
  openIdIssuer?: OpenIdIssuer;
}
export type IdentitySources = Array<IdentitySourceItem>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export declare class InvalidStateException extends EffectData.TaggedError(
  "InvalidStateException",
)<{
  readonly message: string;
}> {}
export type IpAddr = string;

export interface IsAuthorizedInput {
  policyStoreId: string;
  principal?: EntityIdentifier;
  action?: ActionIdentifier;
  resource?: EntityIdentifier;
  context?: ContextDefinition;
  entities?: EntitiesDefinition;
}
export interface IsAuthorizedOutput {
  decision: Decision;
  determiningPolicies: Array<DeterminingPolicyItem>;
  errors: Array<EvaluationErrorItem>;
}
export interface IsAuthorizedWithTokenInput {
  policyStoreId: string;
  identityToken?: string;
  accessToken?: string;
  action?: ActionIdentifier;
  resource?: EntityIdentifier;
  context?: ContextDefinition;
  entities?: EntitiesDefinition;
}
export interface IsAuthorizedWithTokenOutput {
  decision: Decision;
  determiningPolicies: Array<DeterminingPolicyItem>;
  errors: Array<EvaluationErrorItem>;
  principal?: EntityIdentifier;
}
export type Issuer = string;

export interface ListIdentitySourcesInput {
  policyStoreId: string;
  nextToken?: string;
  maxResults?: number;
  filters?: Array<IdentitySourceFilter>;
}
export type ListIdentitySourcesMaxResults = number;

export interface ListIdentitySourcesOutput {
  nextToken?: string;
  identitySources: Array<IdentitySourceItem>;
}
export interface ListPoliciesInput {
  policyStoreId: string;
  nextToken?: string;
  maxResults?: number;
  filter?: PolicyFilter;
}
export interface ListPoliciesOutput {
  nextToken?: string;
  policies: Array<PolicyItem>;
}
export interface ListPolicyStoresInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListPolicyStoresOutput {
  nextToken?: string;
  policyStores: Array<PolicyStoreItem>;
}
export interface ListPolicyTemplatesInput {
  policyStoreId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListPolicyTemplatesOutput {
  nextToken?: string;
  policyTemplates: Array<PolicyTemplateItem>;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags?: Record<string, string>;
}
export type LongAttribute = number;

export type MaxResults = number;

export type Namespace = string;

export type NamespaceList = Array<string>;
export type NextToken = string;

export interface OpenIdConnectAccessTokenConfiguration {
  principalIdClaim?: string;
  audiences?: Array<string>;
}
export interface OpenIdConnectAccessTokenConfigurationDetail {
  principalIdClaim?: string;
  audiences?: Array<string>;
}
export interface OpenIdConnectAccessTokenConfigurationItem {
  principalIdClaim?: string;
  audiences?: Array<string>;
}
export interface OpenIdConnectConfiguration {
  issuer: string;
  entityIdPrefix?: string;
  groupConfiguration?: OpenIdConnectGroupConfiguration;
  tokenSelection: OpenIdConnectTokenSelection;
}
export interface OpenIdConnectConfigurationDetail {
  issuer: string;
  entityIdPrefix?: string;
  groupConfiguration?: OpenIdConnectGroupConfigurationDetail;
  tokenSelection: OpenIdConnectTokenSelectionDetail;
}
export interface OpenIdConnectConfigurationItem {
  issuer: string;
  entityIdPrefix?: string;
  groupConfiguration?: OpenIdConnectGroupConfigurationItem;
  tokenSelection: OpenIdConnectTokenSelectionItem;
}
export interface OpenIdConnectGroupConfiguration {
  groupClaim: string;
  groupEntityType: string;
}
export interface OpenIdConnectGroupConfigurationDetail {
  groupClaim: string;
  groupEntityType: string;
}
export interface OpenIdConnectGroupConfigurationItem {
  groupClaim: string;
  groupEntityType: string;
}
export interface OpenIdConnectIdentityTokenConfiguration {
  principalIdClaim?: string;
  clientIds?: Array<string>;
}
export interface OpenIdConnectIdentityTokenConfigurationDetail {
  principalIdClaim?: string;
  clientIds?: Array<string>;
}
export interface OpenIdConnectIdentityTokenConfigurationItem {
  principalIdClaim?: string;
  clientIds?: Array<string>;
}
export type OpenIdConnectTokenSelection =
  | { accessTokenOnly: OpenIdConnectAccessTokenConfiguration }
  | { identityTokenOnly: OpenIdConnectIdentityTokenConfiguration };
export type OpenIdConnectTokenSelectionDetail =
  | { accessTokenOnly: OpenIdConnectAccessTokenConfigurationDetail }
  | { identityTokenOnly: OpenIdConnectIdentityTokenConfigurationDetail };
export type OpenIdConnectTokenSelectionItem =
  | { accessTokenOnly: OpenIdConnectAccessTokenConfigurationItem }
  | { identityTokenOnly: OpenIdConnectIdentityTokenConfigurationItem };
export type OpenIdIssuer = "COGNITO";
export type ParentList = Array<EntityIdentifier>;
export type PolicyDefinition =
  | { static: StaticPolicyDefinition }
  | { templateLinked: TemplateLinkedPolicyDefinition };
export type PolicyDefinitionDetail =
  | { static: StaticPolicyDefinitionDetail }
  | { templateLinked: TemplateLinkedPolicyDefinitionDetail };
export type PolicyDefinitionItem =
  | { static: StaticPolicyDefinitionItem }
  | { templateLinked: TemplateLinkedPolicyDefinitionItem };
export type PolicyEffect = "PERMIT" | "FORBID";
export interface PolicyFilter {
  principal?: EntityReference;
  resource?: EntityReference;
  policyType?: PolicyType;
  policyTemplateId?: string;
}
export type PolicyId = string;

export interface PolicyItem {
  policyStoreId: string;
  policyId: string;
  policyType: PolicyType;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
  actions?: Array<ActionIdentifier>;
  definition: PolicyDefinitionItem;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
  effect?: PolicyEffect;
}
export type PolicyList = Array<PolicyItem>;
export type PolicyStatement = string;

export type PolicyStoreDescription = string;

export type PolicyStoreId = string;

export interface PolicyStoreItem {
  policyStoreId: string;
  arn: string;
  createdDate: Date | string;
  lastUpdatedDate?: Date | string;
  description?: string;
}
export type PolicyStoreList = Array<PolicyStoreItem>;
export type PolicyTemplateDescription = string;

export type PolicyTemplateId = string;

export interface PolicyTemplateItem {
  policyStoreId: string;
  policyTemplateId: string;
  description?: string;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
}
export type PolicyTemplatesList = Array<PolicyTemplateItem>;
export type PolicyType = "STATIC" | "TEMPLATE_LINKED";
export type PrincipalEntityType = string;

export interface PutSchemaInput {
  policyStoreId: string;
  definition: SchemaDefinition;
}
export interface PutSchemaOutput {
  policyStoreId: string;
  namespaces: Array<string>;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
}
export type RecordAttribute = Record<string, AttributeValue>;
export type ResourceArn = string;

export interface ResourceConflict {
  resourceId: string;
  resourceType: ResourceType;
}
export type ResourceConflictList = Array<ResourceConflict>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: ResourceType;
}> {}
export type ResourceType =
  | "IDENTITY_SOURCE"
  | "POLICY_STORE"
  | "POLICY"
  | "POLICY_TEMPLATE"
  | "SCHEMA";
export type SchemaDefinition = { cedarJson: string };
export type SchemaJson = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType: ResourceType;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export type SetAttribute = Array<AttributeValue>;
export interface StaticPolicyDefinition {
  description?: string;
  statement: string;
}
export interface StaticPolicyDefinitionDetail {
  description?: string;
  statement: string;
}
export interface StaticPolicyDefinitionItem {
  description?: string;
}
export type StaticPolicyDescription = string;

export type StringAttribute = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export interface TemplateLinkedPolicyDefinition {
  policyTemplateId: string;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
}
export interface TemplateLinkedPolicyDefinitionDetail {
  policyTemplateId: string;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
}
export interface TemplateLinkedPolicyDefinitionItem {
  policyTemplateId: string;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export type TimestampFormat = Date | string;

export type Token = string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateCognitoGroupConfiguration {
  groupEntityType: string;
}
export interface UpdateCognitoUserPoolConfiguration {
  userPoolArn: string;
  clientIds?: Array<string>;
  groupConfiguration?: UpdateCognitoGroupConfiguration;
}
export type UpdateConfiguration =
  | { cognitoUserPoolConfiguration: UpdateCognitoUserPoolConfiguration }
  | { openIdConnectConfiguration: UpdateOpenIdConnectConfiguration };
export interface UpdateIdentitySourceInput {
  policyStoreId: string;
  identitySourceId: string;
  updateConfiguration: UpdateConfiguration;
  principalEntityType?: string;
}
export interface UpdateIdentitySourceOutput {
  createdDate: Date | string;
  identitySourceId: string;
  lastUpdatedDate: Date | string;
  policyStoreId: string;
}
export interface UpdateOpenIdConnectAccessTokenConfiguration {
  principalIdClaim?: string;
  audiences?: Array<string>;
}
export interface UpdateOpenIdConnectConfiguration {
  issuer: string;
  entityIdPrefix?: string;
  groupConfiguration?: UpdateOpenIdConnectGroupConfiguration;
  tokenSelection: UpdateOpenIdConnectTokenSelection;
}
export interface UpdateOpenIdConnectGroupConfiguration {
  groupClaim: string;
  groupEntityType: string;
}
export interface UpdateOpenIdConnectIdentityTokenConfiguration {
  principalIdClaim?: string;
  clientIds?: Array<string>;
}
export type UpdateOpenIdConnectTokenSelection =
  | { accessTokenOnly: UpdateOpenIdConnectAccessTokenConfiguration }
  | { identityTokenOnly: UpdateOpenIdConnectIdentityTokenConfiguration };
export type UpdatePolicyDefinition = { static: UpdateStaticPolicyDefinition };
export interface UpdatePolicyInput {
  policyStoreId: string;
  policyId: string;
  definition: UpdatePolicyDefinition;
}
export interface UpdatePolicyOutput {
  policyStoreId: string;
  policyId: string;
  policyType: PolicyType;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
  actions?: Array<ActionIdentifier>;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
  effect?: PolicyEffect;
}
export interface UpdatePolicyStoreInput {
  policyStoreId: string;
  validationSettings: ValidationSettings;
  deletionProtection?: DeletionProtection;
  description?: string;
}
export interface UpdatePolicyStoreOutput {
  policyStoreId: string;
  arn: string;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
}
export interface UpdatePolicyTemplateInput {
  policyStoreId: string;
  policyTemplateId: string;
  description?: string;
  statement: string;
}
export interface UpdatePolicyTemplateOutput {
  policyStoreId: string;
  policyTemplateId: string;
  createdDate: Date | string;
  lastUpdatedDate: Date | string;
}
export interface UpdateStaticPolicyDefinition {
  description?: string;
  statement: string;
}
export type UserPoolArn = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  path: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationMode = "OFF" | "STRICT";
export interface ValidationSettings {
  mode: ValidationMode;
}
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}
