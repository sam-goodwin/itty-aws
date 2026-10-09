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
const ns = /*@__PURE__*/ T.XmlNamespace("http://storagegateway.amazonaws.com/doc/2013-06-30");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Storage Gateway",
  serviceShapeName: "StorageGateway_20130630",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "storagegateway" });
const ver = /*@__PURE__*/ T.ServiceVersion("2013-06-30");
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
              `https://storagegateway-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://storagegateway-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://storagegateway.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://storagegateway.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class InternalServerError
  extends /*@__PURE__*/ S.TaggedError<InternalServerError>()(
    "InternalServerError",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      error: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => StorageGatewayError).annotate({
          identifier: "StorageGatewayError",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidGatewayRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidGatewayRequestException>()(
    "InvalidGatewayRequestException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      error: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => StorageGatewayError).annotate({
          identifier: "StorageGatewayError",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ServiceUnavailableError
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableError>()(
    "ServiceUnavailableError",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      error: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => StorageGatewayError).annotate({
          identifier: "StorageGatewayError",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export type ActivationKey = string;
export type GatewayName = string;
export type GatewayTimezone = string;
export type RegionId = string;
export type GatewayType = string;
export type TapeDriveType = string;
export type MediumChangerType = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<Tag>;
export type Tags = Tag[];
const Tags = /*@__PURE__*/ __L.at(__c0, 1);
export interface ActivateGatewayInput {
  ActivationKey: string;
  GatewayName: string;
  GatewayTimezone: string;
  GatewayRegion: string;
  GatewayType?: string;
  TapeDriveType?: string;
  MediumChangerType?: string;
  Tags?: Tag[];
}
const ActivateGatewayInput = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<ActivateGatewayInput>;
export type GatewayARN = string;
export interface ActivateGatewayOutput {
  GatewayARN?: string;
}
const ActivateGatewayOutput = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<ActivateGatewayOutput>;
export type DiskId = string;
export type DiskIds = string[];
const DiskIds = /*@__PURE__*/ __L.at(__c0, 4);
export interface AddCacheInput {
  GatewayARN: string;
  DiskIds: string[];
}
const AddCacheInput = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<AddCacheInput>;
export interface AddCacheOutput {
  GatewayARN?: string;
}
const AddCacheOutput = ActivateGatewayOutput as any as S.Schema<AddCacheOutput>;
export type ResourceARN = string;
export interface AddTagsToResourceInput {
  ResourceARN: string;
  Tags: Tag[];
}
const AddTagsToResourceInput = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<AddTagsToResourceInput>;
export interface AddTagsToResourceOutput {
  ResourceARN?: string;
}
const AddTagsToResourceOutput = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<AddTagsToResourceOutput>;
export interface AddUploadBufferInput {
  GatewayARN: string;
  DiskIds: string[];
}
const AddUploadBufferInput = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<AddUploadBufferInput>;
export interface AddUploadBufferOutput {
  GatewayARN?: string;
}
const AddUploadBufferOutput = ActivateGatewayOutput as any as S.Schema<AddUploadBufferOutput>;
export interface AddWorkingStorageInput {
  GatewayARN: string;
  DiskIds: string[];
}
const AddWorkingStorageInput = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<AddWorkingStorageInput>;
export interface AddWorkingStorageOutput {
  GatewayARN?: string;
}
const AddWorkingStorageOutput = ActivateGatewayOutput as any as S.Schema<AddWorkingStorageOutput>;
export type TapeARN = string;
export type PoolId = string;
export interface AssignTapePoolInput {
  TapeARN: string;
  PoolId: string;
  BypassGovernanceRetention?: boolean;
}
const AssignTapePoolInput = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<AssignTapePoolInput>;
export interface AssignTapePoolOutput {
  TapeARN?: string;
}
const AssignTapePoolOutput = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<AssignTapePoolOutput>;
export type DomainUserName = string;
export type DomainUserPassword = string | redacted.Redacted<string>;
export type ClientToken = string;
export type FileSystemLocationARN = string;
export type AuditDestinationARN = string;
export type CacheStaleTimeoutInSeconds = number;
export interface CacheAttributes {
  CacheStaleTimeoutInSeconds?: number;
}
const CacheAttributes = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<CacheAttributes>;
export type IPV4Address = string;
export type IpAddressList = string[];
const IpAddressList = DiskIds as any as S.Schema<IpAddressList>;
export interface EndpointNetworkConfiguration {
  IpAddresses?: string[];
}
const EndpointNetworkConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<EndpointNetworkConfiguration>;
export interface AssociateFileSystemInput {
  UserName: string;
  Password: string | redacted.Redacted<string>;
  ClientToken: string;
  GatewayARN: string;
  LocationARN: string;
  Tags?: Tag[];
  AuditDestinationARN?: string;
  CacheAttributes?: CacheAttributes;
  EndpointNetworkConfiguration?: EndpointNetworkConfiguration;
}
const AssociateFileSystemInput = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<AssociateFileSystemInput>;
export type FileSystemAssociationARN = string;
export interface AssociateFileSystemOutput {
  FileSystemAssociationARN?: string;
}
const AssociateFileSystemOutput = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<AssociateFileSystemOutput>;
export type TargetName = string;
export type VolumeARN = string;
export type NetworkInterfaceId = string;
export interface AttachVolumeInput {
  GatewayARN: string;
  TargetName?: string;
  VolumeARN: string;
  NetworkInterfaceId: string;
  DiskId?: string;
}
const AttachVolumeInput = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<AttachVolumeInput>;
export type TargetARN = string;
export interface AttachVolumeOutput {
  VolumeARN?: string;
  TargetARN?: string;
}
const AttachVolumeOutput = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<AttachVolumeOutput>;
export interface CancelArchivalInput {
  GatewayARN: string;
  TapeARN: string;
}
const CancelArchivalInput = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<CancelArchivalInput>;
export interface CancelArchivalOutput {
  TapeARN?: string;
}
const CancelArchivalOutput = AssignTapePoolOutput as any as S.Schema<CancelArchivalOutput>;
export type CacheReportARN = string;
export interface CancelCacheReportInput {
  CacheReportARN: string;
}
const CancelCacheReportInput = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<CancelCacheReportInput>;
export interface CancelCacheReportOutput {
  CacheReportARN?: string;
}
const CancelCacheReportOutput = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<CancelCacheReportOutput>;
export interface CancelRetrievalInput {
  GatewayARN: string;
  TapeARN: string;
}
const CancelRetrievalInput = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<CancelRetrievalInput>;
export interface CancelRetrievalOutput {
  TapeARN?: string;
}
const CancelRetrievalOutput = AssignTapePoolOutput as any as S.Schema<CancelRetrievalOutput>;
export type SnapshotId = string;
export type KMSKey = string;
export interface CreateCachediSCSIVolumeInput {
  GatewayARN: string;
  VolumeSizeInBytes: number;
  SnapshotId?: string;
  TargetName: string;
  SourceVolumeARN?: string;
  NetworkInterfaceId: string;
  ClientToken: string;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  Tags?: Tag[];
}
const CreateCachediSCSIVolumeInput = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<CreateCachediSCSIVolumeInput>;
export interface CreateCachediSCSIVolumeOutput {
  VolumeARN?: string;
  TargetARN?: string;
}
const CreateCachediSCSIVolumeOutput = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<CreateCachediSCSIVolumeOutput>;
export type PermissionMode = string;
export type PermissionId = number;
export interface NFSFileShareDefaults {
  FileMode?: string;
  DirectoryMode?: string;
  GroupId?: number;
  OwnerId?: number;
}
const NFSFileShareDefaults = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<NFSFileShareDefaults>;
export type EncryptionType = "SseS3" | "SseKms" | "DsseKms" | (string & {});
const EncryptionType = S.String;

export type Role = string;
export type LocationARN = string;
export type StorageClass = string;
export type ObjectACL =
  | "private"
  | "public-read"
  | "public-read-write"
  | "authenticated-read"
  | "bucket-owner-read"
  | "bucket-owner-full-control"
  | "aws-exec-read"
  | (string & {});
const ObjectACL = S.String;

export type Ipv4OrIpv6AddressCIDR = string;
export type FileShareClientList = string[];
const FileShareClientList = DiskIds as any as S.Schema<FileShareClientList>;
export type Squash = string;
export type FileShareName = string;
export type NotificationPolicy = string;
export type DNSHostName = string;
export interface CreateNFSFileShareInput {
  ClientToken: string;
  NFSFileShareDefaults?: NFSFileShareDefaults;
  GatewayARN: string;
  EncryptionType?: EncryptionType;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  Role: string;
  LocationARN: string;
  DefaultStorageClass?: string;
  ObjectACL?: ObjectACL;
  ClientList?: string[];
  Squash?: string;
  ReadOnly?: boolean;
  GuessMIMETypeEnabled?: boolean;
  RequesterPays?: boolean;
  Tags?: Tag[];
  FileShareName?: string;
  CacheAttributes?: CacheAttributes;
  NotificationPolicy?: string;
  VPCEndpointDNSName?: string;
  BucketRegion?: string;
  AuditDestinationARN?: string;
}
const CreateNFSFileShareInput = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<CreateNFSFileShareInput>;
export type FileShareARN = string;
export interface CreateNFSFileShareOutput {
  FileShareARN?: string;
}
const CreateNFSFileShareOutput = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<CreateNFSFileShareOutput>;
export type UserListUser = string;
export type UserList = string[];
const UserList = DiskIds as any as S.Schema<UserList>;
export type Authentication = string;
export type CaseSensitivity = "ClientSpecified" | "CaseSensitive" | (string & {});
const CaseSensitivity = S.String;

export interface CreateSMBFileShareInput {
  ClientToken: string;
  GatewayARN: string;
  EncryptionType?: EncryptionType;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  Role: string;
  LocationARN: string;
  DefaultStorageClass?: string;
  ObjectACL?: ObjectACL;
  ReadOnly?: boolean;
  GuessMIMETypeEnabled?: boolean;
  RequesterPays?: boolean;
  SMBACLEnabled?: boolean;
  AccessBasedEnumeration?: boolean;
  AdminUserList?: string[];
  ValidUserList?: string[];
  InvalidUserList?: string[];
  AuditDestinationARN?: string;
  Authentication?: string;
  CaseSensitivity?: CaseSensitivity;
  Tags?: Tag[];
  FileShareName?: string;
  CacheAttributes?: CacheAttributes;
  NotificationPolicy?: string;
  VPCEndpointDNSName?: string;
  BucketRegion?: string;
  OplocksEnabled?: boolean;
}
const CreateSMBFileShareInput = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<CreateSMBFileShareInput>;
export interface CreateSMBFileShareOutput {
  FileShareARN?: string;
}
const CreateSMBFileShareOutput =
  CreateNFSFileShareOutput as any as S.Schema<CreateSMBFileShareOutput>;
export type SnapshotDescription = string;
export interface CreateSnapshotInput {
  VolumeARN: string;
  SnapshotDescription: string;
  Tags?: Tag[];
}
const CreateSnapshotInput = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<CreateSnapshotInput>;
export interface CreateSnapshotOutput {
  VolumeARN?: string;
  SnapshotId?: string;
}
const CreateSnapshotOutput = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<CreateSnapshotOutput>;
export interface CreateSnapshotFromVolumeRecoveryPointInput {
  VolumeARN: string;
  SnapshotDescription: string;
  Tags?: Tag[];
}
const CreateSnapshotFromVolumeRecoveryPointInput = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<CreateSnapshotFromVolumeRecoveryPointInput>;
export interface CreateSnapshotFromVolumeRecoveryPointOutput {
  SnapshotId?: string;
  VolumeARN?: string;
  VolumeRecoveryPointTime?: string;
}
const CreateSnapshotFromVolumeRecoveryPointOutput = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateSnapshotFromVolumeRecoveryPointOutput>;
export interface CreateStorediSCSIVolumeInput {
  GatewayARN: string;
  DiskId: string;
  SnapshotId?: string;
  PreserveExistingData: boolean;
  TargetName: string;
  NetworkInterfaceId: string;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  Tags?: Tag[];
}
const CreateStorediSCSIVolumeInput = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CreateStorediSCSIVolumeInput>;
export interface CreateStorediSCSIVolumeOutput {
  VolumeARN?: string;
  VolumeSizeInBytes?: number;
  TargetARN?: string;
}
const CreateStorediSCSIVolumeOutput = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<CreateStorediSCSIVolumeOutput>;
export type PoolName = string;
export type TapeStorageClass = "DEEP_ARCHIVE" | "GLACIER" | (string & {});
const TapeStorageClass = S.String;

export type RetentionLockType = "COMPLIANCE" | "GOVERNANCE" | "NONE" | (string & {});
const RetentionLockType = S.String;

export type RetentionLockTimeInDays = number;
export interface CreateTapePoolInput {
  PoolName: string;
  StorageClass: TapeStorageClass;
  RetentionLockType?: RetentionLockType;
  RetentionLockTimeInDays?: number;
  Tags?: Tag[];
}
const CreateTapePoolInput = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<CreateTapePoolInput>;
export type PoolARN = string;
export interface CreateTapePoolOutput {
  PoolARN?: string;
}
const CreateTapePoolOutput = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<CreateTapePoolOutput>;
export type TapeSize = number;
export type NumTapesToCreate = number;
export type TapeBarcodePrefix = string;
export interface CreateTapesInput {
  GatewayARN: string;
  TapeSizeInBytes: number;
  ClientToken: string;
  NumTapesToCreate: number;
  TapeBarcodePrefix: string;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  PoolId?: string;
  Worm?: boolean;
  Tags?: Tag[];
}
const CreateTapesInput = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<CreateTapesInput>;
export type TapeARNs = string[];
const TapeARNs = DiskIds as any as S.Schema<TapeARNs>;
export interface CreateTapesOutput {
  TapeARNs?: string[];
}
const CreateTapesOutput = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<CreateTapesOutput>;
export type TapeBarcode = string;
export interface CreateTapeWithBarcodeInput {
  GatewayARN: string;
  TapeSizeInBytes: number;
  TapeBarcode: string;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  PoolId?: string;
  Worm?: boolean;
  Tags?: Tag[];
}
const CreateTapeWithBarcodeInput = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<CreateTapeWithBarcodeInput>;
export interface CreateTapeWithBarcodeOutput {
  TapeARN?: string;
}
const CreateTapeWithBarcodeOutput = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<CreateTapeWithBarcodeOutput>;
export interface DeleteAutomaticTapeCreationPolicyInput {
  GatewayARN: string;
}
const DeleteAutomaticTapeCreationPolicyInput = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<DeleteAutomaticTapeCreationPolicyInput>;
export interface DeleteAutomaticTapeCreationPolicyOutput {
  GatewayARN?: string;
}
const DeleteAutomaticTapeCreationPolicyOutput = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<DeleteAutomaticTapeCreationPolicyOutput>;
export type BandwidthType = string;
export interface DeleteBandwidthRateLimitInput {
  GatewayARN: string;
  BandwidthType: string;
}
const DeleteBandwidthRateLimitInput = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<DeleteBandwidthRateLimitInput>;
export interface DeleteBandwidthRateLimitOutput {
  GatewayARN?: string;
}
const DeleteBandwidthRateLimitOutput =
  DeleteAutomaticTapeCreationPolicyOutput as any as S.Schema<DeleteBandwidthRateLimitOutput>;
export interface DeleteCacheReportInput {
  CacheReportARN: string;
}
const DeleteCacheReportInput = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<DeleteCacheReportInput>;
export interface DeleteCacheReportOutput {
  CacheReportARN?: string;
}
const DeleteCacheReportOutput = CancelCacheReportOutput as any as S.Schema<DeleteCacheReportOutput>;
export type IqnName = string;
export interface DeleteChapCredentialsInput {
  TargetARN: string;
  InitiatorName: string;
}
const DeleteChapCredentialsInput = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<DeleteChapCredentialsInput>;
export interface DeleteChapCredentialsOutput {
  TargetARN?: string;
  InitiatorName?: string;
}
const DeleteChapCredentialsOutput = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<DeleteChapCredentialsOutput>;
export interface DeleteFileShareInput {
  FileShareARN: string;
  ForceDelete?: boolean;
}
const DeleteFileShareInput = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<DeleteFileShareInput>;
export interface DeleteFileShareOutput {
  FileShareARN?: string;
}
const DeleteFileShareOutput = CreateNFSFileShareOutput as any as S.Schema<DeleteFileShareOutput>;
export interface DeleteGatewayInput {
  GatewayARN: string;
}
const DeleteGatewayInput = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<DeleteGatewayInput>;
export interface DeleteGatewayOutput {
  GatewayARN?: string;
}
const DeleteGatewayOutput = ActivateGatewayOutput as any as S.Schema<DeleteGatewayOutput>;
export interface DeleteSnapshotScheduleInput {
  VolumeARN: string;
}
const DeleteSnapshotScheduleInput = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<DeleteSnapshotScheduleInput>;
export interface DeleteSnapshotScheduleOutput {
  VolumeARN?: string;
}
const DeleteSnapshotScheduleOutput = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<DeleteSnapshotScheduleOutput>;
export interface DeleteTapeInput {
  GatewayARN: string;
  TapeARN: string;
  BypassGovernanceRetention?: boolean;
}
const DeleteTapeInput = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<DeleteTapeInput>;
export interface DeleteTapeOutput {
  TapeARN?: string;
}
const DeleteTapeOutput = AssignTapePoolOutput as any as S.Schema<DeleteTapeOutput>;
export interface DeleteTapeArchiveInput {
  TapeARN: string;
  BypassGovernanceRetention?: boolean;
}
const DeleteTapeArchiveInput = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<DeleteTapeArchiveInput>;
export interface DeleteTapeArchiveOutput {
  TapeARN?: string;
}
const DeleteTapeArchiveOutput = AssignTapePoolOutput as any as S.Schema<DeleteTapeArchiveOutput>;
export interface DeleteTapePoolInput {
  PoolARN: string;
}
const DeleteTapePoolInput = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<DeleteTapePoolInput>;
export interface DeleteTapePoolOutput {
  PoolARN?: string;
}
const DeleteTapePoolOutput = CreateTapePoolOutput as any as S.Schema<DeleteTapePoolOutput>;
export interface DeleteVolumeInput {
  VolumeARN: string;
}
const DeleteVolumeInput = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<DeleteVolumeInput>;
export interface DeleteVolumeOutput {
  VolumeARN?: string;
}
const DeleteVolumeOutput = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<DeleteVolumeOutput>;
export interface DescribeAvailabilityMonitorTestInput {
  GatewayARN: string;
}
const DescribeAvailabilityMonitorTestInput = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<DescribeAvailabilityMonitorTestInput>;
export type AvailabilityMonitorTestStatus = "COMPLETE" | "FAILED" | "PENDING" | (string & {});
const AvailabilityMonitorTestStatus = S.String;

export interface DescribeAvailabilityMonitorTestOutput {
  GatewayARN?: string;
  Status?: AvailabilityMonitorTestStatus;
  StartTime?: Date;
}
const DescribeAvailabilityMonitorTestOutput = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DescribeAvailabilityMonitorTestOutput>;
export interface DescribeBandwidthRateLimitInput {
  GatewayARN: string;
}
const DescribeBandwidthRateLimitInput = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DescribeBandwidthRateLimitInput>;
export type BandwidthUploadRateLimit = number;
export type BandwidthDownloadRateLimit = number;
export interface DescribeBandwidthRateLimitOutput {
  GatewayARN?: string;
  AverageUploadRateLimitInBitsPerSec?: number;
  AverageDownloadRateLimitInBitsPerSec?: number;
}
const DescribeBandwidthRateLimitOutput = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DescribeBandwidthRateLimitOutput>;
export interface DescribeBandwidthRateLimitScheduleInput {
  GatewayARN: string;
}
const DescribeBandwidthRateLimitScheduleInput = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<DescribeBandwidthRateLimitScheduleInput>;
export type HourOfDay = number;
export type MinuteOfHour = number;
export type DayOfWeek = number;
export type DaysOfWeek = number[];
const DaysOfWeek = /*@__PURE__*/ __L.at(__c7, 4);
export interface BandwidthRateLimitInterval {
  StartHourOfDay: number;
  StartMinuteOfHour: number;
  EndHourOfDay: number;
  EndMinuteOfHour: number;
  DaysOfWeek: number[];
  AverageUploadRateLimitInBitsPerSec?: number;
  AverageDownloadRateLimitInBitsPerSec?: number;
}
const BandwidthRateLimitInterval = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<BandwidthRateLimitInterval>;
export type BandwidthRateLimitIntervals = BandwidthRateLimitInterval[];
const BandwidthRateLimitIntervals = /*@__PURE__*/ __L.at(__c7, 6);
export interface DescribeBandwidthRateLimitScheduleOutput {
  GatewayARN?: string;
  BandwidthRateLimitIntervals?: BandwidthRateLimitInterval[];
}
const DescribeBandwidthRateLimitScheduleOutput = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DescribeBandwidthRateLimitScheduleOutput>;
export interface DescribeCacheInput {
  GatewayARN: string;
}
const DescribeCacheInput = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<DescribeCacheInput>;
export interface DescribeCacheOutput {
  GatewayARN?: string;
  DiskIds?: string[];
  CacheAllocatedInBytes?: number;
  CacheUsedPercentage?: number;
  CacheDirtyPercentage?: number;
  CacheHitPercentage?: number;
  CacheMissPercentage?: number;
}
const DescribeCacheOutput = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<DescribeCacheOutput>;
export type VolumeARNs = string[];
const VolumeARNs = DiskIds as any as S.Schema<VolumeARNs>;
export interface DescribeCachediSCSIVolumesInput {
  VolumeARNs: string[];
}
const DescribeCachediSCSIVolumesInput = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<DescribeCachediSCSIVolumesInput>;
export type VolumeId = string;
export type VolumeType = string;
export type VolumeStatus = string;
export type VolumeAttachmentStatus = string;
export type DoubleObject = number;
export type PositiveIntObject = number;
export interface VolumeiSCSIAttributes {
  TargetARN?: string;
  NetworkInterfaceId?: string;
  NetworkInterfacePort?: number;
  LunNumber?: number;
  ChapEnabled?: boolean;
}
const VolumeiSCSIAttributes = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<VolumeiSCSIAttributes>;
export type CreatedDate = Date;
export type VolumeUsedInBytes = number;
export interface CachediSCSIVolume {
  VolumeARN?: string;
  VolumeId?: string;
  VolumeType?: string;
  VolumeStatus?: string;
  VolumeAttachmentStatus?: string;
  VolumeSizeInBytes?: number;
  VolumeProgress?: number;
  SourceSnapshotId?: string;
  VolumeiSCSIAttributes?: VolumeiSCSIAttributes;
  CreatedDate?: Date;
  VolumeUsedInBytes?: number;
  KMSKey?: string;
  TargetName?: string;
}
const CachediSCSIVolume = /*@__PURE__*/ __L.at(__c8, 4) as any as S.Schema<CachediSCSIVolume>;
export type CachediSCSIVolumes = CachediSCSIVolume[];
const CachediSCSIVolumes = /*@__PURE__*/ __L.at(__c8, 5);
export interface DescribeCachediSCSIVolumesOutput {
  CachediSCSIVolumes?: CachediSCSIVolume[];
}
const DescribeCachediSCSIVolumesOutput = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DescribeCachediSCSIVolumesOutput>;
export interface DescribeCacheReportInput {
  CacheReportARN: string;
}
const DescribeCacheReportInput = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<DescribeCacheReportInput>;
export type CacheReportStatus =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELED"
  | "FAILED"
  | "ERROR"
  | (string & {});
const CacheReportStatus = S.String;

export type ReportCompletionPercent = number;
export type CacheReportFilterName = "UploadState" | "UploadFailureReason" | (string & {});
const CacheReportFilterName = S.String;

export type CacheReportFilterValue = string;
export type CacheReportFilterValues = string[];
const CacheReportFilterValues = DiskIds as any as S.Schema<CacheReportFilterValues>;
export interface CacheReportFilter {
  Name: CacheReportFilterName;
  Values: string[];
}
const CacheReportFilter = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<CacheReportFilter>;
export type CacheReportFilterList = CacheReportFilter[];
const CacheReportFilterList = /*@__PURE__*/ __L.at(__c9, 1);
export type CacheReportName = string;
export interface CacheReportInfo {
  CacheReportARN?: string;
  CacheReportStatus?: CacheReportStatus;
  ReportCompletionPercent?: number;
  EndTime?: Date;
  Role?: string;
  FileShareARN?: string;
  LocationARN?: string;
  StartTime?: Date;
  InclusionFilters?: CacheReportFilter[];
  ExclusionFilters?: CacheReportFilter[];
  ReportName?: string;
  Tags?: Tag[];
}
const CacheReportInfo = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<CacheReportInfo>;
export interface DescribeCacheReportOutput {
  CacheReportInfo?: CacheReportInfo;
}
const DescribeCacheReportOutput = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<DescribeCacheReportOutput>;
export interface DescribeChapCredentialsInput {
  TargetARN: string;
}
const DescribeChapCredentialsInput = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<DescribeChapCredentialsInput>;
export type ChapSecret = string | redacted.Redacted<string>;
export interface ChapInfo {
  TargetARN?: string;
  SecretToAuthenticateInitiator?: string | redacted.Redacted<string>;
  InitiatorName?: string;
  SecretToAuthenticateTarget?: string | redacted.Redacted<string>;
}
const ChapInfo = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<ChapInfo>;
export type ChapCredentials = ChapInfo[];
const ChapCredentials = /*@__PURE__*/ __L.at(__c9, 6);
export interface DescribeChapCredentialsOutput {
  ChapCredentials?: ChapInfo[];
}
const DescribeChapCredentialsOutput = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<DescribeChapCredentialsOutput>;
export type FileSystemAssociationARNList = string[];
const FileSystemAssociationARNList = DiskIds as any as S.Schema<FileSystemAssociationARNList>;
export interface DescribeFileSystemAssociationsInput {
  FileSystemAssociationARNList: string[];
}
const DescribeFileSystemAssociationsInput = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<DescribeFileSystemAssociationsInput>;
export type FileSystemAssociationStatus = string;
export type FileSystemAssociationSyncErrorCode = string;
export interface FileSystemAssociationStatusDetail {
  ErrorCode?: string;
}
const FileSystemAssociationStatusDetail = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<FileSystemAssociationStatusDetail>;
export type FileSystemAssociationStatusDetails = FileSystemAssociationStatusDetail[];
const FileSystemAssociationStatusDetails = /*@__PURE__*/ __L.at(__c10, 2);
export interface FileSystemAssociationInfo {
  FileSystemAssociationARN?: string;
  LocationARN?: string;
  FileSystemAssociationStatus?: string;
  AuditDestinationARN?: string;
  GatewayARN?: string;
  Tags?: Tag[];
  CacheAttributes?: CacheAttributes;
  EndpointNetworkConfiguration?: EndpointNetworkConfiguration;
  FileSystemAssociationStatusDetails?: FileSystemAssociationStatusDetail[];
}
const FileSystemAssociationInfo = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<FileSystemAssociationInfo>;
export type FileSystemAssociationInfoList = FileSystemAssociationInfo[];
const FileSystemAssociationInfoList = /*@__PURE__*/ __L.at(__c10, 4);
export interface DescribeFileSystemAssociationsOutput {
  FileSystemAssociationInfoList?: FileSystemAssociationInfo[];
}
const DescribeFileSystemAssociationsOutput = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<DescribeFileSystemAssociationsOutput>;
export interface DescribeGatewayInformationInput {
  GatewayARN: string;
}
const DescribeGatewayInformationInput = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<DescribeGatewayInformationInput>;
export type GatewayId = string;
export type GatewayState = string;
export interface NetworkInterface {
  Ipv4Address?: string;
  MacAddress?: string;
  Ipv6Address?: string;
}
const NetworkInterface = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<NetworkInterface>;
export type GatewayNetworkInterfaces = NetworkInterface[];
const GatewayNetworkInterfaces = /*@__PURE__*/ __L.at(__c11, 0);
export type NextUpdateAvailabilityDate = string;
export type LastSoftwareUpdate = string;
export type Ec2InstanceId = string;
export type Ec2InstanceRegion = string;
export type CloudWatchLogGroupARN = string;
export type HostEnvironment =
  | "VMWARE"
  | "HYPER-V"
  | "EC2"
  | "KVM"
  | "OTHER"
  | "SNOWBALL"
  | (string & {});
const HostEnvironment = S.String;

export type EndpointType = string;
export type SoftwareUpdatesEndDate = string;
export type DeprecationDate = string;
export type GatewayCapacity = "Small" | "Medium" | "Large" | (string & {});
const GatewayCapacity = S.String;

export type SupportedGatewayCapacities = GatewayCapacity[];
const SupportedGatewayCapacities = /*@__PURE__*/ __L.at(__c11, 1);
export type HostEnvironmentId = string;
export type SoftwareVersion = string;
export interface DescribeGatewayInformationOutput {
  GatewayARN?: string;
  GatewayId?: string;
  GatewayName?: string;
  GatewayTimezone?: string;
  GatewayState?: string;
  GatewayNetworkInterfaces?: NetworkInterface[];
  GatewayType?: string;
  NextUpdateAvailabilityDate?: string;
  LastSoftwareUpdate?: string;
  Ec2InstanceId?: string;
  Ec2InstanceRegion?: string;
  Tags?: Tag[];
  VPCEndpoint?: string;
  CloudWatchLogGroupARN?: string;
  HostEnvironment?: HostEnvironment;
  EndpointType?: string;
  SoftwareUpdatesEndDate?: string;
  DeprecationDate?: string;
  GatewayCapacity?: GatewayCapacity;
  SupportedGatewayCapacities?: GatewayCapacity[];
  HostEnvironmentId?: string;
  SoftwareVersion?: string;
}
const DescribeGatewayInformationOutput = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<DescribeGatewayInformationOutput>;
export interface DescribeMaintenanceStartTimeInput {
  GatewayARN: string;
}
const DescribeMaintenanceStartTimeInput = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<DescribeMaintenanceStartTimeInput>;
export type DayOfMonth = number;
export type AutomaticUpdatePolicy = "ALL_VERSIONS" | "EMERGENCY_VERSIONS_ONLY" | (string & {});
const AutomaticUpdatePolicy = S.String;

export interface SoftwareUpdatePreferences {
  AutomaticUpdatePolicy?: AutomaticUpdatePolicy;
}
const SoftwareUpdatePreferences = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<SoftwareUpdatePreferences>;
export interface DescribeMaintenanceStartTimeOutput {
  GatewayARN?: string;
  HourOfDay?: number;
  MinuteOfHour?: number;
  DayOfWeek?: number;
  DayOfMonth?: number;
  Timezone?: string;
  SoftwareUpdatePreferences?: SoftwareUpdatePreferences;
}
const DescribeMaintenanceStartTimeOutput = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<DescribeMaintenanceStartTimeOutput>;
export type FileShareARNList = string[];
const FileShareARNList = DiskIds as any as S.Schema<FileShareARNList>;
export interface DescribeNFSFileSharesInput {
  FileShareARNList: string[];
}
const DescribeNFSFileSharesInput = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<DescribeNFSFileSharesInput>;
export type FileShareId = string;
export type FileShareStatus = string;
export type Path = string;
export interface NFSFileShareInfo {
  NFSFileShareDefaults?: NFSFileShareDefaults;
  FileShareARN?: string;
  FileShareId?: string;
  FileShareStatus?: string;
  GatewayARN?: string;
  EncryptionType?: EncryptionType;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  Path?: string;
  Role?: string;
  LocationARN?: string;
  DefaultStorageClass?: string;
  ObjectACL?: ObjectACL;
  ClientList?: string[];
  Squash?: string;
  ReadOnly?: boolean;
  GuessMIMETypeEnabled?: boolean;
  RequesterPays?: boolean;
  Tags?: Tag[];
  FileShareName?: string;
  CacheAttributes?: CacheAttributes;
  NotificationPolicy?: string;
  VPCEndpointDNSName?: string;
  BucketRegion?: string;
  AuditDestinationARN?: string;
}
const NFSFileShareInfo = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<NFSFileShareInfo>;
export type NFSFileShareInfoList = NFSFileShareInfo[];
const NFSFileShareInfoList = /*@__PURE__*/ __L.at(__c12, 0);
export interface DescribeNFSFileSharesOutput {
  NFSFileShareInfoList?: NFSFileShareInfo[];
}
const DescribeNFSFileSharesOutput = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<DescribeNFSFileSharesOutput>;
export interface DescribeSMBFileSharesInput {
  FileShareARNList: string[];
}
const DescribeSMBFileSharesInput = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<DescribeSMBFileSharesInput>;
export interface SMBFileShareInfo {
  FileShareARN?: string;
  FileShareId?: string;
  FileShareStatus?: string;
  GatewayARN?: string;
  EncryptionType?: EncryptionType;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  Path?: string;
  Role?: string;
  LocationARN?: string;
  DefaultStorageClass?: string;
  ObjectACL?: ObjectACL;
  ReadOnly?: boolean;
  GuessMIMETypeEnabled?: boolean;
  RequesterPays?: boolean;
  SMBACLEnabled?: boolean;
  AccessBasedEnumeration?: boolean;
  AdminUserList?: string[];
  ValidUserList?: string[];
  InvalidUserList?: string[];
  AuditDestinationARN?: string;
  Authentication?: string;
  CaseSensitivity?: CaseSensitivity;
  Tags?: Tag[];
  FileShareName?: string;
  CacheAttributes?: CacheAttributes;
  NotificationPolicy?: string;
  VPCEndpointDNSName?: string;
  BucketRegion?: string;
  OplocksEnabled?: boolean;
}
const SMBFileShareInfo = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<SMBFileShareInfo>;
export type SMBFileShareInfoList = SMBFileShareInfo[];
const SMBFileShareInfoList = /*@__PURE__*/ __L.at(__c12, 4);
export interface DescribeSMBFileSharesOutput {
  SMBFileShareInfoList?: SMBFileShareInfo[];
}
const DescribeSMBFileSharesOutput = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<DescribeSMBFileSharesOutput>;
export interface DescribeSMBSettingsInput {
  GatewayARN: string;
}
const DescribeSMBSettingsInput = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<DescribeSMBSettingsInput>;
export type DomainName = string;
export type ActiveDirectoryStatus =
  | "ACCESS_DENIED"
  | "DETACHED"
  | "JOINED"
  | "JOINING"
  | "NETWORK_ERROR"
  | "TIMEOUT"
  | "UNKNOWN_ERROR"
  | "INSUFFICIENT_PERMISSIONS"
  | (string & {});
const ActiveDirectoryStatus = S.String;

export type SMBSecurityStrategy =
  | "ClientSpecified"
  | "MandatorySigning"
  | "MandatoryEncryption"
  | "MandatoryEncryptionNoAes128"
  | (string & {});
const SMBSecurityStrategy = S.String;

export interface SMBLocalGroups {
  GatewayAdmins?: string[];
}
const SMBLocalGroups = /*@__PURE__*/ __L.at(__c12, 7) as any as S.Schema<SMBLocalGroups>;
export interface DescribeSMBSettingsOutput {
  GatewayARN?: string;
  DomainName?: string;
  ActiveDirectoryStatus?: ActiveDirectoryStatus;
  SMBGuestPasswordSet?: boolean;
  SMBSecurityStrategy?: SMBSecurityStrategy;
  FileSharesVisible?: boolean;
  SMBLocalGroups?: SMBLocalGroups;
}
const DescribeSMBSettingsOutput = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<DescribeSMBSettingsOutput>;
export interface DescribeSnapshotScheduleInput {
  VolumeARN: string;
}
const DescribeSnapshotScheduleInput = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<DescribeSnapshotScheduleInput>;
export type RecurrenceInHours = number;
export type Description = string;
export interface DescribeSnapshotScheduleOutput {
  VolumeARN?: string;
  StartAt?: number;
  RecurrenceInHours?: number;
  Description?: string;
  Timezone?: string;
  Tags?: Tag[];
}
const DescribeSnapshotScheduleOutput = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<DescribeSnapshotScheduleOutput>;
export interface DescribeStorediSCSIVolumesInput {
  VolumeARNs: string[];
}
const DescribeStorediSCSIVolumesInput = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<DescribeStorediSCSIVolumesInput>;
export interface StorediSCSIVolume {
  VolumeARN?: string;
  VolumeId?: string;
  VolumeType?: string;
  VolumeStatus?: string;
  VolumeAttachmentStatus?: string;
  VolumeSizeInBytes?: number;
  VolumeProgress?: number;
  VolumeDiskId?: string;
  SourceSnapshotId?: string;
  PreservedExistingData?: boolean;
  VolumeiSCSIAttributes?: VolumeiSCSIAttributes;
  CreatedDate?: Date;
  VolumeUsedInBytes?: number;
  KMSKey?: string;
  TargetName?: string;
}
const StorediSCSIVolume = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<StorediSCSIVolume>;
export type StorediSCSIVolumes = StorediSCSIVolume[];
const StorediSCSIVolumes = /*@__PURE__*/ __L.at(__c13, 5);
export interface DescribeStorediSCSIVolumesOutput {
  StorediSCSIVolumes?: StorediSCSIVolume[];
}
const DescribeStorediSCSIVolumesOutput = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<DescribeStorediSCSIVolumesOutput>;
export type Marker = string;
export interface DescribeTapeArchivesInput {
  TapeARNs?: string[];
  Marker?: string;
  Limit?: number;
}
const DescribeTapeArchivesInput = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<DescribeTapeArchivesInput>;
export type TapeArchiveStatus = string;
export type TapeUsage = number;
export interface TapeArchive {
  TapeARN?: string;
  TapeBarcode?: string;
  TapeCreatedDate?: Date;
  TapeSizeInBytes?: number;
  CompletionTime?: Date;
  RetrievedTo?: string;
  TapeStatus?: string;
  TapeUsedInBytes?: number;
  KMSKey?: string;
  PoolId?: string;
  Worm?: boolean;
  RetentionStartDate?: Date;
  PoolEntryDate?: Date;
}
const TapeArchive = /*@__PURE__*/ __L.at(__c14, 0) as any as S.Schema<TapeArchive>;
export type TapeArchives = TapeArchive[];
const TapeArchives = /*@__PURE__*/ __L.at(__c14, 1);
export interface DescribeTapeArchivesOutput {
  TapeArchives?: TapeArchive[];
  Marker?: string;
}
const DescribeTapeArchivesOutput = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<DescribeTapeArchivesOutput>;
export interface DescribeTapeRecoveryPointsInput {
  GatewayARN: string;
  Marker?: string;
  Limit?: number;
}
const DescribeTapeRecoveryPointsInput = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<DescribeTapeRecoveryPointsInput>;
export type TapeRecoveryPointStatus = string;
export interface TapeRecoveryPointInfo {
  TapeARN?: string;
  TapeRecoveryPointTime?: Date;
  TapeSizeInBytes?: number;
  TapeStatus?: string;
}
const TapeRecoveryPointInfo = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<TapeRecoveryPointInfo>;
export type TapeRecoveryPointInfos = TapeRecoveryPointInfo[];
const TapeRecoveryPointInfos = /*@__PURE__*/ __L.at(__c14, 5);
export interface DescribeTapeRecoveryPointsOutput {
  GatewayARN?: string;
  TapeRecoveryPointInfos?: TapeRecoveryPointInfo[];
  Marker?: string;
}
const DescribeTapeRecoveryPointsOutput = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<DescribeTapeRecoveryPointsOutput>;
export interface DescribeTapesInput {
  GatewayARN: string;
  TapeARNs?: string[];
  Marker?: string;
  Limit?: number;
}
const DescribeTapesInput = /*@__PURE__*/ __L.at(__c14, 7) as any as S.Schema<DescribeTapesInput>;
export type TapeStatus = string;
export type VTLDeviceARN = string;
export interface Tape {
  TapeARN?: string;
  TapeBarcode?: string;
  TapeCreatedDate?: Date;
  TapeSizeInBytes?: number;
  TapeStatus?: string;
  VTLDevice?: string;
  Progress?: number;
  TapeUsedInBytes?: number;
  KMSKey?: string;
  PoolId?: string;
  Worm?: boolean;
  RetentionStartDate?: Date;
  PoolEntryDate?: Date;
}
const Tape = /*@__PURE__*/ __L.at(__c15, 0) as any as S.Schema<Tape>;
export type Tapes = Tape[];
const Tapes = /*@__PURE__*/ __L.at(__c15, 1);
export interface DescribeTapesOutput {
  Tapes?: Tape[];
  Marker?: string;
}
const DescribeTapesOutput = /*@__PURE__*/ __L.at(__c15, 2) as any as S.Schema<DescribeTapesOutput>;
export interface DescribeUploadBufferInput {
  GatewayARN: string;
}
const DescribeUploadBufferInput = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<DescribeUploadBufferInput>;
export interface DescribeUploadBufferOutput {
  GatewayARN?: string;
  DiskIds?: string[];
  UploadBufferUsedInBytes?: number;
  UploadBufferAllocatedInBytes?: number;
}
const DescribeUploadBufferOutput = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<DescribeUploadBufferOutput>;
export type VTLDeviceARNs = string[];
const VTLDeviceARNs = DiskIds as any as S.Schema<VTLDeviceARNs>;
export interface DescribeVTLDevicesInput {
  GatewayARN: string;
  VTLDeviceARNs?: string[];
  Marker?: string;
  Limit?: number;
}
const DescribeVTLDevicesInput = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<DescribeVTLDevicesInput>;
export type VTLDeviceType = string;
export type VTLDeviceVendor = string;
export type VTLDeviceProductIdentifier = string;
export interface DeviceiSCSIAttributes {
  TargetARN?: string;
  NetworkInterfaceId?: string;
  NetworkInterfacePort?: number;
  ChapEnabled?: boolean;
}
const DeviceiSCSIAttributes = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<DeviceiSCSIAttributes>;
export interface VTLDevice {
  VTLDeviceARN?: string;
  VTLDeviceType?: string;
  VTLDeviceVendor?: string;
  VTLDeviceProductIdentifier?: string;
  DeviceiSCSIAttributes?: DeviceiSCSIAttributes;
}
const VTLDevice = /*@__PURE__*/ __L.at(__c15, 7) as any as S.Schema<VTLDevice>;
export type VTLDevices = VTLDevice[];
const VTLDevices = /*@__PURE__*/ __L.at(__c16, 0);
export interface DescribeVTLDevicesOutput {
  GatewayARN?: string;
  VTLDevices?: VTLDevice[];
  Marker?: string;
}
const DescribeVTLDevicesOutput = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<DescribeVTLDevicesOutput>;
export interface DescribeWorkingStorageInput {
  GatewayARN: string;
}
const DescribeWorkingStorageInput = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<DescribeWorkingStorageInput>;
export interface DescribeWorkingStorageOutput {
  GatewayARN?: string;
  DiskIds?: string[];
  WorkingStorageUsedInBytes?: number;
  WorkingStorageAllocatedInBytes?: number;
}
const DescribeWorkingStorageOutput = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<DescribeWorkingStorageOutput>;
export interface DetachVolumeInput {
  VolumeARN: string;
  ForceDetach?: boolean;
}
const DetachVolumeInput = /*@__PURE__*/ __L.at(__c16, 4) as any as S.Schema<DetachVolumeInput>;
export interface DetachVolumeOutput {
  VolumeARN?: string;
}
const DetachVolumeOutput = DeleteVolumeOutput as any as S.Schema<DetachVolumeOutput>;
export interface DisableGatewayInput {
  GatewayARN: string;
}
const DisableGatewayInput = /*@__PURE__*/ __L.at(__c16, 5) as any as S.Schema<DisableGatewayInput>;
export interface DisableGatewayOutput {
  GatewayARN?: string;
}
const DisableGatewayOutput = ActivateGatewayOutput as any as S.Schema<DisableGatewayOutput>;
export interface DisassociateFileSystemInput {
  FileSystemAssociationARN: string;
  ForceDelete?: boolean;
}
const DisassociateFileSystemInput = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<DisassociateFileSystemInput>;
export interface DisassociateFileSystemOutput {
  FileSystemAssociationARN?: string;
}
const DisassociateFileSystemOutput =
  AssociateFileSystemOutput as any as S.Schema<DisassociateFileSystemOutput>;
export interface EvictFilesFailingUploadInput {
  FileShareARN: string;
  ForceRemove?: boolean;
}
const EvictFilesFailingUploadInput = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<EvictFilesFailingUploadInput>;
export interface EvictFilesFailingUploadOutput {
  NotificationId?: string;
}
const EvictFilesFailingUploadOutput = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<EvictFilesFailingUploadOutput>;
export type OrganizationalUnit = string;
export type Host = string;
export type Hosts = string[];
const Hosts = DiskIds as any as S.Schema<Hosts>;
export type TimeoutInSeconds = number;
export interface JoinDomainInput {
  GatewayARN: string;
  DomainName: string;
  OrganizationalUnit?: string;
  DomainControllers?: string[];
  TimeoutInSeconds?: number;
  UserName: string;
  Password: string | redacted.Redacted<string>;
}
const JoinDomainInput = /*@__PURE__*/ __L.at(__c17, 1) as any as S.Schema<JoinDomainInput>;
export interface JoinDomainOutput {
  GatewayARN?: string;
  ActiveDirectoryStatus?: ActiveDirectoryStatus;
}
const JoinDomainOutput = /*@__PURE__*/ __L.at(__c17, 2) as any as S.Schema<JoinDomainOutput>;
export interface ListAutomaticTapeCreationPoliciesInput {
  GatewayARN?: string;
}
const ListAutomaticTapeCreationPoliciesInput = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<ListAutomaticTapeCreationPoliciesInput>;
export type MinimumNumTapes = number;
export interface AutomaticTapeCreationRule {
  TapeBarcodePrefix: string;
  PoolId: string;
  TapeSizeInBytes: number;
  MinimumNumTapes: number;
  Worm?: boolean;
}
const AutomaticTapeCreationRule = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<AutomaticTapeCreationRule>;
export type AutomaticTapeCreationRules = AutomaticTapeCreationRule[];
const AutomaticTapeCreationRules = /*@__PURE__*/ __L.at(__c17, 5);
export interface AutomaticTapeCreationPolicyInfo {
  AutomaticTapeCreationRules?: AutomaticTapeCreationRule[];
  GatewayARN?: string;
}
const AutomaticTapeCreationPolicyInfo = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<AutomaticTapeCreationPolicyInfo>;
export type AutomaticTapeCreationPolicyInfos = AutomaticTapeCreationPolicyInfo[];
const AutomaticTapeCreationPolicyInfos = /*@__PURE__*/ __L.at(__c17, 7);
export interface ListAutomaticTapeCreationPoliciesOutput {
  AutomaticTapeCreationPolicyInfos?: AutomaticTapeCreationPolicyInfo[];
}
const ListAutomaticTapeCreationPoliciesOutput = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<ListAutomaticTapeCreationPoliciesOutput>;
export interface ListCacheReportsInput {
  Marker?: string;
}
const ListCacheReportsInput = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<ListCacheReportsInput>;
export type CacheReportList = CacheReportInfo[];
const CacheReportList = /*@__PURE__*/ __L.at(__c18, 2);
export interface ListCacheReportsOutput {
  CacheReportList?: CacheReportInfo[];
  Marker?: string;
}
const ListCacheReportsOutput = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<ListCacheReportsOutput>;
export interface ListFileSharesInput {
  GatewayARN?: string;
  Limit?: number;
  Marker?: string;
}
const ListFileSharesInput = /*@__PURE__*/ __L.at(__c18, 4) as any as S.Schema<ListFileSharesInput>;
export type FileShareType = "NFS" | "SMB" | (string & {});
const FileShareType = S.String;

export interface FileShareInfo {
  FileShareType?: FileShareType;
  FileShareARN?: string;
  FileShareId?: string;
  FileShareStatus?: string;
  GatewayARN?: string;
}
const FileShareInfo = /*@__PURE__*/ __L.at(__c18, 5) as any as S.Schema<FileShareInfo>;
export type FileShareInfoList = FileShareInfo[];
const FileShareInfoList = /*@__PURE__*/ __L.at(__c18, 6);
export interface ListFileSharesOutput {
  Marker?: string;
  NextMarker?: string;
  FileShareInfoList?: FileShareInfo[];
}
const ListFileSharesOutput = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<ListFileSharesOutput>;
export interface ListFileSystemAssociationsInput {
  GatewayARN?: string;
  Limit?: number;
  Marker?: string;
}
const ListFileSystemAssociationsInput = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<ListFileSystemAssociationsInput>;
export type FileSystemAssociationId = string;
export interface FileSystemAssociationSummary {
  FileSystemAssociationId?: string;
  FileSystemAssociationARN?: string;
  FileSystemAssociationStatus?: string;
  GatewayARN?: string;
}
const FileSystemAssociationSummary = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<FileSystemAssociationSummary>;
export type FileSystemAssociationSummaryList = FileSystemAssociationSummary[];
const FileSystemAssociationSummaryList = /*@__PURE__*/ __L.at(__c19, 2);
export interface ListFileSystemAssociationsOutput {
  Marker?: string;
  NextMarker?: string;
  FileSystemAssociationSummaryList?: FileSystemAssociationSummary[];
}
const ListFileSystemAssociationsOutput = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<ListFileSystemAssociationsOutput>;
export interface ListGatewaysInput {
  Marker?: string;
  Limit?: number;
}
const ListGatewaysInput = /*@__PURE__*/ __L.at(__c19, 4) as any as S.Schema<ListGatewaysInput>;
export type GatewayOperationalState = string;
export interface GatewayInfo {
  GatewayId?: string;
  GatewayARN?: string;
  GatewayType?: string;
  GatewayOperationalState?: string;
  GatewayName?: string;
  Ec2InstanceId?: string;
  Ec2InstanceRegion?: string;
  HostEnvironment?: HostEnvironment;
  HostEnvironmentId?: string;
  DeprecationDate?: string;
  SoftwareVersion?: string;
}
const GatewayInfo = /*@__PURE__*/ __L.at(__c19, 5) as any as S.Schema<GatewayInfo>;
export type Gateways = GatewayInfo[];
const Gateways = /*@__PURE__*/ __L.at(__c19, 6);
export interface ListGatewaysOutput {
  Gateways?: GatewayInfo[];
  Marker?: string;
}
const ListGatewaysOutput = /*@__PURE__*/ __L.at(__c19, 7) as any as S.Schema<ListGatewaysOutput>;
export interface ListLocalDisksInput {
  GatewayARN: string;
}
const ListLocalDisksInput = /*@__PURE__*/ __L.at(__c20, 0) as any as S.Schema<ListLocalDisksInput>;
export type DiskAllocationType = string;
export type DiskAttribute = string;
export type DiskAttributeList = string[];
const DiskAttributeList = DiskIds as any as S.Schema<DiskAttributeList>;
export interface Disk {
  DiskId?: string;
  DiskPath?: string;
  DiskNode?: string;
  DiskStatus?: string;
  DiskSizeInBytes?: number;
  DiskAllocationType?: string;
  DiskAllocationResource?: string;
  DiskAttributeList?: string[];
}
const Disk = /*@__PURE__*/ __L.at(__c20, 1) as any as S.Schema<Disk>;
export type Disks = Disk[];
const Disks = /*@__PURE__*/ __L.at(__c20, 2);
export interface ListLocalDisksOutput {
  GatewayARN?: string;
  Disks?: Disk[];
}
const ListLocalDisksOutput = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<ListLocalDisksOutput>;
export interface ListTagsForResourceInput {
  ResourceARN: string;
  Marker?: string;
  Limit?: number;
}
const ListTagsForResourceInput = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<ListTagsForResourceInput>;
export interface ListTagsForResourceOutput {
  ResourceARN?: string;
  Marker?: string;
  Tags?: Tag[];
}
const ListTagsForResourceOutput = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<ListTagsForResourceOutput>;
export type PoolARNs = string[];
const PoolARNs = DiskIds as any as S.Schema<PoolARNs>;
export interface ListTapePoolsInput {
  PoolARNs?: string[];
  Marker?: string;
  Limit?: number;
}
const ListTapePoolsInput = /*@__PURE__*/ __L.at(__c20, 6) as any as S.Schema<ListTapePoolsInput>;
export type PoolStatus = "ACTIVE" | "DELETED" | (string & {});
const PoolStatus = S.String;

export interface PoolInfo {
  PoolARN?: string;
  PoolName?: string;
  StorageClass?: TapeStorageClass;
  RetentionLockType?: RetentionLockType;
  RetentionLockTimeInDays?: number;
  PoolStatus?: PoolStatus;
}
const PoolInfo = /*@__PURE__*/ __L.at(__c20, 7) as any as S.Schema<PoolInfo>;
export type PoolInfos = PoolInfo[];
const PoolInfos = /*@__PURE__*/ __L.at(__c21, 0);
export interface ListTapePoolsOutput {
  PoolInfos?: PoolInfo[];
  Marker?: string;
}
const ListTapePoolsOutput = /*@__PURE__*/ __L.at(__c21, 1) as any as S.Schema<ListTapePoolsOutput>;
export interface ListTapesInput {
  TapeARNs?: string[];
  Marker?: string;
  Limit?: number;
}
const ListTapesInput = /*@__PURE__*/ __L.at(__c21, 2) as any as S.Schema<ListTapesInput>;
export interface TapeInfo {
  TapeARN?: string;
  TapeBarcode?: string;
  TapeSizeInBytes?: number;
  TapeStatus?: string;
  GatewayARN?: string;
  PoolId?: string;
  RetentionStartDate?: Date;
  PoolEntryDate?: Date;
}
const TapeInfo = /*@__PURE__*/ __L.at(__c21, 3) as any as S.Schema<TapeInfo>;
export type TapeInfos = TapeInfo[];
const TapeInfos = /*@__PURE__*/ __L.at(__c21, 4);
export interface ListTapesOutput {
  TapeInfos?: TapeInfo[];
  Marker?: string;
}
const ListTapesOutput = /*@__PURE__*/ __L.at(__c21, 5) as any as S.Schema<ListTapesOutput>;
export interface ListVolumeInitiatorsInput {
  VolumeARN: string;
}
const ListVolumeInitiatorsInput = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<ListVolumeInitiatorsInput>;
export type Initiator = string;
export type Initiators = string[];
const Initiators = DiskIds as any as S.Schema<Initiators>;
export interface ListVolumeInitiatorsOutput {
  Initiators?: string[];
}
const ListVolumeInitiatorsOutput = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<ListVolumeInitiatorsOutput>;
export interface ListVolumeRecoveryPointsInput {
  GatewayARN: string;
}
const ListVolumeRecoveryPointsInput = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<ListVolumeRecoveryPointsInput>;
export interface VolumeRecoveryPointInfo {
  VolumeARN?: string;
  VolumeSizeInBytes?: number;
  VolumeUsageInBytes?: number;
  VolumeRecoveryPointTime?: string;
}
const VolumeRecoveryPointInfo = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<VolumeRecoveryPointInfo>;
export type VolumeRecoveryPointInfos = VolumeRecoveryPointInfo[];
const VolumeRecoveryPointInfos = /*@__PURE__*/ __L.at(__c22, 2);
export interface ListVolumeRecoveryPointsOutput {
  GatewayARN?: string;
  VolumeRecoveryPointInfos?: VolumeRecoveryPointInfo[];
}
const ListVolumeRecoveryPointsOutput = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<ListVolumeRecoveryPointsOutput>;
export interface ListVolumesInput {
  GatewayARN?: string;
  Marker?: string;
  Limit?: number;
}
const ListVolumesInput = /*@__PURE__*/ __L.at(__c22, 4) as any as S.Schema<ListVolumesInput>;
export interface VolumeInfo {
  VolumeARN?: string;
  VolumeId?: string;
  GatewayARN?: string;
  GatewayId?: string;
  VolumeType?: string;
  VolumeSizeInBytes?: number;
  VolumeAttachmentStatus?: string;
}
const VolumeInfo = /*@__PURE__*/ __L.at(__c22, 5) as any as S.Schema<VolumeInfo>;
export type VolumeInfos = VolumeInfo[];
const VolumeInfos = /*@__PURE__*/ __L.at(__c22, 6);
export interface ListVolumesOutput {
  GatewayARN?: string;
  Marker?: string;
  VolumeInfos?: VolumeInfo[];
}
const ListVolumesOutput = /*@__PURE__*/ __L.at(__c22, 7) as any as S.Schema<ListVolumesOutput>;
export interface NotifyWhenUploadedInput {
  FileShareARN: string;
}
const NotifyWhenUploadedInput = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<NotifyWhenUploadedInput>;
export type NotificationId = string;
export interface NotifyWhenUploadedOutput {
  FileShareARN?: string;
  NotificationId?: string;
}
const NotifyWhenUploadedOutput = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<NotifyWhenUploadedOutput>;
export type Folder = string;
export type FolderList = string[];
const FolderList = DiskIds as any as S.Schema<FolderList>;
export interface RefreshCacheInput {
  FileShareARN: string;
  FolderList?: string[];
  Recursive?: boolean;
}
const RefreshCacheInput = /*@__PURE__*/ __L.at(__c23, 2) as any as S.Schema<RefreshCacheInput>;
export interface RefreshCacheOutput {
  FileShareARN?: string;
  NotificationId?: string;
}
const RefreshCacheOutput = NotifyWhenUploadedOutput as any as S.Schema<RefreshCacheOutput>;
export type TagKeys = string[];
const TagKeys = DiskIds as any as S.Schema<TagKeys>;
export interface RemoveTagsFromResourceInput {
  ResourceARN: string;
  TagKeys: string[];
}
const RemoveTagsFromResourceInput = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<RemoveTagsFromResourceInput>;
export interface RemoveTagsFromResourceOutput {
  ResourceARN?: string;
}
const RemoveTagsFromResourceOutput = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<RemoveTagsFromResourceOutput>;
export interface ResetCacheInput {
  GatewayARN: string;
}
const ResetCacheInput = /*@__PURE__*/ __L.at(__c23, 5) as any as S.Schema<ResetCacheInput>;
export interface ResetCacheOutput {
  GatewayARN?: string;
}
const ResetCacheOutput = ActivateGatewayOutput as any as S.Schema<ResetCacheOutput>;
export interface RetrieveTapeArchiveInput {
  TapeARN: string;
  GatewayARN: string;
}
const RetrieveTapeArchiveInput = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<RetrieveTapeArchiveInput>;
export interface RetrieveTapeArchiveOutput {
  TapeARN?: string;
}
const RetrieveTapeArchiveOutput =
  CreateTapeWithBarcodeOutput as any as S.Schema<RetrieveTapeArchiveOutput>;
export interface RetrieveTapeRecoveryPointInput {
  TapeARN: string;
  GatewayARN: string;
}
const RetrieveTapeRecoveryPointInput = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<RetrieveTapeRecoveryPointInput>;
export interface RetrieveTapeRecoveryPointOutput {
  TapeARN?: string;
}
const RetrieveTapeRecoveryPointOutput =
  CreateTapeWithBarcodeOutput as any as S.Schema<RetrieveTapeRecoveryPointOutput>;
export type LocalConsolePassword = string | redacted.Redacted<string>;
export interface SetLocalConsolePasswordInput {
  GatewayARN: string;
  LocalConsolePassword: string | redacted.Redacted<string>;
}
const SetLocalConsolePasswordInput = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<SetLocalConsolePasswordInput>;
export interface SetLocalConsolePasswordOutput {
  GatewayARN?: string;
}
const SetLocalConsolePasswordOutput =
  DeleteAutomaticTapeCreationPolicyOutput as any as S.Schema<SetLocalConsolePasswordOutput>;
export type SMBGuestPassword = string | redacted.Redacted<string>;
export interface SetSMBGuestPasswordInput {
  GatewayARN: string;
  Password: string | redacted.Redacted<string>;
}
const SetSMBGuestPasswordInput = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<SetSMBGuestPasswordInput>;
export interface SetSMBGuestPasswordOutput {
  GatewayARN?: string;
}
const SetSMBGuestPasswordOutput =
  DeleteAutomaticTapeCreationPolicyOutput as any as S.Schema<SetSMBGuestPasswordOutput>;
export interface ShutdownGatewayInput {
  GatewayARN: string;
}
const ShutdownGatewayInput = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<ShutdownGatewayInput>;
export interface ShutdownGatewayOutput {
  GatewayARN?: string;
}
const ShutdownGatewayOutput = ActivateGatewayOutput as any as S.Schema<ShutdownGatewayOutput>;
export interface StartAvailabilityMonitorTestInput {
  GatewayARN: string;
}
const StartAvailabilityMonitorTestInput = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<StartAvailabilityMonitorTestInput>;
export interface StartAvailabilityMonitorTestOutput {
  GatewayARN?: string;
}
const StartAvailabilityMonitorTestOutput =
  DeleteAutomaticTapeCreationPolicyOutput as any as S.Schema<StartAvailabilityMonitorTestOutput>;
export interface StartCacheReportInput {
  FileShareARN: string;
  Role: string;
  LocationARN: string;
  BucketRegion: string;
  VPCEndpointDNSName?: string;
  InclusionFilters?: CacheReportFilter[];
  ExclusionFilters?: CacheReportFilter[];
  ClientToken: string;
  Tags?: Tag[];
}
const StartCacheReportInput = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<StartCacheReportInput>;
export interface StartCacheReportOutput {
  CacheReportARN?: string;
}
const StartCacheReportOutput = CancelCacheReportOutput as any as S.Schema<StartCacheReportOutput>;
export interface StartGatewayInput {
  GatewayARN: string;
}
const StartGatewayInput = /*@__PURE__*/ __L.at(__c24, 5) as any as S.Schema<StartGatewayInput>;
export interface StartGatewayOutput {
  GatewayARN?: string;
}
const StartGatewayOutput = ActivateGatewayOutput as any as S.Schema<StartGatewayOutput>;
export interface UpdateAutomaticTapeCreationPolicyInput {
  AutomaticTapeCreationRules: AutomaticTapeCreationRule[];
  GatewayARN: string;
}
const UpdateAutomaticTapeCreationPolicyInput = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<UpdateAutomaticTapeCreationPolicyInput>;
export interface UpdateAutomaticTapeCreationPolicyOutput {
  GatewayARN?: string;
}
const UpdateAutomaticTapeCreationPolicyOutput =
  DeleteAutomaticTapeCreationPolicyOutput as any as S.Schema<UpdateAutomaticTapeCreationPolicyOutput>;
export interface UpdateBandwidthRateLimitInput {
  GatewayARN: string;
  AverageUploadRateLimitInBitsPerSec?: number;
  AverageDownloadRateLimitInBitsPerSec?: number;
}
const UpdateBandwidthRateLimitInput = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<UpdateBandwidthRateLimitInput>;
export interface UpdateBandwidthRateLimitOutput {
  GatewayARN?: string;
}
const UpdateBandwidthRateLimitOutput =
  DeleteAutomaticTapeCreationPolicyOutput as any as S.Schema<UpdateBandwidthRateLimitOutput>;
export interface UpdateBandwidthRateLimitScheduleInput {
  GatewayARN: string;
  BandwidthRateLimitIntervals: BandwidthRateLimitInterval[];
}
const UpdateBandwidthRateLimitScheduleInput = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<UpdateBandwidthRateLimitScheduleInput>;
export interface UpdateBandwidthRateLimitScheduleOutput {
  GatewayARN?: string;
}
const UpdateBandwidthRateLimitScheduleOutput =
  DeleteAutomaticTapeCreationPolicyOutput as any as S.Schema<UpdateBandwidthRateLimitScheduleOutput>;
export interface UpdateChapCredentialsInput {
  TargetARN: string;
  SecretToAuthenticateInitiator: string | redacted.Redacted<string>;
  InitiatorName: string;
  SecretToAuthenticateTarget?: string | redacted.Redacted<string>;
}
const UpdateChapCredentialsInput = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<UpdateChapCredentialsInput>;
export interface UpdateChapCredentialsOutput {
  TargetARN?: string;
  InitiatorName?: string;
}
const UpdateChapCredentialsOutput =
  DeleteChapCredentialsOutput as any as S.Schema<UpdateChapCredentialsOutput>;
export interface UpdateFileSystemAssociationInput {
  FileSystemAssociationARN: string;
  UserName?: string;
  Password?: string | redacted.Redacted<string>;
  AuditDestinationARN?: string;
  CacheAttributes?: CacheAttributes;
}
const UpdateFileSystemAssociationInput = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<UpdateFileSystemAssociationInput>;
export interface UpdateFileSystemAssociationOutput {
  FileSystemAssociationARN?: string;
}
const UpdateFileSystemAssociationOutput =
  AssociateFileSystemOutput as any as S.Schema<UpdateFileSystemAssociationOutput>;
export interface UpdateGatewayInformationInput {
  GatewayARN: string;
  GatewayName?: string;
  GatewayTimezone?: string;
  CloudWatchLogGroupARN?: string;
  GatewayCapacity?: GatewayCapacity;
}
const UpdateGatewayInformationInput = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<UpdateGatewayInformationInput>;
export interface UpdateGatewayInformationOutput {
  GatewayARN?: string;
  GatewayName?: string;
}
const UpdateGatewayInformationOutput = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<UpdateGatewayInformationOutput>;
export interface UpdateGatewaySoftwareNowInput {
  GatewayARN: string;
}
const UpdateGatewaySoftwareNowInput = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<UpdateGatewaySoftwareNowInput>;
export interface UpdateGatewaySoftwareNowOutput {
  GatewayARN?: string;
}
const UpdateGatewaySoftwareNowOutput =
  DeleteAutomaticTapeCreationPolicyOutput as any as S.Schema<UpdateGatewaySoftwareNowOutput>;
export interface UpdateMaintenanceStartTimeInput {
  GatewayARN: string;
  HourOfDay?: number;
  MinuteOfHour?: number;
  DayOfWeek?: number;
  DayOfMonth?: number;
  SoftwareUpdatePreferences?: SoftwareUpdatePreferences;
}
const UpdateMaintenanceStartTimeInput = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<UpdateMaintenanceStartTimeInput>;
export interface UpdateMaintenanceStartTimeOutput {
  GatewayARN?: string;
}
const UpdateMaintenanceStartTimeOutput =
  DeleteAutomaticTapeCreationPolicyOutput as any as S.Schema<UpdateMaintenanceStartTimeOutput>;
export interface UpdateNFSFileShareInput {
  FileShareARN: string;
  EncryptionType?: EncryptionType;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  NFSFileShareDefaults?: NFSFileShareDefaults;
  DefaultStorageClass?: string;
  ObjectACL?: ObjectACL;
  ClientList?: string[];
  Squash?: string;
  ReadOnly?: boolean;
  GuessMIMETypeEnabled?: boolean;
  RequesterPays?: boolean;
  FileShareName?: string;
  CacheAttributes?: CacheAttributes;
  NotificationPolicy?: string;
  AuditDestinationARN?: string;
}
const UpdateNFSFileShareInput = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<UpdateNFSFileShareInput>;
export interface UpdateNFSFileShareOutput {
  FileShareARN?: string;
}
const UpdateNFSFileShareOutput =
  CreateNFSFileShareOutput as any as S.Schema<UpdateNFSFileShareOutput>;
export interface UpdateSMBFileShareInput {
  FileShareARN: string;
  EncryptionType?: EncryptionType;
  KMSEncrypted?: boolean;
  KMSKey?: string;
  DefaultStorageClass?: string;
  ObjectACL?: ObjectACL;
  ReadOnly?: boolean;
  GuessMIMETypeEnabled?: boolean;
  RequesterPays?: boolean;
  SMBACLEnabled?: boolean;
  AccessBasedEnumeration?: boolean;
  AdminUserList?: string[];
  ValidUserList?: string[];
  InvalidUserList?: string[];
  AuditDestinationARN?: string;
  CaseSensitivity?: CaseSensitivity;
  FileShareName?: string;
  CacheAttributes?: CacheAttributes;
  NotificationPolicy?: string;
  OplocksEnabled?: boolean;
}
const UpdateSMBFileShareInput = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<UpdateSMBFileShareInput>;
export interface UpdateSMBFileShareOutput {
  FileShareARN?: string;
}
const UpdateSMBFileShareOutput =
  CreateNFSFileShareOutput as any as S.Schema<UpdateSMBFileShareOutput>;
export interface UpdateSMBFileShareVisibilityInput {
  GatewayARN: string;
  FileSharesVisible: boolean;
}
const UpdateSMBFileShareVisibilityInput = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<UpdateSMBFileShareVisibilityInput>;
export interface UpdateSMBFileShareVisibilityOutput {
  GatewayARN?: string;
}
const UpdateSMBFileShareVisibilityOutput =
  DeleteAutomaticTapeCreationPolicyOutput as any as S.Schema<UpdateSMBFileShareVisibilityOutput>;
export interface UpdateSMBLocalGroupsInput {
  GatewayARN: string;
  SMBLocalGroups: SMBLocalGroups;
}
const UpdateSMBLocalGroupsInput = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<UpdateSMBLocalGroupsInput>;
export interface UpdateSMBLocalGroupsOutput {
  GatewayARN?: string;
}
const UpdateSMBLocalGroupsOutput =
  DeleteAutomaticTapeCreationPolicyOutput as any as S.Schema<UpdateSMBLocalGroupsOutput>;
export interface UpdateSMBSecurityStrategyInput {
  GatewayARN: string;
  SMBSecurityStrategy: SMBSecurityStrategy;
}
const UpdateSMBSecurityStrategyInput = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<UpdateSMBSecurityStrategyInput>;
export interface UpdateSMBSecurityStrategyOutput {
  GatewayARN?: string;
}
const UpdateSMBSecurityStrategyOutput =
  DeleteAutomaticTapeCreationPolicyOutput as any as S.Schema<UpdateSMBSecurityStrategyOutput>;
export interface UpdateSnapshotScheduleInput {
  VolumeARN: string;
  StartAt: number;
  RecurrenceInHours: number;
  Description?: string;
  Tags?: Tag[];
}
const UpdateSnapshotScheduleInput = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<UpdateSnapshotScheduleInput>;
export interface UpdateSnapshotScheduleOutput {
  VolumeARN?: string;
}
const UpdateSnapshotScheduleOutput =
  DeleteSnapshotScheduleOutput as any as S.Schema<UpdateSnapshotScheduleOutput>;
export type DeviceType = string;
export interface UpdateVTLDeviceTypeInput {
  VTLDeviceARN: string;
  DeviceType: string;
}
const UpdateVTLDeviceTypeInput = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<UpdateVTLDeviceTypeInput>;
export interface UpdateVTLDeviceTypeOutput {
  VTLDeviceARN?: string;
}
const UpdateVTLDeviceTypeOutput = /*@__PURE__*/ __L.at(
  __c26,
  6,
) as any as S.Schema<UpdateVTLDeviceTypeOutput>;
export type ErrorCode =
  | "ActivationKeyExpired"
  | "ActivationKeyInvalid"
  | "ActivationKeyNotFound"
  | "GatewayInternalError"
  | "GatewayNotConnected"
  | "GatewayNotFound"
  | "GatewayProxyNetworkConnectionBusy"
  | "AuthenticationFailure"
  | "BandwidthThrottleScheduleNotFound"
  | "Blocked"
  | "CannotExportSnapshot"
  | "ChapCredentialNotFound"
  | "DiskAlreadyAllocated"
  | "DiskDoesNotExist"
  | "DiskSizeGreaterThanVolumeMaxSize"
  | "DiskSizeLessThanVolumeSize"
  | "DiskSizeNotGigAligned"
  | "DuplicateCertificateInfo"
  | "DuplicateSchedule"
  | "EndpointNotFound"
  | "IAMNotSupported"
  | "InitiatorInvalid"
  | "InitiatorNotFound"
  | "InternalError"
  | "InvalidGateway"
  | "InvalidEndpoint"
  | "InvalidParameters"
  | "InvalidSchedule"
  | "LocalStorageLimitExceeded"
  | "LunAlreadyAllocated "
  | "LunInvalid"
  | "JoinDomainInProgress"
  | "MaximumContentLengthExceeded"
  | "MaximumTapeCartridgeCountExceeded"
  | "MaximumVolumeCountExceeded"
  | "NetworkConfigurationChanged"
  | "NoDisksAvailable"
  | "NotImplemented"
  | "NotSupported"
  | "OperationAborted"
  | "OutdatedGateway"
  | "ParametersNotImplemented"
  | "RegionInvalid"
  | "RequestTimeout"
  | "ServiceUnavailable"
  | "SnapshotDeleted"
  | "SnapshotIdInvalid"
  | "SnapshotInProgress"
  | "SnapshotNotFound"
  | "SnapshotScheduleNotFound"
  | "StagingAreaFull"
  | "StorageFailure"
  | "TapeCartridgeNotFound"
  | "TargetAlreadyExists"
  | "TargetInvalid"
  | "TargetNotFound"
  | "UnauthorizedOperation"
  | "VolumeAlreadyExists"
  | "VolumeIdInvalid"
  | "VolumeInUse"
  | "VolumeNotFound"
  | "VolumeNotReady"
  | (string & {});
const ErrorCode = S.String;

export type ErrorDetails = { [key: string]: string | undefined };
const ErrorDetails = /*@__PURE__*/ __L.at(__c26, 7);
export interface StorageGatewayError {
  errorCode?: ErrorCode;
  errorDetails?: { [key: string]: string | undefined };
}
const StorageGatewayError = /*@__PURE__*/ __L.at(__c27, 0) as any as S.Schema<StorageGatewayError>;
export type ActivateGatewayError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Activates the gateway you previously deployed on your host. In the activation process,
 * you specify information such as the Amazon Web Services Region that you want to use for
 * storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot
 * schedule window, an activation key, and a name for your gateway. The activation process
 * also associates your gateway with your account. For more information, see UpdateGatewayInformation.
 *
 * You must turn on the gateway VM before you can activate your gateway.
 */
export const activateGateway: API.OperationMethod<
  ActivateGatewayInput,
  ActivateGatewayOutput,
  ActivateGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ActivateGatewayInput,
  output: ActivateGatewayOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ActivateGateway",
}));

export type AddCacheError = InternalServerError | InvalidGatewayRequestException | CommonErrors;
/**
 * Configures one or more gateway local disks as cache for a gateway. This operation is
 * only supported in the cached volume, tape, and file gateway type (see How Storage Gateway works (architecture).
 *
 * In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
 * add cache, and one or more disk IDs that you want to configure as cache.
 */
export const addCache: API.OperationMethod<
  AddCacheInput,
  AddCacheOutput,
  AddCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddCacheInput,
  output: AddCacheOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddCache",
}));

export type AddTagsToResourceError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Adds one or more tags to the specified resource. You use tags to add metadata to
 * resources, which you can use to categorize these resources. For example, you can categorize
 * resources by purpose, owner, environment, or team. Each tag consists of a key and a value,
 * which you define. You can add tags to the following Storage Gateway resources:
 *
 * - Storage gateways of all types
 *
 * - Storage volumes
 *
 * - Virtual tapes
 *
 * - NFS and SMB file shares
 *
 * - File System associations
 *
 * You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes
 * that are recovered to a new gateway maintain their tags.
 */
export const addTagsToResource: API.OperationMethod<
  AddTagsToResourceInput,
  AddTagsToResourceOutput,
  AddTagsToResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddTagsToResourceInput,
  output: AddTagsToResourceOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddTagsToResource",
}));

export type AddUploadBufferError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Configures one or more gateway local disks as upload buffer for a specified gateway.
 * This operation is supported for the stored volume, cached volume, and tape gateway
 * types.
 *
 * In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
 * add upload buffer, and one or more disk IDs that you want to configure as upload
 * buffer.
 */
export const addUploadBuffer: API.OperationMethod<
  AddUploadBufferInput,
  AddUploadBufferOutput,
  AddUploadBufferError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddUploadBufferInput,
  output: AddUploadBufferOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddUploadBuffer",
}));

export type AddWorkingStorageError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Configures one or more gateway local disks as working storage for a gateway. This
 * operation is only supported in the stored volume gateway type. This operation is deprecated
 * in cached volume API version 20120630. Use AddUploadBuffer
 * instead.
 *
 * Working storage is also referred to as upload buffer. You can also use the AddUploadBuffer operation to add upload buffer to a stored volume
 * gateway.
 *
 * In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
 * add working storage, and one or more disk IDs that you want to configure as working
 * storage.
 */
export const addWorkingStorage: API.OperationMethod<
  AddWorkingStorageInput,
  AddWorkingStorageOutput,
  AddWorkingStorageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddWorkingStorageInput,
  output: AddWorkingStorageOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddWorkingStorage",
}));

export type AssignTapePoolError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in
 * the S3 storage class that is associated with the pool. When you use your backup application
 * to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or
 * S3 Glacier Deep Archive) that corresponds to the pool.
 */
export const assignTapePool: API.OperationMethod<
  AssignTapePoolInput,
  AssignTapePoolOutput,
  AssignTapePoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssignTapePoolInput,
  output: AssignTapePoolOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssignTapePool",
}));

export type AssociateFileSystemError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Associate an Amazon FSx file system with the FSx File Gateway. After the
 * association process is complete, the file shares on the Amazon FSx file system are
 * available for access through the gateway. This operation only supports the FSx File Gateway
 * type.
 */
export const associateFileSystem: API.OperationMethod<
  AssociateFileSystemInput,
  AssociateFileSystemOutput,
  AssociateFileSystemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateFileSystemInput,
  output: AssociateFileSystemOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateFileSystem",
}));

export type AttachVolumeError = InternalServerError | InvalidGatewayRequestException | CommonErrors;
/**
 * Connects a volume to an iSCSI connection and then attaches the volume to the specified
 * gateway. Detaching and attaching a volume enables you to recover your data from one gateway
 * to a different gateway without creating a snapshot. It also makes it easier to move your
 * volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.
 */
export const attachVolume: API.OperationMethod<
  AttachVolumeInput,
  AttachVolumeOutput,
  AttachVolumeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AttachVolumeInput,
  output: AttachVolumeOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AttachVolume",
}));

export type CancelArchivalError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving
 * process is initiated. This operation is only supported in the tape gateway type.
 */
export const cancelArchival: API.OperationMethod<
  CancelArchivalInput,
  CancelArchivalOutput,
  CancelArchivalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelArchivalInput,
  output: CancelArchivalOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelArchival",
}));

export type CancelCacheReportError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Cancels generation of a specified cache report. You can use this operation to manually
 * cancel an IN-PROGRESS report for any reason. This action changes the report status from
 * IN-PROGRESS to CANCELLED. You can only cancel in-progress reports. If the the report you
 * attempt to cancel is in FAILED, ERROR, or COMPLETED state, the cancel operation returns an
 * error.
 */
export const cancelCacheReport: API.OperationMethod<
  CancelCacheReportInput,
  CancelCacheReportOutput,
  CancelCacheReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelCacheReportInput,
  output: CancelCacheReportOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelCacheReport",
}));

export type CancelRetrievalError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after
 * the retrieval process is initiated. The virtual tape is returned to the VTS. This operation
 * is only supported in the tape gateway type.
 */
export const cancelRetrieval: API.OperationMethod<
  CancelRetrievalInput,
  CancelRetrievalOutput,
  CancelRetrievalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelRetrievalInput,
  output: CancelRetrievalOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelRetrieval",
}));

export type CreateCachediSCSIVolumeError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Creates a cached volume on a specified cached volume gateway. This operation is only
 * supported in the cached volume gateway type.
 *
 * Cache storage must be allocated to the gateway before you can create a cached volume.
 * Use the AddCache operation to add cache storage to a gateway.
 *
 * In the request, you must specify the gateway, size of the volume in bytes, the iSCSI
 * target name, an IP address on which to expose the target, and a unique client token. In
 * response, the gateway creates the volume and returns information about it. This information
 * includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that
 * initiators can use to connect to the volume target.
 *
 * Optionally, you can provide the ARN for an existing volume as the
 * `SourceVolumeARN` for this cached volume, which creates an exact copy of the
 * existing volume's latest recovery point. The `VolumeSizeInBytes` value must be
 * equal to or larger than the size of the copied volume, in bytes.
 */
export const createCachediSCSIVolume: API.OperationMethod<
  CreateCachediSCSIVolumeInput,
  CreateCachediSCSIVolumeOutput,
  CreateCachediSCSIVolumeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCachediSCSIVolumeInput,
  output: CreateCachediSCSIVolumeOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCachediSCSIVolume",
}));

export type CreateNFSFileShareError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Creates a Network File System (NFS) file share on an existing S3 File Gateway. In
 * Storage Gateway, a file share is a file system mount point backed by Amazon S3
 * cloud storage. Storage Gateway exposes file shares using an NFS interface. This operation
 * is only supported for S3 File Gateways.
 *
 * S3 File gateway requires Security Token Service (Amazon Web Services STS) to be
 * activated to enable you to create a file share. Make sure Amazon Web Services STS is
 * activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If
 * Amazon Web Services STS is not activated in the Amazon Web Services Region, activate
 * it. For information about how to activate Amazon Web Services STS, see Activating and
 * deactivating Amazon Web Services STS in an Amazon Web Services Region in the
 * *Identity and Access Management User Guide*.
 *
 * S3 File Gateways do not support creating hard or symbolic links on a file
 * share.
 */
export const createNFSFileShare: API.OperationMethod<
  CreateNFSFileShareInput,
  CreateNFSFileShareOutput,
  CreateNFSFileShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateNFSFileShareInput,
  output: CreateNFSFileShareOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateNFSFileShare",
}));

export type CreateSMBFileShareError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In
 * Storage Gateway, a file share is a file system mount point backed by Amazon S3
 * cloud storage. Storage Gateway exposes file shares using an SMB interface. This operation
 * is only supported for S3 File Gateways.
 *
 * S3 File Gateways require Security Token Service (Amazon Web Services STS) to be
 * activated to enable you to create a file share. Make sure that Amazon Web Services STS
 * is activated in the Amazon Web Services Region you are creating your S3 File Gateway in.
 * If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate
 * it. For information about how to activate Amazon Web Services STS, see Activating and
 * deactivating Amazon Web Services STS in an Amazon Web Services Region in the
 * *Identity and Access Management User Guide*.
 *
 * File gateways don't support creating hard or symbolic links on a file
 * share.
 */
export const createSMBFileShare: API.OperationMethod<
  CreateSMBFileShareInput,
  CreateSMBFileShareOutput,
  CreateSMBFileShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSMBFileShareInput,
  output: CreateSMBFileShareOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSMBFileShare",
}));

export type CreateSnapshotError =
  | InternalServerError
  | InvalidGatewayRequestException
  | ServiceUnavailableError
  | CommonErrors;
/**
 * Initiates a snapshot of a volume.
 *
 * Storage Gateway provides the ability to back up point-in-time snapshots of your
 * data to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and also
 * import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute
 * Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad hoc basis.
 * This API enables you to take an ad hoc snapshot. For more information, see Editing a
 * snapshot schedule.
 *
 * In the `CreateSnapshot` request, you identify the volume by providing its
 * Amazon Resource Name (ARN). You must also provide description for the snapshot. When
 * Storage Gateway takes the snapshot of specified volume, the snapshot and
 * description appears in the Storage Gateway console. In response, Storage Gateway
 * returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or
 * later use it when you want to create a volume from a snapshot. This operation is only
 * supported in stored and cached volume gateway type.
 *
 * To list or delete a snapshot, you must use the Amazon EC2 API. For more information,
 * see DescribeSnapshots
 * or DeleteSnapshot in the Amazon Elastic Compute Cloud API
 * Reference.
 *
 * Volume and snapshot IDs are changing to a longer length ID format. For more
 * information, see the important note on the Welcome page.
 */
export const createSnapshot: API.OperationMethod<
  CreateSnapshotInput,
  CreateSnapshotOutput,
  CreateSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSnapshotInput,
  output: CreateSnapshotOutput,
  errors: [InternalServerError, InvalidGatewayRequestException, ServiceUnavailableError],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSnapshot",
}));

export type CreateSnapshotFromVolumeRecoveryPointError =
  | InternalServerError
  | InvalidGatewayRequestException
  | ServiceUnavailableError
  | CommonErrors;
/**
 * Initiates a snapshot of a gateway from a volume recovery point. This operation is only
 * supported in the cached volume gateway type.
 *
 * A volume recovery point is a point in time at which all data of the volume is consistent
 * and from which you can create a snapshot. To get a list of volume recovery point for cached
 * volume gateway, use ListVolumeRecoveryPoints.
 *
 * In the `CreateSnapshotFromVolumeRecoveryPoint` request, you identify the
 * volume by providing its Amazon Resource Name (ARN). You must also provide a description for
 * the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and
 * its description appear in the Storage Gateway console.
 * In response, the gateway returns
 * you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use
 * it when you want to create a volume from a snapshot.
 *
 * To list or delete a snapshot, you must use the Amazon EC2 API. For more information,
 * see DescribeSnapshots
 * or DeleteSnapshot in the Amazon Elastic Compute Cloud API
 * Reference.
 */
export const createSnapshotFromVolumeRecoveryPoint: API.OperationMethod<
  CreateSnapshotFromVolumeRecoveryPointInput,
  CreateSnapshotFromVolumeRecoveryPointOutput,
  CreateSnapshotFromVolumeRecoveryPointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSnapshotFromVolumeRecoveryPointInput,
  output: CreateSnapshotFromVolumeRecoveryPointOutput,
  errors: [InternalServerError, InvalidGatewayRequestException, ServiceUnavailableError],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSnapshotFromVolumeRecoveryPoint",
}));

export type CreateStorediSCSIVolumeError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Creates a volume on a specified gateway. This operation is only supported in the stored
 * volume gateway type.
 *
 * The size of the volume to create is inferred from the disk size. You can choose to
 * preserve existing data on the disk, create volume from an existing snapshot, or create an
 * empty volume. If you choose to create an empty gateway volume, then any existing data on
 * the disk is erased.
 *
 * In the request, you must specify the gateway and the disk information on which you are
 * creating the volume. In response, the gateway creates the volume and returns volume
 * information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target
 * ARN that initiators can use to connect to the volume target.
 */
export const createStorediSCSIVolume: API.OperationMethod<
  CreateStorediSCSIVolumeInput,
  CreateStorediSCSIVolumeOutput,
  CreateStorediSCSIVolumeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateStorediSCSIVolumeInput,
  output: CreateStorediSCSIVolumeOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateStorediSCSIVolume",
}));

export type CreateTapePoolError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Creates a new custom tape pool. You can use custom tape pool to enable tape retention
 * lock on tapes that are archived in the custom pool.
 */
export const createTapePool: API.OperationMethod<
  CreateTapePoolInput,
  CreateTapePoolOutput,
  CreateTapePoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTapePoolInput,
  output: CreateTapePoolOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTapePool",
}));

export type CreateTapesError = InternalServerError | InvalidGatewayRequestException | CommonErrors;
/**
 * Creates one or more virtual tapes. You write data to the virtual tapes and then archive
 * the tapes. This operation is only supported in the tape gateway type.
 *
 * Cache storage must be allocated to the gateway before you can create virtual tapes.
 * Use the AddCache operation to add cache storage to a gateway.
 */
export const createTapes: API.OperationMethod<
  CreateTapesInput,
  CreateTapesOutput,
  CreateTapesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTapesInput,
  output: CreateTapesOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTapes",
}));

export type CreateTapeWithBarcodeError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Creates a virtual tape by using your own barcode. You write data to the virtual tape and
 * then archive the tape. A barcode is unique and cannot be reused if it has already been used
 * on a tape. This applies to barcodes used on deleted tapes. This operation is only supported
 * in the tape gateway type.
 *
 * Cache storage must be allocated to the gateway before you can create a virtual tape.
 * Use the AddCache operation to add cache storage to a gateway.
 */
export const createTapeWithBarcode: API.OperationMethod<
  CreateTapeWithBarcodeInput,
  CreateTapeWithBarcodeOutput,
  CreateTapeWithBarcodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTapeWithBarcodeInput,
  output: CreateTapeWithBarcodeOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTapeWithBarcode",
}));

export type DeleteAutomaticTapeCreationPolicyError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Deletes the automatic tape creation policy of a gateway. If you delete this policy, new
 * virtual tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway
 * in your request to remove the policy.
 */
export const deleteAutomaticTapeCreationPolicy: API.OperationMethod<
  DeleteAutomaticTapeCreationPolicyInput,
  DeleteAutomaticTapeCreationPolicyOutput,
  DeleteAutomaticTapeCreationPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAutomaticTapeCreationPolicyInput,
  output: DeleteAutomaticTapeCreationPolicyOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAutomaticTapeCreationPolicy",
}));

export type DeleteBandwidthRateLimitError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Deletes the bandwidth rate limits of a gateway. You can delete either the upload and
 * download bandwidth rate limit, or you can delete both. If you delete only one of the
 * limits, the other limit remains unchanged. To specify which gateway to work with, use the
 * Amazon Resource Name (ARN) of the gateway in your request. This operation is supported only
 * for the stored volume, cached volume, and tape gateway types.
 */
export const deleteBandwidthRateLimit: API.OperationMethod<
  DeleteBandwidthRateLimitInput,
  DeleteBandwidthRateLimitOutput,
  DeleteBandwidthRateLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBandwidthRateLimitInput,
  output: DeleteBandwidthRateLimitOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBandwidthRateLimit",
}));

export type DeleteCacheReportError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Deletes the specified cache report and any associated tags from the Storage Gateway database. You can only delete completed reports. If the status of the
 * report you attempt to delete still IN-PROGRESS, the delete operation returns an error. You
 * can use `CancelCacheReport` to cancel an IN-PROGRESS report.
 *
 * `DeleteCacheReport` does not delete the report object from your Amazon S3 bucket.
 */
export const deleteCacheReport: API.OperationMethod<
  DeleteCacheReportInput,
  DeleteCacheReportOutput,
  DeleteCacheReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCacheReportInput,
  output: DeleteCacheReportOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCacheReport",
}));

export type DeleteChapCredentialsError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified
 * iSCSI target and initiator pair. This operation is supported in volume and tape gateway
 * types.
 */
export const deleteChapCredentials: API.OperationMethod<
  DeleteChapCredentialsInput,
  DeleteChapCredentialsOutput,
  DeleteChapCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteChapCredentialsInput,
  output: DeleteChapCredentialsOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteChapCredentials",
}));

export type DeleteFileShareError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Deletes a file share from an S3 File Gateway. This operation is only supported for S3
 * File Gateways.
 */
export const deleteFileShare: API.OperationMethod<
  DeleteFileShareInput,
  DeleteFileShareOutput,
  DeleteFileShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFileShareInput,
  output: DeleteFileShareOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFileShare",
}));

export type DeleteGatewayError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name
 * (ARN) of the gateway in your request. The operation deletes the gateway; however, it does
 * not delete the gateway virtual machine (VM) from your host computer.
 *
 * After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway
 * volumes are not deleted upon deleting the gateway, however, pending snapshots will not
 * complete. After you delete a gateway, your next step is to remove it from your
 * environment.
 *
 * You no longer pay software charges after the gateway is deleted; however, your
 * existing Amazon EBS snapshots persist and you will continue to be billed for these
 * snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your
 * Amazon EC2 subscription.  If you prefer not to cancel your Amazon EC2 subscription, you
 * can delete your snapshots using the Amazon EC2 console. For more information, see the
 * Storage Gateway detail
 * page.
 */
export const deleteGateway: API.OperationMethod<
  DeleteGatewayInput,
  DeleteGatewayOutput,
  DeleteGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteGatewayInput,
  output: DeleteGatewayOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGateway",
}));

export type DeleteSnapshotScheduleError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Deletes a snapshot of a volume.
 *
 * You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API
 * action enables you to delete a snapshot schedule for a volume. For more information, see
 * Backing up your
 * volumes. In the `DeleteSnapshotSchedule` request, you identify the
 * volume by providing its Amazon Resource Name (ARN). This operation is only supported for
 * cached volume gateway types.
 *
 * To list or delete a snapshot, you must use the Amazon EC2 API. For more information,
 * go to DescribeSnapshots
 * in the *Amazon Elastic Compute Cloud API Reference*.
 */
export const deleteSnapshotSchedule: API.OperationMethod<
  DeleteSnapshotScheduleInput,
  DeleteSnapshotScheduleOutput,
  DeleteSnapshotScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSnapshotScheduleInput,
  output: DeleteSnapshotScheduleOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSnapshotSchedule",
}));

export type DeleteTapeError = InternalServerError | InvalidGatewayRequestException | CommonErrors;
/**
 * Deletes the specified virtual tape. This operation is only supported in the tape gateway
 * type.
 */
export const deleteTape: API.OperationMethod<
  DeleteTapeInput,
  DeleteTapeOutput,
  DeleteTapeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTapeInput,
  output: DeleteTapeOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTape",
}));

export type DeleteTapeArchiveError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is
 * only supported in the tape gateway type.
 */
export const deleteTapeArchive: API.OperationMethod<
  DeleteTapeArchiveInput,
  DeleteTapeArchiveOutput,
  DeleteTapeArchiveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTapeArchiveInput,
  output: DeleteTapeArchiveOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTapeArchive",
}));

export type DeleteTapePoolError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes
 * in the pool and if there are no automatic tape creation policies that reference the custom
 * tape pool.
 */
export const deleteTapePool: API.OperationMethod<
  DeleteTapePoolInput,
  DeleteTapePoolOutput,
  DeleteTapePoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTapePoolInput,
  output: DeleteTapePoolOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTapePool",
}));

export type DeleteVolumeError = InternalServerError | InvalidGatewayRequestException | CommonErrors;
/**
 * Deletes the specified storage volume that you previously created using the CreateCachediSCSIVolume or CreateStorediSCSIVolume API.
 * This operation is only supported in the cached volume and stored volume types. For stored
 * volume gateways, the local disk that was configured as the storage volume is not deleted.
 * You can reuse the local disk to create another storage volume.
 *
 * Before you delete a volume, make sure there are no iSCSI connections to the volume you
 * are deleting. You should also make sure there is no snapshot in progress. You can use the
 * Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are
 * deleting and check the snapshot status. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API
 * Reference.
 *
 * In the request, you must provide the Amazon Resource Name (ARN) of the storage volume
 * you want to delete.
 */
export const deleteVolume: API.OperationMethod<
  DeleteVolumeInput,
  DeleteVolumeOutput,
  DeleteVolumeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteVolumeInput,
  output: DeleteVolumeOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVolume",
}));

export type DescribeAvailabilityMonitorTestError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns information about the most recent high availability monitoring test that was
 * performed on the host in a cluster. If a test isn't performed, the status and start
 * time in the response would be null.
 */
export const describeAvailabilityMonitorTest: API.OperationMethod<
  DescribeAvailabilityMonitorTestInput,
  DescribeAvailabilityMonitorTestOutput,
  DescribeAvailabilityMonitorTestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAvailabilityMonitorTestInput,
  output: DescribeAvailabilityMonitorTestOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAvailabilityMonitorTest",
}));

export type DescribeBandwidthRateLimitError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns the bandwidth rate limits of a gateway. By default, these limits are not set,
 * which means no bandwidth rate limiting is in effect. This operation is supported only for
 * the stored volume, cached volume, and tape gateway types. To describe bandwidth rate limits
 * for S3 file gateways, use DescribeBandwidthRateLimitSchedule.
 *
 * This operation returns a value for a bandwidth rate limit only if the limit is set. If
 * no limits are set for the gateway, then this operation returns only the gateway ARN in the
 * response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of
 * the gateway in your request.
 */
export const describeBandwidthRateLimit: API.OperationMethod<
  DescribeBandwidthRateLimitInput,
  DescribeBandwidthRateLimitOutput,
  DescribeBandwidthRateLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeBandwidthRateLimitInput,
  output: DescribeBandwidthRateLimitOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBandwidthRateLimit",
}));

export type DescribeBandwidthRateLimitScheduleError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns information about the bandwidth rate limit schedule of a gateway. By default,
 * gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting
 * is in effect. This operation is supported only for volume, tape and S3 file gateways. FSx
 * file gateways do not support bandwidth rate limits.
 *
 * This operation returns information about a gateway's bandwidth rate limit schedule. A
 * bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A
 * bandwidth rate limit interval defines a period of time on one or more days of the week,
 * during which bandwidth rate limits are specified for uploading, downloading, or both.
 *
 * A bandwidth rate limit interval consists of one or more days of the week, a start hour
 * and minute, an ending hour and minute, and bandwidth rate limits for uploading and
 * downloading
 *
 * If no bandwidth rate limit schedule intervals are set for the gateway, this operation
 * returns an empty response. To specify which gateway to describe, use the Amazon Resource
 * Name (ARN) of the gateway in your request.
 */
export const describeBandwidthRateLimitSchedule: API.OperationMethod<
  DescribeBandwidthRateLimitScheduleInput,
  DescribeBandwidthRateLimitScheduleOutput,
  DescribeBandwidthRateLimitScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeBandwidthRateLimitScheduleInput,
  output: DescribeBandwidthRateLimitScheduleOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBandwidthRateLimitSchedule",
}));

export type DescribeCacheError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns information about the cache of a gateway. This operation is only supported in
 * the cached volume, tape, and file gateway types.
 *
 * The response includes disk IDs that are configured as cache, and it includes the amount
 * of cache allocated and used.
 */
export const describeCache: API.OperationMethod<
  DescribeCacheInput,
  DescribeCacheOutput,
  DescribeCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeCacheInput,
  output: DescribeCacheOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCache",
}));

export type DescribeCachediSCSIVolumesError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns a description of the gateway volumes specified in the request. This operation is
 * only supported in the cached volume gateway types.
 *
 * The list of gateway volumes in the request must be from one gateway. In the response,
 * Storage Gateway returns volume information sorted by volume Amazon Resource Name
 * (ARN).
 */
export const describeCachediSCSIVolumes: API.OperationMethod<
  DescribeCachediSCSIVolumesInput,
  DescribeCachediSCSIVolumesOutput,
  DescribeCachediSCSIVolumesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeCachediSCSIVolumesInput,
  output: DescribeCachediSCSIVolumesOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCachediSCSIVolumes",
}));

export type DescribeCacheReportError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns information about the specified cache report, including completion status and
 * generation progress.
 */
export const describeCacheReport: API.OperationMethod<
  DescribeCacheReportInput,
  DescribeCacheReportOutput,
  DescribeCacheReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeCacheReportInput,
  output: DescribeCacheReportOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCacheReport",
}));

export type DescribeChapCredentialsError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials
 * information for a specified iSCSI target, one for each target-initiator pair. This
 * operation is supported in the volume and tape gateway types.
 */
export const describeChapCredentials: API.OperationMethod<
  DescribeChapCredentialsInput,
  DescribeChapCredentialsOutput,
  DescribeChapCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeChapCredentialsInput,
  output: DescribeChapCredentialsOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeChapCredentials",
}));

export type DescribeFileSystemAssociationsError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Gets the file system association information. This operation is only supported for FSx
 * File Gateways.
 */
export const describeFileSystemAssociations: API.OperationMethod<
  DescribeFileSystemAssociationsInput,
  DescribeFileSystemAssociationsOutput,
  DescribeFileSystemAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeFileSystemAssociationsInput,
  output: DescribeFileSystemAssociationsOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFileSystemAssociations",
}));

export type DescribeGatewayInformationError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns metadata about a gateway such as its name, network interfaces, time zone,
 * status, and software version. To specify which gateway to describe, use the Amazon Resource
 * Name (ARN) of the gateway in your request.
 */
export const describeGatewayInformation: API.OperationMethod<
  DescribeGatewayInformationInput,
  DescribeGatewayInformationOutput,
  DescribeGatewayInformationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeGatewayInformationInput,
  output: DescribeGatewayInformationOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeGatewayInformation",
}));

export type DescribeMaintenanceStartTimeError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns your gateway's maintenance window schedule information, with values for
 * monthly or weekly cadence, specific day and time to begin maintenance, and which types of
 * updates to apply. Time values returned are for the gateway's time zone.
 */
export const describeMaintenanceStartTime: API.OperationMethod<
  DescribeMaintenanceStartTimeInput,
  DescribeMaintenanceStartTimeOutput,
  DescribeMaintenanceStartTimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeMaintenanceStartTimeInput,
  output: DescribeMaintenanceStartTimeOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMaintenanceStartTime",
}));

export type DescribeNFSFileSharesError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Gets a description for one or more Network File System (NFS) file shares from an S3 File
 * Gateway. This operation is only supported for S3 File Gateways.
 */
export const describeNFSFileShares: API.OperationMethod<
  DescribeNFSFileSharesInput,
  DescribeNFSFileSharesOutput,
  DescribeNFSFileSharesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeNFSFileSharesInput,
  output: DescribeNFSFileSharesOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeNFSFileShares",
}));

export type DescribeSMBFileSharesError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Gets a description for one or more Server Message Block (SMB) file shares from a S3 File
 * Gateway. This operation is only supported for S3 File Gateways.
 */
export const describeSMBFileShares: API.OperationMethod<
  DescribeSMBFileSharesInput,
  DescribeSMBFileSharesOutput,
  DescribeSMBFileSharesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeSMBFileSharesInput,
  output: DescribeSMBFileSharesOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSMBFileShares",
}));

export type DescribeSMBSettingsError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Gets a description of a Server Message Block (SMB) file share settings from a file
 * gateway. This operation is only supported for file gateways.
 */
export const describeSMBSettings: API.OperationMethod<
  DescribeSMBSettingsInput,
  DescribeSMBSettingsOutput,
  DescribeSMBSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeSMBSettingsInput,
  output: DescribeSMBSettingsOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSMBSettings",
}));

export type DescribeSnapshotScheduleError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Describes the snapshot schedule for the specified gateway volume. The snapshot schedule
 * information includes intervals at which snapshots are automatically initiated on the
 * volume. This operation is only supported in the cached volume and stored volume
 * types.
 */
export const describeSnapshotSchedule: API.OperationMethod<
  DescribeSnapshotScheduleInput,
  DescribeSnapshotScheduleOutput,
  DescribeSnapshotScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeSnapshotScheduleInput,
  output: DescribeSnapshotScheduleOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSnapshotSchedule",
}));

export type DescribeStorediSCSIVolumesError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns the description of the gateway volumes specified in the request. The list of
 * gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume ARNs. This operation is only
 * supported in stored volume gateway type.
 */
export const describeStorediSCSIVolumes: API.OperationMethod<
  DescribeStorediSCSIVolumesInput,
  DescribeStorediSCSIVolumesOutput,
  DescribeStorediSCSIVolumesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeStorediSCSIVolumesInput,
  output: DescribeStorediSCSIVolumesOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStorediSCSIVolumes",
}));

export type DescribeTapeArchivesError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This
 * operation is only supported in the tape gateway type.
 *
 * If a specific `TapeARN` is not specified, Storage Gateway returns a
 * description of all virtual tapes found in the VTS associated with your account.
 */
export const describeTapeArchives: API.PaginatedOperationMethod<
  DescribeTapeArchivesInput,
  DescribeTapeArchivesOutput,
  DescribeTapeArchivesError,
  Credentials | HttpClient.HttpClient,
  TapeArchive
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeTapeArchivesInput,
  output: DescribeTapeArchivesOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTapeArchives",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "TapeArchives",
    pageSize: "Limit",
  } as const,
})) as any;

export type DescribeTapeRecoveryPointsError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns a list of virtual tape recovery points that are available for the specified tape
 * gateway.
 *
 * A recovery point is a point-in-time view of a virtual tape at which all the data on the
 * virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery
 * points can be recovered to a new gateway. This operation is only supported in the tape
 * gateway type.
 */
export const describeTapeRecoveryPoints: API.PaginatedOperationMethod<
  DescribeTapeRecoveryPointsInput,
  DescribeTapeRecoveryPointsOutput,
  DescribeTapeRecoveryPointsError,
  Credentials | HttpClient.HttpClient,
  TapeRecoveryPointInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeTapeRecoveryPointsInput,
  output: DescribeTapeRecoveryPointsOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTapeRecoveryPoints",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "TapeRecoveryPointInfos",
    pageSize: "Limit",
  } as const,
})) as any;

export type DescribeTapesError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns a description of virtual tapes that correspond to the specified Amazon Resource
 * Names (ARNs). If `TapeARN` is not specified, returns a description of the
 * virtual tapes associated with the specified gateway. This operation is only supported for
 * the tape gateway type.
 *
 * The operation supports pagination. By default, the operation returns a maximum of up to
 * 100 tapes. You can optionally specify the `Limit` field in the body to limit the
 * number of tapes in the response. If the number of tapes returned in the response is
 * truncated, the response includes a `Marker` field. You can use this
 * `Marker` value in your subsequent request to retrieve the next set of
 * tapes.
 */
export const describeTapes: API.PaginatedOperationMethod<
  DescribeTapesInput,
  DescribeTapesOutput,
  DescribeTapesError,
  Credentials | HttpClient.HttpClient,
  Tape
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeTapesInput,
  output: DescribeTapesOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTapes",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Tapes",
    pageSize: "Limit",
  } as const,
})) as any;

export type DescribeUploadBufferError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns information about the upload buffer of a gateway. This operation is supported
 * for the stored volume, cached volume, and tape gateway types.
 *
 * The response includes disk IDs that are configured as upload buffer space, and it
 * includes the amount of upload buffer space allocated and used.
 */
export const describeUploadBuffer: API.OperationMethod<
  DescribeUploadBufferInput,
  DescribeUploadBufferOutput,
  DescribeUploadBufferError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeUploadBufferInput,
  output: DescribeUploadBufferOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeUploadBuffer",
}));

export type DescribeVTLDevicesError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns a description of virtual tape library (VTL) devices for the specified tape
 * gateway. In the response, Storage Gateway returns VTL device information.
 *
 * This operation is only supported in the tape gateway type.
 */
export const describeVTLDevices: API.PaginatedOperationMethod<
  DescribeVTLDevicesInput,
  DescribeVTLDevicesOutput,
  DescribeVTLDevicesError,
  Credentials | HttpClient.HttpClient,
  VTLDevice
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeVTLDevicesInput,
  output: DescribeVTLDevicesOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeVTLDevices",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "VTLDevices",
    pageSize: "Limit",
  } as const,
})) as any;

export type DescribeWorkingStorageError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns information about the working storage of a gateway. This operation is only
 * supported in the stored volumes gateway type. This operation is deprecated in cached
 * volumes API version (20120630). Use DescribeUploadBuffer instead.
 *
 * Working storage is also referred to as upload buffer. You can also use the
 * DescribeUploadBuffer operation to add upload buffer to a stored volume gateway.
 *
 * The response includes disk IDs that are configured as working storage, and it includes
 * the amount of working storage allocated and used.
 */
export const describeWorkingStorage: API.OperationMethod<
  DescribeWorkingStorageInput,
  DescribeWorkingStorageOutput,
  DescribeWorkingStorageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeWorkingStorageInput,
  output: DescribeWorkingStorageOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkingStorage",
}));

export type DetachVolumeError = InternalServerError | InvalidGatewayRequestException | CommonErrors;
/**
 * Disconnects a volume from an iSCSI connection and then detaches the volume from the
 * specified gateway. Detaching and attaching a volume enables you to recover your data from
 * one gateway to a different gateway without creating a snapshot. It also makes it easier to
 * move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2
 * instance. This operation is only supported in the volume gateway type.
 */
export const detachVolume: API.OperationMethod<
  DetachVolumeInput,
  DetachVolumeOutput,
  DetachVolumeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetachVolumeInput,
  output: DetachVolumeOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetachVolume",
}));

export type DisableGatewayError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Disables a tape gateway when the gateway is no longer functioning. For example, if your
 * gateway VM is damaged, you can disable the gateway so you can recover virtual tapes.
 *
 * Use this operation for a tape gateway that is not reachable or not functioning. This
 * operation is only supported in the tape gateway type.
 *
 * After a gateway is disabled, it cannot be enabled.
 */
export const disableGateway: API.OperationMethod<
  DisableGatewayInput,
  DisableGatewayOutput,
  DisableGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableGatewayInput,
  output: DisableGatewayOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableGateway",
}));

export type DisassociateFileSystemError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Disassociates an Amazon FSx file system from the specified gateway. After the
 * disassociation process finishes, the gateway can no longer access the Amazon FSx
 * file system. This operation is only supported in the FSx File Gateway type.
 */
export const disassociateFileSystem: API.OperationMethod<
  DisassociateFileSystemInput,
  DisassociateFileSystemOutput,
  DisassociateFileSystemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateFileSystemInput,
  output: DisassociateFileSystemOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateFileSystem",
}));

export type EvictFilesFailingUploadError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Starts a process that cleans the specified file share's cache of file entries that are
 * failing upload to Amazon S3. This API operation reports success if the request is
 * received with valid arguments, and there are no other cache clean operations currently
 * in-progress for the specified file share. After a successful request, the cache clean
 * operation occurs asynchronously and reports progress using CloudWatch logs and
 * notifications.
 *
 * If `ForceRemove` is set to `True`, the cache clean operation
 * will delete file data from the gateway which might otherwise be recoverable. We
 * recommend using this operation only after all other methods to clear files failing
 * upload have been exhausted, and if your business need outweighs the potential data
 * loss.
 */
export const evictFilesFailingUpload: API.OperationMethod<
  EvictFilesFailingUploadInput,
  EvictFilesFailingUploadOutput,
  EvictFilesFailingUploadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EvictFilesFailingUploadInput,
  output: EvictFilesFailingUploadOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EvictFilesFailingUpload",
}));

export type JoinDomainError = InternalServerError | InvalidGatewayRequestException | CommonErrors;
/**
 * Adds a file gateway to an Active Directory domain. This operation is only supported for
 * file gateways that support the SMB file protocol.
 *
 * Joining a domain creates an Active Directory computer account in the default
 * organizational unit, using the gateway's **Gateway ID** as
 * the account name (for example, SGW-1234ADE). If your Active Directory environment
 * requires that you pre-stage accounts to facilitate the join domain process, you will
 * need to create this account ahead of time.
 *
 * To create the gateway's computer account in an organizational unit other than the
 * default, you must specify the organizational unit when joining the domain.
 */
export const joinDomain: API.OperationMethod<
  JoinDomainInput,
  JoinDomainOutput,
  JoinDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: JoinDomainInput,
  output: JoinDomainOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "JoinDomain",
}));

export type ListAutomaticTapeCreationPoliciesError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Lists the automatic tape creation policies for a gateway. If there are no automatic tape
 * creation policies for the gateway, it returns an empty list.
 *
 * This operation is only supported for tape gateways.
 */
export const listAutomaticTapeCreationPolicies: API.OperationMethod<
  ListAutomaticTapeCreationPoliciesInput,
  ListAutomaticTapeCreationPoliciesOutput,
  ListAutomaticTapeCreationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListAutomaticTapeCreationPoliciesInput,
  output: ListAutomaticTapeCreationPoliciesOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAutomaticTapeCreationPolicies",
}));

export type ListCacheReportsError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns a list of existing cache reports for all file shares associated with your
 * Amazon Web Services account. This list includes all information provided by the
 * `DescribeCacheReport` action, such as report name, status, completion
 * progress, start time, end time, filters, and tags.
 */
export const listCacheReports: API.PaginatedOperationMethod<
  ListCacheReportsInput,
  ListCacheReportsOutput,
  ListCacheReportsError,
  Credentials | HttpClient.HttpClient,
  CacheReportInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCacheReportsInput,
  output: ListCacheReportsOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCacheReports",
  pagination: { inputToken: "Marker", outputToken: "Marker", items: "CacheReportList" } as const,
})) as any;

export type ListFileSharesError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Gets a list of the file shares for a specific S3 File Gateway, or the list of file
 * shares that belong to the calling Amazon Web Services account. This operation is only
 * supported for S3 File Gateways.
 */
export const listFileShares: API.PaginatedOperationMethod<
  ListFileSharesInput,
  ListFileSharesOutput,
  ListFileSharesError,
  Credentials | HttpClient.HttpClient,
  FileShareInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFileSharesInput,
  output: ListFileSharesOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFileShares",
  pagination: {
    inputToken: "Marker",
    outputToken: "NextMarker",
    items: "FileShareInfoList",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListFileSystemAssociationsError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Gets a list of `FileSystemAssociationSummary` objects. Each object contains a
 * summary of a file system association. This operation is only supported for FSx File
 * Gateways.
 */
export const listFileSystemAssociations: API.PaginatedOperationMethod<
  ListFileSystemAssociationsInput,
  ListFileSystemAssociationsOutput,
  ListFileSystemAssociationsError,
  Credentials | HttpClient.HttpClient,
  FileSystemAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFileSystemAssociationsInput,
  output: ListFileSystemAssociationsOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFileSystemAssociations",
  pagination: {
    inputToken: "Marker",
    outputToken: "NextMarker",
    items: "FileSystemAssociationSummaryList",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListGatewaysError = InternalServerError | InvalidGatewayRequestException | CommonErrors;
/**
 * Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region
 * specified in the request. The returned list is ordered by gateway Amazon Resource Name
 * (ARN).
 *
 * By default, the operation returns a maximum of 100 gateways. This operation supports
 * pagination that allows you to optionally reduce the number of gateways returned in a
 * response.
 *
 * If you have more gateways than are returned in a response (that is, the response returns
 * only a truncated list of your gateways), the response contains a marker that you can
 * specify in your next request to fetch the next page of gateways.
 */
export const listGateways: API.PaginatedOperationMethod<
  ListGatewaysInput,
  ListGatewaysOutput,
  ListGatewaysError,
  Credentials | HttpClient.HttpClient,
  GatewayInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListGatewaysInput,
  output: ListGatewaysOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGateways",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Gateways",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListLocalDisksError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Returns a list of the gateway's local disks. To specify which gateway to describe,
 * you use the Amazon Resource Name (ARN) of the gateway in the body of the request.
 *
 * The request returns a list of all disks, specifying which are configured as working
 * storage, cache storage, or stored volume or not configured at all. The response includes a
 * `DiskStatus` field. This field can have a value of present (the disk is
 * available to use), missing (the disk is no longer connected to the gateway), or mismatch
 * (the disk node is occupied by a disk that has incorrect metadata or the disk content is
 * corrupted).
 */
export const listLocalDisks: API.OperationMethod<
  ListLocalDisksInput,
  ListLocalDisksOutput,
  ListLocalDisksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListLocalDisksInput,
  output: ListLocalDisksOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLocalDisks",
}));

export type ListTagsForResourceError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Lists the tags that have been added to the specified resource. This operation is
 * supported in storage gateways of all types.
 */
export const listTagsForResource: API.PaginatedOperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTagsForResourceInput,
  output: ListTagsForResourceOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Tags",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListTapePoolsError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Lists custom tape pools. You specify custom tape pools to list by specifying one or more
 * custom tape pool Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN,
 * the operation lists all custom tape pools.
 *
 * This operation supports pagination. You can optionally specify the `Limit`
 * parameter in the body to limit the number of tape pools in the response. If the number of
 * tape pools returned in the response is truncated, the response includes a
 * `Marker` element that you can use in your subsequent request to retrieve the
 * next set of tape pools.
 */
export const listTapePools: API.PaginatedOperationMethod<
  ListTapePoolsInput,
  ListTapePoolsOutput,
  ListTapePoolsError,
  Credentials | HttpClient.HttpClient,
  PoolInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTapePoolsInput,
  output: ListTapePoolsOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTapePools",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "PoolInfos",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListTapesError = InternalServerError | InvalidGatewayRequestException | CommonErrors;
/**
 * Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf
 * (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names
 * (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both
 * your VTL and VTS.
 *
 * This operation supports pagination. By default, the operation returns a maximum of up to
 * 100 tapes. You can optionally specify the `Limit` parameter in the body to limit
 * the number of tapes in the response. If the number of tapes returned in the response is
 * truncated, the response includes a `Marker` element that you can use in your
 * subsequent request to retrieve the next set of tapes. This operation is only supported in
 * the tape gateway type.
 */
export const listTapes: API.PaginatedOperationMethod<
  ListTapesInput,
  ListTapesOutput,
  ListTapesError,
  Credentials | HttpClient.HttpClient,
  TapeInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTapesInput,
  output: ListTapesOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTapes",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "TapeInfos",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListVolumeInitiatorsError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Lists iSCSI initiators that are connected to a volume. You can use this operation to
 * determine whether a volume is being used or not. This operation is only supported in the
 * cached volume and stored volume gateway types.
 */
export const listVolumeInitiators: API.OperationMethod<
  ListVolumeInitiatorsInput,
  ListVolumeInitiatorsOutput,
  ListVolumeInitiatorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListVolumeInitiatorsInput,
  output: ListVolumeInitiatorsOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVolumeInitiators",
}));

export type ListVolumeRecoveryPointsError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Lists the recovery points for a specified gateway. This operation is only supported in
 * the cached volume gateway type.
 *
 * Each cache volume has one recovery point. A volume recovery point is a point in time at
 * which all data of the volume is consistent and from which you can create a snapshot or
 * clone a new cached volume from a source volume. To create a snapshot from a volume recovery
 * point use the CreateSnapshotFromVolumeRecoveryPoint operation.
 */
export const listVolumeRecoveryPoints: API.OperationMethod<
  ListVolumeRecoveryPointsInput,
  ListVolumeRecoveryPointsOutput,
  ListVolumeRecoveryPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListVolumeRecoveryPointsInput,
  output: ListVolumeRecoveryPointsOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVolumeRecoveryPoints",
}));

export type ListVolumesError = InternalServerError | InvalidGatewayRequestException | CommonErrors;
/**
 * Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The
 * response includes only the volume ARNs. If you want additional volume information, use the
 * DescribeStorediSCSIVolumes or the DescribeCachediSCSIVolumes API.
 *
 * The operation supports pagination. By default, the operation returns a maximum of up to
 * 100 volumes. You can optionally specify the `Limit` field in the body to limit
 * the number of volumes in the response. If the number of volumes returned in the response is
 * truncated, the response includes a Marker field. You can use this Marker value in your
 * subsequent request to retrieve the next set of volumes. This operation is only supported in
 * the cached volume and stored volume gateway types.
 */
export const listVolumes: API.PaginatedOperationMethod<
  ListVolumesInput,
  ListVolumesOutput,
  ListVolumesError,
  Credentials | HttpClient.HttpClient,
  VolumeInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListVolumesInput,
  output: ListVolumesOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVolumes",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "VolumeInfos",
    pageSize: "Limit",
  } as const,
})) as any;

export type NotifyWhenUploadedError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Sends you notification through Amazon EventBridge when all files written to your file
 * share have been uploaded to Amazon S3.
 *
 * Storage Gateway can send a notification through Amazon EventBridge when all
 * files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you
 * make a request for notification. When the upload is done, Storage Gateway sends you
 * notification through EventBridge. You can configure EventBridge to send the
 * notification through event targets such as Amazon SNS or Lambda
 * function. This operation is only supported for S3 File Gateways.
 *
 * For more information, see Getting
 * file upload notification in the Amazon S3 File Gateway User
 * Guide.
 */
export const notifyWhenUploaded: API.OperationMethod<
  NotifyWhenUploadedInput,
  NotifyWhenUploadedOutput,
  NotifyWhenUploadedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: NotifyWhenUploadedInput,
  output: NotifyWhenUploadedOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "NotifyWhenUploaded",
}));

export type RefreshCacheError = InternalServerError | InvalidGatewayRequestException | CommonErrors;
/**
 * Refreshes the cached inventory of objects for the specified file share. This operation
 * finds objects in the Amazon S3 bucket that were added, removed, or replaced since
 * the gateway last listed the bucket's contents and cached the results. This operation
 * does not import files into the S3 File Gateway cache storage. It only updates the cached
 * inventory to reflect changes in the inventory of the objects in the S3 bucket. This
 * operation is only supported in the S3 File Gateway types.
 *
 * You can subscribe to be notified through an Amazon CloudWatch event when your
 * `RefreshCache` operation completes. For more information, see Getting
 * notified about file operations in the Amazon S3 File Gateway User
 * Guide. This operation is Only supported for S3 File Gateways.
 *
 * When this API is called, it only initiates the refresh operation. When the API call
 * completes and returns a success code, it doesn't necessarily mean that the file
 * refresh has completed. You should use the refresh-complete notification to determine that
 * the operation has completed before you check for new files on the gateway file share. You
 * can subscribe to be notified through a CloudWatch event when your `RefreshCache`
 * operation completes.
 *
 * Throttle limit: This API is asynchronous, so the gateway will accept no more than two
 * refreshes at any time. We recommend using the refresh-complete CloudWatch event
 * notification before issuing additional requests. For more information, see Getting
 * notified about file operations in the Amazon S3 File Gateway User
 * Guide.
 *
 * - Wait at least 60 seconds between consecutive RefreshCache API requests.
 *
 * - If you invoke the RefreshCache API when two requests are already being
 * processed, any new request will cause an
 * `InvalidGatewayRequestException` error because too many requests
 * were sent to the server.
 *
 * The S3 bucket name does not need to be included when entering the list of folders in
 * the FolderList parameter.
 *
 * For more information, see Getting
 * notified about file operations in the Amazon S3 File Gateway User
 * Guide.
 */
export const refreshCache: API.OperationMethod<
  RefreshCacheInput,
  RefreshCacheOutput,
  RefreshCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RefreshCacheInput,
  output: RefreshCacheOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RefreshCache",
}));

export type RemoveTagsFromResourceError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Removes one or more tags from the specified resource. This operation is supported in
 * storage gateways of all types.
 */
export const removeTagsFromResource: API.OperationMethod<
  RemoveTagsFromResourceInput,
  RemoveTagsFromResourceOutput,
  RemoveTagsFromResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveTagsFromResourceInput,
  output: RemoveTagsFromResourceOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveTagsFromResource",
}));

export type ResetCacheError = InternalServerError | InvalidGatewayRequestException | CommonErrors;
/**
 * Resets all cache disks that have encountered an error and makes the disks available for
 * reconfiguration as cache storage. If your cache disk encounters an error, the gateway
 * prevents read and write operations on virtual tapes in the gateway. For example, an error
 * can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the
 * gateway loses its cache storage. At this point, you can reconfigure the disks as cache
 * disks. This operation is only supported in the cached volume and tape types.
 *
 * If the cache disk you are resetting contains data that has not been uploaded to
 * Amazon S3 yet, that data can be lost. After you reset cache disks, there will
 * be no configured cache disks left in the gateway, so you must configure at least one new
 * cache disk for your gateway to function properly.
 */
export const resetCache: API.OperationMethod<
  ResetCacheInput,
  ResetCacheOutput,
  ResetCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResetCacheInput,
  output: ResetCacheOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResetCache",
}));

export type RetrieveTapeArchiveError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway.
 * Virtual tapes archived in the VTS are not associated with any gateway. However after a tape
 * is retrieved, it is associated with a gateway, even though it is also listed in the VTS,
 * that is, archive. This operation is only supported in the tape gateway type.
 *
 * Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
 * another gateway. You must archive the tape again before you can retrieve it to another
 * gateway. This operation is only supported in the tape gateway type.
 */
export const retrieveTapeArchive: API.OperationMethod<
  RetrieveTapeArchiveInput,
  RetrieveTapeArchiveOutput,
  RetrieveTapeArchiveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RetrieveTapeArchiveInput,
  output: RetrieveTapeArchiveOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RetrieveTapeArchive",
}));

export type RetrieveTapeRecoveryPointError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Retrieves the recovery point for the specified virtual tape. This operation is only
 * supported in the tape gateway type.
 *
 * A recovery point is a point in time view of a virtual tape at which all the data on the
 * tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be
 * recovered to a new gateway.
 *
 * The virtual tape can be retrieved to only one gateway. The retrieved tape is
 * read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge
 * for retrieving recovery points.
 */
export const retrieveTapeRecoveryPoint: API.OperationMethod<
  RetrieveTapeRecoveryPointInput,
  RetrieveTapeRecoveryPointOutput,
  RetrieveTapeRecoveryPointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RetrieveTapeRecoveryPointInput,
  output: RetrieveTapeRecoveryPointOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RetrieveTapeRecoveryPoint",
}));

export type SetLocalConsolePasswordError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Sets the password for your VM local console. When you log in to the local console for
 * the first time, you log in to the VM with the default credentials. We recommend that you
 * set a new password. You don't need to know the default password to set a new
 * password.
 */
export const setLocalConsolePassword: API.OperationMethod<
  SetLocalConsolePasswordInput,
  SetLocalConsolePasswordOutput,
  SetLocalConsolePasswordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetLocalConsolePasswordInput,
  output: SetLocalConsolePasswordOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetLocalConsolePassword",
}));

export type SetSMBGuestPasswordError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Sets the password for the guest user `smbguest`. The `smbguest`
 * user is the user when the authentication method for the file share is set to
 * `GuestAccess`. This operation only supported for S3 File Gateways
 */
export const setSMBGuestPassword: API.OperationMethod<
  SetSMBGuestPasswordInput,
  SetSMBGuestPasswordOutput,
  SetSMBGuestPasswordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetSMBGuestPasswordInput,
  output: SetSMBGuestPasswordOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetSMBGuestPassword",
}));

export type ShutdownGatewayError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use
 * the Amazon Resource Name (ARN) of the gateway in the body of your request.
 *
 * This API action cannot be used to shut down S3 File Gateway or FSx File
 * Gateway.
 *
 * The operation shuts down the gateway service component running in the gateway's
 * virtual machine (VM) and not the host VM.
 *
 * If you want to shut down the VM, it is recommended that you first shut down the
 * gateway component in the VM to avoid unpredictable conditions.
 *
 * After the gateway is shutdown, you cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more information, see ActivateGateway.
 * Your applications cannot read from or write to the gateway's storage volumes, and
 * there are no snapshots taken.
 *
 * When you make a shutdown request, you will get a `200 OK` success response
 * immediately. However, it might take some time for the gateway to shut down. You can call
 * the DescribeGatewayInformation API to check the status. For more
 * information, see ActivateGateway.
 *
 * If do not intend to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges associated with the
 * gateway.
 */
export const shutdownGateway: API.OperationMethod<
  ShutdownGatewayInput,
  ShutdownGatewayOutput,
  ShutdownGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ShutdownGatewayInput,
  output: ShutdownGatewayOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ShutdownGateway",
}));

export type StartAvailabilityMonitorTestError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Start a test that verifies that the specified gateway is configured for High
 * Availability monitoring in your host environment. This request only initiates the test and
 * that a successful response only indicates that the test was started. It doesn't
 * indicate that the test passed. For the status of the test, invoke the
 * `DescribeAvailabilityMonitorTest` API.
 *
 * Starting this test will cause your gateway to go offline for a brief period.
 */
export const startAvailabilityMonitorTest: API.OperationMethod<
  StartAvailabilityMonitorTestInput,
  StartAvailabilityMonitorTestOutput,
  StartAvailabilityMonitorTestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartAvailabilityMonitorTestInput,
  output: StartAvailabilityMonitorTestOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartAvailabilityMonitorTest",
}));

export type StartCacheReportError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Starts generating a report of the file metadata currently cached by an S3 File Gateway for a specific file share. You can use this report to identify and resolve
 * issues if you have files failing upload from your gateway to Amazon S3. The report
 * is a CSV file containing a list of files which match the set of filter parameters you
 * specify in the request.
 *
 * The **Files Failing Upload** flag is reset every 24
 * hours and during gateway reboot. If this report captures the files after the reset, but
 * before they become flagged again, they will not be reported as **Files Failing Upload**.
 *
 * The following requirements must be met to successfully generate a cache report:
 *
 * - You must have `s3:PutObject` and `s3:AbortMultipartUpload`
 * permissions for the Amazon S3 bucket where you want to store the cache
 * report.
 *
 * - No other cache reports can currently be in-progress for the specified file
 * share.
 *
 * - There must be fewer than 10 existing cache reports for the specified file
 * share.
 *
 * - The gateway must be online and connected to Amazon Web Services.
 *
 * - The root disk must have at least 20GB of free space when report generation
 * starts.
 *
 * - You must specify at least one value for `InclusionFilters` or
 * `ExclusionFilters` in the request.
 */
export const startCacheReport: API.OperationMethod<
  StartCacheReportInput,
  StartCacheReportOutput,
  StartCacheReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartCacheReportInput,
  output: StartCacheReportOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartCacheReport",
}));

export type StartGatewayError = InternalServerError | InvalidGatewayRequestException | CommonErrors;
/**
 * Starts a gateway that you previously shut down (see ShutdownGateway).
 * After the gateway starts, you can then make other API calls, your applications can read
 * from or write to the gateway's storage volumes and you will be able to take snapshot
 * backups.
 *
 * When you make a request, you will get a 200 OK success response immediately. However,
 * it might take some time for the gateway to be ready. You should call DescribeGatewayInformation and check the status before making any
 * additional API calls. For more information, see ActivateGateway.
 *
 * To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in
 * your request.
 */
export const startGateway: API.OperationMethod<
  StartGatewayInput,
  StartGatewayOutput,
  StartGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartGatewayInput,
  output: StartGatewayOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartGateway",
}));

export type UpdateAutomaticTapeCreationPolicyError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Updates the automatic tape creation policy of a gateway. Use this to update the policy
 * with a new set of automatic tape creation rules. This is only supported for tape
 * gateways.
 *
 * By default, there is no automatic tape creation policy.
 *
 * A gateway can have only one automatic tape creation policy.
 */
export const updateAutomaticTapeCreationPolicy: API.OperationMethod<
  UpdateAutomaticTapeCreationPolicyInput,
  UpdateAutomaticTapeCreationPolicyOutput,
  UpdateAutomaticTapeCreationPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAutomaticTapeCreationPolicyInput,
  output: UpdateAutomaticTapeCreationPolicyOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAutomaticTapeCreationPolicy",
}));

export type UpdateBandwidthRateLimitError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Updates the bandwidth rate limits of a gateway. You can update both the upload and
 * download bandwidth rate limit or specify only one of the two. If you don't set a
 * bandwidth rate limit, the existing rate limit remains. This operation is supported only for
 * the stored volume, cached volume, and tape gateway types. To update bandwidth rate limits
 * for S3 file gateways, use UpdateBandwidthRateLimitSchedule.
 *
 * By default, a gateway's bandwidth rate limits are not set. If you don't set
 * any limit, the gateway does not have any limitations on its bandwidth usage and could
 * potentially use the maximum available bandwidth.
 *
 * To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in
 * your request.
 */
export const updateBandwidthRateLimit: API.OperationMethod<
  UpdateBandwidthRateLimitInput,
  UpdateBandwidthRateLimitOutput,
  UpdateBandwidthRateLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBandwidthRateLimitInput,
  output: UpdateBandwidthRateLimitOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBandwidthRateLimit",
}));

export type UpdateBandwidthRateLimitScheduleError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways
 * do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in
 * effect. Use this to initiate or update a gateway's bandwidth rate limit schedule. This
 * operation is supported for volume, tape, and S3 file gateways. S3 file gateways support
 * bandwidth rate limits for upload only. FSx file gateways do not support bandwidth rate
 * limits.
 */
export const updateBandwidthRateLimitSchedule: API.OperationMethod<
  UpdateBandwidthRateLimitScheduleInput,
  UpdateBandwidthRateLimitScheduleOutput,
  UpdateBandwidthRateLimitScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBandwidthRateLimitScheduleInput,
  output: UpdateBandwidthRateLimitScheduleOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBandwidthRateLimitSchedule",
}));

export type UpdateChapCredentialsError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a
 * specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for
 * added security, you might use it. This operation is supported in the volume and tape
 * gateway types.
 *
 * When you update CHAP credentials, all existing connections on the target are closed
 * and initiators must reconnect with the new credentials.
 */
export const updateChapCredentials: API.OperationMethod<
  UpdateChapCredentialsInput,
  UpdateChapCredentialsOutput,
  UpdateChapCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateChapCredentialsInput,
  output: UpdateChapCredentialsOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateChapCredentials",
}));

export type UpdateFileSystemAssociationError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Updates a file system association. This operation is only supported in the FSx File
 * Gateways.
 */
export const updateFileSystemAssociation: API.OperationMethod<
  UpdateFileSystemAssociationInput,
  UpdateFileSystemAssociationOutput,
  UpdateFileSystemAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateFileSystemAssociationInput,
  output: UpdateFileSystemAssociationOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFileSystemAssociation",
}));

export type UpdateGatewayInformationError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Updates a gateway's metadata, which includes the gateway's name, time zone,
 * and metadata cache size. To specify which gateway to update, use the Amazon Resource Name
 * (ARN) of the gateway in your request.
 *
 * For gateways activated after September 2, 2015, the gateway's ARN contains the
 * gateway ID rather than the gateway name. However, changing the name of the gateway has
 * no effect on the gateway's ARN.
 */
export const updateGatewayInformation: API.OperationMethod<
  UpdateGatewayInformationInput,
  UpdateGatewayInformationOutput,
  UpdateGatewayInformationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateGatewayInformationInput,
  output: UpdateGatewayInformationOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGatewayInformation",
}));

export type UpdateGatewaySoftwareNowError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Updates the gateway virtual machine (VM) software. The request immediately triggers the
 * software update.
 *
 * When you make this request, you get a `200 OK` success response
 * immediately. However, it might take some time for the update to complete. You can call
 * DescribeGatewayInformation to verify the gateway is in the
 * `STATE_RUNNING` state.
 *
 * A software update forces a system restart of your gateway. You can minimize the
 * chance of any disruption to your applications by increasing your iSCSI Initiators'
 * timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and
 * Linux, see Customizing your Windows iSCSI settings and Customizing your Linux iSCSI settings, respectively.
 */
export const updateGatewaySoftwareNow: API.OperationMethod<
  UpdateGatewaySoftwareNowInput,
  UpdateGatewaySoftwareNowOutput,
  UpdateGatewaySoftwareNowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateGatewaySoftwareNowInput,
  output: UpdateGatewaySoftwareNowOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGatewaySoftwareNow",
}));

export type UpdateMaintenanceStartTimeError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Updates a gateway's maintenance window schedule, with settings for monthly or
 * weekly cadence, specific day and time to begin maintenance, and which types of updates to
 * apply. Time configuration uses the gateway's time zone. You can pass values for a complete
 * maintenance schedule, or update policy, or both. Previous values will persist for whichever
 * setting you choose not to modify. If an incomplete or invalid maintenance schedule is
 * passed, the entire request will be rejected with an error and no changes will occur.
 *
 * A complete maintenance schedule must include values for *both*
 * `MinuteOfHour` and `HourOfDay`, and *either*
 * `DayOfMonth`
 * *or*
 * `DayOfWeek`.
 *
 * We recommend keeping maintenance updates turned on, except in specific use cases
 * where the brief disruptions caused by updating the gateway could critically impact your
 * deployment.
 */
export const updateMaintenanceStartTime: API.OperationMethod<
  UpdateMaintenanceStartTimeInput,
  UpdateMaintenanceStartTimeOutput,
  UpdateMaintenanceStartTimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMaintenanceStartTimeInput,
  output: UpdateMaintenanceStartTimeOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMaintenanceStartTime",
}));

export type UpdateNFSFileShareError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Updates a Network File System (NFS) file share. This operation is only supported in S3
 * File Gateways.
 *
 * To leave a file share field unchanged, set the corresponding input field to
 * null.
 *
 * Updates the following file share settings:
 *
 * - Default storage class for your S3 bucket
 *
 * - Metadata defaults for your S3 bucket
 *
 * - Allowed NFS clients for your file share
 *
 * - Squash settings
 *
 * - Write status of your file share
 */
export const updateNFSFileShare: API.OperationMethod<
  UpdateNFSFileShareInput,
  UpdateNFSFileShareOutput,
  UpdateNFSFileShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateNFSFileShareInput,
  output: UpdateNFSFileShareOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateNFSFileShare",
}));

export type UpdateSMBFileShareError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Updates a Server Message Block (SMB) file share. This operation is only supported for S3
 * File Gateways.
 *
 * To leave a file share field unchanged, set the corresponding input field to
 * null.
 *
 * File gateways require Security Token Service (Amazon Web Services STS) to be
 * activated to enable you to create a file share. Make sure that Amazon Web Services STS
 * is activated in the Amazon Web Services Region you are creating your file gateway in. If
 * Amazon Web Services STS is not activated in this Amazon Web Services Region, activate
 * it. For information about how to activate Amazon Web Services STS, see Activating and
 * deactivating Amazon Web Services STS in an Amazon Web Services Region in the
 * *Identity and Access Management User Guide*.
 *
 * File gateways don't support creating hard or symbolic links on a file
 * share.
 */
export const updateSMBFileShare: API.OperationMethod<
  UpdateSMBFileShareInput,
  UpdateSMBFileShareOutput,
  UpdateSMBFileShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSMBFileShareInput,
  output: UpdateSMBFileShareOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSMBFileShare",
}));

export type UpdateSMBFileShareVisibilityError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Controls whether the shares on an S3 File Gateway are visible in a net view or browse
 * list. The operation is only supported for S3 File Gateways.
 */
export const updateSMBFileShareVisibility: API.OperationMethod<
  UpdateSMBFileShareVisibilityInput,
  UpdateSMBFileShareVisibilityOutput,
  UpdateSMBFileShareVisibilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSMBFileShareVisibilityInput,
  output: UpdateSMBFileShareVisibilityOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSMBFileShareVisibility",
}));

export type UpdateSMBLocalGroupsError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Updates the list of Active Directory users and groups that have special permissions for
 * SMB file shares on the gateway.
 */
export const updateSMBLocalGroups: API.OperationMethod<
  UpdateSMBLocalGroupsInput,
  UpdateSMBLocalGroupsOutput,
  UpdateSMBLocalGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSMBLocalGroupsInput,
  output: UpdateSMBLocalGroupsOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSMBLocalGroups",
}));

export type UpdateSMBSecurityStrategyError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Updates the SMB security strategy level for an Amazon S3 file gateway. This
 * action is only supported for Amazon S3 file gateways.
 *
 * For information about configuring this setting using the Amazon Web Services console,
 * see Setting a security level for your gateway in the Amazon S3
 * File Gateway User Guide.
 *
 * A higher security strategy level can affect performance of the gateway.
 */
export const updateSMBSecurityStrategy: API.OperationMethod<
  UpdateSMBSecurityStrategyInput,
  UpdateSMBSecurityStrategyOutput,
  UpdateSMBSecurityStrategyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSMBSecurityStrategyInput,
  output: UpdateSMBSecurityStrategyOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSMBSecurityStrategy",
}));

export type UpdateSnapshotScheduleError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Updates a snapshot schedule configured for a gateway volume. This operation is only
 * supported in the cached volume and stored volume gateway types.
 *
 * The default snapshot schedule for volume is once every 24 hours, starting at the
 * creation time of the volume. You can use this API to change the snapshot schedule
 * configured for the volume.
 *
 * In the request you must identify the gateway volume whose snapshot schedule you want to
 * update, and the schedule information, including when you want the snapshot to begin on a
 * day and the frequency (in hours) of snapshots.
 */
export const updateSnapshotSchedule: API.OperationMethod<
  UpdateSnapshotScheduleInput,
  UpdateSnapshotScheduleOutput,
  UpdateSnapshotScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSnapshotScheduleInput,
  output: UpdateSnapshotScheduleOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSnapshotSchedule",
}));

export type UpdateVTLDeviceTypeError =
  | InternalServerError
  | InvalidGatewayRequestException
  | CommonErrors;
/**
 * Updates the type of medium changer in a tape gateway. When you activate a tape gateway,
 * you select a medium changer type for the tape gateway. This operation enables you to select
 * a different type of medium changer after a tape gateway is activated. This operation is
 * only supported in the tape gateway type.
 */
export const updateVTLDeviceType: API.OperationMethod<
  UpdateVTLDeviceTypeInput,
  UpdateVTLDeviceTypeOutput,
  UpdateVTLDeviceTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateVTLDeviceTypeInput,
  output: UpdateVTLDeviceTypeOutput,
  errors: [InternalServerError, InvalidGatewayRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVTLDeviceType",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(Tag);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ActivationKey: S.String,
          GatewayName: S.String,
          GatewayTimezone: S.String,
          GatewayRegion: S.String,
          GatewayType: S.optional(S.String),
          TapeDriveType: S.optional(S.String),
          MediumChangerType: S.optional(S.String),
          Tags: S.optional(Tags),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ActivateGatewayInput" });
    case 3:
      return S.suspend(() => S.Struct({ GatewayARN: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "ActivateGatewayOutput",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String, DiskIds: DiskIds }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AddCacheInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: Tags }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AddTagsToResourceInput" });
    case 7:
      return S.suspend(() => S.Struct({ ResourceARN: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "AddTagsToResourceOutput",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String, DiskIds: DiskIds }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AddUploadBufferInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String, DiskIds: DiskIds }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AddWorkingStorageInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TapeARN: S.String,
          PoolId: S.String,
          BypassGovernanceRetention: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "AssignTapePoolInput" });
    case 3:
      return S.suspend(() => S.Struct({ TapeARN: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "AssignTapePoolOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ CacheStaleTimeoutInSeconds: S.optional(S.Number) }),
      ).annotate({ identifier: "CacheAttributes" });
    case 5:
      return S.suspend(() => S.Struct({ IpAddresses: S.optional(IpAddressList) })).annotate({
        identifier: "EndpointNetworkConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          Password: SensitiveString,
          ClientToken: S.String,
          GatewayARN: S.String,
          LocationARN: S.String,
          Tags: S.optional(Tags),
          AuditDestinationARN: S.optional(S.String),
          CacheAttributes: S.optional(CacheAttributes),
          EndpointNetworkConfiguration: S.optional(EndpointNetworkConfiguration),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "AssociateFileSystemInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ FileSystemAssociationARN: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "AssociateFileSystemOutput",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.String,
          TargetName: S.optional(S.String),
          VolumeARN: S.String,
          NetworkInterfaceId: S.String,
          DiskId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "AttachVolumeInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ VolumeARN: S.optional(S.String), TargetARN: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "AttachVolumeOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String, TapeARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CancelArchivalInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ CacheReportARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CancelCacheReportInput" });
    case 4:
      return S.suspend(() => S.Struct({ CacheReportARN: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CancelCacheReportOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String, TapeARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CancelRetrievalInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.String,
          VolumeSizeInBytes: S.Number,
          SnapshotId: S.optional(S.String),
          TargetName: S.String,
          SourceVolumeARN: S.optional(S.String),
          NetworkInterfaceId: S.String,
          ClientToken: S.String,
          KMSEncrypted: S.optional(S.Boolean),
          KMSKey: S.optional(S.String),
          Tags: S.optional(Tags),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateCachediSCSIVolumeInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ VolumeARN: S.optional(S.String), TargetARN: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "CreateCachediSCSIVolumeOutput",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FileMode: S.optional(S.String),
          DirectoryMode: S.optional(S.String),
          GroupId: S.optional(S.Number),
          OwnerId: S.optional(S.Number),
        }),
      ).annotate({ identifier: "NFSFileShareDefaults" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.String,
          NFSFileShareDefaults: S.optional(NFSFileShareDefaults),
          GatewayARN: S.String,
          EncryptionType: S.optional(EncryptionType),
          KMSEncrypted: S.optional(S.Boolean),
          KMSKey: S.optional(S.String),
          Role: S.String,
          LocationARN: S.String,
          DefaultStorageClass: S.optional(S.String),
          ObjectACL: S.optional(ObjectACL),
          ClientList: S.optional(FileShareClientList),
          Squash: S.optional(S.String),
          ReadOnly: S.optional(S.Boolean),
          GuessMIMETypeEnabled: S.optional(S.Boolean),
          RequesterPays: S.optional(S.Boolean),
          Tags: S.optional(Tags),
          FileShareName: S.optional(S.String),
          CacheAttributes: S.optional(CacheAttributes),
          NotificationPolicy: S.optional(S.String),
          VPCEndpointDNSName: S.optional(S.String),
          BucketRegion: S.optional(S.String),
          AuditDestinationARN: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateNFSFileShareInput" });
    case 2:
      return S.suspend(() => S.Struct({ FileShareARN: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateNFSFileShareOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.String,
          GatewayARN: S.String,
          EncryptionType: S.optional(EncryptionType),
          KMSEncrypted: S.optional(S.Boolean),
          KMSKey: S.optional(S.String),
          Role: S.String,
          LocationARN: S.String,
          DefaultStorageClass: S.optional(S.String),
          ObjectACL: S.optional(ObjectACL),
          ReadOnly: S.optional(S.Boolean),
          GuessMIMETypeEnabled: S.optional(S.Boolean),
          RequesterPays: S.optional(S.Boolean),
          SMBACLEnabled: S.optional(S.Boolean),
          AccessBasedEnumeration: S.optional(S.Boolean),
          AdminUserList: S.optional(UserList),
          ValidUserList: S.optional(UserList),
          InvalidUserList: S.optional(UserList),
          AuditDestinationARN: S.optional(S.String),
          Authentication: S.optional(S.String),
          CaseSensitivity: S.optional(CaseSensitivity),
          Tags: S.optional(Tags),
          FileShareName: S.optional(S.String),
          CacheAttributes: S.optional(CacheAttributes),
          NotificationPolicy: S.optional(S.String),
          VPCEndpointDNSName: S.optional(S.String),
          BucketRegion: S.optional(S.String),
          OplocksEnabled: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateSMBFileShareInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          VolumeARN: S.String,
          SnapshotDescription: S.String,
          Tags: S.optional(Tags),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateSnapshotInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ VolumeARN: S.optional(S.String), SnapshotId: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "CreateSnapshotOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          VolumeARN: S.String,
          SnapshotDescription: S.String,
          Tags: S.optional(Tags),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateSnapshotFromVolumeRecoveryPointInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SnapshotId: S.optional(S.String),
          VolumeARN: S.optional(S.String),
          VolumeRecoveryPointTime: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateSnapshotFromVolumeRecoveryPointOutput",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.String,
          DiskId: S.String,
          SnapshotId: S.optional(S.String),
          PreserveExistingData: S.Boolean,
          TargetName: S.String,
          NetworkInterfaceId: S.String,
          KMSEncrypted: S.optional(S.Boolean),
          KMSKey: S.optional(S.String),
          Tags: S.optional(Tags),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateStorediSCSIVolumeInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          VolumeARN: S.optional(S.String),
          VolumeSizeInBytes: S.optional(S.Number),
          TargetARN: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateStorediSCSIVolumeOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PoolName: S.String,
          StorageClass: TapeStorageClass,
          RetentionLockType: S.optional(RetentionLockType),
          RetentionLockTimeInDays: S.optional(S.Number),
          Tags: S.optional(Tags),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTapePoolInput" });
    case 3:
      return S.suspend(() => S.Struct({ PoolARN: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateTapePoolOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.String,
          TapeSizeInBytes: S.Number,
          ClientToken: S.String,
          NumTapesToCreate: S.Number,
          TapeBarcodePrefix: S.String,
          KMSEncrypted: S.optional(S.Boolean),
          KMSKey: S.optional(S.String),
          PoolId: S.optional(S.String),
          Worm: S.optional(S.Boolean),
          Tags: S.optional(Tags),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTapesInput" });
    case 5:
      return S.suspend(() => S.Struct({ TapeARNs: S.optional(TapeARNs) }).pipe(ns)).annotate({
        identifier: "CreateTapesOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.String,
          TapeSizeInBytes: S.Number,
          TapeBarcode: S.String,
          KMSEncrypted: S.optional(S.Boolean),
          KMSKey: S.optional(S.String),
          PoolId: S.optional(S.String),
          Worm: S.optional(S.Boolean),
          Tags: S.optional(Tags),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateTapeWithBarcodeInput",
      });
    case 7:
      return S.suspend(() => S.Struct({ TapeARN: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateTapeWithBarcodeOutput",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAutomaticTapeCreationPolicyInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ GatewayARN: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "DeleteAutomaticTapeCreationPolicyOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String, BandwidthType: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteBandwidthRateLimitInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ CacheReportARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteCacheReportInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ TargetARN: S.String, InitiatorName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteChapCredentialsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ TargetARN: S.optional(S.String), InitiatorName: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DeleteChapCredentialsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ FileShareARN: S.String, ForceDelete: S.optional(S.Boolean) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteFileShareInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteGatewayInput" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ VolumeARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSnapshotScheduleInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ VolumeARN: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "DeleteSnapshotScheduleOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.String,
          TapeARN: S.String,
          BypassGovernanceRetention: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteTapeInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ TapeARN: S.String, BypassGovernanceRetention: S.optional(S.Boolean) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTapeArchiveInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ PoolARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTapePoolInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ VolumeARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteVolumeInput" });
    case 6:
      return S.suspend(() => S.Struct({ VolumeARN: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "DeleteVolumeOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAvailabilityMonitorTestInput",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          Status: S.optional(AvailabilityMonitorTestStatus),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeAvailabilityMonitorTestOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeBandwidthRateLimitInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          AverageUploadRateLimitInBitsPerSec: S.optional(S.Number),
          AverageDownloadRateLimitInBitsPerSec: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeBandwidthRateLimitOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeBandwidthRateLimitScheduleInput",
      });
    case 4:
      return S.Array(S.Number);
    case 5:
      return S.suspend(() =>
        S.Struct({
          StartHourOfDay: S.Number,
          StartMinuteOfHour: S.Number,
          EndHourOfDay: S.Number,
          EndMinuteOfHour: S.Number,
          DaysOfWeek: DaysOfWeek,
          AverageUploadRateLimitInBitsPerSec: S.optional(S.Number),
          AverageDownloadRateLimitInBitsPerSec: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "BandwidthRateLimitInterval",
      });
    case 6:
      return S.Array(BandwidthRateLimitInterval);
    case 7:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          BandwidthRateLimitIntervals: S.optional(BandwidthRateLimitIntervals),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeBandwidthRateLimitScheduleOutput",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeCacheInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          DiskIds: S.optional(DiskIds),
          CacheAllocatedInBytes: S.optional(S.Number),
          CacheUsedPercentage: S.optional(S.Number),
          CacheDirtyPercentage: S.optional(S.Number),
          CacheHitPercentage: S.optional(S.Number),
          CacheMissPercentage: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeCacheOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ VolumeARNs: VolumeARNs }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeCachediSCSIVolumesInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TargetARN: S.optional(S.String),
          NetworkInterfaceId: S.optional(S.String),
          NetworkInterfacePort: S.optional(S.Number),
          LunNumber: S.optional(S.Number),
          ChapEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "VolumeiSCSIAttributes" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          VolumeARN: S.optional(S.String),
          VolumeId: S.optional(S.String),
          VolumeType: S.optional(S.String),
          VolumeStatus: S.optional(S.String),
          VolumeAttachmentStatus: S.optional(S.String),
          VolumeSizeInBytes: S.optional(S.Number),
          VolumeProgress: S.optional(S.Number),
          SourceSnapshotId: S.optional(S.String),
          VolumeiSCSIAttributes: S.optional(VolumeiSCSIAttributes),
          CreatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          VolumeUsedInBytes: S.optional(S.Number),
          KMSKey: S.optional(S.String),
          TargetName: S.optional(S.String),
        }),
      ).annotate({ identifier: "CachediSCSIVolume" });
    case 5:
      return S.Array(CachediSCSIVolume);
    case 6:
      return S.suspend(() =>
        S.Struct({ CachediSCSIVolumes: S.optional(CachediSCSIVolumes) }).pipe(ns),
      ).annotate({
        identifier: "DescribeCachediSCSIVolumesOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ CacheReportARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeCacheReportInput" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Name: CacheReportFilterName, Values: CacheReportFilterValues }),
      ).annotate({ identifier: "CacheReportFilter" });
    case 1:
      return S.Array(CacheReportFilter);
    case 2:
      return S.suspend(() =>
        S.Struct({
          CacheReportARN: S.optional(S.String),
          CacheReportStatus: S.optional(CacheReportStatus),
          ReportCompletionPercent: S.optional(S.Number),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Role: S.optional(S.String),
          FileShareARN: S.optional(S.String),
          LocationARN: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InclusionFilters: S.optional(CacheReportFilterList),
          ExclusionFilters: S.optional(CacheReportFilterList),
          ReportName: S.optional(S.String),
          Tags: S.optional(Tags),
        }),
      ).annotate({ identifier: "CacheReportInfo" });
    case 3:
      return S.suspend(() =>
        S.Struct({ CacheReportInfo: S.optional(CacheReportInfo) }).pipe(ns),
      ).annotate({
        identifier: "DescribeCacheReportOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ TargetARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeChapCredentialsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TargetARN: S.optional(S.String),
          SecretToAuthenticateInitiator: S.optional(SensitiveString),
          InitiatorName: S.optional(S.String),
          SecretToAuthenticateTarget: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ChapInfo" });
    case 6:
      return S.Array(ChapInfo);
    case 7:
      return S.suspend(() =>
        S.Struct({ ChapCredentials: S.optional(ChapCredentials) }).pipe(ns),
      ).annotate({
        identifier: "DescribeChapCredentialsOutput",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ FileSystemAssociationARNList: FileSystemAssociationARNList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeFileSystemAssociationsInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ ErrorCode: S.optional(S.String) })).annotate({
        identifier: "FileSystemAssociationStatusDetail",
      });
    case 2:
      return S.Array(FileSystemAssociationStatusDetail);
    case 3:
      return S.suspend(() =>
        S.Struct({
          FileSystemAssociationARN: S.optional(S.String),
          LocationARN: S.optional(S.String),
          FileSystemAssociationStatus: S.optional(S.String),
          AuditDestinationARN: S.optional(S.String),
          GatewayARN: S.optional(S.String),
          Tags: S.optional(Tags),
          CacheAttributes: S.optional(CacheAttributes),
          EndpointNetworkConfiguration: S.optional(EndpointNetworkConfiguration),
          FileSystemAssociationStatusDetails: S.optional(FileSystemAssociationStatusDetails),
        }),
      ).annotate({
        identifier: "FileSystemAssociationInfo",
      });
    case 4:
      return S.Array(FileSystemAssociationInfo);
    case 5:
      return S.suspend(() =>
        S.Struct({ FileSystemAssociationInfoList: S.optional(FileSystemAssociationInfoList) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "DescribeFileSystemAssociationsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeGatewayInformationInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Ipv4Address: S.optional(S.String),
          MacAddress: S.optional(S.String),
          Ipv6Address: S.optional(S.String),
        }),
      ).annotate({ identifier: "NetworkInterface" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(NetworkInterface);
    case 1:
      return S.Array(GatewayCapacity);
    case 2:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          GatewayId: S.optional(S.String),
          GatewayName: S.optional(S.String),
          GatewayTimezone: S.optional(S.String),
          GatewayState: S.optional(S.String),
          GatewayNetworkInterfaces: S.optional(GatewayNetworkInterfaces),
          GatewayType: S.optional(S.String),
          NextUpdateAvailabilityDate: S.optional(S.String),
          LastSoftwareUpdate: S.optional(S.String),
          Ec2InstanceId: S.optional(S.String),
          Ec2InstanceRegion: S.optional(S.String),
          Tags: S.optional(Tags),
          VPCEndpoint: S.optional(S.String),
          CloudWatchLogGroupARN: S.optional(S.String),
          HostEnvironment: S.optional(HostEnvironment),
          EndpointType: S.optional(S.String),
          SoftwareUpdatesEndDate: S.optional(S.String),
          DeprecationDate: S.optional(S.String),
          GatewayCapacity: S.optional(GatewayCapacity),
          SupportedGatewayCapacities: S.optional(SupportedGatewayCapacities),
          HostEnvironmentId: S.optional(S.String),
          SoftwareVersion: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeGatewayInformationOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeMaintenanceStartTimeInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ AutomaticUpdatePolicy: S.optional(AutomaticUpdatePolicy) }),
      ).annotate({
        identifier: "SoftwareUpdatePreferences",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          HourOfDay: S.optional(S.Number),
          MinuteOfHour: S.optional(S.Number),
          DayOfWeek: S.optional(S.Number),
          DayOfMonth: S.optional(S.Number),
          Timezone: S.optional(S.String),
          SoftwareUpdatePreferences: S.optional(SoftwareUpdatePreferences),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeMaintenanceStartTimeOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ FileShareARNList: FileShareARNList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeNFSFileSharesInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          NFSFileShareDefaults: S.optional(NFSFileShareDefaults),
          FileShareARN: S.optional(S.String),
          FileShareId: S.optional(S.String),
          FileShareStatus: S.optional(S.String),
          GatewayARN: S.optional(S.String),
          EncryptionType: S.optional(EncryptionType),
          KMSEncrypted: S.optional(S.Boolean),
          KMSKey: S.optional(S.String),
          Path: S.optional(S.String),
          Role: S.optional(S.String),
          LocationARN: S.optional(S.String),
          DefaultStorageClass: S.optional(S.String),
          ObjectACL: S.optional(ObjectACL),
          ClientList: S.optional(FileShareClientList),
          Squash: S.optional(S.String),
          ReadOnly: S.optional(S.Boolean),
          GuessMIMETypeEnabled: S.optional(S.Boolean),
          RequesterPays: S.optional(S.Boolean),
          Tags: S.optional(Tags),
          FileShareName: S.optional(S.String),
          CacheAttributes: S.optional(CacheAttributes),
          NotificationPolicy: S.optional(S.String),
          VPCEndpointDNSName: S.optional(S.String),
          BucketRegion: S.optional(S.String),
          AuditDestinationARN: S.optional(S.String),
        }),
      ).annotate({ identifier: "NFSFileShareInfo" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(NFSFileShareInfo);
    case 1:
      return S.suspend(() =>
        S.Struct({ NFSFileShareInfoList: S.optional(NFSFileShareInfoList) }).pipe(ns),
      ).annotate({
        identifier: "DescribeNFSFileSharesOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ FileShareARNList: FileShareARNList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeSMBFileSharesInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FileShareARN: S.optional(S.String),
          FileShareId: S.optional(S.String),
          FileShareStatus: S.optional(S.String),
          GatewayARN: S.optional(S.String),
          EncryptionType: S.optional(EncryptionType),
          KMSEncrypted: S.optional(S.Boolean),
          KMSKey: S.optional(S.String),
          Path: S.optional(S.String),
          Role: S.optional(S.String),
          LocationARN: S.optional(S.String),
          DefaultStorageClass: S.optional(S.String),
          ObjectACL: S.optional(ObjectACL),
          ReadOnly: S.optional(S.Boolean),
          GuessMIMETypeEnabled: S.optional(S.Boolean),
          RequesterPays: S.optional(S.Boolean),
          SMBACLEnabled: S.optional(S.Boolean),
          AccessBasedEnumeration: S.optional(S.Boolean),
          AdminUserList: S.optional(UserList),
          ValidUserList: S.optional(UserList),
          InvalidUserList: S.optional(UserList),
          AuditDestinationARN: S.optional(S.String),
          Authentication: S.optional(S.String),
          CaseSensitivity: S.optional(CaseSensitivity),
          Tags: S.optional(Tags),
          FileShareName: S.optional(S.String),
          CacheAttributes: S.optional(CacheAttributes),
          NotificationPolicy: S.optional(S.String),
          VPCEndpointDNSName: S.optional(S.String),
          BucketRegion: S.optional(S.String),
          OplocksEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "SMBFileShareInfo" });
    case 4:
      return S.Array(SMBFileShareInfo);
    case 5:
      return S.suspend(() =>
        S.Struct({ SMBFileShareInfoList: S.optional(SMBFileShareInfoList) }).pipe(ns),
      ).annotate({
        identifier: "DescribeSMBFileSharesOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeSMBSettingsInput" });
    case 7:
      return S.suspend(() => S.Struct({ GatewayAdmins: S.optional(UserList) })).annotate({
        identifier: "SMBLocalGroups",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          DomainName: S.optional(S.String),
          ActiveDirectoryStatus: S.optional(ActiveDirectoryStatus),
          SMBGuestPasswordSet: S.optional(S.Boolean),
          SMBSecurityStrategy: S.optional(SMBSecurityStrategy),
          FileSharesVisible: S.optional(S.Boolean),
          SMBLocalGroups: S.optional(SMBLocalGroups),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeSMBSettingsOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ VolumeARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeSnapshotScheduleInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          VolumeARN: S.optional(S.String),
          StartAt: S.optional(S.Number),
          RecurrenceInHours: S.optional(S.Number),
          Description: S.optional(S.String),
          Timezone: S.optional(S.String),
          Tags: S.optional(Tags),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeSnapshotScheduleOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ VolumeARNs: VolumeARNs }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeStorediSCSIVolumesInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          VolumeARN: S.optional(S.String),
          VolumeId: S.optional(S.String),
          VolumeType: S.optional(S.String),
          VolumeStatus: S.optional(S.String),
          VolumeAttachmentStatus: S.optional(S.String),
          VolumeSizeInBytes: S.optional(S.Number),
          VolumeProgress: S.optional(S.Number),
          VolumeDiskId: S.optional(S.String),
          SourceSnapshotId: S.optional(S.String),
          PreservedExistingData: S.optional(S.Boolean),
          VolumeiSCSIAttributes: S.optional(VolumeiSCSIAttributes),
          CreatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          VolumeUsedInBytes: S.optional(S.Number),
          KMSKey: S.optional(S.String),
          TargetName: S.optional(S.String),
        }),
      ).annotate({ identifier: "StorediSCSIVolume" });
    case 5:
      return S.Array(StorediSCSIVolume);
    case 6:
      return S.suspend(() =>
        S.Struct({ StorediSCSIVolumes: S.optional(StorediSCSIVolumes) }).pipe(ns),
      ).annotate({
        identifier: "DescribeStorediSCSIVolumesOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TapeARNs: S.optional(TapeARNs),
          Marker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeTapeArchivesInput",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TapeARN: S.optional(S.String),
          TapeBarcode: S.optional(S.String),
          TapeCreatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TapeSizeInBytes: S.optional(S.Number),
          CompletionTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RetrievedTo: S.optional(S.String),
          TapeStatus: S.optional(S.String),
          TapeUsedInBytes: S.optional(S.Number),
          KMSKey: S.optional(S.String),
          PoolId: S.optional(S.String),
          Worm: S.optional(S.Boolean),
          RetentionStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          PoolEntryDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "TapeArchive" });
    case 1:
      return S.Array(TapeArchive);
    case 2:
      return S.suspend(() =>
        S.Struct({ TapeArchives: S.optional(TapeArchives), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeTapeArchivesOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.String,
          Marker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeTapeRecoveryPointsInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TapeARN: S.optional(S.String),
          TapeRecoveryPointTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TapeSizeInBytes: S.optional(S.Number),
          TapeStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "TapeRecoveryPointInfo" });
    case 5:
      return S.Array(TapeRecoveryPointInfo);
    case 6:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          TapeRecoveryPointInfos: S.optional(TapeRecoveryPointInfos),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeTapeRecoveryPointsOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.String,
          TapeARNs: S.optional(TapeARNs),
          Marker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeTapesInput" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TapeARN: S.optional(S.String),
          TapeBarcode: S.optional(S.String),
          TapeCreatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TapeSizeInBytes: S.optional(S.Number),
          TapeStatus: S.optional(S.String),
          VTLDevice: S.optional(S.String),
          Progress: S.optional(S.Number),
          TapeUsedInBytes: S.optional(S.Number),
          KMSKey: S.optional(S.String),
          PoolId: S.optional(S.String),
          Worm: S.optional(S.Boolean),
          RetentionStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          PoolEntryDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Tape" });
    case 1:
      return S.Array(Tape);
    case 2:
      return S.suspend(() =>
        S.Struct({ Tapes: S.optional(Tapes), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "DescribeTapesOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeUploadBufferInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          DiskIds: S.optional(DiskIds),
          UploadBufferUsedInBytes: S.optional(S.Number),
          UploadBufferAllocatedInBytes: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeUploadBufferOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.String,
          VTLDeviceARNs: S.optional(VTLDeviceARNs),
          Marker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeVTLDevicesInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TargetARN: S.optional(S.String),
          NetworkInterfaceId: S.optional(S.String),
          NetworkInterfacePort: S.optional(S.Number),
          ChapEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DeviceiSCSIAttributes" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          VTLDeviceARN: S.optional(S.String),
          VTLDeviceType: S.optional(S.String),
          VTLDeviceVendor: S.optional(S.String),
          VTLDeviceProductIdentifier: S.optional(S.String),
          DeviceiSCSIAttributes: S.optional(DeviceiSCSIAttributes),
        }),
      ).annotate({ identifier: "VTLDevice" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(VTLDevice);
    case 1:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          VTLDevices: S.optional(VTLDevices),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeVTLDevicesOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeWorkingStorageInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          DiskIds: S.optional(DiskIds),
          WorkingStorageUsedInBytes: S.optional(S.Number),
          WorkingStorageAllocatedInBytes: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeWorkingStorageOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ VolumeARN: S.String, ForceDetach: S.optional(S.Boolean) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DetachVolumeInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DisableGatewayInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ FileSystemAssociationARN: S.String, ForceDelete: S.optional(S.Boolean) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateFileSystemInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ FileShareARN: S.String, ForceRemove: S.optional(S.Boolean) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "EvictFilesFailingUploadInput",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ NotificationId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "EvictFilesFailingUploadOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.String,
          DomainName: S.String,
          OrganizationalUnit: S.optional(S.String),
          DomainControllers: S.optional(Hosts),
          TimeoutInSeconds: S.optional(S.Number),
          UserName: S.String,
          Password: SensitiveString,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "JoinDomainInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          ActiveDirectoryStatus: S.optional(ActiveDirectoryStatus),
        }).pipe(ns),
      ).annotate({ identifier: "JoinDomainOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAutomaticTapeCreationPoliciesInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TapeBarcodePrefix: S.String,
          PoolId: S.String,
          TapeSizeInBytes: S.Number,
          MinimumNumTapes: S.Number,
          Worm: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AutomaticTapeCreationRule",
      });
    case 5:
      return S.Array(AutomaticTapeCreationRule);
    case 6:
      return S.suspend(() =>
        S.Struct({
          AutomaticTapeCreationRules: S.optional(AutomaticTapeCreationRules),
          GatewayARN: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AutomaticTapeCreationPolicyInfo",
      });
    case 7:
      return S.Array(AutomaticTapeCreationPolicyInfo);
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AutomaticTapeCreationPolicyInfos: S.optional(AutomaticTapeCreationPolicyInfos),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAutomaticTapeCreationPoliciesOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListCacheReportsInput" });
    case 2:
      return S.Array(CacheReportInfo);
    case 3:
      return S.suspend(() =>
        S.Struct({
          CacheReportList: S.optional(CacheReportList),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListCacheReportsOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          Limit: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListFileSharesInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FileShareType: S.optional(FileShareType),
          FileShareARN: S.optional(S.String),
          FileShareId: S.optional(S.String),
          FileShareStatus: S.optional(S.String),
          GatewayARN: S.optional(S.String),
        }),
      ).annotate({ identifier: "FileShareInfo" });
    case 6:
      return S.Array(FileShareInfo);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          NextMarker: S.optional(S.String),
          FileShareInfoList: S.optional(FileShareInfoList),
        }).pipe(ns),
      ).annotate({ identifier: "ListFileSharesOutput" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          Limit: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListFileSystemAssociationsInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          FileSystemAssociationId: S.optional(S.String),
          FileSystemAssociationARN: S.optional(S.String),
          FileSystemAssociationStatus: S.optional(S.String),
          GatewayARN: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FileSystemAssociationSummary",
      });
    case 2:
      return S.Array(FileSystemAssociationSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          NextMarker: S.optional(S.String),
          FileSystemAssociationSummaryList: S.optional(FileSystemAssociationSummaryList),
        }).pipe(ns),
      ).annotate({
        identifier: "ListFileSystemAssociationsOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), Limit: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListGatewaysInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          GatewayId: S.optional(S.String),
          GatewayARN: S.optional(S.String),
          GatewayType: S.optional(S.String),
          GatewayOperationalState: S.optional(S.String),
          GatewayName: S.optional(S.String),
          Ec2InstanceId: S.optional(S.String),
          Ec2InstanceRegion: S.optional(S.String),
          HostEnvironment: S.optional(HostEnvironment),
          HostEnvironmentId: S.optional(S.String),
          DeprecationDate: S.optional(S.String),
          SoftwareVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "GatewayInfo" });
    case 6:
      return S.Array(GatewayInfo);
    case 7:
      return S.suspend(() =>
        S.Struct({ Gateways: S.optional(Gateways), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListGatewaysOutput" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListLocalDisksInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DiskId: S.optional(S.String),
          DiskPath: S.optional(S.String),
          DiskNode: S.optional(S.String),
          DiskStatus: S.optional(S.String),
          DiskSizeInBytes: S.optional(S.Number),
          DiskAllocationType: S.optional(S.String),
          DiskAllocationResource: S.optional(S.String),
          DiskAttributeList: S.optional(DiskAttributeList),
        }),
      ).annotate({ identifier: "Disk" });
    case 2:
      return S.Array(Disk);
    case 3:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.optional(S.String), Disks: S.optional(Disks) }).pipe(ns),
      ).annotate({ identifier: "ListLocalDisksOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceARN: S.String,
          Marker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourceARN: S.optional(S.String),
          Marker: S.optional(S.String),
          Tags: S.optional(Tags),
        }).pipe(ns),
      ).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PoolARNs: S.optional(PoolARNs),
          Marker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTapePoolsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          PoolARN: S.optional(S.String),
          PoolName: S.optional(S.String),
          StorageClass: S.optional(TapeStorageClass),
          RetentionLockType: S.optional(RetentionLockType),
          RetentionLockTimeInDays: S.optional(S.Number),
          PoolStatus: S.optional(PoolStatus),
        }),
      ).annotate({ identifier: "PoolInfo" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.Array(PoolInfo);
    case 1:
      return S.suspend(() =>
        S.Struct({ PoolInfos: S.optional(PoolInfos), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListTapePoolsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TapeARNs: S.optional(TapeARNs),
          Marker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTapesInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TapeARN: S.optional(S.String),
          TapeBarcode: S.optional(S.String),
          TapeSizeInBytes: S.optional(S.Number),
          TapeStatus: S.optional(S.String),
          GatewayARN: S.optional(S.String),
          PoolId: S.optional(S.String),
          RetentionStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          PoolEntryDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "TapeInfo" });
    case 4:
      return S.Array(TapeInfo);
    case 5:
      return S.suspend(() =>
        S.Struct({ TapeInfos: S.optional(TapeInfos), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListTapesOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ VolumeARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListVolumeInitiatorsInput",
      });
    case 7:
      return S.suspend(() => S.Struct({ Initiators: S.optional(Initiators) }).pipe(ns)).annotate({
        identifier: "ListVolumeInitiatorsOutput",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListVolumeRecoveryPointsInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          VolumeARN: S.optional(S.String),
          VolumeSizeInBytes: S.optional(S.Number),
          VolumeUsageInBytes: S.optional(S.Number),
          VolumeRecoveryPointTime: S.optional(S.String),
        }),
      ).annotate({ identifier: "VolumeRecoveryPointInfo" });
    case 2:
      return S.Array(VolumeRecoveryPointInfo);
    case 3:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          VolumeRecoveryPointInfos: S.optional(VolumeRecoveryPointInfos),
        }).pipe(ns),
      ).annotate({
        identifier: "ListVolumeRecoveryPointsOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          Marker: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListVolumesInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          VolumeARN: S.optional(S.String),
          VolumeId: S.optional(S.String),
          GatewayARN: S.optional(S.String),
          GatewayId: S.optional(S.String),
          VolumeType: S.optional(S.String),
          VolumeSizeInBytes: S.optional(S.Number),
          VolumeAttachmentStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "VolumeInfo" });
    case 6:
      return S.Array(VolumeInfo);
    case 7:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.optional(S.String),
          Marker: S.optional(S.String),
          VolumeInfos: S.optional(VolumeInfos),
        }).pipe(ns),
      ).annotate({ identifier: "ListVolumesOutput" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ FileShareARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "NotifyWhenUploadedInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ FileShareARN: S.optional(S.String), NotificationId: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "NotifyWhenUploadedOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FileShareARN: S.String,
          FolderList: S.optional(FolderList),
          Recursive: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RefreshCacheInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: TagKeys }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RemoveTagsFromResourceInput",
      });
    case 4:
      return S.suspend(() => S.Struct({ ResourceARN: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "RemoveTagsFromResourceOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ResetCacheInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ TapeARN: S.String, GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RetrieveTapeArchiveInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ TapeARN: S.String, GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RetrieveTapeRecoveryPointInput",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String, LocalConsolePassword: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetLocalConsolePasswordInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String, Password: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SetSMBGuestPasswordInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ShutdownGatewayInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartAvailabilityMonitorTestInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FileShareARN: S.String,
          Role: S.String,
          LocationARN: S.String,
          BucketRegion: S.String,
          VPCEndpointDNSName: S.optional(S.String),
          InclusionFilters: S.optional(CacheReportFilterList),
          ExclusionFilters: S.optional(CacheReportFilterList),
          ClientToken: S.String,
          Tags: S.optional(Tags),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartCacheReportInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartGatewayInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AutomaticTapeCreationRules: AutomaticTapeCreationRules,
          GatewayARN: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateAutomaticTapeCreationPolicyInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.String,
          AverageUploadRateLimitInBitsPerSec: S.optional(S.Number),
          AverageDownloadRateLimitInBitsPerSec: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateBandwidthRateLimitInput",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.String,
          BandwidthRateLimitIntervals: BandwidthRateLimitIntervals,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateBandwidthRateLimitScheduleInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TargetARN: S.String,
          SecretToAuthenticateInitiator: SensitiveString,
          InitiatorName: S.String,
          SecretToAuthenticateTarget: S.optional(SensitiveString),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateChapCredentialsInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FileSystemAssociationARN: S.String,
          UserName: S.optional(S.String),
          Password: S.optional(SensitiveString),
          AuditDestinationARN: S.optional(S.String),
          CacheAttributes: S.optional(CacheAttributes),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateFileSystemAssociationInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.String,
          GatewayName: S.optional(S.String),
          GatewayTimezone: S.optional(S.String),
          CloudWatchLogGroupARN: S.optional(S.String),
          GatewayCapacity: S.optional(GatewayCapacity),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateGatewayInformationInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.optional(S.String), GatewayName: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "UpdateGatewayInformationOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateGatewaySoftwareNowInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          GatewayARN: S.String,
          HourOfDay: S.optional(S.Number),
          MinuteOfHour: S.optional(S.Number),
          DayOfWeek: S.optional(S.Number),
          DayOfMonth: S.optional(S.Number),
          SoftwareUpdatePreferences: S.optional(SoftwareUpdatePreferences),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateMaintenanceStartTimeInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          FileShareARN: S.String,
          EncryptionType: S.optional(EncryptionType),
          KMSEncrypted: S.optional(S.Boolean),
          KMSKey: S.optional(S.String),
          NFSFileShareDefaults: S.optional(NFSFileShareDefaults),
          DefaultStorageClass: S.optional(S.String),
          ObjectACL: S.optional(ObjectACL),
          ClientList: S.optional(FileShareClientList),
          Squash: S.optional(S.String),
          ReadOnly: S.optional(S.Boolean),
          GuessMIMETypeEnabled: S.optional(S.Boolean),
          RequesterPays: S.optional(S.Boolean),
          FileShareName: S.optional(S.String),
          CacheAttributes: S.optional(CacheAttributes),
          NotificationPolicy: S.optional(S.String),
          AuditDestinationARN: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateNFSFileShareInput" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FileShareARN: S.String,
          EncryptionType: S.optional(EncryptionType),
          KMSEncrypted: S.optional(S.Boolean),
          KMSKey: S.optional(S.String),
          DefaultStorageClass: S.optional(S.String),
          ObjectACL: S.optional(ObjectACL),
          ReadOnly: S.optional(S.Boolean),
          GuessMIMETypeEnabled: S.optional(S.Boolean),
          RequesterPays: S.optional(S.Boolean),
          SMBACLEnabled: S.optional(S.Boolean),
          AccessBasedEnumeration: S.optional(S.Boolean),
          AdminUserList: S.optional(UserList),
          ValidUserList: S.optional(UserList),
          InvalidUserList: S.optional(UserList),
          AuditDestinationARN: S.optional(S.String),
          CaseSensitivity: S.optional(CaseSensitivity),
          FileShareName: S.optional(S.String),
          CacheAttributes: S.optional(CacheAttributes),
          NotificationPolicy: S.optional(S.String),
          OplocksEnabled: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateSMBFileShareInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String, FileSharesVisible: S.Boolean }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateSMBFileShareVisibilityInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String, SMBLocalGroups: SMBLocalGroups }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateSMBLocalGroupsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ GatewayARN: S.String, SMBSecurityStrategy: SMBSecurityStrategy }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateSMBSecurityStrategyInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          VolumeARN: S.String,
          StartAt: S.Number,
          RecurrenceInHours: S.Number,
          Description: S.optional(S.String),
          Tags: S.optional(Tags),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateSnapshotScheduleInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ VTLDeviceARN: S.String, DeviceType: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateVTLDeviceTypeInput" });
    case 6:
      return S.suspend(() => S.Struct({ VTLDeviceARN: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "UpdateVTLDeviceTypeOutput",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ errorCode: S.optional(ErrorCode), errorDetails: S.optional(ErrorDetails) }),
      ).annotate({ identifier: "StorageGatewayError" });
  }
}
