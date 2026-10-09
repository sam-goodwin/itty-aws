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
      reason: /*@__PURE__*/ S.suspend(() => ValidationExceptionReason).annotate({
        identifier: "ValidationExceptionReason",
      }),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
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
const AcceptChannelHandshakeRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AcceptChannelHandshakeRequest>;
export type ChannelHandshakeId = string;
export type Arn = string;
export type HandshakeStatus =
  | "PENDING"
  | "ACCEPTED"
  | "REJECTED"
  | "CANCELED"
  | "EXPIRED"
  | (string & {});
const HandshakeStatus = S.String;

export interface AcceptChannelHandshakeDetail {
  id?: string;
  arn?: string;
  status?: HandshakeStatus;
}
const AcceptChannelHandshakeDetail = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AcceptChannelHandshakeDetail>;
export interface AcceptChannelHandshakeResponse {
  channelHandshakeDetail?: AcceptChannelHandshakeDetail;
}
const AcceptChannelHandshakeResponse = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AcceptChannelHandshakeResponse>;
export interface CancelChannelHandshakeRequest {
  catalog: string;
  identifier: string;
}
const CancelChannelHandshakeRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<CancelChannelHandshakeRequest>;
export interface CancelChannelHandshakeDetail {
  id?: string;
  arn?: string;
  status?: HandshakeStatus;
}
export interface CancelChannelHandshakeResponse {
  channelHandshakeDetail?: CancelChannelHandshakeDetail;
}
const CancelChannelHandshakeResponse =
  AcceptChannelHandshakeResponse as any as S.Schema<CancelChannelHandshakeResponse>;
export type HandshakeType =
  | "START_SERVICE_PERIOD"
  | "REVOKE_SERVICE_PERIOD"
  | "PROGRAM_MANAGEMENT_ACCOUNT"
  | (string & {});
const HandshakeType = S.String;

export type AssociatedResourceIdentifier = string;
export type ProgramManagementAccountIdentifier = string;
export type Note = string;
export type ServicePeriodType = "MINIMUM_NOTICE_PERIOD" | "FIXED_COMMITMENT_PERIOD" | (string & {});
const ServicePeriodType = S.String;

export type MinimumNoticeDays = string;
export interface StartServicePeriodPayload {
  programManagementAccountIdentifier: string;
  note?: string;
  servicePeriodType: ServicePeriodType;
  minimumNoticeDays?: string;
  endDate?: Date;
}
const StartServicePeriodPayload = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<StartServicePeriodPayload>;
export interface RevokeServicePeriodPayload {
  programManagementAccountIdentifier: string;
  note?: string;
}
const RevokeServicePeriodPayload = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<RevokeServicePeriodPayload>;
export type ChannelHandshakePayload =
  | { startServicePeriodPayload: StartServicePeriodPayload; revokeServicePeriodPayload?: never }
  | { startServicePeriodPayload?: never; revokeServicePeriodPayload: RevokeServicePeriodPayload };
const ChannelHandshakePayload = /*@__PURE__*/ __L.at(__c0, 6);
export type ClientToken = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c1, 0);
export interface CreateChannelHandshakeRequest {
  handshakeType: HandshakeType;
  catalog: string;
  associatedResourceIdentifier: string;
  payload?: ChannelHandshakePayload;
  clientToken?: string;
  tags?: Tag[];
}
const CreateChannelHandshakeRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CreateChannelHandshakeRequest>;
export interface CreateChannelHandshakeDetail {
  id?: string;
  arn?: string;
}
const CreateChannelHandshakeDetail = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<CreateChannelHandshakeDetail>;
export interface CreateChannelHandshakeResponse {
  channelHandshakeDetail?: CreateChannelHandshakeDetail;
}
const CreateChannelHandshakeResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<CreateChannelHandshakeResponse>;
export type Program = "SOLUTION_PROVIDER" | "DISTRIBUTION" | "DISTRIBUTION_SELLER" | (string & {});
const Program = S.String;

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
const CreateProgramManagementAccountRequest = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<CreateProgramManagementAccountRequest>;
export type ProgramManagementAccountId = string;
export interface CreateProgramManagementAccountDetail {
  id?: string;
  arn?: string;
}
const CreateProgramManagementAccountDetail =
  CreateChannelHandshakeDetail as any as S.Schema<CreateProgramManagementAccountDetail>;
