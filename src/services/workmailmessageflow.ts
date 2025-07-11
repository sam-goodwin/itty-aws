import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class WorkMailMessageFlow extends AWSServiceClient {
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

export declare class Workmailmessageflow extends WorkMailMessageFlow {}

export type errorMessage = string;

export interface GetRawMessageContentRequest {
  messageId: string;
}
export interface GetRawMessageContentResponse {
  messageContent: Uint8Array | string;
}
export declare class InvalidContentLocation extends EffectData.TaggedError(
  "InvalidContentLocation",
)<{
  readonly message?: string;
}> {}
export type messageContentBlob = Uint8Array | string;

export declare class MessageFrozen extends EffectData.TaggedError(
  "MessageFrozen",
)<{
  readonly message?: string;
}> {}
export type messageIdType = string;

export declare class MessageRejected extends EffectData.TaggedError(
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
export declare class ResourceNotFoundException extends EffectData.TaggedError(
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
