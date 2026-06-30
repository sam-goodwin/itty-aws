// ==========================================================================
// Google Drive API (drive v2)
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
  name: "drive",
  version: "v2",
  rootUrl: "https://www.googleapis.com/",
  servicePath: "drive/v2/",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ParentReference {
  /** Output only. Whether or not the parent is the root folder. */
  isRoot?: boolean;
  /** Output only. A link to the parent. */
  parentLink?: string;
  /** Output only. A link back to this reference. */
  selfLink?: string;
  /** The ID of the parent. */
  id?: string;
  /** Output only. This is always `drive#parentReference`. */
  kind?: string;
}

export const ParentReference: Schema.Codec<ParentReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isRoot: Schema.optional(Schema.Boolean),
    parentLink: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ParentReference" });

export interface Drive {
  /** Output only. A short-lived link to this shared drive's background image. */
  backgroundImageLink?: string;
  /** An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set. */
  backgroundImageFile?: {
    id?: string;
    xCoordinate?: number;
    yCoordinate?: number;
    width?: number;
  };
  /** Whether the shared drive is hidden from default view. */
  hidden?: boolean;
  /** Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive. */
  id?: string;
  /** The time at which the shared drive was created (RFC 3339 date-time). */
  createdDate?: string;
  /** The name of this shared drive. */
  name?: string;
  /** The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.insert` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`. */
  themeId?: string;
  /** The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`. */
  colorRgb?: string;
  /** A set of restrictions that apply to this shared drive or items inside this shared drive. */
  restrictions?: {
    domainUsersOnly?: boolean;
    driveMembersOnly?: boolean;
    sharingFoldersRequiresOrganizerPermission?: boolean;
    copyRequiresWriterPermission?: boolean;
    adminManagedRestrictions?: boolean;
  };
  /** Output only. This is always `drive#drive` */
  kind?: string;
  /** Output only. Capabilities the current user has on this shared drive. */
  capabilities?: {
    canResetDriveRestrictions?: boolean;
    canComment?: boolean;
    canChangeDriveBackground?: boolean;
    canShare?: boolean;
    canCopy?: boolean;
    canRename?: boolean;
    canDeleteDrive?: boolean;
    canChangeDriveMembersOnlyRestriction?: boolean;
    canDeleteChildren?: boolean;
    canListChildren?: boolean;
    canManageMembers?: boolean;
    canRenameDrive?: boolean;
    canAddChildren?: boolean;
    canReadRevisions?: boolean;
    canDownload?: boolean;
    canChangeDomainUsersOnlyRestriction?: boolean;
    canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean;
    canEdit?: boolean;
    canChangeCopyRequiresWriterPermissionRestriction?: boolean;
    canTrashChildren?: boolean;
  };
  /** Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`. */
  orgUnitId?: string;
}

export const Drive: Schema.Codec<Drive> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backgroundImageLink: Schema.optional(Schema.String),
    backgroundImageFile: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        xCoordinate: Schema.optional(Schema.Number),
        yCoordinate: Schema.optional(Schema.Number),
        width: Schema.optional(Schema.Number),
      }),
    ),
    hidden: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    createdDate: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    themeId: Schema.optional(Schema.String),
    colorRgb: Schema.optional(Schema.String),
    restrictions: Schema.optional(
      Schema.Struct({
        domainUsersOnly: Schema.optional(Schema.Boolean),
        driveMembersOnly: Schema.optional(Schema.Boolean),
        sharingFoldersRequiresOrganizerPermission: Schema.optional(
          Schema.Boolean,
        ),
        copyRequiresWriterPermission: Schema.optional(Schema.Boolean),
        adminManagedRestrictions: Schema.optional(Schema.Boolean),
      }),
    ),
    kind: Schema.optional(Schema.String),
    capabilities: Schema.optional(
      Schema.Struct({
        canResetDriveRestrictions: Schema.optional(Schema.Boolean),
        canComment: Schema.optional(Schema.Boolean),
        canChangeDriveBackground: Schema.optional(Schema.Boolean),
        canShare: Schema.optional(Schema.Boolean),
        canCopy: Schema.optional(Schema.Boolean),
        canRename: Schema.optional(Schema.Boolean),
        canDeleteDrive: Schema.optional(Schema.Boolean),
        canChangeDriveMembersOnlyRestriction: Schema.optional(Schema.Boolean),
        canDeleteChildren: Schema.optional(Schema.Boolean),
        canListChildren: Schema.optional(Schema.Boolean),
        canManageMembers: Schema.optional(Schema.Boolean),
        canRenameDrive: Schema.optional(Schema.Boolean),
        canAddChildren: Schema.optional(Schema.Boolean),
        canReadRevisions: Schema.optional(Schema.Boolean),
        canDownload: Schema.optional(Schema.Boolean),
        canChangeDomainUsersOnlyRestriction: Schema.optional(Schema.Boolean),
        canChangeSharingFoldersRequiresOrganizerPermissionRestriction:
          Schema.optional(Schema.Boolean),
        canEdit: Schema.optional(Schema.Boolean),
        canChangeCopyRequiresWriterPermissionRestriction: Schema.optional(
          Schema.Boolean,
        ),
        canTrashChildren: Schema.optional(Schema.Boolean),
      }),
    ),
    orgUnitId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Drive" });

export interface User {
  /** Output only. Whether this user is the same as the authenticated user for whom the request was made. */
  isAuthenticatedUser?: boolean;
  /** Output only. The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester. */
  emailAddress?: string;
  /** Output only. The user's ID as visible in Permission resources. */
  permissionId?: string;
  /** Output only. Identifies what kind of resource this is. Value: the fixed string `drive#user`. */
  kind?: string;
  /** Output only. A plain text displayable name for this user. */
  displayName?: string;
  /** Output only. The user's profile picture. */
  picture?: { url?: string };
}

export const User: Schema.Codec<User> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isAuthenticatedUser: Schema.optional(Schema.Boolean),
    emailAddress: Schema.optional(Schema.String),
    permissionId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    picture: Schema.optional(
      Schema.Struct({ url: Schema.optional(Schema.String) }),
    ),
  }).annotate({ identifier: "User" });

export interface LabelField {
  /** This is always `drive#labelField`. */
  kind?: string;
  /** The identifier of this label field. */
  id?: string;
  /** The field type. While new values may be supported in the future, the following are currently allowed: * `dateString` * `integer` * `selection` * `text` * `user` */
  valueType?: string;
  /** Only present if `valueType` is `text`. */
  text?: ReadonlyArray<string>;
  /** Only present if `valueType` is `integer`. */
  integer?: ReadonlyArray<string>;
  /** Only present if `valueType` is `selection` */
  selection?: ReadonlyArray<string>;
  /** Only present if valueType is dateString. RFC 3339 formatted date: YYYY-MM-DD. */
  dateString?: ReadonlyArray<string>;
  /** Only present if `valueType` is `user`. */
  user?: ReadonlyArray<User>;
}

export const LabelField: Schema.Codec<LabelField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    valueType: Schema.optional(Schema.String),
    text: Schema.optional(Schema.Array(Schema.String)),
    integer: Schema.optional(Schema.Array(Schema.String)),
    selection: Schema.optional(Schema.Array(Schema.String)),
    dateString: Schema.optional(Schema.Array(Schema.String)),
    user: Schema.optional(Schema.Array(User)),
  }).annotate({ identifier: "LabelField" });

export interface Label {
  /** The revision ID of the label. */
  revisionId?: string;
  /** The ID of the label. */
  id?: string;
  /** This is always `drive#label` */
  kind?: string;
  /** A map of the fields on the label, keyed by the field's ID. */
  fields?: Record<string, LabelField>;
}

export const Label: Schema.Codec<Label> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revisionId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.Record(Schema.String, LabelField)),
  }).annotate({ identifier: "Label" });

export interface ContentRestriction {
  /** Output only. The type of the content restriction. Currently the only possible value is `globalContentRestriction`. */
  type?: string;
  /** Reason for why the content of the file is restricted. This is only mutable on requests that also set `readOnly=true`. */
  reason?: string;
  /** Whether the content restriction can only be modified or removed by a user who owns the file. For files in shared drives, any user with `organizer` capabilities can modify or remove this content restriction. */
  ownerRestricted?: boolean;
  /** Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified. */
  readOnly?: boolean;
  /** The time at which the content restriction was set (formatted RFC 3339 timestamp). Only populated if readOnly is true. */
  restrictionDate?: string;
  /** Output only. The user who set the content restriction. Only populated if `readOnly` is true. */
  restrictingUser?: User;
  /** Output only. Whether the content restriction was applied by the system, for example due to an esignature. Users cannot modify or remove system restricted content restrictions. */
  systemRestricted?: boolean;
}

export const ContentRestriction: Schema.Codec<ContentRestriction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    ownerRestricted: Schema.optional(Schema.Boolean),
    readOnly: Schema.optional(Schema.Boolean),
    restrictionDate: Schema.optional(Schema.String),
    restrictingUser: Schema.optional(User),
    systemRestricted: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ContentRestriction" });

export interface Permission {
  /** Output only. The email address of the user or group this permission refers to. This is an output-only field which is present when the permission type is `user` or `group`. */
  emailAddress?: string;
  /** Output only. The domain name of the entity this permission refers to. This is an output-only field which is present when the permission type is `user`, `group` or `domain`. */
  domain?: string;
  /** Output only. A link back to this permission. */
  selfLink?: string;
  /** The primary role for this user. While new values may be supported in the future, the following are currently allowed: * `owner` * `organizer` * `fileOrganizer` * `writer` * `reader` */
  role?: string;
  /** Whether the link is required for this permission. */
  withLink?: boolean;
  /** Output only. Deprecated: Use `permissionDetails` instead. */
  teamDrivePermissionDetails?: ReadonlyArray<{
    inheritedFrom?: string;
    role?: string;
    additionalRoles?: ReadonlyArray<string>;
    teamDrivePermissionType?: string;
    inherited?: boolean;
  }>;
  /** The time at which this permission will expire (RFC 3339 date-time). Expiration dates have the following restrictions: - They can only be set on user and group permissions - The date must be in the future - The date cannot be more than a year in the future - The date can only be set on drive.permissions.update or drive.permissions.patch requests */
  expirationDate?: string;
  /** Output only. Deprecated. */
  authKey?: string;
  /** Output only. The ETag of the permission. */
  etag?: string;
  /** Indicates the view for this permission. Only populated for permissions that belong to a view. published and metadata are the only supported values. - published: The permission's role is published_reader. - metadata: The item is only visible to the metadata view because the item has limited access and the scope has at least read access to the parent. Note: The metadata view is currently only supported on folders. */
  view?: string;
  /** The email address or domain name for the entity. This is used during inserts and is not populated in responses. When making a `drive.permissions.insert` request, exactly one of the `id` or `value` fields must be specified unless the permission type is `anyone`, in which case both `id` and `value` are ignored. */
  value?: string;
  /** The account type. Allowed values are: * `user` * `group` * `domain` * `anyone` */
  type?: string;
  /** Additional roles for this user. Only `commenter` is currently allowed, though more may be supported in the future. */
  additionalRoles?: ReadonlyArray<string>;
  /** When true, only organizers, owners, and users with permissions added directly on the item can access it. */
  inheritedPermissionsDisabled?: boolean;
  /** Output only. The name for this permission. */
  name?: string;
  /** Output only. A link to the profile photo, if available. */
  photoLink?: string;
  /** Output only. Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions. */
  deleted?: boolean;
  /** The ID of the user this permission refers to, and identical to the `permissionId` in the About and Files resources. When making a `drive.permissions.insert` request, exactly one of the `id` or `value` fields must be specified unless the permission type is `anyone`, in which case both `id` and `value` are ignored. */
  id?: string;
  /** Whether the account associated with this permission is a pending owner. Only populated for `user` type permissions for files that are not in a shared drive. */
  pendingOwner?: boolean;
  /** Output only. Details of whether the permissions on this item are inherited or directly on this item. */
  permissionDetails?: ReadonlyArray<{
    permissionType?: string;
    inheritedFrom?: string;
    inherited?: boolean;
    role?: string;
    additionalRoles?: ReadonlyArray<string>;
  }>;
  /** Output only. This is always `drive#permission`. */
  kind?: string;
}

