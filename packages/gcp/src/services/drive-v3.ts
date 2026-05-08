// ==========================================================================
// Google Drive API (drive v3)
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
  name: "drive",
  version: "v3",
  rootUrl: "https://www.googleapis.com/",
  servicePath: "drive/v3/",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface User {
  /** Output only. The user's ID as visible in Permission resources. */
  permissionId?: string;
  /** Output only. A plain text displayable name for this user. */
  displayName?: string;
  /** Output only. The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester. */
  emailAddress?: string;
  /** Output only. A link to the user's profile photo, if available. */
  photoLink?: string;
  /** Output only. Identifies what kind of resource this is. Value: the fixed string `drive#user`. */
  kind?: string;
  /** Output only. Whether this user is the requesting user. */
  me?: boolean;
}

export const User: Schema.Schema<User> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissionId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    emailAddress: Schema.optional(Schema.String),
    photoLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    me: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "User" });

export interface Reply {
  /** The plain text content of the reply. This field is used for setting the content, while `htmlContent` should be displayed. This field is required by the `create` method if no `action` value is specified. */
  content?: string;
  /** Output only. The email address of the user assigned to this comment. If no user is assigned, the field is unset. */
  assigneeEmailAddress?: string;
  /** Output only. The ID of the reply. */
  id?: string;
  /** Output only. A list of email addresses for users mentioned in this comment. If no users are mentioned, the list is empty. */
  mentionedEmailAddresses?: ReadonlyArray<string>;
  /** Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#reply"`. */
  kind?: string;
  /** The last time the reply was modified (RFC 3339 date-time). */
  modifiedTime?: string;
  /** Output only. Whether the reply has been deleted. A deleted reply has no content. */
  deleted?: boolean;
  /** Output only. The content of the reply with HTML formatting. */
  htmlContent?: string;
  /** Output only. The author of the reply. The author's email address and permission ID won't be populated. */
  author?: User;
  /** The time at which the reply was created (RFC 3339 date-time). */
  createdTime?: string;
  /** The action the reply performed to the parent comment. The supported values are: * `resolve` * `reopen` */
  action?: string;
}

export const Reply: Schema.Schema<Reply> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    assigneeEmailAddress: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    mentionedEmailAddresses: Schema.optional(Schema.Array(Schema.String)),
    kind: Schema.optional(Schema.String),
    modifiedTime: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    htmlContent: Schema.optional(Schema.String),
    author: Schema.optional(User),
    createdTime: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "Reply" });

export interface ReplyList {
  /** The list of replies. If `nextPageToken` is populated, then this list may be incomplete and an additional page of results should be fetched. */
  replies?: ReadonlyArray<Reply>;
  /** Identifies what kind of resource this is. Value: the fixed string `"drive#replyList"`. */
  kind?: string;
  /** The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. */
  nextPageToken?: string;
}

export const ReplyList: Schema.Schema<ReplyList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    replies: Schema.optional(Schema.Array(Reply)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReplyList" });

export interface AppIcons {
  /** Category of the icon. Allowed values are: * `application` - The icon for the application. * `document` - The icon for a file associated with the app. * `documentShared` - The icon for a shared file associated with the app. */
  category?: string;
  /** Size of the icon. Represented as the maximum of the width and height. */
  size?: number;
  /** URL for the icon. */
  iconUrl?: string;
}

export const AppIcons: Schema.Schema<AppIcons> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    size: Schema.optional(Schema.Number),
    iconUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppIcons" });

export interface App {
  /** A short description of the app. */
  shortDescription?: string;
  /** A link to the product listing for this app. */
  productUrl?: string;
  /** The type of object this app creates such as a Chart. If empty, the app name should be used instead. */
  objectType?: string;
  /** Whether this app supports creating files when offline. */
  supportsOfflineCreate?: boolean;
  /** The list of primary file extensions. */
  primaryFileExtensions?: ReadonlyArray<string>;
  /** The ID of the app. */
  id?: string;
  /** Output only. Identifies what kind of resource this is. Value: the fixed string "drive#app". */
  kind?: string;
  /** Whether this app supports opening more than one file. */
  supportsMultiOpen?: boolean;
  /** The list of secondary file extensions. */
  secondaryFileExtensions?: ReadonlyArray<string>;
  /** The list of primary MIME types. */
  primaryMimeTypes?: ReadonlyArray<string>;
  /** Whether the app is authorized to access data on the user's Drive. */
  authorized?: boolean;
  /** Whether the app is selected as the default handler for the types it supports. */
  useByDefault?: boolean;
  /** The list of secondary MIME types. */
  secondaryMimeTypes?: ReadonlyArray<string>;
  /** Whether the app is installed. */
  installed?: boolean;
  /** The various icons for the app. */
  icons?: ReadonlyArray<AppIcons>;
  /** The URL to create a file with this app. */
  createUrl?: string;
  /** The name of the app. */
  name?: string;
  /** Whether this app supports importing from Google Docs. */
  supportsImport?: boolean;
  /** Whether this app supports creating objects. */
  supportsCreate?: boolean;
  /** The ID of the product listing for this app. */
  productId?: string;
  /** The template URL to create a file with this app in a given folder. The template contains the {folderId} to be replaced by the folder ID house the new file. */
  createInFolderTemplate?: string;
  /** The template URL for opening files with this app. The template contains {ids} or {exportIds} to be replaced by the actual file IDs. For more information, see Open Files for the full documentation. */
  openUrlTemplate?: string;
  /** Whether the app has Drive-wide scope. An app with Drive-wide scope can access all files in the user's Drive. */
  hasDriveWideScope?: boolean;
  /** A long description of the app. */
  longDescription?: string;
}

export const App: Schema.Schema<App> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shortDescription: Schema.optional(Schema.String),
    productUrl: Schema.optional(Schema.String),
    objectType: Schema.optional(Schema.String),
    supportsOfflineCreate: Schema.optional(Schema.Boolean),
    primaryFileExtensions: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    supportsMultiOpen: Schema.optional(Schema.Boolean),
    secondaryFileExtensions: Schema.optional(Schema.Array(Schema.String)),
    primaryMimeTypes: Schema.optional(Schema.Array(Schema.String)),
    authorized: Schema.optional(Schema.Boolean),
    useByDefault: Schema.optional(Schema.Boolean),
    secondaryMimeTypes: Schema.optional(Schema.Array(Schema.String)),
    installed: Schema.optional(Schema.Boolean),
    icons: Schema.optional(Schema.Array(AppIcons)),
    createUrl: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    supportsImport: Schema.optional(Schema.Boolean),
    supportsCreate: Schema.optional(Schema.Boolean),
    productId: Schema.optional(Schema.String),
    createInFolderTemplate: Schema.optional(Schema.String),
    openUrlTemplate: Schema.optional(Schema.String),
    hasDriveWideScope: Schema.optional(Schema.Boolean),
    longDescription: Schema.optional(Schema.String),
  }).annotate({ identifier: "App" });

export interface AppList {
  /** The list of apps. */
  items?: ReadonlyArray<App>;
  /** A link back to this list. */
  selfLink?: string;
  /** The list of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest). */
  defaultAppIds?: ReadonlyArray<string>;
  /** Output only. Identifies what kind of resource this is. Value: the fixed string "drive#appList". */
  kind?: string;
}

export const AppList: Schema.Schema<AppList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(App)),
    selfLink: Schema.optional(Schema.String),
    defaultAppIds: Schema.optional(Schema.Array(Schema.String)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppList" });

export interface DownloadRestriction {
  /** Whether download and copy is restricted for readers. */
  restrictedForReaders?: boolean;
  /** Whether download and copy is restricted for writers. If true, download is also restricted for readers. */
  restrictedForWriters?: boolean;
}

export const DownloadRestriction: Schema.Schema<DownloadRestriction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    restrictedForReaders: Schema.optional(Schema.Boolean),
    restrictedForWriters: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DownloadRestriction" });

export interface TeamDrive {
  /** The ID of this Team Drive which is also the ID of the top level folder of this Team Drive. */
  id?: string;
  /** The name of this Team Drive. */
  name?: string;
  /** The color of this Team Drive as an RGB hex string. It can only be set on a `drive.teamdrives.update` request that does not set `themeId`. */
  colorRgb?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"drive#teamDrive"`. */
  kind?: string;
  /** The ID of the theme from which the background image and color will be set. The set of possible `teamDriveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.teamdrives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`. */
  themeId?: string;
  /** The background image file for a Team Drive. */
  backgroundImageFile?: {
    id?: string;
    width?: number;
    yCoordinate?: number;
    xCoordinate?: number;
  };
  /** The time at which the Team Drive was created (RFC 3339 date-time). */
  createdTime?: string;
  /** A set of restrictions that apply to this Team Drive or items inside this Team Drive. */
  restrictions?: {
    copyRequiresWriterPermission?: boolean;
    downloadRestriction?: DownloadRestriction;
    domainUsersOnly?: boolean;
    adminManagedRestrictions?: boolean;
    teamMembersOnly?: boolean;
    sharingFoldersRequiresOrganizerPermission?: boolean;
  };
  /** A short-lived link to this Team Drive's background image. */
  backgroundImageLink?: string;
  /** The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`. */
  orgUnitId?: string;
  /** Capabilities the current user has on this Team Drive. */
  capabilities?: {
    canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean;
    canAddChildren?: boolean;
    canChangeTeamMembersOnlyRestriction?: boolean;
    canDeleteTeamDrive?: boolean;
    canChangeDomainUsersOnlyRestriction?: boolean;
    canTrashChildren?: boolean;
    canComment?: boolean;
    canRemoveChildren?: boolean;
    canChangeDownloadRestriction?: boolean;
    canReadRevisions?: boolean;
    canRename?: boolean;
    canChangeCopyRequiresWriterPermissionRestriction?: boolean;
    canDeleteChildren?: boolean;
    canChangeTeamDriveBackground?: boolean;
    canListChildren?: boolean;
    canShare?: boolean;
    canDownload?: boolean;
    canResetTeamDriveRestrictions?: boolean;
    canEdit?: boolean;
    canCopy?: boolean;
    canRenameTeamDrive?: boolean;
    canManageMembers?: boolean;
  };
}

export const TeamDrive: Schema.Schema<TeamDrive> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    colorRgb: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    themeId: Schema.optional(Schema.String),
    backgroundImageFile: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        width: Schema.optional(Schema.Number),
        yCoordinate: Schema.optional(Schema.Number),
        xCoordinate: Schema.optional(Schema.Number),
      }),
    ),
    createdTime: Schema.optional(Schema.String),
    restrictions: Schema.optional(
      Schema.Struct({
        copyRequiresWriterPermission: Schema.optional(Schema.Boolean),
        downloadRestriction: Schema.optional(DownloadRestriction),
        domainUsersOnly: Schema.optional(Schema.Boolean),
        adminManagedRestrictions: Schema.optional(Schema.Boolean),
        teamMembersOnly: Schema.optional(Schema.Boolean),
        sharingFoldersRequiresOrganizerPermission: Schema.optional(
          Schema.Boolean,
        ),
      }),
    ),
    backgroundImageLink: Schema.optional(Schema.String),
    orgUnitId: Schema.optional(Schema.String),
    capabilities: Schema.optional(
      Schema.Struct({
        canChangeSharingFoldersRequiresOrganizerPermissionRestriction:
          Schema.optional(Schema.Boolean),
        canAddChildren: Schema.optional(Schema.Boolean),
        canChangeTeamMembersOnlyRestriction: Schema.optional(Schema.Boolean),
        canDeleteTeamDrive: Schema.optional(Schema.Boolean),
        canChangeDomainUsersOnlyRestriction: Schema.optional(Schema.Boolean),
        canTrashChildren: Schema.optional(Schema.Boolean),
        canComment: Schema.optional(Schema.Boolean),
        canRemoveChildren: Schema.optional(Schema.Boolean),
        canChangeDownloadRestriction: Schema.optional(Schema.Boolean),
        canReadRevisions: Schema.optional(Schema.Boolean),
        canRename: Schema.optional(Schema.Boolean),
        canChangeCopyRequiresWriterPermissionRestriction: Schema.optional(
          Schema.Boolean,
        ),
        canDeleteChildren: Schema.optional(Schema.Boolean),
        canChangeTeamDriveBackground: Schema.optional(Schema.Boolean),
        canListChildren: Schema.optional(Schema.Boolean),
        canShare: Schema.optional(Schema.Boolean),
        canDownload: Schema.optional(Schema.Boolean),
        canResetTeamDriveRestrictions: Schema.optional(Schema.Boolean),
        canEdit: Schema.optional(Schema.Boolean),
        canCopy: Schema.optional(Schema.Boolean),
        canRenameTeamDrive: Schema.optional(Schema.Boolean),
        canManageMembers: Schema.optional(Schema.Boolean),
      }),
    ),
  }).annotate({ identifier: "TeamDrive" });

export interface TeamDriveList {
  /** The page token for the next page of Team Drives. This will be absent if the end of the Team Drives list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"drive#teamDriveList"`. */
  kind?: string;
  /** The list of Team Drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
  teamDrives?: ReadonlyArray<TeamDrive>;
}

export const TeamDriveList: Schema.Schema<TeamDriveList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    teamDrives: Schema.optional(Schema.Array(TeamDrive)),
  }).annotate({ identifier: "TeamDriveList" });

export interface AccessProposalRoleAndView {
  /** The role that was proposed by the requester. The supported values are: * `writer` * `commenter` * `reader` */
  role?: string;
  /** Indicates the view for this access proposal. Only populated for proposals that belong to a view. Only `published` is supported. */
  view?: string;
}

export const AccessProposalRoleAndView: Schema.Schema<AccessProposalRoleAndView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    view: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessProposalRoleAndView" });

export interface AccessProposal {
  /** The ID of the access proposal. */
  proposalId?: string;
  /** The email address of the user that will receive permissions, if accepted. */
  recipientEmailAddress?: string;
  /** The file ID that the proposal for access is on. */
  fileId?: string;
  /** The email address of the requesting user. */
  requesterEmailAddress?: string;
  /** A wrapper for the role and view of an access proposal. For more information, see [Roles and permissions](https://developers.google.com/workspace/drive/api/guides/ref-roles). */
  rolesAndViews?: ReadonlyArray<AccessProposalRoleAndView>;
  /** The message that the requester added to the proposal. */
  requestMessage?: string;
  /** The creation time. */
  createTime?: string;
}

export const AccessProposal: Schema.Schema<AccessProposal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    proposalId: Schema.optional(Schema.String),
    recipientEmailAddress: Schema.optional(Schema.String),
    fileId: Schema.optional(Schema.String),
    requesterEmailAddress: Schema.optional(Schema.String),
    rolesAndViews: Schema.optional(Schema.Array(AccessProposalRoleAndView)),
    requestMessage: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessProposal" });

export interface ListAccessProposalsResponse {
  /** The list of access proposals. This field is only populated in Drive API v3. */
  accessProposals?: ReadonlyArray<AccessProposal>;
  /** The continuation token for the next page of results. This will be absent if the end of the results list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
  nextPageToken?: string;
}

export const ListAccessProposalsResponse: Schema.Schema<ListAccessProposalsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessProposals: Schema.optional(Schema.Array(AccessProposal)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAccessProposalsResponse" });

export interface About {
  /** A map of source MIME type to possible targets for all supported imports. */
  importFormats?: Record<string, ReadonlyArray<string>>;
  /** The maximum upload size in bytes. */
  maxUploadSize?: string;
  /** The authenticated user. */
  user?: User;
  /** A map of source MIME type to possible targets for all supported exports. */
  exportFormats?: Record<string, ReadonlyArray<string>>;
  /** A map of maximum import sizes by MIME type, in bytes. */
  maxImportSizes?: Record<string, string>;
  /** The currently supported folder colors as RGB hex strings. */
  folderColorPalette?: ReadonlyArray<string>;
  /** Identifies what kind of resource this is. Value: the fixed string `"drive#about"`. */
  kind?: string;
  /** Whether the user can create shared drives. */
  canCreateDrives?: boolean;
  /** A list of themes that are supported for shared drives. */
  driveThemes?: ReadonlyArray<{
    backgroundImageLink?: string;
    id?: string;
    colorRgb?: string;
  }>;
  /** Deprecated: Use `driveThemes` instead. */
  teamDriveThemes?: ReadonlyArray<{
    colorRgb?: string;
    id?: string;
    backgroundImageLink?: string;
  }>;
  /** Whether the user has installed the requesting app. */
  appInstalled?: boolean;
  /** Deprecated: Use `canCreateDrives` instead. */
  canCreateTeamDrives?: boolean;
  /** The user's storage quota limits and usage. For users that are part of an organization with pooled storage, information about the limit and usage across all services is for the organization, rather than the individual user. All fields are measured in bytes. */
  storageQuota?: {
    usageInDrive?: string;
    usageInDriveTrash?: string;
    limit?: string;
    usage?: string;
  };
}

