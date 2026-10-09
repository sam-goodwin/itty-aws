import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "PartnerCentral Channel",
  serviceShapeName: "PartnerCentralChannel",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "partnercentral-channel" });
const ver = /*@__PURE__*/ T.ServiceVersion("2024-03-18");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
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
  const _p0 = () => ({
    authSchemes: [
      { name: "sigv4a", signingRegionSet: ["*"] },
      { name: "sigv4", signingRegion: "us-gov-west-1" },
    ],
  });
  const _p1 = (_0: unknown) => ({
    authSchemes: [
      { name: "sigv4a", signingRegionSet: ["*"] },
      { name: "sigv4", signingRegion: `${_.getAttr(_0, "implicitGlobalRegion")}` },
    ],
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    return e(
      Endpoint,
      { authSchemes: [{ name: "sigv4a", signingRegionSet: ["*"] }, { name: "sigv4" }] },
      {},
    );
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (_.getAttr(PartitionResult, "name") === "aws-us-gov" && UseFIPS === false) {
          return e(
            `https://partnercentral-channel.us-gov.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            _p0(),
            {},
          );
        }
        if (_.getAttr(PartitionResult, "name") === "aws-us-gov" && UseFIPS === true) {
          return e(
            `https://partnercentral-channel-fips.us-gov.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            _p0(),
            {},
          );
        }
        if (UseFIPS === true) {
          return e(
            `https://partnercentral-channel-fips.global.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            _p1(PartitionResult),
            {},
          );
        }
        return e(
          `https://partnercentral-channel.global.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          _p1(PartitionResult),
          {},
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
      quotaCode: S.String,
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(402), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withQuotaError, C.withRetryableError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.suspend(() => S.String).annotate({
        identifier: "ValidationExceptionReason",
      }),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(62)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type Catalog = string;
export type ChannelHandshakeIdentifier = string;
export interface AcceptChannelHandshakeRequest {
  catalog: string;
  identifier: string;
}
export type ChannelHandshakeId = string;
export type Arn = string;
export type HandshakeStatus =
  | "PENDING"
  | "ACCEPTED"
  | "REJECTED"
  | "CANCELED"
  | "EXPIRED"
  | (string & {});
export interface AcceptChannelHandshakeDetail {
  id?: string;
  arn?: string;
  status?: HandshakeStatus;
}
export interface AcceptChannelHandshakeResponse {
  channelHandshakeDetail?: AcceptChannelHandshakeDetail;
}
export interface CancelChannelHandshakeRequest {
  catalog: string;
  identifier: string;
}
export interface CancelChannelHandshakeDetail {
  id?: string;
  arn?: string;
  status?: HandshakeStatus;
}
export interface CancelChannelHandshakeResponse {
  channelHandshakeDetail?: CancelChannelHandshakeDetail;
}
export type HandshakeType =
  | "START_SERVICE_PERIOD"
  | "REVOKE_SERVICE_PERIOD"
  | "PROGRAM_MANAGEMENT_ACCOUNT"
  | (string & {});
export type AssociatedResourceIdentifier = string;
export type ProgramManagementAccountIdentifier = string;
export type Note = string;
export type ServicePeriodType = "MINIMUM_NOTICE_PERIOD" | "FIXED_COMMITMENT_PERIOD" | (string & {});
export type MinimumNoticeDays = string;
export interface StartServicePeriodPayload {
  programManagementAccountIdentifier: string;
  note?: string;
  servicePeriodType: ServicePeriodType;
  minimumNoticeDays?: string;
  endDate?: Date;
}
export interface RevokeServicePeriodPayload {
  programManagementAccountIdentifier: string;
  note?: string;
}
export type ChannelHandshakePayload =
  | { startServicePeriodPayload: StartServicePeriodPayload; revokeServicePeriodPayload?: never }
  | { startServicePeriodPayload?: never; revokeServicePeriodPayload: RevokeServicePeriodPayload };
export type ClientToken = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
export type TagList = Tag[];
export interface CreateChannelHandshakeRequest {
  handshakeType: HandshakeType;
  catalog: string;
  associatedResourceIdentifier: string;
  payload?: ChannelHandshakePayload;
  clientToken?: string;
  tags?: Tag[];
}
export interface CreateChannelHandshakeDetail {
  id?: string;
  arn?: string;
}
export interface CreateChannelHandshakeResponse {
  channelHandshakeDetail?: CreateChannelHandshakeDetail;
}
export type Program = "SOLUTION_PROVIDER" | "DISTRIBUTION" | "DISTRIBUTION_SELLER" | (string & {});
export type ProgramManagementAccountDisplayName = string;
export type AccountId = string;
export interface CreateProgramManagementAccountRequest {
  catalog: string;
  program: Program;
  displayName: string;
  accountId: string;
  clientToken?: string;
  tags?: Tag[];
}
export type ProgramManagementAccountId = string;
export interface CreateProgramManagementAccountDetail {
  id?: string;
  arn?: string;
}
export interface CreateProgramManagementAccountResponse {
  programManagementAccountDetail?: CreateProgramManagementAccountDetail;
}
export type AssociationType = "DOWNSTREAM_SELLER" | "END_CUSTOMER" | "INTERNAL" | (string & {});
export type RelationshipDisplayName = string;
export type ResaleAccountModel =
  | "DISTRIBUTOR"
  | "END_CUSTOMER"
  | "SOLUTION_PROVIDER"
  | (string & {});
export type Sector = "COMMERCIAL" | "GOVERNMENT" | "GOVERNMENT_EXCEPTION" | (string & {});
export type Coverage = "ENTIRE_ORGANIZATION" | "MANAGEMENT_ACCOUNT_ONLY" | (string & {});
export interface ResoldEnterprise {
  coverage: Coverage;
  tamLocation: string;
  chargeAccountId?: string;
}
export type Provider = "DISTRIBUTOR" | "DISTRIBUTION_SELLER" | (string & {});
export interface PartnerLedSupport {
  coverage: Coverage;
  provider?: Provider;
  tamLocation: string;
}
export interface ResoldUnifiedOperations {
  coverage: Coverage;
  tamLocation: string;
  chargeAccountId?: string;
}
export type SupportPlan =
  | {
      resoldEnterprise: ResoldEnterprise;
      partnerLedSupport?: never;
      resoldUnifiedOperations?: never;
    }
  | {
      resoldEnterprise?: never;
      partnerLedSupport: PartnerLedSupport;
      resoldUnifiedOperations?: never;
    }
  | {
      resoldEnterprise?: never;
      partnerLedSupport?: never;
      resoldUnifiedOperations: ResoldUnifiedOperations;
    };
export interface CreateRelationshipRequest {
  catalog: string;
  associationType: AssociationType;
  programManagementAccountIdentifier: string;
  associatedAccountId: string;
  displayName: string;
  resaleAccountModel?: ResaleAccountModel;
  sector: Sector;
  clientToken?: string;
  tags?: Tag[];
  requestedSupportPlan?: SupportPlan;
}
export type RelationshipId = string;
export interface CreateRelationshipDetail {
  arn?: string;
  id?: string;
}
export interface CreateRelationshipResponse {
  relationshipDetail?: CreateRelationshipDetail;
}
export interface DeleteProgramManagementAccountRequest {
  catalog: string;
  identifier: string;
  clientToken?: string;
}
export interface DeleteProgramManagementAccountResponse {}
export type RelationshipIdentifier = string;
export interface DeleteRelationshipRequest {
  catalog: string;
  identifier: string;
  programManagementAccountIdentifier: string;
  clientToken?: string;
}
export interface DeleteRelationshipResponse {}
export interface GetRelationshipRequest {
  catalog: string;
  programManagementAccountIdentifier: string;
  identifier: string;
}
export type Revision = string;
export interface RelationshipDetail {
  arn?: string;
  id?: string;
  revision?: string;
  catalog?: string;
  associationType?: AssociationType;
  programManagementAccountId?: string;
  associatedAccountId?: string;
  displayName?: string;
  resaleAccountModel?: ResaleAccountModel;
  sector?: Sector;
  createdAt?: Date;
  updatedAt?: Date;
  startDate?: Date;
}
export interface GetRelationshipResponse {
  relationshipDetail?: RelationshipDetail;
}
export type ParticipantType = "SENDER" | "RECEIVER" | (string & {});
export type HandshakeStatusList = HandshakeStatus[];
export type AssociatedResourceIdentifierList = string[];
export type ServicePeriodTypeList = ServicePeriodType[];
export interface StartServicePeriodTypeFilters {
  servicePeriodTypes?: ServicePeriodType[];
}
export interface RevokeServicePeriodTypeFilters {
  servicePeriodTypes?: ServicePeriodType[];
}
export type ProgramList = Program[];
export interface ProgramManagementAccountTypeFilters {
  programs?: Program[];
}
export type ListChannelHandshakesTypeFilters =
  | {
      startServicePeriodTypeFilters: StartServicePeriodTypeFilters;
      revokeServicePeriodTypeFilters?: never;
      programManagementAccountTypeFilters?: never;
    }
  | {
      startServicePeriodTypeFilters?: never;
      revokeServicePeriodTypeFilters: RevokeServicePeriodTypeFilters;
      programManagementAccountTypeFilters?: never;
    }
  | {
      startServicePeriodTypeFilters?: never;
      revokeServicePeriodTypeFilters?: never;
      programManagementAccountTypeFilters: ProgramManagementAccountTypeFilters;
    };
export type SortOrder = "Ascending" | "Descending" | (string & {});
export type StartServicePeriodTypeSortName = "UpdatedAt" | (string & {});
export interface StartServicePeriodTypeSort {
  sortOrder: SortOrder;
  sortBy: StartServicePeriodTypeSortName;
}
export type RevokeServicePeriodTypeSortName = "UpdatedAt" | (string & {});
export interface RevokeServicePeriodTypeSort {
  sortOrder: SortOrder;
  sortBy: RevokeServicePeriodTypeSortName;
}
export type ProgramManagementAccountTypeSortName = "UpdatedAt" | (string & {});
export interface ProgramManagementAccountTypeSort {
  sortOrder: SortOrder;
  sortBy: ProgramManagementAccountTypeSortName;
}
export type ListChannelHandshakesTypeSort =
  | {
      startServicePeriodTypeSort: StartServicePeriodTypeSort;
      revokeServicePeriodTypeSort?: never;
      programManagementAccountTypeSort?: never;
    }
  | {
      startServicePeriodTypeSort?: never;
      revokeServicePeriodTypeSort: RevokeServicePeriodTypeSort;
      programManagementAccountTypeSort?: never;
    }
  | {
      startServicePeriodTypeSort?: never;
      revokeServicePeriodTypeSort?: never;
      programManagementAccountTypeSort: ProgramManagementAccountTypeSort;
    };
export type NextToken = string;
export interface ListChannelHandshakesRequest {
  handshakeType: HandshakeType;
  catalog: string;
  participantType: ParticipantType;
  maxResults?: number;
  statuses?: HandshakeStatus[];
  associatedResourceIdentifiers?: string[];
  handshakeTypeFilters?: ListChannelHandshakesTypeFilters;
  handshakeTypeSort?: ListChannelHandshakesTypeSort;
  nextToken?: string;
}
export type PartnerProfileDisplayName = string;
export type AssociatedResourceId = string;
export interface StartServicePeriodHandshakeDetail {
  note?: string;
  servicePeriodType?: ServicePeriodType;
  minimumNoticeDays?: string;
  startDate?: Date;
  endDate?: Date;
}
export interface RevokeServicePeriodHandshakeDetail {
  note?: string;
  servicePeriodType?: ServicePeriodType;
  minimumNoticeDays?: string;
  startDate?: Date;
  endDate?: Date;
}
export interface ProgramManagementAccountHandshakeDetail {
  program?: Program;
}
export type HandshakeDetail =
  | {
      startServicePeriodHandshakeDetail: StartServicePeriodHandshakeDetail;
      revokeServicePeriodHandshakeDetail?: never;
      programManagementAccountHandshakeDetail?: never;
    }
  | {
      startServicePeriodHandshakeDetail?: never;
      revokeServicePeriodHandshakeDetail: RevokeServicePeriodHandshakeDetail;
      programManagementAccountHandshakeDetail?: never;
    }
  | {
      startServicePeriodHandshakeDetail?: never;
      revokeServicePeriodHandshakeDetail?: never;
      programManagementAccountHandshakeDetail: ProgramManagementAccountHandshakeDetail;
    };
export interface ChannelHandshakeSummary {
  id?: string;
  arn?: string;
  catalog?: string;
  handshakeType?: HandshakeType;
  ownerAccountId?: string;
  senderAccountId?: string;
  senderDisplayName?: string;
  receiverAccountId?: string;
  associatedResourceId?: string;
  detail?: HandshakeDetail;
  createdAt?: Date;
  updatedAt?: Date;
  status?: HandshakeStatus;
}
export type ChannelHandshakeSummaries = ChannelHandshakeSummary[];
export interface ListChannelHandshakesResponse {
  items?: ChannelHandshakeSummary[];
  nextToken?: string;
}
export type ProgramManagementAccountDisplayNameList = string[];
export type AccountIdList = string[];
export type ProgramManagementAccountStatus = "PENDING" | "ACTIVE" | "INACTIVE" | (string & {});
export type ProgramManagementAccountStatusList = ProgramManagementAccountStatus[];
export type ListProgramManagementAccountsSortName = "UpdatedAt" | (string & {});
export interface ListProgramManagementAccountsSortBase {
  sortOrder: SortOrder;
  sortBy: ListProgramManagementAccountsSortName;
}
export interface ListProgramManagementAccountsRequest {
  catalog: string;
  maxResults?: number;
  displayNames?: string[];
  programs?: Program[];
  accountIds?: string[];
  statuses?: ProgramManagementAccountStatus[];
  sort?: ListProgramManagementAccountsSortBase;
  nextToken?: string;
}
export interface ProgramManagementAccountSummary {
  id?: string;
  revision?: string;
  catalog?: string;
  program?: Program;
  displayName?: string;
  accountId?: string;
  arn?: string;
  createdAt?: Date;
  updatedAt?: Date;
  startDate?: Date;
  status?: ProgramManagementAccountStatus;
}
export type ProgramManagementAccountSummaries = ProgramManagementAccountSummary[];
export interface ListProgramManagementAccountsResponse {
  items?: ProgramManagementAccountSummary[];
  nextToken?: string;
}
export type AssociationTypeList = AssociationType[];
export type RelationshipDisplayNameList = string[];
export type ProgramManagementAccountIdentifierList = string[];
export type ListRelationshipsSortName = "UpdatedAt" | (string & {});
export interface ListRelationshipsSortBase {
  sortOrder: SortOrder;
  sortBy: ListRelationshipsSortName;
}
export interface ListRelationshipsRequest {
  catalog: string;
  maxResults?: number;
  associatedAccountIds?: string[];
  associationTypes?: AssociationType[];
  displayNames?: string[];
  programManagementAccountIdentifiers?: string[];
  sort?: ListRelationshipsSortBase;
  nextToken?: string;
}
export interface RelationshipSummary {
  arn?: string;
  id?: string;
  revision?: string;
  catalog?: string;
  associationType?: AssociationType;
  programManagementAccountId?: string;
  associatedAccountId?: string;
  displayName?: string;
  sector?: Sector;
  createdAt?: Date;
  updatedAt?: Date;
  startDate?: Date;
}
export type RelationshipSummaries = RelationshipSummary[];
export interface ListRelationshipsResponse {
  items?: RelationshipSummary[];
  nextToken?: string;
}
export type TaggableArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Tag[];
}
export interface RejectChannelHandshakeRequest {
  catalog: string;
  identifier: string;
}
export interface RejectChannelHandshakeDetail {
  id?: string;
  arn?: string;
  status?: HandshakeStatus;
}
export interface RejectChannelHandshakeResponse {
  channelHandshakeDetail?: RejectChannelHandshakeDetail;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateProgramManagementAccountRequest {
  catalog: string;
  identifier: string;
  revision?: string;
  displayName?: string;
}
export interface UpdateProgramManagementAccountDetail {
  id?: string;
  arn?: string;
  revision?: string;
  displayName?: string;
}
export interface UpdateProgramManagementAccountResponse {
  programManagementAccountDetail?: UpdateProgramManagementAccountDetail;
}
export interface UpdateRelationshipRequest {
  catalog: string;
  identifier: string;
  programManagementAccountIdentifier: string;
  revision?: string;
  displayName?: string;
  requestedSupportPlan?: SupportPlan;
}
export interface UpdateRelationshipDetail {
  arn?: string;
  id?: string;
  revision?: string;
  displayName?: string;
}
export interface UpdateRelationshipResponse {
  relationshipDetail?: UpdateRelationshipDetail;
}
export type ValidationExceptionReason =
  | "REQUEST_VALIDATION_FAILED"
  | "BUSINESS_VALIDATION_FAILED"
  | (string & {});
export interface ValidationExceptionField {
  name: string;
  code: string;
  message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type AcceptChannelHandshakeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Accepts a pending channel handshake request from another AWS account.
 */
export const acceptChannelHandshake: API.OperationMethod<
  AcceptChannelHandshakeRequest,
  AcceptChannelHandshakeResponse,
  AcceptChannelHandshakeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<AcceptChannelHandshakeRequest>,
  output: __S(2) as any as S.Schema<AcceptChannelHandshakeResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptChannelHandshake",
}));

export type CancelChannelHandshakeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels a pending channel handshake request.
 */
export const cancelChannelHandshake: API.OperationMethod<
  CancelChannelHandshakeRequest,
  CancelChannelHandshakeResponse,
  CancelChannelHandshakeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3) as any as S.Schema<CancelChannelHandshakeRequest>,
  output: __S(2) as any as S.Schema<CancelChannelHandshakeResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelChannelHandshake",
}));

