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

export interface Administrator {}

export const Administrator: Schema.Schema<Administrator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Administrator",
  });

export interface KnownUser {
  /** The identifier for this user that can be used with the People API to get more information. The format is `people/ACCOUNT_ID`. See https://developers.google.com/people/. */
  personName?: string;
  /** True if this is the user making the request. */
  isCurrentUser?: boolean;
}

export const KnownUser: Schema.Schema<KnownUser> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    personName: Schema.optional(Schema.String),
    isCurrentUser: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "KnownUser" });

export interface DeletedUser {}

export const DeletedUser: Schema.Schema<DeletedUser> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeletedUser",
  });

export interface UnknownUser {}

export const UnknownUser: Schema.Schema<UnknownUser> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UnknownUser",
  });

export interface User {
  /** A known user. */
  knownUser?: KnownUser;
  /** A user whose account has since been deleted. */
  deletedUser?: DeletedUser;
  /** A user about whom nothing is currently known. */
  unknownUser?: UnknownUser;
}

export const User: Schema.Schema<User> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knownUser: Schema.optional(KnownUser),
    deletedUser: Schema.optional(DeletedUser),
    unknownUser: Schema.optional(UnknownUser),
  }).annotate({ identifier: "User" });

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

export const Assignment: Schema.Schema<Assignment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subtype: Schema.optional(Schema.String),
    assignedUser: Schema.optional(User),
  }).annotate({ identifier: "Assignment" });

export interface TimeRange {
  /** The start of the time range. */
  startTime?: string;
  /** The end of the time range. */
  endTime?: string;
}

export const TimeRange: Schema.Schema<TimeRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeRange" });

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

export const RestrictionChange: Schema.Schema<RestrictionChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    feature: Schema.optional(Schema.String),
    newRestriction: Schema.optional(Schema.String),
  }).annotate({ identifier: "RestrictionChange" });

export interface NoConsolidation {}

export const NoConsolidation: Schema.Schema<NoConsolidation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "NoConsolidation",
  });

export interface Legacy {}

export const Legacy: Schema.Schema<Legacy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Legacy",
  });

export interface ConsolidationStrategy {
  /** The individual activities are not consolidated. */
  none?: NoConsolidation;
  /** The individual activities are consolidated using the legacy strategy. */
  legacy?: Legacy;
}

export const ConsolidationStrategy: Schema.Schema<ConsolidationStrategy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    none: Schema.optional(NoConsolidation),
    legacy: Schema.optional(Legacy),
  }).annotate({ identifier: "ConsolidationStrategy" });

export interface QueryDriveActivityRequest {
  /** The minimum number of activities desired in the response; the server attempts to return at least this quantity. The server may also return fewer activities if it has a partial response ready before the request times out. If not set, a default value is used. */
  pageSize?: number;
  /** The token identifies which page of results to return. Set this to the next_page_token value returned from a previous query to obtain the following page of results. If not set, the first page of results is returned. */
  pageToken?: string;
  /** Return activities for this Drive folder, plus all children and descendants. The format is `items/ITEM_ID`. */
  ancestorName?: string;
  /** Details on how to consolidate related actions that make up the activity. If not set, then related actions aren't consolidated. */
  consolidationStrategy?: ConsolidationStrategy;
  /** The filtering for items returned from this query request. The format of the filter string is a sequence of expressions, joined by an optional "AND", where each expression is of the form "field operator value". Supported fields: - `time`: Uses numerical operators on date values either in terms of milliseconds since Jan 1, 1970 or in RFC 3339 format. Examples: - `time > 1452409200000 AND time <= 1492812924310` - `time >= "2016-01-10T01:02:03-05:00"` - `detail.action_detail_case`: Uses the "has" operator (:) and either a singular value or a list of allowed action types enclosed in parentheses, separated by a space. To exclude a result from the response, prepend a hyphen (`-`) to the beginning of the filter string. Examples: - `detail.action_detail_case:RENAME` - `detail.action_detail_case:(CREATE RESTORE)` - `-detail.action_detail_case:MOVE` */
  filter?: string;
  /** Return activities for this Drive item. The format is `items/ITEM_ID`. */
  itemName?: string;
}

export const QueryDriveActivityRequest: Schema.Schema<QueryDriveActivityRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
    ancestorName: Schema.optional(Schema.String),
    consolidationStrategy: Schema.optional(ConsolidationStrategy),
    filter: Schema.optional(Schema.String),
    itemName: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryDriveActivityRequest" });

