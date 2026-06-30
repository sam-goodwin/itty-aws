// ==========================================================================
// Google Workspace Alert Center API (alertcenter v1beta1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "alertcenter",
  version: "v1beta1",
  rootUrl: "https://alertcenter.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface AlertMetadata {
  /** The current status of the alert. The supported values are the following: * NOT_STARTED * IN_PROGRESS * CLOSED */
  status?: string;
  /** Output only. The alert identifier. */
  alertId?: string;
  /** Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert metadata from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform metadata updates in order to avoid race conditions: An `etag` is returned in the response which contains alert metadata, and systems are expected to put that etag in the request to update alert metadata to ensure that their change will be applied to the same version of the alert metadata. If no `etag` is provided in the call to update alert metadata, then the existing alert metadata is overwritten blindly. */
  etag?: string;
  /** Output only. The unique identifier of the Google Workspace account of the customer. */
  customerId?: string;
  /** Output only. The time this metadata was last updated. */
  updateTime?: string;
  /** The severity value of the alert. Alert Center will set this field at alert creation time, default's to an empty string when it could not be determined. The supported values for update actions on this field are the following: * HIGH * MEDIUM * LOW */
  severity?: string;
  /** The email address of the user assigned to the alert. */
  assignee?: string;
}

export const AlertMetadata: Schema.Codec<AlertMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    alertId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    assignee: Schema.optional(Schema.String),
  }).annotate({ identifier: "AlertMetadata" });

export interface KeyServiceError {
  /** Url of the external key service. */
  keyServiceUrl?: string;
  /** Info on the key service error. */
  errorInfo?:
    | "KEY_SERVICE_ERROR_INFO_UNSPECIFIED"
    | "MALFORMED_JSON"
    | "MISSING_KEY"
    | "MISSING_SIGNATURE"
    | "MISSING_ALGORITHM_NAME"
    | "UNSUPPORTED_ALGORITHM"
    | "FETCH_REQUEST_ERROR"
    | (string & {});
  /** HTTP response status code from the key service. */
  httpResponseCode?: string;
  /** Number of similar errors encountered. */
  errorCount?: string;
}

export const KeyServiceError: Schema.Codec<KeyServiceError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyServiceUrl: Schema.optional(Schema.String),
    errorInfo: Schema.optional(Schema.String),
    httpResponseCode: Schema.optional(Schema.String),
    errorCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "KeyServiceError" });

export interface IdentityProviderError {
  /** Number of similar errors encountered. */
  errorCount?: string;
  /** Authorization base url of the identity provider. */
  authorizationBaseUrl?: string;
  /** Info on the identity provider error. */
  errorInfo?:
    | "IDENTITY_PROVIDER_ERROR_INFO_UNSPECIFIED"
    | "EMAIL_MISMATCH"
    | "UNAVAILABLE_DISCOVERY_CONTENT"
    | "INVALID_DISCOVERY_CONTENT"
    | "UNAVAILABLE_CSE_CONFIGURATION_CONTENT"
    | "INVALID_CSE_CONFIGURATION_CONTENT"
    | "INVALID_ID_TOKEN"
    | "INVALID_OIDC_SETUP"
    | "UNAVAILABLE_IDP"
    | "AUTH_CODE_EXCHANGE_ERROR"
    | "AUTHENTICATION_TOKEN_MISSING_CLAIM_EMAIL"
    | (string & {});
}

export const IdentityProviderError: Schema.Codec<IdentityProviderError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorCount: Schema.optional(Schema.String),
    authorizationBaseUrl: Schema.optional(Schema.String),
    errorInfo: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityProviderError" });

export interface ClientSideEncryptionServiceUnavailable {
  /** External key services impacted by an outage or misconfiguration. */
  keyServiceError?: ReadonlyArray<KeyServiceError>;
  /** Identity providers impacted by an outage or misconfiguration. */
  idpError?: ReadonlyArray<IdentityProviderError>;
}

export const ClientSideEncryptionServiceUnavailable: Schema.Codec<ClientSideEncryptionServiceUnavailable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyServiceError: Schema.optional(Schema.Array(KeyServiceError)),
    idpError: Schema.optional(Schema.Array(IdentityProviderError)),
  }).annotate({ identifier: "ClientSideEncryptionServiceUnavailable" });

export interface ApnsCertificateExpirationInfo {
  /** The UID of the certificate. */
  uid?: string;
  /** The expiration date of the APNS certificate. */
  expirationTime?: string;
  /** The Apple ID used to create the certificate. It may be blank if admins didn't enter it. */
  appleId?: string;
}

export const ApnsCertificateExpirationInfo: Schema.Codec<ApnsCertificateExpirationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
    appleId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApnsCertificateExpirationInfo" });

export interface SupportTicket {
  /** Support ticket ID */
  ticketId?: string;
  /** Link to support ticket */
  ticketUrl?: string;
}

export const SupportTicket: Schema.Codec<SupportTicket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ticketId: Schema.optional(Schema.String),
    ticketUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "SupportTicket" });

export interface SuspiciousActivitySecurityDetail {
  /** The device resource ID. */
  resourceId?: string;
  /** The serial number of the device. */
  serialNumber?: string;
  /** The device property which was changed. */
  deviceProperty?: string;
  /** The type of the device. */
  deviceType?: string;
  /** The new value of the device property after the change. */
  newValue?: string;
  /** The model of the device. */
  deviceModel?: string;
  /** Required. The device ID. */
  deviceId?: string;
  /** The old value of the device property before the change. */
  oldValue?: string;
  /** Required for iOS, empty for others. */
  iosVendorId?: string;
}

export const SuspiciousActivitySecurityDetail: Schema.Codec<SuspiciousActivitySecurityDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(Schema.String),
    serialNumber: Schema.optional(Schema.String),
    deviceProperty: Schema.optional(Schema.String),
    deviceType: Schema.optional(Schema.String),
    newValue: Schema.optional(Schema.String),
    deviceModel: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
    oldValue: Schema.optional(Schema.String),
    iosVendorId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SuspiciousActivitySecurityDetail" });

export interface SuspiciousActivity {
  /** The email of the user this alert was created for. */
  email?: string;
  /** Required. The list of security events. */
  events?: ReadonlyArray<SuspiciousActivitySecurityDetail>;
}

export const SuspiciousActivity: Schema.Codec<SuspiciousActivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    events: Schema.optional(Schema.Array(SuspiciousActivitySecurityDetail)),
  }).annotate({ identifier: "SuspiciousActivity" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface AlertFeedback {
  /** Output only. The alert identifier. */
  alertId?: string;
  /** Output only. The time this feedback was created. */
  createTime?: string;
  /** Required. The type of the feedback. */
  type?:
    | "ALERT_FEEDBACK_TYPE_UNSPECIFIED"
    | "NOT_USEFUL"
    | "SOMEWHAT_USEFUL"
    | "VERY_USEFUL"
    | (string & {});
  /** Output only. The unique identifier of the Google Workspace account of the customer. */
  customerId?: string;
  /** Output only. The unique identifier for the feedback. */
  feedbackId?: string;
  /** Output only. The email of the user that provided the feedback. */
  email?: string;
}

export const AlertFeedback: Schema.Codec<AlertFeedback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alertId: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    feedbackId: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "AlertFeedback" });

export interface ListAlertFeedbackResponse {
  /** The list of alert feedback. Feedback entries for each alert are ordered by creation time descending. */
  feedback?: ReadonlyArray<AlertFeedback>;
}

export const ListAlertFeedbackResponse: Schema.Codec<ListAlertFeedbackResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    feedback: Schema.optional(Schema.Array(AlertFeedback)),
  }).annotate({ identifier: "ListAlertFeedbackResponse" });