export const Permission: Schema.Codec<Permission> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    emailAddress: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    withLink: Schema.optional(Schema.Boolean),
    teamDrivePermissionDetails: Schema.optional(
      Schema.Array(
        Schema.Struct({
          inheritedFrom: Schema.optional(Schema.String),
          role: Schema.optional(Schema.String),
          additionalRoles: Schema.optional(Schema.Array(Schema.String)),
          teamDrivePermissionType: Schema.optional(Schema.String),
          inherited: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    expirationDate: Schema.optional(Schema.String),
    authKey: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    view: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    additionalRoles: Schema.optional(Schema.Array(Schema.String)),
    inheritedPermissionsDisabled: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    photoLink: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    pendingOwner: Schema.optional(Schema.Boolean),
    permissionDetails: Schema.optional(
      Schema.Array(
        Schema.Struct({
          permissionType: Schema.optional(Schema.String),
          inheritedFrom: Schema.optional(Schema.String),
          inherited: Schema.optional(Schema.Boolean),
          role: Schema.optional(Schema.String),
          additionalRoles: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "Permission" });

export interface Property {
  /** Output only. The link back to this property. */
  selfLink?: string;
  /** The key of this property. */
  key?: string;
  /** Output only. This is always `drive#property`. */
  kind?: string;
  /** The value of this property. */
  value?: string;
  /** The visibility of this property. Allowed values are PRIVATE (default) and PUBLIC. Private properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties. */
  visibility?: string;
  /** Output only. ETag of the property. */
  etag?: string;
}

export const Property: Schema.Codec<Property> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selfLink: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    visibility: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Property" });

export interface DecryptionMetadata {
  /** Key format for the unwrapped key. Must be `tinkAesGcmKey`. */
  keyFormat?: string;
  /** The URL-safe Base64 encoded HMAC-SHA256 digest of the resource metadata with its DEK (Data Encryption Key); see https://developers.google.com/workspace/cse/reference */
  encryptionResourceKeyHash?: string;
  /** The ID of the KACLS (Key ACL Service) used to encrypt the file. */
  kaclsId?: string;
  /** Chunk size used if content was encrypted with the AES 256 GCM Cipher. Possible values are: - default - small */
  aes256GcmChunkSize?: string;
  /** The signed JSON Web Token (JWT) which can be used to authorize the requesting user with the Key ACL Service (KACLS). The JWT asserts that the requesting user has at least read permissions on the file. */
  jwt?: string;
  /** The URL-safe Base64 encoded wrapped key used to encrypt the contents of the file. */
  wrappedKey?: string;
  /** The name of the KACLS (Key ACL Service) used to encrypt the file. */
  kaclsName?: string;
}

export const DecryptionMetadata: Schema.Codec<DecryptionMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyFormat: Schema.optional(Schema.String),
    encryptionResourceKeyHash: Schema.optional(Schema.String),
    kaclsId: Schema.optional(Schema.String),
    aes256GcmChunkSize: Schema.optional(Schema.String),
    jwt: Schema.optional(Schema.String),
    wrappedKey: Schema.optional(Schema.String),
    kaclsName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DecryptionMetadata" });

export interface ClientEncryptionDetails {
  /** The encryption state of the file. The values expected here are: - encrypted - unencrypted */
  encryptionState?: string;
  /** The metadata used for client-side operations. */
  decryptionMetadata?: DecryptionMetadata;
}

export const ClientEncryptionDetails: Schema.Codec<ClientEncryptionDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionState: Schema.optional(Schema.String),
    decryptionMetadata: Schema.optional(DecryptionMetadata),
  }).annotate({ identifier: "ClientEncryptionDetails" });

export interface File {
  /** Output only. An MD5 checksum for the content of this file. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
  md5Checksum?: string;
  /** Output only. An overview of the labels on the file. */
  labelInfo?: { labels?: ReadonlyArray<Label> };
  /** The time that the item was trashed (formatted RFC 3339 timestamp). Only populated for items in shared drives. */
  trashedDate?: string;
  /** Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Not intended for direct usage on web applications due to [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), consider using a proxy server. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request. */
  thumbnailLink?: string;
  /** Time at which this file was shared with the user (formatted RFC 3339 timestamp). */
  sharedWithMeDate?: string;
  /** Restrictions for accessing the content of the file. Only populated if such a restriction exists. */
  contentRestrictions?: ReadonlyArray<ContentRestriction>;
  /** Output only. Whether the file was created or opened by the requesting app. */
  isAppAuthorized?: boolean;
  /** Output only. List of permission IDs for users with access to this file. */
  permissionIds?: ReadonlyArray<string>;
  /** Output only. The full file extension; extracted from the title. May contain multiple concatenated extensions, such as "tar.gz". Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
  fullFileExtension?: string;
  /** Contains details about the link URLs that clients are using to refer to this item. */
  linkShareMetadata?: {
    securityUpdateEnabled?: boolean;
    securityUpdateEligible?: boolean;
  };
  /** Deprecated. */
  markedViewedByMeDate?: string;
  /** Output only. The permissions for the authenticated user on this file. */
  userPermission?: Permission;
  /** Indexable text attributes for the file (can only be written) */
  indexableText?: { text?: string };
  /** The ID of the parent folder containing the file. A file can only have one parent folder; specifying multiple parents isn't supported. If not specified as part of an insert request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parent of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list. */
  parents?: ReadonlyArray<ParentReference>;
  /** Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take. */
  capabilities?: {
    canAddFolderFromAnotherDrive?: boolean;
    canCopy?: boolean;
    canRename?: boolean;
    canDisableInheritedPermissions?: boolean;
    canModifyLabels?: boolean;
    canModifyContent?: boolean;
    canModifyEditorContentRestriction?: boolean;
    canTrash?: boolean;
    canAcceptOwnership?: boolean;
    canReadLabels?: boolean;
    canDelete?: boolean;
    canModifyContentRestriction?: boolean;
    canUntrash?: boolean;
    canReadDrive?: boolean;
    canReadRevisions?: boolean;
    canMoveItemOutOfTeamDrive?: boolean;
    canMoveItemWithinDrive?: boolean;
    canMoveItemWithinTeamDrive?: boolean;
    canMoveChildrenOutOfTeamDrive?: boolean;
    canRemoveChildren?: boolean;
    canRemoveMyDriveParent?: boolean;
    canRemoveContentRestriction?: boolean;
    canMoveTeamDriveItem?: boolean;
    canChangeRestrictedDownload?: boolean;
    canShare?: boolean;
    canAddMyDriveParent?: boolean;
    canMoveChildrenOutOfDrive?: boolean;
    canDeleteChildren?: boolean;
    canListChildren?: boolean;
    canReadTeamDrive?: boolean;
    canChangeCopyRequiresWriterPermission?: boolean;
    canComment?: boolean;
    canMoveChildrenWithinDrive?: boolean;
    canEdit?: boolean;
    canTrashChildren?: boolean;
    canChangeSecurityUpdateEnabled?: boolean;
    canAddChildren?: boolean;
    canMoveChildrenWithinTeamDrive?: boolean;
    canModifyOwnerContentRestriction?: boolean;
    canDownload?: boolean;
    canMoveItemOutOfDrive?: boolean;
    canMoveItemIntoTeamDrive?: boolean;
    canEnableInheritedPermissions?: boolean;
  };
  /** The title of this file. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the title is constant. */
  title?: string;
  /** Output only. A link for embedding the file. */
  embedLink?: string;
  /** Output only. Deprecated: Use `capabilities/canEdit` instead. */
  editable?: boolean;
  /** Output only. Metadata about video media. This will only be present for video types. */
  videoMediaMetadata?: {
    height?: number;
    durationMillis?: string;
    width?: number;
  };
  /** Output only. Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content. */
  imageMediaMetadata?: {
    date?: string;
    flashUsed?: boolean;
    lens?: string;
    whiteBalance?: string;
    sensor?: string;
    focalLength?: number;
    width?: number;
    location?: { longitude?: number; altitude?: number; latitude?: number };
    exposureMode?: string;
    cameraModel?: string;
    maxApertureValue?: number;
    rotation?: number;
    exposureBias?: number;
    meteringMode?: string;
    cameraMake?: string;
    colorSpace?: string;
    aperture?: number;
    exposureTime?: number;
    subjectDistance?: number;
    height?: number;
    isoSpeed?: number;
  };
  /** Output only. A link back to this file. */
  selfLink?: string;
  /** Output only. Name(s) of the owner(s) of this file. Not populated for items in shared drives. */
  ownerNames?: ReadonlyArray<string>;
  /** Output only. The thumbnail version for use in thumbnail cache invalidation. */
  thumbnailVersion?: string;
  /** Last time this file was viewed by the user (formatted RFC 3339 timestamp). */
  lastViewedByMeDate?: string;
  /** The list of properties. */
  properties?: ReadonlyArray<Property>;
  /** Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user. */
  version?: string;
  /** Output only. The list of spaces which contain the file. Supported values are `drive`, `appDataFolder` and `photos`. */
  spaces?: ReadonlyArray<string>;
  /** Output only. Deprecated: Use `capabilities/canComment` instead. */
  canComment?: boolean;
  /** Output only. If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives. */
  trashingUser?: User;
  /** Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives. */
  owners?: ReadonlyArray<User>;
  /** Output only. Deprecated: Use `driveId` instead. */
  teamDriveId?: string;
  /** Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set. */
  modifiedDate?: string;
  /** Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date. */
  modifiedByMeDate?: string;
  /** Whether the options to copy, print, or download this file, should be disabled for readers and commenters. */
  copyRequiresWriterPermission?: boolean;
  /** Output only. ETag of the file. */
  etag?: string;
  /** Output only. Deprecated: Use `capabilities/canCopy` instead. */
  copyable?: boolean;
  /** Output only. The number of quota bytes used by this file. */
  quotaBytesUsed?: string;
  /** Output only. A link to open this file with the user's default app for this file. Only populated when the drive.apps.readonly scope is used. */
  defaultOpenWithLink?: string;
  /** Output only. The list of permissions for users with access to this file. Not populated for items in shared drives. */
  permissions?: ReadonlyArray<Permission>;
  /** Client Side Encryption related details. Contains details about the encryption state of the file and details regarding the encryption mechanism that clients need to use when decrypting the contents of this item. This will only be present on files and not on folders or shortcuts. */
  clientEncryptionDetails?: ClientEncryptionDetails;
  /** Output only. Deprecated: Use `capabilities/canShare` instead. */
  shareable?: boolean;
  /** Create time for this file (formatted RFC 3339 timestamp). */
  createdDate?: string;
  /** Output only. User that shared the item with the current user, if available. */
  sharingUser?: User;
  /** Output only. Whether the file is owned by the current user. Not populated for items in shared drives. */
  ownedByMe?: boolean;
  /** Shortcut file details. Only populated for shortcut files, which have the mimeType field set to `application/vnd.google-apps.shortcut`. Can only be set on `files.insert` requests. */
  shortcutDetails?: {
    targetMimeType?: string;
    targetResourceKey?: string;
    targetId?: string;
  };
  /** Output only. ID of the shared drive the file resides in. Only populated for items in shared drives. */
  driveId?: string;
  /** Output only. A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive's Website Hosting. */
  webViewLink?: string;
  /** Output only. The type of file. This is always `drive#file`. */
  kind?: string;
  /** Whether writers can share the document with other users. Not populated for items in shared drives. */
  writersCanShare?: boolean;
  /** Output only. Whether this file is in the Application Data folder. */
  appDataContents?: boolean;
  /** Output only. Short lived download URL for the file. This field is only populated for files with content stored in Google Drive; it is not populated for Google Docs or shortcut files. */
  downloadUrl?: string;
  /** The ID of the file. */
  id?: string;
  /** The original filename of the uploaded content if available, or else the original value of the `title` field. This is only available for files with binary content in Google Drive. */
  originalFilename?: string;
  /** Output only. The last user to modify this file. This field is only populated when the last modification was performed by a signed-in user. */
  lastModifyingUser?: User;
  /** Output only. A map of the id of each of the user's apps to a link to open this file with that app. Only populated when the drive.apps.readonly scope is used. */
  openWithLinks?: Record<string, string>;
  /** A group of labels for the file. */
  labels?: {
    viewed?: boolean;
    restricted?: boolean;
    modified?: boolean;
    starred?: boolean;
    hidden?: boolean;
    trashed?: boolean;
  };
  /** Output only. Deprecated: Use `capabilities/canReadRevisions` instead. */
  canReadRevisions?: boolean;
  /** Output only. Whether the file has been shared. Not populated for items in shared drives. */
  shared?: boolean;
  /** A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated. */
  thumbnail?: { image?: string; mimeType?: string };
  /** Output only. Name of the last user to modify this file. */
  lastModifyingUserName?: string;
  /** Output only. The final component of `fullFileExtension` with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
  fileExtension?: string;
  /** Output only. A link to the file's icon. */
  iconLink?: string;
  /** Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field. */
  hasThumbnail?: boolean;
  /** The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content's MIME type. */
  mimeType?: string;
  /** Output only. Whether this file has been explicitly trashed, as opposed to recursively trashed. */
  explicitlyTrashed?: boolean;
  /** Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives. */
  hasAugmentedPermissions?: boolean;
  /** Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
  sha1Checksum?: string;
  /** Output only. Links for exporting Docs Editors files to specific formats. */
  exportLinks?: Record<string, string>;
  /** Output only. A link for opening the file in a relevant Google editor or viewer. */
  alternateLink?: string;
  /** Whether this file has inherited permissions disabled. Inherited permissions are enabled by default. */
  inheritedPermissionsDisabled?: boolean;
  /** A short description of the file. */
  description?: string;
  /** Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders. */
  fileSize?: string;
  /** Output only. A link for downloading the content of the file in a browser using cookie based authentication. In cases where the content is shared publicly, the content can be downloaded without any credentials. */
  webContentLink?: string;
  /** Output only. The ID of the file's head revision. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
  headRevisionId?: string;
  /** Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
  sha256Checksum?: string;
  /** Folder color as an RGB hex string if the file is a folder or a shortcut to a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette. */
  folderColorRgb?: string;
  /** Output only. A key needed to access the item via a shared link. */
  resourceKey?: string;
}

export const File: Schema.Codec<File> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    md5Checksum: Schema.optional(Schema.String),
    labelInfo: Schema.optional(
      Schema.Struct({ labels: Schema.optional(Schema.Array(Label)) }),
    ),
    trashedDate: Schema.optional(Schema.String),
    thumbnailLink: Schema.optional(Schema.String),
    sharedWithMeDate: Schema.optional(Schema.String),
    contentRestrictions: Schema.optional(Schema.Array(ContentRestriction)),
    isAppAuthorized: Schema.optional(Schema.Boolean),
    permissionIds: Schema.optional(Schema.Array(Schema.String)),
    fullFileExtension: Schema.optional(Schema.String),
    linkShareMetadata: Schema.optional(
      Schema.Struct({
        securityUpdateEnabled: Schema.optional(Schema.Boolean),
        securityUpdateEligible: Schema.optional(Schema.Boolean),
      }),
    ),
    markedViewedByMeDate: Schema.optional(Schema.String),
    userPermission: Schema.optional(Permission),
    indexableText: Schema.optional(
      Schema.Struct({ text: Schema.optional(Schema.String) }),
    ),
    parents: Schema.optional(Schema.Array(ParentReference)),
    capabilities: Schema.optional(
      Schema.Struct({
        canAddFolderFromAnotherDrive: Schema.optional(Schema.Boolean),
        canCopy: Schema.optional(Schema.Boolean),
        canRename: Schema.optional(Schema.Boolean),
        canDisableInheritedPermissions: Schema.optional(Schema.Boolean),
        canModifyLabels: Schema.optional(Schema.Boolean),
        canModifyContent: Schema.optional(Schema.Boolean),
        canModifyEditorContentRestriction: Schema.optional(Schema.Boolean),
        canTrash: Schema.optional(Schema.Boolean),
        canAcceptOwnership: Schema.optional(Schema.Boolean),
        canReadLabels: Schema.optional(Schema.Boolean),
        canDelete: Schema.optional(Schema.Boolean),
        canModifyContentRestriction: Schema.optional(Schema.Boolean),
        canUntrash: Schema.optional(Schema.Boolean),
        canReadDrive: Schema.optional(Schema.Boolean),
        canReadRevisions: Schema.optional(Schema.Boolean),
        canMoveItemOutOfTeamDrive: Schema.optional(Schema.Boolean),
        canMoveItemWithinDrive: Schema.optional(Schema.Boolean),
        canMoveItemWithinTeamDrive: Schema.optional(Schema.Boolean),
        canMoveChildrenOutOfTeamDrive: Schema.optional(Schema.Boolean),
        canRemoveChildren: Schema.optional(Schema.Boolean),
        canRemoveMyDriveParent: Schema.optional(Schema.Boolean),
        canRemoveContentRestriction: Schema.optional(Schema.Boolean),
        canMoveTeamDriveItem: Schema.optional(Schema.Boolean),
        canChangeRestrictedDownload: Schema.optional(Schema.Boolean),
        canShare: Schema.optional(Schema.Boolean),
        canAddMyDriveParent: Schema.optional(Schema.Boolean),
        canMoveChildrenOutOfDrive: Schema.optional(Schema.Boolean),
        canDeleteChildren: Schema.optional(Schema.Boolean),
        canListChildren: Schema.optional(Schema.Boolean),
        canReadTeamDrive: Schema.optional(Schema.Boolean),
        canChangeCopyRequiresWriterPermission: Schema.optional(Schema.Boolean),
        canComment: Schema.optional(Schema.Boolean),
        canMoveChildrenWithinDrive: Schema.optional(Schema.Boolean),
        canEdit: Schema.optional(Schema.Boolean),
        canTrashChildren: Schema.optional(Schema.Boolean),
        canChangeSecurityUpdateEnabled: Schema.optional(Schema.Boolean),
        canAddChildren: Schema.optional(Schema.Boolean),
        canMoveChildrenWithinTeamDrive: Schema.optional(Schema.Boolean),
        canModifyOwnerContentRestriction: Schema.optional(Schema.Boolean),
        canDownload: Schema.optional(Schema.Boolean),
        canMoveItemOutOfDrive: Schema.optional(Schema.Boolean),
        canMoveItemIntoTeamDrive: Schema.optional(Schema.Boolean),
        canEnableInheritedPermissions: Schema.optional(Schema.Boolean),
      }),
    ),
    title: Schema.optional(Schema.String),
    embedLink: Schema.optional(Schema.String),
    editable: Schema.optional(Schema.Boolean),
    videoMediaMetadata: Schema.optional(
      Schema.Struct({
        height: Schema.optional(Schema.Number),
        durationMillis: Schema.optional(Schema.String),
        width: Schema.optional(Schema.Number),
      }),
    ),
    imageMediaMetadata: Schema.optional(
      Schema.Struct({
        date: Schema.optional(Schema.String),
        flashUsed: Schema.optional(Schema.Boolean),
        lens: Schema.optional(Schema.String),
        whiteBalance: Schema.optional(Schema.String),
        sensor: Schema.optional(Schema.String),
        focalLength: Schema.optional(Schema.Number),
        width: Schema.optional(Schema.Number),
        location: Schema.optional(
          Schema.Struct({
            longitude: Schema.optional(Schema.Number),
            altitude: Schema.optional(Schema.Number),
            latitude: Schema.optional(Schema.Number),
          }),
        ),
        exposureMode: Schema.optional(Schema.String),
        cameraModel: Schema.optional(Schema.String),
        maxApertureValue: Schema.optional(Schema.Number),
        rotation: Schema.optional(Schema.Number),
        exposureBias: Schema.optional(Schema.Number),
        meteringMode: Schema.optional(Schema.String),
        cameraMake: Schema.optional(Schema.String),
        colorSpace: Schema.optional(Schema.String),
        aperture: Schema.optional(Schema.Number),
        exposureTime: Schema.optional(Schema.Number),
        subjectDistance: Schema.optional(Schema.Number),
        height: Schema.optional(Schema.Number),
        isoSpeed: Schema.optional(Schema.Number),
      }),
    ),
    selfLink: Schema.optional(Schema.String),
    ownerNames: Schema.optional(Schema.Array(Schema.String)),
    thumbnailVersion: Schema.optional(Schema.String),
    lastViewedByMeDate: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Array(Property)),
    version: Schema.optional(Schema.String),
    spaces: Schema.optional(Schema.Array(Schema.String)),
    canComment: Schema.optional(Schema.Boolean),
    trashingUser: Schema.optional(User),
    owners: Schema.optional(Schema.Array(User)),
    teamDriveId: Schema.optional(Schema.String),
    modifiedDate: Schema.optional(Schema.String),
    modifiedByMeDate: Schema.optional(Schema.String),
    copyRequiresWriterPermission: Schema.optional(Schema.Boolean),
    etag: Schema.optional(Schema.String),
    copyable: Schema.optional(Schema.Boolean),
    quotaBytesUsed: Schema.optional(Schema.String),
    defaultOpenWithLink: Schema.optional(Schema.String),
    permissions: Schema.optional(Schema.Array(Permission)),
    clientEncryptionDetails: Schema.optional(ClientEncryptionDetails),
    shareable: Schema.optional(Schema.Boolean),
    createdDate: Schema.optional(Schema.String),
    sharingUser: Schema.optional(User),
    ownedByMe: Schema.optional(Schema.Boolean),
    shortcutDetails: Schema.optional(
      Schema.Struct({
        targetMimeType: Schema.optional(Schema.String),
        targetResourceKey: Schema.optional(Schema.String),
        targetId: Schema.optional(Schema.String),
      }),
    ),
    driveId: Schema.optional(Schema.String),
    webViewLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    writersCanShare: Schema.optional(Schema.Boolean),
    appDataContents: Schema.optional(Schema.Boolean),
    downloadUrl: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    originalFilename: Schema.optional(Schema.String),
    lastModifyingUser: Schema.optional(User),
    openWithLinks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    labels: Schema.optional(
      Schema.Struct({
        viewed: Schema.optional(Schema.Boolean),
        restricted: Schema.optional(Schema.Boolean),
        modified: Schema.optional(Schema.Boolean),
        starred: Schema.optional(Schema.Boolean),
        hidden: Schema.optional(Schema.Boolean),
        trashed: Schema.optional(Schema.Boolean),
      }),
    ),
    canReadRevisions: Schema.optional(Schema.Boolean),
    shared: Schema.optional(Schema.Boolean),
    thumbnail: Schema.optional(
      Schema.Struct({
        image: Schema.optional(Schema.String),
        mimeType: Schema.optional(Schema.String),
      }),
    ),
    lastModifyingUserName: Schema.optional(Schema.String),
    fileExtension: Schema.optional(Schema.String),
    iconLink: Schema.optional(Schema.String),
    hasThumbnail: Schema.optional(Schema.Boolean),
    mimeType: Schema.optional(Schema.String),
    explicitlyTrashed: Schema.optional(Schema.Boolean),
    hasAugmentedPermissions: Schema.optional(Schema.Boolean),
    sha1Checksum: Schema.optional(Schema.String),
    exportLinks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    alternateLink: Schema.optional(Schema.String),
    inheritedPermissionsDisabled: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    fileSize: Schema.optional(Schema.String),
    webContentLink: Schema.optional(Schema.String),
    headRevisionId: Schema.optional(Schema.String),
    sha256Checksum: Schema.optional(Schema.String),
    folderColorRgb: Schema.optional(Schema.String),
    resourceKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "File" });

export interface TeamDrive {
  /** A short-lived link to this Team Drive's background image. */
  backgroundImageLink?: string;
  /** An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on `drive.teamdrives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set. */
  backgroundImageFile?: {
    xCoordinate?: number;
    yCoordinate?: number;
    width?: number;
    id?: string;
  };
  /** The ID of this Team Drive which is also the ID of the top level folder of this Team Drive. */
  id?: string;
  /** The time at which the Team Drive was created (RFC 3339 date-time). */
  createdDate?: string;
  /** The ID of the theme from which the background image and color will be set. The set of possible `teamDriveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.teamdrives.insert` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`. */
  themeId?: string;
  /** The name of this Team Drive. */
  name?: string;
  /** The color of this Team Drive as an RGB hex string. It can only be set on a `drive.teamdrives.update` request that does not set `themeId`. */
  colorRgb?: string;
  /** A set of restrictions that apply to this Team Drive or items inside this Team Drive. */
  restrictions?: {
    domainUsersOnly?: boolean;
    sharingFoldersRequiresOrganizerPermission?: boolean;
    copyRequiresWriterPermission?: boolean;
    adminManagedRestrictions?: boolean;
    teamMembersOnly?: boolean;
  };
  /** Capabilities the current user has on this Team Drive. */
  capabilities?: {
    canComment?: boolean;
    canResetTeamDriveRestrictions?: boolean;
    canDeleteChildren?: boolean;
    canDeleteTeamDrive?: boolean;
    canListChildren?: boolean;
    canManageMembers?: boolean;
    canShare?: boolean;
    canChangeTeamMembersOnlyRestriction?: boolean;
    canRename?: boolean;
    canCopy?: boolean;
    canRemoveChildren?: boolean;
    canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean;
    canRenameTeamDrive?: boolean;
    canAddChildren?: boolean;
    canDownload?: boolean;
    canChangeDomainUsersOnlyRestriction?: boolean;
    canReadRevisions?: boolean;
    canChangeTeamDriveBackground?: boolean;
    canChangeCopyRequiresWriterPermissionRestriction?: boolean;
    canTrashChildren?: boolean;
    canEdit?: boolean;
  };
  /** This is always `drive#teamDrive` */
  kind?: string;
  /** The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`. */
  orgUnitId?: string;
}

export const TeamDrive: Schema.Codec<TeamDrive> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backgroundImageLink: Schema.optional(Schema.String),
    backgroundImageFile: Schema.optional(
      Schema.Struct({
        xCoordinate: Schema.optional(Schema.Number),
        yCoordinate: Schema.optional(Schema.Number),
        width: Schema.optional(Schema.Number),
        id: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    createdDate: Schema.optional(Schema.String),
    themeId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    colorRgb: Schema.optional(Schema.String),
    restrictions: Schema.optional(
      Schema.Struct({
        domainUsersOnly: Schema.optional(Schema.Boolean),
        sharingFoldersRequiresOrganizerPermission: Schema.optional(
          Schema.Boolean,
        ),
        copyRequiresWriterPermission: Schema.optional(Schema.Boolean),
        adminManagedRestrictions: Schema.optional(Schema.Boolean),
        teamMembersOnly: Schema.optional(Schema.Boolean),
      }),
    ),
    capabilities: Schema.optional(
      Schema.Struct({
        canComment: Schema.optional(Schema.Boolean),
        canResetTeamDriveRestrictions: Schema.optional(Schema.Boolean),
        canDeleteChildren: Schema.optional(Schema.Boolean),
        canDeleteTeamDrive: Schema.optional(Schema.Boolean),
        canListChildren: Schema.optional(Schema.Boolean),
        canManageMembers: Schema.optional(Schema.Boolean),
        canShare: Schema.optional(Schema.Boolean),
        canChangeTeamMembersOnlyRestriction: Schema.optional(Schema.Boolean),
        canRename: Schema.optional(Schema.Boolean),
        canCopy: Schema.optional(Schema.Boolean),
        canRemoveChildren: Schema.optional(Schema.Boolean),
        canChangeSharingFoldersRequiresOrganizerPermissionRestriction:
          Schema.optional(Schema.Boolean),
        canRenameTeamDrive: Schema.optional(Schema.Boolean),
        canAddChildren: Schema.optional(Schema.Boolean),
        canDownload: Schema.optional(Schema.Boolean),
        canChangeDomainUsersOnlyRestriction: Schema.optional(Schema.Boolean),
        canReadRevisions: Schema.optional(Schema.Boolean),
        canChangeTeamDriveBackground: Schema.optional(Schema.Boolean),
        canChangeCopyRequiresWriterPermissionRestriction: Schema.optional(
          Schema.Boolean,
        ),
        canTrashChildren: Schema.optional(Schema.Boolean),
        canEdit: Schema.optional(Schema.Boolean),
      }),
    ),
    kind: Schema.optional(Schema.String),
    orgUnitId: Schema.optional(Schema.String),
  }).annotate({ identifier: "TeamDrive" });

export interface Change {
  /** Deprecated: Use `changeType` instead. */
  type?: string;
  /** The updated state of the file. Present if the type is file and the file has not been removed from this list of changes. */
  file?: File;
  /** The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted. */
  drive?: Drive;
  /** A link back to this change. */
  selfLink?: string;
  /** Deprecated: Use `drive` instead. */
  teamDrive?: TeamDrive;
  /** The ID of the shared drive associated with this change. */
  driveId?: string;
  /** This is always `drive#change`. */
  kind?: string;
  /** The time of this modification. */
  modificationDate?: string;
  /** Deprecated: Use `driveId` instead. */
  teamDriveId?: string;
  /** Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access. */
  deleted?: boolean;
  /** The ID of the change. */
  id?: string;
  /** The ID of the file associated with this change. */
  fileId?: string;
  /** The type of the change. Possible values are `file` and `drive`. */
  changeType?: string;
}

export const Change: Schema.Codec<Change> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    file: Schema.optional(File),
    drive: Schema.optional(Drive),
    selfLink: Schema.optional(Schema.String),
    teamDrive: Schema.optional(TeamDrive),
    driveId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    modificationDate: Schema.optional(Schema.String),
    teamDriveId: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    fileId: Schema.optional(Schema.String),
    changeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Change" });

export interface ChangeList {
  /** The starting page token for future changes. This will be present only if the end of the current changes list has been reached. */
  newStartPageToken?: string;
  /** A link back to this list. */
  selfLink?: string;
  /** The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
  nextPageToken?: string;
  /** The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
  items?: ReadonlyArray<Change>;
  /** This is always `drive#changeList`. */
  kind?: string;
  /** The current largest change ID. */
  largestChangeId?: string;
  /** The ETag of the list. */
  etag?: string;
  /** A link to the next page of changes. */
  nextLink?: string;
}

export const ChangeList: Schema.Codec<ChangeList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newStartPageToken: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Change)),
    kind: Schema.optional(Schema.String),
    largestChangeId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    nextLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChangeList" });

