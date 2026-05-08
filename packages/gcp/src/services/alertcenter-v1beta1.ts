// ==========================================================================
// Google Workspace Alert Center API (alertcenter v1beta1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
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

export interface MandatoryServiceAnnouncement {
  /** One line summary of the announcement */
  title?: string;
  /** Detailed, freeform text describing the announcement */
  description?: string;
}

export const MandatoryServiceAnnouncement: Schema.Schema<MandatoryServiceAnnouncement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "MandatoryServiceAnnouncement" });

export interface CsvRow {
  /** The data entries in a CSV file row, as a string array rather than a single comma-separated string. */
  entries?: ReadonlyArray<string>;
}

export const CsvRow: Schema.Schema<CsvRow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CsvRow" });

export interface Csv {
  /** The list of headers for data columns in a CSV file. */
  headers?: ReadonlyArray<string>;
  /** The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string. */
  dataRows?: ReadonlyArray<CsvRow>;
}

export const Csv: Schema.Schema<Csv> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    headers: Schema.optional(Schema.Array(Schema.String)),
    dataRows: Schema.optional(Schema.Array(CsvRow)),
  }).annotate({ identifier: "Csv" });

export interface Attachment {
  /** A CSV file attachment. */
  csv?: Csv;
}

export const Attachment: Schema.Schema<Attachment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    csv: Schema.optional(Csv),
  }).annotate({ identifier: "Attachment" });

export interface DomainId {
  /** The primary domain for the customer. */
  customerPrimaryDomain?: string;
}

export const DomainId: Schema.Schema<DomainId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerPrimaryDomain: Schema.optional(Schema.String),
  }).annotate({ identifier: "DomainId" });

export interface AccountSuspensionDetails {
  /** The name of the product being abused. This is restricted to only the following values: "Gmail" "Google Workspace" "Payments" "Voice" "YouTube" "Other" */
  productName?: string;
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
}

export const AccountSuspensionDetails: Schema.Schema<AccountSuspensionDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productName: Schema.optional(Schema.String),
    abuseReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountSuspensionDetails" });

export interface MergeInfo {
  /** The new tracking ID from the parent incident. */
  newIncidentTrackingId?: string;
  /** Optional. New alert ID. Reference the [google.apps.alertcenter.Alert] with this ID for the current state. */
  newAlertId?: string;
}

export const MergeInfo: Schema.Schema<MergeInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newIncidentTrackingId: Schema.optional(Schema.String),
    newAlertId: Schema.optional(Schema.String),
  }).annotate({ identifier: "MergeInfo" });

export interface TransferError {
  /** Reason for the error. */
  invalidReason?:
    | "TRANSFER_INVALID_REASON_UNSPECIFIED"
    | "TRANSFER_TARGET_DELETED"
    | "UNLICENSED"
    | "SUSPENDED"
    | "NO_PHONE_NUMBER"
    | (string & {});
  /** Ring group or auto attendant ID. Not set for users. */
  id?: string;
  /** User's email address. This may be unavailable if the entity was deleted. */
  email?: string;
  /** Type of entity being transferred to. For ring group members, this should always be USER. */
  entityType?:
    | "TRANSFER_ENTITY_TYPE_UNSPECIFIED"
    | "TRANSFER_AUTO_ATTENDANT"
    | "TRANSFER_RING_GROUP"
    | "TRANSFER_USER"
    | (string & {});
  /** User's full name, or the ring group / auto attendant name. This may be unavailable if the entity was deleted. */
  name?: string;
}

export const TransferError: Schema.Schema<TransferError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invalidReason: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "TransferError" });

export interface TransferMisconfiguration {
  /** Details for each invalid transfer or forward. */
  errors?: ReadonlyArray<TransferError>;
}

export const TransferMisconfiguration: Schema.Schema<TransferMisconfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(TransferError)),
  }).annotate({ identifier: "TransferMisconfiguration" });

export interface VoicemailRecipientError {
  /** Email address of the invalid recipient. This may be unavailable if the recipient was deleted. */
  email?: string;
  /** Reason for the error. */
  invalidReason?:
    | "EMAIL_INVALID_REASON_UNSPECIFIED"
    | "OUT_OF_QUOTA"
    | "RECIPIENT_DELETED"
    | (string & {});
}

export const VoicemailRecipientError: Schema.Schema<VoicemailRecipientError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    invalidReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "VoicemailRecipientError" });

export interface VoicemailMisconfiguration {
  /** Issue(s) with voicemail recipients. */
  errors?: ReadonlyArray<VoicemailRecipientError>;
}

export const VoicemailMisconfiguration: Schema.Schema<VoicemailMisconfiguration> =
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
  /** Issue(s) with members of a ring group. */
  membersMisconfiguration?: TransferMisconfiguration;
  /** Link that the admin can follow to fix the issue. */
  fixUri?: string;
  /** Issue(s) with sending to voicemail. */
  voicemailMisconfiguration?: VoicemailMisconfiguration;
  /** Name of the entity whose configuration is now invalid. */
  entityName?: string;
}

export const VoiceMisconfiguration: Schema.Schema<VoiceMisconfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityType: Schema.optional(Schema.String),
    transferMisconfiguration: Schema.optional(TransferMisconfiguration),
    membersMisconfiguration: Schema.optional(TransferMisconfiguration),
    fixUri: Schema.optional(Schema.String),
    voicemailMisconfiguration: Schema.optional(VoicemailMisconfiguration),
    entityName: Schema.optional(Schema.String),
  }).annotate({ identifier: "VoiceMisconfiguration" });

export interface RequestInfo {
  /** Required. Number of requests sent for this application to set up default SQL instance. */
  numberOfRequests?: string;
  /** List of app developers who triggered notifications for above application. */
  appDeveloperEmail?: ReadonlyArray<string>;
  /** Required. The application that requires the SQL setup. */
  appKey?: string;
}