export interface GmailMessageInfo {
  /** The snippet of the message body text (only available for reported emails). */
  messageBodySnippet?: string;
  /** The email subject text (only available for reported emails). */
  subjectText?: string;
  /** The date of the event related to this email. */
  date?: string;
  /** The MD5 Hash of email's subject (only available for reported emails). */
  md5HashSubject?: string;
  /** The `SHA256` hash of email's attachment and all MIME parts. */
  attachmentsSha256Hash?: ReadonlyArray<string>;
  /** The hash of the message body text. */
  md5HashMessageBody?: string;
  /** The message ID. */
  messageId?: string;
  /** The recipient of this email. */
  recipient?: string;
  /** The sent time of the email. */
  sentTime?: string;
}

export const GmailMessageInfo: Schema.Codec<GmailMessageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageBodySnippet: Schema.optional(Schema.String),
    subjectText: Schema.optional(Schema.String),
    date: Schema.optional(Schema.String),
    md5HashSubject: Schema.optional(Schema.String),
    attachmentsSha256Hash: Schema.optional(Schema.Array(Schema.String)),
    md5HashMessageBody: Schema.optional(Schema.String),
    messageId: Schema.optional(Schema.String),
    recipient: Schema.optional(Schema.String),
    sentTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GmailMessageInfo" });

export interface DomainId {
  /** The primary domain for the customer. */
  customerPrimaryDomain?: string;
}

export const DomainId: Schema.Codec<DomainId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerPrimaryDomain: Schema.optional(Schema.String),
  }).annotate({ identifier: "DomainId" });

export interface User {
  /** Email address of the user. */
  emailAddress?: string;
  /** Display name of the user. */
  displayName?: string;
}

export const User: Schema.Codec<User> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    emailAddress: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "User" });

export interface MaliciousEntity {
  /** The header from display name. */
  displayName?: string;
  /** The sender email address. */
  fromHeader?: string;
  /** The actor who triggered a gmail phishing alert. */
  entity?: User;
}

export const MaliciousEntity: Schema.Codec<MaliciousEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    fromHeader: Schema.optional(Schema.String),
    entity: Schema.optional(User),
  }).annotate({ identifier: "MaliciousEntity" });

export interface PhishingSpike {
  /** The list of messages contained by this alert. */
  messages?: ReadonlyArray<GmailMessageInfo>;
  /** If `true`, the email originated from within the organization. */
  isInternal?: boolean;
  /** The domain ID. */
  domainId?: DomainId;
  /** The entity whose actions triggered a Gmail phishing alert. */
  maliciousEntity?: MaliciousEntity;
}

export const PhishingSpike: Schema.Codec<PhishingSpike> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(Schema.Array(GmailMessageInfo)),
    isInternal: Schema.optional(Schema.Boolean),
    domainId: Schema.optional(DomainId),
    maliciousEntity: Schema.optional(MaliciousEntity),
  }).annotate({ identifier: "PhishingSpike" });

export interface CloudPubsubTopic {
  /** The `name` field of a Cloud Pubsub [Topic] (https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic). */
  topicName?: string;
  /** Optional. The format of the payload that would be sent. If not specified the format will be JSON. */
  payloadFormat?: "PAYLOAD_FORMAT_UNSPECIFIED" | "JSON" | (string & {});
}

export const CloudPubsubTopic: Schema.Codec<CloudPubsubTopic> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topicName: Schema.optional(Schema.String),
    payloadFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudPubsubTopic" });

export interface Notification {
  /** A Google Cloud Pub/sub topic destination. */
  cloudPubsubTopic?: CloudPubsubTopic;
}

export const Notification: Schema.Codec<Notification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudPubsubTopic: Schema.optional(CloudPubsubTopic),
  }).annotate({ identifier: "Notification" });

export interface Entity {
  /** Link to a Security Investigation Tool search based on this entity, if available. */
  link?: string;
  /** Human-readable name of this entity, such as an email address, file ID, or device name. */
  name?: string;
  /** Extra values beyond name. The order of values should align with headers in EntityList. */
  values?: ReadonlyArray<string>;
}

export const Entity: Schema.Codec<Entity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    link: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Entity" });

export interface PrimaryAdminChangedEvent {
  /** Email of person who was the primary admin before the action */
  previousAdminEmail?: string;
  /** Email of person who is the primary admin after the action */
  updatedAdminEmail?: string;
  /** domain in which actioned occurred */
  domain?: string;
}

export const PrimaryAdminChangedEvent: Schema.Codec<PrimaryAdminChangedEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    previousAdminEmail: Schema.optional(Schema.String),
    updatedAdminEmail: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
  }).annotate({ identifier: "PrimaryAdminChangedEvent" });

export interface CsvRow {
  /** The data entries in a CSV file row, as a string array rather than a single comma-separated string. */
  entries?: ReadonlyArray<string>;
}

export const CsvRow: Schema.Codec<CsvRow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CsvRow" });

export interface LoginDetails {
  /** Optional. The successful login time that is associated with the warning event. This isn't present for blocked login attempts. */
  loginTime?: string;
  /** Optional. The human-readable IP address (for example, `11.22.33.44`) that is associated with the warning event. */
  ipAddress?: string;
}

export const LoginDetails: Schema.Codec<LoginDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loginTime: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "LoginDetails" });

export interface Csv {
  /** The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string. */
  dataRows?: ReadonlyArray<CsvRow>;
  /** The list of headers for data columns in a CSV file. */
  headers?: ReadonlyArray<string>;
}

export const Csv: Schema.Codec<Csv> = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    dataRows: Schema.optional(Schema.Array(CsvRow)),
    headers: Schema.optional(Schema.Array(Schema.String)),
  },
).annotate({ identifier: "Csv" });

export interface Attachment {
  /** A CSV file attachment. */
  csv?: Csv;
}

export const Attachment: Schema.Codec<Attachment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    csv: Schema.optional(Csv),
  }).annotate({ identifier: "Attachment" });

export interface GoogleOperations {
  /** A detailed, freeform incident description. */
  description?: string;
  /** Optional. Application-specific data for an incident, provided when the Google Workspace application which reported the incident cannot be completely restored to a valid state. */
  attachmentData?: Attachment;
  /** A one-line incident description. */
  title?: string;
  /** A header to display above the incident message. Typically used to attach a localized notice on the timeline for followup comms translations. */
  header?: string;
  /** The list of emails which correspond to the users directly affected by the incident. */
  affectedUserEmails?: ReadonlyArray<string>;
  /** Customer domain for email template personalization. */
  domain?: string;
}

export const GoogleOperations: Schema.Codec<GoogleOperations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    attachmentData: Schema.optional(Attachment),
    title: Schema.optional(Schema.String),
    header: Schema.optional(Schema.String),
    affectedUserEmails: Schema.optional(Schema.Array(Schema.String)),
    domain: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleOperations" });

export interface RequestInfo {
  /** Required. The application that requires the SQL setup. */
  appKey?: string;
  /** List of app developers who triggered notifications for above application. */
  appDeveloperEmail?: ReadonlyArray<string>;
  /** Required. Number of requests sent for this application to set up default SQL instance. */
  numberOfRequests?: string;
}

export const RequestInfo: Schema.Codec<RequestInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appKey: Schema.optional(Schema.String),
    appDeveloperEmail: Schema.optional(Schema.Array(Schema.String)),
    numberOfRequests: Schema.optional(Schema.String),
  }).annotate({ identifier: "RequestInfo" });

export interface AppMakerSqlSetupNotification {
  /** List of applications with requests for default SQL set up. */
  requestInfo?: ReadonlyArray<RequestInfo>;
}

export const AppMakerSqlSetupNotification: Schema.Codec<AppMakerSqlSetupNotification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestInfo: Schema.optional(Schema.Array(RequestInfo)),
  }).annotate({ identifier: "AppMakerSqlSetupNotification" });