export interface ParentList {
  /** A link back to this list. */
  selfLink?: string;
  /** This is always `drive#parentList`. */
  kind?: string;
  /** The ETag of the list. */
  etag?: string;
  /** The list of parents. */
  items?: ReadonlyArray<ParentReference>;
}

export const ParentList: Schema.Codec<ParentList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selfLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(ParentReference)),
  }).annotate({ identifier: "ParentList" });

export interface CommentReply {
  /** The action this reply performed to the parent comment. When creating a new reply this is the action to be perform tSo the parent comment. Possible values are: * `resolve` - To resolve a comment. * `reopen` - To reopen (un-resolve) a comment. */
  verb?: string;
  /** HTML formatted content for this reply. */
  htmlContent?: string;
  /** This is always drive#commentReply. */
  kind?: string;
  /** The ID of the reply. */
  replyId?: string;
  /** The user who wrote this reply. */
  author?: User;
  /** The date when this reply was last modified. */
  modifiedDate?: string;
  /** Whether this reply has been deleted. If a reply has been deleted the content will be cleared and this will only represent a reply that once existed. */
  deleted?: boolean;
  /** The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to make edits to a reply's content. This field is required on inserts if no verb is specified (resolve/reopen). */
  content?: string;
  /** The date when this reply was first created. */
  createdDate?: string;
}

export const CommentReply: Schema.Codec<CommentReply> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    htmlContent: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    replyId: Schema.optional(Schema.String),
    author: Schema.optional(User),
    modifiedDate: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    content: Schema.optional(Schema.String),
    createdDate: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommentReply" });

export interface Comment {
  /** This is always drive#comment. */
  kind?: string;
  /** A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Manage comments and replies](https://developers.google.com/workspace/drive/api/v3/manage-comments). */
  anchor?: string;
  /** The status of this comment. Status can be changed by posting a reply to a comment with the desired status. Possible values are: * `open` - The comment is still open. * `resolved` - The comment has been resolved by one of its replies. */
  status?: string;
  /** The ID of the comment. */
  commentId?: string;
  /** The file which this comment is addressing. */
  fileId?: string;
  /** Whether this comment has been deleted. If a comment has been deleted the content will be cleared and this will only represent a comment that once existed. */
  deleted?: boolean;
  /** The plain text content used to create this comment. This is not HTML safe and should only be used as a starting point to make edits to a comment's content. */
  content?: string;
  /** The date when this comment or any of its replies were last modified. */
  modifiedDate?: string;
  /** The title of the file which this comment is addressing. */
  fileTitle?: string;
  /** Context of a file which is being commented on. */
  context?: { type?: string; value?: string };
  /** Replies to this post. */
  replies?: ReadonlyArray<CommentReply>;
  /** HTML formatted content for this comment. */
  htmlContent?: string;
  /** The date when this comment was first created. */
  createdDate?: string;
  /** The user who wrote this comment. */
  author?: User;
  /** A link back to this comment. */
  selfLink?: string;
}

export const Comment: Schema.Codec<Comment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    anchor: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    commentId: Schema.optional(Schema.String),
    fileId: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    content: Schema.optional(Schema.String),
    modifiedDate: Schema.optional(Schema.String),
    fileTitle: Schema.optional(Schema.String),
    context: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
      }),
    ),
    replies: Schema.optional(Schema.Array(CommentReply)),
    htmlContent: Schema.optional(Schema.String),
    createdDate: Schema.optional(Schema.String),
    author: Schema.optional(User),
    selfLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "Comment" });

export interface App {
  /** The url to create a new file with this app. */
  createUrl?: string;
  /** Whether this app supports importing from Docs Editors. */
  supportsImport?: boolean;
  /** Whether this app supports creating new objects. */
  supportsCreate?: boolean;
  /** Whether the app is installed. */
  installed?: boolean;
  /** A long description of the app. */
  longDescription?: string;
  /** Whether the app is authorized to access data on the user's Drive. */
  authorized?: boolean;
  /** The list of secondary mime types. */
  secondaryMimeTypes?: ReadonlyArray<string>;
  /** Whether the app is selected as the default handler for the types it supports. */
  useByDefault?: boolean;
  /** A short description of the app. */
  shortDescription?: string;
  /** The ID of the product listing for this app. */
  productId?: string;
  /** Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user's drive. */
  hasDriveWideScope?: boolean;
  /** Whether this app supports opening more than one file. */
  supportsMultiOpen?: boolean;
  /** This is always `drive#app`. */
  kind?: string;
  /** Whether this app supports creating new files when offline. */
  supportsOfflineCreate?: boolean;
  /** The type of object this app creates (e.g. Chart). If empty, the app name should be used instead. */
  objectType?: string;
  /** The list of secondary file extensions. */
  secondaryFileExtensions?: ReadonlyArray<string>;
  /** The template url for opening files with this app. The template will contain `{ids}` and/or `{exportIds}` to be replaced by the actual file ids. See Open Files for the full documentation. */
  openUrlTemplate?: string;
  /** A link to the product listing for this app. */
  productUrl?: string;
  /** The list of primary mime types. */
  primaryMimeTypes?: ReadonlyArray<string>;
  /** The name of the app. */
  name?: string;
  /** The template url to create a new file with this app in a given folder. The template will contain {folderId} to be replaced by the folder to create the new file in. */
  createInFolderTemplate?: string;
  /** The list of primary file extensions. */
  primaryFileExtensions?: ReadonlyArray<string>;
  /** The ID of the app. */
  id?: string;
  /** The various icons for the app. */
  icons?: ReadonlyArray<{ category?: string; iconUrl?: string; size?: number }>;
}

export const App: Schema.Codec<App> = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    createUrl: Schema.optional(Schema.String),
    supportsImport: Schema.optional(Schema.Boolean),
    supportsCreate: Schema.optional(Schema.Boolean),
    installed: Schema.optional(Schema.Boolean),
    longDescription: Schema.optional(Schema.String),
    authorized: Schema.optional(Schema.Boolean),
    secondaryMimeTypes: Schema.optional(Schema.Array(Schema.String)),
    useByDefault: Schema.optional(Schema.Boolean),
    shortDescription: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
    hasDriveWideScope: Schema.optional(Schema.Boolean),
    supportsMultiOpen: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    supportsOfflineCreate: Schema.optional(Schema.Boolean),
    objectType: Schema.optional(Schema.String),
    secondaryFileExtensions: Schema.optional(Schema.Array(Schema.String)),
    openUrlTemplate: Schema.optional(Schema.String),
    productUrl: Schema.optional(Schema.String),
    primaryMimeTypes: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    createInFolderTemplate: Schema.optional(Schema.String),
    primaryFileExtensions: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
    icons: Schema.optional(
      Schema.Array(
        Schema.Struct({
          category: Schema.optional(Schema.String),
          iconUrl: Schema.optional(Schema.String),
          size: Schema.optional(Schema.Number),
        }),
      ),
    ),
  },
).annotate({ identifier: "App" });

export interface Revision {
  /** Whether this revision is published. This is only populated and can only be modified for Docs Editors files. */
  published?: boolean;
  /** Whether subsequent revisions will be automatically republished. This is only populated and can only be modified for Docs Editors files. */
  publishAuto?: boolean;
  /** Output only. The ETag of the revision. */
  etag?: string;
  /** Output only. The size of the revision in bytes. This will only be populated on files with content stored in Drive. */
  fileSize?: string;
  /** Output only. A link back to this revision. */
  selfLink?: string;
  /** Output only. A link to the published revision. This is only populated for Docs Editors files. */
  publishedLink?: string;
  /** Output only. Name of the last user to modify this revision. */
  lastModifyingUserName?: string;
  /** Output only. Links for exporting Docs Editors files to specific formats. */
  exportLinks?: Record<string, string>;
  /** Output only. The MIME type of the revision. */
  mimeType?: string;
  /** Output only. This is always `drive#revision`. */
  kind?: string;
  /** Output only. An MD5 checksum for the content of this revision. This will only be populated on files with content stored in Drive. */
  md5Checksum?: string;
  /** Output only. The last user to modify this revision. This field is only populated when the last modification was performed by a signed-in user. */
  lastModifyingUser?: User;
  /** Whether this revision is pinned to prevent automatic purging. If not set, the revision is automatically purged 30 days after newer content is uploaded. This field can only be modified on files with content stored in Drive, excluding Docs Editors files. Revisions can also be pinned when they are created through the drive.files.insert/update/copy by using the pinned query parameter. Pinned revisions are stored indefinitely using additional storage quota, up to a maximum of 200 revisions. */
  pinned?: boolean;
  /** Output only. The ID of the revision. */
  id?: string;
  /** Output only. Short term download URL for the file. This will only be populated on files with content stored in Drive. */
  downloadUrl?: string;
  /** Output only. The original filename when this revision was created. This will only be populated on files with content stored in Drive. */
  originalFilename?: string;
  /** Last time this revision was modified (formatted RFC 3339 timestamp). */
  modifiedDate?: string;
  /** Whether this revision is published outside the domain. This is only populated and can only be modified for Docs Editors files. */
  publishedOutsideDomain?: boolean;
}

