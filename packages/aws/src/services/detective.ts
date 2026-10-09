import * as API from "@distilled.cloud/core/api";
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
  sdkId: "Detective",
  serviceShapeName: "AmazonDetective",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "detective" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-10-26");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseDualStack = false, UseFIPS = false, Endpoint, Region } = p;
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
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(
            `https://detective.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e(
            `https://detective-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(
            `https://detective.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e(
            `https://detective-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://api.detective-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true && UseDualStack === false) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://api.detective-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseFIPS === false && UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://api.detective.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://api.detective.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ErrorCode: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ErrorCode).annotate({ identifier: "ErrorCode" }),
      ),
      ErrorCodeReason: /*@__PURE__*/ S.optional(S.String),
      SubErrorCode: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ErrorCode).annotate({ identifier: "ErrorCode" }),
      ),
      SubErrorCodeReason: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Resources: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ResourceList).annotate({ identifier: "ResourceList" }),
      ),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()(
    "TooManyRequestsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ErrorCode: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ErrorCode).annotate({ identifier: "ErrorCode" }),
      ),
      ErrorCodeReason: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type GraphArn = string;
export interface AcceptInvitationRequest {
  GraphArn: string;
}
const AcceptInvitationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphArn: S.String }).pipe(
    T.all(T.Http({ method: "PUT", uri: "/invitation" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "AcceptInvitationRequest" }) as any as S.Schema<AcceptInvitationRequest>;
export interface AcceptInvitationResponse {}
const AcceptInvitationResponse = /*@__PURE__*/ S.suspend(() => S.Struct({})).annotate({
  identifier: "AcceptInvitationResponse",
}) as any as S.Schema<AcceptInvitationResponse>;
export type AccountId = string;
export type AccountIdExtendedList = string[];
const AccountIdExtendedList = /*@__PURE__*/ S.Array(S.String);
export interface BatchGetGraphMemberDatasourcesRequest {
  GraphArn: string;
  AccountIds: string[];
}
const BatchGetGraphMemberDatasourcesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphArn: S.String, AccountIds: AccountIdExtendedList }).pipe(
    T.all(T.Http({ method: "POST", uri: "/graph/datasources/get" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "BatchGetGraphMemberDatasourcesRequest",
}) as any as S.Schema<BatchGetGraphMemberDatasourcesRequest>;
export type DatasourcePackage =
  | "DETECTIVE_CORE"
  | "EKS_AUDIT"
  | "ASFF_SECURITYHUB_FINDING"
  | (string & {});
const DatasourcePackage = S.String;

export type DatasourcePackageIngestState = "STARTED" | "STOPPED" | "DISABLED" | (string & {});
const DatasourcePackageIngestState = S.String;

export interface TimestampForCollection {
  Timestamp?: Date;
}
const TimestampForCollection = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))) }),
).annotate({ identifier: "TimestampForCollection" }) as any as S.Schema<TimestampForCollection>;
export type LastIngestStateChangeDates = {
  [key in DatasourcePackageIngestState]?: TimestampForCollection;
};
const LastIngestStateChangeDates = /*@__PURE__*/ S.Record(
  DatasourcePackageIngestState,
  /*@__PURE__*/ TimestampForCollection.pipe(S.optional),
);
export type DatasourcePackageIngestHistory = {
  [key in DatasourcePackage]?: { [key: string]: TimestampForCollection | undefined };
};
const DatasourcePackageIngestHistory = /*@__PURE__*/ S.Record(
  DatasourcePackage,
  /*@__PURE__*/ LastIngestStateChangeDates.pipe(S.optional),
);
export interface MembershipDatasources {
  AccountId?: string;
  GraphArn?: string;
  DatasourcePackageIngestHistory?: {
    [key: string]: { [key: string]: TimestampForCollection | undefined } | undefined;
  };
}
const MembershipDatasources = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AccountId: S.optional(S.String),
    GraphArn: S.optional(S.String),
    DatasourcePackageIngestHistory: S.optional(DatasourcePackageIngestHistory),
  }),
).annotate({ identifier: "MembershipDatasources" }) as any as S.Schema<MembershipDatasources>;
export type MembershipDatasourcesList = MembershipDatasources[];
const MembershipDatasourcesList = /*@__PURE__*/ S.Array(MembershipDatasources);
export type UnprocessedReason = string;
export interface UnprocessedAccount {
  AccountId?: string;
  Reason?: string;
}
const UnprocessedAccount = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AccountId: S.optional(S.String), Reason: S.optional(S.String) }),
).annotate({ identifier: "UnprocessedAccount" }) as any as S.Schema<UnprocessedAccount>;
export type UnprocessedAccountList = UnprocessedAccount[];
const UnprocessedAccountList = /*@__PURE__*/ S.Array(UnprocessedAccount);
export interface BatchGetGraphMemberDatasourcesResponse {
  MemberDatasources?: MembershipDatasources[];
  UnprocessedAccounts?: UnprocessedAccount[];
}
const BatchGetGraphMemberDatasourcesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    MemberDatasources: S.optional(MembershipDatasourcesList),
    UnprocessedAccounts: S.optional(UnprocessedAccountList),
  }),
).annotate({
  identifier: "BatchGetGraphMemberDatasourcesResponse",
}) as any as S.Schema<BatchGetGraphMemberDatasourcesResponse>;
export type GraphArnList = string[];
const GraphArnList = AccountIdExtendedList as any as S.Schema<GraphArnList>;
export interface BatchGetMembershipDatasourcesRequest {
  GraphArns: string[];
}
const BatchGetMembershipDatasourcesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphArns: GraphArnList }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/membership/datasources/get" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "BatchGetMembershipDatasourcesRequest",
}) as any as S.Schema<BatchGetMembershipDatasourcesRequest>;
export interface UnprocessedGraph {
  GraphArn?: string;
  Reason?: string;
}
const UnprocessedGraph = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphArn: S.optional(S.String), Reason: S.optional(S.String) }),
).annotate({ identifier: "UnprocessedGraph" }) as any as S.Schema<UnprocessedGraph>;
export type UnprocessedGraphList = UnprocessedGraph[];
const UnprocessedGraphList = /*@__PURE__*/ S.Array(UnprocessedGraph);
export interface BatchGetMembershipDatasourcesResponse {
  MembershipDatasources?: MembershipDatasources[];
  UnprocessedGraphs?: UnprocessedGraph[];
}
const BatchGetMembershipDatasourcesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    MembershipDatasources: S.optional(MembershipDatasourcesList),
    UnprocessedGraphs: S.optional(UnprocessedGraphList),
  }),
).annotate({
  identifier: "BatchGetMembershipDatasourcesResponse",
}) as any as S.Schema<BatchGetMembershipDatasourcesResponse>;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
export interface CreateGraphRequest {
  Tags?: { [key: string]: string | undefined };
}
const CreateGraphRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Tags: S.optional(TagMap) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/graph" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "CreateGraphRequest" }) as any as S.Schema<CreateGraphRequest>;
export interface CreateGraphResponse {
  GraphArn?: string;
}
const CreateGraphResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphArn: S.optional(S.String) }),
).annotate({ identifier: "CreateGraphResponse" }) as any as S.Schema<CreateGraphResponse>;
export type EmailMessage = string | redacted.Redacted<string>;
export type EmailAddress = string | redacted.Redacted<string>;
export interface Account {
  AccountId: string;
  EmailAddress: string | redacted.Redacted<string>;
}
const Account = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AccountId: S.String, EmailAddress: SensitiveString }),
).annotate({ identifier: "Account" }) as any as S.Schema<Account>;
export type AccountList = Account[];
const AccountList = /*@__PURE__*/ S.Array(Account);
export interface CreateMembersRequest {
  GraphArn: string;
  Message?: string | redacted.Redacted<string>;
  DisableEmailNotification?: boolean;
  Accounts: Account[];
}
const CreateMembersRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GraphArn: S.String,
    Message: S.optional(SensitiveString),
    DisableEmailNotification: S.optional(S.Boolean),
    Accounts: AccountList,
  }).pipe(T.all(T.Http({ method: "POST", uri: "/graph/members" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "CreateMembersRequest" }) as any as S.Schema<CreateMembersRequest>;
export type MemberStatus =
  | "INVITED"
  | "VERIFICATION_IN_PROGRESS"
  | "VERIFICATION_FAILED"
  | "ENABLED"
  | "ACCEPTED_BUT_DISABLED"
  | (string & {});
const MemberStatus = S.String;

export type MemberDisabledReason = "VOLUME_TOO_HIGH" | "VOLUME_UNKNOWN" | (string & {});
const MemberDisabledReason = S.String;

export type ByteValue = number;
export type Percentage = number;
export type InvitationType = "INVITATION" | "ORGANIZATION" | (string & {});
const InvitationType = S.String;

export interface DatasourcePackageUsageInfo {
  VolumeUsageInBytes?: number;
  VolumeUsageUpdateTime?: Date;
}
const DatasourcePackageUsageInfo = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    VolumeUsageInBytes: S.optional(S.Number),
    VolumeUsageUpdateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
  }),
).annotate({
  identifier: "DatasourcePackageUsageInfo",
}) as any as S.Schema<DatasourcePackageUsageInfo>;
export type VolumeUsageByDatasourcePackage = {
  [key in DatasourcePackage]?: DatasourcePackageUsageInfo;
};
const VolumeUsageByDatasourcePackage = /*@__PURE__*/ S.Record(
  DatasourcePackage,
  /*@__PURE__*/ DatasourcePackageUsageInfo.pipe(S.optional),
);
export type DatasourcePackageIngestStates = {
  [key in DatasourcePackage]?: DatasourcePackageIngestState;
};
const DatasourcePackageIngestStates = /*@__PURE__*/ S.Record(
  DatasourcePackage,
  /*@__PURE__*/ DatasourcePackageIngestState.pipe(S.optional),
);
export interface MemberDetail {
  AccountId?: string;
  EmailAddress?: string | redacted.Redacted<string>;
  GraphArn?: string;
  MasterId?: string;
  AdministratorId?: string;
  Status?: MemberStatus;
  DisabledReason?: MemberDisabledReason;
  InvitedTime?: Date;
  UpdatedTime?: Date;
  VolumeUsageInBytes?: number;
  VolumeUsageUpdatedTime?: Date;
  PercentOfGraphUtilization?: number;
  PercentOfGraphUtilizationUpdatedTime?: Date;
  InvitationType?: InvitationType;
  VolumeUsageByDatasourcePackage?: { [key: string]: DatasourcePackageUsageInfo | undefined };
  DatasourcePackageIngestStates?: { [key: string]: DatasourcePackageIngestState | undefined };
}
const MemberDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AccountId: S.optional(S.String),
    EmailAddress: S.optional(SensitiveString),
    GraphArn: S.optional(S.String),
    MasterId: S.optional(S.String),
    AdministratorId: S.optional(S.String),
    Status: S.optional(MemberStatus),
    DisabledReason: S.optional(MemberDisabledReason),
    InvitedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
    UpdatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
    VolumeUsageInBytes: S.optional(S.Number),
    VolumeUsageUpdatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
    PercentOfGraphUtilization: S.optional(S.Number),
    PercentOfGraphUtilizationUpdatedTime: S.optional(
      T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ),
    InvitationType: S.optional(InvitationType),
    VolumeUsageByDatasourcePackage: S.optional(VolumeUsageByDatasourcePackage),
    DatasourcePackageIngestStates: S.optional(DatasourcePackageIngestStates),
  }),
).annotate({ identifier: "MemberDetail" }) as any as S.Schema<MemberDetail>;
export type MemberDetailList = MemberDetail[];
const MemberDetailList = /*@__PURE__*/ S.Array(MemberDetail);
export interface CreateMembersResponse {
  Members?: MemberDetail[];
  UnprocessedAccounts?: UnprocessedAccount[];
}
const CreateMembersResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Members: S.optional(MemberDetailList),
    UnprocessedAccounts: S.optional(UnprocessedAccountList),
  }),
).annotate({ identifier: "CreateMembersResponse" }) as any as S.Schema<CreateMembersResponse>;
export interface DeleteGraphRequest {
  GraphArn: string;
}
const DeleteGraphRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphArn: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/graph/removal" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "DeleteGraphRequest" }) as any as S.Schema<DeleteGraphRequest>;
export interface DeleteGraphResponse {}
const DeleteGraphResponse = AcceptInvitationResponse as any as S.Schema<DeleteGraphResponse>;
export type AccountIdList = string[];
const AccountIdList = AccountIdExtendedList as any as S.Schema<AccountIdList>;
export interface DeleteMembersRequest {
  GraphArn: string;
  AccountIds: string[];
}
const DeleteMembersRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphArn: S.String, AccountIds: AccountIdList }).pipe(
    T.all(T.Http({ method: "POST", uri: "/graph/members/removal" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "DeleteMembersRequest" }) as any as S.Schema<DeleteMembersRequest>;
export interface DeleteMembersResponse {
  AccountIds?: string[];
  UnprocessedAccounts?: UnprocessedAccount[];
}
const DeleteMembersResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AccountIds: S.optional(AccountIdList),
    UnprocessedAccounts: S.optional(UnprocessedAccountList),
  }),
).annotate({ identifier: "DeleteMembersResponse" }) as any as S.Schema<DeleteMembersResponse>;
export interface DescribeOrganizationConfigurationRequest {
  GraphArn: string;
}
const DescribeOrganizationConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphArn: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/orgs/describeOrganizationConfiguration" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DescribeOrganizationConfigurationRequest",
}) as any as S.Schema<DescribeOrganizationConfigurationRequest>;
export interface DescribeOrganizationConfigurationResponse {
  AutoEnable?: boolean;
}
const DescribeOrganizationConfigurationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AutoEnable: S.optional(S.Boolean) }),
).annotate({
  identifier: "DescribeOrganizationConfigurationResponse",
}) as any as S.Schema<DescribeOrganizationConfigurationResponse>;
export interface DisableOrganizationAdminAccountRequest {}
const DisableOrganizationAdminAccountRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({}).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/orgs/disableAdminAccount" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DisableOrganizationAdminAccountRequest",
}) as any as S.Schema<DisableOrganizationAdminAccountRequest>;
export interface DisableOrganizationAdminAccountResponse {}
const DisableOrganizationAdminAccountResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({}),
).annotate({
  identifier: "DisableOrganizationAdminAccountResponse",
}) as any as S.Schema<DisableOrganizationAdminAccountResponse>;
export interface DisassociateMembershipRequest {
  GraphArn: string;
}
const DisassociateMembershipRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphArn: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/membership/removal" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "DisassociateMembershipRequest",
}) as any as S.Schema<DisassociateMembershipRequest>;
export interface DisassociateMembershipResponse {}
const DisassociateMembershipResponse =
  AcceptInvitationResponse as any as S.Schema<DisassociateMembershipResponse>;
