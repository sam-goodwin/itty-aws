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
export type ResponderErrorMaskingLoggingType = "NONE" | "METRIC" | "RESPONSE" | (string & {});
export type ResponderErrorMaskingLoggingTypes = ResponderErrorMaskingLoggingType[];
export interface ResponderErrorMaskingForHttpCode {
  httpCode: string;
  action: ResponderErrorMaskingAction;
  loggingTypes: ResponderErrorMaskingLoggingType[];
  responseLoggingPercentage?: number;
}
export type ResponderErrorMasking = ResponderErrorMaskingForHttpCode[];
export type CustomerProvidedId = string;
export interface LinkAttributes {
  responderErrorMasking?: ResponderErrorMaskingForHttpCode[];
  customerProvidedId?: string;
}
export interface LinkApplicationLogSampling {
  errorLog: number;
  filterLog: number;
}
export interface LinkApplicationLogConfiguration {
  sampling: LinkApplicationLogSampling;
}
export interface LinkLogSettings {
  applicationLogs: LinkApplicationLogConfiguration;
}
export type LinkTimeoutInMillis = number;
export interface AcceptLinkRequest {
  gatewayId: string;
  linkId: string;
  attributes?: LinkAttributes;
  logSettings: LinkLogSettings;
  timeoutInMillis?: number;
}
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
export type LinkDirection = "RESPONSE" | "REQUEST" | (string & {});
export type Version = string;
export type FlowModuleName = string;
export type FlowModuleNameList = string[];
export interface NoBidModuleParameters {
  reason?: string;
  reasonCode?: number;
  passThroughPercentage?: number;
}
export type FilterType = "INCLUDE" | "EXCLUDE" | (string & {});
export type ValueList = string[];
export interface FilterCriterion {
  path: string;
  values: string[];
}
export type FilterCriteria = FilterCriterion[];
export interface Filter {
  criteria: FilterCriterion[];
}
export type FilterConfiguration = Filter[];
export interface NoBidAction {
  noBidReasonCode?: number;
}
export interface HeaderTagAction {
  name: string;
  value: string;
}
export type Action =
  | { noBid: NoBidAction; headerTag?: never }
  | { noBid?: never; headerTag: HeaderTagAction };
export interface OpenRtbAttributeModuleParameters {
  filterType: FilterType;
  filterConfiguration: Filter[];
  action: Action;
  holdbackPercentage: number;
}
export interface RateLimiterModuleParameters {
  tps?: number;
}
export type ModuleParameters =
  | { noBid: NoBidModuleParameters; openRtbAttribute?: never; rateLimiter?: never }
  | { noBid?: never; openRtbAttribute: OpenRtbAttributeModuleParameters; rateLimiter?: never }
  | { noBid?: never; openRtbAttribute?: never; rateLimiter: RateLimiterModuleParameters };
export interface ModuleConfiguration {
  version?: string;
  name: string;
  dependsOn?: string[];
  moduleParameters?: ModuleParameters;
}
export type ModuleConfigurationList = ModuleConfiguration[];
export type ConnectivityType =
  | "DEFAULT"
  | "PUBLIC_INGRESS"
  | "PUBLIC_EGRESS"
  | "EXTERNAL_INBOUND"
  | (string & {});
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
export type AcmCertificateArn = string;
export interface AssociateCertificateRequest {
  gatewayId: string;
  acmCertificateArn: string;
  clientToken: string;
}
export type CertificateAssociationStatus =
  | "PENDING_ASSOCIATION"
  | "ASSOCIATED"
  | "PENDING_DISASSOCIATION"
  | "DISASSOCIATED"
  | "FAILED"
  | (string & {});
