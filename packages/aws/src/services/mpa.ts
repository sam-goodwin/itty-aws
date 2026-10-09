import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "MPA",
  serviceShapeName: "AWSFluffyCoreService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "mpa" });
const ver = /*@__PURE__*/ T.ServiceVersion("2022-07-26");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true) {
          return e(
            `https://mpa-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(`https://mpa.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()(
    "InvalidParameterException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type SessionArn = string;
export interface CancelSessionRequest {
  SessionArn: string;
}
export interface CancelSessionResponse {}
export type Token = string;
export interface MofNApprovalStrategy {
  MinApprovalsRequired: number;
}
export type ApprovalStrategy = { MofN: MofNApprovalStrategy };
export type IdentityId = string;
export interface ApprovalTeamRequestApprover {
  PrimaryIdentityId: string;
  PrimaryIdentitySourceArn: string;
}
export type ApprovalTeamRequestApprovers = ApprovalTeamRequestApprover[];
export type Description = string | redacted.Redacted<string>;
export type QualifiedPolicyArn = string;
export interface PolicyReference {
  PolicyArn: string;
}
export type PoliciesReferences = PolicyReference[];
export type ApprovalTeamName = string;
export type TagKey = string | redacted.Redacted<string>;
export type TagValue = string | redacted.Redacted<string>;
export type Tags = { [key: string]: string | redacted.Redacted<string> | undefined };
export interface CreateApprovalTeamRequest {
  ClientToken?: string;
  ApprovalStrategy: ApprovalStrategy;
  Approvers: ApprovalTeamRequestApprover[];
  Description: string | redacted.Redacted<string>;
  Policies: PolicyReference[];
  Name: string;
  Tags?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
export type IsoTimestamp = Date;
export type ApprovalTeamArn = string;
export interface CreateApprovalTeamResponse {
  CreationTime?: Date;
  Arn?: string;
  Name?: string;
  VersionId?: string;
}
export type IdcInstanceArn = string;
export interface IamIdentityCenter {
  InstanceArn: string;
  Region: string;
}
export interface IdentitySourceParameters {
  IamIdentityCenter?: IamIdentityCenter;
}
export interface CreateIdentitySourceRequest {
  IdentitySourceParameters: IdentitySourceParameters;
  ClientToken?: string;
  Tags?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
export type IdentitySourceType = "IAM_IDENTITY_CENTER" | (string & {});
export interface CreateIdentitySourceResponse {
  IdentitySourceType?: IdentitySourceType;
  IdentitySourceArn?: string;
  CreationTime?: Date;
}
export interface DeleteIdentitySourceRequest {
  IdentitySourceArn: string;
}
export interface DeleteIdentitySourceResponse {}
export interface DeleteInactiveApprovalTeamVersionRequest {
  Arn: string;
  VersionId: string;
}
export interface DeleteInactiveApprovalTeamVersionResponse {}
export interface GetApprovalTeamRequest {
  Arn: string;
}
export type ApprovalStrategyResponse = { MofN: MofNApprovalStrategy };
export type ParticipantId = string;
export type IdentityStatus = "PENDING" | "ACCEPTED" | "REJECTED" | "INVALID" | (string & {});
export type ApproverLastActivity =
  | "VOTED"
  | "BASELINED"
  | "RESPONDED_TO_INVITATION"
  | (string & {});
export type MfaType = "EMAIL_OTP" | (string & {});
export type MfaSyncStatus = "IN_SYNC" | "OUT_OF_SYNC" | (string & {});
export interface MfaMethod {
  Type: MfaType;
  SyncStatus: MfaSyncStatus;
}
export type MfaMethods = MfaMethod[];
export interface GetApprovalTeamResponseApprover {
  ApproverId?: string;
  ResponseTime?: Date;
  PrimaryIdentityId?: string;
  PrimaryIdentitySourceArn?: string;
  PrimaryIdentityStatus?: IdentityStatus;
  LastActivity?: ApproverLastActivity;
  LastActivityTime?: Date;
  PendingBaselineSessionArn?: string;
  MfaMethods?: MfaMethod[];
}
export type GetApprovalTeamResponseApprovers = GetApprovalTeamResponseApprover[];
export type ApprovalTeamStatus = "ACTIVE" | "INACTIVE" | "DELETING" | "PENDING" | (string & {});
export type ApprovalTeamStatusCode =
  | "VALIDATING"
  | "PENDING_ACTIVATION"
  | "FAILED_VALIDATION"
  | "FAILED_ACTIVATION"
  | "UPDATE_PENDING_APPROVAL"
  | "UPDATE_PENDING_ACTIVATION"
  | "UPDATE_FAILED_APPROVAL"
  | "UPDATE_FAILED_ACTIVATION"
  | "UPDATE_FAILED_VALIDATION"
  | "DELETE_PENDING_APPROVAL"
  | "DELETE_FAILED_APPROVAL"
  | "DELETE_FAILED_VALIDATION"
  | (string & {});
export type Message = string;
export interface PendingUpdate {
  VersionId?: string;
  Description?: string;
  ApprovalStrategy?: ApprovalStrategyResponse;
  NumberOfApprovers?: number;
  Status?: ApprovalTeamStatus;
  StatusCode?: ApprovalTeamStatusCode;
  StatusMessage?: string;
  Approvers?: GetApprovalTeamResponseApprover[];
  UpdateInitiationTime?: Date;
}
export interface GetApprovalTeamResponse {
  CreationTime?: Date;
  ApprovalStrategy?: ApprovalStrategyResponse;
  NumberOfApprovers?: number;
  Approvers?: GetApprovalTeamResponseApprover[];
  Arn?: string;
  Description?: string | redacted.Redacted<string>;
  Name?: string;
  Status?: ApprovalTeamStatus;
  StatusCode?: ApprovalTeamStatusCode;
  StatusMessage?: string;
  UpdateSessionArn?: string;
  VersionId?: string;
  Policies?: PolicyReference[];
  LastUpdateTime?: Date;
  PendingUpdate?: PendingUpdate;
}
export interface GetIdentitySourceRequest {
  IdentitySourceArn: string;
}
export interface IamIdentityCenterForGet {
  InstanceArn?: string;
  ApprovalPortalUrl?: string;
  Region?: string;
}
export type IdentitySourceParametersForGet = { IamIdentityCenter: IamIdentityCenterForGet };
export type IdentitySourceStatus = "CREATING" | "ACTIVE" | "DELETING" | "ERROR" | (string & {});
export type IdentitySourceStatusCode =
  | "ACCESS_DENIED"
  | "DELETION_FAILED"
  | "IDC_INSTANCE_NOT_FOUND"
  | "IDC_INSTANCE_NOT_VALID"
  | (string & {});
export interface GetIdentitySourceResponse {
  IdentitySourceType?: IdentitySourceType;
  IdentitySourceParameters?: IdentitySourceParametersForGet;
  IdentitySourceArn?: string;
  CreationTime?: Date;
  Status?: IdentitySourceStatus;
  StatusCode?: IdentitySourceStatusCode;
  StatusMessage?: string;
}
export interface GetPolicyVersionRequest {
  PolicyVersionArn: string;
}
export type UnqualifiedPolicyArn = string;
export type PolicyVersionId = number;
export type PolicyType = "AWS_MANAGED" | "AWS_RAM" | (string & {});
export type PolicyName = string;
export type PolicyStatus = "ATTACHABLE" | "DEPRECATED" | (string & {});
export type PolicyDocument = string | redacted.Redacted<string>;
export interface PolicyVersion {
  Arn: string;
  PolicyArn: string;
  VersionId: number;
  PolicyType: PolicyType;
  IsDefault: boolean;
  Name: string;
  Status: PolicyStatus;
  CreationTime: Date;
  LastUpdatedTime: Date;
  Document: string | redacted.Redacted<string>;
}
export interface GetPolicyVersionResponse {
  PolicyVersion: PolicyVersion;
}
export interface GetResourcePolicyRequest {
  ResourceArn: string;
  PolicyName: string;
  PolicyType: PolicyType;
}
export interface GetResourcePolicyResponse {
  ResourceArn: string;
  PolicyType: PolicyType;
  PolicyVersionArn?: string;
  PolicyName: string;
  PolicyDocument: string | redacted.Redacted<string>;
}
export interface GetSessionRequest {
  SessionArn: string;
}
export type SessionKey = string | redacted.Redacted<string>;
export type SessionValue = string | redacted.Redacted<string>;
export type SessionMetadata = { [key: string]: string | redacted.Redacted<string> | undefined };
export type SessionStatus =
  | "PENDING"
  | "CANCELLED"
  | "APPROVED"
  | "FAILED"
  | "CREATING"
  | (string & {});
export type SessionStatusCode =
  | "REJECTED"
  | "EXPIRED"
  | "CONFIGURATION_CHANGED"
  | "ALL_APPROVERS_IN_SESSION"
  | (string & {});
export type SessionExecutionStatus = "EXECUTED" | "FAILED" | "PENDING" | (string & {});
export type ActionName = string;
export type ServicePrincipal = string;
export type AccountId = string;
export type Region = string;
export type RequesterComment = string | redacted.Redacted<string>;
export type ActionCompletionStrategy = "AUTO_COMPLETION_UPON_APPROVAL" | (string & {});
export type SessionResponse = "APPROVED" | "REJECTED" | "NO_RESPONSE" | (string & {});
export interface GetSessionResponseApproverResponse {
  ApproverId?: string;
  IdentitySourceArn?: string;
  IdentityId?: string;
  Response?: SessionResponse;
  ResponseTime?: Date;
}
export type GetSessionResponseApproverResponses = GetSessionResponseApproverResponse[];
export type AdditionalSecurityRequirement = "APPROVER_VERIFICATION_REQUIRED" | (string & {});
export type AdditionalSecurityRequirements = AdditionalSecurityRequirement[];
export interface GetSessionResponse {
  SessionArn?: string;
  ApprovalTeamArn?: string;
  ApprovalTeamName?: string;
  ProtectedResourceArn?: string;
  ApprovalStrategy?: ApprovalStrategyResponse;
  NumberOfApprovers?: number;
  InitiationTime?: Date;
  ExpirationTime?: Date;
  CompletionTime?: Date;
  Description?: string | redacted.Redacted<string>;
  Metadata?: { [key: string]: string | redacted.Redacted<string> | undefined };
  Status?: SessionStatus;
  StatusCode?: SessionStatusCode;
  StatusMessage?: string;
  ExecutionStatus?: SessionExecutionStatus;
  ActionName?: string;
  RequesterServicePrincipal?: string;
  RequesterPrincipalArn?: string;
  RequesterAccountId?: string;
  RequesterRegion?: string;
  RequesterComment?: string | redacted.Redacted<string>;
  ActionCompletionStrategy?: ActionCompletionStrategy;
  ApproverResponses?: GetSessionResponseApproverResponse[];
  AdditionalSecurityRequirements?: AdditionalSecurityRequirement[];
}
export type MaxResults = number;
export interface ListApprovalTeamsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListApprovalTeamsResponseApprovalTeam {
  CreationTime?: Date;
  ApprovalStrategy?: ApprovalStrategyResponse;
  NumberOfApprovers?: number;
  Arn?: string;
  Name?: string;
  Description?: string | redacted.Redacted<string>;
  Status?: ApprovalTeamStatus;
  StatusCode?: ApprovalTeamStatusCode;
  StatusMessage?: string;
}
export type ListApprovalTeamsResponseApprovalTeams = ListApprovalTeamsResponseApprovalTeam[];
export interface ListApprovalTeamsResponse {
  NextToken?: string;
  ApprovalTeams?: ListApprovalTeamsResponseApprovalTeam[];
}
export interface ListIdentitySourcesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface IamIdentityCenterForList {
  InstanceArn?: string;
  ApprovalPortalUrl?: string;
  Region?: string;
}
export type IdentitySourceParametersForList = { IamIdentityCenter: IamIdentityCenterForList };
export interface IdentitySourceForList {
  IdentitySourceType?: IdentitySourceType;
  IdentitySourceParameters?: IdentitySourceParametersForList;
  IdentitySourceArn?: string;
  CreationTime?: Date;
  Status?: IdentitySourceStatus;
  StatusCode?: IdentitySourceStatusCode;
  StatusMessage?: string;
}
export type IdentitySources = IdentitySourceForList[];
export interface ListIdentitySourcesResponse {
  NextToken?: string;
  IdentitySources?: IdentitySourceForList[];
}
export interface ListPoliciesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface Policy {
  Arn: string;
  DefaultVersion: number;
  PolicyType: PolicyType;
  Name: string;
}
export type Policies = Policy[];
export interface ListPoliciesResponse {
  NextToken?: string;
  Policies?: Policy[];
}
export interface ListPolicyVersionsRequest {
  MaxResults?: number;
  NextToken?: string;
  PolicyArn: string;
}
export interface PolicyVersionSummary {
  Arn: string;
  PolicyArn: string;
  VersionId: number;
  PolicyType: PolicyType;
  IsDefault: boolean;
  Name: string;
  Status: PolicyStatus;
  CreationTime: Date;
  LastUpdatedTime: Date;
}
export type PolicyVersions = PolicyVersionSummary[];
export interface ListPolicyVersionsResponse {
  NextToken?: string;
  PolicyVersions?: PolicyVersionSummary[];
}
export interface ListResourcePoliciesRequest {
  ResourceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListResourcePoliciesResponseResourcePolicy {
  PolicyArn?: string;
  PolicyType?: PolicyType;
  PolicyName?: string;
}
export type ListResourcePoliciesResponseResourcePolicies =
  ListResourcePoliciesResponseResourcePolicy[];
export interface ListResourcePoliciesResponse {
  NextToken?: string;
  ResourcePolicies?: ListResourcePoliciesResponseResourcePolicy[];
}
export type FilterField =
  | "ActionName"
  | "ApprovalTeamName"
  | "VotingTime"
  | "Vote"
  | "SessionStatus"
  | "InitiationTime"
  | (string & {});
export type Operator =
  | "EQ"
  | "NE"
  | "GT"
  | "LT"
  | "GTE"
  | "LTE"
  | "CONTAINS"
  | "NOT_CONTAINS"
  | "BETWEEN"
  | (string & {});
export interface Filter {
  FieldName?: FilterField;
  Operator?: Operator;
  Value?: string;
}
export type Filters = Filter[];
export interface ListSessionsRequest {
  ApprovalTeamArn: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Filter[];
}
export interface ListSessionsResponseSession {
  SessionArn?: string;
  ApprovalTeamName?: string;
  ApprovalTeamArn?: string;
  InitiationTime?: Date;
  ExpirationTime?: Date;
  CompletionTime?: Date;
  Description?: string | redacted.Redacted<string>;
  ActionName?: string;
  ProtectedResourceArn?: string;
  RequesterServicePrincipal?: string;
  RequesterPrincipalArn?: string;
  RequesterRegion?: string;
  RequesterAccountId?: string;
  Status?: SessionStatus;
  StatusCode?: SessionStatusCode;
  StatusMessage?: string;
  ActionCompletionStrategy?: ActionCompletionStrategy;
  AdditionalSecurityRequirements?: AdditionalSecurityRequirement[];
}
export type ListSessionsResponseSessions = ListSessionsResponseSession[];
export interface ListSessionsResponse {
  NextToken?: string;
  Sessions?: ListSessionsResponseSession[];
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
export interface StartActiveApprovalTeamDeletionRequest {
  PendingWindowDays?: number;
  Arn: string;
}
export interface StartActiveApprovalTeamDeletionResponse {
  DeletionCompletionTime?: Date;
  DeletionStartTime?: Date;
}
export type StartApprovalTeamBaselineApproverIds = string[];
export interface StartApprovalTeamBaselineRequest {
  Arn: string;
  ApproverIds?: string[];
}
export interface StartApprovalTeamBaselineResponse {
  BaselineSessionArn?: string;
}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | redacted.Redacted<string> | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = (string | redacted.Redacted<string>)[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: (string | redacted.Redacted<string>)[];
}
export interface UntagResourceResponse {}
export type UpdateAction = "SYNCHRONIZE_MFA_DEVICES" | (string & {});
export type UpdateActions = UpdateAction[];
export interface UpdateApprovalTeamRequest {
  ApprovalStrategy?: ApprovalStrategy;
  Approvers?: ApprovalTeamRequestApprover[];
  Description?: string | redacted.Redacted<string>;
  Arn: string;
  UpdateActions?: UpdateAction[];
}
export interface UpdateApprovalTeamResponse {
  VersionId?: string;
}
export type CancelSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels an approval session. For more information, see Session in the *Multi-party approval User Guide*.
 */
export const cancelSession: API.OperationMethod<
  CancelSessionRequest,
  CancelSessionResponse,
  CancelSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<CancelSessionRequest>,
  output: __S(1) as any as S.Schema<CancelSessionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelSession",
}));

export type CreateApprovalTeamError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new approval team. For more information, see Approval team in the *Multi-party approval User Guide*.
 */
export const createApprovalTeam: API.OperationMethod<
  CreateApprovalTeamRequest,
  CreateApprovalTeamResponse,
  CreateApprovalTeamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<CreateApprovalTeamRequest>,
  output: __S(10) as any as S.Schema<CreateApprovalTeamResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApprovalTeam",
}));

