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
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "Inspector2", serviceShapeName: "Inspector2" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "inspector2" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-06-08");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
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
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://inspector2-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://inspector2-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://inspector2.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://inspector2.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
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
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()), resourceId: S.String },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
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
      reason: S.String,
      fields: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFields).annotate({
          identifier: "ValidationExceptionFields",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type AccountId = string;
export interface AssociateMemberRequest {
  accountId: string;
}
const AssociateMemberRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountId: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/members/associate" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "AssociateMemberRequest" }) as any as S.Schema<AssociateMemberRequest>;
export interface AssociateMemberResponse {
  accountId: string;
}
const AssociateMemberResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountId: S.String }),
).annotate({ identifier: "AssociateMemberResponse" }) as any as S.Schema<AssociateMemberResponse>;
export type ScanConfigurationArn = string;
export type ProjectId = string;
export type CodeSecurityResource = { projectId: string };
const CodeSecurityResource = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ projectId: S.String }),
]);
export interface AssociateConfigurationRequest {
  scanConfigurationArn: string;
  resource: CodeSecurityResource;
}
const AssociateConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scanConfigurationArn: S.String, resource: CodeSecurityResource }),
).annotate({
  identifier: "AssociateConfigurationRequest",
}) as any as S.Schema<AssociateConfigurationRequest>;
export type AssociateConfigurationRequestList = AssociateConfigurationRequest[];
const AssociateConfigurationRequestList = /*@__PURE__*/ S.Array(AssociateConfigurationRequest);
export interface BatchAssociateCodeSecurityScanConfigurationRequest {
  associateConfigurationRequests: AssociateConfigurationRequest[];
}
const BatchAssociateCodeSecurityScanConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ associateConfigurationRequests: AssociateConfigurationRequestList }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/codesecurity/scan-configuration/batch/associate" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "BatchAssociateCodeSecurityScanConfigurationRequest",
}) as any as S.Schema<BatchAssociateCodeSecurityScanConfigurationRequest>;
export type AssociationResultStatusCode =
  | "INTERNAL_ERROR"
  | "ACCESS_DENIED"
  | "SCAN_CONFIGURATION_NOT_FOUND"
  | "INVALID_INPUT"
  | "RESOURCE_NOT_FOUND"
  | "QUOTA_EXCEEDED"
  | (string & {});
const AssociationResultStatusCode = S.String;

export type AssociationResultStatusMessage = string;
export interface FailedAssociationResult {
  scanConfigurationArn?: string;
  resource?: CodeSecurityResource;
  statusCode?: AssociationResultStatusCode;
  statusMessage?: string;
}
const FailedAssociationResult = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanConfigurationArn: S.optional(S.String),
    resource: S.optional(CodeSecurityResource),
    statusCode: S.optional(AssociationResultStatusCode),
    statusMessage: S.optional(S.String),
  }),
).annotate({ identifier: "FailedAssociationResult" }) as any as S.Schema<FailedAssociationResult>;
export type FailedAssociationResultList = FailedAssociationResult[];
const FailedAssociationResultList = /*@__PURE__*/ S.Array(FailedAssociationResult);
export interface SuccessfulAssociationResult {
  scanConfigurationArn?: string;
  resource?: CodeSecurityResource;
}
const SuccessfulAssociationResult = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanConfigurationArn: S.optional(S.String),
    resource: S.optional(CodeSecurityResource),
  }),
).annotate({
  identifier: "SuccessfulAssociationResult",
}) as any as S.Schema<SuccessfulAssociationResult>;
export type SuccessfulAssociationResultList = SuccessfulAssociationResult[];
const SuccessfulAssociationResultList = /*@__PURE__*/ S.Array(SuccessfulAssociationResult);
export interface BatchAssociateCodeSecurityScanConfigurationResponse {
  failedAssociations?: FailedAssociationResult[];
  successfulAssociations?: SuccessfulAssociationResult[];
}
const BatchAssociateCodeSecurityScanConfigurationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    failedAssociations: S.optional(FailedAssociationResultList),
    successfulAssociations: S.optional(SuccessfulAssociationResultList),
  }),
).annotate({
  identifier: "BatchAssociateCodeSecurityScanConfigurationResponse",
}) as any as S.Schema<BatchAssociateCodeSecurityScanConfigurationResponse>;
export interface DisassociateConfigurationRequest {
  scanConfigurationArn: string;
  resource: CodeSecurityResource;
}
export type DisassociateConfigurationRequestList = DisassociateConfigurationRequest[];
const DisassociateConfigurationRequestList =
  AssociateConfigurationRequestList as any as S.Schema<DisassociateConfigurationRequestList>;
export interface BatchDisassociateCodeSecurityScanConfigurationRequest {
  disassociateConfigurationRequests: DisassociateConfigurationRequest[];
}
const BatchDisassociateCodeSecurityScanConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ disassociateConfigurationRequests: DisassociateConfigurationRequestList }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/codesecurity/scan-configuration/batch/disassociate" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "BatchDisassociateCodeSecurityScanConfigurationRequest",
}) as any as S.Schema<BatchDisassociateCodeSecurityScanConfigurationRequest>;
export interface BatchDisassociateCodeSecurityScanConfigurationResponse {
  failedAssociations?: FailedAssociationResult[];
  successfulAssociations?: SuccessfulAssociationResult[];
}
const BatchDisassociateCodeSecurityScanConfigurationResponse =
  BatchAssociateCodeSecurityScanConfigurationResponse as any as S.Schema<BatchDisassociateCodeSecurityScanConfigurationResponse>;
export type AccountIdSet = string[];
const AccountIdSet = /*@__PURE__*/ S.Array(S.String);
export interface BatchGetAccountStatusRequest {
  accountIds?: string[];
}
const BatchGetAccountStatusRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountIds: S.optional(AccountIdSet) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/status/batch/get" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "BatchGetAccountStatusRequest",
}) as any as S.Schema<BatchGetAccountStatusRequest>;
export type Status = string;
export type ErrorCode = string;
export type NonEmptyString = string;
export interface State {
  status: string;
  errorCode?: string;
  errorMessage?: string;
}
const State = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    status: S.String,
    errorCode: S.optional(S.String),
    errorMessage: S.optional(S.String),
  }),
).annotate({ identifier: "State" }) as any as S.Schema<State>;
export interface ResourceState {
  ec2: State;
  ecr: State;
  lambda?: State;
  lambdaCode?: State;
  codeRepository?: State;
}
const ResourceState = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ec2: State,
    ecr: State,
    lambda: S.optional(State),
    lambdaCode: S.optional(State),
    codeRepository: S.optional(State),
  }),
).annotate({ identifier: "ResourceState" }) as any as S.Schema<ResourceState>;
export interface AccountState {
  accountId: string;
  state: State;
  resourceState: ResourceState;
}
const AccountState = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountId: S.String, state: State, resourceState: ResourceState }),
).annotate({ identifier: "AccountState" }) as any as S.Schema<AccountState>;
export type AccountStateList = AccountState[];
const AccountStateList = /*@__PURE__*/ S.Array(AccountState);
export interface ResourceStatus {
  ec2?: string;
  ecr?: string;
  lambda?: string;
  lambdaCode?: string;
  codeRepository?: string;
}
const ResourceStatus = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ec2: S.optional(S.String),
    ecr: S.optional(S.String),
    lambda: S.optional(S.String),
    lambdaCode: S.optional(S.String),
    codeRepository: S.optional(S.String),
  }),
).annotate({ identifier: "ResourceStatus" }) as any as S.Schema<ResourceStatus>;
export interface FailedAccount {
  accountId: string;
  status?: string;
  resourceStatus?: ResourceStatus;
  errorCode?: string;
  errorMessage?: string;
}
const FailedAccount = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountId: S.String,
    status: S.optional(S.String),
    resourceStatus: S.optional(ResourceStatus),
    errorCode: S.optional(S.String),
    errorMessage: S.optional(S.String),
  }),
).annotate({ identifier: "FailedAccount" }) as any as S.Schema<FailedAccount>;
export type FailedAccountList = FailedAccount[];
const FailedAccountList = /*@__PURE__*/ S.Array(FailedAccount);
export interface BatchGetAccountStatusResponse {
  accounts: AccountState[];
  failedAccounts?: FailedAccount[];
}
const BatchGetAccountStatusResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accounts: AccountStateList, failedAccounts: S.optional(FailedAccountList) }),
).annotate({
  identifier: "BatchGetAccountStatusResponse",
}) as any as S.Schema<BatchGetAccountStatusResponse>;
export type FindingArn = string;
export type FindingArns = string[];
const FindingArns = AccountIdSet as any as S.Schema<FindingArns>;
export interface BatchGetCodeSnippetRequest {
  findingArns: string[];
}
const BatchGetCodeSnippetRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ findingArns: FindingArns }).pipe(
    T.all(T.Http({ method: "POST", uri: "/codesnippet/batchget" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "BatchGetCodeSnippetRequest",
}) as any as S.Schema<BatchGetCodeSnippetRequest>;
export interface CodeLine {
  content: string;
  lineNumber: number;
}
const CodeLine = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ content: S.String, lineNumber: S.Number }),
).annotate({ identifier: "CodeLine" }) as any as S.Schema<CodeLine>;
export type CodeLineList = CodeLine[];
const CodeLineList = /*@__PURE__*/ S.Array(CodeLine);
export interface SuggestedFix {
  description?: string;
  code?: string;
}
const SuggestedFix = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ description: S.optional(S.String), code: S.optional(S.String) }),
).annotate({ identifier: "SuggestedFix" }) as any as S.Schema<SuggestedFix>;
export type SuggestedFixes = SuggestedFix[];
const SuggestedFixes = /*@__PURE__*/ S.Array(SuggestedFix);
export interface CodeSnippetResult {
  findingArn?: string;
  startLine?: number;
  endLine?: number;
  codeSnippet?: CodeLine[];
  suggestedFixes?: SuggestedFix[];
}
const CodeSnippetResult = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    findingArn: S.optional(S.String),
    startLine: S.optional(S.Number),
    endLine: S.optional(S.Number),
    codeSnippet: S.optional(CodeLineList),
    suggestedFixes: S.optional(SuggestedFixes),
  }),
).annotate({ identifier: "CodeSnippetResult" }) as any as S.Schema<CodeSnippetResult>;
export type CodeSnippetResultList = CodeSnippetResult[];
const CodeSnippetResultList = /*@__PURE__*/ S.Array(CodeSnippetResult);
export type CodeSnippetErrorCode = string;
export interface CodeSnippetError {
  findingArn: string;
  errorCode: string;
  errorMessage: string;
}
const CodeSnippetError = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ findingArn: S.String, errorCode: S.String, errorMessage: S.String }),
).annotate({ identifier: "CodeSnippetError" }) as any as S.Schema<CodeSnippetError>;
export type CodeSnippetErrorList = CodeSnippetError[];
const CodeSnippetErrorList = /*@__PURE__*/ S.Array(CodeSnippetError);
export interface BatchGetCodeSnippetResponse {
  codeSnippetResults?: CodeSnippetResult[];
  errors?: CodeSnippetError[];
}
const BatchGetCodeSnippetResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    codeSnippetResults: S.optional(CodeSnippetResultList),
    errors: S.optional(CodeSnippetErrorList),
  }),
).annotate({
  identifier: "BatchGetCodeSnippetResponse",
}) as any as S.Schema<BatchGetCodeSnippetResponse>;
export type FindingArnList = string[];
const FindingArnList = AccountIdSet as any as S.Schema<FindingArnList>;
export interface BatchGetFindingDetailsRequest {
  findingArns: string[];
}
const BatchGetFindingDetailsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ findingArns: FindingArnList }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/findings/details/batch/get" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "BatchGetFindingDetailsRequest",
}) as any as S.Schema<BatchGetFindingDetailsRequest>;
export type CisaDateAdded = Date;
export type CisaDateDue = Date;
export type CisaAction = string;
export interface CisaData {
  dateAdded?: Date;
  dateDue?: Date;
  action?: string;
}
const CisaData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    dateAdded: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    dateDue: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    action: S.optional(S.String),
  }),
).annotate({ identifier: "CisaData" }) as any as S.Schema<CisaData>;
export type RiskScore = number;
export type EvidenceRule = string;
export type EvidenceDetail = string;
export type EvidenceSeverity = string;
export interface Evidence {
  evidenceRule?: string;
  evidenceDetail?: string;
  severity?: string;
}
const Evidence = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    evidenceRule: S.optional(S.String),
    evidenceDetail: S.optional(S.String),
    severity: S.optional(S.String),
  }),
).annotate({ identifier: "Evidence" }) as any as S.Schema<Evidence>;
export type EvidenceList = Evidence[];
const EvidenceList = /*@__PURE__*/ S.Array(Evidence);
export type Ttp = string;
export type Ttps = string[];
const Ttps = AccountIdSet as any as S.Schema<Ttps>;
export type Tool = string;
export type Tools = string[];
const Tools = AccountIdSet as any as S.Schema<Tools>;
export type LastSeen = Date;
export type FirstSeen = Date;
export interface ExploitObserved {
  lastSeen?: Date;
  firstSeen?: Date;
}
const ExploitObserved = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    lastSeen: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    firstSeen: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
  }),
).annotate({ identifier: "ExploitObserved" }) as any as S.Schema<ExploitObserved>;
export type VulnerabilityReferenceUrl = string;
export type VulnerabilityReferenceUrls = string[];
const VulnerabilityReferenceUrls = AccountIdSet as any as S.Schema<VulnerabilityReferenceUrls>;
export type Cwe = string;
export type Cwes = string[];
const Cwes = AccountIdSet as any as S.Schema<Cwes>;
export interface FindingDetail {
  findingArn?: string;
  cisaData?: CisaData;
  riskScore?: number;
  evidences?: Evidence[];
  ttps?: string[];
  tools?: string[];
  exploitObserved?: ExploitObserved;
  referenceUrls?: string[];
  cwes?: string[];
  epssScore?: number;
}
const FindingDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    findingArn: S.optional(S.String),
    cisaData: S.optional(CisaData),
    riskScore: S.optional(S.Number),
    evidences: S.optional(EvidenceList),
    ttps: S.optional(Ttps),
    tools: S.optional(Tools),
    exploitObserved: S.optional(ExploitObserved),
    referenceUrls: S.optional(VulnerabilityReferenceUrls),
    cwes: S.optional(Cwes),
    epssScore: S.optional(S.Number),
  }),
).annotate({ identifier: "FindingDetail" }) as any as S.Schema<FindingDetail>;
export type FindingDetails = FindingDetail[];
const FindingDetails = /*@__PURE__*/ S.Array(FindingDetail);
export type FindingDetailsErrorCode = string;
export interface FindingDetailsError {
  findingArn: string;
  errorCode: string;
  errorMessage: string;
}
export type FindingDetailsErrorList = FindingDetailsError[];
const FindingDetailsErrorList = CodeSnippetErrorList as any as S.Schema<FindingDetailsErrorList>;
export interface BatchGetFindingDetailsResponse {
  findingDetails?: FindingDetail[];
  errors?: FindingDetailsError[];
}
const BatchGetFindingDetailsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    findingDetails: S.optional(FindingDetails),
    errors: S.optional(FindingDetailsErrorList),
  }),
).annotate({
  identifier: "BatchGetFindingDetailsResponse",
}) as any as S.Schema<BatchGetFindingDetailsResponse>;
export type MeteringAccountId = string;
export type MeteringAccountIdList = string[];
const MeteringAccountIdList = AccountIdSet as any as S.Schema<MeteringAccountIdList>;
export interface BatchGetFreeTrialInfoRequest {
  accountIds: string[];
}
const BatchGetFreeTrialInfoRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountIds: MeteringAccountIdList }).pipe(
    T.all(T.Http({ method: "POST", uri: "/freetrialinfo/batchget" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "BatchGetFreeTrialInfoRequest",
}) as any as S.Schema<BatchGetFreeTrialInfoRequest>;
export type FreeTrialType = string;
export type FreeTrialStatus = string;
export type CloudProvider = string;
export interface FreeTrialInfo {
  type: string;
  start: Date;
  end: Date;
  status: string;
  cloudProvider?: string;
}
const FreeTrialInfo = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.String,
    start: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    end: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    status: S.String,
    cloudProvider: S.optional(S.String),
  }),
).annotate({ identifier: "FreeTrialInfo" }) as any as S.Schema<FreeTrialInfo>;
export type FreeTrialInfoList = FreeTrialInfo[];
const FreeTrialInfoList = /*@__PURE__*/ S.Array(FreeTrialInfo);
export interface FreeTrialAccountInfo {
  accountId: string;
  freeTrialInfo: FreeTrialInfo[];
}
const FreeTrialAccountInfo = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountId: S.String, freeTrialInfo: FreeTrialInfoList }),
).annotate({ identifier: "FreeTrialAccountInfo" }) as any as S.Schema<FreeTrialAccountInfo>;
export type FreeTrialAccountInfoList = FreeTrialAccountInfo[];
const FreeTrialAccountInfoList = /*@__PURE__*/ S.Array(FreeTrialAccountInfo);
export type FreeTrialInfoErrorCode = string;
export interface FreeTrialInfoError {
  accountId: string;
  code: string;
  message: string;
}
const FreeTrialInfoError = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountId: S.String, code: S.String, message: S.String }),
).annotate({ identifier: "FreeTrialInfoError" }) as any as S.Schema<FreeTrialInfoError>;
export type FreeTrialInfoErrorList = FreeTrialInfoError[];
const FreeTrialInfoErrorList = /*@__PURE__*/ S.Array(FreeTrialInfoError);
export interface BatchGetFreeTrialInfoResponse {
  accounts: FreeTrialAccountInfo[];
  failedAccounts: FreeTrialInfoError[];
}
const BatchGetFreeTrialInfoResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accounts: FreeTrialAccountInfoList, failedAccounts: FreeTrialInfoErrorList }),
).annotate({
  identifier: "BatchGetFreeTrialInfoResponse",
}) as any as S.Schema<BatchGetFreeTrialInfoResponse>;
export interface BatchGetMemberEc2DeepInspectionStatusRequest {
  accountIds?: string[];
}
const BatchGetMemberEc2DeepInspectionStatusRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountIds: S.optional(AccountIdSet) }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/ec2deepinspectionstatus/member/batch/get" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "BatchGetMemberEc2DeepInspectionStatusRequest",
}) as any as S.Schema<BatchGetMemberEc2DeepInspectionStatusRequest>;
export type Ec2DeepInspectionStatus = string;
export interface MemberAccountEc2DeepInspectionStatusState {
  accountId: string;
  status?: string;
  errorMessage?: string;
}
const MemberAccountEc2DeepInspectionStatusState = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountId: S.String,
    status: S.optional(S.String),
    errorMessage: S.optional(S.String),
  }),
).annotate({
  identifier: "MemberAccountEc2DeepInspectionStatusState",
}) as any as S.Schema<MemberAccountEc2DeepInspectionStatusState>;
export type MemberAccountEc2DeepInspectionStatusStateList =
  MemberAccountEc2DeepInspectionStatusState[];
const MemberAccountEc2DeepInspectionStatusStateList = /*@__PURE__*/ S.Array(
  MemberAccountEc2DeepInspectionStatusState,
);
export interface FailedMemberAccountEc2DeepInspectionStatusState {
  accountId: string;
  ec2ScanStatus?: string;
  errorMessage?: string;
}
const FailedMemberAccountEc2DeepInspectionStatusState = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountId: S.String,
    ec2ScanStatus: S.optional(S.String),
    errorMessage: S.optional(S.String),
  }),
).annotate({
  identifier: "FailedMemberAccountEc2DeepInspectionStatusState",
}) as any as S.Schema<FailedMemberAccountEc2DeepInspectionStatusState>;
export type FailedMemberAccountEc2DeepInspectionStatusStateList =
  FailedMemberAccountEc2DeepInspectionStatusState[];
const FailedMemberAccountEc2DeepInspectionStatusStateList = /*@__PURE__*/ S.Array(
  FailedMemberAccountEc2DeepInspectionStatusState,
);
export interface BatchGetMemberEc2DeepInspectionStatusResponse {
  accountIds?: MemberAccountEc2DeepInspectionStatusState[];
  failedAccountIds?: FailedMemberAccountEc2DeepInspectionStatusState[];
}
const BatchGetMemberEc2DeepInspectionStatusResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountIds: S.optional(MemberAccountEc2DeepInspectionStatusStateList),
    failedAccountIds: S.optional(FailedMemberAccountEc2DeepInspectionStatusStateList),
  }),
).annotate({
  identifier: "BatchGetMemberEc2DeepInspectionStatusResponse",
}) as any as S.Schema<BatchGetMemberEc2DeepInspectionStatusResponse>;
export interface MemberAccountEc2DeepInspectionStatus {
  accountId: string;
  activateDeepInspection: boolean;
}
const MemberAccountEc2DeepInspectionStatus = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountId: S.String, activateDeepInspection: S.Boolean }),
).annotate({
  identifier: "MemberAccountEc2DeepInspectionStatus",
}) as any as S.Schema<MemberAccountEc2DeepInspectionStatus>;
export type MemberAccountEc2DeepInspectionStatusList = MemberAccountEc2DeepInspectionStatus[];
const MemberAccountEc2DeepInspectionStatusList = /*@__PURE__*/ S.Array(
  MemberAccountEc2DeepInspectionStatus,
);
export interface BatchUpdateMemberEc2DeepInspectionStatusRequest {
  accountIds: MemberAccountEc2DeepInspectionStatus[];
}
const BatchUpdateMemberEc2DeepInspectionStatusRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountIds: MemberAccountEc2DeepInspectionStatusList }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/ec2deepinspectionstatus/member/batch/update" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "BatchUpdateMemberEc2DeepInspectionStatusRequest",
}) as any as S.Schema<BatchUpdateMemberEc2DeepInspectionStatusRequest>;
export interface BatchUpdateMemberEc2DeepInspectionStatusResponse {
  accountIds?: MemberAccountEc2DeepInspectionStatusState[];
  failedAccountIds?: FailedMemberAccountEc2DeepInspectionStatusState[];
}
const BatchUpdateMemberEc2DeepInspectionStatusResponse =
  BatchGetMemberEc2DeepInspectionStatusResponse as any as S.Schema<BatchUpdateMemberEc2DeepInspectionStatusResponse>;
export type ReportId = string;
export interface CancelFindingsReportRequest {
  reportId: string;
}
const CancelFindingsReportRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ reportId: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/reporting/cancel" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "CancelFindingsReportRequest",
}) as any as S.Schema<CancelFindingsReportRequest>;
export interface CancelFindingsReportResponse {
  reportId: string;
}
const CancelFindingsReportResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ reportId: S.String }),
).annotate({
  identifier: "CancelFindingsReportResponse",
}) as any as S.Schema<CancelFindingsReportResponse>;
export interface CancelSbomExportRequest {
  reportId: string;
}
const CancelSbomExportRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ reportId: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/sbomexport/cancel" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "CancelSbomExportRequest" }) as any as S.Schema<CancelSbomExportRequest>;
export interface CancelSbomExportResponse {
  reportId?: string;
}
const CancelSbomExportResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ reportId: S.optional(S.String) }),
).annotate({ identifier: "CancelSbomExportResponse" }) as any as S.Schema<CancelSbomExportResponse>;
export type CisScanName = string;
export type CisSecurityLevel = "LEVEL_1" | "LEVEL_2" | (string & {});
const CisSecurityLevel = S.String;

export interface OneTimeSchedule {}
const OneTimeSchedule = /*@__PURE__*/ S.suspend(() => S.Struct({})).annotate({
  identifier: "OneTimeSchedule",
}) as any as S.Schema<OneTimeSchedule>;
export type TimeOfDay = string;
export type Timezone = string;
export interface Time {
  timeOfDay: string;
  timezone: string;
}
const Time = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ timeOfDay: S.String, timezone: S.String }),
).annotate({ identifier: "Time" }) as any as S.Schema<Time>;
export interface DailySchedule {
  startTime: Time;
}
const DailySchedule = /*@__PURE__*/ S.suspend(() => S.Struct({ startTime: Time })).annotate({
  identifier: "DailySchedule",
}) as any as S.Schema<DailySchedule>;
export type Day = "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | (string & {});
const Day = S.String;

export type DaysList = Day[];
const DaysList = /*@__PURE__*/ S.Array(Day);
export interface WeeklySchedule {
  startTime: Time;
  days: Day[];
}
const WeeklySchedule = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ startTime: Time, days: DaysList }),
).annotate({ identifier: "WeeklySchedule" }) as any as S.Schema<WeeklySchedule>;
export interface MonthlySchedule {
  startTime: Time;
  day: Day;
}
const MonthlySchedule = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ startTime: Time, day: Day }),
).annotate({ identifier: "MonthlySchedule" }) as any as S.Schema<MonthlySchedule>;
export type Schedule =
  | { oneTime: OneTimeSchedule; daily?: never; weekly?: never; monthly?: never }
  | { oneTime?: never; daily: DailySchedule; weekly?: never; monthly?: never }
  | { oneTime?: never; daily?: never; weekly: WeeklySchedule; monthly?: never }
  | { oneTime?: never; daily?: never; weekly?: never; monthly: MonthlySchedule };
const Schedule = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ oneTime: OneTimeSchedule }),
  /*@__PURE__*/ S.Struct({ daily: DailySchedule }),
  /*@__PURE__*/ S.Struct({ weekly: WeeklySchedule }),
  /*@__PURE__*/ S.Struct({ monthly: MonthlySchedule }),
]);
export type TargetAccount = string;
export type TargetAccountList = string[];
const TargetAccountList = AccountIdSet as any as S.Schema<TargetAccountList>;
export type TargetResourceTagsKey = string;
export type TargetResourceTagsValue = string;
export type TagValueList = string[];
const TagValueList = AccountIdSet as any as S.Schema<TagValueList>;
export type TargetResourceTags = { [key: string]: string[] | undefined };
const TargetResourceTags = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ TagValueList.pipe(S.optional),
);
export interface CreateCisTargets {
  accountIds: string[];
  targetResourceTags: { [key: string]: string[] | undefined };
}
const CreateCisTargets = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountIds: TargetAccountList, targetResourceTags: TargetResourceTags }),
).annotate({ identifier: "CreateCisTargets" }) as any as S.Schema<CreateCisTargets>;
export type MapKey = string;
export type MapValue = string;
export type CisTagMap = { [key: string]: string | undefined };
const CisTagMap = /*@__PURE__*/ S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
export interface CreateCisScanConfigurationRequest {
  scanName: string;
  securityLevel: CisSecurityLevel;
  schedule: Schedule;
  targets: CreateCisTargets;
  tags?: { [key: string]: string | undefined };
}
const CreateCisScanConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanName: S.String,
    securityLevel: CisSecurityLevel,
    schedule: Schedule,
    targets: CreateCisTargets,
    tags: S.optional(CisTagMap),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/cis/scan-configuration/create" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateCisScanConfigurationRequest",
}) as any as S.Schema<CreateCisScanConfigurationRequest>;
export type CisScanConfigurationArn = string;
export interface CreateCisScanConfigurationResponse {
  scanConfigurationArn?: string;
}
const CreateCisScanConfigurationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scanConfigurationArn: S.optional(S.String) }),
).annotate({
  identifier: "CreateCisScanConfigurationResponse",
}) as any as S.Schema<CreateCisScanConfigurationResponse>;
export type IntegrationName = string;
export type IntegrationType = "GITLAB_SELF_MANAGED" | "GITHUB" | (string & {});
const IntegrationType = S.String;

export type InstanceUrl = string | redacted.Redacted<string>;
export type GitLabAccessToken = string | redacted.Redacted<string>;
export interface CreateGitLabSelfManagedIntegrationDetail {
  instanceUrl: string | redacted.Redacted<string>;
  accessToken: string | redacted.Redacted<string>;
}
const CreateGitLabSelfManagedIntegrationDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ instanceUrl: SensitiveString, accessToken: SensitiveString }),
).annotate({
  identifier: "CreateGitLabSelfManagedIntegrationDetail",
}) as any as S.Schema<CreateGitLabSelfManagedIntegrationDetail>;
export type CreateIntegrationDetail = {
  gitlabSelfManaged: CreateGitLabSelfManagedIntegrationDetail;
};
const CreateIntegrationDetail = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ gitlabSelfManaged: CreateGitLabSelfManagedIntegrationDetail }),
]);
export type TagMap = { [key: string]: string | undefined };
const TagMap = CisTagMap as any as S.Schema<TagMap>;
export interface CreateCodeSecurityIntegrationRequest {
  name: string;
  type: IntegrationType;
  details?: CreateIntegrationDetail;
  tags?: { [key: string]: string | undefined };
}
const CreateCodeSecurityIntegrationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    type: IntegrationType,
    details: S.optional(CreateIntegrationDetail),
    tags: S.optional(TagMap),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/codesecurity/integration/create" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateCodeSecurityIntegrationRequest",
}) as any as S.Schema<CreateCodeSecurityIntegrationRequest>;
export type CodeSecurityIntegrationArn = string;
export type IntegrationStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "ACTIVE"
  | "INACTIVE"
  | "DISABLING"
  | (string & {});
const IntegrationStatus = S.String;

export type AuthorizationUrl = string | redacted.Redacted<string>;
export interface CreateCodeSecurityIntegrationResponse {
  integrationArn: string;
  status: IntegrationStatus;
  authorizationUrl?: string | redacted.Redacted<string>;
}
const CreateCodeSecurityIntegrationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    integrationArn: S.String,
    status: IntegrationStatus,
    authorizationUrl: S.optional(SensitiveString),
  }),
).annotate({
  identifier: "CreateCodeSecurityIntegrationResponse",
}) as any as S.Schema<CreateCodeSecurityIntegrationResponse>;
export type ScanConfigurationName = string;
export type ConfigurationLevel = "ORGANIZATION" | "ACCOUNT" | (string & {});
const ConfigurationLevel = S.String;

export type PeriodicScanFrequency = "WEEKLY" | "MONTHLY" | "NEVER" | (string & {});
const PeriodicScanFrequency = S.String;

export type FrequencyExpression = string;
export interface PeriodicScanConfiguration {
  frequency?: PeriodicScanFrequency;
  frequencyExpression?: string;
}
const PeriodicScanConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    frequency: S.optional(PeriodicScanFrequency),
    frequencyExpression: S.optional(S.String),
  }),
).annotate({
  identifier: "PeriodicScanConfiguration",
}) as any as S.Schema<PeriodicScanConfiguration>;
export type ContinuousIntegrationScanEvent = "PULL_REQUEST" | "PUSH" | (string & {});
const ContinuousIntegrationScanEvent = S.String;

