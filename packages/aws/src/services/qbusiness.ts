import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as stream from "effect/Stream";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "QBusiness", serviceShapeName: "ExpertQ" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "qbusiness" });
const ver = /*@__PURE__*/ T.ServiceVersion("2023-11-27");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
          if (UseFIPS === true) {
            if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
              return e(
                `https://qbusiness-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
              );
            }
            return err("FIPS is enabled but this partition does not support FIPS");
          }
          return e(
            `https://qbusiness.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://qbusiness-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        return e(`https://qbusiness.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ExternalResourceException
  extends /*@__PURE__*/ S.TaggedError<ExternalResourceException>()(
    "ExternalResourceException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(424),
  ) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class LicenseNotFoundException
  extends /*@__PURE__*/ S.TaggedError<LicenseNotFoundException>()(
    "LicenseNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class MediaTooLargeException
  extends /*@__PURE__*/ S.TaggedError<MediaTooLargeException>()(
    "MediaTooLargeException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.suspend(() => ValidationExceptionReason).annotate({
        identifier: "ValidationExceptionReason",
      }),
      fields: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFields).annotate({
          identifier: "ValidationExceptionFields",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type ApplicationId = string;
export type StatementId = string;
export type QIamAction = string;
export type QIamActions = string[];
const QIamActions = /*@__PURE__*/ __L.at(__c0, 0);
export type PermissionConditionOperator = "StringEquals" | (string & {});
const PermissionConditionOperator = S.String;

export type PermissionConditionKey = string;
export type PermissionConditionValue = string;
export type PermissionConditionValues = string[];
const PermissionConditionValues = QIamActions as any as S.Schema<PermissionConditionValues>;
export interface PermissionCondition {
  conditionOperator: PermissionConditionOperator;
  conditionKey: string;
  conditionValues: string[];
}
const PermissionCondition = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<PermissionCondition>;
export type PermissionConditions = PermissionCondition[];
const PermissionConditions = /*@__PURE__*/ __L.at(__c0, 2);
export type PrincipalRoleArn = string;
export interface AssociatePermissionRequest {
  applicationId: string;
  statementId: string;
  actions: string[];
  conditions?: PermissionCondition[];
  principal: string;
}
const AssociatePermissionRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AssociatePermissionRequest>;
export interface AssociatePermissionResponse {
  statement?: string;
}
const AssociatePermissionResponse = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<AssociatePermissionResponse>;
export type IndexId = string;
export type DocumentId = string;
export interface DeleteDocument {
  documentId: string;
}
const DeleteDocument = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<DeleteDocument>;
export type DeleteDocuments = DeleteDocument[];
const DeleteDocuments = /*@__PURE__*/ __L.at(__c0, 6);
export type ExecutionId = string;
export interface BatchDeleteDocumentRequest {
  applicationId: string;
  indexId: string;
  documents: DeleteDocument[];
  dataSourceSyncId?: string;
}
const BatchDeleteDocumentRequest = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<BatchDeleteDocumentRequest>;
export type ErrorMessage = string;
export type ErrorCode =
  | "InternalError"
  | "InvalidRequest"
  | "ResourceInactive"
  | "ResourceNotFound"
  | (string & {});
const ErrorCode = S.String;

export interface ErrorDetail {
  errorMessage?: string;
  errorCode?: ErrorCode;
}
const ErrorDetail = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<ErrorDetail>;
export type DataSourceId = string;
export interface FailedDocument {
  id?: string;
  error?: ErrorDetail;
  dataSourceId?: string;
}
const FailedDocument = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<FailedDocument>;
export type FailedDocuments = FailedDocument[];
const FailedDocuments = /*@__PURE__*/ __L.at(__c1, 2);
export interface BatchDeleteDocumentResponse {
  failedDocuments?: FailedDocument[];
}
const BatchDeleteDocumentResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<BatchDeleteDocumentResponse>;
export type DocumentAttributeKey = string;
export type DocumentAttributeStringValue = string;
export type DocumentAttributeStringListValue = string[];
const DocumentAttributeStringListValue =
  QIamActions as any as S.Schema<DocumentAttributeStringListValue>;
export type DocumentAttributeValue =
  | { stringValue: string; stringListValue?: never; longValue?: never; dateValue?: never }
  | { stringValue?: never; stringListValue: string[]; longValue?: never; dateValue?: never }
  | { stringValue?: never; stringListValue?: never; longValue: number; dateValue?: never }
  | { stringValue?: never; stringListValue?: never; longValue?: never; dateValue: Date };
const DocumentAttributeValue = /*@__PURE__*/ __L.at(__c1, 4);
export interface DocumentAttribute {
  name: string;
  value: DocumentAttributeValue;
}
const DocumentAttribute = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<DocumentAttribute>;
export type DocumentAttributes = DocumentAttribute[];
const DocumentAttributes = /*@__PURE__*/ __L.at(__c1, 6);
export type S3BucketName = string;
export type S3ObjectKey = string;
export interface S3 {
  bucket: string;
  key: string;
}
const S3 = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<S3>;
export type DocumentContent = { blob: Uint8Array; s3?: never } | { blob?: never; s3: S3 };
const DocumentContent = /*@__PURE__*/ __L.at(__c2, 0);
export type ContentType =
  | "PDF"
  | "HTML"
  | "MS_WORD"
  | "PLAIN_TEXT"
  | "PPT"
  | "RTF"
  | "XML"
  | "XSLT"
  | "MS_EXCEL"
  | "CSV"
  | "JSON"
  | "MD"
  | (string & {});
const ContentType = S.String;

export type Title = string;
export type UserId = string;
export type ReadAccessType = "ALLOW" | "DENY" | (string & {});
const ReadAccessType = S.String;

export type MembershipType = "INDEX" | "DATASOURCE" | (string & {});
const MembershipType = S.String;

export interface PrincipalUser {
  id?: string;
  access: ReadAccessType;
  membershipType?: MembershipType;
}
const PrincipalUser = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<PrincipalUser>;
export type GroupName = string;
export interface PrincipalGroup {
  name?: string;
  access: ReadAccessType;
  membershipType?: MembershipType;
}
const PrincipalGroup = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<PrincipalGroup>;
export type Principal =
  | { user: PrincipalUser; group?: never }
  | { user?: never; group: PrincipalGroup };
const Principal = /*@__PURE__*/ __L.at(__c2, 3);
export type Principals = Principal[];
const Principals = /*@__PURE__*/ __L.at(__c2, 4);
export type MemberRelation = "AND" | "OR" | (string & {});
const MemberRelation = S.String;

export interface AccessControl {
  principals: Principal[];
  memberRelation?: MemberRelation;
}
const AccessControl = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<AccessControl>;
export type AccessControls = AccessControl[];
const AccessControls = /*@__PURE__*/ __L.at(__c2, 6);
export interface AccessConfiguration {
  accessControls: AccessControl[];
  memberRelation?: MemberRelation;
}
const AccessConfiguration = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<AccessConfiguration>;
export type DocumentEnrichmentConditionOperator =
  | "GREATER_THAN"
  | "GREATER_THAN_OR_EQUALS"
  | "LESS_THAN"
  | "LESS_THAN_OR_EQUALS"
  | "EQUALS"
  | "NOT_EQUALS"
  | "CONTAINS"
  | "NOT_CONTAINS"
  | "EXISTS"
  | "NOT_EXISTS"
  | "BEGINS_WITH"
  | (string & {});
const DocumentEnrichmentConditionOperator = S.String;

export interface DocumentAttributeCondition {
  key: string;
  operator: DocumentEnrichmentConditionOperator;
  value?: DocumentAttributeValue;
}
const DocumentAttributeCondition = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<DocumentAttributeCondition>;
export type AttributeValueOperator = "DELETE" | (string & {});
const AttributeValueOperator = S.String;

export interface DocumentAttributeTarget {
  key: string;
  value?: DocumentAttributeValue;
  attributeValueOperator?: AttributeValueOperator;
}
const DocumentAttributeTarget = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<DocumentAttributeTarget>;
export type DocumentContentOperator = "DELETE" | (string & {});
const DocumentContentOperator = S.String;

export interface InlineDocumentEnrichmentConfiguration {
  condition?: DocumentAttributeCondition;
  target?: DocumentAttributeTarget;
  documentContentOperator?: DocumentContentOperator;
}
const InlineDocumentEnrichmentConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<InlineDocumentEnrichmentConfiguration>;
export type InlineDocumentEnrichmentConfigurations = InlineDocumentEnrichmentConfiguration[];
const InlineDocumentEnrichmentConfigurations = /*@__PURE__*/ __L.at(__c3, 3);
export type LambdaArn = string;
export type RoleArn = string;
export interface HookConfiguration {
  invocationCondition?: DocumentAttributeCondition;
  lambdaArn?: string;
  s3BucketName?: string;
  roleArn?: string;
}
const HookConfiguration = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<HookConfiguration>;
export interface DocumentEnrichmentConfiguration {
  inlineConfigurations?: InlineDocumentEnrichmentConfiguration[];
  preExtractionHookConfiguration?: HookConfiguration;
  postExtractionHookConfiguration?: HookConfiguration;
}
const DocumentEnrichmentConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<DocumentEnrichmentConfiguration>;
export type ImageExtractionStatus = "ENABLED" | "DISABLED" | (string & {});
const ImageExtractionStatus = S.String;

export interface ImageExtractionConfiguration {
  imageExtractionStatus: ImageExtractionStatus;
}
const ImageExtractionConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<ImageExtractionConfiguration>;
export type AudioExtractionStatus = "ENABLED" | "DISABLED" | (string & {});
const AudioExtractionStatus = S.String;

export interface AudioExtractionConfiguration {
  audioExtractionStatus: AudioExtractionStatus;
}
const AudioExtractionConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<AudioExtractionConfiguration>;
export type VideoExtractionStatus = "ENABLED" | "DISABLED" | (string & {});
const VideoExtractionStatus = S.String;

export interface VideoExtractionConfiguration {
  videoExtractionStatus: VideoExtractionStatus;
}
const VideoExtractionConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<VideoExtractionConfiguration>;
export interface MediaExtractionConfiguration {
  imageExtractionConfiguration?: ImageExtractionConfiguration;
  audioExtractionConfiguration?: AudioExtractionConfiguration;
  videoExtractionConfiguration?: VideoExtractionConfiguration;
}
const MediaExtractionConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<MediaExtractionConfiguration>;
export interface Document {
  id: string;
  attributes?: DocumentAttribute[];
  content?: DocumentContent;
  contentType?: ContentType;
  title?: string;
  accessConfiguration?: AccessConfiguration;
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
  mediaExtractionConfiguration?: MediaExtractionConfiguration;
}
const Document = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<Document>;
export type Documents = Document[];
const Documents = /*@__PURE__*/ __L.at(__c4, 3);
export interface BatchPutDocumentRequest {
  applicationId: string;
  indexId: string;
  documents: Document[];
  roleArn?: string;
  dataSourceSyncId?: string;
}
const BatchPutDocumentRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<BatchPutDocumentRequest>;
export interface BatchPutDocumentResponse {
  failedDocuments?: FailedDocument[];
}
const BatchPutDocumentResponse = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<BatchPutDocumentResponse>;
export type SubscriptionId = string;
export interface CancelSubscriptionRequest {
  applicationId: string;
  subscriptionId: string;
}
const CancelSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<CancelSubscriptionRequest>;
export type SubscriptionArn = string;
export type SubscriptionType = "Q_LITE" | "Q_BUSINESS" | (string & {});
const SubscriptionType = S.String;

export interface SubscriptionDetails {
  type?: SubscriptionType;
}
const SubscriptionDetails = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<SubscriptionDetails>;
export interface CancelSubscriptionResponse {
  subscriptionArn?: string;
  currentSubscription?: SubscriptionDetails;
  nextSubscription?: SubscriptionDetails;
}
const CancelSubscriptionResponse = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<CancelSubscriptionResponse>;
export type UserGroups = string[];
const UserGroups = QIamActions as any as S.Schema<UserGroups>;
export type ConversationId = string;
export type MessageId = string;
export type ClientToken = string;
export type ChatMode = "RETRIEVAL_MODE" | "CREATOR_MODE" | "PLUGIN_MODE" | (string & {});
const ChatMode = S.String;

export type PluginId = string;
export interface PluginConfiguration {
  pluginId: string;
}
const PluginConfiguration = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<PluginConfiguration>;
export type ChatModeConfiguration = { pluginConfiguration: PluginConfiguration };
const ChatModeConfiguration = /*@__PURE__*/ __L.at(__c5, 2);
export type AttributeFilters = AttributeFilter[];
const AttributeFilters = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<AttributeFilters>;
export interface AttributeFilter {
  andAllFilters?: AttributeFilter[];
  orAllFilters?: AttributeFilter[];
  notFilter?: AttributeFilter;
  equalsTo?: DocumentAttribute;
  containsAll?: DocumentAttribute;
  containsAny?: DocumentAttribute;
  greaterThan?: DocumentAttribute;
  greaterThanOrEquals?: DocumentAttribute;
  lessThan?: DocumentAttribute;
  lessThanOrEquals?: DocumentAttribute;
}
const AttributeFilter = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<AttributeFilter>;
export interface ConfigurationEvent {
  chatMode?: ChatMode;
  chatModeConfiguration?: ChatModeConfiguration;
  attributeFilter?: AttributeFilter;
}
const ConfigurationEvent = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<ConfigurationEvent>;
export type UserMessage = string;
export interface TextInputEvent {
  userMessage: string;
}
const TextInputEvent = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<TextInputEvent>;
export type AttachmentName = string;
export type AttachmentId = string;
export interface ConversationSource {
  conversationId: string;
  attachmentId: string;
}
const ConversationSource = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<ConversationSource>;
export type CopyFromSource = { conversation: ConversationSource };
const CopyFromSource = /*@__PURE__*/ __L.at(__c6, 0);
export interface AttachmentInput {
  data?: Uint8Array;
  name?: string;
  copyFrom?: CopyFromSource;
}
const AttachmentInput = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<AttachmentInput>;
export interface AttachmentInputEvent {
  attachment?: AttachmentInput;
}
const AttachmentInputEvent = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<AttachmentInputEvent>;
export type ActionPayloadFieldKey = string;
export type ActionPayloadFieldValue = unknown;
export interface ActionExecutionPayloadField {
  value: any;
}
const ActionExecutionPayloadField = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<ActionExecutionPayloadField>;
export type ActionExecutionPayload = { [key: string]: ActionExecutionPayloadField | undefined };
const ActionExecutionPayload = /*@__PURE__*/ __L.at(__c6, 4);
export type ActionPayloadFieldNameSeparator = string;
export interface ActionExecutionEvent {
  pluginId: string;
  payload: { [key: string]: ActionExecutionPayloadField | undefined };
  payloadFieldNameSeparator: string;
}
const ActionExecutionEvent = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<ActionExecutionEvent>;
export interface EndOfInputEvent {}
const EndOfInputEvent = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<EndOfInputEvent>;
export type AuthResponseKey = string;
export type AuthResponseValue = string;
export type AuthorizationResponseMap = { [key: string]: string | undefined };
const AuthorizationResponseMap = /*@__PURE__*/ __L.at(__c6, 7);
export interface AuthChallengeResponseEvent {
  responseMap: { [key: string]: string | undefined };
}
const AuthChallengeResponseEvent = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<AuthChallengeResponseEvent>;
export type ChatInputStream =
  | {
      configurationEvent: ConfigurationEvent;
      textEvent?: never;
      attachmentEvent?: never;
      actionExecutionEvent?: never;
      endOfInputEvent?: never;
      authChallengeResponseEvent?: never;
    }
  | {
      configurationEvent?: never;
      textEvent: TextInputEvent;
      attachmentEvent?: never;
      actionExecutionEvent?: never;
      endOfInputEvent?: never;
      authChallengeResponseEvent?: never;
    }
  | {
      configurationEvent?: never;
      textEvent?: never;
      attachmentEvent: AttachmentInputEvent;
      actionExecutionEvent?: never;
      endOfInputEvent?: never;
      authChallengeResponseEvent?: never;
    }
  | {
      configurationEvent?: never;
      textEvent?: never;
      attachmentEvent?: never;
      actionExecutionEvent: ActionExecutionEvent;
      endOfInputEvent?: never;
      authChallengeResponseEvent?: never;
    }
  | {
      configurationEvent?: never;
      textEvent?: never;
      attachmentEvent?: never;
      actionExecutionEvent?: never;
      endOfInputEvent: EndOfInputEvent;
      authChallengeResponseEvent?: never;
    }
  | {
      configurationEvent?: never;
      textEvent?: never;
      attachmentEvent?: never;
      actionExecutionEvent?: never;
      endOfInputEvent?: never;
      authChallengeResponseEvent: AuthChallengeResponseEvent;
    };
const ChatInputStream = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<
  stream.Stream<ChatInputStream, Error, never>
>;
export interface ChatInput {
  applicationId: string;
  userId?: string;
  userGroups?: string[];
  conversationId?: string;
  parentMessageId?: string;
  clientToken?: string;
  inputStream?: stream.Stream<ChatInputStream, Error, never>;
}
const ChatInput = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<ChatInput>;
export type SystemMessageType = "RESPONSE" | "GROUNDED_RESPONSE" | (string & {});
const SystemMessageType = S.String;

export interface TextOutputEvent {
  systemMessageType?: SystemMessageType;
  conversationId?: string;
  userMessageId?: string;
  systemMessageId?: string;
  systemMessage?: string;
}
const TextOutputEvent = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<TextOutputEvent>;
export type SnippetExcerptText = string;
export interface SnippetExcerpt {
  text?: string;
}
const SnippetExcerpt = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<SnippetExcerpt>;
export type SourceAttributionMediaId = string;
export type MediaId = string;
export interface ImageSourceDetails {
  mediaId?: string;
  mediaMimeType?: string;
}
const ImageSourceDetails = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<ImageSourceDetails>;
export type AudioExtractionType = "TRANSCRIPT" | "SUMMARY" | (string & {});
const AudioExtractionType = S.String;

export interface AudioSourceDetails {
  mediaId?: string;
  mediaMimeType?: string;
  startTimeMilliseconds?: number;
  endTimeMilliseconds?: number;
  audioExtractionType?: AudioExtractionType;
}
const AudioSourceDetails = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<AudioSourceDetails>;
export type VideoExtractionType = "TRANSCRIPT" | "SUMMARY" | (string & {});
const VideoExtractionType = S.String;

export interface VideoSourceDetails {
  mediaId?: string;
  mediaMimeType?: string;
  startTimeMilliseconds?: number;
  endTimeMilliseconds?: number;
  videoExtractionType?: VideoExtractionType;
}
const VideoSourceDetails = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<VideoSourceDetails>;
export type SourceDetails =
  | {
      imageSourceDetails: ImageSourceDetails;
      audioSourceDetails?: never;
      videoSourceDetails?: never;
    }
  | {
      imageSourceDetails?: never;
      audioSourceDetails: AudioSourceDetails;
      videoSourceDetails?: never;
    }
  | {
      imageSourceDetails?: never;
      audioSourceDetails?: never;
      videoSourceDetails: VideoSourceDetails;
    };
const SourceDetails = /*@__PURE__*/ __L.at(__c8, 0);
export interface TextSegment {
  beginOffset?: number;
  endOffset?: number;
  snippetExcerpt?: SnippetExcerpt;
  mediaId?: string;
  mediaMimeType?: string;
  sourceDetails?: SourceDetails;
}
const TextSegment = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<TextSegment>;
export type TextSegmentList = TextSegment[];
const TextSegmentList = /*@__PURE__*/ __L.at(__c8, 2);
export interface SourceAttribution {
  title?: string;
  snippet?: string;
  url?: string;
  citationNumber?: number;
  updatedAt?: Date;
  textMessageSegments?: TextSegment[];
  documentId?: string;
  indexId?: string;
  datasourceId?: string;
}
const SourceAttribution = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<SourceAttribution>;
export type SourceAttributions = SourceAttribution[];
const SourceAttributions = /*@__PURE__*/ __L.at(__c8, 4);
export interface MetadataEvent {
  conversationId?: string;
  userMessageId?: string;
  systemMessageId?: string;
  sourceAttributions?: SourceAttribution[];
  finalTextMessage?: string;
}
const MetadataEvent = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<MetadataEvent>;
export type PluginType =
  | "SERVICE_NOW"
  | "SALESFORCE"
  | "JIRA"
  | "ZENDESK"
  | "CUSTOM"
  | "QUICKSIGHT"
  | "SERVICENOW_NOW_PLATFORM"
  | "JIRA_CLOUD"
  | "SALESFORCE_CRM"
  | "ZENDESK_SUITE"
  | "ATLASSIAN_CONFLUENCE"
  | "GOOGLE_CALENDAR"
  | "MICROSOFT_TEAMS"
  | "MICROSOFT_EXCHANGE"
  | "PAGERDUTY_ADVANCE"
  | "SMARTSHEET"
  | "ASANA"
  | (string & {});
const PluginType = S.String;

export type ActionPayloadFieldType = "STRING" | "NUMBER" | "ARRAY" | "BOOLEAN" | (string & {});
const ActionPayloadFieldType = S.String;

export interface ActionReviewPayloadFieldAllowedValue {
  value?: any;
  displayValue?: any;
}
const ActionReviewPayloadFieldAllowedValue = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<ActionReviewPayloadFieldAllowedValue>;
export type ActionReviewPayloadFieldAllowedValues = ActionReviewPayloadFieldAllowedValue[];
const ActionReviewPayloadFieldAllowedValues = /*@__PURE__*/ __L.at(__c8, 7);
export type ActionReviewPayloadFieldArrayItemJsonSchema = unknown;
export interface ActionReviewPayloadField {
  displayName?: string;
  displayOrder?: number;
  displayDescription?: string;
  type?: ActionPayloadFieldType;
  value?: any;
  allowedValues?: ActionReviewPayloadFieldAllowedValue[];
  allowedFormat?: string;
  arrayItemJsonSchema?: any;
  required?: boolean;
}
const ActionReviewPayloadField = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<ActionReviewPayloadField>;
export type ActionReviewPayload = { [key: string]: ActionReviewPayloadField | undefined };
const ActionReviewPayload = /*@__PURE__*/ __L.at(__c9, 1);
export interface ActionReviewEvent {
  conversationId?: string;
  userMessageId?: string;
  systemMessageId?: string;
  pluginId?: string;
  pluginType?: PluginType;
  payload?: { [key: string]: ActionReviewPayloadField | undefined };
  payloadFieldNameSeparator?: string;
}
const ActionReviewEvent = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<ActionReviewEvent>;
export type AttachmentStatus = "FAILED" | "SUCCESS" | (string & {});
const AttachmentStatus = S.String;

export interface AttachmentOutput {
  name?: string;
  status?: AttachmentStatus;
  error?: ErrorDetail;
  attachmentId?: string;
  conversationId?: string;
}
const AttachmentOutput = /*@__PURE__*/ __L.at(__c9, 3) as any as S.Schema<AttachmentOutput>;
export interface FailedAttachmentEvent {
  conversationId?: string;
  userMessageId?: string;
  systemMessageId?: string;
  attachment?: AttachmentOutput;
}
const FailedAttachmentEvent = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<FailedAttachmentEvent>;
export type Url = string;
export interface AuthChallengeRequestEvent {
  authorizationUrl: string;
}
const AuthChallengeRequestEvent = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<AuthChallengeRequestEvent>;
export type ChatOutputStream =
  | {
      textEvent: TextOutputEvent;
      metadataEvent?: never;
      actionReviewEvent?: never;
      failedAttachmentEvent?: never;
      authChallengeRequestEvent?: never;
    }
  | {
      textEvent?: never;
      metadataEvent: MetadataEvent;
      actionReviewEvent?: never;
      failedAttachmentEvent?: never;
      authChallengeRequestEvent?: never;
    }
  | {
      textEvent?: never;
      metadataEvent?: never;
      actionReviewEvent: ActionReviewEvent;
      failedAttachmentEvent?: never;
      authChallengeRequestEvent?: never;
    }
  | {
      textEvent?: never;
      metadataEvent?: never;
      actionReviewEvent?: never;
      failedAttachmentEvent: FailedAttachmentEvent;
      authChallengeRequestEvent?: never;
    }
  | {
      textEvent?: never;
      metadataEvent?: never;
      actionReviewEvent?: never;
      failedAttachmentEvent?: never;
      authChallengeRequestEvent: AuthChallengeRequestEvent;
    };
const ChatOutputStream = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<
  stream.Stream<ChatOutputStream, Error, never>
>;
export interface ChatOutput {
  outputStream?: stream.Stream<ChatOutputStream, Error, never>;
}
const ChatOutput = /*@__PURE__*/ __L.at(__c9, 7) as any as S.Schema<ChatOutput>;
export type AttachmentsInput = AttachmentInput[];
const AttachmentsInput = /*@__PURE__*/ __L.at(__c10, 0);
export interface ActionExecution {
  pluginId: string;
  payload: { [key: string]: ActionExecutionPayloadField | undefined };
  payloadFieldNameSeparator: string;
}
const ActionExecution = ActionExecutionEvent as any as S.Schema<ActionExecution>;
export interface AuthChallengeResponse {
  responseMap: { [key: string]: string | undefined };
}
const AuthChallengeResponse = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<AuthChallengeResponse>;
export interface ChatSyncInput {
  applicationId: string;
  userId?: string;
  userGroups?: string[];
  userMessage?: string;
  attachments?: AttachmentInput[];
  actionExecution?: ActionExecution;
  authChallengeResponse?: AuthChallengeResponse;
  conversationId?: string;
  parentMessageId?: string;
  attributeFilter?: AttributeFilter;
  chatMode?: ChatMode;
  chatModeConfiguration?: ChatModeConfiguration;
  clientToken?: string;
}
const ChatSyncInput = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<ChatSyncInput>;
export interface ActionReview {
  pluginId?: string;
  pluginType?: PluginType;
  payload?: { [key: string]: ActionReviewPayloadField | undefined };
  payloadFieldNameSeparator?: string;
}
const ActionReview = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<ActionReview>;
export interface AuthChallengeRequest {
  authorizationUrl: string;
}
const AuthChallengeRequest = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<AuthChallengeRequest>;
export type AttachmentsOutput = AttachmentOutput[];
const AttachmentsOutput = /*@__PURE__*/ __L.at(__c10, 5);
export interface ChatSyncOutput {
  conversationId?: string;
  systemMessage?: string;
  systemMessageId?: string;
  userMessageId?: string;
  actionReview?: ActionReview;
  authChallengeRequest?: AuthChallengeRequest;
  sourceAttributions?: SourceAttribution[];
  failedAttachments?: AttachmentOutput[];
}
const ChatSyncOutput = /*@__PURE__*/ __L.at(__c10, 6) as any as S.Schema<ChatSyncOutput>;
export interface CheckDocumentAccessRequest {
  applicationId: string;
  indexId: string;
  userId: string;
  documentId: string;
  dataSourceId?: string;
}
const CheckDocumentAccessRequest = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<CheckDocumentAccessRequest>;
export interface AssociatedGroup {
  name?: string;
  type?: MembershipType;
}
const AssociatedGroup = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<AssociatedGroup>;
export type AssociatedGroups = AssociatedGroup[];
const AssociatedGroups = /*@__PURE__*/ __L.at(__c11, 1);
export interface AssociatedUser {
  id?: string;
  type?: MembershipType;
}
const AssociatedUser = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<AssociatedUser>;
export type AssociatedUsers = AssociatedUser[];
const AssociatedUsers = /*@__PURE__*/ __L.at(__c11, 3);
export interface DocumentAclUser {
  id?: string;
  type?: MembershipType;
}
export type DocumentAclUsers = DocumentAclUser[];
const DocumentAclUsers = AssociatedUsers as any as S.Schema<DocumentAclUsers>;
export interface DocumentAclGroup {
  name?: string;
  type?: MembershipType;
}
export type DocumentAclGroups = DocumentAclGroup[];
const DocumentAclGroups = AssociatedGroups as any as S.Schema<DocumentAclGroups>;
export interface DocumentAclCondition {
  memberRelation?: MemberRelation;
  users?: DocumentAclUser[];
  groups?: DocumentAclGroup[];
}
const DocumentAclCondition = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<DocumentAclCondition>;
export type DocumentAclConditions = DocumentAclCondition[];
const DocumentAclConditions = /*@__PURE__*/ __L.at(__c11, 5);
export interface DocumentAclMembership {
  memberRelation?: MemberRelation;
  conditions?: DocumentAclCondition[];
}
const DocumentAclMembership = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<DocumentAclMembership>;
export interface DocumentAcl {
  allowlist?: DocumentAclMembership;
  denyList?: DocumentAclMembership;
}
const DocumentAcl = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<DocumentAcl>;
export interface CheckDocumentAccessResponse {
  userGroups?: AssociatedGroup[];
  userAliases?: AssociatedUser[];
  hasAccess?: boolean;
  documentAcl?: DocumentAcl;
}
const CheckDocumentAccessResponse = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<CheckDocumentAccessResponse>;
export type WebExperienceId = string;
export type SessionDurationInMinutes = number;
export interface CreateAnonymousWebExperienceUrlRequest {
  applicationId: string;
  webExperienceId: string;
  sessionDurationInMinutes?: number;
}
const CreateAnonymousWebExperienceUrlRequest = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<CreateAnonymousWebExperienceUrlRequest>;
export interface CreateAnonymousWebExperienceUrlResponse {
  anonymousUrl?: string;
}
const CreateAnonymousWebExperienceUrlResponse = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<CreateAnonymousWebExperienceUrlResponse>;
export type ApplicationName = string;
export type IdentityType =
  | "AWS_IAM_IDP_SAML"
  | "AWS_IAM_IDP_OIDC"
  | "AWS_IAM_IDC"
  | "AWS_QUICKSIGHT_IDP"
  | "ANONYMOUS"
  | (string & {});
const IdentityType = S.String;

export type IAMIdentityProviderArn = string;
export type InstanceArn = string;
export type ClientIdForOIDC = string;
export type ClientIdsForOIDC = string[];
const ClientIdsForOIDC = QIamActions as any as S.Schema<ClientIdsForOIDC>;
export type Description = string;
export type KmsKeyId = string | redacted.Redacted<string>;
export interface EncryptionConfiguration {
  kmsKeyId?: string | redacted.Redacted<string>;
}
const EncryptionConfiguration = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<EncryptionConfiguration>;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c12, 4) as any as S.Schema<Tag>;
export type Tags = Tag[];
const Tags = /*@__PURE__*/ __L.at(__c12, 5);
export type AttachmentsControlMode = "ENABLED" | "DISABLED" | (string & {});
const AttachmentsControlMode = S.String;

export interface AttachmentsConfiguration {
  attachmentsControlMode: AttachmentsControlMode;
}
const AttachmentsConfiguration = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<AttachmentsConfiguration>;
export type QAppsControlMode = "ENABLED" | "DISABLED" | (string & {});
const QAppsControlMode = S.String;

export interface QAppsConfiguration {
  qAppsControlMode: QAppsControlMode;
}
const QAppsConfiguration = /*@__PURE__*/ __L.at(__c12, 7) as any as S.Schema<QAppsConfiguration>;
export type PersonalizationControlMode = "ENABLED" | "DISABLED" | (string & {});
const PersonalizationControlMode = S.String;

export interface PersonalizationConfiguration {
  personalizationControlMode: PersonalizationControlMode;
}
const PersonalizationConfiguration = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<PersonalizationConfiguration>;
export type ClientNamespace = string;
export interface QuickSightConfiguration {
  clientNamespace: string;
}
const QuickSightConfiguration = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<QuickSightConfiguration>;
export interface CreateApplicationRequest {
  displayName: string;
  roleArn?: string;
  identityType?: IdentityType;
  iamIdentityProviderArn?: string;
  identityCenterInstanceArn?: string;
  clientIdsForOIDC?: string[];
  description?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  tags?: Tag[];
  clientToken?: string;
  attachmentsConfiguration?: AttachmentsConfiguration;
  qAppsConfiguration?: QAppsConfiguration;
  personalizationConfiguration?: PersonalizationConfiguration;
  quickSightConfiguration?: QuickSightConfiguration;
}
const CreateApplicationRequest = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<CreateApplicationRequest>;
export type ApplicationArn = string;
export interface CreateApplicationResponse {
  applicationId?: string;
  applicationArn?: string;
}
const CreateApplicationResponse = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<CreateApplicationResponse>;
export type DisplayName = string;
export type ResponseConfigurationType = "ALL" | (string & {});
const ResponseConfigurationType = S.String;

export type Instruction = string;
export interface InstructionCollection {
  responseLength?: string;
  targetAudience?: string;
  perspective?: string;
  outputStyle?: string;
  identity?: string;
  tone?: string;
  customInstructions?: string;
  examples?: string;
}
const InstructionCollection = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<InstructionCollection>;
export interface ResponseConfiguration {
  instructionCollection?: InstructionCollection;
}
const ResponseConfiguration = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<ResponseConfiguration>;
export type ResponseConfigurations = { [key in ResponseConfigurationType]?: ResponseConfiguration };
const ResponseConfigurations = /*@__PURE__*/ __L.at(__c13, 6);
export interface CreateChatResponseConfigurationRequest {
  applicationId: string;
  displayName: string;
  clientToken?: string;
  responseConfigurations: { [key: string]: ResponseConfiguration | undefined };
  tags?: Tag[];
}
const CreateChatResponseConfigurationRequest = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<CreateChatResponseConfigurationRequest>;
export type ChatResponseConfigurationId = string;
export type ChatResponseConfigurationArn = string;
export interface CreateChatResponseConfigurationResponse {
  chatResponseConfigurationId: string;
  chatResponseConfigurationArn: string;
}
const CreateChatResponseConfigurationResponse = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<CreateChatResponseConfigurationResponse>;
export interface ActionFilterConfiguration {
  documentAttributeFilter: AttributeFilter;
}
const ActionFilterConfiguration = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<ActionFilterConfiguration>;
export interface ActionConfiguration {
  action: string;
  filterConfiguration?: ActionFilterConfiguration;
}
const ActionConfiguration = /*@__PURE__*/ __L.at(__c14, 2) as any as S.Schema<ActionConfiguration>;
export type ActionConfigurationList = ActionConfiguration[];
const ActionConfigurationList = /*@__PURE__*/ __L.at(__c14, 3);
export type DataAccessorName = string | redacted.Redacted<string>;
export type DataAccessorAuthenticationType =
  | "AWS_IAM_IDC_TTI"
  | "AWS_IAM_IDC_AUTH_CODE"
  | (string & {});
const DataAccessorAuthenticationType = S.String;

export type IdcTrustedTokenIssuerArn = string;
export interface DataAccessorIdcTrustedTokenIssuerConfiguration {
  idcTrustedTokenIssuerArn: string;
}
const DataAccessorIdcTrustedTokenIssuerConfiguration = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<DataAccessorIdcTrustedTokenIssuerConfiguration>;
export type DataAccessorAuthenticationConfiguration = {
  idcTrustedTokenIssuerConfiguration: DataAccessorIdcTrustedTokenIssuerConfiguration;
};
const DataAccessorAuthenticationConfiguration = /*@__PURE__*/ __L.at(__c14, 5);
export type DataAccessorExternalId = string;
export type DataAccessorExternalIds = string[];
const DataAccessorExternalIds = QIamActions as any as S.Schema<DataAccessorExternalIds>;
export interface DataAccessorAuthenticationDetail {
  authenticationType: DataAccessorAuthenticationType;
  authenticationConfiguration?: DataAccessorAuthenticationConfiguration;
  externalIds?: string[];
}
const DataAccessorAuthenticationDetail = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<DataAccessorAuthenticationDetail>;
export interface CreateDataAccessorRequest {
  applicationId: string;
  principal: string;
  actionConfigurations: ActionConfiguration[];
  clientToken?: string;
  displayName: string | redacted.Redacted<string>;
  authenticationDetail?: DataAccessorAuthenticationDetail;
  tags?: Tag[];
}
const CreateDataAccessorRequest = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<CreateDataAccessorRequest>;
export type DataAccessorId = string;
export type IdcApplicationArn = string;
export type DataAccessorArn = string;
export interface CreateDataAccessorResponse {
  dataAccessorId: string;
  idcApplicationArn: string;
  dataAccessorArn: string;
}
const CreateDataAccessorResponse = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<CreateDataAccessorResponse>;
export type DataSourceName = string;
export type DataSourceConfiguration = unknown;
export type SubnetId = string;
export type SubnetIds = string[];
const SubnetIds = QIamActions as any as S.Schema<SubnetIds>;
export type SecurityGroupId = string;
export type SecurityGroupIds = string[];
const SecurityGroupIds = QIamActions as any as S.Schema<SecurityGroupIds>;
export interface DataSourceVpcConfiguration {
  subnetIds: string[];
  securityGroupIds: string[];
}
const DataSourceVpcConfiguration = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<DataSourceVpcConfiguration>;
export type SyncSchedule = string;
export interface CreateDataSourceRequest {
  applicationId: string;
  indexId: string;
  displayName: string;
  configuration: any;
  vpcConfiguration?: DataSourceVpcConfiguration;
  description?: string;
  tags?: Tag[];
  syncSchedule?: string;
  roleArn?: string;
  clientToken?: string;
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
  mediaExtractionConfiguration?: MediaExtractionConfiguration;
}
const CreateDataSourceRequest = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<CreateDataSourceRequest>;
export type DataSourceArn = string;
export interface CreateDataSourceResponse {
  dataSourceId?: string;
  dataSourceArn?: string;
}
const CreateDataSourceResponse = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<CreateDataSourceResponse>;
export type IndexName = string;
export type IndexType = "ENTERPRISE" | "STARTER" | (string & {});
const IndexType = S.String;

export type IndexCapacityInteger = number;
export interface IndexCapacityConfiguration {
  units?: number;
}
const IndexCapacityConfiguration = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<IndexCapacityConfiguration>;
export interface CreateIndexRequest {
  applicationId: string;
  displayName: string;
  description?: string;
  type?: IndexType;
  tags?: Tag[];
  capacityConfiguration?: IndexCapacityConfiguration;
  clientToken?: string;
}
const CreateIndexRequest = /*@__PURE__*/ __L.at(__c15, 5) as any as S.Schema<CreateIndexRequest>;
export type IndexArn = string;
export interface CreateIndexResponse {
  indexId?: string;
  indexArn?: string;
}
const CreateIndexResponse = /*@__PURE__*/ __L.at(__c15, 6) as any as S.Schema<CreateIndexResponse>;
export type PluginName = string;
export type SecretArn = string;
export interface BasicAuthConfiguration {
  secretArn: string;
  roleArn: string;
}
const BasicAuthConfiguration = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<BasicAuthConfiguration>;
export interface OAuth2ClientCredentialConfiguration {
  secretArn: string;
  roleArn: string;
  authorizationUrl?: string;
  tokenUrl?: string;
}
const OAuth2ClientCredentialConfiguration = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<OAuth2ClientCredentialConfiguration>;
export interface NoAuthConfiguration {}
const NoAuthConfiguration = EndOfInputEvent as any as S.Schema<NoAuthConfiguration>;
export interface IdcAuthConfiguration {
  idcApplicationArn: string;
  roleArn: string;
}
const IdcAuthConfiguration = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<IdcAuthConfiguration>;
export type PluginAuthConfiguration =
  | {
      basicAuthConfiguration: BasicAuthConfiguration;
      oAuth2ClientCredentialConfiguration?: never;
      noAuthConfiguration?: never;
      idcAuthConfiguration?: never;
    }
  | {
      basicAuthConfiguration?: never;
      oAuth2ClientCredentialConfiguration: OAuth2ClientCredentialConfiguration;
      noAuthConfiguration?: never;
      idcAuthConfiguration?: never;
    }
  | {
      basicAuthConfiguration?: never;
      oAuth2ClientCredentialConfiguration?: never;
      noAuthConfiguration: NoAuthConfiguration;
      idcAuthConfiguration?: never;
    }
  | {
      basicAuthConfiguration?: never;
      oAuth2ClientCredentialConfiguration?: never;
      noAuthConfiguration?: never;
      idcAuthConfiguration: IdcAuthConfiguration;
    };
const PluginAuthConfiguration = /*@__PURE__*/ __L.at(__c16, 2);
export type PluginDescription = string;
export type APISchemaType = "OPEN_API_V3" | (string & {});
const APISchemaType = S.String;

export type Payload = string | redacted.Redacted<string>;
export type APISchema =
  | { payload: string | redacted.Redacted<string>; s3?: never }
  | { payload?: never; s3: S3 };
const APISchema = /*@__PURE__*/ __L.at(__c16, 3);
export interface CustomPluginConfiguration {
  description: string;
  apiSchemaType: APISchemaType;
  apiSchema?: APISchema;
}
const CustomPluginConfiguration = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<CustomPluginConfiguration>;
export interface CreatePluginRequest {
  applicationId: string;
  displayName: string;
  type: PluginType;
  authConfiguration: PluginAuthConfiguration;
  serverUrl?: string;
  customPluginConfiguration?: CustomPluginConfiguration;
  tags?: Tag[];
  clientToken?: string;
}
const CreatePluginRequest = /*@__PURE__*/ __L.at(__c16, 5) as any as S.Schema<CreatePluginRequest>;
export type PluginArn = string;
export type PluginBuildStatus =
  | "READY"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | (string & {});
const PluginBuildStatus = S.String;

export interface CreatePluginResponse {
  pluginId?: string;
  pluginArn?: string;
  buildStatus?: PluginBuildStatus;
}
const CreatePluginResponse = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<CreatePluginResponse>;
export type RetrieverType = "NATIVE_INDEX" | "KENDRA_INDEX" | (string & {});
const RetrieverType = S.String;

export type RetrieverName = string;
export type DocumentAttributeBoostingLevel =
  | "NONE"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "VERY_HIGH"
  | "ONE"
  | "TWO"
  | (string & {});
const DocumentAttributeBoostingLevel = S.String;

export type NumberAttributeBoostingType =
  | "PRIORITIZE_LARGER_VALUES"
  | "PRIORITIZE_SMALLER_VALUES"
  | (string & {});
const NumberAttributeBoostingType = S.String;

export interface NumberAttributeBoostingConfiguration {
  boostingLevel: DocumentAttributeBoostingLevel;
  boostingType?: NumberAttributeBoostingType;
}
const NumberAttributeBoostingConfiguration = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<NumberAttributeBoostingConfiguration>;
export type StringAttributeValueBoostingLevel =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "VERY_HIGH"
  | "ONE"
  | "TWO"
  | "THREE"
  | "FOUR"
  | "FIVE"
  | (string & {});
const StringAttributeValueBoostingLevel = S.String;

export type StringAttributeValueBoosting = {
  [key: string]: StringAttributeValueBoostingLevel | undefined;
};
const StringAttributeValueBoosting = /*@__PURE__*/ __L.at(__c17, 0);
export interface StringAttributeBoostingConfiguration {
  boostingLevel: DocumentAttributeBoostingLevel;
  attributeValueBoosting?: { [key: string]: StringAttributeValueBoostingLevel | undefined };
}
const StringAttributeBoostingConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<StringAttributeBoostingConfiguration>;
export type BoostingDurationInSeconds = number;
export interface DateAttributeBoostingConfiguration {
  boostingLevel: DocumentAttributeBoostingLevel;
  boostingDurationInSeconds?: number;
}
const DateAttributeBoostingConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<DateAttributeBoostingConfiguration>;
export interface StringListAttributeBoostingConfiguration {
  boostingLevel: DocumentAttributeBoostingLevel;
}
const StringListAttributeBoostingConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<StringListAttributeBoostingConfiguration>;
export type DocumentAttributeBoostingConfiguration =
  | {
      numberConfiguration: NumberAttributeBoostingConfiguration;
      stringConfiguration?: never;
      dateConfiguration?: never;
      stringListConfiguration?: never;
    }
  | {
      numberConfiguration?: never;
      stringConfiguration: StringAttributeBoostingConfiguration;
      dateConfiguration?: never;
      stringListConfiguration?: never;
    }
  | {
      numberConfiguration?: never;
      stringConfiguration?: never;
      dateConfiguration: DateAttributeBoostingConfiguration;
      stringListConfiguration?: never;
    }
  | {
      numberConfiguration?: never;
      stringConfiguration?: never;
      dateConfiguration?: never;
      stringListConfiguration: StringListAttributeBoostingConfiguration;
    };
const DocumentAttributeBoostingConfiguration = /*@__PURE__*/ __L.at(__c17, 4);
export type DocumentAttributeBoostingOverrideMap = {
  [key: string]: DocumentAttributeBoostingConfiguration | undefined;
};
const DocumentAttributeBoostingOverrideMap = /*@__PURE__*/ __L.at(__c17, 5);
export interface NativeIndexConfiguration {
  indexId: string;
  version?: number;
  boostingOverride?: { [key: string]: DocumentAttributeBoostingConfiguration | undefined };
}
const NativeIndexConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<NativeIndexConfiguration>;
export type KendraIndexId = string;
export interface KendraIndexConfiguration {
  indexId: string;
}
const KendraIndexConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<KendraIndexConfiguration>;
export type RetrieverConfiguration =
  | { nativeIndexConfiguration: NativeIndexConfiguration; kendraIndexConfiguration?: never }
  | { nativeIndexConfiguration?: never; kendraIndexConfiguration: KendraIndexConfiguration };
const RetrieverConfiguration = /*@__PURE__*/ __L.at(__c18, 0);
export interface CreateRetrieverRequest {
  applicationId: string;
  type: RetrieverType;
  displayName: string;
  configuration: RetrieverConfiguration;
  roleArn?: string;
  clientToken?: string;
  tags?: Tag[];
}
const CreateRetrieverRequest = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<CreateRetrieverRequest>;
export type RetrieverId = string;
export type RetrieverArn = string;
export interface CreateRetrieverResponse {
  retrieverId?: string;
  retrieverArn?: string;
}
const CreateRetrieverResponse = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<CreateRetrieverResponse>;
export type UserIdentifier = string;
export type GroupIdentifier = string;
export type SubscriptionPrincipal =
  | { user: string; group?: never }
  | { user?: never; group: string };
const SubscriptionPrincipal = /*@__PURE__*/ __L.at(__c18, 3);
export interface CreateSubscriptionRequest {
  applicationId: string;
  principal: SubscriptionPrincipal;
  type: SubscriptionType;
  clientToken?: string;
}
const CreateSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<CreateSubscriptionRequest>;
export interface CreateSubscriptionResponse {
  subscriptionId?: string;
  subscriptionArn?: string;
  currentSubscription?: SubscriptionDetails;
  nextSubscription?: SubscriptionDetails;
}
const CreateSubscriptionResponse = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<CreateSubscriptionResponse>;
export interface UserAlias {
  indexId?: string;
  dataSourceId?: string;
  userId: string;
}
const UserAlias = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<UserAlias>;
export type UserAliases = UserAlias[];
const UserAliases = /*@__PURE__*/ __L.at(__c18, 7);
export interface CreateUserRequest {
  applicationId: string;
  userId: string;
  userAliases?: UserAlias[];
  clientToken?: string;
}
const CreateUserRequest = /*@__PURE__*/ __L.at(__c19, 0) as any as S.Schema<CreateUserRequest>;
export interface CreateUserResponse {}
const CreateUserResponse = EndOfInputEvent as any as S.Schema<CreateUserResponse>;
export type WebExperienceTitle = string;
export type WebExperienceSubtitle = string;
export type WebExperienceWelcomeMessage = string;
export type WebExperienceSamplePromptsControlMode = "ENABLED" | "DISABLED" | (string & {});
const WebExperienceSamplePromptsControlMode = S.String;

export type Origin = string;
export type WebExperienceOrigins = string[];
const WebExperienceOrigins = QIamActions as any as S.Schema<WebExperienceOrigins>;
export type SamlAuthenticationUrl = string;
export interface SamlProviderConfiguration {
  authenticationUrl: string;
}
const SamlProviderConfiguration = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<SamlProviderConfiguration>;
export interface OpenIDConnectProviderConfiguration {
  secretsArn: string;
  secretsRole: string;
}
const OpenIDConnectProviderConfiguration = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<OpenIDConnectProviderConfiguration>;
export type IdentityProviderConfiguration =
  | { samlConfiguration: SamlProviderConfiguration; openIDConnectConfiguration?: never }
  | { samlConfiguration?: never; openIDConnectConfiguration: OpenIDConnectProviderConfiguration };
const IdentityProviderConfiguration = /*@__PURE__*/ __L.at(__c19, 3);
export type BrowserExtension = string;
export type BrowserExtensionList = string[];
const BrowserExtensionList = QIamActions as any as S.Schema<BrowserExtensionList>;
export interface BrowserExtensionConfiguration {
  enabledBrowserExtensions: string[];
}
const BrowserExtensionConfiguration = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<BrowserExtensionConfiguration>;
export type CustomCSSUrl = string;
export type LogoUrl = string;
export type FontUrl = string;
export type FaviconUrl = string;
export interface CustomizationConfiguration {
  customCSSUrl?: string;
  logoUrl?: string;
  fontUrl?: string;
  faviconUrl?: string;
}
const CustomizationConfiguration = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<CustomizationConfiguration>;
export interface CreateWebExperienceRequest {
  applicationId: string;
  title?: string;
  subtitle?: string;
  welcomeMessage?: string;
  samplePromptsControlMode?: WebExperienceSamplePromptsControlMode;
  origins?: string[];
  roleArn?: string;
  tags?: Tag[];
  clientToken?: string;
  identityProviderConfiguration?: IdentityProviderConfiguration;
  browserExtensionConfiguration?: BrowserExtensionConfiguration;
  customizationConfiguration?: CustomizationConfiguration;
}
const CreateWebExperienceRequest = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<CreateWebExperienceRequest>;
export type WebExperienceArn = string;
export interface CreateWebExperienceResponse {
  webExperienceId?: string;
  webExperienceArn?: string;
}
const CreateWebExperienceResponse = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<CreateWebExperienceResponse>;
export interface DeleteApplicationRequest {
  applicationId: string;
}
const DeleteApplicationRequest = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<DeleteApplicationRequest>;
export interface DeleteApplicationResponse {}
const DeleteApplicationResponse = EndOfInputEvent as any as S.Schema<DeleteApplicationResponse>;
export interface DeleteAttachmentRequest {
  applicationId: string;
  conversationId: string;
  attachmentId: string;
  userId?: string;
}
const DeleteAttachmentRequest = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<DeleteAttachmentRequest>;
export interface DeleteAttachmentResponse {}
const DeleteAttachmentResponse = EndOfInputEvent as any as S.Schema<DeleteAttachmentResponse>;
export interface DeleteChatControlsConfigurationRequest {
  applicationId: string;
}
const DeleteChatControlsConfigurationRequest = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<DeleteChatControlsConfigurationRequest>;
export interface DeleteChatControlsConfigurationResponse {}
const DeleteChatControlsConfigurationResponse = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<DeleteChatControlsConfigurationResponse>;
export interface DeleteChatResponseConfigurationRequest {
  applicationId: string;
  chatResponseConfigurationId: string;
}
const DeleteChatResponseConfigurationRequest = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<DeleteChatResponseConfigurationRequest>;
export interface DeleteChatResponseConfigurationResponse {}
const DeleteChatResponseConfigurationResponse =
  DeleteChatControlsConfigurationResponse as any as S.Schema<DeleteChatResponseConfigurationResponse>;
export interface DeleteConversationRequest {
  conversationId: string;
  applicationId: string;
  userId?: string;
}
const DeleteConversationRequest = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<DeleteConversationRequest>;
export interface DeleteConversationResponse {}
const DeleteConversationResponse = EndOfInputEvent as any as S.Schema<DeleteConversationResponse>;
export interface DeleteDataAccessorRequest {
  applicationId: string;
  dataAccessorId: string;
}
const DeleteDataAccessorRequest = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<DeleteDataAccessorRequest>;
export interface DeleteDataAccessorResponse {}
const DeleteDataAccessorResponse = EndOfInputEvent as any as S.Schema<DeleteDataAccessorResponse>;
export interface DeleteDataSourceRequest {
  applicationId: string;
  indexId: string;
  dataSourceId: string;
}
const DeleteDataSourceRequest = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<DeleteDataSourceRequest>;
export interface DeleteDataSourceResponse {}
const DeleteDataSourceResponse = EndOfInputEvent as any as S.Schema<DeleteDataSourceResponse>;
export interface DeleteGroupRequest {
  applicationId: string;
  indexId: string;
  groupName: string;
  dataSourceId?: string;
}
const DeleteGroupRequest = /*@__PURE__*/ __L.at(__c21, 0) as any as S.Schema<DeleteGroupRequest>;
export interface DeleteGroupResponse {}
const DeleteGroupResponse = EndOfInputEvent as any as S.Schema<DeleteGroupResponse>;
export interface DeleteIndexRequest {
  applicationId: string;
  indexId: string;
}
const DeleteIndexRequest = /*@__PURE__*/ __L.at(__c21, 1) as any as S.Schema<DeleteIndexRequest>;
export interface DeleteIndexResponse {}
const DeleteIndexResponse = EndOfInputEvent as any as S.Schema<DeleteIndexResponse>;
export interface DeletePluginRequest {
  applicationId: string;
  pluginId: string;
}
const DeletePluginRequest = /*@__PURE__*/ __L.at(__c21, 2) as any as S.Schema<DeletePluginRequest>;
export interface DeletePluginResponse {}
const DeletePluginResponse = EndOfInputEvent as any as S.Schema<DeletePluginResponse>;
export interface DeleteRetrieverRequest {
  applicationId: string;
  retrieverId: string;
}
const DeleteRetrieverRequest = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<DeleteRetrieverRequest>;
export interface DeleteRetrieverResponse {}
const DeleteRetrieverResponse = EndOfInputEvent as any as S.Schema<DeleteRetrieverResponse>;
export interface DeleteUserRequest {
  applicationId: string;
  userId: string;
}
const DeleteUserRequest = /*@__PURE__*/ __L.at(__c21, 4) as any as S.Schema<DeleteUserRequest>;
export interface DeleteUserResponse {}
const DeleteUserResponse = EndOfInputEvent as any as S.Schema<DeleteUserResponse>;
export interface DeleteWebExperienceRequest {
  applicationId: string;
  webExperienceId: string;
}
const DeleteWebExperienceRequest = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<DeleteWebExperienceRequest>;
export interface DeleteWebExperienceResponse {}
const DeleteWebExperienceResponse = EndOfInputEvent as any as S.Schema<DeleteWebExperienceResponse>;
export interface DisassociatePermissionRequest {
  applicationId: string;
  statementId: string;
}
const DisassociatePermissionRequest = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<DisassociatePermissionRequest>;
export interface DisassociatePermissionResponse {}
const DisassociatePermissionResponse =
  EndOfInputEvent as any as S.Schema<DisassociatePermissionResponse>;
export interface GetApplicationRequest {
  applicationId: string;
}
const GetApplicationRequest = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<GetApplicationRequest>;
export type ApplicationStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING"
  | (string & {});
const ApplicationStatus = S.String;

export interface AppliedAttachmentsConfiguration {
  attachmentsControlMode?: AttachmentsControlMode;
}
const AppliedAttachmentsConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<AppliedAttachmentsConfiguration>;
export type AutoSubscriptionStatus = "ENABLED" | "DISABLED" | (string & {});
const AutoSubscriptionStatus = S.String;

export interface AutoSubscriptionConfiguration {
  autoSubscribe?: AutoSubscriptionStatus;
  defaultSubscriptionType?: SubscriptionType;
}
const AutoSubscriptionConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<AutoSubscriptionConfiguration>;
export interface GetApplicationResponse {
  displayName?: string;
  applicationId?: string;
  applicationArn?: string;
  identityType?: IdentityType;
  iamIdentityProviderArn?: string;
  identityCenterApplicationArn?: string;
  roleArn?: string;
  status?: ApplicationStatus;
  description?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  createdAt?: Date;
  updatedAt?: Date;
  error?: ErrorDetail;
  attachmentsConfiguration?: AppliedAttachmentsConfiguration;
  qAppsConfiguration?: QAppsConfiguration;
  personalizationConfiguration?: PersonalizationConfiguration;
  autoSubscriptionConfiguration?: AutoSubscriptionConfiguration;
  clientIdsForOIDC?: string[];
  quickSightConfiguration?: QuickSightConfiguration;
}
const GetApplicationResponse = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<GetApplicationResponse>;
export type MaxResultsIntegerForGetTopicConfigurations = number;
export type NextToken = string;
export interface GetChatControlsConfigurationRequest {
  applicationId: string;
  maxResults?: number;
  nextToken?: string;
}
const GetChatControlsConfigurationRequest = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<GetChatControlsConfigurationRequest>;
export type ResponseScope =
  | "ENTERPRISE_CONTENT_ONLY"
  | "EXTENDED_KNOWLEDGE_ENABLED"
  | (string & {});
const ResponseScope = S.String;

export type OrchestrationControl = "ENABLED" | "DISABLED" | (string & {});
const OrchestrationControl = S.String;

export interface AppliedOrchestrationConfiguration {
  control: OrchestrationControl;
}
const AppliedOrchestrationConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<AppliedOrchestrationConfiguration>;
export type BlockedPhrase = string;
export type BlockedPhrases = string[];
const BlockedPhrases = QIamActions as any as S.Schema<BlockedPhrases>;
export type SystemMessageOverride = string;
export interface BlockedPhrasesConfiguration {
  blockedPhrases?: string[];
  systemMessageOverride?: string;
}
const BlockedPhrasesConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<BlockedPhrasesConfiguration>;
export type TopicConfigurationName = string;
export type TopicDescription = string;
export type ExampleChatMessage = string;
export type ExampleChatMessages = string[];
const ExampleChatMessages = QIamActions as any as S.Schema<ExampleChatMessages>;
export type UserIds = string[];
const UserIds = QIamActions as any as S.Schema<UserIds>;
export interface UsersAndGroups {
  userIds?: string[];
  userGroups?: string[];
}
const UsersAndGroups = /*@__PURE__*/ __L.at(__c22, 6) as any as S.Schema<UsersAndGroups>;
export type RuleType = "CONTENT_BLOCKER_RULE" | "CONTENT_RETRIEVAL_RULE" | (string & {});
const RuleType = S.String;

export interface ContentBlockerRule {
  systemMessageOverride?: string;
}
const ContentBlockerRule = /*@__PURE__*/ __L.at(__c22, 7) as any as S.Schema<ContentBlockerRule>;
export interface EligibleDataSource {
  indexId?: string;
  dataSourceId?: string;
}
const EligibleDataSource = /*@__PURE__*/ __L.at(__c23, 0) as any as S.Schema<EligibleDataSource>;
export type EligibleDataSources = EligibleDataSource[];
const EligibleDataSources = /*@__PURE__*/ __L.at(__c23, 1);
export interface ContentRetrievalRule {
  eligibleDataSources?: EligibleDataSource[];
}
const ContentRetrievalRule = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<ContentRetrievalRule>;
export type RuleConfiguration =
  | { contentBlockerRule: ContentBlockerRule; contentRetrievalRule?: never }
  | { contentBlockerRule?: never; contentRetrievalRule: ContentRetrievalRule };
const RuleConfiguration = /*@__PURE__*/ __L.at(__c23, 3);
export interface Rule {
  includedUsersAndGroups?: UsersAndGroups;
  excludedUsersAndGroups?: UsersAndGroups;
  ruleType: RuleType;
  ruleConfiguration?: RuleConfiguration;
}
const Rule = /*@__PURE__*/ __L.at(__c23, 4) as any as S.Schema<Rule>;
export type Rules = Rule[];
const Rules = /*@__PURE__*/ __L.at(__c23, 5);
export interface TopicConfiguration {
  name: string;
  description?: string;
  exampleChatMessages?: string[];
  rules: Rule[];
}
const TopicConfiguration = /*@__PURE__*/ __L.at(__c23, 6) as any as S.Schema<TopicConfiguration>;
export type TopicConfigurations = TopicConfiguration[];
const TopicConfigurations = /*@__PURE__*/ __L.at(__c23, 7);
export type CreatorModeControl = "ENABLED" | "DISABLED" | (string & {});
const CreatorModeControl = S.String;

export interface AppliedCreatorModeConfiguration {
  creatorModeControl: CreatorModeControl;
}
const AppliedCreatorModeConfiguration = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<AppliedCreatorModeConfiguration>;
export type HallucinationReductionControl = "ENABLED" | "DISABLED" | (string & {});
const HallucinationReductionControl = S.String;

export interface HallucinationReductionConfiguration {
  hallucinationReductionControl?: HallucinationReductionControl;
}
const HallucinationReductionConfiguration = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<HallucinationReductionConfiguration>;
export interface GetChatControlsConfigurationResponse {
  responseScope?: ResponseScope;
  orchestrationConfiguration?: AppliedOrchestrationConfiguration;
  blockedPhrases?: BlockedPhrasesConfiguration;
  topicConfigurations?: TopicConfiguration[];
  creatorModeConfiguration?: AppliedCreatorModeConfiguration;
  nextToken?: string;
  hallucinationReductionConfiguration?: HallucinationReductionConfiguration;
}
const GetChatControlsConfigurationResponse = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<GetChatControlsConfigurationResponse>;
export interface GetChatResponseConfigurationRequest {
  applicationId: string;
  chatResponseConfigurationId: string;
}
const GetChatResponseConfigurationRequest = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<GetChatResponseConfigurationRequest>;
export type ChatResponseConfigurationStatus =
  | "CREATING"
  | "UPDATING"
  | "FAILED"
  | "ACTIVE"
  | (string & {});
const ChatResponseConfigurationStatus = S.String;

export interface ChatResponseConfigurationDetail {
  responseConfigurations?: { [key: string]: ResponseConfiguration | undefined };
  responseConfigurationSummary?: string;
  status?: ChatResponseConfigurationStatus;
  error?: ErrorDetail;
  updatedAt?: Date;
}
const ChatResponseConfigurationDetail = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<ChatResponseConfigurationDetail>;
export interface GetChatResponseConfigurationResponse {
  chatResponseConfigurationId?: string;
  chatResponseConfigurationArn?: string;
  displayName?: string;
  createdAt?: Date;
  inUseConfiguration?: ChatResponseConfigurationDetail;
  lastUpdateConfiguration?: ChatResponseConfigurationDetail;
}
const GetChatResponseConfigurationResponse = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<GetChatResponseConfigurationResponse>;
export interface GetDataAccessorRequest {
  applicationId: string;
  dataAccessorId: string;
}
const GetDataAccessorRequest = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<GetDataAccessorRequest>;
export interface GetDataAccessorResponse {
  displayName?: string | redacted.Redacted<string>;
  dataAccessorId?: string;
  dataAccessorArn?: string;
  applicationId?: string;
  idcApplicationArn?: string;
  principal?: string;
  actionConfigurations?: ActionConfiguration[];
  authenticationDetail?: DataAccessorAuthenticationDetail;
  createdAt?: Date;
  updatedAt?: Date;
}
const GetDataAccessorResponse = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<GetDataAccessorResponse>;
export interface GetDataSourceRequest {
  applicationId: string;
  indexId: string;
  dataSourceId: string;
}
const GetDataSourceRequest = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<GetDataSourceRequest>;
export type DataSourceStatus =
  | "PENDING_CREATION"
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING"
  | (string & {});
const DataSourceStatus = S.String;

export interface GetDataSourceResponse {
  applicationId?: string;
  indexId?: string;
  dataSourceId?: string;
  dataSourceArn?: string;
  displayName?: string;
  type?: string;
  configuration?: any;
  vpcConfiguration?: DataSourceVpcConfiguration;
  createdAt?: Date;
  updatedAt?: Date;
  description?: string;
  status?: DataSourceStatus;
  syncSchedule?: string;
  roleArn?: string;
  error?: ErrorDetail;
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
  mediaExtractionConfiguration?: MediaExtractionConfiguration;
}
const GetDataSourceResponse = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<GetDataSourceResponse>;
export type OutputFormat = "RAW" | "EXTRACTED" | (string & {});
const OutputFormat = S.String;

export interface GetDocumentContentRequest {
  applicationId: string;
  indexId: string;
  dataSourceId?: string;
  documentId: string;
  outputFormat?: OutputFormat;
}
const GetDocumentContentRequest = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<GetDocumentContentRequest>;
export interface GetDocumentContentResponse {
  presignedUrl: string;
  mimeType: string;
}
const GetDocumentContentResponse = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<GetDocumentContentResponse>;
export interface GetGroupRequest {
  applicationId: string;
  indexId: string;
  groupName: string;
  dataSourceId?: string;
}
const GetGroupRequest = /*@__PURE__*/ __L.at(__c25, 4) as any as S.Schema<GetGroupRequest>;
export type GroupStatus =
  | "FAILED"
  | "SUCCEEDED"
  | "PROCESSING"
  | "DELETING"
  | "DELETED"
  | (string & {});
const GroupStatus = S.String;

export interface GroupStatusDetail {
  status?: GroupStatus;
  lastUpdatedAt?: Date;
  errorDetail?: ErrorDetail;
}
const GroupStatusDetail = /*@__PURE__*/ __L.at(__c25, 5) as any as S.Schema<GroupStatusDetail>;
export type GroupStatusDetails = GroupStatusDetail[];
const GroupStatusDetails = /*@__PURE__*/ __L.at(__c25, 6);
export interface GetGroupResponse {
  status?: GroupStatusDetail;
  statusHistory?: GroupStatusDetail[];
}
const GetGroupResponse = /*@__PURE__*/ __L.at(__c25, 7) as any as S.Schema<GetGroupResponse>;
export interface GetIndexRequest {
  applicationId: string;
  indexId: string;
}
const GetIndexRequest = /*@__PURE__*/ __L.at(__c26, 0) as any as S.Schema<GetIndexRequest>;
export type IndexStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING"
  | (string & {});
const IndexStatus = S.String;

export type DocumentMetadataConfigurationName = string;
export type AttributeType = "STRING" | "STRING_LIST" | "NUMBER" | "DATE" | (string & {});
const AttributeType = S.String;

export type Status = "ENABLED" | "DISABLED" | (string & {});
const Status = S.String;

export interface DocumentAttributeConfiguration {
  name?: string;
  type?: AttributeType;
  search?: Status;
}
const DocumentAttributeConfiguration = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<DocumentAttributeConfiguration>;
export type DocumentAttributeConfigurations = DocumentAttributeConfiguration[];
const DocumentAttributeConfigurations = /*@__PURE__*/ __L.at(__c26, 2);
export type IndexedTextBytes = number;
export type IndexedTextDocument = number;
export interface TextDocumentStatistics {
  indexedTextBytes?: number;
  indexedTextDocumentCount?: number;
}
const TextDocumentStatistics = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<TextDocumentStatistics>;
export interface IndexStatistics {
  textDocumentStatistics?: TextDocumentStatistics;
}
const IndexStatistics = /*@__PURE__*/ __L.at(__c26, 4) as any as S.Schema<IndexStatistics>;
export interface GetIndexResponse {
  applicationId?: string;
  indexId?: string;
  displayName?: string;
  indexArn?: string;
  status?: IndexStatus;
  type?: IndexType;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  capacityConfiguration?: IndexCapacityConfiguration;
  documentAttributeConfigurations?: DocumentAttributeConfiguration[];
  error?: ErrorDetail;
  indexStatistics?: IndexStatistics;
}
const GetIndexResponse = /*@__PURE__*/ __L.at(__c26, 5) as any as S.Schema<GetIndexResponse>;
export interface GetMediaRequest {
  applicationId: string;
  conversationId: string;
  messageId: string;
  mediaId: string;
}
const GetMediaRequest = /*@__PURE__*/ __L.at(__c26, 6) as any as S.Schema<GetMediaRequest>;
export interface GetMediaResponse {
  mediaBytes?: Uint8Array;
  mediaMimeType?: string;
}
const GetMediaResponse = /*@__PURE__*/ __L.at(__c26, 7) as any as S.Schema<GetMediaResponse>;
export interface GetPluginRequest {
  applicationId: string;
  pluginId: string;
}
const GetPluginRequest = /*@__PURE__*/ __L.at(__c27, 0) as any as S.Schema<GetPluginRequest>;
export type PluginState = "ENABLED" | "DISABLED" | (string & {});
const PluginState = S.String;

export interface GetPluginResponse {
  applicationId?: string;
  pluginId?: string;
  displayName?: string;
  type?: PluginType;
  serverUrl?: string;
  authConfiguration?: PluginAuthConfiguration;
  customPluginConfiguration?: CustomPluginConfiguration;
  buildStatus?: PluginBuildStatus;
  pluginArn?: string;
  state?: PluginState;
  createdAt?: Date;
  updatedAt?: Date;
}
const GetPluginResponse = /*@__PURE__*/ __L.at(__c27, 1) as any as S.Schema<GetPluginResponse>;
export interface GetPolicyRequest {
  applicationId: string;
}
const GetPolicyRequest = /*@__PURE__*/ __L.at(__c27, 2) as any as S.Schema<GetPolicyRequest>;
export interface GetPolicyResponse {
  policy?: string;
}
const GetPolicyResponse = /*@__PURE__*/ __L.at(__c27, 3) as any as S.Schema<GetPolicyResponse>;
export interface GetRetrieverRequest {
  applicationId: string;
  retrieverId: string;
}
const GetRetrieverRequest = /*@__PURE__*/ __L.at(__c27, 4) as any as S.Schema<GetRetrieverRequest>;
export type RetrieverStatus = "CREATING" | "ACTIVE" | "FAILED" | (string & {});
const RetrieverStatus = S.String;

export interface GetRetrieverResponse {
  applicationId?: string;
  retrieverId?: string;
  retrieverArn?: string;
  type?: RetrieverType;
  status?: RetrieverStatus;
  displayName?: string;
  configuration?: RetrieverConfiguration;
  roleArn?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
const GetRetrieverResponse = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<GetRetrieverResponse>;
export interface GetUserRequest {
  applicationId: string;
  userId: string;
}
const GetUserRequest = /*@__PURE__*/ __L.at(__c27, 6) as any as S.Schema<GetUserRequest>;
export interface GetUserResponse {
  userAliases?: UserAlias[];
}
const GetUserResponse = /*@__PURE__*/ __L.at(__c27, 7) as any as S.Schema<GetUserResponse>;
export interface GetWebExperienceRequest {
  applicationId: string;
  webExperienceId: string;
}
const GetWebExperienceRequest = /*@__PURE__*/ __L.at(
  __c28,
  0,
) as any as S.Schema<GetWebExperienceRequest>;
export type WebExperienceStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "PENDING_AUTH_CONFIG"
  | (string & {});
const WebExperienceStatus = S.String;

export type SamlMetadataXML = string;
export type SamlAttribute = string;
export interface SamlConfiguration {
  metadataXML: string;
  roleArn: string;
  userIdAttribute: string;
  userGroupAttribute?: string;
}
const SamlConfiguration = /*@__PURE__*/ __L.at(__c28, 1) as any as S.Schema<SamlConfiguration>;
export type WebExperienceAuthConfiguration = { samlConfiguration: SamlConfiguration };
const WebExperienceAuthConfiguration = /*@__PURE__*/ __L.at(__c28, 2);
export interface GetWebExperienceResponse {
  applicationId?: string;
  webExperienceId?: string;
  webExperienceArn?: string;
  defaultEndpoint?: string;
  status?: WebExperienceStatus;
  createdAt?: Date;
  updatedAt?: Date;
  title?: string;
  subtitle?: string;
  welcomeMessage?: string;
  samplePromptsControlMode?: WebExperienceSamplePromptsControlMode;
  origins?: string[];
  roleArn?: string;
  identityProviderConfiguration?: IdentityProviderConfiguration;
  authenticationConfiguration?: WebExperienceAuthConfiguration;
  error?: ErrorDetail;
  browserExtensionConfiguration?: BrowserExtensionConfiguration;
  customizationConfiguration?: CustomizationConfiguration;
}
const GetWebExperienceResponse = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<GetWebExperienceResponse>;
export type MaxResultsIntegerForListApplications = number;
export interface ListApplicationsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListApplicationsRequest = /*@__PURE__*/ __L.at(
  __c28,
  4,
) as any as S.Schema<ListApplicationsRequest>;
export interface Application {
  displayName?: string;
  applicationId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: ApplicationStatus;
  identityType?: IdentityType;
  quickSightConfiguration?: QuickSightConfiguration;
}
const Application = /*@__PURE__*/ __L.at(__c28, 5) as any as S.Schema<Application>;
export type Applications = Application[];
const Applications = /*@__PURE__*/ __L.at(__c28, 6);
export interface ListApplicationsResponse {
  nextToken?: string;
  applications?: Application[];
}
const ListApplicationsResponse = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<ListApplicationsResponse>;
export type MaxResultsIntegerForListAttachments = number;
export interface ListAttachmentsRequest {
  applicationId: string;
  conversationId?: string;
  userId?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAttachmentsRequest = /*@__PURE__*/ __L.at(
  __c29,
  0,
) as any as S.Schema<ListAttachmentsRequest>;
export interface Attachment {
  attachmentId?: string;
  conversationId?: string;
  name?: string;
  copyFrom?: CopyFromSource;
  fileType?: string;
  fileSize?: number;
  md5chksum?: string;
  createdAt?: Date;
  status?: AttachmentStatus;
  error?: ErrorDetail;
}
const Attachment = /*@__PURE__*/ __L.at(__c29, 1) as any as S.Schema<Attachment>;
export type AttachmentList = Attachment[];
const AttachmentList = /*@__PURE__*/ __L.at(__c29, 2);
export interface ListAttachmentsResponse {
  attachments?: Attachment[];
  nextToken?: string;
}
const ListAttachmentsResponse = /*@__PURE__*/ __L.at(
  __c29,
  3,
) as any as S.Schema<ListAttachmentsResponse>;
export interface ListChatResponseConfigurationsRequest {
  applicationId: string;
  maxResults?: number;
  nextToken?: string;
}
const ListChatResponseConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<ListChatResponseConfigurationsRequest>;
export type ResponseConfigurationSummary = string;
export interface ChatResponseConfiguration {
  chatResponseConfigurationId: string;
  chatResponseConfigurationArn: string;
  displayName: string;
  responseConfigurationSummary?: string;
  status: ChatResponseConfigurationStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
const ChatResponseConfiguration = /*@__PURE__*/ __L.at(
  __c29,
  5,
) as any as S.Schema<ChatResponseConfiguration>;
export type ChatResponseConfigurations = ChatResponseConfiguration[];
const ChatResponseConfigurations = /*@__PURE__*/ __L.at(__c29, 6);
export interface ListChatResponseConfigurationsResponse {
  chatResponseConfigurations?: ChatResponseConfiguration[];
  nextToken?: string;
}
const ListChatResponseConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c29,
  7,
) as any as S.Schema<ListChatResponseConfigurationsResponse>;
export type MaxResultsIntegerForListConversations = number;
export interface ListConversationsRequest {
  applicationId: string;
  userId?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListConversationsRequest = /*@__PURE__*/ __L.at(
  __c30,
  0,
) as any as S.Schema<ListConversationsRequest>;
export type ConversationTitle = string;
export interface Conversation {
  conversationId?: string;
  title?: string;
  startTime?: Date;
}
const Conversation = /*@__PURE__*/ __L.at(__c30, 1) as any as S.Schema<Conversation>;
export type Conversations = Conversation[];
const Conversations = /*@__PURE__*/ __L.at(__c30, 2);
export interface ListConversationsResponse {
  nextToken?: string;
  conversations?: Conversation[];
}
const ListConversationsResponse = /*@__PURE__*/ __L.at(
  __c30,
  3,
) as any as S.Schema<ListConversationsResponse>;
export type NextToken1500 = string;
export type MaxResultsIntegerForListDataAccessors = number;
export interface ListDataAccessorsRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListDataAccessorsRequest = /*@__PURE__*/ __L.at(
  __c30,
  4,
) as any as S.Schema<ListDataAccessorsRequest>;
export interface DataAccessor {
  displayName?: string | redacted.Redacted<string>;
  dataAccessorId?: string;
  dataAccessorArn?: string;
  idcApplicationArn?: string;
  principal?: string;
  authenticationDetail?: DataAccessorAuthenticationDetail;
  createdAt?: Date;
  updatedAt?: Date;
}
const DataAccessor = /*@__PURE__*/ __L.at(__c30, 5) as any as S.Schema<DataAccessor>;
export type DataAccessors = DataAccessor[];
const DataAccessors = /*@__PURE__*/ __L.at(__c30, 6);
export interface ListDataAccessorsResponse {
  dataAccessors?: DataAccessor[];
  nextToken?: string;
}
const ListDataAccessorsResponse = /*@__PURE__*/ __L.at(
  __c30,
  7,
) as any as S.Schema<ListDataAccessorsResponse>;
export type MaxResultsIntegerForListDataSources = number;
export interface ListDataSourcesRequest {
  applicationId: string;
  indexId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListDataSourcesRequest = /*@__PURE__*/ __L.at(
  __c31,
  0,
) as any as S.Schema<ListDataSourcesRequest>;
export interface DataSource {
  displayName?: string;
  dataSourceId?: string;
  type?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: DataSourceStatus;
}
const DataSource = /*@__PURE__*/ __L.at(__c31, 1) as any as S.Schema<DataSource>;
export type DataSources = DataSource[];
const DataSources = /*@__PURE__*/ __L.at(__c31, 2);
export interface ListDataSourcesResponse {
  dataSources?: DataSource[];
  nextToken?: string;
}
const ListDataSourcesResponse = /*@__PURE__*/ __L.at(
  __c31,
  3,
) as any as S.Schema<ListDataSourcesResponse>;
export type MaxResultsIntegerForListDataSourcesSyncJobs = number;
export type DataSourceSyncJobStatus =
  | "FAILED"
  | "SUCCEEDED"
  | "SYNCING"
  | "INCOMPLETE"
  | "STOPPING"
  | "ABORTED"
  | "SYNCING_INDEXING"
  | (string & {});
const DataSourceSyncJobStatus = S.String;

export interface ListDataSourceSyncJobsRequest {
  dataSourceId: string;
  applicationId: string;
  indexId: string;
  nextToken?: string;
  maxResults?: number;
  startTime?: Date;
  endTime?: Date;
  statusFilter?: DataSourceSyncJobStatus;
}
const ListDataSourceSyncJobsRequest = /*@__PURE__*/ __L.at(
  __c31,
  4,
) as any as S.Schema<ListDataSourceSyncJobsRequest>;
export type MetricValue = string;
export interface DataSourceSyncJobMetrics {
  documentsAdded?: string;
  documentsModified?: string;
  documentsDeleted?: string;
  documentsFailed?: string;
  documentsScanned?: string;
}
const DataSourceSyncJobMetrics = /*@__PURE__*/ __L.at(
  __c31,
  5,
) as any as S.Schema<DataSourceSyncJobMetrics>;
export interface DataSourceSyncJob {
  executionId?: string;
  startTime?: Date;
  endTime?: Date;
  status?: DataSourceSyncJobStatus;
  error?: ErrorDetail;
  dataSourceErrorCode?: string;
  metrics?: DataSourceSyncJobMetrics;
}
const DataSourceSyncJob = /*@__PURE__*/ __L.at(__c31, 6) as any as S.Schema<DataSourceSyncJob>;
export type DataSourceSyncJobs = DataSourceSyncJob[];
const DataSourceSyncJobs = /*@__PURE__*/ __L.at(__c31, 7);
export interface ListDataSourceSyncJobsResponse {
  history?: DataSourceSyncJob[];
  nextToken?: string;
}
const ListDataSourceSyncJobsResponse = /*@__PURE__*/ __L.at(
  __c32,
  0,
) as any as S.Schema<ListDataSourceSyncJobsResponse>;
export type DataSourceIds = string[];
const DataSourceIds = QIamActions as any as S.Schema<DataSourceIds>;
export type MaxResultsIntegerForListDocuments = number;
export interface ListDocumentsRequest {
  applicationId: string;
  indexId: string;
  dataSourceIds?: string[];
  nextToken?: string;
  maxResults?: number;
}
const ListDocumentsRequest = /*@__PURE__*/ __L.at(
  __c32,
  1,
) as any as S.Schema<ListDocumentsRequest>;
export type DocumentStatus =
  | "RECEIVED"
  | "PROCESSING"
  | "INDEXED"
  | "UPDATED"
  | "FAILED"
  | "DELETING"
  | "DELETED"
  | "DOCUMENT_FAILED_TO_INDEX"
  | (string & {});
const DocumentStatus = S.String;

export interface DocumentDetails {
  documentId?: string;
  status?: DocumentStatus;
  error?: ErrorDetail;
  createdAt?: Date;
  updatedAt?: Date;
}
const DocumentDetails = /*@__PURE__*/ __L.at(__c32, 2) as any as S.Schema<DocumentDetails>;
export type DocumentDetailList = DocumentDetails[];
const DocumentDetailList = /*@__PURE__*/ __L.at(__c32, 3);
export interface ListDocumentsResponse {
  documentDetailList?: DocumentDetails[];
  nextToken?: string;
}
const ListDocumentsResponse = /*@__PURE__*/ __L.at(
  __c32,
  4,
) as any as S.Schema<ListDocumentsResponse>;
export type MaxResultsIntegerForListGroupsRequest = number;
export interface ListGroupsRequest {
  applicationId: string;
  indexId: string;
  updatedEarlierThan: Date;
  dataSourceId?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListGroupsRequest = /*@__PURE__*/ __L.at(__c32, 5) as any as S.Schema<ListGroupsRequest>;
export interface GroupSummary {
  groupName?: string;
}
const GroupSummary = /*@__PURE__*/ __L.at(__c32, 6) as any as S.Schema<GroupSummary>;
export type GroupSummaryList = GroupSummary[];
const GroupSummaryList = /*@__PURE__*/ __L.at(__c32, 7);
export interface ListGroupsResponse {
  nextToken?: string;
  items?: GroupSummary[];
}
const ListGroupsResponse = /*@__PURE__*/ __L.at(__c33, 0) as any as S.Schema<ListGroupsResponse>;
export type MaxResultsIntegerForListIndices = number;
export interface ListIndicesRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListIndicesRequest = /*@__PURE__*/ __L.at(__c33, 1) as any as S.Schema<ListIndicesRequest>;
export interface Index {
  displayName?: string;
  indexId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: IndexStatus;
}
const Index = /*@__PURE__*/ __L.at(__c33, 2) as any as S.Schema<Index>;
export type Indices = Index[];
const Indices = /*@__PURE__*/ __L.at(__c33, 3);
export interface ListIndicesResponse {
  nextToken?: string;
  indices?: Index[];
}
const ListIndicesResponse = /*@__PURE__*/ __L.at(__c33, 4) as any as S.Schema<ListIndicesResponse>;
export type MaxResultsIntegerForListMessages = number;
export interface ListMessagesRequest {
  conversationId: string;
  applicationId: string;
  userId?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListMessagesRequest = /*@__PURE__*/ __L.at(__c33, 5) as any as S.Schema<ListMessagesRequest>;
export type MessageBody = string;
export type MessageType = "USER" | "SYSTEM" | (string & {});
const MessageType = S.String;

export interface Message {
  messageId?: string;
  body?: string;
  time?: Date;
  type?: MessageType;
  attachments?: AttachmentOutput[];
  sourceAttribution?: SourceAttribution[];
  actionReview?: ActionReview;
  actionExecution?: ActionExecution;
}
const Message = /*@__PURE__*/ __L.at(__c33, 6) as any as S.Schema<Message>;
export type Messages = Message[];
const Messages = /*@__PURE__*/ __L.at(__c33, 7);
export interface ListMessagesResponse {
  messages?: Message[];
  nextToken?: string;
}
const ListMessagesResponse = /*@__PURE__*/ __L.at(
  __c34,
  0,
) as any as S.Schema<ListMessagesResponse>;
export type MaxResultsIntegerForListPluginActions = number;
export interface ListPluginActionsRequest {
  applicationId: string;
  pluginId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListPluginActionsRequest = /*@__PURE__*/ __L.at(
  __c34,
  1,
) as any as S.Schema<ListPluginActionsRequest>;
export interface ActionSummary {
  actionIdentifier?: string;
  displayName?: string;
  instructionExample?: string;
  description?: string;
}
const ActionSummary = /*@__PURE__*/ __L.at(__c34, 2) as any as S.Schema<ActionSummary>;
export type Actions = ActionSummary[];
const Actions = /*@__PURE__*/ __L.at(__c34, 3);
export interface ListPluginActionsResponse {
  nextToken?: string;
  items?: ActionSummary[];
}
const ListPluginActionsResponse = /*@__PURE__*/ __L.at(
  __c34,
  4,
) as any as S.Schema<ListPluginActionsResponse>;
export type MaxResultsIntegerForListPlugins = number;
export interface ListPluginsRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListPluginsRequest = /*@__PURE__*/ __L.at(__c34, 5) as any as S.Schema<ListPluginsRequest>;
export interface Plugin {
  pluginId?: string;
  displayName?: string;
  type?: PluginType;
  serverUrl?: string;
  state?: PluginState;
  buildStatus?: PluginBuildStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
const Plugin = /*@__PURE__*/ __L.at(__c34, 6) as any as S.Schema<Plugin>;
export type Plugins = Plugin[];
const Plugins = /*@__PURE__*/ __L.at(__c34, 7);
export interface ListPluginsResponse {
  nextToken?: string;
  plugins?: Plugin[];
}
const ListPluginsResponse = /*@__PURE__*/ __L.at(__c35, 0) as any as S.Schema<ListPluginsResponse>;
export type MaxResultsIntegerForListPluginTypeActions = number;
export interface ListPluginTypeActionsRequest {
  pluginType: PluginType;
  nextToken?: string;
  maxResults?: number;
}
const ListPluginTypeActionsRequest = /*@__PURE__*/ __L.at(
  __c35,
  1,
) as any as S.Schema<ListPluginTypeActionsRequest>;
export interface ListPluginTypeActionsResponse {
  nextToken?: string;
  items?: ActionSummary[];
}
const ListPluginTypeActionsResponse =
  ListPluginActionsResponse as any as S.Schema<ListPluginTypeActionsResponse>;
export type MaxResultsIntegerForListPluginTypeMetadata = number;
export interface ListPluginTypeMetadataRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListPluginTypeMetadataRequest = /*@__PURE__*/ __L.at(
  __c35,
  2,
) as any as S.Schema<ListPluginTypeMetadataRequest>;
export type PluginTypeCategory =
  | "Customer relationship management (CRM)"
  | "Project management"
  | "Communication"
  | "Productivity"
  | "Ticketing and incident management"
  | (string & {});
const PluginTypeCategory = S.String;

export interface PluginTypeMetadataSummary {
  type?: PluginType;
  category?: PluginTypeCategory;
  description?: string;
}
const PluginTypeMetadataSummary = /*@__PURE__*/ __L.at(
  __c35,
  3,
) as any as S.Schema<PluginTypeMetadataSummary>;
export type ListPluginTypeMetadataSummaries = PluginTypeMetadataSummary[];
const ListPluginTypeMetadataSummaries = /*@__PURE__*/ __L.at(__c35, 4);
export interface ListPluginTypeMetadataResponse {
  nextToken?: string;
  items?: PluginTypeMetadataSummary[];
}
const ListPluginTypeMetadataResponse = /*@__PURE__*/ __L.at(
  __c35,
  5,
) as any as S.Schema<ListPluginTypeMetadataResponse>;
export type MaxResultsIntegerForListRetrieversRequest = number;
export interface ListRetrieversRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListRetrieversRequest = /*@__PURE__*/ __L.at(
  __c35,
  6,
) as any as S.Schema<ListRetrieversRequest>;
export interface Retriever {
  applicationId?: string;
  retrieverId?: string;
  type?: RetrieverType;
  status?: RetrieverStatus;
  displayName?: string;
}
const Retriever = /*@__PURE__*/ __L.at(__c35, 7) as any as S.Schema<Retriever>;
export type Retrievers = Retriever[];
const Retrievers = /*@__PURE__*/ __L.at(__c36, 0);
export interface ListRetrieversResponse {
  retrievers?: Retriever[];
  nextToken?: string;
}
const ListRetrieversResponse = /*@__PURE__*/ __L.at(
  __c36,
  1,
) as any as S.Schema<ListRetrieversResponse>;
export type MaxResultsIntegerForListSubscriptions = number;
export interface ListSubscriptionsRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListSubscriptionsRequest = /*@__PURE__*/ __L.at(
  __c36,
  2,
) as any as S.Schema<ListSubscriptionsRequest>;
export interface Subscription {
  subscriptionId?: string;
  subscriptionArn?: string;
  principal?: SubscriptionPrincipal;
  currentSubscription?: SubscriptionDetails;
  nextSubscription?: SubscriptionDetails;
}
const Subscription = /*@__PURE__*/ __L.at(__c36, 3) as any as S.Schema<Subscription>;
export type Subscriptions = Subscription[];
const Subscriptions = /*@__PURE__*/ __L.at(__c36, 4);
export interface ListSubscriptionsResponse {
  nextToken?: string;
  subscriptions?: Subscription[];
}
const ListSubscriptionsResponse = /*@__PURE__*/ __L.at(
  __c36,
  5,
) as any as S.Schema<ListSubscriptionsResponse>;
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  resourceARN: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c36,
  6,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c36,
  7,
) as any as S.Schema<ListTagsForResourceResponse>;
export type MaxResultsIntegerForListWebExperiencesRequest = number;
export interface ListWebExperiencesRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListWebExperiencesRequest = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<ListWebExperiencesRequest>;
export interface WebExperience {
  webExperienceId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  defaultEndpoint?: string;
  status?: WebExperienceStatus;
}
const WebExperience = /*@__PURE__*/ __L.at(__c37, 1) as any as S.Schema<WebExperience>;
export type WebExperiences = WebExperience[];
const WebExperiences = /*@__PURE__*/ __L.at(__c37, 2);
export interface ListWebExperiencesResponse {
  webExperiences?: WebExperience[];
  nextToken?: string;
}
const ListWebExperiencesResponse = /*@__PURE__*/ __L.at(
  __c37,
  3,
) as any as S.Schema<ListWebExperiencesResponse>;
export type SystemMessageId = string;
export type MessageUsefulness = "USEFUL" | "NOT_USEFUL" | (string & {});
const MessageUsefulness = S.String;

export type MessageUsefulnessReason =
  | "NOT_FACTUALLY_CORRECT"
  | "HARMFUL_OR_UNSAFE"
  | "INCORRECT_OR_MISSING_SOURCES"
  | "NOT_HELPFUL"
  | "FACTUALLY_CORRECT"
  | "COMPLETE"
  | "RELEVANT_SOURCES"
  | "HELPFUL"
  | "NOT_BASED_ON_DOCUMENTS"
  | "NOT_COMPLETE"
  | "NOT_CONCISE"
  | "OTHER"
  | (string & {});
const MessageUsefulnessReason = S.String;

export type MessageUsefulnessComment = string;
export interface MessageUsefulnessFeedback {
  usefulness: MessageUsefulness;
  reason?: MessageUsefulnessReason;
  comment?: string;
  submittedAt: Date;
}
const MessageUsefulnessFeedback = /*@__PURE__*/ __L.at(
  __c37,
  4,
) as any as S.Schema<MessageUsefulnessFeedback>;
export interface PutFeedbackRequest {
  applicationId: string;
  userId?: string;
  conversationId: string;
  messageId: string;
  messageCopiedAt?: Date;
  messageUsefulness?: MessageUsefulnessFeedback;
}
const PutFeedbackRequest = /*@__PURE__*/ __L.at(__c37, 5) as any as S.Schema<PutFeedbackRequest>;
export interface PutFeedbackResponse {}
const PutFeedbackResponse = EndOfInputEvent as any as S.Schema<PutFeedbackResponse>;
export interface MemberGroup {
  groupName: string;
  type?: MembershipType;
}
const MemberGroup = /*@__PURE__*/ __L.at(__c37, 6) as any as S.Schema<MemberGroup>;
export type MemberGroups = MemberGroup[];
const MemberGroups = /*@__PURE__*/ __L.at(__c37, 7);
export type DataSourceUserId = string;
export interface MemberUser {
  userId: string;
  type?: MembershipType;
}
const MemberUser = /*@__PURE__*/ __L.at(__c38, 0) as any as S.Schema<MemberUser>;
export type MemberUsers = MemberUser[];
const MemberUsers = /*@__PURE__*/ __L.at(__c38, 1);
export interface GroupMembers {
  memberGroups?: MemberGroup[];
  memberUsers?: MemberUser[];
  s3PathForGroupMembers?: S3;
}
const GroupMembers = /*@__PURE__*/ __L.at(__c38, 2) as any as S.Schema<GroupMembers>;
export interface PutGroupRequest {
  applicationId: string;
  indexId: string;
  groupName: string;
  dataSourceId?: string;
  type: MembershipType;
  groupMembers: GroupMembers;
  roleArn?: string;
}
const PutGroupRequest = /*@__PURE__*/ __L.at(__c38, 3) as any as S.Schema<PutGroupRequest>;
export interface PutGroupResponse {}
const PutGroupResponse = EndOfInputEvent as any as S.Schema<PutGroupResponse>;
export type QueryText = string;
export interface RetrieverContentSource {
  retrieverId: string;
}
const RetrieverContentSource = /*@__PURE__*/ __L.at(
  __c38,
  4,
) as any as S.Schema<RetrieverContentSource>;
export type ContentSource = { retriever: RetrieverContentSource };
const ContentSource = /*@__PURE__*/ __L.at(__c38, 5);
export type MaxResults = number;
export interface SearchRelevantContentRequest {
  applicationId: string;
  queryText: string;
  contentSource: ContentSource;
  attributeFilter?: AttributeFilter;
  maxResults?: number;
  nextToken?: string;
}
const SearchRelevantContentRequest = /*@__PURE__*/ __L.at(
  __c38,
  6,
) as any as S.Schema<SearchRelevantContentRequest>;
export type ScoreConfidence =
  | "VERY_HIGH"
  | "HIGH"
  | "MEDIUM"
  | "LOW"
  | "NOT_AVAILABLE"
  | (string & {});
const ScoreConfidence = S.String;

export interface ScoreAttributes {
  scoreConfidence?: ScoreConfidence;
}
const ScoreAttributes = /*@__PURE__*/ __L.at(__c38, 7) as any as S.Schema<ScoreAttributes>;
export interface RelevantContent {
  content?: string;
  documentId?: string;
  documentTitle?: string;
  documentUri?: string;
  documentAttributes?: DocumentAttribute[];
  scoreAttributes?: ScoreAttributes;
}
const RelevantContent = /*@__PURE__*/ __L.at(__c39, 0) as any as S.Schema<RelevantContent>;
export type RelevantContentList = RelevantContent[];
const RelevantContentList = /*@__PURE__*/ __L.at(__c39, 1);
export interface SearchRelevantContentResponse {
  relevantContent?: RelevantContent[];
  nextToken?: string;
}
const SearchRelevantContentResponse = /*@__PURE__*/ __L.at(
  __c39,
  2,
) as any as S.Schema<SearchRelevantContentResponse>;
export interface StartDataSourceSyncJobRequest {
  dataSourceId: string;
  applicationId: string;
  indexId: string;
}
const StartDataSourceSyncJobRequest = /*@__PURE__*/ __L.at(
  __c39,
  3,
) as any as S.Schema<StartDataSourceSyncJobRequest>;
export interface StartDataSourceSyncJobResponse {
  executionId?: string;
}
const StartDataSourceSyncJobResponse = /*@__PURE__*/ __L.at(
  __c39,
  4,
) as any as S.Schema<StartDataSourceSyncJobResponse>;
export interface StopDataSourceSyncJobRequest {
  dataSourceId: string;
  applicationId: string;
  indexId: string;
}
const StopDataSourceSyncJobRequest = /*@__PURE__*/ __L.at(
  __c39,
  5,
) as any as S.Schema<StopDataSourceSyncJobRequest>;
export interface StopDataSourceSyncJobResponse {}
const StopDataSourceSyncJobResponse =
  EndOfInputEvent as any as S.Schema<StopDataSourceSyncJobResponse>;
export interface TagResourceRequest {
  resourceARN: string;
  tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c39, 6) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = EndOfInputEvent as any as S.Schema<TagResourceResponse>;
export type TagKeys = string[];
const TagKeys = QIamActions as any as S.Schema<TagKeys>;
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c39,
  7,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = EndOfInputEvent as any as S.Schema<UntagResourceResponse>;
export interface UpdateApplicationRequest {
  applicationId: string;
  identityCenterInstanceArn?: string;
  displayName?: string;
  description?: string;
  roleArn?: string;
  attachmentsConfiguration?: AttachmentsConfiguration;
  qAppsConfiguration?: QAppsConfiguration;
  personalizationConfiguration?: PersonalizationConfiguration;
  autoSubscriptionConfiguration?: AutoSubscriptionConfiguration;
}
const UpdateApplicationRequest = /*@__PURE__*/ __L.at(
  __c40,
  0,
) as any as S.Schema<UpdateApplicationRequest>;
export interface UpdateApplicationResponse {}
const UpdateApplicationResponse = EndOfInputEvent as any as S.Schema<UpdateApplicationResponse>;
export interface OrchestrationConfiguration {
  control: OrchestrationControl;
}
const OrchestrationConfiguration =
  AppliedOrchestrationConfiguration as any as S.Schema<OrchestrationConfiguration>;
export interface BlockedPhrasesConfigurationUpdate {
  blockedPhrasesToCreateOrUpdate?: string[];
  blockedPhrasesToDelete?: string[];
  systemMessageOverride?: string;
}
const BlockedPhrasesConfigurationUpdate = /*@__PURE__*/ __L.at(
  __c40,
  1,
) as any as S.Schema<BlockedPhrasesConfigurationUpdate>;
export interface CreatorModeConfiguration {
  creatorModeControl: CreatorModeControl;
}
const CreatorModeConfiguration = /*@__PURE__*/ __L.at(
  __c40,
  2,
) as any as S.Schema<CreatorModeConfiguration>;
export interface UpdateChatControlsConfigurationRequest {
  applicationId: string;
  clientToken?: string;
  responseScope?: ResponseScope;
  orchestrationConfiguration?: OrchestrationConfiguration;
  blockedPhrasesConfigurationUpdate?: BlockedPhrasesConfigurationUpdate;
  topicConfigurationsToCreateOrUpdate?: TopicConfiguration[];
  topicConfigurationsToDelete?: TopicConfiguration[];
  creatorModeConfiguration?: CreatorModeConfiguration;
  hallucinationReductionConfiguration?: HallucinationReductionConfiguration;
}
const UpdateChatControlsConfigurationRequest = /*@__PURE__*/ __L.at(
  __c40,
  3,
) as any as S.Schema<UpdateChatControlsConfigurationRequest>;
export interface UpdateChatControlsConfigurationResponse {}
const UpdateChatControlsConfigurationResponse =
  DeleteChatControlsConfigurationResponse as any as S.Schema<UpdateChatControlsConfigurationResponse>;
export interface UpdateChatResponseConfigurationRequest {
  applicationId: string;
  chatResponseConfigurationId: string;
  displayName?: string;
  responseConfigurations: { [key: string]: ResponseConfiguration | undefined };
  clientToken?: string;
}
const UpdateChatResponseConfigurationRequest = /*@__PURE__*/ __L.at(
  __c40,
  4,
) as any as S.Schema<UpdateChatResponseConfigurationRequest>;
export interface UpdateChatResponseConfigurationResponse {}
const UpdateChatResponseConfigurationResponse =
  DeleteChatControlsConfigurationResponse as any as S.Schema<UpdateChatResponseConfigurationResponse>;
export interface UpdateDataAccessorRequest {
  applicationId: string;
  dataAccessorId: string;
  actionConfigurations: ActionConfiguration[];
  authenticationDetail?: DataAccessorAuthenticationDetail;
  displayName?: string | redacted.Redacted<string>;
}
const UpdateDataAccessorRequest = /*@__PURE__*/ __L.at(
  __c40,
  5,
) as any as S.Schema<UpdateDataAccessorRequest>;
export interface UpdateDataAccessorResponse {}
const UpdateDataAccessorResponse = EndOfInputEvent as any as S.Schema<UpdateDataAccessorResponse>;
export interface UpdateDataSourceRequest {
  applicationId: string;
  indexId: string;
  dataSourceId: string;
  displayName?: string;
  configuration?: any;
  vpcConfiguration?: DataSourceVpcConfiguration;
  description?: string;
  syncSchedule?: string;
  roleArn?: string;
  documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
  mediaExtractionConfiguration?: MediaExtractionConfiguration;
}
const UpdateDataSourceRequest = /*@__PURE__*/ __L.at(
  __c40,
  6,
) as any as S.Schema<UpdateDataSourceRequest>;
export interface UpdateDataSourceResponse {}
const UpdateDataSourceResponse = EndOfInputEvent as any as S.Schema<UpdateDataSourceResponse>;
export interface UpdateIndexRequest {
  applicationId: string;
  indexId: string;
  displayName?: string;
  description?: string;
  capacityConfiguration?: IndexCapacityConfiguration;
  documentAttributeConfigurations?: DocumentAttributeConfiguration[];
}
const UpdateIndexRequest = /*@__PURE__*/ __L.at(__c40, 7) as any as S.Schema<UpdateIndexRequest>;
export interface UpdateIndexResponse {}
const UpdateIndexResponse = EndOfInputEvent as any as S.Schema<UpdateIndexResponse>;
export interface UpdatePluginRequest {
  applicationId: string;
  pluginId: string;
  displayName?: string;
  state?: PluginState;
  serverUrl?: string;
  customPluginConfiguration?: CustomPluginConfiguration;
  authConfiguration?: PluginAuthConfiguration;
}
const UpdatePluginRequest = /*@__PURE__*/ __L.at(__c41, 0) as any as S.Schema<UpdatePluginRequest>;
export interface UpdatePluginResponse {}
const UpdatePluginResponse = EndOfInputEvent as any as S.Schema<UpdatePluginResponse>;
export interface UpdateRetrieverRequest {
  applicationId: string;
  retrieverId: string;
  configuration?: RetrieverConfiguration;
  displayName?: string;
  roleArn?: string;
}
const UpdateRetrieverRequest = /*@__PURE__*/ __L.at(
  __c41,
  1,
) as any as S.Schema<UpdateRetrieverRequest>;
export interface UpdateRetrieverResponse {}
const UpdateRetrieverResponse = EndOfInputEvent as any as S.Schema<UpdateRetrieverResponse>;
export interface UpdateSubscriptionRequest {
  applicationId: string;
  subscriptionId: string;
  type: SubscriptionType;
}
const UpdateSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c41,
  2,
) as any as S.Schema<UpdateSubscriptionRequest>;
export interface UpdateSubscriptionResponse {
  subscriptionArn?: string;
  currentSubscription?: SubscriptionDetails;
  nextSubscription?: SubscriptionDetails;
}
const UpdateSubscriptionResponse =
  CancelSubscriptionResponse as any as S.Schema<UpdateSubscriptionResponse>;
export interface UpdateUserRequest {
  applicationId: string;
  userId: string;
  userAliasesToUpdate?: UserAlias[];
  userAliasesToDelete?: UserAlias[];
}
const UpdateUserRequest = /*@__PURE__*/ __L.at(__c41, 3) as any as S.Schema<UpdateUserRequest>;
export interface UpdateUserResponse {
  userAliasesAdded?: UserAlias[];
  userAliasesUpdated?: UserAlias[];
  userAliasesDeleted?: UserAlias[];
}
const UpdateUserResponse = /*@__PURE__*/ __L.at(__c41, 4) as any as S.Schema<UpdateUserResponse>;
export interface UpdateWebExperienceRequest {
  applicationId: string;
  webExperienceId: string;
  roleArn?: string;
  authenticationConfiguration?: WebExperienceAuthConfiguration;
  title?: string;
  subtitle?: string;
  welcomeMessage?: string;
  samplePromptsControlMode?: WebExperienceSamplePromptsControlMode;
  identityProviderConfiguration?: IdentityProviderConfiguration;
  origins?: string[];
  browserExtensionConfiguration?: BrowserExtensionConfiguration;
  customizationConfiguration?: CustomizationConfiguration;
}
const UpdateWebExperienceRequest = /*@__PURE__*/ __L.at(
  __c41,
  5,
) as any as S.Schema<UpdateWebExperienceRequest>;
export interface UpdateWebExperienceResponse {}
const UpdateWebExperienceResponse = EndOfInputEvent as any as S.Schema<UpdateWebExperienceResponse>;
export type ValidationExceptionReason =
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "UNKNOWN_OPERATION"
  | (string & {});
const ValidationExceptionReason = S.String;

export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c41,
  6,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFields = ValidationExceptionField[];
const ValidationExceptionFields = /*@__PURE__*/ __L.at(__c41, 7);
export type AssociatePermissionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds or updates a permission policy for a Amazon Q Business application, allowing cross-account access for an ISV. This operation creates a new policy statement for the specified Amazon Q Business application. The policy statement defines the IAM actions that the ISV is allowed to perform on the Amazon Q Business application's resources.
 */
export const associatePermission: API.OperationMethod<
  AssociatePermissionRequest,
  AssociatePermissionResponse,
  AssociatePermissionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociatePermissionRequest,
  output: AssociatePermissionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociatePermission",
}));

export type BatchDeleteDocumentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Asynchronously deletes one or more documents added using the `BatchPutDocument` API from an Amazon Q Business index.
 *
 * You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.
 */
export const batchDeleteDocument: API.OperationMethod<
  BatchDeleteDocumentRequest,
  BatchDeleteDocumentResponse,
  BatchDeleteDocumentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteDocumentRequest,
  output: BatchDeleteDocumentResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteDocument",
}));

export type BatchPutDocumentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds one or more documents to an Amazon Q Business index.
 *
 * You use this API to:
 *
 * - ingest your structured and unstructured documents and documents stored in an Amazon S3 bucket into an Amazon Q Business index.
 *
 * - add custom attributes to documents in an Amazon Q Business index.
 *
 * - attach an access control list to the documents added to an Amazon Q Business index.
 *
 * You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.
 */
export const batchPutDocument: API.OperationMethod<
  BatchPutDocumentRequest,
  BatchPutDocumentResponse,
  BatchPutDocumentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchPutDocumentRequest,
  output: BatchPutDocumentResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchPutDocument",
}));