export const About: Schema.Schema<About> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    importFormats: Schema.optional(
      Schema.Record(Schema.String, Schema.Array(Schema.String)),
    ),
    maxUploadSize: Schema.optional(Schema.String),
    user: Schema.optional(User),
    exportFormats: Schema.optional(
      Schema.Record(Schema.String, Schema.Array(Schema.String)),
    ),
    maxImportSizes: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    folderColorPalette: Schema.optional(Schema.Array(Schema.String)),
    kind: Schema.optional(Schema.String),
    canCreateDrives: Schema.optional(Schema.Boolean),
    driveThemes: Schema.optional(
      Schema.Array(
        Schema.Struct({
          backgroundImageLink: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          colorRgb: Schema.optional(Schema.String),
        }),
      ),
    ),
    teamDriveThemes: Schema.optional(
      Schema.Array(
        Schema.Struct({
          colorRgb: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          backgroundImageLink: Schema.optional(Schema.String),
        }),
      ),
    ),
    appInstalled: Schema.optional(Schema.Boolean),
    canCreateTeamDrives: Schema.optional(Schema.Boolean),
    storageQuota: Schema.optional(
      Schema.Struct({
        usageInDrive: Schema.optional(Schema.String),
        usageInDriveTrash: Schema.optional(Schema.String),
        limit: Schema.optional(Schema.String),
        usage: Schema.optional(Schema.String),
      }),
    ),
  }).annotate({ identifier: "About" });

export interface AddReviewer {
  /** Required. The email of the reviewer to add. */
  addedReviewerEmail?: string;
}

export const AddReviewer: Schema.Schema<AddReviewer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addedReviewerEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "AddReviewer" });

export interface ReplaceReviewer {
  /** Required. The email of the reviewer to add. */
  addedReviewerEmail?: string;
  /** Required. The email of the reviewer to remove. */
  removedReviewerEmail?: string;
}

export const ReplaceReviewer: Schema.Schema<ReplaceReviewer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addedReviewerEmail: Schema.optional(Schema.String),
    removedReviewerEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReplaceReviewer" });

export interface ReassignApprovalRequest {
  /** Optional. A message to send to the new reviewers. This message is included in notifications for the action and in the approval activity log. */
  message?: string;
  /** Optional. The list of reviewers to add. */
  addReviewers?: ReadonlyArray<AddReviewer>;
  /** Optional. The list of reviewer replacements. */
  replaceReviewers?: ReadonlyArray<ReplaceReviewer>;
}

export const ReassignApprovalRequest: Schema.Schema<ReassignApprovalRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    addReviewers: Schema.optional(Schema.Array(AddReviewer)),
    replaceReviewers: Schema.optional(Schema.Array(ReplaceReviewer)),
  }).annotate({ identifier: "ReassignApprovalRequest" });

export interface Channel {
  /** An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
  token?: string;
  /** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
  expiration?: string;
  /** The address where notifications are delivered for this channel. */
  address?: string;
  /** Additional parameters controlling delivery channel behavior. Optional. */
  params?: Record<string, string>;
  /** An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
  resourceId?: string;
  /** A version-specific identifier for the watched resource. */
  resourceUri?: string;
  /** A UUID or similar unique string that identifies this channel. */
  id?: string;
  /** The type of delivery mechanism used for this channel. Valid values are "web_hook" or "webhook". */
  type?: string;
  /** Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`. */
  kind?: string;
  /** A Boolean value to indicate whether payload is wanted. Optional. */
  payload?: boolean;
}

export const Channel: Schema.Schema<Channel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
    expiration: Schema.optional(Schema.String),
    address: Schema.optional(Schema.String),
    params: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    resourceId: Schema.optional(Schema.String),
    resourceUri: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Channel" });

export interface ContentRestriction {
  /** Reason for why the content of the file is restricted. This is only mutable on requests that also set `readOnly=true`. */
  reason?: string;
  /** Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified. */
  readOnly?: boolean;
  /** Output only. The type of the content restriction. Currently the only possible value is `globalContentRestriction`. */
  type?: string;
  /** Whether the content restriction can only be modified or removed by a user who owns the file. For files in shared drives, any user with `organizer` capabilities can modify or remove this content restriction. */
  ownerRestricted?: boolean;
  /** Output only. Whether the content restriction was applied by the system, for example due to an esignature. Users cannot modify or remove system restricted content restrictions. */
  systemRestricted?: boolean;
  /** The time at which the content restriction was set (formatted RFC 3339 timestamp). Only populated if readOnly is true. */
  restrictionTime?: string;
  /** Output only. The user who set the content restriction. Only populated if `readOnly=true`. */
  restrictingUser?: User;
}

export const ContentRestriction: Schema.Schema<ContentRestriction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
    ownerRestricted: Schema.optional(Schema.Boolean),
    systemRestricted: Schema.optional(Schema.Boolean),
    restrictionTime: Schema.optional(Schema.String),
    restrictingUser: Schema.optional(User),
  }).annotate({ identifier: "ContentRestriction" });

export interface LabelField {
  /** The identifier of this label field. */
  id?: string;
  /** The field type. While new values may be supported in the future, the following are currently allowed: * `dateString` * `integer` * `selection` * `text` * `user` */
  valueType?: string;
  /** Only present if `valueType` is `selection` */
  selection?: ReadonlyArray<string>;
  /** This is always drive#labelField. */
  kind?: string;
  /** Only present if valueType is dateString. RFC 3339 formatted date: YYYY-MM-DD. */
  dateString?: ReadonlyArray<string>;
  /** Only present if `valueType` is `text`. */
  text?: ReadonlyArray<string>;
  /** Only present if `valueType` is `user`. */
  user?: ReadonlyArray<User>;
  /** Only present if `valueType` is `integer`. */
  integer?: ReadonlyArray<string>;
}

export const LabelField: Schema.Schema<LabelField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    valueType: Schema.optional(Schema.String),
    selection: Schema.optional(Schema.Array(Schema.String)),
    kind: Schema.optional(Schema.String),
    dateString: Schema.optional(Schema.Array(Schema.String)),
    text: Schema.optional(Schema.Array(Schema.String)),
    user: Schema.optional(Schema.Array(User)),
    integer: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LabelField" });

export interface Label {
  /** The ID of the label. */
  id?: string;
  /** The revision ID of the label. */
  revisionId?: string;
  /** A map of the fields on the label, keyed by the field's ID. */
  fields?: Record<string, LabelField>;
  /** This is always drive#label */
  kind?: string;
}

export const Label: Schema.Schema<Label> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    revisionId: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.Record(Schema.String, LabelField)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "Label" });

export interface DecryptionMetadata {
  /** The URL-safe Base64 encoded HMAC-SHA256 digest of the resource metadata with its DEK (Data Encryption Key); see https://developers.google.com/workspace/cse/reference */
  encryptionResourceKeyHash?: string;
  /** Key format for the unwrapped key. Must be `tinkAesGcmKey`. */
  keyFormat?: string;
  /** Chunk size used if content was encrypted with the AES 256 GCM Cipher. Possible values are: - default - small */
  aes256GcmChunkSize?: string;
  /** The signed JSON Web Token (JWT) which can be used to authorize the requesting user with the Key ACL Service (KACLS). The JWT asserts that the requesting user has at least read permissions on the file. */
  jwt?: string;
  /** The ID of the KACLS (Key ACL Service) used to encrypt the file. */
  kaclsId?: string;
  /** The URL-safe Base64 encoded wrapped key used to encrypt the contents of the file. */
  wrappedKey?: string;
  /** The name of the KACLS (Key ACL Service) used to encrypt the file. */
  kaclsName?: string;
}

export const DecryptionMetadata: Schema.Schema<DecryptionMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionResourceKeyHash: Schema.optional(Schema.String),
    keyFormat: Schema.optional(Schema.String),
    aes256GcmChunkSize: Schema.optional(Schema.String),
    jwt: Schema.optional(Schema.String),
    kaclsId: Schema.optional(Schema.String),
    wrappedKey: Schema.optional(Schema.String),
    kaclsName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DecryptionMetadata" });

export interface ClientEncryptionDetails {
  /** The encryption state of the file. The values expected here are: - encrypted - unencrypted */
  encryptionState?: string;
  /** The metadata used for client-side operations. */
  decryptionMetadata?: DecryptionMetadata;
}

export const ClientEncryptionDetails: Schema.Schema<ClientEncryptionDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionState: Schema.optional(Schema.String),
    decryptionMetadata: Schema.optional(DecryptionMetadata),
  }).annotate({ identifier: "ClientEncryptionDetails" });

export interface DownloadRestrictionsMetadata {
  /** The download restriction of the file applied directly by the owner or organizer. This doesn't take into account shared drive settings or DLP rules. */
  itemDownloadRestriction?: DownloadRestriction;
  /** Output only. The effective download restriction applied to this file. This considers all restriction settings and DLP rules. */
  effectiveDownloadRestrictionWithContext?: DownloadRestriction;
}

export const DownloadRestrictionsMetadata: Schema.Schema<DownloadRestrictionsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    itemDownloadRestriction: Schema.optional(DownloadRestriction),
    effectiveDownloadRestrictionWithContext:
      Schema.optional(DownloadRestriction),
  }).annotate({ identifier: "DownloadRestrictionsMetadata" });

export interface Permission {
  /** The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future */
  expirationTime?: string;
  /** Output only. Whether the account associated with this permission has been deleted. This field only pertains to permissions of type `user` or `group`. */
  deleted?: boolean;
  /** Output only. Deprecated: Output only. Use `permissionDetails` instead. */
  teamDrivePermissionDetails?: ReadonlyArray<{
    inheritedFrom?: string;
    teamDrivePermissionType?: string;
    role?: string;
    inherited?: boolean;
  }>;
  /** Whether the account associated with this permission is a pending owner. Only populated for permissions of type `user` for files that aren't in a shared drive. */
  pendingOwner?: boolean;
  /** When `true`, only organizers, owners, and users with permissions added directly on the item can access it. */
  inheritedPermissionsDisabled?: boolean;
  /** Output only. A link to the user's profile photo, if available. */
  photoLink?: string;
  /** Output only. The domain to which this permission refers. */
  domain?: string;
  /** Output only. The email address of the user or group to which this permission refers. */
  emailAddress?: string;
  /** Indicates the view for this permission. Only populated for permissions that belong to a view. The only supported values are `published` and `metadata`: * `published`: The permission's role is `publishedReader`. * `metadata`: The item is only visible to the `metadata` view because the item has limited access and the scope has at least read access to the parent. The `metadata` view is only supported on folders. For more information, see [Views](https://developers.google.com/workspace/drive/api/guides/ref-roles#views). */
  view?: string;
  /** Output only. The ID of this permission. This is a unique identifier for the grantee, and is published in the [User resource](https://developers.google.com/workspace/drive/api/reference/rest/v3/User) as `permissionId`. IDs should be treated as opaque values. */
  id?: string;
  /** The type of the grantee. Supported values include: * `user` * `group` * `domain` * `anyone` When creating a permission, if `type` is `user` or `group`, you must provide an `emailAddress` for the user or group. If `type` is `domain`, you must provide a `domain`. If `type` is `anyone`, no extra information is required. */
  type?: string;
  /** Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#permission"`. */
  kind?: string;
  /** Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type `domain` or `anyone`. */
  allowFileDiscovery?: boolean;
  /** Output only. The "pretty" name of the value of the permission. The following is a list of examples for each type of permission: * `user` - User's full name, as defined for their Google Account, such as "Dana A." * `group` - Name of the Google Group, such as "The Company Administrators." * `domain` - String domain name, such as "cymbalgroup.com." * `anyone` - No `displayName` is present. */
  displayName?: string;
  /** The role granted by this permission. Supported values include: * `owner` * `organizer` * `fileOrganizer` * `writer` * `commenter` * `reader` For more information, see [Roles and permissions](https://developers.google.com/workspace/drive/api/guides/ref-roles). */
  role?: string;
  /** Output only. Details of whether the permissions on this item are inherited or are directly on this item. */
  permissionDetails?: ReadonlyArray<{
    role?: string;
    inherited?: boolean;
    permissionType?: string;
    inheritedFrom?: string;
  }>;
}