export type ContinuousIntegrationScanSupportedEvents = ContinuousIntegrationScanEvent[];
const ContinuousIntegrationScanSupportedEvents = /*@__PURE__*/ S.Array(
  ContinuousIntegrationScanEvent,
);
export interface ContinuousIntegrationScanConfiguration {
  supportedEvents: ContinuousIntegrationScanEvent[];
}
const ContinuousIntegrationScanConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ supportedEvents: ContinuousIntegrationScanSupportedEvents }),
).annotate({
  identifier: "ContinuousIntegrationScanConfiguration",
}) as any as S.Schema<ContinuousIntegrationScanConfiguration>;
export type RuleSetCategory = "SAST" | "IAC" | "SCA" | (string & {});
export type RuleSetCategories = RuleSetCategory[];
const RuleSetCategories = DaysList as any as S.Schema<RuleSetCategories>;
export interface CodeSecurityScanConfiguration {
  periodicScanConfiguration?: PeriodicScanConfiguration;
  continuousIntegrationScanConfiguration?: ContinuousIntegrationScanConfiguration;
  ruleSetCategories: RuleSetCategory[];
}
const CodeSecurityScanConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    periodicScanConfiguration: S.optional(PeriodicScanConfiguration),
    continuousIntegrationScanConfiguration: S.optional(ContinuousIntegrationScanConfiguration),
    ruleSetCategories: RuleSetCategories,
  }),
).annotate({
  identifier: "CodeSecurityScanConfiguration",
}) as any as S.Schema<CodeSecurityScanConfiguration>;
export type ProjectSelectionScope = "ALL" | (string & {});
const ProjectSelectionScope = S.String;

export interface ScopeSettings {
  projectSelectionScope?: ProjectSelectionScope;
}
const ScopeSettings = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ projectSelectionScope: S.optional(ProjectSelectionScope) }),
).annotate({ identifier: "ScopeSettings" }) as any as S.Schema<ScopeSettings>;
export interface CreateCodeSecurityScanConfigurationRequest {
  name: string;
  level: ConfigurationLevel;
  configuration: CodeSecurityScanConfiguration;
  scopeSettings?: ScopeSettings;
  tags?: { [key: string]: string | undefined };
}
const CreateCodeSecurityScanConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    level: ConfigurationLevel,
    configuration: CodeSecurityScanConfiguration,
    scopeSettings: S.optional(ScopeSettings),
    tags: S.optional(TagMap),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/codesecurity/scan-configuration/create" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateCodeSecurityScanConfigurationRequest",
}) as any as S.Schema<CreateCodeSecurityScanConfigurationRequest>;
export interface CreateCodeSecurityScanConfigurationResponse {
  scanConfigurationArn: string;
}
const CreateCodeSecurityScanConfigurationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scanConfigurationArn: S.String }),
).annotate({
  identifier: "CreateCodeSecurityScanConfigurationResponse",
}) as any as S.Schema<CreateCodeSecurityScanConfigurationResponse>;
export type ConnectorName = string;
export type ConnectorCloudProvider = "AZURE" | (string & {});
const ConnectorCloudProvider = S.String;

export type ConnectorDescription = string;
export type AwsConfigConnectorArn = string;
export type ScopeType = "TENANT" | "SUBSCRIPTION" | (string & {});
const ScopeType = S.String;

export type ScopeValue = string;
export type ScopeValueList = string[];
const ScopeValueList = AccountIdSet as any as S.Schema<ScopeValueList>;
export interface ScopeConfigurationInput {
  scopeType: ScopeType;
  scopeValues?: string[];
}
const ScopeConfigurationInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scopeType: ScopeType, scopeValues: S.optional(ScopeValueList) }),
).annotate({ identifier: "ScopeConfigurationInput" }) as any as S.Schema<ScopeConfigurationInput>;
export interface AzureScopeConfigurationInput {
  vmScanning?: ScopeConfigurationInput;
  containerImageScanning?: ScopeConfigurationInput;
  serverlessScanning?: ScopeConfigurationInput;
}
const AzureScopeConfigurationInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    vmScanning: S.optional(ScopeConfigurationInput),
    containerImageScanning: S.optional(ScopeConfigurationInput),
    serverlessScanning: S.optional(ScopeConfigurationInput),
  }),
).annotate({
  identifier: "AzureScopeConfigurationInput",
}) as any as S.Schema<AzureScopeConfigurationInput>;
export type AzureRegion = string;
export type AzureRegionList = string[];
const AzureRegionList = AccountIdSet as any as S.Schema<AzureRegionList>;
export interface AzureProviderDetailCreate {
  awsConfigConnectorArn: string;
  scopeConfiguration: AzureScopeConfigurationInput;
  azureRegions: string[];
  autoInstallVMScanner?: boolean;
}
const AzureProviderDetailCreate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    awsConfigConnectorArn: S.String,
    scopeConfiguration: AzureScopeConfigurationInput,
    azureRegions: AzureRegionList,
    autoInstallVMScanner: S.optional(S.Boolean),
  }),
).annotate({
  identifier: "AzureProviderDetailCreate",
}) as any as S.Schema<AzureProviderDetailCreate>;
export type ProviderDetailCreate = { azure: AzureProviderDetailCreate };
const ProviderDetailCreate = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ azure: AzureProviderDetailCreate }),
]);
export type ConnectorTagKey = string;
export type ConnectorTagValue = string;
export type ConnectorTagMap = { [key: string]: string | undefined };
const ConnectorTagMap = /*@__PURE__*/ S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
export interface CreateConnectorRequest {
  clientToken?: string;
  name: string;
  provider: ConnectorCloudProvider;
  description?: string;
  providerDetail: ProviderDetailCreate;
  tags?: { [key: string]: string | undefined };
}
const CreateConnectorRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    name: S.String,
    provider: ConnectorCloudProvider,
    description: S.optional(S.String),
    providerDetail: ProviderDetailCreate,
    tags: S.optional(ConnectorTagMap),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/connector/create" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "CreateConnectorRequest" }) as any as S.Schema<CreateConnectorRequest>;
export type ConnectorArn = string;
export interface CreateConnectorResponse {
  connectorArn: string;
}
const CreateConnectorResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ connectorArn: S.String }),
).annotate({ identifier: "CreateConnectorResponse" }) as any as S.Schema<CreateConnectorResponse>;
export type FilterAction = string;
export type FilterDescription = string;
export type StringComparison = string;
export type StringInput = string;
export interface StringFilter {
  comparison: string;
  value: string;
}
const StringFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ comparison: S.String, value: S.String }),
).annotate({ identifier: "StringFilter" }) as any as S.Schema<StringFilter>;
export type StringFilterList = StringFilter[];
const StringFilterList = /*@__PURE__*/ S.Array(StringFilter);
export interface DateFilter {
  startInclusive?: Date;
  endInclusive?: Date;
}
const DateFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    startInclusive: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    endInclusive: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
  }),
).annotate({ identifier: "DateFilter" }) as any as S.Schema<DateFilter>;
export type DateFilterList = DateFilter[];
const DateFilterList = /*@__PURE__*/ S.Array(DateFilter);
export interface NumberFilter {
  upperInclusive?: number;
  lowerInclusive?: number;
}
const NumberFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ upperInclusive: S.optional(S.Number), lowerInclusive: S.optional(S.Number) }),
).annotate({ identifier: "NumberFilter" }) as any as S.Schema<NumberFilter>;
export type NumberFilterList = NumberFilter[];
const NumberFilterList = /*@__PURE__*/ S.Array(NumberFilter);
export type MapComparison = string;
export interface MapFilter {
  comparison: string;
  key: string;
  value?: string;
}
const MapFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ comparison: S.String, key: S.String, value: S.optional(S.String) }),
).annotate({ identifier: "MapFilter" }) as any as S.Schema<MapFilter>;
export type MapFilterList = MapFilter[];
const MapFilterList = /*@__PURE__*/ S.Array(MapFilter);
export type Port = number;
export interface PortRangeFilter {
  beginInclusive?: number;
  endInclusive?: number;
}
const PortRangeFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ beginInclusive: S.optional(S.Number), endInclusive: S.optional(S.Number) }),
).annotate({ identifier: "PortRangeFilter" }) as any as S.Schema<PortRangeFilter>;
export type PortRangeFilterList = PortRangeFilter[];
const PortRangeFilterList = /*@__PURE__*/ S.Array(PortRangeFilter);
export interface PackageFilter {
  name?: StringFilter;
  version?: StringFilter;
  epoch?: NumberFilter;
  release?: StringFilter;
  architecture?: StringFilter;
  sourceLayerHash?: StringFilter;
  sourceLambdaLayerArn?: StringFilter;
  filePath?: StringFilter;
}
const PackageFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.optional(StringFilter),
    version: S.optional(StringFilter),
    epoch: S.optional(NumberFilter),
    release: S.optional(StringFilter),
    architecture: S.optional(StringFilter),
    sourceLayerHash: S.optional(StringFilter),
    sourceLambdaLayerArn: S.optional(StringFilter),
    filePath: S.optional(StringFilter),
  }),
).annotate({ identifier: "PackageFilter" }) as any as S.Schema<PackageFilter>;
export type PackageFilterList = PackageFilter[];
const PackageFilterList = /*@__PURE__*/ S.Array(PackageFilter);
export interface FilterCriteria {
  findingArn?: StringFilter[];
  awsAccountId?: StringFilter[];
  findingType?: StringFilter[];
  severity?: StringFilter[];
  firstObservedAt?: DateFilter[];
  lastObservedAt?: DateFilter[];
  updatedAt?: DateFilter[];
  findingStatus?: StringFilter[];
  title?: StringFilter[];
  inspectorScore?: NumberFilter[];
  resourceType?: StringFilter[];
  resourceId?: StringFilter[];
  resourceTags?: MapFilter[];
  ec2InstanceImageId?: StringFilter[];
  ec2InstanceVpcId?: StringFilter[];
  ec2InstanceSubnetId?: StringFilter[];
  ecrImagePushedAt?: DateFilter[];
  ecrImageArchitecture?: StringFilter[];
  ecrImageRegistry?: StringFilter[];
  ecrImageRepositoryName?: StringFilter[];
  ecrImageTags?: StringFilter[];
  ecrImageHash?: StringFilter[];
  ecrImageLastInUseAt?: DateFilter[];
  ecrImageInUseCount?: NumberFilter[];
  portRange?: PortRangeFilter[];
  networkProtocol?: StringFilter[];
  componentId?: StringFilter[];
  componentType?: StringFilter[];
  vulnerabilityId?: StringFilter[];
  vulnerabilitySource?: StringFilter[];
  vendorSeverity?: StringFilter[];
  vulnerablePackages?: PackageFilter[];
  relatedVulnerabilities?: StringFilter[];
  fixAvailable?: StringFilter[];
  lambdaFunctionName?: StringFilter[];
  lambdaFunctionLayers?: StringFilter[];
  lambdaFunctionRuntime?: StringFilter[];
  lambdaFunctionLastModifiedAt?: DateFilter[];
  lambdaFunctionExecutionRoleArn?: StringFilter[];
  exploitAvailable?: StringFilter[];
  codeVulnerabilityDetectorName?: StringFilter[];
  codeVulnerabilityDetectorTags?: StringFilter[];
  codeVulnerabilityFilePath?: StringFilter[];
  epssScore?: NumberFilter[];
  codeRepositoryProjectName?: StringFilter[];
  codeRepositoryProviderType?: StringFilter[];
  cloudProvider?: StringFilter[];
  cloudProviderRegion?: StringFilter[];
  cloudProviderAccountId?: StringFilter[];
  cloudProviderOrgId?: StringFilter[];
  cloudVmImageReference?: StringFilter[];
  cloudVmNetworkId?: StringFilter[];
  cloudVmSubnetIds?: StringFilter[];
  cloudImageRepositoryName?: StringFilter[];
  cloudImageRegistry?: StringFilter[];
  cloudImageDigest?: StringFilter[];
  cloudImageTags?: StringFilter[];
  cloudImagePushedAt?: DateFilter[];
  cloudImageArchitecture?: StringFilter[];
  cloudImageLastInUseAt?: DateFilter[];
  cloudImageInUseCount?: NumberFilter[];
  cloudServerlessFunctionName?: StringFilter[];
  cloudServerlessFunctionRuntime?: StringFilter[];
  cloudServerlessFunctionLastModifiedAt?: DateFilter[];
  cloudServerlessFunctionExecutionRole?: StringFilter[];
}
const FilterCriteria = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    findingArn: S.optional(StringFilterList),
    awsAccountId: S.optional(StringFilterList),
    findingType: S.optional(StringFilterList),
    severity: S.optional(StringFilterList),
    firstObservedAt: S.optional(DateFilterList),
    lastObservedAt: S.optional(DateFilterList),
    updatedAt: S.optional(DateFilterList),
    findingStatus: S.optional(StringFilterList),
    title: S.optional(StringFilterList),
    inspectorScore: S.optional(NumberFilterList),
    resourceType: S.optional(StringFilterList),
    resourceId: S.optional(StringFilterList),
    resourceTags: S.optional(MapFilterList),
    ec2InstanceImageId: S.optional(StringFilterList),
    ec2InstanceVpcId: S.optional(StringFilterList),
    ec2InstanceSubnetId: S.optional(StringFilterList),
    ecrImagePushedAt: S.optional(DateFilterList),
    ecrImageArchitecture: S.optional(StringFilterList),
    ecrImageRegistry: S.optional(StringFilterList),
    ecrImageRepositoryName: S.optional(StringFilterList),
    ecrImageTags: S.optional(StringFilterList),
    ecrImageHash: S.optional(StringFilterList),
    ecrImageLastInUseAt: S.optional(DateFilterList),
    ecrImageInUseCount: S.optional(NumberFilterList),
    portRange: S.optional(PortRangeFilterList),
    networkProtocol: S.optional(StringFilterList),
    componentId: S.optional(StringFilterList),
    componentType: S.optional(StringFilterList),
    vulnerabilityId: S.optional(StringFilterList),
    vulnerabilitySource: S.optional(StringFilterList),
    vendorSeverity: S.optional(StringFilterList),
    vulnerablePackages: S.optional(PackageFilterList),
    relatedVulnerabilities: S.optional(StringFilterList),
    fixAvailable: S.optional(StringFilterList),
    lambdaFunctionName: S.optional(StringFilterList),
    lambdaFunctionLayers: S.optional(StringFilterList),
    lambdaFunctionRuntime: S.optional(StringFilterList),
    lambdaFunctionLastModifiedAt: S.optional(DateFilterList),
    lambdaFunctionExecutionRoleArn: S.optional(StringFilterList),
    exploitAvailable: S.optional(StringFilterList),
    codeVulnerabilityDetectorName: S.optional(StringFilterList),
    codeVulnerabilityDetectorTags: S.optional(StringFilterList),
    codeVulnerabilityFilePath: S.optional(StringFilterList),
    epssScore: S.optional(NumberFilterList),
    codeRepositoryProjectName: S.optional(StringFilterList),
    codeRepositoryProviderType: S.optional(StringFilterList),
    cloudProvider: S.optional(StringFilterList),
    cloudProviderRegion: S.optional(StringFilterList),
    cloudProviderAccountId: S.optional(StringFilterList),
    cloudProviderOrgId: S.optional(StringFilterList),
    cloudVmImageReference: S.optional(StringFilterList),
    cloudVmNetworkId: S.optional(StringFilterList),
    cloudVmSubnetIds: S.optional(StringFilterList),
    cloudImageRepositoryName: S.optional(StringFilterList),
    cloudImageRegistry: S.optional(StringFilterList),
    cloudImageDigest: S.optional(StringFilterList),
    cloudImageTags: S.optional(StringFilterList),
    cloudImagePushedAt: S.optional(DateFilterList),
    cloudImageArchitecture: S.optional(StringFilterList),
    cloudImageLastInUseAt: S.optional(DateFilterList),
    cloudImageInUseCount: S.optional(NumberFilterList),
    cloudServerlessFunctionName: S.optional(StringFilterList),
    cloudServerlessFunctionRuntime: S.optional(StringFilterList),
    cloudServerlessFunctionLastModifiedAt: S.optional(DateFilterList),
    cloudServerlessFunctionExecutionRole: S.optional(StringFilterList),
  }),
).annotate({ identifier: "FilterCriteria" }) as any as S.Schema<FilterCriteria>;
export type FilterName = string;
export type FilterReason = string;
export interface CreateFilterRequest {
  action: string;
  description?: string;
  filterCriteria: FilterCriteria;
  name: string;
  tags?: { [key: string]: string | undefined };
  reason?: string;
}
const CreateFilterRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    action: S.String,
    description: S.optional(S.String),
    filterCriteria: FilterCriteria,
    name: S.String,
    tags: S.optional(TagMap),
    reason: S.optional(S.String),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/filters/create" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "CreateFilterRequest" }) as any as S.Schema<CreateFilterRequest>;
export type FilterArn = string;
export interface CreateFilterResponse {
  arn: string;
}
const CreateFilterResponse = /*@__PURE__*/ S.suspend(() => S.Struct({ arn: S.String })).annotate({
  identifier: "CreateFilterResponse",
}) as any as S.Schema<CreateFilterResponse>;
export type ReportFormat = string;
export interface Destination {
  bucketName: string;
  keyPrefix?: string;
  kmsKeyArn: string;
}
const Destination = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ bucketName: S.String, keyPrefix: S.optional(S.String), kmsKeyArn: S.String }),
).annotate({ identifier: "Destination" }) as any as S.Schema<Destination>;
export interface CreateFindingsReportRequest {
  filterCriteria?: FilterCriteria;
  reportFormat: string;
  s3Destination: Destination;
}
const CreateFindingsReportRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    filterCriteria: S.optional(FilterCriteria),
    reportFormat: S.String,
    s3Destination: Destination,
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/reporting/create" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "CreateFindingsReportRequest",
}) as any as S.Schema<CreateFindingsReportRequest>;
export interface CreateFindingsReportResponse {
  reportId?: string;
}
const CreateFindingsReportResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ reportId: S.optional(S.String) }),
).annotate({
  identifier: "CreateFindingsReportResponse",
}) as any as S.Schema<CreateFindingsReportResponse>;
export type ResourceStringComparison = string;
export type ResourceStringInput = string;
export interface ResourceStringFilter {
  comparison: string;
  value: string;
}
export type ResourceStringFilterList = ResourceStringFilter[];
const ResourceStringFilterList = StringFilterList as any as S.Schema<ResourceStringFilterList>;
export type ResourceMapComparison = string;
export interface ResourceMapFilter {
  comparison: string;
  key: string;
  value?: string;
}
export type ResourceMapFilterList = ResourceMapFilter[];
const ResourceMapFilterList = MapFilterList as any as S.Schema<ResourceMapFilterList>;
export interface ResourceFilterCriteria {
  accountId?: ResourceStringFilter[];
  resourceId?: ResourceStringFilter[];
  resourceType?: ResourceStringFilter[];
  ecrRepositoryName?: ResourceStringFilter[];
  lambdaFunctionName?: ResourceStringFilter[];
  ecrImageTags?: ResourceStringFilter[];
  ec2InstanceTags?: ResourceMapFilter[];
  lambdaFunctionTags?: ResourceMapFilter[];
  cloudProvider?: ResourceStringFilter[];
  cloudProviderAccountId?: ResourceStringFilter[];
  cloudProviderOrgId?: ResourceStringFilter[];
  cloudProviderRegion?: ResourceStringFilter[];
  cloudVmInstanceTags?: ResourceMapFilter[];
  cloudContainerImageTags?: ResourceStringFilter[];
  cloudContainerRepositoryName?: ResourceStringFilter[];
  cloudContainerRegistryName?: ResourceStringFilter[];
  cloudServerlessFunctionName?: ResourceStringFilter[];
  cloudServerlessFunctionRuntime?: ResourceStringFilter[];
  cloudServerlessFunctionTags?: ResourceMapFilter[];
}
const ResourceFilterCriteria = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountId: S.optional(ResourceStringFilterList),
    resourceId: S.optional(ResourceStringFilterList),
    resourceType: S.optional(ResourceStringFilterList),
    ecrRepositoryName: S.optional(ResourceStringFilterList),
    lambdaFunctionName: S.optional(ResourceStringFilterList),
    ecrImageTags: S.optional(ResourceStringFilterList),
    ec2InstanceTags: S.optional(ResourceMapFilterList),
    lambdaFunctionTags: S.optional(ResourceMapFilterList),
    cloudProvider: S.optional(ResourceStringFilterList),
    cloudProviderAccountId: S.optional(ResourceStringFilterList),
    cloudProviderOrgId: S.optional(ResourceStringFilterList),
    cloudProviderRegion: S.optional(ResourceStringFilterList),
    cloudVmInstanceTags: S.optional(ResourceMapFilterList),
    cloudContainerImageTags: S.optional(ResourceStringFilterList),
    cloudContainerRepositoryName: S.optional(ResourceStringFilterList),
    cloudContainerRegistryName: S.optional(ResourceStringFilterList),
    cloudServerlessFunctionName: S.optional(ResourceStringFilterList),
    cloudServerlessFunctionRuntime: S.optional(ResourceStringFilterList),
    cloudServerlessFunctionTags: S.optional(ResourceMapFilterList),
  }),
).annotate({ identifier: "ResourceFilterCriteria" }) as any as S.Schema<ResourceFilterCriteria>;
export type SbomReportFormat = string;
export interface CreateSbomExportRequest {
  resourceFilterCriteria?: ResourceFilterCriteria;
  reportFormat: string;
  s3Destination: Destination;
}
const CreateSbomExportRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceFilterCriteria: S.optional(ResourceFilterCriteria),
    reportFormat: S.String,
    s3Destination: Destination,
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/sbomexport/create" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "CreateSbomExportRequest" }) as any as S.Schema<CreateSbomExportRequest>;
export interface CreateSbomExportResponse {
  reportId?: string;
}
const CreateSbomExportResponse =
  CancelSbomExportResponse as any as S.Schema<CreateSbomExportResponse>;
export interface DeleteCisScanConfigurationRequest {
  scanConfigurationArn: string;
}
const DeleteCisScanConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scanConfigurationArn: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/cis/scan-configuration/delete" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteCisScanConfigurationRequest",
}) as any as S.Schema<DeleteCisScanConfigurationRequest>;
export interface DeleteCisScanConfigurationResponse {
  scanConfigurationArn: string;
}
const DeleteCisScanConfigurationResponse =
  CreateCodeSecurityScanConfigurationResponse as any as S.Schema<DeleteCisScanConfigurationResponse>;
export interface DeleteCodeSecurityIntegrationRequest {
  integrationArn: string;
}
const DeleteCodeSecurityIntegrationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ integrationArn: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/codesecurity/integration/delete" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteCodeSecurityIntegrationRequest",
}) as any as S.Schema<DeleteCodeSecurityIntegrationRequest>;
export interface DeleteCodeSecurityIntegrationResponse {
  integrationArn?: string;
}
const DeleteCodeSecurityIntegrationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ integrationArn: S.optional(S.String) }),
).annotate({
  identifier: "DeleteCodeSecurityIntegrationResponse",
}) as any as S.Schema<DeleteCodeSecurityIntegrationResponse>;
export interface DeleteCodeSecurityScanConfigurationRequest {
  scanConfigurationArn: string;
}
const DeleteCodeSecurityScanConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scanConfigurationArn: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/codesecurity/scan-configuration/delete" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteCodeSecurityScanConfigurationRequest",
}) as any as S.Schema<DeleteCodeSecurityScanConfigurationRequest>;
export interface DeleteCodeSecurityScanConfigurationResponse {
  scanConfigurationArn?: string;
}
const DeleteCodeSecurityScanConfigurationResponse =
  CreateCisScanConfigurationResponse as any as S.Schema<DeleteCodeSecurityScanConfigurationResponse>;
export interface DeleteConnectorRequest {
  connectorArn: string;
}
const DeleteConnectorRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ connectorArn: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/connector/delete" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "DeleteConnectorRequest" }) as any as S.Schema<DeleteConnectorRequest>;
export interface DeleteConnectorResponse {}
const DeleteConnectorResponse = OneTimeSchedule as any as S.Schema<DeleteConnectorResponse>;
export interface DeleteFilterRequest {
  arn: string;
}
const DeleteFilterRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ arn: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/filters/delete" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "DeleteFilterRequest" }) as any as S.Schema<DeleteFilterRequest>;
export interface DeleteFilterResponse {
  arn: string;
}
const DeleteFilterResponse = CreateFilterResponse as any as S.Schema<DeleteFilterResponse>;
export interface DescribeOrganizationConfigurationRequest {}
const DescribeOrganizationConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({}).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/organizationconfiguration/describe" }),
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
export interface AutoEnable {
  ec2: boolean;
  ecr: boolean;
  lambda?: boolean;
  lambdaCode?: boolean;
  codeRepository?: boolean;
}
const AutoEnable = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ec2: S.Boolean,
    ecr: S.Boolean,
    lambda: S.optional(S.Boolean),
    lambdaCode: S.optional(S.Boolean),
    codeRepository: S.optional(S.Boolean),
  }),
).annotate({ identifier: "AutoEnable" }) as any as S.Schema<AutoEnable>;
export interface DescribeOrganizationConfigurationResponse {
  autoEnable?: AutoEnable;
  maxAccountLimitReached?: boolean;
}
const DescribeOrganizationConfigurationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ autoEnable: S.optional(AutoEnable), maxAccountLimitReached: S.optional(S.Boolean) }),
).annotate({
  identifier: "DescribeOrganizationConfigurationResponse",
}) as any as S.Schema<DescribeOrganizationConfigurationResponse>;
export type ResourceScanType = string;
export type DisableResourceTypeList = string[];
const DisableResourceTypeList = AccountIdSet as any as S.Schema<DisableResourceTypeList>;
export interface DisableRequest {
  accountIds?: string[];
  resourceTypes?: string[];
}
const DisableRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountIds: S.optional(AccountIdSet),
    resourceTypes: S.optional(DisableResourceTypeList),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/disable" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "DisableRequest" }) as any as S.Schema<DisableRequest>;
export interface Account {
  accountId: string;
  status: string;
  resourceStatus: ResourceStatus;
}
const Account = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountId: S.String, status: S.String, resourceStatus: ResourceStatus }),
).annotate({ identifier: "Account" }) as any as S.Schema<Account>;
export type AccountList = Account[];
const AccountList = /*@__PURE__*/ S.Array(Account);
export interface DisableResponse {
  accounts: Account[];
  failedAccounts?: FailedAccount[];
}
const DisableResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accounts: AccountList, failedAccounts: S.optional(FailedAccountList) }),
).annotate({ identifier: "DisableResponse" }) as any as S.Schema<DisableResponse>;
export interface DisableDelegatedAdminAccountRequest {
  delegatedAdminAccountId: string;
}
const DisableDelegatedAdminAccountRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ delegatedAdminAccountId: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/delegatedadminaccounts/disable" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DisableDelegatedAdminAccountRequest",
}) as any as S.Schema<DisableDelegatedAdminAccountRequest>;
export interface DisableDelegatedAdminAccountResponse {
  delegatedAdminAccountId: string;
}
const DisableDelegatedAdminAccountResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ delegatedAdminAccountId: S.String }),
).annotate({
  identifier: "DisableDelegatedAdminAccountResponse",
}) as any as S.Schema<DisableDelegatedAdminAccountResponse>;
export interface DisassociateMemberRequest {
  accountId: string;
}
const DisassociateMemberRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountId: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/members/disassociate" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "DisassociateMemberRequest",
}) as any as S.Schema<DisassociateMemberRequest>;
export interface DisassociateMemberResponse {
  accountId: string;
}
const DisassociateMemberResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountId: S.String }),
).annotate({
  identifier: "DisassociateMemberResponse",
}) as any as S.Schema<DisassociateMemberResponse>;
export type EnableResourceTypeList = string[];
const EnableResourceTypeList = AccountIdSet as any as S.Schema<EnableResourceTypeList>;
export type ClientToken = string;
export interface EnableRequest {
  accountIds?: string[];
  resourceTypes: string[];
  clientToken?: string;
}
const EnableRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountIds: S.optional(AccountIdSet),
    resourceTypes: EnableResourceTypeList,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/enable" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "EnableRequest" }) as any as S.Schema<EnableRequest>;
export interface EnableResponse {
  accounts: Account[];
  failedAccounts?: FailedAccount[];
}
const EnableResponse = DisableResponse as any as S.Schema<EnableResponse>;
export interface EnableDelegatedAdminAccountRequest {
  delegatedAdminAccountId: string;
  clientToken?: string;
}
const EnableDelegatedAdminAccountRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    delegatedAdminAccountId: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/delegatedadminaccounts/enable" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "EnableDelegatedAdminAccountRequest",
}) as any as S.Schema<EnableDelegatedAdminAccountRequest>;
export interface EnableDelegatedAdminAccountResponse {
  delegatedAdminAccountId: string;
}
const EnableDelegatedAdminAccountResponse =
  DisableDelegatedAdminAccountResponse as any as S.Schema<EnableDelegatedAdminAccountResponse>;
export type CisScanArn = string;
export type ReportTargetAccounts = string[];
const ReportTargetAccounts = AccountIdSet as any as S.Schema<ReportTargetAccounts>;
export type CisReportFormat = "PDF" | "CSV" | (string & {});
const CisReportFormat = S.String;

export interface GetCisScanReportRequest {
  scanArn: string;
  targetAccounts?: string[];
  reportFormat?: CisReportFormat;
}
const GetCisScanReportRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanArn: S.String,
    targetAccounts: S.optional(ReportTargetAccounts),
    reportFormat: S.optional(CisReportFormat),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/cis/scan/report/get" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetCisScanReportRequest" }) as any as S.Schema<GetCisScanReportRequest>;
export type CisReportStatus = "SUCCEEDED" | "FAILED" | "IN_PROGRESS" | (string & {});
const CisReportStatus = S.String;

export interface GetCisScanReportResponse {
  url?: string;
  status?: CisReportStatus;
}
const GetCisScanReportResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ url: S.optional(S.String), status: S.optional(CisReportStatus) }),
).annotate({ identifier: "GetCisScanReportResponse" }) as any as S.Schema<GetCisScanReportResponse>;
export type ResourceId = string;
export type CisFindingStatusComparison = "EQUALS" | (string & {});
const CisFindingStatusComparison = S.String;

export type CisFindingStatus = "PASSED" | "FAILED" | "SKIPPED" | (string & {});
const CisFindingStatus = S.String;

export interface CisFindingStatusFilter {
  comparison: CisFindingStatusComparison;
  value: CisFindingStatus;
}
const CisFindingStatusFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ comparison: CisFindingStatusComparison, value: CisFindingStatus }),
).annotate({ identifier: "CisFindingStatusFilter" }) as any as S.Schema<CisFindingStatusFilter>;
export type CisFindingStatusFilterList = CisFindingStatusFilter[];
const CisFindingStatusFilterList = /*@__PURE__*/ S.Array(CisFindingStatusFilter);
export type CisStringComparison = "EQUALS" | "PREFIX" | "NOT_EQUALS" | (string & {});
const CisStringComparison = S.String;

