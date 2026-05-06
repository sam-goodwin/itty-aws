// ==========================================================================
// Admin SDK API (admin directory_v1)
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
  name: "admin",
  version: "directory_v1",
  rootUrl: "https://admin.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface BatchChangeChromeOsDeviceStatusRequest {
  /** Required. List of the IDs of the ChromeOS devices to change. Maximum 50. */
  deviceIds?: ReadonlyArray<string>;
  /** Required. The action to take on the ChromeOS device in order to change its status. */
  changeChromeOsDeviceStatusAction?:
    | "CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_UNSPECIFIED"
    | "CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DEPROVISION"
    | "CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DISABLE"
    | "CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_REENABLE"
    | (string & {});
  /** Optional. The reason behind a device deprovision. Must be provided if 'changeChromeOsDeviceStatusAction' is set to 'CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DEPROVISION'. Otherwise, omit this field. */
  deprovisionReason?:
    | "DEPROVISION_REASON_UNSPECIFIED"
    | "DEPROVISION_REASON_SAME_MODEL_REPLACEMENT"
    | "DEPROVISION_REASON_UPGRADE"
    | "DEPROVISION_REASON_DOMAIN_MOVE"
    | "DEPROVISION_REASON_SERVICE_EXPIRATION"
    | "DEPROVISION_REASON_OTHER"
    | "DEPROVISION_REASON_DIFFERENT_MODEL_REPLACEMENT"
    | "DEPROVISION_REASON_RETIRING_DEVICE"
    | "DEPROVISION_REASON_UPGRADE_TRANSFER"
    | "DEPROVISION_REASON_NOT_REQUIRED"
    | "DEPROVISION_REASON_REPAIR_CENTER"
    | (string & {});
}

export const BatchChangeChromeOsDeviceStatusRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceIds: Schema.optional(Schema.Array(Schema.String)),
    changeChromeOsDeviceStatusAction: Schema.optional(Schema.String),
    deprovisionReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "BatchChangeChromeOsDeviceStatusRequest" });

export type UserCustomProperties = Record<string, unknown>;
export const UserCustomProperties: Schema.Schema<UserCustomProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Unknown,
  ) as any as Schema.Schema<UserCustomProperties>;

export interface UserName {
  /** The user's full name formed by concatenating the first and last name values. */
  fullName?: string;
  /** The user's last name. Required when creating a user account. */
  familyName?: string;
  /** The user's display name. Limit: 256 characters. */
  displayName?: string;
  /** The user's first name. Required when creating a user account. */
  givenName?: string;
}

export const UserName = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fullName: Schema.optional(Schema.String),
  familyName: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  givenName: Schema.optional(Schema.String),
}).annotate({ identifier: "UserName" });

export interface GuestAccountInfo {
  /** Immutable. The guest's external email. */
  primaryGuestEmail?: string;
}

export const GuestAccountInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  primaryGuestEmail: Schema.optional(Schema.String),
}).annotate({ identifier: "GuestAccountInfo" });

export interface User {
  /** Output only. The type of the API resource. For Users resources, the value is `admin#directory#user`. */
  kind?: string;
  /** Indicates if the user is forced to change their password at next login. This setting doesn't apply when [the user signs in via a third-party identity provider](https://support.google.com/a/answer/60224). */
  changePasswordAtNextLogin?: boolean;
  /** User's password */
  password?: string;
  /** Output only. The customer ID to [retrieve all account users](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users.html#get_all_users). You can use the alias `my_customer` to represent your account's `customerId`. As a reseller administrator, you can use the resold customer account's `customerId`. To get a `customerId`, use the account's primary domain in the `domain` parameter of a [users.list](https://developers.google.com/workspace/admin/directory/v1/reference/users/list) request. */
  customerId?: string;
  /** The list of the user's Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims properties can be the primary IM contact. The maximum allowed data size for this field is 2KB. */
  ims?: unknown;
  /** Notes for the user. */
  notes?: unknown;
  /** The list of the user's phone numbers. The maximum allowed data size for this field is 1KB. */
  phones?: unknown;
  /** The list of [POSIX](https://www.opengroup.org/austin/papers/posix_faq.html) account information for the user. */
  posixAccounts?: unknown;
  /** Output only. Has the reason a user account is suspended either by the administrator or by Google at the time of suspension. The property is returned only if the `suspended` property is `true`. */
  suspensionReason?: string;
  /** Output only. This property is `true` if the user has completed an initial login and accepted the Terms of Service agreement. */
  agreedToTerms?: boolean;
  /** Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988). */
  includeInGlobalAddressList?: boolean;
  /** The user's languages. The maximum allowed data size for this field is 1KB. */
  languages?: unknown;
  /** The user's websites. The maximum allowed data size for this field is 2KB. */
  websites?: unknown;
  /** The list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is 2KB. */
  externalIds?: unknown;
  /** Custom fields of the user. The key is a `schema_name` and its values are `'field_name': 'field_value'`. */
  customSchemas?: Record<string, UserCustomProperties>;
  /** Output only. The list of the user's alias email addresses. */
  aliases?: ReadonlyArray<string>;
  /** Output only. ETag of the resource. */
  etag?: string;
  /** Output only. Is 2-step verification enforced (Read-only) */
  isEnforcedIn2Sv?: boolean;
  /** The list of the user's keywords. The maximum allowed data size for this field is 1KB. */
  keywords?: unknown;
  /** Indicates if user is suspended. */
  suspended?: boolean;
  /** The user's primary email address. This property is required in a request to create a user account. The `primaryEmail` must be unique and cannot be an alias of another user. */
  primaryEmail?: string;
  /** Output only. Indicates if the user is a delegated administrator. Delegated administrators are supported by the API but cannot create or undelete users, or make users administrators. These requests are ignored by the API service. Roles and privileges for administrators are assigned using the [Admin console](https://support.google.com/a/answer/33325). */
  isDelegatedAdmin?: boolean;
  /** Output only. Is enrolled in 2-step verification (Read-only) */
  isEnrolledIn2Sv?: boolean;
  /** Immutable. Indicates if the inserted user is a guest. */
  isGuestUser?: boolean;
  /** Output only. Indicates a user with super administrator privileges. The `isAdmin` property can only be edited in the [Make a user an administrator](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users.html#make_admin) operation ( [makeAdmin](https://developers.google.com/workspace/admin/directory/v1/reference/users/makeAdmin.html) method). If edited in the user [insert](https://developers.google.com/workspace/admin/directory/v1/reference/users/insert.html) or [update](https://developers.google.com/workspace/admin/directory/v1/reference/users/update.html) methods, the edit is ignored by the API service. */
  isAdmin?: boolean;
  /** Indicates if user is archived. */
  archived?: boolean;
  /** Stores the hash format of the `password` property. The following `hashFunction` values are allowed: * `MD5` - Accepts simple hex-encoded values. * `SHA-1` - Accepts simple hex-encoded values. * `crypt` - Compliant with the [C crypt library](https://en.wikipedia.org/wiki/Crypt_%28C%29). Supports the DES, MD5 (hash prefix `$1$`), SHA-256 (hash prefix `$5$`), and SHA-512 (hash prefix `$6$`) hash algorithms. If rounds are specified as part of the prefix, they must be 10,000 or fewer. */
  hashFunction?: string;
  /** If `true`, the user's IP address is subject to a deprecated IP address [`allowlist`](https://support.google.com/a/answer/60752) configuration. */
  ipWhitelisted?: boolean;
  /** Holds the given and family names of the user, and the read-only `fullName` value. The maximum number of characters in the `givenName` and in the `familyName` values is 60. In addition, name values support unicode/UTF-8 characters, and can contain spaces, letters (a-z), numbers (0-9), dashes (-), forward slashes (/), and periods (.). For more information about character usage rules, see the [administration help center](https://support.google.com/a/answer/9193374). Maximum allowed data size for this field is 1KB. */
  name?: UserName;
  /** Output only. The URL of the user's profile photo. The URL might be temporary or private. */
  thumbnailPhotoUrl?: string;
  /** The list of organizations the user belongs to. The maximum allowed data size for this field is 10KB. */
  organizations?: unknown;
  /** Output only. ETag of the user's photo (Read-only) */
  thumbnailPhotoEtag?: string;
  /** Immutable. Additional guest-related metadata fields */
  guestAccountInfo?: GuestAccountInfo;
  /** The list of the user's relationships to other users. The maximum allowed data size for this field is 2KB. */
  relations?: unknown;
  /** Output only. The list of the user's non-editable alias email addresses. These are typically outside the account's primary domain or sub-domain. */
  nonEditableAliases?: ReadonlyArray<string>;
  /** Recovery email of the user. */
  recoveryEmail?: string;
  /** User's G Suite account creation time. (Read-only) */
  creationTime?: string;
  deletionTime?: string;
  /** The user's gender. The maximum allowed data size for this field is 1KB. */
  gender?: unknown;
  /** The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (`/`). */
  orgUnitPath?: string;
  /** Output only. Indicates if the user's Google mailbox is created. This property is only applicable if the user has been assigned a Gmail license. */
  isMailboxSetup?: boolean;
  /** A list of SSH public keys. */
  sshPublicKeys?: unknown;
  /** The user's locations. The maximum allowed data size for this field is 10KB. */
  locations?: unknown;
  /** The list of the user's email addresses. The maximum allowed data size for this field is 10KB. This excludes `publicKeyEncryptionCertificates`. */
  emails?: unknown;
  /** User's last login time. (Read-only) */
  lastLoginTime?: string;
  /** Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*. */
  recoveryPhone?: string;
  /** The unique ID for the user. A user `id` can be used as a user request URI's `userKey`. */
  id?: string;
  /** The list of the user's addresses. The maximum allowed data size for this field is 10KB. */
  addresses?: unknown;
}

export const User = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  changePasswordAtNextLogin: Schema.optional(Schema.Boolean),
  password: Schema.optional(Schema.String),
  customerId: Schema.optional(Schema.String),
  ims: Schema.optional(Schema.Unknown),
  notes: Schema.optional(Schema.Unknown),
  phones: Schema.optional(Schema.Unknown),
  posixAccounts: Schema.optional(Schema.Unknown),
  suspensionReason: Schema.optional(Schema.String),
  agreedToTerms: Schema.optional(Schema.Boolean),
  includeInGlobalAddressList: Schema.optional(Schema.Boolean),
  languages: Schema.optional(Schema.Unknown),
  websites: Schema.optional(Schema.Unknown),
  externalIds: Schema.optional(Schema.Unknown),
  customSchemas: Schema.optional(
    Schema.Record(Schema.String, UserCustomProperties),
  ),
  aliases: Schema.optional(Schema.Array(Schema.String)),
  etag: Schema.optional(Schema.String),
  isEnforcedIn2Sv: Schema.optional(Schema.Boolean),
  keywords: Schema.optional(Schema.Unknown),
  suspended: Schema.optional(Schema.Boolean),
  primaryEmail: Schema.optional(Schema.String),
  isDelegatedAdmin: Schema.optional(Schema.Boolean),
  isEnrolledIn2Sv: Schema.optional(Schema.Boolean),
  isGuestUser: Schema.optional(Schema.Boolean),
  isAdmin: Schema.optional(Schema.Boolean),
  archived: Schema.optional(Schema.Boolean),
  hashFunction: Schema.optional(Schema.String),
  ipWhitelisted: Schema.optional(Schema.Boolean),
  name: Schema.optional(UserName),
  thumbnailPhotoUrl: Schema.optional(Schema.String),
  organizations: Schema.optional(Schema.Unknown),
  thumbnailPhotoEtag: Schema.optional(Schema.String),
  guestAccountInfo: Schema.optional(GuestAccountInfo),
  relations: Schema.optional(Schema.Unknown),
  nonEditableAliases: Schema.optional(Schema.Array(Schema.String)),
  recoveryEmail: Schema.optional(Schema.String),
  creationTime: Schema.optional(Schema.String),
  deletionTime: Schema.optional(Schema.String),
  gender: Schema.optional(Schema.Unknown),
  orgUnitPath: Schema.optional(Schema.String),
  isMailboxSetup: Schema.optional(Schema.Boolean),
  sshPublicKeys: Schema.optional(Schema.Unknown),
  locations: Schema.optional(Schema.Unknown),
  emails: Schema.optional(Schema.Unknown),
  lastLoginTime: Schema.optional(Schema.String),
  recoveryPhone: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  addresses: Schema.optional(Schema.Unknown),
}).annotate({ identifier: "User" });

export interface UserAddress {
  /** Formatted address. */
  formatted?: string;
  /** Locality. */
  locality?: string;
  /** User supplied address was structured. Structured addresses are NOT supported at this time. You might be able to write structured addresses but any values will eventually be clobbered. */
  sourceIsStructured?: boolean;
  /** Country code. */
  countryCode?: string;
  /** Extended Address. */
  extendedAddress?: string;
  /** Each entry can have a type which indicates standard values of that entry. For example address could be of home work etc. In addition to the standard type an entry can have a custom type and can take any value. Such type should have the CUSTOM value as type and also have a customType value. */
  type?: string;
  /** Custom type. */
  customType?: string;
  /** Street. */
  streetAddress?: string;
  /** Country. */
  country?: string;
  /** Other parts of address. */
  poBox?: string;
  /** Postal code. */
  postalCode?: string;
  /** If this is user's primary address. Only one entry could be marked as primary. */
  primary?: boolean;
  /** Region. */
  region?: string;
}

export const UserAddress = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  formatted: Schema.optional(Schema.String),
  locality: Schema.optional(Schema.String),
  sourceIsStructured: Schema.optional(Schema.Boolean),
  countryCode: Schema.optional(Schema.String),
  extendedAddress: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  customType: Schema.optional(Schema.String),
  streetAddress: Schema.optional(Schema.String),
  country: Schema.optional(Schema.String),
  poBox: Schema.optional(Schema.String),
  postalCode: Schema.optional(Schema.String),
  primary: Schema.optional(Schema.Boolean),
  region: Schema.optional(Schema.String),
}).annotate({ identifier: "UserAddress" });

export interface DirectoryChromeosdevicesCommandResult {
  /** The error message with a short explanation as to why the command failed. Only present if the command failed. */
  errorMessage?: string;
  /** The payload for the command result. The following commands respond with a payload: * `DEVICE_START_CRD_SESSION`: Payload is a stringified JSON object in the form: { "url": url }. The provided URL links to the Chrome Remote Desktop session and requires authentication using only the `email` associated with the command's issuance. * `FETCH_CRD_AVAILABILITY_INFO`: Payload is a stringified JSON object in the form: { "deviceIdleTimeInSeconds": number, "userSessionType": string, "remoteSupportAvailability": string, "remoteAccessAvailability": string }. The "remoteSupportAvailability" field is set to "AVAILABLE" if `shared` CRD session to the device is available. The "remoteAccessAvailability" field is set to "AVAILABLE" if `private` CRD session to the device is available. */
  commandResultPayload?: string;
  /** The time at which the command was executed or failed to execute. */
  executeTime?: string;
  /** The result of the command. */
  result?:
    | "COMMAND_RESULT_TYPE_UNSPECIFIED"
    | "IGNORED"
    | "FAILURE"
    | "SUCCESS"
    | (string & {});
}

export const DirectoryChromeosdevicesCommandResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorMessage: Schema.optional(Schema.String),
    commandResultPayload: Schema.optional(Schema.String),
    executeTime: Schema.optional(Schema.String),
    result: Schema.optional(Schema.String),
  }).annotate({ identifier: "DirectoryChromeosdevicesCommandResult" });

export interface DirectoryChromeosdevicesCommand {
  /** The payload that the command specified, if any. */
  payload?: string;
  /** Unique ID of a device command. */
  commandId?: string;
  /** The time at which the command will expire. If the device doesn't execute the command within this time the command will become expired. */
  commandExpireTime?: string;
  /** The result of the command execution. */
  commandResult?: DirectoryChromeosdevicesCommandResult;
  /** Indicates the command state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "EXPIRED"
    | "CANCELLED"
    | "SENT_TO_CLIENT"
    | "ACKED_BY_CLIENT"
    | "EXECUTED_BY_CLIENT"
    | (string & {});
  /** The timestamp when the command was issued by the admin. */
  issueTime?: string;
  /** The type of the command. */
  type?:
    | "COMMAND_TYPE_UNSPECIFIED"
    | "REBOOT"
    | "TAKE_A_SCREENSHOT"
    | "SET_VOLUME"
    | "WIPE_USERS"
    | "REMOTE_POWERWASH"
    | "DEVICE_START_CRD_SESSION"
    | "CAPTURE_LOGS"
    | "FETCH_CRD_AVAILABILITY_INFO"
    | "FETCH_SUPPORT_PACKET"
    | (string & {});
}

export const DirectoryChromeosdevicesCommand =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payload: Schema.optional(Schema.String),
    commandId: Schema.optional(Schema.String),
    commandExpireTime: Schema.optional(Schema.String),
    commandResult: Schema.optional(DirectoryChromeosdevicesCommandResult),
    state: Schema.optional(Schema.String),
    issueTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "DirectoryChromeosdevicesCommand" });

export interface Token {
  /** Whether the application is registered with Google. The value is `true` if the application has an anonymous Client ID. */
  anonymous?: boolean;
  /** The Client ID of the application the token is issued to. */
  clientId?: string;
  /** A list of authorization scopes the application is granted. */
  scopes?: ReadonlyArray<string>;
  /** The type of the API resource. This is always `admin#directory#token`. */
  kind?: string;
  /** The unique ID of the user that issued the token. */
  userKey?: string;
  /** ETag of the resource. */
  etag?: string;
  /** Whether the token is issued to an installed application. The value is `true` if the application is installed to a desktop or mobile device. */
  nativeApp?: boolean;
  /** The displayable name of the application the token is issued to. */
  displayText?: string;
}

export const Token = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  anonymous: Schema.optional(Schema.Boolean),
  clientId: Schema.optional(Schema.String),
  scopes: Schema.optional(Schema.Array(Schema.String)),
  kind: Schema.optional(Schema.String),
  userKey: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  nativeApp: Schema.optional(Schema.Boolean),
  displayText: Schema.optional(Schema.String),
}).annotate({ identifier: "Token" });

export interface UserKeyword {
  /** Custom Type. */
  customType?: string;
  /** Each entry can have a type which indicates standard type of that entry. For example keyword could be of type occupation or outlook. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. */
  type?: string;
  /** Keyword. */
  value?: string;
}

export const UserKeyword = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customType: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "UserKeyword" });

export interface UserOrganization {
  /** The domain to which the organization belongs to. */
  domain?: string;
  /** Symbol of the organization. */
  symbol?: string;
  /** Title (designation) of the user in the organization. */
  title?: string;
  /** If it user's primary organization. */
  primary?: boolean;
  /** Department within the organization. */
  department?: string;
  /** Each entry can have a type which indicates standard types of that entry. For example organization could be of school work etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a CustomType value. */
  type?: string;
  /** Description of the organization. */
  description?: string;
  /** Location of the organization. This need not be fully qualified address. */
  location?: string;
  /** The cost center of the users department. */
  costCenter?: string;
  /** The full-time equivalent millipercent within the organization (100000 = 100%). */
  fullTimeEquivalent?: number;
  /** Name of the organization */
  name?: string;
  /** Custom type. */
  customType?: string;
}

export const UserOrganization = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domain: Schema.optional(Schema.String),
  symbol: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  primary: Schema.optional(Schema.Boolean),
  department: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  costCenter: Schema.optional(Schema.String),
  fullTimeEquivalent: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  customType: Schema.optional(Schema.String),
}).annotate({ identifier: "UserOrganization" });

export interface SchemaFieldSpec {
  /** The name of the field. */
  fieldName?: string;
  /** The type of the field. */
  fieldType?: string;
  /** Boolean specifying whether the field is indexed or not. Default: `true`. */
  indexed?: boolean;
  /** Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the `numericIndexingSpec` allows range queries to be supported. */
  numericIndexingSpec?: { minValue?: number; maxValue?: number };
  /** The ETag of the field. */
  etag?: string;
  /** The unique identifier of the field (Read-only) */
  fieldId?: string;
  /** Display Name of the field. */
  displayName?: string;
  /** Specifies who can view values of this field. See [Retrieve users as a non-administrator](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin) for more information. Note: It may take up to 24 hours for changes to this field to be reflected. */
  readAccessType?: string;
  /** A boolean specifying whether this is a multi-valued field or not. Default: `false`. */
  multiValued?: boolean;
  /** The kind of resource this is. For schema fields this is always `admin#directory#schema#fieldspec`. */
  kind?: string;
}

export const SchemaFieldSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fieldName: Schema.optional(Schema.String),
  fieldType: Schema.optional(Schema.String),
  indexed: Schema.optional(Schema.Boolean),
  numericIndexingSpec: Schema.optional(
    Schema.Struct({
      minValue: Schema.optional(Schema.Number),
      maxValue: Schema.optional(Schema.Number),
    }),
  ),
  etag: Schema.optional(Schema.String),
  fieldId: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  readAccessType: Schema.optional(Schema.String),
  multiValued: Schema.optional(Schema.Boolean),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "SchemaFieldSpec" });

export interface Admin_Schema {
  /** The schema's name. Each `schema_name` must be unique within a customer. Reusing a name results in a `409: Entity already exists` error. */
  schemaName?: string;
  /** The unique identifier of the schema (Read-only) */
  schemaId?: string;
  /** Display name for the schema. */
  displayName?: string;
  /** Kind of resource this is. */
  kind?: string;
  /** A list of fields in the schema. */
  fields?: ReadonlyArray<SchemaFieldSpec>;
  /** The ETag of the resource. */
  etag?: string;
}

export const Admin_Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  schemaName: Schema.optional(Schema.String),
  schemaId: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  fields: Schema.optional(Schema.Array(SchemaFieldSpec)),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "Admin_Schema" });

export interface Schemas {
  /** ETag of the resource. */
  etag?: string;
  /** Kind of resource this is. */
  kind?: string;
  /** A list of UserSchema objects. */
  schemas?: ReadonlyArray<Admin_Schema>;
}

export const Schemas = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  schemas: Schema.optional(Schema.Array(Admin_Schema)),
}).annotate({ identifier: "Schemas" });

export interface Tokens {
  /** The type of the API resource. This is always `admin#directory#tokenList`. */
  kind?: string;
  /** A list of Token resources. */
  items?: ReadonlyArray<Token>;
  /** ETag of the resource. */
  etag?: string;
}

export const Tokens = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Token)),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "Tokens" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.Number),
  message: Schema.optional(Schema.String),
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
}).annotate({ identifier: "Status" });

export interface PrintServer {
  /** Immutable. ID of the print server. Leave empty when creating. */
  id?: string;
  /** Identifier. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}` */
  name?: string;
  /** Output only. Time when the print server was created. */
  createTime?: string;
  /** Editable. Print server URI. */
  uri?: string;
  /** Editable. Display name of the print server (as shown in the Admin console). */
  displayName?: string;
  /** Editable. Description of the print server (as shown in the Admin console). */
  description?: string;
  /** ID of the organization unit (OU) that owns this print server. This value can only be set when the print server is initially created. If it's not populated, the print server is placed under the root OU. The `org_unit_id` can be retrieved using the [Directory API](https://developers.google.com/workspace/admin/directory/reference/rest/v1/orgunits). */
  orgUnitId?: string;
}

export const PrintServer = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  uri: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  orgUnitId: Schema.optional(Schema.String),
}).annotate({ identifier: "PrintServer" });

export interface PrintServerFailureInfo {
  /** Canonical code for why the update failed to apply. */
  errorCode?:
    | "OK"
    | "CANCELLED"
    | "UNKNOWN"
    | "INVALID_ARGUMENT"
    | "DEADLINE_EXCEEDED"
    | "NOT_FOUND"
    | "ALREADY_EXISTS"
    | "PERMISSION_DENIED"
    | "UNAUTHENTICATED"
    | "RESOURCE_EXHAUSTED"
    | "FAILED_PRECONDITION"
    | "ABORTED"
    | "OUT_OF_RANGE"
    | "UNIMPLEMENTED"
    | "INTERNAL"
    | "UNAVAILABLE"
    | "DATA_LOSS"
    | (string & {});
  /** ID of a failed print server. */
  printServerId?: string;
  /** Failed print server. */
  printServer?: PrintServer;
  /** Failure reason message. */
  errorMessage?: string;
}

export const PrintServerFailureInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    errorCode: Schema.optional(Schema.String),
    printServerId: Schema.optional(Schema.String),
    printServer: Schema.optional(PrintServer),
    errorMessage: Schema.optional(Schema.String),
  },
).annotate({ identifier: "PrintServerFailureInfo" });

export interface UserExternalId {
  /** The value of the id. */
  value?: string;
  /** Custom type. */
  customType?: string;
  /** The type of the Id. */
  type?: string;
}

export const UserExternalId = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  customType: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "UserExternalId" });

export interface AuxiliaryMessage {
  /** Human readable message in English. Example: "Given printer is invalid or no longer supported." */
  auxiliaryMessage?: string;
  /** Message severity */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "SEVERITY_INFO"
    | "SEVERITY_WARNING"
    | "SEVERITY_ERROR"
    | (string & {});
  /** Field that this message concerns. */
  fieldMask?: string;
}

export const AuxiliaryMessage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  auxiliaryMessage: Schema.optional(Schema.String),
  severity: Schema.optional(Schema.String),
  fieldMask: Schema.optional(Schema.String),
}).annotate({ identifier: "AuxiliaryMessage" });

export interface Printer {
  /** Output only. Time when printer was created. */
  createTime?: string;
  /** Editable. Printer URI. */
  uri?: string;
  /** Id of the printer. (During printer creation leave empty) */
  id?: string;
  /** Output only. Auxiliary messages about issues with the printer configuration if any. */
  auxiliaryMessages?: ReadonlyArray<AuxiliaryMessage>;
  /** Identifier. The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty) */
  name?: string;
  /** Editable. Make and model of printer. e.g. Lexmark MS610de Value must be in format as seen in ListPrinterModels response. */
  makeAndModel?: string;
  /** Editable. flag to use driverless configuration or not. If it's set to be true, make_and_model can be ignored */
  useDriverlessConfig?: boolean;
  /** Editable. Name of printer. */
  displayName?: string;
  /** Editable. Description of printer. */
  description?: string;
  /** Organization Unit that owns this printer (Only can be set during Printer creation) */
  orgUnitId?: string;
}

export const Printer = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createTime: Schema.optional(Schema.String),
  uri: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  auxiliaryMessages: Schema.optional(Schema.Array(AuxiliaryMessage)),
  name: Schema.optional(Schema.String),
  makeAndModel: Schema.optional(Schema.String),
  useDriverlessConfig: Schema.optional(Schema.Boolean),
  displayName: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  orgUnitId: Schema.optional(Schema.String),
}).annotate({ identifier: "Printer" });

export interface FailureInfo {
  /** Failure reason message. */
  errorMessage?: string;
  /** Id of a failed printer. */
  printerId?: string;
  /** Failed printer. */
  printer?: Printer;
  /** Canonical code for why the update failed to apply. */
  errorCode?:
    | "OK"
    | "CANCELLED"
    | "UNKNOWN"
    | "INVALID_ARGUMENT"
    | "DEADLINE_EXCEEDED"
    | "NOT_FOUND"
    | "ALREADY_EXISTS"
    | "PERMISSION_DENIED"
    | "UNAUTHENTICATED"
    | "RESOURCE_EXHAUSTED"
    | "FAILED_PRECONDITION"
    | "ABORTED"
    | "OUT_OF_RANGE"
    | "UNIMPLEMENTED"
    | "INTERNAL"
    | "UNAVAILABLE"
    | "DATA_LOSS"
    | (string & {});
}

export const FailureInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  errorMessage: Schema.optional(Schema.String),
  printerId: Schema.optional(Schema.String),
  printer: Schema.optional(Printer),
  errorCode: Schema.optional(Schema.String),
}).annotate({ identifier: "FailureInfo" });