export interface EnableOrganizationAdminAccountRequest {
  AccountId: string;
}
const EnableOrganizationAdminAccountRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ AccountId: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/orgs/enableAdminAccount" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "EnableOrganizationAdminAccountRequest",
}) as any as S.Schema<EnableOrganizationAdminAccountRequest>;
export interface EnableOrganizationAdminAccountResponse {}
const EnableOrganizationAdminAccountResponse =
  DisableOrganizationAdminAccountResponse as any as S.Schema<EnableOrganizationAdminAccountResponse>;
export type InvestigationId = string;
export interface GetInvestigationRequest {
  GraphArn: string;
  InvestigationId: string;
}
const GetInvestigationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphArn: S.String, InvestigationId: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/investigations/getInvestigation" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "GetInvestigationRequest" }) as any as S.Schema<GetInvestigationRequest>;
export type EntityArn = string;
export type EntityType = "IAM_ROLE" | "IAM_USER" | (string & {});
const EntityType = S.String;

export type Status = "RUNNING" | "FAILED" | "SUCCESSFUL" | (string & {});
const Status = S.String;

export type Severity = "INFORMATIONAL" | "LOW" | "MEDIUM" | "HIGH" | "CRITICAL" | (string & {});
const Severity = S.String;

export type State = "ACTIVE" | "ARCHIVED" | (string & {});
const State = S.String;