export interface CisStringFilter {
  comparison: CisStringComparison;
  value: string;
}
const CisStringFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ comparison: CisStringComparison, value: S.String }),
).annotate({ identifier: "CisStringFilter" }) as any as S.Schema<CisStringFilter>;
export type CheckIdFilterList = CisStringFilter[];
const CheckIdFilterList = /*@__PURE__*/ S.Array(CisStringFilter);
export type TitleFilterList = CisStringFilter[];
const TitleFilterList = CheckIdFilterList as any as S.Schema<TitleFilterList>;
export type CisSecurityLevelComparison = "EQUALS" | (string & {});
export interface CisSecurityLevelFilter {
  comparison: CisSecurityLevelComparison;
  value: CisSecurityLevel;
}
export type CisSecurityLevelFilterList = CisSecurityLevelFilter[];
const CisSecurityLevelFilterList =
  CisFindingStatusFilterList as any as S.Schema<CisSecurityLevelFilterList>;
export type CisFindingArnFilterList = CisStringFilter[];
const CisFindingArnFilterList = CheckIdFilterList as any as S.Schema<CisFindingArnFilterList>;
export interface CisScanResultDetailsFilterCriteria {
  findingStatusFilters?: CisFindingStatusFilter[];
  checkIdFilters?: CisStringFilter[];
  titleFilters?: CisStringFilter[];
  securityLevelFilters?: CisSecurityLevelFilter[];
  findingArnFilters?: CisStringFilter[];
}
const CisScanResultDetailsFilterCriteria = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    findingStatusFilters: S.optional(CisFindingStatusFilterList),
    checkIdFilters: S.optional(CheckIdFilterList),
    titleFilters: S.optional(TitleFilterList),
    securityLevelFilters: S.optional(CisSecurityLevelFilterList),
    findingArnFilters: S.optional(CisFindingArnFilterList),
  }),
).annotate({
  identifier: "CisScanResultDetailsFilterCriteria",
}) as any as S.Schema<CisScanResultDetailsFilterCriteria>;
export type CisScanResultDetailsSortBy = "CHECK_ID" | "STATUS" | (string & {});
const CisScanResultDetailsSortBy = S.String;

export type CisSortOrder = "ASC" | "DESC" | (string & {});
const CisSortOrder = S.String;

export type NextToken = string;
export type GetCisScanResultDetailsMaxResults = number;
export interface GetCisScanResultDetailsRequest {
  scanArn: string;
  targetResourceId: string;
  accountId: string;
  filterCriteria?: CisScanResultDetailsFilterCriteria;
  sortBy?: CisScanResultDetailsSortBy;
  sortOrder?: CisSortOrder;
  nextToken?: string;
  maxResults?: number;
}
const GetCisScanResultDetailsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanArn: S.String,
    targetResourceId: S.String,
    accountId: S.String,
    filterCriteria: S.optional(CisScanResultDetailsFilterCriteria),
    sortBy: S.optional(CisScanResultDetailsSortBy),
    sortOrder: S.optional(CisSortOrder),
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/cis/scan-result/details/get" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetCisScanResultDetailsRequest",
}) as any as S.Schema<GetCisScanResultDetailsRequest>;
export type CisFindingArn = string;
export interface CisScanResultDetails {
  scanArn: string;
  accountId?: string;
  targetResourceId?: string;
  platform?: string;
  status?: CisFindingStatus;
  statusReason?: string;
  checkId?: string;
  title?: string;
  checkDescription?: string;
  remediation?: string;
  level?: CisSecurityLevel;
  findingArn?: string;
}
const CisScanResultDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanArn: S.String,
    accountId: S.optional(S.String),
    targetResourceId: S.optional(S.String),
    platform: S.optional(S.String),
    status: S.optional(CisFindingStatus),
    statusReason: S.optional(S.String),
    checkId: S.optional(S.String),
    title: S.optional(S.String),
    checkDescription: S.optional(S.String),
    remediation: S.optional(S.String),
    level: S.optional(CisSecurityLevel),
    findingArn: S.optional(S.String),
  }),
).annotate({ identifier: "CisScanResultDetails" }) as any as S.Schema<CisScanResultDetails>;
export type CisScanResultDetailsList = CisScanResultDetails[];
const CisScanResultDetailsList = /*@__PURE__*/ S.Array(CisScanResultDetails);
export interface GetCisScanResultDetailsResponse {
  scanResultDetails?: CisScanResultDetails[];
  nextToken?: string;
}
const GetCisScanResultDetailsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanResultDetails: S.optional(CisScanResultDetailsList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "GetCisScanResultDetailsResponse",
}) as any as S.Schema<GetCisScanResultDetailsResponse>;
export interface ClusterForImageFilterCriteria {
  resourceId: string;
}
const ClusterForImageFilterCriteria = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceId: S.String }),
).annotate({
  identifier: "ClusterForImageFilterCriteria",
}) as any as S.Schema<ClusterForImageFilterCriteria>;
export type GetClustersForImageNextToken = string;
export interface GetClustersForImageRequest {
  filter: ClusterForImageFilterCriteria;
  maxResults?: number;
  nextToken?: string;
}
const GetClustersForImageRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    filter: ClusterForImageFilterCriteria,
    maxResults: S.optional(S.Number),
    nextToken: S.optional(S.String),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/cluster/get" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "GetClustersForImageRequest",
}) as any as S.Schema<GetClustersForImageRequest>;
export interface AwsEcsMetadataDetails {
  detailsGroup: string;
  taskDefinitionArn: string;
}
const AwsEcsMetadataDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ detailsGroup: S.String, taskDefinitionArn: S.String }),
).annotate({ identifier: "AwsEcsMetadataDetails" }) as any as S.Schema<AwsEcsMetadataDetails>;
export interface AwsEksWorkloadInfo {
  name: string;
  type: string;
}
const AwsEksWorkloadInfo = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.String, type: S.String }),
).annotate({ identifier: "AwsEksWorkloadInfo" }) as any as S.Schema<AwsEksWorkloadInfo>;
export type AwsEksWorkloadInfoList = AwsEksWorkloadInfo[];
const AwsEksWorkloadInfoList = /*@__PURE__*/ S.Array(AwsEksWorkloadInfo);
export interface AwsEksMetadataDetails {
  namespace?: string;
  workloadInfoList?: AwsEksWorkloadInfo[];
}
const AwsEksMetadataDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    namespace: S.optional(S.String),
    workloadInfoList: S.optional(AwsEksWorkloadInfoList),
  }),
).annotate({ identifier: "AwsEksMetadataDetails" }) as any as S.Schema<AwsEksMetadataDetails>;
export type ClusterMetadata =
  | { awsEcsMetadataDetails: AwsEcsMetadataDetails; awsEksMetadataDetails?: never }
  | { awsEcsMetadataDetails?: never; awsEksMetadataDetails: AwsEksMetadataDetails };
const ClusterMetadata = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ awsEcsMetadataDetails: AwsEcsMetadataDetails }),
  /*@__PURE__*/ S.Struct({ awsEksMetadataDetails: AwsEksMetadataDetails }),
]);
export interface ClusterDetails {
  lastInUse: Date;
  runningUnitCount?: number;
  stoppedUnitCount?: number;
  clusterMetadata: ClusterMetadata;
}
const ClusterDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    lastInUse: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    runningUnitCount: S.optional(S.Number),
    stoppedUnitCount: S.optional(S.Number),
    clusterMetadata: ClusterMetadata,
  }),
).annotate({ identifier: "ClusterDetails" }) as any as S.Schema<ClusterDetails>;
export type ClusterDetailsList = ClusterDetails[];
const ClusterDetailsList = /*@__PURE__*/ S.Array(ClusterDetails);
export interface ClusterInformation {
  clusterArn: string;
  clusterDetails?: ClusterDetails[];
}
const ClusterInformation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ clusterArn: S.String, clusterDetails: S.optional(ClusterDetailsList) }),
).annotate({ identifier: "ClusterInformation" }) as any as S.Schema<ClusterInformation>;
export type ClusterInformationList = ClusterInformation[];
const ClusterInformationList = /*@__PURE__*/ S.Array(ClusterInformation);
export interface GetClustersForImageResponse {
  cluster: ClusterInformation[];
  nextToken?: string;
}
const GetClustersForImageResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ cluster: ClusterInformationList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "GetClustersForImageResponse",
}) as any as S.Schema<GetClustersForImageResponse>;
export interface GetCodeSecurityIntegrationRequest {
  integrationArn: string;
  tags?: { [key: string]: string | undefined };
}
const GetCodeSecurityIntegrationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ integrationArn: S.String, tags: S.optional(TagMap) }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/codesecurity/integration/get" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetCodeSecurityIntegrationRequest",
}) as any as S.Schema<GetCodeSecurityIntegrationRequest>;
export interface GetCodeSecurityIntegrationResponse {
  integrationArn: string;
  name: string;
  type: IntegrationType;
  status: IntegrationStatus;
  statusReason: string;
  createdOn: Date;
  lastUpdateOn: Date;
  authorizationUrl?: string | redacted.Redacted<string>;
  tags?: { [key: string]: string | undefined };
}
const GetCodeSecurityIntegrationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    integrationArn: S.String,
    name: S.String,
    type: IntegrationType,
    status: IntegrationStatus,
    statusReason: S.String,
    createdOn: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    lastUpdateOn: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    authorizationUrl: S.optional(SensitiveString),
    tags: S.optional(TagMap),
  }),
).annotate({
  identifier: "GetCodeSecurityIntegrationResponse",
}) as any as S.Schema<GetCodeSecurityIntegrationResponse>;
export type CodeSecurityUuid = string;
export interface GetCodeSecurityScanRequest {
  resource: CodeSecurityResource;
  scanId: string;
}
const GetCodeSecurityScanRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resource: CodeSecurityResource, scanId: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/codesecurity/scan/get" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "GetCodeSecurityScanRequest",
}) as any as S.Schema<GetCodeSecurityScanRequest>;
export type CodeScanStatus = "IN_PROGRESS" | "SUCCESSFUL" | "FAILED" | "SKIPPED" | (string & {});
const CodeScanStatus = S.String;

export interface GetCodeSecurityScanResponse {
  scanId?: string;
  resource?: CodeSecurityResource;
  accountId?: string;
  status?: CodeScanStatus;
  statusReason?: string;
  createdAt?: Date;
  updatedAt?: Date;
  lastCommitId?: string;
}
const GetCodeSecurityScanResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanId: S.optional(S.String),
    resource: S.optional(CodeSecurityResource),
    accountId: S.optional(S.String),
    status: S.optional(CodeScanStatus),
    statusReason: S.optional(S.String),
    createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    lastCommitId: S.optional(S.String),
  }),
).annotate({
  identifier: "GetCodeSecurityScanResponse",
}) as any as S.Schema<GetCodeSecurityScanResponse>;
export interface GetCodeSecurityScanConfigurationRequest {
  scanConfigurationArn: string;
}
const GetCodeSecurityScanConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scanConfigurationArn: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/codesecurity/scan-configuration/get" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetCodeSecurityScanConfigurationRequest",
}) as any as S.Schema<GetCodeSecurityScanConfigurationRequest>;
export interface GetCodeSecurityScanConfigurationResponse {
  scanConfigurationArn?: string;
  name?: string;
  configuration?: CodeSecurityScanConfiguration;
  level?: ConfigurationLevel;
  scopeSettings?: ScopeSettings;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  tags?: { [key: string]: string | undefined };
}
const GetCodeSecurityScanConfigurationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanConfigurationArn: S.optional(S.String),
    name: S.optional(S.String),
    configuration: S.optional(CodeSecurityScanConfiguration),
    level: S.optional(ConfigurationLevel),
    scopeSettings: S.optional(ScopeSettings),
    createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    tags: S.optional(TagMap),
  }),
).annotate({
  identifier: "GetCodeSecurityScanConfigurationResponse",
}) as any as S.Schema<GetCodeSecurityScanConfigurationResponse>;
export interface GetConfigurationRequest {
  accountId?: string;
}
const GetConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountId: S.optional(S.String) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/configuration/get" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetConfigurationRequest" }) as any as S.Schema<GetConfigurationRequest>;
export type EcrRescanDuration = string;
export type EcrRescanDurationStatus = string;
export type DateTimeTimestamp = Date;
export type EcrPullDateRescanDuration = string;
export type EcrPullDateRescanMode = string;
export interface EcrRescanDurationState {
  rescanDuration?: string;
  status?: string;
  updatedAt?: Date;
  pullDateRescanDuration?: string;
  pullDateRescanMode?: string;
}
const EcrRescanDurationState = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    rescanDuration: S.optional(S.String),
    status: S.optional(S.String),
    updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    pullDateRescanDuration: S.optional(S.String),
    pullDateRescanMode: S.optional(S.String),
  }),
).annotate({ identifier: "EcrRescanDurationState" }) as any as S.Schema<EcrRescanDurationState>;
export interface EcrConfigurationState {
  rescanDurationState?: EcrRescanDurationState;
}
const EcrConfigurationState = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ rescanDurationState: S.optional(EcrRescanDurationState) }),
).annotate({ identifier: "EcrConfigurationState" }) as any as S.Schema<EcrConfigurationState>;
export type Ec2ScanMode = string;
export type Ec2ScanModeStatus = string;
export interface Ec2ScanModeState {
  scanMode?: string;
  scanModeStatus?: string;
}
const Ec2ScanModeState = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scanMode: S.optional(S.String), scanModeStatus: S.optional(S.String) }),
).annotate({ identifier: "Ec2ScanModeState" }) as any as S.Schema<Ec2ScanModeState>;
export type VMScannerStatus = string;
export interface VMScannerState {
  activated?: boolean;
  activatedAt?: Date;
  status?: string;
}
const VMScannerState = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    activated: S.optional(S.Boolean),
    activatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    status: S.optional(S.String),
  }),
).annotate({ identifier: "VMScannerState" }) as any as S.Schema<VMScannerState>;
export interface Ec2ConfigurationState {
  scanModeState?: Ec2ScanModeState;
  vmScannerState?: VMScannerState;
}
const Ec2ConfigurationState = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanModeState: S.optional(Ec2ScanModeState),
    vmScannerState: S.optional(VMScannerState),
  }),
).annotate({ identifier: "Ec2ConfigurationState" }) as any as S.Schema<Ec2ConfigurationState>;
export interface GetConfigurationResponse {
  ecrConfiguration?: EcrConfigurationState;
  ec2Configuration?: Ec2ConfigurationState;
}
const GetConfigurationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ecrConfiguration: S.optional(EcrConfigurationState),
    ec2Configuration: S.optional(Ec2ConfigurationState),
  }),
).annotate({ identifier: "GetConfigurationResponse" }) as any as S.Schema<GetConfigurationResponse>;
export interface GetDelegatedAdminAccountRequest {}
const GetDelegatedAdminAccountRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({}).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/delegatedadminaccounts/get" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetDelegatedAdminAccountRequest",
}) as any as S.Schema<GetDelegatedAdminAccountRequest>;
export type RelationshipStatus = string;
export interface DelegatedAdmin {
  accountId?: string;
  relationshipStatus?: string;
}
const DelegatedAdmin = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountId: S.optional(S.String), relationshipStatus: S.optional(S.String) }),
).annotate({ identifier: "DelegatedAdmin" }) as any as S.Schema<DelegatedAdmin>;
export interface GetDelegatedAdminAccountResponse {
  delegatedAdmin?: DelegatedAdmin;
}
const GetDelegatedAdminAccountResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ delegatedAdmin: S.optional(DelegatedAdmin) }),
).annotate({
  identifier: "GetDelegatedAdminAccountResponse",
}) as any as S.Schema<GetDelegatedAdminAccountResponse>;
export interface GetEc2DeepInspectionConfigurationRequest {}
const GetEc2DeepInspectionConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({}).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/ec2deepinspectionconfiguration/get" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetEc2DeepInspectionConfigurationRequest",
}) as any as S.Schema<GetEc2DeepInspectionConfigurationRequest>;
export type Path = string;
export type PathList = string[];
const PathList = AccountIdSet as any as S.Schema<PathList>;
export interface GetEc2DeepInspectionConfigurationResponse {
  packagePaths?: string[];
  orgPackagePaths?: string[];
  status?: string;
  errorMessage?: string;
}
const GetEc2DeepInspectionConfigurationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    packagePaths: S.optional(PathList),
    orgPackagePaths: S.optional(PathList),
    status: S.optional(S.String),
    errorMessage: S.optional(S.String),
  }),
).annotate({
  identifier: "GetEc2DeepInspectionConfigurationResponse",
}) as any as S.Schema<GetEc2DeepInspectionConfigurationResponse>;
export type ScanType = string;
export type ResourceType = string;
export interface GetEncryptionKeyRequest {
  scanType: string;
  resourceType: string;
}
const GetEncryptionKeyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanType: S.String.pipe(T.HttpQuery("scanType")),
    resourceType: S.String.pipe(T.HttpQuery("resourceType")),
  }).pipe(
    T.all(T.Http({ method: "GET", uri: "/encryptionkey/get" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetEncryptionKeyRequest" }) as any as S.Schema<GetEncryptionKeyRequest>;
export type KmsKeyArn = string;
export interface GetEncryptionKeyResponse {
  kmsKeyId: string;
}
const GetEncryptionKeyResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ kmsKeyId: S.String }),
).annotate({ identifier: "GetEncryptionKeyResponse" }) as any as S.Schema<GetEncryptionKeyResponse>;
export interface GetFindingsReportStatusRequest {
  reportId?: string;
}
const GetFindingsReportStatusRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ reportId: S.optional(S.String) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/reporting/status/get" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "GetFindingsReportStatusRequest",
}) as any as S.Schema<GetFindingsReportStatusRequest>;
export type ExternalReportStatus = string;
export type ReportingErrorCode = string;
export type ErrorMessage = string;
export interface GetFindingsReportStatusResponse {
  reportId?: string;
  status?: string;
  errorCode?: string;
  errorMessage?: string;
  destination?: Destination;
  filterCriteria?: FilterCriteria;
}
const GetFindingsReportStatusResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    reportId: S.optional(S.String),
    status: S.optional(S.String),
    errorCode: S.optional(S.String),
    errorMessage: S.optional(S.String),
    destination: S.optional(Destination),
    filterCriteria: S.optional(FilterCriteria),
  }),
).annotate({
  identifier: "GetFindingsReportStatusResponse",
}) as any as S.Schema<GetFindingsReportStatusResponse>;
export interface GetMemberRequest {
  accountId: string;
}
const GetMemberRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountId: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/members/get" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetMemberRequest" }) as any as S.Schema<GetMemberRequest>;
export interface Member {
  accountId?: string;
  relationshipStatus?: string;
  delegatedAdminAccountId?: string;
  updatedAt?: Date;
}
const Member = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountId: S.optional(S.String),
    relationshipStatus: S.optional(S.String),
    delegatedAdminAccountId: S.optional(S.String),
    updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
  }),
).annotate({ identifier: "Member" }) as any as S.Schema<Member>;
export interface GetMemberResponse {
  member?: Member;
}
const GetMemberResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ member: S.optional(Member) }),
).annotate({ identifier: "GetMemberResponse" }) as any as S.Schema<GetMemberResponse>;
export interface GetSbomExportRequest {
  reportId: string;
}
const GetSbomExportRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ reportId: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/sbomexport/get" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetSbomExportRequest" }) as any as S.Schema<GetSbomExportRequest>;
export interface GetSbomExportResponse {
  reportId?: string;
  format?: string;
  status?: string;
  errorCode?: string;
  errorMessage?: string;
  s3Destination?: Destination;
  filterCriteria?: ResourceFilterCriteria;
}
const GetSbomExportResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    reportId: S.optional(S.String),
    format: S.optional(S.String),
    status: S.optional(S.String),
    errorCode: S.optional(S.String),
    errorMessage: S.optional(S.String),
    s3Destination: S.optional(Destination),
    filterCriteria: S.optional(ResourceFilterCriteria),
  }),
).annotate({ identifier: "GetSbomExportResponse" }) as any as S.Schema<GetSbomExportResponse>;
export type Service = string;
export type ListAccountPermissionsMaxResults = number;
export interface ListAccountPermissionsRequest {
  service?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListAccountPermissionsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    service: S.optional(S.String),
    maxResults: S.optional(S.Number),
    nextToken: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/accountpermissions/list" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAccountPermissionsRequest",
}) as any as S.Schema<ListAccountPermissionsRequest>;
export type Operation = string;
export interface Permission {
  service: string;
  operation: string;
}
const Permission = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ service: S.String, operation: S.String }),
).annotate({ identifier: "Permission" }) as any as S.Schema<Permission>;
export type Permissions = Permission[];
const Permissions = /*@__PURE__*/ S.Array(Permission);
export interface ListAccountPermissionsResponse {
  permissions: Permission[];
  nextToken?: string;
}
const ListAccountPermissionsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ permissions: Permissions, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListAccountPermissionsResponse",
}) as any as S.Schema<ListAccountPermissionsResponse>;
export type CisScanNameFilterList = CisStringFilter[];
const CisScanNameFilterList = CheckIdFilterList as any as S.Schema<CisScanNameFilterList>;
export type TagComparison = "EQUALS" | (string & {});
const TagComparison = S.String;

export interface TagFilter {
  comparison: TagComparison;
  key: string;
  value: string;
}
const TagFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ comparison: TagComparison, key: S.String, value: S.String }),
).annotate({ identifier: "TagFilter" }) as any as S.Schema<TagFilter>;
export type ResourceTagFilterList = TagFilter[];
const ResourceTagFilterList = /*@__PURE__*/ S.Array(TagFilter);
export type CisScanConfigurationArnFilterList = CisStringFilter[];
const CisScanConfigurationArnFilterList =
  CheckIdFilterList as any as S.Schema<CisScanConfigurationArnFilterList>;
export interface ListCisScanConfigurationsFilterCriteria {
  scanNameFilters?: CisStringFilter[];
  targetResourceTagFilters?: TagFilter[];
  scanConfigurationArnFilters?: CisStringFilter[];
}
const ListCisScanConfigurationsFilterCriteria = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanNameFilters: S.optional(CisScanNameFilterList),
    targetResourceTagFilters: S.optional(ResourceTagFilterList),
    scanConfigurationArnFilters: S.optional(CisScanConfigurationArnFilterList),
  }),
).annotate({
  identifier: "ListCisScanConfigurationsFilterCriteria",
}) as any as S.Schema<ListCisScanConfigurationsFilterCriteria>;
export type CisScanConfigurationsSortBy = "SCAN_NAME" | "SCAN_CONFIGURATION_ARN" | (string & {});
const CisScanConfigurationsSortBy = S.String;

export type ListCisScanConfigurationsMaxResults = number;
export interface ListCisScanConfigurationsRequest {
  filterCriteria?: ListCisScanConfigurationsFilterCriteria;
  sortBy?: CisScanConfigurationsSortBy;
  sortOrder?: CisSortOrder;
  nextToken?: string;
  maxResults?: number;
}
const ListCisScanConfigurationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    filterCriteria: S.optional(ListCisScanConfigurationsFilterCriteria),
    sortBy: S.optional(CisScanConfigurationsSortBy),
    sortOrder: S.optional(CisSortOrder),
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/cis/scan-configuration/list" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListCisScanConfigurationsRequest",
}) as any as S.Schema<ListCisScanConfigurationsRequest>;
export type CisOwnerId = string;
export type CisAccountIdList = string[];
const CisAccountIdList = AccountIdSet as any as S.Schema<CisAccountIdList>;
export interface CisTargets {
  accountIds?: string[];
  targetResourceTags?: { [key: string]: string[] | undefined };
}
const CisTargets = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountIds: S.optional(CisAccountIdList),
    targetResourceTags: S.optional(TargetResourceTags),
  }),
).annotate({ identifier: "CisTargets" }) as any as S.Schema<CisTargets>;
export interface CisScanConfiguration {
  scanConfigurationArn: string;
  ownerId?: string;
  scanName?: string;
  securityLevel?: CisSecurityLevel;
  schedule?: Schedule;
  targets?: CisTargets;
  tags?: { [key: string]: string | undefined };
}
const CisScanConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanConfigurationArn: S.String,
    ownerId: S.optional(S.String),
    scanName: S.optional(S.String),
    securityLevel: S.optional(CisSecurityLevel),
    schedule: S.optional(Schedule),
    targets: S.optional(CisTargets),
    tags: S.optional(CisTagMap),
  }),
).annotate({ identifier: "CisScanConfiguration" }) as any as S.Schema<CisScanConfiguration>;
export type CisScanConfigurationList = CisScanConfiguration[];
const CisScanConfigurationList = /*@__PURE__*/ S.Array(CisScanConfiguration);
export interface ListCisScanConfigurationsResponse {
  scanConfigurations?: CisScanConfiguration[];
  nextToken?: string;
}
const ListCisScanConfigurationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanConfigurations: S.optional(CisScanConfigurationList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListCisScanConfigurationsResponse",
}) as any as S.Schema<ListCisScanConfigurationsResponse>;
export type OneAccountIdFilterList = CisStringFilter[];
const OneAccountIdFilterList = CheckIdFilterList as any as S.Schema<OneAccountIdFilterList>;
export type PlatformFilterList = CisStringFilter[];
const PlatformFilterList = CheckIdFilterList as any as S.Schema<PlatformFilterList>;
export interface CisNumberFilter {
  upperInclusive?: number;
  lowerInclusive?: number;
}
export type CisNumberFilterList = CisNumberFilter[];
const CisNumberFilterList = NumberFilterList as any as S.Schema<CisNumberFilterList>;
export interface CisScanResultsAggregatedByChecksFilterCriteria {
  accountIdFilters?: CisStringFilter[];
  checkIdFilters?: CisStringFilter[];
  titleFilters?: CisStringFilter[];
  platformFilters?: CisStringFilter[];
  failedResourcesFilters?: CisNumberFilter[];
  securityLevelFilters?: CisSecurityLevelFilter[];
}
const CisScanResultsAggregatedByChecksFilterCriteria = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountIdFilters: S.optional(OneAccountIdFilterList),
    checkIdFilters: S.optional(CheckIdFilterList),
    titleFilters: S.optional(TitleFilterList),
    platformFilters: S.optional(PlatformFilterList),
    failedResourcesFilters: S.optional(CisNumberFilterList),
    securityLevelFilters: S.optional(CisSecurityLevelFilterList),
  }),
).annotate({
  identifier: "CisScanResultsAggregatedByChecksFilterCriteria",
}) as any as S.Schema<CisScanResultsAggregatedByChecksFilterCriteria>;
export type CisScanResultsAggregatedByChecksSortBy =
  | "CHECK_ID"
  | "TITLE"
  | "PLATFORM"
  | "FAILED_COUNTS"
  | "SECURITY_LEVEL"
  | (string & {});
const CisScanResultsAggregatedByChecksSortBy = S.String;

export type CisScanResultsMaxResults = number;
export interface ListCisScanResultsAggregatedByChecksRequest {
  scanArn: string;
  filterCriteria?: CisScanResultsAggregatedByChecksFilterCriteria;
  sortBy?: CisScanResultsAggregatedByChecksSortBy;
  sortOrder?: CisSortOrder;
  nextToken?: string;
  maxResults?: number;
}
const ListCisScanResultsAggregatedByChecksRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanArn: S.String,
    filterCriteria: S.optional(CisScanResultsAggregatedByChecksFilterCriteria),
    sortBy: S.optional(CisScanResultsAggregatedByChecksSortBy),
    sortOrder: S.optional(CisSortOrder),
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/cis/scan-result/check/list" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListCisScanResultsAggregatedByChecksRequest",
}) as any as S.Schema<ListCisScanResultsAggregatedByChecksRequest>;
export interface StatusCounts {
  failed?: number;
  skipped?: number;
  passed?: number;
}
const StatusCounts = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    failed: S.optional(S.Number),
    skipped: S.optional(S.Number),
    passed: S.optional(S.Number),
  }),
).annotate({ identifier: "StatusCounts" }) as any as S.Schema<StatusCounts>;
export interface CisCheckAggregation {
  scanArn: string;
  checkId?: string;
  title?: string;
  checkDescription?: string;
  level?: CisSecurityLevel;
  accountId?: string;
  statusCounts?: StatusCounts;
  platform?: string;
}
const CisCheckAggregation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanArn: S.String,
    checkId: S.optional(S.String),
    title: S.optional(S.String),
    checkDescription: S.optional(S.String),
    level: S.optional(CisSecurityLevel),
    accountId: S.optional(S.String),
    statusCounts: S.optional(StatusCounts),
    platform: S.optional(S.String),
  }),
).annotate({ identifier: "CisCheckAggregation" }) as any as S.Schema<CisCheckAggregation>;
export type CisCheckAggregationList = CisCheckAggregation[];
const CisCheckAggregationList = /*@__PURE__*/ S.Array(CisCheckAggregation);
export interface ListCisScanResultsAggregatedByChecksResponse {
  checkAggregations?: CisCheckAggregation[];
  nextToken?: string;
}
const ListCisScanResultsAggregatedByChecksResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    checkAggregations: S.optional(CisCheckAggregationList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListCisScanResultsAggregatedByChecksResponse",
}) as any as S.Schema<ListCisScanResultsAggregatedByChecksResponse>;
export type AccountIdFilterList = CisStringFilter[];
const AccountIdFilterList = CheckIdFilterList as any as S.Schema<AccountIdFilterList>;
export type CisResultStatusComparison = "EQUALS" | (string & {});
export type CisResultStatus = "PASSED" | "FAILED" | "SKIPPED" | (string & {});
export interface CisResultStatusFilter {
  comparison: CisResultStatusComparison;
  value: CisResultStatus;
}
export type CisResultStatusFilterList = CisResultStatusFilter[];
const CisResultStatusFilterList =
  CisFindingStatusFilterList as any as S.Schema<CisResultStatusFilterList>;
export type ResourceIdFilterList = CisStringFilter[];
const ResourceIdFilterList = CheckIdFilterList as any as S.Schema<ResourceIdFilterList>;
export type CisTargetStatusComparison = "EQUALS" | (string & {});
const CisTargetStatusComparison = S.String;

export type CisTargetStatus = "TIMED_OUT" | "CANCELLED" | "COMPLETED" | (string & {});
const CisTargetStatus = S.String;

export interface CisTargetStatusFilter {
  comparison: CisTargetStatusComparison;
  value: CisTargetStatus;
}
export type TargetStatusFilterList = CisTargetStatusFilter[];
const TargetStatusFilterList =
  CisFindingStatusFilterList as any as S.Schema<TargetStatusFilterList>;
export type CisTargetStatusReason =
  | "SCAN_IN_PROGRESS"
  | "UNSUPPORTED_OS"
  | "SSM_UNMANAGED"
  | (string & {});
const CisTargetStatusReason = S.String;

