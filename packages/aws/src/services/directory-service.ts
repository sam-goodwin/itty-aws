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
const ns = /*@__PURE__*/ T.XmlNamespace("http://directoryservice.amazonaws.com/doc/2015-04-16/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Directory Service",
  serviceShapeName: "DirectoryService_20150416",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "ds" });
const ver = /*@__PURE__*/ T.ServiceVersion("2015-04-16");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
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
              `https://ds-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://ds-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://ds.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://ds.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()("AccessDeniedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    RequestId: /*@__PURE__*/ S.optional(S.String),
  }).pipe(C.withAuthError) {}
export class ADAssessmentLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ADAssessmentLimitExceededException>()(
    "ADAssessmentLimitExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class AuthenticationFailedException
  extends /*@__PURE__*/ S.TaggedError<AuthenticationFailedException>()(
    "AuthenticationFailedException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class CertificateAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<CertificateAlreadyExistsException>()(
    "CertificateAlreadyExistsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ).pipe(C.withAlreadyExistsError) {}
export class CertificateDoesNotExistException
  extends /*@__PURE__*/ S.TaggedError<CertificateDoesNotExistException>()(
    "CertificateDoesNotExistException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class CertificateInUseException
  extends /*@__PURE__*/ S.TaggedError<CertificateInUseException>()("CertificateInUseException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    RequestId: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class CertificateLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<CertificateLimitExceededException>()(
    "CertificateLimitExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class ClientException
  extends /*@__PURE__*/ S.TaggedError<ClientException>()("ClientException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    RequestId: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class DirectoryAlreadyInRegionException
  extends /*@__PURE__*/ S.TaggedError<DirectoryAlreadyInRegionException>()(
    "DirectoryAlreadyInRegionException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class DirectoryAlreadySharedException
  extends /*@__PURE__*/ S.TaggedError<DirectoryAlreadySharedException>()(
    "DirectoryAlreadySharedException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class DirectoryDoesNotExistException
  extends /*@__PURE__*/ S.TaggedError<DirectoryDoesNotExistException>()(
    "DirectoryDoesNotExistException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class DirectoryInDesiredStateException
  extends /*@__PURE__*/ S.TaggedError<DirectoryInDesiredStateException>()(
    "DirectoryInDesiredStateException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class DirectoryLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<DirectoryLimitExceededException>()(
    "DirectoryLimitExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class DirectoryNotSharedException
  extends /*@__PURE__*/ S.TaggedError<DirectoryNotSharedException>()(
    "DirectoryNotSharedException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class DirectoryUnavailableException
  extends /*@__PURE__*/ S.TaggedError<DirectoryUnavailableException>()(
    "DirectoryUnavailableException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class DisableAlreadyInProgressException
  extends /*@__PURE__*/ S.TaggedError<DisableAlreadyInProgressException>()(
    "DisableAlreadyInProgressException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class DomainControllerLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<DomainControllerLimitExceededException>()(
    "DomainControllerLimitExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class EnableAlreadyInProgressException
  extends /*@__PURE__*/ S.TaggedError<EnableAlreadyInProgressException>()(
    "EnableAlreadyInProgressException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class EntityAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<EntityAlreadyExistsException>()(
    "EntityAlreadyExistsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ).pipe(C.withAlreadyExistsError) {}
export class EntityDoesNotExistException
  extends /*@__PURE__*/ S.TaggedError<EntityDoesNotExistException>()(
    "EntityDoesNotExistException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class IncompatibleSettingsException
  extends /*@__PURE__*/ S.TaggedError<IncompatibleSettingsException>()(
    "IncompatibleSettingsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class InsufficientPermissionsException
  extends /*@__PURE__*/ S.TaggedError<InsufficientPermissionsException>()(
    "InsufficientPermissionsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class InvalidCertificateException
  extends /*@__PURE__*/ S.TaggedError<InvalidCertificateException>()(
    "InvalidCertificateException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class InvalidClientAuthStatusException
  extends /*@__PURE__*/ S.TaggedError<InvalidClientAuthStatusException>()(
    "InvalidClientAuthStatusException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class InvalidLDAPSStatusException
  extends /*@__PURE__*/ S.TaggedError<InvalidLDAPSStatusException>()(
    "InvalidLDAPSStatusException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class InvalidNextTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    RequestId: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()("InvalidParameterException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    RequestId: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class InvalidPasswordException
  extends /*@__PURE__*/ S.TaggedError<InvalidPasswordException>()("InvalidPasswordException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    RequestId: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class InvalidTargetException
  extends /*@__PURE__*/ S.TaggedError<InvalidTargetException>()("InvalidTargetException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    RequestId: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class IpRouteLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<IpRouteLimitExceededException>()(
    "IpRouteLimitExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class NoAvailableCertificateException
  extends /*@__PURE__*/ S.TaggedError<NoAvailableCertificateException>()(
    "NoAvailableCertificateException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class OrganizationsException
  extends /*@__PURE__*/ S.TaggedError<OrganizationsException>()("OrganizationsException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    RequestId: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class RegionLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<RegionLimitExceededException>()(
    "RegionLimitExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class ServiceException
  extends /*@__PURE__*/ S.TaggedError<ServiceException>()("ServiceException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    RequestId: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class ShareLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ShareLimitExceededException>()(
    "ShareLimitExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class SnapshotLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<SnapshotLimitExceededException>()(
    "SnapshotLimitExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class TagLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<TagLimitExceededException>()("TagLimitExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    RequestId: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class UnsupportedOperationException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedOperationException>()(
    "UnsupportedOperationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class UnsupportedSettingsException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedSettingsException>()(
    "UnsupportedSettingsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class UserDoesNotExistException
  extends /*@__PURE__*/ S.TaggedError<UserDoesNotExistException>()("UserDoesNotExistException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    RequestId: /*@__PURE__*/ S.optional(S.String),
  }) {}
export type DirectoryId = string;
export interface AcceptSharedDirectoryRequest {
  SharedDirectoryId: string;
}
const AcceptSharedDirectoryRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AcceptSharedDirectoryRequest>;
export type CustomerId = string;
export type ShareMethod = "ORGANIZATIONS" | "HANDSHAKE" | (string & {});
const ShareMethod = S.String;

export type ShareStatus =
  | "Shared"
  | "PendingAcceptance"
  | "Rejected"
  | "Rejecting"
  | "RejectFailed"
  | "Sharing"
  | "ShareFailed"
  | "Deleted"
  | "Deleting"
  | (string & {});
const ShareStatus = S.String;

export type Notes = string | redacted.Redacted<string>;
export type CreatedDateTime = Date;
export type LastUpdatedDateTime = Date;
export interface SharedDirectory {
  OwnerAccountId?: string;
  OwnerDirectoryId?: string;
  ShareMethod?: ShareMethod;
  SharedAccountId?: string;
  SharedDirectoryId?: string;
  ShareStatus?: ShareStatus;
  ShareNotes?: string | redacted.Redacted<string>;
  CreatedDateTime?: Date;
  LastUpdatedDateTime?: Date;
}
const SharedDirectory = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<SharedDirectory>;
export interface AcceptSharedDirectoryResult {
  SharedDirectory?: SharedDirectory;
}
const AcceptSharedDirectoryResult = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AcceptSharedDirectoryResult>;
export type CidrIp = string;
export type CidrIpv6 = string;
export type Description = string;
export interface IpRoute {
  CidrIp?: string;
  CidrIpv6?: string;
  Description?: string;
}
const IpRoute = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<IpRoute>;
export type IpRoutes = IpRoute[];
const IpRoutes = /*@__PURE__*/ __L.at(__c0, 4);
export type UpdateSecurityGroupForDirectoryControllers = boolean;
export interface AddIpRoutesRequest {
  DirectoryId: string;
  IpRoutes: IpRoute[];
  UpdateSecurityGroupForDirectoryControllers?: boolean;
}
const AddIpRoutesRequest = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<AddIpRoutesRequest>;
export interface AddIpRoutesResult {}
const AddIpRoutesResult = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<AddIpRoutesResult>;
export type RegionName = string;
export type VpcId = string;
export type SubnetId = string;
export type SubnetIds = string[];
const SubnetIds = /*@__PURE__*/ __L.at(__c0, 7);
export interface DirectoryVpcSettings {
  VpcId: string;
  SubnetIds: string[];
}
const DirectoryVpcSettings = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<DirectoryVpcSettings>;
export interface AddRegionRequest {
  DirectoryId: string;
  RegionName: string;
  VPCSettings: DirectoryVpcSettings;
}
const AddRegionRequest = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<AddRegionRequest>;
export interface AddRegionResult {}
const AddRegionResult = AddIpRoutesResult as any as S.Schema<AddRegionResult>;
export type ResourceId = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<Tag>;
export type Tags = Tag[];
const Tags = /*@__PURE__*/ __L.at(__c1, 3);
export interface AddTagsToResourceRequest {
  ResourceId: string;
  Tags: Tag[];
}
const AddTagsToResourceRequest = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<AddTagsToResourceRequest>;
export interface AddTagsToResourceResult {}
const AddTagsToResourceResult = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<AddTagsToResourceResult>;
export type SchemaExtensionId = string;
export interface CancelSchemaExtensionRequest {
  DirectoryId: string;
  SchemaExtensionId: string;
}
const CancelSchemaExtensionRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CancelSchemaExtensionRequest>;
export interface CancelSchemaExtensionResult {}
const CancelSchemaExtensionResult = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<CancelSchemaExtensionResult>;
export type DirectoryName = string;
export type DirectoryShortName = string;
export type ConnectPassword = string | redacted.Redacted<string>;
export type DirectorySize = "Small" | "Large" | (string & {});
const DirectorySize = S.String;

export type IpAddr = string;
export type DnsIpAddrs = string[];
const DnsIpAddrs = SubnetIds as any as S.Schema<DnsIpAddrs>;
export type Ipv6Addr = string;
export type DnsIpv6Addrs = string[];
const DnsIpv6Addrs = SubnetIds as any as S.Schema<DnsIpv6Addrs>;
export type UserName = string;
export interface DirectoryConnectSettings {
  VpcId: string;
  SubnetIds: string[];
  CustomerDnsIps?: string[];
  CustomerDnsIpsV6?: string[];
  CustomerUserName: string;
}
const DirectoryConnectSettings = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<DirectoryConnectSettings>;
export type NetworkType = "Dual-stack" | "IPv4" | "IPv6" | (string & {});
const NetworkType = S.String;

export interface ConnectDirectoryRequest {
  Name: string;
  ShortName?: string;
  Password: string | redacted.Redacted<string>;
  Description?: string;
  Size: DirectorySize;
  ConnectSettings: DirectoryConnectSettings;
  Tags?: Tag[];
  NetworkType?: NetworkType;
}
const ConnectDirectoryRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<ConnectDirectoryRequest>;
export interface ConnectDirectoryResult {
  DirectoryId?: string;
}
const ConnectDirectoryResult = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<ConnectDirectoryResult>;
export type AliasName = string;
export interface CreateAliasRequest {
  DirectoryId: string;
  Alias: string;
}
const CreateAliasRequest = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<CreateAliasRequest>;
export interface CreateAliasResult {
  DirectoryId?: string;
  Alias?: string;
}
const CreateAliasResult = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<CreateAliasResult>;
export type ComputerName = string;
export type ComputerPassword = string | redacted.Redacted<string>;
export type OrganizationalUnitDN = string;
export type AttributeName = string;
export type AttributeValue = string;
export interface Attribute {
  Name?: string;
  Value?: string;
}
const Attribute = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<Attribute>;
export type Attributes = Attribute[];
const Attributes = /*@__PURE__*/ __L.at(__c2, 6);
export interface CreateComputerRequest {
  DirectoryId: string;
  ComputerName: string;
  Password: string | redacted.Redacted<string>;
  OrganizationalUnitDistinguishedName?: string;
  ComputerAttributes?: Attribute[];
}
const CreateComputerRequest = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<CreateComputerRequest>;
export type SID = string;
export interface Computer {
  ComputerId?: string;
  ComputerName?: string;
  ComputerAttributes?: Attribute[];
}
const Computer = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<Computer>;
export interface CreateComputerResult {
  Computer?: Computer;
}
const CreateComputerResult = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<CreateComputerResult>;
export type RemoteDomainName = string;
export interface CreateConditionalForwarderRequest {
  DirectoryId: string;
  RemoteDomainName: string;
  DnsIpAddrs?: string[];
  DnsIpv6Addrs?: string[];
}
const CreateConditionalForwarderRequest = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<CreateConditionalForwarderRequest>;
export interface CreateConditionalForwarderResult {}
const CreateConditionalForwarderResult =
  CancelSchemaExtensionResult as any as S.Schema<CreateConditionalForwarderResult>;
export type Password = string | redacted.Redacted<string>;
export interface CreateDirectoryRequest {
  Name: string;
  ShortName?: string;
  Password: string | redacted.Redacted<string>;
  Description?: string;
  Size: DirectorySize;
  VpcSettings?: DirectoryVpcSettings;
  Tags?: Tag[];
  NetworkType?: NetworkType;
}
const CreateDirectoryRequest = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<CreateDirectoryRequest>;
export interface CreateDirectoryResult {
  DirectoryId?: string;
}
const CreateDirectoryResult = ConnectDirectoryResult as any as S.Schema<CreateDirectoryResult>;
export type SecretArn = string;
export type AssessmentId = string;
export interface CreateHybridADRequest {
  SecretArn: string;
  AssessmentId: string;
  Tags?: Tag[];
}
const CreateHybridADRequest = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<CreateHybridADRequest>;
export interface CreateHybridADResult {
  DirectoryId?: string;
}
const CreateHybridADResult = ConnectDirectoryResult as any as S.Schema<CreateHybridADResult>;
export type LogGroupName = string;
export interface CreateLogSubscriptionRequest {
  DirectoryId: string;
  LogGroupName: string;
}
const CreateLogSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<CreateLogSubscriptionRequest>;
export interface CreateLogSubscriptionResult {}
const CreateLogSubscriptionResult =
  CancelSchemaExtensionResult as any as S.Schema<CreateLogSubscriptionResult>;
export type DirectoryEdition = "Enterprise" | "Standard" | "Hybrid" | (string & {});
const DirectoryEdition = S.String;

export interface CreateMicrosoftADRequest {
  Name: string;
  ShortName?: string;
  Password: string | redacted.Redacted<string>;
  Description?: string;
  VpcSettings: DirectoryVpcSettings;
  Edition?: DirectoryEdition;
  Tags?: Tag[];
  NetworkType?: NetworkType;
}
const CreateMicrosoftADRequest = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<CreateMicrosoftADRequest>;
export interface CreateMicrosoftADResult {
  DirectoryId?: string;
}
const CreateMicrosoftADResult = ConnectDirectoryResult as any as S.Schema<CreateMicrosoftADResult>;
export type SnapshotName = string;
export interface CreateSnapshotRequest {
  DirectoryId: string;
  Name?: string;
}
const CreateSnapshotRequest = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateSnapshotRequest>;
export type SnapshotId = string;
export interface CreateSnapshotResult {
  SnapshotId?: string;
}
const CreateSnapshotResult = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<CreateSnapshotResult>;
export type TrustPassword = string | redacted.Redacted<string>;
export type TrustDirection = "One-Way: Outgoing" | "One-Way: Incoming" | "Two-Way" | (string & {});
const TrustDirection = S.String;

export type TrustType = "Forest" | "External" | (string & {});
const TrustType = S.String;

export type SelectiveAuth = "Enabled" | "Disabled" | (string & {});
const SelectiveAuth = S.String;

export interface CreateTrustRequest {
  DirectoryId: string;
  RemoteDomainName: string;
  TrustPassword: string | redacted.Redacted<string>;
  TrustDirection: TrustDirection;
  TrustType?: TrustType;
  ConditionalForwarderIpAddrs?: string[];
  ConditionalForwarderIpv6Addrs?: string[];
  SelectiveAuth?: SelectiveAuth;
}
const CreateTrustRequest = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<CreateTrustRequest>;
export type TrustId = string;
export interface CreateTrustResult {
  TrustId?: string;
}
const CreateTrustResult = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<CreateTrustResult>;
export interface DeleteADAssessmentRequest {
  AssessmentId: string;
}
const DeleteADAssessmentRequest = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<DeleteADAssessmentRequest>;
export interface DeleteADAssessmentResult {
  AssessmentId?: string;
}
const DeleteADAssessmentResult = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<DeleteADAssessmentResult>;
export interface DeleteConditionalForwarderRequest {
  DirectoryId: string;
  RemoteDomainName: string;
}
const DeleteConditionalForwarderRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<DeleteConditionalForwarderRequest>;
export interface DeleteConditionalForwarderResult {}
const DeleteConditionalForwarderResult =
  CancelSchemaExtensionResult as any as S.Schema<DeleteConditionalForwarderResult>;
export interface DeleteDirectoryRequest {
  DirectoryId: string;
}
const DeleteDirectoryRequest = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<DeleteDirectoryRequest>;
export interface DeleteDirectoryResult {
  DirectoryId?: string;
}
const DeleteDirectoryResult = ConnectDirectoryResult as any as S.Schema<DeleteDirectoryResult>;
export interface DeleteLogSubscriptionRequest {
  DirectoryId: string;
}
const DeleteLogSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<DeleteLogSubscriptionRequest>;
export interface DeleteLogSubscriptionResult {}
const DeleteLogSubscriptionResult =
  CancelSchemaExtensionResult as any as S.Schema<DeleteLogSubscriptionResult>;
export interface DeleteSnapshotRequest {
  SnapshotId: string;
}
const DeleteSnapshotRequest = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<DeleteSnapshotRequest>;
export interface DeleteSnapshotResult {
  SnapshotId?: string;
}
const DeleteSnapshotResult = CreateSnapshotResult as any as S.Schema<DeleteSnapshotResult>;
export type DeleteAssociatedConditionalForwarder = boolean;
export interface DeleteTrustRequest {
  TrustId: string;
  DeleteAssociatedConditionalForwarder?: boolean;
}
const DeleteTrustRequest = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<DeleteTrustRequest>;
export interface DeleteTrustResult {
  TrustId?: string;
}
const DeleteTrustResult = CreateTrustResult as any as S.Schema<DeleteTrustResult>;
export type CertificateId = string;
export interface DeregisterCertificateRequest {
  DirectoryId: string;
  CertificateId: string;
}
const DeregisterCertificateRequest = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<DeregisterCertificateRequest>;
export interface DeregisterCertificateResult {}
const DeregisterCertificateResult =
  CancelSchemaExtensionResult as any as S.Schema<DeregisterCertificateResult>;
export type TopicName = string;
export interface DeregisterEventTopicRequest {
  DirectoryId: string;
  TopicName: string;
}
const DeregisterEventTopicRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<DeregisterEventTopicRequest>;
export interface DeregisterEventTopicResult {}
const DeregisterEventTopicResult =
  CancelSchemaExtensionResult as any as S.Schema<DeregisterEventTopicResult>;
export interface DescribeADAssessmentRequest {
  AssessmentId: string;
}
const DescribeADAssessmentRequest = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<DescribeADAssessmentRequest>;
export type AssessmentStartTime = Date;
export type LastUpdateDateTime = Date;
export type AssessmentStatus = string;
export type AssessmentStatusCode = string;
export type AssessmentStatusReason = string;
export type CustomerDnsIps = string[];
const CustomerDnsIps = SubnetIds as any as S.Schema<CustomerDnsIps>;
export type SecurityGroupId = string;
export type SecurityGroupIds = string[];
const SecurityGroupIds = SubnetIds as any as S.Schema<SecurityGroupIds>;
export type AssessmentInstanceId = string;
export type AssessmentInstanceIds = string[];
const AssessmentInstanceIds = SubnetIds as any as S.Schema<AssessmentInstanceIds>;
export type AssessmentReportType = string;
export type AssessmentVersion = string;
export interface Assessment {
  AssessmentId?: string;
  DirectoryId?: string;
  DnsName?: string;
  StartTime?: Date;
  LastUpdateDateTime?: Date;
  Status?: string;
  StatusCode?: string;
  StatusReason?: string;
  CustomerDnsIps?: string[];
  VpcId?: string;
  SubnetIds?: string[];
  SecurityGroupIds?: string[];
  SelfManagedInstanceIds?: string[];
  ReportType?: string;
  Version?: string;
}
const Assessment = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<Assessment>;
export type AssessmentValidationCategory = string;
export type AssessmentValidationName = string;
export type AssessmentValidationStatus = string;
export type AssessmentValidationStatusCode = string;
export type AssessmentValidationStatusReason = string;
export type AssessmentValidationTimeStamp = Date;
export interface AssessmentValidation {
  Category?: string;
  Name?: string;
  Status?: string;
  StatusCode?: string;
  StatusReason?: string;
  StartTime?: Date;
  LastUpdateDateTime?: Date;
}
const AssessmentValidation = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<AssessmentValidation>;
export type AssessmentValidations = AssessmentValidation[];
const AssessmentValidations = /*@__PURE__*/ __L.at(__c5, 7);
export interface AssessmentReport {
  DomainControllerIp?: string;
  Validations?: AssessmentValidation[];
}
const AssessmentReport = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<AssessmentReport>;
export type AssessmentReports = AssessmentReport[];
const AssessmentReports = /*@__PURE__*/ __L.at(__c6, 1);
export interface DescribeADAssessmentResult {
  Assessment?: Assessment;
  AssessmentReports?: AssessmentReport[];
}
const DescribeADAssessmentResult = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<DescribeADAssessmentResult>;
export interface DescribeCAEnrollmentPolicyRequest {
  DirectoryId: string;
}
const DescribeCAEnrollmentPolicyRequest = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<DescribeCAEnrollmentPolicyRequest>;
export type PcaConnectorArn = string;
export type CaEnrollmentPolicyStatus =
  | "InProgress"
  | "Success"
  | "Failed"
  | "Disabling"
  | "Disabled"
  | "Impaired"
  | (string & {});
const CaEnrollmentPolicyStatus = S.String;

export type CaEnrollmentPolicyStatusReason = string;
export interface DescribeCAEnrollmentPolicyResult {
  DirectoryId?: string;
  PcaConnectorArn?: string;
  CaEnrollmentPolicyStatus?: CaEnrollmentPolicyStatus;
  LastUpdatedDateTime?: Date;
  CaEnrollmentPolicyStatusReason?: string;
}
const DescribeCAEnrollmentPolicyResult = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<DescribeCAEnrollmentPolicyResult>;
export interface DescribeCertificateRequest {
  DirectoryId: string;
  CertificateId: string;
}
const DescribeCertificateRequest = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<DescribeCertificateRequest>;
export type CertificateState =
  | "Registering"
  | "Registered"
  | "RegisterFailed"
  | "Deregistering"
  | "Deregistered"
  | "DeregisterFailed"
  | (string & {});
const CertificateState = S.String;

export type CertificateStateReason = string;
export type CertificateCN = string;
export type CertificateRegisteredDateTime = Date;
export type CertificateExpiryDateTime = Date;
export type CertificateType = "ClientCertAuth" | "ClientLDAPS" | (string & {});
const CertificateType = S.String;

export type OCSPUrl = string;
export interface ClientCertAuthSettings {
  OCSPUrl?: string;
}
const ClientCertAuthSettings = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<ClientCertAuthSettings>;
export interface Certificate {
  CertificateId?: string;
  State?: CertificateState;
  StateReason?: string;
  CommonName?: string;
  RegisteredDateTime?: Date;
  ExpiryDateTime?: Date;
  Type?: CertificateType;
  ClientCertAuthSettings?: ClientCertAuthSettings;
}
const Certificate = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<Certificate>;
export interface DescribeCertificateResult {
  Certificate?: Certificate;
}
const DescribeCertificateResult = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DescribeCertificateResult>;
export type ClientAuthenticationType = "SmartCard" | "SmartCardOrPassword" | (string & {});
const ClientAuthenticationType = S.String;

export type NextToken = string;
export type PageLimit = number;
export interface DescribeClientAuthenticationSettingsRequest {
  DirectoryId: string;
  Type?: ClientAuthenticationType;
  NextToken?: string;
  Limit?: number;
}
const DescribeClientAuthenticationSettingsRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DescribeClientAuthenticationSettingsRequest>;
export type ClientAuthenticationStatus = "Enabled" | "Disabled" | (string & {});
const ClientAuthenticationStatus = S.String;

export interface ClientAuthenticationSettingInfo {
  Type?: ClientAuthenticationType;
  Status?: ClientAuthenticationStatus;
  LastUpdatedDateTime?: Date;
}
const ClientAuthenticationSettingInfo = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<ClientAuthenticationSettingInfo>;
export type ClientAuthenticationSettingsInfo = ClientAuthenticationSettingInfo[];
const ClientAuthenticationSettingsInfo = /*@__PURE__*/ __L.at(__c7, 3);
export interface DescribeClientAuthenticationSettingsResult {
  ClientAuthenticationSettingsInfo?: ClientAuthenticationSettingInfo[];
  NextToken?: string;
}
const DescribeClientAuthenticationSettingsResult = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<DescribeClientAuthenticationSettingsResult>;
export type RemoteDomainNames = string[];
const RemoteDomainNames = SubnetIds as any as S.Schema<RemoteDomainNames>;
export interface DescribeConditionalForwardersRequest {
  DirectoryId: string;
  RemoteDomainNames?: string[];
}
const DescribeConditionalForwardersRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<DescribeConditionalForwardersRequest>;
export type ReplicationScope = "Domain" | (string & {});
const ReplicationScope = S.String;

export interface ConditionalForwarder {
  RemoteDomainName?: string;
  DnsIpAddrs?: string[];
  DnsIpv6Addrs?: string[];
  ReplicationScope?: ReplicationScope;
}
const ConditionalForwarder = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<ConditionalForwarder>;
export type ConditionalForwarders = ConditionalForwarder[];
const ConditionalForwarders = /*@__PURE__*/ __L.at(__c7, 7);
export interface DescribeConditionalForwardersResult {
  ConditionalForwarders?: ConditionalForwarder[];
}
const DescribeConditionalForwardersResult = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<DescribeConditionalForwardersResult>;
export type DirectoryIds = string[];
const DirectoryIds = SubnetIds as any as S.Schema<DirectoryIds>;
export type Limit = number;
export interface DescribeDirectoriesRequest {
  DirectoryIds?: string[];
  NextToken?: string;
  Limit?: number;
}
const DescribeDirectoriesRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<DescribeDirectoriesRequest>;
export type AccessUrl = string;
export type DirectoryStage =
  | "Requested"
  | "Creating"
  | "Created"
  | "Active"
  | "Inoperable"
  | "Impaired"
  | "Restoring"
  | "RestoreFailed"
  | "Deleting"
  | "Deleted"
  | "Failed"
  | "Updating"
  | (string & {});
const DirectoryStage = S.String;

export type LaunchTime = Date;
export type DirectoryType =
  | "SimpleAD"
  | "ADConnector"
  | "MicrosoftAD"
  | "SharedMicrosoftAD"
  | (string & {});
const DirectoryType = S.String;

export type AvailabilityZone = string;
export type AvailabilityZones = string[];
const AvailabilityZones = SubnetIds as any as S.Schema<AvailabilityZones>;
export interface DirectoryVpcSettingsDescription {
  VpcId?: string;
  SubnetIds?: string[];
  SecurityGroupId?: string;
  AvailabilityZones?: string[];
}
const DirectoryVpcSettingsDescription = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<DirectoryVpcSettingsDescription>;
export type IpAddrs = string[];
const IpAddrs = SubnetIds as any as S.Schema<IpAddrs>;
export type IpV6Addrs = string[];
const IpV6Addrs = SubnetIds as any as S.Schema<IpV6Addrs>;
export interface DirectoryConnectSettingsDescription {
  VpcId?: string;
  SubnetIds?: string[];
  CustomerUserName?: string;
  SecurityGroupId?: string;
  AvailabilityZones?: string[];
  ConnectIps?: string[];
  ConnectIpsV6?: string[];
}
const DirectoryConnectSettingsDescription = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DirectoryConnectSettingsDescription>;
export type Server = string;
export type Servers = string[];
const Servers = SubnetIds as any as S.Schema<Servers>;
export type PortNumber = number;
export type RadiusTimeout = number;
export type RadiusRetries = number;
export type RadiusSharedSecret = string | redacted.Redacted<string>;
export type RadiusAuthenticationProtocol =
  | "PAP"
  | "CHAP"
  | "MS-CHAPv1"
  | "MS-CHAPv2"
  | (string & {});
const RadiusAuthenticationProtocol = S.String;

export type RadiusDisplayLabel = string;
export type UseSameUsername = boolean;
export interface RadiusSettings {
  RadiusServers?: string[];
  RadiusServersIpv6?: string[];
  RadiusPort?: number;
  RadiusTimeout?: number;
  RadiusRetries?: number;
  SharedSecret?: string | redacted.Redacted<string>;
  AuthenticationProtocol?: RadiusAuthenticationProtocol;
  DisplayLabel?: string;
  UseSameUsername?: boolean;
}
const RadiusSettings = /*@__PURE__*/ __L.at(__c8, 4) as any as S.Schema<RadiusSettings>;
export type RadiusStatus = "Creating" | "Completed" | "Failed" | (string & {});
const RadiusStatus = S.String;

export type StageReason = string;
export type SsoEnabled = boolean;
export type DesiredNumberOfDomainControllers = number;
export interface OwnerDirectoryDescription {
  DirectoryId?: string;
  AccountId?: string;
  DnsIpAddrs?: string[];
  DnsIpv6Addrs?: string[];
  VpcSettings?: DirectoryVpcSettingsDescription;
  RadiusSettings?: RadiusSettings;
  RadiusStatus?: RadiusStatus;
  NetworkType?: NetworkType;
}
const OwnerDirectoryDescription = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<OwnerDirectoryDescription>;
export type AdditionalRegions = string[];
const AdditionalRegions = SubnetIds as any as S.Schema<AdditionalRegions>;
export interface RegionsInfo {
  PrimaryRegion?: string;
  AdditionalRegions?: string[];
}
const RegionsInfo = /*@__PURE__*/ __L.at(__c8, 6) as any as S.Schema<RegionsInfo>;
export type OSVersion = "SERVER_2012" | "SERVER_2019" | (string & {});
const OSVersion = S.String;

export interface HybridSettingsDescription {
  SelfManagedDnsIpAddrs?: string[];
  SelfManagedInstanceIds?: string[];
}
const HybridSettingsDescription = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<HybridSettingsDescription>;
export interface DirectoryDescription {
  DirectoryId?: string;
  Name?: string;
  ShortName?: string;
  Size?: DirectorySize;
  Edition?: DirectoryEdition;
  Alias?: string;
  AccessUrl?: string;
  Description?: string;
  DnsIpAddrs?: string[];
  DnsIpv6Addrs?: string[];
  Stage?: DirectoryStage;
  ShareStatus?: ShareStatus;
  ShareMethod?: ShareMethod;
  ShareNotes?: string | redacted.Redacted<string>;
  LaunchTime?: Date;
  StageLastUpdatedDateTime?: Date;
  Type?: DirectoryType;
  VpcSettings?: DirectoryVpcSettingsDescription;
  ConnectSettings?: DirectoryConnectSettingsDescription;
  RadiusSettings?: RadiusSettings;
  RadiusStatus?: RadiusStatus;
  StageReason?: string;
  SsoEnabled?: boolean;
  DesiredNumberOfDomainControllers?: number;
  OwnerDirectoryDescription?: OwnerDirectoryDescription;
  RegionsInfo?: RegionsInfo;
  OsVersion?: OSVersion;
  HybridSettings?: HybridSettingsDescription;
  NetworkType?: NetworkType;
}
const DirectoryDescription = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<DirectoryDescription>;
export type DirectoryDescriptions = DirectoryDescription[];
const DirectoryDescriptions = /*@__PURE__*/ __L.at(__c9, 1);
export interface DescribeDirectoriesResult {
  DirectoryDescriptions?: DirectoryDescription[];
  NextToken?: string;
}
const DescribeDirectoriesResult = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<DescribeDirectoriesResult>;
export interface DescribeDirectoryDataAccessRequest {
  DirectoryId: string;
}
const DescribeDirectoryDataAccessRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<DescribeDirectoryDataAccessRequest>;
export type DataAccessStatus =
  | "Disabled"
  | "Disabling"
  | "Enabled"
  | "Enabling"
  | "Failed"
  | (string & {});
const DataAccessStatus = S.String;

export interface DescribeDirectoryDataAccessResult {
  DataAccessStatus?: DataAccessStatus;
}
const DescribeDirectoryDataAccessResult = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<DescribeDirectoryDataAccessResult>;
export type DomainControllerId = string;
export type DomainControllerIds = string[];
const DomainControllerIds = SubnetIds as any as S.Schema<DomainControllerIds>;
export interface DescribeDomainControllersRequest {
  DirectoryId: string;
  DomainControllerIds?: string[];
  NextToken?: string;
  Limit?: number;
}
const DescribeDomainControllersRequest = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<DescribeDomainControllersRequest>;
export type DomainControllerStatus =
  | "Creating"
  | "Active"
  | "Impaired"
  | "Restoring"
  | "Deleting"
  | "Deleted"
  | "Failed"
  | "Updating"
  | (string & {});
const DomainControllerStatus = S.String;

export type DomainControllerStatusReason = string;
export interface DomainController {
  DirectoryId?: string;
  DomainControllerId?: string;
  DnsIpAddr?: string;
  DnsIpv6Addr?: string;
  VpcId?: string;
  SubnetId?: string;
  AvailabilityZone?: string;
  Status?: DomainControllerStatus;
  StatusReason?: string;
  LaunchTime?: Date;
  StatusLastUpdatedDateTime?: Date;
}
const DomainController = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<DomainController>;
export type DomainControllers = DomainController[];
const DomainControllers = /*@__PURE__*/ __L.at(__c9, 7);
export interface DescribeDomainControllersResult {
  DomainControllers?: DomainController[];
  NextToken?: string;
}
const DescribeDomainControllersResult = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<DescribeDomainControllersResult>;
export type TopicNames = string[];
const TopicNames = SubnetIds as any as S.Schema<TopicNames>;
export interface DescribeEventTopicsRequest {
  DirectoryId?: string;
  TopicNames?: string[];
}
const DescribeEventTopicsRequest = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<DescribeEventTopicsRequest>;
export type TopicArn = string;
export type TopicStatus = "Registered" | "Topic not found" | "Failed" | "Deleted" | (string & {});
const TopicStatus = S.String;

export interface EventTopic {
  DirectoryId?: string;
  TopicName?: string;
  TopicArn?: string;
  CreatedDateTime?: Date;
  Status?: TopicStatus;
}
const EventTopic = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<EventTopic>;
export type EventTopics = EventTopic[];
const EventTopics = /*@__PURE__*/ __L.at(__c10, 3);
export interface DescribeEventTopicsResult {
  EventTopics?: EventTopic[];
}
const DescribeEventTopicsResult = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<DescribeEventTopicsResult>;
export type HybridUpdateType =
  | "SelfManagedInstances"
  | "HybridAdministratorAccount"
  | (string & {});
const HybridUpdateType = S.String;

export interface DescribeHybridADUpdateRequest {
  DirectoryId: string;
  UpdateType?: HybridUpdateType;
  NextToken?: string;
}
const DescribeHybridADUpdateRequest = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<DescribeHybridADUpdateRequest>;
export type UpdateStatus = "Updated" | "Updating" | "UpdateFailed" | (string & {});
const UpdateStatus = S.String;

export type UpdateStatusReason = string;
export type InitiatedBy = string;
export interface HybridUpdateValue {
  InstanceIds?: string[];
  DnsIps?: string[];
}
const HybridUpdateValue = /*@__PURE__*/ __L.at(__c10, 6) as any as S.Schema<HybridUpdateValue>;
export type StartDateTime = Date;
export interface HybridUpdateInfoEntry {
  Status?: UpdateStatus;
  StatusReason?: string;
  InitiatedBy?: string;
  NewValue?: HybridUpdateValue;
  PreviousValue?: HybridUpdateValue;
  StartTime?: Date;
  LastUpdatedDateTime?: Date;
  AssessmentId?: string;
}
const HybridUpdateInfoEntry = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<HybridUpdateInfoEntry>;
export type HybridUpdateInfoEntries = HybridUpdateInfoEntry[];
const HybridUpdateInfoEntries = /*@__PURE__*/ __L.at(__c11, 0);
export interface HybridUpdateActivities {
  SelfManagedInstances?: HybridUpdateInfoEntry[];
  HybridAdministratorAccount?: HybridUpdateInfoEntry[];
}
const HybridUpdateActivities = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<HybridUpdateActivities>;
export interface DescribeHybridADUpdateResult {
  UpdateActivities?: HybridUpdateActivities;
  NextToken?: string;
}
const DescribeHybridADUpdateResult = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<DescribeHybridADUpdateResult>;
export type LDAPSType = "Client" | (string & {});
const LDAPSType = S.String;

export interface DescribeLDAPSSettingsRequest {
  DirectoryId: string;
  Type?: LDAPSType;
  NextToken?: string;
  Limit?: number;
}
const DescribeLDAPSSettingsRequest = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<DescribeLDAPSSettingsRequest>;
export type LDAPSStatus = "Enabling" | "Enabled" | "EnableFailed" | "Disabled" | (string & {});
const LDAPSStatus = S.String;

export type LDAPSStatusReason = string;
export interface LDAPSSettingInfo {
  LDAPSStatus?: LDAPSStatus;
  LDAPSStatusReason?: string;
  LastUpdatedDateTime?: Date;
}
const LDAPSSettingInfo = /*@__PURE__*/ __L.at(__c11, 4) as any as S.Schema<LDAPSSettingInfo>;
export type LDAPSSettingsInfo = LDAPSSettingInfo[];
const LDAPSSettingsInfo = /*@__PURE__*/ __L.at(__c11, 5);
export interface DescribeLDAPSSettingsResult {
  LDAPSSettingsInfo?: LDAPSSettingInfo[];
  NextToken?: string;
}
const DescribeLDAPSSettingsResult = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<DescribeLDAPSSettingsResult>;
export interface DescribeRegionsRequest {
  DirectoryId: string;
  RegionName?: string;
  NextToken?: string;
}
const DescribeRegionsRequest = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<DescribeRegionsRequest>;
export type RegionType = "Primary" | "Additional" | (string & {});
const RegionType = S.String;

export type StateLastUpdatedDateTime = Date;
export interface RegionDescription {
  DirectoryId?: string;
  RegionName?: string;
  RegionType?: RegionType;
  Status?: DirectoryStage;
  VpcSettings?: DirectoryVpcSettings;
  DesiredNumberOfDomainControllers?: number;
  LaunchTime?: Date;
  StatusLastUpdatedDateTime?: Date;
  LastUpdatedDateTime?: Date;
}
const RegionDescription = /*@__PURE__*/ __L.at(__c12, 0) as any as S.Schema<RegionDescription>;
export type RegionsDescription = RegionDescription[];
const RegionsDescription = /*@__PURE__*/ __L.at(__c12, 1);
export interface DescribeRegionsResult {
  RegionsDescription?: RegionDescription[];
  NextToken?: string;
}
const DescribeRegionsResult = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<DescribeRegionsResult>;
export type DirectoryConfigurationStatus =
  | "Requested"
  | "Updating"
  | "Updated"
  | "Failed"
  | "Default"
  | (string & {});
const DirectoryConfigurationStatus = S.String;

export interface DescribeSettingsRequest {
  DirectoryId: string;
  Status?: DirectoryConfigurationStatus;
  NextToken?: string;
}
const DescribeSettingsRequest = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<DescribeSettingsRequest>;
export type DirectoryConfigurationSettingType = string;
export type DirectoryConfigurationSettingName = string;
export type DirectoryConfigurationSettingAllowedValues = string;
export type DirectoryConfigurationSettingValue = string;
export type DirectoryConfigurationSettingRequestDetailedStatus = {
  [key: string]: DirectoryConfigurationStatus | undefined;
};
const DirectoryConfigurationSettingRequestDetailedStatus = /*@__PURE__*/ __L.at(__c12, 4);
export type DirectoryConfigurationSettingRequestStatusMessage = string;
export type DirectoryConfigurationSettingLastUpdatedDateTime = Date;
export type DirectoryConfigurationSettingLastRequestedDateTime = Date;
export type DirectoryConfigurationSettingDataType = string;
export interface SettingEntry {
  Type?: string;
  Name?: string;
  AllowedValues?: string;
  AppliedValue?: string;
  RequestedValue?: string;
  RequestStatus?: DirectoryConfigurationStatus;
  RequestDetailedStatus?: { [key: string]: DirectoryConfigurationStatus | undefined };
  RequestStatusMessage?: string;
  LastUpdatedDateTime?: Date;
  LastRequestedDateTime?: Date;
  DataType?: string;
}
const SettingEntry = /*@__PURE__*/ __L.at(__c12, 5) as any as S.Schema<SettingEntry>;
export type SettingEntries = SettingEntry[];
const SettingEntries = /*@__PURE__*/ __L.at(__c12, 6);
export interface DescribeSettingsResult {
  DirectoryId?: string;
  SettingEntries?: SettingEntry[];
  NextToken?: string;
}
const DescribeSettingsResult = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<DescribeSettingsResult>;
export interface DescribeSharedDirectoriesRequest {
  OwnerDirectoryId: string;
  SharedDirectoryIds?: string[];
  NextToken?: string;
  Limit?: number;
}
const DescribeSharedDirectoriesRequest = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<DescribeSharedDirectoriesRequest>;
export type SharedDirectories = SharedDirectory[];
const SharedDirectories = /*@__PURE__*/ __L.at(__c13, 1);
export interface DescribeSharedDirectoriesResult {
  SharedDirectories?: SharedDirectory[];
  NextToken?: string;
}
const DescribeSharedDirectoriesResult = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<DescribeSharedDirectoriesResult>;
export type SnapshotIds = string[];
const SnapshotIds = SubnetIds as any as S.Schema<SnapshotIds>;
export interface DescribeSnapshotsRequest {
  DirectoryId?: string;
  SnapshotIds?: string[];
  NextToken?: string;
  Limit?: number;
}
const DescribeSnapshotsRequest = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<DescribeSnapshotsRequest>;
export type SnapshotType = "Auto" | "Manual" | (string & {});
const SnapshotType = S.String;

export type SnapshotStatus = "Creating" | "Completed" | "Failed" | (string & {});
const SnapshotStatus = S.String;

export type StartTime = Date;
export interface Snapshot {
  DirectoryId?: string;
  SnapshotId?: string;
  Type?: SnapshotType;
  Name?: string;
  Status?: SnapshotStatus;
  StartTime?: Date;
}
const Snapshot = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<Snapshot>;
export type Snapshots = Snapshot[];
const Snapshots = /*@__PURE__*/ __L.at(__c13, 5);
export interface DescribeSnapshotsResult {
  Snapshots?: Snapshot[];
  NextToken?: string;
}
const DescribeSnapshotsResult = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<DescribeSnapshotsResult>;
export type TrustIds = string[];
const TrustIds = SubnetIds as any as S.Schema<TrustIds>;
export interface DescribeTrustsRequest {
  DirectoryId?: string;
  TrustIds?: string[];
  NextToken?: string;
  Limit?: number;
}
const DescribeTrustsRequest = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<DescribeTrustsRequest>;
export type TrustState =
  | "Creating"
  | "Created"
  | "Verifying"
  | "VerifyFailed"
  | "Verified"
  | "Updating"
  | "UpdateFailed"
  | "Updated"
  | "Deleting"
  | "Deleted"
  | "Failed"
  | (string & {});
const TrustState = S.String;

export type TrustStateReason = string;
export interface Trust {
  DirectoryId?: string;
  TrustId?: string;
  RemoteDomainName?: string;
  TrustType?: TrustType;
  TrustDirection?: TrustDirection;
  TrustState?: TrustState;
  CreatedDateTime?: Date;
  LastUpdatedDateTime?: Date;
  StateLastUpdatedDateTime?: Date;
  TrustStateReason?: string;
  SelectiveAuth?: SelectiveAuth;
}
const Trust = /*@__PURE__*/ __L.at(__c14, 0) as any as S.Schema<Trust>;
export type Trusts = Trust[];
const Trusts = /*@__PURE__*/ __L.at(__c14, 1);
export interface DescribeTrustsResult {
  Trusts?: Trust[];
  NextToken?: string;
}
const DescribeTrustsResult = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<DescribeTrustsResult>;
export type UpdateType = "OS" | "NETWORK" | "SIZE" | (string & {});
const UpdateType = S.String;

export interface DescribeUpdateDirectoryRequest {
  DirectoryId: string;
  UpdateType: UpdateType;
  RegionName?: string;
  NextToken?: string;
}
const DescribeUpdateDirectoryRequest = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<DescribeUpdateDirectoryRequest>;
export interface OSUpdateSettings {
  OSVersion?: OSVersion;
}
const OSUpdateSettings = /*@__PURE__*/ __L.at(__c14, 4) as any as S.Schema<OSUpdateSettings>;
export interface UpdateValue {
  OSUpdateSettings?: OSUpdateSettings;
}
const UpdateValue = /*@__PURE__*/ __L.at(__c14, 5) as any as S.Schema<UpdateValue>;
export interface UpdateInfoEntry {
  Region?: string;
  Status?: UpdateStatus;
  StatusReason?: string;
  InitiatedBy?: string;
  NewValue?: UpdateValue;
  PreviousValue?: UpdateValue;
  StartTime?: Date;
  LastUpdatedDateTime?: Date;
}
const UpdateInfoEntry = /*@__PURE__*/ __L.at(__c14, 6) as any as S.Schema<UpdateInfoEntry>;
export type UpdateActivities = UpdateInfoEntry[];
const UpdateActivities = /*@__PURE__*/ __L.at(__c14, 7);
export interface DescribeUpdateDirectoryResult {
  UpdateActivities?: UpdateInfoEntry[];
  NextToken?: string;
}
const DescribeUpdateDirectoryResult = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<DescribeUpdateDirectoryResult>;
export interface DisableCAEnrollmentPolicyRequest {
  DirectoryId: string;
}
const DisableCAEnrollmentPolicyRequest = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<DisableCAEnrollmentPolicyRequest>;
export interface DisableCAEnrollmentPolicyResult {}
const DisableCAEnrollmentPolicyResult =
  CancelSchemaExtensionResult as any as S.Schema<DisableCAEnrollmentPolicyResult>;
export interface DisableClientAuthenticationRequest {
  DirectoryId: string;
  Type: ClientAuthenticationType;
}
const DisableClientAuthenticationRequest = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<DisableClientAuthenticationRequest>;
export interface DisableClientAuthenticationResult {}
const DisableClientAuthenticationResult =
  CancelSchemaExtensionResult as any as S.Schema<DisableClientAuthenticationResult>;
export interface DisableDirectoryDataAccessRequest {
  DirectoryId: string;
}
const DisableDirectoryDataAccessRequest = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<DisableDirectoryDataAccessRequest>;
export interface DisableDirectoryDataAccessResult {}
const DisableDirectoryDataAccessResult =
  CancelSchemaExtensionResult as any as S.Schema<DisableDirectoryDataAccessResult>;
export interface DisableLDAPSRequest {
  DirectoryId: string;
  Type: LDAPSType;
}
const DisableLDAPSRequest = /*@__PURE__*/ __L.at(__c15, 4) as any as S.Schema<DisableLDAPSRequest>;
export interface DisableLDAPSResult {}
const DisableLDAPSResult = AddIpRoutesResult as any as S.Schema<DisableLDAPSResult>;
export interface DisableRadiusRequest {
  DirectoryId: string;
}
const DisableRadiusRequest = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<DisableRadiusRequest>;
export interface DisableRadiusResult {}
const DisableRadiusResult = AddIpRoutesResult as any as S.Schema<DisableRadiusResult>;
export interface DisableSsoRequest {
  DirectoryId: string;
  UserName?: string;
  Password?: string | redacted.Redacted<string>;
}
const DisableSsoRequest = /*@__PURE__*/ __L.at(__c15, 6) as any as S.Schema<DisableSsoRequest>;
export interface DisableSsoResult {}
const DisableSsoResult = AddIpRoutesResult as any as S.Schema<DisableSsoResult>;
export interface EnableCAEnrollmentPolicyRequest {
  DirectoryId: string;
  PcaConnectorArn: string;
}
const EnableCAEnrollmentPolicyRequest = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<EnableCAEnrollmentPolicyRequest>;
export interface EnableCAEnrollmentPolicyResult {}
const EnableCAEnrollmentPolicyResult =
  CancelSchemaExtensionResult as any as S.Schema<EnableCAEnrollmentPolicyResult>;
export interface EnableClientAuthenticationRequest {
  DirectoryId: string;
  Type: ClientAuthenticationType;
}
const EnableClientAuthenticationRequest = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<EnableClientAuthenticationRequest>;
export interface EnableClientAuthenticationResult {}
const EnableClientAuthenticationResult =
  CancelSchemaExtensionResult as any as S.Schema<EnableClientAuthenticationResult>;
export interface EnableDirectoryDataAccessRequest {
  DirectoryId: string;
}
const EnableDirectoryDataAccessRequest = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<EnableDirectoryDataAccessRequest>;
export interface EnableDirectoryDataAccessResult {}
const EnableDirectoryDataAccessResult =
  CancelSchemaExtensionResult as any as S.Schema<EnableDirectoryDataAccessResult>;
export interface EnableLDAPSRequest {
  DirectoryId: string;
  Type: LDAPSType;
}
const EnableLDAPSRequest = /*@__PURE__*/ __L.at(__c16, 2) as any as S.Schema<EnableLDAPSRequest>;
export interface EnableLDAPSResult {}
const EnableLDAPSResult = AddIpRoutesResult as any as S.Schema<EnableLDAPSResult>;
export interface EnableRadiusRequest {
  DirectoryId: string;
  RadiusSettings: RadiusSettings;
}
const EnableRadiusRequest = /*@__PURE__*/ __L.at(__c16, 3) as any as S.Schema<EnableRadiusRequest>;
export interface EnableRadiusResult {}
const EnableRadiusResult = AddIpRoutesResult as any as S.Schema<EnableRadiusResult>;
export interface EnableSsoRequest {
  DirectoryId: string;
  UserName?: string;
  Password?: string | redacted.Redacted<string>;
}
const EnableSsoRequest = /*@__PURE__*/ __L.at(__c16, 4) as any as S.Schema<EnableSsoRequest>;
export interface EnableSsoResult {}
const EnableSsoResult = AddIpRoutesResult as any as S.Schema<EnableSsoResult>;
export interface GetDirectoryLimitsRequest {}
const GetDirectoryLimitsRequest = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<GetDirectoryLimitsRequest>;
export type CloudOnlyDirectoriesLimitReached = boolean;
export type ConnectedDirectoriesLimitReached = boolean;
export interface DirectoryLimits {
  CloudOnlyDirectoriesLimit?: number;
  CloudOnlyDirectoriesCurrentCount?: number;
  CloudOnlyDirectoriesLimitReached?: boolean;
  CloudOnlyMicrosoftADLimit?: number;
  CloudOnlyMicrosoftADCurrentCount?: number;
  CloudOnlyMicrosoftADLimitReached?: boolean;
  ConnectedDirectoriesLimit?: number;
  ConnectedDirectoriesCurrentCount?: number;
  ConnectedDirectoriesLimitReached?: boolean;
}
const DirectoryLimits = /*@__PURE__*/ __L.at(__c16, 6) as any as S.Schema<DirectoryLimits>;
export interface GetDirectoryLimitsResult {
  DirectoryLimits?: DirectoryLimits;
}
const GetDirectoryLimitsResult = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<GetDirectoryLimitsResult>;
export interface GetSnapshotLimitsRequest {
  DirectoryId: string;
}
const GetSnapshotLimitsRequest = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<GetSnapshotLimitsRequest>;
export type ManualSnapshotsLimitReached = boolean;
export interface SnapshotLimits {
  ManualSnapshotsLimit?: number;
  ManualSnapshotsCurrentCount?: number;
  ManualSnapshotsLimitReached?: boolean;
}
const SnapshotLimits = /*@__PURE__*/ __L.at(__c17, 1) as any as S.Schema<SnapshotLimits>;
export interface GetSnapshotLimitsResult {
  SnapshotLimits?: SnapshotLimits;
}
const GetSnapshotLimitsResult = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<GetSnapshotLimitsResult>;
export type AssessmentLimit = number;
export interface ListADAssessmentsRequest {
  DirectoryId?: string;
  NextToken?: string;
  Limit?: number;
}
const ListADAssessmentsRequest = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<ListADAssessmentsRequest>;
export interface AssessmentSummary {
  AssessmentId?: string;
  DirectoryId?: string;
  DnsName?: string;
  StartTime?: Date;
  LastUpdateDateTime?: Date;
  Status?: string;
  CustomerDnsIps?: string[];
  ReportType?: string;
}
const AssessmentSummary = /*@__PURE__*/ __L.at(__c17, 4) as any as S.Schema<AssessmentSummary>;
export type Assessments = AssessmentSummary[];
const Assessments = /*@__PURE__*/ __L.at(__c17, 5);
export interface ListADAssessmentsResult {
  Assessments?: AssessmentSummary[];
  NextToken?: string;
}
const ListADAssessmentsResult = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<ListADAssessmentsResult>;
export interface ListCertificatesRequest {
  DirectoryId: string;
  NextToken?: string;
  Limit?: number;
}
const ListCertificatesRequest = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<ListCertificatesRequest>;
export interface CertificateInfo {
  CertificateId?: string;
  CommonName?: string;
  State?: CertificateState;
  ExpiryDateTime?: Date;
  Type?: CertificateType;
}
const CertificateInfo = /*@__PURE__*/ __L.at(__c18, 0) as any as S.Schema<CertificateInfo>;
export type CertificatesInfo = CertificateInfo[];
const CertificatesInfo = /*@__PURE__*/ __L.at(__c18, 1);
export interface ListCertificatesResult {
  NextToken?: string;
  CertificatesInfo?: CertificateInfo[];
}
const ListCertificatesResult = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<ListCertificatesResult>;
export interface ListIpRoutesRequest {
  DirectoryId: string;
  NextToken?: string;
  Limit?: number;
}
const ListIpRoutesRequest = /*@__PURE__*/ __L.at(__c18, 3) as any as S.Schema<ListIpRoutesRequest>;
export type IpRouteStatusMsg =
  | "Adding"
  | "Added"
  | "Removing"
  | "Removed"
  | "AddFailed"
  | "RemoveFailed"
  | (string & {});
const IpRouteStatusMsg = S.String;

export type AddedDateTime = Date;
export type IpRouteStatusReason = string;
export interface IpRouteInfo {
  DirectoryId?: string;
  CidrIp?: string;
  CidrIpv6?: string;
  IpRouteStatusMsg?: IpRouteStatusMsg;
  AddedDateTime?: Date;
  IpRouteStatusReason?: string;
  Description?: string;
}
const IpRouteInfo = /*@__PURE__*/ __L.at(__c18, 4) as any as S.Schema<IpRouteInfo>;
export type IpRoutesInfo = IpRouteInfo[];
const IpRoutesInfo = /*@__PURE__*/ __L.at(__c18, 5);
export interface ListIpRoutesResult {
  IpRoutesInfo?: IpRouteInfo[];
  NextToken?: string;
}
const ListIpRoutesResult = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<ListIpRoutesResult>;
export interface ListLogSubscriptionsRequest {
  DirectoryId?: string;
  NextToken?: string;
  Limit?: number;
}
const ListLogSubscriptionsRequest = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<ListLogSubscriptionsRequest>;
export type SubscriptionCreatedDateTime = Date;
export interface LogSubscription {
  DirectoryId?: string;
  LogGroupName?: string;
  SubscriptionCreatedDateTime?: Date;
}
const LogSubscription = /*@__PURE__*/ __L.at(__c19, 0) as any as S.Schema<LogSubscription>;
export type LogSubscriptions = LogSubscription[];
const LogSubscriptions = /*@__PURE__*/ __L.at(__c19, 1);
export interface ListLogSubscriptionsResult {
  LogSubscriptions?: LogSubscription[];
  NextToken?: string;
}
const ListLogSubscriptionsResult = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<ListLogSubscriptionsResult>;
export interface ListSchemaExtensionsRequest {
  DirectoryId: string;
  NextToken?: string;
  Limit?: number;
}
const ListSchemaExtensionsRequest = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<ListSchemaExtensionsRequest>;
export type SchemaExtensionStatus =
  | "Initializing"
  | "CreatingSnapshot"
  | "UpdatingSchema"
  | "Replicating"
  | "CancelInProgress"
  | "RollbackInProgress"
  | "Cancelled"
  | "Failed"
  | "Completed"
  | (string & {});
const SchemaExtensionStatus = S.String;

export type SchemaExtensionStatusReason = string;
export type EndDateTime = Date;
export interface SchemaExtensionInfo {
  DirectoryId?: string;
  SchemaExtensionId?: string;
  Description?: string;
  SchemaExtensionStatus?: SchemaExtensionStatus;
  SchemaExtensionStatusReason?: string;
  StartDateTime?: Date;
  EndDateTime?: Date;
}
const SchemaExtensionInfo = /*@__PURE__*/ __L.at(__c19, 4) as any as S.Schema<SchemaExtensionInfo>;
export type SchemaExtensionsInfo = SchemaExtensionInfo[];
const SchemaExtensionsInfo = /*@__PURE__*/ __L.at(__c19, 5);
export interface ListSchemaExtensionsResult {
  SchemaExtensionsInfo?: SchemaExtensionInfo[];
  NextToken?: string;
}
const ListSchemaExtensionsResult = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<ListSchemaExtensionsResult>;
export interface ListTagsForResourceRequest {
  ResourceId: string;
  NextToken?: string;
  Limit?: number;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResult {
  Tags?: Tag[];
  NextToken?: string;
}
const ListTagsForResourceResult = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<ListTagsForResourceResult>;
export type CertificateData = string;
export interface RegisterCertificateRequest {
  DirectoryId: string;
  CertificateData: string;
  Type?: CertificateType;
  ClientCertAuthSettings?: ClientCertAuthSettings;
}
const RegisterCertificateRequest = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<RegisterCertificateRequest>;
export interface RegisterCertificateResult {
  CertificateId?: string;
}
const RegisterCertificateResult = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<RegisterCertificateResult>;
export interface RegisterEventTopicRequest {
  DirectoryId: string;
  TopicName: string;
}
const RegisterEventTopicRequest = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<RegisterEventTopicRequest>;
export interface RegisterEventTopicResult {}
const RegisterEventTopicResult =
  AddTagsToResourceResult as any as S.Schema<RegisterEventTopicResult>;
export interface RejectSharedDirectoryRequest {
  SharedDirectoryId: string;
}
const RejectSharedDirectoryRequest = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<RejectSharedDirectoryRequest>;
export interface RejectSharedDirectoryResult {
  SharedDirectoryId?: string;
}
const RejectSharedDirectoryResult = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<RejectSharedDirectoryResult>;
export type CidrIps = string[];
const CidrIps = SubnetIds as any as S.Schema<CidrIps>;
export type CidrIpv6s = string[];
const CidrIpv6s = SubnetIds as any as S.Schema<CidrIpv6s>;
export interface RemoveIpRoutesRequest {
  DirectoryId: string;
  CidrIps?: string[];
  CidrIpv6s?: string[];
}
const RemoveIpRoutesRequest = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<RemoveIpRoutesRequest>;
export interface RemoveIpRoutesResult {}
const RemoveIpRoutesResult = AddIpRoutesResult as any as S.Schema<RemoveIpRoutesResult>;
export interface RemoveRegionRequest {
  DirectoryId: string;
}
const RemoveRegionRequest = /*@__PURE__*/ __L.at(__c20, 7) as any as S.Schema<RemoveRegionRequest>;
export interface RemoveRegionResult {}
const RemoveRegionResult = AddIpRoutesResult as any as S.Schema<RemoveRegionResult>;
export type TagKeys = string[];
const TagKeys = SubnetIds as any as S.Schema<TagKeys>;
export interface RemoveTagsFromResourceRequest {
  ResourceId: string;
  TagKeys: string[];
}
const RemoveTagsFromResourceRequest = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<RemoveTagsFromResourceRequest>;
export interface RemoveTagsFromResourceResult {}
const RemoveTagsFromResourceResult =
  CancelSchemaExtensionResult as any as S.Schema<RemoveTagsFromResourceResult>;
export type CustomerUserName = string;
export type UserPassword = string | redacted.Redacted<string>;
export interface ResetUserPasswordRequest {
  DirectoryId: string;
  UserName: string;
  NewPassword: string | redacted.Redacted<string>;
}
const ResetUserPasswordRequest = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<ResetUserPasswordRequest>;
export interface ResetUserPasswordResult {}
const ResetUserPasswordResult = AddTagsToResourceResult as any as S.Schema<ResetUserPasswordResult>;
export interface RestoreFromSnapshotRequest {
  SnapshotId: string;
}
const RestoreFromSnapshotRequest = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<RestoreFromSnapshotRequest>;
export interface RestoreFromSnapshotResult {}
const RestoreFromSnapshotResult =
  CancelSchemaExtensionResult as any as S.Schema<RestoreFromSnapshotResult>;
export type TargetId = string;
export type TargetType = "ACCOUNT" | (string & {});
const TargetType = S.String;

export interface ShareTarget {
  Id: string;
  Type: TargetType;
}
const ShareTarget = /*@__PURE__*/ __L.at(__c21, 3) as any as S.Schema<ShareTarget>;
export interface ShareDirectoryRequest {
  DirectoryId: string;
  ShareNotes?: string | redacted.Redacted<string>;
  ShareTarget: ShareTarget;
  ShareMethod: ShareMethod;
}
const ShareDirectoryRequest = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<ShareDirectoryRequest>;
export interface ShareDirectoryResult {
  SharedDirectoryId?: string;
}
const ShareDirectoryResult = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<ShareDirectoryResult>;
export interface AssessmentConfiguration {
  CustomerDnsIps: string[];
  DnsName: string;
  VpcSettings: DirectoryVpcSettings;
  InstanceIds: string[];
  SecurityGroupIds?: string[];
}
const AssessmentConfiguration = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<AssessmentConfiguration>;
export interface StartADAssessmentRequest {
  AssessmentConfiguration?: AssessmentConfiguration;
  DirectoryId?: string;
}
const StartADAssessmentRequest = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<StartADAssessmentRequest>;
export interface StartADAssessmentResult {
  AssessmentId?: string;
}
const StartADAssessmentResult =
  DeleteADAssessmentResult as any as S.Schema<StartADAssessmentResult>;
export type CreateSnapshotBeforeSchemaExtension = boolean;
export type LdifContent = string;
export interface StartSchemaExtensionRequest {
  DirectoryId: string;
  CreateSnapshotBeforeSchemaExtension: boolean;
  LdifContent: string;
  Description: string;
}
const StartSchemaExtensionRequest = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<StartSchemaExtensionRequest>;
export interface StartSchemaExtensionResult {
  SchemaExtensionId?: string;
}
const StartSchemaExtensionResult = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<StartSchemaExtensionResult>;
export interface UnshareTarget {
  Id: string;
  Type: TargetType;
}
const UnshareTarget = ShareTarget as any as S.Schema<UnshareTarget>;
export interface UnshareDirectoryRequest {
  DirectoryId: string;
  UnshareTarget: UnshareTarget;
}
const UnshareDirectoryRequest = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<UnshareDirectoryRequest>;
export interface UnshareDirectoryResult {
  SharedDirectoryId?: string;
}
const UnshareDirectoryResult = ShareDirectoryResult as any as S.Schema<UnshareDirectoryResult>;
export interface UpdateConditionalForwarderRequest {
  DirectoryId: string;
  RemoteDomainName: string;
  DnsIpAddrs?: string[];
  DnsIpv6Addrs?: string[];
}
const UpdateConditionalForwarderRequest = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<UpdateConditionalForwarderRequest>;
export interface UpdateConditionalForwarderResult {}
const UpdateConditionalForwarderResult =
  CancelSchemaExtensionResult as any as S.Schema<UpdateConditionalForwarderResult>;
export interface DirectorySizeUpdateSettings {
  DirectorySize?: DirectorySize;
}
const DirectorySizeUpdateSettings = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<DirectorySizeUpdateSettings>;
export interface NetworkUpdateSettings {
  NetworkType?: NetworkType;
  CustomerDnsIpsV6?: string[];
}
const NetworkUpdateSettings = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<NetworkUpdateSettings>;
export type CreateSnapshotBeforeUpdate = boolean;
export interface UpdateDirectorySetupRequest {
  DirectoryId: string;
  UpdateType: UpdateType;
  OSUpdateSettings?: OSUpdateSettings;
  DirectorySizeUpdateSettings?: DirectorySizeUpdateSettings;
  NetworkUpdateSettings?: NetworkUpdateSettings;
  CreateSnapshotBeforeUpdate?: boolean;
}
const UpdateDirectorySetupRequest = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<UpdateDirectorySetupRequest>;
export interface UpdateDirectorySetupResult {}
const UpdateDirectorySetupResult =
  CancelSchemaExtensionResult as any as S.Schema<UpdateDirectorySetupResult>;
export interface HybridAdministratorAccountUpdate {
  SecretArn: string;
}
const HybridAdministratorAccountUpdate = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<HybridAdministratorAccountUpdate>;
export interface HybridCustomerInstancesSettings {
  CustomerDnsIps: string[];
  InstanceIds: string[];
}
const HybridCustomerInstancesSettings = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<HybridCustomerInstancesSettings>;
export interface UpdateHybridADRequest {
  DirectoryId: string;
  HybridAdministratorAccountUpdate?: HybridAdministratorAccountUpdate;
  SelfManagedInstancesSettings?: HybridCustomerInstancesSettings;
}
const UpdateHybridADRequest = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<UpdateHybridADRequest>;
export interface UpdateHybridADResult {
  DirectoryId?: string;
  AssessmentId?: string;
}
const UpdateHybridADResult = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<UpdateHybridADResult>;
export interface UpdateNumberOfDomainControllersRequest {
  DirectoryId: string;
  DesiredNumber: number;
}
const UpdateNumberOfDomainControllersRequest = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<UpdateNumberOfDomainControllersRequest>;
export interface UpdateNumberOfDomainControllersResult {}
const UpdateNumberOfDomainControllersResult =
  CancelSchemaExtensionResult as any as S.Schema<UpdateNumberOfDomainControllersResult>;
export interface UpdateRadiusRequest {
  DirectoryId: string;
  RadiusSettings: RadiusSettings;
}
const UpdateRadiusRequest = /*@__PURE__*/ __L.at(__c23, 4) as any as S.Schema<UpdateRadiusRequest>;
export interface UpdateRadiusResult {}
const UpdateRadiusResult = AddIpRoutesResult as any as S.Schema<UpdateRadiusResult>;
export interface Setting {
  Name: string;
  Value: string;
}
const Setting = /*@__PURE__*/ __L.at(__c23, 5) as any as S.Schema<Setting>;
export type Settings = Setting[];
const Settings = /*@__PURE__*/ __L.at(__c23, 6);
export interface UpdateSettingsRequest {
  DirectoryId: string;
  Settings: Setting[];
}
const UpdateSettingsRequest = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<UpdateSettingsRequest>;
export interface UpdateSettingsResult {
  DirectoryId?: string;
}
const UpdateSettingsResult = ConnectDirectoryResult as any as S.Schema<UpdateSettingsResult>;
export interface UpdateTrustRequest {
  TrustId: string;
  SelectiveAuth?: SelectiveAuth;
}
const UpdateTrustRequest = /*@__PURE__*/ __L.at(__c24, 0) as any as S.Schema<UpdateTrustRequest>;
export type RequestId = string;
export interface UpdateTrustResult {
  RequestId?: string;
  TrustId?: string;
}
const UpdateTrustResult = /*@__PURE__*/ __L.at(__c24, 1) as any as S.Schema<UpdateTrustResult>;
export interface VerifyTrustRequest {
  TrustId: string;
}
const VerifyTrustRequest = /*@__PURE__*/ __L.at(__c24, 2) as any as S.Schema<VerifyTrustRequest>;
export interface VerifyTrustResult {
  TrustId?: string;
}
const VerifyTrustResult = CreateTrustResult as any as S.Schema<VerifyTrustResult>;
export type ExceptionMessage = string;
export type AcceptSharedDirectoryError =
  | ClientException
  | DirectoryAlreadySharedException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Accepts a directory sharing request that was sent from the directory owner account.
 */
export const acceptSharedDirectory: API.OperationMethod<
  AcceptSharedDirectoryRequest,
  AcceptSharedDirectoryResult,
  AcceptSharedDirectoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AcceptSharedDirectoryRequest,
  output: AcceptSharedDirectoryResult,
  errors: [
    ClientException,
    DirectoryAlreadySharedException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptSharedDirectory",
}));

export type AddIpRoutesError =
  | ClientException
  | DirectoryUnavailableException
  | EntityAlreadyExistsException
  | EntityDoesNotExistException
  | InvalidParameterException
  | IpRouteLimitExceededException
  | ServiceException
  | CommonErrors;
/**
 * If the DNS server for your self-managed domain uses a publicly addressable IP address,
 * you must add a CIDR address block to correctly route traffic to and from your Microsoft AD
 * on Amazon Web Services. *AddIpRoutes* adds this address block. You can
 * also use *AddIpRoutes* to facilitate routing traffic that uses public IP
 * ranges from your Microsoft AD on Amazon Web Services to a peer VPC.
 *
 * Before you call *AddIpRoutes*, ensure that all of the required
 * permissions have been explicitly granted through a policy. For details about what
 * permissions are required to run the *AddIpRoutes* operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.
 */
export const addIpRoutes: API.OperationMethod<
  AddIpRoutesRequest,
  AddIpRoutesResult,
  AddIpRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddIpRoutesRequest,
  output: AddIpRoutesResult,
  errors: [
    ClientException,
    DirectoryUnavailableException,
    EntityAlreadyExistsException,
    EntityDoesNotExistException,
    InvalidParameterException,
    IpRouteLimitExceededException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddIpRoutes",
}));

export type AddRegionError =
  | AccessDeniedException
  | ClientException
  | DirectoryAlreadyInRegionException
  | DirectoryDoesNotExistException
  | DirectoryUnavailableException
  | EntityDoesNotExistException
  | InvalidParameterException
  | RegionLimitExceededException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Adds two domain controllers in the specified Region for the specified directory.
 */
export const addRegion: API.OperationMethod<
  AddRegionRequest,
  AddRegionResult,
  AddRegionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddRegionRequest,
  output: AddRegionResult,
  errors: [
    AccessDeniedException,
    ClientException,
    DirectoryAlreadyInRegionException,
    DirectoryDoesNotExistException,
    DirectoryUnavailableException,
    EntityDoesNotExistException,
    InvalidParameterException,
    RegionLimitExceededException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddRegion",
}));

export type AddTagsToResourceError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | TagLimitExceededException
  | CommonErrors;
/**
 * Adds or overwrites one or more tags for the specified directory. Each directory can
 * have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be
 * unique to each resource.
 */
export const addTagsToResource: API.OperationMethod<
  AddTagsToResourceRequest,
  AddTagsToResourceResult,
  AddTagsToResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddTagsToResourceRequest,
  output: AddTagsToResourceResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    TagLimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddTagsToResource",
}));

export type CancelSchemaExtensionError =
  | ClientException
  | EntityDoesNotExistException
  | ServiceException
  | CommonErrors;
/**
 * Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema
 * extension has started replicating to all domain controllers, the task can no longer be
 * canceled. A schema extension can be canceled during any of the following states;
 * `Initializing`, `CreatingSnapshot`, and
 * `UpdatingSchema`.
 */
export const cancelSchemaExtension: API.OperationMethod<
  CancelSchemaExtensionRequest,
  CancelSchemaExtensionResult,
  CancelSchemaExtensionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelSchemaExtensionRequest,
  output: CancelSchemaExtensionResult,
  errors: [ClientException, EntityDoesNotExistException, ServiceException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelSchemaExtension",
}));

export type ConnectDirectoryError =
  | ClientException
  | DirectoryLimitExceededException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Creates an AD Connector to connect to a self-managed directory.
 *
 * Before you call `ConnectDirectory`, ensure that all of the required permissions
 * have been explicitly granted through a policy. For details about what permissions are required
 * to run the `ConnectDirectory` operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.
 */
export const connectDirectory: API.OperationMethod<
  ConnectDirectoryRequest,
  ConnectDirectoryResult,
  ConnectDirectoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ConnectDirectoryRequest,
  output: ConnectDirectoryResult,
  errors: [
    ClientException,
    DirectoryLimitExceededException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ConnectDirectory",
}));

export type CreateAliasError =
  | ClientException
  | EntityAlreadyExistsException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Creates an alias for a directory and assigns the alias to the directory. The alias is used
 * to construct the access URL for the directory, such as
 * `http://.awsapps.com`.
 *
 * After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.
 */
