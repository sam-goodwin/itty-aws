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
const ns = /*@__PURE__*/ T.XmlNamespace(
  "http://elasticloadbalancing.amazonaws.com/doc/2012-06-01/",
);
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Elastic Load Balancing",
  serviceShapeName: "ElasticLoadBalancing_v7",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "elasticloadbalancing" });
const ver = /*@__PURE__*/ T.ServiceVersion("2012-06-01");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsQuery();
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
              `https://elasticloadbalancing-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://elasticloadbalancing.${Region}.amazonaws.com`);
            }
            return e(
              `https://elasticloadbalancing-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://elasticloadbalancing.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://elasticloadbalancing.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessPointNotFoundException
  extends /*@__PURE__*/ S.TaggedError<AccessPointNotFoundException>()(
    "AccessPointNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "LoadBalancerNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class CertificateNotFoundException
  extends /*@__PURE__*/ S.TaggedError<CertificateNotFoundException>()(
    "CertificateNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "CertificateNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DependencyThrottleException
  extends /*@__PURE__*/ S.TaggedError<DependencyThrottleException>()(
    "DependencyThrottleException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DependencyThrottle", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DuplicateAccessPointNameException
  extends /*@__PURE__*/ S.TaggedError<DuplicateAccessPointNameException>()(
    "DuplicateAccessPointNameException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DuplicateLoadBalancerName", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DuplicateListenerException
  extends /*@__PURE__*/ S.TaggedError<DuplicateListenerException>()(
    "DuplicateListenerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DuplicateListener", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DuplicatePolicyNameException
  extends /*@__PURE__*/ S.TaggedError<DuplicatePolicyNameException>()(
    "DuplicatePolicyNameException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DuplicatePolicyName", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DuplicateTagKeysException
  extends /*@__PURE__*/ S.TaggedError<DuplicateTagKeysException>()(
    "DuplicateTagKeysException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DuplicateTagKeys", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidConfigurationRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidConfigurationRequestException>()(
    "InvalidConfigurationRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidConfigurationRequest", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class InvalidEndPointException
  extends /*@__PURE__*/ S.TaggedError<InvalidEndPointException>()(
    "InvalidEndPointException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidInstance", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidSchemeException
  extends /*@__PURE__*/ S.TaggedError<InvalidSchemeException>()(
    "InvalidSchemeException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidScheme", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidSecurityGroupException
  extends /*@__PURE__*/ S.TaggedError<InvalidSecurityGroupException>()(
    "InvalidSecurityGroupException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidSecurityGroup", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidSubnetException
  extends /*@__PURE__*/ S.TaggedError<InvalidSubnetException>()(
    "InvalidSubnetException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidSubnet", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ListenerNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ListenerNotFoundException>()(
    "ListenerNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ListenerNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class LoadBalancerAttributeNotFoundException
  extends /*@__PURE__*/ S.TaggedError<LoadBalancerAttributeNotFoundException>()(
    "LoadBalancerAttributeNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "LoadBalancerAttributeNotFound",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class OperationNotPermittedException
  extends /*@__PURE__*/ S.TaggedError<OperationNotPermittedException>()(
    "OperationNotPermittedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "OperationNotPermitted", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class PolicyNotFoundException
  extends /*@__PURE__*/ S.TaggedError<PolicyNotFoundException>()(
    "PolicyNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "PolicyNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class PolicyTypeNotFoundException
  extends /*@__PURE__*/ S.TaggedError<PolicyTypeNotFoundException>()(
    "PolicyTypeNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "PolicyTypeNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SubnetNotFoundException
  extends /*@__PURE__*/ S.TaggedError<SubnetNotFoundException>()(
    "SubnetNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SubnetNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyAccessPointsException
  extends /*@__PURE__*/ S.TaggedError<TooManyAccessPointsException>()(
    "TooManyAccessPointsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TooManyLoadBalancers", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyPoliciesException
  extends /*@__PURE__*/ S.TaggedError<TooManyPoliciesException>()(
    "TooManyPoliciesException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TooManyPolicies", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TooManyTags", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class UnsupportedProtocolException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedProtocolException>()(
    "UnsupportedProtocolException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "UnsupportedProtocol", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export type AccessPointName = string;
export type LoadBalancerNames = string[];
const LoadBalancerNames = /*@__PURE__*/ __L.at(__c0, 0);
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value?: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c0, 2);
export interface AddTagsInput {
  LoadBalancerNames: string[];
  Tags: Tag[];
}
const AddTagsInput = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<AddTagsInput>;
export interface AddTagsOutput {}
const AddTagsOutput = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<AddTagsOutput>;
export type SecurityGroupId = string;
export type SecurityGroups = string[];
const SecurityGroups = /*@__PURE__*/ __L.at(__c0, 5);
export interface ApplySecurityGroupsToLoadBalancerInput {
  LoadBalancerName: string;
  SecurityGroups: string[];
}
const ApplySecurityGroupsToLoadBalancerInput = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<ApplySecurityGroupsToLoadBalancerInput>;
export interface ApplySecurityGroupsToLoadBalancerOutput {
  SecurityGroups?: string[];
}
const ApplySecurityGroupsToLoadBalancerOutput = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<ApplySecurityGroupsToLoadBalancerOutput>;
export type SubnetId = string;
export type Subnets = string[];
const Subnets = /*@__PURE__*/ __L.at(__c1, 0);
export interface AttachLoadBalancerToSubnetsInput {
  LoadBalancerName: string;
  Subnets: string[];
}
const AttachLoadBalancerToSubnetsInput = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<AttachLoadBalancerToSubnetsInput>;
export interface AttachLoadBalancerToSubnetsOutput {
  Subnets?: string[];
}
const AttachLoadBalancerToSubnetsOutput = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<AttachLoadBalancerToSubnetsOutput>;
export type HealthCheckTarget = string;
export type HealthCheckInterval = number;
export type HealthCheckTimeout = number;
export type UnhealthyThreshold = number;
export type HealthyThreshold = number;
export interface HealthCheck {
  Target: string;
  Interval: number;
  Timeout: number;
  UnhealthyThreshold: number;
  HealthyThreshold: number;
}
const HealthCheck = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<HealthCheck>;
export interface ConfigureHealthCheckInput {
  LoadBalancerName: string;
  HealthCheck: HealthCheck;
}
const ConfigureHealthCheckInput = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<ConfigureHealthCheckInput>;
export interface ConfigureHealthCheckOutput {
  HealthCheck?: HealthCheck;
}
const ConfigureHealthCheckOutput = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<ConfigureHealthCheckOutput>;
export type PolicyName = string;
export type CookieName = string;
export interface CreateAppCookieStickinessPolicyInput {
  LoadBalancerName: string;
  PolicyName: string;
  CookieName: string;
}
const CreateAppCookieStickinessPolicyInput = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CreateAppCookieStickinessPolicyInput>;
export interface CreateAppCookieStickinessPolicyOutput {}
const CreateAppCookieStickinessPolicyOutput = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<CreateAppCookieStickinessPolicyOutput>;
export type CookieExpirationPeriod = number;
export interface CreateLBCookieStickinessPolicyInput {
  LoadBalancerName: string;
  PolicyName: string;
  CookieExpirationPeriod?: number;
}
const CreateLBCookieStickinessPolicyInput = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<CreateLBCookieStickinessPolicyInput>;
export interface CreateLBCookieStickinessPolicyOutput {}
const CreateLBCookieStickinessPolicyOutput = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<CreateLBCookieStickinessPolicyOutput>;
export type Protocol = string;
export type AccessPointPort = number;
export type InstancePort = number;
export type SSLCertificateId = string;
export interface Listener {
  Protocol: string;
  LoadBalancerPort: number;
  InstanceProtocol?: string;
  InstancePort: number;
  SSLCertificateId?: string;
}
const Listener = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<Listener>;
export type Listeners = Listener[];
const Listeners = /*@__PURE__*/ __L.at(__c2, 3);
export type AvailabilityZone = string;
export type AvailabilityZones = string[];
const AvailabilityZones = /*@__PURE__*/ __L.at(__c2, 4);
export type LoadBalancerScheme = string;
export interface CreateAccessPointInput {
  LoadBalancerName: string;
  Listeners: Listener[];
  AvailabilityZones?: string[];
  Subnets?: string[];
  SecurityGroups?: string[];
  Scheme?: string;
  Tags?: Tag[];
}
const CreateAccessPointInput = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<CreateAccessPointInput>;
export type DNSName = string;
export interface CreateAccessPointOutput {
  DNSName?: string;
}
const CreateAccessPointOutput = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<CreateAccessPointOutput>;
export interface CreateLoadBalancerListenerInput {
  LoadBalancerName: string;
  Listeners: Listener[];
}
const CreateLoadBalancerListenerInput = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<CreateLoadBalancerListenerInput>;
export interface CreateLoadBalancerListenerOutput {}
const CreateLoadBalancerListenerOutput = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<CreateLoadBalancerListenerOutput>;
export type PolicyTypeName = string;
export type AttributeName = string;
export type AttributeValue = string;
export interface PolicyAttribute {
  AttributeName?: string;
  AttributeValue?: string;
}
const PolicyAttribute = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<PolicyAttribute>;
export type PolicyAttributes = PolicyAttribute[];
const PolicyAttributes = /*@__PURE__*/ __L.at(__c3, 2);
export interface CreateLoadBalancerPolicyInput {
  LoadBalancerName: string;
  PolicyName: string;
  PolicyTypeName: string;
  PolicyAttributes?: PolicyAttribute[];
}
const CreateLoadBalancerPolicyInput = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<CreateLoadBalancerPolicyInput>;
export interface CreateLoadBalancerPolicyOutput {}
const CreateLoadBalancerPolicyOutput = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<CreateLoadBalancerPolicyOutput>;
export interface DeleteAccessPointInput {
  LoadBalancerName: string;
}
const DeleteAccessPointInput = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<DeleteAccessPointInput>;
export interface DeleteAccessPointOutput {}
const DeleteAccessPointOutput = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<DeleteAccessPointOutput>;
export type Ports = number[];
const Ports = /*@__PURE__*/ __L.at(__c3, 7);
export interface DeleteLoadBalancerListenerInput {
  LoadBalancerName: string;
  LoadBalancerPorts: number[];
}
const DeleteLoadBalancerListenerInput = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<DeleteLoadBalancerListenerInput>;
export interface DeleteLoadBalancerListenerOutput {}
const DeleteLoadBalancerListenerOutput = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<DeleteLoadBalancerListenerOutput>;
export interface DeleteLoadBalancerPolicyInput {
  LoadBalancerName: string;
  PolicyName: string;
}
const DeleteLoadBalancerPolicyInput = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<DeleteLoadBalancerPolicyInput>;
export interface DeleteLoadBalancerPolicyOutput {}
const DeleteLoadBalancerPolicyOutput = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<DeleteLoadBalancerPolicyOutput>;
export type InstanceId = string;
export interface Instance {
  InstanceId?: string;
}
const Instance = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<Instance>;
export type Instances = Instance[];
const Instances = /*@__PURE__*/ __L.at(__c4, 5);
export interface DeregisterEndPointsInput {
  LoadBalancerName: string;
  Instances: Instance[];
}
const DeregisterEndPointsInput = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<DeregisterEndPointsInput>;
export interface DeregisterEndPointsOutput {
  Instances?: Instance[];
}
const DeregisterEndPointsOutput = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<DeregisterEndPointsOutput>;
export type Marker = string;
export type PageSize = number;
export interface DescribeAccountLimitsInput {
  Marker?: string;
  PageSize?: number;
}
const DescribeAccountLimitsInput = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<DescribeAccountLimitsInput>;
export type Name = string;
export type Max = string;
export interface Limit {
  Name?: string;
  Max?: string;
}
const Limit = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<Limit>;
export type Limits = Limit[];
const Limits = /*@__PURE__*/ __L.at(__c5, 2);
export interface DescribeAccountLimitsOutput {
  Limits?: Limit[];
  NextMarker?: string;
}
const DescribeAccountLimitsOutput = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<DescribeAccountLimitsOutput>;
export interface DescribeEndPointStateInput {
  LoadBalancerName: string;
  Instances?: Instance[];
}
const DescribeEndPointStateInput = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<DescribeEndPointStateInput>;
export type State = string;
export type ReasonCode = string;
export type Description = string;
export interface InstanceState {
  InstanceId?: string;
  State?: string;
  ReasonCode?: string;
  Description?: string;
}
const InstanceState = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<InstanceState>;
export type InstanceStates = InstanceState[];
const InstanceStates = /*@__PURE__*/ __L.at(__c5, 6);
export interface DescribeEndPointStateOutput {
  InstanceStates?: InstanceState[];
}
const DescribeEndPointStateOutput = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<DescribeEndPointStateOutput>;
export interface DescribeLoadBalancerAttributesInput {
  LoadBalancerName: string;
}
const DescribeLoadBalancerAttributesInput = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<DescribeLoadBalancerAttributesInput>;
export type CrossZoneLoadBalancingEnabled = boolean;
export interface CrossZoneLoadBalancing {
  Enabled: boolean;
}
const CrossZoneLoadBalancing = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<CrossZoneLoadBalancing>;
export type AccessLogEnabled = boolean;
export type S3BucketName = string;
export type AccessLogInterval = number;
export type AccessLogPrefix = string;
export interface AccessLog {
  Enabled: boolean;
  S3BucketName?: string;
  EmitInterval?: number;
  S3BucketPrefix?: string;
}
const AccessLog = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<AccessLog>;
export type ConnectionDrainingEnabled = boolean;
export type ConnectionDrainingTimeout = number;
export interface ConnectionDraining {
  Enabled: boolean;
  Timeout?: number;
}
const ConnectionDraining = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<ConnectionDraining>;
export type IdleTimeout = number;
export interface ConnectionSettings {
  IdleTimeout: number;
}
const ConnectionSettings = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<ConnectionSettings>;
export type AdditionalAttributeKey = string;
export type AdditionalAttributeValue = string;
export interface AdditionalAttribute {
  Key?: string;
  Value?: string;
}
const AdditionalAttribute = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<AdditionalAttribute>;
export type AdditionalAttributes = AdditionalAttribute[];
const AdditionalAttributes = /*@__PURE__*/ __L.at(__c6, 6);
export interface LoadBalancerAttributes {
  CrossZoneLoadBalancing?: CrossZoneLoadBalancing;
  AccessLog?: AccessLog;
  ConnectionDraining?: ConnectionDraining;
  ConnectionSettings?: ConnectionSettings;
  AdditionalAttributes?: AdditionalAttribute[];
}
const LoadBalancerAttributes = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<LoadBalancerAttributes>;
export interface DescribeLoadBalancerAttributesOutput {
  LoadBalancerAttributes?: LoadBalancerAttributes;
}
const DescribeLoadBalancerAttributesOutput = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DescribeLoadBalancerAttributesOutput>;
export type PolicyNames = string[];
const PolicyNames = /*@__PURE__*/ __L.at(__c7, 1);
export interface DescribeLoadBalancerPoliciesInput {
  LoadBalancerName?: string;
  PolicyNames?: string[];
}
const DescribeLoadBalancerPoliciesInput = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DescribeLoadBalancerPoliciesInput>;
export interface PolicyAttributeDescription {
  AttributeName?: string;
  AttributeValue?: string;
}
const PolicyAttributeDescription = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<PolicyAttributeDescription>;
export type PolicyAttributeDescriptions = PolicyAttributeDescription[];
const PolicyAttributeDescriptions = /*@__PURE__*/ __L.at(__c7, 4);
export interface PolicyDescription {
  PolicyName?: string;
  PolicyTypeName?: string;
  PolicyAttributeDescriptions?: PolicyAttributeDescription[];
}
const PolicyDescription = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<PolicyDescription>;
export type PolicyDescriptions = PolicyDescription[];
const PolicyDescriptions = /*@__PURE__*/ __L.at(__c7, 6);
export interface DescribeLoadBalancerPoliciesOutput {
  PolicyDescriptions?: PolicyDescription[];
}
const DescribeLoadBalancerPoliciesOutput = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DescribeLoadBalancerPoliciesOutput>;
export type PolicyTypeNames = string[];
const PolicyTypeNames = /*@__PURE__*/ __L.at(__c8, 0);
export interface DescribeLoadBalancerPolicyTypesInput {
  PolicyTypeNames?: string[];
}
const DescribeLoadBalancerPolicyTypesInput = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<DescribeLoadBalancerPolicyTypesInput>;
export type AttributeType = string;
export type DefaultValue = string;
export type Cardinality = string;
export interface PolicyAttributeTypeDescription {
  AttributeName?: string;
  AttributeType?: string;
  Description?: string;
  DefaultValue?: string;
  Cardinality?: string;
}
const PolicyAttributeTypeDescription = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<PolicyAttributeTypeDescription>;
export type PolicyAttributeTypeDescriptions = PolicyAttributeTypeDescription[];
const PolicyAttributeTypeDescriptions = /*@__PURE__*/ __L.at(__c8, 3);
export interface PolicyTypeDescription {
  PolicyTypeName?: string;
  Description?: string;
  PolicyAttributeTypeDescriptions?: PolicyAttributeTypeDescription[];
}
const PolicyTypeDescription = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<PolicyTypeDescription>;
export type PolicyTypeDescriptions = PolicyTypeDescription[];
const PolicyTypeDescriptions = /*@__PURE__*/ __L.at(__c8, 5);
export interface DescribeLoadBalancerPolicyTypesOutput {
  PolicyTypeDescriptions?: PolicyTypeDescription[];
}
const DescribeLoadBalancerPolicyTypesOutput = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DescribeLoadBalancerPolicyTypesOutput>;
export interface DescribeAccessPointsInput {
  LoadBalancerNames?: string[];
  Marker?: string;
  PageSize?: number;
}
const DescribeAccessPointsInput = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<DescribeAccessPointsInput>;
export interface ListenerDescription {
  Listener?: Listener;
  PolicyNames?: string[];
}
const ListenerDescription = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<ListenerDescription>;
export type ListenerDescriptions = ListenerDescription[];
const ListenerDescriptions = /*@__PURE__*/ __L.at(__c9, 1);
export interface AppCookieStickinessPolicy {
  PolicyName?: string;
  CookieName?: string;
}
const AppCookieStickinessPolicy = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<AppCookieStickinessPolicy>;
export type AppCookieStickinessPolicies = AppCookieStickinessPolicy[];
const AppCookieStickinessPolicies = /*@__PURE__*/ __L.at(__c9, 3);
export interface LBCookieStickinessPolicy {
  PolicyName?: string;
  CookieExpirationPeriod?: number;
}
const LBCookieStickinessPolicy = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<LBCookieStickinessPolicy>;
export type LBCookieStickinessPolicies = LBCookieStickinessPolicy[];
const LBCookieStickinessPolicies = /*@__PURE__*/ __L.at(__c9, 5);
export interface Policies {
  AppCookieStickinessPolicies?: AppCookieStickinessPolicy[];
  LBCookieStickinessPolicies?: LBCookieStickinessPolicy[];
  OtherPolicies?: string[];
}
const Policies = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<Policies>;
export interface BackendServerDescription {
  InstancePort?: number;
  PolicyNames?: string[];
}
const BackendServerDescription = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<BackendServerDescription>;
export type BackendServerDescriptions = BackendServerDescription[];
const BackendServerDescriptions = /*@__PURE__*/ __L.at(__c10, 0);
export type VPCId = string;
export type SecurityGroupOwnerAlias = string;
export type SecurityGroupName = string;
export interface SourceSecurityGroup {
  OwnerAlias?: string;
  GroupName?: string;
}
const SourceSecurityGroup = /*@__PURE__*/ __L.at(__c10, 1) as any as S.Schema<SourceSecurityGroup>;
export type CreatedTime = Date;
export interface LoadBalancerDescription {
  LoadBalancerName?: string;
  DNSName?: string;
  CanonicalHostedZoneName?: string;
  CanonicalHostedZoneNameID?: string;
  ListenerDescriptions?: ListenerDescription[];
  Policies?: Policies;
  BackendServerDescriptions?: BackendServerDescription[];
  AvailabilityZones?: string[];
  Subnets?: string[];
  VPCId?: string;
  Instances?: Instance[];
  HealthCheck?: HealthCheck;
  SourceSecurityGroup?: SourceSecurityGroup;
  SecurityGroups?: string[];
  CreatedTime?: Date;
  Scheme?: string;
}
const LoadBalancerDescription = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<LoadBalancerDescription>;
export type LoadBalancerDescriptions = LoadBalancerDescription[];
const LoadBalancerDescriptions = /*@__PURE__*/ __L.at(__c10, 3);
export interface DescribeAccessPointsOutput {
  LoadBalancerDescriptions?: LoadBalancerDescription[];
  NextMarker?: string;
}
const DescribeAccessPointsOutput = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<DescribeAccessPointsOutput>;
export type LoadBalancerNamesMax20 = string[];
const LoadBalancerNamesMax20 = /*@__PURE__*/ __L.at(__c10, 5);
export interface DescribeTagsInput {
  LoadBalancerNames: string[];
}
const DescribeTagsInput = /*@__PURE__*/ __L.at(__c10, 6) as any as S.Schema<DescribeTagsInput>;
export interface TagDescription {
  LoadBalancerName?: string;
  Tags?: Tag[];
}
const TagDescription = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<TagDescription>;
export type TagDescriptions = TagDescription[];
const TagDescriptions = /*@__PURE__*/ __L.at(__c11, 0);
export interface DescribeTagsOutput {
  TagDescriptions?: TagDescription[];
}
const DescribeTagsOutput = /*@__PURE__*/ __L.at(__c11, 1) as any as S.Schema<DescribeTagsOutput>;
export interface DetachLoadBalancerFromSubnetsInput {
  LoadBalancerName: string;
  Subnets: string[];
}
const DetachLoadBalancerFromSubnetsInput = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<DetachLoadBalancerFromSubnetsInput>;
export interface DetachLoadBalancerFromSubnetsOutput {
  Subnets?: string[];
}
const DetachLoadBalancerFromSubnetsOutput = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<DetachLoadBalancerFromSubnetsOutput>;
export interface RemoveAvailabilityZonesInput {
  LoadBalancerName: string;
  AvailabilityZones: string[];
}
const RemoveAvailabilityZonesInput = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<RemoveAvailabilityZonesInput>;
export interface RemoveAvailabilityZonesOutput {
  AvailabilityZones?: string[];
}
const RemoveAvailabilityZonesOutput = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<RemoveAvailabilityZonesOutput>;
export interface AddAvailabilityZonesInput {
  LoadBalancerName: string;
  AvailabilityZones: string[];
}
const AddAvailabilityZonesInput = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<AddAvailabilityZonesInput>;
export interface AddAvailabilityZonesOutput {
  AvailabilityZones?: string[];
}
const AddAvailabilityZonesOutput = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<AddAvailabilityZonesOutput>;
export interface ModifyLoadBalancerAttributesInput {
  LoadBalancerName: string;
  LoadBalancerAttributes: LoadBalancerAttributes;
}
const ModifyLoadBalancerAttributesInput = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<ModifyLoadBalancerAttributesInput>;
export interface ModifyLoadBalancerAttributesOutput {
  LoadBalancerName?: string;
  LoadBalancerAttributes?: LoadBalancerAttributes;
}
const ModifyLoadBalancerAttributesOutput = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<ModifyLoadBalancerAttributesOutput>;
export interface RegisterEndPointsInput {
  LoadBalancerName: string;
  Instances: Instance[];
}
const RegisterEndPointsInput = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<RegisterEndPointsInput>;
export interface RegisterEndPointsOutput {
  Instances?: Instance[];
}
const RegisterEndPointsOutput = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<RegisterEndPointsOutput>;
export interface TagKeyOnly {
  Key?: string;
}
const TagKeyOnly = /*@__PURE__*/ __L.at(__c12, 4) as any as S.Schema<TagKeyOnly>;
export type TagKeyList = TagKeyOnly[];
const TagKeyList = /*@__PURE__*/ __L.at(__c12, 5);
export interface RemoveTagsInput {
  LoadBalancerNames: string[];
  Tags: TagKeyOnly[];
}
const RemoveTagsInput = /*@__PURE__*/ __L.at(__c12, 6) as any as S.Schema<RemoveTagsInput>;
export interface RemoveTagsOutput {}
const RemoveTagsOutput = /*@__PURE__*/ __L.at(__c12, 7) as any as S.Schema<RemoveTagsOutput>;
export interface SetLoadBalancerListenerSSLCertificateInput {
  LoadBalancerName: string;
  LoadBalancerPort: number;
  SSLCertificateId: string;
}
const SetLoadBalancerListenerSSLCertificateInput = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<SetLoadBalancerListenerSSLCertificateInput>;
export interface SetLoadBalancerListenerSSLCertificateOutput {}
const SetLoadBalancerListenerSSLCertificateOutput = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<SetLoadBalancerListenerSSLCertificateOutput>;
export type EndPointPort = number;
export interface SetLoadBalancerPoliciesForBackendServerInput {
  LoadBalancerName: string;
  InstancePort: number;
  PolicyNames: string[];
}
const SetLoadBalancerPoliciesForBackendServerInput = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<SetLoadBalancerPoliciesForBackendServerInput>;
export interface SetLoadBalancerPoliciesForBackendServerOutput {}
const SetLoadBalancerPoliciesForBackendServerOutput = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<SetLoadBalancerPoliciesForBackendServerOutput>;
export interface SetLoadBalancerPoliciesOfListenerInput {
  LoadBalancerName: string;
  LoadBalancerPort: number;
  PolicyNames: string[];
}
const SetLoadBalancerPoliciesOfListenerInput = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<SetLoadBalancerPoliciesOfListenerInput>;
export interface SetLoadBalancerPoliciesOfListenerOutput {}
const SetLoadBalancerPoliciesOfListenerOutput = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<SetLoadBalancerPoliciesOfListenerOutput>;
export type ErrorDescription = string;
export type AddTagsError =
  | AccessPointNotFoundException
  | DuplicateTagKeysException
  | TooManyTagsException
  | CommonErrors;
/**
 * Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.
 *
 * Each tag consists of a key and an optional value. If a tag with the same key is already associated
 * with the load balancer, `AddTags` updates its value.
 *
 * For more information, see Tag Your Classic Load Balancer
 * in the *Classic Load Balancers Guide*.
 */
export const addTags: API.OperationMethod<
  AddTagsInput,
  AddTagsOutput,
  AddTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddTagsInput,
  output: AddTagsOutput,
  errors: [AccessPointNotFoundException, DuplicateTagKeysException, TooManyTagsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddTags",
}));

export type ApplySecurityGroupsToLoadBalancerError =
  | AccessPointNotFoundException
  | InvalidConfigurationRequestException
  | InvalidSecurityGroupException
  | CommonErrors;
/**
 * Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.
 *
 * For more information, see Security Groups for Load Balancers in a VPC
 * in the *Classic Load Balancers Guide*.
 */
export const applySecurityGroupsToLoadBalancer: API.OperationMethod<
  ApplySecurityGroupsToLoadBalancerInput,
  ApplySecurityGroupsToLoadBalancerOutput,
  ApplySecurityGroupsToLoadBalancerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ApplySecurityGroupsToLoadBalancerInput,
  output: ApplySecurityGroupsToLoadBalancerOutput,
  errors: [
    AccessPointNotFoundException,
    InvalidConfigurationRequestException,
    InvalidSecurityGroupException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ApplySecurityGroupsToLoadBalancer",
}));

export type AttachLoadBalancerToSubnetsError =
  | AccessPointNotFoundException
  | InvalidConfigurationRequestException
  | InvalidSubnetException
  | SubnetNotFoundException
  | CommonErrors;
/**
 * Adds one or more subnets to the set of configured subnets for the specified load balancer.
 *
 * The load balancer evenly distributes requests across all registered subnets.
 * For more information, see Add or Remove Subnets for Your Load Balancer in a VPC
 * in the *Classic Load Balancers Guide*.
 */
export const attachLoadBalancerToSubnets: API.OperationMethod<
  AttachLoadBalancerToSubnetsInput,
  AttachLoadBalancerToSubnetsOutput,
  AttachLoadBalancerToSubnetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AttachLoadBalancerToSubnetsInput,
  output: AttachLoadBalancerToSubnetsOutput,
  errors: [
    AccessPointNotFoundException,
    InvalidConfigurationRequestException,
    InvalidSubnetException,
    SubnetNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AttachLoadBalancerToSubnets",
}));

export type ConfigureHealthCheckError = AccessPointNotFoundException | CommonErrors;
/**
 * Specifies the health check settings to use when evaluating the health state of your EC2 instances.
 *
 * For more information, see Configure Health Checks for Your Load Balancer
 * in the *Classic Load Balancers Guide*.
 */
export const configureHealthCheck: API.OperationMethod<
  ConfigureHealthCheckInput,
  ConfigureHealthCheckOutput,
  ConfigureHealthCheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ConfigureHealthCheckInput,
  output: ConfigureHealthCheckOutput,
  errors: [AccessPointNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ConfigureHealthCheck",
}));

export type CreateAppCookieStickinessPolicyError =
  | AccessPointNotFoundException
  | DuplicatePolicyNameException
  | InvalidConfigurationRequestException
  | TooManyPoliciesException
  | CommonErrors;
/**
 * Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.
 *
 * This policy is similar to the policy created by CreateLBCookieStickinessPolicy,
 * except that the lifetime of the special Elastic Load Balancing cookie, `AWSELB`,
 * follows the lifetime of the application-generated cookie specified in the policy configuration.
 * The load balancer only inserts a new stickiness cookie when the application response
 * includes a new application cookie.
 *
 * If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.
 *
 * For more information, see Application-Controlled Session Stickiness
 * in the *Classic Load Balancers Guide*.
 */
export const createAppCookieStickinessPolicy: API.OperationMethod<
  CreateAppCookieStickinessPolicyInput,
  CreateAppCookieStickinessPolicyOutput,
  CreateAppCookieStickinessPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAppCookieStickinessPolicyInput,
  output: CreateAppCookieStickinessPolicyOutput,
  errors: [
    AccessPointNotFoundException,
    DuplicatePolicyNameException,
    InvalidConfigurationRequestException,
    TooManyPoliciesException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAppCookieStickinessPolicy",
}));

export type CreateLBCookieStickinessPolicyError =
  | AccessPointNotFoundException
  | DuplicatePolicyNameException
  | InvalidConfigurationRequestException
  | TooManyPoliciesException
  | CommonErrors;
/**
 * Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.
 *
 * When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request.
 * If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm.
 *
 * A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration.
 *
 * For more information, see Duration-Based Session Stickiness
 * in the *Classic Load Balancers Guide*.
 */
export const createLBCookieStickinessPolicy: API.OperationMethod<
  CreateLBCookieStickinessPolicyInput,
  CreateLBCookieStickinessPolicyOutput,
  CreateLBCookieStickinessPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLBCookieStickinessPolicyInput,
  output: CreateLBCookieStickinessPolicyOutput,
  errors: [
    AccessPointNotFoundException,
    DuplicatePolicyNameException,
    InvalidConfigurationRequestException,
    TooManyPoliciesException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLBCookieStickinessPolicy",
}));

export type CreateLoadBalancerError =
  | CertificateNotFoundException
  | DuplicateAccessPointNameException
  | DuplicateTagKeysException
  | InvalidConfigurationRequestException
  | InvalidSchemeException
  | InvalidSecurityGroupException
  | InvalidSubnetException
  | OperationNotPermittedException
  | SubnetNotFoundException
  | TooManyAccessPointsException
  | TooManyTagsException
  | UnsupportedProtocolException
  | CommonErrors;
/**
 * Creates a Classic Load Balancer.
 *
 * You can add listeners, security groups, subnets, and tags when you create your load balancer,
 * or you can add them later using CreateLoadBalancerListeners,
 * ApplySecurityGroupsToLoadBalancer, AttachLoadBalancerToSubnets,
 * and AddTags.
 *
 * To describe your current load balancers, see DescribeLoadBalancers.
 * When you are finished with a load balancer, you can delete it using
 * DeleteLoadBalancer.
 *
 * You can create up to 20 load balancers per region per account.
 * You can request an increase for the number of load balancers for your account.
 * For more information, see Limits for Your Classic Load Balancer
 * in the *Classic Load Balancers Guide*.
 */
export const createLoadBalancer: API.OperationMethod<
  CreateAccessPointInput,
  CreateAccessPointOutput,
  CreateLoadBalancerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccessPointInput,
  output: CreateAccessPointOutput,
  errors: [
    CertificateNotFoundException,
    DuplicateAccessPointNameException,
    DuplicateTagKeysException,
    InvalidConfigurationRequestException,
    InvalidSchemeException,
    InvalidSecurityGroupException,
    InvalidSubnetException,
    OperationNotPermittedException,
    SubnetNotFoundException,
    TooManyAccessPointsException,
    TooManyTagsException,
    UnsupportedProtocolException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLoadBalancer",
}));

export type CreateLoadBalancerListenersError =
  | AccessPointNotFoundException
  | CertificateNotFoundException
  | DuplicateListenerException
  | InvalidConfigurationRequestException
  | UnsupportedProtocolException
  | CommonErrors;
/**
 * Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener.
 *
 * For more information, see Listeners for Your Classic Load Balancer
 * in the *Classic Load Balancers Guide*.
 */
export const createLoadBalancerListeners: API.OperationMethod<
  CreateLoadBalancerListenerInput,
  CreateLoadBalancerListenerOutput,
  CreateLoadBalancerListenersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLoadBalancerListenerInput,
  output: CreateLoadBalancerListenerOutput,
  errors: [
    AccessPointNotFoundException,
    CertificateNotFoundException,
    DuplicateListenerException,
    InvalidConfigurationRequestException,
    UnsupportedProtocolException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLoadBalancerListeners",
}));

export type CreateLoadBalancerPolicyError =
  | AccessPointNotFoundException
  | DuplicatePolicyNameException
  | InvalidConfigurationRequestException
  | PolicyTypeNotFoundException
  | TooManyPoliciesException
  | CommonErrors;
/**
 * Creates a policy with the specified attributes for the specified load balancer.
 *
 * Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.
 */
export const createLoadBalancerPolicy: API.OperationMethod<
  CreateLoadBalancerPolicyInput,
  CreateLoadBalancerPolicyOutput,
  CreateLoadBalancerPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLoadBalancerPolicyInput,
  output: CreateLoadBalancerPolicyOutput,
  errors: [
    AccessPointNotFoundException,
    DuplicatePolicyNameException,
    InvalidConfigurationRequestException,
    PolicyTypeNotFoundException,
    TooManyPoliciesException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLoadBalancerPolicy",
}));

export type DeleteLoadBalancerError = CommonErrors;
/**
 * Deletes the specified load balancer.
 *
 * If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances.
 *
 * If the load balancer does not exist or has already been deleted, the call to
 * `DeleteLoadBalancer` still succeeds.
 */
export const deleteLoadBalancer: API.OperationMethod<
  DeleteAccessPointInput,
  DeleteAccessPointOutput,
  DeleteLoadBalancerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessPointInput,
  output: DeleteAccessPointOutput,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLoadBalancer",
}));

export type DeleteLoadBalancerListenersError = AccessPointNotFoundException | CommonErrors;
/**
 * Deletes the specified listeners from the specified load balancer.
 */
export const deleteLoadBalancerListeners: API.OperationMethod<
  DeleteLoadBalancerListenerInput,
  DeleteLoadBalancerListenerOutput,
  DeleteLoadBalancerListenersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLoadBalancerListenerInput,
  output: DeleteLoadBalancerListenerOutput,
  errors: [AccessPointNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLoadBalancerListeners",
}));

export type DeleteLoadBalancerPolicyError =
  | AccessPointNotFoundException
  | InvalidConfigurationRequestException
  | CommonErrors;
/**
 * Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.
 */
export const deleteLoadBalancerPolicy: API.OperationMethod<
  DeleteLoadBalancerPolicyInput,
  DeleteLoadBalancerPolicyOutput,
  DeleteLoadBalancerPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLoadBalancerPolicyInput,
  output: DeleteLoadBalancerPolicyOutput,
  errors: [AccessPointNotFoundException, InvalidConfigurationRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLoadBalancerPolicy",
}));

export type DeregisterInstancesFromLoadBalancerError =
  | AccessPointNotFoundException
  | InvalidEndPointException
  | CommonErrors;
/**
 * Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer.
 *
 * You can use DescribeLoadBalancers to verify that the instance is deregistered from the load balancer.
 *
 * For more information, see Register or De-Register EC2 Instances
 * in the *Classic Load Balancers Guide*.
 */
export const deregisterInstancesFromLoadBalancer: API.OperationMethod<
  DeregisterEndPointsInput,
  DeregisterEndPointsOutput,
  DeregisterInstancesFromLoadBalancerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeregisterEndPointsInput,
  output: DeregisterEndPointsOutput,
  errors: [AccessPointNotFoundException, InvalidEndPointException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterInstancesFromLoadBalancer",
}));

export type DescribeAccountLimitsError = CommonErrors;
/**
 * Describes the current Elastic Load Balancing resource limits for your AWS account.
 *
 * For more information, see Limits for Your Classic Load Balancer
 * in the *Classic Load Balancers Guide*.
 */
export const describeAccountLimits: API.OperationMethod<
  DescribeAccountLimitsInput,
  DescribeAccountLimitsOutput,
  DescribeAccountLimitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAccountLimitsInput,
  output: DescribeAccountLimitsOutput,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccountLimits",
}));

export type DescribeInstanceHealthError =
  | AccessPointNotFoundException
  | InvalidEndPointException
  | CommonErrors;
/**
 * Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.
 */
export const describeInstanceHealth: API.OperationMethod<
  DescribeEndPointStateInput,
  DescribeEndPointStateOutput,
  DescribeInstanceHealthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeEndPointStateInput,
  output: DescribeEndPointStateOutput,
  errors: [AccessPointNotFoundException, InvalidEndPointException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeInstanceHealth",
}));

export type DescribeLoadBalancerAttributesError =
  | AccessPointNotFoundException
  | LoadBalancerAttributeNotFoundException
  | CommonErrors;
/**
 * Describes the attributes for the specified load balancer.
 */
export const describeLoadBalancerAttributes: API.OperationMethod<
  DescribeLoadBalancerAttributesInput,
  DescribeLoadBalancerAttributesOutput,
  DescribeLoadBalancerAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLoadBalancerAttributesInput,
  output: DescribeLoadBalancerAttributesOutput,
  errors: [AccessPointNotFoundException, LoadBalancerAttributeNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLoadBalancerAttributes",
}));

export type DescribeLoadBalancerPoliciesError =
  | AccessPointNotFoundException
  | PolicyNotFoundException
  | CommonErrors;
/**
 * Describes the specified policies.
 *
 * If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer.
 * If you specify a policy name associated with your load balancer, the action returns the description of that policy.
 * If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies.
 * The names of the sample policies have the `ELBSample-` prefix.
 */
export const describeLoadBalancerPolicies: API.OperationMethod<
  DescribeLoadBalancerPoliciesInput,
  DescribeLoadBalancerPoliciesOutput,
  DescribeLoadBalancerPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLoadBalancerPoliciesInput,
  output: DescribeLoadBalancerPoliciesOutput,
  errors: [AccessPointNotFoundException, PolicyNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLoadBalancerPolicies",
}));

export type DescribeLoadBalancerPolicyTypesError = PolicyTypeNotFoundException | CommonErrors;
/**
 * Describes the specified load balancer policy types or all load balancer policy types.
 *
 * The description of each type indicates how it can be used. For example,
 * some policies can be used only with layer 7 listeners,
 * some policies can be used only with layer 4 listeners,
 * and some policies can be used only with your EC2 instances.
 *
 * You can use CreateLoadBalancerPolicy to create a policy configuration for any of these policy types.
 * Then, depending on the policy type, use either SetLoadBalancerPoliciesOfListener or
 * SetLoadBalancerPoliciesForBackendServer to set the policy.
 */
export const describeLoadBalancerPolicyTypes: API.OperationMethod<
  DescribeLoadBalancerPolicyTypesInput,
  DescribeLoadBalancerPolicyTypesOutput,
  DescribeLoadBalancerPolicyTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLoadBalancerPolicyTypesInput,
  output: DescribeLoadBalancerPolicyTypesOutput,
  errors: [PolicyTypeNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLoadBalancerPolicyTypes",
}));

export type DescribeLoadBalancersError =
  | AccessPointNotFoundException
  | DependencyThrottleException
  | CommonErrors;
/**
 * Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.
 */
export const describeLoadBalancers: API.PaginatedOperationMethod<
  DescribeAccessPointsInput,
  DescribeAccessPointsOutput,
  DescribeLoadBalancersError,
  Credentials | HttpClient.HttpClient,
  LoadBalancerDescription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeAccessPointsInput,
  output: DescribeAccessPointsOutput,
  errors: [AccessPointNotFoundException, DependencyThrottleException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLoadBalancers",
  pagination: {
    inputToken: "Marker",
    outputToken: "NextMarker",
    items: "LoadBalancerDescriptions",
  } as const,
})) as any;

export type DescribeTagsError = AccessPointNotFoundException | CommonErrors;
/**
 * Describes the tags associated with the specified load balancers.
 */
export const describeTags: API.OperationMethod<
  DescribeTagsInput,
  DescribeTagsOutput,
  DescribeTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeTagsInput,
  output: DescribeTagsOutput,
  errors: [AccessPointNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTags",
}));

export type DetachLoadBalancerFromSubnetsError =
  | AccessPointNotFoundException
  | InvalidConfigurationRequestException
  | CommonErrors;
/**
 * Removes the specified subnets from the set of configured subnets for the load balancer.
 *
 * After a subnet is removed, all EC2 instances registered with the load balancer
 * in the removed subnet go into the `OutOfService` state. Then,
 * the load balancer balances the traffic among the remaining routable subnets.
 */
export const detachLoadBalancerFromSubnets: API.OperationMethod<
  DetachLoadBalancerFromSubnetsInput,
  DetachLoadBalancerFromSubnetsOutput,
  DetachLoadBalancerFromSubnetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetachLoadBalancerFromSubnetsInput,
  output: DetachLoadBalancerFromSubnetsOutput,
  errors: [AccessPointNotFoundException, InvalidConfigurationRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetachLoadBalancerFromSubnets",
}));

export type DisableAvailabilityZonesForLoadBalancerError =
  | AccessPointNotFoundException
  | InvalidConfigurationRequestException
  | CommonErrors;
/**
 * Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer
 * in EC2-Classic or a default VPC.
 *
 * For load balancers in a non-default VPC, use DetachLoadBalancerFromSubnets.
 *
 * There must be at least one Availability Zone registered with a load balancer at all times.
 * After an Availability Zone is removed, all instances registered with the load balancer that are in the removed
 * Availability Zone go into the `OutOfService` state. Then, the load balancer attempts to equally balance
 * the traffic among its remaining Availability Zones.
 *
 * For more information, see Add or Remove Availability Zones
 * in the *Classic Load Balancers Guide*.
 */
export const disableAvailabilityZonesForLoadBalancer: API.OperationMethod<
  RemoveAvailabilityZonesInput,
  RemoveAvailabilityZonesOutput,
  DisableAvailabilityZonesForLoadBalancerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveAvailabilityZonesInput,
  output: RemoveAvailabilityZonesOutput,
  errors: [AccessPointNotFoundException, InvalidConfigurationRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableAvailabilityZonesForLoadBalancer",
}));

export type EnableAvailabilityZonesForLoadBalancerError =
  | AccessPointNotFoundException
  | CommonErrors;
/**
 * Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer
 * in EC2-Classic or a default VPC.
 *
 * For load balancers in a non-default VPC, use AttachLoadBalancerToSubnets.
 *
 * The load balancer evenly distributes requests across all its registered Availability Zones
 * that contain instances. For more information, see Add or Remove Availability Zones
 * in the *Classic Load Balancers Guide*.
 */
export const enableAvailabilityZonesForLoadBalancer: API.OperationMethod<
  AddAvailabilityZonesInput,
  AddAvailabilityZonesOutput,
  EnableAvailabilityZonesForLoadBalancerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddAvailabilityZonesInput,
  output: AddAvailabilityZonesOutput,
  errors: [AccessPointNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableAvailabilityZonesForLoadBalancer",
}));

export type ModifyLoadBalancerAttributesError =
  | AccessPointNotFoundException
  | InvalidConfigurationRequestException
  | LoadBalancerAttributeNotFoundException
  | CommonErrors;
/**
 * Modifies the attributes of the specified load balancer.
 *
 * You can modify the load balancer attributes, such as `AccessLogs`, `ConnectionDraining`, and
 * `CrossZoneLoadBalancing` by either enabling or disabling them. Or, you can modify the load balancer attribute
 * `ConnectionSettings` by specifying an idle connection timeout value for your load balancer.
 *
 * For more information, see the following in the *Classic Load Balancers Guide*:
 *
 * - Cross-Zone Load Balancing
 *
 * - Connection Draining
 *
 * - Access Logs
 *
 * - Idle Connection Timeout
 */
export const modifyLoadBalancerAttributes: API.OperationMethod<
  ModifyLoadBalancerAttributesInput,
  ModifyLoadBalancerAttributesOutput,
  ModifyLoadBalancerAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyLoadBalancerAttributesInput,
  output: ModifyLoadBalancerAttributesOutput,
  errors: [
    AccessPointNotFoundException,
    InvalidConfigurationRequestException,
    LoadBalancerAttributeNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyLoadBalancerAttributes",
}));

export type RegisterInstancesWithLoadBalancerError =
  | AccessPointNotFoundException
  | InvalidEndPointException
  | CommonErrors;
/**
 * Adds the specified instances to the specified load balancer.
 *
 * The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC.
 *
 * Note that `RegisterInstanceWithLoadBalancer` completes when the request has been registered.
 * Instance registration takes a little time to complete. To check the state of the registered instances, use
 * DescribeLoadBalancers or DescribeInstanceHealth.
 *
 * After the instance is registered, it starts receiving traffic
 * and requests from the load balancer. Any instance that is not
 * in one of the Availability Zones registered for the load balancer
 * is moved to the `OutOfService` state. If an Availability Zone
 * is added to the load balancer later, any instances registered with the
 * load balancer move to the `InService` state.
 *
 * To deregister instances from a load balancer, use DeregisterInstancesFromLoadBalancer.
 *
 * For more information, see Register or De-Register EC2 Instances
 * in the *Classic Load Balancers Guide*.
 */
export const registerInstancesWithLoadBalancer: API.OperationMethod<
  RegisterEndPointsInput,
  RegisterEndPointsOutput,
  RegisterInstancesWithLoadBalancerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterEndPointsInput,
  output: RegisterEndPointsOutput,
  errors: [AccessPointNotFoundException, InvalidEndPointException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterInstancesWithLoadBalancer",
}));

export type RemoveTagsError = AccessPointNotFoundException | CommonErrors;
/**
 * Removes one or more tags from the specified load balancer.
 */
export const removeTags: API.OperationMethod<
  RemoveTagsInput,
  RemoveTagsOutput,
  RemoveTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveTagsInput,
  output: RemoveTagsOutput,
  errors: [AccessPointNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveTags",
}));

export type SetLoadBalancerListenerSSLCertificateError =
  | AccessPointNotFoundException
  | CertificateNotFoundException
  | InvalidConfigurationRequestException
  | ListenerNotFoundException
  | UnsupportedProtocolException
  | CommonErrors;
/**
 * Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.
 *
 * For more information about updating your SSL certificate, see
 * Replace the SSL Certificate for Your Load Balancer
 * in the *Classic Load Balancers Guide*.
 */
export const setLoadBalancerListenerSSLCertificate: API.OperationMethod<
  SetLoadBalancerListenerSSLCertificateInput,
  SetLoadBalancerListenerSSLCertificateOutput,
  SetLoadBalancerListenerSSLCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetLoadBalancerListenerSSLCertificateInput,
  output: SetLoadBalancerListenerSSLCertificateOutput,
  errors: [
    AccessPointNotFoundException,
    CertificateNotFoundException,
    InvalidConfigurationRequestException,
    ListenerNotFoundException,
    UnsupportedProtocolException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetLoadBalancerListenerSSLCertificate",
}));

export type SetLoadBalancerPoliciesForBackendServerError =
  | AccessPointNotFoundException
  | InvalidConfigurationRequestException
  | PolicyNotFoundException
  | CommonErrors;
/**
 * Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies.
 * At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.
 *
 * Each time you use `SetLoadBalancerPoliciesForBackendServer` to enable the policies,
 * use the `PolicyNames` parameter to list the policies that you want to enable.
 *
 * You can use DescribeLoadBalancers or DescribeLoadBalancerPolicies to verify that the policy
 * is associated with the EC2 instance.
 *
 * For more information about enabling back-end instance authentication, see Configure Back-end Instance Authentication
 * in the *Classic Load Balancers Guide*. For more information about Proxy Protocol, see
 * Configure Proxy Protocol Support
 * in the *Classic Load Balancers Guide*.
 */
export const setLoadBalancerPoliciesForBackendServer: API.OperationMethod<
  SetLoadBalancerPoliciesForBackendServerInput,
  SetLoadBalancerPoliciesForBackendServerOutput,
  SetLoadBalancerPoliciesForBackendServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetLoadBalancerPoliciesForBackendServerInput,
  output: SetLoadBalancerPoliciesForBackendServerOutput,
  errors: [
    AccessPointNotFoundException,
    InvalidConfigurationRequestException,
    PolicyNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetLoadBalancerPoliciesForBackendServer",
}));

export type SetLoadBalancerPoliciesOfListenerError =
  | AccessPointNotFoundException
  | InvalidConfigurationRequestException
  | ListenerNotFoundException
  | PolicyNotFoundException
  | CommonErrors;
/**
 * Replaces the current set of policies for the specified load balancer port with the specified set of policies.
 *
 * To enable back-end server authentication, use SetLoadBalancerPoliciesForBackendServer.
 *
 * For more information about setting policies, see
 * Update the SSL Negotiation Configuration,
 * Duration-Based Session Stickiness, and
 * Application-Controlled Session Stickiness
 * in the *Classic Load Balancers Guide*.
 */
export const setLoadBalancerPoliciesOfListener: API.OperationMethod<
  SetLoadBalancerPoliciesOfListenerInput,
  SetLoadBalancerPoliciesOfListenerOutput,
  SetLoadBalancerPoliciesOfListenerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetLoadBalancerPoliciesOfListenerInput,
  output: SetLoadBalancerPoliciesOfListenerOutput,
  errors: [
    AccessPointNotFoundException,
    InvalidConfigurationRequestException,
    ListenerNotFoundException,
    PolicyNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetLoadBalancerPoliciesOfListener",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.optional(S.String) })).annotate({
        identifier: "Tag",
      });
    case 2:
      return S.Array(Tag);
    case 3:
      return S.suspend(() =>
        S.Struct({ LoadBalancerNames: LoadBalancerNames, Tags: TagList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AddTagsInput" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AddTagsOutput",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({ LoadBalancerName: S.String, SecurityGroups: SecurityGroups }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ApplySecurityGroupsToLoadBalancerInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ SecurityGroups: S.optional(SecurityGroups) }).pipe(ns),
      ).annotate({
        identifier: "ApplySecurityGroupsToLoadBalancerOutput",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({ LoadBalancerName: S.String, Subnets: Subnets }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AttachLoadBalancerToSubnetsInput",
      });
    case 2:
      return S.suspend(() => S.Struct({ Subnets: S.optional(Subnets) }).pipe(ns)).annotate({
        identifier: "AttachLoadBalancerToSubnetsOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Target: S.String,
          Interval: S.Number,
          Timeout: S.Number,
          UnhealthyThreshold: S.Number,
          HealthyThreshold: S.Number,
        }),
      ).annotate({ identifier: "HealthCheck" });
    case 4:
      return S.suspend(() =>
        S.Struct({ LoadBalancerName: S.String, HealthCheck: HealthCheck }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ConfigureHealthCheckInput",
      });
    case 5:
      return S.suspend(() => S.Struct({ HealthCheck: S.optional(HealthCheck) }).pipe(ns)).annotate({
        identifier: "ConfigureHealthCheckOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ LoadBalancerName: S.String, PolicyName: S.String, CookieName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateAppCookieStickinessPolicyInput",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateAppCookieStickinessPolicyOutput",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerName: S.String,
          PolicyName: S.String,
          CookieExpirationPeriod: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLBCookieStickinessPolicyInput",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateLBCookieStickinessPolicyOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Protocol: S.String,
          LoadBalancerPort: S.Number,
          InstanceProtocol: S.optional(S.String),
          InstancePort: S.Number,
          SSLCertificateId: S.optional(S.String),
        }),
      ).annotate({ identifier: "Listener" });
    case 3:
      return S.Array(Listener);
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerName: S.String,
          Listeners: Listeners,
          AvailabilityZones: S.optional(AvailabilityZones),
          Subnets: S.optional(Subnets),
          SecurityGroups: S.optional(SecurityGroups),
          Scheme: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateAccessPointInput" });
    case 6:
      return S.suspend(() => S.Struct({ DNSName: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateAccessPointOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ LoadBalancerName: S.String, Listeners: Listeners }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateLoadBalancerListenerInput",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateLoadBalancerListenerOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AttributeName: S.optional(S.String), AttributeValue: S.optional(S.String) }),
      ).annotate({ identifier: "PolicyAttribute" });
    case 2:
      return S.Array(PolicyAttribute);
    case 3:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerName: S.String,
          PolicyName: S.String,
          PolicyTypeName: S.String,
          PolicyAttributes: S.optional(PolicyAttributes),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLoadBalancerPolicyInput",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateLoadBalancerPolicyOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ LoadBalancerName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteAccessPointInput" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteAccessPointOutput",
      });
    case 7:
      return S.Array(S.Number);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LoadBalancerName: S.String, LoadBalancerPorts: Ports }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteLoadBalancerListenerInput",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteLoadBalancerListenerOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ LoadBalancerName: S.String, PolicyName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteLoadBalancerPolicyInput",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteLoadBalancerPolicyOutput",
      });
    case 4:
      return S.suspend(() => S.Struct({ InstanceId: S.optional(S.String) })).annotate({
        identifier: "Instance",
      });
    case 5:
      return S.Array(Instance);
    case 6:
      return S.suspend(() =>
        S.Struct({ LoadBalancerName: S.String, Instances: Instances }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeregisterEndPointsInput" });
    case 7:
      return S.suspend(() => S.Struct({ Instances: S.optional(Instances) }).pipe(ns)).annotate({
        identifier: "DeregisterEndPointsOutput",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), PageSize: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAccountLimitsInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Max: S.optional(S.String) }),
      ).annotate({ identifier: "Limit" });
    case 2:
      return S.Array(Limit);
    case 3:
      return S.suspend(() =>
        S.Struct({ Limits: S.optional(Limits), NextMarker: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeAccountLimitsOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ LoadBalancerName: S.String, Instances: S.optional(Instances) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeEndPointStateInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InstanceId: S.optional(S.String),
          State: S.optional(S.String),
          ReasonCode: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "InstanceState" });
    case 6:
      return S.Array(InstanceState);
    case 7:
      return S.suspend(() =>
        S.Struct({ InstanceStates: S.optional(InstanceStates) }).pipe(ns),
      ).annotate({
        identifier: "DescribeEndPointStateOutput",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LoadBalancerName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLoadBalancerAttributesInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ Enabled: S.Boolean })).annotate({
        identifier: "CrossZoneLoadBalancing",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.Boolean,
          S3BucketName: S.optional(S.String),
          EmitInterval: S.optional(S.Number),
          S3BucketPrefix: S.optional(S.String),
        }),
      ).annotate({ identifier: "AccessLog" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Enabled: S.Boolean, Timeout: S.optional(S.Number) }),
      ).annotate({ identifier: "ConnectionDraining" });
    case 4:
      return S.suspend(() => S.Struct({ IdleTimeout: S.Number })).annotate({
        identifier: "ConnectionSettings",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "AdditionalAttribute" });
    case 6:
      return S.Array(AdditionalAttribute);
    case 7:
      return S.suspend(() =>
        S.Struct({
          CrossZoneLoadBalancing: S.optional(CrossZoneLoadBalancing),
          AccessLog: S.optional(AccessLog),
          ConnectionDraining: S.optional(ConnectionDraining),
          ConnectionSettings: S.optional(ConnectionSettings),
          AdditionalAttributes: S.optional(AdditionalAttributes),
        }),
      ).annotate({ identifier: "LoadBalancerAttributes" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LoadBalancerAttributes: S.optional(LoadBalancerAttributes) }).pipe(ns),
      ).annotate({
        identifier: "DescribeLoadBalancerAttributesOutput",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerName: S.optional(S.String),
          PolicyNames: S.optional(PolicyNames),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeLoadBalancerPoliciesInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AttributeName: S.optional(S.String), AttributeValue: S.optional(S.String) }),
      ).annotate({
        identifier: "PolicyAttributeDescription",
      });
    case 4:
      return S.Array(PolicyAttributeDescription);
    case 5:
      return S.suspend(() =>
        S.Struct({
          PolicyName: S.optional(S.String),
          PolicyTypeName: S.optional(S.String),
          PolicyAttributeDescriptions: S.optional(PolicyAttributeDescriptions),
        }),
      ).annotate({ identifier: "PolicyDescription" });
    case 6:
      return S.Array(PolicyDescription);
    case 7:
      return S.suspend(() =>
        S.Struct({ PolicyDescriptions: S.optional(PolicyDescriptions) }).pipe(ns),
      ).annotate({
        identifier: "DescribeLoadBalancerPoliciesOutput",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({ PolicyTypeNames: S.optional(PolicyTypeNames) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLoadBalancerPolicyTypesInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AttributeName: S.optional(S.String),
          AttributeType: S.optional(S.String),
          Description: S.optional(S.String),
          DefaultValue: S.optional(S.String),
          Cardinality: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PolicyAttributeTypeDescription",
      });
    case 3:
      return S.Array(PolicyAttributeTypeDescription);
    case 4:
      return S.suspend(() =>
        S.Struct({
          PolicyTypeName: S.optional(S.String),
          Description: S.optional(S.String),
          PolicyAttributeTypeDescriptions: S.optional(PolicyAttributeTypeDescriptions),
        }),
      ).annotate({ identifier: "PolicyTypeDescription" });
    case 5:
      return S.Array(PolicyTypeDescription);
    case 6:
      return S.suspend(() =>
        S.Struct({ PolicyTypeDescriptions: S.optional(PolicyTypeDescriptions) }).pipe(ns),
      ).annotate({
        identifier: "DescribeLoadBalancerPolicyTypesOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerNames: S.optional(LoadBalancerNames),
          Marker: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeAccessPointsInput",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Listener: S.optional(Listener), PolicyNames: S.optional(PolicyNames) }),
      ).annotate({ identifier: "ListenerDescription" });
    case 1:
      return S.Array(ListenerDescription);
    case 2:
      return S.suspend(() =>
        S.Struct({ PolicyName: S.optional(S.String), CookieName: S.optional(S.String) }),
      ).annotate({
        identifier: "AppCookieStickinessPolicy",
      });
    case 3:
      return S.Array(AppCookieStickinessPolicy);
    case 4:
      return S.suspend(() =>
        S.Struct({
          PolicyName: S.optional(S.String),
          CookieExpirationPeriod: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LBCookieStickinessPolicy" });
    case 5:
      return S.Array(LBCookieStickinessPolicy);
    case 6:
      return S.suspend(() =>
        S.Struct({
          AppCookieStickinessPolicies: S.optional(AppCookieStickinessPolicies),
          LBCookieStickinessPolicies: S.optional(LBCookieStickinessPolicies),
          OtherPolicies: S.optional(PolicyNames),
        }),
      ).annotate({ identifier: "Policies" });
    case 7:
      return S.suspend(() =>
        S.Struct({ InstancePort: S.optional(S.Number), PolicyNames: S.optional(PolicyNames) }),
      ).annotate({ identifier: "BackendServerDescription" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(BackendServerDescription);
    case 1:
      return S.suspend(() =>
        S.Struct({ OwnerAlias: S.optional(S.String), GroupName: S.optional(S.String) }),
      ).annotate({ identifier: "SourceSecurityGroup" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerName: S.optional(S.String),
          DNSName: S.optional(S.String),
          CanonicalHostedZoneName: S.optional(S.String),
          CanonicalHostedZoneNameID: S.optional(S.String),
          ListenerDescriptions: S.optional(ListenerDescriptions),
          Policies: S.optional(Policies),
          BackendServerDescriptions: S.optional(BackendServerDescriptions),
          AvailabilityZones: S.optional(AvailabilityZones),
          Subnets: S.optional(Subnets),
          VPCId: S.optional(S.String),
          Instances: S.optional(Instances),
          HealthCheck: S.optional(HealthCheck),
          SourceSecurityGroup: S.optional(SourceSecurityGroup),
          SecurityGroups: S.optional(SecurityGroups),
          CreatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Scheme: S.optional(S.String),
        }),
      ).annotate({ identifier: "LoadBalancerDescription" });
    case 3:
      return S.Array(LoadBalancerDescription);
    case 4:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerDescriptions: S.optional(LoadBalancerDescriptions),
          NextMarker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeAccessPointsOutput",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({ LoadBalancerNames: LoadBalancerNamesMax20 }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeTagsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ LoadBalancerName: S.optional(S.String), Tags: S.optional(TagList) }),
      ).annotate({ identifier: "TagDescription" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(TagDescription);
    case 1:
      return S.suspend(() =>
        S.Struct({ TagDescriptions: S.optional(TagDescriptions) }).pipe(ns),
      ).annotate({ identifier: "DescribeTagsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ LoadBalancerName: S.String, Subnets: Subnets }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DetachLoadBalancerFromSubnetsInput",
      });
    case 3:
      return S.suspend(() => S.Struct({ Subnets: S.optional(Subnets) }).pipe(ns)).annotate({
        identifier: "DetachLoadBalancerFromSubnetsOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ LoadBalancerName: S.String, AvailabilityZones: AvailabilityZones }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RemoveAvailabilityZonesInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ AvailabilityZones: S.optional(AvailabilityZones) }).pipe(ns),
      ).annotate({
        identifier: "RemoveAvailabilityZonesOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ LoadBalancerName: S.String, AvailabilityZones: AvailabilityZones }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AddAvailabilityZonesInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AvailabilityZones: S.optional(AvailabilityZones) }).pipe(ns),
      ).annotate({
        identifier: "AddAvailabilityZonesOutput",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerName: S.String,
          LoadBalancerAttributes: LoadBalancerAttributes,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyLoadBalancerAttributesInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerName: S.optional(S.String),
          LoadBalancerAttributes: S.optional(LoadBalancerAttributes),
        }).pipe(ns),
      ).annotate({
        identifier: "ModifyLoadBalancerAttributesOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ LoadBalancerName: S.String, Instances: Instances }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RegisterEndPointsInput" });
    case 3:
      return S.suspend(() => S.Struct({ Instances: S.optional(Instances) }).pipe(ns)).annotate({
        identifier: "RegisterEndPointsOutput",
      });
    case 4:
      return S.suspend(() => S.Struct({ Key: S.optional(S.String) })).annotate({
        identifier: "TagKeyOnly",
      });
    case 5:
      return S.Array(TagKeyOnly);
    case 6:
      return S.suspend(() =>
        S.Struct({ LoadBalancerNames: LoadBalancerNames, Tags: TagKeyList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RemoveTagsInput" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RemoveTagsOutput",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerName: S.String,
          LoadBalancerPort: S.Number,
          SSLCertificateId: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SetLoadBalancerListenerSSLCertificateInput",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetLoadBalancerListenerSSLCertificateOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerName: S.String,
          InstancePort: S.Number,
          PolicyNames: PolicyNames,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SetLoadBalancerPoliciesForBackendServerInput",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetLoadBalancerPoliciesForBackendServerOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerName: S.String,
          LoadBalancerPort: S.Number,
          PolicyNames: PolicyNames,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SetLoadBalancerPoliciesOfListenerInput",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetLoadBalancerPoliciesOfListenerOutput",
      });
  }
}
