import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class QLDB extends AWSServiceClient {
  cancelJournalKinesisStream(
    input: CancelJournalKinesisStreamRequest,
  ): Effect.Effect<
    CancelJournalKinesisStreamResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError
  >;
  createLedger(
    input: CreateLedgerRequest,
  ): Effect.Effect<
    CreateLedgerResponse,
    | InvalidParameterException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | CommonAwsError
  >;
  deleteLedger(
    input: DeleteLedgerRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | ResourceInUseException
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError
  >;
  describeJournalKinesisStream(
    input: DescribeJournalKinesisStreamRequest,
  ): Effect.Effect<
    DescribeJournalKinesisStreamResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError
  >;
  describeJournalS3Export(
    input: DescribeJournalS3ExportRequest,
  ): Effect.Effect<
    DescribeJournalS3ExportResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  describeLedger(
    input: DescribeLedgerRequest,
  ): Effect.Effect<
    DescribeLedgerResponse,
    InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  exportJournalToS3(
    input: ExportJournalToS3Request,
  ): Effect.Effect<
    ExportJournalToS3Response,
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError
  >;
  getBlock(
    input: GetBlockRequest,
  ): Effect.Effect<
    GetBlockResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError
  >;
  getDigest(
    input: GetDigestRequest,
  ): Effect.Effect<
    GetDigestResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError
  >;
  getRevision(
    input: GetRevisionRequest,
  ): Effect.Effect<
    GetRevisionResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError
  >;
  listJournalKinesisStreamsForLedger(
    input: ListJournalKinesisStreamsForLedgerRequest,
  ): Effect.Effect<
    ListJournalKinesisStreamsForLedgerResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError
  >;
  listJournalS3Exports(
    input: ListJournalS3ExportsRequest,
  ): Effect.Effect<ListJournalS3ExportsResponse, CommonAwsError>;
  listJournalS3ExportsForLedger(
    input: ListJournalS3ExportsForLedgerRequest,
  ): Effect.Effect<ListJournalS3ExportsForLedgerResponse, CommonAwsError>;
  listLedgers(
    input: ListLedgersRequest,
  ): Effect.Effect<ListLedgersResponse, CommonAwsError>;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  streamJournalToKinesis(
    input: StreamJournalToKinesisRequest,
  ): Effect.Effect<
    StreamJournalToKinesisResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  updateLedger(
    input: UpdateLedgerRequest,
  ): Effect.Effect<
    UpdateLedgerResponse,
    InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  updateLedgerPermissionsMode(
    input: UpdateLedgerPermissionsModeRequest,
  ): Effect.Effect<
    UpdateLedgerPermissionsModeResponse,
    InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
}

export declare class Qldb extends QLDB {}

export type Arn = string;

export type QldbBoolean = boolean;

export interface CancelJournalKinesisStreamRequest {
  LedgerName: string;
  StreamId: string;
}
export interface CancelJournalKinesisStreamResponse {
  StreamId?: string;
}
export interface CreateLedgerRequest {
  Name: string;
  Tags?: Record<string, string>;
  PermissionsMode: PermissionsMode;
  DeletionProtection?: boolean;
  KmsKey?: string;
}
export interface CreateLedgerResponse {
  Name?: string;
  Arn?: string;
  State?: LedgerState;
  CreationDateTime?: Date | string;
  PermissionsMode?: PermissionsMode;
  DeletionProtection?: boolean;
  KmsKeyArn?: string;
}
export interface DeleteLedgerRequest {
  Name: string;
}
export type DeletionProtection = boolean;

export interface DescribeJournalKinesisStreamRequest {
  LedgerName: string;
  StreamId: string;
}
export interface DescribeJournalKinesisStreamResponse {
  Stream?: JournalKinesisStreamDescription;
}
export interface DescribeJournalS3ExportRequest {
  Name: string;
  ExportId: string;
}
export interface DescribeJournalS3ExportResponse {
  ExportDescription: JournalS3ExportDescription;
}
export interface DescribeLedgerRequest {
  Name: string;
}
export interface DescribeLedgerResponse {
  Name?: string;
  Arn?: string;
  State?: LedgerState;
  CreationDateTime?: Date | string;
  PermissionsMode?: PermissionsMode;
  DeletionProtection?: boolean;
  EncryptionDescription?: LedgerEncryptionDescription;
}
export type Digest = Uint8Array | string;

export type EncryptionStatus = "ENABLED" | "UPDATING" | "KMS_KEY_INACCESSIBLE";
export type ErrorCause = "KINESIS_STREAM_NOT_FOUND" | "IAM_PERMISSION_REVOKED";
export type ErrorMessage = string;

export interface ExportJournalToS3Request {
  Name: string;
  InclusiveStartTime: Date | string;
  ExclusiveEndTime: Date | string;
  S3ExportConfiguration: S3ExportConfiguration;
  RoleArn: string;
  OutputFormat?: OutputFormat;
}
export interface ExportJournalToS3Response {
  ExportId: string;
}
export type ExportStatus = "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
export interface GetBlockRequest {
  Name: string;
  BlockAddress: ValueHolder;
  DigestTipAddress?: ValueHolder;
}
export interface GetBlockResponse {
  Block: ValueHolder;
  Proof?: ValueHolder;
}
export interface GetDigestRequest {
  Name: string;
}
export interface GetDigestResponse {
  Digest: Uint8Array | string;
  DigestTipAddress: ValueHolder;
}
export interface GetRevisionRequest {
  Name: string;
  BlockAddress: ValueHolder;
  DocumentId: string;
  DigestTipAddress?: ValueHolder;
}
export interface GetRevisionResponse {
  Proof?: ValueHolder;
  Revision: ValueHolder;
}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly Message?: string;
  readonly ParameterName?: string;
}> {}
export type IonText = string;