export type CreateChannelHandshakeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new channel handshake request to establish a partnership with another AWS account.
 */
export const createChannelHandshake: API.OperationMethod<
  CreateChannelHandshakeRequest,
  CreateChannelHandshakeResponse,
  CreateChannelHandshakeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<CreateChannelHandshakeRequest>,
  output: __S(11) as any as S.Schema<CreateChannelHandshakeResponse>,
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
  operationName: "CreateChannelHandshake",
}));

export type CreateProgramManagementAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new program management account for managing partner relationships.
 */
export const createProgramManagementAccount: API.OperationMethod<
  CreateProgramManagementAccountRequest,
  CreateProgramManagementAccountResponse,
  CreateProgramManagementAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12) as any as S.Schema<CreateProgramManagementAccountRequest>,
  output: __S(13) as any as S.Schema<CreateProgramManagementAccountResponse>,
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
  operationName: "CreateProgramManagementAccount",
}));

export type CreateRelationshipError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new partner relationship between accounts.
 */
export const createRelationship: API.OperationMethod<
  CreateRelationshipRequest,
  CreateRelationshipResponse,
  CreateRelationshipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17) as any as S.Schema<CreateRelationshipRequest>,
  output: __S(19) as any as S.Schema<CreateRelationshipResponse>,
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
  operationName: "CreateRelationship",
}));

