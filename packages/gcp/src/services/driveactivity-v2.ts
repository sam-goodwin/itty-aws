// ==========================================================================
// Drive Activity API (driveactivity v2)
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
  name: "driveactivity",
  version: "v2",
  rootUrl: "https://driveactivity.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Delete {
  /** The type of delete action taken. */
  type?: "TYPE_UNSPECIFIED" | "TRASH" | "PERMANENT_DELETE" | (string & {});
}

export const Delete = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "Delete" });

export interface Selection {
  /** Selection value as Field Choice ID. */
  value?: string;
  /** Selection value as human-readable display string. */
  displayName?: string;
}

export const Selection = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "Selection" });

export interface Rename {
  /** The previous title of the drive object. */
  oldTitle?: string;
  /** The new title of the drive object. */
  newTitle?: string;
}

export const Rename = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  oldTitle: Schema.optional(Schema.String),
  newTitle: Schema.optional(Schema.String),
}).annotate({ identifier: "Rename" });

export interface NoConsolidation {}

export const NoConsolidation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "NoConsolidation" });

export interface Restore {
  /** The type of restore action taken. */
  type?: "TYPE_UNSPECIFIED" | "UNTRASH" | (string & {});
}

export const Restore = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "Restore" });

export interface DriveReference {
  /** The resource name of the shared drive. The format is `COLLECTION_ID/DRIVE_ID`. Clients should not assume a specific collection ID for this resource name. */
  name?: string;
  /** The title of the shared drive. */
  title?: string;
}

export const DriveReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
}).annotate({ identifier: "DriveReference" });

export interface File {}

export const File = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "File",
});

export interface DriveFolder {
  /** The type of Drive folder. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "MY_DRIVE_ROOT"
    | "SHARED_DRIVE_ROOT"
    | "STANDARD_FOLDER"
    | (string & {});
}

export const DriveFolder = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "DriveFolder" });

export interface Folder {
  /** This field is deprecated; please see `DriveFolder.type` instead. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "MY_DRIVE_ROOT"
    | "TEAM_DRIVE_ROOT"
    | "STANDARD_FOLDER"
    | (string & {});
}

export const Folder = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "Folder" });

export interface DriveFile {}

export const DriveFile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate(
  { identifier: "DriveFile" },
);

export interface DriveItemReference {
  /** The title of the Drive item. */
  title?: string;
  /** This field is deprecated; please use the `driveFile` field instead. */
  file?: File;
  /** The Drive item is a folder. Includes information about the type of folder. */
  driveFolder?: DriveFolder;
  /** This field is deprecated; please use the `driveFolder` field instead. */
  folder?: Folder;
  /** The target Drive item. The format is `items/ITEM_ID`. */
  name?: string;
  /** The Drive item is a file. */
  driveFile?: DriveFile;
}

export const DriveItemReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  title: Schema.optional(Schema.String),
  file: Schema.optional(File),
  driveFolder: Schema.optional(DriveFolder),
  folder: Schema.optional(Folder),
  name: Schema.optional(Schema.String),
  driveFile: Schema.optional(DriveFile),
}).annotate({ identifier: "DriveItemReference" });

export interface TeamDriveReference {
  /** This field is deprecated; please see `DriveReference.name` instead. */
  name?: string;
  /** This field is deprecated; please see `DriveReference.title` instead. */
  title?: string;
}

export const TeamDriveReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
}).annotate({ identifier: "TeamDriveReference" });

export interface TargetReference {
  /** The target is a shared drive. */
  drive?: DriveReference;
  /** The target is a Drive item. */
  driveItem?: DriveItemReference;
  /** This field is deprecated; please use the `drive` field instead. */
  teamDrive?: TeamDriveReference;
}

export const TargetReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  drive: Schema.optional(DriveReference),
  driveItem: Schema.optional(DriveItemReference),
  teamDrive: Schema.optional(TeamDriveReference),
}).annotate({ identifier: "TargetReference" });

export interface Move {
  /** The added parent object(s). */
  addedParents?: ReadonlyArray<TargetReference>;
  /** The removed parent object(s). */
  removedParents?: ReadonlyArray<TargetReference>;
}

