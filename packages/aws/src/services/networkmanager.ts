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
  sdkId: "NetworkManager",
  serviceShapeName: "NetworkManager",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "networkmanager" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-07-05");
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
  const _p0 = () => ({ authSchemes: [{ name: "sigv4", signingRegion: "us-west-2" }] });
  const _p1 = () => ({ authSchemes: [{ name: "sigv4", signingRegion: "us-gov-west-1" }] });
  const _p2 = (_0: unknown) => ({
    authSchemes: [{ name: "sigv4", signingRegion: `${_.getAttr(_0, "implicitGlobalRegion")}` }],
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
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e("https://networkmanager.us-west-2.amazonaws.com", _p0(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e("https://networkmanager.us-west-2.api.aws", _p0(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e("https://networkmanager-fips.us-west-2.amazonaws.com", _p0(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e("https://networkmanager-fips.us-west-2.api.aws", _p0(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e("https://networkmanager.us-gov-west-1.amazonaws.com", _p1(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e("https://networkmanager.us-gov-west-1.api.aws", _p1(), {});
        }
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://networkmanager-fips.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
              _p2(PartitionResult),
              {},
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true && UseDualStack === false) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://networkmanager-fips.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
              _p2(PartitionResult),
              {},
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseFIPS === false && UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://networkmanager.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
              _p2(PartitionResult),
              {},
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://networkmanager.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
          _p2(PartitionResult),
          {},
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
      ResourceId: S.String,
      ResourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class CoreNetworkPolicyException
  extends /*@__PURE__*/ S.TaggedError<CoreNetworkPolicyException>()(
    "CoreNetworkPolicyException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      Errors: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => CoreNetworkPolicyErrorList).annotate({
          identifier: "CoreNetworkPolicyErrorList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      RetryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: S.String,
      ResourceType: S.String,
      Context: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ExceptionContextMap).annotate({
          identifier: "ExceptionContextMap",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
      ResourceType: /*@__PURE__*/ S.optional(S.String),
      LimitCode: S.String,
      ServiceCode: S.String,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      RetryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionReason).annotate({
          identifier: "ValidationExceptionReason",
        }),
      ),
      Fields: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type AttachmentId = string;
export interface AcceptAttachmentRequest {
  AttachmentId: string;
}
const AcceptAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AttachmentId: S.String.pipe(T.HttpLabel("AttachmentId")) }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/attachments/{AttachmentId}/accept" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "AcceptAttachmentRequest" }) as any as S.Schema<AcceptAttachmentRequest>;
export type CoreNetworkId = string;
export type CoreNetworkArn = string;
export type AWSAccountId = string;
export type AttachmentType =
  | "CONNECT"
  | "SITE_TO_SITE_VPN"
  | "VPC"
  | "DIRECT_CONNECT_GATEWAY"
  | "TRANSIT_GATEWAY_ROUTE_TABLE"
  | (string & {});
const AttachmentType = S.String;

export type AttachmentState =
  | "REJECTED"
  | "PENDING_ATTACHMENT_ACCEPTANCE"
  | "CREATING"
  | "FAILED"
  | "AVAILABLE"
  | "UPDATING"
  | "PENDING_NETWORK_UPDATE"
  | "PENDING_TAG_ACCEPTANCE"
  | "DELETING"
  | (string & {});
const AttachmentState = S.String;

export type ExternalRegionCode = string;
export type ExternalRegionCodeList = string[];
const ExternalRegionCodeList = /*@__PURE__*/ S.Array(S.String);
export type ResourceArn = string;
export type ConstrainedString = string;
export type NetworkFunctionGroupName = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key?: string;
  Value?: string;
}
const Tag = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
).annotate({ identifier: "Tag" }) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ S.Array(Tag);
export interface ProposedSegmentChange {
  Tags?: Tag[];
  AttachmentPolicyRuleNumber?: number;
  SegmentName?: string;
}
const ProposedSegmentChange = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Tags: S.optional(TagList),
    AttachmentPolicyRuleNumber: S.optional(S.Number),
    SegmentName: S.optional(S.String),
  }),
).annotate({ identifier: "ProposedSegmentChange" }) as any as S.Schema<ProposedSegmentChange>;
export interface ProposedNetworkFunctionGroupChange {
  Tags?: Tag[];
  AttachmentPolicyRuleNumber?: number;
  NetworkFunctionGroupName?: string;
}
const ProposedNetworkFunctionGroupChange = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Tags: S.optional(TagList),
    AttachmentPolicyRuleNumber: S.optional(S.Number),
    NetworkFunctionGroupName: S.optional(S.String),
  }),
).annotate({
  identifier: "ProposedNetworkFunctionGroupChange",
}) as any as S.Schema<ProposedNetworkFunctionGroupChange>;
export type AttachmentErrorCode =
  | "VPC_NOT_FOUND"
  | "SUBNET_NOT_FOUND"
  | "SUBNET_DUPLICATED_IN_AVAILABILITY_ZONE"
  | "SUBNET_NO_FREE_ADDRESSES"
  | "SUBNET_UNSUPPORTED_AVAILABILITY_ZONE"
  | "SUBNET_NO_IPV6_CIDRS"
  | "VPN_CONNECTION_NOT_FOUND"
  | "MAXIMUM_NO_ENCAP_LIMIT_EXCEEDED"
  | "DIRECT_CONNECT_GATEWAY_NOT_FOUND"
  | "DIRECT_CONNECT_GATEWAY_EXISTING_ATTACHMENTS"
  | "DIRECT_CONNECT_GATEWAY_NO_PRIVATE_VIF"
  | "VPN_EXISTING_ASSOCIATIONS"
  | "VPC_UNSUPPORTED_FEATURES"
  | (string & {});
const AttachmentErrorCode = S.String;

export type ServerSideString = string;
export interface AttachmentError {
  Code?: AttachmentErrorCode;
  Message?: string;
  ResourceArn?: string;
  RequestId?: string;
}
const AttachmentError = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Code: S.optional(AttachmentErrorCode),
    Message: S.optional(S.String),
    ResourceArn: S.optional(S.String),
    RequestId: S.optional(S.String),
  }),
).annotate({ identifier: "AttachmentError" }) as any as S.Schema<AttachmentError>;
export type AttachmentErrorList = AttachmentError[];
const AttachmentErrorList = /*@__PURE__*/ S.Array(AttachmentError);
export interface Attachment {
  CoreNetworkId?: string;
  CoreNetworkArn?: string;
  AttachmentId?: string;
  OwnerAccountId?: string;
  AttachmentType?: AttachmentType;
  State?: AttachmentState;
  EdgeLocation?: string;
  EdgeLocations?: string[];
  ResourceArn?: string;
  AttachmentPolicyRuleNumber?: number;
  SegmentName?: string;
  NetworkFunctionGroupName?: string;
  Tags?: Tag[];
  ProposedSegmentChange?: ProposedSegmentChange;
  ProposedNetworkFunctionGroupChange?: ProposedNetworkFunctionGroupChange;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  LastModificationErrors?: AttachmentError[];
}
const Attachment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.optional(S.String),
    CoreNetworkArn: S.optional(S.String),
    AttachmentId: S.optional(S.String),
    OwnerAccountId: S.optional(S.String),
    AttachmentType: S.optional(AttachmentType),
    State: S.optional(AttachmentState),
    EdgeLocation: S.optional(S.String),
    EdgeLocations: S.optional(ExternalRegionCodeList),
    ResourceArn: S.optional(S.String),
    AttachmentPolicyRuleNumber: S.optional(S.Number),
    SegmentName: S.optional(S.String),
    NetworkFunctionGroupName: S.optional(S.String),
    Tags: S.optional(TagList),
    ProposedSegmentChange: S.optional(ProposedSegmentChange),
    ProposedNetworkFunctionGroupChange: S.optional(ProposedNetworkFunctionGroupChange),
    CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    LastModificationErrors: S.optional(AttachmentErrorList),
  }),
).annotate({ identifier: "Attachment" }) as any as S.Schema<Attachment>;
export interface AcceptAttachmentResponse {
  Attachment?: Attachment;
}
const AcceptAttachmentResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Attachment: S.optional(Attachment) }),
).annotate({ identifier: "AcceptAttachmentResponse" }) as any as S.Schema<AcceptAttachmentResponse>;
export type GlobalNetworkId = string;
export type ConnectPeerId = string;
export type DeviceId = string;
export type LinkId = string;
export interface AssociateConnectPeerRequest {
  GlobalNetworkId: string;
  ConnectPeerId: string;
  DeviceId: string;
  LinkId?: string;
}
const AssociateConnectPeerRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    ConnectPeerId: S.String,
    DeviceId: S.String,
    LinkId: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/global-networks/{GlobalNetworkId}/connect-peer-associations",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "AssociateConnectPeerRequest",
}) as any as S.Schema<AssociateConnectPeerRequest>;
export type ConnectPeerAssociationState =
  | "PENDING"
  | "AVAILABLE"
  | "DELETING"
  | "DELETED"
  | (string & {});
const ConnectPeerAssociationState = S.String;

export interface ConnectPeerAssociation {
  ConnectPeerId?: string;
  GlobalNetworkId?: string;
  DeviceId?: string;
  LinkId?: string;
  State?: ConnectPeerAssociationState;
}
const ConnectPeerAssociation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ConnectPeerId: S.optional(S.String),
    GlobalNetworkId: S.optional(S.String),
    DeviceId: S.optional(S.String),
    LinkId: S.optional(S.String),
    State: S.optional(ConnectPeerAssociationState),
  }),
).annotate({ identifier: "ConnectPeerAssociation" }) as any as S.Schema<ConnectPeerAssociation>;
export interface AssociateConnectPeerResponse {
  ConnectPeerAssociation?: ConnectPeerAssociation;
}
const AssociateConnectPeerResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ConnectPeerAssociation: S.optional(ConnectPeerAssociation) }),
).annotate({
  identifier: "AssociateConnectPeerResponse",
}) as any as S.Schema<AssociateConnectPeerResponse>;
export type CustomerGatewayArn = string;
export interface AssociateCustomerGatewayRequest {
  CustomerGatewayArn: string;
  GlobalNetworkId: string;
  DeviceId: string;
  LinkId?: string;
}
const AssociateCustomerGatewayRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CustomerGatewayArn: S.String,
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    DeviceId: S.String,
    LinkId: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/global-networks/{GlobalNetworkId}/customer-gateway-associations",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "AssociateCustomerGatewayRequest",
}) as any as S.Schema<AssociateCustomerGatewayRequest>;
export type CustomerGatewayAssociationState =
  | "PENDING"
  | "AVAILABLE"
  | "DELETING"
  | "DELETED"
  | (string & {});
const CustomerGatewayAssociationState = S.String;

export interface CustomerGatewayAssociation {
  CustomerGatewayArn?: string;
  GlobalNetworkId?: string;
  DeviceId?: string;
  LinkId?: string;
  State?: CustomerGatewayAssociationState;
}
const CustomerGatewayAssociation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CustomerGatewayArn: S.optional(S.String),
    GlobalNetworkId: S.optional(S.String),
    DeviceId: S.optional(S.String),
    LinkId: S.optional(S.String),
    State: S.optional(CustomerGatewayAssociationState),
  }),
).annotate({
  identifier: "CustomerGatewayAssociation",
}) as any as S.Schema<CustomerGatewayAssociation>;
export interface AssociateCustomerGatewayResponse {
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}
const AssociateCustomerGatewayResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ CustomerGatewayAssociation: S.optional(CustomerGatewayAssociation) }),
).annotate({
  identifier: "AssociateCustomerGatewayResponse",
}) as any as S.Schema<AssociateCustomerGatewayResponse>;
export interface AssociateLinkRequest {
  GlobalNetworkId: string;
  DeviceId: string;
  LinkId: string;
}
const AssociateLinkRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    DeviceId: S.String,
    LinkId: S.String,
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/global-networks/{GlobalNetworkId}/link-associations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "AssociateLinkRequest" }) as any as S.Schema<AssociateLinkRequest>;
export type LinkAssociationState = "PENDING" | "AVAILABLE" | "DELETING" | "DELETED" | (string & {});
const LinkAssociationState = S.String;

export interface LinkAssociation {
  GlobalNetworkId?: string;
  DeviceId?: string;
  LinkId?: string;
  LinkAssociationState?: LinkAssociationState;
}
const LinkAssociation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.optional(S.String),
    DeviceId: S.optional(S.String),
    LinkId: S.optional(S.String),
    LinkAssociationState: S.optional(LinkAssociationState),
  }),
).annotate({ identifier: "LinkAssociation" }) as any as S.Schema<LinkAssociation>;
export interface AssociateLinkResponse {
  LinkAssociation?: LinkAssociation;
}
const AssociateLinkResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ LinkAssociation: S.optional(LinkAssociation) }),
).annotate({ identifier: "AssociateLinkResponse" }) as any as S.Schema<AssociateLinkResponse>;
export type TransitGatewayConnectPeerArn = string;
export interface AssociateTransitGatewayConnectPeerRequest {
  GlobalNetworkId: string;
  TransitGatewayConnectPeerArn: string;
  DeviceId: string;
  LinkId?: string;
}
const AssociateTransitGatewayConnectPeerRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    TransitGatewayConnectPeerArn: S.String,
    DeviceId: S.String,
    LinkId: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "AssociateTransitGatewayConnectPeerRequest",
}) as any as S.Schema<AssociateTransitGatewayConnectPeerRequest>;
export type TransitGatewayConnectPeerAssociationState =
  | "PENDING"
  | "AVAILABLE"
  | "DELETING"
  | "DELETED"
  | (string & {});
const TransitGatewayConnectPeerAssociationState = S.String;

export interface TransitGatewayConnectPeerAssociation {
  TransitGatewayConnectPeerArn?: string;
  GlobalNetworkId?: string;
  DeviceId?: string;
  LinkId?: string;
  State?: TransitGatewayConnectPeerAssociationState;
}
const TransitGatewayConnectPeerAssociation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    TransitGatewayConnectPeerArn: S.optional(S.String),
    GlobalNetworkId: S.optional(S.String),
    DeviceId: S.optional(S.String),
    LinkId: S.optional(S.String),
    State: S.optional(TransitGatewayConnectPeerAssociationState),
  }),
).annotate({
  identifier: "TransitGatewayConnectPeerAssociation",
}) as any as S.Schema<TransitGatewayConnectPeerAssociation>;
export interface AssociateTransitGatewayConnectPeerResponse {
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
}
const AssociateTransitGatewayConnectPeerResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    TransitGatewayConnectPeerAssociation: S.optional(TransitGatewayConnectPeerAssociation),
  }),
).annotate({
  identifier: "AssociateTransitGatewayConnectPeerResponse",
}) as any as S.Schema<AssociateTransitGatewayConnectPeerResponse>;
export type TunnelProtocol = "GRE" | "NO_ENCAP" | (string & {});
const TunnelProtocol = S.String;

export interface ConnectAttachmentOptions {
  Protocol?: TunnelProtocol;
}
const ConnectAttachmentOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Protocol: S.optional(TunnelProtocol) }),
).annotate({ identifier: "ConnectAttachmentOptions" }) as any as S.Schema<ConnectAttachmentOptions>;
export type ClientToken = string;
export interface CreateConnectAttachmentRequest {
  CoreNetworkId: string;
  EdgeLocation: string;
  TransportAttachmentId: string;
  RoutingPolicyLabel?: string;
  Options: ConnectAttachmentOptions;
  Tags?: Tag[];
  ClientToken?: string;
}
const CreateConnectAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String,
    EdgeLocation: S.String,
    TransportAttachmentId: S.String,
    RoutingPolicyLabel: S.optional(S.String),
    Options: ConnectAttachmentOptions,
    Tags: S.optional(TagList),
    ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/connect-attachments" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "CreateConnectAttachmentRequest",
}) as any as S.Schema<CreateConnectAttachmentRequest>;
export interface ConnectAttachment {
  Attachment?: Attachment;
  TransportAttachmentId?: string;
  Options?: ConnectAttachmentOptions;
}
const ConnectAttachment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Attachment: S.optional(Attachment),
    TransportAttachmentId: S.optional(S.String),
    Options: S.optional(ConnectAttachmentOptions),
  }),
).annotate({ identifier: "ConnectAttachment" }) as any as S.Schema<ConnectAttachment>;
export interface CreateConnectAttachmentResponse {
  ConnectAttachment?: ConnectAttachment;
}
const CreateConnectAttachmentResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ConnectAttachment: S.optional(ConnectAttachment) }),
).annotate({
  identifier: "CreateConnectAttachmentResponse",
}) as any as S.Schema<CreateConnectAttachmentResponse>;
export interface CreateConnectionRequest {
  GlobalNetworkId: string;
  DeviceId: string;
  ConnectedDeviceId: string;
  LinkId?: string;
  ConnectedLinkId?: string;
  Description?: string;
  Tags?: Tag[];
}
const CreateConnectionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    DeviceId: S.String,
    ConnectedDeviceId: S.String,
    LinkId: S.optional(S.String),
    ConnectedLinkId: S.optional(S.String),
    Description: S.optional(S.String),
    Tags: S.optional(TagList),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/global-networks/{GlobalNetworkId}/connections" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "CreateConnectionRequest" }) as any as S.Schema<CreateConnectionRequest>;
export type ConnectionId = string;
export type ConnectionArn = string;
export type ConnectionState = "PENDING" | "AVAILABLE" | "DELETING" | "UPDATING" | (string & {});
const ConnectionState = S.String;

export interface Connection {
  ConnectionId?: string;
  ConnectionArn?: string;
  GlobalNetworkId?: string;
  DeviceId?: string;
  ConnectedDeviceId?: string;
  LinkId?: string;
  ConnectedLinkId?: string;
  Description?: string;
  CreatedAt?: Date;
  State?: ConnectionState;
  Tags?: Tag[];
}
const Connection = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ConnectionId: S.optional(S.String),
    ConnectionArn: S.optional(S.String),
    GlobalNetworkId: S.optional(S.String),
    DeviceId: S.optional(S.String),
    ConnectedDeviceId: S.optional(S.String),
    LinkId: S.optional(S.String),
    ConnectedLinkId: S.optional(S.String),
    Description: S.optional(S.String),
    CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    State: S.optional(ConnectionState),
    Tags: S.optional(TagList),
  }),
).annotate({ identifier: "Connection" }) as any as S.Schema<Connection>;
export interface CreateConnectionResponse {
  Connection?: Connection;
}
const CreateConnectionResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Connection: S.optional(Connection) }),
).annotate({ identifier: "CreateConnectionResponse" }) as any as S.Schema<CreateConnectionResponse>;
export type IPAddress = string;
export interface BgpOptions {
  PeerAsn?: number;
}
const BgpOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ PeerAsn: S.optional(S.Number) }),
).annotate({ identifier: "BgpOptions" }) as any as S.Schema<BgpOptions>;
export type ConstrainedStringList = string[];
const ConstrainedStringList = ExternalRegionCodeList as any as S.Schema<ConstrainedStringList>;
export type SubnetArn = string;
export interface CreateConnectPeerRequest {
  ConnectAttachmentId: string;
  CoreNetworkAddress?: string;
  PeerAddress: string;
  BgpOptions?: BgpOptions;
  InsideCidrBlocks?: string[];
  Tags?: Tag[];
  ClientToken?: string;
  SubnetArn?: string;
}
const CreateConnectPeerRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ConnectAttachmentId: S.String,
    CoreNetworkAddress: S.optional(S.String),
    PeerAddress: S.String,
    BgpOptions: S.optional(BgpOptions),
    InsideCidrBlocks: S.optional(ConstrainedStringList),
    Tags: S.optional(TagList),
    ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    SubnetArn: S.optional(S.String),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/connect-peers" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "CreateConnectPeerRequest" }) as any as S.Schema<CreateConnectPeerRequest>;
export type ConnectPeerState = "CREATING" | "FAILED" | "AVAILABLE" | "DELETING" | (string & {});
const ConnectPeerState = S.String;

export interface ConnectPeerBgpConfiguration {
  CoreNetworkAsn?: number;
  PeerAsn?: number;
  CoreNetworkAddress?: string;
  PeerAddress?: string;
}
const ConnectPeerBgpConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkAsn: S.optional(S.Number),
    PeerAsn: S.optional(S.Number),
    CoreNetworkAddress: S.optional(S.String),
    PeerAddress: S.optional(S.String),
  }),
).annotate({
  identifier: "ConnectPeerBgpConfiguration",
}) as any as S.Schema<ConnectPeerBgpConfiguration>;
export type ConnectPeerBgpConfigurationList = ConnectPeerBgpConfiguration[];
const ConnectPeerBgpConfigurationList = /*@__PURE__*/ S.Array(ConnectPeerBgpConfiguration);
export interface ConnectPeerConfiguration {
  CoreNetworkAddress?: string;
  PeerAddress?: string;
  InsideCidrBlocks?: string[];
  Protocol?: TunnelProtocol;
  BgpConfigurations?: ConnectPeerBgpConfiguration[];
}
const ConnectPeerConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkAddress: S.optional(S.String),
    PeerAddress: S.optional(S.String),
    InsideCidrBlocks: S.optional(ConstrainedStringList),
    Protocol: S.optional(TunnelProtocol),
    BgpConfigurations: S.optional(ConnectPeerBgpConfigurationList),
  }),
).annotate({ identifier: "ConnectPeerConfiguration" }) as any as S.Schema<ConnectPeerConfiguration>;
export type ConnectPeerErrorCode =
  | "EDGE_LOCATION_NO_FREE_IPS"
  | "EDGE_LOCATION_PEER_DUPLICATE"
  | "SUBNET_NOT_FOUND"
  | "IP_OUTSIDE_SUBNET_CIDR_RANGE"
  | "INVALID_INSIDE_CIDR_BLOCK"
  | "NO_ASSOCIATED_CIDR_BLOCK"
  | (string & {});
export interface ConnectPeerError {
  Code?: ConnectPeerErrorCode;
  Message?: string;
  ResourceArn?: string;
  RequestId?: string;
}
export type ConnectPeerErrorList = ConnectPeerError[];
const ConnectPeerErrorList = AttachmentErrorList as any as S.Schema<ConnectPeerErrorList>;
export interface ConnectPeer {
  CoreNetworkId?: string;
  ConnectAttachmentId?: string;
  ConnectPeerId?: string;
  EdgeLocation?: string;
  State?: ConnectPeerState;
  CreatedAt?: Date;
  Configuration?: ConnectPeerConfiguration;
  Tags?: Tag[];
  SubnetArn?: string;
  LastModificationErrors?: ConnectPeerError[];
}
const ConnectPeer = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.optional(S.String),
    ConnectAttachmentId: S.optional(S.String),
    ConnectPeerId: S.optional(S.String),
    EdgeLocation: S.optional(S.String),
    State: S.optional(ConnectPeerState),
    CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    Configuration: S.optional(ConnectPeerConfiguration),
    Tags: S.optional(TagList),
    SubnetArn: S.optional(S.String),
    LastModificationErrors: S.optional(ConnectPeerErrorList),
  }),
).annotate({ identifier: "ConnectPeer" }) as any as S.Schema<ConnectPeer>;
export interface CreateConnectPeerResponse {
  ConnectPeer?: ConnectPeer;
}
const CreateConnectPeerResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ConnectPeer: S.optional(ConnectPeer) }),
).annotate({
  identifier: "CreateConnectPeerResponse",
}) as any as S.Schema<CreateConnectPeerResponse>;
export type CoreNetworkPolicyDocument = string;
export interface CreateCoreNetworkRequest {
  GlobalNetworkId: string;
  Description?: string;
  Tags?: Tag[];
  PolicyDocument?: string;
  ClientToken?: string;
}
const CreateCoreNetworkRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String,
    Description: S.optional(S.String),
    Tags: S.optional(TagList),
    PolicyDocument: S.optional(S.String),
    ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/core-networks" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "CreateCoreNetworkRequest" }) as any as S.Schema<CreateCoreNetworkRequest>;
