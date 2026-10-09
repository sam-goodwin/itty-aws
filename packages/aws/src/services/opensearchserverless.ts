import * as API from "@distilled.cloud/core/api";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
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
const CollectionIds = /*@__PURE__*/ S.Array(S.String);
export type CollectionName = string;
export type CollectionNames = string[];
const CollectionNames = CollectionIds as any as S.Schema<CollectionNames>;
export interface BatchGetCollectionRequest {
  ids?: string[];
  names?: string[];
}
const BatchGetCollectionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ids: S.optional(CollectionIds), names: S.optional(CollectionNames) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "BatchGetCollectionRequest",
}) as any as S.Schema<BatchGetCollectionRequest>;
export type CollectionStatus = string;
export type CollectionType = string;
export type StandbyReplicas = string;
export type DeletionProtection = string;
export type ServerlessVectorAccelerationStatus = string;
export interface VectorOptions {
  ServerlessVectorAcceleration: string;
}
const VectorOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ServerlessVectorAcceleration: S.String }),
).annotate({ identifier: "VectorOptions" }) as any as S.Schema<VectorOptions>;
export interface FipsEndpoints {
  collectionEndpoint?: string;
  dashboardEndpoint?: string;
}
const FipsEndpoints = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ collectionEndpoint: S.optional(S.String), dashboardEndpoint: S.optional(S.String) }),
).annotate({ identifier: "FipsEndpoints" }) as any as S.Schema<FipsEndpoints>;
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
const CollectionDetail = /*@__PURE__*/ S.suspend(() =>
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
    vectorOptions: S.optional(VectorOptions),
    createdDate: S.optional(S.Number),
    lastModifiedDate: S.optional(S.Number),
    collectionEndpoint: S.optional(S.String),
    dashboardEndpoint: S.optional(S.String),
    fipsEndpoints: S.optional(FipsEndpoints),
    failureCode: S.optional(S.String),
    failureMessage: S.optional(S.String),
    collectionGroupName: S.optional(S.String),
  }),
).annotate({ identifier: "CollectionDetail" }) as any as S.Schema<CollectionDetail>;
export type CollectionDetails = CollectionDetail[];
const CollectionDetails = /*@__PURE__*/ S.Array(CollectionDetail);
export interface CollectionErrorDetail {
  id?: string;
  name?: string;
  errorMessage?: string;
  errorCode?: string;
}
const CollectionErrorDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    name: S.optional(S.String),
    errorMessage: S.optional(S.String),
    errorCode: S.optional(S.String),
  }),
).annotate({ identifier: "CollectionErrorDetail" }) as any as S.Schema<CollectionErrorDetail>;
export type CollectionErrorDetails = CollectionErrorDetail[];
const CollectionErrorDetails = /*@__PURE__*/ S.Array(CollectionErrorDetail);
export interface BatchGetCollectionResponse {
  collectionDetails?: CollectionDetail[];
  collectionErrorDetails?: CollectionErrorDetail[];
}
const BatchGetCollectionResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    collectionDetails: S.optional(CollectionDetails),
    collectionErrorDetails: S.optional(CollectionErrorDetails),
  }),
).annotate({
  identifier: "BatchGetCollectionResponse",
}) as any as S.Schema<BatchGetCollectionResponse>;
export type CollectionGroupId = string;
export type CollectionGroupIds = string[];
const CollectionGroupIds = CollectionIds as any as S.Schema<CollectionGroupIds>;
export type CollectionGroupNames = string[];
const CollectionGroupNames = CollectionIds as any as S.Schema<CollectionGroupNames>;
export interface BatchGetCollectionGroupRequest {
  ids?: string[];
  names?: string[];
}
const BatchGetCollectionGroupRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ids: S.optional(CollectionGroupIds), names: S.optional(CollectionGroupNames) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "BatchGetCollectionGroupRequest",
}) as any as S.Schema<BatchGetCollectionGroupRequest>;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
const Tag = /*@__PURE__*/ S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
  identifier: "Tag",
}) as any as S.Schema<Tag>;
export type Tags = Tag[];
const Tags = /*@__PURE__*/ S.Array(Tag);
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
const CollectionGroupCapacityLimits = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    maxIndexingCapacityInOCU: S.optional(S.Number),
    maxSearchCapacityInOCU: S.optional(S.Number),
    minIndexingCapacityInOCU: S.optional(S.Number),
    minSearchCapacityInOCU: S.optional(S.Number),
  }),
).annotate({
  identifier: "CollectionGroupCapacityLimits",
}) as any as S.Schema<CollectionGroupCapacityLimits>;
export type AutoscalingStatus = string;
export interface CapacityDetails {
  capacityInOcu?: number;
  autoscalingStatus?: string;
}
const CapacityDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ capacityInOcu: S.optional(S.Number), autoscalingStatus: S.optional(S.String) }),
).annotate({ identifier: "CapacityDetails" }) as any as S.Schema<CapacityDetails>;
export interface CurrentCapacity {
  search?: CapacityDetails;
  indexing?: CapacityDetails;
}
const CurrentCapacity = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ search: S.optional(CapacityDetails), indexing: S.optional(CapacityDetails) }),
).annotate({ identifier: "CurrentCapacity" }) as any as S.Schema<CurrentCapacity>;
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
const CollectionGroupDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    arn: S.optional(S.String),
    name: S.optional(S.String),
    standbyReplicas: S.optional(S.String),
    description: S.optional(S.String),
    tags: S.optional(Tags),
    createdDate: S.optional(S.Number),
    capacityLimits: S.optional(CollectionGroupCapacityLimits),
    currentCapacity: S.optional(CurrentCapacity),
    numberOfCollections: S.optional(S.Number),
    generation: S.optional(S.String),
  }),
).annotate({ identifier: "CollectionGroupDetail" }) as any as S.Schema<CollectionGroupDetail>;
export type CollectionGroupDetails = CollectionGroupDetail[];
const CollectionGroupDetails = /*@__PURE__*/ S.Array(CollectionGroupDetail);
export interface CollectionGroupErrorDetail {
  id?: string;
  name?: string;
  errorMessage?: string;
  errorCode?: string;
}
const CollectionGroupErrorDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    name: S.optional(S.String),
    errorMessage: S.optional(S.String),
    errorCode: S.optional(S.String),
  }),
).annotate({
  identifier: "CollectionGroupErrorDetail",
}) as any as S.Schema<CollectionGroupErrorDetail>;
export type CollectionGroupErrorDetails = CollectionGroupErrorDetail[];
const CollectionGroupErrorDetails = /*@__PURE__*/ S.Array(CollectionGroupErrorDetail);
export interface BatchGetCollectionGroupResponse {
  collectionGroupDetails?: CollectionGroupDetail[];
  collectionGroupErrorDetails?: CollectionGroupErrorDetail[];
}
const BatchGetCollectionGroupResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    collectionGroupDetails: S.optional(CollectionGroupDetails),
    collectionGroupErrorDetails: S.optional(CollectionGroupErrorDetails),
  }),
).annotate({
  identifier: "BatchGetCollectionGroupResponse",
}) as any as S.Schema<BatchGetCollectionGroupResponse>;
export type LifecyclePolicyType = string;
export type ResourceName = string;
export interface LifecyclePolicyResourceIdentifier {
  type: string;
  resource: string;
}
const LifecyclePolicyResourceIdentifier = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ type: S.String, resource: S.String }),
).annotate({
  identifier: "LifecyclePolicyResourceIdentifier",
}) as any as S.Schema<LifecyclePolicyResourceIdentifier>;
export type LifecyclePolicyResourceIdentifiers = LifecyclePolicyResourceIdentifier[];
const LifecyclePolicyResourceIdentifiers = /*@__PURE__*/ S.Array(LifecyclePolicyResourceIdentifier);
export interface BatchGetEffectiveLifecyclePolicyRequest {
  resourceIdentifiers: LifecyclePolicyResourceIdentifier[];
}
const BatchGetEffectiveLifecyclePolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceIdentifiers: LifecyclePolicyResourceIdentifiers }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "BatchGetEffectiveLifecyclePolicyRequest",
}) as any as S.Schema<BatchGetEffectiveLifecyclePolicyRequest>;
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
const EffectiveLifecyclePolicyDetail = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<EffectiveLifecyclePolicyDetail>;
export type EffectiveLifecyclePolicyDetails = EffectiveLifecyclePolicyDetail[];
const EffectiveLifecyclePolicyDetails = /*@__PURE__*/ S.Array(EffectiveLifecyclePolicyDetail);
export interface EffectiveLifecyclePolicyErrorDetail {
  type?: string;
  resource?: string;
  errorMessage?: string;
  errorCode?: string;
}
const EffectiveLifecyclePolicyErrorDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.optional(S.String),
    resource: S.optional(S.String),
    errorMessage: S.optional(S.String),
    errorCode: S.optional(S.String),
  }),
).annotate({
  identifier: "EffectiveLifecyclePolicyErrorDetail",
}) as any as S.Schema<EffectiveLifecyclePolicyErrorDetail>;
export type EffectiveLifecyclePolicyErrorDetails = EffectiveLifecyclePolicyErrorDetail[];
const EffectiveLifecyclePolicyErrorDetails = /*@__PURE__*/ S.Array(
  EffectiveLifecyclePolicyErrorDetail,
);
export interface BatchGetEffectiveLifecyclePolicyResponse {
  effectiveLifecyclePolicyDetails?: EffectiveLifecyclePolicyDetail[];
  effectiveLifecyclePolicyErrorDetails?: EffectiveLifecyclePolicyErrorDetail[];
}
const BatchGetEffectiveLifecyclePolicyResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    effectiveLifecyclePolicyDetails: S.optional(EffectiveLifecyclePolicyDetails),
    effectiveLifecyclePolicyErrorDetails: S.optional(EffectiveLifecyclePolicyErrorDetails),
  }),
).annotate({
  identifier: "BatchGetEffectiveLifecyclePolicyResponse",
}) as any as S.Schema<BatchGetEffectiveLifecyclePolicyResponse>;
export interface LifecyclePolicyIdentifier {
  type: string;
  name: string;
}
const LifecyclePolicyIdentifier = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ type: S.String, name: S.String }),
).annotate({
  identifier: "LifecyclePolicyIdentifier",
}) as any as S.Schema<LifecyclePolicyIdentifier>;
export type LifecyclePolicyIdentifiers = LifecyclePolicyIdentifier[];
const LifecyclePolicyIdentifiers = /*@__PURE__*/ S.Array(LifecyclePolicyIdentifier);
export interface BatchGetLifecyclePolicyRequest {
  identifiers: LifecyclePolicyIdentifier[];
}
const BatchGetLifecyclePolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ identifiers: LifecyclePolicyIdentifiers }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "BatchGetLifecyclePolicyRequest",
}) as any as S.Schema<BatchGetLifecyclePolicyRequest>;
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
const LifecyclePolicyDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.optional(S.String),
    name: S.optional(S.String),
    policyVersion: S.optional(S.String),
    description: S.optional(S.String),
    policy: S.optional(S.Any),
    createdDate: S.optional(S.Number),
    lastModifiedDate: S.optional(S.Number),
  }),
).annotate({ identifier: "LifecyclePolicyDetail" }) as any as S.Schema<LifecyclePolicyDetail>;
export type LifecyclePolicyDetails = LifecyclePolicyDetail[];
const LifecyclePolicyDetails = /*@__PURE__*/ S.Array(LifecyclePolicyDetail);
export interface LifecyclePolicyErrorDetail {
  type?: string;
  name?: string;
  errorMessage?: string;
  errorCode?: string;
}
const LifecyclePolicyErrorDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.optional(S.String),
    name: S.optional(S.String),
    errorMessage: S.optional(S.String),
    errorCode: S.optional(S.String),
  }),
).annotate({
  identifier: "LifecyclePolicyErrorDetail",
}) as any as S.Schema<LifecyclePolicyErrorDetail>;
export type LifecyclePolicyErrorDetails = LifecyclePolicyErrorDetail[];
const LifecyclePolicyErrorDetails = /*@__PURE__*/ S.Array(LifecyclePolicyErrorDetail);
export interface BatchGetLifecyclePolicyResponse {
  lifecyclePolicyDetails?: LifecyclePolicyDetail[];
  lifecyclePolicyErrorDetails?: LifecyclePolicyErrorDetail[];
}
const BatchGetLifecyclePolicyResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    lifecyclePolicyDetails: S.optional(LifecyclePolicyDetails),
    lifecyclePolicyErrorDetails: S.optional(LifecyclePolicyErrorDetails),
  }),
).annotate({
  identifier: "BatchGetLifecyclePolicyResponse",
}) as any as S.Schema<BatchGetLifecyclePolicyResponse>;
export type VpcEndpointId = string;
export type VpcEndpointIds = string[];
const VpcEndpointIds = CollectionIds as any as S.Schema<VpcEndpointIds>;
export interface BatchGetVpcEndpointRequest {
  ids: string[];
}
const BatchGetVpcEndpointRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ids: VpcEndpointIds }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "BatchGetVpcEndpointRequest",
}) as any as S.Schema<BatchGetVpcEndpointRequest>;
export type VpcEndpointName = string;
export type VpcId = string;
export type SubnetId = string;
export type SubnetIds = string[];
const SubnetIds = CollectionIds as any as S.Schema<SubnetIds>;
export type SecurityGroupId = string;
export type SecurityGroupIds = string[];
const SecurityGroupIds = CollectionIds as any as S.Schema<SecurityGroupIds>;
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
const VpcEndpointDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    name: S.optional(S.String),
    vpcId: S.optional(S.String),
    subnetIds: S.optional(SubnetIds),
    securityGroupIds: S.optional(SecurityGroupIds),
    status: S.optional(S.String),
    createdDate: S.optional(S.Number),
    failureCode: S.optional(S.String),
    failureMessage: S.optional(S.String),
  }),
).annotate({ identifier: "VpcEndpointDetail" }) as any as S.Schema<VpcEndpointDetail>;
export type VpcEndpointDetails = VpcEndpointDetail[];
const VpcEndpointDetails = /*@__PURE__*/ S.Array(VpcEndpointDetail);
export interface VpcEndpointErrorDetail {
  id?: string;
  errorMessage?: string;
  errorCode?: string;
}
const VpcEndpointErrorDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    errorMessage: S.optional(S.String),
    errorCode: S.optional(S.String),
  }),
).annotate({ identifier: "VpcEndpointErrorDetail" }) as any as S.Schema<VpcEndpointErrorDetail>;
export type VpcEndpointErrorDetails = VpcEndpointErrorDetail[];
const VpcEndpointErrorDetails = /*@__PURE__*/ S.Array(VpcEndpointErrorDetail);
export interface BatchGetVpcEndpointResponse {
  vpcEndpointDetails?: VpcEndpointDetail[];
  vpcEndpointErrorDetails?: VpcEndpointErrorDetail[];
}
const BatchGetVpcEndpointResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    vpcEndpointDetails: S.optional(VpcEndpointDetails),
    vpcEndpointErrorDetails: S.optional(VpcEndpointErrorDetails),
  }),
).annotate({
  identifier: "BatchGetVpcEndpointResponse",
}) as any as S.Schema<BatchGetVpcEndpointResponse>;
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
const CreateAccessPolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.String,
    name: S.String,
    description: S.optional(S.String),
    policy: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "CreateAccessPolicyRequest",
}) as any as S.Schema<CreateAccessPolicyRequest>;
export interface AccessPolicyDetail {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  policy?: any;
  createdDate?: number;
  lastModifiedDate?: number;
}
const AccessPolicyDetail = LifecyclePolicyDetail as any as S.Schema<AccessPolicyDetail>;
export interface CreateAccessPolicyResponse {
  accessPolicyDetail?: AccessPolicyDetail;
}
const CreateAccessPolicyResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accessPolicyDetail: S.optional(AccessPolicyDetail) }),
).annotate({
  identifier: "CreateAccessPolicyResponse",
}) as any as S.Schema<CreateAccessPolicyResponse>;
export interface EncryptionConfig {
  aWSOwnedKey?: boolean;
  kmsKeyArn?: string;
}
const EncryptionConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ aWSOwnedKey: S.optional(S.Boolean), kmsKeyArn: S.optional(S.String) }),
).annotate({ identifier: "EncryptionConfig" }) as any as S.Schema<EncryptionConfig>;
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
const CreateCollectionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    type: S.optional(S.String),
    description: S.optional(S.String),
    tags: S.optional(Tags),
    standbyReplicas: S.optional(S.String),
    vectorOptions: S.optional(VectorOptions),
    collectionGroupName: S.optional(S.String),
    encryptionConfig: S.optional(EncryptionConfig),
    deletionProtection: S.optional(S.String),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "CreateCollectionRequest" }) as any as S.Schema<CreateCollectionRequest>;
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
const CreateCollectionDetail = /*@__PURE__*/ S.suspend(() =>
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
    vectorOptions: S.optional(VectorOptions),
    createdDate: S.optional(S.Number),
    lastModifiedDate: S.optional(S.Number),
    collectionGroupName: S.optional(S.String),
  }),
).annotate({ identifier: "CreateCollectionDetail" }) as any as S.Schema<CreateCollectionDetail>;
export interface CreateCollectionResponse {
  createCollectionDetail?: CreateCollectionDetail;
}
const CreateCollectionResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ createCollectionDetail: S.optional(CreateCollectionDetail) }),
).annotate({ identifier: "CreateCollectionResponse" }) as any as S.Schema<CreateCollectionResponse>;
export interface CreateCollectionGroupRequest {
  name: string;
  standbyReplicas: string;
  description?: string;
  tags?: Tag[];
  capacityLimits?: CollectionGroupCapacityLimits;
  generation?: string;
  clientToken?: string;
}
const CreateCollectionGroupRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    standbyReplicas: S.String,
    description: S.optional(S.String),
    tags: S.optional(Tags),
    capacityLimits: S.optional(CollectionGroupCapacityLimits),
    generation: S.optional(S.String),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "CreateCollectionGroupRequest",
}) as any as S.Schema<CreateCollectionGroupRequest>;
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
const CreateCollectionGroupDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    arn: S.optional(S.String),
    name: S.optional(S.String),
    standbyReplicas: S.optional(S.String),
    description: S.optional(S.String),
    tags: S.optional(Tags),
    createdDate: S.optional(S.Number),
    capacityLimits: S.optional(CollectionGroupCapacityLimits),
    generation: S.optional(S.String),
  }),
).annotate({
  identifier: "CreateCollectionGroupDetail",
}) as any as S.Schema<CreateCollectionGroupDetail>;
export interface CreateCollectionGroupResponse {
  createCollectionGroupDetail?: CreateCollectionGroupDetail;
}
const CreateCollectionGroupResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ createCollectionGroupDetail: S.optional(CreateCollectionGroupDetail) }),
).annotate({
  identifier: "CreateCollectionGroupResponse",
}) as any as S.Schema<CreateCollectionGroupResponse>;
export type IndexName = string;
export type IndexSchema = unknown;
export interface CreateIndexRequest {
  id: string;
  indexName: string;
  indexSchema?: any;
}
const CreateIndexRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String, indexName: S.String, indexSchema: S.optional(S.Any) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "CreateIndexRequest" }) as any as S.Schema<CreateIndexRequest>;
export interface CreateIndexResponse {}
const CreateIndexResponse = /*@__PURE__*/ S.suspend(() => S.Struct({})).annotate({
  identifier: "CreateIndexResponse",
}) as any as S.Schema<CreateIndexResponse>;
export interface CreateLifecyclePolicyRequest {
  type: string;
  name: string;
  description?: string;
  policy: string;
  clientToken?: string;
}
const CreateLifecyclePolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.String,
    name: S.String,
    description: S.optional(S.String),
    policy: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "CreateLifecyclePolicyRequest",
}) as any as S.Schema<CreateLifecyclePolicyRequest>;
export interface CreateLifecyclePolicyResponse {
  lifecyclePolicyDetail?: LifecyclePolicyDetail;
}
const CreateLifecyclePolicyResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ lifecyclePolicyDetail: S.optional(LifecyclePolicyDetail) }),
).annotate({
  identifier: "CreateLifecyclePolicyResponse",
}) as any as S.Schema<CreateLifecyclePolicyResponse>;
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
const SamlConfigOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    metadata: S.String,
    userAttribute: S.optional(S.String),
    groupAttribute: S.optional(S.String),
    openSearchServerlessEntityId: S.optional(S.String),
    sessionTimeout: S.optional(S.Number),
  }),
).annotate({ identifier: "SamlConfigOptions" }) as any as S.Schema<SamlConfigOptions>;
export type IamIdentityCenterInstanceArn = string;
export type IamIdentityCenterUserAttribute = string;
export type IamIdentityCenterGroupAttribute = string;
export interface CreateIamIdentityCenterConfigOptions {
  instanceArn: string;
  userAttribute?: string;
  groupAttribute?: string;
}
const CreateIamIdentityCenterConfigOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    instanceArn: S.String,
    userAttribute: S.optional(S.String),
    groupAttribute: S.optional(S.String),
  }),
).annotate({
  identifier: "CreateIamIdentityCenterConfigOptions",
}) as any as S.Schema<CreateIamIdentityCenterConfigOptions>;
export type IamFederationGroupAttribute = string;
export type IamFederationUserAttribute = string;
export interface IamFederationConfigOptions {
  groupAttribute?: string;
  userAttribute?: string;
}
const IamFederationConfigOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ groupAttribute: S.optional(S.String), userAttribute: S.optional(S.String) }),
).annotate({
  identifier: "IamFederationConfigOptions",
}) as any as S.Schema<IamFederationConfigOptions>;
export interface CreateSecurityConfigRequest {
  type: string;
  name: string;
  description?: string;
  samlOptions?: SamlConfigOptions;
  iamIdentityCenterOptions?: CreateIamIdentityCenterConfigOptions;
  iamFederationOptions?: IamFederationConfigOptions;
  clientToken?: string;
}
const CreateSecurityConfigRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.String,
    name: S.String,
    description: S.optional(S.String),
    samlOptions: S.optional(SamlConfigOptions),
    iamIdentityCenterOptions: S.optional(CreateIamIdentityCenterConfigOptions),
    iamFederationOptions: S.optional(IamFederationConfigOptions),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "CreateSecurityConfigRequest",
}) as any as S.Schema<CreateSecurityConfigRequest>;
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
const IamIdentityCenterConfigOptions = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<IamIdentityCenterConfigOptions>;
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
const SecurityConfigDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    type: S.optional(S.String),
    configVersion: S.optional(S.String),
    description: S.optional(S.String),
    samlOptions: S.optional(SamlConfigOptions),
    iamIdentityCenterOptions: S.optional(IamIdentityCenterConfigOptions),
    iamFederationOptions: S.optional(IamFederationConfigOptions),
    createdDate: S.optional(S.Number),
    lastModifiedDate: S.optional(S.Number),
  }),
).annotate({ identifier: "SecurityConfigDetail" }) as any as S.Schema<SecurityConfigDetail>;
export interface CreateSecurityConfigResponse {
  securityConfigDetail?: SecurityConfigDetail;
}
const CreateSecurityConfigResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ securityConfigDetail: S.optional(SecurityConfigDetail) }),
).annotate({
  identifier: "CreateSecurityConfigResponse",
}) as any as S.Schema<CreateSecurityConfigResponse>;
export type SecurityPolicyType = string;
export interface CreateSecurityPolicyRequest {
  type: string;
  name: string;
  description?: string;
  policy: string;
  clientToken?: string;
}
const CreateSecurityPolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.String,
    name: S.String,
    description: S.optional(S.String),
    policy: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "CreateSecurityPolicyRequest",
}) as any as S.Schema<CreateSecurityPolicyRequest>;
export interface SecurityPolicyDetail {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  policy?: any;
  createdDate?: number;
  lastModifiedDate?: number;
}
const SecurityPolicyDetail = LifecyclePolicyDetail as any as S.Schema<SecurityPolicyDetail>;
export interface CreateSecurityPolicyResponse {
  securityPolicyDetail?: SecurityPolicyDetail;
}
const CreateSecurityPolicyResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ securityPolicyDetail: S.optional(SecurityPolicyDetail) }),
).annotate({
  identifier: "CreateSecurityPolicyResponse",
}) as any as S.Schema<CreateSecurityPolicyResponse>;
export interface CreateVpcEndpointRequest {
  name: string;
  vpcId: string;
  subnetIds: string[];
  securityGroupIds?: string[];
  clientToken?: string;
}
const CreateVpcEndpointRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    vpcId: S.String,
    subnetIds: SubnetIds,
    securityGroupIds: S.optional(SecurityGroupIds),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "CreateVpcEndpointRequest" }) as any as S.Schema<CreateVpcEndpointRequest>;
