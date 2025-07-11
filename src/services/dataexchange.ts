import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface DataExchange {
  acceptDataGrant(
    input: AcceptDataGrantRequest,
  ): Effect.Effect<
    AcceptDataGrantResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelJob(
    input: CancelJobRequest,
  ): Effect.Effect<
    {},
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDataGrant(
    input: CreateDataGrantRequest,
  ): Effect.Effect<
    CreateDataGrantResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceLimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDataSet(
    input: CreateDataSetRequest,
  ): Effect.Effect<
    CreateDataSetResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceLimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createEventAction(
    input: CreateEventActionRequest,
  ): Effect.Effect<
    CreateEventActionResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceLimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createJob(
    input: CreateJobRequest,
  ): Effect.Effect<
    CreateJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRevision(
    input: CreateRevisionRequest,
  ): Effect.Effect<
    CreateRevisionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAsset(
    input: DeleteAssetRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDataGrant(
    input: DeleteDataGrantRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDataSet(
    input: DeleteDataSetRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEventAction(
    input: DeleteEventActionRequest,
  ): Effect.Effect<
    {},
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRevision(
    input: DeleteRevisionRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAsset(
    input: GetAssetRequest,
  ): Effect.Effect<
    GetAssetResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDataGrant(
    input: GetDataGrantRequest,
  ): Effect.Effect<
    GetDataGrantResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDataSet(
    input: GetDataSetRequest,
  ): Effect.Effect<
    GetDataSetResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEventAction(
    input: GetEventActionRequest,
  ): Effect.Effect<
    GetEventActionResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getJob(
    input: GetJobRequest,
  ): Effect.Effect<
    GetJobResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getReceivedDataGrant(
    input: GetReceivedDataGrantRequest,
  ): Effect.Effect<
    GetReceivedDataGrantResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getRevision(
    input: GetRevisionRequest,
  ): Effect.Effect<
    GetRevisionResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataGrants(
    input: ListDataGrantsRequest,
  ): Effect.Effect<
    ListDataGrantsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataSetRevisions(
    input: ListDataSetRevisionsRequest,
  ): Effect.Effect<
    ListDataSetRevisionsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataSets(
    input: ListDataSetsRequest,
  ): Effect.Effect<
    ListDataSetsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEventActions(
    input: ListEventActionsRequest,
  ): Effect.Effect<
    ListEventActionsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listJobs(
    input: ListJobsRequest,
  ): Effect.Effect<
    ListJobsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listReceivedDataGrants(
    input: ListReceivedDataGrantsRequest,
  ): Effect.Effect<
    ListReceivedDataGrantsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRevisionAssets(
    input: ListRevisionAssetsRequest,
  ): Effect.Effect<
    ListRevisionAssetsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<ListTagsForResourceResponse, CommonAwsError>;
  revokeRevision(
    input: RevokeRevisionRequest,
  ): Effect.Effect<
    RevokeRevisionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  sendApiAsset(
    input: SendApiAssetRequest,
  ): Effect.Effect<
    SendApiAssetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  sendDataSetNotification(
    input: SendDataSetNotificationRequest,
  ): Effect.Effect<
    SendDataSetNotificationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startJob(
    input: StartJobRequest,
  ): Effect.Effect<
    StartJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(input: TagResourceRequest): Effect.Effect<{}, CommonAwsError>;
  untagResource(input: UntagResourceRequest): Effect.Effect<{}, CommonAwsError>;
  updateAsset(
    input: UpdateAssetRequest,
  ): Effect.Effect<
    UpdateAssetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDataSet(
    input: UpdateDataSetRequest,
  ): Effect.Effect<
    UpdateDataSetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateEventAction(
    input: UpdateEventActionRequest,
  ): Effect.Effect<
    UpdateEventActionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateRevision(
    input: UpdateRevisionRequest,
  ): Effect.Effect<
    UpdateRevisionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type Dataexchange = DataExchange;

export type __boolean = boolean;

export type __double = number;

export type __doubleMin0 = number;

export type __string = string;

export type __stringMin0Max16384 = string;

export type __stringMin0Max4096 = string;

export type __stringMin10Max512 = string;

export type __stringMin24Max24PatternAZaZ094AZaZ092AZaZ093 = string;

export type AcceptanceStateFilterValue = string;

export type AcceptanceStateFilterValues = Array<string>;
export interface AcceptDataGrantRequest {
  DataGrantArn: string;
}
export interface AcceptDataGrantResponse {
  Name: string;
  SenderPrincipal?: string;
  ReceiverPrincipal: string;
  Description?: string;
  AcceptanceState: string;
  AcceptedAt?: Date | string;
  EndsAt?: Date | string;
  GrantDistributionScope: string;
  DataSetId: string;
  Id: string;
  Arn: string;
  CreatedAt: Date | string;
  UpdatedAt: Date | string;
}
export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export interface Action {
  ExportRevisionToS3?: AutoExportRevisionToS3RequestDetails;
}
export type ApiDescription = string;

export interface ApiGatewayApiAsset {
  ApiDescription?: string;
  ApiEndpoint?: string;
  ApiId?: string;
  ApiKey?: string;
  ApiName?: string;
  ApiSpecificationDownloadUrl?: string;
  ApiSpecificationDownloadUrlExpiresAt?: Date | string;
  ProtocolType?: string;
  Stage?: string;
}
export type Arn = string;

export interface AssetDestinationEntry {
  AssetId: string;
  Bucket: string;
  Key?: string;
}
export interface AssetDetails {
  S3SnapshotAsset?: S3SnapshotAsset;
  RedshiftDataShareAsset?: RedshiftDataShareAsset;
  ApiGatewayApiAsset?: ApiGatewayApiAsset;
  S3DataAccessAsset?: S3DataAccessAsset;
  LakeFormationDataPermissionAsset?: LakeFormationDataPermissionAsset;
}
export interface AssetEntry {
  Arn: string;
  AssetDetails: AssetDetails;
  AssetType: string;
  CreatedAt: Date | string;
  DataSetId: string;
  Id: string;
  Name: string;
  RevisionId: string;
  SourceId?: string;
  UpdatedAt: Date | string;
}
export type AssetName = string;

export interface AssetSourceEntry {
  Bucket: string;
  Key: string;
}
export type AssetType = string;

export interface AutoExportRevisionDestinationEntry {
  Bucket: string;
  KeyPattern?: string;
}
export interface AutoExportRevisionToS3RequestDetails {
  Encryption?: ExportServerSideEncryption;
  RevisionDestination: AutoExportRevisionDestinationEntry;
}
export type AwsAccountId = string;

export interface CancelJobRequest {
  JobId: string;
}
export type ClientToken = string;

export type Code = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
  readonly ResourceType?: string;
}> {}
export interface CreateDataGrantRequest {
  Name: string;
  GrantDistributionScope: string;
  ReceiverPrincipal: string;
  SourceDataSetId: string;
  EndsAt?: Date | string;
  Description?: string;
  Tags?: Record<string, string>;
}
export interface CreateDataGrantResponse {
  Name: string;
  SenderPrincipal: string;
  ReceiverPrincipal: string;
  Description?: string;
  AcceptanceState: string;
  AcceptedAt?: Date | string;
  EndsAt?: Date | string;
  GrantDistributionScope: string;
  DataSetId: string;
  SourceDataSetId: string;
  Id: string;
  Arn: string;
  CreatedAt: Date | string;
  UpdatedAt: Date | string;
  Tags?: Record<string, string>;
}
export interface CreateDataSetRequest {
  AssetType: string;
  Description: string;
  Name: string;
  Tags?: Record<string, string>;
}
export interface CreateDataSetResponse {
  Arn?: string;
  AssetType?: string;
  CreatedAt?: Date | string;
  Description?: string;
  Id?: string;
  Name?: string;
  Origin?: string;
  OriginDetails?: OriginDetails;
  SourceId?: string;
  Tags?: Record<string, string>;
  UpdatedAt?: Date | string;
}
export interface CreateEventActionRequest {
  Action: Action;
  Event: Event;
  Tags?: Record<string, string>;
}
export interface CreateEventActionResponse {
  Action?: Action;
  Arn?: string;
  CreatedAt?: Date | string;
  Event?: Event;
  Id?: string;
  Tags?: Record<string, string>;
  UpdatedAt?: Date | string;
}
export interface CreateJobRequest {
  Details: RequestDetails;
  Type: string;
}
export interface CreateJobResponse {
  Arn?: string;
  CreatedAt?: Date | string;
  Details?: ResponseDetails;
  Errors?: Array<JobError>;
  Id?: string;
  State?: string;
  Type?: string;
  UpdatedAt?: Date | string;
}
export interface CreateRevisionRequest {
  Comment?: string;
  DataSetId: string;
  Tags?: Record<string, string>;
}
export interface CreateRevisionResponse {
  Arn?: string;
  Comment?: string;
  CreatedAt?: Date | string;
  DataSetId?: string;
  Finalized?: boolean;
  Id?: string;
  SourceId?: string;
  Tags?: Record<string, string>;
  UpdatedAt?: Date | string;
  RevocationComment?: string;
  Revoked?: boolean;
  RevokedAt?: Date | string;
}
export interface CreateS3DataAccessFromS3BucketRequestDetails {
  AssetSource: S3DataAccessAssetSourceEntry;
  DataSetId: string;
  RevisionId: string;
}
export interface CreateS3DataAccessFromS3BucketResponseDetails {
  AssetSource: S3DataAccessAssetSourceEntry;
  DataSetId: string;
  RevisionId: string;
}
export interface DatabaseLFTagPolicy {
  Expression: Array<LFTag>;
}
export interface DatabaseLFTagPolicyAndPermissions {
  Expression: Array<LFTag>;
  Permissions: Array<string>;
}
export type DatabaseLFTagPolicyPermission = string;

export type DataGrantAcceptanceState = string;

export type DataGrantArn = string;

export type DataGrantDescription = string;

export type DataGrantId = string;

export type DataGrantName = string;

export interface DataGrantSummaryEntry {
  Name: string;
  SenderPrincipal: string;
  ReceiverPrincipal: string;
  AcceptanceState: string;
  AcceptedAt?: Date | string;
  EndsAt?: Date | string;
  DataSetId: string;
  SourceDataSetId: string;
  Id: string;
  Arn: string;
  CreatedAt: Date | string;
  UpdatedAt: Date | string;
}
export interface DataSetEntry {
  Arn: string;
  AssetType: string;
  CreatedAt: Date | string;
  Description: string;
  Id: string;
  Name: string;
  Origin: string;
  OriginDetails?: OriginDetails;
  SourceId?: string;
  UpdatedAt: Date | string;
}
export interface DataUpdateRequestDetails {
  DataUpdatedAt?: Date | string;
}
export interface DeleteAssetRequest {
  AssetId: string;
  DataSetId: string;
  RevisionId: string;
}
export interface DeleteDataGrantRequest {
  DataGrantId: string;
}
export interface DeleteDataSetRequest {
  DataSetId: string;
}
export interface DeleteEventActionRequest {
  EventActionId: string;
}
export interface DeleteRevisionRequest {
  DataSetId: string;
  RevisionId: string;
}
export interface DeprecationRequestDetails {
  DeprecationAt: Date | string;
}
export type Description = string;

export interface Details {
  ImportAssetFromSignedUrlJobErrorDetails?: ImportAssetFromSignedUrlJobErrorDetails;
  ImportAssetsFromS3JobErrorDetails?: Array<AssetSourceEntry>;
}
export interface Event {
  RevisionPublished?: RevisionPublished;
}
export interface EventActionEntry {
  Action: Action;
  Arn: string;
  CreatedAt: Date | string;
  Event: Event;
  Id: string;
  UpdatedAt: Date | string;
}
export type ExceptionCause = string;

export interface ExportAssetsToS3RequestDetails {
  AssetDestinations: Array<AssetDestinationEntry>;
  DataSetId: string;
  Encryption?: ExportServerSideEncryption;
  RevisionId: string;
}
export interface ExportAssetsToS3ResponseDetails {
  AssetDestinations: Array<AssetDestinationEntry>;
  DataSetId: string;
  Encryption?: ExportServerSideEncryption;
  RevisionId: string;
}
export interface ExportAssetToSignedUrlRequestDetails {
  AssetId: string;
  DataSetId: string;
  RevisionId: string;
}
export interface ExportAssetToSignedUrlResponseDetails {
  AssetId: string;
  DataSetId: string;
  RevisionId: string;
  SignedUrl?: string;
  SignedUrlExpiresAt?: Date | string;
}
export interface ExportRevisionsToS3RequestDetails {
  DataSetId: string;
  Encryption?: ExportServerSideEncryption;
  RevisionDestinations: Array<RevisionDestinationEntry>;
}
export interface ExportRevisionsToS3ResponseDetails {
  DataSetId: string;
  Encryption?: ExportServerSideEncryption;
  RevisionDestinations: Array<RevisionDestinationEntry>;
  EventActionArn?: string;
}
export interface ExportServerSideEncryption {
  KmsKeyArn?: string;
  Type: string;
}
export interface GetAssetRequest {
  AssetId: string;
  DataSetId: string;
  RevisionId: string;
}
export interface GetAssetResponse {
  Arn?: string;
  AssetDetails?: AssetDetails;
  AssetType?: string;
  CreatedAt?: Date | string;
  DataSetId?: string;
  Id?: string;
  Name?: string;
  RevisionId?: string;
  SourceId?: string;
  UpdatedAt?: Date | string;
}
export interface GetDataGrantRequest {
  DataGrantId: string;
}
export interface GetDataGrantResponse {
  Name: string;
  SenderPrincipal: string;
  ReceiverPrincipal: string;
  Description?: string;
  AcceptanceState: string;
  AcceptedAt?: Date | string;
  EndsAt?: Date | string;
  GrantDistributionScope: string;
  DataSetId: string;
  SourceDataSetId: string;
  Id: string;
  Arn: string;
  CreatedAt: Date | string;
  UpdatedAt: Date | string;
  Tags?: Record<string, string>;
}
export interface GetDataSetRequest {
  DataSetId: string;
}
export interface GetDataSetResponse {
  Arn?: string;
  AssetType?: string;
  CreatedAt?: Date | string;
  Description?: string;
  Id?: string;
  Name?: string;
  Origin?: string;
  OriginDetails?: OriginDetails;
  SourceId?: string;
  Tags?: Record<string, string>;
  UpdatedAt?: Date | string;
}
export interface GetEventActionRequest {
  EventActionId: string;
}
export interface GetEventActionResponse {
  Action?: Action;
  Arn?: string;
  CreatedAt?: Date | string;
  Event?: Event;
  Id?: string;
  Tags?: Record<string, string>;
  UpdatedAt?: Date | string;
}
export interface GetJobRequest {
  JobId: string;
}
export interface GetJobResponse {
  Arn?: string;
  CreatedAt?: Date | string;
  Details?: ResponseDetails;
  Errors?: Array<JobError>;
  Id?: string;
  State?: string;
  Type?: string;
  UpdatedAt?: Date | string;
}
export interface GetReceivedDataGrantRequest {
  DataGrantArn: string;
}
export interface GetReceivedDataGrantResponse {
  Name: string;
  SenderPrincipal?: string;
  ReceiverPrincipal: string;
  Description?: string;
  AcceptanceState: string;
  AcceptedAt?: Date | string;
  EndsAt?: Date | string;
  GrantDistributionScope: string;
  DataSetId: string;
  Id: string;
  Arn: string;
  CreatedAt: Date | string;
  UpdatedAt: Date | string;
}
export interface GetRevisionRequest {
  DataSetId: string;
  RevisionId: string;
}
export interface GetRevisionResponse {
  Arn?: string;
  Comment?: string;
  CreatedAt?: Date | string;
  DataSetId?: string;
  Finalized?: boolean;
  Id?: string;
  SourceId?: string;
  Tags?: Record<string, string>;
  UpdatedAt?: Date | string;
  RevocationComment?: string;
  Revoked?: boolean;
  RevokedAt?: Date | string;
}
export type GrantDistributionScope = string;

export type Id = string;

export interface ImportAssetFromApiGatewayApiRequestDetails {
  ApiDescription?: string;
  ApiId: string;
  ApiKey?: string;
  ApiName: string;
  ApiSpecificationMd5Hash: string;
  DataSetId: string;
  ProtocolType: string;
  RevisionId: string;
  Stage: string;
}
export interface ImportAssetFromApiGatewayApiResponseDetails {
  ApiDescription?: string;
  ApiId: string;
  ApiKey?: string;
  ApiName: string;
  ApiSpecificationMd5Hash: string;
  ApiSpecificationUploadUrl: string;
  ApiSpecificationUploadUrlExpiresAt: Date | string;
  DataSetId: string;
  ProtocolType: string;
  RevisionId: string;
  Stage: string;
}
export interface ImportAssetFromSignedUrlJobErrorDetails {
  AssetName: string;
}
export interface ImportAssetFromSignedUrlRequestDetails {
  AssetName: string;
  DataSetId: string;
  Md5Hash: string;
  RevisionId: string;
}
export interface ImportAssetFromSignedUrlResponseDetails {
  AssetName: string;
  DataSetId: string;
  Md5Hash?: string;
  RevisionId: string;
  SignedUrl?: string;
  SignedUrlExpiresAt?: Date | string;
}
export interface ImportAssetsFromLakeFormationTagPolicyRequestDetails {
  CatalogId: string;
  Database?: DatabaseLFTagPolicyAndPermissions;
  Table?: TableLFTagPolicyAndPermissions;
  RoleArn: string;
  DataSetId: string;
  RevisionId: string;
}
export interface ImportAssetsFromLakeFormationTagPolicyResponseDetails {
  CatalogId: string;
  Database?: DatabaseLFTagPolicyAndPermissions;
  Table?: TableLFTagPolicyAndPermissions;
  RoleArn: string;
  DataSetId: string;
  RevisionId: string;
}
export interface ImportAssetsFromRedshiftDataSharesRequestDetails {
  AssetSources: Array<RedshiftDataShareAssetSourceEntry>;
  DataSetId: string;
  RevisionId: string;
}
export interface ImportAssetsFromRedshiftDataSharesResponseDetails {
  AssetSources: Array<RedshiftDataShareAssetSourceEntry>;
  DataSetId: string;
  RevisionId: string;
}
export interface ImportAssetsFromS3RequestDetails {
  AssetSources: Array<AssetSourceEntry>;
  DataSetId: string;
  RevisionId: string;
}
export interface ImportAssetsFromS3ResponseDetails {
  AssetSources: Array<AssetSourceEntry>;
  DataSetId: string;
  RevisionId: string;
}
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export interface JobEntry {
  Arn: string;
  CreatedAt: Date | string;
  Details: ResponseDetails;
  Errors?: Array<JobError>;
  Id: string;
  State: string;
  Type: string;
  UpdatedAt: Date | string;
}
export interface JobError {
  Code: string;
  Details?: Details;
  LimitName?: string;
  LimitValue?: number;
  Message: string;
  ResourceId?: string;
  ResourceType?: string;
}
export type JobErrorLimitName = string;

export type JobErrorResourceTypes = string;

export type KmsKeyArn = string;

export interface KmsKeyToGrant {
  KmsKeyArn: string;
}
export interface LakeFormationDataPermissionAsset {
  LakeFormationDataPermissionDetails: LakeFormationDataPermissionDetails;
  LakeFormationDataPermissionType: string;
  Permissions: Array<string>;
  RoleArn?: string;
}
export interface LakeFormationDataPermissionDetails {
  LFTagPolicy?: LFTagPolicyDetails;
}
export type LakeFormationDataPermissionType = string;

export interface LakeFormationTagPolicyDetails {
  Database?: string;
  Table?: string;
}
export type LFPermission = string;

export interface LFResourceDetails {
  Database?: DatabaseLFTagPolicy;
  Table?: TableLFTagPolicy;
}
export type LFResourceType = string;

export interface LFTag {
  TagKey: string;
  TagValues: Array<string>;
}
export interface LFTagPolicyDetails {
  CatalogId: string;
  ResourceType: string;
  ResourceDetails: LFResourceDetails;
}
export type LimitName = string;

export interface ListDataGrantsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDataGrantsResponse {
  DataGrantSummaries?: Array<DataGrantSummaryEntry>;
  NextToken?: string;
}
export interface ListDataSetRevisionsRequest {
  DataSetId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDataSetRevisionsResponse {
  NextToken?: string;
  Revisions?: Array<RevisionEntry>;
}
export interface ListDataSetsRequest {
  MaxResults?: number;
  NextToken?: string;
  Origin?: string;
}
export interface ListDataSetsResponse {
  DataSets?: Array<DataSetEntry>;
  NextToken?: string;
}
export interface ListEventActionsRequest {
  EventSourceId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListEventActionsResponse {
  EventActions?: Array<EventActionEntry>;
  NextToken?: string;
}
export interface ListJobsRequest {
  DataSetId?: string;
  MaxResults?: number;
  NextToken?: string;
  RevisionId?: string;
}
export interface ListJobsResponse {
  Jobs?: Array<JobEntry>;
  NextToken?: string;
}
export type ListOf__string = Array<string>;
export type ListOfAssetDestinationEntry = Array<AssetDestinationEntry>;
export type ListOfAssetEntry = Array<AssetEntry>;
export type ListOfAssetSourceEntry = Array<AssetSourceEntry>;
export type ListOfDatabaseLFTagPolicyPermissions = Array<string>;
export type ListOfDataGrantSummaryEntry = Array<DataGrantSummaryEntry>;
export type ListOfDataSetEntry = Array<DataSetEntry>;
export type ListOfEventActionEntry = Array<EventActionEntry>;
export type ListOfJobEntry = Array<JobEntry>;
export type ListOfJobError = Array<JobError>;
export type ListOfKmsKeysToGrant = Array<KmsKeyToGrant>;
export type ListOfLakeFormationTagPolicies =
  Array<LakeFormationTagPolicyDetails>;
export type ListOfLFPermissions = Array<string>;
export type ListOfLFTags = Array<LFTag>;
export type ListOfLFTagValues = Array<string>;
export type ListOfReceivedDataGrantSummariesEntry =
  Array<ReceivedDataGrantSummariesEntry>;
export type ListOfRedshiftDataShareAssetSourceEntry =
  Array<RedshiftDataShareAssetSourceEntry>;
export type ListOfRedshiftDataShares = Array<RedshiftDataShareDetails>;
export type ListOfRevisionDestinationEntry = Array<RevisionDestinationEntry>;
export type ListOfRevisionEntry = Array<RevisionEntry>;
export type ListOfS3DataAccesses = Array<S3DataAccessDetails>;
export type ListOfSchemaChangeDetails = Array<SchemaChangeDetails>;
export type ListOfTableTagPolicyLFPermissions = Array<string>;
export interface ListReceivedDataGrantsRequest {
  MaxResults?: number;
  NextToken?: string;
  AcceptanceState?: Array<string>;
}
export interface ListReceivedDataGrantsResponse {
  DataGrantSummaries?: Array<ReceivedDataGrantSummariesEntry>;
  NextToken?: string;
}
export interface ListRevisionAssetsRequest {
  DataSetId: string;
  MaxResults?: number;
  NextToken?: string;
  RevisionId: string;
}
export interface ListRevisionAssetsResponse {
  Assets?: Array<AssetEntry>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type MapOf__string = Record<string, string>;
export type MaxResults = number;

export type Name = string;

export type NextToken = string;

export interface NotificationDetails {
  DataUpdate?: DataUpdateRequestDetails;
  Deprecation?: DeprecationRequestDetails;
  SchemaChange?: SchemaChangeRequestDetails;
}
export type NotificationType = string;

export type Origin = string;

export interface OriginDetails {
  ProductId?: string;
  DataGrantId?: string;
}
export type ProtocolType = string;

export interface ReceivedDataGrantSummariesEntry {
  Name: string;
  SenderPrincipal: string;
  ReceiverPrincipal: string;
  AcceptanceState: string;
  AcceptedAt?: Date | string;
  EndsAt?: Date | string;
  DataSetId: string;
  Id: string;
  Arn: string;
  CreatedAt: Date | string;
  UpdatedAt: Date | string;
}
export type ReceiverPrincipal = string;

export interface RedshiftDataShareAsset {
  Arn: string;
}
export interface RedshiftDataShareAssetSourceEntry {
  DataShareArn: string;
}
export interface RedshiftDataShareDetails {
  Arn: string;
  Database: string;
  Function?: string;
  Table?: string;
  Schema?: string;
  View?: string;
}
export interface RequestDetails {
  ExportAssetToSignedUrl?: ExportAssetToSignedUrlRequestDetails;
  ExportAssetsToS3?: ExportAssetsToS3RequestDetails;
  ExportRevisionsToS3?: ExportRevisionsToS3RequestDetails;
  ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlRequestDetails;
  ImportAssetsFromS3?: ImportAssetsFromS3RequestDetails;
  ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesRequestDetails;
  ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiRequestDetails;
  CreateS3DataAccessFromS3Bucket?: CreateS3DataAccessFromS3BucketRequestDetails;
  ImportAssetsFromLakeFormationTagPolicy?: ImportAssetsFromLakeFormationTagPolicyRequestDetails;
}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
  readonly ResourceType?: string;
}> {}
export type ResourceType = string;

export interface ResponseDetails {
  ExportAssetToSignedUrl?: ExportAssetToSignedUrlResponseDetails;
  ExportAssetsToS3?: ExportAssetsToS3ResponseDetails;
  ExportRevisionsToS3?: ExportRevisionsToS3ResponseDetails;
  ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlResponseDetails;
  ImportAssetsFromS3?: ImportAssetsFromS3ResponseDetails;
  ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesResponseDetails;
  ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiResponseDetails;
  CreateS3DataAccessFromS3Bucket?: CreateS3DataAccessFromS3BucketResponseDetails;
  ImportAssetsFromLakeFormationTagPolicy?: ImportAssetsFromLakeFormationTagPolicyResponseDetails;
}
export interface RevisionDestinationEntry {
  Bucket: string;
  KeyPattern?: string;
  RevisionId: string;
}
export interface RevisionEntry {
  Arn: string;
  Comment?: string;
  CreatedAt: Date | string;
  DataSetId: string;
  Finalized?: boolean;
  Id: string;
  SourceId?: string;
  UpdatedAt: Date | string;
  RevocationComment?: string;
  Revoked?: boolean;
  RevokedAt?: Date | string;
}
export interface RevisionPublished {
  DataSetId: string;
}
export interface RevokeRevisionRequest {
  DataSetId: string;
  RevisionId: string;
  RevocationComment: string;
}
export interface RevokeRevisionResponse {
  Arn?: string;
  Comment?: string;
  CreatedAt?: Date | string;
  DataSetId?: string;
  Finalized?: boolean;
  Id?: string;
  SourceId?: string;
  UpdatedAt?: Date | string;
  RevocationComment?: string;
  Revoked?: boolean;
  RevokedAt?: Date | string;
}
export type RoleArn = string;

export interface S3DataAccessAsset {
  Bucket: string;
  KeyPrefixes?: Array<string>;
  Keys?: Array<string>;
  S3AccessPointAlias?: string;
  S3AccessPointArn?: string;
  KmsKeysToGrant?: Array<KmsKeyToGrant>;
}
export interface S3DataAccessAssetSourceEntry {
  Bucket: string;
  KeyPrefixes?: Array<string>;
  Keys?: Array<string>;
  KmsKeysToGrant?: Array<KmsKeyToGrant>;
}
export interface S3DataAccessDetails {
  KeyPrefixes?: Array<string>;
  Keys?: Array<string>;
}
export interface S3SnapshotAsset {
  Size: number;
}
export interface SchemaChangeDetails {
  Name: string;
  Type: string;
  Description?: string;
}
export interface SchemaChangeRequestDetails {
  Changes?: Array<SchemaChangeDetails>;
  SchemaChangeAt: Date | string;
}
export type SchemaChangeType = string;

export interface ScopeDetails {
  LakeFormationTagPolicies?: Array<LakeFormationTagPolicyDetails>;
  RedshiftDataShares?: Array<RedshiftDataShareDetails>;
  S3DataAccesses?: Array<S3DataAccessDetails>;
}
export interface SendApiAssetRequest {
  Body?: string;
  QueryStringParameters?: Record<string, string>;
  AssetId: string;
  DataSetId: string;
  RequestHeaders?: Record<string, string>;
  Method?: string;
  Path?: string;
  RevisionId: string;
}
export interface SendApiAssetResponse {
  Body?: string;
  ResponseHeaders?: Record<string, string>;
}
export interface SendDataSetNotificationRequest {
  Scope?: ScopeDetails;
  ClientToken?: string;
  Comment?: string;
  DataSetId: string;
  Details?: NotificationDetails;
  Type: string;
}
export interface SendDataSetNotificationResponse {}
export type SenderPrincipal = string;

export type ServerSideEncryptionTypes = string;

export declare class ServiceLimitExceededException extends Data.TaggedError(
  "ServiceLimitExceededException",
)<{
  readonly LimitName?: string;
  readonly LimitValue?: number;
  readonly Message: string;
}> {}
export interface StartJobRequest {
  JobId: string;
}
export interface StartJobResponse {}
export type State = string;

export interface TableLFTagPolicy {
  Expression: Array<LFTag>;
}
export interface TableLFTagPolicyAndPermissions {
  Expression: Array<LFTag>;
  Permissions: Array<string>;
}
export type TableTagPolicyLFPermission = string;

export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
}> {}
export type Timestamp = Date | string;

export type Type = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UpdateAssetRequest {
  AssetId: string;
  DataSetId: string;
  Name: string;
  RevisionId: string;
}
export interface UpdateAssetResponse {
  Arn?: string;
  AssetDetails?: AssetDetails;
  AssetType?: string;
  CreatedAt?: Date | string;
  DataSetId?: string;
  Id?: string;
  Name?: string;
  RevisionId?: string;
  SourceId?: string;
  UpdatedAt?: Date | string;
}
export interface UpdateDataSetRequest {
  DataSetId: string;
  Description?: string;
  Name?: string;
}
export interface UpdateDataSetResponse {
  Arn?: string;
  AssetType?: string;
  CreatedAt?: Date | string;
  Description?: string;
  Id?: string;
  Name?: string;
  Origin?: string;
  OriginDetails?: OriginDetails;
  SourceId?: string;
  UpdatedAt?: Date | string;
}
export interface UpdateEventActionRequest {
  Action?: Action;
  EventActionId: string;
}
export interface UpdateEventActionResponse {
  Action?: Action;
  Arn?: string;
  CreatedAt?: Date | string;
  Event?: Event;
  Id?: string;
  UpdatedAt?: Date | string;
}
export interface UpdateRevisionRequest {
  Comment?: string;
  DataSetId: string;
  Finalized?: boolean;
  RevisionId: string;
}
export interface UpdateRevisionResponse {
  Arn?: string;
  Comment?: string;
  CreatedAt?: Date | string;
  DataSetId?: string;
  Finalized?: boolean;
  Id?: string;
  SourceId?: string;
  UpdatedAt?: Date | string;
  RevocationComment?: string;
  Revoked?: boolean;
  RevokedAt?: Date | string;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly ExceptionCause?: string;
}> {}
export declare namespace AcceptDataGrant {
  export type Input = AcceptDataGrantRequest;
  export type Output = AcceptDataGrantResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelJob {
  export type Input = CancelJobRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDataGrant {
  export type Input = CreateDataGrantRequest;
  export type Output = CreateDataGrantResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceLimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDataSet {
  export type Input = CreateDataSetRequest;
  export type Output = CreateDataSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceLimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateEventAction {
  export type Input = CreateEventActionRequest;
  export type Output = CreateEventActionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceLimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateJob {
  export type Input = CreateJobRequest;
  export type Output = CreateJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRevision {
  export type Input = CreateRevisionRequest;
  export type Output = CreateRevisionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAsset {
  export type Input = DeleteAssetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDataGrant {
  export type Input = DeleteDataGrantRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDataSet {
  export type Input = DeleteDataSetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEventAction {
  export type Input = DeleteEventActionRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRevision {
  export type Input = DeleteRevisionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAsset {
  export type Input = GetAssetRequest;
  export type Output = GetAssetResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataGrant {
  export type Input = GetDataGrantRequest;
  export type Output = GetDataGrantResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataSet {
  export type Input = GetDataSetRequest;
  export type Output = GetDataSetResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEventAction {
  export type Input = GetEventActionRequest;
  export type Output = GetEventActionResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetJob {
  export type Input = GetJobRequest;
  export type Output = GetJobResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetReceivedDataGrant {
  export type Input = GetReceivedDataGrantRequest;
  export type Output = GetReceivedDataGrantResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRevision {
  export type Input = GetRevisionRequest;
  export type Output = GetRevisionResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataGrants {
  export type Input = ListDataGrantsRequest;
  export type Output = ListDataGrantsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSetRevisions {
  export type Input = ListDataSetRevisionsRequest;
  export type Output = ListDataSetRevisionsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSets {
  export type Input = ListDataSetsRequest;
  export type Output = ListDataSetsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEventActions {
  export type Input = ListEventActionsRequest;
  export type Output = ListEventActionsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListJobs {
  export type Input = ListJobsRequest;
  export type Output = ListJobsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListReceivedDataGrants {
  export type Input = ListReceivedDataGrantsRequest;
  export type Output = ListReceivedDataGrantsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRevisionAssets {
  export type Input = ListRevisionAssetsRequest;
  export type Output = ListRevisionAssetsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = CommonAwsError;
}

export declare namespace RevokeRevision {
  export type Input = RevokeRevisionRequest;
  export type Output = RevokeRevisionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendApiAsset {
  export type Input = SendApiAssetRequest;
  export type Output = SendApiAssetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendDataSetNotification {
  export type Input = SendDataSetNotificationRequest;
  export type Output = SendDataSetNotificationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartJob {
  export type Input = StartJobRequest;
  export type Output = StartJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace UpdateAsset {
  export type Input = UpdateAssetRequest;
  export type Output = UpdateAssetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDataSet {
  export type Input = UpdateDataSetRequest;
  export type Output = UpdateDataSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEventAction {
  export type Input = UpdateEventActionRequest;
  export type Output = UpdateEventActionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRevision {
  export type Input = UpdateRevisionRequest;
  export type Output = UpdateRevisionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