export interface Edit {}

export const Edit: Schema.Schema<Edit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Edit",
  });

export interface DriveReference {
  /** The title of the shared drive. */
  title?: string;
  /** The resource name of the shared drive. The format is `COLLECTION_ID/DRIVE_ID`. Clients should not assume a specific collection ID for this resource name. */
  name?: string;
}

export const DriveReference: Schema.Schema<DriveReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "DriveReference" });

export interface TeamDriveReference {
  /** This field is deprecated; please see `DriveReference.title` instead. */
  title?: string;
  /** This field is deprecated; please see `DriveReference.name` instead. */
  name?: string;
}

export const TeamDriveReference: Schema.Schema<TeamDriveReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "TeamDriveReference" });

export interface Domain {
  /** An opaque string used to identify this domain. */
  legacyId?: string;
  /** The name of the domain, e.g. `google.com`. */
  name?: string;
}

export const Domain: Schema.Schema<Domain> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    legacyId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Domain" });

export interface Owner {
  /** The drive that owns the item. */
  drive?: DriveReference;
  /** The user that owns the Drive item. */
  user?: User;
  /** This field is deprecated; please use the `drive` field instead. */
  teamDrive?: TeamDriveReference;
  /** The domain of the Drive item owner. */
  domain?: Domain;
}

export const Owner: Schema.Schema<Owner> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    drive: Schema.optional(DriveReference),
    user: Schema.optional(User),
    teamDrive: Schema.optional(TeamDriveReference),
    domain: Schema.optional(Domain),
  }).annotate({ identifier: "Owner" });

export interface File {}

export const File: Schema.Schema<File> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "File",
  });

export interface Folder {
  /** This field is deprecated; please see `DriveFolder.type` instead. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "MY_DRIVE_ROOT"
    | "TEAM_DRIVE_ROOT"
    | "STANDARD_FOLDER"
    | (string & {});
}

export const Folder: Schema.Schema<Folder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Folder" });

export interface DriveFile {}

export const DriveFile: Schema.Schema<DriveFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DriveFile",
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

export const DriveFolder: Schema.Schema<DriveFolder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "DriveFolder" });

export interface DriveItem {
  /** The MIME type of the Drive item. See https://developers.google.com/workspace/drive/v3/web/mime-types. */
  mimeType?: string;
  /** The title of the Drive item. */
  title?: string;
  /** Information about the owner of this Drive item. */
  owner?: Owner;
  /** This field is deprecated; please use the `driveFile` field instead. */
  file?: File;
  /** The target Drive item. The format is `items/ITEM_ID`. */
  name?: string;
  /** This field is deprecated; please use the `driveFolder` field instead. */
  folder?: Folder;
  /** The Drive item is a file. */
  driveFile?: DriveFile;
  /** The Drive item is a folder. Includes information about the type of folder. */
  driveFolder?: DriveFolder;
}

export const DriveItem: Schema.Schema<DriveItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    owner: Schema.optional(Owner),
    file: Schema.optional(File),
    name: Schema.optional(Schema.String),
    folder: Schema.optional(Folder),
    driveFile: Schema.optional(DriveFile),
    driveFolder: Schema.optional(DriveFolder),
  }).annotate({ identifier: "DriveItem" });

export interface Drive {
  /** The title of the shared drive. */
  title?: string;
  /** The root of this shared drive. */
  root?: DriveItem;
  /** The resource name of the shared drive. The format is `COLLECTION_ID/DRIVE_ID`. Clients should not assume a specific collection ID for this resource name. */
  name?: string;
}

export const Drive: Schema.Schema<Drive> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    root: Schema.optional(DriveItem),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Drive" });

export interface Restore {
  /** The type of restore action taken. */
  type?: "TYPE_UNSPECIFIED" | "UNTRASH" | (string & {});
}

export const Restore: Schema.Schema<Restore> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Restore" });

export interface Selection {
  /** Selection value as Field Choice ID. */
  value?: string;
  /** Selection value as human-readable display string. */
  displayName?: string;
}

export const Selection: Schema.Schema<Selection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Selection" });

export interface SelectionList {
  /** Selection values. */
  values?: ReadonlyArray<Selection>;
}

export const SelectionList: Schema.Schema<SelectionList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Selection)),
  }).annotate({ identifier: "SelectionList" });

export interface AnonymousUser {}

export const AnonymousUser: Schema.Schema<AnonymousUser> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AnonymousUser",
  });

