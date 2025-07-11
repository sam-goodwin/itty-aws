import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonConnectParticipantServiceLambda {
  cancelParticipantAuthentication(
    input: CancelParticipantAuthenticationRequest,
  ): Effect.Effect<
    CancelParticipantAuthenticationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  completeAttachmentUpload(
    input: CompleteAttachmentUploadRequest,
  ): Effect.Effect<
    CompleteAttachmentUploadResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createParticipantConnection(
    input: CreateParticipantConnectionRequest,
  ): Effect.Effect<
    CreateParticipantConnectionResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeView(
    input: DescribeViewRequest,
  ): Effect.Effect<
    DescribeViewResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disconnectParticipant(
    input: DisconnectParticipantRequest,
  ): Effect.Effect<
    DisconnectParticipantResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAttachment(
    input: GetAttachmentRequest,
  ): Effect.Effect<
    GetAttachmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAuthenticationUrl(
    input: GetAuthenticationUrlRequest,
  ): Effect.Effect<
    GetAuthenticationUrlResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTranscript(
    input: GetTranscriptRequest,
  ): Effect.Effect<
    GetTranscriptResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  sendEvent(
    input: SendEventRequest,
  ): Effect.Effect<
    SendEventResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  sendMessage(
    input: SendMessageRequest,
  ): Effect.Effect<
    SendMessageResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startAttachmentUpload(
    input: StartAttachmentUploadRequest,
  ): Effect.Effect<
    StartAttachmentUploadResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type Connectparticipant = AmazonConnectParticipantServiceLambda;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export type ARN = string;

export type ArtifactId = string;

export type ArtifactStatus = "APPROVED" | "REJECTED" | "IN_PROGRESS";
export type AttachmentIdList = Array<string>;
export interface AttachmentItem {
  ContentType?: string;
  AttachmentId?: string;
  AttachmentName?: string;
  Status?: ArtifactStatus;
}
export type AttachmentName = string;

export type Attachments = Array<AttachmentItem>;
export type AttachmentSizeInBytes = number;

export type AuthenticationUrl = string;

export type Bool = boolean;

export interface CancelParticipantAuthenticationRequest {
  SessionId: string;
  ConnectionToken: string;
}
export interface CancelParticipantAuthenticationResponse {}
export type ChatContent = string;

export type ChatContentType = string;

export type ChatItemId = string;

export type ChatItemType =
  | "TYPING"
  | "PARTICIPANT_JOINED"
  | "PARTICIPANT_LEFT"
  | "CHAT_ENDED"
  | "TRANSFER_SUCCEEDED"
  | "TRANSFER_FAILED"
  | "MESSAGE"
  | "EVENT"
  | "ATTACHMENT"
  | "CONNECTION_ACK"
  | "MESSAGE_DELIVERED"
  | "MESSAGE_READ";
export type ClientToken = string;

export interface CompleteAttachmentUploadRequest {
  AttachmentIds: Array<string>;
  ClientToken: string;
  ConnectionToken: string;
}
export interface CompleteAttachmentUploadResponse {}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
}> {}
export interface ConnectionCredentials {
  ConnectionToken?: string;
  Expiry?: string;
}
export type ConnectionType = "WEBSOCKET" | "CONNECTION_CREDENTIALS";
export type ConnectionTypeList = Array<ConnectionType>;
export type ContactId = string;

export type ContentType = string;

export interface CreateParticipantConnectionRequest {
  Type?: Array<ConnectionType>;
  ParticipantToken: string;
  ConnectParticipant?: boolean;
}
export interface CreateParticipantConnectionResponse {
  Websocket?: Websocket;
  ConnectionCredentials?: ConnectionCredentials;
}
export interface DescribeViewRequest {
  ViewToken: string;
  ConnectionToken: string;
}
export interface DescribeViewResponse {
  View?: View;
}
export interface DisconnectParticipantRequest {
  ClientToken?: string;
  ConnectionToken: string;
}
export interface DisconnectParticipantResponse {}
export type DisplayName = string;

export interface GetAttachmentRequest {
  AttachmentId: string;
  ConnectionToken: string;
  UrlExpiryInSeconds?: number;
}
export interface GetAttachmentResponse {
  Url?: string;
  UrlExpiry?: string;
  AttachmentSizeInBytes: number;
}
export interface GetAuthenticationUrlRequest {
  SessionId: string;
  RedirectUri: string;
  ConnectionToken: string;
}
export interface GetAuthenticationUrlResponse {
  AuthenticationUrl?: string;
}
export interface GetTranscriptRequest {
  ContactId?: string;
  MaxResults?: number;
  NextToken?: string;
  ScanDirection?: ScanDirection;
  SortOrder?: SortKey;
  StartPosition?: StartPosition;
  ConnectionToken: string;
}
export interface GetTranscriptResponse {
  InitialContactId?: string;
  Transcript?: Array<Item>;
  NextToken?: string;
}
export type Instant = string;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export type ISO8601Datetime = string;

