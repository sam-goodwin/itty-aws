// ==========================================================================
// Google Vault API (vault v1)
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
  name: "vault",
  version: "v1",
  rootUrl: "https://vault.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface CloudStorageFile {
  /** The name of the Cloud Storage bucket for the export file. You can use this value in the Cloud Storage [JSON API](https://cloud.google.com/storage/docs/json_api) or [XML API](https://cloud.google.com/storage/docs/xml-api), but not to list the bucket contents. Instead, you can [get individual export files](https://cloud.google.com/storage/docs/json_api/v1/objects/get) by object name. */
  bucketName?: string;
  /** The name of the Cloud Storage object for the export file. You can use this value in the Cloud Storage [JSON API](https://cloud.google.com/storage/docs/json_api) or [XML API](https://cloud.google.com/storage/docs/xml-api). */
  objectName?: string;
  /** The export file size. */
  size?: string;
  /** The md5 hash of the file. */
  md5Hash?: string;
}

export const CloudStorageFile: Schema.Schema<CloudStorageFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucketName: Schema.optional(Schema.String),
    objectName: Schema.optional(Schema.String),
    size: Schema.optional(Schema.String),
    md5Hash: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudStorageFile" });

export interface HeldAccount {
  /** Output only. When the account was put on hold. */
  holdTime?: string;
  /** The account ID, as provided by the [Admin SDK](https://developers.google.com/admin-sdk/). */
  accountId?: string;
  /** The primary email address of the account. If used as an input, this takes precedence over **accountId**. */
  email?: string;
  /** Output only. The first name of the account holder. */
  firstName?: string;
  /** Output only. The last name of the account holder. */
  lastName?: string;
}

export const HeldAccount: Schema.Schema<HeldAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    holdTime: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    firstName: Schema.optional(Schema.String),
    lastName: Schema.optional(Schema.String),
  }).annotate({ identifier: "HeldAccount" });

export interface ListHeldAccountsResponse {
  /** The held accounts on a hold. */
  accounts?: ReadonlyArray<HeldAccount>;
}

export const ListHeldAccountsResponse: Schema.Schema<ListHeldAccountsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accounts: Schema.optional(Schema.Array(HeldAccount)),
  }).annotate({ identifier: "ListHeldAccountsResponse" });

export interface RemoveHeldAccountsRequest {
  /** The account IDs of the accounts to remove from the hold. */
  accountIds?: ReadonlyArray<string>;
}

export const RemoveHeldAccountsRequest: Schema.Schema<RemoveHeldAccountsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RemoveHeldAccountsRequest" });

export interface CalendarExportOptions {
  /** The file format for exported text messages. */
  exportFormat?:
    | "EXPORT_FORMAT_UNSPECIFIED"
    | "MBOX"
    | "PST"
    | "ICS"
    | "XML"
    | (string & {});
}

export const CalendarExportOptions: Schema.Schema<CalendarExportOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "CalendarExportOptions" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface RemoveHeldAccountsResponse {
  /** A list of statuses for the deleted accounts. Results have the same order as the request. */
  statuses?: ReadonlyArray<Status>;
}

export const RemoveHeldAccountsResponse: Schema.Schema<RemoveHeldAccountsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statuses: Schema.optional(Schema.Array(Status)),
  }).annotate({ identifier: "RemoveHeldAccountsResponse" });

export interface SharedDriveInfo {
  /** A list of shared drive IDs, as provided by the [Drive API](https://developers.google.com/drive). */
  sharedDriveIds?: ReadonlyArray<string>;
}

export const SharedDriveInfo: Schema.Schema<SharedDriveInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sharedDriveIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SharedDriveInfo" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface UserInfo {
  /** The displayed name of the user. */
  displayName?: string;
  /** The email address of the user. */
  email?: string;
}

export const UserInfo: Schema.Schema<UserInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserInfo" });

export interface AccountCountError {
  /** Account owner. */
  account?: UserInfo;
  /** Account query error. */
  errorType?:
    | "ERROR_TYPE_UNSPECIFIED"
    | "WILDCARD_TOO_BROAD"
    | "TOO_MANY_TERMS"
    | "LOCATION_UNAVAILABLE"
    | "UNKNOWN"
    | "DEADLINE_EXCEEDED"
    | (string & {});
}

export const AccountCountError: Schema.Schema<AccountCountError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.optional(UserInfo),
    errorType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountCountError" });

export interface AccountCount {
  /** Account owner. */
  account?: UserInfo;
  /** The number of results (messages or files) found for this account. */
  count?: string;
}

export const AccountCount: Schema.Schema<AccountCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.optional(UserInfo),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountCount" });

export interface GroupsCountResult {
  /** Total number of accounts involved in this count operation. */
  queriedAccountsCount?: string;
  /** Error occurred when querying these accounts. */
  accountCountErrors?: ReadonlyArray<AccountCountError>;
  /** Total number of accounts that can be queried and have more than zero messages. */
  matchingAccountsCount?: string;
  /** When **DataScope** is **HELD_DATA**, these accounts in the request are not queried because they are not on hold. For other data scope, this field is not set. */
  nonQueryableAccounts?: ReadonlyArray<string>;
  /** Subtotal count per matching account that have more than zero messages. */
  accountCounts?: ReadonlyArray<AccountCount>;
}

export const GroupsCountResult: Schema.Schema<GroupsCountResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queriedAccountsCount: Schema.optional(Schema.String),
    accountCountErrors: Schema.optional(Schema.Array(AccountCountError)),
    matchingAccountsCount: Schema.optional(Schema.String),
    nonQueryableAccounts: Schema.optional(Schema.Array(Schema.String)),
    accountCounts: Schema.optional(Schema.Array(AccountCount)),
  }).annotate({ identifier: "GroupsCountResult" });

export interface SitesUrlInfo {
  /** A list of published site URLs. */
  urls?: ReadonlyArray<string>;
}

export const SitesUrlInfo: Schema.Schema<SitesUrlInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    urls: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SitesUrlInfo" });

export interface ExportStats {
  /** The number of messages or files to be exported. */
  totalArtifactCount?: string;
  /** The number of messages or files already processed for export. */
  exportedArtifactCount?: string;
  /** The size of export in bytes. */
  sizeInBytes?: string;
}

export const ExportStats: Schema.Schema<ExportStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalArtifactCount: Schema.optional(Schema.String),
    exportedArtifactCount: Schema.optional(Schema.String),
    sizeInBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportStats" });

export interface CloudStorageSink {
  /** Output only. The exported files in Cloud Storage. */
  files?: ReadonlyArray<CloudStorageFile>;
}

export const CloudStorageSink: Schema.Schema<CloudStorageSink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    files: Schema.optional(Schema.Array(CloudStorageFile)),
  }).annotate({ identifier: "CloudStorageSink" });

export interface HangoutsChatOptions {
  /** For searches by account or organizational unit, set to **true** to include rooms. */
  includeRooms?: boolean;
}

export const HangoutsChatOptions: Schema.Schema<HangoutsChatOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeRooms: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "HangoutsChatOptions" });

export interface GeminiOptions {}

export const GeminiOptions: Schema.Schema<GeminiOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GeminiOptions",
  });

export interface VoiceOptions {
  /** Datatypes to search */
  coveredData?: ReadonlyArray<
    | "COVERED_DATA_UNSPECIFIED"
    | "TEXT_MESSAGES"
    | "VOICEMAILS"
    | "CALL_LOGS"
    | (string & {})
  >;
}

export const VoiceOptions: Schema.Schema<VoiceOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    coveredData: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VoiceOptions" });

export interface HangoutsChatInfo {
  /** A list of Chat spaces IDs, as provided by the [Chat API](https://developers.google.com/workspace/chat). There is a limit of exporting from 500 Chat spaces per request. */
  roomId?: ReadonlyArray<string>;
}

export const HangoutsChatInfo: Schema.Schema<HangoutsChatInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    roomId: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "HangoutsChatInfo" });