export const Permission: Schema.Schema<Permission> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expirationTime: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    teamDrivePermissionDetails: Schema.optional(
      Schema.Array(
        Schema.Struct({
          inheritedFrom: Schema.optional(Schema.String),
          teamDrivePermissionType: Schema.optional(Schema.String),
          role: Schema.optional(Schema.String),
          inherited: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    pendingOwner: Schema.optional(Schema.Boolean),
    inheritedPermissionsDisabled: Schema.optional(Schema.Boolean),
    photoLink: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    emailAddress: Schema.optional(Schema.String),
    view: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    allowFileDiscovery: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    permissionDetails: Schema.optional(
      Schema.Array(
        Schema.Struct({
          role: Schema.optional(Schema.String),
          inherited: Schema.optional(Schema.Boolean),
          permissionType: Schema.optional(Schema.String),
          inheritedFrom: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).annotate({ identifier: "Permission" });

export interface File {
  /** Output only. The list of spaces which contain the file. The currently supported values are `drive`, `appDataFolder`, and `photos`. */
  spaces?: ReadonlyArray<string>;
  /** Output only. Additional metadata about image media, if available. */
  imageMediaMetadata?: {
    lens?: string;
    height?: number;
    rotation?: number;
    flashUsed?: boolean;
    colorSpace?: string;
    location?: { longitude?: number; altitude?: number; latitude?: number };
    meteringMode?: string;
    whiteBalance?: string;
    isoSpeed?: number;
    exposureTime?: number;
    exposureBias?: number;
    exposureMode?: string;
    cameraMake?: string;
    focalLength?: number;
    cameraModel?: string;
    maxApertureValue?: number;
    subjectDistance?: number;
    width?: number;
    sensor?: string;
    time?: string;
    aperture?: number;
  };
  /** The time at which the file was shared with the user, if applicable (RFC 3339 date-time). */
  sharedWithMeTime?: string;
  /** The name of the file. This isn't necessarily unique within a folder. Note that for immutable items such as the top-level folders of shared drives, the My Drive root folder, and the Application Data folder, the name is constant. */
  name?: string;
  /** Restrictions for accessing the content of the file. Only populated if such a restriction exists. */
  contentRestrictions?: ReadonlyArray<ContentRestriction>;
  /** Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it's not populated for Docs Editors or shortcut files. */
  sha1Checksum?: string;
  /** Information about a shortcut file. */
  shortcutDetails?: {
    targetId?: string;
    targetMimeType?: string;
    targetResourceKey?: string;
  };
  /** Label information on the file. */
  labelInfo?: { labels?: ReadonlyArray<Label> };
  /** Deprecated: Use `copyRequiresWriterPermission` instead. */
  viewersCanCopyContent?: boolean;
  /** Output only. Size in bytes of blobs and Google Workspace editor files. Won't be populated for files that have no size, like shortcuts and folders. */
  size?: string;
  /** Output only. Whether the file has been modified by this user. */
  modifiedByMe?: boolean;
  /** Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#file"`. */
  kind?: string;
  /** Output only. ID of the shared drive the file resides in. Only populated for items in shared drives. */
  driveId?: string;
  /** The original filename of the uploaded content if available, or else the original value of the `name` field. This is only available for files with binary content in Google Drive. */
  originalFilename?: string;
  /** Client Side Encryption related details. Contains details about the encryption state of the file and details regarding the encryption mechanism that clients need to use when decrypting the contents of this item. This will only be present on files and not on folders or shortcuts. */
  clientEncryptionDetails?: ClientEncryptionDetails;
  /** Whether the options to copy, print, or download this file should be disabled for readers and commenters. */
  copyRequiresWriterPermission?: boolean;
  /** Whether users with only `writer` permission can modify the file's permissions. Not populated for items in shared drives. */
  writersCanShare?: boolean;
  /** The MIME type of the file. Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content is imported, if possible. The supported import formats are published in the [`about`](/workspace/drive/api/reference/rest/v3/about) resource. */
  mimeType?: string;
  /** Output only. Links for exporting Docs Editors files to specific formats. */
  exportLinks?: Record<string, string>;
  /** The ID of the parent folder containing the file. A file can only have one parent folder; specifying multiple parents isn't supported. If not specified as part of a create request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parent of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list. */
  parents?: ReadonlyArray<string>;
  /** Output only. Whether the file has been shared. Not populated for items in shared drives. */
  shared?: boolean;
  /** Output only. The user who shared the file with the requesting user, if applicable. */
  sharingUser?: User;
  /** Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with `keepForever` enabled. */
  quotaBytesUsed?: string;
  /** Contains details about the link URLs that clients are using to refer to this item. */
  linkShareMetadata?: {
    securityUpdateEligible?: boolean;
    securityUpdateEnabled?: boolean;
  };
  /** Download restrictions applied on the file. */
  downloadRestrictions?: DownloadRestrictionsMetadata;
  /** Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, but other users can still access the file in the owner's trash until it's permanently deleted. */
  trashed?: boolean;
  /** Output only. Whether the file was created or opened by the requesting app. */
  isAppAuthorized?: boolean;
  /** Output only. A link for opening the file in a relevant Google editor or viewer in a browser. */
  webViewLink?: string;
  /** Output only. The thumbnail version for use in thumbnail cache invalidation. */
  thumbnailVersion?: string;
  /** Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder. */
  explicitlyTrashed?: boolean;
  /** Output only. The final component of `fullFileExtension`. This is only available for files with binary content in Google Drive. */
  fileExtension?: string;
  /** The last time the file was viewed by the user (RFC 3339 date-time). */
  viewedByMeTime?: string;
  /** A short description of the file. */
  description?: string;
  /** Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive. */
  webContentLink?: string;
  /** he last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user. */
  modifiedTime?: string;
  /** Output only. List of permission IDs for users with access to this file. */
  permissionIds?: ReadonlyArray<string>;
  /** Whether the user has starred the file. */
  starred?: boolean;
  /** Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives. */
  hasAugmentedPermissions?: boolean;
  /** Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives. */
  permissions?: ReadonlyArray<Permission>;
  /** Output only. Whether this file has a thumbnail. This doesn't indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field. */
  hasThumbnail?: boolean;
  /** Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user. */
  version?: string;
  /** Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive. */
  md5Checksum?: string;
  /** The last time the file was modified by the user (RFC 3339 date-time). */
  modifiedByMeTime?: string;
  /** The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the `folderColorPalette` field of the [`about`](/workspace/drive/api/reference/rest/v3/about) resource. If an unsupported color is specified, the closest color in the palette is used instead. */
  folderColorRgb?: string;
  /** Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take. For more information, see [Understand file capabilities](https://developers.google.com/workspace/drive/api/guides/manage-sharing#capabilities). */
  capabilities?: {
    canModifyContent?: boolean;
    canMoveChildrenWithinDrive?: boolean;
    canAddFolderFromAnotherDrive?: boolean;
    canChangeSecurityUpdateEnabled?: boolean;
    canMoveItemWithinTeamDrive?: boolean;
    canRemoveContentRestriction?: boolean;
    canShare?: boolean;
    canModifyEditorContentRestriction?: boolean;
    canComment?: boolean;
    canTrashChildren?: boolean;
    canDisableInheritedPermissions?: boolean;
    canStartApproval?: boolean;
    canUntrash?: boolean;
    canAddMyDriveParent?: boolean;
    canReadLabels?: boolean;
    canAddChildren?: boolean;
    canChangeViewersCanCopyContent?: boolean;
    canEnableInheritedPermissions?: boolean;
    canDelete?: boolean;
    canRemoveMyDriveParent?: boolean;
    canReadDrive?: boolean;
    canTrash?: boolean;
    canMoveTeamDriveItem?: boolean;
    canCopy?: boolean;
    canEdit?: boolean;
    canDownload?: boolean;
    canMoveItemIntoTeamDrive?: boolean;
    canModifyContentRestriction?: boolean;
    canListChildren?: boolean;
    canChangeCopyRequiresWriterPermission?: boolean;
    canModifyOwnerContentRestriction?: boolean;
    canMoveChildrenWithinTeamDrive?: boolean;
    canMoveChildrenOutOfDrive?: boolean;
    canReadTeamDrive?: boolean;
    canDeleteChildren?: boolean;
    canMoveItemWithinDrive?: boolean;
    canRename?: boolean;
    canReadRevisions?: boolean;
    canRemoveChildren?: boolean;
    canMoveItemOutOfTeamDrive?: boolean;
    canModifyLabels?: boolean;
    canAcceptOwnership?: boolean;
    canChangeItemDownloadRestriction?: boolean;
    canMoveChildrenOutOfTeamDrive?: boolean;
    canMoveItemOutOfDrive?: boolean;
  };
  /** Output only. A key needed to access the item via a shared link. */
  resourceKey?: string;
  /** A collection of arbitrary key-value pairs which are private to the requesting app. Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties. */
  appProperties?: Record<string, string>;
  /** A collection of arbitrary key-value pairs which are visible to all apps. Entries with null values are cleared in update and copy requests. */
  properties?: Record<string, string>;
  /** Additional information about the content of the file. These fields are never populated in responses. */
  contentHints?: {
    indexableText?: string;
    thumbnail?: { image?: string; mimeType?: string };
  };
  /** Whether this file has inherited permissions disabled. Inherited permissions are enabled by default. */
  inheritedPermissionsDisabled?: boolean;
  /** Deprecated: Output only. Use `driveId` instead. */
  teamDriveId?: string;
  /** Output only. The last user to modify the file. This field is only populated when the last modification was performed by a signed-in user. */
  lastModifyingUser?: User;
  /** Output only. Whether the user owns the file. Not populated for items in shared drives. */
  ownedByMe?: boolean;
  /** Output only. The ID of the file's head revision. This is currently only available for files with binary content in Google Drive. */
  headRevisionId?: string;
  /** The time at which the file was created (RFC 3339 date-time). */
  createdTime?: string;
  /** Output only. Additional metadata about video media. This may not be available immediately upon upload. */
  videoMediaMetadata?: {
    width?: number;
    height?: number;
    durationMillis?: string;
  };
  /** Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Not intended for direct usage on web applications due to [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policies. Consider using a proxy server. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `files.thumbnailLink` must be fetched using a credentialed request. */
  thumbnailLink?: string;
  /** Output only. The full file extension extracted from the `name` field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the `name` field changes, however it's not cleared if the new name doesn't contain a valid extension. */
  fullFileExtension?: string;
  /** Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives. */
  owners?: ReadonlyArray<User>;
  /** Output only. Whether the file has been viewed by this user. */
  viewedByMe?: boolean;
  /** Output only. A static, unauthenticated link to the file's icon. */
  iconLink?: string;
  /** Output only. If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives. */
  trashingUser?: User;
  /** The ID of the file. */
  id?: string;
  /** The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives. */
  trashedTime?: string;
  /** Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it's not populated for Docs Editors or shortcut files. */
  sha256Checksum?: string;
}

export const File: Schema.Schema<File> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spaces: Schema.optional(Schema.Array(Schema.String)),
    imageMediaMetadata: Schema.optional(
      Schema.Struct({
        lens: Schema.optional(Schema.String),
        height: Schema.optional(Schema.Number),
        rotation: Schema.optional(Schema.Number),
        flashUsed: Schema.optional(Schema.Boolean),
        colorSpace: Schema.optional(Schema.String),
        location: Schema.optional(
          Schema.Struct({
            longitude: Schema.optional(Schema.Number),
            altitude: Schema.optional(Schema.Number),
            latitude: Schema.optional(Schema.Number),
          }),
        ),
        meteringMode: Schema.optional(Schema.String),
        whiteBalance: Schema.optional(Schema.String),
        isoSpeed: Schema.optional(Schema.Number),
        exposureTime: Schema.optional(Schema.Number),
        exposureBias: Schema.optional(Schema.Number),
        exposureMode: Schema.optional(Schema.String),
        cameraMake: Schema.optional(Schema.String),
        focalLength: Schema.optional(Schema.Number),
        cameraModel: Schema.optional(Schema.String),
        maxApertureValue: Schema.optional(Schema.Number),
        subjectDistance: Schema.optional(Schema.Number),
        width: Schema.optional(Schema.Number),
        sensor: Schema.optional(Schema.String),
        time: Schema.optional(Schema.String),
        aperture: Schema.optional(Schema.Number),
      }),
    ),
    sharedWithMeTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    contentRestrictions: Schema.optional(Schema.Array(ContentRestriction)),
    sha1Checksum: Schema.optional(Schema.String),
    shortcutDetails: Schema.optional(
      Schema.Struct({
        targetId: Schema.optional(Schema.String),
        targetMimeType: Schema.optional(Schema.String),
        targetResourceKey: Schema.optional(Schema.String),
      }),
    ),
    labelInfo: Schema.optional(
      Schema.Struct({ labels: Schema.optional(Schema.Array(Label)) }),
    ),
    viewersCanCopyContent: Schema.optional(Schema.Boolean),
    size: Schema.optional(Schema.String),
    modifiedByMe: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    driveId: Schema.optional(Schema.String),
    originalFilename: Schema.optional(Schema.String),
    clientEncryptionDetails: Schema.optional(ClientEncryptionDetails),
    copyRequiresWriterPermission: Schema.optional(Schema.Boolean),
    writersCanShare: Schema.optional(Schema.Boolean),
    mimeType: Schema.optional(Schema.String),
    exportLinks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    parents: Schema.optional(Schema.Array(Schema.String)),
    shared: Schema.optional(Schema.Boolean),
    sharingUser: Schema.optional(User),
    quotaBytesUsed: Schema.optional(Schema.String),
    linkShareMetadata: Schema.optional(
      Schema.Struct({
        securityUpdateEligible: Schema.optional(Schema.Boolean),
        securityUpdateEnabled: Schema.optional(Schema.Boolean),
      }),
    ),
    downloadRestrictions: Schema.optional(DownloadRestrictionsMetadata),
    trashed: Schema.optional(Schema.Boolean),
    isAppAuthorized: Schema.optional(Schema.Boolean),
    webViewLink: Schema.optional(Schema.String),
    thumbnailVersion: Schema.optional(Schema.String),
    explicitlyTrashed: Schema.optional(Schema.Boolean),
    fileExtension: Schema.optional(Schema.String),
    viewedByMeTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    webContentLink: Schema.optional(Schema.String),
    modifiedTime: Schema.optional(Schema.String),
    permissionIds: Schema.optional(Schema.Array(Schema.String)),
    starred: Schema.optional(Schema.Boolean),
    hasAugmentedPermissions: Schema.optional(Schema.Boolean),
    permissions: Schema.optional(Schema.Array(Permission)),
    hasThumbnail: Schema.optional(Schema.Boolean),
    version: Schema.optional(Schema.String),
    md5Checksum: Schema.optional(Schema.String),
    modifiedByMeTime: Schema.optional(Schema.String),
    folderColorRgb: Schema.optional(Schema.String),
    capabilities: Schema.optional(
      Schema.Struct({
        canModifyContent: Schema.optional(Schema.Boolean),
        canMoveChildrenWithinDrive: Schema.optional(Schema.Boolean),
        canAddFolderFromAnotherDrive: Schema.optional(Schema.Boolean),
        canChangeSecurityUpdateEnabled: Schema.optional(Schema.Boolean),
        canMoveItemWithinTeamDrive: Schema.optional(Schema.Boolean),
        canRemoveContentRestriction: Schema.optional(Schema.Boolean),
        canShare: Schema.optional(Schema.Boolean),
        canModifyEditorContentRestriction: Schema.optional(Schema.Boolean),
        canComment: Schema.optional(Schema.Boolean),
        canTrashChildren: Schema.optional(Schema.Boolean),
        canDisableInheritedPermissions: Schema.optional(Schema.Boolean),
        canStartApproval: Schema.optional(Schema.Boolean),
        canUntrash: Schema.optional(Schema.Boolean),
        canAddMyDriveParent: Schema.optional(Schema.Boolean),
        canReadLabels: Schema.optional(Schema.Boolean),
        canAddChildren: Schema.optional(Schema.Boolean),
        canChangeViewersCanCopyContent: Schema.optional(Schema.Boolean),
        canEnableInheritedPermissions: Schema.optional(Schema.Boolean),
        canDelete: Schema.optional(Schema.Boolean),
        canRemoveMyDriveParent: Schema.optional(Schema.Boolean),
        canReadDrive: Schema.optional(Schema.Boolean),
        canTrash: Schema.optional(Schema.Boolean),
        canMoveTeamDriveItem: Schema.optional(Schema.Boolean),
        canCopy: Schema.optional(Schema.Boolean),
        canEdit: Schema.optional(Schema.Boolean),
        canDownload: Schema.optional(Schema.Boolean),
        canMoveItemIntoTeamDrive: Schema.optional(Schema.Boolean),
        canModifyContentRestriction: Schema.optional(Schema.Boolean),
        canListChildren: Schema.optional(Schema.Boolean),
        canChangeCopyRequiresWriterPermission: Schema.optional(Schema.Boolean),
        canModifyOwnerContentRestriction: Schema.optional(Schema.Boolean),
        canMoveChildrenWithinTeamDrive: Schema.optional(Schema.Boolean),
        canMoveChildrenOutOfDrive: Schema.optional(Schema.Boolean),
        canReadTeamDrive: Schema.optional(Schema.Boolean),
        canDeleteChildren: Schema.optional(Schema.Boolean),
        canMoveItemWithinDrive: Schema.optional(Schema.Boolean),
        canRename: Schema.optional(Schema.Boolean),
        canReadRevisions: Schema.optional(Schema.Boolean),
        canRemoveChildren: Schema.optional(Schema.Boolean),
        canMoveItemOutOfTeamDrive: Schema.optional(Schema.Boolean),
        canModifyLabels: Schema.optional(Schema.Boolean),
        canAcceptOwnership: Schema.optional(Schema.Boolean),
        canChangeItemDownloadRestriction: Schema.optional(Schema.Boolean),
        canMoveChildrenOutOfTeamDrive: Schema.optional(Schema.Boolean),
        canMoveItemOutOfDrive: Schema.optional(Schema.Boolean),
      }),
    ),
    resourceKey: Schema.optional(Schema.String),
    appProperties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    contentHints: Schema.optional(
      Schema.Struct({
        indexableText: Schema.optional(Schema.String),
        thumbnail: Schema.optional(
          Schema.Struct({
            image: Schema.optional(Schema.String),
            mimeType: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    inheritedPermissionsDisabled: Schema.optional(Schema.Boolean),
    teamDriveId: Schema.optional(Schema.String),
    lastModifyingUser: Schema.optional(User),
    ownedByMe: Schema.optional(Schema.Boolean),
    headRevisionId: Schema.optional(Schema.String),
    createdTime: Schema.optional(Schema.String),
    videoMediaMetadata: Schema.optional(
      Schema.Struct({
        width: Schema.optional(Schema.Number),
        height: Schema.optional(Schema.Number),
        durationMillis: Schema.optional(Schema.String),
      }),
    ),
    thumbnailLink: Schema.optional(Schema.String),
    fullFileExtension: Schema.optional(Schema.String),
    owners: Schema.optional(Schema.Array(User)),
    viewedByMe: Schema.optional(Schema.Boolean),
    iconLink: Schema.optional(Schema.String),
    trashingUser: Schema.optional(User),
    id: Schema.optional(Schema.String),
    trashedTime: Schema.optional(Schema.String),
    sha256Checksum: Schema.optional(Schema.String),
  }).annotate({ identifier: "File" });

export interface FileList {
  /** The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"drive#fileList"`. */
  kind?: string;
  /** Whether the search process was incomplete. If true, then some search results might be missing, since all documents were not searched. This can occur when searching multiple drives with the `allDrives` corpora, but all corpora couldn't be searched. When this happens, it's suggested that clients narrow their query by choosing a different corpus such as `user` or `drive`. */
  incompleteSearch?: boolean;
  /** The list of files. If `nextPageToken` is populated, then this list may be incomplete and an additional page of results should be fetched. */
  files?: ReadonlyArray<File>;
}

export const FileList: Schema.Schema<FileList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    incompleteSearch: Schema.optional(Schema.Boolean),
    files: Schema.optional(Schema.Array(File)),
  }).annotate({ identifier: "FileList" });

export interface Drive {
  /** Output only. Capabilities the current user has on this shared drive. */
  capabilities?: {
    canDownload?: boolean;
    canEdit?: boolean;
    canShare?: boolean;
    canManageMembers?: boolean;
    canRenameDrive?: boolean;
    canCopy?: boolean;
    canResetDriveRestrictions?: boolean;
    canChangeDriveBackground?: boolean;
    canChangeDomainUsersOnlyRestriction?: boolean;
    canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean;
    canAddChildren?: boolean;
    canDeleteDrive?: boolean;
    canReadRevisions?: boolean;
    canRename?: boolean;
    canChangeCopyRequiresWriterPermissionRestriction?: boolean;
    canDeleteChildren?: boolean;
    canListChildren?: boolean;
    canChangeDriveMembersOnlyRestriction?: boolean;
    canTrashChildren?: boolean;
    canComment?: boolean;
    canChangeDownloadRestriction?: boolean;
  };
  /** Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`. */
  orgUnitId?: string;
  /** The time at which the shared drive was created (RFC 3339 date-time). */
  createdTime?: string;
  /** A set of restrictions that apply to this shared drive or items inside this shared drive. Note that restrictions can't be set when creating a shared drive. To add a restriction, first create a shared drive and then use `drives.update` to add restrictions. */
  restrictions?: {
    sharingFoldersRequiresOrganizerPermission?: boolean;
    adminManagedRestrictions?: boolean;
    domainUsersOnly?: boolean;
    downloadRestriction?: DownloadRestriction;
    copyRequiresWriterPermission?: boolean;
    driveMembersOnly?: boolean;
  };
  /** An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set. */
  backgroundImageFile?: {
    id?: string;
    width?: number;
    xCoordinate?: number;
    yCoordinate?: number;
  };
  /** Output only. A short-lived link to this shared drive's background image. */
  backgroundImageLink?: string;
  /** The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`. */
  themeId?: string;
  /** Whether the shared drive is hidden from default view. */
  hidden?: boolean;
  /** The name of this shared drive. */
  name?: string;
  /** The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`. */
  colorRgb?: string;
  /** Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#drive"`. */
  kind?: string;
  /** Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive. */
  id?: string;
}

export const Drive: Schema.Schema<Drive> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    capabilities: Schema.optional(
      Schema.Struct({
        canDownload: Schema.optional(Schema.Boolean),
        canEdit: Schema.optional(Schema.Boolean),
        canShare: Schema.optional(Schema.Boolean),
        canManageMembers: Schema.optional(Schema.Boolean),
        canRenameDrive: Schema.optional(Schema.Boolean),
        canCopy: Schema.optional(Schema.Boolean),
        canResetDriveRestrictions: Schema.optional(Schema.Boolean),
        canChangeDriveBackground: Schema.optional(Schema.Boolean),
        canChangeDomainUsersOnlyRestriction: Schema.optional(Schema.Boolean),
        canChangeSharingFoldersRequiresOrganizerPermissionRestriction:
          Schema.optional(Schema.Boolean),
        canAddChildren: Schema.optional(Schema.Boolean),
        canDeleteDrive: Schema.optional(Schema.Boolean),
        canReadRevisions: Schema.optional(Schema.Boolean),
        canRename: Schema.optional(Schema.Boolean),
        canChangeCopyRequiresWriterPermissionRestriction: Schema.optional(
          Schema.Boolean,
        ),
        canDeleteChildren: Schema.optional(Schema.Boolean),
        canListChildren: Schema.optional(Schema.Boolean),
        canChangeDriveMembersOnlyRestriction: Schema.optional(Schema.Boolean),
        canTrashChildren: Schema.optional(Schema.Boolean),
        canComment: Schema.optional(Schema.Boolean),
        canChangeDownloadRestriction: Schema.optional(Schema.Boolean),
      }),
    ),
    orgUnitId: Schema.optional(Schema.String),
    createdTime: Schema.optional(Schema.String),
    restrictions: Schema.optional(
      Schema.Struct({
        sharingFoldersRequiresOrganizerPermission: Schema.optional(
          Schema.Boolean,
        ),
        adminManagedRestrictions: Schema.optional(Schema.Boolean),
        domainUsersOnly: Schema.optional(Schema.Boolean),
        downloadRestriction: Schema.optional(DownloadRestriction),
        copyRequiresWriterPermission: Schema.optional(Schema.Boolean),
        driveMembersOnly: Schema.optional(Schema.Boolean),
      }),
    ),
    backgroundImageFile: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        width: Schema.optional(Schema.Number),
        xCoordinate: Schema.optional(Schema.Number),
        yCoordinate: Schema.optional(Schema.Number),
      }),
    ),
    backgroundImageLink: Schema.optional(Schema.String),
    themeId: Schema.optional(Schema.String),
    hidden: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    colorRgb: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "Drive" });

export interface LabelList {
  /** The page token for the next page of labels. This field will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. */
  nextPageToken?: string;
  /** This is always `"drive#labelList"`. */
  kind?: string;
  /** The list of labels. */
  labels?: ReadonlyArray<Label>;
}

export const LabelList: Schema.Schema<LabelList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(Label)),
  }).annotate({ identifier: "LabelList" });

export interface Comment {
  /** A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Manage comments and replies](https://developers.google.com/workspace/drive/api/v3/manage-comments). */
  anchor?: string;
  /** Output only. The email address of the user assigned to this comment. If no user is assigned, the field is unset. */
  assigneeEmailAddress?: string;
  /** Output only. The ID of the comment. */
  id?: string;
  /** Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#comment"`. */
  kind?: string;
  /** The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment. */
  quotedFileContent?: { value?: string; mimeType?: string };
  /** Output only. Whether the comment has been resolved by one of its replies. */
  resolved?: boolean;
  /** The plain text content of the comment. This field is used for setting the content, while `htmlContent` should be displayed. */
  content?: string;
  /** Output only. A list of email addresses for users mentioned in this comment. If no users are mentioned, the list is empty. */
  mentionedEmailAddresses?: ReadonlyArray<string>;
  /** The last time the comment or any of its replies was modified (RFC 3339 date-time). */
  modifiedTime?: string;
  /** Output only. Whether the comment has been deleted. A deleted comment has no content. */
  deleted?: boolean;
  /** Output only. The full list of replies to the comment in chronological order. */
  replies?: ReadonlyArray<Reply>;
  /** Output only. The content of the comment with HTML formatting. */
  htmlContent?: string;
  /** Output only. The author of the comment. The author's email address and permission ID will not be populated. */
  author?: User;
  /** The time at which the comment was created (RFC 3339 date-time). */
  createdTime?: string;
}

export const Comment: Schema.Schema<Comment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    anchor: Schema.optional(Schema.String),
    assigneeEmailAddress: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    quotedFileContent: Schema.optional(
      Schema.Struct({
        value: Schema.optional(Schema.String),
        mimeType: Schema.optional(Schema.String),
      }),
    ),
    resolved: Schema.optional(Schema.Boolean),
    content: Schema.optional(Schema.String),
    mentionedEmailAddresses: Schema.optional(Schema.Array(Schema.String)),
    modifiedTime: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    replies: Schema.optional(Schema.Array(Reply)),
    htmlContent: Schema.optional(Schema.String),
    author: Schema.optional(User),
    createdTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Comment" });

export interface CommentList {
  /** The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
  comments?: ReadonlyArray<Comment>;
  /** Identifies what kind of resource this is. Value: the fixed string `"drive#commentList"`. */
  kind?: string;
  /** The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. */
  nextPageToken?: string;
}

export const CommentList: Schema.Schema<CommentList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    comments: Schema.optional(Schema.Array(Comment)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommentList" });

export interface DriveList {
  /** The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"drive#driveList"`. */
  kind?: string;
  /** The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
  drives?: ReadonlyArray<Drive>;
}

export const DriveList: Schema.Schema<DriveList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    drives: Schema.optional(Schema.Array(Drive)),
  }).annotate({ identifier: "DriveList" });

export interface ApproveApprovalRequest {
  /** Optional. A message to accompany the reviewer response on the approval. This message is included in notifications for the action and in the approval activity log. */
  message?: string;
}

export const ApproveApprovalRequest: Schema.Schema<ApproveApprovalRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApproveApprovalRequest" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface GeneratedIds {
  /** The IDs generated for the requesting user in the specified space. */
  ids?: ReadonlyArray<string>;
  /** Identifies what kind of resource this is. Value: the fixed string `"drive#generatedIds"`. */
  kind?: string;
  /** The type of file that can be created with these IDs. */
  space?: string;
}

export const GeneratedIds: Schema.Schema<GeneratedIds> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ids: Schema.optional(Schema.Array(Schema.String)),
    kind: Schema.optional(Schema.String),
    space: Schema.optional(Schema.String),
  }).annotate({ identifier: "GeneratedIds" });

