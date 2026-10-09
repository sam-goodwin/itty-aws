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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "VPC Lattice",
  serviceShapeName: "MercuryControlPlane",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "vpc-lattice" });
const ver = /*@__PURE__*/ T.ServiceVersion("2022-11-30");
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
              `https://vpc-lattice-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://vpc-lattice-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://vpc-lattice.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://vpc-lattice.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: S.String,
      serviceCode: S.String,
      quotaCode: S.String,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: S.String,
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type ServiceIdentifier = string;
export type ListenerIdentifier = string;
export type RuleIdentifier = string;
export type HttpMethod = string;
export type PathMatchExact = string;
export type PathMatchPrefix = string;
export type PathMatchType = { exact: string; prefix?: never } | { exact?: never; prefix: string };
const PathMatchType = /*@__PURE__*/ __L.at(__c0, 0);
export interface PathMatch {
  match: PathMatchType;
  caseSensitive?: boolean;
}
const PathMatch = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<PathMatch>;
export type HeaderMatchName = string;
export type HeaderMatchExact = string;
export type HeaderMatchPrefix = string;
export type HeaderMatchContains = string;
export type HeaderMatchType =
  | { exact: string; prefix?: never; contains?: never }
  | { exact?: never; prefix: string; contains?: never }
  | { exact?: never; prefix?: never; contains: string };
const HeaderMatchType = /*@__PURE__*/ __L.at(__c0, 2);
export interface HeaderMatch {
  name: string;
  match: HeaderMatchType;
  caseSensitive?: boolean;
}
const HeaderMatch = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<HeaderMatch>;
export type HeaderMatchList = HeaderMatch[];
const HeaderMatchList = /*@__PURE__*/ __L.at(__c0, 4);
export interface HttpMatch {
  method?: string;
  pathMatch?: PathMatch;
  headerMatches?: HeaderMatch[];
}
const HttpMatch = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<HttpMatch>;
export type RuleMatch = { httpMatch: HttpMatch };
const RuleMatch = /*@__PURE__*/ __L.at(__c0, 6);
export type RulePriority = number;
export type TargetGroupIdentifier = string;
export type TargetGroupWeight = number;
export interface WeightedTargetGroup {
  targetGroupIdentifier: string;
  weight?: number;
}
const WeightedTargetGroup = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<WeightedTargetGroup>;
export type WeightedTargetGroupList = WeightedTargetGroup[];
const WeightedTargetGroupList = /*@__PURE__*/ __L.at(__c1, 0);
export interface ForwardAction {
  targetGroups: WeightedTargetGroup[];
}
const ForwardAction = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<ForwardAction>;
export type HttpStatusCode = number;
export interface FixedResponseAction {
  statusCode: number;
}
const FixedResponseAction = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<FixedResponseAction>;
export type RuleAction =
  | { forward: ForwardAction; fixedResponse?: never }
  | { forward?: never; fixedResponse: FixedResponseAction };
const RuleAction = /*@__PURE__*/ __L.at(__c1, 3);
export interface RuleUpdate {
  ruleIdentifier: string;
  match?: RuleMatch;
  priority?: number;
  action?: RuleAction;
}
const RuleUpdate = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<RuleUpdate>;
export type RuleUpdateList = RuleUpdate[];
const RuleUpdateList = /*@__PURE__*/ __L.at(__c1, 5);
export interface BatchUpdateRuleRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
  rules: RuleUpdate[];
}
const BatchUpdateRuleRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<BatchUpdateRuleRequest>;
export type RuleArn = string;
export type RuleId = string;
export type RuleName = string;
export interface RuleUpdateSuccess {
  arn?: string;
  id?: string;
  name?: string;
  isDefault?: boolean;
  match?: RuleMatch;
  priority?: number;
  action?: RuleAction;
}
const RuleUpdateSuccess = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<RuleUpdateSuccess>;
export type RuleUpdateSuccessList = RuleUpdateSuccess[];
const RuleUpdateSuccessList = /*@__PURE__*/ __L.at(__c2, 0);
export type FailureCode = string;
export type FailureMessage = string;
export interface RuleUpdateFailure {
  ruleIdentifier?: string;
  failureCode?: string;
  failureMessage?: string;
}
const RuleUpdateFailure = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<RuleUpdateFailure>;
export type RuleUpdateFailureList = RuleUpdateFailure[];
const RuleUpdateFailureList = /*@__PURE__*/ __L.at(__c2, 2);
export interface BatchUpdateRuleResponse {
  successful?: RuleUpdateSuccess[];
  unsuccessful?: RuleUpdateFailure[];
}
const BatchUpdateRuleResponse = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<BatchUpdateRuleResponse>;
export type ClientToken = string;
export type ResourceIdentifier = string;
export type AccessLogDestinationArn = string;
export type ServiceNetworkLogType = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c2, 4);
export interface CreateAccessLogSubscriptionRequest {
  clientToken?: string;
  resourceIdentifier: string;
  destinationArn: string;
  serviceNetworkLogType?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateAccessLogSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<CreateAccessLogSubscriptionRequest>;
export type AccessLogSubscriptionId = string;
export type AccessLogSubscriptionArn = string;
export type ResourceId = string;
export type ResourceArn = string;
export interface CreateAccessLogSubscriptionResponse {
  id: string;
  arn: string;
  resourceId: string;
  resourceArn: string;
  serviceNetworkLogType?: string;
  destinationArn: string;
}
const CreateAccessLogSubscriptionResponse = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<CreateAccessLogSubscriptionResponse>;
export type ListenerName = string;
export type ListenerProtocol = string;
export type Port = number;
export interface CreateListenerRequest {
  serviceIdentifier: string;
  name: string;
  protocol: string;
  port?: number;
  defaultAction: RuleAction;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateListenerRequest = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<CreateListenerRequest>;
export type ListenerArn = string;
export type ListenerId = string;
export type ServiceArn = string;
export type ServiceId = string;
export interface CreateListenerResponse {
  arn?: string;
  id?: string;
  name?: string;
  protocol?: string;
  port?: number;
  serviceArn?: string;
  serviceId?: string;
  defaultAction?: RuleAction;
}
const CreateListenerResponse = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<CreateListenerResponse>;
export type ResourceConfigurationName = string;
export type ResourceConfigurationType =
  | "GROUP"
  | "CHILD"
  | "SINGLE"
  | "ARN"
  | "CIDR"
  | (string & {});
const ResourceConfigurationType = S.String;

export type PortRange = string;
export type PortRangeList = string[];
const PortRangeList = /*@__PURE__*/ __L.at(__c3, 1);
export type ProtocolType = "TCP" | "TCP_UDP" | (string & {});
const ProtocolType = S.String;

export type ResourceGatewayIdentifier = string;
export type ResourceConfigurationIdentifier = string;
export type DomainName = string;
export type ResourceConfigurationIpAddressType = string;
export interface DnsResource {
  domainName?: string;
  ipAddressType?: string;
}
const DnsResource = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<DnsResource>;
export type IpAddress = string;
export interface IpResource {
  ipAddress?: string;
}
const IpResource = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<IpResource>;
export type WildcardArn = string;
export interface ArnResource {
  arn?: string;
}
const ArnResource = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<ArnResource>;
export type CidrRange = string;
export type CidrRangeList = string[];
const CidrRangeList = PortRangeList as any as S.Schema<CidrRangeList>;
export interface CidrResource {
  cidrRanges?: string[];
}
const CidrResource = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<CidrResource>;
export type ResourceConfigurationDefinition =
  | { dnsResource: DnsResource; ipResource?: never; arnResource?: never; cidrResource?: never }
  | { dnsResource?: never; ipResource: IpResource; arnResource?: never; cidrResource?: never }
  | { dnsResource?: never; ipResource?: never; arnResource: ArnResource; cidrResource?: never }
  | { dnsResource?: never; ipResource?: never; arnResource?: never; cidrResource: CidrResource };
const ResourceConfigurationDefinition = /*@__PURE__*/ __L.at(__c3, 6);
export type DomainVerificationIdentifier = string;
export interface CreateResourceConfigurationRequest {
  name: string;
  type: ResourceConfigurationType;
  portRanges?: string[];
  protocol?: ProtocolType;
  resourceGatewayIdentifier?: string;
  resourceConfigurationGroupIdentifier?: string;
  resourceConfigurationDefinition?: ResourceConfigurationDefinition;
  allowAssociationToShareableServiceNetwork?: boolean;
  customDomainName?: string;
  groupDomain?: string;
  domainVerificationIdentifier?: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateResourceConfigurationRequest = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateResourceConfigurationRequest>;
export type ResourceConfigurationId = string;
export type ResourceConfigurationArn = string;
export type ResourceGatewayId = string;
export type ResourceConfigurationStatus = string;
export type DomainVerificationId = string;
export type DomainVerificationArn = string;
export interface CreateResourceConfigurationResponse {
  id?: string;
  name?: string;
  arn?: string;
  resourceGatewayId?: string;
  resourceConfigurationGroupId?: string;
  type?: ResourceConfigurationType;
  portRanges?: string[];
  protocol?: ProtocolType;
  status?: string;
  resourceConfigurationDefinition?: ResourceConfigurationDefinition;
  allowAssociationToShareableServiceNetwork?: boolean;
  createdAt?: Date;
  failureReason?: string;
  customDomainName?: string;
  domainVerificationId?: string;
  groupDomain?: string;
  domainVerificationArn?: string;
}
const CreateResourceConfigurationResponse = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CreateResourceConfigurationResponse>;
export type ResourceGatewayName = string;
export type VpcId = string;
export type SubnetId = string;
export type SubnetList = string[];
const SubnetList = PortRangeList as any as S.Schema<SubnetList>;
export type SecurityGroupId = string;
export type SecurityGroupList = string[];
const SecurityGroupList = PortRangeList as any as S.Schema<SecurityGroupList>;
export type ResourceGatewayIpAddressType = string;
export type Ipv4AddressesPerEni = number;
export type ResourceConfigDnsResolution = string;
export interface CreateResourceGatewayRequest {
  clientToken?: string;
  name: string;
  vpcIdentifier?: string;
  subnetIds?: string[];
  securityGroupIds?: string[];
  ipAddressType?: string;
  ipv4AddressesPerEni?: number;
  resourceConfigDnsResolution?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateResourceGatewayRequest = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<CreateResourceGatewayRequest>;
export type ResourceGatewayArn = string;
export type ResourceGatewayStatus = string;
export interface CreateResourceGatewayResponse {
  name?: string;
  id?: string;
  arn?: string;
  status?: string;
  vpcIdentifier?: string;
  subnetIds?: string[];
  securityGroupIds?: string[];
  ipAddressType?: string;
  ipv4AddressesPerEni?: number;
  resourceConfigDnsResolution?: string;
}
const CreateResourceGatewayResponse = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<CreateResourceGatewayResponse>;
export interface CreateRuleRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
  name: string;
  match: RuleMatch;
  priority: number;
  action: RuleAction;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateRuleRequest = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<CreateRuleRequest>;
export interface CreateRuleResponse {
  arn?: string;
  id?: string;
  name?: string;
  match?: RuleMatch;
  priority?: number;
  action?: RuleAction;
}
const CreateRuleResponse = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<CreateRuleResponse>;
export type ServiceName = string;
export type ServiceCustomDomainName = string;
export type CertificateArn = string;
export type AuthType = string;
export type IdleTimeoutSeconds = number;
export interface CreateServiceRequest {
  clientToken?: string;
  name: string;
  tags?: { [key: string]: string | undefined };
  customDomainName?: string;
  certificateArn?: string;
  authType?: string;
  idleTimeoutSeconds?: number;
}
const CreateServiceRequest = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<CreateServiceRequest>;
export type ServiceStatus = string;
export interface DnsEntry {
  domainName?: string;
  hostedZoneId?: string;
}
const DnsEntry = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<DnsEntry>;
export interface CreateServiceResponse {
  id?: string;
  arn?: string;
  name?: string;
  customDomainName?: string;
  certificateArn?: string;
  status?: string;
  authType?: string;
  idleTimeoutSeconds?: number;
  dnsEntry?: DnsEntry;
}
const CreateServiceResponse = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<CreateServiceResponse>;
export type ServiceNetworkName = string;
export interface SharingConfig {
  enabled?: boolean;
}
const SharingConfig = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<SharingConfig>;
export interface CreateServiceNetworkRequest {
  clientToken?: string;
  name: string;
  authType?: string;
  tags?: { [key: string]: string | undefined };
  sharingConfig?: SharingConfig;
}
const CreateServiceNetworkRequest = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<CreateServiceNetworkRequest>;
export type ServiceNetworkId = string;
export type ServiceNetworkArn = string;
export interface CreateServiceNetworkResponse {
  id?: string;
  name?: string;
  arn?: string;
  sharingConfig?: SharingConfig;
  authType?: string;
}
const CreateServiceNetworkResponse = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<CreateServiceNetworkResponse>;
export type ServiceNetworkIdentifierWithoutRegex = string;
export interface CreateServiceNetworkResourceAssociationRequest {
  clientToken?: string;
  resourceConfigurationIdentifier: string;
  serviceNetworkIdentifier: string;
  privateDnsEnabled?: boolean;
  tags?: { [key: string]: string | undefined };
}
const CreateServiceNetworkResourceAssociationRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<CreateServiceNetworkResourceAssociationRequest>;
export type ServiceNetworkResourceAssociationId = string;
export type ServiceNetworkResourceAssociationArn = string;
export type ServiceNetworkResourceAssociationStatus = string;
export type AccountId = string;
export interface CreateServiceNetworkResourceAssociationResponse {
  id?: string;
  arn?: string;
  status?: string;
  createdBy?: string;
  privateDnsEnabled?: boolean;
}
const CreateServiceNetworkResourceAssociationResponse = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<CreateServiceNetworkResourceAssociationResponse>;
export type ServiceNetworkIdentifier = string;
export interface CreateServiceNetworkServiceAssociationRequest {
  clientToken?: string;
  serviceIdentifier: string;
  serviceNetworkIdentifier: string;
  tags?: { [key: string]: string | undefined };
}
const CreateServiceNetworkServiceAssociationRequest = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<CreateServiceNetworkServiceAssociationRequest>;
export type ServiceNetworkServiceAssociationIdentifier = string;
export type ServiceNetworkServiceAssociationStatus = string;
export type ServiceNetworkServiceAssociationArn = string;
export interface CreateServiceNetworkServiceAssociationResponse {
  id?: string;
  status?: string;
  arn?: string;
  createdBy?: string;
  customDomainName?: string;
  dnsEntry?: DnsEntry;
}
const CreateServiceNetworkServiceAssociationResponse = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<CreateServiceNetworkServiceAssociationResponse>;
export type PrivateDnsPreference = string;
export type PrivateDnsSpecifiedDomain = string;
export type PrivateDnsSpecifiedDomainsList = string[];
const PrivateDnsSpecifiedDomainsList =
  PortRangeList as any as S.Schema<PrivateDnsSpecifiedDomainsList>;
export interface DnsOptions {
  privateDnsPreference?: string;
  privateDnsSpecifiedDomains?: string[];
}
const DnsOptions = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<DnsOptions>;
export interface CreateServiceNetworkVpcAssociationRequest {
  clientToken?: string;
  serviceNetworkIdentifier: string;
  vpcIdentifier: string;
  privateDnsEnabled?: boolean;
  securityGroupIds?: string[];
  tags?: { [key: string]: string | undefined };
  dnsOptions?: DnsOptions;
}
const CreateServiceNetworkVpcAssociationRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<CreateServiceNetworkVpcAssociationRequest>;
export type ServiceNetworkVpcAssociationId = string;
export type ServiceNetworkVpcAssociationStatus = string;
export type ServiceNetworkVpcAssociationArn = string;
export interface CreateServiceNetworkVpcAssociationResponse {
  id?: string;
  status?: string;
  arn?: string;
  createdBy?: string;
  securityGroupIds?: string[];
  privateDnsEnabled?: boolean;
  dnsOptions?: DnsOptions;
}
const CreateServiceNetworkVpcAssociationResponse = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<CreateServiceNetworkVpcAssociationResponse>;
export type TargetGroupName = string;
export type TargetGroupType = string;
export type TargetGroupProtocol = string;
export type TargetGroupProtocolVersion = string;
export type IpAddressType = string;
export type HealthCheckProtocolVersion = string;
export type HealthCheckPort = number;
export type HealthCheckPath = string;
export type HealthCheckIntervalSeconds = number;
export type HealthCheckTimeoutSeconds = number;
export type HealthyThresholdCount = number;
export type UnhealthyThresholdCount = number;
export type HttpCodeMatcher = string;
export type Matcher = { httpCode: string };
const Matcher = /*@__PURE__*/ __L.at(__c6, 2);
export interface HealthCheckConfig {
  enabled?: boolean;
  protocol?: string;
  protocolVersion?: string;
  port?: number;
  path?: string;
  healthCheckIntervalSeconds?: number;
  healthCheckTimeoutSeconds?: number;
  healthyThresholdCount?: number;
  unhealthyThresholdCount?: number;
  matcher?: Matcher;
}
const HealthCheckConfig = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<HealthCheckConfig>;
export type LambdaEventStructureVersion = string;
export interface TargetGroupConfig {
  port?: number;
  protocol?: string;
  protocolVersion?: string;
  ipAddressType?: string;
  vpcIdentifier?: string;
  healthCheck?: HealthCheckConfig;
  lambdaEventStructureVersion?: string;
}
const TargetGroupConfig = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<TargetGroupConfig>;
export interface CreateTargetGroupRequest {
  name: string;
  type: string;
  config?: TargetGroupConfig;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateTargetGroupRequest = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<CreateTargetGroupRequest>;
export type TargetGroupId = string;
export type TargetGroupArn = string;
export type TargetGroupStatus = string;
export interface CreateTargetGroupResponse {
  id?: string;
  arn?: string;
  name?: string;
  type?: string;
  config?: TargetGroupConfig;
  status?: string;
}
const CreateTargetGroupResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<CreateTargetGroupResponse>;
export type AccessLogSubscriptionIdentifier = string;
export interface DeleteAccessLogSubscriptionRequest {
  accessLogSubscriptionIdentifier: string;
}
const DeleteAccessLogSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<DeleteAccessLogSubscriptionRequest>;
export interface DeleteAccessLogSubscriptionResponse {}
const DeleteAccessLogSubscriptionResponse = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DeleteAccessLogSubscriptionResponse>;
export interface DeleteAuthPolicyRequest {
  resourceIdentifier: string;
}
const DeleteAuthPolicyRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DeleteAuthPolicyRequest>;
export interface DeleteAuthPolicyResponse {}
const DeleteAuthPolicyResponse = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DeleteAuthPolicyResponse>;
export interface DeleteDomainVerificationRequest {
  domainVerificationIdentifier: string;
}
const DeleteDomainVerificationRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<DeleteDomainVerificationRequest>;
export interface DeleteDomainVerificationResponse {}
const DeleteDomainVerificationResponse =
  DeleteAccessLogSubscriptionResponse as any as S.Schema<DeleteDomainVerificationResponse>;
export interface DeleteListenerRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
}
const DeleteListenerRequest = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<DeleteListenerRequest>;
export interface DeleteListenerResponse {}
const DeleteListenerResponse = DeleteAuthPolicyResponse as any as S.Schema<DeleteListenerResponse>;
export interface DeleteResourceConfigurationRequest {
  resourceConfigurationIdentifier: string;
}
const DeleteResourceConfigurationRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<DeleteResourceConfigurationRequest>;
export interface DeleteResourceConfigurationResponse {}
const DeleteResourceConfigurationResponse =
  DeleteAccessLogSubscriptionResponse as any as S.Schema<DeleteResourceConfigurationResponse>;
export type ResourceEndpointAssociationIdentifier = string;
export interface DeleteResourceEndpointAssociationRequest {
  resourceEndpointAssociationIdentifier: string;
}
const DeleteResourceEndpointAssociationRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<DeleteResourceEndpointAssociationRequest>;
export type ResourceEndpointAssociationId = string;
export type ResourceEndpointAssociationArn = string;
export type VpcEndpointId = string;
export interface DeleteResourceEndpointAssociationResponse {
  id?: string;
  arn?: string;
  resourceConfigurationId?: string;
  resourceConfigurationArn?: string;
  vpcEndpointId?: string;
}
const DeleteResourceEndpointAssociationResponse = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DeleteResourceEndpointAssociationResponse>;
export interface DeleteResourceGatewayRequest {
  resourceGatewayIdentifier: string;
}
const DeleteResourceGatewayRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<DeleteResourceGatewayRequest>;
export interface DeleteResourceGatewayResponse {
  id?: string;
  arn?: string;
  name?: string;
  status?: string;
}
const DeleteResourceGatewayResponse = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<DeleteResourceGatewayResponse>;
export interface DeleteResourcePolicyRequest {
  resourceArn: string;
}
const DeleteResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<DeleteResourcePolicyRequest>;
export interface DeleteResourcePolicyResponse {}
const DeleteResourcePolicyResponse =
  DeleteAuthPolicyResponse as any as S.Schema<DeleteResourcePolicyResponse>;
export interface DeleteRuleRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
  ruleIdentifier: string;
}
const DeleteRuleRequest = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<DeleteRuleRequest>;
export interface DeleteRuleResponse {}
const DeleteRuleResponse = DeleteAuthPolicyResponse as any as S.Schema<DeleteRuleResponse>;
export interface DeleteServiceRequest {
  serviceIdentifier: string;
}
const DeleteServiceRequest = /*@__PURE__*/ __L.at(__c8, 4) as any as S.Schema<DeleteServiceRequest>;
export interface DeleteServiceResponse {
  id?: string;
  arn?: string;
  name?: string;
  status?: string;
}
const DeleteServiceResponse = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DeleteServiceResponse>;
export interface DeleteServiceNetworkRequest {
  serviceNetworkIdentifier: string;
}
const DeleteServiceNetworkRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DeleteServiceNetworkRequest>;
export interface DeleteServiceNetworkResponse {}
const DeleteServiceNetworkResponse =
  DeleteAuthPolicyResponse as any as S.Schema<DeleteServiceNetworkResponse>;
export type ServiceNetworkResourceAssociationIdentifier = string;
export interface DeleteServiceNetworkResourceAssociationRequest {
  serviceNetworkResourceAssociationIdentifier: string;
}
const DeleteServiceNetworkResourceAssociationRequest = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<DeleteServiceNetworkResourceAssociationRequest>;
export interface DeleteServiceNetworkResourceAssociationResponse {
  id?: string;
  arn?: string;
  status?: string;
}
const DeleteServiceNetworkResourceAssociationResponse = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<DeleteServiceNetworkResourceAssociationResponse>;
export interface DeleteServiceNetworkServiceAssociationRequest {
  serviceNetworkServiceAssociationIdentifier: string;
}
const DeleteServiceNetworkServiceAssociationRequest = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<DeleteServiceNetworkServiceAssociationRequest>;
export interface DeleteServiceNetworkServiceAssociationResponse {
  id?: string;
  status?: string;
  arn?: string;
}
const DeleteServiceNetworkServiceAssociationResponse = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<DeleteServiceNetworkServiceAssociationResponse>;
export type ServiceNetworkVpcAssociationIdentifier = string;
export interface DeleteServiceNetworkVpcAssociationRequest {
  serviceNetworkVpcAssociationIdentifier: string;
}
const DeleteServiceNetworkVpcAssociationRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<DeleteServiceNetworkVpcAssociationRequest>;
export interface DeleteServiceNetworkVpcAssociationResponse {
  id?: string;
  status?: string;
  arn?: string;
}
const DeleteServiceNetworkVpcAssociationResponse =
  DeleteServiceNetworkServiceAssociationResponse as any as S.Schema<DeleteServiceNetworkVpcAssociationResponse>;
export interface DeleteTargetGroupRequest {
  targetGroupIdentifier: string;
}
const DeleteTargetGroupRequest = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<DeleteTargetGroupRequest>;
export interface DeleteTargetGroupResponse {
  id?: string;
  arn?: string;
  status?: string;
}
const DeleteTargetGroupResponse =
  DeleteServiceNetworkResourceAssociationResponse as any as S.Schema<DeleteTargetGroupResponse>;
export interface Target {
  id: string;
  port?: number;
}
const Target = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<Target>;
export type TargetList = Target[];
const TargetList = /*@__PURE__*/ __L.at(__c9, 6);
export interface DeregisterTargetsRequest {
  targetGroupIdentifier: string;
  targets: Target[];
}
const DeregisterTargetsRequest = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<DeregisterTargetsRequest>;
export interface TargetFailure {
  id?: string;
  port?: number;
  failureCode?: string;
  failureMessage?: string;
}
const TargetFailure = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<TargetFailure>;
export type TargetFailureList = TargetFailure[];
const TargetFailureList = /*@__PURE__*/ __L.at(__c10, 1);
export interface DeregisterTargetsResponse {
  successful?: Target[];
  unsuccessful?: TargetFailure[];
}
const DeregisterTargetsResponse = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<DeregisterTargetsResponse>;
export interface GetAccessLogSubscriptionRequest {
  accessLogSubscriptionIdentifier: string;
}
const GetAccessLogSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<GetAccessLogSubscriptionRequest>;
export interface GetAccessLogSubscriptionResponse {
  id: string;
  arn: string;
  resourceId: string;
  resourceArn: string;
  destinationArn: string;
  serviceNetworkLogType?: string;
  createdAt: Date;
  lastUpdatedAt: Date;
}
const GetAccessLogSubscriptionResponse = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<GetAccessLogSubscriptionResponse>;
export interface GetAuthPolicyRequest {
  resourceIdentifier: string;
}
const GetAuthPolicyRequest = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<GetAuthPolicyRequest>;
export type AuthPolicyString = string;
export type AuthPolicyState = string;
export interface GetAuthPolicyResponse {
  policy?: string;
  state?: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
}
const GetAuthPolicyResponse = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<GetAuthPolicyResponse>;
export interface GetDomainVerificationRequest {
  domainVerificationIdentifier: string;
}
const GetDomainVerificationRequest = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<GetDomainVerificationRequest>;
export type VerificationStatus = string;
export interface TxtMethodConfig {
  value: string;
  name: string;
}
const TxtMethodConfig = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<TxtMethodConfig>;
export interface GetDomainVerificationResponse {
  id: string;
  arn: string;
  domainName: string;
  status: string;
  txtMethodConfig?: TxtMethodConfig;
  createdAt: Date;
  lastVerifiedTime?: Date;
  tags?: { [key: string]: string | undefined };
}
const GetDomainVerificationResponse = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<GetDomainVerificationResponse>;
export interface GetListenerRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
}
const GetListenerRequest = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<GetListenerRequest>;
export interface GetListenerResponse {
  arn?: string;
  id?: string;
  name?: string;
  protocol?: string;
  port?: number;
  serviceArn?: string;
  serviceId?: string;
  defaultAction?: RuleAction;
  createdAt?: Date;
  lastUpdatedAt?: Date;
}
const GetListenerResponse = /*@__PURE__*/ __L.at(__c11, 3) as any as S.Schema<GetListenerResponse>;
export interface GetResourceConfigurationRequest {
  resourceConfigurationIdentifier: string;
}
const GetResourceConfigurationRequest = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<GetResourceConfigurationRequest>;
export interface GetResourceConfigurationResponse {
  id?: string;
  name?: string;
  arn?: string;
  resourceGatewayId?: string;
  resourceConfigurationGroupId?: string;
  type?: ResourceConfigurationType;
  allowAssociationToShareableServiceNetwork?: boolean;
  portRanges?: string[];
  protocol?: ProtocolType;
  customDomainName?: string;
  status?: string;
  resourceConfigurationDefinition?: ResourceConfigurationDefinition;
  createdAt?: Date;
  amazonManaged?: boolean;
  failureReason?: string;
  lastUpdatedAt?: Date;
  domainVerificationId?: string;
  domainVerificationArn?: string;
  domainVerificationStatus?: string;
  groupDomain?: string;
}
const GetResourceConfigurationResponse = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<GetResourceConfigurationResponse>;
export interface GetResourceGatewayRequest {
  resourceGatewayIdentifier: string;
}
const GetResourceGatewayRequest = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<GetResourceGatewayRequest>;
export interface GetResourceGatewayResponse {
  name?: string;
  id?: string;
  arn?: string;
  status?: string;
  vpcId?: string;
  subnetIds?: string[];
  serviceManaged?: boolean;
  managedBy?: string;
  securityGroupIds?: string[];
  ipAddressType?: string;
  ipv4AddressesPerEni?: number;
  resourceConfigDnsResolution?: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
}
const GetResourceGatewayResponse = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<GetResourceGatewayResponse>;
export interface GetResourcePolicyRequest {
  resourceArn: string;
}
const GetResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<GetResourcePolicyRequest>;
export type PolicyString = string;
export interface GetResourcePolicyResponse {
  policy?: string;
}
const GetResourcePolicyResponse = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<GetResourcePolicyResponse>;
export interface GetRuleRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
  ruleIdentifier: string;
}
const GetRuleRequest = /*@__PURE__*/ __L.at(__c12, 2) as any as S.Schema<GetRuleRequest>;
export interface GetRuleResponse {
  arn?: string;
  id?: string;
  name?: string;
  isDefault?: boolean;
  match?: RuleMatch;
  priority?: number;
  action?: RuleAction;
  createdAt?: Date;
  lastUpdatedAt?: Date;
}
const GetRuleResponse = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<GetRuleResponse>;
export interface GetServiceRequest {
  serviceIdentifier: string;
}
const GetServiceRequest = /*@__PURE__*/ __L.at(__c12, 4) as any as S.Schema<GetServiceRequest>;
export interface GetServiceResponse {
  id?: string;
  name?: string;
  arn?: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  dnsEntry?: DnsEntry;
  customDomainName?: string;
  certificateArn?: string;
  status?: string;
  authType?: string;
  idleTimeoutSeconds?: number;
  failureCode?: string;
  failureMessage?: string;
}
const GetServiceResponse = /*@__PURE__*/ __L.at(__c12, 5) as any as S.Schema<GetServiceResponse>;
export interface GetServiceNetworkRequest {
  serviceNetworkIdentifier: string;
}
const GetServiceNetworkRequest = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<GetServiceNetworkRequest>;
export interface GetServiceNetworkResponse {
  id?: string;
  name?: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  arn?: string;
  authType?: string;
  sharingConfig?: SharingConfig;
  numberOfAssociatedVPCs?: number;
  numberOfAssociatedServices?: number;
}
const GetServiceNetworkResponse = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<GetServiceNetworkResponse>;
export interface GetServiceNetworkResourceAssociationRequest {
  serviceNetworkResourceAssociationIdentifier: string;
}
const GetServiceNetworkResourceAssociationRequest = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<GetServiceNetworkResourceAssociationRequest>;
export type ServiceNetworkNameWithoutRegex = string;
export interface GetServiceNetworkResourceAssociationResponse {
  id?: string;
  arn?: string;
  status?: string;
  createdBy?: string;
  createdAt?: Date;
  resourceConfigurationId?: string;
  resourceConfigurationArn?: string;
  resourceConfigurationName?: string;
  serviceNetworkId?: string;
  serviceNetworkArn?: string;
  serviceNetworkName?: string;
  failureReason?: string;
  failureCode?: string;
  lastUpdatedAt?: Date;
  privateDnsEntry?: DnsEntry;
  privateDnsEnabled?: boolean;
  dnsEntry?: DnsEntry;
  isManagedAssociation?: boolean;
  domainVerificationStatus?: string;
}
const GetServiceNetworkResourceAssociationResponse = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<GetServiceNetworkResourceAssociationResponse>;
export interface GetServiceNetworkServiceAssociationRequest {
  serviceNetworkServiceAssociationIdentifier: string;
}
const GetServiceNetworkServiceAssociationRequest = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<GetServiceNetworkServiceAssociationRequest>;
export interface GetServiceNetworkServiceAssociationResponse {
  id?: string;
  status?: string;
  arn?: string;
  createdBy?: string;
  createdAt?: Date;
  serviceId?: string;
  serviceName?: string;
  serviceArn?: string;
  serviceNetworkId?: string;
  serviceNetworkName?: string;
  serviceNetworkArn?: string;
  dnsEntry?: DnsEntry;
  customDomainName?: string;
  failureMessage?: string;
  failureCode?: string;
}
const GetServiceNetworkServiceAssociationResponse = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<GetServiceNetworkServiceAssociationResponse>;
export interface GetServiceNetworkVpcAssociationRequest {
  serviceNetworkVpcAssociationIdentifier: string;
}
const GetServiceNetworkVpcAssociationRequest = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<GetServiceNetworkVpcAssociationRequest>;
export interface GetServiceNetworkVpcAssociationResponse {
  id?: string;
  status?: string;
  arn?: string;
  createdBy?: string;
  createdAt?: Date;
  serviceNetworkId?: string;
  serviceNetworkName?: string;
  serviceNetworkArn?: string;
  vpcId?: string;
  securityGroupIds?: string[];
  privateDnsEnabled?: boolean;
  failureMessage?: string;
  failureCode?: string;
  lastUpdatedAt?: Date;
  dnsOptions?: DnsOptions;
}
const GetServiceNetworkVpcAssociationResponse = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<GetServiceNetworkVpcAssociationResponse>;
export interface GetTargetGroupRequest {
  targetGroupIdentifier: string;
}
const GetTargetGroupRequest = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<GetTargetGroupRequest>;
export type ServiceArnList = string[];
const ServiceArnList = PortRangeList as any as S.Schema<ServiceArnList>;
export interface GetTargetGroupResponse {
  id?: string;
  arn?: string;
  name?: string;
  type?: string;
  config?: TargetGroupConfig;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  status?: string;
  serviceArns?: string[];
  failureMessage?: string;
  failureCode?: string;
}
const GetTargetGroupResponse = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<GetTargetGroupResponse>;
export type MaxResults = number;
export type NextToken = string;
export interface ListAccessLogSubscriptionsRequest {
  resourceIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
const ListAccessLogSubscriptionsRequest = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<ListAccessLogSubscriptionsRequest>;
export interface AccessLogSubscriptionSummary {
  id: string;
  arn: string;
  resourceId: string;
  resourceArn: string;
  destinationArn: string;
  serviceNetworkLogType?: string;
  createdAt: Date;
  lastUpdatedAt: Date;
}
const AccessLogSubscriptionSummary =
  GetAccessLogSubscriptionResponse as any as S.Schema<AccessLogSubscriptionSummary>;
export type AccessLogSubscriptionList = AccessLogSubscriptionSummary[];
const AccessLogSubscriptionList = /*@__PURE__*/ __L.at(__c14, 1);
export interface ListAccessLogSubscriptionsResponse {
  items: AccessLogSubscriptionSummary[];
  nextToken?: string;
}
const ListAccessLogSubscriptionsResponse = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<ListAccessLogSubscriptionsResponse>;
export interface ListDomainVerificationsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListDomainVerificationsRequest = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<ListDomainVerificationsRequest>;
export interface DomainVerificationSummary {
  id: string;
  arn: string;
  domainName: string;
  status: string;
  txtMethodConfig?: TxtMethodConfig;
  createdAt: Date;
  lastVerifiedTime?: Date;
  tags?: { [key: string]: string | undefined };
}
const DomainVerificationSummary =
  GetDomainVerificationResponse as any as S.Schema<DomainVerificationSummary>;
export type DomainVerificationList = DomainVerificationSummary[];
const DomainVerificationList = /*@__PURE__*/ __L.at(__c14, 4);
export interface ListDomainVerificationsResponse {
  items: DomainVerificationSummary[];
  nextToken?: string;
}
const ListDomainVerificationsResponse = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<ListDomainVerificationsResponse>;
export interface ListListenersRequest {
  serviceIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
const ListListenersRequest = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<ListListenersRequest>;
export interface ListenerSummary {
  arn?: string;
  id?: string;
  name?: string;
  protocol?: string;
  port?: number;
  createdAt?: Date;
  lastUpdatedAt?: Date;
}
const ListenerSummary = /*@__PURE__*/ __L.at(__c14, 7) as any as S.Schema<ListenerSummary>;
export type ListenerSummaryList = ListenerSummary[];
const ListenerSummaryList = /*@__PURE__*/ __L.at(__c15, 0);
export interface ListListenersResponse {
  items: ListenerSummary[];
  nextToken?: string;
}
const ListListenersResponse = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<ListListenersResponse>;
export interface ListResourceConfigurationsRequest {
  resourceGatewayIdentifier?: string;
  resourceConfigurationGroupIdentifier?: string;
  domainVerificationIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListResourceConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<ListResourceConfigurationsRequest>;
export interface ResourceConfigurationSummary {
  id?: string;
  name?: string;
  arn?: string;
  resourceGatewayId?: string;
  resourceConfigurationGroupId?: string;
  type?: ResourceConfigurationType;
  status?: string;
  amazonManaged?: boolean;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  customDomainName?: string;
  domainVerificationId?: string;
  groupDomain?: string;
}
const ResourceConfigurationSummary = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<ResourceConfigurationSummary>;
export type ResourceConfigurationSummaryList = ResourceConfigurationSummary[];
const ResourceConfigurationSummaryList = /*@__PURE__*/ __L.at(__c15, 4);
export interface ListResourceConfigurationsResponse {
  items?: ResourceConfigurationSummary[];
  nextToken?: string;
}
const ListResourceConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<ListResourceConfigurationsResponse>;
export type VpcEndpointOwner = string;
export interface ListResourceEndpointAssociationsRequest {
  resourceConfigurationIdentifier: string;
  resourceEndpointAssociationIdentifier?: string;
  vpcEndpointId?: string;
  vpcEndpointOwner?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListResourceEndpointAssociationsRequest = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<ListResourceEndpointAssociationsRequest>;
export type PayerResponsibilityScope = "ResourceGatewayCharges" | (string & {});
const PayerResponsibilityScope = S.String;

export type PayerResponsibilityPayer =
  | "VpcEndpointAccount"
  | "ResourceGatewayAccount"
  | (string & {});
const PayerResponsibilityPayer = S.String;

export interface PayerResponsibilityEntry {
  scope?: PayerResponsibilityScope;
  payerResponsibilityType?: PayerResponsibilityPayer;
}
const PayerResponsibilityEntry = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<PayerResponsibilityEntry>;
export type PayerResponsibilityList = PayerResponsibilityEntry[];
const PayerResponsibilityList = /*@__PURE__*/ __L.at(__c16, 0);
export interface ResourceEndpointAssociationSummary {
  id?: string;
  arn?: string;
  resourceConfigurationId?: string;
  resourceConfigurationArn?: string;
  resourceConfigurationName?: string;
  vpcEndpointId?: string;
  vpcEndpointOwner?: string;
  createdBy?: string;
  createdAt?: Date;
  payerResponsibility?: PayerResponsibilityEntry[];
}
const ResourceEndpointAssociationSummary = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<ResourceEndpointAssociationSummary>;
export type ResourceEndpointAssociationList = ResourceEndpointAssociationSummary[];
const ResourceEndpointAssociationList = /*@__PURE__*/ __L.at(__c16, 2);
export interface ListResourceEndpointAssociationsResponse {
  items: ResourceEndpointAssociationSummary[];
  nextToken?: string;
}
const ListResourceEndpointAssociationsResponse = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<ListResourceEndpointAssociationsResponse>;
export interface ListResourceGatewaysRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListResourceGatewaysRequest = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<ListResourceGatewaysRequest>;
export interface ResourceGatewaySummary {
  name?: string;
  id?: string;
  arn?: string;
  status?: string;
  vpcIdentifier?: string;
  subnetIds?: string[];
  securityGroupIds?: string[];
  ipAddressType?: string;
  ipv4AddressesPerEni?: number;
  resourceConfigDnsResolution?: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
}
const ResourceGatewaySummary = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<ResourceGatewaySummary>;
export type ResourceGatewayList = ResourceGatewaySummary[];
const ResourceGatewayList = /*@__PURE__*/ __L.at(__c16, 6);
export interface ListResourceGatewaysResponse {
  items?: ResourceGatewaySummary[];
  nextToken?: string;
}
const ListResourceGatewaysResponse = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<ListResourceGatewaysResponse>;
export interface ListRulesRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
const ListRulesRequest = /*@__PURE__*/ __L.at(__c17, 0) as any as S.Schema<ListRulesRequest>;
export interface RuleSummary {
  arn?: string;
  id?: string;
  name?: string;
  isDefault?: boolean;
  priority?: number;
  createdAt?: Date;
  lastUpdatedAt?: Date;
}
const RuleSummary = /*@__PURE__*/ __L.at(__c17, 1) as any as S.Schema<RuleSummary>;
export type RuleSummaryList = RuleSummary[];
const RuleSummaryList = /*@__PURE__*/ __L.at(__c17, 2);
export interface ListRulesResponse {
  items: RuleSummary[];
  nextToken?: string;
}
const ListRulesResponse = /*@__PURE__*/ __L.at(__c17, 3) as any as S.Schema<ListRulesResponse>;
export interface ListServiceNetworkResourceAssociationsRequest {
  serviceNetworkIdentifier?: string;
  resourceConfigurationIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
  includeChildren?: boolean;
}
const ListServiceNetworkResourceAssociationsRequest = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<ListServiceNetworkResourceAssociationsRequest>;
export type ServiceNetworkArnWithoutRegex = string;
export interface ServiceNetworkResourceAssociationSummary {
  id?: string;
  arn?: string;
  status?: string;
  createdBy?: string;
  createdAt?: Date;
  resourceConfigurationId?: string;
  resourceConfigurationArn?: string;
  resourceConfigurationName?: string;
  serviceNetworkId?: string;
  serviceNetworkArn?: string;
  serviceNetworkName?: string;
  dnsEntry?: DnsEntry;
  privateDnsEntry?: DnsEntry;
  isManagedAssociation?: boolean;
  failureCode?: string;
  privateDnsEnabled?: boolean;
}
const ServiceNetworkResourceAssociationSummary = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<ServiceNetworkResourceAssociationSummary>;
export type ServiceNetworkResourceAssociationList = ServiceNetworkResourceAssociationSummary[];
const ServiceNetworkResourceAssociationList = /*@__PURE__*/ __L.at(__c17, 6);
export interface ListServiceNetworkResourceAssociationsResponse {
  items: ServiceNetworkResourceAssociationSummary[];
  nextToken?: string;
}
const ListServiceNetworkResourceAssociationsResponse = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<ListServiceNetworkResourceAssociationsResponse>;
export interface ListServiceNetworksRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListServiceNetworksRequest = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<ListServiceNetworksRequest>;
export interface ServiceNetworkSummary {
  id?: string;
  name?: string;
  arn?: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  numberOfAssociatedVPCs?: number;
  numberOfAssociatedServices?: number;
  numberOfAssociatedResourceConfigurations?: number;
}
const ServiceNetworkSummary = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<ServiceNetworkSummary>;
export type ServiceNetworkList = ServiceNetworkSummary[];
const ServiceNetworkList = /*@__PURE__*/ __L.at(__c18, 2);
export interface ListServiceNetworksResponse {
  items: ServiceNetworkSummary[];
  nextToken?: string;
}
const ListServiceNetworksResponse = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<ListServiceNetworksResponse>;
export interface ListServiceNetworkServiceAssociationsRequest {
  serviceNetworkIdentifier?: string;
  serviceIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListServiceNetworkServiceAssociationsRequest = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<ListServiceNetworkServiceAssociationsRequest>;
export interface ServiceNetworkServiceAssociationSummary {
  id?: string;
  status?: string;
  arn?: string;
  createdBy?: string;
  createdAt?: Date;
  serviceId?: string;
  serviceName?: string;
  serviceArn?: string;
  serviceNetworkId?: string;
  serviceNetworkName?: string;
  serviceNetworkArn?: string;
  dnsEntry?: DnsEntry;
  customDomainName?: string;
}
const ServiceNetworkServiceAssociationSummary = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<ServiceNetworkServiceAssociationSummary>;
export type ServiceNetworkServiceAssociationList = ServiceNetworkServiceAssociationSummary[];
const ServiceNetworkServiceAssociationList = /*@__PURE__*/ __L.at(__c18, 6);
export interface ListServiceNetworkServiceAssociationsResponse {
  items: ServiceNetworkServiceAssociationSummary[];
  nextToken?: string;
}
const ListServiceNetworkServiceAssociationsResponse = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<ListServiceNetworkServiceAssociationsResponse>;
export interface ListServiceNetworkVpcAssociationsRequest {
  serviceNetworkIdentifier?: string;
  vpcIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListServiceNetworkVpcAssociationsRequest = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<ListServiceNetworkVpcAssociationsRequest>;
export interface ServiceNetworkVpcAssociationSummary {
  id?: string;
  arn?: string;
  status?: string;
  createdBy?: string;
  createdAt?: Date;
  serviceNetworkId?: string;
  serviceNetworkName?: string;
  serviceNetworkArn?: string;
  privateDnsEnabled?: boolean;
  dnsOptions?: DnsOptions;
  vpcId?: string;
  lastUpdatedAt?: Date;
}
const ServiceNetworkVpcAssociationSummary = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<ServiceNetworkVpcAssociationSummary>;
export type ServiceNetworkVpcAssociationList = ServiceNetworkVpcAssociationSummary[];
const ServiceNetworkVpcAssociationList = /*@__PURE__*/ __L.at(__c19, 2);
export interface ListServiceNetworkVpcAssociationsResponse {
  items: ServiceNetworkVpcAssociationSummary[];
  nextToken?: string;
}
const ListServiceNetworkVpcAssociationsResponse = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<ListServiceNetworkVpcAssociationsResponse>;
export interface ListServiceNetworkVpcEndpointAssociationsRequest {
  serviceNetworkIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
const ListServiceNetworkVpcEndpointAssociationsRequest = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<ListServiceNetworkVpcEndpointAssociationsRequest>;
export interface ServiceNetworkEndpointAssociation {
  vpcEndpointId?: string;
  vpcId?: string;
  vpcEndpointOwnerId?: string;
  id?: string;
  state?: string;
  serviceNetworkArn?: string;
  createdAt?: Date;
}
const ServiceNetworkEndpointAssociation = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<ServiceNetworkEndpointAssociation>;
export type ServiceNetworkVpcEndpointAssociationList = ServiceNetworkEndpointAssociation[];
const ServiceNetworkVpcEndpointAssociationList = /*@__PURE__*/ __L.at(__c19, 6);
export interface ListServiceNetworkVpcEndpointAssociationsResponse {
  items: ServiceNetworkEndpointAssociation[];
  nextToken?: string;
}
const ListServiceNetworkVpcEndpointAssociationsResponse = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<ListServiceNetworkVpcEndpointAssociationsResponse>;
export interface ListServicesRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListServicesRequest = /*@__PURE__*/ __L.at(__c20, 0) as any as S.Schema<ListServicesRequest>;
export interface ServiceSummary {
  id?: string;
  name?: string;
  arn?: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  dnsEntry?: DnsEntry;
  customDomainName?: string;
  status?: string;
}
const ServiceSummary = /*@__PURE__*/ __L.at(__c20, 1) as any as S.Schema<ServiceSummary>;
export type ServiceList = ServiceSummary[];
const ServiceList = /*@__PURE__*/ __L.at(__c20, 2);
export interface ListServicesResponse {
  items?: ServiceSummary[];
  nextToken?: string;
}
const ListServicesResponse = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<ListServicesResponse>;
export type Arn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListTargetGroupsRequest {
  maxResults?: number;
  nextToken?: string;
  vpcIdentifier?: string;
  targetGroupType?: string;
}
const ListTargetGroupsRequest = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<ListTargetGroupsRequest>;
export interface TargetGroupSummary {
  id?: string;
  arn?: string;
  name?: string;
  type?: string;
  createdAt?: Date;
  port?: number;
  protocol?: string;
  ipAddressType?: string;
  vpcIdentifier?: string;
  lastUpdatedAt?: Date;
  status?: string;
  serviceArns?: string[];
  lambdaEventStructureVersion?: string;
}
const TargetGroupSummary = /*@__PURE__*/ __L.at(__c20, 7) as any as S.Schema<TargetGroupSummary>;
export type TargetGroupList = TargetGroupSummary[];
const TargetGroupList = /*@__PURE__*/ __L.at(__c21, 0);
export interface ListTargetGroupsResponse {
  items?: TargetGroupSummary[];
  nextToken?: string;
}
const ListTargetGroupsResponse = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<ListTargetGroupsResponse>;
export interface ListTargetsRequest {
  targetGroupIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  targets?: Target[];
}
const ListTargetsRequest = /*@__PURE__*/ __L.at(__c21, 2) as any as S.Schema<ListTargetsRequest>;
export type TargetStatus = string;
export interface TargetSummary {
  id?: string;
  port?: number;
  status?: string;
  reasonCode?: string;
}
const TargetSummary = /*@__PURE__*/ __L.at(__c21, 3) as any as S.Schema<TargetSummary>;
export type TargetSummaryList = TargetSummary[];
const TargetSummaryList = /*@__PURE__*/ __L.at(__c21, 4);
export interface ListTargetsResponse {
  items: TargetSummary[];
  nextToken?: string;
}
const ListTargetsResponse = /*@__PURE__*/ __L.at(__c21, 5) as any as S.Schema<ListTargetsResponse>;
export interface PutAuthPolicyRequest {
  resourceIdentifier: string;
  policy: string;
}
const PutAuthPolicyRequest = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<PutAuthPolicyRequest>;
export interface PutAuthPolicyResponse {
  policy?: string;
  state?: string;
}
const PutAuthPolicyResponse = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<PutAuthPolicyResponse>;
export interface PutResourcePolicyRequest {
  resourceArn: string;
  policy: string;
}
const PutResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<PutResourcePolicyRequest>;
export interface PutResourcePolicyResponse {}
const PutResourcePolicyResponse =
  DeleteAuthPolicyResponse as any as S.Schema<PutResourcePolicyResponse>;
export interface RegisterTargetsRequest {
  targetGroupIdentifier: string;
  targets: Target[];
}
const RegisterTargetsRequest = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<RegisterTargetsRequest>;
export interface RegisterTargetsResponse {
  successful?: Target[];
  unsuccessful?: TargetFailure[];
}
const RegisterTargetsResponse = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<RegisterTargetsResponse>;
export interface StartDomainVerificationRequest {
  clientToken?: string;
  domainName: string;
  tags?: { [key: string]: string | undefined };
}
const StartDomainVerificationRequest = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<StartDomainVerificationRequest>;
export interface StartDomainVerificationResponse {
  id: string;
  arn: string;
  domainName: string;
  status: string;
  txtMethodConfig?: TxtMethodConfig;
}
const StartDomainVerificationResponse = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<StartDomainVerificationResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c22, 5) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteAuthPolicyResponse as any as S.Schema<TagResourceResponse>;
export type TagKeys = string[];
const TagKeys = PortRangeList as any as S.Schema<TagKeys>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteAuthPolicyResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAccessLogSubscriptionRequest {
  accessLogSubscriptionIdentifier: string;
  destinationArn: string;
}
const UpdateAccessLogSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<UpdateAccessLogSubscriptionRequest>;
export interface UpdateAccessLogSubscriptionResponse {
  id: string;
  arn: string;
  resourceId: string;
  resourceArn: string;
  destinationArn: string;
}
const UpdateAccessLogSubscriptionResponse = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<UpdateAccessLogSubscriptionResponse>;
export interface UpdateListenerRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
  defaultAction: RuleAction;
}
const UpdateListenerRequest = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<UpdateListenerRequest>;
export interface UpdateListenerResponse {
  arn?: string;
  id?: string;
  name?: string;
  protocol?: string;
  port?: number;
  serviceArn?: string;
  serviceId?: string;
  defaultAction?: RuleAction;
}
const UpdateListenerResponse = CreateListenerResponse as any as S.Schema<UpdateListenerResponse>;
export interface UpdateResourceConfigurationRequest {
  resourceConfigurationIdentifier: string;
  resourceConfigurationDefinition?: ResourceConfigurationDefinition;
  allowAssociationToShareableServiceNetwork?: boolean;
  portRanges?: string[];
}
const UpdateResourceConfigurationRequest = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<UpdateResourceConfigurationRequest>;
export interface UpdateResourceConfigurationResponse {
  id?: string;
  name?: string;
  arn?: string;
  resourceGatewayId?: string;
  resourceConfigurationGroupId?: string;
  type?: ResourceConfigurationType;
  portRanges?: string[];
  allowAssociationToShareableServiceNetwork?: boolean;
  protocol?: ProtocolType;
  status?: string;
  resourceConfigurationDefinition?: ResourceConfigurationDefinition;
}
const UpdateResourceConfigurationResponse = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<UpdateResourceConfigurationResponse>;
export interface UpdateResourceGatewayRequest {
  resourceGatewayIdentifier: string;
  securityGroupIds?: string[];
}
const UpdateResourceGatewayRequest = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<UpdateResourceGatewayRequest>;
export interface UpdateResourceGatewayResponse {
  name?: string;
  id?: string;
  arn?: string;
  status?: string;
  vpcId?: string;
  subnetIds?: string[];
  securityGroupIds?: string[];
  ipAddressType?: string;
}
const UpdateResourceGatewayResponse = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<UpdateResourceGatewayResponse>;
export interface UpdateRuleRequest {
  serviceIdentifier: string;
  listenerIdentifier: string;
  ruleIdentifier: string;
  match?: RuleMatch;
  priority?: number;
  action?: RuleAction;
}
const UpdateRuleRequest = /*@__PURE__*/ __L.at(__c23, 6) as any as S.Schema<UpdateRuleRequest>;
export interface UpdateRuleResponse {
  arn?: string;
  id?: string;
  name?: string;
  isDefault?: boolean;
  match?: RuleMatch;
  priority?: number;
  action?: RuleAction;
}
const UpdateRuleResponse = RuleUpdateSuccess as any as S.Schema<UpdateRuleResponse>;
export interface UpdateServiceRequest {
  serviceIdentifier: string;
  certificateArn?: string;
  authType?: string;
  idleTimeoutSeconds?: number;
}
const UpdateServiceRequest = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<UpdateServiceRequest>;
export interface UpdateServiceResponse {
  id?: string;
  arn?: string;
  name?: string;
  customDomainName?: string;
  certificateArn?: string;
  authType?: string;
  idleTimeoutSeconds?: number;
}
const UpdateServiceResponse = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<UpdateServiceResponse>;
export interface UpdateServiceNetworkRequest {
  serviceNetworkIdentifier: string;
  authType: string;
}
const UpdateServiceNetworkRequest = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<UpdateServiceNetworkRequest>;
export interface UpdateServiceNetworkResponse {
  id?: string;
  name?: string;
  arn?: string;
  authType?: string;
}
const UpdateServiceNetworkResponse = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<UpdateServiceNetworkResponse>;
export interface UpdateServiceNetworkVpcAssociationRequest {
  serviceNetworkVpcAssociationIdentifier: string;
  securityGroupIds?: string[];
  privateDnsEnabled?: boolean;
  dnsOptions?: DnsOptions;
}
const UpdateServiceNetworkVpcAssociationRequest = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<UpdateServiceNetworkVpcAssociationRequest>;
export interface UpdateServiceNetworkVpcAssociationResponse {
  id?: string;
  arn?: string;
  status?: string;
  createdBy?: string;
  securityGroupIds?: string[];
  privateDnsEnabled?: boolean;
  dnsOptions?: DnsOptions;
}
const UpdateServiceNetworkVpcAssociationResponse = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<UpdateServiceNetworkVpcAssociationResponse>;
export interface UpdateTargetGroupRequest {
  targetGroupIdentifier: string;
  healthCheck: HealthCheckConfig;
}
const UpdateTargetGroupRequest = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<UpdateTargetGroupRequest>;
export interface UpdateTargetGroupResponse {
  id?: string;
  arn?: string;
  name?: string;
  type?: string;
  config?: TargetGroupConfig;
  status?: string;
}
const UpdateTargetGroupResponse =
  CreateTargetGroupResponse as any as S.Schema<UpdateTargetGroupResponse>;
export type ValidationExceptionReason = string;
export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c24, 7);
export type BatchUpdateRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the listener rules in a batch. You can use this operation to change the priority of listener rules. This can be useful when bulk updating or swapping rule priority.
 *
 * **Required permissions:** `vpc-lattice:UpdateRule`
 *
 * For more information, see How Amazon VPC Lattice works with IAM in the *Amazon VPC Lattice User Guide*.
 */
export const batchUpdateRule: API.OperationMethod<
  BatchUpdateRuleRequest,
  BatchUpdateRuleResponse,
  BatchUpdateRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateRuleRequest,
  output: BatchUpdateRuleResponse,
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
  operationName: "BatchUpdateRule",
}));

export type CreateAccessLogSubscriptionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner can use the access logs to audit the services in the network. The service network owner can only see access logs from clients and services that are associated with their service network. Access log entries represent traffic originated from VPCs associated with that network. For more information, see Access logs in the *Amazon VPC Lattice User Guide*.
 */
export const createAccessLogSubscription: API.OperationMethod<
  CreateAccessLogSubscriptionRequest,
  CreateAccessLogSubscriptionResponse,
  CreateAccessLogSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccessLogSubscriptionRequest,
  output: CreateAccessLogSubscriptionResponse,
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
  operationName: "CreateAccessLogSubscription",
}));

export type CreateListenerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services. For more information, see Listeners in the *Amazon VPC Lattice User Guide*.
 */
export const createListener: API.OperationMethod<
  CreateListenerRequest,
  CreateListenerResponse,
  CreateListenerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateListenerRequest,
  output: CreateListenerResponse,
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
  operationName: "CreateListener",
}));

export type CreateResourceConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a resource configuration. A resource configuration defines a specific resource. You can associate a resource configuration with a service network or a VPC endpoint.
 */
export const createResourceConfiguration: API.OperationMethod<
  CreateResourceConfigurationRequest,
  CreateResourceConfigurationResponse,
  CreateResourceConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateResourceConfigurationRequest,
  output: CreateResourceConfigurationResponse,
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
  operationName: "CreateResourceConfiguration",
}));

export type CreateResourceGatewayError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * A resource gateway is a point of ingress into the VPC where a resource resides. It spans multiple Availability Zones. For your resource to be accessible from all Availability Zones, you should create your resource gateways to span as many Availability Zones as possible. A VPC can have multiple resource gateways.
 */
export const createResourceGateway: API.OperationMethod<
  CreateResourceGatewayRequest,
  CreateResourceGatewayResponse,
  CreateResourceGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateResourceGatewayRequest,
  output: CreateResourceGatewayResponse,
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
  operationName: "CreateResourceGateway",
}));

export type CreateRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. For more information, see Listener rules in the *Amazon VPC Lattice User Guide*.
 */
export const createRule: API.OperationMethod<
  CreateRuleRequest,
  CreateRuleResponse,
  CreateRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateRuleRequest,
  output: CreateRuleResponse,
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
  operationName: "CreateRule",
}));

export type CreateServiceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a service. A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC).
 *
 * For more information, see Services in the *Amazon VPC Lattice User Guide*.
 */
export const createService: API.OperationMethod<
  CreateServiceRequest,
  CreateServiceResponse,
  CreateServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateServiceRequest,
  output: CreateServiceResponse,
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
  operationName: "CreateService",
}));

export type CreateServiceNetworkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a service network. A service network is a logical boundary for a collection of services. You can associate services and VPCs with a service network.
 *
 * For more information, see Service networks in the *Amazon VPC Lattice User Guide*.
 */
export const createServiceNetwork: API.OperationMethod<
  CreateServiceNetworkRequest,
  CreateServiceNetworkResponse,
  CreateServiceNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateServiceNetworkRequest,
  output: CreateServiceNetworkResponse,
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
  operationName: "CreateServiceNetwork",
}));

export type CreateServiceNetworkResourceAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates the specified service network with the specified resource configuration. This allows the resource configuration to receive connections through the service network, including through a service network VPC endpoint.
 */
export const createServiceNetworkResourceAssociation: API.OperationMethod<
  CreateServiceNetworkResourceAssociationRequest,
  CreateServiceNetworkResourceAssociationResponse,
  CreateServiceNetworkResourceAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateServiceNetworkResourceAssociationRequest,
  output: CreateServiceNetworkResourceAssociationResponse,
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
  operationName: "CreateServiceNetworkResourceAssociation",
}));

export type CreateServiceNetworkServiceAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates the specified service with the specified service network. For more information, see Manage service associations in the *Amazon VPC Lattice User Guide*.
 *
 * You can't use this operation if the service and service network are already associated or if there is a disassociation or deletion in progress. If the association fails, you can retry the operation by deleting the association and recreating it.
 *
 * You cannot associate a service and service network that are shared with a caller. The caller must own either the service or the service network.
 *
 * As a result of this operation, the association is created in the service network account and the association owner account.
 */
export const createServiceNetworkServiceAssociation: API.OperationMethod<
  CreateServiceNetworkServiceAssociationRequest,
  CreateServiceNetworkServiceAssociationResponse,
  CreateServiceNetworkServiceAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateServiceNetworkServiceAssociationRequest,
  output: CreateServiceNetworkServiceAssociationResponse,
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
  operationName: "CreateServiceNetworkServiceAssociation",
}));

export type CreateServiceNetworkVpcAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a VPC with a service network. When you associate a VPC with the service network, it enables all the resources within that VPC to be clients and communicate with other services in the service network. For more information, see Manage VPC associations in the *Amazon VPC Lattice User Guide*.
 *
 * You can't use this operation if there is a disassociation in progress. If the association fails, retry by deleting the association and recreating it.
 *
 * As a result of this operation, the association gets created in the service network account and the VPC owner account.
 *
 * If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.
 */
export const createServiceNetworkVpcAssociation: API.OperationMethod<
  CreateServiceNetworkVpcAssociationRequest,
  CreateServiceNetworkVpcAssociationResponse,
  CreateServiceNetworkVpcAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateServiceNetworkVpcAssociationRequest,
  output: CreateServiceNetworkVpcAssociationResponse,
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
  operationName: "CreateServiceNetworkVpcAssociation",
}));

export type CreateTargetGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a target group. A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service.
 *
 * For more information, see Target groups in the *Amazon VPC Lattice User Guide*.
 */
export const createTargetGroup: API.OperationMethod<
  CreateTargetGroupRequest,
  CreateTargetGroupResponse,
  CreateTargetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTargetGroupRequest,
  output: CreateTargetGroupResponse,
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
  operationName: "CreateTargetGroup",
}));

export type DeleteAccessLogSubscriptionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified access log subscription.
 */
export const deleteAccessLogSubscription: API.OperationMethod<
  DeleteAccessLogSubscriptionRequest,
  DeleteAccessLogSubscriptionResponse,
  DeleteAccessLogSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessLogSubscriptionRequest,
  output: DeleteAccessLogSubscriptionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccessLogSubscription",
}));

export type DeleteAuthPolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified auth policy. If an auth is set to `AWS_IAM` and the auth policy is deleted, all requests are denied. If you are trying to remove the auth policy completely, you must set the auth type to `NONE`. If auth is enabled on the resource, but no auth policy is set, all requests are denied.
 */
export const deleteAuthPolicy: API.OperationMethod<
  DeleteAuthPolicyRequest,
  DeleteAuthPolicyResponse,
  DeleteAuthPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAuthPolicyRequest,
  output: DeleteAuthPolicyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAuthPolicy",
}));

export type DeleteDomainVerificationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified domain verification.
 */
export const deleteDomainVerification: API.OperationMethod<
  DeleteDomainVerificationRequest,
  DeleteDomainVerificationResponse,
  DeleteDomainVerificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDomainVerificationRequest,
  output: DeleteDomainVerificationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDomainVerification",
}));

export type DeleteListenerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified listener.
 */
export const deleteListener: API.OperationMethod<
  DeleteListenerRequest,
  DeleteListenerResponse,
  DeleteListenerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteListenerRequest,
  output: DeleteListenerResponse,
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
  operationName: "DeleteListener",
}));

export type DeleteResourceConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified resource configuration.
 */
export const deleteResourceConfiguration: API.OperationMethod<
  DeleteResourceConfigurationRequest,
  DeleteResourceConfigurationResponse,
  DeleteResourceConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteResourceConfigurationRequest,
  output: DeleteResourceConfigurationResponse,
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
  operationName: "DeleteResourceConfiguration",
}));

export type DeleteResourceEndpointAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates the resource configuration from the resource VPC endpoint.
 */
export const deleteResourceEndpointAssociation: API.OperationMethod<
  DeleteResourceEndpointAssociationRequest,
  DeleteResourceEndpointAssociationResponse,
  DeleteResourceEndpointAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteResourceEndpointAssociationRequest,
  output: DeleteResourceEndpointAssociationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourceEndpointAssociation",
}));

export type DeleteResourceGatewayError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified resource gateway.
 */
export const deleteResourceGateway: API.OperationMethod<
  DeleteResourceGatewayRequest,
  DeleteResourceGatewayResponse,
  DeleteResourceGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteResourceGatewayRequest,
  output: DeleteResourceGatewayResponse,
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
  operationName: "DeleteResourceGateway",
}));

export type DeleteResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified resource policy.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteResourcePolicyRequest,
  output: DeleteResourcePolicyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicy",
}));

export type DeleteRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. You can delete additional listener rules, but you cannot delete the default rule.
 *
 * For more information, see Listener rules in the *Amazon VPC Lattice User Guide*.
 */
export const deleteRule: API.OperationMethod<
  DeleteRuleRequest,
  DeleteRuleResponse,
  DeleteRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRuleRequest,
  output: DeleteRuleResponse,
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
  operationName: "DeleteRule",
}));

export type DeleteServiceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a service. A service can't be deleted if it's associated with a service network. If you delete a service, all resources related to the service, such as the resource policy, auth policy, listeners, listener rules, and access log subscriptions, are also deleted. For more information, see Delete a service in the *Amazon VPC Lattice User Guide*.
 */
export const deleteService: API.OperationMethod<
  DeleteServiceRequest,
  DeleteServiceResponse,
  DeleteServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteServiceRequest,
  output: DeleteServiceResponse,
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
  operationName: "DeleteService",
}));

export type DeleteServiceNetworkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a service network. You can only delete the service network if there is no service or VPC associated with it. If you delete a service network, all resources related to the service network, such as the resource policy, auth policy, and access log subscriptions, are also deleted. For more information, see Delete a service network in the *Amazon VPC Lattice User Guide*.
 */
export const deleteServiceNetwork: API.OperationMethod<
  DeleteServiceNetworkRequest,
  DeleteServiceNetworkResponse,
  DeleteServiceNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteServiceNetworkRequest,
  output: DeleteServiceNetworkResponse,
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
  operationName: "DeleteServiceNetwork",
}));

export type DeleteServiceNetworkResourceAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the association between a service network and a resource configuration.
 */
export const deleteServiceNetworkResourceAssociation: API.OperationMethod<
  DeleteServiceNetworkResourceAssociationRequest,
  DeleteServiceNetworkResourceAssociationResponse,
  DeleteServiceNetworkResourceAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteServiceNetworkResourceAssociationRequest,
  output: DeleteServiceNetworkResourceAssociationResponse,
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
  operationName: "DeleteServiceNetworkResourceAssociation",
}));

export type DeleteServiceNetworkServiceAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the association between a service and a service network. This operation fails if an association is still in progress.
 */
export const deleteServiceNetworkServiceAssociation: API.OperationMethod<
  DeleteServiceNetworkServiceAssociationRequest,
  DeleteServiceNetworkServiceAssociationResponse,
  DeleteServiceNetworkServiceAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteServiceNetworkServiceAssociationRequest,
  output: DeleteServiceNetworkServiceAssociationResponse,
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
  operationName: "DeleteServiceNetworkServiceAssociation",
}));

export type DeleteServiceNetworkVpcAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates the VPC from the service network. You can't disassociate the VPC if there is a create or update association in progress.
 */
export const deleteServiceNetworkVpcAssociation: API.OperationMethod<
  DeleteServiceNetworkVpcAssociationRequest,
  DeleteServiceNetworkVpcAssociationResponse,
  DeleteServiceNetworkVpcAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteServiceNetworkVpcAssociationRequest,
  output: DeleteServiceNetworkVpcAssociationResponse,
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
  operationName: "DeleteServiceNetworkVpcAssociation",
}));

export type DeleteTargetGroupError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a target group. You can't delete a target group if it is used in a listener rule or if the target group creation is in progress.
 */
export const deleteTargetGroup: API.OperationMethod<
  DeleteTargetGroupRequest,
  DeleteTargetGroupResponse,
  DeleteTargetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTargetGroupRequest,
  output: DeleteTargetGroupResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTargetGroup",
}));

export type DeregisterTargetsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deregisters the specified targets from the specified target group.
 */
export const deregisterTargets: API.OperationMethod<
  DeregisterTargetsRequest,
  DeregisterTargetsResponse,
  DeregisterTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeregisterTargetsRequest,
  output: DeregisterTargetsResponse,
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
  operationName: "DeregisterTargets",
}));

export type GetAccessLogSubscriptionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified access log subscription.
 */
export const getAccessLogSubscription: API.OperationMethod<
  GetAccessLogSubscriptionRequest,
  GetAccessLogSubscriptionResponse,
  GetAccessLogSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessLogSubscriptionRequest,
  output: GetAccessLogSubscriptionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessLogSubscription",
}));

export type GetAuthPolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the auth policy for the specified service or service network.
 */
export const getAuthPolicy: API.OperationMethod<
  GetAuthPolicyRequest,
  GetAuthPolicyResponse,
  GetAuthPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAuthPolicyRequest,
  output: GetAuthPolicyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAuthPolicy",
}));

export type GetDomainVerificationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a domain verification.ß
 */
export const getDomainVerification: API.OperationMethod<
  GetDomainVerificationRequest,
  GetDomainVerificationResponse,
  GetDomainVerificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDomainVerificationRequest,
  output: GetDomainVerificationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDomainVerification",
}));

export type GetListenerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified listener for the specified service.
 */
export const getListener: API.OperationMethod<
  GetListenerRequest,
  GetListenerResponse,
  GetListenerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetListenerRequest,
  output: GetListenerResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetListener",
}));

export type GetResourceConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified resource configuration.
 */
export const getResourceConfiguration: API.OperationMethod<
  GetResourceConfigurationRequest,
  GetResourceConfigurationResponse,
  GetResourceConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResourceConfigurationRequest,
  output: GetResourceConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourceConfiguration",
}));

export type GetResourceGatewayError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified resource gateway.
 */
export const getResourceGateway: API.OperationMethod<
  GetResourceGatewayRequest,
  GetResourceGatewayResponse,
  GetResourceGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResourceGatewayRequest,
  output: GetResourceGatewayResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourceGateway",
}));

export type GetResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified resource policy. The resource policy is an IAM policy created on behalf of the resource owner when they share a resource.
 */
export const getResourcePolicy: API.OperationMethod<
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResourcePolicyRequest,
  output: GetResourcePolicyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePolicy",
}));

export type GetRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified listener rules. You can also retrieve information about the default listener rule. For more information, see Listener rules in the *Amazon VPC Lattice User Guide*.
 */
export const getRule: API.OperationMethod<
  GetRuleRequest,
  GetRuleResponse,
  GetRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRuleRequest,
  output: GetRuleResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRule",
}));

export type GetServiceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified service.
 */
export const getService: API.OperationMethod<
  GetServiceRequest,
  GetServiceResponse,
  GetServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetServiceRequest,
  output: GetServiceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetService",
}));

export type GetServiceNetworkError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified service network.
 */
export const getServiceNetwork: API.OperationMethod<
  GetServiceNetworkRequest,
  GetServiceNetworkResponse,
  GetServiceNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetServiceNetworkRequest,
  output: GetServiceNetworkResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServiceNetwork",
}));

export type GetServiceNetworkResourceAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified association between a service network and a resource configuration.
 */
export const getServiceNetworkResourceAssociation: API.OperationMethod<
  GetServiceNetworkResourceAssociationRequest,
  GetServiceNetworkResourceAssociationResponse,
  GetServiceNetworkResourceAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetServiceNetworkResourceAssociationRequest,
  output: GetServiceNetworkResourceAssociationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServiceNetworkResourceAssociation",
}));

export type GetServiceNetworkServiceAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified association between a service network and a service.
 */
export const getServiceNetworkServiceAssociation: API.OperationMethod<
  GetServiceNetworkServiceAssociationRequest,
  GetServiceNetworkServiceAssociationResponse,
  GetServiceNetworkServiceAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetServiceNetworkServiceAssociationRequest,
  output: GetServiceNetworkServiceAssociationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServiceNetworkServiceAssociation",
}));

export type GetServiceNetworkVpcAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified association between a service network and a VPC.
 */
export const getServiceNetworkVpcAssociation: API.OperationMethod<
  GetServiceNetworkVpcAssociationRequest,
  GetServiceNetworkVpcAssociationResponse,
  GetServiceNetworkVpcAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetServiceNetworkVpcAssociationRequest,
  output: GetServiceNetworkVpcAssociationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServiceNetworkVpcAssociation",
}));

export type GetTargetGroupError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified target group.
 */
export const getTargetGroup: API.OperationMethod<
  GetTargetGroupRequest,
  GetTargetGroupResponse,
  GetTargetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTargetGroupRequest,
  output: GetTargetGroupResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTargetGroup",
}));

export type ListAccessLogSubscriptionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the access log subscriptions for the specified service network or service.
 */
export const listAccessLogSubscriptions: API.PaginatedOperationMethod<
  ListAccessLogSubscriptionsRequest,
  ListAccessLogSubscriptionsResponse,
  ListAccessLogSubscriptionsError,
  Credentials | HttpClient.HttpClient,
  AccessLogSubscriptionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessLogSubscriptionsRequest,
  output: ListAccessLogSubscriptionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessLogSubscriptions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDomainVerificationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the domain verifications.
 */
export const listDomainVerifications: API.PaginatedOperationMethod<
  ListDomainVerificationsRequest,
  ListDomainVerificationsResponse,
  ListDomainVerificationsError,
  Credentials | HttpClient.HttpClient,
  DomainVerificationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDomainVerificationsRequest,
  output: ListDomainVerificationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomainVerifications",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListListenersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the listeners for the specified service.
 */
export const listListeners: API.PaginatedOperationMethod<
  ListListenersRequest,
  ListListenersResponse,
  ListListenersError,
  Credentials | HttpClient.HttpClient,
  ListenerSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListListenersRequest,
  output: ListListenersResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListListeners",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListResourceConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the resource configurations owned by or shared with this account.
 */
export const listResourceConfigurations: API.PaginatedOperationMethod<
  ListResourceConfigurationsRequest,
  ListResourceConfigurationsResponse,
  ListResourceConfigurationsError,
  Credentials | HttpClient.HttpClient,
  ResourceConfigurationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListResourceConfigurationsRequest,
  output: ListResourceConfigurationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListResourceEndpointAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the associations for the specified VPC endpoint.
 */
export const listResourceEndpointAssociations: API.PaginatedOperationMethod<
  ListResourceEndpointAssociationsRequest,
  ListResourceEndpointAssociationsResponse,
  ListResourceEndpointAssociationsError,
  Credentials | HttpClient.HttpClient,
  ResourceEndpointAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListResourceEndpointAssociationsRequest,
  output: ListResourceEndpointAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceEndpointAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListResourceGatewaysError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the resource gateways that you own or that were shared with you.
 */
export const listResourceGateways: API.PaginatedOperationMethod<
  ListResourceGatewaysRequest,
  ListResourceGatewaysResponse,
  ListResourceGatewaysError,
  Credentials | HttpClient.HttpClient,
  ResourceGatewaySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListResourceGatewaysRequest,
  output: ListResourceGatewaysResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceGateways",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRulesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the rules for the specified listener.
 */
export const listRules: API.PaginatedOperationMethod<
  ListRulesRequest,
  ListRulesResponse,
  ListRulesError,
  Credentials | HttpClient.HttpClient,
  RuleSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRulesRequest,
  output: ListRulesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRules",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListServiceNetworkResourceAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the associations between a service network and a resource configuration.
 */
export const listServiceNetworkResourceAssociations: API.PaginatedOperationMethod<
  ListServiceNetworkResourceAssociationsRequest,
  ListServiceNetworkResourceAssociationsResponse,
  ListServiceNetworkResourceAssociationsError,
  Credentials | HttpClient.HttpClient,
  ServiceNetworkResourceAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListServiceNetworkResourceAssociationsRequest,
  output: ListServiceNetworkResourceAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceNetworkResourceAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListServiceNetworksError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the service networks owned by or shared with this account. The account ID in the ARN shows which account owns the service network.
 */
export const listServiceNetworks: API.PaginatedOperationMethod<
  ListServiceNetworksRequest,
  ListServiceNetworksResponse,
  ListServiceNetworksError,
  Credentials | HttpClient.HttpClient,
  ServiceNetworkSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListServiceNetworksRequest,
  output: ListServiceNetworksResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceNetworks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListServiceNetworkServiceAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the associations between a service network and a service. You can filter the list either by service or service network. You must provide either the service network identifier or the service identifier.
 *
 * Every association in Amazon VPC Lattice has a unique Amazon Resource Name (ARN), such as when a service network is associated with a VPC or when a service is associated with a service network. If the association is for a resource is shared with another account, the association includes the local account ID as the prefix in the ARN.
 */
export const listServiceNetworkServiceAssociations: API.PaginatedOperationMethod<
  ListServiceNetworkServiceAssociationsRequest,
  ListServiceNetworkServiceAssociationsResponse,
  ListServiceNetworkServiceAssociationsError,
  Credentials | HttpClient.HttpClient,
  ServiceNetworkServiceAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListServiceNetworkServiceAssociationsRequest,
  output: ListServiceNetworkServiceAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceNetworkServiceAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListServiceNetworkVpcAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the associations between a service network and a VPC. You can filter the list either by VPC or service network. You must provide either the ID of the service network identifier or the ID of the VPC.
 */
export const listServiceNetworkVpcAssociations: API.PaginatedOperationMethod<
  ListServiceNetworkVpcAssociationsRequest,
  ListServiceNetworkVpcAssociationsResponse,
  ListServiceNetworkVpcAssociationsError,
  Credentials | HttpClient.HttpClient,
  ServiceNetworkVpcAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListServiceNetworkVpcAssociationsRequest,
  output: ListServiceNetworkVpcAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceNetworkVpcAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListServiceNetworkVpcEndpointAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the associations between a service network and a VPC endpoint.
 */
export const listServiceNetworkVpcEndpointAssociations: API.PaginatedOperationMethod<
  ListServiceNetworkVpcEndpointAssociationsRequest,
  ListServiceNetworkVpcEndpointAssociationsResponse,
  ListServiceNetworkVpcEndpointAssociationsError,
  Credentials | HttpClient.HttpClient,
  ServiceNetworkEndpointAssociation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListServiceNetworkVpcEndpointAssociationsRequest,
  output: ListServiceNetworkVpcEndpointAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceNetworkVpcEndpointAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListServicesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the services owned by the caller account or shared with the caller account.
 */
export const listServices: API.PaginatedOperationMethod<
  ListServicesRequest,
  ListServicesResponse,
  ListServicesError,
  Credentials | HttpClient.HttpClient,
  ServiceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListServicesRequest,
  output: ListServicesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServices",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags for the specified resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTargetGroupsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists your target groups. You can narrow your search by using the filters below in your request.
 */
export const listTargetGroups: API.PaginatedOperationMethod<
  ListTargetGroupsRequest,
  ListTargetGroupsResponse,
  ListTargetGroupsError,
  Credentials | HttpClient.HttpClient,
  TargetGroupSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTargetGroupsRequest,
  output: ListTargetGroupsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTargetGroups",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTargetsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the targets for the target group. By default, all targets are included. You can use this API to check the health status of targets. You can also U+FB01lter the results by target.
 */
export const listTargets: API.PaginatedOperationMethod<
  ListTargetsRequest,
  ListTargetsResponse,
  ListTargetsError,
  Credentials | HttpClient.HttpClient,
  TargetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTargetsRequest,
  output: ListTargetsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTargets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutAuthPolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates the auth policy. The policy string in JSON must not contain newlines or blank lines.
 *
 * For more information, see Auth policies in the *Amazon VPC Lattice User Guide*.
 */
export const putAuthPolicy: API.OperationMethod<
  PutAuthPolicyRequest,
  PutAuthPolicyResponse,
  PutAuthPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAuthPolicyRequest,
  output: PutAuthPolicyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAuthPolicy",
}));

export type PutResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Attaches a resource-based permission policy to a service or service network. The policy must contain the same actions and condition statements as the Amazon Web Services Resource Access Manager permission for sharing services and service networks.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutResourcePolicyRequest,
  output: PutResourcePolicyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourcePolicy",
}));

export type RegisterTargetsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Registers the targets with the target group. If it's a Lambda target, you can only have one target in a target group.
 */
export const registerTargets: API.OperationMethod<
  RegisterTargetsRequest,
  RegisterTargetsResponse,
  RegisterTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterTargetsRequest,
  output: RegisterTargetsResponse,
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
  operationName: "RegisterTargets",
}));

export type StartDomainVerificationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts the domain verification process for a custom domain name.
 */
export const startDomainVerification: API.OperationMethod<
  StartDomainVerificationRequest,
  StartDomainVerificationResponse,
  StartDomainVerificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartDomainVerificationRequest,
  output: StartDomainVerificationResponse,
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
  operationName: "StartDomainVerification",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds the specified tags to the specified resource.
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
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
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
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified tags from the specified resource.
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
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAccessLogSubscriptionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified access log subscription.
 */
export const updateAccessLogSubscription: API.OperationMethod<
  UpdateAccessLogSubscriptionRequest,
  UpdateAccessLogSubscriptionResponse,
  UpdateAccessLogSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAccessLogSubscriptionRequest,
  output: UpdateAccessLogSubscriptionResponse,
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
  operationName: "UpdateAccessLogSubscription",
}));

export type UpdateListenerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified listener for the specified service.
 */
export const updateListener: API.OperationMethod<
  UpdateListenerRequest,
  UpdateListenerResponse,
  UpdateListenerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateListenerRequest,
  output: UpdateListenerResponse,
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
  operationName: "UpdateListener",
}));

export type UpdateResourceConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified resource configuration.
 */
export const updateResourceConfiguration: API.OperationMethod<
  UpdateResourceConfigurationRequest,
  UpdateResourceConfigurationResponse,
  UpdateResourceConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateResourceConfigurationRequest,
  output: UpdateResourceConfigurationResponse,
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
  operationName: "UpdateResourceConfiguration",
}));

export type UpdateResourceGatewayError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified resource gateway.
 */
export const updateResourceGateway: API.OperationMethod<
  UpdateResourceGatewayRequest,
  UpdateResourceGatewayResponse,
  UpdateResourceGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateResourceGatewayRequest,
  output: UpdateResourceGatewayResponse,
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
  operationName: "UpdateResourceGateway",
}));

export type UpdateRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a specified rule for the listener. You can't modify a default listener rule. To modify a default listener rule, use `UpdateListener`.
 */
export const updateRule: API.OperationMethod<
  UpdateRuleRequest,
  UpdateRuleResponse,
  UpdateRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRuleRequest,
  output: UpdateRuleResponse,
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
  operationName: "UpdateRule",
}));

export type UpdateServiceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified service.
 */
export const updateService: API.OperationMethod<
  UpdateServiceRequest,
  UpdateServiceResponse,
  UpdateServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateServiceRequest,
  output: UpdateServiceResponse,
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
  operationName: "UpdateService",
}));

export type UpdateServiceNetworkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified service network.
 */
export const updateServiceNetwork: API.OperationMethod<
  UpdateServiceNetworkRequest,
  UpdateServiceNetworkResponse,
  UpdateServiceNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateServiceNetworkRequest,
  output: UpdateServiceNetworkResponse,
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
  operationName: "UpdateServiceNetwork",
}));

export type UpdateServiceNetworkVpcAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the service network and VPC association. If you add a security group to the service network and VPC association, the association must continue to have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and then recreate it without security groups.
 */
export const updateServiceNetworkVpcAssociation: API.OperationMethod<
  UpdateServiceNetworkVpcAssociationRequest,
  UpdateServiceNetworkVpcAssociationResponse,
  UpdateServiceNetworkVpcAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateServiceNetworkVpcAssociationRequest,
  output: UpdateServiceNetworkVpcAssociationResponse,
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
  operationName: "UpdateServiceNetworkVpcAssociation",
}));

export type UpdateTargetGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified target group.
 */
export const updateTargetGroup: API.OperationMethod<
  UpdateTargetGroupRequest,
  UpdateTargetGroupResponse,
  UpdateTargetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTargetGroupRequest,
  output: UpdateTargetGroupResponse,
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
  operationName: "UpdateTargetGroup",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ exact: S.String }),
        /*@__PURE__*/ S.Struct({ prefix: S.String }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({ match: PathMatchType, caseSensitive: S.optional(S.Boolean) }),
      ).annotate({ identifier: "PathMatch" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ exact: S.String }),
        /*@__PURE__*/ S.Struct({ prefix: S.String }),
        /*@__PURE__*/ S.Struct({ contains: S.String }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.String, match: HeaderMatchType, caseSensitive: S.optional(S.Boolean) }),
      ).annotate({ identifier: "HeaderMatch" });
    case 4:
      return S.Array(HeaderMatch);
    case 5:
      return S.suspend(() =>
        S.Struct({
          method: S.optional(S.String),
          pathMatch: S.optional(PathMatch),
          headerMatches: S.optional(HeaderMatchList),
        }),
      ).annotate({ identifier: "HttpMatch" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ httpMatch: HttpMatch })]);
    case 7:
      return S.suspend(() =>
        S.Struct({ targetGroupIdentifier: S.String, weight: S.optional(S.Number) }),
      ).annotate({ identifier: "WeightedTargetGroup" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(WeightedTargetGroup);
    case 1:
      return S.suspend(() => S.Struct({ targetGroups: WeightedTargetGroupList })).annotate({
        identifier: "ForwardAction",
      });
    case 2:
      return S.suspend(() => S.Struct({ statusCode: S.Number })).annotate({
        identifier: "FixedResponseAction",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ forward: ForwardAction }),
        /*@__PURE__*/ S.Struct({ fixedResponse: FixedResponseAction }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ruleIdentifier: S.String,
          match: S.optional(RuleMatch),
          priority: S.optional(S.Number),
          action: S.optional(RuleAction),
        }),
      ).annotate({ identifier: "RuleUpdate" });
    case 5:
      return S.Array(RuleUpdate);
    case 6:
      return S.suspend(() =>
        S.Struct({
          serviceIdentifier: S.String.pipe(T.HttpLabel("serviceIdentifier")),
          listenerIdentifier: S.String.pipe(T.HttpLabel("listenerIdentifier")),
          rules: RuleUpdateList,
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchUpdateRuleRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          isDefault: S.optional(S.Boolean),
          match: S.optional(RuleMatch),
          priority: S.optional(S.Number),
          action: S.optional(RuleAction),
        }),
      ).annotate({ identifier: "RuleUpdateSuccess" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(RuleUpdateSuccess);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ruleIdentifier: S.optional(S.String),
          failureCode: S.optional(S.String),
          failureMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "RuleUpdateFailure" });
    case 2:
      return S.Array(RuleUpdateFailure);
    case 3:
      return S.suspend(() =>
        S.Struct({
          successful: S.optional(RuleUpdateSuccessList),
          unsuccessful: S.optional(RuleUpdateFailureList),
        }),
      ).annotate({ identifier: "BatchUpdateRuleResponse" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          resourceIdentifier: S.String,
          destinationArn: S.String,
          serviceNetworkLogType: S.optional(S.String),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/accesslogsubscriptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAccessLogSubscriptionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          resourceId: S.String,
          resourceArn: S.String,
          serviceNetworkLogType: S.optional(S.String),
          destinationArn: S.String,
        }),
      ).annotate({
        identifier: "CreateAccessLogSubscriptionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          serviceIdentifier: S.String.pipe(T.HttpLabel("serviceIdentifier")),
          name: S.String,
          protocol: S.String,
          port: S.optional(S.Number),
          defaultAction: RuleAction,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/services/{serviceIdentifier}/listeners" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateListenerRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          protocol: S.optional(S.String),
          port: S.optional(S.Number),
          serviceArn: S.optional(S.String),
          serviceId: S.optional(S.String),
          defaultAction: S.optional(RuleAction),
        }),
      ).annotate({ identifier: "CreateListenerResponse" });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({ domainName: S.optional(S.String), ipAddressType: S.optional(S.String) }),
      ).annotate({ identifier: "DnsResource" });
    case 3:
      return S.suspend(() => S.Struct({ ipAddress: S.optional(S.String) })).annotate({
        identifier: "IpResource",
      });
    case 4:
      return S.suspend(() => S.Struct({ arn: S.optional(S.String) })).annotate({
        identifier: "ArnResource",
      });
    case 5:
      return S.suspend(() => S.Struct({ cidrRanges: S.optional(CidrRangeList) })).annotate({
        identifier: "CidrResource",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ dnsResource: DnsResource }),
        /*@__PURE__*/ S.Struct({ ipResource: IpResource }),
        /*@__PURE__*/ S.Struct({ arnResource: ArnResource }),
        /*@__PURE__*/ S.Struct({ cidrResource: CidrResource }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: ResourceConfigurationType,
          portRanges: S.optional(PortRangeList),
          protocol: S.optional(ProtocolType),
          resourceGatewayIdentifier: S.optional(S.String),
          resourceConfigurationGroupIdentifier: S.optional(S.String),
          resourceConfigurationDefinition: S.optional(ResourceConfigurationDefinition),
          allowAssociationToShareableServiceNetwork: S.optional(S.Boolean),
          customDomainName: S.optional(S.String),
          groupDomain: S.optional(S.String),
          domainVerificationIdentifier: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/resourceconfigurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateResourceConfigurationRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          resourceGatewayId: S.optional(S.String),
          resourceConfigurationGroupId: S.optional(S.String),
          type: S.optional(ResourceConfigurationType),
          portRanges: S.optional(PortRangeList),
          protocol: S.optional(ProtocolType),
          status: S.optional(S.String),
          resourceConfigurationDefinition: S.optional(ResourceConfigurationDefinition),
          allowAssociationToShareableServiceNetwork: S.optional(S.Boolean),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          failureReason: S.optional(S.String),
          customDomainName: S.optional(S.String),
          domainVerificationId: S.optional(S.String),
          groupDomain: S.optional(S.String),
          domainVerificationArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateResourceConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          name: S.String,
          vpcIdentifier: S.optional(S.String),
          subnetIds: S.optional(SubnetList),
          securityGroupIds: S.optional(SecurityGroupList),
          ipAddressType: S.optional(S.String),
          ipv4AddressesPerEni: S.optional(S.Number),
          resourceConfigDnsResolution: S.optional(S.String),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/resourcegateways" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateResourceGatewayRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          id: S.optional(S.String),
          arn: S.optional(S.String),
          status: S.optional(S.String),
          vpcIdentifier: S.optional(S.String),
          subnetIds: S.optional(SubnetList),
          securityGroupIds: S.optional(SecurityGroupList),
          ipAddressType: S.optional(S.String),
          ipv4AddressesPerEni: S.optional(S.Number),
          resourceConfigDnsResolution: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateResourceGatewayResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          serviceIdentifier: S.String.pipe(T.HttpLabel("serviceIdentifier")),
          listenerIdentifier: S.String.pipe(T.HttpLabel("listenerIdentifier")),
          name: S.String,
          match: RuleMatch,
          priority: S.Number,
          action: RuleAction,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateRuleRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          match: S.optional(RuleMatch),
          priority: S.optional(S.Number),
          action: S.optional(RuleAction),
        }),
      ).annotate({ identifier: "CreateRuleResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          name: S.String,
          tags: S.optional(TagMap),
          customDomainName: S.optional(S.String),
          certificateArn: S.optional(S.String),
          authType: S.optional(S.String),
          idleTimeoutSeconds: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/services" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateServiceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ domainName: S.optional(S.String), hostedZoneId: S.optional(S.String) }),
      ).annotate({ identifier: "DnsEntry" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          name: S.optional(S.String),
          customDomainName: S.optional(S.String),
          certificateArn: S.optional(S.String),
          status: S.optional(S.String),
          authType: S.optional(S.String),
          idleTimeoutSeconds: S.optional(S.Number),
          dnsEntry: S.optional(DnsEntry),
        }),
      ).annotate({ identifier: "CreateServiceResponse" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ enabled: S.optional(S.Boolean) })).annotate({
        identifier: "SharingConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          name: S.String,
          authType: S.optional(S.String),
          tags: S.optional(TagMap),
          sharingConfig: S.optional(SharingConfig),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/servicenetworks" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateServiceNetworkRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          sharingConfig: S.optional(SharingConfig),
          authType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateServiceNetworkResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          resourceConfigurationIdentifier: S.String,
          serviceNetworkIdentifier: S.String,
          privateDnsEnabled: S.optional(S.Boolean),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/servicenetworkresourceassociations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateServiceNetworkResourceAssociationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          status: S.optional(S.String),
          createdBy: S.optional(S.String),
          privateDnsEnabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "CreateServiceNetworkResourceAssociationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          serviceIdentifier: S.String,
          serviceNetworkIdentifier: S.String,
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/servicenetworkserviceassociations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateServiceNetworkServiceAssociationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          status: S.optional(S.String),
          arn: S.optional(S.String),
          createdBy: S.optional(S.String),
          customDomainName: S.optional(S.String),
          dnsEntry: S.optional(DnsEntry),
        }),
      ).annotate({
        identifier: "CreateServiceNetworkServiceAssociationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          privateDnsPreference: S.optional(S.String),
          privateDnsSpecifiedDomains: S.optional(PrivateDnsSpecifiedDomainsList),
        }),
      ).annotate({ identifier: "DnsOptions" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          serviceNetworkIdentifier: S.String,
          vpcIdentifier: S.String,
          privateDnsEnabled: S.optional(S.Boolean),
          securityGroupIds: S.optional(SecurityGroupList),
          tags: S.optional(TagMap),
          dnsOptions: S.optional(DnsOptions),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/servicenetworkvpcassociations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateServiceNetworkVpcAssociationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          status: S.optional(S.String),
          arn: S.optional(S.String),
          createdBy: S.optional(S.String),
          securityGroupIds: S.optional(SecurityGroupList),
          privateDnsEnabled: S.optional(S.Boolean),
          dnsOptions: S.optional(DnsOptions),
        }),
      ).annotate({
        identifier: "CreateServiceNetworkVpcAssociationResponse",
      });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ httpCode: S.String })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          enabled: S.optional(S.Boolean),
          protocol: S.optional(S.String),
          protocolVersion: S.optional(S.String),
          port: S.optional(S.Number),
          path: S.optional(S.String),
          healthCheckIntervalSeconds: S.optional(S.Number),
          healthCheckTimeoutSeconds: S.optional(S.Number),
          healthyThresholdCount: S.optional(S.Number),
          unhealthyThresholdCount: S.optional(S.Number),
          matcher: S.optional(Matcher),
        }),
      ).annotate({ identifier: "HealthCheckConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          port: S.optional(S.Number),
          protocol: S.optional(S.String),
          protocolVersion: S.optional(S.String),
          ipAddressType: S.optional(S.String),
          vpcIdentifier: S.optional(S.String),
          healthCheck: S.optional(HealthCheckConfig),
          lambdaEventStructureVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "TargetGroupConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: S.String,
          config: S.optional(TargetGroupConfig),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/targetgroups" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateTargetGroupRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          name: S.optional(S.String),
          type: S.optional(S.String),
          config: S.optional(TargetGroupConfig),
          status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateTargetGroupResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          accessLogSubscriptionIdentifier: S.String.pipe(
            T.HttpLabel("accessLogSubscriptionIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/accesslogsubscriptions/{accessLogSubscriptionIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAccessLogSubscriptionRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAccessLogSubscriptionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceIdentifier: S.String.pipe(T.HttpLabel("resourceIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/authpolicy/{resourceIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAuthPolicyRequest" });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAuthPolicyResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainVerificationIdentifier: S.String.pipe(T.HttpLabel("domainVerificationIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/domainverifications/{domainVerificationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDomainVerificationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          serviceIdentifier: S.String.pipe(T.HttpLabel("serviceIdentifier")),
          listenerIdentifier: S.String.pipe(T.HttpLabel("listenerIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/services/{serviceIdentifier}/listeners/{listenerIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteListenerRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceConfigurationIdentifier: S.String.pipe(
            T.HttpLabel("resourceConfigurationIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/resourceconfigurations/{resourceConfigurationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResourceConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceEndpointAssociationIdentifier: S.String.pipe(
            T.HttpLabel("resourceEndpointAssociationIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/resourceendpointassociations/{resourceEndpointAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResourceEndpointAssociationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          resourceConfigurationId: S.optional(S.String),
          resourceConfigurationArn: S.optional(S.String),
          vpcEndpointId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteResourceEndpointAssociationResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceGatewayIdentifier: S.String.pipe(T.HttpLabel("resourceGatewayIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/resourcegateways/{resourceGatewayIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResourceGatewayRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteResourceGatewayResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/resourcepolicy/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          serviceIdentifier: S.String.pipe(T.HttpLabel("serviceIdentifier")),
          listenerIdentifier: S.String.pipe(T.HttpLabel("listenerIdentifier")),
          ruleIdentifier: S.String.pipe(T.HttpLabel("ruleIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteRuleRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ serviceIdentifier: S.String.pipe(T.HttpLabel("serviceIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/services/{serviceIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteServiceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeleteServiceResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          serviceNetworkIdentifier: S.String.pipe(T.HttpLabel("serviceNetworkIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/servicenetworks/{serviceNetworkIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteServiceNetworkRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          serviceNetworkResourceAssociationIdentifier: S.String.pipe(
            T.HttpLabel("serviceNetworkResourceAssociationIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/servicenetworkresourceassociations/{serviceNetworkResourceAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteServiceNetworkResourceAssociationRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteServiceNetworkResourceAssociationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          serviceNetworkServiceAssociationIdentifier: S.String.pipe(
            T.HttpLabel("serviceNetworkServiceAssociationIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/servicenetworkserviceassociations/{serviceNetworkServiceAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteServiceNetworkServiceAssociationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          status: S.optional(S.String),
          arn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteServiceNetworkServiceAssociationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          serviceNetworkVpcAssociationIdentifier: S.String.pipe(
            T.HttpLabel("serviceNetworkVpcAssociationIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteServiceNetworkVpcAssociationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          targetGroupIdentifier: S.String.pipe(T.HttpLabel("targetGroupIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/targetgroups/{targetGroupIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTargetGroupRequest" });
    case 5:
      return S.suspend(() => S.Struct({ id: S.String, port: S.optional(S.Number) })).annotate({
        identifier: "Target",
      });
    case 6:
      return S.Array(Target);
    case 7:
      return S.suspend(() =>
        S.Struct({
          targetGroupIdentifier: S.String.pipe(T.HttpLabel("targetGroupIdentifier")),
          targets: TargetList,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/targetgroups/{targetGroupIdentifier}/deregistertargets",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeregisterTargetsRequest" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          port: S.optional(S.Number),
          failureCode: S.optional(S.String),
          failureMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "TargetFailure" });
    case 1:
      return S.Array(TargetFailure);
    case 2:
      return S.suspend(() =>
        S.Struct({
          successful: S.optional(TargetList),
          unsuccessful: S.optional(TargetFailureList),
        }),
      ).annotate({
        identifier: "DeregisterTargetsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          accessLogSubscriptionIdentifier: S.String.pipe(
            T.HttpLabel("accessLogSubscriptionIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/accesslogsubscriptions/{accessLogSubscriptionIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAccessLogSubscriptionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          resourceId: S.String,
          resourceArn: S.String,
          destinationArn: S.String,
          serviceNetworkLogType: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "GetAccessLogSubscriptionResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceIdentifier: S.String.pipe(T.HttpLabel("resourceIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/authpolicy/{resourceIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAuthPolicyRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          policy: S.optional(S.String),
          state: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "GetAuthPolicyResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainVerificationIdentifier: S.String.pipe(T.HttpLabel("domainVerificationIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domainverifications/{domainVerificationIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDomainVerificationRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ value: S.String, name: S.String })).annotate({
        identifier: "TxtMethodConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          domainName: S.String,
          status: S.String,
          txtMethodConfig: S.optional(TxtMethodConfig),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastVerifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "GetDomainVerificationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          serviceIdentifier: S.String.pipe(T.HttpLabel("serviceIdentifier")),
          listenerIdentifier: S.String.pipe(T.HttpLabel("listenerIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/services/{serviceIdentifier}/listeners/{listenerIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetListenerRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          protocol: S.optional(S.String),
          port: S.optional(S.Number),
          serviceArn: S.optional(S.String),
          serviceId: S.optional(S.String),
          defaultAction: S.optional(RuleAction),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "GetListenerResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceConfigurationIdentifier: S.String.pipe(
            T.HttpLabel("resourceConfigurationIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/resourceconfigurations/{resourceConfigurationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetResourceConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          resourceGatewayId: S.optional(S.String),
          resourceConfigurationGroupId: S.optional(S.String),
          type: S.optional(ResourceConfigurationType),
          allowAssociationToShareableServiceNetwork: S.optional(S.Boolean),
          portRanges: S.optional(PortRangeList),
          protocol: S.optional(ProtocolType),
          customDomainName: S.optional(S.String),
          status: S.optional(S.String),
          resourceConfigurationDefinition: S.optional(ResourceConfigurationDefinition),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          amazonManaged: S.optional(S.Boolean),
          failureReason: S.optional(S.String),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          domainVerificationId: S.optional(S.String),
          domainVerificationArn: S.optional(S.String),
          domainVerificationStatus: S.optional(S.String),
          groupDomain: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetResourceConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceGatewayIdentifier: S.String.pipe(T.HttpLabel("resourceGatewayIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/resourcegateways/{resourceGatewayIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetResourceGatewayRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          id: S.optional(S.String),
          arn: S.optional(S.String),
          status: S.optional(S.String),
          vpcId: S.optional(S.String),
          subnetIds: S.optional(SubnetList),
          serviceManaged: S.optional(S.Boolean),
          managedBy: S.optional(S.String),
          securityGroupIds: S.optional(SecurityGroupList),
          ipAddressType: S.optional(S.String),
          ipv4AddressesPerEni: S.optional(S.Number),
          resourceConfigDnsResolution: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "GetResourceGatewayResponse",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/resourcepolicy/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetResourcePolicyRequest" });
    case 1:
      return S.suspend(() => S.Struct({ policy: S.optional(S.String) })).annotate({
        identifier: "GetResourcePolicyResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          serviceIdentifier: S.String.pipe(T.HttpLabel("serviceIdentifier")),
          listenerIdentifier: S.String.pipe(T.HttpLabel("listenerIdentifier")),
          ruleIdentifier: S.String.pipe(T.HttpLabel("ruleIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRuleRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          isDefault: S.optional(S.Boolean),
          match: S.optional(RuleMatch),
          priority: S.optional(S.Number),
          action: S.optional(RuleAction),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "GetRuleResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ serviceIdentifier: S.String.pipe(T.HttpLabel("serviceIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/services/{serviceIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetServiceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          dnsEntry: S.optional(DnsEntry),
          customDomainName: S.optional(S.String),
          certificateArn: S.optional(S.String),
          status: S.optional(S.String),
          authType: S.optional(S.String),
          idleTimeoutSeconds: S.optional(S.Number),
          failureCode: S.optional(S.String),
          failureMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetServiceResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          serviceNetworkIdentifier: S.String.pipe(T.HttpLabel("serviceNetworkIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/servicenetworks/{serviceNetworkIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetServiceNetworkRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          arn: S.optional(S.String),
          authType: S.optional(S.String),
          sharingConfig: S.optional(SharingConfig),
          numberOfAssociatedVPCs: S.optional(S.Number),
          numberOfAssociatedServices: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "GetServiceNetworkResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          serviceNetworkResourceAssociationIdentifier: S.String.pipe(
            T.HttpLabel("serviceNetworkResourceAssociationIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/servicenetworkresourceassociations/{serviceNetworkResourceAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetServiceNetworkResourceAssociationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          status: S.optional(S.String),
          createdBy: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          resourceConfigurationId: S.optional(S.String),
          resourceConfigurationArn: S.optional(S.String),
          resourceConfigurationName: S.optional(S.String),
          serviceNetworkId: S.optional(S.String),
          serviceNetworkArn: S.optional(S.String),
          serviceNetworkName: S.optional(S.String),
          failureReason: S.optional(S.String),
          failureCode: S.optional(S.String),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          privateDnsEntry: S.optional(DnsEntry),
          privateDnsEnabled: S.optional(S.Boolean),
          dnsEntry: S.optional(DnsEntry),
          isManagedAssociation: S.optional(S.Boolean),
          domainVerificationStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetServiceNetworkResourceAssociationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          serviceNetworkServiceAssociationIdentifier: S.String.pipe(
            T.HttpLabel("serviceNetworkServiceAssociationIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/servicenetworkserviceassociations/{serviceNetworkServiceAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetServiceNetworkServiceAssociationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          status: S.optional(S.String),
          arn: S.optional(S.String),
          createdBy: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          serviceId: S.optional(S.String),
          serviceName: S.optional(S.String),
          serviceArn: S.optional(S.String),
          serviceNetworkId: S.optional(S.String),
          serviceNetworkName: S.optional(S.String),
          serviceNetworkArn: S.optional(S.String),
          dnsEntry: S.optional(DnsEntry),
          customDomainName: S.optional(S.String),
          failureMessage: S.optional(S.String),
          failureCode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetServiceNetworkServiceAssociationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          serviceNetworkVpcAssociationIdentifier: S.String.pipe(
            T.HttpLabel("serviceNetworkVpcAssociationIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetServiceNetworkVpcAssociationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          status: S.optional(S.String),
          arn: S.optional(S.String),
          createdBy: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          serviceNetworkId: S.optional(S.String),
          serviceNetworkName: S.optional(S.String),
          serviceNetworkArn: S.optional(S.String),
          vpcId: S.optional(S.String),
          securityGroupIds: S.optional(SecurityGroupList),
          privateDnsEnabled: S.optional(S.Boolean),
          failureMessage: S.optional(S.String),
          failureCode: S.optional(S.String),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          dnsOptions: S.optional(DnsOptions),
        }),
      ).annotate({
        identifier: "GetServiceNetworkVpcAssociationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          targetGroupIdentifier: S.String.pipe(T.HttpLabel("targetGroupIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/targetgroups/{targetGroupIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetTargetGroupRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          name: S.optional(S.String),
          type: S.optional(S.String),
          config: S.optional(TargetGroupConfig),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          status: S.optional(S.String),
          serviceArns: S.optional(ServiceArnList),
          failureMessage: S.optional(S.String),
          failureCode: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetTargetGroupResponse" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceIdentifier: S.String.pipe(T.HttpQuery("resourceIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/accesslogsubscriptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAccessLogSubscriptionsRequest",
      });
    case 1:
      return S.Array(AccessLogSubscriptionSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ items: AccessLogSubscriptionList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAccessLogSubscriptionsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domainverifications" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDomainVerificationsRequest",
      });
    case 4:
      return S.Array(DomainVerificationSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ items: DomainVerificationList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDomainVerificationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          serviceIdentifier: S.String.pipe(T.HttpLabel("serviceIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/services/{serviceIdentifier}/listeners" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListListenersRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          protocol: S.optional(S.String),
          port: S.optional(S.Number),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ListenerSummary" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ListenerSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ items: ListenerSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListListenersResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourceGatewayIdentifier: S.optional(S.String).pipe(
            T.HttpQuery("resourceGatewayIdentifier"),
          ),
          resourceConfigurationGroupIdentifier: S.optional(S.String).pipe(
            T.HttpQuery("resourceConfigurationGroupIdentifier"),
          ),
          domainVerificationIdentifier: S.optional(S.String).pipe(
            T.HttpQuery("domainVerificationIdentifier"),
          ),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/resourceconfigurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResourceConfigurationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          resourceGatewayId: S.optional(S.String),
          resourceConfigurationGroupId: S.optional(S.String),
          type: S.optional(ResourceConfigurationType),
          status: S.optional(S.String),
          amazonManaged: S.optional(S.Boolean),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          customDomainName: S.optional(S.String),
          domainVerificationId: S.optional(S.String),
          groupDomain: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ResourceConfigurationSummary",
      });
    case 4:
      return S.Array(ResourceConfigurationSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(ResourceConfigurationSummaryList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListResourceConfigurationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceConfigurationIdentifier: S.String.pipe(
            T.HttpQuery("resourceConfigurationIdentifier"),
          ),
          resourceEndpointAssociationIdentifier: S.optional(S.String).pipe(
            T.HttpQuery("resourceEndpointAssociationIdentifier"),
          ),
          vpcEndpointId: S.optional(S.String).pipe(T.HttpQuery("vpcEndpointId")),
          vpcEndpointOwner: S.optional(S.String).pipe(T.HttpQuery("vpcEndpointOwner")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/resourceendpointassociations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResourceEndpointAssociationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          scope: S.optional(PayerResponsibilityScope),
          payerResponsibilityType: S.optional(PayerResponsibilityPayer),
        }),
      ).annotate({ identifier: "PayerResponsibilityEntry" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(PayerResponsibilityEntry);
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          resourceConfigurationId: S.optional(S.String),
          resourceConfigurationArn: S.optional(S.String),
          resourceConfigurationName: S.optional(S.String),
          vpcEndpointId: S.optional(S.String),
          vpcEndpointOwner: S.optional(S.String),
          createdBy: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          payerResponsibility: S.optional(PayerResponsibilityList),
        }),
      ).annotate({
        identifier: "ResourceEndpointAssociationSummary",
      });
    case 2:
      return S.Array(ResourceEndpointAssociationSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ items: ResourceEndpointAssociationList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListResourceEndpointAssociationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/resourcegateways" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListResourceGatewaysRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          id: S.optional(S.String),
          arn: S.optional(S.String),
          status: S.optional(S.String),
          vpcIdentifier: S.optional(S.String),
          subnetIds: S.optional(SubnetList),
          securityGroupIds: S.optional(SecurityGroupList),
          ipAddressType: S.optional(S.String),
          ipv4AddressesPerEni: S.optional(S.Number),
          resourceConfigDnsResolution: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ResourceGatewaySummary" });
    case 6:
      return S.Array(ResourceGatewaySummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ items: S.optional(ResourceGatewayList), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListResourceGatewaysResponse",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          serviceIdentifier: S.String.pipe(T.HttpLabel("serviceIdentifier")),
          listenerIdentifier: S.String.pipe(T.HttpLabel("listenerIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListRulesRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          isDefault: S.optional(S.Boolean),
          priority: S.optional(S.Number),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "RuleSummary" });
    case 2:
      return S.Array(RuleSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ items: RuleSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRulesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          serviceNetworkIdentifier: S.optional(S.String).pipe(
            T.HttpQuery("serviceNetworkIdentifier"),
          ),
          resourceConfigurationIdentifier: S.optional(S.String).pipe(
            T.HttpQuery("resourceConfigurationIdentifier"),
          ),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          includeChildren: S.optional(S.Boolean).pipe(T.HttpQuery("includeChildren")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/servicenetworkresourceassociations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListServiceNetworkResourceAssociationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          status: S.optional(S.String),
          createdBy: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          resourceConfigurationId: S.optional(S.String),
          resourceConfigurationArn: S.optional(S.String),
          resourceConfigurationName: S.optional(S.String),
          serviceNetworkId: S.optional(S.String),
          serviceNetworkArn: S.optional(S.String),
          serviceNetworkName: S.optional(S.String),
          dnsEntry: S.optional(DnsEntry),
          privateDnsEntry: S.optional(DnsEntry),
          isManagedAssociation: S.optional(S.Boolean),
          failureCode: S.optional(S.String),
          privateDnsEnabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ServiceNetworkResourceAssociationSummary",
      });
    case 6:
      return S.Array(ServiceNetworkResourceAssociationSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ items: ServiceNetworkResourceAssociationList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListServiceNetworkResourceAssociationsResponse",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/servicenetworks" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListServiceNetworksRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          numberOfAssociatedVPCs: S.optional(S.Number),
          numberOfAssociatedServices: S.optional(S.Number),
          numberOfAssociatedResourceConfigurations: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ServiceNetworkSummary" });
    case 2:
      return S.Array(ServiceNetworkSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ items: ServiceNetworkList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListServiceNetworksResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          serviceNetworkIdentifier: S.optional(S.String).pipe(
            T.HttpQuery("serviceNetworkIdentifier"),
          ),
          serviceIdentifier: S.optional(S.String).pipe(T.HttpQuery("serviceIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/servicenetworkserviceassociations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListServiceNetworkServiceAssociationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          status: S.optional(S.String),
          arn: S.optional(S.String),
          createdBy: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          serviceId: S.optional(S.String),
          serviceName: S.optional(S.String),
          serviceArn: S.optional(S.String),
          serviceNetworkId: S.optional(S.String),
          serviceNetworkName: S.optional(S.String),
          serviceNetworkArn: S.optional(S.String),
          dnsEntry: S.optional(DnsEntry),
          customDomainName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ServiceNetworkServiceAssociationSummary",
      });
    case 6:
      return S.Array(ServiceNetworkServiceAssociationSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ items: ServiceNetworkServiceAssociationList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListServiceNetworkServiceAssociationsResponse",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          serviceNetworkIdentifier: S.optional(S.String).pipe(
            T.HttpQuery("serviceNetworkIdentifier"),
          ),
          vpcIdentifier: S.optional(S.String).pipe(T.HttpQuery("vpcIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/servicenetworkvpcassociations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListServiceNetworkVpcAssociationsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          status: S.optional(S.String),
          createdBy: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          serviceNetworkId: S.optional(S.String),
          serviceNetworkName: S.optional(S.String),
          serviceNetworkArn: S.optional(S.String),
          privateDnsEnabled: S.optional(S.Boolean),
          dnsOptions: S.optional(DnsOptions),
          vpcId: S.optional(S.String),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "ServiceNetworkVpcAssociationSummary",
      });
    case 2:
      return S.Array(ServiceNetworkVpcAssociationSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ items: ServiceNetworkVpcAssociationList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListServiceNetworkVpcAssociationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          serviceNetworkIdentifier: S.String.pipe(T.HttpQuery("serviceNetworkIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/servicenetworkvpcendpointassociations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListServiceNetworkVpcEndpointAssociationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          vpcEndpointId: S.optional(S.String),
          vpcId: S.optional(S.String),
          vpcEndpointOwnerId: S.optional(S.String),
          id: S.optional(S.String),
          state: S.optional(S.String),
          serviceNetworkArn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "ServiceNetworkEndpointAssociation",
      });
    case 6:
      return S.Array(ServiceNetworkEndpointAssociation);
    case 7:
      return S.suspend(() =>
        S.Struct({
          items: ServiceNetworkVpcEndpointAssociationList,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListServiceNetworkVpcEndpointAssociationsResponse",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/services" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListServicesRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          dnsEntry: S.optional(DnsEntry),
          customDomainName: S.optional(S.String),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServiceSummary" });
    case 2:
      return S.Array(ServiceSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ items: S.optional(ServiceList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListServicesResponse" });
    case 4:
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
    case 5:
      return S.suspend(() => S.Struct({ tags: S.optional(TagMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          vpcIdentifier: S.optional(S.String).pipe(T.HttpQuery("vpcIdentifier")),
          targetGroupType: S.optional(S.String).pipe(T.HttpQuery("targetGroupType")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/targetgroups" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTargetGroupsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          name: S.optional(S.String),
          type: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          port: S.optional(S.Number),
          protocol: S.optional(S.String),
          ipAddressType: S.optional(S.String),
          vpcIdentifier: S.optional(S.String),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          status: S.optional(S.String),
          serviceArns: S.optional(ServiceArnList),
          lambdaEventStructureVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "TargetGroupSummary" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.Array(TargetGroupSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ items: S.optional(TargetGroupList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTargetGroupsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          targetGroupIdentifier: S.String.pipe(T.HttpLabel("targetGroupIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          targets: S.optional(TargetList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/targetgroups/{targetGroupIdentifier}/listtargets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTargetsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          port: S.optional(S.Number),
          status: S.optional(S.String),
          reasonCode: S.optional(S.String),
        }),
      ).annotate({ identifier: "TargetSummary" });
    case 4:
      return S.Array(TargetSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ items: TargetSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTargetsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceIdentifier: S.String.pipe(T.HttpLabel("resourceIdentifier")),
          policy: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/authpolicy/{resourceIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutAuthPolicyRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ policy: S.optional(S.String), state: S.optional(S.String) }),
      ).annotate({ identifier: "PutAuthPolicyResponse" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), policy: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/resourcepolicy/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutResourcePolicyRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          targetGroupIdentifier: S.String.pipe(T.HttpLabel("targetGroupIdentifier")),
          targets: TargetList,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/targetgroups/{targetGroupIdentifier}/registertargets",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RegisterTargetsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          successful: S.optional(TargetList),
          unsuccessful: S.optional(TargetFailureList),
        }),
      ).annotate({ identifier: "RegisterTargetsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          domainName: S.String,
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domainverifications" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartDomainVerificationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          domainName: S.String,
          status: S.String,
          txtMethodConfig: S.optional(TxtMethodConfig),
        }),
      ).annotate({
        identifier: "StartDomainVerificationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagMap }).pipe(
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
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeys.pipe(T.HttpQuery("tagKeys")),
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
    case 7:
      return S.suspend(() =>
        S.Struct({
          accessLogSubscriptionIdentifier: S.String.pipe(
            T.HttpLabel("accessLogSubscriptionIdentifier"),
          ),
          destinationArn: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/accesslogsubscriptions/{accessLogSubscriptionIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAccessLogSubscriptionRequest",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          resourceId: S.String,
          resourceArn: S.String,
          destinationArn: S.String,
        }),
      ).annotate({
        identifier: "UpdateAccessLogSubscriptionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          serviceIdentifier: S.String.pipe(T.HttpLabel("serviceIdentifier")),
          listenerIdentifier: S.String.pipe(T.HttpLabel("listenerIdentifier")),
          defaultAction: RuleAction,
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/services/{serviceIdentifier}/listeners/{listenerIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateListenerRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourceConfigurationIdentifier: S.String.pipe(
            T.HttpLabel("resourceConfigurationIdentifier"),
          ),
          resourceConfigurationDefinition: S.optional(ResourceConfigurationDefinition),
          allowAssociationToShareableServiceNetwork: S.optional(S.Boolean),
          portRanges: S.optional(PortRangeList),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/resourceconfigurations/{resourceConfigurationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateResourceConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          resourceGatewayId: S.optional(S.String),
          resourceConfigurationGroupId: S.optional(S.String),
          type: S.optional(ResourceConfigurationType),
          portRanges: S.optional(PortRangeList),
          allowAssociationToShareableServiceNetwork: S.optional(S.Boolean),
          protocol: S.optional(ProtocolType),
          status: S.optional(S.String),
          resourceConfigurationDefinition: S.optional(ResourceConfigurationDefinition),
        }),
      ).annotate({
        identifier: "UpdateResourceConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceGatewayIdentifier: S.String.pipe(T.HttpLabel("resourceGatewayIdentifier")),
          securityGroupIds: S.optional(SecurityGroupList),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/resourcegateways/{resourceGatewayIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateResourceGatewayRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          id: S.optional(S.String),
          arn: S.optional(S.String),
          status: S.optional(S.String),
          vpcId: S.optional(S.String),
          subnetIds: S.optional(SubnetList),
          securityGroupIds: S.optional(SecurityGroupList),
          ipAddressType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateResourceGatewayResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          serviceIdentifier: S.String.pipe(T.HttpLabel("serviceIdentifier")),
          listenerIdentifier: S.String.pipe(T.HttpLabel("listenerIdentifier")),
          ruleIdentifier: S.String.pipe(T.HttpLabel("ruleIdentifier")),
          match: S.optional(RuleMatch),
          priority: S.optional(S.Number),
          action: S.optional(RuleAction),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateRuleRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          serviceIdentifier: S.String.pipe(T.HttpLabel("serviceIdentifier")),
          certificateArn: S.optional(S.String),
          authType: S.optional(S.String),
          idleTimeoutSeconds: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/services/{serviceIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateServiceRequest" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          name: S.optional(S.String),
          customDomainName: S.optional(S.String),
          certificateArn: S.optional(S.String),
          authType: S.optional(S.String),
          idleTimeoutSeconds: S.optional(S.Number),
        }),
      ).annotate({ identifier: "UpdateServiceResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          serviceNetworkIdentifier: S.String.pipe(T.HttpLabel("serviceNetworkIdentifier")),
          authType: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/servicenetworks/{serviceNetworkIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateServiceNetworkRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          authType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateServiceNetworkResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          serviceNetworkVpcAssociationIdentifier: S.String.pipe(
            T.HttpLabel("serviceNetworkVpcAssociationIdentifier"),
          ),
          securityGroupIds: S.optional(SecurityGroupList),
          privateDnsEnabled: S.optional(S.Boolean),
          dnsOptions: S.optional(DnsOptions),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateServiceNetworkVpcAssociationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          status: S.optional(S.String),
          createdBy: S.optional(S.String),
          securityGroupIds: S.optional(SecurityGroupList),
          privateDnsEnabled: S.optional(S.Boolean),
          dnsOptions: S.optional(DnsOptions),
        }),
      ).annotate({
        identifier: "UpdateServiceNetworkVpcAssociationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          targetGroupIdentifier: S.String.pipe(T.HttpLabel("targetGroupIdentifier")),
          healthCheck: HealthCheckConfig,
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/targetgroups/{targetGroupIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateTargetGroupRequest" });
    case 6:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 7:
      return S.Array(ValidationExceptionField);
  }
}