export interface CalendarOptions {
  /** Matches only those events whose attendees contain all of the words in the given set. Entries in the set are considered in "and". */
  peopleQuery?: ReadonlyArray<string>;
  /** Matches only those events that do not contain any of the words in the given set in title, description, location, or attendees. Entries in the set are considered in "or". */
  minusWords?: ReadonlyArray<string>;
  /** Search the current version of the Calendar event, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC. */
  versionDate?: string;
  /** Matches only those events whose location contains all of the words in the given set. If the string contains quoted phrases, this method only matches those events whose location contain the exact phrase. Entries in the set are considered in "and". Word splitting example: ["New Zealand"] vs ["New","Zealand"] "New Zealand": matched by both "New and better Zealand": only matched by the later */
  locationQuery?: ReadonlyArray<string>;
  /** Matches only events for which the custodian gave one of these responses. If the set is empty or contains ATTENDEE_RESPONSE_UNSPECIFIED there will be no filtering on responses. */
  responseStatuses?: ReadonlyArray<
    | "ATTENDEE_RESPONSE_UNSPECIFIED"
    | "ATTENDEE_RESPONSE_NEEDS_ACTION"
    | "ATTENDEE_RESPONSE_ACCEPTED"
    | "ATTENDEE_RESPONSE_DECLINED"
    | "ATTENDEE_RESPONSE_TENTATIVE"
    | (string & {})
  >;
}

export const CalendarOptions: Schema.Schema<CalendarOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    peopleQuery: Schema.optional(Schema.Array(Schema.String)),
    minusWords: Schema.optional(Schema.Array(Schema.String)),
    versionDate: Schema.optional(Schema.String),
    locationQuery: Schema.optional(Schema.Array(Schema.String)),
    responseStatuses: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CalendarOptions" });

export interface MailOptions {
  /** Set to **true** to exclude drafts. */
  excludeDrafts?: boolean;
  /** Specifies whether the results should include encrypted content, unencrypted content, or both. Defaults to including both. */
  clientSideEncryptedOption?:
    | "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED"
    | "CLIENT_SIDE_ENCRYPTED_OPTION_ANY"
    | "CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED"
    | "CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED"
    | (string & {});
}

export const MailOptions: Schema.Schema<MailOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    excludeDrafts: Schema.optional(Schema.Boolean),
    clientSideEncryptedOption: Schema.optional(Schema.String),
  }).annotate({ identifier: "MailOptions" });

export interface OrgUnitInfo {
  /** The name of the organizational unit to search, as provided by the [Admin SDK Directory API](https://developers.google.com/admin-sdk/directory/). */
  orgUnitId?: string;
}

export const OrgUnitInfo: Schema.Schema<OrgUnitInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orgUnitId: Schema.optional(Schema.String),
  }).annotate({ identifier: "OrgUnitInfo" });

export interface DriveOptions {
  /** Search the current version of the Drive file, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC. */
  versionDate?: string;
  /** Set whether the results include only content encrypted with [Google Workspace Client-side encryption](https://support.google.com/a?p=cse_ov) content, only unencrypted content, or both. Defaults to both. Currently supported for Drive. */
  clientSideEncryptedOption?:
    | "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED"
    | "CLIENT_SIDE_ENCRYPTED_OPTION_ANY"
    | "CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED"
    | "CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED"
    | (string & {});
  /** Set to true to include Team Drive. */
  includeTeamDrives?: boolean;
  /** Set to **true** to include shared drives. */
  includeSharedDrives?: boolean;
  /** Optional. Options to include or exclude documents in shared drives. We recommend using this field over include_shared_drives. This field overrides include_shared_drives and include_team_drives when set. */
  sharedDrivesOption?:
    | "SHARED_DRIVES_OPTION_UNSPECIFIED"
    | "NOT_INCLUDED"
    | "INCLUDED_IF_ACCOUNT_IS_NOT_A_MEMBER"
    | "INCLUDED"
    | (string & {});
}

export const DriveOptions: Schema.Schema<DriveOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionDate: Schema.optional(Schema.String),
    clientSideEncryptedOption: Schema.optional(Schema.String),
    includeTeamDrives: Schema.optional(Schema.Boolean),
    includeSharedDrives: Schema.optional(Schema.Boolean),
    sharedDrivesOption: Schema.optional(Schema.String),
  }).annotate({ identifier: "DriveOptions" });

export interface AccountInfo {
  /** A set of accounts to search. */
  emails?: ReadonlyArray<string>;
}

export const AccountInfo: Schema.Schema<AccountInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    emails: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AccountInfo" });

export interface DriveDocumentIds {
  /** Required. A list of Drive document IDs. */
  ids?: ReadonlyArray<string>;
}

export const DriveDocumentIds: Schema.Schema<DriveDocumentIds> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ids: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DriveDocumentIds" });

export interface DriveDocumentInfo {
  /** Specify Drive documents by document ID. */
  documentIds?: DriveDocumentIds;
}

export const DriveDocumentInfo: Schema.Schema<DriveDocumentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentIds: Schema.optional(DriveDocumentIds),
  }).annotate({ identifier: "DriveDocumentInfo" });

export interface TeamDriveInfo {
  /** List of Team Drive IDs, as provided by the [Drive API](https://developers.google.com/drive). */
  teamDriveIds?: ReadonlyArray<string>;
}

export const TeamDriveInfo: Schema.Schema<TeamDriveInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    teamDriveIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TeamDriveInfo" });

export interface Query {
  /** The data source to search. */
  dataScope?:
    | "DATA_SCOPE_UNSPECIFIED"
    | "ALL_DATA"
    | "HELD_DATA"
    | "UNPROCESSED_DATA"
    | (string & {});
  /** Set Chat search-specific options. (read-only) */
  hangoutsChatOptions?: HangoutsChatOptions;
  /** Set Gemini search-specific options. */
  geminiOptions?: GeminiOptions;
  /** The time zone name. It should be an IANA TZ name, such as "America/Los_Angeles". For a list of time zone names, see [Time Zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For more information about how Vault uses time zones, see [the Vault help center](https://support.google.com/vault/answer/6092995#time). */
  timeZone?: string;
  /** Set Voice search-specific options. */
  voiceOptions?: VoiceOptions;
  /** Required when **SearchMethod** is **ROOM**. (read-only) */
  hangoutsChatInfo?: HangoutsChatInfo;
  /** Set Calendar search-specific options. */
  calendarOptions?: CalendarOptions;
  /** The end time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
  endTime?: string;
  /** Set Gmail search-specific options. */
  mailOptions?: MailOptions;
  /** Service-specific [search operators](https://support.google.com/vault/answer/2474474) to filter search results. */
  terms?: string;
  /** The Google Workspace service to search. */
  corpus?:
    | "CORPUS_TYPE_UNSPECIFIED"
    | "DRIVE"
    | "MAIL"
    | "GROUPS"
    | "HANGOUTS_CHAT"
    | "VOICE"
    | "CALENDAR"
    | "GEMINI"
    | (string & {});
  /** Required when **SearchMethod** is **SITES_URL**. */
  sitesUrlInfo?: SitesUrlInfo;
  /** Required when **SearchMethod** is **ORG_UNIT**. */
  orgUnitInfo?: OrgUnitInfo;
  /** The entity to search. This field replaces **searchMethod** to support shared drives. When **searchMethod** is **TEAM_DRIVE**, the response of this field is **SHARED_DRIVE**. */
  method?:
    | "SEARCH_METHOD_UNSPECIFIED"
    | "ACCOUNT"
    | "ORG_UNIT"
    | "TEAM_DRIVE"
    | "ENTIRE_ORG"
    | "ROOM"
    | "SITES_URL"
    | "SHARED_DRIVE"
    | "DRIVE_DOCUMENT"
    | (string & {});
  /** Set Drive search-specific options. */
  driveOptions?: DriveOptions;
  /** Required when **SearchMethod** is **ACCOUNT**. */
  accountInfo?: AccountInfo;
  /** The search method to use. */
  searchMethod?:
    | "SEARCH_METHOD_UNSPECIFIED"
    | "ACCOUNT"
    | "ORG_UNIT"
    | "TEAM_DRIVE"
    | "ENTIRE_ORG"
    | "ROOM"
    | "SITES_URL"
    | "SHARED_DRIVE"
    | "DRIVE_DOCUMENT"
    | (string & {});
  /** Required when **SearchMethod** is **DRIVE_DOCUMENT**. */
  driveDocumentInfo?: DriveDocumentInfo;
  /** Required when **SearchMethod** is **TEAM_DRIVE**. */
  teamDriveInfo?: TeamDriveInfo;
  /** The start time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
  startTime?: string;
  /** Required when **SearchMethod** is **SHARED_DRIVE**. */
  sharedDriveInfo?: SharedDriveInfo;
}