export interface Channel {
  /** A UUID or similar unique string that identifies this channel. */
  id?: string;
  /** Additional parameters controlling delivery channel behavior. Optional. For example, `params.ttl` specifies the time-to-live in seconds for the notification channel, where the default is 2 hours and the maximum TTL is 2 days. */
  params?: Record<string, string>;
  /** An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
  token?: string;
  /** The address where notifications are delivered for this channel. */
  address?: string;
  /** The type of delivery mechanism used for this channel. */
  type?: string;
  /** An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
  resourceId?: string;
  /** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
  expiration?: string;
  /** Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`. */
  kind?: string;
  /** A Boolean value to indicate whether payload is wanted. Optional. */
  payload?: boolean;
  /** A version-specific identifier for the watched resource. */
  resourceUri?: string;
}

export const Channel = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  params: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  token: Schema.optional(Schema.String),
  address: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  resourceId: Schema.optional(Schema.String),
  expiration: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  payload: Schema.optional(Schema.Boolean),
  resourceUri: Schema.optional(Schema.String),
}).annotate({ identifier: "Channel" });

export interface UserSshPublicKey {
  /** An SSH public key. */
  key?: string;
  /** A SHA-256 fingerprint of the SSH public key. (Read-only) */
  fingerprint?: string;
  /** An expiration time in microseconds since epoch. */
  expirationTimeUsec?: string;
}

export const UserSshPublicKey = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  key: Schema.optional(Schema.String),
  fingerprint: Schema.optional(Schema.String),
  expirationTimeUsec: Schema.optional(Schema.String),
}).annotate({ identifier: "UserSshPublicKey" });

export interface UserPosixAccount {
  /** System identifier for which account Username or Uid apply to. */
  systemId?: string;
  /** A POSIX account field identifier. */
  accountId?: string;
  /** The username of the account. */
  username?: string;
  /** The default group ID. */
  gid?: string;
  /** The POSIX compliant user ID. */
  uid?: string;
  /** The GECOS (user information) for this account. */
  gecos?: string;
  /** The path to the home directory for this account. */
  homeDirectory?: string;
  /** The path to the login shell for this account. */
  shell?: string;
  /** The operating system type for this account. */
  operatingSystemType?: string;
  /** If this is user's primary account within the SystemId. */
  primary?: boolean;
}

export const UserPosixAccount = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  systemId: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  gid: Schema.optional(Schema.String),
  uid: Schema.optional(Schema.String),
  gecos: Schema.optional(Schema.String),
  homeDirectory: Schema.optional(Schema.String),
  shell: Schema.optional(Schema.String),
  operatingSystemType: Schema.optional(Schema.String),
  primary: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "UserPosixAccount" });

export interface VerificationCode {
  /** The obfuscated unique ID of the user. */
  userId?: string;
  /** A current verification code for the user. Invalidated or used verification codes are not returned as part of the result. */
  verificationCode?: string;
  /** The type of the resource. This is always `admin#directory#verificationCode`. */
  kind?: string;
  /** ETag of the resource. */
  etag?: string;
}

export const VerificationCode = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userId: Schema.optional(Schema.String),
  verificationCode: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "VerificationCode" });

export interface UserAbout {
  /** About entry can have a type which indicates the content type. It can either be plain or html. By default, notes contents are assumed to contain plain text. */
  contentType?: string;
  /** Actual value of notes. */
  value?: string;
}

export const UserAbout = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  contentType: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "UserAbout" });

export interface MobileDeviceAction {
  /** The action to be performed on the device. */
  action?: string;
}

export const MobileDeviceAction = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  action: Schema.optional(Schema.String),
}).annotate({ identifier: "MobileDeviceAction" });

export interface Asp {
  /** The unique ID of the ASP. */
  codeId?: number;
  /** The unique ID of the user who issued the ASP. */
  userKey?: string;
  /** ETag of the ASP. */
  etag?: string;
  /** The time when the ASP was created. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. */
  creationTime?: string;
  /** The type of the API resource. This is always `admin#directory#asp`. */
  kind?: string;
  /** The name of the application that the user, represented by their `userId`, entered when the ASP was created. */
  name?: string;
  /** The time when the ASP was last used. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. */
  lastTimeUsed?: string;
}

export const Asp = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  codeId: Schema.optional(Schema.Number),
  userKey: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  creationTime: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  lastTimeUsed: Schema.optional(Schema.String),
}).annotate({ identifier: "Asp" });

export interface Asps {
  /** ETag of the resource. */
  etag?: string;
  /** The type of the API resource. This is always `admin#directory#aspList`. */
  kind?: string;
  /** A list of ASP resources. */
  items?: ReadonlyArray<Asp>;
}

export const Asps = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Asp)),
}).annotate({ identifier: "Asps" });

export interface Group {
  /** Read-only. The list of a group's alias email addresses. To add, update, or remove a group's aliases, use the `groups.aliases` methods. If edited in a group's POST or PUT request, the edit is ignored. */
  aliases?: ReadonlyArray<string>;
  /** The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The `email` must be unique. This property is required when creating a group. Group email addresses are subject to the same character usage rules as usernames, see the [help center](https://support.google.com/a/answer/9193374) for details. */
  email?: string;
  /** The number of users that are direct members of the group. If a group is a member (child) of this group (the parent), members of the child group are not counted in the `directMembersCount` property of the parent group. */
  directMembersCount?: string;
  /** The type of the API resource. For Groups resources, the value is `admin#directory#group`. */
  kind?: string;
  /** Read-only. The unique ID of a group. A group `id` can be used as a group request URI's `groupKey`. */
  id?: string;
  /** The group's display name. */
  name?: string;
  /** Read-only. The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains. These are functioning email addresses used by the group. This is a read-only property returned in the API's response for a group. If edited in a group's POST or PUT request, the edit is ignored. */
  nonEditableAliases?: ReadonlyArray<string>;
  /** An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups. Maximum length is `4,096` characters. */
  description?: string;
  /** ETag of the resource. */
  etag?: string;
  /** Read-only. Value is `true` if this group was created by an administrator rather than a user. */
  adminCreated?: boolean;
}

export const Group = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aliases: Schema.optional(Schema.Array(Schema.String)),
  email: Schema.optional(Schema.String),
  directMembersCount: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  nonEditableAliases: Schema.optional(Schema.Array(Schema.String)),
  description: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  adminCreated: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Group" });

export interface ChangeChromeOsDeviceStatusSucceeded {}

export const ChangeChromeOsDeviceStatusSucceeded =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ChangeChromeOsDeviceStatusSucceeded",
  });

export interface ChangeChromeOsDeviceStatusResult {
  /** The error result of the operation in case of failure. */
  error?: Status;
  /** The device could change its status successfully. */
  response?: ChangeChromeOsDeviceStatusSucceeded;
  /** The unique ID of the ChromeOS device. */
  deviceId?: string;
}

export const ChangeChromeOsDeviceStatusResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    response: Schema.optional(ChangeChromeOsDeviceStatusSucceeded),
    deviceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChangeChromeOsDeviceStatusResult" });

export interface BatchChangeChromeOsDeviceStatusResponse {
  /** The results for each of the ChromeOS devices provided in the request. */
  changeChromeOsDeviceStatusResults?: ReadonlyArray<ChangeChromeOsDeviceStatusResult>;
}

export const BatchChangeChromeOsDeviceStatusResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    changeChromeOsDeviceStatusResults: Schema.optional(
      Schema.Array(ChangeChromeOsDeviceStatusResult),
    ),
  }).annotate({ identifier: "BatchChangeChromeOsDeviceStatusResponse" });

export interface GroupAlias {
  /** The type of the API resource. For Alias resources, the value is `admin#directory#alias`. */
  kind?: string;
  /** ETag of the resource. */
  etag?: string;
  /** The primary email address of the group. */
  primaryEmail?: string;
  /** The alias email address. */
  alias?: string;
  /** The unique ID of the group. */
  id?: string;
}

export const GroupAlias = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  primaryEmail: Schema.optional(Schema.String),
  alias: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "GroupAlias" });

export interface CalendarResource {
  /** The read-only email for the calendar resource. Generated as part of creating a new calendar resource. */
  resourceEmail?: string;
  /** The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN. */
  resourceCategory?: string;
  /** The type of the resource. For calendar resources, the value is `admin#directory#resources#calendars#CalendarResource`. */
  kind?: string;
  /** Description of the resource, visible only to admins. */
  resourceDescription?: string;
  /** The type of the calendar resource, intended for non-room resources. */
  resourceType?: string;
  /** The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building name, floor, capacity, etc. For example, "NYC-2-Training Room 1A (16)". */
  generatedResourceName?: string;
  /** Instances of features for the calendar resource. */
  featureInstances?: unknown;
  /** Capacity of a resource, number of seats in a room. */
  capacity?: number;
  /** Unique ID for the building a resource is located in. */
  buildingId?: string;
  /** Name of the section within a floor a resource is located in. */
  floorSection?: string;
  /** The name of the calendar resource. For example, "Training Room 1A". */
  resourceName?: string;
  /** Name of the floor a resource is located on. */
  floorName?: string;
  /** ETag of the resource. */
  etags?: string;
  /** Description of the resource, visible to users and admins. */
  userVisibleDescription?: string;
  /** The unique ID for the calendar resource. */
  resourceId?: string;
}

export const CalendarResource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceEmail: Schema.optional(Schema.String),
  resourceCategory: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  resourceDescription: Schema.optional(Schema.String),
  resourceType: Schema.optional(Schema.String),
  generatedResourceName: Schema.optional(Schema.String),
  featureInstances: Schema.optional(Schema.Unknown),
  capacity: Schema.optional(Schema.Number),
  buildingId: Schema.optional(Schema.String),
  floorSection: Schema.optional(Schema.String),
  resourceName: Schema.optional(Schema.String),
  floorName: Schema.optional(Schema.String),
  etags: Schema.optional(Schema.String),
  userVisibleDescription: Schema.optional(Schema.String),
  resourceId: Schema.optional(Schema.String),
}).annotate({ identifier: "CalendarResource" });

export interface DomainAlias {
  /** Kind of resource this is. */
  kind?: string;
  /** The creation time of the domain alias. (Read-only). */
  creationTime?: string;
  /** ETag of the resource. */
  etag?: string;
  /** The parent domain name that the domain alias is associated with. This can either be a primary or secondary domain name within a customer. */
  parentDomainName?: string;
  /** Indicates the verification state of a domain alias. (Read-only) */
  verified?: boolean;
  /** The domain alias name. */
  domainAliasName?: string;
}

export const DomainAlias = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  creationTime: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  parentDomainName: Schema.optional(Schema.String),
  verified: Schema.optional(Schema.Boolean),
  domainAliasName: Schema.optional(Schema.String),
}).annotate({ identifier: "DomainAlias" });

export interface DomainAliases {
  /** A list of domain alias objects. */
  domainAliases?: ReadonlyArray<DomainAlias>;
  /** Kind of resource this is. */
  kind?: string;
  /** ETag of the resource. */
  etag?: string;
}

export const DomainAliases = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domainAliases: Schema.optional(Schema.Array(DomainAlias)),
  kind: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "DomainAliases" });

export interface BatchCreatePrintServersResponse {
  /** A list of successfully created print servers with their IDs populated. */
  printServers?: ReadonlyArray<PrintServer>;
  /** A list of create failures. `PrintServer` IDs are not populated, as print servers were not created. */
  failures?: ReadonlyArray<PrintServerFailureInfo>;
}

export const BatchCreatePrintServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    printServers: Schema.optional(Schema.Array(PrintServer)),
    failures: Schema.optional(Schema.Array(PrintServerFailureInfo)),
  }).annotate({ identifier: "BatchCreatePrintServersResponse" });

export interface CalendarResources {
  /** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
  nextPageToken?: string;
  /** Identifies this as a collection of CalendarResources. This is always `admin#directory#resources#calendars#calendarResourcesList`. */
  kind?: string;
  /** The CalendarResources in this page of results. */
  items?: ReadonlyArray<CalendarResource>;
  /** ETag of the resource. */
  etag?: string;
}

export const CalendarResources = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(CalendarResource)),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "CalendarResources" });

export interface UserGender {
  /** Custom gender. */
  customGender?: string;
  /** Gender. */
  type?: string;
  /** AddressMeAs. A human-readable string containing the proper way to refer to the profile owner by humans for example he/him/his or they/them/their. */
  addressMeAs?: string;
}

export const UserGender = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customGender: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  addressMeAs: Schema.optional(Schema.String),
}).annotate({ identifier: "UserGender" });

export interface Feature {
  /** ETag of the resource. */
  etags?: string;
  /** The name of the feature. */
  name?: string;
  /** Kind of resource this is. */
  kind?: string;
}

export const Feature = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  etags: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "Feature" });

export interface CreatePrintServerRequest {
  /** Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}` */
  parent?: string;
  /** Required. A print server to create. If you want to place the print server under a specific organizational unit (OU), then populate the `org_unit_id`. Otherwise the print server is created under the root OU. The `org_unit_id` can be retrieved using the [Directory API](https://developers.google.com/workspace/admin/directory/v1/guides/manage-org-units). */
  printServer?: PrintServer;
}

export const CreatePrintServerRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    printServer: Schema.optional(PrintServer),
  }).annotate({ identifier: "CreatePrintServerRequest" });

export interface OrgUnit {
  /** The full path to the organizational unit. The `orgUnitPath` is a derived property. When listed, it is derived from `parentOrgunitPath` and organizational unit's `name`. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an `orgUnitPath`, either update the name of the organization or the `parentOrgunitPath`. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [Update a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users.html#update_user). */
  orgUnitPath?: string;
  /** The type of the API resource. For Orgunits resources, the value is `admin#directory#orgUnit`. */
  kind?: string;
  /** This field is deprecated and setting its value has no effect. */
  blockInheritance?: boolean;
  /** The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. Required. */
  name?: string;
  /** The unique ID of the organizational unit. */
  orgUnitId?: string;
  /** The unique ID of the parent organizational unit. Required, unless `parentOrgUnitPath` is set. */
  parentOrgUnitId?: string;
  /** The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. Required, unless `parentOrgUnitId` is set. */
  parentOrgUnitPath?: string;
  /** Description of the organizational unit. */
  description?: string;
  /** ETag of the resource. */
  etag?: string;
}

export const OrgUnit = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  orgUnitPath: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  blockInheritance: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  orgUnitId: Schema.optional(Schema.String),
  parentOrgUnitId: Schema.optional(Schema.String),
  parentOrgUnitPath: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "OrgUnit" });

export interface Aliases {
  etag?: string;
  kind?: string;
  aliases?: ReadonlyArray<unknown>;
}

export const Aliases = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  aliases: Schema.optional(Schema.Array(Schema.Unknown)),
}).annotate({ identifier: "Aliases" });

export interface Features {
  /** The Features in this page of results. */
  features?: ReadonlyArray<Feature>;
  /** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
  nextPageToken?: string;
  /** Kind of resource this is. */
  kind?: string;
  /** ETag of the resource. */
  etag?: string;
}

export const Features = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  features: Schema.optional(Schema.Array(Feature)),
  nextPageToken: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "Features" });

export interface UserIm {
  /** If this is user's primary im. Only one entry could be marked as primary. */
  primary?: boolean;
  /** Custom protocol. */
  customProtocol?: string;
  /** Custom type. */
  customType?: string;
  /** Protocol used in the instant messenger. It should be one of the values from ImProtocolTypes map. Similar to type it can take a CUSTOM value and specify the custom name in customProtocol field. */
  protocol?: string;
  /** Each entry can have a type which indicates standard types of that entry. For example instant messengers could be of home work etc. In addition to the standard type an entry can have a custom type and can take any value. Such types should have the CUSTOM value as type and also have a customType value. */
  type?: string;
  /** Instant messenger id. */
  im?: string;
}

export const UserIm = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  primary: Schema.optional(Schema.Boolean),
  customProtocol: Schema.optional(Schema.String),
  customType: Schema.optional(Schema.String),
  protocol: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  im: Schema.optional(Schema.String),
}).annotate({ identifier: "UserIm" });

export interface ListPrintServersResponse {
  /** A token that can be sent as `page_token` in a request to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of print servers. */
  printServers?: ReadonlyArray<PrintServer>;
}

export const ListPrintServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    printServers: Schema.optional(Schema.Array(PrintServer)),
  }).annotate({ identifier: "ListPrintServersResponse" });

export interface BuildingAddress {
  /** Optional. BCP-47 language code of the contents of this address (if known). */
  languageCode?: string;
  /** Unstructured address lines describing the lower levels of an address. */
  addressLines?: ReadonlyArray<string>;
  /** Optional. Postal code of the address. */
  postalCode?: string;
  /** Optional. Sublocality of the address. */
  sublocality?: string;
  /** Optional. Highest administrative subdivision which is used for postal addresses of a country or region. */
  administrativeArea?: string;
  /** Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines. */
  locality?: string;
  /** Required. CLDR region code of the country/region of the address. */
  regionCode?: string;
}

export const BuildingAddress = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  languageCode: Schema.optional(Schema.String),
  addressLines: Schema.optional(Schema.Array(Schema.String)),
  postalCode: Schema.optional(Schema.String),
  sublocality: Schema.optional(Schema.String),
  administrativeArea: Schema.optional(Schema.String),
  locality: Schema.optional(Schema.String),
  regionCode: Schema.optional(Schema.String),
}).annotate({ identifier: "BuildingAddress" });

export interface BuildingCoordinates {
  /** Latitude in decimal degrees. */
  latitude?: number;
  /** Longitude in decimal degrees. */
  longitude?: number;
}

export const BuildingCoordinates = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  latitude: Schema.optional(Schema.Number),
  longitude: Schema.optional(Schema.Number),
}).annotate({ identifier: "BuildingCoordinates" });

export interface Building {
  /** ETag of the resource. */
  etags?: string;
  /** Unique identifier for the building. The maximum length is 100 characters. */
  buildingId?: string;
  /** Kind of resource this is. */
  kind?: string;
  /** A brief description of the building. For example, "Chelsea Market". */
  description?: string;
  /** The postal address of the building. See [`PostalAddress`](/my-business/reference/rest/v4/PostalAddress) for details. Note that only a single address line and region code are required. */
  address?: BuildingAddress;
  /** The geographic coordinates of the center of the building, expressed as latitude and longitude in decimal degrees. */
  coordinates?: BuildingCoordinates;
  /** The building name as seen by users in Calendar. Must be unique for the customer. For example, "NYC-CHEL". The maximum length is 100 characters. */
  buildingName?: string;
  /** The display names for all floors in this building. The floors are expected to be sorted in ascending order, from lowest floor to highest floor. For example, ["B2", "B1", "L", "1", "2", "2M", "3", "PH"] Must contain at least one entry. */
  floorNames?: ReadonlyArray<string>;
}

export const Building = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  etags: Schema.optional(Schema.String),
  buildingId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  address: Schema.optional(BuildingAddress),
  coordinates: Schema.optional(BuildingCoordinates),
  buildingName: Schema.optional(Schema.String),
  floorNames: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Building" });

export interface RoleAssignment {
  /** The ID of the role that is assigned. */
  roleId?: string;
  /** The type of the API resource. This is always `admin#directory#roleAssignment`. */
  kind?: string;
  /** The scope in which this role is assigned. */
  scopeType?: string;
  /** Optional. The condition associated with this role assignment. Note: Feature is available to Enterprise Standard, Enterprise Plus, Google Workspace for Education Plus and Cloud Identity Premium customers. A `RoleAssignment` with the `condition` field set will only take effect when the resource being accessed meets the condition. If `condition` is empty, the role (`role_id`) is applied to the actor (`assigned_to`) at the scope (`scope_type`) unconditionally. Currently, the following conditions are supported: - To make the `RoleAssignment` only applicable to [Security Groups](https://cloud.google.com/identity/docs/groups#group_types): `api.getAttribute('cloudidentity.googleapis.com/groups.labels', []).hasAny(['groups.security']) && resource.type == 'cloudidentity.googleapis.com/Group'` - To make the `RoleAssignment` not applicable to [Security Groups](https://cloud.google.com/identity/docs/groups#group_types): `!api.getAttribute('cloudidentity.googleapis.com/groups.labels', []).hasAny(['groups.security']) && resource.type == 'cloudidentity.googleapis.com/Group'` Currently, the condition strings have to be verbatim and they only work with the following [pre-built administrator roles](https://support.google.com/a/answer/2405986): - Groups Editor - Groups Reader The condition follows [Cloud IAM condition syntax](https://cloud.google.com/iam/docs/conditions-overview). - To make the `RoleAssignment` not applicable to [Locked Groups](https://cloud.google.com/identity/docs/groups#group_types): `!api.getAttribute('cloudidentity.googleapis.com/groups.labels', []).hasAny(['groups.locked']) && resource.type == 'cloudidentity.googleapis.com/Group'` This condition can also be used in conjunction with a Security-related condition. */
  condition?: string;
  /** ID of this roleAssignment. */
  roleAssignmentId?: string;
  /** Output only. The type of the assignee (`USER` or `GROUP`). */
  assigneeType?: "user" | "group" | (string & {});
  /** If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to. */
  orgUnitId?: string;
  /** ETag of the resource. */
  etag?: string;
  /** The unique ID of the entity this role is assigned to—either the `user_id` of a user, the `group_id` of a group, or the `uniqueId` of a service account as defined in [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts). */
  assignedTo?: string;
}

export const RoleAssignment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  roleId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  scopeType: Schema.optional(Schema.String),
  condition: Schema.optional(Schema.String),
  roleAssignmentId: Schema.optional(Schema.String),
  assigneeType: Schema.optional(Schema.String),
  orgUnitId: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  assignedTo: Schema.optional(Schema.String),
}).annotate({ identifier: "RoleAssignment" });

export interface RoleAssignments {
  /** ETag of the resource. */
  etag?: string;
  /** The type of the API resource. This is always `admin#directory#roleAssignments`. */
  kind?: string;
  /** A list of RoleAssignment resources. */
  items?: ReadonlyArray<RoleAssignment>;
  nextPageToken?: string;
}

export const RoleAssignments = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(RoleAssignment)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "RoleAssignments" });

export interface BatchDeletePrintersResponse {
  /** A list of update failures. */
  failedPrinters?: ReadonlyArray<FailureInfo>;
  /** A list of Printer.id that were successfully deleted. */
  printerIds?: ReadonlyArray<string>;
}

export const BatchDeletePrintersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failedPrinters: Schema.optional(Schema.Array(FailureInfo)),
    printerIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchDeletePrintersResponse" });

export interface FanInfo {
  /** Output only. Fan speed in RPM. */
  speedRpm?: number;
}

export const FanInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  speedRpm: Schema.optional(Schema.Number),
}).annotate({ identifier: "FanInfo" });

export interface FeatureInstance {
  /** The feature that this is an instance of. A calendar resource may have multiple instances of a feature. */
  feature?: Feature;
}

export const FeatureInstance = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  feature: Schema.optional(Feature),
}).annotate({ identifier: "FeatureInstance" });

export interface PrinterModel {
  /** Manufacturer. eq. "Brother" */
  manufacturer?: string;
  /** Make and model as represented in "make_and_model" field in Printer object. eq. "brother mfc-8840d" */
  makeAndModel?: string;
  /** Display name. eq. "Brother MFC-8840D" */
  displayName?: string;
}

export const PrinterModel = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  manufacturer: Schema.optional(Schema.String),
  makeAndModel: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "PrinterModel" });

export interface ListPrinterModelsResponse {
  /** Printer models that are currently allowed to be configured for ChromeOs. Some printers may be added or removed over time. */
  printerModels?: ReadonlyArray<PrinterModel>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListPrinterModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    printerModels: Schema.optional(Schema.Array(PrinterModel)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPrinterModelsResponse" });

export interface MembersHasMember {
  /** Output only. Identifies whether the given user is a member of the group. Membership can be direct or nested. */
  isMember?: boolean;
}

export const MembersHasMember = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isMember: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "MembersHasMember" });

export interface VerificationCodes {
  /** The type of the resource. This is always `admin#directory#verificationCodesList`. */
  kind?: string;
  /** A list of verification code resources. */
  items?: ReadonlyArray<VerificationCode>;
  /** ETag of the resource. */
  etag?: string;
}

export const VerificationCodes = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(VerificationCode)),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "VerificationCodes" });

export interface OsUpdateStatus {
  /** New platform version of the OS image being downloaded and applied. It is only set when update status is UPDATE_STATUS_DOWNLOAD_IN_PROGRESS or UPDATE_STATUS_NEED_REBOOT. Note this could be a dummy "0.0.0.0" for UPDATE_STATUS_NEED_REBOOT for some edge cases, e.g. update engine is restarted without a reboot. */
  targetOsVersion?: string;
  /** New required platform version from the pending updated kiosk app. */
  targetKioskAppVersion?: string;
  /** The update state of an OS update. */
  state?:
    | "updateStateUnspecified"
    | "updateStateNotStarted"
    | "updateStateDownloadInProgress"
    | "updateStateNeedReboot"
    | (string & {});
  /** Date and time of the last successful OS update. */
  updateTime?: string;
  /** Date and time of the last update check. */
  updateCheckTime?: string;
  /** Date and time of the last reboot. */
  rebootTime?: string;
}

export const OsUpdateStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  targetOsVersion: Schema.optional(Schema.String),
  targetKioskAppVersion: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  updateCheckTime: Schema.optional(Schema.String),
  rebootTime: Schema.optional(Schema.String),
}).annotate({ identifier: "OsUpdateStatus" });

export interface BatchCreatePrintServersRequest {
  /** Required. A list of `PrintServer` resources to be created (max `50` per batch). */
  requests?: ReadonlyArray<CreatePrintServerRequest>;
}

export const BatchCreatePrintServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(CreatePrintServerRequest)),
  }).annotate({ identifier: "BatchCreatePrintServersRequest" });

export interface DirectoryUsersCreateGuestRequest {
  /** Immutable. External email of the guest user being created. */
  primaryGuestEmail?: string;
  /** Optional. Immutable ID of the Google Workspace account. */
  customer?: string;
}

export const DirectoryUsersCreateGuestRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryGuestEmail: Schema.optional(Schema.String),
    customer: Schema.optional(Schema.String),
  }).annotate({ identifier: "DirectoryUsersCreateGuestRequest" });

export interface BatchDeletePrintersRequest {
  /** A list of Printer.id that should be deleted. Max 100 at a time. */
  printerIds?: ReadonlyArray<string>;
}

export const BatchDeletePrintersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    printerIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchDeletePrintersRequest" });

export interface UserUndelete {
  /** OrgUnit of User */
  orgUnitPath?: string;
}

export const UserUndelete = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  orgUnitPath: Schema.optional(Schema.String),
}).annotate({ identifier: "UserUndelete" });

export interface DirectoryChromeosdevicesIssueCommandRequest {
  /** The type of command. */
  commandType?:
    | "COMMAND_TYPE_UNSPECIFIED"
    | "REBOOT"
    | "TAKE_A_SCREENSHOT"
    | "SET_VOLUME"
    | "WIPE_USERS"
    | "REMOTE_POWERWASH"
    | "DEVICE_START_CRD_SESSION"
    | "CAPTURE_LOGS"
    | "FETCH_CRD_AVAILABILITY_INFO"
    | "FETCH_SUPPORT_PACKET"
    | (string & {});
  /** The payload for the command, provide it only if command supports it. The following commands support adding payload: * `SET_VOLUME`: Payload is a stringified JSON object in the form: { "volume": 50 }. The volume has to be an integer in the range [0,100]. * `DEVICE_START_CRD_SESSION`: Payload is optionally a stringified JSON object in the form: { "ackedUserPresence": true, "crdSessionType": string }. `ackedUserPresence` is a boolean. By default, `ackedUserPresence` is set to `false`. To start a Chrome Remote Desktop session for an active device, set `ackedUserPresence` to `true`. `crdSessionType` can only select from values `private` (which grants the remote admin exclusive control of the ChromeOS device) or `shared` (which allows the admin and the local user to share control of the ChromeOS device). If not set, `crdSessionType` defaults to `shared`. The `FETCH_CRD_AVAILABILITY_INFO` command can be used to determine available session types on the device. * `REBOOT`: Payload is a stringified JSON object in the form: { "user_session_delay_seconds": 300 }. The `user_session_delay_seconds` is the amount of seconds to wait before rebooting the device if a user is logged in. It has to be an integer in the range [0,300]. When payload is not present for reboot, 0 delay is the default. Note: This only applies if an actual user is logged in, including a Guest. If the device is in the login screen or in Kiosk mode the value is not respected and the device immediately reboots. * `FETCH_SUPPORT_PACKET`: Payload is optionally a stringified JSON object in the form: {"supportPacketDetails":{ "issueCaseId": optional_support_case_id_string, "issueDescription": optional_issue_description_string, "requestedDataCollectors": []}} The list of available `data_collector_enums` are as following: Chrome System Information (1), Crash IDs (2), Memory Details (3), UI Hierarchy (4), Additional ChromeOS Platform Logs (5), Device Event (6), Intel WiFi NICs Debug Dump (7), Touch Events (8), Lacros (9), Lacros System Information (10), ChromeOS Flex Logs (11), DBus Details (12), ChromeOS Network Routes (13), ChromeOS Shill (Connection Manager) Logs (14), Policies (15), ChromeOS System State and Logs (16), ChromeOS System Logs (17), ChromeOS Chrome User Logs (18), ChromeOS Bluetooth (19), ChromeOS Connected Input Devices (20), ChromeOS Traffic Counters (21), ChromeOS Virtual Keyboard (22), ChromeOS Network Health (23). See more details in [help article](https://support.google.com/chrome/a?p=remote-log). */
  payload?: string;
}

export const DirectoryChromeosdevicesIssueCommandRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commandType: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.String),
  }).annotate({ identifier: "DirectoryChromeosdevicesIssueCommandRequest" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface DirectoryChromeosdevicesIssueCommandResponse {
  /** The unique ID of the issued command, used to retrieve the command status. */
  commandId?: string;
}

export const DirectoryChromeosdevicesIssueCommandResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commandId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DirectoryChromeosdevicesIssueCommandResponse" });

export interface Domains {
  /** A list of domain alias objects. (Read-only) */
  domainAliases?: ReadonlyArray<DomainAlias>;
  /** Indicates the verification state of a domain. (Read-only). */
  verified?: boolean;
  /** Indicates if the domain is a primary domain (Read-only). */
  isPrimary?: boolean;
  /** Kind of resource this is. */
  kind?: string;
  /** Creation time of the domain. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. (Read-only). */
  creationTime?: string;
  /** The domain name of the customer. */
  domainName?: string;
  /** ETag of the resource. */
  etag?: string;
}

export const Domains = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domainAliases: Schema.optional(Schema.Array(DomainAlias)),
  verified: Schema.optional(Schema.Boolean),
  isPrimary: Schema.optional(Schema.Boolean),
  kind: Schema.optional(Schema.String),
  creationTime: Schema.optional(Schema.String),
  domainName: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "Domains" });

export interface CountChromeOsDevicesResponse {
  /** The total number of devices matching the request. */
  count?: string;
}

export const CountChromeOsDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "CountChromeOsDevicesResponse" });

export interface BluetoothAdapterInfo {
  /** Output only. The number of devices connected to this adapter. */
  numConnectedDevices?: number;
  /** Output only. The MAC address of the adapter. */
  address?: string;
}

export const BluetoothAdapterInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  numConnectedDevices: Schema.optional(Schema.Number),
  address: Schema.optional(Schema.String),
}).annotate({ identifier: "BluetoothAdapterInfo" });

export interface BatchDeletePrintServersRequest {
  /** A list of print server IDs that should be deleted (max `100` per batch). */
  printServerIds?: ReadonlyArray<string>;
}

export const BatchDeletePrintServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    printServerIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchDeletePrintServersRequest" });

export interface UserEmail {
  /** Email id of the user. */
  address?: string;
  /** If this is user's primary email. Only one entry could be marked as primary. */
  primary?: boolean;
  /** Public Key Encryption Certificates. Current limit: 1 per email address, and 5 per user. */
  public_key_encryption_certificates?: {
    certificate?: string;
    is_default?: boolean;
    state?: string;
  };
  /** Custom Type. */
  customType?: string;
  /** Each entry can have a type which indicates standard types of that entry. For example email could be of home, work etc. In addition to the standard type, an entry can have a custom type and can take any value Such types should have the CUSTOM value as type and also have a customType value. */
  type?: string;
}

export const UserEmail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  address: Schema.optional(Schema.String),
  primary: Schema.optional(Schema.Boolean),
  public_key_encryption_certificates: Schema.optional(
    Schema.Struct({
      certificate: Schema.optional(Schema.String),
      is_default: Schema.optional(Schema.Boolean),
      state: Schema.optional(Schema.String),
    }),
  ),
  customType: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "UserEmail" });

export interface UserWebsite {
  /** If this is user's primary website or not. */
  primary?: boolean;
  /** Website. */
  value?: string;
  /** Custom Type. */
  customType?: string;
  /** Each entry can have a type which indicates standard types of that entry. For example website could be of home work blog etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. */
  type?: string;
}

export const UserWebsite = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  primary: Schema.optional(Schema.Boolean),
  value: Schema.optional(Schema.String),
  customType: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "UserWebsite" });

export interface Users {
  /** Event that triggered this response (only used in case of Push Response) */
  trigger_event?: string;
  /** Token used to access next page of this result. The page token is only valid for three days. */
  nextPageToken?: string;
  /** Kind of resource this is. */
  kind?: string;
  /** ETag of the resource. */
  etag?: string;
  /** A list of user objects. */
  users?: ReadonlyArray<User>;
}

export const Users = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  trigger_event: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  users: Schema.optional(Schema.Array(User)),
}).annotate({ identifier: "Users" });

export interface UserPhone {
  /** If this is user's primary phone or not. */
  primary?: boolean;
  /** Phone number. */
  value?: string;
  /** Custom Type. */
  customType?: string;
  /** Each entry can have a type which indicates standard types of that entry. For example phone could be of home_fax work mobile etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. */
  type?: string;
}

export const UserPhone = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  primary: Schema.optional(Schema.Boolean),
  value: Schema.optional(Schema.String),
  customType: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "UserPhone" });

export interface ChromeOsDeviceAction {
  /** Action to be taken on the Chrome OS device. */
  action?: string;
  /** Only used when the action is `deprovision`. With the `deprovision` action, this field is required. *Note*: The deprovision reason is audited because it might have implications on licenses for perpetual subscription customers. */
  deprovisionReason?: string;
}

export const ChromeOsDeviceAction = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  action: Schema.optional(Schema.String),
  deprovisionReason: Schema.optional(Schema.String),
}).annotate({ identifier: "ChromeOsDeviceAction" });

export interface UserAlias {
  /** The unique ID for the user. */
  id?: string;
  /** The user's primary email address. */
  primaryEmail?: string;
  /** The alias email address. */
  alias?: string;
  /** The type of the API resource. For Alias resources, the value is `admin#directory#alias`. */
  kind?: string;
  /** ETag of the resource. */
  etag?: string;
}

export const UserAlias = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  primaryEmail: Schema.optional(Schema.String),
  alias: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "UserAlias" });

export interface CustomerPostalAddress {
  /** Address line 2 of the address. */
  addressLine2?: string;
  /** Name of the locality. An example of a locality value is the city of `San Francisco`. */
  locality?: string;
  /** The company or company division name. */
  organizationName?: string;
  /** The customer contact's name. */
  contactName?: string;
  /** Address line 3 of the address. */
  addressLine3?: string;
  /** This is a required property. For `countryCode` information see the [ISO 3166 country code elements](https://www.iso.org/iso/country_codes.htm). */
  countryCode?: string;
  /** A customer's physical address. The address can be composed of one to three lines. */
  addressLine1?: string;
  /** Name of the region. An example of a region value is `NY` for the state of New York. */
  region?: string;
  /** The postal code. A postalCode example is a postal zip code such as `10009`. This is in accordance with - http: //portablecontacts.net/draft-spec.html#address_element. */
  postalCode?: string;
}

export const CustomerPostalAddress = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  addressLine2: Schema.optional(Schema.String),
  locality: Schema.optional(Schema.String),
  organizationName: Schema.optional(Schema.String),
  contactName: Schema.optional(Schema.String),
  addressLine3: Schema.optional(Schema.String),
  countryCode: Schema.optional(Schema.String),
  addressLine1: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  postalCode: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomerPostalAddress" });

export interface Privilege {
  /** ETag of the resource. */
  etag?: string;
  /** The name of the privilege. */
  privilegeName?: string;
  /** The name of the service this privilege is for. */
  serviceName?: string;
  /** The type of the API resource. This is always `admin#directory#privilege`. */
  kind?: string;
  /** If the privilege can be restricted to an organization unit. */
  isOuScopable?: boolean;
  /** The obfuscated ID of the service this privilege is for. This value is returned with [`Privileges.list()`](https://developers.google.com/workspace/admin/directory/v1/reference/privileges/list). */
  serviceId?: string;
  /** A list of child privileges. Privileges for a service form a tree. Each privilege can have a list of child privileges; this list is empty for a leaf privilege. */
  childPrivileges?: ReadonlyArray<Privilege>;
}

export const Privilege: Schema.Schema<Privilege> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      etag: Schema.optional(Schema.String),
      privilegeName: Schema.optional(Schema.String),
      serviceName: Schema.optional(Schema.String),
      kind: Schema.optional(Schema.String),
      isOuScopable: Schema.optional(Schema.Boolean),
      serviceId: Schema.optional(Schema.String),
      childPrivileges: Schema.optional(Schema.Array(Privilege)),
    }),
  ).annotate({ identifier: "Privilege" }) as any as Schema.Schema<Privilege>;

export interface Privileges {
  /** The type of the API resource. This is always `admin#directory#privileges`. */
  kind?: string;
  /** A list of Privilege resources. */
  items?: ReadonlyArray<Privilege>;
  /** ETag of the resource. */
  etag?: string;
}

export const Privileges = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Privilege)),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "Privileges" });

export interface ChromeOsMoveDevicesToOu {
  /** Chrome OS devices to be moved to OU */
  deviceIds?: ReadonlyArray<string>;
}

export const ChromeOsMoveDevicesToOu =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ChromeOsMoveDevicesToOu" });

export interface Member {
  /** Defines mail delivery preferences of member. This field is only supported by `insert`, `update`, and `get` methods. */
  delivery_settings?: string;
  /** ETag of the resource. */
  etag?: string;
  /** The type of the API resource. For Members resources, the value is `admin#directory#member`. */
  kind?: string;
  /** The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The `email` must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes. */
  email?: string;
  /** The member's role in a group. The API returns an error for cycles in group memberships. For example, if `group1` is a member of `group2`, `group2` cannot be a member of `group1`. For more information about a member's role, see the [administration help center](https://support.google.com/a/answer/167094). */
  role?: string;
  /** The type of group member. */
  type?: string;
  /** Status of member (Immutable) */
  status?: string;
  /** The unique ID of the group member. A member `id` can be used as a member request URI's `memberKey`. */
  id?: string;
}

export const Member = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  delivery_settings: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  email: Schema.optional(Schema.String),
  role: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "Member" });

export interface Buildings {
  /** The Buildings in this page of results. */
  buildings?: ReadonlyArray<Building>;
  /** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
  nextPageToken?: string;
  /** Kind of resource this is. */
  kind?: string;
  /** ETag of the resource. */
  etag?: string;
}

export const Buildings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  buildings: Schema.optional(Schema.Array(Building)),
  nextPageToken: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "Buildings" });

export interface Members {
  /** Token used to access next page of this result. */
  nextPageToken?: string;
  /** A list of member objects. */
  members?: ReadonlyArray<Member>;
  /** ETag of the resource. */
  etag?: string;
  /** Kind of resource this is. */
  kind?: string;
}

export const Members = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  members: Schema.optional(Schema.Array(Member)),
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "Members" });

export interface Role {
  /** Returns `true` if this is a pre-defined system role. */
  isSystemRole?: boolean;
  /** Name of the role. */
  roleName?: string;
  /** A short description of the role. */
  roleDescription?: string;
  /** ID of the role. */
  roleId?: string;
  /** ETag of the resource. */
  etag?: string;
  /** The type of the API resource. This is always `admin#directory#role`. */
  kind?: string;
  /** The set of privileges that are granted to this role. */
  rolePrivileges?: ReadonlyArray<{
    serviceId?: string;
    privilegeName?: string;
  }>;
  /** Returns `true` if the role is a super admin role. */
  isSuperAdminRole?: boolean;
}

export const Role = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isSystemRole: Schema.optional(Schema.Boolean),
  roleName: Schema.optional(Schema.String),
  roleDescription: Schema.optional(Schema.String),
  roleId: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  rolePrivileges: Schema.optional(
    Schema.Array(
      Schema.Struct({
        serviceId: Schema.optional(Schema.String),
        privilegeName: Schema.optional(Schema.String),
      }),
    ),
  ),
  isSuperAdminRole: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Role" });

export interface Roles {
  /** The type of the API resource. This is always `admin#directory#roles`. */
  kind?: string;
  /** A list of Role resources. */
  items?: ReadonlyArray<Role>;
  /** ETag of the resource. */
  etag?: string;
  nextPageToken?: string;
}

export const Roles = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Role)),
  etag: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "Roles" });

export interface UserMakeAdmin {
  /** Indicates the administrator status of the user. */
  status?: boolean;
}

export const UserMakeAdmin = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "UserMakeAdmin" });

export interface OrgUnits {
  /** The type of the API resource. For Org Unit resources, the type is `admin#directory#orgUnits`. */
  kind?: string;
  /** ETag of the resource. */
  etag?: string;
  /** A list of organizational unit objects. */
  organizationUnits?: ReadonlyArray<OrgUnit>;
}

export const OrgUnits = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  organizationUnits: Schema.optional(Schema.Array(OrgUnit)),
}).annotate({ identifier: "OrgUnits" });

export interface Alias {
  alias?: string;
  primaryEmail?: string;
  id?: string;
  etag?: string;
  kind?: string;
}

export const Alias = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  alias: Schema.optional(Schema.String),
  primaryEmail: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "Alias" });

export interface ByteUsage {
  /** Output only. The total capacity value, in bytes. */
  capacityBytes?: string;
  /** Output only. The current usage value, in bytes. */
  usedBytes?: string;
}

export const ByteUsage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  capacityBytes: Schema.optional(Schema.String),
  usedBytes: Schema.optional(Schema.String),
}).annotate({ identifier: "ByteUsage" });

export interface MobileDevice {
  /** The device's status. */
  status?: string;
  /** The device's kernel version. */
  kernelVersion?: string;
  /** Adb (USB debugging) enabled or disabled on device (Read-only) */
  adbStatus?: boolean;
  /** Mobile Device Security patch level (Read-only) */
  securityPatchLevel?: string;
  /** The device's serial number. */
  serialNumber?: string;
  /** The device's MEID number. */
  meid?: string;
  /** The list of the owner's email addresses. If your application needs the current list of user emails, use the [get](https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/get.html) method. For additional information, see the [retrieve a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user) method. */
  email?: ReadonlyArray<string>;
  /** DMAgentPermission (Read-only) */
  privilege?: string;
  /** Work profile supported on device (Read-only) */
  supportsWorkProfile?: boolean;
  /** The default locale used on the device. */
  defaultLanguage?: string;
  /** The list of the owner's user names. If your application needs the current list of device owner names, use the [get](https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/get.html) method. For more information about retrieving mobile device user information, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user). */
  name?: ReadonlyArray<string>;
  /** Boolean indicating if this account is on owner/primary profile or not. */
  managedAccountIsOnOwnerProfile?: boolean;
  /** The list of applications installed on an Android mobile device. It is not applicable to Google Sync and iOS devices. The list includes any Android applications that access Google Workspace data. When updating an applications list, it is important to note that updates replace the existing list. If the Android device has two existing applications and the API updates the list with five applications, the is now the updated list of five applications. */
  applications?: ReadonlyArray<{
    versionName?: string;
    permission?: ReadonlyArray<string>;
    versionCode?: number;
    displayName?: string;
    packageName?: string;
  }>;
  /** The mobile device's model name, for example Nexus S. This property can be [updated](https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-mobile=devices#update_mobile_device). */
  model?: string;
  /** The compromised device status. */
  deviceCompromisedStatus?: string;
  /** The device's operating system build number. */
  buildNumber?: string;
  /** The device's IMEI number. */
  imei?: string;
  /** Mobile Device Hardware (Read-only) */
  hardware?: string;
  /** Mobile Device Encryption Status (Read-only) */
  encryptionStatus?: string;
  /** DevicePasswordStatus (Read-only) */
  devicePasswordStatus?: string;
  /** The mobile device's operating system, for example IOS 4.3 or Android 2.3.5. This property can be [updated](https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-mobile-devices#update_mobile_device). */
  os?: string;
  /** Developer options enabled or disabled on device (Read-only) */
  developerOptionsStatus?: boolean;
  /** Mobile Device manufacturer (Read-only) */
  manufacturer?: string;
  /** The list of accounts added on device (Read-only) */
  otherAccountsInfo?: ReadonlyArray<string>;
  /** Mobile Device release version version (Read-only) */
  releaseVersion?: string;
  /** Gives information about the device such as `os` version. This property can be [updated](https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-mobile-devices#update_mobile_device). */
  userAgent?: string;
  /** ETag of the resource. */
  etag?: string;
  /** Unknown sources enabled or disabled on device (Read-only) */
  unknownSourcesStatus?: boolean;
  /** The IMEI/MEID unique identifier for Android hardware. It is not applicable to Google Sync devices. When adding an Android mobile device, this is an optional property. When updating one of these devices, this is a read-only property. */
  hardwareId?: string;
  /** The serial number for a Google Sync mobile device. For Android and iOS devices, this is a software generated unique identifier. */
  deviceId?: string;
  /** The unique ID the API service uses to identify the mobile device. */
  resourceId?: string;
  /** The device's baseband version. */
  basebandVersion?: string;
  /** Mobile Device Brand (Read-only) */
  brand?: string;
  /** Date and time the device was first synchronized with the policy settings in the G Suite administrator control panel (Read-only) */
  firstSync?: string;
  /** The type of mobile device. */
  type?: string;
  /** Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only) */
  lastSync?: string;
  /** Mobile Device Bootloader version (Read-only) */
  bootloaderVersion?: string;
  /** The type of the API resource. For Mobiledevices resources, the value is `admin#directory#mobiledevice`. */
  kind?: string;
  /** The device's MAC address on Wi-Fi networks. */
  wifiMacAddress?: string;
  /** Mobile Device mobile or network operator (if available) (Read-only) */
  networkOperator?: string;
}

export const MobileDevice = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String),
  kernelVersion: Schema.optional(Schema.String),
  adbStatus: Schema.optional(Schema.Boolean),
  securityPatchLevel: Schema.optional(Schema.String),
  serialNumber: Schema.optional(Schema.String),
  meid: Schema.optional(Schema.String),
  email: Schema.optional(Schema.Array(Schema.String)),
  privilege: Schema.optional(Schema.String),
  supportsWorkProfile: Schema.optional(Schema.Boolean),
  defaultLanguage: Schema.optional(Schema.String),
  name: Schema.optional(Schema.Array(Schema.String)),
  managedAccountIsOnOwnerProfile: Schema.optional(Schema.Boolean),
  applications: Schema.optional(
    Schema.Array(
      Schema.Struct({
        versionName: Schema.optional(Schema.String),
        permission: Schema.optional(Schema.Array(Schema.String)),
        versionCode: Schema.optional(Schema.Number),
        displayName: Schema.optional(Schema.String),
        packageName: Schema.optional(Schema.String),
      }),
    ),
  ),
  model: Schema.optional(Schema.String),
  deviceCompromisedStatus: Schema.optional(Schema.String),
  buildNumber: Schema.optional(Schema.String),
  imei: Schema.optional(Schema.String),
  hardware: Schema.optional(Schema.String),
  encryptionStatus: Schema.optional(Schema.String),
  devicePasswordStatus: Schema.optional(Schema.String),
  os: Schema.optional(Schema.String),
  developerOptionsStatus: Schema.optional(Schema.Boolean),
  manufacturer: Schema.optional(Schema.String),
  otherAccountsInfo: Schema.optional(Schema.Array(Schema.String)),
  releaseVersion: Schema.optional(Schema.String),
  userAgent: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  unknownSourcesStatus: Schema.optional(Schema.Boolean),
  hardwareId: Schema.optional(Schema.String),
  deviceId: Schema.optional(Schema.String),
  resourceId: Schema.optional(Schema.String),
  basebandVersion: Schema.optional(Schema.String),
  brand: Schema.optional(Schema.String),
  firstSync: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  lastSync: Schema.optional(Schema.String),
  bootloaderVersion: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  wifiMacAddress: Schema.optional(Schema.String),
  networkOperator: Schema.optional(Schema.String),
}).annotate({ identifier: "MobileDevice" });

export interface MobileDevices {
  /** Kind of resource this is. */
  kind?: string;
  /** ETag of the resource. */
  etag?: string;
  /** A list of Mobile Device objects. */
  mobiledevices?: ReadonlyArray<MobileDevice>;
  /** Token used to access next page of this result. */
  nextPageToken?: string;
}

export const MobileDevices = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  mobiledevices: Schema.optional(Schema.Array(MobileDevice)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "MobileDevices" });

export interface BacklightInfo {
  /** Output only. Path to this backlight on the system. Useful if the caller needs to correlate with other information. */
  path?: string;
  /** Output only. Current brightness of the backlight, between 0 and max_brightness. */
  brightness?: number;
  /** Output only. Maximum brightness for the backlight. */
  maxBrightness?: number;
}

export const BacklightInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  path: Schema.optional(Schema.String),
  brightness: Schema.optional(Schema.Number),
  maxBrightness: Schema.optional(Schema.Number),
}).annotate({ identifier: "BacklightInfo" });

export interface Groups {
  /** Kind of resource this is. */
  kind?: string;
  /** A list of group objects. */
  groups?: ReadonlyArray<Group>;
  /** ETag of the resource. */
  etag?: string;
  /** Token used to access next page of this result. */
  nextPageToken?: string;
}

export const Groups = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  groups: Schema.optional(Schema.Array(Group)),
  etag: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "Groups" });

export interface ChromeOsDevice {
  /** The unique ID of the organizational unit. orgUnitPath is the human readable version of orgUnitId. While orgUnitPath may change by renaming an organizational unit within the path, orgUnitId is unchangeable for one organizational unit. This property can be [updated](https://developers.google.com/workspace/admin/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433). */
  orgUnitId?: string;
  /** (Read-only) Date and time for the last deprovision of the device. */
  lastDeprovisionTimestamp?: string;
  /** Output only. The timestamp after which the device will stop receiving Chrome updates or support. */
  autoUpdateThrough?: string;
  /** Output only. How much disk space the device has available and is currently using. */
  diskSpaceUsage?: ByteUsage;
  /** Information regarding CPU specs in the device. */
  cpuInfo?: ReadonlyArray<{
    model?: string;
    logicalCpus?: ReadonlyArray<{
      maxScalingFrequencyKhz?: number;
      currentScalingFrequencyKhz?: number;
      cStates?: ReadonlyArray<{
        displayName?: string;
        sessionDuration?: string;
      }>;
      idleDuration?: string;
    }>;
    maxClockSpeedKhz?: number;
    architecture?: string;
  }>;
  /** Output only. Date of the device when extended support policy for automatic updates starts. */
  extendedSupportStart?: string;
  /** The status of the device. */
  status?: string;
  /** The device's order number. Only devices directly purchased from Google have an order number. */
  orderNumber?: string;
  /** The device's MAC address on the ethernet network interface. */
  ethernetMacAddress?: string;
  /** The asset identifier as noted by an administrator or specified during enrollment. */
  annotatedAssetId?: string;
  /** Output only. Device license type. */
  deviceLicenseType?:
    | "deviceLicenseTypeUnspecified"
    | "enterprise"
    | "enterpriseUpgrade"
    | "educationUpgrade"
    | "education"
    | "kioskUpgrade"
    | "enterpriseUpgradePerpetual"
    | "enterpriseUpgradeFixedTerm"
    | "educationUpgradePerpetual"
    | "educationUpgradeFixedTerm"
    | (string & {});
  /** The address or location of the device as noted by the administrator. Maximum length is `200` characters. Empty values are allowed. */
  annotatedLocation?: string;
  /** The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a mobile device. A MEID/IMEI is typically used when adding a device to a wireless carrier's post-pay service plan. If the device does not have this information, this property is not included in the response. For more information on how to export a MEID/IMEI list, see the [Developer's Guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-chrome-devices.html#export_meid). */
  meid?: string;
  /** The boot mode for the device. The possible values are: * `Verified`: The device is running a valid version of the Chrome OS. * `Dev`: The devices's developer hardware switch is enabled. When booted, the device has a command line shell. For an example of a developer switch, see the [Chromebook developer information](https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-series-5-chromebook#TOC-Developer-switch). */
  bootMode?: string;
  /** Output only. Fan information for the device. */
  fanInfo?: ReadonlyArray<FanInfo>;
  /** A list of device files to download (Read-only) */
  deviceFiles?: ReadonlyArray<{
    downloadUrl?: string;
    name?: string;
    createTime?: string;
    type?: string;
  }>;
  /** Date and time the device was last enrolled (Read-only) */
  lastEnrollmentTime?: string;
  /** The type of resource. For the Chromeosdevices resource, the value is `admin#directory#chromeosdevice`. */
  kind?: string;
  /** Output only. Chrome OS type of the device. */
  chromeOsType?:
    | "chromeOsTypeUnspecified"
    | "chromeOsFlex"
    | "chromeOs"
    | (string & {});
  /** A list of active time ranges (Read-only). */
  activeTimeRanges?: ReadonlyArray<{ activeTime?: number; date?: string }>;
  /** Reports of amounts of available RAM memory (Read-only) */
  systemRamFreeReports?: ReadonlyArray<{
    systemRamFreeInfo?: ReadonlyArray<string>;
    reportTime?: string;
  }>;
  /** Contains last known network (Read-only) */
  lastKnownNetwork?: ReadonlyArray<{
    ipAddress?: string;
    wanIpAddress?: string;
  }>;
  /** The user of the device as noted by the administrator. Maximum length is 100 characters. Empty values are allowed. */
  annotatedUser?: string;
  /** The device's wireless MAC address. If the device does not have this information, it is not included in the response. */
  macAddress?: string;
  /** The device's model information. If the device does not have this information, this property is not included in the response. */
  model?: string;
  /** Output only. Device policy compliance status of the OS version. */
  osVersionCompliance?:
    | "complianceUnspecified"
    | "compliant"
    | "pending"
    | "notCompliant"
    | (string & {});
  /** The Chrome device's operating system version. */
  osVersion?: string;
  /** Output only. Whether extended support policy is enabled on the device. */
  extendedSupportEnabled?: boolean;
  /** The Chrome device's firmware version. */
  firmwareVersion?: string;
  /** Reports of disk space and other info about mounted/connected volumes. */
  diskVolumeReports?: ReadonlyArray<{
    volumeInfo?: ReadonlyArray<{
      volumeId?: string;
      storageTotal?: string;
      storageFree?: string;
    }>;
  }>;
  /** Output only. Contains backlight information for the device. */
  backlightInfo?: ReadonlyArray<BacklightInfo>;
  /** Trusted Platform Module (TPM) (Read-only) */
  tpmVersionInfo?: {
    specLevel?: string;
    vendorSpecific?: string;
    firmwareVersion?: string;
    family?: string;
    tpmModel?: string;
    manufacturer?: string;
  };
  /** (Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices. */
  ethernetMacAddress0?: string;
  /** The full parent path with the organizational unit's name associated with the device. Path names are case insensitive. If the parent organizational unit is the top-level organization, it is represented as a forward slash, `/`. This property can be [updated](https://developers.google.com/workspace/admin/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433). */
  orgUnitPath?: string;
  /** The Chrome device serial number entered when the device was enabled. This value is the same as the Admin console's *Serial Number* in the *Chrome OS Devices* tab. */
  serialNumber?: string;
  /** (Read-only) Built-in MAC address for the docking station that the device connected to. Factory sets Media access control address (MAC address) assigned for use by a dock. It is reserved specifically for MAC pass through device policy. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices. */
  dockMacAddress?: string;
  /** Determines if the device will auto renew its support after the support end date. This is a read-only property. */
  willAutoRenew?: boolean;
  /** (Read-only) The date the device was manufactured in yyyy-mm-dd format. */
  manufactureDate?: string;
  /** Output only. Information about Bluetooth adapters of the device. */
  bluetoothAdapterInfo?: ReadonlyArray<BluetoothAdapterInfo>;
  /** Notes about this device added by the administrator. This property can be [searched](https://support.google.com/chrome/a/answer/1698333) with the [list](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/list) method's `query` parameter. Maximum length is 500 characters. Empty values are allowed. */
  notes?: string;
  /** Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only) */
  lastSync?: string;
  /** A list of screenshot files to download. Type is always "SCREENSHOT_FILE". (Read-only) */
  screenshotFiles?: ReadonlyArray<{
    downloadUrl?: string;
    type?: string;
    name?: string;
    createTime?: string;
  }>;
  /** ETag of the resource. */
  etag?: string;
  /** The status of the OS updates for the device. */
  osUpdateStatus?: OsUpdateStatus;
  /** Output only. Whether or not the device requires the extended support opt in. */
  extendedSupportEligible?: boolean;
  /** Reports of CPU utilization and temperature (Read-only) */
  cpuStatusReports?: ReadonlyArray<{
    reportTime?: string;
    cpuUtilizationPercentageInfo?: ReadonlyArray<number>;
    cpuTemperatureInfo?: ReadonlyArray<{
      temperature?: number;
      label?: string;
    }>;
  }>;
  /** (Read-only) The timestamp after which the device will stop receiving Chrome updates or support. Please use "autoUpdateThrough" instead. */
  autoUpdateExpiration?: string;
  /** (Read-only) Deprovision reason. */
  deprovisionReason?:
    | "DEPROVISION_REASON_UNSPECIFIED"
    | "DEPROVISION_REASON_SAME_MODEL_REPLACEMENT"
    | "DEPROVISION_REASON_UPGRADE"
    | "DEPROVISION_REASON_DOMAIN_MOVE"
    | "DEPROVISION_REASON_SERVICE_EXPIRATION"
    | "DEPROVISION_REASON_OTHER"
    | "DEPROVISION_REASON_DIFFERENT_MODEL_REPLACEMENT"
    | "DEPROVISION_REASON_RETIRING_DEVICE"
    | "DEPROVISION_REASON_UPGRADE_TRANSFER"
    | "DEPROVISION_REASON_NOT_REQUIRED"
    | "DEPROVISION_REASON_REPAIR_CENTER"
    | (string & {});
  /** The Chrome device's platform version. */
  platformVersion?: string;
  /** A list of recent device users, in descending order, by last login time. */
  recentUsers?: ReadonlyArray<{ email?: string; type?: string }>;
  /** Date and time for the first time the device was enrolled. */
  firstEnrollmentTime?: string;
  /** The unique ID of the Chrome device. */
  deviceId?: string;
  /** Total RAM on the device [in bytes] (Read-only) */
  systemRamTotal?: string;
  /** Final date the device will be supported (Read-only) */
  supportEndDate?: string;
}