export const RequestInfo: Schema.Schema<RequestInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numberOfRequests: Schema.optional(Schema.String),
    appDeveloperEmail: Schema.optional(Schema.Array(Schema.String)),
    appKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "RequestInfo" });

export interface AppMakerSqlSetupNotification {
  /** List of applications with requests for default SQL set up. */
  requestInfo?: ReadonlyArray<RequestInfo>;
}

export const AppMakerSqlSetupNotification: Schema.Schema<AppMakerSqlSetupNotification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestInfo: Schema.optional(Schema.Array(RequestInfo)),
  }).annotate({ identifier: "AppMakerSqlSetupNotification" });

export interface AlertMetadata {
  /** The severity value of the alert. Alert Center will set this field at alert creation time, default's to an empty string when it could not be determined. The supported values for update actions on this field are the following: * HIGH * MEDIUM * LOW */
  severity?: string;
  /** Output only. The unique identifier of the Google Workspace account of the customer. */
  customerId?: string;
  /** Output only. The alert identifier. */
  alertId?: string;
  /** The email address of the user assigned to the alert. */
  assignee?: string;
  /** Output only. The time this metadata was last updated. */
  updateTime?: string;
  /** The current status of the alert. The supported values are the following: * NOT_STARTED * IN_PROGRESS * CLOSED */
  status?: string;
  /** Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert metadata from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform metadata updates in order to avoid race conditions: An `etag` is returned in the response which contains alert metadata, and systems are expected to put that etag in the request to update alert metadata to ensure that their change will be applied to the same version of the alert metadata. If no `etag` is provided in the call to update alert metadata, then the existing alert metadata is overwritten blindly. */
  etag?: string;
}

export const AlertMetadata: Schema.Schema<AlertMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    alertId: Schema.optional(Schema.String),
    assignee: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "AlertMetadata" });

export interface StateSponsoredAttack {
  /** The email of the user this incident was created for. */
  email?: string;
}

export const StateSponsoredAttack: Schema.Schema<StateSponsoredAttack> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "StateSponsoredAttack" });

export interface SuperAdminPasswordResetEvent {
  /** email of person whose password was reset */
  userEmail?: string;
}

export const SuperAdminPasswordResetEvent: Schema.Schema<SuperAdminPasswordResetEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "SuperAdminPasswordResetEvent" });

export interface SSOProfileUpdatedEvent {
  /** changes made to sso profile */
  inboundSsoProfileChanges?: string;
  /** sso profile name which got updated */
  inboundSsoProfileName?: string;
}

export const SSOProfileUpdatedEvent: Schema.Schema<SSOProfileUpdatedEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inboundSsoProfileChanges: Schema.optional(Schema.String),
    inboundSsoProfileName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SSOProfileUpdatedEvent" });

export interface PrimaryAdminChangedEvent {
  /** Email of person who was the primary admin before the action */
  previousAdminEmail?: string;
  /** Email of person who is the primary admin after the action */
  updatedAdminEmail?: string;
  /** domain in which actioned occurred */
  domain?: string;
}

export const PrimaryAdminChangedEvent: Schema.Schema<PrimaryAdminChangedEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    previousAdminEmail: Schema.optional(Schema.String),
    updatedAdminEmail: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
  }).annotate({ identifier: "PrimaryAdminChangedEvent" });

export interface SSOProfileDeletedEvent {
  /** sso profile name which got deleted */
  inboundSsoProfileName?: string;
}

export const SSOProfileDeletedEvent: Schema.Schema<SSOProfileDeletedEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inboundSsoProfileName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SSOProfileDeletedEvent" });

export interface SSOProfileCreatedEvent {
  /** sso profile name which got created */
  inboundSsoProfileName?: string;
}

export const SSOProfileCreatedEvent: Schema.Schema<SSOProfileCreatedEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inboundSsoProfileName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SSOProfileCreatedEvent" });

export interface SensitiveAdminAction {
  /** Email of person who performed the action */
  actorEmail?: string;
  /** Event occurred when password was reset for super admin in customer's account */
  superAdminPasswordResetEvent?: SuperAdminPasswordResetEvent;
  /** The time at which event occurred */
  eventTime?: string;
  /** Event occurred when SSO Profile updated in customer's account */
  ssoProfileUpdatedEvent?: SSOProfileUpdatedEvent;
  /** Event occurred when primary admin changed in customer's account */
  primaryAdminChangedEvent?: PrimaryAdminChangedEvent;
  /** Event occurred when SSO Profile deleted in customer's account */
  ssoProfileDeletedEvent?: SSOProfileDeletedEvent;
  /** Event occurred when SSO Profile created in customer's account */
  ssoProfileCreatedEvent?: SSOProfileCreatedEvent;
}

export const SensitiveAdminAction: Schema.Schema<SensitiveAdminAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actorEmail: Schema.optional(Schema.String),
    superAdminPasswordResetEvent: Schema.optional(SuperAdminPasswordResetEvent),
    eventTime: Schema.optional(Schema.String),
    ssoProfileUpdatedEvent: Schema.optional(SSOProfileUpdatedEvent),
    primaryAdminChangedEvent: Schema.optional(PrimaryAdminChangedEvent),
    ssoProfileDeletedEvent: Schema.optional(SSOProfileDeletedEvent),
    ssoProfileCreatedEvent: Schema.optional(SSOProfileCreatedEvent),
  }).annotate({ identifier: "SensitiveAdminAction" });

export interface Entity {
  /** Link to a Security Investigation Tool search based on this entity, if available. */
  link?: string;
  /** Extra values beyond name. The order of values should align with headers in EntityList. */
  values?: ReadonlyArray<string>;
  /** Human-readable name of this entity, such as an email address, file ID, or device name. */
  name?: string;
}