export const Revision: Schema.Codec<Revision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    published: Schema.optional(Schema.Boolean),
    publishAuto: Schema.optional(Schema.Boolean),
    etag: Schema.optional(Schema.String),
    fileSize: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    publishedLink: Schema.optional(Schema.String),
    lastModifyingUserName: Schema.optional(Schema.String),
    exportLinks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    mimeType: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    md5Checksum: Schema.optional(Schema.String),
    lastModifyingUser: Schema.optional(User),
    pinned: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    downloadUrl: Schema.optional(Schema.String),
    originalFilename: Schema.optional(Schema.String),
    modifiedDate: Schema.optional(Schema.String),
    publishedOutsideDomain: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Revision" });

export interface StartPageToken {
  /** The starting page token for listing changes. */
  startPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"drive#startPageToken"`. */
  kind?: string;
}

export const StartPageToken: Schema.Codec<StartPageToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "StartPageToken" });

export interface TeamDriveList {
  /** The page token for the next page of Team Drives. */
  nextPageToken?: string;
  /** The list of Team Drives. */
  items?: ReadonlyArray<TeamDrive>;
  /** This is always `drive#teamDriveList` */
  kind?: string;
}

export const TeamDriveList: Schema.Codec<TeamDriveList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(TeamDrive)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "TeamDriveList" });

export interface LabelFieldModification {
  /** The ID of the field to be modified. */
  fieldId?: string;
  /** Replaces the value of a dateString Field with these new values. The string must be in the RFC 3339 full-date format: YYYY-MM-DD. */
  setDateValues?: ReadonlyArray<string>;
  /** This is always `drive#labelFieldModification`. */
  kind?: string;
  /** Replaces a `user` field with these new values. The values must be valid email addresses. */
  setUserValues?: ReadonlyArray<string>;
  /** Sets the value of a `text` field. */
  setTextValues?: ReadonlyArray<string>;
  /** Replaces the value of an `integer` field with these new values. */
  setIntegerValues?: ReadonlyArray<string>;
  /** Replaces a `selection` field with these new values. */
  setSelectionValues?: ReadonlyArray<string>;
  /** Unsets the values for this field. */
  unsetValues?: boolean;
}

export const LabelFieldModification: Schema.Codec<LabelFieldModification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldId: Schema.optional(Schema.String),
    setDateValues: Schema.optional(Schema.Array(Schema.String)),
    kind: Schema.optional(Schema.String),
    setUserValues: Schema.optional(Schema.Array(Schema.String)),
    setTextValues: Schema.optional(Schema.Array(Schema.String)),
    setIntegerValues: Schema.optional(Schema.Array(Schema.String)),
    setSelectionValues: Schema.optional(Schema.Array(Schema.String)),
    unsetValues: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "LabelFieldModification" });

export interface LabelModification {
  /** The list of modifications to this label's fields. */
  fieldModifications?: ReadonlyArray<LabelFieldModification>;
  /** If true, the label will be removed from the file. */
  removeLabel?: boolean;
  /** The ID of the label to modify. */
  labelId?: string;
  /** This is always `drive#labelModification`. */
  kind?: string;
}

export const LabelModification: Schema.Codec<LabelModification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldModifications: Schema.optional(Schema.Array(LabelFieldModification)),
    removeLabel: Schema.optional(Schema.Boolean),
    labelId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "LabelModification" });

export interface ModifyLabelsRequest {
  /** This is always `drive#modifyLabelsRequest`. */
  kind?: string;
  /** The list of modifications to apply to the labels on the file. */
  labelModifications?: ReadonlyArray<LabelModification>;
}

export const ModifyLabelsRequest: Schema.Codec<ModifyLabelsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    labelModifications: Schema.optional(Schema.Array(LabelModification)),
  }).annotate({ identifier: "ModifyLabelsRequest" });

export interface ModifyLabelsResponse {
  /** This is always `drive#modifyLabelsResponse` */
  kind?: string;
  /** The list of labels which were added or updated by the request. */
  modifiedLabels?: ReadonlyArray<Label>;
}

export const ModifyLabelsResponse: Schema.Codec<ModifyLabelsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    modifiedLabels: Schema.optional(Schema.Array(Label)),
  }).annotate({ identifier: "ModifyLabelsResponse" });

export interface RevisionList {
  /** A link back to this list. */
  selfLink?: string;
  /** The page token for the next page of revisions. This field will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded and pagination should be restarted from the first page of results. */
  nextPageToken?: string;
  /** The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
  items?: ReadonlyArray<Revision>;
  /** This is always `drive#revisionList`. */
  kind?: string;
  /** The ETag of the list. */
  etag?: string;
}

export const RevisionList: Schema.Codec<RevisionList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selfLink: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Revision)),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "RevisionList" });

export interface AppList {
  /** A link back to this list. */
  selfLink?: string;
  /** The list of apps. */
  items?: ReadonlyArray<App>;
  /** List of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest). */
  defaultAppIds?: ReadonlyArray<string>;
  /** This is always `drive#appList`. */
  kind?: string;
  /** The ETag of the list. */
  etag?: string;
}

export const AppList: Schema.Codec<AppList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selfLink: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(App)),
    defaultAppIds: Schema.optional(Schema.Array(Schema.String)),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppList" });

export interface ChildReference {
  /** Output only. A link back to this reference. */
  selfLink?: string;
  /** The ID of the child. */
  id?: string;
  /** Output only. This is always `drive#childReference`. */
  kind?: string;
  /** Output only. A link to the child. */
  childLink?: string;
}

export const ChildReference: Schema.Codec<ChildReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selfLink: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    childLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChildReference" });

export interface ChildList {
  /** The page token for the next page of children. This will be absent if the end of the children list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
  nextPageToken?: string;
  /** The list of children. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
  items?: ReadonlyArray<ChildReference>;
  /** A link back to this list. */
  selfLink?: string;
  /** The ETag of the list. */
  etag?: string;
  /** A link to the next page of children. */
  nextLink?: string;
  /** This is always `drive#childList`. */
  kind?: string;
}

export const ChildList: Schema.Codec<ChildList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(ChildReference)),
    selfLink: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    nextLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChildList" });

export interface LabelList {
  /** The list of labels. */
  items?: ReadonlyArray<Label>;
  /** The page token for the next page of labels. This field will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
  nextPageToken?: string;
  /** This is always `drive#labelList` */
  kind?: string;
}

export const LabelList: Schema.Codec<LabelList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Label)),
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "LabelList" });

export interface GenerateCseTokenResponse {
  /** The fileId for which the JWT was generated. */
  fileId?: string;
  /** Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#generateCseTokenResponse"`. */
  kind?: string;
  /** Name of the KACLs that the returned KACLs ID points to. */
  currentKaclsName?: string;
  /** The current Key ACL Service (KACLS) ID associated with the JWT. */
  currentKaclsId?: string;
  /** The signed JSON Web Token (JWT) for the file. */
  jwt?: string;
}

export const GenerateCseTokenResponse: Schema.Codec<GenerateCseTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    currentKaclsName: Schema.optional(Schema.String),
    currentKaclsId: Schema.optional(Schema.String),
    jwt: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateCseTokenResponse" });

export interface CommentReplyList {
  /** The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
  items?: ReadonlyArray<CommentReply>;
  /** The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
  nextPageToken?: string;
  /** A link back to this list. */
  selfLink?: string;
  /** A link to the next page of replies. */
  nextLink?: string;
  /** This is always `drive#commentReplyList`. */
  kind?: string;
}

export const CommentReplyList: Schema.Codec<CommentReplyList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(CommentReply)),
    nextPageToken: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    nextLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommentReplyList" });

export interface PermissionList {
  /** The ETag of the list. */
  etag?: string;
  /** This is always `drive#permissionList`. */
  kind?: string;
  /** The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
  nextPageToken?: string;
  /** The list of permissions. */
  items?: ReadonlyArray<Permission>;
  /** A link back to this list. */
  selfLink?: string;
}

export const PermissionList: Schema.Codec<PermissionList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Permission)),
    selfLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "PermissionList" });

export interface PropertyList {
  /** The link back to this list. */
  selfLink?: string;
  /** This is always `drive#propertyList`. */
  kind?: string;
  /** The ETag of the list. */
  etag?: string;
  /** The list of properties. */
  items?: ReadonlyArray<Property>;
}

export const PropertyList: Schema.Codec<PropertyList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selfLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Property)),
  }).annotate({ identifier: "PropertyList" });

export interface Channel {
  /** The address where notifications are delivered for this channel. */
  address?: string;
  /** A Boolean value to indicate whether payload is wanted. Optional. */
  payload?: boolean;
  /** An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
  resourceId?: string;
  /** A UUID or similar unique string that identifies this channel. */
  id?: string;
  /** Additional parameters controlling delivery channel behavior. Optional. */
  params?: Record<string, string>;
  /** A version-specific identifier for the watched resource. */
  resourceUri?: string;
  /** An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
  token?: string;
  /** The type of delivery mechanism used for this channel. Valid values are "web_hook" or "webhook". */
  type?: string;
  /** Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`. */
  kind?: string;
  /** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
  expiration?: string;
}

export const Channel: Schema.Codec<Channel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Boolean),
    resourceId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    params: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    resourceUri: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    expiration: Schema.optional(Schema.String),
  }).annotate({ identifier: "Channel" });

export interface DriveList {
  /** This is always `drive#driveList` */
  kind?: string;
  /** The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
  nextPageToken?: string;
  /** The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
  items?: ReadonlyArray<Drive>;
}

export const DriveList: Schema.Codec<DriveList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Drive)),
  }).annotate({ identifier: "DriveList" });

export interface PermissionId {
  /** This is always `drive#permissionId`. */
  kind?: string;
  /** The permission ID. */
  id?: string;
}

export const PermissionId: Schema.Codec<PermissionId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "PermissionId" });

export interface FileList {
  /** A link back to this list. */
  selfLink?: string;
  /** The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
  nextPageToken?: string;
  /** The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
  items?: ReadonlyArray<File>;
  /** This is always `drive#fileList`. */
  kind?: string;
  /** A link to the next page of files. */
  nextLink?: string;
  /** The ETag of the list. */
  etag?: string;
  /** Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the "allDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as "default" or "drive". */
  incompleteSearch?: boolean;
}

export const FileList: Schema.Codec<FileList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selfLink: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(File)),
    kind: Schema.optional(Schema.String),
    nextLink: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    incompleteSearch: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "FileList" });

export interface CommentList {
  /** A link to the next page of comments. */
  nextLink?: string;
  /** This is always drive#commentList. */
  kind?: string;
  /** The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
  items?: ReadonlyArray<Comment>;
  /** The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
  nextPageToken?: string;
  /** A link back to this list. */
  selfLink?: string;
}

export const CommentList: Schema.Codec<CommentList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Comment)),
    nextPageToken: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommentList" });

export interface GeneratedIds {
  /** The IDs generated for the requesting user in the specified space. */
  ids?: ReadonlyArray<string>;
  /** The type of file that can be created with these IDs. */
  space?: string;
  /** This is always `drive#generatedIds` */
  kind?: string;
}

export const GeneratedIds: Schema.Codec<GeneratedIds> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ids: Schema.optional(Schema.Array(Schema.String)),
    space: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "GeneratedIds" });

export interface About {
  /** The amount of storage quota used by different Google services. */
  quotaBytesByService?: ReadonlyArray<{
    serviceName?: string;
    bytesUsed?: string;
  }>;
  /** A list of themes that are supported for shared drives. */
  driveThemes?: ReadonlyArray<{
    id?: string;
    backgroundImageLink?: string;
    colorRgb?: string;
  }>;
  /** List of max upload sizes for each file type. The most specific type takes precedence. */
  maxUploadSizes?: ReadonlyArray<{ type?: string; size?: string }>;
  /** This is always `drive#about`. */
  kind?: string;
  /** The palette of allowable folder colors as RGB hex strings. */
  folderColorPalette?: ReadonlyArray<string>;
  /** Deprecated: Does not granularly represent allowlisted domains or Trust Rules. The domain sharing policy for the current user. Possible values are: * `allowed` * `allowedWithWarning` * `incomingOnly` * `disallowed` Note that if the user is enrolled in Trust Rules, `disallowed` will always be returned. If sharing is restricted to allowlisted domains, either `incomingOnly` or `allowedWithWarning` will be returned, depending on whether receiving files from outside the allowlisted domains is permitted. */
  domainSharingPolicy?: string;
  /** The current user's ID as visible in the permissions collection. */
  permissionId?: string;
  /** Deprecated: Use `driveThemes` instead. */
  teamDriveThemes?: ReadonlyArray<{
    colorRgb?: string;
    id?: string;
    backgroundImageLink?: string;
  }>;
  /** A boolean indicating whether the authenticated app is installed by the authenticated user. */
  isCurrentAppInstalled?: boolean;
  /** The total number of quota bytes. This is only relevant when quotaType is LIMITED. */
  quotaBytesTotal?: string;
  /** Information about supported additional roles per file type. The most specific type takes precedence. */
  additionalRoleInfo?: ReadonlyArray<{
    type?: string;
    roleSets?: ReadonlyArray<{
      additionalRoles?: ReadonlyArray<string>;
      primaryRole?: string;
    }>;
  }>;
  /** A link back to this item. */
  selfLink?: string;
  /** The id of the root folder. */
  rootFolderId?: string;
  /** The name of the current user. */
  name?: string;
  /** The user's language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/). */
  languageCode?: string;
  /** The authenticated user. */
  user?: User;
  /** The allowable export formats. */
  exportFormats?: ReadonlyArray<{
    source?: string;
    targets?: ReadonlyArray<string>;
  }>;
  /** Whether the user can create shared drives. */
  canCreateDrives?: boolean;
  /** The allowable import formats. */
  importFormats?: ReadonlyArray<{
    source?: string;
    targets?: ReadonlyArray<string>;
  }>;
  /** Deprecated: Use `canCreateDrives` instead. */
  canCreateTeamDrives?: boolean;
  /** The number of remaining change ids, limited to no more than 2500. */
  remainingChangeIds?: string;
  /** List of additional features enabled on this account. */
  features?: ReadonlyArray<{ featureRate?: number; featureName?: string }>;
  /** The largest change id. */
  largestChangeId?: string;
  /** The ETag of the item. */
  etag?: string;
  /** The type of the user's storage quota. Possible values are: * `LIMITED` * `UNLIMITED` */
  quotaType?: string;
  /** The number of quota bytes used by Google Drive. */
  quotaBytesUsed?: string;
  /** The number of quota bytes used by all Google apps (Drive, Picasa, etc.). */
  quotaBytesUsedAggregate?: string;
  /** The number of quota bytes used by trashed items. */
  quotaBytesUsedInTrash?: string;
}