export const Move = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  addedParents: Schema.optional(Schema.Array(TargetReference)),
  removedParents: Schema.optional(Schema.Array(TargetReference)),
}).annotate({ identifier: "Move" });

export interface ApplicationReference {
  /** The reference type corresponding to this event. */
  type?: "UNSPECIFIED_REFERENCE_TYPE" | "LINK" | "DISCUSS" | (string & {});
}

export const ApplicationReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "ApplicationReference" });

export interface RestrictionChange {
  /** The feature which had a change in restriction policy. */
  feature?:
    | "FEATURE_UNSPECIFIED"
    | "SHARING_OUTSIDE_DOMAIN"
    | "DIRECT_SHARING"
    | "ITEM_DUPLICATION"
    | "DRIVE_FILE_STREAM"
    | "FILE_ORGANIZER_CAN_SHARE_FOLDERS"
    | "READERS_CAN_DOWNLOAD"
    | "WRITERS_CAN_DOWNLOAD"
    | (string & {});
  /** The restriction in place after the change. */
  newRestriction?:
    | "RESTRICTION_UNSPECIFIED"
    | "UNRESTRICTED"
    | "FULLY_RESTRICTED"
    | (string & {});
}

export const RestrictionChange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  feature: Schema.optional(Schema.String),
  newRestriction: Schema.optional(Schema.String),
}).annotate({ identifier: "RestrictionChange" });

export interface SettingsChange {
  /** The set of changes made to restrictions. */
  restrictionChanges?: ReadonlyArray<RestrictionChange>;
}

export const SettingsChange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  restrictionChanges: Schema.optional(Schema.Array(RestrictionChange)),
}).annotate({ identifier: "SettingsChange" });

export interface Copy {
  /** The original object. */
  originalObject?: TargetReference;
}

export const Copy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  originalObject: Schema.optional(TargetReference),
}).annotate({ identifier: "Copy" });

export interface New {}

export const New = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "New",
});

export interface Upload {}

export const Upload = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Upload",
});

export interface Create {
  /** If present, indicates the object was created by copying an existing Drive object. */
  copy?: Copy;
  /** If present, indicates the object was newly created (e.g. as a blank document), not derived from a Drive object or external object. */
  new?: New;
  /** If present, indicates the object originated externally and was uploaded to Drive. */
  upload?: Upload;
}

export const Create = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  copy: Schema.optional(Copy),
  new: Schema.optional(New),
  upload: Schema.optional(Upload),
}).annotate({ identifier: "Create" });

export interface Anyone {}

export const Anyone = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Anyone",
});

export interface DeletedUser {}

export const DeletedUser = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "DeletedUser" });

export interface KnownUser {
  /** The identifier for this user that can be used with the People API to get more information. The format is `people/ACCOUNT_ID`. See https://developers.google.com/people/. */
  personName?: string;
  /** True if this is the user making the request. */
  isCurrentUser?: boolean;
}

export const KnownUser = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  personName: Schema.optional(Schema.String),
  isCurrentUser: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "KnownUser" });

export interface UnknownUser {}

export const UnknownUser = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "UnknownUser" });

export interface User {
  /** A user whose account has since been deleted. */
  deletedUser?: DeletedUser;
  /** A known user. */
  knownUser?: KnownUser;
  /** A user about whom nothing is currently known. */
  unknownUser?: UnknownUser;
}

export const User = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  deletedUser: Schema.optional(DeletedUser),
  knownUser: Schema.optional(KnownUser),
  unknownUser: Schema.optional(UnknownUser),
}).annotate({ identifier: "User" });

export interface Group {
  /** The email address of the group. */
  email?: string;
  /** The title of the group. */
  title?: string;
}

export const Group = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
}).annotate({ identifier: "Group" });

export interface Domain {
  /** An opaque string used to identify this domain. */
  legacyId?: string;
  /** The name of the domain, e.g. `google.com`. */
  name?: string;
}

export const Domain = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  legacyId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "Domain" });