export interface CreateVpcEndpointDetail {
  id?: string;
  name?: string;
  status?: string;
}
const CreateVpcEndpointDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.optional(S.String), name: S.optional(S.String), status: S.optional(S.String) }),
).annotate({ identifier: "CreateVpcEndpointDetail" }) as any as S.Schema<CreateVpcEndpointDetail>;
export interface CreateVpcEndpointResponse {
  createVpcEndpointDetail?: CreateVpcEndpointDetail;
}
const CreateVpcEndpointResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ createVpcEndpointDetail: S.optional(CreateVpcEndpointDetail) }),
).annotate({
  identifier: "CreateVpcEndpointResponse",
}) as any as S.Schema<CreateVpcEndpointResponse>;
export interface DeleteAccessPolicyRequest {
  type: string;
  name: string;
  clientToken?: string;
}
const DeleteAccessPolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.String,
    name: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "DeleteAccessPolicyRequest",
}) as any as S.Schema<DeleteAccessPolicyRequest>;
export interface DeleteAccessPolicyResponse {}
const DeleteAccessPolicyResponse =
  CreateIndexResponse as any as S.Schema<DeleteAccessPolicyResponse>;
export interface DeleteCollectionRequest {
  id: string;
  clientToken?: string;
}
const DeleteCollectionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String, clientToken: S.optional(S.String).pipe(T.IdempotencyToken()) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "DeleteCollectionRequest" }) as any as S.Schema<DeleteCollectionRequest>;
export interface DeleteCollectionDetail {
  id?: string;
  name?: string;
  status?: string;
  deletionProtection?: string;
}
const DeleteCollectionDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    name: S.optional(S.String),
    status: S.optional(S.String),
    deletionProtection: S.optional(S.String),
  }),
).annotate({ identifier: "DeleteCollectionDetail" }) as any as S.Schema<DeleteCollectionDetail>;
export interface DeleteCollectionResponse {
  deleteCollectionDetail?: DeleteCollectionDetail;
}
const DeleteCollectionResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ deleteCollectionDetail: S.optional(DeleteCollectionDetail) }),
).annotate({ identifier: "DeleteCollectionResponse" }) as any as S.Schema<DeleteCollectionResponse>;
export interface DeleteCollectionGroupRequest {
  id: string;
  clientToken?: string;
}
const DeleteCollectionGroupRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String, clientToken: S.optional(S.String).pipe(T.IdempotencyToken()) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "DeleteCollectionGroupRequest",
}) as any as S.Schema<DeleteCollectionGroupRequest>;
export interface DeleteCollectionGroupResponse {}
const DeleteCollectionGroupResponse =
  CreateIndexResponse as any as S.Schema<DeleteCollectionGroupResponse>;
