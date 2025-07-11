import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface secretsmanager {
  batchGetSecretValue(
    input: BatchGetSecretValueRequest,
  ): Effect.Effect<
    {},
    DecryptionFailure | InternalServiceError | InvalidNextTokenException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  cancelRotateSecret(
    input: CancelRotateSecretRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  createSecret(
    input: CreateSecretRequest,
  ): Effect.Effect<
    {},
    DecryptionFailure | EncryptionFailure | InternalServiceError | InvalidParameterException | InvalidRequestException | LimitExceededException | MalformedPolicyDocumentException | PreconditionNotMetException | ResourceExistsException | ResourceNotFoundException | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  deleteSecret(
    input: DeleteSecretRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  describeSecret(
    input: DescribeSecretRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  getRandomPassword(
    input: GetRandomPasswordRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidParameterException | InvalidRequestException | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  getSecretValue(
    input: GetSecretValueRequest,
  ): Effect.Effect<
    {},
    DecryptionFailure | InternalServiceError | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  listSecretVersionIds(
    input: ListSecretVersionIdsRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidNextTokenException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  listSecrets(
    input: ListSecretsRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidNextTokenException | InvalidParameterException | InvalidRequestException | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidParameterException | InvalidRequestException | MalformedPolicyDocumentException | PublicPolicyException | ResourceNotFoundException | CommonAwsError
  >;
  putSecretValue(
    input: PutSecretValueRequest,
  ): Effect.Effect<
    {},
    DecryptionFailure | EncryptionFailure | InternalServiceError | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | CommonAwsError
  >;
  removeRegionsFromReplication(
    input: RemoveRegionsFromReplicationRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  replicateSecretToRegions(
    input: ReplicateSecretToRegionsRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  restoreSecret(
    input: RestoreSecretRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  rotateSecret(
    input: RotateSecretRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  stopReplicationToReplica(
    input: StopReplicationToReplicaRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  updateSecret(
    input: UpdateSecretRequest,
  ): Effect.Effect<
    {},
    DecryptionFailure | EncryptionFailure | InternalServiceError | InvalidParameterException | InvalidRequestException | LimitExceededException | MalformedPolicyDocumentException | PreconditionNotMetException | ResourceExistsException | ResourceNotFoundException | CommonAwsError
  >;
  updateSecretVersionStage(
    input: UpdateSecretVersionStageRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  validateResourcePolicy(
    input: ValidateResourcePolicyRequest,
  ): Effect.Effect<
    {},
    InternalServiceError | InvalidParameterException | InvalidRequestException | MalformedPolicyDocumentException | ResourceNotFoundException | CommonAwsError
  >;
}

export type SecretsManager = secretsmanager;

export type AddReplicaRegionListType = Array<unknown>;
export type APIErrorListType = Array<unknown>;
export interface APIErrorType {
}
export type AutomaticallyRotateAfterDaysType = number;

export interface BatchGetSecretValueRequest {
}
export interface BatchGetSecretValueResponse {
}
export type BooleanType = boolean;

export interface CancelRotateSecretRequest {
}
export interface CancelRotateSecretResponse {
}
export type ClientRequestTokenType = string;

export type CreatedDateType = Date | string;

export interface CreateSecretRequest {
}
export interface CreateSecretResponse {
}
export interface DecryptionFailure {
}
export type DeletedDateType = Date | string;

export interface DeleteResourcePolicyRequest {
}
export interface DeleteResourcePolicyResponse {
}
export interface DeleteSecretRequest {
}
export interface DeleteSecretResponse {
}
export type DeletionDateType = Date | string;

export interface DescribeSecretRequest {
}
export interface DescribeSecretResponse {
}
export type DescriptionType = string;

export type DurationType = string;

export interface EncryptionFailure {
}
export type ErrorCode = string;

export type ErrorMessage = string;

export type ExcludeCharactersType = string;

export type ExcludeLowercaseType = boolean;

export type ExcludeNumbersType = boolean;

export type ExcludePunctuationType = boolean;

export type ExcludeUppercaseType = boolean;

export interface Filter {
}
export type FilterNameStringType = never;
export type FiltersListType = Array<unknown>;
export type FilterValuesStringList = Array<unknown>;
export type FilterValueStringType = string;

export interface GetRandomPasswordRequest {
}
export interface GetRandomPasswordResponse {
}
export interface GetResourcePolicyRequest {
}
export interface GetResourcePolicyResponse {
}
export interface GetSecretValueRequest {
}
export interface GetSecretValueResponse {
}
export type IncludeSpaceType = boolean;

export interface InternalServiceError {
}
export interface InvalidNextTokenException {
}
export interface InvalidParameterException {
}
export interface InvalidRequestException {
}
export type KmsKeyIdListType = Array<unknown>;
export type KmsKeyIdType = string;

export type LastAccessedDateType = Date | string;

export type LastChangedDateType = Date | string;

export type LastRotatedDateType = Date | string;

export interface LimitExceededException {
}
export interface ListSecretsRequest {
}
export interface ListSecretsResponse {
}
export interface ListSecretVersionIdsRequest {
}
export interface ListSecretVersionIdsResponse {
}
export interface MalformedPolicyDocumentException {
}
export type MaxResultsBatchType = number;

export type MaxResultsType = number;

export type NameType = string;

export type NextRotationDateType = Date | string;

export type NextTokenType = string;

export type NonEmptyResourcePolicyType = string;

export type OwningServiceType = string;

export type PasswordLengthType = number;

export interface PreconditionNotMetException {
}
export interface PublicPolicyException {
}
export interface PutResourcePolicyRequest {
}
export interface PutResourcePolicyResponse {
}
export interface PutSecretValueRequest {
}
export interface PutSecretValueResponse {
}
export type RandomPasswordType = string;

export type RecoveryWindowInDaysType = number;

export type RegionType = string;

export interface RemoveRegionsFromReplicationRequest {
}
export interface RemoveRegionsFromReplicationResponse {
}
export type RemoveReplicaRegionListType = Array<unknown>;
export interface ReplicaRegionType {
}
export interface ReplicateSecretToRegionsRequest {
}
export interface ReplicateSecretToRegionsResponse {
}
export type ReplicationStatusListType = Array<unknown>;
export interface ReplicationStatusType {
}
export type RequireEachIncludedTypeType = boolean;

export interface ResourceExistsException {
}
export interface ResourceNotFoundException {
}
export interface RestoreSecretRequest {
}
export interface RestoreSecretResponse {
}
export interface RotateSecretRequest {
}
export interface RotateSecretResponse {
}
export type RotationEnabledType = boolean;

export type RotationLambdaARNType = string;

export interface RotationRulesType {
}
export type RotationTokenType = string;

export type ScheduleExpressionType = string;

export type SecretARNType = string;

export type SecretBinaryType = Uint8Array | string;

export type SecretIdListType = Array<unknown>;
export type SecretIdType = string;

export interface SecretListEntry {
}
export type SecretListType = Array<unknown>;
export type SecretNameType = string;

export type SecretStringType = string;

export interface SecretValueEntry {
}
export type SecretValuesType = Array<unknown>;
export type SecretVersionIdType = string;

export interface SecretVersionsListEntry {
}
export type SecretVersionsListType = Array<unknown>;
export type SecretVersionStagesType = Array<unknown>;
export type SecretVersionStageType = string;

export type SecretVersionsToStagesMapType = Record<string, unknown>;
export type SortOrderType = never;
export type StatusMessageType = string;

export type StatusType = never;
export interface StopReplicationToReplicaRequest {
}
export interface StopReplicationToReplicaResponse {
}
export interface Tag {
}
export type TagKeyListType = Array<unknown>;
export type TagKeyType = string;

export type TagListType = Array<unknown>;
export interface TagResourceRequest {
}
export type TagValueType = string;

export type TimestampType = Date | string;

export interface UntagResourceRequest {
}
export interface UpdateSecretRequest {
}
export interface UpdateSecretResponse {
}
export interface UpdateSecretVersionStageRequest {
}
export interface UpdateSecretVersionStageResponse {
}
export interface ValidateResourcePolicyRequest {
}
export interface ValidateResourcePolicyResponse {
}
export interface ValidationErrorsEntry {
}
export type ValidationErrorsType = Array<unknown>;
export declare namespace BatchGetSecretValue {
  export type Input = BatchGetSecretValueRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateSecret {
  export type Input = CreateSecretRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteSecret {
  export type Input = DeleteSecretRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeSecret {
  export type Input = DescribeSecretRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetRandomPassword {
  export type Input = GetRandomPasswordRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetSecretValue {
  export type Input = GetSecretValueRequest;
  export type Output = {};
  export type Error =
    | DecryptionFailure
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListSecretVersionIds {
  export type Input = ListSecretVersionIdsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListSecrets {
  export type Input = ListSecretsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ReplicateSecretToRegions {
  export type Input = ReplicateSecretToRegionsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RestoreSecret {
  export type Input = RestoreSecretRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RotateSecret {
  export type Input = RotateSecretRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopReplicationToReplica {
  export type Input = StopReplicationToReplicaRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidParameterException
    | InvalidRequestException
    | MalformedPolicyDocumentException
    | ResourceNotFoundException
    | CommonAwsError;
}