export interface CisTargetStatusReasonFilter {
  comparison: CisTargetStatusComparison;
  value: CisTargetStatusReason;
}
const CisTargetStatusReasonFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ comparison: CisTargetStatusComparison, value: CisTargetStatusReason }),
).annotate({
  identifier: "CisTargetStatusReasonFilter",
}) as any as S.Schema<CisTargetStatusReasonFilter>;
export type TargetStatusReasonFilterList = CisTargetStatusReasonFilter[];
const TargetStatusReasonFilterList = /*@__PURE__*/ S.Array(CisTargetStatusReasonFilter);
export interface CisScanResultsAggregatedByTargetResourceFilterCriteria {
  accountIdFilters?: CisStringFilter[];
  statusFilters?: CisResultStatusFilter[];
  checkIdFilters?: CisStringFilter[];
  targetResourceIdFilters?: CisStringFilter[];
  targetResourceTagFilters?: TagFilter[];
  platformFilters?: CisStringFilter[];
  targetStatusFilters?: CisTargetStatusFilter[];
  targetStatusReasonFilters?: CisTargetStatusReasonFilter[];
  failedChecksFilters?: CisNumberFilter[];
}
const CisScanResultsAggregatedByTargetResourceFilterCriteria = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountIdFilters: S.optional(AccountIdFilterList),
    statusFilters: S.optional(CisResultStatusFilterList),
    checkIdFilters: S.optional(CheckIdFilterList),
    targetResourceIdFilters: S.optional(ResourceIdFilterList),
    targetResourceTagFilters: S.optional(ResourceTagFilterList),
    platformFilters: S.optional(PlatformFilterList),
    targetStatusFilters: S.optional(TargetStatusFilterList),
    targetStatusReasonFilters: S.optional(TargetStatusReasonFilterList),
    failedChecksFilters: S.optional(CisNumberFilterList),
  }),
).annotate({
  identifier: "CisScanResultsAggregatedByTargetResourceFilterCriteria",
}) as any as S.Schema<CisScanResultsAggregatedByTargetResourceFilterCriteria>;
export type CisScanResultsAggregatedByTargetResourceSortBy =
  | "RESOURCE_ID"
  | "FAILED_COUNTS"
  | "ACCOUNT_ID"
  | "PLATFORM"
  | "TARGET_STATUS"
  | "TARGET_STATUS_REASON"
  | (string & {});
const CisScanResultsAggregatedByTargetResourceSortBy = S.String;

export interface ListCisScanResultsAggregatedByTargetResourceRequest {
  scanArn: string;
  filterCriteria?: CisScanResultsAggregatedByTargetResourceFilterCriteria;
  sortBy?: CisScanResultsAggregatedByTargetResourceSortBy;
  sortOrder?: CisSortOrder;
  nextToken?: string;
  maxResults?: number;
}
const ListCisScanResultsAggregatedByTargetResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanArn: S.String,
    filterCriteria: S.optional(CisScanResultsAggregatedByTargetResourceFilterCriteria),
    sortBy: S.optional(CisScanResultsAggregatedByTargetResourceSortBy),
    sortOrder: S.optional(CisSortOrder),
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/cis/scan-result/resource/list" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListCisScanResultsAggregatedByTargetResourceRequest",
}) as any as S.Schema<ListCisScanResultsAggregatedByTargetResourceRequest>;
export interface CisTargetResourceAggregation {
  scanArn: string;
  targetResourceId?: string;
  accountId?: string;
  targetResourceTags?: { [key: string]: string[] | undefined };
  statusCounts?: StatusCounts;
  platform?: string;
  targetStatus?: CisTargetStatus;
  targetStatusReason?: CisTargetStatusReason;
}
const CisTargetResourceAggregation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanArn: S.String,
    targetResourceId: S.optional(S.String),
    accountId: S.optional(S.String),
    targetResourceTags: S.optional(TargetResourceTags),
    statusCounts: S.optional(StatusCounts),
    platform: S.optional(S.String),
    targetStatus: S.optional(CisTargetStatus),
    targetStatusReason: S.optional(CisTargetStatusReason),
  }),
).annotate({
  identifier: "CisTargetResourceAggregation",
}) as any as S.Schema<CisTargetResourceAggregation>;
export type CisTargetResourceAggregationList = CisTargetResourceAggregation[];
const CisTargetResourceAggregationList = /*@__PURE__*/ S.Array(CisTargetResourceAggregation);
export interface ListCisScanResultsAggregatedByTargetResourceResponse {
  targetResourceAggregations?: CisTargetResourceAggregation[];
  nextToken?: string;
}
const ListCisScanResultsAggregatedByTargetResourceResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    targetResourceAggregations: S.optional(CisTargetResourceAggregationList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListCisScanResultsAggregatedByTargetResourceResponse",
}) as any as S.Schema<ListCisScanResultsAggregatedByTargetResourceResponse>;
export type CisScanStatusComparison = "EQUALS" | (string & {});
export type CisScanStatus = "FAILED" | "COMPLETED" | "CANCELLED" | "IN_PROGRESS" | (string & {});
const CisScanStatus = S.String;

export interface CisScanStatusFilter {
  comparison: CisScanStatusComparison;
  value: CisScanStatus;
}
export type CisScanStatusFilterList = CisScanStatusFilter[];
const CisScanStatusFilterList =
  CisFindingStatusFilterList as any as S.Schema<CisScanStatusFilterList>;
export interface CisDateFilter {
  earliestScanStartTime?: Date;
  latestScanStartTime?: Date;
}
const CisDateFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    earliestScanStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    latestScanStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
  }),
).annotate({ identifier: "CisDateFilter" }) as any as S.Schema<CisDateFilter>;
export type CisScanDateFilterList = CisDateFilter[];
const CisScanDateFilterList = /*@__PURE__*/ S.Array(CisDateFilter);
export type CisScanArnFilterList = CisStringFilter[];
const CisScanArnFilterList = CheckIdFilterList as any as S.Schema<CisScanArnFilterList>;
export type CisScheduledByFilterList = CisStringFilter[];
const CisScheduledByFilterList = CheckIdFilterList as any as S.Schema<CisScheduledByFilterList>;
export interface ListCisScansFilterCriteria {
  scanNameFilters?: CisStringFilter[];
  targetResourceTagFilters?: TagFilter[];
  targetResourceIdFilters?: CisStringFilter[];
  scanStatusFilters?: CisScanStatusFilter[];
  scanAtFilters?: CisDateFilter[];
  scanConfigurationArnFilters?: CisStringFilter[];
  scanArnFilters?: CisStringFilter[];
  scheduledByFilters?: CisStringFilter[];
  failedChecksFilters?: CisNumberFilter[];
  targetAccountIdFilters?: CisStringFilter[];
}
const ListCisScansFilterCriteria = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanNameFilters: S.optional(CisScanNameFilterList),
    targetResourceTagFilters: S.optional(ResourceTagFilterList),
    targetResourceIdFilters: S.optional(ResourceIdFilterList),
    scanStatusFilters: S.optional(CisScanStatusFilterList),
    scanAtFilters: S.optional(CisScanDateFilterList),
    scanConfigurationArnFilters: S.optional(CisScanConfigurationArnFilterList),
    scanArnFilters: S.optional(CisScanArnFilterList),
    scheduledByFilters: S.optional(CisScheduledByFilterList),
    failedChecksFilters: S.optional(CisNumberFilterList),
    targetAccountIdFilters: S.optional(AccountIdFilterList),
  }),
).annotate({
  identifier: "ListCisScansFilterCriteria",
}) as any as S.Schema<ListCisScansFilterCriteria>;
export type ListCisScansDetailLevel = "ORGANIZATION" | "MEMBER" | (string & {});
const ListCisScansDetailLevel = S.String;

export type ListCisScansSortBy =
  | "STATUS"
  | "SCHEDULED_BY"
  | "SCAN_START_DATE"
  | "FAILED_CHECKS"
  | (string & {});
const ListCisScansSortBy = S.String;

export type ListCisScansMaxResults = number;
export interface ListCisScansRequest {
  filterCriteria?: ListCisScansFilterCriteria;
  detailLevel?: ListCisScansDetailLevel;
  sortBy?: ListCisScansSortBy;
  sortOrder?: CisSortOrder;
  nextToken?: string;
  maxResults?: number;
}
const ListCisScansRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    filterCriteria: S.optional(ListCisScansFilterCriteria),
    detailLevel: S.optional(ListCisScansDetailLevel),
    sortBy: S.optional(ListCisScansSortBy),
    sortOrder: S.optional(CisSortOrder),
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/cis/scan/list" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListCisScansRequest" }) as any as S.Schema<ListCisScansRequest>;
export interface CisScan {
  scanArn: string;
  scanConfigurationArn: string;
  status?: CisScanStatus;
  scanName?: string;
  scanDate?: Date;
  failedChecks?: number;
  totalChecks?: number;
  targets?: CisTargets;
  scheduledBy?: string;
  securityLevel?: CisSecurityLevel;
}
const CisScan = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanArn: S.String,
    scanConfigurationArn: S.String,
    status: S.optional(CisScanStatus),
    scanName: S.optional(S.String),
    scanDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    failedChecks: S.optional(S.Number),
    totalChecks: S.optional(S.Number),
    targets: S.optional(CisTargets),
    scheduledBy: S.optional(S.String),
    securityLevel: S.optional(CisSecurityLevel),
  }),
).annotate({ identifier: "CisScan" }) as any as S.Schema<CisScan>;
export type CisScanList = CisScan[];
const CisScanList = /*@__PURE__*/ S.Array(CisScan);
export interface ListCisScansResponse {
  scans?: CisScan[];
  nextToken?: string;
}
const ListCisScansResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scans: S.optional(CisScanList), nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListCisScansResponse" }) as any as S.Schema<ListCisScansResponse>;
export interface ListCodeSecurityIntegrationsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListCodeSecurityIntegrationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/codesecurity/integration/list" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListCodeSecurityIntegrationsRequest",
}) as any as S.Schema<ListCodeSecurityIntegrationsRequest>;
export interface CodeSecurityIntegrationSummary {
  integrationArn: string;
  name: string;
  type: IntegrationType;
  status: IntegrationStatus;
  statusReason: string;
  createdOn: Date;
  lastUpdateOn: Date;
}
const CodeSecurityIntegrationSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    integrationArn: S.String,
    name: S.String,
    type: IntegrationType,
    status: IntegrationStatus,
    statusReason: S.String,
    createdOn: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    lastUpdateOn: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
  }),
).annotate({
  identifier: "CodeSecurityIntegrationSummary",
}) as any as S.Schema<CodeSecurityIntegrationSummary>;
export type IntegrationSummaries = CodeSecurityIntegrationSummary[];
const IntegrationSummaries = /*@__PURE__*/ S.Array(CodeSecurityIntegrationSummary);
export interface ListCodeSecurityIntegrationsResponse {
  integrations?: CodeSecurityIntegrationSummary[];
  nextToken?: string;
}
const ListCodeSecurityIntegrationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ integrations: S.optional(IntegrationSummaries), nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListCodeSecurityIntegrationsResponse",
}) as any as S.Schema<ListCodeSecurityIntegrationsResponse>;
export interface ListCodeSecurityScanConfigurationAssociationsRequest {
  scanConfigurationArn: string;
  nextToken?: string;
  maxResults?: number;
}
const ListCodeSecurityScanConfigurationAssociationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanConfigurationArn: S.String,
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/codesecurity/scan-configuration/associations/list" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListCodeSecurityScanConfigurationAssociationsRequest",
}) as any as S.Schema<ListCodeSecurityScanConfigurationAssociationsRequest>;
export interface CodeSecurityScanConfigurationAssociationSummary {
  resource?: CodeSecurityResource;
}
const CodeSecurityScanConfigurationAssociationSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resource: S.optional(CodeSecurityResource) }),
).annotate({
  identifier: "CodeSecurityScanConfigurationAssociationSummary",
}) as any as S.Schema<CodeSecurityScanConfigurationAssociationSummary>;
export type CodeSecurityScanConfigurationAssociationSummaries =
  CodeSecurityScanConfigurationAssociationSummary[];
const CodeSecurityScanConfigurationAssociationSummaries = /*@__PURE__*/ S.Array(
  CodeSecurityScanConfigurationAssociationSummary,
);
export interface ListCodeSecurityScanConfigurationAssociationsResponse {
  associations?: CodeSecurityScanConfigurationAssociationSummary[];
  nextToken?: string;
}
const ListCodeSecurityScanConfigurationAssociationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    associations: S.optional(CodeSecurityScanConfigurationAssociationSummaries),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListCodeSecurityScanConfigurationAssociationsResponse",
}) as any as S.Schema<ListCodeSecurityScanConfigurationAssociationsResponse>;
export interface ListCodeSecurityScanConfigurationsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListCodeSecurityScanConfigurationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/codesecurity/scan-configuration/list" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListCodeSecurityScanConfigurationsRequest",
}) as any as S.Schema<ListCodeSecurityScanConfigurationsRequest>;
export type OwnerId = string;
export interface CodeSecurityScanConfigurationSummary {
  scanConfigurationArn: string;
  name: string;
  ownerAccountId: string;
  periodicScanFrequency?: PeriodicScanFrequency;
  frequencyExpression?: string;
  continuousIntegrationScanSupportedEvents?: ContinuousIntegrationScanEvent[];
  ruleSetCategories: RuleSetCategory[];
  scopeSettings?: ScopeSettings;
}
const CodeSecurityScanConfigurationSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanConfigurationArn: S.String,
    name: S.String,
    ownerAccountId: S.String,
    periodicScanFrequency: S.optional(PeriodicScanFrequency),
    frequencyExpression: S.optional(S.String),
    continuousIntegrationScanSupportedEvents: S.optional(ContinuousIntegrationScanSupportedEvents),
    ruleSetCategories: RuleSetCategories,
    scopeSettings: S.optional(ScopeSettings),
  }),
).annotate({
  identifier: "CodeSecurityScanConfigurationSummary",
}) as any as S.Schema<CodeSecurityScanConfigurationSummary>;
export type CodeSecurityScanConfigurationSummaries = CodeSecurityScanConfigurationSummary[];
const CodeSecurityScanConfigurationSummaries = /*@__PURE__*/ S.Array(
  CodeSecurityScanConfigurationSummary,
);
export interface ListCodeSecurityScanConfigurationsResponse {
  configurations?: CodeSecurityScanConfigurationSummary[];
  nextToken?: string;
}
const ListCodeSecurityScanConfigurationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    configurations: S.optional(CodeSecurityScanConfigurationSummaries),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListCodeSecurityScanConfigurationsResponse",
}) as any as S.Schema<ListCodeSecurityScanConfigurationsResponse>;
export type ConnectorNextToken = string | redacted.Redacted<string>;
export type ConnectorArnComparison = "EQUALS" | (string & {});
export interface ConnectorArnFilter {
  comparison: ConnectorArnComparison;
  value: string;
}
export type ConnectorArnFilterList = ConnectorArnFilter[];
const ConnectorArnFilterList = CheckIdFilterList as any as S.Schema<ConnectorArnFilterList>;
export type AwsConfigConnectorArnComparison = "EQUALS" | (string & {});
const AwsConfigConnectorArnComparison = S.String;

export interface AwsConfigConnectorArnFilter {
  comparison: AwsConfigConnectorArnComparison;
  value: string;
}
const AwsConfigConnectorArnFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ comparison: AwsConfigConnectorArnComparison, value: S.String }),
).annotate({
  identifier: "AwsConfigConnectorArnFilter",
}) as any as S.Schema<AwsConfigConnectorArnFilter>;
export type AwsConfigConnectorArnFilterList = AwsConfigConnectorArnFilter[];
const AwsConfigConnectorArnFilterList = /*@__PURE__*/ S.Array(AwsConfigConnectorArnFilter);
export type ConnectorTypeComparison = "EQUALS" | (string & {});
export type ConnectorType = "CUSTOMER_MANAGED" | "SERVICE_LINKED" | (string & {});
export interface ConnectorTypeFilter {
  comparison: ConnectorTypeComparison;
  value: ConnectorType;
}
export type ConnectorTypeFilterList = ConnectorTypeFilter[];
const ConnectorTypeFilterList =
  CisFindingStatusFilterList as any as S.Schema<ConnectorTypeFilterList>;
export type ProviderComparison = "EQUALS" | (string & {});
export interface ProviderFilter {
  comparison: ProviderComparison;
  value: ConnectorCloudProvider;
}
export type ProviderFilterList = ProviderFilter[];
const ProviderFilterList = CisFindingStatusFilterList as any as S.Schema<ProviderFilterList>;
export interface ConnectorFilterCriteria {
  connectorArns?: ConnectorArnFilter[];
  accounts?: StringFilter[];
  awsConfigConnectorArns?: AwsConfigConnectorArnFilter[];
  connectorType?: ConnectorTypeFilter[];
  provider?: ProviderFilter[];
}
const ConnectorFilterCriteria = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    connectorArns: S.optional(ConnectorArnFilterList),
    accounts: S.optional(StringFilterList),
    awsConfigConnectorArns: S.optional(AwsConfigConnectorArnFilterList),
    connectorType: S.optional(ConnectorTypeFilterList),
    provider: S.optional(ProviderFilterList),
  }),
).annotate({ identifier: "ConnectorFilterCriteria" }) as any as S.Schema<ConnectorFilterCriteria>;
export interface ListConnectorsRequest {
  maxResults?: number;
  nextToken?: string | redacted.Redacted<string>;
  filterCriteria?: ConnectorFilterCriteria;
}
const ListConnectorsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    maxResults: S.optional(S.Number),
    nextToken: S.optional(SensitiveString),
    filterCriteria: S.optional(ConnectorFilterCriteria),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/connector/list" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListConnectorsRequest" }) as any as S.Schema<ListConnectorsRequest>;
export type EnablementStatus =
  | "ENABLED"
  | "PENDING_ENABLEMENT"
  | "FAILED_TO_ENABLE"
  | "PENDING_UPDATE"
  | "FAILED_TO_UPDATE"
  | "PENDING_DELETION"
  | "DELETED"
  | "FAILED_TO_DELETE"
  | (string & {});
const EnablementStatus = S.String;

export type ConnectorHealthStatus =
  | "CONNECTED"
  | "DEGRADED"
  | "FAILED_TO_CONNECT"
  | "PENDING_AUTHORIZATION"
  | "PENDING_CONFIGURATION"
  | "UNKNOWN"
  | (string & {});
const ConnectorHealthStatus = S.String;

export interface ConnectorHealth {
  connectorStatus: ConnectorHealthStatus;
  lastCheckedAt: Date;
  message?: string;
}
const ConnectorHealth = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    connectorStatus: ConnectorHealthStatus,
    lastCheckedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    message: S.optional(S.String),
  }),
).annotate({ identifier: "ConnectorHealth" }) as any as S.Schema<ConnectorHealth>;
export type ScopeState = "ACTIVE" | "PENDING" | "ERROR" | "DISABLED" | (string & {});
const ScopeState = S.String;

export interface ScopeConfiguration {
  scopeType: ScopeType;
  scopeValues?: string[];
  state?: ScopeState;
  stateReason?: string;
}
const ScopeConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scopeType: ScopeType,
    scopeValues: S.optional(ScopeValueList),
    state: S.optional(ScopeState),
    stateReason: S.optional(S.String),
  }),
).annotate({ identifier: "ScopeConfiguration" }) as any as S.Schema<ScopeConfiguration>;
export interface AzureScopeConfiguration {
  vmScanning?: ScopeConfiguration;
  containerImageScanning?: ScopeConfiguration;
  serverlessScanning?: ScopeConfiguration;
}
const AzureScopeConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    vmScanning: S.optional(ScopeConfiguration),
    containerImageScanning: S.optional(ScopeConfiguration),
    serverlessScanning: S.optional(ScopeConfiguration),
  }),
).annotate({ identifier: "AzureScopeConfiguration" }) as any as S.Schema<AzureScopeConfiguration>;
export interface Connector {
  connectorArn: string;
  name?: string;
  description?: string;
  provider: ConnectorCloudProvider;
  enablementStatus?: EnablementStatus;
  enablementStatusReason?: string;
  health?: ConnectorHealth;
  createdAt: Date;
  updatedAt: Date;
  azureRegions?: string[];
  awsConfigConnectorArn?: string;
  scopeConfiguration?: AzureScopeConfiguration;
  tags?: { [key: string]: string | undefined };
  autoInstallVMScanner?: boolean;
}
const Connector = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    connectorArn: S.String,
    name: S.optional(S.String),
    description: S.optional(S.String),
    provider: ConnectorCloudProvider,
    enablementStatus: S.optional(EnablementStatus),
    enablementStatusReason: S.optional(S.String),
    health: S.optional(ConnectorHealth),
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    azureRegions: S.optional(AzureRegionList),
    awsConfigConnectorArn: S.optional(S.String),
    scopeConfiguration: S.optional(AzureScopeConfiguration),
    tags: S.optional(ConnectorTagMap),
    autoInstallVMScanner: S.optional(S.Boolean),
  }),
).annotate({ identifier: "Connector" }) as any as S.Schema<Connector>;
export type ConnectorList = Connector[];
const ConnectorList = /*@__PURE__*/ S.Array(Connector);
export interface ListConnectorsResponse {
  items: Connector[];
  nextToken?: string | redacted.Redacted<string>;
}
const ListConnectorsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ items: ConnectorList, nextToken: S.optional(SensitiveString) }),
).annotate({ identifier: "ListConnectorsResponse" }) as any as S.Schema<ListConnectorsResponse>;
export type AwsConfigConnectorArnList = string[];
const AwsConfigConnectorArnList = AccountIdSet as any as S.Schema<AwsConfigConnectorArnList>;
export type ListConnectorScanConfigurationsMaxResults = number;
export interface ListConnectorScanConfigurationsRequest {
  awsConfigConnectorArns?: string[];
  maxResults?: number;
  nextToken?: string | redacted.Redacted<string>;
}
const ListConnectorScanConfigurationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    awsConfigConnectorArns: S.optional(AwsConfigConnectorArnList),
    maxResults: S.optional(S.Number),
    nextToken: S.optional(SensitiveString),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/connectorscanconfigurations/list" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListConnectorScanConfigurationsRequest",
}) as any as S.Schema<ListConnectorScanConfigurationsRequest>;
export type ConnectorArnList = string[];
const ConnectorArnList = AccountIdSet as any as S.Schema<ConnectorArnList>;
export type ContainerImageRescanDuration = string;
export type ContainerImagePullDateRescanDuration = string;
export interface ConnectorContainerImageScanConfiguration {
  pushDuration?: string;
  pullDuration?: string;
}
const ConnectorContainerImageScanConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ pushDuration: S.optional(S.String), pullDuration: S.optional(S.String) }),
).annotate({
  identifier: "ConnectorContainerImageScanConfiguration",
}) as any as S.Schema<ConnectorContainerImageScanConfiguration>;
export interface ConnectorScanConfiguration {
  containerImageScanning?: ConnectorContainerImageScanConfiguration;
}
const ConnectorScanConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ containerImageScanning: S.optional(ConnectorContainerImageScanConfiguration) }),
).annotate({
  identifier: "ConnectorScanConfiguration",
}) as any as S.Schema<ConnectorScanConfiguration>;
export interface ConnectorScanConfigurationItem {
  awsConfigConnectorArn: string;
  connectorArns: string[];
  scanConfiguration: ConnectorScanConfiguration;
}
const ConnectorScanConfigurationItem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    awsConfigConnectorArn: S.String,
    connectorArns: ConnectorArnList,
    scanConfiguration: ConnectorScanConfiguration,
  }),
).annotate({
  identifier: "ConnectorScanConfigurationItem",
}) as any as S.Schema<ConnectorScanConfigurationItem>;
export type ConnectorScanConfigurationItemList = ConnectorScanConfigurationItem[];
const ConnectorScanConfigurationItemList = /*@__PURE__*/ S.Array(ConnectorScanConfigurationItem);
export interface ListConnectorScanConfigurationsResponse {
  scanConfigurations: ConnectorScanConfigurationItem[];
  nextToken?: string | redacted.Redacted<string>;
}
const ListConnectorScanConfigurationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanConfigurations: ConnectorScanConfigurationItemList,
    nextToken: S.optional(SensitiveString),
  }),
).annotate({
  identifier: "ListConnectorScanConfigurationsResponse",
}) as any as S.Schema<ListConnectorScanConfigurationsResponse>;
export type ListCoverageMaxResults = number;
export type CoverageStringComparison = string;
export type CoverageStringInput = string;
export interface CoverageStringFilter {
  comparison: string;
  value: string;
}
export type CoverageStringFilterList = CoverageStringFilter[];
const CoverageStringFilterList = StringFilterList as any as S.Schema<CoverageStringFilterList>;
export type CoverageMapComparison = string;
export interface CoverageMapFilter {
  comparison: string;
  key: string;
  value?: string;
}
export type CoverageMapFilterList = CoverageMapFilter[];
const CoverageMapFilterList = MapFilterList as any as S.Schema<CoverageMapFilterList>;
export interface CoverageDateFilter {
  startInclusive?: Date;
  endInclusive?: Date;
}
export type CoverageDateFilterList = CoverageDateFilter[];
const CoverageDateFilterList = DateFilterList as any as S.Schema<CoverageDateFilterList>;
export interface CoverageNumberFilter {
  upperInclusive?: number;
  lowerInclusive?: number;
}
export type CoverageNumberFilterList = CoverageNumberFilter[];
const CoverageNumberFilterList = NumberFilterList as any as S.Schema<CoverageNumberFilterList>;
export interface CoverageFilterCriteria {
  scanStatusCode?: CoverageStringFilter[];
  scanStatusReason?: CoverageStringFilter[];
  accountId?: CoverageStringFilter[];
  resourceId?: CoverageStringFilter[];
  resourceType?: CoverageStringFilter[];
  scanType?: CoverageStringFilter[];
  ecrRepositoryName?: CoverageStringFilter[];
  ecrImageTags?: CoverageStringFilter[];
  ec2InstanceTags?: CoverageMapFilter[];
  lambdaFunctionName?: CoverageStringFilter[];
  lambdaFunctionTags?: CoverageMapFilter[];
  lambdaFunctionRuntime?: CoverageStringFilter[];
  lastScannedAt?: CoverageDateFilter[];
  scanMode?: CoverageStringFilter[];
  imagePulledAt?: CoverageDateFilter[];
  ecrImageLastInUseAt?: CoverageDateFilter[];
  ecrImageInUseCount?: CoverageNumberFilter[];
  codeRepositoryProjectName?: CoverageStringFilter[];
  codeRepositoryProviderType?: CoverageStringFilter[];
  codeRepositoryProviderTypeVisibility?: CoverageStringFilter[];
  lastScannedCommitId?: CoverageStringFilter[];
  cloudProvider?: CoverageStringFilter[];
  cloudProviderAccountId?: CoverageStringFilter[];
  cloudProviderRegion?: CoverageStringFilter[];
  cloudVmInstanceTags?: CoverageMapFilter[];
  cloudContainerImageTags?: CoverageStringFilter[];
  cloudContainerRepositoryName?: CoverageStringFilter[];
  cloudContainerRegistryName?: CoverageStringFilter[];
  cloudServerlessFunctionName?: CoverageStringFilter[];
  cloudServerlessFunctionRuntime?: CoverageStringFilter[];
  cloudServerlessFunctionTags?: CoverageMapFilter[];
  cloudProviderOrgId?: CoverageStringFilter[];
}
const CoverageFilterCriteria = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanStatusCode: S.optional(CoverageStringFilterList),
    scanStatusReason: S.optional(CoverageStringFilterList),
    accountId: S.optional(CoverageStringFilterList),
    resourceId: S.optional(CoverageStringFilterList),
    resourceType: S.optional(CoverageStringFilterList),
    scanType: S.optional(CoverageStringFilterList),
    ecrRepositoryName: S.optional(CoverageStringFilterList),
    ecrImageTags: S.optional(CoverageStringFilterList),
    ec2InstanceTags: S.optional(CoverageMapFilterList),
    lambdaFunctionName: S.optional(CoverageStringFilterList),
    lambdaFunctionTags: S.optional(CoverageMapFilterList),
    lambdaFunctionRuntime: S.optional(CoverageStringFilterList),
    lastScannedAt: S.optional(CoverageDateFilterList),
    scanMode: S.optional(CoverageStringFilterList),
    imagePulledAt: S.optional(CoverageDateFilterList),
    ecrImageLastInUseAt: S.optional(CoverageDateFilterList),
    ecrImageInUseCount: S.optional(CoverageNumberFilterList),
    codeRepositoryProjectName: S.optional(CoverageStringFilterList),
    codeRepositoryProviderType: S.optional(CoverageStringFilterList),
    codeRepositoryProviderTypeVisibility: S.optional(CoverageStringFilterList),
    lastScannedCommitId: S.optional(CoverageStringFilterList),
    cloudProvider: S.optional(CoverageStringFilterList),
    cloudProviderAccountId: S.optional(CoverageStringFilterList),
    cloudProviderRegion: S.optional(CoverageStringFilterList),
    cloudVmInstanceTags: S.optional(CoverageMapFilterList),
    cloudContainerImageTags: S.optional(CoverageStringFilterList),
    cloudContainerRepositoryName: S.optional(CoverageStringFilterList),
    cloudContainerRegistryName: S.optional(CoverageStringFilterList),
    cloudServerlessFunctionName: S.optional(CoverageStringFilterList),
    cloudServerlessFunctionRuntime: S.optional(CoverageStringFilterList),
    cloudServerlessFunctionTags: S.optional(CoverageMapFilterList),
    cloudProviderOrgId: S.optional(CoverageStringFilterList),
  }),
).annotate({ identifier: "CoverageFilterCriteria" }) as any as S.Schema<CoverageFilterCriteria>;
export interface ListCoverageRequest {
  maxResults?: number;
  nextToken?: string;
  filterCriteria?: CoverageFilterCriteria;
}
const ListCoverageRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    maxResults: S.optional(S.Number),
    nextToken: S.optional(S.String),
    filterCriteria: S.optional(CoverageFilterCriteria),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/coverage/list" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListCoverageRequest" }) as any as S.Schema<ListCoverageRequest>;