export interface DeleteIndexRequest {
  id: string;
  indexName: string;
}
const DeleteIndexRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String, indexName: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "DeleteIndexRequest" }) as any as S.Schema<DeleteIndexRequest>;
export interface DeleteIndexResponse {}
const DeleteIndexResponse = CreateIndexResponse as any as S.Schema<DeleteIndexResponse>;
export interface DeleteLifecyclePolicyRequest {
  type: string;
  name: string;
  clientToken?: string;
}
const DeleteLifecyclePolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.String,
    name: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "DeleteLifecyclePolicyRequest",
}) as any as S.Schema<DeleteLifecyclePolicyRequest>;
export interface DeleteLifecyclePolicyResponse {}
const DeleteLifecyclePolicyResponse =
  CreateIndexResponse as any as S.Schema<DeleteLifecyclePolicyResponse>;
export interface DeleteSecurityConfigRequest {
  id: string;
  clientToken?: string;
}
const DeleteSecurityConfigRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String, clientToken: S.optional(S.String).pipe(T.IdempotencyToken()) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "DeleteSecurityConfigRequest",
}) as any as S.Schema<DeleteSecurityConfigRequest>;
export interface DeleteSecurityConfigResponse {}
const DeleteSecurityConfigResponse =
  CreateIndexResponse as any as S.Schema<DeleteSecurityConfigResponse>;