export interface CreateProgramManagementAccountResponse {
  programManagementAccountDetail?: CreateProgramManagementAccountDetail;
}
const CreateProgramManagementAccountResponse = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<CreateProgramManagementAccountResponse>;
export type AssociationType = "DOWNSTREAM_SELLER" | "END_CUSTOMER" | "INTERNAL" | (string & {});
const AssociationType = S.String;

export type RelationshipDisplayName = string;
export type ResaleAccountModel =
  | "DISTRIBUTOR"
  | "END_CUSTOMER"
  | "SOLUTION_PROVIDER"
  | (string & {});
const ResaleAccountModel = S.String;

export type Sector = "COMMERCIAL" | "GOVERNMENT" | "GOVERNMENT_EXCEPTION" | (string & {});
const Sector = S.String;

export type Coverage = "ENTIRE_ORGANIZATION" | "MANAGEMENT_ACCOUNT_ONLY" | (string & {});
const Coverage = S.String;

export interface ResoldEnterprise {
  coverage: Coverage;
  tamLocation: string;
  chargeAccountId?: string;
}
const ResoldEnterprise = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<ResoldEnterprise>;
export type Provider = "DISTRIBUTOR" | "DISTRIBUTION_SELLER" | (string & {});
const Provider = S.String;

export interface PartnerLedSupport {
  coverage: Coverage;
  provider?: Provider;
  tamLocation: string;
}
const PartnerLedSupport = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<PartnerLedSupport>;
export interface ResoldUnifiedOperations {
  coverage: Coverage;
  tamLocation: string;
  chargeAccountId?: string;
}
const ResoldUnifiedOperations = ResoldEnterprise as any as S.Schema<ResoldUnifiedOperations>;
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
const SupportPlan = /*@__PURE__*/ __L.at(__c2, 0);
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
const CreateRelationshipRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<CreateRelationshipRequest>;
export type RelationshipId = string;
export interface CreateRelationshipDetail {
  arn?: string;
  id?: string;
}
const CreateRelationshipDetail = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CreateRelationshipDetail>;
export interface CreateRelationshipResponse {
  relationshipDetail?: CreateRelationshipDetail;
}
const CreateRelationshipResponse = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<CreateRelationshipResponse>;
export interface DeleteProgramManagementAccountRequest {
  catalog: string;
  identifier: string;
  clientToken?: string;
}
const DeleteProgramManagementAccountRequest = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<DeleteProgramManagementAccountRequest>;
export interface DeleteProgramManagementAccountResponse {}
const DeleteProgramManagementAccountResponse = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<DeleteProgramManagementAccountResponse>;
export type RelationshipIdentifier = string;
export interface DeleteRelationshipRequest {
  catalog: string;
  identifier: string;
  programManagementAccountIdentifier: string;
  clientToken?: string;
}
const DeleteRelationshipRequest = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<DeleteRelationshipRequest>;
export interface DeleteRelationshipResponse {}
const DeleteRelationshipResponse = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<DeleteRelationshipResponse>;
export interface GetRelationshipRequest {
  catalog: string;
  programManagementAccountIdentifier: string;
  identifier: string;
}
const GetRelationshipRequest = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<GetRelationshipRequest>;
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
const RelationshipDetail = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<RelationshipDetail>;
export interface GetRelationshipResponse {
  relationshipDetail?: RelationshipDetail;
}
const GetRelationshipResponse = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<GetRelationshipResponse>;
export type ParticipantType = "SENDER" | "RECEIVER" | (string & {});
const ParticipantType = S.String;