export const ChromeOsDevice = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  orgUnitId: Schema.optional(Schema.String),
  lastDeprovisionTimestamp: Schema.optional(Schema.String),
  autoUpdateThrough: Schema.optional(Schema.String),
  diskSpaceUsage: Schema.optional(ByteUsage),
  cpuInfo: Schema.optional(
    Schema.Array(
      Schema.Struct({
        model: Schema.optional(Schema.String),
        logicalCpus: Schema.optional(
          Schema.Array(
            Schema.Struct({
              maxScalingFrequencyKhz: Schema.optional(Schema.Number),
              currentScalingFrequencyKhz: Schema.optional(Schema.Number),
              cStates: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    displayName: Schema.optional(Schema.String),
                    sessionDuration: Schema.optional(Schema.String),
                  }),
                ),
              ),
              idleDuration: Schema.optional(Schema.String),
            }),
          ),
        ),
        maxClockSpeedKhz: Schema.optional(Schema.Number),
        architecture: Schema.optional(Schema.String),
      }),
    ),
  ),
  extendedSupportStart: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  orderNumber: Schema.optional(Schema.String),
  ethernetMacAddress: Schema.optional(Schema.String),
  annotatedAssetId: Schema.optional(Schema.String),
  deviceLicenseType: Schema.optional(Schema.String),
  annotatedLocation: Schema.optional(Schema.String),
  meid: Schema.optional(Schema.String),
  bootMode: Schema.optional(Schema.String),
  fanInfo: Schema.optional(Schema.Array(FanInfo)),
  deviceFiles: Schema.optional(
    Schema.Array(
      Schema.Struct({
        downloadUrl: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        createTime: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
  lastEnrollmentTime: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  chromeOsType: Schema.optional(Schema.String),
  activeTimeRanges: Schema.optional(
    Schema.Array(
      Schema.Struct({
        activeTime: Schema.optional(Schema.Number),
        date: Schema.optional(Schema.String),
      }),
    ),
  ),
  systemRamFreeReports: Schema.optional(
    Schema.Array(
      Schema.Struct({
        systemRamFreeInfo: Schema.optional(Schema.Array(Schema.String)),
        reportTime: Schema.optional(Schema.String),
      }),
    ),
  ),
  lastKnownNetwork: Schema.optional(
    Schema.Array(
      Schema.Struct({
        ipAddress: Schema.optional(Schema.String),
        wanIpAddress: Schema.optional(Schema.String),
      }),
    ),
  ),
  annotatedUser: Schema.optional(Schema.String),
  macAddress: Schema.optional(Schema.String),
  model: Schema.optional(Schema.String),
  osVersionCompliance: Schema.optional(Schema.String),
  osVersion: Schema.optional(Schema.String),
  extendedSupportEnabled: Schema.optional(Schema.Boolean),
  firmwareVersion: Schema.optional(Schema.String),
  diskVolumeReports: Schema.optional(
    Schema.Array(
      Schema.Struct({
        volumeInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              volumeId: Schema.optional(Schema.String),
              storageTotal: Schema.optional(Schema.String),
              storageFree: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  ),
  backlightInfo: Schema.optional(Schema.Array(BacklightInfo)),
  tpmVersionInfo: Schema.optional(
    Schema.Struct({
      specLevel: Schema.optional(Schema.String),
      vendorSpecific: Schema.optional(Schema.String),
      firmwareVersion: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      tpmModel: Schema.optional(Schema.String),
      manufacturer: Schema.optional(Schema.String),
    }),
  ),
  ethernetMacAddress0: Schema.optional(Schema.String),
  orgUnitPath: Schema.optional(Schema.String),
  serialNumber: Schema.optional(Schema.String),
  dockMacAddress: Schema.optional(Schema.String),
  willAutoRenew: Schema.optional(Schema.Boolean),
  manufactureDate: Schema.optional(Schema.String),
  bluetoothAdapterInfo: Schema.optional(Schema.Array(BluetoothAdapterInfo)),
  notes: Schema.optional(Schema.String),
  lastSync: Schema.optional(Schema.String),
  screenshotFiles: Schema.optional(
    Schema.Array(
      Schema.Struct({
        downloadUrl: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        createTime: Schema.optional(Schema.String),
      }),
    ),
  ),
  etag: Schema.optional(Schema.String),
  osUpdateStatus: Schema.optional(OsUpdateStatus),
  extendedSupportEligible: Schema.optional(Schema.Boolean),
  cpuStatusReports: Schema.optional(
    Schema.Array(
      Schema.Struct({
        reportTime: Schema.optional(Schema.String),
        cpuUtilizationPercentageInfo: Schema.optional(
          Schema.Array(Schema.Number),
        ),
        cpuTemperatureInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              temperature: Schema.optional(Schema.Number),
              label: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  ),
  autoUpdateExpiration: Schema.optional(Schema.String),
  deprovisionReason: Schema.optional(Schema.String),
  platformVersion: Schema.optional(Schema.String),
  recentUsers: Schema.optional(
    Schema.Array(
      Schema.Struct({
        email: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
  firstEnrollmentTime: Schema.optional(Schema.String),
  deviceId: Schema.optional(Schema.String),
  systemRamTotal: Schema.optional(Schema.String),
  supportEndDate: Schema.optional(Schema.String),
}).annotate({ identifier: "ChromeOsDevice" });

export interface CreatePrinterRequest {
  /** Required. The name of the customer. Format: customers/{customer_id} */
  parent?: string;
  /** Required. A printer to create. If you want to place the printer under particular OU then populate printer.org_unit_id filed. Otherwise the printer will be placed under root OU. */
  printer?: Printer;
}

export const CreatePrinterRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  parent: Schema.optional(Schema.String),
  printer: Schema.optional(Printer),
}).annotate({ identifier: "CreatePrinterRequest" });

export interface ListPrintersResponse {
  /** List of printers. If `org_unit_id` was given in the request, then only printers visible for this OU will be returned. If `org_unit_id` was not given in the request, then all printers will be returned. */
  printers?: ReadonlyArray<Printer>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListPrintersResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  printers: Schema.optional(Schema.Array(Printer)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListPrintersResponse" });

export interface Customer {
  /** Identifies the resource as a customer. Value: `admin#directory#customer` */
  kind?: string;
  /** The customer's primary domain name string. Do not include the `www` prefix when creating a new customer. */
  customerDomain?: string;
  /** The customer's postal address information. */
  postalAddress?: CustomerPostalAddress;
  /** The customer's contact phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format. */
  phoneNumber?: string;
  /** ETag of the resource. */
  etag?: string;
  /** The customer's creation time (Readonly) */
  customerCreationTime?: string;
  /** The unique ID for the customer's Google Workspace account. (Readonly) */
  id?: string;
  /** The customer's ISO 639-2 language code. See the [Language Codes](https://developers.google.com/workspace/admin/directory/v1/languages) page for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. The default value is `en`. */
  language?: string;
  /** The customer's secondary contact email address. This email address cannot be on the same domain as the `customerDomain` */
  alternateEmail?: string;
}

export const Customer = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  customerDomain: Schema.optional(Schema.String),
  postalAddress: Schema.optional(CustomerPostalAddress),
  phoneNumber: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  customerCreationTime: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  language: Schema.optional(Schema.String),
  alternateEmail: Schema.optional(Schema.String),
}).annotate({ identifier: "Customer" });

export interface BatchCreatePrintersRequest {
  /** A list of Printers to be created. Max 50 at a time. */
  requests?: ReadonlyArray<CreatePrinterRequest>;
}

export const BatchCreatePrintersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(CreatePrinterRequest)),
  }).annotate({ identifier: "BatchCreatePrintersRequest" });

export interface BatchCreatePrintersResponse {
  /** A list of successfully created printers with their IDs populated. */
  printers?: ReadonlyArray<Printer>;
  /** A list of create failures. Printer IDs are not populated, as printer were not created. */
  failures?: ReadonlyArray<FailureInfo>;
}

export const BatchCreatePrintersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    printers: Schema.optional(Schema.Array(Printer)),
    failures: Schema.optional(Schema.Array(FailureInfo)),
  }).annotate({ identifier: "BatchCreatePrintersResponse" });

export interface UserLanguage {
  /** Other language. User can provide their own language name if there is no corresponding ISO 639 language code. If this is set, `languageCode` can't be set. */
  customLanguage?: string;
  /** ISO 639 string representation of a language. See [Language Codes](/admin-sdk/directory/v1/languages) for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. Illegal values cause `SchemaException`. If this is set, `customLanguage` can't be set. */
  languageCode?: string;
  /** Optional. If present, controls whether the specified `languageCode` is the user's preferred language. If `customLanguage` is set, this can't be set. Allowed values are `preferred` and `not_preferred`. */
  preference?: string;
}

export const UserLanguage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customLanguage: Schema.optional(Schema.String),
  languageCode: Schema.optional(Schema.String),
  preference: Schema.optional(Schema.String),
}).annotate({ identifier: "UserLanguage" });

export interface UserLocation {
  /** Textual location. This is most useful for display purposes to concisely describe the location. For example 'Mountain View, CA', 'Near Seattle', 'US-NYC-9TH 9A209A.'' */
  area?: string;
  /** Custom Type. */
  customType?: string;
  /** Each entry can have a type which indicates standard types of that entry. For example location could be of types default and desk. In addition to standard type an entry can have a custom type and can give it any name. Such types should have 'custom' as type and also have a customType value. */
  type?: string;
  /** Floor name/number. */
  floorName?: string;
  /** Building Identifier. */
  buildingId?: string;
  /** Most specific textual code of individual desk location. */
  deskCode?: string;
  /** Floor section. More specific location within the floor. For example if a floor is divided into sections 'A', 'B' and 'C' this field would identify one of those values. */
  floorSection?: string;
}

export const UserLocation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  area: Schema.optional(Schema.String),
  customType: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  floorName: Schema.optional(Schema.String),
  buildingId: Schema.optional(Schema.String),
  deskCode: Schema.optional(Schema.String),
  floorSection: Schema.optional(Schema.String),
}).annotate({ identifier: "UserLocation" });

export interface UserRelation {
  /** Custom Type. */
  customType?: string;
  /** The relation of the user. Some of the possible values are mother father sister brother manager assistant partner. */
  type?: string;
  /** The name of the relation. */
  value?: string;
}

export const UserRelation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customType: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "UserRelation" });

export interface FeatureRename {
  /** New name of the feature. */
  newName?: string;
}

export const FeatureRename = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  newName: Schema.optional(Schema.String),
}).annotate({ identifier: "FeatureRename" });

export interface ChromeOsDevices {
  /** Kind of resource this is. */
  kind?: string;
  /** A list of Chrome OS Device objects. */
  chromeosdevices?: ReadonlyArray<ChromeOsDevice>;
  /** ETag of the resource. */
  etag?: string;
  /** Token used to access the next page of this result. To access the next page, use this token's value in the `pageToken` query string of this request. */
  nextPageToken?: string;
}

export const ChromeOsDevices = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  chromeosdevices: Schema.optional(Schema.Array(ChromeOsDevice)),
  etag: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ChromeOsDevices" });

export interface UserPhoto {
  /** The user's primary email address. */
  primaryEmail?: string;
  /** The MIME type of the photo. Allowed values are `JPEG`, `PNG`, `GIF`, `BMP`, `TIFF`, and web-safe base64 encoding. */
  mimeType?: string;
  /** Height of the photo in pixels. */
  height?: number;
  /** The ID the API uses to uniquely identify the user. */
  id?: string;
  /** Width of the photo in pixels. */
  width?: number;
  /** The user photo's upload data in [web-safe Base64](https://en.wikipedia.org/wiki/Base64#URL_applications) format in bytes. This means: * The slash (/) character is replaced with the underscore (_) character. * The plus sign (+) character is replaced with the hyphen (-) character. * The equals sign (=) character is replaced with the asterisk (*). * For padding, the period (.) character is used instead of the RFC-4648 baseURL definition which uses the equals sign (=) for padding. This is done to simplify URL-parsing. * Whatever the size of the photo being uploaded, the API downsizes it to 96x96 pixels. */
  photoData?: string;
  /** The type of the API resource. For Photo resources, this is `admin#directory#user#photo`. */
  kind?: string;
  /** ETag of the resource. */
  etag?: string;
}

export const UserPhoto = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  primaryEmail: Schema.optional(Schema.String),
  mimeType: Schema.optional(Schema.String),
  height: Schema.optional(Schema.Number),
  id: Schema.optional(Schema.String),
  width: Schema.optional(Schema.Number),
  photoData: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "UserPhoto" });

export interface BatchDeletePrintServersResponse {
  /** A list of print server IDs that were successfully deleted. */
  printServerIds?: ReadonlyArray<string>;
  /** A list of update failures. */
  failedPrintServers?: ReadonlyArray<PrintServerFailureInfo>;
}

export const BatchDeletePrintServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    printServerIds: Schema.optional(Schema.Array(Schema.String)),
    failedPrintServers: Schema.optional(Schema.Array(PrintServerFailureInfo)),
  }).annotate({ identifier: "BatchDeletePrintServersResponse" });

export interface Domains2 {
  /** Kind of resource this is. */
  kind?: string;
  /** ETag of the resource. */
  etag?: string;
  /** A list of domain objects. */
  domains?: ReadonlyArray<Domains>;
}

export const Domains2 = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  domains: Schema.optional(Schema.Array(Domains)),
}).annotate({ identifier: "Domains2" });

// ==========================================================================
// Operations
// ==========================================================================

export interface GetAspsRequest {
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
  /** The unique ID of the ASP. */
  codeId: number;
}

export const GetAspsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userKey: Schema.String.pipe(T.HttpPath("userKey")),
  codeId: Schema.Number.pipe(T.HttpPath("codeId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "admin/directory/v1/users/{userKey}/asps/{codeId}",
  }),
  svc,
) as unknown as Schema.Schema<GetAspsRequest>;

export type GetAspsResponse = Asp;
export const GetAspsResponse = /*@__PURE__*/ /*#__PURE__*/ Asp;

export type GetAspsError = DefaultErrors;

/** Gets information about an ASP issued by a user. */
export const getAsps: API.OperationMethod<
  GetAspsRequest,
  GetAspsResponse,
  GetAspsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAspsRequest,
  output: GetAspsResponse,
  errors: [],
}));

export interface DeleteAspsRequest {
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
  /** The unique ID of the ASP to be deleted. */
  codeId: number;
}

export const DeleteAspsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userKey: Schema.String.pipe(T.HttpPath("userKey")),
  codeId: Schema.Number.pipe(T.HttpPath("codeId")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "admin/directory/v1/users/{userKey}/asps/{codeId}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteAspsRequest>;

export interface DeleteAspsResponse {}
export const DeleteAspsResponse: Schema.Schema<DeleteAspsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAspsResponse>;

export type DeleteAspsError = DefaultErrors;

/** Deletes an ASP issued by a user. */
export const deleteAsps: API.OperationMethod<
  DeleteAspsRequest,
  DeleteAspsResponse,
  DeleteAspsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAspsRequest,
  output: DeleteAspsResponse,
  errors: [],
}));

export interface ListAspsRequest {
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
}

export const ListAspsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userKey: Schema.String.pipe(T.HttpPath("userKey")),
}).pipe(
  T.Http({ method: "GET", path: "admin/directory/v1/users/{userKey}/asps" }),
  svc,
) as unknown as Schema.Schema<ListAspsRequest>;

export type ListAspsResponse = Asps;
export const ListAspsResponse = /*@__PURE__*/ /*#__PURE__*/ Asps;

export type ListAspsError = DefaultErrors;

/** Lists the ASPs issued by a user. */
export const listAsps: API.OperationMethod<
  ListAspsRequest,
  ListAspsResponse,
  ListAspsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAspsRequest,
  output: ListAspsResponse,
  errors: [],
}));

export interface CountChromeOsDevicesCustomerDevicesChromeosRequest {
  /** Optional. Search string in the format given at [List query operators](https://developers.google.com/workspace/admin/directory/v1/list-query-operators). */
  filter?: string;
  /** Optional. Return devices from all child orgunits, as well as the specified org unit. If this is set to true, 'orgUnitPath' must be provided. */
  includeChildOrgunits?: boolean;
  /** Required. Immutable ID of the Google Workspace account. */
  customerId: string;
  /** Optional. The full path of the organizational unit (minus the leading `/`) or its unique ID. */
  orgUnitPath?: string;
}

export const CountChromeOsDevicesCustomerDevicesChromeosRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    includeChildOrgunits: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeChildOrgunits"),
    ),
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
    orgUnitPath: Schema.optional(Schema.String).pipe(
      T.HttpQuery("orgUnitPath"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/customer/{customerId}/devices/chromeos:countChromeOsDevices",
    }),
    svc,
  ) as unknown as Schema.Schema<CountChromeOsDevicesCustomerDevicesChromeosRequest>;

export type CountChromeOsDevicesCustomerDevicesChromeosResponse =
  CountChromeOsDevicesResponse;
export const CountChromeOsDevicesCustomerDevicesChromeosResponse =
  /*@__PURE__*/ /*#__PURE__*/ CountChromeOsDevicesResponse;

export type CountChromeOsDevicesCustomerDevicesChromeosError = DefaultErrors;

/** Counts ChromeOS devices matching the request. */
export const countChromeOsDevicesCustomerDevicesChromeos: API.OperationMethod<
  CountChromeOsDevicesCustomerDevicesChromeosRequest,
  CountChromeOsDevicesCustomerDevicesChromeosResponse,
  CountChromeOsDevicesCustomerDevicesChromeosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CountChromeOsDevicesCustomerDevicesChromeosRequest,
  output: CountChromeOsDevicesCustomerDevicesChromeosResponse,
  errors: [],
}));

export interface IssueCommandCustomerDevicesChromeosRequest {
  /** Immutable. ID of the Google Workspace account. */
  customerId: string;
  /** Immutable. ID of Chrome OS Device. */
  deviceId: string;
  /** Request body */
  body?: DirectoryChromeosdevicesIssueCommandRequest;
}

export const IssueCommandCustomerDevicesChromeosRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
    deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
    body: Schema.optional(DirectoryChromeosdevicesIssueCommandRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<IssueCommandCustomerDevicesChromeosRequest>;

export type IssueCommandCustomerDevicesChromeosResponse =
  DirectoryChromeosdevicesIssueCommandResponse;
export const IssueCommandCustomerDevicesChromeosResponse =
  /*@__PURE__*/ /*#__PURE__*/ DirectoryChromeosdevicesIssueCommandResponse;

export type IssueCommandCustomerDevicesChromeosError = DefaultErrors;

/** Issues a command for the device to execute. */
export const issueCommandCustomerDevicesChromeos: API.OperationMethod<
  IssueCommandCustomerDevicesChromeosRequest,
  IssueCommandCustomerDevicesChromeosResponse,
  IssueCommandCustomerDevicesChromeosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: IssueCommandCustomerDevicesChromeosRequest,
  output: IssueCommandCustomerDevicesChromeosResponse,
  errors: [],
}));

export interface BatchChangeStatusCustomerDevicesChromeosRequest {
  /** Required. Immutable ID of the Google Workspace account. */
  customerId: string;
  /** Request body */
  body?: BatchChangeChromeOsDeviceStatusRequest;
}

export const BatchChangeStatusCustomerDevicesChromeosRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
    body: Schema.optional(BatchChangeChromeOsDeviceStatusRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchChangeStatusCustomerDevicesChromeosRequest>;

export type BatchChangeStatusCustomerDevicesChromeosResponse =
  BatchChangeChromeOsDeviceStatusResponse;
export const BatchChangeStatusCustomerDevicesChromeosResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchChangeChromeOsDeviceStatusResponse;

export type BatchChangeStatusCustomerDevicesChromeosError = DefaultErrors;

/** Changes the status of a batch of ChromeOS devices. For more information about changing a ChromeOS device state [Repair, repurpose, or retire ChromeOS devices](https://support.google.com/chrome/a/answer/3523633). */
export const batchChangeStatusCustomerDevicesChromeos: API.OperationMethod<
  BatchChangeStatusCustomerDevicesChromeosRequest,
  BatchChangeStatusCustomerDevicesChromeosResponse,
  BatchChangeStatusCustomerDevicesChromeosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchChangeStatusCustomerDevicesChromeosRequest,
  output: BatchChangeStatusCustomerDevicesChromeosResponse,
  errors: [],
}));

export interface GetCustomerDevicesChromeosCommandsRequest {
  /** Immutable. ID of Chrome OS Device. */
  deviceId: string;
  /** Immutable. ID of Chrome OS Device Command. */
  commandId: string;
  /** Immutable. ID of the Google Workspace account. */
  customerId: string;
}

export const GetCustomerDevicesChromeosCommandsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
    commandId: Schema.String.pipe(T.HttpPath("commandId")),
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}/commands/{commandId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetCustomerDevicesChromeosCommandsRequest>;

export type GetCustomerDevicesChromeosCommandsResponse =
  DirectoryChromeosdevicesCommand;
export const GetCustomerDevicesChromeosCommandsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DirectoryChromeosdevicesCommand;

export type GetCustomerDevicesChromeosCommandsError = DefaultErrors;

/** Gets command data a specific command issued to the device. */
export const getCustomerDevicesChromeosCommands: API.OperationMethod<
  GetCustomerDevicesChromeosCommandsRequest,
  GetCustomerDevicesChromeosCommandsResponse,
  GetCustomerDevicesChromeosCommandsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomerDevicesChromeosCommandsRequest,
  output: GetCustomerDevicesChromeosCommandsResponse,
  errors: [],
}));

export interface ListResourcesBuildingsRequest {
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Token to specify the next page in the list. */
  pageToken?: string;
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
}

export const ListResourcesBuildingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    customer: Schema.String.pipe(T.HttpPath("customer")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/customer/{customer}/resources/buildings",
    }),
    svc,
  ) as unknown as Schema.Schema<ListResourcesBuildingsRequest>;

export type ListResourcesBuildingsResponse = Buildings;
export const ListResourcesBuildingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Buildings;

export type ListResourcesBuildingsError = DefaultErrors;

/** Retrieves a list of buildings for an account. */
export const listResourcesBuildings: API.PaginatedOperationMethod<
  ListResourcesBuildingsRequest,
  ListResourcesBuildingsResponse,
  ListResourcesBuildingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListResourcesBuildingsRequest,
  output: ListResourcesBuildingsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetResourcesBuildingsRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** The unique ID of the building to retrieve. */
  buildingId: string;
}

export const GetResourcesBuildingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.HttpPath("customer")),
    buildingId: Schema.String.pipe(T.HttpPath("buildingId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetResourcesBuildingsRequest>;

export type GetResourcesBuildingsResponse = Building;
export const GetResourcesBuildingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Building;

export type GetResourcesBuildingsError = DefaultErrors;

/** Retrieves a building. */
export const getResourcesBuildings: API.OperationMethod<
  GetResourcesBuildingsRequest,
  GetResourcesBuildingsResponse,
  GetResourcesBuildingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetResourcesBuildingsRequest,
  output: GetResourcesBuildingsResponse,
  errors: [],
}));

export interface InsertResourcesBuildingsRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** Source from which Building.coordinates are derived. */
  coordinatesSource?:
    | "CLIENT_SPECIFIED"
    | "RESOLVED_FROM_ADDRESS"
    | "SOURCE_UNSPECIFIED"
    | (string & {});
  /** Request body */
  body?: Building;
}

export const InsertResourcesBuildingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.HttpPath("customer")),
    coordinatesSource: Schema.optional(Schema.String).pipe(
      T.HttpQuery("coordinatesSource"),
    ),
    body: Schema.optional(Building).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/customer/{customer}/resources/buildings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertResourcesBuildingsRequest>;

export type InsertResourcesBuildingsResponse = Building;
export const InsertResourcesBuildingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Building;

export type InsertResourcesBuildingsError = DefaultErrors;

/** Inserts a building. */
export const insertResourcesBuildings: API.OperationMethod<
  InsertResourcesBuildingsRequest,
  InsertResourcesBuildingsResponse,
  InsertResourcesBuildingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertResourcesBuildingsRequest,
  output: InsertResourcesBuildingsResponse,
  errors: [],
}));

export interface UpdateResourcesBuildingsRequest {
  /** Source from which Building.coordinates are derived. */
  coordinatesSource?:
    | "CLIENT_SPECIFIED"
    | "RESOLVED_FROM_ADDRESS"
    | "SOURCE_UNSPECIFIED"
    | (string & {});
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** The id of the building to update. */
  buildingId: string;
  /** Request body */
  body?: Building;
}

export const UpdateResourcesBuildingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    coordinatesSource: Schema.optional(Schema.String).pipe(
      T.HttpQuery("coordinatesSource"),
    ),
    customer: Schema.String.pipe(T.HttpPath("customer")),
    buildingId: Schema.String.pipe(T.HttpPath("buildingId")),
    body: Schema.optional(Building).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateResourcesBuildingsRequest>;

export type UpdateResourcesBuildingsResponse = Building;
export const UpdateResourcesBuildingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Building;

export type UpdateResourcesBuildingsError = DefaultErrors;

/** Updates a building. */
export const updateResourcesBuildings: API.OperationMethod<
  UpdateResourcesBuildingsRequest,
  UpdateResourcesBuildingsResponse,
  UpdateResourcesBuildingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateResourcesBuildingsRequest,
  output: UpdateResourcesBuildingsResponse,
  errors: [],
}));

export interface PatchResourcesBuildingsRequest {
  /** Source from which Building.coordinates are derived. */
  coordinatesSource?:
    | "CLIENT_SPECIFIED"
    | "RESOLVED_FROM_ADDRESS"
    | "SOURCE_UNSPECIFIED"
    | (string & {});
  /** The id of the building to update. */
  buildingId: string;
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** Request body */
  body?: Building;
}

