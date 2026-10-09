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
const CancelSessionRequest = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<CancelSessionRequest>;
export interface CancelSessionResponse {}
const CancelSessionResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<CancelSessionResponse>;
export type Token = string;
export interface MofNApprovalStrategy {
  MinApprovalsRequired: number;
}
const MofNApprovalStrategy = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<MofNApprovalStrategy>;
export type ApprovalStrategy = { MofN: MofNApprovalStrategy };
const ApprovalStrategy = /*@__PURE__*/ __L.at(__c0, 3);
export type IdentityId = string;
export interface ApprovalTeamRequestApprover {
  PrimaryIdentityId: string;
  PrimaryIdentitySourceArn: string;
}
const ApprovalTeamRequestApprover = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<ApprovalTeamRequestApprover>;
export type ApprovalTeamRequestApprovers = ApprovalTeamRequestApprover[];
const ApprovalTeamRequestApprovers = /*@__PURE__*/ __L.at(__c0, 5);
export type Description = string | redacted.Redacted<string>;
export type QualifiedPolicyArn = string;
export interface PolicyReference {
  PolicyArn: string;
}
const PolicyReference = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<PolicyReference>;
export type PoliciesReferences = PolicyReference[];
const PoliciesReferences = /*@__PURE__*/ __L.at(__c0, 7);
export type ApprovalTeamName = string;
export type TagKey = string | redacted.Redacted<string>;
export type TagValue = string | redacted.Redacted<string>;
export type Tags = { [key: string]: string | redacted.Redacted<string> | undefined };
const Tags = /*@__PURE__*/ __L.at(__c1, 0);
export interface CreateApprovalTeamRequest {
  ClientToken?: string;
  ApprovalStrategy: ApprovalStrategy;
  Approvers: ApprovalTeamRequestApprover[];
  Description: string | redacted.Redacted<string>;
  Policies: PolicyReference[];
  Name: string;
  Tags?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
const CreateApprovalTeamRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CreateApprovalTeamRequest>;
export type IsoTimestamp = Date;
export type ApprovalTeamArn = string;
export interface CreateApprovalTeamResponse {
  CreationTime?: Date;
  Arn?: string;
  Name?: string;
  VersionId?: string;
}
const CreateApprovalTeamResponse = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<CreateApprovalTeamResponse>;
export type IdcInstanceArn = string;
export interface IamIdentityCenter {
  InstanceArn: string;
  Region: string;
}
const IamIdentityCenter = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<IamIdentityCenter>;
export interface IdentitySourceParameters {
  IamIdentityCenter?: IamIdentityCenter;
}
const IdentitySourceParameters = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<IdentitySourceParameters>;
export interface CreateIdentitySourceRequest {
  IdentitySourceParameters: IdentitySourceParameters;
  ClientToken?: string;
  Tags?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
const CreateIdentitySourceRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<CreateIdentitySourceRequest>;
export type IdentitySourceType = "IAM_IDENTITY_CENTER" | (string & {});
const IdentitySourceType = S.String;

export interface CreateIdentitySourceResponse {
  IdentitySourceType?: IdentitySourceType;
  IdentitySourceArn?: string;
  CreationTime?: Date;
}
const CreateIdentitySourceResponse = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CreateIdentitySourceResponse>;
export interface DeleteIdentitySourceRequest {
  IdentitySourceArn: string;
}
const DeleteIdentitySourceRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<DeleteIdentitySourceRequest>;
export interface DeleteIdentitySourceResponse {}
const DeleteIdentitySourceResponse =
  CancelSessionResponse as any as S.Schema<DeleteIdentitySourceResponse>;
export interface DeleteInactiveApprovalTeamVersionRequest {
  Arn: string;
  VersionId: string;
}
const DeleteInactiveApprovalTeamVersionRequest = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<DeleteInactiveApprovalTeamVersionRequest>;
export interface DeleteInactiveApprovalTeamVersionResponse {}
const DeleteInactiveApprovalTeamVersionResponse = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<DeleteInactiveApprovalTeamVersionResponse>;
export interface GetApprovalTeamRequest {
  Arn: string;
}
const GetApprovalTeamRequest = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<GetApprovalTeamRequest>;
export type ApprovalStrategyResponse = { MofN: MofNApprovalStrategy };
const ApprovalStrategyResponse = ApprovalStrategy as any as S.Schema<ApprovalStrategyResponse>;
export type ParticipantId = string;
export type IdentityStatus = "PENDING" | "ACCEPTED" | "REJECTED" | "INVALID" | (string & {});
const IdentityStatus = S.String;

export type ApproverLastActivity =
  | "VOTED"
  | "BASELINED"
  | "RESPONDED_TO_INVITATION"
  | (string & {});
const ApproverLastActivity = S.String;

export type MfaType = "EMAIL_OTP" | (string & {});
const MfaType = S.String;

export type MfaSyncStatus = "IN_SYNC" | "OUT_OF_SYNC" | (string & {});
const MfaSyncStatus = S.String;

export interface MfaMethod {
  Type: MfaType;
  SyncStatus: MfaSyncStatus;
}
const MfaMethod = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<MfaMethod>;
export type MfaMethods = MfaMethod[];
const MfaMethods = /*@__PURE__*/ __L.at(__c2, 4);
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
const GetApprovalTeamResponseApprover = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<GetApprovalTeamResponseApprover>;
export type GetApprovalTeamResponseApprovers = GetApprovalTeamResponseApprover[];
const GetApprovalTeamResponseApprovers = /*@__PURE__*/ __L.at(__c2, 6);
export type ApprovalTeamStatus = "ACTIVE" | "INACTIVE" | "DELETING" | "PENDING" | (string & {});
const ApprovalTeamStatus = S.String;

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
const ApprovalTeamStatusCode = S.String;

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
const PendingUpdate = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<PendingUpdate>;
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
const GetApprovalTeamResponse = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<GetApprovalTeamResponse>;
export interface GetIdentitySourceRequest {
  IdentitySourceArn: string;
}
const GetIdentitySourceRequest = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<GetIdentitySourceRequest>;
export interface IamIdentityCenterForGet {
  InstanceArn?: string;
  ApprovalPortalUrl?: string;
  Region?: string;
}
const IamIdentityCenterForGet = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<IamIdentityCenterForGet>;
export type IdentitySourceParametersForGet = { IamIdentityCenter: IamIdentityCenterForGet };
const IdentitySourceParametersForGet = /*@__PURE__*/ __L.at(__c3, 3);
export type IdentitySourceStatus = "CREATING" | "ACTIVE" | "DELETING" | "ERROR" | (string & {});
const IdentitySourceStatus = S.String;

export type IdentitySourceStatusCode =
  | "ACCESS_DENIED"
  | "DELETION_FAILED"
  | "IDC_INSTANCE_NOT_FOUND"
  | "IDC_INSTANCE_NOT_VALID"
  | (string & {});
const IdentitySourceStatusCode = S.String;

export interface GetIdentitySourceResponse {
  IdentitySourceType?: IdentitySourceType;
  IdentitySourceParameters?: IdentitySourceParametersForGet;
  IdentitySourceArn?: string;
  CreationTime?: Date;
  Status?: IdentitySourceStatus;
  StatusCode?: IdentitySourceStatusCode;
  StatusMessage?: string;
}
const GetIdentitySourceResponse = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<GetIdentitySourceResponse>;
export interface GetPolicyVersionRequest {
  PolicyVersionArn: string;
}
const GetPolicyVersionRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<GetPolicyVersionRequest>;
export type UnqualifiedPolicyArn = string;
export type PolicyVersionId = number;
export type PolicyType = "AWS_MANAGED" | "AWS_RAM" | (string & {});
const PolicyType = S.String;

export type PolicyName = string;
export type PolicyStatus = "ATTACHABLE" | "DEPRECATED" | (string & {});
const PolicyStatus = S.String;

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
const PolicyVersion = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<PolicyVersion>;
export interface GetPolicyVersionResponse {
  PolicyVersion: PolicyVersion;
}
const GetPolicyVersionResponse = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<GetPolicyVersionResponse>;
export interface GetResourcePolicyRequest {
  ResourceArn: string;
  PolicyName: string;
  PolicyType: PolicyType;
}
const GetResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<GetResourcePolicyRequest>;
export interface GetResourcePolicyResponse {
  ResourceArn: string;
  PolicyType: PolicyType;
  PolicyVersionArn?: string;
  PolicyName: string;
  PolicyDocument: string | redacted.Redacted<string>;
}
const GetResourcePolicyResponse = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<GetResourcePolicyResponse>;
export interface GetSessionRequest {
  SessionArn: string;
}
const GetSessionRequest = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<GetSessionRequest>;
export type SessionKey = string | redacted.Redacted<string>;
export type SessionValue = string | redacted.Redacted<string>;
export type SessionMetadata = { [key: string]: string | redacted.Redacted<string> | undefined };
const SessionMetadata = Tags as any as S.Schema<SessionMetadata>;
export type SessionStatus =
  | "PENDING"
  | "CANCELLED"
  | "APPROVED"
  | "FAILED"
  | "CREATING"
  | (string & {});
const SessionStatus = S.String;

export type SessionStatusCode =
  | "REJECTED"
  | "EXPIRED"
  | "CONFIGURATION_CHANGED"
  | "ALL_APPROVERS_IN_SESSION"
  | (string & {});
const SessionStatusCode = S.String;

export type SessionExecutionStatus = "EXECUTED" | "FAILED" | "PENDING" | (string & {});
const SessionExecutionStatus = S.String;

export type ActionName = string;
export type ServicePrincipal = string;
export type AccountId = string;
export type Region = string;
export type RequesterComment = string | redacted.Redacted<string>;
export type ActionCompletionStrategy = "AUTO_COMPLETION_UPON_APPROVAL" | (string & {});
const ActionCompletionStrategy = S.String;

export type SessionResponse = "APPROVED" | "REJECTED" | "NO_RESPONSE" | (string & {});
const SessionResponse = S.String;

export interface GetSessionResponseApproverResponse {
  ApproverId?: string;
  IdentitySourceArn?: string;
  IdentityId?: string;
  Response?: SessionResponse;
  ResponseTime?: Date;
}
const GetSessionResponseApproverResponse = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<GetSessionResponseApproverResponse>;
export type GetSessionResponseApproverResponses = GetSessionResponseApproverResponse[];
const GetSessionResponseApproverResponses = /*@__PURE__*/ __L.at(__c4, 4);
export type AdditionalSecurityRequirement = "APPROVER_VERIFICATION_REQUIRED" | (string & {});
const AdditionalSecurityRequirement = S.String;

export type AdditionalSecurityRequirements = AdditionalSecurityRequirement[];
const AdditionalSecurityRequirements = /*@__PURE__*/ __L.at(__c4, 5);
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
const GetSessionResponse = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<GetSessionResponse>;
export type MaxResults = number;
export interface ListApprovalTeamsRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListApprovalTeamsRequest = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<ListApprovalTeamsRequest>;
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
const ListApprovalTeamsResponseApprovalTeam = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<ListApprovalTeamsResponseApprovalTeam>;
export type ListApprovalTeamsResponseApprovalTeams = ListApprovalTeamsResponseApprovalTeam[];
const ListApprovalTeamsResponseApprovalTeams = /*@__PURE__*/ __L.at(__c5, 1);
export interface ListApprovalTeamsResponse {
  NextToken?: string;
  ApprovalTeams?: ListApprovalTeamsResponseApprovalTeam[];
}
const ListApprovalTeamsResponse = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<ListApprovalTeamsResponse>;
export interface ListIdentitySourcesRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListIdentitySourcesRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<ListIdentitySourcesRequest>;
export interface IamIdentityCenterForList {
  InstanceArn?: string;
  ApprovalPortalUrl?: string;
  Region?: string;
}
export type IdentitySourceParametersForList = { IamIdentityCenter: IamIdentityCenterForList };
const IdentitySourceParametersForList =
  IdentitySourceParametersForGet as any as S.Schema<IdentitySourceParametersForList>;
export interface IdentitySourceForList {
  IdentitySourceType?: IdentitySourceType;
  IdentitySourceParameters?: IdentitySourceParametersForList;
  IdentitySourceArn?: string;
  CreationTime?: Date;
  Status?: IdentitySourceStatus;
  StatusCode?: IdentitySourceStatusCode;
  StatusMessage?: string;
}
const IdentitySourceForList = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<IdentitySourceForList>;
export type IdentitySources = IdentitySourceForList[];
const IdentitySources = /*@__PURE__*/ __L.at(__c5, 5);
export interface ListIdentitySourcesResponse {
  NextToken?: string;
  IdentitySources?: IdentitySourceForList[];
}
const ListIdentitySourcesResponse = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<ListIdentitySourcesResponse>;
export interface ListPoliciesRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListPoliciesRequest = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<ListPoliciesRequest>;
export interface Policy {
  Arn: string;
  DefaultVersion: number;
  PolicyType: PolicyType;
  Name: string;
}
const Policy = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<Policy>;
export type Policies = Policy[];
const Policies = /*@__PURE__*/ __L.at(__c6, 1);
export interface ListPoliciesResponse {
  NextToken?: string;
  Policies?: Policy[];
}
const ListPoliciesResponse = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<ListPoliciesResponse>;
export interface ListPolicyVersionsRequest {
  MaxResults?: number;
  NextToken?: string;
  PolicyArn: string;
}
const ListPolicyVersionsRequest = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<ListPolicyVersionsRequest>;
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
const PolicyVersionSummary = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<PolicyVersionSummary>;
export type PolicyVersions = PolicyVersionSummary[];
const PolicyVersions = /*@__PURE__*/ __L.at(__c6, 5);
export interface ListPolicyVersionsResponse {
  NextToken?: string;
  PolicyVersions?: PolicyVersionSummary[];
}
const ListPolicyVersionsResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<ListPolicyVersionsResponse>;
export interface ListResourcePoliciesRequest {
  ResourceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListResourcePoliciesRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<ListResourcePoliciesRequest>;
export interface ListResourcePoliciesResponseResourcePolicy {
  PolicyArn?: string;
  PolicyType?: PolicyType;
  PolicyName?: string;
}
const ListResourcePoliciesResponseResourcePolicy = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<ListResourcePoliciesResponseResourcePolicy>;
export type ListResourcePoliciesResponseResourcePolicies =
  ListResourcePoliciesResponseResourcePolicy[];
const ListResourcePoliciesResponseResourcePolicies = /*@__PURE__*/ __L.at(__c7, 1);
export interface ListResourcePoliciesResponse {
  NextToken?: string;
  ResourcePolicies?: ListResourcePoliciesResponseResourcePolicy[];
}
const ListResourcePoliciesResponse = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<ListResourcePoliciesResponse>;
export type FilterField =
  | "ActionName"
  | "ApprovalTeamName"
  | "VotingTime"
  | "Vote"
  | "SessionStatus"
  | "InitiationTime"
  | (string & {});
const FilterField = S.String;

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
const Operator = S.String;

export interface Filter {
  FieldName?: FilterField;
  Operator?: Operator;
  Value?: string;
}
const Filter = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<Filter>;
export type Filters = Filter[];
const Filters = /*@__PURE__*/ __L.at(__c7, 4);
export interface ListSessionsRequest {
  ApprovalTeamArn: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Filter[];
}
const ListSessionsRequest = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<ListSessionsRequest>;
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
const ListSessionsResponseSession = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<ListSessionsResponseSession>;
export type ListSessionsResponseSessions = ListSessionsResponseSession[];
const ListSessionsResponseSessions = /*@__PURE__*/ __L.at(__c7, 7);
export interface ListSessionsResponse {
  NextToken?: string;
  Sessions?: ListSessionsResponseSession[];
}
const ListSessionsResponse = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<ListSessionsResponse>;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface StartActiveApprovalTeamDeletionRequest {
  PendingWindowDays?: number;
  Arn: string;
}
const StartActiveApprovalTeamDeletionRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<StartActiveApprovalTeamDeletionRequest>;
export interface StartActiveApprovalTeamDeletionResponse {
  DeletionCompletionTime?: Date;
  DeletionStartTime?: Date;
}
const StartActiveApprovalTeamDeletionResponse = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<StartActiveApprovalTeamDeletionResponse>;
export type StartApprovalTeamBaselineApproverIds = string[];
const StartApprovalTeamBaselineApproverIds = /*@__PURE__*/ __L.at(__c8, 5);
export interface StartApprovalTeamBaselineRequest {
  Arn: string;
  ApproverIds?: string[];
}
const StartApprovalTeamBaselineRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<StartApprovalTeamBaselineRequest>;
export interface StartApprovalTeamBaselineResponse {
  BaselineSessionArn?: string;
}
const StartApprovalTeamBaselineResponse = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<StartApprovalTeamBaselineResponse>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | redacted.Redacted<string> | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = CancelSessionResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = (string | redacted.Redacted<string>)[];
const TagKeyList = /*@__PURE__*/ __L.at(__c9, 1);
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: (string | redacted.Redacted<string>)[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = CancelSessionResponse as any as S.Schema<UntagResourceResponse>;
export type UpdateAction = "SYNCHRONIZE_MFA_DEVICES" | (string & {});
export type UpdateActions = UpdateAction[];
const UpdateActions = AdditionalSecurityRequirements as any as S.Schema<UpdateActions>;
export interface UpdateApprovalTeamRequest {
  ApprovalStrategy?: ApprovalStrategy;
  Approvers?: ApprovalTeamRequestApprover[];
  Description?: string | redacted.Redacted<string>;
  Arn: string;
  UpdateActions?: UpdateAction[];
}
const UpdateApprovalTeamRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<UpdateApprovalTeamRequest>;
export interface UpdateApprovalTeamResponse {
  VersionId?: string;
}
const UpdateApprovalTeamResponse = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<UpdateApprovalTeamResponse>;
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
  input: CancelSessionRequest,
  output: CancelSessionResponse,
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
  input: CreateApprovalTeamRequest,
  output: CreateApprovalTeamResponse,
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
  input: CreateIdentitySourceRequest,
  output: CreateIdentitySourceResponse,
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
  input: DeleteIdentitySourceRequest,
  output: DeleteIdentitySourceResponse,
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
  input: DeleteInactiveApprovalTeamVersionRequest,
  output: DeleteInactiveApprovalTeamVersionResponse,
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
  input: GetApprovalTeamRequest,
  output: GetApprovalTeamResponse,
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
  input: GetIdentitySourceRequest,
  output: GetIdentitySourceResponse,
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
  input: GetPolicyVersionRequest,
  output: GetPolicyVersionResponse,
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
  input: GetResourcePolicyRequest,
  output: GetResourcePolicyResponse,
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
  input: GetSessionRequest,
  output: GetSessionResponse,
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
  input: ListApprovalTeamsRequest,
  output: ListApprovalTeamsResponse,
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
  input: ListIdentitySourcesRequest,
  output: ListIdentitySourcesResponse,
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
  input: ListPoliciesRequest,
  output: ListPoliciesResponse,
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
  input: ListPolicyVersionsRequest,
  output: ListPolicyVersionsResponse,
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
  input: ListResourcePoliciesRequest,
  output: ListResourcePoliciesResponse,
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
  input: ListSessionsRequest,
  output: ListSessionsResponse,
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
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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
  input: StartActiveApprovalTeamDeletionRequest,
  output: StartActiveApprovalTeamDeletionResponse,
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
  input: StartApprovalTeamBaselineRequest,
  output: StartApprovalTeamBaselineResponse,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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
  input: UntagResourceRequest,
  output: UntagResourceResponse,
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
  input: UpdateApprovalTeamRequest,
  output: UpdateApprovalTeamResponse,
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
      return S.Union([/*@__PURE__*/ S.Struct({ MofN: MofNApprovalStrategy })]);
    case 4:
      return S.suspend(() =>
        S.Struct({ PrimaryIdentityId: S.String, PrimaryIdentitySourceArn: S.String }),
      ).annotate({
        identifier: "ApprovalTeamRequestApprover",
      });
    case 5:
      return S.Array(ApprovalTeamRequestApprover);
    case 6:
      return S.suspend(() => S.Struct({ PolicyArn: S.String })).annotate({
        identifier: "PolicyReference",
      });
    case 7:
      return S.Array(PolicyReference);
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
          ApprovalStrategy: ApprovalStrategy,
          Approvers: ApprovalTeamRequestApprovers,
          Description: SensitiveString,
          Policies: PoliciesReferences,
          Name: S.String,
          Tags: S.optional(Tags),
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
      return S.suspend(() =>
        S.Struct({ IamIdentityCenter: S.optional(IamIdentityCenter) }),
      ).annotate({ identifier: "IdentitySourceParameters" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          IdentitySourceParameters: IdentitySourceParameters,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(Tags),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/identity-sources" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateIdentitySourceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          IdentitySourceType: S.optional(IdentitySourceType),
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
      return S.suspend(() => S.Struct({ Type: MfaType, SyncStatus: MfaSyncStatus })).annotate({
        identifier: "MfaMethod",
      });
    case 4:
      return S.Array(MfaMethod);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApproverId: S.optional(S.String),
          ResponseTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          PrimaryIdentityId: S.optional(S.String),
          PrimaryIdentitySourceArn: S.optional(S.String),
          PrimaryIdentityStatus: S.optional(IdentityStatus),
          LastActivity: S.optional(ApproverLastActivity),
          LastActivityTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          PendingBaselineSessionArn: S.optional(S.String),
          MfaMethods: S.optional(MfaMethods),
        }),
      ).annotate({
        identifier: "GetApprovalTeamResponseApprover",
      });
    case 6:
      return S.Array(GetApprovalTeamResponseApprover);
    case 7:
      return S.suspend(() =>
        S.Struct({
          VersionId: S.optional(S.String),
          Description: S.optional(S.String),
          ApprovalStrategy: S.optional(ApprovalStrategyResponse),
          NumberOfApprovers: S.optional(S.Number),
          Status: S.optional(ApprovalTeamStatus),
          StatusCode: S.optional(ApprovalTeamStatusCode),
          StatusMessage: S.optional(S.String),
          Approvers: S.optional(GetApprovalTeamResponseApprovers),
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
          ApprovalStrategy: S.optional(ApprovalStrategyResponse),
          NumberOfApprovers: S.optional(S.Number),
          Approvers: S.optional(GetApprovalTeamResponseApprovers),
          Arn: S.optional(S.String),
          Description: S.optional(SensitiveString),
          Name: S.optional(S.String),
          Status: S.optional(ApprovalTeamStatus),
          StatusCode: S.optional(ApprovalTeamStatusCode),
          StatusMessage: S.optional(S.String),
          UpdateSessionArn: S.optional(S.String),
          VersionId: S.optional(S.String),
          Policies: S.optional(PoliciesReferences),
          LastUpdateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          PendingUpdate: S.optional(PendingUpdate),
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
      return S.Union([/*@__PURE__*/ S.Struct({ IamIdentityCenter: IamIdentityCenterForGet })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          IdentitySourceType: S.optional(IdentitySourceType),
          IdentitySourceParameters: S.optional(IdentitySourceParametersForGet),
          IdentitySourceArn: S.optional(S.String),
          CreationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Status: S.optional(IdentitySourceStatus),
          StatusCode: S.optional(IdentitySourceStatusCode),
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
          PolicyType: PolicyType,
          IsDefault: S.Boolean,
          Name: S.String,
          Status: PolicyStatus,
          CreationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          LastUpdatedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          Document: SensitiveString,
        }),
      ).annotate({ identifier: "PolicyVersion" });
    case 7:
      return S.suspend(() => S.Struct({ PolicyVersion: PolicyVersion })).annotate({
        identifier: "GetPolicyVersionResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, PolicyName: S.String, PolicyType: PolicyType }).pipe(
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
          PolicyType: PolicyType,
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
          Response: S.optional(SessionResponse),
          ResponseTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "GetSessionResponseApproverResponse",
      });
    case 4:
      return S.Array(GetSessionResponseApproverResponse);
    case 5:
      return S.Array(AdditionalSecurityRequirement);
    case 6:
      return S.suspend(() =>
        S.Struct({
          SessionArn: S.optional(S.String),
          ApprovalTeamArn: S.optional(S.String),
          ApprovalTeamName: S.optional(S.String),
          ProtectedResourceArn: S.optional(S.String),
          ApprovalStrategy: S.optional(ApprovalStrategyResponse),
          NumberOfApprovers: S.optional(S.Number),
          InitiationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ExpirationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CompletionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Description: S.optional(SensitiveString),
          Metadata: S.optional(SessionMetadata),
          Status: S.optional(SessionStatus),
          StatusCode: S.optional(SessionStatusCode),
          StatusMessage: S.optional(S.String),
          ExecutionStatus: S.optional(SessionExecutionStatus),
          ActionName: S.optional(S.String),
          RequesterServicePrincipal: S.optional(S.String),
          RequesterPrincipalArn: S.optional(S.String),
          RequesterAccountId: S.optional(S.String),
          RequesterRegion: S.optional(S.String),
          RequesterComment: S.optional(SensitiveString),
          ActionCompletionStrategy: S.optional(ActionCompletionStrategy),
          ApproverResponses: S.optional(GetSessionResponseApproverResponses),
          AdditionalSecurityRequirements: S.optional(AdditionalSecurityRequirements),
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
          ApprovalStrategy: S.optional(ApprovalStrategyResponse),
          NumberOfApprovers: S.optional(S.Number),
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(SensitiveString),
          Status: S.optional(ApprovalTeamStatus),
          StatusCode: S.optional(ApprovalTeamStatusCode),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListApprovalTeamsResponseApprovalTeam",
      });
    case 1:
      return S.Array(ListApprovalTeamsResponseApprovalTeam);
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          ApprovalTeams: S.optional(ListApprovalTeamsResponseApprovalTeams),
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
          IdentitySourceType: S.optional(IdentitySourceType),
          IdentitySourceParameters: S.optional(IdentitySourceParametersForList),
          IdentitySourceArn: S.optional(S.String),
          CreationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Status: S.optional(IdentitySourceStatus),
          StatusCode: S.optional(IdentitySourceStatusCode),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "IdentitySourceForList" });
    case 5:
      return S.Array(IdentitySourceForList);
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), IdentitySources: S.optional(IdentitySources) }),
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
          PolicyType: PolicyType,
          Name: S.String,
        }),
      ).annotate({ identifier: "Policy" });
    case 1:
      return S.Array(Policy);
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Policies: S.optional(Policies) }),
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
          PolicyType: PolicyType,
          IsDefault: S.Boolean,
          Name: S.String,
          Status: PolicyStatus,
          CreationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          LastUpdatedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "PolicyVersionSummary" });
    case 5:
      return S.Array(PolicyVersionSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), PolicyVersions: S.optional(PolicyVersions) }),
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
          PolicyType: S.optional(PolicyType),
          PolicyName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListResourcePoliciesResponseResourcePolicy",
      });
    case 1:
      return S.Array(ListResourcePoliciesResponseResourcePolicy);
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          ResourcePolicies: S.optional(ListResourcePoliciesResponseResourcePolicies),
        }),
      ).annotate({
        identifier: "ListResourcePoliciesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FieldName: S.optional(FilterField),
          Operator: S.optional(Operator),
          Value: S.optional(S.String),
        }),
      ).annotate({ identifier: "Filter" });
    case 4:
      return S.Array(Filter);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApprovalTeamArn: S.String.pipe(T.HttpLabel("ApprovalTeamArn")),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Filters: S.optional(Filters),
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
          Status: S.optional(SessionStatus),
          StatusCode: S.optional(SessionStatusCode),
          StatusMessage: S.optional(S.String),
          ActionCompletionStrategy: S.optional(ActionCompletionStrategy),
          AdditionalSecurityRequirements: S.optional(AdditionalSecurityRequirements),
        }),
      ).annotate({
        identifier: "ListSessionsResponseSession",
      });
    case 7:
      return S.Array(ListSessionsResponseSession);
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          Sessions: S.optional(ListSessionsResponseSessions),
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
      return S.suspend(() => S.Struct({ Tags: S.optional(Tags) })).annotate({
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
          ApproverIds: S.optional(StartApprovalTeamBaselineApproverIds),
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
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")), Tags: Tags }).pipe(
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
          TagKeys: TagKeyList,
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
          ApprovalStrategy: S.optional(ApprovalStrategy),
          Approvers: S.optional(ApprovalTeamRequestApprovers),
          Description: S.optional(SensitiveString),
          Arn: S.String.pipe(T.HttpLabel("Arn")),
          UpdateActions: S.optional(UpdateActions),
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