export const Entity: Schema.Schema<Entity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    link: Schema.optional(Schema.String),
    values: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Entity" });

export interface EntityList {
  /** Headers of the values in entities. If no value is defined in Entity, this field should be empty. */
  headers?: ReadonlyArray<string>;
  /** List of entities affected by the alert. */
  entities?: ReadonlyArray<Entity>;
  /** Name of the key detail used to display this entity list. */
  name?: string;
}

export const EntityList: Schema.Schema<EntityList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    headers: Schema.optional(Schema.Array(Schema.String)),
    entities: Schema.optional(Schema.Array(Entity)),
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

export const AbuseDetected: Schema.Schema<AbuseDetected> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subAlertId: Schema.optional(Schema.String),
    product: Schema.optional(Schema.String),
    additionalDetails: Schema.optional(EntityList),
    variationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AbuseDetected" });

export interface ActivityRule {
  /** Alert display name. */
  displayName?: string;
  /** The timestamp of the last update to the rule. */
  updateTime?: string;
  /** List of action names associated with the rule threshold. */
  actionNames?: ReadonlyArray<string>;
  /** Alert ID superseding this alert. It is used to indicate that superseding alert is essentially extension of this alert and we found the relationship after creating both alerts. */
  supersedingAlert?: string;
  /** Rule name. */
  name?: string;
  /** Alert threshold is for example “COUNT > 5”. */
  threshold?: string;
  /** Rule create timestamp. */
  createTime?: string;
  /** The trigger sources for this rule. * GMAIL_EVENTS * DEVICE_EVENTS * USER_EVENTS */
  triggerSource?: string;
  /** Description of the rule. */
  description?: string;
  /** List of alert IDs superseded by this alert. It is used to indicate that this alert is essentially extension of superseded alerts and we found the relationship after creating these alerts. */
  supersededAlerts?: ReadonlyArray<string>;
  /** Query that is used to get the data from the associated source. */
  query?: string;
  /** Rule window size. Possible values are 1 hour or 24 hours. */
  windowSize?: string;
}

export const ActivityRule: Schema.Schema<ActivityRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    actionNames: Schema.optional(Schema.Array(Schema.String)),
    supersedingAlert: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    threshold: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    triggerSource: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    supersededAlerts: Schema.optional(Schema.Array(Schema.String)),
    query: Schema.optional(Schema.String),
    windowSize: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActivityRule" });

export interface KeyServiceError {
  /** HTTP response status code from the key service. */
  httpResponseCode?: string;
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
  /** Number of similar errors encountered. */
  errorCount?: string;
  /** Url of the external key service. */
  keyServiceUrl?: string;
}

export const KeyServiceError: Schema.Schema<KeyServiceError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    httpResponseCode: Schema.optional(Schema.String),
    errorInfo: Schema.optional(Schema.String),
    errorCount: Schema.optional(Schema.String),
    keyServiceUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "KeyServiceError" });

export interface IdentityProviderError {
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
  /** Number of similar errors encountered. */
  errorCount?: string;
}

export const IdentityProviderError: Schema.Schema<IdentityProviderError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorizationBaseUrl: Schema.optional(Schema.String),
    errorInfo: Schema.optional(Schema.String),
    errorCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityProviderError" });

export interface ClientSideEncryptionServiceUnavailable {
  /** External key services impacted by an outage or misconfiguration. */
  keyServiceError?: ReadonlyArray<KeyServiceError>;
  /** Identity providers impacted by an outage or misconfiguration. */
  idpError?: ReadonlyArray<IdentityProviderError>;
}

export const ClientSideEncryptionServiceUnavailable: Schema.Schema<ClientSideEncryptionServiceUnavailable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyServiceError: Schema.optional(Schema.Array(KeyServiceError)),
    idpError: Schema.optional(Schema.Array(IdentityProviderError)),
  }).annotate({ identifier: "ClientSideEncryptionServiceUnavailable" });

export interface CloudPubsubTopic {
  /** The `name` field of a Cloud Pubsub [Topic] (https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic). */
  topicName?: string;
  /** Optional. The format of the payload that would be sent. If not specified the format will be JSON. */
  payloadFormat?: "PAYLOAD_FORMAT_UNSPECIFIED" | "JSON" | (string & {});
}

export const CloudPubsubTopic: Schema.Schema<CloudPubsubTopic> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topicName: Schema.optional(Schema.String),
    payloadFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudPubsubTopic" });

export interface Notification {
  /** A Google Cloud Pub/sub topic destination. */
  cloudPubsubTopic?: CloudPubsubTopic;
}

export const Notification: Schema.Schema<Notification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudPubsubTopic: Schema.optional(CloudPubsubTopic),
  }).annotate({ identifier: "Notification" });

export interface User {
  /** Email address of the user. */
  emailAddress?: string;
  /** Display name of the user. */
  displayName?: string;
}

export const User: Schema.Schema<User> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    emailAddress: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "User" });

export interface MaliciousEntity {
  /** The header from display name. */
  displayName?: string;
  /** The actor who triggered a gmail phishing alert. */
  entity?: User;
  /** The sender email address. */
  fromHeader?: string;
}

export const MaliciousEntity: Schema.Schema<MaliciousEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    entity: Schema.optional(User),
    fromHeader: Schema.optional(Schema.String),
  }).annotate({ identifier: "MaliciousEntity" });

export interface GmailMessageInfo {
  /** The message ID. */
  messageId?: string;
  /** The sent time of the email. */
  sentTime?: string;
  /** The hash of the message body text. */
  md5HashMessageBody?: string;
  /** The MD5 Hash of email's subject (only available for reported emails). */
  md5HashSubject?: string;
  /** The email subject text (only available for reported emails). */
  subjectText?: string;
  /** The date of the event related to this email. */
  date?: string;
  /** The snippet of the message body text (only available for reported emails). */
  messageBodySnippet?: string;
  /** The `SHA256` hash of email's attachment and all MIME parts. */
  attachmentsSha256Hash?: ReadonlyArray<string>;
  /** The recipient of this email. */
  recipient?: string;
}