export type CancelSubscriptionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Unsubscribes a user or a group from their pricing tier in an Amazon Q Business application. An unsubscribed user or group loses all Amazon Q Business feature access at the start of next month.
 */
export const cancelSubscription: API.OperationMethod<
  CancelSubscriptionRequest,
  CancelSubscriptionResponse,
  CancelSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelSubscriptionRequest,
  output: CancelSubscriptionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelSubscription",
}));

export type ChatError =
  | AccessDeniedException
  | ConflictException
  | ExternalResourceException
  | InternalServerException
  | LicenseNotFoundException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts or continues a streaming Amazon Q Business conversation.
 */
export const chat: API.OperationMethod<
  ChatInput,
  ChatOutput,
  ChatError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ChatInput,
  output: ChatOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    ExternalResourceException,
    InternalServerException,
    LicenseNotFoundException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Chat",
}));

export type ChatSyncError =
  | AccessDeniedException
  | ConflictException
  | ExternalResourceException
  | InternalServerException
  | LicenseNotFoundException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts or continues a non-streaming Amazon Q Business conversation.
 */
export const chatSync: API.OperationMethod<
  ChatSyncInput,
  ChatSyncOutput,
  ChatSyncError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ChatSyncInput,
  output: ChatSyncOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    ExternalResourceException,
    InternalServerException,
    LicenseNotFoundException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ChatSync",
}));