export interface Revision {
  /** Output only. The last user to modify this revision. This field is only populated when the last modification was performed by a signed-in user. */
  lastModifyingUser?: User;
  /** Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files. */
  publishAuto?: boolean;
  /** Whether this revision is published. This is only applicable to Docs Editors files. */
  published?: boolean;
  /** The last time the revision was modified (RFC 3339 date-time). */
  modifiedTime?: string;
  /** Output only. The MIME type of the revision. */
  mimeType?: string;
  /** Output only. A link to the published revision. This is only populated for Docs Editors files. */
  publishedLink?: string;
  /** Output only. Links for exporting Docs Editors files to specific formats. */
  exportLinks?: Record<string, string>;
  /** Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file. This field is only applicable to files with binary content in Drive. */
  keepForever?: boolean;
  /** Output only. The original filename used to create this revision. This is only applicable to files with binary content in Drive. */
  originalFilename?: string;
  /** Whether this revision is published outside the domain. This is only applicable to Docs Editors files. */
  publishedOutsideDomain?: boolean;
  /** Output only. The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive. */
  md5Checksum?: string;
  /** Output only. The size of the revision's content in bytes. This is only applicable to files with binary content in Drive. */
  size?: string;
  /** Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#revision"`. */
  kind?: string;
  /** Output only. The ID of the revision. */
  id?: string;
}

export const Revision: Schema.Schema<Revision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastModifyingUser: Schema.optional(User),
    publishAuto: Schema.optional(Schema.Boolean),
    published: Schema.optional(Schema.Boolean),
    modifiedTime: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
    publishedLink: Schema.optional(Schema.String),
    exportLinks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    keepForever: Schema.optional(Schema.Boolean),
    originalFilename: Schema.optional(Schema.String),
    publishedOutsideDomain: Schema.optional(Schema.Boolean),
    md5Checksum: Schema.optional(Schema.String),
    size: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "Revision" });

export interface ReviewerResponse {
  /** This is always drive#reviewerResponse. */
  kind?: string;
  /** The user that's responsible for this response. */
  reviewer?: User;
  /** A reviewer’s response for the approval. */
  response?:
    | "RESPONSE_UNSPECIFIED"
    | "NO_RESPONSE"
    | "APPROVED"
    | "DECLINED"
    | (string & {});
}

export const ReviewerResponse: Schema.Schema<ReviewerResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    reviewer: Schema.optional(User),
    response: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReviewerResponse" });

export interface Approval {
  /** Output only. The most recent time the approval was modified. */
  modifyTime?: string;
  /** This is always drive#approval. */
  kind?: string;
  /** Output only. The time the approval was created. */
  createTime?: string;
  /** Output only. The time the approval was completed. */
  completeTime?: string;
  /** The time that the approval is due. */
  dueTime?: string;
  /** Output only. The status of the approval at the time this resource was requested. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "IN_PROGRESS"
    | "APPROVED"
    | "CANCELLED"
    | "DECLINED"
    | (string & {});
  /** Target file id of the approval. */
  targetFileId?: string;
  /** The approval ID. */
  approvalId?: string;
  /** The responses made on the approval by reviewers. */
  reviewerResponses?: ReadonlyArray<ReviewerResponse>;
  /** The user that requested the approval. */
  initiator?: User;
}

export const Approval: Schema.Schema<Approval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modifyTime: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    completeTime: Schema.optional(Schema.String),
    dueTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    targetFileId: Schema.optional(Schema.String),
    approvalId: Schema.optional(Schema.String),
    reviewerResponses: Schema.optional(Schema.Array(ReviewerResponse)),
    initiator: Schema.optional(User),
  }).annotate({ identifier: "Approval" });

export interface RevisionList {
  /** The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
  revisions?: ReadonlyArray<Revision>;
  /** The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"drive#revisionList"`. */
  kind?: string;
}

export const RevisionList: Schema.Schema<RevisionList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revisions: Schema.optional(Schema.Array(Revision)),
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "RevisionList" });

export interface LabelFieldModification {
  /** Unsets the values for this field. */
  unsetValues?: boolean;
  /** The ID of the field to be modified. */
  fieldId?: string;
  /** This is always `"drive#labelFieldModification"`. */
  kind?: string;
  /** Replaces a `user` field with these new values. The values must be a valid email addresses. */
  setUserValues?: ReadonlyArray<string>;
  /** Replaces a `selection` field with these new values. */
  setSelectionValues?: ReadonlyArray<string>;
  /** Replaces the value of an `integer` field with these new values. */
  setIntegerValues?: ReadonlyArray<string>;
  /** Replaces the value of a dateString Field with these new values. The string must be in the RFC 3339 full-date format: YYYY-MM-DD. */
  setDateValues?: ReadonlyArray<string>;
  /** Sets the value of a `text` field. */
  setTextValues?: ReadonlyArray<string>;
}

export const LabelFieldModification: Schema.Schema<LabelFieldModification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unsetValues: Schema.optional(Schema.Boolean),
    fieldId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    setUserValues: Schema.optional(Schema.Array(Schema.String)),
    setSelectionValues: Schema.optional(Schema.Array(Schema.String)),
    setIntegerValues: Schema.optional(Schema.Array(Schema.String)),
    setDateValues: Schema.optional(Schema.Array(Schema.String)),
    setTextValues: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LabelFieldModification" });

export interface StartPageToken {
  /** The starting page token for listing future changes. The page token doesn't expire. */
  startPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"drive#startPageToken"`. */
  kind?: string;
}

export const StartPageToken: Schema.Schema<StartPageToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "StartPageToken" });

export interface CancelApprovalRequest {
  /** Optional. A message to accompany the cancellation of the approval. This message is included in notifications for the action and in the approval activity log. */
  message?: string;
}

export const CancelApprovalRequest: Schema.Schema<CancelApprovalRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "CancelApprovalRequest" });

export interface ResolveAccessProposalRequest {
  /** Optional. Indicates the view for this access proposal. This should only be set when the proposal belongs to a view. Only `published` is supported. */
  view?: string;
  /** Optional. Whether to send an email to the requester when the access proposal is denied or accepted. */
  sendNotification?: boolean;
  /** Optional. The roles that the approver has allowed, if any. For more information, see [Roles and permissions](https://developers.google.com/workspace/drive/api/guides/ref-roles). Note: This field is required for the `ACCEPT` action. */
  role?: ReadonlyArray<string>;
  /** Required. The action to take on the access proposal. */
  action?: "ACTION_UNSPECIFIED" | "ACCEPT" | "DENY" | (string & {});
}

export const ResolveAccessProposalRequest: Schema.Schema<ResolveAccessProposalRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String),
    sendNotification: Schema.optional(Schema.Boolean),
    role: Schema.optional(Schema.Array(Schema.String)),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResolveAccessProposalRequest" });

export interface LabelModification {
  /** The ID of the label to modify. */
  labelId?: string;
  /** If true, the label will be removed from the file. */
  removeLabel?: boolean;
  /** This is always `"drive#labelModification"`. */
  kind?: string;
  /** The list of modifications to this label's fields. */
  fieldModifications?: ReadonlyArray<LabelFieldModification>;
}

export const LabelModification: Schema.Schema<LabelModification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelId: Schema.optional(Schema.String),
    removeLabel: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    fieldModifications: Schema.optional(Schema.Array(LabelFieldModification)),
  }).annotate({ identifier: "LabelModification" });

export interface CommentApprovalRequest {
  /** Required. A message to comment on the approval. This message is included in notifications for the action and in the approval activity log. */
  message?: string;
}

export const CommentApprovalRequest: Schema.Schema<CommentApprovalRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommentApprovalRequest" });

export interface ModifyLabelsResponse {
  /** The list of labels which were added or updated by the request. */
  modifiedLabels?: ReadonlyArray<Label>;
  /** This is always `"drive#modifyLabelsResponse"`. */
  kind?: string;
}

export const ModifyLabelsResponse: Schema.Schema<ModifyLabelsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modifiedLabels: Schema.optional(Schema.Array(Label)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ModifyLabelsResponse" });

export interface StartApprovalRequest {
  /** Optional. The time that the approval is due. */
  dueTime?: string;
  /** Optional. Whether to lock the file when starting the approval. */
  lockFile?: boolean;
  /** Optional. A message to send to reviewers when notifying them of the approval request. */
  message?: string;
  /** Required. The emails of the users who are set to review the approval. */
  reviewerEmails?: ReadonlyArray<string>;
}

export const StartApprovalRequest: Schema.Schema<StartApprovalRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dueTime: Schema.optional(Schema.String),
    lockFile: Schema.optional(Schema.Boolean),
    message: Schema.optional(Schema.String),
    reviewerEmails: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "StartApprovalRequest" });

export interface Change {
  /** The updated state of the file. Present if the type is file and the file has not been removed from this list of changes. */
  file?: File;
  /** The type of the change. Possible values are `file` and `drive`. */
  changeType?: string;
  /** The ID of the shared drive associated with this change. */
  driveId?: string;
  /** Deprecated: Use `changeType` instead. */
  type?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"drive#change"`. */
  kind?: string;
  /** Deprecated: Use `drive` instead. */
  teamDrive?: TeamDrive;
  /** The ID of the file which has changed. */
  fileId?: string;
  /** Deprecated: Use `driveId` instead. */
  teamDriveId?: string;
  /** Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access. */
  removed?: boolean;
  /** The time of this change (RFC 3339 date-time). */
  time?: string;
  /** The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted. */
  drive?: Drive;
}

export const Change: Schema.Schema<Change> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    file: Schema.optional(File),
    changeType: Schema.optional(Schema.String),
    driveId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    teamDrive: Schema.optional(TeamDrive),
    fileId: Schema.optional(Schema.String),
    teamDriveId: Schema.optional(Schema.String),
    removed: Schema.optional(Schema.Boolean),
    time: Schema.optional(Schema.String),
    drive: Schema.optional(Drive),
  }).annotate({ identifier: "Change" });

export interface DeclineApprovalRequest {
  /** Optional. A message to accompany the reviewer response on the approval. This message is included in notifications for the action and in the approval activity log. */
  message?: string;
}

export const DeclineApprovalRequest: Schema.Schema<DeclineApprovalRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeclineApprovalRequest" });

export interface ChangeList {
  /** The starting page token for future changes. This will be present only if the end of the current changes list has been reached. The page token doesn't expire. */
  newStartPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"drive#changeList"`. */
  kind?: string;
  /** The page token for the next page of changes. This will be absent if the end of the changes list has been reached. The page token doesn't expire. */
  nextPageToken?: string;
  /** The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
  changes?: ReadonlyArray<Change>;
}

export const ChangeList: Schema.Schema<ChangeList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newStartPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    changes: Schema.optional(Schema.Array(Change)),
  }).annotate({ identifier: "ChangeList" });

export interface PermissionList {
  /** The list of permissions. If `nextPageToken` is populated, then this list may be incomplete and an additional page of results should be fetched. */
  permissions?: ReadonlyArray<Permission>;
  /** The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"drive#permissionList"`. */
  kind?: string;
}

export const PermissionList: Schema.Schema<PermissionList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Permission)),
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "PermissionList" });

