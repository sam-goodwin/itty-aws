import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class EBS extends AWSServiceClient {
  completeSnapshot(
    input: CompleteSnapshotRequest,
  ): Effect.Effect<
    CompleteSnapshotResponse,
    | AccessDeniedException
    | InternalServerException
    | RequestThrottledException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  getSnapshotBlock(
    input: GetSnapshotBlockRequest,
  ): Effect.Effect<
    GetSnapshotBlockResponse,
    | AccessDeniedException
    | InternalServerException
    | RequestThrottledException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  listChangedBlocks(
    input: ListChangedBlocksRequest,
  ): Effect.Effect<
    ListChangedBlocksResponse,
    | AccessDeniedException
    | InternalServerException
    | RequestThrottledException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  listSnapshotBlocks(
    input: ListSnapshotBlocksRequest,
  ): Effect.Effect<
    ListSnapshotBlocksResponse,
    | AccessDeniedException
    | InternalServerException
    | RequestThrottledException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  putSnapshotBlock(
    input: PutSnapshotBlockRequest,
  ): Effect.Effect<
    PutSnapshotBlockResponse,
    | AccessDeniedException
    | InternalServerException
    | RequestThrottledException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  startSnapshot(
    input: StartSnapshotRequest,
  ): Effect.Effect<
    StartSnapshotResponse,
    | AccessDeniedException
    | ConcurrentLimitExceededException
    | ConflictException
    | InternalServerException
    | RequestThrottledException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
  readonly Reason: AccessDeniedExceptionReason;
}> {}
export type AccessDeniedExceptionReason =
  | "UNAUTHORIZED_ACCOUNT"
  | "DEPENDENCY_ACCESS_DENIED";
export interface Block {
  BlockIndex?: number;
  BlockToken?: string;
}
export type BlockData = Uint8Array | string;

export type BlockIndex = number;

export type Blocks = Array<Block>;
export type BlockSize = number;

export type BlockToken = string;

export type EbsBoolean = boolean;

export interface ChangedBlock {
  BlockIndex?: number;
  FirstBlockToken?: string;
  SecondBlockToken?: string;
}
export type ChangedBlocks = Array<ChangedBlock>;
export type ChangedBlocksCount = number;

export type Checksum = string;

export type ChecksumAggregationMethod = "CHECKSUM_AGGREGATION_LINEAR";
export type ChecksumAlgorithm = "CHECKSUM_ALGORITHM_SHA256";
export interface CompleteSnapshotRequest {
  SnapshotId: string;
  ChangedBlocksCount: number;
  Checksum?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ChecksumAggregationMethod?: ChecksumAggregationMethod;
}
export interface CompleteSnapshotResponse {
  Status?: Status;
}
export declare class ConcurrentLimitExceededException extends EffectData.TaggedError(
  "ConcurrentLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export type DataLength = number;

export type Description = string;

export type ErrorMessage = string;

export interface GetSnapshotBlockRequest {
  SnapshotId: string;
  BlockIndex: number;
  BlockToken: string;
}
export interface GetSnapshotBlockResponse {
  DataLength?: number;
  BlockData?: Uint8Array | string;
  Checksum?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
}
export type IdempotencyToken = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type KmsKeyArn = string;

export interface ListChangedBlocksRequest {
  FirstSnapshotId?: string;
  SecondSnapshotId: string;
  NextToken?: string;
  MaxResults?: number;
  StartingBlockIndex?: number;
}
export interface ListChangedBlocksResponse {
  ChangedBlocks?: Array<ChangedBlock>;
  ExpiryTime?: Date | string;
  VolumeSize?: number;
  BlockSize?: number;
  NextToken?: string;
}
export interface ListSnapshotBlocksRequest {
  SnapshotId: string;
  NextToken?: string;
  MaxResults?: number;
  StartingBlockIndex?: number;
}
export interface ListSnapshotBlocksResponse {
  Blocks?: Array<Block>;
  ExpiryTime?: Date | string;
  VolumeSize?: number;
  BlockSize?: number;
  NextToken?: string;
}
export type MaxResults = number;

export type OwnerId = string;

export type PageToken = string;

export type Progress = number;

export interface PutSnapshotBlockRequest {
  SnapshotId: string;
  BlockIndex: number;
  BlockData: Uint8Array | string;
  DataLength: number;
  Progress?: number;
  Checksum: string;
  ChecksumAlgorithm: ChecksumAlgorithm;
}
export interface PutSnapshotBlockResponse {
  Checksum?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
}
export declare class RequestThrottledException extends EffectData.TaggedError(
  "RequestThrottledException",
)<{
  readonly Message?: string;
  readonly Reason?: RequestThrottledExceptionReason;
}> {}
export type RequestThrottledExceptionReason =
  | "ACCOUNT_THROTTLED"
  | "DEPENDENCY_REQUEST_THROTTLED"
  | "RESOURCE_LEVEL_THROTTLE";
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly Reason?: ResourceNotFoundExceptionReason;
}> {}
export type ResourceNotFoundExceptionReason =
  | "SNAPSHOT_NOT_FOUND"
  | "GRANT_NOT_FOUND"
  | "DEPENDENCY_RESOURCE_NOT_FOUND"
  | "IMAGE_NOT_FOUND";
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
  readonly Reason?: ServiceQuotaExceededExceptionReason;
}> {}
export type ServiceQuotaExceededExceptionReason =
  "DEPENDENCY_SERVICE_QUOTA_EXCEEDED";