export type CheckDocumentAccessError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Verifies if a user has access permissions for a specified document and returns the actual ACL attached to the document. Resolves user access on the document via user aliases and groups when verifying user access.
 */
export const checkDocumentAccess: API.OperationMethod<
  CheckDocumentAccessRequest,
  CheckDocumentAccessResponse,
  CheckDocumentAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CheckDocumentAccessRequest,
  output: CheckDocumentAccessResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CheckDocumentAccess",
}));

export type CreateAnonymousWebExperienceUrlError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a unique URL for anonymous Amazon Q Business web experience. This URL can only be used once and must be used within 5 minutes after it's generated.
 */
export const createAnonymousWebExperienceUrl: API.OperationMethod<
  CreateAnonymousWebExperienceUrlRequest,
  CreateAnonymousWebExperienceUrlResponse,
  CreateAnonymousWebExperienceUrlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAnonymousWebExperienceUrlRequest,
  output: CreateAnonymousWebExperienceUrlResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAnonymousWebExperienceUrl",
}));

export type CreateApplicationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Q Business application.
 *
 * There are new tiers for Amazon Q Business. Not all features in Amazon Q Business Pro are also available in Amazon Q Business Lite. For information on what's included in Amazon Q Business Lite and what's included in Amazon Q Business Pro, see Amazon Q Business tiers. You must use the Amazon Q Business console to assign subscription tiers to users.
 *
 * An Amazon Q Apps service linked role will be created if it's absent in the Amazon Web Services account when `QAppsConfiguration` is enabled in the request. For more information, see Using service-linked roles for Q Apps.
 *
 * When you create an application, Amazon Q Business may securely transmit data for processing from your selected Amazon Web Services region, but within your geography. For more information, see Cross region inference in Amazon Q Business.
 */