export type CreateIdentitySourceError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new identity source. For more information, see Identity Source in the *Multi-party approval User Guide*.
 */
export const createIdentitySource: API.OperationMethod<
  CreateIdentitySourceRequest,
  CreateIdentitySourceResponse,
  CreateIdentitySourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13) as any as S.Schema<CreateIdentitySourceRequest>,
  output: __S(14) as any as S.Schema<CreateIdentitySourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIdentitySource",
}));

export type DeleteIdentitySourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an identity source. For more information, see Identity Source in the *Multi-party approval User Guide*.
 */
export const deleteIdentitySource: API.OperationMethod<
  DeleteIdentitySourceRequest,
  DeleteIdentitySourceResponse,
  DeleteIdentitySourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15) as any as S.Schema<DeleteIdentitySourceRequest>,
  output: __S(1) as any as S.Schema<DeleteIdentitySourceResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIdentitySource",
}));

export type DeleteInactiveApprovalTeamVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an inactive approval team. For more information, see Team health in the *Multi-party approval User Guide*.
 *
 * You can also use this operation to delete a team draft. For more information, see Interacting with drafts in the *Multi-party approval User Guide*.
 */
export const deleteInactiveApprovalTeamVersion: API.OperationMethod<
  DeleteInactiveApprovalTeamVersionRequest,
  DeleteInactiveApprovalTeamVersionResponse,
  DeleteInactiveApprovalTeamVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16) as any as S.Schema<DeleteInactiveApprovalTeamVersionRequest>,
  output: __S(17) as any as S.Schema<DeleteInactiveApprovalTeamVersionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInactiveApprovalTeamVersion",
}));