export const About: Schema.Codec<About> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quotaBytesByService: Schema.optional(
      Schema.Array(
        Schema.Struct({
          serviceName: Schema.optional(Schema.String),
          bytesUsed: Schema.optional(Schema.String),
        }),
      ),
    ),
    driveThemes: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          backgroundImageLink: Schema.optional(Schema.String),
          colorRgb: Schema.optional(Schema.String),
        }),
      ),
    ),
    maxUploadSizes: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          size: Schema.optional(Schema.String),
        }),
      ),
    ),
    kind: Schema.optional(Schema.String),
    folderColorPalette: Schema.optional(Schema.Array(Schema.String)),
    domainSharingPolicy: Schema.optional(Schema.String),
    permissionId: Schema.optional(Schema.String),
    teamDriveThemes: Schema.optional(
      Schema.Array(
        Schema.Struct({
          colorRgb: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          backgroundImageLink: Schema.optional(Schema.String),
        }),
      ),
    ),
    isCurrentAppInstalled: Schema.optional(Schema.Boolean),
    quotaBytesTotal: Schema.optional(Schema.String),
    additionalRoleInfo: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          roleSets: Schema.optional(
            Schema.Array(
              Schema.Struct({
                additionalRoles: Schema.optional(Schema.Array(Schema.String)),
                primaryRole: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
    selfLink: Schema.optional(Schema.String),
    rootFolderId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    user: Schema.optional(User),
    exportFormats: Schema.optional(
      Schema.Array(
        Schema.Struct({
          source: Schema.optional(Schema.String),
          targets: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    canCreateDrives: Schema.optional(Schema.Boolean),
    importFormats: Schema.optional(
      Schema.Array(
        Schema.Struct({
          source: Schema.optional(Schema.String),
          targets: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    canCreateTeamDrives: Schema.optional(Schema.Boolean),
    remainingChangeIds: Schema.optional(Schema.String),
    features: Schema.optional(
      Schema.Array(
        Schema.Struct({
          featureRate: Schema.optional(Schema.Number),
          featureName: Schema.optional(Schema.String),
        }),
      ),
    ),
    largestChangeId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    quotaType: Schema.optional(Schema.String),
    quotaBytesUsed: Schema.optional(Schema.String),
    quotaBytesUsedAggregate: Schema.optional(Schema.String),
    quotaBytesUsedInTrash: Schema.optional(Schema.String),
  }).annotate({ identifier: "About" });

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

export interface WatchChangesRequest {
  /** Whether both My Drive and shared drive items should be included in results. */
  includeItemsFromAllDrives?: boolean;
  /** The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response or to the response from the getStartPageToken method. */
  pageToken?: string;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. */
  includeDeleted?: boolean;
  /** Deprecated: Use `pageToken` instead. */
  startChangeId?: string;
  /** Deprecated: Use `includeItemsFromAllDrives` instead. */
  includeTeamDriveItems?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** A comma-separated list of spaces to query. Supported values are `drive`, `appDataFolder` and `photos`. */
  spaces?: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. */
  driveId?: string;
  /** Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. */
  includeCorpusRemovals?: boolean;
  /** Maximum number of changes to return. */
  maxResults?: number;
  /** Deprecated: Use `driveId` instead. */
  teamDriveId?: string;
  /** Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result. */
  includeSubscribed?: boolean;
  /** Request body */
  body?: Channel;
}

export const WatchChangesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includeItemsFromAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeItemsFromAllDrives"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
  includeDeleted: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeDeleted"),
  ),
  startChangeId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("startChangeId"),
  ),
  includeTeamDriveItems: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeTeamDriveItems"),
  ),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  spaces: Schema.optional(Schema.String).pipe(T.HttpQuery("spaces")),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  driveId: Schema.optional(Schema.String).pipe(T.HttpQuery("driveId")),
  includeCorpusRemovals: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeCorpusRemovals"),
  ),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  teamDriveId: Schema.optional(Schema.String).pipe(T.HttpQuery("teamDriveId")),
  includeSubscribed: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeSubscribed"),
  ),
  body: Schema.optional(Channel).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "changes/watch", hasBody: true }),
  svc,
) as unknown as Schema.Codec<WatchChangesRequest>;

export type WatchChangesResponse = Channel;
export const WatchChangesResponse = /*@__PURE__*/ /*#__PURE__*/ Channel;

export type WatchChangesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Subscribe to changes for a user. */
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

export interface GetStartPageTokenChangesRequest {
  /** The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned. */
  driveId?: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Deprecated: Use `driveId` instead. */
  teamDriveId?: string;
}

export const GetStartPageTokenChangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    driveId: Schema.optional(Schema.String).pipe(T.HttpQuery("driveId")),
    supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsAllDrives"),
    ),
    supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsTeamDrives"),
    ),
    teamDriveId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("teamDriveId"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "changes/startPageToken" }),
    svc,
  ) as unknown as Schema.Codec<GetStartPageTokenChangesRequest>;

export type GetStartPageTokenChangesResponse = StartPageToken;
export const GetStartPageTokenChangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ StartPageToken;

export type GetStartPageTokenChangesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the starting pageToken for listing future changes. */
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

export interface GetChangesRequest {
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Deprecated: Use `driveId` instead. */
  teamDriveId?: string;
  /** The shared drive from which the change will be returned. */
  driveId?: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** The ID of the change. */
  changeId: string;
}

export const GetChangesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  teamDriveId: Schema.optional(Schema.String).pipe(T.HttpQuery("teamDriveId")),
  driveId: Schema.optional(Schema.String).pipe(T.HttpQuery("driveId")),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  changeId: Schema.String.pipe(T.HttpPath("changeId")),
}).pipe(
  T.Http({ method: "GET", path: "changes/{changeId}" }),
  svc,
) as unknown as Schema.Codec<GetChangesRequest>;

export type GetChangesResponse = Change;
export const GetChangesResponse = /*@__PURE__*/ /*#__PURE__*/ Change;

export type GetChangesError = DefaultErrors | NotFound | Forbidden;

/** Deprecated: Use `changes.getStartPageToken` and `changes.list` to retrieve recent changes. */
export const getChanges: API.OperationMethod<
  GetChangesRequest,
  GetChangesResponse,
  GetChangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetChangesRequest,
  output: GetChangesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListChangesRequest {
  /** Whether both My Drive and shared drive items should be included in results. */
  includeItemsFromAllDrives?: boolean;
  /** A comma-separated list of spaces to query. Supported values are `drive`, `appDataFolder` and `photos`. */
  spaces?: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. */
  driveId?: string;
  /** Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. */
  includeCorpusRemovals?: boolean;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** Deprecated: Use `driveId` instead. */
  teamDriveId?: string;
  /** Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result. */
  includeSubscribed?: boolean;
  /** Maximum number of changes to return. */
  maxResults?: number;
  /** The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response or to the response from the getStartPageToken method. */
  pageToken?: string;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. */
  includeDeleted?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Deprecated: Use `pageToken` instead. */
  startChangeId?: string;
  /** Deprecated: Use `includeItemsFromAllDrives` instead. */
  includeTeamDriveItems?: boolean;
}

export const ListChangesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includeItemsFromAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeItemsFromAllDrives"),
  ),
  spaces: Schema.optional(Schema.String).pipe(T.HttpQuery("spaces")),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  driveId: Schema.optional(Schema.String).pipe(T.HttpQuery("driveId")),
  includeCorpusRemovals: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeCorpusRemovals"),
  ),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  teamDriveId: Schema.optional(Schema.String).pipe(T.HttpQuery("teamDriveId")),
  includeSubscribed: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeSubscribed"),
  ),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
  includeDeleted: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeDeleted"),
  ),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  startChangeId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("startChangeId"),
  ),
  includeTeamDriveItems: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeTeamDriveItems"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "changes" }),
  svc,
) as unknown as Schema.Codec<ListChangesRequest>;

export type ListChangesResponse = ChangeList;
export const ListChangesResponse = /*@__PURE__*/ /*#__PURE__*/ ChangeList;

export type ListChangesError = DefaultErrors | NotFound | Forbidden;

/** Lists the changes for a user or shared drive. */
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
    items: "items",
  },
}));

export interface DeletePropertiesRequest {
  /** The ID of the file. */
  fileId: string;
  /** The key of the property. */
  propertyKey: string;
  /** The visibility of the property. */
  visibility?: string;
}

export const DeletePropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    propertyKey: Schema.String.pipe(T.HttpPath("propertyKey")),
    visibility: Schema.optional(Schema.String).pipe(T.HttpQuery("visibility")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "files/{fileId}/properties/{propertyKey}",
    }),
    svc,
  ) as unknown as Schema.Codec<DeletePropertiesRequest>;

export interface DeletePropertiesResponse {}
export const DeletePropertiesResponse: Schema.Codec<DeletePropertiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeletePropertiesResponse>;

export type DeletePropertiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a property. */
export const deleteProperties: API.OperationMethod<
  DeletePropertiesRequest,
  DeletePropertiesResponse,
  DeletePropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePropertiesRequest,
  output: DeletePropertiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchPropertiesRequest {
  /** The ID of the file. */
  fileId: string;
  /** The key of the property. */
  propertyKey: string;
  /** The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE) */
  visibility?: string;
  /** Request body */
  body?: Property;
}

export const PatchPropertiesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    propertyKey: Schema.String.pipe(T.HttpPath("propertyKey")),
    visibility: Schema.optional(Schema.String).pipe(T.HttpQuery("visibility")),
    body: Schema.optional(Property).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "files/{fileId}/properties/{propertyKey}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<PatchPropertiesRequest>;

export type PatchPropertiesResponse = Property;
export const PatchPropertiesResponse = /*@__PURE__*/ /*#__PURE__*/ Property;

export type PatchPropertiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a property. */
export const patchProperties: API.OperationMethod<
  PatchPropertiesRequest,
  PatchPropertiesResponse,
  PatchPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPropertiesRequest,
  output: PatchPropertiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertPropertiesRequest {
  /** The ID of the file. */
  fileId: string;
  /** Request body */
  body?: Property;
}

export const InsertPropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    body: Schema.optional(Property).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "files/{fileId}/properties",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<InsertPropertiesRequest>;

export type InsertPropertiesResponse = Property;
export const InsertPropertiesResponse = /*@__PURE__*/ /*#__PURE__*/ Property;

export type InsertPropertiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a property to a file, or updates it if it already exists. */
export const insertProperties: API.OperationMethod<
  InsertPropertiesRequest,
  InsertPropertiesResponse,
  InsertPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertPropertiesRequest,
  output: InsertPropertiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListPropertiesRequest {
  /** The ID of the file. */
  fileId: string;
}

export const ListPropertiesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/properties" }),
  svc,
) as unknown as Schema.Codec<ListPropertiesRequest>;

export type ListPropertiesResponse = PropertyList;
export const ListPropertiesResponse = /*@__PURE__*/ /*#__PURE__*/ PropertyList;

export type ListPropertiesError = DefaultErrors | NotFound | Forbidden;

/** Lists a file's properties. */
export const listProperties: API.OperationMethod<
  ListPropertiesRequest,
  ListPropertiesResponse,
  ListPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListPropertiesRequest,
  output: ListPropertiesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdatePropertiesRequest {
  /** The ID of the file. */
  fileId: string;
  /** The key of the property. */
  propertyKey: string;
  /** The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE) */
  visibility?: string;
  /** Request body */
  body?: Property;
}

export const UpdatePropertiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    propertyKey: Schema.String.pipe(T.HttpPath("propertyKey")),
    visibility: Schema.optional(Schema.String).pipe(T.HttpQuery("visibility")),
    body: Schema.optional(Property).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "files/{fileId}/properties/{propertyKey}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdatePropertiesRequest>;

export type UpdatePropertiesResponse = Property;
export const UpdatePropertiesResponse = /*@__PURE__*/ /*#__PURE__*/ Property;

export type UpdatePropertiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a property. */
export const updateProperties: API.OperationMethod<
  UpdatePropertiesRequest,
  UpdatePropertiesResponse,
  UpdatePropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePropertiesRequest,
  output: UpdatePropertiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPropertiesRequest {
  /** The visibility of the property. */
  visibility?: string;
  /** The ID of the file. */
  fileId: string;
  /** The key of the property. */
  propertyKey: string;
}

export const GetPropertiesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  visibility: Schema.optional(Schema.String).pipe(T.HttpQuery("visibility")),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  propertyKey: Schema.String.pipe(T.HttpPath("propertyKey")),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/properties/{propertyKey}" }),
  svc,
) as unknown as Schema.Codec<GetPropertiesRequest>;

export type GetPropertiesResponse = Property;
export const GetPropertiesResponse = /*@__PURE__*/ /*#__PURE__*/ Property;

export type GetPropertiesError = DefaultErrors | NotFound | Forbidden;

/** Gets a property by its key. */
export const getProperties: API.OperationMethod<
  GetPropertiesRequest,
  GetPropertiesResponse,
  GetPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPropertiesRequest,
  output: GetPropertiesResponse,
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
) as unknown as Schema.Codec<GetAppsRequest>;

export type GetAppsResponse = App;
export const GetAppsResponse = /*@__PURE__*/ /*#__PURE__*/ App;

export type GetAppsError = DefaultErrors | NotFound | Forbidden;

/** Gets a specific app. */
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

export interface ListAppsRequest {
  /** A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists. */
  appFilterMimeTypes?: string;
  /** A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/). */
  languageCode?: string;
  /** A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists. */
  appFilterExtensions?: string;
}

export const ListAppsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appFilterMimeTypes: Schema.optional(Schema.String).pipe(
    T.HttpQuery("appFilterMimeTypes"),
  ),
  languageCode: Schema.optional(Schema.String).pipe(
    T.HttpQuery("languageCode"),
  ),
  appFilterExtensions: Schema.optional(Schema.String).pipe(
    T.HttpQuery("appFilterExtensions"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "apps" }),
  svc,
) as unknown as Schema.Codec<ListAppsRequest>;

export type ListAppsResponse = AppList;
export const ListAppsResponse = /*@__PURE__*/ /*#__PURE__*/ AppList;

export type ListAppsError = DefaultErrors | NotFound | Forbidden;

/** Lists a user's installed apps. */
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
) as unknown as Schema.Codec<DeleteCommentsRequest>;

export interface DeleteCommentsResponse {}
export const DeleteCommentsResponse: Schema.Codec<DeleteCommentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteCommentsResponse>;

export type DeleteCommentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a comment. */
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

export interface PatchCommentsRequest {
  /** The ID of the comment. */
  commentId: string;
  /** The ID of the file. */
  fileId: string;
  /** Request body */
  body?: Comment;
}

export const PatchCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  body: Schema.optional(Comment).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "files/{fileId}/comments/{commentId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<PatchCommentsRequest>;

export type PatchCommentsResponse = Comment;
export const PatchCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ Comment;

export type PatchCommentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing comment. */
export const patchComments: API.OperationMethod<
  PatchCommentsRequest,
  PatchCommentsResponse,
  PatchCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCommentsRequest,
  output: PatchCommentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertCommentsRequest {
  /** The ID of the file. */
  fileId: string;
  /** Request body */
  body?: Comment;
}

export const InsertCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  body: Schema.optional(Comment).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "files/{fileId}/comments", hasBody: true }),
  svc,
) as unknown as Schema.Codec<InsertCommentsRequest>;

export type InsertCommentsResponse = Comment;
export const InsertCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ Comment;

export type InsertCommentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new comment on the given file. */
export const insertComments: API.OperationMethod<
  InsertCommentsRequest,
  InsertCommentsResponse,
  InsertCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCommentsRequest,
  output: InsertCommentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCommentsRequest {
  /** If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned. */
  includeDeleted?: boolean;
  /** The ID of the file. */
  fileId: string;
  /** The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. */
  pageToken?: string;
  /** The maximum number of discussions to include in the response, used for paging. */
  maxResults?: number;
  /** Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp. */
  updatedMin?: string;
}

export const ListCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includeDeleted: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeDeleted"),
  ),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  updatedMin: Schema.optional(Schema.String).pipe(T.HttpQuery("updatedMin")),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/comments" }),
  svc,
) as unknown as Schema.Codec<ListCommentsRequest>;

export type ListCommentsResponse = CommentList;
export const ListCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ CommentList;

export type ListCommentsError = DefaultErrors | NotFound | Forbidden;

/** Lists a file's comments. */
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
    items: "items",
  },
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
    method: "PUT",
    path: "files/{fileId}/comments/{commentId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<UpdateCommentsRequest>;

export type UpdateCommentsResponse = Comment;
export const UpdateCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ Comment;

export type UpdateCommentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing comment. */
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

export interface GetCommentsRequest {
  /** The ID of the file. */
  fileId: string;
  /** If set, this will succeed when retrieving a deleted comment, and will include any deleted replies. */
  includeDeleted?: boolean;
  /** The ID of the comment. */
  commentId: string;
}

export const GetCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  includeDeleted: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeDeleted"),
  ),
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/comments/{commentId}" }),
  svc,
) as unknown as Schema.Codec<GetCommentsRequest>;

export type GetCommentsResponse = Comment;
export const GetCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ Comment;

export type GetCommentsError = DefaultErrors | NotFound | Forbidden;

/** Gets a comment by ID. */
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

export interface InsertDrivesRequest {
  /** Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned. */
  requestId: string;
  /** Request body */
  body?: Drive;
}

export const InsertDrivesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  requestId: Schema.String.pipe(T.HttpQuery("requestId")),
  body: Schema.optional(Drive).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "drives", hasBody: true }),
  svc,
) as unknown as Schema.Codec<InsertDrivesRequest>;

export type InsertDrivesResponse = Drive;
export const InsertDrivesResponse = /*@__PURE__*/ /*#__PURE__*/ Drive;

export type InsertDrivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new shared drive. */
export const insertDrives: API.OperationMethod<
  InsertDrivesRequest,
  InsertDrivesResponse,
  InsertDrivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertDrivesRequest,
  output: InsertDrivesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteDrivesRequest {
  /** The ID of the shared drive. */
  driveId: string;
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. */
  useDomainAdminAccess?: boolean;
  /** Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to `true`. */
  allowItemDeletion?: boolean;
}