export interface GetInvestigationResponse {
  GraphArn?: string;
  InvestigationId?: string;
  EntityArn?: string;
  EntityType?: EntityType;
  CreatedTime?: Date;
  ScopeStartTime?: Date;
  ScopeEndTime?: Date;
  Status?: Status;
  Severity?: Severity;
  State?: State;
}
const GetInvestigationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GraphArn: S.optional(S.String),
    InvestigationId: S.optional(S.String),
    EntityArn: S.optional(S.String),
    EntityType: S.optional(EntityType),
    CreatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
    ScopeStartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
    ScopeEndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
    Status: S.optional(Status),
    Severity: S.optional(Severity),
    State: S.optional(State),
  }),
).annotate({ identifier: "GetInvestigationResponse" }) as any as S.Schema<GetInvestigationResponse>;
export interface GetMembersRequest {
  GraphArn: string;
  AccountIds: string[];
}
const GetMembersRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphArn: S.String, AccountIds: AccountIdList }).pipe(
    T.all(T.Http({ method: "POST", uri: "/graph/members/get" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetMembersRequest" }) as any as S.Schema<GetMembersRequest>;
export interface GetMembersResponse {
  MemberDetails?: MemberDetail[];
  UnprocessedAccounts?: UnprocessedAccount[];
}
const GetMembersResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    MemberDetails: S.optional(MemberDetailList),
    UnprocessedAccounts: S.optional(UnprocessedAccountList),
  }),
).annotate({ identifier: "GetMembersResponse" }) as any as S.Schema<GetMembersResponse>;
export type PaginationToken = string;
export type MemberResultsLimit = number;
export interface ListDatasourcePackagesRequest {
  GraphArn: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListDatasourcePackagesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GraphArn: S.String,
    NextToken: S.optional(S.String),
    MaxResults: S.optional(S.Number),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/graph/datasources/list" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ListDatasourcePackagesRequest",
}) as any as S.Schema<ListDatasourcePackagesRequest>;
export interface DatasourcePackageIngestDetail {
  DatasourcePackageIngestState?: DatasourcePackageIngestState;
  LastIngestStateChange?: { [key: string]: TimestampForCollection | undefined };
}
const DatasourcePackageIngestDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DatasourcePackageIngestState: S.optional(DatasourcePackageIngestState),
    LastIngestStateChange: S.optional(LastIngestStateChangeDates),
  }),
).annotate({
  identifier: "DatasourcePackageIngestDetail",
}) as any as S.Schema<DatasourcePackageIngestDetail>;
export type DatasourcePackageIngestDetails = {
  [key in DatasourcePackage]?: DatasourcePackageIngestDetail;
};
const DatasourcePackageIngestDetails = /*@__PURE__*/ S.Record(
  DatasourcePackage,
  /*@__PURE__*/ DatasourcePackageIngestDetail.pipe(S.optional),
);
export interface ListDatasourcePackagesResponse {
  DatasourcePackages?: { [key: string]: DatasourcePackageIngestDetail | undefined };
  NextToken?: string;
}
const ListDatasourcePackagesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    DatasourcePackages: S.optional(DatasourcePackageIngestDetails),
    NextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListDatasourcePackagesResponse",
}) as any as S.Schema<ListDatasourcePackagesResponse>;
export interface ListGraphsRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListGraphsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/graphs/list" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "ListGraphsRequest" }) as any as S.Schema<ListGraphsRequest>;
export interface Graph {
  Arn?: string;
  CreatedTime?: Date;
}
const Graph = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Arn: S.optional(S.String),
    CreatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
  }),
).annotate({ identifier: "Graph" }) as any as S.Schema<Graph>;
export type GraphList = Graph[];
const GraphList = /*@__PURE__*/ S.Array(Graph);
export interface ListGraphsResponse {
  GraphList?: Graph[];
  NextToken?: string;
}
const ListGraphsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphList: S.optional(GraphList), NextToken: S.optional(S.String) }),
).annotate({ identifier: "ListGraphsResponse" }) as any as S.Schema<ListGraphsResponse>;
export type IndicatorType =
  | "TTP_OBSERVED"
  | "IMPOSSIBLE_TRAVEL"
  | "FLAGGED_IP_ADDRESS"
  | "NEW_GEOLOCATION"
  | "NEW_ASO"
  | "NEW_USER_AGENT"
  | "RELATED_FINDING"
  | "RELATED_FINDING_GROUP"
  | (string & {});
