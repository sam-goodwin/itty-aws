import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AmazonSimpleNotificationService {
  addPermission(
    input: AddPermissionInput,
  ): Effect.Effect<
    {},
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | NotFoundException | CommonAwsError
  >;
  checkIfPhoneNumberIsOptedOut(
    input: CheckIfPhoneNumberIsOptedOutInput,
  ): Effect.Effect<
    CheckIfPhoneNumberIsOptedOutResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | ThrottledException | CommonAwsError
  >;
  confirmSubscription(
    input: ConfirmSubscriptionInput,
  ): Effect.Effect<
    ConfirmSubscriptionResponse,
    AuthorizationErrorException | FilterPolicyLimitExceededException | InternalErrorException | InvalidParameterException | NotFoundException | ReplayLimitExceededException | SubscriptionLimitExceededException | CommonAwsError
  >;
  createPlatformApplication(
    input: CreatePlatformApplicationInput,
  ): Effect.Effect<
    CreatePlatformApplicationResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | CommonAwsError
  >;
  createPlatformEndpoint(
    input: CreatePlatformEndpointInput,
  ): Effect.Effect<
    CreateEndpointResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | NotFoundException | CommonAwsError
  >;
  createSMSSandboxPhoneNumber(
    input: CreateSMSSandboxPhoneNumberInput,
  ): Effect.Effect<
    CreateSMSSandboxPhoneNumberResult,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | OptedOutException | ThrottledException | UserErrorException | CommonAwsError
  >;
  createTopic(
    input: CreateTopicInput,
  ): Effect.Effect<
    CreateTopicResponse,
    AuthorizationErrorException | ConcurrentAccessException | InternalErrorException | InvalidParameterException | InvalidSecurityException | StaleTagException | TagLimitExceededException | TagPolicyException | TopicLimitExceededException | CommonAwsError
  >;
  deleteEndpoint(
    input: DeleteEndpointInput,
  ): Effect.Effect<
    {},
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | CommonAwsError
  >;
  deletePlatformApplication(
    input: DeletePlatformApplicationInput,
  ): Effect.Effect<
    {},
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | CommonAwsError
  >;
  deleteSMSSandboxPhoneNumber(
    input: DeleteSMSSandboxPhoneNumberInput,
  ): Effect.Effect<
    DeleteSMSSandboxPhoneNumberResult,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | ResourceNotFoundException | ThrottledException | UserErrorException | CommonAwsError
  >;
  deleteTopic(
    input: DeleteTopicInput,
  ): Effect.Effect<
    {},
    AuthorizationErrorException | ConcurrentAccessException | InternalErrorException | InvalidParameterException | InvalidStateException | NotFoundException | StaleTagException | TagPolicyException | CommonAwsError
  >;
  getDataProtectionPolicy(
    input: GetDataProtectionPolicyInput,
  ): Effect.Effect<
    GetDataProtectionPolicyResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | InvalidSecurityException | NotFoundException | CommonAwsError
  >;
  getEndpointAttributes(
    input: GetEndpointAttributesInput,
  ): Effect.Effect<
    GetEndpointAttributesResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | NotFoundException | CommonAwsError
  >;
  getPlatformApplicationAttributes(
    input: GetPlatformApplicationAttributesInput,
  ): Effect.Effect<
    GetPlatformApplicationAttributesResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | NotFoundException | CommonAwsError
  >;
  getSMSAttributes(
    input: GetSMSAttributesInput,
  ): Effect.Effect<
    GetSMSAttributesResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | ThrottledException | CommonAwsError
  >;
  getSMSSandboxAccountStatus(
    input: GetSMSSandboxAccountStatusInput,
  ): Effect.Effect<
    GetSMSSandboxAccountStatusResult,
    AuthorizationErrorException | InternalErrorException | ThrottledException | CommonAwsError
  >;
  getSubscriptionAttributes(
    input: GetSubscriptionAttributesInput,
  ): Effect.Effect<
    GetSubscriptionAttributesResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | NotFoundException | CommonAwsError
  >;
  getTopicAttributes(
    input: GetTopicAttributesInput,
  ): Effect.Effect<
    GetTopicAttributesResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | InvalidSecurityException | NotFoundException | CommonAwsError
  >;
  listEndpointsByPlatformApplication(
    input: ListEndpointsByPlatformApplicationInput,
  ): Effect.Effect<
    ListEndpointsByPlatformApplicationResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | NotFoundException | CommonAwsError
  >;
  listOriginationNumbers(
    input: ListOriginationNumbersRequest,
  ): Effect.Effect<
    ListOriginationNumbersResult,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | ThrottledException | ValidationException | CommonAwsError
  >;
  listPhoneNumbersOptedOut(
    input: ListPhoneNumbersOptedOutInput,
  ): Effect.Effect<
    ListPhoneNumbersOptedOutResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | ThrottledException | CommonAwsError
  >;
  listPlatformApplications(
    input: ListPlatformApplicationsInput,
  ): Effect.Effect<
    ListPlatformApplicationsResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | CommonAwsError
  >;
  listSMSSandboxPhoneNumbers(
    input: ListSMSSandboxPhoneNumbersInput,
  ): Effect.Effect<
    ListSMSSandboxPhoneNumbersResult,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | ResourceNotFoundException | ThrottledException | CommonAwsError
  >;
  listSubscriptions(
    input: ListSubscriptionsInput,
  ): Effect.Effect<
    ListSubscriptionsResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | CommonAwsError
  >;
  listSubscriptionsByTopic(
    input: ListSubscriptionsByTopicInput,
  ): Effect.Effect<
    ListSubscriptionsByTopicResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | NotFoundException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AuthorizationErrorException | ConcurrentAccessException | InvalidParameterException | ResourceNotFoundException | TagPolicyException | CommonAwsError
  >;
  listTopics(
    input: ListTopicsInput,
  ): Effect.Effect<
    ListTopicsResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | CommonAwsError
  >;
  optInPhoneNumber(
    input: OptInPhoneNumberInput,
  ): Effect.Effect<
    OptInPhoneNumberResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | ThrottledException | CommonAwsError
  >;
  publish(
    input: PublishInput,
  ): Effect.Effect<
    PublishResponse,
    AuthorizationErrorException | EndpointDisabledException | InternalErrorException | InvalidParameterException | InvalidParameterValueException | InvalidSecurityException | KMSAccessDeniedException | KMSDisabledException | KMSInvalidStateException | KMSNotFoundException | KMSOptInRequired | KMSThrottlingException | NotFoundException | PlatformApplicationDisabledException | ValidationException | CommonAwsError
  >;
  publishBatch(
    input: PublishBatchInput,
  ): Effect.Effect<
    PublishBatchResponse,
    AuthorizationErrorException | BatchEntryIdsNotDistinctException | BatchRequestTooLongException | EmptyBatchRequestException | EndpointDisabledException | InternalErrorException | InvalidBatchEntryIdException | InvalidParameterException | InvalidParameterValueException | InvalidSecurityException | KMSAccessDeniedException | KMSDisabledException | KMSInvalidStateException | KMSNotFoundException | KMSOptInRequired | KMSThrottlingException | NotFoundException | PlatformApplicationDisabledException | TooManyEntriesInBatchRequestException | ValidationException | CommonAwsError
  >;
  putDataProtectionPolicy(
    input: PutDataProtectionPolicyInput,
  ): Effect.Effect<
    {},
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | InvalidSecurityException | NotFoundException | CommonAwsError
  >;
  removePermission(
    input: RemovePermissionInput,
  ): Effect.Effect<
    {},
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | NotFoundException | CommonAwsError
  >;
  setEndpointAttributes(
    input: SetEndpointAttributesInput,
  ): Effect.Effect<
    {},
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | NotFoundException | CommonAwsError
  >;
  setPlatformApplicationAttributes(
    input: SetPlatformApplicationAttributesInput,
  ): Effect.Effect<
    {},
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | NotFoundException | CommonAwsError
  >;
  setSMSAttributes(
    input: SetSMSAttributesInput,
  ): Effect.Effect<
    SetSMSAttributesResponse,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | ThrottledException | CommonAwsError
  >;
  setSubscriptionAttributes(
    input: SetSubscriptionAttributesInput,
  ): Effect.Effect<
    {},
    AuthorizationErrorException | FilterPolicyLimitExceededException | InternalErrorException | InvalidParameterException | NotFoundException | ReplayLimitExceededException | CommonAwsError
  >;
  setTopicAttributes(
    input: SetTopicAttributesInput,
  ): Effect.Effect<
    {},
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | InvalidSecurityException | NotFoundException | CommonAwsError
  >;
  subscribe(
    input: SubscribeInput,
  ): Effect.Effect<
    SubscribeResponse,
    AuthorizationErrorException | FilterPolicyLimitExceededException | InternalErrorException | InvalidParameterException | InvalidSecurityException | NotFoundException | ReplayLimitExceededException | SubscriptionLimitExceededException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AuthorizationErrorException | ConcurrentAccessException | InvalidParameterException | ResourceNotFoundException | StaleTagException | TagLimitExceededException | TagPolicyException | CommonAwsError
  >;
  unsubscribe(
    input: UnsubscribeInput,
  ): Effect.Effect<
    {},
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | InvalidSecurityException | NotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AuthorizationErrorException | ConcurrentAccessException | InvalidParameterException | ResourceNotFoundException | StaleTagException | TagLimitExceededException | TagPolicyException | CommonAwsError
  >;
  verifySMSSandboxPhoneNumber(
    input: VerifySMSSandboxPhoneNumberInput,
  ): Effect.Effect<
    VerifySMSSandboxPhoneNumberResult,
    AuthorizationErrorException | InternalErrorException | InvalidParameterException | ResourceNotFoundException | ThrottledException | VerificationException | CommonAwsError
  >;
}