export const GmailMessageInfo: Schema.Schema<GmailMessageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageId: Schema.optional(Schema.String),
    sentTime: Schema.optional(Schema.String),
    md5HashMessageBody: Schema.optional(Schema.String),
    md5HashSubject: Schema.optional(Schema.String),
    subjectText: Schema.optional(Schema.String),
    date: Schema.optional(Schema.String),
    messageBodySnippet: Schema.optional(Schema.String),
    attachmentsSha256Hash: Schema.optional(Schema.Array(Schema.String)),
    recipient: Schema.optional(Schema.String),
  }).annotate({ identifier: "GmailMessageInfo" });

export interface BadWhitelist {
  /** The entity whose actions triggered a Gmail phishing alert. */
  maliciousEntity?: MaliciousEntity;
  /** The source IP address of the malicious email, for example, `127.0.0.1`. */
  sourceIp?: string;
  /** The domain ID. */
  domainId?: DomainId;
  /** The list of messages contained by this alert. */
  messages?: ReadonlyArray<GmailMessageInfo>;
}

export const BadWhitelist: Schema.Schema<BadWhitelist> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maliciousEntity: Schema.optional(MaliciousEntity),
    sourceIp: Schema.optional(Schema.String),
    domainId: Schema.optional(DomainId),
    messages: Schema.optional(Schema.Array(GmailMessageInfo)),
  }).annotate({ identifier: "BadWhitelist" });

export interface ReportingRule {
  /** Rule name */
  name?: string;
  /** Alert Rule query Sample Query query { condition { filter { expected_application_id: 777491262838 expected_event_name: "indexable_content_change" filter_op: IN } } conjunction_operator: OR } */
  query?: string;
  /** Any other associated alert details, for example, AlertConfiguration. */
  alertDetails?: string;
}

export const ReportingRule: Schema.Schema<ReportingRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    alertDetails: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportingRule" });

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

export const AccountSuspensionWarning: Schema.Schema<AccountSuspensionWarning> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appealWindow: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    suspensionDetails: Schema.optional(Schema.Array(AccountSuspensionDetails)),
  }).annotate({ identifier: "AccountSuspensionWarning" });

export interface RuleInfo {
  /** User provided name of the rule. */
  displayName?: string;
  /** Resource name that uniquely identifies the rule. */
  resourceName?: string;
}

export const RuleInfo: Schema.Schema<RuleInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "RuleInfo" });

export interface PredefinedDetectorInfo {
  /** Name that uniquely identifies the detector. */
  detectorName?: string;
}

export const PredefinedDetectorInfo: Schema.Schema<PredefinedDetectorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectorName: Schema.optional(Schema.String),
  }).annotate({ identifier: "PredefinedDetectorInfo" });

export interface UserDefinedDetectorInfo {
  /** Display name of the detector. */
  displayName?: string;
  /** Resource name that uniquely identifies the detector. */
  resourceName?: string;
}

export const UserDefinedDetectorInfo: Schema.Schema<UserDefinedDetectorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserDefinedDetectorInfo" });

export interface MatchInfo {
  /** For matched detector predefined by Google. */
  predefinedDetector?: PredefinedDetectorInfo;
  /** For matched detector defined by administrators. */
  userDefinedDetector?: UserDefinedDetectorInfo;
}

export const MatchInfo: Schema.Schema<MatchInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    predefinedDetector: Schema.optional(PredefinedDetectorInfo),
    userDefinedDetector: Schema.optional(UserDefinedDetectorInfo),
  }).annotate({ identifier: "MatchInfo" });

export interface ActionInfo {
  /** Google Cloud Storage location of the content that violated the rule. This field has format: "/" */
  evidenceLockerFilePath?: string;
}

export const ActionInfo: Schema.Schema<ActionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evidenceLockerFilePath: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActionInfo" });

export interface ResourceInfo {
  /** RFC2822 message ID. */
  messageId?: string;
  /** Id to identify a device. For example, for Android devices, this is the "Android Device Id" and for Chrome OS devices, it's the "Device Virtual Id". */
  deviceId?: string;
  /** Title of the resource, for example email subject, or document title. */
  resourceTitle?: string;
  /** Drive file ID. */
  documentId?: string;
  /** Chat attachment ID. */
  chatAttachmentId?: string;
  /** Chat message ID. */
  chatMessageId?: string;
}

export const ResourceInfo: Schema.Schema<ResourceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageId: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
    resourceTitle: Schema.optional(Schema.String),
    documentId: Schema.optional(Schema.String),
    chatAttachmentId: Schema.optional(Schema.String),
    chatMessageId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceInfo" });

export interface RuleViolationInfo {
  /** Event associated with this alert after applying the rule. */
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "ACCESS_BLOCKED"
    | "SHARING_BLOCKED"
    | (string & {});
  /** Details of the violated rule. */
  ruleInfo?: RuleInfo;
  /** Email of the user who caused the violation. Value could be empty if not applicable, for example, a violation found by drive continuous scan. */
  triggeringUserEmail?: string;
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
  /** Source of the data. */
  dataSource?:
    | "DATA_SOURCE_UNSPECIFIED"
    | "DRIVE"
    | "GMAIL"
    | "CHROME"
    | "CHAT"
    | (string & {});
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
    | (string & {});
  /** List of matches that were found in the resource content. */
  matchInfo?: ReadonlyArray<MatchInfo>;
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
  /** Metadata related to the triggered actions. */
  triggeredActionInfo?: ReadonlyArray<ActionInfo>;
  /** Resource recipients. For Drive, they are grantees that the Drive file was shared with at the time of rule triggering. Valid values include user emails, group emails, domains, or 'anyone' if the file was publicly accessible. If the file was private the recipients list will be empty. For Gmail, they are emails of the users or groups that the Gmail message was sent to. */
  recipients?: ReadonlyArray<string>;
  /** Details of the resource which violated the rule. */
  resourceInfo?: ResourceInfo;
}