export interface Operation {
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface GenerateCseTokenResponse {
  /** The current Key ACL Service (KACLS) ID associated with the JWT. */
  currentKaclsId?: string;
  /** Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#generateCseTokenResponse"`. */
  kind?: string;
  /** The signed JSON Web Token (JWT) for the file. */
  jwt?: string;
  /** The fileId for which the JWT was generated. */
  fileId?: string;
  /** Name of the KACLs that the returned KACLs ID points to. */
  currentKaclsName?: string;
}

export const GenerateCseTokenResponse: Schema.Schema<GenerateCseTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentKaclsId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    jwt: Schema.optional(Schema.String),
    fileId: Schema.optional(Schema.String),
    currentKaclsName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateCseTokenResponse" });

export interface ModifyLabelsRequest {
  /** This is always `"drive#modifyLabelsRequest"`. */
  kind?: string;
  /** The list of modifications to apply to the labels on the file. */
  labelModifications?: ReadonlyArray<LabelModification>;
}

export const ModifyLabelsRequest: Schema.Schema<ModifyLabelsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    labelModifications: Schema.optional(Schema.Array(LabelModification)),
  }).annotate({ identifier: "ModifyLabelsRequest" });

export interface ApprovalList {
  /** The list of approvals. If `nextPageToken` is populated, then this list may be incomplete and an additional page of results should be fetched. */
  items?: ReadonlyArray<Approval>;
  /** This is always drive#approvalList */
  kind?: string;
  /** The page token for the next page of approvals. This is absent if the end of the approvals list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
  nextPageToken?: string;
}

export const ApprovalList: Schema.Schema<ApprovalList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Approval)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApprovalList" });

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

export interface CreateDrivesRequest {
  /** Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned. */
  requestId: string;
  /** Request body */
  body?: Drive;
}

export const CreateDrivesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  requestId: Schema.String.pipe(T.HttpQuery("requestId")),
  body: Schema.optional(Drive).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "drives", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CreateDrivesRequest>;

export type CreateDrivesResponse = Drive;
export const CreateDrivesResponse = /*@__PURE__*/ /*#__PURE__*/ Drive;

export type CreateDrivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a shared drive. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives). */
export const createDrives: API.OperationMethod<
  CreateDrivesRequest,
  CreateDrivesResponse,
  CreateDrivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateDrivesRequest,
  output: CreateDrivesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateDrivesRequest {
  /** The ID of the shared drive. */
  driveId: string;
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. */
  useDomainAdminAccess?: boolean;
  /** Request body */
  body?: Drive;
}

export const UpdateDrivesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  driveId: Schema.String.pipe(T.HttpPath("driveId")),
  useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useDomainAdminAccess"),
  ),
  body: Schema.optional(Drive).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "PATCH", path: "drives/{driveId}", hasBody: true }),
  svc,
) as unknown as Schema.Schema<UpdateDrivesRequest>;

export type UpdateDrivesResponse = Drive;
export const UpdateDrivesResponse = /*@__PURE__*/ /*#__PURE__*/ Drive;

export type UpdateDrivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the metadata for a shared drive. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives). */
export const updateDrives: API.OperationMethod<
  UpdateDrivesRequest,
  UpdateDrivesResponse,
  UpdateDrivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateDrivesRequest,
  output: UpdateDrivesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteDrivesRequest {
  /** Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to `true`. */
  allowItemDeletion?: boolean;
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. */
  useDomainAdminAccess?: boolean;
  /** The ID of the shared drive. */
  driveId: string;
}

export const DeleteDrivesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allowItemDeletion: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("allowItemDeletion"),
  ),
  useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useDomainAdminAccess"),
  ),
  driveId: Schema.String.pipe(T.HttpPath("driveId")),
}).pipe(
  T.Http({ method: "DELETE", path: "drives/{driveId}" }),
  svc,
) as unknown as Schema.Schema<DeleteDrivesRequest>;

export interface DeleteDrivesResponse {}
export const DeleteDrivesResponse: Schema.Schema<DeleteDrivesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteDrivesResponse>;

export type DeleteDrivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives). */
export const deleteDrives: API.OperationMethod<
  DeleteDrivesRequest,
  DeleteDrivesResponse,
  DeleteDrivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDrivesRequest,
  output: DeleteDrivesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetDrivesRequest {
  /** The ID of the shared drive. */
  driveId: string;
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. */
  useDomainAdminAccess?: boolean;
}

export const GetDrivesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  driveId: Schema.String.pipe(T.HttpPath("driveId")),
  useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useDomainAdminAccess"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "drives/{driveId}" }),
  svc,
) as unknown as Schema.Schema<GetDrivesRequest>;

export type GetDrivesResponse = Drive;
export const GetDrivesResponse = /*@__PURE__*/ /*#__PURE__*/ Drive;

export type GetDrivesError = DefaultErrors | NotFound | Forbidden;

/** Gets a shared drive's metadata by ID. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives). */
export const getDrives: API.OperationMethod<
  GetDrivesRequest,
  GetDrivesResponse,
  GetDrivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDrivesRequest,
  output: GetDrivesResponse,
  errors: [NotFound, Forbidden],
}));

export interface HideDrivesRequest {
  /** The ID of the shared drive. */
  driveId: string;
}

export const HideDrivesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  driveId: Schema.String.pipe(T.HttpPath("driveId")),
}).pipe(
  T.Http({ method: "POST", path: "drives/{driveId}/hide", hasBody: true }),
  svc,
) as unknown as Schema.Schema<HideDrivesRequest>;

export type HideDrivesResponse = Drive;
export const HideDrivesResponse = /*@__PURE__*/ /*#__PURE__*/ Drive;

export type HideDrivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Hides a shared drive from the default view. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives). */
export const hideDrives: API.OperationMethod<
  HideDrivesRequest,
  HideDrivesResponse,
  HideDrivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: HideDrivesRequest,
  output: HideDrivesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnhideDrivesRequest {
  /** The ID of the shared drive. */
  driveId: string;
}

export const UnhideDrivesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  driveId: Schema.String.pipe(T.HttpPath("driveId")),
}).pipe(
  T.Http({ method: "POST", path: "drives/{driveId}/unhide", hasBody: true }),
  svc,
) as unknown as Schema.Schema<UnhideDrivesRequest>;

export type UnhideDrivesResponse = Drive;
export const UnhideDrivesResponse = /*@__PURE__*/ /*#__PURE__*/ Drive;

export type UnhideDrivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restores a shared drive to the default view. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives). */
export const unhideDrives: API.OperationMethod<
  UnhideDrivesRequest,
  UnhideDrivesResponse,
  UnhideDrivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnhideDrivesRequest,
  output: UnhideDrivesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDrivesRequest {
  /** Maximum number of shared drives to return per page. */
  pageSize?: number;
  /** Page token for shared drives. */
  pageToken?: string;
  /** Query string for searching shared drives. */
  q?: string;
  /** Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned. */
  useDomainAdminAccess?: boolean;
}

export const ListDrivesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  q: Schema.optional(Schema.String).pipe(T.HttpQuery("q")),
  useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useDomainAdminAccess"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "drives" }),
  svc,
) as unknown as Schema.Schema<ListDrivesRequest>;

export type ListDrivesResponse = DriveList;
export const ListDrivesResponse = /*@__PURE__*/ /*#__PURE__*/ DriveList;

export type ListDrivesError = DefaultErrors | NotFound | Forbidden;

/** Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](https://developers.google.com/workspace/drive/api/guides/search-shareddrives) guide. */
export const listDrives: API.PaginatedOperationMethod<
  ListDrivesRequest,
  ListDrivesResponse,
  ListDrivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDrivesRequest,
  output: ListDrivesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOperationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "operations/{name}" }),
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

export interface DeleteTeamdrivesRequest {
  /** The ID of the Team Drive */
  teamDriveId: string;
}

export const DeleteTeamdrivesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    teamDriveId: Schema.String.pipe(T.HttpPath("teamDriveId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "teamdrives/{teamDriveId}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteTeamdrivesRequest>;

export interface DeleteTeamdrivesResponse {}
export const DeleteTeamdrivesResponse: Schema.Schema<DeleteTeamdrivesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteTeamdrivesResponse>;

export type DeleteTeamdrivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deprecated: Use `drives.delete` instead. */
export const deleteTeamdrives: API.OperationMethod<
  DeleteTeamdrivesRequest,
  DeleteTeamdrivesResponse,
  DeleteTeamdrivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteTeamdrivesRequest,
  output: DeleteTeamdrivesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateTeamdrivesRequest {
  /** Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned. */
  requestId: string;
  /** Request body */
  body?: TeamDrive;
}

export const CreateTeamdrivesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.String.pipe(T.HttpQuery("requestId")),
    body: Schema.optional(TeamDrive).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "teamdrives", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateTeamdrivesRequest>;

export type CreateTeamdrivesResponse = TeamDrive;
export const CreateTeamdrivesResponse = /*@__PURE__*/ /*#__PURE__*/ TeamDrive;

export type CreateTeamdrivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deprecated: Use `drives.create` instead. */
export const createTeamdrives: API.OperationMethod<
  CreateTeamdrivesRequest,
  CreateTeamdrivesResponse,
  CreateTeamdrivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateTeamdrivesRequest,
  output: CreateTeamdrivesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateTeamdrivesRequest {
  /** The ID of the Team Drive */
  teamDriveId: string;
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs. */
  useDomainAdminAccess?: boolean;
  /** Request body */
  body?: TeamDrive;
}

export const UpdateTeamdrivesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    teamDriveId: Schema.String.pipe(T.HttpPath("teamDriveId")),
    useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useDomainAdminAccess"),
    ),
    body: Schema.optional(TeamDrive).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "teamdrives/{teamDriveId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateTeamdrivesRequest>;

export type UpdateTeamdrivesResponse = TeamDrive;
export const UpdateTeamdrivesResponse = /*@__PURE__*/ /*#__PURE__*/ TeamDrive;

export type UpdateTeamdrivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deprecated: Use `drives.update` instead. */
export const updateTeamdrives: API.OperationMethod<
  UpdateTeamdrivesRequest,
  UpdateTeamdrivesResponse,
  UpdateTeamdrivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateTeamdrivesRequest,
  output: UpdateTeamdrivesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListTeamdrivesRequest {
  /** Maximum number of Team Drives to return. */
  pageSize?: number;
  /** Page token for Team Drives. */
  pageToken?: string;
  /** Query string for searching Team Drives. */
  q?: string;
  /** Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned. */
  useDomainAdminAccess?: boolean;
}

export const ListTeamdrivesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  q: Schema.optional(Schema.String).pipe(T.HttpQuery("q")),
  useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useDomainAdminAccess"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "teamdrives" }),
  svc,
) as unknown as Schema.Schema<ListTeamdrivesRequest>;

export type ListTeamdrivesResponse = TeamDriveList;
export const ListTeamdrivesResponse = /*@__PURE__*/ /*#__PURE__*/ TeamDriveList;

export type ListTeamdrivesError = DefaultErrors | NotFound | Forbidden;

/** Deprecated: Use `drives.list` instead. */
export const listTeamdrives: API.PaginatedOperationMethod<
  ListTeamdrivesRequest,
  ListTeamdrivesResponse,
  ListTeamdrivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListTeamdrivesRequest,
  output: ListTeamdrivesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetTeamdrivesRequest {
  /** The ID of the Team Drive */
  teamDriveId: string;
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs. */
  useDomainAdminAccess?: boolean;
}

export const GetTeamdrivesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  teamDriveId: Schema.String.pipe(T.HttpPath("teamDriveId")),
  useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useDomainAdminAccess"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "teamdrives/{teamDriveId}" }),
  svc,
) as unknown as Schema.Schema<GetTeamdrivesRequest>;

export type GetTeamdrivesResponse = TeamDrive;
export const GetTeamdrivesResponse = /*@__PURE__*/ /*#__PURE__*/ TeamDrive;

export type GetTeamdrivesError = DefaultErrors | NotFound | Forbidden;

/** Deprecated: Use `drives.get` instead. */
export const getTeamdrives: API.OperationMethod<
  GetTeamdrivesRequest,
  GetTeamdrivesResponse,
  GetTeamdrivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTeamdrivesRequest,
  output: GetTeamdrivesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetRepliesRequest {
  /** The ID of the file. */
  fileId: string;
  /** The ID of the comment. */
  commentId: string;
  /** The ID of the reply. */
  replyId: string;
  /** Whether to return deleted replies. Deleted replies don't include their original content. */
  includeDeleted?: boolean;
}

export const GetRepliesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
  replyId: Schema.String.pipe(T.HttpPath("replyId")),
  includeDeleted: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeDeleted"),
  ),
}).pipe(
  T.Http({
    method: "GET",
    path: "files/{fileId}/comments/{commentId}/replies/{replyId}",
  }),
  svc,
) as unknown as Schema.Schema<GetRepliesRequest>;

export type GetRepliesResponse = Reply;
export const GetRepliesResponse = /*@__PURE__*/ /*#__PURE__*/ Reply;

export type GetRepliesError = DefaultErrors | NotFound | Forbidden;

/** Gets a reply by ID. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). */
export const getReplies: API.OperationMethod<
  GetRepliesRequest,
  GetRepliesResponse,
  GetRepliesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRepliesRequest,
  output: GetRepliesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListRepliesRequest {
  /** The maximum number of replies to return per page. */
  pageSize?: number;
  /** The ID of the comment. */
  commentId: string;
  /** Whether to include deleted replies. Deleted replies don't include their original content. */
  includeDeleted?: boolean;
  /** The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. */
  pageToken?: string;
  /** The ID of the file. */
  fileId: string;
}

export const ListRepliesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
  includeDeleted: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeDeleted"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "files/{fileId}/comments/{commentId}/replies",
  }),
  svc,
) as unknown as Schema.Schema<ListRepliesRequest>;

export type ListRepliesResponse = ReplyList;
export const ListRepliesResponse = /*@__PURE__*/ /*#__PURE__*/ ReplyList;

export type ListRepliesError = DefaultErrors | NotFound | Forbidden;

/** Lists a comment's replies. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). */
export const listReplies: API.PaginatedOperationMethod<
  ListRepliesRequest,
  ListRepliesResponse,
  ListRepliesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRepliesRequest,
  output: ListRepliesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateRepliesRequest {
  /** The ID of the file. */
  fileId: string;
  /** The ID of the comment. */
  commentId: string;
  /** Request body */
  body?: Reply;
}

export const CreateRepliesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
  body: Schema.optional(Reply).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "files/{fileId}/comments/{commentId}/replies",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<CreateRepliesRequest>;

export type CreateRepliesResponse = Reply;
export const CreateRepliesResponse = /*@__PURE__*/ /*#__PURE__*/ Reply;

export type CreateRepliesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a reply to a comment. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). */
export const createReplies: API.OperationMethod<
  CreateRepliesRequest,
  CreateRepliesResponse,
  CreateRepliesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateRepliesRequest,
  output: CreateRepliesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateRepliesRequest {
  /** The ID of the file. */
  fileId: string;
  /** The ID of the comment. */
  commentId: string;
  /** The ID of the reply. */
  replyId: string;
  /** Request body */
  body?: Reply;
}

export const UpdateRepliesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
  replyId: Schema.String.pipe(T.HttpPath("replyId")),
  body: Schema.optional(Reply).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "files/{fileId}/comments/{commentId}/replies/{replyId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateRepliesRequest>;

export type UpdateRepliesResponse = Reply;
export const UpdateRepliesResponse = /*@__PURE__*/ /*#__PURE__*/ Reply;

export type UpdateRepliesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a reply with patch semantics. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). */
export const updateReplies: API.OperationMethod<
  UpdateRepliesRequest,
  UpdateRepliesResponse,
  UpdateRepliesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRepliesRequest,
  output: UpdateRepliesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteRepliesRequest {
  /** The ID of the comment. */
  commentId: string;
  /** The ID of the reply. */
  replyId: string;
  /** The ID of the file. */
  fileId: string;
}

export const DeleteRepliesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
  replyId: Schema.String.pipe(T.HttpPath("replyId")),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "files/{fileId}/comments/{commentId}/replies/{replyId}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteRepliesRequest>;

export interface DeleteRepliesResponse {}
export const DeleteRepliesResponse: Schema.Schema<DeleteRepliesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteRepliesResponse>;

export type DeleteRepliesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a reply. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). */
export const deleteReplies: API.OperationMethod<
  DeleteRepliesRequest,
  DeleteRepliesResponse,
  DeleteRepliesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRepliesRequest,
  output: DeleteRepliesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPermissionsRequest {
  /** The ID of the file. */
  fileId: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Issue the request as a domain administrator. If set to `true`, and if the following additional conditions are met, the requester is granted access: 1. The file ID parameter refers to a shared drive. 2. The requester is an administrator of the domain to which the shared drive belongs. For more information, see [Manage shared drives as domain administrators](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives#manage-administrators). */
  useDomainAdminAccess?: boolean;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** The ID of the permission. */
  permissionId: string;
}

export const GetPermissionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useDomainAdminAccess"),
  ),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  permissionId: Schema.String.pipe(T.HttpPath("permissionId")),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/permissions/{permissionId}" }),
  svc,
) as unknown as Schema.Schema<GetPermissionsRequest>;

export type GetPermissionsResponse = Permission;
export const GetPermissionsResponse = /*@__PURE__*/ /*#__PURE__*/ Permission;

export type GetPermissionsError = DefaultErrors | NotFound | Forbidden;