export type Sns = AmazonSimpleNotificationService;

export type account = string;

export type action = string;

export type ActionsList = Array<string>;
export interface AddPermissionInput {
  TopicArn: string;
  Label: string;
  AWSAccountId: Array<string>;
  ActionName: Array<string>;
}
export type AmazonResourceName = string;

export type attributeName = string;

export type attributeValue = string;

export type authenticateOnUnsubscribe = string;

export declare class AuthorizationErrorException extends Data.TaggedError(
  "AuthorizationErrorException",
)<{
  readonly message?: string;
}> {}
export declare class BatchEntryIdsNotDistinctException extends Data.TaggedError(
  "BatchEntryIdsNotDistinctException",
)<{
  readonly message?: string;
}> {}
export declare class BatchRequestTooLongException extends Data.TaggedError(
  "BatchRequestTooLongException",
)<{
  readonly message?: string;
}> {}
export interface BatchResultErrorEntry {
  Id: string;
  Code: string;
  Message?: string;
  SenderFault: boolean;
}
export type BatchResultErrorEntryList = Array<BatchResultErrorEntry>;
export type Binary = Uint8Array | string;

export type boolean = boolean;

export interface CheckIfPhoneNumberIsOptedOutInput {
  phoneNumber: string;
}
export interface CheckIfPhoneNumberIsOptedOutResponse {
  isOptedOut?: boolean;
}
export declare class ConcurrentAccessException extends Data.TaggedError(
  "ConcurrentAccessException",
)<{
  readonly message?: string;
}> {}
export interface ConfirmSubscriptionInput {
  TopicArn: string;
  Token: string;
  AuthenticateOnUnsubscribe?: string;
}
export interface ConfirmSubscriptionResponse {
  SubscriptionArn?: string;
}
export interface CreateEndpointResponse {
  EndpointArn?: string;
}
export interface CreatePlatformApplicationInput {
  Name: string;
  Platform: string;
  Attributes: Record<string, string>;
}
export interface CreatePlatformApplicationResponse {
  PlatformApplicationArn?: string;
}
export interface CreatePlatformEndpointInput {
  PlatformApplicationArn: string;
  Token: string;
  CustomUserData?: string;
  Attributes?: Record<string, string>;
}
export interface CreateSMSSandboxPhoneNumberInput {
  PhoneNumber: string;
  LanguageCode?: LanguageCodeString;
}
export interface CreateSMSSandboxPhoneNumberResult {
}
export interface CreateTopicInput {
  Name: string;
  Attributes?: Record<string, string>;
  Tags?: Array<Tag>;
  DataProtectionPolicy?: string;
}
export interface CreateTopicResponse {
  TopicArn?: string;
}
export type delegate = string;