export type DeleteProgramManagementAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a program management account.
 */
export const deleteProgramManagementAccount: API.OperationMethod<
  DeleteProgramManagementAccountRequest,
  DeleteProgramManagementAccountResponse,
  DeleteProgramManagementAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20) as any as S.Schema<DeleteProgramManagementAccountRequest>,
  output: __S(21) as any as S.Schema<DeleteProgramManagementAccountResponse>,
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
  operationName: "DeleteProgramManagementAccount",
}));

export type DeleteRelationshipError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a partner relationship.
 */
export const deleteRelationship: API.OperationMethod<
  DeleteRelationshipRequest,
  DeleteRelationshipResponse,
  DeleteRelationshipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22) as any as S.Schema<DeleteRelationshipRequest>,
  output: __S(23) as any as S.Schema<DeleteRelationshipResponse>,
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
  operationName: "DeleteRelationship",
}));

export type GetRelationshipError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details of a specific partner relationship.
 */
export const getRelationship: API.OperationMethod<
  GetRelationshipRequest,
  GetRelationshipResponse,
  GetRelationshipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24) as any as S.Schema<GetRelationshipRequest>,
  output: __S(26) as any as S.Schema<GetRelationshipResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRelationship",
}));

export type ListChannelHandshakesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists channel handshakes based on specified criteria.
 */
