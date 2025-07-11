import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AmazonConnectParticipantServiceLambda {
  cancelParticipantAuthentication(
    input: CancelParticipantAuthenticationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  completeAttachmentUpload(
    input: CompleteAttachmentUploadRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createParticipantConnection(
    input: CreateParticipantConnectionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeView(
    input: DescribeViewRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disconnectParticipant(
    input: DisconnectParticipantRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAttachment(
    input: GetAttachmentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAuthenticationUrl(
    input: GetAuthenticationUrlRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getTranscript(
    input: GetTranscriptRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  sendEvent(
    input: SendEventRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  sendMessage(
    input: SendMessageRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startAttachmentUpload(
    input: StartAttachmentUploadRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type Connectparticipant = AmazonConnectParticipantServiceLambda;

export interface AccessDeniedException {
}
export type ARN = string;

export type ArtifactId = string;

export type ArtifactStatus = never;
export type AttachmentIdList = Array<unknown>;
export interface AttachmentItem {
}
export type AttachmentName = string;

export type Attachments = Array<unknown>;
export type AttachmentSizeInBytes = number;

export type AuthenticationUrl = string;

export type Bool = boolean;

export interface CancelParticipantAuthenticationRequest {
}
export interface CancelParticipantAuthenticationResponse {
}
export type ChatContent = string;

export type ChatContentType = string;

export type ChatItemId = string;

export type ChatItemType = never;
export type ClientToken = string;

export interface CompleteAttachmentUploadRequest {
}
export interface CompleteAttachmentUploadResponse {
}
export interface ConflictException {
}
export interface ConnectionCredentials {
}
export type ConnectionType = never;
export type ConnectionTypeList = Array<unknown>;
export type ContactId = string;

export type ContentType = string;

export interface CreateParticipantConnectionRequest {
}
export interface CreateParticipantConnectionResponse {
}
export interface DescribeViewRequest {
}
export interface DescribeViewResponse {
}
export interface DisconnectParticipantRequest {
}
export interface DisconnectParticipantResponse {
}
export type DisplayName = string;

export interface GetAttachmentRequest {
}
export interface GetAttachmentResponse {
}
export interface GetAuthenticationUrlRequest {
}
export interface GetAuthenticationUrlResponse {
}
export interface GetTranscriptRequest {
}
export interface GetTranscriptResponse {
}
export type Instant = string;

export interface InternalServerException {
}
export type ISO8601Datetime = string;

export interface Item {
}
export type MaxResults = number;

export type Message = string;

export interface MessageMetadata {
}
export type MostRecent = number;

export type NextToken = string;

export type NonEmptyClientToken = string;

export type ParticipantId = string;

export type ParticipantRole = never;
export type ParticipantToken = string;

export type PreSignedAttachmentUrl = string;

export type PreSignedConnectionUrl = string;

export type Reason = string;

export interface Receipt {
}
export type Receipts = Array<unknown>;
export type RedirectURI = string;

export type ResourceId = string;

export interface ResourceNotFoundException {
}
export type ResourceType = never;
export type ScanDirection = never;
export interface SendEventRequest {
}
export interface SendEventResponse {
}
export interface SendMessageRequest {
}
export interface SendMessageResponse {
}
export interface ServiceQuotaExceededException {
}
export type SessionId = string;

export type SortKey = never;
export interface StartAttachmentUploadRequest {
}
export interface StartAttachmentUploadResponse {
}
export interface StartPosition {
}
export interface ThrottlingException {
}
export type Transcript = Array<unknown>;
export interface UploadMetadata {
}
export type UploadMetadataSignedHeaders = Record<string, unknown>;
export type UploadMetadataSignedHeadersKey = string;

export type UploadMetadataSignedHeadersValue = string;

export type UploadMetadataUrl = string;

export type URLExpiryInSeconds = number;

export interface ValidationException {
}
export interface View {
}
export type ViewAction = string;

export type ViewActions = Array<unknown>;
export interface ViewContent {
}
export type ViewId = string;

export type ViewInputSchema = string;

export type ViewName = string;

export type ViewTemplate = string;

export type ViewToken = string;

export type ViewVersion = number;

export interface Websocket {
}
export declare namespace CancelParticipantAuthentication {
  export type Input = CancelParticipantAuthenticationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CompleteAttachmentUpload {
  export type Input = CompleteAttachmentUploadRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeView {
  export type Input = DescribeViewRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAttachment {
  export type Input = GetAttachmentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAuthenticationUrl {
  export type Input = GetAuthenticationUrlRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTranscript {
  export type Input = GetTranscriptRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendEvent {
  export type Input = SendEventRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartAttachmentUpload {
  export type Input = StartAttachmentUploadRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

