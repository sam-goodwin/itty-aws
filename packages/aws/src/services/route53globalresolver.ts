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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Route53GlobalResolver",
  serviceShapeName: "EC2DNSGlobalResolverCustomerAPI",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "route53globalresolver" });
const ver = /*@__PURE__*/ T.ServiceVersion("2022-09-27");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
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
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true) {
          return e(
            `https://route53globalresolver-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://route53globalresolver.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
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
      resourceId: /*@__PURE__*/ S.optional(S.String),
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
      resourceId: /*@__PURE__*/ S.optional(S.String),
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
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
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
      reason: /*@__PURE__*/ S.suspend(() => ValidationExceptionReason).annotate({
        identifier: "ValidationExceptionReason",
      }),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type HostedZoneId = string;
export type ResourceArn = string;
export type ResourceName = string;
export interface AssociateHostedZoneInput {
  hostedZoneId: string;
  resourceArn: string;
  name: string;
}
const AssociateHostedZoneInput = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AssociateHostedZoneInput>;
export type ResourceId = string;
export type HostedZoneName = string;
export type ISO8601TimeString = Date;
export type HostedZoneAssociationStatus = "CREATING" | "OPERATIONAL" | "DELETING" | (string & {});
const HostedZoneAssociationStatus = S.String;

export interface AssociateHostedZoneOutput {
  id: string;
  resourceArn: string;
  hostedZoneId: string;
  hostedZoneName: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  status: HostedZoneAssociationStatus;
}
const AssociateHostedZoneOutput = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AssociateHostedZoneOutput>;
export type FirewallRuleAction = "ALLOW" | "ALERT" | "BLOCK" | (string & {});
const FirewallRuleAction = S.String;

export type BlockOverrideDnsQueryType = "CNAME" | (string & {});
const BlockOverrideDnsQueryType = S.String;

export type Domain = string;
export type BlockOverrideTtl = number;
export type FirewallBlockResponse = "NODATA" | "NXDOMAIN" | "OVERRIDE" | (string & {});
const FirewallBlockResponse = S.String;

export type ClientToken = string;
export type ConfidenceThreshold = "LOW" | "MEDIUM" | "HIGH" | (string & {});
const ConfidenceThreshold = S.String;

export type ResourceDescription = string;
export type DnsAdvancedProtection = "DGA" | "DNS_TUNNELING" | "DICTIONARY_DGA" | (string & {});
const DnsAdvancedProtection = S.String;

export type FirewallRulePriority = number;
export type DnsQueryType = string;
export interface BatchCreateFirewallRuleInputItem {
  action: FirewallRuleAction;
  blockOverrideDnsType?: BlockOverrideDnsQueryType;
  blockOverrideDomain?: string;
  blockOverrideTtl?: number;
  blockResponse?: FirewallBlockResponse;
  clientToken: string;
  confidenceThreshold?: ConfidenceThreshold;
  description?: string;
  dnsAdvancedProtection?: DnsAdvancedProtection;
  firewallDomainListId?: string;
  name: string;
  priority?: number;
  dnsViewId: string;
  qType?: string;
}
const BatchCreateFirewallRuleInputItem = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<BatchCreateFirewallRuleInputItem>;
export type BatchCreateFirewallRuleInputItems = BatchCreateFirewallRuleInputItem[];
const BatchCreateFirewallRuleInputItems = /*@__PURE__*/ __L.at(__c0, 3);
export interface BatchCreateFirewallRuleInput {
  firewallRules: BatchCreateFirewallRuleInputItem[];
}
const BatchCreateFirewallRuleInput = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<BatchCreateFirewallRuleInput>;
export type CRResourceStatus = "CREATING" | "OPERATIONAL" | "UPDATING" | "DELETING" | (string & {});
const CRResourceStatus = S.String;

export interface BatchCreateFirewallRuleResult {
  action: FirewallRuleAction;
  blockOverrideDnsType?: BlockOverrideDnsQueryType;
  blockOverrideDomain?: string;
  blockOverrideTtl?: number;
  blockResponse?: FirewallBlockResponse;
  clientToken: string;
  confidenceThreshold?: ConfidenceThreshold;
  createdAt?: Date;
  description?: string;
  dnsAdvancedProtection?: DnsAdvancedProtection;
  firewallDomainListId?: string;
  id?: string;
  managedDomainListName?: string;
  name: string;
  priority?: number;
  dnsViewId: string;
  queryType?: string;
  status?: CRResourceStatus;
  updatedAt?: Date;
}
const BatchCreateFirewallRuleResult = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<BatchCreateFirewallRuleResult>;
export interface BatchCreateFirewallRuleOutputItem {
  firewallRule: BatchCreateFirewallRuleResult;
  code: number;
  message?: string;
}
const BatchCreateFirewallRuleOutputItem = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<BatchCreateFirewallRuleOutputItem>;
export type BatchCreateFirewallRuleOutputItems = BatchCreateFirewallRuleOutputItem[];
const BatchCreateFirewallRuleOutputItems = /*@__PURE__*/ __L.at(__c0, 7);
export interface BatchCreateFirewallRuleOutput {
  failures: BatchCreateFirewallRuleOutputItem[];
  successes: BatchCreateFirewallRuleOutputItem[];
}
const BatchCreateFirewallRuleOutput = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<BatchCreateFirewallRuleOutput>;
export interface BatchDeleteFirewallRuleInputItem {
  firewallRuleId: string;
}
const BatchDeleteFirewallRuleInputItem = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<BatchDeleteFirewallRuleInputItem>;
export type BatchDeleteFirewallRuleInputItems = BatchDeleteFirewallRuleInputItem[];
const BatchDeleteFirewallRuleInputItems = /*@__PURE__*/ __L.at(__c1, 2);
export interface BatchDeleteFirewallRuleInput {
  firewallRules: BatchDeleteFirewallRuleInputItem[];
}
const BatchDeleteFirewallRuleInput = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<BatchDeleteFirewallRuleInput>;
export interface BatchDeleteFirewallRuleResult {
  clientToken?: string;
  id: string;
  name?: string;
  status?: CRResourceStatus;
}
const BatchDeleteFirewallRuleResult = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<BatchDeleteFirewallRuleResult>;
export interface BatchDeleteFirewallRuleOutputItem {
  firewallRule: BatchDeleteFirewallRuleResult;
  code: number;
  message?: string;
}
const BatchDeleteFirewallRuleOutputItem = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<BatchDeleteFirewallRuleOutputItem>;
export type BatchDeleteFirewallRuleOutputItems = BatchDeleteFirewallRuleOutputItem[];
const BatchDeleteFirewallRuleOutputItems = /*@__PURE__*/ __L.at(__c1, 6);
export interface BatchDeleteFirewallRuleOutput {
  failures: BatchDeleteFirewallRuleOutputItem[];
  successes: BatchDeleteFirewallRuleOutputItem[];
}
const BatchDeleteFirewallRuleOutput = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<BatchDeleteFirewallRuleOutput>;
export interface BatchUpdateFirewallRuleInputItem {
  action?: FirewallRuleAction;
  blockOverrideDnsType?: BlockOverrideDnsQueryType;
  blockOverrideDomain?: string;
  blockOverrideTtl?: number;
  blockResponse?: FirewallBlockResponse;
  confidenceThreshold?: ConfidenceThreshold;
  description?: string;
  dnsAdvancedProtection?: DnsAdvancedProtection;
  firewallRuleId: string;
  name?: string;
  priority?: number;
}
const BatchUpdateFirewallRuleInputItem = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<BatchUpdateFirewallRuleInputItem>;
export type BatchUpdateFirewallRuleInputItems = BatchUpdateFirewallRuleInputItem[];
const BatchUpdateFirewallRuleInputItems = /*@__PURE__*/ __L.at(__c2, 1);
export interface BatchUpdateFirewallRuleInput {
  firewallRules: BatchUpdateFirewallRuleInputItem[];
}
const BatchUpdateFirewallRuleInput = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<BatchUpdateFirewallRuleInput>;
export interface BatchUpdateFirewallRuleResult {
  action?: FirewallRuleAction;
  blockOverrideDnsType?: BlockOverrideDnsQueryType;
  blockOverrideDomain?: string;
  blockOverrideTtl?: number;
  blockResponse?: FirewallBlockResponse;
  clientToken?: string;
  confidenceThreshold?: ConfidenceThreshold;
  createdAt?: Date;
  description?: string;
  dnsAdvancedProtection?: DnsAdvancedProtection;
  firewallDomainListId?: string;
  id: string;
  name?: string;
  priority?: number;
  dnsViewId?: string;
  queryType?: string;
  status?: CRResourceStatus;
  updatedAt?: Date;
}
const BatchUpdateFirewallRuleResult = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<BatchUpdateFirewallRuleResult>;
export interface BatchUpdateFirewallRuleOutputItem {
  firewallRule: BatchUpdateFirewallRuleResult;
  code: number;
  message?: string;
}
const BatchUpdateFirewallRuleOutputItem = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<BatchUpdateFirewallRuleOutputItem>;
export type BatchUpdateFirewallRuleOutputItems = BatchUpdateFirewallRuleOutputItem[];
const BatchUpdateFirewallRuleOutputItems = /*@__PURE__*/ __L.at(__c2, 5);
export interface BatchUpdateFirewallRuleOutput {
  failures: BatchUpdateFirewallRuleOutputItem[];
  successes: BatchUpdateFirewallRuleOutputItem[];
}
const BatchUpdateFirewallRuleOutput = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<BatchUpdateFirewallRuleOutput>;
export type Cidr = string;
export type IpAddressType = "IPV4" | "IPV6" | (string & {});
const IpAddressType = S.String;

export type ResourceNameShort = string;
export type DnsProtocol = "DO53" | "DOH" | "DOT" | (string & {});
const DnsProtocol = S.String;

export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
const Tags = /*@__PURE__*/ __L.at(__c2, 7);
export interface CreateAccessSourceInput {
  cidr: string;
  clientToken?: string;
  ipAddressType?: IpAddressType;
  name?: string;
  dnsViewId: string;
  protocol: DnsProtocol;
  tags?: { [key: string]: string | undefined };
}
const CreateAccessSourceInput = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<CreateAccessSourceInput>;
export interface CreateAccessSourceOutput {
  arn: string;
  cidr: string;
  createdAt: Date;
  id: string;
  ipAddressType: IpAddressType;
  name?: string;
  dnsViewId: string;
  protocol: DnsProtocol;
  status: CRResourceStatus;
  updatedAt: Date;
}
const CreateAccessSourceOutput = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<CreateAccessSourceOutput>;
export interface CreateAccessTokenInput {
  clientToken?: string;
  dnsViewId: string;
  expiresAt?: Date;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateAccessTokenInput = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<CreateAccessTokenInput>;
export type TokenStatus = "CREATING" | "OPERATIONAL" | "DELETING" | (string & {});
const TokenStatus = S.String;

export type AccessTokenValue = string | redacted.Redacted<string>;
export interface CreateAccessTokenOutput {
  id: string;
  arn: string;
  clientToken?: string;
  createdAt: Date;
  dnsViewId: string;
  expiresAt: Date;
  name?: string;
  status: TokenStatus;
  value: string | redacted.Redacted<string>;
}
const CreateAccessTokenOutput = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<CreateAccessTokenOutput>;
export type DnsSecValidationType = "ENABLED" | "DISABLED" | (string & {});
const DnsSecValidationType = S.String;

export type EdnsClientSubnetType = "ENABLED" | "DISABLED" | (string & {});
const EdnsClientSubnetType = S.String;

export type FirewallRulesFailOpenType = "ENABLED" | "DISABLED" | (string & {});
const FirewallRulesFailOpenType = S.String;

export interface CreateDNSViewInput {
  globalResolverId: string;
  clientToken?: string;
  name: string;
  dnssecValidation?: DnsSecValidationType;
  ednsClientSubnet?: EdnsClientSubnetType;
  firewallRulesFailOpen?: FirewallRulesFailOpenType;
  description?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateDNSViewInput = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<CreateDNSViewInput>;
export type ProfileResourceStatus =
  | "CREATING"
  | "OPERATIONAL"
  | "UPDATING"
  | "ENABLING"
  | "DISABLING"
  | "DISABLED"
  | "DELETING"
  | (string & {});
const ProfileResourceStatus = S.String;

export interface CreateDNSViewOutput {
  id: string;
  arn: string;
  clientToken?: string;
  dnssecValidation: DnsSecValidationType;
  ednsClientSubnet: EdnsClientSubnetType;
  firewallRulesFailOpen: FirewallRulesFailOpenType;
  name: string;
  description?: string;
  globalResolverId: string;
  createdAt: Date;
  updatedAt: Date;
  status: ProfileResourceStatus;
}
const CreateDNSViewOutput = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<CreateDNSViewOutput>;
export interface CreateFirewallDomainListInput {
  clientToken?: string;
  globalResolverId: string;
  description?: string;
  name: string;
  tags?: { [key: string]: string | undefined };
}
const CreateFirewallDomainListInput = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<CreateFirewallDomainListInput>;
export interface CreateFirewallDomainListOutput {
  arn: string;
  globalResolverId: string;
  createdAt: Date;
  description?: string;
  domainCount: number;
  id: string;
  name: string;
  status: CRResourceStatus;
  updatedAt: Date;
}
const CreateFirewallDomainListOutput = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateFirewallDomainListOutput>;
export interface CreateFirewallRuleInput {
  action: FirewallRuleAction;
  blockOverrideDnsType?: BlockOverrideDnsQueryType;
  blockOverrideDomain?: string;
  blockOverrideTtl?: number;
  blockResponse?: FirewallBlockResponse;
  clientToken?: string;
  confidenceThreshold?: ConfidenceThreshold;
  description?: string;
  dnsAdvancedProtection?: DnsAdvancedProtection;
  firewallDomainListId?: string;
  name: string;
  priority?: number;
  dnsViewId: string;
  qType?: string;
}
const CreateFirewallRuleInput = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CreateFirewallRuleInput>;
export interface CreateFirewallRuleOutput {
  action: FirewallRuleAction;
  blockOverrideDnsType?: BlockOverrideDnsQueryType;
  blockOverrideDomain?: string;
  blockOverrideTtl?: number;
  blockResponse?: FirewallBlockResponse;
  confidenceThreshold?: ConfidenceThreshold;
  createdAt: Date;
  description?: string;
  dnsAdvancedProtection?: DnsAdvancedProtection;
  firewallDomainListId?: string;
  id: string;
  name: string;
  priority: number;
  dnsViewId: string;
  queryType?: string;
  status: CRResourceStatus;
  updatedAt: Date;
}
const CreateFirewallRuleOutput = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<CreateFirewallRuleOutput>;
export type GlobalResolverIpAddressType = "IPV4" | "DUAL_STACK" | (string & {});
const GlobalResolverIpAddressType = S.String;

export type Region = string;
export type Regions = string[];
const Regions = /*@__PURE__*/ __L.at(__c4, 2);
export interface CreateGlobalResolverInput {
  clientToken?: string;
  description?: string;
  ipAddressType?: GlobalResolverIpAddressType;
  name: string;
  observabilityRegion?: string;
  regions: string[];
  tags?: { [key: string]: string | undefined };
}
const CreateGlobalResolverInput = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<CreateGlobalResolverInput>;
export type Sni = string;
export type IPv4Address = string;
export type IPv4Addresses = string[];
const IPv4Addresses = Regions as any as S.Schema<IPv4Addresses>;
export type IPv6Address = string;
export type IPv6Addresses = string[];
const IPv6Addresses = Regions as any as S.Schema<IPv6Addresses>;
export interface CreateGlobalResolverOutput {
  id: string;
  arn: string;
  clientToken: string;
  createdAt: Date;
  description?: string;
  dnsName: string;
  ipAddressType?: GlobalResolverIpAddressType;
  ipv4Addresses: string[];
  ipv6Addresses?: string[];
  name: string;
  observabilityRegion?: string;
  regions: string[];
  status: CRResourceStatus;
  updatedAt: Date;
}
const CreateGlobalResolverOutput = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<CreateGlobalResolverOutput>;
export interface DeleteAccessSourceInput {
  accessSourceId: string;
}
const DeleteAccessSourceInput = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<DeleteAccessSourceInput>;
export interface DeleteAccessSourceOutput {
  arn: string;
  cidr: string;
  createdAt: Date;
  id: string;
  ipAddressType: IpAddressType;
  name?: string;
  dnsViewId: string;
  protocol: DnsProtocol;
  status: CRResourceStatus;
  updatedAt: Date;
}
const DeleteAccessSourceOutput =
  CreateAccessSourceOutput as any as S.Schema<DeleteAccessSourceOutput>;
export interface DeleteAccessTokenInput {
  accessTokenId: string;
}
const DeleteAccessTokenInput = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<DeleteAccessTokenInput>;
export interface DeleteAccessTokenOutput {
  id: string;
  status: TokenStatus;
  deletedAt: Date;
}
const DeleteAccessTokenOutput = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<DeleteAccessTokenOutput>;
export interface DeleteDNSViewInput {
  dnsViewId: string;
}
const DeleteDNSViewInput = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<DeleteDNSViewInput>;
export interface DeleteDNSViewOutput {
  id: string;
  arn: string;
  clientToken?: string;
  dnssecValidation: DnsSecValidationType;
  ednsClientSubnet: EdnsClientSubnetType;
  firewallRulesFailOpen: FirewallRulesFailOpenType;
  name: string;
  description?: string;
  globalResolverId: string;
  createdAt: Date;
  updatedAt: Date;
  status: ProfileResourceStatus;
}
const DeleteDNSViewOutput = CreateDNSViewOutput as any as S.Schema<DeleteDNSViewOutput>;
export interface DeleteFirewallDomainListInput {
  firewallDomainListId: string;
}
const DeleteFirewallDomainListInput = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<DeleteFirewallDomainListInput>;
export interface DeleteFirewallDomainListOutput {
  arn: string;
  id: string;
  name: string;
  status: CRResourceStatus;
}
const DeleteFirewallDomainListOutput = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<DeleteFirewallDomainListOutput>;
export interface DeleteFirewallRuleInput {
  firewallRuleId: string;
}
const DeleteFirewallRuleInput = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<DeleteFirewallRuleInput>;
export interface DeleteFirewallRuleOutput {
  action: FirewallRuleAction;
  blockOverrideDnsType?: BlockOverrideDnsQueryType;
  blockOverrideDomain?: string;
  blockOverrideTtl?: number;
  blockResponse?: FirewallBlockResponse;
  confidenceThreshold?: ConfidenceThreshold;
  createdAt: Date;
  description?: string;
  dnsAdvancedProtection?: DnsAdvancedProtection;
  firewallDomainListId?: string;
  id: string;
  name: string;
  priority: number;
  dnsViewId: string;
  queryType?: string;
  status: CRResourceStatus;
  updatedAt: Date;
}
const DeleteFirewallRuleOutput =
  CreateFirewallRuleOutput as any as S.Schema<DeleteFirewallRuleOutput>;
export interface DeleteGlobalResolverInput {
  globalResolverId: string;
}
const DeleteGlobalResolverInput = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<DeleteGlobalResolverInput>;
export interface DeleteGlobalResolverOutput {
  id: string;
  arn: string;
  clientToken: string;
  dnsName: string;
  observabilityRegion?: string;
  name: string;
  description?: string;
  regions: string[];
  createdAt: Date;
  updatedAt: Date;
  status: CRResourceStatus;
  ipv4Addresses: string[];
  ipv6Addresses?: string[];
  ipAddressType?: GlobalResolverIpAddressType;
}
const DeleteGlobalResolverOutput = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<DeleteGlobalResolverOutput>;
export interface DisableDNSViewInput {
  dnsViewId: string;
}
const DisableDNSViewInput = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<DisableDNSViewInput>;
export interface DisableDNSViewOutput {
  id: string;
  arn: string;
  clientToken?: string;
  dnssecValidation: DnsSecValidationType;
  ednsClientSubnet: EdnsClientSubnetType;
  firewallRulesFailOpen: FirewallRulesFailOpenType;
  name: string;
  description?: string;
  globalResolverId: string;
  createdAt: Date;
  updatedAt: Date;
  status: ProfileResourceStatus;
}
const DisableDNSViewOutput = CreateDNSViewOutput as any as S.Schema<DisableDNSViewOutput>;
export interface DisassociateHostedZoneInput {
  hostedZoneId: string;
  resourceArn: string;
}
const DisassociateHostedZoneInput = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<DisassociateHostedZoneInput>;
export interface DisassociateHostedZoneOutput {
  id: string;
  resourceArn: string;
  hostedZoneId: string;
  hostedZoneName: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  status: HostedZoneAssociationStatus;
}
const DisassociateHostedZoneOutput =
  AssociateHostedZoneOutput as any as S.Schema<DisassociateHostedZoneOutput>;
export interface EnableDNSViewInput {
  dnsViewId: string;
}
const EnableDNSViewInput = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<EnableDNSViewInput>;
export interface EnableDNSViewOutput {
  id: string;
  arn: string;
  clientToken?: string;
  dnssecValidation: DnsSecValidationType;
  ednsClientSubnet: EdnsClientSubnetType;
  firewallRulesFailOpen: FirewallRulesFailOpenType;
  name: string;
  description?: string;
  globalResolverId: string;
  createdAt: Date;
  updatedAt: Date;
  status: ProfileResourceStatus;
}
const EnableDNSViewOutput = CreateDNSViewOutput as any as S.Schema<EnableDNSViewOutput>;
export interface GetAccessSourceInput {
  accessSourceId: string;
}
const GetAccessSourceInput = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<GetAccessSourceInput>;
export interface GetAccessSourceOutput {
  arn: string;
  cidr: string;
  createdAt: Date;
  id: string;
  ipAddressType: IpAddressType;
  name?: string;
  dnsViewId: string;
  protocol: DnsProtocol;
  status: CRResourceStatus;
  updatedAt: Date;
}
const GetAccessSourceOutput = CreateAccessSourceOutput as any as S.Schema<GetAccessSourceOutput>;
export interface GetAccessTokenInput {
  accessTokenId: string;
}
const GetAccessTokenInput = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<GetAccessTokenInput>;
export interface GetAccessTokenOutput {
  id: string;
  arn: string;
  clientToken?: string;
  createdAt: Date;
  dnsViewId: string;
  expiresAt: Date;
  globalResolverId: string;
  name?: string;
  status: TokenStatus;
  updatedAt: Date;
  value: string | redacted.Redacted<string>;
}
const GetAccessTokenOutput = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<GetAccessTokenOutput>;
export interface GetDNSViewInput {
  dnsViewId: string;
}
const GetDNSViewInput = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<GetDNSViewInput>;
export interface GetDNSViewOutput {
  id: string;
  arn: string;
  clientToken?: string;
  dnssecValidation: DnsSecValidationType;
  ednsClientSubnet: EdnsClientSubnetType;
  firewallRulesFailOpen: FirewallRulesFailOpenType;
  name: string;
  description?: string;
  globalResolverId: string;
  createdAt: Date;
  updatedAt: Date;
  status: ProfileResourceStatus;
}
const GetDNSViewOutput = CreateDNSViewOutput as any as S.Schema<GetDNSViewOutput>;
export interface GetFirewallDomainListInput {
  firewallDomainListId: string;
}
const GetFirewallDomainListInput = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<GetFirewallDomainListInput>;
export interface GetFirewallDomainListOutput {
  arn: string;
  globalResolverId: string;
  clientToken?: string;
  createdAt: Date;
  description?: string;
  domainCount: number;
  id: string;
  name: string;
  status: CRResourceStatus;
  statusMessage?: string;
  updatedAt: Date;
}
const GetFirewallDomainListOutput = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<GetFirewallDomainListOutput>;
export interface GetFirewallRuleInput {
  firewallRuleId: string;
}
const GetFirewallRuleInput = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<GetFirewallRuleInput>;
export interface GetFirewallRuleOutput {
  action: FirewallRuleAction;
  blockOverrideDnsType?: BlockOverrideDnsQueryType;
  blockOverrideDomain?: string;
  blockOverrideTtl?: number;
  blockResponse?: FirewallBlockResponse;
  confidenceThreshold?: ConfidenceThreshold;
  createdAt: Date;
  description?: string;
  dnsAdvancedProtection?: DnsAdvancedProtection;
  firewallDomainListId?: string;
  id: string;
  name: string;
  priority: number;
  dnsViewId: string;
  queryType?: string;
  status: CRResourceStatus;
  updatedAt: Date;
}
const GetFirewallRuleOutput = CreateFirewallRuleOutput as any as S.Schema<GetFirewallRuleOutput>;
export interface GetGlobalResolverInput {
  globalResolverId: string;
}
const GetGlobalResolverInput = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<GetGlobalResolverInput>;
export interface GetGlobalResolverOutput {
  id: string;
  arn: string;
  clientToken: string;
  dnsName: string;
  observabilityRegion?: string;
  name: string;
  description?: string;
  regions: string[];
  createdAt: Date;
  updatedAt: Date;
  status: CRResourceStatus;
  ipv4Addresses: string[];
  ipv6Addresses?: string[];
  ipAddressType?: GlobalResolverIpAddressType;
}
const GetGlobalResolverOutput = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<GetGlobalResolverOutput>;
export interface GetHostedZoneAssociationInput {
  hostedZoneAssociationId: string;
}
const GetHostedZoneAssociationInput = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<GetHostedZoneAssociationInput>;
export interface GetHostedZoneAssociationOutput {
  id: string;
  resourceArn: string;
  hostedZoneId: string;
  hostedZoneName: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  status: HostedZoneAssociationStatus;
}
const GetHostedZoneAssociationOutput =
  AssociateHostedZoneOutput as any as S.Schema<GetHostedZoneAssociationOutput>;
export interface GetManagedFirewallDomainListInput {
  managedFirewallDomainListId: string;
}
const GetManagedFirewallDomainListInput = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<GetManagedFirewallDomainListInput>;
export interface GetManagedFirewallDomainListOutput {
  description?: string;
  id: string;
  name: string;
  managedListType: string;
}
const GetManagedFirewallDomainListOutput = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<GetManagedFirewallDomainListOutput>;
export interface ImportFirewallDomainsInput {
  domainFileUrl: string;
  firewallDomainListId: string;
  operation: string;
}
const ImportFirewallDomainsInput = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<ImportFirewallDomainsInput>;
export interface ImportFirewallDomainsOutput {
  id: string;
  name: string;
  status: CRResourceStatus;
}
const ImportFirewallDomainsOutput = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<ImportFirewallDomainsOutput>;
export type Strings = string[];
const Strings = Regions as any as S.Schema<Strings>;
export type Filters = { [key: string]: string[] | undefined };
const Filters = /*@__PURE__*/ __L.at(__c7, 7);
export interface ListAccessSourcesInput {
  maxResults?: number;
  nextToken?: string;
  filters?: { [key: string]: string[] | undefined };
}
const ListAccessSourcesInput = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<ListAccessSourcesInput>;
export interface AccessSourcesItem {
  arn: string;
  cidr: string;
  createdAt: Date;
  id: string;
  ipAddressType: IpAddressType;
  name?: string;
  dnsViewId: string;
  protocol: DnsProtocol;
  status: CRResourceStatus;
  updatedAt: Date;
}
const AccessSourcesItem = CreateAccessSourceOutput as any as S.Schema<AccessSourcesItem>;
export type AccessSources = AccessSourcesItem[];
const AccessSources = /*@__PURE__*/ __L.at(__c8, 1);
export interface ListAccessSourcesOutput {
  nextToken?: string;
  accessSources: AccessSourcesItem[];
}
const ListAccessSourcesOutput = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<ListAccessSourcesOutput>;
export interface ListAccessTokensInput {
  maxResults?: number;
  nextToken?: string;
  dnsViewId: string;
  filters?: { [key: string]: string[] | undefined };
}
const ListAccessTokensInput = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<ListAccessTokensInput>;
export interface AccessTokenItem {
  id: string;
  arn: string;
  createdAt: Date;
  dnsViewId: string;
  expiresAt: Date;
  globalResolverId: string;
  name?: string;
  status: TokenStatus;
  updatedAt: Date;
}
const AccessTokenItem = /*@__PURE__*/ __L.at(__c8, 4) as any as S.Schema<AccessTokenItem>;
export type AccessTokens = AccessTokenItem[];
const AccessTokens = /*@__PURE__*/ __L.at(__c8, 5);
export interface ListAccessTokensOutput {
  nextToken?: string;
  accessTokens?: AccessTokenItem[];
}
const ListAccessTokensOutput = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<ListAccessTokensOutput>;
export interface ListDNSViewsInput {
  maxResults?: number;
  nextToken?: string;
  globalResolverId: string;
}
const ListDNSViewsInput = /*@__PURE__*/ __L.at(__c8, 7) as any as S.Schema<ListDNSViewsInput>;
export interface DNSViewSummary {
  id: string;
  arn: string;
  clientToken: string;
  dnssecValidation: DnsSecValidationType;
  ednsClientSubnet: EdnsClientSubnetType;
  firewallRulesFailOpen: FirewallRulesFailOpenType;
  name: string;
  description?: string;
  globalResolverId: string;
  createdAt: Date;
  updatedAt: Date;
  status: ProfileResourceStatus;
}
const DNSViewSummary = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<DNSViewSummary>;
export type DNSViews = DNSViewSummary[];
const DNSViews = /*@__PURE__*/ __L.at(__c9, 1);
export interface ListDNSViewsOutput {
  nextToken?: string;
  dnsViews: DNSViewSummary[];
}
const ListDNSViewsOutput = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<ListDNSViewsOutput>;
export interface ListFirewallDomainListsInput {
  maxResults?: number;
  nextToken?: string;
  globalResolverId?: string;
}
const ListFirewallDomainListsInput = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<ListFirewallDomainListsInput>;
export interface FirewallDomainListsItem {
  arn: string;
  globalResolverId: string;
  createdAt: Date;
  description?: string;
  id: string;
  name: string;
  status: CRResourceStatus;
  updatedAt: Date;
}
const FirewallDomainListsItem = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<FirewallDomainListsItem>;
export type FirewallDomainLists = FirewallDomainListsItem[];
const FirewallDomainLists = /*@__PURE__*/ __L.at(__c9, 5);
export interface ListFirewallDomainListsOutput {
  nextToken?: string;
  firewallDomainLists: FirewallDomainListsItem[];
}
const ListFirewallDomainListsOutput = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<ListFirewallDomainListsOutput>;
export interface ListFirewallDomainsInput {
  maxResults?: number;
  nextToken?: string;
  firewallDomainListId: string;
}
const ListFirewallDomainsInput = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<ListFirewallDomainsInput>;
export type Domains = string[];
const Domains = Regions as any as S.Schema<Domains>;
export interface ListFirewallDomainsOutput {
  nextToken?: string;
  domains: string[];
}
const ListFirewallDomainsOutput = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<ListFirewallDomainsOutput>;
export interface ListFirewallRulesInput {
  maxResults?: number;
  nextToken?: string;
  dnsViewId: string;
  filters?: { [key: string]: string[] | undefined };
}
const ListFirewallRulesInput = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<ListFirewallRulesInput>;
export interface FirewallRulesItem {
  action: FirewallRuleAction;
  blockOverrideDnsType?: BlockOverrideDnsQueryType;
  blockOverrideDomain?: string;
  blockOverrideTtl?: number;
  blockResponse?: FirewallBlockResponse;
  confidenceThreshold?: ConfidenceThreshold;
  createdAt: Date;
  description?: string;
  dnsAdvancedProtection?: DnsAdvancedProtection;
  firewallDomainListId?: string;
  id: string;
  name: string;
  priority: number;
  dnsViewId: string;
  queryType?: string;
  status: CRResourceStatus;
  updatedAt: Date;
}
const FirewallRulesItem = CreateFirewallRuleOutput as any as S.Schema<FirewallRulesItem>;
export type FirewallRules = FirewallRulesItem[];
const FirewallRules = /*@__PURE__*/ __L.at(__c10, 2);
export interface ListFirewallRulesOutput {
  nextToken?: string;
  firewallRules: FirewallRulesItem[];
}
const ListFirewallRulesOutput = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<ListFirewallRulesOutput>;
export interface ListGlobalResolversInput {
  maxResults?: number;
  nextToken?: string;
}
const ListGlobalResolversInput = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<ListGlobalResolversInput>;
export interface GlobalResolversItem {
  id: string;
  arn: string;
  clientToken: string;
  dnsName: string;
  observabilityRegion?: string;
  name: string;
  description?: string;
  regions: string[];
  createdAt: Date;
  updatedAt: Date;
  status: CRResourceStatus;
  ipv4Addresses: string[];
  ipv6Addresses?: string[];
  ipAddressType?: GlobalResolverIpAddressType;
}
const GlobalResolversItem = GetGlobalResolverOutput as any as S.Schema<GlobalResolversItem>;
export type GlobalResolvers = GlobalResolversItem[];
const GlobalResolvers = /*@__PURE__*/ __L.at(__c10, 5);
export interface ListGlobalResolversOutput {
  nextToken?: string;
  globalResolvers: GlobalResolversItem[];
}
const ListGlobalResolversOutput = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<ListGlobalResolversOutput>;
export interface ListHostedZoneAssociationsInput {
  maxResults?: number;
  nextToken?: string;
  resourceArn?: string;
}
const ListHostedZoneAssociationsInput = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<ListHostedZoneAssociationsInput>;
export interface HostedZoneAssociationSummary {
  id: string;
  resourceArn: string;
  hostedZoneId: string;
  hostedZoneName: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  status: HostedZoneAssociationStatus;
}
const HostedZoneAssociationSummary =
  AssociateHostedZoneOutput as any as S.Schema<HostedZoneAssociationSummary>;
export type HostedZoneAssociations = HostedZoneAssociationSummary[];
const HostedZoneAssociations = /*@__PURE__*/ __L.at(__c11, 0);
export interface ListHostedZoneAssociationsOutput {
  nextToken?: string;
  hostedZoneAssociations: HostedZoneAssociationSummary[];
}
const ListHostedZoneAssociationsOutput = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<ListHostedZoneAssociationsOutput>;
export interface ListManagedFirewallDomainListsInput {
  maxResults?: number;
  nextToken?: string;
  managedFirewallDomainListType: string;
}
const ListManagedFirewallDomainListsInput = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<ListManagedFirewallDomainListsInput>;
export interface ManagedFirewallDomainListsItem {
  description?: string;
  id: string;
  name: string;
  managedListType: string;
}
const ManagedFirewallDomainListsItem =
  GetManagedFirewallDomainListOutput as any as S.Schema<ManagedFirewallDomainListsItem>;
export type ManagedFirewallDomainLists = ManagedFirewallDomainListsItem[];
const ManagedFirewallDomainLists = /*@__PURE__*/ __L.at(__c11, 3);
export interface ListManagedFirewallDomainListsOutput {
  nextToken?: string;
  managedFirewallDomainLists: ManagedFirewallDomainListsItem[];
}
const ListManagedFirewallDomainListsOutput = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<ListManagedFirewallDomainListsOutput>;
export interface ListSharedDNSViewsInput {
  maxResults?: number;
  nextToken?: string;
}
const ListSharedDNSViewsInput = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<ListSharedDNSViewsInput>;
export type AccountId = string;
export interface SharedDNSViewSummary {
  id: string;
  arn: string;
  clientToken: string;
  dnssecValidation: DnsSecValidationType;
  ednsClientSubnet: EdnsClientSubnetType;
  firewallRulesFailOpen: FirewallRulesFailOpenType;
  name: string;
  description?: string;
  globalResolverId: string;
  createdAt: Date;
  updatedAt: Date;
  status: ProfileResourceStatus;
  ownerAccountId: string;
}
const SharedDNSViewSummary = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<SharedDNSViewSummary>;
export type SharedDNSViews = SharedDNSViewSummary[];
const SharedDNSViews = /*@__PURE__*/ __L.at(__c11, 7);
export interface ListSharedDNSViewsOutput {
  nextToken?: string;
  dnsViews: SharedDNSViewSummary[];
}
const ListSharedDNSViewsOutput = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<ListSharedDNSViewsOutput>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = /*@__PURE__*/ __L.at(__c12, 4) as any as S.Schema<TagResourceResponse>;
export type TagKeys = string[];
const TagKeys = Regions as any as S.Schema<TagKeys>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = TagResourceResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAccessSourceInput {
  accessSourceId: string;
  cidr?: string;
  ipAddressType?: IpAddressType;
  name?: string;
  protocol?: DnsProtocol;
}
const UpdateAccessSourceInput = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<UpdateAccessSourceInput>;
export interface UpdateAccessSourceOutput {
  arn: string;
  cidr: string;
  createdAt: Date;
  id: string;
  ipAddressType: IpAddressType;
  name?: string;
  dnsViewId: string;
  protocol: DnsProtocol;
  status: CRResourceStatus;
  updatedAt: Date;
}
const UpdateAccessSourceOutput =
  CreateAccessSourceOutput as any as S.Schema<UpdateAccessSourceOutput>;
export interface UpdateAccessTokenInput {
  accessTokenId: string;
  name: string;
}
const UpdateAccessTokenInput = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<UpdateAccessTokenInput>;
export interface UpdateAccessTokenOutput {
  id: string;
  name: string;
}
const UpdateAccessTokenOutput = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<UpdateAccessTokenOutput>;
export interface UpdateDNSViewInput {
  dnsViewId: string;
  name?: string;
  description?: string;
  dnssecValidation?: DnsSecValidationType;
  ednsClientSubnet?: EdnsClientSubnetType;
  firewallRulesFailOpen?: FirewallRulesFailOpenType;
}
const UpdateDNSViewInput = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<UpdateDNSViewInput>;
export interface UpdateDNSViewOutput {
  id: string;
  arn: string;
  clientToken?: string;
  dnssecValidation: DnsSecValidationType;
  ednsClientSubnet: EdnsClientSubnetType;
  firewallRulesFailOpen: FirewallRulesFailOpenType;
  name: string;
  description?: string;
  globalResolverId: string;
  createdAt: Date;
  updatedAt: Date;
  status: ProfileResourceStatus;
}
const UpdateDNSViewOutput = CreateDNSViewOutput as any as S.Schema<UpdateDNSViewOutput>;
export interface UpdateFirewallDomainsInput {
  domains: string[];
  firewallDomainListId: string;
  operation: string;
}
const UpdateFirewallDomainsInput = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<UpdateFirewallDomainsInput>;
export interface UpdateFirewallDomainsOutput {
  id: string;
  name: string;
  status: CRResourceStatus;
}
const UpdateFirewallDomainsOutput =
  ImportFirewallDomainsOutput as any as S.Schema<UpdateFirewallDomainsOutput>;
export interface UpdateFirewallRuleInput {
  action?: FirewallRuleAction;
  blockOverrideDnsType?: BlockOverrideDnsQueryType;
  blockOverrideDomain?: string;
  blockOverrideTtl?: number;
  blockResponse?: FirewallBlockResponse;
  clientToken: string;
  confidenceThreshold?: ConfidenceThreshold;
  description?: string;
  dnsAdvancedProtection?: DnsAdvancedProtection;
  firewallRuleId: string;
  name?: string;
  priority?: number;
}
const UpdateFirewallRuleInput = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<UpdateFirewallRuleInput>;
export interface UpdateFirewallRuleOutput {
  action: FirewallRuleAction;
  blockOverrideDnsType?: BlockOverrideDnsQueryType;
  blockOverrideDomain?: string;
  blockOverrideTtl?: number;
  blockResponse?: FirewallBlockResponse;
  confidenceThreshold?: ConfidenceThreshold;
  createdAt: Date;
  description?: string;
  dnsAdvancedProtection?: DnsAdvancedProtection;
  firewallDomainListId?: string;
  id: string;
  name: string;
  priority: number;
  dnsViewId: string;
  queryType?: string;
  status: CRResourceStatus;
  updatedAt: Date;
}
const UpdateFirewallRuleOutput =
  CreateFirewallRuleOutput as any as S.Schema<UpdateFirewallRuleOutput>;
export interface UpdateGlobalResolverInput {
  globalResolverId: string;
  name?: string;
  observabilityRegion?: string;
  description?: string;
  ipAddressType?: GlobalResolverIpAddressType;
  regions?: string[];
}
const UpdateGlobalResolverInput = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<UpdateGlobalResolverInput>;
export interface UpdateGlobalResolverOutput {
  id: string;
  arn: string;
  clientToken: string;
  dnsName: string;
  observabilityRegion?: string;
  name: string;
  description?: string;
  regions: string[];
  createdAt: Date;
  updatedAt: Date;
  status: CRResourceStatus;
  ipv4Addresses: string[];
  ipv6Addresses?: string[];
  ipAddressType?: GlobalResolverIpAddressType;
}
const UpdateGlobalResolverOutput =
  DeleteGlobalResolverOutput as any as S.Schema<UpdateGlobalResolverOutput>;
export interface UpdateHostedZoneAssociationInput {
  hostedZoneAssociationId: string;
  name?: string;
}
const UpdateHostedZoneAssociationInput = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<UpdateHostedZoneAssociationInput>;
export interface UpdateHostedZoneAssociationOutput {
  id: string;
  resourceArn: string;
  hostedZoneId: string;
  hostedZoneName: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  status: HostedZoneAssociationStatus;
}
const UpdateHostedZoneAssociationOutput =
  AssociateHostedZoneOutput as any as S.Schema<UpdateHostedZoneAssociationOutput>;
export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER"
  | (string & {});
const ValidationExceptionReason = S.String;

export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c13, 7);
export type AssociateHostedZoneError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a Route 53 private hosted zone with a Route 53 Global Resolver resource. This allows the resolver to resolve DNS queries for the private hosted zone from anywhere globally.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const associateHostedZone: API.OperationMethod<
  AssociateHostedZoneInput,
  AssociateHostedZoneOutput,
  AssociateHostedZoneError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateHostedZoneInput,
  output: AssociateHostedZoneOutput,
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
  operationName: "AssociateHostedZone",
}));

export type BatchCreateFirewallRuleError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates multiple DNS firewall rules in a single operation. This is more efficient than creating rules individually when you need to set up multiple rules at once.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const batchCreateFirewallRule: API.OperationMethod<
  BatchCreateFirewallRuleInput,
  BatchCreateFirewallRuleOutput,
  BatchCreateFirewallRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchCreateFirewallRuleInput,
  output: BatchCreateFirewallRuleOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchCreateFirewallRule",
}));

export type BatchDeleteFirewallRuleError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes multiple DNS firewall rules in a single operation. This is more efficient than deleting rules individually.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const batchDeleteFirewallRule: API.OperationMethod<
  BatchDeleteFirewallRuleInput,
  BatchDeleteFirewallRuleOutput,
  BatchDeleteFirewallRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteFirewallRuleInput,
  output: BatchDeleteFirewallRuleOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteFirewallRule",
}));

export type BatchUpdateFirewallRuleError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates multiple DNS firewall rules in a single operation. This is more efficient than updating rules individually.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const batchUpdateFirewallRule: API.OperationMethod<
  BatchUpdateFirewallRuleInput,
  BatchUpdateFirewallRuleOutput,
  BatchUpdateFirewallRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateFirewallRuleInput,
  output: BatchUpdateFirewallRuleOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateFirewallRule",
}));

export type CreateAccessSourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an access source for a DNS view. Access sources define IP addresses or CIDR ranges that are allowed to send DNS queries to the Route 53 Global Resolver, along with the permitted DNS protocols.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const createAccessSource: API.OperationMethod<
  CreateAccessSourceInput,
  CreateAccessSourceOutput,
  CreateAccessSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccessSourceInput,
  output: CreateAccessSourceOutput,
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
  operationName: "CreateAccessSource",
}));

export type CreateAccessTokenError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an access token for a DNS view. Access tokens provide token-based authentication for DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) connections to the Route 53 Global Resolver.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const createAccessToken: API.OperationMethod<
  CreateAccessTokenInput,
  CreateAccessTokenOutput,
  CreateAccessTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccessTokenInput,
  output: CreateAccessTokenOutput,
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
  operationName: "CreateAccessToken",
}));

export type CreateDNSViewError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a DNS view within a Route 53 Global Resolver. A DNS view models end users, user groups, networks, and devices, and serves as a parent resource that holds configurations controlling access, authorization, DNS firewall rules, and forwarding rules.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const createDNSView: API.OperationMethod<
  CreateDNSViewInput,
  CreateDNSViewOutput,
  CreateDNSViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDNSViewInput,
  output: CreateDNSViewOutput,
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
  operationName: "CreateDNSView",
}));

export type CreateFirewallDomainListError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a firewall domain list. Domain lists are reusable sets of domain specifications that you use in DNS firewall rules to allow, block, or alert on DNS queries to specific domains.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const createFirewallDomainList: API.OperationMethod<
  CreateFirewallDomainListInput,
  CreateFirewallDomainListOutput,
  CreateFirewallDomainListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFirewallDomainListInput,
  output: CreateFirewallDomainListOutput,
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
  operationName: "CreateFirewallDomainList",
}));

export type CreateFirewallRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a DNS firewall rule. Firewall rules define actions (ALLOW, BLOCK, or ALERT) to take on DNS queries that match specified domain lists, managed domain lists, or advanced threat protections.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const createFirewallRule: API.OperationMethod<
  CreateFirewallRuleInput,
  CreateFirewallRuleOutput,
  CreateFirewallRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFirewallRuleInput,
  output: CreateFirewallRuleOutput,
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
  operationName: "CreateFirewallRule",
}));

export type CreateGlobalResolverError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new Route 53 Global Resolver instance. A Route 53 Global Resolver is a global, internet-accessible DNS resolver that provides secure DNS resolution for both public and private domains through global anycast IP addresses.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const createGlobalResolver: API.OperationMethod<
  CreateGlobalResolverInput,
  CreateGlobalResolverOutput,
  CreateGlobalResolverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateGlobalResolverInput,
  output: CreateGlobalResolverOutput,
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
  operationName: "CreateGlobalResolver",
}));

export type DeleteAccessSourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an access source. This operation cannot be undone.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const deleteAccessSource: API.OperationMethod<
  DeleteAccessSourceInput,
  DeleteAccessSourceOutput,
  DeleteAccessSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessSourceInput,
  output: DeleteAccessSourceOutput,
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
  operationName: "DeleteAccessSource",
}));

export type DeleteAccessTokenError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an access token. This operation cannot be undone.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const deleteAccessToken: API.OperationMethod<
  DeleteAccessTokenInput,
  DeleteAccessTokenOutput,
  DeleteAccessTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessTokenInput,
  output: DeleteAccessTokenOutput,
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
  operationName: "DeleteAccessToken",
}));

export type DeleteDNSViewError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a DNS view. This operation cannot be undone.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const deleteDNSView: API.OperationMethod<
  DeleteDNSViewInput,
  DeleteDNSViewOutput,
  DeleteDNSViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDNSViewInput,
  output: DeleteDNSViewOutput,
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
  operationName: "DeleteDNSView",
}));

export type DeleteFirewallDomainListError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a firewall domain list. This operation cannot be undone.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const deleteFirewallDomainList: API.OperationMethod<
  DeleteFirewallDomainListInput,
  DeleteFirewallDomainListOutput,
  DeleteFirewallDomainListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFirewallDomainListInput,
  output: DeleteFirewallDomainListOutput,
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
  operationName: "DeleteFirewallDomainList",
}));

export type DeleteFirewallRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a DNS firewall rule. This operation cannot be undone.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const deleteFirewallRule: API.OperationMethod<
  DeleteFirewallRuleInput,
  DeleteFirewallRuleOutput,
  DeleteFirewallRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFirewallRuleInput,
  output: DeleteFirewallRuleOutput,
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
  operationName: "DeleteFirewallRule",
}));

export type DeleteGlobalResolverError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a Route 53 Global Resolver instance. This operation cannot be undone. All associated DNS views, access sources, tokens, and firewall rules are also deleted.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const deleteGlobalResolver: API.OperationMethod<
  DeleteGlobalResolverInput,
  DeleteGlobalResolverOutput,
  DeleteGlobalResolverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteGlobalResolverInput,
  output: DeleteGlobalResolverOutput,
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
  operationName: "DeleteGlobalResolver",
}));

export type DisableDNSViewError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disables a DNS view, preventing it from serving DNS queries.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const disableDNSView: API.OperationMethod<
  DisableDNSViewInput,
  DisableDNSViewOutput,
  DisableDNSViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableDNSViewInput,
  output: DisableDNSViewOutput,
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
  operationName: "DisableDNSView",
}));

export type DisassociateHostedZoneError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a Route 53 private hosted zone from a Route 53 Global Resolver resource.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const disassociateHostedZone: API.OperationMethod<
  DisassociateHostedZoneInput,
  DisassociateHostedZoneOutput,
  DisassociateHostedZoneError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateHostedZoneInput,
  output: DisassociateHostedZoneOutput,
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
  operationName: "DisassociateHostedZone",
}));

export type EnableDNSViewError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables a disabled DNS view, allowing it to serve DNS queries again.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const enableDNSView: API.OperationMethod<
  EnableDNSViewInput,
  EnableDNSViewOutput,
  EnableDNSViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableDNSViewInput,
  output: EnableDNSViewOutput,
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
  operationName: "EnableDNSView",
}));

export type GetAccessSourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an access source.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const getAccessSource: API.OperationMethod<
  GetAccessSourceInput,
  GetAccessSourceOutput,
  GetAccessSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessSourceInput,
  output: GetAccessSourceOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessSource",
}));

export type GetAccessTokenError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an access token.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const getAccessToken: API.OperationMethod<
  GetAccessTokenInput,
  GetAccessTokenOutput,
  GetAccessTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessTokenInput,
  output: GetAccessTokenOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessToken",
}));

export type GetDNSViewError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a DNS view.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const getDNSView: API.OperationMethod<
  GetDNSViewInput,
  GetDNSViewOutput,
  GetDNSViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDNSViewInput,
  output: GetDNSViewOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDNSView",
}));

export type GetFirewallDomainListError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a firewall domain list.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const getFirewallDomainList: API.OperationMethod<
  GetFirewallDomainListInput,
  GetFirewallDomainListOutput,
  GetFirewallDomainListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFirewallDomainListInput,
  output: GetFirewallDomainListOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFirewallDomainList",
}));

export type GetFirewallRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a DNS firewall rule.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const getFirewallRule: API.OperationMethod<
  GetFirewallRuleInput,
  GetFirewallRuleOutput,
  GetFirewallRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFirewallRuleInput,
  output: GetFirewallRuleOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFirewallRule",
}));

export type GetGlobalResolverError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a Route 53 Global Resolver instance.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const getGlobalResolver: API.OperationMethod<
  GetGlobalResolverInput,
  GetGlobalResolverOutput,
  GetGlobalResolverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetGlobalResolverInput,
  output: GetGlobalResolverOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGlobalResolver",
}));

export type GetHostedZoneAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a hosted zone association.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const getHostedZoneAssociation: API.OperationMethod<
  GetHostedZoneAssociationInput,
  GetHostedZoneAssociationOutput,
  GetHostedZoneAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetHostedZoneAssociationInput,
  output: GetHostedZoneAssociationOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetHostedZoneAssociation",
}));

export type GetManagedFirewallDomainListError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an Amazon Web Services-managed firewall domain list. Managed domain lists contain domains associated with malicious activity, content categories, or specific threats.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const getManagedFirewallDomainList: API.OperationMethod<
  GetManagedFirewallDomainListInput,
  GetManagedFirewallDomainListOutput,
  GetManagedFirewallDomainListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetManagedFirewallDomainListInput,
  output: GetManagedFirewallDomainListOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetManagedFirewallDomainList",
}));

export type ImportFirewallDomainsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Imports a list of domains from an Amazon S3 file into a firewall domain list. The file should contain one domain per line.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const importFirewallDomains: API.OperationMethod<
  ImportFirewallDomainsInput,
  ImportFirewallDomainsOutput,
  ImportFirewallDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ImportFirewallDomainsInput,
  output: ImportFirewallDomainsOutput,
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
  operationName: "ImportFirewallDomains",
}));

export type ListAccessSourcesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all access sources with pagination support.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const listAccessSources: API.PaginatedOperationMethod<
  ListAccessSourcesInput,
  ListAccessSourcesOutput,
  ListAccessSourcesError,
  Credentials | HttpClient.HttpClient,
  AccessSourcesItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessSourcesInput,
  output: ListAccessSourcesOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessSources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "accessSources",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAccessTokensError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all access tokens for a DNS view with pagination support.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const listAccessTokens: API.PaginatedOperationMethod<
  ListAccessTokensInput,
  ListAccessTokensOutput,
  ListAccessTokensError,
  Credentials | HttpClient.HttpClient,
  AccessTokenItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessTokensInput,
  output: ListAccessTokensOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessTokens",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "accessTokens",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDNSViewsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all DNS views for a Route 53 Global Resolver with pagination support.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const listDNSViews: API.PaginatedOperationMethod<
  ListDNSViewsInput,
  ListDNSViewsOutput,
  ListDNSViewsError,
  Credentials | HttpClient.HttpClient,
  DNSViewSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDNSViewsInput,
  output: ListDNSViewsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDNSViews",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dnsViews",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFirewallDomainListsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all firewall domain lists for a Route 53 Global Resolver with pagination support.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const listFirewallDomainLists: API.PaginatedOperationMethod<
  ListFirewallDomainListsInput,
  ListFirewallDomainListsOutput,
  ListFirewallDomainListsError,
  Credentials | HttpClient.HttpClient,
  FirewallDomainListsItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFirewallDomainListsInput,
  output: ListFirewallDomainListsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFirewallDomainLists",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "firewallDomainLists",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFirewallDomainsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the domains in DNS Firewall domain list you have created.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const listFirewallDomains: API.PaginatedOperationMethod<
  ListFirewallDomainsInput,
  ListFirewallDomainsOutput,
  ListFirewallDomainsError,
  Credentials | HttpClient.HttpClient,
  Domain
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFirewallDomainsInput,
  output: ListFirewallDomainsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFirewallDomains",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "domains",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFirewallRulesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all DNS firewall rules for a DNS view with pagination support.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const listFirewallRules: API.PaginatedOperationMethod<
  ListFirewallRulesInput,
  ListFirewallRulesOutput,
  ListFirewallRulesError,
  Credentials | HttpClient.HttpClient,
  FirewallRulesItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFirewallRulesInput,
  output: ListFirewallRulesOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFirewallRules",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "firewallRules",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListGlobalResolversError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all Route 53 Global Resolver instances in your account with pagination support.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const listGlobalResolvers: API.PaginatedOperationMethod<
  ListGlobalResolversInput,
  ListGlobalResolversOutput,
  ListGlobalResolversError,
  Credentials | HttpClient.HttpClient,
  GlobalResolversItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListGlobalResolversInput,
  output: ListGlobalResolversOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGlobalResolvers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "globalResolvers",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListHostedZoneAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists hosted zone associations with pagination support. Specify a DNS view through the `resourceArn` parameter to list the hosted zone associations for that DNS view, or omit it to list all hosted zone associations in your Amazon Web Services account.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const listHostedZoneAssociations: API.PaginatedOperationMethod<
  ListHostedZoneAssociationsInput,
  ListHostedZoneAssociationsOutput,
  ListHostedZoneAssociationsError,
  Credentials | HttpClient.HttpClient,
  HostedZoneAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListHostedZoneAssociationsInput,
  output: ListHostedZoneAssociationsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListHostedZoneAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "hostedZoneAssociations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListManagedFirewallDomainListsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of the Amazon Web Services Managed DNS Lists and the categories for DNS Firewall. The categories are either `THREAT` or `CONTENT`.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const listManagedFirewallDomainLists: API.PaginatedOperationMethod<
  ListManagedFirewallDomainListsInput,
  ListManagedFirewallDomainListsOutput,
  ListManagedFirewallDomainListsError,
  Credentials | HttpClient.HttpClient,
  ManagedFirewallDomainListsItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListManagedFirewallDomainListsInput,
  output: ListManagedFirewallDomainListsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedFirewallDomainLists",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "managedFirewallDomainLists",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSharedDNSViewsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the DNS views that have been shared with your Amazon Web Services account through Amazon Web Services Resource Access Manager (Amazon Web Services RAM), with pagination support.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const listSharedDNSViews: API.PaginatedOperationMethod<
  ListSharedDNSViewsInput,
  ListSharedDNSViewsOutput,
  ListSharedDNSViewsError,
  Credentials | HttpClient.HttpClient,
  SharedDNSViewSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSharedDNSViewsInput,
  output: ListSharedDNSViewsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSharedDNSViews",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dnsViews",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError = ResourceNotFoundException | CommonErrors;
/**
 * Lists the tags associated with a Route 53 Global Resolver resource.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type TagResourceError =
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Adds or updates tags for a Route 53 Global Resolver resource. Tags are key-value pairs that help you organize and identify your resources.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [ResourceNotFoundException, ServiceQuotaExceededException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Removes tags from a Route 53 Global Resolver resource.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAccessSourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of an access source.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const updateAccessSource: API.OperationMethod<
  UpdateAccessSourceInput,
  UpdateAccessSourceOutput,
  UpdateAccessSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAccessSourceInput,
  output: UpdateAccessSourceOutput,
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
  operationName: "UpdateAccessSource",
}));

export type UpdateAccessTokenError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of an access token.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const updateAccessToken: API.OperationMethod<
  UpdateAccessTokenInput,
  UpdateAccessTokenOutput,
  UpdateAccessTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAccessTokenInput,
  output: UpdateAccessTokenOutput,
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
  operationName: "UpdateAccessToken",
}));

export type UpdateDNSViewError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of a DNS view.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const updateDNSView: API.OperationMethod<
  UpdateDNSViewInput,
  UpdateDNSViewOutput,
  UpdateDNSViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDNSViewInput,
  output: UpdateDNSViewOutput,
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
  operationName: "UpdateDNSView",
}));

export type UpdateFirewallDomainsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a DNS Firewall domain list from an array of specified domains.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const updateFirewallDomains: API.OperationMethod<
  UpdateFirewallDomainsInput,
  UpdateFirewallDomainsOutput,
  UpdateFirewallDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateFirewallDomainsInput,
  output: UpdateFirewallDomainsOutput,
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
  operationName: "UpdateFirewallDomains",
}));

export type UpdateFirewallRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of a DNS firewall rule.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const updateFirewallRule: API.OperationMethod<
  UpdateFirewallRuleInput,
  UpdateFirewallRuleOutput,
  UpdateFirewallRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateFirewallRuleInput,
  output: UpdateFirewallRuleOutput,
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
  operationName: "UpdateFirewallRule",
}));

export type UpdateGlobalResolverError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of a Route 53 Global Resolver instance. You can modify the name, description, and observability Region.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const updateGlobalResolver: API.OperationMethod<
  UpdateGlobalResolverInput,
  UpdateGlobalResolverOutput,
  UpdateGlobalResolverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateGlobalResolverInput,
  output: UpdateGlobalResolverOutput,
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
  operationName: "UpdateGlobalResolver",
}));

export type UpdateHostedZoneAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of a hosted zone association.
 *
 * Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 */
export const updateHostedZoneAssociation: API.OperationMethod<
  UpdateHostedZoneAssociationInput,
  UpdateHostedZoneAssociationOutput,
  UpdateHostedZoneAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateHostedZoneAssociationInput,
  output: UpdateHostedZoneAssociationOutput,
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
  operationName: "UpdateHostedZoneAssociation",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          hostedZoneId: S.String.pipe(T.HttpLabel("hostedZoneId")),
          resourceArn: S.String,
          name: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/hosted-zone-associations/{hostedZoneId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AssociateHostedZoneInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          resourceArn: S.String,
          hostedZoneId: S.String,
          hostedZoneName: S.String,
          name: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: HostedZoneAssociationStatus,
        }),
      ).annotate({
        identifier: "AssociateHostedZoneOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          action: FirewallRuleAction,
          blockOverrideDnsType: S.optional(BlockOverrideDnsQueryType),
          blockOverrideDomain: S.optional(S.String),
          blockOverrideTtl: S.optional(S.Number),
          blockResponse: S.optional(FirewallBlockResponse),
          clientToken: S.String,
          confidenceThreshold: S.optional(ConfidenceThreshold),
          description: S.optional(S.String),
          dnsAdvancedProtection: S.optional(DnsAdvancedProtection),
          firewallDomainListId: S.optional(S.String),
          name: S.String,
          priority: S.optional(S.Number),
          dnsViewId: S.String,
          qType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchCreateFirewallRuleInputItem",
      });
    case 3:
      return S.Array(BatchCreateFirewallRuleInputItem);
    case 4:
      return S.suspend(() =>
        S.Struct({ firewallRules: BatchCreateFirewallRuleInputItems }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/firewall-rules/batch-create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchCreateFirewallRuleInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          action: FirewallRuleAction,
          blockOverrideDnsType: S.optional(BlockOverrideDnsQueryType),
          blockOverrideDomain: S.optional(S.String),
          blockOverrideTtl: S.optional(S.Number),
          blockResponse: S.optional(FirewallBlockResponse),
          clientToken: S.String,
          confidenceThreshold: S.optional(ConfidenceThreshold),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(S.String),
          dnsAdvancedProtection: S.optional(DnsAdvancedProtection),
          firewallDomainListId: S.optional(S.String),
          id: S.optional(S.String),
          managedDomainListName: S.optional(S.String),
          name: S.String,
          priority: S.optional(S.Number),
          dnsViewId: S.String,
          queryType: S.optional(S.String),
          status: S.optional(CRResourceStatus),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "BatchCreateFirewallRuleResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          firewallRule: BatchCreateFirewallRuleResult,
          code: S.Number,
          message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchCreateFirewallRuleOutputItem",
      });
    case 7:
      return S.Array(BatchCreateFirewallRuleOutputItem);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          failures: BatchCreateFirewallRuleOutputItems,
          successes: BatchCreateFirewallRuleOutputItems,
        }),
      ).annotate({
        identifier: "BatchCreateFirewallRuleOutput",
      });
    case 1:
      return S.suspend(() => S.Struct({ firewallRuleId: S.String })).annotate({
        identifier: "BatchDeleteFirewallRuleInputItem",
      });
    case 2:
      return S.Array(BatchDeleteFirewallRuleInputItem);
    case 3:
      return S.suspend(() =>
        S.Struct({ firewallRules: BatchDeleteFirewallRuleInputItems }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/firewall-rules/batch-delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDeleteFirewallRuleInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String),
          id: S.String,
          name: S.optional(S.String),
          status: S.optional(CRResourceStatus),
        }),
      ).annotate({
        identifier: "BatchDeleteFirewallRuleResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          firewallRule: BatchDeleteFirewallRuleResult,
          code: S.Number,
          message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchDeleteFirewallRuleOutputItem",
      });
    case 6:
      return S.Array(BatchDeleteFirewallRuleOutputItem);
    case 7:
      return S.suspend(() =>
        S.Struct({
          failures: BatchDeleteFirewallRuleOutputItems,
          successes: BatchDeleteFirewallRuleOutputItems,
        }),
      ).annotate({
        identifier: "BatchDeleteFirewallRuleOutput",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(FirewallRuleAction),
          blockOverrideDnsType: S.optional(BlockOverrideDnsQueryType),
          blockOverrideDomain: S.optional(S.String),
          blockOverrideTtl: S.optional(S.Number),
          blockResponse: S.optional(FirewallBlockResponse),
          confidenceThreshold: S.optional(ConfidenceThreshold),
          description: S.optional(S.String),
          dnsAdvancedProtection: S.optional(DnsAdvancedProtection),
          firewallRuleId: S.String,
          name: S.optional(S.String),
          priority: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "BatchUpdateFirewallRuleInputItem",
      });
    case 1:
      return S.Array(BatchUpdateFirewallRuleInputItem);
    case 2:
      return S.suspend(() =>
        S.Struct({ firewallRules: BatchUpdateFirewallRuleInputItems }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/firewall-rules/batch-update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchUpdateFirewallRuleInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(FirewallRuleAction),
          blockOverrideDnsType: S.optional(BlockOverrideDnsQueryType),
          blockOverrideDomain: S.optional(S.String),
          blockOverrideTtl: S.optional(S.Number),
          blockResponse: S.optional(FirewallBlockResponse),
          clientToken: S.optional(S.String),
          confidenceThreshold: S.optional(ConfidenceThreshold),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(S.String),
          dnsAdvancedProtection: S.optional(DnsAdvancedProtection),
          firewallDomainListId: S.optional(S.String),
          id: S.String,
          name: S.optional(S.String),
          priority: S.optional(S.Number),
          dnsViewId: S.optional(S.String),
          queryType: S.optional(S.String),
          status: S.optional(CRResourceStatus),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "BatchUpdateFirewallRuleResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          firewallRule: BatchUpdateFirewallRuleResult,
          code: S.Number,
          message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchUpdateFirewallRuleOutputItem",
      });
    case 5:
      return S.Array(BatchUpdateFirewallRuleOutputItem);
    case 6:
      return S.suspend(() =>
        S.Struct({
          failures: BatchUpdateFirewallRuleOutputItems,
          successes: BatchUpdateFirewallRuleOutputItems,
        }),
      ).annotate({
        identifier: "BatchUpdateFirewallRuleOutput",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          cidr: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ipAddressType: S.optional(IpAddressType),
          name: S.optional(S.String),
          dnsViewId: S.String,
          protocol: DnsProtocol,
          tags: S.optional(Tags),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/access-sources" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateAccessSourceInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          cidr: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          id: S.String,
          ipAddressType: IpAddressType,
          name: S.optional(S.String),
          dnsViewId: S.String,
          protocol: DnsProtocol,
          status: CRResourceStatus,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "CreateAccessSourceOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          dnsViewId: S.String.pipe(T.HttpLabel("dnsViewId")),
          expiresAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          name: S.optional(S.String),
          tags: S.optional(Tags),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tokens/{dnsViewId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateAccessTokenInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          clientToken: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          dnsViewId: S.String,
          expiresAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          name: S.optional(S.String),
          status: TokenStatus,
          value: SensitiveString,
        }),
      ).annotate({ identifier: "CreateAccessTokenOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          globalResolverId: S.String.pipe(T.HttpLabel("globalResolverId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          name: S.String,
          dnssecValidation: S.optional(DnsSecValidationType),
          ednsClientSubnet: S.optional(EdnsClientSubnetType),
          firewallRulesFailOpen: S.optional(FirewallRulesFailOpenType),
          description: S.optional(S.String),
          tags: S.optional(Tags),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/dns-views/{globalResolverId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateDNSViewInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          clientToken: S.optional(S.String),
          dnssecValidation: DnsSecValidationType,
          ednsClientSubnet: EdnsClientSubnetType,
          firewallRulesFailOpen: FirewallRulesFailOpenType,
          name: S.String,
          description: S.optional(S.String),
          globalResolverId: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: ProfileResourceStatus,
        }),
      ).annotate({ identifier: "CreateDNSViewOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          globalResolverId: S.String.pipe(T.HttpLabel("globalResolverId")),
          description: S.optional(S.String),
          name: S.String,
          tags: S.optional(Tags),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/firewall-domain-lists/{globalResolverId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateFirewallDomainListInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          globalResolverId: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          description: S.optional(S.String),
          domainCount: S.Number,
          id: S.String,
          name: S.String,
          status: CRResourceStatus,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "CreateFirewallDomainListOutput",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          action: FirewallRuleAction,
          blockOverrideDnsType: S.optional(BlockOverrideDnsQueryType),
          blockOverrideDomain: S.optional(S.String),
          blockOverrideTtl: S.optional(S.Number),
          blockResponse: S.optional(FirewallBlockResponse),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          confidenceThreshold: S.optional(ConfidenceThreshold),
          description: S.optional(S.String),
          dnsAdvancedProtection: S.optional(DnsAdvancedProtection),
          firewallDomainListId: S.optional(S.String),
          name: S.String,
          priority: S.optional(S.Number),
          dnsViewId: S.String,
          qType: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/firewall-rules" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateFirewallRuleInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          action: FirewallRuleAction,
          blockOverrideDnsType: S.optional(BlockOverrideDnsQueryType),
          blockOverrideDomain: S.optional(S.String),
          blockOverrideTtl: S.optional(S.Number),
          blockResponse: S.optional(FirewallBlockResponse),
          confidenceThreshold: S.optional(ConfidenceThreshold),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          description: S.optional(S.String),
          dnsAdvancedProtection: S.optional(DnsAdvancedProtection),
          firewallDomainListId: S.optional(S.String),
          id: S.String,
          name: S.String,
          priority: S.Number,
          dnsViewId: S.String,
          queryType: S.optional(S.String),
          status: CRResourceStatus,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "CreateFirewallRuleOutput" });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          description: S.optional(S.String),
          ipAddressType: S.optional(GlobalResolverIpAddressType),
          name: S.String,
          observabilityRegion: S.optional(S.String),
          regions: Regions,
          tags: S.optional(Tags),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/global-resolver" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateGlobalResolverInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          clientToken: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          description: S.optional(S.String),
          dnsName: S.String,
          ipAddressType: S.optional(GlobalResolverIpAddressType),
          ipv4Addresses: IPv4Addresses,
          ipv6Addresses: S.optional(IPv6Addresses),
          name: S.String,
          observabilityRegion: S.optional(S.String),
          regions: Regions,
          status: CRResourceStatus,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "CreateGlobalResolverOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ accessSourceId: S.String.pipe(T.HttpLabel("accessSourceId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/access-sources/{accessSourceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAccessSourceInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ accessTokenId: S.String.pipe(T.HttpLabel("accessTokenId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tokens/{accessTokenId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAccessTokenInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          status: TokenStatus,
          deletedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "DeleteAccessTokenOutput" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ dnsViewId: S.String.pipe(T.HttpLabel("dnsViewId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/dns-views/{dnsViewId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDNSViewInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ firewallDomainListId: S.String.pipe(T.HttpLabel("firewallDomainListId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/firewall-domain-lists/{firewallDomainListId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteFirewallDomainListInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String, id: S.String, name: S.String, status: CRResourceStatus }),
      ).annotate({
        identifier: "DeleteFirewallDomainListOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ firewallRuleId: S.String.pipe(T.HttpLabel("firewallRuleId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/firewall-rules/{firewallRuleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteFirewallRuleInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ globalResolverId: S.String.pipe(T.HttpLabel("globalResolverId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/global-resolver/{globalResolverId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteGlobalResolverInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          clientToken: S.String,
          dnsName: S.String,
          observabilityRegion: S.optional(S.String),
          name: S.String,
          description: S.optional(S.String),
          regions: Regions,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: CRResourceStatus,
          ipv4Addresses: IPv4Addresses,
          ipv6Addresses: S.optional(IPv6Addresses),
          ipAddressType: S.optional(GlobalResolverIpAddressType),
        }),
      ).annotate({
        identifier: "DeleteGlobalResolverOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ dnsViewId: S.String.pipe(T.HttpLabel("dnsViewId")) }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/dns-views/{dnsViewId}/disable" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DisableDNSViewInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          hostedZoneId: S.String.pipe(T.HttpLabel("hostedZoneId")),
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/hosted-zone-associations/hosted-zone/{hostedZoneId}/resource-arn/{resourceArn+}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateHostedZoneInput",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ dnsViewId: S.String.pipe(T.HttpLabel("dnsViewId")) }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/dns-views/{dnsViewId}/enable" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "EnableDNSViewInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ accessSourceId: S.String.pipe(T.HttpLabel("accessSourceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/access-sources/{accessSourceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAccessSourceInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ accessTokenId: S.String.pipe(T.HttpLabel("accessTokenId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tokens/{accessTokenId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAccessTokenInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          clientToken: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          dnsViewId: S.String,
          expiresAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          globalResolverId: S.String,
          name: S.optional(S.String),
          status: TokenStatus,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          value: SensitiveString,
        }),
      ).annotate({ identifier: "GetAccessTokenOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ dnsViewId: S.String.pipe(T.HttpLabel("dnsViewId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/dns-views/{dnsViewId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDNSViewInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ firewallDomainListId: S.String.pipe(T.HttpLabel("firewallDomainListId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/firewall-domain-lists/{firewallDomainListId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetFirewallDomainListInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          globalResolverId: S.String,
          clientToken: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          description: S.optional(S.String),
          domainCount: S.Number,
          id: S.String,
          name: S.String,
          status: CRResourceStatus,
          statusMessage: S.optional(S.String),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "GetFirewallDomainListOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ firewallRuleId: S.String.pipe(T.HttpLabel("firewallRuleId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/firewall-rules/{firewallRuleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFirewallRuleInput" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ globalResolverId: S.String.pipe(T.HttpLabel("globalResolverId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/global-resolver/{globalResolverId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetGlobalResolverInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          clientToken: S.String,
          dnsName: S.String,
          observabilityRegion: S.optional(S.String),
          name: S.String,
          description: S.optional(S.String),
          regions: Regions,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: CRResourceStatus,
          ipv4Addresses: IPv4Addresses,
          ipv6Addresses: S.optional(IPv6Addresses),
          ipAddressType: S.optional(GlobalResolverIpAddressType),
        }),
      ).annotate({ identifier: "GetGlobalResolverOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          hostedZoneAssociationId: S.String.pipe(T.HttpLabel("hostedZoneAssociationId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/hosted-zone-associations/{hostedZoneAssociationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetHostedZoneAssociationInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          managedFirewallDomainListId: S.String.pipe(T.HttpLabel("managedFirewallDomainListId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/managed-firewall-domain-lists/{managedFirewallDomainListId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetManagedFirewallDomainListInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          id: S.String,
          name: S.String,
          managedListType: S.String,
        }),
      ).annotate({
        identifier: "GetManagedFirewallDomainListOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainFileUrl: S.String,
          firewallDomainListId: S.String.pipe(T.HttpLabel("firewallDomainListId")),
          operation: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/firewall-domain-lists/{firewallDomainListId}/domains/s3_file_url",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ImportFirewallDomainsInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ id: S.String, name: S.String, status: CRResourceStatus }),
      ).annotate({
        identifier: "ImportFirewallDomainsOutput",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ Strings.pipe(S.optional));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
          filters: S.optional(Filters).pipe(T.HttpQueryParams()),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/access-sources" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAccessSourcesInput" });
    case 1:
      return S.Array(AccessSourcesItem);
    case 2:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), accessSources: AccessSources }),
      ).annotate({ identifier: "ListAccessSourcesOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
          dnsViewId: S.String.pipe(T.HttpLabel("dnsViewId")),
          filters: S.optional(Filters).pipe(T.HttpQueryParams()),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tokens/dns-view/{dnsViewId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAccessTokensInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          dnsViewId: S.String,
          expiresAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          globalResolverId: S.String,
          name: S.optional(S.String),
          status: TokenStatus,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "AccessTokenItem" });
    case 5:
      return S.Array(AccessTokenItem);
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), accessTokens: S.optional(AccessTokens) }),
      ).annotate({ identifier: "ListAccessTokensOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
          globalResolverId: S.String.pipe(T.HttpLabel("globalResolverId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/dns-views/resolver/{globalResolverId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListDNSViewsInput" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          clientToken: S.String,
          dnssecValidation: DnsSecValidationType,
          ednsClientSubnet: EdnsClientSubnetType,
          firewallRulesFailOpen: FirewallRulesFailOpenType,
          name: S.String,
          description: S.optional(S.String),
          globalResolverId: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: ProfileResourceStatus,
        }),
      ).annotate({ identifier: "DNSViewSummary" });
    case 1:
      return S.Array(DNSViewSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), dnsViews: DNSViews }),
      ).annotate({ identifier: "ListDNSViewsOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
          globalResolverId: S.optional(S.String).pipe(T.HttpQuery("global_resolver_id")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/firewall-domain-lists" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListFirewallDomainListsInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          globalResolverId: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          description: S.optional(S.String),
          id: S.String,
          name: S.String,
          status: CRResourceStatus,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "FirewallDomainListsItem" });
    case 5:
      return S.Array(FirewallDomainListsItem);
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), firewallDomainLists: FirewallDomainLists }),
      ).annotate({
        identifier: "ListFirewallDomainListsOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
          firewallDomainListId: S.String.pipe(T.HttpLabel("firewallDomainListId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/firewall-domain-lists/{firewallDomainListId}/domains" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListFirewallDomainsInput" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), domains: Domains }),
      ).annotate({
        identifier: "ListFirewallDomainsOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
          dnsViewId: S.String.pipe(T.HttpQuery("dnsview_id")),
          filters: S.optional(Filters).pipe(T.HttpQueryParams()),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/firewall-rules" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListFirewallRulesInput" });
    case 2:
      return S.Array(FirewallRulesItem);
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), firewallRules: FirewallRules }),
      ).annotate({ identifier: "ListFirewallRulesOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/global-resolver" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListGlobalResolversInput" });
    case 5:
      return S.Array(GlobalResolversItem);
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), globalResolvers: GlobalResolvers }),
      ).annotate({
        identifier: "ListGlobalResolversOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
          resourceArn: S.optional(S.String).pipe(T.HttpQuery("resourceArn")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/hosted-zone-associations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListHostedZoneAssociationsInput",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(HostedZoneAssociationSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          hostedZoneAssociations: HostedZoneAssociations,
        }),
      ).annotate({
        identifier: "ListHostedZoneAssociationsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
          managedFirewallDomainListType: S.String.pipe(
            T.HttpLabel("managedFirewallDomainListType"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/list-managed-firewall-domain-lists/{managedFirewallDomainListType}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListManagedFirewallDomainListsInput",
      });
    case 3:
      return S.Array(ManagedFirewallDomainListsItem);
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          managedFirewallDomainLists: ManagedFirewallDomainLists,
        }),
      ).annotate({
        identifier: "ListManagedFirewallDomainListsOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/shared-dns-views" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListSharedDNSViewsInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          clientToken: S.String,
          dnssecValidation: DnsSecValidationType,
          ednsClientSubnet: EdnsClientSubnetType,
          firewallRulesFailOpen: FirewallRulesFailOpenType,
          name: S.String,
          description: S.optional(S.String),
          globalResolverId: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: ProfileResourceStatus,
          ownerAccountId: S.String,
        }),
      ).annotate({ identifier: "SharedDNSViewSummary" });
    case 7:
      return S.Array(SharedDNSViewSummary);
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), dnsViews: SharedDNSViews }),
      ).annotate({ identifier: "ListSharedDNSViewsOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/get-all-tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ tags: S.optional(Tags) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: Tags }).pipe(
          T.all(T.Http({ method: "POST", uri: "/tag-resource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tagKeys: TagKeys }).pipe(
          T.all(T.Http({ method: "POST", uri: "/untag-resource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          accessSourceId: S.String.pipe(T.HttpLabel("accessSourceId")),
          cidr: S.optional(S.String),
          ipAddressType: S.optional(IpAddressType),
          name: S.optional(S.String),
          protocol: S.optional(DnsProtocol),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/access-sources/{accessSourceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAccessSourceInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          accessTokenId: S.String.pipe(T.HttpLabel("accessTokenId")),
          name: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/tokens/{accessTokenId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAccessTokenInput" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ id: S.String, name: S.String })).annotate({
        identifier: "UpdateAccessTokenOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          dnsViewId: S.String.pipe(T.HttpLabel("dnsViewId")),
          name: S.optional(S.String),
          description: S.optional(S.String),
          dnssecValidation: S.optional(DnsSecValidationType),
          ednsClientSubnet: S.optional(EdnsClientSubnetType),
          firewallRulesFailOpen: S.optional(FirewallRulesFailOpenType),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/dns-views/{dnsViewId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDNSViewInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domains: Domains,
          firewallDomainListId: S.String.pipe(T.HttpLabel("firewallDomainListId")),
          operation: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/firewall-domain-lists/{firewallDomainListId}/domains",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateFirewallDomainsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(FirewallRuleAction),
          blockOverrideDnsType: S.optional(BlockOverrideDnsQueryType),
          blockOverrideDomain: S.optional(S.String),
          blockOverrideTtl: S.optional(S.Number),
          blockResponse: S.optional(FirewallBlockResponse),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          confidenceThreshold: S.optional(ConfidenceThreshold),
          description: S.optional(S.String),
          dnsAdvancedProtection: S.optional(DnsAdvancedProtection),
          firewallRuleId: S.String.pipe(T.HttpLabel("firewallRuleId")),
          name: S.optional(S.String),
          priority: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/firewall-rules/{firewallRuleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateFirewallRuleInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          globalResolverId: S.String.pipe(T.HttpLabel("globalResolverId")),
          name: S.optional(S.String),
          observabilityRegion: S.optional(S.String),
          description: S.optional(S.String),
          ipAddressType: S.optional(GlobalResolverIpAddressType),
          regions: S.optional(Regions),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/global-resolver/{globalResolverId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateGlobalResolverInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          hostedZoneAssociationId: S.String.pipe(T.HttpLabel("hostedZoneAssociationId")),
          name: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/hosted-zone-associations/{hostedZoneAssociationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateHostedZoneAssociationInput",
      });
    case 6:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 7:
      return S.Array(ValidationExceptionField);
  }
}