export interface AssociateCertificateResponse {
  gatewayId: string;
  acmCertificateArn: string;
  status: CertificateAssociationStatus;
}
export type TagKey = string;
export type TagValue = string;
export type TagsMap = { [key: string]: string | undefined };
export interface CreateInboundExternalLinkRequest {
  clientToken: string;
  gatewayId: string;
  attributes?: LinkAttributes;
  logSettings: LinkLogSettings;
  tags?: { [key: string]: string | undefined };
}
export type DomainName = string;
export interface CreateInboundExternalLinkResponse {
  gatewayId: string;
  linkId: string;
  status: LinkStatus;
  domainName: string;
}
export interface CreateLinkRequest {
  gatewayId: string;
  peerGatewayId: string;
  attributes?: LinkAttributes;
  httpResponderAllowed?: boolean;
  tags?: { [key: string]: string | undefined };
  logSettings: LinkLogSettings;
  timeoutInMillis?: number;
}
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
export type RulePriority = number;
export interface QueryStringKeyValuePair {
  key: string;
  value: string;
}
export interface RuleCondition {
  hostHeader?: string;
  hostHeaderWildcard?: string;
  pathPrefix?: string;
  pathExact?: string;
  queryStringEquals?: QueryStringKeyValuePair;
  queryStringExists?: string;
}
export interface CreateLinkRoutingRuleRequest {
  clientToken: string;
  gatewayId: string;
  linkId: string;
  priority: number;
  conditions: RuleCondition;
  tags?: { [key: string]: string | undefined };
}
export type RuleId = string;
export type RuleStatus =
  | "CREATION_IN_PROGRESS"
  | "ACTIVE"
  | "UPDATE_IN_PROGRESS"
  | "DELETION_IN_PROGRESS"
  | "DELETED"
  | "FAILED"
  | (string & {});
export interface CreateLinkRoutingRuleResponse {
  ruleId: string;
  status: RuleStatus;
  createdAt: Date;
}
export type URL = string;
export interface CreateOutboundExternalLinkRequest {
  clientToken: string;
  gatewayId: string;
  attributes?: LinkAttributes;
  publicEndpoint: string;
  logSettings: LinkLogSettings;
  tags?: { [key: string]: string | undefined };
}
export interface CreateOutboundExternalLinkResponse {
  gatewayId: string;
  linkId: string;
  status: LinkStatus;
}
export type VpcId = string;
export type SubnetId = string;
export type SubnetIdList = string[];
export type SecurityGroupId = string;
export type SecurityGroupIdList = string[];
export interface CreateRequesterGatewayRequest {
  vpcId: string;
  subnetIds: string[];
  securityGroupIds: string[];
  clientToken: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
}
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
export interface CreateRequesterGatewayResponse {
  gatewayId: string;
  domainName: string;
  status: RequesterGatewayStatus;
}
export type Protocol = "HTTP" | "HTTPS" | (string & {});
export type ProtocolList = Protocol[];
export interface ListenerConfig {
  protocols: Protocol[];
}
export type Base64EncodedCertificateChain = string | redacted.Redacted<string>;
export type CertificateAuthorityCertificates = (string | redacted.Redacted<string>)[];
export interface TrustStoreConfiguration {
  certificateAuthorityCertificates: (string | redacted.Redacted<string>)[];
}
export type AutoScalingGroupName = string;
export type AutoScalingGroupNameList = string[];
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
export interface AutoScalingGroupsConfiguration {
  autoScalingGroupNames: string[];
  roleArn: string;
  healthCheckConfig?: HealthCheckConfig;
}
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
export type ManagedEndpointConfiguration =
  | { autoScalingGroups: AutoScalingGroupsConfiguration; eksEndpoints?: never }
  | { autoScalingGroups?: never; eksEndpoints: EksEndpointsConfiguration };