const IndicatorType = S.String;

export type AiPaginationToken = string;
export type MaxResults = number;
export interface ListIndicatorsRequest {
  GraphArn: string;
  InvestigationId: string;
  IndicatorType?: IndicatorType;
  NextToken?: string;
  MaxResults?: number;
}
const ListIndicatorsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GraphArn: S.String,
    InvestigationId: S.String,
    IndicatorType: S.optional(IndicatorType),
    NextToken: S.optional(S.String),
    MaxResults: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/investigations/listIndicators" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "ListIndicatorsRequest" }) as any as S.Schema<ListIndicatorsRequest>;
export type Tactic = string;
export type Technique = string;
export type Procedure = string;
export type IpAddress = string;
export type APIName = string;
export type APISuccessCount = number;
export type APIFailureCount = number;
export interface TTPsObservedDetail {
  Tactic?: string;
  Technique?: string;
  Procedure?: string;
  IpAddress?: string;
  APIName?: string;
  APISuccessCount?: number;
  APIFailureCount?: number;
}
const TTPsObservedDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Tactic: S.optional(S.String),
    Technique: S.optional(S.String),
    Procedure: S.optional(S.String),
    IpAddress: S.optional(S.String),
    APIName: S.optional(S.String),
    APISuccessCount: S.optional(S.Number),
    APIFailureCount: S.optional(S.Number),
  }),
).annotate({ identifier: "TTPsObservedDetail" }) as any as S.Schema<TTPsObservedDetail>;
export type Location = string;
export type HourlyTimeDelta = number;
export interface ImpossibleTravelDetail {
  StartingIpAddress?: string;
  EndingIpAddress?: string;
  StartingLocation?: string;
  EndingLocation?: string;
  HourlyTimeDelta?: number;
}
const ImpossibleTravelDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    StartingIpAddress: S.optional(S.String),
    EndingIpAddress: S.optional(S.String),
    StartingLocation: S.optional(S.String),
    EndingLocation: S.optional(S.String),
    HourlyTimeDelta: S.optional(S.Number),
  }),
).annotate({ identifier: "ImpossibleTravelDetail" }) as any as S.Schema<ImpossibleTravelDetail>;
export type Reason = "AWS_THREAT_INTELLIGENCE" | (string & {});
const Reason = S.String;

export interface FlaggedIpAddressDetail {
  IpAddress?: string;
  Reason?: Reason;
}
const FlaggedIpAddressDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ IpAddress: S.optional(S.String), Reason: S.optional(Reason) }),
).annotate({ identifier: "FlaggedIpAddressDetail" }) as any as S.Schema<FlaggedIpAddressDetail>;
export type IsNewForEntireAccount = boolean;
export interface NewGeolocationDetail {
  Location?: string;
  IpAddress?: string;
  IsNewForEntireAccount?: boolean;
}
const NewGeolocationDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Location: S.optional(S.String),
    IpAddress: S.optional(S.String),
    IsNewForEntireAccount: S.optional(S.Boolean),
  }),
).annotate({ identifier: "NewGeolocationDetail" }) as any as S.Schema<NewGeolocationDetail>;
export type Aso = string;
export interface NewAsoDetail {
  Aso?: string;
  IsNewForEntireAccount?: boolean;
}
const NewAsoDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Aso: S.optional(S.String), IsNewForEntireAccount: S.optional(S.Boolean) }),
).annotate({ identifier: "NewAsoDetail" }) as any as S.Schema<NewAsoDetail>;
export type UserAgent = string;
export interface NewUserAgentDetail {
  UserAgent?: string;
  IsNewForEntireAccount?: boolean;
}
const NewUserAgentDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ UserAgent: S.optional(S.String), IsNewForEntireAccount: S.optional(S.Boolean) }),
).annotate({ identifier: "NewUserAgentDetail" }) as any as S.Schema<NewUserAgentDetail>;
export type Type = string;
export interface RelatedFindingDetail {
  Arn?: string;
  Type?: string;
  IpAddress?: string;
}
const RelatedFindingDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Arn: S.optional(S.String),
    Type: S.optional(S.String),
    IpAddress: S.optional(S.String),
  }),
).annotate({ identifier: "RelatedFindingDetail" }) as any as S.Schema<RelatedFindingDetail>;
export type Id = string;
export interface RelatedFindingGroupDetail {
  Id?: string;
}
const RelatedFindingGroupDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Id: S.optional(S.String) }),
).annotate({
  identifier: "RelatedFindingGroupDetail",
}) as any as S.Schema<RelatedFindingGroupDetail>;
export interface IndicatorDetail {
  TTPsObservedDetail?: TTPsObservedDetail;
  ImpossibleTravelDetail?: ImpossibleTravelDetail;
  FlaggedIpAddressDetail?: FlaggedIpAddressDetail;
  NewGeolocationDetail?: NewGeolocationDetail;
  NewAsoDetail?: NewAsoDetail;
  NewUserAgentDetail?: NewUserAgentDetail;
  RelatedFindingDetail?: RelatedFindingDetail;
  RelatedFindingGroupDetail?: RelatedFindingGroupDetail;
}
const IndicatorDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    TTPsObservedDetail: S.optional(TTPsObservedDetail),
    ImpossibleTravelDetail: S.optional(ImpossibleTravelDetail),
    FlaggedIpAddressDetail: S.optional(FlaggedIpAddressDetail),
    NewGeolocationDetail: S.optional(NewGeolocationDetail),
    NewAsoDetail: S.optional(NewAsoDetail),
    NewUserAgentDetail: S.optional(NewUserAgentDetail),
    RelatedFindingDetail: S.optional(RelatedFindingDetail),
    RelatedFindingGroupDetail: S.optional(RelatedFindingGroupDetail),
  }),
).annotate({ identifier: "IndicatorDetail" }) as any as S.Schema<IndicatorDetail>;
export interface Indicator {
  IndicatorType?: IndicatorType;
  IndicatorDetail?: IndicatorDetail;
}
const Indicator = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    IndicatorType: S.optional(IndicatorType),
    IndicatorDetail: S.optional(IndicatorDetail),
  }),
).annotate({ identifier: "Indicator" }) as any as S.Schema<Indicator>;
export type Indicators = Indicator[];
const Indicators = /*@__PURE__*/ S.Array(Indicator);
export interface ListIndicatorsResponse {
  GraphArn?: string;
  InvestigationId?: string;
  NextToken?: string;
  Indicators?: Indicator[];
}
const ListIndicatorsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GraphArn: S.optional(S.String),
    InvestigationId: S.optional(S.String),
    NextToken: S.optional(S.String),
    Indicators: S.optional(Indicators),
  }),
).annotate({ identifier: "ListIndicatorsResponse" }) as any as S.Schema<ListIndicatorsResponse>;
export type Value = string;
export interface StringFilter {
  Value: string;
}
const StringFilter = /*@__PURE__*/ S.suspend(() => S.Struct({ Value: S.String })).annotate({
  identifier: "StringFilter",
}) as any as S.Schema<StringFilter>;
export interface DateFilter {
  StartInclusive: Date;
  EndInclusive: Date;
}
const DateFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    StartInclusive: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    EndInclusive: T.DateFromString.pipe(T.TimestampFormat("date-time")),
  }),
).annotate({ identifier: "DateFilter" }) as any as S.Schema<DateFilter>;
export interface FilterCriteria {
  Severity?: StringFilter;
  Status?: StringFilter;
  State?: StringFilter;
  EntityArn?: StringFilter;
  CreatedTime?: DateFilter;
}
const FilterCriteria = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    Severity: S.optional(StringFilter),
    Status: S.optional(StringFilter),
    State: S.optional(StringFilter),
    EntityArn: S.optional(StringFilter),
    CreatedTime: S.optional(DateFilter),
  }),
).annotate({ identifier: "FilterCriteria" }) as any as S.Schema<FilterCriteria>;
export type Field = "SEVERITY" | "STATUS" | "CREATED_TIME" | (string & {});
const Field = S.String;