export const Query: Schema.Schema<Query> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataScope: Schema.optional(Schema.String),
    hangoutsChatOptions: Schema.optional(HangoutsChatOptions),
    geminiOptions: Schema.optional(GeminiOptions),
    timeZone: Schema.optional(Schema.String),
    voiceOptions: Schema.optional(VoiceOptions),
    hangoutsChatInfo: Schema.optional(HangoutsChatInfo),
    calendarOptions: Schema.optional(CalendarOptions),
    endTime: Schema.optional(Schema.String),
    mailOptions: Schema.optional(MailOptions),
    terms: Schema.optional(Schema.String),
    corpus: Schema.optional(Schema.String),
    sitesUrlInfo: Schema.optional(SitesUrlInfo),
    orgUnitInfo: Schema.optional(OrgUnitInfo),
    method: Schema.optional(Schema.String),
    driveOptions: Schema.optional(DriveOptions),
    accountInfo: Schema.optional(AccountInfo),
    searchMethod: Schema.optional(Schema.String),
    driveDocumentInfo: Schema.optional(DriveDocumentInfo),
    teamDriveInfo: Schema.optional(TeamDriveInfo),
    startTime: Schema.optional(Schema.String),
    sharedDriveInfo: Schema.optional(SharedDriveInfo),
  }).annotate({ identifier: "Query" });

export interface MailExportOptions {
  /** The file format for exported messages. */
  exportFormat?:
    | "EXPORT_FORMAT_UNSPECIFIED"
    | "MBOX"
    | "PST"
    | "ICS"
    | "XML"
    | (string & {});
  /** To export confidential mode content, set to **true**. */
  showConfidentialModeContent?: boolean;
  /** To use the new export system, set to **true**. */
  useNewExport?: boolean;
  /** Optional. To enable exporting linked Drive files, set to **true**. */
  exportLinkedDriveFiles?: boolean;
}

export const MailExportOptions: Schema.Schema<MailExportOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportFormat: Schema.optional(Schema.String),
    showConfidentialModeContent: Schema.optional(Schema.Boolean),
    useNewExport: Schema.optional(Schema.Boolean),
    exportLinkedDriveFiles: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MailExportOptions" });

export interface DriveExportOptions {
  /** To include access level information for users with [indirect access](https://support.google.com/vault/answer/6099459#metadata) to files, set to **true**. */
  includeAccessInfo?: boolean;
}

export const DriveExportOptions: Schema.Schema<DriveExportOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeAccessInfo: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DriveExportOptions" });

export interface VoiceExportOptions {
  /** The file format for exported text messages. */
  exportFormat?:
    | "EXPORT_FORMAT_UNSPECIFIED"
    | "MBOX"
    | "PST"
    | "ICS"
    | "XML"
    | (string & {});
}

export const VoiceExportOptions: Schema.Schema<VoiceExportOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "VoiceExportOptions" });

export interface GroupsExportOptions {
  /** The file format for exported messages. */
  exportFormat?:
    | "EXPORT_FORMAT_UNSPECIFIED"
    | "MBOX"
    | "PST"
    | "ICS"
    | "XML"
    | (string & {});
}

export const GroupsExportOptions: Schema.Schema<GroupsExportOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupsExportOptions" });

export interface HangoutsChatExportOptions {
  /** The file format for exported messages. */
  exportFormat?:
    | "EXPORT_FORMAT_UNSPECIFIED"
    | "MBOX"
    | "PST"
    | "ICS"
    | "XML"
    | (string & {});
}

export const HangoutsChatExportOptions: Schema.Schema<HangoutsChatExportOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "HangoutsChatExportOptions" });

export interface GeminiExportOptions {
  /** The file format for exported messages. */
  exportFormat?:
    | "EXPORT_FORMAT_UNSPECIFIED"
    | "MBOX"
    | "PST"
    | "ICS"
    | "XML"
    | (string & {});
}

export const GeminiExportOptions: Schema.Schema<GeminiExportOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "GeminiExportOptions" });

export interface ExportOptions {
  /** Options for Gmail exports. */
  mailOptions?: MailExportOptions;
  /** Options for Drive exports. */
  driveOptions?: DriveExportOptions;
  /** The requested data region for the export. */
  region?:
    | "EXPORT_REGION_UNSPECIFIED"
    | "ANY"
    | "US"
    | "EUROPE"
    | (string & {});
  /** Options for Voice exports. */
  voiceOptions?: VoiceExportOptions;
  /** Option available for Calendar export. */
  calendarOptions?: CalendarExportOptions;
  /** Options for Groups exports. */
  groupsOptions?: GroupsExportOptions;
  /** Options for Chat exports. */
  hangoutsChatOptions?: HangoutsChatExportOptions;
  /** Option available for Gemini export. */
  geminiOptions?: GeminiExportOptions;
}

export const ExportOptions: Schema.Schema<ExportOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mailOptions: Schema.optional(MailExportOptions),
    driveOptions: Schema.optional(DriveExportOptions),
    region: Schema.optional(Schema.String),
    voiceOptions: Schema.optional(VoiceExportOptions),
    calendarOptions: Schema.optional(CalendarExportOptions),
    groupsOptions: Schema.optional(GroupsExportOptions),
    hangoutsChatOptions: Schema.optional(HangoutsChatExportOptions),
    geminiOptions: Schema.optional(GeminiExportOptions),
  }).annotate({ identifier: "ExportOptions" });

export interface Export {
  /** The export name. Don't use special characters (~!$'(),;@:/?) in the name, they can prevent you from downloading exports. */
  name?: string;
  /** Output only. Details about the export progress and size. */
  stats?: ExportStats;
  /** Output only. The sink for export files in Cloud Storage. */
  cloudStorageSink?: CloudStorageSink;
  /** Output only. The generated export ID. */
  id?: string;
  /** Output only. Identifies the parent export that spawned this child export. This is only set on child exports. */
  parentExportId?: string;
  /** The query parameters used to create the export. */
  query?: Query;
  /** Output only. The status of the export. */
  status?:
    | "EXPORT_STATUS_UNSPECIFIED"
    | "COMPLETED"
    | "FAILED"
    | "IN_PROGRESS"
    | (string & {});
  /** Output only. The matter ID. */
  matterId?: string;
  /** Output only. The time when the export was created. */
  createTime?: string;
  /** Output only. The requester of the export. */
  requester?: UserInfo;
  /** Additional export options. */
  exportOptions?: ExportOptions;
}

export const Export: Schema.Schema<Export> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    stats: Schema.optional(ExportStats),
    cloudStorageSink: Schema.optional(CloudStorageSink),
    id: Schema.optional(Schema.String),
    parentExportId: Schema.optional(Schema.String),
    query: Schema.optional(Query),
    status: Schema.optional(Schema.String),
    matterId: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    requester: Schema.optional(UserInfo),
    exportOptions: Schema.optional(ExportOptions),
  }).annotate({ identifier: "Export" });

export interface MatterPermission {
  /** The account ID, as provided by the [Admin SDK](https://developers.google.com/admin-sdk/). */
  accountId?: string;
  /** The user's role for the matter. */
  role?: "ROLE_UNSPECIFIED" | "COLLABORATOR" | "OWNER" | (string & {});
}