export const listChannelHandshakes: API.PaginatedOperationMethod<
  ListChannelHandshakesRequest,
  ListChannelHandshakesResponse,
  ListChannelHandshakesError,
  Credentials | HttpClient.HttpClient,
  ChannelHandshakeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(34) as any as S.Schema<ListChannelHandshakesRequest>,
  output: __S(40) as any as S.Schema<ListChannelHandshakesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChannelHandshakes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListProgramManagementAccountsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists program management accounts based on specified criteria.
 */
export const listProgramManagementAccounts: API.PaginatedOperationMethod<
  ListProgramManagementAccountsRequest,
  ListProgramManagementAccountsResponse,
  ListProgramManagementAccountsError,
  Credentials | HttpClient.HttpClient,
  ProgramManagementAccountSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(42) as any as S.Schema<ListProgramManagementAccountsRequest>,
  output: __S(45) as any as S.Schema<ListProgramManagementAccountsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProgramManagementAccounts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRelationshipsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists partner relationships based on specified criteria.
 */
export const listRelationships: API.PaginatedOperationMethod<
  ListRelationshipsRequest,
  ListRelationshipsResponse,
  ListRelationshipsError,
  Credentials | HttpClient.HttpClient,
  RelationshipSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(46) as any as S.Schema<ListRelationshipsRequest>,
  output: __S(49) as any as S.Schema<ListRelationshipsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRelationships",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
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
 * Lists tags associated with a specific resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(51) as any as S.Schema<ListTagsForResourceResponse>,
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

