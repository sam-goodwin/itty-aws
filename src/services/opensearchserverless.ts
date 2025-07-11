import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface OpenSearchServerless {
  batchGetCollection(
    input: BatchGetCollectionRequest,
  ): Effect.Effect<
    BatchGetCollectionResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  batchGetEffectiveLifecyclePolicy(
    input: BatchGetEffectiveLifecyclePolicyRequest,
  ): Effect.Effect<
    BatchGetEffectiveLifecyclePolicyResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  batchGetLifecyclePolicy(
    input: BatchGetLifecyclePolicyRequest,
  ): Effect.Effect<
    BatchGetLifecyclePolicyResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  batchGetVpcEndpoint(
    input: BatchGetVpcEndpointRequest,
  ): Effect.Effect<
    BatchGetVpcEndpointResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  createLifecyclePolicy(
    input: CreateLifecyclePolicyRequest,
  ): Effect.Effect<
    CreateLifecyclePolicyResponse,
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createSecurityPolicy(
    input: CreateSecurityPolicyRequest,
  ): Effect.Effect<
    CreateSecurityPolicyResponse,
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  getAccountSettings(
    input: GetAccountSettingsRequest,
  ): Effect.Effect<
    GetAccountSettingsResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  getPoliciesStats(
    input: GetPoliciesStatsRequest,
  ): Effect.Effect<
    GetPoliciesStatsResponse,
    InternalServerException | CommonAwsError
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
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateAccountSettings(
    input: UpdateAccountSettingsRequest,
  ): Effect.Effect<
    UpdateAccountSettingsResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  updateVpcEndpoint(
    input: UpdateVpcEndpointRequest,
  ): Effect.Effect<
    UpdateVpcEndpointResponse,
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
}

export type Opensearchserverless = OpenSearchServerless;

export interface AccessPolicyDetail {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  policy?: _opaque_Document;
  createdDate?: number;
  lastModifiedDate?: number;
}
export interface AccessPolicyStats {
  DataPolicyCount?: number;
}
export type AccessPolicySummaries = Array<AccessPolicySummary>;
export interface AccessPolicySummary {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  createdDate?: number;
  lastModifiedDate?: number;
}
export type AccessPolicyType = string;

export interface AccountSettingsDetail {
  capacityLimits?: CapacityLimits;
}
export type Arn = string;

export interface BatchGetCollectionRequest {
  ids?: Array<string>;
  names?: Array<string>;
}
export interface BatchGetCollectionResponse {
  collectionDetails?: Array<CollectionDetail>;
  collectionErrorDetails?: Array<CollectionErrorDetail>;
}
export interface BatchGetEffectiveLifecyclePolicyRequest {
  resourceIdentifiers: Array<LifecyclePolicyResourceIdentifier>;
}
export interface BatchGetEffectiveLifecyclePolicyResponse {
  effectiveLifecyclePolicyDetails?: Array<EffectiveLifecyclePolicyDetail>;
  effectiveLifecyclePolicyErrorDetails?: Array<EffectiveLifecyclePolicyErrorDetail>;
}
export interface BatchGetLifecyclePolicyRequest {
  identifiers: Array<LifecyclePolicyIdentifier>;
}
export interface BatchGetLifecyclePolicyResponse {
  lifecyclePolicyDetails?: Array<LifecyclePolicyDetail>;
  lifecyclePolicyErrorDetails?: Array<LifecyclePolicyErrorDetail>;
}
export interface BatchGetVpcEndpointRequest {
  ids: Array<string>;
}
export interface BatchGetVpcEndpointResponse {
  vpcEndpointDetails?: Array<VpcEndpointDetail>;
  vpcEndpointErrorDetails?: Array<VpcEndpointErrorDetail>;
}
export interface CapacityLimits {
  maxIndexingCapacityInOCU?: number;
  maxSearchCapacityInOCU?: number;
}
export type ClientToken = string;