export interface FileComment {
  /** The Drive item containing this comment. */
  parent?: DriveItem;
  /** The discussion thread to which the comment was added. This identifier is an opaque string compatible with the Drive API and references the first comment in a discussion; see https://developers.google.com/workspace/drive/v3/reference/comments/get */
  legacyDiscussionId?: string;
  /** The comment in the discussion thread. This identifier is an opaque string compatible with the Drive API; see https://developers.google.com/workspace/drive/v3/reference/comments/get */
  legacyCommentId?: string;
  /** The link to the discussion thread containing this comment, for example, `https://docs.google.com/DOCUMENT_ID/edit?disco=THREAD_ID`. */
  linkToDiscussion?: string;
}

export const FileComment: Schema.Schema<FileComment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(DriveItem),
    legacyDiscussionId: Schema.optional(Schema.String),
    legacyCommentId: Schema.optional(Schema.String),
    linkToDiscussion: Schema.optional(Schema.String),
  }).annotate({ identifier: "FileComment" });

export interface SingleUser {
  /** User value as email. */
  value?: string;
}

export const SingleUser: Schema.Schema<SingleUser> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "SingleUser" });

export interface UserList {
  /** User values. */
  values?: ReadonlyArray<SingleUser>;
}

export const UserList: Schema.Schema<UserList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(SingleUser)),
  }).annotate({ identifier: "UserList" });

export interface TeamDrive {
  /** This field is deprecated; please see `Drive.title` instead. */
  title?: string;
  /** This field is deprecated; please see `Drive.root` instead. */
  root?: DriveItem;
  /** This field is deprecated; please see `Drive.name` instead. */
  name?: string;
}

export const TeamDrive: Schema.Schema<TeamDrive> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    root: Schema.optional(DriveItem),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "TeamDrive" });

export interface Target {
  /** The target is a shared drive. */
  drive?: Drive;
  /** The target is a Drive item. */
  driveItem?: DriveItem;
  /** The target is a comment on a Drive file. */
  fileComment?: FileComment;
  /** This field is deprecated; please use the `drive` field instead. */
  teamDrive?: TeamDrive;
}

export const Target: Schema.Schema<Target> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    drive: Schema.optional(Drive),
    driveItem: Schema.optional(DriveItem),
    fileComment: Schema.optional(FileComment),
    teamDrive: Schema.optional(TeamDrive),
  }).annotate({ identifier: "Target" });

export interface Impersonation {
  /** The impersonated user. */
  impersonatedUser?: User;
}

export const Impersonation: Schema.Schema<Impersonation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const SystemEvent: Schema.Schema<SystemEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "SystemEvent" });

export interface Actor {
  /** An anonymous user. */
  anonymous?: AnonymousUser;
  /** An account acting on behalf of another. */
  impersonation?: Impersonation;
  /** An end user. */
  user?: User;
  /** An administrator. */
  administrator?: Administrator;
  /** A non-user actor (i.e. system triggered). */
  system?: SystemEvent;
}

export const Actor: Schema.Schema<Actor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    anonymous: Schema.optional(AnonymousUser),
    impersonation: Schema.optional(Impersonation),
    user: Schema.optional(User),
    administrator: Schema.optional(Administrator),
    system: Schema.optional(SystemEvent),
  }).annotate({ identifier: "Actor" });

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

export const Post: Schema.Schema<Post> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subtype: Schema.optional(Schema.String),
  }).annotate({ identifier: "Post" });

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

export const Suggestion: Schema.Schema<Suggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subtype: Schema.optional(Schema.String),
  }).annotate({ identifier: "Suggestion" });

export interface Comment {
  /** A change on an assignment. */
  assignment?: Assignment;
  /** A change on a regular posted comment. */
  post?: Post;
  /** A change on a suggestion. */
  suggestion?: Suggestion;
  /** Users who are mentioned in this comment. */
  mentionedUsers?: ReadonlyArray<User>;
}

export const Comment: Schema.Schema<Comment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assignment: Schema.optional(Assignment),
    post: Schema.optional(Post),
    suggestion: Schema.optional(Suggestion),
    mentionedUsers: Schema.optional(Schema.Array(User)),
  }).annotate({ identifier: "Comment" });

export interface Rename {
  /** The previous title of the drive object. */
  oldTitle?: string;
  /** The new title of the drive object. */
  newTitle?: string;
}

export const Rename: Schema.Schema<Rename> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oldTitle: Schema.optional(Schema.String),
    newTitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "Rename" });