export type CoreNetworkState = "CREATING" | "UPDATING" | "AVAILABLE" | "DELETING" | (string & {});
const CoreNetworkState = S.String;

export interface CoreNetworkSegment {
  Name?: string;
  EdgeLocations?: string[];
  SharedSegments?: string[];
}
const CoreNetworkSegment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Name: S.optional(S.String),
    EdgeLocations: S.optional(ExternalRegionCodeList),
    SharedSegments: S.optional(ConstrainedStringList),
  }),
).annotate({ identifier: "CoreNetworkSegment" }) as any as S.Schema<CoreNetworkSegment>;
export type CoreNetworkSegmentList = CoreNetworkSegment[];
const CoreNetworkSegmentList = /*@__PURE__*/ S.Array(CoreNetworkSegment);
export interface ServiceInsertionSegments {
  SendVia?: string[];
  SendTo?: string[];
}
const ServiceInsertionSegments = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    SendVia: S.optional(ConstrainedStringList),
    SendTo: S.optional(ConstrainedStringList),
  }),
).annotate({ identifier: "ServiceInsertionSegments" }) as any as S.Schema<ServiceInsertionSegments>;
export interface CoreNetworkNetworkFunctionGroup {
  Name?: string;
  EdgeLocations?: string[];
  Segments?: ServiceInsertionSegments;
}
const CoreNetworkNetworkFunctionGroup = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Name: S.optional(S.String),
    EdgeLocations: S.optional(ExternalRegionCodeList),
    Segments: S.optional(ServiceInsertionSegments),
  }),
).annotate({
  identifier: "CoreNetworkNetworkFunctionGroup",
}) as any as S.Schema<CoreNetworkNetworkFunctionGroup>;
export type CoreNetworkNetworkFunctionGroupList = CoreNetworkNetworkFunctionGroup[];
const CoreNetworkNetworkFunctionGroupList = /*@__PURE__*/ S.Array(CoreNetworkNetworkFunctionGroup);
export interface CoreNetworkEdge {
  EdgeLocation?: string;
  Asn?: number;
  InsideCidrBlocks?: string[];
}
const CoreNetworkEdge = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    EdgeLocation: S.optional(S.String),
    Asn: S.optional(S.Number),
    InsideCidrBlocks: S.optional(ConstrainedStringList),
  }),
).annotate({ identifier: "CoreNetworkEdge" }) as any as S.Schema<CoreNetworkEdge>;
export type CoreNetworkEdgeList = CoreNetworkEdge[];
const CoreNetworkEdgeList = /*@__PURE__*/ S.Array(CoreNetworkEdge);
export interface CoreNetwork {
  GlobalNetworkId?: string;
  CoreNetworkId?: string;
  CoreNetworkArn?: string;
  Description?: string;
  CreatedAt?: Date;
  State?: CoreNetworkState;
  Segments?: CoreNetworkSegment[];
  NetworkFunctionGroups?: CoreNetworkNetworkFunctionGroup[];
  Edges?: CoreNetworkEdge[];
  Tags?: Tag[];
}
const CoreNetwork = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.optional(S.String),
    CoreNetworkId: S.optional(S.String),
    CoreNetworkArn: S.optional(S.String),
    Description: S.optional(S.String),
    CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    State: S.optional(CoreNetworkState),
    Segments: S.optional(CoreNetworkSegmentList),
    NetworkFunctionGroups: S.optional(CoreNetworkNetworkFunctionGroupList),
    Edges: S.optional(CoreNetworkEdgeList),
    Tags: S.optional(TagList),
  }),
).annotate({ identifier: "CoreNetwork" }) as any as S.Schema<CoreNetwork>;
export interface CreateCoreNetworkResponse {
  CoreNetwork?: CoreNetwork;
}
const CreateCoreNetworkResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ CoreNetwork: S.optional(CoreNetwork) }),
).annotate({
  identifier: "CreateCoreNetworkResponse",
}) as any as S.Schema<CreateCoreNetworkResponse>;
export type PrefixListArn = string;
export interface CreateCoreNetworkPrefixListAssociationRequest {
  CoreNetworkId: string;
  PrefixListArn: string;
  PrefixListAlias: string;
  ClientToken?: string;
}
const CreateCoreNetworkPrefixListAssociationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String,
    PrefixListArn: S.String,
    PrefixListAlias: S.String,
    ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/prefix-list" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "CreateCoreNetworkPrefixListAssociationRequest",
}) as any as S.Schema<CreateCoreNetworkPrefixListAssociationRequest>;
export interface CreateCoreNetworkPrefixListAssociationResponse {
  CoreNetworkId?: string;
  PrefixListArn?: string;
  PrefixListAlias?: string;
}
const CreateCoreNetworkPrefixListAssociationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.optional(S.String),
    PrefixListArn: S.optional(S.String),
    PrefixListAlias: S.optional(S.String),
  }),
).annotate({
  identifier: "CreateCoreNetworkPrefixListAssociationResponse",
}) as any as S.Schema<CreateCoreNetworkPrefixListAssociationResponse>;
export interface AWSLocation {
  Zone?: string;
  SubnetArn?: string;
}
const AWSLocation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Zone: S.optional(S.String), SubnetArn: S.optional(S.String) }),
).annotate({ identifier: "AWSLocation" }) as any as S.Schema<AWSLocation>;
export interface Location {
  Address?: string;
  Latitude?: string;
  Longitude?: string;
}
const Location = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Address: S.optional(S.String),
    Latitude: S.optional(S.String),
    Longitude: S.optional(S.String),
  }),
).annotate({ identifier: "Location" }) as any as S.Schema<Location>;
export type SiteId = string;
export interface CreateDeviceRequest {
  GlobalNetworkId: string;
  AWSLocation?: AWSLocation;
  Description?: string;
  Type?: string;
  Vendor?: string;
  Model?: string;
  SerialNumber?: string;
  Location?: Location;
  SiteId?: string;
  Tags?: Tag[];
}
const CreateDeviceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    AWSLocation: S.optional(AWSLocation),
    Description: S.optional(S.String),
    Type: S.optional(S.String),
    Vendor: S.optional(S.String),
    Model: S.optional(S.String),
    SerialNumber: S.optional(S.String),
    Location: S.optional(Location),
    SiteId: S.optional(S.String),
    Tags: S.optional(TagList),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/global-networks/{GlobalNetworkId}/devices" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "CreateDeviceRequest" }) as any as S.Schema<CreateDeviceRequest>;
export type DeviceArn = string;
export type DeviceState = "PENDING" | "AVAILABLE" | "DELETING" | "UPDATING" | (string & {});
const DeviceState = S.String;

export interface Device {
  DeviceId?: string;
  DeviceArn?: string;
  GlobalNetworkId?: string;
  AWSLocation?: AWSLocation;
  Description?: string;
  Type?: string;
  Vendor?: string;
  Model?: string;
  SerialNumber?: string;
  Location?: Location;
  SiteId?: string;
  CreatedAt?: Date;
  State?: DeviceState;
  Tags?: Tag[];
}
const Device = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DeviceId: S.optional(S.String),
    DeviceArn: S.optional(S.String),
    GlobalNetworkId: S.optional(S.String),
    AWSLocation: S.optional(AWSLocation),
    Description: S.optional(S.String),
    Type: S.optional(S.String),
    Vendor: S.optional(S.String),
    Model: S.optional(S.String),
    SerialNumber: S.optional(S.String),
    Location: S.optional(Location),
    SiteId: S.optional(S.String),
    CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    State: S.optional(DeviceState),
    Tags: S.optional(TagList),
  }),
).annotate({ identifier: "Device" }) as any as S.Schema<Device>;
export interface CreateDeviceResponse {
  Device?: Device;
}
const CreateDeviceResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Device: S.optional(Device) }),
).annotate({ identifier: "CreateDeviceResponse" }) as any as S.Schema<CreateDeviceResponse>;
export type DirectConnectGatewayArn = string;
export interface CreateDirectConnectGatewayAttachmentRequest {
  CoreNetworkId: string;
  DirectConnectGatewayArn: string;
  RoutingPolicyLabel?: string;
  EdgeLocations: string[];
  Tags?: Tag[];
  ClientToken?: string;
}
const CreateDirectConnectGatewayAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String,
    DirectConnectGatewayArn: S.String,
    RoutingPolicyLabel: S.optional(S.String),
    EdgeLocations: ExternalRegionCodeList,
    Tags: S.optional(TagList),
    ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/direct-connect-gateway-attachments" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateDirectConnectGatewayAttachmentRequest",
}) as any as S.Schema<CreateDirectConnectGatewayAttachmentRequest>;
export interface DirectConnectGatewayAttachment {
  Attachment?: Attachment;
  DirectConnectGatewayArn?: string;
}
const DirectConnectGatewayAttachment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Attachment: S.optional(Attachment), DirectConnectGatewayArn: S.optional(S.String) }),
).annotate({
  identifier: "DirectConnectGatewayAttachment",
}) as any as S.Schema<DirectConnectGatewayAttachment>;
export interface CreateDirectConnectGatewayAttachmentResponse {
  DirectConnectGatewayAttachment?: DirectConnectGatewayAttachment;
}
const CreateDirectConnectGatewayAttachmentResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ DirectConnectGatewayAttachment: S.optional(DirectConnectGatewayAttachment) }),
).annotate({
  identifier: "CreateDirectConnectGatewayAttachmentResponse",
}) as any as S.Schema<CreateDirectConnectGatewayAttachmentResponse>;
export interface CreateGlobalNetworkRequest {
  Description?: string;
  Tags?: Tag[];
}
const CreateGlobalNetworkRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Description: S.optional(S.String), Tags: S.optional(TagList) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/global-networks" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "CreateGlobalNetworkRequest",
}) as any as S.Schema<CreateGlobalNetworkRequest>;
export type GlobalNetworkArn = string;
export type GlobalNetworkState = "PENDING" | "AVAILABLE" | "DELETING" | "UPDATING" | (string & {});
const GlobalNetworkState = S.String;

export interface GlobalNetwork {
  GlobalNetworkId?: string;
  GlobalNetworkArn?: string;
  Description?: string;
  CreatedAt?: Date;
  State?: GlobalNetworkState;
  Tags?: Tag[];
}
const GlobalNetwork = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.optional(S.String),
    GlobalNetworkArn: S.optional(S.String),
    Description: S.optional(S.String),
    CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    State: S.optional(GlobalNetworkState),
    Tags: S.optional(TagList),
  }),
).annotate({ identifier: "GlobalNetwork" }) as any as S.Schema<GlobalNetwork>;
export interface CreateGlobalNetworkResponse {
  GlobalNetwork?: GlobalNetwork;
}
const CreateGlobalNetworkResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GlobalNetwork: S.optional(GlobalNetwork) }),
).annotate({
  identifier: "CreateGlobalNetworkResponse",
}) as any as S.Schema<CreateGlobalNetworkResponse>;
export interface Bandwidth {
  UploadSpeed?: number;
  DownloadSpeed?: number;
}
const Bandwidth = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ UploadSpeed: S.optional(S.Number), DownloadSpeed: S.optional(S.Number) }),
).annotate({ identifier: "Bandwidth" }) as any as S.Schema<Bandwidth>;
export interface CreateLinkRequest {
  GlobalNetworkId: string;
  Description?: string;
  Type?: string;
  Bandwidth: Bandwidth;
  Provider?: string;
  SiteId: string;
  Tags?: Tag[];
}
const CreateLinkRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    Description: S.optional(S.String),
    Type: S.optional(S.String),
    Bandwidth: Bandwidth,
    Provider: S.optional(S.String),
    SiteId: S.String,
    Tags: S.optional(TagList),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/global-networks/{GlobalNetworkId}/links" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "CreateLinkRequest" }) as any as S.Schema<CreateLinkRequest>;
export type LinkArn = string;
export type LinkState = "PENDING" | "AVAILABLE" | "DELETING" | "UPDATING" | (string & {});
const LinkState = S.String;

export interface Link {
  LinkId?: string;
  LinkArn?: string;
  GlobalNetworkId?: string;
  SiteId?: string;
  Description?: string;
  Type?: string;
  Bandwidth?: Bandwidth;
  Provider?: string;
  CreatedAt?: Date;
  State?: LinkState;
  Tags?: Tag[];
}
const Link = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    LinkId: S.optional(S.String),
    LinkArn: S.optional(S.String),
    GlobalNetworkId: S.optional(S.String),
    SiteId: S.optional(S.String),
    Description: S.optional(S.String),
    Type: S.optional(S.String),
    Bandwidth: S.optional(Bandwidth),
    Provider: S.optional(S.String),
    CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    State: S.optional(LinkState),
    Tags: S.optional(TagList),
  }),
).annotate({ identifier: "Link" }) as any as S.Schema<Link>;
export interface CreateLinkResponse {
  Link?: Link;
}
const CreateLinkResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Link: S.optional(Link) }),
).annotate({ identifier: "CreateLinkResponse" }) as any as S.Schema<CreateLinkResponse>;
export interface CreateSiteRequest {
  GlobalNetworkId: string;
  Description?: string;
  Location?: Location;
  Tags?: Tag[];
}
const CreateSiteRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    Description: S.optional(S.String),
    Location: S.optional(Location),
    Tags: S.optional(TagList),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/global-networks/{GlobalNetworkId}/sites" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "CreateSiteRequest" }) as any as S.Schema<CreateSiteRequest>;
export type SiteArn = string;
export type SiteState = "PENDING" | "AVAILABLE" | "DELETING" | "UPDATING" | (string & {});
const SiteState = S.String;

export interface Site {
  SiteId?: string;
  SiteArn?: string;
  GlobalNetworkId?: string;
  Description?: string;
  Location?: Location;
  CreatedAt?: Date;
  State?: SiteState;
  Tags?: Tag[];
}
const Site = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    SiteId: S.optional(S.String),
    SiteArn: S.optional(S.String),
    GlobalNetworkId: S.optional(S.String),
    Description: S.optional(S.String),
    Location: S.optional(Location),
    CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    State: S.optional(SiteState),
    Tags: S.optional(TagList),
  }),
).annotate({ identifier: "Site" }) as any as S.Schema<Site>;
export interface CreateSiteResponse {
  Site?: Site;
}
const CreateSiteResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Site: S.optional(Site) }),
).annotate({ identifier: "CreateSiteResponse" }) as any as S.Schema<CreateSiteResponse>;
export type VpnConnectionArn = string;
export interface CreateSiteToSiteVpnAttachmentRequest {
  CoreNetworkId: string;
  VpnConnectionArn: string;
  RoutingPolicyLabel?: string;
  Tags?: Tag[];
  ClientToken?: string;
}
const CreateSiteToSiteVpnAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String,
    VpnConnectionArn: S.String,
    RoutingPolicyLabel: S.optional(S.String),
    Tags: S.optional(TagList),
    ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/site-to-site-vpn-attachments" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateSiteToSiteVpnAttachmentRequest",
}) as any as S.Schema<CreateSiteToSiteVpnAttachmentRequest>;
export interface SiteToSiteVpnAttachment {
  Attachment?: Attachment;
  VpnConnectionArn?: string;
}
const SiteToSiteVpnAttachment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Attachment: S.optional(Attachment), VpnConnectionArn: S.optional(S.String) }),
).annotate({ identifier: "SiteToSiteVpnAttachment" }) as any as S.Schema<SiteToSiteVpnAttachment>;
export interface CreateSiteToSiteVpnAttachmentResponse {
  SiteToSiteVpnAttachment?: SiteToSiteVpnAttachment;
}
const CreateSiteToSiteVpnAttachmentResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ SiteToSiteVpnAttachment: S.optional(SiteToSiteVpnAttachment) }),
).annotate({
  identifier: "CreateSiteToSiteVpnAttachmentResponse",
}) as any as S.Schema<CreateSiteToSiteVpnAttachmentResponse>;
export type TransitGatewayArn = string;
export interface CreateTransitGatewayPeeringRequest {
  CoreNetworkId: string;
  TransitGatewayArn: string;
  Tags?: Tag[];
  ClientToken?: string;
}
const CreateTransitGatewayPeeringRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String,
    TransitGatewayArn: S.String,
    Tags: S.optional(TagList),
    ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/transit-gateway-peerings" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateTransitGatewayPeeringRequest",
}) as any as S.Schema<CreateTransitGatewayPeeringRequest>;
export type PeeringId = string;
export type PeeringType = "TRANSIT_GATEWAY" | (string & {});
const PeeringType = S.String;

export type PeeringState = "CREATING" | "FAILED" | "AVAILABLE" | "DELETING" | (string & {});
const PeeringState = S.String;

export type PeeringErrorCode =
  | "TRANSIT_GATEWAY_NOT_FOUND"
  | "TRANSIT_GATEWAY_PEERS_LIMIT_EXCEEDED"
  | "MISSING_PERMISSIONS"
  | "INTERNAL_ERROR"
  | "EDGE_LOCATION_PEER_DUPLICATE"
  | "INVALID_TRANSIT_GATEWAY_STATE"
  | (string & {});
const PeeringErrorCode = S.String;

export interface PermissionsErrorContext {
  MissingPermission?: string;
}
const PermissionsErrorContext = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ MissingPermission: S.optional(S.String) }),
).annotate({ identifier: "PermissionsErrorContext" }) as any as S.Schema<PermissionsErrorContext>;
export interface PeeringError {
  Code?: PeeringErrorCode;
  Message?: string;
  ResourceArn?: string;
  RequestId?: string;
  MissingPermissionsContext?: PermissionsErrorContext;
}
const PeeringError = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Code: S.optional(PeeringErrorCode),
    Message: S.optional(S.String),
    ResourceArn: S.optional(S.String),
    RequestId: S.optional(S.String),
    MissingPermissionsContext: S.optional(PermissionsErrorContext),
  }),
).annotate({ identifier: "PeeringError" }) as any as S.Schema<PeeringError>;
export type PeeringErrorList = PeeringError[];
const PeeringErrorList = /*@__PURE__*/ S.Array(PeeringError);
export interface Peering {
  CoreNetworkId?: string;
  CoreNetworkArn?: string;
  PeeringId?: string;
  OwnerAccountId?: string;
  PeeringType?: PeeringType;
  State?: PeeringState;
  EdgeLocation?: string;
  ResourceArn?: string;
  Tags?: Tag[];
  CreatedAt?: Date;
  LastModificationErrors?: PeeringError[];
}
const Peering = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.optional(S.String),
    CoreNetworkArn: S.optional(S.String),
    PeeringId: S.optional(S.String),
    OwnerAccountId: S.optional(S.String),
    PeeringType: S.optional(PeeringType),
    State: S.optional(PeeringState),
    EdgeLocation: S.optional(S.String),
    ResourceArn: S.optional(S.String),
    Tags: S.optional(TagList),
    CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    LastModificationErrors: S.optional(PeeringErrorList),
  }),
).annotate({ identifier: "Peering" }) as any as S.Schema<Peering>;
export type TransitGatewayPeeringAttachmentId = string;
export interface TransitGatewayPeering {
  Peering?: Peering;
  TransitGatewayArn?: string;
  TransitGatewayPeeringAttachmentId?: string;
}
const TransitGatewayPeering = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Peering: S.optional(Peering),
    TransitGatewayArn: S.optional(S.String),
    TransitGatewayPeeringAttachmentId: S.optional(S.String),
  }),
).annotate({ identifier: "TransitGatewayPeering" }) as any as S.Schema<TransitGatewayPeering>;
export interface CreateTransitGatewayPeeringResponse {
  TransitGatewayPeering?: TransitGatewayPeering;
}
const CreateTransitGatewayPeeringResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ TransitGatewayPeering: S.optional(TransitGatewayPeering) }),
).annotate({
  identifier: "CreateTransitGatewayPeeringResponse",
}) as any as S.Schema<CreateTransitGatewayPeeringResponse>;
export type TransitGatewayRouteTableArn = string;
export interface CreateTransitGatewayRouteTableAttachmentRequest {
  PeeringId: string;
  TransitGatewayRouteTableArn: string;
  RoutingPolicyLabel?: string;
  Tags?: Tag[];
  ClientToken?: string;
}
const CreateTransitGatewayRouteTableAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PeeringId: S.String,
    TransitGatewayRouteTableArn: S.String,
    RoutingPolicyLabel: S.optional(S.String),
    Tags: S.optional(TagList),
    ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/transit-gateway-route-table-attachments" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateTransitGatewayRouteTableAttachmentRequest",
}) as any as S.Schema<CreateTransitGatewayRouteTableAttachmentRequest>;
export interface TransitGatewayRouteTableAttachment {
  Attachment?: Attachment;
  PeeringId?: string;
  TransitGatewayRouteTableArn?: string;
}
const TransitGatewayRouteTableAttachment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Attachment: S.optional(Attachment),
    PeeringId: S.optional(S.String),
    TransitGatewayRouteTableArn: S.optional(S.String),
  }),
).annotate({
  identifier: "TransitGatewayRouteTableAttachment",
}) as any as S.Schema<TransitGatewayRouteTableAttachment>;
export interface CreateTransitGatewayRouteTableAttachmentResponse {
  TransitGatewayRouteTableAttachment?: TransitGatewayRouteTableAttachment;
}
const CreateTransitGatewayRouteTableAttachmentResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ TransitGatewayRouteTableAttachment: S.optional(TransitGatewayRouteTableAttachment) }),
).annotate({
  identifier: "CreateTransitGatewayRouteTableAttachmentResponse",
}) as any as S.Schema<CreateTransitGatewayRouteTableAttachmentResponse>;
export type VpcArn = string;
export type SubnetArnList = string[];
const SubnetArnList = ExternalRegionCodeList as any as S.Schema<SubnetArnList>;
export interface VpcOptions {
  Ipv6Support?: boolean;
  ApplianceModeSupport?: boolean;
  DnsSupport?: boolean;
  SecurityGroupReferencingSupport?: boolean;
}
const VpcOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Ipv6Support: S.optional(S.Boolean),
    ApplianceModeSupport: S.optional(S.Boolean),
    DnsSupport: S.optional(S.Boolean),
    SecurityGroupReferencingSupport: S.optional(S.Boolean),
  }),
).annotate({ identifier: "VpcOptions" }) as any as S.Schema<VpcOptions>;
export interface CreateVpcAttachmentRequest {
  CoreNetworkId: string;
  VpcArn: string;
  SubnetArns: string[];
  Options?: VpcOptions;
  RoutingPolicyLabel?: string;
  Tags?: Tag[];
  ClientToken?: string;
}
const CreateVpcAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String,
    VpcArn: S.String,
    SubnetArns: SubnetArnList,
    Options: S.optional(VpcOptions),
    RoutingPolicyLabel: S.optional(S.String),
    Tags: S.optional(TagList),
    ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/vpc-attachments" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "CreateVpcAttachmentRequest",
}) as any as S.Schema<CreateVpcAttachmentRequest>;
export interface VpcAttachment {
  Attachment?: Attachment;
  SubnetArns?: string[];
  Options?: VpcOptions;
}
const VpcAttachment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Attachment: S.optional(Attachment),
    SubnetArns: S.optional(SubnetArnList),
    Options: S.optional(VpcOptions),
  }),
).annotate({ identifier: "VpcAttachment" }) as any as S.Schema<VpcAttachment>;
export interface CreateVpcAttachmentResponse {
  VpcAttachment?: VpcAttachment;
}
const CreateVpcAttachmentResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ VpcAttachment: S.optional(VpcAttachment) }),
).annotate({
  identifier: "CreateVpcAttachmentResponse",
}) as any as S.Schema<CreateVpcAttachmentResponse>;
export interface DeleteAttachmentRequest {
  AttachmentId: string;
}
const DeleteAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AttachmentId: S.String.pipe(T.HttpLabel("AttachmentId")) }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/attachments/{AttachmentId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "DeleteAttachmentRequest" }) as any as S.Schema<DeleteAttachmentRequest>;
export interface DeleteAttachmentResponse {
  Attachment?: Attachment;
}
const DeleteAttachmentResponse =
  AcceptAttachmentResponse as any as S.Schema<DeleteAttachmentResponse>;