export const RuleViolationInfo: Schema.Schema<RuleViolationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventType: Schema.optional(Schema.String),
    ruleInfo: Schema.optional(RuleInfo),
    triggeringUserEmail: Schema.optional(Schema.String),
    suppressedActionTypes: Schema.optional(Schema.Array(Schema.String)),
    dataSource: Schema.optional(Schema.String),
    trigger: Schema.optional(Schema.String),
    matchInfo: Schema.optional(Schema.Array(MatchInfo)),
    triggeredActionTypes: Schema.optional(Schema.Array(Schema.String)),
    triggeredActionInfo: Schema.optional(Schema.Array(ActionInfo)),
    recipients: Schema.optional(Schema.Array(Schema.String)),
    resourceInfo: Schema.optional(ResourceInfo),
  }).annotate({ identifier: "RuleViolationInfo" });

export interface SupportTicket {
  /** Support ticket ID */
  ticketId?: string;
  /** Link to support ticket */
  ticketUrl?: string;
}

export const SupportTicket: Schema.Schema<SupportTicket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ticketId: Schema.optional(Schema.String),
    ticketUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "SupportTicket" });

export interface AccessApproval {
  /** ID of the Access Approvals request. This is a helpful field when requesting support from Google. */
  requestId?: string;
  /** Products within scope of the Access Approvals request. */
  products?: ReadonlyArray<string>;
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
  /** Scope of access, also known as a resource. This is further narrowed down by the product field. */
  scope?: string;
  /** Support tickets related to this Access Approvals request. Populated if there is an associated case number. */
  tickets?: ReadonlyArray<SupportTicket>;
}

export const AccessApproval: Schema.Schema<AccessApproval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
    products: Schema.optional(Schema.Array(Schema.String)),
    justificationReason: Schema.optional(Schema.Array(Schema.String)),
    officeLocation: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    tickets: Schema.optional(Schema.Array(SupportTicket)),
  }).annotate({ identifier: "AccessApproval" });

export interface SuspiciousActivitySecurityDetail {
  /** The serial number of the device. */
  serialNumber?: string;
  /** The old value of the device property before the change. */
  oldValue?: string;
  /** Required for iOS, empty for others. */
  iosVendorId?: string;
  /** The type of the device. */
  deviceType?: string;
  /** The model of the device. */
  deviceModel?: string;
  /** The device resource ID. */
  resourceId?: string;
  /** The device property which was changed. */
  deviceProperty?: string;
  /** Required. The device ID. */
  deviceId?: string;
  /** The new value of the device property after the change. */
  newValue?: string;
}

export const SuspiciousActivitySecurityDetail: Schema.Schema<SuspiciousActivitySecurityDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serialNumber: Schema.optional(Schema.String),
    oldValue: Schema.optional(Schema.String),
    iosVendorId: Schema.optional(Schema.String),
    deviceType: Schema.optional(Schema.String),
    deviceModel: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    deviceProperty: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
    newValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "SuspiciousActivitySecurityDetail" });

export interface SuspiciousActivity {
  /** The email of the user this alert was created for. */
  email?: string;
  /** Required. The list of security events. */
  events?: ReadonlyArray<SuspiciousActivitySecurityDetail>;
}

export const SuspiciousActivity: Schema.Schema<SuspiciousActivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    events: Schema.optional(Schema.Array(SuspiciousActivitySecurityDetail)),
  }).annotate({ identifier: "SuspiciousActivity" });

export interface PhishingSpike {
  /** The domain ID. */
  domainId?: DomainId;
  /** The list of messages contained by this alert. */
  messages?: ReadonlyArray<GmailMessageInfo>;
  /** The entity whose actions triggered a Gmail phishing alert. */
  maliciousEntity?: MaliciousEntity;
  /** If `true`, the email originated from within the organization. */
  isInternal?: boolean;
}

export const PhishingSpike: Schema.Schema<PhishingSpike> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domainId: Schema.optional(DomainId),
    messages: Schema.optional(Schema.Array(GmailMessageInfo)),
    maliciousEntity: Schema.optional(MaliciousEntity),
    isInternal: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PhishingSpike" });

export interface Alert {
  /** Output only. The unique identifier for the alert. */
  alertId?: string;
  /** Required. The time the event that caused this alert was started or detected. */
  startTime?: string;
  /** Required. A unique identifier for the system that reported the alert. This is output only after alert is created. Supported sources are any of the following: * Google Operations * Mobile device management * Gmail phishing * Data Loss Prevention * Domain wide takeout * State sponsored attack * Google identity * Apps outage */
  source?: string;
  /** Output only. The unique identifier of the Google Workspace account of the customer. */
  customerId?: string;
  /** Output only. `True` if this alert is marked for deletion. */
  deleted?: boolean;
  /** Output only. The time this alert was last updated. */
  updateTime?: string;
  /** Output only. An optional [Security Investigation Tool](https://support.google.com/a/answer/7575955) query for this alert. */
  securityInvestigationToolLink?: string;
  /** Optional. The data associated with this alert, for example google.apps.alertcenter.type.DeviceCompromised. */
  data?: Record<string, unknown>;
  /** Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform alert updates in order to avoid race conditions: An `etag` is returned in the response which contains alerts, and systems are expected to put that etag in the request to update alert to ensure that their change will be applied to the same version of the alert. If no `etag` is provided in the call to update alert, then the existing alert is overwritten blindly. */
  etag?: string;
  /** Output only. The time this alert was created. */
  createTime?: string;
  /** Optional. The time the event that caused this alert ceased being active. If provided, the end time must not be earlier than the start time. If not provided, it indicates an ongoing alert. */
  endTime?: string;
  /** Required. The type of the alert. This is output only after alert is created. For a list of available alert types see [Google Workspace Alert types](https://developers.google.com/workspace/admin/alertcenter/reference/alert-types). */
  type?: string;
  /** Output only. The metadata associated with this alert. */
  metadata?: AlertMetadata;
}