export type SortOrder = "ASC" | "DESC" | (string & {});
const SortOrder = S.String;

export interface SortCriteria {
  Field?: Field;
  SortOrder?: SortOrder;
}
const SortCriteria = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Field: S.optional(Field), SortOrder: S.optional(SortOrder) }),
).annotate({ identifier: "SortCriteria" }) as any as S.Schema<SortCriteria>;
export interface ListInvestigationsRequest {
  GraphArn: string;
  NextToken?: string;
  MaxResults?: number;
  FilterCriteria?: FilterCriteria;
  SortCriteria?: SortCriteria;
}
const ListInvestigationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GraphArn: S.String,
    NextToken: S.optional(S.String),
    MaxResults: S.optional(S.Number),
    FilterCriteria: S.optional(FilterCriteria),
    SortCriteria: S.optional(SortCriteria),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/investigations/listInvestigations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListInvestigationsRequest",
}) as any as S.Schema<ListInvestigationsRequest>;
export interface InvestigationDetail {
  InvestigationId?: string;
  Severity?: Severity;
  Status?: Status;
  State?: State;
  CreatedTime?: Date;
  EntityArn?: string;
  EntityType?: EntityType;
}
const InvestigationDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    InvestigationId: S.optional(S.String),
    Severity: S.optional(Severity),
    Status: S.optional(Status),
    State: S.optional(State),
    CreatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
    EntityArn: S.optional(S.String),
    EntityType: S.optional(EntityType),
  }),
).annotate({ identifier: "InvestigationDetail" }) as any as S.Schema<InvestigationDetail>;
export type InvestigationDetails = InvestigationDetail[];
const InvestigationDetails = /*@__PURE__*/ S.Array(InvestigationDetail);
export interface ListInvestigationsResponse {
  InvestigationDetails?: InvestigationDetail[];
  NextToken?: string;
}
const ListInvestigationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    InvestigationDetails: S.optional(InvestigationDetails),
    NextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListInvestigationsResponse",
}) as any as S.Schema<ListInvestigationsResponse>;
export interface ListInvitationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListInvitationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/invitations/list" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "ListInvitationsRequest" }) as any as S.Schema<ListInvitationsRequest>;
export interface ListInvitationsResponse {
  Invitations?: MemberDetail[];
  NextToken?: string;
}
const ListInvitationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Invitations: S.optional(MemberDetailList), NextToken: S.optional(S.String) }),
).annotate({ identifier: "ListInvitationsResponse" }) as any as S.Schema<ListInvitationsResponse>;
export interface ListMembersRequest {
  GraphArn: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListMembersRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GraphArn: S.String,
    NextToken: S.optional(S.String),
    MaxResults: S.optional(S.Number),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/graph/members/list" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "ListMembersRequest" }) as any as S.Schema<ListMembersRequest>;
export interface ListMembersResponse {
  MemberDetails?: MemberDetail[];
  NextToken?: string;
}
const ListMembersResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ MemberDetails: S.optional(MemberDetailList), NextToken: S.optional(S.String) }),
).annotate({ identifier: "ListMembersResponse" }) as any as S.Schema<ListMembersResponse>;
export interface ListOrganizationAdminAccountsRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListOrganizationAdminAccountsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/orgs/adminAccountslist" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ListOrganizationAdminAccountsRequest",
}) as any as S.Schema<ListOrganizationAdminAccountsRequest>;
export interface Administrator {
  AccountId?: string;
  GraphArn?: string;
  DelegationTime?: Date;
}
const Administrator = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    AccountId: S.optional(S.String),
    GraphArn: S.optional(S.String),
    DelegationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
  }),
).annotate({ identifier: "Administrator" }) as any as S.Schema<Administrator>;
export type AdministratorList = Administrator[];
const AdministratorList = /*@__PURE__*/ S.Array(Administrator);
export interface ListOrganizationAdminAccountsResponse {
  Administrators?: Administrator[];
  NextToken?: string;
}
const ListOrganizationAdminAccountsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Administrators: S.optional(AdministratorList), NextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListOrganizationAdminAccountsResponse",
}) as any as S.Schema<ListOrganizationAdminAccountsResponse>;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
    T.all(T.Http({ method: "GET", uri: "/tags/{ResourceArn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ListTagsForResourceRequest",
}) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ Tags: S.optional(TagMap) }),
).annotate({
  identifier: "ListTagsForResourceResponse",
}) as any as S.Schema<ListTagsForResourceResponse>;
export interface RejectInvitationRequest {
  GraphArn: string;
}
const RejectInvitationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphArn: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/invitation/removal" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "RejectInvitationRequest" }) as any as S.Schema<RejectInvitationRequest>;
export interface RejectInvitationResponse {}
const RejectInvitationResponse =
  AcceptInvitationResponse as any as S.Schema<RejectInvitationResponse>;