export type GatewayType = "EXTERNAL" | "INTERNAL" | (string & {});
export type ClientRoutingPolicy =
  | "AVAILABILITY_ZONE_AFFINITY"
  | "ANY_AVAILABILITY_ZONE"
  | (string & {});
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
export interface CreateResponderGatewayResponse {
  gatewayId: string;
  status: ResponderGatewayStatus;
  listenerConfig?: ListenerConfig;
  externalInboundEndpoint?: string;
  clientRoutingPolicy?: ClientRoutingPolicy;
}
export interface DeleteInboundExternalLinkRequest {
  gatewayId: string;
  linkId: string;
}
export interface DeleteInboundExternalLinkResponse {
  linkId: string;
  status: LinkStatus;
}
export interface DeleteLinkRequest {
  gatewayId: string;
  linkId: string;
}
export interface DeleteLinkResponse {
  linkId: string;
  status: LinkStatus;
}
export interface DeleteLinkRoutingRuleRequest {
  gatewayId: string;
  linkId: string;
  ruleId: string;
}
export interface DeleteLinkRoutingRuleResponse {
  ruleId: string;
  status: RuleStatus;
}
export interface DeleteOutboundExternalLinkRequest {
  gatewayId: string;
  linkId: string;
}
export interface DeleteOutboundExternalLinkResponse {
  linkId: string;
  status: LinkStatus;
}
export interface DeleteRequesterGatewayRequest {
  gatewayId: string;
}
export interface DeleteRequesterGatewayResponse {
  gatewayId: string;
  status: RequesterGatewayStatus;
}
export interface DeleteResponderGatewayRequest {
  gatewayId: string;
}
export interface DeleteResponderGatewayResponse {
  gatewayId: string;
  status: ResponderGatewayStatus;
}
export interface DisassociateCertificateRequest {
  gatewayId: string;
  acmCertificateArn: string;
}
export interface DisassociateCertificateResponse {
  gatewayId: string;
  acmCertificateArn: string;
  status: CertificateAssociationStatus;
}
export interface GetCertificateAssociationRequest {
  gatewayId: string;
  acmCertificateArn: string;
}
export interface GetCertificateAssociationResponse {
  gatewayId: string;
  acmCertificateArn: string;
  status: CertificateAssociationStatus;
  associatedAt?: Date;
  updatedAt?: Date;
}
export interface GetInboundExternalLinkRequest {
  gatewayId: string;
  linkId: string;
}
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
export interface GetLinkRequest {
  gatewayId: string;
  linkId: string;
}
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
export interface GetLinkRoutingRuleRequest {
  gatewayId: string;
  linkId: string;
  ruleId: string;
}
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
export interface GetOutboundExternalLinkRequest {
  gatewayId: string;
  linkId: string;
}
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
export interface GetRequesterGatewayRequest {
  gatewayId: string;
}
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
export interface GetResponderGatewayRequest {
  gatewayId: string;
}
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
export interface ListCertificateAssociationsRequest {
  gatewayId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface CertificateAssociationSummary {
  acmCertificateArn: string;
  status: CertificateAssociationStatus;
  associatedAt?: Date;
  updatedAt?: Date;
}
export type CertificateAssociationSummaryList = CertificateAssociationSummary[];
export interface ListCertificateAssociationsResponse {
  certificateAssociations: CertificateAssociationSummary[];
  nextToken?: string;
}
export interface ListLinkRoutingRulesRequest {
  gatewayId: string;
  linkId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface LinkRoutingRuleSummary {
  ruleId: string;
  priority: number;
  conditions: RuleCondition;
  status: RuleStatus;
  createdAt: Date;
  updatedAt: Date;
}
export type LinkRoutingRuleList = LinkRoutingRuleSummary[];
export interface ListLinkRoutingRulesResponse {
  rules?: LinkRoutingRuleSummary[];
  nextToken?: string;
}
export interface ListLinksRequest {
  gatewayId: string;
  nextToken?: string;
  maxResults?: number;
}
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
export type LinkList = ListLinksResponseStructure[];
export interface ListLinksResponse {
  links?: ListLinksResponseStructure[];
  nextToken?: string;
}
export interface ListRequesterGatewaysRequest {
  maxResults?: number;
  nextToken?: string;
}
export type GatewayIdList = string[];
export interface ListRequesterGatewaysResponse {
  gatewayIds?: string[];
  nextToken?: string;
}
export interface ListResponderGatewaysRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListResponderGatewaysResponse {
  gatewayIds?: string[];
  nextToken?: string;
}
export type RtbTaggableResourceArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface RejectLinkRequest {
  gatewayId: string;
  linkId: string;
}
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
export interface UpdateLinkRequest {
  gatewayId: string;
  linkId: string;
  logSettings?: LinkLogSettings;
  timeoutInMillis?: number;
}
export interface UpdateLinkResponse {
  linkId: string;
  status: LinkStatus;
}
export interface UpdateLinkModuleFlowRequest {
  clientToken: string;
  gatewayId: string;
  linkId: string;
  modules: ModuleConfiguration[];
}
export interface UpdateLinkModuleFlowResponse {
  gatewayId: string;
  linkId: string;
  status: LinkStatus;
}
export interface UpdateLinkRoutingRuleRequest {
  gatewayId: string;
  linkId: string;
  ruleId: string;
  priority: number;
  conditions: RuleCondition;
}
export interface UpdateLinkRoutingRuleResponse {
  ruleId: string;
  status: RuleStatus;
  updatedAt: Date;
}
export interface UpdateRequesterGatewayRequest {
  clientToken: string;
  gatewayId: string;
  description?: string;
}
export interface UpdateRequesterGatewayResponse {
  gatewayId: string;
  status: RequesterGatewayStatus;
}
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
export interface UpdateResponderGatewayResponse {
  gatewayId: string;
  status: ResponderGatewayStatus;
  clientRoutingPolicy?: ClientRoutingPolicy;
}
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
  input: __S(7) as any as S.Schema<AcceptLinkRequest>,
  output: __S(22) as any as S.Schema<AcceptLinkResponse>,
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
  input: __S(23) as any as S.Schema<AssociateCertificateRequest>,
  output: __S(24) as any as S.Schema<AssociateCertificateResponse>,
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
  input: __S(26) as any as S.Schema<CreateInboundExternalLinkRequest>,
  output: __S(27) as any as S.Schema<CreateInboundExternalLinkResponse>,
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
  input: __S(28) as any as S.Schema<CreateLinkRequest>,
  output: __S(29) as any as S.Schema<CreateLinkResponse>,
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
  input: __S(32) as any as S.Schema<CreateLinkRoutingRuleRequest>,
  output: __S(33) as any as S.Schema<CreateLinkRoutingRuleResponse>,
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
  input: __S(34) as any as S.Schema<CreateOutboundExternalLinkRequest>,
  output: __S(35) as any as S.Schema<CreateOutboundExternalLinkResponse>,
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
  input: __S(36) as any as S.Schema<CreateRequesterGatewayRequest>,
  output: __S(37) as any as S.Schema<CreateRequesterGatewayResponse>,
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
  input: __S(46) as any as S.Schema<CreateResponderGatewayRequest>,
  output: __S(47) as any as S.Schema<CreateResponderGatewayResponse>,
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
  input: __S(48) as any as S.Schema<DeleteInboundExternalLinkRequest>,
  output: __S(49) as any as S.Schema<DeleteInboundExternalLinkResponse>,
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
  input: __S(50) as any as S.Schema<DeleteLinkRequest>,
  output: __S(51) as any as S.Schema<DeleteLinkResponse>,
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
  input: __S(52) as any as S.Schema<DeleteLinkRoutingRuleRequest>,
  output: __S(53) as any as S.Schema<DeleteLinkRoutingRuleResponse>,
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
  input: __S(54) as any as S.Schema<DeleteOutboundExternalLinkRequest>,
  output: __S(49) as any as S.Schema<DeleteOutboundExternalLinkResponse>,
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
  input: __S(55) as any as S.Schema<DeleteRequesterGatewayRequest>,
  output: __S(56) as any as S.Schema<DeleteRequesterGatewayResponse>,
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
  input: __S(57) as any as S.Schema<DeleteResponderGatewayRequest>,
  output: __S(56) as any as S.Schema<DeleteResponderGatewayResponse>,
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
  input: __S(58) as any as S.Schema<DisassociateCertificateRequest>,
  output: __S(24) as any as S.Schema<DisassociateCertificateResponse>,
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
  input: __S(59) as any as S.Schema<GetCertificateAssociationRequest>,
  output: __S(60) as any as S.Schema<GetCertificateAssociationResponse>,
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
  input: __S(61) as any as S.Schema<GetInboundExternalLinkRequest>,
  output: __S(62) as any as S.Schema<GetInboundExternalLinkResponse>,
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
  input: __S(63) as any as S.Schema<GetLinkRequest>,
  output: __S(64) as any as S.Schema<GetLinkResponse>,
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
  input: __S(65) as any as S.Schema<GetLinkRoutingRuleRequest>,
  output: __S(66) as any as S.Schema<GetLinkRoutingRuleResponse>,
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
  input: __S(67) as any as S.Schema<GetOutboundExternalLinkRequest>,
  output: __S(68) as any as S.Schema<GetOutboundExternalLinkResponse>,
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
  input: __S(69) as any as S.Schema<GetRequesterGatewayRequest>,
  output: __S(70) as any as S.Schema<GetRequesterGatewayResponse>,
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
  input: __S(71) as any as S.Schema<GetResponderGatewayRequest>,
  output: __S(72) as any as S.Schema<GetResponderGatewayResponse>,
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
  input: __S(73) as any as S.Schema<ListCertificateAssociationsRequest>,
  output: __S(76) as any as S.Schema<ListCertificateAssociationsResponse>,
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
  input: __S(77) as any as S.Schema<ListLinkRoutingRulesRequest>,
  output: __S(80) as any as S.Schema<ListLinkRoutingRulesResponse>,
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
  input: __S(81) as any as S.Schema<ListLinksRequest>,
  output: __S(84) as any as S.Schema<ListLinksResponse>,
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
  input: __S(85) as any as S.Schema<ListRequesterGatewaysRequest>,
  output: __S(86) as any as S.Schema<ListRequesterGatewaysResponse>,
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
  input: __S(87) as any as S.Schema<ListResponderGatewaysRequest>,
  output: __S(86) as any as S.Schema<ListResponderGatewaysResponse>,
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
  input: __S(88) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(89) as any as S.Schema<ListTagsForResourceResponse>,
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
  input: __S(90) as any as S.Schema<RejectLinkRequest>,
  output: __S(22) as any as S.Schema<RejectLinkResponse>,
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
  input: __S(91) as any as S.Schema<TagResourceRequest>,
  output: __S(92) as any as S.Schema<TagResourceResponse>,
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
  input: __S(93) as any as S.Schema<UntagResourceRequest>,
  output: __S(92) as any as S.Schema<UntagResourceResponse>,
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
  input: __S(94) as any as S.Schema<UpdateLinkRequest>,
  output: __S(51) as any as S.Schema<UpdateLinkResponse>,
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
  input: __S(95) as any as S.Schema<UpdateLinkModuleFlowRequest>,
  output: __S(35) as any as S.Schema<UpdateLinkModuleFlowResponse>,
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
  input: __S(96) as any as S.Schema<UpdateLinkRoutingRuleRequest>,
  output: __S(97) as any as S.Schema<UpdateLinkRoutingRuleResponse>,
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
  input: __S(98) as any as S.Schema<UpdateRequesterGatewayRequest>,
  output: __S(56) as any as S.Schema<UpdateRequesterGatewayResponse>,
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
  input: __S(99) as any as S.Schema<UpdateResponderGatewayRequest>,
  output: __S(100) as any as S.Schema<UpdateResponderGatewayResponse>,
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
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          httpCode: S.String,
          action: S.String,
          loggingTypes: __S(0),
          responseLoggingPercentage: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ResponderErrorMaskingForHttpCode",
      });
    case 2:
      return S.Array(__S(1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          responderErrorMasking: S.optional(__S(2)),
          customerProvidedId: S.optional(S.String),
        }),
      ).annotate({ identifier: "LinkAttributes" });
    case 4:
      return S.suspend(() => S.Struct({ errorLog: S.Number, filterLog: S.Number })).annotate({
        identifier: "LinkApplicationLogSampling",
      });
    case 5:
      return S.suspend(() => S.Struct({ sampling: __S(4) })).annotate({
        identifier: "LinkApplicationLogConfiguration",
      });
    case 6:
      return S.suspend(() => S.Struct({ applicationLogs: __S(5) })).annotate({
        identifier: "LinkLogSettings",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          linkId: S.String.pipe(T.HttpLabel("linkId")),
          attributes: S.optional(__S(3)),
          logSettings: __S(6),
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
      return S.suspend(() => S.Struct({ path: S.String, values: __S(8) })).annotate({
        identifier: "FilterCriterion",
      });
    case 3:
      return S.Array(__S(10));
    case 4:
      return S.suspend(() => S.Struct({ criteria: __S(11) })).annotate({
        identifier: "Filter",
      });
    case 5:
      return S.Array(__S(12));
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
        /*@__PURE__*/ S.Struct({ noBid: __S(14) }),
        /*@__PURE__*/ S.Struct({ headerTag: __S(15) }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          filterType: S.String,
          filterConfiguration: __S(13),
          action: __S(16),
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
        /*@__PURE__*/ S.Struct({ noBid: __S(9) }),
        /*@__PURE__*/ S.Struct({ openRtbAttribute: __S(17) }),
        /*@__PURE__*/ S.Struct({ rateLimiter: __S(18) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          version: S.optional(S.String),
          name: S.String,
          dependsOn: S.optional(__S(8)),
          moduleParameters: S.optional(__S(19)),
        }),
      ).annotate({ identifier: "ModuleConfiguration" });
    case 5:
      return S.Array(__S(20));
    case 6:
      return S.suspend(() =>
        S.Struct({
          gatewayId: S.String,
          peerGatewayId: S.String,
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          direction: S.optional(S.String),
          flowModules: S.optional(__S(21)),
          pendingFlowModules: S.optional(__S(21)),
          attributes: S.optional(__S(3)),
          logSettings: S.optional(__S(6)),
          connectivityType: S.optional(S.String),
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
          status: S.String,
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
          attributes: S.optional(__S(3)),
          logSettings: __S(6),
          tags: S.optional(__S(25)),
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
          status: S.String,
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
          attributes: S.optional(__S(3)),
          httpResponderAllowed: S.optional(S.Boolean),
          tags: S.optional(__S(25)),
          logSettings: __S(6),
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
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          direction: S.optional(S.String),
          flowModules: S.optional(__S(21)),
          pendingFlowModules: S.optional(__S(21)),
          attributes: S.optional(__S(3)),
          logSettings: S.optional(__S(6)),
          connectivityType: S.optional(S.String),
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
          queryStringEquals: S.optional(__S(30)),
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
          conditions: __S(31),
          tags: S.optional(__S(25)),
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
          status: S.String,
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
          attributes: S.optional(__S(3)),
          publicEndpoint: S.String,
          logSettings: __S(6),
          tags: S.optional(__S(25)),
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
        S.Struct({ gatewayId: S.String, linkId: S.String, status: S.String }),
      ).annotate({
        identifier: "CreateOutboundExternalLinkResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          vpcId: S.String,
          subnetIds: __S(8),
          securityGroupIds: __S(8),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          description: S.optional(S.String),
          tags: S.optional(__S(25)),
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
        S.Struct({ gatewayId: S.String, domainName: S.String, status: S.String }),
      ).annotate({
        identifier: "CreateRequesterGatewayResponse",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() => S.Struct({ protocols: __S(38) })).annotate({
        identifier: "ListenerConfig",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SensitiveString);
    case 1:
      return S.suspend(() => S.Struct({ certificateAuthorityCertificates: __S(40) })).annotate({
        identifier: "TrustStoreConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          port: S.Number,
          path: S.String,
          protocol: S.optional(S.String),
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
          autoScalingGroupNames: __S(8),
          roleArn: S.String,
          healthCheckConfig: S.optional(__S(42)),
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
        /*@__PURE__*/ S.Struct({ autoScalingGroups: __S(43) }),
        /*@__PURE__*/ S.Struct({ eksEndpoints: __S(44) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          vpcId: S.String,
          subnetIds: __S(8),
          securityGroupIds: __S(8),
          domainName: S.optional(S.String),
          port: S.Number,
          protocol: S.String,
          listenerConfig: S.optional(__S(39)),
          trustStoreConfiguration: S.optional(__S(41)),
          managedEndpointConfiguration: S.optional(__S(45)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          description: S.optional(S.String),
          tags: S.optional(__S(25)),
          gatewayType: S.optional(S.String),
          clientRoutingPolicy: S.optional(S.String),
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
          status: S.String,
          listenerConfig: S.optional(__S(39)),
          externalInboundEndpoint: S.optional(S.String),
          clientRoutingPolicy: S.optional(S.String),
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
      return S.suspend(() => S.Struct({ linkId: S.String, status: S.String })).annotate({
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
      return S.suspend(() => S.Struct({ linkId: S.String, status: S.String })).annotate({
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
      return S.suspend(() => S.Struct({ ruleId: S.String, status: S.String })).annotate({
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
      return S.suspend(() => S.Struct({ gatewayId: S.String, status: S.String })).annotate({
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
          status: S.String,
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
          status: S.String,
          domainName: S.String,
          flowModules: S.optional(__S(21)),
          pendingFlowModules: S.optional(__S(21)),
          attributes: S.optional(__S(3)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(25)),
          logSettings: S.optional(__S(6)),
          connectivityType: S.optional(S.String),
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
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          direction: S.optional(S.String),
          flowModules: S.optional(__S(21)),
          pendingFlowModules: S.optional(__S(21)),
          attributes: S.optional(__S(3)),
          logSettings: S.optional(__S(6)),
          connectivityType: S.optional(S.String),
          linkId: S.String,
          tags: S.optional(__S(25)),
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
          conditions: __S(31),
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          tags: S.optional(__S(25)),
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
          status: S.String,
          publicEndpoint: S.String,
          flowModules: S.optional(__S(21)),
          pendingFlowModules: S.optional(__S(21)),
          attributes: S.optional(__S(3)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(25)),
          logSettings: S.optional(__S(6)),
          connectivityType: S.optional(S.String),
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
          status: S.String,
          domainName: S.String,
          description: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          vpcId: S.String,
          subnetIds: __S(8),
          securityGroupIds: __S(8),
          gatewayId: S.String,
          tags: S.optional(__S(25)),
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
          subnetIds: __S(8),
          securityGroupIds: __S(8),
          status: S.String,
          description: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          domainName: S.optional(S.String),
          port: S.Number,
          protocol: S.String,
          listenerConfig: S.optional(__S(39)),
          trustStoreConfiguration: S.optional(__S(41)),
          managedEndpointConfiguration: S.optional(__S(45)),
          gatewayId: S.String,
          tags: S.optional(__S(25)),
          activeLinksCount: S.optional(S.Number),
          totalLinksCount: S.optional(S.Number),
          linksRequestedCount: S.optional(S.Number),
          gatewayType: S.optional(S.String),
          externalInboundEndpoint: S.optional(S.String),
          clientRoutingPolicy: S.optional(S.String),
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
          status: S.String,
          associatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "CertificateAssociationSummary",
      });
    case 3:
      return S.Array(__S(74));
    case 4:
      return S.suspend(() =>
        S.Struct({
          certificateAssociations: __S(75),
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
          conditions: __S(31),
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "LinkRoutingRuleSummary" });
    case 7:
      return S.Array(__S(78));
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ rules: S.optional(__S(79)), nextToken: S.optional(S.String) }),
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
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          direction: S.optional(S.String),
          flowModules: S.optional(__S(21)),
          pendingFlowModules: S.optional(__S(21)),
          attributes: S.optional(__S(3)),
          logSettings: S.optional(__S(6)),
          connectivityType: S.optional(S.String),
          linkId: S.String,
          tags: S.optional(__S(25)),
          publicEndpoint: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListLinksResponseStructure",
      });
    case 3:
      return S.Array(__S(82));
    case 4:
      return S.suspend(() =>
        S.Struct({ links: S.optional(__S(83)), nextToken: S.optional(S.String) }),
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
        S.Struct({ gatewayIds: S.optional(__S(8)), nextToken: S.optional(S.String) }),
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
      return S.suspend(() => S.Struct({ tags: S.optional(__S(25)) })).annotate({
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
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: __S(25) }).pipe(
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
          tagKeys: __S(8).pipe(T.HttpQuery("tagKeys")),
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
          logSettings: S.optional(__S(6)),
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
          modules: __S(21),
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
          conditions: __S(31),
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
          status: S.String,
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
          protocol: S.String,
          listenerConfig: S.optional(__S(39)),
          trustStoreConfiguration: S.optional(__S(41)),
          managedEndpointConfiguration: S.optional(__S(45)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          gatewayId: S.String.pipe(T.HttpLabel("gatewayId")),
          description: S.optional(S.String),
          clientRoutingPolicy: S.optional(S.String),
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
          status: S.String,
          clientRoutingPolicy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateResponderGatewayResponse",
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
  }
}