export interface DeleteConnectionRequest {
  GlobalNetworkId: string;
  ConnectionId: string;
}
const DeleteConnectionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    ConnectionId: S.String.pipe(T.HttpLabel("ConnectionId")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/global-networks/{GlobalNetworkId}/connections/{ConnectionId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "DeleteConnectionRequest" }) as any as S.Schema<DeleteConnectionRequest>;
export interface DeleteConnectionResponse {
  Connection?: Connection;
}
const DeleteConnectionResponse =
  CreateConnectionResponse as any as S.Schema<DeleteConnectionResponse>;
export interface DeleteConnectPeerRequest {
  ConnectPeerId: string;
}
const DeleteConnectPeerRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ConnectPeerId: S.String.pipe(T.HttpLabel("ConnectPeerId")) }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/connect-peers/{ConnectPeerId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "DeleteConnectPeerRequest" }) as any as S.Schema<DeleteConnectPeerRequest>;
export interface DeleteConnectPeerResponse {
  ConnectPeer?: ConnectPeer;
}
const DeleteConnectPeerResponse =
  CreateConnectPeerResponse as any as S.Schema<DeleteConnectPeerResponse>;
export interface DeleteCoreNetworkRequest {
  CoreNetworkId: string;
}
const DeleteCoreNetworkRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ CoreNetworkId: S.String.pipe(T.HttpLabel("CoreNetworkId")) }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/core-networks/{CoreNetworkId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "DeleteCoreNetworkRequest" }) as any as S.Schema<DeleteCoreNetworkRequest>;
export interface DeleteCoreNetworkResponse {
  CoreNetwork?: CoreNetwork;
}
const DeleteCoreNetworkResponse =
  CreateCoreNetworkResponse as any as S.Schema<DeleteCoreNetworkResponse>;
export interface DeleteCoreNetworkPolicyVersionRequest {
  CoreNetworkId: string;
  PolicyVersionId: number;
}
const DeleteCoreNetworkPolicyVersionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String.pipe(T.HttpLabel("CoreNetworkId")),
    PolicyVersionId: S.Number.pipe(T.HttpLabel("PolicyVersionId")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/core-networks/{CoreNetworkId}/core-network-policy-versions/{PolicyVersionId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteCoreNetworkPolicyVersionRequest",
}) as any as S.Schema<DeleteCoreNetworkPolicyVersionRequest>;
export type CoreNetworkPolicyAlias = "LIVE" | "LATEST" | (string & {});
const CoreNetworkPolicyAlias = S.String;

export type ChangeSetState =
  | "PENDING_GENERATION"
  | "FAILED_GENERATION"
  | "READY_TO_EXECUTE"
  | "EXECUTING"
  | "EXECUTION_SUCCEEDED"
  | "OUT_OF_DATE"
  | (string & {});
const ChangeSetState = S.String;

export interface CoreNetworkPolicyError {
  ErrorCode: string;
  Message: string;
  Path?: string;
}
const CoreNetworkPolicyError = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ErrorCode: S.String, Message: S.String, Path: S.optional(S.String) }),
).annotate({ identifier: "CoreNetworkPolicyError" }) as any as S.Schema<CoreNetworkPolicyError>;
export type CoreNetworkPolicyErrorList = CoreNetworkPolicyError[];
const CoreNetworkPolicyErrorList = /*@__PURE__*/ S.Array(CoreNetworkPolicyError);
export type SynthesizedJsonCoreNetworkPolicyDocument = string;
export interface CoreNetworkPolicy {
  CoreNetworkId?: string;
  PolicyVersionId?: number;
  Alias?: CoreNetworkPolicyAlias;
  Description?: string;
  CreatedAt?: Date;
  ChangeSetState?: ChangeSetState;
  PolicyErrors?: CoreNetworkPolicyError[];
  PolicyDocument?: string;
}
const CoreNetworkPolicy = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.optional(S.String),
    PolicyVersionId: S.optional(S.Number),
    Alias: S.optional(CoreNetworkPolicyAlias),
    Description: S.optional(S.String),
    CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    ChangeSetState: S.optional(ChangeSetState),
    PolicyErrors: S.optional(CoreNetworkPolicyErrorList),
    PolicyDocument: S.optional(S.String),
  }),
).annotate({ identifier: "CoreNetworkPolicy" }) as any as S.Schema<CoreNetworkPolicy>;
export interface DeleteCoreNetworkPolicyVersionResponse {
  CoreNetworkPolicy?: CoreNetworkPolicy;
}
const DeleteCoreNetworkPolicyVersionResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ CoreNetworkPolicy: S.optional(CoreNetworkPolicy) }),
).annotate({
  identifier: "DeleteCoreNetworkPolicyVersionResponse",
}) as any as S.Schema<DeleteCoreNetworkPolicyVersionResponse>;
export interface DeleteCoreNetworkPrefixListAssociationRequest {
  CoreNetworkId: string;
  PrefixListArn: string;
}
const DeleteCoreNetworkPrefixListAssociationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String.pipe(T.HttpLabel("CoreNetworkId")),
    PrefixListArn: S.String.pipe(T.HttpLabel("PrefixListArn")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/prefix-list/{PrefixListArn}/core-network/{CoreNetworkId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteCoreNetworkPrefixListAssociationRequest",
}) as any as S.Schema<DeleteCoreNetworkPrefixListAssociationRequest>;
export interface DeleteCoreNetworkPrefixListAssociationResponse {
  CoreNetworkId?: string;
  PrefixListArn?: string;
}
const DeleteCoreNetworkPrefixListAssociationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ CoreNetworkId: S.optional(S.String), PrefixListArn: S.optional(S.String) }),
).annotate({
  identifier: "DeleteCoreNetworkPrefixListAssociationResponse",
}) as any as S.Schema<DeleteCoreNetworkPrefixListAssociationResponse>;
export interface DeleteDeviceRequest {
  GlobalNetworkId: string;
  DeviceId: string;
}
const DeleteDeviceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    DeviceId: S.String.pipe(T.HttpLabel("DeviceId")),
  }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/global-networks/{GlobalNetworkId}/devices/{DeviceId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "DeleteDeviceRequest" }) as any as S.Schema<DeleteDeviceRequest>;
export interface DeleteDeviceResponse {
  Device?: Device;
}
const DeleteDeviceResponse = CreateDeviceResponse as any as S.Schema<DeleteDeviceResponse>;
export interface DeleteGlobalNetworkRequest {
  GlobalNetworkId: string;
}
const DeleteGlobalNetworkRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")) }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/global-networks/{GlobalNetworkId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteGlobalNetworkRequest",
}) as any as S.Schema<DeleteGlobalNetworkRequest>;
export interface DeleteGlobalNetworkResponse {
  GlobalNetwork?: GlobalNetwork;
}
const DeleteGlobalNetworkResponse =
  CreateGlobalNetworkResponse as any as S.Schema<DeleteGlobalNetworkResponse>;
export interface DeleteLinkRequest {
  GlobalNetworkId: string;
  LinkId: string;
}
const DeleteLinkRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    LinkId: S.String.pipe(T.HttpLabel("LinkId")),
  }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/global-networks/{GlobalNetworkId}/links/{LinkId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "DeleteLinkRequest" }) as any as S.Schema<DeleteLinkRequest>;
export interface DeleteLinkResponse {
  Link?: Link;
}
const DeleteLinkResponse = CreateLinkResponse as any as S.Schema<DeleteLinkResponse>;
export interface DeletePeeringRequest {
  PeeringId: string;
}
const DeletePeeringRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ PeeringId: S.String.pipe(T.HttpLabel("PeeringId")) }).pipe(
    T.all(T.Http({ method: "DELETE", uri: "/peerings/{PeeringId}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "DeletePeeringRequest" }) as any as S.Schema<DeletePeeringRequest>;
export interface DeletePeeringResponse {
  Peering?: Peering;
}
const DeletePeeringResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Peering: S.optional(Peering) }),
).annotate({ identifier: "DeletePeeringResponse" }) as any as S.Schema<DeletePeeringResponse>;
export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
}
const DeleteResourcePolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/resource-policy/{ResourceArn}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteResourcePolicyRequest",
}) as any as S.Schema<DeleteResourcePolicyRequest>;
export interface DeleteResourcePolicyResponse {}
const DeleteResourcePolicyResponse = /*@__PURE__*/ S.suspend(() => S.Struct({})).annotate({
  identifier: "DeleteResourcePolicyResponse",
}) as any as S.Schema<DeleteResourcePolicyResponse>;
export interface DeleteSiteRequest {
  GlobalNetworkId: string;
  SiteId: string;
}
const DeleteSiteRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    SiteId: S.String.pipe(T.HttpLabel("SiteId")),
  }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/global-networks/{GlobalNetworkId}/sites/{SiteId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "DeleteSiteRequest" }) as any as S.Schema<DeleteSiteRequest>;
export interface DeleteSiteResponse {
  Site?: Site;
}
const DeleteSiteResponse = CreateSiteResponse as any as S.Schema<DeleteSiteResponse>;
export interface DeregisterTransitGatewayRequest {
  GlobalNetworkId: string;
  TransitGatewayArn: string;
}
const DeregisterTransitGatewayRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    TransitGatewayArn: S.String.pipe(T.HttpLabel("TransitGatewayArn")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/global-networks/{GlobalNetworkId}/transit-gateway-registrations/{TransitGatewayArn}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeregisterTransitGatewayRequest",
}) as any as S.Schema<DeregisterTransitGatewayRequest>;
export type TransitGatewayRegistrationState =
  | "PENDING"
  | "AVAILABLE"
  | "DELETING"
  | "DELETED"
  | "FAILED"
  | (string & {});
const TransitGatewayRegistrationState = S.String;

export interface TransitGatewayRegistrationStateReason {
  Code?: TransitGatewayRegistrationState;
  Message?: string;
}
const TransitGatewayRegistrationStateReason = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Code: S.optional(TransitGatewayRegistrationState), Message: S.optional(S.String) }),
).annotate({
  identifier: "TransitGatewayRegistrationStateReason",
}) as any as S.Schema<TransitGatewayRegistrationStateReason>;
export interface TransitGatewayRegistration {
  GlobalNetworkId?: string;
  TransitGatewayArn?: string;
  State?: TransitGatewayRegistrationStateReason;
}
const TransitGatewayRegistration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.optional(S.String),
    TransitGatewayArn: S.optional(S.String),
    State: S.optional(TransitGatewayRegistrationStateReason),
  }),
).annotate({
  identifier: "TransitGatewayRegistration",
}) as any as S.Schema<TransitGatewayRegistration>;
export interface DeregisterTransitGatewayResponse {
  TransitGatewayRegistration?: TransitGatewayRegistration;
}
const DeregisterTransitGatewayResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ TransitGatewayRegistration: S.optional(TransitGatewayRegistration) }),
).annotate({
  identifier: "DeregisterTransitGatewayResponse",
}) as any as S.Schema<DeregisterTransitGatewayResponse>;
export type GlobalNetworkIdList = string[];
const GlobalNetworkIdList = ExternalRegionCodeList as any as S.Schema<GlobalNetworkIdList>;
export type MaxResults = number;
export type NextToken = string;
export interface DescribeGlobalNetworksRequest {
  GlobalNetworkIds?: string[];
  MaxResults?: number;
  NextToken?: string;
}
const DescribeGlobalNetworksRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkIds: S.optional(GlobalNetworkIdList).pipe(T.HttpQuery("globalNetworkIds")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(T.all(T.Http({ method: "GET", uri: "/global-networks" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "DescribeGlobalNetworksRequest",
}) as any as S.Schema<DescribeGlobalNetworksRequest>;
export type GlobalNetworkList = GlobalNetwork[];
const GlobalNetworkList = /*@__PURE__*/ S.Array(GlobalNetwork);
export interface DescribeGlobalNetworksResponse {
  GlobalNetworks?: GlobalNetwork[];
  NextToken?: string;
}
const DescribeGlobalNetworksResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GlobalNetworks: S.optional(GlobalNetworkList), NextToken: S.optional(S.String) }),
).annotate({
  identifier: "DescribeGlobalNetworksResponse",
}) as any as S.Schema<DescribeGlobalNetworksResponse>;
export interface DisassociateConnectPeerRequest {
  GlobalNetworkId: string;
  ConnectPeerId: string;
}
const DisassociateConnectPeerRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    ConnectPeerId: S.String.pipe(T.HttpLabel("ConnectPeerId")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/global-networks/{GlobalNetworkId}/connect-peer-associations/{ConnectPeerId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DisassociateConnectPeerRequest",
}) as any as S.Schema<DisassociateConnectPeerRequest>;
export interface DisassociateConnectPeerResponse {
  ConnectPeerAssociation?: ConnectPeerAssociation;
}
const DisassociateConnectPeerResponse =
  AssociateConnectPeerResponse as any as S.Schema<DisassociateConnectPeerResponse>;
export interface DisassociateCustomerGatewayRequest {
  GlobalNetworkId: string;
  CustomerGatewayArn: string;
}
const DisassociateCustomerGatewayRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    CustomerGatewayArn: S.String.pipe(T.HttpLabel("CustomerGatewayArn")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/global-networks/{GlobalNetworkId}/customer-gateway-associations/{CustomerGatewayArn}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DisassociateCustomerGatewayRequest",
}) as any as S.Schema<DisassociateCustomerGatewayRequest>;
export interface DisassociateCustomerGatewayResponse {
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}
const DisassociateCustomerGatewayResponse =
  AssociateCustomerGatewayResponse as any as S.Schema<DisassociateCustomerGatewayResponse>;
export interface DisassociateLinkRequest {
  GlobalNetworkId: string;
  DeviceId: string;
  LinkId: string;
}
const DisassociateLinkRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    DeviceId: S.String.pipe(T.HttpQuery("deviceId")),
    LinkId: S.String.pipe(T.HttpQuery("linkId")),
  }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/global-networks/{GlobalNetworkId}/link-associations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "DisassociateLinkRequest" }) as any as S.Schema<DisassociateLinkRequest>;
export interface DisassociateLinkResponse {
  LinkAssociation?: LinkAssociation;
}
const DisassociateLinkResponse = AssociateLinkResponse as any as S.Schema<DisassociateLinkResponse>;
export interface DisassociateTransitGatewayConnectPeerRequest {
  GlobalNetworkId: string;
  TransitGatewayConnectPeerArn: string;
}
const DisassociateTransitGatewayConnectPeerRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    TransitGatewayConnectPeerArn: S.String.pipe(T.HttpLabel("TransitGatewayConnectPeerArn")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations/{TransitGatewayConnectPeerArn}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DisassociateTransitGatewayConnectPeerRequest",
}) as any as S.Schema<DisassociateTransitGatewayConnectPeerRequest>;
export interface DisassociateTransitGatewayConnectPeerResponse {
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
}
const DisassociateTransitGatewayConnectPeerResponse =
  AssociateTransitGatewayConnectPeerResponse as any as S.Schema<DisassociateTransitGatewayConnectPeerResponse>;
export interface ExecuteCoreNetworkChangeSetRequest {
  CoreNetworkId: string;
  PolicyVersionId: number;
}
const ExecuteCoreNetworkChangeSetRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String.pipe(T.HttpLabel("CoreNetworkId")),
    PolicyVersionId: S.Number.pipe(T.HttpLabel("PolicyVersionId")),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/core-networks/{CoreNetworkId}/core-network-change-sets/{PolicyVersionId}/execute",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ExecuteCoreNetworkChangeSetRequest",
}) as any as S.Schema<ExecuteCoreNetworkChangeSetRequest>;
export interface ExecuteCoreNetworkChangeSetResponse {}
const ExecuteCoreNetworkChangeSetResponse = /*@__PURE__*/ S.suspend(() => S.Struct({})).annotate({
  identifier: "ExecuteCoreNetworkChangeSetResponse",
}) as any as S.Schema<ExecuteCoreNetworkChangeSetResponse>;
export interface GetConnectAttachmentRequest {
  AttachmentId: string;
}
const GetConnectAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AttachmentId: S.String.pipe(T.HttpLabel("AttachmentId")) }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/connect-attachments/{AttachmentId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetConnectAttachmentRequest",
}) as any as S.Schema<GetConnectAttachmentRequest>;
export interface GetConnectAttachmentResponse {
  ConnectAttachment?: ConnectAttachment;
}
const GetConnectAttachmentResponse =
  CreateConnectAttachmentResponse as any as S.Schema<GetConnectAttachmentResponse>;
export type ConnectionIdList = string[];
const ConnectionIdList = ExternalRegionCodeList as any as S.Schema<ConnectionIdList>;
export interface GetConnectionsRequest {
  GlobalNetworkId: string;
  ConnectionIds?: string[];
  DeviceId?: string;
  MaxResults?: number;
  NextToken?: string;
}
const GetConnectionsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    ConnectionIds: S.optional(ConnectionIdList).pipe(T.HttpQuery("connectionIds")),
    DeviceId: S.optional(S.String).pipe(T.HttpQuery("deviceId")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/global-networks/{GlobalNetworkId}/connections" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetConnectionsRequest" }) as any as S.Schema<GetConnectionsRequest>;
export type ConnectionList = Connection[];
const ConnectionList = /*@__PURE__*/ S.Array(Connection);
export interface GetConnectionsResponse {
  Connections?: Connection[];
  NextToken?: string;
}
const GetConnectionsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Connections: S.optional(ConnectionList), NextToken: S.optional(S.String) }),
).annotate({ identifier: "GetConnectionsResponse" }) as any as S.Schema<GetConnectionsResponse>;
export interface GetConnectPeerRequest {
  ConnectPeerId: string;
}
const GetConnectPeerRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ConnectPeerId: S.String.pipe(T.HttpLabel("ConnectPeerId")) }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/connect-peers/{ConnectPeerId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetConnectPeerRequest" }) as any as S.Schema<GetConnectPeerRequest>;
export interface GetConnectPeerResponse {
  ConnectPeer?: ConnectPeer;
}
const GetConnectPeerResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ConnectPeer: S.optional(ConnectPeer) }),
).annotate({ identifier: "GetConnectPeerResponse" }) as any as S.Schema<GetConnectPeerResponse>;
export type ConnectPeerIdList = string[];
const ConnectPeerIdList = ExternalRegionCodeList as any as S.Schema<ConnectPeerIdList>;
export interface GetConnectPeerAssociationsRequest {
  GlobalNetworkId: string;
  ConnectPeerIds?: string[];
  MaxResults?: number;
  NextToken?: string;
}
const GetConnectPeerAssociationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    ConnectPeerIds: S.optional(ConnectPeerIdList).pipe(T.HttpQuery("connectPeerIds")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/global-networks/{GlobalNetworkId}/connect-peer-associations",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetConnectPeerAssociationsRequest",
}) as any as S.Schema<GetConnectPeerAssociationsRequest>;
export type ConnectPeerAssociationList = ConnectPeerAssociation[];
const ConnectPeerAssociationList = /*@__PURE__*/ S.Array(ConnectPeerAssociation);
export interface GetConnectPeerAssociationsResponse {
  ConnectPeerAssociations?: ConnectPeerAssociation[];
  NextToken?: string;
}
const GetConnectPeerAssociationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ConnectPeerAssociations: S.optional(ConnectPeerAssociationList),
    NextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "GetConnectPeerAssociationsResponse",
}) as any as S.Schema<GetConnectPeerAssociationsResponse>;
export interface GetCoreNetworkRequest {
  CoreNetworkId: string;
}
const GetCoreNetworkRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ CoreNetworkId: S.String.pipe(T.HttpLabel("CoreNetworkId")) }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/core-networks/{CoreNetworkId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetCoreNetworkRequest" }) as any as S.Schema<GetCoreNetworkRequest>;
export interface GetCoreNetworkResponse {
  CoreNetwork?: CoreNetwork;
}
const GetCoreNetworkResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ CoreNetwork: S.optional(CoreNetwork) }),
).annotate({ identifier: "GetCoreNetworkResponse" }) as any as S.Schema<GetCoreNetworkResponse>;
export interface GetCoreNetworkChangeEventsRequest {
  CoreNetworkId: string;
  PolicyVersionId: number;
  MaxResults?: number;
  NextToken?: string;
}
const GetCoreNetworkChangeEventsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String.pipe(T.HttpLabel("CoreNetworkId")),
    PolicyVersionId: S.Number.pipe(T.HttpLabel("PolicyVersionId")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/core-networks/{CoreNetworkId}/core-network-change-events/{PolicyVersionId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetCoreNetworkChangeEventsRequest",
}) as any as S.Schema<GetCoreNetworkChangeEventsRequest>;
export type ChangeType =
  | "CORE_NETWORK_SEGMENT"
  | "NETWORK_FUNCTION_GROUP"
  | "CORE_NETWORK_EDGE"
  | "ATTACHMENT_MAPPING"
  | "ATTACHMENT_ROUTE_PROPAGATION"
  | "ATTACHMENT_ROUTE_STATIC"
  | "ROUTING_POLICY"
  | "ROUTING_POLICY_SEGMENT_ASSOCIATION"
  | "ROUTING_POLICY_EDGE_ASSOCIATION"
  | "ROUTING_POLICY_ATTACHMENT_ASSOCIATION"
  | "CORE_NETWORK_CONFIGURATION"
  | "SEGMENTS_CONFIGURATION"
  | "SEGMENT_ACTIONS_CONFIGURATION"
  | "ATTACHMENT_POLICIES_CONFIGURATION"
  | (string & {});
const ChangeType = S.String;

export type ChangeAction = "ADD" | "MODIFY" | "REMOVE" | (string & {});
const ChangeAction = S.String;

export type ChangeStatus = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETE" | "FAILED" | (string & {});
const ChangeStatus = S.String;

export type RoutingPolicyDirection = "inbound" | "outbound" | (string & {});
const RoutingPolicyDirection = S.String;