export const DeleteDrivesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  driveId: Schema.String.pipe(T.HttpPath("driveId")),
  useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useDomainAdminAccess"),
  ),
  allowItemDeletion: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("allowItemDeletion"),
  ),
}).pipe(
  T.Http({ method: "DELETE", path: "drives/{driveId}" }),
  svc,
) as unknown as Schema.Codec<DeleteDrivesRequest>;

export interface DeleteDrivesResponse {}
export const DeleteDrivesResponse: Schema.Codec<DeleteDrivesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteDrivesResponse>;

export type DeleteDrivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items. */
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

export interface ListDrivesRequest {
  /** Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned. */
  useDomainAdminAccess?: boolean;
  /** Maximum number of shared drives to return per page. */
  maxResults?: number;
  /** Page token for shared drives. */
  pageToken?: string;
  /** Query string for searching shared drives. */
  q?: string;
}

export const ListDrivesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useDomainAdminAccess"),
  ),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  q: Schema.optional(Schema.String).pipe(T.HttpQuery("q")),
}).pipe(
  T.Http({ method: "GET", path: "drives" }),
  svc,
) as unknown as Schema.Codec<ListDrivesRequest>;

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
    items: "items",
  },
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
) as unknown as Schema.Codec<UnhideDrivesRequest>;

export type UnhideDrivesResponse = Drive;
export const UnhideDrivesResponse = /*@__PURE__*/ /*#__PURE__*/ Drive;

export type UnhideDrivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restores a shared drive to the default view. */
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
  T.Http({ method: "PUT", path: "drives/{driveId}", hasBody: true }),
  svc,
) as unknown as Schema.Codec<UpdateDrivesRequest>;

export type UpdateDrivesResponse = Drive;
export const UpdateDrivesResponse = /*@__PURE__*/ /*#__PURE__*/ Drive;

export type UpdateDrivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the metadata for a shared drive. */
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
) as unknown as Schema.Codec<GetDrivesRequest>;

export type GetDrivesResponse = Drive;
export const GetDrivesResponse = /*@__PURE__*/ /*#__PURE__*/ Drive;

export type GetDrivesError = DefaultErrors | NotFound | Forbidden;

/** Gets a shared drive's metadata by ID. */
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
) as unknown as Schema.Codec<HideDrivesRequest>;

export type HideDrivesResponse = Drive;
export const HideDrivesResponse = /*@__PURE__*/ /*#__PURE__*/ Drive;

export type HideDrivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Hides a shared drive from the default view. */
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

export interface GetRevisionsRequest {
  /** The ID of the revision. */
  revisionId: string;
  /** The ID of the file. */
  fileId: string;
}

export const GetRevisionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  revisionId: Schema.String.pipe(T.HttpPath("revisionId")),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/revisions/{revisionId}" }),
  svc,
) as unknown as Schema.Codec<GetRevisionsRequest>;

export type GetRevisionsResponse = Revision;
export const GetRevisionsResponse = /*@__PURE__*/ /*#__PURE__*/ Revision;

export type GetRevisionsError = DefaultErrors | NotFound | Forbidden;

/** Gets a specific revision. */
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
  /** The ID for the revision. */
  revisionId: string;
  /** The ID for the file. */
  fileId: string;
  /** Request body */
  body?: Revision;
}

export const UpdateRevisionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    revisionId: Schema.String.pipe(T.HttpPath("revisionId")),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    body: Schema.optional(Revision).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "files/{fileId}/revisions/{revisionId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<UpdateRevisionsRequest>;

export type UpdateRevisionsResponse = Revision;
export const UpdateRevisionsResponse = /*@__PURE__*/ /*#__PURE__*/ Revision;

export type UpdateRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a revision. */
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

export interface ListRevisionsRequest {
  /** The ID of the file. */
  fileId: string;
  /** Page token for revisions. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. */
  pageToken?: string;
  /** Maximum number of revisions to return. */
  maxResults?: number;
}

export const ListRevisionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/revisions" }),
  svc,
) as unknown as Schema.Codec<ListRevisionsRequest>;

export type ListRevisionsResponse = RevisionList;
export const ListRevisionsResponse = /*@__PURE__*/ /*#__PURE__*/ RevisionList;

export type ListRevisionsError = DefaultErrors | NotFound | Forbidden;

/** Lists a file's revisions. **Important:** The list of revisions returned by this method might be incomplete for files with a large revision history, including frequently edited Google Docs, Sheets, and Slides. Older revisions might be omitted from the response, meaning the first revision returned may not be the oldest existing revision. The revision history visible in the Workspace editor user interface might be more complete than the list returned by the API. */
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
    items: "items",
  },
}));

export interface DeleteRevisionsRequest {
  /** The ID of the file. */
  fileId: string;
  /** The ID of the revision. */
  revisionId: string;
}

export const DeleteRevisionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    revisionId: Schema.String.pipe(T.HttpPath("revisionId")),
  },
).pipe(
  T.Http({ method: "DELETE", path: "files/{fileId}/revisions/{revisionId}" }),
  svc,
) as unknown as Schema.Codec<DeleteRevisionsRequest>;

export interface DeleteRevisionsResponse {}
export const DeleteRevisionsResponse: Schema.Codec<DeleteRevisionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteRevisionsResponse>;

export type DeleteRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted. */
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

export interface PatchRevisionsRequest {
  /** The ID for the file. */
  fileId: string;
  /** The ID for the revision. */
  revisionId: string;
  /** Request body */
  body?: Revision;
}

export const PatchRevisionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  revisionId: Schema.String.pipe(T.HttpPath("revisionId")),
  body: Schema.optional(Revision).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "files/{fileId}/revisions/{revisionId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<PatchRevisionsRequest>;

export type PatchRevisionsResponse = Revision;
export const PatchRevisionsResponse = /*@__PURE__*/ /*#__PURE__*/ Revision;

export type PatchRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a revision. */
export const patchRevisions: API.OperationMethod<
  PatchRevisionsRequest,
  PatchRevisionsResponse,
  PatchRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchRevisionsRequest,
  output: PatchRevisionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertRepliesRequest {
  /** The ID of the file. */
  fileId: string;
  /** The ID of the comment. */
  commentId: string;
  /** Request body */
  body?: CommentReply;
}

export const InsertRepliesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
  body: Schema.optional(CommentReply).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "files/{fileId}/comments/{commentId}/replies",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<InsertRepliesRequest>;

export type InsertRepliesResponse = CommentReply;
export const InsertRepliesResponse = /*@__PURE__*/ /*#__PURE__*/ CommentReply;

export type InsertRepliesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new reply to the given comment. */
export const insertReplies: API.OperationMethod<
  InsertRepliesRequest,
  InsertRepliesResponse,
  InsertRepliesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertRepliesRequest,
  output: InsertRepliesResponse,
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
) as unknown as Schema.Codec<DeleteRepliesRequest>;

export interface DeleteRepliesResponse {}
export const DeleteRepliesResponse: Schema.Codec<DeleteRepliesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteRepliesResponse>;

export type DeleteRepliesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a reply. */
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

export interface PatchRepliesRequest {
  /** The ID of the reply. */
  replyId: string;
  /** The ID of the comment. */
  commentId: string;
  /** The ID of the file. */
  fileId: string;
  /** Request body */
  body?: CommentReply;
}

export const PatchRepliesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  replyId: Schema.String.pipe(T.HttpPath("replyId")),
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  body: Schema.optional(CommentReply).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "files/{fileId}/comments/{commentId}/replies/{replyId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<PatchRepliesRequest>;

export type PatchRepliesResponse = CommentReply;
export const PatchRepliesResponse = /*@__PURE__*/ /*#__PURE__*/ CommentReply;

export type PatchRepliesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing reply. */
export const patchReplies: API.OperationMethod<
  PatchRepliesRequest,
  PatchRepliesResponse,
  PatchRepliesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchRepliesRequest,
  output: PatchRepliesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListRepliesRequest {
  /** The ID of the comment. */
  commentId: string;
  /** The maximum number of replies to include in the response, used for paging. */
  maxResults?: number;
  /** If set, all replies, including deleted replies (with content stripped) will be returned. */
  includeDeleted?: boolean;
  /** The ID of the file. */
  fileId: string;
  /** The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. */
  pageToken?: string;
}

export const ListRepliesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  includeDeleted: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeDeleted"),
  ),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({
    method: "GET",
    path: "files/{fileId}/comments/{commentId}/replies",
  }),
  svc,
) as unknown as Schema.Codec<ListRepliesRequest>;

export type ListRepliesResponse = CommentReplyList;
export const ListRepliesResponse = /*@__PURE__*/ /*#__PURE__*/ CommentReplyList;

export type ListRepliesError = DefaultErrors | NotFound | Forbidden;

/** Lists all of the replies to a comment. */
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
    items: "items",
  },
}));

export interface UpdateRepliesRequest {
  /** The ID of the comment. */
  commentId: string;
  /** The ID of the reply. */
  replyId: string;
  /** The ID of the file. */
  fileId: string;
  /** Request body */
  body?: CommentReply;
}

export const UpdateRepliesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
  replyId: Schema.String.pipe(T.HttpPath("replyId")),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  body: Schema.optional(CommentReply).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "files/{fileId}/comments/{commentId}/replies/{replyId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<UpdateRepliesRequest>;

export type UpdateRepliesResponse = CommentReply;
export const UpdateRepliesResponse = /*@__PURE__*/ /*#__PURE__*/ CommentReply;

export type UpdateRepliesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing reply. */
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

export interface GetRepliesRequest {
  /** The ID of the reply. */
  replyId: string;
  /** The ID of the comment. */
  commentId: string;
  /** The ID of the file. */
  fileId: string;
  /** If set, this will succeed when retrieving a deleted reply. */
  includeDeleted?: boolean;
}

export const GetRepliesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  replyId: Schema.String.pipe(T.HttpPath("replyId")),
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  includeDeleted: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeDeleted"),
  ),
}).pipe(
  T.Http({
    method: "GET",
    path: "files/{fileId}/comments/{commentId}/replies/{replyId}",
  }),
  svc,
) as unknown as Schema.Codec<GetRepliesRequest>;

export type GetRepliesResponse = CommentReply;
export const GetRepliesResponse = /*@__PURE__*/ /*#__PURE__*/ CommentReply;

export type GetRepliesError = DefaultErrors | NotFound | Forbidden;

/** Gets a reply. */
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

export interface GetChildrenRequest {
  /** The ID of the folder. */
  folderId: string;
  /** The ID of the child. */
  childId: string;
}

export const GetChildrenRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  folderId: Schema.String.pipe(T.HttpPath("folderId")),
  childId: Schema.String.pipe(T.HttpPath("childId")),
}).pipe(
  T.Http({ method: "GET", path: "files/{folderId}/children/{childId}" }),
  svc,
) as unknown as Schema.Codec<GetChildrenRequest>;

export type GetChildrenResponse = ChildReference;
export const GetChildrenResponse = /*@__PURE__*/ /*#__PURE__*/ ChildReference;

export type GetChildrenError = DefaultErrors | NotFound | Forbidden;

/** Gets a specific child reference. */
export const getChildren: API.OperationMethod<
  GetChildrenRequest,
  GetChildrenResponse,
  GetChildrenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetChildrenRequest,
  output: GetChildrenResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListChildrenRequest {
  /** A comma-separated list of sort keys. Valid keys are `createdDate`, `folder`, `lastViewedByMeDate`, `modifiedByMeDate`, `modifiedDate`, `quotaBytesUsed`, `recency`, `sharedWithMeDate`, `starred`, and `title`. Each key sorts ascending by default, but may be reversed with the `desc` modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored. */
  orderBy?: string;
  /** Page token for children. */
  pageToken?: string;
  /** The ID of the folder. */
  folderId: string;
  /** Maximum number of children to return. */
  maxResults?: number;
  /** Query string for searching children. */
  q?: string;
}

export const ListChildrenRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  folderId: Schema.String.pipe(T.HttpPath("folderId")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  q: Schema.optional(Schema.String).pipe(T.HttpQuery("q")),
}).pipe(
  T.Http({ method: "GET", path: "files/{folderId}/children" }),
  svc,
) as unknown as Schema.Codec<ListChildrenRequest>;

export type ListChildrenResponse = ChildList;
export const ListChildrenResponse = /*@__PURE__*/ /*#__PURE__*/ ChildList;

export type ListChildrenError = DefaultErrors | NotFound | Forbidden;

/** Lists a folder's children. */
export const listChildren: API.PaginatedOperationMethod<
  ListChildrenRequest,
  ListChildrenResponse,
  ListChildrenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListChildrenRequest,
  output: ListChildrenResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface InsertChildrenRequest {
  /** The ID of the folder. */
  folderId: string;
  /** Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead. */
  enforceSingleParent?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Request body */
  body?: ChildReference;
}

export const InsertChildrenRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  folderId: Schema.String.pipe(T.HttpPath("folderId")),
  enforceSingleParent: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("enforceSingleParent"),
  ),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  body: Schema.optional(ChildReference).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "files/{folderId}/children", hasBody: true }),
  svc,
) as unknown as Schema.Codec<InsertChildrenRequest>;

export type InsertChildrenResponse = ChildReference;
export const InsertChildrenResponse =
  /*@__PURE__*/ /*#__PURE__*/ ChildReference;

export type InsertChildrenError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a file into a folder. */
export const insertChildren: API.OperationMethod<
  InsertChildrenRequest,
  InsertChildrenResponse,
  InsertChildrenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertChildrenRequest,
  output: InsertChildrenResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteChildrenRequest {
  /** The ID of the child. */
  childId: string;
  /** Deprecated: If an item is not in a shared drive and its last parent is removed, the item is placed under its owner's root. */
  enforceSingleParent?: boolean;
  /** The ID of the folder. */
  folderId: string;
}

export const DeleteChildrenRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  childId: Schema.String.pipe(T.HttpPath("childId")),
  enforceSingleParent: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("enforceSingleParent"),
  ),
  folderId: Schema.String.pipe(T.HttpPath("folderId")),
}).pipe(
  T.Http({ method: "DELETE", path: "files/{folderId}/children/{childId}" }),
  svc,
) as unknown as Schema.Codec<DeleteChildrenRequest>;

export interface DeleteChildrenResponse {}
export const DeleteChildrenResponse: Schema.Codec<DeleteChildrenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteChildrenResponse>;

export type DeleteChildrenError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a child from a folder. */
export const deleteChildren: API.OperationMethod<
  DeleteChildrenRequest,
  DeleteChildrenResponse,
  DeleteChildrenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteChildrenRequest,
  output: DeleteChildrenResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
) as unknown as Schema.Codec<GetTeamdrivesRequest>;

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
    T.Http({ method: "PUT", path: "teamdrives/{teamDriveId}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateTeamdrivesRequest>;

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
  maxResults?: number;
  /** Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned. */
  useDomainAdminAccess?: boolean;
  /** Page token for Team Drives. */
  pageToken?: string;
  /** Query string for searching Team Drives. */
  q?: string;
}

export const ListTeamdrivesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useDomainAdminAccess"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  q: Schema.optional(Schema.String).pipe(T.HttpQuery("q")),
}).pipe(
  T.Http({ method: "GET", path: "teamdrives" }),
  svc,
) as unknown as Schema.Codec<ListTeamdrivesRequest>;

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
    items: "items",
  },
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
  ) as unknown as Schema.Codec<DeleteTeamdrivesRequest>;

export interface DeleteTeamdrivesResponse {}
export const DeleteTeamdrivesResponse: Schema.Codec<DeleteTeamdrivesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteTeamdrivesResponse>;

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

export interface InsertTeamdrivesRequest {
  /** Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned. */
  requestId: string;
  /** Request body */
  body?: TeamDrive;
}

export const InsertTeamdrivesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.String.pipe(T.HttpQuery("requestId")),
    body: Schema.optional(TeamDrive).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "teamdrives", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<InsertTeamdrivesRequest>;

export type InsertTeamdrivesResponse = TeamDrive;
export const InsertTeamdrivesResponse = /*@__PURE__*/ /*#__PURE__*/ TeamDrive;

export type InsertTeamdrivesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deprecated: Use `drives.insert` instead. */
export const insertTeamdrives: API.OperationMethod<
  InsertTeamdrivesRequest,
  InsertTeamdrivesResponse,
  InsertTeamdrivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertTeamdrivesRequest,
  output: InsertTeamdrivesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetParentsRequest {
  /** The ID of the file. */
  fileId: string;
  /** The ID of the parent. */
  parentId: string;
}

export const GetParentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  parentId: Schema.String.pipe(T.HttpPath("parentId")),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/parents/{parentId}" }),
  svc,
) as unknown as Schema.Codec<GetParentsRequest>;

export type GetParentsResponse = ParentReference;
export const GetParentsResponse = /*@__PURE__*/ /*#__PURE__*/ ParentReference;

export type GetParentsError = DefaultErrors | NotFound | Forbidden;