export type DelegatesList = Array<string>;
export interface DeleteEndpointInput {
  EndpointArn: string;
}
export interface DeletePlatformApplicationInput {
  PlatformApplicationArn: string;
}
export interface DeleteSMSSandboxPhoneNumberInput {
  PhoneNumber: string;
}
export interface DeleteSMSSandboxPhoneNumberResult {
}
export interface DeleteTopicInput {
  TopicArn: string;
}
export declare class EmptyBatchRequestException extends Data.TaggedError(
  "EmptyBatchRequestException",
)<{
  readonly message?: string;
}> {}
export interface Endpoint {
  EndpointArn?: string;
  Attributes?: Record<string, string>;
}
export type Endpoint2 = string;

export declare class EndpointDisabledException extends Data.TaggedError(
  "EndpointDisabledException",
)<{
  readonly message?: string;
}> {}
export declare class FilterPolicyLimitExceededException extends Data.TaggedError(
  "FilterPolicyLimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface GetDataProtectionPolicyInput {
  ResourceArn: string;
}
export interface GetDataProtectionPolicyResponse {
  DataProtectionPolicy?: string;
}
export interface GetEndpointAttributesInput {
  EndpointArn: string;
}
export interface GetEndpointAttributesResponse {
  Attributes?: Record<string, string>;
}
export interface GetPlatformApplicationAttributesInput {
  PlatformApplicationArn: string;
}
export interface GetPlatformApplicationAttributesResponse {
  Attributes?: Record<string, string>;
}
export interface GetSMSAttributesInput {
  attributes?: Array<string>;
}
export interface GetSMSAttributesResponse {
  attributes?: Record<string, string>;
}
export interface GetSMSSandboxAccountStatusInput {
}
export interface GetSMSSandboxAccountStatusResult {
  IsInSandbox: boolean;
}
export interface GetSubscriptionAttributesInput {
  SubscriptionArn: string;
}
export interface GetSubscriptionAttributesResponse {
  Attributes?: Record<string, string>;
}
export interface GetTopicAttributesInput {
  TopicArn: string;
}
export interface GetTopicAttributesResponse {
  Attributes?: Record<string, string>;
}
export declare class InternalErrorException extends Data.TaggedError(
  "InternalErrorException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidBatchEntryIdException extends Data.TaggedError(
  "InvalidBatchEntryIdException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterException extends Data.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterValueException extends Data.TaggedError(
  "InvalidParameterValueException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSecurityException extends Data.TaggedError(
  "InvalidSecurityException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidStateException extends Data.TaggedError(
  "InvalidStateException",
)<{
  readonly message?: string;
}> {}
export type Iso2CountryCode = string;