export interface StartInvestigationRequest {
  GraphArn: string;
  EntityArn: string;
  ScopeStartTime: Date;
  ScopeEndTime: Date;
}
const StartInvestigationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    GraphArn: S.String,
    EntityArn: S.String,
    ScopeStartTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    ScopeEndTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/investigations/startInvestigation" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "StartInvestigationRequest",
}) as any as S.Schema<StartInvestigationRequest>;
export interface StartInvestigationResponse {
  InvestigationId?: string;
}
const StartInvestigationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ InvestigationId: S.optional(S.String) }),
).annotate({
  identifier: "StartInvestigationResponse",
}) as any as S.Schema<StartInvestigationResponse>;
export interface StartMonitoringMemberRequest {
  GraphArn: string;
  AccountId: string;
}
const StartMonitoringMemberRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphArn: S.String, AccountId: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/graph/member/monitoringstate" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "StartMonitoringMemberRequest",
}) as any as S.Schema<StartMonitoringMemberRequest>;
export interface StartMonitoringMemberResponse {}
const StartMonitoringMemberResponse =
  AcceptInvitationResponse as any as S.Schema<StartMonitoringMemberResponse>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")), Tags: TagMap }).pipe(
    T.all(T.Http({ method: "POST", uri: "/tags/{ResourceArn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "TagResourceRequest" }) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = AcceptInvitationResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = AccountIdExtendedList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
    TagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
  }).pipe(
    T.all(T.Http({ method: "DELETE", uri: "/tags/{ResourceArn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "UntagResourceRequest" }) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = AcceptInvitationResponse as any as S.Schema<UntagResourceResponse>;
export type DatasourcePackageList = DatasourcePackage[];
const DatasourcePackageList = /*@__PURE__*/ S.Array(DatasourcePackage);
export interface UpdateDatasourcePackagesRequest {
  GraphArn: string;
  DatasourcePackages: DatasourcePackage[];
}
const UpdateDatasourcePackagesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphArn: S.String, DatasourcePackages: DatasourcePackageList }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/graph/datasources/update" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateDatasourcePackagesRequest",
}) as any as S.Schema<UpdateDatasourcePackagesRequest>;
export interface UpdateDatasourcePackagesResponse {}
const UpdateDatasourcePackagesResponse =
  DisableOrganizationAdminAccountResponse as any as S.Schema<UpdateDatasourcePackagesResponse>;
export interface UpdateInvestigationStateRequest {
  GraphArn: string;
  InvestigationId: string;
  State: State;
}
const UpdateInvestigationStateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphArn: S.String, InvestigationId: S.String, State: State }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/investigations/updateInvestigationState" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateInvestigationStateRequest",
}) as any as S.Schema<UpdateInvestigationStateRequest>;
export interface UpdateInvestigationStateResponse {}
const UpdateInvestigationStateResponse =
  DisableOrganizationAdminAccountResponse as any as S.Schema<UpdateInvestigationStateResponse>;
export interface UpdateOrganizationConfigurationRequest {
  GraphArn: string;
  AutoEnable?: boolean;
}
const UpdateOrganizationConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ GraphArn: S.String, AutoEnable: S.optional(S.Boolean) }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/orgs/updateOrganizationConfiguration" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateOrganizationConfigurationRequest",
}) as any as S.Schema<UpdateOrganizationConfigurationRequest>;
export interface UpdateOrganizationConfigurationResponse {}
const UpdateOrganizationConfigurationResponse =
  DisableOrganizationAdminAccountResponse as any as S.Schema<UpdateOrganizationConfigurationResponse>;
export type ErrorMessage = string;
export type ErrorCode =
  | "INVALID_GRAPH_ARN"
  | "INVALID_REQUEST_BODY"
  | "INTERNAL_ERROR"
  | (string & {});
const ErrorCode = S.String;

export type ErrorCodeReason = string;
export type Resource = string;
export type ResourceList = string[];
const ResourceList = AccountIdExtendedList as any as S.Schema<ResourceList>;
export type AcceptInvitationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Accepts an invitation for the member account to contribute data to a behavior graph.
 * This operation can only be called by an invited member account.
 *
 * The request provides the ARN of behavior graph.
 *
 * The member account status in the graph must be `INVITED`.
 */
export const acceptInvitation: API.OperationMethod<
  AcceptInvitationRequest,
  AcceptInvitationResponse,
  AcceptInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AcceptInvitationRequest,
  output: AcceptInvitationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptInvitation",
}));

export type BatchGetGraphMemberDatasourcesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets data source package information for the behavior graph.
 */
export const batchGetGraphMemberDatasources: API.OperationMethod<
  BatchGetGraphMemberDatasourcesRequest,
  BatchGetGraphMemberDatasourcesResponse,
  BatchGetGraphMemberDatasourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetGraphMemberDatasourcesRequest,
  output: BatchGetGraphMemberDatasourcesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetGraphMemberDatasources",
}));

export type BatchGetMembershipDatasourcesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information on the data source package history for an account.
 */
export const batchGetMembershipDatasources: API.OperationMethod<
  BatchGetMembershipDatasourcesRequest,
  BatchGetMembershipDatasourcesResponse,
  BatchGetMembershipDatasourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetMembershipDatasourcesRequest,
  output: BatchGetMembershipDatasourcesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetMembershipDatasources",
}));

export type CreateGraphError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Creates a new behavior graph for the calling account, and sets that account as the
 * administrator account. This operation is called by the account that is enabling Detective.
 *
 * The operation also enables Detective for the calling account in the currently
 * selected Region. It returns the ARN of the new behavior graph.
 *
 * `CreateGraph` triggers a process to create the corresponding data tables for
 * the new behavior graph.
 *
 * An account can only be the administrator account for one behavior graph within a Region.
 * If the same account calls `CreateGraph` with the same administrator account, it
 * always returns the same behavior graph ARN. It does not create a new behavior graph.
 */