/** Gets a specific parent reference. */
export const getParents: API.OperationMethod<
  GetParentsRequest,
  GetParentsResponse,
  GetParentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetParentsRequest,
  output: GetParentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListParentsRequest {
  /** The ID of the file. */
  fileId: string;
}

export const ListParentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/parents" }),
  svc,
) as unknown as Schema.Codec<ListParentsRequest>;

export type ListParentsResponse = ParentList;
export const ListParentsResponse = /*@__PURE__*/ /*#__PURE__*/ ParentList;

export type ListParentsError = DefaultErrors | NotFound | Forbidden;

/** Lists a file's parents. */
export const listParents: API.OperationMethod<
  ListParentsRequest,
  ListParentsResponse,
  ListParentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListParentsRequest,
  output: ListParentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteParentsRequest {
  /** The ID of the parent. */
  parentId: string;
  /** The ID of the file. */
  fileId: string;
  /** Deprecated: If an item is not in a shared drive and its last parent is removed, the item is placed under its owner's root. */
  enforceSingleParent?: boolean;
}

export const DeleteParentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  parentId: Schema.String.pipe(T.HttpPath("parentId")),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  enforceSingleParent: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("enforceSingleParent"),
  ),
}).pipe(
  T.Http({ method: "DELETE", path: "files/{fileId}/parents/{parentId}" }),
  svc,
) as unknown as Schema.Codec<DeleteParentsRequest>;

export interface DeleteParentsResponse {}
export const DeleteParentsResponse: Schema.Codec<DeleteParentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteParentsResponse>;

export type DeleteParentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a parent from a file. */
export const deleteParents: API.OperationMethod<
  DeleteParentsRequest,
  DeleteParentsResponse,
  DeleteParentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteParentsRequest,
  output: DeleteParentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertParentsRequest {
  /** The ID of the file. */
  fileId: string;
  /** Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead. */
  enforceSingleParent?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Request body */
  body?: ParentReference;
}

export const InsertParentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  enforceSingleParent: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("enforceSingleParent"),
  ),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  body: Schema.optional(ParentReference).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "files/{fileId}/parents", hasBody: true }),
  svc,
) as unknown as Schema.Codec<InsertParentsRequest>;

export type InsertParentsResponse = ParentReference;
export const InsertParentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ParentReference;

export type InsertParentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a parent folder for a file. */
export const insertParents: API.OperationMethod<
  InsertParentsRequest,
  InsertParentsResponse,
  InsertParentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertParentsRequest,
  output: InsertParentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateFilesRequest {
  /** Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045). */
  newRevision?: boolean;
  /** The language of the timed text. */
  timedTextLanguage?: string;
  /** Whether to update the view date after successfully updating the file. */
  updateViewedDate?: boolean;
  /** Whether to use the content as indexable text. */
  useContentAsIndexableText?: boolean;
  /** Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead. */
  enforceSingleParent?: boolean;
  /** Comma-separated list of parent IDs to add. */
  addParents?: string;
  /** The timed text track name. */
  timedTextTrackName?: string;
  /** Determines the behavior in which `modifiedDate` is updated. This overrides `setModifiedDate`. */
  modifiedDateBehavior?:
    | "fromBody"
    | "fromBodyIfNeeded"
    | "fromBodyOrNow"
    | "noChange"
    | "now"
    | "nowIfNeeded"
    | (string & {});
  /** The ID of the file to update. */
  fileId: string;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. */
  ocr?: boolean;
  /** Deprecated: This parameter has no function. */
  convert?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. */
  pinned?: boolean;
  /** If ocr is true, hints at the language to use. Valid values are BCP 47 codes. */
  ocrLanguage?: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** Comma-separated list of parent IDs to remove. */
  removeParents?: string;
  /** Whether to set the modified date using the value supplied in the request body. Setting this field to `true` is equivalent to `modifiedDateBehavior=fromBodyOrNow`, and `false` is equivalent to `modifiedDateBehavior=now`. To prevent any changes to the modified date set `modifiedDateBehavior=noChange`. */
  setModifiedDate?: boolean;
  /** Request body */
  body?: File;
}

export const UpdateFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  newRevision: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("newRevision")),
  timedTextLanguage: Schema.optional(Schema.String).pipe(
    T.HttpQuery("timedTextLanguage"),
  ),
  updateViewedDate: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("updateViewedDate"),
  ),
  useContentAsIndexableText: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useContentAsIndexableText"),
  ),
  enforceSingleParent: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("enforceSingleParent"),
  ),
  addParents: Schema.optional(Schema.String).pipe(T.HttpQuery("addParents")),
  timedTextTrackName: Schema.optional(Schema.String).pipe(
    T.HttpQuery("timedTextTrackName"),
  ),
  modifiedDateBehavior: Schema.optional(Schema.String).pipe(
    T.HttpQuery("modifiedDateBehavior"),
  ),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
  ocr: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("ocr")),
  convert: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("convert")),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  pinned: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("pinned")),
  ocrLanguage: Schema.optional(Schema.String).pipe(T.HttpQuery("ocrLanguage")),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  removeParents: Schema.optional(Schema.String).pipe(
    T.HttpQuery("removeParents"),
  ),
  setModifiedDate: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("setModifiedDate"),
  ),
  body: Schema.optional(File).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "PUT", path: "files/{fileId}", hasBody: true }),
  svc,
) as unknown as Schema.Codec<UpdateFilesRequest>;

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

export interface CopyFilesRequest {
  /** The ID of the file to copy. */
  fileId: string;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. */
  ocr?: boolean;
  /** Whether to convert this file to the corresponding Docs Editors format. */
  convert?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions. */
  pinned?: boolean;
  /** If `ocr` is true, hints at the language to use. Valid values are BCP 47 codes. */
  ocrLanguage?: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** The language of the timed text. */
  timedTextLanguage?: string;
  /** The visibility of the new file. Permissions are still inherited from parent folders. This parameter is only relevant when the source is not a Google Doc file and when `convert=false`. */
  visibility?: "DEFAULT" | "PRIVATE" | (string & {});
  /** The timed text track name. */
  timedTextTrackName?: string;
  /** Deprecated: Copying files into multiple folders is no longer supported. Use shortcuts instead. */
  enforceSingleParent?: boolean;
  /** Request body */
  body?: File;
}

export const CopyFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
  ocr: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("ocr")),
  convert: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("convert")),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  pinned: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("pinned")),
  ocrLanguage: Schema.optional(Schema.String).pipe(T.HttpQuery("ocrLanguage")),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  timedTextLanguage: Schema.optional(Schema.String).pipe(
    T.HttpQuery("timedTextLanguage"),
  ),
  visibility: Schema.optional(Schema.String).pipe(T.HttpQuery("visibility")),
  timedTextTrackName: Schema.optional(Schema.String).pipe(
    T.HttpQuery("timedTextTrackName"),
  ),
  enforceSingleParent: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("enforceSingleParent"),
  ),
  body: Schema.optional(File).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "files/{fileId}/copy", hasBody: true }),
  svc,
) as unknown as Schema.Codec<CopyFilesRequest>;

export type CopyFilesResponse = File;
export const CopyFilesResponse = /*@__PURE__*/ /*#__PURE__*/ File;

export type CopyFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a copy of the specified file. */
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

export interface InsertFilesRequest {
  /** Whether to use the content as indexable text. */
  useContentAsIndexableText?: boolean;
  /** The visibility of the new file. Permissions are still inherited from parent folders. This parameter is only relevant when `convert=false`. */
  visibility?: "DEFAULT" | "PRIVATE" | (string & {});
  /** The timed text track name. */
  timedTextTrackName?: string;
  /** Deprecated: Creating files in multiple folders is no longer supported. */
  enforceSingleParent?: boolean;
  /** The language of the timed text. */
  timedTextLanguage?: string;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** If ocr is true, hints at the language to use. Valid values are BCP 47 codes. */
  ocrLanguage?: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. */
  ocr?: boolean;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions. */
  pinned?: boolean;
  /** Whether to convert this file to the corresponding Docs Editors format. */
  convert?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Request body */
  body?: File;
}

export const InsertFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  useContentAsIndexableText: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useContentAsIndexableText"),
  ),
  visibility: Schema.optional(Schema.String).pipe(T.HttpQuery("visibility")),
  timedTextTrackName: Schema.optional(Schema.String).pipe(
    T.HttpQuery("timedTextTrackName"),
  ),
  enforceSingleParent: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("enforceSingleParent"),
  ),
  timedTextLanguage: Schema.optional(Schema.String).pipe(
    T.HttpQuery("timedTextLanguage"),
  ),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  ocrLanguage: Schema.optional(Schema.String).pipe(T.HttpQuery("ocrLanguage")),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  ocr: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("ocr")),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
  pinned: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("pinned")),
  convert: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("convert")),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  body: Schema.optional(File).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "files", hasBody: true }),
  svc,
) as unknown as Schema.Codec<InsertFilesRequest>;

export type InsertFilesResponse = File;
export const InsertFilesResponse = /*@__PURE__*/ /*#__PURE__*/ File;

export type InsertFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new file. This method supports an * /upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`* /*` Note: Specify a valid MIME type, rather than the literal `* /*` value. The literal `* /*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](https://developers.google.com/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.insert` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `title` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"title": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type. */
export const insertFiles: API.OperationMethod<
  InsertFilesRequest,
  InsertFilesResponse,
  InsertFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertFilesRequest,
  output: InsertFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UntrashFilesRequest {
  /** The ID of the file to untrash. */
  fileId: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
}

export const UntrashFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
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
}).pipe(
  T.Http({ method: "POST", path: "files/{fileId}/untrash", hasBody: true }),
  svc,
) as unknown as Schema.Codec<UntrashFilesRequest>;

export type UntrashFilesResponse = File;
export const UntrashFilesResponse = /*@__PURE__*/ /*#__PURE__*/ File;

export type UntrashFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restores a file from the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files. */
export const untrashFiles: API.OperationMethod<
  UntrashFilesRequest,
  UntrashFilesResponse,
  UntrashFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UntrashFilesRequest,
  output: UntrashFilesResponse,
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
  ) as unknown as Schema.Codec<ModifyLabelsFilesRequest>;

export type ModifyLabelsFilesResponse = ModifyLabelsResponse;
export const ModifyLabelsFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ModifyLabelsResponse;

export type ModifyLabelsFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Modifies the set of labels applied to a file. Returns a list of the labels that were added or modified. */
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
  /** The ID for the file in question. */
  fileId: string;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** Deprecated: This parameter has no function. */
  projection?: "BASIC" | "FULL" | (string & {});
  /** Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified. */
  revisionId?: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides. */
  acknowledgeAbuse?: boolean;
  /** Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body. */
  updateViewedDate?: boolean;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** Request body */
  body?: Channel;
}

export const WatchFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
  projection: Schema.optional(Schema.String).pipe(T.HttpQuery("projection")),
  revisionId: Schema.optional(Schema.String).pipe(T.HttpQuery("revisionId")),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  acknowledgeAbuse: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("acknowledgeAbuse"),
  ),
  updateViewedDate: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("updateViewedDate"),
  ),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  body: Schema.optional(Channel).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "files/{fileId}/watch", hasBody: true }),
  svc,
) as unknown as Schema.Codec<WatchFilesRequest>;

export type WatchFilesResponse = Channel;
export const WatchFilesResponse = /*@__PURE__*/ /*#__PURE__*/ Channel;

export type WatchFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Subscribes to changes to a file. */
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

export interface TouchFilesRequest {
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** The ID of the file to update. */
  fileId: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
}

export const TouchFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
}).pipe(
  T.Http({ method: "POST", path: "files/{fileId}/touch", hasBody: true }),
  svc,
) as unknown as Schema.Codec<TouchFilesRequest>;

export type TouchFilesResponse = File;
export const TouchFilesResponse = /*@__PURE__*/ /*#__PURE__*/ File;

export type TouchFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Set the file's updated time to the current server time. */
export const touchFiles: API.OperationMethod<
  TouchFilesRequest,
  TouchFilesResponse,
  TouchFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TouchFilesRequest,
  output: TouchFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFilesRequest {
  /** Whether both My Drive and shared drive items should be included in results. */
  includeItemsFromAllDrives?: boolean;
  /** Query string for searching files. */
  q?: string;
  /** A comma-separated list of sort keys. Valid keys are: * `createdDate`: When the file was created. * `folder`: The folder ID. This field is sorted using alphabetical ordering. * `lastViewedByMeDate`: The last time the file was viewed by the user. * `modifiedByMeDate`: The last time the file was modified by the user. * `modifiedDate`: The last time the file was modified by anyone. * `quotaBytesUsed`: The number of storage quota bytes used by the file. * `recency`: The most recent timestamp from the file's date-time fields. * `sharedWithMeDate`: When the file was shared with the user, if applicable. * `starred`: Whether the user has starred the file. * `title`: The title of the file. This field is sorted using alphabetical ordering, so 1, 12, 2, 22. * `title_natural`: The title of the file. This field is sorted using natural sort ordering, so 1, 2, 12, 22. Each key sorts ascending by default, but can be reversed with the 'desc' modifier. Example usage: `?orderBy=folder,modifiedDate desc,title`. Note that there's a current limitation for users with approximately one million files in which the requested sort order is ignored. */
  orderBy?: string;
  /** The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached. */
  maxResults?: number;
  /** Deprecated: Use `driveId` instead. */
  teamDriveId?: string;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** A comma-separated list of spaces to query. Supported values are `drive`, and `appDataFolder`. */
  spaces?: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** ID of the shared drive to search. */
  driveId?: string;
  /** Deprecated: The body of items (files/documents) to which the query applies. Use `corpora` instead. */
  corpus?: "DEFAULT" | "DOMAIN" | (string & {});
  /** Deprecated: Use `includeItemsFromAllDrives` instead. */
  includeTeamDriveItems?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Deprecated: This parameter has no function. */
  projection?: "BASIC" | "FULL" | (string & {});
  /** Bodies of items (files/documents) to which the query applies. Supported bodies are `default`, `domain`, `drive` and `allDrives`. Prefer `default` or `drive` to `allDrives` for efficiency. */
  corpora?: string;
  /** Page token for files. */
  pageToken?: string;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
}

export const ListFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includeItemsFromAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeItemsFromAllDrives"),
  ),
  q: Schema.optional(Schema.String).pipe(T.HttpQuery("q")),
  orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  teamDriveId: Schema.optional(Schema.String).pipe(T.HttpQuery("teamDriveId")),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  spaces: Schema.optional(Schema.String).pipe(T.HttpQuery("spaces")),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  driveId: Schema.optional(Schema.String).pipe(T.HttpQuery("driveId")),
  corpus: Schema.optional(Schema.String).pipe(T.HttpQuery("corpus")),
  includeTeamDriveItems: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeTeamDriveItems"),
  ),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  projection: Schema.optional(Schema.String).pipe(T.HttpQuery("projection")),
  corpora: Schema.optional(Schema.String).pipe(T.HttpQuery("corpora")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "files" }),
  svc,
) as unknown as Schema.Codec<ListFilesRequest>;

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
    items: "items",
  },
}));

export interface TrashFilesRequest {
  /** The ID of the file to trash. */
  fileId: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
}

export const TrashFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
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
}).pipe(
  T.Http({ method: "POST", path: "files/{fileId}/trash", hasBody: true }),
  svc,
) as unknown as Schema.Codec<TrashFilesRequest>;

export type TrashFilesResponse = File;
export const TrashFilesResponse = /*@__PURE__*/ /*#__PURE__*/ File;

export type TrashFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moves a file to the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files. */
export const trashFiles: API.OperationMethod<
  TrashFilesRequest,
  TrashFilesResponse,
  TrashFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TrashFilesRequest,
  output: TrashFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateCseTokenFilesRequest {
  /** The ID of the file for which the JWT should be generated. If not provided, an id will be generated. */
  fileId?: string;
  /** The ID of the expected parent of the file. Used when generating a JWT for a new CSE file. If specified, the parent will be fetched, and if the parent is a shared drive item, the shared drive's policy will be used to determine the KACLS that should be used. It is invalid to specify both file_id and parent in a single request. */
  parent?: string;
}

export const GenerateCseTokenFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileId: Schema.optional(Schema.String).pipe(T.HttpQuery("fileId")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "files/generateCseToken" }),
    svc,
  ) as unknown as Schema.Codec<GenerateCseTokenFilesRequest>;

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

