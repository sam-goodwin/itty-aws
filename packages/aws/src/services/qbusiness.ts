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
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
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
      reason: /*@__PURE__*/ S.suspend(() => S.String).annotate({
        identifier: "ValidationExceptionReason",
      }),
      fields: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(335)).annotate({
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
export type PermissionConditionOperator = "StringEquals" | (string & {});
export type PermissionConditionKey = string;
export type PermissionConditionValue = string;
export type PermissionConditionValues = string[];
export interface PermissionCondition {
  conditionOperator: PermissionConditionOperator;
  conditionKey: string;
  conditionValues: string[];
}
export type PermissionConditions = PermissionCondition[];
export type PrincipalRoleArn = string;
export interface AssociatePermissionRequest {
  applicationId: string;
  statementId: string;
  actions: string[];
  conditions?: PermissionCondition[];
  principal: string;
}
export interface AssociatePermissionResponse {
  statement?: string;
}
export type IndexId = string;
export type DocumentId = string;
export interface DeleteDocument {
  documentId: string;
}
export type DeleteDocuments = DeleteDocument[];
export type ExecutionId = string;
export interface BatchDeleteDocumentRequest {
  applicationId: string;
  indexId: string;
  documents: DeleteDocument[];
  dataSourceSyncId?: string;
}
export type ErrorMessage = string;
export type ErrorCode =
  | "InternalError"
  | "InvalidRequest"
  | "ResourceInactive"
  | "ResourceNotFound"
  | (string & {});
export interface ErrorDetail {
  errorMessage?: string;
  errorCode?: ErrorCode;
}
export type DataSourceId = string;
export interface FailedDocument {
  id?: string;
  error?: ErrorDetail;
  dataSourceId?: string;
}
export type FailedDocuments = FailedDocument[];
export interface BatchDeleteDocumentResponse {
  failedDocuments?: FailedDocument[];
}
export type DocumentAttributeKey = string;
export type DocumentAttributeStringValue = string;
export type DocumentAttributeStringListValue = string[];
export type DocumentAttributeValue =
  | { stringValue: string; stringListValue?: never; longValue?: never; dateValue?: never }
  | { stringValue?: never; stringListValue: string[]; longValue?: never; dateValue?: never }
  | { stringValue?: never; stringListValue?: never; longValue: number; dateValue?: never }
  | { stringValue?: never; stringListValue?: never; longValue?: never; dateValue: Date };
export interface DocumentAttribute {
  name: string;
  value: DocumentAttributeValue;
}
export type DocumentAttributes = DocumentAttribute[];
export type S3BucketName = string;
export type S3ObjectKey = string;
export interface S3 {
  bucket: string;
  key: string;
}
export type DocumentContent = { blob: Uint8Array; s3?: never } | { blob?: never; s3: S3 };
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
export type Title = string;
export type UserId = string;
export type ReadAccessType = "ALLOW" | "DENY" | (string & {});
export type MembershipType = "INDEX" | "DATASOURCE" | (string & {});
export interface PrincipalUser {
  id?: string;
  access: ReadAccessType;
  membershipType?: MembershipType;
}
export type GroupName = string;
export interface PrincipalGroup {
  name?: string;
  access: ReadAccessType;
  membershipType?: MembershipType;
}
export type Principal =
  | { user: PrincipalUser; group?: never }
  | { user?: never; group: PrincipalGroup };
export type Principals = Principal[];
export type MemberRelation = "AND" | "OR" | (string & {});
export interface AccessControl {
  principals: Principal[];
  memberRelation?: MemberRelation;
}
export type AccessControls = AccessControl[];
export interface AccessConfiguration {
  accessControls: AccessControl[];
  memberRelation?: MemberRelation;
}
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
export interface DocumentAttributeCondition {
  key: string;
  operator: DocumentEnrichmentConditionOperator;
  value?: DocumentAttributeValue;
}
export type AttributeValueOperator = "DELETE" | (string & {});
export interface DocumentAttributeTarget {
  key: string;
  value?: DocumentAttributeValue;
  attributeValueOperator?: AttributeValueOperator;
}
export type DocumentContentOperator = "DELETE" | (string & {});
export interface InlineDocumentEnrichmentConfiguration {
  condition?: DocumentAttributeCondition;
  target?: DocumentAttributeTarget;
  documentContentOperator?: DocumentContentOperator;
}
export type InlineDocumentEnrichmentConfigurations = InlineDocumentEnrichmentConfiguration[];
export type LambdaArn = string;
export type RoleArn = string;
export interface HookConfiguration {
  invocationCondition?: DocumentAttributeCondition;
  lambdaArn?: string;
  s3BucketName?: string;
  roleArn?: string;
}
export interface DocumentEnrichmentConfiguration {
  inlineConfigurations?: InlineDocumentEnrichmentConfiguration[];
  preExtractionHookConfiguration?: HookConfiguration;
  postExtractionHookConfiguration?: HookConfiguration;
}
export type ImageExtractionStatus = "ENABLED" | "DISABLED" | (string & {});
export interface ImageExtractionConfiguration {
  imageExtractionStatus: ImageExtractionStatus;
}
export type AudioExtractionStatus = "ENABLED" | "DISABLED" | (string & {});
export interface AudioExtractionConfiguration {
  audioExtractionStatus: AudioExtractionStatus;
}
export type VideoExtractionStatus = "ENABLED" | "DISABLED" | (string & {});
export interface VideoExtractionConfiguration {
  videoExtractionStatus: VideoExtractionStatus;
}
export interface MediaExtractionConfiguration {
  imageExtractionConfiguration?: ImageExtractionConfiguration;
  audioExtractionConfiguration?: AudioExtractionConfiguration;
  videoExtractionConfiguration?: VideoExtractionConfiguration;
}
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
export type Documents = Document[];
export interface BatchPutDocumentRequest {
  applicationId: string;
  indexId: string;
  documents: Document[];
  roleArn?: string;
  dataSourceSyncId?: string;
}
export interface BatchPutDocumentResponse {
  failedDocuments?: FailedDocument[];
}
export type SubscriptionId = string;
export interface CancelSubscriptionRequest {
  applicationId: string;
  subscriptionId: string;
}
export type SubscriptionArn = string;
export type SubscriptionType = "Q_LITE" | "Q_BUSINESS" | (string & {});
export interface SubscriptionDetails {
  type?: SubscriptionType;
}
export interface CancelSubscriptionResponse {
  subscriptionArn?: string;
  currentSubscription?: SubscriptionDetails;
  nextSubscription?: SubscriptionDetails;
}
export type UserGroups = string[];
export type ConversationId = string;
export type MessageId = string;
export type ClientToken = string;
export type ChatMode = "RETRIEVAL_MODE" | "CREATOR_MODE" | "PLUGIN_MODE" | (string & {});
export type PluginId = string;
export interface PluginConfiguration {
  pluginId: string;
}
export type ChatModeConfiguration = { pluginConfiguration: PluginConfiguration };
export type AttributeFilters = AttributeFilter[];
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
export interface ConfigurationEvent {
  chatMode?: ChatMode;
  chatModeConfiguration?: ChatModeConfiguration;
  attributeFilter?: AttributeFilter;
}
export type UserMessage = string;
export interface TextInputEvent {
  userMessage: string;
}
export type AttachmentName = string;
export type AttachmentId = string;
export interface ConversationSource {
  conversationId: string;
  attachmentId: string;
}
export type CopyFromSource = { conversation: ConversationSource };
export interface AttachmentInput {
  data?: Uint8Array;
  name?: string;
  copyFrom?: CopyFromSource;
}
export interface AttachmentInputEvent {
  attachment?: AttachmentInput;
}
export type ActionPayloadFieldKey = string;
export type ActionPayloadFieldValue = unknown;
export interface ActionExecutionPayloadField {
  value: any;
}
export type ActionExecutionPayload = { [key: string]: ActionExecutionPayloadField | undefined };
export type ActionPayloadFieldNameSeparator = string;
export interface ActionExecutionEvent {
  pluginId: string;
  payload: { [key: string]: ActionExecutionPayloadField | undefined };
  payloadFieldNameSeparator: string;
}
export interface EndOfInputEvent {}
export type AuthResponseKey = string;
export type AuthResponseValue = string;
export type AuthorizationResponseMap = { [key: string]: string | undefined };
export interface AuthChallengeResponseEvent {
  responseMap: { [key: string]: string | undefined };
}
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
export interface ChatInput {
  applicationId: string;
  userId?: string;
  userGroups?: string[];
  conversationId?: string;
  parentMessageId?: string;
  clientToken?: string;
  inputStream?: stream.Stream<ChatInputStream, Error, never>;
}
export type SystemMessageType = "RESPONSE" | "GROUNDED_RESPONSE" | (string & {});
export interface TextOutputEvent {
  systemMessageType?: SystemMessageType;
  conversationId?: string;
  userMessageId?: string;
  systemMessageId?: string;
  systemMessage?: string;
}
export type SnippetExcerptText = string;
export interface SnippetExcerpt {
  text?: string;
}
export type SourceAttributionMediaId = string;
export type MediaId = string;
export interface ImageSourceDetails {
  mediaId?: string;
  mediaMimeType?: string;
}
export type AudioExtractionType = "TRANSCRIPT" | "SUMMARY" | (string & {});
export interface AudioSourceDetails {
  mediaId?: string;
  mediaMimeType?: string;
  startTimeMilliseconds?: number;
  endTimeMilliseconds?: number;
  audioExtractionType?: AudioExtractionType;
}
export type VideoExtractionType = "TRANSCRIPT" | "SUMMARY" | (string & {});
export interface VideoSourceDetails {
  mediaId?: string;
  mediaMimeType?: string;
  startTimeMilliseconds?: number;
  endTimeMilliseconds?: number;
  videoExtractionType?: VideoExtractionType;
}
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
export interface TextSegment {
  beginOffset?: number;
  endOffset?: number;
  snippetExcerpt?: SnippetExcerpt;
  mediaId?: string;
  mediaMimeType?: string;
  sourceDetails?: SourceDetails;
}
export type TextSegmentList = TextSegment[];
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
export type SourceAttributions = SourceAttribution[];
export interface MetadataEvent {
  conversationId?: string;
  userMessageId?: string;
  systemMessageId?: string;
  sourceAttributions?: SourceAttribution[];
  finalTextMessage?: string;
}
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
export type ActionPayloadFieldType = "STRING" | "NUMBER" | "ARRAY" | "BOOLEAN" | (string & {});
export interface ActionReviewPayloadFieldAllowedValue {
  value?: any;
  displayValue?: any;
}
export type ActionReviewPayloadFieldAllowedValues = ActionReviewPayloadFieldAllowedValue[];
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
export type ActionReviewPayload = { [key: string]: ActionReviewPayloadField | undefined };
export interface ActionReviewEvent {
  conversationId?: string;
  userMessageId?: string;
  systemMessageId?: string;
  pluginId?: string;
  pluginType?: PluginType;
  payload?: { [key: string]: ActionReviewPayloadField | undefined };
  payloadFieldNameSeparator?: string;
}
export type AttachmentStatus = "FAILED" | "SUCCESS" | (string & {});
export interface AttachmentOutput {
  name?: string;
  status?: AttachmentStatus;
  error?: ErrorDetail;
  attachmentId?: string;
  conversationId?: string;
}
export interface FailedAttachmentEvent {
  conversationId?: string;
  userMessageId?: string;
  systemMessageId?: string;
  attachment?: AttachmentOutput;
}
export type Url = string;
export interface AuthChallengeRequestEvent {
  authorizationUrl: string;
}
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
export interface ChatOutput {
  outputStream?: stream.Stream<ChatOutputStream, Error, never>;
}
export type AttachmentsInput = AttachmentInput[];
export interface ActionExecution {
  pluginId: string;
  payload: { [key: string]: ActionExecutionPayloadField | undefined };
  payloadFieldNameSeparator: string;
}
export interface AuthChallengeResponse {
  responseMap: { [key: string]: string | undefined };
}
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
export interface ActionReview {
  pluginId?: string;
  pluginType?: PluginType;
  payload?: { [key: string]: ActionReviewPayloadField | undefined };
  payloadFieldNameSeparator?: string;
}
export interface AuthChallengeRequest {
  authorizationUrl: string;
}
export type AttachmentsOutput = AttachmentOutput[];
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
export interface CheckDocumentAccessRequest {
  applicationId: string;
  indexId: string;
  userId: string;
  documentId: string;
  dataSourceId?: string;
}
export interface AssociatedGroup {
  name?: string;
  type?: MembershipType;
}
export type AssociatedGroups = AssociatedGroup[];
export interface AssociatedUser {
  id?: string;
  type?: MembershipType;
}
export type AssociatedUsers = AssociatedUser[];
export interface DocumentAclUser {
  id?: string;
  type?: MembershipType;
}
export type DocumentAclUsers = DocumentAclUser[];
export interface DocumentAclGroup {
  name?: string;
  type?: MembershipType;
}
export type DocumentAclGroups = DocumentAclGroup[];
export interface DocumentAclCondition {
  memberRelation?: MemberRelation;
  users?: DocumentAclUser[];
  groups?: DocumentAclGroup[];
}
export type DocumentAclConditions = DocumentAclCondition[];
export interface DocumentAclMembership {
  memberRelation?: MemberRelation;
  conditions?: DocumentAclCondition[];
}
export interface DocumentAcl {
  allowlist?: DocumentAclMembership;
  denyList?: DocumentAclMembership;
}
export interface CheckDocumentAccessResponse {
  userGroups?: AssociatedGroup[];
  userAliases?: AssociatedUser[];
  hasAccess?: boolean;
  documentAcl?: DocumentAcl;
}
export type WebExperienceId = string;
export type SessionDurationInMinutes = number;
export interface CreateAnonymousWebExperienceUrlRequest {
  applicationId: string;
  webExperienceId: string;
  sessionDurationInMinutes?: number;
}
export interface CreateAnonymousWebExperienceUrlResponse {
  anonymousUrl?: string;
}
export type ApplicationName = string;
export type IdentityType =
  | "AWS_IAM_IDP_SAML"
  | "AWS_IAM_IDP_OIDC"
  | "AWS_IAM_IDC"
  | "AWS_QUICKSIGHT_IDP"
  | "ANONYMOUS"
  | (string & {});
export type IAMIdentityProviderArn = string;
export type InstanceArn = string;
export type ClientIdForOIDC = string;
export type ClientIdsForOIDC = string[];
export type Description = string;
export type KmsKeyId = string | redacted.Redacted<string>;
export interface EncryptionConfiguration {
  kmsKeyId?: string | redacted.Redacted<string>;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
export type Tags = Tag[];
export type AttachmentsControlMode = "ENABLED" | "DISABLED" | (string & {});
export interface AttachmentsConfiguration {
  attachmentsControlMode: AttachmentsControlMode;
}
export type QAppsControlMode = "ENABLED" | "DISABLED" | (string & {});
export interface QAppsConfiguration {
  qAppsControlMode: QAppsControlMode;
}
export type PersonalizationControlMode = "ENABLED" | "DISABLED" | (string & {});
export interface PersonalizationConfiguration {
  personalizationControlMode: PersonalizationControlMode;
}
export type ClientNamespace = string;
export interface QuickSightConfiguration {
  clientNamespace: string;
}
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
export type ApplicationArn = string;
export interface CreateApplicationResponse {
  applicationId?: string;
  applicationArn?: string;
}
export type DisplayName = string;
export type ResponseConfigurationType = "ALL" | (string & {});
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
export interface ResponseConfiguration {
  instructionCollection?: InstructionCollection;
}
export type ResponseConfigurations = { [key in ResponseConfigurationType]?: ResponseConfiguration };
export interface CreateChatResponseConfigurationRequest {
  applicationId: string;
  displayName: string;
  clientToken?: string;
  responseConfigurations: { [key: string]: ResponseConfiguration | undefined };
  tags?: Tag[];
}
export type ChatResponseConfigurationId = string;
export type ChatResponseConfigurationArn = string;
export interface CreateChatResponseConfigurationResponse {
  chatResponseConfigurationId: string;
  chatResponseConfigurationArn: string;
}
export interface ActionFilterConfiguration {
  documentAttributeFilter: AttributeFilter;
}
export interface ActionConfiguration {
  action: string;
  filterConfiguration?: ActionFilterConfiguration;
}
export type ActionConfigurationList = ActionConfiguration[];
export type DataAccessorName = string | redacted.Redacted<string>;
export type DataAccessorAuthenticationType =
  | "AWS_IAM_IDC_TTI"
  | "AWS_IAM_IDC_AUTH_CODE"
  | (string & {});
export type IdcTrustedTokenIssuerArn = string;
export interface DataAccessorIdcTrustedTokenIssuerConfiguration {
  idcTrustedTokenIssuerArn: string;
}
export type DataAccessorAuthenticationConfiguration = {
  idcTrustedTokenIssuerConfiguration: DataAccessorIdcTrustedTokenIssuerConfiguration;
};
export type DataAccessorExternalId = string;
export type DataAccessorExternalIds = string[];
export interface DataAccessorAuthenticationDetail {
  authenticationType: DataAccessorAuthenticationType;
  authenticationConfiguration?: DataAccessorAuthenticationConfiguration;
  externalIds?: string[];
}
export interface CreateDataAccessorRequest {
  applicationId: string;
  principal: string;
  actionConfigurations: ActionConfiguration[];
  clientToken?: string;
  displayName: string | redacted.Redacted<string>;
  authenticationDetail?: DataAccessorAuthenticationDetail;
  tags?: Tag[];
}
export type DataAccessorId = string;
export type IdcApplicationArn = string;
export type DataAccessorArn = string;
export interface CreateDataAccessorResponse {
  dataAccessorId: string;
  idcApplicationArn: string;
  dataAccessorArn: string;
}
export type DataSourceName = string;
export type DataSourceConfiguration = unknown;
export type SubnetId = string;
export type SubnetIds = string[];
export type SecurityGroupId = string;
export type SecurityGroupIds = string[];
export interface DataSourceVpcConfiguration {
  subnetIds: string[];
  securityGroupIds: string[];
}
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
export type DataSourceArn = string;
export interface CreateDataSourceResponse {
  dataSourceId?: string;
  dataSourceArn?: string;
}
export type IndexName = string;
export type IndexType = "ENTERPRISE" | "STARTER" | (string & {});
export type IndexCapacityInteger = number;
export interface IndexCapacityConfiguration {
  units?: number;
}
export interface CreateIndexRequest {
  applicationId: string;
  displayName: string;
  description?: string;
  type?: IndexType;
  tags?: Tag[];
  capacityConfiguration?: IndexCapacityConfiguration;
  clientToken?: string;
}
export type IndexArn = string;
export interface CreateIndexResponse {
  indexId?: string;
  indexArn?: string;
}
export type PluginName = string;
export type SecretArn = string;
export interface BasicAuthConfiguration {
  secretArn: string;
  roleArn: string;
}
export interface OAuth2ClientCredentialConfiguration {
  secretArn: string;
  roleArn: string;
  authorizationUrl?: string;
  tokenUrl?: string;
}
export interface NoAuthConfiguration {}
export interface IdcAuthConfiguration {
  idcApplicationArn: string;
  roleArn: string;
}
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
export type PluginDescription = string;
export type APISchemaType = "OPEN_API_V3" | (string & {});
export type Payload = string | redacted.Redacted<string>;
export type APISchema =
  | { payload: string | redacted.Redacted<string>; s3?: never }
  | { payload?: never; s3: S3 };
export interface CustomPluginConfiguration {
  description: string;
  apiSchemaType: APISchemaType;
  apiSchema?: APISchema;
}
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
export interface CreatePluginResponse {
  pluginId?: string;
  pluginArn?: string;
  buildStatus?: PluginBuildStatus;
}
export type RetrieverType = "NATIVE_INDEX" | "KENDRA_INDEX" | (string & {});
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
export type NumberAttributeBoostingType =
  | "PRIORITIZE_LARGER_VALUES"
  | "PRIORITIZE_SMALLER_VALUES"
  | (string & {});
export interface NumberAttributeBoostingConfiguration {
  boostingLevel: DocumentAttributeBoostingLevel;
  boostingType?: NumberAttributeBoostingType;
}
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
export type StringAttributeValueBoosting = {
  [key: string]: StringAttributeValueBoostingLevel | undefined;
};
export interface StringAttributeBoostingConfiguration {
  boostingLevel: DocumentAttributeBoostingLevel;
  attributeValueBoosting?: { [key: string]: StringAttributeValueBoostingLevel | undefined };
}
export type BoostingDurationInSeconds = number;
export interface DateAttributeBoostingConfiguration {
  boostingLevel: DocumentAttributeBoostingLevel;
  boostingDurationInSeconds?: number;
}
export interface StringListAttributeBoostingConfiguration {
  boostingLevel: DocumentAttributeBoostingLevel;
}
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
export type DocumentAttributeBoostingOverrideMap = {
  [key: string]: DocumentAttributeBoostingConfiguration | undefined;
};
export interface NativeIndexConfiguration {
  indexId: string;
  version?: number;
  boostingOverride?: { [key: string]: DocumentAttributeBoostingConfiguration | undefined };
}
export type KendraIndexId = string;
export interface KendraIndexConfiguration {
  indexId: string;
}
export type RetrieverConfiguration =
  | { nativeIndexConfiguration: NativeIndexConfiguration; kendraIndexConfiguration?: never }
  | { nativeIndexConfiguration?: never; kendraIndexConfiguration: KendraIndexConfiguration };
export interface CreateRetrieverRequest {
  applicationId: string;
  type: RetrieverType;
  displayName: string;
  configuration: RetrieverConfiguration;
  roleArn?: string;
  clientToken?: string;
  tags?: Tag[];
}
export type RetrieverId = string;
export type RetrieverArn = string;
export interface CreateRetrieverResponse {
  retrieverId?: string;
  retrieverArn?: string;
}
export type UserIdentifier = string;
export type GroupIdentifier = string;
export type SubscriptionPrincipal =
  | { user: string; group?: never }
  | { user?: never; group: string };
export interface CreateSubscriptionRequest {
  applicationId: string;
  principal: SubscriptionPrincipal;
  type: SubscriptionType;
  clientToken?: string;
}
export interface CreateSubscriptionResponse {
  subscriptionId?: string;
  subscriptionArn?: string;
  currentSubscription?: SubscriptionDetails;
  nextSubscription?: SubscriptionDetails;
}
export interface UserAlias {
  indexId?: string;
  dataSourceId?: string;
  userId: string;
}
export type UserAliases = UserAlias[];
export interface CreateUserRequest {
  applicationId: string;
  userId: string;
  userAliases?: UserAlias[];
  clientToken?: string;
}
export interface CreateUserResponse {}
export type WebExperienceTitle = string;
export type WebExperienceSubtitle = string;
export type WebExperienceWelcomeMessage = string;
export type WebExperienceSamplePromptsControlMode = "ENABLED" | "DISABLED" | (string & {});
export type Origin = string;
export type WebExperienceOrigins = string[];
export type SamlAuthenticationUrl = string;
export interface SamlProviderConfiguration {
  authenticationUrl: string;
}
export interface OpenIDConnectProviderConfiguration {
  secretsArn: string;
  secretsRole: string;
}
export type IdentityProviderConfiguration =
  | { samlConfiguration: SamlProviderConfiguration; openIDConnectConfiguration?: never }
  | { samlConfiguration?: never; openIDConnectConfiguration: OpenIDConnectProviderConfiguration };
export type BrowserExtension = string;
export type BrowserExtensionList = string[];
export interface BrowserExtensionConfiguration {
  enabledBrowserExtensions: string[];
}
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
export type WebExperienceArn = string;
export interface CreateWebExperienceResponse {
  webExperienceId?: string;
  webExperienceArn?: string;
}
export interface DeleteApplicationRequest {
  applicationId: string;
}
export interface DeleteApplicationResponse {}
export interface DeleteAttachmentRequest {
  applicationId: string;
  conversationId: string;
  attachmentId: string;
  userId?: string;
}
export interface DeleteAttachmentResponse {}
export interface DeleteChatControlsConfigurationRequest {
  applicationId: string;
}
export interface DeleteChatControlsConfigurationResponse {}
export interface DeleteChatResponseConfigurationRequest {
  applicationId: string;
  chatResponseConfigurationId: string;
}
export interface DeleteChatResponseConfigurationResponse {}
export interface DeleteConversationRequest {
  conversationId: string;
  applicationId: string;
  userId?: string;
}
export interface DeleteConversationResponse {}
export interface DeleteDataAccessorRequest {
  applicationId: string;
  dataAccessorId: string;
}
export interface DeleteDataAccessorResponse {}
export interface DeleteDataSourceRequest {
  applicationId: string;
  indexId: string;
  dataSourceId: string;
}
export interface DeleteDataSourceResponse {}
export interface DeleteGroupRequest {
  applicationId: string;
  indexId: string;
  groupName: string;
  dataSourceId?: string;
}
export interface DeleteGroupResponse {}
export interface DeleteIndexRequest {
  applicationId: string;
  indexId: string;
}
export interface DeleteIndexResponse {}
export interface DeletePluginRequest {
  applicationId: string;
  pluginId: string;
}
export interface DeletePluginResponse {}
export interface DeleteRetrieverRequest {
  applicationId: string;
  retrieverId: string;
}
export interface DeleteRetrieverResponse {}
export interface DeleteUserRequest {
  applicationId: string;
  userId: string;
}
export interface DeleteUserResponse {}
export interface DeleteWebExperienceRequest {
  applicationId: string;
  webExperienceId: string;
}
export interface DeleteWebExperienceResponse {}
export interface DisassociatePermissionRequest {
  applicationId: string;
  statementId: string;
}
export interface DisassociatePermissionResponse {}
export interface GetApplicationRequest {
  applicationId: string;
}
export type ApplicationStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING"
  | (string & {});
export interface AppliedAttachmentsConfiguration {
  attachmentsControlMode?: AttachmentsControlMode;
}
export type AutoSubscriptionStatus = "ENABLED" | "DISABLED" | (string & {});
export interface AutoSubscriptionConfiguration {
  autoSubscribe?: AutoSubscriptionStatus;
  defaultSubscriptionType?: SubscriptionType;
}
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
export type MaxResultsIntegerForGetTopicConfigurations = number;
export type NextToken = string;
export interface GetChatControlsConfigurationRequest {
  applicationId: string;
  maxResults?: number;
  nextToken?: string;
}
export type ResponseScope =
  | "ENTERPRISE_CONTENT_ONLY"
  | "EXTENDED_KNOWLEDGE_ENABLED"
  | (string & {});
export type OrchestrationControl = "ENABLED" | "DISABLED" | (string & {});
export interface AppliedOrchestrationConfiguration {
  control: OrchestrationControl;
}
export type BlockedPhrase = string;
export type BlockedPhrases = string[];
export type SystemMessageOverride = string;
export interface BlockedPhrasesConfiguration {
  blockedPhrases?: string[];
  systemMessageOverride?: string;
}
export type TopicConfigurationName = string;
export type TopicDescription = string;
export type ExampleChatMessage = string;
export type ExampleChatMessages = string[];
export type UserIds = string[];
export interface UsersAndGroups {
  userIds?: string[];
  userGroups?: string[];
}
export type RuleType = "CONTENT_BLOCKER_RULE" | "CONTENT_RETRIEVAL_RULE" | (string & {});
export interface ContentBlockerRule {
  systemMessageOverride?: string;
}
export interface EligibleDataSource {
  indexId?: string;
  dataSourceId?: string;
}
export type EligibleDataSources = EligibleDataSource[];
export interface ContentRetrievalRule {
  eligibleDataSources?: EligibleDataSource[];
}
export type RuleConfiguration =
  | { contentBlockerRule: ContentBlockerRule; contentRetrievalRule?: never }
  | { contentBlockerRule?: never; contentRetrievalRule: ContentRetrievalRule };
export interface Rule {
  includedUsersAndGroups?: UsersAndGroups;
  excludedUsersAndGroups?: UsersAndGroups;
  ruleType: RuleType;
  ruleConfiguration?: RuleConfiguration;
}
export type Rules = Rule[];
export interface TopicConfiguration {
  name: string;
  description?: string;
  exampleChatMessages?: string[];
  rules: Rule[];
}
export type TopicConfigurations = TopicConfiguration[];
export type CreatorModeControl = "ENABLED" | "DISABLED" | (string & {});
export interface AppliedCreatorModeConfiguration {
  creatorModeControl: CreatorModeControl;
}
export type HallucinationReductionControl = "ENABLED" | "DISABLED" | (string & {});
export interface HallucinationReductionConfiguration {
  hallucinationReductionControl?: HallucinationReductionControl;
}
export interface GetChatControlsConfigurationResponse {
  responseScope?: ResponseScope;
  orchestrationConfiguration?: AppliedOrchestrationConfiguration;
  blockedPhrases?: BlockedPhrasesConfiguration;
  topicConfigurations?: TopicConfiguration[];
  creatorModeConfiguration?: AppliedCreatorModeConfiguration;
  nextToken?: string;
  hallucinationReductionConfiguration?: HallucinationReductionConfiguration;
}
export interface GetChatResponseConfigurationRequest {
  applicationId: string;
  chatResponseConfigurationId: string;
}
export type ChatResponseConfigurationStatus =
  | "CREATING"
  | "UPDATING"
  | "FAILED"
  | "ACTIVE"
  | (string & {});
export interface ChatResponseConfigurationDetail {
  responseConfigurations?: { [key: string]: ResponseConfiguration | undefined };
  responseConfigurationSummary?: string;
  status?: ChatResponseConfigurationStatus;
  error?: ErrorDetail;
  updatedAt?: Date;
}
export interface GetChatResponseConfigurationResponse {
  chatResponseConfigurationId?: string;
  chatResponseConfigurationArn?: string;
  displayName?: string;
  createdAt?: Date;
  inUseConfiguration?: ChatResponseConfigurationDetail;
  lastUpdateConfiguration?: ChatResponseConfigurationDetail;
}
export interface GetDataAccessorRequest {
  applicationId: string;
  dataAccessorId: string;
}
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
export interface GetDataSourceRequest {
  applicationId: string;
  indexId: string;
  dataSourceId: string;
}
export type DataSourceStatus =
  | "PENDING_CREATION"
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING"
  | (string & {});
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
export type OutputFormat = "RAW" | "EXTRACTED" | (string & {});
export interface GetDocumentContentRequest {
  applicationId: string;
  indexId: string;
  dataSourceId?: string;
  documentId: string;
  outputFormat?: OutputFormat;
}
export interface GetDocumentContentResponse {
  presignedUrl: string;
  mimeType: string;
}
export interface GetGroupRequest {
  applicationId: string;
  indexId: string;
  groupName: string;
  dataSourceId?: string;
}
export type GroupStatus =
  | "FAILED"
  | "SUCCEEDED"
  | "PROCESSING"
  | "DELETING"
  | "DELETED"
  | (string & {});
export interface GroupStatusDetail {
  status?: GroupStatus;
  lastUpdatedAt?: Date;
  errorDetail?: ErrorDetail;
}
export type GroupStatusDetails = GroupStatusDetail[];
export interface GetGroupResponse {
  status?: GroupStatusDetail;
  statusHistory?: GroupStatusDetail[];
}
export interface GetIndexRequest {
  applicationId: string;
  indexId: string;
}
export type IndexStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING"
  | (string & {});
export type DocumentMetadataConfigurationName = string;
export type AttributeType = "STRING" | "STRING_LIST" | "NUMBER" | "DATE" | (string & {});
export type Status = "ENABLED" | "DISABLED" | (string & {});
export interface DocumentAttributeConfiguration {
  name?: string;
  type?: AttributeType;
  search?: Status;
}
export type DocumentAttributeConfigurations = DocumentAttributeConfiguration[];
export type IndexedTextBytes = number;
export type IndexedTextDocument = number;
export interface TextDocumentStatistics {
  indexedTextBytes?: number;
  indexedTextDocumentCount?: number;
}
export interface IndexStatistics {
  textDocumentStatistics?: TextDocumentStatistics;
}
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
export interface GetMediaRequest {
  applicationId: string;
  conversationId: string;
  messageId: string;
  mediaId: string;
}
export interface GetMediaResponse {
  mediaBytes?: Uint8Array;
  mediaMimeType?: string;
}
export interface GetPluginRequest {
  applicationId: string;
  pluginId: string;
}
export type PluginState = "ENABLED" | "DISABLED" | (string & {});
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
export interface GetPolicyRequest {
  applicationId: string;
}
export interface GetPolicyResponse {
  policy?: string;
}
export interface GetRetrieverRequest {
  applicationId: string;
  retrieverId: string;
}
export type RetrieverStatus = "CREATING" | "ACTIVE" | "FAILED" | (string & {});
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
export interface GetUserRequest {
  applicationId: string;
  userId: string;
}
export interface GetUserResponse {
  userAliases?: UserAlias[];
}
export interface GetWebExperienceRequest {
  applicationId: string;
  webExperienceId: string;
}
export type WebExperienceStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "PENDING_AUTH_CONFIG"
  | (string & {});
export type SamlMetadataXML = string;
export type SamlAttribute = string;
export interface SamlConfiguration {
  metadataXML: string;
  roleArn: string;
  userIdAttribute: string;
  userGroupAttribute?: string;
}
export type WebExperienceAuthConfiguration = { samlConfiguration: SamlConfiguration };
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
export type MaxResultsIntegerForListApplications = number;
export interface ListApplicationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface Application {
  displayName?: string;
  applicationId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: ApplicationStatus;
  identityType?: IdentityType;
  quickSightConfiguration?: QuickSightConfiguration;
}
export type Applications = Application[];
export interface ListApplicationsResponse {
  nextToken?: string;
  applications?: Application[];
}
export type MaxResultsIntegerForListAttachments = number;
export interface ListAttachmentsRequest {
  applicationId: string;
  conversationId?: string;
  userId?: string;
  nextToken?: string;
  maxResults?: number;
}
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
export type AttachmentList = Attachment[];
export interface ListAttachmentsResponse {
  attachments?: Attachment[];
  nextToken?: string;
}
export interface ListChatResponseConfigurationsRequest {
  applicationId: string;
  maxResults?: number;
  nextToken?: string;
}
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
export type ChatResponseConfigurations = ChatResponseConfiguration[];
export interface ListChatResponseConfigurationsResponse {
  chatResponseConfigurations?: ChatResponseConfiguration[];
  nextToken?: string;
}
export type MaxResultsIntegerForListConversations = number;
export interface ListConversationsRequest {
  applicationId: string;
  userId?: string;
  nextToken?: string;
  maxResults?: number;
}
export type ConversationTitle = string;
export interface Conversation {
  conversationId?: string;
  title?: string;
  startTime?: Date;
}
export type Conversations = Conversation[];
export interface ListConversationsResponse {
  nextToken?: string;
  conversations?: Conversation[];
}
export type NextToken1500 = string;
export type MaxResultsIntegerForListDataAccessors = number;
export interface ListDataAccessorsRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
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
export type DataAccessors = DataAccessor[];
export interface ListDataAccessorsResponse {
  dataAccessors?: DataAccessor[];
  nextToken?: string;
}
export type MaxResultsIntegerForListDataSources = number;
export interface ListDataSourcesRequest {
  applicationId: string;
  indexId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface DataSource {
  displayName?: string;
  dataSourceId?: string;
  type?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: DataSourceStatus;
}
export type DataSources = DataSource[];
export interface ListDataSourcesResponse {
  dataSources?: DataSource[];
  nextToken?: string;
}
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
export type MetricValue = string;
export interface DataSourceSyncJobMetrics {
  documentsAdded?: string;
  documentsModified?: string;
  documentsDeleted?: string;
  documentsFailed?: string;
  documentsScanned?: string;
}
export interface DataSourceSyncJob {
  executionId?: string;
  startTime?: Date;
  endTime?: Date;
  status?: DataSourceSyncJobStatus;
  error?: ErrorDetail;
  dataSourceErrorCode?: string;
  metrics?: DataSourceSyncJobMetrics;
}
export type DataSourceSyncJobs = DataSourceSyncJob[];
export interface ListDataSourceSyncJobsResponse {
  history?: DataSourceSyncJob[];
  nextToken?: string;
}
export type DataSourceIds = string[];
export type MaxResultsIntegerForListDocuments = number;
export interface ListDocumentsRequest {
  applicationId: string;
  indexId: string;
  dataSourceIds?: string[];
  nextToken?: string;
  maxResults?: number;
}
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
export interface DocumentDetails {
  documentId?: string;
  status?: DocumentStatus;
  error?: ErrorDetail;
  createdAt?: Date;
  updatedAt?: Date;
}
export type DocumentDetailList = DocumentDetails[];
export interface ListDocumentsResponse {
  documentDetailList?: DocumentDetails[];
  nextToken?: string;
}
export type MaxResultsIntegerForListGroupsRequest = number;
export interface ListGroupsRequest {
  applicationId: string;
  indexId: string;
  updatedEarlierThan: Date;
  dataSourceId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GroupSummary {
  groupName?: string;
}
export type GroupSummaryList = GroupSummary[];
export interface ListGroupsResponse {
  nextToken?: string;
  items?: GroupSummary[];
}
export type MaxResultsIntegerForListIndices = number;
export interface ListIndicesRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface Index {
  displayName?: string;
  indexId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: IndexStatus;
}
export type Indices = Index[];
export interface ListIndicesResponse {
  nextToken?: string;
  indices?: Index[];
}
export type MaxResultsIntegerForListMessages = number;
export interface ListMessagesRequest {
  conversationId: string;
  applicationId: string;
  userId?: string;
  nextToken?: string;
  maxResults?: number;
}
export type MessageBody = string;
export type MessageType = "USER" | "SYSTEM" | (string & {});
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
export type Messages = Message[];
export interface ListMessagesResponse {
  messages?: Message[];
  nextToken?: string;
}
export type MaxResultsIntegerForListPluginActions = number;
export interface ListPluginActionsRequest {
  applicationId: string;
  pluginId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ActionSummary {
  actionIdentifier?: string;
  displayName?: string;
  instructionExample?: string;
  description?: string;
}
export type Actions = ActionSummary[];
export interface ListPluginActionsResponse {
  nextToken?: string;
  items?: ActionSummary[];
}
export type MaxResultsIntegerForListPlugins = number;
export interface ListPluginsRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
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
export type Plugins = Plugin[];
export interface ListPluginsResponse {
  nextToken?: string;
  plugins?: Plugin[];
}
export type MaxResultsIntegerForListPluginTypeActions = number;
export interface ListPluginTypeActionsRequest {
  pluginType: PluginType;
  nextToken?: string;
  maxResults?: number;
}
export interface ListPluginTypeActionsResponse {
  nextToken?: string;
  items?: ActionSummary[];
}
export type MaxResultsIntegerForListPluginTypeMetadata = number;
export interface ListPluginTypeMetadataRequest {
  nextToken?: string;
  maxResults?: number;
}
export type PluginTypeCategory =
  | "Customer relationship management (CRM)"
  | "Project management"
  | "Communication"
  | "Productivity"
  | "Ticketing and incident management"
  | (string & {});
export interface PluginTypeMetadataSummary {
  type?: PluginType;
  category?: PluginTypeCategory;
  description?: string;
}
export type ListPluginTypeMetadataSummaries = PluginTypeMetadataSummary[];
export interface ListPluginTypeMetadataResponse {
  nextToken?: string;
  items?: PluginTypeMetadataSummary[];
}
export type MaxResultsIntegerForListRetrieversRequest = number;
export interface ListRetrieversRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface Retriever {
  applicationId?: string;
  retrieverId?: string;
  type?: RetrieverType;
  status?: RetrieverStatus;
  displayName?: string;
}
export type Retrievers = Retriever[];
export interface ListRetrieversResponse {
  retrievers?: Retriever[];
  nextToken?: string;
}
export type MaxResultsIntegerForListSubscriptions = number;
export interface ListSubscriptionsRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface Subscription {
  subscriptionId?: string;
  subscriptionArn?: string;
  principal?: SubscriptionPrincipal;
  currentSubscription?: SubscriptionDetails;
  nextSubscription?: SubscriptionDetails;
}
export type Subscriptions = Subscription[];
export interface ListSubscriptionsResponse {
  nextToken?: string;
  subscriptions?: Subscription[];
}
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  resourceARN: string;
}
export interface ListTagsForResourceResponse {
  tags?: Tag[];
}
export type MaxResultsIntegerForListWebExperiencesRequest = number;
export interface ListWebExperiencesRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface WebExperience {
  webExperienceId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  defaultEndpoint?: string;
  status?: WebExperienceStatus;
}
export type WebExperiences = WebExperience[];
export interface ListWebExperiencesResponse {
  webExperiences?: WebExperience[];
  nextToken?: string;
}
export type SystemMessageId = string;
export type MessageUsefulness = "USEFUL" | "NOT_USEFUL" | (string & {});
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
export type MessageUsefulnessComment = string;
export interface MessageUsefulnessFeedback {
  usefulness: MessageUsefulness;
  reason?: MessageUsefulnessReason;
  comment?: string;
  submittedAt: Date;
}
export interface PutFeedbackRequest {
  applicationId: string;
  userId?: string;
  conversationId: string;
  messageId: string;
  messageCopiedAt?: Date;
  messageUsefulness?: MessageUsefulnessFeedback;
}
export interface PutFeedbackResponse {}
export interface MemberGroup {
  groupName: string;
  type?: MembershipType;
}
export type MemberGroups = MemberGroup[];
export type DataSourceUserId = string;
export interface MemberUser {
  userId: string;
  type?: MembershipType;
}
export type MemberUsers = MemberUser[];
export interface GroupMembers {
  memberGroups?: MemberGroup[];
  memberUsers?: MemberUser[];
  s3PathForGroupMembers?: S3;
}
export interface PutGroupRequest {
  applicationId: string;
  indexId: string;
  groupName: string;
  dataSourceId?: string;
  type: MembershipType;
  groupMembers: GroupMembers;
  roleArn?: string;
}
export interface PutGroupResponse {}
export type QueryText = string;
export interface RetrieverContentSource {
  retrieverId: string;
}
export type ContentSource = { retriever: RetrieverContentSource };
export type MaxResults = number;
export interface SearchRelevantContentRequest {
  applicationId: string;
  queryText: string;
  contentSource: ContentSource;
  attributeFilter?: AttributeFilter;
  maxResults?: number;
  nextToken?: string;
}
export type ScoreConfidence =
  | "VERY_HIGH"
  | "HIGH"
  | "MEDIUM"
  | "LOW"
  | "NOT_AVAILABLE"
  | (string & {});
export interface ScoreAttributes {
  scoreConfidence?: ScoreConfidence;
}
export interface RelevantContent {
  content?: string;
  documentId?: string;
  documentTitle?: string;
  documentUri?: string;
  documentAttributes?: DocumentAttribute[];
  scoreAttributes?: ScoreAttributes;
}
export type RelevantContentList = RelevantContent[];
export interface SearchRelevantContentResponse {
  relevantContent?: RelevantContent[];
  nextToken?: string;
}
export interface StartDataSourceSyncJobRequest {
  dataSourceId: string;
  applicationId: string;
  indexId: string;
}
export interface StartDataSourceSyncJobResponse {
  executionId?: string;
}
export interface StopDataSourceSyncJobRequest {
  dataSourceId: string;
  applicationId: string;
  indexId: string;
}
export interface StopDataSourceSyncJobResponse {}
export interface TagResourceRequest {
  resourceARN: string;
  tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeys = string[];
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
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
export interface UpdateApplicationResponse {}
export interface OrchestrationConfiguration {
  control: OrchestrationControl;
}
export interface BlockedPhrasesConfigurationUpdate {
  blockedPhrasesToCreateOrUpdate?: string[];
  blockedPhrasesToDelete?: string[];
  systemMessageOverride?: string;
}
export interface CreatorModeConfiguration {
  creatorModeControl: CreatorModeControl;
}
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
export interface UpdateChatControlsConfigurationResponse {}
export interface UpdateChatResponseConfigurationRequest {
  applicationId: string;
  chatResponseConfigurationId: string;
  displayName?: string;
  responseConfigurations: { [key: string]: ResponseConfiguration | undefined };
  clientToken?: string;
}
export interface UpdateChatResponseConfigurationResponse {}
export interface UpdateDataAccessorRequest {
  applicationId: string;
  dataAccessorId: string;
  actionConfigurations: ActionConfiguration[];
  authenticationDetail?: DataAccessorAuthenticationDetail;
  displayName?: string | redacted.Redacted<string>;
}
export interface UpdateDataAccessorResponse {}
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
export interface UpdateDataSourceResponse {}
export interface UpdateIndexRequest {
  applicationId: string;
  indexId: string;
  displayName?: string;
  description?: string;
  capacityConfiguration?: IndexCapacityConfiguration;
  documentAttributeConfigurations?: DocumentAttributeConfiguration[];
}
export interface UpdateIndexResponse {}
export interface UpdatePluginRequest {
  applicationId: string;
  pluginId: string;
  displayName?: string;
  state?: PluginState;
  serverUrl?: string;
  customPluginConfiguration?: CustomPluginConfiguration;
  authConfiguration?: PluginAuthConfiguration;
}
export interface UpdatePluginResponse {}
export interface UpdateRetrieverRequest {
  applicationId: string;
  retrieverId: string;
  configuration?: RetrieverConfiguration;
  displayName?: string;
  roleArn?: string;
}
export interface UpdateRetrieverResponse {}
export interface UpdateSubscriptionRequest {
  applicationId: string;
  subscriptionId: string;
  type: SubscriptionType;
}
export interface UpdateSubscriptionResponse {
  subscriptionArn?: string;
  currentSubscription?: SubscriptionDetails;
  nextSubscription?: SubscriptionDetails;
}
export interface UpdateUserRequest {
  applicationId: string;
  userId: string;
  userAliasesToUpdate?: UserAlias[];
  userAliasesToDelete?: UserAlias[];
}
export interface UpdateUserResponse {
  userAliasesAdded?: UserAlias[];
  userAliasesUpdated?: UserAlias[];
  userAliasesDeleted?: UserAlias[];
}
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
export interface UpdateWebExperienceResponse {}
export type ValidationExceptionReason =
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "UNKNOWN_OPERATION"
  | (string & {});
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFields = ValidationExceptionField[];
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
  input: __S(3) as any as S.Schema<AssociatePermissionRequest>,
  output: __S(4) as any as S.Schema<AssociatePermissionResponse>,
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
  input: __S(7) as any as S.Schema<BatchDeleteDocumentRequest>,
  output: __S(11) as any as S.Schema<BatchDeleteDocumentResponse>,
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
  input: __S(36) as any as S.Schema<BatchPutDocumentRequest>,
  output: __S(37) as any as S.Schema<BatchPutDocumentResponse>,
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
  input: __S(38) as any as S.Schema<CancelSubscriptionRequest>,
  output: __S(40) as any as S.Schema<CancelSubscriptionResponse>,
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
  input: __S(58) as any as S.Schema<ChatInput>,
  output: __S(79) as any as S.Schema<ChatOutput>,
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
  input: __S(82) as any as S.Schema<ChatSyncInput>,
  output: __S(86) as any as S.Schema<ChatSyncOutput>,
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
  input: __S(87) as any as S.Schema<CheckDocumentAccessRequest>,
  output: __S(96) as any as S.Schema<CheckDocumentAccessResponse>,
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
  input: __S(97) as any as S.Schema<CreateAnonymousWebExperienceUrlRequest>,
  output: __S(98) as any as S.Schema<CreateAnonymousWebExperienceUrlResponse>,
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
  input: __S(106) as any as S.Schema<CreateApplicationRequest>,
  output: __S(107) as any as S.Schema<CreateApplicationResponse>,
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
  input: __S(111) as any as S.Schema<CreateChatResponseConfigurationRequest>,
  output: __S(112) as any as S.Schema<CreateChatResponseConfigurationResponse>,
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
  input: __S(119) as any as S.Schema<CreateDataAccessorRequest>,
  output: __S(120) as any as S.Schema<CreateDataAccessorResponse>,
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
  input: __S(122) as any as S.Schema<CreateDataSourceRequest>,
  output: __S(123) as any as S.Schema<CreateDataSourceResponse>,
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
  input: __S(125) as any as S.Schema<CreateIndexRequest>,
  output: __S(126) as any as S.Schema<CreateIndexResponse>,
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
  input: __S(133) as any as S.Schema<CreatePluginRequest>,
  output: __S(134) as any as S.Schema<CreatePluginResponse>,
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
  input: __S(145) as any as S.Schema<CreateRetrieverRequest>,
  output: __S(146) as any as S.Schema<CreateRetrieverResponse>,
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
  input: __S(148) as any as S.Schema<CreateSubscriptionRequest>,
  output: __S(149) as any as S.Schema<CreateSubscriptionResponse>,
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
  input: __S(152) as any as S.Schema<CreateUserRequest>,
  output: __S(54) as any as S.Schema<CreateUserResponse>,
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
  input: __S(158) as any as S.Schema<CreateWebExperienceRequest>,
  output: __S(159) as any as S.Schema<CreateWebExperienceResponse>,
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
  input: __S(160) as any as S.Schema<DeleteApplicationRequest>,
  output: __S(54) as any as S.Schema<DeleteApplicationResponse>,
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
  input: __S(161) as any as S.Schema<DeleteAttachmentRequest>,
  output: __S(54) as any as S.Schema<DeleteAttachmentResponse>,
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
  input: __S(162) as any as S.Schema<DeleteChatControlsConfigurationRequest>,
  output: __S(163) as any as S.Schema<DeleteChatControlsConfigurationResponse>,
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
  input: __S(164) as any as S.Schema<DeleteChatResponseConfigurationRequest>,
  output: __S(163) as any as S.Schema<DeleteChatResponseConfigurationResponse>,
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
  input: __S(165) as any as S.Schema<DeleteConversationRequest>,
  output: __S(54) as any as S.Schema<DeleteConversationResponse>,
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
  input: __S(166) as any as S.Schema<DeleteDataAccessorRequest>,
  output: __S(54) as any as S.Schema<DeleteDataAccessorResponse>,
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
  input: __S(167) as any as S.Schema<DeleteDataSourceRequest>,
  output: __S(54) as any as S.Schema<DeleteDataSourceResponse>,
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
  input: __S(168) as any as S.Schema<DeleteGroupRequest>,
  output: __S(54) as any as S.Schema<DeleteGroupResponse>,
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
  input: __S(169) as any as S.Schema<DeleteIndexRequest>,
  output: __S(54) as any as S.Schema<DeleteIndexResponse>,
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
  input: __S(170) as any as S.Schema<DeletePluginRequest>,
  output: __S(54) as any as S.Schema<DeletePluginResponse>,
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
  input: __S(171) as any as S.Schema<DeleteRetrieverRequest>,
  output: __S(54) as any as S.Schema<DeleteRetrieverResponse>,
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
  input: __S(172) as any as S.Schema<DeleteUserRequest>,
  output: __S(54) as any as S.Schema<DeleteUserResponse>,
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
  input: __S(173) as any as S.Schema<DeleteWebExperienceRequest>,
  output: __S(54) as any as S.Schema<DeleteWebExperienceResponse>,
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
  input: __S(174) as any as S.Schema<DisassociatePermissionRequest>,
  output: __S(54) as any as S.Schema<DisassociatePermissionResponse>,
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
  input: __S(175) as any as S.Schema<GetApplicationRequest>,
  output: __S(178) as any as S.Schema<GetApplicationResponse>,
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
  input: __S(179) as any as S.Schema<GetChatControlsConfigurationRequest>,
  output: __S(194) as any as S.Schema<GetChatControlsConfigurationResponse>,
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
  input: __S(195) as any as S.Schema<GetChatResponseConfigurationRequest>,
  output: __S(197) as any as S.Schema<GetChatResponseConfigurationResponse>,
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
  input: __S(198) as any as S.Schema<GetDataAccessorRequest>,
  output: __S(199) as any as S.Schema<GetDataAccessorResponse>,
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
  input: __S(200) as any as S.Schema<GetDataSourceRequest>,
  output: __S(201) as any as S.Schema<GetDataSourceResponse>,
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
  input: __S(202) as any as S.Schema<GetDocumentContentRequest>,
  output: __S(203) as any as S.Schema<GetDocumentContentResponse>,
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
  input: __S(204) as any as S.Schema<GetGroupRequest>,
  output: __S(207) as any as S.Schema<GetGroupResponse>,
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
  input: __S(208) as any as S.Schema<GetIndexRequest>,
  output: __S(213) as any as S.Schema<GetIndexResponse>,
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
  input: __S(214) as any as S.Schema<GetMediaRequest>,
  output: __S(215) as any as S.Schema<GetMediaResponse>,
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
  input: __S(216) as any as S.Schema<GetPluginRequest>,
  output: __S(217) as any as S.Schema<GetPluginResponse>,
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
  input: __S(218) as any as S.Schema<GetPolicyRequest>,
  output: __S(219) as any as S.Schema<GetPolicyResponse>,
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
  input: __S(220) as any as S.Schema<GetRetrieverRequest>,
  output: __S(221) as any as S.Schema<GetRetrieverResponse>,
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
  input: __S(222) as any as S.Schema<GetUserRequest>,
  output: __S(223) as any as S.Schema<GetUserResponse>,
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
  input: __S(224) as any as S.Schema<GetWebExperienceRequest>,
  output: __S(227) as any as S.Schema<GetWebExperienceResponse>,
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
  input: __S(228) as any as S.Schema<ListApplicationsRequest>,
  output: __S(231) as any as S.Schema<ListApplicationsResponse>,
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
  input: __S(232) as any as S.Schema<ListAttachmentsRequest>,
  output: __S(235) as any as S.Schema<ListAttachmentsResponse>,
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
  input: __S(236) as any as S.Schema<ListChatResponseConfigurationsRequest>,
  output: __S(239) as any as S.Schema<ListChatResponseConfigurationsResponse>,
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
  input: __S(240) as any as S.Schema<ListConversationsRequest>,
  output: __S(243) as any as S.Schema<ListConversationsResponse>,
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
  input: __S(244) as any as S.Schema<ListDataAccessorsRequest>,
  output: __S(247) as any as S.Schema<ListDataAccessorsResponse>,
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
  input: __S(248) as any as S.Schema<ListDataSourcesRequest>,
  output: __S(251) as any as S.Schema<ListDataSourcesResponse>,
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
  input: __S(252) as any as S.Schema<ListDataSourceSyncJobsRequest>,
  output: __S(256) as any as S.Schema<ListDataSourceSyncJobsResponse>,
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
  input: __S(257) as any as S.Schema<ListDocumentsRequest>,
  output: __S(260) as any as S.Schema<ListDocumentsResponse>,
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
  input: __S(261) as any as S.Schema<ListGroupsRequest>,
  output: __S(264) as any as S.Schema<ListGroupsResponse>,
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
  input: __S(265) as any as S.Schema<ListIndicesRequest>,
  output: __S(268) as any as S.Schema<ListIndicesResponse>,
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
  input: __S(269) as any as S.Schema<ListMessagesRequest>,
  output: __S(272) as any as S.Schema<ListMessagesResponse>,
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
  input: __S(273) as any as S.Schema<ListPluginActionsRequest>,
  output: __S(276) as any as S.Schema<ListPluginActionsResponse>,
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
  input: __S(277) as any as S.Schema<ListPluginsRequest>,
  output: __S(280) as any as S.Schema<ListPluginsResponse>,
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
  input: __S(281) as any as S.Schema<ListPluginTypeActionsRequest>,
  output: __S(276) as any as S.Schema<ListPluginTypeActionsResponse>,
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
  input: __S(282) as any as S.Schema<ListPluginTypeMetadataRequest>,
  output: __S(285) as any as S.Schema<ListPluginTypeMetadataResponse>,
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
  input: __S(286) as any as S.Schema<ListRetrieversRequest>,
  output: __S(289) as any as S.Schema<ListRetrieversResponse>,
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
  input: __S(290) as any as S.Schema<ListSubscriptionsRequest>,
  output: __S(293) as any as S.Schema<ListSubscriptionsResponse>,
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
  input: __S(294) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(295) as any as S.Schema<ListTagsForResourceResponse>,
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
  input: __S(296) as any as S.Schema<ListWebExperiencesRequest>,
  output: __S(299) as any as S.Schema<ListWebExperiencesResponse>,
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
  input: __S(301) as any as S.Schema<PutFeedbackRequest>,
  output: __S(54) as any as S.Schema<PutFeedbackResponse>,
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
  input: __S(307) as any as S.Schema<PutGroupRequest>,
  output: __S(54) as any as S.Schema<PutGroupResponse>,
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
  input: __S(310) as any as S.Schema<SearchRelevantContentRequest>,
  output: __S(314) as any as S.Schema<SearchRelevantContentResponse>,
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
  input: __S(315) as any as S.Schema<StartDataSourceSyncJobRequest>,
  output: __S(316) as any as S.Schema<StartDataSourceSyncJobResponse>,
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
  input: __S(317) as any as S.Schema<StopDataSourceSyncJobRequest>,
  output: __S(54) as any as S.Schema<StopDataSourceSyncJobResponse>,
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
  input: __S(318) as any as S.Schema<TagResourceRequest>,
  output: __S(54) as any as S.Schema<TagResourceResponse>,
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
  input: __S(319) as any as S.Schema<UntagResourceRequest>,
  output: __S(54) as any as S.Schema<UntagResourceResponse>,
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
  input: __S(320) as any as S.Schema<UpdateApplicationRequest>,
  output: __S(54) as any as S.Schema<UpdateApplicationResponse>,
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
  input: __S(323) as any as S.Schema<UpdateChatControlsConfigurationRequest>,
  output: __S(163) as any as S.Schema<UpdateChatControlsConfigurationResponse>,
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
  input: __S(324) as any as S.Schema<UpdateChatResponseConfigurationRequest>,
  output: __S(163) as any as S.Schema<UpdateChatResponseConfigurationResponse>,
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
  input: __S(325) as any as S.Schema<UpdateDataAccessorRequest>,
  output: __S(54) as any as S.Schema<UpdateDataAccessorResponse>,
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
  input: __S(326) as any as S.Schema<UpdateDataSourceRequest>,
  output: __S(54) as any as S.Schema<UpdateDataSourceResponse>,
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
  input: __S(327) as any as S.Schema<UpdateIndexRequest>,
  output: __S(54) as any as S.Schema<UpdateIndexResponse>,
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
  input: __S(328) as any as S.Schema<UpdatePluginRequest>,
  output: __S(54) as any as S.Schema<UpdatePluginResponse>,
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
  input: __S(329) as any as S.Schema<UpdateRetrieverRequest>,
  output: __S(54) as any as S.Schema<UpdateRetrieverResponse>,
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
  input: __S(330) as any as S.Schema<UpdateSubscriptionRequest>,
  output: __S(40) as any as S.Schema<UpdateSubscriptionResponse>,
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
  input: __S(331) as any as S.Schema<UpdateUserRequest>,
  output: __S(332) as any as S.Schema<UpdateUserResponse>,
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
  input: __S(333) as any as S.Schema<UpdateWebExperienceRequest>,
  output: __S(54) as any as S.Schema<UpdateWebExperienceResponse>,
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
          conditionOperator: S.String,
          conditionKey: S.String,
          conditionValues: __S(0),
        }),
      ).annotate({ identifier: "PermissionCondition" });
    case 2:
      return S.Array(__S(1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          statementId: S.String,
          actions: __S(0),
          conditions: S.optional(__S(2)),
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
      return S.Array(__S(5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          documents: __S(6),
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
        S.Struct({ errorMessage: S.optional(S.String), errorCode: S.optional(S.String) }),
      ).annotate({ identifier: "ErrorDetail" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          error: S.optional(__S(8)),
          dataSourceId: S.optional(S.String),
        }),
      ).annotate({ identifier: "FailedDocument" });
    case 2:
      return S.Array(__S(9));
    case 3:
      return S.suspend(() => S.Struct({ failedDocuments: S.optional(__S(10)) })).annotate({
        identifier: "BatchDeleteDocumentResponse",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ stringValue: S.String }),
        /*@__PURE__*/ S.Struct({ stringListValue: __S(0) }),
        /*@__PURE__*/ S.Struct({ longValue: S.Number }),
        /*@__PURE__*/ S.Struct({
          dateValue: /*@__PURE__*/ S.Date.pipe(/*@__PURE__*/ T.TimestampFormat("epoch-seconds")),
        }),
      ]);
    case 5:
      return S.suspend(() => S.Struct({ name: S.String, value: __S(12) })).annotate({
        identifier: "DocumentAttribute",
      });
    case 6:
      return S.Array(__S(13));
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
        /*@__PURE__*/ S.Struct({ s3: __S(15) }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          access: S.String,
          membershipType: S.optional(S.String),
        }),
      ).annotate({ identifier: "PrincipalUser" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          access: S.String,
          membershipType: S.optional(S.String),
        }),
      ).annotate({ identifier: "PrincipalGroup" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ user: __S(17) }),
        /*@__PURE__*/ S.Struct({ group: __S(18) }),
      ]);
    case 4:
      return S.Array(__S(19));
    case 5:
      return S.suspend(() =>
        S.Struct({ principals: __S(20), memberRelation: S.optional(S.String) }),
      ).annotate({ identifier: "AccessControl" });
    case 6:
      return S.Array(__S(21));
    case 7:
      return S.suspend(() =>
        S.Struct({ accessControls: __S(22), memberRelation: S.optional(S.String) }),
      ).annotate({ identifier: "AccessConfiguration" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          key: S.String,
          operator: S.String,
          value: S.optional(__S(12)),
        }),
      ).annotate({
        identifier: "DocumentAttributeCondition",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          key: S.String,
          value: S.optional(__S(12)),
          attributeValueOperator: S.optional(S.String),
        }),
      ).annotate({ identifier: "DocumentAttributeTarget" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          condition: S.optional(__S(24)),
          target: S.optional(__S(25)),
          documentContentOperator: S.optional(S.String),
        }),
      ).annotate({
        identifier: "InlineDocumentEnrichmentConfiguration",
      });
    case 3:
      return S.Array(__S(26));
    case 4:
      return S.suspend(() =>
        S.Struct({
          invocationCondition: S.optional(__S(24)),
          lambdaArn: S.optional(S.String),
          s3BucketName: S.optional(S.String),
          roleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "HookConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          inlineConfigurations: S.optional(__S(27)),
          preExtractionHookConfiguration: S.optional(__S(28)),
          postExtractionHookConfiguration: S.optional(__S(28)),
        }),
      ).annotate({
        identifier: "DocumentEnrichmentConfiguration",
      });
    case 6:
      return S.suspend(() => S.Struct({ imageExtractionStatus: S.String })).annotate({
        identifier: "ImageExtractionConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ audioExtractionStatus: S.String })).annotate({
        identifier: "AudioExtractionConfiguration",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ videoExtractionStatus: S.String })).annotate({
        identifier: "VideoExtractionConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          imageExtractionConfiguration: S.optional(__S(30)),
          audioExtractionConfiguration: S.optional(__S(31)),
          videoExtractionConfiguration: S.optional(__S(32)),
        }),
      ).annotate({
        identifier: "MediaExtractionConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          attributes: S.optional(__S(14)),
          content: S.optional(__S(16)),
          contentType: S.optional(S.String),
          title: S.optional(S.String),
          accessConfiguration: S.optional(__S(23)),
          documentEnrichmentConfiguration: S.optional(__S(29)),
          mediaExtractionConfiguration: S.optional(__S(33)),
        }),
      ).annotate({ identifier: "Document" });
    case 3:
      return S.Array(__S(34));
    case 4:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          documents: __S(35),
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
      return S.suspend(() => S.Struct({ failedDocuments: S.optional(__S(10)) })).annotate({
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
      return S.suspend(() => S.Struct({ type: S.optional(S.String) })).annotate({
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
          currentSubscription: S.optional(__S(39)),
          nextSubscription: S.optional(__S(39)),
        }),
      ).annotate({
        identifier: "CancelSubscriptionResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ pluginId: S.String })).annotate({
        identifier: "PluginConfiguration",
      });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ pluginConfiguration: __S(41) })]);
    case 3:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<AttributeFilter> => __S(44)).annotate({
          identifier: "AttributeFilter",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          andAllFilters: S.optional(
            S.suspend(() => __S(43)).annotate({ identifier: "AttributeFilters" }),
          ),
          orAllFilters: S.optional(
            S.suspend(() => __S(43)).annotate({ identifier: "AttributeFilters" }),
          ),
          notFilter: S.optional(
            S.suspend((): S.Schema<AttributeFilter> => __S(44)).annotate({
              identifier: "AttributeFilter",
            }),
          ),
          equalsTo: S.optional(__S(13)),
          containsAll: S.optional(__S(13)),
          containsAny: S.optional(__S(13)),
          greaterThan: S.optional(__S(13)),
          greaterThanOrEquals: S.optional(__S(13)),
          lessThan: S.optional(__S(13)),
          lessThanOrEquals: S.optional(__S(13)),
        }),
      ).annotate({ identifier: "AttributeFilter" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          chatMode: S.optional(S.String),
          chatModeConfiguration: S.optional(__S(42)),
          attributeFilter: S.optional(__S(44)),
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
      return S.Union([/*@__PURE__*/ S.Struct({ conversation: __S(47) })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          data: S.optional(T.Blob),
          name: S.optional(S.String),
          copyFrom: S.optional(__S(48)),
        }),
      ).annotate({ identifier: "AttachmentInput" });
    case 2:
      return S.suspend(() => S.Struct({ attachment: S.optional(__S(49)) })).annotate({
        identifier: "AttachmentInputEvent",
      });
    case 3:
      return S.suspend(() => S.Struct({ value: S.Any })).annotate({
        identifier: "ActionExecutionPayloadField",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(51).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          pluginId: S.String,
          payload: __S(52),
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
      return S.suspend(() => S.Struct({ responseMap: __S(55) })).annotate({
        identifier: "AuthChallengeResponseEvent",
      });
    case 1:
      return T.InputEventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ configurationEvent: __S(45) }),
          /*@__PURE__*/ S.Struct({ textEvent: __S(46) }),
          /*@__PURE__*/ S.Struct({ attachmentEvent: __S(50) }),
          /*@__PURE__*/ S.Struct({ actionExecutionEvent: __S(53) }),
          /*@__PURE__*/ S.Struct({ endOfInputEvent: __S(54) }),
          /*@__PURE__*/ S.Struct({ authChallengeResponseEvent: __S(56) }),
        ]),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          userId: S.optional(S.String).pipe(T.HttpQuery("userId")),
          userGroups: S.optional(__S(0)).pipe(T.HttpQuery("userGroups")),
          conversationId: S.optional(S.String).pipe(T.HttpQuery("conversationId")),
          parentMessageId: S.optional(S.String).pipe(T.HttpQuery("parentMessageId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          inputStream: S.optional(__S(57)).pipe(T.HttpPayload()),
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
          systemMessageType: S.optional(S.String),
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
          audioExtractionType: S.optional(S.String),
        }),
      ).annotate({ identifier: "AudioSourceDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          mediaId: S.optional(S.String),
          mediaMimeType: S.optional(S.String),
          startTimeMilliseconds: S.optional(S.Number),
          endTimeMilliseconds: S.optional(S.Number),
          videoExtractionType: S.optional(S.String),
        }),
      ).annotate({ identifier: "VideoSourceDetails" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ imageSourceDetails: __S(61) }),
        /*@__PURE__*/ S.Struct({ audioSourceDetails: __S(62) }),
        /*@__PURE__*/ S.Struct({ videoSourceDetails: __S(63) }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          beginOffset: S.optional(S.Number),
          endOffset: S.optional(S.Number),
          snippetExcerpt: S.optional(__S(60)),
          mediaId: S.optional(S.String),
          mediaMimeType: S.optional(S.String),
          sourceDetails: S.optional(__S(64)),
        }),
      ).annotate({ identifier: "TextSegment" });
    case 2:
      return S.Array(__S(65));
    case 3:
      return S.suspend(() =>
        S.Struct({
          title: S.optional(S.String),
          snippet: S.optional(S.String),
          url: S.optional(S.String),
          citationNumber: S.optional(S.Number),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          textMessageSegments: S.optional(__S(66)),
          documentId: S.optional(S.String),
          indexId: S.optional(S.String),
          datasourceId: S.optional(S.String),
        }),
      ).annotate({ identifier: "SourceAttribution" });
    case 4:
      return S.Array(__S(67)).pipe(/*@__PURE__*/ T.Sparse());
    case 5:
      return S.suspend(() =>
        S.Struct({
          conversationId: S.optional(S.String),
          userMessageId: S.optional(S.String),
          systemMessageId: S.optional(S.String),
          sourceAttributions: S.optional(__S(68)),
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
      return S.Array(__S(70));
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
          type: S.optional(S.String),
          value: S.optional(S.Any),
          allowedValues: S.optional(__S(71)),
          allowedFormat: S.optional(S.String),
          arrayItemJsonSchema: S.optional(S.Any),
          required: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ActionReviewPayloadField" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ __S(72).pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          conversationId: S.optional(S.String),
          userMessageId: S.optional(S.String),
          systemMessageId: S.optional(S.String),
          pluginId: S.optional(S.String),
          pluginType: S.optional(S.String),
          payload: S.optional(__S(73)),
          payloadFieldNameSeparator: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActionReviewEvent" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          status: S.optional(S.String),
          error: S.optional(__S(8)),
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
          attachment: S.optional(__S(75)),
        }),
      ).annotate({ identifier: "FailedAttachmentEvent" });
    case 5:
      return S.suspend(() => S.Struct({ authorizationUrl: S.String })).annotate({
        identifier: "AuthChallengeRequestEvent",
      });
    case 6:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ textEvent: __S(59) }),
          /*@__PURE__*/ S.Struct({ metadataEvent: __S(69) }),
          /*@__PURE__*/ S.Struct({ actionReviewEvent: __S(74) }),
          /*@__PURE__*/ S.Struct({ failedAttachmentEvent: __S(76) }),
          /*@__PURE__*/ S.Struct({ authChallengeRequestEvent: __S(77) }),
        ]),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({ outputStream: S.optional(__S(78)).pipe(T.HttpPayload()) }),
      ).annotate({ identifier: "ChatOutput" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(49));
    case 1:
      return S.suspend(() => S.Struct({ responseMap: __S(55) })).annotate({
        identifier: "AuthChallengeResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          userId: S.optional(S.String).pipe(T.HttpQuery("userId")),
          userGroups: S.optional(__S(0)).pipe(T.HttpQuery("userGroups")),
          userMessage: S.optional(S.String),
          attachments: S.optional(__S(80)),
          actionExecution: S.optional(__S(53)),
          authChallengeResponse: S.optional(__S(81)),
          conversationId: S.optional(S.String),
          parentMessageId: S.optional(S.String),
          attributeFilter: S.optional(__S(44)),
          chatMode: S.optional(S.String),
          chatModeConfiguration: S.optional(__S(42)),
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
          pluginType: S.optional(S.String),
          payload: S.optional(__S(73)),
          payloadFieldNameSeparator: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActionReview" });
    case 4:
      return S.suspend(() => S.Struct({ authorizationUrl: S.String })).annotate({
        identifier: "AuthChallengeRequest",
      });
    case 5:
      return S.Array(__S(75));
    case 6:
      return S.suspend(() =>
        S.Struct({
          conversationId: S.optional(S.String),
          systemMessage: S.optional(S.String),
          systemMessageId: S.optional(S.String),
          userMessageId: S.optional(S.String),
          actionReview: S.optional(__S(83)),
          authChallengeRequest: S.optional(__S(84)),
          sourceAttributions: S.optional(__S(68)),
          failedAttachments: S.optional(__S(85)),
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
        S.Struct({ name: S.optional(S.String), type: S.optional(S.String) }),
      ).annotate({ identifier: "AssociatedGroup" });
    case 1:
      return S.Array(__S(88));
    case 2:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), type: S.optional(S.String) }),
      ).annotate({ identifier: "AssociatedUser" });
    case 3:
      return S.Array(__S(90));
    case 4:
      return S.suspend(() =>
        S.Struct({
          memberRelation: S.optional(S.String),
          users: S.optional(__S(91)),
          groups: S.optional(__S(89)),
        }),
      ).annotate({ identifier: "DocumentAclCondition" });
    case 5:
      return S.Array(__S(92));
    case 6:
      return S.suspend(() =>
        S.Struct({
          memberRelation: S.optional(S.String),
          conditions: S.optional(__S(93)),
        }),
      ).annotate({ identifier: "DocumentAclMembership" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          allowlist: S.optional(__S(94)),
          denyList: S.optional(__S(94)),
        }),
      ).annotate({ identifier: "DocumentAcl" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          userGroups: S.optional(__S(89)),
          userAliases: S.optional(__S(91)),
          hasAccess: S.optional(S.Boolean),
          documentAcl: S.optional(__S(95)),
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
      return S.Array(__S(100));
    case 6:
      return S.suspend(() => S.Struct({ attachmentsControlMode: S.String })).annotate({
        identifier: "AttachmentsConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ qAppsControlMode: S.String })).annotate({
        identifier: "QAppsConfiguration",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ personalizationControlMode: S.String })).annotate({
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
          identityType: S.optional(S.String),
          iamIdentityProviderArn: S.optional(S.String),
          identityCenterInstanceArn: S.optional(S.String),
          clientIdsForOIDC: S.optional(__S(0)),
          description: S.optional(S.String),
          encryptionConfiguration: S.optional(__S(99)),
          tags: S.optional(__S(101)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          attachmentsConfiguration: S.optional(__S(102)),
          qAppsConfiguration: S.optional(__S(103)),
          personalizationConfiguration: S.optional(__S(104)),
          quickSightConfiguration: S.optional(__S(105)),
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
      return S.suspend(() => S.Struct({ instructionCollection: S.optional(__S(108)) })).annotate({
        identifier: "ResponseConfiguration",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(109).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          displayName: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          responseConfigurations: __S(110),
          tags: S.optional(__S(101)),
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
      return S.suspend(() => S.Struct({ documentAttributeFilter: __S(44) })).annotate({
        identifier: "ActionFilterConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ action: S.String, filterConfiguration: S.optional(__S(113)) }),
      ).annotate({ identifier: "ActionConfiguration" });
    case 3:
      return S.Array(__S(114));
    case 4:
      return S.suspend(() => S.Struct({ idcTrustedTokenIssuerArn: S.String })).annotate({
        identifier: "DataAccessorIdcTrustedTokenIssuerConfiguration",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          idcTrustedTokenIssuerConfiguration: __S(116),
        }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          authenticationType: S.String,
          authenticationConfiguration: S.optional(__S(117)),
          externalIds: S.optional(__S(0)),
        }),
      ).annotate({
        identifier: "DataAccessorAuthenticationDetail",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          principal: S.String,
          actionConfigurations: __S(115),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          displayName: SensitiveString,
          authenticationDetail: S.optional(__S(118)),
          tags: S.optional(__S(101)),
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
      return S.suspend(() => S.Struct({ subnetIds: __S(0), securityGroupIds: __S(0) })).annotate({
        identifier: "DataSourceVpcConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          displayName: S.String,
          configuration: S.Any,
          vpcConfiguration: S.optional(__S(121)),
          description: S.optional(S.String),
          tags: S.optional(__S(101)),
          syncSchedule: S.optional(S.String),
          roleArn: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          documentEnrichmentConfiguration: S.optional(__S(29)),
          mediaExtractionConfiguration: S.optional(__S(33)),
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
          type: S.optional(S.String),
          tags: S.optional(__S(101)),
          capacityConfiguration: S.optional(__S(124)),
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
        /*@__PURE__*/ S.Struct({ basicAuthConfiguration: __S(127) }),
        /*@__PURE__*/ S.Struct({
          oAuth2ClientCredentialConfiguration: __S(128),
        }),
        /*@__PURE__*/ S.Struct({ noAuthConfiguration: __S(54) }),
        /*@__PURE__*/ S.Struct({ idcAuthConfiguration: __S(129) }),
      ]);
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ payload: SensitiveString }),
        /*@__PURE__*/ S.Struct({ s3: __S(15) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          description: S.String,
          apiSchemaType: S.String,
          apiSchema: S.optional(__S(131)),
        }),
      ).annotate({
        identifier: "CustomPluginConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          displayName: S.String,
          type: S.String,
          authConfiguration: __S(130),
          serverUrl: S.optional(S.String),
          customPluginConfiguration: S.optional(__S(132)),
          tags: S.optional(__S(101)),
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
          buildStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreatePluginResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          boostingLevel: S.String,
          boostingType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NumberAttributeBoostingConfiguration",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          boostingLevel: S.String,
          attributeValueBoosting: S.optional(__S(136)),
        }),
      ).annotate({
        identifier: "StringAttributeBoostingConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          boostingLevel: S.String,
          boostingDurationInSeconds: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DateAttributeBoostingConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ boostingLevel: S.String })).annotate({
        identifier: "StringListAttributeBoostingConfiguration",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ numberConfiguration: __S(135) }),
        /*@__PURE__*/ S.Struct({ stringConfiguration: __S(137) }),
        /*@__PURE__*/ S.Struct({ dateConfiguration: __S(138) }),
        /*@__PURE__*/ S.Struct({
          stringListConfiguration: __S(139),
        }),
      ]);
    case 5:
      return S.Record(S.String, /*@__PURE__*/ __S(140).pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          indexId: S.String,
          version: S.optional(S.Number),
          boostingOverride: S.optional(__S(141)),
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
        /*@__PURE__*/ S.Struct({ nativeIndexConfiguration: __S(142) }),
        /*@__PURE__*/ S.Struct({ kendraIndexConfiguration: __S(143) }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          type: S.String,
          displayName: S.String,
          configuration: __S(144),
          roleArn: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(101)),
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
          principal: __S(147),
          type: S.String,
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
          currentSubscription: S.optional(__S(39)),
          nextSubscription: S.optional(__S(39)),
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
      return S.Array(__S(150));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          userId: S.String,
          userAliases: S.optional(__S(151)),
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
        /*@__PURE__*/ S.Struct({ samlConfiguration: __S(153) }),
        /*@__PURE__*/ S.Struct({ openIDConnectConfiguration: __S(154) }),
      ]);
    case 4:
      return S.suspend(() => S.Struct({ enabledBrowserExtensions: __S(0) })).annotate({
        identifier: "BrowserExtensionConfiguration",
      });
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
          samplePromptsControlMode: S.optional(S.String),
          origins: S.optional(__S(0)),
          roleArn: S.optional(S.String),
          tags: S.optional(__S(101)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          identityProviderConfiguration: S.optional(__S(155)),
          browserExtensionConfiguration: S.optional(__S(156)),
          customizationConfiguration: S.optional(__S(157)),
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
      return S.suspend(() => S.Struct({ attachmentsControlMode: S.optional(S.String) })).annotate({
        identifier: "AppliedAttachmentsConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          autoSubscribe: S.optional(S.String),
          defaultSubscriptionType: S.optional(S.String),
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
          identityType: S.optional(S.String),
          iamIdentityProviderArn: S.optional(S.String),
          identityCenterApplicationArn: S.optional(S.String),
          roleArn: S.optional(S.String),
          status: S.optional(S.String),
          description: S.optional(S.String),
          encryptionConfiguration: S.optional(__S(99)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          error: S.optional(__S(8)),
          attachmentsConfiguration: S.optional(__S(176)),
          qAppsConfiguration: S.optional(__S(103)),
          personalizationConfiguration: S.optional(__S(104)),
          autoSubscriptionConfiguration: S.optional(__S(177)),
          clientIdsForOIDC: S.optional(__S(0)),
          quickSightConfiguration: S.optional(__S(105)),
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
      return S.suspend(() => S.Struct({ control: S.String })).annotate({
        identifier: "AppliedOrchestrationConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          blockedPhrases: S.optional(__S(0)),
          systemMessageOverride: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BlockedPhrasesConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ userIds: S.optional(__S(0)), userGroups: S.optional(__S(0)) }),
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
      return S.Array(__S(184));
    case 2:
      return S.suspend(() => S.Struct({ eligibleDataSources: S.optional(__S(185)) })).annotate({
        identifier: "ContentRetrievalRule",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ contentBlockerRule: __S(183) }),
        /*@__PURE__*/ S.Struct({ contentRetrievalRule: __S(186) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          includedUsersAndGroups: S.optional(__S(182)),
          excludedUsersAndGroups: S.optional(__S(182)),
          ruleType: S.String,
          ruleConfiguration: S.optional(__S(187)),
        }),
      ).annotate({ identifier: "Rule" });
    case 5:
      return S.Array(__S(188));
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          exampleChatMessages: S.optional(__S(0)),
          rules: __S(189),
        }),
      ).annotate({ identifier: "TopicConfiguration" });
    case 7:
      return S.Array(__S(190));
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ creatorModeControl: S.String })).annotate({
        identifier: "AppliedCreatorModeConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ hallucinationReductionControl: S.optional(S.String) }),
      ).annotate({
        identifier: "HallucinationReductionConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          responseScope: S.optional(S.String),
          orchestrationConfiguration: S.optional(__S(180)),
          blockedPhrases: S.optional(__S(181)),
          topicConfigurations: S.optional(__S(191)),
          creatorModeConfiguration: S.optional(__S(192)),
          nextToken: S.optional(S.String),
          hallucinationReductionConfiguration: S.optional(__S(193)),
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
          responseConfigurations: S.optional(__S(110)),
          responseConfigurationSummary: S.optional(S.String),
          status: S.optional(S.String),
          error: S.optional(__S(8)),
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
          inUseConfiguration: S.optional(__S(196)),
          lastUpdateConfiguration: S.optional(__S(196)),
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
          actionConfigurations: S.optional(__S(115)),
          authenticationDetail: S.optional(__S(118)),
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
          vpcConfiguration: S.optional(__S(121)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          description: S.optional(S.String),
          status: S.optional(S.String),
          syncSchedule: S.optional(S.String),
          roleArn: S.optional(S.String),
          error: S.optional(__S(8)),
          documentEnrichmentConfiguration: S.optional(__S(29)),
          mediaExtractionConfiguration: S.optional(__S(33)),
        }),
      ).annotate({ identifier: "GetDataSourceResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          dataSourceId: S.optional(S.String).pipe(T.HttpQuery("dataSourceId")),
          documentId: S.String.pipe(T.HttpLabel("documentId")),
          outputFormat: S.optional(S.String).pipe(T.HttpQuery("outputFormat")),
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
          status: S.optional(S.String),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          errorDetail: S.optional(__S(8)),
        }),
      ).annotate({ identifier: "GroupStatusDetail" });
    case 6:
      return S.Array(__S(205));
    case 7:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(__S(205)),
          statusHistory: S.optional(__S(206)),
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
          type: S.optional(S.String),
          search: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DocumentAttributeConfiguration",
      });
    case 2:
      return S.Array(__S(209));
    case 3:
      return S.suspend(() =>
        S.Struct({
          indexedTextBytes: S.optional(S.Number),
          indexedTextDocumentCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TextDocumentStatistics" });
    case 4:
      return S.suspend(() => S.Struct({ textDocumentStatistics: S.optional(__S(211)) })).annotate({
        identifier: "IndexStatistics",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.optional(S.String),
          indexId: S.optional(S.String),
          displayName: S.optional(S.String),
          indexArn: S.optional(S.String),
          status: S.optional(S.String),
          type: S.optional(S.String),
          description: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          capacityConfiguration: S.optional(__S(124)),
          documentAttributeConfigurations: S.optional(__S(210)),
          error: S.optional(__S(8)),
          indexStatistics: S.optional(__S(212)),
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
          type: S.optional(S.String),
          serverUrl: S.optional(S.String),
          authConfiguration: S.optional(__S(130)),
          customPluginConfiguration: S.optional(__S(132)),
          buildStatus: S.optional(S.String),
          pluginArn: S.optional(S.String),
          state: S.optional(S.String),
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
          type: S.optional(S.String),
          status: S.optional(S.String),
          displayName: S.optional(S.String),
          configuration: S.optional(__S(144)),
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
      return S.suspend(() => S.Struct({ userAliases: S.optional(__S(151)) })).annotate({
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
      return S.Union([/*@__PURE__*/ S.Struct({ samlConfiguration: __S(225) })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.optional(S.String),
          webExperienceId: S.optional(S.String),
          webExperienceArn: S.optional(S.String),
          defaultEndpoint: S.optional(S.String),
          status: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          title: S.optional(S.String),
          subtitle: S.optional(S.String),
          welcomeMessage: S.optional(S.String),
          samplePromptsControlMode: S.optional(S.String),
          origins: S.optional(__S(0)),
          roleArn: S.optional(S.String),
          identityProviderConfiguration: S.optional(__S(155)),
          authenticationConfiguration: S.optional(__S(226)),
          error: S.optional(__S(8)),
          browserExtensionConfiguration: S.optional(__S(156)),
          customizationConfiguration: S.optional(__S(157)),
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
          status: S.optional(S.String),
          identityType: S.optional(S.String),
          quickSightConfiguration: S.optional(__S(105)),
        }),
      ).annotate({ identifier: "Application" });
    case 6:
      return S.Array(__S(229));
    case 7:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), applications: S.optional(__S(230)) }),
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
          copyFrom: S.optional(__S(48)),
          fileType: S.optional(S.String),
          fileSize: S.optional(S.Number),
          md5chksum: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          error: S.optional(__S(8)),
        }),
      ).annotate({ identifier: "Attachment" });
    case 2:
      return S.Array(__S(233));
    case 3:
      return S.suspend(() =>
        S.Struct({ attachments: S.optional(__S(234)), nextToken: S.optional(S.String) }),
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
          status: S.String,
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "ChatResponseConfiguration",
      });
    case 6:
      return S.Array(__S(237));
    case 7:
      return S.suspend(() =>
        S.Struct({
          chatResponseConfigurations: S.optional(__S(238)),
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
      return S.Array(__S(241));
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), conversations: S.optional(__S(242)) }),
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
          authenticationDetail: S.optional(__S(118)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DataAccessor" });
    case 6:
      return S.Array(__S(245));
    case 7:
      return S.suspend(() =>
        S.Struct({ dataAccessors: S.optional(__S(246)), nextToken: S.optional(S.String) }),
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
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataSource" });
    case 2:
      return S.Array(__S(249));
    case 3:
      return S.suspend(() =>
        S.Struct({ dataSources: S.optional(__S(250)), nextToken: S.optional(S.String) }),
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
          statusFilter: S.optional(S.String).pipe(T.HttpQuery("syncStatus")),
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
          status: S.optional(S.String),
          error: S.optional(__S(8)),
          dataSourceErrorCode: S.optional(S.String),
          metrics: S.optional(__S(253)),
        }),
      ).annotate({ identifier: "DataSourceSyncJob" });
    case 7:
      return S.Array(__S(254));
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ history: S.optional(__S(255)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDataSourceSyncJobsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          dataSourceIds: S.optional(__S(0)).pipe(T.HttpQuery("dataSourceIds")),
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
          status: S.optional(S.String),
          error: S.optional(__S(8)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DocumentDetails" });
    case 3:
      return S.Array(__S(258));
    case 4:
      return S.suspend(() =>
        S.Struct({
          documentDetailList: S.optional(__S(259)),
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
      return S.Array(__S(262));
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), items: S.optional(__S(263)) }),
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
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "Index" });
    case 3:
      return S.Array(__S(266));
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), indices: S.optional(__S(267)) }),
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
          type: S.optional(S.String),
          attachments: S.optional(__S(85)),
          sourceAttribution: S.optional(__S(68)),
          actionReview: S.optional(__S(83)),
          actionExecution: S.optional(__S(53)),
        }),
      ).annotate({ identifier: "Message" });
    case 7:
      return S.Array(__S(270));
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ messages: S.optional(__S(271)), nextToken: S.optional(S.String) }),
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
      return S.Array(__S(274));
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), items: S.optional(__S(275)) }),
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
          type: S.optional(S.String),
          serverUrl: S.optional(S.String),
          state: S.optional(S.String),
          buildStatus: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Plugin" });
    case 7:
      return S.Array(__S(278));
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), plugins: S.optional(__S(279)) }),
      ).annotate({ identifier: "ListPluginsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          pluginType: S.String.pipe(T.HttpLabel("pluginType")),
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
          type: S.optional(S.String),
          category: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PluginTypeMetadataSummary",
      });
    case 4:
      return S.Array(__S(283));
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          items: S.optional(__S(284)),
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
          type: S.optional(S.String),
          status: S.optional(S.String),
          displayName: S.optional(S.String),
        }),
      ).annotate({ identifier: "Retriever" });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(287));
    case 1:
      return S.suspend(() =>
        S.Struct({ retrievers: S.optional(__S(288)), nextToken: S.optional(S.String) }),
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
          principal: S.optional(__S(147)),
          currentSubscription: S.optional(__S(39)),
          nextSubscription: S.optional(__S(39)),
        }),
      ).annotate({ identifier: "Subscription" });
    case 4:
      return S.Array(__S(291));
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), subscriptions: S.optional(__S(292)) }),
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
      return S.suspend(() => S.Struct({ tags: S.optional(__S(101)) })).annotate({
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
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "WebExperience" });
    case 2:
      return S.Array(__S(297));
    case 3:
      return S.suspend(() =>
        S.Struct({ webExperiences: S.optional(__S(298)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListWebExperiencesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          usefulness: S.String,
          reason: S.optional(S.String),
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
          messageUsefulness: S.optional(__S(300)),
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
        S.Struct({ groupName: S.String, type: S.optional(S.String) }),
      ).annotate({ identifier: "MemberGroup" });
    case 7:
      return S.Array(__S(302));
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ userId: S.String, type: S.optional(S.String) })).annotate({
        identifier: "MemberUser",
      });
    case 1:
      return S.Array(__S(304));
    case 2:
      return S.suspend(() =>
        S.Struct({
          memberGroups: S.optional(__S(303)),
          memberUsers: S.optional(__S(305)),
          s3PathForGroupMembers: S.optional(__S(15)),
        }),
      ).annotate({ identifier: "GroupMembers" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          indexId: S.String.pipe(T.HttpLabel("indexId")),
          groupName: S.String,
          dataSourceId: S.optional(S.String),
          type: S.String,
          groupMembers: __S(306),
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
      return S.Union([/*@__PURE__*/ S.Struct({ retriever: __S(308) })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          queryText: S.String,
          contentSource: __S(309),
          attributeFilter: S.optional(__S(44)),
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
      return S.suspend(() => S.Struct({ scoreConfidence: S.optional(S.String) })).annotate({
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
          documentAttributes: S.optional(__S(14)),
          scoreAttributes: S.optional(__S(311)),
        }),
      ).annotate({ identifier: "RelevantContent" });
    case 1:
      return S.Array(__S(312));
    case 2:
      return S.suspend(() =>
        S.Struct({
          relevantContent: S.optional(__S(313)),
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
        S.Struct({ resourceARN: S.String.pipe(T.HttpLabel("resourceARN")), tags: __S(101) }).pipe(
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
          tagKeys: __S(0).pipe(T.HttpQuery("tagKeys")),
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
          attachmentsConfiguration: S.optional(__S(102)),
          qAppsConfiguration: S.optional(__S(103)),
          personalizationConfiguration: S.optional(__S(104)),
          autoSubscriptionConfiguration: S.optional(__S(177)),
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
          blockedPhrasesToCreateOrUpdate: S.optional(__S(0)),
          blockedPhrasesToDelete: S.optional(__S(0)),
          systemMessageOverride: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BlockedPhrasesConfigurationUpdate",
      });
    case 2:
      return S.suspend(() => S.Struct({ creatorModeControl: S.String })).annotate({
        identifier: "CreatorModeConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          responseScope: S.optional(S.String),
          orchestrationConfiguration: S.optional(__S(180)),
          blockedPhrasesConfigurationUpdate: S.optional(__S(321)),
          topicConfigurationsToCreateOrUpdate: S.optional(__S(191)),
          topicConfigurationsToDelete: S.optional(__S(191)),
          creatorModeConfiguration: S.optional(__S(322)),
          hallucinationReductionConfiguration: S.optional(__S(193)),
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
          responseConfigurations: __S(110),
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
          actionConfigurations: __S(115),
          authenticationDetail: S.optional(__S(118)),
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
          vpcConfiguration: S.optional(__S(121)),
          description: S.optional(S.String),
          syncSchedule: S.optional(S.String),
          roleArn: S.optional(S.String),
          documentEnrichmentConfiguration: S.optional(__S(29)),
          mediaExtractionConfiguration: S.optional(__S(33)),
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
          capacityConfiguration: S.optional(__S(124)),
          documentAttributeConfigurations: S.optional(__S(210)),
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
          state: S.optional(S.String),
          serverUrl: S.optional(S.String),
          customPluginConfiguration: S.optional(__S(132)),
          authConfiguration: S.optional(__S(130)),
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
          configuration: S.optional(__S(144)),
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
          type: S.String,
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
          userAliasesToUpdate: S.optional(__S(151)),
          userAliasesToDelete: S.optional(__S(151)),
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
          userAliasesAdded: S.optional(__S(151)),
          userAliasesUpdated: S.optional(__S(151)),
          userAliasesDeleted: S.optional(__S(151)),
        }),
      ).annotate({ identifier: "UpdateUserResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          webExperienceId: S.String.pipe(T.HttpLabel("webExperienceId")),
          roleArn: S.optional(S.String),
          authenticationConfiguration: S.optional(__S(226)),
          title: S.optional(S.String),
          subtitle: S.optional(S.String),
          welcomeMessage: S.optional(S.String),
          samplePromptsControlMode: S.optional(S.String),
          identityProviderConfiguration: S.optional(__S(155)),
          origins: S.optional(__S(0)),
          browserExtensionConfiguration: S.optional(__S(156)),
          customizationConfiguration: S.optional(__S(157)),
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
      return S.Array(__S(334));
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
    case 23:
      return __c23(i & 7);
    case 24:
      return __c24(i & 7);
    case 25:
      return __c25(i & 7);
    case 26:
      return __c26(i & 7);
    case 27:
      return __c27(i & 7);
    case 28:
      return __c28(i & 7);
    case 29:
      return __c29(i & 7);
    case 30:
      return __c30(i & 7);
    case 31:
      return __c31(i & 7);
    case 32:
      return __c32(i & 7);
    case 33:
      return __c33(i & 7);
    case 34:
      return __c34(i & 7);
    case 35:
      return __c35(i & 7);
    case 36:
      return __c36(i & 7);
    case 37:
      return __c37(i & 7);
    case 38:
      return __c38(i & 7);
    case 39:
      return __c39(i & 7);
    case 40:
      return __c40(i & 7);
    case 41:
      return __c41(i & 7);
  }
}