export const createGraph: API.OperationMethod<
  CreateGraphRequest,
  CreateGraphResponse,
  CreateGraphError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateGraphRequest,
  output: CreateGraphResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGraph",
}));

export type CreateMembersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * `CreateMembers` is used to send invitations to accounts. For the organization
 * behavior graph, the Detective administrator account uses
 * `CreateMembers` to enable organization accounts as member accounts.
 *
 * For invited accounts, `CreateMembers` sends a request to invite the specified
 * Amazon Web Services accounts to be member accounts in the behavior graph. This operation
 * can only be called by the administrator account for a behavior graph.
 *
 * `CreateMembers` verifies the accounts and then invites the verified accounts.
 * The administrator can optionally specify to not send invitation emails to the member
 * accounts. This would be used when the administrator manages their member accounts
 * centrally.
 *
 * For organization accounts in the organization behavior graph, `CreateMembers`
 * attempts to enable the accounts. The organization accounts do not receive
 * invitations.
 *
 * The request provides the behavior graph ARN and the list of accounts to invite or to
 * enable.
 *
 * The response separates the requested accounts into two lists:
 *
 * - The accounts that `CreateMembers` was able to process. For invited
 * accounts, includes member accounts that are being verified, that have passed
 * verification and are to be invited, and that have failed verification. For
 * organization accounts in the organization behavior graph, includes accounts that can
 * be enabled and that cannot be enabled.
 *
 * - The accounts that `CreateMembers` was unable to process. This list
 * includes accounts that were already invited to be member accounts in the behavior
 * graph.
 */
export const createMembers: API.OperationMethod<
  CreateMembersRequest,
  CreateMembersResponse,
  CreateMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMembersRequest,
  output: CreateMembersResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMembers",
}));

export type DeleteGraphError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Disables the specified behavior graph and queues it to be deleted. This operation
 * removes the behavior graph from each member account's list of behavior graphs.
 *
 * `DeleteGraph` can only be called by the administrator account for a behavior
 * graph.
 */
export const deleteGraph: API.OperationMethod<
  DeleteGraphRequest,
  DeleteGraphResponse,
  DeleteGraphError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteGraphRequest,
  output: DeleteGraphResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGraph",
}));

export type DeleteMembersError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified member accounts from the behavior graph. The removed accounts no
 * longer contribute data to the behavior graph. This operation can only be called by the
 * administrator account for the behavior graph.
 *
 * For invited accounts, the removed accounts are deleted from the list of accounts in the
 * behavior graph. To restore the account, the administrator account must send another
 * invitation.
 *
 * For organization accounts in the organization behavior graph, the Detective
 * administrator account can always enable the organization account again. Organization
 * accounts that are not enabled as member accounts are not included in the
 * `ListMembers` results for the organization behavior graph.
 *
 * An administrator account cannot use `DeleteMembers` to remove their own
 * account from the behavior graph. To disable a behavior graph, the administrator account
 * uses the `DeleteGraph` API method.
 */
export const deleteMembers: API.OperationMethod<
  DeleteMembersRequest,
  DeleteMembersResponse,
  DeleteMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMembersRequest,
  output: DeleteMembersResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMembers",
}));

export type DescribeOrganizationConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the configuration for the organization behavior graph.
 * Currently indicates whether to automatically enable new organization accounts as member
 * accounts.
 *
 * Can only be called by the Detective administrator account for the organization.
 */
export const describeOrganizationConfiguration: API.OperationMethod<
  DescribeOrganizationConfigurationRequest,
  DescribeOrganizationConfigurationResponse,
  DescribeOrganizationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeOrganizationConfigurationRequest,
  output: DescribeOrganizationConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOrganizationConfiguration",
}));

export type DisableOrganizationAdminAccountError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Removes the Detective administrator account in the current Region. Deletes the
 * organization behavior graph.
 *
 * Can only be called by the organization management account.
 *
 * Removing the Detective administrator account does not affect the delegated
 * administrator account for Detective in Organizations.
 *
 * To remove the delegated administrator account in Organizations, use the Organizations API. Removing the delegated administrator account also removes the Detective administrator account in all Regions, except for Regions where the Detective administrator account is the organization management account.
 */
export const disableOrganizationAdminAccount: API.OperationMethod<
  DisableOrganizationAdminAccountRequest,
  DisableOrganizationAdminAccountResponse,
  DisableOrganizationAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableOrganizationAdminAccountRequest,
  output: DisableOrganizationAdminAccountResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableOrganizationAdminAccount",
}));

export type DisassociateMembershipError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes the member account from the specified behavior graph. This operation can only be
 * called by an invited member account that has the `ENABLED` status.
 *
 * `DisassociateMembership` cannot be called by an organization account in the
 * organization behavior graph. For the organization behavior graph, the Detective
 * administrator account determines which organization accounts to enable or disable as member
 * accounts.
 */
export const disassociateMembership: API.OperationMethod<
  DisassociateMembershipRequest,
  DisassociateMembershipResponse,
  DisassociateMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateMembershipRequest,
  output: DisassociateMembershipResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateMembership",
}));

export type EnableOrganizationAdminAccountError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Designates the Detective administrator account for the organization in the
 * current Region.
 *
 * If the account does not have Detective enabled, then enables Detective
 * for that account and creates a new behavior graph.
 *
 * Can only be called by the organization management account.
 *
 * If the organization has a delegated administrator account in Organizations, then the
 * Detective administrator account must be either the delegated administrator
 * account or the organization management account.
 *
 * If the organization does not have a delegated administrator account in Organizations, then you can choose any account in the organization. If you choose an account other
 * than the organization management account, Detective calls Organizations to
 * make that account the delegated administrator account for Detective. The
 * organization management account cannot be the delegated administrator account.
 */
export const enableOrganizationAdminAccount: API.OperationMethod<
  EnableOrganizationAdminAccountRequest,
  EnableOrganizationAdminAccountResponse,
  EnableOrganizationAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableOrganizationAdminAccountRequest,
  output: EnableOrganizationAdminAccountResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableOrganizationAdminAccount",
}));

export type GetInvestigationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Detective investigations lets you investigate IAM users and IAM roles using indicators of compromise. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident. `GetInvestigation` returns the investigation results of an investigation for a behavior graph.
 */
export const getInvestigation: API.OperationMethod<
  GetInvestigationRequest,
  GetInvestigationResponse,
  GetInvestigationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetInvestigationRequest,
  output: GetInvestigationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInvestigation",
}));