/** Gets a permission by ID. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). */
export const getPermissions: API.OperationMethod<
  GetPermissionsRequest,
  GetPermissionsResponse,
  GetPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPermissionsRequest,
  output: GetPermissionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListPermissionsRequest {
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. */
  pageToken?: string;
  /** The ID of the file or shared drive. */
  fileId: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Issue the request as a domain administrator. If set to `true`, and if the following additional conditions are met, the requester is granted access: 1. The file ID parameter refers to a shared drive. 2. The requester is an administrator of the domain to which the shared drive belongs. For more information, see [Manage shared drives as domain administrators](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives#manage-administrators). */
  useDomainAdminAccess?: boolean;
  /** The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned. */
  pageSize?: number;
}

export const ListPermissionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsTeamDrives"),
    ),
    includePermissionsForView: Schema.optional(Schema.String).pipe(
      T.HttpQuery("includePermissionsForView"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsAllDrives"),
    ),
    useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useDomainAdminAccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  },
).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/permissions" }),
  svc,
) as unknown as Schema.Schema<ListPermissionsRequest>;

export type ListPermissionsResponse = PermissionList;
export const ListPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PermissionList;

export type ListPermissionsError = DefaultErrors | NotFound | Forbidden;

/** Lists a file's or shared drive's permissions. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). */
export const listPermissions: API.PaginatedOperationMethod<
  ListPermissionsRequest,
  ListPermissionsResponse,
  ListPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPermissionsRequest,
  output: ListPermissionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreatePermissionsRequest {
  /** This parameter only takes effect if the item isn't in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item is moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents aren't changed. */
  moveToNewOwnersRoot?: boolean;
  /** Whether to send a notification email when sharing to users or groups. This defaults to `true` for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers. */
  sendNotificationEmail?: boolean;
  /** Issue the request as a domain administrator. If set to `true`, and if the following additional conditions are met, the requester is granted access: 1. The file ID parameter refers to a shared drive. 2. The requester is an administrator of the domain to which the shared drive belongs. For more information, see [Manage shared drives as domain administrators](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives#manage-administrators). */
  useDomainAdminAccess?: boolean;
  /** Deprecated: See `moveToNewOwnersRoot` for details. */
  enforceSingleParent?: boolean;
  /** Deprecated: All requests use the expansive access rules. */
  enforceExpansiveAccess?: boolean;
  /** Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect. For more information, see [Transfer file ownership](https://developers.google.com/workspace/drive/api/guides/transfer-file). */
  transferOwnership?: boolean;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** A plain text custom message to include in the notification email. */
  emailMessage?: string;
  /** The ID of the file or shared drive. */
  fileId: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Request body */
  body?: Permission;
}

export const CreatePermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    moveToNewOwnersRoot: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("moveToNewOwnersRoot"),
    ),
    sendNotificationEmail: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("sendNotificationEmail"),
    ),
    useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useDomainAdminAccess"),
    ),
    enforceSingleParent: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("enforceSingleParent"),
    ),
    enforceExpansiveAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("enforceExpansiveAccess"),
    ),
    transferOwnership: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("transferOwnership"),
    ),
    supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsTeamDrives"),
    ),
    emailMessage: Schema.optional(Schema.String).pipe(
      T.HttpQuery("emailMessage"),
    ),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsAllDrives"),
    ),
    body: Schema.optional(Permission).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "files/{fileId}/permissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreatePermissionsRequest>;

export type CreatePermissionsResponse = Permission;
export const CreatePermissionsResponse = /*@__PURE__*/ /*#__PURE__*/ Permission;

export type CreatePermissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a permission for a file or shared drive. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied. */
export const createPermissions: API.OperationMethod<
  CreatePermissionsRequest,
  CreatePermissionsResponse,
  CreatePermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePermissionsRequest,
  output: CreatePermissionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdatePermissionsRequest {
  /** The ID of the permission. */
  permissionId: string;
  /** Whether to remove the expiration date. */
  removeExpiration?: boolean;
  /** Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect. For more information, see [Transfer file ownership](https://developers.google.com//workspace/drive/api/guides/transfer-file). */
  transferOwnership?: boolean;
  /** Deprecated: All requests use the expansive access rules. */
  enforceExpansiveAccess?: boolean;
  /** The ID of the file or shared drive. */
  fileId: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Issue the request as a domain administrator. If set to `true`, and if the following additional conditions are met, the requester is granted access: 1. The file ID parameter refers to a shared drive. 2. The requester is an administrator of the domain to which the shared drive belongs. For more information, see [Manage shared drives as domain administrators](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives#manage-administrators). */
  useDomainAdminAccess?: boolean;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Request body */
  body?: Permission;
}

export const UpdatePermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissionId: Schema.String.pipe(T.HttpPath("permissionId")),
    removeExpiration: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("removeExpiration"),
    ),
    transferOwnership: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("transferOwnership"),
    ),
    enforceExpansiveAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("enforceExpansiveAccess"),
    ),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsAllDrives"),
    ),
    useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useDomainAdminAccess"),
    ),
    supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsTeamDrives"),
    ),
    body: Schema.optional(Permission).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "files/{fileId}/permissions/{permissionId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdatePermissionsRequest>;

export type UpdatePermissionsResponse = Permission;
export const UpdatePermissionsResponse = /*@__PURE__*/ /*#__PURE__*/ Permission;

export type UpdatePermissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a permission with patch semantics. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied. */
export const updatePermissions: API.OperationMethod<
  UpdatePermissionsRequest,
  UpdatePermissionsResponse,
  UpdatePermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePermissionsRequest,
  output: UpdatePermissionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeletePermissionsRequest {
  /** Deprecated: All requests use the expansive access rules. */
  enforceExpansiveAccess?: boolean;
  /** The ID of the permission. */
  permissionId: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** The ID of the file or shared drive. */
  fileId: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Issue the request as a domain administrator. If set to `true`, and if the following additional conditions are met, the requester is granted access: 1. The file ID parameter refers to a shared drive. 2. The requester is an administrator of the domain to which the shared drive belongs. For more information, see [Manage shared drives as domain administrators](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives#manage-administrators). */
  useDomainAdminAccess?: boolean;
}

export const DeletePermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enforceExpansiveAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("enforceExpansiveAccess"),
    ),
    permissionId: Schema.String.pipe(T.HttpPath("permissionId")),
    supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsTeamDrives"),
    ),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsAllDrives"),
    ),
    useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useDomainAdminAccess"),
    ),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "files/{fileId}/permissions/{permissionId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeletePermissionsRequest>;

export interface DeletePermissionsResponse {}
export const DeletePermissionsResponse: Schema.Schema<DeletePermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeletePermissionsResponse>;

export type DeletePermissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a permission. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied. */
export const deletePermissions: API.OperationMethod<
  DeletePermissionsRequest,
  DeletePermissionsResponse,
  DeletePermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePermissionsRequest,
  output: DeletePermissionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAboutRequest {}

export const GetAboutRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "about" }),
  svc,
) as unknown as Schema.Schema<GetAboutRequest>;

export type GetAboutResponse = About;
export const GetAboutResponse = /*@__PURE__*/ /*#__PURE__*/ About;

export type GetAboutError = DefaultErrors | NotFound | Forbidden;

/** Gets information about the user, the user's Drive, and system capabilities. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter). */
export const getAbout: API.OperationMethod<
  GetAboutRequest,
  GetAboutResponse,
  GetAboutError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAboutRequest,
  output: GetAboutResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetStartPageTokenChangesRequest {
  /** The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned. */
  driveId?: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Deprecated: Use `driveId` instead. */
  teamDriveId?: string;
}

export const GetStartPageTokenChangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    driveId: Schema.optional(Schema.String).pipe(T.HttpQuery("driveId")),
    supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsTeamDrives"),
    ),
    supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsAllDrives"),
    ),
    teamDriveId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("teamDriveId"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "changes/startPageToken" }),
    svc,
  ) as unknown as Schema.Schema<GetStartPageTokenChangesRequest>;

export type GetStartPageTokenChangesResponse = StartPageToken;
export const GetStartPageTokenChangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ StartPageToken;

export type GetStartPageTokenChangesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the starting pageToken for listing future changes. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes). */
export const getStartPageTokenChanges: API.OperationMethod<
  GetStartPageTokenChangesRequest,
  GetStartPageTokenChangesResponse,
  GetStartPageTokenChangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetStartPageTokenChangesRequest,
  output: GetStartPageTokenChangesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListChangesRequest {
  /** The maximum number of changes to return per page. */
  pageSize?: number;
  /** The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method. */
  pageToken: string;
  /** Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive. */
  restrictToMyDrive?: boolean;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. */
  includeCorpusRemovals?: boolean;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. */
  driveId?: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Deprecated: Use `driveId` instead. */
  teamDriveId?: string;
  /** Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
  includePermissionsForView?: string;
  /** Deprecated: Use `includeItemsFromAllDrives` instead. */
  includeTeamDriveItems?: boolean;
  /** A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. */
  spaces?: string;
  /** Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. */
  includeRemoved?: boolean;
  /** Whether both My Drive and shared drive items should be included in results. */
  includeItemsFromAllDrives?: boolean;
}

export const ListChangesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.String.pipe(T.HttpQuery("pageToken")),
  restrictToMyDrive: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("restrictToMyDrive"),
  ),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
  includeCorpusRemovals: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeCorpusRemovals"),
  ),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  driveId: Schema.optional(Schema.String).pipe(T.HttpQuery("driveId")),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  teamDriveId: Schema.optional(Schema.String).pipe(T.HttpQuery("teamDriveId")),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  includeTeamDriveItems: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeTeamDriveItems"),
  ),
  spaces: Schema.optional(Schema.String).pipe(T.HttpQuery("spaces")),
  includeRemoved: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeRemoved"),
  ),
  includeItemsFromAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeItemsFromAllDrives"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "changes" }),
  svc,
) as unknown as Schema.Schema<ListChangesRequest>;

export type ListChangesResponse = ChangeList;
export const ListChangesResponse = /*@__PURE__*/ /*#__PURE__*/ ChangeList;

export type ListChangesError = DefaultErrors | NotFound | Forbidden;

/** Lists the changes for a user or shared drive. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes). */
export const listChanges: API.PaginatedOperationMethod<
  ListChangesRequest,
  ListChangesResponse,
  ListChangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListChangesRequest,
  output: ListChangesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface WatchChangesRequest {
  /** Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. */
  includeCorpusRemovals?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. */
  driveId?: string;
  /** The maximum number of changes to return per page. */
  pageSize?: number;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method. */
  pageToken: string;
  /** Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive. */
  restrictToMyDrive?: boolean;
  /** Deprecated: Use `includeItemsFromAllDrives` instead. */
  includeTeamDriveItems?: boolean;
  /** A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. */
  spaces?: string;
  /** Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. */
  includeRemoved?: boolean;
  /** Whether both My Drive and shared drive items should be included in results. */
  includeItemsFromAllDrives?: boolean;
  /** Deprecated: Use `driveId` instead. */
  teamDriveId?: string;
  /** Specifies which additional view's permissions to include in the response. Only 'published' is supported. */
  includePermissionsForView?: string;
  /** Request body */
  body?: Channel;
}

export const WatchChangesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includeCorpusRemovals: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeCorpusRemovals"),
  ),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  driveId: Schema.optional(Schema.String).pipe(T.HttpQuery("driveId")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
  pageToken: Schema.String.pipe(T.HttpQuery("pageToken")),
  restrictToMyDrive: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("restrictToMyDrive"),
  ),
  includeTeamDriveItems: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeTeamDriveItems"),
  ),
  spaces: Schema.optional(Schema.String).pipe(T.HttpQuery("spaces")),
  includeRemoved: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeRemoved"),
  ),
  includeItemsFromAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeItemsFromAllDrives"),
  ),
  teamDriveId: Schema.optional(Schema.String).pipe(T.HttpQuery("teamDriveId")),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  body: Schema.optional(Channel).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "changes/watch", hasBody: true }),
  svc,
) as unknown as Schema.Schema<WatchChangesRequest>;

export type WatchChangesResponse = Channel;
export const WatchChangesResponse = /*@__PURE__*/ /*#__PURE__*/ Channel;

export type WatchChangesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Subscribes to changes for a user. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push). */
export const watchChanges: API.OperationMethod<
  WatchChangesRequest,
  WatchChangesResponse,
  WatchChangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WatchChangesRequest,
  output: WatchChangesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportFilesRequest {
  /** Required. The MIME type of the format requested for this export. For a list of supported MIME types, see [Export MIME types for Google Workspace documents](/workspace/drive/api/guides/ref-export-formats). */
  mimeType: string;
  /** The ID of the file. */
  fileId: string;
}

export const ExportFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mimeType: Schema.String.pipe(T.HttpQuery("mimeType")),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/export" }),
  svc,
) as unknown as Schema.Schema<ExportFilesRequest>;

export interface ExportFilesResponse {}
export const ExportFilesResponse: Schema.Schema<ExportFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ExportFilesResponse>;

export type ExportFilesError = DefaultErrors | NotFound | Forbidden;

/** Exports a Google Workspace document to the requested MIME type and returns exported byte content. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads). Note that the exported content is limited to 10 MB. */
export const exportFiles: API.OperationMethod<
  ExportFilesRequest,
  ExportFilesResponse,
  ExportFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportFilesRequest,
  output: ExportFilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetFilesRequest {
  /** The ID of the file. */
  fileId: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides. */
  acknowledgeAbuse?: boolean;
}

export const GetFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  acknowledgeAbuse: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("acknowledgeAbuse"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}" }),
  svc,
) as unknown as Schema.Schema<GetFilesRequest>;

export type GetFilesResponse = File;
export const GetFilesResponse = /*@__PURE__*/ /*#__PURE__*/ File;

export type GetFilesError = DefaultErrors | NotFound | Forbidden;

/** Gets a file's metadata or content by ID. For more information, see [Search for files and folders](https://developers.google.com/workspace/drive/api/guides/search-files). If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/export) instead. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads). */
export const getFiles: API.OperationMethod<
  GetFilesRequest,
  GetFilesResponse,
  GetFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFilesRequest,
  output: GetFilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListLabelsFilesRequest {
  /** The ID for the file. */
  fileId: string;
  /** The maximum number of labels to return per page. When not set, defaults to 100. */
  maxResults?: number;
  /** The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. */
  pageToken?: string;
}

export const ListLabelsFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  },
).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/listLabels" }),
  svc,
) as unknown as Schema.Schema<ListLabelsFilesRequest>;

export type ListLabelsFilesResponse = LabelList;
export const ListLabelsFilesResponse = /*@__PURE__*/ /*#__PURE__*/ LabelList;

export type ListLabelsFilesError = DefaultErrors | NotFound | Forbidden;

/** Lists the labels on a file. For more information, see [List labels on a file](https://developers.google.com/workspace/drive/api/guides/list-labels). */
export const listLabelsFiles: API.PaginatedOperationMethod<
  ListLabelsFilesRequest,
  ListLabelsFilesResponse,
  ListLabelsFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLabelsFilesRequest,
  output: ListLabelsFilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListFilesRequest {
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** Deprecated: Use `driveId` instead. */
  teamDriveId?: string;
  /** Whether both My Drive and shared drive items should be included in results. */
  includeItemsFromAllDrives?: boolean;
  /** Specifies a collection of items (files or documents) to which the query applies. Supported items include: * `user` * `domain` * `drive` * `allDrives` Prefer `user` or `drive` to `allDrives` for efficiency. By default, corpora is set to `user`. However, this can change depending on the filter set through the `q` parameter. For more information, see [File organization](https://developers.google.com/workspace/drive/api/guides/about-files#file-organization). */
  corpora?: string;
  /** Deprecated: Use `includeItemsFromAllDrives` instead. */
  includeTeamDriveItems?: boolean;
  /** A comma-separated list of spaces to query within the corpora. Supported values are `drive` and `appDataFolder`. For more information, see [File organization](https://developers.google.com/workspace/drive/api/guides/about-files#file-organization). */
  spaces?: string;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. */
  pageToken?: string;
  /** The maximum number of files to return per page. Pages may be partial or empty even before reaching the end of the file list. If unspecified, at most 100 files are returned for shared drives, and the entire list of files for non-shared drives. The maximum value is 100; values above 100 are changed to 100. */
  pageSize?: number;
  /** A query for filtering the file results. For supported syntax, see [Search for files and folders](/workspace/drive/api/guides/search-files). */
  q?: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** ID of the shared drive to search. */
  driveId?: string;
  /** Deprecated: The source of files to list. Use `corpora` instead. */
  corpus?: "domain" | "user" | (string & {});
  /** A comma-separated list of sort keys. Valid keys are: * `createdTime`: When the file was created. Avoid using this key for queries on large item collections as it might result in timeouts or other issues. For time-related sorting on large item collections, use `modifiedTime desc` instead. * `folder`: The folder ID. This field is sorted using alphabetical ordering. * `modifiedByMeTime`: The last time the file was modified by the user. * `modifiedTime`: The last time the file was modified by anyone. * `name`: The name of the file. This field is sorted using alphabetical ordering, so 1, 12, 2, 22. * `name_natural`: The name of the file. This field is sorted using natural sort ordering, so 1, 2, 12, 22. * `quotaBytesUsed`: The number of storage quota bytes used by the file. * `recency`: The most recent timestamp from the file's date-time fields. * `sharedWithMeTime`: When the file was shared with the user, if applicable. * `starred`: Whether the user has starred the file. * `viewedByMeTime`: The last time the file was viewed by the user. Each key sorts ascending by default, but can be reversed with the `desc` modifier. Example usage: `?orderBy=folder,modifiedTime desc,name`. */
  orderBy?: string;
}