export interface JournalKinesisStreamDescription {
  LedgerName: string;
  CreationTime?: Date | string;
  InclusiveStartTime?: Date | string;
  ExclusiveEndTime?: Date | string;
  RoleArn: string;
  StreamId: string;
  Arn?: string;
  Status: StreamStatus;
  KinesisConfiguration: KinesisConfiguration;
  ErrorCause?: ErrorCause;
  StreamName: string;
}
export type JournalKinesisStreamDescriptionList =
  Array<JournalKinesisStreamDescription>;
export interface JournalS3ExportDescription {
  LedgerName: string;
  ExportId: string;
  ExportCreationTime: Date | string;
  Status: ExportStatus;
  InclusiveStartTime: Date | string;
  ExclusiveEndTime: Date | string;
  S3ExportConfiguration: S3ExportConfiguration;
  RoleArn: string;
  OutputFormat?: OutputFormat;
}
export type JournalS3ExportList = Array<JournalS3ExportDescription>;
export interface KinesisConfiguration {
  StreamArn: string;
  AggregationEnabled?: boolean;
}
export type KmsKey = string;

export interface LedgerEncryptionDescription {
  KmsKeyArn: string;
  EncryptionStatus: EncryptionStatus;
  InaccessibleKmsKeyDateTime?: Date | string;
}
export type LedgerList = Array<LedgerSummary>;
export type LedgerName = string;

export type LedgerState = "CREATING" | "ACTIVE" | "DELETING" | "DELETED";
export interface LedgerSummary {
  Name?: string;
  State?: LedgerState;
  CreationDateTime?: Date | string;
}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
}> {}
export interface ListJournalKinesisStreamsForLedgerRequest {
  LedgerName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListJournalKinesisStreamsForLedgerResponse {
  Streams?: Array<JournalKinesisStreamDescription>;
  NextToken?: string;
}
export interface ListJournalS3ExportsForLedgerRequest {
  Name: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListJournalS3ExportsForLedgerResponse {
  JournalS3Exports?: Array<JournalS3ExportDescription>;
  NextToken?: string;
}
export interface ListJournalS3ExportsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListJournalS3ExportsResponse {
  JournalS3Exports?: Array<JournalS3ExportDescription>;
  NextToken?: string;
}
export interface ListLedgersRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListLedgersResponse {
  Ledgers?: Array<LedgerSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type MaxResults = number;

export type NextToken = string;

export type OutputFormat = "ION_BINARY" | "ION_TEXT" | "JSON";
export type ParameterName = string;

export type PermissionsMode = "ALLOW_ALL" | "STANDARD";
export declare class ResourceAlreadyExistsException extends EffectData.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
  readonly ResourceName?: string;
}> {}
export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
  readonly ResourceName?: string;
}> {}
export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
  readonly ResourceName?: string;
}> {}
export declare class ResourcePreconditionNotMetException extends EffectData.TaggedError(
  "ResourcePreconditionNotMetException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
  readonly ResourceName?: string;
}> {}
export type ResourceType = string;