export type GetMembersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns the membership details for specified member accounts for a behavior
 * graph.
 */
export const getMembers: API.OperationMethod<
  GetMembersRequest,
  GetMembersResponse,
  GetMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMembersRequest,
  output: GetMembersResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMembers",
}));

export type ListDatasourcePackagesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists data source packages in the behavior graph.
 */
export const listDatasourcePackages: API.PaginatedOperationMethod<
  ListDatasourcePackagesRequest,
  ListDatasourcePackagesResponse,
  ListDatasourcePackagesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDatasourcePackagesRequest,
  output: ListDatasourcePackagesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDatasourcePackages",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListGraphsError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns the list of behavior graphs that the calling account is an administrator account
 * of. This operation can only be called by an administrator account.
 *
 * Because an account can currently only be the administrator of one behavior graph within
 * a Region, the results always contain a single behavior graph.
 */
export const listGraphs: API.PaginatedOperationMethod<
  ListGraphsRequest,
  ListGraphsResponse,
  ListGraphsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListGraphsRequest,
  output: ListGraphsResponse,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGraphs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListIndicatorsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Gets the indicators from an investigation. You can use the information from the indicators to determine if an IAM user and/or IAM role is involved in an unusual activity that could indicate malicious behavior and its impact.
 */
export const listIndicators: API.OperationMethod<
  ListIndicatorsRequest,
  ListIndicatorsResponse,
  ListIndicatorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListIndicatorsRequest,
  output: ListIndicatorsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIndicators",
}));

export type ListInvestigationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Detective investigations lets you investigate IAM users and
 * IAM roles using indicators of compromise. An indicator of compromise
 * (IOC) is an artifact observed in or on a network, system, or environment that can (with a
 * high level of confidence) identify malicious activity or a security incident.
 * `ListInvestigations` lists all active Detective
 * investigations.
 */
export const listInvestigations: API.OperationMethod<
  ListInvestigationsRequest,
  ListInvestigationsResponse,
  ListInvestigationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListInvestigationsRequest,
  output: ListInvestigationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInvestigations",
}));

export type ListInvitationsError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the list of open and accepted behavior graph invitations for the member
 * account. This operation can only be called by an invited member account.
 *
 * Open invitations are invitations that the member account has not responded to.
 *
 * The results do not include behavior graphs for which the member account declined the
 * invitation. The results also do not include behavior graphs that the member account
 * resigned from or was removed from.
 */
export const listInvitations: API.PaginatedOperationMethod<
  ListInvitationsRequest,
  ListInvitationsResponse,
  ListInvitationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListInvitationsRequest,
  output: ListInvitationsResponse,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInvitations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListMembersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the list of member accounts for a behavior graph.
 *
 * For invited accounts, the results do not include member accounts that were removed from
 * the behavior graph.
 *
 * For the organization behavior graph, the results do not include organization accounts
 * that the Detective administrator account has not enabled as member
 * accounts.
 */
export const listMembers: API.PaginatedOperationMethod<
  ListMembersRequest,
  ListMembersResponse,
  ListMembersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMembersRequest,
  output: ListMembersResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMembers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListOrganizationAdminAccountsError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the Detective administrator account for an
 * organization. Can only be called by the organization management account.
 */
export const listOrganizationAdminAccounts: API.PaginatedOperationMethod<
  ListOrganizationAdminAccountsRequest,
  ListOrganizationAdminAccountsResponse,
  ListOrganizationAdminAccountsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationAdminAccountsRequest,
  output: ListOrganizationAdminAccountsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOrganizationAdminAccounts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns the tag values that are assigned to a behavior graph.
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
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type RejectInvitationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Rejects an invitation to contribute the account data to a behavior graph. This operation
 * must be called by an invited member account that has the `INVITED`
 * status.
 *
 * `RejectInvitation` cannot be called by an organization account in the
 * organization behavior graph. In the organization behavior graph, organization accounts do
 * not receive an invitation.
 */
export const rejectInvitation: API.OperationMethod<
  RejectInvitationRequest,
  RejectInvitationResponse,
  RejectInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RejectInvitationRequest,
  output: RejectInvitationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RejectInvitation",
}));

export type StartInvestigationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Detective investigations lets you investigate IAM users and IAM roles using indicators of compromise. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident. `StartInvestigation` initiates an investigation on an entity in a behavior graph.
 */
export const startInvestigation: API.OperationMethod<
  StartInvestigationRequest,
  StartInvestigationResponse,
  StartInvestigationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartInvestigationRequest,
  output: StartInvestigationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartInvestigation",
}));

export type StartMonitoringMemberError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Sends a request to enable data ingest for a member account that has a status of
 * `ACCEPTED_BUT_DISABLED`.
 *
 * For valid member accounts, the status is updated as follows.
 *
 * - If Detective enabled the member account, then the new status is
 * `ENABLED`.
 *
 * - If Detective cannot enable the member account, the status remains
 * `ACCEPTED_BUT_DISABLED`.
 */
export const startMonitoringMember: API.OperationMethod<
  StartMonitoringMemberRequest,
  StartMonitoringMemberResponse,
  StartMonitoringMemberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartMonitoringMemberRequest,
  output: StartMonitoringMemberResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartMonitoringMember",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Applies tag values to a behavior graph.
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
  | ValidationException
  | CommonErrors;
/**
 * Removes tags from a behavior graph.
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
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateDatasourcePackagesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Starts a data source package for the Detective behavior graph.
 */
export const updateDatasourcePackages: API.OperationMethod<
  UpdateDatasourcePackagesRequest,
  UpdateDatasourcePackagesResponse,
  UpdateDatasourcePackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDatasourcePackagesRequest,
  output: UpdateDatasourcePackagesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDatasourcePackages",
}));

export type UpdateInvestigationStateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Updates the state of an investigation.
 */
export const updateInvestigationState: API.OperationMethod<
  UpdateInvestigationStateRequest,
  UpdateInvestigationStateResponse,
  UpdateInvestigationStateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateInvestigationStateRequest,
  output: UpdateInvestigationStateResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateInvestigationState",
}));

export type UpdateOrganizationConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration for the Organizations integration in the current Region.
 * Can only be called by the Detective administrator account for the
 * organization.
 */
export const updateOrganizationConfiguration: API.OperationMethod<
  UpdateOrganizationConfigurationRequest,
  UpdateOrganizationConfigurationResponse,
  UpdateOrganizationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateOrganizationConfigurationRequest,
  output: UpdateOrganizationConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOrganizationConfiguration",
}));