export interface TransferError {
  /** Type of entity being transferred to. For ring group members, this should always be USER. */
  entityType?:
    | "TRANSFER_ENTITY_TYPE_UNSPECIFIED"
    | "TRANSFER_AUTO_ATTENDANT"
    | "TRANSFER_RING_GROUP"
    | "TRANSFER_USER"
    | (string & {});
  /** Reason for the error. */
  invalidReason?:
    | "TRANSFER_INVALID_REASON_UNSPECIFIED"
    | "TRANSFER_TARGET_DELETED"
    | "UNLICENSED"
    | "SUSPENDED"
    | "NO_PHONE_NUMBER"
    | (string & {});
  /** User's full name, or the ring group / auto attendant name. This may be unavailable if the entity was deleted. */
  name?: string;
  /** Ring group or auto attendant ID. Not set for users. */
  id?: string;
  /** User's email address. This may be unavailable if the entity was deleted. */
  email?: string;
}

export const TransferError: Schema.Codec<TransferError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityType: Schema.optional(Schema.String),
    invalidReason: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "TransferError" });

export interface TransferMisconfiguration {
  /** Details for each invalid transfer or forward. */
  errors?: ReadonlyArray<TransferError>;
}

export const TransferMisconfiguration: Schema.Codec<TransferMisconfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(TransferError)),
  }).annotate({ identifier: "TransferMisconfiguration" });

export interface VoicemailRecipientError {
  /** Reason for the error. */
  invalidReason?:
    | "EMAIL_INVALID_REASON_UNSPECIFIED"
    | "OUT_OF_QUOTA"
    | "RECIPIENT_DELETED"
    | (string & {});
  /** Email address of the invalid recipient. This may be unavailable if the recipient was deleted. */
  email?: string;
}

export const VoicemailRecipientError: Schema.Codec<VoicemailRecipientError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invalidReason: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "VoicemailRecipientError" });

export interface VoicemailMisconfiguration {
  /** Issue(s) with voicemail recipients. */
  errors?: ReadonlyArray<VoicemailRecipientError>;
}

export const VoicemailMisconfiguration: Schema.Codec<VoicemailMisconfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(VoicemailRecipientError)),
  }).annotate({ identifier: "VoicemailMisconfiguration" });

export interface VoiceMisconfiguration {
  /** Type of the entity whose configuration is now invalid. */
  entityType?:
    | "ENTITY_TYPE_UNSPECIFIED"
    | "AUTO_ATTENDANT"
    | "RING_GROUP"
    | (string & {});
  /** Issue(s) with transferring or forwarding to an external entity. */
  transferMisconfiguration?: TransferMisconfiguration;
  /** Link that the admin can follow to fix the issue. */
  fixUri?: string;
  /** Name of the entity whose configuration is now invalid. */
  entityName?: string;
  /** Issue(s) with sending to voicemail. */
  voicemailMisconfiguration?: VoicemailMisconfiguration;
  /** Issue(s) with members of a ring group. */
  membersMisconfiguration?: TransferMisconfiguration;
}

export const VoiceMisconfiguration: Schema.Codec<VoiceMisconfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityType: Schema.optional(Schema.String),
    transferMisconfiguration: Schema.optional(TransferMisconfiguration),
    fixUri: Schema.optional(Schema.String),
    entityName: Schema.optional(Schema.String),
    voicemailMisconfiguration: Schema.optional(VoicemailMisconfiguration),
    membersMisconfiguration: Schema.optional(TransferMisconfiguration),
  }).annotate({ identifier: "VoiceMisconfiguration" });

export interface ResourceInfo {
  /** RFC2822 message ID. */
  messageId?: string;
  /** Chat message ID. */
  chatMessageId?: string;
  /** Chat attachment ID. */
  chatAttachmentId?: string;
  /** Id to identify a device. For example, for Android devices, this is the "Android Device Id" and for Chrome OS devices, it's the "Device Virtual Id". */
  deviceId?: string;
  /** Title of the resource, for example email subject, or document title. */
  resourceTitle?: string;
  /** Drive file ID. */
  documentId?: string;
}

export const ResourceInfo: Schema.Codec<ResourceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageId: Schema.optional(Schema.String),
    chatMessageId: Schema.optional(Schema.String),
    chatAttachmentId: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
    resourceTitle: Schema.optional(Schema.String),
    documentId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceInfo" });

export interface PredefinedDetectorInfo {
  /** Name that uniquely identifies the detector. */
  detectorName?: string;
}

export const PredefinedDetectorInfo: Schema.Codec<PredefinedDetectorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectorName: Schema.optional(Schema.String),
  }).annotate({ identifier: "PredefinedDetectorInfo" });

export interface ActionInfo {
  /** Google Cloud Storage location of the content that violated the rule. This field has format: "/" */
  evidenceLockerFilePath?: string;
}

export const ActionInfo: Schema.Codec<ActionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evidenceLockerFilePath: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActionInfo" });

export interface Settings {
  /** The list of notifications. */
  notifications?: ReadonlyArray<Notification>;
}

export const Settings: Schema.Codec<Settings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notifications: Schema.optional(Schema.Array(Notification)),
  }).annotate({ identifier: "Settings" });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface BatchUndeleteAlertsResponse {
  /** The successful list of alert IDs. */
  successAlertIds?: ReadonlyArray<string>;
  /** The status details for each failed `alert_id`. */
  failedAlertStatus?: Record<string, Status>;
}

export const BatchUndeleteAlertsResponse: Schema.Codec<BatchUndeleteAlertsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    successAlertIds: Schema.optional(Schema.Array(Schema.String)),
    failedAlertStatus: Schema.optional(Schema.Record(Schema.String, Status)),
  }).annotate({ identifier: "BatchUndeleteAlertsResponse" });

export interface RuleInfo {
  /** Resource name that uniquely identifies the rule. */
  resourceName?: string;
  /** User provided name of the rule. */
  displayName?: string;
}

export const RuleInfo: Schema.Codec<RuleInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "RuleInfo" });

export interface AccountWarning {
  /** Optional. Details of the login action associated with the warning event. This is only available for: * Suspicious login * Suspicious login (less secure app) * Suspicious programmatic login * User suspended (suspicious activity) */
  loginDetails?: LoginDetails;
  /** Required. The email of the user that this event belongs to. */
  email?: string;
}

export const AccountWarning: Schema.Codec<AccountWarning> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loginDetails: Schema.optional(LoginDetails),
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountWarning" });

export interface MandatoryServiceAnnouncement {
  /** One line summary of the announcement */
  title?: string;
  /** Detailed, freeform text describing the announcement */
  description?: string;
}

export const MandatoryServiceAnnouncement: Schema.Codec<MandatoryServiceAnnouncement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "MandatoryServiceAnnouncement" });

export interface SuperAdminPasswordResetEvent {
  /** email of person whose password was reset */
  userEmail?: string;
}

export const SuperAdminPasswordResetEvent: Schema.Codec<SuperAdminPasswordResetEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "SuperAdminPasswordResetEvent" });

export interface UndeleteAlertRequest {
  /** Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
}

export const UndeleteAlertRequest: Schema.Codec<UndeleteAlertRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "UndeleteAlertRequest" });

export interface DomainWideTakeoutInitiated {
  /** The takeout request ID. */
  takeoutRequestId?: string;
  /** The email of the admin who initiated the takeout. */
  email?: string;
}

export const DomainWideTakeoutInitiated: Schema.Codec<DomainWideTakeoutInitiated> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    takeoutRequestId: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "DomainWideTakeoutInitiated" });

export interface UserDefinedDetectorInfo {
  /** Resource name that uniquely identifies the detector. */
  resourceName?: string;
  /** Display name of the detector. */
  displayName?: string;
}

export const UserDefinedDetectorInfo: Schema.Codec<UserDefinedDetectorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserDefinedDetectorInfo" });