export interface RoutingPolicyAssociationDetail {
  RoutingPolicyNames?: string[];
  SharedSegments?: string[];
}
const RoutingPolicyAssociationDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RoutingPolicyNames: S.optional(ConstrainedStringList),
    SharedSegments: S.optional(ConstrainedStringList),
  }),
).annotate({
  identifier: "RoutingPolicyAssociationDetail",
}) as any as S.Schema<RoutingPolicyAssociationDetail>;
export type RoutingPolicyAssociationDetailsList = RoutingPolicyAssociationDetail[];
const RoutingPolicyAssociationDetailsList = /*@__PURE__*/ S.Array(RoutingPolicyAssociationDetail);
export interface CoreNetworkChangeEventValues {
  EdgeLocation?: string;
  PeerEdgeLocation?: string;
  RoutingPolicyDirection?: RoutingPolicyDirection;
  SegmentName?: string;
  NetworkFunctionGroupName?: string;
  AttachmentId?: string;
  Cidr?: string;
  RoutingPolicyAssociationDetails?: RoutingPolicyAssociationDetail[];
}
const CoreNetworkChangeEventValues = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    EdgeLocation: S.optional(S.String),
    PeerEdgeLocation: S.optional(S.String),
    RoutingPolicyDirection: S.optional(RoutingPolicyDirection),
    SegmentName: S.optional(S.String),
    NetworkFunctionGroupName: S.optional(S.String),
    AttachmentId: S.optional(S.String),
    Cidr: S.optional(S.String),
    RoutingPolicyAssociationDetails: S.optional(RoutingPolicyAssociationDetailsList),
  }),
).annotate({
  identifier: "CoreNetworkChangeEventValues",
}) as any as S.Schema<CoreNetworkChangeEventValues>;
export interface CoreNetworkChangeEvent {
  Type?: ChangeType;
  Action?: ChangeAction;
  IdentifierPath?: string;
  EventTime?: Date;
  Status?: ChangeStatus;
  Values?: CoreNetworkChangeEventValues;
}
const CoreNetworkChangeEvent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Type: S.optional(ChangeType),
    Action: S.optional(ChangeAction),
    IdentifierPath: S.optional(S.String),
    EventTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    Status: S.optional(ChangeStatus),
    Values: S.optional(CoreNetworkChangeEventValues),
  }),
).annotate({ identifier: "CoreNetworkChangeEvent" }) as any as S.Schema<CoreNetworkChangeEvent>;
export type CoreNetworkChangeEventList = CoreNetworkChangeEvent[];
const CoreNetworkChangeEventList = /*@__PURE__*/ S.Array(CoreNetworkChangeEvent);
export interface GetCoreNetworkChangeEventsResponse {
  CoreNetworkChangeEvents?: CoreNetworkChangeEvent[];
  NextToken?: string;
}
const GetCoreNetworkChangeEventsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkChangeEvents: S.optional(CoreNetworkChangeEventList),
    NextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "GetCoreNetworkChangeEventsResponse",
}) as any as S.Schema<GetCoreNetworkChangeEventsResponse>;
export interface GetCoreNetworkChangeSetRequest {
  CoreNetworkId: string;
  PolicyVersionId: number;
  MaxResults?: number;
  NextToken?: string;
}
const GetCoreNetworkChangeSetRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String.pipe(T.HttpLabel("CoreNetworkId")),
    PolicyVersionId: S.Number.pipe(T.HttpLabel("PolicyVersionId")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/core-networks/{CoreNetworkId}/core-network-change-sets/{PolicyVersionId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetCoreNetworkChangeSetRequest",
}) as any as S.Schema<GetCoreNetworkChangeSetRequest>;
export type SegmentActionServiceInsertion = "send-via" | "send-to" | (string & {});
const SegmentActionServiceInsertion = S.String;

export type SendViaMode = "dual-hop" | "single-hop" | (string & {});
const SendViaMode = S.String;

export type WhenSentToSegmentsList = string[];
const WhenSentToSegmentsList = ExternalRegionCodeList as any as S.Schema<WhenSentToSegmentsList>;
export interface WhenSentTo {
  WhenSentToSegmentsList?: string[];
}
const WhenSentTo = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ WhenSentToSegmentsList: S.optional(WhenSentToSegmentsList) }),
).annotate({ identifier: "WhenSentTo" }) as any as S.Schema<WhenSentTo>;
export interface NetworkFunctionGroup {
  Name?: string;
}
const NetworkFunctionGroup = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Name: S.optional(S.String) }),
).annotate({ identifier: "NetworkFunctionGroup" }) as any as S.Schema<NetworkFunctionGroup>;
export type NetworkFunctionGroupList = NetworkFunctionGroup[];
const NetworkFunctionGroupList = /*@__PURE__*/ S.Array(NetworkFunctionGroup);
export type EdgeSet = string[];
const EdgeSet = ExternalRegionCodeList as any as S.Schema<EdgeSet>;
export type EdgeSetList = string[][];
const EdgeSetList = /*@__PURE__*/ S.Array(EdgeSet);
export interface EdgeOverride {
  EdgeSets?: string[][];
  UseEdge?: string;
}
const EdgeOverride = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ EdgeSets: S.optional(EdgeSetList), UseEdge: S.optional(S.String) }),
).annotate({ identifier: "EdgeOverride" }) as any as S.Schema<EdgeOverride>;
export type WithEdgeOverridesList = EdgeOverride[];
const WithEdgeOverridesList = /*@__PURE__*/ S.Array(EdgeOverride);
export interface Via {
  NetworkFunctionGroups?: NetworkFunctionGroup[];
  WithEdgeOverrides?: EdgeOverride[];
}
const Via = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    NetworkFunctionGroups: S.optional(NetworkFunctionGroupList),
    WithEdgeOverrides: S.optional(WithEdgeOverridesList),
  }),
).annotate({ identifier: "Via" }) as any as S.Schema<Via>;
export interface ServiceInsertionAction {
  Action?: SegmentActionServiceInsertion;
  Mode?: SendViaMode;
  WhenSentTo?: WhenSentTo;
  Via?: Via;
}
const ServiceInsertionAction = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Action: S.optional(SegmentActionServiceInsertion),
    Mode: S.optional(SendViaMode),
    WhenSentTo: S.optional(WhenSentTo),
    Via: S.optional(Via),
  }),
).annotate({ identifier: "ServiceInsertionAction" }) as any as S.Schema<ServiceInsertionAction>;
export type ServiceInsertionActionList = ServiceInsertionAction[];
const ServiceInsertionActionList = /*@__PURE__*/ S.Array(ServiceInsertionAction);
export interface CoreNetworkChangeValues {
  SegmentName?: string;
  NetworkFunctionGroupName?: string;
  EdgeLocations?: string[];
  Asn?: number;
  Cidr?: string;
  DestinationIdentifier?: string;
  InsideCidrBlocks?: string[];
  SharedSegments?: string[];
  ServiceInsertionActions?: ServiceInsertionAction[];
  VpnEcmpSupport?: boolean;
  DnsSupport?: boolean;
  SecurityGroupReferencingSupport?: boolean;
  RoutingPolicyDirection?: RoutingPolicyDirection;
  RoutingPolicy?: string;
  PeerEdgeLocations?: string[];
  AttachmentId?: string;
  RoutingPolicyAssociationDetails?: RoutingPolicyAssociationDetail[];
}
const CoreNetworkChangeValues = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    SegmentName: S.optional(S.String),
    NetworkFunctionGroupName: S.optional(S.String),
    EdgeLocations: S.optional(ExternalRegionCodeList),
    Asn: S.optional(S.Number),
    Cidr: S.optional(S.String),
    DestinationIdentifier: S.optional(S.String),
    InsideCidrBlocks: S.optional(ConstrainedStringList),
    SharedSegments: S.optional(ConstrainedStringList),
    ServiceInsertionActions: S.optional(ServiceInsertionActionList),
    VpnEcmpSupport: S.optional(S.Boolean),
    DnsSupport: S.optional(S.Boolean),
    SecurityGroupReferencingSupport: S.optional(S.Boolean),
    RoutingPolicyDirection: S.optional(RoutingPolicyDirection),
    RoutingPolicy: S.optional(S.String),
    PeerEdgeLocations: S.optional(ExternalRegionCodeList),
    AttachmentId: S.optional(S.String),
    RoutingPolicyAssociationDetails: S.optional(RoutingPolicyAssociationDetailsList),
  }),
).annotate({ identifier: "CoreNetworkChangeValues" }) as any as S.Schema<CoreNetworkChangeValues>;
export interface CoreNetworkChange {
  Type?: ChangeType;
  Action?: ChangeAction;
  Identifier?: string;
  PreviousValues?: CoreNetworkChangeValues;
  NewValues?: CoreNetworkChangeValues;
  IdentifierPath?: string;
}
const CoreNetworkChange = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Type: S.optional(ChangeType),
    Action: S.optional(ChangeAction),
    Identifier: S.optional(S.String),
    PreviousValues: S.optional(CoreNetworkChangeValues),
    NewValues: S.optional(CoreNetworkChangeValues),
    IdentifierPath: S.optional(S.String),
  }),
).annotate({ identifier: "CoreNetworkChange" }) as any as S.Schema<CoreNetworkChange>;
export type CoreNetworkChangeList = CoreNetworkChange[];
const CoreNetworkChangeList = /*@__PURE__*/ S.Array(CoreNetworkChange);
export interface GetCoreNetworkChangeSetResponse {
  CoreNetworkChanges?: CoreNetworkChange[];
  NextToken?: string;
}
const GetCoreNetworkChangeSetResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkChanges: S.optional(CoreNetworkChangeList),
    NextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "GetCoreNetworkChangeSetResponse",
}) as any as S.Schema<GetCoreNetworkChangeSetResponse>;
export interface GetCoreNetworkPolicyRequest {
  CoreNetworkId: string;
  PolicyVersionId?: number;
  Alias?: CoreNetworkPolicyAlias;
}
const GetCoreNetworkPolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String.pipe(T.HttpLabel("CoreNetworkId")),
    PolicyVersionId: S.optional(S.Number).pipe(T.HttpQuery("policyVersionId")),
    Alias: S.optional(CoreNetworkPolicyAlias).pipe(T.HttpQuery("alias")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/core-networks/{CoreNetworkId}/core-network-policy" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetCoreNetworkPolicyRequest",
}) as any as S.Schema<GetCoreNetworkPolicyRequest>;
export interface GetCoreNetworkPolicyResponse {
  CoreNetworkPolicy?: CoreNetworkPolicy;
}
const GetCoreNetworkPolicyResponse =
  DeleteCoreNetworkPolicyVersionResponse as any as S.Schema<GetCoreNetworkPolicyResponse>;
export type CustomerGatewayArnList = string[];
const CustomerGatewayArnList = ExternalRegionCodeList as any as S.Schema<CustomerGatewayArnList>;
export interface GetCustomerGatewayAssociationsRequest {
  GlobalNetworkId: string;
  CustomerGatewayArns?: string[];
  MaxResults?: number;
  NextToken?: string;
}
const GetCustomerGatewayAssociationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    CustomerGatewayArns: S.optional(CustomerGatewayArnList).pipe(
      T.HttpQuery("customerGatewayArns"),
    ),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/global-networks/{GlobalNetworkId}/customer-gateway-associations",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetCustomerGatewayAssociationsRequest",
}) as any as S.Schema<GetCustomerGatewayAssociationsRequest>;
export type CustomerGatewayAssociationList = CustomerGatewayAssociation[];
const CustomerGatewayAssociationList = /*@__PURE__*/ S.Array(CustomerGatewayAssociation);
export interface GetCustomerGatewayAssociationsResponse {
  CustomerGatewayAssociations?: CustomerGatewayAssociation[];
  NextToken?: string;
}
const GetCustomerGatewayAssociationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CustomerGatewayAssociations: S.optional(CustomerGatewayAssociationList),
    NextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "GetCustomerGatewayAssociationsResponse",
}) as any as S.Schema<GetCustomerGatewayAssociationsResponse>;
export type DeviceIdList = string[];
const DeviceIdList = ExternalRegionCodeList as any as S.Schema<DeviceIdList>;
export interface GetDevicesRequest {
  GlobalNetworkId: string;
  DeviceIds?: string[];
  SiteId?: string;
  MaxResults?: number;
  NextToken?: string;
}
const GetDevicesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    DeviceIds: S.optional(DeviceIdList).pipe(T.HttpQuery("deviceIds")),
    SiteId: S.optional(S.String).pipe(T.HttpQuery("siteId")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/global-networks/{GlobalNetworkId}/devices" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetDevicesRequest" }) as any as S.Schema<GetDevicesRequest>;
export type DeviceList = Device[];
const DeviceList = /*@__PURE__*/ S.Array(Device);
export interface GetDevicesResponse {
  Devices?: Device[];
  NextToken?: string;
}
const GetDevicesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Devices: S.optional(DeviceList), NextToken: S.optional(S.String) }),
).annotate({ identifier: "GetDevicesResponse" }) as any as S.Schema<GetDevicesResponse>;
export interface GetDirectConnectGatewayAttachmentRequest {
  AttachmentId: string;
}
const GetDirectConnectGatewayAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AttachmentId: S.String.pipe(T.HttpLabel("AttachmentId")) }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/direct-connect-gateway-attachments/{AttachmentId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetDirectConnectGatewayAttachmentRequest",
}) as any as S.Schema<GetDirectConnectGatewayAttachmentRequest>;
export interface GetDirectConnectGatewayAttachmentResponse {
  DirectConnectGatewayAttachment?: DirectConnectGatewayAttachment;
}
const GetDirectConnectGatewayAttachmentResponse =
  CreateDirectConnectGatewayAttachmentResponse as any as S.Schema<GetDirectConnectGatewayAttachmentResponse>;
export interface GetLinkAssociationsRequest {
  GlobalNetworkId: string;
  DeviceId?: string;
  LinkId?: string;
  MaxResults?: number;
  NextToken?: string;
}
const GetLinkAssociationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    DeviceId: S.optional(S.String).pipe(T.HttpQuery("deviceId")),
    LinkId: S.optional(S.String).pipe(T.HttpQuery("linkId")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/global-networks/{GlobalNetworkId}/link-associations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetLinkAssociationsRequest",
}) as any as S.Schema<GetLinkAssociationsRequest>;
export type LinkAssociationList = LinkAssociation[];
const LinkAssociationList = /*@__PURE__*/ S.Array(LinkAssociation);
export interface GetLinkAssociationsResponse {
  LinkAssociations?: LinkAssociation[];
  NextToken?: string;
}
const GetLinkAssociationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ LinkAssociations: S.optional(LinkAssociationList), NextToken: S.optional(S.String) }),
).annotate({
  identifier: "GetLinkAssociationsResponse",
}) as any as S.Schema<GetLinkAssociationsResponse>;
export type LinkIdList = string[];
const LinkIdList = ExternalRegionCodeList as any as S.Schema<LinkIdList>;
export interface GetLinksRequest {
  GlobalNetworkId: string;
  LinkIds?: string[];
  SiteId?: string;
  Type?: string;
  Provider?: string;
  MaxResults?: number;
  NextToken?: string;
}
const GetLinksRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    LinkIds: S.optional(LinkIdList).pipe(T.HttpQuery("linkIds")),
    SiteId: S.optional(S.String).pipe(T.HttpQuery("siteId")),
    Type: S.optional(S.String).pipe(T.HttpQuery("type")),
    Provider: S.optional(S.String).pipe(T.HttpQuery("provider")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/global-networks/{GlobalNetworkId}/links" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetLinksRequest" }) as any as S.Schema<GetLinksRequest>;
export type LinkList = Link[];
const LinkList = /*@__PURE__*/ S.Array(Link);
export interface GetLinksResponse {
  Links?: Link[];
  NextToken?: string;
}
const GetLinksResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Links: S.optional(LinkList), NextToken: S.optional(S.String) }),
).annotate({ identifier: "GetLinksResponse" }) as any as S.Schema<GetLinksResponse>;
export interface GetNetworkResourceCountsRequest {
  GlobalNetworkId: string;
  ResourceType?: string;
  MaxResults?: number;
  NextToken?: string;
}
const GetNetworkResourceCountsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    ResourceType: S.optional(S.String).pipe(T.HttpQuery("resourceType")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/global-networks/{GlobalNetworkId}/network-resource-count" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetNetworkResourceCountsRequest",
}) as any as S.Schema<GetNetworkResourceCountsRequest>;
export interface NetworkResourceCount {
  ResourceType?: string;
  Count?: number;
}
const NetworkResourceCount = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ResourceType: S.optional(S.String), Count: S.optional(S.Number) }),
).annotate({ identifier: "NetworkResourceCount" }) as any as S.Schema<NetworkResourceCount>;
export type NetworkResourceCountList = NetworkResourceCount[];
const NetworkResourceCountList = /*@__PURE__*/ S.Array(NetworkResourceCount);
export interface GetNetworkResourceCountsResponse {
  NetworkResourceCounts?: NetworkResourceCount[];
  NextToken?: string;
}
const GetNetworkResourceCountsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    NetworkResourceCounts: S.optional(NetworkResourceCountList),
    NextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "GetNetworkResourceCountsResponse",
}) as any as S.Schema<GetNetworkResourceCountsResponse>;
export interface GetNetworkResourceRelationshipsRequest {
  GlobalNetworkId: string;
  CoreNetworkId?: string;
  RegisteredGatewayArn?: string;
  AwsRegion?: string;
  AccountId?: string;
  ResourceType?: string;
  ResourceArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
const GetNetworkResourceRelationshipsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    CoreNetworkId: S.optional(S.String).pipe(T.HttpQuery("coreNetworkId")),
    RegisteredGatewayArn: S.optional(S.String).pipe(T.HttpQuery("registeredGatewayArn")),
    AwsRegion: S.optional(S.String).pipe(T.HttpQuery("awsRegion")),
    AccountId: S.optional(S.String).pipe(T.HttpQuery("accountId")),
    ResourceType: S.optional(S.String).pipe(T.HttpQuery("resourceType")),
    ResourceArn: S.optional(S.String).pipe(T.HttpQuery("resourceArn")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/global-networks/{GlobalNetworkId}/network-resource-relationships",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetNetworkResourceRelationshipsRequest",
}) as any as S.Schema<GetNetworkResourceRelationshipsRequest>;
export interface Relationship {
  From?: string;
  To?: string;
}
const Relationship = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ From: S.optional(S.String), To: S.optional(S.String) }),
).annotate({ identifier: "Relationship" }) as any as S.Schema<Relationship>;
export type RelationshipList = Relationship[];
const RelationshipList = /*@__PURE__*/ S.Array(Relationship);
export interface GetNetworkResourceRelationshipsResponse {
  Relationships?: Relationship[];
  NextToken?: string;
}
const GetNetworkResourceRelationshipsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Relationships: S.optional(RelationshipList), NextToken: S.optional(S.String) }),
).annotate({
  identifier: "GetNetworkResourceRelationshipsResponse",
}) as any as S.Schema<GetNetworkResourceRelationshipsResponse>;
export interface GetNetworkResourcesRequest {
  GlobalNetworkId: string;
  CoreNetworkId?: string;
  RegisteredGatewayArn?: string;
  AwsRegion?: string;
  AccountId?: string;
  ResourceType?: string;
  ResourceArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
const GetNetworkResourcesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    CoreNetworkId: S.optional(S.String).pipe(T.HttpQuery("coreNetworkId")),
    RegisteredGatewayArn: S.optional(S.String).pipe(T.HttpQuery("registeredGatewayArn")),
    AwsRegion: S.optional(S.String).pipe(T.HttpQuery("awsRegion")),
    AccountId: S.optional(S.String).pipe(T.HttpQuery("accountId")),
    ResourceType: S.optional(S.String).pipe(T.HttpQuery("resourceType")),
    ResourceArn: S.optional(S.String).pipe(T.HttpQuery("resourceArn")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/global-networks/{GlobalNetworkId}/network-resources" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetNetworkResourcesRequest",
}) as any as S.Schema<GetNetworkResourcesRequest>;
export type NetworkResourceMetadataMap = { [key: string]: string | undefined };
const NetworkResourceMetadataMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ S.String.pipe(S.optional),
);
export interface NetworkResource {
  RegisteredGatewayArn?: string;
  CoreNetworkId?: string;
  AwsRegion?: string;
  AccountId?: string;
  ResourceType?: string;
  ResourceId?: string;
  ResourceArn?: string;
  Definition?: string;
  DefinitionTimestamp?: Date;
  Tags?: Tag[];
  Metadata?: { [key: string]: string | undefined };
}
const NetworkResource = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RegisteredGatewayArn: S.optional(S.String),
    CoreNetworkId: S.optional(S.String),
    AwsRegion: S.optional(S.String),
    AccountId: S.optional(S.String),
    ResourceType: S.optional(S.String),
    ResourceId: S.optional(S.String),
    ResourceArn: S.optional(S.String),
    Definition: S.optional(S.String),
    DefinitionTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    Tags: S.optional(TagList),
    Metadata: S.optional(NetworkResourceMetadataMap),
  }),
).annotate({ identifier: "NetworkResource" }) as any as S.Schema<NetworkResource>;
export type NetworkResourceList = NetworkResource[];
const NetworkResourceList = /*@__PURE__*/ S.Array(NetworkResource);
export interface GetNetworkResourcesResponse {
  NetworkResources?: NetworkResource[];
  NextToken?: string;
}
const GetNetworkResourcesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ NetworkResources: S.optional(NetworkResourceList), NextToken: S.optional(S.String) }),
).annotate({
  identifier: "GetNetworkResourcesResponse",
}) as any as S.Schema<GetNetworkResourcesResponse>;
export interface CoreNetworkSegmentEdgeIdentifier {
  CoreNetworkId?: string;
  SegmentName?: string;
  EdgeLocation?: string;
}
const CoreNetworkSegmentEdgeIdentifier = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.optional(S.String),
    SegmentName: S.optional(S.String),
    EdgeLocation: S.optional(S.String),
  }),
).annotate({
  identifier: "CoreNetworkSegmentEdgeIdentifier",
}) as any as S.Schema<CoreNetworkSegmentEdgeIdentifier>;
export interface CoreNetworkNetworkFunctionGroupIdentifier {
  CoreNetworkId?: string;
  NetworkFunctionGroupName?: string;
  EdgeLocation?: string;
}
const CoreNetworkNetworkFunctionGroupIdentifier = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.optional(S.String),
    NetworkFunctionGroupName: S.optional(S.String),
    EdgeLocation: S.optional(S.String),
  }),
).annotate({
  identifier: "CoreNetworkNetworkFunctionGroupIdentifier",
}) as any as S.Schema<CoreNetworkNetworkFunctionGroupIdentifier>;
export interface RouteTableIdentifier {
  TransitGatewayRouteTableArn?: string;
  CoreNetworkSegmentEdge?: CoreNetworkSegmentEdgeIdentifier;
  CoreNetworkNetworkFunctionGroup?: CoreNetworkNetworkFunctionGroupIdentifier;
}
const RouteTableIdentifier = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    TransitGatewayRouteTableArn: S.optional(S.String),
    CoreNetworkSegmentEdge: S.optional(CoreNetworkSegmentEdgeIdentifier),
    CoreNetworkNetworkFunctionGroup: S.optional(CoreNetworkNetworkFunctionGroupIdentifier),
  }),
).annotate({ identifier: "RouteTableIdentifier" }) as any as S.Schema<RouteTableIdentifier>;
export type RouteState = "ACTIVE" | "BLACKHOLE" | (string & {});
const RouteState = S.String;