export interface DeleteSecurityPolicyRequest {
  type: string;
  name: string;
  clientToken?: string;
}
const DeleteSecurityPolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.String,
    name: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "DeleteSecurityPolicyRequest",
}) as any as S.Schema<DeleteSecurityPolicyRequest>;
export interface DeleteSecurityPolicyResponse {}
const DeleteSecurityPolicyResponse =
  CreateIndexResponse as any as S.Schema<DeleteSecurityPolicyResponse>;
export interface DeleteVpcEndpointRequest {
  id: string;
  clientToken?: string;
}
const DeleteVpcEndpointRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String, clientToken: S.optional(S.String).pipe(T.IdempotencyToken()) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "DeleteVpcEndpointRequest" }) as any as S.Schema<DeleteVpcEndpointRequest>;
export interface DeleteVpcEndpointDetail {
  id?: string;
  name?: string;
  status?: string;
}
const DeleteVpcEndpointDetail = CreateVpcEndpointDetail as any as S.Schema<DeleteVpcEndpointDetail>;
export interface DeleteVpcEndpointResponse {
  deleteVpcEndpointDetail?: DeleteVpcEndpointDetail;
}
const DeleteVpcEndpointResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ deleteVpcEndpointDetail: S.optional(DeleteVpcEndpointDetail) }),
).annotate({
  identifier: "DeleteVpcEndpointResponse",
}) as any as S.Schema<DeleteVpcEndpointResponse>;
export interface GetAccessPolicyRequest {
  type: string;
  name: string;
}
const GetAccessPolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ type: S.String, name: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetAccessPolicyRequest" }) as any as S.Schema<GetAccessPolicyRequest>;
export interface GetAccessPolicyResponse {
  accessPolicyDetail?: AccessPolicyDetail;
}
const GetAccessPolicyResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accessPolicyDetail: S.optional(AccessPolicyDetail) }),
).annotate({ identifier: "GetAccessPolicyResponse" }) as any as S.Schema<GetAccessPolicyResponse>;
export interface GetAccountSettingsRequest {}
const GetAccountSettingsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({}).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "GetAccountSettingsRequest",
}) as any as S.Schema<GetAccountSettingsRequest>;
export type IndexingCapacityValue = number;
export type SearchCapacityValue = number;
export interface CapacityLimits {
  maxIndexingCapacityInOCU?: number;
  maxSearchCapacityInOCU?: number;
}
const CapacityLimits = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    maxIndexingCapacityInOCU: S.optional(S.Number),
    maxSearchCapacityInOCU: S.optional(S.Number),
  }),
).annotate({ identifier: "CapacityLimits" }) as any as S.Schema<CapacityLimits>;
export interface AccountSettingsDetail {
  capacityLimits?: CapacityLimits;
}
const AccountSettingsDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ capacityLimits: S.optional(CapacityLimits) }),
).annotate({ identifier: "AccountSettingsDetail" }) as any as S.Schema<AccountSettingsDetail>;
export interface GetAccountSettingsResponse {
  accountSettingsDetail?: AccountSettingsDetail;
}
const GetAccountSettingsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountSettingsDetail: S.optional(AccountSettingsDetail) }),
).annotate({
  identifier: "GetAccountSettingsResponse",
}) as any as S.Schema<GetAccountSettingsResponse>;
export interface GetIndexRequest {
  id: string;
  indexName: string;
}
const GetIndexRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String, indexName: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetIndexRequest" }) as any as S.Schema<GetIndexRequest>;
export interface GetIndexResponse {
  indexSchema?: any;
}
const GetIndexResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ indexSchema: S.optional(S.Any) }),
).annotate({ identifier: "GetIndexResponse" }) as any as S.Schema<GetIndexResponse>;
export interface GetPoliciesStatsRequest {}
const GetPoliciesStatsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({}).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "GetPoliciesStatsRequest" }) as any as S.Schema<GetPoliciesStatsRequest>;
export interface AccessPolicyStats {
  DataPolicyCount?: number;
}
const AccessPolicyStats = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DataPolicyCount: S.optional(S.Number) }),
).annotate({ identifier: "AccessPolicyStats" }) as any as S.Schema<AccessPolicyStats>;
export interface SecurityPolicyStats {
  EncryptionPolicyCount?: number;
  NetworkPolicyCount?: number;
}
const SecurityPolicyStats = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    EncryptionPolicyCount: S.optional(S.Number),
    NetworkPolicyCount: S.optional(S.Number),
  }),
).annotate({ identifier: "SecurityPolicyStats" }) as any as S.Schema<SecurityPolicyStats>;
export interface SecurityConfigStats {
  SamlConfigCount?: number;
}
const SecurityConfigStats = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ SamlConfigCount: S.optional(S.Number) }),
).annotate({ identifier: "SecurityConfigStats" }) as any as S.Schema<SecurityConfigStats>;
export interface LifecyclePolicyStats {
  RetentionPolicyCount?: number;
}
const LifecyclePolicyStats = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ RetentionPolicyCount: S.optional(S.Number) }),
).annotate({ identifier: "LifecyclePolicyStats" }) as any as S.Schema<LifecyclePolicyStats>;
export interface GetPoliciesStatsResponse {
  AccessPolicyStats?: AccessPolicyStats;
  SecurityPolicyStats?: SecurityPolicyStats;
  SecurityConfigStats?: SecurityConfigStats;
  LifecyclePolicyStats?: LifecyclePolicyStats;
  TotalPolicyCount?: number;
}
const GetPoliciesStatsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AccessPolicyStats: S.optional(AccessPolicyStats),
    SecurityPolicyStats: S.optional(SecurityPolicyStats),
    SecurityConfigStats: S.optional(SecurityConfigStats),
    LifecyclePolicyStats: S.optional(LifecyclePolicyStats),
    TotalPolicyCount: S.optional(S.Number),
  }),
).annotate({ identifier: "GetPoliciesStatsResponse" }) as any as S.Schema<GetPoliciesStatsResponse>;
export interface GetSecurityConfigRequest {
  id: string;
}
const GetSecurityConfigRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetSecurityConfigRequest" }) as any as S.Schema<GetSecurityConfigRequest>;
export interface GetSecurityConfigResponse {
  securityConfigDetail?: SecurityConfigDetail;
}
const GetSecurityConfigResponse =
  CreateSecurityConfigResponse as any as S.Schema<GetSecurityConfigResponse>;