export type SnapshotId = string;

export type SSEType = "SSE_EBS" | "SSE_KMS" | "NONE";
export interface StartSnapshotRequest {
  VolumeSize: number;
  ParentSnapshotId?: string;
  Tags?: Array<Tag>;
  Description?: string;
  ClientToken?: string;
  Encrypted?: boolean;
  KmsKeyArn?: string;
  Timeout?: number;
}
export interface StartSnapshotResponse {
  Description?: string;
  SnapshotId?: string;
  OwnerId?: string;
  Status?: Status;
  StartTime?: Date | string;
  VolumeSize?: number;
  BlockSize?: number;
  Tags?: Array<Tag>;
  ParentSnapshotId?: string;
  KmsKeyArn?: string;
  SseType?: SSEType;
}
export type Status = "COMPLETED" | "PENDING" | "ERROR";
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagKey = string;

export type Tags = Array<Tag>;
export type TagValue = string;

export type Timeout = number;

export type TimeStamp = Date | string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
  readonly Reason?: ValidationExceptionReason;
}> {}
export type ValidationExceptionReason =
  | "INVALID_CUSTOMER_KEY"
  | "INVALID_PAGE_TOKEN"
  | "INVALID_BLOCK_TOKEN"
  | "INVALID_GRANT_TOKEN"
  | "INVALID_SNAPSHOT_ID"
  | "UNRELATED_SNAPSHOTS"
  | "INVALID_BLOCK"
  | "INVALID_CONTENT_ENCODING"
  | "INVALID_TAG"
  | "INVALID_DEPENDENCY_REQUEST"
  | "INVALID_PARAMETER_VALUE"
  | "INVALID_VOLUME_SIZE"
  | "CONFLICTING_BLOCK_UPDATE"
  | "INVALID_IMAGE_ID"
  | "WRITE_REQUEST_TIMEOUT";
export type VolumeSize = number;

export declare namespace CompleteSnapshot {
  export type Input = CompleteSnapshotRequest;
  export type Output = CompleteSnapshotResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | RequestThrottledException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSnapshotBlock {
  export type Input = GetSnapshotBlockRequest;
  export type Output = GetSnapshotBlockResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | RequestThrottledException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListChangedBlocks {
  export type Input = ListChangedBlocksRequest;
  export type Output = ListChangedBlocksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | RequestThrottledException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSnapshotBlocks {
  export type Input = ListSnapshotBlocksRequest;
  export type Output = ListSnapshotBlocksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | RequestThrottledException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutSnapshotBlock {
  export type Input = PutSnapshotBlockRequest;
  export type Output = PutSnapshotBlockResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | RequestThrottledException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartSnapshot {
  export type Input = StartSnapshotRequest;
  export type Output = StartSnapshotResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentLimitExceededException
    | ConflictException
    | InternalServerException
    | RequestThrottledException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}