export type RouteStateList = RouteState[];
const RouteStateList = /*@__PURE__*/ S.Array(RouteState);
export type RouteType = "PROPAGATED" | "STATIC" | (string & {});
const RouteType = S.String;

export type RouteTypeList = RouteType[];
const RouteTypeList = RouteStateList as any as S.Schema<RouteTypeList>;
export type FilterName = string;
export type FilterValue = string;
export type FilterValues = string[];
const FilterValues = ExternalRegionCodeList as any as S.Schema<FilterValues>;
export type FilterMap = { [key: string]: string[] | undefined };
const FilterMap = /*@__PURE__*/ S.Record(S.String, /*@__PURE__*/ FilterValues.pipe(S.optional));
export interface GetNetworkRoutesRequest {
  GlobalNetworkId: string;
  RouteTableIdentifier: RouteTableIdentifier;
  ExactCidrMatches?: string[];
  LongestPrefixMatches?: string[];
  SubnetOfMatches?: string[];
  SupernetOfMatches?: string[];
  PrefixListIds?: string[];
  States?: RouteState[];
  Types?: RouteType[];
  DestinationFilters?: { [key: string]: string[] | undefined };
}
const GetNetworkRoutesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    RouteTableIdentifier: RouteTableIdentifier,
    ExactCidrMatches: S.optional(ConstrainedStringList),
    LongestPrefixMatches: S.optional(ConstrainedStringList),
    SubnetOfMatches: S.optional(ConstrainedStringList),
    SupernetOfMatches: S.optional(ConstrainedStringList),
    PrefixListIds: S.optional(ConstrainedStringList),
    States: S.optional(RouteStateList),
    Types: S.optional(RouteTypeList),
    DestinationFilters: S.optional(FilterMap),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/global-networks/{GlobalNetworkId}/network-routes" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetNetworkRoutesRequest" }) as any as S.Schema<GetNetworkRoutesRequest>;
export type RouteTableType =
  | "TRANSIT_GATEWAY_ROUTE_TABLE"
  | "CORE_NETWORK_SEGMENT"
  | "NETWORK_FUNCTION_GROUP"
  | (string & {});
const RouteTableType = S.String;

export type TransitGatewayAttachmentId = string;
export interface NetworkRouteDestination {
  CoreNetworkAttachmentId?: string;
  TransitGatewayAttachmentId?: string;
  SegmentName?: string;
  NetworkFunctionGroupName?: string;
  EdgeLocation?: string;
  ResourceType?: string;
  ResourceId?: string;
}
const NetworkRouteDestination = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkAttachmentId: S.optional(S.String),
    TransitGatewayAttachmentId: S.optional(S.String),
    SegmentName: S.optional(S.String),
    NetworkFunctionGroupName: S.optional(S.String),
    EdgeLocation: S.optional(S.String),
    ResourceType: S.optional(S.String),
    ResourceId: S.optional(S.String),
  }),
).annotate({ identifier: "NetworkRouteDestination" }) as any as S.Schema<NetworkRouteDestination>;
export type NetworkRouteDestinationList = NetworkRouteDestination[];
const NetworkRouteDestinationList = /*@__PURE__*/ S.Array(NetworkRouteDestination);
export interface NetworkRoute {
  DestinationCidrBlock?: string;
  Destinations?: NetworkRouteDestination[];
  PrefixListId?: string;
  State?: RouteState;
  Type?: RouteType;
}
const NetworkRoute = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DestinationCidrBlock: S.optional(S.String),
    Destinations: S.optional(NetworkRouteDestinationList),
    PrefixListId: S.optional(S.String),
    State: S.optional(RouteState),
    Type: S.optional(RouteType),
  }),
).annotate({ identifier: "NetworkRoute" }) as any as S.Schema<NetworkRoute>;
export type NetworkRouteList = NetworkRoute[];
const NetworkRouteList = /*@__PURE__*/ S.Array(NetworkRoute);
export interface GetNetworkRoutesResponse {
  RouteTableArn?: string;
  CoreNetworkSegmentEdge?: CoreNetworkSegmentEdgeIdentifier;
  RouteTableType?: RouteTableType;
  RouteTableTimestamp?: Date;
  NetworkRoutes?: NetworkRoute[];
}
const GetNetworkRoutesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RouteTableArn: S.optional(S.String),
    CoreNetworkSegmentEdge: S.optional(CoreNetworkSegmentEdgeIdentifier),
    RouteTableType: S.optional(RouteTableType),
    RouteTableTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    NetworkRoutes: S.optional(NetworkRouteList),
  }),
).annotate({ identifier: "GetNetworkRoutesResponse" }) as any as S.Schema<GetNetworkRoutesResponse>;
export interface GetNetworkTelemetryRequest {
  GlobalNetworkId: string;
  CoreNetworkId?: string;
  RegisteredGatewayArn?: string;
  AwsRegion?: string;
  AccountId?: string;
  ResourceType?: string;
  ResourceArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
const GetNetworkTelemetryRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    CoreNetworkId: S.optional(S.String).pipe(T.HttpQuery("coreNetworkId")),
    RegisteredGatewayArn: S.optional(S.String).pipe(T.HttpQuery("registeredGatewayArn")),
    AwsRegion: S.optional(S.String).pipe(T.HttpQuery("awsRegion")),
    AccountId: S.optional(S.String).pipe(T.HttpQuery("accountId")),
    ResourceType: S.optional(S.String).pipe(T.HttpQuery("resourceType")),
    ResourceArn: S.optional(S.String).pipe(T.HttpQuery("resourceArn")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/global-networks/{GlobalNetworkId}/network-telemetry" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetNetworkTelemetryRequest",
}) as any as S.Schema<GetNetworkTelemetryRequest>;
export type ConnectionType = "BGP" | "IPSEC" | (string & {});
const ConnectionType = S.String;

export type ConnectionStatus = "UP" | "DOWN" | (string & {});
const ConnectionStatus = S.String;

export interface ConnectionHealth {
  Type?: ConnectionType;
  Status?: ConnectionStatus;
  Timestamp?: Date;
}
const ConnectionHealth = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Type: S.optional(ConnectionType),
    Status: S.optional(ConnectionStatus),
    Timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
  }),
).annotate({ identifier: "ConnectionHealth" }) as any as S.Schema<ConnectionHealth>;
export interface NetworkTelemetry {
  RegisteredGatewayArn?: string;
  CoreNetworkId?: string;
  AwsRegion?: string;
  AccountId?: string;
  ResourceType?: string;
  ResourceId?: string;
  ResourceArn?: string;
  Address?: string;
  Health?: ConnectionHealth;
}
const NetworkTelemetry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RegisteredGatewayArn: S.optional(S.String),
    CoreNetworkId: S.optional(S.String),
    AwsRegion: S.optional(S.String),
    AccountId: S.optional(S.String),
    ResourceType: S.optional(S.String),
    ResourceId: S.optional(S.String),
    ResourceArn: S.optional(S.String),
    Address: S.optional(S.String),
    Health: S.optional(ConnectionHealth),
  }),
).annotate({ identifier: "NetworkTelemetry" }) as any as S.Schema<NetworkTelemetry>;
export type NetworkTelemetryList = NetworkTelemetry[];
const NetworkTelemetryList = /*@__PURE__*/ S.Array(NetworkTelemetry);
export interface GetNetworkTelemetryResponse {
  NetworkTelemetry?: NetworkTelemetry[];
  NextToken?: string;
}
const GetNetworkTelemetryResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ NetworkTelemetry: S.optional(NetworkTelemetryList), NextToken: S.optional(S.String) }),
).annotate({
  identifier: "GetNetworkTelemetryResponse",
}) as any as S.Schema<GetNetworkTelemetryResponse>;
export interface GetResourcePolicyRequest {
  ResourceArn: string;
}
const GetResourcePolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/resource-policy/{ResourceArn}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetResourcePolicyRequest" }) as any as S.Schema<GetResourcePolicyRequest>;
export type SynthesizedJsonResourcePolicyDocument = string;
export interface GetResourcePolicyResponse {
  PolicyDocument?: string;
}
const GetResourcePolicyResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ PolicyDocument: S.optional(S.String) }),
).annotate({
  identifier: "GetResourcePolicyResponse",
}) as any as S.Schema<GetResourcePolicyResponse>;
export interface GetRouteAnalysisRequest {
  GlobalNetworkId: string;
  RouteAnalysisId: string;
}
const GetRouteAnalysisRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    RouteAnalysisId: S.String.pipe(T.HttpLabel("RouteAnalysisId")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/global-networks/{GlobalNetworkId}/route-analyses/{RouteAnalysisId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetRouteAnalysisRequest" }) as any as S.Schema<GetRouteAnalysisRequest>;
export type RouteAnalysisStatus = "RUNNING" | "COMPLETED" | "FAILED" | (string & {});
const RouteAnalysisStatus = S.String;

export type TransitGatewayAttachmentArn = string;
export interface RouteAnalysisEndpointOptions {
  TransitGatewayAttachmentArn?: string;
  TransitGatewayArn?: string;
  IpAddress?: string;
}
const RouteAnalysisEndpointOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    TransitGatewayAttachmentArn: S.optional(S.String),
    TransitGatewayArn: S.optional(S.String),
    IpAddress: S.optional(S.String),
  }),
).annotate({
  identifier: "RouteAnalysisEndpointOptions",
}) as any as S.Schema<RouteAnalysisEndpointOptions>;
export type RouteAnalysisCompletionResultCode = "CONNECTED" | "NOT_CONNECTED" | (string & {});
const RouteAnalysisCompletionResultCode = S.String;

export type RouteAnalysisCompletionReasonCode =
  | "TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND"
  | "TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY"
  | "CYCLIC_PATH_DETECTED"
  | "TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND"
  | "ROUTE_NOT_FOUND"
  | "BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND"
  | "INACTIVE_ROUTE_FOR_DESTINATION_FOUND"
  | "TRANSIT_GATEWAY_ATTACHMENT_ATTACH_ARN_NO_MATCH"
  | "MAX_HOPS_EXCEEDED"
  | "POSSIBLE_MIDDLEBOX"
  | "NO_DESTINATION_ARN_PROVIDED"
  | (string & {});
const RouteAnalysisCompletionReasonCode = S.String;

export type ReasonContextKey = string;
export type ReasonContextValue = string;
export type ReasonContextMap = { [key: string]: string | undefined };
const ReasonContextMap = NetworkResourceMetadataMap as any as S.Schema<ReasonContextMap>;
export interface RouteAnalysisCompletion {
  ResultCode?: RouteAnalysisCompletionResultCode;
  ReasonCode?: RouteAnalysisCompletionReasonCode;
  ReasonContext?: { [key: string]: string | undefined };
}
const RouteAnalysisCompletion = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ResultCode: S.optional(RouteAnalysisCompletionResultCode),
    ReasonCode: S.optional(RouteAnalysisCompletionReasonCode),
    ReasonContext: S.optional(ReasonContextMap),
  }),
).annotate({ identifier: "RouteAnalysisCompletion" }) as any as S.Schema<RouteAnalysisCompletion>;
export interface NetworkResourceSummary {
  RegisteredGatewayArn?: string;
  ResourceArn?: string;
  ResourceType?: string;
  Definition?: string;
  NameTag?: string;
  IsMiddlebox?: boolean;
}
const NetworkResourceSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    RegisteredGatewayArn: S.optional(S.String),
    ResourceArn: S.optional(S.String),
    ResourceType: S.optional(S.String),
    Definition: S.optional(S.String),
    NameTag: S.optional(S.String),
    IsMiddlebox: S.optional(S.Boolean),
  }),
).annotate({ identifier: "NetworkResourceSummary" }) as any as S.Schema<NetworkResourceSummary>;
export interface PathComponent {
  Sequence?: number;
  Resource?: NetworkResourceSummary;
  DestinationCidrBlock?: string;
}
const PathComponent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Sequence: S.optional(S.Number),
    Resource: S.optional(NetworkResourceSummary),
    DestinationCidrBlock: S.optional(S.String),
  }),
).annotate({ identifier: "PathComponent" }) as any as S.Schema<PathComponent>;
export type PathComponentList = PathComponent[];
const PathComponentList = /*@__PURE__*/ S.Array(PathComponent);
export interface RouteAnalysisPath {
  CompletionStatus?: RouteAnalysisCompletion;
  Path?: PathComponent[];
}
const RouteAnalysisPath = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CompletionStatus: S.optional(RouteAnalysisCompletion),
    Path: S.optional(PathComponentList),
  }),
).annotate({ identifier: "RouteAnalysisPath" }) as any as S.Schema<RouteAnalysisPath>;
export interface RouteAnalysis {
  GlobalNetworkId?: string;
  OwnerAccountId?: string;
  RouteAnalysisId?: string;
  StartTimestamp?: Date;
  Status?: RouteAnalysisStatus;
  Source?: RouteAnalysisEndpointOptions;
  Destination?: RouteAnalysisEndpointOptions;
  IncludeReturnPath?: boolean;
  UseMiddleboxes?: boolean;
  ForwardPath?: RouteAnalysisPath;
  ReturnPath?: RouteAnalysisPath;
}
const RouteAnalysis = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.optional(S.String),
    OwnerAccountId: S.optional(S.String),
    RouteAnalysisId: S.optional(S.String),
    StartTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    Status: S.optional(RouteAnalysisStatus),
    Source: S.optional(RouteAnalysisEndpointOptions),
    Destination: S.optional(RouteAnalysisEndpointOptions),
    IncludeReturnPath: S.optional(S.Boolean),
    UseMiddleboxes: S.optional(S.Boolean),
    ForwardPath: S.optional(RouteAnalysisPath),
    ReturnPath: S.optional(RouteAnalysisPath),
  }),
).annotate({ identifier: "RouteAnalysis" }) as any as S.Schema<RouteAnalysis>;
export interface GetRouteAnalysisResponse {
  RouteAnalysis?: RouteAnalysis;
}
const GetRouteAnalysisResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ RouteAnalysis: S.optional(RouteAnalysis) }),
).annotate({ identifier: "GetRouteAnalysisResponse" }) as any as S.Schema<GetRouteAnalysisResponse>;
export type SiteIdList = string[];
const SiteIdList = ExternalRegionCodeList as any as S.Schema<SiteIdList>;
export interface GetSitesRequest {
  GlobalNetworkId: string;
  SiteIds?: string[];
  MaxResults?: number;
  NextToken?: string;
}
const GetSitesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    SiteIds: S.optional(SiteIdList).pipe(T.HttpQuery("siteIds")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/global-networks/{GlobalNetworkId}/sites" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetSitesRequest" }) as any as S.Schema<GetSitesRequest>;
export type SiteList = Site[];
const SiteList = /*@__PURE__*/ S.Array(Site);
export interface GetSitesResponse {
  Sites?: Site[];
  NextToken?: string;
}
const GetSitesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Sites: S.optional(SiteList), NextToken: S.optional(S.String) }),
).annotate({ identifier: "GetSitesResponse" }) as any as S.Schema<GetSitesResponse>;
export interface GetSiteToSiteVpnAttachmentRequest {
  AttachmentId: string;
}
const GetSiteToSiteVpnAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AttachmentId: S.String.pipe(T.HttpLabel("AttachmentId")) }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/site-to-site-vpn-attachments/{AttachmentId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetSiteToSiteVpnAttachmentRequest",
}) as any as S.Schema<GetSiteToSiteVpnAttachmentRequest>;
export interface GetSiteToSiteVpnAttachmentResponse {
  SiteToSiteVpnAttachment?: SiteToSiteVpnAttachment;
}
const GetSiteToSiteVpnAttachmentResponse =
  CreateSiteToSiteVpnAttachmentResponse as any as S.Schema<GetSiteToSiteVpnAttachmentResponse>;
export type TransitGatewayConnectPeerArnList = string[];
const TransitGatewayConnectPeerArnList =
  ExternalRegionCodeList as any as S.Schema<TransitGatewayConnectPeerArnList>;
export interface GetTransitGatewayConnectPeerAssociationsRequest {
  GlobalNetworkId: string;
  TransitGatewayConnectPeerArns?: string[];
  MaxResults?: number;
  NextToken?: string;
}
const GetTransitGatewayConnectPeerAssociationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    TransitGatewayConnectPeerArns: S.optional(TransitGatewayConnectPeerArnList).pipe(
      T.HttpQuery("transitGatewayConnectPeerArns"),
    ),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetTransitGatewayConnectPeerAssociationsRequest",
}) as any as S.Schema<GetTransitGatewayConnectPeerAssociationsRequest>;
export type TransitGatewayConnectPeerAssociationList = TransitGatewayConnectPeerAssociation[];
const TransitGatewayConnectPeerAssociationList = /*@__PURE__*/ S.Array(
  TransitGatewayConnectPeerAssociation,
);
export interface GetTransitGatewayConnectPeerAssociationsResponse {
  TransitGatewayConnectPeerAssociations?: TransitGatewayConnectPeerAssociation[];
  NextToken?: string;
}
const GetTransitGatewayConnectPeerAssociationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    TransitGatewayConnectPeerAssociations: S.optional(TransitGatewayConnectPeerAssociationList),
    NextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "GetTransitGatewayConnectPeerAssociationsResponse",
}) as any as S.Schema<GetTransitGatewayConnectPeerAssociationsResponse>;
export interface GetTransitGatewayPeeringRequest {
  PeeringId: string;
}
const GetTransitGatewayPeeringRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ PeeringId: S.String.pipe(T.HttpLabel("PeeringId")) }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/transit-gateway-peerings/{PeeringId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetTransitGatewayPeeringRequest",
}) as any as S.Schema<GetTransitGatewayPeeringRequest>;
export interface GetTransitGatewayPeeringResponse {
  TransitGatewayPeering?: TransitGatewayPeering;
}
const GetTransitGatewayPeeringResponse =
  CreateTransitGatewayPeeringResponse as any as S.Schema<GetTransitGatewayPeeringResponse>;
export type TransitGatewayArnList = string[];
const TransitGatewayArnList = ExternalRegionCodeList as any as S.Schema<TransitGatewayArnList>;
export interface GetTransitGatewayRegistrationsRequest {
  GlobalNetworkId: string;
  TransitGatewayArns?: string[];
  MaxResults?: number;
  NextToken?: string;
}
const GetTransitGatewayRegistrationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    TransitGatewayArns: S.optional(TransitGatewayArnList).pipe(T.HttpQuery("transitGatewayArns")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/global-networks/{GlobalNetworkId}/transit-gateway-registrations",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetTransitGatewayRegistrationsRequest",
}) as any as S.Schema<GetTransitGatewayRegistrationsRequest>;
export type TransitGatewayRegistrationList = TransitGatewayRegistration[];
const TransitGatewayRegistrationList = /*@__PURE__*/ S.Array(TransitGatewayRegistration);
export interface GetTransitGatewayRegistrationsResponse {
  TransitGatewayRegistrations?: TransitGatewayRegistration[];
  NextToken?: string;
}
const GetTransitGatewayRegistrationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    TransitGatewayRegistrations: S.optional(TransitGatewayRegistrationList),
    NextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "GetTransitGatewayRegistrationsResponse",
}) as any as S.Schema<GetTransitGatewayRegistrationsResponse>;
export interface GetTransitGatewayRouteTableAttachmentRequest {
  AttachmentId: string;
}
const GetTransitGatewayRouteTableAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AttachmentId: S.String.pipe(T.HttpLabel("AttachmentId")) }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/transit-gateway-route-table-attachments/{AttachmentId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetTransitGatewayRouteTableAttachmentRequest",
}) as any as S.Schema<GetTransitGatewayRouteTableAttachmentRequest>;
export interface GetTransitGatewayRouteTableAttachmentResponse {
  TransitGatewayRouteTableAttachment?: TransitGatewayRouteTableAttachment;
}
const GetTransitGatewayRouteTableAttachmentResponse =
  CreateTransitGatewayRouteTableAttachmentResponse as any as S.Schema<GetTransitGatewayRouteTableAttachmentResponse>;