export interface DataLeakPreventionChange {
  /** The type of Data Leak Prevention (DLP) change. */
  type?: "TYPE_UNSPECIFIED" | "FLAGGED" | "CLEARED" | (string & {});
}

export const DataLeakPreventionChange: Schema.Schema<DataLeakPreventionChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataLeakPreventionChange" });

export interface Upload {}

export const Upload: Schema.Schema<Upload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Upload",
  });

export interface DriveItemReference {
  /** The Drive item is a folder. Includes information about the type of folder. */
  driveFolder?: DriveFolder;
  /** The target Drive item. The format is `items/ITEM_ID`. */
  name?: string;
  /** This field is deprecated; please use the `driveFolder` field instead. */
  folder?: Folder;
  /** The Drive item is a file. */
  driveFile?: DriveFile;
  /** This field is deprecated; please use the `driveFile` field instead. */
  file?: File;
  /** The title of the Drive item. */
  title?: string;
}

export const DriveItemReference: Schema.Schema<DriveItemReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    driveFolder: Schema.optional(DriveFolder),
    name: Schema.optional(Schema.String),
    folder: Schema.optional(Folder),
    driveFile: Schema.optional(DriveFile),
    file: Schema.optional(File),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "DriveItemReference" });

export interface TargetReference {
  /** The target is a shared drive. */
  drive?: DriveReference;
  /** The target is a Drive item. */
  driveItem?: DriveItemReference;
  /** This field is deprecated; please use the `drive` field instead. */
  teamDrive?: TeamDriveReference;
}

export const TargetReference: Schema.Schema<TargetReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    drive: Schema.optional(DriveReference),
    driveItem: Schema.optional(DriveItemReference),
    teamDrive: Schema.optional(TeamDriveReference),
  }).annotate({ identifier: "TargetReference" });

export interface Copy {
  /** The original object. */
  originalObject?: TargetReference;
}

export const Copy: Schema.Schema<Copy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    originalObject: Schema.optional(TargetReference),
  }).annotate({ identifier: "Copy" });

export interface New {}

export const New: Schema.Schema<New> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({ identifier: "New" });

export interface Create {
  /** If present, indicates the object originated externally and was uploaded to Drive. */
  upload?: Upload;
  /** If present, indicates the object was created by copying an existing Drive object. */
  copy?: Copy;
  /** If present, indicates the object was newly created (e.g. as a blank document), not derived from a Drive object or external object. */
  new?: New;
}

export const Create: Schema.Schema<Create> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upload: Schema.optional(Upload),
    copy: Schema.optional(Copy),
    new: Schema.optional(New),
  }).annotate({ identifier: "Create" });

export interface SettingsChange {
  /** The set of changes made to restrictions. */
  restrictionChanges?: ReadonlyArray<RestrictionChange>;
}

export const SettingsChange: Schema.Schema<SettingsChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    restrictionChanges: Schema.optional(Schema.Array(RestrictionChange)),
  }).annotate({ identifier: "SettingsChange" });

export interface Driveactivity_Date {
  /** Date value. */
  value?: string;
}

export const Driveactivity_Date: Schema.Schema<Driveactivity_Date> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Driveactivity_Date" });

export interface Integer {
  /** Integer value. */
  value?: string;
}

export const Integer: Schema.Schema<Integer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Integer" });

export interface Text {
  /** Value of Text Field. */
  value?: string;
}

export const Text: Schema.Schema<Text> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Text" });

export interface TextList {
  /** Text values. */
  values?: ReadonlyArray<Text>;
}

export const TextList: Schema.Schema<TextList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Text)),
  }).annotate({ identifier: "TextList" });

export interface FieldValue {
  /** Date Field value. */
  date?: Driveactivity_Date;
  /** Integer Field value. */
  integer?: Integer;
  /** Selection List Field value. */
  selectionList?: SelectionList;
  /** Selection Field value. */
  selection?: Selection;
  /** User Field value. */
  user?: SingleUser;
  /** Text Field value. */
  text?: Text;
  /** Text List Field value. */
  textList?: TextList;
  /** User List Field value. */
  userList?: UserList;
}

export const FieldValue: Schema.Schema<FieldValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.optional(Driveactivity_Date),
    integer: Schema.optional(Integer),
    selectionList: Schema.optional(SelectionList),
    selection: Schema.optional(Selection),
    user: Schema.optional(SingleUser),
    text: Schema.optional(Text),
    textList: Schema.optional(TextList),
    userList: Schema.optional(UserList),
  }).annotate({ identifier: "FieldValue" });