export interface Permission {
  /** Indicates the [Google Drive permissions role](https://developers.google.com/workspace/drive/web/manage-sharing#roles). The role determines a user's ability to read, write, and comment on items. */
  role?:
    | "ROLE_UNSPECIFIED"
    | "OWNER"
    | "ORGANIZER"
    | "FILE_ORGANIZER"
    | "EDITOR"
    | "COMMENTER"
    | "VIEWER"
    | "PUBLISHED_VIEWER"
    | (string & {});
  /** If set, this permission applies to anyone, even logged out users. */
  anyone?: Anyone;
  /** The user to whom this permission applies. */
  user?: User;
  /** The group to whom this permission applies. */
  group?: Group;
  /** The domain to whom this permission applies. */
  domain?: Domain;
  /** If true, the item can be discovered (e.g. in the user's "Shared with me" collection) without needing a link to the item. */
  allowDiscovery?: boolean;
}

export const Permission = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  role: Schema.optional(Schema.String),
  anyone: Schema.optional(Anyone),
  user: Schema.optional(User),
  group: Schema.optional(Group),
  domain: Schema.optional(Domain),
  allowDiscovery: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Permission" });

export interface PermissionChange {
  /** The set of permissions added by this change. */
  addedPermissions?: ReadonlyArray<Permission>;
  /** The set of permissions removed by this change. */
  removedPermissions?: ReadonlyArray<Permission>;
}

export const PermissionChange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  addedPermissions: Schema.optional(Schema.Array(Permission)),
  removedPermissions: Schema.optional(Schema.Array(Permission)),
}).annotate({ identifier: "PermissionChange" });

export interface DataLeakPreventionChange {
  /** The type of Data Leak Prevention (DLP) change. */
  type?: "TYPE_UNSPECIFIED" | "FLAGGED" | "CLEARED" | (string & {});
}

export const DataLeakPreventionChange =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataLeakPreventionChange" });

export interface Edit {}

export const Edit = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Edit",
});

export interface Post {
  /** The sub-type of this event. */
  subtype?:
    | "SUBTYPE_UNSPECIFIED"
    | "ADDED"
    | "DELETED"
    | "REPLY_ADDED"
    | "REPLY_DELETED"
    | "RESOLVED"
    | "REOPENED"
    | (string & {});
}

export const Post = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subtype: Schema.optional(Schema.String),
}).annotate({ identifier: "Post" });

export interface Assignment {
  /** The sub-type of this event. */
  subtype?:
    | "SUBTYPE_UNSPECIFIED"
    | "ADDED"
    | "DELETED"
    | "REPLY_ADDED"
    | "REPLY_DELETED"
    | "RESOLVED"
    | "REOPENED"
    | "REASSIGNED"
    | (string & {});
  /** The user to whom the comment was assigned. */
  assignedUser?: User;
}

export const Assignment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subtype: Schema.optional(Schema.String),
  assignedUser: Schema.optional(User),
}).annotate({ identifier: "Assignment" });

export interface Suggestion {
  /** The sub-type of this event. */
  subtype?:
    | "SUBTYPE_UNSPECIFIED"
    | "ADDED"
    | "DELETED"
    | "REPLY_ADDED"
    | "REPLY_DELETED"
    | "ACCEPTED"
    | "REJECTED"
    | "ACCEPT_DELETED"
    | "REJECT_DELETED"
    | (string & {});
}

export const Suggestion = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subtype: Schema.optional(Schema.String),
}).annotate({ identifier: "Suggestion" });

export interface Comment {
  /** A change on a regular posted comment. */
  post?: Post;
  /** Users who are mentioned in this comment. */
  mentionedUsers?: ReadonlyArray<User>;
  /** A change on an assignment. */
  assignment?: Assignment;
  /** A change on a suggestion. */
  suggestion?: Suggestion;
}

export const Comment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  post: Schema.optional(Post),
  mentionedUsers: Schema.optional(Schema.Array(User)),
  assignment: Schema.optional(Assignment),
  suggestion: Schema.optional(Suggestion),
}).annotate({ identifier: "Comment" });

export interface Text {
  /** Value of Text Field. */
  value?: string;
}