export interface GetSecurityPolicyRequest {
  type: string;
  name: string;
}
const GetSecurityPolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ type: S.String, name: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetSecurityPolicyRequest" }) as any as S.Schema<GetSecurityPolicyRequest>;
export interface GetSecurityPolicyResponse {
  securityPolicyDetail?: SecurityPolicyDetail;
}
const GetSecurityPolicyResponse =
  CreateSecurityPolicyResponse as any as S.Schema<GetSecurityPolicyResponse>;
export type ResourceFilter = string[];
const ResourceFilter = CollectionIds as any as S.Schema<ResourceFilter>;
export interface ListAccessPoliciesRequest {
  type: string;
  resource?: string[];
  nextToken?: string;
  maxResults?: number;
}
const ListAccessPoliciesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.String,
    resource: S.optional(ResourceFilter),
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "ListAccessPoliciesRequest",
}) as any as S.Schema<ListAccessPoliciesRequest>;
export interface AccessPolicySummary {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  createdDate?: number;
  lastModifiedDate?: number;
}
const AccessPolicySummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.optional(S.String),
    name: S.optional(S.String),
    policyVersion: S.optional(S.String),
    description: S.optional(S.String),
    createdDate: S.optional(S.Number),
    lastModifiedDate: S.optional(S.Number),
  }),
).annotate({ identifier: "AccessPolicySummary" }) as any as S.Schema<AccessPolicySummary>;
export type AccessPolicySummaries = AccessPolicySummary[];
const AccessPolicySummaries = /*@__PURE__*/ S.Array(AccessPolicySummary);
export interface ListAccessPoliciesResponse {
  accessPolicySummaries?: AccessPolicySummary[];
  nextToken?: string;
}
const ListAccessPoliciesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accessPolicySummaries: S.optional(AccessPolicySummaries),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListAccessPoliciesResponse",
}) as any as S.Schema<ListAccessPoliciesResponse>;
export interface ListCollectionGroupsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListCollectionGroupsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ListCollectionGroupsRequest",
}) as any as S.Schema<ListCollectionGroupsRequest>;
export interface CollectionGroupSummary {
  id?: string;
  arn?: string;
  name?: string;
  numberOfCollections?: number;
  createdDate?: number;
  capacityLimits?: CollectionGroupCapacityLimits;
  generation?: string;
}
const CollectionGroupSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    arn: S.optional(S.String),
    name: S.optional(S.String),
    numberOfCollections: S.optional(S.Number),
    createdDate: S.optional(S.Number),
    capacityLimits: S.optional(CollectionGroupCapacityLimits),
    generation: S.optional(S.String),
  }),
).annotate({ identifier: "CollectionGroupSummary" }) as any as S.Schema<CollectionGroupSummary>;
export type CollectionGroupSummaries = CollectionGroupSummary[];
const CollectionGroupSummaries = /*@__PURE__*/ S.Array(CollectionGroupSummary);
export interface ListCollectionGroupsResponse {
  collectionGroupSummaries?: CollectionGroupSummary[];
  nextToken?: string;
}
const ListCollectionGroupsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    collectionGroupSummaries: S.optional(CollectionGroupSummaries),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListCollectionGroupsResponse",
}) as any as S.Schema<ListCollectionGroupsResponse>;
export interface CollectionFilters {
  name?: string;
  status?: string;
  collectionGroupName?: string;
}
const CollectionFilters = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.optional(S.String),
    status: S.optional(S.String),
    collectionGroupName: S.optional(S.String),
  }),
).annotate({ identifier: "CollectionFilters" }) as any as S.Schema<CollectionFilters>;
export interface ListCollectionsRequest {
  collectionFilters?: CollectionFilters;
  nextToken?: string;
  maxResults?: number;
}
const ListCollectionsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    collectionFilters: S.optional(CollectionFilters),
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListCollectionsRequest" }) as any as S.Schema<ListCollectionsRequest>;
export interface CollectionSummary {
  id?: string;
  name?: string;
  status?: string;
  arn?: string;
  kmsKeyArn?: string;
  collectionGroupName?: string;
}
const CollectionSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    name: S.optional(S.String),
    status: S.optional(S.String),
    arn: S.optional(S.String),
    kmsKeyArn: S.optional(S.String),
    collectionGroupName: S.optional(S.String),
  }),
).annotate({ identifier: "CollectionSummary" }) as any as S.Schema<CollectionSummary>;
export type CollectionSummaries = CollectionSummary[];
const CollectionSummaries = /*@__PURE__*/ S.Array(CollectionSummary);
export interface ListCollectionsResponse {
  collectionSummaries?: CollectionSummary[];
  nextToken?: string;
}
const ListCollectionsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    collectionSummaries: S.optional(CollectionSummaries),
    nextToken: S.optional(S.String),
  }),
).annotate({ identifier: "ListCollectionsResponse" }) as any as S.Schema<ListCollectionsResponse>;
export type LifecycleResource = string;
export type LifecycleResourceFilter = string[];
const LifecycleResourceFilter = CollectionIds as any as S.Schema<LifecycleResourceFilter>;
export interface ListLifecyclePoliciesRequest {
  type: string;
  resources?: string[];
  nextToken?: string;
  maxResults?: number;
}
const ListLifecyclePoliciesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.String,
    resources: S.optional(LifecycleResourceFilter),
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "ListLifecyclePoliciesRequest",
}) as any as S.Schema<ListLifecyclePoliciesRequest>;
export interface LifecyclePolicySummary {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  createdDate?: number;
  lastModifiedDate?: number;
}
export type LifecyclePolicySummaries = LifecyclePolicySummary[];
const LifecyclePolicySummaries = AccessPolicySummaries as any as S.Schema<LifecyclePolicySummaries>;
export interface ListLifecyclePoliciesResponse {
  lifecyclePolicySummaries?: LifecyclePolicySummary[];
  nextToken?: string;
}
const ListLifecyclePoliciesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    lifecyclePolicySummaries: S.optional(LifecyclePolicySummaries),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListLifecyclePoliciesResponse",
}) as any as S.Schema<ListLifecyclePoliciesResponse>;
export interface ListSecurityConfigsRequest {
  type: string;
  nextToken?: string;
  maxResults?: number;
}
const ListSecurityConfigsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.String,
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "ListSecurityConfigsRequest",
}) as any as S.Schema<ListSecurityConfigsRequest>;
export interface SecurityConfigSummary {
  id?: string;
  type?: string;
  configVersion?: string;
  description?: string;
  createdDate?: number;
  lastModifiedDate?: number;
}
const SecurityConfigSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    type: S.optional(S.String),
    configVersion: S.optional(S.String),
    description: S.optional(S.String),
    createdDate: S.optional(S.Number),
    lastModifiedDate: S.optional(S.Number),
  }),
).annotate({ identifier: "SecurityConfigSummary" }) as any as S.Schema<SecurityConfigSummary>;
export type SecurityConfigSummaries = SecurityConfigSummary[];
const SecurityConfigSummaries = /*@__PURE__*/ S.Array(SecurityConfigSummary);
export interface ListSecurityConfigsResponse {
  securityConfigSummaries?: SecurityConfigSummary[];
  nextToken?: string;
}
const ListSecurityConfigsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    securityConfigSummaries: S.optional(SecurityConfigSummaries),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListSecurityConfigsResponse",
}) as any as S.Schema<ListSecurityConfigsResponse>;
export interface ListSecurityPoliciesRequest {
  type: string;
  resource?: string[];
  nextToken?: string;
  maxResults?: number;
}
const ListSecurityPoliciesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.String,
    resource: S.optional(ResourceFilter),
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "ListSecurityPoliciesRequest",
}) as any as S.Schema<ListSecurityPoliciesRequest>;
export interface SecurityPolicySummary {
  type?: string;
  name?: string;
  policyVersion?: string;
  description?: string;
  createdDate?: number;
  lastModifiedDate?: number;
}
export type SecurityPolicySummaries = SecurityPolicySummary[];
const SecurityPolicySummaries = AccessPolicySummaries as any as S.Schema<SecurityPolicySummaries>;
export interface ListSecurityPoliciesResponse {
  securityPolicySummaries?: SecurityPolicySummary[];
  nextToken?: string;
}
const ListSecurityPoliciesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    securityPolicySummaries: S.optional(SecurityPolicySummaries),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListSecurityPoliciesResponse",
}) as any as S.Schema<ListSecurityPoliciesResponse>;
export type Arn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceArn: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ListTagsForResourceRequest",
}) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ tags: S.optional(Tags) }),
).annotate({
  identifier: "ListTagsForResourceResponse",
}) as any as S.Schema<ListTagsForResourceResponse>;
export interface VpcEndpointFilters {
  status?: string;
}
const VpcEndpointFilters = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ status: S.optional(S.String) }),
).annotate({ identifier: "VpcEndpointFilters" }) as any as S.Schema<VpcEndpointFilters>;
export interface ListVpcEndpointsRequest {
  vpcEndpointFilters?: VpcEndpointFilters;
  nextToken?: string;
  maxResults?: number;
}
const ListVpcEndpointsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    vpcEndpointFilters: S.optional(VpcEndpointFilters),
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListVpcEndpointsRequest" }) as any as S.Schema<ListVpcEndpointsRequest>;
export interface VpcEndpointSummary {
  id?: string;
  name?: string;
  status?: string;
}
const VpcEndpointSummary = CreateVpcEndpointDetail as any as S.Schema<VpcEndpointSummary>;
export type VpcEndpointSummaries = VpcEndpointSummary[];
const VpcEndpointSummaries = /*@__PURE__*/ S.Array(VpcEndpointSummary);
export interface ListVpcEndpointsResponse {
  vpcEndpointSummaries?: VpcEndpointSummary[];
  nextToken?: string;
}
const ListVpcEndpointsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    vpcEndpointSummaries: S.optional(VpcEndpointSummaries),
    nextToken: S.optional(S.String),
  }),
).annotate({ identifier: "ListVpcEndpointsResponse" }) as any as S.Schema<ListVpcEndpointsResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceArn: S.String, tags: Tags }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "TagResourceRequest" }) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = CreateIndexResponse as any as S.Schema<TagResourceResponse>;
export type TagKeys = string[];
const TagKeys = CollectionIds as any as S.Schema<TagKeys>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceArn: S.String, tagKeys: TagKeys }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "UntagResourceRequest" }) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = CreateIndexResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAccessPolicyRequest {
  type: string;
  name: string;
  policyVersion: string;
  description?: string;
  policy?: string;
  clientToken?: string;
}
const UpdateAccessPolicyRequest = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<UpdateAccessPolicyRequest>;
export interface UpdateAccessPolicyResponse {
  accessPolicyDetail?: AccessPolicyDetail;
}
const UpdateAccessPolicyResponse =
  CreateAccessPolicyResponse as any as S.Schema<UpdateAccessPolicyResponse>;