export type CoverageResourceType = string;
export type ScanStatusCode = string;
export type ScanStatusReason = string;
export interface ScanStatus {
  statusCode: string;
  reason: string;
}
const ScanStatus = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ statusCode: S.String, reason: S.String }),
).annotate({ identifier: "ScanStatus" }) as any as S.Schema<ScanStatus>;
export type EcrScanFrequency = string;
export interface EcrRepositoryMetadata {
  name?: string;
  scanFrequency?: string;
}
const EcrRepositoryMetadata = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.optional(S.String), scanFrequency: S.optional(S.String) }),
).annotate({ identifier: "EcrRepositoryMetadata" }) as any as S.Schema<EcrRepositoryMetadata>;
export type TagList = string[];
const TagList = AccountIdSet as any as S.Schema<TagList>;
export interface EcrContainerImageMetadata {
  tags?: string[];
  imagePulledAt?: Date;
  lastInUseAt?: Date;
  inUseCount?: number;
}
const EcrContainerImageMetadata = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    tags: S.optional(TagList),
    imagePulledAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    lastInUseAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    inUseCount: S.optional(S.Number),
  }),
).annotate({
  identifier: "EcrContainerImageMetadata",
}) as any as S.Schema<EcrContainerImageMetadata>;
export type AmiId = string;
export type Ec2Platform = string;
export interface Ec2Metadata {
  tags?: { [key: string]: string | undefined };
  amiId?: string;
  platform?: string;
}
const Ec2Metadata = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    tags: S.optional(TagMap),
    amiId: S.optional(S.String),
    platform: S.optional(S.String),
  }),
).annotate({ identifier: "Ec2Metadata" }) as any as S.Schema<Ec2Metadata>;
export type LambdaLayerList = string[];
const LambdaLayerList = AccountIdSet as any as S.Schema<LambdaLayerList>;
export type Runtime = string;
export interface LambdaFunctionMetadata {
  functionTags?: { [key: string]: string | undefined };
  layers?: string[];
  functionName?: string;
  runtime?: string;
}
const LambdaFunctionMetadata = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    functionTags: S.optional(TagMap),
    layers: S.optional(LambdaLayerList),
    functionName: S.optional(S.String),
    runtime: S.optional(S.String),
  }),
).annotate({ identifier: "LambdaFunctionMetadata" }) as any as S.Schema<LambdaFunctionMetadata>;
export type CodeRepositoryIntegrationArn = string;
export type CommitId = string;
export interface ProjectPeriodicScanConfiguration {
  frequencyExpression?: string;
  ruleSetCategories?: RuleSetCategory[];
}
const ProjectPeriodicScanConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    frequencyExpression: S.optional(S.String),
    ruleSetCategories: S.optional(RuleSetCategories),
  }),
).annotate({
  identifier: "ProjectPeriodicScanConfiguration",
}) as any as S.Schema<ProjectPeriodicScanConfiguration>;
export type ProjectPeriodicScanConfigurationList = ProjectPeriodicScanConfiguration[];
const ProjectPeriodicScanConfigurationList = /*@__PURE__*/ S.Array(
  ProjectPeriodicScanConfiguration,
);
export interface ProjectContinuousIntegrationScanConfiguration {
  supportedEvent?: ContinuousIntegrationScanEvent;
  ruleSetCategories?: RuleSetCategory[];
}
const ProjectContinuousIntegrationScanConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    supportedEvent: S.optional(ContinuousIntegrationScanEvent),
    ruleSetCategories: S.optional(RuleSetCategories),
  }),
).annotate({
  identifier: "ProjectContinuousIntegrationScanConfiguration",
}) as any as S.Schema<ProjectContinuousIntegrationScanConfiguration>;
export type ProjectContinuousIntegrationScanConfigurationList =
  ProjectContinuousIntegrationScanConfiguration[];
const ProjectContinuousIntegrationScanConfigurationList = /*@__PURE__*/ S.Array(
  ProjectContinuousIntegrationScanConfiguration,
);
export interface ProjectCodeSecurityScanConfiguration {
  periodicScanConfigurations?: ProjectPeriodicScanConfiguration[];
  continuousIntegrationScanConfigurations?: ProjectContinuousIntegrationScanConfiguration[];
}
const ProjectCodeSecurityScanConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    periodicScanConfigurations: S.optional(ProjectPeriodicScanConfigurationList),
    continuousIntegrationScanConfigurations: S.optional(
      ProjectContinuousIntegrationScanConfigurationList,
    ),
  }),
).annotate({
  identifier: "ProjectCodeSecurityScanConfiguration",
}) as any as S.Schema<ProjectCodeSecurityScanConfiguration>;
export interface CodeRepositoryOnDemandScan {
  lastScannedCommitId?: string;
  lastScanAt?: Date;
  scanStatus?: ScanStatus;
}
const CodeRepositoryOnDemandScan = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    lastScannedCommitId: S.optional(S.String),
    lastScanAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    scanStatus: S.optional(ScanStatus),
  }),
).annotate({
  identifier: "CodeRepositoryOnDemandScan",
}) as any as S.Schema<CodeRepositoryOnDemandScan>;
export interface CodeRepositoryMetadata {
  projectName: string;
  integrationArn?: string;
  providerType: string;
  providerTypeVisibility: string;
  lastScannedCommitId?: string;
  scanConfiguration?: ProjectCodeSecurityScanConfiguration;
  onDemandScan?: CodeRepositoryOnDemandScan;
}
const CodeRepositoryMetadata = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    projectName: S.String,
    integrationArn: S.optional(S.String),
    providerType: S.String,
    providerTypeVisibility: S.String,
    lastScannedCommitId: S.optional(S.String),
    scanConfiguration: S.optional(ProjectCodeSecurityScanConfiguration),
    onDemandScan: S.optional(CodeRepositoryOnDemandScan),
  }),
).annotate({ identifier: "CodeRepositoryMetadata" }) as any as S.Schema<CodeRepositoryMetadata>;
export type VmPlatform = string;
export interface VmInstanceMetadata {
  tags?: { [key: string]: string | undefined };
  platform?: string;
  inventoryHash?: string;
  vmImageReference?: string;
}
const VmInstanceMetadata = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    tags: S.optional(TagMap),
    platform: S.optional(S.String),
    inventoryHash: S.optional(S.String),
    vmImageReference: S.optional(S.String),
  }),
).annotate({ identifier: "VmInstanceMetadata" }) as any as S.Schema<VmInstanceMetadata>;
export interface ContainerImageMetadata {
  imageTags?: string[];
  imagePulledAt?: Date;
  lastInUseAt?: Date;
  inUseCount?: number;
}
const ContainerImageMetadata = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    imageTags: S.optional(TagList),
    imagePulledAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    lastInUseAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    inUseCount: S.optional(S.Number),
  }),
).annotate({ identifier: "ContainerImageMetadata" }) as any as S.Schema<ContainerImageMetadata>;
export interface ContainerRepositoryMetadata {
  name?: string;
  scanFrequency?: string;
}
const ContainerRepositoryMetadata = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.optional(S.String), scanFrequency: S.optional(S.String) }),
).annotate({
  identifier: "ContainerRepositoryMetadata",
}) as any as S.Schema<ContainerRepositoryMetadata>;
export interface ContainerRegistryMetadata {
  name?: string;
}
const ContainerRegistryMetadata = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.optional(S.String) }),
).annotate({
  identifier: "ContainerRegistryMetadata",
}) as any as S.Schema<ContainerRegistryMetadata>;
export interface ServerlessFunctionMetadata {
  serverlessFunctionName?: string;
  runtime?: string;
  functionTags?: { [key: string]: string | undefined };
}
const ServerlessFunctionMetadata = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    serverlessFunctionName: S.optional(S.String),
    runtime: S.optional(S.String),
    functionTags: S.optional(TagMap),
  }),
).annotate({
  identifier: "ServerlessFunctionMetadata",
}) as any as S.Schema<ServerlessFunctionMetadata>;
export interface ResourceScanMetadata {
  ecrRepository?: EcrRepositoryMetadata;
  ecrImage?: EcrContainerImageMetadata;
  ec2?: Ec2Metadata;
  lambdaFunction?: LambdaFunctionMetadata;
  codeRepository?: CodeRepositoryMetadata;
  vmInstance?: VmInstanceMetadata;
  containerImage?: ContainerImageMetadata;
  containerRepository?: ContainerRepositoryMetadata;
  containerRegistry?: ContainerRegistryMetadata;
  serverlessFunction?: ServerlessFunctionMetadata;
}
const ResourceScanMetadata = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ecrRepository: S.optional(EcrRepositoryMetadata),
    ecrImage: S.optional(EcrContainerImageMetadata),
    ec2: S.optional(Ec2Metadata),
    lambdaFunction: S.optional(LambdaFunctionMetadata),
    codeRepository: S.optional(CodeRepositoryMetadata),
    vmInstance: S.optional(VmInstanceMetadata),
    containerImage: S.optional(ContainerImageMetadata),
    containerRepository: S.optional(ContainerRepositoryMetadata),
    containerRegistry: S.optional(ContainerRegistryMetadata),
    serverlessFunction: S.optional(ServerlessFunctionMetadata),
  }),
).annotate({ identifier: "ResourceScanMetadata" }) as any as S.Schema<ResourceScanMetadata>;
export type ScanMode = string;
export type Provider = string;
export type ProviderAccountId = string;
export type ProviderOrgId = string;
export type ProviderRegion = string;
export type ProviderPartition = string;
export interface CoveredResource {
  resourceType: string;
  resourceId: string;
  accountId: string;
  scanType: string;
  scanStatus?: ScanStatus;
  resourceMetadata?: ResourceScanMetadata;
  lastScannedAt?: Date;
  scanMode?: string;
  provider?: string;
  providerAccountId?: string;
  providerOrgId?: string;
  providerRegion?: string;
  providerPartition?: string;
}
const CoveredResource = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceType: S.String,
    resourceId: S.String,
    accountId: S.String,
    scanType: S.String,
    scanStatus: S.optional(ScanStatus),
    resourceMetadata: S.optional(ResourceScanMetadata),
    lastScannedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    scanMode: S.optional(S.String),
    provider: S.optional(S.String),
    providerAccountId: S.optional(S.String),
    providerOrgId: S.optional(S.String),
    providerRegion: S.optional(S.String),
    providerPartition: S.optional(S.String),
  }),
).annotate({ identifier: "CoveredResource" }) as any as S.Schema<CoveredResource>;
export type CoveredResources = CoveredResource[];
const CoveredResources = /*@__PURE__*/ S.Array(CoveredResource);
export interface ListCoverageResponse {
  nextToken?: string;
  coveredResources?: CoveredResource[];
}
const ListCoverageResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ nextToken: S.optional(S.String), coveredResources: S.optional(CoveredResources) }),
).annotate({ identifier: "ListCoverageResponse" }) as any as S.Schema<ListCoverageResponse>;
export type GroupKey = string;
export interface ListCoverageStatisticsRequest {
  filterCriteria?: CoverageFilterCriteria;
  groupBy?: string;
  nextToken?: string;
}
const ListCoverageStatisticsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    filterCriteria: S.optional(CoverageFilterCriteria),
    groupBy: S.optional(S.String),
    nextToken: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/coverage/statistics/list" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListCoverageStatisticsRequest",
}) as any as S.Schema<ListCoverageStatisticsRequest>;
export type AggCounts = number;
export interface Counts {
  count?: number;
  groupKey?: string;
}
const Counts = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ count: S.optional(S.Number), groupKey: S.optional(S.String) }),
).annotate({ identifier: "Counts" }) as any as S.Schema<Counts>;
export type CountsList = Counts[];
const CountsList = /*@__PURE__*/ S.Array(Counts);
export interface ListCoverageStatisticsResponse {
  countsByGroup?: Counts[];
  totalCounts: number;
  nextToken?: string;
}
const ListCoverageStatisticsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    countsByGroup: S.optional(CountsList),
    totalCounts: S.Number,
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListCoverageStatisticsResponse",
}) as any as S.Schema<ListCoverageStatisticsResponse>;
export type ListDelegatedAdminMaxResults = number;
export interface ListDelegatedAdminAccountsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListDelegatedAdminAccountsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/delegatedadminaccounts/list" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListDelegatedAdminAccountsRequest",
}) as any as S.Schema<ListDelegatedAdminAccountsRequest>;
export type DelegatedAdminStatus = string;
export interface DelegatedAdminAccount {
  accountId?: string;
  status?: string;
}
const DelegatedAdminAccount = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountId: S.optional(S.String), status: S.optional(S.String) }),
).annotate({ identifier: "DelegatedAdminAccount" }) as any as S.Schema<DelegatedAdminAccount>;
export type DelegatedAdminAccountList = DelegatedAdminAccount[];
const DelegatedAdminAccountList = /*@__PURE__*/ S.Array(DelegatedAdminAccount);
export interface ListDelegatedAdminAccountsResponse {
  delegatedAdminAccounts?: DelegatedAdminAccount[];
  nextToken?: string;
}
const ListDelegatedAdminAccountsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    delegatedAdminAccounts: S.optional(DelegatedAdminAccountList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListDelegatedAdminAccountsResponse",
}) as any as S.Schema<ListDelegatedAdminAccountsResponse>;
export type FilterArnList = string[];
const FilterArnList = AccountIdSet as any as S.Schema<FilterArnList>;
export type ListFilterMaxResults = number;
export interface ListFiltersRequest {
  arns?: string[];
  action?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListFiltersRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    arns: S.optional(FilterArnList),
    action: S.optional(S.String),
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/filters/list" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListFiltersRequest" }) as any as S.Schema<ListFiltersRequest>;
export interface Filter {
  arn: string;
  ownerId: string;
  name: string;
  criteria: FilterCriteria;
  action: string;
  createdAt: Date;
  updatedAt: Date;
  description?: string;
  reason?: string;
  tags?: { [key: string]: string | undefined };
}
const Filter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    arn: S.String,
    ownerId: S.String,
    name: S.String,
    criteria: FilterCriteria,
    action: S.String,
    createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    description: S.optional(S.String),
    reason: S.optional(S.String),
    tags: S.optional(TagMap),
  }),
).annotate({ identifier: "Filter" }) as any as S.Schema<Filter>;
export type FilterList = Filter[];
const FilterList = /*@__PURE__*/ S.Array(Filter);
export interface ListFiltersResponse {
  filters: Filter[];
  nextToken?: string;
}
const ListFiltersResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ filters: FilterList, nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListFiltersResponse" }) as any as S.Schema<ListFiltersResponse>;
export type AggregationType = string;
export type ListFindingAggregationsMaxResults = number;
export type AggregationFindingType = string;
export type AggregationResourceType = string;
export type SortOrder = string;
export type AccountSortBy = string;
export interface AccountAggregation {
  findingType?: string;
  resourceType?: string;
  sortOrder?: string;
  sortBy?: string;
}
const AccountAggregation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    findingType: S.optional(S.String),
    resourceType: S.optional(S.String),
    sortOrder: S.optional(S.String),
    sortBy: S.optional(S.String),
  }),
).annotate({ identifier: "AccountAggregation" }) as any as S.Schema<AccountAggregation>;
export type AmiSortBy = string;
export interface AmiAggregation {
  amis?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
}
const AmiAggregation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    amis: S.optional(StringFilterList),
    sortOrder: S.optional(S.String),
    sortBy: S.optional(S.String),
  }),
).annotate({ identifier: "AmiAggregation" }) as any as S.Schema<AmiAggregation>;
export type AwsEcrContainerSortBy = string;
export interface AwsEcrContainerAggregation {
  resourceIds?: StringFilter[];
  imageShas?: StringFilter[];
  repositories?: StringFilter[];
  architectures?: StringFilter[];
  imageTags?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
  lastInUseAt?: DateFilter[];
  inUseCount?: NumberFilter[];
}
const AwsEcrContainerAggregation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceIds: S.optional(StringFilterList),
    imageShas: S.optional(StringFilterList),
    repositories: S.optional(StringFilterList),
    architectures: S.optional(StringFilterList),
    imageTags: S.optional(StringFilterList),
    sortOrder: S.optional(S.String),
    sortBy: S.optional(S.String),
    lastInUseAt: S.optional(DateFilterList),
    inUseCount: S.optional(NumberFilterList),
  }),
).annotate({
  identifier: "AwsEcrContainerAggregation",
}) as any as S.Schema<AwsEcrContainerAggregation>;
export type Ec2InstanceSortBy = string;
export interface Ec2InstanceAggregation {
  amis?: StringFilter[];
  operatingSystems?: StringFilter[];
  instanceIds?: StringFilter[];
  instanceTags?: MapFilter[];
  sortOrder?: string;
  sortBy?: string;
}
const Ec2InstanceAggregation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    amis: S.optional(StringFilterList),
    operatingSystems: S.optional(StringFilterList),
    instanceIds: S.optional(StringFilterList),
    instanceTags: S.optional(MapFilterList),
    sortOrder: S.optional(S.String),
    sortBy: S.optional(S.String),
  }),
).annotate({ identifier: "Ec2InstanceAggregation" }) as any as S.Schema<Ec2InstanceAggregation>;
export type FindingTypeSortBy = string;
export interface FindingTypeAggregation {
  findingType?: string;
  resourceType?: string;
  sortOrder?: string;
  sortBy?: string;
}
const FindingTypeAggregation = AccountAggregation as any as S.Schema<FindingTypeAggregation>;
export type ImageLayerSortBy = string;
export interface ImageLayerAggregation {
  repositories?: StringFilter[];
  resourceIds?: StringFilter[];
  layerHashes?: StringFilter[];
  cloudProviders?: StringFilter[];
  cloudAccountIds?: StringFilter[];
  cloudOrgIds?: StringFilter[];
  cloudRegions?: StringFilter[];
  cloudPartitions?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
}
const ImageLayerAggregation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    repositories: S.optional(StringFilterList),
    resourceIds: S.optional(StringFilterList),
    layerHashes: S.optional(StringFilterList),
    cloudProviders: S.optional(StringFilterList),
    cloudAccountIds: S.optional(StringFilterList),
    cloudOrgIds: S.optional(StringFilterList),
    cloudRegions: S.optional(StringFilterList),
    cloudPartitions: S.optional(StringFilterList),
    sortOrder: S.optional(S.String),
    sortBy: S.optional(S.String),
  }),
).annotate({ identifier: "ImageLayerAggregation" }) as any as S.Schema<ImageLayerAggregation>;
export type PackageSortBy = string;
export interface PackageAggregation {
  packageNames?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
}
const PackageAggregation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    packageNames: S.optional(StringFilterList),
    sortOrder: S.optional(S.String),
    sortBy: S.optional(S.String),
  }),
).annotate({ identifier: "PackageAggregation" }) as any as S.Schema<PackageAggregation>;
export type RepositorySortBy = string;
export interface RepositoryAggregation {
  repositories?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
}
const RepositoryAggregation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    repositories: S.optional(StringFilterList),
    sortOrder: S.optional(S.String),
    sortBy: S.optional(S.String),
  }),
).annotate({ identifier: "RepositoryAggregation" }) as any as S.Schema<RepositoryAggregation>;
export type TitleSortBy = string;
export interface TitleAggregation {
  titles?: StringFilter[];
  vulnerabilityIds?: StringFilter[];
  resourceType?: string;
  findingType?: string;
  sortOrder?: string;
  sortBy?: string;
}
const TitleAggregation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    titles: S.optional(StringFilterList),
    vulnerabilityIds: S.optional(StringFilterList),
    resourceType: S.optional(S.String),
    findingType: S.optional(S.String),
    sortOrder: S.optional(S.String),
    sortBy: S.optional(S.String),
  }),
).annotate({ identifier: "TitleAggregation" }) as any as S.Schema<TitleAggregation>;
export type LambdaLayerSortBy = string;
export interface LambdaLayerAggregation {
  functionNames?: StringFilter[];
  resourceIds?: StringFilter[];
  layerArns?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
}
const LambdaLayerAggregation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    functionNames: S.optional(StringFilterList),
    resourceIds: S.optional(StringFilterList),
    layerArns: S.optional(StringFilterList),
    sortOrder: S.optional(S.String),
    sortBy: S.optional(S.String),
  }),
).annotate({ identifier: "LambdaLayerAggregation" }) as any as S.Schema<LambdaLayerAggregation>;
export type LambdaFunctionSortBy = string;
export interface LambdaFunctionAggregation {
  resourceIds?: StringFilter[];
  functionNames?: StringFilter[];
  runtimes?: StringFilter[];
  functionTags?: MapFilter[];
  sortOrder?: string;
  sortBy?: string;
}
const LambdaFunctionAggregation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceIds: S.optional(StringFilterList),
    functionNames: S.optional(StringFilterList),
    runtimes: S.optional(StringFilterList),
    functionTags: S.optional(MapFilterList),
    sortOrder: S.optional(S.String),
    sortBy: S.optional(S.String),
  }),
).annotate({
  identifier: "LambdaFunctionAggregation",
}) as any as S.Schema<LambdaFunctionAggregation>;
export type CodeRepositorySortBy = string;
export interface CodeRepositoryAggregation {
  projectNames?: StringFilter[];
  providerTypes?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
  resourceIds?: StringFilter[];
}
const CodeRepositoryAggregation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    projectNames: S.optional(StringFilterList),
    providerTypes: S.optional(StringFilterList),
    sortOrder: S.optional(S.String),
    sortBy: S.optional(S.String),
    resourceIds: S.optional(StringFilterList),
  }),
).annotate({
  identifier: "CodeRepositoryAggregation",
}) as any as S.Schema<CodeRepositoryAggregation>;
export type VmInstanceSortBy = string;
export interface VmInstanceAggregation {
  resourceIds?: StringFilter[];
  operatingSystems?: StringFilter[];
  instanceTags?: MapFilter[];
  vmImageReferences?: StringFilter[];
  cloudProviders?: StringFilter[];
  cloudPartitions?: StringFilter[];
  cloudRegions?: StringFilter[];
  cloudOrgIds?: StringFilter[];
  cloudAccountIds?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
}
const VmInstanceAggregation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceIds: S.optional(StringFilterList),
    operatingSystems: S.optional(StringFilterList),
    instanceTags: S.optional(MapFilterList),
    vmImageReferences: S.optional(StringFilterList),
    cloudProviders: S.optional(StringFilterList),
    cloudPartitions: S.optional(StringFilterList),
    cloudRegions: S.optional(StringFilterList),
    cloudOrgIds: S.optional(StringFilterList),
    cloudAccountIds: S.optional(StringFilterList),
    sortOrder: S.optional(S.String),
    sortBy: S.optional(S.String),
  }),
).annotate({ identifier: "VmInstanceAggregation" }) as any as S.Schema<VmInstanceAggregation>;
export type ContainerImageSortBy = string;
export interface ContainerImageAggregation {
  resourceIds?: StringFilter[];
  imageDigests?: StringFilter[];
  repositories?: StringFilter[];
  registries?: StringFilter[];
  architectures?: StringFilter[];
  imageTags?: StringFilter[];
  cloudProviders?: StringFilter[];
  cloudPartitions?: StringFilter[];
  cloudRegions?: StringFilter[];
  cloudOrgIds?: StringFilter[];
  cloudAccountIds?: StringFilter[];
  lastInUseAt?: DateFilter[];
  inUseCount?: NumberFilter[];
  sortOrder?: string;
  sortBy?: string;
}
const ContainerImageAggregation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceIds: S.optional(StringFilterList),
    imageDigests: S.optional(StringFilterList),
    repositories: S.optional(StringFilterList),
    registries: S.optional(StringFilterList),
    architectures: S.optional(StringFilterList),
    imageTags: S.optional(StringFilterList),
    cloudProviders: S.optional(StringFilterList),
    cloudPartitions: S.optional(StringFilterList),
    cloudRegions: S.optional(StringFilterList),
    cloudOrgIds: S.optional(StringFilterList),
    cloudAccountIds: S.optional(StringFilterList),
    lastInUseAt: S.optional(DateFilterList),
    inUseCount: S.optional(NumberFilterList),
    sortOrder: S.optional(S.String),
    sortBy: S.optional(S.String),
  }),
).annotate({
  identifier: "ContainerImageAggregation",
}) as any as S.Schema<ContainerImageAggregation>;
export type ServerlessFunctionSortBy = string;
export interface ServerlessFunctionAggregation {
  resourceIds?: StringFilter[];
  functionNames?: StringFilter[];
  runtimes?: StringFilter[];
  functionTags?: MapFilter[];
  cloudProviders?: StringFilter[];
  cloudPartitions?: StringFilter[];
  cloudRegions?: StringFilter[];
  cloudOrgIds?: StringFilter[];
  cloudAccountIds?: StringFilter[];
  sortOrder?: string;
  sortBy?: string;
}
const ServerlessFunctionAggregation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceIds: S.optional(StringFilterList),
    functionNames: S.optional(StringFilterList),
    runtimes: S.optional(StringFilterList),
    functionTags: S.optional(MapFilterList),
    cloudProviders: S.optional(StringFilterList),
    cloudPartitions: S.optional(StringFilterList),
    cloudRegions: S.optional(StringFilterList),
    cloudOrgIds: S.optional(StringFilterList),
    cloudAccountIds: S.optional(StringFilterList),
    sortOrder: S.optional(S.String),
    sortBy: S.optional(S.String),
  }),
).annotate({
  identifier: "ServerlessFunctionAggregation",
}) as any as S.Schema<ServerlessFunctionAggregation>;
export type AggregationRequest =
  | {
      accountAggregation: AccountAggregation;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation: AmiAggregation;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation: AwsEcrContainerAggregation;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation: Ec2InstanceAggregation;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation: FindingTypeAggregation;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation: ImageLayerAggregation;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation: PackageAggregation;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation: RepositoryAggregation;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation: TitleAggregation;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation: LambdaLayerAggregation;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation: LambdaFunctionAggregation;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation: CodeRepositoryAggregation;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation: VmInstanceAggregation;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation: ContainerImageAggregation;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation: ServerlessFunctionAggregation;
    };