export const MatterPermission: Schema.Schema<MatterPermission> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "MatterPermission" });

export interface Matter {
  /** The state of the matter. */
  state?: "STATE_UNSPECIFIED" | "OPEN" | "CLOSED" | "DELETED" | (string & {});
  /** The matter ID, which is generated by the server. Leave blank when creating a matter. */
  matterId?: string;
  /** Lists the users and their permission for the matter. Currently there is no programmer defined limit on the number of permissions a matter can have. */
  matterPermissions?: ReadonlyArray<MatterPermission>;
  /** Optional. The requested data region for the matter. */
  matterRegion?:
    | "MATTER_REGION_UNSPECIFIED"
    | "ANY"
    | "US"
    | "EUROPE"
    | (string & {});
  /** An optional description for the matter. */
  description?: string;
  /** The name of the matter. */
  name?: string;
}

export const Matter: Schema.Schema<Matter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    matterId: Schema.optional(Schema.String),
    matterPermissions: Schema.optional(Schema.Array(MatterPermission)),
    matterRegion: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Matter" });

export interface ReopenMatterResponse {
  /** The updated matter, with state **OPEN**. */
  matter?: Matter;
}

export const ReopenMatterResponse: Schema.Schema<ReopenMatterResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matter: Schema.optional(Matter),
  }).annotate({ identifier: "ReopenMatterResponse" });

export interface HeldGroupsQuery {
  /** The [search operators](https://support.google.com/vault/answer/2474474) used to refine the messages covered by the hold. */
  terms?: string;
  /** The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
  startTime?: string;
  /** The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
  endTime?: string;
}

export const HeldGroupsQuery: Schema.Schema<HeldGroupsQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    terms: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "HeldGroupsQuery" });

export interface CountArtifactsMetadata {
  /** Creation time of count operation. */
  startTime?: string;
  /** End time of count operation. Available when operation is done. */
  endTime?: string;
  /** The matter ID of the associated matter. */
  matterId?: string;
  /** The search query from the request. */
  query?: Query;
}

export const CountArtifactsMetadata: Schema.Schema<CountArtifactsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    matterId: Schema.optional(Schema.String),
    query: Schema.optional(Query),
  }).annotate({ identifier: "CountArtifactsMetadata" });

export interface MailCountResult {
  /** When **DataScope** is **HELD_DATA** and when account emails are passed in explicitly, the list of accounts in the request that are not queried because they are not on hold in the matter. For other data scopes, this field is not set. */
  nonQueryableAccounts?: ReadonlyArray<string>;
  /** Subtotal count per matching account that have more than zero messages. */
  accountCounts?: ReadonlyArray<AccountCount>;
  /** Total number of accounts that can be queried and have more than zero messages. */
  matchingAccountsCount?: string;
  /** Errors occurred when querying these accounts. */
  accountCountErrors?: ReadonlyArray<AccountCountError>;
  /** Total number of accounts involved in this count operation. */
  queriedAccountsCount?: string;
}

export const MailCountResult: Schema.Schema<MailCountResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nonQueryableAccounts: Schema.optional(Schema.Array(Schema.String)),
    accountCounts: Schema.optional(Schema.Array(AccountCount)),
    matchingAccountsCount: Schema.optional(Schema.String),
    accountCountErrors: Schema.optional(Schema.Array(AccountCountError)),
    queriedAccountsCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "MailCountResult" });

export interface CountArtifactsResponse {
  /** Count metrics for Groups. */
  groupsCountResult?: GroupsCountResult;
  /** Total count of messages. */
  totalCount?: string;
  /** Count metrics for Gmail and classic Hangouts. */
  mailCountResult?: MailCountResult;
}

export const CountArtifactsResponse: Schema.Schema<CountArtifactsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupsCountResult: Schema.optional(GroupsCountResult),
    totalCount: Schema.optional(Schema.String),
    mailCountResult: Schema.optional(MailCountResult),
  }).annotate({ identifier: "CountArtifactsResponse" });

export interface AddHeldAccountResult {
  /** Returned when the account was successfully created. */
  account?: HeldAccount;
  /** Reports the request status. If it failed, returns an error message. */
  status?: Status;
}

export const AddHeldAccountResult: Schema.Schema<AddHeldAccountResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.optional(HeldAccount),
    status: Schema.optional(Status),
  }).annotate({ identifier: "AddHeldAccountResult" });

export interface HeldDriveQuery {
  /** To include files in Team Drives in the hold, set to **true**. */
  includeTeamDriveFiles?: boolean;
  /** To include files in shared drives in the hold, set to **true**. */
  includeSharedDriveFiles?: boolean;
}

export const HeldDriveQuery: Schema.Schema<HeldDriveQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeTeamDriveFiles: Schema.optional(Schema.Boolean),
    includeSharedDriveFiles: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "HeldDriveQuery" });

export interface HeldVoiceQuery {
  /** A list of data types covered by the hold. Should be non-empty. Order does not matter and duplicates are ignored. */
  coveredData?: ReadonlyArray<
    | "COVERED_DATA_UNSPECIFIED"
    | "TEXT_MESSAGES"
    | "VOICEMAILS"
    | "CALL_LOGS"
    | (string & {})
  >;
}

export const HeldVoiceQuery: Schema.Schema<HeldVoiceQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    coveredData: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "HeldVoiceQuery" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface HeldOrgUnit {
  /** The organizational unit's immutable ID as provided by the [Admin SDK](https://developers.google.com/admin-sdk/). */
  orgUnitId?: string;
  /** When the organizational unit was put on hold. This property is immutable. */
  holdTime?: string;
}

export const HeldOrgUnit: Schema.Schema<HeldOrgUnit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orgUnitId: Schema.optional(Schema.String),
    holdTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "HeldOrgUnit" });

export interface HeldCalendarQuery {}

export const HeldCalendarQuery: Schema.Schema<HeldCalendarQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "HeldCalendarQuery",
  });

export interface HeldMailQuery {
  /** The [search operators](https://support.google.com/vault/answer/2474474) used to refine the messages covered by the hold. */
  terms?: string;
  /** The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
  startTime?: string;
  /** The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
  endTime?: string;
}

export const HeldMailQuery: Schema.Schema<HeldMailQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    terms: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "HeldMailQuery" });

export interface HeldHangoutsChatQuery {
  /** To include messages in Chat spaces the user was a member of, set to **true**. */
  includeRooms?: boolean;
}

export const HeldHangoutsChatQuery: Schema.Schema<HeldHangoutsChatQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeRooms: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "HeldHangoutsChatQuery" });

export interface CorpusQuery {
  /** Service-specific options for Drive holds. If set, **CorpusType** must be **DRIVE**. */
  driveQuery?: HeldDriveQuery;
  /** Service-specific options for Calendar holds. If set, **CorpusType** must be **CALENDAR**. */
  calendarQuery?: HeldCalendarQuery;
  /** Service-specific options for Groups holds. If set, **CorpusType** must be **GROUPS**. */
  groupsQuery?: HeldGroupsQuery;
  /** Service-specific options for Voice holds. If set, **CorpusType** must be **VOICE**. */
  voiceQuery?: HeldVoiceQuery;
  /** Service-specific options for Gmail holds. If set, **CorpusType** must be **MAIL**. */
  mailQuery?: HeldMailQuery;
  /** Service-specific options for Chat holds. If set, **CorpusType** must be **HANGOUTS_CHAT**. */
  hangoutsChatQuery?: HeldHangoutsChatQuery;
}

export const CorpusQuery: Schema.Schema<CorpusQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    driveQuery: Schema.optional(HeldDriveQuery),
    calendarQuery: Schema.optional(HeldCalendarQuery),
    groupsQuery: Schema.optional(HeldGroupsQuery),
    voiceQuery: Schema.optional(HeldVoiceQuery),
    mailQuery: Schema.optional(HeldMailQuery),
    hangoutsChatQuery: Schema.optional(HeldHangoutsChatQuery),
  }).annotate({ identifier: "CorpusQuery" });