export interface FieldValueChange {
  /** The ID of this field. Field IDs are unique within a Label. */
  fieldId?: string;
  /** The value that was previously set on the field. If not present, the field was newly set. At least one of {old_value|new_value} is always set. */
  oldValue?: FieldValue;
  /** The human-readable display name for this field. */
  displayName?: string;
  /** The value that is now set on the field. If not present, the field was cleared. At least one of {old_value|new_value} is always set. */
  newValue?: FieldValue;
}

export const FieldValueChange: Schema.Schema<FieldValueChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldId: Schema.optional(Schema.String),
    oldValue: Schema.optional(FieldValue),
    displayName: Schema.optional(Schema.String),
    newValue: Schema.optional(FieldValue),
  }).annotate({ identifier: "FieldValueChange" });

export interface AppliedLabelChangeDetail {
  /** The types of changes made to the Label on the Target. */
  types?: ReadonlyArray<
    | "TYPE_UNSPECIFIED"
    | "LABEL_ADDED"
    | "LABEL_REMOVED"
    | "LABEL_FIELD_VALUE_CHANGED"
    | "LABEL_APPLIED_BY_ITEM_CREATE"
    | (string & {})
  >;
  /** The Label name representing the Label that changed. This name always contains the revision of the Label that was used when this Action occurred. The format is `labels/id@revision`. */
  label?: string;
  /** The human-readable title of the label that changed. */
  title?: string;
  /** Field Changes. Only present if `types` contains `LABEL_FIELD_VALUE_CHANGED`. */
  fieldChanges?: ReadonlyArray<FieldValueChange>;
}

export const AppliedLabelChangeDetail: Schema.Schema<AppliedLabelChangeDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    types: Schema.optional(Schema.Array(Schema.String)),
    label: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    fieldChanges: Schema.optional(Schema.Array(FieldValueChange)),
  }).annotate({ identifier: "AppliedLabelChangeDetail" });

export interface AppliedLabelChange {
  /** Changes that were made to the Label on the Target. */
  changes?: ReadonlyArray<AppliedLabelChangeDetail>;
}

export const AppliedLabelChange: Schema.Schema<AppliedLabelChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    changes: Schema.optional(Schema.Array(AppliedLabelChangeDetail)),
  }).annotate({ identifier: "AppliedLabelChange" });

export interface Move {
  /** The removed parent object(s). */
  removedParents?: ReadonlyArray<TargetReference>;
  /** The added parent object(s). */
  addedParents?: ReadonlyArray<TargetReference>;
}

export const Move: Schema.Schema<Move> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    removedParents: Schema.optional(Schema.Array(TargetReference)),
    addedParents: Schema.optional(Schema.Array(TargetReference)),
  }).annotate({ identifier: "Move" });

export interface ApplicationReference {
  /** The reference type corresponding to this event. */
  type?: "UNSPECIFIED_REFERENCE_TYPE" | "LINK" | "DISCUSS" | (string & {});
}

export const ApplicationReference: Schema.Schema<ApplicationReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApplicationReference" });

export interface Group {
  /** The title of the group. */
  title?: string;
  /** The email address of the group. */
  email?: string;
}

export const Group: Schema.Schema<Group> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "Group" });

export interface Anyone {}

export const Anyone: Schema.Schema<Anyone> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Anyone",
  });

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
  /** The user to whom this permission applies. */
  user?: User;
  /** The group to whom this permission applies. */
  group?: Group;
  /** If true, the item can be discovered (e.g. in the user's "Shared with me" collection) without needing a link to the item. */
  allowDiscovery?: boolean;
  /** The domain to whom this permission applies. */
  domain?: Domain;
  /** If set, this permission applies to anyone, even logged out users. */
  anyone?: Anyone;
}

export const Permission: Schema.Schema<Permission> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    user: Schema.optional(User),
    group: Schema.optional(Group),
    allowDiscovery: Schema.optional(Schema.Boolean),
    domain: Schema.optional(Domain),
    anyone: Schema.optional(Anyone),
  }).annotate({ identifier: "Permission" });

export interface PermissionChange {
  /** The set of permissions added by this change. */
  addedPermissions?: ReadonlyArray<Permission>;
  /** The set of permissions removed by this change. */
  removedPermissions?: ReadonlyArray<Permission>;
}