export const PatchResourcesBuildingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    coordinatesSource: Schema.optional(Schema.String).pipe(
      T.HttpQuery("coordinatesSource"),
    ),
    buildingId: Schema.String.pipe(T.HttpPath("buildingId")),
    customer: Schema.String.pipe(T.HttpPath("customer")),
    body: Schema.optional(Building).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchResourcesBuildingsRequest>;

export type PatchResourcesBuildingsResponse = Building;
export const PatchResourcesBuildingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Building;

export type PatchResourcesBuildingsError = DefaultErrors;

/** Patches a building. */
export const patchResourcesBuildings: API.OperationMethod<
  PatchResourcesBuildingsRequest,
  PatchResourcesBuildingsResponse,
  PatchResourcesBuildingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchResourcesBuildingsRequest,
  output: PatchResourcesBuildingsResponse,
  errors: [],
}));

export interface DeleteResourcesBuildingsRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** The id of the building to delete. */
  buildingId: string;
}

export const DeleteResourcesBuildingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.HttpPath("customer")),
    buildingId: Schema.String.pipe(T.HttpPath("buildingId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteResourcesBuildingsRequest>;

export interface DeleteResourcesBuildingsResponse {}
export const DeleteResourcesBuildingsResponse: Schema.Schema<DeleteResourcesBuildingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteResourcesBuildingsResponse>;

export type DeleteResourcesBuildingsError = DefaultErrors;

/** Deletes a building. */
export const deleteResourcesBuildings: API.OperationMethod<
  DeleteResourcesBuildingsRequest,
  DeleteResourcesBuildingsResponse,
  DeleteResourcesBuildingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteResourcesBuildingsRequest,
  output: DeleteResourcesBuildingsResponse,
  errors: [],
}));

export interface ListResourcesCalendarsRequest {
  /** Field(s) to sort results by in either ascending or descending order. Supported fields include `resourceId`, `resourceName`, `capacity`, `buildingId`, and `floorName`. If no order is specified, defaults to ascending. Should be of the form "field [asc|desc], field [asc|desc], ...". For example `buildingId, capacity desc` would return results sorted first by `buildingId` in ascending order then by `capacity` in descending order. */
  orderBy?: string;
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Token to specify the next page in the list. */
  pageToken?: string;
  /** String query used to filter results. Contains one or more search clauses, each with a field, operator, and value. A field can be any of supported fields and operators can be any of supported operations. Operators include '=' for exact match, '!=' for mismatch and ':' for prefix match or HAS match where applicable. For prefix match, the value should always be followed by a *. Logical operators NOT and AND are supported (in this order of precedence). Supported fields include `generatedResourceName`, `name`, `buildingId`, `floor_name`, `capacity`, `featureInstances.feature.name`, `resourceEmail`, `resourceCategory`. For example `buildingId=US-NYC-9TH AND featureInstances.feature.name:Phone`. */
  query?: string;
}

export const ListResourcesCalendarsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    customer: Schema.String.pipe(T.HttpPath("customer")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/customer/{customer}/resources/calendars",
    }),
    svc,
  ) as unknown as Schema.Schema<ListResourcesCalendarsRequest>;

export type ListResourcesCalendarsResponse = CalendarResources;
export const ListResourcesCalendarsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CalendarResources;

export type ListResourcesCalendarsError = DefaultErrors;

/** Retrieves a list of calendar resources for an account. */
export const listResourcesCalendars: API.PaginatedOperationMethod<
  ListResourcesCalendarsRequest,
  ListResourcesCalendarsResponse,
  ListResourcesCalendarsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListResourcesCalendarsRequest,
  output: ListResourcesCalendarsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface InsertResourcesCalendarsRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** Request body */
  body?: CalendarResource;
}

export const InsertResourcesCalendarsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.HttpPath("customer")),
    body: Schema.optional(CalendarResource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/customer/{customer}/resources/calendars",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertResourcesCalendarsRequest>;

export type InsertResourcesCalendarsResponse = CalendarResource;
export const InsertResourcesCalendarsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CalendarResource;

export type InsertResourcesCalendarsError = DefaultErrors;

/** Inserts a calendar resource. */
export const insertResourcesCalendars: API.OperationMethod<
  InsertResourcesCalendarsRequest,
  InsertResourcesCalendarsResponse,
  InsertResourcesCalendarsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertResourcesCalendarsRequest,
  output: InsertResourcesCalendarsResponse,
  errors: [],
}));

export interface UpdateResourcesCalendarsRequest {
  /** The unique ID of the calendar resource to update. */
  calendarResourceId: string;
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** Request body */
  body?: CalendarResource;
}

export const UpdateResourcesCalendarsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    calendarResourceId: Schema.String.pipe(T.HttpPath("calendarResourceId")),
    customer: Schema.String.pipe(T.HttpPath("customer")),
    body: Schema.optional(CalendarResource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateResourcesCalendarsRequest>;

export type UpdateResourcesCalendarsResponse = CalendarResource;
export const UpdateResourcesCalendarsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CalendarResource;

export type UpdateResourcesCalendarsError = DefaultErrors;

/** Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved. */
export const updateResourcesCalendars: API.OperationMethod<
  UpdateResourcesCalendarsRequest,
  UpdateResourcesCalendarsResponse,
  UpdateResourcesCalendarsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateResourcesCalendarsRequest,
  output: UpdateResourcesCalendarsResponse,
  errors: [],
}));

export interface GetResourcesCalendarsRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** The unique ID of the calendar resource to retrieve. */
  calendarResourceId: string;
}

export const GetResourcesCalendarsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.HttpPath("customer")),
    calendarResourceId: Schema.String.pipe(T.HttpPath("calendarResourceId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetResourcesCalendarsRequest>;

export type GetResourcesCalendarsResponse = CalendarResource;
export const GetResourcesCalendarsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CalendarResource;

export type GetResourcesCalendarsError = DefaultErrors;

/** Retrieves a calendar resource. */
export const getResourcesCalendars: API.OperationMethod<
  GetResourcesCalendarsRequest,
  GetResourcesCalendarsResponse,
  GetResourcesCalendarsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetResourcesCalendarsRequest,
  output: GetResourcesCalendarsResponse,
  errors: [],
}));

export interface PatchResourcesCalendarsRequest {
  /** The unique ID of the calendar resource to update. */
  calendarResourceId: string;
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** Request body */
  body?: CalendarResource;
}

export const PatchResourcesCalendarsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    calendarResourceId: Schema.String.pipe(T.HttpPath("calendarResourceId")),
    customer: Schema.String.pipe(T.HttpPath("customer")),
    body: Schema.optional(CalendarResource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchResourcesCalendarsRequest>;

export type PatchResourcesCalendarsResponse = CalendarResource;
export const PatchResourcesCalendarsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CalendarResource;

export type PatchResourcesCalendarsError = DefaultErrors;

/** Patches a calendar resource. */
export const patchResourcesCalendars: API.OperationMethod<
  PatchResourcesCalendarsRequest,
  PatchResourcesCalendarsResponse,
  PatchResourcesCalendarsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchResourcesCalendarsRequest,
  output: PatchResourcesCalendarsResponse,
  errors: [],
}));

export interface DeleteResourcesCalendarsRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** The unique ID of the calendar resource to delete. */
  calendarResourceId: string;
}

export const DeleteResourcesCalendarsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.HttpPath("customer")),
    calendarResourceId: Schema.String.pipe(T.HttpPath("calendarResourceId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteResourcesCalendarsRequest>;

export interface DeleteResourcesCalendarsResponse {}
export const DeleteResourcesCalendarsResponse: Schema.Schema<DeleteResourcesCalendarsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteResourcesCalendarsResponse>;

export type DeleteResourcesCalendarsError = DefaultErrors;

/** Deletes a calendar resource. */
export const deleteResourcesCalendars: API.OperationMethod<
  DeleteResourcesCalendarsRequest,
  DeleteResourcesCalendarsResponse,
  DeleteResourcesCalendarsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteResourcesCalendarsRequest,
  output: DeleteResourcesCalendarsResponse,
  errors: [],
}));

export interface PatchResourcesFeaturesRequest {
  /** The unique ID of the feature to update. */
  featureKey: string;
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** Request body */
  body?: Feature;
}

export const PatchResourcesFeaturesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    featureKey: Schema.String.pipe(T.HttpPath("featureKey")),
    customer: Schema.String.pipe(T.HttpPath("customer")),
    body: Schema.optional(Feature).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "admin/directory/v1/customer/{customer}/resources/features/{featureKey}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchResourcesFeaturesRequest>;

export type PatchResourcesFeaturesResponse = Feature;
export const PatchResourcesFeaturesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Feature;

export type PatchResourcesFeaturesError = DefaultErrors;

/** Patches a feature. */
export const patchResourcesFeatures: API.OperationMethod<
  PatchResourcesFeaturesRequest,
  PatchResourcesFeaturesResponse,
  PatchResourcesFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchResourcesFeaturesRequest,
  output: PatchResourcesFeaturesResponse,
  errors: [],
}));

export interface DeleteResourcesFeaturesRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** The unique ID of the feature to delete. */
  featureKey: string;
}

export const DeleteResourcesFeaturesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.HttpPath("customer")),
    featureKey: Schema.String.pipe(T.HttpPath("featureKey")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "admin/directory/v1/customer/{customer}/resources/features/{featureKey}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteResourcesFeaturesRequest>;

export interface DeleteResourcesFeaturesResponse {}
export const DeleteResourcesFeaturesResponse: Schema.Schema<DeleteResourcesFeaturesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteResourcesFeaturesResponse>;

export type DeleteResourcesFeaturesError = DefaultErrors;

/** Deletes a feature. */
export const deleteResourcesFeatures: API.OperationMethod<
  DeleteResourcesFeaturesRequest,
  DeleteResourcesFeaturesResponse,
  DeleteResourcesFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteResourcesFeaturesRequest,
  output: DeleteResourcesFeaturesResponse,
  errors: [],
}));

export interface ListResourcesFeaturesRequest {
  /** Maximum number of results to return. */
  maxResults?: number;
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** Token to specify the next page in the list. */
  pageToken?: string;
}

export const ListResourcesFeaturesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    customer: Schema.String.pipe(T.HttpPath("customer")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/customer/{customer}/resources/features",
    }),
    svc,
  ) as unknown as Schema.Schema<ListResourcesFeaturesRequest>;

export type ListResourcesFeaturesResponse = Features;
export const ListResourcesFeaturesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Features;

export type ListResourcesFeaturesError = DefaultErrors;

/** Retrieves a list of features for an account. */
export const listResourcesFeatures: API.PaginatedOperationMethod<
  ListResourcesFeaturesRequest,
  ListResourcesFeaturesResponse,
  ListResourcesFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListResourcesFeaturesRequest,
  output: ListResourcesFeaturesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RenameResourcesFeaturesRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** The unique ID of the feature to rename. */
  oldName: string;
  /** Request body */
  body?: FeatureRename;
}

export const RenameResourcesFeaturesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.HttpPath("customer")),
    oldName: Schema.String.pipe(T.HttpPath("oldName")),
    body: Schema.optional(FeatureRename).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RenameResourcesFeaturesRequest>;

export interface RenameResourcesFeaturesResponse {}
export const RenameResourcesFeaturesResponse: Schema.Schema<RenameResourcesFeaturesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<RenameResourcesFeaturesResponse>;

export type RenameResourcesFeaturesError = DefaultErrors;

/** Renames a feature. */
export const renameResourcesFeatures: API.OperationMethod<
  RenameResourcesFeaturesRequest,
  RenameResourcesFeaturesResponse,
  RenameResourcesFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RenameResourcesFeaturesRequest,
  output: RenameResourcesFeaturesResponse,
  errors: [],
}));

export interface GetResourcesFeaturesRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** The unique ID of the feature to retrieve. */
  featureKey: string;
}

export const GetResourcesFeaturesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.HttpPath("customer")),
    featureKey: Schema.String.pipe(T.HttpPath("featureKey")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/customer/{customer}/resources/features/{featureKey}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetResourcesFeaturesRequest>;

export type GetResourcesFeaturesResponse = Feature;
export const GetResourcesFeaturesResponse = /*@__PURE__*/ /*#__PURE__*/ Feature;

export type GetResourcesFeaturesError = DefaultErrors;

/** Retrieves a feature. */
export const getResourcesFeatures: API.OperationMethod<
  GetResourcesFeaturesRequest,
  GetResourcesFeaturesResponse,
  GetResourcesFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetResourcesFeaturesRequest,
  output: GetResourcesFeaturesResponse,
  errors: [],
}));

export interface InsertResourcesFeaturesRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** Request body */
  body?: Feature;
}

export const InsertResourcesFeaturesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.HttpPath("customer")),
    body: Schema.optional(Feature).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/customer/{customer}/resources/features",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertResourcesFeaturesRequest>;

export type InsertResourcesFeaturesResponse = Feature;
export const InsertResourcesFeaturesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Feature;

export type InsertResourcesFeaturesError = DefaultErrors;

/** Inserts a feature. */
export const insertResourcesFeatures: API.OperationMethod<
  InsertResourcesFeaturesRequest,
  InsertResourcesFeaturesResponse,
  InsertResourcesFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertResourcesFeaturesRequest,
  output: InsertResourcesFeaturesResponse,
  errors: [],
}));

export interface UpdateResourcesFeaturesRequest {
  /** The unique ID of the feature to update. */
  featureKey: string;
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. */
  customer: string;
  /** Request body */
  body?: Feature;
}

export const UpdateResourcesFeaturesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    featureKey: Schema.String.pipe(T.HttpPath("featureKey")),
    customer: Schema.String.pipe(T.HttpPath("customer")),
    body: Schema.optional(Feature).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "admin/directory/v1/customer/{customer}/resources/features/{featureKey}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateResourcesFeaturesRequest>;

export type UpdateResourcesFeaturesResponse = Feature;
export const UpdateResourcesFeaturesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Feature;

export type UpdateResourcesFeaturesError = DefaultErrors;

/** Updates a feature. */
export const updateResourcesFeatures: API.OperationMethod<
  UpdateResourcesFeaturesRequest,
  UpdateResourcesFeaturesResponse,
  UpdateResourcesFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateResourcesFeaturesRequest,
  output: UpdateResourcesFeaturesResponse,
  errors: [],
}));

export interface MoveDevicesToOuChromeosdevicesRequest {
  /** Immutable. ID of the Google Workspace account */
  customerId: string;
  /** Full path of the target organizational unit or its ID */
  orgUnitPath: string;
  /** Request body */
  body?: ChromeOsMoveDevicesToOu;
}

export const MoveDevicesToOuChromeosdevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
    orgUnitPath: Schema.String.pipe(T.HttpQuery("orgUnitPath")),
    body: Schema.optional(ChromeOsMoveDevicesToOu).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<MoveDevicesToOuChromeosdevicesRequest>;

export interface MoveDevicesToOuChromeosdevicesResponse {}
export const MoveDevicesToOuChromeosdevicesResponse: Schema.Schema<MoveDevicesToOuChromeosdevicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<MoveDevicesToOuChromeosdevicesResponse>;

export type MoveDevicesToOuChromeosdevicesError = DefaultErrors;

/** Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once. */
export const moveDevicesToOuChromeosdevices: API.OperationMethod<
  MoveDevicesToOuChromeosdevicesRequest,
  MoveDevicesToOuChromeosdevicesResponse,
  MoveDevicesToOuChromeosdevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MoveDevicesToOuChromeosdevicesRequest,
  output: MoveDevicesToOuChromeosdevicesResponse,
  errors: [],
}));

export interface UpdateChromeosdevicesRequest {
  /** The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](https://developers.google.com/workspace/admin/v1/reference/chromeosdevices/list) method. */
  deviceId: string;
  /** Determines whether the response contains the full list of properties or only a subset. */
  projection?: "BASIC" | "FULL" | (string & {});
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). */
  customerId: string;
  /** Request body */
  body?: ChromeOsDevice;
}

export const UpdateChromeosdevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
    projection: Schema.optional(Schema.String).pipe(T.HttpQuery("projection")),
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
    body: Schema.optional(ChromeOsDevice).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateChromeosdevicesRequest>;

export type UpdateChromeosdevicesResponse = ChromeOsDevice;
export const UpdateChromeosdevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ChromeOsDevice;

export type UpdateChromeosdevicesError = DefaultErrors;

/** Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. */
export const updateChromeosdevices: API.OperationMethod<
  UpdateChromeosdevicesRequest,
  UpdateChromeosdevicesResponse,
  UpdateChromeosdevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateChromeosdevicesRequest,
  output: UpdateChromeosdevicesResponse,
  errors: [],
}));

export interface GetChromeosdevicesRequest {
  /** The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/list) method. */
  deviceId: string;
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). */
  customerId: string;
  /** Determines whether the response contains the full list of properties or only a subset. */
  projection?: "BASIC" | "FULL" | (string & {});
}

export const GetChromeosdevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
    projection: Schema.optional(Schema.String).pipe(T.HttpQuery("projection")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetChromeosdevicesRequest>;

export type GetChromeosdevicesResponse = ChromeOsDevice;
export const GetChromeosdevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ChromeOsDevice;

export type GetChromeosdevicesError = DefaultErrors;

/** Retrieves a Chrome OS device's properties. */
export const getChromeosdevices: API.OperationMethod<
  GetChromeosdevicesRequest,
  GetChromeosdevicesResponse,
  GetChromeosdevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetChromeosdevicesRequest,
  output: GetChromeosdevicesResponse,
  errors: [],
}));

export interface ListChromeosdevicesRequest {
  /** Return devices from all child orgunits, as well as the specified org unit. If this is set to true, 'orgUnitPath' must be provided. */
  includeChildOrgunits?: boolean;
  /** Device property to use for sorting results. */
  orderBy?:
    | "annotatedLocation"
    | "annotatedUser"
    | "lastSync"
    | "notes"
    | "serialNumber"
    | "status"
    | (string & {});
  /** The `pageToken` query parameter is used to request the next page of query results. The follow-on request's `pageToken` query parameter is the `nextPageToken` from your previous response. */
  pageToken?: string;
  /** Determines whether the response contains the full list of properties or only a subset. */
  projection?: "BASIC" | "FULL" | (string & {});
  /** Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Maximum number of results to return. Value should not exceed 300. */
  maxResults?: number;
  /** Search string in the format given at [List query operators](https://developers.google.com/workspace/admin/directory/v1/list-query-operators). */
  query?: string;
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). */
  customerId: string;
  /** The full path of the organizational unit (minus the leading `/`) or its unique ID. */
  orgUnitPath?: string;
}

export const ListChromeosdevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeChildOrgunits: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeChildOrgunits"),
    ),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    projection: Schema.optional(Schema.String).pipe(T.HttpQuery("projection")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
    orgUnitPath: Schema.optional(Schema.String).pipe(
      T.HttpQuery("orgUnitPath"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/customer/{customerId}/devices/chromeos",
    }),
    svc,
  ) as unknown as Schema.Schema<ListChromeosdevicesRequest>;

export type ListChromeosdevicesResponse = ChromeOsDevices;
export const ListChromeosdevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ChromeOsDevices;

export type ListChromeosdevicesError = DefaultErrors;

/** Retrieves a paginated list of Chrome OS devices within an account. */
export const listChromeosdevices: API.PaginatedOperationMethod<
  ListChromeosdevicesRequest,
  ListChromeosdevicesResponse,
  ListChromeosdevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListChromeosdevicesRequest,
  output: ListChromeosdevicesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ActionChromeosdevicesRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). */
  customerId: string;
  /** The unique ID of the device. The `resourceId`s are returned in the response from the [chromeosdevices.list](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/list) method. */
  resourceId: string;
  /** Request body */
  body?: ChromeOsDeviceAction;
}

export const ActionChromeosdevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(ChromeOsDeviceAction).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ActionChromeosdevicesRequest>;

export interface ActionChromeosdevicesResponse {}
export const ActionChromeosdevicesResponse: Schema.Schema<ActionChromeosdevicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ActionChromeosdevicesResponse>;

export type ActionChromeosdevicesError = DefaultErrors;

/** Use [BatchChangeChromeOsDeviceStatus](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos/batchChangeStatus) instead. Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633). */
export const actionChromeosdevices: API.OperationMethod<
  ActionChromeosdevicesRequest,
  ActionChromeosdevicesResponse,
  ActionChromeosdevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ActionChromeosdevicesRequest,
  output: ActionChromeosdevicesResponse,
  errors: [],
}));

export interface PatchChromeosdevicesRequest {
  /** Determines whether the response contains the full list of properties or only a subset. */
  projection?: "BASIC" | "FULL" | (string & {});
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). */
  customerId: string;
  /** The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](https://developers.google.com/workspace/admin/v1/reference/chromeosdevices/list) method. */
  deviceId: string;
  /** Request body */
  body?: ChromeOsDevice;
}

export const PatchChromeosdevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projection: Schema.optional(Schema.String).pipe(T.HttpQuery("projection")),
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
    deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
    body: Schema.optional(ChromeOsDevice).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchChromeosdevicesRequest>;

export type PatchChromeosdevicesResponse = ChromeOsDevice;
export const PatchChromeosdevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ChromeOsDevice;

export type PatchChromeosdevicesError = DefaultErrors;

/** Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch). */
export const patchChromeosdevices: API.OperationMethod<
  PatchChromeosdevicesRequest,
  PatchChromeosdevicesResponse,
  PatchChromeosdevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchChromeosdevicesRequest,
  output: PatchChromeosdevicesResponse,
  errors: [],
}));

export interface DeleteRoleAssignmentsRequest {
  /** Immutable ID of the role assignment. */
  roleAssignmentId: string;
  /** Immutable ID of the Google Workspace account. */
  customer: string;
}

export const DeleteRoleAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    roleAssignmentId: Schema.String.pipe(T.HttpPath("roleAssignmentId")),
    customer: Schema.String.pipe(T.HttpPath("customer")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteRoleAssignmentsRequest>;

export interface DeleteRoleAssignmentsResponse {}
export const DeleteRoleAssignmentsResponse: Schema.Schema<DeleteRoleAssignmentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteRoleAssignmentsResponse>;

export type DeleteRoleAssignmentsError = DefaultErrors;

/** Deletes a role assignment. */
export const deleteRoleAssignments: API.OperationMethod<
  DeleteRoleAssignmentsRequest,
  DeleteRoleAssignmentsResponse,
  DeleteRoleAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRoleAssignmentsRequest,
  output: DeleteRoleAssignmentsResponse,
  errors: [],
}));

export interface InsertRoleAssignmentsRequest {
  /** Immutable ID of the Google Workspace account. */
  customer: string;
  /** Request body */
  body?: RoleAssignment;
}

export const InsertRoleAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.HttpPath("customer")),
    body: Schema.optional(RoleAssignment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/customer/{customer}/roleassignments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertRoleAssignmentsRequest>;

export type InsertRoleAssignmentsResponse = RoleAssignment;
export const InsertRoleAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RoleAssignment;

export type InsertRoleAssignmentsError = DefaultErrors;

/** Creates a role assignment. */
export const insertRoleAssignments: API.OperationMethod<
  InsertRoleAssignmentsRequest,
  InsertRoleAssignmentsResponse,
  InsertRoleAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertRoleAssignmentsRequest,
  output: InsertRoleAssignmentsResponse,
  errors: [],
}));

export interface GetRoleAssignmentsRequest {
  /** The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. */
  customer: string;
  /** Immutable ID of the role assignment. */
  roleAssignmentId: string;
}

export const GetRoleAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.HttpPath("customer")),
    roleAssignmentId: Schema.String.pipe(T.HttpPath("roleAssignmentId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetRoleAssignmentsRequest>;

export type GetRoleAssignmentsResponse = RoleAssignment;
export const GetRoleAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RoleAssignment;

export type GetRoleAssignmentsError = DefaultErrors;

/** Retrieves a role assignment. */
export const getRoleAssignments: API.OperationMethod<
  GetRoleAssignmentsRequest,
  GetRoleAssignmentsResponse,
  GetRoleAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRoleAssignmentsRequest,
  output: GetRoleAssignmentsResponse,
  errors: [],
}));

export interface ListRoleAssignmentsRequest {
  /** When set to `true`, fetches indirect role assignments (i.e. role assignment via a group) as well as direct ones. Defaults to `false`. You must specify `user_key` or the indirect role assignments will not be included. */
  includeIndirectRoleAssignments?: boolean;
  /** The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. */
  customer: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Token to specify the next page in the list. */
  pageToken?: string;
  /** Immutable ID of a role. If included in the request, returns only role assignments containing this role ID. */
  roleId?: string;
  /** The primary email address, alias email address, or unique user or group ID. If included in the request, returns role assignments only for this user or group. */
  userKey?: string;
}

export const ListRoleAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeIndirectRoleAssignments: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeIndirectRoleAssignments"),
    ),
    customer: Schema.String.pipe(T.HttpPath("customer")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    roleId: Schema.optional(Schema.String).pipe(T.HttpQuery("roleId")),
    userKey: Schema.optional(Schema.String).pipe(T.HttpQuery("userKey")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/customer/{customer}/roleassignments",
    }),
    svc,
  ) as unknown as Schema.Schema<ListRoleAssignmentsRequest>;

export type ListRoleAssignmentsResponse = RoleAssignments;
export const ListRoleAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RoleAssignments;

export type ListRoleAssignmentsError = DefaultErrors;

/** Retrieves a paginated list of all roleAssignments. */
export const listRoleAssignments: API.PaginatedOperationMethod<
  ListRoleAssignmentsRequest,
  ListRoleAssignmentsResponse,
  ListRoleAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRoleAssignmentsRequest,
  output: ListRoleAssignmentsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface ListTokensRequest {
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
}

export const ListTokensRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userKey: Schema.String.pipe(T.HttpPath("userKey")),
}).pipe(
  T.Http({ method: "GET", path: "admin/directory/v1/users/{userKey}/tokens" }),
  svc,
) as unknown as Schema.Schema<ListTokensRequest>;

export type ListTokensResponse = Tokens;
export const ListTokensResponse = /*@__PURE__*/ /*#__PURE__*/ Tokens;

export type ListTokensError = DefaultErrors;

/** Returns the set of tokens specified user has issued to 3rd party applications. */
export const listTokens: API.OperationMethod<
  ListTokensRequest,
  ListTokensResponse,
  ListTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListTokensRequest,
  output: ListTokensResponse,
  errors: [],
}));

export interface DeleteTokensRequest {
  /** The Client ID of the application the token is issued to. */
  clientId: string;
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
}

export const DeleteTokensRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clientId: Schema.String.pipe(T.HttpPath("clientId")),
  userKey: Schema.String.pipe(T.HttpPath("userKey")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "admin/directory/v1/users/{userKey}/tokens/{clientId}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteTokensRequest>;

export interface DeleteTokensResponse {}
export const DeleteTokensResponse: Schema.Schema<DeleteTokensResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteTokensResponse>;

export type DeleteTokensError = DefaultErrors;

/** Deletes all access tokens issued by a user for an application. */
export const deleteTokens: API.OperationMethod<
  DeleteTokensRequest,
  DeleteTokensResponse,
  DeleteTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteTokensRequest,
  output: DeleteTokensResponse,
  errors: [],
}));

export interface GetTokensRequest {
  /** The Client ID of the application the token is issued to. */
  clientId: string;
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
}

export const GetTokensRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clientId: Schema.String.pipe(T.HttpPath("clientId")),
  userKey: Schema.String.pipe(T.HttpPath("userKey")),
}).pipe(
  T.Http({
    method: "GET",
    path: "admin/directory/v1/users/{userKey}/tokens/{clientId}",
  }),
  svc,
) as unknown as Schema.Schema<GetTokensRequest>;

export type GetTokensResponse = Token;
export const GetTokensResponse = /*@__PURE__*/ /*#__PURE__*/ Token;

export type GetTokensError = DefaultErrors;

/** Gets information about an access token issued by a user. */
export const getTokens: API.OperationMethod<
  GetTokensRequest,
  GetTokensResponse,
  GetTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTokensRequest,
  output: GetTokensResponse,
  errors: [],
}));

export interface GetDomainsRequest {
  /** Name of domain to be retrieved */
  domainName: string;
  /** The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. */
  customer: string;
}