export interface UpdateAccountSettingsRequest {
  capacityLimits?: CapacityLimits;
}
const UpdateAccountSettingsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ capacityLimits: S.optional(CapacityLimits) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "UpdateAccountSettingsRequest",
}) as any as S.Schema<UpdateAccountSettingsRequest>;
export interface UpdateAccountSettingsResponse {
  accountSettingsDetail?: AccountSettingsDetail;
}
const UpdateAccountSettingsResponse =
  GetAccountSettingsResponse as any as S.Schema<UpdateAccountSettingsResponse>;
export interface UpdateCollectionRequest {
  id: string;
  description?: string;
  vectorOptions?: VectorOptions;
  deletionProtection?: string;
  clientToken?: string;
}
const UpdateCollectionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String,
    description: S.optional(S.String),
    vectorOptions: S.optional(VectorOptions),
    deletionProtection: S.optional(S.String),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "UpdateCollectionRequest" }) as any as S.Schema<UpdateCollectionRequest>;
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
const UpdateCollectionDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    name: S.optional(S.String),
    status: S.optional(S.String),
    type: S.optional(S.String),
    description: S.optional(S.String),
    vectorOptions: S.optional(VectorOptions),
    arn: S.optional(S.String),
    createdDate: S.optional(S.Number),
    lastModifiedDate: S.optional(S.Number),
    deletionProtection: S.optional(S.String),
  }),
).annotate({ identifier: "UpdateCollectionDetail" }) as any as S.Schema<UpdateCollectionDetail>;
export interface UpdateCollectionResponse {
  updateCollectionDetail?: UpdateCollectionDetail;
}
const UpdateCollectionResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ updateCollectionDetail: S.optional(UpdateCollectionDetail) }),
).annotate({ identifier: "UpdateCollectionResponse" }) as any as S.Schema<UpdateCollectionResponse>;
export interface UpdateCollectionGroupRequest {
  id: string;
  description?: string;
  capacityLimits?: CollectionGroupCapacityLimits;
  clientToken?: string;
}
const UpdateCollectionGroupRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String,
    description: S.optional(S.String),
    capacityLimits: S.optional(CollectionGroupCapacityLimits),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "UpdateCollectionGroupRequest",
}) as any as S.Schema<UpdateCollectionGroupRequest>;
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
const UpdateCollectionGroupDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    arn: S.optional(S.String),
    name: S.optional(S.String),
    description: S.optional(S.String),
    capacityLimits: S.optional(CollectionGroupCapacityLimits),
    createdDate: S.optional(S.Number),
    lastModifiedDate: S.optional(S.Number),
    generation: S.optional(S.String),
  }),
).annotate({
  identifier: "UpdateCollectionGroupDetail",
}) as any as S.Schema<UpdateCollectionGroupDetail>;
export interface UpdateCollectionGroupResponse {
  updateCollectionGroupDetail?: UpdateCollectionGroupDetail;
}
const UpdateCollectionGroupResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ updateCollectionGroupDetail: S.optional(UpdateCollectionGroupDetail) }),
).annotate({
  identifier: "UpdateCollectionGroupResponse",
}) as any as S.Schema<UpdateCollectionGroupResponse>;
export interface UpdateIndexRequest {
  id: string;
  indexName: string;
  indexSchema?: any;
}
const UpdateIndexRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String, indexName: S.String, indexSchema: S.optional(S.Any) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "UpdateIndexRequest" }) as any as S.Schema<UpdateIndexRequest>;
export interface UpdateIndexResponse {}
const UpdateIndexResponse = CreateIndexResponse as any as S.Schema<UpdateIndexResponse>;
export interface UpdateLifecyclePolicyRequest {
  type: string;
  name: string;
  policyVersion: string;
  description?: string;
  policy?: string;
  clientToken?: string;
}
const UpdateLifecyclePolicyRequest = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<UpdateLifecyclePolicyRequest>;
export interface UpdateLifecyclePolicyResponse {
  lifecyclePolicyDetail?: LifecyclePolicyDetail;
}
const UpdateLifecyclePolicyResponse =
  CreateLifecyclePolicyResponse as any as S.Schema<UpdateLifecyclePolicyResponse>;