export type GetApprovalTeamError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns details for an approval team.
 */
export const getApprovalTeam: API.OperationMethod<
  GetApprovalTeamRequest,
  GetApprovalTeamResponse,
  GetApprovalTeamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18) as any as S.Schema<GetApprovalTeamRequest>,
  output: __S(24) as any as S.Schema<GetApprovalTeamResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApprovalTeam",
}));

export type GetIdentitySourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns details for an identity source. For more information, see Identity Source in the *Multi-party approval User Guide*.
 */
export const getIdentitySource: API.OperationMethod<
  GetIdentitySourceRequest,
  GetIdentitySourceResponse,
  GetIdentitySourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25) as any as S.Schema<GetIdentitySourceRequest>,
  output: __S(28) as any as S.Schema<GetIdentitySourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdentitySource",
}));

export type GetPolicyVersionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns details for the version of a policy. Policies define the permissions for team resources.
 */
export const getPolicyVersion: API.OperationMethod<
  GetPolicyVersionRequest,
  GetPolicyVersionResponse,
  GetPolicyVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29) as any as S.Schema<GetPolicyVersionRequest>,
  output: __S(31) as any as S.Schema<GetPolicyVersionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicyVersion",
}));

export type GetResourcePolicyError =
  | AccessDeniedException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns details about a policy for a resource.
 */