export const createAlias: API.OperationMethod<
  CreateAliasRequest,
  CreateAliasResult,
  CreateAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAliasRequest,
  output: CreateAliasResult,
  errors: [
    ClientException,
    EntityAlreadyExistsException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAlias",
}));

export type CreateComputerError =
  | AuthenticationFailedException
  | ClientException
  | DirectoryUnavailableException
  | EntityAlreadyExistsException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Creates an Active Directory computer object in the specified directory.
 */
export const createComputer: API.OperationMethod<
  CreateComputerRequest,
  CreateComputerResult,
  CreateComputerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateComputerRequest,
  output: CreateComputerResult,
  errors: [
    AuthenticationFailedException,
    ClientException,
    DirectoryUnavailableException,
    EntityAlreadyExistsException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateComputer",
}));

export type CreateConditionalForwarderError =
  | ClientException
  | DirectoryUnavailableException
  | EntityAlreadyExistsException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional
 * forwarders are required in order to set up a trust relationship with another domain. The
 * conditional forwarder points to the trusted domain.
 */
export const createConditionalForwarder: API.OperationMethod<
  CreateConditionalForwarderRequest,
  CreateConditionalForwarderResult,
  CreateConditionalForwarderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateConditionalForwarderRequest,
  output: CreateConditionalForwarderResult,
  errors: [
    ClientException,
    DirectoryUnavailableException,
    EntityAlreadyExistsException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConditionalForwarder",
}));