const AggregationRequest = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ accountAggregation: AccountAggregation }),
  /*@__PURE__*/ S.Struct({ amiAggregation: AmiAggregation }),
  /*@__PURE__*/ S.Struct({ awsEcrContainerAggregation: AwsEcrContainerAggregation }),
  /*@__PURE__*/ S.Struct({ ec2InstanceAggregation: Ec2InstanceAggregation }),
  /*@__PURE__*/ S.Struct({ findingTypeAggregation: FindingTypeAggregation }),
  /*@__PURE__*/ S.Struct({ imageLayerAggregation: ImageLayerAggregation }),
  /*@__PURE__*/ S.Struct({ packageAggregation: PackageAggregation }),
  /*@__PURE__*/ S.Struct({ repositoryAggregation: RepositoryAggregation }),
  /*@__PURE__*/ S.Struct({ titleAggregation: TitleAggregation }),
  /*@__PURE__*/ S.Struct({ lambdaLayerAggregation: LambdaLayerAggregation }),
  /*@__PURE__*/ S.Struct({ lambdaFunctionAggregation: LambdaFunctionAggregation }),
  /*@__PURE__*/ S.Struct({ codeRepositoryAggregation: CodeRepositoryAggregation }),
  /*@__PURE__*/ S.Struct({ vmInstanceAggregation: VmInstanceAggregation }),
  /*@__PURE__*/ S.Struct({ containerImageAggregation: ContainerImageAggregation }),
  /*@__PURE__*/ S.Struct({ serverlessFunctionAggregation: ServerlessFunctionAggregation }),
]);
export interface ListFindingAggregationsRequest {
  aggregationType: string;
  nextToken?: string;
  maxResults?: number;
  accountIds?: StringFilter[];
  aggregationRequest?: AggregationRequest;
}
const ListFindingAggregationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    aggregationType: S.String,
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
    accountIds: S.optional(StringFilterList),
    aggregationRequest: S.optional(AggregationRequest),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/findings/aggregation/list" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListFindingAggregationsRequest",
}) as any as S.Schema<ListFindingAggregationsRequest>;
export interface SeverityCounts {
  all?: number;
  medium?: number;
  high?: number;
  critical?: number;
  low?: number;
  informational?: number;
  untriaged?: number;
}
const SeverityCounts = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    all: S.optional(S.Number),
    medium: S.optional(S.Number),
    high: S.optional(S.Number),
    critical: S.optional(S.Number),
    low: S.optional(S.Number),
    informational: S.optional(S.Number),
    untriaged: S.optional(S.Number),
  }),
).annotate({ identifier: "SeverityCounts" }) as any as S.Schema<SeverityCounts>;
export interface AccountAggregationResponse {
  accountId?: string;
  severityCounts?: SeverityCounts;
  exploitAvailableCount?: number;
  fixAvailableCount?: number;
}
const AccountAggregationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountId: S.optional(S.String),
    severityCounts: S.optional(SeverityCounts),
    exploitAvailableCount: S.optional(S.Number),
    fixAvailableCount: S.optional(S.Number),
  }),
).annotate({
  identifier: "AccountAggregationResponse",
}) as any as S.Schema<AccountAggregationResponse>;
export interface AmiAggregationResponse {
  ami: string;
  accountId?: string;
  cloudProvider?: string;
  cloudPartition?: string;
  cloudRegion?: string;
  cloudOrgId?: string;
  cloudAccountId?: string;
  severityCounts?: SeverityCounts;
  affectedInstances?: number;
}
const AmiAggregationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    ami: S.String,
    accountId: S.optional(S.String),
    cloudProvider: S.optional(S.String),
    cloudPartition: S.optional(S.String),
    cloudRegion: S.optional(S.String),
    cloudOrgId: S.optional(S.String),
    cloudAccountId: S.optional(S.String),
    severityCounts: S.optional(SeverityCounts),
    affectedInstances: S.optional(S.Number),
  }),
).annotate({ identifier: "AmiAggregationResponse" }) as any as S.Schema<AmiAggregationResponse>;
export type StringList = string[];
const StringList = AccountIdSet as any as S.Schema<StringList>;
export interface AwsEcrContainerAggregationResponse {
  resourceId: string;
  imageSha?: string;
  repository?: string;
  architecture?: string;
  imageTags?: string[];
  accountId?: string;
  severityCounts?: SeverityCounts;
  lastInUseAt?: Date;
  inUseCount?: number;
}
const AwsEcrContainerAggregationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceId: S.String,
    imageSha: S.optional(S.String),
    repository: S.optional(S.String),
    architecture: S.optional(S.String),
    imageTags: S.optional(StringList),
    accountId: S.optional(S.String),
    severityCounts: S.optional(SeverityCounts),
    lastInUseAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    inUseCount: S.optional(S.Number),
  }),
).annotate({
  identifier: "AwsEcrContainerAggregationResponse",
}) as any as S.Schema<AwsEcrContainerAggregationResponse>;
export interface Ec2InstanceAggregationResponse {
  instanceId: string;
  ami?: string;
  operatingSystem?: string;
  instanceTags?: { [key: string]: string | undefined };
  accountId?: string;
  severityCounts?: SeverityCounts;
  networkFindings?: number;
}
const Ec2InstanceAggregationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    instanceId: S.String,
    ami: S.optional(S.String),
    operatingSystem: S.optional(S.String),
    instanceTags: S.optional(TagMap),
    accountId: S.optional(S.String),
    severityCounts: S.optional(SeverityCounts),
    networkFindings: S.optional(S.Number),
  }),
).annotate({
  identifier: "Ec2InstanceAggregationResponse",
}) as any as S.Schema<Ec2InstanceAggregationResponse>;
export interface FindingTypeAggregationResponse {
  accountId?: string;
  severityCounts?: SeverityCounts;
  exploitAvailableCount?: number;
  fixAvailableCount?: number;
  cloudProvider?: string;
  cloudAccountId?: string;
  cloudOrgId?: string;
  cloudRegion?: string;
  cloudPartition?: string;
}
const FindingTypeAggregationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountId: S.optional(S.String),
    severityCounts: S.optional(SeverityCounts),
    exploitAvailableCount: S.optional(S.Number),
    fixAvailableCount: S.optional(S.Number),
    cloudProvider: S.optional(S.String),
    cloudAccountId: S.optional(S.String),
    cloudOrgId: S.optional(S.String),
    cloudRegion: S.optional(S.String),
    cloudPartition: S.optional(S.String),
  }),
).annotate({
  identifier: "FindingTypeAggregationResponse",
}) as any as S.Schema<FindingTypeAggregationResponse>;
export interface ImageLayerAggregationResponse {
  repository: string;
  resourceId: string;
  layerHash: string;
  accountId: string;
  cloudProvider?: string;
  cloudAccountId?: string;
  cloudOrgId?: string;
  cloudRegion?: string;
  cloudPartition?: string;
  severityCounts?: SeverityCounts;
}
const ImageLayerAggregationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    repository: S.String,
    resourceId: S.String,
    layerHash: S.String,
    accountId: S.String,
    cloudProvider: S.optional(S.String),
    cloudAccountId: S.optional(S.String),
    cloudOrgId: S.optional(S.String),
    cloudRegion: S.optional(S.String),
    cloudPartition: S.optional(S.String),
    severityCounts: S.optional(SeverityCounts),
  }),
).annotate({
  identifier: "ImageLayerAggregationResponse",
}) as any as S.Schema<ImageLayerAggregationResponse>;
export interface PackageAggregationResponse {
  packageName: string;
  accountId?: string;
  severityCounts?: SeverityCounts;
}
const PackageAggregationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    packageName: S.String,
    accountId: S.optional(S.String),
    severityCounts: S.optional(SeverityCounts),
  }),
).annotate({
  identifier: "PackageAggregationResponse",
}) as any as S.Schema<PackageAggregationResponse>;
export interface RepositoryAggregationResponse {
  repository: string;
  accountId?: string;
  cloudProvider?: string;
  cloudPartition?: string;
  cloudRegion?: string;
  cloudOrgId?: string;
  cloudAccountId?: string;
  severityCounts?: SeverityCounts;
  affectedImages?: number;
}
const RepositoryAggregationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    repository: S.String,
    accountId: S.optional(S.String),
    cloudProvider: S.optional(S.String),
    cloudPartition: S.optional(S.String),
    cloudRegion: S.optional(S.String),
    cloudOrgId: S.optional(S.String),
    cloudAccountId: S.optional(S.String),
    severityCounts: S.optional(SeverityCounts),
    affectedImages: S.optional(S.Number),
  }),
).annotate({
  identifier: "RepositoryAggregationResponse",
}) as any as S.Schema<RepositoryAggregationResponse>;
export interface TitleAggregationResponse {
  title: string;
  vulnerabilityId?: string;
  accountId?: string;
  severityCounts?: SeverityCounts;
}
const TitleAggregationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    title: S.String,
    vulnerabilityId: S.optional(S.String),
    accountId: S.optional(S.String),
    severityCounts: S.optional(SeverityCounts),
  }),
).annotate({ identifier: "TitleAggregationResponse" }) as any as S.Schema<TitleAggregationResponse>;
export interface LambdaLayerAggregationResponse {
  functionName: string;
  resourceId: string;
  layerArn: string;
  accountId: string;
  severityCounts?: SeverityCounts;
}
const LambdaLayerAggregationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    functionName: S.String,
    resourceId: S.String,
    layerArn: S.String,
    accountId: S.String,
    severityCounts: S.optional(SeverityCounts),
  }),
).annotate({
  identifier: "LambdaLayerAggregationResponse",
}) as any as S.Schema<LambdaLayerAggregationResponse>;
export interface LambdaFunctionAggregationResponse {
  resourceId: string;
  functionName?: string;
  runtime?: string;
  lambdaTags?: { [key: string]: string | undefined };
  accountId?: string;
  severityCounts?: SeverityCounts;
  lastModifiedAt?: Date;
}
const LambdaFunctionAggregationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceId: S.String,
    functionName: S.optional(S.String),
    runtime: S.optional(S.String),
    lambdaTags: S.optional(TagMap),
    accountId: S.optional(S.String),
    severityCounts: S.optional(SeverityCounts),
    lastModifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
  }),
).annotate({
  identifier: "LambdaFunctionAggregationResponse",
}) as any as S.Schema<LambdaFunctionAggregationResponse>;
export interface CodeRepositoryAggregationResponse {
  projectNames: string;
  providerType?: string;
  severityCounts?: SeverityCounts;
  exploitAvailableActiveFindingsCount?: number;
  fixAvailableActiveFindingsCount?: number;
  accountId?: string;
  resourceId?: string;
}
const CodeRepositoryAggregationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    projectNames: S.String,
    providerType: S.optional(S.String),
    severityCounts: S.optional(SeverityCounts),
    exploitAvailableActiveFindingsCount: S.optional(S.Number),
    fixAvailableActiveFindingsCount: S.optional(S.Number),
    accountId: S.optional(S.String),
    resourceId: S.optional(S.String),
  }),
).annotate({
  identifier: "CodeRepositoryAggregationResponse",
}) as any as S.Schema<CodeRepositoryAggregationResponse>;
export interface VmInstanceAggregationResponse {
  resourceId: string;
  cloudProvider?: string;
  cloudAccountId?: string;
  cloudPartition?: string;
  cloudRegion?: string;
  cloudOrgId?: string;
  vmImageReference?: string;
  operatingSystem?: string;
  tags?: { [key: string]: string | undefined };
  accountId?: string;
  severityCounts?: SeverityCounts;
  networkFindings?: number;
  exploitAvailableActiveFindingsCount?: number;
  fixAvailableActiveFindingsCount?: number;
}
const VmInstanceAggregationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceId: S.String,
    cloudProvider: S.optional(S.String),
    cloudAccountId: S.optional(S.String),
    cloudPartition: S.optional(S.String),
    cloudRegion: S.optional(S.String),
    cloudOrgId: S.optional(S.String),
    vmImageReference: S.optional(S.String),
    operatingSystem: S.optional(S.String),
    tags: S.optional(TagMap),
    accountId: S.optional(S.String),
    severityCounts: S.optional(SeverityCounts),
    networkFindings: S.optional(S.Number),
    exploitAvailableActiveFindingsCount: S.optional(S.Number),
    fixAvailableActiveFindingsCount: S.optional(S.Number),
  }),
).annotate({
  identifier: "VmInstanceAggregationResponse",
}) as any as S.Schema<VmInstanceAggregationResponse>;
export interface ContainerImageAggregationResponse {
  resourceId: string;
  cloudProvider?: string;
  cloudAccountId?: string;
  cloudPartition?: string;
  cloudRegion?: string;
  cloudOrgId?: string;
  imageDigest?: string;
  repository?: string;
  registry?: string;
  architecture?: string;
  imageTags?: string[];
  accountId?: string;
  severityCounts?: SeverityCounts;
  lastInUseAt?: Date;
  inUseCount?: number;
  exploitAvailableActiveFindingsCount?: number;
  fixAvailableActiveFindingsCount?: number;
}
const ContainerImageAggregationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceId: S.String,
    cloudProvider: S.optional(S.String),
    cloudAccountId: S.optional(S.String),
    cloudPartition: S.optional(S.String),
    cloudRegion: S.optional(S.String),
    cloudOrgId: S.optional(S.String),
    imageDigest: S.optional(S.String),
    repository: S.optional(S.String),
    registry: S.optional(S.String),
    architecture: S.optional(S.String),
    imageTags: S.optional(StringList),
    accountId: S.optional(S.String),
    severityCounts: S.optional(SeverityCounts),
    lastInUseAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    inUseCount: S.optional(S.Number),
    exploitAvailableActiveFindingsCount: S.optional(S.Number),
    fixAvailableActiveFindingsCount: S.optional(S.Number),
  }),
).annotate({
  identifier: "ContainerImageAggregationResponse",
}) as any as S.Schema<ContainerImageAggregationResponse>;
export interface ServerlessFunctionAggregationResponse {
  resourceId: string;
  cloudProvider?: string;
  cloudAccountId?: string;
  cloudPartition?: string;
  cloudRegion?: string;
  cloudOrgId?: string;
  functionName?: string;
  runtime?: string;
  tags?: { [key: string]: string | undefined };
  accountId?: string;
  severityCounts?: SeverityCounts;
  lastModifiedAt?: Date;
  exploitAvailableActiveFindingsCount?: number;
  fixAvailableActiveFindingsCount?: number;
}
const ServerlessFunctionAggregationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceId: S.String,
    cloudProvider: S.optional(S.String),
    cloudAccountId: S.optional(S.String),
    cloudPartition: S.optional(S.String),
    cloudRegion: S.optional(S.String),
    cloudOrgId: S.optional(S.String),
    functionName: S.optional(S.String),
    runtime: S.optional(S.String),
    tags: S.optional(TagMap),
    accountId: S.optional(S.String),
    severityCounts: S.optional(SeverityCounts),
    lastModifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    exploitAvailableActiveFindingsCount: S.optional(S.Number),
    fixAvailableActiveFindingsCount: S.optional(S.Number),
  }),
).annotate({
  identifier: "ServerlessFunctionAggregationResponse",
}) as any as S.Schema<ServerlessFunctionAggregationResponse>;
export type AggregationResponse =
  | {
      accountAggregation: AccountAggregationResponse;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation: AmiAggregationResponse;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation: AwsEcrContainerAggregationResponse;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation: Ec2InstanceAggregationResponse;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation: FindingTypeAggregationResponse;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation: ImageLayerAggregationResponse;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation: PackageAggregationResponse;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation: RepositoryAggregationResponse;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation: TitleAggregationResponse;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation: LambdaLayerAggregationResponse;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation: LambdaFunctionAggregationResponse;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation: CodeRepositoryAggregationResponse;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation: VmInstanceAggregationResponse;
      containerImageAggregation?: never;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation: ContainerImageAggregationResponse;
      serverlessFunctionAggregation?: never;
    }
  | {
      accountAggregation?: never;
      amiAggregation?: never;
      awsEcrContainerAggregation?: never;
      ec2InstanceAggregation?: never;
      findingTypeAggregation?: never;
      imageLayerAggregation?: never;
      packageAggregation?: never;
      repositoryAggregation?: never;
      titleAggregation?: never;
      lambdaLayerAggregation?: never;
      lambdaFunctionAggregation?: never;
      codeRepositoryAggregation?: never;
      vmInstanceAggregation?: never;
      containerImageAggregation?: never;
      serverlessFunctionAggregation: ServerlessFunctionAggregationResponse;
    };
const AggregationResponse = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ accountAggregation: AccountAggregationResponse }),
  /*@__PURE__*/ S.Struct({ amiAggregation: AmiAggregationResponse }),
  /*@__PURE__*/ S.Struct({ awsEcrContainerAggregation: AwsEcrContainerAggregationResponse }),
  /*@__PURE__*/ S.Struct({ ec2InstanceAggregation: Ec2InstanceAggregationResponse }),
  /*@__PURE__*/ S.Struct({ findingTypeAggregation: FindingTypeAggregationResponse }),
  /*@__PURE__*/ S.Struct({ imageLayerAggregation: ImageLayerAggregationResponse }),
  /*@__PURE__*/ S.Struct({ packageAggregation: PackageAggregationResponse }),
  /*@__PURE__*/ S.Struct({ repositoryAggregation: RepositoryAggregationResponse }),
  /*@__PURE__*/ S.Struct({ titleAggregation: TitleAggregationResponse }),
  /*@__PURE__*/ S.Struct({ lambdaLayerAggregation: LambdaLayerAggregationResponse }),
  /*@__PURE__*/ S.Struct({ lambdaFunctionAggregation: LambdaFunctionAggregationResponse }),
  /*@__PURE__*/ S.Struct({ codeRepositoryAggregation: CodeRepositoryAggregationResponse }),
  /*@__PURE__*/ S.Struct({ vmInstanceAggregation: VmInstanceAggregationResponse }),
  /*@__PURE__*/ S.Struct({ containerImageAggregation: ContainerImageAggregationResponse }),
  /*@__PURE__*/ S.Struct({ serverlessFunctionAggregation: ServerlessFunctionAggregationResponse }),
]);
export type AggregationResponseList = AggregationResponse[];
const AggregationResponseList = /*@__PURE__*/ S.Array(AggregationResponse);
export interface ListFindingAggregationsResponse {
  aggregationType: string;
  responses?: AggregationResponse[];
  nextToken?: string;
}
const ListFindingAggregationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    aggregationType: S.String,
    responses: S.optional(AggregationResponseList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListFindingAggregationsResponse",
}) as any as S.Schema<ListFindingAggregationsResponse>;
export type ListFindingsMaxResults = number;
export type SortField = string;
export interface SortCriteria {
  field: string;
  sortOrder: string;
}
const SortCriteria = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ field: S.String, sortOrder: S.String }),
).annotate({ identifier: "SortCriteria" }) as any as S.Schema<SortCriteria>;
export interface ListFindingsRequest {
  maxResults?: number;
  nextToken?: string;
  filterCriteria?: FilterCriteria;
  sortCriteria?: SortCriteria;
}
const ListFindingsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    maxResults: S.optional(S.Number),
    nextToken: S.optional(S.String),
    filterCriteria: S.optional(FilterCriteria),
    sortCriteria: S.optional(SortCriteria),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/findings/list" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListFindingsRequest" }) as any as S.Schema<ListFindingsRequest>;
export type FindingType = string;
export type FindingDescription = string;
export type FindingTitle = string;
export interface Recommendation {
  text?: string;
  Url?: string;
}
const Recommendation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ text: S.optional(S.String), Url: S.optional(S.String) }),
).annotate({ identifier: "Recommendation" }) as any as S.Schema<Recommendation>;
export interface Remediation {
  recommendation?: Recommendation;
}
const Remediation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ recommendation: S.optional(Recommendation) }),
).annotate({ identifier: "Remediation" }) as any as S.Schema<Remediation>;
export type Severity = string;
export type FindingStatus = string;
export type IpV4Address = string;
export type IpV4AddressList = string[];
const IpV4AddressList = AccountIdSet as any as S.Schema<IpV4AddressList>;
export type IpV6Address = string;
export type IpV6AddressList = string[];
const IpV6AddressList = AccountIdSet as any as S.Schema<IpV6AddressList>;
export type Platform = string;
export interface AwsEc2InstanceDetails {
  type?: string;
  imageId?: string;
  ipV4Addresses?: string[];
  ipV6Addresses?: string[];
  keyName?: string;
  iamInstanceProfileArn?: string;
  vpcId?: string;
  subnetId?: string;
  launchedAt?: Date;
  platform?: string;
}
const AwsEc2InstanceDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.optional(S.String),
    imageId: S.optional(S.String),
    ipV4Addresses: S.optional(IpV4AddressList),
    ipV6Addresses: S.optional(IpV6AddressList),
    keyName: S.optional(S.String),
    iamInstanceProfileArn: S.optional(S.String),
    vpcId: S.optional(S.String),
    subnetId: S.optional(S.String),
    launchedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    platform: S.optional(S.String),
  }),
).annotate({ identifier: "AwsEc2InstanceDetails" }) as any as S.Schema<AwsEc2InstanceDetails>;
export type ImageTagList = string[];
const ImageTagList = AccountIdSet as any as S.Schema<ImageTagList>;
export type ImageHash = string;
export interface AwsEcrContainerImageDetails {
  repositoryName: string;
  imageTags?: string[];
  pushedAt?: Date;
  author?: string;
  architecture?: string;
  imageHash: string;
  registry: string;
  platform?: string;
  lastInUseAt?: Date;
  inUseCount?: number;
}
const AwsEcrContainerImageDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    repositoryName: S.String,
    imageTags: S.optional(ImageTagList),
    pushedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    author: S.optional(S.String),
    architecture: S.optional(S.String),
    imageHash: S.String,
    registry: S.String,
    platform: S.optional(S.String),
    lastInUseAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    inUseCount: S.optional(S.Number),
  }),
).annotate({
  identifier: "AwsEcrContainerImageDetails",
}) as any as S.Schema<AwsEcrContainerImageDetails>;
export type FunctionName = string;
export type Version = string;
export type ExecutionRoleArn = string;
export type LambdaLayerArn = string;
export type LayerList = string[];
const LayerList = AccountIdSet as any as S.Schema<LayerList>;
export type SubnetId = string;
export type SubnetIdList = string[];
const SubnetIdList = AccountIdSet as any as S.Schema<SubnetIdList>;
export type SecurityGroupId = string;
export type SecurityGroupIdList = string[];
const SecurityGroupIdList = AccountIdSet as any as S.Schema<SecurityGroupIdList>;
export type VpcId = string;
export interface LambdaVpcConfig {
  subnetIds?: string[];
  securityGroupIds?: string[];
  vpcId?: string;
}
const LambdaVpcConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    subnetIds: S.optional(SubnetIdList),
    securityGroupIds: S.optional(SecurityGroupIdList),
    vpcId: S.optional(S.String),
  }),
).annotate({ identifier: "LambdaVpcConfig" }) as any as S.Schema<LambdaVpcConfig>;
export type PackageType = string;
export type Architecture = string;
export type ArchitectureList = string[];
const ArchitectureList = AccountIdSet as any as S.Schema<ArchitectureList>;
export interface AwsLambdaFunctionDetails {
  functionName: string;
  runtime: string;
  codeSha256: string;
  version: string;
  executionRoleArn: string;
  layers?: string[];
  vpcConfig?: LambdaVpcConfig;
  packageType?: string;
  architectures?: string[];
  lastModifiedAt?: Date;
}
const AwsLambdaFunctionDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    functionName: S.String,
    runtime: S.String,
    codeSha256: S.String,
    version: S.String,
    executionRoleArn: S.String,
    layers: S.optional(LayerList),
    vpcConfig: S.optional(LambdaVpcConfig),
    packageType: S.optional(S.String),
    architectures: S.optional(ArchitectureList),
    lastModifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
  }),
).annotate({ identifier: "AwsLambdaFunctionDetails" }) as any as S.Schema<AwsLambdaFunctionDetails>;
export type CodeRepositoryProjectName = string;
export type CodeRepositoryProviderType = string;
export interface CodeRepositoryDetails {
  projectName?: string;
  integrationArn?: string;
  providerType?: string;
}
const CodeRepositoryDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    projectName: S.optional(S.String),
    integrationArn: S.optional(S.String),
    providerType: S.optional(S.String),
  }),
).annotate({ identifier: "CodeRepositoryDetails" }) as any as S.Schema<CodeRepositoryDetails>;
export type CloudSubnetIdList = string[];
const CloudSubnetIdList = AccountIdSet as any as S.Schema<CloudSubnetIdList>;
export type CloudSecurityGroupIdList = string[];
const CloudSecurityGroupIdList = AccountIdSet as any as S.Schema<CloudSecurityGroupIdList>;
export interface Vm {
  type?: string;
  vmName?: string;
  vmImageReference?: string;
  ipV4Addresses?: string[];
  ipV6Addresses?: string[];
  networkId?: string;
  subnetIds?: string[];
  securityGroupIds?: string[];
  launchedAt?: Date;
  platform?: string;
  executionRole?: string;
  keyName?: string;
}
const Vm = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.optional(S.String),
    vmName: S.optional(S.String),
    vmImageReference: S.optional(S.String),
    ipV4Addresses: S.optional(IpV4AddressList),
    ipV6Addresses: S.optional(IpV6AddressList),
    networkId: S.optional(S.String),
    subnetIds: S.optional(CloudSubnetIdList),
    securityGroupIds: S.optional(CloudSecurityGroupIdList),
    launchedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    platform: S.optional(S.String),
    executionRole: S.optional(S.String),
    keyName: S.optional(S.String),
  }),
).annotate({ identifier: "Vm" }) as any as S.Schema<Vm>;
export interface Image {
  repositoryName?: string;
  registry?: string;
  imageTags?: string[];
  imageDigest?: string;
  pushedAt?: Date;
  architecture?: string;
  author?: string;
  inUseCount?: number;
  lastInUseAt?: Date;
  platform?: string;
}
const Image = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    repositoryName: S.optional(S.String),
    registry: S.optional(S.String),
    imageTags: S.optional(ImageTagList),
    imageDigest: S.optional(S.String),
    pushedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    architecture: S.optional(S.String),
    author: S.optional(S.String),
    inUseCount: S.optional(S.Number),
    lastInUseAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    platform: S.optional(S.String),
  }),
).annotate({ identifier: "Image" }) as any as S.Schema<Image>;
export type ServerlessFunctionLayerUrn = string;
export type ServerlessFunctionLayerList = string[];
const ServerlessFunctionLayerList = AccountIdSet as any as S.Schema<ServerlessFunctionLayerList>;
export interface ServerlessFunction {
  serverlessFunctionName?: string;
  runtime?: string;
  version?: string;
  codeDigest?: string;
  lastModifiedAt?: Date;
  networkId?: string;
  subnetIds?: string[];
  securityGroupIds?: string[];
  executionRole?: string;
  packageType?: string;
  architectures?: string[];
  layers?: string[];
}
const ServerlessFunction = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    serverlessFunctionName: S.optional(S.String),
    runtime: S.optional(S.String),
    version: S.optional(S.String),
    codeDigest: S.optional(S.String),
    lastModifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    networkId: S.optional(S.String),
    subnetIds: S.optional(CloudSubnetIdList),
    securityGroupIds: S.optional(CloudSecurityGroupIdList),
    executionRole: S.optional(S.String),
    packageType: S.optional(S.String),
    architectures: S.optional(ArchitectureList),
    layers: S.optional(ServerlessFunctionLayerList),
  }),
).annotate({ identifier: "ServerlessFunction" }) as any as S.Schema<ServerlessFunction>;
export interface ResourceDetails {
  awsEc2Instance?: AwsEc2InstanceDetails;
  awsEcrContainerImage?: AwsEcrContainerImageDetails;
  awsLambdaFunction?: AwsLambdaFunctionDetails;
  codeRepository?: CodeRepositoryDetails;
  vm?: Vm;
  image?: Image;
  serverlessFunction?: ServerlessFunction;
}
const ResourceDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    awsEc2Instance: S.optional(AwsEc2InstanceDetails),
    awsEcrContainerImage: S.optional(AwsEcrContainerImageDetails),
    awsLambdaFunction: S.optional(AwsLambdaFunctionDetails),
    codeRepository: S.optional(CodeRepositoryDetails),
    vm: S.optional(Vm),
    image: S.optional(Image),
    serverlessFunction: S.optional(ServerlessFunction),
  }),
).annotate({ identifier: "ResourceDetails" }) as any as S.Schema<ResourceDetails>;
export interface Resource {
  type: string;
  id: string;
  partition?: string;
  region?: string;
  tags?: { [key: string]: string | undefined };
  details?: ResourceDetails;
  provider?: string;
  providerAccountId?: string;
  providerOrgId?: string;
}
const Resource = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.String,
    id: S.String,
    partition: S.optional(S.String),
    region: S.optional(S.String),
    tags: S.optional(TagMap),
    details: S.optional(ResourceDetails),
    provider: S.optional(S.String),
    providerAccountId: S.optional(S.String),
    providerOrgId: S.optional(S.String),
  }),
).annotate({ identifier: "Resource" }) as any as S.Schema<Resource>;
export type ResourceList = Resource[];
const ResourceList = /*@__PURE__*/ S.Array(Resource);
export interface CvssScoreAdjustment {
  metric: string;
  reason: string;
}
const CvssScoreAdjustment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ metric: S.String, reason: S.String }),
).annotate({ identifier: "CvssScoreAdjustment" }) as any as S.Schema<CvssScoreAdjustment>;
export type CvssScoreAdjustmentList = CvssScoreAdjustment[];
const CvssScoreAdjustmentList = /*@__PURE__*/ S.Array(CvssScoreAdjustment);
export interface CvssScoreDetails {
  scoreSource: string;
  cvssSource?: string;
  version: string;
  score: number;
  scoringVector: string;
  adjustments?: CvssScoreAdjustment[];
}
const CvssScoreDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scoreSource: S.String,
    cvssSource: S.optional(S.String),
    version: S.String,
    score: S.Number,
    scoringVector: S.String,
    adjustments: S.optional(CvssScoreAdjustmentList),
  }),
).annotate({ identifier: "CvssScoreDetails" }) as any as S.Schema<CvssScoreDetails>;
export interface InspectorScoreDetails {
  adjustedCvss?: CvssScoreDetails;
}
const InspectorScoreDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ adjustedCvss: S.optional(CvssScoreDetails) }),
).annotate({ identifier: "InspectorScoreDetails" }) as any as S.Schema<InspectorScoreDetails>;
export interface PortRange {
  begin: number;
  end: number;
}
const PortRange = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ begin: S.Number, end: S.Number }),
).annotate({ identifier: "PortRange" }) as any as S.Schema<PortRange>;
export type NetworkProtocol = string;
export type Component = string;
export type ComponentType = string;
export type ComponentArn = string;
export interface Step {
  componentId: string;
  componentType: string;
  componentArn?: string;
}
const Step = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ componentId: S.String, componentType: S.String, componentArn: S.optional(S.String) }),
).annotate({ identifier: "Step" }) as any as S.Schema<Step>;
export type StepList = Step[];
const StepList = /*@__PURE__*/ S.Array(Step);
export interface NetworkPath {
  steps?: Step[];
}
const NetworkPath = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ steps: S.optional(StepList) }),
).annotate({ identifier: "NetworkPath" }) as any as S.Schema<NetworkPath>;
export interface NetworkReachabilityDetails {
  openPortRange: PortRange;
  protocol: string;
  networkPath: NetworkPath;
}
const NetworkReachabilityDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ openPortRange: PortRange, protocol: S.String, networkPath: NetworkPath }),
).annotate({
  identifier: "NetworkReachabilityDetails",
}) as any as S.Schema<NetworkReachabilityDetails>;
export type VulnerabilityId = string;
export type PackageName = string;
export type PackageVersion = string;
export type SourceLayerHash = string;
export type PackageEpoch = number;
export type PackageRelease = string;
export type PackageArchitecture = string;
export type PackageManager = string;
export type FilePath = string;
export type VulnerablePackageRemediation = string;
export interface VulnerablePackage {
  name: string;
  version: string;
  sourceLayerHash?: string;
  epoch?: number;
  release?: string;
  arch?: string;
  packageManager?: string;
  filePath?: string;
  fixedInVersion?: string;
  remediation?: string;
  sourceLambdaLayerArn?: string;
}
const VulnerablePackage = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    version: S.String,
    sourceLayerHash: S.optional(S.String),
    epoch: S.optional(S.Number),
    release: S.optional(S.String),
    arch: S.optional(S.String),
    packageManager: S.optional(S.String),
    filePath: S.optional(S.String),
    fixedInVersion: S.optional(S.String),
    remediation: S.optional(S.String),
    sourceLambdaLayerArn: S.optional(S.String),
  }),
).annotate({ identifier: "VulnerablePackage" }) as any as S.Schema<VulnerablePackage>;
export type VulnerablePackageList = VulnerablePackage[];
const VulnerablePackageList = /*@__PURE__*/ S.Array(VulnerablePackage);
export interface CvssScore {
  baseScore: number;
  scoringVector: string;
  version: string;
  source: string;
}
const CvssScore = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ baseScore: S.Number, scoringVector: S.String, version: S.String, source: S.String }),
).annotate({ identifier: "CvssScore" }) as any as S.Schema<CvssScore>;
export type CvssScoreList = CvssScore[];
const CvssScoreList = /*@__PURE__*/ S.Array(CvssScore);
export type VulnerabilityIdList = string[];
const VulnerabilityIdList = AccountIdSet as any as S.Schema<VulnerabilityIdList>;
export type NonEmptyStringList = string[];
const NonEmptyStringList = AccountIdSet as any as S.Schema<NonEmptyStringList>;
export interface PackageVulnerabilityDetails {
  vulnerabilityId: string;
  vulnerablePackages?: VulnerablePackage[];
  source: string;
  cvss?: CvssScore[];
  relatedVulnerabilities?: string[];
  sourceUrl?: string;
  vendorSeverity?: string;
  vendorCreatedAt?: Date;
  vendorUpdatedAt?: Date;
  referenceUrls?: string[];
}
const PackageVulnerabilityDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    vulnerabilityId: S.String,
    vulnerablePackages: S.optional(VulnerablePackageList),
    source: S.String,
    cvss: S.optional(CvssScoreList),
    relatedVulnerabilities: S.optional(VulnerabilityIdList),
    sourceUrl: S.optional(S.String),
    vendorSeverity: S.optional(S.String),
    vendorCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    vendorUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    referenceUrls: S.optional(NonEmptyStringList),
  }),
).annotate({
  identifier: "PackageVulnerabilityDetails",
}) as any as S.Schema<PackageVulnerabilityDetails>;
export type FixAvailable = string;
export type ExploitAvailable = string;
export interface ExploitabilityDetails {
  lastKnownExploitAt?: Date;
}
const ExploitabilityDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ lastKnownExploitAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))) }),
).annotate({ identifier: "ExploitabilityDetails" }) as any as S.Schema<ExploitabilityDetails>;
export interface CodeFilePath {
  fileName: string;
  filePath: string;
  startLine: number;
  endLine: number;
}
const CodeFilePath = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ fileName: S.String, filePath: S.String, startLine: S.Number, endLine: S.Number }),
).annotate({ identifier: "CodeFilePath" }) as any as S.Schema<CodeFilePath>;
export type DetectorTagList = string[];
const DetectorTagList = AccountIdSet as any as S.Schema<DetectorTagList>;
export type ReferenceUrls = string[];
const ReferenceUrls = AccountIdSet as any as S.Schema<ReferenceUrls>;
export type CweList = string[];
const CweList = AccountIdSet as any as S.Schema<CweList>;
export interface CodeVulnerabilityDetails {
  filePath: CodeFilePath;
  detectorTags?: string[];
  referenceUrls?: string[];
  ruleId?: string;
  sourceLambdaLayerArn?: string;
  detectorId: string;
  detectorName: string;
  cwes: string[];
}
const CodeVulnerabilityDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    filePath: CodeFilePath,
    detectorTags: S.optional(DetectorTagList),
    referenceUrls: S.optional(ReferenceUrls),
    ruleId: S.optional(S.String),
    sourceLambdaLayerArn: S.optional(S.String),
    detectorId: S.String,
    detectorName: S.String,
    cwes: CweList,
  }),
).annotate({ identifier: "CodeVulnerabilityDetails" }) as any as S.Schema<CodeVulnerabilityDetails>;
export type EpssScoreValue = number;
export interface EpssDetails {
  score?: number;
}
const EpssDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ score: S.optional(S.Number) }),
).annotate({ identifier: "EpssDetails" }) as any as S.Schema<EpssDetails>;
export interface Finding {
  findingArn: string;
  awsAccountId: string;
  type: string;
  description: string;
  title?: string;
  remediation: Remediation;
  severity: string;
  firstObservedAt: Date;
  lastObservedAt: Date;
  updatedAt?: Date;
  status: string;
  resources: Resource[];
  inspectorScore?: number;
  inspectorScoreDetails?: InspectorScoreDetails;
  networkReachabilityDetails?: NetworkReachabilityDetails;
  packageVulnerabilityDetails?: PackageVulnerabilityDetails;
  fixAvailable?: string;
  exploitAvailable?: string;
  exploitabilityDetails?: ExploitabilityDetails;
  codeVulnerabilityDetails?: CodeVulnerabilityDetails;
  epss?: EpssDetails;
}
const Finding = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    findingArn: S.String,
    awsAccountId: S.String,
    type: S.String,
    description: S.String,
    title: S.optional(S.String),
    remediation: Remediation,
    severity: S.String,
    firstObservedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    lastObservedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    status: S.String,
    resources: ResourceList,
    inspectorScore: S.optional(S.Number),
    inspectorScoreDetails: S.optional(InspectorScoreDetails),
    networkReachabilityDetails: S.optional(NetworkReachabilityDetails),
    packageVulnerabilityDetails: S.optional(PackageVulnerabilityDetails),
    fixAvailable: S.optional(S.String),
    exploitAvailable: S.optional(S.String),
    exploitabilityDetails: S.optional(ExploitabilityDetails),
    codeVulnerabilityDetails: S.optional(CodeVulnerabilityDetails),
    epss: S.optional(EpssDetails),
  }),
).annotate({ identifier: "Finding" }) as any as S.Schema<Finding>;
export type FindingList = Finding[];
const FindingList = /*@__PURE__*/ S.Array(Finding);
export interface ListFindingsResponse {
  nextToken?: string;
  findings?: Finding[];
}
const ListFindingsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ nextToken: S.optional(S.String), findings: S.optional(FindingList) }),
).annotate({ identifier: "ListFindingsResponse" }) as any as S.Schema<ListFindingsResponse>;
export type ListMembersMaxResults = number;
export interface ListMembersRequest {
  onlyAssociated?: boolean;
  maxResults?: number;
  nextToken?: string;
}
const ListMembersRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    onlyAssociated: S.optional(S.Boolean),
    maxResults: S.optional(S.Number),
    nextToken: S.optional(S.String),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/members/list" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListMembersRequest" }) as any as S.Schema<ListMembersRequest>;