export const Text = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "Text" });

export interface SelectionList {
  /** Selection values. */
  values?: ReadonlyArray<Selection>;
}

export const SelectionList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  values: Schema.optional(Schema.Array(Selection)),
}).annotate({ identifier: "SelectionList" });

export interface Integer {
  /** Integer value. */
  value?: string;
}

export const Integer = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "Integer" });

export interface SingleUser {
  /** User value as email. */
  value?: string;
}

export const SingleUser = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "SingleUser" });

export interface UserList {
  /** User values. */
  values?: ReadonlyArray<SingleUser>;
}

export const UserList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  values: Schema.optional(Schema.Array(SingleUser)),
}).annotate({ identifier: "UserList" });

export interface Driveactivity_Date {
  /** Date value. */
  value?: string;
}

export const Driveactivity_Date = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "Driveactivity_Date" });

export interface TextList {
  /** Text values. */
  values?: ReadonlyArray<Text>;
}

export const TextList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  values: Schema.optional(Schema.Array(Text)),
}).annotate({ identifier: "TextList" });

export interface FieldValue {
  /** Text Field value. */
  text?: Text;
  /** Selection List Field value. */
  selectionList?: SelectionList;
  /** Integer Field value. */
  integer?: Integer;
  /** User List Field value. */
  userList?: UserList;
  /** Date Field value. */
  date?: Driveactivity_Date;
  /** Text List Field value. */
  textList?: TextList;
  /** Selection Field value. */
  selection?: Selection;
  /** User Field value. */
  user?: SingleUser;
}

export const FieldValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  text: Schema.optional(Text),
  selectionList: Schema.optional(SelectionList),
  integer: Schema.optional(Integer),
  userList: Schema.optional(UserList),
  date: Schema.optional(Driveactivity_Date),
  textList: Schema.optional(TextList),
  selection: Schema.optional(Selection),
  user: Schema.optional(SingleUser),
}).annotate({ identifier: "FieldValue" });

export interface FieldValueChange {
  /** The value that is now set on the field. If not present, the field was cleared. At least one of {old_value|new_value} is always set. */
  newValue?: FieldValue;
  /** The human-readable display name for this field. */
  displayName?: string;
  /** The ID of this field. Field IDs are unique within a Label. */
  fieldId?: string;
  /** The value that was previously set on the field. If not present, the field was newly set. At least one of {old_value|new_value} is always set. */
  oldValue?: FieldValue;
}

export const FieldValueChange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  newValue: Schema.optional(FieldValue),
  displayName: Schema.optional(Schema.String),
  fieldId: Schema.optional(Schema.String),
  oldValue: Schema.optional(FieldValue),
}).annotate({ identifier: "FieldValueChange" });

export interface AppliedLabelChangeDetail {
  /** Field Changes. Only present if `types` contains `LABEL_FIELD_VALUE_CHANGED`. */
  fieldChanges?: ReadonlyArray<FieldValueChange>;
  /** The Label name representing the Label that changed. This name always contains the revision of the Label that was used when this Action occurred. The format is `labels/id@revision`. */
  label?: string;
  /** The types of changes made to the Label on the Target. */
  types?: ReadonlyArray<
    | "TYPE_UNSPECIFIED"
    | "LABEL_ADDED"
    | "LABEL_REMOVED"
    | "LABEL_FIELD_VALUE_CHANGED"
    | "LABEL_APPLIED_BY_ITEM_CREATE"
    | (string & {})
  >;
  /** The human-readable title of the label that changed. */
  title?: string;
}

export const AppliedLabelChangeDetail =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldChanges: Schema.optional(Schema.Array(FieldValueChange)),
    label: Schema.optional(Schema.String),
    types: Schema.optional(Schema.Array(Schema.String)),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppliedLabelChangeDetail" });

export interface AppliedLabelChange {
  /** Changes that were made to the Label on the Target. */
  changes?: ReadonlyArray<AppliedLabelChangeDetail>;
}

export const AppliedLabelChange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  changes: Schema.optional(Schema.Array(AppliedLabelChangeDetail)),
}).annotate({ identifier: "AppliedLabelChange" });