export type CreateDirectoryError =
  | ClientException
  | DirectoryLimitExceededException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Creates a Simple AD directory. For more information, see Simple Active Directory in the *Directory Service Admin Guide*.
 *
 * Before you call `CreateDirectory`, ensure that all of the required permissions
 * have been explicitly granted through a policy. For details about what permissions are required
 * to run the `CreateDirectory` operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.
 */
export const createDirectory: API.OperationMethod<
  CreateDirectoryRequest,
  CreateDirectoryResult,
  CreateDirectoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDirectoryRequest,
  output: CreateDirectoryResult,
  errors: [
    ClientException,
    DirectoryLimitExceededException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDirectory",
}));

export type CreateHybridADError =
  | ADAssessmentLimitExceededException
  | ClientException
  | DirectoryLimitExceededException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Creates a hybrid directory that connects your self-managed Active Directory (AD)
 * infrastructure and Amazon Web Services.
 *
 * You must have a successful directory assessment using StartADAssessment to validate your environment compatibility before you
 * use this operation.
 *
 * Updates are applied asynchronously. Use DescribeDirectories to
 * monitor the progress of directory creation.
 */
export const createHybridAD: API.OperationMethod<
  CreateHybridADRequest,
  CreateHybridADResult,
  CreateHybridADError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateHybridADRequest,
  output: CreateHybridADResult,
  errors: [
    ADAssessmentLimitExceededException,
    ClientException,
    DirectoryLimitExceededException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateHybridAD",
}));

