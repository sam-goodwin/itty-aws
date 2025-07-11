import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface secretsmanager {
  batchGetSecretValue(
    input: BatchGetSecretValueRequest,
  ): Effect.Effect<
    BatchGetSecretValueResponse,
    | DecryptionFailure
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  cancelRotateSecret(
    input: CancelRotateSecretRequest,
  ): Effect.Effect<
    CancelRotateSecretResponse,
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createSecret(
    input: CreateSecretRequest,
  ): Effect.Effect<
    CreateSecretResponse,
    | DecryptionFailure
    | EncryptionFailure
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | PreconditionNotMetException
    | ResourceExistsException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    DeleteResourcePolicyResponse,
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteSecret(
    input: DeleteSecretRequest,
  ): Effect.Effect<
    DeleteSecretResponse,
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeSecret(
    input: DescribeSecretRequest,
  ): Effect.Effect<
    DescribeSecretResponse,
    | InternalServiceError
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getRandomPassword(
    input: GetRandomPasswordRequest,
  ): Effect.Effect<
    GetRandomPasswordResponse,
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyRequest,
  ): Effect.Effect<
    GetResourcePolicyResponse,
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getSecretValue(
    input: GetSecretValueRequest,
  ): Effect.Effect<
    GetSecretValueResponse,
    | DecryptionFailure
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listSecrets(
    input: ListSecretsRequest,
  ): Effect.Effect<
    ListSecretsResponse,
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError
  >;
  listSecretVersionIds(
    input: ListSecretVersionIdsRequest,
  ): Effect.Effect<
    ListSecretVersionIdsResponse,
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | MalformedPolicyDocumentException
    | PublicPolicyException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putSecretValue(
    input: PutSecretValueRequest,
  ): Effect.Effect<
    PutSecretValueResponse,
    | DecryptionFailure
    | EncryptionFailure
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  removeRegionsFromReplication(
    input: RemoveRegionsFromReplicationRequest,
  ): Effect.Effect<
    RemoveRegionsFromReplicationResponse,
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  replicateSecretToRegions(
    input: ReplicateSecretToRegionsRequest,
  ): Effect.Effect<
    ReplicateSecretToRegionsResponse,
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  restoreSecret(
    input: RestoreSecretRequest,
  ): Effect.Effect<
    RestoreSecretResponse,
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  rotateSecret(
    input: RotateSecretRequest,
  ): Effect.Effect<
    RotateSecretResponse,
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopReplicationToReplica(
    input: StopReplicationToReplicaRequest,
  ): Effect.Effect<
    StopReplicationToReplicaResponse,
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateSecret(
    input: UpdateSecretRequest,
  ): Effect.Effect<
    UpdateSecretResponse,
    | DecryptionFailure
    | EncryptionFailure
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | PreconditionNotMetException
    | ResourceExistsException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateSecretVersionStage(
    input: UpdateSecretVersionStageRequest,
  ): Effect.Effect<
    UpdateSecretVersionStageResponse,
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  validateResourcePolicy(
    input: ValidateResourcePolicyRequest,
  ): Effect.Effect<
    ValidateResourcePolicyResponse,
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | MalformedPolicyDocumentException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export type SecretsManager = secretsmanager;

export type AddReplicaRegionListType = Array<ReplicaRegionType>;
export type APIErrorListType = Array<APIErrorType>;
export interface APIErrorType {
  SecretId?: string;
  ErrorCode?: string;
  Message?: string;
}
export type AutomaticallyRotateAfterDaysType = number;

