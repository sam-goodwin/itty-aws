import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonSQS {
  addPermission(
    input: AddPermissionRequest,
  ): Effect.Effect<
    {},
    | InvalidAddress
    | InvalidSecurity
    | OverLimit
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
  cancelMessageMoveTask(
    input: CancelMessageMoveTaskRequest,
  ): Effect.Effect<
    CancelMessageMoveTaskResult,
    | InvalidAddress
    | InvalidSecurity
    | RequestThrottled
    | ResourceNotFoundException
    | UnsupportedOperation
    | CommonAwsError
  >;
  changeMessageVisibility(
    input: ChangeMessageVisibilityRequest,
  ): Effect.Effect<
    {},
    | InvalidAddress
    | InvalidSecurity
    | MessageNotInflight
    | QueueDoesNotExist
    | ReceiptHandleIsInvalid
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
  changeMessageVisibilityBatch(
    input: ChangeMessageVisibilityBatchRequest,
  ): Effect.Effect<
    ChangeMessageVisibilityBatchResult,
    | BatchEntryIdsNotDistinct
    | EmptyBatchRequest
    | InvalidAddress
    | InvalidBatchEntryId
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | TooManyEntriesInBatchRequest
    | UnsupportedOperation
    | CommonAwsError
  >;
  createQueue(
    input: CreateQueueRequest,
  ): Effect.Effect<
    CreateQueueResult,
    | InvalidAddress
    | InvalidAttributeName
    | InvalidAttributeValue
    | InvalidSecurity
    | QueueDeletedRecently
    | QueueNameExists
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
  deleteMessage(
    input: DeleteMessageRequest,
  ): Effect.Effect<
    {},
    | InvalidAddress
    | InvalidIdFormat
    | InvalidSecurity
    | QueueDoesNotExist
    | ReceiptHandleIsInvalid
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
  deleteMessageBatch(
    input: DeleteMessageBatchRequest,
  ): Effect.Effect<
    DeleteMessageBatchResult,
    | BatchEntryIdsNotDistinct
    | EmptyBatchRequest
    | InvalidAddress
    | InvalidBatchEntryId
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | TooManyEntriesInBatchRequest
    | UnsupportedOperation
    | CommonAwsError
  >;
  deleteQueue(
    input: DeleteQueueRequest,
  ): Effect.Effect<
    {},
    | InvalidAddress
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
  getQueueAttributes(
    input: GetQueueAttributesRequest,
  ): Effect.Effect<
    GetQueueAttributesResult,
    | InvalidAddress
    | InvalidAttributeName
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
  getQueueUrl(
    input: GetQueueUrlRequest,
  ): Effect.Effect<
    GetQueueUrlResult,
    | InvalidAddress
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
  listDeadLetterSourceQueues(
    input: ListDeadLetterSourceQueuesRequest,
  ): Effect.Effect<
    ListDeadLetterSourceQueuesResult,
    | InvalidAddress
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
  listMessageMoveTasks(
    input: ListMessageMoveTasksRequest,
  ): Effect.Effect<
    ListMessageMoveTasksResult,
    | InvalidAddress
    | InvalidSecurity
    | RequestThrottled
    | ResourceNotFoundException
    | UnsupportedOperation
    | CommonAwsError
  >;
  listQueues(
    input: ListQueuesRequest,
  ): Effect.Effect<
    ListQueuesResult,
    | InvalidAddress
    | InvalidSecurity
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
  listQueueTags(
    input: ListQueueTagsRequest,
  ): Effect.Effect<
    ListQueueTagsResult,
    | InvalidAddress
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
  purgeQueue(
    input: PurgeQueueRequest,
  ): Effect.Effect<
    {},
    | InvalidAddress
    | InvalidSecurity
    | PurgeQueueInProgress
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
  receiveMessage(
    input: ReceiveMessageRequest,
  ): Effect.Effect<
    ReceiveMessageResult,
    | InvalidAddress
    | InvalidSecurity
    | KmsAccessDenied
    | KmsDisabled
    | KmsInvalidKeyUsage
    | KmsInvalidState
    | KmsNotFound
    | KmsOptInRequired
    | KmsThrottled
    | OverLimit
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
  removePermission(
    input: RemovePermissionRequest,
  ): Effect.Effect<
    {},
    | InvalidAddress
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
  sendMessage(
    input: SendMessageRequest,
  ): Effect.Effect<
    SendMessageResult,
    | InvalidAddress
    | InvalidMessageContents
    | InvalidSecurity
    | KmsAccessDenied
    | KmsDisabled
    | KmsInvalidKeyUsage
    | KmsInvalidState
    | KmsNotFound
    | KmsOptInRequired
    | KmsThrottled
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
  sendMessageBatch(
    input: SendMessageBatchRequest,
  ): Effect.Effect<
    SendMessageBatchResult,
    | BatchEntryIdsNotDistinct
    | BatchRequestTooLong
    | EmptyBatchRequest
    | InvalidAddress
    | InvalidBatchEntryId
    | InvalidSecurity
    | KmsAccessDenied
    | KmsDisabled
    | KmsInvalidKeyUsage
    | KmsInvalidState
    | KmsNotFound
    | KmsOptInRequired
    | KmsThrottled
    | QueueDoesNotExist
    | RequestThrottled
    | TooManyEntriesInBatchRequest
    | UnsupportedOperation
    | CommonAwsError
  >;
  setQueueAttributes(
    input: SetQueueAttributesRequest,
  ): Effect.Effect<
    {},
    | InvalidAddress
    | InvalidAttributeName
    | InvalidAttributeValue
    | InvalidSecurity
    | OverLimit
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
  startMessageMoveTask(
    input: StartMessageMoveTaskRequest,
  ): Effect.Effect<
    StartMessageMoveTaskResult,
    | InvalidAddress
    | InvalidSecurity
    | RequestThrottled
    | ResourceNotFoundException
    | UnsupportedOperation
    | CommonAwsError
  >;
  tagQueue(
    input: TagQueueRequest,
  ): Effect.Effect<
    {},
    | InvalidAddress
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
  untagQueue(
    input: UntagQueueRequest,
  ): Effect.Effect<
    {},
    | InvalidAddress
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError
  >;
}