export interface PatchFilesRequest {
  /** Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045). Note that this field is ignored if there is no payload in the request. */
  newRevision?: boolean;
  /** The language of the timed text. */
  timedTextLanguage?: string;
  /** Whether to update the view date after successfully updating the file. */
  updateViewedDate?: boolean;
  /** Whether to use the content as indexable text. */
  useContentAsIndexableText?: boolean;
  /** Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead. */
  enforceSingleParent?: boolean;
  /** Comma-separated list of parent IDs to add. */
  addParents?: string;
  /** The timed text track name. */
  timedTextTrackName?: string;
  /** Determines the behavior in which `modifiedDate` is updated. This overrides `setModifiedDate`. */
  modifiedDateBehavior?:
    | "fromBody"
    | "fromBodyIfNeeded"
    | "fromBodyOrNow"
    | "noChange"
    | "now"
    | "nowIfNeeded"
    | (string & {});
  /** The ID of the file to update. */
  fileId: string;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. */
  ocr?: boolean;
  /** Deprecated: This parameter has no function. */
  convert?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. Note that this field is ignored if there is no payload in the request. */
  pinned?: boolean;
  /** If ocr is true, hints at the language to use. Valid values are BCP 47 codes. */
  ocrLanguage?: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** Comma-separated list of parent IDs to remove. */
  removeParents?: string;
  /** Whether to set the modified date using the value supplied in the request body. Setting this field to `true` is equivalent to `modifiedDateBehavior=fromBodyOrNow`, and `false` is equivalent to `modifiedDateBehavior=now`. To prevent any changes to the modified date set `modifiedDateBehavior=noChange`. */
  setModifiedDate?: boolean;
  /** Request body */
  body?: File;
}

export const PatchFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  newRevision: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("newRevision")),
  timedTextLanguage: Schema.optional(Schema.String).pipe(
    T.HttpQuery("timedTextLanguage"),
  ),
  updateViewedDate: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("updateViewedDate"),
  ),
  useContentAsIndexableText: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useContentAsIndexableText"),
  ),
  enforceSingleParent: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("enforceSingleParent"),
  ),
  addParents: Schema.optional(Schema.String).pipe(T.HttpQuery("addParents")),
  timedTextTrackName: Schema.optional(Schema.String).pipe(
    T.HttpQuery("timedTextTrackName"),
  ),
  modifiedDateBehavior: Schema.optional(Schema.String).pipe(
    T.HttpQuery("modifiedDateBehavior"),
  ),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
  ocr: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("ocr")),
  convert: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("convert")),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  pinned: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("pinned")),
  ocrLanguage: Schema.optional(Schema.String).pipe(T.HttpQuery("ocrLanguage")),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
  removeParents: Schema.optional(Schema.String).pipe(
    T.HttpQuery("removeParents"),
  ),
  setModifiedDate: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("setModifiedDate"),
  ),
  body: Schema.optional(File).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "PATCH", path: "files/{fileId}", hasBody: true }),
  svc,
) as unknown as Schema.Codec<PatchFilesRequest>;

export type PatchFilesResponse = File;
export const PatchFilesResponse = /*@__PURE__*/ /*#__PURE__*/ File;

export type PatchFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics. */
export const patchFiles: API.OperationMethod<
  PatchFilesRequest,
  PatchFilesResponse,
  PatchFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFilesRequest,
  output: PatchFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface EmptyTrashFilesRequest {
  /** If set, empties the trash of the provided shared drive. */
  driveId?: string;
  /** Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root. */
  enforceSingleParent?: boolean;
}

export const EmptyTrashFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    driveId: Schema.optional(Schema.String).pipe(T.HttpQuery("driveId")),
    enforceSingleParent: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("enforceSingleParent"),
    ),
  },
).pipe(
  T.Http({ method: "DELETE", path: "files/trash" }),
  svc,
) as unknown as Schema.Codec<EmptyTrashFilesRequest>;

export interface EmptyTrashFilesResponse {}
export const EmptyTrashFilesResponse: Schema.Codec<EmptyTrashFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<EmptyTrashFilesResponse>;

export type EmptyTrashFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Permanently deletes all of the user's trashed files. */
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

export interface ExportFilesRequest {
  /** Required. The MIME type of the format requested for this export. */
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
) as unknown as Schema.Codec<ExportFilesRequest>;

export interface ExportFilesResponse {}
export const ExportFilesResponse: Schema.Codec<ExportFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<ExportFilesResponse>;

export type ExportFilesError = DefaultErrors | NotFound | Forbidden;

/** Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB. */
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
  /** Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified. */
  revisionId?: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides. */
  acknowledgeAbuse?: boolean;
  /** The ID for the file in question. */
  fileId: string;
  /** A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. */
  includeLabels?: string;
  /** Deprecated: This parameter has no function. */
  projection?: "BASIC" | "FULL" | (string & {});
  /** Deprecated: Use `files.update` with `modifiedDateBehavior=noChange, updateViewedDate=true` and an empty request body. */
  updateViewedDate?: boolean;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
}

export const GetFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  revisionId: Schema.optional(Schema.String).pipe(T.HttpQuery("revisionId")),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
  acknowledgeAbuse: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("acknowledgeAbuse"),
  ),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  includeLabels: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includeLabels"),
  ),
  projection: Schema.optional(Schema.String).pipe(T.HttpQuery("projection")),
  updateViewedDate: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("updateViewedDate"),
  ),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  includePermissionsForView: Schema.optional(Schema.String).pipe(
    T.HttpQuery("includePermissionsForView"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}" }),
  svc,
) as unknown as Schema.Codec<GetFilesRequest>;

export type GetFilesResponse = File;
export const GetFilesResponse = /*@__PURE__*/ /*#__PURE__*/ File;

export type GetFilesError = DefaultErrors | NotFound | Forbidden;

/** Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](https://developers.google.com/workspace/drive/api/reference/rest/v2/files/export) instead. For more information, see [Download & export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads). */
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

export interface GenerateIdsFilesRequest {
  /** Maximum number of IDs to return. */
  maxResults?: number;
  /** The type of items which the IDs can be used for. Supported values are `files` and `shortcuts`. Note that `shortcuts` are only supported in the `drive` `space`. (Default: `files`) */
  type?: string;
  /** The space in which the IDs can be used to create new files. Supported values are `drive` and `appDataFolder`. (Default: `drive`) */
  space?: string;
}

export const GenerateIdsFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
    space: Schema.optional(Schema.String).pipe(T.HttpQuery("space")),
  }).pipe(
    T.Http({ method: "GET", path: "files/generateIds" }),
    svc,
  ) as unknown as Schema.Codec<GenerateIdsFilesRequest>;

export type GenerateIdsFilesResponse = GeneratedIds;
export const GenerateIdsFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GeneratedIds;

export type GenerateIdsFilesError = DefaultErrors | NotFound | Forbidden;

/** Generates a set of file IDs which can be provided in insert or copy requests. */
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

export interface ListLabelsFilesRequest {
  /** The ID for the file. */
  fileId: string;
  /** The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. */
  pageToken?: string;
  /** The maximum number of labels to return per page. When not set, defaults to 100. */
  maxResults?: number;
}

export const ListLabelsFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  },
).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/listLabels" }),
  svc,
) as unknown as Schema.Codec<ListLabelsFilesRequest>;

export type ListLabelsFilesResponse = LabelList;
export const ListLabelsFilesResponse = /*@__PURE__*/ /*#__PURE__*/ LabelList;

export type ListLabelsFilesError = DefaultErrors | NotFound | Forbidden;

/** Lists the labels on a file. */
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
    items: "items",
  },
}));

export interface DeleteFilesRequest {
  /** The ID of the file to delete. */
  fileId: string;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root. */
  enforceSingleParent?: boolean;
}

export const DeleteFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}).pipe(
  T.Http({ method: "DELETE", path: "files/{fileId}" }),
  svc,
) as unknown as Schema.Codec<DeleteFilesRequest>;

export interface DeleteFilesResponse {}
export const DeleteFilesResponse: Schema.Codec<DeleteFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteFilesResponse>;

export type DeleteFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted. */
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

export interface GetAboutRequest {
  /** Whether to count changes outside the My Drive hierarchy. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the `maxChangeIdCount`. */
  includeSubscribed?: boolean;
  /** Change ID to start counting from when calculating number of remaining change IDs */
  startChangeId?: string;
  /** Maximum number of remaining change IDs to count */
  maxChangeIdCount?: string;
}

export const GetAboutRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includeSubscribed: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeSubscribed"),
  ),
  startChangeId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("startChangeId"),
  ),
  maxChangeIdCount: Schema.optional(Schema.String).pipe(
    T.HttpQuery("maxChangeIdCount"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "about" }),
  svc,
) as unknown as Schema.Codec<GetAboutRequest>;

export type GetAboutResponse = About;
export const GetAboutResponse = /*@__PURE__*/ /*#__PURE__*/ About;

export type GetAboutError = DefaultErrors | NotFound | Forbidden;

/** Gets the information about the current user along with Drive API settings */
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

export interface StopChannelsRequest {
  /** Request body */
  body?: Channel;
}

export const StopChannelsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(Channel).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "channels/stop", hasBody: true }),
  svc,
) as unknown as Schema.Codec<StopChannelsRequest>;

export interface StopChannelsResponse {}
export const StopChannelsResponse: Schema.Codec<StopChannelsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<StopChannelsResponse>;

export type StopChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops watching resources through this channel. */
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

export interface ListPermissionsRequest {
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. */
  useDomainAdminAccess?: boolean;
  /** The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned. */
  maxResults?: number;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Specifies which additional view's permissions to include in the response. Only `published` is supported. */
  includePermissionsForView?: string;
  /** The ID for the file or shared drive. */
  fileId: string;
  /** The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. */
  pageToken?: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
}

export const ListPermissionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useDomainAdminAccess"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsAllDrives"),
    ),
    includePermissionsForView: Schema.optional(Schema.String).pipe(
      T.HttpQuery("includePermissionsForView"),
    ),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsTeamDrives"),
    ),
  },
).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/permissions" }),
  svc,
) as unknown as Schema.Codec<ListPermissionsRequest>;

export type ListPermissionsResponse = PermissionList;
export const ListPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PermissionList;

export type ListPermissionsError = DefaultErrors | NotFound | Forbidden;

/** Lists a file's or shared drive's permissions. */
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
    items: "items",
  },
}));

export interface GetIdForEmailPermissionsRequest {
  /** The email address for which to return a permission ID */
  email: string;
}

export const GetIdForEmailPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.String.pipe(T.HttpPath("email")),
  }).pipe(
    T.Http({ method: "GET", path: "permissionIds/{email}" }),
    svc,
  ) as unknown as Schema.Codec<GetIdForEmailPermissionsRequest>;

export type GetIdForEmailPermissionsResponse = PermissionId;
export const GetIdForEmailPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PermissionId;

export type GetIdForEmailPermissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the permission ID for an email address. */
export const getIdForEmailPermissions: API.OperationMethod<
  GetIdForEmailPermissionsRequest,
  GetIdForEmailPermissionsResponse,
  GetIdForEmailPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIdForEmailPermissionsRequest,
  output: GetIdForEmailPermissionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertPermissionsRequest {
  /** Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the `role` is `owner`. */
  sendNotificationEmails?: boolean;
  /** The ID for the file or shared drive. */
  fileId: string;
  /** Deprecated: All requests use the expansive access rules. */
  enforceExpansiveAccess?: boolean;
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. */
  useDomainAdminAccess?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** A plain text custom message to include in notification emails. */
  emailMessage?: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents are not changed. */
  moveToNewOwnersRoot?: boolean;
  /** Deprecated: See `moveToNewOwnersRoot` for details. */
  enforceSingleParent?: boolean;
  /** Request body */
  body?: Permission;
}

export const InsertPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sendNotificationEmails: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("sendNotificationEmails"),
    ),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    enforceExpansiveAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("enforceExpansiveAccess"),
    ),
    useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useDomainAdminAccess"),
    ),
    supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsAllDrives"),
    ),
    emailMessage: Schema.optional(Schema.String).pipe(
      T.HttpQuery("emailMessage"),
    ),
    supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsTeamDrives"),
    ),
    moveToNewOwnersRoot: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("moveToNewOwnersRoot"),
    ),
    enforceSingleParent: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("enforceSingleParent"),
    ),
    body: Schema.optional(Permission).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "files/{fileId}/permissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<InsertPermissionsRequest>;

export type InsertPermissionsResponse = Permission;
export const InsertPermissionsResponse = /*@__PURE__*/ /*#__PURE__*/ Permission;

export type InsertPermissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied. */
export const insertPermissions: API.OperationMethod<
  InsertPermissionsRequest,
  InsertPermissionsResponse,
  InsertPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertPermissionsRequest,
  output: InsertPermissionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeletePermissionsRequest {
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. */
  useDomainAdminAccess?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** The ID for the permission. */
  permissionId: string;
  /** The ID for the file or shared drive. */
  fileId: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Deprecated: All requests use the expansive access rules. */
  enforceExpansiveAccess?: boolean;
}

export const DeletePermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useDomainAdminAccess"),
    ),
    supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsAllDrives"),
    ),
    permissionId: Schema.String.pipe(T.HttpPath("permissionId")),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsTeamDrives"),
    ),
    enforceExpansiveAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("enforceExpansiveAccess"),
    ),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "files/{fileId}/permissions/{permissionId}",
    }),
    svc,
  ) as unknown as Schema.Codec<DeletePermissionsRequest>;

export interface DeletePermissionsResponse {}
export const DeletePermissionsResponse: Schema.Codec<DeletePermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeletePermissionsResponse>;

export type DeletePermissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a permission from a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied. */
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

export interface PatchPermissionsRequest {
  /** Whether changing a role to `owner` downgrades the current owners to writers. Does nothing if the specified role is not `owner`. */
  transferOwnership?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. */
  useDomainAdminAccess?: boolean;
  /** Whether to remove the expiration date. */
  removeExpiration?: boolean;
  /** The ID for the file or shared drive. */
  fileId: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Deprecated: All requests use the expansive access rules. */
  enforceExpansiveAccess?: boolean;
  /** The ID for the permission. */
  permissionId: string;
  /** Request body */
  body?: Permission;
}

export const PatchPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transferOwnership: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("transferOwnership"),
    ),
    supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsAllDrives"),
    ),
    useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useDomainAdminAccess"),
    ),
    removeExpiration: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("removeExpiration"),
    ),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsTeamDrives"),
    ),
    enforceExpansiveAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("enforceExpansiveAccess"),
    ),
    permissionId: Schema.String.pipe(T.HttpPath("permissionId")),
    body: Schema.optional(Permission).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "files/{fileId}/permissions/{permissionId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<PatchPermissionsRequest>;

export type PatchPermissionsResponse = Permission;
export const PatchPermissionsResponse = /*@__PURE__*/ /*#__PURE__*/ Permission;

export type PatchPermissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a permission using patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied. */
export const patchPermissions: API.OperationMethod<
  PatchPermissionsRequest,
  PatchPermissionsResponse,
  PatchPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPermissionsRequest,
  output: PatchPermissionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPermissionsRequest {
  /** The ID for the permission. */
  permissionId: string;
  /** The ID for the file or shared drive. */
  fileId: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. */
  useDomainAdminAccess?: boolean;
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
}

export const GetPermissionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  permissionId: Schema.String.pipe(T.HttpPath("permissionId")),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsTeamDrives"),
  ),
  useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useDomainAdminAccess"),
  ),
  supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("supportsAllDrives"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "files/{fileId}/permissions/{permissionId}" }),
  svc,
) as unknown as Schema.Codec<GetPermissionsRequest>;

export type GetPermissionsResponse = Permission;
export const GetPermissionsResponse = /*@__PURE__*/ /*#__PURE__*/ Permission;

export type GetPermissionsError = DefaultErrors | NotFound | Forbidden;

/** Gets a permission by ID. */
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

export interface UpdatePermissionsRequest {
  /** Whether the requesting application supports both My Drives and shared drives. */
  supportsAllDrives?: boolean;
  /** Whether changing a role to `owner` downgrades the current owners to writers. Does nothing if the specified role is not `owner`. */
  transferOwnership?: boolean;
  /** Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. */
  useDomainAdminAccess?: boolean;
  /** The ID for the file or shared drive. */
  fileId: string;
  /** Deprecated: Use `supportsAllDrives` instead. */
  supportsTeamDrives?: boolean;
  /** Deprecated: All requests use the expansive access rules. */
  enforceExpansiveAccess?: boolean;
  /** Whether to remove the expiration date. */
  removeExpiration?: boolean;
  /** The ID for the permission. */
  permissionId: string;
  /** Request body */
  body?: Permission;
}

export const UpdatePermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportsAllDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsAllDrives"),
    ),
    transferOwnership: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("transferOwnership"),
    ),
    useDomainAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useDomainAdminAccess"),
    ),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
    supportsTeamDrives: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("supportsTeamDrives"),
    ),
    enforceExpansiveAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("enforceExpansiveAccess"),
    ),
    removeExpiration: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("removeExpiration"),
    ),
    permissionId: Schema.String.pipe(T.HttpPath("permissionId")),
    body: Schema.optional(Permission).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "files/{fileId}/permissions/{permissionId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdatePermissionsRequest>;

export type UpdatePermissionsResponse = Permission;
export const UpdatePermissionsResponse = /*@__PURE__*/ /*#__PURE__*/ Permission;

export type UpdatePermissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied. */
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
