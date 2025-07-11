import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Glacier {
  abortMultipartUpload(
    input: AbortMultipartUploadInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  abortVaultLock(
    input: AbortVaultLockInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  addTagsToVault(
    input: AddTagsToVaultInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  completeMultipartUpload(
    input: CompleteMultipartUploadInput,
  ): Effect.Effect<
    ArchiveCreationOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  completeVaultLock(
    input: CompleteVaultLockInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createVault(
    input: CreateVaultInput,
  ): Effect.Effect<
    CreateVaultOutput,
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteArchive(
    input: DeleteArchiveInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteVault(
    input: DeleteVaultInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteVaultAccessPolicy(
    input: DeleteVaultAccessPolicyInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteVaultNotifications(
    input: DeleteVaultNotificationsInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeJob(
    input: DescribeJobInput,
  ): Effect.Effect<
    GlacierJobDescription,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeVault(
    input: DescribeVaultInput,
  ): Effect.Effect<
    DescribeVaultOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getDataRetrievalPolicy(
    input: GetDataRetrievalPolicyInput,
  ): Effect.Effect<
    GetDataRetrievalPolicyOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getJobOutput(
    input: GetJobOutputInput,
  ): Effect.Effect<
    GetJobOutputOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getVaultAccessPolicy(
    input: GetVaultAccessPolicyInput,
  ): Effect.Effect<
    GetVaultAccessPolicyOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getVaultLock(
    input: GetVaultLockInput,
  ): Effect.Effect<
    GetVaultLockOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getVaultNotifications(
    input: GetVaultNotificationsInput,
  ): Effect.Effect<
    GetVaultNotificationsOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  initiateJob(
    input: InitiateJobInput,
  ): Effect.Effect<
    InitiateJobOutput,
    | InsufficientCapacityException
    | InvalidParameterValueException
    | MissingParameterValueException
    | PolicyEnforcedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  initiateMultipartUpload(
    input: InitiateMultipartUploadInput,
  ): Effect.Effect<
    InitiateMultipartUploadOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  initiateVaultLock(
    input: InitiateVaultLockInput,
  ): Effect.Effect<
    InitiateVaultLockOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listJobs(
    input: ListJobsInput,
  ): Effect.Effect<
    ListJobsOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listMultipartUploads(
    input: ListMultipartUploadsInput,
  ): Effect.Effect<
    ListMultipartUploadsOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listParts(
    input: ListPartsInput,
  ): Effect.Effect<
    ListPartsOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listProvisionedCapacity(
    input: ListProvisionedCapacityInput,
  ): Effect.Effect<
    ListProvisionedCapacityOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listTagsForVault(
    input: ListTagsForVaultInput,
  ): Effect.Effect<
    ListTagsForVaultOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listVaults(
    input: ListVaultsInput,
  ): Effect.Effect<
    ListVaultsOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  purchaseProvisionedCapacity(
    input: PurchaseProvisionedCapacityInput,
  ): Effect.Effect<
    PurchaseProvisionedCapacityOutput,
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  removeTagsFromVault(
    input: RemoveTagsFromVaultInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  setDataRetrievalPolicy(
    input: SetDataRetrievalPolicyInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  setVaultAccessPolicy(
    input: SetVaultAccessPolicyInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  setVaultNotifications(
    input: SetVaultNotificationsInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  uploadArchive(
    input: UploadArchiveInput,
  ): Effect.Effect<
    ArchiveCreationOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | RequestTimeoutException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  uploadMultipartPart(
    input: UploadMultipartPartInput,
  ): Effect.Effect<
    UploadMultipartPartOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | RequestTimeoutException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
}

export interface AbortMultipartUploadInput {
  accountId: string;
  vaultName: string;
  uploadId: string;
}
export interface AbortVaultLockInput {
  accountId: string;
  vaultName: string;
}
export type AccessControlPolicyList = Array<Grant>;
export type ActionCode = "ArchiveRetrieval" | "InventoryRetrieval" | "Select";
export interface AddTagsToVaultInput {
  accountId: string;
  vaultName: string;
  Tags?: Record<string, string>;
}
export interface ArchiveCreationOutput {
  location?: string;
  checksum?: string;
  archiveId?: string;
}
export type CannedACL =
  | "Private"
  | "PublicRead"
  | "PublicReadWrite"
  | "AwsExecRead"
  | "AuthenticatedRead"
  | "BucketOwnerRead"
  | "BucketOwnerFullControl";
export interface CompleteMultipartUploadInput {
  accountId: string;
  vaultName: string;
  uploadId: string;
  archiveSize?: string;
  checksum?: string;
}
export interface CompleteVaultLockInput {
  accountId: string;
  vaultName: string;
  lockId: string;
}
export interface CreateVaultInput {
  accountId: string;
  vaultName: string;
}
export interface CreateVaultOutput {
  location?: string;
}
export interface CSVInput {
  FileHeaderInfo?: FileHeaderInfo;
  Comments?: string;
  QuoteEscapeCharacter?: string;
  RecordDelimiter?: string;
  FieldDelimiter?: string;
  QuoteCharacter?: string;
}
export interface CSVOutput {
  QuoteFields?: QuoteFields;
  QuoteEscapeCharacter?: string;
  RecordDelimiter?: string;
  FieldDelimiter?: string;
  QuoteCharacter?: string;
}
export interface DataRetrievalPolicy {
  Rules?: Array<DataRetrievalRule>;
}
export interface DataRetrievalRule {
  Strategy?: string;
  BytesPerHour?: number;
}
export type DataRetrievalRulesList = Array<DataRetrievalRule>;
export type DateTime = string;

export interface DeleteArchiveInput {
  accountId: string;
  vaultName: string;
  archiveId: string;
}
export interface DeleteVaultAccessPolicyInput {
  accountId: string;
  vaultName: string;
}
export interface DeleteVaultInput {
  accountId: string;
  vaultName: string;
}
export interface DeleteVaultNotificationsInput {
  accountId: string;
  vaultName: string;
}
export interface DescribeJobInput {
  accountId: string;
  vaultName: string;
  jobId: string;
}
export interface DescribeVaultInput {
  accountId: string;
  vaultName: string;
}
export interface DescribeVaultOutput {
  VaultARN?: string;
  VaultName?: string;
  CreationDate?: string;
  LastInventoryDate?: string;
  NumberOfArchives?: number;
  SizeInBytes?: number;
}
export interface Encryption {
  EncryptionType?: EncryptionType;
  KMSKeyId?: string;
  KMSContext?: string;
}
export type EncryptionType = "KMS" | "S3";
export type ExpressionType = "SQL";
export type FileHeaderInfo = "Use" | "Ignore" | "None";
export interface GetDataRetrievalPolicyInput {
  accountId: string;
}
export interface GetDataRetrievalPolicyOutput {
  Policy?: DataRetrievalPolicy;
}
export interface GetJobOutputInput {
  accountId: string;
  vaultName: string;
  jobId: string;
  range?: string;
}
export interface GetJobOutputOutput {
  body?: Uint8Array | string;
  checksum?: string;
  status?: number;
  contentRange?: string;
  acceptRanges?: string;
  contentType?: string;
  archiveDescription?: string;
}
export interface GetVaultAccessPolicyInput {
  accountId: string;
  vaultName: string;
}
export interface GetVaultAccessPolicyOutput {
  policy?: VaultAccessPolicy;
}
export interface GetVaultLockInput {
  accountId: string;
  vaultName: string;
}
export interface GetVaultLockOutput {
  Policy?: string;
  State?: string;
  ExpirationDate?: string;
  CreationDate?: string;
}
export interface GetVaultNotificationsInput {
  accountId: string;
  vaultName: string;
}
export interface GetVaultNotificationsOutput {
  vaultNotificationConfig?: VaultNotificationConfig;
}
export interface GlacierJobDescription {
  JobId?: string;
  JobDescription?: string;
  Action?: ActionCode;
  ArchiveId?: string;
  VaultARN?: string;
  CreationDate?: string;
  Completed?: boolean;
  StatusCode?: StatusCode;
  StatusMessage?: string;
  ArchiveSizeInBytes?: number;
  InventorySizeInBytes?: number;
  SNSTopic?: string;
  CompletionDate?: string;
  SHA256TreeHash?: string;
  ArchiveSHA256TreeHash?: string;
  RetrievalByteRange?: string;
  Tier?: string;
  InventoryRetrievalParameters?: InventoryRetrievalJobDescription;
  JobOutputPath?: string;
  SelectParameters?: SelectParameters;
  OutputLocation?: OutputLocation;
}
export interface Grant {
  Grantee?: Grantee;
  Permission?: Permission;
}
export interface Grantee {
  Type: Type;
  DisplayName?: string;
  URI?: string;
  ID?: string;
  EmailAddress?: string;
}
export type hashmap = Record<string, string>;
export type httpstatus = number;

export interface InitiateJobInput {
  accountId: string;
  vaultName: string;
  jobParameters?: JobParameters;
}
export interface InitiateJobOutput {
  location?: string;
  jobId?: string;
  jobOutputPath?: string;
}
export interface InitiateMultipartUploadInput {
  accountId: string;
  vaultName: string;
  archiveDescription?: string;
  partSize?: string;
}
export interface InitiateMultipartUploadOutput {
  location?: string;
  uploadId?: string;
}
export interface InitiateVaultLockInput {
  accountId: string;
  vaultName: string;
  policy?: VaultLockPolicy;
}
export interface InitiateVaultLockOutput {
  lockId?: string;
}
export interface InputSerialization {
  csv?: CSVInput;
}
export declare class InsufficientCapacityException extends Data.TaggedError(
  "InsufficientCapacityException",
)<{
  readonly type?: string;
  readonly code?: string;
  readonly message?: string;
}> {}
export declare class InvalidParameterValueException extends Data.TaggedError(
  "InvalidParameterValueException",
)<{
  readonly type?: string;
  readonly code?: string;
  readonly message?: string;
}> {}
export interface InventoryRetrievalJobDescription {
  Format?: string;
  StartDate?: string;
  EndDate?: string;
  Limit?: string;
  Marker?: string;
}
export interface InventoryRetrievalJobInput {
  StartDate?: string;
  EndDate?: string;
  Limit?: string;
  Marker?: string;
}
export type JobList = Array<GlacierJobDescription>;
export interface JobParameters {
  Format?: string;
  Type?: string;
  ArchiveId?: string;
  Description?: string;
  SNSTopic?: string;
  RetrievalByteRange?: string;
  Tier?: string;
  InventoryRetrievalParameters?: InventoryRetrievalJobInput;
  SelectParameters?: SelectParameters;
  OutputLocation?: OutputLocation;
}
export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly type?: string;
  readonly code?: string;
  readonly message?: string;
}> {}
export interface ListJobsInput {
  accountId: string;
  vaultName: string;
  limit?: number;
  marker?: string;
  statuscode?: string;
  completed?: string;
}
export interface ListJobsOutput {
  JobList?: Array<GlacierJobDescription>;
  Marker?: string;
}
export interface ListMultipartUploadsInput {
  accountId: string;
  vaultName: string;
  limit?: number;
  marker?: string;
}
export interface ListMultipartUploadsOutput {
  UploadsList?: Array<UploadListElement>;
  Marker?: string;
}
export interface ListPartsInput {
  accountId: string;
  vaultName: string;
  uploadId: string;
  marker?: string;
  limit?: number;
}
export interface ListPartsOutput {
  MultipartUploadId?: string;
  VaultARN?: string;
  ArchiveDescription?: string;
  PartSizeInBytes?: number;
  CreationDate?: string;
  Parts?: Array<PartListElement>;
  Marker?: string;
}
export interface ListProvisionedCapacityInput {
  accountId: string;
}
export interface ListProvisionedCapacityOutput {
  ProvisionedCapacityList?: Array<ProvisionedCapacityDescription>;
}
export interface ListTagsForVaultInput {
  accountId: string;
  vaultName: string;
}
export interface ListTagsForVaultOutput {
  Tags?: Record<string, string>;
}
export interface ListVaultsInput {
  accountId: string;
  marker?: string;
  limit?: number;
}
export interface ListVaultsOutput {
  VaultList?: Array<DescribeVaultOutput>;
  Marker?: string;
}
export type long = number;

export declare class MissingParameterValueException extends Data.TaggedError(
  "MissingParameterValueException",
)<{
  readonly type?: string;
  readonly code?: string;
  readonly message?: string;
}> {}
export type NotificationEventList = Array<string>;
export type NullableLong = number;

export interface OutputLocation {
  S3?: S3Location;
}
export interface OutputSerialization {
  csv?: CSVOutput;
}
export type PartList = Array<PartListElement>;
export interface PartListElement {
  RangeInBytes?: string;
  SHA256TreeHash?: string;
}
export type Permission =
  | "FULL_CONTROL"
  | "WRITE"
  | "WRITE_ACP"
  | "READ"
  | "READ_ACP";
export declare class PolicyEnforcedException extends Data.TaggedError(
  "PolicyEnforcedException",
)<{
  readonly type?: string;
  readonly code?: string;
  readonly message?: string;
}> {}
export interface ProvisionedCapacityDescription {
  CapacityId?: string;
  StartDate?: string;
  ExpirationDate?: string;
}
export type ProvisionedCapacityList = Array<ProvisionedCapacityDescription>;
export interface PurchaseProvisionedCapacityInput {
  accountId: string;
}
export interface PurchaseProvisionedCapacityOutput {
  capacityId?: string;
}
export type QuoteFields = "Always" | "AsNeeded";
export interface RemoveTagsFromVaultInput {
  accountId: string;
  vaultName: string;
  TagKeys?: Array<string>;
}
export declare class RequestTimeoutException extends Data.TaggedError(
  "RequestTimeoutException",
)<{
  readonly type?: string;
  readonly code?: string;
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly type?: string;
  readonly code?: string;
  readonly message?: string;
}> {}
export interface S3Location {
  BucketName?: string;
  Prefix?: string;
  Encryption?: Encryption;
  CannedACL?: CannedACL;
  AccessControlList?: Array<Grant>;
  Tagging?: Record<string, string>;
  UserMetadata?: Record<string, string>;
  StorageClass?: StorageClass;
}
export interface SelectParameters {
  InputSerialization?: InputSerialization;
  ExpressionType?: ExpressionType;
  Expression?: string;
  OutputSerialization?: OutputSerialization;
}
export declare class ServiceUnavailableException extends Data.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly type?: string;
  readonly code?: string;
  readonly message?: string;
}> {}
export interface SetDataRetrievalPolicyInput {
  accountId: string;
  Policy?: DataRetrievalPolicy;
}
export interface SetVaultAccessPolicyInput {
  accountId: string;
  vaultName: string;
  policy?: VaultAccessPolicy;
}
export interface SetVaultNotificationsInput {
  accountId: string;
  vaultName: string;
  vaultNotificationConfig?: VaultNotificationConfig;
}
export type Size = number;

export type StatusCode = "InProgress" | "Succeeded" | "Failed";
export type StorageClass =
  | "Standard"
  | "ReducedRedundancy"
  | "StandardInfrequentAccess";
export type Stream = Uint8Array | string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export type TagValue = string;

export type Type = "AmazonCustomerByEmail" | "CanonicalUser" | "Group";
export interface UploadArchiveInput {
  vaultName: string;
  accountId: string;
  archiveDescription?: string;
  checksum?: string;
  body?: Uint8Array | string;
}
export interface UploadListElement {
  MultipartUploadId?: string;
  VaultARN?: string;
  ArchiveDescription?: string;
  PartSizeInBytes?: number;
  CreationDate?: string;
}
export interface UploadMultipartPartInput {
  accountId: string;
  vaultName: string;
  uploadId: string;
  checksum?: string;
  range?: string;
  body?: Uint8Array | string;
}
export interface UploadMultipartPartOutput {
  checksum?: string;
}
export type UploadsList = Array<UploadListElement>;
export interface VaultAccessPolicy {
  Policy?: string;
}
export type VaultList = Array<DescribeVaultOutput>;
export interface VaultLockPolicy {
  Policy?: string;
}
export interface VaultNotificationConfig {
  SNSTopic?: string;
  Events?: Array<string>;
}
export declare namespace AbortMultipartUpload {
  export type Input = AbortMultipartUploadInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace AbortVaultLock {
  export type Input = AbortVaultLockInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace AddTagsToVault {
  export type Input = AddTagsToVaultInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CompleteMultipartUpload {
  export type Input = CompleteMultipartUploadInput;
  export type Output = ArchiveCreationOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CompleteVaultLock {
  export type Input = CompleteVaultLockInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateVault {
  export type Input = CreateVaultInput;
  export type Output = CreateVaultOutput;
  export type Error =
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteArchive {
  export type Input = DeleteArchiveInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteVault {
  export type Input = DeleteVaultInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteVaultAccessPolicy {
  export type Input = DeleteVaultAccessPolicyInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteVaultNotifications {
  export type Input = DeleteVaultNotificationsInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeJob {
  export type Input = DescribeJobInput;
  export type Output = GlacierJobDescription;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeVault {
  export type Input = DescribeVaultInput;
  export type Output = DescribeVaultOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetDataRetrievalPolicy {
  export type Input = GetDataRetrievalPolicyInput;
  export type Output = GetDataRetrievalPolicyOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetJobOutput {
  export type Input = GetJobOutputInput;
  export type Output = GetJobOutputOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetVaultAccessPolicy {
  export type Input = GetVaultAccessPolicyInput;
  export type Output = GetVaultAccessPolicyOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetVaultLock {
  export type Input = GetVaultLockInput;
  export type Output = GetVaultLockOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetVaultNotifications {
  export type Input = GetVaultNotificationsInput;
  export type Output = GetVaultNotificationsOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace InitiateJob {
  export type Input = InitiateJobInput;
  export type Output = InitiateJobOutput;
  export type Error =
    | InsufficientCapacityException
    | InvalidParameterValueException
    | MissingParameterValueException
    | PolicyEnforcedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace InitiateMultipartUpload {
  export type Input = InitiateMultipartUploadInput;
  export type Output = InitiateMultipartUploadOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace InitiateVaultLock {
  export type Input = InitiateVaultLockInput;
  export type Output = InitiateVaultLockOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListJobs {
  export type Input = ListJobsInput;
  export type Output = ListJobsOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListMultipartUploads {
  export type Input = ListMultipartUploadsInput;
  export type Output = ListMultipartUploadsOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListParts {
  export type Input = ListPartsInput;
  export type Output = ListPartsOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListProvisionedCapacity {
  export type Input = ListProvisionedCapacityInput;
  export type Output = ListProvisionedCapacityOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListTagsForVault {
  export type Input = ListTagsForVaultInput;
  export type Output = ListTagsForVaultOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListVaults {
  export type Input = ListVaultsInput;
  export type Output = ListVaultsOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PurchaseProvisionedCapacity {
  export type Input = PurchaseProvisionedCapacityInput;
  export type Output = PurchaseProvisionedCapacityOutput;
  export type Error =
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace RemoveTagsFromVault {
  export type Input = RemoveTagsFromVaultInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace SetDataRetrievalPolicy {
  export type Input = SetDataRetrievalPolicyInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace SetVaultAccessPolicy {
  export type Input = SetVaultAccessPolicyInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace SetVaultNotifications {
  export type Input = SetVaultNotificationsInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UploadArchive {
  export type Input = UploadArchiveInput;
  export type Output = ArchiveCreationOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | RequestTimeoutException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UploadMultipartPart {
  export type Input = UploadMultipartPartInput;
  export type Output = UploadMultipartPartOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | RequestTimeoutException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}