export interface CollectionDetail {
  id?: string;
  name?: string;
  status?: string;
  type?: string;
  description?: string;
  arn?: string;
  kmsKeyArn?: string;
  standbyReplicas?: string;
  createdDate?: number;
  lastModifiedDate?: number;
  collectionEndpoint?: string;
  dashboardEndpoint?: string;
  failureCode?: string;
  failureMessage?: string;
}
export type CollectionDetails = Array<CollectionDetail>;
export interface CollectionErrorDetail {
  id?: string;
  name?: string;
  errorMessage?: string;
  errorCode?: string;
}
export type CollectionErrorDetails = Array<CollectionErrorDetail>;
export interface CollectionFilters {
  name?: string;
  status?: string;
}
export type CollectionId = string;

export type CollectionIds = Array<string>;
export type CollectionName = string;

export type CollectionNames = Array<string>;
export type CollectionStatus = string;

export type CollectionSummaries = Array<CollectionSummary>;
export interface CollectionSummary {
  id?: string;
  name?: string;
  status?: string;
  arn?: string;
}
export type CollectionType = string;

export type ConfigDescription = string;

export type ConfigName = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateAccessPolicyRequest {
  type: string;
  name: string;
  description?: string;
  policy: string;
  clientToken?: string;
}
export interface CreateAccessPolicyResponse {
  accessPolicyDetail?: AccessPolicyDetail;
}
export interface CreateCollectionDetail {
  id?: string;
  name?: string;
  status?: string;
  type?: string;
  description?: string;
  arn?: string;
  kmsKeyArn?: string;
  standbyReplicas?: string;
  createdDate?: number;
  lastModifiedDate?: number;
}
export interface CreateCollectionRequest {
  name: string;
  type?: string;
  description?: string;
  tags?: Array<Tag>;
  standbyReplicas?: string;
  clientToken?: string;
}
export interface CreateCollectionResponse {
  createCollectionDetail?: CreateCollectionDetail;
}
export interface CreateIamIdentityCenterConfigOptions {
  instanceArn: string;
  userAttribute?: string;
  groupAttribute?: string;
}
export interface CreateLifecyclePolicyRequest {
  type: string;
  name: string;
  description?: string;
  policy: string;
  clientToken?: string;
}
export interface CreateLifecyclePolicyResponse {
  lifecyclePolicyDetail?: LifecyclePolicyDetail;
}
export interface CreateSecurityConfigRequest {
  type: string;
  name: string;
  description?: string;
  samlOptions?: SamlConfigOptions;
  iamIdentityCenterOptions?: CreateIamIdentityCenterConfigOptions;
  clientToken?: string;
}
export interface CreateSecurityConfigResponse {
  securityConfigDetail?: SecurityConfigDetail;
}
export interface CreateSecurityPolicyRequest {
  type: string;
  name: string;
  description?: string;
  policy: string;
  clientToken?: string;
}
export interface CreateSecurityPolicyResponse {
  securityPolicyDetail?: SecurityPolicyDetail;
}
export interface CreateVpcEndpointDetail {
  id?: string;
  name?: string;
  status?: string;
}
export interface CreateVpcEndpointRequest {
  name: string;
  vpcId: string;
  subnetIds: Array<string>;
  securityGroupIds?: Array<string>;
  clientToken?: string;
}
export interface CreateVpcEndpointResponse {
  createVpcEndpointDetail?: CreateVpcEndpointDetail;
}
export interface DeleteAccessPolicyRequest {
  type: string;
  name: string;
  clientToken?: string;
}
export interface DeleteAccessPolicyResponse {}
export interface DeleteCollectionDetail {
  id?: string;
  name?: string;
  status?: string;
}
export interface DeleteCollectionRequest {
  id: string;
  clientToken?: string;
}
export interface DeleteCollectionResponse {
  deleteCollectionDetail?: DeleteCollectionDetail;
}
export interface DeleteLifecyclePolicyRequest {
  type: string;
  name: string;
  clientToken?: string;
}
export interface DeleteLifecyclePolicyResponse {}
export interface DeleteSecurityConfigRequest {
  id: string;
  clientToken?: string;
}
export interface DeleteSecurityConfigResponse {}
export interface DeleteSecurityPolicyRequest {
  type: string;
  name: string;
  clientToken?: string;
}
export interface DeleteSecurityPolicyResponse {}
export interface DeleteVpcEndpointDetail {
  id?: string;
  name?: string;
  status?: string;
}
export interface DeleteVpcEndpointRequest {
  id: string;
  clientToken?: string;
}
export interface DeleteVpcEndpointResponse {
  deleteVpcEndpointDetail?: DeleteVpcEndpointDetail;
}
export interface EffectiveLifecyclePolicyDetail {
  type?: string;
  resource?: string;
  policyName?: string;
  resourceType?: string;
  retentionPeriod?: string;
  noMinRetentionPeriod?: boolean;
}
export type EffectiveLifecyclePolicyDetails =
  Array<EffectiveLifecyclePolicyDetail>;
