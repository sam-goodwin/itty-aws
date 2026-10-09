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
export interface AcceptInvitationResponse {}
export type __listOf__string = string[];
const __listOf__string = /*@__PURE__*/ __L.at(__c0, 2);
export interface BatchGetCustomDataIdentifiersRequest {
  ids?: string[];
}
export type __timestampIso8601 = Date;
export interface BatchGetCustomDataIdentifierSummary {
  arn?: string;
  createdAt?: Date;
  deleted?: boolean;
  description?: string;
  id?: string;
  name?: string;
}
export type __listOfBatchGetCustomDataIdentifierSummary = BatchGetCustomDataIdentifierSummary[];
const __listOfBatchGetCustomDataIdentifierSummary = /*@__PURE__*/ __L.at(__c0, 5);
export interface BatchGetCustomDataIdentifiersResponse {
  customDataIdentifiers?: BatchGetCustomDataIdentifierSummary[];
  notFoundIdentifierIds?: string[];
}
export type AutomatedDiscoveryAccountStatus = "ENABLED" | "DISABLED" | (string & {});
export interface AutomatedDiscoveryAccountUpdate {
  accountId?: string;
  status?: AutomatedDiscoveryAccountStatus;
}
export type __listOfAutomatedDiscoveryAccountUpdate = AutomatedDiscoveryAccountUpdate[];
const __listOfAutomatedDiscoveryAccountUpdate = /*@__PURE__*/ __L.at(__c1, 0);
export interface BatchUpdateAutomatedDiscoveryAccountsRequest {
  accounts?: AutomatedDiscoveryAccountUpdate[];
}
export type AutomatedDiscoveryAccountUpdateErrorCode =
  | "ACCOUNT_PAUSED"
  | "ACCOUNT_NOT_FOUND"
  | (string & {});