export type HandshakeStatusList = HandshakeStatus[];
const HandshakeStatusList = /*@__PURE__*/ __L.at(__c3, 3);
export type AssociatedResourceIdentifierList = string[];
const AssociatedResourceIdentifierList = /*@__PURE__*/ __L.at(__c3, 4);
export type ServicePeriodTypeList = ServicePeriodType[];
const ServicePeriodTypeList = HandshakeStatusList as any as S.Schema<ServicePeriodTypeList>;
export interface StartServicePeriodTypeFilters {
  servicePeriodTypes?: ServicePeriodType[];
}
const StartServicePeriodTypeFilters = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<StartServicePeriodTypeFilters>;
export interface RevokeServicePeriodTypeFilters {
  servicePeriodTypes?: ServicePeriodType[];
}
const RevokeServicePeriodTypeFilters =
  StartServicePeriodTypeFilters as any as S.Schema<RevokeServicePeriodTypeFilters>;
export type ProgramList = Program[];
const ProgramList = HandshakeStatusList as any as S.Schema<ProgramList>;
export interface ProgramManagementAccountTypeFilters {
  programs?: Program[];
}
const ProgramManagementAccountTypeFilters = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<ProgramManagementAccountTypeFilters>;
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
const ListChannelHandshakesTypeFilters = /*@__PURE__*/ __L.at(__c3, 7);
export type SortOrder = "Ascending" | "Descending" | (string & {});
const SortOrder = S.String;

export type StartServicePeriodTypeSortName = "UpdatedAt" | (string & {});
const StartServicePeriodTypeSortName = S.String;

export interface StartServicePeriodTypeSort {
  sortOrder: SortOrder;
  sortBy: StartServicePeriodTypeSortName;
}
const StartServicePeriodTypeSort = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<StartServicePeriodTypeSort>;
export type RevokeServicePeriodTypeSortName = "UpdatedAt" | (string & {});
export interface RevokeServicePeriodTypeSort {
  sortOrder: SortOrder;
  sortBy: RevokeServicePeriodTypeSortName;
}
const RevokeServicePeriodTypeSort =
  StartServicePeriodTypeSort as any as S.Schema<RevokeServicePeriodTypeSort>;
export type ProgramManagementAccountTypeSortName = "UpdatedAt" | (string & {});
export interface ProgramManagementAccountTypeSort {
  sortOrder: SortOrder;
  sortBy: ProgramManagementAccountTypeSortName;
}
const ProgramManagementAccountTypeSort =
  StartServicePeriodTypeSort as any as S.Schema<ProgramManagementAccountTypeSort>;
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
const ListChannelHandshakesTypeSort = /*@__PURE__*/ __L.at(__c4, 1);
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
const ListChannelHandshakesRequest = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<ListChannelHandshakesRequest>;
export type PartnerProfileDisplayName = string;
export type AssociatedResourceId = string;
export interface StartServicePeriodHandshakeDetail {
  note?: string;
  servicePeriodType?: ServicePeriodType;
  minimumNoticeDays?: string;
  startDate?: Date;
  endDate?: Date;
}
const StartServicePeriodHandshakeDetail = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<StartServicePeriodHandshakeDetail>;
export interface RevokeServicePeriodHandshakeDetail {
  note?: string;
  servicePeriodType?: ServicePeriodType;
  minimumNoticeDays?: string;
  startDate?: Date;
  endDate?: Date;
}
const RevokeServicePeriodHandshakeDetail =
  StartServicePeriodHandshakeDetail as any as S.Schema<RevokeServicePeriodHandshakeDetail>;