export interface EffectiveLifecyclePolicyErrorDetail {
  type?: string;
  resource?: string;
  errorMessage?: string;
  errorCode?: string;
}
export type EffectiveLifecyclePolicyErrorDetails =
  Array<EffectiveLifecyclePolicyErrorDetail>;
export interface GetAccessPolicyRequest {
  type: string;
  name: string;
}
export interface GetAccessPolicyResponse {
  accessPolicyDetail?: AccessPolicyDetail;
}
export interface GetAccountSettingsRequest {}
export interface GetAccountSettingsResponse {
  accountSettingsDetail?: AccountSettingsDetail;
}
export interface GetPoliciesStatsRequest {}
export interface GetPoliciesStatsResponse {
  AccessPolicyStats?: AccessPolicyStats;
  SecurityPolicyStats?: SecurityPolicyStats;
  SecurityConfigStats?: SecurityConfigStats;
  LifecyclePolicyStats?: LifecyclePolicyStats;
  TotalPolicyCount?: number;
}
export interface GetSecurityConfigRequest {
  id: string;
}
export interface GetSecurityConfigResponse {
  securityConfigDetail?: SecurityConfigDetail;
}
export interface GetSecurityPolicyRequest {
  type: string;
  name: string;
}
export interface GetSecurityPolicyResponse {
  securityPolicyDetail?: SecurityPolicyDetail;
}
export type IamIdentityCenterApplicationArn = string;

export interface IamIdentityCenterConfigOptions {
  instanceArn?: string;
  applicationArn?: string;
  applicationName?: string;
  applicationDescription?: string;
  userAttribute?: string;
  groupAttribute?: string;
}
export type IamIdentityCenterGroupAttribute = string;

export type IamIdentityCenterInstanceArn = string;

export type IamIdentityCenterUserAttribute = string;

export type IndexingCapacityValue = number;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export interface LifecyclePolicyDetail {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  policy?: _opaque_Document;
  createdDate?: number;
  lastModifiedDate?: number;
}
export type LifecyclePolicyDetails = Array<LifecyclePolicyDetail>;
export interface LifecyclePolicyErrorDetail {
  type?: string;
  name?: string;
  errorMessage?: string;
  errorCode?: string;
}
export type LifecyclePolicyErrorDetails = Array<LifecyclePolicyErrorDetail>;
export interface LifecyclePolicyIdentifier {
  type: string;
  name: string;
}
export type LifecyclePolicyIdentifiers = Array<LifecyclePolicyIdentifier>;
export interface LifecyclePolicyResourceIdentifier {
  type: string;
  resource: string;
}
export type LifecyclePolicyResourceIdentifiers =
  Array<LifecyclePolicyResourceIdentifier>;
export interface LifecyclePolicyStats {
  RetentionPolicyCount?: number;
}
export type LifecyclePolicySummaries = Array<LifecyclePolicySummary>;
export interface LifecyclePolicySummary {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  createdDate?: number;
  lastModifiedDate?: number;
}
export type LifecyclePolicyType = string;

export type LifecycleResource = string;