export interface AccountSuspensionDetails {
  /** The reason why this account is receiving an account suspension warning. */
  abuseReason?:
    | "ACCOUNT_SUSPENSION_ABUSE_REASON_UNSPECIFIED"
    | "TOS_VIOLATION"
    | "SPAM"
    | "PHISHING"
    | "TRAFFIC_PUMPING"
    | "FRAUD"
    | "NUMBER_HARVESTING"
    | "PAYMENTS_FRAUD"
    | "UNWANTED_CONTENT"
    | "UNQUALIFIED_EDU"
    | (string & {});
  /** The name of the product being abused. This is restricted to only the following values: "Gmail" "Google Workspace" "Payments" "Voice" "YouTube" "Other" */
  productName?: string;
}

export const AccountSuspensionDetails: Schema.Codec<AccountSuspensionDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    abuseReason: Schema.optional(Schema.String),
    productName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountSuspensionDetails" });

export interface AccountSuspensionWarning {
  /** The amount of time remaining to appeal an imminent suspension. After this window has elapsed, the account will be suspended. Only populated if the account suspension is in WARNING state. */
  appealWindow?: string;
  /** Account suspension warning state. */
  state?:
    | "ACCOUNT_SUSPENSION_WARNING_STATE_UNSPECIFIED"
    | "WARNING"
    | "SUSPENDED"
    | "APPEAL_APPROVED"
    | "APPEAL_SUBMITTED"
    | (string & {});
  /** Details about why an account is being suspended. */
  suspensionDetails?: ReadonlyArray<AccountSuspensionDetails>;
}

export const AccountSuspensionWarning: Schema.Codec<AccountSuspensionWarning> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appealWindow: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    suspensionDetails: Schema.optional(Schema.Array(AccountSuspensionDetails)),
  }).annotate({ identifier: "AccountSuspensionWarning" });

export interface MatchInfo {
  /** For matched detector defined by administrators. */
  userDefinedDetector?: UserDefinedDetectorInfo;
  /** For matched detector predefined by Google. */
  predefinedDetector?: PredefinedDetectorInfo;
}

export const MatchInfo: Schema.Codec<MatchInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userDefinedDetector: Schema.optional(UserDefinedDetectorInfo),
    predefinedDetector: Schema.optional(PredefinedDetectorInfo),
  }).annotate({ identifier: "MatchInfo" });

export interface RuleViolationInfo {
  /** Metadata related to the triggered actions. */
  triggeredActionInfo?: ReadonlyArray<ActionInfo>;
  /** Email of the user who caused the violation. Value could be empty if not applicable, for example, a violation found by drive continuous scan. */
  triggeringUserEmail?: string;
  /** Optional. Agent type that triggered the rule. */
  agentType?: "AGENT_TYPE_UNSPECIFIED" | "STUDIO" | (string & {});
  /** Resource recipients. For Drive, they are grantees that the Drive file was shared with at the time of rule triggering. Valid values include user emails, group emails, domains, or 'anyone' if the file was publicly accessible. If the file was private the recipients list will be empty. For Gmail, they are emails of the users or groups that the Gmail message was sent to. */
  recipients?: ReadonlyArray<string>;
  /** Trigger of the rule. */
  trigger?:
    | "TRIGGER_UNSPECIFIED"
    | "DRIVE_SHARE"
    | "MAIL_BEING_SENT"
    | "CHROME_FILE_DOWNLOAD"
    | "CHROME_FILE_UPLOAD"
    | "CHROME_WEB_CONTENT_UPLOAD"
    | "CHAT_MESSAGE_SENT"
    | "CHAT_ATTACHMENT_UPLOADED"
    | "CHROME_PAGE_PRINT"
    | "CHROME_URL_VISITED"
    | "CHROMEOS_FILE_TRANSFER"
    | "GEMINI_ACCESS"
    | "AGENT_EXECUTION"
    | (string & {});
  /** Source of the data. */
  dataSource?:
    | "DATA_SOURCE_UNSPECIFIED"
    | "DRIVE"
    | "GMAIL"
    | "CHROME"
    | "CHAT"
    | (string & {});
  /** Details of the resource which violated the rule. */
  resourceInfo?: ResourceInfo;
  /** Actions suppressed due to other actions with higher priority. */
  suppressedActionTypes?: ReadonlyArray<
    | "ACTION_TYPE_UNSPECIFIED"
    | "DRIVE_BLOCK_EXTERNAL_SHARING"
    | "DRIVE_WARN_ON_EXTERNAL_SHARING"
    | "DRIVE_RESTRICT_DOWNLOAD_PRINT_COPY"
    | "DRIVE_RESTRICT_DOWNLOAD_PRINT_COPY_FOR_ALL"
    | "DRIVE_APPLY_DRIVE_LABELS"
    | "GMAIL_QUARANTINE_MESSAGE"
    | "GMAIL_BLOCK_MESSAGE"
    | "GMAIL_WARN_USERS"
    | "GMAIL_APPLY_CLASSIFICATION_LABELS"
    | "CHROME_BLOCK_FILE_DOWNLOAD"
    | "CHROME_WARN_FILE_DOWNLOAD"
    | "CHROME_BLOCK_FILE_UPLOAD"
    | "CHROME_WARN_FILE_UPLOAD"
    | "CHROME_BLOCK_WEB_CONTENT_UPLOAD"
    | "CHROME_WARN_WEB_CONTENT_UPLOAD"
    | "CHROME_BLOCK_PAGE_PRINT"
    | "CHROME_WARN_PAGE_PRINT"
    | "CHROME_BLOCK_FILE_TRANSFER"
    | "CHROME_WARN_FILE_TRANSFER"
    | "CHROME_BLOCK_URL_VISITED"
    | "CHROME_WARN_URL_VISITED"
    | "CHROME_BLOCK_SCREENSHOT"
    | "CHROME_STORE_CONTENT"
    | "CHROME_WATERMARK"
    | "CHROME_FORCE_SAVE_TO_CLOUD"
    | "DELETE_WEBPROTECT_EVIDENCE"
    | "CHAT_BLOCK_CONTENT"
    | "CHAT_WARN_USER"
    | "ALERT"
    | "RULE_ACTIVATE"
    | "RULE_DEACTIVATE"
    | (string & {})
  >;
  /** Actions applied as a consequence of the rule being triggered. */
  triggeredActionTypes?: ReadonlyArray<
    | "ACTION_TYPE_UNSPECIFIED"
    | "DRIVE_BLOCK_EXTERNAL_SHARING"
    | "DRIVE_WARN_ON_EXTERNAL_SHARING"
    | "DRIVE_RESTRICT_DOWNLOAD_PRINT_COPY"
    | "DRIVE_RESTRICT_DOWNLOAD_PRINT_COPY_FOR_ALL"
    | "DRIVE_APPLY_DRIVE_LABELS"
    | "GMAIL_QUARANTINE_MESSAGE"
    | "GMAIL_BLOCK_MESSAGE"
    | "GMAIL_WARN_USERS"
    | "GMAIL_APPLY_CLASSIFICATION_LABELS"
    | "CHROME_BLOCK_FILE_DOWNLOAD"
    | "CHROME_WARN_FILE_DOWNLOAD"
    | "CHROME_BLOCK_FILE_UPLOAD"
    | "CHROME_WARN_FILE_UPLOAD"
    | "CHROME_BLOCK_WEB_CONTENT_UPLOAD"
    | "CHROME_WARN_WEB_CONTENT_UPLOAD"
    | "CHROME_BLOCK_PAGE_PRINT"
    | "CHROME_WARN_PAGE_PRINT"
    | "CHROME_BLOCK_FILE_TRANSFER"
    | "CHROME_WARN_FILE_TRANSFER"
    | "CHROME_BLOCK_URL_VISITED"
    | "CHROME_WARN_URL_VISITED"
    | "CHROME_BLOCK_SCREENSHOT"
    | "CHROME_STORE_CONTENT"
    | "CHROME_WATERMARK"
    | "CHROME_FORCE_SAVE_TO_CLOUD"
    | "DELETE_WEBPROTECT_EVIDENCE"
    | "CHAT_BLOCK_CONTENT"
    | "CHAT_WARN_USER"
    | "ALERT"
    | "RULE_ACTIVATE"
    | "RULE_DEACTIVATE"
    | (string & {})
  >;
  /** Event associated with this alert after applying the rule. */
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "ACCESS_BLOCKED"
    | "SHARING_BLOCKED"
    | (string & {});
  /** Details of the violated rule. */
  ruleInfo?: RuleInfo;
  /** List of matches that were found in the resource content. */
  matchInfo?: ReadonlyArray<MatchInfo>;
}