export type CreateLogSubscriptionError =
  | ClientException
  | EntityAlreadyExistsException
  | EntityDoesNotExistException
  | InsufficientPermissionsException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Creates a subscription to forward real-time Directory Service domain controller security
 * logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.
 */
export const createLogSubscription: API.OperationMethod<
  CreateLogSubscriptionRequest,
  CreateLogSubscriptionResult,
  CreateLogSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLogSubscriptionRequest,
  output: CreateLogSubscriptionResult,
  errors: [
    ClientException,
    EntityAlreadyExistsException,
    EntityDoesNotExistException,
    InsufficientPermissionsException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLogSubscription",
}));

export type CreateMicrosoftADError =
  | ClientException
  | DirectoryLimitExceededException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see Managed Microsoft AD in the *Directory Service Admin Guide*.
 *
 * Before you call *CreateMicrosoftAD*, ensure that all of the required
 * permissions have been explicitly granted through a policy. For details about what permissions
 * are required to run the *CreateMicrosoftAD* operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.
 */
export const createMicrosoftAD: API.OperationMethod<
  CreateMicrosoftADRequest,
  CreateMicrosoftADResult,
  CreateMicrosoftADError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMicrosoftADRequest,
  output: CreateMicrosoftADResult,
  errors: [
    ClientException,
    DirectoryLimitExceededException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMicrosoftAD",
}));