export const getResourcePolicy: API.OperationMethod<
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32) as any as S.Schema<GetResourcePolicyRequest>,
  output: __S(33) as any as S.Schema<GetResourcePolicyResponse>,
  errors: [
    AccessDeniedException,
    InvalidParameterException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePolicy",
}));

export type GetSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns details for an approval session. For more information, see Session in the *Multi-party approval User Guide*.
 */
export const getSession: API.OperationMethod<
  GetSessionRequest,
  GetSessionResponse,
  GetSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34) as any as S.Schema<GetSessionRequest>,
  output: __S(38) as any as S.Schema<GetSessionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSession",
}));

export type ListApprovalTeamsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of approval teams.
 */
export const listApprovalTeams: API.PaginatedOperationMethod<
  ListApprovalTeamsRequest,
  ListApprovalTeamsResponse,
  ListApprovalTeamsError,
  Credentials | HttpClient.HttpClient,
  ListApprovalTeamsResponseApprovalTeam
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(39) as any as S.Schema<ListApprovalTeamsRequest>,
  output: __S(42) as any as S.Schema<ListApprovalTeamsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApprovalTeams",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ApprovalTeams",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListIdentitySourcesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of identity sources. For more information, see Identity Source in the *Multi-party approval User Guide*.
 */
export const listIdentitySources: API.PaginatedOperationMethod<
  ListIdentitySourcesRequest,
  ListIdentitySourcesResponse,
  ListIdentitySourcesError,
  Credentials | HttpClient.HttpClient,
  IdentitySourceForList
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(43) as any as S.Schema<ListIdentitySourcesRequest>,
  output: __S(46) as any as S.Schema<ListIdentitySourcesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIdentitySources",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "IdentitySources",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPoliciesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of policies. Policies define the permissions for team resources.
 */