export const ListFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  teamDriveId: Schema.optional(Schema.String).pipe(T.HttpQuery("teamDriveId")),
  includeItemsFromAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeItemsFromAllDrives"),
  ),
  corpora: Schema.optional(Schema.String).pipe(T.HttpQuery("corpora")),
  includeTeamDriveItems: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeTeamDriveItems"),
  ),
  spaces: Schema.optional(Schema.String).pipe(T.HttpQuery("spaces")),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  q: Schema.optional(Schema.String).pipe(T.HttpQuery("q")),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  driveId: Schema.optional(Schema.String).pipe(T.HttpQuery("driveId")),
  corpus: Schema.optional(Schema.String).pipe(T.HttpQuery("corpus")),
  orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
}).pipe(
  T.Http({ method: "GET", path: "files" }),
  svc,
) as unknown as Schema.Schema<ListFilesRequest>;

export type ListFilesResponse = FileList;
export const ListFilesResponse = /*@__PURE__*/ /*#__PURE__*/ FileList;

export type ListFilesError = DefaultErrors | NotFound | Forbidden;

/** Lists the user's files. For more information, see [Search for files and folders](https://developers.google.com/workspace/drive/api/guides/search-files). This method accepts the `q` parameter, which is a search query combining one or more search terms. This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results. */
export const listFiles: API.PaginatedOperationMethod<
  ListFilesRequest,
  ListFilesResponse,
  ListFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFilesRequest,
  output: ListFilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateFilesRequest {
  /** Whether to use the uploaded content as indexable text. */
  useContentAsIndexableText?: boolean;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** A comma-separated list of parent IDs to add. */
  addParents?: string;
  /** The ID of the file. */
  fileId: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Deprecated: Adding files to multiple folders is no longer supported. Use shortcuts instead. */
  enforceSingleParent?: boolean;
  /** Whether to set the `keepForever` field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. */
  keepRevisionForever?: boolean;
  /** A language hint for OCR processing during image import (ISO 639-1 code). */
  ocrLanguage?: string;
  /** A comma-separated list of parent IDs to remove. */
  removeParents?: string;
  /** Request body */
  body?: File;
}

export const UpdateFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  useContentAsIndexableText: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useContentAsIndexableText"),
  ),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  addParents: Schema.optional(Schema.String).pipe(T.HttpQuery("addParents")),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  enforceSingleParent: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("enforceSingleParent"),
  ),
  keepRevisionForever: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("keepRevisionForever"),
  ),
  ocrLanguage: Schema.optional(Schema.String).pipe(T.HttpQuery("ocrLanguage")),
  removeParents: Schema.optional(Schema.String).pipe(
    T.HttpQuery("removeParents"),
  ),
  body: Schema.optional(File).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "PATCH", path: "files/{fileId}", hasBody: true }),
  svc,
) as unknown as Schema.Schema<UpdateFilesRequest>;

export type UpdateFilesResponse = File;
export const UpdateFilesResponse = /*@__PURE__*/ /*#__PURE__*/ File;

export type UpdateFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a file's metadata, content, or both. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an * /upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:* `* /*` (Specify a valid MIME type, rather than the literal `* /*` value. The literal `* /*` is only used to indicate that any valid MIME type can be uploaded. For more information, see [Google Workspace and Google Drive supported MIME types](https://developers.google.com/workspace/drive/api/guides/mime-types).) For more information on uploading files, see [Upload file data](https://developers.google.com/workspace/drive/api/guides/manage-uploads). */
export const updateFiles: API.OperationMethod<
  UpdateFilesRequest,
  UpdateFilesResponse,
  UpdateFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateFilesRequest,
  output: UpdateFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteFilesRequest {
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Deprecated: If an item isn't in a shared drive and its last parent is deleted but the item itself isn't, the item will be placed under its owner's root. */
  enforceSingleParent?: boolean;
  /** The ID of the file. */
  fileId: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
}

export const DeleteFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  enforceSingleParent: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("enforceSingleParent"),
  ),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
}).pipe(
  T.Http({ method: "DELETE", path: "files/{fileId}" }),
  svc,
) as unknown as Schema.Schema<DeleteFilesRequest>;

export interface DeleteFilesResponse {}
export const DeleteFilesResponse: Schema.Schema<DeleteFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteFilesResponse>;

export type DeleteFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Permanently deletes a file owned by the user without moving it to the trash. For more information, see [Trash or delete files and folders](https://developers.google.com/workspace/drive/api/guides/delete). If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted. */
export const deleteFiles: API.OperationMethod<
  DeleteFilesRequest,
  DeleteFilesResponse,
  DeleteFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteFilesRequest,
  output: DeleteFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DownloadFilesRequest {
  /** Optional. The MIME type the file should be downloaded as. This field can only be set when downloading Google Workspace documents. For a list of supported MIME types, see [Export MIME types for Google Workspace documents](/workspace/drive/api/guides/ref-export-formats). If not set, a Google Workspace document is downloaded with a default MIME type. The default MIME type might change in the future. */
  mimeType?: string;
  /** Optional. The revision ID of the file to download. This field can only be set when downloading blob files, Google Docs, and Google Sheets. Returns `INVALID_ARGUMENT` if downloading a specific revision on the file is unsupported. */
  revisionId?: string;
  /** Required. The ID of the file to download. */
  fileId: string;
}

export const DownloadFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mimeType: Schema.optional(Schema.String).pipe(T.HttpQuery("mimeType")),
  revisionId: Schema.optional(Schema.String).pipe(T.HttpQuery("revisionId")),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
}).pipe(
  T.Http({ method: "POST", path: "files/{fileId}/download", hasBody: true }),
  svc,
) as unknown as Schema.Schema<DownloadFilesRequest>;

export type DownloadFilesResponse = Operation;
export const DownloadFilesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DownloadFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Downloads the content of a file. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads). Operations are valid for 24 hours from the time of creation. */
export const downloadFiles: API.OperationMethod<
  DownloadFilesRequest,
  DownloadFilesResponse,
  DownloadFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DownloadFilesRequest,
  output: DownloadFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface EmptyTrashFilesRequest {
  /** Deprecated: If an item isn't in a shared drive and its last parent is deleted but the item itself isn't, the item will be placed under its owner's root. */
  enforceSingleParent?: boolean;
  /** If set, empties the trash of the provided shared drive. */
  driveId?: string;
}

export const EmptyTrashFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    enforceSingleParent: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("enforceSingleParent"),
    ),
    driveId: Schema.optional(Schema.String).pipe(T.HttpQuery("driveId")),
  },
).pipe(
  T.Http({ method: "DELETE", path: "files/trash" }),
  svc,
) as unknown as Schema.Schema<EmptyTrashFilesRequest>;

export interface EmptyTrashFilesResponse {}
export const EmptyTrashFilesResponse: Schema.Schema<EmptyTrashFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<EmptyTrashFilesResponse>;

export type EmptyTrashFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Permanently deletes all of the user's trashed files. For more information, see [Trash or delete files and folders](https://developers.google.com/workspace/drive/api/guides/delete). */
export const emptyTrashFiles: API.OperationMethod<
  EmptyTrashFilesRequest,
  EmptyTrashFilesResponse,
  EmptyTrashFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EmptyTrashFilesRequest,
  output: EmptyTrashFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateCseTokenFilesRequest {
  /** The ID of the expected parent of the file. Used when generating a JWT for a new CSE file. If specified, the parent will be fetched, and if the parent is a shared drive item, the shared drive's policy will be used to determine the KACLS that should be used. It is invalid to specify both file_id and parent in a single request. */
  parent?: string;
  /** The ID of the file for which the JWT should be generated. If not provided, an id will be generated. */
  fileId?: string;
}

export const GenerateCseTokenFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    fileId: Schema.optional(Schema.String).pipe(T.HttpQuery("fileId")),
  }).pipe(
    T.Http({ method: "GET", path: "files/generateCseToken" }),
    svc,
  ) as unknown as Schema.Schema<GenerateCseTokenFilesRequest>;

export type GenerateCseTokenFilesResponse = GenerateCseTokenResponse;
export const GenerateCseTokenFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateCseTokenResponse;

export type GenerateCseTokenFilesError = DefaultErrors | NotFound | Forbidden;

/** Generates a CSE token which can be used to create or update CSE files. */
export const generateCseTokenFiles: API.OperationMethod<
  GenerateCseTokenFilesRequest,
  GenerateCseTokenFilesResponse,
  GenerateCseTokenFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateCseTokenFilesRequest,
  output: GenerateCseTokenFilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CopyFilesRequest {
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** The ID of the file. */
  fileId: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Deprecated: Copying files into multiple folders is no longer supported. Use shortcuts instead. */
  enforceSingleParent?: boolean;
  /** Whether to set the `keepForever` field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. */
  keepRevisionForever?: boolean;
  /** A language hint for OCR processing during image import (ISO 639-1 code). */
  ocrLanguage?: string;
  /** Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders. */
  ignoreDefaultVisibility?: boolean;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** Request body */
  body?: File;
}

export const CopyFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  enforceSingleParent: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("enforceSingleParent"),
  ),
  keepRevisionForever: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("keepRevisionForever"),
  ),
  ocrLanguage: Schema.optional(Schema.String).pipe(T.HttpQuery("ocrLanguage")),
  ignoreDefaultVisibility: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("ignoreDefaultVisibility"),
  ),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
  body: Schema.optional(File).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "files/{fileId}/copy", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CopyFilesRequest>;

export type CopyFilesResponse = File;
export const CopyFilesResponse = /*@__PURE__*/ /*#__PURE__*/ File;

export type CopyFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a copy of a file and applies any requested updates with patch semantics. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file). */
export const copyFiles: API.OperationMethod<
  CopyFilesRequest,
  CopyFilesResponse,
  CopyFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CopyFilesRequest,
  output: CopyFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ModifyLabelsFilesRequest {
  /** The ID of the file to which the labels belong. */
  fileId: string;
  /** Request body */
  body?: ModifyLabelsRequest;
}

export const ModifyLabelsFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    body: Schema.optional(ModifyLabelsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "files/{fileId}/modifyLabels",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ModifyLabelsFilesRequest>;

export type ModifyLabelsFilesResponse = ModifyLabelsResponse;
export const ModifyLabelsFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ModifyLabelsResponse;

export type ModifyLabelsFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Modifies the set of labels applied to a file. For more information, see [Set a label field on a file](https://developers.google.com/workspace/drive/api/guides/set-label). Returns a list of the labels that were added or modified. */
export const modifyLabelsFiles: API.OperationMethod<
  ModifyLabelsFilesRequest,
  ModifyLabelsFilesResponse,
  ModifyLabelsFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ModifyLabelsFilesRequest,
  output: ModifyLabelsFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface WatchFilesRequest {
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** The ID of the file. */
  fileId: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides. */
  acknowledgeAbuse?: boolean;
  /** Request body */
  body?: Channel;
}

export const WatchFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
  acknowledgeAbuse: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("acknowledgeAbuse"),
  ),
  body: Schema.optional(Channel).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "files/{fileId}/watch", hasBody: true }),
  svc,
) as unknown as Schema.Schema<WatchFilesRequest>;

export type WatchFilesResponse = Channel;
export const WatchFilesResponse = /*@__PURE__*/ /*#__PURE__*/ Channel;

export type WatchFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Subscribes to changes to a file. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push). */
export const watchFiles: API.OperationMethod<
  WatchFilesRequest,
  WatchFilesResponse,
  WatchFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WatchFilesRequest,
  output: WatchFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateIdsFilesRequest {
  /** The type of items which the IDs can be used for. Supported values are `files` and `shortcuts`. Note that `shortcuts` are only supported in the `drive` `space`. (Default: `files`.) For more information, see [File organization](https://developers.google.com/workspace/drive/api/guides/about-files#file-organization). */
  type?: string;
  /** The number of IDs to return. */
  count?: number;
  /** The space in which the IDs can be used to create files. Supported values are `drive` and `appDataFolder`. (Default: `drive`.) For more information, see [File organization](https://developers.google.com/workspace/drive/api/guides/about-files#file-organization). */
  space?: string;
}

export const GenerateIdsFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
    count: Schema.optional(Schema.Number).pipe(T.HttpQuery("count")),
    space: Schema.optional(Schema.String).pipe(T.HttpQuery("space")),
  }).pipe(
    T.Http({ method: "GET", path: "files/generateIds" }),
    svc,
  ) as unknown as Schema.Schema<GenerateIdsFilesRequest>;

export type GenerateIdsFilesResponse = GeneratedIds;
export const GenerateIdsFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GeneratedIds;

export type GenerateIdsFilesError = DefaultErrors | NotFound | Forbidden;

/** Generates a set of file IDs which can be provided in create or copy requests. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file). */
export const generateIdsFiles: API.OperationMethod<
  GenerateIdsFilesRequest,
  GenerateIdsFilesResponse,
  GenerateIdsFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateIdsFilesRequest,
  output: GenerateIdsFilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateFilesRequest {
  /** Whether to use the uploaded content as indexable text. */
  useContentAsIndexableText?: boolean;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders. */
  ignoreDefaultVisibility?: boolean;
  /** Deprecated: Creating files in multiple folders is no longer supported. */
  enforceSingleParent?: boolean;
  /** Whether to set the `keepForever` field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. */
  keepRevisionForever?: boolean;
  /** A language hint for OCR processing during image import (ISO 639-1 code). */
  ocrLanguage?: string;
  /** Request body */
  body?: File;
}

export const CreateFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  useContentAsIndexableText: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useContentAsIndexableText"),
  ),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  ignoreDefaultVisibility: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("ignoreDefaultVisibility"),
  ),
  enforceSingleParent: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("enforceSingleParent"),
  ),
  keepRevisionForever: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("keepRevisionForever"),
  ),
  ocrLanguage: Schema.optional(Schema.String).pipe(T.HttpQuery("ocrLanguage")),
  body: Schema.optional(File).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "files", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CreateFilesRequest>;

export type CreateFilesResponse = File;
export const CreateFilesResponse = /*@__PURE__*/ /*#__PURE__*/ File;

export type CreateFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a file. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file). This method supports an * /upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:* `* /*` (Specify a valid MIME type, rather than the literal `* /*` value. The literal `* /*` is only used to indicate that any valid MIME type can be uploaded. For more information, see [Google Workspace and Google Drive supported MIME types](https://developers.google.com/workspace/drive/api/guides/mime-types).) For more information on uploading files, see [Upload file data](https://developers.google.com/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with the `create` method must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `name` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"name": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `name` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the name. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type. */
export const createFiles: API.OperationMethod<
  CreateFilesRequest,
  CreateFilesResponse,
  CreateFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateFilesRequest,
  output: CreateFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ApproveApprovalsRequest {
  /** Required. The ID of the approval to approve. */
  approvalId: string;
  /** Required. The ID of the file that the approval is on. */
  fileId: string;
  /** Request body */
  body?: ApproveApprovalRequest;
}

export const ApproveApprovalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approvalId: Schema.String.pipe(T.HttpPath("approvalId")),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    body: Schema.optional(ApproveApprovalRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "files/{fileId}/approvals/{approvalId}:approve",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ApproveApprovalsRequest>;

export type ApproveApprovalsResponse = Approval;
export const ApproveApprovalsResponse = /*@__PURE__*/ /*#__PURE__*/ Approval;

export type ApproveApprovalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Approves an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). This is used to update the ReviewerResponse of the requesting user with a Response of `APPROVED`. If this is the last required reviewer response, this also completes the approval and sets the approval Status to `APPROVED`. */
export const approveApprovals: API.OperationMethod<
  ApproveApprovalsRequest,
  ApproveApprovalsResponse,
  ApproveApprovalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ApproveApprovalsRequest,
  output: ApproveApprovalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeclineApprovalsRequest {
  /** Required. The ID of the approval to decline. */
  approvalId: string;
  /** Required. The ID of the file that the approval is on. */
  fileId: string;
  /** Request body */
  body?: DeclineApprovalRequest;
}

export const DeclineApprovalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approvalId: Schema.String.pipe(T.HttpPath("approvalId")),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    body: Schema.optional(DeclineApprovalRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "files/{fileId}/approvals/{approvalId}:decline",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DeclineApprovalsRequest>;

export type DeclineApprovalsResponse = Approval;
export const DeclineApprovalsResponse = /*@__PURE__*/ /*#__PURE__*/ Approval;

export type DeclineApprovalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Declines an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). This is used to update the ReviewerResponse of the requesting user with a Response of `DECLINED`. This also completes the approval and sets the approval Status to `DECLINED`. */
export const declineApprovals: API.OperationMethod<
  DeclineApprovalsRequest,
  DeclineApprovalsResponse,
  DeclineApprovalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeclineApprovalsRequest,
  output: DeclineApprovalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListApprovalsRequest {
  /** Required. The ID of the file that the approval is on. */
  fileId: string;
  /** The maximum number of approvals to return. When not set, at most 100 approvals are returned. */
  pageSize?: number;
  /** The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response. */
  pageToken?: string;
}

export const ListApprovalsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/approvals" }),
  svc,
) as unknown as Schema.Schema<ListApprovalsRequest>;

export type ListApprovalsResponse = ApprovalList;
export const ListApprovalsResponse = /*@__PURE__*/ /*#__PURE__*/ ApprovalList;

export type ListApprovalsError = DefaultErrors | NotFound | Forbidden;

/** Lists the approvals on a file. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). */
export const listApprovals: API.PaginatedOperationMethod<
  ListApprovalsRequest,
  ListApprovalsResponse,
  ListApprovalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListApprovalsRequest,
  output: ListApprovalsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface CancelApprovalsRequest {
  /** Required. The ID of the file that the approval is on. */
  fileId: string;
  /** Required. The ID of the approval to cancel. */
  approvalId: string;
  /** Request body */
  body?: CancelApprovalRequest;
}

export const CancelApprovalsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    approvalId: Schema.String.pipe(T.HttpPath("approvalId")),
    body: Schema.optional(CancelApprovalRequest).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "files/{fileId}/approvals/{approvalId}:cancel",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<CancelApprovalsRequest>;

export type CancelApprovalsResponse = Approval;
export const CancelApprovalsResponse = /*@__PURE__*/ /*#__PURE__*/ Approval;

export type CancelApprovalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). Updates the approval Status to `CANCELLED`. This can be called by any user with the `writer` permission on the file while the approval Status is `IN_PROGRESS`. */
export const cancelApprovals: API.OperationMethod<
  CancelApprovalsRequest,
  CancelApprovalsResponse,
  CancelApprovalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelApprovalsRequest,
  output: CancelApprovalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetApprovalsRequest {
  /** Required. The ID of the approval. */
  approvalId: string;
  /** Required. The ID of the file that the approval is on. */
  fileId: string;
}