export const createApplication: API.OperationMethod<
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateApplicationRequest,
  output: CreateApplicationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplication",
}));

export type CreateChatResponseConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new chat response configuration for an Amazon Q Business application. This operation establishes a set of parameters that define how the system generates and formats responses to user queries in chat interactions.
 */
export const createChatResponseConfiguration: API.OperationMethod<
  CreateChatResponseConfigurationRequest,
  CreateChatResponseConfigurationResponse,
  CreateChatResponseConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateChatResponseConfigurationRequest,
  output: CreateChatResponseConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateChatResponseConfiguration",
}));

export type CreateDataAccessorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new data accessor for an ISV to access data from a Amazon Q Business application. The data accessor is an entity that represents the ISV's access to the Amazon Q Business application's data. It includes the IAM role ARN for the ISV, a friendly name, and a set of action configurations that define the specific actions the ISV is allowed to perform and any associated data filters. When the data accessor is created, an IAM Identity Center application is also created to manage the ISV's identity and authentication for accessing the Amazon Q Business application.
 */
export const createDataAccessor: API.OperationMethod<
  CreateDataAccessorRequest,
  CreateDataAccessorResponse,
  CreateDataAccessorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDataAccessorRequest,
  output: CreateDataAccessorResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataAccessor",
}));

