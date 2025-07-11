import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface DynamoDBStreams_20120810 {
  describeStream(
    input: DescribeStreamInput,
  ): Effect.Effect<
    DescribeStreamOutput,
    InternalServerError | ResourceNotFoundException | CommonAwsError
  >;
  getRecords(
    input: GetRecordsInput,
  ): Effect.Effect<
    GetRecordsOutput,
    | ExpiredIteratorException
    | InternalServerError
    | LimitExceededException
    | ResourceNotFoundException
    | TrimmedDataAccessException
    | CommonAwsError
  >;
  getShardIterator(
    input: GetShardIteratorInput,
  ): Effect.Effect<
    GetShardIteratorOutput,
    | InternalServerError
    | ResourceNotFoundException
    | TrimmedDataAccessException
    | CommonAwsError
  >;
  listStreams(
    input: ListStreamsInput,
  ): Effect.Effect<
    ListStreamsOutput,
    InternalServerError | ResourceNotFoundException | CommonAwsError
  >;
}

export type DynamodbStreams = DynamoDBStreams_20120810;

export type AttributeMap = Record<string, AttributeValue>;
export type AttributeName = string;

export type AttributeValue =
  | {
      S: string;
      N?: undefined;
      B?: undefined;
      SS?: undefined;
      NS?: undefined;
      BS?: undefined;
      M?: undefined;
      L?: undefined;
      NULL?: undefined;
      BOOL?: undefined;
    }
  | {
      S?: undefined;
      N: string;
      B?: undefined;
      SS?: undefined;
      NS?: undefined;
      BS?: undefined;
      M?: undefined;
      L?: undefined;
      NULL?: undefined;
      BOOL?: undefined;
    }
  | {
      S?: undefined;
      N?: undefined;
      B: Uint8Array | string;
      SS?: undefined;
      NS?: undefined;
      BS?: undefined;
      M?: undefined;
      L?: undefined;
      NULL?: undefined;
      BOOL?: undefined;
    }
  | {
      S?: undefined;
      N?: undefined;
      B?: undefined;
      SS: Array<string>;
      NS?: undefined;
      BS?: undefined;
      M?: undefined;
      L?: undefined;
      NULL?: undefined;
      BOOL?: undefined;
    }
  | {
      S?: undefined;
      N?: undefined;
      B?: undefined;
      SS?: undefined;
      NS: Array<string>;
      BS?: undefined;
      M?: undefined;
      L?: undefined;
      NULL?: undefined;
      BOOL?: undefined;
    }
  | {
      S?: undefined;
      N?: undefined;
      B?: undefined;
      SS?: undefined;
      NS?: undefined;
      BS: Array<Uint8Array | string>;
      M?: undefined;
      L?: undefined;
      NULL?: undefined;
      BOOL?: undefined;
    }
  | {
      S?: undefined;
      N?: undefined;
      B?: undefined;
      SS?: undefined;
      NS?: undefined;
      BS?: undefined;
      M: Record<string, AttributeValue>;
      L?: undefined;
      NULL?: undefined;
      BOOL?: undefined;
    }
  | {
      S?: undefined;
      N?: undefined;
      B?: undefined;
      SS?: undefined;
      NS?: undefined;
      BS?: undefined;
      M?: undefined;
      L: Array<AttributeValue>;
      NULL?: undefined;
      BOOL?: undefined;
    }
  | {
      S?: undefined;
      N?: undefined;
      B?: undefined;
      SS?: undefined;
      NS?: undefined;
      BS?: undefined;
      M?: undefined;
      L?: undefined;
      NULL: boolean;
      BOOL?: undefined;
    }
  | {
      S?: undefined;
      N?: undefined;
      B?: undefined;
      SS?: undefined;
      NS?: undefined;
      BS?: undefined;
      M?: undefined;
      L?: undefined;
      NULL?: undefined;
      BOOL: boolean;
    };
export type BinaryAttributeValue = Uint8Array | string;

export type BinarySetAttributeValue = Array<Uint8Array | string>;
export type BooleanAttributeValue = boolean;

export type DynamodbStreamsDate = Date | string;

export interface DescribeStreamInput {
  StreamArn: string;
  Limit?: number;
  ExclusiveStartShardId?: string;
}
export interface DescribeStreamOutput {
  StreamDescription?: StreamDescription;
}
export type ErrorMessage = string;