export interface ActionDetail {
  /** A deleted object was restored. */
  restore?: Restore;
  /** An object was renamed. */
  rename?: Rename;
  /** An object was moved. */
  move?: Move;
  /** An object was referenced in an application outside of Drive/Docs. */
  reference?: ApplicationReference;
  /** Settings were changed. */
  settingsChange?: SettingsChange;
  /** An object was created. */
  create?: Create;
  /** The permission on an object was changed. */
  permissionChange?: PermissionChange;
  /** A change happened in data leak prevention status. */
  dlpChange?: DataLeakPreventionChange;
  /** An object was edited. */
  edit?: Edit;
  /** A change about comments was made. */
  comment?: Comment;
  /** An object was deleted. */
  delete?: Delete;
  /** Label was changed. */
  appliedLabelChange?: AppliedLabelChange;
}

export const ActionDetail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  restore: Schema.optional(Restore),
  rename: Schema.optional(Rename),
  move: Schema.optional(Move),
  reference: Schema.optional(ApplicationReference),
  settingsChange: Schema.optional(SettingsChange),
  create: Schema.optional(Create),
  permissionChange: Schema.optional(PermissionChange),
  dlpChange: Schema.optional(DataLeakPreventionChange),
  edit: Schema.optional(Edit),
  comment: Schema.optional(Comment),
  delete: Schema.optional(Delete),
  appliedLabelChange: Schema.optional(AppliedLabelChange),
}).annotate({ identifier: "ActionDetail" });

export interface Administrator {}

export const Administrator = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "Administrator" });

export interface AnonymousUser {}

export const AnonymousUser = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "AnonymousUser" });

export interface Impersonation {
  /** The impersonated user. */
  impersonatedUser?: User;
}

export const Impersonation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  impersonatedUser: Schema.optional(User),
}).annotate({ identifier: "Impersonation" });

export interface SystemEvent {
  /** The type of the system event that may triggered activity. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "USER_DELETION"
    | "TRASH_AUTO_PURGE"
    | (string & {});
}

export const SystemEvent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "SystemEvent" });

export interface Actor {
  /** An end user. */
  user?: User;
  /** An administrator. */
  administrator?: Administrator;
  /** An anonymous user. */
  anonymous?: AnonymousUser;
  /** An account acting on behalf of another. */
  impersonation?: Impersonation;
  /** A non-user actor (i.e. system triggered). */
  system?: SystemEvent;
}

export const Actor = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user: Schema.optional(User),
  administrator: Schema.optional(Administrator),
  anonymous: Schema.optional(AnonymousUser),
  impersonation: Schema.optional(Impersonation),
  system: Schema.optional(SystemEvent),
}).annotate({ identifier: "Actor" });

export interface Owner {
  /** The user that owns the Drive item. */
  user?: User;
  /** This field is deprecated; please use the `drive` field instead. */
  teamDrive?: TeamDriveReference;
  /** The drive that owns the item. */
  drive?: DriveReference;
  /** The domain of the Drive item owner. */
  domain?: Domain;
}

export const Owner = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user: Schema.optional(User),
  teamDrive: Schema.optional(TeamDriveReference),
  drive: Schema.optional(DriveReference),
  domain: Schema.optional(Domain),
}).annotate({ identifier: "Owner" });

export interface DriveItem {
  /** Information about the owner of this Drive item. */
  owner?: Owner;
  /** This field is deprecated; please use the `driveFile` field instead. */
  file?: File;
  /** The Drive item is a folder. Includes information about the type of folder. */
  driveFolder?: DriveFolder;
  /** This field is deprecated; please use the `driveFolder` field instead. */
  folder?: Folder;
  /** The target Drive item. The format is `items/ITEM_ID`. */
  name?: string;
  /** The Drive item is a file. */
  driveFile?: DriveFile;
  /** The MIME type of the Drive item. See https://developers.google.com/workspace/drive/v3/web/mime-types. */
  mimeType?: string;
  /** The title of the Drive item. */
  title?: string;
}

