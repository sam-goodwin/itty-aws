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
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "DataSync", serviceShapeName: "FmrsService" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "datasync" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-11-09");
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
              `https://datasync-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://datasync-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://datasync.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://datasync.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class InternalException
  extends /*@__PURE__*/ S.TaggedError<InternalException>()("InternalException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    errorCode: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()("InvalidRequestException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    errorCode: /*@__PURE__*/ S.optional(S.String),
    datasyncErrorCode: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class LocationAccessTestFailed
  extends /*@__PURE__*/ S.TaggedError<LocationAccessTestFailed>()(
    "LocationAccessTestFailed",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      errorCode: /*@__PURE__*/ S.optional(S.String),
      datasyncErrorCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.SyntheticError({
      from: "InvalidRequestException",
      message: { includes: "location access test failed" },
    }),
  ).pipe(C.withRetryableError) {}
export class LocationNotFound
  extends /*@__PURE__*/ S.TaggedError<LocationNotFound>()(
    "LocationNotFound",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      errorCode: /*@__PURE__*/ S.optional(S.String),
      datasyncErrorCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.SyntheticError({
      from: "InvalidRequestException",
      message: { matches: "^Location .* is not found" },
    }),
  ).pipe(C.withNotFoundError) {}
export class LocationRoleNotAssumable
  extends /*@__PURE__*/ S.TaggedError<LocationRoleNotAssumable>()(
    "LocationRoleNotAssumable",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      errorCode: /*@__PURE__*/ S.optional(S.String),
      datasyncErrorCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.SyntheticError({
      from: "InvalidRequestException",
      message: { includes: "Invalid IAM role" },
    }),
  ).pipe(C.withRetryableError) {}
export class TaskNotFound
  extends /*@__PURE__*/ S.TaggedError<TaskNotFound>()(
    "TaskNotFound",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      errorCode: /*@__PURE__*/ S.optional(S.String),
      datasyncErrorCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.SyntheticError({
      from: "InvalidRequestException",
      message: { matches: "^Task .* is not found" },
    }),
  ).pipe(C.withNotFoundError) {}
export type TaskExecutionArn = string;
export interface CancelTaskExecutionRequest {
  TaskExecutionArn: string;
}
const CancelTaskExecutionRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<CancelTaskExecutionRequest>;
export interface CancelTaskExecutionResponse {}
const CancelTaskExecutionResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<CancelTaskExecutionResponse>;
export type ActivationKey = string;
export type TagValue = string;
export type TagKey = string;
export interface TagListEntry {
  Key: string;
  Value?: string;
}
const TagListEntry = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<TagListEntry>;
export type InputTagList = TagListEntry[];
const InputTagList = /*@__PURE__*/ __L.at(__c0, 3);
export type VpcEndpointId = string;
export type Ec2SubnetArn = string;
export type PLSubnetArnList = string[];
const PLSubnetArnList = /*@__PURE__*/ __L.at(__c0, 4);
export type Ec2SecurityGroupArn = string;
export type PLSecurityGroupArnList = string[];
const PLSecurityGroupArnList = PLSubnetArnList as any as S.Schema<PLSecurityGroupArnList>;
export interface CreateAgentRequest {
  ActivationKey: string;
  AgentName?: string;
  Tags?: TagListEntry[];
  VpcEndpointId?: string;
  SubnetArns?: string[];
  SecurityGroupArns?: string[];
}
const CreateAgentRequest = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<CreateAgentRequest>;
export type AgentArn = string;
export interface CreateAgentResponse {
  AgentArn?: string;
}
const CreateAgentResponse = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<CreateAgentResponse>;
export type AzureBlobContainerUrl = string;
export type AzureBlobAuthenticationType = "SAS" | "NONE" | (string & {});
const AzureBlobAuthenticationType = S.String;

export type AzureBlobSasToken = string | redacted.Redacted<string>;
export interface AzureBlobSasConfiguration {
  Token: string | redacted.Redacted<string>;
}
const AzureBlobSasConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<AzureBlobSasConfiguration>;
export type AzureBlobType = "BLOCK" | (string & {});
const AzureBlobType = S.String;

export type AzureAccessTier = "HOT" | "COOL" | "ARCHIVE" | (string & {});
const AzureAccessTier = S.String;

export type AzureBlobSubdirectory = string;
export type AgentArnList = string[];
const AgentArnList = PLSubnetArnList as any as S.Schema<AgentArnList>;
export type SecretArn = string;
export type KmsKeyArn = string;
export interface CmkSecretConfig {
  SecretArn?: string;
  KmsKeyArn?: string;
}
const CmkSecretConfig = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<CmkSecretConfig>;
export type IamRoleArnOrEmptyString = string;
export interface CustomSecretConfig {
  SecretArn?: string;
  SecretAccessRoleArn?: string;
}
const CustomSecretConfig = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<CustomSecretConfig>;
export interface CreateLocationAzureBlobRequest {
  ContainerUrl: string;
  AuthenticationType: AzureBlobAuthenticationType;
  SasConfiguration?: AzureBlobSasConfiguration;
  BlobType?: AzureBlobType;
  AccessTier?: AzureAccessTier;
  Subdirectory?: string;
  AgentArns?: string[];
  Tags?: TagListEntry[];
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
const CreateLocationAzureBlobRequest = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<CreateLocationAzureBlobRequest>;
export type LocationArn = string;
export interface CreateLocationAzureBlobResponse {
  LocationArn?: string;
}
const CreateLocationAzureBlobResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<CreateLocationAzureBlobResponse>;
export type EfsSubdirectory = string;
export type EfsFilesystemArn = string;
export type Ec2SecurityGroupArnList = string[];
const Ec2SecurityGroupArnList = PLSubnetArnList as any as S.Schema<Ec2SecurityGroupArnList>;
export interface Ec2Config {
  SubnetArn: string;
  SecurityGroupArns: string[];
}
const Ec2Config = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<Ec2Config>;
export type EfsAccessPointArn = string;
export type IamRoleArn = string;
export type EfsInTransitEncryption = "NONE" | "TLS1_2" | (string & {});
const EfsInTransitEncryption = S.String;

export interface CreateLocationEfsRequest {
  Subdirectory?: string;
  EfsFilesystemArn: string;
  Ec2Config: Ec2Config;
  Tags?: TagListEntry[];
  AccessPointArn?: string;
  FileSystemAccessRoleArn?: string;
  InTransitEncryption?: EfsInTransitEncryption;
}
const CreateLocationEfsRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<CreateLocationEfsRequest>;
export interface CreateLocationEfsResponse {
  LocationArn?: string;
}
const CreateLocationEfsResponse =
  CreateLocationAzureBlobResponse as any as S.Schema<CreateLocationEfsResponse>;
export type FsxFilesystemArn = string;
export type FsxLustreSubdirectory = string;
export interface CreateLocationFsxLustreRequest {
  FsxFilesystemArn: string;
  SecurityGroupArns: string[];
  Subdirectory?: string;
  Tags?: TagListEntry[];
}
const CreateLocationFsxLustreRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CreateLocationFsxLustreRequest>;
export interface CreateLocationFsxLustreResponse {
  LocationArn?: string;
}
const CreateLocationFsxLustreResponse =
  CreateLocationAzureBlobResponse as any as S.Schema<CreateLocationFsxLustreResponse>;
export type NfsVersion = "AUTOMATIC" | "NFS3" | "NFS4_0" | "NFS4_1" | (string & {});
const NfsVersion = S.String;

export interface NfsMountOptions {
  Version?: NfsVersion;
}
const NfsMountOptions = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<NfsMountOptions>;
export interface FsxProtocolNfs {
  MountOptions?: NfsMountOptions;
}
const FsxProtocolNfs = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<FsxProtocolNfs>;
export type SmbDomain = string;
export type SmbVersion = "AUTOMATIC" | "SMB2" | "SMB3" | "SMB1" | "SMB2_0" | (string & {});
export interface SmbMountOptions {
  Version?: SmbVersion;
}
const SmbMountOptions = NfsMountOptions as any as S.Schema<SmbMountOptions>;
export type SmbPassword = string | redacted.Redacted<string>;
export type SmbUser = string;
export interface ManagedSecretConfig {
  SecretArn?: string;
}
const ManagedSecretConfig = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<ManagedSecretConfig>;
export interface FsxProtocolSmb {
  Domain?: string;
  MountOptions?: SmbMountOptions;
  Password?: string | redacted.Redacted<string>;
  User: string;
  ManagedSecretConfig?: ManagedSecretConfig;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
const FsxProtocolSmb = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<FsxProtocolSmb>;
export interface FsxProtocol {
  NFS?: FsxProtocolNfs;
  SMB?: FsxProtocolSmb;
}
const FsxProtocol = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<FsxProtocol>;
export type StorageVirtualMachineArn = string;
export type FsxOntapSubdirectory = string;
export interface CreateLocationFsxOntapRequest {
  Protocol: FsxProtocol;
  SecurityGroupArns: string[];
  StorageVirtualMachineArn: string;
  Subdirectory?: string;
  Tags?: TagListEntry[];
}
const CreateLocationFsxOntapRequest = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<CreateLocationFsxOntapRequest>;
export interface CreateLocationFsxOntapResponse {
  LocationArn?: string;
}
const CreateLocationFsxOntapResponse =
  CreateLocationAzureBlobResponse as any as S.Schema<CreateLocationFsxOntapResponse>;
export type FsxOpenZfsSubdirectory = string;
export interface CreateLocationFsxOpenZfsRequest {
  FsxFilesystemArn: string;
  Protocol: FsxProtocol;
  SecurityGroupArns: string[];
  Subdirectory?: string;
  Tags?: TagListEntry[];
}
const CreateLocationFsxOpenZfsRequest = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<CreateLocationFsxOpenZfsRequest>;
export interface CreateLocationFsxOpenZfsResponse {
  LocationArn?: string;
}
const CreateLocationFsxOpenZfsResponse =
  CreateLocationAzureBlobResponse as any as S.Schema<CreateLocationFsxOpenZfsResponse>;
export type FsxWindowsSubdirectory = string;
export interface CreateLocationFsxWindowsRequest {
  Subdirectory?: string;
  FsxFilesystemArn: string;
  SecurityGroupArns: string[];
  Tags?: TagListEntry[];
  User: string;
  Domain?: string;
  Password?: string | redacted.Redacted<string>;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
const CreateLocationFsxWindowsRequest = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<CreateLocationFsxWindowsRequest>;
export interface CreateLocationFsxWindowsResponse {
  LocationArn?: string;
}
const CreateLocationFsxWindowsResponse =
  CreateLocationAzureBlobResponse as any as S.Schema<CreateLocationFsxWindowsResponse>;
export type HdfsSubdirectory = string;
export type HdfsServerHostname = string;
export type HdfsServerPort = number;
export interface HdfsNameNode {
  Hostname: string;
  Port: number;
}
const HdfsNameNode = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<HdfsNameNode>;
export type HdfsNameNodeList = HdfsNameNode[];
const HdfsNameNodeList = /*@__PURE__*/ __L.at(__c3, 0);
export type HdfsBlockSize = number;
export type HdfsReplicationFactor = number;
export type KmsKeyProviderUri = string;
export type HdfsRpcProtection =
  | "DISABLED"
  | "AUTHENTICATION"
  | "INTEGRITY"
  | "PRIVACY"
  | (string & {});
const HdfsRpcProtection = S.String;

export type HdfsDataTransferProtection =
  | "DISABLED"
  | "AUTHENTICATION"
  | "INTEGRITY"
  | "PRIVACY"
  | (string & {});
const HdfsDataTransferProtection = S.String;

export interface QopConfiguration {
  RpcProtection?: HdfsRpcProtection;
  DataTransferProtection?: HdfsDataTransferProtection;
}
const QopConfiguration = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<QopConfiguration>;
export type HdfsAuthenticationType = "SIMPLE" | "KERBEROS" | (string & {});
const HdfsAuthenticationType = S.String;

export type HdfsUser = string;
export type KerberosPrincipal = string;
export type KerberosKeytabFile = Uint8Array;
export type KerberosKrb5ConfFile = Uint8Array;
export interface CreateLocationHdfsRequest {
  Subdirectory?: string;
  NameNodes: HdfsNameNode[];
  BlockSize?: number;
  ReplicationFactor?: number;
  KmsKeyProviderUri?: string;
  QopConfiguration?: QopConfiguration;
  AuthenticationType: HdfsAuthenticationType;
  SimpleUser?: string;
  KerberosPrincipal?: string;
  KerberosKeytab?: Uint8Array;
  KerberosKrb5Conf?: Uint8Array;
  AgentArns: string[];
  Tags?: TagListEntry[];
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
const CreateLocationHdfsRequest = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<CreateLocationHdfsRequest>;
export interface CreateLocationHdfsResponse {
  LocationArn?: string;
}
const CreateLocationHdfsResponse =
  CreateLocationAzureBlobResponse as any as S.Schema<CreateLocationHdfsResponse>;
export type NfsSubdirectory = string;
export type ServerHostname = string;
export interface OnPremConfig {
  AgentArns: string[];
}
const OnPremConfig = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<OnPremConfig>;
export interface CreateLocationNfsRequest {
  Subdirectory: string;
  ServerHostname: string;
  OnPremConfig: OnPremConfig;
  MountOptions?: NfsMountOptions;
  Tags?: TagListEntry[];
}
const CreateLocationNfsRequest = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<CreateLocationNfsRequest>;
export interface CreateLocationNfsResponse {
  LocationArn?: string;
}
const CreateLocationNfsResponse =
  CreateLocationAzureBlobResponse as any as S.Schema<CreateLocationNfsResponse>;
export type ObjectStorageServerPort = number;
export type ObjectStorageServerProtocol = "HTTPS" | "HTTP" | (string & {});
const ObjectStorageServerProtocol = S.String;

export type S3Subdirectory = string;
export type ObjectStorageBucketName = string;
export type ObjectStorageAccessKey = string;
export type ObjectStorageSecretKey = string | redacted.Redacted<string>;
export type ObjectStorageCertificate = Uint8Array;
export interface CreateLocationObjectStorageRequest {
  ServerHostname: string;
  ServerPort?: number;
  ServerProtocol?: ObjectStorageServerProtocol;
  Subdirectory?: string;
  BucketName: string;
  AccessKey?: string;
  SecretKey?: string | redacted.Redacted<string>;
  AgentArns?: string[];
  Tags?: TagListEntry[];
  ServerCertificate?: Uint8Array;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
const CreateLocationObjectStorageRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<CreateLocationObjectStorageRequest>;
export interface CreateLocationObjectStorageResponse {
  LocationArn?: string;
}
const CreateLocationObjectStorageResponse =
  CreateLocationAzureBlobResponse as any as S.Schema<CreateLocationObjectStorageResponse>;
export type S3BucketArn = string;
export type S3StorageClass =
  | "STANDARD"
  | "STANDARD_IA"
  | "ONEZONE_IA"
  | "INTELLIGENT_TIERING"
  | "GLACIER"
  | "DEEP_ARCHIVE"
  | "OUTPOSTS"
  | "GLACIER_INSTANT_RETRIEVAL"
  | (string & {});
const S3StorageClass = S.String;

export interface S3Config {
  BucketAccessRoleArn: string;
}
const S3Config = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<S3Config>;
export interface CreateLocationS3Request {
  Subdirectory?: string;
  S3BucketArn: string;
  S3StorageClass?: S3StorageClass;
  S3Config: S3Config;
  AgentArns?: string[];
  Tags?: TagListEntry[];
}
const CreateLocationS3Request = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateLocationS3Request>;
export interface CreateLocationS3Response {
  LocationArn?: string;
}
const CreateLocationS3Response = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CreateLocationS3Response>;
export type SmbSubdirectory = string;
export type SmbAuthenticationType = "NTLM" | "KERBEROS" | (string & {});
const SmbAuthenticationType = S.String;

export type ServerIpAddress = string;
export type DnsIpList = string[];
const DnsIpList = PLSubnetArnList as any as S.Schema<DnsIpList>;
export interface CreateLocationSmbRequest {
  Subdirectory: string;
  ServerHostname: string;
  User?: string;
  Domain?: string;
  Password?: string | redacted.Redacted<string>;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
  AgentArns: string[];
  MountOptions?: SmbMountOptions;
  Tags?: TagListEntry[];
  AuthenticationType?: SmbAuthenticationType;
  DnsIpAddresses?: string[];
  KerberosPrincipal?: string;
  KerberosKeytab?: Uint8Array;
  KerberosKrb5Conf?: Uint8Array;
}
const CreateLocationSmbRequest = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<CreateLocationSmbRequest>;
export interface CreateLocationSmbResponse {
  LocationArn?: string;
}
const CreateLocationSmbResponse =
  CreateLocationAzureBlobResponse as any as S.Schema<CreateLocationSmbResponse>;
export type LogGroupArn = string;
export type VerifyMode =
  | "POINT_IN_TIME_CONSISTENT"
  | "ONLY_FILES_TRANSFERRED"
  | "NONE"
  | (string & {});
const VerifyMode = S.String;

export type OverwriteMode = "ALWAYS" | "NEVER" | (string & {});
const OverwriteMode = S.String;

export type Atime = "NONE" | "BEST_EFFORT" | (string & {});
const Atime = S.String;

export type Mtime = "NONE" | "PRESERVE" | (string & {});
const Mtime = S.String;

export type Uid = "NONE" | "INT_VALUE" | "NAME" | "BOTH" | (string & {});
const Uid = S.String;

export type Gid = "NONE" | "INT_VALUE" | "NAME" | "BOTH" | (string & {});
const Gid = S.String;

export type PreserveDeletedFiles = "PRESERVE" | "REMOVE" | (string & {});
const PreserveDeletedFiles = S.String;

export type PreserveDevices = "NONE" | "PRESERVE" | (string & {});
const PreserveDevices = S.String;

export type PosixPermissions = "NONE" | "PRESERVE" | (string & {});
const PosixPermissions = S.String;

export type BytesPerSecond = number;
export type TaskQueueing = "ENABLED" | "DISABLED" | (string & {});
const TaskQueueing = S.String;

export type LogLevel = "OFF" | "BASIC" | "TRANSFER" | (string & {});
const LogLevel = S.String;

export type TransferMode = "CHANGED" | "ALL" | (string & {});
const TransferMode = S.String;

export type SmbSecurityDescriptorCopyFlags =
  | "NONE"
  | "OWNER_DACL"
  | "OWNER_DACL_SACL"
  | (string & {});
const SmbSecurityDescriptorCopyFlags = S.String;

export type ObjectTags = "PRESERVE" | "NONE" | (string & {});
const ObjectTags = S.String;

export interface Options {
  VerifyMode?: VerifyMode;
  OverwriteMode?: OverwriteMode;
  Atime?: Atime;
  Mtime?: Mtime;
  Uid?: Uid;
  Gid?: Gid;
  PreserveDeletedFiles?: PreserveDeletedFiles;
  PreserveDevices?: PreserveDevices;
  PosixPermissions?: PosixPermissions;
  BytesPerSecond?: number;
  TaskQueueing?: TaskQueueing;
  LogLevel?: LogLevel;
  TransferMode?: TransferMode;
  SecurityDescriptorCopyFlags?: SmbSecurityDescriptorCopyFlags;
  ObjectTags?: ObjectTags;
}
const Options = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<Options>;
export type FilterType = "SIMPLE_PATTERN" | (string & {});
const FilterType = S.String;

export type FilterValue = string;
export interface FilterRule {
  FilterType?: FilterType;
  Value?: string;
}
const FilterRule = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<FilterRule>;
export type FilterList = FilterRule[];
const FilterList = /*@__PURE__*/ __L.at(__c4, 4);
export type ScheduleExpressionCron = string;
export type ScheduleStatus = "ENABLED" | "DISABLED" | (string & {});
const ScheduleStatus = S.String;

export interface TaskSchedule {
  ScheduleExpression: string;
  Status?: ScheduleStatus;
}
const TaskSchedule = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<TaskSchedule>;
export type ManifestAction = "TRANSFER" | (string & {});
const ManifestAction = S.String;

export type ManifestFormat = "CSV" | (string & {});
const ManifestFormat = S.String;

export type S3ObjectVersionId = string;
export interface S3ManifestConfig {
  ManifestObjectPath: string;
  BucketAccessRoleArn: string;
  S3BucketArn: string;
  ManifestObjectVersionId?: string;
}
const S3ManifestConfig = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<S3ManifestConfig>;
export interface SourceManifestConfig {
  S3: S3ManifestConfig;
}
const SourceManifestConfig = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<SourceManifestConfig>;
export interface ManifestConfig {
  Action?: ManifestAction;
  Format?: ManifestFormat;
  Source?: SourceManifestConfig;
}
const ManifestConfig = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<ManifestConfig>;
export interface ReportDestinationS3 {
  Subdirectory?: string;
  S3BucketArn: string;
  BucketAccessRoleArn: string;
}
const ReportDestinationS3 = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<ReportDestinationS3>;
export interface ReportDestination {
  S3?: ReportDestinationS3;
}
const ReportDestination = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<ReportDestination>;
export type ReportOutputType = "SUMMARY_ONLY" | "STANDARD" | (string & {});
const ReportOutputType = S.String;

export type ReportLevel = "ERRORS_ONLY" | "SUCCESSES_AND_ERRORS" | (string & {});
const ReportLevel = S.String;

export type ObjectVersionIds = "INCLUDE" | "NONE" | (string & {});
const ObjectVersionIds = S.String;

export interface ReportOverride {
  ReportLevel?: ReportLevel;
}
const ReportOverride = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<ReportOverride>;
export interface ReportOverrides {
  Transferred?: ReportOverride;
  Verified?: ReportOverride;
  Deleted?: ReportOverride;
  Skipped?: ReportOverride;
}
const ReportOverrides = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<ReportOverrides>;
export interface TaskReportConfig {
  Destination?: ReportDestination;
  OutputType?: ReportOutputType;
  ReportLevel?: ReportLevel;
  ObjectVersionIds?: ObjectVersionIds;
  Overrides?: ReportOverrides;
}
const TaskReportConfig = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<TaskReportConfig>;
export type TaskMode = "BASIC" | "ENHANCED" | (string & {});
const TaskMode = S.String;

export interface CreateTaskRequest {
  SourceLocationArn: string;
  DestinationLocationArn: string;
  CloudWatchLogGroupArn?: string;
  Name?: string;
  Options?: Options;
  Excludes?: FilterRule[];
  Schedule?: TaskSchedule;
  Tags?: TagListEntry[];
  Includes?: FilterRule[];
  ManifestConfig?: ManifestConfig;
  TaskReportConfig?: TaskReportConfig;
  TaskMode?: TaskMode;
}
const CreateTaskRequest = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<CreateTaskRequest>;
export type TaskArn = string;
export interface CreateTaskResponse {
  TaskArn?: string;
}
const CreateTaskResponse = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<CreateTaskResponse>;
export interface DeleteAgentRequest {
  AgentArn: string;
}
const DeleteAgentRequest = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<DeleteAgentRequest>;
export interface DeleteAgentResponse {}
const DeleteAgentResponse = CancelTaskExecutionResponse as any as S.Schema<DeleteAgentResponse>;
export interface DeleteLocationRequest {
  LocationArn: string;
}
const DeleteLocationRequest = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<DeleteLocationRequest>;
export interface DeleteLocationResponse {}
const DeleteLocationResponse =
  CancelTaskExecutionResponse as any as S.Schema<DeleteLocationResponse>;
export interface DeleteTaskRequest {
  TaskArn: string;
}
const DeleteTaskRequest = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<DeleteTaskRequest>;
export interface DeleteTaskResponse {}
const DeleteTaskResponse = CancelTaskExecutionResponse as any as S.Schema<DeleteTaskResponse>;
export interface DescribeAgentRequest {
  AgentArn: string;
}
const DescribeAgentRequest = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<DescribeAgentRequest>;
export type AgentStatus = "ONLINE" | "OFFLINE" | (string & {});
const AgentStatus = S.String;

export type EndpointType = "PUBLIC" | "PRIVATE_LINK" | "FIPS" | "FIPS_PRIVATE_LINK" | (string & {});
const EndpointType = S.String;

export type Endpoint = string;
export interface PrivateLinkConfig {
  VpcEndpointId?: string;
  PrivateLinkEndpoint?: string;
  SubnetArns?: string[];
  SecurityGroupArns?: string[];
}
const PrivateLinkConfig = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<PrivateLinkConfig>;
export type AgentVersion = string;
export interface Platform {
  Version?: string;
}
const Platform = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<Platform>;
export interface DescribeAgentResponse {
  AgentArn?: string;
  Name?: string;
  Status?: AgentStatus;
  LastConnectionTime?: Date;
  CreationTime?: Date;
  EndpointType?: EndpointType;
  PrivateLinkConfig?: PrivateLinkConfig;
  Platform?: Platform;
}
const DescribeAgentResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<DescribeAgentResponse>;
export interface DescribeLocationAzureBlobRequest {
  LocationArn: string;
}
const DescribeLocationAzureBlobRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<DescribeLocationAzureBlobRequest>;
export type LocationUri = string;
export interface DescribeLocationAzureBlobResponse {
  LocationArn?: string;
  LocationUri?: string;
  AuthenticationType?: AzureBlobAuthenticationType;
  BlobType?: AzureBlobType;
  AccessTier?: AzureAccessTier;
  AgentArns?: string[];
  CreationTime?: Date;
  ManagedSecretConfig?: ManagedSecretConfig;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
const DescribeLocationAzureBlobResponse = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DescribeLocationAzureBlobResponse>;
export interface DescribeLocationEfsRequest {
  LocationArn: string;
}
const DescribeLocationEfsRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DescribeLocationEfsRequest>;
export interface DescribeLocationEfsResponse {
  LocationArn?: string;
  LocationUri?: string;
  Ec2Config?: Ec2Config;
  CreationTime?: Date;
  AccessPointArn?: string;
  FileSystemAccessRoleArn?: string;
  InTransitEncryption?: EfsInTransitEncryption;
}
const DescribeLocationEfsResponse = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DescribeLocationEfsResponse>;
export interface DescribeLocationFsxLustreRequest {
  LocationArn: string;
}
const DescribeLocationFsxLustreRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<DescribeLocationFsxLustreRequest>;
export interface DescribeLocationFsxLustreResponse {
  LocationArn?: string;
  LocationUri?: string;
  SecurityGroupArns?: string[];
  CreationTime?: Date;
}
const DescribeLocationFsxLustreResponse = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<DescribeLocationFsxLustreResponse>;
export interface DescribeLocationFsxOntapRequest {
  LocationArn: string;
}
const DescribeLocationFsxOntapRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<DescribeLocationFsxOntapRequest>;
export interface DescribeLocationFsxOntapResponse {
  CreationTime?: Date;
  LocationArn?: string;
  LocationUri?: string;
  Protocol?: FsxProtocol;
  SecurityGroupArns?: string[];
  StorageVirtualMachineArn?: string;
  FsxFilesystemArn?: string;
}
const DescribeLocationFsxOntapResponse = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<DescribeLocationFsxOntapResponse>;
export interface DescribeLocationFsxOpenZfsRequest {
  LocationArn: string;
}
const DescribeLocationFsxOpenZfsRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DescribeLocationFsxOpenZfsRequest>;
export interface DescribeLocationFsxOpenZfsResponse {
  LocationArn?: string;
  LocationUri?: string;
  SecurityGroupArns?: string[];
  Protocol?: FsxProtocol;
  CreationTime?: Date;
}
const DescribeLocationFsxOpenZfsResponse = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<DescribeLocationFsxOpenZfsResponse>;
export interface DescribeLocationFsxWindowsRequest {
  LocationArn: string;
}
const DescribeLocationFsxWindowsRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<DescribeLocationFsxWindowsRequest>;
export interface DescribeLocationFsxWindowsResponse {
  LocationArn?: string;
  LocationUri?: string;
  SecurityGroupArns?: string[];
  CreationTime?: Date;
  User?: string;
  Domain?: string;
  ManagedSecretConfig?: ManagedSecretConfig;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
const DescribeLocationFsxWindowsResponse = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<DescribeLocationFsxWindowsResponse>;
export interface DescribeLocationHdfsRequest {
  LocationArn: string;
}
const DescribeLocationHdfsRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DescribeLocationHdfsRequest>;
export interface DescribeLocationHdfsResponse {
  LocationArn?: string;
  LocationUri?: string;
  NameNodes?: HdfsNameNode[];
  BlockSize?: number;
  ReplicationFactor?: number;
  KmsKeyProviderUri?: string;
  QopConfiguration?: QopConfiguration;
  AuthenticationType?: HdfsAuthenticationType;
  SimpleUser?: string;
  KerberosPrincipal?: string;
  AgentArns?: string[];
  CreationTime?: Date;
  ManagedSecretConfig?: ManagedSecretConfig;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
const DescribeLocationHdfsResponse = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<DescribeLocationHdfsResponse>;
export interface DescribeLocationNfsRequest {
  LocationArn: string;
}
const DescribeLocationNfsRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DescribeLocationNfsRequest>;
export interface DescribeLocationNfsResponse {
  LocationArn?: string;
  LocationUri?: string;
  OnPremConfig?: OnPremConfig;
  MountOptions?: NfsMountOptions;
  CreationTime?: Date;
}
const DescribeLocationNfsResponse = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DescribeLocationNfsResponse>;
export interface DescribeLocationObjectStorageRequest {
  LocationArn: string;
}
const DescribeLocationObjectStorageRequest = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<DescribeLocationObjectStorageRequest>;
export interface DescribeLocationObjectStorageResponse {
  LocationArn?: string;
  LocationUri?: string;
  AccessKey?: string;
  ServerPort?: number;
  ServerProtocol?: ObjectStorageServerProtocol;
  AgentArns?: string[];
  CreationTime?: Date;
  ServerCertificate?: Uint8Array;
  ManagedSecretConfig?: ManagedSecretConfig;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
const DescribeLocationObjectStorageResponse = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<DescribeLocationObjectStorageResponse>;
export interface DescribeLocationS3Request {
  LocationArn: string;
}
const DescribeLocationS3Request = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<DescribeLocationS3Request>;
export interface DescribeLocationS3Response {
  LocationArn?: string;
  LocationUri?: string;
  S3StorageClass?: S3StorageClass;
  S3Config?: S3Config;
  AgentArns?: string[];
  CreationTime?: Date;
}
const DescribeLocationS3Response = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<DescribeLocationS3Response>;
export interface DescribeLocationSmbRequest {
  LocationArn: string;
}
const DescribeLocationSmbRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<DescribeLocationSmbRequest>;
export interface DescribeLocationSmbResponse {
  LocationArn?: string;
  LocationUri?: string;
  AgentArns?: string[];
  User?: string;
  Domain?: string;
  MountOptions?: SmbMountOptions;
  CreationTime?: Date;
  DnsIpAddresses?: string[];
  KerberosPrincipal?: string;
  AuthenticationType?: SmbAuthenticationType;
  ManagedSecretConfig?: ManagedSecretConfig;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
const DescribeLocationSmbResponse = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<DescribeLocationSmbResponse>;
export interface DescribeTaskRequest {
  TaskArn: string;
}
const DescribeTaskRequest = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<DescribeTaskRequest>;
export type TaskStatus =
  | "AVAILABLE"
  | "CREATING"
  | "QUEUED"
  | "RUNNING"
  | "UNAVAILABLE"
  | (string & {});
const TaskStatus = S.String;

export type NetworkInterfaceArn = string;
export type SourceNetworkInterfaceArns = string[];
const SourceNetworkInterfaceArns = PLSubnetArnList as any as S.Schema<SourceNetworkInterfaceArns>;
export type DestinationNetworkInterfaceArns = string[];
const DestinationNetworkInterfaceArns =
  PLSubnetArnList as any as S.Schema<DestinationNetworkInterfaceArns>;
export type ScheduleDisabledReason = string;
export type ScheduleDisabledBy = "USER" | "SERVICE" | (string & {});
const ScheduleDisabledBy = S.String;

export interface TaskScheduleDetails {
  StatusUpdateTime?: Date;
  DisabledReason?: string;
  DisabledBy?: ScheduleDisabledBy;
}
const TaskScheduleDetails = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<TaskScheduleDetails>;
export interface DescribeTaskResponse {
  TaskArn?: string;
  Status?: TaskStatus;
  Name?: string;
  CurrentTaskExecutionArn?: string;
  SourceLocationArn?: string;
  DestinationLocationArn?: string;
  CloudWatchLogGroupArn?: string;
  SourceNetworkInterfaceArns?: string[];
  DestinationNetworkInterfaceArns?: string[];
  Options?: Options;
  Excludes?: FilterRule[];
  Schedule?: TaskSchedule;
  ErrorCode?: string;
  ErrorDetail?: string;
  CreationTime?: Date;
  Includes?: FilterRule[];
  ManifestConfig?: ManifestConfig;
  TaskReportConfig?: TaskReportConfig;
  ScheduleDetails?: TaskScheduleDetails;
  TaskMode?: TaskMode;
}
const DescribeTaskResponse = /*@__PURE__*/ __L.at(__c9, 7) as any as S.Schema<DescribeTaskResponse>;
export interface DescribeTaskExecutionRequest {
  TaskExecutionArn: string;
}
const DescribeTaskExecutionRequest = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<DescribeTaskExecutionRequest>;
export type TaskExecutionStatus =
  | "QUEUED"
  | "CANCELLING"
  | "LAUNCHING"
  | "PREPARING"
  | "TRANSFERRING"
  | "VERIFYING"
  | "SUCCESS"
  | "ERROR"
  | (string & {});
const TaskExecutionStatus = S.String;

export type Duration = number;
export type PhaseStatus = "PENDING" | "SUCCESS" | "ERROR" | (string & {});
const PhaseStatus = S.String;

export interface TaskExecutionResultDetail {
  PrepareDuration?: number;
  PrepareStatus?: PhaseStatus;
  TotalDuration?: number;
  TransferDuration?: number;
  TransferStatus?: PhaseStatus;
  VerifyDuration?: number;
  VerifyStatus?: PhaseStatus;
  ErrorCode?: string;
  ErrorDetail?: string;
}
const TaskExecutionResultDetail = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<TaskExecutionResultDetail>;
export interface ReportResult {
  Status?: PhaseStatus;
  ErrorCode?: string;
  ErrorDetail?: string;
}
const ReportResult = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<ReportResult>;
export interface TaskExecutionFilesListedDetail {
  AtSource?: number;
  AtDestinationForDelete?: number;
}
const TaskExecutionFilesListedDetail = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<TaskExecutionFilesListedDetail>;
export interface TaskExecutionFilesFailedDetail {
  Prepare?: number;
  Transfer?: number;
  Verify?: number;
  Delete?: number;
}
const TaskExecutionFilesFailedDetail = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<TaskExecutionFilesFailedDetail>;
export type ItemCount = number;
export interface TaskExecutionFoldersListedDetail {
  AtSource?: number;
  AtDestinationForDelete?: number;
}
const TaskExecutionFoldersListedDetail =
  TaskExecutionFilesListedDetail as any as S.Schema<TaskExecutionFoldersListedDetail>;
export interface TaskExecutionFoldersFailedDetail {
  List?: number;
  Prepare?: number;
  Transfer?: number;
  Verify?: number;
  Delete?: number;
}
const TaskExecutionFoldersFailedDetail = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<TaskExecutionFoldersFailedDetail>;
export interface DescribeTaskExecutionResponse {
  TaskExecutionArn?: string;
  Status?: TaskExecutionStatus;
  Options?: Options;
  Excludes?: FilterRule[];
  Includes?: FilterRule[];
  ManifestConfig?: ManifestConfig;
  StartTime?: Date;
  EstimatedFilesToTransfer?: number;
  EstimatedBytesToTransfer?: number;
  FilesTransferred?: number;
  BytesWritten?: number;
  BytesTransferred?: number;
  BytesCompressed?: number;
  Result?: TaskExecutionResultDetail;
  TaskReportConfig?: TaskReportConfig;
  FilesDeleted?: number;
  FilesSkipped?: number;
  FilesVerified?: number;
  ReportResult?: ReportResult;
  EstimatedFilesToDelete?: number;
  TaskMode?: TaskMode;
  FilesPrepared?: number;
  FilesListed?: TaskExecutionFilesListedDetail;
  FilesFailed?: TaskExecutionFilesFailedDetail;
  EstimatedFoldersToDelete?: number;
  EstimatedFoldersToTransfer?: number;
  FoldersSkipped?: number;
  FoldersPrepared?: number;
  FoldersTransferred?: number;
  FoldersVerified?: number;
  FoldersDeleted?: number;
  FoldersListed?: TaskExecutionFoldersListedDetail;
  FoldersFailed?: TaskExecutionFoldersFailedDetail;
  LaunchTime?: Date;
  EndTime?: Date;
}
const DescribeTaskExecutionResponse = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<DescribeTaskExecutionResponse>;
export type MaxResults = number;
export type NextToken = string;
export interface ListAgentsRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListAgentsRequest = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<ListAgentsRequest>;
export interface AgentListEntry {
  AgentArn?: string;
  Name?: string;
  Status?: AgentStatus;
  Platform?: Platform;
}
const AgentListEntry = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<AgentListEntry>;
export type AgentList = AgentListEntry[];
const AgentList = /*@__PURE__*/ __L.at(__c11, 1);
export interface ListAgentsResponse {
  Agents?: AgentListEntry[];
  NextToken?: string;
}
const ListAgentsResponse = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<ListAgentsResponse>;
export type LocationFilterName = "LocationUri" | "LocationType" | "CreationTime" | (string & {});
const LocationFilterName = S.String;

export type FilterAttributeValue = string;
export type FilterValues = string[];
const FilterValues = PLSubnetArnList as any as S.Schema<FilterValues>;
export type Operator =
  | "Equals"
  | "NotEquals"
  | "In"
  | "LessThanOrEqual"
  | "LessThan"
  | "GreaterThanOrEqual"
  | "GreaterThan"
  | "Contains"
  | "NotContains"
  | "BeginsWith"
  | (string & {});
const Operator = S.String;

export interface LocationFilter {
  Name: LocationFilterName;
  Values: string[];
  Operator: Operator;
}
const LocationFilter = /*@__PURE__*/ __L.at(__c11, 3) as any as S.Schema<LocationFilter>;
export type LocationFilters = LocationFilter[];
const LocationFilters = /*@__PURE__*/ __L.at(__c11, 4);
export interface ListLocationsRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: LocationFilter[];
}
const ListLocationsRequest = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<ListLocationsRequest>;
export interface LocationListEntry {
  LocationArn?: string;
  LocationUri?: string;
}
const LocationListEntry = /*@__PURE__*/ __L.at(__c11, 6) as any as S.Schema<LocationListEntry>;
export type LocationList = LocationListEntry[];
const LocationList = /*@__PURE__*/ __L.at(__c11, 7);
export interface ListLocationsResponse {
  Locations?: LocationListEntry[];
  NextToken?: string;
}
const ListLocationsResponse = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<ListLocationsResponse>;
export type TaggableResourceArn = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<ListTagsForResourceRequest>;
export type OutputTagList = TagListEntry[];
const OutputTagList = InputTagList as any as S.Schema<OutputTagList>;
export interface ListTagsForResourceResponse {
  Tags?: TagListEntry[];
  NextToken?: string;
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListTaskExecutionsRequest {
  TaskArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListTaskExecutionsRequest = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<ListTaskExecutionsRequest>;
export interface TaskExecutionListEntry {
  TaskExecutionArn?: string;
  Status?: TaskExecutionStatus;
  TaskMode?: TaskMode;
}
const TaskExecutionListEntry = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<TaskExecutionListEntry>;
export type TaskExecutionList = TaskExecutionListEntry[];
const TaskExecutionList = /*@__PURE__*/ __L.at(__c12, 5);
export interface ListTaskExecutionsResponse {
  TaskExecutions?: TaskExecutionListEntry[];
  NextToken?: string;
}
const ListTaskExecutionsResponse = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<ListTaskExecutionsResponse>;
export type TaskFilterName = "LocationId" | "CreationTime" | (string & {});
export interface TaskFilter {
  Name: TaskFilterName;
  Values: string[];
  Operator: Operator;
}
export type TaskFilters = TaskFilter[];
const TaskFilters = LocationFilters as any as S.Schema<TaskFilters>;
export interface ListTasksRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: TaskFilter[];
}
const ListTasksRequest = /*@__PURE__*/ __L.at(__c12, 7) as any as S.Schema<ListTasksRequest>;
export interface TaskListEntry {
  TaskArn?: string;
  Status?: TaskStatus;
  Name?: string;
  TaskMode?: TaskMode;
}
const TaskListEntry = /*@__PURE__*/ __L.at(__c13, 0) as any as S.Schema<TaskListEntry>;
export type TaskList = TaskListEntry[];
const TaskList = /*@__PURE__*/ __L.at(__c13, 1);
export interface ListTasksResponse {
  Tasks?: TaskListEntry[];
  NextToken?: string;
}
const ListTasksResponse = /*@__PURE__*/ __L.at(__c13, 2) as any as S.Schema<ListTasksResponse>;
export interface StartTaskExecutionRequest {
  TaskArn: string;
  OverrideOptions?: Options;
  Includes?: FilterRule[];
  Excludes?: FilterRule[];
  ManifestConfig?: ManifestConfig;
  TaskReportConfig?: TaskReportConfig;
  Tags?: TagListEntry[];
}
const StartTaskExecutionRequest = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<StartTaskExecutionRequest>;
export interface StartTaskExecutionResponse {
  TaskExecutionArn?: string;
}
const StartTaskExecutionResponse = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<StartTaskExecutionResponse>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: TagListEntry[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = CancelTaskExecutionResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = PLSubnetArnList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ResourceArn: string;
  Keys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = CancelTaskExecutionResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAgentRequest {
  AgentArn: string;
  Name?: string;
}
const UpdateAgentRequest = /*@__PURE__*/ __L.at(__c13, 7) as any as S.Schema<UpdateAgentRequest>;
export interface UpdateAgentResponse {}
const UpdateAgentResponse = CancelTaskExecutionResponse as any as S.Schema<UpdateAgentResponse>;
export interface UpdateLocationAzureBlobRequest {
  LocationArn: string;
  Subdirectory?: string;
  AuthenticationType?: AzureBlobAuthenticationType;
  SasConfiguration?: AzureBlobSasConfiguration;
  BlobType?: AzureBlobType;
  AccessTier?: AzureAccessTier;
  AgentArns?: string[];
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
const UpdateLocationAzureBlobRequest = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<UpdateLocationAzureBlobRequest>;
export interface UpdateLocationAzureBlobResponse {}
const UpdateLocationAzureBlobResponse = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<UpdateLocationAzureBlobResponse>;
export type UpdatedEfsAccessPointArn = string;
export type UpdatedEfsIamRoleArn = string;
export interface UpdateLocationEfsRequest {
  LocationArn: string;
  Subdirectory?: string;
  AccessPointArn?: string;
  FileSystemAccessRoleArn?: string;
  InTransitEncryption?: EfsInTransitEncryption;
}
const UpdateLocationEfsRequest = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<UpdateLocationEfsRequest>;
export interface UpdateLocationEfsResponse {}
const UpdateLocationEfsResponse =
  CancelTaskExecutionResponse as any as S.Schema<UpdateLocationEfsResponse>;
export interface UpdateLocationFsxLustreRequest {
  LocationArn: string;
  Subdirectory?: string;
}
const UpdateLocationFsxLustreRequest = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<UpdateLocationFsxLustreRequest>;
export interface UpdateLocationFsxLustreResponse {}
const UpdateLocationFsxLustreResponse =
  UpdateLocationAzureBlobResponse as any as S.Schema<UpdateLocationFsxLustreResponse>;
export type UpdateSmbDomain = string;
export interface FsxUpdateProtocolSmb {
  Domain?: string;
  MountOptions?: SmbMountOptions;
  Password?: string | redacted.Redacted<string>;
  User?: string;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
const FsxUpdateProtocolSmb = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<FsxUpdateProtocolSmb>;
export interface FsxUpdateProtocol {
  NFS?: FsxProtocolNfs;
  SMB?: FsxUpdateProtocolSmb;
}
const FsxUpdateProtocol = /*@__PURE__*/ __L.at(__c14, 5) as any as S.Schema<FsxUpdateProtocol>;
export interface UpdateLocationFsxOntapRequest {
  LocationArn: string;
  Protocol?: FsxUpdateProtocol;
  Subdirectory?: string;
}
const UpdateLocationFsxOntapRequest = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<UpdateLocationFsxOntapRequest>;
export interface UpdateLocationFsxOntapResponse {}
const UpdateLocationFsxOntapResponse =
  CancelTaskExecutionResponse as any as S.Schema<UpdateLocationFsxOntapResponse>;
export interface UpdateLocationFsxOpenZfsRequest {
  LocationArn: string;
  Protocol?: FsxProtocol;
  Subdirectory?: string;
}
const UpdateLocationFsxOpenZfsRequest = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<UpdateLocationFsxOpenZfsRequest>;
export interface UpdateLocationFsxOpenZfsResponse {}
const UpdateLocationFsxOpenZfsResponse = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<UpdateLocationFsxOpenZfsResponse>;
export interface UpdateLocationFsxWindowsRequest {
  LocationArn: string;
  Subdirectory?: string;
  Domain?: string;
  User?: string;
  Password?: string | redacted.Redacted<string>;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
const UpdateLocationFsxWindowsRequest = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<UpdateLocationFsxWindowsRequest>;
export interface UpdateLocationFsxWindowsResponse {}
const UpdateLocationFsxWindowsResponse =
  UpdateLocationFsxOpenZfsResponse as any as S.Schema<UpdateLocationFsxWindowsResponse>;
export interface UpdateLocationHdfsRequest {
  LocationArn: string;
  Subdirectory?: string;
  NameNodes?: HdfsNameNode[];
  BlockSize?: number;
  ReplicationFactor?: number;
  KmsKeyProviderUri?: string;
  QopConfiguration?: QopConfiguration;
  AuthenticationType?: HdfsAuthenticationType;
  SimpleUser?: string;
  KerberosPrincipal?: string;
  KerberosKeytab?: Uint8Array;
  KerberosKrb5Conf?: Uint8Array;
  AgentArns?: string[];
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
const UpdateLocationHdfsRequest = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<UpdateLocationHdfsRequest>;
export interface UpdateLocationHdfsResponse {}
const UpdateLocationHdfsResponse =
  CancelTaskExecutionResponse as any as S.Schema<UpdateLocationHdfsResponse>;
export interface UpdateLocationNfsRequest {
  LocationArn: string;
  Subdirectory?: string;
  ServerHostname?: string;
  OnPremConfig?: OnPremConfig;
  MountOptions?: NfsMountOptions;
}
const UpdateLocationNfsRequest = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<UpdateLocationNfsRequest>;
export interface UpdateLocationNfsResponse {}
const UpdateLocationNfsResponse =
  CancelTaskExecutionResponse as any as S.Schema<UpdateLocationNfsResponse>;
export interface UpdateLocationObjectStorageRequest {
  LocationArn: string;
  ServerPort?: number;
  ServerProtocol?: ObjectStorageServerProtocol;
  Subdirectory?: string;
  ServerHostname?: string;
  AccessKey?: string;
  SecretKey?: string | redacted.Redacted<string>;
  AgentArns?: string[];
  ServerCertificate?: Uint8Array;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
}
const UpdateLocationObjectStorageRequest = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<UpdateLocationObjectStorageRequest>;
export interface UpdateLocationObjectStorageResponse {}
const UpdateLocationObjectStorageResponse =
  UpdateLocationFsxOpenZfsResponse as any as S.Schema<UpdateLocationObjectStorageResponse>;
export interface UpdateLocationS3Request {
  LocationArn: string;
  Subdirectory?: string;
  S3StorageClass?: S3StorageClass;
  S3Config?: S3Config;
}
const UpdateLocationS3Request = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<UpdateLocationS3Request>;
export interface UpdateLocationS3Response {}
const UpdateLocationS3Response =
  CancelTaskExecutionResponse as any as S.Schema<UpdateLocationS3Response>;
export interface UpdateLocationSmbRequest {
  LocationArn: string;
  Subdirectory?: string;
  ServerHostname?: string;
  User?: string;
  Domain?: string;
  Password?: string | redacted.Redacted<string>;
  CmkSecretConfig?: CmkSecretConfig;
  CustomSecretConfig?: CustomSecretConfig;
  AgentArns?: string[];
  MountOptions?: SmbMountOptions;
  AuthenticationType?: SmbAuthenticationType;
  DnsIpAddresses?: string[];
  KerberosPrincipal?: string;
  KerberosKeytab?: Uint8Array;
  KerberosKrb5Conf?: Uint8Array;
}
const UpdateLocationSmbRequest = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<UpdateLocationSmbRequest>;
export interface UpdateLocationSmbResponse {}
const UpdateLocationSmbResponse =
  CancelTaskExecutionResponse as any as S.Schema<UpdateLocationSmbResponse>;
export interface UpdateTaskRequest {
  TaskArn: string;
  Options?: Options;
  Excludes?: FilterRule[];
  Schedule?: TaskSchedule;
  Name?: string;
  CloudWatchLogGroupArn?: string;
  Includes?: FilterRule[];
  ManifestConfig?: ManifestConfig;
  TaskReportConfig?: TaskReportConfig;
}
const UpdateTaskRequest = /*@__PURE__*/ __L.at(__c15, 7) as any as S.Schema<UpdateTaskRequest>;
export interface UpdateTaskResponse {}
const UpdateTaskResponse = CancelTaskExecutionResponse as any as S.Schema<UpdateTaskResponse>;
export interface UpdateTaskExecutionRequest {
  TaskExecutionArn: string;
  Options: Options;
}
const UpdateTaskExecutionRequest = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<UpdateTaskExecutionRequest>;
export interface UpdateTaskExecutionResponse {}
const UpdateTaskExecutionResponse =
  CancelTaskExecutionResponse as any as S.Schema<UpdateTaskExecutionResponse>;
export type CancelTaskExecutionError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Stops an DataSync task execution that's in progress. The transfer of some
 * files are abruptly interrupted. File contents that're transferred to the destination might be
 * incomplete or inconsistent with the source files.
 *
 * However, if you start a new task execution using the same task and allow it to finish,
 * file content on the destination will be complete and consistent. This applies to other
 * unexpected failures that interrupt a task execution. In all of these cases, DataSync
 * successfully completes the transfer when you start the next task execution.
 */
export const cancelTaskExecution: API.OperationMethod<
  CancelTaskExecutionRequest,
  CancelTaskExecutionResponse,
  CancelTaskExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelTaskExecutionRequest,
  output: CancelTaskExecutionResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelTaskExecution",
}));

export type CreateAgentError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Activates an DataSync agent that you deploy in your storage environment.
 * The activation process associates the agent with your Amazon Web Services account.
 *
 * If you haven't deployed an agent yet, see Do I need a DataSync
 * agent?
 */
export const createAgent: API.OperationMethod<
  CreateAgentRequest,
  CreateAgentResponse,
  CreateAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAgentRequest,
  output: CreateAgentResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAgent",
}));

export type CreateLocationAzureBlobError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Creates a transfer *location* for a Microsoft Azure Blob Storage
 * container. DataSync can use this location as a transfer source or destination.
 * You can make transfers with or without a DataSync agent that connects to your
 * container.
 *
 * Before you begin, make sure you know how DataSync accesses Azure Blob Storage and works with access tiers and blob types.
 */
export const createLocationAzureBlob: API.OperationMethod<
  CreateLocationAzureBlobRequest,
  CreateLocationAzureBlobResponse,
  CreateLocationAzureBlobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLocationAzureBlobRequest,
  output: CreateLocationAzureBlobResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLocationAzureBlob",
}));

export type CreateLocationEfsError =
  | InternalException
  | InvalidRequestException
  | LocationRoleNotAssumable
  | LocationAccessTestFailed
  | CommonErrors;
/**
 * Creates a transfer *location* for an Amazon EFS file system.
 * DataSync can use this location as a source or destination for transferring
 * data.
 *
 * Before you begin, make sure that you understand how DataSync
 * accesses
 * Amazon EFS file systems.
 */
export const createLocationEfs: API.OperationMethod<
  CreateLocationEfsRequest,
  CreateLocationEfsResponse,
  CreateLocationEfsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLocationEfsRequest,
  output: CreateLocationEfsResponse,
  errors: [
    InternalException,
    InvalidRequestException,
    LocationRoleNotAssumable,
    LocationAccessTestFailed,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLocationEfs",
}));

export type CreateLocationFsxLustreError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Creates a transfer *location* for an Amazon FSx for Lustre file
 * system. DataSync can use this location as a source or destination for
 * transferring data.
 *
 * Before you begin, make sure that you understand how DataSync
 * accesses FSx for Lustre file systems.
 */
export const createLocationFsxLustre: API.OperationMethod<
  CreateLocationFsxLustreRequest,
  CreateLocationFsxLustreResponse,
  CreateLocationFsxLustreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLocationFsxLustreRequest,
  output: CreateLocationFsxLustreResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLocationFsxLustre",
}));

export type CreateLocationFsxOntapError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Creates a transfer *location* for an Amazon FSx for NetApp ONTAP file
 * system. DataSync can use this location as a source or destination for
 * transferring data.
 *
 * Before you begin, make sure that you understand how DataSync
 * accesses FSx for ONTAP file systems.
 */
export const createLocationFsxOntap: API.OperationMethod<
  CreateLocationFsxOntapRequest,
  CreateLocationFsxOntapResponse,
  CreateLocationFsxOntapError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLocationFsxOntapRequest,
  output: CreateLocationFsxOntapResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLocationFsxOntap",
}));

export type CreateLocationFsxOpenZfsError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Creates a transfer *location* for an Amazon FSx for OpenZFS file
 * system. DataSync can use this location as a source or destination for
 * transferring data.
 *
 * Before you begin, make sure that you understand how DataSync
 * accesses
 * FSx for OpenZFS file systems.
 *
 * Request parameters related to `SMB` aren't supported with the
 * `CreateLocationFsxOpenZfs` operation.
 */
export const createLocationFsxOpenZfs: API.OperationMethod<
  CreateLocationFsxOpenZfsRequest,
  CreateLocationFsxOpenZfsResponse,
  CreateLocationFsxOpenZfsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLocationFsxOpenZfsRequest,
  output: CreateLocationFsxOpenZfsResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLocationFsxOpenZfs",
}));

export type CreateLocationFsxWindowsError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Creates a transfer *location* for an Amazon FSx for Windows File Server file
 * system. DataSync can use this location as a source or destination for
 * transferring data.
 *
 * Before you begin, make sure that you understand how DataSync
 * accesses
 * FSx for Windows File Server file systems.
 */
export const createLocationFsxWindows: API.OperationMethod<
  CreateLocationFsxWindowsRequest,
  CreateLocationFsxWindowsResponse,
  CreateLocationFsxWindowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLocationFsxWindowsRequest,
  output: CreateLocationFsxWindowsResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLocationFsxWindows",
}));

export type CreateLocationHdfsError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Creates a transfer *location* for a Hadoop Distributed File System
 * (HDFS). DataSync can use this location as a source or destination for
 * transferring data.
 *
 * Before you begin, make sure that you understand how DataSync
 * accesses HDFS
 * clusters.
 */
export const createLocationHdfs: API.OperationMethod<
  CreateLocationHdfsRequest,
  CreateLocationHdfsResponse,
  CreateLocationHdfsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLocationHdfsRequest,
  output: CreateLocationHdfsResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLocationHdfs",
}));

export type CreateLocationNfsError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Creates a transfer *location* for a Network File System (NFS) file
 * server. DataSync can use this location as a source or destination for
 * transferring data.
 *
 * Before you begin, make sure that you understand how DataSync
 * accesses NFS file
 * servers.
 */
export const createLocationNfs: API.OperationMethod<
  CreateLocationNfsRequest,
  CreateLocationNfsResponse,
  CreateLocationNfsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLocationNfsRequest,
  output: CreateLocationNfsResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLocationNfs",
}));

export type CreateLocationObjectStorageError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Creates a transfer *location* for an object storage system. DataSync can use this location as a source or destination for transferring data. You
 * can make transfers with or without a DataSync
 * agent.
 *
 * Before you begin, make sure that you understand the prerequisites for DataSync to work with object storage systems.
 */
export const createLocationObjectStorage: API.OperationMethod<
  CreateLocationObjectStorageRequest,
  CreateLocationObjectStorageResponse,
  CreateLocationObjectStorageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLocationObjectStorageRequest,
  output: CreateLocationObjectStorageResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLocationObjectStorage",
}));

export type CreateLocationS3Error =
  | InternalException
  | InvalidRequestException
  | LocationRoleNotAssumable
  | LocationAccessTestFailed
  | CommonErrors;
/**
 * Creates a transfer *location* for an Amazon S3 bucket.
 * DataSync can use this location as a source or destination for transferring
 * data.
 *
 * Before you begin, make sure that you read the following topics:
 *
 * - Storage
 * class considerations with Amazon S3 locations
 *
 * - Evaluating S3 request costs when using DataSync
 *
 * For more information, see Configuring
 * transfers with Amazon S3.
 */
export const createLocationS3: API.OperationMethod<
  CreateLocationS3Request,
  CreateLocationS3Response,
  CreateLocationS3Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLocationS3Request,
  output: CreateLocationS3Response,
  errors: [
    InternalException,
    InvalidRequestException,
    LocationRoleNotAssumable,
    LocationAccessTestFailed,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLocationS3",
}));

export type CreateLocationSmbError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Creates a transfer *location* for a Server Message Block (SMB) file
 * server. DataSync can use this location as a source or destination for
 * transferring data.
 *
 * Before you begin, make sure that you understand how DataSync accesses SMB
 * file servers. For more information, see Providing DataSync access to SMB file servers.
 */
export const createLocationSmb: API.OperationMethod<
  CreateLocationSmbRequest,
  CreateLocationSmbResponse,
  CreateLocationSmbError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLocationSmbRequest,
  output: CreateLocationSmbResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLocationSmb",
}));

export type CreateTaskError =
  | InternalException
  | InvalidRequestException
  | LocationAccessTestFailed
  | CommonErrors;
/**
 * Configures a *task*, which defines where and how DataSync
 * transfers your data.
 *
 * A task includes a source location, destination location, and transfer options (such as
 * bandwidth limits, scheduling, and more).
 *
 * If you're planning to transfer data to or from an Amazon S3 location, review
 * how
 * DataSync can affect your S3 request charges and the DataSync pricing page before
 * you begin.
 */
export const createTask: API.OperationMethod<
  CreateTaskRequest,
  CreateTaskResponse,
  CreateTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTaskRequest,
  output: CreateTaskResponse,
  errors: [InternalException, InvalidRequestException, LocationAccessTestFailed],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTask",
}));

export type DeleteAgentError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Removes an DataSync agent resource from your Amazon Web Services account.
 *
 * Keep in mind that this operation (which can't be undone) doesn't remove the agent's
 * virtual machine (VM) or Amazon EC2 instance from your storage environment. For next
 * steps, you can delete the VM or instance from your storage environment or reuse it to activate a new
 * agent.
 */
export const deleteAgent: API.OperationMethod<
  DeleteAgentRequest,
  DeleteAgentResponse,
  DeleteAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAgentRequest,
  output: DeleteAgentResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAgent",
}));

export type DeleteLocationError =
  | InternalException
  | InvalidRequestException
  | LocationNotFound
  | CommonErrors;
/**
 * Deletes a transfer location resource from DataSync.
 */
export const deleteLocation: API.OperationMethod<
  DeleteLocationRequest,
  DeleteLocationResponse,
  DeleteLocationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLocationRequest,
  output: DeleteLocationResponse,
  errors: [InternalException, InvalidRequestException, LocationNotFound],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLocation",
}));

export type DeleteTaskError =
  | InternalException
  | InvalidRequestException
  | TaskNotFound
  | CommonErrors;
/**
 * Deletes a transfer task resource from DataSync.
 */
export const deleteTask: API.OperationMethod<
  DeleteTaskRequest,
  DeleteTaskResponse,
  DeleteTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTaskRequest,
  output: DeleteTaskResponse,
  errors: [InternalException, InvalidRequestException, TaskNotFound],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTask",
}));

export type DescribeAgentError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Returns information about an DataSync agent, such as its name, service
 * endpoint type, and status.
 */
export const describeAgent: API.OperationMethod<
  DescribeAgentRequest,
  DescribeAgentResponse,
  DescribeAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAgentRequest,
  output: DescribeAgentResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAgent",
}));

export type DescribeLocationAzureBlobError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Provides details about how an DataSync transfer location for Microsoft Azure
 * Blob Storage is configured.
 */
export const describeLocationAzureBlob: API.OperationMethod<
  DescribeLocationAzureBlobRequest,
  DescribeLocationAzureBlobResponse,
  DescribeLocationAzureBlobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLocationAzureBlobRequest,
  output: DescribeLocationAzureBlobResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLocationAzureBlob",
}));

export type DescribeLocationEfsError =
  | InternalException
  | InvalidRequestException
  | LocationNotFound
  | CommonErrors;
/**
 * Provides details about how an DataSync transfer location for an Amazon EFS file system is configured.
 */
export const describeLocationEfs: API.OperationMethod<
  DescribeLocationEfsRequest,
  DescribeLocationEfsResponse,
  DescribeLocationEfsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLocationEfsRequest,
  output: DescribeLocationEfsResponse,
  errors: [InternalException, InvalidRequestException, LocationNotFound],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLocationEfs",
}));

export type DescribeLocationFsxLustreError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Provides details about how an DataSync transfer location for an Amazon FSx for Lustre file system is configured.
 */
export const describeLocationFsxLustre: API.OperationMethod<
  DescribeLocationFsxLustreRequest,
  DescribeLocationFsxLustreResponse,
  DescribeLocationFsxLustreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLocationFsxLustreRequest,
  output: DescribeLocationFsxLustreResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLocationFsxLustre",
}));

export type DescribeLocationFsxOntapError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Provides details about how an DataSync transfer location for an Amazon FSx for NetApp ONTAP file system is configured.
 *
 * If your location uses SMB, the `DescribeLocationFsxOntap` operation doesn't
 * actually return a `Password`.
 */
export const describeLocationFsxOntap: API.OperationMethod<
  DescribeLocationFsxOntapRequest,
  DescribeLocationFsxOntapResponse,
  DescribeLocationFsxOntapError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLocationFsxOntapRequest,
  output: DescribeLocationFsxOntapResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLocationFsxOntap",
}));

export type DescribeLocationFsxOpenZfsError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Provides details about how an DataSync transfer location for an Amazon FSx for OpenZFS file system is configured.
 *
 * Response elements related to `SMB` aren't supported with the
 * `DescribeLocationFsxOpenZfs` operation.
 */
export const describeLocationFsxOpenZfs: API.OperationMethod<
  DescribeLocationFsxOpenZfsRequest,
  DescribeLocationFsxOpenZfsResponse,
  DescribeLocationFsxOpenZfsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLocationFsxOpenZfsRequest,
  output: DescribeLocationFsxOpenZfsResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLocationFsxOpenZfs",
}));

export type DescribeLocationFsxWindowsError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Provides details about how an DataSync transfer location for an Amazon FSx for Windows File Server file system is configured.
 */
export const describeLocationFsxWindows: API.OperationMethod<
  DescribeLocationFsxWindowsRequest,
  DescribeLocationFsxWindowsResponse,
  DescribeLocationFsxWindowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLocationFsxWindowsRequest,
  output: DescribeLocationFsxWindowsResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLocationFsxWindows",
}));

export type DescribeLocationHdfsError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Provides details about how an DataSync transfer location for a Hadoop
 * Distributed File System (HDFS) is configured.
 */
export const describeLocationHdfs: API.OperationMethod<
  DescribeLocationHdfsRequest,
  DescribeLocationHdfsResponse,
  DescribeLocationHdfsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLocationHdfsRequest,
  output: DescribeLocationHdfsResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLocationHdfs",
}));

export type DescribeLocationNfsError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Provides details about how an DataSync transfer location for a Network
 * File System (NFS) file server is configured.
 */
export const describeLocationNfs: API.OperationMethod<
  DescribeLocationNfsRequest,
  DescribeLocationNfsResponse,
  DescribeLocationNfsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLocationNfsRequest,
  output: DescribeLocationNfsResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLocationNfs",
}));

export type DescribeLocationObjectStorageError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Provides details about how an DataSync transfer location for an object
 * storage system is configured.
 */
export const describeLocationObjectStorage: API.OperationMethod<
  DescribeLocationObjectStorageRequest,
  DescribeLocationObjectStorageResponse,
  DescribeLocationObjectStorageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLocationObjectStorageRequest,
  output: DescribeLocationObjectStorageResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLocationObjectStorage",
}));

export type DescribeLocationS3Error =
  | InternalException
  | InvalidRequestException
  | LocationNotFound
  | CommonErrors;
/**
 * Provides details about how an DataSync transfer location for an S3 bucket
 * is configured.
 */
export const describeLocationS3: API.OperationMethod<
  DescribeLocationS3Request,
  DescribeLocationS3Response,
  DescribeLocationS3Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLocationS3Request,
  output: DescribeLocationS3Response,
  errors: [InternalException, InvalidRequestException, LocationNotFound],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLocationS3",
}));

export type DescribeLocationSmbError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Provides details about how an DataSync transfer location for a Server
 * Message Block (SMB) file server is configured.
 */
export const describeLocationSmb: API.OperationMethod<
  DescribeLocationSmbRequest,
  DescribeLocationSmbResponse,
  DescribeLocationSmbError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLocationSmbRequest,
  output: DescribeLocationSmbResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLocationSmb",
}));

export type DescribeTaskError =
  | InternalException
  | InvalidRequestException
  | TaskNotFound
  | CommonErrors;
/**
 * Provides information about a *task*, which defines where and how
 * DataSync transfers your data.
 */
export const describeTask: API.OperationMethod<
  DescribeTaskRequest,
  DescribeTaskResponse,
  DescribeTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeTaskRequest,
  output: DescribeTaskResponse,
  errors: [InternalException, InvalidRequestException, TaskNotFound],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTask",
}));

export type DescribeTaskExecutionError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Provides information about an execution of your DataSync task. You can
 * use this operation to help monitor the progress of an ongoing data transfer or check the
 * results of the transfer.
 *
 * Some `DescribeTaskExecution` response elements are only relevant to a
 * specific task mode. For information, see Understanding task mode differences and Understanding data
 * transfer performance counters.
 */
export const describeTaskExecution: API.OperationMethod<
  DescribeTaskExecutionRequest,
  DescribeTaskExecutionResponse,
  DescribeTaskExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeTaskExecutionRequest,
  output: DescribeTaskExecutionResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTaskExecution",
}));

export type ListAgentsError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request.
 *
 * With pagination, you can reduce the number of agents returned in a response. If you get
 * a truncated list of agents in a response, the response contains a marker that you can specify
 * in your next request to fetch the next page of agents.
 *
 * `ListAgents` is eventually consistent. This means the result of running the
 * operation might not reflect that you just created or deleted an agent. For example, if you
 * create an agent with CreateAgent and then
 * immediately run `ListAgents`, that agent might not show up in the list right away.
 * In situations like this, you can always confirm whether an agent has been created (or deleted)
 * by using DescribeAgent.
 */
export const listAgents: API.PaginatedOperationMethod<
  ListAgentsRequest,
  ListAgentsResponse,
  ListAgentsError,
  Credentials | HttpClient.HttpClient,
  AgentListEntry
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAgentsRequest,
  output: ListAgentsResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgents",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Agents",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListLocationsError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Returns a list of source and destination locations.
 *
 * If you have more locations than are returned in a response (that is, the response
 * returns only a truncated list of your agents), the response contains a token that you can
 * specify in your next request to fetch the next page of locations.
 */
export const listLocations: API.PaginatedOperationMethod<
  ListLocationsRequest,
  ListLocationsResponse,
  ListLocationsError,
  Credentials | HttpClient.HttpClient,
  LocationListEntry
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLocationsRequest,
  output: ListLocationsResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLocations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Locations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Returns all the tags associated with an Amazon Web Services resource.
 */
export const listTagsForResource: API.PaginatedOperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient,
  TagListEntry
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [InternalException, InvalidRequestException],
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

export type ListTaskExecutionsError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Returns a list of executions for an DataSync transfer task.
 */
export const listTaskExecutions: API.PaginatedOperationMethod<
  ListTaskExecutionsRequest,
  ListTaskExecutionsResponse,
  ListTaskExecutionsError,
  Credentials | HttpClient.HttpClient,
  TaskExecutionListEntry
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTaskExecutionsRequest,
  output: ListTaskExecutionsResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTaskExecutions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TaskExecutions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTasksError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Returns a list of the DataSync tasks you created.
 */
export const listTasks: API.PaginatedOperationMethod<
  ListTasksRequest,
  ListTasksResponse,
  ListTasksError,
  Credentials | HttpClient.HttpClient,
  TaskListEntry
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTasksRequest,
  output: ListTasksResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTasks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Tasks",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type StartTaskExecutionError =
  | InternalException
  | InvalidRequestException
  | LocationAccessTestFailed
  | CommonErrors;
/**
 * Starts an DataSync transfer task. For each task, you can only run one task
 * execution at a time.
 *
 * There are several steps to a task execution. For more information, see Task execution statuses.
 *
 * If you're planning to transfer data to or from an Amazon S3 location, review
 * how
 * DataSync can affect your S3 request charges and the DataSync pricing page before
 * you begin.
 */
export const startTaskExecution: API.OperationMethod<
  StartTaskExecutionRequest,
  StartTaskExecutionResponse,
  StartTaskExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartTaskExecutionRequest,
  output: StartTaskExecutionResponse,
  errors: [InternalException, InvalidRequestException, LocationAccessTestFailed],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartTaskExecution",
}));

export type TagResourceError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Applies a *tag* to an Amazon Web Services resource. Tags are
 * key-value pairs that can help you manage, filter, and search for your resources.
 *
 * These include DataSync resources, such as locations, tasks, and task
 * executions.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Removes tags from an Amazon Web Services resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAgentError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Updates the name of an DataSync agent.
 */
export const updateAgent: API.OperationMethod<
  UpdateAgentRequest,
  UpdateAgentResponse,
  UpdateAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAgentRequest,
  output: UpdateAgentResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAgent",
}));

export type UpdateLocationAzureBlobError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Modifies the following configurations of the Microsoft Azure Blob Storage transfer
 * location that you're using with DataSync.
 *
 * For more information, see Configuring DataSync transfers with Azure Blob Storage.
 */
export const updateLocationAzureBlob: API.OperationMethod<
  UpdateLocationAzureBlobRequest,
  UpdateLocationAzureBlobResponse,
  UpdateLocationAzureBlobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLocationAzureBlobRequest,
  output: UpdateLocationAzureBlobResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLocationAzureBlob",
}));

export type UpdateLocationEfsError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Modifies the following configuration parameters of the Amazon EFS transfer
 * location that you're using with DataSync.
 *
 * For more information, see Configuring DataSync
 * transfers with Amazon EFS.
 */
export const updateLocationEfs: API.OperationMethod<
  UpdateLocationEfsRequest,
  UpdateLocationEfsResponse,
  UpdateLocationEfsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLocationEfsRequest,
  output: UpdateLocationEfsResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLocationEfs",
}));

export type UpdateLocationFsxLustreError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Modifies the following configuration parameters of the Amazon FSx for Lustre
 * transfer location that you're using with DataSync.
 *
 * For more information, see Configuring DataSync
 * transfers with FSx for Lustre.
 */
export const updateLocationFsxLustre: API.OperationMethod<
  UpdateLocationFsxLustreRequest,
  UpdateLocationFsxLustreResponse,
  UpdateLocationFsxLustreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLocationFsxLustreRequest,
  output: UpdateLocationFsxLustreResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLocationFsxLustre",
}));

export type UpdateLocationFsxOntapError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Modifies the following configuration parameters of the Amazon FSx for NetApp ONTAP
 * transfer location that you're using with DataSync.
 *
 * For more information, see Configuring DataSync
 * transfers with FSx for ONTAP.
 */
export const updateLocationFsxOntap: API.OperationMethod<
  UpdateLocationFsxOntapRequest,
  UpdateLocationFsxOntapResponse,
  UpdateLocationFsxOntapError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLocationFsxOntapRequest,
  output: UpdateLocationFsxOntapResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLocationFsxOntap",
}));

export type UpdateLocationFsxOpenZfsError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Modifies the following configuration parameters of the Amazon FSx for OpenZFS
 * transfer location that you're using with DataSync.
 *
 * For more information, see Configuring DataSync
 * transfers with FSx for OpenZFS.
 *
 * Request parameters related to `SMB` aren't supported with the
 * `UpdateLocationFsxOpenZfs` operation.
 */
export const updateLocationFsxOpenZfs: API.OperationMethod<
  UpdateLocationFsxOpenZfsRequest,
  UpdateLocationFsxOpenZfsResponse,
  UpdateLocationFsxOpenZfsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLocationFsxOpenZfsRequest,
  output: UpdateLocationFsxOpenZfsResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLocationFsxOpenZfs",
}));

export type UpdateLocationFsxWindowsError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Modifies the following configuration parameters of the Amazon FSx for Windows File Server
 * transfer location that you're using with DataSync.
 *
 * For more information, see Configuring DataSync
 * transfers with FSx for Windows File Server.
 */
export const updateLocationFsxWindows: API.OperationMethod<
  UpdateLocationFsxWindowsRequest,
  UpdateLocationFsxWindowsResponse,
  UpdateLocationFsxWindowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLocationFsxWindowsRequest,
  output: UpdateLocationFsxWindowsResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLocationFsxWindows",
}));

export type UpdateLocationHdfsError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Modifies the following configuration parameters of the Hadoop Distributed File System
 * (HDFS) transfer location that you're using with DataSync.
 *
 * For more information, see Configuring DataSync
 * transfers with an HDFS cluster.
 */
export const updateLocationHdfs: API.OperationMethod<
  UpdateLocationHdfsRequest,
  UpdateLocationHdfsResponse,
  UpdateLocationHdfsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLocationHdfsRequest,
  output: UpdateLocationHdfsResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLocationHdfs",
}));

export type UpdateLocationNfsError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Modifies the following configuration parameters of the Network File System (NFS) transfer
 * location that you're using with DataSync.
 *
 * For more information, see Configuring transfers with an NFS
 * file server.
 */
export const updateLocationNfs: API.OperationMethod<
  UpdateLocationNfsRequest,
  UpdateLocationNfsResponse,
  UpdateLocationNfsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLocationNfsRequest,
  output: UpdateLocationNfsResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLocationNfs",
}));

export type UpdateLocationObjectStorageError =
  | InternalException
  | InvalidRequestException
  | CommonErrors;
/**
 * Modifies the following configuration parameters of the object storage transfer location
 * that you're using with DataSync.
 *
 * For more information, see Configuring DataSync
 * transfers with an object storage system.
 */
export const updateLocationObjectStorage: API.OperationMethod<
  UpdateLocationObjectStorageRequest,
  UpdateLocationObjectStorageResponse,
  UpdateLocationObjectStorageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLocationObjectStorageRequest,
  output: UpdateLocationObjectStorageResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLocationObjectStorage",
}));

export type UpdateLocationS3Error = InternalException | InvalidRequestException | CommonErrors;
/**
 * Modifies the following configuration parameters of the Amazon S3 transfer location
 * that you're using with DataSync.
 *
 * Before you begin, make sure that you read the following topics:
 *
 * - Storage
 * class considerations with Amazon S3 locations
 *
 * - Evaluating S3 request costs when using DataSync
 */
export const updateLocationS3: API.OperationMethod<
  UpdateLocationS3Request,
  UpdateLocationS3Response,
  UpdateLocationS3Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLocationS3Request,
  output: UpdateLocationS3Response,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLocationS3",
}));

export type UpdateLocationSmbError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Modifies the following configuration parameters of the Server Message Block (SMB) transfer
 * location that you're using with DataSync.
 *
 * For more information, see Configuring DataSync
 * transfers with an SMB file server.
 */
export const updateLocationSmb: API.OperationMethod<
  UpdateLocationSmbRequest,
  UpdateLocationSmbResponse,
  UpdateLocationSmbError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLocationSmbRequest,
  output: UpdateLocationSmbResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLocationSmb",
}));

export type UpdateTaskError =
  | InternalException
  | InvalidRequestException
  | TaskNotFound
  | CommonErrors;
/**
 * Updates the configuration of a *task*, which defines where and how
 * DataSync transfers your data.
 */
export const updateTask: API.OperationMethod<
  UpdateTaskRequest,
  UpdateTaskResponse,
  UpdateTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTaskRequest,
  output: UpdateTaskResponse,
  errors: [InternalException, InvalidRequestException, TaskNotFound],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTask",
}));

export type UpdateTaskExecutionError = InternalException | InvalidRequestException | CommonErrors;
/**
 * Updates the configuration of a running DataSync task execution.
 *
 * Currently, the only `Option` that you can modify with
 * `UpdateTaskExecution` is
 * BytesPerSecond
 * , which throttles bandwidth for a running or queued task
 * execution.
 */
export const updateTaskExecution: API.OperationMethod<
  UpdateTaskExecutionRequest,
  UpdateTaskExecutionResponse,
  UpdateTaskExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTaskExecutionRequest,
  output: UpdateTaskExecutionResponse,
  errors: [InternalException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTaskExecution",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TaskExecutionArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CancelTaskExecutionRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CancelTaskExecutionResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.optional(S.String) })).annotate({
        identifier: "TagListEntry",
      });
    case 3:
      return S.Array(TagListEntry);
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ActivationKey: S.String,
          AgentName: S.optional(S.String),
          Tags: S.optional(InputTagList),
          VpcEndpointId: S.optional(S.String),
          SubnetArns: S.optional(PLSubnetArnList),
          SecurityGroupArns: S.optional(PLSecurityGroupArnList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateAgentRequest" });
    case 6:
      return S.suspend(() => S.Struct({ AgentArn: S.optional(S.String) })).annotate({
        identifier: "CreateAgentResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ Token: SensitiveString })).annotate({
        identifier: "AzureBlobSasConfiguration",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SecretArn: S.optional(S.String), KmsKeyArn: S.optional(S.String) }),
      ).annotate({ identifier: "CmkSecretConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({ SecretArn: S.optional(S.String), SecretAccessRoleArn: S.optional(S.String) }),
      ).annotate({ identifier: "CustomSecretConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ContainerUrl: S.String,
          AuthenticationType: AzureBlobAuthenticationType,
          SasConfiguration: S.optional(AzureBlobSasConfiguration),
          BlobType: S.optional(AzureBlobType),
          AccessTier: S.optional(AzureAccessTier),
          Subdirectory: S.optional(S.String),
          AgentArns: S.optional(AgentArnList),
          Tags: S.optional(InputTagList),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLocationAzureBlobRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ LocationArn: S.optional(S.String) })).annotate({
        identifier: "CreateLocationAzureBlobResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ SubnetArn: S.String, SecurityGroupArns: Ec2SecurityGroupArnList }),
      ).annotate({ identifier: "Ec2Config" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Subdirectory: S.optional(S.String),
          EfsFilesystemArn: S.String,
          Ec2Config: Ec2Config,
          Tags: S.optional(InputTagList),
          AccessPointArn: S.optional(S.String),
          FileSystemAccessRoleArn: S.optional(S.String),
          InTransitEncryption: S.optional(EfsInTransitEncryption),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateLocationEfsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FsxFilesystemArn: S.String,
          SecurityGroupArns: Ec2SecurityGroupArnList,
          Subdirectory: S.optional(S.String),
          Tags: S.optional(InputTagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLocationFsxLustreRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ Version: S.optional(NfsVersion) })).annotate({
        identifier: "NfsMountOptions",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ MountOptions: S.optional(NfsMountOptions) })).annotate({
        identifier: "FsxProtocolNfs",
      });
    case 1:
      return S.suspend(() => S.Struct({ SecretArn: S.optional(S.String) })).annotate({
        identifier: "ManagedSecretConfig",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Domain: S.optional(S.String),
          MountOptions: S.optional(SmbMountOptions),
          Password: S.optional(SensitiveString),
          User: S.String,
          ManagedSecretConfig: S.optional(ManagedSecretConfig),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
        }),
      ).annotate({ identifier: "FsxProtocolSmb" });
    case 3:
      return S.suspend(() =>
        S.Struct({ NFS: S.optional(FsxProtocolNfs), SMB: S.optional(FsxProtocolSmb) }),
      ).annotate({ identifier: "FsxProtocol" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Protocol: FsxProtocol,
          SecurityGroupArns: Ec2SecurityGroupArnList,
          StorageVirtualMachineArn: S.String,
          Subdirectory: S.optional(S.String),
          Tags: S.optional(InputTagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLocationFsxOntapRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FsxFilesystemArn: S.String,
          Protocol: FsxProtocol,
          SecurityGroupArns: Ec2SecurityGroupArnList,
          Subdirectory: S.optional(S.String),
          Tags: S.optional(InputTagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLocationFsxOpenZfsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Subdirectory: S.optional(S.String),
          FsxFilesystemArn: S.String,
          SecurityGroupArns: Ec2SecurityGroupArnList,
          Tags: S.optional(InputTagList),
          User: S.String,
          Domain: S.optional(S.String),
          Password: S.optional(SensitiveString),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLocationFsxWindowsRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ Hostname: S.String, Port: S.Number })).annotate({
        identifier: "HdfsNameNode",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(HdfsNameNode);
    case 1:
      return S.suspend(() =>
        S.Struct({
          RpcProtection: S.optional(HdfsRpcProtection),
          DataTransferProtection: S.optional(HdfsDataTransferProtection),
        }),
      ).annotate({ identifier: "QopConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Subdirectory: S.optional(S.String),
          NameNodes: HdfsNameNodeList,
          BlockSize: S.optional(S.Number),
          ReplicationFactor: S.optional(S.Number),
          KmsKeyProviderUri: S.optional(S.String),
          QopConfiguration: S.optional(QopConfiguration),
          AuthenticationType: HdfsAuthenticationType,
          SimpleUser: S.optional(S.String),
          KerberosPrincipal: S.optional(S.String),
          KerberosKeytab: S.optional(T.Blob),
          KerberosKrb5Conf: S.optional(T.Blob),
          AgentArns: AgentArnList,
          Tags: S.optional(InputTagList),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLocationHdfsRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ AgentArns: AgentArnList })).annotate({
        identifier: "OnPremConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Subdirectory: S.String,
          ServerHostname: S.String,
          OnPremConfig: OnPremConfig,
          MountOptions: S.optional(NfsMountOptions),
          Tags: S.optional(InputTagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateLocationNfsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServerHostname: S.String,
          ServerPort: S.optional(S.Number),
          ServerProtocol: S.optional(ObjectStorageServerProtocol),
          Subdirectory: S.optional(S.String),
          BucketName: S.String,
          AccessKey: S.optional(S.String),
          SecretKey: S.optional(SensitiveString),
          AgentArns: S.optional(AgentArnList),
          Tags: S.optional(InputTagList),
          ServerCertificate: S.optional(T.Blob),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLocationObjectStorageRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ BucketAccessRoleArn: S.String })).annotate({
        identifier: "S3Config",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Subdirectory: S.optional(S.String),
          S3BucketArn: S.String,
          S3StorageClass: S.optional(S3StorageClass),
          S3Config: S3Config,
          AgentArns: S.optional(AgentArnList),
          Tags: S.optional(InputTagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateLocationS3Request" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ LocationArn: S.optional(S.String) })).annotate({
        identifier: "CreateLocationS3Response",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Subdirectory: S.String,
          ServerHostname: S.String,
          User: S.optional(S.String),
          Domain: S.optional(S.String),
          Password: S.optional(SensitiveString),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
          AgentArns: AgentArnList,
          MountOptions: S.optional(SmbMountOptions),
          Tags: S.optional(InputTagList),
          AuthenticationType: S.optional(SmbAuthenticationType),
          DnsIpAddresses: S.optional(DnsIpList),
          KerberosPrincipal: S.optional(S.String),
          KerberosKeytab: S.optional(T.Blob),
          KerberosKrb5Conf: S.optional(T.Blob),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateLocationSmbRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          VerifyMode: S.optional(VerifyMode),
          OverwriteMode: S.optional(OverwriteMode),
          Atime: S.optional(Atime),
          Mtime: S.optional(Mtime),
          Uid: S.optional(Uid),
          Gid: S.optional(Gid),
          PreserveDeletedFiles: S.optional(PreserveDeletedFiles),
          PreserveDevices: S.optional(PreserveDevices),
          PosixPermissions: S.optional(PosixPermissions),
          BytesPerSecond: S.optional(S.Number),
          TaskQueueing: S.optional(TaskQueueing),
          LogLevel: S.optional(LogLevel),
          TransferMode: S.optional(TransferMode),
          SecurityDescriptorCopyFlags: S.optional(SmbSecurityDescriptorCopyFlags),
          ObjectTags: S.optional(ObjectTags),
        }),
      ).annotate({ identifier: "Options" });
    case 3:
      return S.suspend(() =>
        S.Struct({ FilterType: S.optional(FilterType), Value: S.optional(S.String) }),
      ).annotate({ identifier: "FilterRule" });
    case 4:
      return S.Array(FilterRule);
    case 5:
      return S.suspend(() =>
        S.Struct({ ScheduleExpression: S.String, Status: S.optional(ScheduleStatus) }),
      ).annotate({ identifier: "TaskSchedule" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ManifestObjectPath: S.String,
          BucketAccessRoleArn: S.String,
          S3BucketArn: S.String,
          ManifestObjectVersionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3ManifestConfig" });
    case 7:
      return S.suspend(() => S.Struct({ S3: S3ManifestConfig })).annotate({
        identifier: "SourceManifestConfig",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(ManifestAction),
          Format: S.optional(ManifestFormat),
          Source: S.optional(SourceManifestConfig),
        }),
      ).annotate({ identifier: "ManifestConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Subdirectory: S.optional(S.String),
          S3BucketArn: S.String,
          BucketAccessRoleArn: S.String,
        }),
      ).annotate({ identifier: "ReportDestinationS3" });
    case 2:
      return S.suspend(() => S.Struct({ S3: S.optional(ReportDestinationS3) })).annotate({
        identifier: "ReportDestination",
      });
    case 3:
      return S.suspend(() => S.Struct({ ReportLevel: S.optional(ReportLevel) })).annotate({
        identifier: "ReportOverride",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Transferred: S.optional(ReportOverride),
          Verified: S.optional(ReportOverride),
          Deleted: S.optional(ReportOverride),
          Skipped: S.optional(ReportOverride),
        }),
      ).annotate({ identifier: "ReportOverrides" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Destination: S.optional(ReportDestination),
          OutputType: S.optional(ReportOutputType),
          ReportLevel: S.optional(ReportLevel),
          ObjectVersionIds: S.optional(ObjectVersionIds),
          Overrides: S.optional(ReportOverrides),
        }),
      ).annotate({ identifier: "TaskReportConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SourceLocationArn: S.String,
          DestinationLocationArn: S.String,
          CloudWatchLogGroupArn: S.optional(S.String),
          Name: S.optional(S.String),
          Options: S.optional(Options),
          Excludes: S.optional(FilterList),
          Schedule: S.optional(TaskSchedule),
          Tags: S.optional(InputTagList),
          Includes: S.optional(FilterList),
          ManifestConfig: S.optional(ManifestConfig),
          TaskReportConfig: S.optional(TaskReportConfig),
          TaskMode: S.optional(TaskMode),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTaskRequest" });
    case 7:
      return S.suspend(() => S.Struct({ TaskArn: S.optional(S.String) })).annotate({
        identifier: "CreateTaskResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AgentArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteAgentRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ LocationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteLocationRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ TaskArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTaskRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ AgentArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeAgentRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          VpcEndpointId: S.optional(S.String),
          PrivateLinkEndpoint: S.optional(S.String),
          SubnetArns: S.optional(PLSubnetArnList),
          SecurityGroupArns: S.optional(PLSecurityGroupArnList),
        }),
      ).annotate({ identifier: "PrivateLinkConfig" });
    case 5:
      return S.suspend(() => S.Struct({ Version: S.optional(S.String) })).annotate({
        identifier: "Platform",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AgentArn: S.optional(S.String),
          Name: S.optional(S.String),
          Status: S.optional(AgentStatus),
          LastConnectionTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndpointType: S.optional(EndpointType),
          PrivateLinkConfig: S.optional(PrivateLinkConfig),
          Platform: S.optional(Platform),
        }),
      ).annotate({ identifier: "DescribeAgentResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ LocationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLocationAzureBlobRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.optional(S.String),
          LocationUri: S.optional(S.String),
          AuthenticationType: S.optional(AzureBlobAuthenticationType),
          BlobType: S.optional(AzureBlobType),
          AccessTier: S.optional(AzureAccessTier),
          AgentArns: S.optional(AgentArnList),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ManagedSecretConfig: S.optional(ManagedSecretConfig),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
        }),
      ).annotate({
        identifier: "DescribeLocationAzureBlobResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ LocationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLocationEfsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.optional(S.String),
          LocationUri: S.optional(S.String),
          Ec2Config: S.optional(Ec2Config),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AccessPointArn: S.optional(S.String),
          FileSystemAccessRoleArn: S.optional(S.String),
          InTransitEncryption: S.optional(EfsInTransitEncryption),
        }),
      ).annotate({
        identifier: "DescribeLocationEfsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ LocationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLocationFsxLustreRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.optional(S.String),
          LocationUri: S.optional(S.String),
          SecurityGroupArns: S.optional(Ec2SecurityGroupArnList),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeLocationFsxLustreResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ LocationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLocationFsxOntapRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LocationArn: S.optional(S.String),
          LocationUri: S.optional(S.String),
          Protocol: S.optional(FsxProtocol),
          SecurityGroupArns: S.optional(Ec2SecurityGroupArnList),
          StorageVirtualMachineArn: S.optional(S.String),
          FsxFilesystemArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeLocationFsxOntapResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ LocationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLocationFsxOpenZfsRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.optional(S.String),
          LocationUri: S.optional(S.String),
          SecurityGroupArns: S.optional(Ec2SecurityGroupArnList),
          Protocol: S.optional(FsxProtocol),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeLocationFsxOpenZfsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ LocationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLocationFsxWindowsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.optional(S.String),
          LocationUri: S.optional(S.String),
          SecurityGroupArns: S.optional(Ec2SecurityGroupArnList),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          User: S.optional(S.String),
          Domain: S.optional(S.String),
          ManagedSecretConfig: S.optional(ManagedSecretConfig),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
        }),
      ).annotate({
        identifier: "DescribeLocationFsxWindowsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ LocationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLocationHdfsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.optional(S.String),
          LocationUri: S.optional(S.String),
          NameNodes: S.optional(HdfsNameNodeList),
          BlockSize: S.optional(S.Number),
          ReplicationFactor: S.optional(S.Number),
          KmsKeyProviderUri: S.optional(S.String),
          QopConfiguration: S.optional(QopConfiguration),
          AuthenticationType: S.optional(HdfsAuthenticationType),
          SimpleUser: S.optional(S.String),
          KerberosPrincipal: S.optional(S.String),
          AgentArns: S.optional(AgentArnList),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ManagedSecretConfig: S.optional(ManagedSecretConfig),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
        }),
      ).annotate({
        identifier: "DescribeLocationHdfsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ LocationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLocationNfsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.optional(S.String),
          LocationUri: S.optional(S.String),
          OnPremConfig: S.optional(OnPremConfig),
          MountOptions: S.optional(NfsMountOptions),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeLocationNfsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ LocationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLocationObjectStorageRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.optional(S.String),
          LocationUri: S.optional(S.String),
          AccessKey: S.optional(S.String),
          ServerPort: S.optional(S.Number),
          ServerProtocol: S.optional(ObjectStorageServerProtocol),
          AgentArns: S.optional(AgentArnList),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ServerCertificate: S.optional(T.Blob),
          ManagedSecretConfig: S.optional(ManagedSecretConfig),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
        }),
      ).annotate({
        identifier: "DescribeLocationObjectStorageResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ LocationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLocationS3Request",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.optional(S.String),
          LocationUri: S.optional(S.String),
          S3StorageClass: S.optional(S3StorageClass),
          S3Config: S.optional(S3Config),
          AgentArns: S.optional(AgentArnList),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeLocationS3Response",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ LocationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLocationSmbRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.optional(S.String),
          LocationUri: S.optional(S.String),
          AgentArns: S.optional(AgentArnList),
          User: S.optional(S.String),
          Domain: S.optional(S.String),
          MountOptions: S.optional(SmbMountOptions),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DnsIpAddresses: S.optional(DnsIpList),
          KerberosPrincipal: S.optional(S.String),
          AuthenticationType: S.optional(SmbAuthenticationType),
          ManagedSecretConfig: S.optional(ManagedSecretConfig),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
        }),
      ).annotate({
        identifier: "DescribeLocationSmbResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ TaskArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeTaskRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StatusUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DisabledReason: S.optional(S.String),
          DisabledBy: S.optional(ScheduleDisabledBy),
        }),
      ).annotate({ identifier: "TaskScheduleDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TaskArn: S.optional(S.String),
          Status: S.optional(TaskStatus),
          Name: S.optional(S.String),
          CurrentTaskExecutionArn: S.optional(S.String),
          SourceLocationArn: S.optional(S.String),
          DestinationLocationArn: S.optional(S.String),
          CloudWatchLogGroupArn: S.optional(S.String),
          SourceNetworkInterfaceArns: S.optional(SourceNetworkInterfaceArns),
          DestinationNetworkInterfaceArns: S.optional(DestinationNetworkInterfaceArns),
          Options: S.optional(Options),
          Excludes: S.optional(FilterList),
          Schedule: S.optional(TaskSchedule),
          ErrorCode: S.optional(S.String),
          ErrorDetail: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Includes: S.optional(FilterList),
          ManifestConfig: S.optional(ManifestConfig),
          TaskReportConfig: S.optional(TaskReportConfig),
          ScheduleDetails: S.optional(TaskScheduleDetails),
          TaskMode: S.optional(TaskMode),
        }),
      ).annotate({ identifier: "DescribeTaskResponse" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TaskExecutionArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeTaskExecutionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PrepareDuration: S.optional(S.Number),
          PrepareStatus: S.optional(PhaseStatus),
          TotalDuration: S.optional(S.Number),
          TransferDuration: S.optional(S.Number),
          TransferStatus: S.optional(PhaseStatus),
          VerifyDuration: S.optional(S.Number),
          VerifyStatus: S.optional(PhaseStatus),
          ErrorCode: S.optional(S.String),
          ErrorDetail: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TaskExecutionResultDetail",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(PhaseStatus),
          ErrorCode: S.optional(S.String),
          ErrorDetail: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReportResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({ AtSource: S.optional(S.Number), AtDestinationForDelete: S.optional(S.Number) }),
      ).annotate({
        identifier: "TaskExecutionFilesListedDetail",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Prepare: S.optional(S.Number),
          Transfer: S.optional(S.Number),
          Verify: S.optional(S.Number),
          Delete: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "TaskExecutionFilesFailedDetail",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          List: S.optional(S.Number),
          Prepare: S.optional(S.Number),
          Transfer: S.optional(S.Number),
          Verify: S.optional(S.Number),
          Delete: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "TaskExecutionFoldersFailedDetail",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TaskExecutionArn: S.optional(S.String),
          Status: S.optional(TaskExecutionStatus),
          Options: S.optional(Options),
          Excludes: S.optional(FilterList),
          Includes: S.optional(FilterList),
          ManifestConfig: S.optional(ManifestConfig),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EstimatedFilesToTransfer: S.optional(S.Number),
          EstimatedBytesToTransfer: S.optional(S.Number),
          FilesTransferred: S.optional(S.Number),
          BytesWritten: S.optional(S.Number),
          BytesTransferred: S.optional(S.Number),
          BytesCompressed: S.optional(S.Number),
          Result: S.optional(TaskExecutionResultDetail),
          TaskReportConfig: S.optional(TaskReportConfig),
          FilesDeleted: S.optional(S.Number),
          FilesSkipped: S.optional(S.Number),
          FilesVerified: S.optional(S.Number),
          ReportResult: S.optional(ReportResult),
          EstimatedFilesToDelete: S.optional(S.Number),
          TaskMode: S.optional(TaskMode),
          FilesPrepared: S.optional(S.Number),
          FilesListed: S.optional(TaskExecutionFilesListedDetail),
          FilesFailed: S.optional(TaskExecutionFilesFailedDetail),
          EstimatedFoldersToDelete: S.optional(S.Number),
          EstimatedFoldersToTransfer: S.optional(S.Number),
          FoldersSkipped: S.optional(S.Number),
          FoldersPrepared: S.optional(S.Number),
          FoldersTransferred: S.optional(S.Number),
          FoldersVerified: S.optional(S.Number),
          FoldersDeleted: S.optional(S.Number),
          FoldersListed: S.optional(TaskExecutionFoldersListedDetail),
          FoldersFailed: S.optional(TaskExecutionFoldersFailedDetail),
          LaunchTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeTaskExecutionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAgentsRequest" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AgentArn: S.optional(S.String),
          Name: S.optional(S.String),
          Status: S.optional(AgentStatus),
          Platform: S.optional(Platform),
        }),
      ).annotate({ identifier: "AgentListEntry" });
    case 1:
      return S.Array(AgentListEntry);
    case 2:
      return S.suspend(() =>
        S.Struct({ Agents: S.optional(AgentList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAgentsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: LocationFilterName, Values: FilterValues, Operator: Operator }),
      ).annotate({ identifier: "LocationFilter" });
    case 4:
      return S.Array(LocationFilter);
    case 5:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Filters: S.optional(LocationFilters),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListLocationsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ LocationArn: S.optional(S.String), LocationUri: S.optional(S.String) }),
      ).annotate({ identifier: "LocationListEntry" });
    case 7:
      return S.Array(LocationListEntry);
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Locations: S.optional(LocationList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListLocationsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Tags: S.optional(OutputTagList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TaskArn: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTaskExecutionsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TaskExecutionArn: S.optional(S.String),
          Status: S.optional(TaskExecutionStatus),
          TaskMode: S.optional(TaskMode),
        }),
      ).annotate({ identifier: "TaskExecutionListEntry" });
    case 5:
      return S.Array(TaskExecutionListEntry);
    case 6:
      return S.suspend(() =>
        S.Struct({
          TaskExecutions: S.optional(TaskExecutionList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTaskExecutionsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Filters: S.optional(TaskFilters),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTasksRequest" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TaskArn: S.optional(S.String),
          Status: S.optional(TaskStatus),
          Name: S.optional(S.String),
          TaskMode: S.optional(TaskMode),
        }),
      ).annotate({ identifier: "TaskListEntry" });
    case 1:
      return S.Array(TaskListEntry);
    case 2:
      return S.suspend(() =>
        S.Struct({ Tasks: S.optional(TaskList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTasksResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TaskArn: S.String,
          OverrideOptions: S.optional(Options),
          Includes: S.optional(FilterList),
          Excludes: S.optional(FilterList),
          ManifestConfig: S.optional(ManifestConfig),
          TaskReportConfig: S.optional(TaskReportConfig),
          Tags: S.optional(InputTagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartTaskExecutionRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ TaskExecutionArn: S.optional(S.String) })).annotate({
        identifier: "StartTaskExecutionResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: InputTagList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Keys: TagKeyList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ AgentArn: S.String, Name: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateAgentRequest" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.String,
          Subdirectory: S.optional(S.String),
          AuthenticationType: S.optional(AzureBlobAuthenticationType),
          SasConfiguration: S.optional(AzureBlobSasConfiguration),
          BlobType: S.optional(AzureBlobType),
          AccessTier: S.optional(AzureAccessTier),
          AgentArns: S.optional(AgentArnList),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateLocationAzureBlobRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "UpdateLocationAzureBlobResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.String,
          Subdirectory: S.optional(S.String),
          AccessPointArn: S.optional(S.String),
          FileSystemAccessRoleArn: S.optional(S.String),
          InTransitEncryption: S.optional(EfsInTransitEncryption),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateLocationEfsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ LocationArn: S.String, Subdirectory: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateLocationFsxLustreRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Domain: S.optional(S.String),
          MountOptions: S.optional(SmbMountOptions),
          Password: S.optional(SensitiveString),
          User: S.optional(S.String),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
        }),
      ).annotate({ identifier: "FsxUpdateProtocolSmb" });
    case 5:
      return S.suspend(() =>
        S.Struct({ NFS: S.optional(FsxProtocolNfs), SMB: S.optional(FsxUpdateProtocolSmb) }),
      ).annotate({ identifier: "FsxUpdateProtocol" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.String,
          Protocol: S.optional(FsxUpdateProtocol),
          Subdirectory: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateLocationFsxOntapRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.String,
          Protocol: S.optional(FsxProtocol),
          Subdirectory: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateLocationFsxOpenZfsRequest",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "UpdateLocationFsxOpenZfsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.String,
          Subdirectory: S.optional(S.String),
          Domain: S.optional(S.String),
          User: S.optional(S.String),
          Password: S.optional(SensitiveString),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateLocationFsxWindowsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.String,
          Subdirectory: S.optional(S.String),
          NameNodes: S.optional(HdfsNameNodeList),
          BlockSize: S.optional(S.Number),
          ReplicationFactor: S.optional(S.Number),
          KmsKeyProviderUri: S.optional(S.String),
          QopConfiguration: S.optional(QopConfiguration),
          AuthenticationType: S.optional(HdfsAuthenticationType),
          SimpleUser: S.optional(S.String),
          KerberosPrincipal: S.optional(S.String),
          KerberosKeytab: S.optional(T.Blob),
          KerberosKrb5Conf: S.optional(T.Blob),
          AgentArns: S.optional(AgentArnList),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateLocationHdfsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.String,
          Subdirectory: S.optional(S.String),
          ServerHostname: S.optional(S.String),
          OnPremConfig: S.optional(OnPremConfig),
          MountOptions: S.optional(NfsMountOptions),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateLocationNfsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.String,
          ServerPort: S.optional(S.Number),
          ServerProtocol: S.optional(ObjectStorageServerProtocol),
          Subdirectory: S.optional(S.String),
          ServerHostname: S.optional(S.String),
          AccessKey: S.optional(S.String),
          SecretKey: S.optional(SensitiveString),
          AgentArns: S.optional(AgentArnList),
          ServerCertificate: S.optional(T.Blob),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateLocationObjectStorageRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.String,
          Subdirectory: S.optional(S.String),
          S3StorageClass: S.optional(S3StorageClass),
          S3Config: S.optional(S3Config),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateLocationS3Request" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LocationArn: S.String,
          Subdirectory: S.optional(S.String),
          ServerHostname: S.optional(S.String),
          User: S.optional(S.String),
          Domain: S.optional(S.String),
          Password: S.optional(SensitiveString),
          CmkSecretConfig: S.optional(CmkSecretConfig),
          CustomSecretConfig: S.optional(CustomSecretConfig),
          AgentArns: S.optional(AgentArnList),
          MountOptions: S.optional(SmbMountOptions),
          AuthenticationType: S.optional(SmbAuthenticationType),
          DnsIpAddresses: S.optional(DnsIpList),
          KerberosPrincipal: S.optional(S.String),
          KerberosKeytab: S.optional(T.Blob),
          KerberosKrb5Conf: S.optional(T.Blob),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateLocationSmbRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TaskArn: S.String,
          Options: S.optional(Options),
          Excludes: S.optional(FilterList),
          Schedule: S.optional(TaskSchedule),
          Name: S.optional(S.String),
          CloudWatchLogGroupArn: S.optional(S.String),
          Includes: S.optional(FilterList),
          ManifestConfig: S.optional(ManifestConfig),
          TaskReportConfig: S.optional(TaskReportConfig),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateTaskRequest" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TaskExecutionArn: S.String, Options: Options }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateTaskExecutionRequest",
      });
  }
}