export const GetApprovalsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  approvalId: Schema.String.pipe(T.HttpPath("approvalId")),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/approvals/{approvalId}" }),
  svc,
) as unknown as Schema.Schema<GetApprovalsRequest>;

export type GetApprovalsResponse = Approval;
export const GetApprovalsResponse = /*@__PURE__*/ /*#__PURE__*/ Approval;

export type GetApprovalsError = DefaultErrors | NotFound | Forbidden;

/** Gets an approval by ID. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). */
export const getApprovals: API.OperationMethod<
  GetApprovalsRequest,
  GetApprovalsResponse,
  GetApprovalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetApprovalsRequest,
  output: GetApprovalsResponse,
  errors: [NotFound, Forbidden],
}));

export interface StartApprovalsRequest {
  /** Required. The ID of the file that the approval is created on. */
  fileId: string;
  /** Request body */
  body?: StartApprovalRequest;
}

export const StartApprovalsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  body: Schema.optional(StartApprovalRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "files/{fileId}/approvals:start",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<StartApprovalsRequest>;

export type StartApprovalsResponse = Approval;
export const StartApprovalsResponse = /*@__PURE__*/ /*#__PURE__*/ Approval;

export type StartApprovalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts an approval on a file. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). */
export const startApprovals: API.OperationMethod<
  StartApprovalsRequest,
  StartApprovalsResponse,
  StartApprovalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartApprovalsRequest,
  output: StartApprovalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CommentApprovalsRequest {
  /** Required. The ID of the approval to comment on. */
  approvalId: string;
  /** Required. The ID of the file that the approval is on. */
  fileId: string;
  /** Request body */
  body?: CommentApprovalRequest;
}

export const CommentApprovalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approvalId: Schema.String.pipe(T.HttpPath("approvalId")),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    body: Schema.optional(CommentApprovalRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "files/{fileId}/approvals/{approvalId}:comment",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CommentApprovalsRequest>;

export type CommentApprovalsResponse = Approval;
export const CommentApprovalsResponse = /*@__PURE__*/ /*#__PURE__*/ Approval;

export type CommentApprovalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Comments on an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). This sends a notification to both the initiator and the reviewers. Additionally, a message is also added to the approval activity log. */
export const commentApprovals: API.OperationMethod<
  CommentApprovalsRequest,
  CommentApprovalsResponse,
  CommentApprovalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CommentApprovalsRequest,
  output: CommentApprovalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReassignApprovalsRequest {
  /** Required. The ID of the approval to reassign. */
  approvalId: string;
  /** Required. The ID of the file that the approval is on. */
  fileId: string;
  /** Request body */
  body?: ReassignApprovalRequest;
}

export const ReassignApprovalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approvalId: Schema.String.pipe(T.HttpPath("approvalId")),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    body: Schema.optional(ReassignApprovalRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "files/{fileId}/approvals/{approvalId}:reassign",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReassignApprovalsRequest>;

export type ReassignApprovalsResponse = Approval;
export const ReassignApprovalsResponse = /*@__PURE__*/ /*#__PURE__*/ Approval;

export type ReassignApprovalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reassigns the reviewers on an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). Adds or replaces reviewers in the ReviewerResponse of the approval. This can be called by any user with the `writer` permission on the file while the approval Status is `IN_PROGRESS` and the Response for the reviewer being reassigned is `NO_RESPONSE`. A user with the `reader` permission can only reassign an approval that's assigned to themselves. Removing a reviewer isn't allowed. */
export const reassignApprovals: API.OperationMethod<
  ReassignApprovalsRequest,
  ReassignApprovalsResponse,
  ReassignApprovalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReassignApprovalsRequest,
  output: ReassignApprovalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAppsRequest {
  /** A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/). */
  languageCode?: string;
  /** A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given file extensions are included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists. */
  appFilterExtensions?: string;
  /** A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists. */
  appFilterMimeTypes?: string;
}

export const ListAppsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  languageCode: Schema.optional(Schema.String).pipe(
    T.HttpQuery("languageCode"),
  ),
  appFilterExtensions: Schema.optional(Schema.String).pipe(
    T.HttpQuery("appFilterExtensions"),
  ),
  appFilterMimeTypes: Schema.optional(Schema.String).pipe(
    T.HttpQuery("appFilterMimeTypes"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "apps" }),
  svc,
) as unknown as Schema.Schema<ListAppsRequest>;

export type ListAppsResponse = AppList;
export const ListAppsResponse = /*@__PURE__*/ /*#__PURE__*/ AppList;

export type ListAppsError = DefaultErrors | NotFound | Forbidden;

/** Lists a user's installed apps. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info). */
export const listApps: API.OperationMethod<
  ListAppsRequest,
  ListAppsResponse,
  ListAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAppsRequest,
  output: ListAppsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetAppsRequest {
  /** The ID of the app. */
  appId: string;
}

export const GetAppsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appId: Schema.String.pipe(T.HttpPath("appId")),
}).pipe(
  T.Http({ method: "GET", path: "apps/{appId}" }),
  svc,
) as unknown as Schema.Schema<GetAppsRequest>;

export type GetAppsResponse = App;
export const GetAppsResponse = /*@__PURE__*/ /*#__PURE__*/ App;

export type GetAppsError = DefaultErrors | NotFound | Forbidden;

/** Gets a specific app. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info). */
export const getApps: API.OperationMethod<
  GetAppsRequest,
  GetAppsResponse,
  GetAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAppsRequest,
  output: GetAppsResponse,
  errors: [NotFound, Forbidden],
}));

export interface StopChannelsRequest {
  /** Request body */
  body?: Channel;
}

export const StopChannelsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(Channel).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "channels/stop", hasBody: true }),
  svc,
) as unknown as Schema.Schema<StopChannelsRequest>;

export interface StopChannelsResponse {}
export const StopChannelsResponse: Schema.Schema<StopChannelsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<StopChannelsResponse>;

export type StopChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops watching resources through this channel. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push). */
export const stopChannels: API.OperationMethod<
  StopChannelsRequest,
  StopChannelsResponse,
  StopChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopChannelsRequest,
  output: StopChannelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteRevisionsRequest {
  /** The ID of the revision. */
  revisionId: string;
  /** The ID of the file. */
  fileId: string;
}

export const DeleteRevisionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    revisionId: Schema.String.pipe(T.HttpPath("revisionId")),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
  },
).pipe(
  T.Http({ method: "DELETE", path: "files/{fileId}/revisions/{revisionId}" }),
  svc,
) as unknown as Schema.Schema<DeleteRevisionsRequest>;

export interface DeleteRevisionsResponse {}
export const DeleteRevisionsResponse: Schema.Schema<DeleteRevisionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteRevisionsResponse>;

export type DeleteRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted. For more information, see [Manage file revisions](https://developers.google.com/drive/api/guides/manage-revisions). */
export const deleteRevisions: API.OperationMethod<
  DeleteRevisionsRequest,
  DeleteRevisionsResponse,
  DeleteRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRevisionsRequest,
  output: DeleteRevisionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListRevisionsRequest {
  /** The maximum number of revisions to return per page. */
  pageSize?: number;
  /** The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. */
  pageToken?: string;
  /** The ID of the file. */
  fileId: string;
}

export const ListRevisionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/revisions" }),
  svc,
) as unknown as Schema.Schema<ListRevisionsRequest>;

export type ListRevisionsResponse = RevisionList;
export const ListRevisionsResponse = /*@__PURE__*/ /*#__PURE__*/ RevisionList;

export type ListRevisionsError = DefaultErrors | NotFound | Forbidden;

/** Lists a file's revisions. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions). **Important:** The list of revisions returned by this method might be incomplete for files with a large revision history, including frequently edited Google Docs, Sheets, and Slides. Older revisions might be omitted from the response, meaning the first revision returned may not be the oldest existing revision. The revision history visible in the Workspace editor user interface might be more complete than the list returned by the API. */
export const listRevisions: API.PaginatedOperationMethod<
  ListRevisionsRequest,
  ListRevisionsResponse,
  ListRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRevisionsRequest,
  output: ListRevisionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetRevisionsRequest {
  /** The ID of the revision. */
  revisionId: string;
  /** Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides. */
  acknowledgeAbuse?: boolean;
  /** The ID of the file. */
  fileId: string;
}

export const GetRevisionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  revisionId: Schema.String.pipe(T.HttpPath("revisionId")),
  acknowledgeAbuse: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("acknowledgeAbuse"),
  ),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/revisions/{revisionId}" }),
  svc,
) as unknown as Schema.Schema<GetRevisionsRequest>;

export type GetRevisionsResponse = Revision;
export const GetRevisionsResponse = /*@__PURE__*/ /*#__PURE__*/ Revision;

export type GetRevisionsError = DefaultErrors | NotFound | Forbidden;

/** Gets a revision's metadata or content by ID. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions). */
export const getRevisions: API.OperationMethod<
  GetRevisionsRequest,
  GetRevisionsResponse,
  GetRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRevisionsRequest,
  output: GetRevisionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateRevisionsRequest {
  /** The ID of the file. */
  fileId: string;
  /** The ID of the revision. */
  revisionId: string;
  /** Request body */
  body?: Revision;
}

export const UpdateRevisionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    revisionId: Schema.String.pipe(T.HttpPath("revisionId")),
    body: Schema.optional(Revision).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "files/{fileId}/revisions/{revisionId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateRevisionsRequest>;

export type UpdateRevisionsResponse = Revision;
export const UpdateRevisionsResponse = /*@__PURE__*/ /*#__PURE__*/ Revision;

export type UpdateRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a revision with patch semantics. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions). */
export const updateRevisions: API.OperationMethod<
  UpdateRevisionsRequest,
  UpdateRevisionsResponse,
  UpdateRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRevisionsRequest,
  output: UpdateRevisionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccessproposalsRequest {
  /** Required. The ID of the access proposal to resolve. */
  proposalId: string;
  /** Required. The ID of the item the request is on. */
  fileId: string;
}

export const GetAccessproposalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    proposalId: Schema.String.pipe(T.HttpPath("proposalId")),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "files/{fileId}/accessproposals/{proposalId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAccessproposalsRequest>;

export type GetAccessproposalsResponse = AccessProposal;
export const GetAccessproposalsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessProposal;

export type GetAccessproposalsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves an access proposal by ID. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access). */
export const getAccessproposals: API.OperationMethod<
  GetAccessproposalsRequest,
  GetAccessproposalsResponse,
  GetAccessproposalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccessproposalsRequest,
  output: GetAccessproposalsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ResolveAccessproposalsRequest {
  /** Required. The ID of the item the request is on. */
  fileId: string;
  /** Required. The ID of the access proposal to resolve. */
  proposalId: string;
  /** Request body */
  body?: ResolveAccessProposalRequest;
}

export const ResolveAccessproposalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    proposalId: Schema.String.pipe(T.HttpPath("proposalId")),
    body: Schema.optional(ResolveAccessProposalRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "files/{fileId}/accessproposals/{proposalId}:resolve",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResolveAccessproposalsRequest>;

export interface ResolveAccessproposalsResponse {}
export const ResolveAccessproposalsResponse: Schema.Schema<ResolveAccessproposalsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<ResolveAccessproposalsResponse>;

export type ResolveAccessproposalsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Approves or denies an access proposal. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access). */
export const resolveAccessproposals: API.OperationMethod<
  ResolveAccessproposalsRequest,
  ResolveAccessproposalsResponse,
  ResolveAccessproposalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResolveAccessproposalsRequest,
  output: ResolveAccessproposalsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccessproposalsRequest {
  /** Required. The ID of the item the request is on. */
  fileId: string;
  /** Optional. The continuation token on the list of access requests. */
  pageToken?: string;
  /** Optional. The number of results per page. */
  pageSize?: number;
}

export const ListAccessproposalsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "files/{fileId}/accessproposals" }),
    svc,
  ) as unknown as Schema.Schema<ListAccessproposalsRequest>;

export type ListAccessproposalsResponse = ListAccessProposalsResponse;
export const ListAccessproposalsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAccessProposalsResponse;

export type ListAccessproposalsError = DefaultErrors | NotFound | Forbidden;

/** List the access proposals on a file. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access). Note: Only approvers are able to list access proposals on a file. If the user isn't an approver, a 403 error is returned. */
export const listAccessproposals: API.PaginatedOperationMethod<
  ListAccessproposalsRequest,
  ListAccessproposalsResponse,
  ListAccessproposalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccessproposalsRequest,
  output: ListAccessproposalsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListCommentsRequest {
  /** The maximum number of comments to return per page. */
  pageSize?: number;
  /** Whether to include deleted comments. Deleted comments will not include their original content. */
  includeDeleted?: boolean;
  /** The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. */
  pageToken?: string;
  /** The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time). */
  startModifiedTime?: string;
  /** The ID of the file. */
  fileId: string;
}

export const ListCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  includeDeleted: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeDeleted"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  startModifiedTime: Schema.optional(Schema.String).pipe(
    T.HttpQuery("startModifiedTime"),
  ),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/comments" }),
  svc,
) as unknown as Schema.Schema<ListCommentsRequest>;

export type ListCommentsResponse = CommentList;
export const ListCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ CommentList;

export type ListCommentsError = DefaultErrors | NotFound | Forbidden;

/** Lists a file's comments. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter). */
export const listComments: API.PaginatedOperationMethod<
  ListCommentsRequest,
  ListCommentsResponse,
  ListCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCommentsRequest,
  output: ListCommentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetCommentsRequest {
  /** The ID of the comment. */
  commentId: string;
  /** Whether to return deleted comments. Deleted comments will not include their original content. */
  includeDeleted?: boolean;
  /** The ID of the file. */
  fileId: string;
}

export const GetCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
  includeDeleted: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeDeleted"),
  ),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/comments/{commentId}" }),
  svc,
) as unknown as Schema.Schema<GetCommentsRequest>;

export type GetCommentsResponse = Comment;
export const GetCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ Comment;

export type GetCommentsError = DefaultErrors | NotFound | Forbidden;

/** Gets a comment by ID. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter). */
export const getComments: API.OperationMethod<
  GetCommentsRequest,
  GetCommentsResponse,
  GetCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCommentsRequest,
  output: GetCommentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteCommentsRequest {
  /** The ID of the file. */
  fileId: string;
  /** The ID of the comment. */
  commentId: string;
}

export const DeleteCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
}).pipe(
  T.Http({ method: "DELETE", path: "files/{fileId}/comments/{commentId}" }),
  svc,
) as unknown as Schema.Schema<DeleteCommentsRequest>;

export interface DeleteCommentsResponse {}
export const DeleteCommentsResponse: Schema.Schema<DeleteCommentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteCommentsResponse>;

export type DeleteCommentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a comment. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). */
export const deleteComments: API.OperationMethod<
  DeleteCommentsRequest,
  DeleteCommentsResponse,
  DeleteCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCommentsRequest,
  output: DeleteCommentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateCommentsRequest {
  /** The ID of the file. */
  fileId: string;
  /** Request body */
  body?: Comment;
}

export const CreateCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  body: Schema.optional(Comment).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "files/{fileId}/comments", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CreateCommentsRequest>;

export type CreateCommentsResponse = Comment;
export const CreateCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ Comment;

export type CreateCommentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a comment on a file. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter). */
export const createComments: API.OperationMethod<
  CreateCommentsRequest,
  CreateCommentsResponse,
  CreateCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCommentsRequest,
  output: CreateCommentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateCommentsRequest {
  /** The ID of the file. */
  fileId: string;
  /** The ID of the comment. */
  commentId: string;
  /** Request body */
  body?: Comment;
}

export const UpdateCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
  body: Schema.optional(Comment).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "files/{fileId}/comments/{commentId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateCommentsRequest>;

export type UpdateCommentsResponse = Comment;
export const UpdateCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ Comment;

export type UpdateCommentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a comment with patch semantics. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter). */
export const updateComments: API.OperationMethod<
  UpdateCommentsRequest,
  UpdateCommentsResponse,
  UpdateCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateCommentsRequest,
  output: UpdateCommentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