export const GetDomainsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domainName: Schema.String.pipe(T.HttpPath("domainName")),
  customer: Schema.String.pipe(T.HttpPath("customer")),
}).pipe(
  T.Http({
    method: "GET",
    path: "admin/directory/v1/customer/{customer}/domains/{domainName}",
  }),
  svc,
) as unknown as Schema.Schema<GetDomainsRequest>;

export type GetDomainsResponse = Domains;
export const GetDomainsResponse = /*@__PURE__*/ /*#__PURE__*/ Domains;

export type GetDomainsError = DefaultErrors;

/** Retrieves a domain of the customer. */
export const getDomains: API.OperationMethod<
  GetDomainsRequest,
  GetDomainsResponse,
  GetDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDomainsRequest,
  output: GetDomainsResponse,
  errors: [],
}));

export interface DeleteDomainsRequest {
  /** Immutable ID of the Google Workspace account. */
  customer: string;
  /** Name of domain to be deleted */
  domainName: string;
}

export const DeleteDomainsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customer: Schema.String.pipe(T.HttpPath("customer")),
  domainName: Schema.String.pipe(T.HttpPath("domainName")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "admin/directory/v1/customer/{customer}/domains/{domainName}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteDomainsRequest>;

export interface DeleteDomainsResponse {}
export const DeleteDomainsResponse: Schema.Schema<DeleteDomainsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteDomainsResponse>;

export type DeleteDomainsError = DefaultErrors;

/** Deletes a domain of the customer. */
export const deleteDomains: API.OperationMethod<
  DeleteDomainsRequest,
  DeleteDomainsResponse,
  DeleteDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDomainsRequest,
  output: DeleteDomainsResponse,
  errors: [],
}));

export interface InsertDomainsRequest {
  /** Immutable ID of the Google Workspace account. */
  customer: string;
  /** Request body */
  body?: Domains;
}

export const InsertDomainsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customer: Schema.String.pipe(T.HttpPath("customer")),
  body: Schema.optional(Domains).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "admin/directory/v1/customer/{customer}/domains",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertDomainsRequest>;

export type InsertDomainsResponse = Domains;
export const InsertDomainsResponse = /*@__PURE__*/ /*#__PURE__*/ Domains;

export type InsertDomainsError = DefaultErrors;

/** Inserts a domain of the customer. */
export const insertDomains: API.OperationMethod<
  InsertDomainsRequest,
  InsertDomainsResponse,
  InsertDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertDomainsRequest,
  output: InsertDomainsResponse,
  errors: [],
}));

export interface ListDomainsRequest {
  /** The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. */
  customer: string;
}

export const ListDomainsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customer: Schema.String.pipe(T.HttpPath("customer")),
}).pipe(
  T.Http({
    method: "GET",
    path: "admin/directory/v1/customer/{customer}/domains",
  }),
  svc,
) as unknown as Schema.Schema<ListDomainsRequest>;

export type ListDomainsResponse = Domains2;
export const ListDomainsResponse = /*@__PURE__*/ /*#__PURE__*/ Domains2;

export type ListDomainsError = DefaultErrors;

/** Lists the domains of the customer. */
export const listDomains: API.OperationMethod<
  ListDomainsRequest,
  ListDomainsResponse,
  ListDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListDomainsRequest,
  output: ListDomainsResponse,
  errors: [],
}));

export interface PatchGroupsRequest {
  /** Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. */
  groupKey: string;
  /** Request body */
  body?: Group;
}

export const PatchGroupsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groupKey: Schema.String.pipe(T.HttpPath("groupKey")),
  body: Schema.optional(Group).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "admin/directory/v1/groups/{groupKey}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchGroupsRequest>;

export type PatchGroupsResponse = Group;
export const PatchGroupsResponse = /*@__PURE__*/ /*#__PURE__*/ Group;

export type PatchGroupsError = DefaultErrors;

/** Updates a group's properties. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch). */
export const patchGroups: API.OperationMethod<
  PatchGroupsRequest,
  PatchGroupsResponse,
  PatchGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchGroupsRequest,
  output: PatchGroupsResponse,
  errors: [],
}));

export interface DeleteGroupsRequest {
  /** Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. */
  groupKey: string;
}

export const DeleteGroupsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groupKey: Schema.String.pipe(T.HttpPath("groupKey")),
}).pipe(
  T.Http({ method: "DELETE", path: "admin/directory/v1/groups/{groupKey}" }),
  svc,
) as unknown as Schema.Schema<DeleteGroupsRequest>;

export interface DeleteGroupsResponse {}
export const DeleteGroupsResponse: Schema.Schema<DeleteGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteGroupsResponse>;

export type DeleteGroupsError = DefaultErrors;

/** Deletes a group. */
export const deleteGroups: API.OperationMethod<
  DeleteGroupsRequest,
  DeleteGroupsResponse,
  DeleteGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteGroupsRequest,
  output: DeleteGroupsResponse,
  errors: [],
}));

export interface ListGroupsRequest {
  /** Maximum number of results to return. Max allowed value is 200. */
  maxResults?: number;
  /** The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. */
  customer?: string;
  /** Column to use for sorting results */
  orderBy?: "email" | (string & {});
  /** Whether to return results in ascending or descending order. Only of use when orderBy is also used */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** The domain name. Use this field to get groups from only one domain. To return all domains for a customer account, use the `customer` query parameter instead. */
  domain?: string;
  /** Email or immutable ID of the user if only those groups are to be listed, the given user is a member of. If it's an ID, it should match with the ID of the user object. Cannot be used with the `customer` parameter. */
  userKey?: string;
  /** Token to specify next page in the list */
  pageToken?: string;
  /** Query string search. Contains one or more search clauses, each with a field, operator, and value. For complete documentation, go to [Search for groups](https://developers.google.com/workspace/admin/directory/v1/guides/search-groups). */
  query?: string;
}

export const ListGroupsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  customer: Schema.optional(Schema.String).pipe(T.HttpQuery("customer")),
  orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  domain: Schema.optional(Schema.String).pipe(T.HttpQuery("domain")),
  userKey: Schema.optional(Schema.String).pipe(T.HttpQuery("userKey")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
}).pipe(
  T.Http({ method: "GET", path: "admin/directory/v1/groups" }),
  svc,
) as unknown as Schema.Schema<ListGroupsRequest>;

export type ListGroupsResponse = Groups;
export const ListGroupsResponse = /*@__PURE__*/ /*#__PURE__*/ Groups;

export type ListGroupsError = DefaultErrors;

/** Retrieves all groups of a domain or of a user given a userKey (paginated). */
export const listGroups: API.PaginatedOperationMethod<
  ListGroupsRequest,
  ListGroupsResponse,
  ListGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListGroupsRequest,
  output: ListGroupsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface InsertGroupsRequest {
  /** Request body */
  body?: Group;
}

export const InsertGroupsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(Group).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "admin/directory/v1/groups", hasBody: true }),
  svc,
) as unknown as Schema.Schema<InsertGroupsRequest>;

export type InsertGroupsResponse = Group;
export const InsertGroupsResponse = /*@__PURE__*/ /*#__PURE__*/ Group;

export type InsertGroupsError = DefaultErrors;

/** Creates a group. */
export const insertGroups: API.OperationMethod<
  InsertGroupsRequest,
  InsertGroupsResponse,
  InsertGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertGroupsRequest,
  output: InsertGroupsResponse,
  errors: [],
}));

export interface UpdateGroupsRequest {
  /** Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. */
  groupKey: string;
  /** Request body */
  body?: Group;
}

export const UpdateGroupsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groupKey: Schema.String.pipe(T.HttpPath("groupKey")),
  body: Schema.optional(Group).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "admin/directory/v1/groups/{groupKey}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateGroupsRequest>;

export type UpdateGroupsResponse = Group;
export const UpdateGroupsResponse = /*@__PURE__*/ /*#__PURE__*/ Group;

export type UpdateGroupsError = DefaultErrors;

/** Updates a group's properties. */
export const updateGroups: API.OperationMethod<
  UpdateGroupsRequest,
  UpdateGroupsResponse,
  UpdateGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateGroupsRequest,
  output: UpdateGroupsResponse,
  errors: [],
}));

export interface GetGroupsRequest {
  /** Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. */
  groupKey: string;
}

export const GetGroupsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groupKey: Schema.String.pipe(T.HttpPath("groupKey")),
}).pipe(
  T.Http({ method: "GET", path: "admin/directory/v1/groups/{groupKey}" }),
  svc,
) as unknown as Schema.Schema<GetGroupsRequest>;

export type GetGroupsResponse = Group;
export const GetGroupsResponse = /*@__PURE__*/ /*#__PURE__*/ Group;

export type GetGroupsError = DefaultErrors;

/** Retrieves a group's properties. */
export const getGroups: API.OperationMethod<
  GetGroupsRequest,
  GetGroupsResponse,
  GetGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetGroupsRequest,
  output: GetGroupsResponse,
  errors: [],
}));

export interface DeleteGroupsAliasesRequest {
  /** Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. */
  groupKey: string;
  /** The alias to be removed */
  alias: string;
}

export const DeleteGroupsAliasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupKey: Schema.String.pipe(T.HttpPath("groupKey")),
    alias: Schema.String.pipe(T.HttpPath("alias")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "admin/directory/v1/groups/{groupKey}/aliases/{alias}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteGroupsAliasesRequest>;

export interface DeleteGroupsAliasesResponse {}
export const DeleteGroupsAliasesResponse: Schema.Schema<DeleteGroupsAliasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteGroupsAliasesResponse>;

export type DeleteGroupsAliasesError = DefaultErrors;

/** Removes an alias. */
export const deleteGroupsAliases: API.OperationMethod<
  DeleteGroupsAliasesRequest,
  DeleteGroupsAliasesResponse,
  DeleteGroupsAliasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteGroupsAliasesRequest,
  output: DeleteGroupsAliasesResponse,
  errors: [],
}));

export interface InsertGroupsAliasesRequest {
  /** Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. */
  groupKey: string;
  /** Request body */
  body?: Alias;
}

export const InsertGroupsAliasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupKey: Schema.String.pipe(T.HttpPath("groupKey")),
    body: Schema.optional(Alias).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/groups/{groupKey}/aliases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertGroupsAliasesRequest>;

export type InsertGroupsAliasesResponse = Alias;
export const InsertGroupsAliasesResponse = /*@__PURE__*/ /*#__PURE__*/ Alias;

export type InsertGroupsAliasesError = DefaultErrors;

/** Adds an alias for the group. */
export const insertGroupsAliases: API.OperationMethod<
  InsertGroupsAliasesRequest,
  InsertGroupsAliasesResponse,
  InsertGroupsAliasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertGroupsAliasesRequest,
  output: InsertGroupsAliasesResponse,
  errors: [],
}));

export interface ListGroupsAliasesRequest {
  /** Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. */
  groupKey: string;
}

export const ListGroupsAliasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupKey: Schema.String.pipe(T.HttpPath("groupKey")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/groups/{groupKey}/aliases",
    }),
    svc,
  ) as unknown as Schema.Schema<ListGroupsAliasesRequest>;

export type ListGroupsAliasesResponse = Aliases;
export const ListGroupsAliasesResponse = /*@__PURE__*/ /*#__PURE__*/ Aliases;

export type ListGroupsAliasesError = DefaultErrors;

/** Lists all aliases for a group. */
export const listGroupsAliases: API.OperationMethod<
  ListGroupsAliasesRequest,
  ListGroupsAliasesResponse,
  ListGroupsAliasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListGroupsAliasesRequest,
  output: ListGroupsAliasesResponse,
  errors: [],
}));

export interface StopChannelsRequest {
  /** Request body */
  body?: Channel;
}

export const StopChannelsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(Channel).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "admin/directory_v1/channels/stop",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<StopChannelsRequest>;

export interface StopChannelsResponse {}
export const StopChannelsResponse: Schema.Schema<StopChannelsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<StopChannelsResponse>;

export type StopChannelsError = DefaultErrors;

/** Stops watching resources through this channel. */
export const stopChannels: API.OperationMethod<
  StopChannelsRequest,
  StopChannelsResponse,
  StopChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopChannelsRequest,
  output: StopChannelsResponse,
  errors: [],
}));

export interface ListDomainAliasesRequest {
  /** Name of the parent domain for which domain aliases are to be fetched. */
  parentDomainName?: string;
  /** The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. */
  customer: string;
}

export const ListDomainAliasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parentDomainName: Schema.optional(Schema.String).pipe(
      T.HttpQuery("parentDomainName"),
    ),
    customer: Schema.String.pipe(T.HttpPath("customer")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/customer/{customer}/domainaliases",
    }),
    svc,
  ) as unknown as Schema.Schema<ListDomainAliasesRequest>;

export type ListDomainAliasesResponse = DomainAliases;
export const ListDomainAliasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DomainAliases;

export type ListDomainAliasesError = DefaultErrors;

/** Lists the domain aliases of the customer. */
export const listDomainAliases: API.OperationMethod<
  ListDomainAliasesRequest,
  ListDomainAliasesResponse,
  ListDomainAliasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListDomainAliasesRequest,
  output: ListDomainAliasesResponse,
  errors: [],
}));

export interface DeleteDomainAliasesRequest {
  /** Immutable ID of the Google Workspace account. */
  customer: string;
  /** Name of domain alias to be retrieved. */
  domainAliasName: string;
}

export const DeleteDomainAliasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.HttpPath("customer")),
    domainAliasName: Schema.String.pipe(T.HttpPath("domainAliasName")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteDomainAliasesRequest>;

export interface DeleteDomainAliasesResponse {}
export const DeleteDomainAliasesResponse: Schema.Schema<DeleteDomainAliasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteDomainAliasesResponse>;

export type DeleteDomainAliasesError = DefaultErrors;

/** Deletes a domain Alias of the customer. */
export const deleteDomainAliases: API.OperationMethod<
  DeleteDomainAliasesRequest,
  DeleteDomainAliasesResponse,
  DeleteDomainAliasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDomainAliasesRequest,
  output: DeleteDomainAliasesResponse,
  errors: [],
}));

export interface InsertDomainAliasesRequest {
  /** Immutable ID of the Google Workspace account. */
  customer: string;
  /** Request body */
  body?: DomainAlias;
}

export const InsertDomainAliasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.HttpPath("customer")),
    body: Schema.optional(DomainAlias).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/customer/{customer}/domainaliases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertDomainAliasesRequest>;

export type InsertDomainAliasesResponse = DomainAlias;
export const InsertDomainAliasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DomainAlias;

export type InsertDomainAliasesError = DefaultErrors;

/** Inserts a domain alias of the customer. */
export const insertDomainAliases: API.OperationMethod<
  InsertDomainAliasesRequest,
  InsertDomainAliasesResponse,
  InsertDomainAliasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertDomainAliasesRequest,
  output: InsertDomainAliasesResponse,
  errors: [],
}));

export interface GetDomainAliasesRequest {
  /** The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. */
  customer: string;
  /** Name of domain alias to be retrieved. */
  domainAliasName: string;
}

export const GetDomainAliasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.HttpPath("customer")),
    domainAliasName: Schema.String.pipe(T.HttpPath("domainAliasName")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetDomainAliasesRequest>;

export type GetDomainAliasesResponse = DomainAlias;
export const GetDomainAliasesResponse = /*@__PURE__*/ /*#__PURE__*/ DomainAlias;

export type GetDomainAliasesError = DefaultErrors;

/** Retrieves a domain alias of the customer. */
export const getDomainAliases: API.OperationMethod<
  GetDomainAliasesRequest,
  GetDomainAliasesResponse,
  GetDomainAliasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDomainAliasesRequest,
  output: GetDomainAliasesResponse,
  errors: [],
}));

export interface ListPrivilegesRequest {
  /** The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. */
  customer: string;
}

export const ListPrivilegesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customer: Schema.String.pipe(T.HttpPath("customer")),
}).pipe(
  T.Http({
    method: "GET",
    path: "admin/directory/v1/customer/{customer}/roles/ALL/privileges",
  }),
  svc,
) as unknown as Schema.Schema<ListPrivilegesRequest>;

export type ListPrivilegesResponse = Privileges;
export const ListPrivilegesResponse = /*@__PURE__*/ /*#__PURE__*/ Privileges;

export type ListPrivilegesError = DefaultErrors;

/** Retrieves a paginated list of all privileges for a customer. */
export const listPrivileges: API.OperationMethod<
  ListPrivilegesRequest,
  ListPrivilegesResponse,
  ListPrivilegesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListPrivilegesRequest,
  output: ListPrivilegesResponse,
  errors: [],
}));

export interface GetRolesRequest {
  /** The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. */
  customer: string;
  /** Immutable ID of the role. */
  roleId: string;
}

export const GetRolesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customer: Schema.String.pipe(T.HttpPath("customer")),
  roleId: Schema.String.pipe(T.HttpPath("roleId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "admin/directory/v1/customer/{customer}/roles/{roleId}",
  }),
  svc,
) as unknown as Schema.Schema<GetRolesRequest>;

export type GetRolesResponse = Role;
export const GetRolesResponse = /*@__PURE__*/ /*#__PURE__*/ Role;

export type GetRolesError = DefaultErrors;

/** Retrieves a role. */
export const getRoles: API.OperationMethod<
  GetRolesRequest,
  GetRolesResponse,
  GetRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRolesRequest,
  output: GetRolesResponse,
  errors: [],
}));

export interface InsertRolesRequest {
  /** Immutable ID of the Google Workspace account. */
  customer: string;
  /** Request body */
  body?: Role;
}

export const InsertRolesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customer: Schema.String.pipe(T.HttpPath("customer")),
  body: Schema.optional(Role).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "admin/directory/v1/customer/{customer}/roles",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertRolesRequest>;

export type InsertRolesResponse = Role;
export const InsertRolesResponse = /*@__PURE__*/ /*#__PURE__*/ Role;

export type InsertRolesError = DefaultErrors;

/** Creates a role. */
export const insertRoles: API.OperationMethod<
  InsertRolesRequest,
  InsertRolesResponse,
  InsertRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertRolesRequest,
  output: InsertRolesResponse,
  errors: [],
}));

export interface UpdateRolesRequest {
  /** Immutable ID of the Google Workspace account. */
  customer: string;
  /** Immutable ID of the role. */
  roleId: string;
  /** Request body */
  body?: Role;
}

export const UpdateRolesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customer: Schema.String.pipe(T.HttpPath("customer")),
  roleId: Schema.String.pipe(T.HttpPath("roleId")),
  body: Schema.optional(Role).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "admin/directory/v1/customer/{customer}/roles/{roleId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateRolesRequest>;

export type UpdateRolesResponse = Role;
export const UpdateRolesResponse = /*@__PURE__*/ /*#__PURE__*/ Role;

export type UpdateRolesError = DefaultErrors;

/** Updates a role. */
export const updateRoles: API.OperationMethod<
  UpdateRolesRequest,
  UpdateRolesResponse,
  UpdateRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRolesRequest,
  output: UpdateRolesResponse,
  errors: [],
}));

export interface ListRolesRequest {
  /** Token to specify the next page in the list. */
  pageToken?: string;
  /** The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. */
  customer: string;
  /** Maximum number of results to return. */
  maxResults?: number;
}

export const ListRolesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  customer: Schema.String.pipe(T.HttpPath("customer")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
}).pipe(
  T.Http({
    method: "GET",
    path: "admin/directory/v1/customer/{customer}/roles",
  }),
  svc,
) as unknown as Schema.Schema<ListRolesRequest>;

export type ListRolesResponse = Roles;
export const ListRolesResponse = /*@__PURE__*/ /*#__PURE__*/ Roles;

export type ListRolesError = DefaultErrors;

/** Retrieves a paginated list of all the roles in a domain. */
export const listRoles: API.PaginatedOperationMethod<
  ListRolesRequest,
  ListRolesResponse,
  ListRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRolesRequest,
  output: ListRolesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface DeleteRolesRequest {
  /** Immutable ID of the Google Workspace account. */
  customer: string;
  /** Immutable ID of the role. */
  roleId: string;
}

export const DeleteRolesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customer: Schema.String.pipe(T.HttpPath("customer")),
  roleId: Schema.String.pipe(T.HttpPath("roleId")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "admin/directory/v1/customer/{customer}/roles/{roleId}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteRolesRequest>;

export interface DeleteRolesResponse {}
export const DeleteRolesResponse: Schema.Schema<DeleteRolesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteRolesResponse>;

export type DeleteRolesError = DefaultErrors;

/** Deletes a role. */
export const deleteRoles: API.OperationMethod<
  DeleteRolesRequest,
  DeleteRolesResponse,
  DeleteRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRolesRequest,
  output: DeleteRolesResponse,
  errors: [],
}));

export interface PatchRolesRequest {
  /** Immutable ID of the Google Workspace account. */
  customer: string;
  /** Immutable ID of the role. */
  roleId: string;
  /** Request body */
  body?: Role;
}

export const PatchRolesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customer: Schema.String.pipe(T.HttpPath("customer")),
  roleId: Schema.String.pipe(T.HttpPath("roleId")),
  body: Schema.optional(Role).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "admin/directory/v1/customer/{customer}/roles/{roleId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchRolesRequest>;

export type PatchRolesResponse = Role;
export const PatchRolesResponse = /*@__PURE__*/ /*#__PURE__*/ Role;

export type PatchRolesError = DefaultErrors;

/** Patches a role. */
export const patchRoles: API.OperationMethod<
  PatchRolesRequest,
  PatchRolesResponse,
  PatchRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchRolesRequest,
  output: PatchRolesResponse,
  errors: [],
}));

export interface ListMembersRequest {
  /** Whether to list indirect memberships. Default: false. */
  includeDerivedMembership?: boolean;
  /** Maximum number of results to return. Max allowed value is 200. */
  maxResults?: number;
  /** Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. */
  groupKey: string;
  /** Token to specify next page in the list. */
  pageToken?: string;
  /** The `roles` query parameter allows you to retrieve group members by role. Allowed values are `OWNER`, `MANAGER`, and `MEMBER`. */
  roles?: string;
}

export const ListMembersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includeDerivedMembership: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeDerivedMembership"),
  ),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  groupKey: Schema.String.pipe(T.HttpPath("groupKey")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  roles: Schema.optional(Schema.String).pipe(T.HttpQuery("roles")),
}).pipe(
  T.Http({
    method: "GET",
    path: "admin/directory/v1/groups/{groupKey}/members",
  }),
  svc,
) as unknown as Schema.Schema<ListMembersRequest>;

export type ListMembersResponse = Members;
export const ListMembersResponse = /*@__PURE__*/ /*#__PURE__*/ Members;

export type ListMembersError = DefaultErrors;

/** Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/workspace/admin/directory/v1/guides/troubleshoot-error-codes). */
export const listMembers: API.PaginatedOperationMethod<
  ListMembersRequest,
  ListMembersResponse,
  ListMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListMembersRequest,
  output: ListMembersResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface InsertMembersRequest {
  /** Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. */
  groupKey: string;
  /** Request body */
  body?: Member;
}

export const InsertMembersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groupKey: Schema.String.pipe(T.HttpPath("groupKey")),
  body: Schema.optional(Member).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "admin/directory/v1/groups/{groupKey}/members",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertMembersRequest>;

export type InsertMembersResponse = Member;
export const InsertMembersResponse = /*@__PURE__*/ /*#__PURE__*/ Member;

export type InsertMembersError = DefaultErrors;

/** Adds a user to the specified group. */
export const insertMembers: API.OperationMethod<
  InsertMembersRequest,
  InsertMembersResponse,
  InsertMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertMembersRequest,
  output: InsertMembersResponse,
  errors: [],
}));

export interface UpdateMembersRequest {
  /** Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. */
  groupKey: string;
  /** Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID. */
  memberKey: string;
  /** Request body */
  body?: Member;
}

export const UpdateMembersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groupKey: Schema.String.pipe(T.HttpPath("groupKey")),
  memberKey: Schema.String.pipe(T.HttpPath("memberKey")),
  body: Schema.optional(Member).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "admin/directory/v1/groups/{groupKey}/members/{memberKey}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateMembersRequest>;

export type UpdateMembersResponse = Member;
export const UpdateMembersResponse = /*@__PURE__*/ /*#__PURE__*/ Member;

export type UpdateMembersError = DefaultErrors;

/** Updates the membership of a user in the specified group. */
export const updateMembers: API.OperationMethod<
  UpdateMembersRequest,
  UpdateMembersResponse,
  UpdateMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateMembersRequest,
  output: UpdateMembersResponse,
  errors: [],
}));

export interface GetMembersRequest {
  /** Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. */
  groupKey: string;
  /** Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID. */
  memberKey: string;
}

export const GetMembersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groupKey: Schema.String.pipe(T.HttpPath("groupKey")),
  memberKey: Schema.String.pipe(T.HttpPath("memberKey")),
}).pipe(
  T.Http({
    method: "GET",
    path: "admin/directory/v1/groups/{groupKey}/members/{memberKey}",
  }),
  svc,
) as unknown as Schema.Schema<GetMembersRequest>;

export type GetMembersResponse = Member;
export const GetMembersResponse = /*@__PURE__*/ /*#__PURE__*/ Member;

export type GetMembersError = DefaultErrors;

/** Retrieves a group member's properties. */
export const getMembers: API.OperationMethod<
  GetMembersRequest,
  GetMembersResponse,
  GetMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMembersRequest,
  output: GetMembersResponse,
  errors: [],
}));

export interface HasMemberMembersRequest {
  /** Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. */
  groupKey: string;
  /** Identifies the user member in the API request. The value can be the user's primary email address, alias, or unique ID. */
  memberKey: string;
}

export const HasMemberMembersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupKey: Schema.String.pipe(T.HttpPath("groupKey")),
    memberKey: Schema.String.pipe(T.HttpPath("memberKey")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}",
    }),
    svc,
  ) as unknown as Schema.Schema<HasMemberMembersRequest>;

export type HasMemberMembersResponse = MembersHasMember;
export const HasMemberMembersResponse =
  /*@__PURE__*/ /*#__PURE__*/ MembersHasMember;

export type HasMemberMembersError = DefaultErrors;

/** Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API. */
export const hasMemberMembers: API.OperationMethod<
  HasMemberMembersRequest,
  HasMemberMembersResponse,
  HasMemberMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: HasMemberMembersRequest,
  output: HasMemberMembersResponse,
  errors: [],
}));

export interface PatchMembersRequest {
  /** Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. */
  groupKey: string;
  /** Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID. */
  memberKey: string;
  /** Request body */
  body?: Member;
}

export const PatchMembersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groupKey: Schema.String.pipe(T.HttpPath("groupKey")),
  memberKey: Schema.String.pipe(T.HttpPath("memberKey")),
  body: Schema.optional(Member).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "admin/directory/v1/groups/{groupKey}/members/{memberKey}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchMembersRequest>;

export type PatchMembersResponse = Member;
export const PatchMembersResponse = /*@__PURE__*/ /*#__PURE__*/ Member;

export type PatchMembersError = DefaultErrors;

/** Updates the membership properties of a user in the specified group. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch). */
export const patchMembers: API.OperationMethod<
  PatchMembersRequest,
  PatchMembersResponse,
  PatchMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchMembersRequest,
  output: PatchMembersResponse,
  errors: [],
}));

export interface DeleteMembersRequest {
  /** Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. */
  groupKey: string;
  /** Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID. */
  memberKey: string;
}

export const DeleteMembersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groupKey: Schema.String.pipe(T.HttpPath("groupKey")),
  memberKey: Schema.String.pipe(T.HttpPath("memberKey")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "admin/directory/v1/groups/{groupKey}/members/{memberKey}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteMembersRequest>;

export interface DeleteMembersResponse {}
export const DeleteMembersResponse: Schema.Schema<DeleteMembersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteMembersResponse>;

export type DeleteMembersError = DefaultErrors;

/** Removes a member from a group. */
export const deleteMembers: API.OperationMethod<
  DeleteMembersRequest,
  DeleteMembersResponse,
  DeleteMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteMembersRequest,
  output: DeleteMembersResponse,
  errors: [],
}));

export interface ActionMobiledevicesRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). */
  customerId: string;
  /** The unique ID the API service uses to identify the mobile device. */
  resourceId: string;
  /** Request body */
  body?: MobileDeviceAction;
}

export const ActionMobiledevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    body: Schema.optional(MobileDeviceAction).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ActionMobiledevicesRequest>;

export interface ActionMobiledevicesResponse {}
export const ActionMobiledevicesResponse: Schema.Schema<ActionMobiledevicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ActionMobiledevicesResponse>;