export declare class KMSAccessDeniedException extends Data.TaggedError(
  "KMSAccessDeniedException",
)<{
  readonly message?: string;
}> {}
export declare class KMSDisabledException extends Data.TaggedError(
  "KMSDisabledException",
)<{
  readonly message?: string;
}> {}
export declare class KMSInvalidStateException extends Data.TaggedError(
  "KMSInvalidStateException",
)<{
  readonly message?: string;
}> {}
export declare class KMSNotFoundException extends Data.TaggedError(
  "KMSNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class KMSOptInRequired extends Data.TaggedError(
  "KMSOptInRequired",
)<{
  readonly message?: string;
}> {}
export declare class KMSThrottlingException extends Data.TaggedError(
  "KMSThrottlingException",
)<{
  readonly message?: string;
}> {}
export type label = string;

export type LanguageCodeString = "en_US" | "en_GB" | "es_419" | "es_ES" | "de_DE" | "fr_CA" | "fr_FR" | "it_IT" | "jp_JP" | "pt_BR" | "kr_KR" | "zh_CN" | "zh_TW";
export interface ListEndpointsByPlatformApplicationInput {
  PlatformApplicationArn: string;
  NextToken?: string;
}
export interface ListEndpointsByPlatformApplicationResponse {
  Endpoints?: Array<Endpoint>;
  NextToken?: string;
}
export type ListOfEndpoints = Array<Endpoint>;
export type ListOfPlatformApplications = Array<PlatformApplication>;
export interface ListOriginationNumbersRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListOriginationNumbersResult {
  NextToken?: string;
  PhoneNumbers?: Array<PhoneNumberInformation>;
}
export interface ListPhoneNumbersOptedOutInput {
  nextToken?: string;
}
export interface ListPhoneNumbersOptedOutResponse {
  phoneNumbers?: Array<string>;
  nextToken?: string;
}
export interface ListPlatformApplicationsInput {
  NextToken?: string;
}
export interface ListPlatformApplicationsResponse {
  PlatformApplications?: Array<PlatformApplication>;
  NextToken?: string;
}
export interface ListSMSSandboxPhoneNumbersInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListSMSSandboxPhoneNumbersResult {
  PhoneNumbers: Array<SMSSandboxPhoneNumber>;
  NextToken?: string;
}
export type ListString = Array<string>;
export interface ListSubscriptionsByTopicInput {
  TopicArn: string;
  NextToken?: string;
}
export interface ListSubscriptionsByTopicResponse {
  Subscriptions?: Array<Subscription>;
  NextToken?: string;
}
export interface ListSubscriptionsInput {
  NextToken?: string;
}
export interface ListSubscriptionsResponse {
  Subscriptions?: Array<Subscription>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface ListTopicsInput {
  NextToken?: string;
}
export interface ListTopicsResponse {
  Topics?: Array<Topic>;
  NextToken?: string;
}
export type MapStringToString = Record<string, string>;
export type MaxItems = number;

export type MaxItemsListOriginationNumbers = number;

export type message = string;

export type MessageAttributeMap = Record<string, MessageAttributeValue>;
export interface MessageAttributeValue {
  DataType: string;
  StringValue?: string;
  BinaryValue?: Uint8Array | string;
}
export type messageId = string;

export type messageStructure = string;

export type nextToken = string;

export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
}> {}
export type NumberCapability = "SMS" | "MMS" | "VOICE";
export type NumberCapabilityList = Array<NumberCapability>;
export declare class OptedOutException extends Data.TaggedError(
  "OptedOutException",
)<{
  readonly message?: string;
}> {}
export interface OptInPhoneNumberInput {
  phoneNumber: string;
}
export interface OptInPhoneNumberResponse {
}
export type OTPCode = string;