export const RuleViolationInfo: Schema.Codec<RuleViolationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggeredActionInfo: Schema.optional(Schema.Array(ActionInfo)),
    triggeringUserEmail: Schema.optional(Schema.String),
    agentType: Schema.optional(Schema.String),
    recipients: Schema.optional(Schema.Array(Schema.String)),
    trigger: Schema.optional(Schema.String),
    dataSource: Schema.optional(Schema.String),
    resourceInfo: Schema.optional(ResourceInfo),
    suppressedActionTypes: Schema.optional(Schema.Array(Schema.String)),
    triggeredActionTypes: Schema.optional(Schema.Array(Schema.String)),
    eventType: Schema.optional(Schema.String),
    ruleInfo: Schema.optional(RuleInfo),
    matchInfo: Schema.optional(Schema.Array(MatchInfo)),
  }).annotate({ identifier: "RuleViolationInfo" });

export interface DlpRuleViolation {
  /** Details about the violated DLP rule. Admins can use the predefined detectors provided by Google Cloud DLP https://cloud.google.com/dlp/ when setting up a DLP rule. Matched Cloud DLP detectors in this violation if any will be captured in the MatchInfo.predefined_detector. */
  ruleViolationInfo?: RuleViolationInfo;
}

export const DlpRuleViolation: Schema.Codec<DlpRuleViolation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ruleViolationInfo: Schema.optional(RuleViolationInfo),
  }).annotate({ identifier: "DlpRuleViolation" });

export interface BatchUndeleteAlertsRequest {
  /** Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
  /** Required. The list of alert IDs to undelete. */
  alertId?: ReadonlyArray<string>;
}

export const BatchUndeleteAlertsRequest: Schema.Codec<BatchUndeleteAlertsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.optional(Schema.String),
    alertId: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchUndeleteAlertsRequest" });

export interface MailPhishing {
  /** The domain ID. */
  domainId?: DomainId;
  /** If `true`, the email originated from within the organization. */
  isInternal?: boolean;
  /** The entity whose actions triggered a Gmail phishing alert. */
  maliciousEntity?: MaliciousEntity;
  /** System actions on the messages. */
  systemActionType?:
    | "SYSTEM_ACTION_TYPE_UNSPECIFIED"
    | "NO_OPERATION"
    | "REMOVED_FROM_INBOX"
    | (string & {});
  /** The list of messages contained by this alert. */
  messages?: ReadonlyArray<GmailMessageInfo>;
}

export const MailPhishing: Schema.Codec<MailPhishing> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domainId: Schema.optional(DomainId),
    isInternal: Schema.optional(Schema.Boolean),
    maliciousEntity: Schema.optional(MaliciousEntity),
    systemActionType: Schema.optional(Schema.String),
    messages: Schema.optional(Schema.Array(GmailMessageInfo)),
  }).annotate({ identifier: "MailPhishing" });

export interface EntityList {
  /** List of entities affected by the alert. */
  entities?: ReadonlyArray<Entity>;
  /** Headers of the values in entities. If no value is defined in Entity, this field should be empty. */
  headers?: ReadonlyArray<string>;
  /** Name of the key detail used to display this entity list. */
  name?: string;
}

export const EntityList: Schema.Codec<EntityList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entities: Schema.optional(Schema.Array(Entity)),
    headers: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "EntityList" });

export interface AbuseDetected {
  /** Unique identifier of each sub alert that is onboarded. */
  subAlertId?: string;
  /** Product that the abuse is originating from. */
  product?: string;
  /** List of abusive users/entities to be displayed in a table in the alert. */
  additionalDetails?: EntityList;
  /** Variation of AbuseDetected alerts. The variation_type determines the texts displayed the alert details. This differs from sub_alert_id because each sub alert can have multiple variation_types, representing different stages of the alert. */
  variationType?:
    | "ABUSE_DETECTED_VARIATION_TYPE_UNSPECIFIED"
    | "DRIVE_ABUSIVE_CONTENT"
    | "LIMITED_DISABLE"
    | (string & {});
}

export const AbuseDetected: Schema.Codec<AbuseDetected> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subAlertId: Schema.optional(Schema.String),
    product: Schema.optional(Schema.String),
    additionalDetails: Schema.optional(EntityList),
    variationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AbuseDetected" });

export interface Alert {
  /** Output only. The metadata associated with this alert. */
  metadata?: AlertMetadata;
  /** Output only. The time this alert was created. */
  createTime?: string;
  /** Required. The type of the alert. This is output only after alert is created. For a list of available alert types see [Google Workspace Alert types](https://developers.google.com/workspace/admin/alertcenter/reference/alert-types). */
  type?: string;
  /** Optional. The data associated with this alert, for example google.apps.alertcenter.type.DeviceCompromised. */
  data?: Record<string, unknown>;
  /** Optional. The time the event that caused this alert ceased being active. If provided, the end time must not be earlier than the start time. If not provided, it indicates an ongoing alert. */
  endTime?: string;
  /** Output only. An optional [Security Investigation Tool](https://support.google.com/a/answer/7575955) query for this alert. */
  securityInvestigationToolLink?: string;
  /** Output only. The time this alert was last updated. */
  updateTime?: string;
  /** Required. A unique identifier for the system that reported the alert. This is output only after alert is created. Supported sources are any of the following: * Google Operations * Mobile device management * Gmail phishing * Data Loss Prevention * Domain wide takeout * State sponsored attack * Google identity * Apps outage */
  source?: string;
  /** Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform alert updates in order to avoid race conditions: An `etag` is returned in the response which contains alerts, and systems are expected to put that etag in the request to update alert to ensure that their change will be applied to the same version of the alert. If no `etag` is provided in the call to update alert, then the existing alert is overwritten blindly. */
  etag?: string;
  /** Output only. The unique identifier of the Google Workspace account of the customer. */
  customerId?: string;
  /** Output only. `True` if this alert is marked for deletion. */
  deleted?: boolean;
  /** Required. The time the event that caused this alert was started or detected. */
  startTime?: string;
  /** Output only. The unique identifier for the alert. */
  alertId?: string;
}

export const Alert: Schema.Codec<Alert> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(AlertMetadata),
    createTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    endTime: Schema.optional(Schema.String),
    securityInvestigationToolLink: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    startTime: Schema.optional(Schema.String),
    alertId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Alert" });

export interface ReportingRule {
  /** Any other associated alert details, for example, AlertConfiguration. */
  alertDetails?: string;
  /** Alert Rule query Sample Query query { condition { filter { expected_application_id: 777491262838 expected_event_name: "indexable_content_change" filter_op: IN } } conjunction_operator: OR } */
  query?: string;
  /** Rule name */
  name?: string;
}

export const ReportingRule: Schema.Codec<ReportingRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alertDetails: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportingRule" });

export interface MergeInfo {
  /** The new tracking ID from the parent incident. */
  newIncidentTrackingId?: string;
  /** Optional. New alert ID. Reference the [google.apps.alertcenter.Alert] with this ID for the current state. */
  newAlertId?: string;
}

export const MergeInfo: Schema.Codec<MergeInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newIncidentTrackingId: Schema.optional(Schema.String),
    newAlertId: Schema.optional(Schema.String),
  }).annotate({ identifier: "MergeInfo" });