export interface Hold {
  /** The name of the hold. */
  name?: string;
  /** If set, the hold applies to the specified accounts and **orgUnit** must be empty. */
  accounts?: ReadonlyArray<HeldAccount>;
  /** The last time this hold was modified. */
  updateTime?: string;
  /** If set, the hold applies to all members of the organizational unit and **accounts** must be empty. This property is mutable. For Groups holds, set **accounts**. */
  orgUnit?: HeldOrgUnit;
  /** The unique immutable ID of the hold. Assigned during creation. */
  holdId?: string;
  /** The service to be searched. */
  corpus?:
    | "CORPUS_TYPE_UNSPECIFIED"
    | "DRIVE"
    | "MAIL"
    | "GROUPS"
    | "HANGOUTS_CHAT"
    | "VOICE"
    | "CALENDAR"
    | "GEMINI"
    | (string & {});
  /** Service-specific options. If set, **CorpusQuery** must match **CorpusType**. */
  query?: CorpusQuery;
}

export const Hold: Schema.Schema<Hold> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    accounts: Schema.optional(Schema.Array(HeldAccount)),
    updateTime: Schema.optional(Schema.String),
    orgUnit: Schema.optional(HeldOrgUnit),
    holdId: Schema.optional(Schema.String),
    corpus: Schema.optional(Schema.String),
    query: Schema.optional(CorpusQuery),
  }).annotate({ identifier: "Hold" });

export interface CloseMatterRequest {}

export const CloseMatterRequest: Schema.Schema<CloseMatterRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CloseMatterRequest",
  });

export interface SavedQuery {
  /** A unique identifier for the saved query. */
  savedQueryId?: string;
  /** The name of the saved query. */
  displayName?: string;
  /** Output only. The matter ID of the matter the saved query is saved in. The server does not use this field during create and always uses matter ID in the URL. */
  matterId?: string;
  /** Output only. The server-generated timestamp when the saved query was created. */
  createTime?: string;
  /** The search parameters of the saved query. */
  query?: Query;
}

export const SavedQuery: Schema.Schema<SavedQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    savedQueryId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    matterId: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    query: Schema.optional(Query),
  }).annotate({ identifier: "SavedQuery" });

export interface RemoveMatterPermissionsRequest {
  /** The account ID. */
  accountId?: string;
}

export const RemoveMatterPermissionsRequest: Schema.Schema<RemoveMatterPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveMatterPermissionsRequest" });

export interface ListMattersResponse {
  /** Page token to retrieve the next page of results in the list. */
  nextPageToken?: string;
  /** List of matters. */
  matters?: ReadonlyArray<Matter>;
}

export const ListMattersResponse: Schema.Schema<ListMattersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    matters: Schema.optional(Schema.Array(Matter)),
  }).annotate({ identifier: "ListMattersResponse" });

export interface AddHeldAccountsResponse {
  /** The list of responses, in the same order as the batch request. */
  responses?: ReadonlyArray<AddHeldAccountResult>;
}

export const AddHeldAccountsResponse: Schema.Schema<AddHeldAccountsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(Schema.Array(AddHeldAccountResult)),
  }).annotate({ identifier: "AddHeldAccountsResponse" });

export interface AddHeldAccountsRequest {
  /** A comma-separated list of the emails of the accounts to add to the hold. Specify either **emails** or **account_ids**, but not both. */
  emails?: ReadonlyArray<string>;
  /** A comma-separated list of the account IDs of the accounts to add to the hold. Specify either **emails** or **account_ids**, but not both. */
  accountIds?: ReadonlyArray<string>;
}

export const AddHeldAccountsRequest: Schema.Schema<AddHeldAccountsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    emails: Schema.optional(Schema.Array(Schema.String)),
    accountIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AddHeldAccountsRequest" });

export interface ListSavedQueriesResponse {
  /** Page token to retrieve the next page of results in the list. If this is empty, then there are no more saved queries to list. */
  nextPageToken?: string;
  /** List of saved queries. */
  savedQueries?: ReadonlyArray<SavedQuery>;
}

export const ListSavedQueriesResponse: Schema.Schema<ListSavedQueriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    savedQueries: Schema.optional(Schema.Array(SavedQuery)),
  }).annotate({ identifier: "ListSavedQueriesResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface AddMatterPermissionsRequest {
  /** Only relevant if **sendEmails** is **true**. To CC the requestor in the email message, set to **true**. To not CC requestor, set to **false**. */
  ccMe?: boolean;
  /** The account and its role to add. */
  matterPermission?: MatterPermission;
  /** To send a notification email to the added account, set to **true**. To not send a notification email, set to **false**. */
  sendEmails?: boolean;
}

export const AddMatterPermissionsRequest: Schema.Schema<AddMatterPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ccMe: Schema.optional(Schema.Boolean),
    matterPermission: Schema.optional(MatterPermission),
    sendEmails: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AddMatterPermissionsRequest" });

export interface ListHoldsResponse {
  /** The list of holds. */
  holds?: ReadonlyArray<Hold>;
  /** Page token to retrieve the next page of results in the list. If this is empty, then there are no more holds to list. */
  nextPageToken?: string;
}

export const ListHoldsResponse: Schema.Schema<ListHoldsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    holds: Schema.optional(Schema.Array(Hold)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListHoldsResponse" });

export interface CloseMatterResponse {
  /** The updated matter, with state **CLOSED**. */
  matter?: Matter;
}

export const CloseMatterResponse: Schema.Schema<CloseMatterResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matter: Schema.optional(Matter),
  }).annotate({ identifier: "CloseMatterResponse" });

export interface CountArtifactsRequest {
  /** The search query. */
  query?: Query;
  /** Sets the granularity of the count results. */
  view?:
    | "COUNT_RESULT_VIEW_UNSPECIFIED"
    | "TOTAL_COUNT"
    | "ALL"
    | (string & {});
}

export const CountArtifactsRequest: Schema.Schema<CountArtifactsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Query),
    view: Schema.optional(Schema.String),
  }).annotate({ identifier: "CountArtifactsRequest" });

export interface ReopenMatterRequest {}

export const ReopenMatterRequest: Schema.Schema<ReopenMatterRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ReopenMatterRequest",
  });

export interface UndeleteMatterRequest {}

export const UndeleteMatterRequest: Schema.Schema<UndeleteMatterRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UndeleteMatterRequest",
  });

export interface ListExportsResponse {
  /** The list of exports. */
  exports?: ReadonlyArray<Export>;
  /** Page token to retrieve the next page of results in the list. */
  nextPageToken?: string;
}

