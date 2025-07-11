import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface DataExchange {
  acceptDataGrant(
    input: AcceptDataGrantRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  cancelJob(
    input: CancelJobRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createDataGrant(
    input: CreateDataGrantRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceLimitExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createDataSet(
    input: CreateDataSetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ServiceLimitExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createEventAction(
    input: CreateEventActionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ServiceLimitExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createJob(
    input: CreateJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createRevision(
    input: CreateRevisionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteAsset(
    input: DeleteAssetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteDataGrant(
    input: DeleteDataGrantRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteDataSet(
    input: DeleteDataSetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteEventAction(
    input: DeleteEventActionRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteRevision(
    input: DeleteRevisionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAsset(
    input: GetAssetRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDataGrant(
    input: GetDataGrantRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDataSet(
    input: GetDataSetRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getEventAction(
    input: GetEventActionRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getJob(
    input: GetJobRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getReceivedDataGrant(
    input: GetReceivedDataGrantRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getRevision(
    input: GetRevisionRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDataGrants(
    input: ListDataGrantsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDataSetRevisions(
    input: ListDataSetRevisionsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDataSets(
    input: ListDataSetsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listEventActions(
    input: ListEventActionsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listJobs(
    input: ListJobsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listReceivedDataGrants(
    input: ListReceivedDataGrantsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listRevisionAssets(
    input: ListRevisionAssetsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  revokeRevision(
    input: RevokeRevisionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  sendApiAsset(
    input: SendApiAssetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  sendDataSetNotification(
    input: SendDataSetNotificationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startJob(
    input: StartJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  updateAsset(
    input: UpdateAssetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateDataSet(
    input: UpdateDataSetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateEventAction(
    input: UpdateEventActionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateRevision(
    input: UpdateRevisionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
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

export type AcceptanceStateFilterValues = Array<unknown>;
export interface AcceptDataGrantRequest {
}
export interface AcceptDataGrantResponse {
}
export interface AccessDeniedException {
}
export interface Action {
}
export type ApiDescription = string;

export interface ApiGatewayApiAsset {
}
export type Arn = string;

export interface AssetDestinationEntry {
}
export interface AssetDetails {
}
export interface AssetEntry {
}
export type AssetName = string;

export interface AssetSourceEntry {
}
export type AssetType = string;

export interface AutoExportRevisionDestinationEntry {
}
export interface AutoExportRevisionToS3RequestDetails {
}
export type AwsAccountId = string;

export interface CancelJobRequest {
}
export type ClientToken = string;

export type Code = string;

export interface ConflictException {
}
export interface CreateDataGrantRequest {
}
export interface CreateDataGrantResponse {
}
export interface CreateDataSetRequest {
}
export interface CreateDataSetResponse {
}
export interface CreateEventActionRequest {
}
export interface CreateEventActionResponse {
}
export interface CreateJobRequest {
}
export interface CreateJobResponse {
}
export interface CreateRevisionRequest {
}
export interface CreateRevisionResponse {
}
export interface CreateS3DataAccessFromS3BucketRequestDetails {
}
export interface CreateS3DataAccessFromS3BucketResponseDetails {
}
export interface DatabaseLFTagPolicy {
}
export interface DatabaseLFTagPolicyAndPermissions {
}
export type DatabaseLFTagPolicyPermission = string;

export type DataGrantAcceptanceState = string;

export type DataGrantArn = string;

export type DataGrantDescription = string;

export type DataGrantId = string;

export type DataGrantName = string;

export interface DataGrantSummaryEntry {
}
export interface DataSetEntry {
}
export interface DataUpdateRequestDetails {
}
export interface DeleteAssetRequest {
}
export interface DeleteDataGrantRequest {
}
export interface DeleteDataSetRequest {
}
export interface DeleteEventActionRequest {
}
export interface DeleteRevisionRequest {
}
export interface DeprecationRequestDetails {
}
export type Description = string;

export interface Details {
}
export interface Event {
}
export interface EventActionEntry {
}
export type ExceptionCause = string;

export interface ExportAssetsToS3RequestDetails {
}
export interface ExportAssetsToS3ResponseDetails {
}
export interface ExportAssetToSignedUrlRequestDetails {
}
export interface ExportAssetToSignedUrlResponseDetails {
}
export interface ExportRevisionsToS3RequestDetails {
}
export interface ExportRevisionsToS3ResponseDetails {
}
export interface ExportServerSideEncryption {
}
export interface GetAssetRequest {
}
export interface GetAssetResponse {
}
export interface GetDataGrantRequest {
}
export interface GetDataGrantResponse {
}
export interface GetDataSetRequest {
}
export interface GetDataSetResponse {
}
export interface GetEventActionRequest {
}
export interface GetEventActionResponse {
}
export interface GetJobRequest {
}
export interface GetJobResponse {
}
export interface GetReceivedDataGrantRequest {
}
export interface GetReceivedDataGrantResponse {
}
export interface GetRevisionRequest {
}
export interface GetRevisionResponse {
}
export type GrantDistributionScope = string;

export type Id = string;

export interface ImportAssetFromApiGatewayApiRequestDetails {
}
export interface ImportAssetFromApiGatewayApiResponseDetails {
}
export interface ImportAssetFromSignedUrlJobErrorDetails {
}
export interface ImportAssetFromSignedUrlRequestDetails {
}
export interface ImportAssetFromSignedUrlResponseDetails {
}
export interface ImportAssetsFromLakeFormationTagPolicyRequestDetails {
}
export interface ImportAssetsFromLakeFormationTagPolicyResponseDetails {
}
export interface ImportAssetsFromRedshiftDataSharesRequestDetails {
}
export interface ImportAssetsFromRedshiftDataSharesResponseDetails {
}
export interface ImportAssetsFromS3RequestDetails {
}
export interface ImportAssetsFromS3ResponseDetails {
}
export interface InternalServerException {
}
export interface JobEntry {
}
export interface JobError {
}
export type JobErrorLimitName = string;

export type JobErrorResourceTypes = string;

export type KmsKeyArn = string;

export interface KmsKeyToGrant {
}
export interface LakeFormationDataPermissionAsset {
}
export interface LakeFormationDataPermissionDetails {
}
export type LakeFormationDataPermissionType = string;

export interface LakeFormationTagPolicyDetails {
}
export type LFPermission = string;

export interface LFResourceDetails {
}
export type LFResourceType = string;

export interface LFTag {
}
export interface LFTagPolicyDetails {
}
export type LimitName = string;

export interface ListDataGrantsRequest {
}
export interface ListDataGrantsResponse {
}
export interface ListDataSetRevisionsRequest {
}
export interface ListDataSetRevisionsResponse {
}
export interface ListDataSetsRequest {
}
export interface ListDataSetsResponse {
}
export interface ListEventActionsRequest {
}
export interface ListEventActionsResponse {
}
export interface ListJobsRequest {
}
export interface ListJobsResponse {
}
export type ListOf__string = Array<unknown>;
export type ListOfAssetDestinationEntry = Array<unknown>;
export type ListOfAssetEntry = Array<unknown>;
export type ListOfAssetSourceEntry = Array<unknown>;
export type ListOfDatabaseLFTagPolicyPermissions = Array<unknown>;
export type ListOfDataGrantSummaryEntry = Array<unknown>;
export type ListOfDataSetEntry = Array<unknown>;
export type ListOfEventActionEntry = Array<unknown>;
export type ListOfJobEntry = Array<unknown>;
export type ListOfJobError = Array<unknown>;
export type ListOfKmsKeysToGrant = Array<unknown>;
export type ListOfLakeFormationTagPolicies = Array<unknown>;
export type ListOfLFPermissions = Array<unknown>;
export type ListOfLFTags = Array<unknown>;
export type ListOfLFTagValues = Array<unknown>;
export type ListOfReceivedDataGrantSummariesEntry = Array<unknown>;
export type ListOfRedshiftDataShareAssetSourceEntry = Array<unknown>;
export type ListOfRedshiftDataShares = Array<unknown>;
export type ListOfRevisionDestinationEntry = Array<unknown>;
export type ListOfRevisionEntry = Array<unknown>;
export type ListOfS3DataAccesses = Array<unknown>;
export type ListOfSchemaChangeDetails = Array<unknown>;
export type ListOfTableTagPolicyLFPermissions = Array<unknown>;
export interface ListReceivedDataGrantsRequest {
}
export interface ListReceivedDataGrantsResponse {
}
export interface ListRevisionAssetsRequest {
}
export interface ListRevisionAssetsResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export type MapOf__string = Record<string, unknown>;
export type MaxResults = number;

export type Name = string;

export type NextToken = string;

export interface NotificationDetails {
}
export type NotificationType = string;

export type Origin = string;

export interface OriginDetails {
}
export type ProtocolType = string;

export interface ReceivedDataGrantSummariesEntry {
}
export type ReceiverPrincipal = string;

export interface RedshiftDataShareAsset {
}
export interface RedshiftDataShareAssetSourceEntry {
}
export interface RedshiftDataShareDetails {
}
export interface RequestDetails {
}
export interface ResourceNotFoundException {
}
export type ResourceType = string;

export interface ResponseDetails {
}
export interface RevisionDestinationEntry {
}
export interface RevisionEntry {
}
export interface RevisionPublished {
}
export interface RevokeRevisionRequest {
}
export interface RevokeRevisionResponse {
}
export type RoleArn = string;

export interface S3DataAccessAsset {
}
export interface S3DataAccessAssetSourceEntry {
}
export interface S3DataAccessDetails {
}
export interface S3SnapshotAsset {
}
export interface SchemaChangeDetails {
}
export interface SchemaChangeRequestDetails {
}
export type SchemaChangeType = string;

export interface ScopeDetails {
}
export interface SendApiAssetRequest {
}
export interface SendApiAssetResponse {
}
export interface SendDataSetNotificationRequest {
}
export interface SendDataSetNotificationResponse {
}
export type SenderPrincipal = string;

export type ServerSideEncryptionTypes = string;

export interface ServiceLimitExceededException {
}
export interface StartJobRequest {
}
export interface StartJobResponse {
}
export type State = string;

export interface TableLFTagPolicy {
}
export interface TableLFTagPolicyAndPermissions {
}
export type TableTagPolicyLFPermission = string;

export interface TagResourceRequest {
}
export interface ThrottlingException {
}
export type Timestamp = Date | string;

export type Type = string;

export interface UntagResourceRequest {
}
export interface UpdateAssetRequest {
}
export interface UpdateAssetResponse {
}
export interface UpdateDataSetRequest {
}
export interface UpdateDataSetResponse {
}
export interface UpdateEventActionRequest {
}
export interface UpdateEventActionResponse {
}
export interface UpdateRevisionRequest {
}
export interface UpdateRevisionResponse {
}
export interface ValidationException {
}
export declare namespace AcceptDataGrant {
  export type Input = AcceptDataGrantRequest;
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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

export declare namespace CreateRevision {
  export type Input = CreateRevisionRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataGrant {
  export type Input = GetDataGrantRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEventAction {
  export type Input = GetEventActionRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetJob {
  export type Input = GetJobRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetReceivedDataGrant {
  export type Input = GetReceivedDataGrantRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataGrants {
  export type Input = ListDataGrantsRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSets {
  export type Input = ListDataSetsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEventActions {
  export type Input = ListEventActionsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListJobs {
  export type Input = ListJobsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListReceivedDataGrants {
  export type Input = ListReceivedDataGrantsRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace RevokeRevision {
  export type Input = RevokeRevisionRequest;
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

export declare namespace SendApiAsset {
  export type Input = SendApiAssetRequest;
  export type Output = {};
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

export declare namespace StartJob {
  export type Input = StartJobRequest;
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

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace UpdateAsset {
  export type Input = UpdateAssetRequest;
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

export declare namespace UpdateDataSet {
  export type Input = UpdateDataSetRequest;
  export type Output = {};
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
  export type Output = {};
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