export interface GetVpcAttachmentRequest {
  AttachmentId: string;
}
const GetVpcAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AttachmentId: S.String.pipe(T.HttpLabel("AttachmentId")) }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/vpc-attachments/{AttachmentId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetVpcAttachmentRequest" }) as any as S.Schema<GetVpcAttachmentRequest>;
export interface GetVpcAttachmentResponse {
  VpcAttachment?: VpcAttachment;
}
const GetVpcAttachmentResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ VpcAttachment: S.optional(VpcAttachment) }),
).annotate({ identifier: "GetVpcAttachmentResponse" }) as any as S.Schema<GetVpcAttachmentResponse>;
export interface ListAttachmentRoutingPolicyAssociationsRequest {
  CoreNetworkId: string;
  AttachmentId?: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListAttachmentRoutingPolicyAssociationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String.pipe(T.HttpLabel("CoreNetworkId")),
    AttachmentId: S.optional(S.String).pipe(T.HttpQuery("attachmentId")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/routing-policy-label/core-network/{CoreNetworkId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAttachmentRoutingPolicyAssociationsRequest",
}) as any as S.Schema<ListAttachmentRoutingPolicyAssociationsRequest>;
export interface AttachmentRoutingPolicyAssociationSummary {
  AttachmentId?: string;
  PendingRoutingPolicies?: string[];
  AssociatedRoutingPolicies?: string[];
  RoutingPolicyLabel?: string;
}
const AttachmentRoutingPolicyAssociationSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AttachmentId: S.optional(S.String),
    PendingRoutingPolicies: S.optional(ConstrainedStringList),
    AssociatedRoutingPolicies: S.optional(ConstrainedStringList),
    RoutingPolicyLabel: S.optional(S.String),
  }),
).annotate({
  identifier: "AttachmentRoutingPolicyAssociationSummary",
}) as any as S.Schema<AttachmentRoutingPolicyAssociationSummary>;
export type AttachmentRoutingPolicyAssociationsList = AttachmentRoutingPolicyAssociationSummary[];
const AttachmentRoutingPolicyAssociationsList = /*@__PURE__*/ S.Array(
  AttachmentRoutingPolicyAssociationSummary,
);
export interface ListAttachmentRoutingPolicyAssociationsResponse {
  AttachmentRoutingPolicyAssociations?: AttachmentRoutingPolicyAssociationSummary[];
  NextToken?: string;
}
const ListAttachmentRoutingPolicyAssociationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AttachmentRoutingPolicyAssociations: S.optional(AttachmentRoutingPolicyAssociationsList),
    NextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListAttachmentRoutingPolicyAssociationsResponse",
}) as any as S.Schema<ListAttachmentRoutingPolicyAssociationsResponse>;
export interface ListAttachmentsRequest {
  CoreNetworkId?: string;
  AttachmentType?: AttachmentType;
  EdgeLocation?: string;
  State?: AttachmentState;
  MaxResults?: number;
  NextToken?: string;
}
const ListAttachmentsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.optional(S.String).pipe(T.HttpQuery("coreNetworkId")),
    AttachmentType: S.optional(AttachmentType).pipe(T.HttpQuery("attachmentType")),
    EdgeLocation: S.optional(S.String).pipe(T.HttpQuery("edgeLocation")),
    State: S.optional(AttachmentState).pipe(T.HttpQuery("state")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(T.all(T.Http({ method: "GET", uri: "/attachments" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListAttachmentsRequest" }) as any as S.Schema<ListAttachmentsRequest>;
export type AttachmentList = Attachment[];
const AttachmentList = /*@__PURE__*/ S.Array(Attachment);
export interface ListAttachmentsResponse {
  Attachments?: Attachment[];
  NextToken?: string;
}
const ListAttachmentsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Attachments: S.optional(AttachmentList), NextToken: S.optional(S.String) }),
).annotate({ identifier: "ListAttachmentsResponse" }) as any as S.Schema<ListAttachmentsResponse>;
export interface ListConnectPeersRequest {
  CoreNetworkId?: string;
  ConnectAttachmentId?: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListConnectPeersRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.optional(S.String).pipe(T.HttpQuery("coreNetworkId")),
    ConnectAttachmentId: S.optional(S.String).pipe(T.HttpQuery("connectAttachmentId")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(T.all(T.Http({ method: "GET", uri: "/connect-peers" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListConnectPeersRequest" }) as any as S.Schema<ListConnectPeersRequest>;
export interface ConnectPeerSummary {
  CoreNetworkId?: string;
  ConnectAttachmentId?: string;
  ConnectPeerId?: string;
  EdgeLocation?: string;
  ConnectPeerState?: ConnectPeerState;
  CreatedAt?: Date;
  Tags?: Tag[];
  SubnetArn?: string;
}
const ConnectPeerSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.optional(S.String),
    ConnectAttachmentId: S.optional(S.String),
    ConnectPeerId: S.optional(S.String),
    EdgeLocation: S.optional(S.String),
    ConnectPeerState: S.optional(ConnectPeerState),
    CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    Tags: S.optional(TagList),
    SubnetArn: S.optional(S.String),
  }),
).annotate({ identifier: "ConnectPeerSummary" }) as any as S.Schema<ConnectPeerSummary>;
export type ConnectPeerSummaryList = ConnectPeerSummary[];
const ConnectPeerSummaryList = /*@__PURE__*/ S.Array(ConnectPeerSummary);
export interface ListConnectPeersResponse {
  ConnectPeers?: ConnectPeerSummary[];
  NextToken?: string;
}
const ListConnectPeersResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ConnectPeers: S.optional(ConnectPeerSummaryList), NextToken: S.optional(S.String) }),
).annotate({ identifier: "ListConnectPeersResponse" }) as any as S.Schema<ListConnectPeersResponse>;
export interface ListCoreNetworkPolicyVersionsRequest {
  CoreNetworkId: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListCoreNetworkPolicyVersionsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String.pipe(T.HttpLabel("CoreNetworkId")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/core-networks/{CoreNetworkId}/core-network-policy-versions" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListCoreNetworkPolicyVersionsRequest",
}) as any as S.Schema<ListCoreNetworkPolicyVersionsRequest>;
export interface CoreNetworkPolicyVersion {
  CoreNetworkId?: string;
  PolicyVersionId?: number;
  Alias?: CoreNetworkPolicyAlias;
  Description?: string;
  CreatedAt?: Date;
  ChangeSetState?: ChangeSetState;
}
const CoreNetworkPolicyVersion = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.optional(S.String),
    PolicyVersionId: S.optional(S.Number),
    Alias: S.optional(CoreNetworkPolicyAlias),
    Description: S.optional(S.String),
    CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    ChangeSetState: S.optional(ChangeSetState),
  }),
).annotate({ identifier: "CoreNetworkPolicyVersion" }) as any as S.Schema<CoreNetworkPolicyVersion>;
export type CoreNetworkPolicyVersionList = CoreNetworkPolicyVersion[];
const CoreNetworkPolicyVersionList = /*@__PURE__*/ S.Array(CoreNetworkPolicyVersion);
export interface ListCoreNetworkPolicyVersionsResponse {
  CoreNetworkPolicyVersions?: CoreNetworkPolicyVersion[];
  NextToken?: string;
}
const ListCoreNetworkPolicyVersionsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkPolicyVersions: S.optional(CoreNetworkPolicyVersionList),
    NextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListCoreNetworkPolicyVersionsResponse",
}) as any as S.Schema<ListCoreNetworkPolicyVersionsResponse>;
export interface ListCoreNetworkPrefixListAssociationsRequest {
  CoreNetworkId: string;
  PrefixListArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListCoreNetworkPrefixListAssociationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String.pipe(T.HttpLabel("CoreNetworkId")),
    PrefixListArn: S.optional(S.String).pipe(T.HttpQuery("prefixListArn")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/prefix-list/core-network/{CoreNetworkId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListCoreNetworkPrefixListAssociationsRequest",
}) as any as S.Schema<ListCoreNetworkPrefixListAssociationsRequest>;
export interface PrefixListAssociation {
  CoreNetworkId?: string;
  PrefixListArn?: string;
  PrefixListAlias?: string;
}
const PrefixListAssociation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.optional(S.String),
    PrefixListArn: S.optional(S.String),
    PrefixListAlias: S.optional(S.String),
  }),
).annotate({ identifier: "PrefixListAssociation" }) as any as S.Schema<PrefixListAssociation>;
export type PrefixListAssociationList = PrefixListAssociation[];
const PrefixListAssociationList = /*@__PURE__*/ S.Array(PrefixListAssociation);
export interface ListCoreNetworkPrefixListAssociationsResponse {
  PrefixListAssociations?: PrefixListAssociation[];
  NextToken?: string;
}
const ListCoreNetworkPrefixListAssociationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PrefixListAssociations: S.optional(PrefixListAssociationList),
    NextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListCoreNetworkPrefixListAssociationsResponse",
}) as any as S.Schema<ListCoreNetworkPrefixListAssociationsResponse>;
export interface ListCoreNetworkRoutingInformationRequest {
  CoreNetworkId: string;
  SegmentName: string;
  EdgeLocation: string;
  NextHopFilters?: { [key: string]: string[] | undefined };
  LocalPreferenceMatches?: string[];
  ExactAsPathMatches?: string[];
  MedMatches?: string[];
  CommunityMatches?: string[];
  MaxResults?: number;
  NextToken?: string;
}
const ListCoreNetworkRoutingInformationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String.pipe(T.HttpLabel("CoreNetworkId")),
    SegmentName: S.String,
    EdgeLocation: S.String,
    NextHopFilters: S.optional(FilterMap),
    LocalPreferenceMatches: S.optional(ConstrainedStringList),
    ExactAsPathMatches: S.optional(ConstrainedStringList),
    MedMatches: S.optional(ConstrainedStringList),
    CommunityMatches: S.optional(ConstrainedStringList),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/core-networks/{CoreNetworkId}/core-network-routing-information",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListCoreNetworkRoutingInformationRequest",
}) as any as S.Schema<ListCoreNetworkRoutingInformationRequest>;
export interface RoutingInformationNextHop {
  IpAddress?: string;
  CoreNetworkAttachmentId?: string;
  ResourceId?: string;
  ResourceType?: string;
  SegmentName?: string;
  EdgeLocation?: string;
}
const RoutingInformationNextHop = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    IpAddress: S.optional(S.String),
    CoreNetworkAttachmentId: S.optional(S.String),
    ResourceId: S.optional(S.String),
    ResourceType: S.optional(S.String),
    SegmentName: S.optional(S.String),
    EdgeLocation: S.optional(S.String),
  }),
).annotate({
  identifier: "RoutingInformationNextHop",
}) as any as S.Schema<RoutingInformationNextHop>;
export interface CoreNetworkRoutingInformation {
  Prefix?: string;
  NextHop?: RoutingInformationNextHop;
  LocalPreference?: string;
  Med?: string;
  AsPath?: string[];
  Communities?: string[];
}
const CoreNetworkRoutingInformation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Prefix: S.optional(S.String),
    NextHop: S.optional(RoutingInformationNextHop),
    LocalPreference: S.optional(S.String),
    Med: S.optional(S.String),
    AsPath: S.optional(ConstrainedStringList),
    Communities: S.optional(ConstrainedStringList),
  }),
).annotate({
  identifier: "CoreNetworkRoutingInformation",
}) as any as S.Schema<CoreNetworkRoutingInformation>;
export type CoreNetworkRoutingInformationList = CoreNetworkRoutingInformation[];
const CoreNetworkRoutingInformationList = /*@__PURE__*/ S.Array(CoreNetworkRoutingInformation);
export interface ListCoreNetworkRoutingInformationResponse {
  CoreNetworkRoutingInformation?: CoreNetworkRoutingInformation[];
  NextToken?: string;
}
const ListCoreNetworkRoutingInformationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkRoutingInformation: S.optional(CoreNetworkRoutingInformationList),
    NextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListCoreNetworkRoutingInformationResponse",
}) as any as S.Schema<ListCoreNetworkRoutingInformationResponse>;
export interface ListCoreNetworksRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListCoreNetworksRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(T.all(T.Http({ method: "GET", uri: "/core-networks" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListCoreNetworksRequest" }) as any as S.Schema<ListCoreNetworksRequest>;
export interface CoreNetworkSummary {
  CoreNetworkId?: string;
  CoreNetworkArn?: string;
  GlobalNetworkId?: string;
  OwnerAccountId?: string;
  State?: CoreNetworkState;
  Description?: string;
  Tags?: Tag[];
}
const CoreNetworkSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.optional(S.String),
    CoreNetworkArn: S.optional(S.String),
    GlobalNetworkId: S.optional(S.String),
    OwnerAccountId: S.optional(S.String),
    State: S.optional(CoreNetworkState),
    Description: S.optional(S.String),
    Tags: S.optional(TagList),
  }),
).annotate({ identifier: "CoreNetworkSummary" }) as any as S.Schema<CoreNetworkSummary>;
export type CoreNetworkSummaryList = CoreNetworkSummary[];
const CoreNetworkSummaryList = /*@__PURE__*/ S.Array(CoreNetworkSummary);
export interface ListCoreNetworksResponse {
  CoreNetworks?: CoreNetworkSummary[];
  NextToken?: string;
}
const ListCoreNetworksResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ CoreNetworks: S.optional(CoreNetworkSummaryList), NextToken: S.optional(S.String) }),
).annotate({ identifier: "ListCoreNetworksResponse" }) as any as S.Schema<ListCoreNetworksResponse>;
export interface ListOrganizationServiceAccessStatusRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListOrganizationServiceAccessStatusRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/organizations/service-access" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListOrganizationServiceAccessStatusRequest",
}) as any as S.Schema<ListOrganizationServiceAccessStatusRequest>;
export type OrganizationId = string;
export type OrganizationAwsServiceAccessStatus = string;
export type SLRDeploymentStatus = string;
export type AccountId = string;
export interface AccountStatus {
  AccountId?: string;
  SLRDeploymentStatus?: string;
}
const AccountStatus = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AccountId: S.optional(S.String), SLRDeploymentStatus: S.optional(S.String) }),
).annotate({ identifier: "AccountStatus" }) as any as S.Schema<AccountStatus>;
export type AccountStatusList = AccountStatus[];
const AccountStatusList = /*@__PURE__*/ S.Array(AccountStatus);
export interface OrganizationStatus {
  OrganizationId?: string;
  OrganizationAwsServiceAccessStatus?: string;
  SLRDeploymentStatus?: string;
  AccountStatusList?: AccountStatus[];
}
const OrganizationStatus = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    OrganizationId: S.optional(S.String),
    OrganizationAwsServiceAccessStatus: S.optional(S.String),
    SLRDeploymentStatus: S.optional(S.String),
    AccountStatusList: S.optional(AccountStatusList).pipe(T.XmlName("OrganizationStatus")),
  }),
).annotate({ identifier: "OrganizationStatus" }) as any as S.Schema<OrganizationStatus>;
export interface ListOrganizationServiceAccessStatusResponse {
  OrganizationStatus?: OrganizationStatus;
  NextToken?: string;
}
const ListOrganizationServiceAccessStatusResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ OrganizationStatus: S.optional(OrganizationStatus), NextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListOrganizationServiceAccessStatusResponse",
}) as any as S.Schema<ListOrganizationServiceAccessStatusResponse>;
export interface ListPeeringsRequest {
  CoreNetworkId?: string;
  PeeringType?: PeeringType;
  EdgeLocation?: string;
  State?: PeeringState;
  MaxResults?: number;
  NextToken?: string;
}
const ListPeeringsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.optional(S.String).pipe(T.HttpQuery("coreNetworkId")),
    PeeringType: S.optional(PeeringType).pipe(T.HttpQuery("peeringType")),
    EdgeLocation: S.optional(S.String).pipe(T.HttpQuery("edgeLocation")),
    State: S.optional(PeeringState).pipe(T.HttpQuery("state")),
    MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(T.all(T.Http({ method: "GET", uri: "/peerings" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListPeeringsRequest" }) as any as S.Schema<ListPeeringsRequest>;
export type PeeringList = Peering[];
const PeeringList = /*@__PURE__*/ S.Array(Peering);
export interface ListPeeringsResponse {
  Peerings?: Peering[];
  NextToken?: string;
}
const ListPeeringsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Peerings: S.optional(PeeringList), NextToken: S.optional(S.String) }),
).annotate({ identifier: "ListPeeringsResponse" }) as any as S.Schema<ListPeeringsResponse>;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
    T.all(T.Http({ method: "GET", uri: "/tags/{ResourceArn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ListTagsForResourceRequest",
}) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  TagList?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ TagList: S.optional(TagList) }),
).annotate({
  identifier: "ListTagsForResourceResponse",
}) as any as S.Schema<ListTagsForResourceResponse>;
export interface PutAttachmentRoutingPolicyLabelRequest {
  CoreNetworkId: string;
  AttachmentId: string;
  RoutingPolicyLabel: string;
  ClientToken?: string;
}
const PutAttachmentRoutingPolicyLabelRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String,
    AttachmentId: S.String,
    RoutingPolicyLabel: S.String,
    ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/routing-policy-label" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "PutAttachmentRoutingPolicyLabelRequest",
}) as any as S.Schema<PutAttachmentRoutingPolicyLabelRequest>;
export interface PutAttachmentRoutingPolicyLabelResponse {
  CoreNetworkId?: string;
  AttachmentId?: string;
  RoutingPolicyLabel?: string;
}
const PutAttachmentRoutingPolicyLabelResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.optional(S.String),
    AttachmentId: S.optional(S.String),
    RoutingPolicyLabel: S.optional(S.String),
  }),
).annotate({
  identifier: "PutAttachmentRoutingPolicyLabelResponse",
}) as any as S.Schema<PutAttachmentRoutingPolicyLabelResponse>;
export interface PutCoreNetworkPolicyRequest {
  CoreNetworkId: string;
  PolicyDocument: string;
  Description?: string;
  LatestVersionId?: number;
  ClientToken?: string;
}
const PutCoreNetworkPolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String.pipe(T.HttpLabel("CoreNetworkId")),
    PolicyDocument: S.String,
    Description: S.optional(S.String),
    LatestVersionId: S.optional(S.Number),
    ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/core-networks/{CoreNetworkId}/core-network-policy" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "PutCoreNetworkPolicyRequest",
}) as any as S.Schema<PutCoreNetworkPolicyRequest>;
export interface PutCoreNetworkPolicyResponse {
  CoreNetworkPolicy?: CoreNetworkPolicy;
}
const PutCoreNetworkPolicyResponse =
  DeleteCoreNetworkPolicyVersionResponse as any as S.Schema<PutCoreNetworkPolicyResponse>;
export interface PutResourcePolicyRequest {
  PolicyDocument: string;
  ResourceArn: string;
}
const PutResourcePolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    PolicyDocument: S.String,
    ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/resource-policy/{ResourceArn}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "PutResourcePolicyRequest" }) as any as S.Schema<PutResourcePolicyRequest>;
export interface PutResourcePolicyResponse {}
const PutResourcePolicyResponse =
  DeleteResourcePolicyResponse as any as S.Schema<PutResourcePolicyResponse>;
export interface RegisterTransitGatewayRequest {
  GlobalNetworkId: string;
  TransitGatewayArn: string;
}
const RegisterTransitGatewayRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    TransitGatewayArn: S.String,
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/global-networks/{GlobalNetworkId}/transit-gateway-registrations",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "RegisterTransitGatewayRequest",
}) as any as S.Schema<RegisterTransitGatewayRequest>;
export interface RegisterTransitGatewayResponse {
  TransitGatewayRegistration?: TransitGatewayRegistration;
}
const RegisterTransitGatewayResponse =
  DeregisterTransitGatewayResponse as any as S.Schema<RegisterTransitGatewayResponse>;
export interface RejectAttachmentRequest {
  AttachmentId: string;
}
const RejectAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AttachmentId: S.String.pipe(T.HttpLabel("AttachmentId")) }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/attachments/{AttachmentId}/reject" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "RejectAttachmentRequest" }) as any as S.Schema<RejectAttachmentRequest>;
export interface RejectAttachmentResponse {
  Attachment?: Attachment;
}
const RejectAttachmentResponse =
  AcceptAttachmentResponse as any as S.Schema<RejectAttachmentResponse>;
export interface RemoveAttachmentRoutingPolicyLabelRequest {
  CoreNetworkId: string;
  AttachmentId: string;
}
const RemoveAttachmentRoutingPolicyLabelRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String.pipe(T.HttpLabel("CoreNetworkId")),
    AttachmentId: S.String.pipe(T.HttpLabel("AttachmentId")),
  }).pipe(
    T.all(
      T.Http({
        method: "DELETE",
        uri: "/routing-policy-label/core-network/{CoreNetworkId}/attachment/{AttachmentId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "RemoveAttachmentRoutingPolicyLabelRequest",
}) as any as S.Schema<RemoveAttachmentRoutingPolicyLabelRequest>;
export interface RemoveAttachmentRoutingPolicyLabelResponse {
  CoreNetworkId?: string;
  AttachmentId?: string;
  RoutingPolicyLabel?: string;
}
const RemoveAttachmentRoutingPolicyLabelResponse =
  PutAttachmentRoutingPolicyLabelResponse as any as S.Schema<RemoveAttachmentRoutingPolicyLabelResponse>;
export interface RestoreCoreNetworkPolicyVersionRequest {
  CoreNetworkId: string;
  PolicyVersionId: number;
}
const RestoreCoreNetworkPolicyVersionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String.pipe(T.HttpLabel("CoreNetworkId")),
    PolicyVersionId: S.Number.pipe(T.HttpLabel("PolicyVersionId")),
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/core-networks/{CoreNetworkId}/core-network-policy-versions/{PolicyVersionId}/restore",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "RestoreCoreNetworkPolicyVersionRequest",
}) as any as S.Schema<RestoreCoreNetworkPolicyVersionRequest>;
export interface RestoreCoreNetworkPolicyVersionResponse {
  CoreNetworkPolicy?: CoreNetworkPolicy;
}
const RestoreCoreNetworkPolicyVersionResponse =
  DeleteCoreNetworkPolicyVersionResponse as any as S.Schema<RestoreCoreNetworkPolicyVersionResponse>;