export const ListExportsResponse: Schema.Schema<ListExportsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exports: Schema.optional(Schema.Array(Export)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListExportsResponse" });

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

export interface ListOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListOperationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("returnPartialSuccess"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<ListOperationsRequest>;

export type ListOperationsResponse_Op = ListOperationsResponse;
export const ListOperationsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListOperationsError = DefaultErrors | NotFound | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listOperations: API.PaginatedOperationMethod<
  ListOperationsRequest,
  ListOperationsResponse_Op,
  ListOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOperationsRequest,
  output: ListOperationsResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOperationsRequest>;

export type DeleteOperationsResponse = Empty;
export const DeleteOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteOperations: API.OperationMethod<
  DeleteOperationsRequest,
  DeleteOperationsResponse,
  DeleteOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOperationsRequest,
  output: DeleteOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelOperationsRequest>;

export type CancelOperationsResponse = Empty;
export const CancelOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelOperations: API.OperationMethod<
  CancelOperationsRequest,
  CancelOperationsResponse,
  CancelOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelOperationsRequest,
  output: CancelOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOperationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetOperationsRequest>;

export type GetOperationsResponse = Operation;
export const GetOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetOperationsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOperations: API.OperationMethod<
  GetOperationsRequest,
  GetOperationsResponse,
  GetOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOperationsRequest,
  output: GetOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CountMattersRequest {
  /** The matter ID. */
  matterId: string;
  /** Request body */
  body?: CountArtifactsRequest;
}

export const CountMattersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  matterId: Schema.String.pipe(T.HttpPath("matterId")),
  body: Schema.optional(CountArtifactsRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "v1/matters/{matterId}:count",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<CountMattersRequest>;

export type CountMattersResponse = Operation;
export const CountMattersResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CountMattersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Counts the accounts processed by the specified query. */
export const countMatters: API.OperationMethod<
  CountMattersRequest,
  CountMattersResponse,
  CountMattersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CountMattersRequest,
  output: CountMattersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateMattersRequest {
  /** Request body */
  body?: Matter;
}

export const CreateMattersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(Matter).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/matters", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CreateMattersRequest>;

export type CreateMattersResponse = Matter;
export const CreateMattersResponse = /*@__PURE__*/ /*#__PURE__*/ Matter;

export type CreateMattersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view. */
export const createMatters: API.OperationMethod<
  CreateMattersRequest,
  CreateMattersResponse,
  CreateMattersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateMattersRequest,
  output: CreateMattersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CloseMattersRequest {
  /** The matter ID. */
  matterId: string;
  /** Request body */
  body?: CloseMatterRequest;
}

export const CloseMattersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  matterId: Schema.String.pipe(T.HttpPath("matterId")),
  body: Schema.optional(CloseMatterRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "v1/matters/{matterId}:close",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<CloseMattersRequest>;

export type CloseMattersResponse = CloseMatterResponse;
export const CloseMattersResponse =
  /*@__PURE__*/ /*#__PURE__*/ CloseMatterResponse;

export type CloseMattersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Closes the specified matter. Returns the matter with updated state. */
export const closeMatters: API.OperationMethod<
  CloseMattersRequest,
  CloseMattersResponse,
  CloseMattersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CloseMattersRequest,
  output: CloseMattersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetMattersRequest {
  /** The matter ID. */
  matterId: string;
  /** Specifies how much information about the matter to return in the response. */
  view?: "VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
}

export const GetMattersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  matterId: Schema.String.pipe(T.HttpPath("matterId")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
}).pipe(
  T.Http({ method: "GET", path: "v1/matters/{matterId}" }),
  svc,
) as unknown as Schema.Schema<GetMattersRequest>;

export type GetMattersResponse = Matter;
export const GetMattersResponse = /*@__PURE__*/ /*#__PURE__*/ Matter;

export type GetMattersError = DefaultErrors | NotFound | Forbidden;

/** Gets the specified matter. */
export const getMatters: API.OperationMethod<
  GetMattersRequest,
  GetMattersResponse,
  GetMattersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMattersRequest,
  output: GetMattersResponse,
  errors: [NotFound, Forbidden],
}));

export interface AddPermissionsMattersRequest {
  /** The matter ID. */
  matterId: string;
  /** Request body */
  body?: AddMatterPermissionsRequest;
}

export const AddPermissionsMattersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    body: Schema.optional(AddMatterPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/matters/{matterId}:addPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddPermissionsMattersRequest>;

export type AddPermissionsMattersResponse = MatterPermission;
export const AddPermissionsMattersResponse =
  /*@__PURE__*/ /*#__PURE__*/ MatterPermission;

export type AddPermissionsMattersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds an account as a matter collaborator. */
export const addPermissionsMatters: API.OperationMethod<
  AddPermissionsMattersRequest,
  AddPermissionsMattersResponse,
  AddPermissionsMattersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddPermissionsMattersRequest,
  output: AddPermissionsMattersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReopenMattersRequest {
  /** The matter ID. */
  matterId: string;
  /** Request body */
  body?: ReopenMatterRequest;
}

export const ReopenMattersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  matterId: Schema.String.pipe(T.HttpPath("matterId")),
  body: Schema.optional(ReopenMatterRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "v1/matters/{matterId}:reopen",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<ReopenMattersRequest>;

export type ReopenMattersResponse = ReopenMatterResponse;
export const ReopenMattersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReopenMatterResponse;

export type ReopenMattersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reopens the specified matter. Returns the matter with updated state. */
export const reopenMatters: API.OperationMethod<
  ReopenMattersRequest,
  ReopenMattersResponse,
  ReopenMattersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReopenMattersRequest,
  output: ReopenMattersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemovePermissionsMattersRequest {
  /** The matter ID. */
  matterId: string;
  /** Request body */
  body?: RemoveMatterPermissionsRequest;
}

export const RemovePermissionsMattersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    body: Schema.optional(RemoveMatterPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/matters/{matterId}:removePermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemovePermissionsMattersRequest>;

export type RemovePermissionsMattersResponse = Empty;
export const RemovePermissionsMattersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type RemovePermissionsMattersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes an account as a matter collaborator. */
export const removePermissionsMatters: API.OperationMethod<
  RemovePermissionsMattersRequest,
  RemovePermissionsMattersResponse,
  RemovePermissionsMattersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemovePermissionsMattersRequest,
  output: RemovePermissionsMattersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UndeleteMattersRequest {
  /** The matter ID. */
  matterId: string;
  /** Request body */
  body?: UndeleteMatterRequest;
}

export const UndeleteMattersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    body: Schema.optional(UndeleteMatterRequest).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "v1/matters/{matterId}:undelete",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UndeleteMattersRequest>;

export type UndeleteMattersResponse = Matter;
export const UndeleteMattersResponse = /*@__PURE__*/ /*#__PURE__*/ Matter;

export type UndeleteMattersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Undeletes the specified matter. Returns the matter with updated state. */
export const undeleteMatters: API.OperationMethod<
  UndeleteMattersRequest,
  UndeleteMattersResponse,
  UndeleteMattersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UndeleteMattersRequest,
  output: UndeleteMattersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateMattersRequest {
  /** The matter ID. */
  matterId: string;
  /** Request body */
  body?: Matter;
}

export const UpdateMattersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  matterId: Schema.String.pipe(T.HttpPath("matterId")),
  body: Schema.optional(Matter).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "PUT", path: "v1/matters/{matterId}", hasBody: true }),
  svc,
) as unknown as Schema.Schema<UpdateMattersRequest>;

export type UpdateMattersResponse = Matter;
export const UpdateMattersResponse = /*@__PURE__*/ /*#__PURE__*/ Matter;

export type UpdateMattersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter. */
export const updateMatters: API.OperationMethod<
  UpdateMattersRequest,
  UpdateMattersResponse,
  UpdateMattersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateMattersRequest,
  output: UpdateMattersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteMattersRequest {
  /** The matter ID */
  matterId: string;
}

export const DeleteMattersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  matterId: Schema.String.pipe(T.HttpPath("matterId")),
}).pipe(
  T.Http({ method: "DELETE", path: "v1/matters/{matterId}" }),
  svc,
) as unknown as Schema.Schema<DeleteMattersRequest>;

export type DeleteMattersResponse = Matter;
export const DeleteMattersResponse = /*@__PURE__*/ /*#__PURE__*/ Matter;

export type DeleteMattersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified matter. Returns the matter with updated state. */
export const deleteMatters: API.OperationMethod<
  DeleteMattersRequest,
  DeleteMattersResponse,
  DeleteMattersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteMattersRequest,
  output: DeleteMattersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListMattersRequest {
  /** The number of matters to return in the response. Default and maximum are 100. */
  pageSize?: number;
  /** The pagination token as returned in the response. */
  pageToken?: string;
  /** Specifies how much information about the matter to return in response. */
  view?: "VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
  /** If set, lists only matters with the specified state. The default lists matters of all states. */
  state?: "STATE_UNSPECIFIED" | "OPEN" | "CLOSED" | "DELETED" | (string & {});
}

export const ListMattersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  state: Schema.optional(Schema.String).pipe(T.HttpQuery("state")),
}).pipe(
  T.Http({ method: "GET", path: "v1/matters" }),
  svc,
) as unknown as Schema.Schema<ListMattersRequest>;

export type ListMattersResponse_Op = ListMattersResponse;
export const ListMattersResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListMattersResponse;