export const listPolicies: API.PaginatedOperationMethod<
  ListPoliciesRequest,
  ListPoliciesResponse,
  ListPoliciesError,
  Credentials | HttpClient.HttpClient,
  Policy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(47) as any as S.Schema<ListPoliciesRequest>,
  output: __S(50) as any as S.Schema<ListPoliciesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicies",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Policies",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPolicyVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the versions for policies. Policies define the permissions for team resources.
 */
export const listPolicyVersions: API.PaginatedOperationMethod<
  ListPolicyVersionsRequest,
  ListPolicyVersionsResponse,
  ListPolicyVersionsError,
  Credentials | HttpClient.HttpClient,
  PolicyVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(51) as any as S.Schema<ListPolicyVersionsRequest>,
  output: __S(54) as any as S.Schema<ListPolicyVersionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicyVersions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PolicyVersions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListResourcePoliciesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of policies for a resource.
 */
export const listResourcePolicies: API.PaginatedOperationMethod<
  ListResourcePoliciesRequest,
  ListResourcePoliciesResponse,
  ListResourcePoliciesError,
  Credentials | HttpClient.HttpClient,
  ListResourcePoliciesResponseResourcePolicy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(55) as any as S.Schema<ListResourcePoliciesRequest>,
  output: __S(58) as any as S.Schema<ListResourcePoliciesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourcePolicies",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ResourcePolicies",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSessionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of approval sessions. For more information, see Session in the *Multi-party approval User Guide*.
 */