export type Action = string;
export interface StartOrganizationServiceAccessUpdateRequest {
  Action: string;
}
const StartOrganizationServiceAccessUpdateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Action: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/organizations/service-access" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "StartOrganizationServiceAccessUpdateRequest",
}) as any as S.Schema<StartOrganizationServiceAccessUpdateRequest>;
export interface StartOrganizationServiceAccessUpdateResponse {
  OrganizationStatus?: OrganizationStatus;
}
const StartOrganizationServiceAccessUpdateResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ OrganizationStatus: S.optional(OrganizationStatus) }),
).annotate({
  identifier: "StartOrganizationServiceAccessUpdateResponse",
}) as any as S.Schema<StartOrganizationServiceAccessUpdateResponse>;
export interface RouteAnalysisEndpointOptionsSpecification {
  TransitGatewayAttachmentArn?: string;
  IpAddress?: string;
}
const RouteAnalysisEndpointOptionsSpecification = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ TransitGatewayAttachmentArn: S.optional(S.String), IpAddress: S.optional(S.String) }),
).annotate({
  identifier: "RouteAnalysisEndpointOptionsSpecification",
}) as any as S.Schema<RouteAnalysisEndpointOptionsSpecification>;
export interface StartRouteAnalysisRequest {
  GlobalNetworkId: string;
  Source: RouteAnalysisEndpointOptionsSpecification;
  Destination: RouteAnalysisEndpointOptionsSpecification;
  IncludeReturnPath?: boolean;
  UseMiddleboxes?: boolean;
}
const StartRouteAnalysisRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    Source: RouteAnalysisEndpointOptionsSpecification,
    Destination: RouteAnalysisEndpointOptionsSpecification,
    IncludeReturnPath: S.optional(S.Boolean),
    UseMiddleboxes: S.optional(S.Boolean),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/global-networks/{GlobalNetworkId}/route-analyses" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "StartRouteAnalysisRequest",
}) as any as S.Schema<StartRouteAnalysisRequest>;
export interface StartRouteAnalysisResponse {
  RouteAnalysis?: RouteAnalysis;
}
const StartRouteAnalysisResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ RouteAnalysis: S.optional(RouteAnalysis) }),
).annotate({
  identifier: "StartRouteAnalysisResponse",
}) as any as S.Schema<StartRouteAnalysisResponse>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")), Tags: TagList }).pipe(
    T.all(T.Http({ method: "POST", uri: "/tags/{ResourceArn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "TagResourceRequest" }) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteResourcePolicyResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = ExternalRegionCodeList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
    TagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
  }).pipe(
    T.all(T.Http({ method: "DELETE", uri: "/tags/{ResourceArn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "UntagResourceRequest" }) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  DeleteResourcePolicyResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateConnectionRequest {
  GlobalNetworkId: string;
  ConnectionId: string;
  LinkId?: string;
  ConnectedLinkId?: string;
  Description?: string;
}
const UpdateConnectionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    ConnectionId: S.String.pipe(T.HttpLabel("ConnectionId")),
    LinkId: S.optional(S.String),
    ConnectedLinkId: S.optional(S.String),
    Description: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({
        method: "PATCH",
        uri: "/global-networks/{GlobalNetworkId}/connections/{ConnectionId}",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "UpdateConnectionRequest" }) as any as S.Schema<UpdateConnectionRequest>;
export interface UpdateConnectionResponse {
  Connection?: Connection;
}
const UpdateConnectionResponse =
  CreateConnectionResponse as any as S.Schema<UpdateConnectionResponse>;
export interface UpdateCoreNetworkRequest {
  CoreNetworkId: string;
  Description?: string;
}
const UpdateCoreNetworkRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    CoreNetworkId: S.String.pipe(T.HttpLabel("CoreNetworkId")),
    Description: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({ method: "PATCH", uri: "/core-networks/{CoreNetworkId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "UpdateCoreNetworkRequest" }) as any as S.Schema<UpdateCoreNetworkRequest>;
export interface UpdateCoreNetworkResponse {
  CoreNetwork?: CoreNetwork;
}
const UpdateCoreNetworkResponse =
  CreateCoreNetworkResponse as any as S.Schema<UpdateCoreNetworkResponse>;
export interface UpdateDeviceRequest {
  GlobalNetworkId: string;
  DeviceId: string;
  AWSLocation?: AWSLocation;
  Description?: string;
  Type?: string;
  Vendor?: string;
  Model?: string;
  SerialNumber?: string;
  Location?: Location;
  SiteId?: string;
}
const UpdateDeviceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    DeviceId: S.String.pipe(T.HttpLabel("DeviceId")),
    AWSLocation: S.optional(AWSLocation),
    Description: S.optional(S.String),
    Type: S.optional(S.String),
    Vendor: S.optional(S.String),
    Model: S.optional(S.String),
    SerialNumber: S.optional(S.String),
    Location: S.optional(Location),
    SiteId: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({ method: "PATCH", uri: "/global-networks/{GlobalNetworkId}/devices/{DeviceId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "UpdateDeviceRequest" }) as any as S.Schema<UpdateDeviceRequest>;
export interface UpdateDeviceResponse {
  Device?: Device;
}
const UpdateDeviceResponse = CreateDeviceResponse as any as S.Schema<UpdateDeviceResponse>;
export interface UpdateDirectConnectGatewayAttachmentRequest {
  AttachmentId: string;
  EdgeLocations?: string[];
}
const UpdateDirectConnectGatewayAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AttachmentId: S.String.pipe(T.HttpLabel("AttachmentId")),
    EdgeLocations: S.optional(ExternalRegionCodeList),
  }).pipe(
    T.all(
      T.Http({ method: "PATCH", uri: "/direct-connect-gateway-attachments/{AttachmentId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateDirectConnectGatewayAttachmentRequest",
}) as any as S.Schema<UpdateDirectConnectGatewayAttachmentRequest>;
export interface UpdateDirectConnectGatewayAttachmentResponse {
  DirectConnectGatewayAttachment?: DirectConnectGatewayAttachment;
}
const UpdateDirectConnectGatewayAttachmentResponse =
  CreateDirectConnectGatewayAttachmentResponse as any as S.Schema<UpdateDirectConnectGatewayAttachmentResponse>;
export interface UpdateGlobalNetworkRequest {
  GlobalNetworkId: string;
  Description?: string;
}
const UpdateGlobalNetworkRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    Description: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({ method: "PATCH", uri: "/global-networks/{GlobalNetworkId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateGlobalNetworkRequest",
}) as any as S.Schema<UpdateGlobalNetworkRequest>;
export interface UpdateGlobalNetworkResponse {
  GlobalNetwork?: GlobalNetwork;
}
const UpdateGlobalNetworkResponse =
  CreateGlobalNetworkResponse as any as S.Schema<UpdateGlobalNetworkResponse>;
export interface UpdateLinkRequest {
  GlobalNetworkId: string;
  LinkId: string;
  Description?: string;
  Type?: string;
  Bandwidth?: Bandwidth;
  Provider?: string;
}
const UpdateLinkRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    LinkId: S.String.pipe(T.HttpLabel("LinkId")),
    Description: S.optional(S.String),
    Type: S.optional(S.String),
    Bandwidth: S.optional(Bandwidth),
    Provider: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({ method: "PATCH", uri: "/global-networks/{GlobalNetworkId}/links/{LinkId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "UpdateLinkRequest" }) as any as S.Schema<UpdateLinkRequest>;
export interface UpdateLinkResponse {
  Link?: Link;
}
const UpdateLinkResponse = CreateLinkResponse as any as S.Schema<UpdateLinkResponse>;
export interface UpdateNetworkResourceMetadataRequest {
  GlobalNetworkId: string;
  ResourceArn: string;
  Metadata: { [key: string]: string | undefined };
}
const UpdateNetworkResourceMetadataRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
    Metadata: NetworkResourceMetadataMap,
  }).pipe(
    T.all(
      T.Http({
        method: "PATCH",
        uri: "/global-networks/{GlobalNetworkId}/network-resources/{ResourceArn}/metadata",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateNetworkResourceMetadataRequest",
}) as any as S.Schema<UpdateNetworkResourceMetadataRequest>;
export interface UpdateNetworkResourceMetadataResponse {
  ResourceArn?: string;
  Metadata?: { [key: string]: string | undefined };
}
const UpdateNetworkResourceMetadataResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ResourceArn: S.optional(S.String), Metadata: S.optional(NetworkResourceMetadataMap) }),
).annotate({
  identifier: "UpdateNetworkResourceMetadataResponse",
}) as any as S.Schema<UpdateNetworkResourceMetadataResponse>;
export interface UpdateSiteRequest {
  GlobalNetworkId: string;
  SiteId: string;
  Description?: string;
  Location?: Location;
}
const UpdateSiteRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GlobalNetworkId: S.String.pipe(T.HttpLabel("GlobalNetworkId")),
    SiteId: S.String.pipe(T.HttpLabel("SiteId")),
    Description: S.optional(S.String),
    Location: S.optional(Location),
  }).pipe(
    T.all(
      T.Http({ method: "PATCH", uri: "/global-networks/{GlobalNetworkId}/sites/{SiteId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "UpdateSiteRequest" }) as any as S.Schema<UpdateSiteRequest>;
export interface UpdateSiteResponse {
  Site?: Site;
}
const UpdateSiteResponse = CreateSiteResponse as any as S.Schema<UpdateSiteResponse>;
export interface UpdateVpcAttachmentRequest {
  AttachmentId: string;
  AddSubnetArns?: string[];
  RemoveSubnetArns?: string[];
  Options?: VpcOptions;
}
const UpdateVpcAttachmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AttachmentId: S.String.pipe(T.HttpLabel("AttachmentId")),
    AddSubnetArns: S.optional(SubnetArnList),
    RemoveSubnetArns: S.optional(SubnetArnList),
    Options: S.optional(VpcOptions),
  }).pipe(
    T.all(
      T.Http({ method: "PATCH", uri: "/vpc-attachments/{AttachmentId}" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateVpcAttachmentRequest",
}) as any as S.Schema<UpdateVpcAttachmentRequest>;
export interface UpdateVpcAttachmentResponse {
  VpcAttachment?: VpcAttachment;
}
const UpdateVpcAttachmentResponse =
  CreateVpcAttachmentResponse as any as S.Schema<UpdateVpcAttachmentResponse>;
export type RetryAfterSeconds = number;
export type ExceptionContextKey = string;
export type ExceptionContextValue = string;
export type ExceptionContextMap = { [key: string]: string | undefined };
const ExceptionContextMap = NetworkResourceMetadataMap as any as S.Schema<ExceptionContextMap>;
export type ValidationExceptionReason =
  | "UnknownOperation"
  | "CannotParse"
  | "FieldValidationFailed"
  | "Other"
  | (string & {});
const ValidationExceptionReason = S.String;

export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
const ValidationExceptionField = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Name: S.String, Message: S.String }),
).annotate({ identifier: "ValidationExceptionField" }) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ S.Array(ValidationExceptionField);
export type AcceptAttachmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Accepts a core network attachment request.
 *
 * Once the attachment request is accepted by a core network owner, the attachment is
 * created and connected to a core network.
 */
export const acceptAttachment: API.OperationMethod<
  AcceptAttachmentRequest,
  AcceptAttachmentResponse,
  AcceptAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AcceptAttachmentRequest,
  output: AcceptAttachmentResponse,
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
  operationName: "AcceptAttachment",
}));

export type AssociateConnectPeerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a core network Connect peer with a device and optionally, with a link.
 *
 * If you specify a link, it must be associated with the specified device. You can only
 * associate core network Connect peers that have been created on a core network Connect
 * attachment on a core network.
 */
export const associateConnectPeer: API.OperationMethod<
  AssociateConnectPeerRequest,
  AssociateConnectPeerResponse,
  AssociateConnectPeerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateConnectPeerRequest,
  output: AssociateConnectPeerResponse,
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
  operationName: "AssociateConnectPeer",
}));

export type AssociateCustomerGatewayError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a customer gateway with a device and optionally, with a link. If you
 * specify a link, it must be associated with the specified device.
 *
 * You can only associate customer gateways that are connected to a VPN attachment on a
 * transit gateway or core network registered in your global network. When you register a
 * transit gateway or core network, customer gateways that are connected to the transit
 * gateway are automatically included in the global network. To list customer gateways
 * that are connected to a transit gateway, use the DescribeVpnConnections EC2 API and filter by
 * `transit-gateway-id`.
 *
 * You cannot associate a customer gateway with more than one device and link.
 */
export const associateCustomerGateway: API.OperationMethod<
  AssociateCustomerGatewayRequest,
  AssociateCustomerGatewayResponse,
  AssociateCustomerGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateCustomerGatewayRequest,
  output: AssociateCustomerGatewayResponse,
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
  operationName: "AssociateCustomerGateway",
}));

export type AssociateLinkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.
 */
export const associateLink: API.OperationMethod<
  AssociateLinkRequest,
  AssociateLinkResponse,
  AssociateLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateLinkRequest,
  output: AssociateLinkResponse,
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
  operationName: "AssociateLink",
}));

export type AssociateTransitGatewayConnectPeerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a transit gateway Connect peer with a device, and optionally, with a link. If you
 * specify a link, it must be associated with the specified device.
 *
 * You can only associate transit gateway Connect peers that have been created on a
 * transit gateway that's registered in your global network.
 *
 * You cannot associate a transit gateway Connect peer with more than one device and link.
 */
export const associateTransitGatewayConnectPeer: API.OperationMethod<
  AssociateTransitGatewayConnectPeerRequest,
  AssociateTransitGatewayConnectPeerResponse,
  AssociateTransitGatewayConnectPeerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateTransitGatewayConnectPeerRequest,
  output: AssociateTransitGatewayConnectPeerResponse,
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
  operationName: "AssociateTransitGatewayConnectPeer",
}));

export type CreateConnectAttachmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a core network Connect attachment from a specified core network attachment.
 *
 * A core network Connect attachment is a GRE-based tunnel attachment that you can use to
 * establish a connection between a core network and an appliance. A core network Connect
 * attachment uses an existing VPC attachment as the underlying transport mechanism.
 */
export const createConnectAttachment: API.OperationMethod<
  CreateConnectAttachmentRequest,
  CreateConnectAttachmentResponse,
  CreateConnectAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateConnectAttachmentRequest,
  output: CreateConnectAttachmentResponse,
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
  operationName: "CreateConnectAttachment",
}));

export type CreateConnectionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a connection between two devices. The devices can be a physical or virtual appliance that connects to a third-party appliance in a VPC, or a physical appliance that connects to another physical appliance in an on-premises network.
 */
export const createConnection: API.OperationMethod<
  CreateConnectionRequest,
  CreateConnectionResponse,
  CreateConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateConnectionRequest,
  output: CreateConnectionResponse,
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
  operationName: "CreateConnection",
}));

export type CreateConnectPeerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a core network Connect peer for a specified core network connect attachment between a core network and an appliance.
 * The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).
 */
export const createConnectPeer: API.OperationMethod<
  CreateConnectPeerRequest,
  CreateConnectPeerResponse,
  CreateConnectPeerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateConnectPeerRequest,
  output: CreateConnectPeerResponse,
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
  operationName: "CreateConnectPeer",
}));

export type CreateCoreNetworkError =
  | AccessDeniedException
  | ConflictException
  | CoreNetworkPolicyException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a core network as part of your global network, and optionally, with a core network policy.
 */
export const createCoreNetwork: API.OperationMethod<
  CreateCoreNetworkRequest,
  CreateCoreNetworkResponse,
  CreateCoreNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCoreNetworkRequest,
  output: CreateCoreNetworkResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    CoreNetworkPolicyException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCoreNetwork",
}));

export type CreateCoreNetworkPrefixListAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an association between a core network and a prefix list for routing control.
 */
export const createCoreNetworkPrefixListAssociation: API.OperationMethod<
  CreateCoreNetworkPrefixListAssociationRequest,
  CreateCoreNetworkPrefixListAssociationResponse,
  CreateCoreNetworkPrefixListAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCoreNetworkPrefixListAssociationRequest,
  output: CreateCoreNetworkPrefixListAssociationResponse,
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
  operationName: "CreateCoreNetworkPrefixListAssociation",
}));

export type CreateDeviceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new device in a global network. If you specify both a site ID and a
 * location, the location of the site is used for visualization in the Network Manager console.
 */
export const createDevice: API.OperationMethod<
  CreateDeviceRequest,
  CreateDeviceResponse,
  CreateDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDeviceRequest,
  output: CreateDeviceResponse,
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
  operationName: "CreateDevice",
}));

export type CreateDirectConnectGatewayAttachmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Web Services Direct Connect gateway attachment
 */
export const createDirectConnectGatewayAttachment: API.OperationMethod<
  CreateDirectConnectGatewayAttachmentRequest,
  CreateDirectConnectGatewayAttachmentResponse,
  CreateDirectConnectGatewayAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDirectConnectGatewayAttachmentRequest,
  output: CreateDirectConnectGatewayAttachmentResponse,
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
  operationName: "CreateDirectConnectGatewayAttachment",
}));

export type CreateGlobalNetworkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new, empty global network.
 */
export const createGlobalNetwork: API.OperationMethod<
  CreateGlobalNetworkRequest,
  CreateGlobalNetworkResponse,
  CreateGlobalNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateGlobalNetworkRequest,
  output: CreateGlobalNetworkResponse,
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
  operationName: "CreateGlobalNetwork",
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
 * Creates a new link for a specified site.
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

export type CreateSiteError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new site in a global network.
 */
export const createSite: API.OperationMethod<
  CreateSiteRequest,
  CreateSiteResponse,
  CreateSiteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSiteRequest,
  output: CreateSiteResponse,
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
  operationName: "CreateSite",
}));

export type CreateSiteToSiteVpnAttachmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Web Services site-to-site VPN attachment on an edge location of a core network.
 */
export const createSiteToSiteVpnAttachment: API.OperationMethod<
  CreateSiteToSiteVpnAttachmentRequest,
  CreateSiteToSiteVpnAttachmentResponse,
  CreateSiteToSiteVpnAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSiteToSiteVpnAttachmentRequest,
  output: CreateSiteToSiteVpnAttachmentResponse,
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
  operationName: "CreateSiteToSiteVpnAttachment",
}));

export type CreateTransitGatewayPeeringError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a transit gateway peering connection.
 */
export const createTransitGatewayPeering: API.OperationMethod<
  CreateTransitGatewayPeeringRequest,
  CreateTransitGatewayPeeringResponse,
  CreateTransitGatewayPeeringError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTransitGatewayPeeringRequest,
  output: CreateTransitGatewayPeeringResponse,
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
  operationName: "CreateTransitGatewayPeering",
}));

export type CreateTransitGatewayRouteTableAttachmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a transit gateway route table attachment.
 */
export const createTransitGatewayRouteTableAttachment: API.OperationMethod<
  CreateTransitGatewayRouteTableAttachmentRequest,
  CreateTransitGatewayRouteTableAttachmentResponse,
  CreateTransitGatewayRouteTableAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTransitGatewayRouteTableAttachmentRequest,
  output: CreateTransitGatewayRouteTableAttachmentResponse,
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
  operationName: "CreateTransitGatewayRouteTableAttachment",
}));

export type CreateVpcAttachmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a VPC attachment on an edge location of a core network.
 */
export const createVpcAttachment: API.OperationMethod<
  CreateVpcAttachmentRequest,
  CreateVpcAttachmentResponse,
  CreateVpcAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateVpcAttachmentRequest,
  output: CreateVpcAttachmentResponse,
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
  operationName: "CreateVpcAttachment",
}));

export type DeleteAttachmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an attachment. Supports all attachment types.
 */
export const deleteAttachment: API.OperationMethod<
  DeleteAttachmentRequest,
  DeleteAttachmentResponse,
  DeleteAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAttachmentRequest,
  output: DeleteAttachmentResponse,
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
  operationName: "DeleteAttachment",
}));

export type DeleteConnectionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified connection in your global network.
 */
export const deleteConnection: API.OperationMethod<
  DeleteConnectionRequest,
  DeleteConnectionResponse,
  DeleteConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConnectionRequest,
  output: DeleteConnectionResponse,
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
  operationName: "DeleteConnection",
}));

export type DeleteConnectPeerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a Connect peer.
 */
export const deleteConnectPeer: API.OperationMethod<
  DeleteConnectPeerRequest,
  DeleteConnectPeerResponse,
  DeleteConnectPeerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConnectPeerRequest,
  output: DeleteConnectPeerResponse,
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
  operationName: "DeleteConnectPeer",
}));

export type DeleteCoreNetworkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a core network along with all core network policies. This can only be done if there are no attachments on a core network.
 */
export const deleteCoreNetwork: API.OperationMethod<
  DeleteCoreNetworkRequest,
  DeleteCoreNetworkResponse,
  DeleteCoreNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCoreNetworkRequest,
  output: DeleteCoreNetworkResponse,
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
  operationName: "DeleteCoreNetwork",
}));

export type DeleteCoreNetworkPolicyVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a policy version from a core network. You can't delete the current LIVE policy.
 */
export const deleteCoreNetworkPolicyVersion: API.OperationMethod<
  DeleteCoreNetworkPolicyVersionRequest,
  DeleteCoreNetworkPolicyVersionResponse,
  DeleteCoreNetworkPolicyVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCoreNetworkPolicyVersionRequest,
  output: DeleteCoreNetworkPolicyVersionResponse,
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
  operationName: "DeleteCoreNetworkPolicyVersion",
}));

export type DeleteCoreNetworkPrefixListAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an association between a core network and a prefix list.
 */
export const deleteCoreNetworkPrefixListAssociation: API.OperationMethod<
  DeleteCoreNetworkPrefixListAssociationRequest,
  DeleteCoreNetworkPrefixListAssociationResponse,
  DeleteCoreNetworkPrefixListAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCoreNetworkPrefixListAssociationRequest,
  output: DeleteCoreNetworkPrefixListAssociationResponse,
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
  operationName: "DeleteCoreNetworkPrefixListAssociation",
}));

export type DeleteDeviceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing device. You must first disassociate the device from any links and
 * customer gateways.
 */
export const deleteDevice: API.OperationMethod<
  DeleteDeviceRequest,
  DeleteDeviceResponse,
  DeleteDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDeviceRequest,
  output: DeleteDeviceResponse,
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
  operationName: "DeleteDevice",
}));

export type DeleteGlobalNetworkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing global network. You must first delete all global network objects
 * (devices, links, and sites), deregister all transit gateways, and delete any core networks.
 */
export const deleteGlobalNetwork: API.OperationMethod<
  DeleteGlobalNetworkRequest,
  DeleteGlobalNetworkResponse,
  DeleteGlobalNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteGlobalNetworkRequest,
  output: DeleteGlobalNetworkResponse,
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
  operationName: "DeleteGlobalNetwork",
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
 * Deletes an existing link. You must first disassociate the link from any devices and
 * customer gateways.
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

export type DeletePeeringError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing peering connection.
 */
export const deletePeering: API.OperationMethod<
  DeletePeeringRequest,
  DeletePeeringResponse,
  DeletePeeringError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePeeringRequest,
  output: DeletePeeringResponse,
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
  operationName: "DeletePeering",
}));

export type DeleteResourcePolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a resource policy for the specified resource. This revokes the access of the principals specified in the resource policy.
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
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicy",
}));

export type DeleteSiteError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing site. The site cannot be associated with any device or link.
 */
export const deleteSite: API.OperationMethod<
  DeleteSiteRequest,
  DeleteSiteResponse,
  DeleteSiteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSiteRequest,
  output: DeleteSiteResponse,
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
  operationName: "DeleteSite",
}));

export type DeregisterTransitGatewayError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deregisters a transit gateway from your global network. This action does not delete
 * your transit gateway, or modify any of its attachments. This action removes any customer gateway associations.
 */
export const deregisterTransitGateway: API.OperationMethod<
  DeregisterTransitGatewayRequest,
  DeregisterTransitGatewayResponse,
  DeregisterTransitGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeregisterTransitGatewayRequest,
  output: DeregisterTransitGatewayResponse,
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
  operationName: "DeregisterTransitGateway",
}));

export type DescribeGlobalNetworksError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes one or more global networks. By default, all global networks are
 * described. To describe the objects in your global network, you must use the appropriate
 * `Get*` action. For example, to list the transit gateways in your global
 * network, use GetTransitGatewayRegistrations.
 */
export const describeGlobalNetworks: API.PaginatedOperationMethod<
  DescribeGlobalNetworksRequest,
  DescribeGlobalNetworksResponse,
  DescribeGlobalNetworksError,
  Credentials | HttpClient.HttpClient,
  GlobalNetwork
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeGlobalNetworksRequest,
  output: DescribeGlobalNetworksResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeGlobalNetworks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "GlobalNetworks",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DisassociateConnectPeerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a core network Connect peer from a device and a link.
 */
export const disassociateConnectPeer: API.OperationMethod<
  DisassociateConnectPeerRequest,
  DisassociateConnectPeerResponse,
  DisassociateConnectPeerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateConnectPeerRequest,
  output: DisassociateConnectPeerResponse,
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
  operationName: "DisassociateConnectPeer",
}));

export type DisassociateCustomerGatewayError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a customer gateway from a device and a link.
 */
export const disassociateCustomerGateway: API.OperationMethod<
  DisassociateCustomerGatewayRequest,
  DisassociateCustomerGatewayResponse,
  DisassociateCustomerGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateCustomerGatewayRequest,
  output: DisassociateCustomerGatewayResponse,
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
  operationName: "DisassociateCustomerGateway",
}));

export type DisassociateLinkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates an existing device from a link. You must first disassociate any customer
 * gateways that are associated with the link.
 */
export const disassociateLink: API.OperationMethod<
  DisassociateLinkRequest,
  DisassociateLinkResponse,
  DisassociateLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateLinkRequest,
  output: DisassociateLinkResponse,
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
  operationName: "DisassociateLink",
}));

export type DisassociateTransitGatewayConnectPeerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a transit gateway Connect peer from a device and link.
 */
export const disassociateTransitGatewayConnectPeer: API.OperationMethod<
  DisassociateTransitGatewayConnectPeerRequest,
  DisassociateTransitGatewayConnectPeerResponse,
  DisassociateTransitGatewayConnectPeerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateTransitGatewayConnectPeerRequest,
  output: DisassociateTransitGatewayConnectPeerResponse,
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
  operationName: "DisassociateTransitGatewayConnectPeer",
}));

export type ExecuteCoreNetworkChangeSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Executes a change set on your core network. Deploys changes globally based on the policy submitted..
 */
export const executeCoreNetworkChangeSet: API.OperationMethod<
  ExecuteCoreNetworkChangeSetRequest,
  ExecuteCoreNetworkChangeSetResponse,
  ExecuteCoreNetworkChangeSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExecuteCoreNetworkChangeSetRequest,
  output: ExecuteCoreNetworkChangeSetResponse,
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
  operationName: "ExecuteCoreNetworkChangeSet",
}));

export type GetConnectAttachmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a core network Connect attachment.
 */
export const getConnectAttachment: API.OperationMethod<
  GetConnectAttachmentRequest,
  GetConnectAttachmentResponse,
  GetConnectAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConnectAttachmentRequest,
  output: GetConnectAttachmentResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConnectAttachment",
}));

