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
import { SensitiveString, SensitiveBlob } from "../sensitive.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Transfer",
  serviceShapeName: "TransferService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "transfer" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-11-05");
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
              `https://transfer-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://transfer-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://transfer.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://transfer.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AccessDenied", httpResponseCode: 403 }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServiceError
  extends /*@__PURE__*/ S.TaggedError<InternalServiceError>()(
    "InternalServiceError",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class InvalidNextTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidNextTokenException>()(
    "InvalidNextTokenException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()(
    "InvalidRequestException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceExistsException
  extends /*@__PURE__*/ S.TaggedError<ResourceExistsException>()(
    "ResourceExistsException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      Resource: S.String,
      ResourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      Resource: S.String,
      ResourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ServiceUnavailable", httpResponseCode: 503 }),
      /*@__PURE__*/ T.HttpError(503),
    ),
  ).pipe(C.withServerError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      RetryAfterSeconds: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export type HomeDirectory = string;
export type HomeDirectoryType = "PATH" | "LOGICAL" | (string & {});
const HomeDirectoryType = S.String;

export type MapEntry = string;
export type MapTarget = string;
export type MapType = "FILE" | "DIRECTORY" | (string & {});
const MapType = S.String;

export interface HomeDirectoryMapEntry {
  Entry: string;
  Target: string;
  Type?: MapType;
}
const HomeDirectoryMapEntry = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<HomeDirectoryMapEntry>;
export type HomeDirectoryMappings = HomeDirectoryMapEntry[];
const HomeDirectoryMappings = /*@__PURE__*/ __L.at(__c0, 1);
export type Policy = string;
export type PosixId = number;
export type SecondaryGids = number[];
const SecondaryGids = /*@__PURE__*/ __L.at(__c0, 2);
export interface PosixProfile {
  Uid: number;
  Gid: number;
  SecondaryGids?: number[];
}
const PosixProfile = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<PosixProfile>;
export type Role = string;
export type ServerId = string;
export type ExternalId = string;
export interface CreateAccessRequest {
  HomeDirectory?: string;
  HomeDirectoryType?: HomeDirectoryType;
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];
  Policy?: string;
  PosixProfile?: PosixProfile;
  Role: string;
  ServerId: string;
  ExternalId: string;
}
const CreateAccessRequest = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<CreateAccessRequest>;
export interface CreateAccessResponse {
  ServerId: string;
  ExternalId: string;
}
const CreateAccessResponse = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<CreateAccessResponse>;
export type Description = string;
export type ProfileId = string;
export type AgreementStatusType = "ACTIVE" | "INACTIVE" | (string & {});
const AgreementStatusType = S.String;

export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<Tag>;
export type Tags = Tag[];
const Tags = /*@__PURE__*/ __L.at(__c0, 7);
export type PreserveFilenameType = "ENABLED" | "DISABLED" | (string & {});
const PreserveFilenameType = S.String;

export type EnforceMessageSigningType = "ENABLED" | "DISABLED" | (string & {});
const EnforceMessageSigningType = S.String;

export interface CustomDirectoriesType {
  FailedFilesDirectory: string;
  MdnFilesDirectory: string;
  PayloadFilesDirectory: string;
  StatusFilesDirectory: string;
  TemporaryFilesDirectory: string;
}
const CustomDirectoriesType = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<CustomDirectoriesType>;
export interface CreateAgreementRequest {
  Description?: string;
  ServerId: string;
  LocalProfileId: string;
  PartnerProfileId: string;
  BaseDirectory?: string;
  AccessRole: string;
  Status?: AgreementStatusType;
  Tags?: Tag[];
  PreserveFilename?: PreserveFilenameType;
  EnforceMessageSigning?: EnforceMessageSigningType;
  CustomDirectories?: CustomDirectoriesType;
}
const CreateAgreementRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CreateAgreementRequest>;
export type AgreementId = string;
export interface CreateAgreementResponse {
  AgreementId: string;
}
const CreateAgreementResponse = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<CreateAgreementResponse>;
export type Url = string;
export type MessageSubject = string | redacted.Redacted<string>;
export type CompressionEnum = "ZLIB" | "DISABLED" | (string & {});
const CompressionEnum = S.String;

export type EncryptionAlg =
  | "AES128_CBC"
  | "AES192_CBC"
  | "AES256_CBC"
  | "DES_EDE3_CBC"
  | "NONE"
  | (string & {});
const EncryptionAlg = S.String;

export type SigningAlg = "SHA256" | "SHA384" | "SHA512" | "SHA1" | "NONE" | (string & {});
const SigningAlg = S.String;

export type MdnSigningAlg =
  | "SHA256"
  | "SHA384"
  | "SHA512"
  | "SHA1"
  | "NONE"
  | "DEFAULT"
  | (string & {});
const MdnSigningAlg = S.String;

export type MdnResponse = "SYNC" | "NONE" | "ASYNC" | (string & {});
const MdnResponse = S.String;

export type As2ConnectorSecretId = string;
export type PreserveContentType = "ENABLED" | "DISABLED" | (string & {});
const PreserveContentType = S.String;

export type As2AsyncMdnServerIds = string[];
const As2AsyncMdnServerIds = /*@__PURE__*/ __L.at(__c1, 3);
export interface As2AsyncMdnConnectorConfig {
  Url?: string;
  ServerIds?: string[];
}
const As2AsyncMdnConnectorConfig = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<As2AsyncMdnConnectorConfig>;
export interface As2ConnectorConfig {
  LocalProfileId?: string;
  PartnerProfileId?: string;
  MessageSubject?: string | redacted.Redacted<string>;
  Compression?: CompressionEnum;
  EncryptionAlgorithm?: EncryptionAlg;
  SigningAlgorithm?: SigningAlg;
  MdnSigningAlgorithm?: MdnSigningAlg;
  MdnResponse?: MdnResponse;
  BasicAuthSecretId?: string;
  PreserveContentType?: PreserveContentType;
  AsyncMdnConfig?: As2AsyncMdnConnectorConfig;
}
const As2ConnectorConfig = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<As2ConnectorConfig>;
export type SecretId = string;
export type SftpConnectorTrustedHostKey = string;
export type SftpConnectorTrustedHostKeyList = string[];
const SftpConnectorTrustedHostKeyList =
  As2AsyncMdnServerIds as any as S.Schema<SftpConnectorTrustedHostKeyList>;
export type MaxConcurrentConnections = number;
export type SecretVersionStage = string;
export type SecretVersionStageList = string[];
const SecretVersionStageList = As2AsyncMdnServerIds as any as S.Schema<SecretVersionStageList>;
export interface SftpConnectorConfig {
  UserSecretId?: string;
  TrustedHostKeys?: string[];
  MaxConcurrentConnections?: number;
  OrderedUserSecretVersionStages?: string[];
}
const SftpConnectorConfig = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<SftpConnectorConfig>;
export type ConnectorSecurityPolicyName = string;
export type VpcLatticeResourceConfigurationArn = string;
export type SftpPort = number;
export interface ConnectorVpcLatticeEgressConfig {
  ResourceConfigurationArn: string;
  PortNumber?: number;
}
const ConnectorVpcLatticeEgressConfig = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<ConnectorVpcLatticeEgressConfig>;
export type ConnectorEgressConfig = { VpcLattice: ConnectorVpcLatticeEgressConfig };
const ConnectorEgressConfig = /*@__PURE__*/ __L.at(__c2, 0);
export type ConnectorsIpAddressType = "IPV4" | "DUALSTACK" | (string & {});
const ConnectorsIpAddressType = S.String;

export interface CreateConnectorRequest {
  Url?: string;
  As2Config?: As2ConnectorConfig;
  AccessRole: string;
  LoggingRole?: string;
  Tags?: Tag[];
  SftpConfig?: SftpConnectorConfig;
  SecurityPolicyName?: string;
  EgressConfig?: ConnectorEgressConfig;
  IpAddressType?: ConnectorsIpAddressType;
}
const CreateConnectorRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<CreateConnectorRequest>;
export type ConnectorId = string;
export interface CreateConnectorResponse {
  ConnectorId: string;
}
const CreateConnectorResponse = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CreateConnectorResponse>;
export type As2Id = string;
export type ProfileType = "LOCAL" | "PARTNER" | (string & {});
const ProfileType = S.String;

export type CertificateId = string;
export type CertificateIds = string[];
const CertificateIds = As2AsyncMdnServerIds as any as S.Schema<CertificateIds>;
export interface CreateProfileRequest {
  As2Id: string;
  ProfileType: ProfileType;
  CertificateIds?: string[];
  Tags?: Tag[];
}
const CreateProfileRequest = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<CreateProfileRequest>;
export interface CreateProfileResponse {
  ProfileId: string;
}
const CreateProfileResponse = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<CreateProfileResponse>;
export type Certificate = string;
export type Domain = "S3" | "EFS" | (string & {});
const Domain = S.String;

export type AddressAllocationId = string;
export type AddressAllocationIds = string[];
const AddressAllocationIds = As2AsyncMdnServerIds as any as S.Schema<AddressAllocationIds>;
export type SubnetId = string;
export type SubnetIds = string[];
const SubnetIds = As2AsyncMdnServerIds as any as S.Schema<SubnetIds>;
export type VpcEndpointId = string;
export type VpcId = string;
export type SecurityGroupId = string;
export type SecurityGroupIds = string[];
const SecurityGroupIds = As2AsyncMdnServerIds as any as S.Schema<SecurityGroupIds>;
export interface EndpointDetails {
  AddressAllocationIds?: string[];
  SubnetIds?: string[];
  VpcEndpointId?: string;
  VpcId?: string;
  SecurityGroupIds?: string[];
}
const EndpointDetails = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<EndpointDetails>;
export type EndpointType = "PUBLIC" | "VPC" | "VPC_ENDPOINT" | (string & {});
const EndpointType = S.String;

export type HostKey = string | redacted.Redacted<string>;
export type DirectoryId = string;
export type SftpAuthenticationMethods =
  | "PASSWORD"
  | "PUBLIC_KEY"
  | "PUBLIC_KEY_OR_PASSWORD"
  | "PUBLIC_KEY_AND_PASSWORD"
  | (string & {});
const SftpAuthenticationMethods = S.String;

export interface IdentityProviderDetails {
  Url?: string;
  InvocationRole?: string;
  DirectoryId?: string;
  Function?: string;
  SftpAuthenticationMethods?: SftpAuthenticationMethods;
}
const IdentityProviderDetails = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<IdentityProviderDetails>;
export type IdentityProviderType =
  | "SERVICE_MANAGED"
  | "API_GATEWAY"
  | "AWS_DIRECTORY_SERVICE"
  | "AWS_LAMBDA"
  | (string & {});
const IdentityProviderType = S.String;

export type NullableRole = string;
export type PostAuthenticationLoginBanner = string;
export type PreAuthenticationLoginBanner = string;
export type Protocol = "SFTP" | "FTP" | "FTPS" | "AS2" | (string & {});
const Protocol = S.String;

export type Protocols = Protocol[];
const Protocols = /*@__PURE__*/ __L.at(__c2, 7);
export type PassiveIp = string;
export type TlsSessionResumptionMode = "DISABLED" | "ENABLED" | "ENFORCED" | (string & {});
const TlsSessionResumptionMode = S.String;

export type SetStatOption = "DEFAULT" | "ENABLE_NO_OP" | (string & {});
const SetStatOption = S.String;

export type CommunicationMode = "CLIENT_TALK_FIRST" | "SERVER_TALK_FIRST" | (string & {});
const CommunicationMode = S.String;

export interface SftpPortWithOptions {
  SftpPort: number;
  CommunicationMode?: CommunicationMode;
}
const SftpPortWithOptions = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<SftpPortWithOptions>;
export type SftpPorts = SftpPortWithOptions[];
const SftpPorts = /*@__PURE__*/ __L.at(__c3, 1);
export type As2Transport = "HTTP" | (string & {});
export type As2Transports = As2Transport[];
const As2Transports = Protocols as any as S.Schema<As2Transports>;
export type ProxyMode = "NONE" | "PROXY_PROTOCOL_V2_ENFORCED" | (string & {});
const ProxyMode = S.String;

export interface ProxyConfig {
  SftpMode?: ProxyMode;
}
const ProxyConfig = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<ProxyConfig>;
export interface ProtocolDetails {
  PassiveIp?: string;
  TlsSessionResumptionMode?: TlsSessionResumptionMode;
  SetStatOption?: SetStatOption;
  SftpPorts?: SftpPortWithOptions[];
  As2Transports?: As2Transport[];
  ProxyConfig?: ProxyConfig;
}
const ProtocolDetails = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<ProtocolDetails>;
export type SecurityPolicyName = string;
export type WorkflowId = string;
export interface WorkflowDetail {
  WorkflowId: string;
  ExecutionRole: string;
}
const WorkflowDetail = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<WorkflowDetail>;
export type OnUploadWorkflowDetails = WorkflowDetail[];
const OnUploadWorkflowDetails = /*@__PURE__*/ __L.at(__c3, 5);
export type OnPartialUploadWorkflowDetails = WorkflowDetail[];
const OnPartialUploadWorkflowDetails =
  OnUploadWorkflowDetails as any as S.Schema<OnPartialUploadWorkflowDetails>;
export interface WorkflowDetails {
  OnUpload?: WorkflowDetail[];
  OnPartialUpload?: WorkflowDetail[];
}
const WorkflowDetails = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<WorkflowDetails>;
export type Arn = string;
export type StructuredLogDestinations = string[];
const StructuredLogDestinations =
  As2AsyncMdnServerIds as any as S.Schema<StructuredLogDestinations>;
export type DirectoryListingOptimization = "ENABLED" | "DISABLED" | (string & {});
const DirectoryListingOptimization = S.String;

export interface S3StorageOptions {
  DirectoryListingOptimization?: DirectoryListingOptimization;
}
const S3StorageOptions = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<S3StorageOptions>;
export type IpAddressType = "IPV4" | "DUALSTACK" | (string & {});
const IpAddressType = S.String;

export interface CreateServerRequest {
  Certificate?: string;
  Domain?: Domain;
  EndpointDetails?: EndpointDetails;
  EndpointType?: EndpointType;
  HostKey?: string | redacted.Redacted<string>;
  IdentityProviderDetails?: IdentityProviderDetails;
  IdentityProviderType?: IdentityProviderType;
  LoggingRole?: string;
  PostAuthenticationLoginBanner?: string;
  PreAuthenticationLoginBanner?: string;
  Protocols?: Protocol[];
  ProtocolDetails?: ProtocolDetails;
  SecurityPolicyName?: string;
  Tags?: Tag[];
  WorkflowDetails?: WorkflowDetails;
  StructuredLogDestinations?: string[];
  S3StorageOptions?: S3StorageOptions;
  IpAddressType?: IpAddressType;
}
const CreateServerRequest = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<CreateServerRequest>;
export interface CreateServerResponse {
  ServerId: string;
}
const CreateServerResponse = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<CreateServerResponse>;
export type SshPublicKeyBody = string;
export type UserName = string;
export interface CreateUserRequest {
  HomeDirectory?: string;
  HomeDirectoryType?: HomeDirectoryType;
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];
  Policy?: string;
  PosixProfile?: PosixProfile;
  Role: string;
  ServerId: string;
  SshPublicKeyBody?: string;
  Tags?: Tag[];
  UserName: string;
}
const CreateUserRequest = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<CreateUserRequest>;
export interface CreateUserResponse {
  ServerId: string;
  UserName: string;
}
const CreateUserResponse = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<CreateUserResponse>;
export type IdentityCenterInstanceArn = string;
export interface IdentityCenterConfig {
  InstanceArn?: string;
  Role?: string;
}
const IdentityCenterConfig = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<IdentityCenterConfig>;
export type WebAppIdentityProviderDetails = { IdentityCenterConfig: IdentityCenterConfig };
const WebAppIdentityProviderDetails = /*@__PURE__*/ __L.at(__c4, 5);
export type WebAppAccessEndpoint = string;
export type WebAppUnitCount = number;
export type WebAppUnits = { Provisioned: number };
const WebAppUnits = /*@__PURE__*/ __L.at(__c4, 6);
export type WebAppEndpointPolicy = "FIPS" | "STANDARD" | (string & {});
const WebAppEndpointPolicy = S.String;

export type WebAppVpcEndpointIpAddressType = "IPV4" | "DUALSTACK" | (string & {});
const WebAppVpcEndpointIpAddressType = S.String;

export interface WebAppVpcConfig {
  SubnetIds?: string[];
  VpcId?: string;
  SecurityGroupIds?: string[];
  IpAddressType?: WebAppVpcEndpointIpAddressType;
}
const WebAppVpcConfig = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<WebAppVpcConfig>;
export type WebAppEndpointDetails = { Vpc: WebAppVpcConfig };
const WebAppEndpointDetails = /*@__PURE__*/ __L.at(__c5, 0);
export interface CreateWebAppRequest {
  IdentityProviderDetails: WebAppIdentityProviderDetails;
  AccessEndpoint?: string;
  WebAppUnits?: WebAppUnits;
  Tags?: Tag[];
  WebAppEndpointPolicy?: WebAppEndpointPolicy;
  EndpointDetails?: WebAppEndpointDetails;
}
const CreateWebAppRequest = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<CreateWebAppRequest>;
export type WebAppId = string;
export interface CreateWebAppResponse {
  WebAppId: string;
}
const CreateWebAppResponse = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<CreateWebAppResponse>;
export type WorkflowDescription = string;
export type WorkflowStepType = "COPY" | "CUSTOM" | "TAG" | "DELETE" | "DECRYPT" | (string & {});
const WorkflowStepType = S.String;

export type WorkflowStepName = string;
export type S3Bucket = string;
export type S3Key = string;
export interface S3InputFileLocation {
  Bucket?: string;
  Key?: string;
}
const S3InputFileLocation = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<S3InputFileLocation>;
export type EfsFileSystemId = string;
export type EfsPath = string;
export interface EfsFileLocation {
  FileSystemId?: string;
  Path?: string;
}
const EfsFileLocation = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<EfsFileLocation>;
export interface InputFileLocation {
  S3FileLocation?: S3InputFileLocation;
  EfsFileLocation?: EfsFileLocation;
}
const InputFileLocation = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<InputFileLocation>;
export type OverwriteExisting = "TRUE" | "FALSE" | (string & {});
const OverwriteExisting = S.String;

export type SourceFileLocation = string;
export interface CopyStepDetails {
  Name?: string;
  DestinationFileLocation?: InputFileLocation;
  OverwriteExisting?: OverwriteExisting;
  SourceFileLocation?: string;
}
const CopyStepDetails = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<CopyStepDetails>;
export type CustomStepTarget = string;
export type CustomStepTimeoutSeconds = number;
export interface CustomStepDetails {
  Name?: string;
  Target?: string;
  TimeoutSeconds?: number;
  SourceFileLocation?: string;
}
const CustomStepDetails = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<CustomStepDetails>;
export interface DeleteStepDetails {
  Name?: string;
  SourceFileLocation?: string;
}
const DeleteStepDetails = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<DeleteStepDetails>;
export type S3TagKey = string;
export type S3TagValue = string;
export interface S3Tag {
  Key: string;
  Value: string;
}
export type S3Tags = S3Tag[];
const S3Tags = Tags as any as S.Schema<S3Tags>;
export interface TagStepDetails {
  Name?: string;
  Tags?: S3Tag[];
  SourceFileLocation?: string;
}
const TagStepDetails = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<TagStepDetails>;
export type EncryptionType = "PGP" | (string & {});
const EncryptionType = S.String;

export interface DecryptStepDetails {
  Name?: string;
  Type: EncryptionType;
  SourceFileLocation?: string;
  OverwriteExisting?: OverwriteExisting;
  DestinationFileLocation: InputFileLocation;
}
const DecryptStepDetails = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<DecryptStepDetails>;
export interface WorkflowStep {
  Type?: WorkflowStepType;
  CopyStepDetails?: CopyStepDetails;
  CustomStepDetails?: CustomStepDetails;
  DeleteStepDetails?: DeleteStepDetails;
  TagStepDetails?: TagStepDetails;
  DecryptStepDetails?: DecryptStepDetails;
}
const WorkflowStep = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<WorkflowStep>;
export type WorkflowSteps = WorkflowStep[];
const WorkflowSteps = /*@__PURE__*/ __L.at(__c6, 4);
export interface CreateWorkflowRequest {
  Description?: string;
  Steps: WorkflowStep[];
  OnExceptionSteps?: WorkflowStep[];
  Tags?: Tag[];
  StructuredLogDestinations?: string[];
}
const CreateWorkflowRequest = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<CreateWorkflowRequest>;
export interface CreateWorkflowResponse {
  WorkflowId: string;
}
const CreateWorkflowResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<CreateWorkflowResponse>;
export interface DeleteAccessRequest {
  ServerId: string;
  ExternalId: string;
}
const DeleteAccessRequest = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<DeleteAccessRequest>;
export interface DeleteAccessResponse {}
const DeleteAccessResponse = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<DeleteAccessResponse>;
export interface DeleteAgreementRequest {
  AgreementId: string;
  ServerId: string;
}
const DeleteAgreementRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DeleteAgreementRequest>;
export interface DeleteAgreementResponse {}
const DeleteAgreementResponse = DeleteAccessResponse as any as S.Schema<DeleteAgreementResponse>;
export interface DeleteCertificateRequest {
  CertificateId: string;
}
const DeleteCertificateRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DeleteCertificateRequest>;
export interface DeleteCertificateResponse {}
const DeleteCertificateResponse =
  DeleteAccessResponse as any as S.Schema<DeleteCertificateResponse>;
export interface DeleteConnectorRequest {
  ConnectorId: string;
}
const DeleteConnectorRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<DeleteConnectorRequest>;
export interface DeleteConnectorResponse {}
const DeleteConnectorResponse = DeleteAccessResponse as any as S.Schema<DeleteConnectorResponse>;
export type HostKeyId = string;
export interface DeleteHostKeyRequest {
  ServerId: string;
  HostKeyId: string;
}
const DeleteHostKeyRequest = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<DeleteHostKeyRequest>;
export interface DeleteHostKeyResponse {}
const DeleteHostKeyResponse = DeleteAccessResponse as any as S.Schema<DeleteHostKeyResponse>;
export interface DeleteProfileRequest {
  ProfileId: string;
}
const DeleteProfileRequest = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<DeleteProfileRequest>;
export interface DeleteProfileResponse {}
const DeleteProfileResponse = DeleteAccessResponse as any as S.Schema<DeleteProfileResponse>;
export interface DeleteServerRequest {
  ServerId: string;
}
const DeleteServerRequest = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<DeleteServerRequest>;
export interface DeleteServerResponse {}
const DeleteServerResponse = DeleteAccessResponse as any as S.Schema<DeleteServerResponse>;
export type SshPublicKeyId = string;
export interface DeleteSshPublicKeyRequest {
  ServerId: string;
  SshPublicKeyId: string;
  UserName: string;
}
const DeleteSshPublicKeyRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DeleteSshPublicKeyRequest>;
export interface DeleteSshPublicKeyResponse {}
const DeleteSshPublicKeyResponse =
  DeleteAccessResponse as any as S.Schema<DeleteSshPublicKeyResponse>;
export interface DeleteUserRequest {
  ServerId: string;
  UserName: string;
}
const DeleteUserRequest = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<DeleteUserRequest>;
export interface DeleteUserResponse {}
const DeleteUserResponse = DeleteAccessResponse as any as S.Schema<DeleteUserResponse>;
export interface DeleteWebAppRequest {
  WebAppId: string;
}
const DeleteWebAppRequest = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<DeleteWebAppRequest>;
export interface DeleteWebAppResponse {}
const DeleteWebAppResponse = DeleteAccessResponse as any as S.Schema<DeleteWebAppResponse>;
export interface DeleteWebAppCustomizationRequest {
  WebAppId: string;
}
const DeleteWebAppCustomizationRequest = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<DeleteWebAppCustomizationRequest>;
export interface DeleteWebAppCustomizationResponse {}
const DeleteWebAppCustomizationResponse = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DeleteWebAppCustomizationResponse>;
export interface DeleteWorkflowRequest {
  WorkflowId: string;
}
const DeleteWorkflowRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<DeleteWorkflowRequest>;
export interface DeleteWorkflowResponse {}
const DeleteWorkflowResponse = DeleteAccessResponse as any as S.Schema<DeleteWorkflowResponse>;
export interface DescribeAccessRequest {
  ServerId: string;
  ExternalId: string;
}
const DescribeAccessRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DescribeAccessRequest>;
export interface DescribedAccess {
  HomeDirectory?: string;
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];
  HomeDirectoryType?: HomeDirectoryType;
  Policy?: string;
  PosixProfile?: PosixProfile;
  Role?: string;
  ExternalId?: string;
}
const DescribedAccess = /*@__PURE__*/ __L.at(__c8, 6) as any as S.Schema<DescribedAccess>;
export interface DescribeAccessResponse {
  ServerId: string;
  Access: DescribedAccess;
}
const DescribeAccessResponse = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<DescribeAccessResponse>;
export interface DescribeAgreementRequest {
  AgreementId: string;
  ServerId: string;
}
const DescribeAgreementRequest = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<DescribeAgreementRequest>;
export interface DescribedAgreement {
  Arn: string;
  AgreementId?: string;
  Description?: string;
  Status?: AgreementStatusType;
  ServerId?: string;
  LocalProfileId?: string;
  PartnerProfileId?: string;
  BaseDirectory?: string;
  AccessRole?: string;
  Tags?: Tag[];
  PreserveFilename?: PreserveFilenameType;
  EnforceMessageSigning?: EnforceMessageSigningType;
  CustomDirectories?: CustomDirectoriesType;
}
const DescribedAgreement = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<DescribedAgreement>;
export interface DescribeAgreementResponse {
  Agreement: DescribedAgreement;
}
const DescribeAgreementResponse = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<DescribeAgreementResponse>;
export interface DescribeCertificateRequest {
  CertificateId: string;
}
const DescribeCertificateRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<DescribeCertificateRequest>;
export type CertificateUsageType = "SIGNING" | "ENCRYPTION" | "TLS" | (string & {});
const CertificateUsageType = S.String;

export type CertificateStatusType = "ACTIVE" | "PENDING_ROTATION" | "INACTIVE" | (string & {});
const CertificateStatusType = S.String;

export type CertificateBodyType = string | redacted.Redacted<string>;
export type CertificateChainType = string | redacted.Redacted<string>;
export type CertDate = Date;
export type CertSerial = string;
export type CertificateType = "CERTIFICATE" | "CERTIFICATE_WITH_PRIVATE_KEY" | (string & {});
const CertificateType = S.String;

export interface DescribedCertificate {
  Arn: string;
  CertificateId?: string;
  Usage?: CertificateUsageType;
  Status?: CertificateStatusType;
  Certificate?: string | redacted.Redacted<string>;
  CertificateChain?: string | redacted.Redacted<string>;
  ActiveDate?: Date;
  InactiveDate?: Date;
  Serial?: string;
  NotBeforeDate?: Date;
  NotAfterDate?: Date;
  Type?: CertificateType;
  Description?: string;
  Tags?: Tag[];
}
const DescribedCertificate = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<DescribedCertificate>;
export interface DescribeCertificateResponse {
  Certificate: DescribedCertificate;
}
const DescribeCertificateResponse = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<DescribeCertificateResponse>;
export interface DescribeConnectorRequest {
  ConnectorId: string;
}
const DescribeConnectorRequest = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<DescribeConnectorRequest>;
export type ServiceManagedEgressIpAddress = string;
export type ServiceManagedEgressIpAddresses = string[];
const ServiceManagedEgressIpAddresses =
  As2AsyncMdnServerIds as any as S.Schema<ServiceManagedEgressIpAddresses>;
export interface DescribedConnectorVpcLatticeEgressConfig {
  ResourceConfigurationArn: string;
  PortNumber?: number;
}
export type DescribedConnectorEgressConfig = {
  VpcLattice: DescribedConnectorVpcLatticeEgressConfig;
};
const DescribedConnectorEgressConfig =
  ConnectorEgressConfig as any as S.Schema<DescribedConnectorEgressConfig>;
export type ConnectorEgressType = "SERVICE_MANAGED" | "VPC_LATTICE" | (string & {});
const ConnectorEgressType = S.String;

export type ConnectorErrorMessage = string;
export type ConnectorStatus = "ACTIVE" | "ERRORED" | "PENDING" | (string & {});
const ConnectorStatus = S.String;

export interface DescribedConnector {
  Arn: string;
  ConnectorId?: string;
  Url?: string;
  As2Config?: As2ConnectorConfig;
  AccessRole?: string;
  LoggingRole?: string;
  Tags?: Tag[];
  SftpConfig?: SftpConnectorConfig;
  ServiceManagedEgressIpAddresses?: string[];
  SecurityPolicyName?: string;
  EgressConfig?: DescribedConnectorEgressConfig;
  EgressType: ConnectorEgressType;
  ErrorMessage?: string;
  Status: ConnectorStatus;
  IpAddressType?: ConnectorsIpAddressType;
}
const DescribedConnector = /*@__PURE__*/ __L.at(__c9, 7) as any as S.Schema<DescribedConnector>;
export interface DescribeConnectorResponse {
  Connector: DescribedConnector;
}
const DescribeConnectorResponse = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<DescribeConnectorResponse>;
export type ExecutionId = string;
export interface DescribeExecutionRequest {
  ExecutionId: string;
  WorkflowId: string;
}
const DescribeExecutionRequest = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<DescribeExecutionRequest>;
export type S3VersionId = string;
export type S3Etag = string;
export interface S3FileLocation {
  Bucket?: string;
  Key?: string;
  VersionId?: string;
  Etag?: string;
}
const S3FileLocation = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<S3FileLocation>;
export interface FileLocation {
  S3FileLocation?: S3FileLocation;
  EfsFileLocation?: EfsFileLocation;
}
const FileLocation = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<FileLocation>;
export type SessionId = string;
export interface UserDetails {
  UserName: string;
  ServerId: string;
  SessionId?: string;
}
const UserDetails = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<UserDetails>;
export interface ServiceMetadata {
  UserDetails: UserDetails;
}
const ServiceMetadata = /*@__PURE__*/ __L.at(__c10, 5) as any as S.Schema<ServiceMetadata>;
export type LogGroupName = string;
export interface LoggingConfiguration {
  LoggingRole?: string;
  LogGroupName?: string;
}
const LoggingConfiguration = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<LoggingConfiguration>;
export type ExecutionStatus =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "EXCEPTION"
  | "HANDLING_EXCEPTION"
  | (string & {});
const ExecutionStatus = S.String;

export type StepResultOutputsJson = string;
export type ExecutionErrorType =
  | "PERMISSION_DENIED"
  | "CUSTOM_STEP_FAILED"
  | "THROTTLED"
  | "ALREADY_EXISTS"
  | "NOT_FOUND"
  | "BAD_REQUEST"
  | "TIMEOUT"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
const ExecutionErrorType = S.String;

export type ExecutionErrorMessage = string;
export interface ExecutionError {
  Type: ExecutionErrorType;
  Message: string;
}
const ExecutionError = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<ExecutionError>;
export interface ExecutionStepResult {
  StepType?: WorkflowStepType;
  Outputs?: string;
  Error?: ExecutionError;
}
const ExecutionStepResult = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<ExecutionStepResult>;
export type ExecutionStepResults = ExecutionStepResult[];
const ExecutionStepResults = /*@__PURE__*/ __L.at(__c11, 1);
export interface ExecutionResults {
  Steps?: ExecutionStepResult[];
  OnExceptionSteps?: ExecutionStepResult[];
}
const ExecutionResults = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<ExecutionResults>;
export interface DescribedExecution {
  ExecutionId?: string;
  InitialFileLocation?: FileLocation;
  ServiceMetadata?: ServiceMetadata;
  ExecutionRole?: string;
  LoggingConfiguration?: LoggingConfiguration;
  PosixProfile?: PosixProfile;
  Status?: ExecutionStatus;
  Results?: ExecutionResults;
}
const DescribedExecution = /*@__PURE__*/ __L.at(__c11, 3) as any as S.Schema<DescribedExecution>;
export interface DescribeExecutionResponse {
  WorkflowId: string;
  Execution: DescribedExecution;
}
const DescribeExecutionResponse = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<DescribeExecutionResponse>;
export interface DescribeHostKeyRequest {
  ServerId: string;
  HostKeyId: string;
}
const DescribeHostKeyRequest = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<DescribeHostKeyRequest>;
export type HostKeyFingerprint = string;
export type HostKeyDescription = string;
export type HostKeyType = string;
export type DateImported = Date;
export interface DescribedHostKey {
  Arn: string;
  HostKeyId?: string;
  HostKeyFingerprint?: string;
  Description?: string;
  Type?: string;
  DateImported?: Date;
  Tags?: Tag[];
}
const DescribedHostKey = /*@__PURE__*/ __L.at(__c11, 6) as any as S.Schema<DescribedHostKey>;
export interface DescribeHostKeyResponse {
  HostKey: DescribedHostKey;
}
const DescribeHostKeyResponse = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<DescribeHostKeyResponse>;
export interface DescribeProfileRequest {
  ProfileId: string;
}
const DescribeProfileRequest = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<DescribeProfileRequest>;
export interface DescribedProfile {
  Arn: string;
  ProfileId?: string;
  ProfileType?: ProfileType;
  As2Id?: string;
  CertificateIds?: string[];
  Tags?: Tag[];
}
const DescribedProfile = /*@__PURE__*/ __L.at(__c12, 1) as any as S.Schema<DescribedProfile>;
export interface DescribeProfileResponse {
  Profile: DescribedProfile;
}
const DescribeProfileResponse = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<DescribeProfileResponse>;
export interface DescribeSecurityPolicyRequest {
  SecurityPolicyName: string;
}
const DescribeSecurityPolicyRequest = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<DescribeSecurityPolicyRequest>;
export type Fips = boolean;
export type SecurityPolicyOption = string;
export type SecurityPolicyOptions = string[];
const SecurityPolicyOptions = As2AsyncMdnServerIds as any as S.Schema<SecurityPolicyOptions>;
export type SecurityPolicyResourceType = "SERVER" | "CONNECTOR" | (string & {});
const SecurityPolicyResourceType = S.String;

export type SecurityPolicyProtocol = "SFTP" | "FTPS" | (string & {});
export type SecurityPolicyProtocols = SecurityPolicyProtocol[];
const SecurityPolicyProtocols = Protocols as any as S.Schema<SecurityPolicyProtocols>;
export interface DescribedSecurityPolicy {
  Fips?: boolean;
  SecurityPolicyName: string;
  SshCiphers?: string[];
  SshKexs?: string[];
  SshMacs?: string[];
  TlsCiphers?: string[];
  SshHostKeyAlgorithms?: string[];
  Type?: SecurityPolicyResourceType;
  Protocols?: SecurityPolicyProtocol[];
}
const DescribedSecurityPolicy = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<DescribedSecurityPolicy>;
export interface DescribeSecurityPolicyResponse {
  SecurityPolicy: DescribedSecurityPolicy;
}
const DescribeSecurityPolicyResponse = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<DescribeSecurityPolicyResponse>;
export interface DescribeServerRequest {
  ServerId: string;
}
const DescribeServerRequest = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<DescribeServerRequest>;
export type State =
  | "OFFLINE"
  | "ONLINE"
  | "STARTING"
  | "STOPPING"
  | "START_FAILED"
  | "STOP_FAILED"
  | (string & {});
const State = S.String;

export type UserCount = number;
export interface DescribedServer {
  Arn: string;
  Certificate?: string;
  ProtocolDetails?: ProtocolDetails;
  Domain?: Domain;
  EndpointDetails?: EndpointDetails;
  EndpointType?: EndpointType;
  HostKeyFingerprint?: string;
  IdentityProviderDetails?: IdentityProviderDetails;
  IdentityProviderType?: IdentityProviderType;
  LoggingRole?: string;
  PostAuthenticationLoginBanner?: string;
  PreAuthenticationLoginBanner?: string;
  Protocols?: Protocol[];
  SecurityPolicyName?: string;
  ServerId?: string;
  State?: State;
  Tags?: Tag[];
  UserCount?: number;
  WorkflowDetails?: WorkflowDetails;
  StructuredLogDestinations?: string[];
  S3StorageOptions?: S3StorageOptions;
  As2ServiceManagedEgressIpAddresses?: string[];
  IpAddressType?: IpAddressType;
}
const DescribedServer = /*@__PURE__*/ __L.at(__c12, 7) as any as S.Schema<DescribedServer>;
export interface DescribeServerResponse {
  Server: DescribedServer;
}
const DescribeServerResponse = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<DescribeServerResponse>;
export interface DescribeUserRequest {
  ServerId: string;
  UserName: string;
}
const DescribeUserRequest = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<DescribeUserRequest>;
export interface SshPublicKey {
  DateImported: Date;
  SshPublicKeyBody: string;
  SshPublicKeyId: string;
}
const SshPublicKey = /*@__PURE__*/ __L.at(__c13, 2) as any as S.Schema<SshPublicKey>;
export type SshPublicKeys = SshPublicKey[];
const SshPublicKeys = /*@__PURE__*/ __L.at(__c13, 3);
export interface DescribedUser {
  Arn: string;
  HomeDirectory?: string;
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];
  HomeDirectoryType?: HomeDirectoryType;
  Policy?: string;
  PosixProfile?: PosixProfile;
  Role?: string;
  SshPublicKeys?: SshPublicKey[];
  Tags?: Tag[];
  UserName?: string;
}
const DescribedUser = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<DescribedUser>;
export interface DescribeUserResponse {
  ServerId: string;
  User: DescribedUser;
}
const DescribeUserResponse = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<DescribeUserResponse>;
export interface DescribeWebAppRequest {
  WebAppId: string;
}
const DescribeWebAppRequest = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<DescribeWebAppRequest>;
export type IdentityCenterApplicationArn = string;
export interface DescribedIdentityCenterConfig {
  ApplicationArn?: string;
  InstanceArn?: string;
  Role?: string;
}
const DescribedIdentityCenterConfig = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<DescribedIdentityCenterConfig>;
export type DescribedWebAppIdentityProviderDetails = {
  IdentityCenterConfig: DescribedIdentityCenterConfig;
};
const DescribedWebAppIdentityProviderDetails = /*@__PURE__*/ __L.at(__c14, 0);
export type WebAppEndpoint = string;
export type WebAppEndpointType = "PUBLIC" | "VPC" | (string & {});
const WebAppEndpointType = S.String;

export interface DescribedWebAppVpcConfig {
  SubnetIds?: string[];
  VpcId?: string;
  VpcEndpointId?: string;
}
const DescribedWebAppVpcConfig = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<DescribedWebAppVpcConfig>;
export type DescribedWebAppEndpointDetails = { Vpc: DescribedWebAppVpcConfig };
const DescribedWebAppEndpointDetails = /*@__PURE__*/ __L.at(__c14, 2);
export interface DescribedWebApp {
  Arn: string;
  WebAppId: string;
  DescribedIdentityProviderDetails?: DescribedWebAppIdentityProviderDetails;
  AccessEndpoint?: string;
  WebAppEndpoint?: string;
  WebAppUnits?: WebAppUnits;
  Tags?: Tag[];
  WebAppEndpointPolicy?: WebAppEndpointPolicy;
  EndpointType?: WebAppEndpointType;
  DescribedEndpointDetails?: DescribedWebAppEndpointDetails;
}
const DescribedWebApp = /*@__PURE__*/ __L.at(__c14, 3) as any as S.Schema<DescribedWebApp>;
export interface DescribeWebAppResponse {
  WebApp: DescribedWebApp;
}
const DescribeWebAppResponse = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<DescribeWebAppResponse>;
export interface DescribeWebAppCustomizationRequest {
  WebAppId: string;
}
const DescribeWebAppCustomizationRequest = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<DescribeWebAppCustomizationRequest>;
export type WebAppTitle = string;
export type WebAppLogoFile = Uint8Array | redacted.Redacted<Uint8Array>;
export type WebAppFaviconFile = Uint8Array | redacted.Redacted<Uint8Array>;
export interface DescribedWebAppCustomization {
  Arn: string;
  WebAppId: string;
  Title?: string;
  LogoFile?: Uint8Array | redacted.Redacted<Uint8Array>;
  FaviconFile?: Uint8Array | redacted.Redacted<Uint8Array>;
}
const DescribedWebAppCustomization = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<DescribedWebAppCustomization>;
export interface DescribeWebAppCustomizationResponse {
  WebAppCustomization: DescribedWebAppCustomization;
}
const DescribeWebAppCustomizationResponse = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<DescribeWebAppCustomizationResponse>;
export interface DescribeWorkflowRequest {
  WorkflowId: string;
}
const DescribeWorkflowRequest = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<DescribeWorkflowRequest>;
export interface DescribedWorkflow {
  Arn: string;
  Description?: string;
  Steps?: WorkflowStep[];
  OnExceptionSteps?: WorkflowStep[];
  WorkflowId?: string;
  Tags?: Tag[];
  StructuredLogDestinations?: string[];
}
const DescribedWorkflow = /*@__PURE__*/ __L.at(__c15, 1) as any as S.Schema<DescribedWorkflow>;
export interface DescribeWorkflowResponse {
  Workflow: DescribedWorkflow;
}
const DescribeWorkflowResponse = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<DescribeWorkflowResponse>;
export type PrivateKeyType = string | redacted.Redacted<string>;
export interface ImportCertificateRequest {
  Usage: CertificateUsageType;
  Certificate: string | redacted.Redacted<string>;
  CertificateChain?: string | redacted.Redacted<string>;
  PrivateKey?: string | redacted.Redacted<string>;
  ActiveDate?: Date;
  InactiveDate?: Date;
  Description?: string;
  Tags?: Tag[];
}
const ImportCertificateRequest = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<ImportCertificateRequest>;
export interface ImportCertificateResponse {
  CertificateId: string;
}
const ImportCertificateResponse = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<ImportCertificateResponse>;
export interface ImportHostKeyRequest {
  ServerId: string;
  HostKeyBody: string | redacted.Redacted<string>;
  Description?: string;
  Tags?: Tag[];
}
const ImportHostKeyRequest = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<ImportHostKeyRequest>;
export interface ImportHostKeyResponse {
  ServerId: string;
  HostKeyId: string;
}
const ImportHostKeyResponse = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<ImportHostKeyResponse>;
export interface ImportSshPublicKeyRequest {
  ServerId: string;
  SshPublicKeyBody: string;
  UserName: string;
}
const ImportSshPublicKeyRequest = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<ImportSshPublicKeyRequest>;
export interface ImportSshPublicKeyResponse {
  ServerId: string;
  SshPublicKeyId: string;
  UserName: string;
}
const ImportSshPublicKeyResponse = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<ImportSshPublicKeyResponse>;
export type MaxResults = number;
export type NextToken = string;
export interface ListAccessesRequest {
  MaxResults?: number;
  NextToken?: string;
  ServerId: string;
}
const ListAccessesRequest = /*@__PURE__*/ __L.at(__c16, 1) as any as S.Schema<ListAccessesRequest>;
export interface ListedAccess {
  HomeDirectory?: string;
  HomeDirectoryType?: HomeDirectoryType;
  Role?: string;
  ExternalId?: string;
}
const ListedAccess = /*@__PURE__*/ __L.at(__c16, 2) as any as S.Schema<ListedAccess>;
export type ListedAccesses = ListedAccess[];
const ListedAccesses = /*@__PURE__*/ __L.at(__c16, 3);
export interface ListAccessesResponse {
  NextToken?: string;
  ServerId: string;
  Accesses: ListedAccess[];
}
const ListAccessesResponse = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<ListAccessesResponse>;
export interface ListAgreementsRequest {
  MaxResults?: number;
  NextToken?: string;
  ServerId: string;
}
const ListAgreementsRequest = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<ListAgreementsRequest>;
export interface ListedAgreement {
  Arn?: string;
  AgreementId?: string;
  Description?: string;
  Status?: AgreementStatusType;
  ServerId?: string;
  LocalProfileId?: string;
  PartnerProfileId?: string;
}
const ListedAgreement = /*@__PURE__*/ __L.at(__c16, 6) as any as S.Schema<ListedAgreement>;
export type ListedAgreements = ListedAgreement[];
const ListedAgreements = /*@__PURE__*/ __L.at(__c16, 7);
export interface ListAgreementsResponse {
  NextToken?: string;
  Agreements: ListedAgreement[];
}
const ListAgreementsResponse = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<ListAgreementsResponse>;
export interface ListCertificatesRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListCertificatesRequest = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<ListCertificatesRequest>;
export interface ListedCertificate {
  Arn?: string;
  CertificateId?: string;
  Usage?: CertificateUsageType;
  Status?: CertificateStatusType;
  ActiveDate?: Date;
  InactiveDate?: Date;
  Type?: CertificateType;
  Description?: string;
}
const ListedCertificate = /*@__PURE__*/ __L.at(__c17, 2) as any as S.Schema<ListedCertificate>;
export type ListedCertificates = ListedCertificate[];
const ListedCertificates = /*@__PURE__*/ __L.at(__c17, 3);
export interface ListCertificatesResponse {
  NextToken?: string;
  Certificates: ListedCertificate[];
}
const ListCertificatesResponse = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<ListCertificatesResponse>;
export interface ListConnectorsRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListConnectorsRequest = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<ListConnectorsRequest>;
export interface ListedConnector {
  Arn?: string;
  ConnectorId?: string;
  Url?: string;
}
const ListedConnector = /*@__PURE__*/ __L.at(__c17, 6) as any as S.Schema<ListedConnector>;
export type ListedConnectors = ListedConnector[];
const ListedConnectors = /*@__PURE__*/ __L.at(__c17, 7);
export interface ListConnectorsResponse {
  NextToken?: string;
  Connectors: ListedConnector[];
}
const ListConnectorsResponse = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<ListConnectorsResponse>;
export interface ListExecutionsRequest {
  MaxResults?: number;
  NextToken?: string;
  WorkflowId: string;
}
const ListExecutionsRequest = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<ListExecutionsRequest>;
export interface ListedExecution {
  ExecutionId?: string;
  InitialFileLocation?: FileLocation;
  ServiceMetadata?: ServiceMetadata;
  Status?: ExecutionStatus;
}
const ListedExecution = /*@__PURE__*/ __L.at(__c18, 2) as any as S.Schema<ListedExecution>;
export type ListedExecutions = ListedExecution[];
const ListedExecutions = /*@__PURE__*/ __L.at(__c18, 3);
export interface ListExecutionsResponse {
  NextToken?: string;
  WorkflowId: string;
  Executions: ListedExecution[];
}
const ListExecutionsResponse = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<ListExecutionsResponse>;
export type TransferId = string;
export interface ListFileTransferResultsRequest {
  ConnectorId: string;
  TransferId: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListFileTransferResultsRequest = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<ListFileTransferResultsRequest>;
export type FilePath = string;
export type TransferTableStatus = "QUEUED" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | (string & {});
const TransferTableStatus = S.String;

export type FailureCode = string;
export type Message = string;
export interface ConnectorFileTransferResult {
  FilePath: string;
  StatusCode: TransferTableStatus;
  FailureCode?: string;
  FailureMessage?: string;
}
const ConnectorFileTransferResult = /*@__PURE__*/ __L.at(
  __c18,
  6,
) as any as S.Schema<ConnectorFileTransferResult>;
export type ConnectorFileTransferResults = ConnectorFileTransferResult[];
const ConnectorFileTransferResults = /*@__PURE__*/ __L.at(__c18, 7);
export interface ListFileTransferResultsResponse {
  FileTransferResults: ConnectorFileTransferResult[];
  NextToken?: string;
}
const ListFileTransferResultsResponse = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<ListFileTransferResultsResponse>;
export interface ListHostKeysRequest {
  MaxResults?: number;
  NextToken?: string;
  ServerId: string;
}
const ListHostKeysRequest = /*@__PURE__*/ __L.at(__c19, 1) as any as S.Schema<ListHostKeysRequest>;
export interface ListedHostKey {
  Arn: string;
  HostKeyId?: string;
  Fingerprint?: string;
  Description?: string;
  Type?: string;
  DateImported?: Date;
}
const ListedHostKey = /*@__PURE__*/ __L.at(__c19, 2) as any as S.Schema<ListedHostKey>;
export type ListedHostKeys = ListedHostKey[];
const ListedHostKeys = /*@__PURE__*/ __L.at(__c19, 3);
export interface ListHostKeysResponse {
  NextToken?: string;
  ServerId: string;
  HostKeys: ListedHostKey[];
}
const ListHostKeysResponse = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<ListHostKeysResponse>;
export interface ListProfilesRequest {
  MaxResults?: number;
  NextToken?: string;
  ProfileType?: ProfileType;
}
const ListProfilesRequest = /*@__PURE__*/ __L.at(__c19, 5) as any as S.Schema<ListProfilesRequest>;
export interface ListedProfile {
  Arn?: string;
  ProfileId?: string;
  As2Id?: string;
  ProfileType?: ProfileType;
}
const ListedProfile = /*@__PURE__*/ __L.at(__c19, 6) as any as S.Schema<ListedProfile>;
export type ListedProfiles = ListedProfile[];
const ListedProfiles = /*@__PURE__*/ __L.at(__c19, 7);
export interface ListProfilesResponse {
  NextToken?: string;
  Profiles: ListedProfile[];
}
const ListProfilesResponse = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<ListProfilesResponse>;
export interface ListSecurityPoliciesRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListSecurityPoliciesRequest = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<ListSecurityPoliciesRequest>;
export type SecurityPolicyNames = string[];
const SecurityPolicyNames = As2AsyncMdnServerIds as any as S.Schema<SecurityPolicyNames>;
export interface ListSecurityPoliciesResponse {
  NextToken?: string;
  SecurityPolicyNames: string[];
}
const ListSecurityPoliciesResponse = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<ListSecurityPoliciesResponse>;
export interface ListServersRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListServersRequest = /*@__PURE__*/ __L.at(__c20, 3) as any as S.Schema<ListServersRequest>;
export interface ListedServer {
  Arn: string;
  Domain?: Domain;
  IdentityProviderType?: IdentityProviderType;
  EndpointType?: EndpointType;
  LoggingRole?: string;
  ServerId?: string;
  State?: State;
  UserCount?: number;
}
const ListedServer = /*@__PURE__*/ __L.at(__c20, 4) as any as S.Schema<ListedServer>;
export type ListedServers = ListedServer[];
const ListedServers = /*@__PURE__*/ __L.at(__c20, 5);
export interface ListServersResponse {
  NextToken?: string;
  Servers: ListedServer[];
}
const ListServersResponse = /*@__PURE__*/ __L.at(__c20, 6) as any as S.Schema<ListServersResponse>;
export interface ListTagsForResourceRequest {
  Arn: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Arn?: string;
  NextToken?: string;
  Tags?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListUsersRequest {
  MaxResults?: number;
  NextToken?: string;
  ServerId: string;
}
const ListUsersRequest = /*@__PURE__*/ __L.at(__c21, 1) as any as S.Schema<ListUsersRequest>;
export type SshPublicKeyCount = number;
export interface ListedUser {
  Arn: string;
  HomeDirectory?: string;
  HomeDirectoryType?: HomeDirectoryType;
  Role?: string;
  SshPublicKeyCount?: number;
  UserName?: string;
}
const ListedUser = /*@__PURE__*/ __L.at(__c21, 2) as any as S.Schema<ListedUser>;
export type ListedUsers = ListedUser[];
const ListedUsers = /*@__PURE__*/ __L.at(__c21, 3);
export interface ListUsersResponse {
  NextToken?: string;
  ServerId: string;
  Users: ListedUser[];
}
const ListUsersResponse = /*@__PURE__*/ __L.at(__c21, 4) as any as S.Schema<ListUsersResponse>;
export interface ListWebAppsRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListWebAppsRequest = /*@__PURE__*/ __L.at(__c21, 5) as any as S.Schema<ListWebAppsRequest>;
export interface ListedWebApp {
  Arn: string;
  WebAppId: string;
  AccessEndpoint?: string;
  WebAppEndpoint?: string;
  EndpointType?: WebAppEndpointType;
}
const ListedWebApp = /*@__PURE__*/ __L.at(__c21, 6) as any as S.Schema<ListedWebApp>;
export type ListedWebApps = ListedWebApp[];
const ListedWebApps = /*@__PURE__*/ __L.at(__c21, 7);
export interface ListWebAppsResponse {
  NextToken?: string;
  WebApps: ListedWebApp[];
}
const ListWebAppsResponse = /*@__PURE__*/ __L.at(__c22, 0) as any as S.Schema<ListWebAppsResponse>;
export interface ListWorkflowsRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListWorkflowsRequest = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<ListWorkflowsRequest>;
export interface ListedWorkflow {
  WorkflowId?: string;
  Description?: string;
  Arn?: string;
}
const ListedWorkflow = /*@__PURE__*/ __L.at(__c22, 2) as any as S.Schema<ListedWorkflow>;
export type ListedWorkflows = ListedWorkflow[];
const ListedWorkflows = /*@__PURE__*/ __L.at(__c22, 3);
export interface ListWorkflowsResponse {
  NextToken?: string;
  Workflows: ListedWorkflow[];
}
const ListWorkflowsResponse = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<ListWorkflowsResponse>;
export type CallbackToken = string;
export type CustomStepStatus = "SUCCESS" | "FAILURE" | (string & {});
const CustomStepStatus = S.String;

export interface SendWorkflowStepStateRequest {
  WorkflowId: string;
  ExecutionId: string;
  Token: string;
  Status: CustomStepStatus;
}
const SendWorkflowStepStateRequest = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<SendWorkflowStepStateRequest>;
export interface SendWorkflowStepStateResponse {}
const SendWorkflowStepStateResponse =
  DeleteAccessResponse as any as S.Schema<SendWorkflowStepStateResponse>;
export type MaxItems = number;
export interface StartDirectoryListingRequest {
  ConnectorId: string;
  RemoteDirectoryPath: string;
  MaxItems?: number;
  OutputDirectoryPath: string;
}
const StartDirectoryListingRequest = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<StartDirectoryListingRequest>;
export type ListingId = string;
export type OutputFileName = string;
export interface StartDirectoryListingResponse {
  ListingId: string;
  OutputFileName: string;
}
const StartDirectoryListingResponse = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<StartDirectoryListingResponse>;
export type FilePaths = string[];
const FilePaths = As2AsyncMdnServerIds as any as S.Schema<FilePaths>;
export type CustomHttpHeaderKeyType = string | redacted.Redacted<string>;
export type CustomHttpHeaderValueType = string | redacted.Redacted<string>;
export interface CustomHttpHeader {
  Key?: string | redacted.Redacted<string>;
  Value?: string | redacted.Redacted<string>;
}
const CustomHttpHeader = /*@__PURE__*/ __L.at(__c23, 0) as any as S.Schema<CustomHttpHeader>;
export type CustomHttpHeaders = CustomHttpHeader[];
const CustomHttpHeaders = /*@__PURE__*/ __L.at(__c23, 1);
export interface StartFileTransferRequest {
  ConnectorId: string;
  SendFilePaths?: string[];
  RetrieveFilePaths?: string[];
  LocalDirectoryPath?: string;
  RemoteDirectoryPath?: string;
  CustomHttpHeaders?: CustomHttpHeader[];
}
const StartFileTransferRequest = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<StartFileTransferRequest>;
export interface StartFileTransferResponse {
  TransferId: string;
}
const StartFileTransferResponse = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<StartFileTransferResponse>;
export interface StartRemoteDeleteRequest {
  ConnectorId: string;
  DeletePath: string;
}
const StartRemoteDeleteRequest = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<StartRemoteDeleteRequest>;
export type DeleteId = string;
export interface StartRemoteDeleteResponse {
  DeleteId: string;
}
const StartRemoteDeleteResponse = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<StartRemoteDeleteResponse>;
export interface StartRemoteMoveRequest {
  ConnectorId: string;
  SourcePath: string;
  TargetPath: string;
}
const StartRemoteMoveRequest = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<StartRemoteMoveRequest>;
export type MoveId = string;
export interface StartRemoteMoveResponse {
  MoveId: string;
}
const StartRemoteMoveResponse = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<StartRemoteMoveResponse>;
export interface StartServerRequest {
  ServerId: string;
}
const StartServerRequest = /*@__PURE__*/ __L.at(__c24, 0) as any as S.Schema<StartServerRequest>;
export interface StartServerResponse {}
const StartServerResponse = DeleteAccessResponse as any as S.Schema<StartServerResponse>;
export interface StopServerRequest {
  ServerId: string;
}
const StopServerRequest = /*@__PURE__*/ __L.at(__c24, 1) as any as S.Schema<StopServerRequest>;
export interface StopServerResponse {}
const StopServerResponse = DeleteAccessResponse as any as S.Schema<StopServerResponse>;
export interface TagResourceRequest {
  Arn: string;
  Tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c24, 2) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteAccessResponse as any as S.Schema<TagResourceResponse>;
export interface TestConnectionRequest {
  ConnectorId: string;
}
const TestConnectionRequest = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<TestConnectionRequest>;
export type Status = string;
export type SftpConnectorHostKey = string;
export interface SftpConnectorConnectionDetails {
  HostKey?: string;
}
const SftpConnectorConnectionDetails = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<SftpConnectorConnectionDetails>;
export interface TestConnectionResponse {
  ConnectorId?: string;
  Status?: string;
  StatusMessage?: string;
  SftpConnectionDetails?: SftpConnectorConnectionDetails;
}
const TestConnectionResponse = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<TestConnectionResponse>;
export type SourceIp = string;
export type UserPassword = string | redacted.Redacted<string>;
export interface TestIdentityProviderRequest {
  ServerId: string;
  ServerProtocol?: Protocol;
  SourceIp?: string;
  UserName: string;
  UserPassword?: string | redacted.Redacted<string>;
}
const TestIdentityProviderRequest = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<TestIdentityProviderRequest>;
export type Response = string;
export type StatusCode = number;
export interface TestIdentityProviderResponse {
  Response?: string;
  StatusCode: number;
  Message?: string;
  Url: string;
}
const TestIdentityProviderResponse = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<TestIdentityProviderResponse>;
export type TagKeys = string[];
const TagKeys = As2AsyncMdnServerIds as any as S.Schema<TagKeys>;
export interface UntagResourceRequest {
  Arn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteAccessResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAccessRequest {
  HomeDirectory?: string;
  HomeDirectoryType?: HomeDirectoryType;
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];
  Policy?: string;
  PosixProfile?: PosixProfile;
  Role?: string;
  ServerId: string;
  ExternalId: string;
}
const UpdateAccessRequest = /*@__PURE__*/ __L.at(__c25, 1) as any as S.Schema<UpdateAccessRequest>;
export interface UpdateAccessResponse {
  ServerId: string;
  ExternalId: string;
}
const UpdateAccessResponse = CreateAccessResponse as any as S.Schema<UpdateAccessResponse>;
export interface UpdateAgreementRequest {
  AgreementId: string;
  ServerId: string;
  Description?: string;
  Status?: AgreementStatusType;
  LocalProfileId?: string;
  PartnerProfileId?: string;
  BaseDirectory?: string;
  AccessRole?: string;
  PreserveFilename?: PreserveFilenameType;
  EnforceMessageSigning?: EnforceMessageSigningType;
  CustomDirectories?: CustomDirectoriesType;
}
const UpdateAgreementRequest = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<UpdateAgreementRequest>;
export interface UpdateAgreementResponse {
  AgreementId: string;
}
const UpdateAgreementResponse = CreateAgreementResponse as any as S.Schema<UpdateAgreementResponse>;
export interface UpdateCertificateRequest {
  CertificateId: string;
  ActiveDate?: Date;
  InactiveDate?: Date;
  Description?: string;
}
const UpdateCertificateRequest = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<UpdateCertificateRequest>;
export interface UpdateCertificateResponse {
  CertificateId: string;
}
const UpdateCertificateResponse =
  ImportCertificateResponse as any as S.Schema<UpdateCertificateResponse>;
export interface UpdateConnectorVpcLatticeEgressConfig {
  ResourceConfigurationArn?: string;
  PortNumber?: number;
}
const UpdateConnectorVpcLatticeEgressConfig = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<UpdateConnectorVpcLatticeEgressConfig>;
export type UpdateConnectorEgressConfig = { VpcLattice: UpdateConnectorVpcLatticeEgressConfig };
const UpdateConnectorEgressConfig = /*@__PURE__*/ __L.at(__c25, 5);
export interface UpdateConnectorRequest {
  ConnectorId: string;
  Url?: string;
  As2Config?: As2ConnectorConfig;
  AccessRole?: string;
  LoggingRole?: string;
  SftpConfig?: SftpConnectorConfig;
  SecurityPolicyName?: string;
  EgressConfig?: UpdateConnectorEgressConfig;
  IpAddressType?: ConnectorsIpAddressType;
}
const UpdateConnectorRequest = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<UpdateConnectorRequest>;
export interface UpdateConnectorResponse {
  ConnectorId: string;
}
const UpdateConnectorResponse = CreateConnectorResponse as any as S.Schema<UpdateConnectorResponse>;
export interface UpdateHostKeyRequest {
  ServerId: string;
  HostKeyId: string;
  Description: string;
}
const UpdateHostKeyRequest = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<UpdateHostKeyRequest>;
export interface UpdateHostKeyResponse {
  ServerId: string;
  HostKeyId: string;
}
const UpdateHostKeyResponse = ImportHostKeyResponse as any as S.Schema<UpdateHostKeyResponse>;
export interface UpdateProfileRequest {
  ProfileId: string;
  CertificateIds?: string[];
}
const UpdateProfileRequest = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<UpdateProfileRequest>;
export interface UpdateProfileResponse {
  ProfileId: string;
}
const UpdateProfileResponse = CreateProfileResponse as any as S.Schema<UpdateProfileResponse>;
export interface UpdateServerRequest {
  Certificate?: string;
  ProtocolDetails?: ProtocolDetails;
  EndpointDetails?: EndpointDetails;
  EndpointType?: EndpointType;
  HostKey?: string | redacted.Redacted<string>;
  IdentityProviderDetails?: IdentityProviderDetails;
  LoggingRole?: string;
  PostAuthenticationLoginBanner?: string;
  PreAuthenticationLoginBanner?: string;
  Protocols?: Protocol[];
  SecurityPolicyName?: string;
  ServerId: string;
  WorkflowDetails?: WorkflowDetails;
  StructuredLogDestinations?: string[];
  S3StorageOptions?: S3StorageOptions;
  IpAddressType?: IpAddressType;
  IdentityProviderType?: IdentityProviderType;
}
const UpdateServerRequest = /*@__PURE__*/ __L.at(__c26, 1) as any as S.Schema<UpdateServerRequest>;
export interface UpdateServerResponse {
  ServerId: string;
}
const UpdateServerResponse = CreateServerResponse as any as S.Schema<UpdateServerResponse>;
export interface UpdateUserRequest {
  HomeDirectory?: string;
  HomeDirectoryType?: HomeDirectoryType;
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];
  Policy?: string;
  PosixProfile?: PosixProfile;
  Role?: string;
  ServerId: string;
  UserName: string;
}
const UpdateUserRequest = /*@__PURE__*/ __L.at(__c26, 2) as any as S.Schema<UpdateUserRequest>;
export interface UpdateUserResponse {
  ServerId: string;
  UserName: string;
}
const UpdateUserResponse = CreateUserResponse as any as S.Schema<UpdateUserResponse>;
export interface UpdateWebAppIdentityCenterConfig {
  Role?: string;
}
const UpdateWebAppIdentityCenterConfig = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<UpdateWebAppIdentityCenterConfig>;
export type UpdateWebAppIdentityProviderDetails = {
  IdentityCenterConfig: UpdateWebAppIdentityCenterConfig;
};
const UpdateWebAppIdentityProviderDetails = /*@__PURE__*/ __L.at(__c26, 4);
export interface UpdateWebAppVpcConfig {
  SubnetIds?: string[];
  IpAddressType?: WebAppVpcEndpointIpAddressType;
}
const UpdateWebAppVpcConfig = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<UpdateWebAppVpcConfig>;
export type UpdateWebAppEndpointDetails = { Vpc: UpdateWebAppVpcConfig };
const UpdateWebAppEndpointDetails = /*@__PURE__*/ __L.at(__c26, 6);
export interface UpdateWebAppRequest {
  WebAppId: string;
  IdentityProviderDetails?: UpdateWebAppIdentityProviderDetails;
  AccessEndpoint?: string;
  WebAppUnits?: WebAppUnits;
  EndpointDetails?: UpdateWebAppEndpointDetails;
}
const UpdateWebAppRequest = /*@__PURE__*/ __L.at(__c26, 7) as any as S.Schema<UpdateWebAppRequest>;
export interface UpdateWebAppResponse {
  WebAppId: string;
}
const UpdateWebAppResponse = CreateWebAppResponse as any as S.Schema<UpdateWebAppResponse>;
export interface UpdateWebAppCustomizationRequest {
  WebAppId: string;
  Title?: string;
  LogoFile?: Uint8Array | redacted.Redacted<Uint8Array>;
  FaviconFile?: Uint8Array | redacted.Redacted<Uint8Array>;
}
const UpdateWebAppCustomizationRequest = /*@__PURE__*/ __L.at(
  __c27,
  0,
) as any as S.Schema<UpdateWebAppCustomizationRequest>;
export interface UpdateWebAppCustomizationResponse {
  WebAppId: string;
}
const UpdateWebAppCustomizationResponse = /*@__PURE__*/ __L.at(
  __c27,
  1,
) as any as S.Schema<UpdateWebAppCustomizationResponse>;
export type Resource = string;
export type ResourceType = string;
export type ServiceErrorMessage = string;
export type RetryAfterSeconds = string;
export type CreateAccessError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use `CreateAccess` to limit the access to the correct set of users who need this ability.
 */
export const createAccess: API.OperationMethod<
  CreateAccessRequest,
  CreateAccessResponse,
  CreateAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccessRequest,
  output: CreateAccessResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAccess",
}));

export type CreateAgreementError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes.
 *
 * The partner is identified with the `PartnerProfileId`, and the AS2 process is identified with the `LocalProfileId`.
 *
 * Specify *either* `BaseDirectory` or `CustomDirectories`, but not both. Specifying both causes the command to fail.
 */
export const createAgreement: API.OperationMethod<
  CreateAgreementRequest,
  CreateAgreementResponse,
  CreateAgreementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAgreementRequest,
  output: CreateAgreementResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAgreement",
}));

export type CreateConnectorError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates the connector, which captures the parameters for a connection for the AS2 or SFTP protocol. For AS2, the connector is required for sending files to an externally hosted AS2 server. For SFTP, the connector is required when sending files to an SFTP server or receiving files from an SFTP server. For more details about connectors, see Configure AS2 connectors and Create SFTP connectors.
 *
 * You must specify exactly one configuration object: either for AS2 (`As2Config`) or SFTP (`SftpConfig`).
 */
export const createConnector: API.OperationMethod<
  CreateConnectorRequest,
  CreateConnectorResponse,
  CreateConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateConnectorRequest,
  output: CreateConnectorResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConnector",
}));

export type CreateProfileError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates the local or partner profile to use for AS2 transfers.
 */
export const createProfile: API.OperationMethod<
  CreateProfileRequest,
  CreateProfileResponse,
  CreateProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProfileRequest,
  output: CreateProfileResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProfile",
}));

export type CreateServerError =
  | AccessDeniedException
  | InternalServiceError
  | InvalidRequestException
  | ResourceExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated `ServerId` property that is assigned to the newly created server.
 */
export const createServer: API.OperationMethod<
  CreateServerRequest,
  CreateServerResponse,
  CreateServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateServerRequest,
  output: CreateServerResponse,
  errors: [
    AccessDeniedException,
    InternalServiceError,
    InvalidRequestException,
    ResourceExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateServer",
}));

export type CreateUserError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the `IdentityProviderType` set to `SERVICE_MANAGED`. Using parameters for `CreateUser`, you can specify the user name, set the home directory, store the user's public key, and assign the user's Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.
 */
export const createUser: API.OperationMethod<
  CreateUserRequest,
  CreateUserResponse,
  CreateUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUserRequest,
  output: CreateUserResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUser",
}));

export type CreateWebAppError =
  | AccessDeniedException
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a web app based on specified parameters, and returns the ID for the new web app. You can configure the web app to be publicly accessible or hosted within a VPC.
 *
 * For more information about using VPC endpoints with Transfer Family, see Create a Transfer Family web app in a VPC.
 */
export const createWebApp: API.OperationMethod<
  CreateWebAppRequest,
  CreateWebAppResponse,
  CreateWebAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWebAppRequest,
  output: CreateWebAppResponse,
  errors: [
    AccessDeniedException,
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWebApp",
}));

export type CreateWorkflowError =
  | AccessDeniedException
  | InternalServiceError
  | InvalidRequestException
  | ResourceExistsException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the `workflow-details` field in `CreateServer` and `UpdateServer` operations.
 */
export const createWorkflow: API.OperationMethod<
  CreateWorkflowRequest,
  CreateWorkflowResponse,
  CreateWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWorkflowRequest,
  output: CreateWorkflowResponse,
  errors: [
    AccessDeniedException,
    InternalServiceError,
    InvalidRequestException,
    ResourceExistsException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWorkflow",
}));

export type DeleteAccessError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Allows you to delete the access specified in the `ServerID` and `ExternalID` parameters.
 */
export const deleteAccess: API.OperationMethod<
  DeleteAccessRequest,
  DeleteAccessResponse,
  DeleteAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessRequest,
  output: DeleteAccessResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccess",
}));

export type DeleteAgreementError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Delete the agreement that's specified in the provided `AgreementId`.
 */
export const deleteAgreement: API.OperationMethod<
  DeleteAgreementRequest,
  DeleteAgreementResponse,
  DeleteAgreementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAgreementRequest,
  output: DeleteAgreementResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAgreement",
}));

export type DeleteCertificateError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes the certificate that's specified in the `CertificateId` parameter.
 */
export const deleteCertificate: API.OperationMethod<
  DeleteCertificateRequest,
  DeleteCertificateResponse,
  DeleteCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCertificateRequest,
  output: DeleteCertificateResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCertificate",
}));

export type DeleteConnectorError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes the connector that's specified in the provided `ConnectorId`.
 */
export const deleteConnector: API.OperationMethod<
  DeleteConnectorRequest,
  DeleteConnectorResponse,
  DeleteConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConnectorRequest,
  output: DeleteConnectorResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnector",
}));

export type DeleteHostKeyError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the host key that's specified in the `HostKeyId` parameter.
 */
export const deleteHostKey: API.OperationMethod<
  DeleteHostKeyRequest,
  DeleteHostKeyResponse,
  DeleteHostKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteHostKeyRequest,
  output: DeleteHostKeyResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteHostKey",
}));

export type DeleteProfileError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes the profile that's specified in the `ProfileId` parameter.
 */
export const deleteProfile: API.OperationMethod<
  DeleteProfileRequest,
  DeleteProfileResponse,
  DeleteProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProfileRequest,
  output: DeleteProfileResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProfile",
}));

export type DeleteServerError =
  | AccessDeniedException
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes the file transfer protocol-enabled server that you specify.
 *
 * No response returns from this operation.
 */
export const deleteServer: API.OperationMethod<
  DeleteServerRequest,
  DeleteServerResponse,
  DeleteServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteServerRequest,
  output: DeleteServerResponse,
  errors: [
    AccessDeniedException,
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteServer",
}));

export type DeleteSshPublicKeyError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a user's Secure Shell (SSH) public key.
 */
export const deleteSshPublicKey: API.OperationMethod<
  DeleteSshPublicKeyRequest,
  DeleteSshPublicKeyResponse,
  DeleteSshPublicKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSshPublicKeyRequest,
  output: DeleteSshPublicKeyResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSshPublicKey",
}));

export type DeleteUserError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes the user belonging to a file transfer protocol-enabled server you specify.
 *
 * No response returns from this operation.
 *
 * When you delete a user from a server, the user's information is lost.
 */
export const deleteUser: API.OperationMethod<
  DeleteUserRequest,
  DeleteUserResponse,
  DeleteUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUserRequest,
  output: DeleteUserResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUser",
}));

export type DeleteWebAppError =
  | AccessDeniedException
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the specified web app.
 */
export const deleteWebApp: API.OperationMethod<
  DeleteWebAppRequest,
  DeleteWebAppResponse,
  DeleteWebAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWebAppRequest,
  output: DeleteWebAppResponse,
  errors: [
    AccessDeniedException,
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWebApp",
}));

export type DeleteWebAppCustomizationError =
  | AccessDeniedException
  | ConflictException
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the `WebAppCustomization` object that corresponds to the web app ID specified.
 */
export const deleteWebAppCustomization: API.OperationMethod<
  DeleteWebAppCustomizationRequest,
  DeleteWebAppCustomizationResponse,
  DeleteWebAppCustomizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWebAppCustomizationRequest,
  output: DeleteWebAppCustomizationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWebAppCustomization",
}));

export type DeleteWorkflowError =
  | AccessDeniedException
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes the specified workflow.
 */
export const deleteWorkflow: API.OperationMethod<
  DeleteWorkflowRequest,
  DeleteWorkflowResponse,
  DeleteWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWorkflowRequest,
  output: DeleteWorkflowResponse,
  errors: [
    AccessDeniedException,
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorkflow",
}));

export type DescribeAccessError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its `ServerId` property and its `ExternalId`.
 *
 * The response from this call returns the properties of the access that is associated with the `ServerId` value that was specified.
 */
export const describeAccess: API.OperationMethod<
  DescribeAccessRequest,
  DescribeAccessResponse,
  DescribeAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAccessRequest,
  output: DescribeAccessResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccess",
}));

export type DescribeAgreementError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Describes the agreement that's identified by the `AgreementId`.
 */
export const describeAgreement: API.OperationMethod<
  DescribeAgreementRequest,
  DescribeAgreementResponse,
  DescribeAgreementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAgreementRequest,
  output: DescribeAgreementResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAgreement",
}));

export type DescribeCertificateError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Describes the certificate that's identified by the `CertificateId`.
 *
 * Transfer Family automatically publishes a Amazon CloudWatch metric called `DaysUntilExpiry` for imported certificates. This metric tracks the number of days until the certificate expires based on the `InactiveDate`. The metric is available in the `AWS/Transfer` namespace and includes the `CertificateId` as a dimension.
 */
export const describeCertificate: API.OperationMethod<
  DescribeCertificateRequest,
  DescribeCertificateResponse,
  DescribeCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeCertificateRequest,
  output: DescribeCertificateResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCertificate",
}));

export type DescribeConnectorError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Describes the connector that's identified by the `ConnectorId.`
 */
export const describeConnector: API.OperationMethod<
  DescribeConnectorRequest,
  DescribeConnectorResponse,
  DescribeConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeConnectorRequest,
  output: DescribeConnectorResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConnector",
}));

export type DescribeExecutionError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * You can use `DescribeExecution` to check the details of the execution of the specified workflow.
 *
 * This API call only returns details for in-progress workflows.
 *
 * If you provide an ID for an execution that is not in progress, or if the execution doesn't match the specified workflow ID, you receive a `ResourceNotFound` exception.
 */
export const describeExecution: API.OperationMethod<
  DescribeExecutionRequest,
  DescribeExecutionResponse,
  DescribeExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeExecutionRequest,
  output: DescribeExecutionResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeExecution",
}));

export type DescribeHostKeyError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns the details of the host key that's specified by the `HostKeyId` and `ServerId`.
 */
export const describeHostKey: API.OperationMethod<
  DescribeHostKeyRequest,
  DescribeHostKeyResponse,
  DescribeHostKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeHostKeyRequest,
  output: DescribeHostKeyResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeHostKey",
}));

export type DescribeProfileError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns the details of the profile that's specified by the `ProfileId`.
 */
export const describeProfile: API.OperationMethod<
  DescribeProfileRequest,
  DescribeProfileResponse,
  DescribeProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeProfileRequest,
  output: DescribeProfileResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProfile",
}));

export type DescribeSecurityPolicyError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Describes the security policy that is attached to your server or SFTP connector. The response contains a description of the security policy's properties. For more information about security policies, see Working with security policies for servers or Working with security policies for SFTP connectors.
 */
export const describeSecurityPolicy: API.OperationMethod<
  DescribeSecurityPolicyRequest,
  DescribeSecurityPolicyResponse,
  DescribeSecurityPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeSecurityPolicyRequest,
  output: DescribeSecurityPolicyResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSecurityPolicy",
}));

export type DescribeServerError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Describes a file transfer protocol-enabled server that you specify by passing the `ServerId` parameter.
 *
 * The response contains a description of a server's properties. When you set `EndpointType` to VPC, the response will contain the `EndpointDetails`.
 */
export const describeServer: API.OperationMethod<
  DescribeServerRequest,
  DescribeServerResponse,
  DescribeServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeServerRequest,
  output: DescribeServerResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeServer",
}));

export type DescribeUserError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its `ServerId` property.
 *
 * The response from this call returns the properties of the user associated with the `ServerId` value that was specified.
 */
export const describeUser: API.OperationMethod<
  DescribeUserRequest,
  DescribeUserResponse,
  DescribeUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeUserRequest,
  output: DescribeUserResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeUser",
}));

export type DescribeWebAppError =
  | AccessDeniedException
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Describes the web app that's identified by `WebAppId`. The response includes endpoint configuration details such as whether the web app is publicly accessible or VPC hosted.
 *
 * For more information about using VPC endpoints with Transfer Family, see Create a Transfer Family web app in a VPC.
 */
export const describeWebApp: API.OperationMethod<
  DescribeWebAppRequest,
  DescribeWebAppResponse,
  DescribeWebAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeWebAppRequest,
  output: DescribeWebAppResponse,
  errors: [
    AccessDeniedException,
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWebApp",
}));

export type DescribeWebAppCustomizationError =
  | AccessDeniedException
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Describes the web app customization object that's identified by `WebAppId`.
 */
export const describeWebAppCustomization: API.OperationMethod<
  DescribeWebAppCustomizationRequest,
  DescribeWebAppCustomizationResponse,
  DescribeWebAppCustomizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeWebAppCustomizationRequest,
  output: DescribeWebAppCustomizationResponse,
  errors: [
    AccessDeniedException,
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWebAppCustomization",
}));

export type DescribeWorkflowError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Describes the specified workflow.
 */
export const describeWorkflow: API.OperationMethod<
  DescribeWorkflowRequest,
  DescribeWorkflowResponse,
  DescribeWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeWorkflowRequest,
  output: DescribeWorkflowResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkflow",
}));

export type ImportCertificateError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles.
 *
 * You can import both the certificate and its chain in the `Certificate` parameter.
 *
 * After importing a certificate, Transfer Family automatically creates a Amazon CloudWatch metric called `DaysUntilExpiry` that tracks the number of days until the certificate expires. The metric is based on the `InactiveDate` parameter and is published daily in the `AWS/Transfer` namespace.
 *
 * It can take up to a full day after importing a certificate for Transfer Family to emit the `DaysUntilExpiry` metric to your account.
 *
 * If you use the `Certificate` parameter to upload both the certificate and its chain, don't use the `CertificateChain` parameter.
 *
 * **CloudWatch monitoring**
 *
 * The `DaysUntilExpiry` metric includes the following specifications:
 *
 * - **Units:** Count (days)
 *
 * - **Dimensions:** `CertificateId` (always present), `Description` (if provided during certificate import)
 *
 * - **Statistics:** Minimum, Maximum, Average
 *
 * - **Frequency:** Published daily
 */
export const importCertificate: API.OperationMethod<
  ImportCertificateRequest,
  ImportCertificateResponse,
  ImportCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ImportCertificateRequest,
  output: ImportCertificateResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportCertificate",
}));

export type ImportHostKeyError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Adds a host key to the server that's specified by the `ServerId` parameter.
 */
export const importHostKey: API.OperationMethod<
  ImportHostKeyRequest,
  ImportHostKeyResponse,
  ImportHostKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ImportHostKeyRequest,
  output: ImportHostKeyResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportHostKey",
}));

export type ImportSshPublicKeyError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Adds a Secure Shell (SSH) public key to a Transfer Family user identified by a `UserName` value assigned to the specific file transfer protocol-enabled server, identified by `ServerId`.
 *
 * The response returns the `UserName` value, the `ServerId` value, and the name of the `SshPublicKeyId`.
 */
export const importSshPublicKey: API.OperationMethod<
  ImportSshPublicKeyRequest,
  ImportSshPublicKeyResponse,
  ImportSshPublicKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ImportSshPublicKeyRequest,
  output: ImportSshPublicKeyResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportSshPublicKey",
}));

export type ListAccessesError =
  | InternalServiceError
  | InvalidNextTokenException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists the details for all the accesses you have on your server.
 */
export const listAccesses: API.PaginatedOperationMethod<
  ListAccessesRequest,
  ListAccessesResponse,
  ListAccessesError,
  Credentials | HttpClient.HttpClient,
  ListedAccess
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessesRequest,
  output: ListAccessesResponse,
  errors: [
    InternalServiceError,
    InvalidNextTokenException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccesses",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Accesses",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAgreementsError =
  | InternalServiceError
  | InvalidNextTokenException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of the agreements for the server that's identified by the `ServerId` that you supply. If you want to limit the results to a certain number, supply a value for the `MaxResults` parameter. If you ran the command previously and received a value for `NextToken`, you can supply that value to continue listing agreements from where you left off.
 */
export const listAgreements: API.PaginatedOperationMethod<
  ListAgreementsRequest,
  ListAgreementsResponse,
  ListAgreementsError,
  Credentials | HttpClient.HttpClient,
  ListedAgreement
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAgreementsRequest,
  output: ListAgreementsResponse,
  errors: [
    InternalServiceError,
    InvalidNextTokenException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgreements",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Agreements",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCertificatesError =
  | InternalServiceError
  | InvalidNextTokenException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the `MaxResults` parameter. If you ran the command previously and received a value for the `NextToken` parameter, you can supply that value to continue listing certificates from where you left off.
 */
export const listCertificates: API.PaginatedOperationMethod<
  ListCertificatesRequest,
  ListCertificatesResponse,
  ListCertificatesError,
  Credentials | HttpClient.HttpClient,
  ListedCertificate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCertificatesRequest,
  output: ListCertificatesResponse,
  errors: [
    InternalServiceError,
    InvalidNextTokenException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCertificates",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Certificates",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListConnectorsError =
  | InternalServiceError
  | InvalidNextTokenException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists the connectors for the specified Region.
 */
export const listConnectors: API.PaginatedOperationMethod<
  ListConnectorsRequest,
  ListConnectorsResponse,
  ListConnectorsError,
  Credentials | HttpClient.HttpClient,
  ListedConnector
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListConnectorsRequest,
  output: ListConnectorsResponse,
  errors: [
    InternalServiceError,
    InvalidNextTokenException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnectors",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Connectors",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListExecutionsError =
  | InternalServiceError
  | InvalidNextTokenException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists all in-progress executions for the specified workflow.
 *
 * If the specified workflow ID cannot be found, `ListExecutions` returns a `ResourceNotFound` exception.
 */
export const listExecutions: API.PaginatedOperationMethod<
  ListExecutionsRequest,
  ListExecutionsResponse,
  ListExecutionsError,
  Credentials | HttpClient.HttpClient,
  ListedExecution
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListExecutionsRequest,
  output: ListExecutionsResponse,
  errors: [
    InternalServiceError,
    InvalidNextTokenException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExecutions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Executions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFileTransferResultsError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns real-time updates and detailed information on the status of each individual file being transferred in a specific file transfer operation. You specify the file transfer by providing its `ConnectorId` and its `TransferId`.
 *
 * File transfer results are available up to 7 days after an operation has been requested.
 */
export const listFileTransferResults: API.PaginatedOperationMethod<
  ListFileTransferResultsRequest,
  ListFileTransferResultsResponse,
  ListFileTransferResultsError,
  Credentials | HttpClient.HttpClient,
  ConnectorFileTransferResult
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFileTransferResultsRequest,
  output: ListFileTransferResultsResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFileTransferResults",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "FileTransferResults",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListHostKeysError =
  | InternalServiceError
  | InvalidNextTokenException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of host keys for the server that's specified by the `ServerId` parameter.
 */
export const listHostKeys: API.OperationMethod<
  ListHostKeysRequest,
  ListHostKeysResponse,
  ListHostKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListHostKeysRequest,
  output: ListHostKeysResponse,
  errors: [
    InternalServiceError,
    InvalidNextTokenException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListHostKeys",
}));

export type ListProfilesError =
  | InternalServiceError
  | InvalidNextTokenException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the `MaxResults` parameter. If you ran the command previously and received a value for `NextToken`, you can supply that value to continue listing profiles from where you left off.
 */
export const listProfiles: API.PaginatedOperationMethod<
  ListProfilesRequest,
  ListProfilesResponse,
  ListProfilesError,
  Credentials | HttpClient.HttpClient,
  ListedProfile
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProfilesRequest,
  output: ListProfilesResponse,
  errors: [
    InternalServiceError,
    InvalidNextTokenException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProfiles",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Profiles",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSecurityPoliciesError =
  | InternalServiceError
  | InvalidNextTokenException
  | InvalidRequestException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists the security policies that are attached to your servers and SFTP connectors. For more information about security policies, see Working with security policies for servers or Working with security policies for SFTP connectors.
 */
export const listSecurityPolicies: API.PaginatedOperationMethod<
  ListSecurityPoliciesRequest,
  ListSecurityPoliciesResponse,
  ListSecurityPoliciesError,
  Credentials | HttpClient.HttpClient,
  SecurityPolicyName
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSecurityPoliciesRequest,
  output: ListSecurityPoliciesResponse,
  errors: [
    InternalServiceError,
    InvalidNextTokenException,
    InvalidRequestException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSecurityPolicies",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SecurityPolicyNames",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListServersError =
  | InternalServiceError
  | InvalidNextTokenException
  | InvalidRequestException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.
 */
export const listServers: API.PaginatedOperationMethod<
  ListServersRequest,
  ListServersResponse,
  ListServersError,
  Credentials | HttpClient.HttpClient,
  ListedServer
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListServersRequest,
  output: ListServersResponse,
  errors: [
    InternalServiceError,
    InvalidNextTokenException,
    InvalidRequestException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Servers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServiceError
  | InvalidNextTokenException
  | InvalidRequestException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.
 */
export const listTagsForResource: API.PaginatedOperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    InternalServiceError,
    InvalidNextTokenException,
    InvalidRequestException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Tags",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListUsersError =
  | InternalServiceError
  | InvalidNextTokenException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists the users for a file transfer protocol-enabled server that you specify by passing the `ServerId` parameter.
 */
export const listUsers: API.PaginatedOperationMethod<
  ListUsersRequest,
  ListUsersResponse,
  ListUsersError,
  Credentials | HttpClient.HttpClient,
  ListedUser
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUsersRequest,
  output: ListUsersResponse,
  errors: [
    InternalServiceError,
    InvalidNextTokenException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUsers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Users",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListWebAppsError =
  | InternalServiceError
  | InvalidNextTokenException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists all web apps associated with your Amazon Web Services account for your current region. The response includes the endpoint type for each web app, showing whether it is publicly accessible or VPC hosted.
 *
 * For more information about using VPC endpoints with Transfer Family, see Create a Transfer Family web app in a VPC.
 */
export const listWebApps: API.PaginatedOperationMethod<
  ListWebAppsRequest,
  ListWebAppsResponse,
  ListWebAppsError,
  Credentials | HttpClient.HttpClient,
  ListedWebApp
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWebAppsRequest,
  output: ListWebAppsResponse,
  errors: [
    InternalServiceError,
    InvalidNextTokenException,
    InvalidRequestException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWebApps",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "WebApps",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListWorkflowsError =
  | InternalServiceError
  | InvalidNextTokenException
  | InvalidRequestException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists all workflows associated with your Amazon Web Services account for your current region.
 */
export const listWorkflows: API.PaginatedOperationMethod<
  ListWorkflowsRequest,
  ListWorkflowsResponse,
  ListWorkflowsError,
  Credentials | HttpClient.HttpClient,
  ListedWorkflow
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWorkflowsRequest,
  output: ListWorkflowsResponse,
  errors: [
    InternalServiceError,
    InvalidNextTokenException,
    InvalidRequestException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkflows",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Workflows",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type SendWorkflowStepStateError =
  | AccessDeniedException
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Sends a callback for asynchronous custom steps.
 *
 * The `ExecutionId`, `WorkflowId`, and `Token` are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status.
 */
export const sendWorkflowStepState: API.OperationMethod<
  SendWorkflowStepStateRequest,
  SendWorkflowStepStateResponse,
  SendWorkflowStepStateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendWorkflowStepStateRequest,
  output: SendWorkflowStepStateResponse,
  errors: [
    AccessDeniedException,
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendWorkflowStepState",
}));

export type StartDirectoryListingError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a list of the contents of a directory from a remote SFTP server. You specify the connector ID, the output path, and the remote directory path. You can also specify the optional `MaxItems` value to control the maximum number of items that are listed from the remote directory. This API returns a list of all files and directories in the remote directory (up to the maximum value), but does not return files or folders in sub-directories. That is, it only returns a list of files and directories one-level deep.
 *
 * After you receive the listing file, you can provide the files that you want to transfer to the `RetrieveFilePaths` parameter of the `StartFileTransfer` API call.
 *
 * The naming convention for the output file is ` *connector-ID*-*listing-ID*.json`. The output file contains the following information:
 *
 * - `filePath`: the complete path of a remote file, relative to the directory of the listing request for your SFTP connector on the remote server.
 *
 * - `modifiedTimestamp`: the last time the file was modified, in UTC time format. This field is optional. If the remote file attributes don't contain a timestamp, it is omitted from the file listing.
 *
 * - `size`: the size of the file, in bytes. This field is optional. If the remote file attributes don't contain a file size, it is omitted from the file listing.
 *
 * - `path`: the complete path of a remote directory, relative to the directory of the listing request for your SFTP connector on the remote server.
 *
 * - `truncated`: a flag indicating whether the list output contains all of the items contained in the remote directory or not. If your `Truncated` output value is true, you can increase the value provided in the optional `max-items` input attribute to be able to list more items (up to the maximum allowed list size of 200,000 items).
 */
export const startDirectoryListing: API.OperationMethod<
  StartDirectoryListingRequest,
  StartDirectoryListingResponse,
  StartDirectoryListingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartDirectoryListingRequest,
  output: StartDirectoryListingResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDirectoryListing",
}));

export type StartFileTransferError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Begins a file transfer between local Amazon Web Services storage and a remote AS2 or SFTP server.
 *
 * - For an AS2 connector, you specify the `ConnectorId` and one or more `SendFilePaths` to identify the files you want to transfer.
 *
 * - For an SFTP connector, the file transfer can be either outbound or inbound. In both cases, you specify the `ConnectorId`. Depending on the direction of the transfer, you also specify the following items:
 *
 * - If you are transferring file from a partner's SFTP server to Amazon Web Services storage, you specify one or more `RetrieveFilePaths` to identify the files you want to transfer, and a `LocalDirectoryPath` to specify the destination folder.
 *
 * - If you are transferring file to a partner's SFTP server from Amazon Web Services storage, you specify one or more `SendFilePaths` to identify the files you want to transfer, and a `RemoteDirectoryPath` to specify the destination folder.
 */
export const startFileTransfer: API.OperationMethod<
  StartFileTransferRequest,
  StartFileTransferResponse,
  StartFileTransferError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartFileTransferRequest,
  output: StartFileTransferResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartFileTransfer",
}));

export type StartRemoteDeleteError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a file or directory on the remote SFTP server.
 */
export const startRemoteDelete: API.OperationMethod<
  StartRemoteDeleteRequest,
  StartRemoteDeleteResponse,
  StartRemoteDeleteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartRemoteDeleteRequest,
  output: StartRemoteDeleteResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartRemoteDelete",
}));

export type StartRemoteMoveError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Moves or renames a file or directory on the remote SFTP server.
 */
export const startRemoteMove: API.OperationMethod<
  StartRemoteMoveRequest,
  StartRemoteMoveResponse,
  StartRemoteMoveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartRemoteMoveRequest,
  output: StartRemoteMoveResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartRemoteMove",
}));

export type StartServerError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Changes the state of a file transfer protocol-enabled server from `OFFLINE` to `ONLINE`. It has no impact on a server that is already `ONLINE`. An `ONLINE` server can accept and process file transfer jobs.
 *
 * The state of `STARTING` indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of `START_FAILED` can indicate an error condition.
 *
 * No response is returned from this call.
 */
export const startServer: API.OperationMethod<
  StartServerRequest,
  StartServerResponse,
  StartServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartServerRequest,
  output: StartServerResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartServer",
}));

export type StopServerError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Changes the state of a file transfer protocol-enabled server from `ONLINE` to `OFFLINE`. An `OFFLINE` server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server.
 *
 * Stopping the server does not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed.
 *
 * The state of `STOPPING` indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of `STOP_FAILED` can indicate an error condition.
 *
 * No response is returned from this call.
 */
export const stopServer: API.OperationMethod<
  StopServerRequest,
  StopServerResponse,
  StopServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopServerRequest,
  output: StopServerResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopServer",
}));

export type TagResourceError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.
 *
 * There is no response returned from this call.
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
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type TestConnectionError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Tests whether your SFTP connector is set up successfully. We highly recommend that you call this operation to test your ability to transfer files between local Amazon Web Services storage and a trading partner's SFTP server.
 */
export const testConnection: API.OperationMethod<
  TestConnectionRequest,
  TestConnectionResponse,
  TestConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestConnectionRequest,
  output: TestConnectionResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TestConnection",
}));

export type TestIdentityProviderError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * If the `IdentityProviderType` of a file transfer protocol-enabled server is `AWS_DIRECTORY_SERVICE` or `API_Gateway`, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.
 *
 * The `ServerId` and `UserName` parameters are required. The `ServerProtocol`, `SourceIp`, and `UserPassword` are all optional.
 *
 * Note the following:
 *
 * - You cannot use `TestIdentityProvider` if the `IdentityProviderType` of your server is `SERVICE_MANAGED`.
 *
 * - `TestIdentityProvider` does not work with keys: it only accepts passwords.
 *
 * - `TestIdentityProvider` can test the password operation for a custom Identity Provider that handles keys and passwords.
 *
 * - If you provide any incorrect values for any parameters, the `Response` field is empty.
 *
 * - If you provide a server ID for a server that uses service-managed users, you get an error:
 *
 * ` An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-*server-ID* not configured for external auth `
 *
 * - If you enter a Server ID for the `--server-id` parameter that does not identify an actual Transfer server, you receive the following error:
 *
 * `An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server`.
 *
 * It is possible your sever is in a different region. You can specify a region by adding the following: `--region region-code`, such as `--region us-east-2` to specify a server in **US East (Ohio)**.
 */
export const testIdentityProvider: API.OperationMethod<
  TestIdentityProviderRequest,
  TestIdentityProviderResponse,
  TestIdentityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestIdentityProviderRequest,
  output: TestIdentityProviderResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TestIdentityProvider",
}));

export type UntagResourceError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.
 *
 * No response is returned from this call.
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
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAccessError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Allows you to update parameters for the access specified in the `ServerID` and `ExternalID` parameters.
 */
export const updateAccess: API.OperationMethod<
  UpdateAccessRequest,
  UpdateAccessResponse,
  UpdateAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAccessRequest,
  output: UpdateAccessResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAccess",
}));

export type UpdateAgreementError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates some of the parameters for an existing agreement. Provide the `AgreementId` and the `ServerId` for the agreement that you want to update, along with the new values for the parameters to update.
 *
 * Specify *either* `BaseDirectory` or `CustomDirectories`, but not both. Specifying both causes the command to fail.
 *
 * If you update an agreement from using base directory to custom directories, the base directory is no longer used. Similarly, if you change from custom directories to a base directory, the custom directories are no longer used.
 */
export const updateAgreement: API.OperationMethod<
  UpdateAgreementRequest,
  UpdateAgreementResponse,
  UpdateAgreementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAgreementRequest,
  output: UpdateAgreementResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAgreement",
}));

export type UpdateCertificateError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the active and inactive dates for a certificate.
 */
export const updateCertificate: API.OperationMethod<
  UpdateCertificateRequest,
  UpdateCertificateResponse,
  UpdateCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCertificateRequest,
  output: UpdateCertificateResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCertificate",
}));

export type UpdateConnectorError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates some of the parameters for an existing connector. Provide the `ConnectorId` for the connector that you want to update, along with the new values for the parameters to update.
 */
export const updateConnector: API.OperationMethod<
  UpdateConnectorRequest,
  UpdateConnectorResponse,
  UpdateConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConnectorRequest,
  output: UpdateConnectorResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConnector",
}));

export type UpdateHostKeyError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the description for the host key that's specified by the `ServerId` and `HostKeyId` parameters.
 */
export const updateHostKey: API.OperationMethod<
  UpdateHostKeyRequest,
  UpdateHostKeyResponse,
  UpdateHostKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateHostKeyRequest,
  output: UpdateHostKeyResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateHostKey",
}));

export type UpdateProfileError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates some of the parameters for an existing profile. Provide the `ProfileId` for the profile that you want to update, along with the new values for the parameters to update.
 */
export const updateProfile: API.OperationMethod<
  UpdateProfileRequest,
  UpdateProfileResponse,
  UpdateProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateProfileRequest,
  output: UpdateProfileResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProfile",
}));

export type UpdateServerError =
  | AccessDeniedException
  | ConflictException
  | InternalServiceError
  | InvalidRequestException
  | ResourceExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the file transfer protocol-enabled server's properties after that server has been created.
 *
 * The `UpdateServer` call returns the `ServerId` of the server you updated.
 */
export const updateServer: API.OperationMethod<
  UpdateServerRequest,
  UpdateServerResponse,
  UpdateServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateServerRequest,
  output: UpdateServerResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServiceError,
    InvalidRequestException,
    ResourceExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateServer",
}));

export type UpdateUserError =
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the `UserName` and `ServerId` you specify.
 *
 * The response returns the `ServerId` and the `UserName` for the updated user.
 *
 * In the console, you can select *Restricted* when you create or update a user. This ensures that the user can't access anything outside of their home directory. The programmatic way to configure this behavior is to update the user. Set their `HomeDirectoryType` to `LOGICAL`, and specify `HomeDirectoryMappings` with `Entry` as root (`/`) and `Target` as their home directory.
 *
 * For example, if the user's home directory is `/test/admin-user`, the following command updates the user so that their configuration in the console shows the *Restricted* flag as selected.
 *
 * ` aws transfer update-user --server-id <server-id> --user-name admin-user --home-directory-type LOGICAL --home-directory-mappings "[{\"Entry\":\"/\", \"Target\":\"/test/admin-user\"}]"`
 */
export const updateUser: API.OperationMethod<
  UpdateUserRequest,
  UpdateUserResponse,
  UpdateUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateUserRequest,
  output: UpdateUserResponse,
  errors: [
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateUser",
}));

export type UpdateWebAppError =
  | AccessDeniedException
  | ConflictException
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Assigns new properties to a web app. You can modify the access point, identity provider details, endpoint configuration, and the web app units.
 *
 * For more information about using VPC endpoints with Transfer Family, see Create a Transfer Family web app in a VPC.
 */
export const updateWebApp: API.OperationMethod<
  UpdateWebAppRequest,
  UpdateWebAppResponse,
  UpdateWebAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWebAppRequest,
  output: UpdateWebAppResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWebApp",
}));

export type UpdateWebAppCustomizationError =
  | AccessDeniedException
  | ConflictException
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Assigns new customization properties to a web app. You can modify the icon file, logo file, and title.
 */
export const updateWebAppCustomization: API.OperationMethod<
  UpdateWebAppCustomizationRequest,
  UpdateWebAppCustomizationResponse,
  UpdateWebAppCustomizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWebAppCustomizationRequest,
  output: UpdateWebAppCustomizationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServiceError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWebAppCustomization",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Entry: S.String, Target: S.String, Type: S.optional(MapType) }),
      ).annotate({ identifier: "HomeDirectoryMapEntry" });
    case 1:
      return S.Array(HomeDirectoryMapEntry);
    case 2:
      return S.Array(S.Number);
    case 3:
      return S.suspend(() =>
        S.Struct({ Uid: S.Number, Gid: S.Number, SecondaryGids: S.optional(SecondaryGids) }),
      ).annotate({ identifier: "PosixProfile" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          HomeDirectory: S.optional(S.String),
          HomeDirectoryType: S.optional(HomeDirectoryType),
          HomeDirectoryMappings: S.optional(HomeDirectoryMappings),
          Policy: S.optional(S.String),
          PosixProfile: S.optional(PosixProfile),
          Role: S.String,
          ServerId: S.String,
          ExternalId: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateAccessRequest" });
    case 5:
      return S.suspend(() => S.Struct({ ServerId: S.String, ExternalId: S.String })).annotate({
        identifier: "CreateAccessResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 7:
      return S.Array(Tag);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FailedFilesDirectory: S.String,
          MdnFilesDirectory: S.String,
          PayloadFilesDirectory: S.String,
          StatusFilesDirectory: S.String,
          TemporaryFilesDirectory: S.String,
        }),
      ).annotate({ identifier: "CustomDirectoriesType" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          ServerId: S.String,
          LocalProfileId: S.String,
          PartnerProfileId: S.String,
          BaseDirectory: S.optional(S.String),
          AccessRole: S.String,
          Status: S.optional(AgreementStatusType),
          Tags: S.optional(Tags),
          PreserveFilename: S.optional(PreserveFilenameType),
          EnforceMessageSigning: S.optional(EnforceMessageSigningType),
          CustomDirectories: S.optional(CustomDirectoriesType),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateAgreementRequest" });
    case 2:
      return S.suspend(() => S.Struct({ AgreementId: S.String })).annotate({
        identifier: "CreateAgreementResponse",
      });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({ Url: S.optional(S.String), ServerIds: S.optional(As2AsyncMdnServerIds) }),
      ).annotate({
        identifier: "As2AsyncMdnConnectorConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LocalProfileId: S.optional(S.String),
          PartnerProfileId: S.optional(S.String),
          MessageSubject: S.optional(SensitiveString),
          Compression: S.optional(CompressionEnum),
          EncryptionAlgorithm: S.optional(EncryptionAlg),
          SigningAlgorithm: S.optional(SigningAlg),
          MdnSigningAlgorithm: S.optional(MdnSigningAlg),
          MdnResponse: S.optional(MdnResponse),
          BasicAuthSecretId: S.optional(S.String),
          PreserveContentType: S.optional(PreserveContentType),
          AsyncMdnConfig: S.optional(As2AsyncMdnConnectorConfig),
        }),
      ).annotate({ identifier: "As2ConnectorConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UserSecretId: S.optional(S.String),
          TrustedHostKeys: S.optional(SftpConnectorTrustedHostKeyList),
          MaxConcurrentConnections: S.optional(S.Number),
          OrderedUserSecretVersionStages: S.optional(SecretVersionStageList),
        }),
      ).annotate({ identifier: "SftpConnectorConfig" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceConfigurationArn: S.String, PortNumber: S.optional(S.Number) }),
      ).annotate({
        identifier: "ConnectorVpcLatticeEgressConfig",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ VpcLattice: ConnectorVpcLatticeEgressConfig })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Url: S.optional(S.String),
          As2Config: S.optional(As2ConnectorConfig),
          AccessRole: S.String,
          LoggingRole: S.optional(S.String),
          Tags: S.optional(Tags),
          SftpConfig: S.optional(SftpConnectorConfig),
          SecurityPolicyName: S.optional(S.String),
          EgressConfig: S.optional(ConnectorEgressConfig),
          IpAddressType: S.optional(ConnectorsIpAddressType),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateConnectorRequest" });
    case 2:
      return S.suspend(() => S.Struct({ ConnectorId: S.String })).annotate({
        identifier: "CreateConnectorResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          As2Id: S.String,
          ProfileType: ProfileType,
          CertificateIds: S.optional(CertificateIds),
          Tags: S.optional(Tags),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateProfileRequest" });
    case 4:
      return S.suspend(() => S.Struct({ ProfileId: S.String })).annotate({
        identifier: "CreateProfileResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AddressAllocationIds: S.optional(AddressAllocationIds),
          SubnetIds: S.optional(SubnetIds),
          VpcEndpointId: S.optional(S.String),
          VpcId: S.optional(S.String),
          SecurityGroupIds: S.optional(SecurityGroupIds),
        }),
      ).annotate({ identifier: "EndpointDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Url: S.optional(S.String),
          InvocationRole: S.optional(S.String),
          DirectoryId: S.optional(S.String),
          Function: S.optional(S.String),
          SftpAuthenticationMethods: S.optional(SftpAuthenticationMethods),
        }),
      ).annotate({ identifier: "IdentityProviderDetails" });
    case 7:
      return S.Array(Protocol);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SftpPort: S.Number, CommunicationMode: S.optional(CommunicationMode) }),
      ).annotate({ identifier: "SftpPortWithOptions" });
    case 1:
      return S.Array(SftpPortWithOptions);
    case 2:
      return S.suspend(() => S.Struct({ SftpMode: S.optional(ProxyMode) })).annotate({
        identifier: "ProxyConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PassiveIp: S.optional(S.String),
          TlsSessionResumptionMode: S.optional(TlsSessionResumptionMode),
          SetStatOption: S.optional(SetStatOption),
          SftpPorts: S.optional(SftpPorts),
          As2Transports: S.optional(As2Transports),
          ProxyConfig: S.optional(ProxyConfig),
        }),
      ).annotate({ identifier: "ProtocolDetails" });
    case 4:
      return S.suspend(() => S.Struct({ WorkflowId: S.String, ExecutionRole: S.String })).annotate({
        identifier: "WorkflowDetail",
      });
    case 5:
      return S.Array(WorkflowDetail);
    case 6:
      return S.suspend(() =>
        S.Struct({
          OnUpload: S.optional(OnUploadWorkflowDetails),
          OnPartialUpload: S.optional(OnPartialUploadWorkflowDetails),
        }),
      ).annotate({ identifier: "WorkflowDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({ DirectoryListingOptimization: S.optional(DirectoryListingOptimization) }),
      ).annotate({ identifier: "S3StorageOptions" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Certificate: S.optional(S.String),
          Domain: S.optional(Domain),
          EndpointDetails: S.optional(EndpointDetails),
          EndpointType: S.optional(EndpointType),
          HostKey: S.optional(SensitiveString),
          IdentityProviderDetails: S.optional(IdentityProviderDetails),
          IdentityProviderType: S.optional(IdentityProviderType),
          LoggingRole: S.optional(S.String),
          PostAuthenticationLoginBanner: S.optional(S.String),
          PreAuthenticationLoginBanner: S.optional(S.String),
          Protocols: S.optional(Protocols),
          ProtocolDetails: S.optional(ProtocolDetails),
          SecurityPolicyName: S.optional(S.String),
          Tags: S.optional(Tags),
          WorkflowDetails: S.optional(WorkflowDetails),
          StructuredLogDestinations: S.optional(StructuredLogDestinations),
          S3StorageOptions: S.optional(S3StorageOptions),
          IpAddressType: S.optional(IpAddressType),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateServerRequest" });
    case 1:
      return S.suspend(() => S.Struct({ ServerId: S.String })).annotate({
        identifier: "CreateServerResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          HomeDirectory: S.optional(S.String),
          HomeDirectoryType: S.optional(HomeDirectoryType),
          HomeDirectoryMappings: S.optional(HomeDirectoryMappings),
          Policy: S.optional(S.String),
          PosixProfile: S.optional(PosixProfile),
          Role: S.String,
          ServerId: S.String,
          SshPublicKeyBody: S.optional(S.String),
          Tags: S.optional(Tags),
          UserName: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateUserRequest" });
    case 3:
      return S.suspend(() => S.Struct({ ServerId: S.String, UserName: S.String })).annotate({
        identifier: "CreateUserResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.optional(S.String), Role: S.optional(S.String) }),
      ).annotate({ identifier: "IdentityCenterConfig" });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ IdentityCenterConfig: IdentityCenterConfig })]);
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ Provisioned: S.Number })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          SubnetIds: S.optional(SubnetIds),
          VpcId: S.optional(S.String),
          SecurityGroupIds: S.optional(SecurityGroupIds),
          IpAddressType: S.optional(WebAppVpcEndpointIpAddressType),
        }),
      ).annotate({ identifier: "WebAppVpcConfig" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ Vpc: WebAppVpcConfig })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          IdentityProviderDetails: WebAppIdentityProviderDetails,
          AccessEndpoint: S.optional(S.String),
          WebAppUnits: S.optional(WebAppUnits),
          Tags: S.optional(Tags),
          WebAppEndpointPolicy: S.optional(WebAppEndpointPolicy),
          EndpointDetails: S.optional(WebAppEndpointDetails),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/createWebApp" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateWebAppRequest" });
    case 2:
      return S.suspend(() => S.Struct({ WebAppId: S.String })).annotate({
        identifier: "CreateWebAppResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Bucket: S.optional(S.String), Key: S.optional(S.String) }),
      ).annotate({ identifier: "S3InputFileLocation" });
    case 4:
      return S.suspend(() =>
        S.Struct({ FileSystemId: S.optional(S.String), Path: S.optional(S.String) }),
      ).annotate({ identifier: "EfsFileLocation" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          S3FileLocation: S.optional(S3InputFileLocation),
          EfsFileLocation: S.optional(EfsFileLocation),
        }),
      ).annotate({ identifier: "InputFileLocation" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          DestinationFileLocation: S.optional(InputFileLocation),
          OverwriteExisting: S.optional(OverwriteExisting),
          SourceFileLocation: S.optional(S.String),
        }),
      ).annotate({ identifier: "CopyStepDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Target: S.optional(S.String),
          TimeoutSeconds: S.optional(S.Number),
          SourceFileLocation: S.optional(S.String),
        }),
      ).annotate({ identifier: "CustomStepDetails" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), SourceFileLocation: S.optional(S.String) }),
      ).annotate({ identifier: "DeleteStepDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Tags: S.optional(S3Tags),
          SourceFileLocation: S.optional(S.String),
        }),
      ).annotate({ identifier: "TagStepDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Type: EncryptionType,
          SourceFileLocation: S.optional(S.String),
          OverwriteExisting: S.optional(OverwriteExisting),
          DestinationFileLocation: InputFileLocation,
        }),
      ).annotate({ identifier: "DecryptStepDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(WorkflowStepType),
          CopyStepDetails: S.optional(CopyStepDetails),
          CustomStepDetails: S.optional(CustomStepDetails),
          DeleteStepDetails: S.optional(DeleteStepDetails),
          TagStepDetails: S.optional(TagStepDetails),
          DecryptStepDetails: S.optional(DecryptStepDetails),
        }),
      ).annotate({ identifier: "WorkflowStep" });
    case 4:
      return S.Array(WorkflowStep);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          Steps: WorkflowSteps,
          OnExceptionSteps: S.optional(WorkflowSteps),
          Tags: S.optional(Tags),
          StructuredLogDestinations: S.optional(StructuredLogDestinations),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateWorkflowRequest" });
    case 6:
      return S.suspend(() => S.Struct({ WorkflowId: S.String })).annotate({
        identifier: "CreateWorkflowResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ServerId: S.String, ExternalId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteAccessRequest" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAccessResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AgreementId: S.String, ServerId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteAgreementRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ CertificateId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteCertificateRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ConnectorId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteConnectorRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ServerId: S.String, HostKeyId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteHostKeyRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ProfileId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteProfileRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ServerId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteServerRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ServerId: S.String, SshPublicKeyId: S.String, UserName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSshPublicKeyRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ServerId: S.String, UserName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteUserRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ WebAppId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/deleteWebApp" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteWebAppRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ WebAppId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/deleteWebAppCustomization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteWebAppCustomizationRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteWebAppCustomizationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ WorkflowId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteWorkflowRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ServerId: S.String, ExternalId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeAccessRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          HomeDirectory: S.optional(S.String),
          HomeDirectoryMappings: S.optional(HomeDirectoryMappings),
          HomeDirectoryType: S.optional(HomeDirectoryType),
          Policy: S.optional(S.String),
          PosixProfile: S.optional(PosixProfile),
          Role: S.optional(S.String),
          ExternalId: S.optional(S.String),
        }),
      ).annotate({ identifier: "DescribedAccess" });
    case 7:
      return S.suspend(() => S.Struct({ ServerId: S.String, Access: DescribedAccess })).annotate({
        identifier: "DescribeAccessResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AgreementId: S.String, ServerId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeAgreementRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          AgreementId: S.optional(S.String),
          Description: S.optional(S.String),
          Status: S.optional(AgreementStatusType),
          ServerId: S.optional(S.String),
          LocalProfileId: S.optional(S.String),
          PartnerProfileId: S.optional(S.String),
          BaseDirectory: S.optional(S.String),
          AccessRole: S.optional(S.String),
          Tags: S.optional(Tags),
          PreserveFilename: S.optional(PreserveFilenameType),
          EnforceMessageSigning: S.optional(EnforceMessageSigningType),
          CustomDirectories: S.optional(CustomDirectoriesType),
        }),
      ).annotate({ identifier: "DescribedAgreement" });
    case 2:
      return S.suspend(() => S.Struct({ Agreement: DescribedAgreement })).annotate({
        identifier: "DescribeAgreementResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ CertificateId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeCertificateRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          CertificateId: S.optional(S.String),
          Usage: S.optional(CertificateUsageType),
          Status: S.optional(CertificateStatusType),
          Certificate: S.optional(SensitiveString),
          CertificateChain: S.optional(SensitiveString),
          ActiveDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InactiveDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Serial: S.optional(S.String),
          NotBeforeDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          NotAfterDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Type: S.optional(CertificateType),
          Description: S.optional(S.String),
          Tags: S.optional(Tags),
        }),
      ).annotate({ identifier: "DescribedCertificate" });
    case 5:
      return S.suspend(() => S.Struct({ Certificate: DescribedCertificate })).annotate({
        identifier: "DescribeCertificateResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ConnectorId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeConnectorRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          ConnectorId: S.optional(S.String),
          Url: S.optional(S.String),
          As2Config: S.optional(As2ConnectorConfig),
          AccessRole: S.optional(S.String),
          LoggingRole: S.optional(S.String),
          Tags: S.optional(Tags),
          SftpConfig: S.optional(SftpConnectorConfig),
          ServiceManagedEgressIpAddresses: S.optional(ServiceManagedEgressIpAddresses),
          SecurityPolicyName: S.optional(S.String),
          EgressConfig: S.optional(DescribedConnectorEgressConfig),
          EgressType: ConnectorEgressType,
          ErrorMessage: S.optional(S.String),
          Status: ConnectorStatus,
          IpAddressType: S.optional(ConnectorsIpAddressType),
        }),
      ).annotate({ identifier: "DescribedConnector" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Connector: DescribedConnector })).annotate({
        identifier: "DescribeConnectorResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ExecutionId: S.String, WorkflowId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeExecutionRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Bucket: S.optional(S.String),
          Key: S.optional(S.String),
          VersionId: S.optional(S.String),
          Etag: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3FileLocation" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          S3FileLocation: S.optional(S3FileLocation),
          EfsFileLocation: S.optional(EfsFileLocation),
        }),
      ).annotate({ identifier: "FileLocation" });
    case 4:
      return S.suspend(() =>
        S.Struct({ UserName: S.String, ServerId: S.String, SessionId: S.optional(S.String) }),
      ).annotate({ identifier: "UserDetails" });
    case 5:
      return S.suspend(() => S.Struct({ UserDetails: UserDetails })).annotate({
        identifier: "ServiceMetadata",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ LoggingRole: S.optional(S.String), LogGroupName: S.optional(S.String) }),
      ).annotate({ identifier: "LoggingConfiguration" });
    case 7:
      return S.suspend(() => S.Struct({ Type: ExecutionErrorType, Message: S.String })).annotate({
        identifier: "ExecutionError",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StepType: S.optional(WorkflowStepType),
          Outputs: S.optional(S.String),
          Error: S.optional(ExecutionError),
        }),
      ).annotate({ identifier: "ExecutionStepResult" });
    case 1:
      return S.Array(ExecutionStepResult);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Steps: S.optional(ExecutionStepResults),
          OnExceptionSteps: S.optional(ExecutionStepResults),
        }),
      ).annotate({ identifier: "ExecutionResults" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ExecutionId: S.optional(S.String),
          InitialFileLocation: S.optional(FileLocation),
          ServiceMetadata: S.optional(ServiceMetadata),
          ExecutionRole: S.optional(S.String),
          LoggingConfiguration: S.optional(LoggingConfiguration),
          PosixProfile: S.optional(PosixProfile),
          Status: S.optional(ExecutionStatus),
          Results: S.optional(ExecutionResults),
        }),
      ).annotate({ identifier: "DescribedExecution" });
    case 4:
      return S.suspend(() =>
        S.Struct({ WorkflowId: S.String, Execution: DescribedExecution }),
      ).annotate({
        identifier: "DescribeExecutionResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ServerId: S.String, HostKeyId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeHostKeyRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          HostKeyId: S.optional(S.String),
          HostKeyFingerprint: S.optional(S.String),
          Description: S.optional(S.String),
          Type: S.optional(S.String),
          DateImported: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(Tags),
        }),
      ).annotate({ identifier: "DescribedHostKey" });
    case 7:
      return S.suspend(() => S.Struct({ HostKey: DescribedHostKey })).annotate({
        identifier: "DescribeHostKeyResponse",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ProfileId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeProfileRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          ProfileId: S.optional(S.String),
          ProfileType: S.optional(ProfileType),
          As2Id: S.optional(S.String),
          CertificateIds: S.optional(CertificateIds),
          Tags: S.optional(Tags),
        }),
      ).annotate({ identifier: "DescribedProfile" });
    case 2:
      return S.suspend(() => S.Struct({ Profile: DescribedProfile })).annotate({
        identifier: "DescribeProfileResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ SecurityPolicyName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeSecurityPolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Fips: S.optional(S.Boolean),
          SecurityPolicyName: S.String,
          SshCiphers: S.optional(SecurityPolicyOptions),
          SshKexs: S.optional(SecurityPolicyOptions),
          SshMacs: S.optional(SecurityPolicyOptions),
          TlsCiphers: S.optional(SecurityPolicyOptions),
          SshHostKeyAlgorithms: S.optional(SecurityPolicyOptions),
          Type: S.optional(SecurityPolicyResourceType),
          Protocols: S.optional(SecurityPolicyProtocols),
        }),
      ).annotate({ identifier: "DescribedSecurityPolicy" });
    case 5:
      return S.suspend(() => S.Struct({ SecurityPolicy: DescribedSecurityPolicy })).annotate({
        identifier: "DescribeSecurityPolicyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ServerId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeServerRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Certificate: S.optional(S.String),
          ProtocolDetails: S.optional(ProtocolDetails),
          Domain: S.optional(Domain),
          EndpointDetails: S.optional(EndpointDetails),
          EndpointType: S.optional(EndpointType),
          HostKeyFingerprint: S.optional(S.String),
          IdentityProviderDetails: S.optional(IdentityProviderDetails),
          IdentityProviderType: S.optional(IdentityProviderType),
          LoggingRole: S.optional(S.String),
          PostAuthenticationLoginBanner: S.optional(S.String),
          PreAuthenticationLoginBanner: S.optional(S.String),
          Protocols: S.optional(Protocols),
          SecurityPolicyName: S.optional(S.String),
          ServerId: S.optional(S.String),
          State: S.optional(State),
          Tags: S.optional(Tags),
          UserCount: S.optional(S.Number),
          WorkflowDetails: S.optional(WorkflowDetails),
          StructuredLogDestinations: S.optional(StructuredLogDestinations),
          S3StorageOptions: S.optional(S3StorageOptions),
          As2ServiceManagedEgressIpAddresses: S.optional(ServiceManagedEgressIpAddresses),
          IpAddressType: S.optional(IpAddressType),
        }),
      ).annotate({ identifier: "DescribedServer" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Server: DescribedServer })).annotate({
        identifier: "DescribeServerResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ServerId: S.String, UserName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeUserRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DateImported: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          SshPublicKeyBody: S.String,
          SshPublicKeyId: S.String,
        }),
      ).annotate({ identifier: "SshPublicKey" });
    case 3:
      return S.Array(SshPublicKey);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          HomeDirectory: S.optional(S.String),
          HomeDirectoryMappings: S.optional(HomeDirectoryMappings),
          HomeDirectoryType: S.optional(HomeDirectoryType),
          Policy: S.optional(S.String),
          PosixProfile: S.optional(PosixProfile),
          Role: S.optional(S.String),
          SshPublicKeys: S.optional(SshPublicKeys),
          Tags: S.optional(Tags),
          UserName: S.optional(S.String),
        }),
      ).annotate({ identifier: "DescribedUser" });
    case 5:
      return S.suspend(() => S.Struct({ ServerId: S.String, User: DescribedUser })).annotate({
        identifier: "DescribeUserResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ WebAppId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/describeWebApp" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeWebAppRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationArn: S.optional(S.String),
          InstanceArn: S.optional(S.String),
          Role: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribedIdentityCenterConfig",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ IdentityCenterConfig: DescribedIdentityCenterConfig }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          SubnetIds: S.optional(SubnetIds),
          VpcId: S.optional(S.String),
          VpcEndpointId: S.optional(S.String),
        }),
      ).annotate({ identifier: "DescribedWebAppVpcConfig" });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ Vpc: DescribedWebAppVpcConfig })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          WebAppId: S.String,
          DescribedIdentityProviderDetails: S.optional(DescribedWebAppIdentityProviderDetails),
          AccessEndpoint: S.optional(S.String),
          WebAppEndpoint: S.optional(S.String),
          WebAppUnits: S.optional(WebAppUnits),
          Tags: S.optional(Tags),
          WebAppEndpointPolicy: S.optional(WebAppEndpointPolicy),
          EndpointType: S.optional(WebAppEndpointType),
          DescribedEndpointDetails: S.optional(DescribedWebAppEndpointDetails),
        }),
      ).annotate({ identifier: "DescribedWebApp" });
    case 4:
      return S.suspend(() => S.Struct({ WebApp: DescribedWebApp })).annotate({
        identifier: "DescribeWebAppResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ WebAppId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describeWebAppCustomization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeWebAppCustomizationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          WebAppId: S.String,
          Title: S.optional(S.String),
          LogoFile: S.optional(SensitiveBlob),
          FaviconFile: S.optional(SensitiveBlob),
        }),
      ).annotate({
        identifier: "DescribedWebAppCustomization",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ WebAppCustomization: DescribedWebAppCustomization }),
      ).annotate({
        identifier: "DescribeWebAppCustomizationResponse",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ WorkflowId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeWorkflowRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Description: S.optional(S.String),
          Steps: S.optional(WorkflowSteps),
          OnExceptionSteps: S.optional(WorkflowSteps),
          WorkflowId: S.optional(S.String),
          Tags: S.optional(Tags),
          StructuredLogDestinations: S.optional(StructuredLogDestinations),
        }),
      ).annotate({ identifier: "DescribedWorkflow" });
    case 2:
      return S.suspend(() => S.Struct({ Workflow: DescribedWorkflow })).annotate({
        identifier: "DescribeWorkflowResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Usage: CertificateUsageType,
          Certificate: SensitiveString,
          CertificateChain: S.optional(SensitiveString),
          PrivateKey: S.optional(SensitiveString),
          ActiveDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InactiveDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(S.String),
          Tags: S.optional(Tags),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ImportCertificateRequest" });
    case 4:
      return S.suspend(() => S.Struct({ CertificateId: S.String })).annotate({
        identifier: "ImportCertificateResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServerId: S.String,
          HostKeyBody: SensitiveString,
          Description: S.optional(S.String),
          Tags: S.optional(Tags),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ImportHostKeyRequest" });
    case 6:
      return S.suspend(() => S.Struct({ ServerId: S.String, HostKeyId: S.String })).annotate({
        identifier: "ImportHostKeyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ServerId: S.String, SshPublicKeyBody: S.String, UserName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ImportSshPublicKeyRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ServerId: S.String, SshPublicKeyId: S.String, UserName: S.String }),
      ).annotate({
        identifier: "ImportSshPublicKeyResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          ServerId: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAccessesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          HomeDirectory: S.optional(S.String),
          HomeDirectoryType: S.optional(HomeDirectoryType),
          Role: S.optional(S.String),
          ExternalId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListedAccess" });
    case 3:
      return S.Array(ListedAccess);
    case 4:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), ServerId: S.String, Accesses: ListedAccesses }),
      ).annotate({ identifier: "ListAccessesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          ServerId: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAgreementsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          AgreementId: S.optional(S.String),
          Description: S.optional(S.String),
          Status: S.optional(AgreementStatusType),
          ServerId: S.optional(S.String),
          LocalProfileId: S.optional(S.String),
          PartnerProfileId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListedAgreement" });
    case 7:
      return S.Array(ListedAgreement);
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Agreements: ListedAgreements }),
      ).annotate({ identifier: "ListAgreementsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListCertificatesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          CertificateId: S.optional(S.String),
          Usage: S.optional(CertificateUsageType),
          Status: S.optional(CertificateStatusType),
          ActiveDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InactiveDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Type: S.optional(CertificateType),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListedCertificate" });
    case 3:
      return S.Array(ListedCertificate);
    case 4:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Certificates: ListedCertificates }),
      ).annotate({ identifier: "ListCertificatesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListConnectorsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          ConnectorId: S.optional(S.String),
          Url: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListedConnector" });
    case 7:
      return S.Array(ListedConnector);
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Connectors: ListedConnectors }),
      ).annotate({ identifier: "ListConnectorsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          WorkflowId: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListExecutionsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ExecutionId: S.optional(S.String),
          InitialFileLocation: S.optional(FileLocation),
          ServiceMetadata: S.optional(ServiceMetadata),
          Status: S.optional(ExecutionStatus),
        }),
      ).annotate({ identifier: "ListedExecution" });
    case 3:
      return S.Array(ListedExecution);
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          WorkflowId: S.String,
          Executions: ListedExecutions,
        }),
      ).annotate({ identifier: "ListExecutionsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConnectorId: S.String,
          TransferId: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/listFileTransferResults" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListFileTransferResultsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FilePath: S.String,
          StatusCode: TransferTableStatus,
          FailureCode: S.optional(S.String),
          FailureMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ConnectorFileTransferResult",
      });
    case 7:
      return S.Array(ConnectorFileTransferResult);
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FileTransferResults: ConnectorFileTransferResults,
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListFileTransferResultsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          ServerId: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListHostKeysRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          HostKeyId: S.optional(S.String),
          Fingerprint: S.optional(S.String),
          Description: S.optional(S.String),
          Type: S.optional(S.String),
          DateImported: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ListedHostKey" });
    case 3:
      return S.Array(ListedHostKey);
    case 4:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), ServerId: S.String, HostKeys: ListedHostKeys }),
      ).annotate({ identifier: "ListHostKeysResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          ProfileType: S.optional(ProfileType),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListProfilesRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          ProfileId: S.optional(S.String),
          As2Id: S.optional(S.String),
          ProfileType: S.optional(ProfileType),
        }),
      ).annotate({ identifier: "ListedProfile" });
    case 7:
      return S.Array(ListedProfile);
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Profiles: ListedProfiles }),
      ).annotate({ identifier: "ListProfilesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListSecurityPoliciesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), SecurityPolicyNames: SecurityPolicyNames }),
      ).annotate({
        identifier: "ListSecurityPoliciesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListServersRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Domain: S.optional(Domain),
          IdentityProviderType: S.optional(IdentityProviderType),
          EndpointType: S.optional(EndpointType),
          LoggingRole: S.optional(S.String),
          ServerId: S.optional(S.String),
          State: S.optional(State),
          UserCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ListedServer" });
    case 5:
      return S.Array(ListedServer);
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Servers: ListedServers }),
      ).annotate({ identifier: "ListServersResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          NextToken: S.optional(S.String),
          Tags: S.optional(Tags),
        }),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          ServerId: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListUsersRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          HomeDirectory: S.optional(S.String),
          HomeDirectoryType: S.optional(HomeDirectoryType),
          Role: S.optional(S.String),
          SshPublicKeyCount: S.optional(S.Number),
          UserName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListedUser" });
    case 3:
      return S.Array(ListedUser);
    case 4:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), ServerId: S.String, Users: ListedUsers }),
      ).annotate({ identifier: "ListUsersResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/listWebApps" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListWebAppsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          WebAppId: S.String,
          AccessEndpoint: S.optional(S.String),
          WebAppEndpoint: S.optional(S.String),
          EndpointType: S.optional(WebAppEndpointType),
        }),
      ).annotate({ identifier: "ListedWebApp" });
    case 7:
      return S.Array(ListedWebApp);
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), WebApps: ListedWebApps }),
      ).annotate({ identifier: "ListWebAppsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListWorkflowsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          WorkflowId: S.optional(S.String),
          Description: S.optional(S.String),
          Arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListedWorkflow" });
    case 3:
      return S.Array(ListedWorkflow);
    case 4:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Workflows: ListedWorkflows }),
      ).annotate({ identifier: "ListWorkflowsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          WorkflowId: S.String,
          ExecutionId: S.String,
          Token: S.String,
          Status: CustomStepStatus,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SendWorkflowStepStateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ConnectorId: S.String,
          RemoteDirectoryPath: S.String,
          MaxItems: S.optional(S.Number),
          OutputDirectoryPath: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartDirectoryListingRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ ListingId: S.String, OutputFileName: S.String })).annotate({
        identifier: "StartDirectoryListingResponse",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(SensitiveString), Value: S.optional(SensitiveString) }),
      ).annotate({ identifier: "CustomHttpHeader" });
    case 1:
      return S.Array(CustomHttpHeader);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ConnectorId: S.String,
          SendFilePaths: S.optional(FilePaths),
          RetrieveFilePaths: S.optional(FilePaths),
          LocalDirectoryPath: S.optional(S.String),
          RemoteDirectoryPath: S.optional(S.String),
          CustomHttpHeaders: S.optional(CustomHttpHeaders),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartFileTransferRequest" });
    case 3:
      return S.suspend(() => S.Struct({ TransferId: S.String })).annotate({
        identifier: "StartFileTransferResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ConnectorId: S.String, DeletePath: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/startRemoteDelete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartRemoteDeleteRequest" });
    case 5:
      return S.suspend(() => S.Struct({ DeleteId: S.String })).annotate({
        identifier: "StartRemoteDeleteResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ConnectorId: S.String, SourcePath: S.String, TargetPath: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/startRemoteMove" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartRemoteMoveRequest" });
    case 7:
      return S.suspend(() => S.Struct({ MoveId: S.String })).annotate({
        identifier: "StartRemoteMoveResponse",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ServerId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartServerRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ServerId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopServerRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Arn: S.String, Tags: Tags }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ConnectorId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TestConnectionRequest" });
    case 4:
      return S.suspend(() => S.Struct({ HostKey: S.optional(S.String) })).annotate({
        identifier: "SftpConnectorConnectionDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConnectorId: S.optional(S.String),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          SftpConnectionDetails: S.optional(SftpConnectorConnectionDetails),
        }),
      ).annotate({ identifier: "TestConnectionResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ServerId: S.String,
          ServerProtocol: S.optional(Protocol),
          SourceIp: S.optional(S.String),
          UserName: S.String,
          UserPassword: S.optional(SensitiveString),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "TestIdentityProviderRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Response: S.optional(S.String),
          StatusCode: S.Number,
          Message: S.optional(S.String),
          Url: S.String,
        }),
      ).annotate({
        identifier: "TestIdentityProviderResponse",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Arn: S.String, TagKeys: TagKeys }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          HomeDirectory: S.optional(S.String),
          HomeDirectoryType: S.optional(HomeDirectoryType),
          HomeDirectoryMappings: S.optional(HomeDirectoryMappings),
          Policy: S.optional(S.String),
          PosixProfile: S.optional(PosixProfile),
          Role: S.optional(S.String),
          ServerId: S.String,
          ExternalId: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateAccessRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AgreementId: S.String,
          ServerId: S.String,
          Description: S.optional(S.String),
          Status: S.optional(AgreementStatusType),
          LocalProfileId: S.optional(S.String),
          PartnerProfileId: S.optional(S.String),
          BaseDirectory: S.optional(S.String),
          AccessRole: S.optional(S.String),
          PreserveFilename: S.optional(PreserveFilenameType),
          EnforceMessageSigning: S.optional(EnforceMessageSigningType),
          CustomDirectories: S.optional(CustomDirectoriesType),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateAgreementRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CertificateId: S.String,
          ActiveDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InactiveDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateCertificateRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceConfigurationArn: S.optional(S.String),
          PortNumber: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "UpdateConnectorVpcLatticeEgressConfig",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ VpcLattice: UpdateConnectorVpcLatticeEgressConfig }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ConnectorId: S.String,
          Url: S.optional(S.String),
          As2Config: S.optional(As2ConnectorConfig),
          AccessRole: S.optional(S.String),
          LoggingRole: S.optional(S.String),
          SftpConfig: S.optional(SftpConnectorConfig),
          SecurityPolicyName: S.optional(S.String),
          EgressConfig: S.optional(UpdateConnectorEgressConfig),
          IpAddressType: S.optional(ConnectorsIpAddressType),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateConnectorRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ServerId: S.String, HostKeyId: S.String, Description: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateHostKeyRequest" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ProfileId: S.String, CertificateIds: S.optional(CertificateIds) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateProfileRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Certificate: S.optional(S.String),
          ProtocolDetails: S.optional(ProtocolDetails),
          EndpointDetails: S.optional(EndpointDetails),
          EndpointType: S.optional(EndpointType),
          HostKey: S.optional(SensitiveString),
          IdentityProviderDetails: S.optional(IdentityProviderDetails),
          LoggingRole: S.optional(S.String),
          PostAuthenticationLoginBanner: S.optional(S.String),
          PreAuthenticationLoginBanner: S.optional(S.String),
          Protocols: S.optional(Protocols),
          SecurityPolicyName: S.optional(S.String),
          ServerId: S.String,
          WorkflowDetails: S.optional(WorkflowDetails),
          StructuredLogDestinations: S.optional(StructuredLogDestinations),
          S3StorageOptions: S.optional(S3StorageOptions),
          IpAddressType: S.optional(IpAddressType),
          IdentityProviderType: S.optional(IdentityProviderType),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateServerRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          HomeDirectory: S.optional(S.String),
          HomeDirectoryType: S.optional(HomeDirectoryType),
          HomeDirectoryMappings: S.optional(HomeDirectoryMappings),
          Policy: S.optional(S.String),
          PosixProfile: S.optional(PosixProfile),
          Role: S.optional(S.String),
          ServerId: S.String,
          UserName: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateUserRequest" });
    case 3:
      return S.suspend(() => S.Struct({ Role: S.optional(S.String) })).annotate({
        identifier: "UpdateWebAppIdentityCenterConfig",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ IdentityCenterConfig: UpdateWebAppIdentityCenterConfig }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          SubnetIds: S.optional(SubnetIds),
          IpAddressType: S.optional(WebAppVpcEndpointIpAddressType),
        }),
      ).annotate({ identifier: "UpdateWebAppVpcConfig" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ Vpc: UpdateWebAppVpcConfig })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          WebAppId: S.String,
          IdentityProviderDetails: S.optional(UpdateWebAppIdentityProviderDetails),
          AccessEndpoint: S.optional(S.String),
          WebAppUnits: S.optional(WebAppUnits),
          EndpointDetails: S.optional(UpdateWebAppEndpointDetails),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/updateWebApp" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateWebAppRequest" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          WebAppId: S.String,
          Title: S.optional(S.String),
          LogoFile: S.optional(SensitiveBlob),
          FaviconFile: S.optional(SensitiveBlob),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/updateWebAppCustomization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateWebAppCustomizationRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ WebAppId: S.String })).annotate({
        identifier: "UpdateWebAppCustomizationResponse",
      });
  }
}