export interface ProgramManagementAccountHandshakeDetail {
  program?: Program;
}
const ProgramManagementAccountHandshakeDetail = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<ProgramManagementAccountHandshakeDetail>;
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
const HandshakeDetail = /*@__PURE__*/ __L.at(__c4, 5);
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
const ChannelHandshakeSummary = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<ChannelHandshakeSummary>;
export type ChannelHandshakeSummaries = ChannelHandshakeSummary[];
const ChannelHandshakeSummaries = /*@__PURE__*/ __L.at(__c4, 7);
export interface ListChannelHandshakesResponse {
  items?: ChannelHandshakeSummary[];
  nextToken?: string;
}
const ListChannelHandshakesResponse = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<ListChannelHandshakesResponse>;
export type ProgramManagementAccountDisplayNameList = string[];
const ProgramManagementAccountDisplayNameList =
  AssociatedResourceIdentifierList as any as S.Schema<ProgramManagementAccountDisplayNameList>;
export type AccountIdList = string[];
const AccountIdList = AssociatedResourceIdentifierList as any as S.Schema<AccountIdList>;
export type ProgramManagementAccountStatus = "PENDING" | "ACTIVE" | "INACTIVE" | (string & {});
const ProgramManagementAccountStatus = S.String;

export type ProgramManagementAccountStatusList = ProgramManagementAccountStatus[];
const ProgramManagementAccountStatusList = /*@__PURE__*/ __L.at(__c5, 1);
export type ListProgramManagementAccountsSortName = "UpdatedAt" | (string & {});
export interface ListProgramManagementAccountsSortBase {
  sortOrder: SortOrder;
  sortBy: ListProgramManagementAccountsSortName;
}
const ListProgramManagementAccountsSortBase =
  StartServicePeriodTypeSort as any as S.Schema<ListProgramManagementAccountsSortBase>;
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
const ListProgramManagementAccountsRequest = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<ListProgramManagementAccountsRequest>;
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
const ProgramManagementAccountSummary = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<ProgramManagementAccountSummary>;
export type ProgramManagementAccountSummaries = ProgramManagementAccountSummary[];
const ProgramManagementAccountSummaries = /*@__PURE__*/ __L.at(__c5, 4);
export interface ListProgramManagementAccountsResponse {
  items?: ProgramManagementAccountSummary[];
  nextToken?: string;
}
const ListProgramManagementAccountsResponse = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<ListProgramManagementAccountsResponse>;
export type AssociationTypeList = AssociationType[];
const AssociationTypeList = HandshakeStatusList as any as S.Schema<AssociationTypeList>;
export type RelationshipDisplayNameList = string[];
const RelationshipDisplayNameList =
  AssociatedResourceIdentifierList as any as S.Schema<RelationshipDisplayNameList>;
export type ProgramManagementAccountIdentifierList = string[];
const ProgramManagementAccountIdentifierList =
  AssociatedResourceIdentifierList as any as S.Schema<ProgramManagementAccountIdentifierList>;