export type S3Bucket = string;

export interface S3EncryptionConfiguration {
  ObjectEncryptionType: S3ObjectEncryptionType;
  KmsKeyArn?: string;
}
export interface S3ExportConfiguration {
  Bucket: string;
  Prefix: string;
  EncryptionConfiguration: S3EncryptionConfiguration;
}
export type S3ObjectEncryptionType = "SSE_KMS" | "SSE_S3" | "NO_ENCRYPTION";
export type S3Prefix = string;

export interface StreamJournalToKinesisRequest {
  LedgerName: string;
  RoleArn: string;
  Tags?: Record<string, string>;
  InclusiveStartTime: Date | string;
  ExclusiveEndTime?: Date | string;
  KinesisConfiguration: KinesisConfiguration;
  StreamName: string;
}
export interface StreamJournalToKinesisResponse {
  StreamId?: string;
}
export type StreamName = string;

export type StreamStatus =
  | "ACTIVE"
  | "COMPLETED"
  | "CANCELED"
  | "FAILED"
  | "IMPAIRED";
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TagValue = string;

export type Timestamp = Date | string;

export type UniqueId = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateLedgerPermissionsModeRequest {
  Name: string;
  PermissionsMode: PermissionsMode;
}
export interface UpdateLedgerPermissionsModeResponse {
  Name?: string;
  Arn?: string;
  PermissionsMode?: PermissionsMode;
}
export interface UpdateLedgerRequest {
  Name: string;
  DeletionProtection?: boolean;
  KmsKey?: string;
}
export interface UpdateLedgerResponse {
  Name?: string;
  Arn?: string;
  State?: LedgerState;
  CreationDateTime?: Date | string;
  DeletionProtection?: boolean;
  EncryptionDescription?: LedgerEncryptionDescription;
}
export interface ValueHolder {
  IonText?: string;
}
export declare namespace CancelJournalKinesisStream {
  export type Input = CancelJournalKinesisStreamRequest;
  export type Output = CancelJournalKinesisStreamResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError;
}

export declare namespace CreateLedger {
  export type Input = CreateLedgerRequest;
  export type Output = CreateLedgerResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteLedger {
  export type Input = DeleteLedgerRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | ResourceInUseException
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError;
}

export declare namespace DescribeJournalKinesisStream {
  export type Input = DescribeJournalKinesisStreamRequest;
  export type Output = DescribeJournalKinesisStreamResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError;
}

export declare namespace DescribeJournalS3Export {
  export type Input = DescribeJournalS3ExportRequest;
  export type Output = DescribeJournalS3ExportResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DescribeLedger {
  export type Input = DescribeLedgerRequest;
  export type Output = DescribeLedgerResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ExportJournalToS3 {
  export type Input = ExportJournalToS3Request;
  export type Output = ExportJournalToS3Response;
  export type Error =
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError;
}

export declare namespace GetBlock {
  export type Input = GetBlockRequest;
  export type Output = GetBlockResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError;
}

export declare namespace GetDigest {
  export type Input = GetDigestRequest;
  export type Output = GetDigestResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError;
}

export declare namespace GetRevision {
  export type Input = GetRevisionRequest;
  export type Output = GetRevisionResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError;
}

export declare namespace ListJournalKinesisStreamsForLedger {
  export type Input = ListJournalKinesisStreamsForLedgerRequest;
  export type Output = ListJournalKinesisStreamsForLedgerResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError;
}

export declare namespace ListJournalS3Exports {
  export type Input = ListJournalS3ExportsRequest;
  export type Output = ListJournalS3ExportsResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListJournalS3ExportsForLedger {
  export type Input = ListJournalS3ExportsForLedgerRequest;
  export type Output = ListJournalS3ExportsForLedgerResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListLedgers {
  export type Input = ListLedgersRequest;
  export type Output = ListLedgersResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StreamJournalToKinesis {
  export type Input = StreamJournalToKinesisRequest;
  export type Output = StreamJournalToKinesisResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ResourcePreconditionNotMetException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateLedger {
  export type Input = UpdateLedgerRequest;
  export type Output = UpdateLedgerResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateLedgerPermissionsMode {
  export type Input = UpdateLedgerPermissionsModeRequest;
  export type Output = UpdateLedgerPermissionsModeResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}