export interface AppsOutage {
  /** Link to the outage event in Google Workspace Status Dashboard */
  dashboardUri?: string;
  /** Timestamp by which the next update is expected to arrive. */
  nextUpdateTime?: string;
  /** Current outage status. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "NEW"
    | "ONGOING"
    | "RESOLVED"
    | "FALSE_POSITIVE"
    | "PARTIALLY_RESOLVED"
    | "MERGED"
    | "DOWNGRADED"
    | (string & {});
  /** Incident tracking ID. */
  incidentTrackingId?: string;
  /** List of products impacted by the outage. */
  products?: ReadonlyArray<string>;
  /** Timestamp when the outage is expected to be resolved, or has confirmed resolution. Provided only when known. */
  resolutionTime?: string;
  /** Indicates new alert details under which the outage is communicated. Only populated when Status is MERGED. */
  mergeInfo?: MergeInfo;
}

export const AppsOutage: Schema.Codec<AppsOutage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dashboardUri: Schema.optional(Schema.String),
    nextUpdateTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    incidentTrackingId: Schema.optional(Schema.String),
    products: Schema.optional(Schema.Array(Schema.String)),
    resolutionTime: Schema.optional(Schema.String),
    mergeInfo: Schema.optional(MergeInfo),
  }).annotate({ identifier: "AppsOutage" });

export interface AppSettingsChanged {
  /** Any other associated alert details, for example, AlertConfiguration. */
  alertDetails?: string;
  /** Rule name */
  name?: string;
}

export const AppSettingsChanged: Schema.Codec<AppSettingsChanged> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alertDetails: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppSettingsChanged" });

export interface ListAlertsResponse {
  /** The list of alerts. */
  alerts?: ReadonlyArray<Alert>;
  /** The token for the next page. If not empty, indicates that there may be more alerts that match the listing request; this value can be used in a subsequent ListAlertsRequest to get alerts continuing from last result of the current list call. */
  nextPageToken?: string;
}

export const ListAlertsResponse: Schema.Codec<ListAlertsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alerts: Schema.optional(Schema.Array(Alert)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAlertsResponse" });

export interface UserChanges {
  /** Rule name */
  name?: string;
}

export const UserChanges: Schema.Codec<UserChanges> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserChanges" });

export interface DriveSyncStateChanged {
  /** Email of the user affected. */
  email?: string;
  /** Time at which sync was paused. */
  syncPauseStartTime?: string;
  /** The reason for the sync state change. */
  syncStateChangeReason?:
    | "SYNC_STATE_CHANGE_REASON_UNSPECIFIED"
    | "UNUSUAL_ACTIVITY"
    | "USER_FEEDBACK_TRUE_POSITIVE"
    | "USER_FEEDBACK_FALSE_POSITIVE"
    | (string & {});
  /** The current sync state. */
  syncState?: "SYNC_STATE_UNSPECIFIED" | "PAUSED" | "RESUMED" | (string & {});
}

export const DriveSyncStateChanged: Schema.Codec<DriveSyncStateChanged> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    syncPauseStartTime: Schema.optional(Schema.String),
    syncStateChangeReason: Schema.optional(Schema.String),
    syncState: Schema.optional(Schema.String),
  }).annotate({ identifier: "DriveSyncStateChanged" });

export interface BadWhitelist {
  /** The list of messages contained by this alert. */
  messages?: ReadonlyArray<GmailMessageInfo>;
  /** The domain ID. */
  domainId?: DomainId;
  /** The entity whose actions triggered a Gmail phishing alert. */
  maliciousEntity?: MaliciousEntity;
  /** The source IP address of the malicious email, for example, `127.0.0.1`. */
  sourceIp?: string;
}

export const BadWhitelist: Schema.Codec<BadWhitelist> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(Schema.Array(GmailMessageInfo)),
    domainId: Schema.optional(DomainId),
    maliciousEntity: Schema.optional(MaliciousEntity),
    sourceIp: Schema.optional(Schema.String),
  }).annotate({ identifier: "BadWhitelist" });

export interface SSOProfileCreatedEvent {
  /** sso profile name which got created */
  inboundSsoProfileName?: string;
}

export const SSOProfileCreatedEvent: Schema.Codec<SSOProfileCreatedEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inboundSsoProfileName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SSOProfileCreatedEvent" });

export interface DeviceCompromisedSecurityDetail {
  /** Required for iOS, empty for others. */
  iosVendorId?: string;
  /** The serial number of the device. */
  serialNumber?: string;
  /** The type of the device. */
  deviceType?: string;
  /** The device compromised state. Possible values are "`Compromised`" or "`Not Compromised`". */
  deviceCompromisedState?: string;
  /** Required. The device ID. */
  deviceId?: string;
  /** The model of the device. */
  deviceModel?: string;
  /** The device resource ID. */
  resourceId?: string;
}

export const DeviceCompromisedSecurityDetail: Schema.Codec<DeviceCompromisedSecurityDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iosVendorId: Schema.optional(Schema.String),
    serialNumber: Schema.optional(Schema.String),
    deviceType: Schema.optional(Schema.String),
    deviceCompromisedState: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
    deviceModel: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceCompromisedSecurityDetail" });

export interface SSOProfileUpdatedEvent {
  /** sso profile name which got updated */
  inboundSsoProfileName?: string;
  /** changes made to sso profile */
  inboundSsoProfileChanges?: string;
}

export const SSOProfileUpdatedEvent: Schema.Codec<SSOProfileUpdatedEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inboundSsoProfileName: Schema.optional(Schema.String),
    inboundSsoProfileChanges: Schema.optional(Schema.String),
  }).annotate({ identifier: "SSOProfileUpdatedEvent" });

export interface ActivityRule {
  /** The timestamp of the last update to the rule. */
  updateTime?: string;
  /** The trigger sources for this rule. * GMAIL_EVENTS * DEVICE_EVENTS * USER_EVENTS */
  triggerSource?: string;
  /** Description of the rule. */
  description?: string;
  /** Alert ID superseding this alert. It is used to indicate that superseding alert is essentially extension of this alert and we found the relationship after creating both alerts. */
  supersedingAlert?: string;
  /** Rule name. */
  name?: string;
  /** Alert threshold is for example “COUNT > 5”. */
  threshold?: string;
  /** Rule create timestamp. */
  createTime?: string;
  /** List of alert IDs superseded by this alert. It is used to indicate that this alert is essentially extension of superseded alerts and we found the relationship after creating these alerts. */
  supersededAlerts?: ReadonlyArray<string>;
  /** Alert display name. */
  displayName?: string;
  /** Rule window size. Possible values are 1 hour or 24 hours. */
  windowSize?: string;
  /** List of action names associated with the rule threshold. */
  actionNames?: ReadonlyArray<string>;
  /** Query that is used to get the data from the associated source. */
  query?: string;
}

export const ActivityRule: Schema.Codec<ActivityRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    triggerSource: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    supersedingAlert: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    threshold: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    supersededAlerts: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    windowSize: Schema.optional(Schema.String),
    actionNames: Schema.optional(Schema.Array(Schema.String)),
    query: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActivityRule" });

export interface DeviceCompromised {
  /** The email of the user this alert was created for. */
  email?: string;
  /** Required. The list of security events. */
  events?: ReadonlyArray<DeviceCompromisedSecurityDetail>;
}

export const DeviceCompromised: Schema.Codec<DeviceCompromised> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    events: Schema.optional(Schema.Array(DeviceCompromisedSecurityDetail)),
  }).annotate({ identifier: "DeviceCompromised" });

export interface DeviceManagementRule {
  /** Required for iOS, empty for others. */
  iosVendorId?: string;
  /** The model of the device. */
  deviceModel?: string;
  /** The email of the user this alert was created for. */
  email?: string;
  /** Required. The device ID. */
  deviceId?: string;
  /** Obfuscated ID of the owner of the device */
  ownerId?: string;
  /** ID of the rule that triggered the alert */
  id?: string;
  /** The type of the device. */
  deviceType?: string;
  /** The serial number of the device. */
  serialNumber?: string;
  /** Action taken as result of the rule */
  ruleAction?: string;
  /** The device resource ID. */
  resourceId?: string;
}