export type CreateSnapshotError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | SnapshotLimitExceededException
  | CommonErrors;
/**
 * Creates a snapshot of a Simple AD or Microsoft AD directory in the Amazon Web Services cloud.
 *
 * You cannot take snapshots of AD Connector directories.
 */
export const createSnapshot: API.OperationMethod<
  CreateSnapshotRequest,
  CreateSnapshotResult,
  CreateSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSnapshotRequest,
  output: CreateSnapshotResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    SnapshotLimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSnapshot",
}));

export type CreateTrustError =
  | ClientException
  | EntityAlreadyExistsException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Directory Service for Microsoft Active Directory allows you to configure trust relationships. For
 * example, you can establish a trust between your Managed Microsoft AD directory, and your existing
 * self-managed Microsoft Active Directory. This would allow you to provide users and groups
 * access to resources in either domain, with a single set of credentials.
 *
 * This action initiates the creation of the Amazon Web Services side of a trust relationship between an
 * Managed Microsoft AD directory and an external domain. You can create either a forest trust or an
 * external trust.
 */
export const createTrust: API.OperationMethod<
  CreateTrustRequest,
  CreateTrustResult,
  CreateTrustError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTrustRequest,
  output: CreateTrustResult,
  errors: [
    ClientException,
    EntityAlreadyExistsException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTrust",
}));

export type DeleteADAssessmentError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Deletes a directory assessment and all associated data. This operation permanently
 * removes the assessment results, validation reports, and configuration
 * information.
 *
 * You cannot delete system-initiated assessments. You can delete customer-created
 * assessments even if they are in progress.
 */
export const deleteADAssessment: API.OperationMethod<
  DeleteADAssessmentRequest,
  DeleteADAssessmentResult,
  DeleteADAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteADAssessmentRequest,
  output: DeleteADAssessmentResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteADAssessment",
}));

export type DeleteConditionalForwarderError =
  | ClientException
  | DirectoryUnavailableException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Deletes a conditional forwarder that has been set up for your Amazon Web Services
 * directory.
 */
export const deleteConditionalForwarder: API.OperationMethod<
  DeleteConditionalForwarderRequest,
  DeleteConditionalForwarderResult,
  DeleteConditionalForwarderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConditionalForwarderRequest,
  output: DeleteConditionalForwarderResult,
  errors: [
    ClientException,
    DirectoryUnavailableException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConditionalForwarder",
}));

export type DeleteDirectoryError =
  | ClientException
  | EntityDoesNotExistException
  | ServiceException
  | CommonErrors;
/**
 * Deletes an Directory Service directory.
 *
 * Before you call `DeleteDirectory`, ensure that all of the required permissions
 * have been explicitly granted through a policy. For details about what permissions are required
 * to run the `DeleteDirectory` operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.
 */
export const deleteDirectory: API.OperationMethod<
  DeleteDirectoryRequest,
  DeleteDirectoryResult,
  DeleteDirectoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDirectoryRequest,
  output: DeleteDirectoryResult,
  errors: [ClientException, EntityDoesNotExistException, ServiceException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDirectory",
}));

export type DeleteLogSubscriptionError =
  | ClientException
  | EntityDoesNotExistException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Deletes the specified log subscription.
 */
export const deleteLogSubscription: API.OperationMethod<
  DeleteLogSubscriptionRequest,
  DeleteLogSubscriptionResult,
  DeleteLogSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLogSubscriptionRequest,
  output: DeleteLogSubscriptionResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLogSubscription",
}));

export type DeleteSnapshotError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Deletes a directory snapshot.
 */
export const deleteSnapshot: API.OperationMethod<
  DeleteSnapshotRequest,
  DeleteSnapshotResult,
  DeleteSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSnapshotRequest,
  output: DeleteSnapshotResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSnapshot",
}));

export type DeleteTrustError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Deletes an existing trust relationship between your Managed Microsoft AD directory and an external
 * domain.
 */
export const deleteTrust: API.OperationMethod<
  DeleteTrustRequest,
  DeleteTrustResult,
  DeleteTrustError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTrustRequest,
  output: DeleteTrustResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTrust",
}));

export type DeregisterCertificateError =
  | CertificateDoesNotExistException
  | CertificateInUseException
  | ClientException
  | DirectoryDoesNotExistException
  | DirectoryUnavailableException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Deletes from the system the certificate that was registered for secure LDAP or client
 * certificate authentication.
 */
export const deregisterCertificate: API.OperationMethod<
  DeregisterCertificateRequest,
  DeregisterCertificateResult,
  DeregisterCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeregisterCertificateRequest,
  output: DeregisterCertificateResult,
  errors: [
    CertificateDoesNotExistException,
    CertificateInUseException,
    ClientException,
    DirectoryDoesNotExistException,
    DirectoryUnavailableException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterCertificate",
}));

export type DeregisterEventTopicError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Removes the specified directory as a publisher to the specified Amazon SNS topic.
 */
export const deregisterEventTopic: API.OperationMethod<
  DeregisterEventTopicRequest,
  DeregisterEventTopicResult,
  DeregisterEventTopicError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeregisterEventTopicRequest,
  output: DeregisterEventTopicResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterEventTopic",
}));

export type DescribeADAssessmentError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Retrieves detailed information about a directory assessment, including its current
 * status, validation results, and configuration details. Use this operation to monitor
 * assessment progress and review results.
 */
export const describeADAssessment: API.OperationMethod<
  DescribeADAssessmentRequest,
  DescribeADAssessmentResult,
  DescribeADAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeADAssessmentRequest,
  output: DescribeADAssessmentResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeADAssessment",
}));

export type DescribeCAEnrollmentPolicyError =
  | ClientException
  | DirectoryDoesNotExistException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Retrieves detailed information about the certificate authority (CA) enrollment policy for
 * the specified directory. This policy determines how client certificates are automatically enrolled and
 * managed through Amazon Web Services Private Certificate Authority.
 */
export const describeCAEnrollmentPolicy: API.OperationMethod<
  DescribeCAEnrollmentPolicyRequest,
  DescribeCAEnrollmentPolicyResult,
  DescribeCAEnrollmentPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeCAEnrollmentPolicyRequest,
  output: DescribeCAEnrollmentPolicyResult,
  errors: [
    ClientException,
    DirectoryDoesNotExistException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCAEnrollmentPolicy",
}));

export type DescribeCertificateError =
  | CertificateDoesNotExistException
  | ClientException
  | DirectoryDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Displays information about the certificate registered for secure LDAP or client
 * certificate authentication.
 */
export const describeCertificate: API.OperationMethod<
  DescribeCertificateRequest,
  DescribeCertificateResult,
  DescribeCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeCertificateRequest,
  output: DescribeCertificateResult,
  errors: [
    CertificateDoesNotExistException,
    ClientException,
    DirectoryDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCertificate",
}));

export type DescribeClientAuthenticationSettingsError =
  | AccessDeniedException
  | ClientException
  | DirectoryDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Retrieves information about the type of client authentication for the specified directory,
 * if the type is specified. If no type is specified, information about all client authentication
 * types that are supported for the specified directory is retrieved. Currently, only
 * `SmartCard` is supported.
 */
export const describeClientAuthenticationSettings: API.PaginatedOperationMethod<
  DescribeClientAuthenticationSettingsRequest,
  DescribeClientAuthenticationSettingsResult,
  DescribeClientAuthenticationSettingsError,
  Credentials | HttpClient.HttpClient,
  ClientAuthenticationSettingInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeClientAuthenticationSettingsRequest,
  output: DescribeClientAuthenticationSettingsResult,
  errors: [
    AccessDeniedException,
    ClientException,
    DirectoryDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeClientAuthenticationSettings",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ClientAuthenticationSettingsInfo",
    pageSize: "Limit",
  } as const,
})) as any;

export type DescribeConditionalForwardersError =
  | ClientException
  | DirectoryUnavailableException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Obtains information about the conditional forwarders for this account.
 *
 * If no input parameters are provided for RemoteDomainNames, this request describes all
 * conditional forwarders for the specified directory ID.
 */
export const describeConditionalForwarders: API.OperationMethod<
  DescribeConditionalForwardersRequest,
  DescribeConditionalForwardersResult,
  DescribeConditionalForwardersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeConditionalForwardersRequest,
  output: DescribeConditionalForwardersResult,
  errors: [
    ClientException,
    DirectoryUnavailableException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConditionalForwarders",
}));

export type DescribeDirectoriesError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidNextTokenException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Obtains information about the directories that belong to this account.
 *
 * You can retrieve information about specific directories by passing the directory
 * identifiers in the `DirectoryIds` parameter. Otherwise, all directories that belong
 * to the current account are returned.
 *
 * This operation supports pagination with the use of the `NextToken` request and
 * response parameters. If more results are available, the
 * `DescribeDirectoriesResult.NextToken` member contains a token that you pass in
 * the next call to DescribeDirectories to retrieve the next set of
 * items.
 *
 * You can also specify a maximum number of return results with the `Limit`
 * parameter.
 */
export const describeDirectories: API.PaginatedOperationMethod<
  DescribeDirectoriesRequest,
  DescribeDirectoriesResult,
  DescribeDirectoriesError,
  Credentials | HttpClient.HttpClient,
  DirectoryDescription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDirectoriesRequest,
  output: DescribeDirectoriesResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidNextTokenException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDirectories",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "DirectoryDescriptions",
    pageSize: "Limit",
  } as const,
})) as any;

export type DescribeDirectoryDataAccessError =
  | AccessDeniedException
  | ClientException
  | DirectoryDoesNotExistException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Obtains status of directory data access enablement through the Directory Service Data API for the
 * specified directory.
 */
export const describeDirectoryDataAccess: API.OperationMethod<
  DescribeDirectoryDataAccessRequest,
  DescribeDirectoryDataAccessResult,
  DescribeDirectoryDataAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeDirectoryDataAccessRequest,
  output: DescribeDirectoryDataAccessResult,
  errors: [
    AccessDeniedException,
    ClientException,
    DirectoryDoesNotExistException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDirectoryDataAccess",
}));

export type DescribeDomainControllersError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidNextTokenException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Provides information about any domain controllers in your directory.
 */
export const describeDomainControllers: API.PaginatedOperationMethod<
  DescribeDomainControllersRequest,
  DescribeDomainControllersResult,
  DescribeDomainControllersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDomainControllersRequest,
  output: DescribeDomainControllersResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidNextTokenException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDomainControllers",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", pageSize: "Limit" } as const,
})) as any;

export type DescribeEventTopicsError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Obtains information about which Amazon SNS topics receive status messages from the specified
 * directory.
 *
 * If no input parameters are provided, such as DirectoryId or TopicName, this request
 * describes all of the associations in the account.
 */
export const describeEventTopics: API.OperationMethod<
  DescribeEventTopicsRequest,
  DescribeEventTopicsResult,
  DescribeEventTopicsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeEventTopicsRequest,
  output: DescribeEventTopicsResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEventTopics",
}));

export type DescribeHybridADUpdateError =
  | ClientException
  | DirectoryDoesNotExistException
  | InvalidNextTokenException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Retrieves information about update activities for a hybrid directory. This operation
 * provides details about configuration changes, administrator account updates, and
 * self-managed instance settings (IDs and DNS IPs).
 */
export const describeHybridADUpdate: API.OperationMethod<
  DescribeHybridADUpdateRequest,
  DescribeHybridADUpdateResult,
  DescribeHybridADUpdateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeHybridADUpdateRequest,
  output: DescribeHybridADUpdateResult,
  errors: [
    ClientException,
    DirectoryDoesNotExistException,
    InvalidNextTokenException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeHybridADUpdate",
}));

export type DescribeLDAPSSettingsError =
  | ClientException
  | DirectoryDoesNotExistException
  | InvalidNextTokenException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Describes the status of LDAP security for the specified directory.
 */
export const describeLDAPSSettings: API.PaginatedOperationMethod<
  DescribeLDAPSSettingsRequest,
  DescribeLDAPSSettingsResult,
  DescribeLDAPSSettingsError,
  Credentials | HttpClient.HttpClient,
  LDAPSSettingInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeLDAPSSettingsRequest,
  output: DescribeLDAPSSettingsResult,
  errors: [
    ClientException,
    DirectoryDoesNotExistException,
    InvalidNextTokenException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLDAPSSettings",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "LDAPSSettingsInfo",
    pageSize: "Limit",
  } as const,
})) as any;

export type DescribeRegionsError =
  | AccessDeniedException
  | ClientException
  | DirectoryDoesNotExistException
  | InvalidNextTokenException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Provides information about the Regions that are configured for multi-Region
 * replication.
 */
export const describeRegions: API.PaginatedOperationMethod<
  DescribeRegionsRequest,
  DescribeRegionsResult,
  DescribeRegionsError,
  Credentials | HttpClient.HttpClient,
  RegionDescription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeRegionsRequest,
  output: DescribeRegionsResult,
  errors: [
    AccessDeniedException,
    ClientException,
    DirectoryDoesNotExistException,
    InvalidNextTokenException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRegions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RegionsDescription",
  } as const,
})) as any;

export type DescribeSettingsError =
  | ClientException
  | DirectoryDoesNotExistException
  | InvalidNextTokenException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Retrieves information about the configurable settings for the specified directory.
 */
export const describeSettings: API.OperationMethod<
  DescribeSettingsRequest,
  DescribeSettingsResult,
  DescribeSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeSettingsRequest,
  output: DescribeSettingsResult,
  errors: [
    ClientException,
    DirectoryDoesNotExistException,
    InvalidNextTokenException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSettings",
}));

export type DescribeSharedDirectoriesError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidNextTokenException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Returns the shared directories in your account.
 */
export const describeSharedDirectories: API.PaginatedOperationMethod<
  DescribeSharedDirectoriesRequest,
  DescribeSharedDirectoriesResult,
  DescribeSharedDirectoriesError,
  Credentials | HttpClient.HttpClient,
  SharedDirectory
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeSharedDirectoriesRequest,
  output: DescribeSharedDirectoriesResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidNextTokenException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSharedDirectories",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SharedDirectories",
    pageSize: "Limit",
  } as const,
})) as any;

export type DescribeSnapshotsError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidNextTokenException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Obtains information about the directory snapshots that belong to this account.
 *
 * This operation supports pagination with the use of the *NextToken* request and
 * response parameters. If more results are available, the *DescribeSnapshots.NextToken*
 * member contains a token that you pass in the next call to DescribeSnapshots to
 * retrieve the next set of items.
 *
 * You can also specify a maximum number of return results with the *Limit*
 * parameter.
 */
export const describeSnapshots: API.PaginatedOperationMethod<
  DescribeSnapshotsRequest,
  DescribeSnapshotsResult,
  DescribeSnapshotsError,
  Credentials | HttpClient.HttpClient,
  Snapshot
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeSnapshotsRequest,
  output: DescribeSnapshotsResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidNextTokenException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSnapshots",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Snapshots",
    pageSize: "Limit",
  } as const,
})) as any;