export declare class ExpiredIteratorException extends EffectData.TaggedError(
  "ExpiredIteratorException",
)<{
  readonly message?: string;
}> {}
export interface GetRecordsInput {
  ShardIterator: string;
  Limit?: number;
}
export interface GetRecordsOutput {
  Records?: Array<DynamodbStreamsRecord>;
  NextShardIterator?: string;
}
export interface GetShardIteratorInput {
  StreamArn: string;
  ShardId: string;
  ShardIteratorType: ShardIteratorType;
  SequenceNumber?: string;
}
export interface GetShardIteratorOutput {
  ShardIterator?: string;
}
export interface Identity {
  PrincipalId?: string;
  Type?: string;
}
export declare class InternalServerError extends EffectData.TaggedError(
  "InternalServerError",
)<{
  readonly message?: string;
}> {}
export type KeySchema = Array<KeySchemaElement>;
export type KeySchemaAttributeName = string;

export interface KeySchemaElement {
  AttributeName: string;
  KeyType: KeyType;
}
export type KeyType = "HASH" | "RANGE";
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export type ListAttributeValue = Array<AttributeValue>;
export interface ListStreamsInput {
  TableName?: string;
  Limit?: number;
  ExclusiveStartStreamArn?: string;
}
export interface ListStreamsOutput {
  Streams?: Array<Stream>;
  LastEvaluatedStreamArn?: string;
}
export type MapAttributeValue = Record<string, AttributeValue>;
export type NullAttributeValue = boolean;

export type NumberAttributeValue = string;

export type NumberSetAttributeValue = Array<string>;
export type OperationType = "INSERT" | "MODIFY" | "REMOVE";
export type PositiveIntegerObject = number;

export type PositiveLongObject = number;

export interface DynamodbStreamsRecord {
  eventID?: string;
  eventName?: OperationType;
  eventVersion?: string;
  eventSource?: string;
  awsRegion?: string;
  dynamodb?: StreamRecord;
  userIdentity?: Identity;
}
export type RecordList = Array<DynamodbStreamsRecord>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type SequenceNumber = string;

export interface SequenceNumberRange {
  StartingSequenceNumber?: string;
  EndingSequenceNumber?: string;
}
export interface Shard {
  ShardId?: string;
  SequenceNumberRange?: SequenceNumberRange;
  ParentShardId?: string;
}
export type ShardDescriptionList = Array<Shard>;
export type ShardId = string;

export type ShardIterator = string;

export type ShardIteratorType =
  | "TRIM_HORIZON"
  | "LATEST"
  | "AT_SEQUENCE_NUMBER"
  | "AFTER_SEQUENCE_NUMBER";
export interface Stream {
  StreamArn?: string;
  TableName?: string;
  StreamLabel?: string;
}
export type StreamArn = string;

export interface StreamDescription {
  StreamArn?: string;
  StreamLabel?: string;
  StreamStatus?: StreamStatus;
  StreamViewType?: StreamViewType;
  CreationRequestDateTime?: Date | string;
  TableName?: string;
  KeySchema?: Array<KeySchemaElement>;
  Shards?: Array<Shard>;
  LastEvaluatedShardId?: string;
}
export type StreamList = Array<Stream>;
export interface StreamRecord {
  ApproximateCreationDateTime?: Date | string;
  Keys?: Record<string, AttributeValue>;
  NewImage?: Record<string, AttributeValue>;
  OldImage?: Record<string, AttributeValue>;
  SequenceNumber?: string;
  SizeBytes?: number;
  StreamViewType?: StreamViewType;
}
export type StreamStatus = "ENABLING" | "ENABLED" | "DISABLING" | "DISABLED";
export type StreamViewType =
  | "NEW_IMAGE"
  | "OLD_IMAGE"
  | "NEW_AND_OLD_IMAGES"
  | "KEYS_ONLY";
export type DynamodbStreamsString = string;

export type StringAttributeValue = string;

export type StringSetAttributeValue = Array<string>;
export type TableName = string;

export declare class TrimmedDataAccessException extends EffectData.TaggedError(
  "TrimmedDataAccessException",
)<{
  readonly message?: string;
}> {}
export declare namespace DescribeStream {
  export type Input = DescribeStreamInput;
  export type Output = DescribeStreamOutput;
  export type Error =
    | InternalServerError
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetRecords {
  export type Input = GetRecordsInput;
  export type Output = GetRecordsOutput;
  export type Error =
    | ExpiredIteratorException
    | InternalServerError
    | LimitExceededException
    | ResourceNotFoundException
    | TrimmedDataAccessException
    | CommonAwsError;
}

export declare namespace GetShardIterator {
  export type Input = GetShardIteratorInput;
  export type Output = GetShardIteratorOutput;
  export type Error =
    | InternalServerError
    | ResourceNotFoundException
    | TrimmedDataAccessException
    | CommonAwsError;
}

export declare namespace ListStreams {
  export type Input = ListStreamsInput;
  export type Output = ListStreamsOutput;
  export type Error =
    | InternalServerError
    | ResourceNotFoundException
    | CommonAwsError;
}