export type ListRelationshipsSortName = "UpdatedAt" | (string & {});
export interface ListRelationshipsSortBase {
  sortOrder: SortOrder;
  sortBy: ListRelationshipsSortName;
}
const ListRelationshipsSortBase =
  StartServicePeriodTypeSort as any as S.Schema<ListRelationshipsSortBase>;
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
const ListRelationshipsRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<ListRelationshipsRequest>;
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
const RelationshipSummary = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<RelationshipSummary>;
export type RelationshipSummaries = RelationshipSummary[];
const RelationshipSummaries = /*@__PURE__*/ __L.at(__c6, 0);
export interface ListRelationshipsResponse {
  items?: RelationshipSummary[];
  nextToken?: string;
}
const ListRelationshipsResponse = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<ListRelationshipsResponse>;
export type TaggableArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface RejectChannelHandshakeRequest {
  catalog: string;
  identifier: string;
}
const RejectChannelHandshakeRequest = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<RejectChannelHandshakeRequest>;
export interface RejectChannelHandshakeDetail {
  id?: string;
  arn?: string;
  status?: HandshakeStatus;
}
export interface RejectChannelHandshakeResponse {
  channelHandshakeDetail?: RejectChannelHandshakeDetail;
}
const RejectChannelHandshakeResponse =
  AcceptChannelHandshakeResponse as any as S.Schema<RejectChannelHandshakeResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteRelationshipResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = AssociatedResourceIdentifierList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteRelationshipResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateProgramManagementAccountRequest {
  catalog: string;
  identifier: string;
  revision?: string;
  displayName?: string;
}
const UpdateProgramManagementAccountRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<UpdateProgramManagementAccountRequest>;
export interface UpdateProgramManagementAccountDetail {
  id?: string;
  arn?: string;
  revision?: string;
  displayName?: string;
}
const UpdateProgramManagementAccountDetail = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<UpdateProgramManagementAccountDetail>;
export interface UpdateProgramManagementAccountResponse {
  programManagementAccountDetail?: UpdateProgramManagementAccountDetail;
}
const UpdateProgramManagementAccountResponse = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<UpdateProgramManagementAccountResponse>;
export interface UpdateRelationshipRequest {
  catalog: string;
  identifier: string;
  programManagementAccountIdentifier: string;
  revision?: string;
  displayName?: string;
  requestedSupportPlan?: SupportPlan;
}
const UpdateRelationshipRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<UpdateRelationshipRequest>;
export interface UpdateRelationshipDetail {
  arn?: string;
  id?: string;
  revision?: string;
  displayName?: string;
}
const UpdateRelationshipDetail = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<UpdateRelationshipDetail>;
export interface UpdateRelationshipResponse {
  relationshipDetail?: UpdateRelationshipDetail;
}
const UpdateRelationshipResponse = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<UpdateRelationshipResponse>;
export type ValidationExceptionReason =
  | "REQUEST_VALIDATION_FAILED"
  | "BUSINESS_VALIDATION_FAILED"
  | (string & {});
const ValidationExceptionReason = S.String;