export type ActionMobiledevicesError = DefaultErrors;

/** Takes an action that affects a mobile device. For example, remotely wiping a device. */
export const actionMobiledevices: API.OperationMethod<
  ActionMobiledevicesRequest,
  ActionMobiledevicesResponse,
  ActionMobiledevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ActionMobiledevicesRequest,
  output: ActionMobiledevicesResponse,
  errors: [],
}));

export interface ListMobiledevicesRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). */
  customerId: string;
  /** Restrict information returned to a set of selected fields. */
  projection?: "BASIC" | "FULL" | (string & {});
  /** Token to specify next page in the list */
  pageToken?: string;
  /** Search string in the format given at https://developers.google.com/workspace/admin/directory/v1/search-operators */
  query?: string;
  /** Maximum number of results to return. Max allowed value is 100. */
  maxResults?: number;
  /** Device property to use for sorting results. */
  orderBy?:
    | "deviceId"
    | "email"
    | "lastSync"
    | "model"
    | "name"
    | "os"
    | "status"
    | "type"
    | (string & {});
  /** Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
}

export const ListMobiledevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
    projection: Schema.optional(Schema.String).pipe(T.HttpQuery("projection")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/customer/{customerId}/devices/mobile",
    }),
    svc,
  ) as unknown as Schema.Schema<ListMobiledevicesRequest>;

export type ListMobiledevicesResponse = MobileDevices;
export const ListMobiledevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ MobileDevices;

export type ListMobiledevicesError = DefaultErrors;

/** Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/workspace/admin/directory/v1/guides/troubleshoot-error-codes). */
export const listMobiledevices: API.PaginatedOperationMethod<
  ListMobiledevicesRequest,
  ListMobiledevicesResponse,
  ListMobiledevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListMobiledevicesRequest,
  output: ListMobiledevicesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetMobiledevicesRequest {
  /** Restrict information returned to a set of selected fields. */
  projection?: "BASIC" | "FULL" | (string & {});
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). */
  customerId: string;
  /** The unique ID the API service uses to identify the mobile device. */
  resourceId: string;
}

export const GetMobiledevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projection: Schema.optional(Schema.String).pipe(T.HttpQuery("projection")),
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetMobiledevicesRequest>;

export type GetMobiledevicesResponse = MobileDevice;
export const GetMobiledevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ MobileDevice;

export type GetMobiledevicesError = DefaultErrors;

/** Retrieves a mobile device's properties. */
export const getMobiledevices: API.OperationMethod<
  GetMobiledevicesRequest,
  GetMobiledevicesResponse,
  GetMobiledevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMobiledevicesRequest,
  output: GetMobiledevicesResponse,
  errors: [],
}));

export interface DeleteMobiledevicesRequest {
  /** The unique ID the API service uses to identify the mobile device. */
  resourceId: string;
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). */
  customerId: string;
}

export const DeleteMobiledevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.HttpPath("resourceId")),
    customerId: Schema.String.pipe(T.HttpPath("customerId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteMobiledevicesRequest>;

export interface DeleteMobiledevicesResponse {}
export const DeleteMobiledevicesResponse: Schema.Schema<DeleteMobiledevicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteMobiledevicesResponse>;

export type DeleteMobiledevicesError = DefaultErrors;

/** Removes a mobile device. */
export const deleteMobiledevices: API.OperationMethod<
  DeleteMobiledevicesRequest,
  DeleteMobiledevicesResponse,
  DeleteMobiledevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteMobiledevicesRequest,
  output: DeleteMobiledevicesResponse,
  errors: [],
}));

export interface InsertUsersRequest {
  /** Optional. If set to `true`, the option selected for [handling unmanaged user accounts](https://support.google.com/a/answer/11112794) will apply. Default: `false` */
  resolveConflictAccount?: boolean;
  /** Request body */
  body?: User;
}

export const InsertUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resolveConflictAccount: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("resolveConflictAccount"),
  ),
  body: Schema.optional(User).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "admin/directory/v1/users", hasBody: true }),
  svc,
) as unknown as Schema.Schema<InsertUsersRequest>;

export type InsertUsersResponse = User;
export const InsertUsersResponse = /*@__PURE__*/ /*#__PURE__*/ User;

export type InsertUsersError = DefaultErrors;

/** Creates a user. Mutate calls immediately following user creation might sometimes fail as the user isn't fully created due to propagation delay in our backends. Check the error details for the "User creation is not complete" message to see if this is the case. Retrying the calls after some time can help in this case. If `resolveConflictAccount` is set to `true`, a `202` response code means that a conflicting unmanaged account exists and was invited to join the organization. A `409` response code means that a conflicting account exists so the user wasn't created based on the [handling unmanaged user accounts](https://support.google.com/a/answer/11112794) option selected. */
export const insertUsers: API.OperationMethod<
  InsertUsersRequest,
  InsertUsersResponse,
  InsertUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertUsersRequest,
  output: InsertUsersResponse,
  errors: [],
}));

export interface CreateGuestUsersRequest {
  /** Request body */
  body?: DirectoryUsersCreateGuestRequest;
}

export const CreateGuestUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(DirectoryUsersCreateGuestRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/users:createGuest",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateGuestUsersRequest>;

export type CreateGuestUsersResponse = User;
export const CreateGuestUsersResponse = /*@__PURE__*/ /*#__PURE__*/ User;

export type CreateGuestUsersError = DefaultErrors;

/** Create a guest user with access to a [subset of Workspace capabilities](https://support.google.com/a/answer/16558545). This feature is currently in Alpha. Please reach out to support if you are interested in trying this feature. */
export const createGuestUsers: API.OperationMethod<
  CreateGuestUsersRequest,
  CreateGuestUsersResponse,
  CreateGuestUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateGuestUsersRequest,
  output: CreateGuestUsersResponse,
  errors: [],
}));

export interface GetUsersRequest {
  /** A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`. */
  customFieldMask?: string;
  /** What subset of fields to fetch for this user. */
  projection?: "basic" | "custom" | "full" | (string & {});
  /** Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin). */
  viewType?: "admin_view" | "domain_public" | (string & {});
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
}

export const GetUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customFieldMask: Schema.optional(Schema.String).pipe(
    T.HttpQuery("customFieldMask"),
  ),
  projection: Schema.optional(Schema.String).pipe(T.HttpQuery("projection")),
  viewType: Schema.optional(Schema.String).pipe(T.HttpQuery("viewType")),
  userKey: Schema.String.pipe(T.HttpPath("userKey")),
}).pipe(
  T.Http({ method: "GET", path: "admin/directory/v1/users/{userKey}" }),
  svc,
) as unknown as Schema.Schema<GetUsersRequest>;

export type GetUsersResponse = User;
export const GetUsersResponse = /*@__PURE__*/ /*#__PURE__*/ User;

export type GetUsersError = DefaultErrors;

/** Retrieves a user. */
export const getUsers: API.OperationMethod<
  GetUsersRequest,
  GetUsersResponse,
  GetUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUsersRequest,
  output: GetUsersResponse,
  errors: [],
}));

export interface DeleteUsersRequest {
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
}

export const DeleteUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userKey: Schema.String.pipe(T.HttpPath("userKey")),
}).pipe(
  T.Http({ method: "DELETE", path: "admin/directory/v1/users/{userKey}" }),
  svc,
) as unknown as Schema.Schema<DeleteUsersRequest>;

export interface DeleteUsersResponse {}
export const DeleteUsersResponse: Schema.Schema<DeleteUsersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteUsersResponse>;

export type DeleteUsersError = DefaultErrors;

/** Deletes a user. */
export const deleteUsers: API.OperationMethod<
  DeleteUsersRequest,
  DeleteUsersResponse,
  DeleteUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteUsersRequest,
  output: DeleteUsersResponse,
  errors: [],
}));

export interface PatchUsersRequest {
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
  /** Request body */
  body?: User;
}

export const PatchUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userKey: Schema.String.pipe(T.HttpPath("userKey")),
  body: Schema.optional(User).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "admin/directory/v1/users/{userKey}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchUsersRequest>;

export type PatchUsersResponse = User;
export const PatchUsersResponse = /*@__PURE__*/ /*#__PURE__*/ User;

export type PatchUsersError = DefaultErrors;

/** Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/workspace/admin/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead. */
export const patchUsers: API.OperationMethod<
  PatchUsersRequest,
  PatchUsersResponse,
  PatchUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchUsersRequest,
  output: PatchUsersResponse,
  errors: [],
}));

export interface SignOutUsersRequest {
  /** Identifies the target user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
}

export const SignOutUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userKey: Schema.String.pipe(T.HttpPath("userKey")),
}).pipe(
  T.Http({
    method: "POST",
    path: "admin/directory/v1/users/{userKey}/signOut",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<SignOutUsersRequest>;

export interface SignOutUsersResponse {}
export const SignOutUsersResponse: Schema.Schema<SignOutUsersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<SignOutUsersResponse>;

export type SignOutUsersError = DefaultErrors;

/** Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again. */
export const signOutUsers: API.OperationMethod<
  SignOutUsersRequest,
  SignOutUsersResponse,
  SignOutUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SignOutUsersRequest,
  output: SignOutUsersResponse,
  errors: [],
}));

export interface UpdateUsersRequest {
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
  /** Request body */
  body?: User;
}

export const UpdateUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userKey: Schema.String.pipe(T.HttpPath("userKey")),
  body: Schema.optional(User).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "admin/directory/v1/users/{userKey}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateUsersRequest>;

export type UpdateUsersResponse = User;
export const UpdateUsersResponse = /*@__PURE__*/ /*#__PURE__*/ User;

export type UpdateUsersError = DefaultErrors;

/** Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#update_user) for more information. */
export const updateUsers: API.OperationMethod<
  UpdateUsersRequest,
  UpdateUsersResponse,
  UpdateUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateUsersRequest,
  output: UpdateUsersResponse,
  errors: [],
}));

export interface ListUsersRequest {
  /** Token to specify next page in the list. The page token is only valid for three days. */
  pageToken?: string;
  /** If set to `true`, retrieves the list of deleted users. (Default: `false`) */
  showDeleted?: string;
  /** What subset of fields to fetch for this user. */
  projection?: "basic" | "custom" | "full" | (string & {});
  /** Property to use for sorting results. */
  orderBy?: "email" | "familyName" | "givenName" | (string & {});
  /** Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin). */
  viewType?: "admin_view" | "domain_public" | (string & {});
  /** A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`. */
  customFieldMask?: string;
  /** Query string for searching user fields. For more information on constructing user queries, see [Search for Users](https://developers.google.com/workspace/admin/directory/v1/guides/search-users). */
  query?: string;
  /** The domain name. Use this field to get users from only one domain. To return all domains for a customer account, use the `customer` query parameter instead. Either the `customer` or the `domain` parameter must be provided. */
  domain?: string;
  /** Whether to return results in ascending or descending order, ignoring case. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all users for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. */
  customer?: string;
  /** Event on which subscription is intended (if subscribing) */
  event?:
    | "add"
    | "delete"
    | "makeAdmin"
    | "undelete"
    | "update"
    | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
}

export const ListUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  showDeleted: Schema.optional(Schema.String).pipe(T.HttpQuery("showDeleted")),
  projection: Schema.optional(Schema.String).pipe(T.HttpQuery("projection")),
  orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  viewType: Schema.optional(Schema.String).pipe(T.HttpQuery("viewType")),
  customFieldMask: Schema.optional(Schema.String).pipe(
    T.HttpQuery("customFieldMask"),
  ),
  query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
  domain: Schema.optional(Schema.String).pipe(T.HttpQuery("domain")),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  customer: Schema.optional(Schema.String).pipe(T.HttpQuery("customer")),
  event: Schema.optional(Schema.String).pipe(T.HttpQuery("event")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
}).pipe(
  T.Http({ method: "GET", path: "admin/directory/v1/users" }),
  svc,
) as unknown as Schema.Schema<ListUsersRequest>;

export type ListUsersResponse = Users;
export const ListUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Users;

export type ListUsersError = DefaultErrors;

/** Retrieves a paginated list of either deleted users or all users in a domain. */
export const listUsers: API.PaginatedOperationMethod<
  ListUsersRequest,
  ListUsersResponse,
  ListUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListUsersRequest,
  output: ListUsersResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface MakeAdminUsersRequest {
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
  /** Request body */
  body?: UserMakeAdmin;
}

export const MakeAdminUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userKey: Schema.String.pipe(T.HttpPath("userKey")),
  body: Schema.optional(UserMakeAdmin).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "admin/directory/v1/users/{userKey}/makeAdmin",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<MakeAdminUsersRequest>;

export interface MakeAdminUsersResponse {}
export const MakeAdminUsersResponse: Schema.Schema<MakeAdminUsersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<MakeAdminUsersResponse>;

export type MakeAdminUsersError = DefaultErrors;

/** Makes a user a super administrator. */
export const makeAdminUsers: API.OperationMethod<
  MakeAdminUsersRequest,
  MakeAdminUsersResponse,
  MakeAdminUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MakeAdminUsersRequest,
  output: MakeAdminUsersResponse,
  errors: [],
}));

export interface WatchUsersRequest {
  /** What subset of fields to fetch for this user. */
  projection?: "basic" | "custom" | "full" | (string & {});
  /** Token to specify next page in the list */
  pageToken?: string;
  /** If set to true, retrieves the list of deleted users. (Default: false) */
  showDeleted?: string;
  /** Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom. */
  customFieldMask?: string;
  /** Column to use for sorting results */
  orderBy?: "email" | "familyName" | "givenName" | (string & {});
  /** Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin). */
  viewType?: "admin_view" | "domain_public" | (string & {});
  /** Query string search. Contains one or more search clauses, each with a field, operator, and value. For complete documentation, go to [Search for users](https://developers.google.com/workspace/admin/directory/v1/guides/search-users). */
  query?: string;
  /** Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead." */
  domain?: string;
  /** Events to watch for. */
  event?:
    | "add"
    | "delete"
    | "makeAdmin"
    | "undelete"
    | "update"
    | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Whether to return results in ascending or descending order. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Immutable ID of the Google Workspace account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain. */
  customer?: string;
  /** Request body */
  body?: Channel;
}

export const WatchUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  projection: Schema.optional(Schema.String).pipe(T.HttpQuery("projection")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  showDeleted: Schema.optional(Schema.String).pipe(T.HttpQuery("showDeleted")),
  customFieldMask: Schema.optional(Schema.String).pipe(
    T.HttpQuery("customFieldMask"),
  ),
  orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  viewType: Schema.optional(Schema.String).pipe(T.HttpQuery("viewType")),
  query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
  domain: Schema.optional(Schema.String).pipe(T.HttpQuery("domain")),
  event: Schema.optional(Schema.String).pipe(T.HttpQuery("event")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  customer: Schema.optional(Schema.String).pipe(T.HttpQuery("customer")),
  body: Schema.optional(Channel).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "admin/directory/v1/users/watch",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<WatchUsersRequest>;

export type WatchUsersResponse = Channel;
export const WatchUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Channel;

export type WatchUsersError = DefaultErrors;

/** Watches for changes in users list. */
export const watchUsers: API.OperationMethod<
  WatchUsersRequest,
  WatchUsersResponse,
  WatchUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WatchUsersRequest,
  output: WatchUsersResponse,
  errors: [],
}));

export interface UndeleteUsersRequest {
  /** The immutable id of the user */
  userKey: string;
  /** Request body */
  body?: UserUndelete;
}

export const UndeleteUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userKey: Schema.String.pipe(T.HttpPath("userKey")),
  body: Schema.optional(UserUndelete).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "admin/directory/v1/users/{userKey}/undelete",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UndeleteUsersRequest>;

export interface UndeleteUsersResponse {}
export const UndeleteUsersResponse: Schema.Schema<UndeleteUsersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<UndeleteUsersResponse>;

export type UndeleteUsersError = DefaultErrors;

/** Undeletes a deleted user. */
export const undeleteUsers: API.OperationMethod<
  UndeleteUsersRequest,
  UndeleteUsersResponse,
  UndeleteUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UndeleteUsersRequest,
  output: UndeleteUsersResponse,
  errors: [],
}));

export interface GetUsersPhotosRequest {
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
}

export const GetUsersPhotosRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userKey: Schema.String.pipe(T.HttpPath("userKey")),
}).pipe(
  T.Http({
    method: "GET",
    path: "admin/directory/v1/users/{userKey}/photos/thumbnail",
  }),
  svc,
) as unknown as Schema.Schema<GetUsersPhotosRequest>;

export type GetUsersPhotosResponse = UserPhoto;
export const GetUsersPhotosResponse = /*@__PURE__*/ /*#__PURE__*/ UserPhoto;

export type GetUsersPhotosError = DefaultErrors;

/** Retrieves the user's photo. */
export const getUsersPhotos: API.OperationMethod<
  GetUsersPhotosRequest,
  GetUsersPhotosResponse,
  GetUsersPhotosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUsersPhotosRequest,
  output: GetUsersPhotosResponse,
  errors: [],
}));

export interface DeleteUsersPhotosRequest {
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
}

export const DeleteUsersPhotosRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userKey: Schema.String.pipe(T.HttpPath("userKey")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "admin/directory/v1/users/{userKey}/photos/thumbnail",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteUsersPhotosRequest>;

export interface DeleteUsersPhotosResponse {}
export const DeleteUsersPhotosResponse: Schema.Schema<DeleteUsersPhotosResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteUsersPhotosResponse>;

export type DeleteUsersPhotosError = DefaultErrors;

/** Removes the user's photo. */
export const deleteUsersPhotos: API.OperationMethod<
  DeleteUsersPhotosRequest,
  DeleteUsersPhotosResponse,
  DeleteUsersPhotosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteUsersPhotosRequest,
  output: DeleteUsersPhotosResponse,
  errors: [],
}));

export interface UpdateUsersPhotosRequest {
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
  /** Request body */
  body?: UserPhoto;
}

export const UpdateUsersPhotosRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userKey: Schema.String.pipe(T.HttpPath("userKey")),
    body: Schema.optional(UserPhoto).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "admin/directory/v1/users/{userKey}/photos/thumbnail",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateUsersPhotosRequest>;

export type UpdateUsersPhotosResponse = UserPhoto;
export const UpdateUsersPhotosResponse = /*@__PURE__*/ /*#__PURE__*/ UserPhoto;

export type UpdateUsersPhotosError = DefaultErrors;

/** Adds a photo for the user. */
export const updateUsersPhotos: API.OperationMethod<
  UpdateUsersPhotosRequest,
  UpdateUsersPhotosResponse,
  UpdateUsersPhotosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateUsersPhotosRequest,
  output: UpdateUsersPhotosResponse,
  errors: [],
}));

export interface PatchUsersPhotosRequest {
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
  /** Request body */
  body?: UserPhoto;
}

export const PatchUsersPhotosRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userKey: Schema.String.pipe(T.HttpPath("userKey")),
    body: Schema.optional(UserPhoto).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "admin/directory/v1/users/{userKey}/photos/thumbnail",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchUsersPhotosRequest>;

export type PatchUsersPhotosResponse = UserPhoto;
export const PatchUsersPhotosResponse = /*@__PURE__*/ /*#__PURE__*/ UserPhoto;

export type PatchUsersPhotosError = DefaultErrors;

/** Adds a photo for the user. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch). */
export const patchUsersPhotos: API.OperationMethod<
  PatchUsersPhotosRequest,
  PatchUsersPhotosResponse,
  PatchUsersPhotosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchUsersPhotosRequest,
  output: PatchUsersPhotosResponse,
  errors: [],
}));

export interface DeleteUsersAliasesRequest {
  /** The alias to be removed. */
  alias: string;
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
}

export const DeleteUsersAliasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alias: Schema.String.pipe(T.HttpPath("alias")),
    userKey: Schema.String.pipe(T.HttpPath("userKey")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "admin/directory/v1/users/{userKey}/aliases/{alias}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteUsersAliasesRequest>;

export interface DeleteUsersAliasesResponse {}
export const DeleteUsersAliasesResponse: Schema.Schema<DeleteUsersAliasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteUsersAliasesResponse>;

export type DeleteUsersAliasesError = DefaultErrors;

/** Removes an alias. */
export const deleteUsersAliases: API.OperationMethod<
  DeleteUsersAliasesRequest,
  DeleteUsersAliasesResponse,
  DeleteUsersAliasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteUsersAliasesRequest,
  output: DeleteUsersAliasesResponse,
  errors: [],
}));

export interface InsertUsersAliasesRequest {
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
  /** Request body */
  body?: Alias;
}

export const InsertUsersAliasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userKey: Schema.String.pipe(T.HttpPath("userKey")),
    body: Schema.optional(Alias).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/users/{userKey}/aliases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertUsersAliasesRequest>;

export type InsertUsersAliasesResponse = Alias;
export const InsertUsersAliasesResponse = /*@__PURE__*/ /*#__PURE__*/ Alias;

export type InsertUsersAliasesError = DefaultErrors;

/** Adds an alias. */
export const insertUsersAliases: API.OperationMethod<
  InsertUsersAliasesRequest,
  InsertUsersAliasesResponse,
  InsertUsersAliasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertUsersAliasesRequest,
  output: InsertUsersAliasesResponse,
  errors: [],
}));

export interface ListUsersAliasesRequest {
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
  /** Events to watch for. */
  event?: "add" | "delete" | (string & {});
}

export const ListUsersAliasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userKey: Schema.String.pipe(T.HttpPath("userKey")),
    event: Schema.optional(Schema.String).pipe(T.HttpQuery("event")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/users/{userKey}/aliases",
    }),
    svc,
  ) as unknown as Schema.Schema<ListUsersAliasesRequest>;

export type ListUsersAliasesResponse = Aliases;
export const ListUsersAliasesResponse = /*@__PURE__*/ /*#__PURE__*/ Aliases;

export type ListUsersAliasesError = DefaultErrors;

/** Lists all aliases for a user. */
export const listUsersAliases: API.OperationMethod<
  ListUsersAliasesRequest,
  ListUsersAliasesResponse,
  ListUsersAliasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListUsersAliasesRequest,
  output: ListUsersAliasesResponse,
  errors: [],
}));

export interface WatchUsersAliasesRequest {
  /** Email or immutable ID of the user */
  userKey: string;
  /** Events to watch for. */
  event?: "add" | "delete" | (string & {});
  /** Request body */
  body?: Channel;
}

export const WatchUsersAliasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userKey: Schema.String.pipe(T.HttpPath("userKey")),
    event: Schema.optional(Schema.String).pipe(T.HttpQuery("event")),
    body: Schema.optional(Channel).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/users/{userKey}/aliases/watch",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<WatchUsersAliasesRequest>;

export type WatchUsersAliasesResponse = Channel;
export const WatchUsersAliasesResponse = /*@__PURE__*/ /*#__PURE__*/ Channel;

export type WatchUsersAliasesError = DefaultErrors;

/** Watches for changes in users list. */
export const watchUsersAliases: API.OperationMethod<
  WatchUsersAliasesRequest,
  WatchUsersAliasesResponse,
  WatchUsersAliasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WatchUsersAliasesRequest,
  output: WatchUsersAliasesResponse,
  errors: [],
}));

export interface GenerateVerificationCodesRequest {
  /** Email or immutable ID of the user */
  userKey: string;
}

export const GenerateVerificationCodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userKey: Schema.String.pipe(T.HttpPath("userKey")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/users/{userKey}/verificationCodes/generate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateVerificationCodesRequest>;

export interface GenerateVerificationCodesResponse {}
export const GenerateVerificationCodesResponse: Schema.Schema<GenerateVerificationCodesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<GenerateVerificationCodesResponse>;

export type GenerateVerificationCodesError = DefaultErrors;

/** Generates new backup verification codes for the user. */
export const generateVerificationCodes: API.OperationMethod<
  GenerateVerificationCodesRequest,
  GenerateVerificationCodesResponse,
  GenerateVerificationCodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateVerificationCodesRequest,
  output: GenerateVerificationCodesResponse,
  errors: [],
}));

export interface InvalidateVerificationCodesRequest {
  /** Email or immutable ID of the user */
  userKey: string;
}

export const InvalidateVerificationCodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userKey: Schema.String.pipe(T.HttpPath("userKey")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/users/{userKey}/verificationCodes/invalidate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InvalidateVerificationCodesRequest>;

export interface InvalidateVerificationCodesResponse {}
export const InvalidateVerificationCodesResponse: Schema.Schema<InvalidateVerificationCodesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<InvalidateVerificationCodesResponse>;

export type InvalidateVerificationCodesError = DefaultErrors;

/** Invalidates the current backup verification codes for the user. */
export const invalidateVerificationCodes: API.OperationMethod<
  InvalidateVerificationCodesRequest,
  InvalidateVerificationCodesResponse,
  InvalidateVerificationCodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InvalidateVerificationCodesRequest,
  output: InvalidateVerificationCodesResponse,
  errors: [],
}));

export interface ListVerificationCodesRequest {
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
}

export const ListVerificationCodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userKey: Schema.String.pipe(T.HttpPath("userKey")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/users/{userKey}/verificationCodes",
    }),
    svc,
  ) as unknown as Schema.Schema<ListVerificationCodesRequest>;

export type ListVerificationCodesResponse = VerificationCodes;
export const ListVerificationCodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ VerificationCodes;

export type ListVerificationCodesError = DefaultErrors;

/** Returns the current set of valid backup verification codes for the specified user. */
export const listVerificationCodes: API.OperationMethod<
  ListVerificationCodesRequest,
  ListVerificationCodesResponse,
  ListVerificationCodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListVerificationCodesRequest,
  output: ListVerificationCodesResponse,
  errors: [],
}));

export interface TurnOffTwoStepVerificationRequest {
  /** Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. */
  userKey: string;
}

export const TurnOffTwoStepVerificationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userKey: Schema.String.pipe(T.HttpPath("userKey")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/users/{userKey}/twoStepVerification/turnOff",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TurnOffTwoStepVerificationRequest>;

export interface TurnOffTwoStepVerificationResponse {}
export const TurnOffTwoStepVerificationResponse: Schema.Schema<TurnOffTwoStepVerificationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<TurnOffTwoStepVerificationResponse>;

export type TurnOffTwoStepVerificationError = DefaultErrors;

/** Turns off 2-Step Verification for user. */
export const turnOffTwoStepVerification: API.OperationMethod<
  TurnOffTwoStepVerificationRequest,
  TurnOffTwoStepVerificationResponse,
  TurnOffTwoStepVerificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TurnOffTwoStepVerificationRequest,
  output: TurnOffTwoStepVerificationResponse,
  errors: [],
}));

export interface PatchCustomersRequest {
  /** Id of the customer to be updated */
  customerKey: string;
  /** Request body */
  body?: Customer;
}

export const PatchCustomersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerKey: Schema.String.pipe(T.HttpPath("customerKey")),
  body: Schema.optional(Customer).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "admin/directory/v1/customers/{customerKey}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchCustomersRequest>;

export type PatchCustomersResponse = Customer;
export const PatchCustomersResponse = /*@__PURE__*/ /*#__PURE__*/ Customer;

export type PatchCustomersError = DefaultErrors;

/** Patches a customer. */
export const patchCustomers: API.OperationMethod<
  PatchCustomersRequest,
  PatchCustomersResponse,
  PatchCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCustomersRequest,
  output: PatchCustomersResponse,
  errors: [],
}));

export interface UpdateCustomersRequest {
  /** Id of the customer to be updated */
  customerKey: string;
  /** Request body */
  body?: Customer;
}

export const UpdateCustomersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    customerKey: Schema.String.pipe(T.HttpPath("customerKey")),
    body: Schema.optional(Customer).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "admin/directory/v1/customers/{customerKey}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateCustomersRequest>;

export type UpdateCustomersResponse = Customer;
export const UpdateCustomersResponse = /*@__PURE__*/ /*#__PURE__*/ Customer;

export type UpdateCustomersError = DefaultErrors;

/** Updates a customer. */
export const updateCustomers: API.OperationMethod<
  UpdateCustomersRequest,
  UpdateCustomersResponse,
  UpdateCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateCustomersRequest,
  output: UpdateCustomersResponse,
  errors: [],
}));

export interface GetCustomersRequest {
  /** Id of the customer to be retrieved */
  customerKey: string;
}