export type Sqs = AmazonSQS;

export type ActionNameList = Array<string>;
export interface AddPermissionRequest {
  QueueUrl: string;
  Label: string;
  AWSAccountIds: Array<string>;
  Actions: Array<string>;
}
export type AttributeNameList = Array<QueueAttributeName>;
export type AWSAccountIdList = Array<string>;
export declare class BatchEntryIdsNotDistinct extends Data.TaggedError(
  "BatchEntryIdsNotDistinct",
)<{
  readonly message?: string;
}> {}
export declare class BatchRequestTooLong extends Data.TaggedError(
  "BatchRequestTooLong",
)<{
  readonly message?: string;
}> {}
export interface BatchResultErrorEntry {
  Id: string;
  SenderFault: boolean;
  Code: string;
  Message?: string;
}
export type BatchResultErrorEntryList = Array<BatchResultErrorEntry>;
export type Binary = Uint8Array | string;

export type BinaryList = Array<Uint8Array | string>;
export type BoxedInteger = number;

export interface CancelMessageMoveTaskRequest {
  TaskHandle: string;
}
export interface CancelMessageMoveTaskResult {
  ApproximateNumberOfMessagesMoved?: number;
}
export interface ChangeMessageVisibilityBatchRequest {
  QueueUrl: string;
  Entries: Array<ChangeMessageVisibilityBatchRequestEntry>;
}
export interface ChangeMessageVisibilityBatchRequestEntry {
  Id: string;
  ReceiptHandle: string;
  VisibilityTimeout?: number;
}
export type ChangeMessageVisibilityBatchRequestEntryList =
  Array<ChangeMessageVisibilityBatchRequestEntry>;
export interface ChangeMessageVisibilityBatchResult {
  Successful: Array<ChangeMessageVisibilityBatchResultEntry>;
  Failed: Array<BatchResultErrorEntry>;
}
export interface ChangeMessageVisibilityBatchResultEntry {
  Id: string;
}
export type ChangeMessageVisibilityBatchResultEntryList =
  Array<ChangeMessageVisibilityBatchResultEntry>;
export interface ChangeMessageVisibilityRequest {
  QueueUrl: string;
  ReceiptHandle: string;
  VisibilityTimeout: number;
}
export interface CreateQueueRequest {
  QueueName: string;
  Attributes?: Record<QueueAttributeName, string>;
  tags?: Record<string, string>;
}
export interface CreateQueueResult {
  QueueUrl?: string;
}
export interface DeleteMessageBatchRequest {
  QueueUrl: string;
  Entries: Array<DeleteMessageBatchRequestEntry>;
}
export interface DeleteMessageBatchRequestEntry {
  Id: string;
  ReceiptHandle: string;
}
export type DeleteMessageBatchRequestEntryList =
  Array<DeleteMessageBatchRequestEntry>;
