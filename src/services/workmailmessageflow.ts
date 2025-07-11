import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface GiraffeMessageInTransitService {
  getRawMessageContent(
    input: GetRawMessageContentRequest,
  ): Effect.Effect<
    GetRawMessageContentResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  putRawMessageContent(
    input: PutRawMessageContentRequest,
  ): Effect.Effect<
    PutRawMessageContentResponse,
    | InvalidContentLocation
    | MessageFrozen
    | MessageRejected
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export type Workmailmessageflow = GiraffeMessageInTransitService;

export type errorMessage = string;

export interface GetRawMessageContentRequest {
  messageId: string;
}
export interface GetRawMessageContentResponse {
  messageContent: Uint8Array | string;
}
export declare class InvalidContentLocation extends Data.TaggedError(
  "InvalidContentLocation",
)<{
  readonly message?: string;
}> {}
export type messageContentBlob = Uint8Array | string;

export declare class MessageFrozen extends Data.TaggedError("MessageFrozen")<{
  readonly message?: string;
}> {}
export type messageIdType = string;

export declare class MessageRejected extends Data.TaggedError(
  "MessageRejected",
)<{
  readonly message?: string;
}> {}
export interface PutRawMessageContentRequest {
  messageId: string;
  content: RawMessageContent;
}
export interface PutRawMessageContentResponse {}
export interface RawMessageContent {
  s3Reference: S3Reference;
}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type s3BucketIdType = string;

export type s3KeyIdType = string;

export interface S3Reference {
  bucket: string;
  key: string;
  objectVersion?: string;
}
export type s3VersionType = string;

export declare namespace GetRawMessageContent {
  export type Input = GetRawMessageContentRequest;
  export type Output = GetRawMessageContentResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace PutRawMessageContent {
  export type Input = PutRawMessageContentRequest;
  export type Output = PutRawMessageContentResponse;
  export type Error =
    | InvalidContentLocation
    | MessageFrozen
    | MessageRejected
    | ResourceNotFoundException
    | CommonAwsError;
}