export type MemberList = Member[];
const MemberList = /*@__PURE__*/ S.Array(Member);
export interface ListMembersResponse {
  members?: Member[];
  nextToken?: string;
}
const ListMembersResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ members: S.optional(MemberList), nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListMembersResponse" }) as any as S.Schema<ListMembersResponse>;
export type Arn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
    T.all(T.Http({ method: "GET", uri: "/tags/{resourceArn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ListTagsForResourceRequest",
}) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ tags: S.optional(TagMap) }),
).annotate({
  identifier: "ListTagsForResourceResponse",
}) as any as S.Schema<ListTagsForResourceResponse>;
export type ListUsageTotalsMaxResults = number;
export type ListUsageTotalsNextToken = string;
export type UsageAccountId = string;
export type UsageAccountIdList = string[];
const UsageAccountIdList = AccountIdSet as any as S.Schema<UsageAccountIdList>;
export interface ListUsageTotalsRequest {
  maxResults?: number;
  nextToken?: string;
  accountIds?: string[];
}
const ListUsageTotalsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    maxResults: S.optional(S.Number),
    nextToken: S.optional(S.String),
    accountIds: S.optional(UsageAccountIdList),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/usage/list" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListUsageTotalsRequest" }) as any as S.Schema<ListUsageTotalsRequest>;
export type UsageType = string;
export type UsageValue = number;
export type MonthlyCostEstimate = number;
export type Currency = string;
export interface Usage {
  type?: string;
  total?: number;
  estimatedMonthlyCost?: number;
  currency?: string;
  cloudProvider?: string;
}
const Usage = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: S.optional(S.String),
    total: S.optional(S.Number),
    estimatedMonthlyCost: S.optional(S.Number),
    currency: S.optional(S.String),
    cloudProvider: S.optional(S.String),
  }),
).annotate({ identifier: "Usage" }) as any as S.Schema<Usage>;
export type UsageList = Usage[];
const UsageList = /*@__PURE__*/ S.Array(Usage);
export interface UsageTotal {
  accountId?: string;
  usage?: Usage[];
}
const UsageTotal = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ accountId: S.optional(S.String), usage: S.optional(UsageList) }),
).annotate({ identifier: "UsageTotal" }) as any as S.Schema<UsageTotal>;
export type UsageTotalList = UsageTotal[];
const UsageTotalList = /*@__PURE__*/ S.Array(UsageTotal);
export interface ListUsageTotalsResponse {
  nextToken?: string;
  totals?: UsageTotal[];
}
const ListUsageTotalsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ nextToken: S.optional(S.String), totals: S.optional(UsageTotalList) }),
).annotate({ identifier: "ListUsageTotalsResponse" }) as any as S.Schema<ListUsageTotalsResponse>;
export interface ResetEncryptionKeyRequest {
  scanType: string;
  resourceType: string;
}
const ResetEncryptionKeyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scanType: S.String, resourceType: S.String }).pipe(
    T.all(T.Http({ method: "PUT", uri: "/encryptionkey/reset" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ResetEncryptionKeyRequest",
}) as any as S.Schema<ResetEncryptionKeyRequest>;
export interface ResetEncryptionKeyResponse {}
const ResetEncryptionKeyResponse = OneTimeSchedule as any as S.Schema<ResetEncryptionKeyResponse>;
export type VulnId = string;
export type VulnIdList = string[];
const VulnIdList = AccountIdSet as any as S.Schema<VulnIdList>;
export interface SearchVulnerabilitiesFilterCriteria {
  vulnerabilityIds: string[];
}
const SearchVulnerabilitiesFilterCriteria = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ vulnerabilityIds: VulnIdList }),
).annotate({
  identifier: "SearchVulnerabilitiesFilterCriteria",
}) as any as S.Schema<SearchVulnerabilitiesFilterCriteria>;
export interface SearchVulnerabilitiesRequest {
  filterCriteria: SearchVulnerabilitiesFilterCriteria;
  nextToken?: string;
}
const SearchVulnerabilitiesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    filterCriteria: SearchVulnerabilitiesFilterCriteria,
    nextToken: S.optional(S.String),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/vulnerabilities/search" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "SearchVulnerabilitiesRequest",
}) as any as S.Schema<SearchVulnerabilitiesRequest>;
export type VulnerabilitySource = string;
export type VulnerabilityDescription = string;
export type Target = string;
export type Targets = string[];
const Targets = AccountIdSet as any as S.Schema<Targets>;
export interface AtigData {
  firstSeen?: Date;
  lastSeen?: Date;
  targets?: string[];
  ttps?: string[];
}
const AtigData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    firstSeen: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    lastSeen: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    targets: S.optional(Targets),
    ttps: S.optional(Ttps),
  }),
).annotate({ identifier: "AtigData" }) as any as S.Schema<AtigData>;
export type VendorSeverity = string;
export type CvssBaseScore = number;
export type CvssScoringVector = string;
export interface Cvss4 {
  baseScore?: number;
  scoringVector?: string;
}
const Cvss4 = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ baseScore: S.optional(S.Number), scoringVector: S.optional(S.String) }),
).annotate({ identifier: "Cvss4" }) as any as S.Schema<Cvss4>;
export interface Cvss3 {
  baseScore?: number;
  scoringVector?: string;
}
const Cvss3 = Cvss4 as any as S.Schema<Cvss3>;
export type RelatedVulnerability = string;
export type RelatedVulnerabilities = string[];
const RelatedVulnerabilities = AccountIdSet as any as S.Schema<RelatedVulnerabilities>;
export interface Cvss2 {
  baseScore?: number;
  scoringVector?: string;
}
const Cvss2 = Cvss4 as any as S.Schema<Cvss2>;
export type VendorCreatedAt = Date;
export type VendorUpdatedAt = Date;
export type VulnerabilitySourceUrl = string;
export type DetectionPlatforms = string[];
const DetectionPlatforms = AccountIdSet as any as S.Schema<DetectionPlatforms>;
export type EpssScore = number;
export interface Epss {
  score?: number;
}
const Epss = EpssDetails as any as S.Schema<Epss>;
export interface Vulnerability {
  id: string;
  cwes?: string[];
  cisaData?: CisaData;
  source?: string;
  description?: string;
  atigData?: AtigData;
  vendorSeverity?: string;
  cvss4?: Cvss4;
  cvss3?: Cvss3;
  relatedVulnerabilities?: string[];
  cvss2?: Cvss2;
  vendorCreatedAt?: Date;
  vendorUpdatedAt?: Date;
  sourceUrl?: string;
  referenceUrls?: string[];
  exploitObserved?: ExploitObserved;
  detectionPlatforms?: string[];
  epss?: Epss;
}
const Vulnerability = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String,
    cwes: S.optional(Cwes),
    cisaData: S.optional(CisaData),
    source: S.optional(S.String),
    description: S.optional(S.String),
    atigData: S.optional(AtigData),
    vendorSeverity: S.optional(S.String),
    cvss4: S.optional(Cvss4),
    cvss3: S.optional(Cvss3),
    relatedVulnerabilities: S.optional(RelatedVulnerabilities),
    cvss2: S.optional(Cvss2),
    vendorCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    vendorUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    sourceUrl: S.optional(S.String),
    referenceUrls: S.optional(VulnerabilityReferenceUrls),
    exploitObserved: S.optional(ExploitObserved),
    detectionPlatforms: S.optional(DetectionPlatforms),
    epss: S.optional(Epss),
  }),
).annotate({ identifier: "Vulnerability" }) as any as S.Schema<Vulnerability>;
export type Vulnerabilities = Vulnerability[];
const Vulnerabilities = /*@__PURE__*/ S.Array(Vulnerability);
export interface SearchVulnerabilitiesResponse {
  vulnerabilities: Vulnerability[];
  nextToken?: string;
}
const SearchVulnerabilitiesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ vulnerabilities: Vulnerabilities, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "SearchVulnerabilitiesResponse",
}) as any as S.Schema<SearchVulnerabilitiesResponse>;
export type UUID = string;
export interface SendCisSessionHealthRequest {
  scanJobId: string;
  sessionToken: string;
}
const SendCisSessionHealthRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scanJobId: S.String, sessionToken: S.String }).pipe(
    T.all(T.Http({ method: "PUT", uri: "/cissession/health/send" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "SendCisSessionHealthRequest",
}) as any as S.Schema<SendCisSessionHealthRequest>;
export interface SendCisSessionHealthResponse {}
const SendCisSessionHealthResponse =
  OneTimeSchedule as any as S.Schema<SendCisSessionHealthResponse>;
export type RuleId = string;
export type CisRuleStatus =
  | "FAILED"
  | "PASSED"
  | "NOT_EVALUATED"
  | "INFORMATIONAL"
  | "UNKNOWN"
  | "NOT_APPLICABLE"
  | "ERROR"
  | (string & {});
const CisRuleStatus = S.String;

export type CisRuleDetails = Uint8Array;
export interface CisSessionMessage {
  ruleId: string;
  status: CisRuleStatus;
  cisRuleDetails: Uint8Array;
}
const CisSessionMessage = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ruleId: S.String, status: CisRuleStatus, cisRuleDetails: T.Blob }),
).annotate({ identifier: "CisSessionMessage" }) as any as S.Schema<CisSessionMessage>;
export type CisSessionMessages = CisSessionMessage[];
const CisSessionMessages = /*@__PURE__*/ S.Array(CisSessionMessage);
export interface SendCisSessionTelemetryRequest {
  scanJobId: string;
  sessionToken: string;
  messages: CisSessionMessage[];
}
const SendCisSessionTelemetryRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scanJobId: S.String, sessionToken: S.String, messages: CisSessionMessages }).pipe(
    T.all(
      T.Http({ method: "PUT", uri: "/cissession/telemetry/send" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "SendCisSessionTelemetryRequest",
}) as any as S.Schema<SendCisSessionTelemetryRequest>;
export interface SendCisSessionTelemetryResponse {}
const SendCisSessionTelemetryResponse = /*@__PURE__*/ S.suspend(() => S.Struct({})).annotate({
  identifier: "SendCisSessionTelemetryResponse",
}) as any as S.Schema<SendCisSessionTelemetryResponse>;
export interface StartCisSessionMessage {
  sessionToken: string;
}
const StartCisSessionMessage = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ sessionToken: S.String }),
).annotate({ identifier: "StartCisSessionMessage" }) as any as S.Schema<StartCisSessionMessage>;
export interface StartCisSessionRequest {
  scanJobId: string;
  message: StartCisSessionMessage;
}
const StartCisSessionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scanJobId: S.String, message: StartCisSessionMessage }).pipe(
    T.all(T.Http({ method: "PUT", uri: "/cissession/start" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "StartCisSessionRequest" }) as any as S.Schema<StartCisSessionRequest>;
export interface StartCisSessionResponse {}
const StartCisSessionResponse = OneTimeSchedule as any as S.Schema<StartCisSessionResponse>;
export type CodeSecurityClientToken = string;
export interface StartCodeSecurityScanRequest {
  clientToken?: string;
  resource: CodeSecurityResource;
}
const StartCodeSecurityScanRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    resource: CodeSecurityResource,
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/codesecurity/scan/start" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "StartCodeSecurityScanRequest",
}) as any as S.Schema<StartCodeSecurityScanRequest>;
export interface StartCodeSecurityScanResponse {
  scanId?: string;
  status?: CodeScanStatus;
}
const StartCodeSecurityScanResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scanId: S.optional(S.String), status: S.optional(CodeScanStatus) }),
).annotate({
  identifier: "StartCodeSecurityScanResponse",
}) as any as S.Schema<StartCodeSecurityScanResponse>;
export type StopCisSessionStatus =
  | "SUCCESS"
  | "FAILED"
  | "INTERRUPTED"
  | "UNSUPPORTED_OS"
  | (string & {});
const StopCisSessionStatus = S.String;

export type Reason = string;
export type CheckCount = number;
export interface StopCisMessageProgress {
  totalChecks?: number;
  successfulChecks?: number;
  failedChecks?: number;
  notEvaluatedChecks?: number;
  unknownChecks?: number;
  notApplicableChecks?: number;
  informationalChecks?: number;
  errorChecks?: number;
}
const StopCisMessageProgress = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    totalChecks: S.optional(S.Number),
    successfulChecks: S.optional(S.Number),
    failedChecks: S.optional(S.Number),
    notEvaluatedChecks: S.optional(S.Number),
    unknownChecks: S.optional(S.Number),
    notApplicableChecks: S.optional(S.Number),
    informationalChecks: S.optional(S.Number),
    errorChecks: S.optional(S.Number),
  }),
).annotate({ identifier: "StopCisMessageProgress" }) as any as S.Schema<StopCisMessageProgress>;
export type Vendor = string;
export type Product = string;
export type PlatformVersion = string;
export interface ComputePlatform {
  vendor?: string;
  product?: string;
  version?: string;
}
const ComputePlatform = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    vendor: S.optional(S.String),
    product: S.optional(S.String),
    version: S.optional(S.String),
  }),
).annotate({ identifier: "ComputePlatform" }) as any as S.Schema<ComputePlatform>;
export type BenchmarkVersion = string;
export type BenchmarkProfile = string;
export interface StopCisSessionMessage {
  status: StopCisSessionStatus;
  reason?: string;
  progress: StopCisMessageProgress;
  computePlatform?: ComputePlatform;
  benchmarkVersion?: string;
  benchmarkProfile?: string;
}
const StopCisSessionMessage = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    status: StopCisSessionStatus,
    reason: S.optional(S.String),
    progress: StopCisMessageProgress,
    computePlatform: S.optional(ComputePlatform),
    benchmarkVersion: S.optional(S.String),
    benchmarkProfile: S.optional(S.String),
  }),
).annotate({ identifier: "StopCisSessionMessage" }) as any as S.Schema<StopCisSessionMessage>;
export interface StopCisSessionRequest {
  scanJobId: string;
  sessionToken: string;
  message: StopCisSessionMessage;
}
const StopCisSessionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scanJobId: S.String, sessionToken: S.String, message: StopCisSessionMessage }).pipe(
    T.all(T.Http({ method: "PUT", uri: "/cissession/stop" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "StopCisSessionRequest" }) as any as S.Schema<StopCisSessionRequest>;
export interface StopCisSessionResponse {}
const StopCisSessionResponse = OneTimeSchedule as any as S.Schema<StopCisSessionResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagMap }).pipe(
    T.all(T.Http({ method: "POST", uri: "/tags/{resourceArn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "TagResourceRequest" }) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = OneTimeSchedule as any as S.Schema<TagResourceResponse>;
export type TagKey = string;
export type TagKeyList = string[];
const TagKeyList = AccountIdSet as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
    tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
  }).pipe(
    T.all(T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "UntagResourceRequest" }) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = OneTimeSchedule as any as S.Schema<UntagResourceResponse>;
export interface UpdateCisTargets {
  accountIds?: string[];
  targetResourceTags?: { [key: string]: string[] | undefined };
}
const UpdateCisTargets = CisTargets as any as S.Schema<UpdateCisTargets>;
export interface UpdateCisScanConfigurationRequest {
  scanConfigurationArn: string;
  scanName?: string;
  securityLevel?: CisSecurityLevel;
  schedule?: Schedule;
  targets?: UpdateCisTargets;
}
const UpdateCisScanConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scanConfigurationArn: S.String,
    scanName: S.optional(S.String),
    securityLevel: S.optional(CisSecurityLevel),
    schedule: S.optional(Schedule),
    targets: S.optional(UpdateCisTargets),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/cis/scan-configuration/update" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateCisScanConfigurationRequest",
}) as any as S.Schema<UpdateCisScanConfigurationRequest>;
export interface UpdateCisScanConfigurationResponse {
  scanConfigurationArn: string;
}
const UpdateCisScanConfigurationResponse =
  CreateCodeSecurityScanConfigurationResponse as any as S.Schema<UpdateCisScanConfigurationResponse>;
export type GitLabAuthCode = string | redacted.Redacted<string>;
export interface UpdateGitLabSelfManagedIntegrationDetail {
  authCode: string | redacted.Redacted<string>;
}
const UpdateGitLabSelfManagedIntegrationDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ authCode: SensitiveString }),
).annotate({
  identifier: "UpdateGitLabSelfManagedIntegrationDetail",
}) as any as S.Schema<UpdateGitLabSelfManagedIntegrationDetail>;
export type GitHubAuthCode = string | redacted.Redacted<string>;
export type GitHubInstallationId = string;
export interface UpdateGitHubIntegrationDetail {
  code: string | redacted.Redacted<string>;
  installationId: string;
}
const UpdateGitHubIntegrationDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ code: SensitiveString, installationId: S.String }),
).annotate({
  identifier: "UpdateGitHubIntegrationDetail",
}) as any as S.Schema<UpdateGitHubIntegrationDetail>;
export type UpdateIntegrationDetails =
  | { gitlabSelfManaged: UpdateGitLabSelfManagedIntegrationDetail; github?: never }
  | { gitlabSelfManaged?: never; github: UpdateGitHubIntegrationDetail };
const UpdateIntegrationDetails = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ gitlabSelfManaged: UpdateGitLabSelfManagedIntegrationDetail }),
  /*@__PURE__*/ S.Struct({ github: UpdateGitHubIntegrationDetail }),
]);
export interface UpdateCodeSecurityIntegrationRequest {
  integrationArn: string;
  details: UpdateIntegrationDetails;
}
const UpdateCodeSecurityIntegrationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ integrationArn: S.String, details: UpdateIntegrationDetails }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/codesecurity/integration/update" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateCodeSecurityIntegrationRequest",
}) as any as S.Schema<UpdateCodeSecurityIntegrationRequest>;
export interface UpdateCodeSecurityIntegrationResponse {
  integrationArn: string;
  status: IntegrationStatus;
}
const UpdateCodeSecurityIntegrationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ integrationArn: S.String, status: IntegrationStatus }),
).annotate({
  identifier: "UpdateCodeSecurityIntegrationResponse",
}) as any as S.Schema<UpdateCodeSecurityIntegrationResponse>;
export interface UpdateCodeSecurityScanConfigurationRequest {
  scanConfigurationArn: string;
  configuration: CodeSecurityScanConfiguration;
}
const UpdateCodeSecurityScanConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scanConfigurationArn: S.String, configuration: CodeSecurityScanConfiguration }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/codesecurity/scan-configuration/update" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateCodeSecurityScanConfigurationRequest",
}) as any as S.Schema<UpdateCodeSecurityScanConfigurationRequest>;
export interface UpdateCodeSecurityScanConfigurationResponse {
  scanConfigurationArn?: string;
}
const UpdateCodeSecurityScanConfigurationResponse =
  CreateCisScanConfigurationResponse as any as S.Schema<UpdateCodeSecurityScanConfigurationResponse>;
export interface EcrConfiguration {
  rescanDuration: string;
  pullDateRescanDuration?: string;
  pullDateRescanMode?: string;
}
const EcrConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    rescanDuration: S.String,
    pullDateRescanDuration: S.optional(S.String),
    pullDateRescanMode: S.optional(S.String),
  }),
).annotate({ identifier: "EcrConfiguration" }) as any as S.Schema<EcrConfiguration>;
export interface Ec2Configuration {
  scanMode: string;
  activateVMScanner?: boolean;
}
const Ec2Configuration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ scanMode: S.String, activateVMScanner: S.optional(S.Boolean) }),
).annotate({ identifier: "Ec2Configuration" }) as any as S.Schema<Ec2Configuration>;
export type InheritanceMode = string;
export interface UpdateConfigurationInheritance {
  ec2Configuration?: string;
  ecrConfiguration?: string;
}
const UpdateConfigurationInheritance = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ ec2Configuration: S.optional(S.String), ecrConfiguration: S.optional(S.String) }),
).annotate({
  identifier: "UpdateConfigurationInheritance",
}) as any as S.Schema<UpdateConfigurationInheritance>;
export interface UpdateConfigurationRequest {
  accountId?: string;
  ecrConfiguration?: EcrConfiguration;
  ec2Configuration?: Ec2Configuration;
  updateConfigurationInheritance?: UpdateConfigurationInheritance;
}
const UpdateConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountId: S.optional(S.String),
    ecrConfiguration: S.optional(EcrConfiguration),
    ec2Configuration: S.optional(Ec2Configuration),
    updateConfigurationInheritance: S.optional(UpdateConfigurationInheritance),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/configuration/update" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "UpdateConfigurationRequest",
}) as any as S.Schema<UpdateConfigurationRequest>;
export interface UpdateConfigurationResponse {}
const UpdateConfigurationResponse = OneTimeSchedule as any as S.Schema<UpdateConfigurationResponse>;
export interface AzureProviderDetailUpdate {
  azureRegions?: string[];
  scopeConfiguration?: AzureScopeConfigurationInput;
  autoInstallVMScanner?: boolean;
}
const AzureProviderDetailUpdate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    azureRegions: S.optional(AzureRegionList),
    scopeConfiguration: S.optional(AzureScopeConfigurationInput),
    autoInstallVMScanner: S.optional(S.Boolean),
  }),
).annotate({
  identifier: "AzureProviderDetailUpdate",
}) as any as S.Schema<AzureProviderDetailUpdate>;
export type ProviderDetailUpdate = { azure: AzureProviderDetailUpdate };
const ProviderDetailUpdate = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ azure: AzureProviderDetailUpdate }),
]);
export interface UpdateConnectorRequest {
  connectorArn: string;
  description?: string;
  providerDetail?: ProviderDetailUpdate;
}
const UpdateConnectorRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    connectorArn: S.String,
    description: S.optional(S.String),
    providerDetail: S.optional(ProviderDetailUpdate),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/connector/update" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "UpdateConnectorRequest" }) as any as S.Schema<UpdateConnectorRequest>;
export interface UpdateConnectorResponse {
  connectorArn?: string;
}
const UpdateConnectorResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ connectorArn: S.optional(S.String) }),
).annotate({ identifier: "UpdateConnectorResponse" }) as any as S.Schema<UpdateConnectorResponse>;
export interface UpdateConnectorScanConfigurationRequest {
  awsConfigConnectorArn: string;
  scanConfiguration: ConnectorScanConfiguration;
}
const UpdateConnectorScanConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ awsConfigConnectorArn: S.String, scanConfiguration: ConnectorScanConfiguration }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/connectorscanconfiguration/update" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateConnectorScanConfigurationRequest",
}) as any as S.Schema<UpdateConnectorScanConfigurationRequest>;
export interface UpdateConnectorScanConfigurationResponse {}
const UpdateConnectorScanConfigurationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({}),
).annotate({
  identifier: "UpdateConnectorScanConfigurationResponse",
}) as any as S.Schema<UpdateConnectorScanConfigurationResponse>;
export interface UpdateEc2DeepInspectionConfigurationRequest {
  activateDeepInspection?: boolean;
  packagePaths?: string[];
}
const UpdateEc2DeepInspectionConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    activateDeepInspection: S.optional(S.Boolean),
    packagePaths: S.optional(PathList),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/ec2deepinspectionconfiguration/update" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateEc2DeepInspectionConfigurationRequest",
}) as any as S.Schema<UpdateEc2DeepInspectionConfigurationRequest>;
export interface UpdateEc2DeepInspectionConfigurationResponse {
  packagePaths?: string[];
  orgPackagePaths?: string[];
  status?: string;
  errorMessage?: string;
}
const UpdateEc2DeepInspectionConfigurationResponse =
  GetEc2DeepInspectionConfigurationResponse as any as S.Schema<UpdateEc2DeepInspectionConfigurationResponse>;
export interface UpdateEncryptionKeyRequest {
  kmsKeyId: string;
  scanType: string;
  resourceType: string;
}
const UpdateEncryptionKeyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ kmsKeyId: S.String, scanType: S.String, resourceType: S.String }).pipe(
    T.all(T.Http({ method: "PUT", uri: "/encryptionkey/update" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "UpdateEncryptionKeyRequest",
}) as any as S.Schema<UpdateEncryptionKeyRequest>;
export interface UpdateEncryptionKeyResponse {}
const UpdateEncryptionKeyResponse = OneTimeSchedule as any as S.Schema<UpdateEncryptionKeyResponse>;
export interface UpdateFilterRequest {
  action?: string;
  description?: string;
  filterCriteria?: FilterCriteria;
  name?: string;
  filterArn: string;
  reason?: string;
}
const UpdateFilterRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    action: S.optional(S.String),
    description: S.optional(S.String),
    filterCriteria: S.optional(FilterCriteria),
    name: S.optional(S.String),
    filterArn: S.String,
    reason: S.optional(S.String),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/filters/update" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "UpdateFilterRequest" }) as any as S.Schema<UpdateFilterRequest>;
export interface UpdateFilterResponse {
  arn: string;
}
const UpdateFilterResponse = CreateFilterResponse as any as S.Schema<UpdateFilterResponse>;
export interface UpdateOrganizationConfigurationRequest {
  autoEnable: AutoEnable;
}
const UpdateOrganizationConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ autoEnable: AutoEnable }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/organizationconfiguration/update" }),
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
export interface UpdateOrganizationConfigurationResponse {
  autoEnable: AutoEnable;
}
const UpdateOrganizationConfigurationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ autoEnable: AutoEnable }),
).annotate({
  identifier: "UpdateOrganizationConfigurationResponse",
}) as any as S.Schema<UpdateOrganizationConfigurationResponse>;
export interface UpdateOrgEc2DeepInspectionConfigurationRequest {
  orgPackagePaths: string[];
}
const UpdateOrgEc2DeepInspectionConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ orgPackagePaths: PathList }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/ec2deepinspectionconfiguration/org/update" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateOrgEc2DeepInspectionConfigurationRequest",
}) as any as S.Schema<UpdateOrgEc2DeepInspectionConfigurationRequest>;
export interface UpdateOrgEc2DeepInspectionConfigurationResponse {}
const UpdateOrgEc2DeepInspectionConfigurationResponse =
  UpdateConnectorScanConfigurationResponse as any as S.Schema<UpdateOrgEc2DeepInspectionConfigurationResponse>;
export type ValidationExceptionReason = string;
export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.String, message: S.String }),
).annotate({ identifier: "ValidationExceptionField" }) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFields = ValidationExceptionField[];
const ValidationExceptionFields = /*@__PURE__*/ S.Array(ValidationExceptionField);
export type AssociateMemberError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates an Amazon Web Services account with an Amazon Inspector delegated administrator. An HTTP 200 response
 * indicates the association was successfully started, but doesn't indicate whether it was
 * completed. You can check if the association completed by using ListMembers for multiple
 * accounts or GetMembers for a single account.
 */
export const associateMember: API.OperationMethod<
  AssociateMemberRequest,
  AssociateMemberResponse,
  AssociateMemberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateMemberRequest,
  output: AssociateMemberResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateMember",
}));

export type BatchAssociateCodeSecurityScanConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates multiple code repositories with an Amazon Inspector code security scan
 * configuration.
 */
export const batchAssociateCodeSecurityScanConfiguration: API.OperationMethod<
  BatchAssociateCodeSecurityScanConfigurationRequest,
  BatchAssociateCodeSecurityScanConfigurationResponse,
  BatchAssociateCodeSecurityScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchAssociateCodeSecurityScanConfigurationRequest,
  output: BatchAssociateCodeSecurityScanConfigurationResponse,
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
  operationName: "BatchAssociateCodeSecurityScanConfiguration",
}));

export type BatchDisassociateCodeSecurityScanConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates multiple code repositories from an Amazon Inspector code security scan
 * configuration.
 */
export const batchDisassociateCodeSecurityScanConfiguration: API.OperationMethod<
  BatchDisassociateCodeSecurityScanConfigurationRequest,
  BatchDisassociateCodeSecurityScanConfigurationResponse,
  BatchDisassociateCodeSecurityScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDisassociateCodeSecurityScanConfigurationRequest,
  output: BatchDisassociateCodeSecurityScanConfigurationResponse,
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
  operationName: "BatchDisassociateCodeSecurityScanConfiguration",
}));

export type BatchGetAccountStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.
 */
export const batchGetAccountStatus: API.OperationMethod<
  BatchGetAccountStatusRequest,
  BatchGetAccountStatusResponse,
  BatchGetAccountStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetAccountStatusRequest,
  output: BatchGetAccountStatusResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetAccountStatus",
}));