export const listSessions: API.PaginatedOperationMethod<
  ListSessionsRequest,
  ListSessionsResponse,
  ListSessionsError,
  Credentials | HttpClient.HttpClient,
  ListSessionsResponseSession
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(61) as any as S.Schema<ListSessionsRequest>,
  output: __S(64) as any as S.Schema<ListSessionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSessions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Sessions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the tags for a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(66) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type StartActiveApprovalTeamDeletionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts the deletion process for an active approval team.
 *
 * **Deletions require team approval**
 *
 * Requests to delete an active team must be approved by the team.
 */
export const startActiveApprovalTeamDeletion: API.OperationMethod<
  StartActiveApprovalTeamDeletionRequest,
  StartActiveApprovalTeamDeletionResponse,
  StartActiveApprovalTeamDeletionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67) as any as S.Schema<StartActiveApprovalTeamDeletionRequest>,
  output: __S(68) as any as S.Schema<StartActiveApprovalTeamDeletionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartActiveApprovalTeamDeletion",
}));

export type StartApprovalTeamBaselineError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a baseline session for specified approvers on an `ACTIVE` approval team.
 */
export const startApprovalTeamBaseline: API.OperationMethod<
  StartApprovalTeamBaselineRequest,
  StartApprovalTeamBaselineResponse,
  StartApprovalTeamBaselineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70) as any as S.Schema<StartApprovalTeamBaselineRequest>,
  output: __S(71) as any as S.Schema<StartApprovalTeamBaselineResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartApprovalTeamBaseline",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | TooManyTagsException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates a resource tag. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72) as any as S.Schema<TagResourceRequest>,
  output: __S(1) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    TooManyTagsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a resource tag. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74) as any as S.Schema<UntagResourceRequest>,
  output: __S(1) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateApprovalTeamError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an approval team. You can request to update the team description, approval threshold, and approvers in the team.
 *
 * **Updates require team approval**
 *
 * Updates to an active team must be approved by the team.
 */