export type RejectChannelHandshakeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Rejects a pending channel handshake request.
 */
export const rejectChannelHandshake: API.OperationMethod<
  RejectChannelHandshakeRequest,
  RejectChannelHandshakeResponse,
  RejectChannelHandshakeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52) as any as S.Schema<RejectChannelHandshakeRequest>,
  output: __S(2) as any as S.Schema<RejectChannelHandshakeResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RejectChannelHandshake",
}));

export type TagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds or updates tags for a specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53) as any as S.Schema<TagResourceRequest>,
  output: __S(23) as any as S.Schema<TagResourceResponse>,
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
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes tags from a specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54) as any as S.Schema<UntagResourceRequest>,
  output: __S(23) as any as S.Schema<UntagResourceResponse>,
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
  operationName: "UntagResource",
}));

export type UpdateProgramManagementAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the properties of a program management account.
 */
export const updateProgramManagementAccount: API.OperationMethod<
  UpdateProgramManagementAccountRequest,
  UpdateProgramManagementAccountResponse,
  UpdateProgramManagementAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55) as any as S.Schema<UpdateProgramManagementAccountRequest>,
  output: __S(57) as any as S.Schema<UpdateProgramManagementAccountResponse>,
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
  operationName: "UpdateProgramManagementAccount",
}));