export type BatchGetCodeSnippetError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves code snippets from findings that Amazon Inspector detected code vulnerabilities
 * in.
 */
export const batchGetCodeSnippet: API.OperationMethod<
  BatchGetCodeSnippetRequest,
  BatchGetCodeSnippetResponse,
  BatchGetCodeSnippetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetCodeSnippetRequest,
  output: BatchGetCodeSnippetResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetCodeSnippet",
}));

export type BatchGetFindingDetailsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets vulnerability details for findings.
 */
export const batchGetFindingDetails: API.OperationMethod<
  BatchGetFindingDetailsRequest,
  BatchGetFindingDetailsResponse,
  BatchGetFindingDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetFindingDetailsRequest,
  output: BatchGetFindingDetailsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetFindingDetails",
}));

export type BatchGetFreeTrialInfoError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets free trial status for multiple Amazon Web Services accounts.
 */
export const batchGetFreeTrialInfo: API.OperationMethod<
  BatchGetFreeTrialInfoRequest,
  BatchGetFreeTrialInfoResponse,
  BatchGetFreeTrialInfoError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetFreeTrialInfoRequest,
  output: BatchGetFreeTrialInfoResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetFreeTrialInfo",
}));

export type BatchGetMemberEc2DeepInspectionStatusError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves Amazon Inspector deep inspection activation status of multiple member accounts within
 * your organization. You must be the delegated administrator of an organization in Amazon Inspector to
 * use this API.
 */
export const batchGetMemberEc2DeepInspectionStatus: API.OperationMethod<
  BatchGetMemberEc2DeepInspectionStatusRequest,
  BatchGetMemberEc2DeepInspectionStatusResponse,
  BatchGetMemberEc2DeepInspectionStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetMemberEc2DeepInspectionStatusRequest,
  output: BatchGetMemberEc2DeepInspectionStatusResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetMemberEc2DeepInspectionStatus",
}));

export type BatchUpdateMemberEc2DeepInspectionStatusError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Activates or deactivates Amazon Inspector deep inspection for the provided member accounts in your
 * organization. You must be the delegated administrator of an organization in Amazon Inspector to use
 * this API.
 */
export const batchUpdateMemberEc2DeepInspectionStatus: API.OperationMethod<
  BatchUpdateMemberEc2DeepInspectionStatusRequest,
  BatchUpdateMemberEc2DeepInspectionStatusResponse,
  BatchUpdateMemberEc2DeepInspectionStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateMemberEc2DeepInspectionStatusRequest,
  output: BatchUpdateMemberEc2DeepInspectionStatusResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateMemberEc2DeepInspectionStatus",
}));

export type CancelFindingsReportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels the given findings report.
 */
export const cancelFindingsReport: API.OperationMethod<
  CancelFindingsReportRequest,
  CancelFindingsReportResponse,
  CancelFindingsReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelFindingsReportRequest,
  output: CancelFindingsReportResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelFindingsReport",
}));

export type CancelSbomExportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels a software bill of materials (SBOM) report.
 */
export const cancelSbomExport: API.OperationMethod<
  CancelSbomExportRequest,
  CancelSbomExportResponse,
  CancelSbomExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelSbomExportRequest,
  output: CancelSbomExportResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelSbomExport",
}));

export type CreateCisScanConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a CIS scan configuration.
 */
export const createCisScanConfiguration: API.OperationMethod<
  CreateCisScanConfigurationRequest,
  CreateCisScanConfigurationResponse,
  CreateCisScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCisScanConfigurationRequest,
  output: CreateCisScanConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCisScanConfiguration",
}));

export type CreateCodeSecurityIntegrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a code security integration with a source code repository provider.
 *
 * After calling the `CreateCodeSecurityIntegration` operation, you complete
 * authentication and authorization with your provider. Next you call the
 * `UpdateCodeSecurityIntegration` operation to provide the `details`
 * to complete the integration setup
 */
export const createCodeSecurityIntegration: API.OperationMethod<
  CreateCodeSecurityIntegrationRequest,
  CreateCodeSecurityIntegrationResponse,
  CreateCodeSecurityIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCodeSecurityIntegrationRequest,
  output: CreateCodeSecurityIntegrationResponse,
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
  operationName: "CreateCodeSecurityIntegration",
}));

export type CreateCodeSecurityScanConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a scan configuration for code security scanning.
 */
export const createCodeSecurityScanConfiguration: API.OperationMethod<
  CreateCodeSecurityScanConfigurationRequest,
  CreateCodeSecurityScanConfigurationResponse,
  CreateCodeSecurityScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCodeSecurityScanConfigurationRequest,
  output: CreateCodeSecurityScanConfigurationResponse,
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
  operationName: "CreateCodeSecurityScanConfiguration",
}));

export type CreateConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a connector that links an external cloud provider to Amazon Inspector for vulnerability scanning.
 */
export const createConnector: API.OperationMethod<
  CreateConnectorRequest,
  CreateConnectorResponse,
  CreateConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateConnectorRequest,
  output: CreateConnectorResponse,
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
  operationName: "CreateConnector",
}));

export type CreateFilterError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a filter resource using specified filter criteria. When the filter action is set
 * to `SUPPRESS` this action creates a suppression rule.
 */
export const createFilter: API.OperationMethod<
  CreateFilterRequest,
  CreateFilterResponse,
  CreateFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFilterRequest,
  output: CreateFilterResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFilter",
}));

export type CreateFindingsReportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a finding report. By default only `ACTIVE` findings are returned in
 * the report. To see `SUPRESSED` or `CLOSED` findings you must specify
 * a value for the `findingStatus` filter criteria.
 */
export const createFindingsReport: API.OperationMethod<
  CreateFindingsReportRequest,
  CreateFindingsReportResponse,
  CreateFindingsReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFindingsReportRequest,
  output: CreateFindingsReportResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFindingsReport",
}));

export type CreateSbomExportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a software bill of materials (SBOM) report.
 */
export const createSbomExport: API.OperationMethod<
  CreateSbomExportRequest,
  CreateSbomExportResponse,
  CreateSbomExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSbomExportRequest,
  output: CreateSbomExportResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSbomExport",
}));

export type DeleteCisScanConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a CIS scan configuration.
 */
export const deleteCisScanConfiguration: API.OperationMethod<
  DeleteCisScanConfigurationRequest,
  DeleteCisScanConfigurationResponse,
  DeleteCisScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCisScanConfigurationRequest,
  output: DeleteCisScanConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCisScanConfiguration",
}));

export type DeleteCodeSecurityIntegrationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a code security integration.
 */
export const deleteCodeSecurityIntegration: API.OperationMethod<
  DeleteCodeSecurityIntegrationRequest,
  DeleteCodeSecurityIntegrationResponse,
  DeleteCodeSecurityIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCodeSecurityIntegrationRequest,
  output: DeleteCodeSecurityIntegrationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCodeSecurityIntegration",
}));

export type DeleteCodeSecurityScanConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a code security scan configuration.
 */
export const deleteCodeSecurityScanConfiguration: API.OperationMethod<
  DeleteCodeSecurityScanConfigurationRequest,
  DeleteCodeSecurityScanConfigurationResponse,
  DeleteCodeSecurityScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCodeSecurityScanConfigurationRequest,
  output: DeleteCodeSecurityScanConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCodeSecurityScanConfiguration",
}));

export type DeleteConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a connector from your account.
 */
export const deleteConnector: API.OperationMethod<
  DeleteConnectorRequest,
  DeleteConnectorResponse,
  DeleteConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConnectorRequest,
  output: DeleteConnectorResponse,
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
  operationName: "DeleteConnector",
}));

export type DeleteFilterError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a filter resource.
 */
export const deleteFilter: API.OperationMethod<
  DeleteFilterRequest,
  DeleteFilterResponse,
  DeleteFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFilterRequest,
  output: DeleteFilterResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFilter",
}));

export type DescribeOrganizationConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describe Amazon Inspector configuration settings for an Amazon Web Services organization.
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
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOrganizationConfiguration",
}));

export type DisableError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an
 * account disables the Amazon Inspector service.
 */
export const disable: API.OperationMethod<
  DisableRequest,
  DisableResponse,
  DisableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableRequest,
  output: DisableResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Disable",
}));

export type DisableDelegatedAdminAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disables the Amazon Inspector delegated administrator for your organization.
 */
export const disableDelegatedAdminAccount: API.OperationMethod<
  DisableDelegatedAdminAccountRequest,
  DisableDelegatedAdminAccountResponse,
  DisableDelegatedAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableDelegatedAdminAccountRequest,
  output: DisableDelegatedAdminAccountResponse,
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
  operationName: "DisableDelegatedAdminAccount",
}));

export type DisassociateMemberError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a member account from an Amazon Inspector delegated administrator.
 */
export const disassociateMember: API.OperationMethod<
  DisassociateMemberRequest,
  DisassociateMemberResponse,
  DisassociateMemberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateMemberRequest,
  output: DisassociateMemberResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateMember",
}));

export type EnableError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables Amazon Inspector scans for one or more Amazon Web Services accounts.
 */
export const enable: API.OperationMethod<
  EnableRequest,
  EnableResponse,
  EnableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableRequest,
  output: EnableResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Enable",
}));

export type EnableDelegatedAdminAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables the Amazon Inspector delegated administrator for your Organizations organization.
 */
export const enableDelegatedAdminAccount: API.OperationMethod<
  EnableDelegatedAdminAccountRequest,
  EnableDelegatedAdminAccountResponse,
  EnableDelegatedAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableDelegatedAdminAccountRequest,
  output: EnableDelegatedAdminAccountResponse,
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
  operationName: "EnableDelegatedAdminAccount",
}));

export type GetCisScanReportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a CIS scan report.
 */
export const getCisScanReport: API.OperationMethod<
  GetCisScanReportRequest,
  GetCisScanReportResponse,
  GetCisScanReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCisScanReportRequest,
  output: GetCisScanReportResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCisScanReport",
}));

export type GetCisScanResultDetailsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves CIS scan result details.
 */
export const getCisScanResultDetails: API.PaginatedOperationMethod<
  GetCisScanResultDetailsRequest,
  GetCisScanResultDetailsResponse,
  GetCisScanResultDetailsError,
  Credentials | HttpClient.HttpClient,
  CisScanResultDetails
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetCisScanResultDetailsRequest,
  output: GetCisScanResultDetailsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCisScanResultDetails",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "scanResultDetails",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetClustersForImageError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of clusters and metadata associated with an image.
 */
export const getClustersForImage: API.PaginatedOperationMethod<
  GetClustersForImageRequest,
  GetClustersForImageResponse,
  GetClustersForImageError,
  Credentials | HttpClient.HttpClient,
  ClusterInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetClustersForImageRequest,
  output: GetClustersForImageResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetClustersForImage",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "cluster",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetCodeSecurityIntegrationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a code security integration.
 */
export const getCodeSecurityIntegration: API.OperationMethod<
  GetCodeSecurityIntegrationRequest,
  GetCodeSecurityIntegrationResponse,
  GetCodeSecurityIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCodeSecurityIntegrationRequest,
  output: GetCodeSecurityIntegrationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCodeSecurityIntegration",
}));

export type GetCodeSecurityScanError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a specific code security scan.
 */
export const getCodeSecurityScan: API.OperationMethod<
  GetCodeSecurityScanRequest,
  GetCodeSecurityScanResponse,
  GetCodeSecurityScanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCodeSecurityScanRequest,
  output: GetCodeSecurityScanResponse,
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
  operationName: "GetCodeSecurityScan",
}));

export type GetCodeSecurityScanConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a code security scan configuration.
 */
export const getCodeSecurityScanConfiguration: API.OperationMethod<
  GetCodeSecurityScanConfigurationRequest,
  GetCodeSecurityScanConfigurationResponse,
  GetCodeSecurityScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCodeSecurityScanConfigurationRequest,
  output: GetCodeSecurityScanConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCodeSecurityScanConfiguration",
}));

export type GetConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves setting configurations for Amazon Inspector scans. If you specify an
 * `accountId`, this operation returns the scan configuration for that member
 * account. You must be the delegated administrator for the specified member account.
 * If you do not specify an `accountId`, this operation returns your own
 * scan configuration.
 */
export const getConfiguration: API.OperationMethod<
  GetConfigurationRequest,
  GetConfigurationResponse,
  GetConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConfigurationRequest,
  output: GetConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfiguration",
}));

export type GetDelegatedAdminAccountError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the Amazon Inspector delegated administrator for your
 * organization.
 */
export const getDelegatedAdminAccount: API.OperationMethod<
  GetDelegatedAdminAccountRequest,
  GetDelegatedAdminAccountResponse,
  GetDelegatedAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDelegatedAdminAccountRequest,
  output: GetDelegatedAdminAccountResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDelegatedAdminAccount",
}));

export type GetEc2DeepInspectionConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the activation status of Amazon Inspector deep inspection and custom paths associated
 * with your account.
 */
export const getEc2DeepInspectionConfiguration: API.OperationMethod<
  GetEc2DeepInspectionConfigurationRequest,
  GetEc2DeepInspectionConfigurationResponse,
  GetEc2DeepInspectionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEc2DeepInspectionConfigurationRequest,
  output: GetEc2DeepInspectionConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEc2DeepInspectionConfiguration",
}));

export type GetEncryptionKeyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an encryption key.
 */
export const getEncryptionKey: API.OperationMethod<
  GetEncryptionKeyRequest,
  GetEncryptionKeyResponse,
  GetEncryptionKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEncryptionKeyRequest,
  output: GetEncryptionKeyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEncryptionKey",
}));

export type GetFindingsReportStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the status of a findings report.
 */
export const getFindingsReportStatus: API.OperationMethod<
  GetFindingsReportStatusRequest,
  GetFindingsReportStatusResponse,
  GetFindingsReportStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFindingsReportStatusRequest,
  output: GetFindingsReportStatusResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingsReportStatus",
}));

export type GetMemberError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets member information for your organization.
 */
export const getMember: API.OperationMethod<
  GetMemberRequest,
  GetMemberResponse,
  GetMemberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMemberRequest,
  output: GetMemberResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMember",
}));

export type GetSbomExportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets details of a software bill of materials (SBOM) report.
 */
export const getSbomExport: API.OperationMethod<
  GetSbomExportRequest,
  GetSbomExportResponse,
  GetSbomExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSbomExportRequest,
  output: GetSbomExportResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSbomExport",
}));

export type ListAccountPermissionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the permissions an account has to configure Amazon Inspector.
 * If the account is a member account or standalone account with resources managed by an Organizations policy, the operation returns fewer permissions.
 */
export const listAccountPermissions: API.PaginatedOperationMethod<
  ListAccountPermissionsRequest,
  ListAccountPermissionsResponse,
  ListAccountPermissionsError,
  Credentials | HttpClient.HttpClient,
  Permission
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccountPermissionsRequest,
  output: ListAccountPermissionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccountPermissions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "permissions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCisScanConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists CIS scan configurations.
 */
export const listCisScanConfigurations: API.PaginatedOperationMethod<
  ListCisScanConfigurationsRequest,
  ListCisScanConfigurationsResponse,
  ListCisScanConfigurationsError,
  Credentials | HttpClient.HttpClient,
  CisScanConfiguration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCisScanConfigurationsRequest,
  output: ListCisScanConfigurationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCisScanConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "scanConfigurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCisScanResultsAggregatedByChecksError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists scan results aggregated by checks.
 */
export const listCisScanResultsAggregatedByChecks: API.PaginatedOperationMethod<
  ListCisScanResultsAggregatedByChecksRequest,
  ListCisScanResultsAggregatedByChecksResponse,
  ListCisScanResultsAggregatedByChecksError,
  Credentials | HttpClient.HttpClient,
  CisCheckAggregation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCisScanResultsAggregatedByChecksRequest,
  output: ListCisScanResultsAggregatedByChecksResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCisScanResultsAggregatedByChecks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "checkAggregations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCisScanResultsAggregatedByTargetResourceError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists scan results aggregated by a target resource.
 */
export const listCisScanResultsAggregatedByTargetResource: API.PaginatedOperationMethod<
  ListCisScanResultsAggregatedByTargetResourceRequest,
  ListCisScanResultsAggregatedByTargetResourceResponse,
  ListCisScanResultsAggregatedByTargetResourceError,
  Credentials | HttpClient.HttpClient,
  CisTargetResourceAggregation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCisScanResultsAggregatedByTargetResourceRequest,
  output: ListCisScanResultsAggregatedByTargetResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCisScanResultsAggregatedByTargetResource",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "targetResourceAggregations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCisScansError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a CIS scan list.
 */
export const listCisScans: API.PaginatedOperationMethod<
  ListCisScansRequest,
  ListCisScansResponse,
  ListCisScansError,
  Credentials | HttpClient.HttpClient,
  CisScan
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCisScansRequest,
  output: ListCisScansResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCisScans",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "scans",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCodeSecurityIntegrationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all code security integrations in your account.
 */
export const listCodeSecurityIntegrations: API.OperationMethod<
  ListCodeSecurityIntegrationsRequest,
  ListCodeSecurityIntegrationsResponse,
  ListCodeSecurityIntegrationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListCodeSecurityIntegrationsRequest,
  output: ListCodeSecurityIntegrationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCodeSecurityIntegrations",
}));

export type ListCodeSecurityScanConfigurationAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the associations between code repositories and Amazon Inspector code security scan
 * configurations.
 */
export const listCodeSecurityScanConfigurationAssociations: API.OperationMethod<
  ListCodeSecurityScanConfigurationAssociationsRequest,
  ListCodeSecurityScanConfigurationAssociationsResponse,
  ListCodeSecurityScanConfigurationAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListCodeSecurityScanConfigurationAssociationsRequest,
  output: ListCodeSecurityScanConfigurationAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCodeSecurityScanConfigurationAssociations",
}));

export type ListCodeSecurityScanConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all code security scan configurations in your account.
 */
export const listCodeSecurityScanConfigurations: API.OperationMethod<
  ListCodeSecurityScanConfigurationsRequest,
  ListCodeSecurityScanConfigurationsResponse,
  ListCodeSecurityScanConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListCodeSecurityScanConfigurationsRequest,
  output: ListCodeSecurityScanConfigurationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCodeSecurityScanConfigurations",
}));

export type ListConnectorsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists connectors in your account. Results are paginated. Use the `nextToken` parameter to retrieve the next page of results.
 */
export const listConnectors: API.PaginatedOperationMethod<
  ListConnectorsRequest,
  ListConnectorsResponse,
  ListConnectorsError,
  Credentials | HttpClient.HttpClient,
  Connector
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListConnectorsRequest,
  output: ListConnectorsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnectors",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConnectorScanConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists scan configurations for Amazon Web Services Config connectors. Results are paginated. Use the `nextToken` parameter to retrieve the next page of results.
 */
export const listConnectorScanConfigurations: API.PaginatedOperationMethod<
  ListConnectorScanConfigurationsRequest,
  ListConnectorScanConfigurationsResponse,
  ListConnectorScanConfigurationsError,
  Credentials | HttpClient.HttpClient,
  ConnectorScanConfigurationItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListConnectorScanConfigurationsRequest,
  output: ListConnectorScanConfigurationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnectorScanConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "scanConfigurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCoverageError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists coverage details for your environment.
 */
export const listCoverage: API.PaginatedOperationMethod<
  ListCoverageRequest,
  ListCoverageResponse,
  ListCoverageError,
  Credentials | HttpClient.HttpClient,
  CoveredResource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCoverageRequest,
  output: ListCoverageResponse,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCoverage",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "coveredResources",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCoverageStatisticsError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists Amazon Inspector coverage statistics for your environment.
 */
export const listCoverageStatistics: API.PaginatedOperationMethod<
  ListCoverageStatisticsRequest,
  ListCoverageStatisticsResponse,
  ListCoverageStatisticsError,
  Credentials | HttpClient.HttpClient,
  Counts
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCoverageStatisticsRequest,
  output: ListCoverageStatisticsResponse,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCoverageStatistics",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "countsByGroup",
  } as const,
})) as any;

export type ListDelegatedAdminAccountsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists information about the Amazon Inspector delegated administrator of your organization.
 */
export const listDelegatedAdminAccounts: API.PaginatedOperationMethod<
  ListDelegatedAdminAccountsRequest,
  ListDelegatedAdminAccountsResponse,
  ListDelegatedAdminAccountsError,
  Credentials | HttpClient.HttpClient,
  DelegatedAdminAccount
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDelegatedAdminAccountsRequest,
  output: ListDelegatedAdminAccountsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDelegatedAdminAccounts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "delegatedAdminAccounts",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFiltersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the filters associated with your account.
 */
export const listFilters: API.PaginatedOperationMethod<
  ListFiltersRequest,
  ListFiltersResponse,
  ListFiltersError,
  Credentials | HttpClient.HttpClient,
  Filter
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFiltersRequest,
  output: ListFiltersResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFilters",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "filters",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFindingAggregationsError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists aggregated finding data for your environment based on specific criteria.
 */
export const listFindingAggregations: API.PaginatedOperationMethod<
  ListFindingAggregationsRequest,
  ListFindingAggregationsResponse,
  ListFindingAggregationsError,
  Credentials | HttpClient.HttpClient,
  AggregationResponse
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFindingAggregationsRequest,
  output: ListFindingAggregationsResponse,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFindingAggregations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "responses",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFindingsError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists findings for your environment.
 */
export const listFindings: API.PaginatedOperationMethod<
  ListFindingsRequest,
  ListFindingsResponse,
  ListFindingsError,
  Credentials | HttpClient.HttpClient,
  Finding
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFindingsRequest,
  output: ListFindingsResponse,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFindings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "findings",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMembersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List members associated with the Amazon Inspector delegated administrator for your
 * organization.
 */
export const listMembers: API.PaginatedOperationMethod<
  ListMembersRequest,
  ListMembersResponse,
  ListMembersError,
  Credentials | HttpClient.HttpClient,
  Member
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMembersRequest,
  output: ListMembersResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMembers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "members",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all tags attached to a given resource.
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
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListUsageTotalsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the Amazon Inspector usage totals over the last 30 days.
 */
export const listUsageTotals: API.PaginatedOperationMethod<
  ListUsageTotalsRequest,
  ListUsageTotalsResponse,
  ListUsageTotalsError,
  Credentials | HttpClient.HttpClient,
  UsageTotal
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUsageTotalsRequest,
  output: ListUsageTotalsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUsageTotals",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "totals",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ResetEncryptionKeyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Resets an encryption key. After the key is reset your resources will be encrypted by an
 * Amazon Web Services owned key.
 */
export const resetEncryptionKey: API.OperationMethod<
  ResetEncryptionKeyRequest,
  ResetEncryptionKeyResponse,
  ResetEncryptionKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResetEncryptionKeyRequest,
  output: ResetEncryptionKeyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResetEncryptionKey",
}));

export type SearchVulnerabilitiesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists Amazon Inspector coverage details for a specific vulnerability.
 */
export const searchVulnerabilities: API.PaginatedOperationMethod<
  SearchVulnerabilitiesRequest,
  SearchVulnerabilitiesResponse,
  SearchVulnerabilitiesError,
  Credentials | HttpClient.HttpClient,
  Vulnerability
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchVulnerabilitiesRequest,
  output: SearchVulnerabilitiesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchVulnerabilities",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "vulnerabilities",
  } as const,
})) as any;

export type SendCisSessionHealthError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends a CIS session health. This API is used by the Amazon Inspector SSM plugin to
 * communicate with the Amazon Inspector service. The Amazon Inspector SSM plugin calls
 * this API to start a CIS scan session for the scan ID supplied by the service.
 */
export const sendCisSessionHealth: API.OperationMethod<
  SendCisSessionHealthRequest,
  SendCisSessionHealthResponse,
  SendCisSessionHealthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendCisSessionHealthRequest,
  output: SendCisSessionHealthResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendCisSessionHealth",
}));

export type SendCisSessionTelemetryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends a CIS session telemetry. This API is used by the Amazon Inspector SSM plugin to
 * communicate with the Amazon Inspector service. The Amazon Inspector SSM plugin calls
 * this API to start a CIS scan session for the scan ID supplied by the service.
 */
export const sendCisSessionTelemetry: API.OperationMethod<
  SendCisSessionTelemetryRequest,
  SendCisSessionTelemetryResponse,
  SendCisSessionTelemetryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendCisSessionTelemetryRequest,
  output: SendCisSessionTelemetryResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendCisSessionTelemetry",
}));

export type StartCisSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a CIS session. This API is used by the Amazon Inspector SSM plugin to
 * communicate with the Amazon Inspector service. The Amazon Inspector SSM plugin calls
 * this API to start a CIS scan session for the scan ID supplied by the service.
 */
export const startCisSession: API.OperationMethod<
  StartCisSessionRequest,
  StartCisSessionResponse,
  StartCisSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartCisSessionRequest,
  output: StartCisSessionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartCisSession",
}));

export type StartCodeSecurityScanError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Initiates a code security scan on a specified repository.
 */
export const startCodeSecurityScan: API.OperationMethod<
  StartCodeSecurityScanRequest,
  StartCodeSecurityScanResponse,
  StartCodeSecurityScanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartCodeSecurityScanRequest,
  output: StartCodeSecurityScanResponse,
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
  operationName: "StartCodeSecurityScan",
}));

export type StopCisSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops a CIS session. This API is used by the Amazon Inspector SSM plugin to
 * communicate with the Amazon Inspector service. The Amazon Inspector SSM plugin calls
 * this API to stop a CIS scan session for the scan ID supplied by the service.
 */
export const stopCisSession: API.OperationMethod<
  StopCisSessionRequest,
  StopCisSessionResponse,
  StopCisSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopCisSessionRequest,
  output: StopCisSessionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopCisSession",
}));

export type TagResourceError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds tags to a resource.
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
    BadRequestException,
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
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes tags from a resource.
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
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateCisScanConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a CIS scan configuration.
 */
export const updateCisScanConfiguration: API.OperationMethod<
  UpdateCisScanConfigurationRequest,
  UpdateCisScanConfigurationResponse,
  UpdateCisScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCisScanConfigurationRequest,
  output: UpdateCisScanConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCisScanConfiguration",
}));

export type UpdateCodeSecurityIntegrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing code security integration.
 *
 * After calling the `CreateCodeSecurityIntegration` operation, you complete
 * authentication and authorization with your provider. Next you call the
 * `UpdateCodeSecurityIntegration` operation to provide the `details`
 * to complete the integration setup
 */
export const updateCodeSecurityIntegration: API.OperationMethod<
  UpdateCodeSecurityIntegrationRequest,
  UpdateCodeSecurityIntegrationResponse,
  UpdateCodeSecurityIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCodeSecurityIntegrationRequest,
  output: UpdateCodeSecurityIntegrationResponse,
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
  operationName: "UpdateCodeSecurityIntegration",
}));

export type UpdateCodeSecurityScanConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing code security scan configuration.
 */
export const updateCodeSecurityScanConfiguration: API.OperationMethod<
  UpdateCodeSecurityScanConfigurationRequest,
  UpdateCodeSecurityScanConfigurationResponse,
  UpdateCodeSecurityScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCodeSecurityScanConfigurationRequest,
  output: UpdateCodeSecurityScanConfigurationResponse,
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
  operationName: "UpdateCodeSecurityScanConfiguration",
}));

export type UpdateConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the scan configuration for your Amazon Inspector account. If you don't specify an
 * `accountId`, this operation updates the delegated administrator's configuration
 * and propagates it to member accounts that have not been individually configured. If you
 * specify an `accountId`, this operation updates that member account's
 * configuration. Only the delegated administrator can specify an `accountId`;
 * member accounts cannot call this operation.
 */
export const updateConfiguration: API.OperationMethod<
  UpdateConfigurationRequest,
  UpdateConfigurationResponse,
  UpdateConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConfigurationRequest,
  output: UpdateConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConfiguration",
}));

export type UpdateConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the description or provider-specific configuration details of an existing connector.
 */
export const updateConnector: API.OperationMethod<
  UpdateConnectorRequest,
  UpdateConnectorResponse,
  UpdateConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConnectorRequest,
  output: UpdateConnectorResponse,
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
  operationName: "UpdateConnector",
}));

export type UpdateConnectorScanConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates scan configuration settings for resources associated with an Amazon Web Services Config connector.
 */
export const updateConnectorScanConfiguration: API.OperationMethod<
  UpdateConnectorScanConfigurationRequest,
  UpdateConnectorScanConfigurationResponse,
  UpdateConnectorScanConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConnectorScanConfigurationRequest,
  output: UpdateConnectorScanConfigurationResponse,
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
  operationName: "UpdateConnectorScanConfiguration",
}));

export type UpdateEc2DeepInspectionConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Activates, deactivates Amazon Inspector deep inspection, or updates custom paths for your account.
 */
export const updateEc2DeepInspectionConfiguration: API.OperationMethod<
  UpdateEc2DeepInspectionConfigurationRequest,
  UpdateEc2DeepInspectionConfigurationResponse,
  UpdateEc2DeepInspectionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEc2DeepInspectionConfigurationRequest,
  output: UpdateEc2DeepInspectionConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEc2DeepInspectionConfiguration",
}));

export type UpdateEncryptionKeyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an encryption key. A `ResourceNotFoundException` means that an
 * Amazon Web Services owned key is being used for encryption.
 */
export const updateEncryptionKey: API.OperationMethod<
  UpdateEncryptionKeyRequest,
  UpdateEncryptionKeyResponse,
  UpdateEncryptionKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEncryptionKeyRequest,
  output: UpdateEncryptionKeyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEncryptionKey",
}));

export type UpdateFilterError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Specifies the action that is to be applied to the findings that match the filter.
 */
export const updateFilter: API.OperationMethod<
  UpdateFilterRequest,
  UpdateFilterResponse,
  UpdateFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateFilterRequest,
  output: UpdateFilterResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFilter",
}));

export type UpdateOrganizationConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configurations for your Amazon Inspector organization.
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
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOrganizationConfiguration",
}));

export type UpdateOrgEc2DeepInspectionConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the Amazon Inspector deep inspection custom paths for your organization. You must be an
 * Amazon Inspector delegated administrator to use this API.
 */
export const updateOrgEc2DeepInspectionConfiguration: API.OperationMethod<
  UpdateOrgEc2DeepInspectionConfigurationRequest,
  UpdateOrgEc2DeepInspectionConfigurationResponse,
  UpdateOrgEc2DeepInspectionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateOrgEc2DeepInspectionConfigurationRequest,
  output: UpdateOrgEc2DeepInspectionConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOrgEc2DeepInspectionConfiguration",
}));