export type DescribeTrustsError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidNextTokenException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Obtains information about the trust relationships for this account.
 *
 * If no input parameters are provided, such as DirectoryId or TrustIds, this request
 * describes all the trust relationships belonging to the account.
 */
export const describeTrusts: API.PaginatedOperationMethod<
  DescribeTrustsRequest,
  DescribeTrustsResult,
  DescribeTrustsError,
  Credentials | HttpClient.HttpClient,
  Trust
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeTrustsRequest,
  output: DescribeTrustsResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidNextTokenException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTrusts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Trusts",
    pageSize: "Limit",
  } as const,
})) as any;

export type DescribeUpdateDirectoryError =
  | AccessDeniedException
  | ClientException
  | DirectoryDoesNotExistException
  | InvalidNextTokenException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Describes the updates of a directory for a particular update type.
 */
export const describeUpdateDirectory: API.PaginatedOperationMethod<
  DescribeUpdateDirectoryRequest,
  DescribeUpdateDirectoryResult,
  DescribeUpdateDirectoryError,
  Credentials | HttpClient.HttpClient,
  UpdateInfoEntry
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeUpdateDirectoryRequest,
  output: DescribeUpdateDirectoryResult,
  errors: [
    AccessDeniedException,
    ClientException,
    DirectoryDoesNotExistException,
    InvalidNextTokenException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeUpdateDirectory",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "UpdateActivities",
  } as const,
})) as any;

export type DisableCAEnrollmentPolicyError =
  | AccessDeniedException
  | ClientException
  | DirectoryDoesNotExistException
  | DirectoryUnavailableException
  | DisableAlreadyInProgressException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Disables the certificate authority (CA) enrollment policy for the specified directory. This stops
 * automatic certificate enrollment and management for domain-joined clients, but does not affect
 * existing certificates.
 *
 * Disabling the CA enrollment policy prevents new certificates from being automatically
 * enrolled, but existing certificates remain valid and functional until they expire.
 */
export const disableCAEnrollmentPolicy: API.OperationMethod<
  DisableCAEnrollmentPolicyRequest,
  DisableCAEnrollmentPolicyResult,
  DisableCAEnrollmentPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableCAEnrollmentPolicyRequest,
  output: DisableCAEnrollmentPolicyResult,
  errors: [
    AccessDeniedException,
    ClientException,
    DirectoryDoesNotExistException,
    DirectoryUnavailableException,
    DisableAlreadyInProgressException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableCAEnrollmentPolicy",
}));

export type DisableClientAuthenticationError =
  | AccessDeniedException
  | ClientException
  | DirectoryDoesNotExistException
  | InvalidClientAuthStatusException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Disables alternative client authentication methods for the specified directory.
 */
export const disableClientAuthentication: API.OperationMethod<
  DisableClientAuthenticationRequest,
  DisableClientAuthenticationResult,
  DisableClientAuthenticationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableClientAuthenticationRequest,
  output: DisableClientAuthenticationResult,
  errors: [
    AccessDeniedException,
    ClientException,
    DirectoryDoesNotExistException,
    InvalidClientAuthStatusException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableClientAuthentication",
}));

export type DisableDirectoryDataAccessError =
  | AccessDeniedException
  | ClientException
  | DirectoryDoesNotExistException
  | DirectoryInDesiredStateException
  | DirectoryUnavailableException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Deactivates access to directory data via the Directory Service Data API for the specified directory. For
 * more information, see Directory Service Data API Reference.
 */
export const disableDirectoryDataAccess: API.OperationMethod<
  DisableDirectoryDataAccessRequest,
  DisableDirectoryDataAccessResult,
  DisableDirectoryDataAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableDirectoryDataAccessRequest,
  output: DisableDirectoryDataAccessResult,
  errors: [
    AccessDeniedException,
    ClientException,
    DirectoryDoesNotExistException,
    DirectoryInDesiredStateException,
    DirectoryUnavailableException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableDirectoryDataAccess",
}));

export type DisableLDAPSError =
  | ClientException
  | DirectoryDoesNotExistException
  | DirectoryUnavailableException
  | InvalidLDAPSStatusException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Deactivates LDAP secure calls for the specified directory.
 */
export const disableLDAPS: API.OperationMethod<
  DisableLDAPSRequest,
  DisableLDAPSResult,
  DisableLDAPSError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableLDAPSRequest,
  output: DisableLDAPSResult,
  errors: [
    ClientException,
    DirectoryDoesNotExistException,
    DirectoryUnavailableException,
    InvalidLDAPSStatusException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableLDAPS",
}));

export type DisableRadiusError =
  | ClientException
  | EntityDoesNotExistException
  | ServiceException
  | CommonErrors;
/**
 * Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User
 * Service (RADIUS) server for an AD Connector or Microsoft AD directory.
 */
export const disableRadius: API.OperationMethod<
  DisableRadiusRequest,
  DisableRadiusResult,
  DisableRadiusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableRadiusRequest,
  output: DisableRadiusResult,
  errors: [ClientException, EntityDoesNotExistException, ServiceException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableRadius",
}));

export type DisableSsoError =
  | AuthenticationFailedException
  | ClientException
  | EntityDoesNotExistException
  | InsufficientPermissionsException
  | ServiceException
  | CommonErrors;
/**
 * Disables single-sign on for a directory.
 */
export const disableSso: API.OperationMethod<
  DisableSsoRequest,
  DisableSsoResult,
  DisableSsoError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableSsoRequest,
  output: DisableSsoResult,
  errors: [
    AuthenticationFailedException,
    ClientException,
    EntityDoesNotExistException,
    InsufficientPermissionsException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableSso",
}));

export type EnableCAEnrollmentPolicyError =
  | AccessDeniedException
  | ClientException
  | DirectoryDoesNotExistException
  | DirectoryUnavailableException
  | EnableAlreadyInProgressException
  | EntityAlreadyExistsException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Enables certificate authority (CA) enrollment policy for the specified directory. This allows
 * domain-joined clients to automatically request and receive certificates from the specified
 * Amazon Web Services Private Certificate Authority.
 *
 * Before enabling CA enrollment, ensure that the PCA connector is properly configured and
 * accessible from the directory. The connector must be in an active state and have the
 * necessary permissions.
 */
export const enableCAEnrollmentPolicy: API.OperationMethod<
  EnableCAEnrollmentPolicyRequest,
  EnableCAEnrollmentPolicyResult,
  EnableCAEnrollmentPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableCAEnrollmentPolicyRequest,
  output: EnableCAEnrollmentPolicyResult,
  errors: [
    AccessDeniedException,
    ClientException,
    DirectoryDoesNotExistException,
    DirectoryUnavailableException,
    EnableAlreadyInProgressException,
    EntityAlreadyExistsException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableCAEnrollmentPolicy",
}));

export type EnableClientAuthenticationError =
  | AccessDeniedException
  | ClientException
  | DirectoryDoesNotExistException
  | InvalidClientAuthStatusException
  | NoAvailableCertificateException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Enables alternative client authentication methods for the specified directory.
 */
export const enableClientAuthentication: API.OperationMethod<
  EnableClientAuthenticationRequest,
  EnableClientAuthenticationResult,
  EnableClientAuthenticationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableClientAuthenticationRequest,
  output: EnableClientAuthenticationResult,
  errors: [
    AccessDeniedException,
    ClientException,
    DirectoryDoesNotExistException,
    InvalidClientAuthStatusException,
    NoAvailableCertificateException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableClientAuthentication",
}));

export type EnableDirectoryDataAccessError =
  | AccessDeniedException
  | ClientException
  | DirectoryDoesNotExistException
  | DirectoryInDesiredStateException
  | DirectoryUnavailableException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Enables access to directory data via the Directory Service Data API for the specified directory. For
 * more information, see Directory Service Data API Reference.
 */
export const enableDirectoryDataAccess: API.OperationMethod<
  EnableDirectoryDataAccessRequest,
  EnableDirectoryDataAccessResult,
  EnableDirectoryDataAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableDirectoryDataAccessRequest,
  output: EnableDirectoryDataAccessResult,
  errors: [
    AccessDeniedException,
    ClientException,
    DirectoryDoesNotExistException,
    DirectoryInDesiredStateException,
    DirectoryUnavailableException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableDirectoryDataAccess",
}));

export type EnableLDAPSError =
  | ClientException
  | DirectoryDoesNotExistException
  | DirectoryUnavailableException
  | InvalidLDAPSStatusException
  | InvalidParameterException
  | NoAvailableCertificateException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Activates the switch for the specific directory to always use LDAP secure calls.
 */
export const enableLDAPS: API.OperationMethod<
  EnableLDAPSRequest,
  EnableLDAPSResult,
  EnableLDAPSError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableLDAPSRequest,
  output: EnableLDAPSResult,
  errors: [
    ClientException,
    DirectoryDoesNotExistException,
    DirectoryUnavailableException,
    InvalidLDAPSStatusException,
    InvalidParameterException,
    NoAvailableCertificateException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableLDAPS",
}));

export type EnableRadiusError =
  | ClientException
  | EntityAlreadyExistsException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User
 * Service (RADIUS) server for an AD Connector or Microsoft AD directory.
 */
export const enableRadius: API.OperationMethod<
  EnableRadiusRequest,
  EnableRadiusResult,
  EnableRadiusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableRadiusRequest,
  output: EnableRadiusResult,
  errors: [
    ClientException,
    EntityAlreadyExistsException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableRadius",
}));

export type EnableSsoError =
  | AuthenticationFailedException
  | ClientException
  | EntityDoesNotExistException
  | InsufficientPermissionsException
  | ServiceException
  | CommonErrors;
/**
 * Enables single sign-on for a directory. Single sign-on allows users in your directory to
 * access certain Amazon Web Services services from a computer joined to the directory without having to enter
 * their credentials separately.
 */
export const enableSso: API.OperationMethod<
  EnableSsoRequest,
  EnableSsoResult,
  EnableSsoError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableSsoRequest,
  output: EnableSsoResult,
  errors: [
    AuthenticationFailedException,
    ClientException,
    EntityDoesNotExistException,
    InsufficientPermissionsException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableSso",
}));

export type GetDirectoryLimitsError =
  | ClientException
  | EntityDoesNotExistException
  | ServiceException
  | CommonErrors;
/**
 * Obtains directory limit information for the current Region.
 */
export const getDirectoryLimits: API.OperationMethod<
  GetDirectoryLimitsRequest,
  GetDirectoryLimitsResult,
  GetDirectoryLimitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDirectoryLimitsRequest,
  output: GetDirectoryLimitsResult,
  errors: [ClientException, EntityDoesNotExistException, ServiceException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDirectoryLimits",
}));

export type GetSnapshotLimitsError =
  | ClientException
  | EntityDoesNotExistException
  | ServiceException
  | CommonErrors;
/**
 * Obtains the manual snapshot limits for a directory.
 */
export const getSnapshotLimits: API.OperationMethod<
  GetSnapshotLimitsRequest,
  GetSnapshotLimitsResult,
  GetSnapshotLimitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSnapshotLimitsRequest,
  output: GetSnapshotLimitsResult,
  errors: [ClientException, EntityDoesNotExistException, ServiceException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSnapshotLimits",
}));

export type ListADAssessmentsError =
  | ClientException
  | DirectoryDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Retrieves a list of directory assessments for the specified directory or all
 * assessments in your account. Use this operation to monitor assessment status and manage
 * multiple assessments.
 */
export const listADAssessments: API.PaginatedOperationMethod<
  ListADAssessmentsRequest,
  ListADAssessmentsResult,
  ListADAssessmentsError,
  Credentials | HttpClient.HttpClient,
  AssessmentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListADAssessmentsRequest,
  output: ListADAssessmentsResult,
  errors: [
    ClientException,
    DirectoryDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListADAssessments",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Assessments",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListCertificatesError =
  | ClientException
  | DirectoryDoesNotExistException
  | InvalidNextTokenException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * For the specified directory, lists all the certificates registered for a secure LDAP or
 * client certificate authentication.
 */
export const listCertificates: API.PaginatedOperationMethod<
  ListCertificatesRequest,
  ListCertificatesResult,
  ListCertificatesError,
  Credentials | HttpClient.HttpClient,
  CertificateInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCertificatesRequest,
  output: ListCertificatesResult,
  errors: [
    ClientException,
    DirectoryDoesNotExistException,
    InvalidNextTokenException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCertificates",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CertificatesInfo",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListIpRoutesError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidNextTokenException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Lists the address blocks that you have added to a directory.
 */
export const listIpRoutes: API.PaginatedOperationMethod<
  ListIpRoutesRequest,
  ListIpRoutesResult,
  ListIpRoutesError,
  Credentials | HttpClient.HttpClient,
  IpRouteInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListIpRoutesRequest,
  output: ListIpRoutesResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidNextTokenException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIpRoutes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "IpRoutesInfo",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListLogSubscriptionsError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidNextTokenException
  | ServiceException
  | CommonErrors;
/**
 * Lists the active log subscriptions for the Amazon Web Services account.
 */
export const listLogSubscriptions: API.PaginatedOperationMethod<
  ListLogSubscriptionsRequest,
  ListLogSubscriptionsResult,
  ListLogSubscriptionsError,
  Credentials | HttpClient.HttpClient,
  LogSubscription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLogSubscriptionsRequest,
  output: ListLogSubscriptionsResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidNextTokenException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLogSubscriptions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "LogSubscriptions",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListSchemaExtensionsError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidNextTokenException
  | ServiceException
  | CommonErrors;
/**
 * Lists all schema extensions applied to a Microsoft AD Directory.
 */
export const listSchemaExtensions: API.PaginatedOperationMethod<
  ListSchemaExtensionsRequest,
  ListSchemaExtensionsResult,
  ListSchemaExtensionsError,
  Credentials | HttpClient.HttpClient,
  SchemaExtensionInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSchemaExtensionsRequest,
  output: ListSchemaExtensionsResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidNextTokenException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSchemaExtensions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SchemaExtensionsInfo",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidNextTokenException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Lists all tags on a directory.
 */
export const listTagsForResource: API.PaginatedOperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResult,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidNextTokenException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Tags",
    pageSize: "Limit",
  } as const,
})) as any;

export type RegisterCertificateError =
  | CertificateAlreadyExistsException
  | CertificateLimitExceededException
  | ClientException
  | DirectoryDoesNotExistException
  | DirectoryUnavailableException
  | InvalidCertificateException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Registers a certificate for a secure LDAP or client certificate authentication.
 */
export const registerCertificate: API.OperationMethod<
  RegisterCertificateRequest,
  RegisterCertificateResult,
  RegisterCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterCertificateRequest,
  output: RegisterCertificateResult,
  errors: [
    CertificateAlreadyExistsException,
    CertificateLimitExceededException,
    ClientException,
    DirectoryDoesNotExistException,
    DirectoryUnavailableException,
    InvalidCertificateException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterCertificate",
}));

export type RegisterEventTopicError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Associates a directory with an Amazon SNS topic. This establishes the directory as a
 * publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when
 * the status of your directory changes. You get notified if your directory goes from an Active
 * status to an Impaired or Inoperable status. You also receive a notification when the directory
 * returns to an Active status.
 */
export const registerEventTopic: API.OperationMethod<
  RegisterEventTopicRequest,
  RegisterEventTopicResult,
  RegisterEventTopicError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterEventTopicRequest,
  output: RegisterEventTopicResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterEventTopic",
}));

export type RejectSharedDirectoryError =
  | ClientException
  | DirectoryAlreadySharedException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Rejects a directory sharing request that was sent from the directory owner account.
 */
export const rejectSharedDirectory: API.OperationMethod<
  RejectSharedDirectoryRequest,
  RejectSharedDirectoryResult,
  RejectSharedDirectoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RejectSharedDirectoryRequest,
  output: RejectSharedDirectoryResult,
  errors: [
    ClientException,
    DirectoryAlreadySharedException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RejectSharedDirectory",
}));

export type RemoveIpRoutesError =
  | ClientException
  | DirectoryUnavailableException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Removes IP address blocks from a directory.
 */
export const removeIpRoutes: API.OperationMethod<
  RemoveIpRoutesRequest,
  RemoveIpRoutesResult,
  RemoveIpRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveIpRoutesRequest,
  output: RemoveIpRoutesResult,
  errors: [
    ClientException,
    DirectoryUnavailableException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveIpRoutes",
}));

export type RemoveRegionError =
  | AccessDeniedException
  | ClientException
  | DirectoryDoesNotExistException
  | DirectoryUnavailableException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Stops all replication and removes the domain controllers from the specified Region. You
 * cannot remove the primary Region with this operation. Instead, use the
 * `DeleteDirectory` API.
 */
export const removeRegion: API.OperationMethod<
  RemoveRegionRequest,
  RemoveRegionResult,
  RemoveRegionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveRegionRequest,
  output: RemoveRegionResult,
  errors: [
    AccessDeniedException,
    ClientException,
    DirectoryDoesNotExistException,
    DirectoryUnavailableException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveRegion",
}));

export type RemoveTagsFromResourceError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Removes tags from a directory.
 */
export const removeTagsFromResource: API.OperationMethod<
  RemoveTagsFromResourceRequest,
  RemoveTagsFromResourceResult,
  RemoveTagsFromResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveTagsFromResourceRequest,
  output: RemoveTagsFromResourceResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveTagsFromResource",
}));

export type ResetUserPasswordError =
  | ClientException
  | DirectoryUnavailableException
  | EntityDoesNotExistException
  | InvalidPasswordException
  | ServiceException
  | UnsupportedOperationException
  | UserDoesNotExistException
  | CommonErrors;
/**
 * Resets the password for any user in your Managed Microsoft AD or Simple AD directory. Disabled
 * users will become enabled and can be authenticated following the API call.
 *
 * You can reset the password for any user in your directory with the following
 * exceptions:
 *
 * - For Simple AD, you cannot reset the password for any user that is a member of either
 * the **Domain Admins** or Enterprise
 * Admins group except for the administrator user.
 *
 * - For Managed Microsoft AD, you can only reset the password for a user that is in an OU based
 * off of the NetBIOS name that you typed when you created your directory. For example, you
 * cannot reset the password for a user in the Amazon Web Services
 * Reserved OU. For more information about the OU structure for an Managed Microsoft AD
 * directory, see What Gets Created in the Directory Service Administration
 * Guide.
 */