export type UpdateRelationshipError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the properties of a partner relationship.
 */
export const updateRelationship: API.OperationMethod<
  UpdateRelationshipRequest,
  UpdateRelationshipResponse,
  UpdateRelationshipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58) as any as S.Schema<UpdateRelationshipRequest>,
  output: __S(60) as any as S.Schema<UpdateRelationshipResponse>,
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
  operationName: "UpdateRelationship",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ catalog: S.String, identifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/AcceptChannelHandshake" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AcceptChannelHandshakeRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AcceptChannelHandshakeDetail",
      });
    case 2:
      return S.suspend(() => S.Struct({ channelHandshakeDetail: S.optional(__S(1)) })).annotate({
        identifier: "AcceptChannelHandshakeResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ catalog: S.String, identifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CancelChannelHandshake" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelChannelHandshakeRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          programManagementAccountIdentifier: S.String,
          note: S.optional(S.String),
          servicePeriodType: S.String,
          minimumNoticeDays: S.optional(S.String),
          endDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "StartServicePeriodPayload",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ programManagementAccountIdentifier: S.String, note: S.optional(S.String) }),
      ).annotate({
        identifier: "RevokeServicePeriodPayload",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ startServicePeriodPayload: __S(4) }),
        /*@__PURE__*/ S.Struct({ revokeServicePeriodPayload: __S(5) }),
      ]);
    case 7:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "Tag",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          handshakeType: S.String,
          catalog: S.String,
          associatedResourceIdentifier: S.String,
          payload: S.optional(__S(6)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(8)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateChannelHandshake" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateChannelHandshakeRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), arn: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateChannelHandshakeDetail",
      });
    case 3:
      return S.suspend(() => S.Struct({ channelHandshakeDetail: S.optional(__S(10)) })).annotate({
        identifier: "CreateChannelHandshakeResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          catalog: S.String,
          program: S.String,
          displayName: S.String,
          accountId: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(8)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateProgramManagementAccount" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateProgramManagementAccountRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          programManagementAccountDetail: S.optional(__S(10)),
        }),
      ).annotate({
        identifier: "CreateProgramManagementAccountResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          coverage: S.String,
          tamLocation: S.String,
          chargeAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResoldEnterprise" });
    case 7:
      return S.suspend(() =>
        S.Struct({ coverage: S.String, provider: S.optional(S.String), tamLocation: S.String }),
      ).annotate({ identifier: "PartnerLedSupport" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ resoldEnterprise: __S(14) }),
        /*@__PURE__*/ S.Struct({ partnerLedSupport: __S(15) }),
        /*@__PURE__*/ S.Struct({ resoldUnifiedOperations: __S(14) }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          catalog: S.String,
          associationType: S.String,
          programManagementAccountIdentifier: S.String,
          associatedAccountId: S.String,
          displayName: S.String,
          resaleAccountModel: S.optional(S.String),
          sector: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(8)),
          requestedSupportPlan: S.optional(__S(16)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateRelationship" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateRelationshipRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.optional(S.String), id: S.optional(S.String) }),
      ).annotate({ identifier: "CreateRelationshipDetail" });
    case 3:
      return S.suspend(() => S.Struct({ relationshipDetail: S.optional(__S(18)) })).annotate({
        identifier: "CreateRelationshipResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          catalog: S.String,
          identifier: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteProgramManagementAccount" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteProgramManagementAccountRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteProgramManagementAccountResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          catalog: S.String,
          identifier: S.String,
          programManagementAccountIdentifier: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteRelationship" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRelationshipRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteRelationshipResponse",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          catalog: S.String,
          programManagementAccountIdentifier: S.String,
          identifier: S.String,
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetRelationship" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetRelationshipRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          revision: S.optional(S.String),
          catalog: S.optional(S.String),
          associationType: S.optional(S.String),
          programManagementAccountId: S.optional(S.String),
          associatedAccountId: S.optional(S.String),
          displayName: S.optional(S.String),
          resaleAccountModel: S.optional(S.String),
          sector: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          startDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "RelationshipDetail" });
    case 2:
      return S.suspend(() => S.Struct({ relationshipDetail: S.optional(__S(25)) })).annotate({
        identifier: "GetRelationshipResponse",
      });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() => S.Struct({ servicePeriodTypes: S.optional(__S(27)) })).annotate({
        identifier: "StartServicePeriodTypeFilters",
      });
    case 6:
      return S.suspend(() => S.Struct({ programs: S.optional(__S(27)) })).annotate({
        identifier: "ProgramManagementAccountTypeFilters",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ startServicePeriodTypeFilters: __S(29) }),
        /*@__PURE__*/ S.Struct({ revokeServicePeriodTypeFilters: __S(29) }),
        /*@__PURE__*/ S.Struct({
          programManagementAccountTypeFilters: __S(30),
        }),
      ]);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ sortOrder: S.String, sortBy: S.String })).annotate({
        identifier: "StartServicePeriodTypeSort",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ startServicePeriodTypeSort: __S(32) }),
        /*@__PURE__*/ S.Struct({ revokeServicePeriodTypeSort: __S(32) }),
        /*@__PURE__*/ S.Struct({
          programManagementAccountTypeSort: __S(32),
        }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          handshakeType: S.String,
          catalog: S.String,
          participantType: S.String,
          maxResults: S.optional(S.Number),
          statuses: S.optional(__S(27)),
          associatedResourceIdentifiers: S.optional(__S(28)),
          handshakeTypeFilters: S.optional(__S(31)),
          handshakeTypeSort: S.optional(__S(33)),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListChannelHandshakes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListChannelHandshakesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          note: S.optional(S.String),
          servicePeriodType: S.optional(S.String),
          minimumNoticeDays: S.optional(S.String),
          startDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "StartServicePeriodHandshakeDetail",
      });
    case 4:
      return S.suspend(() => S.Struct({ program: S.optional(S.String) })).annotate({
        identifier: "ProgramManagementAccountHandshakeDetail",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          startServicePeriodHandshakeDetail: __S(35),
        }),
        /*@__PURE__*/ S.Struct({
          revokeServicePeriodHandshakeDetail: __S(35),
        }),
        /*@__PURE__*/ S.Struct({
          programManagementAccountHandshakeDetail: __S(36),
        }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          catalog: S.optional(S.String),
          handshakeType: S.optional(S.String),
          ownerAccountId: S.optional(S.String),
          senderAccountId: S.optional(S.String),
          senderDisplayName: S.optional(S.String),
          receiverAccountId: S.optional(S.String),
          associatedResourceId: S.optional(S.String),
          detail: S.optional(__S(37)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChannelHandshakeSummary" });
    case 7:
      return S.Array(__S(38));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(39)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListChannelHandshakesResponse",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          catalog: S.String,
          maxResults: S.optional(S.Number),
          displayNames: S.optional(__S(28)),
          programs: S.optional(__S(27)),
          accountIds: S.optional(__S(28)),
          statuses: S.optional(__S(41)),
          sort: S.optional(__S(32)),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListProgramManagementAccounts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListProgramManagementAccountsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          revision: S.optional(S.String),
          catalog: S.optional(S.String),
          program: S.optional(S.String),
          displayName: S.optional(S.String),
          accountId: S.optional(S.String),
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          startDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ProgramManagementAccountSummary",
      });
    case 4:
      return S.Array(__S(43));
    case 5:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(44)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProgramManagementAccountsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          catalog: S.String,
          maxResults: S.optional(S.Number),
          associatedAccountIds: S.optional(__S(28)),
          associationTypes: S.optional(__S(27)),
          displayNames: S.optional(__S(28)),
          programManagementAccountIdentifiers: S.optional(__S(28)),
          sort: S.optional(__S(32)),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListRelationships" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListRelationshipsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          revision: S.optional(S.String),
          catalog: S.optional(S.String),
          associationType: S.optional(S.String),
          programManagementAccountId: S.optional(S.String),
          associatedAccountId: S.optional(S.String),
          displayName: S.optional(S.String),
          sector: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          startDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "RelationshipSummary" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(47));
    case 1:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(48)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListRelationshipsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListTagsForResource" }),
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
    case 3:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(8)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ catalog: S.String, identifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/RejectChannelHandshake" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RejectChannelHandshakeRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: __S(8) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/TagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tagKeys: __S(28) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UntagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          catalog: S.String,
          identifier: S.String,
          revision: S.optional(S.String),
          displayName: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateProgramManagementAccount" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateProgramManagementAccountRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          revision: S.optional(S.String),
          displayName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateProgramManagementAccountDetail",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          programManagementAccountDetail: S.optional(__S(56)),
        }),
      ).annotate({
        identifier: "UpdateProgramManagementAccountResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          catalog: S.String,
          identifier: S.String,
          programManagementAccountIdentifier: S.String,
          revision: S.optional(S.String),
          displayName: S.optional(S.String),
          requestedSupportPlan: S.optional(__S(16)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateRelationship" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateRelationshipRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          revision: S.optional(S.String),
          displayName: S.optional(S.String),
        }),
      ).annotate({ identifier: "UpdateRelationshipDetail" });
    case 4:
      return S.suspend(() => S.Struct({ relationshipDetail: S.optional(__S(59)) })).annotate({
        identifier: "UpdateRelationshipResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.String, code: S.String, message: S.String }),
      ).annotate({ identifier: "ValidationExceptionField" });
    case 6:
      return S.Array(__S(61));
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
  }
}