export const DeviceManagementRule: Schema.Codec<DeviceManagementRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iosVendorId: Schema.optional(Schema.String),
    deviceModel: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
    ownerId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    deviceType: Schema.optional(Schema.String),
    serialNumber: Schema.optional(Schema.String),
    ruleAction: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceManagementRule" });

export interface BatchDeleteAlertsRequest {
  /** Required. The list of alert IDs to delete. */
  alertId?: ReadonlyArray<string>;
  /** Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
}

export const BatchDeleteAlertsRequest: Schema.Codec<BatchDeleteAlertsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alertId: Schema.optional(Schema.Array(Schema.String)),
    customerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "BatchDeleteAlertsRequest" });

export interface AccessApproval {
  /** ID of the Access Approvals request. This is a helpful field when requesting support from Google. */
  requestId?: string;
  /** Scope of access, also known as a resource. This is further narrowed down by the product field. */
  scope?: string;
  /** Products within scope of the Access Approvals request. */
  products?: ReadonlyArray<string>;
  /** Support tickets related to this Access Approvals request. Populated if there is an associated case number. */
  tickets?: ReadonlyArray<SupportTicket>;
  /** Justification for data access based on justification enums. */
  justificationReason?: ReadonlyArray<
    | "JUSTIFICATION_UNSPECIFIED"
    | "CUSTOMER_INITIATED_SUPPORT"
    | "GOOGLE_INITIATED_REVIEW"
    | "GOOGLE_INITIATED_SERVICE"
    | "THIRD_PARTY_DATA_REQUEST"
    | "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT"
    | (string & {})
  >;
  /** Office location of Google staff requesting access such as "US". */
  officeLocation?: string;
}

export const AccessApproval: Schema.Codec<AccessApproval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    products: Schema.optional(Schema.Array(Schema.String)),
    tickets: Schema.optional(Schema.Array(SupportTicket)),
    justificationReason: Schema.optional(Schema.Array(Schema.String)),
    officeLocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessApproval" });

export interface SSOProfileDeletedEvent {
  /** sso profile name which got deleted */
  inboundSsoProfileName?: string;
}

export const SSOProfileDeletedEvent: Schema.Codec<SSOProfileDeletedEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inboundSsoProfileName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SSOProfileDeletedEvent" });

export interface SensitiveAdminAction {
  /** Event occurred when SSO Profile deleted in customer's account */
  ssoProfileDeletedEvent?: SSOProfileDeletedEvent;
  /** Event occurred when SSO Profile updated in customer's account */
  ssoProfileUpdatedEvent?: SSOProfileUpdatedEvent;
  /** Event occurred when password was reset for super admin in customer's account */
  superAdminPasswordResetEvent?: SuperAdminPasswordResetEvent;
  /** The time at which event occurred */
  eventTime?: string;
  /** Event occurred when primary admin changed in customer's account */
  primaryAdminChangedEvent?: PrimaryAdminChangedEvent;
  /** Event occurred when SSO Profile created in customer's account */
  ssoProfileCreatedEvent?: SSOProfileCreatedEvent;
  /** Email of person who performed the action */
  actorEmail?: string;
}

export const SensitiveAdminAction: Schema.Codec<SensitiveAdminAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ssoProfileDeletedEvent: Schema.optional(SSOProfileDeletedEvent),
    ssoProfileUpdatedEvent: Schema.optional(SSOProfileUpdatedEvent),
    superAdminPasswordResetEvent: Schema.optional(SuperAdminPasswordResetEvent),
    eventTime: Schema.optional(Schema.String),
    primaryAdminChangedEvent: Schema.optional(PrimaryAdminChangedEvent),
    ssoProfileCreatedEvent: Schema.optional(SSOProfileCreatedEvent),
    actorEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "SensitiveAdminAction" });

export interface StateSponsoredAttack {
  /** The email of the user this incident was created for. */
  email?: string;
}

export const StateSponsoredAttack: Schema.Codec<StateSponsoredAttack> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "StateSponsoredAttack" });

export interface VaultAcceleratedDeletion {
  /** The action can be one of create and cancel */
  actionType?:
    | "VAULT_ACCELERATED_DELETION_ACTION_TYPE_UNSPECIFIED"
    | "VAULT_ACCELERATED_DELETION_ACTION_TYPE_CREATE"
    | "VAULT_ACCELERATED_DELETION_ACTION_TYPE_CANCEL"
    | (string & {});
  /** Matter ID of the accelerated deletion request intended to be used to construct the Vault UI link to the AD request */
  matterId?: string;
  /** Currentlty only Gmail is supported as app type */
  appType?:
    | "VAULT_ACCELERATED_DELETION_APP_TYPE_UNSPECIFIED"
    | "VAULT_ACCELERATED_DELETION_APP_TYPE_GMAIL"
    | (string & {});
  /** Accelerated deletion request ID intended to be used to construct the Vault UI link to the AD request */
  deletionRequestId?: string;
  /** The UTC timestamp of when the AD request was created */
  createTime?: string;
}

export const VaultAcceleratedDeletion: Schema.Codec<VaultAcceleratedDeletion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actionType: Schema.optional(Schema.String),
    matterId: Schema.optional(Schema.String),
    appType: Schema.optional(Schema.String),
    deletionRequestId: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "VaultAcceleratedDeletion" });

export interface BatchDeleteAlertsResponse {
  /** The successful list of alert IDs. */
  successAlertIds?: ReadonlyArray<string>;
  /** The status details for each failed `alert_id`. */
  failedAlertStatus?: Record<string, Status>;
}

export const BatchDeleteAlertsResponse: Schema.Codec<BatchDeleteAlertsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    successAlertIds: Schema.optional(Schema.Array(Schema.String)),
    failedAlertStatus: Schema.optional(Schema.Record(Schema.String, Status)),
  }).annotate({ identifier: "BatchDeleteAlertsResponse" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface BatchDeleteAlertsRequest_Op {
  /** Request body */
  body?: BatchDeleteAlertsRequest;
}

export const BatchDeleteAlertsRequest_Op =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(BatchDeleteAlertsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/alerts:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchDeleteAlertsRequest_Op>;

export type BatchDeleteAlertsResponse_Op = BatchDeleteAlertsResponse;
export const BatchDeleteAlertsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ BatchDeleteAlertsResponse;

export type BatchDeleteAlertsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Performs batch delete operation on alerts. */
export const batchDeleteAlerts: API.OperationMethod<
  BatchDeleteAlertsRequest_Op,
  BatchDeleteAlertsResponse_Op,
  BatchDeleteAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteAlertsRequest_Op,
  output: BatchDeleteAlertsResponse_Op,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAlertsRequest {
  /** Optional. A query string for filtering alert results. For more details, see [Query filters](https://developers.google.com/workspace/admin/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/workspace/admin/alertcenter/reference/filter-fields#alerts.list). */
  filter?: string;
  /** Optional. The requested page size. Server may return fewer items than requested. If unspecified, server picks an appropriate default. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. If empty, a new iteration is started. To continue an iteration, pass in the value from the previous ListAlertsResponse's next_page_token field. */
  pageToken?: string;
  /** Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
  /** Optional. The sort order of the list results. If not specified results may be returned in arbitrary order. You can sort the results in descending order based on the creation timestamp using `order_by="create_time desc"`. Currently, supported sorting are `create_time asc`, `create_time desc`, `update_time desc` */
  orderBy?: string;
}

export const ListAlertsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
  orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta1/alerts" }),
  svc,
) as unknown as Schema.Codec<ListAlertsRequest>;

export type ListAlertsResponse_Op = ListAlertsResponse;
export const ListAlertsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListAlertsResponse;

export type ListAlertsError = DefaultErrors | NotFound | Forbidden;

/** Lists the alerts. */
export const listAlerts: API.PaginatedOperationMethod<
  ListAlertsRequest,
  ListAlertsResponse_Op,
  ListAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAlertsRequest,
  output: ListAlertsResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetMetadataAlertsRequest {
  /** Optional. The unique identifier of the Google Workspace account of the customer the alert metadata is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
  /** Required. The identifier of the alert this metadata belongs to. */
  alertId: string;
}

export const GetMetadataAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
    alertId: Schema.String.pipe(T.HttpPath("alertId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/alerts/{alertId}/metadata" }),
    svc,
  ) as unknown as Schema.Codec<GetMetadataAlertsRequest>;

export type GetMetadataAlertsResponse = AlertMetadata;
export const GetMetadataAlertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AlertMetadata;

export type GetMetadataAlertsError = DefaultErrors | NotFound | Forbidden;

/** Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error. */
export const getMetadataAlerts: API.OperationMethod<
  GetMetadataAlertsRequest,
  GetMetadataAlertsResponse,
  GetMetadataAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMetadataAlertsRequest,
  output: GetMetadataAlertsResponse,
  errors: [NotFound, Forbidden],
}));