export const updateApprovalTeam: API.OperationMethod<
  UpdateApprovalTeamRequest,
  UpdateApprovalTeamResponse,
  UpdateApprovalTeamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75) as any as S.Schema<UpdateApprovalTeamRequest>,
  output: __S(76) as any as S.Schema<UpdateApprovalTeamResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApprovalTeam",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SessionArn: S.String.pipe(T.HttpLabel("SessionArn")) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/sessions/{SessionArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelSessionRequest" });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CancelSessionResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ MinApprovalsRequired: S.Number })).annotate({
        identifier: "MofNApprovalStrategy",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ MofN: __S(2) })]);
    case 4:
      return S.suspend(() =>
        S.Struct({ PrimaryIdentityId: S.String, PrimaryIdentitySourceArn: S.String }),
      ).annotate({
        identifier: "ApprovalTeamRequestApprover",
      });
    case 5:
      return S.Array(__S(4));
    case 6:
      return S.suspend(() => S.Struct({ PolicyArn: S.String })).annotate({
        identifier: "PolicyReference",
      });
    case 7:
      return S.Array(__S(6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ SensitiveString.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ApprovalStrategy: __S(3),
          Approvers: __S(5),
          Description: SensitiveString,
          Policies: __S(7),
          Name: S.String,
          Tags: S.optional(__S(8)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/approval-teams" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateApprovalTeamRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CreationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          VersionId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateApprovalTeamResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ InstanceArn: S.String, Region: S.String })).annotate({
        identifier: "IamIdentityCenter",
      });
    case 4:
      return S.suspend(() => S.Struct({ IamIdentityCenter: S.optional(__S(11)) })).annotate({
        identifier: "IdentitySourceParameters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          IdentitySourceParameters: __S(12),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(8)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/identity-sources" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateIdentitySourceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          IdentitySourceType: S.optional(S.String),
          IdentitySourceArn: S.optional(S.String),
          CreationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "CreateIdentitySourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ IdentitySourceArn: S.String.pipe(T.HttpLabel("IdentitySourceArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/identity-sources/{IdentitySourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteIdentitySourceRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String.pipe(T.HttpLabel("Arn")),
          VersionId: S.String.pipe(T.HttpLabel("VersionId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/approval-teams/{Arn}/{VersionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteInactiveApprovalTeamVersionRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteInactiveApprovalTeamVersionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/approval-teams/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetApprovalTeamRequest" });
    case 3:
      return S.suspend(() => S.Struct({ Type: S.String, SyncStatus: S.String })).annotate({
        identifier: "MfaMethod",
      });
    case 4:
      return S.Array(__S(19));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApproverId: S.optional(S.String),
          ResponseTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          PrimaryIdentityId: S.optional(S.String),
          PrimaryIdentitySourceArn: S.optional(S.String),
          PrimaryIdentityStatus: S.optional(S.String),
          LastActivity: S.optional(S.String),
          LastActivityTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          PendingBaselineSessionArn: S.optional(S.String),
          MfaMethods: S.optional(__S(20)),
        }),
      ).annotate({
        identifier: "GetApprovalTeamResponseApprover",
      });
    case 6:
      return S.Array(__S(21));
    case 7:
      return S.suspend(() =>
        S.Struct({
          VersionId: S.optional(S.String),
          Description: S.optional(S.String),
          ApprovalStrategy: S.optional(__S(3)),
          NumberOfApprovers: S.optional(S.Number),
          Status: S.optional(S.String),
          StatusCode: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          Approvers: S.optional(__S(22)),
          UpdateInitiationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "PendingUpdate" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CreationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ApprovalStrategy: S.optional(__S(3)),
          NumberOfApprovers: S.optional(S.Number),
          Approvers: S.optional(__S(22)),
          Arn: S.optional(S.String),
          Description: S.optional(SensitiveString),
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          StatusCode: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          UpdateSessionArn: S.optional(S.String),
          VersionId: S.optional(S.String),
          Policies: S.optional(__S(7)),
          LastUpdateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          PendingUpdate: S.optional(__S(23)),
        }),
      ).annotate({ identifier: "GetApprovalTeamResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ IdentitySourceArn: S.String.pipe(T.HttpLabel("IdentitySourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/identity-sources/{IdentitySourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetIdentitySourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.optional(S.String),
          ApprovalPortalUrl: S.optional(S.String),
          Region: S.optional(S.String),
        }),
      ).annotate({ identifier: "IamIdentityCenterForGet" });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ IamIdentityCenter: __S(26) })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          IdentitySourceType: S.optional(S.String),
          IdentitySourceParameters: S.optional(__S(27)),
          IdentitySourceArn: S.optional(S.String),
          CreationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Status: S.optional(S.String),
          StatusCode: S.optional(S.String),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetIdentitySourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ PolicyVersionArn: S.String.pipe(T.HttpLabel("PolicyVersionArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/policy-versions/{PolicyVersionArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPolicyVersionRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          PolicyArn: S.String,
          VersionId: S.Number,
          PolicyType: S.String,
          IsDefault: S.Boolean,
          Name: S.String,
          Status: S.String,
          CreationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          LastUpdatedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          Document: SensitiveString,
        }),
      ).annotate({ identifier: "PolicyVersion" });
    case 7:
      return S.suspend(() => S.Struct({ PolicyVersion: __S(30) })).annotate({
        identifier: "GetPolicyVersionResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, PolicyName: S.String, PolicyType: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetResourcePolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetResourcePolicyRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          PolicyType: S.String,
          PolicyVersionArn: S.optional(S.String),
          PolicyName: S.String,
          PolicyDocument: SensitiveString,
        }),
      ).annotate({
        identifier: "GetResourcePolicyResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ SessionArn: S.String.pipe(T.HttpLabel("SessionArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sessions/{SessionArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSessionRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApproverId: S.optional(S.String),
          IdentitySourceArn: S.optional(S.String),
          IdentityId: S.optional(S.String),
          Response: S.optional(S.String),
          ResponseTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "GetSessionResponseApproverResponse",
      });
    case 4:
      return S.Array(__S(35));
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          SessionArn: S.optional(S.String),
          ApprovalTeamArn: S.optional(S.String),
          ApprovalTeamName: S.optional(S.String),
          ProtectedResourceArn: S.optional(S.String),
          ApprovalStrategy: S.optional(__S(3)),
          NumberOfApprovers: S.optional(S.Number),
          InitiationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ExpirationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CompletionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Description: S.optional(SensitiveString),
          Metadata: S.optional(__S(8)),
          Status: S.optional(S.String),
          StatusCode: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          ExecutionStatus: S.optional(S.String),
          ActionName: S.optional(S.String),
          RequesterServicePrincipal: S.optional(S.String),
          RequesterPrincipalArn: S.optional(S.String),
          RequesterAccountId: S.optional(S.String),
          RequesterRegion: S.optional(S.String),
          RequesterComment: S.optional(SensitiveString),
          ActionCompletionStrategy: S.optional(S.String),
          ApproverResponses: S.optional(__S(36)),
          AdditionalSecurityRequirements: S.optional(__S(37)),
        }),
      ).annotate({ identifier: "GetSessionResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/approval-teams/?List" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListApprovalTeamsRequest" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CreationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ApprovalStrategy: S.optional(__S(3)),
          NumberOfApprovers: S.optional(S.Number),
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(SensitiveString),
          Status: S.optional(S.String),
          StatusCode: S.optional(S.String),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListApprovalTeamsResponseApprovalTeam",
      });
    case 1:
      return S.Array(__S(40));
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          ApprovalTeams: S.optional(__S(41)),
        }),
      ).annotate({
        identifier: "ListApprovalTeamsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identity-sources/?List" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListIdentitySourcesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          IdentitySourceType: S.optional(S.String),
          IdentitySourceParameters: S.optional(__S(27)),
          IdentitySourceArn: S.optional(S.String),
          CreationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Status: S.optional(S.String),
          StatusCode: S.optional(S.String),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "IdentitySourceForList" });
    case 5:
      return S.Array(__S(44));
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), IdentitySources: S.optional(__S(45)) }),
      ).annotate({
        identifier: "ListIdentitySourcesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/policies/?List" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListPoliciesRequest" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          DefaultVersion: S.Number,
          PolicyType: S.String,
          Name: S.String,
        }),
      ).annotate({ identifier: "Policy" });
    case 1:
      return S.Array(__S(48));
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Policies: S.optional(__S(49)) }),
      ).annotate({ identifier: "ListPoliciesResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          PolicyArn: S.String.pipe(T.HttpLabel("PolicyArn")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/policies/{PolicyArn}/?List" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPolicyVersionsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          PolicyArn: S.String,
          VersionId: S.Number,
          PolicyType: S.String,
          IsDefault: S.Boolean,
          Name: S.String,
          Status: S.String,
          CreationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          LastUpdatedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "PolicyVersionSummary" });
    case 5:
      return S.Array(__S(52));
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), PolicyVersions: S.optional(__S(53)) }),
      ).annotate({
        identifier: "ListPolicyVersionsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/resource-policies/{ResourceArn}/?List" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResourcePoliciesRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PolicyArn: S.optional(S.String),
          PolicyType: S.optional(S.String),
          PolicyName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListResourcePoliciesResponseResourcePolicy",
      });
    case 1:
      return S.Array(__S(56));
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          ResourcePolicies: S.optional(__S(57)),
        }),
      ).annotate({
        identifier: "ListResourcePoliciesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FieldName: S.optional(S.String),
          Operator: S.optional(S.String),
          Value: S.optional(S.String),
        }),
      ).annotate({ identifier: "Filter" });
    case 4:
      return S.Array(__S(59));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApprovalTeamArn: S.String.pipe(T.HttpLabel("ApprovalTeamArn")),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Filters: S.optional(__S(60)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/approval-teams/{ApprovalTeamArn}/sessions/?List" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSessionsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SessionArn: S.optional(S.String),
          ApprovalTeamName: S.optional(S.String),
          ApprovalTeamArn: S.optional(S.String),
          InitiationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ExpirationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CompletionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Description: S.optional(SensitiveString),
          ActionName: S.optional(S.String),
          ProtectedResourceArn: S.optional(S.String),
          RequesterServicePrincipal: S.optional(S.String),
          RequesterPrincipalArn: S.optional(S.String),
          RequesterRegion: S.optional(S.String),
          RequesterAccountId: S.optional(S.String),
          Status: S.optional(S.String),
          StatusCode: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          ActionCompletionStrategy: S.optional(S.String),
          AdditionalSecurityRequirements: S.optional(__S(37)),
        }),
      ).annotate({
        identifier: "ListSessionsResponseSession",
      });
    case 7:
      return S.Array(__S(62));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          Sessions: S.optional(__S(63)),
        }),
      ).annotate({ identifier: "ListSessionsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(8)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PendingWindowDays: S.optional(S.Number),
          Arn: S.String.pipe(T.HttpLabel("Arn")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/approval-teams/{Arn}?Delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartActiveApprovalTeamDeletionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DeletionCompletionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          DeletionStartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "StartActiveApprovalTeamDeletionResponse",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String.pipe(T.HttpLabel("Arn")),
          ApproverIds: S.optional(__S(69)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/approval-teams/{Arn}/baseline" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartApprovalTeamBaselineRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ BaselineSessionArn: S.optional(S.String) })).annotate({
        identifier: "StartApprovalTeamBaselineResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")), Tags: __S(8) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 1:
      return S.Array(SensitiveString);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagKeys: __S(73),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApprovalStrategy: S.optional(__S(3)),
          Approvers: S.optional(__S(5)),
          Description: S.optional(SensitiveString),
          Arn: S.String.pipe(T.HttpLabel("Arn")),
          UpdateActions: S.optional(__S(37)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/approval-teams/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateApprovalTeamRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ VersionId: S.optional(S.String) })).annotate({
        identifier: "UpdateApprovalTeamResponse",
      });
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
  }
}