export interface AutomatedDiscoveryAccountUpdateError {
  accountId?: string;
  errorCode?: AutomatedDiscoveryAccountUpdateErrorCode;
}
export type __listOfAutomatedDiscoveryAccountUpdateError = AutomatedDiscoveryAccountUpdateError[];
const __listOfAutomatedDiscoveryAccountUpdateError = /*@__PURE__*/ __L.at(__c1, 3);
export interface BatchUpdateAutomatedDiscoveryAccountsResponse {
  errors?: AutomatedDiscoveryAccountUpdateError[];
}
export type __stringMin1Max512PatternSS = string;
export type __stringMin3Max255PatternAZaZ093255 = string;
export type __stringMin1Max1024PatternSS = string;
export interface S3WordsList {
  bucketName?: string;
  objectKey?: string;
}
export interface AllowListCriteria {
  regex?: string;
  s3WordsList?: S3WordsList;
}
export type __stringMin1Max128Pattern = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateAllowListRequest {
  clientToken?: string;
  criteria?: AllowListCriteria;
  description?: string;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
export type __stringMin71Max89PatternArnAwsAwsCnAwsUsGovMacie2AZ19920D12AllowListAZ0922 = string;
export type __stringMin22Max22PatternAZ0922 = string;
export interface CreateAllowListResponse {
  arn?: string;
  id?: string;
}
export type JobType = "ONE_TIME" | "SCHEDULED" | (string & {});
export type ManagedDataIdentifierSelector =
  | "ALL"
  | "EXCLUDE"
  | "INCLUDE"
  | "NONE"
  | "RECOMMENDED"
  | (string & {});
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
export type SimpleCriterionKeyForJob =
  | "ACCOUNT_ID"
  | "S3_BUCKET_NAME"
  | "S3_BUCKET_EFFECTIVE_PERMISSION"
  | "S3_BUCKET_SHARED_ACCESS"
  | (string & {});
export interface SimpleCriterionForJob {
  comparator?: JobComparator;
  key?: SimpleCriterionKeyForJob;
  values?: string[];
}
export interface TagCriterionPairForJob {
  key?: string;
  value?: string;
}
export type __listOfTagCriterionPairForJob = TagCriterionPairForJob[];
const __listOfTagCriterionPairForJob = /*@__PURE__*/ __L.at(__c2, 4);
export interface TagCriterionForJob {
  comparator?: JobComparator;
  tagValues?: TagCriterionPairForJob[];
}
export interface CriteriaForJob {
  simpleCriterion?: SimpleCriterionForJob;
  tagCriterion?: TagCriterionForJob;
}
export type __listOfCriteriaForJob = CriteriaForJob[];
const __listOfCriteriaForJob = /*@__PURE__*/ __L.at(__c2, 7);
export interface CriteriaBlockForJob {
  and?: CriteriaForJob[];
}
export interface S3BucketCriteriaForJob {
  excludes?: CriteriaBlockForJob;
  includes?: CriteriaBlockForJob;
}
export interface S3BucketDefinitionForJob {
  accountId?: string;
  buckets?: string[];
}
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
export interface TagValuePair {
  key?: string;
  value?: string;
}
export type __listOfTagValuePair = TagValuePair[];
const __listOfTagValuePair =
  __listOfTagCriterionPairForJob as any as S.Schema<__listOfTagValuePair>;
export type TagTarget = "S3_OBJECT" | (string & {});
export interface TagScopeTerm {
  comparator?: JobComparator;
  key?: string;
  tagValues?: TagValuePair[];
  target?: TagTarget;
}
export interface JobScopeTerm {
  simpleScopeTerm?: SimpleScopeTerm;
  tagScopeTerm?: TagScopeTerm;
}
export type __listOfJobScopeTerm = JobScopeTerm[];
const __listOfJobScopeTerm = /*@__PURE__*/ __L.at(__c3, 6);
export interface JobScopingBlock {
  and?: JobScopeTerm[];
}
export interface Scoping {
  excludes?: JobScopingBlock;
  includes?: JobScopingBlock;
}
export interface S3JobDefinition {
  bucketCriteria?: S3BucketCriteriaForJob;
  bucketDefinitions?: S3BucketDefinitionForJob[];
  scoping?: Scoping;
}
export interface DailySchedule {}
export interface MonthlySchedule {
  dayOfMonth?: number;
}
export type DayOfWeek =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | (string & {});
export interface WeeklySchedule {
  dayOfWeek?: DayOfWeek;
}
export interface JobScheduleFrequency {
  dailySchedule?: DailySchedule;
  monthlySchedule?: MonthlySchedule;
  weeklySchedule?: WeeklySchedule;
}
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
export interface CreateClassificationJobResponse {
  jobArn?: string;
  jobId?: string;
}
export type DataIdentifierSeverity = "LOW" | "MEDIUM" | "HIGH" | (string & {});
export interface SeverityLevel {
  occurrencesThreshold?: number;
  severity?: DataIdentifierSeverity;
}
export type SeverityLevelList = SeverityLevel[];
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
export interface CreateCustomDataIdentifierResponse {
  customDataIdentifierId?: string;
}
export type FindingsFilterAction = "ARCHIVE" | "NOOP" | (string & {});
export interface CriterionAdditionalProperties {
  eq?: string[];
  eqExactMatch?: string[];
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
  neq?: string[];
}
export type Criterion = { [key: string]: CriterionAdditionalProperties | undefined };
export interface FindingCriteria {
  criterion?: { [key: string]: CriterionAdditionalProperties | undefined };
}
export interface CreateFindingsFilterRequest {
  action?: FindingsFilterAction;
  clientToken?: string;
  description?: string;
  findingCriteria?: FindingCriteria;
  name?: string;
  position?: number;
  tags?: { [key: string]: string | undefined };
}
export interface CreateFindingsFilterResponse {
  arn?: string;
  id?: string;
}
export interface CreateInvitationsRequest {
  accountIds?: string[];
  disableEmailNotification?: boolean;
  message?: string;
}
export type ErrorCode = "ClientError" | "InternalError" | (string & {});
export interface UnprocessedAccount {
  accountId?: string;
  errorCode?: ErrorCode;
  errorMessage?: string;
}
export type __listOfUnprocessedAccount = UnprocessedAccount[];
const __listOfUnprocessedAccount = /*@__PURE__*/ __L.at(__c6, 2);
export interface CreateInvitationsResponse {
  unprocessedAccounts?: UnprocessedAccount[];
}
export interface AccountDetail {
  accountId?: string;
  email?: string;
}
export interface CreateMemberRequest {
  account?: AccountDetail;
  tags?: { [key: string]: string | undefined };
}
export interface CreateMemberResponse {
  arn?: string;
}
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
export type __listOfFindingType = FindingType[];
const __listOfFindingType = /*@__PURE__*/ __L.at(__c6, 7);
export interface CreateSampleFindingsRequest {
  findingTypes?: FindingType[];
}
export interface CreateSampleFindingsResponse {}
export interface DeclineInvitationsRequest {
  accountIds?: string[];
}
export interface DeclineInvitationsResponse {
  unprocessedAccounts?: UnprocessedAccount[];
}
export interface DeleteAllowListRequest {
  id: string;
  ignoreJobChecks?: string;
}
export interface DeleteAllowListResponse {}
export interface DeleteCustomDataIdentifierRequest {
  id: string;
}
export interface DeleteCustomDataIdentifierResponse {}
export interface DeleteFindingsFilterRequest {
  id: string;
}
export interface DeleteFindingsFilterResponse {}
export interface DeleteInvitationsRequest {
  accountIds?: string[];
}
export interface DeleteInvitationsResponse {
  unprocessedAccounts?: UnprocessedAccount[];
}
export interface DeleteMemberRequest {
  id: string;
}
export interface DeleteMemberResponse {}
export interface BucketCriteriaAdditionalProperties {
  eq?: string[];
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
  neq?: string[];
  prefix?: string;
}
export type BucketCriteria = { [key: string]: BucketCriteriaAdditionalProperties | undefined };
export type OrderBy = "ASC" | "DESC" | (string & {});
export interface BucketSortCriteria {
  attributeName?: string;
  orderBy?: OrderBy;
}
export interface DescribeBucketsRequest {
  criteria?: { [key: string]: BucketCriteriaAdditionalProperties | undefined };
  maxResults?: number;
  nextToken?: string;
  sortCriteria?: BucketSortCriteria;
}
export type AllowsUnencryptedObjectUploads = "TRUE" | "FALSE" | "UNKNOWN" | (string & {});
export type AutomatedDiscoveryMonitoringStatus = "MONITORED" | "NOT_MONITORED" | (string & {});
export type BucketMetadataErrorCode =
  | "ACCESS_DENIED"
  | "BUCKET_COUNT_EXCEEDS_QUOTA"
  | (string & {});
export type IsDefinedInJob = "TRUE" | "FALSE" | "UNKNOWN" | (string & {});
export type IsMonitoredByJob = "TRUE" | "FALSE" | "UNKNOWN" | (string & {});
export interface JobDetails {
  isDefinedInJob?: IsDefinedInJob;
  isMonitoredByJob?: IsMonitoredByJob;
  lastJobId?: string;
  lastJobRunTime?: Date;
}
export interface ObjectCountByEncryptionType {
  customerManaged?: number;
  kmsManaged?: number;
  s3Managed?: number;
  unencrypted?: number;
  unknown?: number;
}
export type EffectivePermission = "PUBLIC" | "NOT_PUBLIC" | "UNKNOWN" | (string & {});
export interface BlockPublicAccess {
  blockPublicAcls?: boolean;
  blockPublicPolicy?: boolean;
  ignorePublicAcls?: boolean;
  restrictPublicBuckets?: boolean;
}
export interface AccountLevelPermissions {
  blockPublicAccess?: BlockPublicAccess;
}
export interface AccessControlList {
  allowsPublicReadAccess?: boolean;
  allowsPublicWriteAccess?: boolean;
}
export interface BucketPolicy {
  allowsPublicReadAccess?: boolean;
  allowsPublicWriteAccess?: boolean;
}
export interface BucketLevelPermissions {
  accessControlList?: AccessControlList;
  blockPublicAccess?: BlockPublicAccess;
  bucketPolicy?: BucketPolicy;
}
export interface BucketPermissionConfiguration {
  accountLevelPermissions?: AccountLevelPermissions;
  bucketLevelPermissions?: BucketLevelPermissions;
}
export interface BucketPublicAccess {
  effectivePermission?: EffectivePermission;
  permissionConfiguration?: BucketPermissionConfiguration;
}
export interface ReplicationDetails {
  replicated?: boolean;
  replicatedExternally?: boolean;
  replicationAccounts?: string[];
}
export type Type = "NONE" | "AES256" | "aws:kms" | "aws:kms:dsse" | (string & {});
export interface BucketServerSideEncryption {
  kmsMasterKeyId?: string;
  type?: Type;
}
export type SharedAccess = "EXTERNAL" | "INTERNAL" | "NOT_SHARED" | "UNKNOWN" | (string & {});
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
export type __listOfBucketMetadata = BucketMetadata[];
const __listOfBucketMetadata = /*@__PURE__*/ __L.at(__c10, 0);
export interface DescribeBucketsResponse {
  buckets?: BucketMetadata[];
  nextToken?: string;
}
export interface DescribeClassificationJobRequest {
  jobId: string;
}
export type JobStatus =
  | "RUNNING"
  | "PAUSED"
  | "CANCELLED"
  | "COMPLETE"
  | "IDLE"
  | "USER_PAUSED"
  | (string & {});
export type LastRunErrorStatusCode = "NONE" | "ERROR" | (string & {});
export interface LastRunErrorStatus {
  code?: LastRunErrorStatusCode;
}
export interface Statistics {
  approximateNumberOfObjectsToProcess?: number;
  numberOfRuns?: number;
}
export interface UserPausedDetails {
  jobExpiresAt?: Date;
  jobImminentExpirationHealthEventArn?: string;
  jobPausedAt?: Date;
}
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
export interface DescribeOrganizationConfigurationRequest {}
export interface DescribeOrganizationConfigurationResponse {
  autoEnable?: boolean;
  maxAccountLimitReached?: boolean;
}
export interface DisableMacieRequest {}
export interface DisableMacieResponse {}
export interface DisableOrganizationAdminAccountRequest {
  adminAccountId?: string;
}
export interface DisableOrganizationAdminAccountResponse {}
export interface DisassociateFromAdministratorAccountRequest {}
export interface DisassociateFromAdministratorAccountResponse {}
export interface DisassociateFromMasterAccountRequest {}
export interface DisassociateFromMasterAccountResponse {}
export interface DisassociateMemberRequest {
  id: string;
}
export interface DisassociateMemberResponse {}
export type FindingPublishingFrequency =
  | "FIFTEEN_MINUTES"
  | "ONE_HOUR"
  | "SIX_HOURS"
  | (string & {});
export type MacieStatus = "PAUSED" | "ENABLED" | (string & {});
export interface EnableMacieRequest {
  clientToken?: string;
  findingPublishingFrequency?: FindingPublishingFrequency;
  status?: MacieStatus;
}
export interface EnableMacieResponse {}
export interface EnableOrganizationAdminAccountRequest {
  adminAccountId?: string;
  clientToken?: string;
}
export interface EnableOrganizationAdminAccountResponse {}
export interface GetAdministratorAccountRequest {}
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
export interface Invitation {
  accountId?: string;
  invitationId?: string;
  invitedAt?: Date;
  relationshipStatus?: RelationshipStatus;
}
export interface GetAdministratorAccountResponse {
  administrator?: Invitation;
}
export interface GetAllowListRequest {
  id: string;
}
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
export interface AllowListStatus {
  code?: AllowListStatusCode;
  description?: string;
}
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
export interface GetAutomatedDiscoveryConfigurationRequest {}
export type AutoEnableMode = "ALL" | "NEW" | "NONE" | (string & {});
export type ClassificationScopeId = string;
export type SensitivityInspectionTemplateId = string;
export type AutomatedDiscoveryStatus = "ENABLED" | "DISABLED" | (string & {});
export interface GetAutomatedDiscoveryConfigurationResponse {
  autoEnableOrganizationMembers?: AutoEnableMode;
  classificationScopeId?: string;
  disabledAt?: Date;
  firstEnabledAt?: Date;
  lastUpdatedAt?: Date;
  sensitivityInspectionTemplateId?: string;
  status?: AutomatedDiscoveryStatus;
}
export interface GetBucketStatisticsRequest {
  accountId?: string;
}
export interface BucketCountByEffectivePermission {
  publiclyAccessible?: number;
  publiclyReadable?: number;
  publiclyWritable?: number;
  unknown?: number;
}
export interface BucketCountByEncryptionType {
  kmsManaged?: number;
  s3Managed?: number;
  unencrypted?: number;
  unknown?: number;
}
export interface BucketCountPolicyAllowsUnencryptedObjectUploads {
  allowsUnencryptedObjectUploads?: number;
  deniesUnencryptedObjectUploads?: number;
  unknown?: number;
}
export interface BucketCountBySharedAccessType {
  external?: number;
  internal?: number;
  notShared?: number;
  unknown?: number;
}
export interface SensitivityAggregations {
  classifiableSizeInBytes?: number;
  publiclyAccessibleCount?: number;
  totalCount?: number;
  totalSizeInBytes?: number;
}
export interface BucketStatisticsBySensitivity {
  classificationError?: SensitivityAggregations;
  notClassified?: SensitivityAggregations;
  notSensitive?: SensitivityAggregations;
  sensitive?: SensitivityAggregations;
}
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
export interface GetClassificationExportConfigurationRequest {}
export interface S3Destination {
  bucketName?: string;
  expectedBucketOwner?: string;
  keyPrefix?: string;
  kmsKeyArn?: string;
}
export interface ClassificationExportConfiguration {
  s3Destination?: S3Destination;
}
export interface GetClassificationExportConfigurationResponse {
  configuration?: ClassificationExportConfiguration & {
    s3Destination: S3Destination & { bucketName: string; kmsKeyArn: string };
  };
}
export interface GetClassificationScopeRequest {
  id: string;
}
export type ClassificationScopeName = string;
export type S3BucketName = string;
export type __listOfS3BucketName = string[];
const __listOfS3BucketName = __listOf__string as any as S.Schema<__listOfS3BucketName>;
export interface S3ClassificationScopeExclusion {
  bucketNames?: string[];
}
export interface S3ClassificationScope {
  excludes?: S3ClassificationScopeExclusion;
}
export interface GetClassificationScopeResponse {
  id?: string;
  name?: string;
  s3?: S3ClassificationScope & {
    excludes: S3ClassificationScopeExclusion & { bucketNames: __listOfS3BucketName };
  };
}
export interface GetCustomDataIdentifierRequest {
  id: string;
}
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
export interface SortCriteria {
  attributeName?: string;
  orderBy?: OrderBy;
}
export interface GetFindingsRequest {
  findingIds?: string[];
  sortCriteria?: SortCriteria;
}
export type FindingCategory = "CLASSIFICATION" | "POLICY" | (string & {});
export type OriginType =
  | "SENSITIVE_DATA_DISCOVERY_JOB"
  | "AUTOMATED_SENSITIVE_DATA_DISCOVERY"
  | (string & {});
export interface Cell {
  cellReference?: string;
  column?: number;
  columnName?: string;
  row?: number;
}
export type Cells = Cell[];
export interface Range {
  end?: number;
  start?: number;
  startColumn?: number;
}
export type Ranges = Range[];
export interface Page {
  lineRange?: Range;
  offsetRange?: Range;
  pageNumber?: number;
}
export type Pages = Page[];
export interface Record {
  jsonPath?: string;
  recordIndex?: number;
}
export type Records = Record[];
export interface Occurrences {
  cells?: Cell[];
  lineRanges?: Range[];
  offsetRanges?: Range[];
  pages?: Page[];
  records?: Record[];
}
export interface CustomDetection {
  arn?: string;
  count?: number;
  name?: string;
  occurrences?: Occurrences;
}
export type CustomDetections = CustomDetection[];
export interface CustomDataIdentifiers {
  detections?: CustomDetection[];
  totalCount?: number;
}
export type SensitiveDataItemCategory =
  | "FINANCIAL_INFORMATION"
  | "PERSONAL_INFORMATION"
  | "CREDENTIALS"
  | "CUSTOM_IDENTIFIER"
  | (string & {});
export interface DefaultDetection {
  count?: number;
  occurrences?: Occurrences;
  type?: string;
}
export type DefaultDetections = DefaultDetection[];
export interface SensitiveDataItem {
  category?: SensitiveDataItemCategory;
  detections?: DefaultDetection[];
  totalCount?: number;
}
export type SensitiveData = SensitiveDataItem[];
export interface ClassificationResultStatus {
  code?: string;
  reason?: string;
}
export interface ClassificationResult {
  additionalOccurrences?: boolean;
  customDataIdentifiers?: CustomDataIdentifiers;
  mimeType?: string;
  sensitiveData?: SensitiveDataItem[];
  sizeClassified?: number;
  status?: ClassificationResultStatus;
}
export interface ClassificationDetails {
  detailedResultsLocation?: string;
  jobArn?: string;
  jobId?: string;
  originType?: OriginType;
  result?: ClassificationResult;
}
export type FindingActionType = "AWS_API_CALL" | (string & {});
export interface ApiCallDetails {
  api?: string;
  apiServiceName?: string;
  firstSeen?: Date;
  lastSeen?: Date;
}
export interface FindingAction {
  actionType?: FindingActionType;
  apiCallDetails?: ApiCallDetails;
}
export interface DomainDetails {
  domainName?: string;
}
export interface IpCity {
  name?: string;
}
export interface IpCountry {
  code?: string;
  name?: string;
}
export interface IpGeoLocation {
  lat?: number;
  lon?: number;
}
export interface IpOwner {
  asn?: string;
  asnOrg?: string;
  isp?: string;
  org?: string;
}
export interface IpAddressDetails {
  ipAddressV4?: string;
  ipCity?: IpCity;
  ipCountry?: IpCountry;
  ipGeoLocation?: IpGeoLocation;
  ipOwner?: IpOwner;
}
export interface SessionContextAttributes {
  creationDate?: Date;
  mfaAuthenticated?: boolean;
}
export interface SessionIssuer {
  accountId?: string;
  arn?: string;
  principalId?: string;
  type?: string;
  userName?: string;
}
export interface SessionContext {
  attributes?: SessionContextAttributes;
  sessionIssuer?: SessionIssuer;
}
export interface AssumedRole {
  accessKeyId?: string;
  accountId?: string;
  arn?: string;
  principalId?: string;
  sessionContext?: SessionContext;
}
export interface AwsAccount {
  accountId?: string;
  principalId?: string;
}
export interface AwsService {
  invokedBy?: string;
}
export interface FederatedUser {
  accessKeyId?: string;
  accountId?: string;
  arn?: string;
  principalId?: string;
  sessionContext?: SessionContext;
}
export interface IamUser {
  accountId?: string;
  arn?: string;
  principalId?: string;
  userName?: string;
}
export interface UserIdentityRoot {
  accountId?: string;
  arn?: string;
  principalId?: string;
}
export type UserIdentityType =
  | "AssumedRole"
  | "IAMUser"
  | "FederatedUser"
  | "Root"
  | "AWSAccount"
  | "AWSService"
  | (string & {});
export interface UserIdentity {
  assumedRole?: AssumedRole;
  awsAccount?: AwsAccount;
  awsService?: AwsService;
  federatedUser?: FederatedUser;
  iamUser?: IamUser;
  root?: UserIdentityRoot;
  type?: UserIdentityType;
}
export interface FindingActor {
  domainDetails?: DomainDetails;
  ipAddressDetails?: IpAddressDetails;
  userIdentity?: UserIdentity;
}
export interface PolicyDetails {
  action?: FindingAction;
  actor?: FindingActor;
}
export type EncryptionType =
  | "NONE"
  | "AES256"
  | "aws:kms"
  | "UNKNOWN"
  | "aws:kms:dsse"
  | (string & {});
export interface ServerSideEncryption {
  encryptionType?: EncryptionType;
  kmsMasterKeyId?: string;
}
export interface S3BucketOwner {
  displayName?: string;
  id?: string;
}
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
export interface ResourcesAffected {
  s3Bucket?: S3Bucket;
  s3Object?: S3Object;
}
export type SeverityDescription = "Low" | "Medium" | "High" | (string & {});
export interface Severity {
  description?: SeverityDescription;
  score?: number;
}
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
export type __listOfFinding = Finding[];
const __listOfFinding = /*@__PURE__*/ __L.at(__c21, 0);
export interface GetFindingsResponse {
  findings?: Finding[];
}
export interface GetFindingsFilterRequest {
  id: string;
}
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
export interface GetFindingsPublicationConfigurationRequest {}
export interface SecurityHubConfiguration {
  publishClassificationFindings?: boolean;
  publishPolicyFindings?: boolean;
}
export interface GetFindingsPublicationConfigurationResponse {
  securityHubConfiguration?: SecurityHubConfiguration & {
    publishClassificationFindings: boolean;
    publishPolicyFindings: boolean;
  };
}
export type GroupBy =
  | "resourcesAffected.s3Bucket.name"
  | "type"
  | "classificationDetails.jobId"
  | "severity.description"
  | (string & {});
export type FindingStatisticsSortAttributeName = "groupKey" | "count" | (string & {});
export interface FindingStatisticsSortCriteria {
  attributeName?: FindingStatisticsSortAttributeName;
  orderBy?: OrderBy;
}
export interface GetFindingStatisticsRequest {
  findingCriteria?: FindingCriteria;
  groupBy?: GroupBy;
  size?: number;
  sortCriteria?: FindingStatisticsSortCriteria;
}
export interface GroupCount {
  count?: number;
  groupKey?: string;
}
export type __listOfGroupCount = GroupCount[];
const __listOfGroupCount = /*@__PURE__*/ __L.at(__c22, 2);
export interface GetFindingStatisticsResponse {
  countsByGroup?: GroupCount[];
}
export interface GetInvitationsCountRequest {}
export interface GetInvitationsCountResponse {
  invitationsCount?: number;
}
export interface GetMacieSessionRequest {}
export interface GetMacieSessionResponse {
  createdAt?: Date;
  findingPublishingFrequency?: FindingPublishingFrequency;
  serviceRole?: string;
  status?: MacieStatus;
  updatedAt?: Date;
}
export interface GetMasterAccountRequest {}
export interface GetMasterAccountResponse {
  master?: Invitation;
}
export interface GetMemberRequest {
  id: string;
}
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
export interface GetResourceProfileRequest {
  resourceArn?: string;
}
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
export interface GetResourceProfileResponse {
  profileUpdatedAt?: Date;
  sensitivityScore?: number;
  sensitivityScoreOverridden?: boolean;
  statistics?: ResourceStatistics;
}
export interface GetRevealConfigurationRequest {}
export type __stringMin1Max2048 = string;
export type RevealStatus = "ENABLED" | "DISABLED" | (string & {});
export interface RevealConfiguration {
  kmsKeyId?: string;
  status?: RevealStatus;
}
export type RetrievalMode = "CALLER_CREDENTIALS" | "ASSUME_ROLE" | (string & {});
export type __stringMin1Max64PatternW = string;
export interface RetrievalConfiguration {
  externalId?: string;
  retrievalMode?: RetrievalMode;
  roleName?: string;
}
export interface GetRevealConfigurationResponse {
  configuration?: RevealConfiguration & { status: RevealStatus };
  retrievalConfiguration?: RetrievalConfiguration & { retrievalMode: RetrievalMode };
}
export interface GetSensitiveDataOccurrencesRequest {
  findingId: string;
}
export type __stringMin1Max128 = string;
export interface DetectedDataDetails {
  value?: string | redacted.Redacted<string>;
}
export type __listOfDetectedDataDetails = DetectedDataDetails[];
const __listOfDetectedDataDetails = /*@__PURE__*/ __L.at(__c24, 5);
export type SensitiveDataOccurrences = { [key: string]: DetectedDataDetails[] | undefined };
export type RevealRequestStatus = "SUCCESS" | "PROCESSING" | "ERROR" | (string & {});
export interface GetSensitiveDataOccurrencesResponse {
  error?: string;
  sensitiveDataOccurrences?: {
    [key: string]: (DetectedDataDetails & { value: __stringMin1Max128 })[] | undefined;
  };
  status?: RevealRequestStatus;
}
export interface GetSensitiveDataOccurrencesAvailabilityRequest {
  findingId: string;
}
export type AvailabilityCode = "AVAILABLE" | "UNAVAILABLE" | (string & {});
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
export interface GetSensitivityInspectionTemplateRequest {
  id: string;
}
export interface SensitivityInspectionTemplateExcludes {
  managedDataIdentifierIds?: string[];
}
export interface SensitivityInspectionTemplateIncludes {
  allowListIds?: string[];
  customDataIdentifierIds?: string[];
  managedDataIdentifierIds?: string[];
}
export interface GetSensitivityInspectionTemplateResponse {
  description?: string;
  excludes?: SensitivityInspectionTemplateExcludes;
  includes?: SensitivityInspectionTemplateIncludes;
  name?: string;
  sensitivityInspectionTemplateId?: string;
}
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
export type __listOfUsageStatisticsFilter = UsageStatisticsFilter[];
const __listOfUsageStatisticsFilter = /*@__PURE__*/ __L.at(__c25, 6);
export type UsageStatisticsSortKey =
  | "accountId"
  | "total"
  | "serviceLimitValue"
  | "freeTrialStartDate"
  | (string & {});
export interface UsageStatisticsSortBy {
  key?: UsageStatisticsSortKey;
  orderBy?: OrderBy;
}
export type TimeRange = "MONTH_TO_DATE" | "PAST_30_DAYS" | (string & {});
export interface GetUsageStatisticsRequest {
  filterBy?: UsageStatisticsFilter[];
  maxResults?: number;
  nextToken?: string;
  sortBy?: UsageStatisticsSortBy;
  timeRange?: TimeRange;
}
export type Currency = "USD" | (string & {});
export type Unit = "TERABYTES" | (string & {});
export interface ServiceLimit {
  isServiceLimited?: boolean;
  unit?: Unit;
  value?: number;
}
export type UsageType =
  | "DATA_INVENTORY_EVALUATION"
  | "SENSITIVE_DATA_DISCOVERY"
  | "AUTOMATED_SENSITIVE_DATA_DISCOVERY"
  | "AUTOMATED_OBJECT_MONITORING"
  | (string & {});
export interface UsageByAccount {
  currency?: Currency;
  estimatedCost?: string;
  serviceLimit?: ServiceLimit;
  type?: UsageType;
}
export type __listOfUsageByAccount = UsageByAccount[];
const __listOfUsageByAccount = /*@__PURE__*/ __L.at(__c26, 3);
export interface UsageRecord {
  accountId?: string;
  automatedDiscoveryFreeTrialStartDate?: Date;
  freeTrialStartDate?: Date;
  usage?: UsageByAccount[];
}
export type __listOfUsageRecord = UsageRecord[];
const __listOfUsageRecord = /*@__PURE__*/ __L.at(__c26, 5);
export interface GetUsageStatisticsResponse {
  nextToken?: string;
  records?: UsageRecord[];
  timeRange?: TimeRange;
}
export interface GetUsageTotalsRequest {
  timeRange?: string;
}
export interface UsageTotal {
  currency?: Currency;
  estimatedCost?: string;
  type?: UsageType;
}
export type __listOfUsageTotal = UsageTotal[];
const __listOfUsageTotal = /*@__PURE__*/ __L.at(__c27, 1);
export interface GetUsageTotalsResponse {
  timeRange?: TimeRange;
  usageTotals?: UsageTotal[];
}
export type MaxResults = number;
export interface ListAllowListsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface AllowListSummary {
  arn?: string;
  createdAt?: Date;
  description?: string;
  id?: string;
  name?: string;
  updatedAt?: Date;
}
export type __listOfAllowListSummary = AllowListSummary[];
const __listOfAllowListSummary = /*@__PURE__*/ __L.at(__c27, 5);
export interface ListAllowListsResponse {
  allowLists?: AllowListSummary[];
  nextToken?: string;
}
export interface ListAutomatedDiscoveryAccountsRequest {
  accountIds?: string[];
  maxResults?: number;
  nextToken?: string;
}
export interface AutomatedDiscoveryAccount {
  accountId?: string;
  status?: AutomatedDiscoveryAccountStatus;
}
export type __listOfAutomatedDiscoveryAccount = AutomatedDiscoveryAccount[];
const __listOfAutomatedDiscoveryAccount = /*@__PURE__*/ __L.at(__c28, 0);
export interface ListAutomatedDiscoveryAccountsResponse {
  items?: AutomatedDiscoveryAccount[];
  nextToken?: string;
}
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
export type ListJobsSortAttributeName =
  | "createdAt"
  | "jobStatus"
  | "name"
  | "jobType"
  | (string & {});
export interface ListJobsSortCriteria {
  attributeName?: ListJobsSortAttributeName;
  orderBy?: OrderBy;
}
export interface ListClassificationJobsRequest {
  filterCriteria?: ListJobsFilterCriteria;
  maxResults?: number;
  nextToken?: string;
  sortCriteria?: ListJobsSortCriteria;
}
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
export interface ListClassificationScopesRequest {
  name?: string;
  nextToken?: string;
}
export interface ClassificationScopeSummary {
  id?: string;
  name?: string;
}
export type __listOfClassificationScopeSummary = ClassificationScopeSummary[];
const __listOfClassificationScopeSummary = /*@__PURE__*/ __L.at(__c29, 2);
export type NextToken = string;
export interface ListClassificationScopesResponse {
  classificationScopes?: ClassificationScopeSummary[];
  nextToken?: string;
}
export interface ListCustomDataIdentifiersRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface CustomDataIdentifierSummary {
  arn?: string;
  createdAt?: Date;
  description?: string;
  id?: string;
  name?: string;
}
export type __listOfCustomDataIdentifierSummary = CustomDataIdentifierSummary[];
const __listOfCustomDataIdentifierSummary = /*@__PURE__*/ __L.at(__c29, 6);
export interface ListCustomDataIdentifiersResponse {
  items?: CustomDataIdentifierSummary[];
  nextToken?: string;
}
export interface ListFindingsRequest {
  findingCriteria?: FindingCriteria;
  maxResults?: number;
  nextToken?: string;
  sortCriteria?: SortCriteria;
}
export interface ListFindingsResponse {
  findingIds?: string[];
  nextToken?: string;
}
export interface ListFindingsFiltersRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface FindingsFilterListItem {
  action?: FindingsFilterAction;
  arn?: string;
  id?: string;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
export type __listOfFindingsFilterListItem = FindingsFilterListItem[];
const __listOfFindingsFilterListItem = /*@__PURE__*/ __L.at(__c30, 4);
export interface ListFindingsFiltersResponse {
  findingsFilterListItems?: FindingsFilterListItem[];
  nextToken?: string;
}
export interface ListInvitationsRequest {
  maxResults?: number;
  nextToken?: string;
}
export type __listOfInvitation = Invitation[];
const __listOfInvitation = /*@__PURE__*/ __L.at(__c30, 7);
export interface ListInvitationsResponse {
  invitations?: Invitation[];
  nextToken?: string;
}
export interface ListManagedDataIdentifiersRequest {
  nextToken?: string;
}
export interface ManagedDataIdentifierSummary {
  category?: SensitiveDataItemCategory;
  id?: string;
}
export type __listOfManagedDataIdentifierSummary = ManagedDataIdentifierSummary[];
const __listOfManagedDataIdentifierSummary = /*@__PURE__*/ __L.at(__c31, 3);
export interface ListManagedDataIdentifiersResponse {
  items?: ManagedDataIdentifierSummary[];
  nextToken?: string;
}
export interface ListMembersRequest {
  maxResults?: number;
  nextToken?: string;
  onlyAssociated?: string;
}
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
export type __listOfMember = Member[];
const __listOfMember = /*@__PURE__*/ __L.at(__c31, 6);
export interface ListMembersResponse {
  members?: Member[];
  nextToken?: string;
}
export interface ListOrganizationAdminAccountsRequest {
  maxResults?: number;
  nextToken?: string;
}
export type AdminStatus = "ENABLED" | "DISABLING_IN_PROGRESS" | (string & {});
export interface AdminAccount {
  accountId?: string;
  status?: AdminStatus;
}
export type __listOfAdminAccount = AdminAccount[];
const __listOfAdminAccount = /*@__PURE__*/ __L.at(__c32, 2);
export interface ListOrganizationAdminAccountsResponse {
  adminAccounts?: AdminAccount[];
  nextToken?: string;
}
export interface ListResourceProfileArtifactsRequest {
  nextToken?: string;
  resourceArn?: string;
}
export interface ResourceProfileArtifact {
  arn?: string;
  classificationResultStatus?: string;
  sensitive?: boolean;
}
export type __listOfResourceProfileArtifact = ResourceProfileArtifact[];
const __listOfResourceProfileArtifact = /*@__PURE__*/ __L.at(__c32, 6);
export interface ListResourceProfileArtifactsResponse {
  artifacts?: (ResourceProfileArtifact & { arn: string; classificationResultStatus: string })[];
  nextToken?: string;
}
export interface ListResourceProfileDetectionsRequest {
  maxResults?: number;
  nextToken?: string;
  resourceArn?: string;
}
export type DataIdentifierType = "CUSTOM" | "MANAGED" | (string & {});
export interface Detection {
  arn?: string;
  count?: number;
  id?: string;
  name?: string;
  suppressed?: boolean;
  type?: DataIdentifierType;
}
export type __listOfDetection = Detection[];
const __listOfDetection = /*@__PURE__*/ __L.at(__c33, 2);
export interface ListResourceProfileDetectionsResponse {
  detections?: Detection[];
  nextToken?: string;
}
export interface ListSensitivityInspectionTemplatesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface SensitivityInspectionTemplatesEntry {
  id?: string;
  name?: string;
}
export type __listOfSensitivityInspectionTemplatesEntry = SensitivityInspectionTemplatesEntry[];
const __listOfSensitivityInspectionTemplatesEntry = /*@__PURE__*/ __L.at(__c33, 5);
export interface ListSensitivityInspectionTemplatesResponse {
  nextToken?: string;
  sensitivityInspectionTemplates?: SensitivityInspectionTemplatesEntry[];
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface PutClassificationExportConfigurationRequest {
  configuration?: ClassificationExportConfiguration;
}
export interface PutClassificationExportConfigurationResponse {
  configuration?: ClassificationExportConfiguration & {
    s3Destination: S3Destination & { bucketName: string; kmsKeyArn: string };
  };
}
export interface PutFindingsPublicationConfigurationRequest {
  clientToken?: string;
  securityHubConfiguration?: SecurityHubConfiguration;
}
export interface PutFindingsPublicationConfigurationResponse {}
export type SearchResourcesComparator = "EQ" | "NE" | (string & {});
export type SearchResourcesSimpleCriterionKey =
  | "ACCOUNT_ID"
  | "S3_BUCKET_NAME"
  | "S3_BUCKET_EFFECTIVE_PERMISSION"
  | "S3_BUCKET_SHARED_ACCESS"
  | "AUTOMATED_DISCOVERY_MONITORING_STATUS"
  | (string & {});
export interface SearchResourcesSimpleCriterion {
  comparator?: SearchResourcesComparator;
  key?: SearchResourcesSimpleCriterionKey;
  values?: string[];
}
export interface SearchResourcesTagCriterionPair {
  key?: string;
  value?: string;
}
export type __listOfSearchResourcesTagCriterionPair = SearchResourcesTagCriterionPair[];
const __listOfSearchResourcesTagCriterionPair = /*@__PURE__*/ __L.at(__c34, 5);
export interface SearchResourcesTagCriterion {
  comparator?: SearchResourcesComparator;
  tagValues?: SearchResourcesTagCriterionPair[];
}
export interface SearchResourcesCriteria {
  simpleCriterion?: SearchResourcesSimpleCriterion;
  tagCriterion?: SearchResourcesTagCriterion;
}
export type __listOfSearchResourcesCriteria = SearchResourcesCriteria[];
const __listOfSearchResourcesCriteria = /*@__PURE__*/ __L.at(__c35, 0);
export interface SearchResourcesCriteriaBlock {
  and?: SearchResourcesCriteria[];
}
export interface SearchResourcesBucketCriteria {
  excludes?: SearchResourcesCriteriaBlock;
  includes?: SearchResourcesCriteriaBlock;
}
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
export interface SearchResourcesRequest {
  bucketCriteria?: SearchResourcesBucketCriteria;
  maxResults?: number;
  nextToken?: string;
  sortCriteria?: SearchResourcesSortCriteria;
}
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
export interface MatchingResource {
  matchingBucket?: MatchingBucket;
}
export type __listOfMatchingResource = MatchingResource[];
const __listOfMatchingResource = /*@__PURE__*/ __L.at(__c35, 6);
export interface SearchResourcesResponse {
  matchingResources?: MatchingResource[];
  nextToken?: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags?: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export interface TestCustomDataIdentifierRequest {
  ignoreWords?: string[];
  keywords?: string[];
  maximumMatchDistance?: number;
  regex?: string;
  sampleText?: string;
}
export interface TestCustomDataIdentifierResponse {
  matchCount?: number;
}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys?: string[];
}
export interface UntagResourceResponse {}
export interface UpdateAllowListRequest {
  criteria?: AllowListCriteria;
  description?: string;
  id: string;
  name?: string;
}
export interface UpdateAllowListResponse {
  arn?: string;
  id?: string;
}
export interface UpdateAutomatedDiscoveryConfigurationRequest {
  autoEnableOrganizationMembers?: AutoEnableMode;
  status?: AutomatedDiscoveryStatus;
}
export interface UpdateAutomatedDiscoveryConfigurationResponse {}
export interface UpdateClassificationJobRequest {
  jobId: string;
  jobStatus?: JobStatus;
}
export interface UpdateClassificationJobResponse {}
export type ClassificationScopeUpdateOperation = "ADD" | "REPLACE" | "REMOVE" | (string & {});
export interface S3ClassificationScopeExclusionUpdate {
  bucketNames?: string[];
  operation?: ClassificationScopeUpdateOperation;
}
export interface S3ClassificationScopeUpdate {
  excludes?: S3ClassificationScopeExclusionUpdate;
}
export interface UpdateClassificationScopeRequest {
  id: string;
  s3?: S3ClassificationScopeUpdate;
}
export interface UpdateClassificationScopeResponse {}
export interface UpdateFindingsFilterRequest {
  action?: FindingsFilterAction;
  clientToken?: string;
  description?: string;
  findingCriteria?: FindingCriteria;
  id: string;
  name?: string;
  position?: number;
}
export interface UpdateFindingsFilterResponse {
  arn?: string;
  id?: string;
}
export interface UpdateMacieSessionRequest {
  findingPublishingFrequency?: FindingPublishingFrequency;
  status?: MacieStatus;
}
export interface UpdateMacieSessionResponse {}
export interface UpdateMemberSessionRequest {
  id: string;
  status?: MacieStatus;
}
export interface UpdateMemberSessionResponse {}
export interface UpdateOrganizationConfigurationRequest {
  autoEnable?: boolean;
}
export interface UpdateOrganizationConfigurationResponse {}
export interface UpdateResourceProfileRequest {
  resourceArn?: string;
  sensitivityScoreOverride?: number;
}
export interface UpdateResourceProfileResponse {}
export interface SuppressDataIdentifier {
  id?: string;
  type?: DataIdentifierType;
}
export type __listOfSuppressDataIdentifier = SuppressDataIdentifier[];
const __listOfSuppressDataIdentifier = /*@__PURE__*/ __L.at(__c38, 1);
export interface UpdateResourceProfileDetectionsRequest {
  resourceArn?: string;
  suppressDataIdentifiers?: SuppressDataIdentifier[];
}
export interface UpdateResourceProfileDetectionsResponse {}
export interface UpdateRetrievalConfiguration {
  retrievalMode?: RetrievalMode;
  roleName?: string;
}
export interface UpdateRevealConfigurationRequest {
  configuration?: RevealConfiguration;
  retrievalConfiguration?: UpdateRetrievalConfiguration;
}
export interface UpdateRevealConfigurationResponse {
  configuration?: RevealConfiguration & { status: RevealStatus };
  retrievalConfiguration?: RetrievalConfiguration & { retrievalMode: RetrievalMode };
}
export interface UpdateSensitivityInspectionTemplateRequest {
  description?: string;
  excludes?: SensitivityInspectionTemplateExcludes;
  id: string;
  includes?: SensitivityInspectionTemplateIncludes;
}
export interface UpdateSensitivityInspectionTemplateResponse {}
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
  input: __S(0, __c0, 0) as any as S.Schema<AcceptInvitationRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<AcceptInvitationResponse>,
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
  input: __S(3, __c0, 3) as any as S.Schema<BatchGetCustomDataIdentifiersRequest>,
  output: __S(6, __c0, 6) as any as S.Schema<BatchGetCustomDataIdentifiersResponse>,
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
  input: __S(9, __c1, 1) as any as S.Schema<BatchUpdateAutomatedDiscoveryAccountsRequest>,
  output: __S(12, __c1, 4) as any as S.Schema<BatchUpdateAutomatedDiscoveryAccountsResponse>,
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
  input: __S(16, __c2, 0) as any as S.Schema<CreateAllowListRequest>,
  output: __S(17, __c2, 1) as any as S.Schema<CreateAllowListResponse>,
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
  input: __S(37, __c4, 5) as any as S.Schema<CreateClassificationJobRequest>,
  output: __S(38, __c4, 6) as any as S.Schema<CreateClassificationJobResponse>,
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
  input: __S(41, __c5, 1) as any as S.Schema<CreateCustomDataIdentifierRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<CreateCustomDataIdentifierResponse>,
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
  input: __S(46, __c5, 6) as any as S.Schema<CreateFindingsFilterRequest>,
  output: __S(47, __c5, 7) as any as S.Schema<CreateFindingsFilterResponse>,
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
  input: __S(48, __c6, 0) as any as S.Schema<CreateInvitationsRequest>,
  output: __S(51, __c6, 3) as any as S.Schema<CreateInvitationsResponse>,
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
  input: __S(53, __c6, 5) as any as S.Schema<CreateMemberRequest>,
  output: __S(54, __c6, 6) as any as S.Schema<CreateMemberResponse>,
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
  input: __S(56, __c7, 0) as any as S.Schema<CreateSampleFindingsRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<CreateSampleFindingsResponse>,
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
  input: __S(57, __c7, 1) as any as S.Schema<DeclineInvitationsRequest>,
  output: __S(51, __c6, 3) as any as S.Schema<DeclineInvitationsResponse>,
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
  input: __S(58, __c7, 2) as any as S.Schema<DeleteAllowListRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteAllowListResponse>,
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
  input: __S(59, __c7, 3) as any as S.Schema<DeleteCustomDataIdentifierRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<DeleteCustomDataIdentifierResponse>,
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
  input: __S(61, __c7, 5) as any as S.Schema<DeleteFindingsFilterRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteFindingsFilterResponse>,
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
  input: __S(62, __c7, 6) as any as S.Schema<DeleteInvitationsRequest>,
  output: __S(51, __c6, 3) as any as S.Schema<DeleteInvitationsResponse>,
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
  input: __S(63, __c7, 7) as any as S.Schema<DeleteMemberRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteMemberResponse>,
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
  input: __S(67, __c8, 3) as any as S.Schema<DescribeBucketsRequest>,
  output: __S(81, __c10, 1) as any as S.Schema<DescribeBucketsResponse>,
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
  input: __S(82, __c10, 2) as any as S.Schema<DescribeClassificationJobRequest>,
  output: __S(86, __c10, 6) as any as S.Schema<DescribeClassificationJobResponse>,
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
  input: __S(87, __c10, 7) as any as S.Schema<DescribeOrganizationConfigurationRequest>,
  output: __S(88, __c11, 0) as any as S.Schema<DescribeOrganizationConfigurationResponse>,
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
  input: __S(89, __c11, 1) as any as S.Schema<DisableMacieRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DisableMacieResponse>,
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
  input: __S(90, __c11, 2) as any as S.Schema<DisableOrganizationAdminAccountRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<DisableOrganizationAdminAccountResponse>,
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
  input: __S(91, __c11, 3) as any as S.Schema<DisassociateFromAdministratorAccountRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<DisassociateFromAdministratorAccountResponse>,
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
  input: __S(92, __c11, 4) as any as S.Schema<DisassociateFromMasterAccountRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<DisassociateFromMasterAccountResponse>,
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
  input: __S(93, __c11, 5) as any as S.Schema<DisassociateMemberRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DisassociateMemberResponse>,
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
  input: __S(94, __c11, 6) as any as S.Schema<EnableMacieRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<EnableMacieResponse>,
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
  input: __S(95, __c11, 7) as any as S.Schema<EnableOrganizationAdminAccountRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<EnableOrganizationAdminAccountResponse>,
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
  input: __S(96, __c12, 0) as any as S.Schema<GetAdministratorAccountRequest>,
  output: __S(98, __c12, 2) as any as S.Schema<GetAdministratorAccountResponse>,
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
  input: __S(99, __c12, 3) as any as S.Schema<GetAllowListRequest>,
  output: __S(101, __c12, 5) as any as S.Schema<GetAllowListResponse>,
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
  input: __S(102, __c12, 6) as any as S.Schema<GetAutomatedDiscoveryConfigurationRequest>,
  output: __S(103, __c12, 7) as any as S.Schema<GetAutomatedDiscoveryConfigurationResponse>,
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
  input: __S(104, __c13, 0) as any as S.Schema<GetBucketStatisticsRequest>,
  output: __S(111, __c13, 7) as any as S.Schema<GetBucketStatisticsResponse>,
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
  input: __S(112, __c14, 0) as any as S.Schema<GetClassificationExportConfigurationRequest>,
  output: __S(115, __c14, 3) as any as S.Schema<GetClassificationExportConfigurationResponse>,
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
  input: __S(116, __c14, 4) as any as S.Schema<GetClassificationScopeRequest>,
  output: __S(119, __c14, 7) as any as S.Schema<GetClassificationScopeResponse>,
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
  input: __S(120, __c15, 0) as any as S.Schema<GetCustomDataIdentifierRequest>,
  output: __S(121, __c15, 1) as any as S.Schema<GetCustomDataIdentifierResponse>,
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
  input: __S(122, __c15, 2) as any as S.Schema<GetFindingsRequest>,
  output: __S(169, __c21, 1) as any as S.Schema<GetFindingsResponse>,
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
  input: __S(170, __c21, 2) as any as S.Schema<GetFindingsFilterRequest>,
  output: __S(171, __c21, 3) as any as S.Schema<GetFindingsFilterResponse>,
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
  input: __S(172, __c21, 4) as any as S.Schema<GetFindingsPublicationConfigurationRequest>,
  output: __S(174, __c21, 6) as any as S.Schema<GetFindingsPublicationConfigurationResponse>,
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
  input: __S(176, __c22, 0) as any as S.Schema<GetFindingStatisticsRequest>,
  output: __S(179, __c22, 3) as any as S.Schema<GetFindingStatisticsResponse>,
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
  input: __S(180, __c22, 4) as any as S.Schema<GetInvitationsCountRequest>,
  output: __S(181, __c22, 5) as any as S.Schema<GetInvitationsCountResponse>,
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
  input: __S(182, __c22, 6) as any as S.Schema<GetMacieSessionRequest>,
  output: __S(183, __c22, 7) as any as S.Schema<GetMacieSessionResponse>,
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
  input: __S(184, __c23, 0) as any as S.Schema<GetMasterAccountRequest>,
  output: __S(185, __c23, 1) as any as S.Schema<GetMasterAccountResponse>,
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
  input: __S(186, __c23, 2) as any as S.Schema<GetMemberRequest>,
  output: __S(187, __c23, 3) as any as S.Schema<GetMemberResponse>,
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
  input: __S(188, __c23, 4) as any as S.Schema<GetResourceProfileRequest>,
  output: __S(190, __c23, 6) as any as S.Schema<GetResourceProfileResponse>,
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
  input: __S(191, __c23, 7) as any as S.Schema<GetRevealConfigurationRequest>,
  output: __S(194, __c24, 2) as any as S.Schema<GetRevealConfigurationResponse>,
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
  input: __S(195, __c24, 3) as any as S.Schema<GetSensitiveDataOccurrencesRequest>,
  output: __S(199, __c24, 7) as any as S.Schema<GetSensitiveDataOccurrencesResponse>,
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
  input: __S(200, __c25, 0) as any as S.Schema<GetSensitiveDataOccurrencesAvailabilityRequest>,
  output: __S(201, __c25, 1) as any as S.Schema<GetSensitiveDataOccurrencesAvailabilityResponse>,
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
  input: __S(202, __c25, 2) as any as S.Schema<GetSensitivityInspectionTemplateRequest>,
  output: __S(205, __c25, 5) as any as S.Schema<GetSensitivityInspectionTemplateResponse>,
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
  input: __S(208, __c26, 0) as any as S.Schema<GetUsageStatisticsRequest>,
  output: __S(214, __c26, 6) as any as S.Schema<GetUsageStatisticsResponse>,
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
  input: __S(215, __c26, 7) as any as S.Schema<GetUsageTotalsRequest>,
  output: __S(218, __c27, 2) as any as S.Schema<GetUsageTotalsResponse>,
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
  input: __S(219, __c27, 3) as any as S.Schema<ListAllowListsRequest>,
  output: __S(222, __c27, 6) as any as S.Schema<ListAllowListsResponse>,
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
  input: __S(223, __c27, 7) as any as S.Schema<ListAutomatedDiscoveryAccountsRequest>,
  output: __S(225, __c28, 1) as any as S.Schema<ListAutomatedDiscoveryAccountsResponse>,
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
  input: __S(228, __c28, 4) as any as S.Schema<ListClassificationJobsRequest>,
  output: __S(231, __c28, 7) as any as S.Schema<ListClassificationJobsResponse>,
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
  input: __S(232, __c29, 0) as any as S.Schema<ListClassificationScopesRequest>,
  output: __S(235, __c29, 3) as any as S.Schema<ListClassificationScopesResponse>,
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
  input: __S(236, __c29, 4) as any as S.Schema<ListCustomDataIdentifiersRequest>,
  output: __S(239, __c29, 7) as any as S.Schema<ListCustomDataIdentifiersResponse>,
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
  input: __S(240, __c30, 0) as any as S.Schema<ListFindingsRequest>,
  output: __S(241, __c30, 1) as any as S.Schema<ListFindingsResponse>,
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
  input: __S(242, __c30, 2) as any as S.Schema<ListFindingsFiltersRequest>,
  output: __S(245, __c30, 5) as any as S.Schema<ListFindingsFiltersResponse>,
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
  input: __S(246, __c30, 6) as any as S.Schema<ListInvitationsRequest>,
  output: __S(248, __c31, 0) as any as S.Schema<ListInvitationsResponse>,
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
  input: __S(249, __c31, 1) as any as S.Schema<ListManagedDataIdentifiersRequest>,
  output: __S(252, __c31, 4) as any as S.Schema<ListManagedDataIdentifiersResponse>,
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
  input: __S(253, __c31, 5) as any as S.Schema<ListMembersRequest>,
  output: __S(255, __c31, 7) as any as S.Schema<ListMembersResponse>,
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
  input: __S(256, __c32, 0) as any as S.Schema<ListOrganizationAdminAccountsRequest>,
  output: __S(259, __c32, 3) as any as S.Schema<ListOrganizationAdminAccountsResponse>,
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
  input: __S(260, __c32, 4) as any as S.Schema<ListResourceProfileArtifactsRequest>,
  output: __S(263, __c32, 7) as any as S.Schema<ListResourceProfileArtifactsResponse>,
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
  input: __S(264, __c33, 0) as any as S.Schema<ListResourceProfileDetectionsRequest>,
  output: __S(267, __c33, 3) as any as S.Schema<ListResourceProfileDetectionsResponse>,
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
  input: __S(268, __c33, 4) as any as S.Schema<ListSensitivityInspectionTemplatesRequest>,
  output: __S(270, __c33, 6) as any as S.Schema<ListSensitivityInspectionTemplatesResponse>,
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
  input: __S(271, __c33, 7) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(272, __c34, 0) as any as S.Schema<ListTagsForResourceResponse>,
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
  input: __S(273, __c34, 1) as any as S.Schema<PutClassificationExportConfigurationRequest>,
  output: __S(115, __c14, 3) as any as S.Schema<PutClassificationExportConfigurationResponse>,
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
  input: __S(274, __c34, 2) as any as S.Schema<PutFindingsPublicationConfigurationRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<PutFindingsPublicationConfigurationResponse>,
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
  input: __S(283, __c35, 3) as any as S.Schema<SearchResourcesRequest>,
  output: __S(287, __c35, 7) as any as S.Schema<SearchResourcesResponse>,
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
  input: __S(288, __c36, 0) as any as S.Schema<TagResourceRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<TagResourceResponse>,
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
  input: __S(289, __c36, 1) as any as S.Schema<TestCustomDataIdentifierRequest>,
  output: __S(290, __c36, 2) as any as S.Schema<TestCustomDataIdentifierResponse>,
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
  input: __S(291, __c36, 3) as any as S.Schema<UntagResourceRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UntagResourceResponse>,
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
  input: __S(292, __c36, 4) as any as S.Schema<UpdateAllowListRequest>,
  output: __S(17, __c2, 1) as any as S.Schema<UpdateAllowListResponse>,
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
  input: __S(293, __c36, 5) as any as S.Schema<UpdateAutomatedDiscoveryConfigurationRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<UpdateAutomatedDiscoveryConfigurationResponse>,
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
  input: __S(294, __c36, 6) as any as S.Schema<UpdateClassificationJobRequest>,
  output: __S(295, __c36, 7) as any as S.Schema<UpdateClassificationJobResponse>,
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
  input: __S(298, __c37, 2) as any as S.Schema<UpdateClassificationScopeRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<UpdateClassificationScopeResponse>,
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
  input: __S(299, __c37, 3) as any as S.Schema<UpdateFindingsFilterRequest>,
  output: __S(47, __c5, 7) as any as S.Schema<UpdateFindingsFilterResponse>,
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
  input: __S(300, __c37, 4) as any as S.Schema<UpdateMacieSessionRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateMacieSessionResponse>,
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
  input: __S(301, __c37, 5) as any as S.Schema<UpdateMemberSessionRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateMemberSessionResponse>,
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
  input: __S(302, __c37, 6) as any as S.Schema<UpdateOrganizationConfigurationRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<UpdateOrganizationConfigurationResponse>,
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
  input: __S(303, __c37, 7) as any as S.Schema<UpdateResourceProfileRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<UpdateResourceProfileResponse>,
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
  input: __S(306, __c38, 2) as any as S.Schema<UpdateResourceProfileDetectionsRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<UpdateResourceProfileDetectionsResponse>,
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
  input: __S(308, __c38, 4) as any as S.Schema<UpdateRevealConfigurationRequest>,
  output: __S(194, __c24, 2) as any as S.Schema<UpdateRevealConfigurationResponse>,
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
  input: __S(309, __c38, 5) as any as S.Schema<UpdateSensitivityInspectionTemplateRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<UpdateSensitivityInspectionTemplateResponse>,
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
      return S.Array(__S(4, __c0, 4));
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
          status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AutomatedDiscoveryAccountUpdate",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7, __c0, 7));
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
          errorCode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AutomatedDiscoveryAccountUpdateError",
      });
    case 3:
      return S.Array(__S(10, __c1, 2));
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
        S.Struct({ regex: S.optional(S.String), s3WordsList: S.optional(__S(13, __c1, 5)) }),
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
          criteria: S.optional(__S(14, __c1, 6)),
          description: S.optional(S.String),
          name: S.optional(S.String),
          tags: S.optional(__S(15, __c1, 7)),
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
          comparator: S.optional(S.String),
          key: S.optional(S.String),
          values: S.optional(__listOf__string),
        }),
      ).annotate({ identifier: "SimpleCriterionForJob" });
    case 3:
      return S.suspend(() =>
        S.Struct({ key: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "TagCriterionPairForJob" });
    case 4:
      return S.Array(__S(19, __c2, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          comparator: S.optional(S.String),
          tagValues: S.optional(__listOfTagCriterionPairForJob),
        }),
      ).annotate({ identifier: "TagCriterionForJob" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          simpleCriterion: S.optional(__S(18, __c2, 2)),
          tagCriterion: S.optional(__S(21, __c2, 5)),
        }),
      ).annotate({ identifier: "CriteriaForJob" });
    case 7:
      return S.Array(__S(22, __c2, 6));
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
          excludes: S.optional(__S(24, __c3, 0)),
          includes: S.optional(__S(24, __c3, 0)),
        }),
      ).annotate({ identifier: "S3BucketCriteriaForJob" });
    case 2:
      return S.suspend(() =>
        S.Struct({ accountId: S.optional(S.String), buckets: S.optional(__listOf__string) }),
      ).annotate({ identifier: "S3BucketDefinitionForJob" });
    case 3:
      return S.Array(__S(26, __c3, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          comparator: S.optional(S.String),
          key: S.optional(S.String),
          tagValues: S.optional(__listOfTagValuePair),
          target: S.optional(S.String),
        }),
      ).annotate({ identifier: "TagScopeTerm" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          simpleScopeTerm: S.optional(__S(18, __c2, 2)),
          tagScopeTerm: S.optional(__S(28, __c3, 4)),
        }),
      ).annotate({ identifier: "JobScopeTerm" });
    case 6:
      return S.Array(__S(29, __c3, 5));
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
        S.Struct({
          excludes: S.optional(__S(31, __c3, 7)),
          includes: S.optional(__S(31, __c3, 7)),
        }),
      ).annotate({ identifier: "Scoping" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          bucketCriteria: S.optional(__S(25, __c3, 1)),
          bucketDefinitions: S.optional(__listOfS3BucketDefinitionForJob),
          scoping: S.optional(__S(32, __c4, 0)),
        }),
      ).annotate({ identifier: "S3JobDefinition" });
    case 2:
      return S.suspend(() => S.Struct({ dayOfMonth: S.optional(S.Number) })).annotate({
        identifier: "MonthlySchedule",
      });
    case 3:
      return S.suspend(() => S.Struct({ dayOfWeek: S.optional(S.String) })).annotate({
        identifier: "WeeklySchedule",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          dailySchedule: S.optional(__S(1, __c0, 1)),
          monthlySchedule: S.optional(__S(34, __c4, 2)),
          weeklySchedule: S.optional(__S(35, __c4, 3)),
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
          jobType: S.optional(S.String),
          managedDataIdentifierIds: S.optional(__listOf__string),
          managedDataIdentifierSelector: S.optional(S.String),
          name: S.optional(S.String),
          s3JobDefinition: S.optional(__S(33, __c4, 1)),
          samplingPercentage: S.optional(S.Number),
          scheduleFrequency: S.optional(__S(36, __c4, 4)),
          tags: S.optional(__S(15, __c1, 7)),
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
          severity: S.optional(S.String),
        }),
      ).annotate({ identifier: "SeverityLevel" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(39, __c4, 7));
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
          severityLevels: S.optional(__S(40, __c5, 0)),
          tags: S.optional(__S(15, __c1, 7)),
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
      return S.Record(S.String, /*@__PURE__*/ __S(43, __c5, 3).pipe(S.optional));
    case 5:
      return S.suspend(() => S.Struct({ criterion: S.optional(__S(44, __c5, 4)) })).annotate({
        identifier: "FindingCriteria",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          description: S.optional(S.String),
          findingCriteria: S.optional(__S(45, __c5, 5)),
          name: S.optional(S.String),
          position: S.optional(S.Number),
          tags: S.optional(__S(15, __c1, 7)),
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
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "UnprocessedAccount" });
    case 2:
      return S.Array(__S(49, __c6, 1));
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
        S.Struct({
          account: S.optional(__S(52, __c6, 4)),
          tags: S.optional(__S(15, __c1, 7)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/members" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateMemberRequest" });
    case 6:
      return S.suspend(() => S.Struct({ arn: S.optional(S.String) })).annotate({
        identifier: "CreateMemberResponse",
      });
    case 7:
      return S.Array(S.String);
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
      return S.Record(S.String, /*@__PURE__*/ __S(64, __c8, 0).pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({ attributeName: S.optional(S.String), orderBy: S.optional(S.String) }),
      ).annotate({ identifier: "BucketSortCriteria" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          criteria: S.optional(__S(65, __c8, 1)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          sortCriteria: S.optional(__S(66, __c8, 2)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/datasources/s3" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeBucketsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          isDefinedInJob: S.optional(S.String),
          isMonitoredByJob: S.optional(S.String),
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
        S.Struct({ blockPublicAccess: S.optional(__S(70, __c8, 6)) }),
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
          accessControlList: S.optional(__S(72, __c9, 0)),
          blockPublicAccess: S.optional(__S(70, __c8, 6)),
          bucketPolicy: S.optional(__S(72, __c9, 0)),
        }),
      ).annotate({ identifier: "BucketLevelPermissions" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          accountLevelPermissions: S.optional(__S(71, __c8, 7)),
          bucketLevelPermissions: S.optional(__S(73, __c9, 1)),
        }),
      ).annotate({
        identifier: "BucketPermissionConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          effectivePermission: S.optional(S.String),
          permissionConfiguration: S.optional(__S(74, __c9, 2)),
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
        S.Struct({ kmsMasterKeyId: S.optional(S.String), type: S.optional(S.String) }),
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
          allowsUnencryptedObjectUploads: S.optional(S.String),
          automatedDiscoveryMonitoringStatus: S.optional(S.String),
          bucketArn: S.optional(S.String),
          bucketCreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          bucketName: S.optional(S.String),
          classifiableObjectCount: S.optional(S.Number),
          classifiableSizeInBytes: S.optional(S.Number),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
          jobDetails: S.optional(__S(68, __c8, 4)),
          lastAutomatedDiscoveryTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          lastUpdated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          objectCount: S.optional(S.Number),
          objectCountByEncryptionType: S.optional(__S(69, __c8, 5)),
          publicAccess: S.optional(__S(75, __c9, 3)),
          region: S.optional(S.String),
          replicationDetails: S.optional(__S(76, __c9, 4)),
          sensitivityScore: S.optional(S.Number),
          serverSideEncryption: S.optional(__S(77, __c9, 5)),
          sharedAccess: S.optional(S.String),
          sizeInBytes: S.optional(S.Number),
          sizeInBytesCompressed: S.optional(S.Number),
          tags: S.optional(__listOfKeyValuePair),
          unclassifiableObjectCount: S.optional(__S(78, __c9, 6)),
          unclassifiableObjectSizeInBytes: S.optional(__S(78, __c9, 6)),
          versioning: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "BucketMetadata" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(79, __c9, 7));
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
      return S.suspend(() => S.Struct({ code: S.optional(S.String) })).annotate({
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
          jobStatus: S.optional(S.String),
          jobType: S.optional(S.String),
          lastRunErrorStatus: S.optional(__S(83, __c10, 3)),
          lastRunTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          managedDataIdentifierIds: S.optional(__listOf__string),
          managedDataIdentifierSelector: S.optional(S.String),
          name: S.optional(S.String),
          s3JobDefinition: S.optional(__S(33, __c4, 1)),
          samplingPercentage: S.optional(S.Number),
          scheduleFrequency: S.optional(__S(36, __c4, 4)),
          statistics: S.optional(__S(84, __c10, 4)),
          tags: S.optional(__S(15, __c1, 7)),
          userPausedDetails: S.optional(__S(85, __c10, 5)),
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
          findingPublishingFrequency: S.optional(S.String),
          status: S.optional(S.String),
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
          relationshipStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "Invitation" });
    case 2:
      return S.suspend(() => S.Struct({ administrator: S.optional(__S(97, __c12, 1)) })).annotate({
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
        S.Struct({ code: S.optional(S.String), description: S.optional(S.String) }),
      ).annotate({ identifier: "AllowListStatus" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          criteria: S.optional(__S(14, __c1, 6)),
          description: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(__S(100, __c12, 4)),
          tags: S.optional(__S(15, __c1, 7)),
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
          autoEnableOrganizationMembers: S.optional(S.String),
          classificationScopeId: S.optional(S.String),
          disabledAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          firstEnabledAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          sensitivityInspectionTemplateId: S.optional(S.String),
          status: S.optional(S.String),
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
          classificationError: S.optional(__S(109, __c13, 5)),
          notClassified: S.optional(__S(109, __c13, 5)),
          notSensitive: S.optional(__S(109, __c13, 5)),
          sensitive: S.optional(__S(109, __c13, 5)),
        }),
      ).annotate({
        identifier: "BucketStatisticsBySensitivity",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          bucketCount: S.optional(S.Number),
          bucketCountByEffectivePermission: S.optional(__S(105, __c13, 1)),
          bucketCountByEncryptionType: S.optional(__S(106, __c13, 2)),
          bucketCountByObjectEncryptionRequirement: S.optional(__S(107, __c13, 3)),
          bucketCountBySharedAccessType: S.optional(__S(108, __c13, 4)),
          bucketStatisticsBySensitivity: S.optional(__S(110, __c13, 6)),
          classifiableObjectCount: S.optional(S.Number),
          classifiableSizeInBytes: S.optional(S.Number),
          lastUpdated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          objectCount: S.optional(S.Number),
          sizeInBytes: S.optional(S.Number),
          sizeInBytesCompressed: S.optional(S.Number),
          unclassifiableObjectCount: S.optional(__S(78, __c9, 6)),
          unclassifiableObjectSizeInBytes: S.optional(__S(78, __c9, 6)),
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
      return S.suspend(() => S.Struct({ s3Destination: S.optional(__S(113, __c14, 1)) })).annotate({
        identifier: "ClassificationExportConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ configuration: S.optional(__S(114, __c14, 2)) })).annotate({
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
      return S.suspend(() => S.Struct({ excludes: S.optional(__S(117, __c14, 5)) })).annotate({
        identifier: "S3ClassificationScope",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          s3: S.optional(__S(118, __c14, 6)),
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
          severityLevels: S.optional(__S(40, __c5, 0)),
          tags: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({
        identifier: "GetCustomDataIdentifierResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          findingIds: S.optional(__listOf__string),
          sortCriteria: S.optional(__S(66, __c8, 2)),
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
      return S.Array(__S(123, __c15, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          end: S.optional(S.Number),
          start: S.optional(S.Number),
          startColumn: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Range" });
    case 6:
      return S.Array(__S(125, __c15, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          lineRange: S.optional(__S(125, __c15, 5)),
          offsetRange: S.optional(__S(125, __c15, 5)),
          pageNumber: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Page" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(127, __c15, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ jsonPath: S.optional(S.String), recordIndex: S.optional(S.Number) }),
      ).annotate({ identifier: "Record" });
    case 2:
      return S.Array(__S(129, __c16, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          cells: S.optional(__S(124, __c15, 4)),
          lineRanges: S.optional(__S(126, __c15, 6)),
          offsetRanges: S.optional(__S(126, __c15, 6)),
          pages: S.optional(__S(128, __c16, 0)),
          records: S.optional(__S(130, __c16, 2)),
        }),
      ).annotate({ identifier: "Occurrences" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          count: S.optional(S.Number),
          name: S.optional(S.String),
          occurrences: S.optional(__S(131, __c16, 3)),
        }),
      ).annotate({ identifier: "CustomDetection" });
    case 5:
      return S.Array(__S(132, __c16, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ detections: S.optional(__S(133, __c16, 5)), totalCount: S.optional(S.Number) }),
      ).annotate({ identifier: "CustomDataIdentifiers" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          count: S.optional(S.Number),
          occurrences: S.optional(__S(131, __c16, 3)),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "DefaultDetection" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(135, __c16, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          category: S.optional(S.String),
          detections: S.optional(__S(136, __c17, 0)),
          totalCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SensitiveDataItem" });
    case 2:
      return S.Array(__S(137, __c17, 1));
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
          customDataIdentifiers: S.optional(__S(134, __c16, 6)),
          mimeType: S.optional(S.String),
          sensitiveData: S.optional(__S(138, __c17, 2)),
          sizeClassified: S.optional(S.Number),
          status: S.optional(__S(139, __c17, 3)),
        }),
      ).annotate({ identifier: "ClassificationResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          detailedResultsLocation: S.optional(S.String),
          jobArn: S.optional(S.String),
          jobId: S.optional(S.String),
          originType: S.optional(S.String),
          result: S.optional(__S(140, __c17, 4)),
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
          actionType: S.optional(S.String),
          apiCallDetails: S.optional(__S(142, __c17, 6)),
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
          ipCity: S.optional(__S(145, __c18, 1)),
          ipCountry: S.optional(__S(146, __c18, 2)),
          ipGeoLocation: S.optional(__S(147, __c18, 3)),
          ipOwner: S.optional(__S(148, __c18, 4)),
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
          attributes: S.optional(__S(150, __c18, 6)),
          sessionIssuer: S.optional(__S(151, __c18, 7)),
        }),
      ).annotate({ identifier: "SessionContext" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          accessKeyId: S.optional(S.String),
          accountId: S.optional(S.String),
          arn: S.optional(S.String),
          principalId: S.optional(S.String),
          sessionContext: S.optional(__S(152, __c19, 0)),
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
          assumedRole: S.optional(__S(153, __c19, 1)),
          awsAccount: S.optional(__S(154, __c19, 2)),
          awsService: S.optional(__S(155, __c19, 3)),
          federatedUser: S.optional(__S(153, __c19, 1)),
          iamUser: S.optional(__S(156, __c19, 4)),
          root: S.optional(__S(157, __c19, 5)),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "UserIdentity" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainDetails: S.optional(__S(144, __c18, 0)),
          ipAddressDetails: S.optional(__S(149, __c18, 5)),
          userIdentity: S.optional(__S(158, __c19, 6)),
        }),
      ).annotate({ identifier: "FindingActor" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ action: S.optional(__S(143, __c17, 7)), actor: S.optional(__S(159, __c19, 7)) }),
      ).annotate({ identifier: "PolicyDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          encryptionType: S.optional(S.String),
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
          allowsUnencryptedObjectUploads: S.optional(S.String),
          arn: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          defaultServerSideEncryption: S.optional(__S(161, __c20, 1)),
          name: S.optional(S.String),
          owner: S.optional(__S(162, __c20, 2)),
          publicAccess: S.optional(__S(75, __c9, 3)),
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
          serverSideEncryption: S.optional(__S(161, __c20, 1)),
          size: S.optional(S.Number),
          storageClass: S.optional(S.String),
          tags: S.optional(KeyValuePairList),
          versionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3Object" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          s3Bucket: S.optional(__S(163, __c20, 3)),
          s3Object: S.optional(__S(164, __c20, 4)),
        }),
      ).annotate({ identifier: "ResourcesAffected" });
    case 6:
      return S.suspend(() =>
        S.Struct({ description: S.optional(S.String), score: S.optional(S.Number) }),
      ).annotate({ identifier: "Severity" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          archived: S.optional(S.Boolean),
          category: S.optional(S.String),
          classificationDetails: S.optional(__S(141, __c17, 5)),
          count: S.optional(S.Number),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(S.String),
          id: S.optional(S.String),
          partition: S.optional(S.String),
          policyDetails: S.optional(__S(160, __c20, 0)),
          region: S.optional(S.String),
          resourcesAffected: S.optional(__S(165, __c20, 5)),
          sample: S.optional(S.Boolean),
          schemaVersion: S.optional(S.String),
          severity: S.optional(__S(166, __c20, 6)),
          title: S.optional(S.String),
          type: S.optional(S.String),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "Finding" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(167, __c20, 7));
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
          action: S.optional(S.String),
          arn: S.optional(S.String),
          description: S.optional(S.String),
          findingCriteria: S.optional(__S(45, __c5, 5)),
          id: S.optional(S.String),
          name: S.optional(S.String),
          position: S.optional(S.Number),
          tags: S.optional(__S(15, __c1, 7)),
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
        S.Struct({ securityHubConfiguration: S.optional(__S(173, __c21, 5)) }),
      ).annotate({
        identifier: "GetFindingsPublicationConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          attributeName: S.optional(S.String),
          orderBy: S.optional(S.String),
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
          findingCriteria: S.optional(__S(45, __c5, 5)),
          groupBy: S.optional(S.String),
          size: S.optional(S.Number),
          sortCriteria: S.optional(__S(175, __c21, 7)),
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
      return S.Array(__S(177, __c22, 1));
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
          findingPublishingFrequency: S.optional(S.String),
          serviceRole: S.optional(S.String),
          status: S.optional(S.String),
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
      return S.suspend(() => S.Struct({ master: S.optional(__S(97, __c12, 1)) })).annotate({
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
          relationshipStatus: S.optional(S.String),
          tags: S.optional(__S(15, __c1, 7)),
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
          statistics: S.optional(__S(189, __c23, 5)),
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
        S.Struct({ kmsKeyId: S.optional(S.String), status: S.optional(S.String) }),
      ).annotate({ identifier: "RevealConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          externalId: S.optional(S.String),
          retrievalMode: S.optional(S.String),
          roleName: S.optional(S.String),
        }),
      ).annotate({ identifier: "RetrievalConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          configuration: S.optional(__S(192, __c24, 0)),
          retrievalConfiguration: S.optional(__S(193, __c24, 1)),
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
      return S.Array(__S(196, __c24, 4));
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __listOfDetectedDataDetails.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          error: S.optional(S.String),
          sensitiveDataOccurrences: S.optional(__S(198, __c24, 6)),
          status: S.optional(S.String),
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
          code: S.optional(S.String),
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
          excludes: S.optional(__S(203, __c25, 3)),
          includes: S.optional(__S(204, __c25, 4)),
          name: S.optional(S.String),
          sensitivityInspectionTemplateId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetSensitivityInspectionTemplateResponse",
      });
    case 6:
      return S.Array(__S(18, __c2, 2));
    case 7:
      return S.suspend(() =>
        S.Struct({ key: S.optional(S.String), orderBy: S.optional(S.String) }),
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
          sortBy: S.optional(__S(207, __c25, 7)),
          timeRange: S.optional(S.String),
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
          unit: S.optional(S.String),
          value: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ServiceLimit" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          currency: S.optional(S.String),
          estimatedCost: S.optional(S.String),
          serviceLimit: S.optional(__S(209, __c26, 1)),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "UsageByAccount" });
    case 3:
      return S.Array(__S(210, __c26, 2));
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
      return S.Array(__S(212, __c26, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          records: S.optional(__listOfUsageRecord),
          timeRange: S.optional(S.String),
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
          currency: S.optional(S.String),
          estimatedCost: S.optional(S.String),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "UsageTotal" });
    case 1:
      return S.Array(__S(216, __c27, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ timeRange: S.optional(S.String), usageTotals: S.optional(__listOfUsageTotal) }),
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
      return S.Array(__S(220, __c27, 4));
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
      return S.Array(__S(7, __c0, 7));
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
          attributeName: S.optional(S.String),
          orderBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListJobsSortCriteria" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          filterCriteria: S.optional(__S(226, __c28, 2)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          sortCriteria: S.optional(__S(227, __c28, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/jobs/list" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListClassificationJobsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          bucketCriteria: S.optional(__S(25, __c3, 1)),
          bucketDefinitions: S.optional(__listOfS3BucketDefinitionForJob),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          jobId: S.optional(S.String),
          jobStatus: S.optional(S.String),
          jobType: S.optional(S.String),
          lastRunErrorStatus: S.optional(__S(83, __c10, 3)),
          name: S.optional(S.String),
          userPausedDetails: S.optional(__S(85, __c10, 5)),
        }),
      ).annotate({ identifier: "JobSummary" });
    case 6:
      return S.Array(__S(229, __c28, 5));
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
      return S.Array(__S(233, __c29, 1));
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
      return S.Array(__S(237, __c29, 5));
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
          findingCriteria: S.optional(__S(45, __c5, 5)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          sortCriteria: S.optional(__S(66, __c8, 2)),
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
          action: S.optional(S.String),
          arn: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          tags: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({ identifier: "FindingsFilterListItem" });
    case 4:
      return S.Array(__S(243, __c30, 3));
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
      return S.Array(__S(97, __c12, 1));
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
        S.Struct({ category: S.optional(S.String), id: S.optional(S.String) }),
      ).annotate({
        identifier: "ManagedDataIdentifierSummary",
      });
    case 3:
      return S.Array(__S(250, __c31, 2));
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
      return S.Array(__S(187, __c23, 3));
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
        S.Struct({ accountId: S.optional(S.String), status: S.optional(S.String) }),
      ).annotate({ identifier: "AdminAccount" });
    case 2:
      return S.Array(__S(257, __c32, 1));
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
      return S.Array(__S(261, __c32, 5));
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
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "Detection" });
    case 2:
      return S.Array(__S(265, __c33, 1));
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
      return S.Array(__S(233, __c29, 1));
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
      return S.suspend(() => S.Struct({ tags: S.optional(__S(15, __c1, 7)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ configuration: S.optional(__S(114, __c14, 2)) }).pipe(
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
          securityHubConfiguration: S.optional(__S(173, __c21, 5)),
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
          comparator: S.optional(S.String),
          key: S.optional(S.String),
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
      return S.Array(__S(276, __c34, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          comparator: S.optional(S.String),
          tagValues: S.optional(__listOfSearchResourcesTagCriterionPair),
        }),
      ).annotate({
        identifier: "SearchResourcesTagCriterion",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          simpleCriterion: S.optional(__S(275, __c34, 3)),
          tagCriterion: S.optional(__S(278, __c34, 6)),
        }),
      ).annotate({ identifier: "SearchResourcesCriteria" });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(279, __c34, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ and: S.optional(__listOfSearchResourcesCriteria) }),
      ).annotate({
        identifier: "SearchResourcesCriteriaBlock",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          excludes: S.optional(__S(281, __c35, 1)),
          includes: S.optional(__S(281, __c35, 1)),
        }),
      ).annotate({
        identifier: "SearchResourcesBucketCriteria",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          bucketCriteria: S.optional(__S(282, __c35, 2)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          sortCriteria: S.optional(__S(175, __c21, 7)),
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
          automatedDiscoveryMonitoringStatus: S.optional(S.String),
          bucketName: S.optional(S.String),
          classifiableObjectCount: S.optional(S.Number),
          classifiableSizeInBytes: S.optional(S.Number),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
          jobDetails: S.optional(__S(68, __c8, 4)),
          lastAutomatedDiscoveryTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          objectCount: S.optional(S.Number),
          objectCountByEncryptionType: S.optional(__S(69, __c8, 5)),
          sensitivityScore: S.optional(S.Number),
          sizeInBytes: S.optional(S.Number),
          sizeInBytesCompressed: S.optional(S.Number),
          unclassifiableObjectCount: S.optional(__S(78, __c9, 6)),
          unclassifiableObjectSizeInBytes: S.optional(__S(78, __c9, 6)),
        }),
      ).annotate({ identifier: "MatchingBucket" });
    case 5:
      return S.suspend(() => S.Struct({ matchingBucket: S.optional(__S(284, __c35, 4)) })).annotate(
        {
          identifier: "MatchingResource",
        },
      );
    case 6:
      return S.Array(__S(285, __c35, 5));
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
          tags: S.optional(__S(15, __c1, 7)),
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
          criteria: S.optional(__S(14, __c1, 6)),
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
          autoEnableOrganizationMembers: S.optional(S.String),
          status: S.optional(S.String),
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
          jobStatus: S.optional(S.String),
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
          operation: S.optional(S.String),
        }),
      ).annotate({
        identifier: "S3ClassificationScopeExclusionUpdate",
      });
    case 1:
      return S.suspend(() => S.Struct({ excludes: S.optional(__S(296, __c37, 0)) })).annotate({
        identifier: "S3ClassificationScopeUpdate",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          s3: S.optional(__S(297, __c37, 1)),
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
          action: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          description: S.optional(S.String),
          findingCriteria: S.optional(__S(45, __c5, 5)),
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
          findingPublishingFrequency: S.optional(S.String),
          status: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "PATCH", uri: "/macie" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateMacieSessionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")), status: S.optional(S.String) }).pipe(
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
        S.Struct({ id: S.optional(S.String), type: S.optional(S.String) }),
      ).annotate({ identifier: "SuppressDataIdentifier" });
    case 1:
      return S.Array(__S(304, __c38, 0));
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
        S.Struct({ retrievalMode: S.optional(S.String), roleName: S.optional(S.String) }),
      ).annotate({
        identifier: "UpdateRetrievalConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          configuration: S.optional(__S(192, __c24, 0)),
          retrievalConfiguration: S.optional(__S(307, __c38, 3)),
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
          excludes: S.optional(__S(203, __c25, 3)),
          id: S.String.pipe(T.HttpLabel("id")),
          includes: S.optional(__S(204, __c25, 4)),
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

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