export interface ValidationExceptionField {
  name: string;
  code: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c7, 6);
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
  input: AcceptChannelHandshakeRequest,
  output: AcceptChannelHandshakeResponse,
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
  input: CancelChannelHandshakeRequest,
  output: CancelChannelHandshakeResponse,
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
  input: CreateChannelHandshakeRequest,
  output: CreateChannelHandshakeResponse,
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
  input: CreateProgramManagementAccountRequest,
  output: CreateProgramManagementAccountResponse,
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
  input: CreateRelationshipRequest,
  output: CreateRelationshipResponse,
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
  input: DeleteProgramManagementAccountRequest,
  output: DeleteProgramManagementAccountResponse,
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
  input: DeleteRelationshipRequest,
  output: DeleteRelationshipResponse,
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
  input: GetRelationshipRequest,
  output: GetRelationshipResponse,
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
  input: ListChannelHandshakesRequest,
  output: ListChannelHandshakesResponse,
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
  input: ListProgramManagementAccountsRequest,
  output: ListProgramManagementAccountsResponse,
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
  input: ListRelationshipsRequest,
  output: ListRelationshipsResponse,
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
  input: RejectChannelHandshakeRequest,
  output: RejectChannelHandshakeResponse,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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
  input: UntagResourceRequest,
  output: UntagResourceResponse,
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
  input: UpdateProgramManagementAccountRequest,
  output: UpdateProgramManagementAccountResponse,
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
  input: UpdateRelationshipRequest,
  output: UpdateRelationshipResponse,
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
          status: S.optional(HandshakeStatus),
        }),
      ).annotate({
        identifier: "AcceptChannelHandshakeDetail",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ channelHandshakeDetail: S.optional(AcceptChannelHandshakeDetail) }),
      ).annotate({
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
          servicePeriodType: ServicePeriodType,
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
        /*@__PURE__*/ S.Struct({ startServicePeriodPayload: StartServicePeriodPayload }),
        /*@__PURE__*/ S.Struct({ revokeServicePeriodPayload: RevokeServicePeriodPayload }),
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
      return S.Array(Tag);
    case 1:
      return S.suspend(() =>
        S.Struct({
          handshakeType: HandshakeType,
          catalog: S.String,
          associatedResourceIdentifier: S.String,
          payload: S.optional(ChannelHandshakePayload),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagList),
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
      return S.suspend(() =>
        S.Struct({ channelHandshakeDetail: S.optional(CreateChannelHandshakeDetail) }),
      ).annotate({
        identifier: "CreateChannelHandshakeResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          catalog: S.String,
          program: Program,
          displayName: S.String,
          accountId: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagList),
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
          programManagementAccountDetail: S.optional(CreateProgramManagementAccountDetail),
        }),
      ).annotate({
        identifier: "CreateProgramManagementAccountResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          coverage: Coverage,
          tamLocation: S.String,
          chargeAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResoldEnterprise" });
    case 7:
      return S.suspend(() =>
        S.Struct({ coverage: Coverage, provider: S.optional(Provider), tamLocation: S.String }),
      ).annotate({ identifier: "PartnerLedSupport" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ resoldEnterprise: ResoldEnterprise }),
        /*@__PURE__*/ S.Struct({ partnerLedSupport: PartnerLedSupport }),
        /*@__PURE__*/ S.Struct({ resoldUnifiedOperations: ResoldUnifiedOperations }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          catalog: S.String,
          associationType: AssociationType,
          programManagementAccountIdentifier: S.String,
          associatedAccountId: S.String,
          displayName: S.String,
          resaleAccountModel: S.optional(ResaleAccountModel),
          sector: Sector,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagList),
          requestedSupportPlan: S.optional(SupportPlan),
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
      return S.suspend(() =>
        S.Struct({ relationshipDetail: S.optional(CreateRelationshipDetail) }),
      ).annotate({
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
          associationType: S.optional(AssociationType),
          programManagementAccountId: S.optional(S.String),
          associatedAccountId: S.optional(S.String),
          displayName: S.optional(S.String),
          resaleAccountModel: S.optional(ResaleAccountModel),
          sector: S.optional(Sector),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          startDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "RelationshipDetail" });
    case 2:
      return S.suspend(() =>
        S.Struct({ relationshipDetail: S.optional(RelationshipDetail) }),
      ).annotate({ identifier: "GetRelationshipResponse" });
    case 3:
      return S.Array(HandshakeStatus);
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ servicePeriodTypes: S.optional(ServicePeriodTypeList) }),
      ).annotate({
        identifier: "StartServicePeriodTypeFilters",
      });
    case 6:
      return S.suspend(() => S.Struct({ programs: S.optional(ProgramList) })).annotate({
        identifier: "ProgramManagementAccountTypeFilters",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ startServicePeriodTypeFilters: StartServicePeriodTypeFilters }),
        /*@__PURE__*/ S.Struct({ revokeServicePeriodTypeFilters: RevokeServicePeriodTypeFilters }),
        /*@__PURE__*/ S.Struct({
          programManagementAccountTypeFilters: ProgramManagementAccountTypeFilters,
        }),
      ]);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ sortOrder: SortOrder, sortBy: StartServicePeriodTypeSortName }),
      ).annotate({
        identifier: "StartServicePeriodTypeSort",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ startServicePeriodTypeSort: StartServicePeriodTypeSort }),
        /*@__PURE__*/ S.Struct({ revokeServicePeriodTypeSort: RevokeServicePeriodTypeSort }),
        /*@__PURE__*/ S.Struct({
          programManagementAccountTypeSort: ProgramManagementAccountTypeSort,
        }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          handshakeType: HandshakeType,
          catalog: S.String,
          participantType: ParticipantType,
          maxResults: S.optional(S.Number),
          statuses: S.optional(HandshakeStatusList),
          associatedResourceIdentifiers: S.optional(AssociatedResourceIdentifierList),
          handshakeTypeFilters: S.optional(ListChannelHandshakesTypeFilters),
          handshakeTypeSort: S.optional(ListChannelHandshakesTypeSort),
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
          servicePeriodType: S.optional(ServicePeriodType),
          minimumNoticeDays: S.optional(S.String),
          startDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "StartServicePeriodHandshakeDetail",
      });
    case 4:
      return S.suspend(() => S.Struct({ program: S.optional(Program) })).annotate({
        identifier: "ProgramManagementAccountHandshakeDetail",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          startServicePeriodHandshakeDetail: StartServicePeriodHandshakeDetail,
        }),
        /*@__PURE__*/ S.Struct({
          revokeServicePeriodHandshakeDetail: RevokeServicePeriodHandshakeDetail,
        }),
        /*@__PURE__*/ S.Struct({
          programManagementAccountHandshakeDetail: ProgramManagementAccountHandshakeDetail,
        }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          catalog: S.optional(S.String),
          handshakeType: S.optional(HandshakeType),
          ownerAccountId: S.optional(S.String),
          senderAccountId: S.optional(S.String),
          senderDisplayName: S.optional(S.String),
          receiverAccountId: S.optional(S.String),
          associatedResourceId: S.optional(S.String),
          detail: S.optional(HandshakeDetail),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          status: S.optional(HandshakeStatus),
        }),
      ).annotate({ identifier: "ChannelHandshakeSummary" });
    case 7:
      return S.Array(ChannelHandshakeSummary);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ items: S.optional(ChannelHandshakeSummaries), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListChannelHandshakesResponse",
      });
    case 1:
      return S.Array(ProgramManagementAccountStatus);
    case 2:
      return S.suspend(() =>
        S.Struct({
          catalog: S.String,
          maxResults: S.optional(S.Number),
          displayNames: S.optional(ProgramManagementAccountDisplayNameList),
          programs: S.optional(ProgramList),
          accountIds: S.optional(AccountIdList),
          statuses: S.optional(ProgramManagementAccountStatusList),
          sort: S.optional(ListProgramManagementAccountsSortBase),
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
          program: S.optional(Program),
          displayName: S.optional(S.String),
          accountId: S.optional(S.String),
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          startDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          status: S.optional(ProgramManagementAccountStatus),
        }),
      ).annotate({
        identifier: "ProgramManagementAccountSummary",
      });
    case 4:
      return S.Array(ProgramManagementAccountSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(ProgramManagementAccountSummaries),
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
          associatedAccountIds: S.optional(AccountIdList),
          associationTypes: S.optional(AssociationTypeList),
          displayNames: S.optional(RelationshipDisplayNameList),
          programManagementAccountIdentifiers: S.optional(ProgramManagementAccountIdentifierList),
          sort: S.optional(ListRelationshipsSortBase),
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
          associationType: S.optional(AssociationType),
          programManagementAccountId: S.optional(S.String),
          associatedAccountId: S.optional(S.String),
          displayName: S.optional(S.String),
          sector: S.optional(Sector),
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
      return S.Array(RelationshipSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ items: S.optional(RelationshipSummaries), nextToken: S.optional(S.String) }),
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
      return S.suspend(() => S.Struct({ tags: S.optional(TagList) })).annotate({
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
        S.Struct({ resourceArn: S.String, tags: TagList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/TagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tagKeys: TagKeyList }).pipe(
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
          programManagementAccountDetail: S.optional(UpdateProgramManagementAccountDetail),
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
          requestedSupportPlan: S.optional(SupportPlan),
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
      return S.suspend(() =>
        S.Struct({ relationshipDetail: S.optional(UpdateRelationshipDetail) }),
      ).annotate({
        identifier: "UpdateRelationshipResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.String, code: S.String, message: S.String }),
      ).annotate({ identifier: "ValidationExceptionField" });
    case 6:
      return S.Array(ValidationExceptionField);
  }
}