export type CreateDataSourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a data source connector for an Amazon Q Business application.
 *
 * `CreateDataSource` is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.
 */
export const createDataSource: API.OperationMethod<
  CreateDataSourceRequest,
  CreateDataSourceResponse,
  CreateDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDataSourceRequest,
  output: CreateDataSourceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataSource",
}));

export type CreateIndexError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Q Business index.
 *
 * To determine if index creation has completed, check the `Status` field returned from a call to `DescribeIndex`. The `Status` field is set to `ACTIVE` when the index is ready to use.
 *
 * Once the index is active, you can index your documents using the `BatchPutDocument` API or the `CreateDataSource` API.
 */
export const createIndex: API.OperationMethod<
  CreateIndexRequest,
  CreateIndexResponse,
  CreateIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateIndexRequest,
  output: CreateIndexResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIndex",
}));

export type CreatePluginError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Q Business plugin.
 */
export const createPlugin: API.OperationMethod<
  CreatePluginRequest,
  CreatePluginResponse,
  CreatePluginError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePluginRequest,
  output: CreatePluginResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePlugin",
}));

export type CreateRetrieverError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a retriever to your Amazon Q Business application.
 */
export const createRetriever: API.OperationMethod<
  CreateRetrieverRequest,
  CreateRetrieverResponse,
  CreateRetrieverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateRetrieverRequest,
  output: CreateRetrieverResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRetriever",
}));

export type CreateSubscriptionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Subscribes an IAM Identity Center user or a group to a pricing tier for an Amazon Q Business application.
 *
 * Amazon Q Business offers two subscription tiers: `Q_LITE` and `Q_BUSINESS`. Subscription tier determines feature access for the user. For more information on subscriptions and pricing tiers, see Amazon Q Business pricing.
 *
 * For an example IAM role policy for assigning subscriptions, see Set up required permissions in the Amazon Q Business User Guide.
 */
export const createSubscription: API.OperationMethod<
  CreateSubscriptionRequest,
  CreateSubscriptionResponse,
  CreateSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSubscriptionRequest,
  output: CreateSubscriptionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSubscription",
}));

export type CreateUserError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a universally unique identifier (UUID) mapped to a list of local user ids within an application.
 */
export const createUser: API.OperationMethod<
  CreateUserRequest,
  CreateUserResponse,
  CreateUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUserRequest,
  output: CreateUserResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUser",
}));

export type CreateWebExperienceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Q Business web experience.
 */
export const createWebExperience: API.OperationMethod<
  CreateWebExperienceRequest,
  CreateWebExperienceResponse,
  CreateWebExperienceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWebExperienceRequest,
  output: CreateWebExperienceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWebExperience",
}));

export type DeleteApplicationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Q Business application.
 */
export const deleteApplication: API.OperationMethod<
  DeleteApplicationRequest,
  DeleteApplicationResponse,
  DeleteApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteApplicationRequest,
  output: DeleteApplicationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplication",
}));

export type DeleteAttachmentError =
  | AccessDeniedException
  | InternalServerException
  | LicenseNotFoundException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an attachment associated with a specific Amazon Q Business conversation.
 */
export const deleteAttachment: API.OperationMethod<
  DeleteAttachmentRequest,
  DeleteAttachmentResponse,
  DeleteAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAttachmentRequest,
  output: DeleteAttachmentResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    LicenseNotFoundException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAttachment",
}));

export type DeleteChatControlsConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes chat controls configured for an existing Amazon Q Business application.
 */
export const deleteChatControlsConfiguration: API.OperationMethod<
  DeleteChatControlsConfigurationRequest,
  DeleteChatControlsConfigurationResponse,
  DeleteChatControlsConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteChatControlsConfigurationRequest,
  output: DeleteChatControlsConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteChatControlsConfiguration",
}));

export type DeleteChatResponseConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a specified chat response configuration from an Amazon Q Business application.
 */
export const deleteChatResponseConfiguration: API.OperationMethod<
  DeleteChatResponseConfigurationRequest,
  DeleteChatResponseConfigurationResponse,
  DeleteChatResponseConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteChatResponseConfigurationRequest,
  output: DeleteChatResponseConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteChatResponseConfiguration",
}));

export type DeleteConversationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | LicenseNotFoundException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Q Business web experience conversation.
 */
export const deleteConversation: API.OperationMethod<
  DeleteConversationRequest,
  DeleteConversationResponse,
  DeleteConversationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConversationRequest,
  output: DeleteConversationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    LicenseNotFoundException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConversation",
}));

export type DeleteDataAccessorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a specified data accessor. This operation permanently removes the data accessor and its associated IAM Identity Center application. Any access granted to the ISV through this data accessor will be revoked.
 */
export const deleteDataAccessor: API.OperationMethod<
  DeleteDataAccessorRequest,
  DeleteDataAccessorResponse,
  DeleteDataAccessorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDataAccessorRequest,
  output: DeleteDataAccessorResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataAccessor",
}));

export type DeleteDataSourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Q Business data source connector. While the data source is being deleted, the `Status` field returned by a call to the `DescribeDataSource` API is set to `DELETING`.
 */
export const deleteDataSource: API.OperationMethod<
  DeleteDataSourceRequest,
  DeleteDataSourceResponse,
  DeleteDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDataSourceRequest,
  output: DeleteDataSourceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataSource",
}));

export type DeleteGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group. For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their chat results.
 *
 * If you want to delete, update, or replace users or sub groups of a group, you need to use the `PutGroup` operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling `PutGroup`.
 */
export const deleteGroup: API.OperationMethod<
  DeleteGroupRequest,
  DeleteGroupResponse,
  DeleteGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteGroupRequest,
  output: DeleteGroupResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGroup",
}));

export type DeleteIndexError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Q Business index.
 */
export const deleteIndex: API.OperationMethod<
  DeleteIndexRequest,
  DeleteIndexResponse,
  DeleteIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteIndexRequest,
  output: DeleteIndexResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIndex",
}));

export type DeletePluginError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Q Business plugin.
 */
export const deletePlugin: API.OperationMethod<
  DeletePluginRequest,
  DeletePluginResponse,
  DeletePluginError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePluginRequest,
  output: DeletePluginResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePlugin",
}));

export type DeleteRetrieverError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the retriever used by an Amazon Q Business application.
 */
export const deleteRetriever: API.OperationMethod<
  DeleteRetrieverRequest,
  DeleteRetrieverResponse,
  DeleteRetrieverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRetrieverRequest,
  output: DeleteRetrieverResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRetriever",
}));

export type DeleteUserError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a user by email id.
 */
export const deleteUser: API.OperationMethod<
  DeleteUserRequest,
  DeleteUserResponse,
  DeleteUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUserRequest,
  output: DeleteUserResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUser",
}));

export type DeleteWebExperienceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Q Business web experience.
 */
export const deleteWebExperience: API.OperationMethod<
  DeleteWebExperienceRequest,
  DeleteWebExperienceResponse,
  DeleteWebExperienceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWebExperienceRequest,
  output: DeleteWebExperienceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWebExperience",
}));

export type DisassociatePermissionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a permission policy from a Amazon Q Business application, revoking the cross-account access that was previously granted to an ISV. This operation deletes the specified policy statement from the application's permission policy.
 */
export const disassociatePermission: API.OperationMethod<
  DisassociatePermissionRequest,
  DisassociatePermissionResponse,
  DisassociatePermissionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociatePermissionRequest,
  output: DisassociatePermissionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociatePermission",
}));

export type GetApplicationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about an existing Amazon Q Business application.
 */
export const getApplication: API.OperationMethod<
  GetApplicationRequest,
  GetApplicationResponse,
  GetApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetApplicationRequest,
  output: GetApplicationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApplication",
}));

export type GetChatControlsConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about chat controls configured for an existing Amazon Q Business application.
 */
export const getChatControlsConfiguration: API.PaginatedOperationMethod<
  GetChatControlsConfigurationRequest,
  GetChatControlsConfigurationResponse,
  GetChatControlsConfigurationError,
  Credentials | HttpClient.HttpClient,
  TopicConfiguration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetChatControlsConfigurationRequest,
  output: GetChatControlsConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetChatControlsConfiguration",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "topicConfigurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetChatResponseConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific chat response configuration from an Amazon Q Business application. This operation returns the complete configuration settings and metadata.
 */
export const getChatResponseConfiguration: API.OperationMethod<
  GetChatResponseConfigurationRequest,
  GetChatResponseConfigurationResponse,
  GetChatResponseConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetChatResponseConfigurationRequest,
  output: GetChatResponseConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetChatResponseConfiguration",
}));

export type GetDataAccessorError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a specified data accessor. This operation returns details about the data accessor, including its display name, unique identifier, Amazon Resource Name (ARN), the associated Amazon Q Business application and IAM Identity Center application, the IAM role for the ISV, the action configurations, and the timestamps for when the data accessor was created and last updated.
 */
export const getDataAccessor: API.OperationMethod<
  GetDataAccessorRequest,
  GetDataAccessorResponse,
  GetDataAccessorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDataAccessorRequest,
  output: GetDataAccessorResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataAccessor",
}));

export type GetDataSourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about an existing Amazon Q Business data source connector.
 */
export const getDataSource: API.OperationMethod<
  GetDataSourceRequest,
  GetDataSourceResponse,
  GetDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDataSourceRequest,
  output: GetDataSourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataSource",
}));

export type GetDocumentContentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the content of a document that was ingested into Amazon Q Business. This API validates user authorization against document ACLs before returning a pre-signed URL for secure document access. You can download or view source documents referenced in chat responses through the URL.
 */
export const getDocumentContent: API.OperationMethod<
  GetDocumentContentRequest,
  GetDocumentContentResponse,
  GetDocumentContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDocumentContentRequest,
  output: GetDocumentContentResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDocumentContent",
}));

export type GetGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes a group by group name.
 */
export const getGroup: API.OperationMethod<
  GetGroupRequest,
  GetGroupResponse,
  GetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetGroupRequest,
  output: GetGroupResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGroup",
}));

export type GetIndexError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about an existing Amazon Q Business index.
 */
export const getIndex: API.OperationMethod<
  GetIndexRequest,
  GetIndexResponse,
  GetIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIndexRequest,
  output: GetIndexResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIndex",
}));

export type GetMediaError =
  | AccessDeniedException
  | InternalServerException
  | LicenseNotFoundException
  | MediaTooLargeException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the image bytes corresponding to a media object. If you have implemented your own application with the Chat and ChatSync APIs, and have enabled content extraction from visual data in Amazon Q Business, you use the GetMedia API operation to download the images so you can show them in your UI with responses.
 *
 * For more information, see Extracting semantic meaning from images and visuals.
 */
export const getMedia: API.OperationMethod<
  GetMediaRequest,
  GetMediaResponse,
  GetMediaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMediaRequest,
  output: GetMediaResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    LicenseNotFoundException,
    MediaTooLargeException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMedia",
}));

export type GetPluginError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about an existing Amazon Q Business plugin.
 */
export const getPlugin: API.OperationMethod<
  GetPluginRequest,
  GetPluginResponse,
  GetPluginError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPluginRequest,
  output: GetPluginResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPlugin",
}));

export type GetPolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the current permission policy for a Amazon Q Business application. The policy is returned as a JSON-formatted string and defines the IAM actions that are allowed or denied for the application's resources.
 */
export const getPolicy: API.OperationMethod<
  GetPolicyRequest,
  GetPolicyResponse,
  GetPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPolicyRequest,
  output: GetPolicyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicy",
}));

export type GetRetrieverError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about an existing retriever used by an Amazon Q Business application.
 */
export const getRetriever: API.OperationMethod<
  GetRetrieverRequest,
  GetRetrieverResponse,
  GetRetrieverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRetrieverRequest,
  output: GetRetrieverResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRetriever",
}));

export type GetUserError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the universally unique identifier (UUID) associated with a local user in a data source.
 */
export const getUser: API.OperationMethod<
  GetUserRequest,
  GetUserResponse,
  GetUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUserRequest,
  output: GetUserResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUser",
}));

export type GetWebExperienceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about an existing Amazon Q Business web experience.
 */
export const getWebExperience: API.OperationMethod<
  GetWebExperienceRequest,
  GetWebExperienceResponse,
  GetWebExperienceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWebExperienceRequest,
  output: GetWebExperienceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWebExperience",
}));

export type ListApplicationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists Amazon Q Business applications.
 *
 * Amazon Q Business applications may securely transmit data for processing across Amazon Web Services Regions within your geography. For more information, see Cross region inference in Amazon Q Business.
 */
export const listApplications: API.PaginatedOperationMethod<
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListApplicationsError,
  Credentials | HttpClient.HttpClient,
  Application
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListApplicationsRequest,
  output: ListApplicationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplications",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "applications",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAttachmentsError =
  | AccessDeniedException
  | InternalServerException
  | LicenseNotFoundException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of attachments associated with an Amazon Q Business web experience or a list of attachements associated with a specific Amazon Q Business conversation.
 */