export type LifecycleResourceFilter = Array<string>;
export interface ListAccessPoliciesRequest {
  type: string;
  resource?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAccessPoliciesResponse {
  accessPolicySummaries?: Array<AccessPolicySummary>;
  nextToken?: string;
}
export interface ListCollectionsRequest {
  collectionFilters?: CollectionFilters;
  nextToken?: string;
  maxResults?: number;
}
export interface ListCollectionsResponse {
  collectionSummaries?: Array<CollectionSummary>;
  nextToken?: string;
}
export interface ListLifecyclePoliciesRequest {
  type: string;
  resources?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListLifecyclePoliciesResponse {
  lifecyclePolicySummaries?: Array<LifecyclePolicySummary>;
  nextToken?: string;
}
export interface ListSecurityConfigsRequest {
  type: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListSecurityConfigsResponse {
  securityConfigSummaries?: Array<SecurityConfigSummary>;
  nextToken?: string;
}
export interface ListSecurityPoliciesRequest {
  type: string;
  resource?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListSecurityPoliciesResponse {
  securityPolicySummaries?: Array<SecurityPolicySummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export interface ListVpcEndpointsRequest {
  vpcEndpointFilters?: VpcEndpointFilters;
  nextToken?: string;
  maxResults?: number;
}
export interface ListVpcEndpointsResponse {
  vpcEndpointSummaries?: Array<VpcEndpointSummary>;
  nextToken?: string;
}
export declare class OcuLimitExceededException extends Data.TaggedError(
  "OcuLimitExceededException",
)<{
  readonly message: string;
}> {}
export type openSearchServerlessEntityId = string;

export type PolicyDescription = string;

export type PolicyDocument = string;

export type PolicyName = string;

export type PolicyVersion = string;

export type Resource = string;

export type ResourceFilter = Array<string>;
export type ResourceName = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResourceType = string;

export interface SamlConfigOptions {
  metadata: string;
  userAttribute?: string;
  groupAttribute?: string;
  openSearchServerlessEntityId?: string;
  sessionTimeout?: number;
}
export type samlGroupAttribute = string;

export type samlMetadata = string;

export type samlUserAttribute = string;

export type SearchCapacityValue = number;

export interface SecurityConfigDetail {
  id?: string;
  type?: string;
  configVersion?: string;
  description?: string;
  samlOptions?: SamlConfigOptions;
  iamIdentityCenterOptions?: IamIdentityCenterConfigOptions;
  createdDate?: number;
  lastModifiedDate?: number;
}
export type SecurityConfigId = string;

export interface SecurityConfigStats {
  SamlConfigCount?: number;
}
export type SecurityConfigSummaries = Array<SecurityConfigSummary>;
export interface SecurityConfigSummary {
  id?: string;
  type?: string;
  configVersion?: string;
  description?: string;
  createdDate?: number;
  lastModifiedDate?: number;
}
export type SecurityConfigType = string;

export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export interface SecurityPolicyDetail {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  policy?: _opaque_Document;
  createdDate?: number;
  lastModifiedDate?: number;
}
export interface SecurityPolicyStats {
  EncryptionPolicyCount?: number;
  NetworkPolicyCount?: number;
}
export type SecurityPolicySummaries = Array<SecurityPolicySummary>;
export interface SecurityPolicySummary {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  createdDate?: number;
  lastModifiedDate?: number;
}
export type SecurityPolicyType = string;

export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly serviceCode: string;
  readonly quotaCode?: string;
}> {}
export type StandbyReplicas = string;

export type SubnetId = string;

export type SubnetIds = Array<string>;
export interface Tag {
  key: string;
  value: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type Tags = Array<Tag>;
export type TagValue = string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAccessPolicyRequest {
  type: string;
  name: string;
  policyVersion: string;
  description?: string;
  policy?: string;
  clientToken?: string;
}
export interface UpdateAccessPolicyResponse {
  accessPolicyDetail?: AccessPolicyDetail;
}
export interface UpdateAccountSettingsRequest {
  capacityLimits?: CapacityLimits;
}
export interface UpdateAccountSettingsResponse {
  accountSettingsDetail?: AccountSettingsDetail;
}
export interface UpdateCollectionDetail {
  id?: string;
  name?: string;
  status?: string;
  type?: string;
  description?: string;
  arn?: string;
  createdDate?: number;
  lastModifiedDate?: number;
}
export interface UpdateCollectionRequest {
  id: string;
  description?: string;
  clientToken?: string;
}
export interface UpdateCollectionResponse {
  updateCollectionDetail?: UpdateCollectionDetail;
}
export interface UpdateIamIdentityCenterConfigOptions {
  userAttribute?: string;
  groupAttribute?: string;
}
export interface UpdateLifecyclePolicyRequest {
  type: string;
  name: string;
  policyVersion: string;
  description?: string;
  policy?: string;
  clientToken?: string;
}
export interface UpdateLifecyclePolicyResponse {
  lifecyclePolicyDetail?: LifecyclePolicyDetail;
}
export interface UpdateSecurityConfigRequest {
  id: string;
  configVersion: string;
  description?: string;
  samlOptions?: SamlConfigOptions;
  iamIdentityCenterOptionsUpdates?: UpdateIamIdentityCenterConfigOptions;
  clientToken?: string;
}
export interface UpdateSecurityConfigResponse {
  securityConfigDetail?: SecurityConfigDetail;
}
export interface UpdateSecurityPolicyRequest {
  type: string;
  name: string;
  policyVersion: string;
  description?: string;
  policy?: string;
  clientToken?: string;
}
export interface UpdateSecurityPolicyResponse {
  securityPolicyDetail?: SecurityPolicyDetail;
}
export interface UpdateVpcEndpointDetail {
  id?: string;
  name?: string;
  status?: string;
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
  lastModifiedDate?: number;
}
export interface UpdateVpcEndpointRequest {
  id: string;
  addSubnetIds?: Array<string>;
  removeSubnetIds?: Array<string>;
  addSecurityGroupIds?: Array<string>;
  removeSecurityGroupIds?: Array<string>;
  clientToken?: string;
}
export interface UpdateVpcEndpointResponse {
  UpdateVpcEndpointDetail?: UpdateVpcEndpointDetail;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export interface VpcEndpointDetail {
  id?: string;
  name?: string;
  vpcId?: string;
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
  status?: string;
  createdDate?: number;
  failureCode?: string;
  failureMessage?: string;
}
export type VpcEndpointDetails = Array<VpcEndpointDetail>;
export interface VpcEndpointErrorDetail {
  id?: string;
  errorMessage?: string;
  errorCode?: string;
}
export type VpcEndpointErrorDetails = Array<VpcEndpointErrorDetail>;
export interface VpcEndpointFilters {
  status?: string;
}
export type VpcEndpointId = string;

export type VpcEndpointIds = Array<string>;
export type VpcEndpointName = string;

export type VpcEndpointStatus = string;

export type VpcEndpointSummaries = Array<VpcEndpointSummary>;
export interface VpcEndpointSummary {
  id?: string;
  name?: string;
  status?: string;
}
export type VpcId = string;

export declare namespace BatchGetCollection {
  export type Input = BatchGetCollectionRequest;
  export type Output = BatchGetCollectionResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetEffectiveLifecyclePolicy {
  export type Input = BatchGetEffectiveLifecyclePolicyRequest;
  export type Output = BatchGetEffectiveLifecyclePolicyResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetLifecyclePolicy {
  export type Input = BatchGetLifecyclePolicyRequest;
  export type Output = BatchGetLifecyclePolicyResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetVpcEndpoint {
  export type Input = BatchGetVpcEndpointRequest;
  export type Output = BatchGetVpcEndpointResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLifecyclePolicy {
  export type Input = CreateLifecyclePolicyRequest;
  export type Output = CreateLifecyclePolicyResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSecurityPolicy {
  export type Input = CreateSecurityPolicyRequest;
  export type Output = CreateSecurityPolicyResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAccountSettings {
  export type Input = GetAccountSettingsRequest;
  export type Output = GetAccountSettingsResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPoliciesStats {
  export type Input = GetPoliciesStatsRequest;
  export type Output = GetPoliciesStatsResponse;
  export type Error = InternalServerException | CommonAwsError;
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

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAccountSettings {
  export type Input = UpdateAccountSettingsRequest;
  export type Output = UpdateAccountSettingsResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateVpcEndpoint {
  export type Input = UpdateVpcEndpointRequest;
  export type Output = UpdateVpcEndpointResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}