export interface Item {
  AbsoluteTime?: string;
  Content?: string;
  ContentType?: string;
  Id?: string;
  Type?: ChatItemType;
  ParticipantId?: string;
  DisplayName?: string;
  ParticipantRole?: ParticipantRole;
  Attachments?: Array<AttachmentItem>;
  MessageMetadata?: MessageMetadata;
  RelatedContactId?: string;
  ContactId?: string;
}
export type MaxResults = number;

export type Message = string;

export interface MessageMetadata {
  MessageId?: string;
  Receipts?: Array<Receipt>;
}
export type MostRecent = number;

export type NextToken = string;

export type NonEmptyClientToken = string;

export type ParticipantId = string;

export type ParticipantRole =
  | "AGENT"
  | "CUSTOMER"
  | "SYSTEM"
  | "CUSTOM_BOT"
  | "SUPERVISOR";
export type ParticipantToken = string;

export type PreSignedAttachmentUrl = string;

export type PreSignedConnectionUrl = string;

export type Reason = string;

export interface Receipt {
  DeliveredTimestamp?: string;
  ReadTimestamp?: string;
  RecipientParticipantId?: string;
}
export type Receipts = Array<Receipt>;
export type RedirectURI = string;

export type ResourceId = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceId?: string;
  readonly ResourceType?: ResourceType;
}> {}
export type ResourceType =
  | "CONTACT"
  | "CONTACT_FLOW"
  | "INSTANCE"
  | "PARTICIPANT"
  | "HIERARCHY_LEVEL"
  | "HIERARCHY_GROUP"
  | "USER"
  | "PHONE_NUMBER";
export type ScanDirection = "FORWARD" | "BACKWARD";
export interface SendEventRequest {
  ContentType: string;
  Content?: string;
  ClientToken?: string;
  ConnectionToken: string;
}
export interface SendEventResponse {
  Id?: string;
  AbsoluteTime?: string;
}
export interface SendMessageRequest {
  ContentType: string;
  Content: string;
  ClientToken?: string;
  ConnectionToken: string;
}
export interface SendMessageResponse {
  Id?: string;
  AbsoluteTime?: string;
}
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
}> {}
export type SessionId = string;

export type SortKey = "DESCENDING" | "ASCENDING";
export interface StartAttachmentUploadRequest {
  ContentType: string;
  AttachmentSizeInBytes: number;
  AttachmentName: string;
  ClientToken: string;
  ConnectionToken: string;
}
export interface StartAttachmentUploadResponse {
  AttachmentId?: string;
  UploadMetadata?: UploadMetadata;
}
export interface StartPosition {
  Id?: string;
  AbsoluteTime?: string;
  MostRecent?: number;
}
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
}> {}
export type Transcript = Array<Item>;
export interface UploadMetadata {
  Url?: string;
  UrlExpiry?: string;
  HeadersToInclude?: Record<string, string>;
}
export type UploadMetadataSignedHeaders = Record<string, string>;
export type UploadMetadataSignedHeadersKey = string;

export type UploadMetadataSignedHeadersValue = string;

export type UploadMetadataUrl = string;

export type URLExpiryInSeconds = number;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
}> {}
export interface View {
  Id?: string;
  Arn?: string;
  Name?: string;
  Version?: number;
  Content?: ViewContent;
}
export type ViewAction = string;

export type ViewActions = Array<string>;
export interface ViewContent {
  InputSchema?: string;
  Template?: string;
  Actions?: Array<string>;
}
export type ViewId = string;

export type ViewInputSchema = string;

export type ViewName = string;

export type ViewTemplate = string;

export type ViewToken = string;

export type ViewVersion = number;

export interface Websocket {
  Url?: string;
  ConnectionExpiry?: string;
}
export declare namespace CancelParticipantAuthentication {
  export type Input = CancelParticipantAuthenticationRequest;
  export type Output = CancelParticipantAuthenticationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CompleteAttachmentUpload {
  export type Input = CompleteAttachmentUploadRequest;
  export type Output = CompleteAttachmentUploadResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateParticipantConnection {
  export type Input = CreateParticipantConnectionRequest;
  export type Output = CreateParticipantConnectionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeView {
  export type Input = DescribeViewRequest;
  export type Output = DescribeViewResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisconnectParticipant {
  export type Input = DisconnectParticipantRequest;
  export type Output = DisconnectParticipantResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAttachment {
  export type Input = GetAttachmentRequest;
  export type Output = GetAttachmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAuthenticationUrl {
  export type Input = GetAuthenticationUrlRequest;
  export type Output = GetAuthenticationUrlResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTranscript {
  export type Input = GetTranscriptRequest;
  export type Output = GetTranscriptResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendEvent {
  export type Input = SendEventRequest;
  export type Output = SendEventResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendMessage {
  export type Input = SendMessageRequest;
  export type Output = SendMessageResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartAttachmentUpload {
  export type Input = StartAttachmentUploadRequest;
  export type Output = StartAttachmentUploadResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
