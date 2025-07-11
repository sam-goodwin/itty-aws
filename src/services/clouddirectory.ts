import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonCloudDirectory_20170111 {
  addFacetToObject(
    input: AddFacetToObjectRequest,
  ): Effect.Effect<
    AddFacetToObjectResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  applySchema(
    input: ApplySchemaRequest,
  ): Effect.Effect<
    ApplySchemaResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidAttachmentException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | SchemaAlreadyExistsException
    | ValidationException
    | CommonAwsError
  >;
  attachObject(
    input: AttachObjectRequest,
  ): Effect.Effect<
    AttachObjectResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidAttachmentException
    | LimitExceededException
    | LinkNameAlreadyInUseException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  attachPolicy(
    input: AttachPolicyRequest,
  ): Effect.Effect<
    AttachPolicyResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | NotPolicyException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  attachToIndex(
    input: AttachToIndexRequest,
  ): Effect.Effect<
    AttachToIndexResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | IndexedAttributeMissingException
    | InternalServiceException
    | InvalidArnException
    | InvalidAttachmentException
    | LimitExceededException
    | LinkNameAlreadyInUseException
    | NotIndexException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  attachTypedLink(
    input: AttachTypedLinkRequest,
  ): Effect.Effect<
    AttachTypedLinkResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidAttachmentException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  batchRead(
    input: BatchReadRequest,
  ): Effect.Effect<
    BatchReadResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  batchWrite(
    input: BatchWriteRequest,
  ): Effect.Effect<
    BatchWriteResponse,
    | AccessDeniedException
    | BatchWriteException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  createDirectory(
    input: CreateDirectoryRequest,
  ): Effect.Effect<
    CreateDirectoryResponse,
    | AccessDeniedException
    | DirectoryAlreadyExistsException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  createFacet(
    input: CreateFacetRequest,
  ): Effect.Effect<
    CreateFacetResponse,
    | AccessDeniedException
    | FacetAlreadyExistsException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidRuleException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  createIndex(
    input: CreateIndexRequest,
  ): Effect.Effect<
    CreateIndexResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | LinkNameAlreadyInUseException
    | ResourceNotFoundException
    | RetryableConflictException
    | UnsupportedIndexTypeException
    | ValidationException
    | CommonAwsError
  >;
  createObject(
    input: CreateObjectRequest,
  ): Effect.Effect<
    CreateObjectResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | LinkNameAlreadyInUseException
    | ResourceNotFoundException
    | RetryableConflictException
    | UnsupportedIndexTypeException
    | ValidationException
    | CommonAwsError
  >;
  createSchema(
    input: CreateSchemaRequest,
  ): Effect.Effect<
    CreateSchemaResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | RetryableConflictException
    | SchemaAlreadyExistsException
    | ValidationException
    | CommonAwsError
  >;
  createTypedLinkFacet(
    input: CreateTypedLinkFacetRequest,
  ): Effect.Effect<
    CreateTypedLinkFacetResponse,
    | AccessDeniedException
    | FacetAlreadyExistsException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidRuleException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  deleteDirectory(
    input: DeleteDirectoryRequest,
  ): Effect.Effect<
    DeleteDirectoryResponse,
    | AccessDeniedException
    | DirectoryDeletedException
    | DirectoryNotDisabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  deleteFacet(
    input: DeleteFacetRequest,
  ): Effect.Effect<
    DeleteFacetResponse,
    | AccessDeniedException
    | FacetInUseException
    | FacetNotFoundException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  deleteObject(
    input: DeleteObjectRequest,
  ): Effect.Effect<
    DeleteObjectResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ObjectNotDetachedException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  deleteSchema(
    input: DeleteSchemaRequest,
  ): Effect.Effect<
    DeleteSchemaResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | StillContainsLinksException
    | ValidationException
    | CommonAwsError
  >;
  deleteTypedLinkFacet(
    input: DeleteTypedLinkFacetRequest,
  ): Effect.Effect<
    DeleteTypedLinkFacetResponse,
    | AccessDeniedException
    | FacetNotFoundException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  detachFromIndex(
    input: DetachFromIndexRequest,
  ): Effect.Effect<
    DetachFromIndexResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | NotIndexException
    | ObjectAlreadyDetachedException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  detachObject(
    input: DetachObjectRequest,
  ): Effect.Effect<
    DetachObjectResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | NotNodeException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  detachPolicy(
    input: DetachPolicyRequest,
  ): Effect.Effect<
    DetachPolicyResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | NotPolicyException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  detachTypedLink(
    input: DetachTypedLinkRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  disableDirectory(
    input: DisableDirectoryRequest,
  ): Effect.Effect<
    DisableDirectoryResponse,
    | AccessDeniedException
    | DirectoryDeletedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  enableDirectory(
    input: EnableDirectoryRequest,
  ): Effect.Effect<
    EnableDirectoryResponse,
    | AccessDeniedException
    | DirectoryDeletedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  getAppliedSchemaVersion(
    input: GetAppliedSchemaVersionRequest,
  ): Effect.Effect<
    GetAppliedSchemaVersionResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  getDirectory(
    input: GetDirectoryRequest,
  ): Effect.Effect<
    GetDirectoryResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  getFacet(
    input: GetFacetRequest,
  ): Effect.Effect<
    GetFacetResponse,
    | AccessDeniedException
    | FacetNotFoundException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  getLinkAttributes(
    input: GetLinkAttributesRequest,
  ): Effect.Effect<
    GetLinkAttributesResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  getObjectAttributes(
    input: GetObjectAttributesRequest,
  ): Effect.Effect<
    GetObjectAttributesResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  getObjectInformation(
    input: GetObjectInformationRequest,
  ): Effect.Effect<
    GetObjectInformationResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  getSchemaAsJson(
    input: GetSchemaAsJsonRequest,
  ): Effect.Effect<
    GetSchemaAsJsonResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  getTypedLinkFacetInformation(
    input: GetTypedLinkFacetInformationRequest,
  ): Effect.Effect<
    GetTypedLinkFacetInformationResponse,
    | AccessDeniedException
    | FacetNotFoundException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listAppliedSchemaArns(
    input: ListAppliedSchemaArnsRequest,
  ): Effect.Effect<
    ListAppliedSchemaArnsResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listAttachedIndices(
    input: ListAttachedIndicesRequest,
  ): Effect.Effect<
    ListAttachedIndicesResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listDevelopmentSchemaArns(
    input: ListDevelopmentSchemaArnsRequest,
  ): Effect.Effect<
    ListDevelopmentSchemaArnsResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listDirectories(
    input: ListDirectoriesRequest,
  ): Effect.Effect<
    ListDirectoriesResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listFacetAttributes(
    input: ListFacetAttributesRequest,
  ): Effect.Effect<
    ListFacetAttributesResponse,
    | AccessDeniedException
    | FacetNotFoundException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listFacetNames(
    input: ListFacetNamesRequest,
  ): Effect.Effect<
    ListFacetNamesResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listIncomingTypedLinks(
    input: ListIncomingTypedLinksRequest,
  ): Effect.Effect<
    ListIncomingTypedLinksResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listIndex(
    input: ListIndexRequest,
  ): Effect.Effect<
    ListIndexResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | NotIndexException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listManagedSchemaArns(
    input: ListManagedSchemaArnsRequest,
  ): Effect.Effect<
    ListManagedSchemaArnsResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listObjectAttributes(
    input: ListObjectAttributesRequest,
  ): Effect.Effect<
    ListObjectAttributesResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listObjectChildren(
    input: ListObjectChildrenRequest,
  ): Effect.Effect<
    ListObjectChildrenResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | NotNodeException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listObjectParentPaths(
    input: ListObjectParentPathsRequest,
  ): Effect.Effect<
    ListObjectParentPathsResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listObjectParents(
    input: ListObjectParentsRequest,
  ): Effect.Effect<
    ListObjectParentsResponse,
    | AccessDeniedException
    | CannotListParentOfRootException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listObjectPolicies(
    input: ListObjectPoliciesRequest,
  ): Effect.Effect<
    ListObjectPoliciesResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listOutgoingTypedLinks(
    input: ListOutgoingTypedLinksRequest,
  ): Effect.Effect<
    ListOutgoingTypedLinksResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listPolicyAttachments(
    input: ListPolicyAttachmentsRequest,
  ): Effect.Effect<
    ListPolicyAttachmentsResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | NotPolicyException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listPublishedSchemaArns(
    input: ListPublishedSchemaArnsRequest,
  ): Effect.Effect<
    ListPublishedSchemaArnsResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidTaggingRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listTypedLinkFacetAttributes(
    input: ListTypedLinkFacetAttributesRequest,
  ): Effect.Effect<
    ListTypedLinkFacetAttributesResponse,
    | AccessDeniedException
    | FacetNotFoundException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  listTypedLinkFacetNames(
    input: ListTypedLinkFacetNamesRequest,
  ): Effect.Effect<
    ListTypedLinkFacetNamesResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  lookupPolicy(
    input: LookupPolicyRequest,
  ): Effect.Effect<
    LookupPolicyResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  publishSchema(
    input: PublishSchemaRequest,
  ): Effect.Effect<
    PublishSchemaResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | SchemaAlreadyPublishedException
    | ValidationException
    | CommonAwsError
  >;
  putSchemaFromJson(
    input: PutSchemaFromJsonRequest,
  ): Effect.Effect<
    PutSchemaFromJsonResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidRuleException
    | InvalidSchemaDocException
    | LimitExceededException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  removeFacetFromObject(
    input: RemoveFacetFromObjectRequest,
  ): Effect.Effect<
    RemoveFacetFromObjectResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidTaggingRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidTaggingRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  updateFacet(
    input: UpdateFacetRequest,
  ): Effect.Effect<
    UpdateFacetResponse,
    | AccessDeniedException
    | FacetNotFoundException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidFacetUpdateException
    | InvalidRuleException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  updateLinkAttributes(
    input: UpdateLinkAttributesRequest,
  ): Effect.Effect<
    UpdateLinkAttributesResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  updateObjectAttributes(
    input: UpdateObjectAttributesRequest,
  ): Effect.Effect<
    UpdateObjectAttributesResponse,
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | LinkNameAlreadyInUseException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  updateSchema(
    input: UpdateSchemaRequest,
  ): Effect.Effect<
    UpdateSchemaResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  updateTypedLinkFacet(
    input: UpdateTypedLinkFacetRequest,
  ): Effect.Effect<
    UpdateTypedLinkFacetResponse,
    | AccessDeniedException
    | FacetNotFoundException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidFacetUpdateException
    | InvalidRuleException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
  upgradeAppliedSchema(
    input: UpgradeAppliedSchemaRequest,
  ): Effect.Effect<
    UpgradeAppliedSchemaResponse,
    | AccessDeniedException
    | IncompatibleSchemaException
    | InternalServiceException
    | InvalidArnException
    | InvalidAttachmentException
    | ResourceNotFoundException
    | RetryableConflictException
    | SchemaAlreadyExistsException
    | ValidationException
    | CommonAwsError
  >;
  upgradePublishedSchema(
    input: UpgradePublishedSchemaRequest,
  ): Effect.Effect<
    UpgradePublishedSchemaResponse,
    | AccessDeniedException
    | IncompatibleSchemaException
    | InternalServiceException
    | InvalidArnException
    | InvalidAttachmentException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError
  >;
}

export type Clouddirectory = AmazonCloudDirectory_20170111;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface AddFacetToObjectRequest {
  DirectoryArn: string;
  SchemaFacet: SchemaFacet;
  ObjectAttributeList?: Array<AttributeKeyAndValue>;
  ObjectReference: ObjectReference;
}
export interface AddFacetToObjectResponse {}
export interface ApplySchemaRequest {
  PublishedSchemaArn: string;
  DirectoryArn: string;
}
export interface ApplySchemaResponse {
  AppliedSchemaArn?: string;
  DirectoryArn?: string;
}
export type Arn = string;

export type Arns = Array<string>;
export interface AttachObjectRequest {
  DirectoryArn: string;
  ParentReference: ObjectReference;
  ChildReference: ObjectReference;
  LinkName: string;
}
export interface AttachObjectResponse {
  AttachedObjectIdentifier?: string;
}
export interface AttachPolicyRequest {
  DirectoryArn: string;
  PolicyReference: ObjectReference;
  ObjectReference: ObjectReference;
}
export interface AttachPolicyResponse {}
export interface AttachToIndexRequest {
  DirectoryArn: string;
  IndexReference: ObjectReference;
  TargetReference: ObjectReference;
}
export interface AttachToIndexResponse {
  AttachedObjectIdentifier?: string;
}
export interface AttachTypedLinkRequest {
  DirectoryArn: string;
  SourceObjectReference: ObjectReference;
  TargetObjectReference: ObjectReference;
  TypedLinkFacet: TypedLinkSchemaAndFacetName;
  Attributes: Array<AttributeNameAndValue>;
}
export interface AttachTypedLinkResponse {
  TypedLinkSpecifier?: TypedLinkSpecifier;
}
export interface AttributeKey {
  SchemaArn: string;
  FacetName: string;
  Name: string;
}
export interface AttributeKeyAndValue {
  Key: AttributeKey;
  Value: TypedAttributeValue;
}
export type AttributeKeyAndValueList = Array<AttributeKeyAndValue>;
export type AttributeKeyList = Array<AttributeKey>;
export type AttributeName = string;

export interface AttributeNameAndValue {
  AttributeName: string;
  Value: TypedAttributeValue;
}
export type AttributeNameAndValueList = Array<AttributeNameAndValue>;
export type AttributeNameList = Array<string>;
export interface BatchAddFacetToObject {
  SchemaFacet: SchemaFacet;
  ObjectAttributeList: Array<AttributeKeyAndValue>;
  ObjectReference: ObjectReference;
}
export interface BatchAddFacetToObjectResponse {}
export interface BatchAttachObject {
  ParentReference: ObjectReference;
  ChildReference: ObjectReference;
  LinkName: string;
}
export interface BatchAttachObjectResponse {
  attachedObjectIdentifier?: string;
}
export interface BatchAttachPolicy {
  PolicyReference: ObjectReference;
  ObjectReference: ObjectReference;
}
export interface BatchAttachPolicyResponse {}
export interface BatchAttachToIndex {
  IndexReference: ObjectReference;
  TargetReference: ObjectReference;
}
export interface BatchAttachToIndexResponse {
  AttachedObjectIdentifier?: string;
}
export interface BatchAttachTypedLink {
  SourceObjectReference: ObjectReference;
  TargetObjectReference: ObjectReference;
  TypedLinkFacet: TypedLinkSchemaAndFacetName;
  Attributes: Array<AttributeNameAndValue>;
}
export interface BatchAttachTypedLinkResponse {
  TypedLinkSpecifier?: TypedLinkSpecifier;
}
export interface BatchCreateIndex {
  OrderedIndexedAttributeList: Array<AttributeKey>;
  IsUnique: boolean;
  ParentReference?: ObjectReference;
  LinkName?: string;
  BatchReferenceName?: string;
}
export interface BatchCreateIndexResponse {
  ObjectIdentifier?: string;
}
export interface BatchCreateObject {
  SchemaFacet: Array<SchemaFacet>;
  ObjectAttributeList: Array<AttributeKeyAndValue>;
  ParentReference?: ObjectReference;
  LinkName?: string;
  BatchReferenceName?: string;
}
export interface BatchCreateObjectResponse {
  ObjectIdentifier?: string;
}
export interface BatchDeleteObject {
  ObjectReference: ObjectReference;
}
export interface BatchDeleteObjectResponse {}
export interface BatchDetachFromIndex {
  IndexReference: ObjectReference;
  TargetReference: ObjectReference;
}
export interface BatchDetachFromIndexResponse {
  DetachedObjectIdentifier?: string;
}
export interface BatchDetachObject {
  ParentReference: ObjectReference;
  LinkName: string;
  BatchReferenceName?: string;
}
export interface BatchDetachObjectResponse {
  detachedObjectIdentifier?: string;
}
export interface BatchDetachPolicy {
  PolicyReference: ObjectReference;
  ObjectReference: ObjectReference;
}
export interface BatchDetachPolicyResponse {}
export interface BatchDetachTypedLink {
  TypedLinkSpecifier: TypedLinkSpecifier;
}
export interface BatchDetachTypedLinkResponse {}
export interface BatchGetLinkAttributes {
  TypedLinkSpecifier: TypedLinkSpecifier;
  AttributeNames: Array<string>;
}
export interface BatchGetLinkAttributesResponse {
  Attributes?: Array<AttributeKeyAndValue>;
}
export interface BatchGetObjectAttributes {
  ObjectReference: ObjectReference;
  SchemaFacet: SchemaFacet;
  AttributeNames: Array<string>;
}
export interface BatchGetObjectAttributesResponse {
  Attributes?: Array<AttributeKeyAndValue>;
}
export interface BatchGetObjectInformation {
  ObjectReference: ObjectReference;
}
export interface BatchGetObjectInformationResponse {
  SchemaFacets?: Array<SchemaFacet>;
  ObjectIdentifier?: string;
}
export interface BatchListAttachedIndices {
  TargetReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchListAttachedIndicesResponse {
  IndexAttachments?: Array<IndexAttachment>;
  NextToken?: string;
}
export interface BatchListIncomingTypedLinks {
  ObjectReference: ObjectReference;
  FilterAttributeRanges?: Array<TypedLinkAttributeRange>;
  FilterTypedLink?: TypedLinkSchemaAndFacetName;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchListIncomingTypedLinksResponse {
  LinkSpecifiers?: Array<TypedLinkSpecifier>;
  NextToken?: string;
}
export interface BatchListIndex {
  RangesOnIndexedValues?: Array<ObjectAttributeRange>;
  IndexReference: ObjectReference;
  MaxResults?: number;
  NextToken?: string;
}
export interface BatchListIndexResponse {
  IndexAttachments?: Array<IndexAttachment>;
  NextToken?: string;
}
export interface BatchListObjectAttributes {
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
  FacetFilter?: SchemaFacet;
}
export interface BatchListObjectAttributesResponse {
  Attributes?: Array<AttributeKeyAndValue>;
  NextToken?: string;
}
export interface BatchListObjectChildren {
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchListObjectChildrenResponse {
  Children?: Record<string, string>;
  NextToken?: string;
}
export interface BatchListObjectParentPaths {
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchListObjectParentPathsResponse {
  PathToObjectIdentifiersList?: Array<PathToObjectIdentifiers>;
  NextToken?: string;
}
export interface BatchListObjectParents {
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchListObjectParentsResponse {
  ParentLinks?: Array<ObjectIdentifierAndLinkNameTuple>;
  NextToken?: string;
}
export interface BatchListObjectPolicies {
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchListObjectPoliciesResponse {
  AttachedPolicyIds?: Array<string>;
  NextToken?: string;
}
export interface BatchListOutgoingTypedLinks {
  ObjectReference: ObjectReference;
  FilterAttributeRanges?: Array<TypedLinkAttributeRange>;
  FilterTypedLink?: TypedLinkSchemaAndFacetName;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchListOutgoingTypedLinksResponse {
  TypedLinkSpecifiers?: Array<TypedLinkSpecifier>;
  NextToken?: string;
}
export interface BatchListPolicyAttachments {
  PolicyReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchListPolicyAttachmentsResponse {
  ObjectIdentifiers?: Array<string>;
  NextToken?: string;
}
export interface BatchLookupPolicy {
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchLookupPolicyResponse {
  PolicyToPathList?: Array<PolicyToPath>;
  NextToken?: string;
}
export type BatchOperationIndex = number;

export interface BatchReadException {
  Type?: BatchReadExceptionType;
  Message?: string;
}
export type BatchReadExceptionType =
  | "ValidationException"
  | "InvalidArnException"
  | "ResourceNotFoundException"
  | "InvalidNextTokenException"
  | "AccessDeniedException"
  | "NotNodeException"
  | "FacetValidationException"
  | "CannotListParentOfRootException"
  | "NotIndexException"
  | "NotPolicyException"
  | "DirectoryNotEnabledException"
  | "LimitExceededException"
  | "InternalServiceException";
export interface BatchReadOperation {
  ListObjectAttributes?: BatchListObjectAttributes;
  ListObjectChildren?: BatchListObjectChildren;
  ListAttachedIndices?: BatchListAttachedIndices;
  ListObjectParentPaths?: BatchListObjectParentPaths;
  GetObjectInformation?: BatchGetObjectInformation;
  GetObjectAttributes?: BatchGetObjectAttributes;
  ListObjectParents?: BatchListObjectParents;
  ListObjectPolicies?: BatchListObjectPolicies;
  ListPolicyAttachments?: BatchListPolicyAttachments;
  LookupPolicy?: BatchLookupPolicy;
  ListIndex?: BatchListIndex;
  ListOutgoingTypedLinks?: BatchListOutgoingTypedLinks;
  ListIncomingTypedLinks?: BatchListIncomingTypedLinks;
  GetLinkAttributes?: BatchGetLinkAttributes;
}
export type BatchReadOperationList = Array<BatchReadOperation>;
export interface BatchReadOperationResponse {
  SuccessfulResponse?: BatchReadSuccessfulResponse;
  ExceptionResponse?: BatchReadException;
}
export type BatchReadOperationResponseList = Array<BatchReadOperationResponse>;
export interface BatchReadRequest {
  DirectoryArn: string;
  Operations: Array<BatchReadOperation>;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface BatchReadResponse {
  Responses?: Array<BatchReadOperationResponse>;
}
export interface BatchReadSuccessfulResponse {
  ListObjectAttributes?: BatchListObjectAttributesResponse;
  ListObjectChildren?: BatchListObjectChildrenResponse;
  GetObjectInformation?: BatchGetObjectInformationResponse;
  GetObjectAttributes?: BatchGetObjectAttributesResponse;
  ListAttachedIndices?: BatchListAttachedIndicesResponse;
  ListObjectParentPaths?: BatchListObjectParentPathsResponse;
  ListObjectPolicies?: BatchListObjectPoliciesResponse;
  ListPolicyAttachments?: BatchListPolicyAttachmentsResponse;
  LookupPolicy?: BatchLookupPolicyResponse;
  ListIndex?: BatchListIndexResponse;
  ListOutgoingTypedLinks?: BatchListOutgoingTypedLinksResponse;
  ListIncomingTypedLinks?: BatchListIncomingTypedLinksResponse;
  GetLinkAttributes?: BatchGetLinkAttributesResponse;
  ListObjectParents?: BatchListObjectParentsResponse;
}
export type BatchReferenceName = string;

export interface BatchRemoveFacetFromObject {
  SchemaFacet: SchemaFacet;
  ObjectReference: ObjectReference;
}
export interface BatchRemoveFacetFromObjectResponse {}
export interface BatchUpdateLinkAttributes {
  TypedLinkSpecifier: TypedLinkSpecifier;
  AttributeUpdates: Array<LinkAttributeUpdate>;
}
export interface BatchUpdateLinkAttributesResponse {}
export interface BatchUpdateObjectAttributes {
  ObjectReference: ObjectReference;
  AttributeUpdates: Array<ObjectAttributeUpdate>;
}
export interface BatchUpdateObjectAttributesResponse {
  ObjectIdentifier?: string;
}
export declare class BatchWriteException extends EffectData.TaggedError(
  "BatchWriteException",
)<{
  readonly Index?: number;
  readonly Type?: BatchWriteExceptionType;
  readonly Message?: string;
}> {}
export type BatchWriteExceptionType =
  | "InternalServiceException"
  | "ValidationException"
  | "InvalidArnException"
  | "LinkNameAlreadyInUseException"
  | "StillContainsLinksException"
  | "FacetValidationException"
  | "ObjectNotDetachedException"
  | "ResourceNotFoundException"
  | "AccessDeniedException"
  | "InvalidAttachmentException"
  | "NotIndexException"
  | "NotNodeException"
  | "IndexedAttributeMissingException"
  | "ObjectAlreadyDetachedException"
  | "NotPolicyException"
  | "DirectoryNotEnabledException"
  | "LimitExceededException"
  | "UnsupportedIndexTypeException";
export interface BatchWriteOperation {
  CreateObject?: BatchCreateObject;
  AttachObject?: BatchAttachObject;
  DetachObject?: BatchDetachObject;
  UpdateObjectAttributes?: BatchUpdateObjectAttributes;
  DeleteObject?: BatchDeleteObject;
  AddFacetToObject?: BatchAddFacetToObject;
  RemoveFacetFromObject?: BatchRemoveFacetFromObject;
  AttachPolicy?: BatchAttachPolicy;
  DetachPolicy?: BatchDetachPolicy;
  CreateIndex?: BatchCreateIndex;
  AttachToIndex?: BatchAttachToIndex;
  DetachFromIndex?: BatchDetachFromIndex;
  AttachTypedLink?: BatchAttachTypedLink;
  DetachTypedLink?: BatchDetachTypedLink;
  UpdateLinkAttributes?: BatchUpdateLinkAttributes;
}
export type BatchWriteOperationList = Array<BatchWriteOperation>;
export interface BatchWriteOperationResponse {
  CreateObject?: BatchCreateObjectResponse;
  AttachObject?: BatchAttachObjectResponse;
  DetachObject?: BatchDetachObjectResponse;
  UpdateObjectAttributes?: BatchUpdateObjectAttributesResponse;
  DeleteObject?: BatchDeleteObjectResponse;
  AddFacetToObject?: BatchAddFacetToObjectResponse;
  RemoveFacetFromObject?: BatchRemoveFacetFromObjectResponse;
  AttachPolicy?: BatchAttachPolicyResponse;
  DetachPolicy?: BatchDetachPolicyResponse;
  CreateIndex?: BatchCreateIndexResponse;
  AttachToIndex?: BatchAttachToIndexResponse;
  DetachFromIndex?: BatchDetachFromIndexResponse;
  AttachTypedLink?: BatchAttachTypedLinkResponse;
  DetachTypedLink?: BatchDetachTypedLinkResponse;
  UpdateLinkAttributes?: BatchUpdateLinkAttributesResponse;
}
export type BatchWriteOperationResponseList =
  Array<BatchWriteOperationResponse>;
export interface BatchWriteRequest {
  DirectoryArn: string;
  Operations: Array<BatchWriteOperation>;
}
export interface BatchWriteResponse {
  Responses?: Array<BatchWriteOperationResponse>;
}
export type BinaryAttributeValue = Uint8Array | string;

export type Bool = boolean;

export type BooleanAttributeValue = boolean;

export declare class CannotListParentOfRootException extends EffectData.TaggedError(
  "CannotListParentOfRootException",
)<{
  readonly Message?: string;
}> {}
export type ConsistencyLevel = "SERIALIZABLE" | "EVENTUAL";
export interface CreateDirectoryRequest {
  Name: string;
  SchemaArn: string;
}
export interface CreateDirectoryResponse {
  DirectoryArn: string;
  Name: string;
  ObjectIdentifier: string;
  AppliedSchemaArn: string;
}
export interface CreateFacetRequest {
  SchemaArn: string;
  Name: string;
  Attributes?: Array<FacetAttribute>;
  ObjectType?: ObjectType;
  FacetStyle?: FacetStyle;
}
export interface CreateFacetResponse {}
export interface CreateIndexRequest {
  DirectoryArn: string;
  OrderedIndexedAttributeList: Array<AttributeKey>;
  IsUnique: boolean;
  ParentReference?: ObjectReference;
  LinkName?: string;
}
export interface CreateIndexResponse {
  ObjectIdentifier?: string;
}
export interface CreateObjectRequest {
  DirectoryArn: string;
  SchemaFacets: Array<SchemaFacet>;
  ObjectAttributeList?: Array<AttributeKeyAndValue>;
  ParentReference?: ObjectReference;
  LinkName?: string;
}
export interface CreateObjectResponse {
  ObjectIdentifier?: string;
}
export interface CreateSchemaRequest {
  Name: string;
}
export interface CreateSchemaResponse {
  SchemaArn?: string;
}
export interface CreateTypedLinkFacetRequest {
  SchemaArn: string;
  Facet: TypedLinkFacet;
}
export interface CreateTypedLinkFacetResponse {}
export type ClouddirectoryDate = Date | string;

export type DatetimeAttributeValue = Date | string;

export interface DeleteDirectoryRequest {
  DirectoryArn: string;
}
export interface DeleteDirectoryResponse {
  DirectoryArn: string;
}
export interface DeleteFacetRequest {
  SchemaArn: string;
  Name: string;
}
export interface DeleteFacetResponse {}
export interface DeleteObjectRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
}
export interface DeleteObjectResponse {}
export interface DeleteSchemaRequest {
  SchemaArn: string;
}
export interface DeleteSchemaResponse {
  SchemaArn?: string;
}
export interface DeleteTypedLinkFacetRequest {
  SchemaArn: string;
  Name: string;
}
export interface DeleteTypedLinkFacetResponse {}
export interface DetachFromIndexRequest {
  DirectoryArn: string;
  IndexReference: ObjectReference;
  TargetReference: ObjectReference;
}
export interface DetachFromIndexResponse {
  DetachedObjectIdentifier?: string;
}
export interface DetachObjectRequest {
  DirectoryArn: string;
  ParentReference: ObjectReference;
  LinkName: string;
}
export interface DetachObjectResponse {
  DetachedObjectIdentifier?: string;
}
export interface DetachPolicyRequest {
  DirectoryArn: string;
  PolicyReference: ObjectReference;
  ObjectReference: ObjectReference;
}
export interface DetachPolicyResponse {}
export interface DetachTypedLinkRequest {
  DirectoryArn: string;
  TypedLinkSpecifier: TypedLinkSpecifier;
}
export interface Directory {
  Name?: string;
  DirectoryArn?: string;
  State?: DirectoryState;
  CreationDateTime?: Date | string;
}
export declare class DirectoryAlreadyExistsException extends EffectData.TaggedError(
  "DirectoryAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export type DirectoryArn = string;

export declare class DirectoryDeletedException extends EffectData.TaggedError(
  "DirectoryDeletedException",
)<{
  readonly Message?: string;
}> {}
export type DirectoryList = Array<Directory>;
export type DirectoryName = string;

export declare class DirectoryNotDisabledException extends EffectData.TaggedError(
  "DirectoryNotDisabledException",
)<{
  readonly Message?: string;
}> {}
export declare class DirectoryNotEnabledException extends EffectData.TaggedError(
  "DirectoryNotEnabledException",
)<{
  readonly Message?: string;
}> {}
export type DirectoryState = "ENABLED" | "DISABLED" | "DELETED";
export interface DisableDirectoryRequest {
  DirectoryArn: string;
}
export interface DisableDirectoryResponse {
  DirectoryArn: string;
}
export interface EnableDirectoryRequest {
  DirectoryArn: string;
}
export interface EnableDirectoryResponse {
  DirectoryArn: string;
}
export type ExceptionMessage = string;

export interface Facet {
  Name?: string;
  ObjectType?: ObjectType;
  FacetStyle?: FacetStyle;
}
export declare class FacetAlreadyExistsException extends EffectData.TaggedError(
  "FacetAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export interface FacetAttribute {
  Name: string;
  AttributeDefinition?: FacetAttributeDefinition;
  AttributeReference?: FacetAttributeReference;
  RequiredBehavior?: RequiredAttributeBehavior;
}
export interface FacetAttributeDefinition {
  Type: FacetAttributeType;
  DefaultValue?: TypedAttributeValue;
  IsImmutable?: boolean;
  Rules?: Record<string, Rule>;
}
export type FacetAttributeList = Array<FacetAttribute>;
export interface FacetAttributeReference {
  TargetFacetName: string;
  TargetAttributeName: string;
}
export type FacetAttributeType =
  | "STRING"
  | "BINARY"
  | "BOOLEAN"
  | "NUMBER"
  | "DATETIME"
  | "VARIANT";
export interface FacetAttributeUpdate {
  Attribute?: FacetAttribute;
  Action?: UpdateActionType;
}
export type FacetAttributeUpdateList = Array<FacetAttributeUpdate>;
export declare class FacetInUseException extends EffectData.TaggedError(
  "FacetInUseException",
)<{
  readonly Message?: string;
}> {}
export type FacetName = string;

export type FacetNameList = Array<string>;
export declare class FacetNotFoundException extends EffectData.TaggedError(
  "FacetNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type FacetStyle = "STATIC" | "DYNAMIC";
export declare class FacetValidationException extends EffectData.TaggedError(
  "FacetValidationException",
)<{
  readonly Message?: string;
}> {}
export interface GetAppliedSchemaVersionRequest {
  SchemaArn: string;
}
export interface GetAppliedSchemaVersionResponse {
  AppliedSchemaArn?: string;
}
export interface GetDirectoryRequest {
  DirectoryArn: string;
}
export interface GetDirectoryResponse {
  Directory: Directory;
}
export interface GetFacetRequest {
  SchemaArn: string;
  Name: string;
}
export interface GetFacetResponse {
  Facet?: Facet;
}
export interface GetLinkAttributesRequest {
  DirectoryArn: string;
  TypedLinkSpecifier: TypedLinkSpecifier;
  AttributeNames: Array<string>;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface GetLinkAttributesResponse {
  Attributes?: Array<AttributeKeyAndValue>;
}
export interface GetObjectAttributesRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  ConsistencyLevel?: ConsistencyLevel;
  SchemaFacet: SchemaFacet;
  AttributeNames: Array<string>;
}
export interface GetObjectAttributesResponse {
  Attributes?: Array<AttributeKeyAndValue>;
}
export interface GetObjectInformationRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface GetObjectInformationResponse {
  SchemaFacets?: Array<SchemaFacet>;
  ObjectIdentifier?: string;
}
export interface GetSchemaAsJsonRequest {
  SchemaArn: string;
}
export interface GetSchemaAsJsonResponse {
  Name?: string;
  Document?: string;
}
export interface GetTypedLinkFacetInformationRequest {
  SchemaArn: string;
  Name: string;
}
export interface GetTypedLinkFacetInformationResponse {
  IdentityAttributeOrder?: Array<string>;
}
export declare class IncompatibleSchemaException extends EffectData.TaggedError(
  "IncompatibleSchemaException",
)<{
  readonly Message?: string;
}> {}
export interface IndexAttachment {
  IndexedAttributes?: Array<AttributeKeyAndValue>;
  ObjectIdentifier?: string;
}
export type IndexAttachmentList = Array<IndexAttachment>;
export declare class IndexedAttributeMissingException extends EffectData.TaggedError(
  "IndexedAttributeMissingException",
)<{
  readonly Message?: string;
}> {}
export declare class InternalServiceException extends EffectData.TaggedError(
  "InternalServiceException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidArnException extends EffectData.TaggedError(
  "InvalidArnException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidAttachmentException extends EffectData.TaggedError(
  "InvalidAttachmentException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidFacetUpdateException extends EffectData.TaggedError(
  "InvalidFacetUpdateException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRuleException extends EffectData.TaggedError(
  "InvalidRuleException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidSchemaDocException extends EffectData.TaggedError(
  "InvalidSchemaDocException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidTaggingRequestException extends EffectData.TaggedError(
  "InvalidTaggingRequestException",
)<{
  readonly Message?: string;
}> {}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface LinkAttributeAction {
  AttributeActionType?: UpdateActionType;
  AttributeUpdateValue?: TypedAttributeValue;
}
export interface LinkAttributeUpdate {
  AttributeKey?: AttributeKey;
  AttributeAction?: LinkAttributeAction;
}
export type LinkAttributeUpdateList = Array<LinkAttributeUpdate>;
export type LinkName = string;

export declare class LinkNameAlreadyInUseException extends EffectData.TaggedError(
  "LinkNameAlreadyInUseException",
)<{
  readonly Message?: string;
}> {}
export type LinkNameToObjectIdentifierMap = Record<string, string>;
export interface ListAppliedSchemaArnsRequest {
  DirectoryArn: string;
  SchemaArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAppliedSchemaArnsResponse {
  SchemaArns?: Array<string>;
  NextToken?: string;
}
export interface ListAttachedIndicesRequest {
  DirectoryArn: string;
  TargetReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface ListAttachedIndicesResponse {
  IndexAttachments?: Array<IndexAttachment>;
  NextToken?: string;
}
export interface ListDevelopmentSchemaArnsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDevelopmentSchemaArnsResponse {
  SchemaArns?: Array<string>;
  NextToken?: string;
}
export interface ListDirectoriesRequest {
  NextToken?: string;
  MaxResults?: number;
  state?: DirectoryState;
}
export interface ListDirectoriesResponse {
  Directories: Array<Directory>;
  NextToken?: string;
}
export interface ListFacetAttributesRequest {
  SchemaArn: string;
  Name: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFacetAttributesResponse {
  Attributes?: Array<FacetAttribute>;
  NextToken?: string;
}
export interface ListFacetNamesRequest {
  SchemaArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFacetNamesResponse {
  FacetNames?: Array<string>;
  NextToken?: string;
}
export interface ListIncomingTypedLinksRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  FilterAttributeRanges?: Array<TypedLinkAttributeRange>;
  FilterTypedLink?: TypedLinkSchemaAndFacetName;
  NextToken?: string;
  MaxResults?: number;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface ListIncomingTypedLinksResponse {
  LinkSpecifiers?: Array<TypedLinkSpecifier>;
  NextToken?: string;
}
export interface ListIndexRequest {
  DirectoryArn: string;
  RangesOnIndexedValues?: Array<ObjectAttributeRange>;
  IndexReference: ObjectReference;
  MaxResults?: number;
  NextToken?: string;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface ListIndexResponse {
  IndexAttachments?: Array<IndexAttachment>;
  NextToken?: string;
}
export interface ListManagedSchemaArnsRequest {
  SchemaArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListManagedSchemaArnsResponse {
  SchemaArns?: Array<string>;
  NextToken?: string;
}
export interface ListObjectAttributesRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
  ConsistencyLevel?: ConsistencyLevel;
  FacetFilter?: SchemaFacet;
}
export interface ListObjectAttributesResponse {
  Attributes?: Array<AttributeKeyAndValue>;
  NextToken?: string;
}
export interface ListObjectChildrenRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface ListObjectChildrenResponse {
  Children?: Record<string, string>;
  NextToken?: string;
}
export interface ListObjectParentPathsRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListObjectParentPathsResponse {
  PathToObjectIdentifiersList?: Array<PathToObjectIdentifiers>;
  NextToken?: string;
}
export interface ListObjectParentsRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
  ConsistencyLevel?: ConsistencyLevel;
  IncludeAllLinksToEachParent?: boolean;
}
export interface ListObjectParentsResponse {
  Parents?: Record<string, string>;
  NextToken?: string;
  ParentLinks?: Array<ObjectIdentifierAndLinkNameTuple>;
}
export interface ListObjectPoliciesRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface ListObjectPoliciesResponse {
  AttachedPolicyIds?: Array<string>;
  NextToken?: string;
}
export interface ListOutgoingTypedLinksRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  FilterAttributeRanges?: Array<TypedLinkAttributeRange>;
  FilterTypedLink?: TypedLinkSchemaAndFacetName;
  NextToken?: string;
  MaxResults?: number;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface ListOutgoingTypedLinksResponse {
  TypedLinkSpecifiers?: Array<TypedLinkSpecifier>;
  NextToken?: string;
}
export interface ListPolicyAttachmentsRequest {
  DirectoryArn: string;
  PolicyReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface ListPolicyAttachmentsResponse {
  ObjectIdentifiers?: Array<string>;
  NextToken?: string;
}
export interface ListPublishedSchemaArnsRequest {
  SchemaArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPublishedSchemaArnsResponse {
  SchemaArns?: Array<string>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
  NextToken?: string;
}
export interface ListTypedLinkFacetAttributesRequest {
  SchemaArn: string;
  Name: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTypedLinkFacetAttributesResponse {
  Attributes?: Array<TypedLinkAttributeDefinition>;
  NextToken?: string;
}
export interface ListTypedLinkFacetNamesRequest {
  SchemaArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTypedLinkFacetNamesResponse {
  FacetNames?: Array<string>;
  NextToken?: string;
}
export interface LookupPolicyRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface LookupPolicyResponse {
  PolicyToPathList?: Array<PolicyToPath>;
  NextToken?: string;
}
export type NextToken = string;

export declare class NotIndexException extends EffectData.TaggedError(
  "NotIndexException",
)<{
  readonly Message?: string;
}> {}
export declare class NotNodeException extends EffectData.TaggedError(
  "NotNodeException",
)<{
  readonly Message?: string;
}> {}
export declare class NotPolicyException extends EffectData.TaggedError(
  "NotPolicyException",
)<{
  readonly Message?: string;
}> {}
export type NumberAttributeValue = string;

export type NumberResults = number;

export declare class ObjectAlreadyDetachedException extends EffectData.TaggedError(
  "ObjectAlreadyDetachedException",
)<{
  readonly Message?: string;
}> {}
export interface ObjectAttributeAction {
  ObjectAttributeActionType?: UpdateActionType;
  ObjectAttributeUpdateValue?: TypedAttributeValue;
}
export interface ObjectAttributeRange {
  AttributeKey?: AttributeKey;
  Range?: TypedAttributeValueRange;
}
export type ObjectAttributeRangeList = Array<ObjectAttributeRange>;
export interface ObjectAttributeUpdate {
  ObjectAttributeKey?: AttributeKey;
  ObjectAttributeAction?: ObjectAttributeAction;
}
export type ObjectAttributeUpdateList = Array<ObjectAttributeUpdate>;
export type ObjectIdentifier = string;

export type ObjectIdentifierAndLinkNameList =
  Array<ObjectIdentifierAndLinkNameTuple>;
export interface ObjectIdentifierAndLinkNameTuple {
  ObjectIdentifier?: string;
  LinkName?: string;
}
export type ObjectIdentifierList = Array<string>;
export type ObjectIdentifierToLinkNameMap = Record<string, string>;
export declare class ObjectNotDetachedException extends EffectData.TaggedError(
  "ObjectNotDetachedException",
)<{
  readonly Message?: string;
}> {}
export interface ObjectReference {
  Selector?: string;
}
export type ObjectType = "NODE" | "LEAF_NODE" | "POLICY" | "INDEX";
export type PathString = string;

export interface PathToObjectIdentifiers {
  Path?: string;
  ObjectIdentifiers?: Array<string>;
}
export type PathToObjectIdentifiersList = Array<PathToObjectIdentifiers>;
export interface PolicyAttachment {
  PolicyId?: string;
  ObjectIdentifier?: string;
  PolicyType?: string;
}
export type PolicyAttachmentList = Array<PolicyAttachment>;
export interface PolicyToPath {
  Path?: string;
  Policies?: Array<PolicyAttachment>;
}
export type PolicyToPathList = Array<PolicyToPath>;
export type PolicyType = string;

export interface PublishSchemaRequest {
  DevelopmentSchemaArn: string;
  Version: string;
  MinorVersion?: string;
  Name?: string;
}
export interface PublishSchemaResponse {
  PublishedSchemaArn?: string;
}
export interface PutSchemaFromJsonRequest {
  SchemaArn: string;
  Document: string;
}
export interface PutSchemaFromJsonResponse {
  Arn?: string;
}
export type RangeMode =
  | "FIRST"
  | "LAST"
  | "LAST_BEFORE_MISSING_VALUES"
  | "INCLUSIVE"
  | "EXCLUSIVE";
export interface RemoveFacetFromObjectRequest {
  DirectoryArn: string;
  SchemaFacet: SchemaFacet;
  ObjectReference: ObjectReference;
}
export interface RemoveFacetFromObjectResponse {}
export type RequiredAttributeBehavior = "REQUIRED_ALWAYS" | "NOT_REQUIRED";
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class RetryableConflictException extends EffectData.TaggedError(
  "RetryableConflictException",
)<{
  readonly Message?: string;
}> {}
export interface Rule {
  Type?: RuleType;
  Parameters?: Record<string, string>;
}
export type RuleKey = string;

export type RuleMap = Record<string, Rule>;
export type RuleParameterKey = string;

export type RuleParameterMap = Record<string, string>;
export type RuleParameterValue = string;

export type RuleType =
  | "BINARY_LENGTH"
  | "NUMBER_COMPARISON"
  | "STRING_FROM_SET"
  | "STRING_LENGTH";
export declare class SchemaAlreadyExistsException extends EffectData.TaggedError(
  "SchemaAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export declare class SchemaAlreadyPublishedException extends EffectData.TaggedError(
  "SchemaAlreadyPublishedException",
)<{
  readonly Message?: string;
}> {}
export interface SchemaFacet {
  SchemaArn?: string;
  FacetName?: string;
}
export type SchemaFacetList = Array<SchemaFacet>;
export type SchemaJsonDocument = string;

export type SchemaName = string;

export type SelectorObjectReference = string;

export declare class StillContainsLinksException extends EffectData.TaggedError(
  "StillContainsLinksException",
)<{
  readonly Message?: string;
}> {}
export type StringAttributeValue = string;

export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagsNumberResults = number;

export type TagValue = string;

export type TypedAttributeValue =
  | {
      StringValue: string;
      BinaryValue?: undefined;
      BooleanValue?: undefined;
      NumberValue?: undefined;
      DatetimeValue?: undefined;
    }
  | {
      StringValue?: undefined;
      BinaryValue: Uint8Array | string;
      BooleanValue?: undefined;
      NumberValue?: undefined;
      DatetimeValue?: undefined;
    }
  | {
      StringValue?: undefined;
      BinaryValue?: undefined;
      BooleanValue: boolean;
      NumberValue?: undefined;
      DatetimeValue?: undefined;
    }
  | {
      StringValue?: undefined;
      BinaryValue?: undefined;
      BooleanValue?: undefined;
      NumberValue: string;
      DatetimeValue?: undefined;
    }
  | {
      StringValue?: undefined;
      BinaryValue?: undefined;
      BooleanValue?: undefined;
      NumberValue?: undefined;
      DatetimeValue: Date | string;
    };
export interface TypedAttributeValueRange {
  StartMode: RangeMode;
  StartValue?: TypedAttributeValue;
  EndMode: RangeMode;
  EndValue?: TypedAttributeValue;
}
export interface TypedLinkAttributeDefinition {
  Name: string;
  Type: FacetAttributeType;
  DefaultValue?: TypedAttributeValue;
  IsImmutable?: boolean;
  Rules?: Record<string, Rule>;
  RequiredBehavior: RequiredAttributeBehavior;
}
export type TypedLinkAttributeDefinitionList =
  Array<TypedLinkAttributeDefinition>;
export interface TypedLinkAttributeRange {
  AttributeName?: string;
  Range: TypedAttributeValueRange;
}
export type TypedLinkAttributeRangeList = Array<TypedLinkAttributeRange>;
export interface TypedLinkFacet {
  Name: string;
  Attributes: Array<TypedLinkAttributeDefinition>;
  IdentityAttributeOrder: Array<string>;
}
export interface TypedLinkFacetAttributeUpdate {
  Attribute: TypedLinkAttributeDefinition;
  Action: UpdateActionType;
}
export type TypedLinkFacetAttributeUpdateList =
  Array<TypedLinkFacetAttributeUpdate>;
export type TypedLinkName = string;

export type TypedLinkNameList = Array<string>;
export interface TypedLinkSchemaAndFacetName {
  SchemaArn: string;
  TypedLinkName: string;
}
export interface TypedLinkSpecifier {
  TypedLinkFacet: TypedLinkSchemaAndFacetName;
  SourceObjectReference: ObjectReference;
  TargetObjectReference: ObjectReference;
  IdentityAttributeValues: Array<AttributeNameAndValue>;
}
export type TypedLinkSpecifierList = Array<TypedLinkSpecifier>;
export declare class UnsupportedIndexTypeException extends EffectData.TaggedError(
  "UnsupportedIndexTypeException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export type UpdateActionType = "CREATE_OR_UPDATE" | "DELETE";
export interface UpdateFacetRequest {
  SchemaArn: string;
  Name: string;
  AttributeUpdates?: Array<FacetAttributeUpdate>;
  ObjectType?: ObjectType;
}
export interface UpdateFacetResponse {}
export interface UpdateLinkAttributesRequest {
  DirectoryArn: string;
  TypedLinkSpecifier: TypedLinkSpecifier;
  AttributeUpdates: Array<LinkAttributeUpdate>;
}
export interface UpdateLinkAttributesResponse {}
export interface UpdateObjectAttributesRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  AttributeUpdates: Array<ObjectAttributeUpdate>;
}
export interface UpdateObjectAttributesResponse {
  ObjectIdentifier?: string;
}
export interface UpdateSchemaRequest {
  SchemaArn: string;
  Name: string;
}
export interface UpdateSchemaResponse {
  SchemaArn?: string;
}
export interface UpdateTypedLinkFacetRequest {
  SchemaArn: string;
  Name: string;
  AttributeUpdates: Array<TypedLinkFacetAttributeUpdate>;
  IdentityAttributeOrder: Array<string>;
}
export interface UpdateTypedLinkFacetResponse {}
export interface UpgradeAppliedSchemaRequest {
  PublishedSchemaArn: string;
  DirectoryArn: string;
  DryRun?: boolean;
}
export interface UpgradeAppliedSchemaResponse {
  UpgradedSchemaArn?: string;
  DirectoryArn?: string;
}
export interface UpgradePublishedSchemaRequest {
  DevelopmentSchemaArn: string;
  PublishedSchemaArn: string;
  MinorVersion: string;
  DryRun?: boolean;
}
export interface UpgradePublishedSchemaResponse {
  UpgradedSchemaArn?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type Version = string;

export declare namespace AddFacetToObject {
  export type Input = AddFacetToObjectRequest;
  export type Output = AddFacetToObjectResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ApplySchema {
  export type Input = ApplySchemaRequest;
  export type Output = ApplySchemaResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidAttachmentException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | SchemaAlreadyExistsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AttachObject {
  export type Input = AttachObjectRequest;
  export type Output = AttachObjectResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidAttachmentException
    | LimitExceededException
    | LinkNameAlreadyInUseException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AttachPolicy {
  export type Input = AttachPolicyRequest;
  export type Output = AttachPolicyResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | NotPolicyException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AttachToIndex {
  export type Input = AttachToIndexRequest;
  export type Output = AttachToIndexResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | IndexedAttributeMissingException
    | InternalServiceException
    | InvalidArnException
    | InvalidAttachmentException
    | LimitExceededException
    | LinkNameAlreadyInUseException
    | NotIndexException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AttachTypedLink {
  export type Input = AttachTypedLinkRequest;
  export type Output = AttachTypedLinkResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidAttachmentException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchRead {
  export type Input = BatchReadRequest;
  export type Output = BatchReadResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchWrite {
  export type Input = BatchWriteRequest;
  export type Output = BatchWriteResponse;
  export type Error =
    | AccessDeniedException
    | BatchWriteException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDirectory {
  export type Input = CreateDirectoryRequest;
  export type Output = CreateDirectoryResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryAlreadyExistsException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateFacet {
  export type Input = CreateFacetRequest;
  export type Output = CreateFacetResponse;
  export type Error =
    | AccessDeniedException
    | FacetAlreadyExistsException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidRuleException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateIndex {
  export type Input = CreateIndexRequest;
  export type Output = CreateIndexResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | LinkNameAlreadyInUseException
    | ResourceNotFoundException
    | RetryableConflictException
    | UnsupportedIndexTypeException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateObject {
  export type Input = CreateObjectRequest;
  export type Output = CreateObjectResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | LinkNameAlreadyInUseException
    | ResourceNotFoundException
    | RetryableConflictException
    | UnsupportedIndexTypeException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSchema {
  export type Input = CreateSchemaRequest;
  export type Output = CreateSchemaResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | RetryableConflictException
    | SchemaAlreadyExistsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTypedLinkFacet {
  export type Input = CreateTypedLinkFacetRequest;
  export type Output = CreateTypedLinkFacetResponse;
  export type Error =
    | AccessDeniedException
    | FacetAlreadyExistsException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidRuleException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDirectory {
  export type Input = DeleteDirectoryRequest;
  export type Output = DeleteDirectoryResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryDeletedException
    | DirectoryNotDisabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteFacet {
  export type Input = DeleteFacetRequest;
  export type Output = DeleteFacetResponse;
  export type Error =
    | AccessDeniedException
    | FacetInUseException
    | FacetNotFoundException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteObject {
  export type Input = DeleteObjectRequest;
  export type Output = DeleteObjectResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ObjectNotDetachedException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSchema {
  export type Input = DeleteSchemaRequest;
  export type Output = DeleteSchemaResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | StillContainsLinksException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTypedLinkFacet {
  export type Input = DeleteTypedLinkFacetRequest;
  export type Output = DeleteTypedLinkFacetResponse;
  export type Error =
    | AccessDeniedException
    | FacetNotFoundException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DetachFromIndex {
  export type Input = DetachFromIndexRequest;
  export type Output = DetachFromIndexResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | NotIndexException
    | ObjectAlreadyDetachedException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DetachObject {
  export type Input = DetachObjectRequest;
  export type Output = DetachObjectResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | NotNodeException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DetachPolicy {
  export type Input = DetachPolicyRequest;
  export type Output = DetachPolicyResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | NotPolicyException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DetachTypedLink {
  export type Input = DetachTypedLinkRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisableDirectory {
  export type Input = DisableDirectoryRequest;
  export type Output = DisableDirectoryResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryDeletedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace EnableDirectory {
  export type Input = EnableDirectoryRequest;
  export type Output = EnableDirectoryResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryDeletedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAppliedSchemaVersion {
  export type Input = GetAppliedSchemaVersionRequest;
  export type Output = GetAppliedSchemaVersionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDirectory {
  export type Input = GetDirectoryRequest;
  export type Output = GetDirectoryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFacet {
  export type Input = GetFacetRequest;
  export type Output = GetFacetResponse;
  export type Error =
    | AccessDeniedException
    | FacetNotFoundException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLinkAttributes {
  export type Input = GetLinkAttributesRequest;
  export type Output = GetLinkAttributesResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetObjectAttributes {
  export type Input = GetObjectAttributesRequest;
  export type Output = GetObjectAttributesResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetObjectInformation {
  export type Input = GetObjectInformationRequest;
  export type Output = GetObjectInformationResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSchemaAsJson {
  export type Input = GetSchemaAsJsonRequest;
  export type Output = GetSchemaAsJsonResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTypedLinkFacetInformation {
  export type Input = GetTypedLinkFacetInformationRequest;
  export type Output = GetTypedLinkFacetInformationResponse;
  export type Error =
    | AccessDeniedException
    | FacetNotFoundException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAppliedSchemaArns {
  export type Input = ListAppliedSchemaArnsRequest;
  export type Output = ListAppliedSchemaArnsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAttachedIndices {
  export type Input = ListAttachedIndicesRequest;
  export type Output = ListAttachedIndicesResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDevelopmentSchemaArns {
  export type Input = ListDevelopmentSchemaArnsRequest;
  export type Output = ListDevelopmentSchemaArnsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDirectories {
  export type Input = ListDirectoriesRequest;
  export type Output = ListDirectoriesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFacetAttributes {
  export type Input = ListFacetAttributesRequest;
  export type Output = ListFacetAttributesResponse;
  export type Error =
    | AccessDeniedException
    | FacetNotFoundException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFacetNames {
  export type Input = ListFacetNamesRequest;
  export type Output = ListFacetNamesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIncomingTypedLinks {
  export type Input = ListIncomingTypedLinksRequest;
  export type Output = ListIncomingTypedLinksResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIndex {
  export type Input = ListIndexRequest;
  export type Output = ListIndexResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | NotIndexException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListManagedSchemaArns {
  export type Input = ListManagedSchemaArnsRequest;
  export type Output = ListManagedSchemaArnsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListObjectAttributes {
  export type Input = ListObjectAttributesRequest;
  export type Output = ListObjectAttributesResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListObjectChildren {
  export type Input = ListObjectChildrenRequest;
  export type Output = ListObjectChildrenResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | NotNodeException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListObjectParentPaths {
  export type Input = ListObjectParentPathsRequest;
  export type Output = ListObjectParentPathsResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListObjectParents {
  export type Input = ListObjectParentsRequest;
  export type Output = ListObjectParentsResponse;
  export type Error =
    | AccessDeniedException
    | CannotListParentOfRootException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListObjectPolicies {
  export type Input = ListObjectPoliciesRequest;
  export type Output = ListObjectPoliciesResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOutgoingTypedLinks {
  export type Input = ListOutgoingTypedLinksRequest;
  export type Output = ListOutgoingTypedLinksResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPolicyAttachments {
  export type Input = ListPolicyAttachmentsRequest;
  export type Output = ListPolicyAttachmentsResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | NotPolicyException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPublishedSchemaArns {
  export type Input = ListPublishedSchemaArnsRequest;
  export type Output = ListPublishedSchemaArnsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidTaggingRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTypedLinkFacetAttributes {
  export type Input = ListTypedLinkFacetAttributesRequest;
  export type Output = ListTypedLinkFacetAttributesResponse;
  export type Error =
    | AccessDeniedException
    | FacetNotFoundException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTypedLinkFacetNames {
  export type Input = ListTypedLinkFacetNamesRequest;
  export type Output = ListTypedLinkFacetNamesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace LookupPolicy {
  export type Input = LookupPolicyRequest;
  export type Output = LookupPolicyResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | InternalServiceException
    | InvalidArnException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PublishSchema {
  export type Input = PublishSchemaRequest;
  export type Output = PublishSchemaResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | SchemaAlreadyPublishedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutSchemaFromJson {
  export type Input = PutSchemaFromJsonRequest;
  export type Output = PutSchemaFromJsonResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidRuleException
    | InvalidSchemaDocException
    | LimitExceededException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RemoveFacetFromObject {
  export type Input = RemoveFacetFromObjectRequest;
  export type Output = RemoveFacetFromObjectResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidTaggingRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | InvalidTaggingRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateFacet {
  export type Input = UpdateFacetRequest;
  export type Output = UpdateFacetResponse;
  export type Error =
    | AccessDeniedException
    | FacetNotFoundException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidFacetUpdateException
    | InvalidRuleException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLinkAttributes {
  export type Input = UpdateLinkAttributesRequest;
  export type Output = UpdateLinkAttributesResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateObjectAttributes {
  export type Input = UpdateObjectAttributesRequest;
  export type Output = UpdateObjectAttributesResponse;
  export type Error =
    | AccessDeniedException
    | DirectoryNotEnabledException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | LinkNameAlreadyInUseException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSchema {
  export type Input = UpdateSchemaRequest;
  export type Output = UpdateSchemaResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidArnException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTypedLinkFacet {
  export type Input = UpdateTypedLinkFacetRequest;
  export type Output = UpdateTypedLinkFacetResponse;
  export type Error =
    | AccessDeniedException
    | FacetNotFoundException
    | FacetValidationException
    | InternalServiceException
    | InvalidArnException
    | InvalidFacetUpdateException
    | InvalidRuleException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpgradeAppliedSchema {
  export type Input = UpgradeAppliedSchemaRequest;
  export type Output = UpgradeAppliedSchemaResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleSchemaException
    | InternalServiceException
    | InvalidArnException
    | InvalidAttachmentException
    | ResourceNotFoundException
    | RetryableConflictException
    | SchemaAlreadyExistsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpgradePublishedSchema {
  export type Input = UpgradePublishedSchemaRequest;
  export type Output = UpgradePublishedSchemaResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleSchemaException
    | InternalServiceException
    | InvalidArnException
    | InvalidAttachmentException
    | LimitExceededException
    | ResourceNotFoundException
    | RetryableConflictException
    | ValidationException
    | CommonAwsError;
}