export const Alert: Schema.Schema<Alert> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alertId: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
    securityInvestigationToolLink: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    etag: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    metadata: Schema.optional(AlertMetadata),
  }).annotate({ identifier: "Alert" });

export interface AppSettingsChanged {
  /** Any other associated alert details, for example, AlertConfiguration. */
  alertDetails?: string;
  /** Rule name */
  name?: string;
}

export const AppSettingsChanged: Schema.Schema<AppSettingsChanged> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alertDetails: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppSettingsChanged" });

export interface ApnsCertificateExpirationInfo {
  /** The Apple ID used to create the certificate. It may be blank if admins didn't enter it. */
  appleId?: string;
  /** The expiration date of the APNS certificate. */
  expirationTime?: string;
  /** The UID of the certificate. */
  uid?: string;
}

export const ApnsCertificateExpirationInfo: Schema.Schema<ApnsCertificateExpirationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appleId: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApnsCertificateExpirationInfo" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
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

export const BatchUndeleteAlertsResponse: Schema.Schema<BatchUndeleteAlertsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    successAlertIds: Schema.optional(Schema.Array(Schema.String)),
    failedAlertStatus: Schema.optional(Schema.Record(Schema.String, Status)),
  }).annotate({ identifier: "BatchUndeleteAlertsResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface AlertFeedback {
  /** Output only. The unique identifier for the feedback. */
  feedbackId?: string;
  /** Output only. The email of the user that provided the feedback. */
  email?: string;
  /** Required. The type of the feedback. */
  type?:
    | "ALERT_FEEDBACK_TYPE_UNSPECIFIED"
    | "NOT_USEFUL"
    | "SOMEWHAT_USEFUL"
    | "VERY_USEFUL"
    | (string & {});
  /** Output only. The unique identifier of the Google Workspace account of the customer. */
  customerId?: string;
  /** Output only. The alert identifier. */
  alertId?: string;
  /** Output only. The time this feedback was created. */
  createTime?: string;
}

export const AlertFeedback: Schema.Schema<AlertFeedback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    feedbackId: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    alertId: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AlertFeedback" });

export interface VaultAcceleratedDeletion {
  /** Currentlty only Gmail is supported as app type */
  appType?:
    | "VAULT_ACCELERATED_DELETION_APP_TYPE_UNSPECIFIED"
    | "VAULT_ACCELERATED_DELETION_APP_TYPE_GMAIL"
    | (string & {});
  /** Matter ID of the accelerated deletion request intended to be used to construct the Vault UI link to the AD request */
  matterId?: string;
  /** Accelerated deletion request ID intended to be used to construct the Vault UI link to the AD request */
  deletionRequestId?: string;
  /** The UTC timestamp of when the AD request was created */
  createTime?: string;
  /** The action can be one of create and cancel */
  actionType?:
    | "VAULT_ACCELERATED_DELETION_ACTION_TYPE_UNSPECIFIED"
    | "VAULT_ACCELERATED_DELETION_ACTION_TYPE_CREATE"
    | "VAULT_ACCELERATED_DELETION_ACTION_TYPE_CANCEL"
    | (string & {});
}

export const VaultAcceleratedDeletion: Schema.Schema<VaultAcceleratedDeletion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appType: Schema.optional(Schema.String),
    matterId: Schema.optional(Schema.String),
    deletionRequestId: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    actionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "VaultAcceleratedDeletion" });

export interface MailPhishing {
  /** The domain ID. */
  domainId?: DomainId;
  /** The list of messages contained by this alert. */
  messages?: ReadonlyArray<GmailMessageInfo>;
  /** The entity whose actions triggered a Gmail phishing alert. */
  maliciousEntity?: MaliciousEntity;
  /** If `true`, the email originated from within the organization. */
  isInternal?: boolean;
  /** System actions on the messages. */
  systemActionType?:
    | "SYSTEM_ACTION_TYPE_UNSPECIFIED"
    | "NO_OPERATION"
    | "REMOVED_FROM_INBOX"
    | (string & {});
}

export const MailPhishing: Schema.Schema<MailPhishing> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domainId: Schema.optional(DomainId),
    messages: Schema.optional(Schema.Array(GmailMessageInfo)),
    maliciousEntity: Schema.optional(MaliciousEntity),
    isInternal: Schema.optional(Schema.Boolean),
    systemActionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "MailPhishing" });

export interface DeviceCompromisedSecurityDetail {
  /** Required for iOS, empty for others. */
  iosVendorId?: string;
  /** Required. The device ID. */
  deviceId?: string;
  /** The type of the device. */
  deviceType?: string;
  /** The model of the device. */
  deviceModel?: string;
  /** The device resource ID. */
  resourceId?: string;
  /** The device compromised state. Possible values are "`Compromised`" or "`Not Compromised`". */
  deviceCompromisedState?: string;
  /** The serial number of the device. */
  serialNumber?: string;
}

export const DeviceCompromisedSecurityDetail: Schema.Schema<DeviceCompromisedSecurityDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iosVendorId: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
    deviceType: Schema.optional(Schema.String),
    deviceModel: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    deviceCompromisedState: Schema.optional(Schema.String),
    serialNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceCompromisedSecurityDetail" });

export interface LoginDetails {
  /** Optional. The human-readable IP address (for example, `11.22.33.44`) that is associated with the warning event. */
  ipAddress?: string;
  /** Optional. The successful login time that is associated with the warning event. This isn't present for blocked login attempts. */
  loginTime?: string;
}

export const LoginDetails: Schema.Schema<LoginDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipAddress: Schema.optional(Schema.String),
    loginTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "LoginDetails" });

export interface DomainWideTakeoutInitiated {
  /** The email of the admin who initiated the takeout. */
  email?: string;
  /** The takeout request ID. */
  takeoutRequestId?: string;
}

export const DomainWideTakeoutInitiated: Schema.Schema<DomainWideTakeoutInitiated> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    takeoutRequestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DomainWideTakeoutInitiated" });

export interface ListAlertFeedbackResponse {
  /** The list of alert feedback. Feedback entries for each alert are ordered by creation time descending. */
  feedback?: ReadonlyArray<AlertFeedback>;
}

export const ListAlertFeedbackResponse: Schema.Schema<ListAlertFeedbackResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    feedback: Schema.optional(Schema.Array(AlertFeedback)),
  }).annotate({ identifier: "ListAlertFeedbackResponse" });

export interface UndeleteAlertRequest {
  /** Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
}

export const UndeleteAlertRequest: Schema.Schema<UndeleteAlertRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "UndeleteAlertRequest" });

export interface BatchDeleteAlertsResponse {
  /** The successful list of alert IDs. */
  successAlertIds?: ReadonlyArray<string>;
  /** The status details for each failed `alert_id`. */
  failedAlertStatus?: Record<string, Status>;
}

export const BatchDeleteAlertsResponse: Schema.Schema<BatchDeleteAlertsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    successAlertIds: Schema.optional(Schema.Array(Schema.String)),
    failedAlertStatus: Schema.optional(Schema.Record(Schema.String, Status)),
  }).annotate({ identifier: "BatchDeleteAlertsResponse" });

export interface DeviceCompromised {
  /** The email of the user this alert was created for. */
  email?: string;
  /** Required. The list of security events. */
  events?: ReadonlyArray<DeviceCompromisedSecurityDetail>;
}

export const DeviceCompromised: Schema.Schema<DeviceCompromised> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    events: Schema.optional(Schema.Array(DeviceCompromisedSecurityDetail)),
  }).annotate({ identifier: "DeviceCompromised" });

export interface ListAlertsResponse {
  /** The list of alerts. */
  alerts?: ReadonlyArray<Alert>;
  /** The token for the next page. If not empty, indicates that there may be more alerts that match the listing request; this value can be used in a subsequent ListAlertsRequest to get alerts continuing from last result of the current list call. */
  nextPageToken?: string;
}

export const ListAlertsResponse: Schema.Schema<ListAlertsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alerts: Schema.optional(Schema.Array(Alert)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAlertsResponse" });

export interface GoogleOperations {
  /** Customer domain for email template personalization. */
  domain?: string;
  /** A header to display above the incident message. Typically used to attach a localized notice on the timeline for followup comms translations. */
  header?: string;
  /** Optional. Application-specific data for an incident, provided when the Google Workspace application which reported the incident cannot be completely restored to a valid state. */
  attachmentData?: Attachment;
  /** The list of emails which correspond to the users directly affected by the incident. */
  affectedUserEmails?: ReadonlyArray<string>;
  /** A one-line incident description. */
  title?: string;
  /** A detailed, freeform incident description. */
  description?: string;
}

export const GoogleOperations: Schema.Schema<GoogleOperations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.String),
    header: Schema.optional(Schema.String),
    attachmentData: Schema.optional(Attachment),
    affectedUserEmails: Schema.optional(Schema.Array(Schema.String)),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleOperations" });

export interface Settings {
  /** The list of notifications. */
  notifications?: ReadonlyArray<Notification>;
}

export const Settings: Schema.Schema<Settings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notifications: Schema.optional(Schema.Array(Notification)),
  }).annotate({ identifier: "Settings" });

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

export const DriveSyncStateChanged: Schema.Schema<DriveSyncStateChanged> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    syncPauseStartTime: Schema.optional(Schema.String),
    syncStateChangeReason: Schema.optional(Schema.String),
    syncState: Schema.optional(Schema.String),
  }).annotate({ identifier: "DriveSyncStateChanged" });

export interface DlpRuleViolation {
  /** Details about the violated DLP rule. Admins can use the predefined detectors provided by Google Cloud DLP https://cloud.google.com/dlp/ when setting up a DLP rule. Matched Cloud DLP detectors in this violation if any will be captured in the MatchInfo.predefined_detector. */
  ruleViolationInfo?: RuleViolationInfo;
}

export const DlpRuleViolation: Schema.Schema<DlpRuleViolation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ruleViolationInfo: Schema.optional(RuleViolationInfo),
  }).annotate({ identifier: "DlpRuleViolation" });

export interface AppsOutage {
  /** Link to the outage event in Google Workspace Status Dashboard */
  dashboardUri?: string;
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
  /** Indicates new alert details under which the outage is communicated. Only populated when Status is MERGED. */
  mergeInfo?: MergeInfo;
  /** List of products impacted by the outage. */
  products?: ReadonlyArray<string>;
  /** Incident tracking ID. */
  incidentTrackingId?: string;
  /** Timestamp by which the next update is expected to arrive. */
  nextUpdateTime?: string;
  /** Timestamp when the outage is expected to be resolved, or has confirmed resolution. Provided only when known. */
  resolutionTime?: string;
}

export const AppsOutage: Schema.Schema<AppsOutage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dashboardUri: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    mergeInfo: Schema.optional(MergeInfo),
    products: Schema.optional(Schema.Array(Schema.String)),
    incidentTrackingId: Schema.optional(Schema.String),
    nextUpdateTime: Schema.optional(Schema.String),
    resolutionTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppsOutage" });