export const resetUserPassword: API.OperationMethod<
  ResetUserPasswordRequest,
  ResetUserPasswordResult,
  ResetUserPasswordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResetUserPasswordRequest,
  output: ResetUserPasswordResult,
  errors: [
    ClientException,
    DirectoryUnavailableException,
    EntityDoesNotExistException,
    InvalidPasswordException,
    ServiceException,
    UnsupportedOperationException,
    UserDoesNotExistException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResetUserPassword",
}));

export type RestoreFromSnapshotError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Restores a directory using an existing directory snapshot.
 *
 * When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.
 *
 * This action returns as soon as the restore operation is initiated. You can monitor the
 * progress of the restore operation by calling the DescribeDirectories operation with
 * the directory identifier. When the **DirectoryDescription.Stage** value changes to
 * `Active`, the restore operation is complete.
 */
export const restoreFromSnapshot: API.OperationMethod<
  RestoreFromSnapshotRequest,
  RestoreFromSnapshotResult,
  RestoreFromSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreFromSnapshotRequest,
  output: RestoreFromSnapshotResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestoreFromSnapshot",
}));

export type ShareDirectoryError =
  | AccessDeniedException
  | ClientException
  | DirectoryAlreadySharedException
  | EntityDoesNotExistException
  | InvalidParameterException
  | InvalidTargetException
  | OrganizationsException
  | ServiceException
  | ShareLimitExceededException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Shares a specified directory (`DirectoryId`) in your Amazon Web Services account (directory
 * owner) with another Amazon Web Services account (directory consumer). With this operation you can use your
 * directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.
 *
 * When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the
 * directory consumer account. This shared directory contains the metadata to provide access to
 * the directory within the directory owner account. The shared directory is visible in all VPCs
 * in the directory consumer account.
 *
 * The `ShareMethod` parameter determines whether the specified directory can be
 * shared between Amazon Web Services accounts inside the same Amazon Web Services organization (`ORGANIZATIONS`).
 * It also determines whether you can share the directory with any other Amazon Web Services account either
 * inside or outside of the organization (`HANDSHAKE`).
 *
 * The `ShareNotes` parameter is only used when `HANDSHAKE` is called,
 * which sends a directory sharing request to the directory consumer.
 */
export const shareDirectory: API.OperationMethod<
  ShareDirectoryRequest,
  ShareDirectoryResult,
  ShareDirectoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ShareDirectoryRequest,
  output: ShareDirectoryResult,
  errors: [
    AccessDeniedException,
    ClientException,
    DirectoryAlreadySharedException,
    EntityDoesNotExistException,
    InvalidParameterException,
    InvalidTargetException,
    OrganizationsException,
    ServiceException,
    ShareLimitExceededException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ShareDirectory",
}));

export type StartADAssessmentError =
  | ADAssessmentLimitExceededException
  | ClientException
  | DirectoryDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Initiates a directory assessment to validate your self-managed AD environment for
 * hybrid domain join. The assessment checks compatibility and connectivity of the
 * self-managed AD environment.
 *
 * A directory assessment is automatically created when you create a hybrid directory.
 * There are two types of assessments: `CUSTOMER` and `SYSTEM`. Your
 * Amazon Web Services account has a limit of 100 `CUSTOMER` directory assessments.
 *
 * The assessment process typically takes 30 minutes or more to complete. The assessment
 * process is asynchronous and you can monitor it with
 * `DescribeADAssessment`.
 *
 * The `InstanceIds` must have a one-to-one correspondence with
 * `CustomerDnsIps`, meaning that if the IP address for instance i-10243410
 * is 10.24.34.100 and the IP address for instance i-10243420 is 10.24.34.200, then the
 * input arrays must maintain the same order relationship, either [10.24.34.100,
 * 10.24.34.200] paired with [i-10243410, i-10243420] or [10.24.34.200, 10.24.34.100]
 * paired with [i-10243420, i-10243410].
 *
 * Note: You must provide exactly one `DirectoryId` or
 * `AssessmentConfiguration`.
 */
export const startADAssessment: API.OperationMethod<
  StartADAssessmentRequest,
  StartADAssessmentResult,
  StartADAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartADAssessmentRequest,
  output: StartADAssessmentResult,
  errors: [
    ADAssessmentLimitExceededException,
    ClientException,
    DirectoryDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartADAssessment",
}));

export type StartSchemaExtensionError =
  | ClientException
  | DirectoryUnavailableException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | SnapshotLimitExceededException
  | CommonErrors;
/**
 * Applies a schema extension to a Microsoft AD directory.
 */
export const startSchemaExtension: API.OperationMethod<
  StartSchemaExtensionRequest,
  StartSchemaExtensionResult,
  StartSchemaExtensionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartSchemaExtensionRequest,
  output: StartSchemaExtensionResult,
  errors: [
    ClientException,
    DirectoryUnavailableException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    SnapshotLimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartSchemaExtension",
}));

export type UnshareDirectoryError =
  | ClientException
  | DirectoryNotSharedException
  | EntityDoesNotExistException
  | InvalidTargetException
  | ServiceException
  | CommonErrors;
/**
 * Stops the directory sharing between the directory owner and consumer accounts.
 */
export const unshareDirectory: API.OperationMethod<
  UnshareDirectoryRequest,
  UnshareDirectoryResult,
  UnshareDirectoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UnshareDirectoryRequest,
  output: UnshareDirectoryResult,
  errors: [
    ClientException,
    DirectoryNotSharedException,
    EntityDoesNotExistException,
    InvalidTargetException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UnshareDirectory",
}));

export type UpdateConditionalForwarderError =
  | ClientException
  | DirectoryUnavailableException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Updates a conditional forwarder that has been set up for your Amazon Web Services
 * directory.
 */
export const updateConditionalForwarder: API.OperationMethod<
  UpdateConditionalForwarderRequest,
  UpdateConditionalForwarderResult,
  UpdateConditionalForwarderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConditionalForwarderRequest,
  output: UpdateConditionalForwarderResult,
  errors: [
    ClientException,
    DirectoryUnavailableException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConditionalForwarder",
}));

export type UpdateDirectorySetupError =
  | AccessDeniedException
  | ClientException
  | DirectoryDoesNotExistException
  | DirectoryInDesiredStateException
  | DirectoryUnavailableException
  | InvalidParameterException
  | ServiceException
  | SnapshotLimitExceededException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Updates directory configuration for the specified update type.
 */
export const updateDirectorySetup: API.OperationMethod<
  UpdateDirectorySetupRequest,
  UpdateDirectorySetupResult,
  UpdateDirectorySetupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDirectorySetupRequest,
  output: UpdateDirectorySetupResult,
  errors: [
    AccessDeniedException,
    ClientException,
    DirectoryDoesNotExistException,
    DirectoryInDesiredStateException,
    DirectoryUnavailableException,
    InvalidParameterException,
    ServiceException,
    SnapshotLimitExceededException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDirectorySetup",
}));

export type UpdateHybridADError =
  | ADAssessmentLimitExceededException
  | ClientException
  | DirectoryDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Updates the configuration of an existing hybrid directory. You can recover hybrid
 * directory administrator account or modify self-managed instance settings.
 *
 * Updates are applied asynchronously. Use DescribeHybridADUpdate to
 * monitor the progress of configuration changes.
 *
 * The `InstanceIds` must have a one-to-one correspondence with
 * `CustomerDnsIps`, meaning that if the IP address for instance i-10243410
 * is 10.24.34.100 and the IP address for instance i-10243420 is 10.24.34.200, then the
 * input arrays must maintain the same order relationship, either [10.24.34.100,
 * 10.24.34.200] paired with [i-10243410, i-10243420] or [10.24.34.200, 10.24.34.100]
 * paired with [i-10243420, i-10243410].
 *
 * You must provide at least one update to UpdateHybridADRequest$HybridAdministratorAccountUpdate or UpdateHybridADRequest$SelfManagedInstancesSettings.
 */
export const updateHybridAD: API.OperationMethod<
  UpdateHybridADRequest,
  UpdateHybridADResult,
  UpdateHybridADError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateHybridADRequest,
  output: UpdateHybridADResult,
  errors: [
    ADAssessmentLimitExceededException,
    ClientException,
    DirectoryDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateHybridAD",
}));

export type UpdateNumberOfDomainControllersError =
  | ClientException
  | DirectoryUnavailableException
  | DomainControllerLimitExceededException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Adds or removes domain controllers to or from the directory. Based on the difference
 * between current value and new value (provided through this API call), domain controllers will
 * be added or removed. It may take up to 45 minutes for any new domain controllers to become
 * fully active once the requested number of domain controllers is updated. During this time, you
 * cannot make another update request.
 */
export const updateNumberOfDomainControllers: API.OperationMethod<
  UpdateNumberOfDomainControllersRequest,
  UpdateNumberOfDomainControllersResult,
  UpdateNumberOfDomainControllersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateNumberOfDomainControllersRequest,
  output: UpdateNumberOfDomainControllersResult,
  errors: [
    ClientException,
    DirectoryUnavailableException,
    DomainControllerLimitExceededException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateNumberOfDomainControllers",
}));

export type UpdateRadiusError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Updates the Remote Authentication Dial In User Service (RADIUS) server information for
 * an AD Connector or Microsoft AD directory.
 */
export const updateRadius: API.OperationMethod<
  UpdateRadiusRequest,
  UpdateRadiusResult,
  UpdateRadiusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRadiusRequest,
  output: UpdateRadiusResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRadius",
}));

export type UpdateSettingsError =
  | ClientException
  | DirectoryDoesNotExistException
  | DirectoryUnavailableException
  | IncompatibleSettingsException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | UnsupportedSettingsException
  | CommonErrors;
/**
 * Updates the configurable settings for the specified directory.
 */
export const updateSettings: API.OperationMethod<
  UpdateSettingsRequest,
  UpdateSettingsResult,
  UpdateSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSettingsRequest,
  output: UpdateSettingsResult,
  errors: [
    ClientException,
    DirectoryDoesNotExistException,
    DirectoryUnavailableException,
    IncompatibleSettingsException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
    UnsupportedSettingsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSettings",
}));

export type UpdateTrustError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | CommonErrors;
/**
 * Updates the trust that has been set up between your Managed Microsoft AD directory and an
 * self-managed Active Directory.
 */
export const updateTrust: API.OperationMethod<
  UpdateTrustRequest,
  UpdateTrustResult,
  UpdateTrustError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTrustRequest,
  output: UpdateTrustResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTrust",
}));

export type VerifyTrustError =
  | ClientException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ServiceException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Directory Service for Microsoft Active Directory allows you to configure and verify trust
 * relationships.
 *
 * This action verifies a trust relationship between your Managed Microsoft AD directory and an
 * external domain.
 */