export interface UpdateIamIdentityCenterConfigOptions {
  userAttribute?: string;
  groupAttribute?: string;
}
const UpdateIamIdentityCenterConfigOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ userAttribute: S.optional(S.String), groupAttribute: S.optional(S.String) }),
).annotate({
  identifier: "UpdateIamIdentityCenterConfigOptions",
}) as any as S.Schema<UpdateIamIdentityCenterConfigOptions>;
export interface UpdateSecurityConfigRequest {
  id: string;
  configVersion: string;
  description?: string;
  samlOptions?: SamlConfigOptions;
  iamIdentityCenterOptionsUpdates?: UpdateIamIdentityCenterConfigOptions;
  iamFederationOptions?: IamFederationConfigOptions;
  clientToken?: string;
}
const UpdateSecurityConfigRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String,
    configVersion: S.String,
    description: S.optional(S.String),
    samlOptions: S.optional(SamlConfigOptions),
    iamIdentityCenterOptionsUpdates: S.optional(UpdateIamIdentityCenterConfigOptions),
    iamFederationOptions: S.optional(IamFederationConfigOptions),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "UpdateSecurityConfigRequest",
}) as any as S.Schema<UpdateSecurityConfigRequest>;
export interface UpdateSecurityConfigResponse {
  securityConfigDetail?: SecurityConfigDetail;
}
const UpdateSecurityConfigResponse =
  CreateSecurityConfigResponse as any as S.Schema<UpdateSecurityConfigResponse>;