export interface DeleteMessageBatchResult {
  Successful: Array<DeleteMessageBatchResultEntry>;
  Failed: Array<BatchResultErrorEntry>;
}
export interface DeleteMessageBatchResultEntry {
  Id: string;
}
export type DeleteMessageBatchResultEntryList =
  Array<DeleteMessageBatchResultEntry>;
export interface DeleteMessageRequest {
  QueueUrl: string;
  ReceiptHandle: string;
}
export interface DeleteQueueRequest {
  QueueUrl: string;
}
export declare class EmptyBatchRequest extends Data.TaggedError(
  "EmptyBatchRequest",
)<{
  readonly message?: string;
}> {}
export type ExceptionMessage = string;

export interface GetQueueAttributesRequest {
  QueueUrl: string;
  AttributeNames?: Array<QueueAttributeName>;
}
export interface GetQueueAttributesResult {
  Attributes?: Record<QueueAttributeName, string>;
}
export interface GetQueueUrlRequest {
  QueueName: string;
  QueueOwnerAWSAccountId?: string;
}
export interface GetQueueUrlResult {
  QueueUrl?: string;
}
export declare class InvalidAddress extends Data.TaggedError("InvalidAddress")<{
  readonly message?: string;
}> {}
export declare class InvalidAttributeName extends Data.TaggedError(
  "InvalidAttributeName",
)<{
  readonly message?: string;
}> {}
export declare class InvalidAttributeValue extends Data.TaggedError(
  "InvalidAttributeValue",
)<{
  readonly message?: string;
}> {}
export declare class InvalidBatchEntryId extends Data.TaggedError(
  "InvalidBatchEntryId",
)<{
  readonly message?: string;
}> {}
export declare class InvalidIdFormat extends Data.TaggedError(
  "InvalidIdFormat",
)<{}> {}
export declare class InvalidMessageContents extends Data.TaggedError(
  "InvalidMessageContents",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSecurity extends Data.TaggedError(
  "InvalidSecurity",
)<{
  readonly message?: string;
}> {}
export declare class KmsAccessDenied extends Data.TaggedError(
  "KmsAccessDenied",
)<{
  readonly message?: string;
}> {}
export declare class KmsDisabled extends Data.TaggedError("KmsDisabled")<{
  readonly message?: string;
}> {}
export declare class KmsInvalidKeyUsage extends Data.TaggedError(
  "KmsInvalidKeyUsage",
)<{
  readonly message?: string;
}> {}
export declare class KmsInvalidState extends Data.TaggedError(
  "KmsInvalidState",
)<{
  readonly message?: string;
}> {}
export declare class KmsNotFound extends Data.TaggedError("KmsNotFound")<{
  readonly message?: string;
}> {}
export declare class KmsOptInRequired extends Data.TaggedError(
  "KmsOptInRequired",
)<{
  readonly message?: string;
}> {}
export declare class KmsThrottled extends Data.TaggedError("KmsThrottled")<{
  readonly message?: string;
}> {}
export interface ListDeadLetterSourceQueuesRequest {
  QueueUrl: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDeadLetterSourceQueuesResult {
  queueUrls: Array<string>;
  NextToken?: string;
}
export interface ListMessageMoveTasksRequest {
  SourceArn: string;
  MaxResults?: number;
}
export interface ListMessageMoveTasksResult {
  Results?: Array<ListMessageMoveTasksResultEntry>;
}
export interface ListMessageMoveTasksResultEntry {
  TaskHandle?: string;
  Status?: string;
  SourceArn?: string;
  DestinationArn?: string;
  MaxNumberOfMessagesPerSecond?: number;
  ApproximateNumberOfMessagesMoved?: number;
  ApproximateNumberOfMessagesToMove?: number;
  FailureReason?: string;
  StartedTimestamp?: number;
}
export type ListMessageMoveTasksResultEntryList =
  Array<ListMessageMoveTasksResultEntry>;
export interface ListQueuesRequest {
  QueueNamePrefix?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListQueuesResult {
  QueueUrls?: Array<string>;
  NextToken?: string;
}
export interface ListQueueTagsRequest {
  QueueUrl: string;
}
export interface ListQueueTagsResult {
  Tags?: Record<string, string>;
}
export type Long = number;

export interface Message {
  MessageId?: string;
  ReceiptHandle?: string;
  MD5OfBody?: string;
  Body?: string;
  Attributes?: Record<MessageSystemAttributeName, string>;
  MD5OfMessageAttributes?: string;
  MessageAttributes?: Record<string, MessageAttributeValue>;
}
export type MessageAttributeName = string;

export type MessageAttributeNameList = Array<string>;
export interface MessageAttributeValue {
  StringValue?: string;
  BinaryValue?: Uint8Array | string;
  StringListValues?: Array<string>;
  BinaryListValues?: Array<Uint8Array | string>;
  DataType: string;
}
export type MessageBodyAttributeMap = Record<string, MessageAttributeValue>;
export type MessageBodySystemAttributeMap = Record<
  MessageSystemAttributeNameForSends,
  MessageSystemAttributeValue
>;
export type MessageList = Array<Message>;
export declare class MessageNotInflight extends Data.TaggedError(
  "MessageNotInflight",
)<{}> {}
export type MessageSystemAttributeList = Array<MessageSystemAttributeName>;
export type MessageSystemAttributeMap = Record<
  MessageSystemAttributeName,
  string
>;
export type MessageSystemAttributeName =
  | "All"
  | "SenderId"
  | "SentTimestamp"
  | "ApproximateReceiveCount"
  | "ApproximateFirstReceiveTimestamp"
  | "SequenceNumber"
  | "MessageDeduplicationId"
  | "MessageGroupId"
  | "AWSTraceHeader"
  | "DeadLetterQueueSourceArn";
export type MessageSystemAttributeNameForSends = "AWSTraceHeader";
export interface MessageSystemAttributeValue {
  StringValue?: string;
  BinaryValue?: Uint8Array | string;
  StringListValues?: Array<string>;
  BinaryListValues?: Array<Uint8Array | string>;
  DataType: string;
}
export type NullableInteger = number;

export type NullableLong = number;

export declare class OverLimit extends Data.TaggedError("OverLimit")<{
  readonly message?: string;
}> {}
export declare class PurgeQueueInProgress extends Data.TaggedError(
  "PurgeQueueInProgress",
)<{
  readonly message?: string;
}> {}
export interface PurgeQueueRequest {
  QueueUrl: string;
}
export type QueueAttributeMap = Record<QueueAttributeName, string>;
export type QueueAttributeName =
  | "All"
  | "Policy"
  | "VisibilityTimeout"
  | "MaximumMessageSize"
  | "MessageRetentionPeriod"
  | "ApproximateNumberOfMessages"
  | "ApproximateNumberOfMessagesNotVisible"
  | "CreatedTimestamp"
  | "LastModifiedTimestamp"
  | "QueueArn"
  | "ApproximateNumberOfMessagesDelayed"
  | "DelaySeconds"
  | "ReceiveMessageWaitTimeSeconds"
  | "RedrivePolicy"
  | "FifoQueue"
  | "ContentBasedDeduplication"
  | "KmsMasterKeyId"
  | "KmsDataKeyReusePeriodSeconds"
  | "DeduplicationScope"
  | "FifoThroughputLimit"
  | "RedriveAllowPolicy"
  | "SqsManagedSseEnabled";
export declare class QueueDeletedRecently extends Data.TaggedError(
  "QueueDeletedRecently",
)<{
  readonly message?: string;
}> {}
export declare class QueueDoesNotExist extends Data.TaggedError(
  "QueueDoesNotExist",
)<{
  readonly message?: string;
}> {}
export declare class QueueNameExists extends Data.TaggedError(
  "QueueNameExists",
)<{
  readonly message?: string;
}> {}
export type QueueUrlList = Array<string>;
export declare class ReceiptHandleIsInvalid extends Data.TaggedError(
  "ReceiptHandleIsInvalid",
)<{
  readonly message?: string;
}> {}
export interface ReceiveMessageRequest {
  QueueUrl: string;
  AttributeNames?: Array<QueueAttributeName>;
  MessageSystemAttributeNames?: Array<MessageSystemAttributeName>;
  MessageAttributeNames?: Array<string>;
  MaxNumberOfMessages?: number;
  VisibilityTimeout?: number;
  WaitTimeSeconds?: number;
  ReceiveRequestAttemptId?: string;
}
export interface ReceiveMessageResult {
  Messages?: Array<Message>;
}
export interface RemovePermissionRequest {
  QueueUrl: string;
  Label: string;
}
export declare class RequestThrottled extends Data.TaggedError(
  "RequestThrottled",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface SendMessageBatchRequest {
  QueueUrl: string;
  Entries: Array<SendMessageBatchRequestEntry>;
}
export interface SendMessageBatchRequestEntry {
  Id: string;
  MessageBody: string;
  DelaySeconds?: number;
  MessageAttributes?: Record<string, MessageAttributeValue>;
  MessageSystemAttributes?: Record<
    MessageSystemAttributeNameForSends,
    MessageSystemAttributeValue
  >;
  MessageDeduplicationId?: string;
  MessageGroupId?: string;
}
export type SendMessageBatchRequestEntryList =
  Array<SendMessageBatchRequestEntry>;
export interface SendMessageBatchResult {
  Successful: Array<SendMessageBatchResultEntry>;
  Failed: Array<BatchResultErrorEntry>;
}
export interface SendMessageBatchResultEntry {
  Id: string;
  MessageId: string;
  MD5OfMessageBody: string;
  MD5OfMessageAttributes?: string;
  MD5OfMessageSystemAttributes?: string;
  SequenceNumber?: string;
}
export type SendMessageBatchResultEntryList =
  Array<SendMessageBatchResultEntry>;
export interface SendMessageRequest {
  QueueUrl: string;
  MessageBody: string;
  DelaySeconds?: number;
  MessageAttributes?: Record<string, MessageAttributeValue>;
  MessageSystemAttributes?: Record<
    MessageSystemAttributeNameForSends,
    MessageSystemAttributeValue
  >;
  MessageDeduplicationId?: string;
  MessageGroupId?: string;
}
export interface SendMessageResult {
  MD5OfMessageBody?: string;
  MD5OfMessageAttributes?: string;
  MD5OfMessageSystemAttributes?: string;
  MessageId?: string;
  SequenceNumber?: string;
}
export interface SetQueueAttributesRequest {
  QueueUrl: string;
  Attributes: Record<QueueAttributeName, string>;
}
export interface StartMessageMoveTaskRequest {
  SourceArn: string;
  DestinationArn?: string;
  MaxNumberOfMessagesPerSecond?: number;
}
export interface StartMessageMoveTaskResult {
  TaskHandle?: string;
}
export type StringList = Array<string>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagQueueRequest {
  QueueUrl: string;
  Tags: Record<string, string>;
}
export type TagValue = string;

export type Token = string;

export declare class TooManyEntriesInBatchRequest extends Data.TaggedError(
  "TooManyEntriesInBatchRequest",
)<{
  readonly message?: string;
}> {}
export declare class UnsupportedOperation extends Data.TaggedError(
  "UnsupportedOperation",
)<{
  readonly message?: string;
}> {}
export interface UntagQueueRequest {
  QueueUrl: string;
  TagKeys: Array<string>;
}
export declare namespace AddPermission {
  export type Input = AddPermissionRequest;
  export type Output = {};
  export type Error =
    | InvalidAddress
    | InvalidSecurity
    | OverLimit
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace CancelMessageMoveTask {
  export type Input = CancelMessageMoveTaskRequest;
  export type Output = CancelMessageMoveTaskResult;
  export type Error =
    | InvalidAddress
    | InvalidSecurity
    | RequestThrottled
    | ResourceNotFoundException
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace ChangeMessageVisibility {
  export type Input = ChangeMessageVisibilityRequest;
  export type Output = {};
  export type Error =
    | InvalidAddress
    | InvalidSecurity
    | MessageNotInflight
    | QueueDoesNotExist
    | ReceiptHandleIsInvalid
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace ChangeMessageVisibilityBatch {
  export type Input = ChangeMessageVisibilityBatchRequest;
  export type Output = ChangeMessageVisibilityBatchResult;
  export type Error =
    | BatchEntryIdsNotDistinct
    | EmptyBatchRequest
    | InvalidAddress
    | InvalidBatchEntryId
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | TooManyEntriesInBatchRequest
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace CreateQueue {
  export type Input = CreateQueueRequest;
  export type Output = CreateQueueResult;
  export type Error =
    | InvalidAddress
    | InvalidAttributeName
    | InvalidAttributeValue
    | InvalidSecurity
    | QueueDeletedRecently
    | QueueNameExists
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace DeleteMessage {
  export type Input = DeleteMessageRequest;
  export type Output = {};
  export type Error =
    | InvalidAddress
    | InvalidIdFormat
    | InvalidSecurity
    | QueueDoesNotExist
    | ReceiptHandleIsInvalid
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace DeleteMessageBatch {
  export type Input = DeleteMessageBatchRequest;
  export type Output = DeleteMessageBatchResult;
  export type Error =
    | BatchEntryIdsNotDistinct
    | EmptyBatchRequest
    | InvalidAddress
    | InvalidBatchEntryId
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | TooManyEntriesInBatchRequest
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace DeleteQueue {
  export type Input = DeleteQueueRequest;
  export type Output = {};
  export type Error =
    | InvalidAddress
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace GetQueueAttributes {
  export type Input = GetQueueAttributesRequest;
  export type Output = GetQueueAttributesResult;
  export type Error =
    | InvalidAddress
    | InvalidAttributeName
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace GetQueueUrl {
  export type Input = GetQueueUrlRequest;
  export type Output = GetQueueUrlResult;
  export type Error =
    | InvalidAddress
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace ListDeadLetterSourceQueues {
  export type Input = ListDeadLetterSourceQueuesRequest;
  export type Output = ListDeadLetterSourceQueuesResult;
  export type Error =
    | InvalidAddress
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace ListMessageMoveTasks {
  export type Input = ListMessageMoveTasksRequest;
  export type Output = ListMessageMoveTasksResult;
  export type Error =
    | InvalidAddress
    | InvalidSecurity
    | RequestThrottled
    | ResourceNotFoundException
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace ListQueues {
  export type Input = ListQueuesRequest;
  export type Output = ListQueuesResult;
  export type Error =
    | InvalidAddress
    | InvalidSecurity
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace ListQueueTags {
  export type Input = ListQueueTagsRequest;
  export type Output = ListQueueTagsResult;
  export type Error =
    | InvalidAddress
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace PurgeQueue {
  export type Input = PurgeQueueRequest;
  export type Output = {};
  export type Error =
    | InvalidAddress
    | InvalidSecurity
    | PurgeQueueInProgress
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace ReceiveMessage {
  export type Input = ReceiveMessageRequest;
  export type Output = ReceiveMessageResult;
  export type Error =
    | InvalidAddress
    | InvalidSecurity
    | KmsAccessDenied
    | KmsDisabled
    | KmsInvalidKeyUsage
    | KmsInvalidState
    | KmsNotFound
    | KmsOptInRequired
    | KmsThrottled
    | OverLimit
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace RemovePermission {
  export type Input = RemovePermissionRequest;
  export type Output = {};
  export type Error =
    | InvalidAddress
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace SendMessage {
  export type Input = SendMessageRequest;
  export type Output = SendMessageResult;
  export type Error =
    | InvalidAddress
    | InvalidMessageContents
    | InvalidSecurity
    | KmsAccessDenied
    | KmsDisabled
    | KmsInvalidKeyUsage
    | KmsInvalidState
    | KmsNotFound
    | KmsOptInRequired
    | KmsThrottled
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace SendMessageBatch {
  export type Input = SendMessageBatchRequest;
  export type Output = SendMessageBatchResult;
  export type Error =
    | BatchEntryIdsNotDistinct
    | BatchRequestTooLong
    | EmptyBatchRequest
    | InvalidAddress
    | InvalidBatchEntryId
    | InvalidSecurity
    | KmsAccessDenied
    | KmsDisabled
    | KmsInvalidKeyUsage
    | KmsInvalidState
    | KmsNotFound
    | KmsOptInRequired
    | KmsThrottled
    | QueueDoesNotExist
    | RequestThrottled
    | TooManyEntriesInBatchRequest
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace SetQueueAttributes {
  export type Input = SetQueueAttributesRequest;
  export type Output = {};
  export type Error =
    | InvalidAddress
    | InvalidAttributeName
    | InvalidAttributeValue
    | InvalidSecurity
    | OverLimit
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace StartMessageMoveTask {
  export type Input = StartMessageMoveTaskRequest;
  export type Output = StartMessageMoveTaskResult;
  export type Error =
    | InvalidAddress
    | InvalidSecurity
    | RequestThrottled
    | ResourceNotFoundException
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace TagQueue {
  export type Input = TagQueueRequest;
  export type Output = {};
  export type Error =
    | InvalidAddress
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}

export declare namespace UntagQueue {
  export type Input = UntagQueueRequest;
  export type Output = {};
  export type Error =
    | InvalidAddress
    | InvalidSecurity
    | QueueDoesNotExist
    | RequestThrottled
    | UnsupportedOperation
    | CommonAwsError;
}
