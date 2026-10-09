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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "OpenSearchServerless",
  serviceShapeName: "OpenSearchServerless",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "aoss" });
const ver = /*@__PURE__*/ T.ServiceVersion("2021-11-01");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
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
              `https://aoss-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://aoss-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://aoss.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://aoss.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

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
export class OcuLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<OcuLimitExceededException>()(
    "OcuLimitExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
      serviceCode: S.String,
      quotaCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type CollectionId = string;
export type CollectionIds = string[];
export type CollectionName = string;
export type CollectionNames = string[];
export interface BatchGetCollectionRequest {
  ids?: string[];
  names?: string[];
}
export type CollectionStatus = string;
export type CollectionType = string;
export type StandbyReplicas = string;
export type DeletionProtection = string;
export type ServerlessVectorAccelerationStatus = string;
export interface VectorOptions {
  ServerlessVectorAcceleration: string;
}
export interface FipsEndpoints {
  collectionEndpoint?: string;
  dashboardEndpoint?: string;
}
export type CollectionGroupName = string;
export interface CollectionDetail {
  id?: string;
  name?: string;
  status?: string;
  type?: string;
  description?: string;
  arn?: string;
  kmsKeyArn?: string;
  standbyReplicas?: string;
  deletionProtection?: string;
  vectorOptions?: VectorOptions;
  createdDate?: number;
  lastModifiedDate?: number;
  collectionEndpoint?: string;
  dashboardEndpoint?: string;
  fipsEndpoints?: FipsEndpoints;
  failureCode?: string;
  failureMessage?: string;
  collectionGroupName?: string;
}
export type CollectionDetails = CollectionDetail[];
export interface CollectionErrorDetail {
  id?: string;
  name?: string;
  errorMessage?: string;
  errorCode?: string;
}
export type CollectionErrorDetails = CollectionErrorDetail[];
export interface BatchGetCollectionResponse {
  collectionDetails?: CollectionDetail[];
  collectionErrorDetails?: CollectionErrorDetail[];
}
export type CollectionGroupId = string;
export type CollectionGroupIds = string[];
export type CollectionGroupNames = string[];
export interface BatchGetCollectionGroupRequest {
  ids?: string[];
  names?: string[];
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
export type Tags = Tag[];
export type CollectionGroupMaxIndexingCapacityValue = number;
export type CollectionGroupMaxSearchCapacityValue = number;
export type CollectionGroupMinIndexingCapacityValue = number;
export type CollectionGroupMinSearchCapacityValue = number;
export interface CollectionGroupCapacityLimits {
  maxIndexingCapacityInOCU?: number;
  maxSearchCapacityInOCU?: number;
  minIndexingCapacityInOCU?: number;
  minSearchCapacityInOCU?: number;
}
export type AutoscalingStatus = string;
export interface CapacityDetails {
  capacityInOcu?: number;
  autoscalingStatus?: string;
}
export interface CurrentCapacity {
  search?: CapacityDetails;
  indexing?: CapacityDetails;
}
export type ServerlessGeneration = string;
export interface CollectionGroupDetail {
  id?: string;
  arn?: string;
  name?: string;
  standbyReplicas?: string;
  description?: string;
  tags?: Tag[];
  createdDate?: number;
  capacityLimits?: CollectionGroupCapacityLimits;
  currentCapacity?: CurrentCapacity;
  numberOfCollections?: number;
  generation?: string;
}
export type CollectionGroupDetails = CollectionGroupDetail[];
export interface CollectionGroupErrorDetail {
  id?: string;
  name?: string;
  errorMessage?: string;
  errorCode?: string;
}
export type CollectionGroupErrorDetails = CollectionGroupErrorDetail[];
export interface BatchGetCollectionGroupResponse {
  collectionGroupDetails?: CollectionGroupDetail[];
  collectionGroupErrorDetails?: CollectionGroupErrorDetail[];
}
export type LifecyclePolicyType = string;
export type ResourceName = string;
export interface LifecyclePolicyResourceIdentifier {
  type: string;
  resource: string;
}
export type LifecyclePolicyResourceIdentifiers = LifecyclePolicyResourceIdentifier[];
export interface BatchGetEffectiveLifecyclePolicyRequest {
  resourceIdentifiers: LifecyclePolicyResourceIdentifier[];
}
export type Resource = string;
export type PolicyName = string;
export type ResourceType = string;
export interface EffectiveLifecyclePolicyDetail {
  type?: string;
  resource?: string;
  policyName?: string;
  resourceType?: string;
  retentionPeriod?: string;
  noMinRetentionPeriod?: boolean;
}
export type EffectiveLifecyclePolicyDetails = EffectiveLifecyclePolicyDetail[];
export interface EffectiveLifecyclePolicyErrorDetail {
  type?: string;
  resource?: string;
  errorMessage?: string;
  errorCode?: string;
}
export type EffectiveLifecyclePolicyErrorDetails = EffectiveLifecyclePolicyErrorDetail[];
export interface BatchGetEffectiveLifecyclePolicyResponse {
  effectiveLifecyclePolicyDetails?: EffectiveLifecyclePolicyDetail[];
  effectiveLifecyclePolicyErrorDetails?: EffectiveLifecyclePolicyErrorDetail[];
}
export interface LifecyclePolicyIdentifier {
  type: string;
  name: string;
}
export type LifecyclePolicyIdentifiers = LifecyclePolicyIdentifier[];
export interface BatchGetLifecyclePolicyRequest {
  identifiers: LifecyclePolicyIdentifier[];
}
export type PolicyVersion = string;
export type PolicyDescription = string;
export interface LifecyclePolicyDetail {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  policy?: any;
  createdDate?: number;
  lastModifiedDate?: number;
}
export type LifecyclePolicyDetails = LifecyclePolicyDetail[];
export interface LifecyclePolicyErrorDetail {
  type?: string;
  name?: string;
  errorMessage?: string;
  errorCode?: string;
}
export type LifecyclePolicyErrorDetails = LifecyclePolicyErrorDetail[];
export interface BatchGetLifecyclePolicyResponse {
  lifecyclePolicyDetails?: LifecyclePolicyDetail[];
  lifecyclePolicyErrorDetails?: LifecyclePolicyErrorDetail[];
}
export type VpcEndpointId = string;
export type VpcEndpointIds = string[];
export interface BatchGetVpcEndpointRequest {
  ids: string[];
}
export type VpcEndpointName = string;
export type VpcId = string;
export type SubnetId = string;
export type SubnetIds = string[];
export type SecurityGroupId = string;
export type SecurityGroupIds = string[];
export type VpcEndpointStatus = string;
export interface VpcEndpointDetail {
  id?: string;
  name?: string;
  vpcId?: string;
  subnetIds?: string[];
  securityGroupIds?: string[];
  status?: string;
  createdDate?: number;
  failureCode?: string;
  failureMessage?: string;
}
export type VpcEndpointDetails = VpcEndpointDetail[];
export interface VpcEndpointErrorDetail {
  id?: string;
  errorMessage?: string;
  errorCode?: string;
}
export type VpcEndpointErrorDetails = VpcEndpointErrorDetail[];
export interface BatchGetVpcEndpointResponse {
  vpcEndpointDetails?: VpcEndpointDetail[];
  vpcEndpointErrorDetails?: VpcEndpointErrorDetail[];
}
export type AccessPolicyType = string;
export type PolicyDocument = string;
export type ClientToken = string;
export interface CreateAccessPolicyRequest {
  type: string;
  name: string;
  description?: string;
  policy: string;
  clientToken?: string;
}
export interface AccessPolicyDetail {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  policy?: any;
  createdDate?: number;
  lastModifiedDate?: number;
}
export interface CreateAccessPolicyResponse {
  accessPolicyDetail?: AccessPolicyDetail;
}
export interface EncryptionConfig {
  aWSOwnedKey?: boolean;
  kmsKeyArn?: string;
}
export interface CreateCollectionRequest {
  name: string;
  type?: string;
  description?: string;
  tags?: Tag[];
  standbyReplicas?: string;
  vectorOptions?: VectorOptions;
  collectionGroupName?: string;
  encryptionConfig?: EncryptionConfig;
  deletionProtection?: string;
  clientToken?: string;
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
  deletionProtection?: string;
  vectorOptions?: VectorOptions;
  createdDate?: number;
  lastModifiedDate?: number;
  collectionGroupName?: string;
}
export interface CreateCollectionResponse {
  createCollectionDetail?: CreateCollectionDetail;
}
export interface CreateCollectionGroupRequest {
  name: string;
  standbyReplicas: string;
  description?: string;
  tags?: Tag[];
  capacityLimits?: CollectionGroupCapacityLimits;
  generation?: string;
  clientToken?: string;
}
export interface CreateCollectionGroupDetail {
  id?: string;
  arn?: string;
  name?: string;
  standbyReplicas?: string;
  description?: string;
  tags?: Tag[];
  createdDate?: number;
  capacityLimits?: CollectionGroupCapacityLimits;
  generation?: string;
}
export interface CreateCollectionGroupResponse {
  createCollectionGroupDetail?: CreateCollectionGroupDetail;
}
export type IndexName = string;
export type IndexSchema = unknown;
export interface CreateIndexRequest {
  id: string;
  indexName: string;
  indexSchema?: any;
}
export interface CreateIndexResponse {}
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
export type SecurityConfigType = string;
export type ConfigName = string;
export type ConfigDescription = string;
export type SamlMetadata = string;
export type SamlUserAttribute = string;
export type SamlGroupAttribute = string;
export type OpenSearchServerlessEntityId = string;
export interface SamlConfigOptions {
  metadata: string;
  userAttribute?: string;
  groupAttribute?: string;
  openSearchServerlessEntityId?: string;
  sessionTimeout?: number;
}
export type IamIdentityCenterInstanceArn = string;
export type IamIdentityCenterUserAttribute = string;
export type IamIdentityCenterGroupAttribute = string;
export interface CreateIamIdentityCenterConfigOptions {
  instanceArn: string;
  userAttribute?: string;
  groupAttribute?: string;
}
export type IamFederationGroupAttribute = string;
export type IamFederationUserAttribute = string;
export interface IamFederationConfigOptions {
  groupAttribute?: string;
  userAttribute?: string;
}
export interface CreateSecurityConfigRequest {
  type: string;
  name: string;
  description?: string;
  samlOptions?: SamlConfigOptions;
  iamIdentityCenterOptions?: CreateIamIdentityCenterConfigOptions;
  iamFederationOptions?: IamFederationConfigOptions;
  clientToken?: string;
}
export type SecurityConfigId = string;
export type IamIdentityCenterApplicationArn = string;
export interface IamIdentityCenterConfigOptions {
  instanceArn?: string;
  applicationArn?: string;
  applicationName?: string;
  applicationDescription?: string;
  userAttribute?: string;
  groupAttribute?: string;
}
export interface SecurityConfigDetail {
  id?: string;
  type?: string;
  configVersion?: string;
  description?: string;
  samlOptions?: SamlConfigOptions;
  iamIdentityCenterOptions?: IamIdentityCenterConfigOptions;
  iamFederationOptions?: IamFederationConfigOptions;
  createdDate?: number;
  lastModifiedDate?: number;
}
export interface CreateSecurityConfigResponse {
  securityConfigDetail?: SecurityConfigDetail;
}
export type SecurityPolicyType = string;
export interface CreateSecurityPolicyRequest {
  type: string;
  name: string;
  description?: string;
  policy: string;
  clientToken?: string;
}
export interface SecurityPolicyDetail {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  policy?: any;
  createdDate?: number;
  lastModifiedDate?: number;
}
export interface CreateSecurityPolicyResponse {
  securityPolicyDetail?: SecurityPolicyDetail;
}
export interface CreateVpcEndpointRequest {
  name: string;
  vpcId: string;
  subnetIds: string[];
  securityGroupIds?: string[];
  clientToken?: string;
}
export interface CreateVpcEndpointDetail {
  id?: string;
  name?: string;
  status?: string;
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
export interface DeleteCollectionRequest {
  id: string;
  clientToken?: string;
}
export interface DeleteCollectionDetail {
  id?: string;
  name?: string;
  status?: string;
  deletionProtection?: string;
}
export interface DeleteCollectionResponse {
  deleteCollectionDetail?: DeleteCollectionDetail;
}
export interface DeleteCollectionGroupRequest {
  id: string;
  clientToken?: string;
}
export interface DeleteCollectionGroupResponse {}
export interface DeleteIndexRequest {
  id: string;
  indexName: string;
}
export interface DeleteIndexResponse {}
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
export interface DeleteVpcEndpointRequest {
  id: string;
  clientToken?: string;
}
export interface DeleteVpcEndpointDetail {
  id?: string;
  name?: string;
  status?: string;
}
export interface DeleteVpcEndpointResponse {
  deleteVpcEndpointDetail?: DeleteVpcEndpointDetail;
}
export interface GetAccessPolicyRequest {
  type: string;
  name: string;
}
export interface GetAccessPolicyResponse {
  accessPolicyDetail?: AccessPolicyDetail;
}
export interface GetAccountSettingsRequest {}
export type IndexingCapacityValue = number;
export type SearchCapacityValue = number;
export interface CapacityLimits {
  maxIndexingCapacityInOCU?: number;
  maxSearchCapacityInOCU?: number;
}
export interface AccountSettingsDetail {
  capacityLimits?: CapacityLimits;
}
export interface GetAccountSettingsResponse {
  accountSettingsDetail?: AccountSettingsDetail;
}
export interface GetIndexRequest {
  id: string;
  indexName: string;
}
export interface GetIndexResponse {
  indexSchema?: any;
}
export interface GetPoliciesStatsRequest {}
export interface AccessPolicyStats {
  DataPolicyCount?: number;
}
export interface SecurityPolicyStats {
  EncryptionPolicyCount?: number;
  NetworkPolicyCount?: number;
}
export interface SecurityConfigStats {
  SamlConfigCount?: number;
}
export interface LifecyclePolicyStats {
  RetentionPolicyCount?: number;
}
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
export type ResourceFilter = string[];
export interface ListAccessPoliciesRequest {
  type: string;
  resource?: string[];
  nextToken?: string;
  maxResults?: number;
}
export interface AccessPolicySummary {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  createdDate?: number;
  lastModifiedDate?: number;
}
export type AccessPolicySummaries = AccessPolicySummary[];
export interface ListAccessPoliciesResponse {
  accessPolicySummaries?: AccessPolicySummary[];
  nextToken?: string;
}
export interface ListCollectionGroupsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface CollectionGroupSummary {
  id?: string;
  arn?: string;
  name?: string;
  numberOfCollections?: number;
  createdDate?: number;
  capacityLimits?: CollectionGroupCapacityLimits;
  generation?: string;
}
export type CollectionGroupSummaries = CollectionGroupSummary[];
export interface ListCollectionGroupsResponse {
  collectionGroupSummaries?: CollectionGroupSummary[];
  nextToken?: string;
}
export interface CollectionFilters {
  name?: string;
  status?: string;
  collectionGroupName?: string;
}
export interface ListCollectionsRequest {
  collectionFilters?: CollectionFilters;
  nextToken?: string;
  maxResults?: number;
}
export interface CollectionSummary {
  id?: string;
  name?: string;
  status?: string;
  arn?: string;
  kmsKeyArn?: string;
  collectionGroupName?: string;
}
export type CollectionSummaries = CollectionSummary[];
export interface ListCollectionsResponse {
  collectionSummaries?: CollectionSummary[];
  nextToken?: string;
}
export type LifecycleResource = string;
export type LifecycleResourceFilter = string[];
export interface ListLifecyclePoliciesRequest {
  type: string;
  resources?: string[];
  nextToken?: string;
  maxResults?: number;
}
export interface LifecyclePolicySummary {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  createdDate?: number;
  lastModifiedDate?: number;
}
export type LifecyclePolicySummaries = LifecyclePolicySummary[];
export interface ListLifecyclePoliciesResponse {
  lifecyclePolicySummaries?: LifecyclePolicySummary[];
  nextToken?: string;
}
export interface ListSecurityConfigsRequest {
  type: string;
  nextToken?: string;
  maxResults?: number;
}
export interface SecurityConfigSummary {
  id?: string;
  type?: string;
  configVersion?: string;
  description?: string;
  createdDate?: number;
  lastModifiedDate?: number;
}
export type SecurityConfigSummaries = SecurityConfigSummary[];
export interface ListSecurityConfigsResponse {
  securityConfigSummaries?: SecurityConfigSummary[];
  nextToken?: string;
}
export interface ListSecurityPoliciesRequest {
  type: string;
  resource?: string[];
  nextToken?: string;
  maxResults?: number;
}
export interface SecurityPolicySummary {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  createdDate?: number;
  lastModifiedDate?: number;
}
export type SecurityPolicySummaries = SecurityPolicySummary[];
export interface ListSecurityPoliciesResponse {
  securityPolicySummaries?: SecurityPolicySummary[];
  nextToken?: string;
}
export type Arn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Tag[];
}
export interface VpcEndpointFilters {
  status?: string;
}
export interface ListVpcEndpointsRequest {
  vpcEndpointFilters?: VpcEndpointFilters;
  nextToken?: string;
  maxResults?: number;
}
export interface VpcEndpointSummary {
  id?: string;
  name?: string;
  status?: string;
}
export type VpcEndpointSummaries = VpcEndpointSummary[];
export interface ListVpcEndpointsResponse {
  vpcEndpointSummaries?: VpcEndpointSummary[];
  nextToken?: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeys = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
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
export interface UpdateCollectionRequest {
  id: string;
  description?: string;
  vectorOptions?: VectorOptions;
  deletionProtection?: string;
  clientToken?: string;
}
export interface UpdateCollectionDetail {
  id?: string;
  name?: string;
  status?: string;
  type?: string;
  description?: string;
  vectorOptions?: VectorOptions;
  arn?: string;
  createdDate?: number;
  lastModifiedDate?: number;
  deletionProtection?: string;
}
export interface UpdateCollectionResponse {
  updateCollectionDetail?: UpdateCollectionDetail;
}
export interface UpdateCollectionGroupRequest {
  id: string;
  description?: string;
  capacityLimits?: CollectionGroupCapacityLimits;
  clientToken?: string;
}
export interface UpdateCollectionGroupDetail {
  id?: string;
  arn?: string;
  name?: string;
  description?: string;
  capacityLimits?: CollectionGroupCapacityLimits;
  createdDate?: number;
  lastModifiedDate?: number;
  generation?: string;
}
export interface UpdateCollectionGroupResponse {
  updateCollectionGroupDetail?: UpdateCollectionGroupDetail;
}
export interface UpdateIndexRequest {
  id: string;
  indexName: string;
  indexSchema?: any;
}
export interface UpdateIndexResponse {}
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
export interface UpdateIamIdentityCenterConfigOptions {
  userAttribute?: string;
  groupAttribute?: string;
}
export interface UpdateSecurityConfigRequest {
  id: string;
  configVersion: string;
  description?: string;
  samlOptions?: SamlConfigOptions;
  iamIdentityCenterOptionsUpdates?: UpdateIamIdentityCenterConfigOptions;
  iamFederationOptions?: IamFederationConfigOptions;
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
export interface UpdateVpcEndpointRequest {
  id: string;
  addSubnetIds?: string[];
  removeSubnetIds?: string[];
  addSecurityGroupIds?: string[];
  removeSecurityGroupIds?: string[];
  clientToken?: string;
}
export interface UpdateVpcEndpointDetail {
  id?: string;
  name?: string;
  status?: string;
  subnetIds?: string[];
  securityGroupIds?: string[];
  lastModifiedDate?: number;
}
export interface UpdateVpcEndpointResponse {
  UpdateVpcEndpointDetail?: UpdateVpcEndpointDetail;
}
export type BatchGetCollectionError = InternalServerException | ValidationException | CommonErrors;
/**
 * Returns attributes for one or more collections, including the collection endpoint, the OpenSearch Dashboards endpoint, and FIPS-compliant endpoints. For more information, see Creating and managing Amazon OpenSearch Serverless collections.
 */
export const batchGetCollection: API.OperationMethod<
  BatchGetCollectionRequest,
  BatchGetCollectionResponse,
  BatchGetCollectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1) as any as S.Schema<BatchGetCollectionRequest>,
  output: __S(8) as any as S.Schema<BatchGetCollectionResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetCollection",
}));

export type BatchGetCollectionGroupError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns attributes for one or more collection groups, including capacity limits and the number of collections in each group. For more information, see Creating and managing Amazon OpenSearch Serverless collections.
 */
export const batchGetCollectionGroup: API.OperationMethod<
  BatchGetCollectionGroupRequest,
  BatchGetCollectionGroupResponse,
  BatchGetCollectionGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<BatchGetCollectionGroupRequest>,
  output: __S(19) as any as S.Schema<BatchGetCollectionGroupResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetCollectionGroup",
}));

export type BatchGetEffectiveLifecyclePolicyError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of successful and failed retrievals for the OpenSearch Serverless indexes. For more information, see Viewing data lifecycle policies.
 */
export const batchGetEffectiveLifecyclePolicy: API.OperationMethod<
  BatchGetEffectiveLifecyclePolicyRequest,
  BatchGetEffectiveLifecyclePolicyResponse,
  BatchGetEffectiveLifecyclePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22) as any as S.Schema<BatchGetEffectiveLifecyclePolicyRequest>,
  output: __S(27) as any as S.Schema<BatchGetEffectiveLifecyclePolicyResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetEffectiveLifecyclePolicy",
}));

export type BatchGetLifecyclePolicyError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns one or more configured OpenSearch Serverless lifecycle policies. For more information, see Viewing data lifecycle policies.
 */
export const batchGetLifecyclePolicy: API.OperationMethod<
  BatchGetLifecyclePolicyRequest,
  BatchGetLifecyclePolicyResponse,
  BatchGetLifecyclePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30) as any as S.Schema<BatchGetLifecyclePolicyRequest>,
  output: __S(35) as any as S.Schema<BatchGetLifecyclePolicyResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetLifecyclePolicy",
}));

export type BatchGetVpcEndpointError = InternalServerException | ValidationException | CommonErrors;
/**
 * Returns attributes for one or more VPC endpoints associated with the current account. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.
 */
export const batchGetVpcEndpoint: API.OperationMethod<
  BatchGetVpcEndpointRequest,
  BatchGetVpcEndpointResponse,
  BatchGetVpcEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36) as any as S.Schema<BatchGetVpcEndpointRequest>,
  output: __S(41) as any as S.Schema<BatchGetVpcEndpointResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetVpcEndpoint",
}));

export type CreateAccessPolicyError =
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see Data access control for Amazon OpenSearch Serverless.
 */
export const createAccessPolicy: API.OperationMethod<
  CreateAccessPolicyRequest,
  CreateAccessPolicyResponse,
  CreateAccessPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42) as any as S.Schema<CreateAccessPolicyRequest>,
  output: __S(43) as any as S.Schema<CreateAccessPolicyResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAccessPolicy",
}));

export type CreateCollectionError =
  | ConflictException
  | InternalServerException
  | OcuLimitExceededException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new OpenSearch Serverless collection. For more information, see Creating and managing Amazon OpenSearch Serverless collections.
 */
export const createCollection: API.OperationMethod<
  CreateCollectionRequest,
  CreateCollectionResponse,
  CreateCollectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45) as any as S.Schema<CreateCollectionRequest>,
  output: __S(47) as any as S.Schema<CreateCollectionResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    OcuLimitExceededException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCollection",
}));

export type CreateCollectionGroupError =
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a collection group within OpenSearch Serverless. Collection groups let you manage OpenSearch Compute Units (OCUs) at a group level, with multiple collections sharing the group's capacity limits.
 *
 * For more information, see Managing collection groups.
 */
export const createCollectionGroup: API.OperationMethod<
  CreateCollectionGroupRequest,
  CreateCollectionGroupResponse,
  CreateCollectionGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48) as any as S.Schema<CreateCollectionGroupRequest>,
  output: __S(50) as any as S.Schema<CreateCollectionGroupResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCollectionGroup",
}));

export type CreateIndexError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates an index within an OpenSearch Serverless collection. Unlike other OpenSearch indexes, indexes created by this API are automatically configured to conduct automatic semantic enrichment ingestion and search. For more information, see About automatic semantic enrichment in the *OpenSearch User Guide*.
 */
export const createIndex: API.OperationMethod<
  CreateIndexRequest,
  CreateIndexResponse,
  CreateIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51) as any as S.Schema<CreateIndexRequest>,
  output: __S(52) as any as S.Schema<CreateIndexResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIndex",
}));

export type CreateLifecyclePolicyError =
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a lifecyle policy to be applied to OpenSearch Serverless indexes. Lifecycle policies define the number of days or hours to retain the data on an OpenSearch Serverless index. For more information, see Creating data lifecycle policies.
 */
export const createLifecyclePolicy: API.OperationMethod<
  CreateLifecyclePolicyRequest,
  CreateLifecyclePolicyResponse,
  CreateLifecyclePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53) as any as S.Schema<CreateLifecyclePolicyRequest>,
  output: __S(54) as any as S.Schema<CreateLifecyclePolicyResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLifecyclePolicy",
}));

export type CreateSecurityConfigError =
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Specifies a security configuration for OpenSearch Serverless. For more information, see SAML authentication for Amazon OpenSearch Serverless.
 */
export const createSecurityConfig: API.OperationMethod<
  CreateSecurityConfigRequest,
  CreateSecurityConfigResponse,
  CreateSecurityConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58) as any as S.Schema<CreateSecurityConfigRequest>,
  output: __S(61) as any as S.Schema<CreateSecurityConfigResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSecurityConfig",
}));

export type CreateSecurityPolicyError =
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a security policy to be used by one or more OpenSearch Serverless collections. Security policies provide access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. They also allow you to secure a collection with a KMS encryption key. For more information, see Network access for Amazon OpenSearch Serverless and Encryption at rest for Amazon OpenSearch Serverless.
 */
export const createSecurityPolicy: API.OperationMethod<
  CreateSecurityPolicyRequest,
  CreateSecurityPolicyResponse,
  CreateSecurityPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62) as any as S.Schema<CreateSecurityPolicyRequest>,
  output: __S(63) as any as S.Schema<CreateSecurityPolicyResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSecurityPolicy",
}));

export type CreateVpcEndpointError =
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.
 */
export const createVpcEndpoint: API.OperationMethod<
  CreateVpcEndpointRequest,
  CreateVpcEndpointResponse,
  CreateVpcEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64) as any as S.Schema<CreateVpcEndpointRequest>,
  output: __S(66) as any as S.Schema<CreateVpcEndpointResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVpcEndpoint",
}));

export type DeleteAccessPolicyError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an OpenSearch Serverless access policy. For more information, see Data access control for Amazon OpenSearch Serverless.
 */
export const deleteAccessPolicy: API.OperationMethod<
  DeleteAccessPolicyRequest,
  DeleteAccessPolicyResponse,
  DeleteAccessPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67) as any as S.Schema<DeleteAccessPolicyRequest>,
  output: __S(52) as any as S.Schema<DeleteAccessPolicyResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccessPolicy",
}));

export type DeleteCollectionError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an OpenSearch Serverless collection. For more information, see Creating and managing Amazon OpenSearch Serverless collections.
 */
export const deleteCollection: API.OperationMethod<
  DeleteCollectionRequest,
  DeleteCollectionResponse,
  DeleteCollectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68) as any as S.Schema<DeleteCollectionRequest>,
  output: __S(70) as any as S.Schema<DeleteCollectionResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCollection",
}));

export type DeleteCollectionGroupError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a collection group. You can only delete empty collection groups that contain no collections. For more information, see Creating and managing Amazon OpenSearch Serverless collections.
 */
export const deleteCollectionGroup: API.OperationMethod<
  DeleteCollectionGroupRequest,
  DeleteCollectionGroupResponse,
  DeleteCollectionGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71) as any as S.Schema<DeleteCollectionGroupRequest>,
  output: __S(52) as any as S.Schema<DeleteCollectionGroupResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCollectionGroup",
}));

export type DeleteIndexError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an index from an OpenSearch Serverless collection. Be aware that the index might be configured to conduct automatic semantic enrichment ingestion and search. For more information, see About automatic semantic enrichment.
 */
export const deleteIndex: API.OperationMethod<
  DeleteIndexRequest,
  DeleteIndexResponse,
  DeleteIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72) as any as S.Schema<DeleteIndexRequest>,
  output: __S(52) as any as S.Schema<DeleteIndexResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIndex",
}));

export type DeleteLifecyclePolicyError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an OpenSearch Serverless lifecycle policy. For more information, see Deleting data lifecycle policies.
 */
export const deleteLifecyclePolicy: API.OperationMethod<
  DeleteLifecyclePolicyRequest,
  DeleteLifecyclePolicyResponse,
  DeleteLifecyclePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(73) as any as S.Schema<DeleteLifecyclePolicyRequest>,
  output: __S(52) as any as S.Schema<DeleteLifecyclePolicyResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLifecyclePolicy",
}));

export type DeleteSecurityConfigError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a security configuration for OpenSearch Serverless. For more information, see SAML authentication for Amazon OpenSearch Serverless.
 */
export const deleteSecurityConfig: API.OperationMethod<
  DeleteSecurityConfigRequest,
  DeleteSecurityConfigResponse,
  DeleteSecurityConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74) as any as S.Schema<DeleteSecurityConfigRequest>,
  output: __S(52) as any as S.Schema<DeleteSecurityConfigResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSecurityConfig",
}));

export type DeleteSecurityPolicyError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an OpenSearch Serverless security policy.
 */
export const deleteSecurityPolicy: API.OperationMethod<
  DeleteSecurityPolicyRequest,
  DeleteSecurityPolicyResponse,
  DeleteSecurityPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75) as any as S.Schema<DeleteSecurityPolicyRequest>,
  output: __S(52) as any as S.Schema<DeleteSecurityPolicyResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSecurityPolicy",
}));

export type DeleteVpcEndpointError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.
 */
export const deleteVpcEndpoint: API.OperationMethod<
  DeleteVpcEndpointRequest,
  DeleteVpcEndpointResponse,
  DeleteVpcEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76) as any as S.Schema<DeleteVpcEndpointRequest>,
  output: __S(77) as any as S.Schema<DeleteVpcEndpointResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVpcEndpoint",
}));

export type GetAccessPolicyError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns an OpenSearch Serverless access policy. For more information, see Data access control for Amazon OpenSearch Serverless.
 */
export const getAccessPolicy: API.OperationMethod<
  GetAccessPolicyRequest,
  GetAccessPolicyResponse,
  GetAccessPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78) as any as S.Schema<GetAccessPolicyRequest>,
  output: __S(79) as any as S.Schema<GetAccessPolicyResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessPolicy",
}));

export type GetAccountSettingsError = InternalServerException | ValidationException | CommonErrors;
/**
 * Returns account-level settings related to OpenSearch Serverless.
 */
export const getAccountSettings: API.OperationMethod<
  GetAccountSettingsRequest,
  GetAccountSettingsResponse,
  GetAccountSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80) as any as S.Schema<GetAccountSettingsRequest>,
  output: __S(83) as any as S.Schema<GetAccountSettingsResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccountSettings",
}));

export type GetIndexError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an index in an OpenSearch Serverless collection, including its schema definition. The index might be configured to conduct automatic semantic enrichment ingestion and search. For more information, see About automatic semantic enrichment.
 */
export const getIndex: API.OperationMethod<
  GetIndexRequest,
  GetIndexResponse,
  GetIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(84) as any as S.Schema<GetIndexRequest>,
  output: __S(85) as any as S.Schema<GetIndexResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIndex",
}));

export type GetPoliciesStatsError = InternalServerException | CommonErrors;
/**
 * Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies.
 */
export const getPoliciesStats: API.OperationMethod<
  GetPoliciesStatsRequest,
  GetPoliciesStatsResponse,
  GetPoliciesStatsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86) as any as S.Schema<GetPoliciesStatsRequest>,
  output: __S(91) as any as S.Schema<GetPoliciesStatsResponse>,
  errors: [InternalServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPoliciesStats",
}));

export type GetSecurityConfigError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about an OpenSearch Serverless security configuration. For more information, see SAML authentication for Amazon OpenSearch Serverless.
 */
export const getSecurityConfig: API.OperationMethod<
  GetSecurityConfigRequest,
  GetSecurityConfigResponse,
  GetSecurityConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(92) as any as S.Schema<GetSecurityConfigRequest>,
  output: __S(61) as any as S.Schema<GetSecurityConfigResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSecurityConfig",
}));

export type GetSecurityPolicyError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a configured OpenSearch Serverless security policy. For more information, see Network access for Amazon OpenSearch Serverless and Encryption at rest for Amazon OpenSearch Serverless.
 */
export const getSecurityPolicy: API.OperationMethod<
  GetSecurityPolicyRequest,
  GetSecurityPolicyResponse,
  GetSecurityPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93) as any as S.Schema<GetSecurityPolicyRequest>,
  output: __S(63) as any as S.Schema<GetSecurityPolicyResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSecurityPolicy",
}));

export type ListAccessPoliciesError = InternalServerException | ValidationException | CommonErrors;
/**
 * Returns information about a list of OpenSearch Serverless access policies.
 */
export const listAccessPolicies: API.PaginatedOperationMethod<
  ListAccessPoliciesRequest,
  ListAccessPoliciesResponse,
  ListAccessPoliciesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(94) as any as S.Schema<ListAccessPoliciesRequest>,
  output: __S(97) as any as S.Schema<ListAccessPoliciesResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessPolicies",
  pagination: { inputToken: "nextToken", outputToken: "nextToken" } as const,
})) as any;

export type ListCollectionGroupsError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of collection groups. For more information, see Creating and managing Amazon OpenSearch Serverless collections.
 */
export const listCollectionGroups: API.PaginatedOperationMethod<
  ListCollectionGroupsRequest,
  ListCollectionGroupsResponse,
  ListCollectionGroupsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(98) as any as S.Schema<ListCollectionGroupsRequest>,
  output: __S(101) as any as S.Schema<ListCollectionGroupsResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCollectionGroups",
  pagination: { inputToken: "nextToken", outputToken: "nextToken" } as const,
})) as any;

export type ListCollectionsError = InternalServerException | ValidationException | CommonErrors;
/**
 * Lists all OpenSearch Serverless collections. For more information, see Creating and managing Amazon OpenSearch Serverless collections.
 *
 * Make sure to include an empty request body {} if you don't include any collection filters in the request.
 */
export const listCollections: API.PaginatedOperationMethod<
  ListCollectionsRequest,
  ListCollectionsResponse,
  ListCollectionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(103) as any as S.Schema<ListCollectionsRequest>,
  output: __S(106) as any as S.Schema<ListCollectionsResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCollections",
  pagination: { inputToken: "nextToken", outputToken: "nextToken" } as const,
})) as any;

export type ListLifecyclePoliciesError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of OpenSearch Serverless lifecycle policies. For more information, see Viewing data lifecycle policies.
 */
export const listLifecyclePolicies: API.PaginatedOperationMethod<
  ListLifecyclePoliciesRequest,
  ListLifecyclePoliciesResponse,
  ListLifecyclePoliciesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(107) as any as S.Schema<ListLifecyclePoliciesRequest>,
  output: __S(108) as any as S.Schema<ListLifecyclePoliciesResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLifecyclePolicies",
  pagination: { inputToken: "nextToken", outputToken: "nextToken" } as const,
})) as any;

export type ListSecurityConfigsError = InternalServerException | ValidationException | CommonErrors;
/**
 * Returns information about configured OpenSearch Serverless security configurations. For more information, see SAML authentication for Amazon OpenSearch Serverless.
 */
export const listSecurityConfigs: API.PaginatedOperationMethod<
  ListSecurityConfigsRequest,
  ListSecurityConfigsResponse,
  ListSecurityConfigsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(109) as any as S.Schema<ListSecurityConfigsRequest>,
  output: __S(112) as any as S.Schema<ListSecurityConfigsResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSecurityConfigs",
  pagination: { inputToken: "nextToken", outputToken: "nextToken" } as const,
})) as any;

export type ListSecurityPoliciesError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about configured OpenSearch Serverless security policies.
 */
export const listSecurityPolicies: API.PaginatedOperationMethod<
  ListSecurityPoliciesRequest,
  ListSecurityPoliciesResponse,
  ListSecurityPoliciesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(113) as any as S.Schema<ListSecurityPoliciesRequest>,
  output: __S(114) as any as S.Schema<ListSecurityPoliciesResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSecurityPolicies",
  pagination: { inputToken: "nextToken", outputToken: "nextToken" } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns the tags for an OpenSearch Serverless resource. For more information, see Tagging Amazon OpenSearch Serverless collections.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(116) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListVpcEndpointsError = InternalServerException | ValidationException | CommonErrors;
/**
 * Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current account. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.
 */
export const listVpcEndpoints: API.PaginatedOperationMethod<
  ListVpcEndpointsRequest,
  ListVpcEndpointsResponse,
  ListVpcEndpointsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(118) as any as S.Schema<ListVpcEndpointsRequest>,
  output: __S(120) as any as S.Schema<ListVpcEndpointsResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVpcEndpoints",
  pagination: { inputToken: "nextToken", outputToken: "nextToken" } as const,
})) as any;

export type TagResourceError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Associates tags with an OpenSearch Serverless resource. For more information, see Tagging Amazon OpenSearch Serverless collections.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(121) as any as S.Schema<TagResourceRequest>,
  output: __S(52) as any as S.Schema<TagResourceResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes a tag or set of tags from an OpenSearch Serverless resource. For more information, see Tagging Amazon OpenSearch Serverless collections.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(122) as any as S.Schema<UntagResourceRequest>,
  output: __S(52) as any as S.Schema<UntagResourceResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAccessPolicyError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates an OpenSearch Serverless access policy. For more information, see Data access control for Amazon OpenSearch Serverless.
 */
export const updateAccessPolicy: API.OperationMethod<
  UpdateAccessPolicyRequest,
  UpdateAccessPolicyResponse,
  UpdateAccessPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(123) as any as S.Schema<UpdateAccessPolicyRequest>,
  output: __S(43) as any as S.Schema<UpdateAccessPolicyResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAccessPolicy",
}));

export type UpdateAccountSettingsError =
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Update the OpenSearch Serverless settings for the current Amazon Web Services account. For more information, see Managing capacity limits for Amazon OpenSearch Serverless.
 */
export const updateAccountSettings: API.OperationMethod<
  UpdateAccountSettingsRequest,
  UpdateAccountSettingsResponse,
  UpdateAccountSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124) as any as S.Schema<UpdateAccountSettingsRequest>,
  output: __S(83) as any as S.Schema<UpdateAccountSettingsResponse>,
  errors: [InternalServerException, ServiceQuotaExceededException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAccountSettings",
}));

export type UpdateCollectionError =
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Updates an OpenSearch Serverless collection.
 */
export const updateCollection: API.OperationMethod<
  UpdateCollectionRequest,
  UpdateCollectionResponse,
  UpdateCollectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(125) as any as S.Schema<UpdateCollectionRequest>,
  output: __S(127) as any as S.Schema<UpdateCollectionResponse>,
  errors: [ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCollection",
}));

export type UpdateCollectionGroupError =
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Updates the description and capacity limits of a collection group.
 */
export const updateCollectionGroup: API.OperationMethod<
  UpdateCollectionGroupRequest,
  UpdateCollectionGroupResponse,
  UpdateCollectionGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(128) as any as S.Schema<UpdateCollectionGroupRequest>,
  output: __S(130) as any as S.Schema<UpdateCollectionGroupResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCollectionGroup",
}));

export type UpdateIndexError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing index in an OpenSearch Serverless collection. This operation allows you to modify the index schema, including adding new fields or changing field mappings. You can also enable automatic semantic enrichment ingestion and search. For more information, see About automatic semantic enrichment.
 */
export const updateIndex: API.OperationMethod<
  UpdateIndexRequest,
  UpdateIndexResponse,
  UpdateIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131) as any as S.Schema<UpdateIndexRequest>,
  output: __S(52) as any as S.Schema<UpdateIndexResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIndex",
}));

export type UpdateLifecyclePolicyError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Updates an OpenSearch Serverless access policy. For more information, see Updating data lifecycle policies.
 */
export const updateLifecyclePolicy: API.OperationMethod<
  UpdateLifecyclePolicyRequest,
  UpdateLifecyclePolicyResponse,
  UpdateLifecyclePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(132) as any as S.Schema<UpdateLifecyclePolicyRequest>,
  output: __S(54) as any as S.Schema<UpdateLifecyclePolicyResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLifecyclePolicy",
}));

export type UpdateSecurityConfigError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a security configuration for OpenSearch Serverless. For more information, see SAML authentication for Amazon OpenSearch Serverless.
 */
export const updateSecurityConfig: API.OperationMethod<
  UpdateSecurityConfigRequest,
  UpdateSecurityConfigResponse,
  UpdateSecurityConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(134) as any as S.Schema<UpdateSecurityConfigRequest>,
  output: __S(61) as any as S.Schema<UpdateSecurityConfigResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSecurityConfig",
}));

export type UpdateSecurityPolicyError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Updates an OpenSearch Serverless security policy. For more information, see Network access for Amazon OpenSearch Serverless and Encryption at rest for Amazon OpenSearch Serverless.
 */
export const updateSecurityPolicy: API.OperationMethod<
  UpdateSecurityPolicyRequest,
  UpdateSecurityPolicyResponse,
  UpdateSecurityPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(135) as any as S.Schema<UpdateSecurityPolicyRequest>,
  output: __S(63) as any as S.Schema<UpdateSecurityPolicyResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSecurityPolicy",
}));

export type UpdateVpcEndpointError =
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Updates an OpenSearch Serverless-managed interface endpoint. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.
 */
export const updateVpcEndpoint: API.OperationMethod<
  UpdateVpcEndpointRequest,
  UpdateVpcEndpointResponse,
  UpdateVpcEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(136) as any as S.Schema<UpdateVpcEndpointRequest>,
  output: __S(138) as any as S.Schema<UpdateVpcEndpointResponse>,
  errors: [ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVpcEndpoint",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({ ids: S.optional(__S(0)), names: S.optional(__S(0)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchGetCollectionRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ ServerlessVectorAcceleration: S.String })).annotate({
        identifier: "VectorOptions",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          collectionEndpoint: S.optional(S.String),
          dashboardEndpoint: S.optional(S.String),
        }),
      ).annotate({ identifier: "FipsEndpoints" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(S.String),
          type: S.optional(S.String),
          description: S.optional(S.String),
          arn: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          standbyReplicas: S.optional(S.String),
          deletionProtection: S.optional(S.String),
          vectorOptions: S.optional(__S(2)),
          createdDate: S.optional(S.Number),
          lastModifiedDate: S.optional(S.Number),
          collectionEndpoint: S.optional(S.String),
          dashboardEndpoint: S.optional(S.String),
          fipsEndpoints: S.optional(__S(3)),
          failureCode: S.optional(S.String),
          failureMessage: S.optional(S.String),
          collectionGroupName: S.optional(S.String),
        }),
      ).annotate({ identifier: "CollectionDetail" });
    case 5:
      return S.Array(__S(4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(S.String),
        }),
      ).annotate({ identifier: "CollectionErrorDetail" });
    case 7:
      return S.Array(__S(6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          collectionDetails: S.optional(__S(5)),
          collectionErrorDetails: S.optional(__S(7)),
        }),
      ).annotate({
        identifier: "BatchGetCollectionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ids: S.optional(__S(0)),
          names: S.optional(__S(0)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchGetCollectionGroupRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "Tag",
      });
    case 3:
      return S.Array(__S(10));
    case 4:
      return S.suspend(() =>
        S.Struct({
          maxIndexingCapacityInOCU: S.optional(S.Number),
          maxSearchCapacityInOCU: S.optional(S.Number),
          minIndexingCapacityInOCU: S.optional(S.Number),
          minSearchCapacityInOCU: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CollectionGroupCapacityLimits",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ capacityInOcu: S.optional(S.Number), autoscalingStatus: S.optional(S.String) }),
      ).annotate({ identifier: "CapacityDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({ search: S.optional(__S(13)), indexing: S.optional(__S(13)) }),
      ).annotate({ identifier: "CurrentCapacity" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          name: S.optional(S.String),
          standbyReplicas: S.optional(S.String),
          description: S.optional(S.String),
          tags: S.optional(__S(11)),
          createdDate: S.optional(S.Number),
          capacityLimits: S.optional(__S(12)),
          currentCapacity: S.optional(__S(14)),
          numberOfCollections: S.optional(S.Number),
          generation: S.optional(S.String),
        }),
      ).annotate({ identifier: "CollectionGroupDetail" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15));
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CollectionGroupErrorDetail",
      });
    case 2:
      return S.Array(__S(17));
    case 3:
      return S.suspend(() =>
        S.Struct({
          collectionGroupDetails: S.optional(__S(16)),
          collectionGroupErrorDetails: S.optional(__S(18)),
        }),
      ).annotate({
        identifier: "BatchGetCollectionGroupResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ type: S.String, resource: S.String })).annotate({
        identifier: "LifecyclePolicyResourceIdentifier",
      });
    case 5:
      return S.Array(__S(20));
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceIdentifiers: __S(21) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchGetEffectiveLifecyclePolicyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          resource: S.optional(S.String),
          policyName: S.optional(S.String),
          resourceType: S.optional(S.String),
          retentionPeriod: S.optional(S.String),
          noMinRetentionPeriod: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "EffectiveLifecyclePolicyDetail",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(23));
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          resource: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "EffectiveLifecyclePolicyErrorDetail",
      });
    case 2:
      return S.Array(__S(25));
    case 3:
      return S.suspend(() =>
        S.Struct({
          effectiveLifecyclePolicyDetails: S.optional(__S(24)),
          effectiveLifecyclePolicyErrorDetails: S.optional(__S(26)),
        }),
      ).annotate({
        identifier: "BatchGetEffectiveLifecyclePolicyResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ type: S.String, name: S.String })).annotate({
        identifier: "LifecyclePolicyIdentifier",
      });
    case 5:
      return S.Array(__S(28));
    case 6:
      return S.suspend(() =>
        S.Struct({ identifiers: __S(29) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchGetLifecyclePolicyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          name: S.optional(S.String),
          policyVersion: S.optional(S.String),
          description: S.optional(S.String),
          policy: S.optional(S.Any),
          createdDate: S.optional(S.Number),
          lastModifiedDate: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LifecyclePolicyDetail" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31));
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          name: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LifecyclePolicyErrorDetail",
      });
    case 2:
      return S.Array(__S(33));
    case 3:
      return S.suspend(() =>
        S.Struct({
          lifecyclePolicyDetails: S.optional(__S(32)),
          lifecyclePolicyErrorDetails: S.optional(__S(34)),
        }),
      ).annotate({
        identifier: "BatchGetLifecyclePolicyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ids: __S(0) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchGetVpcEndpointRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          vpcId: S.optional(S.String),
          subnetIds: S.optional(__S(0)),
          securityGroupIds: S.optional(__S(0)),
          status: S.optional(S.String),
          createdDate: S.optional(S.Number),
          failureCode: S.optional(S.String),
          failureMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "VpcEndpointDetail" });
    case 6:
      return S.Array(__S(37));
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(S.String),
        }),
      ).annotate({ identifier: "VpcEndpointErrorDetail" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(39));
    case 1:
      return S.suspend(() =>
        S.Struct({
          vpcEndpointDetails: S.optional(__S(38)),
          vpcEndpointErrorDetails: S.optional(__S(40)),
        }),
      ).annotate({
        identifier: "BatchGetVpcEndpointResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          name: S.String,
          description: S.optional(S.String),
          policy: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateAccessPolicyRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ accessPolicyDetail: S.optional(__S(31)) })).annotate({
        identifier: "CreateAccessPolicyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ aWSOwnedKey: S.optional(S.Boolean), kmsKeyArn: S.optional(S.String) }),
      ).annotate({ identifier: "EncryptionConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: S.optional(S.String),
          description: S.optional(S.String),
          tags: S.optional(__S(11)),
          standbyReplicas: S.optional(S.String),
          vectorOptions: S.optional(__S(2)),
          collectionGroupName: S.optional(S.String),
          encryptionConfig: S.optional(__S(44)),
          deletionProtection: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateCollectionRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(S.String),
          type: S.optional(S.String),
          description: S.optional(S.String),
          arn: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          standbyReplicas: S.optional(S.String),
          deletionProtection: S.optional(S.String),
          vectorOptions: S.optional(__S(2)),
          createdDate: S.optional(S.Number),
          lastModifiedDate: S.optional(S.Number),
          collectionGroupName: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateCollectionDetail" });
    case 7:
      return S.suspend(() => S.Struct({ createCollectionDetail: S.optional(__S(46)) })).annotate({
        identifier: "CreateCollectionResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          standbyReplicas: S.String,
          description: S.optional(S.String),
          tags: S.optional(__S(11)),
          capacityLimits: S.optional(__S(12)),
          generation: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateCollectionGroupRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          name: S.optional(S.String),
          standbyReplicas: S.optional(S.String),
          description: S.optional(S.String),
          tags: S.optional(__S(11)),
          createdDate: S.optional(S.Number),
          capacityLimits: S.optional(__S(12)),
          generation: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateCollectionGroupDetail",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ createCollectionGroupDetail: S.optional(__S(49)) }),
      ).annotate({
        identifier: "CreateCollectionGroupResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.String, indexName: S.String, indexSchema: S.optional(S.Any) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateIndexRequest" });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CreateIndexResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          name: S.String,
          description: S.optional(S.String),
          policy: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLifecyclePolicyRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ lifecyclePolicyDetail: S.optional(__S(31)) })).annotate({
        identifier: "CreateLifecyclePolicyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          metadata: S.String,
          userAttribute: S.optional(S.String),
          groupAttribute: S.optional(S.String),
          openSearchServerlessEntityId: S.optional(S.String),
          sessionTimeout: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SamlConfigOptions" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          instanceArn: S.String,
          userAttribute: S.optional(S.String),
          groupAttribute: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateIamIdentityCenterConfigOptions",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ groupAttribute: S.optional(S.String), userAttribute: S.optional(S.String) }),
      ).annotate({
        identifier: "IamFederationConfigOptions",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          name: S.String,
          description: S.optional(S.String),
          samlOptions: S.optional(__S(55)),
          iamIdentityCenterOptions: S.optional(__S(56)),
          iamFederationOptions: S.optional(__S(57)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateSecurityConfigRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          instanceArn: S.optional(S.String),
          applicationArn: S.optional(S.String),
          applicationName: S.optional(S.String),
          applicationDescription: S.optional(S.String),
          userAttribute: S.optional(S.String),
          groupAttribute: S.optional(S.String),
        }),
      ).annotate({
        identifier: "IamIdentityCenterConfigOptions",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          type: S.optional(S.String),
          configVersion: S.optional(S.String),
          description: S.optional(S.String),
          samlOptions: S.optional(__S(55)),
          iamIdentityCenterOptions: S.optional(__S(59)),
          iamFederationOptions: S.optional(__S(57)),
          createdDate: S.optional(S.Number),
          lastModifiedDate: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SecurityConfigDetail" });
    case 5:
      return S.suspend(() => S.Struct({ securityConfigDetail: S.optional(__S(60)) })).annotate({
        identifier: "CreateSecurityConfigResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          name: S.String,
          description: S.optional(S.String),
          policy: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateSecurityPolicyRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ securityPolicyDetail: S.optional(__S(31)) })).annotate({
        identifier: "CreateSecurityPolicyResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          vpcId: S.String,
          subnetIds: __S(0),
          securityGroupIds: S.optional(__S(0)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateVpcEndpointRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateVpcEndpointDetail" });
    case 2:
      return S.suspend(() => S.Struct({ createVpcEndpointDetail: S.optional(__S(65)) })).annotate({
        identifier: "CreateVpcEndpointResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          name: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteAccessPolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteCollectionRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(S.String),
          deletionProtection: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeleteCollectionDetail" });
    case 6:
      return S.suspend(() => S.Struct({ deleteCollectionDetail: S.optional(__S(69)) })).annotate({
        identifier: "DeleteCollectionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteCollectionGroupRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ id: S.String, indexName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteIndexRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          name: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteLifecyclePolicyRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteSecurityConfigRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          name: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteSecurityPolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteVpcEndpointRequest" });
    case 5:
      return S.suspend(() => S.Struct({ deleteVpcEndpointDetail: S.optional(__S(65)) })).annotate({
        identifier: "DeleteVpcEndpointResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ type: S.String, name: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAccessPolicyRequest" });
    case 7:
      return S.suspend(() => S.Struct({ accessPolicyDetail: S.optional(__S(31)) })).annotate({
        identifier: "GetAccessPolicyResponse",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetAccountSettingsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxIndexingCapacityInOCU: S.optional(S.Number),
          maxSearchCapacityInOCU: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CapacityLimits" });
    case 2:
      return S.suspend(() => S.Struct({ capacityLimits: S.optional(__S(81)) })).annotate({
        identifier: "AccountSettingsDetail",
      });
    case 3:
      return S.suspend(() => S.Struct({ accountSettingsDetail: S.optional(__S(82)) })).annotate({
        identifier: "GetAccountSettingsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ id: S.String, indexName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetIndexRequest" });
    case 5:
      return S.suspend(() => S.Struct({ indexSchema: S.optional(S.Any) })).annotate({
        identifier: "GetIndexResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetPoliciesStatsRequest" });
    case 7:
      return S.suspend(() => S.Struct({ DataPolicyCount: S.optional(S.Number) })).annotate({
        identifier: "AccessPolicyStats",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EncryptionPolicyCount: S.optional(S.Number),
          NetworkPolicyCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SecurityPolicyStats" });
    case 1:
      return S.suspend(() => S.Struct({ SamlConfigCount: S.optional(S.Number) })).annotate({
        identifier: "SecurityConfigStats",
      });
    case 2:
      return S.suspend(() => S.Struct({ RetentionPolicyCount: S.optional(S.Number) })).annotate({
        identifier: "LifecyclePolicyStats",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccessPolicyStats: S.optional(__S(87)),
          SecurityPolicyStats: S.optional(__S(88)),
          SecurityConfigStats: S.optional(__S(89)),
          LifecyclePolicyStats: S.optional(__S(90)),
          TotalPolicyCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "GetPoliciesStatsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ id: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSecurityConfigRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ type: S.String, name: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSecurityPolicyRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          resource: S.optional(__S(0)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAccessPoliciesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          name: S.optional(S.String),
          policyVersion: S.optional(S.String),
          description: S.optional(S.String),
          createdDate: S.optional(S.Number),
          lastModifiedDate: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AccessPolicySummary" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(95));
    case 1:
      return S.suspend(() =>
        S.Struct({
          accessPolicySummaries: S.optional(__S(96)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAccessPoliciesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListCollectionGroupsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          name: S.optional(S.String),
          numberOfCollections: S.optional(S.Number),
          createdDate: S.optional(S.Number),
          capacityLimits: S.optional(__S(12)),
          generation: S.optional(S.String),
        }),
      ).annotate({ identifier: "CollectionGroupSummary" });
    case 4:
      return S.Array(__S(99));
    case 5:
      return S.suspend(() =>
        S.Struct({
          collectionGroupSummaries: S.optional(__S(100)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCollectionGroupsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          status: S.optional(S.String),
          collectionGroupName: S.optional(S.String),
        }),
      ).annotate({ identifier: "CollectionFilters" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          collectionFilters: S.optional(__S(102)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListCollectionsRequest" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(S.String),
          arn: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          collectionGroupName: S.optional(S.String),
        }),
      ).annotate({ identifier: "CollectionSummary" });
    case 1:
      return S.Array(__S(104));
    case 2:
      return S.suspend(() =>
        S.Struct({
          collectionSummaries: S.optional(__S(105)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListCollectionsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          resources: S.optional(__S(0)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListLifecyclePoliciesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          lifecyclePolicySummaries: S.optional(__S(96)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListLifecyclePoliciesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListSecurityConfigsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          type: S.optional(S.String),
          configVersion: S.optional(S.String),
          description: S.optional(S.String),
          createdDate: S.optional(S.Number),
          lastModifiedDate: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SecurityConfigSummary" });
    case 7:
      return S.Array(__S(110));
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          securityConfigSummaries: S.optional(__S(111)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSecurityConfigsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          resource: S.optional(__S(0)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListSecurityPoliciesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          securityPolicySummaries: S.optional(__S(96)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSecurityPoliciesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(11)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ status: S.optional(S.String) })).annotate({
        identifier: "VpcEndpointFilters",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          vpcEndpointFilters: S.optional(__S(117)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListVpcEndpointsRequest" });
    case 7:
      return S.Array(__S(65));
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          vpcEndpointSummaries: S.optional(__S(119)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListVpcEndpointsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: __S(11) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tagKeys: __S(0) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          name: S.String,
          policyVersion: S.String,
          description: S.optional(S.String),
          policy: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateAccessPolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ capacityLimits: S.optional(__S(81)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateAccountSettingsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          description: S.optional(S.String),
          vectorOptions: S.optional(__S(2)),
          deletionProtection: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateCollectionRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(S.String),
          type: S.optional(S.String),
          description: S.optional(S.String),
          vectorOptions: S.optional(__S(2)),
          arn: S.optional(S.String),
          createdDate: S.optional(S.Number),
          lastModifiedDate: S.optional(S.Number),
          deletionProtection: S.optional(S.String),
        }),
      ).annotate({ identifier: "UpdateCollectionDetail" });
    case 7:
      return S.suspend(() => S.Struct({ updateCollectionDetail: S.optional(__S(126)) })).annotate({
        identifier: "UpdateCollectionResponse",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          description: S.optional(S.String),
          capacityLimits: S.optional(__S(12)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateCollectionGroupRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          capacityLimits: S.optional(__S(12)),
          createdDate: S.optional(S.Number),
          lastModifiedDate: S.optional(S.Number),
          generation: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateCollectionGroupDetail",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ updateCollectionGroupDetail: S.optional(__S(129)) }),
      ).annotate({
        identifier: "UpdateCollectionGroupResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.String, indexName: S.String, indexSchema: S.optional(S.Any) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateIndexRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          name: S.String,
          policyVersion: S.String,
          description: S.optional(S.String),
          policy: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateLifecyclePolicyRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ userAttribute: S.optional(S.String), groupAttribute: S.optional(S.String) }),
      ).annotate({
        identifier: "UpdateIamIdentityCenterConfigOptions",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          configVersion: S.String,
          description: S.optional(S.String),
          samlOptions: S.optional(__S(55)),
          iamIdentityCenterOptionsUpdates: S.optional(__S(133)),
          iamFederationOptions: S.optional(__S(57)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateSecurityConfigRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          name: S.String,
          policyVersion: S.String,
          description: S.optional(S.String),
          policy: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateSecurityPolicyRequest",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          addSubnetIds: S.optional(__S(0)),
          removeSubnetIds: S.optional(__S(0)),
          addSecurityGroupIds: S.optional(__S(0)),
          removeSecurityGroupIds: S.optional(__S(0)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateVpcEndpointRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(S.String),
          subnetIds: S.optional(__S(0)),
          securityGroupIds: S.optional(__S(0)),
          lastModifiedDate: S.optional(S.Number),
        }),
      ).annotate({ identifier: "UpdateVpcEndpointDetail" });
    case 2:
      return S.suspend(() => S.Struct({ UpdateVpcEndpointDetail: S.optional(__S(137)) })).annotate({
        identifier: "UpdateVpcEndpointResponse",
      });
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
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
  }
}