export const DriveItem = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  owner: Schema.optional(Owner),
  file: Schema.optional(File),
  driveFolder: Schema.optional(DriveFolder),
  folder: Schema.optional(Folder),
  name: Schema.optional(Schema.String),
  driveFile: Schema.optional(DriveFile),
  mimeType: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
}).annotate({ identifier: "DriveItem" });

export interface TeamDrive {
  /** This field is deprecated; please see `Drive.root` instead. */
  root?: DriveItem;
  /** This field is deprecated; please see `Drive.name` instead. */
  name?: string;
  /** This field is deprecated; please see `Drive.title` instead. */
  title?: string;
}

export const TeamDrive = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  root: Schema.optional(DriveItem),
  name: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
}).annotate({ identifier: "TeamDrive" });

export interface FileComment {
  /** The comment in the discussion thread. This identifier is an opaque string compatible with the Drive API; see https://developers.google.com/workspace/drive/v3/reference/comments/get */
  legacyCommentId?: string;
  /** The discussion thread to which the comment was added. This identifier is an opaque string compatible with the Drive API and references the first comment in a discussion; see https://developers.google.com/workspace/drive/v3/reference/comments/get */
  legacyDiscussionId?: string;
  /** The link to the discussion thread containing this comment, for example, `https://docs.google.com/DOCUMENT_ID/edit?disco=THREAD_ID`. */
  linkToDiscussion?: string;
  /** The Drive item containing this comment. */
  parent?: DriveItem;
}

export const FileComment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  legacyCommentId: Schema.optional(Schema.String),
  legacyDiscussionId: Schema.optional(Schema.String),
  linkToDiscussion: Schema.optional(Schema.String),
  parent: Schema.optional(DriveItem),
}).annotate({ identifier: "FileComment" });

export interface Drive {
  /** The root of this shared drive. */
  root?: DriveItem;
  /** The resource name of the shared drive. The format is `COLLECTION_ID/DRIVE_ID`. Clients should not assume a specific collection ID for this resource name. */
  name?: string;
  /** The title of the shared drive. */
  title?: string;
}

export const Drive = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  root: Schema.optional(DriveItem),
  name: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
}).annotate({ identifier: "Drive" });

export interface Target {
  /** The target is a Drive item. */
  driveItem?: DriveItem;
  /** This field is deprecated; please use the `drive` field instead. */
  teamDrive?: TeamDrive;
  /** The target is a comment on a Drive file. */
  fileComment?: FileComment;
  /** The target is a shared drive. */
  drive?: Drive;
}

export const Target = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  driveItem: Schema.optional(DriveItem),
  teamDrive: Schema.optional(TeamDrive),
  fileComment: Schema.optional(FileComment),
  drive: Schema.optional(Drive),
}).annotate({ identifier: "Target" });

export interface TimeRange {
  /** The start of the time range. */
  startTime?: string;
  /** The end of the time range. */
  endTime?: string;
}

export const TimeRange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
}).annotate({ identifier: "TimeRange" });

export interface Action {
  /** The action occurred at this specific time. */
  timestamp?: string;
  /** The action occurred over this time range. */
  timeRange?: TimeRange;
  /** The actor responsible for this action (or empty if all actors are responsible). */
  actor?: Actor;
  /** The target this action affects (or empty if affecting all targets). This represents the state of the target immediately after this action occurred. */
  target?: Target;
  /** The type and detailed information about the action. */
  detail?: ActionDetail;
}

export const Action = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  timestamp: Schema.optional(Schema.String),
  timeRange: Schema.optional(TimeRange),
  actor: Schema.optional(Actor),
  target: Schema.optional(Target),
  detail: Schema.optional(ActionDetail),
}).annotate({ identifier: "Action" });

export interface DriveActivity {
  /** Key information about the primary action for this activity. This is either representative, or the most important, of all actions in the activity, according to the ConsolidationStrategy in the request. */
  primaryActionDetail?: ActionDetail;
  /** All actor(s) responsible for the activity. */
  actors?: ReadonlyArray<Actor>;
  /** All Google Drive objects this activity is about (e.g. file, folder, drive). This represents the state of the target immediately after the actions occurred. */
  targets?: ReadonlyArray<Target>;
  /** The activity occurred over this time range. */
  timeRange?: TimeRange;
  /** Details on all actions in this activity. */
  actions?: ReadonlyArray<Action>;
  /** The activity occurred at this specific time. */
  timestamp?: string;
}