export type ListMattersError = DefaultErrors | NotFound | Forbidden;

/** Lists matters the requestor has access to. */
export const listMatters: API.PaginatedOperationMethod<
  ListMattersRequest,
  ListMattersResponse_Op,
  ListMattersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListMattersRequest,
  output: ListMattersResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateMattersSavedQueriesRequest {
  /** The ID of the matter to create the saved query in. */
  matterId: string;
  /** Request body */
  body?: SavedQuery;
}

export const CreateMattersSavedQueriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    body: Schema.optional(SavedQuery).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/matters/{matterId}/savedQueries",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateMattersSavedQueriesRequest>;

export type CreateMattersSavedQueriesResponse = SavedQuery;
export const CreateMattersSavedQueriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SavedQuery;

export type CreateMattersSavedQueriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a saved query. */
export const createMattersSavedQueries: API.OperationMethod<
  CreateMattersSavedQueriesRequest,
  CreateMattersSavedQueriesResponse,
  CreateMattersSavedQueriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateMattersSavedQueriesRequest,
  output: CreateMattersSavedQueriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteMattersSavedQueriesRequest {
  /** The ID of the matter to delete the saved query from. */
  matterId: string;
  /** ID of the saved query to delete. */
  savedQueryId: string;
}

export const DeleteMattersSavedQueriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    savedQueryId: Schema.String.pipe(T.HttpPath("savedQueryId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "v1/matters/{matterId}/savedQueries/{savedQueryId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteMattersSavedQueriesRequest>;

export type DeleteMattersSavedQueriesResponse = Empty;
export const DeleteMattersSavedQueriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteMattersSavedQueriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified saved query. */
export const deleteMattersSavedQueries: API.OperationMethod<
  DeleteMattersSavedQueriesRequest,
  DeleteMattersSavedQueriesResponse,
  DeleteMattersSavedQueriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteMattersSavedQueriesRequest,
  output: DeleteMattersSavedQueriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListMattersSavedQueriesRequest {
  /** The pagination token as returned in the previous response. An empty token means start from the beginning. */
  pageToken?: string;
  /** The maximum number of saved queries to return. */
  pageSize?: number;
  /** The ID of the matter to get the saved queries for. */
  matterId: string;
}

export const ListMattersSavedQueriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/matters/{matterId}/savedQueries" }),
    svc,
  ) as unknown as Schema.Schema<ListMattersSavedQueriesRequest>;

export type ListMattersSavedQueriesResponse = ListSavedQueriesResponse;
export const ListMattersSavedQueriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSavedQueriesResponse;

export type ListMattersSavedQueriesError = DefaultErrors | NotFound | Forbidden;

/** Lists the saved queries in a matter. */
export const listMattersSavedQueries: API.PaginatedOperationMethod<
  ListMattersSavedQueriesRequest,
  ListMattersSavedQueriesResponse,
  ListMattersSavedQueriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListMattersSavedQueriesRequest,
  output: ListMattersSavedQueriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetMattersSavedQueriesRequest {
  /** The ID of the matter to get the saved query from. */
  matterId: string;
  /** ID of the saved query to retrieve. */
  savedQueryId: string;
}

export const GetMattersSavedQueriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    savedQueryId: Schema.String.pipe(T.HttpPath("savedQueryId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/matters/{matterId}/savedQueries/{savedQueryId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetMattersSavedQueriesRequest>;

export type GetMattersSavedQueriesResponse = SavedQuery;
export const GetMattersSavedQueriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SavedQuery;

export type GetMattersSavedQueriesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the specified saved query. */
export const getMattersSavedQueries: API.OperationMethod<
  GetMattersSavedQueriesRequest,
  GetMattersSavedQueriesResponse,
  GetMattersSavedQueriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMattersSavedQueriesRequest,
  output: GetMattersSavedQueriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetMattersExportsRequest {
  /** The matter ID. */
  matterId: string;
  /** The export ID. */
  exportId: string;
}

export const GetMattersExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    exportId: Schema.String.pipe(T.HttpPath("exportId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/matters/{matterId}/exports/{exportId}" }),
    svc,
  ) as unknown as Schema.Schema<GetMattersExportsRequest>;

export type GetMattersExportsResponse = Export;
export const GetMattersExportsResponse = /*@__PURE__*/ /*#__PURE__*/ Export;

export type GetMattersExportsError = DefaultErrors | NotFound | Forbidden;

/** Gets an export. */
export const getMattersExports: API.OperationMethod<
  GetMattersExportsRequest,
  GetMattersExportsResponse,
  GetMattersExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMattersExportsRequest,
  output: GetMattersExportsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateMattersExportsRequest {
  /** The matter ID. */
  matterId: string;
  /** Request body */
  body?: Export;
}

export const CreateMattersExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    body: Schema.optional(Export).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/matters/{matterId}/exports",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateMattersExportsRequest>;

export type CreateMattersExportsResponse = Export;
export const CreateMattersExportsResponse = /*@__PURE__*/ /*#__PURE__*/ Export;

export type CreateMattersExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an export. */
export const createMattersExports: API.OperationMethod<
  CreateMattersExportsRequest,
  CreateMattersExportsResponse,
  CreateMattersExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateMattersExportsRequest,
  output: CreateMattersExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteMattersExportsRequest {
  /** The matter ID. */
  matterId: string;
  /** The export ID. */
  exportId: string;
}

export const DeleteMattersExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    exportId: Schema.String.pipe(T.HttpPath("exportId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "v1/matters/{matterId}/exports/{exportId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteMattersExportsRequest>;

export type DeleteMattersExportsResponse = Empty;
export const DeleteMattersExportsResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteMattersExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an export. */
export const deleteMattersExports: API.OperationMethod<
  DeleteMattersExportsRequest,
  DeleteMattersExportsResponse,
  DeleteMattersExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteMattersExportsRequest,
  output: DeleteMattersExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListMattersExportsRequest {
  /** The matter ID. */
  matterId: string;
  /** The pagination token as returned in the response. */
  pageToken?: string;
  /** The number of exports to return in the response. */
  pageSize?: number;
}

export const ListMattersExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/matters/{matterId}/exports" }),
    svc,
  ) as unknown as Schema.Schema<ListMattersExportsRequest>;

export type ListMattersExportsResponse = ListExportsResponse;
export const ListMattersExportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListExportsResponse;

export type ListMattersExportsError = DefaultErrors | NotFound | Forbidden;

/** Lists details about the exports in the specified matter. */
export const listMattersExports: API.PaginatedOperationMethod<
  ListMattersExportsRequest,
  ListMattersExportsResponse,
  ListMattersExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListMattersExportsRequest,
  output: ListMattersExportsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteMattersHoldsRequest {
  /** The matter ID. */
  matterId: string;
  /** The hold ID. */
  holdId: string;
}

export const DeleteMattersHoldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    holdId: Schema.String.pipe(T.HttpPath("holdId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/matters/{matterId}/holds/{holdId}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteMattersHoldsRequest>;

export type DeleteMattersHoldsResponse = Empty;
export const DeleteMattersHoldsResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteMattersHoldsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged. */
export const deleteMattersHolds: API.OperationMethod<
  DeleteMattersHoldsRequest,
  DeleteMattersHoldsResponse,
  DeleteMattersHoldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteMattersHoldsRequest,
  output: DeleteMattersHoldsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListMattersHoldsRequest {
  /** The pagination token as returned in the response. An empty token means start from the beginning. */
  pageToken?: string;
  /** The number of holds to return in the response, between 0 and 100 inclusive. Leaving this empty, or as 0, is the same as **page_size** = 100. */
  pageSize?: number;
  /** The matter ID. */
  matterId: string;
  /** The amount of detail to return for a hold. */
  view?: "HOLD_VIEW_UNSPECIFIED" | "BASIC_HOLD" | "FULL_HOLD" | (string & {});
}

export const ListMattersHoldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/matters/{matterId}/holds" }),
    svc,
  ) as unknown as Schema.Schema<ListMattersHoldsRequest>;

export type ListMattersHoldsResponse = ListHoldsResponse;
export const ListMattersHoldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListHoldsResponse;

export type ListMattersHoldsError = DefaultErrors | NotFound | Forbidden;

/** Lists the holds in a matter. */
export const listMattersHolds: API.PaginatedOperationMethod<
  ListMattersHoldsRequest,
  ListMattersHoldsResponse,
  ListMattersHoldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListMattersHoldsRequest,
  output: ListMattersHoldsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateMattersHoldsRequest {
  /** The matter ID. */
  matterId: string;
  /** The ID of the hold. */
  holdId: string;
  /** Request body */
  body?: Hold;
}

export const UpdateMattersHoldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    holdId: Schema.String.pipe(T.HttpPath("holdId")),
    body: Schema.optional(Hold).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "v1/matters/{matterId}/holds/{holdId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateMattersHoldsRequest>;

export type UpdateMattersHoldsResponse = Hold;
export const UpdateMattersHoldsResponse = /*@__PURE__*/ /*#__PURE__*/ Hold;

export type UpdateMattersHoldsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored. */
export const updateMattersHolds: API.OperationMethod<
  UpdateMattersHoldsRequest,
  UpdateMattersHoldsResponse,
  UpdateMattersHoldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateMattersHoldsRequest,
  output: UpdateMattersHoldsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetMattersHoldsRequest {
  /** The amount of detail to return for a hold. */
  view?: "HOLD_VIEW_UNSPECIFIED" | "BASIC_HOLD" | "FULL_HOLD" | (string & {});
  /** The matter ID. */
  matterId: string;
  /** The hold ID. */
  holdId: string;
}

export const GetMattersHoldsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    holdId: Schema.String.pipe(T.HttpPath("holdId")),
  },
).pipe(
  T.Http({ method: "GET", path: "v1/matters/{matterId}/holds/{holdId}" }),
  svc,
) as unknown as Schema.Schema<GetMattersHoldsRequest>;

export type GetMattersHoldsResponse = Hold;
export const GetMattersHoldsResponse = /*@__PURE__*/ /*#__PURE__*/ Hold;

export type GetMattersHoldsError = DefaultErrors | NotFound | Forbidden;

/** Gets the specified hold. */
export const getMattersHolds: API.OperationMethod<
  GetMattersHoldsRequest,
  GetMattersHoldsResponse,
  GetMattersHoldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMattersHoldsRequest,
  output: GetMattersHoldsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AddHeldAccountsMattersHoldsRequest {
  /** The matter ID. */
  matterId: string;
  /** The hold ID. */
  holdId: string;
  /** Request body */
  body?: AddHeldAccountsRequest;
}

export const AddHeldAccountsMattersHoldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    holdId: Schema.String.pipe(T.HttpPath("holdId")),
    body: Schema.optional(AddHeldAccountsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/matters/{matterId}/holds/{holdId}:addHeldAccounts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddHeldAccountsMattersHoldsRequest>;

export type AddHeldAccountsMattersHoldsResponse = AddHeldAccountsResponse;
export const AddHeldAccountsMattersHoldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AddHeldAccountsResponse;

export type AddHeldAccountsMattersHoldsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold. */
export const addHeldAccountsMattersHolds: API.OperationMethod<
  AddHeldAccountsMattersHoldsRequest,
  AddHeldAccountsMattersHoldsResponse,
  AddHeldAccountsMattersHoldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddHeldAccountsMattersHoldsRequest,
  output: AddHeldAccountsMattersHoldsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemoveHeldAccountsMattersHoldsRequest {
  /** The matter ID. */
  matterId: string;
  /** The hold ID. */
  holdId: string;
  /** Request body */
  body?: RemoveHeldAccountsRequest;
}

export const RemoveHeldAccountsMattersHoldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    holdId: Schema.String.pipe(T.HttpPath("holdId")),
    body: Schema.optional(RemoveHeldAccountsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/matters/{matterId}/holds/{holdId}:removeHeldAccounts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveHeldAccountsMattersHoldsRequest>;

export type RemoveHeldAccountsMattersHoldsResponse = RemoveHeldAccountsResponse;
export const RemoveHeldAccountsMattersHoldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemoveHeldAccountsResponse;

export type RemoveHeldAccountsMattersHoldsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request. */
export const removeHeldAccountsMattersHolds: API.OperationMethod<
  RemoveHeldAccountsMattersHoldsRequest,
  RemoveHeldAccountsMattersHoldsResponse,
  RemoveHeldAccountsMattersHoldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveHeldAccountsMattersHoldsRequest,
  output: RemoveHeldAccountsMattersHoldsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateMattersHoldsRequest {
  /** The matter ID. */
  matterId: string;
  /** Request body */
  body?: Hold;
}

export const CreateMattersHoldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    body: Schema.optional(Hold).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/matters/{matterId}/holds",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateMattersHoldsRequest>;

export type CreateMattersHoldsResponse = Hold;
export const CreateMattersHoldsResponse = /*@__PURE__*/ /*#__PURE__*/ Hold;

export type CreateMattersHoldsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a hold in the specified matter. */
export const createMattersHolds: API.OperationMethod<
  CreateMattersHoldsRequest,
  CreateMattersHoldsResponse,
  CreateMattersHoldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateMattersHoldsRequest,
  output: CreateMattersHoldsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateMattersHoldsAccountsRequest {
  /** The matter ID. */
  matterId: string;
  /** The hold ID. */
  holdId: string;
  /** Request body */
  body?: HeldAccount;
}

export const CreateMattersHoldsAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    holdId: Schema.String.pipe(T.HttpPath("holdId")),
    body: Schema.optional(HeldAccount).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/matters/{matterId}/holds/{holdId}/accounts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateMattersHoldsAccountsRequest>;

export type CreateMattersHoldsAccountsResponse = HeldAccount;
export const CreateMattersHoldsAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HeldAccount;

export type CreateMattersHoldsAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned. */
export const createMattersHoldsAccounts: API.OperationMethod<
  CreateMattersHoldsAccountsRequest,
  CreateMattersHoldsAccountsResponse,
  CreateMattersHoldsAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateMattersHoldsAccountsRequest,
  output: CreateMattersHoldsAccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteMattersHoldsAccountsRequest {
  /** The matter ID. */
  matterId: string;
  /** The ID of the account to remove from the hold. */
  accountId: string;
  /** The hold ID. */
  holdId: string;
}

export const DeleteMattersHoldsAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    holdId: Schema.String.pipe(T.HttpPath("holdId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteMattersHoldsAccountsRequest>;

export type DeleteMattersHoldsAccountsResponse = Empty;
export const DeleteMattersHoldsAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteMattersHoldsAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes an account from a hold. */
export const deleteMattersHoldsAccounts: API.OperationMethod<
  DeleteMattersHoldsAccountsRequest,
  DeleteMattersHoldsAccountsResponse,
  DeleteMattersHoldsAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteMattersHoldsAccountsRequest,
  output: DeleteMattersHoldsAccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListMattersHoldsAccountsRequest {
  /** The matter ID. */
  matterId: string;
  /** The hold ID. */
  holdId: string;
}

export const ListMattersHoldsAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matterId: Schema.String.pipe(T.HttpPath("matterId")),
    holdId: Schema.String.pipe(T.HttpPath("holdId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/matters/{matterId}/holds/{holdId}/accounts",
    }),
    svc,
  ) as unknown as Schema.Schema<ListMattersHoldsAccountsRequest>;

export type ListMattersHoldsAccountsResponse = ListHeldAccountsResponse;
export const ListMattersHoldsAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListHeldAccountsResponse;

export type ListMattersHoldsAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold. */
export const listMattersHoldsAccounts: API.OperationMethod<
  ListMattersHoldsAccountsRequest,
  ListMattersHoldsAccountsResponse,
  ListMattersHoldsAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListMattersHoldsAccountsRequest,
  output: ListMattersHoldsAccountsResponse,
  errors: [NotFound, Forbidden],
}));