export interface DeviceManagementRule {
  /** Required for iOS, empty for others. */
  iosVendorId?: string;
  /** Action taken as result of the rule */
  ruleAction?: string;
  /** The serial number of the device. */
  serialNumber?: string;
  /** Required. The device ID. */
  deviceId?: string;
  /** The type of the device. */
  deviceType?: string;
  /** The model of the device. */
  deviceModel?: string;
  /** The device resource ID. */
  resourceId?: string;
  /** ID of the rule that triggered the alert */
  id?: string;
  /** Obfuscated ID of the owner of the device */
  ownerId?: string;
  /** The email of the user this alert was created for. */
  email?: string;
}

export const DeviceManagementRule: Schema.Schema<DeviceManagementRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iosVendorId: Schema.optional(Schema.String),
    ruleAction: Schema.optional(Schema.String),
    serialNumber: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
    deviceType: Schema.optional(Schema.String),
    deviceModel: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    ownerId: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceManagementRule" });

export interface BatchUndeleteAlertsRequest {
  /** Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
  /** Required. The list of alert IDs to undelete. */
  alertId?: ReadonlyArray<string>;
}

export const BatchUndeleteAlertsRequest: Schema.Schema<BatchUndeleteAlertsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.optional(Schema.String),
    alertId: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchUndeleteAlertsRequest" });

export interface BatchDeleteAlertsRequest {
  /** Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
  /** Required. The list of alert IDs to delete. */
  alertId?: ReadonlyArray<string>;
}

export const BatchDeleteAlertsRequest: Schema.Schema<BatchDeleteAlertsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.optional(Schema.String),
    alertId: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchDeleteAlertsRequest" });

export interface UserChanges {
  /** Rule name */
  name?: string;
}

export const UserChanges: Schema.Schema<UserChanges> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserChanges" });

export interface AccountWarning {
  /** Required. The email of the user that this event belongs to. */
  email?: string;
  /** Optional. Details of the login action associated with the warning event. This is only available for: * Suspicious login * Suspicious login (less secure app) * Suspicious programmatic login * User suspended (suspicious activity) */
  loginDetails?: LoginDetails;
}

export const AccountWarning: Schema.Schema<AccountWarning> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    loginDetails: Schema.optional(LoginDetails),
  }).annotate({ identifier: "AccountWarning" });

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
) as unknown as Schema.Schema<GetAlertsRequest>;

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

export interface GetMetadataAlertsRequest {
  /** Required. The identifier of the alert this metadata belongs to. */
  alertId: string;
  /** Optional. The unique identifier of the Google Workspace account of the customer the alert metadata is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
}

export const GetMetadataAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alertId: Schema.String.pipe(T.HttpPath("alertId")),
    customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/alerts/{alertId}/metadata" }),
    svc,
  ) as unknown as Schema.Schema<GetMetadataAlertsRequest>;

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
  ) as unknown as Schema.Schema<BatchDeleteAlertsRequest_Op>;

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
  /** Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
  /** Optional. A token identifying a page of results the server should return. If empty, a new iteration is started. To continue an iteration, pass in the value from the previous ListAlertsResponse's next_page_token field. */
  pageToken?: string;
  /** Optional. The requested page size. Server may return fewer items than requested. If unspecified, server picks an appropriate default. */
  pageSize?: number;
  /** Optional. A query string for filtering alert results. For more details, see [Query filters](https://developers.google.com/workspace/admin/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/workspace/admin/alertcenter/reference/filter-fields#alerts.list). */
  filter?: string;
  /** Optional. The sort order of the list results. If not specified results may be returned in arbitrary order. You can sort the results in descending order based on the creation timestamp using `order_by="create_time desc"`. Currently, supported sorting are `create_time asc`, `create_time desc`, `update_time desc` */
  orderBy?: string;
}

export const ListAlertsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta1/alerts" }),
  svc,
) as unknown as Schema.Schema<ListAlertsRequest>;

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
  ) as unknown as Schema.Schema<BatchUndeleteAlertsRequest_Op>;

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

export interface DeleteAlertsRequest {
  /** Required. The identifier of the alert to delete. */
  alertId: string;
  /** Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
}

export const DeleteAlertsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  alertId: Schema.String.pipe(T.HttpPath("alertId")),
  customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
}).pipe(
  T.Http({ method: "DELETE", path: "v1beta1/alerts/{alertId}" }),
  svc,
) as unknown as Schema.Schema<DeleteAlertsRequest>;

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
) as unknown as Schema.Schema<UndeleteAlertsRequest>;

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
  /** Required. The identifier of the alert this feedback belongs to. */
  alertId: string;
  /** Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
  /** Request body */
  body?: AlertFeedback;
}

export const CreateAlertsFeedbackRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alertId: Schema.String.pipe(T.HttpPath("alertId")),
    customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
    body: Schema.optional(AlertFeedback).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/alerts/{alertId}/feedback",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAlertsFeedbackRequest>;

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
  /** Optional. A query string for filtering alert feedback results. For more details, see [Query filters](https://developers.google.com/workspace/admin/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/workspace/admin/alertcenter/reference/filter-fields#alerts.feedback.list). */
  filter?: string;
  /** Required. The alert identifier. The "-" wildcard could be used to represent all alerts. */
  alertId: string;
  /** Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
  customerId?: string;
}

export const ListAlertsFeedbackRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    alertId: Schema.String.pipe(T.HttpPath("alertId")),
    customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/alerts/{alertId}/feedback" }),
    svc,
  ) as unknown as Schema.Schema<ListAlertsFeedbackRequest>;

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
  ) as unknown as Schema.Schema<GetSettingsV1beta1Request>;

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
  ) as unknown as Schema.Schema<UpdateSettingsV1beta1Request>;

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
