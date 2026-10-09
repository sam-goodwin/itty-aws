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
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "Macie2", serviceShapeName: "Macie2" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "macie2" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-01-01");
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
              `https://macie2-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://macie2-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://macie2.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://macie2.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
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
export class MacieNotEnabled
  extends /*@__PURE__*/ S.TaggedError<MacieNotEnabled>()(
    "MacieNotEnabled",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "AccessDeniedException",
      message: { matches: "Macie is(n[\u2019']t| not) enabled" },
    }),
  ).pipe(C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnprocessableEntityException
  extends /*@__PURE__*/ S.TaggedError<UnprocessableEntityException>()(
    "UnprocessableEntityException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(422),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export interface AcceptInvitationRequest {
  administratorAccountId?: string;
  invitationId?: string;
  masterAccount?: string;
}
const AcceptInvitationRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AcceptInvitationRequest>;
export interface AcceptInvitationResponse {}
const AcceptInvitationResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AcceptInvitationResponse>;
export type __listOf__string = string[];
const __listOf__string = /*@__PURE__*/ __L.at(__c0, 2);
export interface BatchGetCustomDataIdentifiersRequest {
  ids?: string[];
}
const BatchGetCustomDataIdentifiersRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<BatchGetCustomDataIdentifiersRequest>;
export type __timestampIso8601 = Date;
export interface BatchGetCustomDataIdentifierSummary {
  arn?: string;
  createdAt?: Date;
  deleted?: boolean;
  description?: string;
  id?: string;
  name?: string;
}
const BatchGetCustomDataIdentifierSummary = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<BatchGetCustomDataIdentifierSummary>;
export type __listOfBatchGetCustomDataIdentifierSummary = BatchGetCustomDataIdentifierSummary[];
const __listOfBatchGetCustomDataIdentifierSummary = /*@__PURE__*/ __L.at(__c0, 5);
export interface BatchGetCustomDataIdentifiersResponse {
  customDataIdentifiers?: BatchGetCustomDataIdentifierSummary[];
  notFoundIdentifierIds?: string[];
}
const BatchGetCustomDataIdentifiersResponse = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<BatchGetCustomDataIdentifiersResponse>;
export type AutomatedDiscoveryAccountStatus = "ENABLED" | "DISABLED" | (string & {});
const AutomatedDiscoveryAccountStatus = S.String;

export interface AutomatedDiscoveryAccountUpdate {
  accountId?: string;
  status?: AutomatedDiscoveryAccountStatus;
}
const AutomatedDiscoveryAccountUpdate = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<AutomatedDiscoveryAccountUpdate>;
export type __listOfAutomatedDiscoveryAccountUpdate = AutomatedDiscoveryAccountUpdate[];
const __listOfAutomatedDiscoveryAccountUpdate = /*@__PURE__*/ __L.at(__c1, 0);
export interface BatchUpdateAutomatedDiscoveryAccountsRequest {
  accounts?: AutomatedDiscoveryAccountUpdate[];
}
const BatchUpdateAutomatedDiscoveryAccountsRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<BatchUpdateAutomatedDiscoveryAccountsRequest>;
export type AutomatedDiscoveryAccountUpdateErrorCode =
  | "ACCOUNT_PAUSED"
  | "ACCOUNT_NOT_FOUND"
  | (string & {});
const AutomatedDiscoveryAccountUpdateErrorCode = S.String;

export interface AutomatedDiscoveryAccountUpdateError {
  accountId?: string;
  errorCode?: AutomatedDiscoveryAccountUpdateErrorCode;
}
const AutomatedDiscoveryAccountUpdateError = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<AutomatedDiscoveryAccountUpdateError>;
export type __listOfAutomatedDiscoveryAccountUpdateError = AutomatedDiscoveryAccountUpdateError[];
const __listOfAutomatedDiscoveryAccountUpdateError = /*@__PURE__*/ __L.at(__c1, 3);
export interface BatchUpdateAutomatedDiscoveryAccountsResponse {
  errors?: AutomatedDiscoveryAccountUpdateError[];
}
const BatchUpdateAutomatedDiscoveryAccountsResponse = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<BatchUpdateAutomatedDiscoveryAccountsResponse>;
export type __stringMin1Max512PatternSS = string;
export type __stringMin3Max255PatternAZaZ093255 = string;
export type __stringMin1Max1024PatternSS = string;
export interface S3WordsList {
  bucketName?: string;
  objectKey?: string;
}
const S3WordsList = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<S3WordsList>;
export interface AllowListCriteria {
  regex?: string;
  s3WordsList?: S3WordsList;
}
const AllowListCriteria = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<AllowListCriteria>;
export type __stringMin1Max128Pattern = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c1, 7);
export interface CreateAllowListRequest {
  clientToken?: string;
  criteria?: AllowListCriteria;
  description?: string;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateAllowListRequest = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<CreateAllowListRequest>;
export type __stringMin71Max89PatternArnAwsAwsCnAwsUsGovMacie2AZ19920D12AllowListAZ0922 = string;
export type __stringMin22Max22PatternAZ0922 = string;
export interface CreateAllowListResponse {
  arn?: string;
  id?: string;
}
const CreateAllowListResponse = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<CreateAllowListResponse>;
export type JobType = "ONE_TIME" | "SCHEDULED" | (string & {});
const JobType = S.String;

export type ManagedDataIdentifierSelector =
  | "ALL"
  | "EXCLUDE"
  | "INCLUDE"
  | "NONE"
  | "RECOMMENDED"
  | (string & {});
const ManagedDataIdentifierSelector = S.String;

export type JobComparator =
  | "EQ"
  | "GT"
  | "GTE"
  | "LT"
  | "LTE"
  | "NE"
  | "CONTAINS"
  | "STARTS_WITH"
  | (string & {});
const JobComparator = S.String;

export type SimpleCriterionKeyForJob =
  | "ACCOUNT_ID"
  | "S3_BUCKET_NAME"
  | "S3_BUCKET_EFFECTIVE_PERMISSION"
  | "S3_BUCKET_SHARED_ACCESS"
  | (string & {});
const SimpleCriterionKeyForJob = S.String;

export interface SimpleCriterionForJob {
  comparator?: JobComparator;
  key?: SimpleCriterionKeyForJob;
  values?: string[];
}
const SimpleCriterionForJob = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<SimpleCriterionForJob>;
export interface TagCriterionPairForJob {
  key?: string;
  value?: string;
}
const TagCriterionPairForJob = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<TagCriterionPairForJob>;
export type __listOfTagCriterionPairForJob = TagCriterionPairForJob[];
const __listOfTagCriterionPairForJob = /*@__PURE__*/ __L.at(__c2, 4);
export interface TagCriterionForJob {
  comparator?: JobComparator;
  tagValues?: TagCriterionPairForJob[];
}
const TagCriterionForJob = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<TagCriterionForJob>;
export interface CriteriaForJob {
  simpleCriterion?: SimpleCriterionForJob;
  tagCriterion?: TagCriterionForJob;
}
const CriteriaForJob = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<CriteriaForJob>;
export type __listOfCriteriaForJob = CriteriaForJob[];
const __listOfCriteriaForJob = /*@__PURE__*/ __L.at(__c2, 7);
export interface CriteriaBlockForJob {
  and?: CriteriaForJob[];
}
const CriteriaBlockForJob = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<CriteriaBlockForJob>;
export interface S3BucketCriteriaForJob {
  excludes?: CriteriaBlockForJob;
  includes?: CriteriaBlockForJob;
}
const S3BucketCriteriaForJob = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<S3BucketCriteriaForJob>;
export interface S3BucketDefinitionForJob {
  accountId?: string;
  buckets?: string[];
}
const S3BucketDefinitionForJob = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<S3BucketDefinitionForJob>;
export type __listOfS3BucketDefinitionForJob = S3BucketDefinitionForJob[];
const __listOfS3BucketDefinitionForJob = /*@__PURE__*/ __L.at(__c3, 3);
export type ScopeFilterKey =
  | "OBJECT_EXTENSION"
  | "OBJECT_LAST_MODIFIED_DATE"
  | "OBJECT_SIZE"
  | "OBJECT_KEY"
  | (string & {});
export interface SimpleScopeTerm {
  comparator?: JobComparator;
  key?: ScopeFilterKey;
  values?: string[];
}
const SimpleScopeTerm = SimpleCriterionForJob as any as S.Schema<SimpleScopeTerm>;
export interface TagValuePair {
  key?: string;
  value?: string;
}
export type __listOfTagValuePair = TagValuePair[];
const __listOfTagValuePair =
  __listOfTagCriterionPairForJob as any as S.Schema<__listOfTagValuePair>;
export type TagTarget = "S3_OBJECT" | (string & {});
const TagTarget = S.String;

export interface TagScopeTerm {
  comparator?: JobComparator;
  key?: string;
  tagValues?: TagValuePair[];
  target?: TagTarget;
}
const TagScopeTerm = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<TagScopeTerm>;
export interface JobScopeTerm {
  simpleScopeTerm?: SimpleScopeTerm;
  tagScopeTerm?: TagScopeTerm;
}
const JobScopeTerm = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<JobScopeTerm>;
export type __listOfJobScopeTerm = JobScopeTerm[];
const __listOfJobScopeTerm = /*@__PURE__*/ __L.at(__c3, 6);
export interface JobScopingBlock {
  and?: JobScopeTerm[];
}
const JobScopingBlock = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<JobScopingBlock>;
export interface Scoping {
  excludes?: JobScopingBlock;
  includes?: JobScopingBlock;
}
const Scoping = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<Scoping>;
export interface S3JobDefinition {
  bucketCriteria?: S3BucketCriteriaForJob;
  bucketDefinitions?: S3BucketDefinitionForJob[];
  scoping?: Scoping;
}
const S3JobDefinition = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<S3JobDefinition>;
export interface DailySchedule {}
const DailySchedule = AcceptInvitationResponse as any as S.Schema<DailySchedule>;
export interface MonthlySchedule {
  dayOfMonth?: number;
}
const MonthlySchedule = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<MonthlySchedule>;
export type DayOfWeek =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | (string & {});
const DayOfWeek = S.String;

export interface WeeklySchedule {
  dayOfWeek?: DayOfWeek;
}
const WeeklySchedule = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<WeeklySchedule>;
export interface JobScheduleFrequency {
  dailySchedule?: DailySchedule;
  monthlySchedule?: MonthlySchedule;
  weeklySchedule?: WeeklySchedule;
}
const JobScheduleFrequency = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<JobScheduleFrequency>;
export interface CreateClassificationJobRequest {
  allowListIds?: string[];
  clientToken?: string;
  customDataIdentifierIds?: string[];
  description?: string;
  initialRun?: boolean;
  jobType?: JobType;
  managedDataIdentifierIds?: string[];
  managedDataIdentifierSelector?: ManagedDataIdentifierSelector;
  name?: string;
  s3JobDefinition?: S3JobDefinition;
  samplingPercentage?: number;
  scheduleFrequency?: JobScheduleFrequency;
  tags?: { [key: string]: string | undefined };
}
const CreateClassificationJobRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<CreateClassificationJobRequest>;
export interface CreateClassificationJobResponse {
  jobArn?: string;
  jobId?: string;
}
const CreateClassificationJobResponse = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<CreateClassificationJobResponse>;
export type DataIdentifierSeverity = "LOW" | "MEDIUM" | "HIGH" | (string & {});
const DataIdentifierSeverity = S.String;

export interface SeverityLevel {
  occurrencesThreshold?: number;
  severity?: DataIdentifierSeverity;
}
const SeverityLevel = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<SeverityLevel>;
export type SeverityLevelList = SeverityLevel[];
const SeverityLevelList = /*@__PURE__*/ __L.at(__c5, 0);
export interface CreateCustomDataIdentifierRequest {
  clientToken?: string;
  description?: string;
  ignoreWords?: string[];
  keywords?: string[];
  maximumMatchDistance?: number;
  name?: string;
  regex?: string;
  severityLevels?: SeverityLevel[];
  tags?: { [key: string]: string | undefined };
}
const CreateCustomDataIdentifierRequest = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<CreateCustomDataIdentifierRequest>;
export interface CreateCustomDataIdentifierResponse {
  customDataIdentifierId?: string;
}
const CreateCustomDataIdentifierResponse = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<CreateCustomDataIdentifierResponse>;
export type FindingsFilterAction = "ARCHIVE" | "NOOP" | (string & {});
const FindingsFilterAction = S.String;

export interface CriterionAdditionalProperties {
  eq?: string[];
  eqExactMatch?: string[];
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
  neq?: string[];
}
const CriterionAdditionalProperties = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<CriterionAdditionalProperties>;
export type Criterion = { [key: string]: CriterionAdditionalProperties | undefined };
const Criterion = /*@__PURE__*/ __L.at(__c5, 4);
export interface FindingCriteria {
  criterion?: { [key: string]: CriterionAdditionalProperties | undefined };
}
const FindingCriteria = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<FindingCriteria>;
export interface CreateFindingsFilterRequest {
  action?: FindingsFilterAction;
  clientToken?: string;
  description?: string;
  findingCriteria?: FindingCriteria;
  name?: string;
  position?: number;
  tags?: { [key: string]: string | undefined };
}
const CreateFindingsFilterRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<CreateFindingsFilterRequest>;
export interface CreateFindingsFilterResponse {
  arn?: string;
  id?: string;
}
const CreateFindingsFilterResponse = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<CreateFindingsFilterResponse>;
export interface CreateInvitationsRequest {
  accountIds?: string[];
  disableEmailNotification?: boolean;
  message?: string;
}
const CreateInvitationsRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<CreateInvitationsRequest>;
export type ErrorCode = "ClientError" | "InternalError" | (string & {});
const ErrorCode = S.String;

export interface UnprocessedAccount {
  accountId?: string;
  errorCode?: ErrorCode;
  errorMessage?: string;
}
const UnprocessedAccount = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<UnprocessedAccount>;
export type __listOfUnprocessedAccount = UnprocessedAccount[];
const __listOfUnprocessedAccount = /*@__PURE__*/ __L.at(__c6, 2);
export interface CreateInvitationsResponse {
  unprocessedAccounts?: UnprocessedAccount[];
}
const CreateInvitationsResponse = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<CreateInvitationsResponse>;
export interface AccountDetail {
  accountId?: string;
  email?: string;
}
const AccountDetail = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<AccountDetail>;
export interface CreateMemberRequest {
  account?: AccountDetail;
  tags?: { [key: string]: string | undefined };
}
const CreateMemberRequest = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<CreateMemberRequest>;
export interface CreateMemberResponse {
  arn?: string;
}
const CreateMemberResponse = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<CreateMemberResponse>;
export type FindingType =
  | "SensitiveData:S3Object/Multiple"
  | "SensitiveData:S3Object/Financial"
  | "SensitiveData:S3Object/Personal"
  | "SensitiveData:S3Object/Credentials"
  | "SensitiveData:S3Object/CustomIdentifier"
  | "Policy:IAMUser/S3BucketPublic"
  | "Policy:IAMUser/S3BucketSharedExternally"
  | "Policy:IAMUser/S3BucketReplicatedExternally"
  | "Policy:IAMUser/S3BucketEncryptionDisabled"
  | "Policy:IAMUser/S3BlockPublicAccessDisabled"
  | "Policy:IAMUser/S3BucketSharedWithCloudFront"
  | (string & {});
const FindingType = S.String;

export type __listOfFindingType = FindingType[];
const __listOfFindingType = /*@__PURE__*/ __L.at(__c6, 7);
export interface CreateSampleFindingsRequest {
  findingTypes?: FindingType[];
}
const CreateSampleFindingsRequest = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<CreateSampleFindingsRequest>;
export interface CreateSampleFindingsResponse {}
const CreateSampleFindingsResponse =
  AcceptInvitationResponse as any as S.Schema<CreateSampleFindingsResponse>;
export interface DeclineInvitationsRequest {
  accountIds?: string[];
}
const DeclineInvitationsRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DeclineInvitationsRequest>;
export interface DeclineInvitationsResponse {
  unprocessedAccounts?: UnprocessedAccount[];
}
const DeclineInvitationsResponse =
  CreateInvitationsResponse as any as S.Schema<DeclineInvitationsResponse>;
export interface DeleteAllowListRequest {
  id: string;
  ignoreJobChecks?: string;
}
const DeleteAllowListRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DeleteAllowListRequest>;
export interface DeleteAllowListResponse {}
const DeleteAllowListResponse =
  AcceptInvitationResponse as any as S.Schema<DeleteAllowListResponse>;
export interface DeleteCustomDataIdentifierRequest {
  id: string;
}
const DeleteCustomDataIdentifierRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<DeleteCustomDataIdentifierRequest>;
export interface DeleteCustomDataIdentifierResponse {}
const DeleteCustomDataIdentifierResponse = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<DeleteCustomDataIdentifierResponse>;
export interface DeleteFindingsFilterRequest {
  id: string;
}
const DeleteFindingsFilterRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<DeleteFindingsFilterRequest>;
export interface DeleteFindingsFilterResponse {}
const DeleteFindingsFilterResponse =
  AcceptInvitationResponse as any as S.Schema<DeleteFindingsFilterResponse>;
export interface DeleteInvitationsRequest {
  accountIds?: string[];
}
const DeleteInvitationsRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<DeleteInvitationsRequest>;
export interface DeleteInvitationsResponse {
  unprocessedAccounts?: UnprocessedAccount[];
}
const DeleteInvitationsResponse =
  CreateInvitationsResponse as any as S.Schema<DeleteInvitationsResponse>;
export interface DeleteMemberRequest {
  id: string;
}
const DeleteMemberRequest = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<DeleteMemberRequest>;
export interface DeleteMemberResponse {}
const DeleteMemberResponse = AcceptInvitationResponse as any as S.Schema<DeleteMemberResponse>;
export interface BucketCriteriaAdditionalProperties {
  eq?: string[];
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
  neq?: string[];
  prefix?: string;
}
const BucketCriteriaAdditionalProperties = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<BucketCriteriaAdditionalProperties>;
export type BucketCriteria = { [key: string]: BucketCriteriaAdditionalProperties | undefined };
const BucketCriteria = /*@__PURE__*/ __L.at(__c8, 1);
export type OrderBy = "ASC" | "DESC" | (string & {});
const OrderBy = S.String;

export interface BucketSortCriteria {
  attributeName?: string;
  orderBy?: OrderBy;
}
const BucketSortCriteria = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<BucketSortCriteria>;
export interface DescribeBucketsRequest {
  criteria?: { [key: string]: BucketCriteriaAdditionalProperties | undefined };
  maxResults?: number;
  nextToken?: string;
  sortCriteria?: BucketSortCriteria;
}
const DescribeBucketsRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DescribeBucketsRequest>;
export type AllowsUnencryptedObjectUploads = "TRUE" | "FALSE" | "UNKNOWN" | (string & {});
const AllowsUnencryptedObjectUploads = S.String;

export type AutomatedDiscoveryMonitoringStatus = "MONITORED" | "NOT_MONITORED" | (string & {});
const AutomatedDiscoveryMonitoringStatus = S.String;

export type BucketMetadataErrorCode =
  | "ACCESS_DENIED"
  | "BUCKET_COUNT_EXCEEDS_QUOTA"
  | (string & {});
const BucketMetadataErrorCode = S.String;

export type IsDefinedInJob = "TRUE" | "FALSE" | "UNKNOWN" | (string & {});
const IsDefinedInJob = S.String;

export type IsMonitoredByJob = "TRUE" | "FALSE" | "UNKNOWN" | (string & {});
const IsMonitoredByJob = S.String;

export interface JobDetails {
  isDefinedInJob?: IsDefinedInJob;
  isMonitoredByJob?: IsMonitoredByJob;
  lastJobId?: string;
  lastJobRunTime?: Date;
}
const JobDetails = /*@__PURE__*/ __L.at(__c8, 4) as any as S.Schema<JobDetails>;
export interface ObjectCountByEncryptionType {
  customerManaged?: number;
  kmsManaged?: number;
  s3Managed?: number;
  unencrypted?: number;
  unknown?: number;
}
const ObjectCountByEncryptionType = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<ObjectCountByEncryptionType>;
export type EffectivePermission = "PUBLIC" | "NOT_PUBLIC" | "UNKNOWN" | (string & {});
const EffectivePermission = S.String;

export interface BlockPublicAccess {
  blockPublicAcls?: boolean;
  blockPublicPolicy?: boolean;
  ignorePublicAcls?: boolean;
  restrictPublicBuckets?: boolean;
}
const BlockPublicAccess = /*@__PURE__*/ __L.at(__c8, 6) as any as S.Schema<BlockPublicAccess>;
export interface AccountLevelPermissions {
  blockPublicAccess?: BlockPublicAccess;
}
const AccountLevelPermissions = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<AccountLevelPermissions>;
export interface AccessControlList {
  allowsPublicReadAccess?: boolean;
  allowsPublicWriteAccess?: boolean;
}
const AccessControlList = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<AccessControlList>;
export interface BucketPolicy {
  allowsPublicReadAccess?: boolean;
  allowsPublicWriteAccess?: boolean;
}
const BucketPolicy = AccessControlList as any as S.Schema<BucketPolicy>;
export interface BucketLevelPermissions {
  accessControlList?: AccessControlList;
  blockPublicAccess?: BlockPublicAccess;
  bucketPolicy?: BucketPolicy;
}
const BucketLevelPermissions = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<BucketLevelPermissions>;
export interface BucketPermissionConfiguration {
  accountLevelPermissions?: AccountLevelPermissions;
  bucketLevelPermissions?: BucketLevelPermissions;
}
const BucketPermissionConfiguration = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<BucketPermissionConfiguration>;
export interface BucketPublicAccess {
  effectivePermission?: EffectivePermission;
  permissionConfiguration?: BucketPermissionConfiguration;
}
const BucketPublicAccess = /*@__PURE__*/ __L.at(__c9, 3) as any as S.Schema<BucketPublicAccess>;
export interface ReplicationDetails {
  replicated?: boolean;
  replicatedExternally?: boolean;
  replicationAccounts?: string[];
}
const ReplicationDetails = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<ReplicationDetails>;
export type Type = "NONE" | "AES256" | "aws:kms" | "aws:kms:dsse" | (string & {});
const Type = S.String;

export interface BucketServerSideEncryption {
  kmsMasterKeyId?: string;
  type?: Type;
}
const BucketServerSideEncryption = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<BucketServerSideEncryption>;
export type SharedAccess = "EXTERNAL" | "INTERNAL" | "NOT_SHARED" | "UNKNOWN" | (string & {});
const SharedAccess = S.String;

export interface KeyValuePair {
  key?: string;
  value?: string;
}
export type __listOfKeyValuePair = KeyValuePair[];
const __listOfKeyValuePair =
  __listOfTagCriterionPairForJob as any as S.Schema<__listOfKeyValuePair>;
export interface ObjectLevelStatistics {
  fileType?: number;
  storageClass?: number;
  total?: number;
}
const ObjectLevelStatistics = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<ObjectLevelStatistics>;
export interface BucketMetadata {
  accountId?: string;
  allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploads;
  automatedDiscoveryMonitoringStatus?: AutomatedDiscoveryMonitoringStatus;
  bucketArn?: string;
  bucketCreatedAt?: Date;
  bucketName?: string;
  classifiableObjectCount?: number;
  classifiableSizeInBytes?: number;
  errorCode?: BucketMetadataErrorCode;
  errorMessage?: string;
  jobDetails?: JobDetails;
  lastAutomatedDiscoveryTime?: Date;
  lastUpdated?: Date;
  objectCount?: number;
  objectCountByEncryptionType?: ObjectCountByEncryptionType;
  publicAccess?: BucketPublicAccess;
  region?: string;
  replicationDetails?: ReplicationDetails;
  sensitivityScore?: number;
  serverSideEncryption?: BucketServerSideEncryption;
  sharedAccess?: SharedAccess;
  sizeInBytes?: number;
  sizeInBytesCompressed?: number;
  tags?: KeyValuePair[];
  unclassifiableObjectCount?: ObjectLevelStatistics;
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
  versioning?: boolean;
}
const BucketMetadata = /*@__PURE__*/ __L.at(__c9, 7) as any as S.Schema<BucketMetadata>;
export type __listOfBucketMetadata = BucketMetadata[];
const __listOfBucketMetadata = /*@__PURE__*/ __L.at(__c10, 0);
export interface DescribeBucketsResponse {
  buckets?: BucketMetadata[];
  nextToken?: string;
}
const DescribeBucketsResponse = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<DescribeBucketsResponse>;
export interface DescribeClassificationJobRequest {
  jobId: string;
}
const DescribeClassificationJobRequest = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<DescribeClassificationJobRequest>;
export type JobStatus =
  | "RUNNING"
  | "PAUSED"
  | "CANCELLED"
  | "COMPLETE"
  | "IDLE"
  | "USER_PAUSED"
  | (string & {});
const JobStatus = S.String;

export type LastRunErrorStatusCode = "NONE" | "ERROR" | (string & {});
const LastRunErrorStatusCode = S.String;

export interface LastRunErrorStatus {
  code?: LastRunErrorStatusCode;
}
const LastRunErrorStatus = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<LastRunErrorStatus>;
export interface Statistics {
  approximateNumberOfObjectsToProcess?: number;
  numberOfRuns?: number;
}
const Statistics = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<Statistics>;
export interface UserPausedDetails {
  jobExpiresAt?: Date;
  jobImminentExpirationHealthEventArn?: string;
  jobPausedAt?: Date;
}
const UserPausedDetails = /*@__PURE__*/ __L.at(__c10, 5) as any as S.Schema<UserPausedDetails>;
export interface DescribeClassificationJobResponse {
  allowListIds?: string[];
  clientToken?: string;
  createdAt?: Date;
  customDataIdentifierIds?: string[];
  description?: string;
  initialRun?: boolean;
  jobArn?: string;
  jobId?: string;
  jobStatus?: JobStatus;
  jobType?: JobType;
  lastRunErrorStatus?: LastRunErrorStatus;
  lastRunTime?: Date;
  managedDataIdentifierIds?: string[];
  managedDataIdentifierSelector?: ManagedDataIdentifierSelector;
  name?: string;
  s3JobDefinition?: S3JobDefinition & {
    bucketDefinitions: (S3BucketDefinitionForJob & {
      accountId: string;
      buckets: __listOf__string;
    })[];
  };
  samplingPercentage?: number;
  scheduleFrequency?: JobScheduleFrequency;
  statistics?: Statistics;
  tags?: { [key: string]: string | undefined };
  userPausedDetails?: UserPausedDetails;
}
const DescribeClassificationJobResponse = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<DescribeClassificationJobResponse>;
export interface DescribeOrganizationConfigurationRequest {}
const DescribeOrganizationConfigurationRequest = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<DescribeOrganizationConfigurationRequest>;
export interface DescribeOrganizationConfigurationResponse {
  autoEnable?: boolean;
  maxAccountLimitReached?: boolean;
}
const DescribeOrganizationConfigurationResponse = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<DescribeOrganizationConfigurationResponse>;
export interface DisableMacieRequest {}
const DisableMacieRequest = /*@__PURE__*/ __L.at(__c11, 1) as any as S.Schema<DisableMacieRequest>;
export interface DisableMacieResponse {}
const DisableMacieResponse = AcceptInvitationResponse as any as S.Schema<DisableMacieResponse>;
export interface DisableOrganizationAdminAccountRequest {
  adminAccountId?: string;
}
const DisableOrganizationAdminAccountRequest = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<DisableOrganizationAdminAccountRequest>;
export interface DisableOrganizationAdminAccountResponse {}
const DisableOrganizationAdminAccountResponse =
  DeleteCustomDataIdentifierResponse as any as S.Schema<DisableOrganizationAdminAccountResponse>;
export interface DisassociateFromAdministratorAccountRequest {}
const DisassociateFromAdministratorAccountRequest = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<DisassociateFromAdministratorAccountRequest>;
export interface DisassociateFromAdministratorAccountResponse {}
const DisassociateFromAdministratorAccountResponse =
  DeleteCustomDataIdentifierResponse as any as S.Schema<DisassociateFromAdministratorAccountResponse>;
export interface DisassociateFromMasterAccountRequest {}
const DisassociateFromMasterAccountRequest = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<DisassociateFromMasterAccountRequest>;
export interface DisassociateFromMasterAccountResponse {}
const DisassociateFromMasterAccountResponse =
  DeleteCustomDataIdentifierResponse as any as S.Schema<DisassociateFromMasterAccountResponse>;
export interface DisassociateMemberRequest {
  id: string;
}
const DisassociateMemberRequest = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<DisassociateMemberRequest>;
export interface DisassociateMemberResponse {}
const DisassociateMemberResponse =
  AcceptInvitationResponse as any as S.Schema<DisassociateMemberResponse>;
export type FindingPublishingFrequency =
  | "FIFTEEN_MINUTES"
  | "ONE_HOUR"
  | "SIX_HOURS"
  | (string & {});
const FindingPublishingFrequency = S.String;

export type MacieStatus = "PAUSED" | "ENABLED" | (string & {});
const MacieStatus = S.String;

export interface EnableMacieRequest {
  clientToken?: string;
  findingPublishingFrequency?: FindingPublishingFrequency;
  status?: MacieStatus;
}
const EnableMacieRequest = /*@__PURE__*/ __L.at(__c11, 6) as any as S.Schema<EnableMacieRequest>;
export interface EnableMacieResponse {}
const EnableMacieResponse = AcceptInvitationResponse as any as S.Schema<EnableMacieResponse>;
export interface EnableOrganizationAdminAccountRequest {
  adminAccountId?: string;
  clientToken?: string;
}
const EnableOrganizationAdminAccountRequest = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<EnableOrganizationAdminAccountRequest>;
export interface EnableOrganizationAdminAccountResponse {}
const EnableOrganizationAdminAccountResponse =
  DeleteCustomDataIdentifierResponse as any as S.Schema<EnableOrganizationAdminAccountResponse>;
export interface GetAdministratorAccountRequest {}
const GetAdministratorAccountRequest = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<GetAdministratorAccountRequest>;
export type RelationshipStatus =
  | "Enabled"
  | "Paused"
  | "Invited"
  | "Created"
  | "Removed"
  | "Resigned"
  | "EmailVerificationInProgress"
  | "EmailVerificationFailed"
  | "RegionDisabled"
  | "AccountSuspended"
  | (string & {});
const RelationshipStatus = S.String;

export interface Invitation {
  accountId?: string;
  invitationId?: string;
  invitedAt?: Date;
  relationshipStatus?: RelationshipStatus;
}
const Invitation = /*@__PURE__*/ __L.at(__c12, 1) as any as S.Schema<Invitation>;
export interface GetAdministratorAccountResponse {
  administrator?: Invitation;
}
const GetAdministratorAccountResponse = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<GetAdministratorAccountResponse>;
export interface GetAllowListRequest {
  id: string;
}
const GetAllowListRequest = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<GetAllowListRequest>;
export type AllowListStatusCode =
  | "OK"
  | "S3_OBJECT_NOT_FOUND"
  | "S3_USER_ACCESS_DENIED"
  | "S3_OBJECT_ACCESS_DENIED"
  | "S3_THROTTLED"
  | "S3_OBJECT_OVERSIZE"
  | "S3_OBJECT_EMPTY"
  | "UNKNOWN_ERROR"
  | (string & {});
const AllowListStatusCode = S.String;

export interface AllowListStatus {
  code?: AllowListStatusCode;
  description?: string;
}
const AllowListStatus = /*@__PURE__*/ __L.at(__c12, 4) as any as S.Schema<AllowListStatus>;
export interface GetAllowListResponse {
  arn?: string;
  createdAt?: Date;
  criteria?: AllowListCriteria & {
    s3WordsList: S3WordsList & {
      bucketName: __stringMin3Max255PatternAZaZ093255;
      objectKey: __stringMin1Max1024PatternSS;
    };
  };
  description?: string;
  id?: string;
  name?: string;
  status?: AllowListStatus & { code: AllowListStatusCode };
  tags?: { [key: string]: string | undefined };
  updatedAt?: Date;
}
const GetAllowListResponse = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<GetAllowListResponse>;
export interface GetAutomatedDiscoveryConfigurationRequest {}
const GetAutomatedDiscoveryConfigurationRequest = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<GetAutomatedDiscoveryConfigurationRequest>;
export type AutoEnableMode = "ALL" | "NEW" | "NONE" | (string & {});
const AutoEnableMode = S.String;

export type ClassificationScopeId = string;
export type SensitivityInspectionTemplateId = string;
export type AutomatedDiscoveryStatus = "ENABLED" | "DISABLED" | (string & {});
const AutomatedDiscoveryStatus = S.String;

export interface GetAutomatedDiscoveryConfigurationResponse {
  autoEnableOrganizationMembers?: AutoEnableMode;
  classificationScopeId?: string;
  disabledAt?: Date;
  firstEnabledAt?: Date;
  lastUpdatedAt?: Date;
  sensitivityInspectionTemplateId?: string;
  status?: AutomatedDiscoveryStatus;
}
const GetAutomatedDiscoveryConfigurationResponse = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<GetAutomatedDiscoveryConfigurationResponse>;
export interface GetBucketStatisticsRequest {
  accountId?: string;
}
const GetBucketStatisticsRequest = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<GetBucketStatisticsRequest>;
export interface BucketCountByEffectivePermission {
  publiclyAccessible?: number;
  publiclyReadable?: number;
  publiclyWritable?: number;
  unknown?: number;
}
const BucketCountByEffectivePermission = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<BucketCountByEffectivePermission>;
export interface BucketCountByEncryptionType {
  kmsManaged?: number;
  s3Managed?: number;
  unencrypted?: number;
  unknown?: number;
}
const BucketCountByEncryptionType = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<BucketCountByEncryptionType>;
export interface BucketCountPolicyAllowsUnencryptedObjectUploads {
  allowsUnencryptedObjectUploads?: number;
  deniesUnencryptedObjectUploads?: number;
  unknown?: number;
}
const BucketCountPolicyAllowsUnencryptedObjectUploads = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<BucketCountPolicyAllowsUnencryptedObjectUploads>;
export interface BucketCountBySharedAccessType {
  external?: number;
  internal?: number;
  notShared?: number;
  unknown?: number;
}
const BucketCountBySharedAccessType = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<BucketCountBySharedAccessType>;
export interface SensitivityAggregations {
  classifiableSizeInBytes?: number;
  publiclyAccessibleCount?: number;
  totalCount?: number;
  totalSizeInBytes?: number;
}
const SensitivityAggregations = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<SensitivityAggregations>;
export interface BucketStatisticsBySensitivity {
  classificationError?: SensitivityAggregations;
  notClassified?: SensitivityAggregations;
  notSensitive?: SensitivityAggregations;
  sensitive?: SensitivityAggregations;
}
const BucketStatisticsBySensitivity = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<BucketStatisticsBySensitivity>;
export interface GetBucketStatisticsResponse {
  bucketCount?: number;
  bucketCountByEffectivePermission?: BucketCountByEffectivePermission;
  bucketCountByEncryptionType?: BucketCountByEncryptionType;
  bucketCountByObjectEncryptionRequirement?: BucketCountPolicyAllowsUnencryptedObjectUploads;
  bucketCountBySharedAccessType?: BucketCountBySharedAccessType;
  bucketStatisticsBySensitivity?: BucketStatisticsBySensitivity;
  classifiableObjectCount?: number;
  classifiableSizeInBytes?: number;
  lastUpdated?: Date;
  objectCount?: number;
  sizeInBytes?: number;
  sizeInBytesCompressed?: number;
  unclassifiableObjectCount?: ObjectLevelStatistics;
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
}
const GetBucketStatisticsResponse = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<GetBucketStatisticsResponse>;
export interface GetClassificationExportConfigurationRequest {}
const GetClassificationExportConfigurationRequest = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<GetClassificationExportConfigurationRequest>;
export interface S3Destination {
  bucketName?: string;
  expectedBucketOwner?: string;
  keyPrefix?: string;
  kmsKeyArn?: string;
}
const S3Destination = /*@__PURE__*/ __L.at(__c14, 1) as any as S.Schema<S3Destination>;
export interface ClassificationExportConfiguration {
  s3Destination?: S3Destination;
}
const ClassificationExportConfiguration = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<ClassificationExportConfiguration>;
export interface GetClassificationExportConfigurationResponse {
  configuration?: ClassificationExportConfiguration & {
    s3Destination: S3Destination & { bucketName: string; kmsKeyArn: string };
  };
}
const GetClassificationExportConfigurationResponse = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<GetClassificationExportConfigurationResponse>;
export interface GetClassificationScopeRequest {
  id: string;
}
const GetClassificationScopeRequest = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<GetClassificationScopeRequest>;
export type ClassificationScopeName = string;
export type S3BucketName = string;
export type __listOfS3BucketName = string[];
const __listOfS3BucketName = __listOf__string as any as S.Schema<__listOfS3BucketName>;
export interface S3ClassificationScopeExclusion {
  bucketNames?: string[];
}
const S3ClassificationScopeExclusion = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<S3ClassificationScopeExclusion>;
export interface S3ClassificationScope {
  excludes?: S3ClassificationScopeExclusion;
}
const S3ClassificationScope = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<S3ClassificationScope>;
export interface GetClassificationScopeResponse {
  id?: string;
  name?: string;
  s3?: S3ClassificationScope & {
    excludes: S3ClassificationScopeExclusion & { bucketNames: __listOfS3BucketName };
  };
}
const GetClassificationScopeResponse = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<GetClassificationScopeResponse>;
export interface GetCustomDataIdentifierRequest {
  id: string;
}
const GetCustomDataIdentifierRequest = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<GetCustomDataIdentifierRequest>;
export interface GetCustomDataIdentifierResponse {
  arn?: string;
  createdAt?: Date;
  deleted?: boolean;
  description?: string;
  id?: string;
  ignoreWords?: string[];
  keywords?: string[];
  maximumMatchDistance?: number;
  name?: string;
  regex?: string;
  severityLevels?: (SeverityLevel & {
    occurrencesThreshold: number;
    severity: DataIdentifierSeverity;
  })[];
  tags?: { [key: string]: string | undefined };
}
const GetCustomDataIdentifierResponse = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<GetCustomDataIdentifierResponse>;
export interface SortCriteria {
  attributeName?: string;
  orderBy?: OrderBy;
}
const SortCriteria = BucketSortCriteria as any as S.Schema<SortCriteria>;
export interface GetFindingsRequest {
  findingIds?: string[];
  sortCriteria?: SortCriteria;
}
const GetFindingsRequest = /*@__PURE__*/ __L.at(__c15, 2) as any as S.Schema<GetFindingsRequest>;
export type FindingCategory = "CLASSIFICATION" | "POLICY" | (string & {});
const FindingCategory = S.String;

export type OriginType =
  | "SENSITIVE_DATA_DISCOVERY_JOB"
  | "AUTOMATED_SENSITIVE_DATA_DISCOVERY"
  | (string & {});
const OriginType = S.String;

export interface Cell {
  cellReference?: string;
  column?: number;
  columnName?: string;
  row?: number;
}
const Cell = /*@__PURE__*/ __L.at(__c15, 3) as any as S.Schema<Cell>;
export type Cells = Cell[];
const Cells = /*@__PURE__*/ __L.at(__c15, 4);
export interface Range {
  end?: number;
  start?: number;
  startColumn?: number;
}
const Range = /*@__PURE__*/ __L.at(__c15, 5) as any as S.Schema<Range>;
export type Ranges = Range[];
const Ranges = /*@__PURE__*/ __L.at(__c15, 6);
export interface Page {
  lineRange?: Range;
  offsetRange?: Range;
  pageNumber?: number;
}
const Page = /*@__PURE__*/ __L.at(__c15, 7) as any as S.Schema<Page>;
export type Pages = Page[];
const Pages = /*@__PURE__*/ __L.at(__c16, 0);
export interface Record {
  jsonPath?: string;
  recordIndex?: number;
}
const Record = /*@__PURE__*/ __L.at(__c16, 1) as any as S.Schema<Record>;
export type Records = Record[];
const Records = /*@__PURE__*/ __L.at(__c16, 2);
export interface Occurrences {
  cells?: Cell[];
  lineRanges?: Range[];
  offsetRanges?: Range[];
  pages?: Page[];
  records?: Record[];
}
const Occurrences = /*@__PURE__*/ __L.at(__c16, 3) as any as S.Schema<Occurrences>;
export interface CustomDetection {
  arn?: string;
  count?: number;
  name?: string;
  occurrences?: Occurrences;
}
const CustomDetection = /*@__PURE__*/ __L.at(__c16, 4) as any as S.Schema<CustomDetection>;
export type CustomDetections = CustomDetection[];
const CustomDetections = /*@__PURE__*/ __L.at(__c16, 5);
export interface CustomDataIdentifiers {
  detections?: CustomDetection[];
  totalCount?: number;
}
const CustomDataIdentifiers = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<CustomDataIdentifiers>;
export type SensitiveDataItemCategory =
  | "FINANCIAL_INFORMATION"
  | "PERSONAL_INFORMATION"
  | "CREDENTIALS"
  | "CUSTOM_IDENTIFIER"
  | (string & {});
const SensitiveDataItemCategory = S.String;

export interface DefaultDetection {
  count?: number;
  occurrences?: Occurrences;
  type?: string;
}
const DefaultDetection = /*@__PURE__*/ __L.at(__c16, 7) as any as S.Schema<DefaultDetection>;
export type DefaultDetections = DefaultDetection[];
const DefaultDetections = /*@__PURE__*/ __L.at(__c17, 0);
export interface SensitiveDataItem {
  category?: SensitiveDataItemCategory;
  detections?: DefaultDetection[];
  totalCount?: number;
}
const SensitiveDataItem = /*@__PURE__*/ __L.at(__c17, 1) as any as S.Schema<SensitiveDataItem>;
export type SensitiveData = SensitiveDataItem[];
const SensitiveData = /*@__PURE__*/ __L.at(__c17, 2);
export interface ClassificationResultStatus {
  code?: string;
  reason?: string;
}
const ClassificationResultStatus = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<ClassificationResultStatus>;
export interface ClassificationResult {
  additionalOccurrences?: boolean;
  customDataIdentifiers?: CustomDataIdentifiers;
  mimeType?: string;
  sensitiveData?: SensitiveDataItem[];
  sizeClassified?: number;
  status?: ClassificationResultStatus;
}
const ClassificationResult = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<ClassificationResult>;
export interface ClassificationDetails {
  detailedResultsLocation?: string;
  jobArn?: string;
  jobId?: string;
  originType?: OriginType;
  result?: ClassificationResult;
}
const ClassificationDetails = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<ClassificationDetails>;
export type FindingActionType = "AWS_API_CALL" | (string & {});
const FindingActionType = S.String;

export interface ApiCallDetails {
  api?: string;
  apiServiceName?: string;
  firstSeen?: Date;
  lastSeen?: Date;
}
const ApiCallDetails = /*@__PURE__*/ __L.at(__c17, 6) as any as S.Schema<ApiCallDetails>;
export interface FindingAction {
  actionType?: FindingActionType;
  apiCallDetails?: ApiCallDetails;
}
const FindingAction = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<FindingAction>;
export interface DomainDetails {
  domainName?: string;
}
const DomainDetails = /*@__PURE__*/ __L.at(__c18, 0) as any as S.Schema<DomainDetails>;
export interface IpCity {
  name?: string;
}
const IpCity = /*@__PURE__*/ __L.at(__c18, 1) as any as S.Schema<IpCity>;
export interface IpCountry {
  code?: string;
  name?: string;
}
const IpCountry = /*@__PURE__*/ __L.at(__c18, 2) as any as S.Schema<IpCountry>;
export interface IpGeoLocation {
  lat?: number;
  lon?: number;
}
const IpGeoLocation = /*@__PURE__*/ __L.at(__c18, 3) as any as S.Schema<IpGeoLocation>;
export interface IpOwner {
  asn?: string;
  asnOrg?: string;
  isp?: string;
  org?: string;
}
const IpOwner = /*@__PURE__*/ __L.at(__c18, 4) as any as S.Schema<IpOwner>;
export interface IpAddressDetails {
  ipAddressV4?: string;
  ipCity?: IpCity;
  ipCountry?: IpCountry;
  ipGeoLocation?: IpGeoLocation;
  ipOwner?: IpOwner;
}
const IpAddressDetails = /*@__PURE__*/ __L.at(__c18, 5) as any as S.Schema<IpAddressDetails>;
export interface SessionContextAttributes {
  creationDate?: Date;
  mfaAuthenticated?: boolean;
}
const SessionContextAttributes = /*@__PURE__*/ __L.at(
  __c18,
  6,
) as any as S.Schema<SessionContextAttributes>;
export interface SessionIssuer {
  accountId?: string;
  arn?: string;
  principalId?: string;
  type?: string;
  userName?: string;
}
const SessionIssuer = /*@__PURE__*/ __L.at(__c18, 7) as any as S.Schema<SessionIssuer>;
export interface SessionContext {
  attributes?: SessionContextAttributes;
  sessionIssuer?: SessionIssuer;
}
const SessionContext = /*@__PURE__*/ __L.at(__c19, 0) as any as S.Schema<SessionContext>;
export interface AssumedRole {
  accessKeyId?: string;
  accountId?: string;
  arn?: string;
  principalId?: string;
  sessionContext?: SessionContext;
}
const AssumedRole = /*@__PURE__*/ __L.at(__c19, 1) as any as S.Schema<AssumedRole>;
export interface AwsAccount {
  accountId?: string;
  principalId?: string;
}
const AwsAccount = /*@__PURE__*/ __L.at(__c19, 2) as any as S.Schema<AwsAccount>;
export interface AwsService {
  invokedBy?: string;
}
const AwsService = /*@__PURE__*/ __L.at(__c19, 3) as any as S.Schema<AwsService>;
export interface FederatedUser {
  accessKeyId?: string;
  accountId?: string;
  arn?: string;
  principalId?: string;
  sessionContext?: SessionContext;
}
const FederatedUser = AssumedRole as any as S.Schema<FederatedUser>;
export interface IamUser {
  accountId?: string;
  arn?: string;
  principalId?: string;
  userName?: string;
}
const IamUser = /*@__PURE__*/ __L.at(__c19, 4) as any as S.Schema<IamUser>;
export interface UserIdentityRoot {
  accountId?: string;
  arn?: string;
  principalId?: string;
}
const UserIdentityRoot = /*@__PURE__*/ __L.at(__c19, 5) as any as S.Schema<UserIdentityRoot>;
export type UserIdentityType =
  | "AssumedRole"
  | "IAMUser"
  | "FederatedUser"
  | "Root"
  | "AWSAccount"
  | "AWSService"
  | (string & {});
const UserIdentityType = S.String;

export interface UserIdentity {
  assumedRole?: AssumedRole;
  awsAccount?: AwsAccount;
  awsService?: AwsService;
  federatedUser?: FederatedUser;
  iamUser?: IamUser;
  root?: UserIdentityRoot;
  type?: UserIdentityType;
}
const UserIdentity = /*@__PURE__*/ __L.at(__c19, 6) as any as S.Schema<UserIdentity>;
export interface FindingActor {
  domainDetails?: DomainDetails;
  ipAddressDetails?: IpAddressDetails;
  userIdentity?: UserIdentity;
}
const FindingActor = /*@__PURE__*/ __L.at(__c19, 7) as any as S.Schema<FindingActor>;
export interface PolicyDetails {
  action?: FindingAction;
  actor?: FindingActor;
}
const PolicyDetails = /*@__PURE__*/ __L.at(__c20, 0) as any as S.Schema<PolicyDetails>;
export type EncryptionType =
  | "NONE"
  | "AES256"
  | "aws:kms"
  | "UNKNOWN"
  | "aws:kms:dsse"
  | (string & {});
const EncryptionType = S.String;

export interface ServerSideEncryption {
  encryptionType?: EncryptionType;
  kmsMasterKeyId?: string;
}
const ServerSideEncryption = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<ServerSideEncryption>;
export interface S3BucketOwner {
  displayName?: string;
  id?: string;
}
const S3BucketOwner = /*@__PURE__*/ __L.at(__c20, 2) as any as S.Schema<S3BucketOwner>;
export type KeyValuePairList = KeyValuePair[];
const KeyValuePairList = __listOfTagCriterionPairForJob as any as S.Schema<KeyValuePairList>;
export interface S3Bucket {
  allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploads;
  arn?: string;
  createdAt?: Date;
  defaultServerSideEncryption?: ServerSideEncryption;
  name?: string;
  owner?: S3BucketOwner;
  publicAccess?: BucketPublicAccess;
  tags?: KeyValuePair[];
}
const S3Bucket = /*@__PURE__*/ __L.at(__c20, 3) as any as S.Schema<S3Bucket>;
export type StorageClass =
  | "STANDARD"
  | "REDUCED_REDUNDANCY"
  | "STANDARD_IA"
  | "INTELLIGENT_TIERING"
  | "DEEP_ARCHIVE"
  | "ONEZONE_IA"
  | "GLACIER"
  | "GLACIER_IR"
  | "OUTPOSTS"
  | (string & {});
const StorageClass = S.String;

export interface S3Object {
  bucketArn?: string;
  eTag?: string;
  extension?: string;
  key?: string;
  lastModified?: Date;
  path?: string;
  publicAccess?: boolean;
  serverSideEncryption?: ServerSideEncryption;
  size?: number;
  storageClass?: StorageClass;
  tags?: KeyValuePair[];
  versionId?: string;
}
const S3Object = /*@__PURE__*/ __L.at(__c20, 4) as any as S.Schema<S3Object>;
export interface ResourcesAffected {
  s3Bucket?: S3Bucket;
  s3Object?: S3Object;
}
const ResourcesAffected = /*@__PURE__*/ __L.at(__c20, 5) as any as S.Schema<ResourcesAffected>;
export type SeverityDescription = "Low" | "Medium" | "High" | (string & {});
const SeverityDescription = S.String;

export interface Severity {
  description?: SeverityDescription;
  score?: number;
}
const Severity = /*@__PURE__*/ __L.at(__c20, 6) as any as S.Schema<Severity>;
export interface Finding {
  accountId?: string;
  archived?: boolean;
  category?: FindingCategory;
  classificationDetails?: ClassificationDetails;
  count?: number;
  createdAt?: Date;
  description?: string;
  id?: string;
  partition?: string;
  policyDetails?: PolicyDetails;
  region?: string;
  resourcesAffected?: ResourcesAffected;
  sample?: boolean;
  schemaVersion?: string;
  severity?: Severity;
  title?: string;
  type?: FindingType;
  updatedAt?: Date;
}
const Finding = /*@__PURE__*/ __L.at(__c20, 7) as any as S.Schema<Finding>;
export type __listOfFinding = Finding[];
const __listOfFinding = /*@__PURE__*/ __L.at(__c21, 0);
export interface GetFindingsResponse {
  findings?: Finding[];
}
const GetFindingsResponse = /*@__PURE__*/ __L.at(__c21, 1) as any as S.Schema<GetFindingsResponse>;
export interface GetFindingsFilterRequest {
  id: string;
}
const GetFindingsFilterRequest = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<GetFindingsFilterRequest>;
export interface GetFindingsFilterResponse {
  action?: FindingsFilterAction;
  arn?: string;
  description?: string;
  findingCriteria?: FindingCriteria;
  id?: string;
  name?: string;
  position?: number;
  tags?: { [key: string]: string | undefined };
}
const GetFindingsFilterResponse = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<GetFindingsFilterResponse>;
export interface GetFindingsPublicationConfigurationRequest {}
const GetFindingsPublicationConfigurationRequest = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<GetFindingsPublicationConfigurationRequest>;
export interface SecurityHubConfiguration {
  publishClassificationFindings?: boolean;
  publishPolicyFindings?: boolean;
}
const SecurityHubConfiguration = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<SecurityHubConfiguration>;
export interface GetFindingsPublicationConfigurationResponse {
  securityHubConfiguration?: SecurityHubConfiguration & {
    publishClassificationFindings: boolean;
    publishPolicyFindings: boolean;
  };
}
const GetFindingsPublicationConfigurationResponse = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<GetFindingsPublicationConfigurationResponse>;
export type GroupBy =
  | "resourcesAffected.s3Bucket.name"
  | "type"
  | "classificationDetails.jobId"
  | "severity.description"
  | (string & {});
const GroupBy = S.String;

export type FindingStatisticsSortAttributeName = "groupKey" | "count" | (string & {});
const FindingStatisticsSortAttributeName = S.String;

export interface FindingStatisticsSortCriteria {
  attributeName?: FindingStatisticsSortAttributeName;
  orderBy?: OrderBy;
}
const FindingStatisticsSortCriteria = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<FindingStatisticsSortCriteria>;
export interface GetFindingStatisticsRequest {
  findingCriteria?: FindingCriteria;
  groupBy?: GroupBy;
  size?: number;
  sortCriteria?: FindingStatisticsSortCriteria;
}
const GetFindingStatisticsRequest = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<GetFindingStatisticsRequest>;
export interface GroupCount {
  count?: number;
  groupKey?: string;
}
const GroupCount = /*@__PURE__*/ __L.at(__c22, 1) as any as S.Schema<GroupCount>;
export type __listOfGroupCount = GroupCount[];
const __listOfGroupCount = /*@__PURE__*/ __L.at(__c22, 2);
export interface GetFindingStatisticsResponse {
  countsByGroup?: GroupCount[];
}
const GetFindingStatisticsResponse = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<GetFindingStatisticsResponse>;
export interface GetInvitationsCountRequest {}
const GetInvitationsCountRequest = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<GetInvitationsCountRequest>;
export interface GetInvitationsCountResponse {
  invitationsCount?: number;
}
const GetInvitationsCountResponse = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<GetInvitationsCountResponse>;
export interface GetMacieSessionRequest {}
const GetMacieSessionRequest = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<GetMacieSessionRequest>;
export interface GetMacieSessionResponse {
  createdAt?: Date;
  findingPublishingFrequency?: FindingPublishingFrequency;
  serviceRole?: string;
  status?: MacieStatus;
  updatedAt?: Date;
}
const GetMacieSessionResponse = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<GetMacieSessionResponse>;
export interface GetMasterAccountRequest {}
const GetMasterAccountRequest = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<GetMasterAccountRequest>;
export interface GetMasterAccountResponse {
  master?: Invitation;
}
const GetMasterAccountResponse = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<GetMasterAccountResponse>;
export interface GetMemberRequest {
  id: string;
}
const GetMemberRequest = /*@__PURE__*/ __L.at(__c23, 2) as any as S.Schema<GetMemberRequest>;
export interface GetMemberResponse {
  accountId?: string;
  administratorAccountId?: string;
  arn?: string;
  email?: string;
  invitedAt?: Date;
  masterAccountId?: string;
  relationshipStatus?: RelationshipStatus;
  tags?: { [key: string]: string | undefined };
  updatedAt?: Date;
}
const GetMemberResponse = /*@__PURE__*/ __L.at(__c23, 3) as any as S.Schema<GetMemberResponse>;
export interface GetResourceProfileRequest {
  resourceArn?: string;
}
const GetResourceProfileRequest = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<GetResourceProfileRequest>;
export interface ResourceStatistics {
  totalBytesClassified?: number;
  totalDetections?: number;
  totalDetectionsSuppressed?: number;
  totalItemsClassified?: number;
  totalItemsSensitive?: number;
  totalItemsSkipped?: number;
  totalItemsSkippedInvalidEncryption?: number;
  totalItemsSkippedInvalidKms?: number;
  totalItemsSkippedPermissionDenied?: number;
}
const ResourceStatistics = /*@__PURE__*/ __L.at(__c23, 5) as any as S.Schema<ResourceStatistics>;
export interface GetResourceProfileResponse {
  profileUpdatedAt?: Date;
  sensitivityScore?: number;
  sensitivityScoreOverridden?: boolean;
  statistics?: ResourceStatistics;
}
const GetResourceProfileResponse = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<GetResourceProfileResponse>;
export interface GetRevealConfigurationRequest {}
const GetRevealConfigurationRequest = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<GetRevealConfigurationRequest>;
export type __stringMin1Max2048 = string;
export type RevealStatus = "ENABLED" | "DISABLED" | (string & {});
const RevealStatus = S.String;

export interface RevealConfiguration {
  kmsKeyId?: string;
  status?: RevealStatus;
}
const RevealConfiguration = /*@__PURE__*/ __L.at(__c24, 0) as any as S.Schema<RevealConfiguration>;
export type RetrievalMode = "CALLER_CREDENTIALS" | "ASSUME_ROLE" | (string & {});
const RetrievalMode = S.String;

export type __stringMin1Max64PatternW = string;
export interface RetrievalConfiguration {
  externalId?: string;
  retrievalMode?: RetrievalMode;
  roleName?: string;
}
const RetrievalConfiguration = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<RetrievalConfiguration>;
export interface GetRevealConfigurationResponse {
  configuration?: RevealConfiguration & { status: RevealStatus };
  retrievalConfiguration?: RetrievalConfiguration & { retrievalMode: RetrievalMode };
}
const GetRevealConfigurationResponse = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<GetRevealConfigurationResponse>;
export interface GetSensitiveDataOccurrencesRequest {
  findingId: string;
}
const GetSensitiveDataOccurrencesRequest = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<GetSensitiveDataOccurrencesRequest>;
export type __stringMin1Max128 = string;
export interface DetectedDataDetails {
  value?: string | redacted.Redacted<string>;
}
const DetectedDataDetails = /*@__PURE__*/ __L.at(__c24, 4) as any as S.Schema<DetectedDataDetails>;
export type __listOfDetectedDataDetails = DetectedDataDetails[];
const __listOfDetectedDataDetails = /*@__PURE__*/ __L.at(__c24, 5);
export type SensitiveDataOccurrences = { [key: string]: DetectedDataDetails[] | undefined };
const SensitiveDataOccurrences = /*@__PURE__*/ __L.at(__c24, 6);
export type RevealRequestStatus = "SUCCESS" | "PROCESSING" | "ERROR" | (string & {});
const RevealRequestStatus = S.String;

export interface GetSensitiveDataOccurrencesResponse {
  error?: string;
  sensitiveDataOccurrences?: {
    [key: string]: (DetectedDataDetails & { value: __stringMin1Max128 })[] | undefined;
  };
  status?: RevealRequestStatus;
}
const GetSensitiveDataOccurrencesResponse = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<GetSensitiveDataOccurrencesResponse>;
export interface GetSensitiveDataOccurrencesAvailabilityRequest {
  findingId: string;
}
const GetSensitiveDataOccurrencesAvailabilityRequest = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<GetSensitiveDataOccurrencesAvailabilityRequest>;
export type AvailabilityCode = "AVAILABLE" | "UNAVAILABLE" | (string & {});
const AvailabilityCode = S.String;

export type UnavailabilityReasonCode =
  | "OBJECT_EXCEEDS_SIZE_QUOTA"
  | "UNSUPPORTED_OBJECT_TYPE"
  | "UNSUPPORTED_FINDING_TYPE"
  | "INVALID_CLASSIFICATION_RESULT"
  | "OBJECT_UNAVAILABLE"
  | "ACCOUNT_NOT_IN_ORGANIZATION"
  | "MISSING_GET_MEMBER_PERMISSION"
  | "ROLE_TOO_PERMISSIVE"
  | "MEMBER_ROLE_TOO_PERMISSIVE"
  | "INVALID_RESULT_SIGNATURE"
  | "RESULT_NOT_SIGNED"
  | (string & {});
export type __listOfUnavailabilityReasonCode = UnavailabilityReasonCode[];
const __listOfUnavailabilityReasonCode =
  __listOfFindingType as any as S.Schema<__listOfUnavailabilityReasonCode>;
export interface GetSensitiveDataOccurrencesAvailabilityResponse {
  code?: AvailabilityCode;
  reasons?: UnavailabilityReasonCode[];
}
const GetSensitiveDataOccurrencesAvailabilityResponse = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<GetSensitiveDataOccurrencesAvailabilityResponse>;
export interface GetSensitivityInspectionTemplateRequest {
  id: string;
}
const GetSensitivityInspectionTemplateRequest = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<GetSensitivityInspectionTemplateRequest>;
export interface SensitivityInspectionTemplateExcludes {
  managedDataIdentifierIds?: string[];
}
const SensitivityInspectionTemplateExcludes = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<SensitivityInspectionTemplateExcludes>;
export interface SensitivityInspectionTemplateIncludes {
  allowListIds?: string[];
  customDataIdentifierIds?: string[];
  managedDataIdentifierIds?: string[];
}
const SensitivityInspectionTemplateIncludes = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<SensitivityInspectionTemplateIncludes>;
export interface GetSensitivityInspectionTemplateResponse {
  description?: string;
  excludes?: SensitivityInspectionTemplateExcludes;
  includes?: SensitivityInspectionTemplateIncludes;
  name?: string;
  sensitivityInspectionTemplateId?: string;
}
const GetSensitivityInspectionTemplateResponse = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<GetSensitivityInspectionTemplateResponse>;
export type UsageStatisticsFilterComparator =
  | "GT"
  | "GTE"
  | "LT"
  | "LTE"
  | "EQ"
  | "NE"
  | "CONTAINS"
  | (string & {});
export type UsageStatisticsFilterKey =
  | "accountId"
  | "serviceLimit"
  | "freeTrialStartDate"
  | "total"
  | (string & {});
export interface UsageStatisticsFilter {
  comparator?: UsageStatisticsFilterComparator;
  key?: UsageStatisticsFilterKey;
  values?: string[];
}
const UsageStatisticsFilter = SimpleCriterionForJob as any as S.Schema<UsageStatisticsFilter>;
export type __listOfUsageStatisticsFilter = UsageStatisticsFilter[];
const __listOfUsageStatisticsFilter = /*@__PURE__*/ __L.at(__c25, 6);
export type UsageStatisticsSortKey =
  | "accountId"
  | "total"
  | "serviceLimitValue"
  | "freeTrialStartDate"
  | (string & {});
const UsageStatisticsSortKey = S.String;

export interface UsageStatisticsSortBy {
  key?: UsageStatisticsSortKey;
  orderBy?: OrderBy;
}
const UsageStatisticsSortBy = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<UsageStatisticsSortBy>;
export type TimeRange = "MONTH_TO_DATE" | "PAST_30_DAYS" | (string & {});
const TimeRange = S.String;

export interface GetUsageStatisticsRequest {
  filterBy?: UsageStatisticsFilter[];
  maxResults?: number;
  nextToken?: string;
  sortBy?: UsageStatisticsSortBy;
  timeRange?: TimeRange;
}
const GetUsageStatisticsRequest = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<GetUsageStatisticsRequest>;
export type Currency = "USD" | (string & {});
const Currency = S.String;

export type Unit = "TERABYTES" | (string & {});
const Unit = S.String;

export interface ServiceLimit {
  isServiceLimited?: boolean;
  unit?: Unit;
  value?: number;
}
const ServiceLimit = /*@__PURE__*/ __L.at(__c26, 1) as any as S.Schema<ServiceLimit>;
export type UsageType =
  | "DATA_INVENTORY_EVALUATION"
  | "SENSITIVE_DATA_DISCOVERY"
  | "AUTOMATED_SENSITIVE_DATA_DISCOVERY"
  | "AUTOMATED_OBJECT_MONITORING"
  | (string & {});
const UsageType = S.String;

export interface UsageByAccount {
  currency?: Currency;
  estimatedCost?: string;
  serviceLimit?: ServiceLimit;
  type?: UsageType;
}
const UsageByAccount = /*@__PURE__*/ __L.at(__c26, 2) as any as S.Schema<UsageByAccount>;
export type __listOfUsageByAccount = UsageByAccount[];
const __listOfUsageByAccount = /*@__PURE__*/ __L.at(__c26, 3);
export interface UsageRecord {
  accountId?: string;
  automatedDiscoveryFreeTrialStartDate?: Date;
  freeTrialStartDate?: Date;
  usage?: UsageByAccount[];
}
const UsageRecord = /*@__PURE__*/ __L.at(__c26, 4) as any as S.Schema<UsageRecord>;
export type __listOfUsageRecord = UsageRecord[];
const __listOfUsageRecord = /*@__PURE__*/ __L.at(__c26, 5);
export interface GetUsageStatisticsResponse {
  nextToken?: string;
  records?: UsageRecord[];
  timeRange?: TimeRange;
}
const GetUsageStatisticsResponse = /*@__PURE__*/ __L.at(
  __c26,
  6,
) as any as S.Schema<GetUsageStatisticsResponse>;
export interface GetUsageTotalsRequest {
  timeRange?: string;
}
const GetUsageTotalsRequest = /*@__PURE__*/ __L.at(
  __c26,
  7,
) as any as S.Schema<GetUsageTotalsRequest>;
export interface UsageTotal {
  currency?: Currency;
  estimatedCost?: string;
  type?: UsageType;
}
const UsageTotal = /*@__PURE__*/ __L.at(__c27, 0) as any as S.Schema<UsageTotal>;
export type __listOfUsageTotal = UsageTotal[];
const __listOfUsageTotal = /*@__PURE__*/ __L.at(__c27, 1);
export interface GetUsageTotalsResponse {
  timeRange?: TimeRange;
  usageTotals?: UsageTotal[];
}
const GetUsageTotalsResponse = /*@__PURE__*/ __L.at(
  __c27,
  2,
) as any as S.Schema<GetUsageTotalsResponse>;
export type MaxResults = number;
export interface ListAllowListsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListAllowListsRequest = /*@__PURE__*/ __L.at(
  __c27,
  3,
) as any as S.Schema<ListAllowListsRequest>;
export interface AllowListSummary {
  arn?: string;
  createdAt?: Date;
  description?: string;
  id?: string;
  name?: string;
  updatedAt?: Date;
}
const AllowListSummary = /*@__PURE__*/ __L.at(__c27, 4) as any as S.Schema<AllowListSummary>;
export type __listOfAllowListSummary = AllowListSummary[];
const __listOfAllowListSummary = /*@__PURE__*/ __L.at(__c27, 5);
export interface ListAllowListsResponse {
  allowLists?: AllowListSummary[];
  nextToken?: string;
}
const ListAllowListsResponse = /*@__PURE__*/ __L.at(
  __c27,
  6,
) as any as S.Schema<ListAllowListsResponse>;
export interface ListAutomatedDiscoveryAccountsRequest {
  accountIds?: string[];
  maxResults?: number;
  nextToken?: string;
}
const ListAutomatedDiscoveryAccountsRequest = /*@__PURE__*/ __L.at(
  __c27,
  7,
) as any as S.Schema<ListAutomatedDiscoveryAccountsRequest>;
export interface AutomatedDiscoveryAccount {
  accountId?: string;
  status?: AutomatedDiscoveryAccountStatus;
}
const AutomatedDiscoveryAccount =
  AutomatedDiscoveryAccountUpdate as any as S.Schema<AutomatedDiscoveryAccount>;
export type __listOfAutomatedDiscoveryAccount = AutomatedDiscoveryAccount[];
const __listOfAutomatedDiscoveryAccount = /*@__PURE__*/ __L.at(__c28, 0);
export interface ListAutomatedDiscoveryAccountsResponse {
  items?: AutomatedDiscoveryAccount[];
  nextToken?: string;
}
const ListAutomatedDiscoveryAccountsResponse = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<ListAutomatedDiscoveryAccountsResponse>;
export type ListJobsFilterKey = "jobType" | "jobStatus" | "createdAt" | "name" | (string & {});
export interface ListJobsFilterTerm {
  comparator?: JobComparator;
  key?: ListJobsFilterKey;
  values?: string[];
}
export type __listOfListJobsFilterTerm = ListJobsFilterTerm[];
const __listOfListJobsFilterTerm =
  __listOfUsageStatisticsFilter as any as S.Schema<__listOfListJobsFilterTerm>;
export interface ListJobsFilterCriteria {
  excludes?: ListJobsFilterTerm[];
  includes?: ListJobsFilterTerm[];
}
const ListJobsFilterCriteria = /*@__PURE__*/ __L.at(
  __c28,
  2,
) as any as S.Schema<ListJobsFilterCriteria>;
export type ListJobsSortAttributeName =
  | "createdAt"
  | "jobStatus"
  | "name"
  | "jobType"
  | (string & {});
const ListJobsSortAttributeName = S.String;

export interface ListJobsSortCriteria {
  attributeName?: ListJobsSortAttributeName;
  orderBy?: OrderBy;
}
const ListJobsSortCriteria = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<ListJobsSortCriteria>;
export interface ListClassificationJobsRequest {
  filterCriteria?: ListJobsFilterCriteria;
  maxResults?: number;
  nextToken?: string;
  sortCriteria?: ListJobsSortCriteria;
}
const ListClassificationJobsRequest = /*@__PURE__*/ __L.at(
  __c28,
  4,
) as any as S.Schema<ListClassificationJobsRequest>;
export interface JobSummary {
  bucketCriteria?: S3BucketCriteriaForJob;
  bucketDefinitions?: S3BucketDefinitionForJob[];
  createdAt?: Date;
  jobId?: string;
  jobStatus?: JobStatus;
  jobType?: JobType;
  lastRunErrorStatus?: LastRunErrorStatus;
  name?: string;
  userPausedDetails?: UserPausedDetails;
}
const JobSummary = /*@__PURE__*/ __L.at(__c28, 5) as any as S.Schema<JobSummary>;
export type __listOfJobSummary = JobSummary[];
const __listOfJobSummary = /*@__PURE__*/ __L.at(__c28, 6);
export interface ListClassificationJobsResponse {
  items?: (JobSummary & {
    bucketDefinitions: (S3BucketDefinitionForJob & {
      accountId: string;
      buckets: __listOf__string;
    })[];
  })[];
  nextToken?: string;
}
const ListClassificationJobsResponse = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<ListClassificationJobsResponse>;
export interface ListClassificationScopesRequest {
  name?: string;
  nextToken?: string;
}
const ListClassificationScopesRequest = /*@__PURE__*/ __L.at(
  __c29,
  0,
) as any as S.Schema<ListClassificationScopesRequest>;
export interface ClassificationScopeSummary {
  id?: string;
  name?: string;
}
const ClassificationScopeSummary = /*@__PURE__*/ __L.at(
  __c29,
  1,
) as any as S.Schema<ClassificationScopeSummary>;
export type __listOfClassificationScopeSummary = ClassificationScopeSummary[];
const __listOfClassificationScopeSummary = /*@__PURE__*/ __L.at(__c29, 2);
export type NextToken = string;
export interface ListClassificationScopesResponse {
  classificationScopes?: ClassificationScopeSummary[];
  nextToken?: string;
}
const ListClassificationScopesResponse = /*@__PURE__*/ __L.at(
  __c29,
  3,
) as any as S.Schema<ListClassificationScopesResponse>;
export interface ListCustomDataIdentifiersRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListCustomDataIdentifiersRequest = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<ListCustomDataIdentifiersRequest>;
export interface CustomDataIdentifierSummary {
  arn?: string;
  createdAt?: Date;
  description?: string;
  id?: string;
  name?: string;
}
const CustomDataIdentifierSummary = /*@__PURE__*/ __L.at(
  __c29,
  5,
) as any as S.Schema<CustomDataIdentifierSummary>;
export type __listOfCustomDataIdentifierSummary = CustomDataIdentifierSummary[];
const __listOfCustomDataIdentifierSummary = /*@__PURE__*/ __L.at(__c29, 6);
export interface ListCustomDataIdentifiersResponse {
  items?: CustomDataIdentifierSummary[];
  nextToken?: string;
}
const ListCustomDataIdentifiersResponse = /*@__PURE__*/ __L.at(
  __c29,
  7,
) as any as S.Schema<ListCustomDataIdentifiersResponse>;
export interface ListFindingsRequest {
  findingCriteria?: FindingCriteria;
  maxResults?: number;
  nextToken?: string;
  sortCriteria?: SortCriteria;
}
const ListFindingsRequest = /*@__PURE__*/ __L.at(__c30, 0) as any as S.Schema<ListFindingsRequest>;
export interface ListFindingsResponse {
  findingIds?: string[];
  nextToken?: string;
}
const ListFindingsResponse = /*@__PURE__*/ __L.at(
  __c30,
  1,
) as any as S.Schema<ListFindingsResponse>;
export interface ListFindingsFiltersRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListFindingsFiltersRequest = /*@__PURE__*/ __L.at(
  __c30,
  2,
) as any as S.Schema<ListFindingsFiltersRequest>;
export interface FindingsFilterListItem {
  action?: FindingsFilterAction;
  arn?: string;
  id?: string;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
const FindingsFilterListItem = /*@__PURE__*/ __L.at(
  __c30,
  3,
) as any as S.Schema<FindingsFilterListItem>;
export type __listOfFindingsFilterListItem = FindingsFilterListItem[];
const __listOfFindingsFilterListItem = /*@__PURE__*/ __L.at(__c30, 4);
export interface ListFindingsFiltersResponse {
  findingsFilterListItems?: FindingsFilterListItem[];
  nextToken?: string;
}
const ListFindingsFiltersResponse = /*@__PURE__*/ __L.at(
  __c30,
  5,
) as any as S.Schema<ListFindingsFiltersResponse>;
export interface ListInvitationsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListInvitationsRequest = /*@__PURE__*/ __L.at(
  __c30,
  6,
) as any as S.Schema<ListInvitationsRequest>;
export type __listOfInvitation = Invitation[];
const __listOfInvitation = /*@__PURE__*/ __L.at(__c30, 7);
export interface ListInvitationsResponse {
  invitations?: Invitation[];
  nextToken?: string;
}
const ListInvitationsResponse = /*@__PURE__*/ __L.at(
  __c31,
  0,
) as any as S.Schema<ListInvitationsResponse>;
export interface ListManagedDataIdentifiersRequest {
  nextToken?: string;
}
const ListManagedDataIdentifiersRequest = /*@__PURE__*/ __L.at(
  __c31,
  1,
) as any as S.Schema<ListManagedDataIdentifiersRequest>;
export interface ManagedDataIdentifierSummary {
  category?: SensitiveDataItemCategory;
  id?: string;
}
const ManagedDataIdentifierSummary = /*@__PURE__*/ __L.at(
  __c31,
  2,
) as any as S.Schema<ManagedDataIdentifierSummary>;
export type __listOfManagedDataIdentifierSummary = ManagedDataIdentifierSummary[];
const __listOfManagedDataIdentifierSummary = /*@__PURE__*/ __L.at(__c31, 3);
export interface ListManagedDataIdentifiersResponse {
  items?: ManagedDataIdentifierSummary[];
  nextToken?: string;
}
const ListManagedDataIdentifiersResponse = /*@__PURE__*/ __L.at(
  __c31,
  4,
) as any as S.Schema<ListManagedDataIdentifiersResponse>;
export interface ListMembersRequest {
  maxResults?: number;
  nextToken?: string;
  onlyAssociated?: string;
}
const ListMembersRequest = /*@__PURE__*/ __L.at(__c31, 5) as any as S.Schema<ListMembersRequest>;
export interface Member {
  accountId?: string;
  administratorAccountId?: string;
  arn?: string;
  email?: string;
  invitedAt?: Date;
  masterAccountId?: string;
  relationshipStatus?: RelationshipStatus;
  tags?: { [key: string]: string | undefined };
  updatedAt?: Date;
}
const Member = GetMemberResponse as any as S.Schema<Member>;
export type __listOfMember = Member[];
const __listOfMember = /*@__PURE__*/ __L.at(__c31, 6);
export interface ListMembersResponse {
  members?: Member[];
  nextToken?: string;
}
const ListMembersResponse = /*@__PURE__*/ __L.at(__c31, 7) as any as S.Schema<ListMembersResponse>;
export interface ListOrganizationAdminAccountsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListOrganizationAdminAccountsRequest = /*@__PURE__*/ __L.at(
  __c32,
  0,
) as any as S.Schema<ListOrganizationAdminAccountsRequest>;
export type AdminStatus = "ENABLED" | "DISABLING_IN_PROGRESS" | (string & {});
const AdminStatus = S.String;

export interface AdminAccount {
  accountId?: string;
  status?: AdminStatus;
}
const AdminAccount = /*@__PURE__*/ __L.at(__c32, 1) as any as S.Schema<AdminAccount>;
export type __listOfAdminAccount = AdminAccount[];
const __listOfAdminAccount = /*@__PURE__*/ __L.at(__c32, 2);
export interface ListOrganizationAdminAccountsResponse {
  adminAccounts?: AdminAccount[];
  nextToken?: string;
}
const ListOrganizationAdminAccountsResponse = /*@__PURE__*/ __L.at(
  __c32,
  3,
) as any as S.Schema<ListOrganizationAdminAccountsResponse>;
export interface ListResourceProfileArtifactsRequest {
  nextToken?: string;
  resourceArn?: string;
}
const ListResourceProfileArtifactsRequest = /*@__PURE__*/ __L.at(
  __c32,
  4,
) as any as S.Schema<ListResourceProfileArtifactsRequest>;
export interface ResourceProfileArtifact {
  arn?: string;
  classificationResultStatus?: string;
  sensitive?: boolean;
}
const ResourceProfileArtifact = /*@__PURE__*/ __L.at(
  __c32,
  5,
) as any as S.Schema<ResourceProfileArtifact>;
export type __listOfResourceProfileArtifact = ResourceProfileArtifact[];
const __listOfResourceProfileArtifact = /*@__PURE__*/ __L.at(__c32, 6);
export interface ListResourceProfileArtifactsResponse {
  artifacts?: (ResourceProfileArtifact & { arn: string; classificationResultStatus: string })[];
  nextToken?: string;
}
const ListResourceProfileArtifactsResponse = /*@__PURE__*/ __L.at(
  __c32,
  7,
) as any as S.Schema<ListResourceProfileArtifactsResponse>;
export interface ListResourceProfileDetectionsRequest {
  maxResults?: number;
  nextToken?: string;
  resourceArn?: string;
}
const ListResourceProfileDetectionsRequest = /*@__PURE__*/ __L.at(
  __c33,
  0,
) as any as S.Schema<ListResourceProfileDetectionsRequest>;
export type DataIdentifierType = "CUSTOM" | "MANAGED" | (string & {});
const DataIdentifierType = S.String;

export interface Detection {
  arn?: string;
  count?: number;
  id?: string;
  name?: string;
  suppressed?: boolean;
  type?: DataIdentifierType;
}
const Detection = /*@__PURE__*/ __L.at(__c33, 1) as any as S.Schema<Detection>;
export type __listOfDetection = Detection[];
const __listOfDetection = /*@__PURE__*/ __L.at(__c33, 2);
export interface ListResourceProfileDetectionsResponse {
  detections?: Detection[];
  nextToken?: string;
}
const ListResourceProfileDetectionsResponse = /*@__PURE__*/ __L.at(
  __c33,
  3,
) as any as S.Schema<ListResourceProfileDetectionsResponse>;
export interface ListSensitivityInspectionTemplatesRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListSensitivityInspectionTemplatesRequest = /*@__PURE__*/ __L.at(
  __c33,
  4,
) as any as S.Schema<ListSensitivityInspectionTemplatesRequest>;
export interface SensitivityInspectionTemplatesEntry {
  id?: string;
  name?: string;
}
const SensitivityInspectionTemplatesEntry =
  ClassificationScopeSummary as any as S.Schema<SensitivityInspectionTemplatesEntry>;
export type __listOfSensitivityInspectionTemplatesEntry = SensitivityInspectionTemplatesEntry[];
const __listOfSensitivityInspectionTemplatesEntry = /*@__PURE__*/ __L.at(__c33, 5);
export interface ListSensitivityInspectionTemplatesResponse {
  nextToken?: string;
  sensitivityInspectionTemplates?: SensitivityInspectionTemplatesEntry[];
}
const ListSensitivityInspectionTemplatesResponse = /*@__PURE__*/ __L.at(
  __c33,
  6,
) as any as S.Schema<ListSensitivityInspectionTemplatesResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c33,
  7,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c34,
  0,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface PutClassificationExportConfigurationRequest {
  configuration?: ClassificationExportConfiguration;
}
const PutClassificationExportConfigurationRequest = /*@__PURE__*/ __L.at(
  __c34,
  1,
) as any as S.Schema<PutClassificationExportConfigurationRequest>;
export interface PutClassificationExportConfigurationResponse {
  configuration?: ClassificationExportConfiguration & {
    s3Destination: S3Destination & { bucketName: string; kmsKeyArn: string };
  };
}
const PutClassificationExportConfigurationResponse =
  GetClassificationExportConfigurationResponse as any as S.Schema<PutClassificationExportConfigurationResponse>;
export interface PutFindingsPublicationConfigurationRequest {
  clientToken?: string;
  securityHubConfiguration?: SecurityHubConfiguration;
}
const PutFindingsPublicationConfigurationRequest = /*@__PURE__*/ __L.at(
  __c34,
  2,
) as any as S.Schema<PutFindingsPublicationConfigurationRequest>;
export interface PutFindingsPublicationConfigurationResponse {}
const PutFindingsPublicationConfigurationResponse =
  DeleteCustomDataIdentifierResponse as any as S.Schema<PutFindingsPublicationConfigurationResponse>;
export type SearchResourcesComparator = "EQ" | "NE" | (string & {});
const SearchResourcesComparator = S.String;

export type SearchResourcesSimpleCriterionKey =
  | "ACCOUNT_ID"
  | "S3_BUCKET_NAME"
  | "S3_BUCKET_EFFECTIVE_PERMISSION"
  | "S3_BUCKET_SHARED_ACCESS"
  | "AUTOMATED_DISCOVERY_MONITORING_STATUS"
  | (string & {});
const SearchResourcesSimpleCriterionKey = S.String;

export interface SearchResourcesSimpleCriterion {
  comparator?: SearchResourcesComparator;
  key?: SearchResourcesSimpleCriterionKey;
  values?: string[];
}
const SearchResourcesSimpleCriterion = /*@__PURE__*/ __L.at(
  __c34,
  3,
) as any as S.Schema<SearchResourcesSimpleCriterion>;
export interface SearchResourcesTagCriterionPair {
  key?: string;
  value?: string;
}
const SearchResourcesTagCriterionPair = /*@__PURE__*/ __L.at(
  __c34,
  4,
) as any as S.Schema<SearchResourcesTagCriterionPair>;
export type __listOfSearchResourcesTagCriterionPair = SearchResourcesTagCriterionPair[];
const __listOfSearchResourcesTagCriterionPair = /*@__PURE__*/ __L.at(__c34, 5);
export interface SearchResourcesTagCriterion {
  comparator?: SearchResourcesComparator;
  tagValues?: SearchResourcesTagCriterionPair[];
}
const SearchResourcesTagCriterion = /*@__PURE__*/ __L.at(
  __c34,
  6,
) as any as S.Schema<SearchResourcesTagCriterion>;
export interface SearchResourcesCriteria {
  simpleCriterion?: SearchResourcesSimpleCriterion;
  tagCriterion?: SearchResourcesTagCriterion;
}
const SearchResourcesCriteria = /*@__PURE__*/ __L.at(
  __c34,
  7,
) as any as S.Schema<SearchResourcesCriteria>;
export type __listOfSearchResourcesCriteria = SearchResourcesCriteria[];
const __listOfSearchResourcesCriteria = /*@__PURE__*/ __L.at(__c35, 0);
export interface SearchResourcesCriteriaBlock {
  and?: SearchResourcesCriteria[];
}
const SearchResourcesCriteriaBlock = /*@__PURE__*/ __L.at(
  __c35,
  1,
) as any as S.Schema<SearchResourcesCriteriaBlock>;
export interface SearchResourcesBucketCriteria {
  excludes?: SearchResourcesCriteriaBlock;
  includes?: SearchResourcesCriteriaBlock;
}
const SearchResourcesBucketCriteria = /*@__PURE__*/ __L.at(
  __c35,
  2,
) as any as S.Schema<SearchResourcesBucketCriteria>;
export type SearchResourcesSortAttributeName =
  | "ACCOUNT_ID"
  | "RESOURCE_NAME"
  | "S3_CLASSIFIABLE_OBJECT_COUNT"
  | "S3_CLASSIFIABLE_SIZE_IN_BYTES"
  | (string & {});
export interface SearchResourcesSortCriteria {
  attributeName?: SearchResourcesSortAttributeName;
  orderBy?: OrderBy;
}
const SearchResourcesSortCriteria =
  FindingStatisticsSortCriteria as any as S.Schema<SearchResourcesSortCriteria>;
export interface SearchResourcesRequest {
  bucketCriteria?: SearchResourcesBucketCriteria;
  maxResults?: number;
  nextToken?: string;
  sortCriteria?: SearchResourcesSortCriteria;
}
const SearchResourcesRequest = /*@__PURE__*/ __L.at(
  __c35,
  3,
) as any as S.Schema<SearchResourcesRequest>;
export interface MatchingBucket {
  accountId?: string;
  automatedDiscoveryMonitoringStatus?: AutomatedDiscoveryMonitoringStatus;
  bucketName?: string;
  classifiableObjectCount?: number;
  classifiableSizeInBytes?: number;
  errorCode?: BucketMetadataErrorCode;
  errorMessage?: string;
  jobDetails?: JobDetails;
  lastAutomatedDiscoveryTime?: Date;
  objectCount?: number;
  objectCountByEncryptionType?: ObjectCountByEncryptionType;
  sensitivityScore?: number;
  sizeInBytes?: number;
  sizeInBytesCompressed?: number;
  unclassifiableObjectCount?: ObjectLevelStatistics;
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
}
const MatchingBucket = /*@__PURE__*/ __L.at(__c35, 4) as any as S.Schema<MatchingBucket>;
export interface MatchingResource {
  matchingBucket?: MatchingBucket;
}
const MatchingResource = /*@__PURE__*/ __L.at(__c35, 5) as any as S.Schema<MatchingResource>;
export type __listOfMatchingResource = MatchingResource[];
const __listOfMatchingResource = /*@__PURE__*/ __L.at(__c35, 6);
export interface SearchResourcesResponse {
  matchingResources?: MatchingResource[];
  nextToken?: string;
}
const SearchResourcesResponse = /*@__PURE__*/ __L.at(
  __c35,
  7,
) as any as S.Schema<SearchResourcesResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags?: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c36, 0) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = AcceptInvitationResponse as any as S.Schema<TagResourceResponse>;
export interface TestCustomDataIdentifierRequest {
  ignoreWords?: string[];
  keywords?: string[];
  maximumMatchDistance?: number;
  regex?: string;
  sampleText?: string;
}
const TestCustomDataIdentifierRequest = /*@__PURE__*/ __L.at(
  __c36,
  1,
) as any as S.Schema<TestCustomDataIdentifierRequest>;
export interface TestCustomDataIdentifierResponse {
  matchCount?: number;
}
const TestCustomDataIdentifierResponse = /*@__PURE__*/ __L.at(
  __c36,
  2,
) as any as S.Schema<TestCustomDataIdentifierResponse>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys?: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c36,
  3,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = AcceptInvitationResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAllowListRequest {
  criteria?: AllowListCriteria;
  description?: string;
  id: string;
  name?: string;
}
const UpdateAllowListRequest = /*@__PURE__*/ __L.at(
  __c36,
  4,
) as any as S.Schema<UpdateAllowListRequest>;
export interface UpdateAllowListResponse {
  arn?: string;
  id?: string;
}
const UpdateAllowListResponse = CreateAllowListResponse as any as S.Schema<UpdateAllowListResponse>;
export interface UpdateAutomatedDiscoveryConfigurationRequest {
  autoEnableOrganizationMembers?: AutoEnableMode;
  status?: AutomatedDiscoveryStatus;
}
const UpdateAutomatedDiscoveryConfigurationRequest = /*@__PURE__*/ __L.at(
  __c36,
  5,
) as any as S.Schema<UpdateAutomatedDiscoveryConfigurationRequest>;
export interface UpdateAutomatedDiscoveryConfigurationResponse {}
const UpdateAutomatedDiscoveryConfigurationResponse =
  DeleteCustomDataIdentifierResponse as any as S.Schema<UpdateAutomatedDiscoveryConfigurationResponse>;
export interface UpdateClassificationJobRequest {
  jobId: string;
  jobStatus?: JobStatus;
}
const UpdateClassificationJobRequest = /*@__PURE__*/ __L.at(
  __c36,
  6,
) as any as S.Schema<UpdateClassificationJobRequest>;
export interface UpdateClassificationJobResponse {}
const UpdateClassificationJobResponse = /*@__PURE__*/ __L.at(
  __c36,
  7,
) as any as S.Schema<UpdateClassificationJobResponse>;
export type ClassificationScopeUpdateOperation = "ADD" | "REPLACE" | "REMOVE" | (string & {});
const ClassificationScopeUpdateOperation = S.String;

export interface S3ClassificationScopeExclusionUpdate {
  bucketNames?: string[];
  operation?: ClassificationScopeUpdateOperation;
}
const S3ClassificationScopeExclusionUpdate = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<S3ClassificationScopeExclusionUpdate>;
export interface S3ClassificationScopeUpdate {
  excludes?: S3ClassificationScopeExclusionUpdate;
}
const S3ClassificationScopeUpdate = /*@__PURE__*/ __L.at(
  __c37,
  1,
) as any as S.Schema<S3ClassificationScopeUpdate>;
export interface UpdateClassificationScopeRequest {
  id: string;
  s3?: S3ClassificationScopeUpdate;
}
const UpdateClassificationScopeRequest = /*@__PURE__*/ __L.at(
  __c37,
  2,
) as any as S.Schema<UpdateClassificationScopeRequest>;
export interface UpdateClassificationScopeResponse {}
const UpdateClassificationScopeResponse =
  DeleteCustomDataIdentifierResponse as any as S.Schema<UpdateClassificationScopeResponse>;
export interface UpdateFindingsFilterRequest {
  action?: FindingsFilterAction;
  clientToken?: string;
  description?: string;
  findingCriteria?: FindingCriteria;
  id: string;
  name?: string;
  position?: number;
}
const UpdateFindingsFilterRequest = /*@__PURE__*/ __L.at(
  __c37,
  3,
) as any as S.Schema<UpdateFindingsFilterRequest>;
export interface UpdateFindingsFilterResponse {
  arn?: string;
  id?: string;
}
const UpdateFindingsFilterResponse =
  CreateFindingsFilterResponse as any as S.Schema<UpdateFindingsFilterResponse>;
export interface UpdateMacieSessionRequest {
  findingPublishingFrequency?: FindingPublishingFrequency;
  status?: MacieStatus;
}
const UpdateMacieSessionRequest = /*@__PURE__*/ __L.at(
  __c37,
  4,
) as any as S.Schema<UpdateMacieSessionRequest>;
export interface UpdateMacieSessionResponse {}
const UpdateMacieSessionResponse =
  AcceptInvitationResponse as any as S.Schema<UpdateMacieSessionResponse>;
export interface UpdateMemberSessionRequest {
  id: string;
  status?: MacieStatus;
}
const UpdateMemberSessionRequest = /*@__PURE__*/ __L.at(
  __c37,
  5,
) as any as S.Schema<UpdateMemberSessionRequest>;
export interface UpdateMemberSessionResponse {}
const UpdateMemberSessionResponse =
  AcceptInvitationResponse as any as S.Schema<UpdateMemberSessionResponse>;
export interface UpdateOrganizationConfigurationRequest {
  autoEnable?: boolean;
}
const UpdateOrganizationConfigurationRequest = /*@__PURE__*/ __L.at(
  __c37,
  6,
) as any as S.Schema<UpdateOrganizationConfigurationRequest>;
export interface UpdateOrganizationConfigurationResponse {}
const UpdateOrganizationConfigurationResponse =
  DeleteCustomDataIdentifierResponse as any as S.Schema<UpdateOrganizationConfigurationResponse>;
export interface UpdateResourceProfileRequest {
  resourceArn?: string;
  sensitivityScoreOverride?: number;
}
const UpdateResourceProfileRequest = /*@__PURE__*/ __L.at(
  __c37,
  7,
) as any as S.Schema<UpdateResourceProfileRequest>;
export interface UpdateResourceProfileResponse {}
const UpdateResourceProfileResponse =
  AcceptInvitationResponse as any as S.Schema<UpdateResourceProfileResponse>;
export interface SuppressDataIdentifier {
  id?: string;
  type?: DataIdentifierType;
}
const SuppressDataIdentifier = /*@__PURE__*/ __L.at(
  __c38,
  0,
) as any as S.Schema<SuppressDataIdentifier>;
export type __listOfSuppressDataIdentifier = SuppressDataIdentifier[];
const __listOfSuppressDataIdentifier = /*@__PURE__*/ __L.at(__c38, 1);
export interface UpdateResourceProfileDetectionsRequest {
  resourceArn?: string;
  suppressDataIdentifiers?: SuppressDataIdentifier[];
}
const UpdateResourceProfileDetectionsRequest = /*@__PURE__*/ __L.at(
  __c38,
  2,
) as any as S.Schema<UpdateResourceProfileDetectionsRequest>;
export interface UpdateResourceProfileDetectionsResponse {}
const UpdateResourceProfileDetectionsResponse =
  DeleteCustomDataIdentifierResponse as any as S.Schema<UpdateResourceProfileDetectionsResponse>;
export interface UpdateRetrievalConfiguration {
  retrievalMode?: RetrievalMode;
  roleName?: string;
}
const UpdateRetrievalConfiguration = /*@__PURE__*/ __L.at(
  __c38,
  3,
) as any as S.Schema<UpdateRetrievalConfiguration>;
export interface UpdateRevealConfigurationRequest {
  configuration?: RevealConfiguration;
  retrievalConfiguration?: UpdateRetrievalConfiguration;
}
const UpdateRevealConfigurationRequest = /*@__PURE__*/ __L.at(
  __c38,
  4,
) as any as S.Schema<UpdateRevealConfigurationRequest>;
export interface UpdateRevealConfigurationResponse {
  configuration?: RevealConfiguration & { status: RevealStatus };
  retrievalConfiguration?: RetrievalConfiguration & { retrievalMode: RetrievalMode };
}
const UpdateRevealConfigurationResponse =
  GetRevealConfigurationResponse as any as S.Schema<UpdateRevealConfigurationResponse>;
export interface UpdateSensitivityInspectionTemplateRequest {
  description?: string;
  excludes?: SensitivityInspectionTemplateExcludes;
  id: string;
  includes?: SensitivityInspectionTemplateIncludes;
}
const UpdateSensitivityInspectionTemplateRequest = /*@__PURE__*/ __L.at(
  __c38,
  5,
) as any as S.Schema<UpdateSensitivityInspectionTemplateRequest>;
export interface UpdateSensitivityInspectionTemplateResponse {}
const UpdateSensitivityInspectionTemplateResponse =
  DeleteCustomDataIdentifierResponse as any as S.Schema<UpdateSensitivityInspectionTemplateResponse>;
export type AcceptInvitationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Accepts an Amazon Macie membership invitation that was received from a specific account.
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
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptInvitation",
}));

export type BatchGetCustomDataIdentifiersError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about one or more custom data identifiers.
 */
export const batchGetCustomDataIdentifiers: API.OperationMethod<
  BatchGetCustomDataIdentifiersRequest,
  BatchGetCustomDataIdentifiersResponse,
  BatchGetCustomDataIdentifiersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetCustomDataIdentifiersRequest,
  output: BatchGetCustomDataIdentifiersResponse,
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
  operationName: "BatchGetCustomDataIdentifiers",
}));

export type BatchUpdateAutomatedDiscoveryAccountsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Changes the status of automated sensitive data discovery for one or more accounts.
 */
export const batchUpdateAutomatedDiscoveryAccounts: API.OperationMethod<
  BatchUpdateAutomatedDiscoveryAccountsRequest,
  BatchUpdateAutomatedDiscoveryAccountsResponse,
  BatchUpdateAutomatedDiscoveryAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateAutomatedDiscoveryAccountsRequest,
  output: BatchUpdateAutomatedDiscoveryAccountsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateAutomatedDiscoveryAccounts",
}));

export type CreateAllowListError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | MacieNotEnabled
  | CommonErrors;
/**
 * Creates and defines the settings for an allow list.
 */
export const createAllowList: API.OperationMethod<
  CreateAllowListRequest,
  CreateAllowListResponse,
  CreateAllowListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAllowListRequest,
  output: CreateAllowListResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    MacieNotEnabled,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAllowList",
}));

export type CreateClassificationJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | MacieNotEnabled
  | CommonErrors;
/**
 * Creates and defines the settings for a classification job.
 */
export const createClassificationJob: API.OperationMethod<
  CreateClassificationJobRequest,
  CreateClassificationJobResponse,
  CreateClassificationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateClassificationJobRequest,
  output: CreateClassificationJobResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    MacieNotEnabled,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateClassificationJob",
}));

export type CreateCustomDataIdentifierError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | MacieNotEnabled
  | CommonErrors;
/**
 * Creates and defines the criteria and other settings for a custom data identifier.
 */
export const createCustomDataIdentifier: API.OperationMethod<
  CreateCustomDataIdentifierRequest,
  CreateCustomDataIdentifierResponse,
  CreateCustomDataIdentifierError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCustomDataIdentifierRequest,
  output: CreateCustomDataIdentifierResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    MacieNotEnabled,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCustomDataIdentifier",
}));

export type CreateFindingsFilterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | MacieNotEnabled
  | CommonErrors;
/**
 * Creates and defines the criteria and other settings for a findings filter.
 */
export const createFindingsFilter: API.OperationMethod<
  CreateFindingsFilterRequest,
  CreateFindingsFilterResponse,
  CreateFindingsFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFindingsFilterRequest,
  output: CreateFindingsFilterResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    MacieNotEnabled,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFindingsFilter",
}));

export type CreateInvitationsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends an Amazon Macie membership invitation to one or more accounts.
 */
export const createInvitations: API.OperationMethod<
  CreateInvitationsRequest,
  CreateInvitationsResponse,
  CreateInvitationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateInvitationsRequest,
  output: CreateInvitationsResponse,
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
  operationName: "CreateInvitations",
}));

export type CreateMemberError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates an account with an Amazon Macie administrator account.
 */
export const createMember: API.OperationMethod<
  CreateMemberRequest,
  CreateMemberResponse,
  CreateMemberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMemberRequest,
  output: CreateMemberResponse,
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
  operationName: "CreateMember",
}));

export type CreateSampleFindingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates sample findings.
 */
export const createSampleFindings: API.OperationMethod<
  CreateSampleFindingsRequest,
  CreateSampleFindingsResponse,
  CreateSampleFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSampleFindingsRequest,
  output: CreateSampleFindingsResponse,
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
  operationName: "CreateSampleFindings",
}));

export type DeclineInvitationsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Declines Amazon Macie membership invitations that were received from specific accounts.
 */
export const declineInvitations: API.OperationMethod<
  DeclineInvitationsRequest,
  DeclineInvitationsResponse,
  DeclineInvitationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeclineInvitationsRequest,
  output: DeclineInvitationsResponse,
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
  operationName: "DeclineInvitations",
}));

export type DeleteAllowListError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an allow list.
 */
export const deleteAllowList: API.OperationMethod<
  DeleteAllowListRequest,
  DeleteAllowListResponse,
  DeleteAllowListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAllowListRequest,
  output: DeleteAllowListResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAllowList",
}));

export type DeleteCustomDataIdentifierError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Soft deletes a custom data identifier.
 */
export const deleteCustomDataIdentifier: API.OperationMethod<
  DeleteCustomDataIdentifierRequest,
  DeleteCustomDataIdentifierResponse,
  DeleteCustomDataIdentifierError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCustomDataIdentifierRequest,
  output: DeleteCustomDataIdentifierResponse,
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
  operationName: "DeleteCustomDataIdentifier",
}));

export type DeleteFindingsFilterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a findings filter.
 */
export const deleteFindingsFilter: API.OperationMethod<
  DeleteFindingsFilterRequest,
  DeleteFindingsFilterResponse,
  DeleteFindingsFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFindingsFilterRequest,
  output: DeleteFindingsFilterResponse,
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
  operationName: "DeleteFindingsFilter",
}));

export type DeleteInvitationsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes Amazon Macie membership invitations that were received from specific accounts.
 */
export const deleteInvitations: API.OperationMethod<
  DeleteInvitationsRequest,
  DeleteInvitationsResponse,
  DeleteInvitationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteInvitationsRequest,
  output: DeleteInvitationsResponse,
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
  operationName: "DeleteInvitations",
}));

export type DeleteMemberError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the association between an Amazon Macie administrator account and an account.
 */
export const deleteMember: API.OperationMethod<
  DeleteMemberRequest,
  DeleteMemberResponse,
  DeleteMemberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMemberRequest,
  output: DeleteMemberResponse,
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
  operationName: "DeleteMember",
}));

export type DescribeBucketsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.
 */
export const describeBuckets: API.PaginatedOperationMethod<
  DescribeBucketsRequest,
  DescribeBucketsResponse,
  DescribeBucketsError,
  Credentials | HttpClient.HttpClient,
  BucketMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeBucketsRequest,
  output: DescribeBucketsResponse,
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
  operationName: "DescribeBuckets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "buckets",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeClassificationJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the status and settings for a classification job.
 */
export const describeClassificationJob: API.OperationMethod<
  DescribeClassificationJobRequest,
  DescribeClassificationJobResponse,
  DescribeClassificationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeClassificationJobRequest,
  output: DescribeClassificationJobResponse,
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
  operationName: "DescribeClassificationJob",
}));

export type DescribeOrganizationConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the Amazon Macie configuration settings for an organization in Organizations.
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
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOrganizationConfiguration",
}));

export type DisableMacieError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disables Amazon Macie and deletes all settings and resources for a Macie account.
 */
export const disableMacie: API.OperationMethod<
  DisableMacieRequest,
  DisableMacieResponse,
  DisableMacieError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableMacieRequest,
  output: DisableMacieResponse,
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
  operationName: "DisableMacie",
}));

export type DisableOrganizationAdminAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.
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
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableOrganizationAdminAccount",
}));

export type DisassociateFromAdministratorAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a member account from its Amazon Macie administrator account.
 */
export const disassociateFromAdministratorAccount: API.OperationMethod<
  DisassociateFromAdministratorAccountRequest,
  DisassociateFromAdministratorAccountResponse,
  DisassociateFromAdministratorAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateFromAdministratorAccountRequest,
  output: DisassociateFromAdministratorAccountResponse,
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
  operationName: "DisassociateFromAdministratorAccount",
}));

export type DisassociateFromMasterAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * (Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the DisassociateFromAdministratorAccount operation.
 */
export const disassociateFromMasterAccount: API.OperationMethod<
  DisassociateFromMasterAccountRequest,
  DisassociateFromMasterAccountResponse,
  DisassociateFromMasterAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateFromMasterAccountRequest,
  output: DisassociateFromMasterAccountResponse,
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
  operationName: "DisassociateFromMasterAccount",
}));

export type DisassociateMemberError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates an Amazon Macie administrator account from a member account.
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
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateMember",
}));

export type EnableMacieError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables Amazon Macie and specifies the configuration settings for a Macie account.
 */
export const enableMacie: API.OperationMethod<
  EnableMacieRequest,
  EnableMacieResponse,
  EnableMacieError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableMacieRequest,
  output: EnableMacieResponse,
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
  operationName: "EnableMacie",
}));

export type EnableOrganizationAdminAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.
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
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableOrganizationAdminAccount",
}));

export type GetAdministratorAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the Amazon Macie administrator account for an account.
 */
export const getAdministratorAccount: API.OperationMethod<
  GetAdministratorAccountRequest,
  GetAdministratorAccountResponse,
  GetAdministratorAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAdministratorAccountRequest,
  output: GetAdministratorAccountResponse,
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
  operationName: "GetAdministratorAccount",
}));

export type GetAllowListError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the settings and status of an allow list.
 */
export const getAllowList: API.OperationMethod<
  GetAllowListRequest,
  GetAllowListResponse,
  GetAllowListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAllowListRequest,
  output: GetAllowListResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAllowList",
}));

export type GetAutomatedDiscoveryConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the configuration settings and status of automated sensitive data discovery for an organization or standalone account.
 */
export const getAutomatedDiscoveryConfiguration: API.OperationMethod<
  GetAutomatedDiscoveryConfigurationRequest,
  GetAutomatedDiscoveryConfigurationResponse,
  GetAutomatedDiscoveryConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAutomatedDiscoveryConfigurationRequest,
  output: GetAutomatedDiscoveryConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAutomatedDiscoveryConfiguration",
}));

export type GetBucketStatisticsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.
 */
export const getBucketStatistics: API.OperationMethod<
  GetBucketStatisticsRequest,
  GetBucketStatisticsResponse,
  GetBucketStatisticsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBucketStatisticsRequest,
  output: GetBucketStatisticsResponse,
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
  operationName: "GetBucketStatistics",
}));

export type GetClassificationExportConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the configuration settings for storing data classification results.
 */
export const getClassificationExportConfiguration: API.OperationMethod<
  GetClassificationExportConfigurationRequest,
  GetClassificationExportConfigurationResponse,
  GetClassificationExportConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetClassificationExportConfigurationRequest,
  output: GetClassificationExportConfigurationResponse,
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
  operationName: "GetClassificationExportConfiguration",
}));

export type GetClassificationScopeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the classification scope settings for an account.
 */
export const getClassificationScope: API.OperationMethod<
  GetClassificationScopeRequest,
  GetClassificationScopeResponse,
  GetClassificationScopeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetClassificationScopeRequest,
  output: GetClassificationScopeResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetClassificationScope",
}));

export type GetCustomDataIdentifierError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the criteria and other settings for a custom data identifier.
 */
export const getCustomDataIdentifier: API.OperationMethod<
  GetCustomDataIdentifierRequest,
  GetCustomDataIdentifierResponse,
  GetCustomDataIdentifierError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCustomDataIdentifierRequest,
  output: GetCustomDataIdentifierResponse,
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
  operationName: "GetCustomDataIdentifier",
}));

export type GetFindingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of one or more findings.
 */
export const getFindings: API.OperationMethod<
  GetFindingsRequest,
  GetFindingsResponse,
  GetFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFindingsRequest,
  output: GetFindingsResponse,
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
  operationName: "GetFindings",
}));

export type GetFindingsFilterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the criteria and other settings for a findings filter.
 */
export const getFindingsFilter: API.OperationMethod<
  GetFindingsFilterRequest,
  GetFindingsFilterResponse,
  GetFindingsFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFindingsFilterRequest,
  output: GetFindingsFilterResponse,
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
  operationName: "GetFindingsFilter",
}));

export type GetFindingsPublicationConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the configuration settings for publishing findings to Security Hub.
 */
export const getFindingsPublicationConfiguration: API.OperationMethod<
  GetFindingsPublicationConfigurationRequest,
  GetFindingsPublicationConfigurationResponse,
  GetFindingsPublicationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFindingsPublicationConfigurationRequest,
  output: GetFindingsPublicationConfigurationResponse,
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
  operationName: "GetFindingsPublicationConfiguration",
}));

export type GetFindingStatisticsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves (queries) aggregated statistical data about findings.
 */
export const getFindingStatistics: API.OperationMethod<
  GetFindingStatisticsRequest,
  GetFindingStatisticsResponse,
  GetFindingStatisticsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFindingStatisticsRequest,
  output: GetFindingStatisticsResponse,
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
  operationName: "GetFindingStatistics",
}));

export type GetInvitationsCountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the count of Amazon Macie membership invitations that were received by an account.
 */
export const getInvitationsCount: API.OperationMethod<
  GetInvitationsCountRequest,
  GetInvitationsCountResponse,
  GetInvitationsCountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetInvitationsCountRequest,
  output: GetInvitationsCountResponse,
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
  operationName: "GetInvitationsCount",
}));

export type GetMacieSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the status and configuration settings for an Amazon Macie account.
 */
export const getMacieSession: API.OperationMethod<
  GetMacieSessionRequest,
  GetMacieSessionResponse,
  GetMacieSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMacieSessionRequest,
  output: GetMacieSessionResponse,
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
  operationName: "GetMacieSession",
}));

export type GetMasterAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * (Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the GetAdministratorAccount operation.
 */
export const getMasterAccount: API.OperationMethod<
  GetMasterAccountRequest,
  GetMasterAccountResponse,
  GetMasterAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMasterAccountRequest,
  output: GetMasterAccountResponse,
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
  operationName: "GetMasterAccount",
}));

export type GetMemberError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an account that's associated with an Amazon Macie administrator account.
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
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMember",
}));

export type GetResourceProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.
 */
export const getResourceProfile: API.OperationMethod<
  GetResourceProfileRequest,
  GetResourceProfileResponse,
  GetResourceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResourceProfileRequest,
  output: GetResourceProfileResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourceProfile",
}));

export type GetRevealConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
 */
export const getRevealConfiguration: API.OperationMethod<
  GetRevealConfigurationRequest,
  GetRevealConfigurationResponse,
  GetRevealConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRevealConfigurationRequest,
  output: GetRevealConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRevealConfiguration",
}));

export type GetSensitiveDataOccurrencesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnprocessableEntityException
  | CommonErrors;
/**
 * Retrieves occurrences of sensitive data reported by a finding.
 */
export const getSensitiveDataOccurrences: API.OperationMethod<
  GetSensitiveDataOccurrencesRequest,
  GetSensitiveDataOccurrencesResponse,
  GetSensitiveDataOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSensitiveDataOccurrencesRequest,
  output: GetSensitiveDataOccurrencesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnprocessableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSensitiveDataOccurrences",
}));

export type GetSensitiveDataOccurrencesAvailabilityError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Checks whether occurrences of sensitive data can be retrieved for a finding.
 */
export const getSensitiveDataOccurrencesAvailability: API.OperationMethod<
  GetSensitiveDataOccurrencesAvailabilityRequest,
  GetSensitiveDataOccurrencesAvailabilityResponse,
  GetSensitiveDataOccurrencesAvailabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSensitiveDataOccurrencesAvailabilityRequest,
  output: GetSensitiveDataOccurrencesAvailabilityResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSensitiveDataOccurrencesAvailability",
}));

export type GetSensitivityInspectionTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the settings for the sensitivity inspection template for an account.
 */
export const getSensitivityInspectionTemplate: API.OperationMethod<
  GetSensitivityInspectionTemplateRequest,
  GetSensitivityInspectionTemplateResponse,
  GetSensitivityInspectionTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSensitivityInspectionTemplateRequest,
  output: GetSensitivityInspectionTemplateResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSensitivityInspectionTemplate",
}));

export type GetUsageStatisticsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves (queries) quotas and aggregated usage data for one or more accounts.
 */
export const getUsageStatistics: API.PaginatedOperationMethod<
  GetUsageStatisticsRequest,
  GetUsageStatisticsResponse,
  GetUsageStatisticsError,
  Credentials | HttpClient.HttpClient,
  UsageRecord
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetUsageStatisticsRequest,
  output: GetUsageStatisticsResponse,
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
  operationName: "GetUsageStatistics",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "records",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetUsageTotalsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves (queries) aggregated usage data for an account.
 */
export const getUsageTotals: API.OperationMethod<
  GetUsageTotalsRequest,
  GetUsageTotalsResponse,
  GetUsageTotalsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUsageTotalsRequest,
  output: GetUsageTotalsResponse,
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
  operationName: "GetUsageTotals",
}));

export type ListAllowListsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a subset of information about all the allow lists for an account.
 */
export const listAllowLists: API.PaginatedOperationMethod<
  ListAllowListsRequest,
  ListAllowListsResponse,
  ListAllowListsError,
  Credentials | HttpClient.HttpClient,
  AllowListSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAllowListsRequest,
  output: ListAllowListsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAllowLists",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "allowLists",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAutomatedDiscoveryAccountsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the status of automated sensitive data discovery for one or more accounts.
 */
export const listAutomatedDiscoveryAccounts: API.PaginatedOperationMethod<
  ListAutomatedDiscoveryAccountsRequest,
  ListAutomatedDiscoveryAccountsResponse,
  ListAutomatedDiscoveryAccountsError,
  Credentials | HttpClient.HttpClient,
  AutomatedDiscoveryAccount
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAutomatedDiscoveryAccountsRequest,
  output: ListAutomatedDiscoveryAccountsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAutomatedDiscoveryAccounts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListClassificationJobsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a subset of information about one or more classification jobs.
 */
export const listClassificationJobs: API.PaginatedOperationMethod<
  ListClassificationJobsRequest,
  ListClassificationJobsResponse,
  ListClassificationJobsError,
  Credentials | HttpClient.HttpClient,
  JobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListClassificationJobsRequest,
  output: ListClassificationJobsResponse,
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
  operationName: "ListClassificationJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListClassificationScopesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a subset of information about the classification scope for an account.
 */
export const listClassificationScopes: API.PaginatedOperationMethod<
  ListClassificationScopesRequest,
  ListClassificationScopesResponse,
  ListClassificationScopesError,
  Credentials | HttpClient.HttpClient,
  ClassificationScopeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListClassificationScopesRequest,
  output: ListClassificationScopesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListClassificationScopes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "classificationScopes",
  } as const,
})) as any;

export type ListCustomDataIdentifiersError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a subset of information about the custom data identifiers for an account.
 */
export const listCustomDataIdentifiers: API.PaginatedOperationMethod<
  ListCustomDataIdentifiersRequest,
  ListCustomDataIdentifiersResponse,
  ListCustomDataIdentifiersError,
  Credentials | HttpClient.HttpClient,
  CustomDataIdentifierSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCustomDataIdentifiersRequest,
  output: ListCustomDataIdentifiersResponse,
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
  operationName: "ListCustomDataIdentifiers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFindingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a subset of information about one or more findings.
 */
export const listFindings: API.PaginatedOperationMethod<
  ListFindingsRequest,
  ListFindingsResponse,
  ListFindingsError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFindingsRequest,
  output: ListFindingsResponse,
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
  operationName: "ListFindings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "findingIds",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFindingsFiltersError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a subset of information about all the findings filters for an account.
 */
export const listFindingsFilters: API.PaginatedOperationMethod<
  ListFindingsFiltersRequest,
  ListFindingsFiltersResponse,
  ListFindingsFiltersError,
  Credentials | HttpClient.HttpClient,
  FindingsFilterListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFindingsFiltersRequest,
  output: ListFindingsFiltersResponse,
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
  operationName: "ListFindingsFilters",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "findingsFilterListItems",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListInvitationsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about Amazon Macie membership invitations that were received by an account.
 */
export const listInvitations: API.PaginatedOperationMethod<
  ListInvitationsRequest,
  ListInvitationsResponse,
  ListInvitationsError,
  Credentials | HttpClient.HttpClient,
  Invitation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListInvitationsRequest,
  output: ListInvitationsResponse,
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
  operationName: "ListInvitations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "invitations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListManagedDataIdentifiersError = CommonErrors;
/**
 * Retrieves information about all the managed data identifiers that Amazon Macie currently provides.
 */
export const listManagedDataIdentifiers: API.PaginatedOperationMethod<
  ListManagedDataIdentifiersRequest,
  ListManagedDataIdentifiersResponse,
  ListManagedDataIdentifiersError,
  Credentials | HttpClient.HttpClient,
  ManagedDataIdentifierSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListManagedDataIdentifiersRequest,
  output: ListManagedDataIdentifiersResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedDataIdentifiers",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "items" } as const,
})) as any;

export type ListMembersError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the accounts that are associated with an Amazon Macie administrator account.
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
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
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

export type ListOrganizationAdminAccountsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.
 */
export const listOrganizationAdminAccounts: API.PaginatedOperationMethod<
  ListOrganizationAdminAccountsRequest,
  ListOrganizationAdminAccountsResponse,
  ListOrganizationAdminAccountsError,
  Credentials | HttpClient.HttpClient,
  AdminAccount
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationAdminAccountsRequest,
  output: ListOrganizationAdminAccountsResponse,
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
  operationName: "ListOrganizationAdminAccounts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "adminAccounts",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListResourceProfileArtifactsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about objects that Amazon Macie selected from an S3 bucket for automated sensitive data discovery.
 */
export const listResourceProfileArtifacts: API.PaginatedOperationMethod<
  ListResourceProfileArtifactsRequest,
  ListResourceProfileArtifactsResponse,
  ListResourceProfileArtifactsError,
  Credentials | HttpClient.HttpClient,
  ResourceProfileArtifact
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListResourceProfileArtifactsRequest,
  output: ListResourceProfileArtifactsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceProfileArtifacts",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "artifacts" } as const,
})) as any;

export type ListResourceProfileDetectionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.
 */
export const listResourceProfileDetections: API.PaginatedOperationMethod<
  ListResourceProfileDetectionsRequest,
  ListResourceProfileDetectionsResponse,
  ListResourceProfileDetectionsError,
  Credentials | HttpClient.HttpClient,
  Detection
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListResourceProfileDetectionsRequest,
  output: ListResourceProfileDetectionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceProfileDetections",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "detections",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSensitivityInspectionTemplatesError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a subset of information about the sensitivity inspection template for an account.
 */
export const listSensitivityInspectionTemplates: API.PaginatedOperationMethod<
  ListSensitivityInspectionTemplatesRequest,
  ListSensitivityInspectionTemplatesResponse,
  ListSensitivityInspectionTemplatesError,
  Credentials | HttpClient.HttpClient,
  SensitivityInspectionTemplatesEntry
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSensitivityInspectionTemplatesRequest,
  output: ListSensitivityInspectionTemplatesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSensitivityInspectionTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "sensitivityInspectionTemplates",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError = CommonErrors;
/**
 * Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutClassificationExportConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds or updates the configuration settings for storing data classification results.
 */
export const putClassificationExportConfiguration: API.OperationMethod<
  PutClassificationExportConfigurationRequest,
  PutClassificationExportConfigurationResponse,
  PutClassificationExportConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutClassificationExportConfigurationRequest,
  output: PutClassificationExportConfigurationResponse,
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
  operationName: "PutClassificationExportConfiguration",
}));

export type PutFindingsPublicationConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration settings for publishing findings to Security Hub.
 */
export const putFindingsPublicationConfiguration: API.OperationMethod<
  PutFindingsPublicationConfigurationRequest,
  PutFindingsPublicationConfigurationResponse,
  PutFindingsPublicationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutFindingsPublicationConfigurationRequest,
  output: PutFindingsPublicationConfigurationResponse,
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
  operationName: "PutFindingsPublicationConfiguration",
}));

export type SearchResourcesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes for an account.
 */
export const searchResources: API.PaginatedOperationMethod<
  SearchResourcesRequest,
  SearchResourcesResponse,
  SearchResourcesError,
  Credentials | HttpClient.HttpClient,
  MatchingResource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchResourcesRequest,
  output: SearchResourcesResponse,
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
  operationName: "SearchResources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "matchingResources",
    pageSize: "maxResults",
  } as const,
})) as any;

export type TagResourceError = CommonErrors;
/**
 * Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type TestCustomDataIdentifierError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Tests criteria for a custom data identifier.
 */
export const testCustomDataIdentifier: API.OperationMethod<
  TestCustomDataIdentifierRequest,
  TestCustomDataIdentifierResponse,
  TestCustomDataIdentifierError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestCustomDataIdentifierRequest,
  output: TestCustomDataIdentifierResponse,
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
  operationName: "TestCustomDataIdentifier",
}));

export type UntagResourceError = CommonErrors;
/**
 * Removes one or more tags (keys and values) from an Amazon Macie resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAllowListError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the settings for an allow list.
 */
export const updateAllowList: API.OperationMethod<
  UpdateAllowListRequest,
  UpdateAllowListResponse,
  UpdateAllowListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAllowListRequest,
  output: UpdateAllowListResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAllowList",
}));

export type UpdateAutomatedDiscoveryConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Changes the configuration settings and status of automated sensitive data discovery for an organization or standalone account.
 */
export const updateAutomatedDiscoveryConfiguration: API.OperationMethod<
  UpdateAutomatedDiscoveryConfigurationRequest,
  UpdateAutomatedDiscoveryConfigurationResponse,
  UpdateAutomatedDiscoveryConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAutomatedDiscoveryConfigurationRequest,
  output: UpdateAutomatedDiscoveryConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAutomatedDiscoveryConfiguration",
}));

export type UpdateClassificationJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Changes the status of a classification job.
 */
export const updateClassificationJob: API.OperationMethod<
  UpdateClassificationJobRequest,
  UpdateClassificationJobResponse,
  UpdateClassificationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateClassificationJobRequest,
  output: UpdateClassificationJobResponse,
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
  operationName: "UpdateClassificationJob",
}));

export type UpdateClassificationScopeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the classification scope settings for an account.
 */
export const updateClassificationScope: API.OperationMethod<
  UpdateClassificationScopeRequest,
  UpdateClassificationScopeResponse,
  UpdateClassificationScopeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateClassificationScopeRequest,
  output: UpdateClassificationScopeResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateClassificationScope",
}));

export type UpdateFindingsFilterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the criteria and other settings for a findings filter.
 */
export const updateFindingsFilter: API.OperationMethod<
  UpdateFindingsFilterRequest,
  UpdateFindingsFilterResponse,
  UpdateFindingsFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateFindingsFilterRequest,
  output: UpdateFindingsFilterResponse,
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
  operationName: "UpdateFindingsFilter",
}));

export type UpdateMacieSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.
 */
export const updateMacieSession: API.OperationMethod<
  UpdateMacieSessionRequest,
  UpdateMacieSessionResponse,
  UpdateMacieSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMacieSessionRequest,
  output: UpdateMacieSessionResponse,
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
  operationName: "UpdateMacieSession",
}));

export type UpdateMemberSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.
 */
export const updateMemberSession: API.OperationMethod<
  UpdateMemberSessionRequest,
  UpdateMemberSessionResponse,
  UpdateMemberSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMemberSessionRequest,
  output: UpdateMemberSessionResponse,
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
  operationName: "UpdateMemberSession",
}));

export type UpdateOrganizationConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the Amazon Macie configuration settings for an organization in Organizations.
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
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOrganizationConfiguration",
}));

export type UpdateResourceProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the sensitivity score for an S3 bucket.
 */
export const updateResourceProfile: API.OperationMethod<
  UpdateResourceProfileRequest,
  UpdateResourceProfileResponse,
  UpdateResourceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateResourceProfileRequest,
  output: UpdateResourceProfileResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateResourceProfile",
}));

export type UpdateResourceProfileDetectionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the sensitivity scoring settings for an S3 bucket.
 */
export const updateResourceProfileDetections: API.OperationMethod<
  UpdateResourceProfileDetectionsRequest,
  UpdateResourceProfileDetectionsResponse,
  UpdateResourceProfileDetectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateResourceProfileDetectionsRequest,
  output: UpdateResourceProfileDetectionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateResourceProfileDetections",
}));

export type UpdateRevealConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
 */
export const updateRevealConfiguration: API.OperationMethod<
  UpdateRevealConfigurationRequest,
  UpdateRevealConfigurationResponse,
  UpdateRevealConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRevealConfigurationRequest,
  output: UpdateRevealConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRevealConfiguration",
}));

export type UpdateSensitivityInspectionTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the settings for the sensitivity inspection template for an account.
 */
export const updateSensitivityInspectionTemplate: API.OperationMethod<
  UpdateSensitivityInspectionTemplateRequest,
  UpdateSensitivityInspectionTemplateResponse,
  UpdateSensitivityInspectionTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSensitivityInspectionTemplateRequest,
  output: UpdateSensitivityInspectionTemplateResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSensitivityInspectionTemplate",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          administratorAccountId: S.optional(S.String),
          invitationId: S.optional(S.String),
          masterAccount: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/invitations/accept" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AcceptInvitationRequest" });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AcceptInvitationResponse",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({ ids: S.optional(__listOf__string) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/custom-data-identifiers/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetCustomDataIdentifiersRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          deleted: S.optional(S.Boolean),
          description: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchGetCustomDataIdentifierSummary",
      });
    case 5:
      return S.Array(BatchGetCustomDataIdentifierSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          customDataIdentifiers: S.optional(__listOfBatchGetCustomDataIdentifierSummary),
          notFoundIdentifierIds: S.optional(__listOf__string),
        }),
      ).annotate({
        identifier: "BatchGetCustomDataIdentifiersResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          status: S.optional(AutomatedDiscoveryAccountStatus),
        }),
      ).annotate({
        identifier: "AutomatedDiscoveryAccountUpdate",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AutomatedDiscoveryAccountUpdate);
    case 1:
      return S.suspend(() =>
        S.Struct({ accounts: S.optional(__listOfAutomatedDiscoveryAccountUpdate) }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/automated-discovery/accounts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchUpdateAutomatedDiscoveryAccountsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          errorCode: S.optional(AutomatedDiscoveryAccountUpdateErrorCode),
        }),
      ).annotate({
        identifier: "AutomatedDiscoveryAccountUpdateError",
      });
    case 3:
      return S.Array(AutomatedDiscoveryAccountUpdateError);
    case 4:
      return S.suspend(() =>
        S.Struct({ errors: S.optional(__listOfAutomatedDiscoveryAccountUpdateError) }),
      ).annotate({
        identifier: "BatchUpdateAutomatedDiscoveryAccountsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ bucketName: S.optional(S.String), objectKey: S.optional(S.String) }),
      ).annotate({ identifier: "S3WordsList" });
    case 6:
      return S.suspend(() =>
        S.Struct({ regex: S.optional(S.String), s3WordsList: S.optional(S3WordsList) }),
      ).annotate({ identifier: "AllowListCriteria" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          criteria: S.optional(AllowListCriteria),
          description: S.optional(S.String),
          name: S.optional(S.String),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/allow-lists" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateAllowListRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ arn: S.optional(S.String), id: S.optional(S.String) }),
      ).annotate({ identifier: "CreateAllowListResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          comparator: S.optional(JobComparator),
          key: S.optional(SimpleCriterionKeyForJob),
          values: S.optional(__listOf__string),
        }),
      ).annotate({ identifier: "SimpleCriterionForJob" });
    case 3:
      return S.suspend(() =>
        S.Struct({ key: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "TagCriterionPairForJob" });
    case 4:
      return S.Array(TagCriterionPairForJob);
    case 5:
      return S.suspend(() =>
        S.Struct({
          comparator: S.optional(JobComparator),
          tagValues: S.optional(__listOfTagCriterionPairForJob),
        }),
      ).annotate({ identifier: "TagCriterionForJob" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          simpleCriterion: S.optional(SimpleCriterionForJob),
          tagCriterion: S.optional(TagCriterionForJob),
        }),
      ).annotate({ identifier: "CriteriaForJob" });
    case 7:
      return S.Array(CriteriaForJob);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ and: S.optional(__listOfCriteriaForJob) })).annotate({
        identifier: "CriteriaBlockForJob",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          excludes: S.optional(CriteriaBlockForJob),
          includes: S.optional(CriteriaBlockForJob),
        }),
      ).annotate({ identifier: "S3BucketCriteriaForJob" });
    case 2:
      return S.suspend(() =>
        S.Struct({ accountId: S.optional(S.String), buckets: S.optional(__listOf__string) }),
      ).annotate({ identifier: "S3BucketDefinitionForJob" });
    case 3:
      return S.Array(S3BucketDefinitionForJob);
    case 4:
      return S.suspend(() =>
        S.Struct({
          comparator: S.optional(JobComparator),
          key: S.optional(S.String),
          tagValues: S.optional(__listOfTagValuePair),
          target: S.optional(TagTarget),
        }),
      ).annotate({ identifier: "TagScopeTerm" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          simpleScopeTerm: S.optional(SimpleScopeTerm),
          tagScopeTerm: S.optional(TagScopeTerm),
        }),
      ).annotate({ identifier: "JobScopeTerm" });
    case 6:
      return S.Array(JobScopeTerm);
    case 7:
      return S.suspend(() => S.Struct({ and: S.optional(__listOfJobScopeTerm) })).annotate({
        identifier: "JobScopingBlock",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ excludes: S.optional(JobScopingBlock), includes: S.optional(JobScopingBlock) }),
      ).annotate({ identifier: "Scoping" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          bucketCriteria: S.optional(S3BucketCriteriaForJob),
          bucketDefinitions: S.optional(__listOfS3BucketDefinitionForJob),
          scoping: S.optional(Scoping),
        }),
      ).annotate({ identifier: "S3JobDefinition" });
    case 2:
      return S.suspend(() => S.Struct({ dayOfMonth: S.optional(S.Number) })).annotate({
        identifier: "MonthlySchedule",
      });
    case 3:
      return S.suspend(() => S.Struct({ dayOfWeek: S.optional(DayOfWeek) })).annotate({
        identifier: "WeeklySchedule",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          dailySchedule: S.optional(DailySchedule),
          monthlySchedule: S.optional(MonthlySchedule),
          weeklySchedule: S.optional(WeeklySchedule),
        }),
      ).annotate({ identifier: "JobScheduleFrequency" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          allowListIds: S.optional(__listOf__string),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          customDataIdentifierIds: S.optional(__listOf__string),
          description: S.optional(S.String),
          initialRun: S.optional(S.Boolean),
          jobType: S.optional(JobType),
          managedDataIdentifierIds: S.optional(__listOf__string),
          managedDataIdentifierSelector: S.optional(ManagedDataIdentifierSelector),
          name: S.optional(S.String),
          s3JobDefinition: S.optional(S3JobDefinition),
          samplingPercentage: S.optional(S.Number),
          scheduleFrequency: S.optional(JobScheduleFrequency),
          tags: S.optional(TagMap),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/jobs" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateClassificationJobRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ jobArn: S.optional(S.String), jobId: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateClassificationJobResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          occurrencesThreshold: S.optional(S.Number),
          severity: S.optional(DataIdentifierSeverity),
        }),
      ).annotate({ identifier: "SeverityLevel" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SeverityLevel);
    case 1:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          description: S.optional(S.String),
          ignoreWords: S.optional(__listOf__string),
          keywords: S.optional(__listOf__string),
          maximumMatchDistance: S.optional(S.Number),
          name: S.optional(S.String),
          regex: S.optional(S.String),
          severityLevels: S.optional(SeverityLevelList),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/custom-data-identifiers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateCustomDataIdentifierRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ customDataIdentifierId: S.optional(S.String) })).annotate({
        identifier: "CreateCustomDataIdentifierResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          eq: S.optional(__listOf__string),
          eqExactMatch: S.optional(__listOf__string),
          gt: S.optional(S.Number),
          gte: S.optional(S.Number),
          lt: S.optional(S.Number),
          lte: S.optional(S.Number),
          neq: S.optional(__listOf__string),
        }),
      ).annotate({
        identifier: "CriterionAdditionalProperties",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ CriterionAdditionalProperties.pipe(S.optional));
    case 5:
      return S.suspend(() => S.Struct({ criterion: S.optional(Criterion) })).annotate({
        identifier: "FindingCriteria",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(FindingsFilterAction),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          description: S.optional(S.String),
          findingCriteria: S.optional(FindingCriteria),
          name: S.optional(S.String),
          position: S.optional(S.Number),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/findingsfilters" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateFindingsFilterRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.optional(S.String), id: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateFindingsFilterResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accountIds: S.optional(__listOf__string),
          disableEmailNotification: S.optional(S.Boolean),
          message: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/invitations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateInvitationsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          errorCode: S.optional(ErrorCode),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "UnprocessedAccount" });
    case 2:
      return S.Array(UnprocessedAccount);
    case 3:
      return S.suspend(() =>
        S.Struct({ unprocessedAccounts: S.optional(__listOfUnprocessedAccount) }),
      ).annotate({
        identifier: "CreateInvitationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ accountId: S.optional(S.String), email: S.optional(S.String) }),
      ).annotate({ identifier: "AccountDetail" });
    case 5:
      return S.suspend(() =>
        S.Struct({ account: S.optional(AccountDetail), tags: S.optional(TagMap) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/members" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateMemberRequest" });
    case 6:
      return S.suspend(() => S.Struct({ arn: S.optional(S.String) })).annotate({
        identifier: "CreateMemberResponse",
      });
    case 7:
      return S.Array(FindingType);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ findingTypes: S.optional(__listOfFindingType) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/findings/sample" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateSampleFindingsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ accountIds: S.optional(__listOf__string) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/invitations/decline" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeclineInvitationsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          ignoreJobChecks: S.optional(S.String).pipe(T.HttpQuery("ignoreJobChecks")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/allow-lists/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAllowListRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/custom-data-identifiers/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCustomDataIdentifierRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteCustomDataIdentifierResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/findingsfilters/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteFindingsFilterRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ accountIds: S.optional(__listOf__string) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/invitations/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteInvitationsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/members/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteMemberRequest" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          eq: S.optional(__listOf__string),
          gt: S.optional(S.Number),
          gte: S.optional(S.Number),
          lt: S.optional(S.Number),
          lte: S.optional(S.Number),
          neq: S.optional(__listOf__string),
          prefix: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BucketCriteriaAdditionalProperties",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ BucketCriteriaAdditionalProperties.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({ attributeName: S.optional(S.String), orderBy: S.optional(OrderBy) }),
      ).annotate({ identifier: "BucketSortCriteria" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          criteria: S.optional(BucketCriteria),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          sortCriteria: S.optional(BucketSortCriteria),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/datasources/s3" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeBucketsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          isDefinedInJob: S.optional(IsDefinedInJob),
          isMonitoredByJob: S.optional(IsMonitoredByJob),
          lastJobId: S.optional(S.String),
          lastJobRunTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "JobDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          customerManaged: S.optional(S.Number),
          kmsManaged: S.optional(S.Number),
          s3Managed: S.optional(S.Number),
          unencrypted: S.optional(S.Number),
          unknown: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ObjectCountByEncryptionType",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          blockPublicAcls: S.optional(S.Boolean),
          blockPublicPolicy: S.optional(S.Boolean),
          ignorePublicAcls: S.optional(S.Boolean),
          restrictPublicBuckets: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "BlockPublicAccess" });
    case 7:
      return S.suspend(() =>
        S.Struct({ blockPublicAccess: S.optional(BlockPublicAccess) }),
      ).annotate({ identifier: "AccountLevelPermissions" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          allowsPublicReadAccess: S.optional(S.Boolean),
          allowsPublicWriteAccess: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AccessControlList" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          accessControlList: S.optional(AccessControlList),
          blockPublicAccess: S.optional(BlockPublicAccess),
          bucketPolicy: S.optional(BucketPolicy),
        }),
      ).annotate({ identifier: "BucketLevelPermissions" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          accountLevelPermissions: S.optional(AccountLevelPermissions),
          bucketLevelPermissions: S.optional(BucketLevelPermissions),
        }),
      ).annotate({
        identifier: "BucketPermissionConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          effectivePermission: S.optional(EffectivePermission),
          permissionConfiguration: S.optional(BucketPermissionConfiguration),
        }),
      ).annotate({ identifier: "BucketPublicAccess" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          replicated: S.optional(S.Boolean),
          replicatedExternally: S.optional(S.Boolean),
          replicationAccounts: S.optional(__listOf__string),
        }),
      ).annotate({ identifier: "ReplicationDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({ kmsMasterKeyId: S.optional(S.String), type: S.optional(Type) }),
      ).annotate({
        identifier: "BucketServerSideEncryption",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          fileType: S.optional(S.Number),
          storageClass: S.optional(S.Number),
          total: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ObjectLevelStatistics" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          allowsUnencryptedObjectUploads: S.optional(AllowsUnencryptedObjectUploads),
          automatedDiscoveryMonitoringStatus: S.optional(AutomatedDiscoveryMonitoringStatus),
          bucketArn: S.optional(S.String),
          bucketCreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          bucketName: S.optional(S.String),
          classifiableObjectCount: S.optional(S.Number),
          classifiableSizeInBytes: S.optional(S.Number),
          errorCode: S.optional(BucketMetadataErrorCode),
          errorMessage: S.optional(S.String),
          jobDetails: S.optional(JobDetails),
          lastAutomatedDiscoveryTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          lastUpdated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          objectCount: S.optional(S.Number),
          objectCountByEncryptionType: S.optional(ObjectCountByEncryptionType),
          publicAccess: S.optional(BucketPublicAccess),
          region: S.optional(S.String),
          replicationDetails: S.optional(ReplicationDetails),
          sensitivityScore: S.optional(S.Number),
          serverSideEncryption: S.optional(BucketServerSideEncryption),
          sharedAccess: S.optional(SharedAccess),
          sizeInBytes: S.optional(S.Number),
          sizeInBytesCompressed: S.optional(S.Number),
          tags: S.optional(__listOfKeyValuePair),
          unclassifiableObjectCount: S.optional(ObjectLevelStatistics),
          unclassifiableObjectSizeInBytes: S.optional(ObjectLevelStatistics),
          versioning: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "BucketMetadata" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(BucketMetadata);
    case 1:
      return S.suspend(() =>
        S.Struct({ buckets: S.optional(__listOfBucketMetadata), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "DescribeBucketsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ jobId: S.String.pipe(T.HttpLabel("jobId")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/jobs/{jobId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeClassificationJobRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ code: S.optional(LastRunErrorStatusCode) })).annotate({
        identifier: "LastRunErrorStatus",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          approximateNumberOfObjectsToProcess: S.optional(S.Number),
          numberOfRuns: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Statistics" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobExpiresAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          jobImminentExpirationHealthEventArn: S.optional(S.String),
          jobPausedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "UserPausedDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          allowListIds: S.optional(__listOf__string),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          customDataIdentifierIds: S.optional(__listOf__string),
          description: S.optional(S.String),
          initialRun: S.optional(S.Boolean),
          jobArn: S.optional(S.String),
          jobId: S.optional(S.String),
          jobStatus: S.optional(JobStatus),
          jobType: S.optional(JobType),
          lastRunErrorStatus: S.optional(LastRunErrorStatus),
          lastRunTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          managedDataIdentifierIds: S.optional(__listOf__string),
          managedDataIdentifierSelector: S.optional(ManagedDataIdentifierSelector),
          name: S.optional(S.String),
          s3JobDefinition: S.optional(S3JobDefinition),
          samplingPercentage: S.optional(S.Number),
          scheduleFrequency: S.optional(JobScheduleFrequency),
          statistics: S.optional(Statistics),
          tags: S.optional(TagMap),
          userPausedDetails: S.optional(UserPausedDetails),
        }),
      ).annotate({
        identifier: "DescribeClassificationJobResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/admin/configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeOrganizationConfigurationRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          autoEnable: S.optional(S.Boolean),
          maxAccountLimitReached: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "DescribeOrganizationConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/macie" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DisableMacieRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ adminAccountId: S.optional(S.String).pipe(T.HttpQuery("adminAccountId")) }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/admin" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisableOrganizationAdminAccountRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/administrator/disassociate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateFromAdministratorAccountRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/master/disassociate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateFromMasterAccountRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/members/disassociate/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateMemberRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          findingPublishingFrequency: S.optional(FindingPublishingFrequency),
          status: S.optional(MacieStatus),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/macie" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "EnableMacieRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          adminAccountId: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/admin" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "EnableOrganizationAdminAccountRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/administrator" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetAdministratorAccountRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          invitationId: S.optional(S.String),
          invitedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          relationshipStatus: S.optional(RelationshipStatus),
        }),
      ).annotate({ identifier: "Invitation" });
    case 2:
      return S.suspend(() => S.Struct({ administrator: S.optional(Invitation) })).annotate({
        identifier: "GetAdministratorAccountResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/allow-lists/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAllowListRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ code: S.optional(AllowListStatusCode), description: S.optional(S.String) }),
      ).annotate({ identifier: "AllowListStatus" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          criteria: S.optional(AllowListCriteria),
          description: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(AllowListStatus),
          tags: S.optional(TagMap),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "GetAllowListResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/automated-discovery/configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAutomatedDiscoveryConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          autoEnableOrganizationMembers: S.optional(AutoEnableMode),
          classificationScopeId: S.optional(S.String),
          disabledAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          firstEnabledAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          sensitivityInspectionTemplateId: S.optional(S.String),
          status: S.optional(AutomatedDiscoveryStatus),
        }),
      ).annotate({
        identifier: "GetAutomatedDiscoveryConfigurationResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ accountId: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/datasources/s3/statistics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetBucketStatisticsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          publiclyAccessible: S.optional(S.Number),
          publiclyReadable: S.optional(S.Number),
          publiclyWritable: S.optional(S.Number),
          unknown: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "BucketCountByEffectivePermission",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          kmsManaged: S.optional(S.Number),
          s3Managed: S.optional(S.Number),
          unencrypted: S.optional(S.Number),
          unknown: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "BucketCountByEncryptionType",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          allowsUnencryptedObjectUploads: S.optional(S.Number),
          deniesUnencryptedObjectUploads: S.optional(S.Number),
          unknown: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "BucketCountPolicyAllowsUnencryptedObjectUploads",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          external: S.optional(S.Number),
          internal: S.optional(S.Number),
          notShared: S.optional(S.Number),
          unknown: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "BucketCountBySharedAccessType",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          classifiableSizeInBytes: S.optional(S.Number),
          publiclyAccessibleCount: S.optional(S.Number),
          totalCount: S.optional(S.Number),
          totalSizeInBytes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SensitivityAggregations" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          classificationError: S.optional(SensitivityAggregations),
          notClassified: S.optional(SensitivityAggregations),
          notSensitive: S.optional(SensitivityAggregations),
          sensitive: S.optional(SensitivityAggregations),
        }),
      ).annotate({
        identifier: "BucketStatisticsBySensitivity",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          bucketCount: S.optional(S.Number),
          bucketCountByEffectivePermission: S.optional(BucketCountByEffectivePermission),
          bucketCountByEncryptionType: S.optional(BucketCountByEncryptionType),
          bucketCountByObjectEncryptionRequirement: S.optional(
            BucketCountPolicyAllowsUnencryptedObjectUploads,
          ),
          bucketCountBySharedAccessType: S.optional(BucketCountBySharedAccessType),
          bucketStatisticsBySensitivity: S.optional(BucketStatisticsBySensitivity),
          classifiableObjectCount: S.optional(S.Number),
          classifiableSizeInBytes: S.optional(S.Number),
          lastUpdated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          objectCount: S.optional(S.Number),
          sizeInBytes: S.optional(S.Number),
          sizeInBytesCompressed: S.optional(S.Number),
          unclassifiableObjectCount: S.optional(ObjectLevelStatistics),
          unclassifiableObjectSizeInBytes: S.optional(ObjectLevelStatistics),
        }),
      ).annotate({
        identifier: "GetBucketStatisticsResponse",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/classification-export-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetClassificationExportConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          bucketName: S.optional(S.String),
          expectedBucketOwner: S.optional(S.String),
          keyPrefix: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3Destination" });
    case 2:
      return S.suspend(() => S.Struct({ s3Destination: S.optional(S3Destination) })).annotate({
        identifier: "ClassificationExportConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ configuration: S.optional(ClassificationExportConfiguration) }),
      ).annotate({
        identifier: "GetClassificationExportConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/classification-scopes/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetClassificationScopeRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ bucketNames: S.optional(__listOfS3BucketName) })).annotate({
        identifier: "S3ClassificationScopeExclusion",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ excludes: S.optional(S3ClassificationScopeExclusion) }),
      ).annotate({ identifier: "S3ClassificationScope" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          s3: S.optional(S3ClassificationScope),
        }),
      ).annotate({
        identifier: "GetClassificationScopeResponse",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/custom-data-identifiers/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCustomDataIdentifierRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          deleted: S.optional(S.Boolean),
          description: S.optional(S.String),
          id: S.optional(S.String),
          ignoreWords: S.optional(__listOf__string),
          keywords: S.optional(__listOf__string),
          maximumMatchDistance: S.optional(S.Number),
          name: S.optional(S.String),
          regex: S.optional(S.String),
          severityLevels: S.optional(SeverityLevelList),
          tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "GetCustomDataIdentifierResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          findingIds: S.optional(__listOf__string),
          sortCriteria: S.optional(SortCriteria),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/findings/describe" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFindingsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          cellReference: S.optional(S.String),
          column: S.optional(S.Number),
          columnName: S.optional(S.String),
          row: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Cell" });
    case 4:
      return S.Array(Cell);
    case 5:
      return S.suspend(() =>
        S.Struct({
          end: S.optional(S.Number),
          start: S.optional(S.Number),
          startColumn: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Range" });
    case 6:
      return S.Array(Range);
    case 7:
      return S.suspend(() =>
        S.Struct({
          lineRange: S.optional(Range),
          offsetRange: S.optional(Range),
          pageNumber: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Page" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Page);
    case 1:
      return S.suspend(() =>
        S.Struct({ jsonPath: S.optional(S.String), recordIndex: S.optional(S.Number) }),
      ).annotate({ identifier: "Record" });
    case 2:
      return S.Array(Record);
    case 3:
      return S.suspend(() =>
        S.Struct({
          cells: S.optional(Cells),
          lineRanges: S.optional(Ranges),
          offsetRanges: S.optional(Ranges),
          pages: S.optional(Pages),
          records: S.optional(Records),
        }),
      ).annotate({ identifier: "Occurrences" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          count: S.optional(S.Number),
          name: S.optional(S.String),
          occurrences: S.optional(Occurrences),
        }),
      ).annotate({ identifier: "CustomDetection" });
    case 5:
      return S.Array(CustomDetection);
    case 6:
      return S.suspend(() =>
        S.Struct({ detections: S.optional(CustomDetections), totalCount: S.optional(S.Number) }),
      ).annotate({ identifier: "CustomDataIdentifiers" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          count: S.optional(S.Number),
          occurrences: S.optional(Occurrences),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "DefaultDetection" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(DefaultDetection);
    case 1:
      return S.suspend(() =>
        S.Struct({
          category: S.optional(SensitiveDataItemCategory),
          detections: S.optional(DefaultDetections),
          totalCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SensitiveDataItem" });
    case 2:
      return S.Array(SensitiveDataItem);
    case 3:
      return S.suspend(() =>
        S.Struct({ code: S.optional(S.String), reason: S.optional(S.String) }),
      ).annotate({
        identifier: "ClassificationResultStatus",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          additionalOccurrences: S.optional(S.Boolean),
          customDataIdentifiers: S.optional(CustomDataIdentifiers),
          mimeType: S.optional(S.String),
          sensitiveData: S.optional(SensitiveData),
          sizeClassified: S.optional(S.Number),
          status: S.optional(ClassificationResultStatus),
        }),
      ).annotate({ identifier: "ClassificationResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          detailedResultsLocation: S.optional(S.String),
          jobArn: S.optional(S.String),
          jobId: S.optional(S.String),
          originType: S.optional(OriginType),
          result: S.optional(ClassificationResult),
        }),
      ).annotate({ identifier: "ClassificationDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          api: S.optional(S.String),
          apiServiceName: S.optional(S.String),
          firstSeen: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastSeen: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ApiCallDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          actionType: S.optional(FindingActionType),
          apiCallDetails: S.optional(ApiCallDetails),
        }),
      ).annotate({ identifier: "FindingAction" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ domainName: S.optional(S.String) })).annotate({
        identifier: "DomainDetails",
      });
    case 1:
      return S.suspend(() => S.Struct({ name: S.optional(S.String) })).annotate({
        identifier: "IpCity",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ code: S.optional(S.String), name: S.optional(S.String) }),
      ).annotate({ identifier: "IpCountry" });
    case 3:
      return S.suspend(() =>
        S.Struct({ lat: S.optional(S.Number), lon: S.optional(S.Number) }),
      ).annotate({ identifier: "IpGeoLocation" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          asn: S.optional(S.String),
          asnOrg: S.optional(S.String),
          isp: S.optional(S.String),
          org: S.optional(S.String),
        }),
      ).annotate({ identifier: "IpOwner" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ipAddressV4: S.optional(S.String),
          ipCity: S.optional(IpCity),
          ipCountry: S.optional(IpCountry),
          ipGeoLocation: S.optional(IpGeoLocation),
          ipOwner: S.optional(IpOwner),
        }),
      ).annotate({ identifier: "IpAddressDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          creationDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          mfaAuthenticated: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "SessionContextAttributes" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          arn: S.optional(S.String),
          principalId: S.optional(S.String),
          type: S.optional(S.String),
          userName: S.optional(S.String),
        }),
      ).annotate({ identifier: "SessionIssuer" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          attributes: S.optional(SessionContextAttributes),
          sessionIssuer: S.optional(SessionIssuer),
        }),
      ).annotate({ identifier: "SessionContext" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          accessKeyId: S.optional(S.String),
          accountId: S.optional(S.String),
          arn: S.optional(S.String),
          principalId: S.optional(S.String),
          sessionContext: S.optional(SessionContext),
        }),
      ).annotate({ identifier: "AssumedRole" });
    case 2:
      return S.suspend(() =>
        S.Struct({ accountId: S.optional(S.String), principalId: S.optional(S.String) }),
      ).annotate({ identifier: "AwsAccount" });
    case 3:
      return S.suspend(() => S.Struct({ invokedBy: S.optional(S.String) })).annotate({
        identifier: "AwsService",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          arn: S.optional(S.String),
          principalId: S.optional(S.String),
          userName: S.optional(S.String),
        }),
      ).annotate({ identifier: "IamUser" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          arn: S.optional(S.String),
          principalId: S.optional(S.String),
        }),
      ).annotate({ identifier: "UserIdentityRoot" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          assumedRole: S.optional(AssumedRole),
          awsAccount: S.optional(AwsAccount),
          awsService: S.optional(AwsService),
          federatedUser: S.optional(FederatedUser),
          iamUser: S.optional(IamUser),
          root: S.optional(UserIdentityRoot),
          type: S.optional(UserIdentityType),
        }),
      ).annotate({ identifier: "UserIdentity" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainDetails: S.optional(DomainDetails),
          ipAddressDetails: S.optional(IpAddressDetails),
          userIdentity: S.optional(UserIdentity),
        }),
      ).annotate({ identifier: "FindingActor" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ action: S.optional(FindingAction), actor: S.optional(FindingActor) }),
      ).annotate({ identifier: "PolicyDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          encryptionType: S.optional(EncryptionType),
          kmsMasterKeyId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServerSideEncryption" });
    case 2:
      return S.suspend(() =>
        S.Struct({ displayName: S.optional(S.String), id: S.optional(S.String) }),
      ).annotate({ identifier: "S3BucketOwner" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          allowsUnencryptedObjectUploads: S.optional(AllowsUnencryptedObjectUploads),
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          defaultServerSideEncryption: S.optional(ServerSideEncryption),
          name: S.optional(S.String),
          owner: S.optional(S3BucketOwner),
          publicAccess: S.optional(BucketPublicAccess),
          tags: S.optional(KeyValuePairList),
        }),
      ).annotate({ identifier: "S3Bucket" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          bucketArn: S.optional(S.String),
          eTag: S.optional(S.String),
          extension: S.optional(S.String),
          key: S.optional(S.String),
          lastModified: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          path: S.optional(S.String),
          publicAccess: S.optional(S.Boolean),
          serverSideEncryption: S.optional(ServerSideEncryption),
          size: S.optional(S.Number),
          storageClass: S.optional(StorageClass),
          tags: S.optional(KeyValuePairList),
          versionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3Object" });
    case 5:
      return S.suspend(() =>
        S.Struct({ s3Bucket: S.optional(S3Bucket), s3Object: S.optional(S3Object) }),
      ).annotate({ identifier: "ResourcesAffected" });
    case 6:
      return S.suspend(() =>
        S.Struct({ description: S.optional(SeverityDescription), score: S.optional(S.Number) }),
      ).annotate({ identifier: "Severity" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          archived: S.optional(S.Boolean),
          category: S.optional(FindingCategory),
          classificationDetails: S.optional(ClassificationDetails),
          count: S.optional(S.Number),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(S.String),
          id: S.optional(S.String),
          partition: S.optional(S.String),
          policyDetails: S.optional(PolicyDetails),
          region: S.optional(S.String),
          resourcesAffected: S.optional(ResourcesAffected),
          sample: S.optional(S.Boolean),
          schemaVersion: S.optional(S.String),
          severity: S.optional(Severity),
          title: S.optional(S.String),
          type: S.optional(FindingType),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "Finding" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Finding);
    case 1:
      return S.suspend(() => S.Struct({ findings: S.optional(__listOfFinding) })).annotate({
        identifier: "GetFindingsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/findingsfilters/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFindingsFilterRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(FindingsFilterAction),
          arn: S.optional(S.String),
          description: S.optional(S.String),
          findingCriteria: S.optional(FindingCriteria),
          id: S.optional(S.String),
          name: S.optional(S.String),
          position: S.optional(S.Number),
          tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "GetFindingsFilterResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/findings-publication-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetFindingsPublicationConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          publishClassificationFindings: S.optional(S.Boolean),
          publishPolicyFindings: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "SecurityHubConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({ securityHubConfiguration: S.optional(SecurityHubConfiguration) }),
      ).annotate({
        identifier: "GetFindingsPublicationConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          attributeName: S.optional(FindingStatisticsSortAttributeName),
          orderBy: S.optional(OrderBy),
        }),
      ).annotate({
        identifier: "FindingStatisticsSortCriteria",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          findingCriteria: S.optional(FindingCriteria),
          groupBy: S.optional(GroupBy),
          size: S.optional(S.Number),
          sortCriteria: S.optional(FindingStatisticsSortCriteria),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/findings/statistics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetFindingStatisticsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ count: S.optional(S.Number), groupKey: S.optional(S.String) }),
      ).annotate({ identifier: "GroupCount" });
    case 2:
      return S.Array(GroupCount);
    case 3:
      return S.suspend(() => S.Struct({ countsByGroup: S.optional(__listOfGroupCount) })).annotate({
        identifier: "GetFindingStatisticsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/invitations/count" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetInvitationsCountRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ invitationsCount: S.optional(S.Number) })).annotate({
        identifier: "GetInvitationsCountResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/macie" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetMacieSessionRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          findingPublishingFrequency: S.optional(FindingPublishingFrequency),
          serviceRole: S.optional(S.String),
          status: S.optional(MacieStatus),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "GetMacieSessionResponse" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/master" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetMasterAccountRequest" });
    case 1:
      return S.suspend(() => S.Struct({ master: S.optional(Invitation) })).annotate({
        identifier: "GetMasterAccountResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/members/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetMemberRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          administratorAccountId: S.optional(S.String),
          arn: S.optional(S.String),
          email: S.optional(S.String),
          invitedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          masterAccountId: S.optional(S.String),
          relationshipStatus: S.optional(RelationshipStatus),
          tags: S.optional(TagMap),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "GetMemberResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.optional(S.String).pipe(T.HttpQuery("resourceArn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/resource-profiles" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetResourceProfileRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          totalBytesClassified: S.optional(S.Number),
          totalDetections: S.optional(S.Number),
          totalDetectionsSuppressed: S.optional(S.Number),
          totalItemsClassified: S.optional(S.Number),
          totalItemsSensitive: S.optional(S.Number),
          totalItemsSkipped: S.optional(S.Number),
          totalItemsSkippedInvalidEncryption: S.optional(S.Number),
          totalItemsSkippedInvalidKms: S.optional(S.Number),
          totalItemsSkippedPermissionDenied: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ResourceStatistics" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          profileUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          sensitivityScore: S.optional(S.Number),
          sensitivityScoreOverridden: S.optional(S.Boolean),
          statistics: S.optional(ResourceStatistics),
        }),
      ).annotate({
        identifier: "GetResourceProfileResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/reveal-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRevealConfigurationRequest",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ kmsKeyId: S.optional(S.String), status: S.optional(RevealStatus) }),
      ).annotate({ identifier: "RevealConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          externalId: S.optional(S.String),
          retrievalMode: S.optional(RetrievalMode),
          roleName: S.optional(S.String),
        }),
      ).annotate({ identifier: "RetrievalConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          configuration: S.optional(RevealConfiguration),
          retrievalConfiguration: S.optional(RetrievalConfiguration),
        }),
      ).annotate({
        identifier: "GetRevealConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ findingId: S.String.pipe(T.HttpLabel("findingId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/findings/{findingId}/reveal" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSensitiveDataOccurrencesRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ value: S.optional(SensitiveString) })).annotate({
        identifier: "DetectedDataDetails",
      });
    case 5:
      return S.Array(DetectedDataDetails);
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __listOfDetectedDataDetails.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          error: S.optional(S.String),
          sensitiveDataOccurrences: S.optional(SensitiveDataOccurrences),
          status: S.optional(RevealRequestStatus),
        }),
      ).annotate({
        identifier: "GetSensitiveDataOccurrencesResponse",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ findingId: S.String.pipe(T.HttpLabel("findingId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/findings/{findingId}/reveal/availability" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSensitiveDataOccurrencesAvailabilityRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          code: S.optional(AvailabilityCode),
          reasons: S.optional(__listOfUnavailabilityReasonCode),
        }),
      ).annotate({
        identifier: "GetSensitiveDataOccurrencesAvailabilityResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/templates/sensitivity-inspections/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSensitivityInspectionTemplateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ managedDataIdentifierIds: S.optional(__listOf__string) }),
      ).annotate({
        identifier: "SensitivityInspectionTemplateExcludes",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          allowListIds: S.optional(__listOf__string),
          customDataIdentifierIds: S.optional(__listOf__string),
          managedDataIdentifierIds: S.optional(__listOf__string),
        }),
      ).annotate({
        identifier: "SensitivityInspectionTemplateIncludes",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          excludes: S.optional(SensitivityInspectionTemplateExcludes),
          includes: S.optional(SensitivityInspectionTemplateIncludes),
          name: S.optional(S.String),
          sensitivityInspectionTemplateId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetSensitivityInspectionTemplateResponse",
      });
    case 6:
      return S.Array(UsageStatisticsFilter);
    case 7:
      return S.suspend(() =>
        S.Struct({ key: S.optional(UsageStatisticsSortKey), orderBy: S.optional(OrderBy) }),
      ).annotate({ identifier: "UsageStatisticsSortBy" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          filterBy: S.optional(__listOfUsageStatisticsFilter),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          sortBy: S.optional(UsageStatisticsSortBy),
          timeRange: S.optional(TimeRange),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/usage/statistics" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetUsageStatisticsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          isServiceLimited: S.optional(S.Boolean),
          unit: S.optional(Unit),
          value: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ServiceLimit" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          currency: S.optional(Currency),
          estimatedCost: S.optional(S.String),
          serviceLimit: S.optional(ServiceLimit),
          type: S.optional(UsageType),
        }),
      ).annotate({ identifier: "UsageByAccount" });
    case 3:
      return S.Array(UsageByAccount);
    case 4:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          automatedDiscoveryFreeTrialStartDate: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          freeTrialStartDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          usage: S.optional(__listOfUsageByAccount),
        }),
      ).annotate({ identifier: "UsageRecord" });
    case 5:
      return S.Array(UsageRecord);
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          records: S.optional(__listOfUsageRecord),
          timeRange: S.optional(TimeRange),
        }),
      ).annotate({
        identifier: "GetUsageStatisticsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ timeRange: S.optional(S.String).pipe(T.HttpQuery("timeRange")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/usage" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetUsageTotalsRequest" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          currency: S.optional(Currency),
          estimatedCost: S.optional(S.String),
          type: S.optional(UsageType),
        }),
      ).annotate({ identifier: "UsageTotal" });
    case 1:
      return S.Array(UsageTotal);
    case 2:
      return S.suspend(() =>
        S.Struct({ timeRange: S.optional(TimeRange), usageTotals: S.optional(__listOfUsageTotal) }),
      ).annotate({ identifier: "GetUsageTotalsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/allow-lists" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAllowListsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "AllowListSummary" });
    case 5:
      return S.Array(AllowListSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          allowLists: S.optional(__listOfAllowListSummary),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListAllowListsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          accountIds: S.optional(__listOf__string).pipe(T.HttpQuery("accountIds")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/automated-discovery/accounts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAutomatedDiscoveryAccountsRequest",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AutomatedDiscoveryAccount);
    case 1:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__listOfAutomatedDiscoveryAccount),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAutomatedDiscoveryAccountsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          excludes: S.optional(__listOfListJobsFilterTerm),
          includes: S.optional(__listOfListJobsFilterTerm),
        }),
      ).annotate({ identifier: "ListJobsFilterCriteria" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          attributeName: S.optional(ListJobsSortAttributeName),
          orderBy: S.optional(OrderBy),
        }),
      ).annotate({ identifier: "ListJobsSortCriteria" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          filterCriteria: S.optional(ListJobsFilterCriteria),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          sortCriteria: S.optional(ListJobsSortCriteria),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/jobs/list" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListClassificationJobsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          bucketCriteria: S.optional(S3BucketCriteriaForJob),
          bucketDefinitions: S.optional(__listOfS3BucketDefinitionForJob),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          jobId: S.optional(S.String),
          jobStatus: S.optional(JobStatus),
          jobType: S.optional(JobType),
          lastRunErrorStatus: S.optional(LastRunErrorStatus),
          name: S.optional(S.String),
          userPausedDetails: S.optional(UserPausedDetails),
        }),
      ).annotate({ identifier: "JobSummary" });
    case 6:
      return S.Array(JobSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__listOfJobSummary), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListClassificationJobsResponse",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String).pipe(T.HttpQuery("name")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/classification-scopes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListClassificationScopesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), name: S.optional(S.String) }),
      ).annotate({
        identifier: "ClassificationScopeSummary",
      });
    case 2:
      return S.Array(ClassificationScopeSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          classificationScopes: S.optional(__listOfClassificationScopeSummary),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListClassificationScopesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/custom-data-identifiers/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCustomDataIdentifiersRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CustomDataIdentifierSummary",
      });
    case 6:
      return S.Array(CustomDataIdentifierSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__listOfCustomDataIdentifierSummary),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCustomDataIdentifiersResponse",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          findingCriteria: S.optional(FindingCriteria),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          sortCriteria: S.optional(SortCriteria),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/findings" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListFindingsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ findingIds: S.optional(__listOf__string), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFindingsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/findingsfilters" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListFindingsFiltersRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(FindingsFilterAction),
          arn: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "FindingsFilterListItem" });
    case 4:
      return S.Array(FindingsFilterListItem);
    case 5:
      return S.suspend(() =>
        S.Struct({
          findingsFilterListItems: S.optional(__listOfFindingsFilterListItem),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListFindingsFiltersResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/invitations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListInvitationsRequest" });
    case 7:
      return S.Array(Invitation);
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ invitations: S.optional(__listOfInvitation), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListInvitationsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/managed-data-identifiers/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListManagedDataIdentifiersRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ category: S.optional(SensitiveDataItemCategory), id: S.optional(S.String) }),
      ).annotate({
        identifier: "ManagedDataIdentifierSummary",
      });
    case 3:
      return S.Array(ManagedDataIdentifierSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__listOfManagedDataIdentifierSummary),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListManagedDataIdentifiersResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          onlyAssociated: S.optional(S.String).pipe(T.HttpQuery("onlyAssociated")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/members" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListMembersRequest" });
    case 6:
      return S.Array(Member);
    case 7:
      return S.suspend(() =>
        S.Struct({ members: S.optional(__listOfMember), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListMembersResponse" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/admin" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListOrganizationAdminAccountsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ accountId: S.optional(S.String), status: S.optional(AdminStatus) }),
      ).annotate({ identifier: "AdminAccount" });
    case 2:
      return S.Array(AdminAccount);
    case 3:
      return S.suspend(() =>
        S.Struct({
          adminAccounts: S.optional(__listOfAdminAccount),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListOrganizationAdminAccountsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          resourceArn: S.optional(S.String).pipe(T.HttpQuery("resourceArn")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/resource-profiles/artifacts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResourceProfileArtifactsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          classificationResultStatus: S.optional(S.String),
          sensitive: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ResourceProfileArtifact" });
    case 6:
      return S.Array(ResourceProfileArtifact);
    case 7:
      return S.suspend(() =>
        S.Struct({
          artifacts: S.optional(__listOfResourceProfileArtifact),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListResourceProfileArtifactsResponse",
      });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          resourceArn: S.optional(S.String).pipe(T.HttpQuery("resourceArn")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/resource-profiles/detections" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResourceProfileDetectionsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          count: S.optional(S.Number),
          id: S.optional(S.String),
          name: S.optional(S.String),
          suppressed: S.optional(S.Boolean),
          type: S.optional(DataIdentifierType),
        }),
      ).annotate({ identifier: "Detection" });
    case 2:
      return S.Array(Detection);
    case 3:
      return S.suspend(() =>
        S.Struct({ detections: S.optional(__listOfDetection), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListResourceProfileDetectionsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/templates/sensitivity-inspections" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSensitivityInspectionTemplatesRequest",
      });
    case 5:
      return S.Array(SensitivityInspectionTemplatesEntry);
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          sensitivityInspectionTemplates: S.optional(__listOfSensitivityInspectionTemplatesEntry),
        }),
      ).annotate({
        identifier: "ListSensitivityInspectionTemplatesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
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
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ tags: S.optional(TagMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ configuration: S.optional(ClassificationExportConfiguration) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/classification-export-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutClassificationExportConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          securityHubConfiguration: S.optional(SecurityHubConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/findings-publication-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutFindingsPublicationConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          comparator: S.optional(SearchResourcesComparator),
          key: S.optional(SearchResourcesSimpleCriterionKey),
          values: S.optional(__listOf__string),
        }),
      ).annotate({
        identifier: "SearchResourcesSimpleCriterion",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ key: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({
        identifier: "SearchResourcesTagCriterionPair",
      });
    case 5:
      return S.Array(SearchResourcesTagCriterionPair);
    case 6:
      return S.suspend(() =>
        S.Struct({
          comparator: S.optional(SearchResourcesComparator),
          tagValues: S.optional(__listOfSearchResourcesTagCriterionPair),
        }),
      ).annotate({
        identifier: "SearchResourcesTagCriterion",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          simpleCriterion: S.optional(SearchResourcesSimpleCriterion),
          tagCriterion: S.optional(SearchResourcesTagCriterion),
        }),
      ).annotate({ identifier: "SearchResourcesCriteria" });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SearchResourcesCriteria);
    case 1:
      return S.suspend(() =>
        S.Struct({ and: S.optional(__listOfSearchResourcesCriteria) }),
      ).annotate({
        identifier: "SearchResourcesCriteriaBlock",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          excludes: S.optional(SearchResourcesCriteriaBlock),
          includes: S.optional(SearchResourcesCriteriaBlock),
        }),
      ).annotate({
        identifier: "SearchResourcesBucketCriteria",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          bucketCriteria: S.optional(SearchResourcesBucketCriteria),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          sortCriteria: S.optional(SearchResourcesSortCriteria),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/datasources/search-resources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchResourcesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          automatedDiscoveryMonitoringStatus: S.optional(AutomatedDiscoveryMonitoringStatus),
          bucketName: S.optional(S.String),
          classifiableObjectCount: S.optional(S.Number),
          classifiableSizeInBytes: S.optional(S.Number),
          errorCode: S.optional(BucketMetadataErrorCode),
          errorMessage: S.optional(S.String),
          jobDetails: S.optional(JobDetails),
          lastAutomatedDiscoveryTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          objectCount: S.optional(S.Number),
          objectCountByEncryptionType: S.optional(ObjectCountByEncryptionType),
          sensitivityScore: S.optional(S.Number),
          sizeInBytes: S.optional(S.Number),
          sizeInBytesCompressed: S.optional(S.Number),
          unclassifiableObjectCount: S.optional(ObjectLevelStatistics),
          unclassifiableObjectSizeInBytes: S.optional(ObjectLevelStatistics),
        }),
      ).annotate({ identifier: "MatchingBucket" });
    case 5:
      return S.suspend(() => S.Struct({ matchingBucket: S.optional(MatchingBucket) })).annotate({
        identifier: "MatchingResource",
      });
    case 6:
      return S.Array(MatchingResource);
    case 7:
      return S.suspend(() =>
        S.Struct({
          matchingResources: S.optional(__listOfMatchingResource),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "SearchResourcesResponse" });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ignoreWords: S.optional(__listOf__string),
          keywords: S.optional(__listOf__string),
          maximumMatchDistance: S.optional(S.Number),
          regex: S.optional(S.String),
          sampleText: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/custom-data-identifiers/test" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "TestCustomDataIdentifierRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ matchCount: S.optional(S.Number) })).annotate({
        identifier: "TestCustomDataIdentifierResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: S.optional(__listOf__string).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          criteria: S.optional(AllowListCriteria),
          description: S.optional(S.String),
          id: S.String.pipe(T.HttpLabel("id")),
          name: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/allow-lists/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateAllowListRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          autoEnableOrganizationMembers: S.optional(AutoEnableMode),
          status: S.optional(AutomatedDiscoveryStatus),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/automated-discovery/configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAutomatedDiscoveryConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          jobStatus: S.optional(JobStatus),
        }).pipe(
          T.all(T.Http({ method: "PATCH", uri: "/jobs/{jobId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateClassificationJobRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "UpdateClassificationJobResponse",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          bucketNames: S.optional(__listOfS3BucketName),
          operation: S.optional(ClassificationScopeUpdateOperation),
        }),
      ).annotate({
        identifier: "S3ClassificationScopeExclusionUpdate",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ excludes: S.optional(S3ClassificationScopeExclusionUpdate) }),
      ).annotate({
        identifier: "S3ClassificationScopeUpdate",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          s3: S.optional(S3ClassificationScopeUpdate),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/classification-scopes/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateClassificationScopeRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(FindingsFilterAction),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          description: S.optional(S.String),
          findingCriteria: S.optional(FindingCriteria),
          id: S.String.pipe(T.HttpLabel("id")),
          name: S.optional(S.String),
          position: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/findingsfilters/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateFindingsFilterRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          findingPublishingFrequency: S.optional(FindingPublishingFrequency),
          status: S.optional(MacieStatus),
        }).pipe(T.all(T.Http({ method: "PATCH", uri: "/macie" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateMacieSessionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")), status: S.optional(MacieStatus) }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/macie/members/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateMemberSessionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ autoEnable: S.optional(S.Boolean) }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/admin/configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateOrganizationConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.optional(S.String).pipe(T.HttpQuery("resourceArn")),
          sensitivityScoreOverride: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/resource-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateResourceProfileRequest",
      });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), type: S.optional(DataIdentifierType) }),
      ).annotate({ identifier: "SuppressDataIdentifier" });
    case 1:
      return S.Array(SuppressDataIdentifier);
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.optional(S.String).pipe(T.HttpQuery("resourceArn")),
          suppressDataIdentifiers: S.optional(__listOfSuppressDataIdentifier),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/resource-profiles/detections" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateResourceProfileDetectionsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ retrievalMode: S.optional(RetrievalMode), roleName: S.optional(S.String) }),
      ).annotate({
        identifier: "UpdateRetrievalConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          configuration: S.optional(RevealConfiguration),
          retrievalConfiguration: S.optional(UpdateRetrievalConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/reveal-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateRevealConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          excludes: S.optional(SensitivityInspectionTemplateExcludes),
          id: S.String.pipe(T.HttpLabel("id")),
          includes: S.optional(SensitivityInspectionTemplateIncludes),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/templates/sensitivity-inspections/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSensitivityInspectionTemplateRequest",
      });
  }
}