export interface BatchGetSecretValueRequest {
  SecretIdList?: Array<string>;
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface BatchGetSecretValueResponse {
  SecretValues?: Array<SecretValueEntry>;
  NextToken?: string;
  Errors?: Array<APIErrorType>;
}
export type BooleanType = boolean;

export interface CancelRotateSecretRequest {
  SecretId: string;
}
export interface CancelRotateSecretResponse {
  ARN?: string;
  Name?: string;
  VersionId?: string;
}
export type ClientRequestTokenType = string;

export type CreatedDateType = Date | string;

export interface CreateSecretRequest {
  Name: string;
  ClientRequestToken?: string;
  Description?: string;
  KmsKeyId?: string;
  SecretBinary?: Uint8Array | string;
  SecretString?: string;
  Tags?: Array<Tag>;
  AddReplicaRegions?: Array<ReplicaRegionType>;
  ForceOverwriteReplicaSecret?: boolean;
}
export interface CreateSecretResponse {
  ARN?: string;
  Name?: string;
  VersionId?: string;
  ReplicationStatus?: Array<ReplicationStatusType>;
}
export declare class DecryptionFailure extends Data.TaggedError(
  "DecryptionFailure",
)<{
  readonly Message?: string;
}> {}
export type DeletedDateType = Date | string;

export interface DeleteResourcePolicyRequest {
  SecretId: string;
}
export interface DeleteResourcePolicyResponse {
  ARN?: string;
  Name?: string;
}
export interface DeleteSecretRequest {
  SecretId: string;
  RecoveryWindowInDays?: number;
  ForceDeleteWithoutRecovery?: boolean;
}
export interface DeleteSecretResponse {
  ARN?: string;
  Name?: string;
  DeletionDate?: Date | string;
}
export type DeletionDateType = Date | string;

export interface DescribeSecretRequest {
  SecretId: string;
}
export interface DescribeSecretResponse {
  ARN?: string;
  Name?: string;
  Description?: string;
  KmsKeyId?: string;
  RotationEnabled?: boolean;
  RotationLambdaARN?: string;
  RotationRules?: RotationRulesType;
  LastRotatedDate?: Date | string;
  LastChangedDate?: Date | string;
  LastAccessedDate?: Date | string;
  DeletedDate?: Date | string;
  NextRotationDate?: Date | string;
  Tags?: Array<Tag>;
  VersionIdsToStages?: Record<string, Array<string>>;
  OwningService?: string;
  CreatedDate?: Date | string;
  PrimaryRegion?: string;
  ReplicationStatus?: Array<ReplicationStatusType>;
}
export type DescriptionType = string;

export type DurationType = string;

export declare class EncryptionFailure extends Data.TaggedError(
  "EncryptionFailure",
)<{
  readonly Message?: string;
}> {}
export type ErrorCode = string;

export type ErrorMessage = string;

export type ExcludeCharactersType = string;

export type ExcludeLowercaseType = boolean;

export type ExcludeNumbersType = boolean;

export type ExcludePunctuationType = boolean;

export type ExcludeUppercaseType = boolean;

export interface Filter {
  Key?: FilterNameStringType;
  Values?: Array<string>;
}
export type FilterNameStringType =
  | "description"
  | "name"
  | "tag_key"
  | "tag_value"
  | "primary_region"
  | "owning_service"
  | "all";
export type FiltersListType = Array<Filter>;
export type FilterValuesStringList = Array<string>;
export type FilterValueStringType = string;

export interface GetRandomPasswordRequest {
  PasswordLength?: number;
  ExcludeCharacters?: string;
  ExcludeNumbers?: boolean;
  ExcludePunctuation?: boolean;
  ExcludeUppercase?: boolean;
  ExcludeLowercase?: boolean;
  IncludeSpace?: boolean;
  RequireEachIncludedType?: boolean;
}
export interface GetRandomPasswordResponse {
  RandomPassword?: string;
}
export interface GetResourcePolicyRequest {
  SecretId: string;
}
export interface GetResourcePolicyResponse {
  ARN?: string;
  Name?: string;
  ResourcePolicy?: string;
}
export interface GetSecretValueRequest {
  SecretId: string;
  VersionId?: string;
  VersionStage?: string;
}
export interface GetSecretValueResponse {
  ARN?: string;
  Name?: string;
  VersionId?: string;
  SecretBinary?: Uint8Array | string;
  SecretString?: string;
  VersionStages?: Array<string>;
  CreatedDate?: Date | string;
}
export type IncludeSpaceType = boolean;

export declare class InternalServiceError extends Data.TaggedError(
  "InternalServiceError",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidNextTokenException extends Data.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidParameterException extends Data.TaggedError(
  "InvalidParameterException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export type KmsKeyIdListType = Array<string>;
export type KmsKeyIdType = string;

export type LastAccessedDateType = Date | string;

export type LastChangedDateType = Date | string;

export type LastRotatedDateType = Date | string;

export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListSecretsRequest {
  IncludePlannedDeletion?: boolean;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
  SortOrder?: SortOrderType;
}
export interface ListSecretsResponse {
  SecretList?: Array<SecretListEntry>;
  NextToken?: string;
}
export interface ListSecretVersionIdsRequest {
  SecretId: string;
  MaxResults?: number;
  NextToken?: string;
  IncludeDeprecated?: boolean;
}
export interface ListSecretVersionIdsResponse {
  Versions?: Array<SecretVersionsListEntry>;
  NextToken?: string;
  ARN?: string;
  Name?: string;
}
export declare class MalformedPolicyDocumentException extends Data.TaggedError(
  "MalformedPolicyDocumentException",
)<{
  readonly Message?: string;
}> {}
export type MaxResultsBatchType = number;

export type MaxResultsType = number;

export type NameType = string;

export type NextRotationDateType = Date | string;

export type NextTokenType = string;

export type NonEmptyResourcePolicyType = string;

export type OwningServiceType = string;

export type PasswordLengthType = number;

export declare class PreconditionNotMetException extends Data.TaggedError(
  "PreconditionNotMetException",
)<{
  readonly Message?: string;
}> {}
export declare class PublicPolicyException extends Data.TaggedError(
  "PublicPolicyException",
)<{
  readonly Message?: string;
}> {}
export interface PutResourcePolicyRequest {
  SecretId: string;
  ResourcePolicy: string;
  BlockPublicPolicy?: boolean;
}
export interface PutResourcePolicyResponse {
  ARN?: string;
  Name?: string;
}
export interface PutSecretValueRequest {
  SecretId: string;
  ClientRequestToken?: string;
  SecretBinary?: Uint8Array | string;
  SecretString?: string;
  VersionStages?: Array<string>;
  RotationToken?: string;
}
export interface PutSecretValueResponse {
  ARN?: string;
  Name?: string;
  VersionId?: string;
  VersionStages?: Array<string>;
}
export type RandomPasswordType = string;

export type RecoveryWindowInDaysType = number;

export type RegionType = string;

export interface RemoveRegionsFromReplicationRequest {
  SecretId: string;
  RemoveReplicaRegions: Array<string>;
}
export interface RemoveRegionsFromReplicationResponse {
  ARN?: string;
  ReplicationStatus?: Array<ReplicationStatusType>;
}
export type RemoveReplicaRegionListType = Array<string>;
export interface ReplicaRegionType {
  Region?: string;
  KmsKeyId?: string;
}
export interface ReplicateSecretToRegionsRequest {
  SecretId: string;
  AddReplicaRegions: Array<ReplicaRegionType>;
  ForceOverwriteReplicaSecret?: boolean;
}
export interface ReplicateSecretToRegionsResponse {
  ARN?: string;
  ReplicationStatus?: Array<ReplicationStatusType>;
}
export type ReplicationStatusListType = Array<ReplicationStatusType>;
export interface ReplicationStatusType {
  Region?: string;
  KmsKeyId?: string;
  Status?: StatusType;
  StatusMessage?: string;
  LastAccessedDate?: Date | string;
}
export type RequireEachIncludedTypeType = boolean;

export declare class ResourceExistsException extends Data.TaggedError(
  "ResourceExistsException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface RestoreSecretRequest {
  SecretId: string;
}
export interface RestoreSecretResponse {
  ARN?: string;
  Name?: string;
}
export interface RotateSecretRequest {
  SecretId: string;
  ClientRequestToken?: string;
  RotationLambdaARN?: string;
  RotationRules?: RotationRulesType;
  RotateImmediately?: boolean;
}
export interface RotateSecretResponse {
  ARN?: string;
  Name?: string;
  VersionId?: string;
}
export type RotationEnabledType = boolean;

export type RotationLambdaARNType = string;

export interface RotationRulesType {
  AutomaticallyAfterDays?: number;
  Duration?: string;
  ScheduleExpression?: string;
}
export type RotationTokenType = string;

export type ScheduleExpressionType = string;

export type SecretARNType = string;

export type SecretBinaryType = Uint8Array | string;

export type SecretIdListType = Array<string>;
export type SecretIdType = string;

export interface SecretListEntry {
  ARN?: string;
  Name?: string;
  Description?: string;
  KmsKeyId?: string;
  RotationEnabled?: boolean;
  RotationLambdaARN?: string;
  RotationRules?: RotationRulesType;
  LastRotatedDate?: Date | string;
  LastChangedDate?: Date | string;
  LastAccessedDate?: Date | string;
  DeletedDate?: Date | string;
  NextRotationDate?: Date | string;
  Tags?: Array<Tag>;
  SecretVersionsToStages?: Record<string, Array<string>>;
  OwningService?: string;
  CreatedDate?: Date | string;
  PrimaryRegion?: string;
}
export type SecretListType = Array<SecretListEntry>;
export type SecretNameType = string;

export type SecretStringType = string;

export interface SecretValueEntry {
  ARN?: string;
  Name?: string;
  VersionId?: string;
  SecretBinary?: Uint8Array | string;
  SecretString?: string;
  VersionStages?: Array<string>;
  CreatedDate?: Date | string;
}
export type SecretValuesType = Array<SecretValueEntry>;
export type SecretVersionIdType = string;

export interface SecretVersionsListEntry {
  VersionId?: string;
  VersionStages?: Array<string>;
  LastAccessedDate?: Date | string;
  CreatedDate?: Date | string;
  KmsKeyIds?: Array<string>;
}
export type SecretVersionsListType = Array<SecretVersionsListEntry>;
export type SecretVersionStagesType = Array<string>;
export type SecretVersionStageType = string;

export type SecretVersionsToStagesMapType = Record<string, Array<string>>;
export type SortOrderType = "asc" | "desc";
export type StatusMessageType = string;

export type StatusType = "InSync" | "Failed" | "InProgress";
export interface StopReplicationToReplicaRequest {
  SecretId: string;
}
export interface StopReplicationToReplicaResponse {
  ARN?: string;
}
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagKeyListType = Array<string>;
export type TagKeyType = string;

export type TagListType = Array<Tag>;
export interface TagResourceRequest {
  SecretId: string;
  Tags: Array<Tag>;
}
export type TagValueType = string;

export type TimestampType = Date | string;

export interface UntagResourceRequest {
  SecretId: string;
  TagKeys: Array<string>;
}
export interface UpdateSecretRequest {
  SecretId: string;
  ClientRequestToken?: string;
  Description?: string;
  KmsKeyId?: string;
  SecretBinary?: Uint8Array | string;
  SecretString?: string;
}
export interface UpdateSecretResponse {
  ARN?: string;
  Name?: string;
  VersionId?: string;
}
export interface UpdateSecretVersionStageRequest {
  SecretId: string;
  VersionStage: string;
  RemoveFromVersionId?: string;
  MoveToVersionId?: string;
}
export interface UpdateSecretVersionStageResponse {
  ARN?: string;
  Name?: string;
}
export interface ValidateResourcePolicyRequest {
  SecretId?: string;
  ResourcePolicy: string;
}
export interface ValidateResourcePolicyResponse {
  PolicyValidationPassed?: boolean;
  ValidationErrors?: Array<ValidationErrorsEntry>;
}
export interface ValidationErrorsEntry {
  CheckName?: string;
  ErrorMessage?: string;
}
export type ValidationErrorsType = Array<ValidationErrorsEntry>;
export declare namespace BatchGetSecretValue {
  export type Input = BatchGetSecretValueRequest;
  export type Output = BatchGetSecretValueResponse;
  export type Error =
    | DecryptionFailure
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CancelRotateSecret {
  export type Input = CancelRotateSecretRequest;
  export type Output = CancelRotateSecretResponse;
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateSecret {
  export type Input = CreateSecretRequest;
  export type Output = CreateSecretResponse;
  export type Error =
    | DecryptionFailure
    | EncryptionFailure
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | PreconditionNotMetException
    | ResourceExistsException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = DeleteResourcePolicyResponse;
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteSecret {
  export type Input = DeleteSecretRequest;
  export type Output = DeleteSecretResponse;
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeSecret {
  export type Input = DescribeSecretRequest;
  export type Output = DescribeSecretResponse;
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetRandomPassword {
  export type Input = GetRandomPasswordRequest;
  export type Output = GetRandomPasswordResponse;
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyRequest;
  export type Output = GetResourcePolicyResponse;
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetSecretValue {
  export type Input = GetSecretValueRequest;
  export type Output = GetSecretValueResponse;
  export type Error =
    | DecryptionFailure
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListSecrets {
  export type Input = ListSecretsRequest;
  export type Output = ListSecretsResponse;
  export type Error =
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListSecretVersionIds {
  export type Input = ListSecretVersionIdsRequest;
  export type Output = ListSecretVersionIdsResponse;
  export type Error =
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResponse;
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | MalformedPolicyDocumentException
    | PublicPolicyException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutSecretValue {
  export type Input = PutSecretValueRequest;
  export type Output = PutSecretValueResponse;
  export type Error =
    | DecryptionFailure
    | EncryptionFailure
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RemoveRegionsFromReplication {
  export type Input = RemoveRegionsFromReplicationRequest;
  export type Output = RemoveRegionsFromReplicationResponse;
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ReplicateSecretToRegions {
  export type Input = ReplicateSecretToRegionsRequest;
  export type Output = ReplicateSecretToRegionsResponse;
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RestoreSecret {
  export type Input = RestoreSecretRequest;
  export type Output = RestoreSecretResponse;
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RotateSecret {
  export type Input = RotateSecretRequest;
  export type Output = RotateSecretResponse;
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopReplicationToReplica {
  export type Input = StopReplicationToReplicaRequest;
  export type Output = StopReplicationToReplicaResponse;
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateSecret {
  export type Input = UpdateSecretRequest;
  export type Output = UpdateSecretResponse;
  export type Error =
    | DecryptionFailure
    | EncryptionFailure
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | PreconditionNotMetException
    | ResourceExistsException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateSecretVersionStage {
  export type Input = UpdateSecretVersionStageRequest;
  export type Output = UpdateSecretVersionStageResponse;
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ValidateResourcePolicy {
  export type Input = ValidateResourcePolicyRequest;
  export type Output = ValidateResourcePolicyResponse;
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | MalformedPolicyDocumentException
    | ResourceNotFoundException
    | CommonAwsError;
}