export const listAttachments: API.PaginatedOperationMethod<
  ListAttachmentsRequest,
  ListAttachmentsResponse,
  ListAttachmentsError,
  Credentials | HttpClient.HttpClient,
  Attachment
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAttachmentsRequest,
  output: ListAttachmentsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    LicenseNotFoundException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAttachments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "attachments",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListChatResponseConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of all chat response configurations available in a specified Amazon Q Business application. This operation returns summary information about each configuration to help administrators manage and select appropriate response settings.
 */
export const listChatResponseConfigurations: API.PaginatedOperationMethod<
  ListChatResponseConfigurationsRequest,
  ListChatResponseConfigurationsResponse,
  ListChatResponseConfigurationsError,
  Credentials | HttpClient.HttpClient,
  ChatResponseConfiguration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListChatResponseConfigurationsRequest,
  output: ListChatResponseConfigurationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChatResponseConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "chatResponseConfigurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConversationsError =
  | AccessDeniedException
  | InternalServerException
  | LicenseNotFoundException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists one or more Amazon Q Business conversations.
 */
export const listConversations: API.PaginatedOperationMethod<
  ListConversationsRequest,
  ListConversationsResponse,
  ListConversationsError,
  Credentials | HttpClient.HttpClient,
  Conversation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListConversationsRequest,
  output: ListConversationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    LicenseNotFoundException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConversations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "conversations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataAccessorsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the data accessors for a Amazon Q Business application. This operation returns a paginated list of data accessor summaries, including the friendly name, unique identifier, ARN, associated IAM role, and creation/update timestamps for each data accessor.
 */
export const listDataAccessors: API.PaginatedOperationMethod<
  ListDataAccessorsRequest,
  ListDataAccessorsResponse,
  ListDataAccessorsError,
  Credentials | HttpClient.HttpClient,
  DataAccessor
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDataAccessorsRequest,
  output: ListDataAccessorsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataAccessors",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dataAccessors",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataSourcesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the Amazon Q Business data source connectors that you have created.
 */
export const listDataSources: API.PaginatedOperationMethod<
  ListDataSourcesRequest,
  ListDataSourcesResponse,
  ListDataSourcesError,
  Credentials | HttpClient.HttpClient,
  DataSource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDataSourcesRequest,
  output: ListDataSourcesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataSources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dataSources",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataSourceSyncJobsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get information about an Amazon Q Business data source connector synchronization.
 */
export const listDataSourceSyncJobs: API.PaginatedOperationMethod<
  ListDataSourceSyncJobsRequest,
  ListDataSourceSyncJobsResponse,
  ListDataSourceSyncJobsError,
  Credentials | HttpClient.HttpClient,
  DataSourceSyncJob
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDataSourceSyncJobsRequest,
  output: ListDataSourceSyncJobsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataSourceSyncJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "history",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDocumentsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * A list of documents attached to an index.
 */
export const listDocuments: API.PaginatedOperationMethod<
  ListDocumentsRequest,
  ListDocumentsResponse,
  ListDocumentsError,
  Credentials | HttpClient.HttpClient,
  DocumentDetails
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDocumentsRequest,
  output: ListDocumentsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDocuments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "documentDetailList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListGroupsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides a list of groups that are mapped to users.
 */
export const listGroups: API.PaginatedOperationMethod<
  ListGroupsRequest,
  ListGroupsResponse,
  ListGroupsError,
  Credentials | HttpClient.HttpClient,
  GroupSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListGroupsRequest,
  output: ListGroupsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGroups",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIndicesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the Amazon Q Business indices you have created.
 */
export const listIndices: API.PaginatedOperationMethod<
  ListIndicesRequest,
  ListIndicesResponse,
  ListIndicesError,
  Credentials | HttpClient.HttpClient,
  Index
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListIndicesRequest,
  output: ListIndicesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIndices",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "indices",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMessagesError =
  | AccessDeniedException
  | InternalServerException
  | LicenseNotFoundException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of messages associated with an Amazon Q Business web experience.
 */
export const listMessages: API.PaginatedOperationMethod<
  ListMessagesRequest,
  ListMessagesResponse,
  ListMessagesError,
  Credentials | HttpClient.HttpClient,
  Message
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMessagesRequest,
  output: ListMessagesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    LicenseNotFoundException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMessages",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "messages",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPluginActionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists configured Amazon Q Business actions for a specific plugin in an Amazon Q Business application.
 */
export const listPluginActions: API.PaginatedOperationMethod<
  ListPluginActionsRequest,
  ListPluginActionsResponse,
  ListPluginActionsError,
  Credentials | HttpClient.HttpClient,
  ActionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPluginActionsRequest,
  output: ListPluginActionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPluginActions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPluginsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists configured Amazon Q Business plugins.
 */
export const listPlugins: API.PaginatedOperationMethod<
  ListPluginsRequest,
  ListPluginsResponse,
  ListPluginsError,
  Credentials | HttpClient.HttpClient,
  Plugin
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPluginsRequest,
  output: ListPluginsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPlugins",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "plugins",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPluginTypeActionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists configured Amazon Q Business actions for any plugin type--both built-in and custom.
 */
export const listPluginTypeActions: API.PaginatedOperationMethod<
  ListPluginTypeActionsRequest,
  ListPluginTypeActionsResponse,
  ListPluginTypeActionsError,
  Credentials | HttpClient.HttpClient,
  ActionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPluginTypeActionsRequest,
  output: ListPluginTypeActionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPluginTypeActions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPluginTypeMetadataError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists metadata for all Amazon Q Business plugin types.
 */
export const listPluginTypeMetadata: API.PaginatedOperationMethod<
  ListPluginTypeMetadataRequest,
  ListPluginTypeMetadataResponse,
  ListPluginTypeMetadataError,
  Credentials | HttpClient.HttpClient,
  PluginTypeMetadataSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPluginTypeMetadataRequest,
  output: ListPluginTypeMetadataResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPluginTypeMetadata",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRetrieversError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the retriever used by an Amazon Q Business application.
 */
export const listRetrievers: API.PaginatedOperationMethod<
  ListRetrieversRequest,
  ListRetrieversResponse,
  ListRetrieversError,
  Credentials | HttpClient.HttpClient,
  Retriever
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRetrieversRequest,
  output: ListRetrieversResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRetrievers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "retrievers",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSubscriptionsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all subscriptions created in an Amazon Q Business application.
 */
export const listSubscriptions: API.PaginatedOperationMethod<
  ListSubscriptionsRequest,
  ListSubscriptionsResponse,
  ListSubscriptionsError,
  Credentials | HttpClient.HttpClient,
  Subscription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSubscriptionsRequest,
  output: ListSubscriptionsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSubscriptions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "subscriptions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of tags associated with a specified resource. Amazon Q Business applications and data sources can have tags associated with them.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListWebExperiencesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists one or more Amazon Q Business Web Experiences.
 */
export const listWebExperiences: API.PaginatedOperationMethod<
  ListWebExperiencesRequest,
  ListWebExperiencesResponse,
  ListWebExperiencesError,
  Credentials | HttpClient.HttpClient,
  WebExperience
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWebExperiencesRequest,
  output: ListWebExperiencesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWebExperiences",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "webExperiences",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutFeedbackError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables your end user to provide feedback on their Amazon Q Business generated chat responses.
 */
export const putFeedback: API.OperationMethod<
  PutFeedbackRequest,
  PutFeedbackResponse,
  PutFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutFeedbackRequest,
  output: PutFeedbackResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutFeedback",
}));

export type PutGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create, or updates, a mapping of users--who have access to a document--to groups.
 *
 * You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their Amazon Q Business chat results.
 *
 * There are two options for creating groups, either passing group members inline or using an S3 file via the S3PathForGroupMembers field. For inline groups, there is a limit of 1000 members per group and for provided S3 files there is a limit of 100 thousand members. When creating a group using an S3 file, you provide both an S3 file and a `RoleArn` for Amazon Q Buisness to access the file.
 */
export const putGroup: API.OperationMethod<
  PutGroupRequest,
  PutGroupResponse,
  PutGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutGroupRequest,
  output: PutGroupResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutGroup",
}));

export type SearchRelevantContentError =
  | AccessDeniedException
  | InternalServerException
  | LicenseNotFoundException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Searches for relevant content in a Amazon Q Business application based on a query. This operation takes a search query text, the Amazon Q Business application identifier, and optional filters (such as content source and maximum results) as input. It returns a list of relevant content items, where each item includes the content text, the unique document identifier, the document title, the document URI, any relevant document attributes, and score attributes indicating the confidence level of the relevance.
 */
export const searchRelevantContent: API.PaginatedOperationMethod<
  SearchRelevantContentRequest,
  SearchRelevantContentResponse,
  SearchRelevantContentError,
  Credentials | HttpClient.HttpClient,
  RelevantContent
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchRelevantContentRequest,
  output: SearchRelevantContentResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    LicenseNotFoundException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchRelevantContent",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "relevantContent",
    pageSize: "maxResults",
  } as const,
})) as any;

export type StartDataSourceSyncJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a data source connector synchronization job. If a synchronization job is already in progress, Amazon Q Business returns a `ConflictException`.
 */
export const startDataSourceSyncJob: API.OperationMethod<
  StartDataSourceSyncJobRequest,
  StartDataSourceSyncJobResponse,
  StartDataSourceSyncJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartDataSourceSyncJobRequest,
  output: StartDataSourceSyncJobResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDataSourceSyncJob",
}));

export type StopDataSourceSyncJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops an Amazon Q Business data source connector synchronization job already in progress.
 */
export const stopDataSourceSyncJob: API.OperationMethod<
  StopDataSourceSyncJobRequest,
  StopDataSourceSyncJobResponse,
  StopDataSourceSyncJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopDataSourceSyncJobRequest,
  output: StopDataSourceSyncJobResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopDataSourceSyncJob",
}));

export type TagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds the specified tag to the specified Amazon Q Business application or data source resource. If the tag already exists, the existing value is replaced with the new value.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a tag from an Amazon Q Business application or a data source.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateApplicationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing Amazon Q Business application.
 *
 * Amazon Q Business applications may securely transmit data for processing across Amazon Web Services Regions within your geography. For more information, see Cross region inference in Amazon Q Business.
 *
 * An Amazon Q Apps service-linked role will be created if it's absent in the Amazon Web Services account when `QAppsConfiguration` is enabled in the request. For more information, see Using service-linked roles for Q Apps.
 */
export const updateApplication: API.OperationMethod<
  UpdateApplicationRequest,
  UpdateApplicationResponse,
  UpdateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateApplicationRequest,
  output: UpdateApplicationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplication",
}));

export type UpdateChatControlsConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a set of chat controls configured for an existing Amazon Q Business application.
 */
export const updateChatControlsConfiguration: API.OperationMethod<
  UpdateChatControlsConfigurationRequest,
  UpdateChatControlsConfigurationResponse,
  UpdateChatControlsConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateChatControlsConfigurationRequest,
  output: UpdateChatControlsConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateChatControlsConfiguration",
}));

export type UpdateChatResponseConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing chat response configuration in an Amazon Q Business application. This operation allows administrators to modify configuration settings, display name, and response parameters to refine how the system generates responses.
 */
export const updateChatResponseConfiguration: API.OperationMethod<
  UpdateChatResponseConfigurationRequest,
  UpdateChatResponseConfigurationResponse,
  UpdateChatResponseConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateChatResponseConfigurationRequest,
  output: UpdateChatResponseConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateChatResponseConfiguration",
}));

export type UpdateDataAccessorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing data accessor. This operation allows modifying the action configurations (the allowed actions and associated filters) and the display name of the data accessor. It does not allow changing the IAM role associated with the data accessor or other core properties of the data accessor.
 */
export const updateDataAccessor: API.OperationMethod<
  UpdateDataAccessorRequest,
  UpdateDataAccessorResponse,
  UpdateDataAccessorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDataAccessorRequest,
  output: UpdateDataAccessorResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDataAccessor",
}));

export type UpdateDataSourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing Amazon Q Business data source connector.
 */
export const updateDataSource: API.OperationMethod<
  UpdateDataSourceRequest,
  UpdateDataSourceResponse,
  UpdateDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDataSourceRequest,
  output: UpdateDataSourceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDataSource",
}));

export type UpdateIndexError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an Amazon Q Business index.
 */
export const updateIndex: API.OperationMethod<
  UpdateIndexRequest,
  UpdateIndexResponse,
  UpdateIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateIndexRequest,
  output: UpdateIndexResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIndex",
}));

export type UpdatePluginError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an Amazon Q Business plugin.
 */
export const updatePlugin: API.OperationMethod<
  UpdatePluginRequest,
  UpdatePluginResponse,
  UpdatePluginError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdatePluginRequest,
  output: UpdatePluginResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePlugin",
}));

export type UpdateRetrieverError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the retriever used for your Amazon Q Business application.
 */
export const updateRetriever: API.OperationMethod<
  UpdateRetrieverRequest,
  UpdateRetrieverResponse,
  UpdateRetrieverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRetrieverRequest,
  output: UpdateRetrieverResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRetriever",
}));

export type UpdateSubscriptionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the pricing tier for an Amazon Q Business subscription. Upgrades are instant. Downgrades apply at the start of the next month. Subscription tier determines feature access for the user. For more information on subscriptions and pricing tiers, see Amazon Q Business pricing.
 */
export const updateSubscription: API.OperationMethod<
  UpdateSubscriptionRequest,
  UpdateSubscriptionResponse,
  UpdateSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSubscriptionRequest,
  output: UpdateSubscriptionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSubscription",
}));

export type UpdateUserError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a information associated with a user id.
 */
export const updateUser: API.OperationMethod<
  UpdateUserRequest,
  UpdateUserResponse,
  UpdateUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateUserRequest,
  output: UpdateUserResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateUser",
}));

export type UpdateWebExperienceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an Amazon Q Business web experience.
 */