export interface UpdateSecurityPolicyRequest {
  type: string;
  name: string;
  policyVersion: string;
  description?: string;
  policy?: string;
  clientToken?: string;
}
const UpdateSecurityPolicyRequest = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<UpdateSecurityPolicyRequest>;
export interface UpdateSecurityPolicyResponse {
  securityPolicyDetail?: SecurityPolicyDetail;
}
const UpdateSecurityPolicyResponse =
  CreateSecurityPolicyResponse as any as S.Schema<UpdateSecurityPolicyResponse>;
export interface UpdateVpcEndpointRequest {
  id: string;
  addSubnetIds?: string[];
  removeSubnetIds?: string[];
  addSecurityGroupIds?: string[];
  removeSecurityGroupIds?: string[];
  clientToken?: string;
}
const UpdateVpcEndpointRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String,
    addSubnetIds: S.optional(SubnetIds),
    removeSubnetIds: S.optional(SubnetIds),
    addSecurityGroupIds: S.optional(SecurityGroupIds),
    removeSecurityGroupIds: S.optional(SecurityGroupIds),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "UpdateVpcEndpointRequest" }) as any as S.Schema<UpdateVpcEndpointRequest>;
export interface UpdateVpcEndpointDetail {
  id?: string;
  name?: string;
  status?: string;
  subnetIds?: string[];
  securityGroupIds?: string[];
  lastModifiedDate?: number;
}
const UpdateVpcEndpointDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    name: S.optional(S.String),
    status: S.optional(S.String),
    subnetIds: S.optional(SubnetIds),
    securityGroupIds: S.optional(SecurityGroupIds),
    lastModifiedDate: S.optional(S.Number),
  }),
).annotate({ identifier: "UpdateVpcEndpointDetail" }) as any as S.Schema<UpdateVpcEndpointDetail>;
export interface UpdateVpcEndpointResponse {
  UpdateVpcEndpointDetail?: UpdateVpcEndpointDetail;
}
const UpdateVpcEndpointResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ UpdateVpcEndpointDetail: S.optional(UpdateVpcEndpointDetail) }),
).annotate({
  identifier: "UpdateVpcEndpointResponse",
}) as any as S.Schema<UpdateVpcEndpointResponse>;
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
  input: BatchGetCollectionRequest,
  output: BatchGetCollectionResponse,
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
  input: BatchGetCollectionGroupRequest,
  output: BatchGetCollectionGroupResponse,
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
  input: BatchGetEffectiveLifecyclePolicyRequest,
  output: BatchGetEffectiveLifecyclePolicyResponse,
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
  input: BatchGetLifecyclePolicyRequest,
  output: BatchGetLifecyclePolicyResponse,
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
  input: BatchGetVpcEndpointRequest,
  output: BatchGetVpcEndpointResponse,
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
  input: CreateAccessPolicyRequest,
  output: CreateAccessPolicyResponse,
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
  input: CreateCollectionRequest,
  output: CreateCollectionResponse,
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
  input: CreateCollectionGroupRequest,
  output: CreateCollectionGroupResponse,
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
  input: CreateIndexRequest,
  output: CreateIndexResponse,
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
  input: CreateLifecyclePolicyRequest,
  output: CreateLifecyclePolicyResponse,
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
  input: CreateSecurityConfigRequest,
  output: CreateSecurityConfigResponse,
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
  input: CreateSecurityPolicyRequest,
  output: CreateSecurityPolicyResponse,
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
  input: CreateVpcEndpointRequest,
  output: CreateVpcEndpointResponse,
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
  input: DeleteAccessPolicyRequest,
  output: DeleteAccessPolicyResponse,
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
  input: DeleteCollectionRequest,
  output: DeleteCollectionResponse,
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
  input: DeleteCollectionGroupRequest,
  output: DeleteCollectionGroupResponse,
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
  input: DeleteIndexRequest,
  output: DeleteIndexResponse,
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
  input: DeleteLifecyclePolicyRequest,
  output: DeleteLifecyclePolicyResponse,
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
  input: DeleteSecurityConfigRequest,
  output: DeleteSecurityConfigResponse,
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
  input: DeleteSecurityPolicyRequest,
  output: DeleteSecurityPolicyResponse,
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
  input: DeleteVpcEndpointRequest,
  output: DeleteVpcEndpointResponse,
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
  input: GetAccessPolicyRequest,
  output: GetAccessPolicyResponse,
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
  input: GetAccountSettingsRequest,
  output: GetAccountSettingsResponse,
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
  input: GetIndexRequest,
  output: GetIndexResponse,
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
  input: GetPoliciesStatsRequest,
  output: GetPoliciesStatsResponse,
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
  input: GetSecurityConfigRequest,
  output: GetSecurityConfigResponse,
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
  input: GetSecurityPolicyRequest,
  output: GetSecurityPolicyResponse,
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
  input: ListAccessPoliciesRequest,
  output: ListAccessPoliciesResponse,
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
  input: ListCollectionGroupsRequest,
  output: ListCollectionGroupsResponse,
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
  input: ListCollectionsRequest,
  output: ListCollectionsResponse,
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
  input: ListLifecyclePoliciesRequest,
  output: ListLifecyclePoliciesResponse,
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
  input: ListSecurityConfigsRequest,
  output: ListSecurityConfigsResponse,
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
  input: ListSecurityPoliciesRequest,
  output: ListSecurityPoliciesResponse,
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
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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
  input: ListVpcEndpointsRequest,
  output: ListVpcEndpointsResponse,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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
  input: UntagResourceRequest,
  output: UntagResourceResponse,
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
  input: UpdateAccessPolicyRequest,
  output: UpdateAccessPolicyResponse,
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
  input: UpdateAccountSettingsRequest,
  output: UpdateAccountSettingsResponse,
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
  input: UpdateCollectionRequest,
  output: UpdateCollectionResponse,
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
  input: UpdateCollectionGroupRequest,
  output: UpdateCollectionGroupResponse,
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
  input: UpdateIndexRequest,
  output: UpdateIndexResponse,
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
  input: UpdateLifecyclePolicyRequest,
  output: UpdateLifecyclePolicyResponse,
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
  input: UpdateSecurityConfigRequest,
  output: UpdateSecurityConfigResponse,
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
  input: UpdateSecurityPolicyRequest,
  output: UpdateSecurityPolicyResponse,
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
  input: UpdateVpcEndpointRequest,
  output: UpdateVpcEndpointResponse,
  errors: [ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVpcEndpoint",
}));