export const verifyTrust: API.OperationMethod<
  VerifyTrustRequest,
  VerifyTrustResult,
  VerifyTrustError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: VerifyTrustRequest,
  output: VerifyTrustResult,
  errors: [
    ClientException,
    EntityDoesNotExistException,
    InvalidParameterException,
    ServiceException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "VerifyTrust",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SharedDirectoryId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AcceptSharedDirectoryRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          OwnerAccountId: S.optional(S.String),
          OwnerDirectoryId: S.optional(S.String),
          ShareMethod: S.optional(ShareMethod),
          SharedAccountId: S.optional(S.String),
          SharedDirectoryId: S.optional(S.String),
          ShareStatus: S.optional(ShareStatus),
          ShareNotes: S.optional(SensitiveString),
          CreatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SharedDirectory" });
    case 2:
      return S.suspend(() =>
        S.Struct({ SharedDirectory: S.optional(SharedDirectory) }).pipe(ns),
      ).annotate({
        identifier: "AcceptSharedDirectoryResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CidrIp: S.optional(S.String),
          CidrIpv6: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "IpRoute" });
    case 4:
      return S.Array(IpRoute);
    case 5:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          IpRoutes: IpRoutes,
          UpdateSecurityGroupForDirectoryControllers: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "AddIpRoutesRequest" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AddIpRoutesResult",
      });
    case 7:
      return S.Array(S.String);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ VpcId: S.String, SubnetIds: SubnetIds })).annotate({
        identifier: "DirectoryVpcSettings",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          RegionName: S.String,
          VPCSettings: DirectoryVpcSettings,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "AddRegionRequest" });
    case 2:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 3:
      return S.Array(Tag);
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceId: S.String, Tags: Tags }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AddTagsToResourceRequest" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AddTagsToResourceResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, SchemaExtensionId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CancelSchemaExtensionRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CancelSchemaExtensionResult",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VpcId: S.String,
          SubnetIds: SubnetIds,
          CustomerDnsIps: S.optional(DnsIpAddrs),
          CustomerDnsIpsV6: S.optional(DnsIpv6Addrs),
          CustomerUserName: S.String,
        }),
      ).annotate({ identifier: "DirectoryConnectSettings" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          ShortName: S.optional(S.String),
          Password: SensitiveString,
          Description: S.optional(S.String),
          Size: DirectorySize,
          ConnectSettings: DirectoryConnectSettings,
          Tags: S.optional(Tags),
          NetworkType: S.optional(NetworkType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ConnectDirectoryRequest" });
    case 2:
      return S.suspend(() => S.Struct({ DirectoryId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "ConnectDirectoryResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, Alias: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateAliasRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.optional(S.String), Alias: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "CreateAliasResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "Attribute" });
    case 6:
      return S.Array(Attribute);
    case 7:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          ComputerName: S.String,
          Password: SensitiveString,
          OrganizationalUnitDistinguishedName: S.optional(S.String),
          ComputerAttributes: S.optional(Attributes),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateComputerRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ComputerId: S.optional(S.String),
          ComputerName: S.optional(S.String),
          ComputerAttributes: S.optional(Attributes),
        }),
      ).annotate({ identifier: "Computer" });
    case 1:
      return S.suspend(() => S.Struct({ Computer: S.optional(Computer) }).pipe(ns)).annotate({
        identifier: "CreateComputerResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          RemoteDomainName: S.String,
          DnsIpAddrs: S.optional(DnsIpAddrs),
          DnsIpv6Addrs: S.optional(DnsIpv6Addrs),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateConditionalForwarderRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          ShortName: S.optional(S.String),
          Password: SensitiveString,
          Description: S.optional(S.String),
          Size: DirectorySize,
          VpcSettings: S.optional(DirectoryVpcSettings),
          Tags: S.optional(Tags),
          NetworkType: S.optional(NetworkType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDirectoryRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ SecretArn: S.String, AssessmentId: S.String, Tags: S.optional(Tags) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateHybridADRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, LogGroupName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateLogSubscriptionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          ShortName: S.optional(S.String),
          Password: SensitiveString,
          Description: S.optional(S.String),
          VpcSettings: DirectoryVpcSettings,
          Edition: S.optional(DirectoryEdition),
          Tags: S.optional(Tags),
          NetworkType: S.optional(NetworkType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateMicrosoftADRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, Name: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateSnapshotRequest" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ SnapshotId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateSnapshotResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          RemoteDomainName: S.String,
          TrustPassword: SensitiveString,
          TrustDirection: TrustDirection,
          TrustType: S.optional(TrustType),
          ConditionalForwarderIpAddrs: S.optional(DnsIpAddrs),
          ConditionalForwarderIpv6Addrs: S.optional(DnsIpv6Addrs),
          SelectiveAuth: S.optional(SelectiveAuth),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTrustRequest" });
    case 2:
      return S.suspend(() => S.Struct({ TrustId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateTrustResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AssessmentId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteADAssessmentRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ AssessmentId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "DeleteADAssessmentResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, RemoteDomainName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteConditionalForwarderRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteDirectoryRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteLogSubscriptionRequest",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SnapshotId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteSnapshotRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TrustId: S.String,
          DeleteAssociatedConditionalForwarder: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteTrustRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, CertificateId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeregisterCertificateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, TopicName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeregisterEventTopicRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ AssessmentId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeADAssessmentRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AssessmentId: S.optional(S.String),
          DirectoryId: S.optional(S.String),
          DnsName: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdateDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(S.String),
          StatusCode: S.optional(S.String),
          StatusReason: S.optional(S.String),
          CustomerDnsIps: S.optional(CustomerDnsIps),
          VpcId: S.optional(S.String),
          SubnetIds: S.optional(SubnetIds),
          SecurityGroupIds: S.optional(SecurityGroupIds),
          SelfManagedInstanceIds: S.optional(AssessmentInstanceIds),
          ReportType: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({ identifier: "Assessment" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Category: S.optional(S.String),
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          StatusCode: S.optional(S.String),
          StatusReason: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdateDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AssessmentValidation" });
    case 7:
      return S.Array(AssessmentValidation);
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainControllerIp: S.optional(S.String),
          Validations: S.optional(AssessmentValidations),
        }),
      ).annotate({ identifier: "AssessmentReport" });
    case 1:
      return S.Array(AssessmentReport);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Assessment: S.optional(Assessment),
          AssessmentReports: S.optional(AssessmentReports),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeADAssessmentResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeCAEnrollmentPolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          PcaConnectorArn: S.optional(S.String),
          CaEnrollmentPolicyStatus: S.optional(CaEnrollmentPolicyStatus),
          LastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CaEnrollmentPolicyStatusReason: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeCAEnrollmentPolicyResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, CertificateId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeCertificateRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ OCSPUrl: S.optional(S.String) })).annotate({
        identifier: "ClientCertAuthSettings",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CertificateId: S.optional(S.String),
          State: S.optional(CertificateState),
          StateReason: S.optional(S.String),
          CommonName: S.optional(S.String),
          RegisteredDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ExpiryDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Type: S.optional(CertificateType),
          ClientCertAuthSettings: S.optional(ClientCertAuthSettings),
        }),
      ).annotate({ identifier: "Certificate" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Certificate: S.optional(Certificate) }).pipe(ns)).annotate({
        identifier: "DescribeCertificateResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          Type: S.optional(ClientAuthenticationType),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeClientAuthenticationSettingsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(ClientAuthenticationType),
          Status: S.optional(ClientAuthenticationStatus),
          LastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "ClientAuthenticationSettingInfo",
      });
    case 3:
      return S.Array(ClientAuthenticationSettingInfo);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClientAuthenticationSettingsInfo: S.optional(ClientAuthenticationSettingsInfo),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeClientAuthenticationSettingsResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, RemoteDomainNames: S.optional(RemoteDomainNames) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeConditionalForwardersRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RemoteDomainName: S.optional(S.String),
          DnsIpAddrs: S.optional(DnsIpAddrs),
          DnsIpv6Addrs: S.optional(DnsIpv6Addrs),
          ReplicationScope: S.optional(ReplicationScope),
        }),
      ).annotate({ identifier: "ConditionalForwarder" });
    case 7:
      return S.Array(ConditionalForwarder);
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ConditionalForwarders: S.optional(ConditionalForwarders) }).pipe(ns),
      ).annotate({
        identifier: "DescribeConditionalForwardersResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DirectoryIds: S.optional(DirectoryIds),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDirectoriesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          VpcId: S.optional(S.String),
          SubnetIds: S.optional(SubnetIds),
          SecurityGroupId: S.optional(S.String),
          AvailabilityZones: S.optional(AvailabilityZones),
        }),
      ).annotate({
        identifier: "DirectoryVpcSettingsDescription",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          VpcId: S.optional(S.String),
          SubnetIds: S.optional(SubnetIds),
          CustomerUserName: S.optional(S.String),
          SecurityGroupId: S.optional(S.String),
          AvailabilityZones: S.optional(AvailabilityZones),
          ConnectIps: S.optional(IpAddrs),
          ConnectIpsV6: S.optional(IpV6Addrs),
        }),
      ).annotate({
        identifier: "DirectoryConnectSettingsDescription",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RadiusServers: S.optional(Servers),
          RadiusServersIpv6: S.optional(Servers),
          RadiusPort: S.optional(S.Number),
          RadiusTimeout: S.optional(S.Number),
          RadiusRetries: S.optional(S.Number),
          SharedSecret: S.optional(SensitiveString),
          AuthenticationProtocol: S.optional(RadiusAuthenticationProtocol),
          DisplayLabel: S.optional(S.String),
          UseSameUsername: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "RadiusSettings" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          AccountId: S.optional(S.String),
          DnsIpAddrs: S.optional(DnsIpAddrs),
          DnsIpv6Addrs: S.optional(DnsIpv6Addrs),
          VpcSettings: S.optional(DirectoryVpcSettingsDescription),
          RadiusSettings: S.optional(RadiusSettings),
          RadiusStatus: S.optional(RadiusStatus),
          NetworkType: S.optional(NetworkType),
        }),
      ).annotate({
        identifier: "OwnerDirectoryDescription",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PrimaryRegion: S.optional(S.String),
          AdditionalRegions: S.optional(AdditionalRegions),
        }),
      ).annotate({ identifier: "RegionsInfo" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SelfManagedDnsIpAddrs: S.optional(IpAddrs),
          SelfManagedInstanceIds: S.optional(AssessmentInstanceIds),
        }),
      ).annotate({
        identifier: "HybridSettingsDescription",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          Name: S.optional(S.String),
          ShortName: S.optional(S.String),
          Size: S.optional(DirectorySize),
          Edition: S.optional(DirectoryEdition),
          Alias: S.optional(S.String),
          AccessUrl: S.optional(S.String),
          Description: S.optional(S.String),
          DnsIpAddrs: S.optional(DnsIpAddrs),
          DnsIpv6Addrs: S.optional(DnsIpv6Addrs),
          Stage: S.optional(DirectoryStage),
          ShareStatus: S.optional(ShareStatus),
          ShareMethod: S.optional(ShareMethod),
          ShareNotes: S.optional(SensitiveString),
          LaunchTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StageLastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Type: S.optional(DirectoryType),
          VpcSettings: S.optional(DirectoryVpcSettingsDescription),
          ConnectSettings: S.optional(DirectoryConnectSettingsDescription),
          RadiusSettings: S.optional(RadiusSettings),
          RadiusStatus: S.optional(RadiusStatus),
          StageReason: S.optional(S.String),
          SsoEnabled: S.optional(S.Boolean),
          DesiredNumberOfDomainControllers: S.optional(S.Number),
          OwnerDirectoryDescription: S.optional(OwnerDirectoryDescription),
          RegionsInfo: S.optional(RegionsInfo),
          OsVersion: S.optional(OSVersion),
          HybridSettings: S.optional(HybridSettingsDescription),
          NetworkType: S.optional(NetworkType),
        }),
      ).annotate({ identifier: "DirectoryDescription" });
    case 1:
      return S.Array(DirectoryDescription);
    case 2:
      return S.suspend(() =>
        S.Struct({
          DirectoryDescriptions: S.optional(DirectoryDescriptions),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDirectoriesResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeDirectoryDataAccessRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DataAccessStatus: S.optional(DataAccessStatus) }).pipe(ns),
      ).annotate({
        identifier: "DescribeDirectoryDataAccessResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          DomainControllerIds: S.optional(DomainControllerIds),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDomainControllersRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          DomainControllerId: S.optional(S.String),
          DnsIpAddr: S.optional(S.String),
          DnsIpv6Addr: S.optional(S.String),
          VpcId: S.optional(S.String),
          SubnetId: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          Status: S.optional(DomainControllerStatus),
          StatusReason: S.optional(S.String),
          LaunchTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StatusLastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DomainController" });
    case 7:
      return S.Array(DomainController);
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainControllers: S.optional(DomainControllers),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDomainControllersResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.optional(S.String), TopicNames: S.optional(TopicNames) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeEventTopicsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          TopicName: S.optional(S.String),
          TopicArn: S.optional(S.String),
          CreatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(TopicStatus),
        }),
      ).annotate({ identifier: "EventTopic" });
    case 3:
      return S.Array(EventTopic);
    case 4:
      return S.suspend(() => S.Struct({ EventTopics: S.optional(EventTopics) }).pipe(ns)).annotate({
        identifier: "DescribeEventTopicsResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          UpdateType: S.optional(HybridUpdateType),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeHybridADUpdateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          InstanceIds: S.optional(AssessmentInstanceIds),
          DnsIps: S.optional(CustomerDnsIps),
        }),
      ).annotate({ identifier: "HybridUpdateValue" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(UpdateStatus),
          StatusReason: S.optional(S.String),
          InitiatedBy: S.optional(S.String),
          NewValue: S.optional(HybridUpdateValue),
          PreviousValue: S.optional(HybridUpdateValue),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AssessmentId: S.optional(S.String),
        }),
      ).annotate({ identifier: "HybridUpdateInfoEntry" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(HybridUpdateInfoEntry);
    case 1:
      return S.suspend(() =>
        S.Struct({
          SelfManagedInstances: S.optional(HybridUpdateInfoEntries),
          HybridAdministratorAccount: S.optional(HybridUpdateInfoEntries),
        }),
      ).annotate({ identifier: "HybridUpdateActivities" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          UpdateActivities: S.optional(HybridUpdateActivities),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeHybridADUpdateResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          Type: S.optional(LDAPSType),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeLDAPSSettingsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LDAPSStatus: S.optional(LDAPSStatus),
          LDAPSStatusReason: S.optional(S.String),
          LastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "LDAPSSettingInfo" });
    case 5:
      return S.Array(LDAPSSettingInfo);
    case 6:
      return S.suspend(() =>
        S.Struct({
          LDAPSSettingsInfo: S.optional(LDAPSSettingsInfo),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeLDAPSSettingsResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          RegionName: S.optional(S.String),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeRegionsRequest" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          RegionName: S.optional(S.String),
          RegionType: S.optional(RegionType),
          Status: S.optional(DirectoryStage),
          VpcSettings: S.optional(DirectoryVpcSettings),
          DesiredNumberOfDomainControllers: S.optional(S.Number),
          LaunchTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StatusLastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "RegionDescription" });
    case 1:
      return S.Array(RegionDescription);
    case 2:
      return S.suspend(() =>
        S.Struct({
          RegionsDescription: S.optional(RegionsDescription),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeRegionsResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          Status: S.optional(DirectoryConfigurationStatus),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeSettingsRequest" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ DirectoryConfigurationStatus.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Name: S.optional(S.String),
          AllowedValues: S.optional(S.String),
          AppliedValue: S.optional(S.String),
          RequestedValue: S.optional(S.String),
          RequestStatus: S.optional(DirectoryConfigurationStatus),
          RequestDetailedStatus: S.optional(DirectoryConfigurationSettingRequestDetailedStatus),
          RequestStatusMessage: S.optional(S.String),
          LastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastRequestedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DataType: S.optional(S.String),
        }),
      ).annotate({ identifier: "SettingEntry" });
    case 6:
      return S.Array(SettingEntry);
    case 7:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          SettingEntries: S.optional(SettingEntries),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeSettingsResult" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          OwnerDirectoryId: S.String,
          SharedDirectoryIds: S.optional(DirectoryIds),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeSharedDirectoriesRequest",
      });
    case 1:
      return S.Array(SharedDirectory);
    case 2:
      return S.suspend(() =>
        S.Struct({
          SharedDirectories: S.optional(SharedDirectories),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeSharedDirectoriesResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          SnapshotIds: S.optional(SnapshotIds),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeSnapshotsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          SnapshotId: S.optional(S.String),
          Type: S.optional(SnapshotType),
          Name: S.optional(S.String),
          Status: S.optional(SnapshotStatus),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Snapshot" });
    case 5:
      return S.Array(Snapshot);
    case 6:
      return S.suspend(() =>
        S.Struct({ Snapshots: S.optional(Snapshots), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "DescribeSnapshotsResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          TrustIds: S.optional(TrustIds),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeTrustsRequest" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          TrustId: S.optional(S.String),
          RemoteDomainName: S.optional(S.String),
          TrustType: S.optional(TrustType),
          TrustDirection: S.optional(TrustDirection),
          TrustState: S.optional(TrustState),
          CreatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StateLastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TrustStateReason: S.optional(S.String),
          SelectiveAuth: S.optional(SelectiveAuth),
        }),
      ).annotate({ identifier: "Trust" });
    case 1:
      return S.Array(Trust);
    case 2:
      return S.suspend(() =>
        S.Struct({ Trusts: S.optional(Trusts), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "DescribeTrustsResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          UpdateType: UpdateType,
          RegionName: S.optional(S.String),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeUpdateDirectoryRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ OSVersion: S.optional(OSVersion) })).annotate({
        identifier: "OSUpdateSettings",
      });
    case 5:
      return S.suspend(() => S.Struct({ OSUpdateSettings: S.optional(OSUpdateSettings) })).annotate(
        { identifier: "UpdateValue" },
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          Region: S.optional(S.String),
          Status: S.optional(UpdateStatus),
          StatusReason: S.optional(S.String),
          InitiatedBy: S.optional(S.String),
          NewValue: S.optional(UpdateValue),
          PreviousValue: S.optional(UpdateValue),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "UpdateInfoEntry" });
    case 7:
      return S.Array(UpdateInfoEntry);
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UpdateActivities: S.optional(UpdateActivities),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeUpdateDirectoryResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisableCAEnrollmentPolicyRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, Type: ClientAuthenticationType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisableClientAuthenticationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisableDirectoryDataAccessRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, Type: LDAPSType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DisableLDAPSRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DisableRadiusRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          UserName: S.optional(S.String),
          Password: S.optional(SensitiveString),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DisableSsoRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, PcaConnectorArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "EnableCAEnrollmentPolicyRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, Type: ClientAuthenticationType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "EnableClientAuthenticationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "EnableDirectoryDataAccessRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, Type: LDAPSType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "EnableLDAPSRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, RadiusSettings: RadiusSettings }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "EnableRadiusRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          UserName: S.optional(S.String),
          Password: S.optional(SensitiveString),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "EnableSsoRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetDirectoryLimitsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CloudOnlyDirectoriesLimit: S.optional(S.Number),
          CloudOnlyDirectoriesCurrentCount: S.optional(S.Number),
          CloudOnlyDirectoriesLimitReached: S.optional(S.Boolean),
          CloudOnlyMicrosoftADLimit: S.optional(S.Number),
          CloudOnlyMicrosoftADCurrentCount: S.optional(S.Number),
          CloudOnlyMicrosoftADLimitReached: S.optional(S.Boolean),
          ConnectedDirectoriesLimit: S.optional(S.Number),
          ConnectedDirectoriesCurrentCount: S.optional(S.Number),
          ConnectedDirectoriesLimitReached: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DirectoryLimits" });
    case 7:
      return S.suspend(() =>
        S.Struct({ DirectoryLimits: S.optional(DirectoryLimits) }).pipe(ns),
      ).annotate({ identifier: "GetDirectoryLimitsResult" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSnapshotLimitsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ManualSnapshotsLimit: S.optional(S.Number),
          ManualSnapshotsCurrentCount: S.optional(S.Number),
          ManualSnapshotsLimitReached: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "SnapshotLimits" });
    case 2:
      return S.suspend(() =>
        S.Struct({ SnapshotLimits: S.optional(SnapshotLimits) }).pipe(ns),
      ).annotate({ identifier: "GetSnapshotLimitsResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListADAssessmentsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AssessmentId: S.optional(S.String),
          DirectoryId: S.optional(S.String),
          DnsName: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdateDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(S.String),
          CustomerDnsIps: S.optional(CustomerDnsIps),
          ReportType: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssessmentSummary" });
    case 5:
      return S.Array(AssessmentSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ Assessments: S.optional(Assessments), NextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "ListADAssessmentsResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListCertificatesRequest" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CertificateId: S.optional(S.String),
          CommonName: S.optional(S.String),
          State: S.optional(CertificateState),
          ExpiryDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Type: S.optional(CertificateType),
        }),
      ).annotate({ identifier: "CertificateInfo" });
    case 1:
      return S.Array(CertificateInfo);
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          CertificatesInfo: S.optional(CertificatesInfo),
        }).pipe(ns),
      ).annotate({ identifier: "ListCertificatesResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListIpRoutesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          CidrIp: S.optional(S.String),
          CidrIpv6: S.optional(S.String),
          IpRouteStatusMsg: S.optional(IpRouteStatusMsg),
          AddedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          IpRouteStatusReason: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "IpRouteInfo" });
    case 5:
      return S.Array(IpRouteInfo);
    case 6:
      return S.suspend(() =>
        S.Struct({ IpRoutesInfo: S.optional(IpRoutesInfo), NextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "ListIpRoutesResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListLogSubscriptionsRequest",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          LogGroupName: S.optional(S.String),
          SubscriptionCreatedDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "LogSubscription" });
    case 1:
      return S.Array(LogSubscription);
    case 2:
      return S.suspend(() =>
        S.Struct({
          LogSubscriptions: S.optional(LogSubscriptions),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListLogSubscriptionsResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListSchemaExtensionsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          SchemaExtensionId: S.optional(S.String),
          Description: S.optional(S.String),
          SchemaExtensionStatus: S.optional(SchemaExtensionStatus),
          SchemaExtensionStatusReason: S.optional(S.String),
          StartDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SchemaExtensionInfo" });
    case 5:
      return S.Array(SchemaExtensionInfo);
    case 6:
      return S.suspend(() =>
        S.Struct({
          SchemaExtensionsInfo: S.optional(SchemaExtensionsInfo),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListSchemaExtensionsResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceId: S.String,
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Tags: S.optional(Tags), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "ListTagsForResourceResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          CertificateData: S.String,
          Type: S.optional(CertificateType),
          ClientCertAuthSettings: S.optional(ClientCertAuthSettings),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RegisterCertificateRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ CertificateId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "RegisterCertificateResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, TopicName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RegisterEventTopicRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ SharedDirectoryId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RejectSharedDirectoryRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ SharedDirectoryId: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "RejectSharedDirectoryResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          CidrIps: S.optional(CidrIps),
          CidrIpv6s: S.optional(CidrIpv6s),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RemoveIpRoutesRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RemoveRegionRequest" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceId: S.String, TagKeys: TagKeys }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RemoveTagsFromResourceRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, UserName: S.String, NewPassword: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ResetUserPasswordRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ SnapshotId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RestoreFromSnapshotRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ Id: S.String, Type: TargetType })).annotate({
        identifier: "ShareTarget",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          ShareNotes: S.optional(SensitiveString),
          ShareTarget: ShareTarget,
          ShareMethod: ShareMethod,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ShareDirectoryRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ SharedDirectoryId: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ShareDirectoryResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CustomerDnsIps: CustomerDnsIps,
          DnsName: S.String,
          VpcSettings: DirectoryVpcSettings,
          InstanceIds: AssessmentInstanceIds,
          SecurityGroupIds: S.optional(SecurityGroupIds),
        }),
      ).annotate({ identifier: "AssessmentConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AssessmentConfiguration: S.optional(AssessmentConfiguration),
          DirectoryId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartADAssessmentRequest" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          CreateSnapshotBeforeSchemaExtension: S.Boolean,
          LdifContent: S.String,
          Description: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartSchemaExtensionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ SchemaExtensionId: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "StartSchemaExtensionResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, UnshareTarget: UnshareTarget }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UnshareDirectoryRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          RemoteDomainName: S.String,
          DnsIpAddrs: S.optional(DnsIpAddrs),
          DnsIpv6Addrs: S.optional(DnsIpv6Addrs),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateConditionalForwarderRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ DirectorySize: S.optional(DirectorySize) })).annotate({
        identifier: "DirectorySizeUpdateSettings",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NetworkType: S.optional(NetworkType),
          CustomerDnsIpsV6: S.optional(DnsIpv6Addrs),
        }),
      ).annotate({ identifier: "NetworkUpdateSettings" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          UpdateType: UpdateType,
          OSUpdateSettings: S.optional(OSUpdateSettings),
          DirectorySizeUpdateSettings: S.optional(DirectorySizeUpdateSettings),
          NetworkUpdateSettings: S.optional(NetworkUpdateSettings),
          CreateSnapshotBeforeUpdate: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateDirectorySetupRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ SecretArn: S.String })).annotate({
        identifier: "HybridAdministratorAccountUpdate",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ CustomerDnsIps: CustomerDnsIps, InstanceIds: AssessmentInstanceIds }),
      ).annotate({
        identifier: "HybridCustomerInstancesSettings",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          HybridAdministratorAccountUpdate: S.optional(HybridAdministratorAccountUpdate),
          SelfManagedInstancesSettings: S.optional(HybridCustomerInstancesSettings),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateHybridADRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.optional(S.String), AssessmentId: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "UpdateHybridADResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, DesiredNumber: S.Number }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateNumberOfDomainControllersRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, RadiusSettings: RadiusSettings }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateRadiusRequest" });
    case 5:
      return S.suspend(() => S.Struct({ Name: S.String, Value: S.String })).annotate({
        identifier: "Setting",
      });
    case 6:
      return S.Array(Setting);
    case 7:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, Settings: Settings }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateSettingsRequest" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TrustId: S.String, SelectiveAuth: S.optional(SelectiveAuth) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateTrustRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ RequestId: S.optional(S.String), TrustId: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "UpdateTrustResult" });
    case 2:
      return S.suspend(() =>
        S.Struct({ TrustId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "VerifyTrustRequest" });
  }
}