export type PhoneNumber = string;

export interface PhoneNumberInformation {
  CreatedAt?: Date | string;
  PhoneNumber?: string;
  Status?: string;
  Iso2CountryCode?: string;
  RouteType?: RouteType;
  NumberCapabilities?: Array<NumberCapability>;
}
export type PhoneNumberInformationList = Array<PhoneNumberInformation>;
export type PhoneNumberList = Array<string>;
export type PhoneNumberString = string;

export interface PlatformApplication {
  PlatformApplicationArn?: string;
  Attributes?: Record<string, string>;
}
export declare class PlatformApplicationDisabledException extends Data.TaggedError(
  "PlatformApplicationDisabledException",
)<{
  readonly message?: string;
}> {}
export type protocol = string;

export interface PublishBatchInput {
  TopicArn: string;
  PublishBatchRequestEntries: Array<PublishBatchRequestEntry>;
}
export interface PublishBatchRequestEntry {
  Id: string;
  Message: string;
  Subject?: string;
  MessageStructure?: string;
  MessageAttributes?: Record<string, MessageAttributeValue>;
  MessageDeduplicationId?: string;
  MessageGroupId?: string;
}
export type PublishBatchRequestEntryList = Array<PublishBatchRequestEntry>;
export interface PublishBatchResponse {
  Successful?: Array<PublishBatchResultEntry>;
  Failed?: Array<BatchResultErrorEntry>;
}
export interface PublishBatchResultEntry {
  Id?: string;
  MessageId?: string;
  SequenceNumber?: string;
}
export type PublishBatchResultEntryList = Array<PublishBatchResultEntry>;
export interface PublishInput {
  TopicArn?: string;
  TargetArn?: string;
  PhoneNumber?: string;
  Message: string;
  Subject?: string;
  MessageStructure?: string;
  MessageAttributes?: Record<string, MessageAttributeValue>;
  MessageDeduplicationId?: string;
  MessageGroupId?: string;
}
export interface PublishResponse {
  MessageId?: string;
  SequenceNumber?: string;
}
export interface PutDataProtectionPolicyInput {
  ResourceArn: string;
  DataProtectionPolicy: string;
}
export interface RemovePermissionInput {
  TopicArn: string;
  Label: string;
}
export declare class ReplayLimitExceededException extends Data.TaggedError(
  "ReplayLimitExceededException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RouteType = "Transactional" | "Promotional" | "Premium";
export interface SetEndpointAttributesInput {
  EndpointArn: string;
  Attributes: Record<string, string>;
}
export interface SetPlatformApplicationAttributesInput {
  PlatformApplicationArn: string;
  Attributes: Record<string, string>;
}
export interface SetSMSAttributesInput {
  attributes: Record<string, string>;
}
export interface SetSMSAttributesResponse {
}
export interface SetSubscriptionAttributesInput {
  SubscriptionArn: string;
  AttributeName: string;
  AttributeValue?: string;
}
export interface SetTopicAttributesInput {
  TopicArn: string;
  AttributeName: string;
  AttributeValue?: string;
}
export interface SMSSandboxPhoneNumber {
  PhoneNumber?: string;
  Status?: SMSSandboxPhoneNumberVerificationStatus;
}
export type SMSSandboxPhoneNumberList = Array<SMSSandboxPhoneNumber>;
export type SMSSandboxPhoneNumberVerificationStatus = "Pending" | "Verified";
export declare class StaleTagException extends Data.TaggedError(
  "StaleTagException",
)<{
  readonly message?: string;
}> {}
export type subject = string;

export interface SubscribeInput {
  TopicArn: string;
  Protocol: string;
  Endpoint?: string;
  Attributes?: Record<string, string>;
  ReturnSubscriptionArn?: boolean;
}
export interface SubscribeResponse {
  SubscriptionArn?: string;
}
export interface Subscription {
  SubscriptionArn?: string;
  Owner?: string;
  Protocol?: string;
  Endpoint?: string;
  TopicArn?: string;
}
export type subscriptionARN = string;

export type SubscriptionAttributesMap = Record<string, string>;
export declare class SubscriptionLimitExceededException extends Data.TaggedError(
  "SubscriptionLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type SubscriptionsList = Array<Subscription>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export declare class TagLimitExceededException extends Data.TaggedError(
  "TagLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type TagList = Array<Tag>;
export declare class TagPolicyException extends Data.TaggedError(
  "TagPolicyException",
)<{
  readonly message?: string;
}> {}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export declare class ThrottledException extends Data.TaggedError(
  "ThrottledException",
)<{
  readonly message?: string;
}> {}
export type Timestamp = Date | string;

export type token = string;

export declare class TooManyEntriesInBatchRequestException extends Data.TaggedError(
  "TooManyEntriesInBatchRequestException",
)<{
  readonly message?: string;
}> {}
export interface Topic {
  TopicArn?: string;
}
export type topicARN = string;

export type TopicAttributesMap = Record<string, string>;
export declare class TopicLimitExceededException extends Data.TaggedError(
  "TopicLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type topicName = string;

export type TopicsList = Array<Topic>;
export interface UnsubscribeInput {
  SubscriptionArn: string;
}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export declare class UserErrorException extends Data.TaggedError(
  "UserErrorException",
)<{
  readonly message?: string;
}> {}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
}> {}
export declare class VerificationException extends Data.TaggedError(
  "VerificationException",
)<{
  readonly Message: string;
  readonly Status: string;
}> {}
export interface VerifySMSSandboxPhoneNumberInput {
  PhoneNumber: string;
  OneTimePassword: string;
}
export interface VerifySMSSandboxPhoneNumberResult {
}
export declare namespace AddPermission {
  export type Input = AddPermissionInput;
  export type Output = {};
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace CheckIfPhoneNumberIsOptedOut {
  export type Input = CheckIfPhoneNumberIsOptedOutInput;
  export type Output = CheckIfPhoneNumberIsOptedOutResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace ConfirmSubscription {
  export type Input = ConfirmSubscriptionInput;
  export type Output = ConfirmSubscriptionResponse;
  export type Error =
    | AuthorizationErrorException
    | FilterPolicyLimitExceededException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ReplayLimitExceededException
    | SubscriptionLimitExceededException
    | CommonAwsError;
}

export declare namespace CreatePlatformApplication {
  export type Input = CreatePlatformApplicationInput;
  export type Output = CreatePlatformApplicationResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace CreatePlatformEndpoint {
  export type Input = CreatePlatformEndpointInput;
  export type Output = CreateEndpointResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace CreateSMSSandboxPhoneNumber {
  export type Input = CreateSMSSandboxPhoneNumberInput;
  export type Output = CreateSMSSandboxPhoneNumberResult;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | OptedOutException
    | ThrottledException
    | UserErrorException
    | CommonAwsError;
}

export declare namespace CreateTopic {
  export type Input = CreateTopicInput;
  export type Output = CreateTopicResponse;
  export type Error =
    | AuthorizationErrorException
    | ConcurrentAccessException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSecurityException
    | StaleTagException
    | TagLimitExceededException
    | TagPolicyException
    | TopicLimitExceededException
    | CommonAwsError;
}

export declare namespace DeleteEndpoint {
  export type Input = DeleteEndpointInput;
  export type Output = {};
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace DeletePlatformApplication {
  export type Input = DeletePlatformApplicationInput;
  export type Output = {};
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace DeleteSMSSandboxPhoneNumber {
  export type Input = DeleteSMSSandboxPhoneNumberInput;
  export type Output = DeleteSMSSandboxPhoneNumberResult;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottledException
    | UserErrorException
    | CommonAwsError;
}

export declare namespace DeleteTopic {
  export type Input = DeleteTopicInput;
  export type Output = {};
  export type Error =
    | AuthorizationErrorException
    | ConcurrentAccessException
    | InternalErrorException
    | InvalidParameterException
    | InvalidStateException
    | NotFoundException
    | StaleTagException
    | TagPolicyException
    | CommonAwsError;
}

export declare namespace GetDataProtectionPolicy {
  export type Input = GetDataProtectionPolicyInput;
  export type Output = GetDataProtectionPolicyResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSecurityException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetEndpointAttributes {
  export type Input = GetEndpointAttributesInput;
  export type Output = GetEndpointAttributesResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetPlatformApplicationAttributes {
  export type Input = GetPlatformApplicationAttributesInput;
  export type Output = GetPlatformApplicationAttributesResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetSMSAttributes {
  export type Input = GetSMSAttributesInput;
  export type Output = GetSMSAttributesResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetSMSSandboxAccountStatus {
  export type Input = GetSMSSandboxAccountStatusInput;
  export type Output = GetSMSSandboxAccountStatusResult;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetSubscriptionAttributes {
  export type Input = GetSubscriptionAttributesInput;
  export type Output = GetSubscriptionAttributesResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetTopicAttributes {
  export type Input = GetTopicAttributesInput;
  export type Output = GetTopicAttributesResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSecurityException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListEndpointsByPlatformApplication {
  export type Input = ListEndpointsByPlatformApplicationInput;
  export type Output = ListEndpointsByPlatformApplicationResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListOriginationNumbers {
  export type Input = ListOriginationNumbersRequest;
  export type Output = ListOriginationNumbersResult;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ThrottledException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPhoneNumbersOptedOut {
  export type Input = ListPhoneNumbersOptedOutInput;
  export type Output = ListPhoneNumbersOptedOutResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace ListPlatformApplications {
  export type Input = ListPlatformApplicationsInput;
  export type Output = ListPlatformApplicationsResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace ListSMSSandboxPhoneNumbers {
  export type Input = ListSMSSandboxPhoneNumbersInput;
  export type Output = ListSMSSandboxPhoneNumbersResult;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace ListSubscriptions {
  export type Input = ListSubscriptionsInput;
  export type Output = ListSubscriptionsResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace ListSubscriptionsByTopic {
  export type Input = ListSubscriptionsByTopicInput;
  export type Output = ListSubscriptionsByTopicResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AuthorizationErrorException
    | ConcurrentAccessException
    | InvalidParameterException
    | ResourceNotFoundException
    | TagPolicyException
    | CommonAwsError;
}

export declare namespace ListTopics {
  export type Input = ListTopicsInput;
  export type Output = ListTopicsResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace OptInPhoneNumber {
  export type Input = OptInPhoneNumberInput;
  export type Output = OptInPhoneNumberResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace Publish {
  export type Input = PublishInput;
  export type Output = PublishResponse;
  export type Error =
    | AuthorizationErrorException
    | EndpointDisabledException
    | InternalErrorException
    | InvalidParameterException
    | InvalidParameterValueException
    | InvalidSecurityException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | KMSOptInRequired
    | KMSThrottlingException
    | NotFoundException
    | PlatformApplicationDisabledException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PublishBatch {
  export type Input = PublishBatchInput;
  export type Output = PublishBatchResponse;
  export type Error =
    | AuthorizationErrorException
    | BatchEntryIdsNotDistinctException
    | BatchRequestTooLongException
    | EmptyBatchRequestException
    | EndpointDisabledException
    | InternalErrorException
    | InvalidBatchEntryIdException
    | InvalidParameterException
    | InvalidParameterValueException
    | InvalidSecurityException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | KMSOptInRequired
    | KMSThrottlingException
    | NotFoundException
    | PlatformApplicationDisabledException
    | TooManyEntriesInBatchRequestException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutDataProtectionPolicy {
  export type Input = PutDataProtectionPolicyInput;
  export type Output = {};
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSecurityException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace RemovePermission {
  export type Input = RemovePermissionInput;
  export type Output = {};
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace SetEndpointAttributes {
  export type Input = SetEndpointAttributesInput;
  export type Output = {};
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace SetPlatformApplicationAttributes {
  export type Input = SetPlatformApplicationAttributesInput;
  export type Output = {};
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace SetSMSAttributes {
  export type Input = SetSMSAttributesInput;
  export type Output = SetSMSAttributesResponse;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace SetSubscriptionAttributes {
  export type Input = SetSubscriptionAttributesInput;
  export type Output = {};
  export type Error =
    | AuthorizationErrorException
    | FilterPolicyLimitExceededException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ReplayLimitExceededException
    | CommonAwsError;
}

export declare namespace SetTopicAttributes {
  export type Input = SetTopicAttributesInput;
  export type Output = {};
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSecurityException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace Subscribe {
  export type Input = SubscribeInput;
  export type Output = SubscribeResponse;
  export type Error =
    | AuthorizationErrorException
    | FilterPolicyLimitExceededException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSecurityException
    | NotFoundException
    | ReplayLimitExceededException
    | SubscriptionLimitExceededException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AuthorizationErrorException
    | ConcurrentAccessException
    | InvalidParameterException
    | ResourceNotFoundException
    | StaleTagException
    | TagLimitExceededException
    | TagPolicyException
    | CommonAwsError;
}

export declare namespace Unsubscribe {
  export type Input = UnsubscribeInput;
  export type Output = {};
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSecurityException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AuthorizationErrorException
    | ConcurrentAccessException
    | InvalidParameterException
    | ResourceNotFoundException
    | StaleTagException
    | TagLimitExceededException
    | TagPolicyException
    | CommonAwsError;
}

export declare namespace VerifySMSSandboxPhoneNumber {
  export type Input = VerifySMSSandboxPhoneNumberInput;
  export type Output = VerifySMSSandboxPhoneNumberResult;
  export type Error =
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottledException
    | VerificationException
    | CommonAwsError;
}