export const updateWebExperience: API.OperationMethod<
  UpdateWebExperienceRequest,
  UpdateWebExperienceResponse,
  UpdateWebExperienceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWebExperienceRequest,
  output: UpdateWebExperienceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWebExperience",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          conditionOperator: PermissionConditionOperator,
          conditionKey: S.String,
          conditionValues: PermissionConditionValues,
        }),
      ).annotate({ identifier: "PermissionCondition" });
    case 2:
      return S.Array(PermissionCondition);
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          statementId: S.String,
          actions: QIamActions,
          conditions: S.optional(PermissionConditions),
          principal: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/applications/{applicationId}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociatePermissionRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ statement: S.optional(S.String) })).annotate({
        identifier: "AssociatePermissionResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ documentId: S.String })).annotate({
        identifier: "DeleteDocument",
      });
    case 6:
      return S.Array(DeleteDocument);
    case 7:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          documents: DeleteDocuments,
          dataSourceSyncId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/applications/{applicationId}/indices/{indexId}/documents/delete",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDeleteDocumentRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ errorMessage: S.optional(S.String), errorCode: S.optional(ErrorCode) }),
      ).annotate({ identifier: "ErrorDetail" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          error: S.optional(ErrorDetail),
          dataSourceId: S.optional(S.String),
        }),
      ).annotate({ identifier: "FailedDocument" });
    case 2:
      return S.Array(FailedDocument);
    case 3:
      return S.suspend(() => S.Struct({ failedDocuments: S.optional(FailedDocuments) })).annotate({
        identifier: "BatchDeleteDocumentResponse",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ stringValue: S.String }),
        /*@__PURE__*/ S.Struct({ stringListValue: DocumentAttributeStringListValue }),
        /*@__PURE__*/ S.Struct({ longValue: S.Number }),
        /*@__PURE__*/ S.Struct({
          dateValue: /*@__PURE__*/ S.Date.pipe(/*@__PURE__*/ T.TimestampFormat("epoch-seconds")),
        }),
      ]);
    case 5:
      return S.suspend(() => S.Struct({ name: S.String, value: DocumentAttributeValue })).annotate({
        identifier: "DocumentAttribute",
      });
    case 6:
      return S.Array(DocumentAttribute);
    case 7:
      return S.suspend(() => S.Struct({ bucket: S.String, key: S.String })).annotate({
        identifier: "S3",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ blob: T.Blob }),
        /*@__PURE__*/ S.Struct({ s3: S3 }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          access: ReadAccessType,
          membershipType: S.optional(MembershipType),
        }),
      ).annotate({ identifier: "PrincipalUser" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          access: ReadAccessType,
          membershipType: S.optional(MembershipType),
        }),
      ).annotate({ identifier: "PrincipalGroup" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ user: PrincipalUser }),
        /*@__PURE__*/ S.Struct({ group: PrincipalGroup }),
      ]);
    case 4:
      return S.Array(Principal);
    case 5:
      return S.suspend(() =>
        S.Struct({ principals: Principals, memberRelation: S.optional(MemberRelation) }),
      ).annotate({ identifier: "AccessControl" });
    case 6:
      return S.Array(AccessControl);
    case 7:
      return S.suspend(() =>
        S.Struct({ accessControls: AccessControls, memberRelation: S.optional(MemberRelation) }),
      ).annotate({ identifier: "AccessConfiguration" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          key: S.String,
          operator: DocumentEnrichmentConditionOperator,
          value: S.optional(DocumentAttributeValue),
        }),
      ).annotate({
        identifier: "DocumentAttributeCondition",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          key: S.String,
          value: S.optional(DocumentAttributeValue),
          attributeValueOperator: S.optional(AttributeValueOperator),
        }),
      ).annotate({ identifier: "DocumentAttributeTarget" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          condition: S.optional(DocumentAttributeCondition),
          target: S.optional(DocumentAttributeTarget),
          documentContentOperator: S.optional(DocumentContentOperator),
        }),
      ).annotate({
        identifier: "InlineDocumentEnrichmentConfiguration",
      });
    case 3:
      return S.Array(InlineDocumentEnrichmentConfiguration);
    case 4:
      return S.suspend(() =>
        S.Struct({
          invocationCondition: S.optional(DocumentAttributeCondition),
          lambdaArn: S.optional(S.String),
          s3BucketName: S.optional(S.String),
          roleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "HookConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          inlineConfigurations: S.optional(InlineDocumentEnrichmentConfigurations),
          preExtractionHookConfiguration: S.optional(HookConfiguration),
          postExtractionHookConfiguration: S.optional(HookConfiguration),
        }),
      ).annotate({
        identifier: "DocumentEnrichmentConfiguration",
      });
    case 6:
      return S.suspend(() => S.Struct({ imageExtractionStatus: ImageExtractionStatus })).annotate({
        identifier: "ImageExtractionConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ audioExtractionStatus: AudioExtractionStatus })).annotate({
        identifier: "AudioExtractionConfiguration",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ videoExtractionStatus: VideoExtractionStatus })).annotate({
        identifier: "VideoExtractionConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          imageExtractionConfiguration: S.optional(ImageExtractionConfiguration),
          audioExtractionConfiguration: S.optional(AudioExtractionConfiguration),
          videoExtractionConfiguration: S.optional(VideoExtractionConfiguration),
        }),
      ).annotate({
        identifier: "MediaExtractionConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          attributes: S.optional(DocumentAttributes),
          content: S.optional(DocumentContent),
          contentType: S.optional(ContentType),
          title: S.optional(S.String),
          accessConfiguration: S.optional(AccessConfiguration),
          documentEnrichmentConfiguration: S.optional(DocumentEnrichmentConfiguration),
          mediaExtractionConfiguration: S.optional(MediaExtractionConfiguration),
        }),
      ).annotate({ identifier: "Document" });
    case 3:
      return S.Array(Document);
    case 4:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          documents: Documents,
          roleArn: S.optional(S.String),
          dataSourceSyncId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/applications/{applicationId}/indices/{indexId}/documents",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchPutDocumentRequest" });
    case 5:
      return S.suspend(() => S.Struct({ failedDocuments: S.optional(FailedDocuments) })).annotate({
        identifier: "BatchPutDocumentResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          subscriptionId: S.String.pipe(T.HttpLabel("subscriptionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/applications/{applicationId}/subscriptions/{subscriptionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelSubscriptionRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ type: S.optional(SubscriptionType) })).annotate({
        identifier: "SubscriptionDetails",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          subscriptionArn: S.optional(S.String),
          currentSubscription: S.optional(SubscriptionDetails),
          nextSubscription: S.optional(SubscriptionDetails),
        }),
      ).annotate({
        identifier: "CancelSubscriptionResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ pluginId: S.String })).annotate({
        identifier: "PluginConfiguration",
      });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ pluginConfiguration: PluginConfiguration })]);
    case 3:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<AttributeFilter> => AttributeFilter).annotate({
          identifier: "AttributeFilter",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          andAllFilters: S.optional(
            S.suspend(() => AttributeFilters).annotate({ identifier: "AttributeFilters" }),
          ),
          orAllFilters: S.optional(
            S.suspend(() => AttributeFilters).annotate({ identifier: "AttributeFilters" }),
          ),
          notFilter: S.optional(
            S.suspend((): S.Schema<AttributeFilter> => AttributeFilter).annotate({
              identifier: "AttributeFilter",
            }),
          ),
          equalsTo: S.optional(DocumentAttribute),
          containsAll: S.optional(DocumentAttribute),
          containsAny: S.optional(DocumentAttribute),
          greaterThan: S.optional(DocumentAttribute),
          greaterThanOrEquals: S.optional(DocumentAttribute),
          lessThan: S.optional(DocumentAttribute),
          lessThanOrEquals: S.optional(DocumentAttribute),
        }),
      ).annotate({ identifier: "AttributeFilter" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          chatMode: S.optional(ChatMode),
          chatModeConfiguration: S.optional(ChatModeConfiguration),
          attributeFilter: S.optional(AttributeFilter),
        }),
      ).annotate({ identifier: "ConfigurationEvent" });
    case 6:
      return S.suspend(() => S.Struct({ userMessage: S.String })).annotate({
        identifier: "TextInputEvent",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ conversationId: S.String, attachmentId: S.String }),
      ).annotate({ identifier: "ConversationSource" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ conversation: ConversationSource })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          data: S.optional(T.Blob),
          name: S.optional(S.String),
          copyFrom: S.optional(CopyFromSource),
        }),
      ).annotate({ identifier: "AttachmentInput" });
    case 2:
      return S.suspend(() => S.Struct({ attachment: S.optional(AttachmentInput) })).annotate({
        identifier: "AttachmentInputEvent",
      });
    case 3:
      return S.suspend(() => S.Struct({ value: S.Any })).annotate({
        identifier: "ActionExecutionPayloadField",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ ActionExecutionPayloadField.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          pluginId: S.String,
          payload: ActionExecutionPayload,
          payloadFieldNameSeparator: S.String,
        }),
      ).annotate({ identifier: "ActionExecutionEvent" });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "EndOfInputEvent",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ responseMap: AuthorizationResponseMap })).annotate({
        identifier: "AuthChallengeResponseEvent",
      });
    case 1:
      return T.InputEventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ configurationEvent: ConfigurationEvent }),
          /*@__PURE__*/ S.Struct({ textEvent: TextInputEvent }),
          /*@__PURE__*/ S.Struct({ attachmentEvent: AttachmentInputEvent }),
          /*@__PURE__*/ S.Struct({ actionExecutionEvent: ActionExecutionEvent }),
          /*@__PURE__*/ S.Struct({ endOfInputEvent: EndOfInputEvent }),
          /*@__PURE__*/ S.Struct({ authChallengeResponseEvent: AuthChallengeResponseEvent }),
        ]),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          userId: S.optional(S.String).pipe(T.HttpQuery("userId")),
          userGroups: S.optional(UserGroups).pipe(T.HttpQuery("userGroups")),
          conversationId: S.optional(S.String).pipe(T.HttpQuery("conversationId")),
          parentMessageId: S.optional(S.String).pipe(T.HttpQuery("parentMessageId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          inputStream: S.optional(ChatInputStream).pipe(T.HttpPayload()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/applications/{applicationId}/conversations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ChatInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          systemMessageType: S.optional(SystemMessageType),
          conversationId: S.optional(S.String),
          userMessageId: S.optional(S.String),
          systemMessageId: S.optional(S.String),
          systemMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "TextOutputEvent" });
    case 4:
      return S.suspend(() => S.Struct({ text: S.optional(S.String) })).annotate({
        identifier: "SnippetExcerpt",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ mediaId: S.optional(S.String), mediaMimeType: S.optional(S.String) }),
      ).annotate({ identifier: "ImageSourceDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          mediaId: S.optional(S.String),
          mediaMimeType: S.optional(S.String),
          startTimeMilliseconds: S.optional(S.Number),
          endTimeMilliseconds: S.optional(S.Number),
          audioExtractionType: S.optional(AudioExtractionType),
        }),
      ).annotate({ identifier: "AudioSourceDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          mediaId: S.optional(S.String),
          mediaMimeType: S.optional(S.String),
          startTimeMilliseconds: S.optional(S.Number),
          endTimeMilliseconds: S.optional(S.Number),
          videoExtractionType: S.optional(VideoExtractionType),
        }),
      ).annotate({ identifier: "VideoSourceDetails" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ imageSourceDetails: ImageSourceDetails }),
        /*@__PURE__*/ S.Struct({ audioSourceDetails: AudioSourceDetails }),
        /*@__PURE__*/ S.Struct({ videoSourceDetails: VideoSourceDetails }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          beginOffset: S.optional(S.Number),
          endOffset: S.optional(S.Number),
          snippetExcerpt: S.optional(SnippetExcerpt),
          mediaId: S.optional(S.String),
          mediaMimeType: S.optional(S.String),
          sourceDetails: S.optional(SourceDetails),
        }),
      ).annotate({ identifier: "TextSegment" });
    case 2:
      return S.Array(TextSegment);
    case 3:
      return S.suspend(() =>
        S.Struct({
          title: S.optional(S.String),
          snippet: S.optional(S.String),
          url: S.optional(S.String),
          citationNumber: S.optional(S.Number),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          textMessageSegments: S.optional(TextSegmentList),
          documentId: S.optional(S.String),
          indexId: S.optional(S.String),
          datasourceId: S.optional(S.String),
        }),
      ).annotate({ identifier: "SourceAttribution" });
    case 4:
      return S.Array(SourceAttribution).pipe(/*@__PURE__*/ T.Sparse());
    case 5:
      return S.suspend(() =>
        S.Struct({
          conversationId: S.optional(S.String),
          userMessageId: S.optional(S.String),
          systemMessageId: S.optional(S.String),
          sourceAttributions: S.optional(SourceAttributions),
          finalTextMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "MetadataEvent" });
    case 6:
      return S.suspend(() =>
        S.Struct({ value: S.optional(S.Any), displayValue: S.optional(S.Any) }),
      ).annotate({
        identifier: "ActionReviewPayloadFieldAllowedValue",
      });
    case 7:
      return S.Array(ActionReviewPayloadFieldAllowedValue);
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(S.String),
          displayOrder: S.optional(S.Number),
          displayDescription: S.optional(S.String),
          type: S.optional(ActionPayloadFieldType),
          value: S.optional(S.Any),
          allowedValues: S.optional(ActionReviewPayloadFieldAllowedValues),
          allowedFormat: S.optional(S.String),
          arrayItemJsonSchema: S.optional(S.Any),
          required: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ActionReviewPayloadField" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ ActionReviewPayloadField.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          conversationId: S.optional(S.String),
          userMessageId: S.optional(S.String),
          systemMessageId: S.optional(S.String),
          pluginId: S.optional(S.String),
          pluginType: S.optional(PluginType),
          payload: S.optional(ActionReviewPayload),
          payloadFieldNameSeparator: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActionReviewEvent" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          status: S.optional(AttachmentStatus),
          error: S.optional(ErrorDetail),
          attachmentId: S.optional(S.String),
          conversationId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AttachmentOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          conversationId: S.optional(S.String),
          userMessageId: S.optional(S.String),
          systemMessageId: S.optional(S.String),
          attachment: S.optional(AttachmentOutput),
        }),
      ).annotate({ identifier: "FailedAttachmentEvent" });
    case 5:
      return S.suspend(() => S.Struct({ authorizationUrl: S.String })).annotate({
        identifier: "AuthChallengeRequestEvent",
      });
    case 6:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ textEvent: TextOutputEvent }),
          /*@__PURE__*/ S.Struct({ metadataEvent: MetadataEvent }),
          /*@__PURE__*/ S.Struct({ actionReviewEvent: ActionReviewEvent }),
          /*@__PURE__*/ S.Struct({ failedAttachmentEvent: FailedAttachmentEvent }),
          /*@__PURE__*/ S.Struct({ authChallengeRequestEvent: AuthChallengeRequestEvent }),
        ]),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({ outputStream: S.optional(ChatOutputStream).pipe(T.HttpPayload()) }),
      ).annotate({ identifier: "ChatOutput" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AttachmentInput);
    case 1:
      return S.suspend(() => S.Struct({ responseMap: AuthorizationResponseMap })).annotate({
        identifier: "AuthChallengeResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          userId: S.optional(S.String).pipe(T.HttpQuery("userId")),
          userGroups: S.optional(UserGroups).pipe(T.HttpQuery("userGroups")),
          userMessage: S.optional(S.String),
          attachments: S.optional(AttachmentsInput),
          actionExecution: S.optional(ActionExecution),
          authChallengeResponse: S.optional(AuthChallengeResponse),
          conversationId: S.optional(S.String),
          parentMessageId: S.optional(S.String),
          attributeFilter: S.optional(AttributeFilter),
          chatMode: S.optional(ChatMode),
          chatModeConfiguration: S.optional(ChatModeConfiguration),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/applications/{applicationId}/conversations?sync" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ChatSyncInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          pluginId: S.optional(S.String),
          pluginType: S.optional(PluginType),
          payload: S.optional(ActionReviewPayload),
          payloadFieldNameSeparator: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActionReview" });
    case 4:
      return S.suspend(() => S.Struct({ authorizationUrl: S.String })).annotate({
        identifier: "AuthChallengeRequest",
      });
    case 5:
      return S.Array(AttachmentOutput);
    case 6:
      return S.suspend(() =>
        S.Struct({
          conversationId: S.optional(S.String),
          systemMessage: S.optional(S.String),
          systemMessageId: S.optional(S.String),
          userMessageId: S.optional(S.String),
          actionReview: S.optional(ActionReview),
          authChallengeRequest: S.optional(AuthChallengeRequest),
          sourceAttributions: S.optional(SourceAttributions),
          failedAttachments: S.optional(AttachmentsOutput),
        }),
      ).annotate({ identifier: "ChatSyncOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          userId: S.String.pipe(T.HttpLabel("userId")),
          documentId: S.String.pipe(T.HttpLabel("documentId")),
          dataSourceId: S.optional(S.String).pipe(T.HttpQuery("dataSourceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{applicationId}/index/{indexId}/users/{userId}/documents/{documentId}/check-document-access",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CheckDocumentAccessRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), type: S.optional(MembershipType) }),
      ).annotate({ identifier: "AssociatedGroup" });
    case 1:
      return S.Array(AssociatedGroup);
    case 2:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), type: S.optional(MembershipType) }),
      ).annotate({ identifier: "AssociatedUser" });
    case 3:
      return S.Array(AssociatedUser);
    case 4:
      return S.suspend(() =>
        S.Struct({
          memberRelation: S.optional(MemberRelation),
          users: S.optional(DocumentAclUsers),
          groups: S.optional(DocumentAclGroups),
        }),
      ).annotate({ identifier: "DocumentAclCondition" });
    case 5:
      return S.Array(DocumentAclCondition);
    case 6:
      return S.suspend(() =>
        S.Struct({
          memberRelation: S.optional(MemberRelation),
          conditions: S.optional(DocumentAclConditions),
        }),
      ).annotate({ identifier: "DocumentAclMembership" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          allowlist: S.optional(DocumentAclMembership),
          denyList: S.optional(DocumentAclMembership),
        }),
      ).annotate({ identifier: "DocumentAcl" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          userGroups: S.optional(AssociatedGroups),
          userAliases: S.optional(AssociatedUsers),
          hasAccess: S.optional(S.Boolean),
          documentAcl: S.optional(DocumentAcl),
        }),
      ).annotate({
        identifier: "CheckDocumentAccessResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          webExperienceId: S.String.pipe(T.HttpLabel("webExperienceId")),
          sessionDurationInMinutes: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/applications/{applicationId}/experiences/{webExperienceId}/anonymous-url",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAnonymousWebExperienceUrlRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ anonymousUrl: S.optional(S.String) })).annotate({
        identifier: "CreateAnonymousWebExperienceUrlResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ kmsKeyId: S.optional(SensitiveString) })).annotate({
        identifier: "EncryptionConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "Tag",
      });
    case 5:
      return S.Array(Tag);
    case 6:
      return S.suspend(() => S.Struct({ attachmentsControlMode: AttachmentsControlMode })).annotate(
        { identifier: "AttachmentsConfiguration" },
      );
    case 7:
      return S.suspend(() => S.Struct({ qAppsControlMode: QAppsControlMode })).annotate({
        identifier: "QAppsConfiguration",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ personalizationControlMode: PersonalizationControlMode }),
      ).annotate({
        identifier: "PersonalizationConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ clientNamespace: S.String })).annotate({
        identifier: "QuickSightConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          displayName: S.String,
          roleArn: S.optional(S.String),
          identityType: S.optional(IdentityType),
          iamIdentityProviderArn: S.optional(S.String),
          identityCenterInstanceArn: S.optional(S.String),
          clientIdsForOIDC: S.optional(ClientIdsForOIDC),
          description: S.optional(S.String),
          encryptionConfiguration: S.optional(EncryptionConfiguration),
          tags: S.optional(Tags),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          attachmentsConfiguration: S.optional(AttachmentsConfiguration),
          qAppsConfiguration: S.optional(QAppsConfiguration),
          personalizationConfiguration: S.optional(PersonalizationConfiguration),
          quickSightConfiguration: S.optional(QuickSightConfiguration),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/applications" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateApplicationRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ applicationId: S.optional(S.String), applicationArn: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateApplicationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          responseLength: S.optional(S.String),
          targetAudience: S.optional(S.String),
          perspective: S.optional(S.String),
          outputStyle: S.optional(S.String),
          identity: S.optional(S.String),
          tone: S.optional(S.String),
          customInstructions: S.optional(S.String),
          examples: S.optional(S.String),
        }),
      ).annotate({ identifier: "InstructionCollection" });
    case 5:
      return S.suspend(() =>
        S.Struct({ instructionCollection: S.optional(InstructionCollection) }),
      ).annotate({ identifier: "ResponseConfiguration" });
    case 6:
      return S.Record(
        ResponseConfigurationType,
        /*@__PURE__*/ ResponseConfiguration.pipe(S.optional),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          displayName: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          responseConfigurations: ResponseConfigurations,
          tags: S.optional(Tags),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/applications/{applicationId}/chatresponseconfigurations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateChatResponseConfigurationRequest",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ chatResponseConfigurationId: S.String, chatResponseConfigurationArn: S.String }),
      ).annotate({
        identifier: "CreateChatResponseConfigurationResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ documentAttributeFilter: AttributeFilter })).annotate({
        identifier: "ActionFilterConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ action: S.String, filterConfiguration: S.optional(ActionFilterConfiguration) }),
      ).annotate({ identifier: "ActionConfiguration" });
    case 3:
      return S.Array(ActionConfiguration);
    case 4:
      return S.suspend(() => S.Struct({ idcTrustedTokenIssuerArn: S.String })).annotate({
        identifier: "DataAccessorIdcTrustedTokenIssuerConfiguration",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          idcTrustedTokenIssuerConfiguration: DataAccessorIdcTrustedTokenIssuerConfiguration,
        }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          authenticationType: DataAccessorAuthenticationType,
          authenticationConfiguration: S.optional(DataAccessorAuthenticationConfiguration),
          externalIds: S.optional(DataAccessorExternalIds),
        }),
      ).annotate({
        identifier: "DataAccessorAuthenticationDetail",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          principal: S.String,
          actionConfigurations: ActionConfigurationList,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          displayName: SensitiveString,
          authenticationDetail: S.optional(DataAccessorAuthenticationDetail),
          tags: S.optional(Tags),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/applications/{applicationId}/dataaccessors" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDataAccessorRequest",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          dataAccessorId: S.String,
          idcApplicationArn: S.String,
          dataAccessorArn: S.String,
        }),
      ).annotate({
        identifier: "CreateDataAccessorResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ subnetIds: SubnetIds, securityGroupIds: SecurityGroupIds }),
      ).annotate({
        identifier: "DataSourceVpcConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          displayName: S.String,
          configuration: S.Any,
          vpcConfiguration: S.optional(DataSourceVpcConfiguration),
          description: S.optional(S.String),
          tags: S.optional(Tags),
          syncSchedule: S.optional(S.String),
          roleArn: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          documentEnrichmentConfiguration: S.optional(DocumentEnrichmentConfiguration),
          mediaExtractionConfiguration: S.optional(MediaExtractionConfiguration),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/applications/{applicationId}/indices/{indexId}/datasources",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateDataSourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ dataSourceId: S.optional(S.String), dataSourceArn: S.optional(S.String) }),
      ).annotate({ identifier: "CreateDataSourceResponse" });
    case 4:
      return S.suspend(() => S.Struct({ units: S.optional(S.Number) })).annotate({
        identifier: "IndexCapacityConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          displayName: S.String,
          description: S.optional(S.String),
          type: S.optional(IndexType),
          tags: S.optional(Tags),
          capacityConfiguration: S.optional(IndexCapacityConfiguration),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/applications/{applicationId}/indices" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateIndexRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ indexId: S.optional(S.String), indexArn: S.optional(S.String) }),
      ).annotate({ identifier: "CreateIndexResponse" });
    case 7:
      return S.suspend(() => S.Struct({ secretArn: S.String, roleArn: S.String })).annotate({
        identifier: "BasicAuthConfiguration",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          secretArn: S.String,
          roleArn: S.String,
          authorizationUrl: S.optional(S.String),
          tokenUrl: S.optional(S.String),
        }),
      ).annotate({
        identifier: "OAuth2ClientCredentialConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ idcApplicationArn: S.String, roleArn: S.String })).annotate(
        { identifier: "IdcAuthConfiguration" },
      );
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ basicAuthConfiguration: BasicAuthConfiguration }),
        /*@__PURE__*/ S.Struct({
          oAuth2ClientCredentialConfiguration: OAuth2ClientCredentialConfiguration,
        }),
        /*@__PURE__*/ S.Struct({ noAuthConfiguration: NoAuthConfiguration }),
        /*@__PURE__*/ S.Struct({ idcAuthConfiguration: IdcAuthConfiguration }),
      ]);
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ payload: SensitiveString }),
        /*@__PURE__*/ S.Struct({ s3: S3 }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          description: S.String,
          apiSchemaType: APISchemaType,
          apiSchema: S.optional(APISchema),
        }),
      ).annotate({
        identifier: "CustomPluginConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          displayName: S.String,
          type: PluginType,
          authConfiguration: PluginAuthConfiguration,
          serverUrl: S.optional(S.String),
          customPluginConfiguration: S.optional(CustomPluginConfiguration),
          tags: S.optional(Tags),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/applications/{applicationId}/plugins" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreatePluginRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          pluginId: S.optional(S.String),
          pluginArn: S.optional(S.String),
          buildStatus: S.optional(PluginBuildStatus),
        }),
      ).annotate({ identifier: "CreatePluginResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          boostingLevel: DocumentAttributeBoostingLevel,
          boostingType: S.optional(NumberAttributeBoostingType),
        }),
      ).annotate({
        identifier: "NumberAttributeBoostingConfiguration",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ StringAttributeValueBoostingLevel.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          boostingLevel: DocumentAttributeBoostingLevel,
          attributeValueBoosting: S.optional(StringAttributeValueBoosting),
        }),
      ).annotate({
        identifier: "StringAttributeBoostingConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          boostingLevel: DocumentAttributeBoostingLevel,
          boostingDurationInSeconds: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DateAttributeBoostingConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ boostingLevel: DocumentAttributeBoostingLevel })).annotate({
        identifier: "StringListAttributeBoostingConfiguration",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ numberConfiguration: NumberAttributeBoostingConfiguration }),
        /*@__PURE__*/ S.Struct({ stringConfiguration: StringAttributeBoostingConfiguration }),
        /*@__PURE__*/ S.Struct({ dateConfiguration: DateAttributeBoostingConfiguration }),
        /*@__PURE__*/ S.Struct({
          stringListConfiguration: StringListAttributeBoostingConfiguration,
        }),
      ]);
    case 5:
      return S.Record(
        S.String,
        /*@__PURE__*/ DocumentAttributeBoostingConfiguration.pipe(S.optional),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          indexId: S.String,
          version: S.optional(S.Number),
          boostingOverride: S.optional(DocumentAttributeBoostingOverrideMap),
        }),
      ).annotate({ identifier: "NativeIndexConfiguration" });
    case 7:
      return S.suspend(() => S.Struct({ indexId: S.String })).annotate({
        identifier: "KendraIndexConfiguration",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ nativeIndexConfiguration: NativeIndexConfiguration }),
        /*@__PURE__*/ S.Struct({ kendraIndexConfiguration: KendraIndexConfiguration }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          type: RetrieverType,
          displayName: S.String,
          configuration: RetrieverConfiguration,
          roleArn: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(Tags),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/applications/{applicationId}/retrievers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateRetrieverRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ retrieverId: S.optional(S.String), retrieverArn: S.optional(S.String) }),
      ).annotate({ identifier: "CreateRetrieverResponse" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ user: S.String }),
        /*@__PURE__*/ S.Struct({ group: S.String }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          principal: SubscriptionPrincipal,
          type: SubscriptionType,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/applications/{applicationId}/subscriptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSubscriptionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          subscriptionId: S.optional(S.String),
          subscriptionArn: S.optional(S.String),
          currentSubscription: S.optional(SubscriptionDetails),
          nextSubscription: S.optional(SubscriptionDetails),
        }),
      ).annotate({
        identifier: "CreateSubscriptionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          indexId: S.optional(S.String),
          dataSourceId: S.optional(S.String),
          userId: S.String,
        }),
      ).annotate({ identifier: "UserAlias" });
    case 7:
      return S.Array(UserAlias);
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          userId: S.String,
          userAliases: S.optional(UserAliases),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/applications/{applicationId}/users" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateUserRequest" });
    case 1:
      return S.suspend(() => S.Struct({ authenticationUrl: S.String })).annotate({
        identifier: "SamlProviderConfiguration",
      });
    case 2:
      return S.suspend(() => S.Struct({ secretsArn: S.String, secretsRole: S.String })).annotate({
        identifier: "OpenIDConnectProviderConfiguration",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ samlConfiguration: SamlProviderConfiguration }),
        /*@__PURE__*/ S.Struct({ openIDConnectConfiguration: OpenIDConnectProviderConfiguration }),
      ]);
    case 4:
      return S.suspend(() => S.Struct({ enabledBrowserExtensions: BrowserExtensionList })).annotate(
        {
          identifier: "BrowserExtensionConfiguration",
        },
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          customCSSUrl: S.optional(S.String),
          logoUrl: S.optional(S.String),
          fontUrl: S.optional(S.String),
          faviconUrl: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CustomizationConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          title: S.optional(S.String),
          subtitle: S.optional(S.String),
          welcomeMessage: S.optional(S.String),
          samplePromptsControlMode: S.optional(WebExperienceSamplePromptsControlMode),
          origins: S.optional(WebExperienceOrigins),
          roleArn: S.optional(S.String),
          tags: S.optional(Tags),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          identityProviderConfiguration: S.optional(IdentityProviderConfiguration),
          browserExtensionConfiguration: S.optional(BrowserExtensionConfiguration),
          customizationConfiguration: S.optional(CustomizationConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/applications/{applicationId}/experiences" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateWebExperienceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ webExperienceId: S.optional(S.String), webExperienceArn: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateWebExperienceResponse",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ applicationId: S.String.pipe(T.HttpLabel("applicationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/applications/{applicationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteApplicationRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          conversationId: S.String.pipe(T.HttpLabel("conversationId")),
          attachmentId: S.String.pipe(T.HttpLabel("attachmentId")),
          userId: S.optional(S.String).pipe(T.HttpQuery("userId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/applications/{applicationId}/conversations/{conversationId}/attachments/{attachmentId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAttachmentRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ applicationId: S.String.pipe(T.HttpLabel("applicationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/applications/{applicationId}/chatcontrols" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteChatControlsConfigurationRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteChatControlsConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          chatResponseConfigurationId: S.String.pipe(T.HttpLabel("chatResponseConfigurationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/applications/{applicationId}/chatresponseconfigurations/{chatResponseConfigurationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteChatResponseConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          conversationId: S.String.pipe(T.HttpLabel("conversationId")),
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          userId: S.optional(S.String).pipe(T.HttpQuery("userId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/applications/{applicationId}/conversations/{conversationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConversationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          dataAccessorId: S.String.pipe(T.HttpLabel("dataAccessorId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/applications/{applicationId}/dataaccessors/{dataAccessorId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDataAccessorRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDataSourceRequest" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          groupName: S.String.pipe(T.HttpLabel("groupName")),
          dataSourceId: S.optional(S.String).pipe(T.HttpQuery("dataSourceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/applications/{applicationId}/indices/{indexId}/groups/{groupName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteGroupRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/applications/{applicationId}/indices/{indexId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteIndexRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          pluginId: S.String.pipe(T.HttpLabel("pluginId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/applications/{applicationId}/plugins/{pluginId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeletePluginRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          retrieverId: S.String.pipe(T.HttpLabel("retrieverId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/applications/{applicationId}/retrievers/{retrieverId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteRetrieverRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          userId: S.String.pipe(T.HttpLabel("userId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/applications/{applicationId}/users/{userId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteUserRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          webExperienceId: S.String.pipe(T.HttpLabel("webExperienceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/applications/{applicationId}/experiences/{webExperienceId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteWebExperienceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          statementId: S.String.pipe(T.HttpLabel("statementId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/applications/{applicationId}/policy/{statementId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociatePermissionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ applicationId: S.String.pipe(T.HttpLabel("applicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{applicationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetApplicationRequest" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ attachmentsControlMode: S.optional(AttachmentsControlMode) }),
      ).annotate({
        identifier: "AppliedAttachmentsConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          autoSubscribe: S.optional(AutoSubscriptionStatus),
          defaultSubscriptionType: S.optional(SubscriptionType),
        }),
      ).annotate({
        identifier: "AutoSubscriptionConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(S.String),
          applicationId: S.optional(S.String),
          applicationArn: S.optional(S.String),
          identityType: S.optional(IdentityType),
          iamIdentityProviderArn: S.optional(S.String),
          identityCenterApplicationArn: S.optional(S.String),
          roleArn: S.optional(S.String),
          status: S.optional(ApplicationStatus),
          description: S.optional(S.String),
          encryptionConfiguration: S.optional(EncryptionConfiguration),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          error: S.optional(ErrorDetail),
          attachmentsConfiguration: S.optional(AppliedAttachmentsConfiguration),
          qAppsConfiguration: S.optional(QAppsConfiguration),
          personalizationConfiguration: S.optional(PersonalizationConfiguration),
          autoSubscriptionConfiguration: S.optional(AutoSubscriptionConfiguration),
          clientIdsForOIDC: S.optional(ClientIdsForOIDC),
          quickSightConfiguration: S.optional(QuickSightConfiguration),
        }),
      ).annotate({ identifier: "GetApplicationResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{applicationId}/chatcontrols" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetChatControlsConfigurationRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ control: OrchestrationControl })).annotate({
        identifier: "AppliedOrchestrationConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          blockedPhrases: S.optional(BlockedPhrases),
          systemMessageOverride: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BlockedPhrasesConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ userIds: S.optional(UserIds), userGroups: S.optional(UserGroups) }),
      ).annotate({ identifier: "UsersAndGroups" });
    case 7:
      return S.suspend(() => S.Struct({ systemMessageOverride: S.optional(S.String) })).annotate({
        identifier: "ContentBlockerRule",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ indexId: S.optional(S.String), dataSourceId: S.optional(S.String) }),
      ).annotate({ identifier: "EligibleDataSource" });
    case 1:
      return S.Array(EligibleDataSource);
    case 2:
      return S.suspend(() =>
        S.Struct({ eligibleDataSources: S.optional(EligibleDataSources) }),
      ).annotate({ identifier: "ContentRetrievalRule" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ contentBlockerRule: ContentBlockerRule }),
        /*@__PURE__*/ S.Struct({ contentRetrievalRule: ContentRetrievalRule }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          includedUsersAndGroups: S.optional(UsersAndGroups),
          excludedUsersAndGroups: S.optional(UsersAndGroups),
          ruleType: RuleType,
          ruleConfiguration: S.optional(RuleConfiguration),
        }),
      ).annotate({ identifier: "Rule" });
    case 5:
      return S.Array(Rule);
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          exampleChatMessages: S.optional(ExampleChatMessages),
          rules: Rules,
        }),
      ).annotate({ identifier: "TopicConfiguration" });
    case 7:
      return S.Array(TopicConfiguration);
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ creatorModeControl: CreatorModeControl })).annotate({
        identifier: "AppliedCreatorModeConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ hallucinationReductionControl: S.optional(HallucinationReductionControl) }),
      ).annotate({
        identifier: "HallucinationReductionConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          responseScope: S.optional(ResponseScope),
          orchestrationConfiguration: S.optional(AppliedOrchestrationConfiguration),
          blockedPhrases: S.optional(BlockedPhrasesConfiguration),
          topicConfigurations: S.optional(TopicConfigurations),
          creatorModeConfiguration: S.optional(AppliedCreatorModeConfiguration),
          nextToken: S.optional(S.String),
          hallucinationReductionConfiguration: S.optional(HallucinationReductionConfiguration),
        }),
      ).annotate({
        identifier: "GetChatControlsConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          chatResponseConfigurationId: S.String.pipe(T.HttpLabel("chatResponseConfigurationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{applicationId}/chatresponseconfigurations/{chatResponseConfigurationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetChatResponseConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          responseConfigurations: S.optional(ResponseConfigurations),
          responseConfigurationSummary: S.optional(S.String),
          status: S.optional(ChatResponseConfigurationStatus),
          error: S.optional(ErrorDetail),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "ChatResponseConfigurationDetail",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          chatResponseConfigurationId: S.optional(S.String),
          chatResponseConfigurationArn: S.optional(S.String),
          displayName: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          inUseConfiguration: S.optional(ChatResponseConfigurationDetail),
          lastUpdateConfiguration: S.optional(ChatResponseConfigurationDetail),
        }),
      ).annotate({
        identifier: "GetChatResponseConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          dataAccessorId: S.String.pipe(T.HttpLabel("dataAccessorId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{applicationId}/dataaccessors/{dataAccessorId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDataAccessorRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(SensitiveString),
          dataAccessorId: S.optional(S.String),
          dataAccessorArn: S.optional(S.String),
          applicationId: S.optional(S.String),
          idcApplicationArn: S.optional(S.String),
          principal: S.optional(S.String),
          actionConfigurations: S.optional(ActionConfigurationList),
          authenticationDetail: S.optional(DataAccessorAuthenticationDetail),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GetDataAccessorResponse" });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDataSourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.optional(S.String),
          indexId: S.optional(S.String),
          dataSourceId: S.optional(S.String),
          dataSourceArn: S.optional(S.String),
          displayName: S.optional(S.String),
          type: S.optional(S.String),
          configuration: S.optional(S.Any),
          vpcConfiguration: S.optional(DataSourceVpcConfiguration),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          description: S.optional(S.String),
          status: S.optional(DataSourceStatus),
          syncSchedule: S.optional(S.String),
          roleArn: S.optional(S.String),
          error: S.optional(ErrorDetail),
          documentEnrichmentConfiguration: S.optional(DocumentEnrichmentConfiguration),
          mediaExtractionConfiguration: S.optional(MediaExtractionConfiguration),
        }),
      ).annotate({ identifier: "GetDataSourceResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          dataSourceId: S.optional(S.String).pipe(T.HttpQuery("dataSourceId")),
          documentId: S.String.pipe(T.HttpLabel("documentId")),
          outputFormat: S.optional(OutputFormat).pipe(T.HttpQuery("outputFormat")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{applicationId}/index/{indexId}/documents/{documentId}/content",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDocumentContentRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ presignedUrl: S.String, mimeType: S.String })).annotate({
        identifier: "GetDocumentContentResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          groupName: S.String.pipe(T.HttpLabel("groupName")),
          dataSourceId: S.optional(S.String).pipe(T.HttpQuery("dataSourceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{applicationId}/indices/{indexId}/groups/{groupName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetGroupRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(GroupStatus),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          errorDetail: S.optional(ErrorDetail),
        }),
      ).annotate({ identifier: "GroupStatusDetail" });
    case 6:
      return S.Array(GroupStatusDetail);
    case 7:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(GroupStatusDetail),
          statusHistory: S.optional(GroupStatusDetails),
        }),
      ).annotate({ identifier: "GetGroupResponse" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{applicationId}/indices/{indexId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetIndexRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          type: S.optional(AttributeType),
          search: S.optional(Status),
        }),
      ).annotate({
        identifier: "DocumentAttributeConfiguration",
      });
    case 2:
      return S.Array(DocumentAttributeConfiguration);
    case 3:
      return S.suspend(() =>
        S.Struct({
          indexedTextBytes: S.optional(S.Number),
          indexedTextDocumentCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TextDocumentStatistics" });
    case 4:
      return S.suspend(() =>
        S.Struct({ textDocumentStatistics: S.optional(TextDocumentStatistics) }),
      ).annotate({ identifier: "IndexStatistics" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.optional(S.String),
          indexId: S.optional(S.String),
          displayName: S.optional(S.String),
          indexArn: S.optional(S.String),
          status: S.optional(IndexStatus),
          type: S.optional(IndexType),
          description: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          capacityConfiguration: S.optional(IndexCapacityConfiguration),
          documentAttributeConfigurations: S.optional(DocumentAttributeConfigurations),
          error: S.optional(ErrorDetail),
          indexStatistics: S.optional(IndexStatistics),
        }),
      ).annotate({ identifier: "GetIndexResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          conversationId: S.String.pipe(T.HttpLabel("conversationId")),
          messageId: S.String.pipe(T.HttpLabel("messageId")),
          mediaId: S.String.pipe(T.HttpLabel("mediaId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{applicationId}/conversations/{conversationId}/messages/{messageId}/media/{mediaId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMediaRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ mediaBytes: S.optional(T.Blob), mediaMimeType: S.optional(S.String) }),
      ).annotate({ identifier: "GetMediaResponse" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          pluginId: S.String.pipe(T.HttpLabel("pluginId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{applicationId}/plugins/{pluginId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPluginRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.optional(S.String),
          pluginId: S.optional(S.String),
          displayName: S.optional(S.String),
          type: S.optional(PluginType),
          serverUrl: S.optional(S.String),
          authConfiguration: S.optional(PluginAuthConfiguration),
          customPluginConfiguration: S.optional(CustomPluginConfiguration),
          buildStatus: S.optional(PluginBuildStatus),
          pluginArn: S.optional(S.String),
          state: S.optional(PluginState),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GetPluginResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ applicationId: S.String.pipe(T.HttpLabel("applicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{applicationId}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPolicyRequest" });
    case 3:
      return S.suspend(() => S.Struct({ policy: S.optional(S.String) })).annotate({
        identifier: "GetPolicyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          retrieverId: S.String.pipe(T.HttpLabel("retrieverId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{applicationId}/retrievers/{retrieverId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRetrieverRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.optional(S.String),
          retrieverId: S.optional(S.String),
          retrieverArn: S.optional(S.String),
          type: S.optional(RetrieverType),
          status: S.optional(RetrieverStatus),
          displayName: S.optional(S.String),
          configuration: S.optional(RetrieverConfiguration),
          roleArn: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GetRetrieverResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          userId: S.String.pipe(T.HttpLabel("userId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{applicationId}/users/{userId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetUserRequest" });
    case 7:
      return S.suspend(() => S.Struct({ userAliases: S.optional(UserAliases) })).annotate({
        identifier: "GetUserResponse",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          webExperienceId: S.String.pipe(T.HttpLabel("webExperienceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{applicationId}/experiences/{webExperienceId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetWebExperienceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          metadataXML: S.String,
          roleArn: S.String,
          userIdAttribute: S.String,
          userGroupAttribute: S.optional(S.String),
        }),
      ).annotate({ identifier: "SamlConfiguration" });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ samlConfiguration: SamlConfiguration })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.optional(S.String),
          webExperienceId: S.optional(S.String),
          webExperienceArn: S.optional(S.String),
          defaultEndpoint: S.optional(S.String),
          status: S.optional(WebExperienceStatus),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          title: S.optional(S.String),
          subtitle: S.optional(S.String),
          welcomeMessage: S.optional(S.String),
          samplePromptsControlMode: S.optional(WebExperienceSamplePromptsControlMode),
          origins: S.optional(WebExperienceOrigins),
          roleArn: S.optional(S.String),
          identityProviderConfiguration: S.optional(IdentityProviderConfiguration),
          authenticationConfiguration: S.optional(WebExperienceAuthConfiguration),
          error: S.optional(ErrorDetail),
          browserExtensionConfiguration: S.optional(BrowserExtensionConfiguration),
          customizationConfiguration: S.optional(CustomizationConfiguration),
        }),
      ).annotate({ identifier: "GetWebExperienceResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/applications" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListApplicationsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(S.String),
          applicationId: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(ApplicationStatus),
          identityType: S.optional(IdentityType),
          quickSightConfiguration: S.optional(QuickSightConfiguration),
        }),
      ).annotate({ identifier: "Application" });
    case 6:
      return S.Array(Application);
    case 7:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), applications: S.optional(Applications) }),
      ).annotate({ identifier: "ListApplicationsResponse" });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          conversationId: S.optional(S.String).pipe(T.HttpQuery("conversationId")),
          userId: S.optional(S.String).pipe(T.HttpQuery("userId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{applicationId}/attachments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAttachmentsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          attachmentId: S.optional(S.String),
          conversationId: S.optional(S.String),
          name: S.optional(S.String),
          copyFrom: S.optional(CopyFromSource),
          fileType: S.optional(S.String),
          fileSize: S.optional(S.Number),
          md5chksum: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(AttachmentStatus),
          error: S.optional(ErrorDetail),
        }),
      ).annotate({ identifier: "Attachment" });
    case 2:
      return S.Array(Attachment);
    case 3:
      return S.suspend(() =>
        S.Struct({ attachments: S.optional(AttachmentList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAttachmentsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{applicationId}/chatresponseconfigurations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListChatResponseConfigurationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          chatResponseConfigurationId: S.String,
          chatResponseConfigurationArn: S.String,
          displayName: S.String,
          responseConfigurationSummary: S.optional(S.String),
          status: ChatResponseConfigurationStatus,
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "ChatResponseConfiguration",
      });
    case 6:
      return S.Array(ChatResponseConfiguration);
    case 7:
      return S.suspend(() =>
        S.Struct({
          chatResponseConfigurations: S.optional(ChatResponseConfigurations),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListChatResponseConfigurationsResponse",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          userId: S.optional(S.String).pipe(T.HttpQuery("userId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{applicationId}/conversations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListConversationsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          conversationId: S.optional(S.String),
          title: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Conversation" });
    case 2:
      return S.Array(Conversation);
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), conversations: S.optional(Conversations) }),
      ).annotate({
        identifier: "ListConversationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{applicationId}/dataaccessors" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListDataAccessorsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(SensitiveString),
          dataAccessorId: S.optional(S.String),
          dataAccessorArn: S.optional(S.String),
          idcApplicationArn: S.optional(S.String),
          principal: S.optional(S.String),
          authenticationDetail: S.optional(DataAccessorAuthenticationDetail),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DataAccessor" });
    case 6:
      return S.Array(DataAccessor);
    case 7:
      return S.suspend(() =>
        S.Struct({ dataAccessors: S.optional(DataAccessors), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDataAccessorsResponse",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{applicationId}/indices/{indexId}/datasources",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListDataSourcesRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(S.String),
          dataSourceId: S.optional(S.String),
          type: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(DataSourceStatus),
        }),
      ).annotate({ identifier: "DataSource" });
    case 2:
      return S.Array(DataSource);
    case 3:
      return S.suspend(() =>
        S.Struct({ dataSources: S.optional(DataSources), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDataSourcesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("startTime"),
          ),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("endTime"),
          ),
          statusFilter: S.optional(DataSourceSyncJobStatus).pipe(T.HttpQuery("syncStatus")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/syncjobs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDataSourceSyncJobsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          documentsAdded: S.optional(S.String),
          documentsModified: S.optional(S.String),
          documentsDeleted: S.optional(S.String),
          documentsFailed: S.optional(S.String),
          documentsScanned: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataSourceSyncJobMetrics" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          executionId: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(DataSourceSyncJobStatus),
          error: S.optional(ErrorDetail),
          dataSourceErrorCode: S.optional(S.String),
          metrics: S.optional(DataSourceSyncJobMetrics),
        }),
      ).annotate({ identifier: "DataSourceSyncJob" });
    case 7:
      return S.Array(DataSourceSyncJob);
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ history: S.optional(DataSourceSyncJobs), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDataSourceSyncJobsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          dataSourceIds: S.optional(DataSourceIds).pipe(T.HttpQuery("dataSourceIds")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{applicationId}/index/{indexId}/documents",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListDocumentsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          documentId: S.optional(S.String),
          status: S.optional(DocumentStatus),
          error: S.optional(ErrorDetail),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DocumentDetails" });
    case 3:
      return S.Array(DocumentDetails);
    case 4:
      return S.suspend(() =>
        S.Struct({
          documentDetailList: S.optional(DocumentDetailList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListDocumentsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          updatedEarlierThan: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(
            T.HttpQuery("updatedEarlierThan"),
          ),
          dataSourceId: S.optional(S.String).pipe(T.HttpQuery("dataSourceId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{applicationId}/indices/{indexId}/groups",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListGroupsRequest" });
    case 6:
      return S.suspend(() => S.Struct({ groupName: S.optional(S.String) })).annotate({
        identifier: "GroupSummary",
      });
    case 7:
      return S.Array(GroupSummary);
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), items: S.optional(GroupSummaryList) }),
      ).annotate({ identifier: "ListGroupsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{applicationId}/indices" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListIndicesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(S.String),
          indexId: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(IndexStatus),
        }),
      ).annotate({ identifier: "Index" });
    case 3:
      return S.Array(Index);
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), indices: S.optional(Indices) }),
      ).annotate({ identifier: "ListIndicesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          conversationId: S.String.pipe(T.HttpLabel("conversationId")),
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          userId: S.optional(S.String).pipe(T.HttpQuery("userId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{applicationId}/conversations/{conversationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListMessagesRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          messageId: S.optional(S.String),
          body: S.optional(S.String),
          time: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          type: S.optional(MessageType),
          attachments: S.optional(AttachmentsOutput),
          sourceAttribution: S.optional(SourceAttributions),
          actionReview: S.optional(ActionReview),
          actionExecution: S.optional(ActionExecution),
        }),
      ).annotate({ identifier: "Message" });
    case 7:
      return S.Array(Message);
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ messages: S.optional(Messages), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListMessagesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          pluginId: S.String.pipe(T.HttpLabel("pluginId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{applicationId}/plugins/{pluginId}/actions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListPluginActionsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          actionIdentifier: S.optional(S.String),
          displayName: S.optional(S.String),
          instructionExample: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActionSummary" });
    case 3:
      return S.Array(ActionSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), items: S.optional(Actions) }),
      ).annotate({
        identifier: "ListPluginActionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{applicationId}/plugins" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListPluginsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          pluginId: S.optional(S.String),
          displayName: S.optional(S.String),
          type: S.optional(PluginType),
          serverUrl: S.optional(S.String),
          state: S.optional(PluginState),
          buildStatus: S.optional(PluginBuildStatus),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Plugin" });
    case 7:
      return S.Array(Plugin);
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), plugins: S.optional(Plugins) }),
      ).annotate({ identifier: "ListPluginsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          pluginType: PluginType.pipe(T.HttpLabel("pluginType")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/pluginTypes/{pluginType}/actions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPluginTypeActionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/pluginTypeMetadata" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPluginTypeMetadataRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(PluginType),
          category: S.optional(PluginTypeCategory),
          description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PluginTypeMetadataSummary",
      });
    case 4:
      return S.Array(PluginTypeMetadataSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          items: S.optional(ListPluginTypeMetadataSummaries),
        }),
      ).annotate({
        identifier: "ListPluginTypeMetadataResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{applicationId}/retrievers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListRetrieversRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.optional(S.String),
          retrieverId: S.optional(S.String),
          type: S.optional(RetrieverType),
          status: S.optional(RetrieverStatus),
          displayName: S.optional(S.String),
        }),
      ).annotate({ identifier: "Retriever" });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Retriever);
    case 1:
      return S.suspend(() =>
        S.Struct({ retrievers: S.optional(Retrievers), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRetrieversResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{applicationId}/subscriptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSubscriptionsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          subscriptionId: S.optional(S.String),
          subscriptionArn: S.optional(S.String),
          principal: S.optional(SubscriptionPrincipal),
          currentSubscription: S.optional(SubscriptionDetails),
          nextSubscription: S.optional(SubscriptionDetails),
        }),
      ).annotate({ identifier: "Subscription" });
    case 4:
      return S.Array(Subscription);
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), subscriptions: S.optional(Subscriptions) }),
      ).annotate({
        identifier: "ListSubscriptionsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String.pipe(T.HttpLabel("resourceARN")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/tags/{resourceARN}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ tags: S.optional(Tags) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{applicationId}/experiences" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListWebExperiencesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          webExperienceId: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          defaultEndpoint: S.optional(S.String),
          status: S.optional(WebExperienceStatus),
        }),
      ).annotate({ identifier: "WebExperience" });
    case 2:
      return S.Array(WebExperience);
    case 3:
      return S.suspend(() =>
        S.Struct({ webExperiences: S.optional(WebExperiences), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListWebExperiencesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          usefulness: MessageUsefulness,
          reason: S.optional(MessageUsefulnessReason),
          comment: S.optional(S.String),
          submittedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "MessageUsefulnessFeedback",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          userId: S.optional(S.String).pipe(T.HttpQuery("userId")),
          conversationId: S.String.pipe(T.HttpLabel("conversationId")),
          messageId: S.String.pipe(T.HttpLabel("messageId")),
          messageCopiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          messageUsefulness: S.optional(MessageUsefulnessFeedback),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/applications/{applicationId}/conversations/{conversationId}/messages/{messageId}/feedback",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutFeedbackRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ groupName: S.String, type: S.optional(MembershipType) }),
      ).annotate({ identifier: "MemberGroup" });
    case 7:
      return S.Array(MemberGroup);
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ userId: S.String, type: S.optional(MembershipType) }),
      ).annotate({ identifier: "MemberUser" });
    case 1:
      return S.Array(MemberUser);
    case 2:
      return S.suspend(() =>
        S.Struct({
          memberGroups: S.optional(MemberGroups),
          memberUsers: S.optional(MemberUsers),
          s3PathForGroupMembers: S.optional(S3),
        }),
      ).annotate({ identifier: "GroupMembers" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          groupName: S.String,
          dataSourceId: S.optional(S.String),
          type: MembershipType,
          groupMembers: GroupMembers,
          roleArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/applications/{applicationId}/indices/{indexId}/groups",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutGroupRequest" });
    case 4:
      return S.suspend(() => S.Struct({ retrieverId: S.String })).annotate({
        identifier: "RetrieverContentSource",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ retriever: RetrieverContentSource })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          queryText: S.String,
          contentSource: ContentSource,
          attributeFilter: S.optional(AttributeFilter),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/applications/{applicationId}/relevant-content" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SearchRelevantContentRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ scoreConfidence: S.optional(ScoreConfidence) })).annotate({
        identifier: "ScoreAttributes",
      });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          content: S.optional(S.String),
          documentId: S.optional(S.String),
          documentTitle: S.optional(S.String),
          documentUri: S.optional(S.String),
          documentAttributes: S.optional(DocumentAttributes),
          scoreAttributes: S.optional(ScoreAttributes),
        }),
      ).annotate({ identifier: "RelevantContent" });
    case 1:
      return S.Array(RelevantContent);
    case 2:
      return S.suspend(() =>
        S.Struct({
          relevantContent: S.optional(RelevantContentList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SearchRelevantContentResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/startsync",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartDataSourceSyncJobRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ executionId: S.optional(S.String) })).annotate({
        identifier: "StartDataSourceSyncJobResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/stopsync",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopDataSourceSyncJobRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String.pipe(T.HttpLabel("resourceARN")), tags: Tags }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/tags/{resourceARN}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceARN: S.String.pipe(T.HttpLabel("resourceARN")),
          tagKeys: TagKeys.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/tags/{resourceARN}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          identityCenterInstanceArn: S.optional(S.String),
          displayName: S.optional(S.String),
          description: S.optional(S.String),
          roleArn: S.optional(S.String),
          attachmentsConfiguration: S.optional(AttachmentsConfiguration),
          qAppsConfiguration: S.optional(QAppsConfiguration),
          personalizationConfiguration: S.optional(PersonalizationConfiguration),
          autoSubscriptionConfiguration: S.optional(AutoSubscriptionConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/applications/{applicationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateApplicationRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          blockedPhrasesToCreateOrUpdate: S.optional(BlockedPhrases),
          blockedPhrasesToDelete: S.optional(BlockedPhrases),
          systemMessageOverride: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BlockedPhrasesConfigurationUpdate",
      });
    case 2:
      return S.suspend(() => S.Struct({ creatorModeControl: CreatorModeControl })).annotate({
        identifier: "CreatorModeConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          responseScope: S.optional(ResponseScope),
          orchestrationConfiguration: S.optional(OrchestrationConfiguration),
          blockedPhrasesConfigurationUpdate: S.optional(BlockedPhrasesConfigurationUpdate),
          topicConfigurationsToCreateOrUpdate: S.optional(TopicConfigurations),
          topicConfigurationsToDelete: S.optional(TopicConfigurations),
          creatorModeConfiguration: S.optional(CreatorModeConfiguration),
          hallucinationReductionConfiguration: S.optional(HallucinationReductionConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/applications/{applicationId}/chatcontrols" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateChatControlsConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          chatResponseConfigurationId: S.String.pipe(T.HttpLabel("chatResponseConfigurationId")),
          displayName: S.optional(S.String),
          responseConfigurations: ResponseConfigurations,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/applications/{applicationId}/chatresponseconfigurations/{chatResponseConfigurationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateChatResponseConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          dataAccessorId: S.String.pipe(T.HttpLabel("dataAccessorId")),
          actionConfigurations: ActionConfigurationList,
          authenticationDetail: S.optional(DataAccessorAuthenticationDetail),
          displayName: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/applications/{applicationId}/dataaccessors/{dataAccessorId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDataAccessorRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          dataSourceId: S.String.pipe(T.HttpLabel("dataSourceId")),
          displayName: S.optional(S.String),
          configuration: S.optional(S.Any),
          vpcConfiguration: S.optional(DataSourceVpcConfiguration),
          description: S.optional(S.String),
          syncSchedule: S.optional(S.String),
          roleArn: S.optional(S.String),
          documentEnrichmentConfiguration: S.optional(DocumentEnrichmentConfiguration),
          mediaExtractionConfiguration: S.optional(MediaExtractionConfiguration),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDataSourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          displayName: S.optional(S.String),
          description: S.optional(S.String),
          capacityConfiguration: S.optional(IndexCapacityConfiguration),
          documentAttributeConfigurations: S.optional(DocumentAttributeConfigurations),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/applications/{applicationId}/indices/{indexId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateIndexRequest" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          pluginId: S.String.pipe(T.HttpLabel("pluginId")),
          displayName: S.optional(S.String),
          state: S.optional(PluginState),
          serverUrl: S.optional(S.String),
          customPluginConfiguration: S.optional(CustomPluginConfiguration),
          authConfiguration: S.optional(PluginAuthConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/applications/{applicationId}/plugins/{pluginId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdatePluginRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          retrieverId: S.String.pipe(T.HttpLabel("retrieverId")),
          configuration: S.optional(RetrieverConfiguration),
          displayName: S.optional(S.String),
          roleArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/applications/{applicationId}/retrievers/{retrieverId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateRetrieverRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          subscriptionId: S.String.pipe(T.HttpLabel("subscriptionId")),
          type: SubscriptionType,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/applications/{applicationId}/subscriptions/{subscriptionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSubscriptionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          userId: S.String.pipe(T.HttpLabel("userId")),
          userAliasesToUpdate: S.optional(UserAliases),
          userAliasesToDelete: S.optional(UserAliases),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/applications/{applicationId}/users/{userId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateUserRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          userAliasesAdded: S.optional(UserAliases),
          userAliasesUpdated: S.optional(UserAliases),
          userAliasesDeleted: S.optional(UserAliases),
        }),
      ).annotate({ identifier: "UpdateUserResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          webExperienceId: S.String.pipe(T.HttpLabel("webExperienceId")),
          roleArn: S.optional(S.String),
          authenticationConfiguration: S.optional(WebExperienceAuthConfiguration),
          title: S.optional(S.String),
          subtitle: S.optional(S.String),
          welcomeMessage: S.optional(S.String),
          samplePromptsControlMode: S.optional(WebExperienceSamplePromptsControlMode),
          identityProviderConfiguration: S.optional(IdentityProviderConfiguration),
          origins: S.optional(WebExperienceOrigins),
          browserExtensionConfiguration: S.optional(BrowserExtensionConfiguration),
          customizationConfiguration: S.optional(CustomizationConfiguration),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/applications/{applicationId}/experiences/{webExperienceId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateWebExperienceRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 7:
      return S.Array(ValidationExceptionField);
  }
}