export interface BatchUndeleteAlertsRequest_Op {
  /** Request body */
  body?: BatchUndeleteAlertsRequest;
}

export const BatchUndeleteAlertsRequest_Op =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(BatchUndeleteAlertsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/alerts:batchUndelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchUndeleteAlertsRequest_Op>;

export type BatchUndeleteAlertsResponse_Op = BatchUndeleteAlertsResponse;
export const BatchUndeleteAlertsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ BatchUndeleteAlertsResponse;

export type BatchUndeleteAlertsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Performs batch undelete operation on alerts. */
export const batchUndeleteAlerts: API.OperationMethod<
  BatchUndeleteAlertsRequest_Op,
  BatchUndeleteAlertsResponse_Op,
  BatchUndeleteAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUndeleteAlertsRequest_Op,
  output: BatchUndeleteAlertsResponse_Op,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAlertsRequest {
  /** Required. The identifier of the alert to retrieve. */
  alertId: string;
  /** Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
}

export const GetAlertsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  alertId: Schema.String.pipe(T.HttpPath("alertId")),
  customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta1/alerts/{alertId}" }),
  svc,
) as unknown as Schema.Codec<GetAlertsRequest>;

export type GetAlertsResponse = Alert;
export const GetAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Alert;

export type GetAlertsError = DefaultErrors | NotFound | Forbidden;

/** Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error. */
export const getAlerts: API.OperationMethod<
  GetAlertsRequest,
  GetAlertsResponse,
  GetAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAlertsRequest,
  output: GetAlertsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAlertsRequest {
  /** Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
  /** Required. The identifier of the alert to delete. */
  alertId: string;
}

export const DeleteAlertsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
  alertId: Schema.String.pipe(T.HttpPath("alertId")),
}).pipe(
  T.Http({ method: "DELETE", path: "v1beta1/alerts/{alertId}" }),
  svc,
) as unknown as Schema.Codec<DeleteAlertsRequest>;

export type DeleteAlertsResponse = Empty;
export const DeleteAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteAlertsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error. */
export const deleteAlerts: API.OperationMethod<
  DeleteAlertsRequest,
  DeleteAlertsResponse,
  DeleteAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAlertsRequest,
  output: DeleteAlertsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UndeleteAlertsRequest {
  /** Required. The identifier of the alert to undelete. */
  alertId: string;
  /** Request body */
  body?: UndeleteAlertRequest;
}

export const UndeleteAlertsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  alertId: Schema.String.pipe(T.HttpPath("alertId")),
  body: Schema.optional(UndeleteAlertRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "v1beta1/alerts/{alertId}:undelete",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<UndeleteAlertsRequest>;

export type UndeleteAlertsResponse = Alert;
export const UndeleteAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Alert;

export type UndeleteAlertsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect. */
export const undeleteAlerts: API.OperationMethod<
  UndeleteAlertsRequest,
  UndeleteAlertsResponse,
  UndeleteAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UndeleteAlertsRequest,
  output: UndeleteAlertsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAlertsFeedbackRequest {
  /** Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
  /** Required. The identifier of the alert this feedback belongs to. */
  alertId: string;
  /** Request body */
  body?: AlertFeedback;
}

export const CreateAlertsFeedbackRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
    alertId: Schema.String.pipe(T.HttpPath("alertId")),
    body: Schema.optional(AlertFeedback).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/alerts/{alertId}/feedback",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateAlertsFeedbackRequest>;

export type CreateAlertsFeedbackResponse = AlertFeedback;
export const CreateAlertsFeedbackResponse =
  /*@__PURE__*/ /*#__PURE__*/ AlertFeedback;

export type CreateAlertsFeedbackError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error. */
export const createAlertsFeedback: API.OperationMethod<
  CreateAlertsFeedbackRequest,
  CreateAlertsFeedbackResponse,
  CreateAlertsFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAlertsFeedbackRequest,
  output: CreateAlertsFeedbackResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAlertsFeedbackRequest {
  /** Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
  /** Required. The alert identifier. The "-" wildcard could be used to represent all alerts. */
  alertId: string;
  /** Optional. A query string for filtering alert feedback results. For more details, see [Query filters](https://developers.google.com/workspace/admin/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/workspace/admin/alertcenter/reference/filter-fields#alerts.feedback.list). */
  filter?: string;
}

export const ListAlertsFeedbackRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
    alertId: Schema.String.pipe(T.HttpPath("alertId")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/alerts/{alertId}/feedback" }),
    svc,
  ) as unknown as Schema.Codec<ListAlertsFeedbackRequest>;

export type ListAlertsFeedbackResponse = ListAlertFeedbackResponse;
export const ListAlertsFeedbackResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAlertFeedbackResponse;

export type ListAlertsFeedbackError = DefaultErrors | NotFound | Forbidden;

/** Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error. */
export const listAlertsFeedback: API.OperationMethod<
  ListAlertsFeedbackRequest,
  ListAlertsFeedbackResponse,
  ListAlertsFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAlertsFeedbackRequest,
  output: ListAlertsFeedbackResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateSettingsV1beta1Request {
  /** Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
  /** Request body */
  body?: Settings;
}

export const UpdateSettingsV1beta1Request =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
    body: Schema.optional(Settings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/settings", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateSettingsV1beta1Request>;

export type UpdateSettingsV1beta1Response = Settings;
export const UpdateSettingsV1beta1Response =
  /*@__PURE__*/ /*#__PURE__*/ Settings;

export type UpdateSettingsV1beta1Error =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the customer-level settings. */
export const updateSettingsV1beta1: API.OperationMethod<
  UpdateSettingsV1beta1Request,
  UpdateSettingsV1beta1Response,
  UpdateSettingsV1beta1Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSettingsV1beta1Request,
  output: UpdateSettingsV1beta1Response,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSettingsV1beta1Request {
  /** Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The `customer_id` must/ have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
}

export const GetSettingsV1beta1Request =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/settings" }),
    svc,
  ) as unknown as Schema.Codec<GetSettingsV1beta1Request>;

export type GetSettingsV1beta1Response = Settings;
export const GetSettingsV1beta1Response = /*@__PURE__*/ /*#__PURE__*/ Settings;

export type GetSettingsV1beta1Error = DefaultErrors | NotFound | Forbidden;

/** Returns customer-level settings. */
export const getSettingsV1beta1: API.OperationMethod<
  GetSettingsV1beta1Request,
  GetSettingsV1beta1Response,
  GetSettingsV1beta1Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingsV1beta1Request,
  output: GetSettingsV1beta1Response,
  errors: [NotFound, Forbidden],
}));