export const PermissionChange: Schema.Schema<PermissionChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addedPermissions: Schema.optional(Schema.Array(Permission)),
    removedPermissions: Schema.optional(Schema.Array(Permission)),
  }).annotate({ identifier: "PermissionChange" });

export interface Delete {
  /** The type of delete action taken. */
  type?: "TYPE_UNSPECIFIED" | "TRASH" | "PERMANENT_DELETE" | (string & {});
}

export const Delete: Schema.Schema<Delete> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Delete" });

export interface ActionDetail {
  /** A deleted object was restored. */
  restore?: Restore;
  /** A change about comments was made. */
  comment?: Comment;
  /** An object was renamed. */
  rename?: Rename;
  /** A change happened in data leak prevention status. */
  dlpChange?: DataLeakPreventionChange;
  /** An object was created. */
  create?: Create;
  /** Settings were changed. */
  settingsChange?: SettingsChange;
  /** An object was edited. */
  edit?: Edit;
  /** Label was changed. */
  appliedLabelChange?: AppliedLabelChange;
  /** An object was moved. */
  move?: Move;
  /** An object was referenced in an application outside of Drive/Docs. */
  reference?: ApplicationReference;
  /** The permission on an object was changed. */
  permissionChange?: PermissionChange;
  /** An object was deleted. */
  delete?: Delete;
}

export const ActionDetail: Schema.Schema<ActionDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    restore: Schema.optional(Restore),
    comment: Schema.optional(Comment),
    rename: Schema.optional(Rename),
    dlpChange: Schema.optional(DataLeakPreventionChange),
    create: Schema.optional(Create),
    settingsChange: Schema.optional(SettingsChange),
    edit: Schema.optional(Edit),
    appliedLabelChange: Schema.optional(AppliedLabelChange),
    move: Schema.optional(Move),
    reference: Schema.optional(ApplicationReference),
    permissionChange: Schema.optional(PermissionChange),
    delete: Schema.optional(Delete),
  }).annotate({ identifier: "ActionDetail" });

export interface Action {
  /** The actor responsible for this action (or empty if all actors are responsible). */
  actor?: Actor;
  /** The action occurred at this specific time. */
  timestamp?: string;
  /** The type and detailed information about the action. */
  detail?: ActionDetail;
  /** The action occurred over this time range. */
  timeRange?: TimeRange;
  /** The target this action affects (or empty if affecting all targets). This represents the state of the target immediately after this action occurred. */
  target?: Target;
}

export const Action: Schema.Schema<Action> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actor: Schema.optional(Actor),
    timestamp: Schema.optional(Schema.String),
    detail: Schema.optional(ActionDetail),
    timeRange: Schema.optional(TimeRange),
    target: Schema.optional(Target),
  }).annotate({ identifier: "Action" });

export interface DriveActivity {
  /** All Google Drive objects this activity is about (e.g. file, folder, drive). This represents the state of the target immediately after the actions occurred. */
  targets?: ReadonlyArray<Target>;
  /** The activity occurred over this time range. */
  timeRange?: TimeRange;
  /** All actor(s) responsible for the activity. */
  actors?: ReadonlyArray<Actor>;
  /** The activity occurred at this specific time. */
  timestamp?: string;
  /** Details on all actions in this activity. */
  actions?: ReadonlyArray<Action>;
  /** Key information about the primary action for this activity. This is either representative, or the most important, of all actions in the activity, according to the ConsolidationStrategy in the request. */
  primaryActionDetail?: ActionDetail;
}

export const DriveActivity: Schema.Schema<DriveActivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targets: Schema.optional(Schema.Array(Target)),
    timeRange: Schema.optional(TimeRange),
    actors: Schema.optional(Schema.Array(Actor)),
    timestamp: Schema.optional(Schema.String),
    actions: Schema.optional(Schema.Array(Action)),
    primaryActionDetail: Schema.optional(ActionDetail),
  }).annotate({ identifier: "DriveActivity" });

export interface QueryDriveActivityResponse {
  /** List of activity requested. */
  activities?: ReadonlyArray<DriveActivity>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const QueryDriveActivityResponse: Schema.Schema<QueryDriveActivityResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activities: Schema.optional(Schema.Array(DriveActivity)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryDriveActivityResponse" });

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

export type QueryActivityError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Query past activity in Google Drive. */
export const queryActivity: API.OperationMethod<
  QueryActivityRequest,
  QueryActivityResponse,
  QueryActivityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: QueryActivityRequest,
  output: QueryActivityResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
