import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSGorillaBoyService {
  abortDocumentVersionUpload(
    input: AbortDocumentVersionUploadRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | EntityNotExistsException
    | FailedDependencyException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  activateUser(
    input: ActivateUserRequest,
  ): Effect.Effect<
    ActivateUserResponse,
    | EntityNotExistsException
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  addResourcePermissions(
    input: AddResourcePermissionsRequest,
  ): Effect.Effect<
    AddResourcePermissionsResponse,
    | FailedDependencyException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  createComment(
    input: CreateCommentRequest,
  ): Effect.Effect<
    CreateCommentResponse,
    | DocumentLockedForCommentsException
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidCommentOperationException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  createCustomMetadata(
    input: CreateCustomMetadataRequest,
  ): Effect.Effect<
    CreateCustomMetadataResponse,
    | CustomMetadataLimitExceededException
    | EntityNotExistsException
    | FailedDependencyException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  createFolder(
    input: CreateFolderRequest,
  ): Effect.Effect<
    CreateFolderResponse,
    | ConcurrentModificationException
    | ConflictingOperationException
    | EntityAlreadyExistsException
    | EntityNotExistsException
    | FailedDependencyException
    | LimitExceededException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  createLabels(
    input: CreateLabelsRequest,
  ): Effect.Effect<
    CreateLabelsResponse,
    | EntityNotExistsException
    | FailedDependencyException
    | ServiceUnavailableException
    | TooManyLabelsException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  createNotificationSubscription(
    input: CreateNotificationSubscriptionRequest,
  ): Effect.Effect<
    CreateNotificationSubscriptionResponse,
    | InvalidArgumentException
    | ServiceUnavailableException
    | TooManySubscriptionsException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  createUser(
    input: CreateUserRequest,
  ): Effect.Effect<
    CreateUserResponse,
    | EntityAlreadyExistsException
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  deactivateUser(
    input: DeactivateUserRequest,
  ): Effect.Effect<
    {},
    | EntityNotExistsException
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  deleteComment(
    input: DeleteCommentRequest,
  ): Effect.Effect<
    {},
    | DocumentLockedForCommentsException
    | EntityNotExistsException
    | FailedDependencyException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  deleteCustomMetadata(
    input: DeleteCustomMetadataRequest,
  ): Effect.Effect<
    DeleteCustomMetadataResponse,
    | EntityNotExistsException
    | FailedDependencyException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  deleteDocument(
    input: DeleteDocumentRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | ConflictingOperationException
    | EntityNotExistsException
    | FailedDependencyException
    | LimitExceededException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  deleteDocumentVersion(
    input: DeleteDocumentVersionRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | ConflictingOperationException
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidOperationException
    | ProhibitedStateException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  deleteFolder(
    input: DeleteFolderRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | ConflictingOperationException
    | EntityNotExistsException
    | FailedDependencyException
    | LimitExceededException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  deleteFolderContents(
    input: DeleteFolderContentsRequest,
  ): Effect.Effect<
    {},
    | ConflictingOperationException
    | EntityNotExistsException
    | FailedDependencyException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  deleteLabels(
    input: DeleteLabelsRequest,
  ): Effect.Effect<
    DeleteLabelsResponse,
    | EntityNotExistsException
    | FailedDependencyException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  deleteNotificationSubscription(
    input: DeleteNotificationSubscriptionRequest,
  ): Effect.Effect<
    {},
    | EntityNotExistsException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  deleteUser(
    input: DeleteUserRequest,
  ): Effect.Effect<
    {},
    | EntityNotExistsException
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  describeActivities(
    input: DescribeActivitiesRequest,
  ): Effect.Effect<
    DescribeActivitiesResponse,
    | FailedDependencyException
    | InvalidArgumentException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  describeComments(
    input: DescribeCommentsRequest,
  ): Effect.Effect<
    DescribeCommentsResponse,
    | EntityNotExistsException
    | FailedDependencyException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  describeDocumentVersions(
    input: DescribeDocumentVersionsRequest,
  ): Effect.Effect<
    DescribeDocumentVersionsResponse,
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidArgumentException
    | InvalidPasswordException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  describeFolderContents(
    input: DescribeFolderContentsRequest,
  ): Effect.Effect<
    DescribeFolderContentsResponse,
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidArgumentException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  describeGroups(
    input: DescribeGroupsRequest,
  ): Effect.Effect<
    DescribeGroupsResponse,
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  describeNotificationSubscriptions(
    input: DescribeNotificationSubscriptionsRequest,
  ): Effect.Effect<
    DescribeNotificationSubscriptionsResponse,
    | EntityNotExistsException
    | ServiceUnavailableException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  describeResourcePermissions(
    input: DescribeResourcePermissionsRequest,
  ): Effect.Effect<
    DescribeResourcePermissionsResponse,
    | FailedDependencyException
    | InvalidArgumentException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  describeRootFolders(
    input: DescribeRootFoldersRequest,
  ): Effect.Effect<
    DescribeRootFoldersResponse,
    | FailedDependencyException
    | InvalidArgumentException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  describeUsers(
    input: DescribeUsersRequest,
  ): Effect.Effect<
    DescribeUsersResponse,
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidArgumentException
    | RequestedEntityTooLargeException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  getCurrentUser(
    input: GetCurrentUserRequest,
  ): Effect.Effect<
    GetCurrentUserResponse,
    | EntityNotExistsException
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  getDocument(
    input: GetDocumentRequest,
  ): Effect.Effect<
    GetDocumentResponse,
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidArgumentException
    | InvalidPasswordException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  getDocumentPath(
    input: GetDocumentPathRequest,
  ): Effect.Effect<
    GetDocumentPathResponse,
    | EntityNotExistsException
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  getDocumentVersion(
    input: GetDocumentVersionRequest,
  ): Effect.Effect<
    GetDocumentVersionResponse,
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidPasswordException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  getFolder(
    input: GetFolderRequest,
  ): Effect.Effect<
    GetFolderResponse,
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidArgumentException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  getFolderPath(
    input: GetFolderPathRequest,
  ): Effect.Effect<
    GetFolderPathResponse,
    | EntityNotExistsException
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  getResources(
    input: GetResourcesRequest,
  ): Effect.Effect<
    GetResourcesResponse,
    | FailedDependencyException
    | InvalidArgumentException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  initiateDocumentVersionUpload(
    input: InitiateDocumentVersionUploadRequest,
  ): Effect.Effect<
    InitiateDocumentVersionUploadResponse,
    | DraftUploadOutOfSyncException
    | EntityAlreadyExistsException
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidArgumentException
    | InvalidPasswordException
    | LimitExceededException
    | ProhibitedStateException
    | ResourceAlreadyCheckedOutException
    | ServiceUnavailableException
    | StorageLimitExceededException
    | StorageLimitWillExceedException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  removeAllResourcePermissions(
    input: RemoveAllResourcePermissionsRequest,
  ): Effect.Effect<
    {},
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  removeResourcePermission(
    input: RemoveResourcePermissionRequest,
  ): Effect.Effect<
    {},
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  restoreDocumentVersions(
    input: RestoreDocumentVersionsRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | ConflictingOperationException
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidOperationException
    | ProhibitedStateException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  searchResources(
    input: SearchResourcesRequest,
  ): Effect.Effect<
    SearchResourcesResponse,
    | InvalidArgumentException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  updateDocument(
    input: UpdateDocumentRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | ConflictingOperationException
    | EntityAlreadyExistsException
    | EntityNotExistsException
    | FailedDependencyException
    | LimitExceededException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  updateDocumentVersion(
    input: UpdateDocumentVersionRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidOperationException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  updateFolder(
    input: UpdateFolderRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | ConflictingOperationException
    | EntityAlreadyExistsException
    | EntityNotExistsException
    | FailedDependencyException
    | LimitExceededException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
  updateUser(
    input: UpdateUserRequest,
  ): Effect.Effect<
    UpdateUserResponse,
    | DeactivatingLastSystemUserException
    | EntityNotExistsException
    | FailedDependencyException
    | IllegalUserStateException
    | InvalidArgumentException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError
  >;
}

export type Workdocs = AWSGorillaBoyService;

export interface AbortDocumentVersionUploadRequest {
  AuthenticationToken?: string;
  DocumentId: string;
  VersionId: string;
}
export interface ActivateUserRequest {
  UserId: string;
  AuthenticationToken?: string;
}
export interface ActivateUserResponse {
  User?: User;
}
export interface Activity {
  Type?: ActivityType;
  TimeStamp?: Date | string;
  IsIndirectActivity?: boolean;
  OrganizationId?: string;
  Initiator?: UserMetadata;
  Participants?: Participants;
  ResourceMetadata?: ResourceMetadata;
  OriginalParent?: ResourceMetadata;
  CommentMetadata?: CommentMetadata;
}
export type ActivityNamesFilterType = string;

export type ActivityType =
  | "DOCUMENT_CHECKED_IN"
  | "DOCUMENT_CHECKED_OUT"
  | "DOCUMENT_RENAMED"
  | "DOCUMENT_VERSION_UPLOADED"
  | "DOCUMENT_VERSION_DELETED"
  | "DOCUMENT_VERSION_VIEWED"
  | "DOCUMENT_VERSION_DOWNLOADED"
  | "DOCUMENT_RECYCLED"
  | "DOCUMENT_RESTORED"
  | "DOCUMENT_REVERTED"
  | "DOCUMENT_SHARED"
  | "DOCUMENT_UNSHARED"
  | "DOCUMENT_SHARE_PERMISSION_CHANGED"
  | "DOCUMENT_SHAREABLE_LINK_CREATED"
  | "DOCUMENT_SHAREABLE_LINK_REMOVED"
  | "DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED"
  | "DOCUMENT_MOVED"
  | "DOCUMENT_COMMENT_ADDED"
  | "DOCUMENT_COMMENT_DELETED"
  | "DOCUMENT_ANNOTATION_ADDED"
  | "DOCUMENT_ANNOTATION_DELETED"
  | "FOLDER_CREATED"
  | "FOLDER_DELETED"
  | "FOLDER_RENAMED"
  | "FOLDER_RECYCLED"
  | "FOLDER_RESTORED"
  | "FOLDER_SHARED"
  | "FOLDER_UNSHARED"
  | "FOLDER_SHARE_PERMISSION_CHANGED"
  | "FOLDER_SHAREABLE_LINK_CREATED"
  | "FOLDER_SHAREABLE_LINK_REMOVED"
  | "FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED"
  | "FOLDER_MOVED";
export type AdditionalResponseFieldsList = Array<AdditionalResponseFieldType>;
export type AdditionalResponseFieldType = "WEBURL";
export interface AddResourcePermissionsRequest {
  AuthenticationToken?: string;
  ResourceId: string;
  Principals: Array<SharePrincipal>;
  NotificationOptions?: NotificationOptions;
}
export interface AddResourcePermissionsResponse {
  ShareResults?: Array<ShareResult>;
}
export type AuthenticationHeaderType = string;

export type BooleanEnumType = "TRUE" | "FALSE";
export type BooleanType = boolean;

export interface Comment {
  CommentId: string;
  ParentId?: string;
  ThreadId?: string;
  Text?: string;
  Contributor?: User;
  CreatedTimestamp?: Date | string;
  Status?: CommentStatusType;
  Visibility?: CommentVisibilityType;
  RecipientId?: string;
}
export type CommentIdType = string;

export type CommentList = Array<Comment>;
export interface CommentMetadata {
  CommentId?: string;
  Contributor?: User;
  CreatedTimestamp?: Date | string;
  CommentStatus?: CommentStatusType;
  RecipientId?: string;
  ContributorId?: string;
}
export type CommentStatusType = "DRAFT" | "PUBLISHED" | "DELETED";
export type CommentTextType = string;

export type CommentVisibilityType = "PUBLIC" | "PRIVATE";
export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly Message?: string;
}> {}
export declare class ConflictingOperationException extends EffectData.TaggedError(
  "ConflictingOperationException",
)<{
  readonly Message?: string;
}> {}
export type ContentCategoryType =
  | "IMAGE"
  | "DOCUMENT"
  | "PDF"
  | "SPREADSHEET"
  | "PRESENTATION"
  | "AUDIO"
  | "VIDEO"
  | "SOURCE_CODE"
  | "OTHER";
export interface CreateCommentRequest {
  AuthenticationToken?: string;
  DocumentId: string;
  VersionId: string;
  ParentId?: string;
  ThreadId?: string;
  Text: string;
  Visibility?: CommentVisibilityType;
  NotifyCollaborators?: boolean;
}
export interface CreateCommentResponse {
  Comment?: Comment;
}
export interface CreateCustomMetadataRequest {
  AuthenticationToken?: string;
  ResourceId: string;
  VersionId?: string;
  CustomMetadata: Record<string, string>;
}
export interface CreateCustomMetadataResponse {}
export interface CreateFolderRequest {
  AuthenticationToken?: string;
  Name?: string;
  ParentFolderId: string;
}
export interface CreateFolderResponse {
  Metadata?: FolderMetadata;
}
export interface CreateLabelsRequest {
  ResourceId: string;
  Labels: Array<string>;
  AuthenticationToken?: string;
}
export interface CreateLabelsResponse {}
export interface CreateNotificationSubscriptionRequest {
  OrganizationId: string;
  Endpoint: string;
  Protocol: SubscriptionProtocolType;
  SubscriptionType: SubscriptionType;
}
export interface CreateNotificationSubscriptionResponse {
  Subscription?: Subscription;
}
export interface CreateUserRequest {
  OrganizationId?: string;
  Username: string;
  EmailAddress?: string;
  GivenName: string;
  Surname: string;
  Password: string;
  TimeZoneId?: string;
  StorageRule?: StorageRuleType;
  AuthenticationToken?: string;
}
export interface CreateUserResponse {
  User?: User;
}
export type CustomMetadataKeyList = Array<string>;
export type CustomMetadataKeyType = string;

export declare class CustomMetadataLimitExceededException extends EffectData.TaggedError(
  "CustomMetadataLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type CustomMetadataMap = Record<string, string>;
export type CustomMetadataValueType = string;

export interface DateRangeType {
  StartValue?: Date | string;
  EndValue?: Date | string;
}
export interface DeactivateUserRequest {
  UserId: string;
  AuthenticationToken?: string;
}
export declare class DeactivatingLastSystemUserException extends EffectData.TaggedError(
  "DeactivatingLastSystemUserException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export interface DeleteCommentRequest {
  AuthenticationToken?: string;
  DocumentId: string;
  VersionId: string;
  CommentId: string;
}
export interface DeleteCustomMetadataRequest {
  AuthenticationToken?: string;
  ResourceId: string;
  VersionId?: string;
  Keys?: Array<string>;
  DeleteAll?: boolean;
}
export interface DeleteCustomMetadataResponse {}
export interface DeleteDocumentRequest {
  AuthenticationToken?: string;
  DocumentId: string;
}
export interface DeleteDocumentVersionRequest {
  AuthenticationToken?: string;
  DocumentId: string;
  VersionId: string;
  DeletePriorVersions: boolean;
}
export interface DeleteFolderContentsRequest {
  AuthenticationToken?: string;
  FolderId: string;
}
export interface DeleteFolderRequest {
  AuthenticationToken?: string;
  FolderId: string;
}
export interface DeleteLabelsRequest {
  ResourceId: string;
  AuthenticationToken?: string;
  Labels?: Array<string>;
  DeleteAll?: boolean;
}
export interface DeleteLabelsResponse {}
export interface DeleteNotificationSubscriptionRequest {
  SubscriptionId: string;
  OrganizationId: string;
}
export interface DeleteUserRequest {
  AuthenticationToken?: string;
  UserId: string;
}
export interface DescribeActivitiesRequest {
  AuthenticationToken?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  OrganizationId?: string;
  ActivityTypes?: string;
  ResourceId?: string;
  UserId?: string;
  IncludeIndirectActivities?: boolean;
  Limit?: number;
  Marker?: string;
}
export interface DescribeActivitiesResponse {
  UserActivities?: Array<Activity>;
  Marker?: string;
}
export interface DescribeCommentsRequest {
  AuthenticationToken?: string;
  DocumentId: string;
  VersionId: string;
  Limit?: number;
  Marker?: string;
}
export interface DescribeCommentsResponse {
  Comments?: Array<Comment>;
  Marker?: string;
}
export interface DescribeDocumentVersionsRequest {
  AuthenticationToken?: string;
  DocumentId: string;
  Marker?: string;
  Limit?: number;
  Include?: string;
  Fields?: string;
}
export interface DescribeDocumentVersionsResponse {
  DocumentVersions?: Array<DocumentVersionMetadata>;
  Marker?: string;
}
export interface DescribeFolderContentsRequest {
  AuthenticationToken?: string;
  FolderId: string;
  Sort?: ResourceSortType;
  Order?: OrderType;
  Limit?: number;
  Marker?: string;
  Type?: FolderContentType;
  Include?: string;
}
export interface DescribeFolderContentsResponse {
  Folders?: Array<FolderMetadata>;
  Documents?: Array<DocumentMetadata>;
  Marker?: string;
}
export interface DescribeGroupsRequest {
  AuthenticationToken?: string;
  SearchQuery: string;
  OrganizationId?: string;
  Marker?: string;
  Limit?: number;
}
export interface DescribeGroupsResponse {
  Groups?: Array<GroupMetadata>;
  Marker?: string;
}
export interface DescribeNotificationSubscriptionsRequest {
  OrganizationId: string;
  Marker?: string;
  Limit?: number;
}
export interface DescribeNotificationSubscriptionsResponse {
  Subscriptions?: Array<Subscription>;
  Marker?: string;
}
export interface DescribeResourcePermissionsRequest {
  AuthenticationToken?: string;
  ResourceId: string;
  PrincipalId?: string;
  Limit?: number;
  Marker?: string;
}
export interface DescribeResourcePermissionsResponse {
  Principals?: Array<Principal>;
  Marker?: string;
}
export interface DescribeRootFoldersRequest {
  AuthenticationToken: string;
  Limit?: number;
  Marker?: string;
}
export interface DescribeRootFoldersResponse {
  Folders?: Array<FolderMetadata>;
  Marker?: string;
}
export interface DescribeUsersRequest {
  AuthenticationToken?: string;
  OrganizationId?: string;
  UserIds?: string;
  Query?: string;
  Include?: UserFilterType;
  Order?: OrderType;
  Sort?: UserSortType;
  Marker?: string;
  Limit?: number;
  Fields?: string;
}
export interface DescribeUsersResponse {
  Users?: Array<User>;
  TotalNumberOfUsers?: number;
  Marker?: string;
}
export type DocumentContentType = string;

export declare class DocumentLockedForCommentsException extends EffectData.TaggedError(
  "DocumentLockedForCommentsException",
)<{
  readonly Message?: string;
}> {}
export interface DocumentMetadata {
  Id?: string;
  CreatorId?: string;
  ParentFolderId?: string;
  CreatedTimestamp?: Date | string;
  ModifiedTimestamp?: Date | string;
  LatestVersionMetadata?: DocumentVersionMetadata;
  ResourceState?: ResourceStateType;
  Labels?: Array<string>;
}
export type DocumentMetadataList = Array<DocumentMetadata>;
export type DocumentSourceType = "ORIGINAL" | "WITH_COMMENTS";
export type DocumentSourceUrlMap = Record<DocumentSourceType, string>;
export type DocumentStatusType = "INITIALIZED" | "ACTIVE";
export type DocumentThumbnailType = "SMALL" | "SMALL_HQ" | "LARGE";
export type DocumentThumbnailUrlMap = Record<DocumentThumbnailType, string>;
export type DocumentVersionIdType = string;

export interface DocumentVersionMetadata {
  Id?: string;
  Name?: string;
  ContentType?: string;
  Size?: number;
  Signature?: string;
  Status?: DocumentStatusType;
  CreatedTimestamp?: Date | string;
  ModifiedTimestamp?: Date | string;
  ContentCreatedTimestamp?: Date | string;
  ContentModifiedTimestamp?: Date | string;
  CreatorId?: string;
  Thumbnail?: Record<DocumentThumbnailType, string>;
  Source?: Record<DocumentSourceType, string>;
}
export type DocumentVersionMetadataList = Array<DocumentVersionMetadata>;
export type DocumentVersionStatus = "ACTIVE";
export declare class DraftUploadOutOfSyncException extends EffectData.TaggedError(
  "DraftUploadOutOfSyncException",
)<{
  readonly Message?: string;
}> {}
export type EmailAddressType = string;

export declare class EntityAlreadyExistsException extends EffectData.TaggedError(
  "EntityAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export type EntityIdList = Array<string>;
export declare class EntityNotExistsException extends EffectData.TaggedError(
  "EntityNotExistsException",
)<{
  readonly Message?: string;
  readonly EntityIds?: Array<string>;
}> {}
export type ErrorMessageType = string;

export type ExceptionCodeType = string;

export declare class FailedDependencyException extends EffectData.TaggedError(
  "FailedDependencyException",
)<{
  readonly Message?: string;
}> {}
export type FieldNamesType = string;

export interface Filters {
  TextLocales?: Array<LanguageCodeType>;
  ContentCategories?: Array<ContentCategoryType>;
  ResourceTypes?: Array<SearchResourceType>;
  Labels?: Array<string>;
  Principals?: Array<SearchPrincipalType>;
  AncestorIds?: Array<string>;
  SearchCollectionTypes?: Array<SearchCollectionType>;
  SizeRange?: LongRangeType;
  CreatedRange?: DateRangeType;
  ModifiedRange?: DateRangeType;
}
export type FolderContentType = "ALL" | "DOCUMENT" | "FOLDER";
export interface FolderMetadata {
  Id?: string;
  Name?: string;
  CreatorId?: string;
  ParentFolderId?: string;
  CreatedTimestamp?: Date | string;
  ModifiedTimestamp?: Date | string;
  ResourceState?: ResourceStateType;
  Signature?: string;
  Labels?: Array<string>;
  Size?: number;
  LatestVersionSize?: number;
}
export type FolderMetadataList = Array<FolderMetadata>;
export interface GetCurrentUserRequest {
  AuthenticationToken: string;
}
export interface GetCurrentUserResponse {
  User?: User;
}
export interface GetDocumentPathRequest {
  AuthenticationToken?: string;
  DocumentId: string;
  Limit?: number;
  Fields?: string;
  Marker?: string;
}
export interface GetDocumentPathResponse {
  Path?: ResourcePath;
}
export interface GetDocumentRequest {
  AuthenticationToken?: string;
  DocumentId: string;
  IncludeCustomMetadata?: boolean;
}
export interface GetDocumentResponse {
  Metadata?: DocumentMetadata;
  CustomMetadata?: Record<string, string>;
}
export interface GetDocumentVersionRequest {
  AuthenticationToken?: string;
  DocumentId: string;
  VersionId: string;
  Fields?: string;
  IncludeCustomMetadata?: boolean;
}
export interface GetDocumentVersionResponse {
  Metadata?: DocumentVersionMetadata;
  CustomMetadata?: Record<string, string>;
}
export interface GetFolderPathRequest {
  AuthenticationToken?: string;
  FolderId: string;
  Limit?: number;
  Fields?: string;
  Marker?: string;
}
export interface GetFolderPathResponse {
  Path?: ResourcePath;
}
export interface GetFolderRequest {
  AuthenticationToken?: string;
  FolderId: string;
  IncludeCustomMetadata?: boolean;
}
export interface GetFolderResponse {
  Metadata?: FolderMetadata;
  CustomMetadata?: Record<string, string>;
}
export interface GetResourcesRequest {
  AuthenticationToken?: string;
  UserId?: string;
  CollectionType?: ResourceCollectionType;
  Limit?: number;
  Marker?: string;
}
export interface GetResourcesResponse {
  Folders?: Array<FolderMetadata>;
  Documents?: Array<DocumentMetadata>;
  Marker?: string;
}
export interface GroupMetadata {
  Id?: string;
  Name?: string;
}
export type GroupMetadataList = Array<GroupMetadata>;
export type GroupNameType = string;

export type HashType = string;

export type HeaderNameType = string;

export type HeaderValueType = string;

export type IdType = string;

export declare class IllegalUserStateException extends EffectData.TaggedError(
  "IllegalUserStateException",
)<{
  readonly Message?: string;
}> {}
export interface InitiateDocumentVersionUploadRequest {
  AuthenticationToken?: string;
  Id?: string;
  Name?: string;
  ContentCreatedTimestamp?: Date | string;
  ContentModifiedTimestamp?: Date | string;
  ContentType?: string;
  DocumentSizeInBytes?: number;
  ParentFolderId?: string;
}
export interface InitiateDocumentVersionUploadResponse {
  Metadata?: DocumentMetadata;
  UploadMetadata?: UploadMetadata;
}
export declare class InvalidArgumentException extends EffectData.TaggedError(
  "InvalidArgumentException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidCommentOperationException extends EffectData.TaggedError(
  "InvalidCommentOperationException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidOperationException extends EffectData.TaggedError(
  "InvalidOperationException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidPasswordException extends EffectData.TaggedError(
  "InvalidPasswordException",
)<{
  readonly Message?: string;
}> {}
export type LanguageCodeType =
  | "AR"
  | "BG"
  | "BN"
  | "DA"
  | "DE"
  | "CS"
  | "EL"
  | "EN"
  | "ES"
  | "FA"
  | "FI"
  | "FR"
  | "HI"
  | "HU"
  | "ID"
  | "IT"
  | "JA"
  | "KO"
  | "LT"
  | "LV"
  | "NL"
  | "NO"
  | "PT"
  | "RO"
  | "RU"
  | "SV"
  | "SW"
  | "TH"
  | "TR"
  | "ZH"
  | "DEFAULT";
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type LimitType = number;

export type LocaleType =
  | "EN"
  | "FR"
  | "KO"
  | "DE"
  | "ES"
  | "JA"
  | "RU"
  | "ZH_CN"
  | "ZH_TW"
  | "PT_BR"
  | "DEFAULT";
export interface LongRangeType {
  StartValue?: number;
  EndValue?: number;
}
export type LongType = number;

export type MarkerType = string;

export type MessageType = string;

export type NextMarkerType = string;

export interface NotificationOptions {
  SendEmail?: boolean;
  EmailMessage?: string;
}
export type OrderByFieldType =
  | "RELEVANCE"
  | "NAME"
  | "SIZE"
  | "CREATED_TIMESTAMP"
  | "MODIFIED_TIMESTAMP";
export type OrderType = "ASCENDING" | "DESCENDING";
export type OrganizationUserList = Array<User>;
export type PageMarkerType = string;

export interface Participants {
  Users?: Array<UserMetadata>;
  Groups?: Array<GroupMetadata>;
}
export type PasswordType = string;

export interface PermissionInfo {
  Role?: RoleType;
  Type?: RolePermissionType;
}
export type PermissionInfoList = Array<PermissionInfo>;
export type PositiveIntegerType = number;

export type PositiveSizeType = number;

export interface Principal {
  Id?: string;
  Type?: PrincipalType;
  Roles?: Array<PermissionInfo>;
}
export type PrincipalList = Array<Principal>;
export type PrincipalRoleType = "VIEWER" | "CONTRIBUTOR" | "OWNER" | "COOWNER";
export type PrincipalType =
  | "USER"
  | "GROUP"
  | "INVITE"
  | "ANONYMOUS"
  | "ORGANIZATION";
export declare class ProhibitedStateException extends EffectData.TaggedError(
  "ProhibitedStateException",
)<{
  readonly Message?: string;
}> {}
export interface RemoveAllResourcePermissionsRequest {
  AuthenticationToken?: string;
  ResourceId: string;
}
export interface RemoveResourcePermissionRequest {
  AuthenticationToken?: string;
  ResourceId: string;
  PrincipalId: string;
  PrincipalType?: PrincipalType;
}
export declare class RequestedEntityTooLargeException extends EffectData.TaggedError(
  "RequestedEntityTooLargeException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceAlreadyCheckedOutException extends EffectData.TaggedError(
  "ResourceAlreadyCheckedOutException",
)<{
  readonly Message?: string;
}> {}
export type ResourceCollectionType = "SHARED_WITH_ME";
export type ResourceIdType = string;

export interface ResourceMetadata {
  Type?: ResourceType;
  Name?: string;
  OriginalName?: string;
  Id?: string;
  VersionId?: string;
  Owner?: UserMetadata;
  ParentId?: string;
}
export type ResourceNameType = string;

export interface ResourcePath {
  Components?: Array<ResourcePathComponent>;
}
export interface ResourcePathComponent {
  Id?: string;
  Name?: string;
}
export type ResourcePathComponentList = Array<ResourcePathComponent>;
export type ResourceSortType = "DATE" | "NAME";
export type ResourceStateType =
  | "ACTIVE"
  | "RESTORING"
  | "RECYCLING"
  | "RECYCLED";
export type ResourceType = "FOLDER" | "DOCUMENT";
export interface ResponseItem {
  ResourceType?: ResponseItemType;
  WebUrl?: string;
  DocumentMetadata?: DocumentMetadata;
  FolderMetadata?: FolderMetadata;
  CommentMetadata?: CommentMetadata;
  DocumentVersionMetadata?: DocumentVersionMetadata;
}
export type ResponseItemsList = Array<ResponseItem>;
export type ResponseItemType =
  | "DOCUMENT"
  | "FOLDER"
  | "COMMENT"
  | "DOCUMENT_VERSION";
export type ResponseItemWebUrl = string;

export interface RestoreDocumentVersionsRequest {
  AuthenticationToken?: string;
  DocumentId: string;
}
export type RolePermissionType = "DIRECT" | "INHERITED";
export type RoleType = "VIEWER" | "CONTRIBUTOR" | "OWNER" | "COOWNER";
export type SearchAncestorId = string;

export type SearchAncestorIdList = Array<string>;
export type SearchCollectionType = "OWNED" | "SHARED_WITH_ME";
export type SearchCollectionTypeList = Array<SearchCollectionType>;
export type SearchContentCategoryTypeList = Array<ContentCategoryType>;
export type SearchLabel = string;

export type SearchLabelList = Array<string>;
export type SearchMarkerType = string;

export type SearchPrincipalRoleList = Array<PrincipalRoleType>;
export interface SearchPrincipalType {
  Id: string;
  Roles?: Array<PrincipalRoleType>;
}
export type SearchPrincipalTypeList = Array<SearchPrincipalType>;
export type SearchQueryScopeType = "NAME" | "CONTENT";
export type SearchQueryScopeTypeList = Array<SearchQueryScopeType>;
export type SearchQueryType = string;

export interface SearchResourcesRequest {
  AuthenticationToken?: string;
  QueryText?: string;
  QueryScopes?: Array<SearchQueryScopeType>;
  OrganizationId?: string;
  AdditionalResponseFields?: Array<AdditionalResponseFieldType>;
  Filters?: Filters;
  OrderBy?: Array<SearchSortResult>;
  Limit?: number;
  Marker?: string;
}
export interface SearchResourcesResponse {
  Items?: Array<ResponseItem>;
  Marker?: string;
}
export type SearchResourceType =
  | "FOLDER"
  | "DOCUMENT"
  | "COMMENT"
  | "DOCUMENT_VERSION";
export type SearchResourceTypeList = Array<SearchResourceType>;
export type SearchResultsLimitType = number;

export type SearchResultSortList = Array<SearchSortResult>;
export interface SearchSortResult {
  Field?: OrderByFieldType;
  Order?: SortOrder;
}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Message?: string;
}> {}
export type SharedLabel = string;

export type SharedLabels = Array<string>;
export interface SharePrincipal {
  Id: string;
  Type: PrincipalType;
  Role: RoleType;
}
export type SharePrincipalList = Array<SharePrincipal>;
export interface ShareResult {
  PrincipalId?: string;
  InviteePrincipalId?: string;
  Role?: RoleType;
  Status?: ShareStatusType;
  ShareId?: string;
  StatusMessage?: string;
}
export type ShareResultsList = Array<ShareResult>;
export type ShareStatusType = "SUCCESS" | "FAILURE";
export type SignedHeaderMap = Record<string, string>;
export type SizeType = number;

export type SortOrder = "ASC" | "DESC";
export declare class StorageLimitExceededException extends EffectData.TaggedError(
  "StorageLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class StorageLimitWillExceedException extends EffectData.TaggedError(
  "StorageLimitWillExceedException",
)<{
  readonly Message?: string;
}> {}
export interface StorageRuleType {
  StorageAllocatedInBytes?: number;
  StorageType?: StorageType;
}
export type StorageType = "UNLIMITED" | "QUOTA";
export interface Subscription {
  SubscriptionId?: string;
  EndPoint?: string;
  Protocol?: SubscriptionProtocolType;
}
export type SubscriptionEndPointType = string;

export type SubscriptionList = Array<Subscription>;
export type SubscriptionProtocolType = "HTTPS" | "SQS";
export type SubscriptionType = "ALL";
export type TextLocaleTypeList = Array<LanguageCodeType>;
export type TimestampType = Date | string;

export type TimeZoneIdType = string;

export declare class TooManyLabelsException extends EffectData.TaggedError(
  "TooManyLabelsException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManySubscriptionsException extends EffectData.TaggedError(
  "TooManySubscriptionsException",
)<{
  readonly Message?: string;
}> {}
export declare class UnauthorizedOperationException extends EffectData.TaggedError(
  "UnauthorizedOperationException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export declare class UnauthorizedResourceAccessException extends EffectData.TaggedError(
  "UnauthorizedResourceAccessException",
)<{
  readonly Message?: string;
}> {}
export interface UpdateDocumentRequest {
  AuthenticationToken?: string;
  DocumentId: string;
  Name?: string;
  ParentFolderId?: string;
  ResourceState?: ResourceStateType;
}
export interface UpdateDocumentVersionRequest {
  AuthenticationToken?: string;
  DocumentId: string;
  VersionId: string;
  VersionStatus?: DocumentVersionStatus;
}
export interface UpdateFolderRequest {
  AuthenticationToken?: string;
  FolderId: string;
  Name?: string;
  ParentFolderId?: string;
  ResourceState?: ResourceStateType;
}
export interface UpdateUserRequest {
  AuthenticationToken?: string;
  UserId: string;
  GivenName?: string;
  Surname?: string;
  Type?: UserType;
  StorageRule?: StorageRuleType;
  TimeZoneId?: string;
  Locale?: LocaleType;
  GrantPoweruserPrivileges?: BooleanEnumType;
}
export interface UpdateUserResponse {
  User?: User;
}
export interface UploadMetadata {
  UploadUrl?: string;
  SignedHeaders?: Record<string, string>;
}
export type UrlType = string;

export interface User {
  Id?: string;
  Username?: string;
  EmailAddress?: string;
  GivenName?: string;
  Surname?: string;
  OrganizationId?: string;
  RootFolderId?: string;
  RecycleBinFolderId?: string;
  Status?: UserStatusType;
  Type?: UserType;
  CreatedTimestamp?: Date | string;
  ModifiedTimestamp?: Date | string;
  TimeZoneId?: string;
  Locale?: LocaleType;
  Storage?: UserStorageMetadata;
}
export type UserActivities = Array<Activity>;
export type UserAttributeValueType = string;

export type UserFilterType = "ALL" | "ACTIVE_PENDING";
export type UserIdsType = string;

export interface UserMetadata {
  Id?: string;
  Username?: string;
  GivenName?: string;
  Surname?: string;
  EmailAddress?: string;
}
export type UserMetadataList = Array<UserMetadata>;
export type UsernameType = string;

export type UserSortType =
  | "USER_NAME"
  | "FULL_NAME"
  | "STORAGE_LIMIT"
  | "USER_STATUS"
  | "STORAGE_USED";
export type UserStatusType = "ACTIVE" | "INACTIVE" | "PENDING";
export interface UserStorageMetadata {
  StorageUtilizedInBytes?: number;
  StorageRule?: StorageRuleType;
}
export type UserType =
  | "USER"
  | "ADMIN"
  | "POWERUSER"
  | "MINIMALUSER"
  | "WORKSPACESUSER";
export declare namespace AbortDocumentVersionUpload {
  export type Input = AbortDocumentVersionUploadRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | EntityNotExistsException
    | FailedDependencyException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace ActivateUser {
  export type Input = ActivateUserRequest;
  export type Output = ActivateUserResponse;
  export type Error =
    | EntityNotExistsException
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace AddResourcePermissions {
  export type Input = AddResourcePermissionsRequest;
  export type Output = AddResourcePermissionsResponse;
  export type Error =
    | FailedDependencyException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace CreateComment {
  export type Input = CreateCommentRequest;
  export type Output = CreateCommentResponse;
  export type Error =
    | DocumentLockedForCommentsException
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidCommentOperationException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace CreateCustomMetadata {
  export type Input = CreateCustomMetadataRequest;
  export type Output = CreateCustomMetadataResponse;
  export type Error =
    | CustomMetadataLimitExceededException
    | EntityNotExistsException
    | FailedDependencyException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace CreateFolder {
  export type Input = CreateFolderRequest;
  export type Output = CreateFolderResponse;
  export type Error =
    | ConcurrentModificationException
    | ConflictingOperationException
    | EntityAlreadyExistsException
    | EntityNotExistsException
    | FailedDependencyException
    | LimitExceededException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace CreateLabels {
  export type Input = CreateLabelsRequest;
  export type Output = CreateLabelsResponse;
  export type Error =
    | EntityNotExistsException
    | FailedDependencyException
    | ServiceUnavailableException
    | TooManyLabelsException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace CreateNotificationSubscription {
  export type Input = CreateNotificationSubscriptionRequest;
  export type Output = CreateNotificationSubscriptionResponse;
  export type Error =
    | InvalidArgumentException
    | ServiceUnavailableException
    | TooManySubscriptionsException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace CreateUser {
  export type Input = CreateUserRequest;
  export type Output = CreateUserResponse;
  export type Error =
    | EntityAlreadyExistsException
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DeactivateUser {
  export type Input = DeactivateUserRequest;
  export type Output = {};
  export type Error =
    | EntityNotExistsException
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DeleteComment {
  export type Input = DeleteCommentRequest;
  export type Output = {};
  export type Error =
    | DocumentLockedForCommentsException
    | EntityNotExistsException
    | FailedDependencyException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DeleteCustomMetadata {
  export type Input = DeleteCustomMetadataRequest;
  export type Output = DeleteCustomMetadataResponse;
  export type Error =
    | EntityNotExistsException
    | FailedDependencyException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DeleteDocument {
  export type Input = DeleteDocumentRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | ConflictingOperationException
    | EntityNotExistsException
    | FailedDependencyException
    | LimitExceededException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DeleteDocumentVersion {
  export type Input = DeleteDocumentVersionRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | ConflictingOperationException
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidOperationException
    | ProhibitedStateException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DeleteFolder {
  export type Input = DeleteFolderRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | ConflictingOperationException
    | EntityNotExistsException
    | FailedDependencyException
    | LimitExceededException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DeleteFolderContents {
  export type Input = DeleteFolderContentsRequest;
  export type Output = {};
  export type Error =
    | ConflictingOperationException
    | EntityNotExistsException
    | FailedDependencyException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DeleteLabels {
  export type Input = DeleteLabelsRequest;
  export type Output = DeleteLabelsResponse;
  export type Error =
    | EntityNotExistsException
    | FailedDependencyException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DeleteNotificationSubscription {
  export type Input = DeleteNotificationSubscriptionRequest;
  export type Output = {};
  export type Error =
    | EntityNotExistsException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DeleteUser {
  export type Input = DeleteUserRequest;
  export type Output = {};
  export type Error =
    | EntityNotExistsException
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DescribeActivities {
  export type Input = DescribeActivitiesRequest;
  export type Output = DescribeActivitiesResponse;
  export type Error =
    | FailedDependencyException
    | InvalidArgumentException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DescribeComments {
  export type Input = DescribeCommentsRequest;
  export type Output = DescribeCommentsResponse;
  export type Error =
    | EntityNotExistsException
    | FailedDependencyException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DescribeDocumentVersions {
  export type Input = DescribeDocumentVersionsRequest;
  export type Output = DescribeDocumentVersionsResponse;
  export type Error =
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidArgumentException
    | InvalidPasswordException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DescribeFolderContents {
  export type Input = DescribeFolderContentsRequest;
  export type Output = DescribeFolderContentsResponse;
  export type Error =
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidArgumentException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DescribeGroups {
  export type Input = DescribeGroupsRequest;
  export type Output = DescribeGroupsResponse;
  export type Error =
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DescribeNotificationSubscriptions {
  export type Input = DescribeNotificationSubscriptionsRequest;
  export type Output = DescribeNotificationSubscriptionsResponse;
  export type Error =
    | EntityNotExistsException
    | ServiceUnavailableException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DescribeResourcePermissions {
  export type Input = DescribeResourcePermissionsRequest;
  export type Output = DescribeResourcePermissionsResponse;
  export type Error =
    | FailedDependencyException
    | InvalidArgumentException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DescribeRootFolders {
  export type Input = DescribeRootFoldersRequest;
  export type Output = DescribeRootFoldersResponse;
  export type Error =
    | FailedDependencyException
    | InvalidArgumentException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace DescribeUsers {
  export type Input = DescribeUsersRequest;
  export type Output = DescribeUsersResponse;
  export type Error =
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidArgumentException
    | RequestedEntityTooLargeException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace GetCurrentUser {
  export type Input = GetCurrentUserRequest;
  export type Output = GetCurrentUserResponse;
  export type Error =
    | EntityNotExistsException
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace GetDocument {
  export type Input = GetDocumentRequest;
  export type Output = GetDocumentResponse;
  export type Error =
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidArgumentException
    | InvalidPasswordException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace GetDocumentPath {
  export type Input = GetDocumentPathRequest;
  export type Output = GetDocumentPathResponse;
  export type Error =
    | EntityNotExistsException
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace GetDocumentVersion {
  export type Input = GetDocumentVersionRequest;
  export type Output = GetDocumentVersionResponse;
  export type Error =
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidPasswordException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace GetFolder {
  export type Input = GetFolderRequest;
  export type Output = GetFolderResponse;
  export type Error =
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidArgumentException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace GetFolderPath {
  export type Input = GetFolderPathRequest;
  export type Output = GetFolderPathResponse;
  export type Error =
    | EntityNotExistsException
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace GetResources {
  export type Input = GetResourcesRequest;
  export type Output = GetResourcesResponse;
  export type Error =
    | FailedDependencyException
    | InvalidArgumentException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace InitiateDocumentVersionUpload {
  export type Input = InitiateDocumentVersionUploadRequest;
  export type Output = InitiateDocumentVersionUploadResponse;
  export type Error =
    | DraftUploadOutOfSyncException
    | EntityAlreadyExistsException
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidArgumentException
    | InvalidPasswordException
    | LimitExceededException
    | ProhibitedStateException
    | ResourceAlreadyCheckedOutException
    | ServiceUnavailableException
    | StorageLimitExceededException
    | StorageLimitWillExceedException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace RemoveAllResourcePermissions {
  export type Input = RemoveAllResourcePermissionsRequest;
  export type Output = {};
  export type Error =
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace RemoveResourcePermission {
  export type Input = RemoveResourcePermissionRequest;
  export type Output = {};
  export type Error =
    | FailedDependencyException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace RestoreDocumentVersions {
  export type Input = RestoreDocumentVersionsRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | ConflictingOperationException
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidOperationException
    | ProhibitedStateException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace SearchResources {
  export type Input = SearchResourcesRequest;
  export type Output = SearchResourcesResponse;
  export type Error =
    | InvalidArgumentException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace UpdateDocument {
  export type Input = UpdateDocumentRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | ConflictingOperationException
    | EntityAlreadyExistsException
    | EntityNotExistsException
    | FailedDependencyException
    | LimitExceededException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace UpdateDocumentVersion {
  export type Input = UpdateDocumentVersionRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | EntityNotExistsException
    | FailedDependencyException
    | InvalidOperationException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace UpdateFolder {
  export type Input = UpdateFolderRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | ConflictingOperationException
    | EntityAlreadyExistsException
    | EntityNotExistsException
    | FailedDependencyException
    | LimitExceededException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}

export declare namespace UpdateUser {
  export type Input = UpdateUserRequest;
  export type Output = UpdateUserResponse;
  export type Error =
    | DeactivatingLastSystemUserException
    | EntityNotExistsException
    | FailedDependencyException
    | IllegalUserStateException
    | InvalidArgumentException
    | ProhibitedStateException
    | ServiceUnavailableException
    | UnauthorizedOperationException
    | UnauthorizedResourceAccessException
    | CommonAwsError;
}