export const GetCustomersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerKey: Schema.String.pipe(T.HttpPath("customerKey")),
}).pipe(
  T.Http({ method: "GET", path: "admin/directory/v1/customers/{customerKey}" }),
  svc,
) as unknown as Schema.Schema<GetCustomersRequest>;

export type GetCustomersResponse = Customer;
export const GetCustomersResponse = /*@__PURE__*/ /*#__PURE__*/ Customer;

export type GetCustomersError = DefaultErrors;

/** Retrieves a customer. */
export const getCustomers: API.OperationMethod<
  GetCustomersRequest,
  GetCustomersResponse,
  GetCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomersRequest,
  output: GetCustomersResponse,
  errors: [],
}));

export interface BatchCreatePrintServersCustomersChromePrintServersRequest {
  /** Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}` */
  parent: string;
  /** Request body */
  body?: BatchCreatePrintServersRequest;
}

export const BatchCreatePrintServersCustomersChromePrintServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchCreatePrintServersRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/{parent}/chrome/printServers:batchCreatePrintServers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchCreatePrintServersCustomersChromePrintServersRequest>;

export type BatchCreatePrintServersCustomersChromePrintServersResponse =
  BatchCreatePrintServersResponse;
export const BatchCreatePrintServersCustomersChromePrintServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchCreatePrintServersResponse;

export type BatchCreatePrintServersCustomersChromePrintServersError =
  DefaultErrors;

/** Creates multiple print servers. */
export const batchCreatePrintServersCustomersChromePrintServers: API.OperationMethod<
  BatchCreatePrintServersCustomersChromePrintServersRequest,
  BatchCreatePrintServersCustomersChromePrintServersResponse,
  BatchCreatePrintServersCustomersChromePrintServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchCreatePrintServersCustomersChromePrintServersRequest,
  output: BatchCreatePrintServersCustomersChromePrintServersResponse,
  errors: [],
}));

export interface ListCustomersChromePrintServersRequest {
  /** Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}` */
  parent: string;
  /** Sort order for results. Supported values are `display_name`, `description`, or `create_time`. Default order is ascending, but descending order can be returned by appending "desc" to the `order_by` field. For instance, `orderBy=='description desc'` returns the print servers sorted by description in descending order. */
  orderBy?: string;
  /** If `org_unit_id` is present in the request, only print servers owned or inherited by the organizational unit (OU) are returned. If the `PrintServer` resource's `org_unit_id` matches the one in the request, the OU owns the server. If `org_unit_id` is not specified in the request, all print servers are returned or filtered against. */
  orgUnitId?: string;
  /** The maximum number of objects to return (default `100`, max `100`). The service might return fewer than this value. */
  pageSize?: number;
  /** A generated token to paginate results (the `next_page_token` from a previous call). */
  pageToken?: string;
  /** Search query in [Common Expression Language syntax](https://github.com/google/cel-spec). Supported filters are `display_name`, `description`, and `uri`. Example: `printServer.displayName=='marketing-queue'`. */
  filter?: string;
}

export const ListCustomersChromePrintServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    orgUnitId: Schema.optional(Schema.String).pipe(T.HttpQuery("orgUnitId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/{parent}/chrome/printServers",
    }),
    svc,
  ) as unknown as Schema.Schema<ListCustomersChromePrintServersRequest>;

export type ListCustomersChromePrintServersResponse = ListPrintServersResponse;
export const ListCustomersChromePrintServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPrintServersResponse;

export type ListCustomersChromePrintServersError = DefaultErrors;

/** Lists print server configurations. */
export const listCustomersChromePrintServers: API.PaginatedOperationMethod<
  ListCustomersChromePrintServersRequest,
  ListCustomersChromePrintServersResponse,
  ListCustomersChromePrintServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomersChromePrintServersRequest,
  output: ListCustomersChromePrintServersResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetCustomersChromePrintServersRequest {
  /** Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}` */
  name: string;
}

export const GetCustomersChromePrintServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "admin/directory/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetCustomersChromePrintServersRequest>;

export type GetCustomersChromePrintServersResponse = PrintServer;
export const GetCustomersChromePrintServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ PrintServer;

export type GetCustomersChromePrintServersError = DefaultErrors;

/** Returns a print server's configuration. */
export const getCustomersChromePrintServers: API.OperationMethod<
  GetCustomersChromePrintServersRequest,
  GetCustomersChromePrintServersResponse,
  GetCustomersChromePrintServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomersChromePrintServersRequest,
  output: GetCustomersChromePrintServersResponse,
  errors: [],
}));

export interface PatchCustomersChromePrintServersRequest {
  /** Identifier. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}` */
  name: string;
  /** The list of fields to update. Some fields are read-only and cannot be updated. Values for unspecified fields are patched. */
  updateMask?: string;
  /** Request body */
  body?: PrintServer;
}

export const PatchCustomersChromePrintServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(PrintServer).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "admin/directory/v1/{name}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchCustomersChromePrintServersRequest>;

export type PatchCustomersChromePrintServersResponse = PrintServer;
export const PatchCustomersChromePrintServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ PrintServer;

export type PatchCustomersChromePrintServersError = DefaultErrors;

/** Updates a print server's configuration. */
export const patchCustomersChromePrintServers: API.OperationMethod<
  PatchCustomersChromePrintServersRequest,
  PatchCustomersChromePrintServersResponse,
  PatchCustomersChromePrintServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCustomersChromePrintServersRequest,
  output: PatchCustomersChromePrintServersResponse,
  errors: [],
}));

export interface CreateCustomersChromePrintServersRequest {
  /** Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}` */
  parent: string;
  /** Request body */
  body?: PrintServer;
}

export const CreateCustomersChromePrintServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(PrintServer).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/{parent}/chrome/printServers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateCustomersChromePrintServersRequest>;

export type CreateCustomersChromePrintServersResponse = PrintServer;
export const CreateCustomersChromePrintServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ PrintServer;

export type CreateCustomersChromePrintServersError = DefaultErrors;

/** Creates a print server. */
export const createCustomersChromePrintServers: API.OperationMethod<
  CreateCustomersChromePrintServersRequest,
  CreateCustomersChromePrintServersResponse,
  CreateCustomersChromePrintServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCustomersChromePrintServersRequest,
  output: CreateCustomersChromePrintServersResponse,
  errors: [],
}));

export interface BatchDeletePrintServersCustomersChromePrintServersRequest {
  /** Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{customer.id}` */
  parent: string;
  /** Request body */
  body?: BatchDeletePrintServersRequest;
}

export const BatchDeletePrintServersCustomersChromePrintServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchDeletePrintServersRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/{parent}/chrome/printServers:batchDeletePrintServers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeletePrintServersCustomersChromePrintServersRequest>;

export type BatchDeletePrintServersCustomersChromePrintServersResponse =
  BatchDeletePrintServersResponse;
export const BatchDeletePrintServersCustomersChromePrintServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchDeletePrintServersResponse;

export type BatchDeletePrintServersCustomersChromePrintServersError =
  DefaultErrors;

/** Deletes multiple print servers. */
export const batchDeletePrintServersCustomersChromePrintServers: API.OperationMethod<
  BatchDeletePrintServersCustomersChromePrintServersRequest,
  BatchDeletePrintServersCustomersChromePrintServersResponse,
  BatchDeletePrintServersCustomersChromePrintServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeletePrintServersCustomersChromePrintServersRequest,
  output: BatchDeletePrintServersCustomersChromePrintServersResponse,
  errors: [],
}));

export interface DeleteCustomersChromePrintServersRequest {
  /** Required. The name of the print server to be deleted. Format: `customers/{customer.id}/chrome/printServers/{print_server.id}` */
  name: string;
}

export const DeleteCustomersChromePrintServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "admin/directory/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteCustomersChromePrintServersRequest>;

export type DeleteCustomersChromePrintServersResponse = Empty;
export const DeleteCustomersChromePrintServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteCustomersChromePrintServersError = DefaultErrors;

/** Deletes a print server. */
export const deleteCustomersChromePrintServers: API.OperationMethod<
  DeleteCustomersChromePrintServersRequest,
  DeleteCustomersChromePrintServersResponse,
  DeleteCustomersChromePrintServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCustomersChromePrintServersRequest,
  output: DeleteCustomersChromePrintServersResponse,
  errors: [],
}));

export interface DeleteCustomersChromePrintersRequest {
  /** Required. The name of the printer to be updated. Format: customers/{customer_id}/chrome/printers/{printer_id} */
  name: string;
}

export const DeleteCustomersChromePrintersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "admin/directory/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteCustomersChromePrintersRequest>;

export type DeleteCustomersChromePrintersResponse = Empty;
export const DeleteCustomersChromePrintersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteCustomersChromePrintersError = DefaultErrors;

/** Deletes a `Printer`. */
export const deleteCustomersChromePrinters: API.OperationMethod<
  DeleteCustomersChromePrintersRequest,
  DeleteCustomersChromePrintersResponse,
  DeleteCustomersChromePrintersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCustomersChromePrintersRequest,
  output: DeleteCustomersChromePrintersResponse,
  errors: [],
}));

export interface CreateCustomersChromePrintersRequest {
  /** Required. The name of the customer. Format: customers/{customer_id} */
  parent: string;
  /** Request body */
  body?: Printer;
}

export const CreateCustomersChromePrintersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Printer).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/{parent}/chrome/printers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateCustomersChromePrintersRequest>;

export type CreateCustomersChromePrintersResponse = Printer;
export const CreateCustomersChromePrintersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Printer;

export type CreateCustomersChromePrintersError = DefaultErrors;

/** Creates a printer under given Organization Unit. */
export const createCustomersChromePrinters: API.OperationMethod<
  CreateCustomersChromePrintersRequest,
  CreateCustomersChromePrintersResponse,
  CreateCustomersChromePrintersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCustomersChromePrintersRequest,
  output: CreateCustomersChromePrintersResponse,
  errors: [],
}));

export interface ListPrinterModelsCustomersChromePrintersRequest {
  /** Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id} */
  parent: string;
  /** Filer to list only models by a given manufacturer in format: "manufacturer:Brother". Search syntax is shared between this api and Admin Console printers pages. */
  filter?: string;
  /** The maximum number of objects to return. The service may return fewer than this value. */
  pageSize?: number;
  /** A page token, received from a previous call. */
  pageToken?: string;
}

export const ListPrinterModelsCustomersChromePrintersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/{parent}/chrome/printers:listPrinterModels",
    }),
    svc,
  ) as unknown as Schema.Schema<ListPrinterModelsCustomersChromePrintersRequest>;

export type ListPrinterModelsCustomersChromePrintersResponse =
  ListPrinterModelsResponse;
export const ListPrinterModelsCustomersChromePrintersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPrinterModelsResponse;

export type ListPrinterModelsCustomersChromePrintersError = DefaultErrors;

/** Lists the supported printer models. */
export const listPrinterModelsCustomersChromePrinters: API.PaginatedOperationMethod<
  ListPrinterModelsCustomersChromePrintersRequest,
  ListPrinterModelsCustomersChromePrintersResponse,
  ListPrinterModelsCustomersChromePrintersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPrinterModelsCustomersChromePrintersRequest,
  output: ListPrinterModelsCustomersChromePrintersResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchCustomersChromePrintersRequest {
  /** The list of fields to be updated. Note, some of the fields are read only and cannot be updated. Values for not specified fields will be patched. */
  updateMask?: string;
  /** Identifier. The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty) */
  name: string;
  /** The list of fields to be cleared. Note, some of the fields are read only and cannot be updated. Values for not specified fields will be patched. */
  clearMask?: string;
  /** Request body */
  body?: Printer;
}

export const PatchCustomersChromePrintersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    clearMask: Schema.optional(Schema.String).pipe(T.HttpQuery("clearMask")),
    body: Schema.optional(Printer).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "admin/directory/v1/{name}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchCustomersChromePrintersRequest>;

export type PatchCustomersChromePrintersResponse = Printer;
export const PatchCustomersChromePrintersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Printer;

export type PatchCustomersChromePrintersError = DefaultErrors;

/** Updates a `Printer` resource. */
export const patchCustomersChromePrinters: API.OperationMethod<
  PatchCustomersChromePrintersRequest,
  PatchCustomersChromePrintersResponse,
  PatchCustomersChromePrintersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCustomersChromePrintersRequest,
  output: PatchCustomersChromePrintersResponse,
  errors: [],
}));

export interface BatchDeletePrintersCustomersChromePrintersRequest {
  /** Required. The name of the customer. Format: customers/{customer_id} */
  parent: string;
  /** Request body */
  body?: BatchDeletePrintersRequest;
}

export const BatchDeletePrintersCustomersChromePrintersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchDeletePrintersRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/{parent}/chrome/printers:batchDeletePrinters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeletePrintersCustomersChromePrintersRequest>;

export type BatchDeletePrintersCustomersChromePrintersResponse =
  BatchDeletePrintersResponse;
export const BatchDeletePrintersCustomersChromePrintersResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchDeletePrintersResponse;

export type BatchDeletePrintersCustomersChromePrintersError = DefaultErrors;

/** Deletes printers in batch. */
export const batchDeletePrintersCustomersChromePrinters: API.OperationMethod<
  BatchDeletePrintersCustomersChromePrintersRequest,
  BatchDeletePrintersCustomersChromePrintersResponse,
  BatchDeletePrintersCustomersChromePrintersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeletePrintersCustomersChromePrintersRequest,
  output: BatchDeletePrintersCustomersChromePrintersResponse,
  errors: [],
}));

export interface GetCustomersChromePrintersRequest {
  /** Required. The name of the printer to retrieve. Format: customers/{customer_id}/chrome/printers/{printer_id} */
  name: string;
}

export const GetCustomersChromePrintersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "admin/directory/v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetCustomersChromePrintersRequest>;

export type GetCustomersChromePrintersResponse = Printer;
export const GetCustomersChromePrintersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Printer;

export type GetCustomersChromePrintersError = DefaultErrors;

/** Returns a `Printer` resource (printer's config). */
export const getCustomersChromePrinters: API.OperationMethod<
  GetCustomersChromePrintersRequest,
  GetCustomersChromePrintersResponse,
  GetCustomersChromePrintersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomersChromePrintersRequest,
  output: GetCustomersChromePrintersResponse,
  errors: [],
}));

export interface BatchCreatePrintersCustomersChromePrintersRequest {
  /** Required. The name of the customer. Format: customers/{customer_id} */
  parent: string;
  /** Request body */
  body?: BatchCreatePrintersRequest;
}

export const BatchCreatePrintersCustomersChromePrintersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchCreatePrintersRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "admin/directory/v1/{parent}/chrome/printers:batchCreatePrinters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchCreatePrintersCustomersChromePrintersRequest>;

export type BatchCreatePrintersCustomersChromePrintersResponse =
  BatchCreatePrintersResponse;
export const BatchCreatePrintersCustomersChromePrintersResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchCreatePrintersResponse;

export type BatchCreatePrintersCustomersChromePrintersError = DefaultErrors;

/** Creates printers under given Organization Unit. */
export const batchCreatePrintersCustomersChromePrinters: API.OperationMethod<
  BatchCreatePrintersCustomersChromePrintersRequest,
  BatchCreatePrintersCustomersChromePrintersResponse,
  BatchCreatePrintersCustomersChromePrintersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchCreatePrintersCustomersChromePrintersRequest,
  output: BatchCreatePrintersCustomersChromePrintersResponse,
  errors: [],
}));

export interface ListCustomersChromePrintersRequest {
  /** The order to sort results by. Must be one of display_name, description, make_and_model, or create_time. Default order is ascending, but descending order can be returned by appending "desc" to the order_by field. For instance, "description desc" will return the printers sorted by description in descending order. */
  orderBy?: string;
  /** Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id} */
  parent: string;
  /** Search query. Search syntax is shared between this api and Admin Console printers pages. */
  filter?: string;
  /** The maximum number of objects to return. The service may return fewer than this value. */
  pageSize?: number;
  /** A page token, received from a previous call. */
  pageToken?: string;
  /** Organization Unit that we want to list the printers for. When org_unit is not present in the request then all printers of the customer are returned (or filtered). When org_unit is present in the request then only printers available to this OU will be returned (owned or inherited). You may see if printer is owned or inherited for this OU by looking at Printer.org_unit_id. */
  orgUnitId?: string;
}

export const ListCustomersChromePrintersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orgUnitId: Schema.optional(Schema.String).pipe(T.HttpQuery("orgUnitId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "admin/directory/v1/{parent}/chrome/printers",
    }),
    svc,
  ) as unknown as Schema.Schema<ListCustomersChromePrintersRequest>;

export type ListCustomersChromePrintersResponse = ListPrintersResponse;
export const ListCustomersChromePrintersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPrintersResponse;

export type ListCustomersChromePrintersError = DefaultErrors;

/** List printers configs. */
export const listCustomersChromePrinters: API.PaginatedOperationMethod<
  ListCustomersChromePrintersRequest,
  ListCustomersChromePrintersResponse,
  ListCustomersChromePrintersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomersChromePrintersRequest,
  output: ListCustomersChromePrintersResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteOrgunitsRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). */
  customerId: string;
  /** The full path of the organizational unit (minus the leading `/`) or its unique ID. */
  orgUnitPath: string;
}

export const DeleteOrgunitsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerId: Schema.String.pipe(T.HttpPath("customerId")),
  orgUnitPath: Schema.String.pipe(T.HttpPath("orgUnitPath")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteOrgunitsRequest>;

export interface DeleteOrgunitsResponse {}
export const DeleteOrgunitsResponse: Schema.Schema<DeleteOrgunitsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteOrgunitsResponse>;

export type DeleteOrgunitsError = DefaultErrors;

/** Removes an organizational unit. */
export const deleteOrgunits: API.OperationMethod<
  DeleteOrgunitsRequest,
  DeleteOrgunitsResponse,
  DeleteOrgunitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrgunitsRequest,
  output: DeleteOrgunitsResponse,
  errors: [],
}));

export interface PatchOrgunitsRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). */
  customerId: string;
  /** The full path of the organizational unit (minus the leading `/`) or its unique ID. */
  orgUnitPath: string;
  /** Request body */
  body?: OrgUnit;
}

export const PatchOrgunitsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerId: Schema.String.pipe(T.HttpPath("customerId")),
  orgUnitPath: Schema.String.pipe(T.HttpPath("orgUnitPath")),
  body: Schema.optional(OrgUnit).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchOrgunitsRequest>;

export type PatchOrgunitsResponse = OrgUnit;
export const PatchOrgunitsResponse = /*@__PURE__*/ /*#__PURE__*/ OrgUnit;

export type PatchOrgunitsError = DefaultErrors;

/** Updates an organizational unit. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch) */
export const patchOrgunits: API.OperationMethod<
  PatchOrgunitsRequest,
  PatchOrgunitsResponse,
  PatchOrgunitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrgunitsRequest,
  output: PatchOrgunitsResponse,
  errors: [],
}));

export interface GetOrgunitsRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). */
  customerId: string;
  /** The full path of the organizational unit (minus the leading `/`) or its unique ID. */
  orgUnitPath: string;
}

export const GetOrgunitsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerId: Schema.String.pipe(T.HttpPath("customerId")),
  orgUnitPath: Schema.String.pipe(T.HttpPath("orgUnitPath")),
}).pipe(
  T.Http({
    method: "GET",
    path: "admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}",
  }),
  svc,
) as unknown as Schema.Schema<GetOrgunitsRequest>;

export type GetOrgunitsResponse = OrgUnit;
export const GetOrgunitsResponse = /*@__PURE__*/ /*#__PURE__*/ OrgUnit;

export type GetOrgunitsError = DefaultErrors;

/** Retrieves an organizational unit. */
export const getOrgunits: API.OperationMethod<
  GetOrgunitsRequest,
  GetOrgunitsResponse,
  GetOrgunitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrgunitsRequest,
  output: GetOrgunitsResponse,
  errors: [],
}));

export interface InsertOrgunitsRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). */
  customerId: string;
  /** Request body */
  body?: OrgUnit;
}

export const InsertOrgunitsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerId: Schema.String.pipe(T.HttpPath("customerId")),
  body: Schema.optional(OrgUnit).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "admin/directory/v1/customer/{customerId}/orgunits",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertOrgunitsRequest>;

export type InsertOrgunitsResponse = OrgUnit;
export const InsertOrgunitsResponse = /*@__PURE__*/ /*#__PURE__*/ OrgUnit;

export type InsertOrgunitsError = DefaultErrors;

/** Adds an organizational unit. */
export const insertOrgunits: API.OperationMethod<
  InsertOrgunitsRequest,
  InsertOrgunitsResponse,
  InsertOrgunitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertOrgunitsRequest,
  output: InsertOrgunitsResponse,
  errors: [],
}));

export interface UpdateOrgunitsRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). */
  customerId: string;
  /** The full path of the organizational unit (minus the leading `/`) or its unique ID. */
  orgUnitPath: string;
  /** Request body */
  body?: OrgUnit;
}

export const UpdateOrgunitsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerId: Schema.String.pipe(T.HttpPath("customerId")),
  orgUnitPath: Schema.String.pipe(T.HttpPath("orgUnitPath")),
  body: Schema.optional(OrgUnit).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateOrgunitsRequest>;

export type UpdateOrgunitsResponse = OrgUnit;
export const UpdateOrgunitsResponse = /*@__PURE__*/ /*#__PURE__*/ OrgUnit;

export type UpdateOrgunitsError = DefaultErrors;

/** Updates an organizational unit. */
export const updateOrgunits: API.OperationMethod<
  UpdateOrgunitsRequest,
  UpdateOrgunitsResponse,
  UpdateOrgunitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateOrgunitsRequest,
  output: UpdateOrgunitsResponse,
  errors: [],
}));

export interface ListOrgunitsRequest {
  /** The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). */
  customerId: string;
  /** The full path to the organizational unit or its unique ID. Returns the children of the specified organizational unit. */
  orgUnitPath?: string;
  /** Whether to return all sub-organizations or just immediate children. */
  type?: "all" | "children" | "allIncludingParent" | (string & {});
}

export const ListOrgunitsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerId: Schema.String.pipe(T.HttpPath("customerId")),
  orgUnitPath: Schema.optional(Schema.String).pipe(T.HttpQuery("orgUnitPath")),
  type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
}).pipe(
  T.Http({
    method: "GET",
    path: "admin/directory/v1/customer/{customerId}/orgunits",
  }),
  svc,
) as unknown as Schema.Schema<ListOrgunitsRequest>;

export type ListOrgunitsResponse = OrgUnits;
export const ListOrgunitsResponse = /*@__PURE__*/ /*#__PURE__*/ OrgUnits;

export type ListOrgunitsError = DefaultErrors;

/** Retrieves a list of all organizational units for an account. */
export const listOrgunits: API.OperationMethod<
  ListOrgunitsRequest,
  ListOrgunitsResponse,
  ListOrgunitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListOrgunitsRequest,
  output: ListOrgunitsResponse,
  errors: [],
}));

export interface ListSchemasRequest {
  /** The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. */
  customerId: string;
}

export const ListSchemasRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerId: Schema.String.pipe(T.HttpPath("customerId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "admin/directory/v1/customer/{customerId}/schemas",
  }),
  svc,
) as unknown as Schema.Schema<ListSchemasRequest>;

export type ListSchemasResponse = Schemas;
export const ListSchemasResponse = /*@__PURE__*/ /*#__PURE__*/ Schemas;

export type ListSchemasError = DefaultErrors;

/** Retrieves all schemas for a customer. */
export const listSchemas: API.OperationMethod<
  ListSchemasRequest,
  ListSchemasResponse,
  ListSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListSchemasRequest,
  output: ListSchemasResponse,
  errors: [],
}));

export interface GetSchemasRequest {
  /** Name or immutable ID of the schema. */
  schemaKey: string;
  /** The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. */
  customerId: string;
}

export const GetSchemasRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  schemaKey: Schema.String.pipe(T.HttpPath("schemaKey")),
  customerId: Schema.String.pipe(T.HttpPath("customerId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "admin/directory/v1/customer/{customerId}/schemas/{schemaKey}",
  }),
  svc,
) as unknown as Schema.Schema<GetSchemasRequest>;

export type GetSchemasResponse = Admin_Schema;
export const GetSchemasResponse = /*@__PURE__*/ /*#__PURE__*/ Admin_Schema;

export type GetSchemasError = DefaultErrors;

/** Retrieves a schema. */
export const getSchemas: API.OperationMethod<
  GetSchemasRequest,
  GetSchemasResponse,
  GetSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSchemasRequest,
  output: GetSchemasResponse,
  errors: [],
}));

export interface InsertSchemasRequest {
  /** Immutable ID of the Google Workspace account. */
  customerId: string;
  /** Request body */
  body?: Admin_Schema;
}

export const InsertSchemasRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerId: Schema.String.pipe(T.HttpPath("customerId")),
  body: Schema.optional(Admin_Schema).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "admin/directory/v1/customer/{customerId}/schemas",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertSchemasRequest>;

export type InsertSchemasResponse = Admin_Schema;
export const InsertSchemasResponse = /*@__PURE__*/ /*#__PURE__*/ Admin_Schema;

export type InsertSchemasError = DefaultErrors;

/** Creates a schema. */
export const insertSchemas: API.OperationMethod<
  InsertSchemasRequest,
  InsertSchemasResponse,
  InsertSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertSchemasRequest,
  output: InsertSchemasResponse,
  errors: [],
}));

export interface UpdateSchemasRequest {
  /** Name or immutable ID of the schema. */
  schemaKey: string;
  /** Immutable ID of the Google Workspace account. */
  customerId: string;
  /** Request body */
  body?: Admin_Schema;
}

export const UpdateSchemasRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  schemaKey: Schema.String.pipe(T.HttpPath("schemaKey")),
  customerId: Schema.String.pipe(T.HttpPath("customerId")),
  body: Schema.optional(Admin_Schema).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "admin/directory/v1/customer/{customerId}/schemas/{schemaKey}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateSchemasRequest>;

export type UpdateSchemasResponse = Admin_Schema;
export const UpdateSchemasResponse = /*@__PURE__*/ /*#__PURE__*/ Admin_Schema;

export type UpdateSchemasError = DefaultErrors;

/** Updates a schema. */
export const updateSchemas: API.OperationMethod<
  UpdateSchemasRequest,
  UpdateSchemasResponse,
  UpdateSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSchemasRequest,
  output: UpdateSchemasResponse,
  errors: [],
}));

export interface PatchSchemasRequest {
  /** Name or immutable ID of the schema. */
  schemaKey: string;
  /** Immutable ID of the Google Workspace account. */
  customerId: string;
  /** Request body */
  body?: Admin_Schema;
}

export const PatchSchemasRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  schemaKey: Schema.String.pipe(T.HttpPath("schemaKey")),
  customerId: Schema.String.pipe(T.HttpPath("customerId")),
  body: Schema.optional(Admin_Schema).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "admin/directory/v1/customer/{customerId}/schemas/{schemaKey}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchSchemasRequest>;

export type PatchSchemasResponse = Admin_Schema;
export const PatchSchemasResponse = /*@__PURE__*/ /*#__PURE__*/ Admin_Schema;

export type PatchSchemasError = DefaultErrors;

/** Patches a schema. */
export const patchSchemas: API.OperationMethod<
  PatchSchemasRequest,
  PatchSchemasResponse,
  PatchSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSchemasRequest,
  output: PatchSchemasResponse,
  errors: [],
}));

export interface DeleteSchemasRequest {
  /** Immutable ID of the Google Workspace account. */
  customerId: string;
  /** Name or immutable ID of the schema. */
  schemaKey: string;
}

export const DeleteSchemasRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerId: Schema.String.pipe(T.HttpPath("customerId")),
  schemaKey: Schema.String.pipe(T.HttpPath("schemaKey")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "admin/directory/v1/customer/{customerId}/schemas/{schemaKey}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteSchemasRequest>;

export interface DeleteSchemasResponse {}
export const DeleteSchemasResponse: Schema.Schema<DeleteSchemasResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteSchemasResponse>;

export type DeleteSchemasError = DefaultErrors;

/** Deletes a schema. */
export const deleteSchemas: API.OperationMethod<
  DeleteSchemasRequest,
  DeleteSchemasResponse,
  DeleteSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSchemasRequest,
  output: DeleteSchemasResponse,
  errors: [],
}));