export const DriveActivity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  primaryActionDetail: Schema.optional(ActionDetail),
  actors: Schema.optional(Schema.Array(Actor)),
  targets: Schema.optional(Schema.Array(Target)),
  timeRange: Schema.optional(TimeRange),
  actions: Schema.optional(Schema.Array(Action)),
  timestamp: Schema.optional(Schema.String),
}).annotate({ identifier: "DriveActivity" });

export interface Legacy {}

export const Legacy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Legacy",
});

export interface ConsolidationStrategy {
  /** The individual activities are not consolidated. */
  none?: NoConsolidation;
  /** The individual activities are consolidated using the legacy strategy. */
  legacy?: Legacy;
}

export const ConsolidationStrategy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  none: Schema.optional(NoConsolidation),
  legacy: Schema.optional(Legacy),
}).annotate({ identifier: "ConsolidationStrategy" });

export interface QueryDriveActivityResponse {
  /** List of activity requested. */
  activities?: ReadonlyArray<DriveActivity>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const QueryDriveActivityResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activities: Schema.optional(Schema.Array(DriveActivity)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryDriveActivityResponse" });

export interface QueryDriveActivityRequest {
  /** The filtering for items returned from this query request. The format of the filter string is a sequence of expressions, joined by an optional "AND", where each expression is of the form "field operator value". Supported fields: - `time`: Uses numerical operators on date values either in terms of milliseconds since Jan 1, 1970 or in RFC 3339 format. Examples: - `time > 1452409200000 AND time <= 1492812924310` - `time >= "2016-01-10T01:02:03-05:00"` - `detail.action_detail_case`: Uses the "has" operator (:) and either a singular value or a list of allowed action types enclosed in parentheses, separated by a space. To exclude a result from the response, prepend a hyphen (`-`) to the beginning of the filter string. Examples: - `detail.action_detail_case:RENAME` - `detail.action_detail_case:(CREATE RESTORE)` - `-detail.action_detail_case:MOVE` */
  filter?: string;
  /** The minimum number of activities desired in the response; the server attempts to return at least this quantity. The server may also return fewer activities if it has a partial response ready before the request times out. If not set, a default value is used. */
  pageSize?: number;
  /** Return activities for this Drive item. The format is `items/ITEM_ID`. */
  itemName?: string;
  /** The token identifies which page of results to return. Set this to the next_page_token value returned from a previous query to obtain the following page of results. If not set, the first page of results is returned. */
  pageToken?: string;
  /** Return activities for this Drive folder, plus all children and descendants. The format is `items/ITEM_ID`. */
  ancestorName?: string;
  /** Details on how to consolidate related actions that make up the activity. If not set, then related actions aren't consolidated. */
  consolidationStrategy?: ConsolidationStrategy;
}

export const QueryDriveActivityRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    itemName: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    ancestorName: Schema.optional(Schema.String),
    consolidationStrategy: Schema.optional(ConsolidationStrategy),
  }).annotate({ identifier: "QueryDriveActivityRequest" });

// ==========================================================================
// Operations
// ==========================================================================

export interface QueryActivityRequest {
  /** Request body */
  body?: QueryDriveActivityRequest;
}

export const QueryActivityRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(QueryDriveActivityRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v2/activity:query", hasBody: true }),
  svc,
) as unknown as Schema.Schema<QueryActivityRequest>;

export type QueryActivityResponse = QueryDriveActivityResponse;
export const QueryActivityResponse =
  /*@__PURE__*/ /*#__PURE__*/ QueryDriveActivityResponse;

export type QueryActivityError = DefaultErrors;

/** Query past activity in Google Drive. */
export const queryActivity: API.OperationMethod<
  QueryActivityRequest,
  QueryActivityResponse,
  QueryActivityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: QueryActivityRequest,
  output: QueryActivityResponse,
  errors: [],
}));