export type GetConnectionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about one or more of your connections in a global network.
 */
export const getConnections: API.PaginatedOperationMethod<
  GetConnectionsRequest,
  GetConnectionsResponse,
  GetConnectionsError,
  Credentials | HttpClient.HttpClient,
  Connection
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetConnectionsRequest,
  output: GetConnectionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConnections",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Connections",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetConnectPeerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a core network Connect peer.
 */
export const getConnectPeer: API.OperationMethod<
  GetConnectPeerRequest,
  GetConnectPeerResponse,
  GetConnectPeerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConnectPeerRequest,
  output: GetConnectPeerResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConnectPeer",
}));

export type GetConnectPeerAssociationsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a core network Connect peer associations.
 */
export const getConnectPeerAssociations: API.PaginatedOperationMethod<
  GetConnectPeerAssociationsRequest,
  GetConnectPeerAssociationsResponse,
  GetConnectPeerAssociationsError,
  Credentials | HttpClient.HttpClient,
  ConnectPeerAssociation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetConnectPeerAssociationsRequest,
  output: GetConnectPeerAssociationsResponse,
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
  operationName: "GetConnectPeerAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ConnectPeerAssociations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetCoreNetworkError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the LIVE policy for a core network.
 */
export const getCoreNetwork: API.OperationMethod<
  GetCoreNetworkRequest,
  GetCoreNetworkResponse,
  GetCoreNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCoreNetworkRequest,
  output: GetCoreNetworkResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCoreNetwork",
}));

export type GetCoreNetworkChangeEventsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a core network change event.
 */
export const getCoreNetworkChangeEvents: API.PaginatedOperationMethod<
  GetCoreNetworkChangeEventsRequest,
  GetCoreNetworkChangeEventsResponse,
  GetCoreNetworkChangeEventsError,
  Credentials | HttpClient.HttpClient,
  CoreNetworkChangeEvent
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetCoreNetworkChangeEventsRequest,
  output: GetCoreNetworkChangeEventsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCoreNetworkChangeEvents",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CoreNetworkChangeEvents",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetCoreNetworkChangeSetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a change set between the LIVE core network policy and a submitted policy.
 */
export const getCoreNetworkChangeSet: API.PaginatedOperationMethod<
  GetCoreNetworkChangeSetRequest,
  GetCoreNetworkChangeSetResponse,
  GetCoreNetworkChangeSetError,
  Credentials | HttpClient.HttpClient,
  CoreNetworkChange
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetCoreNetworkChangeSetRequest,
  output: GetCoreNetworkChangeSetResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCoreNetworkChangeSet",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CoreNetworkChanges",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetCoreNetworkPolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns details about a core network policy. You can get details about your current live policy or any previous policy version.
 */
export const getCoreNetworkPolicy: API.OperationMethod<
  GetCoreNetworkPolicyRequest,
  GetCoreNetworkPolicyResponse,
  GetCoreNetworkPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCoreNetworkPolicyRequest,
  output: GetCoreNetworkPolicyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCoreNetworkPolicy",
}));

export type GetCustomerGatewayAssociationsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the association information for customer gateways that are associated with
 * devices and links in your global network.
 */
export const getCustomerGatewayAssociations: API.PaginatedOperationMethod<
  GetCustomerGatewayAssociationsRequest,
  GetCustomerGatewayAssociationsResponse,
  GetCustomerGatewayAssociationsError,
  Credentials | HttpClient.HttpClient,
  CustomerGatewayAssociation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetCustomerGatewayAssociationsRequest,
  output: GetCustomerGatewayAssociationsResponse,
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
  operationName: "GetCustomerGatewayAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CustomerGatewayAssociations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetDevicesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about one or more of your devices in a global network.
 */
export const getDevices: API.PaginatedOperationMethod<
  GetDevicesRequest,
  GetDevicesResponse,
  GetDevicesError,
  Credentials | HttpClient.HttpClient,
  Device
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetDevicesRequest,
  output: GetDevicesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDevices",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Devices",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetDirectConnectGatewayAttachmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a specific Amazon Web Services Direct Connect gateway attachment.
 */
export const getDirectConnectGatewayAttachment: API.OperationMethod<
  GetDirectConnectGatewayAttachmentRequest,
  GetDirectConnectGatewayAttachmentResponse,
  GetDirectConnectGatewayAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDirectConnectGatewayAttachmentRequest,
  output: GetDirectConnectGatewayAttachmentResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDirectConnectGatewayAttachment",
}));

export type GetLinkAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the link associations for a device or a link. Either the device ID or the link ID
 * must be specified.
 */
export const getLinkAssociations: API.PaginatedOperationMethod<
  GetLinkAssociationsRequest,
  GetLinkAssociationsResponse,
  GetLinkAssociationsError,
  Credentials | HttpClient.HttpClient,
  LinkAssociation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetLinkAssociationsRequest,
  output: GetLinkAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLinkAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "LinkAssociations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetLinksError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about one or more links in a specified global network.
 *
 * If you specify the site ID, you cannot specify the type or provider in the same request. You can specify the type and provider in the same request.
 */
export const getLinks: API.PaginatedOperationMethod<
  GetLinksRequest,
  GetLinksResponse,
  GetLinksError,
  Credentials | HttpClient.HttpClient,
  Link
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetLinksRequest,
  output: GetLinksResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLinks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Links",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetNetworkResourceCountsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the count of network resources, by resource type, for the specified global network.
 */
export const getNetworkResourceCounts: API.PaginatedOperationMethod<
  GetNetworkResourceCountsRequest,
  GetNetworkResourceCountsResponse,
  GetNetworkResourceCountsError,
  Credentials | HttpClient.HttpClient,
  NetworkResourceCount
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetNetworkResourceCountsRequest,
  output: GetNetworkResourceCountsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNetworkResourceCounts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "NetworkResourceCounts",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetNetworkResourceRelationshipsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the network resource relationships for the specified global network.
 */
export const getNetworkResourceRelationships: API.PaginatedOperationMethod<
  GetNetworkResourceRelationshipsRequest,
  GetNetworkResourceRelationshipsResponse,
  GetNetworkResourceRelationshipsError,
  Credentials | HttpClient.HttpClient,
  Relationship
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetNetworkResourceRelationshipsRequest,
  output: GetNetworkResourceRelationshipsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNetworkResourceRelationships",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Relationships",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetNetworkResourcesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the network resources for the specified global network.
 *
 * The results include information from the corresponding Describe call for the resource, minus any sensitive information such as pre-shared keys.
 */
export const getNetworkResources: API.PaginatedOperationMethod<
  GetNetworkResourcesRequest,
  GetNetworkResourcesResponse,
  GetNetworkResourcesError,
  Credentials | HttpClient.HttpClient,
  NetworkResource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetNetworkResourcesRequest,
  output: GetNetworkResourcesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNetworkResources",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "NetworkResources",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetNetworkRoutesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the network routes of the specified global network.
 */
export const getNetworkRoutes: API.OperationMethod<
  GetNetworkRoutesRequest,
  GetNetworkRoutesResponse,
  GetNetworkRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetNetworkRoutesRequest,
  output: GetNetworkRoutesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNetworkRoutes",
}));

export type GetNetworkTelemetryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the network telemetry of the specified global network.
 */
export const getNetworkTelemetry: API.PaginatedOperationMethod<
  GetNetworkTelemetryRequest,
  GetNetworkTelemetryResponse,
  GetNetworkTelemetryError,
  Credentials | HttpClient.HttpClient,
  NetworkTelemetry
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetNetworkTelemetryRequest,
  output: GetNetworkTelemetryResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNetworkTelemetry",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "NetworkTelemetry",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a resource policy.
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
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePolicy",
}));

export type GetRouteAnalysisError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified route analysis.
 */
export const getRouteAnalysis: API.OperationMethod<
  GetRouteAnalysisRequest,
  GetRouteAnalysisResponse,
  GetRouteAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRouteAnalysisRequest,
  output: GetRouteAnalysisResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRouteAnalysis",
}));

export type GetSitesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about one or more of your sites in a global network.
 */
export const getSites: API.PaginatedOperationMethod<
  GetSitesRequest,
  GetSitesResponse,
  GetSitesError,
  Credentials | HttpClient.HttpClient,
  Site
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetSitesRequest,
  output: GetSitesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSites",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Sites",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetSiteToSiteVpnAttachmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a site-to-site VPN attachment.
 */
export const getSiteToSiteVpnAttachment: API.OperationMethod<
  GetSiteToSiteVpnAttachmentRequest,
  GetSiteToSiteVpnAttachmentResponse,
  GetSiteToSiteVpnAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSiteToSiteVpnAttachmentRequest,
  output: GetSiteToSiteVpnAttachmentResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSiteToSiteVpnAttachment",
}));

export type GetTransitGatewayConnectPeerAssociationsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about one or more of your transit gateway Connect peer associations in a global network.
 */
export const getTransitGatewayConnectPeerAssociations: API.PaginatedOperationMethod<
  GetTransitGatewayConnectPeerAssociationsRequest,
  GetTransitGatewayConnectPeerAssociationsResponse,
  GetTransitGatewayConnectPeerAssociationsError,
  Credentials | HttpClient.HttpClient,
  TransitGatewayConnectPeerAssociation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetTransitGatewayConnectPeerAssociationsRequest,
  output: GetTransitGatewayConnectPeerAssociationsResponse,
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
  operationName: "GetTransitGatewayConnectPeerAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TransitGatewayConnectPeerAssociations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetTransitGatewayPeeringError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a transit gateway peer.
 */
export const getTransitGatewayPeering: API.OperationMethod<
  GetTransitGatewayPeeringRequest,
  GetTransitGatewayPeeringResponse,
  GetTransitGatewayPeeringError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTransitGatewayPeeringRequest,
  output: GetTransitGatewayPeeringResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTransitGatewayPeering",
}));

export type GetTransitGatewayRegistrationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the transit gateway registrations in a specified
 * global network.
 */
export const getTransitGatewayRegistrations: API.PaginatedOperationMethod<
  GetTransitGatewayRegistrationsRequest,
  GetTransitGatewayRegistrationsResponse,
  GetTransitGatewayRegistrationsError,
  Credentials | HttpClient.HttpClient,
  TransitGatewayRegistration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetTransitGatewayRegistrationsRequest,
  output: GetTransitGatewayRegistrationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTransitGatewayRegistrations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TransitGatewayRegistrations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetTransitGatewayRouteTableAttachmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a transit gateway route table attachment.
 */
export const getTransitGatewayRouteTableAttachment: API.OperationMethod<
  GetTransitGatewayRouteTableAttachmentRequest,
  GetTransitGatewayRouteTableAttachmentResponse,
  GetTransitGatewayRouteTableAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTransitGatewayRouteTableAttachmentRequest,
  output: GetTransitGatewayRouteTableAttachmentResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTransitGatewayRouteTableAttachment",
}));

export type GetVpcAttachmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a VPC attachment.
 */
export const getVpcAttachment: API.OperationMethod<
  GetVpcAttachmentRequest,
  GetVpcAttachmentResponse,
  GetVpcAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetVpcAttachmentRequest,
  output: GetVpcAttachmentResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVpcAttachment",
}));

export type ListAttachmentRoutingPolicyAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the routing policy associations for attachments in a core network.
 */
export const listAttachmentRoutingPolicyAssociations: API.PaginatedOperationMethod<
  ListAttachmentRoutingPolicyAssociationsRequest,
  ListAttachmentRoutingPolicyAssociationsResponse,
  ListAttachmentRoutingPolicyAssociationsError,
  Credentials | HttpClient.HttpClient,
  AttachmentRoutingPolicyAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAttachmentRoutingPolicyAssociationsRequest,
  output: ListAttachmentRoutingPolicyAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAttachmentRoutingPolicyAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AttachmentRoutingPolicyAssociations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAttachmentsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of core network attachments.
 */
export const listAttachments: API.PaginatedOperationMethod<
  ListAttachmentsRequest,
  ListAttachmentsResponse,
  ListAttachmentsError,
  Credentials | HttpClient.HttpClient,
  Attachment
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAttachmentsRequest,
  output: ListAttachmentsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAttachments",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Attachments",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListConnectPeersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of core network Connect peers.
 */
export const listConnectPeers: API.PaginatedOperationMethod<
  ListConnectPeersRequest,
  ListConnectPeersResponse,
  ListConnectPeersError,
  Credentials | HttpClient.HttpClient,
  ConnectPeerSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListConnectPeersRequest,
  output: ListConnectPeersResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnectPeers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ConnectPeers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCoreNetworkPolicyVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of core network policy versions.
 */
export const listCoreNetworkPolicyVersions: API.PaginatedOperationMethod<
  ListCoreNetworkPolicyVersionsRequest,
  ListCoreNetworkPolicyVersionsResponse,
  ListCoreNetworkPolicyVersionsError,
  Credentials | HttpClient.HttpClient,
  CoreNetworkPolicyVersion
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCoreNetworkPolicyVersionsRequest,
  output: ListCoreNetworkPolicyVersionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCoreNetworkPolicyVersions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CoreNetworkPolicyVersions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCoreNetworkPrefixListAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the prefix list associations for a core network.
 */
export const listCoreNetworkPrefixListAssociations: API.PaginatedOperationMethod<
  ListCoreNetworkPrefixListAssociationsRequest,
  ListCoreNetworkPrefixListAssociationsResponse,
  ListCoreNetworkPrefixListAssociationsError,
  Credentials | HttpClient.HttpClient,
  PrefixListAssociation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCoreNetworkPrefixListAssociationsRequest,
  output: ListCoreNetworkPrefixListAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCoreNetworkPrefixListAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PrefixListAssociations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCoreNetworkRoutingInformationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists routing information for a core network, including routes and their attributes.
 */
export const listCoreNetworkRoutingInformation: API.PaginatedOperationMethod<
  ListCoreNetworkRoutingInformationRequest,
  ListCoreNetworkRoutingInformationResponse,
  ListCoreNetworkRoutingInformationError,
  Credentials | HttpClient.HttpClient,
  CoreNetworkRoutingInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCoreNetworkRoutingInformationRequest,
  output: ListCoreNetworkRoutingInformationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCoreNetworkRoutingInformation",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CoreNetworkRoutingInformation",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCoreNetworksError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of owned and shared core networks.
 */
export const listCoreNetworks: API.PaginatedOperationMethod<
  ListCoreNetworksRequest,
  ListCoreNetworksResponse,
  ListCoreNetworksError,
  Credentials | HttpClient.HttpClient,
  CoreNetworkSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCoreNetworksRequest,
  output: ListCoreNetworksResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCoreNetworks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CoreNetworks",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListOrganizationServiceAccessStatusError = CommonErrors;
/**
 * Gets the status of the Service Linked Role (SLR) deployment for the accounts in a given Amazon Web Services Organization.
 */
export const listOrganizationServiceAccessStatus: API.OperationMethod<
  ListOrganizationServiceAccessStatusRequest,
  ListOrganizationServiceAccessStatusResponse,
  ListOrganizationServiceAccessStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListOrganizationServiceAccessStatusRequest,
  output: ListOrganizationServiceAccessStatusResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOrganizationServiceAccessStatus",
}));

export type ListPeeringsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the peerings for a core network.
 */
export const listPeerings: API.PaginatedOperationMethod<
  ListPeeringsRequest,
  ListPeeringsResponse,
  ListPeeringsError,
  Credentials | HttpClient.HttpClient,
  Peering
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPeeringsRequest,
  output: ListPeeringsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPeerings",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Peerings",
    pageSize: "MaxResults",
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
 * Lists the tags for a specified resource.
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

export type PutAttachmentRoutingPolicyLabelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Applies a routing policy label to an attachment for traffic routing decisions.
 */
export const putAttachmentRoutingPolicyLabel: API.OperationMethod<
  PutAttachmentRoutingPolicyLabelRequest,
  PutAttachmentRoutingPolicyLabelResponse,
  PutAttachmentRoutingPolicyLabelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAttachmentRoutingPolicyLabelRequest,
  output: PutAttachmentRoutingPolicyLabelResponse,
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
  operationName: "PutAttachmentRoutingPolicyLabel",
}));

export type PutCoreNetworkPolicyError =
  | AccessDeniedException
  | ConflictException
  | CoreNetworkPolicyException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and the submitted policy.
 */
export const putCoreNetworkPolicy: API.OperationMethod<
  PutCoreNetworkPolicyRequest,
  PutCoreNetworkPolicyResponse,
  PutCoreNetworkPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutCoreNetworkPolicyRequest,
  output: PutCoreNetworkPolicyResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    CoreNetworkPolicyException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutCoreNetworkPolicy",
}));

export type PutResourcePolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates a resource policy.
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
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourcePolicy",
}));

export type RegisterTransitGatewayError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Registers a transit gateway in your global network. Not all Regions support transit
 * gateways for global networks. For a list of the supported Regions, see Region Availability in the Amazon Web Services Transit Gateways for Global
 * Networks User Guide. The transit gateway can be in any of the supported
 * Amazon Web Services Regions, but it must be owned by the same Amazon Web Services account that owns the global
 * network. You cannot register a transit gateway in more than one global network.
 */
export const registerTransitGateway: API.OperationMethod<
  RegisterTransitGatewayRequest,
  RegisterTransitGatewayResponse,
  RegisterTransitGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterTransitGatewayRequest,
  output: RegisterTransitGatewayResponse,
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
  operationName: "RegisterTransitGateway",
}));

export type RejectAttachmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Rejects a core network attachment request.
 */
export const rejectAttachment: API.OperationMethod<
  RejectAttachmentRequest,
  RejectAttachmentResponse,
  RejectAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RejectAttachmentRequest,
  output: RejectAttachmentResponse,
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
  operationName: "RejectAttachment",
}));

export type RemoveAttachmentRoutingPolicyLabelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a routing policy label from an attachment.
 */
export const removeAttachmentRoutingPolicyLabel: API.OperationMethod<
  RemoveAttachmentRoutingPolicyLabelRequest,
  RemoveAttachmentRoutingPolicyLabelResponse,
  RemoveAttachmentRoutingPolicyLabelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveAttachmentRoutingPolicyLabelRequest,
  output: RemoveAttachmentRoutingPolicyLabelResponse,
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
  operationName: "RemoveAttachmentRoutingPolicyLabel",
}));

export type RestoreCoreNetworkPolicyVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Restores a previous policy version as a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and restored policy.
 */
export const restoreCoreNetworkPolicyVersion: API.OperationMethod<
  RestoreCoreNetworkPolicyVersionRequest,
  RestoreCoreNetworkPolicyVersionResponse,
  RestoreCoreNetworkPolicyVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreCoreNetworkPolicyVersionRequest,
  output: RestoreCoreNetworkPolicyVersionResponse,
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
  operationName: "RestoreCoreNetworkPolicyVersion",
}));

export type StartOrganizationServiceAccessUpdateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables the Network Manager service for an Amazon Web Services Organization. This can only be called by a management account within the organization.
 */
export const startOrganizationServiceAccessUpdate: API.OperationMethod<
  StartOrganizationServiceAccessUpdateRequest,
  StartOrganizationServiceAccessUpdateResponse,
  StartOrganizationServiceAccessUpdateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartOrganizationServiceAccessUpdateRequest,
  output: StartOrganizationServiceAccessUpdateResponse,
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
  operationName: "StartOrganizationServiceAccessUpdate",
}));

export type StartRouteAnalysisError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts analyzing the routing path between the specified source and destination. For more information,
 * see Route Analyzer.
 */
export const startRouteAnalysis: API.OperationMethod<
  StartRouteAnalysisRequest,
  StartRouteAnalysisResponse,
  StartRouteAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartRouteAnalysisRequest,
  output: StartRouteAnalysisResponse,
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
  operationName: "StartRouteAnalysis",
}));

export type TagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Tags a specified resource.
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
    ConflictException,
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
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes tags from a specified resource.
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
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateConnectionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the information for an existing connection. To remove information for any of the parameters,
 * specify an empty string.
 */
export const updateConnection: API.OperationMethod<
  UpdateConnectionRequest,
  UpdateConnectionResponse,
  UpdateConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConnectionRequest,
  output: UpdateConnectionResponse,
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
  operationName: "UpdateConnection",
}));

export type UpdateCoreNetworkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the description of a core network.
 */
export const updateCoreNetwork: API.OperationMethod<
  UpdateCoreNetworkRequest,
  UpdateCoreNetworkResponse,
  UpdateCoreNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCoreNetworkRequest,
  output: UpdateCoreNetworkResponse,
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
  operationName: "UpdateCoreNetwork",
}));

export type UpdateDeviceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the details for an existing device. To remove information for any of the
 * parameters, specify an empty string.
 */
export const updateDevice: API.OperationMethod<
  UpdateDeviceRequest,
  UpdateDeviceResponse,
  UpdateDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDeviceRequest,
  output: UpdateDeviceResponse,
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
  operationName: "UpdateDevice",
}));

export type UpdateDirectConnectGatewayAttachmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the edge locations associated with an Amazon Web Services Direct Connect gateway attachment.
 */
export const updateDirectConnectGatewayAttachment: API.OperationMethod<
  UpdateDirectConnectGatewayAttachmentRequest,
  UpdateDirectConnectGatewayAttachmentResponse,
  UpdateDirectConnectGatewayAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDirectConnectGatewayAttachmentRequest,
  output: UpdateDirectConnectGatewayAttachmentResponse,
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
  operationName: "UpdateDirectConnectGatewayAttachment",
}));

export type UpdateGlobalNetworkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing global network. To remove information for any of the parameters,
 * specify an empty string.
 */
export const updateGlobalNetwork: API.OperationMethod<
  UpdateGlobalNetworkRequest,
  UpdateGlobalNetworkResponse,
  UpdateGlobalNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateGlobalNetworkRequest,
  output: UpdateGlobalNetworkResponse,
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
  operationName: "UpdateGlobalNetwork",
}));

export type UpdateLinkError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the details for an existing link. To remove information for any of the
 * parameters, specify an empty string.
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
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLink",
}));

export type UpdateNetworkResourceMetadataError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the resource metadata for the specified global network.
 */
export const updateNetworkResourceMetadata: API.OperationMethod<
  UpdateNetworkResourceMetadataRequest,
  UpdateNetworkResourceMetadataResponse,
  UpdateNetworkResourceMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateNetworkResourceMetadataRequest,
  output: UpdateNetworkResourceMetadataResponse,
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
  operationName: "UpdateNetworkResourceMetadata",
}));

export type UpdateSiteError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the information for an existing site. To remove information for any of the
 * parameters, specify an empty string.
 */
export const updateSite: API.OperationMethod<
  UpdateSiteRequest,
  UpdateSiteResponse,
  UpdateSiteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSiteRequest,
  output: UpdateSiteResponse,
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
  operationName: "UpdateSite",
}));

export type UpdateVpcAttachmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a VPC attachment.
 */
export const updateVpcAttachment: API.OperationMethod<
  UpdateVpcAttachmentRequest,
  UpdateVpcAttachmentResponse,
  UpdateVpcAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateVpcAttachmentRequest,
  output: UpdateVpcAttachmentResponse,
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
  operationName: "UpdateVpcAttachment",
}));
