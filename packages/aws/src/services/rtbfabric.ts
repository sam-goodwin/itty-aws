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
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "RTBFabric", serviceShapeName: "RTBFabric" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "rtbfabric" });
const ver = /*@__PURE__*/ T.ServiceVersion("2023-05-15");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseDualStack = false, UseFIPS = false, Endpoint, Region } = p;
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
              `https://rtbfabric-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true && UseDualStack === false) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://rtbfabric-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseFIPS === false && UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://rtbfabric.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://rtbfabric.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(429), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type GatewayId = string;
export type LinkId = string;
export type ResponderErrorMaskingAction = "NO_BID" | "PASSTHROUGH" | (string & {});
const ResponderErrorMaskingAction = S.String;

export type ResponderErrorMaskingLoggingType = "NONE" | "METRIC" | "RESPONSE" | (string & {});
const ResponderErrorMaskingLoggingType = S.String;

export type ResponderErrorMaskingLoggingTypes = ResponderErrorMaskingLoggingType[];
const ResponderErrorMaskingLoggingTypes = /*@__PURE__*/ __L.at(__c0, 0);
export interface ResponderErrorMaskingForHttpCode {
  httpCode: string;
  action: ResponderErrorMaskingAction;
  loggingTypes: ResponderErrorMaskingLoggingType[];
  responseLoggingPercentage?: number;
}
const ResponderErrorMaskingForHttpCode = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<ResponderErrorMaskingForHttpCode>;
export type ResponderErrorMasking = ResponderErrorMaskingForHttpCode[];
const ResponderErrorMasking = /*@__PURE__*/ __L.at(__c0, 2);
export type CustomerProvidedId = string;
export interface LinkAttributes {
  responderErrorMasking?: ResponderErrorMaskingForHttpCode[];
  customerProvidedId?: string;
}
const LinkAttributes = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<LinkAttributes>;
export interface LinkApplicationLogSampling {
  errorLog: number;
  filterLog: number;
}
const LinkApplicationLogSampling = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<LinkApplicationLogSampling>;
export interface LinkApplicationLogConfiguration {
  sampling: LinkApplicationLogSampling;
}
const LinkApplicationLogConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<LinkApplicationLogConfiguration>;
export interface LinkLogSettings {
  applicationLogs: LinkApplicationLogConfiguration;
}
const LinkLogSettings = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<LinkLogSettings>;
export type LinkTimeoutInMillis = number;
export interface AcceptLinkRequest {
  gatewayId: string;
  linkId: string;
  attributes?: LinkAttributes;
  logSettings: LinkLogSettings;
  timeoutInMillis?: number;
}
const AcceptLinkRequest = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<AcceptLinkRequest>;
export type LinkStatus =
  | "PENDING_CREATION"
  | "PENDING_REQUEST"
  | "REQUESTED"
  | "ACCEPTED"
  | "ACTIVE"
  | "REJECTED"
  | "FAILED"
  | "PENDING_DELETION"
  | "DELETED"
  | "PENDING_UPDATE"
  | "PENDING_ISOLATION"
  | "ISOLATED"
  | "PENDING_RESTORATION"
  | (string & {});
const LinkStatus = S.String;

export type LinkDirection = "RESPONSE" | "REQUEST" | (string & {});
const LinkDirection = S.String;

export type Version = string;
export type FlowModuleName = string;
export type FlowModuleNameList = string[];
const FlowModuleNameList = /*@__PURE__*/ __L.at(__c1, 0);
export interface NoBidModuleParameters {
  reason?: string;
  reasonCode?: number;
  passThroughPercentage?: number;
}
const NoBidModuleParameters = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<NoBidModuleParameters>;
export type FilterType = "INCLUDE" | "EXCLUDE" | (string & {});
const FilterType = S.String;

export type ValueList = string[];
const ValueList = FlowModuleNameList as any as S.Schema<ValueList>;
export interface FilterCriterion {
  path: string;
  values: string[];
}
const FilterCriterion = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<FilterCriterion>;
export type FilterCriteria = FilterCriterion[];
const FilterCriteria = /*@__PURE__*/ __L.at(__c1, 3);
export interface Filter {
  criteria: FilterCriterion[];
}
const Filter = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<Filter>;
export type FilterConfiguration = Filter[];
const FilterConfiguration = /*@__PURE__*/ __L.at(__c1, 5);
export interface NoBidAction {
  noBidReasonCode?: number;
}
const NoBidAction = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<NoBidAction>;
export interface HeaderTagAction {
  name: string;
  value: string;
}
const HeaderTagAction = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<HeaderTagAction>;
export type Action =
  | { noBid: NoBidAction; headerTag?: never }
  | { noBid?: never; headerTag: HeaderTagAction };
const Action = /*@__PURE__*/ __L.at(__c2, 0);
export interface OpenRtbAttributeModuleParameters {
  filterType: FilterType;
  filterConfiguration: Filter[];
  action: Action;
  holdbackPercentage: number;
}
const OpenRtbAttributeModuleParameters = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<OpenRtbAttributeModuleParameters>;
export interface RateLimiterModuleParameters {
  tps?: number;
}
const RateLimiterModuleParameters = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<RateLimiterModuleParameters>;
export type ModuleParameters =
  | { noBid: NoBidModuleParameters; openRtbAttribute?: never; rateLimiter?: never }
  | { noBid?: never; openRtbAttribute: OpenRtbAttributeModuleParameters; rateLimiter?: never }
  | { noBid?: never; openRtbAttribute?: never; rateLimiter: RateLimiterModuleParameters };
const ModuleParameters = /*@__PURE__*/ __L.at(__c2, 3);
export interface ModuleConfiguration {
  version?: string;
  name: string;
  dependsOn?: string[];
  moduleParameters?: ModuleParameters;
}
const ModuleConfiguration = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<ModuleConfiguration>;
export type ModuleConfigurationList = ModuleConfiguration[];
const ModuleConfigurationList = /*@__PURE__*/ __L.at(__c2, 5);
export type ConnectivityType =
  | "DEFAULT"
  | "PUBLIC_INGRESS"
  | "PUBLIC_EGRESS"
  | "EXTERNAL_INBOUND"
  | (string & {});
const ConnectivityType = S.String;

export interface AcceptLinkResponse {
  gatewayId: string;
  peerGatewayId: string;
  status: LinkStatus;
  createdAt: Date;
  updatedAt: Date;
  direction?: LinkDirection;
  flowModules?: ModuleConfiguration[];
  pendingFlowModules?: ModuleConfiguration[];
  attributes?: LinkAttributes;
  logSettings?: LinkLogSettings;
  connectivityType?: ConnectivityType;
  linkId: string;
}
const AcceptLinkResponse = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<AcceptLinkResponse>;
export type AcmCertificateArn = string;
export interface AssociateCertificateRequest {
  gatewayId: string;
  acmCertificateArn: string;
  clientToken: string;
}
const AssociateCertificateRequest = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<AssociateCertificateRequest>;
export type CertificateAssociationStatus =
  | "PENDING_ASSOCIATION"
  | "ASSOCIATED"
  | "PENDING_DISASSOCIATION"
  | "DISASSOCIATED"
  | "FAILED"
  | (string & {});
const CertificateAssociationStatus = S.String;

export interface AssociateCertificateResponse {
  gatewayId: string;
  acmCertificateArn: string;
  status: CertificateAssociationStatus;
}
const AssociateCertificateResponse = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<AssociateCertificateResponse>;
export type TagKey = string;
export type TagValue = string;
export type TagsMap = { [key: string]: string | undefined };
const TagsMap = /*@__PURE__*/ __L.at(__c3, 1);
export interface CreateInboundExternalLinkRequest {
  clientToken: string;
  gatewayId: string;
  attributes?: LinkAttributes;
  logSettings: LinkLogSettings;
  tags?: { [key: string]: string | undefined };
}
const CreateInboundExternalLinkRequest = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<CreateInboundExternalLinkRequest>;
export type DomainName = string;
export interface CreateInboundExternalLinkResponse {
  gatewayId: string;
  linkId: string;
  status: LinkStatus;
  domainName: string;
}
const CreateInboundExternalLinkResponse = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<CreateInboundExternalLinkResponse>;
export interface CreateLinkRequest {
  gatewayId: string;
  peerGatewayId: string;
  attributes?: LinkAttributes;
  httpResponderAllowed?: boolean;
  tags?: { [key: string]: string | undefined };
  logSettings: LinkLogSettings;
  timeoutInMillis?: number;
}
const CreateLinkRequest = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<CreateLinkRequest>;
export interface CreateLinkResponse {
  gatewayId: string;
  peerGatewayId: string;
  status: LinkStatus;
  createdAt: Date;
  updatedAt: Date;
  direction?: LinkDirection;
  flowModules?: ModuleConfiguration[];
  pendingFlowModules?: ModuleConfiguration[];
  attributes?: LinkAttributes;
  logSettings?: LinkLogSettings;
  connectivityType?: ConnectivityType;
  linkId: string;
  customerProvidedId?: string;
}
const CreateLinkResponse = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<CreateLinkResponse>;
export type RulePriority = number;
export interface QueryStringKeyValuePair {
  key: string;
  value: string;
}
const QueryStringKeyValuePair = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<QueryStringKeyValuePair>;
export interface RuleCondition {
  hostHeader?: string;
  hostHeaderWildcard?: string;
  pathPrefix?: string;
  pathExact?: string;
  queryStringEquals?: QueryStringKeyValuePair;
  queryStringExists?: string;
}
const RuleCondition = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<RuleCondition>;
export interface CreateLinkRoutingRuleRequest {
  clientToken: string;
  gatewayId: string;
  linkId: string;
  priority: number;
  conditions: RuleCondition;
  tags?: { [key: string]: string | undefined };
}
const CreateLinkRoutingRuleRequest = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CreateLinkRoutingRuleRequest>;
export type RuleId = string;
export type RuleStatus =
  | "CREATION_IN_PROGRESS"
  | "ACTIVE"
  | "UPDATE_IN_PROGRESS"
  | "DELETION_IN_PROGRESS"
  | "DELETED"
  | "FAILED"
  | (string & {});
const RuleStatus = S.String;

export interface CreateLinkRoutingRuleResponse {
  ruleId: string;
  status: RuleStatus;
  createdAt: Date;
}
const CreateLinkRoutingRuleResponse = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<CreateLinkRoutingRuleResponse>;
export type URL = string;
export interface CreateOutboundExternalLinkRequest {
  clientToken: string;
  gatewayId: string;
  attributes?: LinkAttributes;
  publicEndpoint: string;
  logSettings: LinkLogSettings;
  tags?: { [key: string]: string | undefined };
}
const CreateOutboundExternalLinkRequest = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<CreateOutboundExternalLinkRequest>;
export interface CreateOutboundExternalLinkResponse {
  gatewayId: string;
  linkId: string;
  status: LinkStatus;
}
const CreateOutboundExternalLinkResponse = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<CreateOutboundExternalLinkResponse>;
export type VpcId = string;
export type SubnetId = string;
export type SubnetIdList = string[];
const SubnetIdList = FlowModuleNameList as any as S.Schema<SubnetIdList>;
export type SecurityGroupId = string;
export type SecurityGroupIdList = string[];
const SecurityGroupIdList = FlowModuleNameList as any as S.Schema<SecurityGroupIdList>;
export interface CreateRequesterGatewayRequest {
  vpcId: string;
  subnetIds: string[];
  securityGroupIds: string[];
  clientToken: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateRequesterGatewayRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<CreateRequesterGatewayRequest>;
export type RequesterGatewayStatus =
  | "PENDING_CREATION"
  | "ACTIVE"
  | "PENDING_DELETION"
  | "DELETED"
  | "ERROR"
  | "PENDING_UPDATE"
  | "ISOLATED"
  | "PENDING_ISOLATION"
  | "PENDING_RESTORATION"
  | (string & {});
const RequesterGatewayStatus = S.String;

export interface CreateRequesterGatewayResponse {
  gatewayId: string;
  domainName: string;
  status: RequesterGatewayStatus;
}
const CreateRequesterGatewayResponse = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<CreateRequesterGatewayResponse>;
export type Protocol = "HTTP" | "HTTPS" | (string & {});
const Protocol = S.String;

export type ProtocolList = Protocol[];
const ProtocolList = /*@__PURE__*/ __L.at(__c4, 6);
export interface ListenerConfig {
  protocols: Protocol[];
}
const ListenerConfig = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<ListenerConfig>;
export type Base64EncodedCertificateChain = string | redacted.Redacted<string>;
export type CertificateAuthorityCertificates = (string | redacted.Redacted<string>)[];
const CertificateAuthorityCertificates = /*@__PURE__*/ __L.at(__c5, 0);
export interface TrustStoreConfiguration {
  certificateAuthorityCertificates: (string | redacted.Redacted<string>)[];
}
const TrustStoreConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<TrustStoreConfiguration>;
export type AutoScalingGroupName = string;
export type AutoScalingGroupNameList = string[];
const AutoScalingGroupNameList = FlowModuleNameList as any as S.Schema<AutoScalingGroupNameList>;
export type StatusCodeMatcher = string;
export interface HealthCheckConfig {
  port: number;
  path: string;
  protocol?: Protocol;
  timeoutMs?: number;
  intervalSeconds?: number;
  statusCodeMatcher?: string;
  healthyThresholdCount?: number;
  unhealthyThresholdCount?: number;
}
const HealthCheckConfig = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<HealthCheckConfig>;
export interface AutoScalingGroupsConfiguration {
  autoScalingGroupNames: string[];
  roleArn: string;
  healthCheckConfig?: HealthCheckConfig;
}
const AutoScalingGroupsConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<AutoScalingGroupsConfiguration>;
export type KubernetesEndpointsResourceName = string;
export type KubernetesNamespace = string;
export type URI = string;
export type KubernetesClusterName = string;
export interface EksEndpointsConfiguration {
  endpointsResourceName: string;
  endpointsResourceNamespace: string;
  clusterApiServerEndpointUri: string;
  clusterApiServerCaCertificateChain: string | redacted.Redacted<string>;
  clusterName: string;
  roleArn: string;
}
const EksEndpointsConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<EksEndpointsConfiguration>;
export type ManagedEndpointConfiguration =
  | { autoScalingGroups: AutoScalingGroupsConfiguration; eksEndpoints?: never }
  | { autoScalingGroups?: never; eksEndpoints: EksEndpointsConfiguration };
const ManagedEndpointConfiguration = /*@__PURE__*/ __L.at(__c5, 5);
export type GatewayType = "EXTERNAL" | "INTERNAL" | (string & {});
const GatewayType = S.String;

export type ClientRoutingPolicy =
  | "AVAILABILITY_ZONE_AFFINITY"
  | "ANY_AVAILABILITY_ZONE"
  | (string & {});
const ClientRoutingPolicy = S.String;

export interface CreateResponderGatewayRequest {
  vpcId: string;
  subnetIds: string[];
  securityGroupIds: string[];
  domainName?: string;
  port: number;
  protocol: Protocol;
  listenerConfig?: ListenerConfig;
  trustStoreConfiguration?: TrustStoreConfiguration;
  managedEndpointConfiguration?: ManagedEndpointConfiguration;
  clientToken: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
  gatewayType?: GatewayType;
  clientRoutingPolicy?: ClientRoutingPolicy;
}
const CreateResponderGatewayRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<CreateResponderGatewayRequest>;
export type ResponderGatewayStatus =
  | "PENDING_CREATION"
  | "ACTIVE"
  | "PENDING_DELETION"
  | "DELETED"
  | "ERROR"
  | "PENDING_UPDATE"
  | "ISOLATED"
  | "PENDING_ISOLATION"
  | "PENDING_RESTORATION"
  | (string & {});
const ResponderGatewayStatus = S.String;

export interface CreateResponderGatewayResponse {
  gatewayId: string;
  status: ResponderGatewayStatus;
  listenerConfig?: ListenerConfig;
  externalInboundEndpoint?: string;
  clientRoutingPolicy?: ClientRoutingPolicy;
}
const CreateResponderGatewayResponse = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<CreateResponderGatewayResponse>;
export interface DeleteInboundExternalLinkRequest {
  gatewayId: string;
  linkId: string;
}
const DeleteInboundExternalLinkRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<DeleteInboundExternalLinkRequest>;
export interface DeleteInboundExternalLinkResponse {
  linkId: string;
  status: LinkStatus;
}
const DeleteInboundExternalLinkResponse = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<DeleteInboundExternalLinkResponse>;
export interface DeleteLinkRequest {
  gatewayId: string;
  linkId: string;
}
const DeleteLinkRequest = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<DeleteLinkRequest>;
export interface DeleteLinkResponse {
  linkId: string;
  status: LinkStatus;
}
const DeleteLinkResponse = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<DeleteLinkResponse>;
export interface DeleteLinkRoutingRuleRequest {
  gatewayId: string;
  linkId: string;
  ruleId: string;
}
const DeleteLinkRoutingRuleRequest = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<DeleteLinkRoutingRuleRequest>;
export interface DeleteLinkRoutingRuleResponse {
  ruleId: string;
  status: RuleStatus;
}
const DeleteLinkRoutingRuleResponse = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<DeleteLinkRoutingRuleResponse>;
export interface DeleteOutboundExternalLinkRequest {
  gatewayId: string;
  linkId: string;
}
const DeleteOutboundExternalLinkRequest = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<DeleteOutboundExternalLinkRequest>;
export interface DeleteOutboundExternalLinkResponse {
  linkId: string;
  status: LinkStatus;
}
const DeleteOutboundExternalLinkResponse =
  DeleteInboundExternalLinkResponse as any as S.Schema<DeleteOutboundExternalLinkResponse>;
export interface DeleteRequesterGatewayRequest {
  gatewayId: string;
}
const DeleteRequesterGatewayRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<DeleteRequesterGatewayRequest>;
export interface DeleteRequesterGatewayResponse {
  gatewayId: string;
  status: RequesterGatewayStatus;
}
const DeleteRequesterGatewayResponse = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DeleteRequesterGatewayResponse>;
export interface DeleteResponderGatewayRequest {
  gatewayId: string;
}
const DeleteResponderGatewayRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DeleteResponderGatewayRequest>;
export interface DeleteResponderGatewayResponse {
  gatewayId: string;
  status: ResponderGatewayStatus;
}
const DeleteResponderGatewayResponse =
  DeleteRequesterGatewayResponse as any as S.Schema<DeleteResponderGatewayResponse>;
export interface DisassociateCertificateRequest {
  gatewayId: string;
  acmCertificateArn: string;
}
const DisassociateCertificateRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DisassociateCertificateRequest>;
export interface DisassociateCertificateResponse {
  gatewayId: string;
  acmCertificateArn: string;
  status: CertificateAssociationStatus;
}
const DisassociateCertificateResponse =
  AssociateCertificateResponse as any as S.Schema<DisassociateCertificateResponse>;
export interface GetCertificateAssociationRequest {
  gatewayId: string;
  acmCertificateArn: string;
}
const GetCertificateAssociationRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<GetCertificateAssociationRequest>;
export interface GetCertificateAssociationResponse {
  gatewayId: string;
  acmCertificateArn: string;
  status: CertificateAssociationStatus;
  associatedAt?: Date;
  updatedAt?: Date;
}
const GetCertificateAssociationResponse = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<GetCertificateAssociationResponse>;
export interface GetInboundExternalLinkRequest {
  gatewayId: string;
  linkId: string;
}
const GetInboundExternalLinkRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<GetInboundExternalLinkRequest>;
export interface GetInboundExternalLinkResponse {
  gatewayId: string;
  linkId: string;
  status: LinkStatus;
  domainName: string;
  flowModules?: ModuleConfiguration[];
  pendingFlowModules?: ModuleConfiguration[];
  attributes?: LinkAttributes;
  createdAt?: Date;
  updatedAt?: Date;
  tags?: { [key: string]: string | undefined };
  logSettings?: LinkLogSettings;
  connectivityType?: ConnectivityType;
}
const GetInboundExternalLinkResponse = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<GetInboundExternalLinkResponse>;
export interface GetLinkRequest {
  gatewayId: string;
  linkId: string;
}
const GetLinkRequest = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<GetLinkRequest>;
export interface GetLinkResponse {
  gatewayId: string;
  peerGatewayId: string;
  status: LinkStatus;
  createdAt: Date;
  updatedAt: Date;
  direction?: LinkDirection;
  flowModules?: ModuleConfiguration[];
  pendingFlowModules?: ModuleConfiguration[];
  attributes?: LinkAttributes;
  logSettings?: LinkLogSettings;
  connectivityType?: ConnectivityType;
  linkId: string;
  tags?: { [key: string]: string | undefined };
  httpResponderAllowed?: boolean;
  timeoutInMillis?: number;
}
const GetLinkResponse = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<GetLinkResponse>;
export interface GetLinkRoutingRuleRequest {
  gatewayId: string;
  linkId: string;
  ruleId: string;
}
const GetLinkRoutingRuleRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<GetLinkRoutingRuleRequest>;
export interface GetLinkRoutingRuleResponse {
  gatewayId: string;
  linkId: string;
  ruleId: string;
  priority: number;
  conditions: RuleCondition;
  status: RuleStatus;
  createdAt: Date;
  updatedAt: Date;
  tags?: { [key: string]: string | undefined };
}
const GetLinkRoutingRuleResponse = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<GetLinkRoutingRuleResponse>;
export interface GetOutboundExternalLinkRequest {
  gatewayId: string;
  linkId: string;
}
const GetOutboundExternalLinkRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<GetOutboundExternalLinkRequest>;
export interface GetOutboundExternalLinkResponse {
  gatewayId: string;
  linkId: string;
  status: LinkStatus;
  publicEndpoint: string;
  flowModules?: ModuleConfiguration[];
  pendingFlowModules?: ModuleConfiguration[];
  attributes?: LinkAttributes;
  createdAt?: Date;
  updatedAt?: Date;
  tags?: { [key: string]: string | undefined };
  logSettings?: LinkLogSettings;
  connectivityType?: ConnectivityType;
}
const GetOutboundExternalLinkResponse = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<GetOutboundExternalLinkResponse>;
export interface GetRequesterGatewayRequest {
  gatewayId: string;
}
const GetRequesterGatewayRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<GetRequesterGatewayRequest>;
export interface GetRequesterGatewayResponse {
  status: RequesterGatewayStatus;
  domainName: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  vpcId: string;
  subnetIds: string[];
  securityGroupIds: string[];
  gatewayId: string;
  tags?: { [key: string]: string | undefined };
  activeLinksCount?: number;
  totalLinksCount?: number;
}
const GetRequesterGatewayResponse = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<GetRequesterGatewayResponse>;
export interface GetResponderGatewayRequest {
  gatewayId: string;
}
const GetResponderGatewayRequest = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<GetResponderGatewayRequest>;
export interface GetResponderGatewayResponse {
  vpcId: string;
  subnetIds: string[];
  securityGroupIds: string[];
  status: ResponderGatewayStatus;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  domainName?: string;
  port: number;
  protocol: Protocol;
  listenerConfig?: ListenerConfig;
  trustStoreConfiguration?: TrustStoreConfiguration;
  managedEndpointConfiguration?: ManagedEndpointConfiguration;
  gatewayId: string;
  tags?: { [key: string]: string | undefined };
  activeLinksCount?: number;
  totalLinksCount?: number;
  linksRequestedCount?: number;
  gatewayType?: GatewayType;
  externalInboundEndpoint?: string;
  clientRoutingPolicy?: ClientRoutingPolicy;
}
const GetResponderGatewayResponse = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<GetResponderGatewayResponse>;
export interface ListCertificateAssociationsRequest {
  gatewayId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListCertificateAssociationsRequest = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<ListCertificateAssociationsRequest>;
export interface CertificateAssociationSummary {
  acmCertificateArn: string;
  status: CertificateAssociationStatus;
  associatedAt?: Date;
  updatedAt?: Date;
}
const CertificateAssociationSummary = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<CertificateAssociationSummary>;
export type CertificateAssociationSummaryList = CertificateAssociationSummary[];
const CertificateAssociationSummaryList = /*@__PURE__*/ __L.at(__c9, 3);
export interface ListCertificateAssociationsResponse {
  certificateAssociations: CertificateAssociationSummary[];
  nextToken?: string;
}
const ListCertificateAssociationsResponse = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<ListCertificateAssociationsResponse>;
export interface ListLinkRoutingRulesRequest {
  gatewayId: string;
  linkId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListLinkRoutingRulesRequest = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<ListLinkRoutingRulesRequest>;
export interface LinkRoutingRuleSummary {
  ruleId: string;
  priority: number;
  conditions: RuleCondition;
  status: RuleStatus;
  createdAt: Date;
  updatedAt: Date;
}
const LinkRoutingRuleSummary = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<LinkRoutingRuleSummary>;
export type LinkRoutingRuleList = LinkRoutingRuleSummary[];
const LinkRoutingRuleList = /*@__PURE__*/ __L.at(__c9, 7);
export interface ListLinkRoutingRulesResponse {
  rules?: LinkRoutingRuleSummary[];
  nextToken?: string;
}
const ListLinkRoutingRulesResponse = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<ListLinkRoutingRulesResponse>;
export interface ListLinksRequest {
  gatewayId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListLinksRequest = /*@__PURE__*/ __L.at(__c10, 1) as any as S.Schema<ListLinksRequest>;
export interface ListLinksResponseStructure {
  gatewayId: string;
  peerGatewayId: string;
  status: LinkStatus;
  createdAt: Date;
  updatedAt: Date;
  direction?: LinkDirection;
  flowModules?: ModuleConfiguration[];
  pendingFlowModules?: ModuleConfiguration[];
  attributes?: LinkAttributes;
  logSettings?: LinkLogSettings;
  connectivityType?: ConnectivityType;
  linkId: string;
  tags?: { [key: string]: string | undefined };
  publicEndpoint?: string;
}
const ListLinksResponseStructure = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<ListLinksResponseStructure>;
export type LinkList = ListLinksResponseStructure[];
const LinkList = /*@__PURE__*/ __L.at(__c10, 3);
export interface ListLinksResponse {
  links?: ListLinksResponseStructure[];
  nextToken?: string;
}
const ListLinksResponse = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<ListLinksResponse>;
export interface ListRequesterGatewaysRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListRequesterGatewaysRequest = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<ListRequesterGatewaysRequest>;
export type GatewayIdList = string[];
const GatewayIdList = FlowModuleNameList as any as S.Schema<GatewayIdList>;
export interface ListRequesterGatewaysResponse {
  gatewayIds?: string[];
  nextToken?: string;
}
const ListRequesterGatewaysResponse = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<ListRequesterGatewaysResponse>;
export interface ListResponderGatewaysRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListResponderGatewaysRequest = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<ListResponderGatewaysRequest>;
export interface ListResponderGatewaysResponse {
  gatewayIds?: string[];
  nextToken?: string;
}
const ListResponderGatewaysResponse =
  ListRequesterGatewaysResponse as any as S.Schema<ListResponderGatewaysResponse>;
export type RtbTaggableResourceArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface RejectLinkRequest {
  gatewayId: string;
  linkId: string;
}
const RejectLinkRequest = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<RejectLinkRequest>;
export interface RejectLinkResponse {
  gatewayId: string;
  peerGatewayId: string;
  status: LinkStatus;
  createdAt: Date;
  updatedAt: Date;
  direction?: LinkDirection;
  flowModules?: ModuleConfiguration[];
  pendingFlowModules?: ModuleConfiguration[];
  attributes?: LinkAttributes;
  logSettings?: LinkLogSettings;
  connectivityType?: ConnectivityType;
  linkId: string;
}
const RejectLinkResponse = AcceptLinkResponse as any as S.Schema<RejectLinkResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c11, 3) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = /*@__PURE__*/ __L.at(__c11, 4) as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = FlowModuleNameList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = TagResourceResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateLinkRequest {
  gatewayId: string;
  linkId: string;
  logSettings?: LinkLogSettings;
  timeoutInMillis?: number;
}
const UpdateLinkRequest = /*@__PURE__*/ __L.at(__c11, 6) as any as S.Schema<UpdateLinkRequest>;
export interface UpdateLinkResponse {
  linkId: string;
  status: LinkStatus;
}
const UpdateLinkResponse = DeleteLinkResponse as any as S.Schema<UpdateLinkResponse>;
export interface UpdateLinkModuleFlowRequest {
  clientToken: string;
  gatewayId: string;
  linkId: string;
  modules: ModuleConfiguration[];
}
const UpdateLinkModuleFlowRequest = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<UpdateLinkModuleFlowRequest>;
export interface UpdateLinkModuleFlowResponse {
  gatewayId: string;
  linkId: string;
  status: LinkStatus;
}
const UpdateLinkModuleFlowResponse =
  CreateOutboundExternalLinkResponse as any as S.Schema<UpdateLinkModuleFlowResponse>;
export interface UpdateLinkRoutingRuleRequest {
  gatewayId: string;
  linkId: string;
  ruleId: string;
  priority: number;
  conditions: RuleCondition;
}
const UpdateLinkRoutingRuleRequest = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<UpdateLinkRoutingRuleRequest>;
export interface UpdateLinkRoutingRuleResponse {
  ruleId: string;
  status: RuleStatus;
  updatedAt: Date;
}
const UpdateLinkRoutingRuleResponse = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<UpdateLinkRoutingRuleResponse>;
export interface UpdateRequesterGatewayRequest {
  clientToken: string;
  gatewayId: string;
  description?: string;
}
const UpdateRequesterGatewayRequest = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<UpdateRequesterGatewayRequest>;
export interface UpdateRequesterGatewayResponse {
  gatewayId: string;
  status: RequesterGatewayStatus;
}
const UpdateRequesterGatewayResponse =
  DeleteRequesterGatewayResponse as any as S.Schema<UpdateRequesterGatewayResponse>;
export interface UpdateResponderGatewayRequest {
  domainName?: string;
  port: number;
  protocol: Protocol;
  listenerConfig?: ListenerConfig;
  trustStoreConfiguration?: TrustStoreConfiguration;
  managedEndpointConfiguration?: ManagedEndpointConfiguration;
  clientToken: string;
  gatewayId: string;
  description?: string;
  clientRoutingPolicy?: ClientRoutingPolicy;
}
const UpdateResponderGatewayRequest = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<UpdateResponderGatewayRequest>;
export interface UpdateResponderGatewayResponse {
  gatewayId: string;
  status: ResponderGatewayStatus;
  clientRoutingPolicy?: ClientRoutingPolicy;
}
const UpdateResponderGatewayResponse = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<UpdateResponderGatewayResponse>;
export type AcceptLinkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Accepts a link request between gateways.
 *
 * When a requester gateway requests to link with a responder gateway, the responder can use this operation to accept the link request and establish the connection.
 */
export const acceptLink: API.OperationMethod<
  AcceptLinkRequest,
  AcceptLinkResponse,
  AcceptLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AcceptLinkRequest,
  output: AcceptLinkResponse,
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
  operationName: "AcceptLink",
}));

export type AssociateCertificateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates an ACM certificate with a responder gateway.
 */
export const associateCertificate: API.OperationMethod<
  AssociateCertificateRequest,
  AssociateCertificateResponse,
  AssociateCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateCertificateRequest,
  output: AssociateCertificateResponse,
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
  operationName: "AssociateCertificate",
}));

export type CreateInboundExternalLinkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an inbound external link.
 */
export const createInboundExternalLink: API.OperationMethod<
  CreateInboundExternalLinkRequest,
  CreateInboundExternalLinkResponse,
  CreateInboundExternalLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateInboundExternalLinkRequest,
  output: CreateInboundExternalLinkResponse,
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
  operationName: "CreateInboundExternalLink",
}));

export type CreateLinkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new link between gateways.
 *
 * Establishes a connection that allows gateways to communicate and exchange bid requests and responses.
 */
export const createLink: API.OperationMethod<
  CreateLinkRequest,
  CreateLinkResponse,
  CreateLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLinkRequest,
  output: CreateLinkResponse,
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
  operationName: "CreateLink",
}));

export type CreateLinkRoutingRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a routing rule for a link.
 *
 * Routing rules use priority-based evaluation where lower priority numbers are evaluated first. Each rule specifies conditions that must all match for the rule to apply.
 */
export const createLinkRoutingRule: API.OperationMethod<
  CreateLinkRoutingRuleRequest,
  CreateLinkRoutingRuleResponse,
  CreateLinkRoutingRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLinkRoutingRuleRequest,
  output: CreateLinkRoutingRuleResponse,
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
  operationName: "CreateLinkRoutingRule",
}));

export type CreateOutboundExternalLinkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an outbound external link.
 */
export const createOutboundExternalLink: API.OperationMethod<
  CreateOutboundExternalLinkRequest,
  CreateOutboundExternalLinkResponse,
  CreateOutboundExternalLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOutboundExternalLinkRequest,
  output: CreateOutboundExternalLinkResponse,
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
  operationName: "CreateOutboundExternalLink",
}));

export type CreateRequesterGatewayError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a requester gateway.
 */
export const createRequesterGateway: API.OperationMethod<
  CreateRequesterGatewayRequest,
  CreateRequesterGatewayResponse,
  CreateRequesterGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateRequesterGatewayRequest,
  output: CreateRequesterGatewayResponse,
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
  operationName: "CreateRequesterGateway",
}));

export type CreateResponderGatewayError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a responder gateway.
 *
 * A domain name or managed endpoint is required.
 */
export const createResponderGateway: API.OperationMethod<
  CreateResponderGatewayRequest,
  CreateResponderGatewayResponse,
  CreateResponderGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateResponderGatewayRequest,
  output: CreateResponderGatewayResponse,
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
  operationName: "CreateResponderGateway",
}));

export type DeleteInboundExternalLinkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an inbound external link.
 */
export const deleteInboundExternalLink: API.OperationMethod<
  DeleteInboundExternalLinkRequest,
  DeleteInboundExternalLinkResponse,
  DeleteInboundExternalLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteInboundExternalLinkRequest,
  output: DeleteInboundExternalLinkResponse,
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
  operationName: "DeleteInboundExternalLink",
}));

export type DeleteLinkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a link between gateways.
 *
 * Permanently removes the connection between gateways. This action cannot be undone.
 */
export const deleteLink: API.OperationMethod<
  DeleteLinkRequest,
  DeleteLinkResponse,
  DeleteLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLinkRequest,
  output: DeleteLinkResponse,
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
  operationName: "DeleteLink",
}));

export type DeleteLinkRoutingRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a routing rule from a link.
 */
export const deleteLinkRoutingRule: API.OperationMethod<
  DeleteLinkRoutingRuleRequest,
  DeleteLinkRoutingRuleResponse,
  DeleteLinkRoutingRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLinkRoutingRuleRequest,
  output: DeleteLinkRoutingRuleResponse,
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
  operationName: "DeleteLinkRoutingRule",
}));

export type DeleteOutboundExternalLinkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an outbound external link.
 */
export const deleteOutboundExternalLink: API.OperationMethod<
  DeleteOutboundExternalLinkRequest,
  DeleteOutboundExternalLinkResponse,
  DeleteOutboundExternalLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOutboundExternalLinkRequest,
  output: DeleteOutboundExternalLinkResponse,
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
  operationName: "DeleteOutboundExternalLink",
}));

export type DeleteRequesterGatewayError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a requester gateway.
 */
export const deleteRequesterGateway: API.OperationMethod<
  DeleteRequesterGatewayRequest,
  DeleteRequesterGatewayResponse,
  DeleteRequesterGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRequesterGatewayRequest,
  output: DeleteRequesterGatewayResponse,
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
  operationName: "DeleteRequesterGateway",
}));

export type DeleteResponderGatewayError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a responder gateway.
 */
export const deleteResponderGateway: API.OperationMethod<
  DeleteResponderGatewayRequest,
  DeleteResponderGatewayResponse,
  DeleteResponderGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteResponderGatewayRequest,
  output: DeleteResponderGatewayResponse,
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
  operationName: "DeleteResponderGateway",
}));

export type DisassociateCertificateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a certificate association from a responder gateway.
 */
export const disassociateCertificate: API.OperationMethod<
  DisassociateCertificateRequest,
  DisassociateCertificateResponse,
  DisassociateCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateCertificateRequest,
  output: DisassociateCertificateResponse,
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
  operationName: "DisassociateCertificate",
}));

export type GetCertificateAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of a certificate association with a responder gateway.
 */
export const getCertificateAssociation: API.OperationMethod<
  GetCertificateAssociationRequest,
  GetCertificateAssociationResponse,
  GetCertificateAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCertificateAssociationRequest,
  output: GetCertificateAssociationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCertificateAssociation",
}));

export type GetInboundExternalLinkError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an inbound external link.
 */
export const getInboundExternalLink: API.OperationMethod<
  GetInboundExternalLinkRequest,
  GetInboundExternalLinkResponse,
  GetInboundExternalLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetInboundExternalLinkRequest,
  output: GetInboundExternalLinkResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInboundExternalLink",
}));

export type GetLinkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a link between gateways.
 *
 * Returns detailed information about the link configuration, status, and associated gateways.
 */
export const getLink: API.OperationMethod<
  GetLinkRequest,
  GetLinkResponse,
  GetLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLinkRequest,
  output: GetLinkResponse,
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
  operationName: "GetLink",
}));

export type GetLinkRoutingRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of a routing rule for a link.
 */
export const getLinkRoutingRule: API.OperationMethod<
  GetLinkRoutingRuleRequest,
  GetLinkRoutingRuleResponse,
  GetLinkRoutingRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLinkRoutingRuleRequest,
  output: GetLinkRoutingRuleResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLinkRoutingRule",
}));

export type GetOutboundExternalLinkError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an outbound external link.
 */
export const getOutboundExternalLink: API.OperationMethod<
  GetOutboundExternalLinkRequest,
  GetOutboundExternalLinkResponse,
  GetOutboundExternalLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOutboundExternalLinkRequest,
  output: GetOutboundExternalLinkResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOutboundExternalLink",
}));

export type GetRequesterGatewayError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a requester gateway.
 */
export const getRequesterGateway: API.OperationMethod<
  GetRequesterGatewayRequest,
  GetRequesterGatewayResponse,
  GetRequesterGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRequesterGatewayRequest,
  output: GetRequesterGatewayResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRequesterGateway",
}));

export type GetResponderGatewayError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a responder gateway.
 */
export const getResponderGateway: API.OperationMethod<
  GetResponderGatewayRequest,
  GetResponderGatewayResponse,
  GetResponderGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResponderGatewayRequest,
  output: GetResponderGatewayResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResponderGateway",
}));

export type ListCertificateAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the certificate associations for a responder gateway.
 */
export const listCertificateAssociations: API.PaginatedOperationMethod<
  ListCertificateAssociationsRequest,
  ListCertificateAssociationsResponse,
  ListCertificateAssociationsError,
  Credentials | HttpClient.HttpClient,
  CertificateAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCertificateAssociationsRequest,
  output: ListCertificateAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCertificateAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "certificateAssociations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListLinkRoutingRulesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the routing rules for a link.
 */
export const listLinkRoutingRules: API.PaginatedOperationMethod<
  ListLinkRoutingRulesRequest,
  ListLinkRoutingRulesResponse,
  ListLinkRoutingRulesError,
  Credentials | HttpClient.HttpClient,
  LinkRoutingRuleSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLinkRoutingRulesRequest,
  output: ListLinkRoutingRulesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLinkRoutingRules",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "rules",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListLinksError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists links associated with gateways.
 *
 * Returns a list of all links for the specified gateways, including their status and configuration details.
 */
export const listLinks: API.PaginatedOperationMethod<
  ListLinksRequest,
  ListLinksResponse,
  ListLinksError,
  Credentials | HttpClient.HttpClient,
  ListLinksResponseStructure
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLinksRequest,
  output: ListLinksResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLinks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "links",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRequesterGatewaysError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Lists requester gateways.
 */
export const listRequesterGateways: API.PaginatedOperationMethod<
  ListRequesterGatewaysRequest,
  ListRequesterGatewaysResponse,
  ListRequesterGatewaysError,
  Credentials | HttpClient.HttpClient,
  GatewayId
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRequesterGatewaysRequest,
  output: ListRequesterGatewaysResponse,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRequesterGateways",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "gatewayIds",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListResponderGatewaysError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Lists reponder gateways.
 */
export const listResponderGateways: API.PaginatedOperationMethod<
  ListResponderGatewaysRequest,
  ListResponderGatewaysResponse,
  ListResponderGatewaysError,
  Credentials | HttpClient.HttpClient,
  GatewayId
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListResponderGatewaysRequest,
  output: ListResponderGatewaysResponse,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResponderGateways",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "gatewayIds",
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
 * Lists tags for a resource.
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
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type RejectLinkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Rejects a link request between gateways.
 *
 * When a requester gateway requests to link with a responder gateway, the responder can use this operation to decline the link request.
 */
export const rejectLink: API.OperationMethod<
  RejectLinkRequest,
  RejectLinkResponse,
  RejectLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RejectLinkRequest,
  output: RejectLinkResponse,
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
  operationName: "RejectLink",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Assigns one or more tags (key-value pairs) to the specified resource.
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
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a tag or tags from a resource.
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
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateLinkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of a link between gateways.
 *
 * Allows you to modify settings and parameters for an existing link.
 */
export const updateLink: API.OperationMethod<
  UpdateLinkRequest,
  UpdateLinkResponse,
  UpdateLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLinkRequest,
  output: UpdateLinkResponse,
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
  operationName: "UpdateLink",
}));

export type UpdateLinkModuleFlowError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a link module flow.
 */
export const updateLinkModuleFlow: API.OperationMethod<
  UpdateLinkModuleFlowRequest,
  UpdateLinkModuleFlowResponse,
  UpdateLinkModuleFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLinkModuleFlowRequest,
  output: UpdateLinkModuleFlowResponse,
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
  operationName: "UpdateLinkModuleFlow",
}));

export type UpdateLinkRoutingRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a routing rule for a link.
 */
export const updateLinkRoutingRule: API.OperationMethod<
  UpdateLinkRoutingRuleRequest,
  UpdateLinkRoutingRuleResponse,
  UpdateLinkRoutingRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLinkRoutingRuleRequest,
  output: UpdateLinkRoutingRuleResponse,
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
  operationName: "UpdateLinkRoutingRule",
}));

export type UpdateRequesterGatewayError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a requester gateway.
 */
export const updateRequesterGateway: API.OperationMethod<
  UpdateRequesterGatewayRequest,
  UpdateRequesterGatewayResponse,
  UpdateRequesterGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRequesterGatewayRequest,
  output: UpdateRequesterGatewayResponse,
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
  operationName: "UpdateRequesterGateway",
}));

export type UpdateResponderGatewayError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the description, Auto Scaling group managed endpoint configuration, trust store configuration, and client routing policy of a responder gateway. This operation also updates the `protocols` list in the listener configuration.
 *
 * You cannot change the `domainName`, `port`, and `protocol` values that you set when you create a responder gateway. To change any of them, delete the gateway and create a new one.
 */
export const updateResponderGateway: API.OperationMethod<
  UpdateResponderGatewayRequest,
  UpdateResponderGatewayResponse,
  UpdateResponderGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateResponderGatewayRequest,
  output: UpdateResponderGatewayResponse,
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
  operationName: "UpdateResponderGateway",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ResponderErrorMaskingLoggingType);
    case 1:
      return S.suspend(() =>
        S.Struct({
          httpCode: S.String,
          action: ResponderErrorMaskingAction,
          loggingTypes: ResponderErrorMaskingLoggingTypes,
          responseLoggingPercentage: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ResponderErrorMaskingForHttpCode",
      });
    case 2:
      return S.Array(ResponderErrorMaskingForHttpCode);
    case 3:
      return S.suspend(() =>
        S.Struct({
          responderErrorMasking: S.optional(ResponderErrorMasking),
          customerProvidedId: S.optional(S.String),
        }),
      ).annotate({ identifier: "LinkAttributes" });
    case 4:
      return S.suspend(() => S.Struct({ errorLog: S.Number, filterLog: S.Number })).annotate({
        identifier: "LinkApplicationLogSampling",
      });
    case 5:
      return S.suspend(() => S.Struct({ sampling: LinkApplicationLogSampling })).annotate({
        identifier: "LinkApplicationLogConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ applicationLogs: LinkApplicationLogConfiguration }),
      ).annotate({ identifier: "LinkLogSettings" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          linkId: S.String.pipe(T.HttpLabel("linkId")),
          attributes: S.optional(LinkAttributes),
          logSettings: LinkLogSettings,
          timeoutInMillis: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/gateway/{gatewayId}/link/{linkId}/accept" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AcceptLinkRequest" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          reason: S.optional(S.String),
          reasonCode: S.optional(S.Number),
          passThroughPercentage: S.optional(S.Number),
        }),
      ).annotate({ identifier: "NoBidModuleParameters" });
    case 2:
      return S.suspend(() => S.Struct({ path: S.String, values: ValueList })).annotate({
        identifier: "FilterCriterion",
      });
    case 3:
      return S.Array(FilterCriterion);
    case 4:
      return S.suspend(() => S.Struct({ criteria: FilterCriteria })).annotate({
        identifier: "Filter",
      });
    case 5:
      return S.Array(Filter);
    case 6:
      return S.suspend(() => S.Struct({ noBidReasonCode: S.optional(S.Number) })).annotate({
        identifier: "NoBidAction",
      });
    case 7:
      return S.suspend(() => S.Struct({ name: S.String, value: S.String })).annotate({
        identifier: "HeaderTagAction",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ noBid: NoBidAction }),
        /*@__PURE__*/ S.Struct({ headerTag: HeaderTagAction }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          filterType: FilterType,
          filterConfiguration: FilterConfiguration,
          action: Action,
          holdbackPercentage: S.Number,
        }),
      ).annotate({
        identifier: "OpenRtbAttributeModuleParameters",
      });
    case 2:
      return S.suspend(() => S.Struct({ tps: S.optional(S.Number) })).annotate({
        identifier: "RateLimiterModuleParameters",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ noBid: NoBidModuleParameters }),
        /*@__PURE__*/ S.Struct({ openRtbAttribute: OpenRtbAttributeModuleParameters }),
        /*@__PURE__*/ S.Struct({ rateLimiter: RateLimiterModuleParameters }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          version: S.optional(S.String),
          name: S.String,
          dependsOn: S.optional(FlowModuleNameList),
          moduleParameters: S.optional(ModuleParameters),
        }),
      ).annotate({ identifier: "ModuleConfiguration" });
    case 5:
      return S.Array(ModuleConfiguration);
    case 6:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          peerGatewayId: S.String,
          status: LinkStatus,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          direction: S.optional(LinkDirection),
          flowModules: S.optional(ModuleConfigurationList),
          pendingFlowModules: S.optional(ModuleConfigurationList),
          attributes: S.optional(LinkAttributes),
          logSettings: S.optional(LinkLogSettings),
          connectivityType: S.optional(ConnectivityType),
          linkId: S.String,
        }),
      ).annotate({ identifier: "AcceptLinkResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          acmCertificateArn: S.String,
          clientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/responder-gateway/{gatewayId}/certificate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateCertificateRequest",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          acmCertificateArn: S.String,
          status: CertificateAssociationStatus,
        }),
      ).annotate({
        identifier: "AssociateCertificateResponse",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.String.pipe(T.IdempotencyToken()),
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          attributes: S.optional(LinkAttributes),
          logSettings: LinkLogSettings,
          tags: S.optional(TagsMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/responder-gateway/{gatewayId}/inbound-external-link" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateInboundExternalLinkRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          linkId: S.String,
          status: LinkStatus,
          domainName: S.String,
        }),
      ).annotate({
        identifier: "CreateInboundExternalLinkResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          peerGatewayId: S.String,
          attributes: S.optional(LinkAttributes),
          httpResponderAllowed: S.optional(S.Boolean),
          tags: S.optional(TagsMap),
          logSettings: LinkLogSettings,
          timeoutInMillis: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/gateway/{gatewayId}/create-link" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateLinkRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          peerGatewayId: S.String,
          status: LinkStatus,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          direction: S.optional(LinkDirection),
          flowModules: S.optional(ModuleConfigurationList),
          pendingFlowModules: S.optional(ModuleConfigurationList),
          attributes: S.optional(LinkAttributes),
          logSettings: S.optional(LinkLogSettings),
          connectivityType: S.optional(ConnectivityType),
          linkId: S.String,
          customerProvidedId: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateLinkResponse" });
    case 6:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "QueryStringKeyValuePair",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          hostHeader: S.optional(S.String),
          hostHeaderWildcard: S.optional(S.String),
          pathPrefix: S.optional(S.String),
          pathExact: S.optional(S.String),
          queryStringEquals: S.optional(QueryStringKeyValuePair),
          queryStringExists: S.optional(S.String),
        }),
      ).annotate({ identifier: "RuleCondition" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.String.pipe(T.IdempotencyToken()),
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          linkId: S.String.pipe(T.HttpLabel("linkId")),
          priority: S.Number,
          conditions: RuleCondition,
          tags: S.optional(TagsMap),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/responder-gateway/{gatewayId}/link/{linkId}/routing-rule",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateLinkRoutingRuleRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ruleId: S.String,
          status: RuleStatus,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "CreateLinkRoutingRuleResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.String.pipe(T.IdempotencyToken()),
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          attributes: S.optional(LinkAttributes),
          publicEndpoint: S.String,
          logSettings: LinkLogSettings,
          tags: S.optional(TagsMap),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/requester-gateway/{gatewayId}/outbound-external-link",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateOutboundExternalLinkRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ gatewayId: S.String, linkId: S.String, status: LinkStatus }),
      ).annotate({
        identifier: "CreateOutboundExternalLinkResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          vpcId: S.String,
          subnetIds: SubnetIdList,
          securityGroupIds: SecurityGroupIdList,
          clientToken: S.String.pipe(T.IdempotencyToken()),
          description: S.optional(S.String),
          tags: S.optional(TagsMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/requester-gateway" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateRequesterGatewayRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ gatewayId: S.String, domainName: S.String, status: RequesterGatewayStatus }),
      ).annotate({
        identifier: "CreateRequesterGatewayResponse",
      });
    case 6:
      return S.Array(Protocol);
    case 7:
      return S.suspend(() => S.Struct({ protocols: ProtocolList })).annotate({
        identifier: "ListenerConfig",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SensitiveString);
    case 1:
      return S.suspend(() =>
        S.Struct({ certificateAuthorityCertificates: CertificateAuthorityCertificates }),
      ).annotate({ identifier: "TrustStoreConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          port: S.Number,
          path: S.String,
          protocol: S.optional(Protocol),
          timeoutMs: S.optional(S.Number),
          intervalSeconds: S.optional(S.Number),
          statusCodeMatcher: S.optional(S.String),
          healthyThresholdCount: S.optional(S.Number),
          unhealthyThresholdCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "HealthCheckConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          autoScalingGroupNames: AutoScalingGroupNameList,
          roleArn: S.String,
          healthCheckConfig: S.optional(HealthCheckConfig),
        }),
      ).annotate({
        identifier: "AutoScalingGroupsConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          endpointsResourceName: S.String,
          endpointsResourceNamespace: S.String,
          clusterApiServerEndpointUri: S.String,
          clusterApiServerCaCertificateChain: SensitiveString,
          clusterName: S.String,
          roleArn: S.String,
        }),
      ).annotate({
        identifier: "EksEndpointsConfiguration",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ autoScalingGroups: AutoScalingGroupsConfiguration }),
        /*@__PURE__*/ S.Struct({ eksEndpoints: EksEndpointsConfiguration }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          vpcId: S.String,
          subnetIds: SubnetIdList,
          securityGroupIds: SecurityGroupIdList,
          domainName: S.optional(S.String),
          port: S.Number,
          protocol: Protocol,
          listenerConfig: S.optional(ListenerConfig),
          trustStoreConfiguration: S.optional(TrustStoreConfiguration),
          managedEndpointConfiguration: S.optional(ManagedEndpointConfiguration),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          description: S.optional(S.String),
          tags: S.optional(TagsMap),
          gatewayType: S.optional(GatewayType),
          clientRoutingPolicy: S.optional(ClientRoutingPolicy),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/responder-gateway" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateResponderGatewayRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          status: ResponderGatewayStatus,
          listenerConfig: S.optional(ListenerConfig),
          externalInboundEndpoint: S.optional(S.String),
          clientRoutingPolicy: S.optional(ClientRoutingPolicy),
        }),
      ).annotate({
        identifier: "CreateResponderGatewayResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          linkId: S.String.pipe(T.HttpLabel("linkId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/responder-gateway/{gatewayId}/inbound-external-link/{linkId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteInboundExternalLinkRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ linkId: S.String, status: LinkStatus })).annotate({
        identifier: "DeleteInboundExternalLinkResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          linkId: S.String.pipe(T.HttpLabel("linkId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/gateway/{gatewayId}/link/{linkId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteLinkRequest" });
    case 3:
      return S.suspend(() => S.Struct({ linkId: S.String, status: LinkStatus })).annotate({
        identifier: "DeleteLinkResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          linkId: S.String.pipe(T.HttpLabel("linkId")),
          ruleId: S.String.pipe(T.HttpLabel("ruleId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/responder-gateway/{gatewayId}/link/{linkId}/routing-rule/{ruleId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteLinkRoutingRuleRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ ruleId: S.String, status: RuleStatus })).annotate({
        identifier: "DeleteLinkRoutingRuleResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          linkId: S.String.pipe(T.HttpLabel("linkId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/requester-gateway/{gatewayId}/outbound-external-link/{linkId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteOutboundExternalLinkRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ gatewayId: S.String.pipe(T.HttpLabel("gatewayId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/requester-gateway/{gatewayId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRequesterGatewayRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ gatewayId: S.String, status: RequesterGatewayStatus }),
      ).annotate({
        identifier: "DeleteRequesterGatewayResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ gatewayId: S.String.pipe(T.HttpLabel("gatewayId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/responder-gateway/{gatewayId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResponderGatewayRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          acmCertificateArn: S.String.pipe(T.HttpQuery("acmCertificateArn")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/responder-gateway/{gatewayId}/certificate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateCertificateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          acmCertificateArn: S.String.pipe(T.HttpQuery("acmCertificateArn")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/responder-gateway/{gatewayId}/certificate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCertificateAssociationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          acmCertificateArn: S.String,
          status: CertificateAssociationStatus,
          associatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "GetCertificateAssociationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          linkId: S.String.pipe(T.HttpLabel("linkId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/responder-gateway/{gatewayId}/inbound-external-link/{linkId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetInboundExternalLinkRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          linkId: S.String,
          status: LinkStatus,
          domainName: S.String,
          flowModules: S.optional(ModuleConfigurationList),
          pendingFlowModules: S.optional(ModuleConfigurationList),
          attributes: S.optional(LinkAttributes),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(TagsMap),
          logSettings: S.optional(LinkLogSettings),
          connectivityType: S.optional(ConnectivityType),
        }),
      ).annotate({
        identifier: "GetInboundExternalLinkResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          linkId: S.String.pipe(T.HttpLabel("linkId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/gateway/{gatewayId}/link/{linkId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetLinkRequest" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          peerGatewayId: S.String,
          status: LinkStatus,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          direction: S.optional(LinkDirection),
          flowModules: S.optional(ModuleConfigurationList),
          pendingFlowModules: S.optional(ModuleConfigurationList),
          attributes: S.optional(LinkAttributes),
          logSettings: S.optional(LinkLogSettings),
          connectivityType: S.optional(ConnectivityType),
          linkId: S.String,
          tags: S.optional(TagsMap),
          httpResponderAllowed: S.optional(S.Boolean),
          timeoutInMillis: S.optional(S.Number),
        }),
      ).annotate({ identifier: "GetLinkResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          linkId: S.String.pipe(T.HttpLabel("linkId")),
          ruleId: S.String.pipe(T.HttpLabel("ruleId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/responder-gateway/{gatewayId}/link/{linkId}/routing-rule/{ruleId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetLinkRoutingRuleRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          linkId: S.String,
          ruleId: S.String,
          priority: S.Number,
          conditions: RuleCondition,
          status: RuleStatus,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          tags: S.optional(TagsMap),
        }),
      ).annotate({
        identifier: "GetLinkRoutingRuleResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          linkId: S.String.pipe(T.HttpLabel("linkId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/requester-gateway/{gatewayId}/outbound-external-link/{linkId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetOutboundExternalLinkRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          linkId: S.String,
          status: LinkStatus,
          publicEndpoint: S.String,
          flowModules: S.optional(ModuleConfigurationList),
          pendingFlowModules: S.optional(ModuleConfigurationList),
          attributes: S.optional(LinkAttributes),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(TagsMap),
          logSettings: S.optional(LinkLogSettings),
          connectivityType: S.optional(ConnectivityType),
        }),
      ).annotate({
        identifier: "GetOutboundExternalLinkResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ gatewayId: S.String.pipe(T.HttpLabel("gatewayId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/requester-gateway/{gatewayId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRequesterGatewayRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          status: RequesterGatewayStatus,
          domainName: S.String,
          description: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          vpcId: S.String,
          subnetIds: SubnetIdList,
          securityGroupIds: SecurityGroupIdList,
          gatewayId: S.String,
          tags: S.optional(TagsMap),
          activeLinksCount: S.optional(S.Number),
          totalLinksCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "GetRequesterGatewayResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ gatewayId: S.String.pipe(T.HttpLabel("gatewayId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/responder-gateway/{gatewayId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetResponderGatewayRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          vpcId: S.String,
          subnetIds: SubnetIdList,
          securityGroupIds: SecurityGroupIdList,
          status: ResponderGatewayStatus,
          description: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          domainName: S.optional(S.String),
          port: S.Number,
          protocol: Protocol,
          listenerConfig: S.optional(ListenerConfig),
          trustStoreConfiguration: S.optional(TrustStoreConfiguration),
          managedEndpointConfiguration: S.optional(ManagedEndpointConfiguration),
          gatewayId: S.String,
          tags: S.optional(TagsMap),
          activeLinksCount: S.optional(S.Number),
          totalLinksCount: S.optional(S.Number),
          linksRequestedCount: S.optional(S.Number),
          gatewayType: S.optional(GatewayType),
          externalInboundEndpoint: S.optional(S.String),
          clientRoutingPolicy: S.optional(ClientRoutingPolicy),
        }),
      ).annotate({
        identifier: "GetResponderGatewayResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/responder-gateway/{gatewayId}/certificates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCertificateAssociationsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          acmCertificateArn: S.String,
          status: CertificateAssociationStatus,
          associatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "CertificateAssociationSummary",
      });
    case 3:
      return S.Array(CertificateAssociationSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          certificateAssociations: CertificateAssociationSummaryList,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCertificateAssociationsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          linkId: S.String.pipe(T.HttpLabel("linkId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/responder-gateway/{gatewayId}/link/{linkId}/routing-rules",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListLinkRoutingRulesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ruleId: S.String,
          priority: S.Number,
          conditions: RuleCondition,
          status: RuleStatus,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "LinkRoutingRuleSummary" });
    case 7:
      return S.Array(LinkRoutingRuleSummary);
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ rules: S.optional(LinkRoutingRuleList), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListLinkRoutingRulesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/gateway/{gatewayId}/links/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListLinksRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          peerGatewayId: S.String,
          status: LinkStatus,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          direction: S.optional(LinkDirection),
          flowModules: S.optional(ModuleConfigurationList),
          pendingFlowModules: S.optional(ModuleConfigurationList),
          attributes: S.optional(LinkAttributes),
          logSettings: S.optional(LinkLogSettings),
          connectivityType: S.optional(ConnectivityType),
          linkId: S.String,
          tags: S.optional(TagsMap),
          publicEndpoint: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListLinksResponseStructure",
      });
    case 3:
      return S.Array(ListLinksResponseStructure);
    case 4:
      return S.suspend(() =>
        S.Struct({ links: S.optional(LinkList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListLinksResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/requester-gateways" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRequesterGatewaysRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ gatewayIds: S.optional(GatewayIdList), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListRequesterGatewaysResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/responder-gateways" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResponderGatewaysRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
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
    case 1:
      return S.suspend(() => S.Struct({ tags: S.optional(TagsMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          linkId: S.String.pipe(T.HttpLabel("linkId")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/gateway/{gatewayId}/link/{linkId}/reject" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RejectLinkRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagsMap }).pipe(
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
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
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
    case 6:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          linkId: S.String.pipe(T.HttpLabel("linkId")),
          logSettings: S.optional(LinkLogSettings),
          timeoutInMillis: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/gateway/{gatewayId}/link/{linkId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateLinkRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.String.pipe(T.IdempotencyToken()),
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          linkId: S.String.pipe(T.HttpLabel("linkId")),
          modules: ModuleConfigurationList,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/gateway/{gatewayId}/link/{linkId}/module-flow" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateLinkModuleFlowRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          linkId: S.String.pipe(T.HttpLabel("linkId")),
          ruleId: S.String.pipe(T.HttpLabel("ruleId")),
          priority: S.Number,
          conditions: RuleCondition,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/responder-gateway/{gatewayId}/link/{linkId}/routing-rule/{ruleId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateLinkRoutingRuleRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ruleId: S.String,
          status: RuleStatus,
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "UpdateLinkRoutingRuleResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.String.pipe(T.IdempotencyToken()),
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/requester-gateway/{gatewayId}/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateRequesterGatewayRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainName: S.optional(S.String),
          port: S.Number,
          protocol: Protocol,
          listenerConfig: S.optional(ListenerConfig),
          trustStoreConfiguration: S.optional(TrustStoreConfiguration),
          managedEndpointConfiguration: S.optional(ManagedEndpointConfiguration),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          description: S.optional(S.String),
          clientRoutingPolicy: S.optional(ClientRoutingPolicy),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/responder-gateway/{gatewayId}/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateResponderGatewayRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          status: ResponderGatewayStatus,
          clientRoutingPolicy: S.optional(ClientRoutingPolicy),
        }),
      ).annotate({
        identifier: "UpdateResponderGatewayResponse",
      });
  }
}
