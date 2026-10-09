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
  sdkId: "GuardDuty",
  serviceShapeName: "GuardDutyAPIService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "guardduty" });
const ver = /*@__PURE__*/ T.ServiceVersion("2017-11-28");
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
              `https://guardduty-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://guardduty.${Region}.amazonaws.com`);
            }
            return e(`https://guardduty-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://guardduty.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://guardduty.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
      Type: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Type: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Type: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalServerErrorException>()(
    "InternalServerErrorException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Type: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Type: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export type DetectorId = string;
export interface AcceptAdministratorInvitationRequest {
  DetectorId: string;
  AdministratorId?: string;
  InvitationId?: string;
}
export interface AcceptAdministratorInvitationResponse {}
export interface AcceptInvitationRequest {
  DetectorId: string;
  MasterId?: string;
  InvitationId?: string;
}
export interface AcceptInvitationResponse {}
export type FindingId = string;
export type FindingIds = string[];
export interface ArchiveFindingsRequest {
  DetectorId: string;
  FindingIds?: string[];
}
export interface ArchiveFindingsResponse {}
export type RuleId = string;
export type AssociationMode = "LIVE" | "DRY_RUN" | (string & {});
export type ClientToken = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateCustomDetectionRuleAssociationRequest {
  RuleId?: string;
  Mode?: AssociationMode;
  ClientToken?: string;
  Tags?: { [key: string]: string | undefined };
}
export type AssociationId = string;
export type DetectionRuleArn = string;
export type AccountId = string;
export interface AssociationDetail {
  AssociationId?: string;
  Arn?: string;
  RuleId?: string;
  AccountId?: string;
  Mode?: AssociationMode;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  ExpiresAt?: Date;
}
export interface CreateCustomDetectionRuleAssociationResponse {
  RuleAssociation: AssociationDetail & {
    AssociationId: AssociationId;
    Arn: DetectionRuleArn;
    RuleId: RuleId;
    AccountId: AccountId;
    Mode: AssociationMode;
    CreatedAt: Date;
    UpdatedAt: Date;
  };
}
export type DetectionRuleAccountIds = string[];
export interface CreateCustomDetectionRuleOrgConfigurationRequest {
  RuleId?: string;
  Mode?: AssociationMode;
  IncludeAccountIds?: string[];
  ExcludeAccountIds?: string[];
  ClientToken?: string;
}
export interface CreateCustomDetectionRuleOrgConfigurationResponse {}
export type FindingPublishingFrequency =
  | "FIFTEEN_MINUTES"
  | "ONE_HOUR"
  | "SIX_HOURS"
  | (string & {});
export interface S3LogsConfiguration {
  Enable?: boolean;
}
export interface KubernetesAuditLogsConfiguration {
  Enable?: boolean;
}
export interface KubernetesConfiguration {
  AuditLogs?: KubernetesAuditLogsConfiguration;
}
export interface ScanEc2InstanceWithFindings {
  EbsVolumes?: boolean;
}
export interface MalwareProtectionConfiguration {
  ScanEc2InstanceWithFindings?: ScanEc2InstanceWithFindings;
}
export interface DataSourceConfigurations {
  S3Logs?: S3LogsConfiguration;
  Kubernetes?: KubernetesConfiguration;
  MalwareProtection?: MalwareProtectionConfiguration;
}
export type DetectorFeature =
  | "S3_DATA_EVENTS"
  | "EKS_AUDIT_LOGS"
  | "EBS_MALWARE_PROTECTION"
  | "RDS_LOGIN_EVENTS"
  | "LAMBDA_NETWORK_LOGS"
  | "EKS_RUNTIME_MONITORING"
  | "RUNTIME_MONITORING"
  | "AI_PROTECTION"
  | "AI_ANALYST"
  | (string & {});
export type FeatureStatus = "ENABLED" | "DISABLED" | (string & {});
export type FeatureAdditionalConfiguration =
  | "EKS_ADDON_MANAGEMENT"
  | "ECS_FARGATE_AGENT_MANAGEMENT"
  | "EC2_AGENT_MANAGEMENT"
  | (string & {});
export interface DetectorAdditionalConfiguration {
  Name?: FeatureAdditionalConfiguration;
  Status?: FeatureStatus;
}
export type DetectorAdditionalConfigurations = DetectorAdditionalConfiguration[];
export interface DetectorFeatureConfiguration {
  Name?: DetectorFeature;
  Status?: FeatureStatus;
  AdditionalConfiguration?: DetectorAdditionalConfiguration[];
}
export type DetectorFeatureConfigurations = DetectorFeatureConfiguration[];
export interface CreateDetectorRequest {
  Enable?: boolean;
  ClientToken?: string;
  FindingPublishingFrequency?: FindingPublishingFrequency;
  DataSources?: DataSourceConfigurations;
  Tags?: { [key: string]: string | undefined };
  Features?: DetectorFeatureConfiguration[];
}
export type DataSourceStatus = "ENABLED" | "DISABLED" | (string & {});
export interface EbsVolumesResult {
  Status?: DataSourceStatus;
  Reason?: string;
}
export interface ScanEc2InstanceWithFindingsResult {
  EbsVolumes?: EbsVolumesResult;
}
export interface MalwareProtectionConfigurationResult {
  ScanEc2InstanceWithFindings?: ScanEc2InstanceWithFindingsResult;
  ServiceRole?: string;
}
export interface UnprocessedDataSourcesResult {
  MalwareProtection?: MalwareProtectionConfigurationResult;
}
export interface CreateDetectorResponse {
  DetectorId?: string;
  UnprocessedDataSources?: UnprocessedDataSourcesResult;
}
export type FilterName = string;
export type FilterDescription = string;
export type FilterAction = "NOOP" | "ARCHIVE" | (string & {});
export type FilterRank = number;
export type Eq = string[];
export type Neq = string[];
export type Equals = string[];
export type NotEquals = string[];
export type Match = string;
export type Matches = string[];
export type NotMatch = string;
export type NotMatches = string[];
export interface Condition {
  Eq?: string[];
  Neq?: string[];
  Gt?: number;
  Gte?: number;
  Lt?: number;
  Lte?: number;
  Equals?: string[];
  NotEquals?: string[];
  GreaterThan?: number;
  GreaterThanOrEqual?: number;
  LessThan?: number;
  LessThanOrEqual?: number;
  Matches?: string[];
  NotMatches?: string[];
}
export type Criterion = { [key: string]: Condition | undefined };
export interface FindingCriteria {
  Criterion?: { [key: string]: Condition | undefined };
}
export interface CreateFilterRequest {
  DetectorId: string;
  Name?: string;
  Description?: string;
  Action?: FilterAction;
  Rank?: number;
  FindingCriteria?: FindingCriteria;
  ClientToken?: string;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateFilterResponse {
  Name: string;
}
export type TriggerPrompt = string;
export interface CreateInvestigationRequest {
  DetectorId: string;
  TriggerPrompt?: string;
  ClientToken?: string;
}
export type InvestigationId = string;
export interface CreateInvestigationResponse {
  InvestigationId: string;
}
export type Name = string;
export type IpSetFormat =
  | "TXT"
  | "STIX"
  | "OTX_CSV"
  | "ALIEN_VAULT"
  | "PROOF_POINT"
  | "FIRE_EYE"
  | (string & {});
export type Location = string;
export interface CreateIPSetRequest {
  DetectorId: string;
  Name?: string;
  Format?: IpSetFormat;
  Location?: string;
  Activate?: boolean;
  ClientToken?: string;
  Tags?: { [key: string]: string | undefined };
  ExpectedBucketOwner?: string;
}
export interface CreateIPSetResponse {
  IpSetId: string;
}
export type MalwareProtectionPlanObjectPrefixesList = string[];
export interface CreateS3BucketResource {
  BucketName?: string;
  ObjectPrefixes?: string[];
}
export interface CreateProtectedResource {
  S3Bucket?: CreateS3BucketResource;
}
export type MalwareProtectionPlanTaggingActionStatus = "ENABLED" | "DISABLED" | (string & {});
export interface MalwareProtectionPlanTaggingAction {
  Status?: MalwareProtectionPlanTaggingActionStatus;
}
export interface MalwareProtectionPlanActions {
  Tagging?: MalwareProtectionPlanTaggingAction;
}
export interface CreateMalwareProtectionPlanRequest {
  ClientToken?: string;
  Role?: string;
  ProtectedResource?: CreateProtectedResource;
  Actions?: MalwareProtectionPlanActions;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateMalwareProtectionPlanResponse {
  MalwareProtectionPlanId?: string;
}
export type Email = string | redacted.Redacted<string>;
export interface AccountDetail {
  AccountId?: string;
  Email?: string | redacted.Redacted<string>;
}
export type AccountDetails = AccountDetail[];
export interface CreateMembersRequest {
  DetectorId: string;
  AccountDetails?: AccountDetail[];
}
export interface UnprocessedAccount {
  AccountId?: string;
  Result?: string;
}
export type UnprocessedAccounts = UnprocessedAccount[];
export interface CreateMembersResponse {
  UnprocessedAccounts: (UnprocessedAccount & { AccountId: AccountId; Result: string })[];
}
export type DestinationType = "S3" | (string & {});
export interface DestinationProperties {
  DestinationArn?: string;
  KmsKeyArn?: string;
}
export interface CreatePublishingDestinationRequest {
  DetectorId: string;
  DestinationType?: DestinationType;
  DestinationProperties?: DestinationProperties;
  ClientToken?: string;
  Tags?: { [key: string]: string | undefined };
}
export interface CreatePublishingDestinationResponse {
  DestinationId: string;
}
export type FindingType = string;
export type FindingTypes = string[];
export interface CreateSampleFindingsRequest {
  DetectorId: string;
  FindingTypes?: string[];
}
export interface CreateSampleFindingsResponse {}
export type ThreatEntitySetFormat =
  | "TXT"
  | "STIX"
  | "OTX_CSV"
  | "ALIEN_VAULT"
  | "PROOF_POINT"
  | "FIRE_EYE"
  | (string & {});
export type ExpectedBucketOwner = string;
export interface CreateThreatEntitySetRequest {
  DetectorId: string;
  Name?: string;
  Format?: ThreatEntitySetFormat;
  Location?: string;
  ExpectedBucketOwner?: string;
  Activate?: boolean;
  ClientToken?: string;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateThreatEntitySetResponse {
  ThreatEntitySetId: string;
}
export type ThreatIntelSetFormat =
  | "TXT"
  | "STIX"
  | "OTX_CSV"
  | "ALIEN_VAULT"
  | "PROOF_POINT"
  | "FIRE_EYE"
  | (string & {});
export interface CreateThreatIntelSetRequest {
  DetectorId: string;
  Name?: string;
  Format?: ThreatIntelSetFormat;
  Location?: string;
  Activate?: boolean;
  ClientToken?: string;
  Tags?: { [key: string]: string | undefined };
  ExpectedBucketOwner?: string;
}
export interface CreateThreatIntelSetResponse {
  ThreatIntelSetId: string;
}
export type TrustedEntitySetFormat =
  | "TXT"
  | "STIX"
  | "OTX_CSV"
  | "ALIEN_VAULT"
  | "PROOF_POINT"
  | "FIRE_EYE"
  | (string & {});
export interface CreateTrustedEntitySetRequest {
  DetectorId: string;
  Name?: string;
  Format?: TrustedEntitySetFormat;
  Location?: string;
  ExpectedBucketOwner?: string;
  Activate?: boolean;
  ClientToken?: string;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateTrustedEntitySetResponse {
  TrustedEntitySetId: string;
}
export type AccountIds = string[];
export interface DeclineInvitationsRequest {
  AccountIds?: string[];
}
export interface DeclineInvitationsResponse {
  UnprocessedAccounts: (UnprocessedAccount & { AccountId: AccountId; Result: string })[];
}
export interface DeleteCustomDetectionRuleAssociationRequest {
  RuleId: string;
  AssociationId: string;
}
export interface DeleteCustomDetectionRuleAssociationResponse {}
export interface DeleteCustomDetectionRuleOrgConfigurationRequest {
  RuleId: string;
  Mode?: AssociationMode;
}
export interface DeleteCustomDetectionRuleOrgConfigurationResponse {}
export interface DeleteDetectorRequest {
  DetectorId: string;
}
export interface DeleteDetectorResponse {}
export interface DeleteFilterRequest {
  DetectorId: string;
  FilterName: string;
}
export interface DeleteFilterResponse {}
export interface DeleteInvitationsRequest {
  AccountIds?: string[];
}
export interface DeleteInvitationsResponse {
  UnprocessedAccounts: (UnprocessedAccount & { AccountId: AccountId; Result: string })[];
}
export interface DeleteIPSetRequest {
  DetectorId: string;
  IpSetId?: string;
}
export interface DeleteIPSetResponse {}
export interface DeleteMalwareProtectionPlanRequest {
  MalwareProtectionPlanId?: string;
}
export interface DeleteMalwareProtectionPlanResponse {}
export interface DeleteMembersRequest {
  DetectorId: string;
  AccountIds?: string[];
}
export interface DeleteMembersResponse {
  UnprocessedAccounts: (UnprocessedAccount & { AccountId: AccountId; Result: string })[];
}
export interface DeletePublishingDestinationRequest {
  DetectorId: string;
  DestinationId: string;
}
export interface DeletePublishingDestinationResponse {}
export interface DeleteThreatEntitySetRequest {
  DetectorId: string;
  ThreatEntitySetId?: string;
}
export interface DeleteThreatEntitySetResponse {}
export interface DeleteThreatIntelSetRequest {
  DetectorId: string;
  ThreatIntelSetId: string;
}
export interface DeleteThreatIntelSetResponse {}
export interface DeleteTrustedEntitySetRequest {
  DetectorId: string;
  TrustedEntitySetId: string;
}
export interface DeleteTrustedEntitySetResponse {}
export type IntegerValueWithMax = number;
export type CriterionKey =
  | "EC2_INSTANCE_ARN"
  | "SCAN_ID"
  | "ACCOUNT_ID"
  | "GUARDDUTY_FINDING_ID"
  | "SCAN_START_TIME"
  | "SCAN_STATUS"
  | "SCAN_TYPE"
  | (string & {});
export type NonEmptyString = string;
export type LongValue = number;
export interface FilterCondition {
  EqualsValue?: string;
  GreaterThan?: number;
  LessThan?: number;
}
export interface FilterCriterion {
  CriterionKey?: CriterionKey;
  FilterCondition?: FilterCondition;
}
export type FilterCriterionList = FilterCriterion[];
export interface FilterCriteria {
  FilterCriterion?: FilterCriterion[];
}
export type OrderBy = "ASC" | "DESC" | (string & {});
export interface SortCriteria {
  AttributeName?: string;
  OrderBy?: OrderBy;
}
export interface DescribeMalwareScansRequest {
  DetectorId: string;
  NextToken?: string;
  MaxResults?: number;
  FilterCriteria?: FilterCriteria;
  SortCriteria?: SortCriteria;
}
export type ScanStatus = "RUNNING" | "COMPLETED" | "FAILED" | "SKIPPED" | (string & {});
export type TriggerType = "BACKUP" | "GUARDDUTY" | (string & {});
export interface TriggerDetails {
  GuardDutyFindingId?: string;
  Description?: string;
  TriggerType?: TriggerType;
}
export type InstanceArn = string;
export interface ResourceDetails {
  InstanceArn?: string;
}
export type ScanResult = "CLEAN" | "INFECTED" | (string & {});
export interface ScanResultDetails {
  ScanResult?: ScanResult;
}
export type PositiveLong = number;
export interface VolumeDetail {
  VolumeArn?: string;
  VolumeType?: string;
  DeviceName?: string;
  VolumeSizeInGB?: number;
  EncryptionType?: string;
  SnapshotArn?: string;
  KmsKeyArn?: string;
}
export type VolumeDetails = VolumeDetail[];
export type ScanType = "GUARDDUTY_INITIATED" | "ON_DEMAND" | (string & {});
export interface Scan {
  DetectorId?: string;
  AdminDetectorId?: string;
  ScanId?: string;
  ScanStatus?: ScanStatus;
  FailureReason?: string;
  ScanStartTime?: Date;
  ScanEndTime?: Date;
  TriggerDetails?: TriggerDetails;
  ResourceDetails?: ResourceDetails;
  ScanResultDetails?: ScanResultDetails;
  AccountId?: string;
  TotalBytes?: number;
  FileCount?: number;
  AttachedVolumes?: VolumeDetail[];
  ScanType?: ScanType;
}
export type Scans = Scan[];
export interface DescribeMalwareScansResponse {
  Scans: Scan[];
  NextToken?: string;
}
export type MaxResults = number;
export interface DescribeOrganizationConfigurationRequest {
  DetectorId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface OrganizationS3LogsConfigurationResult {
  AutoEnable?: boolean;
}
export interface OrganizationKubernetesAuditLogsConfigurationResult {
  AutoEnable?: boolean;
}
export interface OrganizationKubernetesConfigurationResult {
  AuditLogs?: OrganizationKubernetesAuditLogsConfigurationResult;
}
export interface OrganizationEbsVolumesResult {
  AutoEnable?: boolean;
}
export interface OrganizationScanEc2InstanceWithFindingsResult {
  EbsVolumes?: OrganizationEbsVolumesResult;
}
export interface OrganizationMalwareProtectionConfigurationResult {
  ScanEc2InstanceWithFindings?: OrganizationScanEc2InstanceWithFindingsResult;
}
export interface OrganizationDataSourceConfigurationsResult {
  S3Logs?: OrganizationS3LogsConfigurationResult;
  Kubernetes?: OrganizationKubernetesConfigurationResult;
  MalwareProtection?: OrganizationMalwareProtectionConfigurationResult;
}
export type OrgFeature =
  | "S3_DATA_EVENTS"
  | "EKS_AUDIT_LOGS"
  | "EBS_MALWARE_PROTECTION"
  | "RDS_LOGIN_EVENTS"
  | "LAMBDA_NETWORK_LOGS"
  | "EKS_RUNTIME_MONITORING"
  | "RUNTIME_MONITORING"
  | "AI_PROTECTION"
  | (string & {});
export type OrgFeatureStatus = "NEW" | "NONE" | "ALL" | (string & {});
export type OrgFeatureAdditionalConfiguration =
  | "EKS_ADDON_MANAGEMENT"
  | "ECS_FARGATE_AGENT_MANAGEMENT"
  | "EC2_AGENT_MANAGEMENT"
  | (string & {});
export interface OrganizationAdditionalConfigurationResult {
  Name?: OrgFeatureAdditionalConfiguration;
  AutoEnable?: OrgFeatureStatus;
}
export type OrganizationAdditionalConfigurationResults =
  OrganizationAdditionalConfigurationResult[];
export interface OrganizationFeatureConfigurationResult {
  Name?: OrgFeature;
  AutoEnable?: OrgFeatureStatus;
  AdditionalConfiguration?: OrganizationAdditionalConfigurationResult[];
}
export type OrganizationFeaturesConfigurationsResults = OrganizationFeatureConfigurationResult[];
export type AutoEnableMembers = "NEW" | "ALL" | "NONE" | (string & {});
export interface DescribeOrganizationConfigurationResponse {
  AutoEnable?: boolean;
  MemberAccountLimitReached: boolean;
  DataSources?: OrganizationDataSourceConfigurationsResult & {
    S3Logs: OrganizationS3LogsConfigurationResult & { AutoEnable: boolean };
    Kubernetes: OrganizationKubernetesConfigurationResult & {
      AuditLogs: OrganizationKubernetesAuditLogsConfigurationResult & { AutoEnable: boolean };
    };
  };
  Features?: OrganizationFeatureConfigurationResult[];
  NextToken?: string;
  AutoEnableOrganizationMembers?: AutoEnableMembers;
}
export interface DescribePublishingDestinationRequest {
  DetectorId: string;
  DestinationId: string;
}
export type PublishingStatus =
  | "PENDING_VERIFICATION"
  | "PUBLISHING"
  | "UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY"
  | "STOPPED"
  | (string & {});
export interface DescribePublishingDestinationResponse {
  DestinationId: string;
  DestinationType: DestinationType;
  Status: PublishingStatus;
  PublishingFailureStartTimestamp: number;
  DestinationProperties: DestinationProperties;
  Tags?: { [key: string]: string | undefined };
}
export interface DisableOrganizationAdminAccountRequest {
  AdminAccountId?: string;
}
export interface DisableOrganizationAdminAccountResponse {}
export interface DisassociateFromAdministratorAccountRequest {
  DetectorId: string;
}
export interface DisassociateFromAdministratorAccountResponse {}
export interface DisassociateFromMasterAccountRequest {
  DetectorId: string;
}
export interface DisassociateFromMasterAccountResponse {}
export interface DisassociateMembersRequest {
  DetectorId: string;
  AccountIds?: string[];
}
export interface DisassociateMembersResponse {
  UnprocessedAccounts: (UnprocessedAccount & { AccountId: AccountId; Result: string })[];
}
export interface EnableOrganizationAdminAccountRequest {
  AdminAccountId?: string;
}
export interface EnableOrganizationAdminAccountResponse {}
export interface GetAdministratorAccountRequest {
  DetectorId: string;
}
export interface Administrator {
  AccountId?: string;
  InvitationId?: string;
  RelationshipStatus?: string;
  InvitedAt?: string;
}
export interface GetAdministratorAccountResponse {
  Administrator: Administrator;
}
export type CoverageFilterCriterionKey =
  | "ACCOUNT_ID"
  | "RESOURCE_TYPE"
  | "COVERAGE_STATUS"
  | "ADDON_VERSION"
  | "CLUSTER_NAME"
  | "ECS_CLUSTER_NAME"
  | "MANAGEMENT_TYPE"
  | "EKS_CLUSTER_NAME"
  | "AGENT_VERSION"
  | "INSTANCE_ID"
  | "CLUSTER_ARN"
  | (string & {});
export interface CoverageFilterCondition {
  Equals?: string[];
  NotEquals?: string[];
}
export interface CoverageFilterCriterion {
  CriterionKey?: CoverageFilterCriterionKey;
  FilterCondition?: CoverageFilterCondition;
}
export type CoverageFilterCriterionList = CoverageFilterCriterion[];
export interface CoverageFilterCriteria {
  FilterCriterion?: CoverageFilterCriterion[];
}
export type CoverageStatisticsType =
  | "COUNT_BY_RESOURCE_TYPE"
  | "COUNT_BY_COVERAGE_STATUS"
  | (string & {});
export type CoverageStatisticsTypeList = CoverageStatisticsType[];
export interface GetCoverageStatisticsRequest {
  DetectorId: string;
  FilterCriteria?: CoverageFilterCriteria;
  StatisticsType?: CoverageStatisticsType[];
}
export type ResourceType = "EKS" | "ECS" | "EC2" | (string & {});
export type CountByResourceType = { [key in ResourceType]?: number };
export type CoverageStatus = "HEALTHY" | "UNHEALTHY" | (string & {});
export type CountByCoverageStatus = { [key in CoverageStatus]?: number };
export interface CoverageStatistics {
  CountByResourceType?: { [key: string]: number | undefined };
  CountByCoverageStatus?: { [key: string]: number | undefined };
}
export interface GetCoverageStatisticsResponse {
  CoverageStatistics?: CoverageStatistics;
}
export interface GetCustomDetectionRuleRequest {
  RuleId: string;
}
export type RuleName = string;
export type DetectionRuleDescription = string;
export type DetectionRuleSeverity = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | (string & {});
export type DetectionRuleDataSource = "CloudTrailManagementEvent" | (string & {});
export type MitreTactic = string;
export type MitreTechnique = string;
export type DetectionRuleServiceName = string;
export type RuleExpression = string;
export interface RuleDefinition {
  Expression?: string;
}
export type RuleLanguage = "SQL" | (string & {});
export type RuleSchema = "CloudTrail" | (string & {});
export interface RuleDetail {
  RuleId?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  Severity?: DetectionRuleSeverity;
  DataSource?: DetectionRuleDataSource;
  Tactic?: string;
  Technique?: string;
  Service?: string;
  Definition?: RuleDefinition;
  Language?: RuleLanguage;
  Schema?: RuleSchema;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export interface GetCustomDetectionRuleResponse {
  Rule: RuleDetail & {
    RuleId: RuleId;
    Arn: DetectionRuleArn;
    Name: RuleName;
    Description: DetectionRuleDescription;
    Severity: DetectionRuleSeverity;
    DataSource: DetectionRuleDataSource;
    Tactic: MitreTactic;
    Technique: MitreTechnique;
    Service: DetectionRuleServiceName;
    Definition: RuleDefinition & { Expression: RuleExpression };
    CreatedAt: Date;
  };
}
export interface GetCustomDetectionRuleAssociationRequest {
  RuleId: string;
  AssociationId: string;
}
export interface GetCustomDetectionRuleAssociationResponse {
  RuleAssociation: AssociationDetail & {
    AssociationId: AssociationId;
    Arn: DetectionRuleArn;
    RuleId: RuleId;
    AccountId: AccountId;
    Mode: AssociationMode;
    CreatedAt: Date;
    UpdatedAt: Date;
  };
  Tags?: { [key: string]: string | undefined };
}
export interface GetCustomDetectionRuleOrgConfigurationRequest {
  RuleId: string;
  Mode?: AssociationMode;
}
export type DetectionRuleConfigurationStatus = "ACTIVE" | "PROCESSING" | "FAILED" | (string & {});
export interface DetectionRuleOrgConfiguration {
  RuleId?: string;
  Mode?: AssociationMode;
  Status?: DetectionRuleConfigurationStatus;
  StatusReason?: string;
  IncludeAccountIds?: string[];
  ExcludeAccountIds?: string[];
  CreatedAt?: Date;
  UpdatedAt?: Date;
  ExpiresAt?: Date;
}
export interface GetCustomDetectionRuleOrgConfigurationResponse {
  Configuration: DetectionRuleOrgConfiguration & {
    RuleId: RuleId;
    Mode: AssociationMode;
    Status: DetectionRuleConfigurationStatus;
    IncludeAccountIds: DetectionRuleAccountIds;
    ExcludeAccountIds: DetectionRuleAccountIds;
    CreatedAt: Date;
    UpdatedAt: Date;
  };
}
export interface GetDetectorRequest {
  DetectorId: string;
}
export type DetectorStatus = "ENABLED" | "DISABLED" | (string & {});
export interface CloudTrailConfigurationResult {
  Status?: DataSourceStatus;
}
export interface DNSLogsConfigurationResult {
  Status?: DataSourceStatus;
}
export interface FlowLogsConfigurationResult {
  Status?: DataSourceStatus;
}
export interface S3LogsConfigurationResult {
  Status?: DataSourceStatus;
}
export interface KubernetesAuditLogsConfigurationResult {
  Status?: DataSourceStatus;
}
export interface KubernetesConfigurationResult {
  AuditLogs?: KubernetesAuditLogsConfigurationResult;
}
export interface DataSourceConfigurationsResult {
  CloudTrail?: CloudTrailConfigurationResult;
  DNSLogs?: DNSLogsConfigurationResult;
  FlowLogs?: FlowLogsConfigurationResult;
  S3Logs?: S3LogsConfigurationResult;
  Kubernetes?: KubernetesConfigurationResult;
  MalwareProtection?: MalwareProtectionConfigurationResult;
}
export type DetectorFeatureResult =
  | "FLOW_LOGS"
  | "CLOUD_TRAIL"
  | "DNS_LOGS"
  | "S3_DATA_EVENTS"
  | "EKS_AUDIT_LOGS"
  | "EBS_MALWARE_PROTECTION"
  | "RDS_LOGIN_EVENTS"
  | "LAMBDA_NETWORK_LOGS"
  | "EKS_RUNTIME_MONITORING"
  | "RUNTIME_MONITORING"
  | "AI_PROTECTION"
  | "AI_ANALYST"
  | (string & {});
export type ManagedBy = "GUARDDUTY_POLICY" | (string & {});
export interface DetectorAdditionalConfigurationResult {
  Name?: FeatureAdditionalConfiguration;
  Status?: FeatureStatus;
  UpdatedAt?: Date;
  ManagedBy?: ManagedBy;
}
export type DetectorAdditionalConfigurationResults = DetectorAdditionalConfigurationResult[];
export interface DetectorFeatureConfigurationResult {
  Name?: DetectorFeatureResult;
  Status?: FeatureStatus;
  UpdatedAt?: Date;
  AdditionalConfiguration?: DetectorAdditionalConfigurationResult[];
  ManagedBy?: ManagedBy;
}
export type DetectorFeatureConfigurationsResults = DetectorFeatureConfigurationResult[];
export interface GetDetectorResponse {
  CreatedAt?: string;
  FindingPublishingFrequency?: FindingPublishingFrequency;
  ServiceRole: string;
  Status: DetectorStatus;
  UpdatedAt?: string;
  DataSources?: DataSourceConfigurationsResult & {
    CloudTrail: CloudTrailConfigurationResult & { Status: DataSourceStatus };
    DNSLogs: DNSLogsConfigurationResult & { Status: DataSourceStatus };
    FlowLogs: FlowLogsConfigurationResult & { Status: DataSourceStatus };
    S3Logs: S3LogsConfigurationResult & { Status: DataSourceStatus };
    Kubernetes: KubernetesConfigurationResult & {
      AuditLogs: KubernetesAuditLogsConfigurationResult & { Status: DataSourceStatus };
    };
  };
  Tags?: { [key: string]: string | undefined };
  Features?: DetectorFeatureConfigurationResult[];
}
export interface GetFilterRequest {
  DetectorId: string;
  FilterName: string;
}
export type FilterVersion = number;
export interface GetFilterResponse {
  Name: string;
  Description?: string;
  Action: FilterAction;
  Rank?: number;
  FindingCriteria: FindingCriteria;
  Tags?: { [key: string]: string | undefined };
  CreatedAt?: Date;
  UpdatedAt?: Date;
  Version?: number;
}
export interface GetFindingsRequest {
  DetectorId: string;
  FindingIds?: string[];
  SortCriteria?: SortCriteria;
}
export interface AccessKeyDetails {
  AccessKeyId?: string;
  PrincipalId?: string;
  UserName?: string;
  UserType?: string;
}
export interface Owner {
  Id?: string;
}
export interface Tag {
  Key?: string;
  Value?: string;
}
export type Tags = Tag[];
export interface DefaultServerSideEncryption {
  EncryptionType?: string;
  KmsMasterKeyArn?: string;
}
export interface AccessControlList {
  AllowsPublicReadAccess?: boolean;
  AllowsPublicWriteAccess?: boolean;
}
export interface BucketPolicy {
  AllowsPublicReadAccess?: boolean;
  AllowsPublicWriteAccess?: boolean;
}
export interface BlockPublicAccess {
  IgnorePublicAcls?: boolean;
  RestrictPublicBuckets?: boolean;
  BlockPublicAcls?: boolean;
  BlockPublicPolicy?: boolean;
}
export interface BucketLevelPermissions {
  AccessControlList?: AccessControlList;
  BucketPolicy?: BucketPolicy;
  BlockPublicAccess?: BlockPublicAccess;
}
export interface AccountLevelPermissions {
  BlockPublicAccess?: BlockPublicAccess;
}
export interface PermissionConfiguration {
  BucketLevelPermissions?: BucketLevelPermissions;
  AccountLevelPermissions?: AccountLevelPermissions;
}
export interface PublicAccess {
  PermissionConfiguration?: PermissionConfiguration;
  EffectivePermission?: string;
}
export interface S3ObjectDetail {
  ObjectArn?: string;
  Key?: string;
  ETag?: string;
  Hash?: string;
  VersionId?: string;
}
export type S3ObjectDetails = S3ObjectDetail[];
export interface S3BucketDetail {
  Arn?: string;
  Name?: string;
  Type?: string;
  CreatedAt?: Date;
  Owner?: Owner;
  Tags?: Tag[];
  DefaultServerSideEncryption?: DefaultServerSideEncryption;
  PublicAccess?: PublicAccess;
  S3ObjectDetails?: S3ObjectDetail[];
}
export type S3BucketDetails = S3BucketDetail[];
export interface IamInstanceProfile {
  Arn?: string;
  Id?: string;
}
export type Ipv6Addresses = string[];
export type SensitiveString = string | redacted.Redacted<string>;
export interface PrivateIpAddressDetails {
  PrivateDnsName?: string;
  PrivateIpAddress?: string | redacted.Redacted<string>;
}
export type PrivateIpAddresses = PrivateIpAddressDetails[];
export interface SecurityGroup {
  GroupId?: string;
  GroupName?: string;
}
export type SecurityGroups = SecurityGroup[];
export interface NetworkInterface {
  Ipv6Addresses?: string[];
  NetworkInterfaceId?: string;
  PrivateDnsName?: string;
  PrivateIpAddress?: string | redacted.Redacted<string>;
  PrivateIpAddresses?: PrivateIpAddressDetails[];
  PublicDnsName?: string;
  PublicIp?: string;
  SecurityGroups?: SecurityGroup[];
  SubnetId?: string;
  VpcId?: string;
}
export type NetworkInterfaces = NetworkInterface[];
export interface ProductCode {
  Code?: string;
  ProductType?: string;
}
export type ProductCodes = ProductCode[];
export interface InstanceDetails {
  AvailabilityZone?: string;
  IamInstanceProfile?: IamInstanceProfile;
  ImageDescription?: string;
  ImageId?: string;
  InstanceId?: string;
  InstanceState?: string;
  InstanceType?: string;
  OutpostArn?: string;
  LaunchTime?: string;
  NetworkInterfaces?: NetworkInterface[];
  Platform?: string;
  ProductCodes?: ProductCode[];
  Tags?: Tag[];
}
export interface EksClusterDetails {
  Name?: string;
  Arn?: string;
  VpcId?: string;
  Status?: string;
  Tags?: Tag[];
  CreatedAt?: Date;
}
export type Groups = string[];
export type SessionNameList = string[];
export interface ImpersonatedUser {
  Username?: string;
  Groups?: string[];
}
export interface KubernetesUserDetails {
  Username?: string;
  Uid?: string;
  Groups?: string[];
  SessionName?: string[];
  ImpersonatedUser?: ImpersonatedUser;
}
export interface VolumeMount {
  Name?: string;
  MountPath?: string;
}
export type VolumeMounts = VolumeMount[];
export interface SecurityContext {
  Privileged?: boolean;
  AllowPrivilegeEscalation?: boolean;
}
export interface Container {
  ContainerRuntime?: string;
  Id?: string;
  Name?: string;
  Image?: string;
  ImagePrefix?: string;
  VolumeMounts?: VolumeMount[];
  SecurityContext?: SecurityContext;
}
export type Containers = Container[];
export interface HostPath {
  Path?: string;
}
export interface Volume {
  Name?: string;
  HostPath?: HostPath;
}
export type Volumes = Volume[];
export interface KubernetesWorkloadDetails {
  Name?: string;
  Type?: string;
  Uid?: string;
  Namespace?: string;
  HostNetwork?: boolean;
  ServiceAccountName?: string;
  Containers?: Container[];
  Volumes?: Volume[];
  HostIPC?: boolean;
  HostPID?: boolean;
}
export interface KubernetesDetails {
  KubernetesUserDetails?: KubernetesUserDetails;
  KubernetesWorkloadDetails?: KubernetesWorkloadDetails;
}
export interface EbsVolumeDetails {
  ScannedVolumeDetails?: VolumeDetail[];
  SkippedVolumeDetails?: VolumeDetail[];
}
export interface EcsTaskDetails {
  Arn?: string;
  DefinitionArn?: string;
  Version?: string;
  TaskCreatedAt?: Date;
  StartedAt?: Date;
  StartedBy?: string;
  Tags?: Tag[];
  Volumes?: Volume[];
  Containers?: Container[];
  Group?: string;
  LaunchType?: string;
}
export interface EcsClusterDetails {
  Name?: string;
  Arn?: string;
  Status?: string;
  ActiveServicesCount?: number;
  RegisteredContainerInstancesCount?: number;
  RunningTasksCount?: number;
  Tags?: Tag[];
  TaskDetails?: EcsTaskDetails;
}
export type SubnetIds = string[];
export interface VpcConfig {
  SubnetIds?: string[];
  VpcId?: string;
  SecurityGroups?: SecurityGroup[];
}
export interface LambdaDetails {
  FunctionArn?: string;
  FunctionName?: string;
  Description?: string;
  LastModifiedAt?: Date;
  RevisionId?: string;
  FunctionVersion?: string;
  Role?: string;
  VpcConfig?: VpcConfig;
  Tags?: Tag[];
}
export interface RdsDbInstanceDetails {
  DbInstanceIdentifier?: string;
  Engine?: string;
  EngineVersion?: string;
  DbClusterIdentifier?: string;
  DbInstanceArn?: string;
  DbiResourceId?: string;
  Tags?: Tag[];
}
export interface RdsLimitlessDbDetails {
  DbShardGroupIdentifier?: string;
  DbShardGroupResourceId?: string;
  DbShardGroupArn?: string;
  Engine?: string;
  EngineVersion?: string;
  DbClusterIdentifier?: string;
  Tags?: Tag[];
}
export interface RdsDbUserDetails {
  User?: string;
  Application?: string;
  Database?: string;
  Ssl?: string;
  AuthMethod?: string;
}
export interface EbsSnapshotDetails {
  SnapshotArn?: string;
}
export interface Ec2ImageDetails {
  ImageArn?: string;
}
export interface ScanConfigurationContinuousScanDetails {
  StartTime?: Date;
  EndTime: Date;
}
export interface RecoveryPointDetails {
  RecoveryPointArn?: string;
  BackupVaultName?: string;
  ContinuousScanDetails?: ScanConfigurationContinuousScanDetails;
}
export interface BedrockGuardrail {
  Arn?: string;
  Version?: string;
}
export type BedrockGuardrails = BedrockGuardrail[];
export type GuardrailAction = "GUARDRAIL_INTERVENED" | "NONE" | (string & {});
export type GuardrailSource = "INPUT" | "OUTPUT" | (string & {});
export type ContentPolicyFilterType =
  | "PROMPT_ATTACK"
  | "JAILBREAK"
  | "HATE"
  | "INSULTS"
  | "SEXUAL"
  | "VIOLENCE"
  | "MISCONDUCT"
  | (string & {});
export type ConfidenceLevel = "HIGH" | "MEDIUM" | "LOW" | "NONE" | (string & {});
export type ContentPolicyFilterAction = "BLOCKED" | "NONE" | (string & {});
export interface ContentPolicyFilter {
  Type?: ContentPolicyFilterType;
  Confidence?: ConfidenceLevel;
  Action?: ContentPolicyFilterAction;
}
export type ContentPolicyFilters = ContentPolicyFilter[];
export interface BedrockGuardrailDetails {
  GuardrailArn?: string;
  GuardrailVersion?: string;
  Guardrails?: BedrockGuardrail[];
  GuardrailAction?: GuardrailAction;
  GuardrailSource?: GuardrailSource;
  ContentPolicyFilters?: ContentPolicyFilter[];
}
export interface ModelDetail {
  ModelId?: string;
}
export type ModelDetails = ModelDetail[];
export interface Resource {
  AccessKeyDetails?: AccessKeyDetails;
  S3BucketDetails?: S3BucketDetail[];
  InstanceDetails?: InstanceDetails;
  EksClusterDetails?: EksClusterDetails;
  KubernetesDetails?: KubernetesDetails;
  ResourceType?: string;
  EbsVolumeDetails?: EbsVolumeDetails;
  EcsClusterDetails?: EcsClusterDetails;
  ContainerDetails?: Container;
  LambdaDetails?: LambdaDetails;
  RdsDbInstanceDetails?: RdsDbInstanceDetails;
  RdsLimitlessDbDetails?: RdsLimitlessDbDetails;
  RdsDbUserDetails?: RdsDbUserDetails;
  EbsSnapshotDetails?: EbsSnapshotDetails;
  Ec2ImageDetails?: Ec2ImageDetails;
  RecoveryPointDetails?: RecoveryPointDetails;
  BedrockGuardrailDetails?: BedrockGuardrailDetails;
  ModelDetails?: ModelDetail[];
}
export interface DomainDetails {
  Domain?: string;
}
export interface City {
  CityName?: string;
}
export interface Country {
  CountryCode?: string;
  CountryName?: string;
}
export interface GeoLocation {
  Lat?: number;
  Lon?: number;
}
export interface Organization {
  Asn?: string;
  AsnOrg?: string;
  Isp?: string;
  Org?: string;
}
export interface RemoteIpDetails {
  City?: City;
  Country?: Country;
  GeoLocation?: GeoLocation;
  IpAddressV4?: string | redacted.Redacted<string>;
  IpAddressV6?: string | redacted.Redacted<string>;
  Organization?: Organization;
}
export interface RemoteAccountDetails {
  AccountId?: string;
  Affiliated?: boolean;
  AwsServiceName?: string;
}
export type AffectedResources = { [key: string]: string | undefined };
export interface AwsApiCallAction {
  Api?: string;
  CallerType?: string;
  DomainDetails?: DomainDetails;
  ErrorCode?: string;
  UserAgent?: string;
  RemoteIpDetails?: RemoteIpDetails;
  ServiceName?: string;
  RemoteAccountDetails?: RemoteAccountDetails;
  AffectedResources?: { [key: string]: string | undefined };
}
export interface DnsRequestAction {
  Domain?: string;
  Protocol?: string;
  Blocked?: boolean;
  DomainWithSuffix?: string;
  VpcOwnerAccountId?: string;
}
export interface LocalPortDetails {
  Port?: number;
  PortName?: string;
}
export interface LocalIpDetails {
  IpAddressV4?: string | redacted.Redacted<string>;
  IpAddressV6?: string | redacted.Redacted<string>;
}
export interface RemotePortDetails {
  Port?: number;
  PortName?: string;
}
export interface NetworkConnectionAction {
  Blocked?: boolean;
  ConnectionDirection?: string;
  LocalPortDetails?: LocalPortDetails;
  Protocol?: string;
  LocalIpDetails?: LocalIpDetails;
  LocalNetworkInterface?: string;
  RemoteIpDetails?: RemoteIpDetails;
  RemotePortDetails?: RemotePortDetails;
}
export interface PortProbeDetail {
  LocalPortDetails?: LocalPortDetails;
  LocalIpDetails?: LocalIpDetails;
  RemoteIpDetails?: RemoteIpDetails;
}
export type PortProbeDetails = PortProbeDetail[];
export interface PortProbeAction {
  Blocked?: boolean;
  PortProbeDetails?: PortProbeDetail[];
}
export type SourceIps = string[];
export interface KubernetesApiCallAction {
  RequestUri?: string;
  Verb?: string;
  Resource?: string;
  Subresource?: string;
  Namespace?: string;
  ResourceName?: string;
  SourceIps?: string[];
  UserAgent?: string;
  RemoteIpDetails?: RemoteIpDetails;
  StatusCode?: number;
  Parameters?: string;
}
export interface KubernetesPermissionCheckedDetails {
  Verb?: string;
  Resource?: string;
  Namespace?: string;
  Allowed?: boolean;
}
export interface KubernetesRoleBindingDetails {
  Kind?: string;
  Name?: string;
  Uid?: string;
  RoleRefName?: string;
  RoleRefKind?: string;
}
export interface KubernetesRoleDetails {
  Kind?: string;
  Name?: string;
  Uid?: string;
}
export interface LoginAttribute {
  User?: string;
  Application?: string;
  FailedLoginAttempts?: number;
  SuccessfulLoginAttempts?: number;
}
export type LoginAttributes = LoginAttribute[];
export interface RdsLoginAttemptAction {
  RemoteIpDetails?: RemoteIpDetails;
  LoginAttributes?: LoginAttribute[];
}
export interface Action {
  ActionType?: string;
  AwsApiCallAction?: AwsApiCallAction;
  DnsRequestAction?: DnsRequestAction;
  NetworkConnectionAction?: NetworkConnectionAction;
  PortProbeAction?: PortProbeAction;
  KubernetesApiCallAction?: KubernetesApiCallAction;
  KubernetesPermissionCheckedDetails?: KubernetesPermissionCheckedDetails;
  KubernetesRoleBindingDetails?: KubernetesRoleBindingDetails;
  KubernetesRoleDetails?: KubernetesRoleDetails;
  RdsLoginAttemptAction?: RdsLoginAttemptAction;
}
export type ThreatNames = string[];
export interface ThreatIntelligenceDetail {
  ThreatListName?: string;
  ThreatNames?: string[];
  ThreatFileSha256?: string;
}
export type ThreatIntelligenceDetails = ThreatIntelligenceDetail[];
export interface Evidence {
  ThreatIntelligenceDetails?: ThreatIntelligenceDetail[];
}
export interface ServiceAdditionalInfo {
  Value?: string;
  Type?: string;
}
export type Sources = string[];
export interface ScannedItemCount {
  TotalGb?: number;
  Files?: number;
  Volumes?: number;
}
export interface ThreatsDetectedItemCount {
  Files?: number;
}
export interface HighestSeverityThreatDetails {
  Severity?: string;
  ThreatName?: string;
  Count?: number;
}
export interface ScanFilePath {
  FilePath?: string;
  VolumeArn?: string;
  Hash?: string;
  FileName?: string;
}
export type FilePaths = ScanFilePath[];
export interface ScanThreatName {
  Name?: string;
  Severity?: string;
  ItemCount?: number;
  FilePaths?: ScanFilePath[];
}
export type ScanThreatNames = ScanThreatName[];
export interface ThreatDetectedByName {
  ItemCount?: number;
  UniqueThreatNameCount?: number;
  Shortened?: boolean;
  ThreatNames?: ScanThreatName[];
}
export interface ScanDetections {
  ScannedItemCount?: ScannedItemCount;
  ThreatsDetectedItemCount?: ThreatsDetectedItemCount;
  HighestSeverityThreatDetails?: HighestSeverityThreatDetails;
  ThreatDetectedByName?: ThreatDetectedByName;
}
export interface EbsVolumeScanDetails {
  ScanId?: string;
  ScanStartedAt?: Date;
  ScanCompletedAt?: Date;
  TriggerFindingId?: string;
  Sources?: string[];
  ScanDetections?: ScanDetections;
  ScanType?: ScanType;
}
export interface LineageObject {
  StartTime?: Date;
  NamespacePid?: number;
  UserId?: number;
  Name?: string;
  Pid?: number;
  Uuid?: string;
  ExecutablePath?: string;
  Euid?: number;
  ParentUuid?: string;
}
export type Lineage = LineageObject[];
export interface ProcessDetails {
  Name?: string;
  ExecutablePath?: string;
  ExecutableSha256?: string;
  NamespacePid?: number;
  Pwd?: string;
  Pid?: number;
  StartTime?: Date;
  Uuid?: string;
  ParentUuid?: string;
  User?: string;
  UserId?: number;
  Euid?: number;
  Lineage?: LineageObject[];
}
export type FlagsList = string[];
export type MemoryRegionsList = string[];
export type RelatedFilePathsList = string[];
export interface RuntimeContext {
  ModifyingProcess?: ProcessDetails;
  ModifiedAt?: Date;
  ScriptPath?: string;
  LibraryPath?: string;
  LdPreloadValue?: string;
  SocketPath?: string;
  RuncBinaryPath?: string;
  ReleaseAgentPath?: string;
  MountSource?: string;
  MountTarget?: string;
  FileSystemType?: string;
  Flags?: string[];
  ModuleName?: string;
  ModuleFilePath?: string;
  ModuleSha256?: string;
  ShellHistoryFilePath?: string;
  TargetProcess?: ProcessDetails;
  AddressFamily?: string;
  IanaProtocolNumber?: number;
  MemoryRegions?: string[];
  ToolName?: string;
  ToolCategory?: string;
  ServiceName?: string;
  CommandLineExample?: string;
  ThreatFilePath?: string;
  FileOperation?: string;
  FilePath?: string;
  RelatedFilePaths?: string[];
}
export interface RuntimeDetails {
  Process?: ProcessDetails;
  Context?: RuntimeContext;
}
export type ProfileType = "FREQUENCY" | "VOLUME" | (string & {});
export type ProfileSubtype =
  | "FREQUENT"
  | "INFREQUENT"
  | "UNSEEN"
  | "RARE"
  | "COUNT"
  | "AVERAGE"
  | (string & {});
export type ObservationTexts = string[];
export type ObservationNumbers = number[];
export interface Observations {
  Text?: string[];
  Number?: number[];
}
export interface AnomalyObject {
  ProfileType?: ProfileType;
  ProfileSubtype?: ProfileSubtype;
  Observations?: Observations;
}
export type AnomalyProfileFeatureObjects = AnomalyObject[];
export type AnomalyProfileFeatures = { [key: string]: AnomalyObject[] | undefined };
export type AnomalyProfiles = {
  [key: string]: { [key: string]: AnomalyObject[] | undefined } | undefined;
};
export type AnomalyUnusualBehaviorFeature = { [key: string]: AnomalyObject | undefined };
export type Behavior = { [key: string]: { [key: string]: AnomalyObject | undefined } | undefined };
export interface AnomalyUnusual {
  Behavior?: { [key: string]: { [key: string]: AnomalyObject | undefined } | undefined };
}
export interface Anomaly {
  Profiles?: { [key: string]: { [key: string]: AnomalyObject[] | undefined } | undefined };
  Unusual?: AnomalyUnusual;
}
export type SequenceDescription = string;
export interface Account {
  Uid?: string;
  Name?: string;
}
export interface User {
  Name?: string;
  Uid?: string;
  Type?: string;
  CredentialUid?: string;
  Account?: Account;
}
export type MfaStatus = "ENABLED" | "DISABLED" | (string & {});
export interface Session {
  Uid?: string;
  MfaStatus?: MfaStatus;
  CreatedTime?: Date;
  Issuer?: string;
}
export type ProcessName = string;
export type ProcessPath = string;
export type ProcessSha256 = string;
export interface ActorProcess {
  Name?: string;
  Path?: string;
  Sha256?: string;
}
export interface Actor {
  Id?: string;
  User?: User;
  Session?: Session;
  Process?: ActorProcess;
}
export type Actors = Actor[];
export type FindingResourceType =
  | "EC2_INSTANCE"
  | "EC2_NETWORK_INTERFACE"
  | "S3_BUCKET"
  | "S3_OBJECT"
  | "ACCESS_KEY"
  | "EKS_CLUSTER"
  | "KUBERNETES_WORKLOAD"
  | "CONTAINER"
  | "ECS_CLUSTER"
  | "ECS_TASK"
  | "AUTOSCALING_AUTO_SCALING_GROUP"
  | "IAM_INSTANCE_PROFILE"
  | "CLOUDFORMATION_STACK"
  | "EC2_LAUNCH_TEMPLATE"
  | "EC2_VPC"
  | "EC2_IMAGE"
  | "BEDROCK_CUSTOM_MODEL"
  | "BEDROCK_IMPORTED_MODEL"
  | "BEDROCK_PROVISIONED_MODEL"
  | "BEDROCK_CUSTOM_MODEL_DEPLOYMENT"
  | "BEDROCK_INFERENCE_PROFILE"
  | "BEDROCK_APPLICATION_INFERENCE_PROFILE"
  | "BEDROCK_PROMPT"
  | "BEDROCK_PROMPT_ROUTER"
  | "BEDROCK_GUARDRAIL"
  | "SAGEMAKER_ENDPOINT"
  | (string & {});
export type PublicAccessStatus = "BLOCKED" | "ALLOWED" | (string & {});
export type PublicAclIgnoreBehavior = "IGNORED" | "NOT_IGNORED" | (string & {});
export type PublicBucketRestrictBehavior = "RESTRICTED" | "NOT_RESTRICTED" | (string & {});
export interface PublicAccessConfiguration {
  PublicAclAccess?: PublicAccessStatus;
  PublicPolicyAccess?: PublicAccessStatus;
  PublicAclIgnoreBehavior?: PublicAclIgnoreBehavior;
  PublicBucketRestrictBehavior?: PublicBucketRestrictBehavior;
}
export type S3ObjectUids = string[];
export interface S3Bucket {
  OwnerId?: string;
  CreatedAt?: Date;
  EncryptionType?: string;
  EncryptionKeyArn?: string;
  EffectivePermission?: string;
  PublicReadAccess?: PublicAccessStatus;
  PublicWriteAccess?: PublicAccessStatus;
  AccountPublicAccess?: PublicAccessConfiguration;
  BucketPublicAccess?: PublicAccessConfiguration;
  S3ObjectUids?: string[];
}
export type Ec2NetworkInterfaceUids = string[];
export interface Ec2Instance {
  AvailabilityZone?: string;
  ImageDescription?: string;
  InstanceState?: string;
  IamInstanceProfile?: IamInstanceProfile;
  InstanceType?: string;
  OutpostArn?: string;
  Platform?: string;
  ProductCodes?: ProductCode[];
  Ec2NetworkInterfaceUids?: string[];
}
export interface AccessKey {
  PrincipalId?: string;
  UserName?: string;
  UserType?: string;
}
export interface Ec2NetworkInterface {
  Ipv6Addresses?: string[];
  PrivateIpAddresses?: PrivateIpAddressDetails[];
  PublicIp?: string;
  SecurityGroups?: SecurityGroup[];
  SubNetId?: string;
  VpcId?: string;
}
export interface S3Object {
  ETag?: string;
  Key?: string;
  VersionId?: string;
}
export type ClusterStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING"
  | "PENDING"
  | (string & {});
export type Ec2InstanceUid = string;
export type Ec2InstanceUids = string[];
export interface EksCluster {
  Arn?: string;
  CreatedAt?: Date;
  Status?: ClusterStatus;
  VpcId?: string;
  Ec2InstanceUids?: string[];
}
export type ContainerUid = string;
export type ContainerUids = string[];
export type KubernetesResourcesTypes =
  | "PODS"
  | "JOBS"
  | "CRONJOBS"
  | "DEPLOYMENTS"
  | "DAEMONSETS"
  | "STATEFULSETS"
  | "REPLICASETS"
  | "REPLICATIONCONTROLLERS"
  | (string & {});
export interface KubernetesWorkload {
  ContainerUids?: string[];
  Namespace?: string;
  KubernetesResourcesTypes?: KubernetesResourcesTypes;
}
export type ContainerImageUid = string;
export interface ContainerFindingResource {
  Image?: string;
  ImageUid?: string;
}
export type EcsClusterStatus =
  | "ACTIVE"
  | "PROVISIONING"
  | "DEPROVISIONING"
  | "FAILED"
  | "INACTIVE"
  | (string & {});
export interface EcsCluster {
  Status?: EcsClusterStatus;
  Ec2InstanceUids?: string[];
}
export type EcsLaunchType = "FARGATE" | "EC2" | (string & {});
export interface EcsTask {
  CreatedAt?: Date;
  TaskDefinitionArn?: string;
  LaunchType?: EcsLaunchType;
  ContainerUids?: string[];
}
export interface IamInstanceProfileV2 {
  Ec2InstanceUids?: string[];
}
export interface AutoscalingAutoScalingGroup {
  Ec2InstanceUids?: string[];
}
export type LaunchTemplateVersion = string;
export interface Ec2LaunchTemplate {
  Ec2InstanceUids?: string[];
  Version?: string;
}
export interface Ec2Vpc {
  Ec2InstanceUids?: string[];
}
export interface Ec2Image {
  Ec2InstanceUids?: string[];
}
export interface CloudformationStack {
  Ec2InstanceUids?: string[];
}
export interface BedrockGuardrailResource {
  Version?: string;
  GuardrailAction?: GuardrailAction;
  GuardrailSource?: GuardrailSource;
}
export interface ResourceData {
  S3Bucket?: S3Bucket;
  Ec2Instance?: Ec2Instance;
  AccessKey?: AccessKey;
  Ec2NetworkInterface?: Ec2NetworkInterface;
  S3Object?: S3Object;
  EksCluster?: EksCluster;
  KubernetesWorkload?: KubernetesWorkload;
  Container?: ContainerFindingResource;
  EcsCluster?: EcsCluster;
  EcsTask?: EcsTask;
  IamInstanceProfile?: IamInstanceProfileV2;
  AutoscalingAutoScalingGroup?: AutoscalingAutoScalingGroup;
  Ec2LaunchTemplate?: Ec2LaunchTemplate;
  Ec2Vpc?: Ec2Vpc;
  Ec2Image?: Ec2Image;
  CloudformationStack?: CloudformationStack;
  BedrockGuardrail?: BedrockGuardrailResource;
}
export interface ResourceV2 {
  Uid?: string;
  Name?: string;
  AccountId?: string;
  ResourceType?: FindingResourceType;
  Region?: string;
  Service?: string;
  CloudPartition?: string;
  Tags?: Tag[];
  Data?: ResourceData;
}
export type Resources = ResourceV2[];
export interface NetworkGeoLocation {
  City?: string;
  Country?: string;
  Latitude?: number;
  Longitude?: number;
}
export interface AutonomousSystem {
  Name?: string;
  Number?: number;
}
export type NetworkDirection = "INBOUND" | "OUTBOUND" | (string & {});
export interface NetworkConnection {
  Direction?: NetworkDirection;
}
export interface NetworkEndpoint {
  Id?: string;
  Ip?: string;
  Domain?: string;
  Port?: number;
  Location?: NetworkGeoLocation;
  AutonomousSystem?: AutonomousSystem;
  Connection?: NetworkConnection;
}
export type NetworkEndpoints = NetworkEndpoint[];
export type SignalType =
  | "FINDING"
  | "CLOUD_TRAIL"
  | "S3_DATA_EVENTS"
  | "EKS_AUDIT_LOGS"
  | "FLOW_LOGS"
  | "DNS_LOGS"
  | "RUNTIME_MONITORING"
  | (string & {});
export type SignalDescription = string;
export type ResourceUids = string[];
export type ActorIds = string[];
export type EndpointIds = string[];
export type IndicatorType =
  | "SUSPICIOUS_USER_AGENT"
  | "SUSPICIOUS_NETWORK"
  | "MALICIOUS_IP"
  | "TOR_IP"
  | "ATTACK_TACTIC"
  | "HIGH_RISK_API"
  | "ATTACK_TECHNIQUE"
  | "UNUSUAL_API_FOR_ACCOUNT"
  | "UNUSUAL_ASN_FOR_ACCOUNT"
  | "UNUSUAL_ASN_FOR_USER"
  | "SUSPICIOUS_PROCESS"
  | "MALICIOUS_DOMAIN"
  | "MALICIOUS_PROCESS"
  | "CRYPTOMINING_IP"
  | "CRYPTOMINING_DOMAIN"
  | "CRYPTOMINING_PROCESS"
  | "MALICIOUS_FILE"
  | "VULNERABILITY"
  | "MALICIOUS_PACKAGE"
  | "MISCONFIGURATION"
  | "REACHABILITY"
  | "SENSITIVE_DATA"
  | (string & {});
export type IndicatorValueString = string;
export type IndicatorValues = string[];
export type IndicatorTitle = string;
export interface Indicator {
  Key?: IndicatorType;
  Values?: string[];
  Title?: string;
}
export type Indicators = Indicator[];
export type ActivityType = "API_CALL" | (string & {});
export interface ApiCall {
  Operation?: string;
  Service?: string;
  Error?: string;
  UserAgent?: string;
}
export interface Activity {
  Type?: ActivityType;
  Api?: ApiCall;
}
export type Activities = Activity[];
export interface Signal {
  Uid?: string;
  Type?: SignalType;
  Description?: string;
  Name?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  FirstSeenAt?: Date;
  LastSeenAt?: Date;
  Severity?: number;
  Count?: number;
  ResourceUids?: string[];
  ActorIds?: string[];
  EndpointIds?: string[];
  SignalIndicators?: Indicator[];
  Activities?: Activity[];
}
export type Signals = Signal[];
export type AdditionalSequenceTypes = string[];
export interface Sequence {
  Uid?: string;
  Description?: string;
  Actors?: Actor[];
  Resources?: ResourceV2[];
  Endpoints?: NetworkEndpoint[];
  Signals?: Signal[];
  SequenceIndicators?: Indicator[];
  AdditionalSequenceTypes?: string[];
}
export interface Detection {
  Anomaly?: Anomaly;
  Sequence?: Sequence;
}
export interface ItemPath {
  NestedItemPath?: string;
  Hash?: string;
}
export type ItemPaths = ItemPath[];
export interface AdditionalInfo {
  VersionId?: string;
  DeviceName?: string;
}
export interface ItemDetails {
  ResourceArn?: string;
  ItemPath?: string;
  Hash?: string;
  AdditionalInfo?: AdditionalInfo;
}
export type ItemDetailsList = ItemDetails[];
export interface Threat {
  Name?: string;
  Source?: string;
  ItemPaths?: ItemPath[];
  Count?: number;
  Hash?: string;
  ItemDetails?: ItemDetails[];
}
export type Threats = Threat[];
export type MalwareProtectionScanType =
  | "BACKUP_INITIATED"
  | "ON_DEMAND"
  | "GUARDDUTY_INITIATED"
  | (string & {});
export type ScanCategory = "FULL_SCAN" | "INCREMENTAL_SCAN" | (string & {});
export interface IncrementalScanDetails {
  BaselineResourceArn?: string;
}
export interface MalwareProtectionFindingsScanConfiguration {
  TriggerType?: TriggerType;
  IncrementalScanDetails?: IncrementalScanDetails;
}
export interface MalwareScanDetails {
  Threats?: Threat[];
  ScanId?: string;
  ScanType?: MalwareProtectionScanType;
  ScanCategory?: ScanCategory;
  ScanConfiguration?: MalwareProtectionFindingsScanConfiguration;
  UniqueThreatCount?: number;
}
export interface Service {
  Action?: Action;
  Evidence?: Evidence;
  Archived?: boolean;
  Count?: number;
  DetectorId?: string;
  EventFirstSeen?: string;
  EventLastSeen?: string;
  ResourceRole?: string;
  ServiceName?: string;
  UserFeedback?: string;
  AdditionalInfo?: ServiceAdditionalInfo;
  FeatureName?: string;
  EbsVolumeScanDetails?: EbsVolumeScanDetails;
  RuntimeDetails?: RuntimeDetails;
  Detection?: Detection;
  MalwareScanDetails?: MalwareScanDetails;
}
export interface Finding {
  AccountId?: string;
  Arn?: string;
  Confidence?: number;
  CreatedAt?: string;
  Description?: string;
  Id?: string;
  Partition?: string;
  Region?: string;
  Resource?: Resource;
  SchemaVersion?: string;
  Service?: Service;
  Severity?: number;
  Title?: string;
  Type?: string;
  UpdatedAt?: string;
  AssociatedAttackSequenceArn?: string;
}
export type Findings = Finding[];
export interface GetFindingsResponse {
  Findings: (Finding & {
    AccountId: string;
    Arn: string;
    CreatedAt: string;
    Id: string;
    Region: string;
    Resource: Resource;
    SchemaVersion: string;
    Severity: number;
    Type: FindingType;
    UpdatedAt: string;
    Service: Service & {
      Detection: Detection & {
        Sequence: Sequence & {
          Uid: string;
          Description: SequenceDescription;
          Signals: (Signal & {
            Uid: string;
            Type: SignalType;
            Name: string;
            CreatedAt: Date;
            UpdatedAt: Date;
            FirstSeenAt: Date;
            LastSeenAt: Date;
            Count: number;
            SignalIndicators: (Indicator & { Key: IndicatorType })[];
            Activities: (Activity & { Type: ActivityType })[];
          })[];
          Actors: (Actor & {
            Id: string;
            User: User & {
              Name: string;
              Uid: string;
              Type: string;
              Account: Account & { Uid: string };
            };
            Process: ActorProcess & { Name: ProcessName; Path: ProcessPath };
          })[];
          Resources: (ResourceV2 & {
            Uid: string;
            ResourceType: FindingResourceType;
            Data: ResourceData & { Container: ContainerFindingResource & { Image: string } };
          })[];
          Endpoints: (NetworkEndpoint & {
            Id: string;
            Location: NetworkGeoLocation & {
              City: string;
              Country: string;
              Latitude: number;
              Longitude: number;
            };
            AutonomousSystem: AutonomousSystem & { Name: string; Number: number };
            Connection: NetworkConnection & { Direction: NetworkDirection };
          })[];
          SequenceIndicators: (Indicator & { Key: IndicatorType })[];
        };
      };
      MalwareScanDetails: MalwareScanDetails & {
        ScanConfiguration: MalwareProtectionFindingsScanConfiguration & {
          IncrementalScanDetails: IncrementalScanDetails & { BaselineResourceArn: NonEmptyString };
        };
      };
    };
  })[];
}
export type FindingStatisticType = "COUNT_BY_SEVERITY" | (string & {});
export type FindingStatisticTypes = FindingStatisticType[];
export type GroupByType =
  | "ACCOUNT"
  | "DATE"
  | "FINDING_TYPE"
  | "RESOURCE"
  | "SEVERITY"
  | (string & {});
export type MaxResults100 = number;
export interface GetFindingsStatisticsRequest {
  DetectorId: string;
  FindingStatisticTypes?: FindingStatisticType[];
  FindingCriteria?: FindingCriteria;
  GroupBy?: GroupByType;
  OrderBy?: OrderBy;
  MaxResults?: number;
}
export type CountBySeverity = { [key: string]: number | undefined };
export interface AccountStatistics {
  AccountId?: string;
  LastGeneratedAt?: Date;
  TotalFindings?: number;
}
export type GroupedByAccount = AccountStatistics[];
export interface DateStatistics {
  Date?: Date;
  LastGeneratedAt?: Date;
  Severity?: number;
  TotalFindings?: number;
}
export type GroupedByDate = DateStatistics[];
export interface FindingTypeStatistics {
  FindingType?: string;
  LastGeneratedAt?: Date;
  TotalFindings?: number;
}
export type GroupedByFindingType = FindingTypeStatistics[];
export interface ResourceStatistics {
  AccountId?: string;
  LastGeneratedAt?: Date;
  ResourceId?: string;
  ResourceType?: string;
  TotalFindings?: number;
}
export type GroupedByResource = ResourceStatistics[];
export interface SeverityStatistics {
  LastGeneratedAt?: Date;
  Severity?: number;
  TotalFindings?: number;
}
export type GroupedBySeverity = SeverityStatistics[];
export interface FindingStatistics {
  CountBySeverity?: { [key: string]: number | undefined };
  GroupedByAccount?: AccountStatistics[];
  GroupedByDate?: DateStatistics[];
  GroupedByFindingType?: FindingTypeStatistics[];
  GroupedByResource?: ResourceStatistics[];
  GroupedBySeverity?: SeverityStatistics[];
}
export interface GetFindingsStatisticsResponse {
  FindingStatistics: FindingStatistics;
  NextToken?: string;
}
export interface GetInvestigationRequest {
  DetectorId: string;
  InvestigationId: string;
}
export type InvestigationStatus = "RUNNING" | "COMPLETED" | "FAILED" | (string & {});
export type TriggeredBy = string;
export interface Product {
  Name?: string;
  Feature?: string;
}
export interface InvestigationMetadata {
  Version?: string;
  Product?: Product;
}
export type CloudProvider = "AWS" | (string & {});
export interface CloudDetails {
  Provider?: CloudProvider;
  Region?: string;
  Account?: string;
}
export type RiskLevel = "Info" | "Low" | "Medium" | "High" | "Critical" | (string & {});
export type RiskDetails = string;
export type Confidence = "Unknown" | "Low" | "Medium" | "High" | (string & {});
export type InvestigationErrorDetails = string;
export interface Investigation {
  InvestigationId?: string;
  Status?: InvestigationStatus;
  TriggerPrompt?: string;
  TriggeredBy?: string;
  Metadata?: InvestigationMetadata;
  Cloud?: CloudDetails;
  RiskLevel?: RiskLevel;
  Risk?: string;
  Confidence?: Confidence;
  Summary?: string;
  StartTime?: Date;
  EndTime?: Date;
  Error?: string;
}
export interface GetInvestigationResponse {
  Investigation: Investigation & {
    InvestigationId: InvestigationId;
    Status: InvestigationStatus;
    TriggerPrompt: TriggerPrompt;
    TriggeredBy: TriggeredBy;
    Metadata: InvestigationMetadata & { Version: string; Product: Product & { Name: string } };
    Cloud: CloudDetails & { Provider: CloudProvider; Region: string; Account: string };
  };
}
export interface GetInvitationsCountRequest {}
export interface GetInvitationsCountResponse {
  InvitationsCount?: number;
}
export interface GetIPSetRequest {
  DetectorId: string;
  IpSetId?: string;
}
export type IpSetStatus =
  | "INACTIVE"
  | "ACTIVATING"
  | "ACTIVE"
  | "DEACTIVATING"
  | "ERROR"
  | "DELETE_PENDING"
  | "DELETED"
  | (string & {});
export interface GetIPSetResponse {
  Name: string;
  Format: IpSetFormat;
  Location: string;
  Status: IpSetStatus;
  Tags?: { [key: string]: string | undefined };
  ExpectedBucketOwner?: string;
}
export interface GetMalwareProtectionPlanRequest {
  MalwareProtectionPlanId?: string;
}
export type MalwareProtectionPlanStatus = "ACTIVE" | "WARNING" | "ERROR" | (string & {});
export interface MalwareProtectionPlanStatusReason {
  Code?: string;
  Message?: string;
}
export type MalwareProtectionPlanStatusReasonsList = MalwareProtectionPlanStatusReason[];
export interface GetMalwareProtectionPlanResponse {
  Arn?: string;
  Role?: string;
  ProtectedResource?: CreateProtectedResource;
  Actions?: MalwareProtectionPlanActions;
  CreatedAt?: Date;
  Status?: MalwareProtectionPlanStatus;
  StatusReasons?: MalwareProtectionPlanStatusReason[];
  Tags?: { [key: string]: string | undefined };
}
export interface GetMalwareScanRequest {
  ScanId?: string;
}
export type MalwareProtectionResourceType =
  | "EBS_RECOVERY_POINT"
  | "EBS_SNAPSHOT"
  | "EBS_VOLUME"
  | "EC2_AMI"
  | "EC2_INSTANCE"
  | "EC2_RECOVERY_POINT"
  | "S3_RECOVERY_POINT"
  | "S3_BUCKET"
  | "S3_POINT_IN_TIME_RECOVERY"
  | (string & {});
export type NonNegativeInteger = number;
export type MalwareProtectionScanStatus =
  | "RUNNING"
  | "COMPLETED"
  | "COMPLETED_WITH_ISSUES"
  | "FAILED"
  | "SKIPPED"
  | (string & {});
export type ScanStatusReason =
  | "ACCESS_DENIED"
  | "RESOURCE_NOT_FOUND"
  | "SNAPSHOT_SIZE_LIMIT_EXCEEDED"
  | "RESOURCE_UNAVAILABLE"
  | "INCONSISTENT_SOURCE"
  | "INCREMENTAL_NO_DIFFERENCE"
  | "NO_EBS_VOLUMES_FOUND"
  | "UNSUPPORTED_PRODUCT_CODE_TYPE"
  | "AMI_SNAPSHOT_LIMIT_EXCEEDED"
  | "UNRELATED_RESOURCES"
  | "BASE_RESOURCE_NOT_SCANNED"
  | "BASE_CREATED_AFTER_TARGET"
  | "UNSUPPORTED_FOR_INCREMENTAL"
  | "UNSUPPORTED_AMI"
  | "UNSUPPORTED_SNAPSHOT"
  | "UNSUPPORTED_COMPOSITE_RECOVERY_POINT"
  | "ALL_FILES_SKIPPED_OR_FAILED"
  | (string & {});
export interface EbsSnapshot {
  DeviceName?: string;
}
export interface ScannedResourceDetails {
  EbsVolume?: VolumeDetail;
  EbsSnapshot?: EbsSnapshot;
}
export interface ScannedResource {
  ScannedResourceArn?: string;
  ScannedResourceType?: MalwareProtectionResourceType;
  ScannedResourceStatus?: MalwareProtectionScanStatus;
  ScanStatusReason?: ScanStatusReason;
  ResourceDetails?: ScannedResourceDetails;
}
export type ScannedResources = ScannedResource[];
export interface ScanConfigurationRecoveryPoint {
  BackupVaultName?: string;
  ContinuousScanDetails?: ScanConfigurationContinuousScanDetails;
}
export interface ScanConfiguration {
  Role?: string;
  TriggerDetails?: TriggerDetails;
  IncrementalScanDetails?: IncrementalScanDetails;
  RecoveryPoint?: ScanConfigurationRecoveryPoint;
}
export type ScanResultStatus = "NO_THREATS_FOUND" | "THREATS_FOUND" | (string & {});
export type DetectionSource = "AMAZON" | "BITDEFENDER" | (string & {});
export interface ScanResultThreat {
  Name?: string;
  Source?: DetectionSource;
  Count?: number;
  Hash?: string;
  ItemDetails?: ItemDetails[];
}
export type ScanResultThreats = ScanResultThreat[];
export interface GetMalwareScanResultDetails {
  ScanResultStatus?: ScanResultStatus;
  SkippedFileCount?: number;
  FailedFileCount?: number;
  ThreatFoundFileCount?: number;
  TotalFileCount?: number;
  TotalBytes?: number;
  UniqueThreatCount?: number;
  Threats?: ScanResultThreat[];
}
export interface GetMalwareScanResponse {
  ScanId?: string;
  DetectorId?: string;
  AdminDetectorId?: string;
  ResourceArn?: string;
  ResourceType?: MalwareProtectionResourceType;
  ScannedResourcesCount?: number;
  SkippedResourcesCount?: number;
  FailedResourcesCount?: number;
  ScannedResources?: ScannedResource[];
  ScanConfiguration?: ScanConfiguration & {
    IncrementalScanDetails: IncrementalScanDetails & { BaselineResourceArn: NonEmptyString };
  };
  ScanCategory?: ScanCategory;
  ScanStatus?: MalwareProtectionScanStatus;
  ScanStatusReason?: ScanStatusReason;
  ScanType?: MalwareProtectionScanType;
  ScanStartedAt?: Date;
  ScanCompletedAt?: Date;
  ScanResultDetails?: GetMalwareScanResultDetails;
}
export interface GetMalwareScanSettingsRequest {
  DetectorId: string;
}
export type ScanCriterionKey = "EC2_INSTANCE_TAG" | (string & {});
export interface ScanConditionPair {
  Key?: string;
  Value?: string;
}
export type MapEquals = ScanConditionPair[];
export interface ScanCondition {
  MapEquals?: ScanConditionPair[];
}
export type ScanCriterion = { [key in ScanCriterionKey]?: ScanCondition };
export interface ScanResourceCriteria {
  Include?: { [key: string]: ScanCondition | undefined };
  Exclude?: { [key: string]: ScanCondition | undefined };
}
export type EbsSnapshotPreservation = "NO_RETENTION" | "RETENTION_WITH_FINDING" | (string & {});
export interface GetMalwareScanSettingsResponse {
  ScanResourceCriteria?: ScanResourceCriteria & {
    Include: {
      [key: string]:
        | (ScanCondition & { MapEquals: (ScanConditionPair & { Key: TagKey })[] })
        | undefined;
    };
    Exclude: {
      [key: string]:
        | (ScanCondition & { MapEquals: (ScanConditionPair & { Key: TagKey })[] })
        | undefined;
    };
  };
  EbsSnapshotPreservation?: EbsSnapshotPreservation;
}
export interface GetMasterAccountRequest {
  DetectorId: string;
}
export interface Master {
  AccountId?: string;
  InvitationId?: string;
  RelationshipStatus?: string;
  InvitedAt?: string;
}
export interface GetMasterAccountResponse {
  Master: Master;
}
export interface GetMemberDetectorsRequest {
  DetectorId: string;
  AccountIds?: string[];
}
export interface MemberAdditionalConfigurationResult {
  Name?: OrgFeatureAdditionalConfiguration;
  Status?: FeatureStatus;
  UpdatedAt?: Date;
  ManagedBy?: ManagedBy;
}
export type MemberAdditionalConfigurationResults = MemberAdditionalConfigurationResult[];
export interface MemberFeaturesConfigurationResult {
  Name?: OrgFeature;
  Status?: FeatureStatus;
  UpdatedAt?: Date;
  AdditionalConfiguration?: MemberAdditionalConfigurationResult[];
  ManagedBy?: ManagedBy;
}
export type MemberFeaturesConfigurationsResults = MemberFeaturesConfigurationResult[];
export interface MemberDataSourceConfiguration {
  AccountId?: string;
  DataSources?: DataSourceConfigurationsResult;
  Features?: MemberFeaturesConfigurationResult[];
}
export type MemberDataSourceConfigurations = MemberDataSourceConfiguration[];
export interface GetMemberDetectorsResponse {
  MemberDataSourceConfigurations: (MemberDataSourceConfiguration & {
    AccountId: AccountId;
    DataSources: DataSourceConfigurationsResult & {
      CloudTrail: CloudTrailConfigurationResult & { Status: DataSourceStatus };
      DNSLogs: DNSLogsConfigurationResult & { Status: DataSourceStatus };
      FlowLogs: FlowLogsConfigurationResult & { Status: DataSourceStatus };
      S3Logs: S3LogsConfigurationResult & { Status: DataSourceStatus };
      Kubernetes: KubernetesConfigurationResult & {
        AuditLogs: KubernetesAuditLogsConfigurationResult & { Status: DataSourceStatus };
      };
    };
  })[];
  UnprocessedAccounts: (UnprocessedAccount & { AccountId: AccountId; Result: string })[];
}
export interface GetMembersRequest {
  DetectorId: string;
  AccountIds?: string[];
}
export interface Member {
  AccountId?: string;
  DetectorId?: string;
  MasterId?: string;
  Email?: string | redacted.Redacted<string>;
  RelationshipStatus?: string;
  InvitedAt?: string;
  UpdatedAt?: string;
  AdministratorId?: string;
}
export type Members = Member[];
export interface GetMembersResponse {
  Members: (Member & {
    AccountId: AccountId;
    MasterId: string;
    Email: Email;
    RelationshipStatus: string;
    UpdatedAt: string;
  })[];
  UnprocessedAccounts: (UnprocessedAccount & { AccountId: AccountId; Result: string })[];
}
export interface GetOrganizationStatisticsRequest {}
export interface OrganizationFeatureStatisticsAdditionalConfiguration {
  Name?: OrgFeatureAdditionalConfiguration;
  EnabledAccountsCount?: number;
}
export type OrganizationFeatureStatisticsAdditionalConfigurations =
  OrganizationFeatureStatisticsAdditionalConfiguration[];
export interface OrganizationFeatureStatistics {
  Name?: OrgFeature;
  EnabledAccountsCount?: number;
  AdditionalConfiguration?: OrganizationFeatureStatisticsAdditionalConfiguration[];
}
export type OrganizationFeatureStatisticsResults = OrganizationFeatureStatistics[];
export interface OrganizationStatistics {
  TotalAccountsCount?: number;
  MemberAccountsCount?: number;
  ActiveAccountsCount?: number;
  EnabledAccountsCount?: number;
  CountByFeature?: OrganizationFeatureStatistics[];
}
export interface OrganizationDetails {
  UpdatedAt?: Date;
  OrganizationStatistics?: OrganizationStatistics;
}
export interface GetOrganizationStatisticsResponse {
  OrganizationDetails?: OrganizationDetails;
}
export interface GetRemainingFreeTrialDaysRequest {
  DetectorId: string;
  AccountIds: string[];
}
export interface DataSourceFreeTrial {
  FreeTrialDaysRemaining?: number;
}
export interface KubernetesDataSourceFreeTrial {
  AuditLogs?: DataSourceFreeTrial;
}
export interface MalwareProtectionDataSourceFreeTrial {
  ScanEc2InstanceWithFindings?: DataSourceFreeTrial;
}
export interface DataSourcesFreeTrial {
  CloudTrail?: DataSourceFreeTrial;
  DnsLogs?: DataSourceFreeTrial;
  FlowLogs?: DataSourceFreeTrial;
  S3Logs?: DataSourceFreeTrial;
  Kubernetes?: KubernetesDataSourceFreeTrial;
  MalwareProtection?: MalwareProtectionDataSourceFreeTrial;
}
export type FreeTrialFeatureResult =
  | "FLOW_LOGS"
  | "CLOUD_TRAIL"
  | "DNS_LOGS"
  | "S3_DATA_EVENTS"
  | "EKS_AUDIT_LOGS"
  | "EBS_MALWARE_PROTECTION"
  | "RDS_LOGIN_EVENTS"
  | "LAMBDA_NETWORK_LOGS"
  | "EKS_RUNTIME_MONITORING"
  | "EC2_RUNTIME_MONITORING"
  | "FARGATE_RUNTIME_MONITORING"
  | "AI_PROTECTION"
  | (string & {});
export interface FreeTrialFeatureConfigurationResult {
  Name?: FreeTrialFeatureResult;
  FreeTrialDaysRemaining?: number;
}
export type FreeTrialFeatureConfigurationsResults = FreeTrialFeatureConfigurationResult[];
export interface AccountFreeTrialInfo {
  AccountId?: string;
  DataSources?: DataSourcesFreeTrial;
  Features?: FreeTrialFeatureConfigurationResult[];
}
export type AccountFreeTrialInfos = AccountFreeTrialInfo[];
export interface GetRemainingFreeTrialDaysResponse {
  Accounts?: AccountFreeTrialInfo[];
  UnprocessedAccounts?: (UnprocessedAccount & { AccountId: AccountId; Result: string })[];
}
export interface GetThreatEntitySetRequest {
  DetectorId: string;
  ThreatEntitySetId?: string;
}
export type ThreatEntitySetStatus =
  | "INACTIVE"
  | "ACTIVATING"
  | "ACTIVE"
  | "DEACTIVATING"
  | "ERROR"
  | "DELETE_PENDING"
  | "DELETED"
  | (string & {});
export interface GetThreatEntitySetResponse {
  Name: string;
  Format: ThreatEntitySetFormat;
  Location: string;
  ExpectedBucketOwner?: string;
  Status: ThreatEntitySetStatus;
  Tags?: { [key: string]: string | undefined };
  CreatedAt?: Date;
  UpdatedAt?: Date;
  ErrorDetails?: string;
}
export interface GetThreatIntelSetRequest {
  DetectorId: string;
  ThreatIntelSetId: string;
}
export type ThreatIntelSetStatus =
  | "INACTIVE"
  | "ACTIVATING"
  | "ACTIVE"
  | "DEACTIVATING"
  | "ERROR"
  | "DELETE_PENDING"
  | "DELETED"
  | (string & {});
export interface GetThreatIntelSetResponse {
  Name: string;
  Format: ThreatIntelSetFormat;
  Location: string;
  Status: ThreatIntelSetStatus;
  Tags?: { [key: string]: string | undefined };
  ExpectedBucketOwner?: string;
}
export interface GetTrustedEntitySetRequest {
  DetectorId: string;
  TrustedEntitySetId: string;
}
export type TrustedEntitySetStatus =
  | "INACTIVE"
  | "ACTIVATING"
  | "ACTIVE"
  | "DEACTIVATING"
  | "ERROR"
  | "DELETE_PENDING"
  | "DELETED"
  | (string & {});
export interface GetTrustedEntitySetResponse {
  Name: string;
  Format: TrustedEntitySetFormat;
  Location: string;
  ExpectedBucketOwner?: string;
  Status: TrustedEntitySetStatus;
  Tags?: { [key: string]: string | undefined };
  CreatedAt?: Date;
  UpdatedAt?: Date;
  ErrorDetails?: string;
}
export type UsageStatisticType =
  | "SUM_BY_ACCOUNT"
  | "SUM_BY_DATA_SOURCE"
  | "SUM_BY_RESOURCE"
  | "TOP_RESOURCES"
  | "SUM_BY_FEATURES"
  | "TOP_ACCOUNTS_BY_FEATURE"
  | (string & {});
export type DataSource =
  | "FLOW_LOGS"
  | "CLOUD_TRAIL"
  | "DNS_LOGS"
  | "S3_LOGS"
  | "KUBERNETES_AUDIT_LOGS"
  | "EC2_MALWARE_SCAN"
  | (string & {});
export type DataSourceList = DataSource[];
export type ResourceList = string[];
export type UsageFeature =
  | "FLOW_LOGS"
  | "CLOUD_TRAIL"
  | "DNS_LOGS"
  | "S3_DATA_EVENTS"
  | "EKS_AUDIT_LOGS"
  | "EBS_MALWARE_PROTECTION"
  | "RDS_LOGIN_EVENTS"
  | "LAMBDA_NETWORK_LOGS"
  | "EKS_RUNTIME_MONITORING"
  | "EC2_RUNTIME_MONITORING"
  | "FARGATE_RUNTIME_MONITORING"
  | "RDS_DBI_PROTECTION_PROVISIONED"
  | "RDS_DBI_PROTECTION_SERVERLESS"
  | "AI_PROTECTION"
  | (string & {});
export type UsageFeatureList = UsageFeature[];
export interface UsageCriteria {
  AccountIds?: string[];
  DataSources?: DataSource[];
  Resources?: string[];
  Features?: UsageFeature[];
}
export interface GetUsageStatisticsRequest {
  DetectorId: string;
  UsageStatisticType?: UsageStatisticType;
  UsageCriteria?: UsageCriteria;
  Unit?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface Total {
  Amount?: string;
  Unit?: string;
}
export interface UsageAccountResult {
  AccountId?: string;
  Total?: Total;
}
export type UsageAccountResultList = UsageAccountResult[];
export interface UsageTopAccountResult {
  AccountId?: string;
  Total?: Total;
}
export type UsageTopAccountsByFeatureList = UsageTopAccountResult[];
export interface UsageTopAccountsResult {
  Feature?: UsageFeature;
  Accounts?: UsageTopAccountResult[];
}
export type UsageTopAccountsResultList = UsageTopAccountsResult[];
export interface UsageDataSourceResult {
  DataSource?: DataSource;
  Total?: Total;
}
export type UsageDataSourceResultList = UsageDataSourceResult[];
export interface UsageResourceResult {
  Resource?: string;
  Total?: Total;
}
export type UsageResourceResultList = UsageResourceResult[];
export interface UsageFeatureResult {
  Feature?: UsageFeature;
  Total?: Total;
}
export type UsageFeatureResultList = UsageFeatureResult[];
export interface UsageStatistics {
  SumByAccount?: UsageAccountResult[];
  TopAccountsByFeature?: UsageTopAccountsResult[];
  SumByDataSource?: UsageDataSourceResult[];
  SumByResource?: UsageResourceResult[];
  TopResources?: UsageResourceResult[];
  SumByFeature?: UsageFeatureResult[];
}
export interface GetUsageStatisticsResponse {
  UsageStatistics?: UsageStatistics;
  NextToken?: string;
}
export interface InviteMembersRequest {
  DetectorId: string;
  AccountIds?: string[];
  DisableEmailNotification?: boolean;
  Message?: string;
}
export interface InviteMembersResponse {
  UnprocessedAccounts: (UnprocessedAccount & { AccountId: AccountId; Result: string })[];
}
export type CoverageSortKey =
  | "ACCOUNT_ID"
  | "COVERAGE_STATUS"
  | "ISSUE"
  | "ADDON_VERSION"
  | "UPDATED_AT"
  | "CLUSTER_NAME"
  | "EKS_CLUSTER_NAME"
  | "ECS_CLUSTER_NAME"
  | "INSTANCE_ID"
  | (string & {});
export interface CoverageSortCriteria {
  AttributeName?: CoverageSortKey;
  OrderBy?: OrderBy;
}
export interface ListCoverageRequest {
  DetectorId: string;
  NextToken?: string;
  MaxResults?: number;
  FilterCriteria?: CoverageFilterCriteria;
  SortCriteria?: CoverageSortCriteria;
}
export interface AddonDetails {
  AddonVersion?: string;
  AddonStatus?: string;
}
export type ManagementType = "AUTO_MANAGED" | "MANUAL" | "DISABLED" | (string & {});
export interface CoverageEksClusterDetails {
  ClusterName?: string;
  CoveredNodes?: number;
  CompatibleNodes?: number;
  AddonDetails?: AddonDetails;
  ManagementType?: ManagementType;
}
export type Issues = string[];
export interface FargateDetails {
  Issues?: string[];
  ManagementType?: ManagementType;
}
export interface ContainerInstanceDetails {
  CoveredContainerInstances?: number;
  CompatibleContainerInstances?: number;
}
export interface CoverageEcsClusterDetails {
  ClusterName?: string;
  FargateDetails?: FargateDetails;
  ContainerInstanceDetails?: ContainerInstanceDetails;
}
export interface AgentDetails {
  Version?: string;
}
export interface CoverageEc2InstanceDetails {
  InstanceId?: string;
  InstanceType?: string;
  ClusterArn?: string;
  AgentDetails?: AgentDetails;
  ManagementType?: ManagementType;
}
export interface CoverageResourceDetails {
  EksClusterDetails?: CoverageEksClusterDetails;
  EcsClusterDetails?: CoverageEcsClusterDetails;
  Ec2InstanceDetails?: CoverageEc2InstanceDetails;
  ResourceType?: ResourceType;
}
export interface CoverageResource {
  ResourceId?: string;
  DetectorId?: string;
  AccountId?: string;
  ResourceDetails?: CoverageResourceDetails;
  CoverageStatus?: CoverageStatus;
  Issue?: string;
  UpdatedAt?: Date;
}
export type CoverageResources = CoverageResource[];
export interface ListCoverageResponse {
  Resources: CoverageResource[];
  NextToken?: string;
}
export type DetectionRuleMaxResults = number;
export interface ListCustomDetectionRuleAssociationsRequest {
  MaxResults?: number;
  NextToken?: string;
  RuleId?: string;
  Mode?: AssociationMode;
}
export interface AssociationSummary {
  AssociationId?: string;
  Arn?: string;
  RuleId?: string;
  Mode?: AssociationMode;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  ExpiresAt?: Date;
}
export type AssociationSummaryList = AssociationSummary[];
export interface ListCustomDetectionRuleAssociationsResponse {
  RuleAssociations: (AssociationSummary & {
    AssociationId: AssociationId;
    Arn: DetectionRuleArn;
    RuleId: RuleId;
    Mode: AssociationMode;
    CreatedAt: Date;
    UpdatedAt: Date;
  })[];
  NextToken?: string;
}
export interface ListCustomDetectionRuleOrgConfigurationsRequest {
  MaxResults?: number;
  NextToken?: string;
  Status?: DetectionRuleConfigurationStatus;
}
export interface DetectionRuleOrgConfigurationSummary {
  RuleId?: string;
  Mode?: AssociationMode;
  Status?: DetectionRuleConfigurationStatus;
  StatusReason?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  ExpiresAt?: Date;
}
export type DetectionRuleOrgConfigurationSummaryList = DetectionRuleOrgConfigurationSummary[];
export interface ListCustomDetectionRuleOrgConfigurationsResponse {
  Configurations: (DetectionRuleOrgConfigurationSummary & {
    RuleId: RuleId;
    Mode: AssociationMode;
    Status: DetectionRuleConfigurationStatus;
    CreatedAt: Date;
    UpdatedAt: Date;
  })[];
  NextToken?: string;
}
export type FilterFieldName =
  | "name"
  | "description"
  | "dataSource"
  | "severity"
  | "tactic"
  | "technique"
  | "service"
  | (string & {});
export type DetectionRuleFilterValue = string;
export type DetectionRuleFilterValues = string[];
export type DetectionRuleFilterCondition = "EQUALS" | "CONTAINS" | (string & {});
export interface DetectionRuleFilter {
  Name?: FilterFieldName;
  Values?: string[];
  Condition?: DetectionRuleFilterCondition;
}
export type DetectionRuleFilterList = DetectionRuleFilter[];
export interface ListCustomDetectionRulesRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: DetectionRuleFilter[];
}
export interface RuleSummary {
  RuleId?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  Severity?: DetectionRuleSeverity;
  DataSource?: DetectionRuleDataSource;
  Tactic?: string;
  Technique?: string;
  Service?: string;
  Language?: RuleLanguage;
  Schema?: RuleSchema;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export type RuleSummaryList = RuleSummary[];
export interface ListCustomDetectionRulesResponse {
  Rules: (RuleSummary & {
    RuleId: RuleId;
    Arn: DetectionRuleArn;
    Name: RuleName;
    Description: DetectionRuleDescription;
    Severity: DetectionRuleSeverity;
    DataSource: DetectionRuleDataSource;
    Tactic: MitreTactic;
    Technique: MitreTechnique;
    Service: DetectionRuleServiceName;
    CreatedAt: Date;
  })[];
  NextToken?: string;
}
export interface ListDetectorsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export type DetectorIds = string[];
export interface ListDetectorsResponse {
  DetectorIds: string[];
  NextToken?: string;
}
export interface ListFiltersRequest {
  DetectorId: string;
  MaxResults?: number;
  NextToken?: string;
}
export type FilterNames = string[];
export interface ListFiltersResponse {
  FilterNames: string[];
  NextToken?: string;
}
export interface ListFindingsRequest {
  DetectorId: string;
  FindingCriteria?: FindingCriteria;
  SortCriteria?: SortCriteria;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListFindingsResponse {
  FindingIds: string[];
  NextToken?: string;
}
export type InvestigationSortField =
  | "START_TIME"
  | "END_TIME"
  | "STATUS"
  | "RISK_LEVEL"
  | "CONFIDENCE"
  | (string & {});
export interface InvestigationSortCriteria {
  AttributeName?: InvestigationSortField;
  OrderBy?: OrderBy;
}
export type NextToken = string;
export interface ListInvestigationsRequest {
  DetectorId: string;
  SortCriteria?: InvestigationSortCriteria;
  MaxResults?: number;
  NextToken?: string;
}
export type InvestigationTitle = string;
export interface InvestigationSummary {
  InvestigationId?: string;
  Status?: InvestigationStatus;
  TriggerPrompt?: string;
  RiskLevel?: RiskLevel;
  Confidence?: Confidence;
  Title?: string;
  AccountId?: string;
  StartTime?: Date;
  EndTime?: Date;
}
export type InvestigationSummaries = InvestigationSummary[];
export interface ListInvestigationsResponse {
  Investigations: InvestigationSummary[];
  NextToken?: string;
}
export interface ListInvitationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface Invitation {
  AccountId?: string;
  InvitationId?: string;
  RelationshipStatus?: string;
  InvitedAt?: string;
}
export type Invitations = Invitation[];
export interface ListInvitationsResponse {
  Invitations?: Invitation[];
  NextToken?: string;
}
export interface ListIPSetsRequest {
  DetectorId: string;
  MaxResults?: number;
  NextToken?: string;
}
export type IpSetIds = string[];
export interface ListIPSetsResponse {
  IpSetIds: string[];
  NextToken?: string;
}
export interface ListMalwareProtectionPlansRequest {
  NextToken?: string;
}
export interface MalwareProtectionPlanSummary {
  MalwareProtectionPlanId?: string;
}
export type MalwareProtectionPlansSummary = MalwareProtectionPlanSummary[];
export interface ListMalwareProtectionPlansResponse {
  MalwareProtectionPlans?: MalwareProtectionPlanSummary[];
  NextToken?: string;
}
export type ListMalwareScansCriterionKey =
  | "RESOURCE_ARN"
  | "SCAN_ID"
  | "ACCOUNT_ID"
  | "GUARDDUTY_FINDING_ID"
  | "RESOURCE_TYPE"
  | "SCAN_START_TIME"
  | "SCAN_STATUS"
  | "SCAN_TYPE"
  | (string & {});
export interface ListMalwareScansFilterCriterion {
  ListMalwareScansCriterionKey?: ListMalwareScansCriterionKey;
  FilterCondition?: FilterCondition;
}
export type ListMalwareScansFilterCriterionList = ListMalwareScansFilterCriterion[];
export interface ListMalwareScansFilterCriteria {
  ListMalwareScansFilterCriterion?: ListMalwareScansFilterCriterion[];
}
export interface ListMalwareScansRequest {
  MaxResults?: number;
  NextToken?: string;
  FilterCriteria?: ListMalwareScansFilterCriteria;
  SortCriteria?: SortCriteria;
}
export interface MalwareScan {
  ResourceArn?: string;
  ResourceType?: MalwareProtectionResourceType;
  ScanId?: string;
  ScanStatus?: MalwareProtectionScanStatus;
  ScanResultStatus?: ScanResultStatus;
  ScanType?: MalwareProtectionScanType;
  ScanStartedAt?: Date;
  ScanCompletedAt?: Date;
}
export type MalwareScans = MalwareScan[];
export interface ListMalwareScansResponse {
  Scans: MalwareScan[];
  NextToken?: string;
}
export interface ListMembersRequest {
  DetectorId: string;
  MaxResults?: number;
  NextToken?: string;
  OnlyAssociated?: string;
}
export interface ListMembersResponse {
  Members?: (Member & {
    AccountId: AccountId;
    MasterId: string;
    Email: Email;
    RelationshipStatus: string;
    UpdatedAt: string;
  })[];
  NextToken?: string;
}
export interface ListOrganizationAdminAccountsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export type AdminStatus = "ENABLED" | "DISABLE_IN_PROGRESS" | (string & {});
export interface AdminAccount {
  AdminAccountId?: string;
  AdminStatus?: AdminStatus;
}
export type AdminAccounts = AdminAccount[];
export interface ListOrganizationAdminAccountsResponse {
  AdminAccounts?: AdminAccount[];
  NextToken?: string;
}
export interface ListPublishingDestinationsRequest {
  DetectorId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface Destination {
  DestinationId?: string;
  DestinationType?: DestinationType;
  Status?: PublishingStatus;
}
export type Destinations = Destination[];
export interface ListPublishingDestinationsResponse {
  Destinations: (Destination & {
    DestinationId: string;
    DestinationType: DestinationType;
    Status: PublishingStatus;
  })[];
  NextToken?: string;
}
export type GuardDutyArn = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
export interface ListThreatEntitySetsRequest {
  DetectorId: string;
  MaxResults?: number;
  NextToken?: string;
}
export type ThreatEntitySetIds = string[];
export interface ListThreatEntitySetsResponse {
  ThreatEntitySetIds: string[];
  NextToken?: string;
}
export interface ListThreatIntelSetsRequest {
  DetectorId: string;
  MaxResults?: number;
  NextToken?: string;
}
export type ThreatIntelSetIds = string[];
export interface ListThreatIntelSetsResponse {
  ThreatIntelSetIds: string[];
  NextToken?: string;
}
export interface ListTrustedEntitySetsRequest {
  DetectorId: string;
  MaxResults?: number;
  NextToken?: string;
}
export type TrustedEntitySetIds = string[];
export interface ListTrustedEntitySetsResponse {
  TrustedEntitySetIds: string[];
  NextToken?: string;
}
export interface S3ObjectForSendObjectMalwareScan {
  Bucket?: string;
  Key?: string;
  VersionId?: string;
}
export interface SendObjectMalwareScanRequest {
  S3Object?: S3ObjectForSendObjectMalwareScan;
}
export interface SendObjectMalwareScanResponse {}
export type ResourceArn = string;
export interface ContinuousScanDetails {
  StartTime?: Date;
  EndTime: Date;
}
export interface RecoveryPoint {
  BackupVaultName?: string;
  ContinuousScanDetails?: ContinuousScanDetails;
}
export interface StartMalwareScanConfiguration {
  Role?: string;
  IncrementalScanDetails?: IncrementalScanDetails;
  RecoveryPoint?: RecoveryPoint;
}
export interface StartMalwareScanRequest {
  ResourceArn?: string;
  ClientToken?: string;
  ScanConfiguration?: StartMalwareScanConfiguration;
}
export interface StartMalwareScanResponse {
  ScanId?: string;
}
export interface StartMonitoringMembersRequest {
  DetectorId: string;
  AccountIds?: string[];
}
export interface StartMonitoringMembersResponse {
  UnprocessedAccounts: (UnprocessedAccount & { AccountId: AccountId; Result: string })[];
}
export interface StopMonitoringMembersRequest {
  DetectorId: string;
  AccountIds?: string[];
}
export interface StopMonitoringMembersResponse {
  UnprocessedAccounts: (UnprocessedAccount & { AccountId: AccountId; Result: string })[];
}
export interface TagResourceRequest {
  ResourceArn?: string;
  Tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export interface UnarchiveFindingsRequest {
  DetectorId: string;
  FindingIds?: string[];
}
export interface UnarchiveFindingsResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys?: string[];
}
export interface UntagResourceResponse {}
export interface UpdateCustomDetectionRuleAssociationRequest {
  RuleId: string;
  AssociationId: string;
  Mode?: AssociationMode;
}
export interface UpdateCustomDetectionRuleAssociationResponse {}
export interface UpdateCustomDetectionRuleOrgConfigurationRequest {
  RuleId: string;
  Mode?: AssociationMode;
  IncludeAccountIds?: string[];
  ExcludeAccountIds?: string[];
}
export interface UpdateCustomDetectionRuleOrgConfigurationResponse {}
export interface UpdateDetectorRequest {
  DetectorId: string;
  Enable?: boolean;
  FindingPublishingFrequency?: FindingPublishingFrequency;
  DataSources?: DataSourceConfigurations;
  Features?: DetectorFeatureConfiguration[];
}
export interface UpdateDetectorResponse {}
export interface UpdateFilterRequest {
  DetectorId: string;
  FilterName: string;
  Description?: string;
  Action?: FilterAction;
  Rank?: number;
  FindingCriteria?: FindingCriteria;
}
export interface UpdateFilterResponse {
  Name: string;
}
export type Feedback = "USEFUL" | "NOT_USEFUL" | (string & {});
export interface UpdateFindingsFeedbackRequest {
  DetectorId: string;
  FindingIds?: string[];
  Feedback?: Feedback;
  Comments?: string | redacted.Redacted<string>;
}
export interface UpdateFindingsFeedbackResponse {}
export interface UpdateIPSetRequest {
  DetectorId: string;
  IpSetId?: string;
  Name?: string;
  Location?: string;
  Activate?: boolean;
  ExpectedBucketOwner?: string;
}
export interface UpdateIPSetResponse {}
export interface UpdateS3BucketResource {
  ObjectPrefixes?: string[];
}
export interface UpdateProtectedResource {
  S3Bucket?: UpdateS3BucketResource;
}
export interface UpdateMalwareProtectionPlanRequest {
  MalwareProtectionPlanId: string;
  Role?: string;
  Actions?: MalwareProtectionPlanActions;
  ProtectedResource?: UpdateProtectedResource;
}
export interface UpdateMalwareProtectionPlanResponse {}
export interface UpdateMalwareScanSettingsRequest {
  DetectorId: string;
  ScanResourceCriteria?: ScanResourceCriteria;
  EbsSnapshotPreservation?: EbsSnapshotPreservation;
}
export interface UpdateMalwareScanSettingsResponse {}
export interface MemberAdditionalConfiguration {
  Name?: OrgFeatureAdditionalConfiguration;
  Status?: FeatureStatus;
}
export type MemberAdditionalConfigurations = MemberAdditionalConfiguration[];
export interface MemberFeaturesConfiguration {
  Name?: OrgFeature;
  Status?: FeatureStatus;
  AdditionalConfiguration?: MemberAdditionalConfiguration[];
}
export type MemberFeaturesConfigurations = MemberFeaturesConfiguration[];
export interface UpdateMemberDetectorsRequest {
  DetectorId: string;
  AccountIds?: string[];
  DataSources?: DataSourceConfigurations;
  Features?: MemberFeaturesConfiguration[];
}
export interface UpdateMemberDetectorsResponse {
  UnprocessedAccounts: (UnprocessedAccount & { AccountId: AccountId; Result: string })[];
}
export interface OrganizationS3LogsConfiguration {
  AutoEnable?: boolean;
}
export interface OrganizationKubernetesAuditLogsConfiguration {
  AutoEnable?: boolean;
}
export interface OrganizationKubernetesConfiguration {
  AuditLogs?: OrganizationKubernetesAuditLogsConfiguration;
}
export interface OrganizationEbsVolumes {
  AutoEnable?: boolean;
}
export interface OrganizationScanEc2InstanceWithFindings {
  EbsVolumes?: OrganizationEbsVolumes;
}
export interface OrganizationMalwareProtectionConfiguration {
  ScanEc2InstanceWithFindings?: OrganizationScanEc2InstanceWithFindings;
}
export interface OrganizationDataSourceConfigurations {
  S3Logs?: OrganizationS3LogsConfiguration;
  Kubernetes?: OrganizationKubernetesConfiguration;
  MalwareProtection?: OrganizationMalwareProtectionConfiguration;
}
export interface OrganizationAdditionalConfiguration {
  Name?: OrgFeatureAdditionalConfiguration;
  AutoEnable?: OrgFeatureStatus;
}
export type OrganizationAdditionalConfigurations = OrganizationAdditionalConfiguration[];
export interface OrganizationFeatureConfiguration {
  Name?: OrgFeature;
  AutoEnable?: OrgFeatureStatus;
  AdditionalConfiguration?: OrganizationAdditionalConfiguration[];
}
export type OrganizationFeaturesConfigurations = OrganizationFeatureConfiguration[];
export interface UpdateOrganizationConfigurationRequest {
  DetectorId: string;
  AutoEnable?: boolean;
  DataSources?: OrganizationDataSourceConfigurations;
  Features?: OrganizationFeatureConfiguration[];
  AutoEnableOrganizationMembers?: AutoEnableMembers;
}
export interface UpdateOrganizationConfigurationResponse {}
export interface UpdatePublishingDestinationRequest {
  DetectorId: string;
  DestinationId: string;
  DestinationProperties?: DestinationProperties;
}
export interface UpdatePublishingDestinationResponse {}
export interface UpdateThreatEntitySetRequest {
  DetectorId: string;
  ThreatEntitySetId?: string;
  Name?: string;
  Location?: string;
  ExpectedBucketOwner?: string;
  Activate?: boolean;
}
export interface UpdateThreatEntitySetResponse {}
export interface UpdateThreatIntelSetRequest {
  DetectorId: string;
  ThreatIntelSetId: string;
  Name?: string;
  Location?: string;
  Activate?: boolean;
  ExpectedBucketOwner?: string;
}
export interface UpdateThreatIntelSetResponse {}
export interface UpdateTrustedEntitySetRequest {
  DetectorId: string;
  TrustedEntitySetId: string;
  Name?: string;
  Location?: string;
  ExpectedBucketOwner?: string;
  Activate?: boolean;
}
export interface UpdateTrustedEntitySetResponse {}
export type AcceptAdministratorInvitationError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Accepts the invitation to be a member account and get monitored by a GuardDuty administrator account that sent the invitation.
 */
export const acceptAdministratorInvitation: API.OperationMethod<
  AcceptAdministratorInvitationRequest,
  AcceptAdministratorInvitationResponse,
  AcceptAdministratorInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<AcceptAdministratorInvitationRequest>,
  output: __S(1) as any as S.Schema<AcceptAdministratorInvitationResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptAdministratorInvitation",
}));

export type AcceptInvitationError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Accepts the invitation to be monitored by a GuardDuty administrator account.
 */
export const acceptInvitation: API.OperationMethod<
  AcceptInvitationRequest,
  AcceptInvitationResponse,
  AcceptInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<AcceptInvitationRequest>,
  output: __S(3) as any as S.Schema<AcceptInvitationResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptInvitation",
}));

export type ArchiveFindingsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Archives GuardDuty findings that are specified by the list of finding IDs.
 *
 * Only the administrator account can archive findings. Member accounts don't have permission to archive findings from their accounts.
 */
export const archiveFindings: API.OperationMethod<
  ArchiveFindingsRequest,
  ArchiveFindingsResponse,
  ArchiveFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5) as any as S.Schema<ArchiveFindingsRequest>,
  output: __S(3) as any as S.Schema<ArchiveFindingsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ArchiveFindings",
}));

export type CreateCustomDetectionRuleAssociationError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Enables a custom detection rule for your account by creating an association. You specify the rule and the mode in which it operates.
 */
export const createCustomDetectionRuleAssociation: API.OperationMethod<
  CreateCustomDetectionRuleAssociationRequest,
  CreateCustomDetectionRuleAssociationResponse,
  CreateCustomDetectionRuleAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7) as any as S.Schema<CreateCustomDetectionRuleAssociationRequest>,
  output: __S(9) as any as S.Schema<CreateCustomDetectionRuleAssociationResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCustomDetectionRuleAssociation",
}));

export type CreateCustomDetectionRuleOrgConfigurationError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates an organization-level configuration that enables a custom detection rule across your organization. This operation is available only to the delegated administrator account.
 */
export const createCustomDetectionRuleOrgConfiguration: API.OperationMethod<
  CreateCustomDetectionRuleOrgConfigurationRequest,
  CreateCustomDetectionRuleOrgConfigurationResponse,
  CreateCustomDetectionRuleOrgConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10) as any as S.Schema<CreateCustomDetectionRuleOrgConfigurationRequest>,
  output: __S(1) as any as S.Schema<CreateCustomDetectionRuleOrgConfigurationResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCustomDetectionRuleOrgConfiguration",
}));

export type CreateDetectorError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Creates a single GuardDuty detector. A detector is a resource that represents the GuardDuty service. To start using GuardDuty, you must create a detector in each Region where you enable the service. You can have only one detector per account per Region. All data sources are enabled in a new detector by default.
 *
 * - When you don't specify any `features`, with an exception to `RUNTIME_MONITORING`, all the optional features are enabled by default.
 *
 * - When you specify some of the `features`, any feature that is not specified in the API call gets enabled by default, with an exception to `RUNTIME_MONITORING`.
 *
 * Specifying both EKS Runtime Monitoring (`EKS_RUNTIME_MONITORING`) and Runtime Monitoring (`RUNTIME_MONITORING`) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring.
 *
 * There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.
 */
export const createDetector: API.OperationMethod<
  CreateDetectorRequest,
  CreateDetectorResponse,
  CreateDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21) as any as S.Schema<CreateDetectorRequest>,
  output: __S(26) as any as S.Schema<CreateDetectorResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDetector",
}));

export type CreateFilterError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Creates a filter using the specified finding criteria. The maximum number of saved filters per Amazon Web Services account per Region is 100. For more information, see Quotas for GuardDuty.
 */
export const createFilter: API.OperationMethod<
  CreateFilterRequest,
  CreateFilterResponse,
  CreateFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30) as any as S.Schema<CreateFilterRequest>,
  output: __S(31) as any as S.Schema<CreateFilterResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFilter",
}));

export type CreateInvestigationError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * This API is currently available as a preview. During the preview, you can initiate up to 10 investigations per account per day, with a total limit of 100 investigations per account. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo).
 *
 * Initiates a GuardDuty investigation that automatically analyzes security findings, correlates related activity, performs account-level analysis, and produces a structured investigation summary with recommended next steps.
 *
 * Only the administrator account can create an investigation. Member accounts don't have permission to create investigations from their accounts.
 *
 * To use this operation, the `AI_ANALYST` feature must be enabled on your detector.
 *
 * This feature uses Amazon Bedrock models that leverage Cross-Region Inference (CRIS), which automatically selects the optimal Amazon Web Services Region within your geography to process the investigation analysis and generate the investigation report. This maximizes available compute resources, model availability, and delivers the best customer experience. Your data remains stored only in the Region where the investigation request originates, however, investigation data and summary results may be processed outside that Region. All data is transmitted encrypted across Amazon's secure network. For more information, see GuardDuty Investigation.
 */
export const createInvestigation: API.OperationMethod<
  CreateInvestigationRequest,
  CreateInvestigationResponse,
  CreateInvestigationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32) as any as S.Schema<CreateInvestigationRequest>,
  output: __S(33) as any as S.Schema<CreateInvestigationResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateInvestigation",
}));

export type CreateIPSetError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Creates a new IPSet, which is called a trusted IP list in the console user interface. An IPSet is a list of IP addresses that are trusted for secure communication with Amazon Web Services infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are included in IPSets. Only users from the administrator account can use this operation.
 */
export const createIPSet: API.OperationMethod<
  CreateIPSetRequest,
  CreateIPSetResponse,
  CreateIPSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34) as any as S.Schema<CreateIPSetRequest>,
  output: __S(35) as any as S.Schema<CreateIPSetResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIPSet",
}));

export type CreateMalwareProtectionPlanError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Creates a new Malware Protection plan for the protected resource.
 *
 * When you create a Malware Protection plan, the Amazon Web Services service terms for GuardDuty Malware Protection apply. For more information, see Amazon Web Services service terms for GuardDuty Malware Protection.
 */
export const createMalwareProtectionPlan: API.OperationMethod<
  CreateMalwareProtectionPlanRequest,
  CreateMalwareProtectionPlanResponse,
  CreateMalwareProtectionPlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40) as any as S.Schema<CreateMalwareProtectionPlanRequest>,
  output: __S(41) as any as S.Schema<CreateMalwareProtectionPlanResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    InternalServerErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMalwareProtectionPlan",
}));

export type CreateMembersError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Creates member accounts of the current Amazon Web Services account by specifying a list of Amazon Web Services account IDs. This step is a prerequisite for managing the associated member accounts either by invitation or through an organization.
 *
 * As a delegated administrator, using `CreateMembers` will enable GuardDuty in the added member accounts, with the exception of the organization delegated administrator account. A delegated administrator must enable GuardDuty prior to being added as a member.
 *
 * When you use CreateMembers as an Organizations delegated administrator, GuardDuty applies your organization's auto-enable settings to the member accounts in this request, irrespective of the accounts being new or existing members. For more information about the existing auto-enable settings for your organization, see DescribeOrganizationConfiguration.
 *
 * If you disassociate a member account that was added by invitation, the member account details obtained from this API, including the associated email addresses, will be retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.
 *
 * When the member accounts added through Organizations are later disassociated, you (administrator) can't invite them by calling the InviteMembers API. You can create an association with these member accounts again only by calling the CreateMembers API.
 */
export const createMembers: API.OperationMethod<
  CreateMembersRequest,
  CreateMembersResponse,
  CreateMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44) as any as S.Schema<CreateMembersRequest>,
  output: __S(47) as any as S.Schema<CreateMembersResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMembers",
}));

export type CreatePublishingDestinationError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Creates a publishing destination where you can export your GuardDuty findings. Before you start exporting the findings, the destination resource must exist.
 */
export const createPublishingDestination: API.OperationMethod<
  CreatePublishingDestinationRequest,
  CreatePublishingDestinationResponse,
  CreatePublishingDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49) as any as S.Schema<CreatePublishingDestinationRequest>,
  output: __S(50) as any as S.Schema<CreatePublishingDestinationResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePublishingDestination",
}));

export type CreateSampleFindingsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Generates sample findings of types specified by the list of finding types. If 'NULL' is specified for `findingTypes`, the API generates sample findings of all supported finding types.
 */
export const createSampleFindings: API.OperationMethod<
  CreateSampleFindingsRequest,
  CreateSampleFindingsResponse,
  CreateSampleFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51) as any as S.Schema<CreateSampleFindingsRequest>,
  output: __S(3) as any as S.Schema<CreateSampleFindingsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSampleFindings",
}));

export type CreateThreatEntitySetError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Creates a new threat entity set. In a threat entity set, you can provide known malicious threat entities for your Amazon Web Services environment. GuardDuty generates findings based on the entries in the threat entity sets. Only users of the administrator account can manage entity sets, which automatically apply to member accounts.
 */
export const createThreatEntitySet: API.OperationMethod<
  CreateThreatEntitySetRequest,
  CreateThreatEntitySetResponse,
  CreateThreatEntitySetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52) as any as S.Schema<CreateThreatEntitySetRequest>,
  output: __S(53) as any as S.Schema<CreateThreatEntitySetResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateThreatEntitySet",
}));

export type CreateThreatIntelSetError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses. GuardDuty generates findings based on ThreatIntelSets. Only users of the administrator account can use this operation.
 */
export const createThreatIntelSet: API.OperationMethod<
  CreateThreatIntelSetRequest,
  CreateThreatIntelSetResponse,
  CreateThreatIntelSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54) as any as S.Schema<CreateThreatIntelSetRequest>,
  output: __S(55) as any as S.Schema<CreateThreatIntelSetResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateThreatIntelSet",
}));

export type CreateTrustedEntitySetError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Creates a new trusted entity set. In the trusted entity set, you can provide IP addresses and domains that you believe are secure for communication in your Amazon Web Services environment. GuardDuty will not generate findings for the entries that are specified in a trusted entity set. At any given time, you can have only one trusted entity set.
 *
 * Only users of the administrator account can manage the entity sets, which automatically apply to member accounts.
 */
export const createTrustedEntitySet: API.OperationMethod<
  CreateTrustedEntitySetRequest,
  CreateTrustedEntitySetResponse,
  CreateTrustedEntitySetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56) as any as S.Schema<CreateTrustedEntitySetRequest>,
  output: __S(57) as any as S.Schema<CreateTrustedEntitySetResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTrustedEntitySet",
}));

export type DeclineInvitationsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Declines invitations sent to the current member account by Amazon Web Services accounts specified by their account IDs.
 */
export const declineInvitations: API.OperationMethod<
  DeclineInvitationsRequest,
  DeclineInvitationsResponse,
  DeclineInvitationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58) as any as S.Schema<DeclineInvitationsRequest>,
  output: __S(59) as any as S.Schema<DeclineInvitationsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeclineInvitations",
}));

export type DeleteCustomDetectionRuleAssociationError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disables a custom detection rule by deleting its association. This operation is idempotent.
 */
export const deleteCustomDetectionRuleAssociation: API.OperationMethod<
  DeleteCustomDetectionRuleAssociationRequest,
  DeleteCustomDetectionRuleAssociationResponse,
  DeleteCustomDetectionRuleAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60) as any as S.Schema<DeleteCustomDetectionRuleAssociationRequest>,
  output: __S(1) as any as S.Schema<DeleteCustomDetectionRuleAssociationResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerErrorException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCustomDetectionRuleAssociation",
}));

export type DeleteCustomDetectionRuleOrgConfigurationError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the organization-level configuration for a custom detection rule. This operation is available only to the delegated administrator account.
 */
export const deleteCustomDetectionRuleOrgConfiguration: API.OperationMethod<
  DeleteCustomDetectionRuleOrgConfigurationRequest,
  DeleteCustomDetectionRuleOrgConfigurationResponse,
  DeleteCustomDetectionRuleOrgConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61) as any as S.Schema<DeleteCustomDetectionRuleOrgConfigurationRequest>,
  output: __S(1) as any as S.Schema<DeleteCustomDetectionRuleOrgConfigurationResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCustomDetectionRuleOrgConfiguration",
}));

export type DeleteDetectorError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Deletes an Amazon GuardDuty detector that is specified by the detector ID.
 */
export const deleteDetector: API.OperationMethod<
  DeleteDetectorRequest,
  DeleteDetectorResponse,
  DeleteDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62) as any as S.Schema<DeleteDetectorRequest>,
  output: __S(3) as any as S.Schema<DeleteDetectorResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDetector",
}));

export type DeleteFilterError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Deletes the filter specified by the filter name.
 */
export const deleteFilter: API.OperationMethod<
  DeleteFilterRequest,
  DeleteFilterResponse,
  DeleteFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63) as any as S.Schema<DeleteFilterRequest>,
  output: __S(3) as any as S.Schema<DeleteFilterResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFilter",
}));

export type DeleteInvitationsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Deletes invitations sent to the current member account by Amazon Web Services accounts specified by their account IDs.
 */
export const deleteInvitations: API.OperationMethod<
  DeleteInvitationsRequest,
  DeleteInvitationsResponse,
  DeleteInvitationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64) as any as S.Schema<DeleteInvitationsRequest>,
  output: __S(59) as any as S.Schema<DeleteInvitationsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInvitations",
}));

export type DeleteIPSetError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Deletes the IPSet specified by the `ipSetId`. IPSets are called trusted IP lists in the console user interface.
 */
export const deleteIPSet: API.OperationMethod<
  DeleteIPSetRequest,
  DeleteIPSetResponse,
  DeleteIPSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65) as any as S.Schema<DeleteIPSetRequest>,
  output: __S(3) as any as S.Schema<DeleteIPSetResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIPSet",
}));

export type DeleteMalwareProtectionPlanError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the Malware Protection plan ID associated with the Malware Protection plan resource. Use this API only when you no longer want to protect the resource associated with this Malware Protection plan ID.
 */
export const deleteMalwareProtectionPlan: API.OperationMethod<
  DeleteMalwareProtectionPlanRequest,
  DeleteMalwareProtectionPlanResponse,
  DeleteMalwareProtectionPlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66) as any as S.Schema<DeleteMalwareProtectionPlanRequest>,
  output: __S(1) as any as S.Schema<DeleteMalwareProtectionPlanResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerErrorException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMalwareProtectionPlan",
}));

export type DeleteMembersError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Deletes GuardDuty member accounts (to the current GuardDuty administrator account) specified by the account IDs.
 *
 * With `autoEnableOrganizationMembers` configuration for your organization set to `ALL`, you'll receive an error if you attempt to disable GuardDuty for a member account in your organization.
 */
export const deleteMembers: API.OperationMethod<
  DeleteMembersRequest,
  DeleteMembersResponse,
  DeleteMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67) as any as S.Schema<DeleteMembersRequest>,
  output: __S(47) as any as S.Schema<DeleteMembersResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMembers",
}));

export type DeletePublishingDestinationError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Deletes the publishing definition with the specified `destinationId`.
 */
export const deletePublishingDestination: API.OperationMethod<
  DeletePublishingDestinationRequest,
  DeletePublishingDestinationResponse,
  DeletePublishingDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68) as any as S.Schema<DeletePublishingDestinationRequest>,
  output: __S(1) as any as S.Schema<DeletePublishingDestinationResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePublishingDestination",
}));

export type DeleteThreatEntitySetError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Deletes the threat entity set that is associated with the specified `threatEntitySetId`.
 */
export const deleteThreatEntitySet: API.OperationMethod<
  DeleteThreatEntitySetRequest,
  DeleteThreatEntitySetResponse,
  DeleteThreatEntitySetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69) as any as S.Schema<DeleteThreatEntitySetRequest>,
  output: __S(3) as any as S.Schema<DeleteThreatEntitySetResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteThreatEntitySet",
}));

export type DeleteThreatIntelSetError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Deletes the ThreatIntelSet specified by the ThreatIntelSet ID.
 */
export const deleteThreatIntelSet: API.OperationMethod<
  DeleteThreatIntelSetRequest,
  DeleteThreatIntelSetResponse,
  DeleteThreatIntelSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70) as any as S.Schema<DeleteThreatIntelSetRequest>,
  output: __S(3) as any as S.Schema<DeleteThreatIntelSetResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteThreatIntelSet",
}));

export type DeleteTrustedEntitySetError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Deletes the trusted entity set that is associated with the specified `trustedEntitySetId`.
 */
export const deleteTrustedEntitySet: API.OperationMethod<
  DeleteTrustedEntitySetRequest,
  DeleteTrustedEntitySetResponse,
  DeleteTrustedEntitySetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71) as any as S.Schema<DeleteTrustedEntitySetRequest>,
  output: __S(3) as any as S.Schema<DeleteTrustedEntitySetResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTrustedEntitySet",
}));

export type DescribeMalwareScansError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Returns a list of malware scans. Each member account can view the malware scans for their own accounts. An administrator can view the malware scans for all the member accounts.
 *
 * There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.
 */
export const describeMalwareScans: API.PaginatedOperationMethod<
  DescribeMalwareScansRequest,
  DescribeMalwareScansResponse,
  DescribeMalwareScansError,
  Credentials | HttpClient.HttpClient,
  Scan
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(77) as any as S.Schema<DescribeMalwareScansRequest>,
  output: __S(85) as any as S.Schema<DescribeMalwareScansResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMalwareScans",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Scans",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeOrganizationConfigurationError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Returns information about the account selected as the delegated administrator for GuardDuty.
 *
 * There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.
 */
export const describeOrganizationConfiguration: API.PaginatedOperationMethod<
  DescribeOrganizationConfigurationRequest,
  DescribeOrganizationConfigurationResponse,
  DescribeOrganizationConfigurationError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(86) as any as S.Schema<DescribeOrganizationConfigurationRequest>,
  output: __S(96) as any as S.Schema<DescribeOrganizationConfigurationResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOrganizationConfiguration",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribePublishingDestinationError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Returns information about the publishing destination specified by the provided `destinationId`.
 */
export const describePublishingDestination: API.OperationMethod<
  DescribePublishingDestinationRequest,
  DescribePublishingDestinationResponse,
  DescribePublishingDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(97) as any as S.Schema<DescribePublishingDestinationRequest>,
  output: __S(98) as any as S.Schema<DescribePublishingDestinationResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePublishingDestination",
}));

export type DisableOrganizationAdminAccountError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Removes the existing GuardDuty delegated administrator of the organization. Only the organization's management account can run this API operation.
 */
export const disableOrganizationAdminAccount: API.OperationMethod<
  DisableOrganizationAdminAccountRequest,
  DisableOrganizationAdminAccountResponse,
  DisableOrganizationAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(99) as any as S.Schema<DisableOrganizationAdminAccountRequest>,
  output: __S(1) as any as S.Schema<DisableOrganizationAdminAccountResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableOrganizationAdminAccount",
}));

export type DisassociateFromAdministratorAccountError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Disassociates the current GuardDuty member account from its administrator account.
 *
 * When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the CreateMembers API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.
 *
 * With `autoEnableOrganizationMembers` configuration for your organization set to `ALL`, you'll receive an error if you attempt to disable GuardDuty in a member account.
 */
export const disassociateFromAdministratorAccount: API.OperationMethod<
  DisassociateFromAdministratorAccountRequest,
  DisassociateFromAdministratorAccountResponse,
  DisassociateFromAdministratorAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(100) as any as S.Schema<DisassociateFromAdministratorAccountRequest>,
  output: __S(1) as any as S.Schema<DisassociateFromAdministratorAccountResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateFromAdministratorAccount",
}));

export type DisassociateFromMasterAccountError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Disassociates the current GuardDuty member account from its administrator account.
 *
 * When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the CreateMembers API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.
 */
export const disassociateFromMasterAccount: API.OperationMethod<
  DisassociateFromMasterAccountRequest,
  DisassociateFromMasterAccountResponse,
  DisassociateFromMasterAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(101) as any as S.Schema<DisassociateFromMasterAccountRequest>,
  output: __S(1) as any as S.Schema<DisassociateFromMasterAccountResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateFromMasterAccount",
}));

export type DisassociateMembersError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Disassociates GuardDuty member accounts (from the current administrator account) specified by the account IDs.
 *
 * When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the CreateMembers API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.
 *
 * With `autoEnableOrganizationMembers` configuration for your organization set to `ALL`, you'll receive an error if you attempt to disassociate a member account before removing them from your organization.
 *
 * If you disassociate a member account that was added by invitation, the member account details obtained from this API, including the associated email addresses, will be retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.
 *
 * When the member accounts added through Organizations are later disassociated, you (administrator) can't invite them by calling the InviteMembers API. You can create an association with these member accounts again only by calling the CreateMembers API.
 */
export const disassociateMembers: API.OperationMethod<
  DisassociateMembersRequest,
  DisassociateMembersResponse,
  DisassociateMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(102) as any as S.Schema<DisassociateMembersRequest>,
  output: __S(59) as any as S.Schema<DisassociateMembersResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateMembers",
}));

export type EnableOrganizationAdminAccountError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Designates an Amazon Web Services account within the organization as your GuardDuty delegated administrator. Only the organization's management account can run this API operation.
 */
export const enableOrganizationAdminAccount: API.OperationMethod<
  EnableOrganizationAdminAccountRequest,
  EnableOrganizationAdminAccountResponse,
  EnableOrganizationAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(103) as any as S.Schema<EnableOrganizationAdminAccountRequest>,
  output: __S(1) as any as S.Schema<EnableOrganizationAdminAccountResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableOrganizationAdminAccount",
}));

export type GetAdministratorAccountError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Provides the details of the GuardDuty administrator account associated with the current GuardDuty member account.
 *
 * Based on the type of account that runs this API, the following list shows how the API behavior varies:
 *
 * - When the GuardDuty administrator account runs this API, it will return success (`HTTP 200`) but no content.
 *
 * - When a member account runs this API, it will return the details of the GuardDuty administrator account that is associated with this calling member account.
 *
 * - When an individual account (not associated with an organization) runs this API, it will return success (`HTTP 200`) but no content.
 */
export const getAdministratorAccount: API.OperationMethod<
  GetAdministratorAccountRequest,
  GetAdministratorAccountResponse,
  GetAdministratorAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(104) as any as S.Schema<GetAdministratorAccountRequest>,
  output: __S(106) as any as S.Schema<GetAdministratorAccountResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAdministratorAccount",
}));

export type GetCoverageStatisticsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Retrieves aggregated statistics for your account. If you are a GuardDuty administrator, you can retrieve the statistics for all the resources associated with the active member accounts in your organization who have enabled Runtime Monitoring and have the GuardDuty security agent running on their resources.
 */
export const getCoverageStatistics: API.OperationMethod<
  GetCoverageStatisticsRequest,
  GetCoverageStatisticsResponse,
  GetCoverageStatisticsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112) as any as S.Schema<GetCoverageStatisticsRequest>,
  output: __S(115) as any as S.Schema<GetCoverageStatisticsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCoverageStatistics",
}));

export type GetCustomDetectionRuleError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns details for a custom detection rule in GuardDuty, including its detection logic.
 */
export const getCustomDetectionRule: API.OperationMethod<
  GetCustomDetectionRuleRequest,
  GetCustomDetectionRuleResponse,
  GetCustomDetectionRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(116) as any as S.Schema<GetCustomDetectionRuleRequest>,
  output: __S(119) as any as S.Schema<GetCustomDetectionRuleResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerErrorException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCustomDetectionRule",
}));

export type GetCustomDetectionRuleAssociationError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns details for a custom detection rule association.
 */
export const getCustomDetectionRuleAssociation: API.OperationMethod<
  GetCustomDetectionRuleAssociationRequest,
  GetCustomDetectionRuleAssociationResponse,
  GetCustomDetectionRuleAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120) as any as S.Schema<GetCustomDetectionRuleAssociationRequest>,
  output: __S(121) as any as S.Schema<GetCustomDetectionRuleAssociationResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerErrorException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCustomDetectionRuleAssociation",
}));

export type GetCustomDetectionRuleOrgConfigurationError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns the organization-level configuration for a custom detection rule.
 */
export const getCustomDetectionRuleOrgConfiguration: API.OperationMethod<
  GetCustomDetectionRuleOrgConfigurationRequest,
  GetCustomDetectionRuleOrgConfigurationResponse,
  GetCustomDetectionRuleOrgConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(122) as any as S.Schema<GetCustomDetectionRuleOrgConfigurationRequest>,
  output: __S(124) as any as S.Schema<GetCustomDetectionRuleOrgConfigurationResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerErrorException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCustomDetectionRuleOrgConfiguration",
}));

export type GetDetectorError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Retrieves a GuardDuty detector specified by the detectorId.
 *
 * There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.
 */
export const getDetector: API.OperationMethod<
  GetDetectorRequest,
  GetDetectorResponse,
  GetDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(125) as any as S.Schema<GetDetectorRequest>,
  output: __S(133) as any as S.Schema<GetDetectorResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDetector",
}));

export type GetFilterError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Returns the details of the filter specified by the filter name.
 */
export const getFilter: API.OperationMethod<
  GetFilterRequest,
  GetFilterResponse,
  GetFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(134) as any as S.Schema<GetFilterRequest>,
  output: __S(135) as any as S.Schema<GetFilterResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFilter",
}));

export type GetFindingsError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Describes Amazon GuardDuty findings specified by finding IDs.
 */
export const getFindings: API.OperationMethod<
  GetFindingsRequest,
  GetFindingsResponse,
  GetFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(136) as any as S.Schema<GetFindingsRequest>,
  output: __S(299) as any as S.Schema<GetFindingsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindings",
}));

export type GetFindingsStatisticsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Lists GuardDuty findings statistics for the specified detector ID.
 *
 * You must provide either `findingStatisticTypes` or `groupBy` parameter, and not both. You can use the `maxResults` and `orderBy` parameters only when using `groupBy`.
 *
 * There might be regional differences because some flags might not be available in all the Regions where GuardDuty is currently supported. For more information, see Regions and endpoints.
 */
export const getFindingsStatistics: API.OperationMethod<
  GetFindingsStatisticsRequest,
  GetFindingsStatisticsResponse,
  GetFindingsStatisticsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(300) as any as S.Schema<GetFindingsStatisticsRequest>,
  output: __S(313) as any as S.Schema<GetFindingsStatisticsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingsStatistics",
}));

export type GetInvestigationError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * This API is currently available as a preview. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo).
 *
 * Retrieves the results and status of a specific GuardDuty investigation.
 *
 * An administrator account can retrieve any investigation within the organization. Member accounts can only retrieve investigations that belong to them.
 */
export const getInvestigation: API.OperationMethod<
  GetInvestigationRequest,
  GetInvestigationResponse,
  GetInvestigationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(314) as any as S.Schema<GetInvestigationRequest>,
  output: __S(319) as any as S.Schema<GetInvestigationResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerErrorException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInvestigation",
}));

export type GetInvitationsCountError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Returns the count of all GuardDuty membership invitations that were sent to the current member account except the currently accepted invitation.
 */
export const getInvitationsCount: API.OperationMethod<
  GetInvitationsCountRequest,
  GetInvitationsCountResponse,
  GetInvitationsCountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(320) as any as S.Schema<GetInvitationsCountRequest>,
  output: __S(321) as any as S.Schema<GetInvitationsCountResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInvitationsCount",
}));

export type GetIPSetError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Retrieves the IPSet specified by the `ipSetId`.
 */
export const getIPSet: API.OperationMethod<
  GetIPSetRequest,
  GetIPSetResponse,
  GetIPSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(322) as any as S.Schema<GetIPSetRequest>,
  output: __S(323) as any as S.Schema<GetIPSetResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIPSet",
}));

export type GetMalwareProtectionPlanError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves the Malware Protection plan details associated with a Malware Protection plan ID.
 */
export const getMalwareProtectionPlan: API.OperationMethod<
  GetMalwareProtectionPlanRequest,
  GetMalwareProtectionPlanResponse,
  GetMalwareProtectionPlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(324) as any as S.Schema<GetMalwareProtectionPlanRequest>,
  output: __S(327) as any as S.Schema<GetMalwareProtectionPlanResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerErrorException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMalwareProtectionPlan",
}));

export type GetMalwareScanError =
  | BadRequestException
  | InternalServerErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves the detailed information for a specific malware scan. Each member account can view the malware scan details for their own account. An administrator can view malware scan details for all accounts in the organization.
 *
 * There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.
 */
export const getMalwareScan: API.OperationMethod<
  GetMalwareScanRequest,
  GetMalwareScanResponse,
  GetMalwareScanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(328) as any as S.Schema<GetMalwareScanRequest>,
  output: __S(338) as any as S.Schema<GetMalwareScanResponse>,
  errors: [BadRequestException, InternalServerErrorException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMalwareScan",
}));

export type GetMalwareScanSettingsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Returns the details of the malware scan settings.
 *
 * There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.
 */
export const getMalwareScanSettings: API.OperationMethod<
  GetMalwareScanSettingsRequest,
  GetMalwareScanSettingsResponse,
  GetMalwareScanSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(339) as any as S.Schema<GetMalwareScanSettingsRequest>,
  output: __S(343) as any as S.Schema<GetMalwareScanSettingsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMalwareScanSettings",
}));

export type GetMasterAccountError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Provides the details for the GuardDuty administrator account associated with the current GuardDuty member account.
 */
export const getMasterAccount: API.OperationMethod<
  GetMasterAccountRequest,
  GetMasterAccountResponse,
  GetMasterAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(344) as any as S.Schema<GetMasterAccountRequest>,
  output: __S(345) as any as S.Schema<GetMasterAccountResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMasterAccount",
}));

export type GetMemberDetectorsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Describes which data sources are enabled for the member account's detector.
 *
 * There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.
 */
export const getMemberDetectors: API.OperationMethod<
  GetMemberDetectorsRequest,
  GetMemberDetectorsResponse,
  GetMemberDetectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(346) as any as S.Schema<GetMemberDetectorsRequest>,
  output: __S(349) as any as S.Schema<GetMemberDetectorsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMemberDetectors",
}));

export type GetMembersError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Retrieves GuardDuty member accounts (of the current GuardDuty administrator account) specified by the account IDs.
 */
export const getMembers: API.OperationMethod<
  GetMembersRequest,
  GetMembersResponse,
  GetMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(350) as any as S.Schema<GetMembersRequest>,
  output: __S(353) as any as S.Schema<GetMembersResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMembers",
}));

export type GetOrganizationStatisticsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Retrieves how many active member accounts have each feature enabled within GuardDuty. Only a delegated GuardDuty administrator of an organization can run this API.
 *
 * When you create a new organization, it might take up to 24 hours to generate the statistics for the entire organization.
 */
export const getOrganizationStatistics: API.OperationMethod<
  GetOrganizationStatisticsRequest,
  GetOrganizationStatisticsResponse,
  GetOrganizationStatisticsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(354) as any as S.Schema<GetOrganizationStatisticsRequest>,
  output: __S(361) as any as S.Schema<GetOrganizationStatisticsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOrganizationStatistics",
}));

export type GetRemainingFreeTrialDaysError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Provides the number of days left for each data source used in the free trial period.
 */
export const getRemainingFreeTrialDays: API.OperationMethod<
  GetRemainingFreeTrialDaysRequest,
  GetRemainingFreeTrialDaysResponse,
  GetRemainingFreeTrialDaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(362) as any as S.Schema<GetRemainingFreeTrialDaysRequest>,
  output: __S(371) as any as S.Schema<GetRemainingFreeTrialDaysResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRemainingFreeTrialDays",
}));

export type GetThreatEntitySetError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Retrieves the threat entity set associated with the specified `threatEntitySetId`.
 */
export const getThreatEntitySet: API.OperationMethod<
  GetThreatEntitySetRequest,
  GetThreatEntitySetResponse,
  GetThreatEntitySetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(372) as any as S.Schema<GetThreatEntitySetRequest>,
  output: __S(373) as any as S.Schema<GetThreatEntitySetResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetThreatEntitySet",
}));

export type GetThreatIntelSetError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.
 */
export const getThreatIntelSet: API.OperationMethod<
  GetThreatIntelSetRequest,
  GetThreatIntelSetResponse,
  GetThreatIntelSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(374) as any as S.Schema<GetThreatIntelSetRequest>,
  output: __S(375) as any as S.Schema<GetThreatIntelSetResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetThreatIntelSet",
}));

export type GetTrustedEntitySetError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Retrieves the trusted entity set associated with the specified `trustedEntitySetId`.
 */
export const getTrustedEntitySet: API.OperationMethod<
  GetTrustedEntitySetRequest,
  GetTrustedEntitySetResponse,
  GetTrustedEntitySetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(376) as any as S.Schema<GetTrustedEntitySetRequest>,
  output: __S(373) as any as S.Schema<GetTrustedEntitySetResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTrustedEntitySet",
}));

export type GetUsageStatisticsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Lists Amazon GuardDuty usage statistics over the last 30 days for the specified detector ID. For newly enabled detectors or data sources, the cost returned will include only the usage so far under 30 days. This may differ from the cost metrics in the console, which project usage over 30 days to provide a monthly cost estimate. For more information, see Understanding How Usage Costs are Calculated.
 */
export const getUsageStatistics: API.PaginatedOperationMethod<
  GetUsageStatisticsRequest,
  GetUsageStatisticsResponse,
  GetUsageStatisticsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(378) as any as S.Schema<GetUsageStatisticsRequest>,
  output: __S(391) as any as S.Schema<GetUsageStatisticsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUsageStatistics",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type InviteMembersError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Invites Amazon Web Services accounts to become members of an organization administered by the Amazon Web Services account that invokes this API. If you are using Amazon Web Services Organizations to manage your GuardDuty environment, this step is not needed. For more information, see Managing accounts with organizations.
 *
 * To invite Amazon Web Services accounts, the first step is to ensure that GuardDuty has been enabled in the potential member accounts. You can now invoke this API to add accounts by invitation. The invited accounts can either accept or decline the invitation from their GuardDuty accounts. Each invited Amazon Web Services account can choose to accept the invitation from only one Amazon Web Services account. For more information, see Managing GuardDuty accounts by invitation.
 *
 * After the invite has been accepted and you choose to disassociate a member account (by using DisassociateMembers) from your account, the details of the member account obtained by invoking CreateMembers, including the associated email addresses, will be retained. This is done so that you can invoke InviteMembers without the need to invoke CreateMembers again. To remove the details associated with a member account, you must also invoke DeleteMembers.
 *
 * If you disassociate a member account that was added by invitation, the member account details obtained from this API, including the associated email addresses, will be retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.
 *
 * When the member accounts added through Organizations are later disassociated, you (administrator) can't invite them by calling the InviteMembers API. You can create an association with these member accounts again only by calling the CreateMembers API.
 */
export const inviteMembers: API.OperationMethod<
  InviteMembersRequest,
  InviteMembersResponse,
  InviteMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(392) as any as S.Schema<InviteMembersRequest>,
  output: __S(47) as any as S.Schema<InviteMembersResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InviteMembers",
}));

export type ListCoverageError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Lists coverage details for your GuardDuty account. If you're a GuardDuty administrator, you can retrieve all resources associated with the active member accounts in your organization.
 *
 * Make sure the accounts have Runtime Monitoring enabled and GuardDuty agent running on their resources.
 */
export const listCoverage: API.PaginatedOperationMethod<
  ListCoverageRequest,
  ListCoverageResponse,
  ListCoverageError,
  Credentials | HttpClient.HttpClient,
  CoverageResource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(394) as any as S.Schema<ListCoverageRequest>,
  output: __S(405) as any as S.Schema<ListCoverageResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCoverage",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Resources",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCustomDetectionRuleAssociationsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Returns all custom detection rule associations for your account. You can filter by rule ID and mode.
 */
export const listCustomDetectionRuleAssociations: API.PaginatedOperationMethod<
  ListCustomDetectionRuleAssociationsRequest,
  ListCustomDetectionRuleAssociationsResponse,
  ListCustomDetectionRuleAssociationsError,
  Credentials | HttpClient.HttpClient,
  AssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(406) as any as S.Schema<ListCustomDetectionRuleAssociationsRequest>,
  output: __S(409) as any as S.Schema<ListCustomDetectionRuleAssociationsResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCustomDetectionRuleAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RuleAssociations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCustomDetectionRuleOrgConfigurationsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Returns all organization-level configurations for custom detection rules. You can filter the results by status.
 */
export const listCustomDetectionRuleOrgConfigurations: API.PaginatedOperationMethod<
  ListCustomDetectionRuleOrgConfigurationsRequest,
  ListCustomDetectionRuleOrgConfigurationsResponse,
  ListCustomDetectionRuleOrgConfigurationsError,
  Credentials | HttpClient.HttpClient,
  DetectionRuleOrgConfigurationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(410) as any as S.Schema<ListCustomDetectionRuleOrgConfigurationsRequest>,
  output: __S(413) as any as S.Schema<ListCustomDetectionRuleOrgConfigurationsResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCustomDetectionRuleOrgConfigurations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Configurations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCustomDetectionRulesError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Returns all available custom detection rules in GuardDuty. You can filter the results by data source, severity, tactic, technique, and service.
 */
export const listCustomDetectionRules: API.PaginatedOperationMethod<
  ListCustomDetectionRulesRequest,
  ListCustomDetectionRulesResponse,
  ListCustomDetectionRulesError,
  Credentials | HttpClient.HttpClient,
  RuleSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(416) as any as S.Schema<ListCustomDetectionRulesRequest>,
  output: __S(419) as any as S.Schema<ListCustomDetectionRulesResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCustomDetectionRules",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Rules",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDetectorsError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Lists detectorIds of all the existing Amazon GuardDuty detector resources.
 */
export const listDetectors: API.PaginatedOperationMethod<
  ListDetectorsRequest,
  ListDetectorsResponse,
  ListDetectorsError,
  Credentials | HttpClient.HttpClient,
  DetectorId
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(420) as any as S.Schema<ListDetectorsRequest>,
  output: __S(421) as any as S.Schema<ListDetectorsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDetectors",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "DetectorIds",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFiltersError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Returns a paginated list of the current filters.
 */
export const listFilters: API.PaginatedOperationMethod<
  ListFiltersRequest,
  ListFiltersResponse,
  ListFiltersError,
  Credentials | HttpClient.HttpClient,
  FilterName
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(422) as any as S.Schema<ListFiltersRequest>,
  output: __S(423) as any as S.Schema<ListFiltersResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFilters",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "FilterNames",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFindingsError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Lists GuardDuty findings for the specified detector ID.
 *
 * There might be regional differences because some flags might not be available in all the Regions where GuardDuty is currently supported. For more information, see Regions and endpoints.
 */
export const listFindings: API.PaginatedOperationMethod<
  ListFindingsRequest,
  ListFindingsResponse,
  ListFindingsError,
  Credentials | HttpClient.HttpClient,
  FindingId
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(424) as any as S.Schema<ListFindingsRequest>,
  output: __S(425) as any as S.Schema<ListFindingsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFindings",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "FindingIds",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListInvestigationsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * This API is currently available as a preview. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo).
 *
 * Returns a list of investigations associated with the specified GuardDuty detector.
 *
 * An administrator account sees all investigations across the organization. Member accounts see only the investigations that belong to them.
 */
export const listInvestigations: API.PaginatedOperationMethod<
  ListInvestigationsRequest,
  ListInvestigationsResponse,
  ListInvestigationsError,
  Credentials | HttpClient.HttpClient,
  InvestigationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(427) as any as S.Schema<ListInvestigationsRequest>,
  output: __S(430) as any as S.Schema<ListInvestigationsResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInvestigations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Investigations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListInvitationsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Lists all GuardDuty membership invitations that were sent to the current Amazon Web Services account.
 */
export const listInvitations: API.PaginatedOperationMethod<
  ListInvitationsRequest,
  ListInvitationsResponse,
  ListInvitationsError,
  Credentials | HttpClient.HttpClient,
  Invitation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(431) as any as S.Schema<ListInvitationsRequest>,
  output: __S(433) as any as S.Schema<ListInvitationsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInvitations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Invitations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListIPSetsError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the IPSets returned are the IPSets from the associated administrator account.
 */
export const listIPSets: API.PaginatedOperationMethod<
  ListIPSetsRequest,
  ListIPSetsResponse,
  ListIPSetsError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(434) as any as S.Schema<ListIPSetsRequest>,
  output: __S(435) as any as S.Schema<ListIPSetsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIPSets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "IpSetIds",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListMalwareProtectionPlansError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Lists the Malware Protection plan IDs associated with the protected resources in your Amazon Web Services account.
 */
export const listMalwareProtectionPlans: API.OperationMethod<
  ListMalwareProtectionPlansRequest,
  ListMalwareProtectionPlansResponse,
  ListMalwareProtectionPlansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(436) as any as S.Schema<ListMalwareProtectionPlansRequest>,
  output: __S(438) as any as S.Schema<ListMalwareProtectionPlansResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMalwareProtectionPlans",
}));

export type ListMalwareScansError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Returns a list of malware scans. Each member account can view the malware scans for their own accounts. An administrator can view the malware scans for all of its members' accounts.
 */
export const listMalwareScans: API.PaginatedOperationMethod<
  ListMalwareScansRequest,
  ListMalwareScansResponse,
  ListMalwareScansError,
  Credentials | HttpClient.HttpClient,
  MalwareScan
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(442) as any as S.Schema<ListMalwareScansRequest>,
  output: __S(445) as any as S.Schema<ListMalwareScansResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMalwareScans",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Scans",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListMembersError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Lists details about all member accounts for the current GuardDuty administrator account.
 */
export const listMembers: API.PaginatedOperationMethod<
  ListMembersRequest,
  ListMembersResponse,
  ListMembersError,
  Credentials | HttpClient.HttpClient,
  Member
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(446) as any as S.Schema<ListMembersRequest>,
  output: __S(447) as any as S.Schema<ListMembersResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMembers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Members",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListOrganizationAdminAccountsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Lists the accounts designated as GuardDuty delegated administrators. Only the organization's management account can run this API operation.
 */
export const listOrganizationAdminAccounts: API.PaginatedOperationMethod<
  ListOrganizationAdminAccountsRequest,
  ListOrganizationAdminAccountsResponse,
  ListOrganizationAdminAccountsError,
  Credentials | HttpClient.HttpClient,
  AdminAccount
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(448) as any as S.Schema<ListOrganizationAdminAccountsRequest>,
  output: __S(451) as any as S.Schema<ListOrganizationAdminAccountsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOrganizationAdminAccounts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AdminAccounts",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPublishingDestinationsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Returns a list of publishing destinations associated with the specified `detectorId`.
 */
export const listPublishingDestinations: API.PaginatedOperationMethod<
  ListPublishingDestinationsRequest,
  ListPublishingDestinationsResponse,
  ListPublishingDestinationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(452) as any as S.Schema<ListPublishingDestinationsRequest>,
  output: __S(455) as any as S.Schema<ListPublishingDestinationsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPublishingDestinations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Lists tags for a resource. Tagging is currently supported for detectors, finding filters, IP sets, threat intel sets, and publishing destination, with a limit of 50 tags per resource. When invoked, this operation returns all assigned tags for a given resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(456) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(457) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListThreatEntitySetsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Lists the threat entity sets associated with the specified GuardDuty detector ID. If you use this operation from a member account, the threat entity sets that are returned as a response, belong to the administrator account.
 */
export const listThreatEntitySets: API.PaginatedOperationMethod<
  ListThreatEntitySetsRequest,
  ListThreatEntitySetsResponse,
  ListThreatEntitySetsError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(458) as any as S.Schema<ListThreatEntitySetsRequest>,
  output: __S(459) as any as S.Schema<ListThreatEntitySetsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThreatEntitySets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ThreatEntitySetIds",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListThreatIntelSetsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the ThreatIntelSets associated with the administrator account are returned.
 */
export const listThreatIntelSets: API.PaginatedOperationMethod<
  ListThreatIntelSetsRequest,
  ListThreatIntelSetsResponse,
  ListThreatIntelSetsError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(460) as any as S.Schema<ListThreatIntelSetsRequest>,
  output: __S(461) as any as S.Schema<ListThreatIntelSetsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThreatIntelSets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ThreatIntelSetIds",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTrustedEntitySetsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Lists the trusted entity sets associated with the specified GuardDuty detector ID. If you use this operation from a member account, the trusted entity sets that are returned as a response, belong to the administrator account.
 */
export const listTrustedEntitySets: API.PaginatedOperationMethod<
  ListTrustedEntitySetsRequest,
  ListTrustedEntitySetsResponse,
  ListTrustedEntitySetsError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(462) as any as S.Schema<ListTrustedEntitySetsRequest>,
  output: __S(463) as any as S.Schema<ListTrustedEntitySetsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTrustedEntitySets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TrustedEntitySetIds",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type SendObjectMalwareScanError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Initiates a malware scan for a specific S3 object. This API allows you to perform on-demand malware scanning of individual objects in S3 buckets that have Malware Protection for S3 enabled.
 *
 * When you use this API, the Amazon Web Services service terms for GuardDuty Malware Protection apply. For more information, see Amazon Web Services service terms for GuardDuty Malware Protection.
 */
export const sendObjectMalwareScan: API.OperationMethod<
  SendObjectMalwareScanRequest,
  SendObjectMalwareScanResponse,
  SendObjectMalwareScanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(465) as any as S.Schema<SendObjectMalwareScanRequest>,
  output: __S(3) as any as S.Schema<SendObjectMalwareScanResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendObjectMalwareScan",
}));

export type StartMalwareScanError =
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Initiates the malware scan. Invoking this API will automatically create the Service-linked role in the corresponding account if the resourceArn belongs to an EC2 instance.
 *
 * When the malware scan starts, you can use the associated scan ID to track the status of the scan. For more information, see ListMalwareScans and GetMalwareScan.
 *
 * When you use this API, the Amazon Web Services service terms for GuardDuty Malware Protection apply. For more information, see Amazon Web Services service terms for GuardDuty Malware Protection.
 */
export const startMalwareScan: API.OperationMethod<
  StartMalwareScanRequest,
  StartMalwareScanResponse,
  StartMalwareScanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(469) as any as S.Schema<StartMalwareScanRequest>,
  output: __S(470) as any as S.Schema<StartMalwareScanResponse>,
  errors: [BadRequestException, ConflictException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartMalwareScan",
}));

export type StartMonitoringMembersError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Turns on GuardDuty monitoring of the specified member accounts. Use this operation to restart monitoring of accounts that you stopped monitoring with the StopMonitoringMembers operation.
 */
export const startMonitoringMembers: API.OperationMethod<
  StartMonitoringMembersRequest,
  StartMonitoringMembersResponse,
  StartMonitoringMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(471) as any as S.Schema<StartMonitoringMembersRequest>,
  output: __S(59) as any as S.Schema<StartMonitoringMembersResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartMonitoringMembers",
}));

export type StopMonitoringMembersError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Stops GuardDuty monitoring for the specified member accounts. Use the `StartMonitoringMembers` operation to restart monitoring for those accounts.
 *
 * With `autoEnableOrganizationMembers` configuration for your organization set to `ALL`, you'll receive an error if you attempt to stop monitoring the member accounts in your organization.
 */
export const stopMonitoringMembers: API.OperationMethod<
  StopMonitoringMembersRequest,
  StopMonitoringMembersResponse,
  StopMonitoringMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(472) as any as S.Schema<StopMonitoringMembersRequest>,
  output: __S(59) as any as S.Schema<StopMonitoringMembersResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopMonitoringMembers",
}));

export type TagResourceError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
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
  input: __S(473) as any as S.Schema<TagResourceRequest>,
  output: __S(3) as any as S.Schema<TagResourceResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UnarchiveFindingsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Unarchives GuardDuty findings specified by the `findingIds`.
 */
export const unarchiveFindings: API.OperationMethod<
  UnarchiveFindingsRequest,
  UnarchiveFindingsResponse,
  UnarchiveFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(474) as any as S.Schema<UnarchiveFindingsRequest>,
  output: __S(3) as any as S.Schema<UnarchiveFindingsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UnarchiveFindings",
}));

export type UntagResourceError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
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
  input: __S(475) as any as S.Schema<UntagResourceRequest>,
  output: __S(3) as any as S.Schema<UntagResourceResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateCustomDetectionRuleAssociationError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the mode of an existing custom detection rule association.
 */
export const updateCustomDetectionRuleAssociation: API.OperationMethod<
  UpdateCustomDetectionRuleAssociationRequest,
  UpdateCustomDetectionRuleAssociationResponse,
  UpdateCustomDetectionRuleAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(476) as any as S.Schema<UpdateCustomDetectionRuleAssociationRequest>,
  output: __S(1) as any as S.Schema<UpdateCustomDetectionRuleAssociationResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCustomDetectionRuleAssociation",
}));

export type UpdateCustomDetectionRuleOrgConfigurationError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the organization-level configuration for a custom detection rule, including the mode and include/exclude account lists.
 */
export const updateCustomDetectionRuleOrgConfiguration: API.OperationMethod<
  UpdateCustomDetectionRuleOrgConfigurationRequest,
  UpdateCustomDetectionRuleOrgConfigurationResponse,
  UpdateCustomDetectionRuleOrgConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(477) as any as S.Schema<UpdateCustomDetectionRuleOrgConfigurationRequest>,
  output: __S(1) as any as S.Schema<UpdateCustomDetectionRuleOrgConfigurationResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCustomDetectionRuleOrgConfiguration",
}));

export type UpdateDetectorError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Updates the GuardDuty detector specified by the detector ID.
 *
 * Specifying both EKS Runtime Monitoring (`EKS_RUNTIME_MONITORING`) and Runtime Monitoring (`RUNTIME_MONITORING`) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring.
 *
 * There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.
 */
export const updateDetector: API.OperationMethod<
  UpdateDetectorRequest,
  UpdateDetectorResponse,
  UpdateDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(478) as any as S.Schema<UpdateDetectorRequest>,
  output: __S(3) as any as S.Schema<UpdateDetectorResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDetector",
}));

export type UpdateFilterError = BadRequestException | InternalServerErrorException | CommonErrors;
/**
 * Updates the filter specified by the filter name.
 */
export const updateFilter: API.OperationMethod<
  UpdateFilterRequest,
  UpdateFilterResponse,
  UpdateFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(479) as any as S.Schema<UpdateFilterRequest>,
  output: __S(31) as any as S.Schema<UpdateFilterResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFilter",
}));

export type UpdateFindingsFeedbackError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Marks the specified GuardDuty findings as useful or not useful.
 */
export const updateFindingsFeedback: API.OperationMethod<
  UpdateFindingsFeedbackRequest,
  UpdateFindingsFeedbackResponse,
  UpdateFindingsFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(480) as any as S.Schema<UpdateFindingsFeedbackRequest>,
  output: __S(3) as any as S.Schema<UpdateFindingsFeedbackResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFindingsFeedback",
}));

export type UpdateIPSetError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Updates the IPSet specified by the IPSet ID.
 */
export const updateIPSet: API.OperationMethod<
  UpdateIPSetRequest,
  UpdateIPSetResponse,
  UpdateIPSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(481) as any as S.Schema<UpdateIPSetRequest>,
  output: __S(3) as any as S.Schema<UpdateIPSetResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIPSet",
}));

export type UpdateMalwareProtectionPlanError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates an existing Malware Protection plan resource.
 */
export const updateMalwareProtectionPlan: API.OperationMethod<
  UpdateMalwareProtectionPlanRequest,
  UpdateMalwareProtectionPlanResponse,
  UpdateMalwareProtectionPlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(484) as any as S.Schema<UpdateMalwareProtectionPlanRequest>,
  output: __S(1) as any as S.Schema<UpdateMalwareProtectionPlanResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerErrorException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMalwareProtectionPlan",
}));

export type UpdateMalwareScanSettingsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Updates the malware scan settings.
 *
 * There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.
 */
export const updateMalwareScanSettings: API.OperationMethod<
  UpdateMalwareScanSettingsRequest,
  UpdateMalwareScanSettingsResponse,
  UpdateMalwareScanSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(485) as any as S.Schema<UpdateMalwareScanSettingsRequest>,
  output: __S(1) as any as S.Schema<UpdateMalwareScanSettingsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMalwareScanSettings",
}));

export type UpdateMemberDetectorsError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Contains information on member accounts to be updated.
 *
 * Specifying both EKS Runtime Monitoring (`EKS_RUNTIME_MONITORING`) and Runtime Monitoring (`RUNTIME_MONITORING`) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring.
 *
 * There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.
 */
export const updateMemberDetectors: API.OperationMethod<
  UpdateMemberDetectorsRequest,
  UpdateMemberDetectorsResponse,
  UpdateMemberDetectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(489) as any as S.Schema<UpdateMemberDetectorsRequest>,
  output: __S(59) as any as S.Schema<UpdateMemberDetectorsResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMemberDetectors",
}));

export type UpdateOrganizationConfigurationError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Configures the delegated administrator account with the provided values. You must provide a value for either `autoEnableOrganizationMembers` or `autoEnable`, but not both.
 *
 * Specifying both EKS Runtime Monitoring (`EKS_RUNTIME_MONITORING`) and Runtime Monitoring (`RUNTIME_MONITORING`) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring.
 *
 * There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.
 */
export const updateOrganizationConfiguration: API.OperationMethod<
  UpdateOrganizationConfigurationRequest,
  UpdateOrganizationConfigurationResponse,
  UpdateOrganizationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(494) as any as S.Schema<UpdateOrganizationConfigurationRequest>,
  output: __S(1) as any as S.Schema<UpdateOrganizationConfigurationResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOrganizationConfiguration",
}));

export type UpdatePublishingDestinationError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Updates information about the publishing destination specified by the `destinationId`.
 */
export const updatePublishingDestination: API.OperationMethod<
  UpdatePublishingDestinationRequest,
  UpdatePublishingDestinationResponse,
  UpdatePublishingDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(495) as any as S.Schema<UpdatePublishingDestinationRequest>,
  output: __S(1) as any as S.Schema<UpdatePublishingDestinationResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePublishingDestination",
}));

export type UpdateThreatEntitySetError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Updates the threat entity set associated with the specified `threatEntitySetId`.
 */
export const updateThreatEntitySet: API.OperationMethod<
  UpdateThreatEntitySetRequest,
  UpdateThreatEntitySetResponse,
  UpdateThreatEntitySetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(496) as any as S.Schema<UpdateThreatEntitySetRequest>,
  output: __S(3) as any as S.Schema<UpdateThreatEntitySetResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateThreatEntitySet",
}));

export type UpdateThreatIntelSetError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Updates the ThreatIntelSet specified by the ThreatIntelSet ID.
 */
export const updateThreatIntelSet: API.OperationMethod<
  UpdateThreatIntelSetRequest,
  UpdateThreatIntelSetResponse,
  UpdateThreatIntelSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(497) as any as S.Schema<UpdateThreatIntelSetRequest>,
  output: __S(3) as any as S.Schema<UpdateThreatIntelSetResponse>,
  errors: [AccessDeniedException, BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateThreatIntelSet",
}));

export type UpdateTrustedEntitySetError =
  | BadRequestException
  | InternalServerErrorException
  | CommonErrors;
/**
 * Updates the trusted entity set associated with the specified `trustedEntitySetId`.
 */
export const updateTrustedEntitySet: API.OperationMethod<
  UpdateTrustedEntitySetRequest,
  UpdateTrustedEntitySetResponse,
  UpdateTrustedEntitySetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(498) as any as S.Schema<UpdateTrustedEntitySetRequest>,
  output: __S(3) as any as S.Schema<UpdateTrustedEntitySetResponse>,
  errors: [BadRequestException, InternalServerErrorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTrustedEntitySet",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          AdministratorId: S.optional(S.String),
          InvitationId: S.optional(S.String),
        })
          .pipe(S.encodeKeys({ AdministratorId: "administratorId", InvitationId: "invitationId" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/administrator" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "AcceptAdministratorInvitationRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AcceptAdministratorInvitationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          MasterId: S.optional(S.String),
          InvitationId: S.optional(S.String),
        })
          .pipe(S.encodeKeys({ MasterId: "masterId", InvitationId: "invitationId" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/master" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "AcceptInvitationRequest" });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AcceptInvitationResponse",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          FindingIds: S.optional(__S(4)),
        })
          .pipe(S.encodeKeys({ FindingIds: "findingIds" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/findings/archive" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "ArchiveFindingsRequest" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          RuleId: S.optional(S.String),
          Mode: S.optional(S.String),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(6)),
        })
          .pipe(
            S.encodeKeys({
              RuleId: "ruleId",
              Mode: "mode",
              ClientToken: "clientToken",
              Tags: "tags",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/custom-detection-rule/association" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "CreateCustomDetectionRuleAssociationRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AssociationId: S.optional(S.String),
          Arn: S.optional(S.String),
          RuleId: S.optional(S.String),
          AccountId: S.optional(S.String),
          Mode: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ExpiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(
          S.encodeKeys({
            AssociationId: "associationId",
            Arn: "arn",
            RuleId: "ruleId",
            AccountId: "accountId",
            Mode: "mode",
            CreatedAt: "createdAt",
            UpdatedAt: "updatedAt",
            ExpiresAt: "expiresAt",
          }),
        ),
      ).annotate({ identifier: "AssociationDetail" });
    case 1:
      return S.suspend(() =>
        S.Struct({ RuleAssociation: S.optional(__S(8)) }).pipe(
          S.encodeKeys({ RuleAssociation: "ruleAssociation" }),
        ),
      ).annotate({
        identifier: "CreateCustomDetectionRuleAssociationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RuleId: S.optional(S.String),
          Mode: S.optional(S.String),
          IncludeAccountIds: S.optional(__S(4)),
          ExcludeAccountIds: S.optional(__S(4)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        })
          .pipe(
            S.encodeKeys({
              RuleId: "ruleId",
              Mode: "mode",
              IncludeAccountIds: "includeAccountIds",
              ExcludeAccountIds: "excludeAccountIds",
              ClientToken: "clientToken",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/custom-detection-rule/org-configuration" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "CreateCustomDetectionRuleOrgConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Enable: S.optional(S.Boolean) }).pipe(S.encodeKeys({ Enable: "enable" })),
      ).annotate({ identifier: "S3LogsConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Enable: S.optional(S.Boolean) }).pipe(S.encodeKeys({ Enable: "enable" })),
      ).annotate({
        identifier: "KubernetesAuditLogsConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ AuditLogs: S.optional(__S(12)) }).pipe(S.encodeKeys({ AuditLogs: "auditLogs" })),
      ).annotate({ identifier: "KubernetesConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({ EbsVolumes: S.optional(S.Boolean) }).pipe(
          S.encodeKeys({ EbsVolumes: "ebsVolumes" }),
        ),
      ).annotate({
        identifier: "ScanEc2InstanceWithFindings",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ScanEc2InstanceWithFindings: S.optional(__S(14)) }).pipe(
          S.encodeKeys({ ScanEc2InstanceWithFindings: "scanEc2InstanceWithFindings" }),
        ),
      ).annotate({
        identifier: "MalwareProtectionConfiguration",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          S3Logs: S.optional(__S(11)),
          Kubernetes: S.optional(__S(13)),
          MalwareProtection: S.optional(__S(15)),
        }).pipe(
          S.encodeKeys({
            S3Logs: "s3Logs",
            Kubernetes: "kubernetes",
            MalwareProtection: "malwareProtection",
          }),
        ),
      ).annotate({ identifier: "DataSourceConfigurations" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Status: S.optional(S.String),
        }).pipe(S.encodeKeys({ Name: "name", Status: "status" })),
      ).annotate({
        identifier: "DetectorAdditionalConfiguration",
      });
    case 2:
      return S.Array(__S(17));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          AdditionalConfiguration: S.optional(__S(18)),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Status: "status",
            AdditionalConfiguration: "additionalConfiguration",
          }),
        ),
      ).annotate({
        identifier: "DetectorFeatureConfiguration",
      });
    case 4:
      return S.Array(__S(19));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Enable: S.optional(S.Boolean),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          FindingPublishingFrequency: S.optional(S.String),
          DataSources: S.optional(__S(16)),
          Tags: S.optional(__S(6)),
          Features: S.optional(__S(20)),
        })
          .pipe(
            S.encodeKeys({
              Enable: "enable",
              ClientToken: "clientToken",
              FindingPublishingFrequency: "findingPublishingFrequency",
              DataSources: "dataSources",
              Tags: "tags",
              Features: "features",
            }),
          )
          .pipe(T.all(T.Http({ method: "POST", uri: "/detector" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDetectorRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Status: S.optional(S.String), Reason: S.optional(S.String) }).pipe(
          S.encodeKeys({ Status: "status", Reason: "reason" }),
        ),
      ).annotate({ identifier: "EbsVolumesResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({ EbsVolumes: S.optional(__S(22)) }).pipe(
          S.encodeKeys({ EbsVolumes: "ebsVolumes" }),
        ),
      ).annotate({
        identifier: "ScanEc2InstanceWithFindingsResult",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ScanEc2InstanceWithFindings: S.optional(__S(23)),
          ServiceRole: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            ScanEc2InstanceWithFindings: "scanEc2InstanceWithFindings",
            ServiceRole: "serviceRole",
          }),
        ),
      ).annotate({
        identifier: "MalwareProtectionConfigurationResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ MalwareProtection: S.optional(__S(24)) }).pipe(
          S.encodeKeys({ MalwareProtection: "malwareProtection" }),
        ),
      ).annotate({
        identifier: "UnprocessedDataSourcesResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.optional(S.String),
          UnprocessedDataSources: S.optional(__S(25)),
        }).pipe(
          S.encodeKeys({
            DetectorId: "detectorId",
            UnprocessedDataSources: "unprocessedDataSources",
          }),
        ),
      ).annotate({ identifier: "CreateDetectorResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Eq: S.optional(__S(4)),
          Neq: S.optional(__S(4)),
          Gt: S.optional(S.Number),
          Gte: S.optional(S.Number),
          Lt: S.optional(S.Number),
          Lte: S.optional(S.Number),
          Equals: S.optional(__S(4)),
          NotEquals: S.optional(__S(4)),
          GreaterThan: S.optional(S.Number),
          GreaterThanOrEqual: S.optional(S.Number),
          LessThan: S.optional(S.Number),
          LessThanOrEqual: S.optional(S.Number),
          Matches: S.optional(__S(4)),
          NotMatches: S.optional(__S(4)),
        }).pipe(
          S.encodeKeys({
            Eq: "eq",
            Neq: "neq",
            Gt: "gt",
            Gte: "gte",
            Lt: "lt",
            Lte: "lte",
            Equals: "equals",
            NotEquals: "notEquals",
            GreaterThan: "greaterThan",
            GreaterThanOrEqual: "greaterThanOrEqual",
            LessThan: "lessThan",
            LessThanOrEqual: "lessThanOrEqual",
            Matches: "matches",
            NotMatches: "notMatches",
          }),
        ),
      ).annotate({ identifier: "Condition" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(27).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({ Criterion: S.optional(__S(28)) }).pipe(S.encodeKeys({ Criterion: "criterion" })),
      ).annotate({ identifier: "FindingCriteria" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Action: S.optional(S.String),
          Rank: S.optional(S.Number),
          FindingCriteria: S.optional(__S(29)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(6)),
        })
          .pipe(
            S.encodeKeys({
              Name: "name",
              Description: "description",
              Action: "action",
              Rank: "rank",
              FindingCriteria: "findingCriteria",
              ClientToken: "clientToken",
              Tags: "tags",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/filter" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "CreateFilterRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String) }).pipe(S.encodeKeys({ Name: "name" })),
      ).annotate({ identifier: "CreateFilterResponse" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          TriggerPrompt: S.optional(S.String),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        })
          .pipe(S.encodeKeys({ TriggerPrompt: "triggerPrompt", ClientToken: "clientToken" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/investigation" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "CreateInvestigationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ InvestigationId: S.optional(S.String) }).pipe(
          S.encodeKeys({ InvestigationId: "investigationId" }),
        ),
      ).annotate({
        identifier: "CreateInvestigationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          Name: S.optional(S.String),
          Format: S.optional(S.String),
          Location: S.optional(S.String),
          Activate: S.optional(S.Boolean),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(6)),
          ExpectedBucketOwner: S.optional(S.String),
        })
          .pipe(
            S.encodeKeys({
              Name: "name",
              Format: "format",
              Location: "location",
              Activate: "activate",
              ClientToken: "clientToken",
              Tags: "tags",
              ExpectedBucketOwner: "expectedBucketOwner",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/ipset" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "CreateIPSetRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ IpSetId: S.optional(S.String) }).pipe(S.encodeKeys({ IpSetId: "ipSetId" })),
      ).annotate({ identifier: "CreateIPSetResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          BucketName: S.optional(S.String),
          ObjectPrefixes: S.optional(__S(4)),
        }).pipe(S.encodeKeys({ BucketName: "bucketName", ObjectPrefixes: "objectPrefixes" })),
      ).annotate({ identifier: "CreateS3BucketResource" });
    case 5:
      return S.suspend(() =>
        S.Struct({ S3Bucket: S.optional(__S(36)) }).pipe(S.encodeKeys({ S3Bucket: "s3Bucket" })),
      ).annotate({ identifier: "CreateProtectedResource" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Status: S.optional(S.String) }).pipe(S.encodeKeys({ Status: "status" })),
      ).annotate({
        identifier: "MalwareProtectionPlanTaggingAction",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Tagging: S.optional(__S(38)) }).pipe(S.encodeKeys({ Tagging: "tagging" })),
      ).annotate({
        identifier: "MalwareProtectionPlanActions",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Role: S.optional(S.String),
          ProtectedResource: S.optional(__S(37)),
          Actions: S.optional(__S(39)),
          Tags: S.optional(__S(6)),
        })
          .pipe(
            S.encodeKeys({
              ClientToken: "clientToken",
              Role: "role",
              ProtectedResource: "protectedResource",
              Actions: "actions",
              Tags: "tags",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/malware-protection-plan" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "CreateMalwareProtectionPlanRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ MalwareProtectionPlanId: S.optional(S.String) }).pipe(
          S.encodeKeys({ MalwareProtectionPlanId: "malwareProtectionPlanId" }),
        ),
      ).annotate({
        identifier: "CreateMalwareProtectionPlanResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AccountId: S.optional(S.String), Email: S.optional(SensitiveString) }).pipe(
          S.encodeKeys({ AccountId: "accountId", Email: "email" }),
        ),
      ).annotate({ identifier: "AccountDetail" });
    case 3:
      return S.Array(__S(42));
    case 4:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          AccountDetails: S.optional(__S(43)),
        })
          .pipe(S.encodeKeys({ AccountDetails: "accountDetails" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/member" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "CreateMembersRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ AccountId: S.optional(S.String), Result: S.optional(S.String) }).pipe(
          S.encodeKeys({ AccountId: "accountId", Result: "result" }),
        ),
      ).annotate({ identifier: "UnprocessedAccount" });
    case 6:
      return S.Array(__S(45));
    case 7:
      return S.suspend(() =>
        S.Struct({ UnprocessedAccounts: S.optional(__S(46)) }).pipe(
          S.encodeKeys({ UnprocessedAccounts: "unprocessedAccounts" }),
        ),
      ).annotate({ identifier: "CreateMembersResponse" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DestinationArn: S.optional(S.String), KmsKeyArn: S.optional(S.String) }).pipe(
          S.encodeKeys({ DestinationArn: "destinationArn", KmsKeyArn: "kmsKeyArn" }),
        ),
      ).annotate({ identifier: "DestinationProperties" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          DestinationType: S.optional(S.String),
          DestinationProperties: S.optional(__S(48)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(6)),
        })
          .pipe(
            S.encodeKeys({
              DestinationType: "destinationType",
              DestinationProperties: "destinationProperties",
              ClientToken: "clientToken",
              Tags: "tags",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/publishingDestination" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "CreatePublishingDestinationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DestinationId: S.optional(S.String) }).pipe(
          S.encodeKeys({ DestinationId: "destinationId" }),
        ),
      ).annotate({
        identifier: "CreatePublishingDestinationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          FindingTypes: S.optional(__S(4)),
        })
          .pipe(S.encodeKeys({ FindingTypes: "findingTypes" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/findings/create" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "CreateSampleFindingsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          Name: S.optional(S.String),
          Format: S.optional(S.String),
          Location: S.optional(S.String),
          ExpectedBucketOwner: S.optional(S.String),
          Activate: S.optional(S.Boolean),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(6)),
        })
          .pipe(
            S.encodeKeys({
              Name: "name",
              Format: "format",
              Location: "location",
              ExpectedBucketOwner: "expectedBucketOwner",
              Activate: "activate",
              ClientToken: "clientToken",
              Tags: "tags",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/threatentityset" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "CreateThreatEntitySetRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ThreatEntitySetId: S.optional(S.String) }).pipe(
          S.encodeKeys({ ThreatEntitySetId: "threatEntitySetId" }),
        ),
      ).annotate({
        identifier: "CreateThreatEntitySetResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          Name: S.optional(S.String),
          Format: S.optional(S.String),
          Location: S.optional(S.String),
          Activate: S.optional(S.Boolean),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(6)),
          ExpectedBucketOwner: S.optional(S.String),
        })
          .pipe(
            S.encodeKeys({
              Name: "name",
              Format: "format",
              Location: "location",
              Activate: "activate",
              ClientToken: "clientToken",
              Tags: "tags",
              ExpectedBucketOwner: "expectedBucketOwner",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/threatintelset" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "CreateThreatIntelSetRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ThreatIntelSetId: S.optional(S.String) }).pipe(
          S.encodeKeys({ ThreatIntelSetId: "threatIntelSetId" }),
        ),
      ).annotate({
        identifier: "CreateThreatIntelSetResponse",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          Name: S.optional(S.String),
          Format: S.optional(S.String),
          Location: S.optional(S.String),
          ExpectedBucketOwner: S.optional(S.String),
          Activate: S.optional(S.Boolean),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(6)),
        })
          .pipe(
            S.encodeKeys({
              Name: "name",
              Format: "format",
              Location: "location",
              ExpectedBucketOwner: "expectedBucketOwner",
              Activate: "activate",
              ClientToken: "clientToken",
              Tags: "tags",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/trustedentityset" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "CreateTrustedEntitySetRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ TrustedEntitySetId: S.optional(S.String) }).pipe(
          S.encodeKeys({ TrustedEntitySetId: "trustedEntitySetId" }),
        ),
      ).annotate({
        identifier: "CreateTrustedEntitySetResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AccountIds: S.optional(__S(4)) })
          .pipe(S.encodeKeys({ AccountIds: "accountIds" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/invitation/decline" }),
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
    case 3:
      return S.suspend(() =>
        S.Struct({ UnprocessedAccounts: S.optional(__S(46)) }).pipe(
          S.encodeKeys({ UnprocessedAccounts: "unprocessedAccounts" }),
        ),
      ).annotate({
        identifier: "DeclineInvitationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RuleId: S.String.pipe(T.HttpLabel("RuleId")),
          AssociationId: S.String.pipe(T.HttpLabel("AssociationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/custom-detection-rule/rule/{RuleId}/association/{AssociationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCustomDetectionRuleAssociationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RuleId: S.String.pipe(T.HttpLabel("RuleId")),
          Mode: S.optional(S.String).pipe(T.HttpQuery("mode")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/custom-detection-rule/org-configuration/{RuleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCustomDetectionRuleOrgConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DetectorId: S.String.pipe(T.HttpLabel("DetectorId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/detector/{DetectorId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDetectorRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          FilterName: S.String.pipe(T.HttpLabel("FilterName")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/detector/{DetectorId}/filter/{FilterName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteFilterRequest" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AccountIds: S.optional(__S(4)) })
          .pipe(S.encodeKeys({ AccountIds: "accountIds" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/invitation/delete" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "DeleteInvitationsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          IpSetId: S.optional(S.String).pipe(T.HttpLabel("IpSetId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/detector/{DetectorId}/ipset/{IpSetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteIPSetRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MalwareProtectionPlanId: S.optional(S.String).pipe(
            T.HttpLabel("MalwareProtectionPlanId"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/malware-protection-plan/{MalwareProtectionPlanId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteMalwareProtectionPlanRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          AccountIds: S.optional(__S(4)),
        })
          .pipe(S.encodeKeys({ AccountIds: "accountIds" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/member/delete" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "DeleteMembersRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          DestinationId: S.String.pipe(T.HttpLabel("DestinationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/detector/{DetectorId}/publishingDestination/{DestinationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePublishingDestinationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          ThreatEntitySetId: S.optional(S.String).pipe(T.HttpLabel("ThreatEntitySetId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/detector/{DetectorId}/threatentityset/{ThreatEntitySetId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteThreatEntitySetRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          ThreatIntelSetId: S.String.pipe(T.HttpLabel("ThreatIntelSetId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteThreatIntelSetRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          TrustedEntitySetId: S.String.pipe(T.HttpLabel("TrustedEntitySetId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/detector/{DetectorId}/trustedentityset/{TrustedEntitySetId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTrustedEntitySetRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EqualsValue: S.optional(S.String),
          GreaterThan: S.optional(S.Number),
          LessThan: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            EqualsValue: "equalsValue",
            GreaterThan: "greaterThan",
            LessThan: "lessThan",
          }),
        ),
      ).annotate({ identifier: "FilterCondition" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CriterionKey: S.optional(S.String),
          FilterCondition: S.optional(__S(72)),
        }).pipe(S.encodeKeys({ CriterionKey: "criterionKey", FilterCondition: "filterCondition" })),
      ).annotate({ identifier: "FilterCriterion" });
    case 2:
      return S.Array(__S(73));
    case 3:
      return S.suspend(() =>
        S.Struct({ FilterCriterion: S.optional(__S(74)) }).pipe(
          S.encodeKeys({ FilterCriterion: "filterCriterion" }),
        ),
      ).annotate({ identifier: "FilterCriteria" });
    case 4:
      return S.suspend(() =>
        S.Struct({ AttributeName: S.optional(S.String), OrderBy: S.optional(S.String) }).pipe(
          S.encodeKeys({ AttributeName: "attributeName", OrderBy: "orderBy" }),
        ),
      ).annotate({ identifier: "SortCriteria" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          FilterCriteria: S.optional(__S(75)),
          SortCriteria: S.optional(__S(76)),
        })
          .pipe(
            S.encodeKeys({
              NextToken: "nextToken",
              MaxResults: "maxResults",
              FilterCriteria: "filterCriteria",
              SortCriteria: "sortCriteria",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/malware-scans" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "DescribeMalwareScansRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          GuardDutyFindingId: S.optional(S.String),
          Description: S.optional(S.String),
          TriggerType: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            GuardDutyFindingId: "guardDutyFindingId",
            Description: "description",
            TriggerType: "triggerType",
          }),
        ),
      ).annotate({ identifier: "TriggerDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.optional(S.String) }).pipe(
          S.encodeKeys({ InstanceArn: "instanceArn" }),
        ),
      ).annotate({ identifier: "ResourceDetails" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ScanResult: S.optional(S.String) }).pipe(
          S.encodeKeys({ ScanResult: "scanResult" }),
        ),
      ).annotate({ identifier: "ScanResultDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          VolumeArn: S.optional(S.String),
          VolumeType: S.optional(S.String),
          DeviceName: S.optional(S.String),
          VolumeSizeInGB: S.optional(S.Number),
          EncryptionType: S.optional(S.String),
          SnapshotArn: S.optional(S.String),
          KmsKeyArn: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            VolumeArn: "volumeArn",
            VolumeType: "volumeType",
            DeviceName: "deviceName",
            VolumeSizeInGB: "volumeSizeInGB",
            EncryptionType: "encryptionType",
            SnapshotArn: "snapshotArn",
            KmsKeyArn: "kmsKeyArn",
          }),
        ),
      ).annotate({ identifier: "VolumeDetail" });
    case 2:
      return S.Array(__S(81));
    case 3:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.optional(S.String),
          AdminDetectorId: S.optional(S.String),
          ScanId: S.optional(S.String),
          ScanStatus: S.optional(S.String),
          FailureReason: S.optional(S.String),
          ScanStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ScanEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TriggerDetails: S.optional(__S(78)),
          ResourceDetails: S.optional(__S(79)),
          ScanResultDetails: S.optional(__S(80)),
          AccountId: S.optional(S.String),
          TotalBytes: S.optional(S.Number),
          FileCount: S.optional(S.Number),
          AttachedVolumes: S.optional(__S(82)),
          ScanType: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            DetectorId: "detectorId",
            AdminDetectorId: "adminDetectorId",
            ScanId: "scanId",
            ScanStatus: "scanStatus",
            FailureReason: "failureReason",
            ScanStartTime: "scanStartTime",
            ScanEndTime: "scanEndTime",
            TriggerDetails: "triggerDetails",
            ResourceDetails: "resourceDetails",
            ScanResultDetails: "scanResultDetails",
            AccountId: "accountId",
            TotalBytes: "totalBytes",
            FileCount: "fileCount",
            AttachedVolumes: "attachedVolumes",
            ScanType: "scanType",
          }),
        ),
      ).annotate({ identifier: "Scan" });
    case 4:
      return S.Array(__S(83));
    case 5:
      return S.suspend(() =>
        S.Struct({ Scans: S.optional(__S(84)), NextToken: S.optional(S.String) }).pipe(
          S.encodeKeys({ Scans: "scans", NextToken: "nextToken" }),
        ),
      ).annotate({
        identifier: "DescribeMalwareScansResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detector/{DetectorId}/admin" }),
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
    case 7:
      return S.suspend(() =>
        S.Struct({ AutoEnable: S.optional(S.Boolean) }).pipe(
          S.encodeKeys({ AutoEnable: "autoEnable" }),
        ),
      ).annotate({
        identifier: "OrganizationS3LogsConfigurationResult",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AuditLogs: S.optional(__S(87)),
        }).pipe(S.encodeKeys({ AuditLogs: "auditLogs" })),
      ).annotate({
        identifier: "OrganizationKubernetesConfigurationResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ EbsVolumes: S.optional(__S(87)) }).pipe(
          S.encodeKeys({ EbsVolumes: "ebsVolumes" }),
        ),
      ).annotate({
        identifier: "OrganizationScanEc2InstanceWithFindingsResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ScanEc2InstanceWithFindings: S.optional(__S(89)),
        }).pipe(S.encodeKeys({ ScanEc2InstanceWithFindings: "scanEc2InstanceWithFindings" })),
      ).annotate({
        identifier: "OrganizationMalwareProtectionConfigurationResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          S3Logs: S.optional(__S(87)),
          Kubernetes: S.optional(__S(88)),
          MalwareProtection: S.optional(__S(90)),
        }).pipe(
          S.encodeKeys({
            S3Logs: "s3Logs",
            Kubernetes: "kubernetes",
            MalwareProtection: "malwareProtection",
          }),
        ),
      ).annotate({
        identifier: "OrganizationDataSourceConfigurationsResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          AutoEnable: S.optional(S.String),
        }).pipe(S.encodeKeys({ Name: "name", AutoEnable: "autoEnable" })),
      ).annotate({
        identifier: "OrganizationAdditionalConfigurationResult",
      });
    case 5:
      return S.Array(__S(92));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          AutoEnable: S.optional(S.String),
          AdditionalConfiguration: S.optional(__S(93)),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            AutoEnable: "autoEnable",
            AdditionalConfiguration: "additionalConfiguration",
          }),
        ),
      ).annotate({
        identifier: "OrganizationFeatureConfigurationResult",
      });
    case 7:
      return S.Array(__S(94));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AutoEnable: S.optional(S.Boolean),
          MemberAccountLimitReached: S.optional(S.Boolean),
          DataSources: S.optional(__S(91)),
          Features: S.optional(__S(95)),
          NextToken: S.optional(S.String),
          AutoEnableOrganizationMembers: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            AutoEnable: "autoEnable",
            MemberAccountLimitReached: "memberAccountLimitReached",
            DataSources: "dataSources",
            Features: "features",
            NextToken: "nextToken",
            AutoEnableOrganizationMembers: "autoEnableOrganizationMembers",
          }),
        ),
      ).annotate({
        identifier: "DescribeOrganizationConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          DestinationId: S.String.pipe(T.HttpLabel("DestinationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/detector/{DetectorId}/publishingDestination/{DestinationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribePublishingDestinationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DestinationId: S.optional(S.String),
          DestinationType: S.optional(S.String),
          Status: S.optional(S.String),
          PublishingFailureStartTimestamp: S.optional(S.Number),
          DestinationProperties: S.optional(__S(48)),
          Tags: S.optional(__S(6)),
        }).pipe(
          S.encodeKeys({
            DestinationId: "destinationId",
            DestinationType: "destinationType",
            Status: "status",
            PublishingFailureStartTimestamp: "publishingFailureStartTimestamp",
            DestinationProperties: "destinationProperties",
            Tags: "tags",
          }),
        ),
      ).annotate({
        identifier: "DescribePublishingDestinationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AdminAccountId: S.optional(S.String) })
          .pipe(S.encodeKeys({ AdminAccountId: "adminAccountId" }))
          .pipe(
            T.all(T.Http({ method: "POST", uri: "/admin/disable" }), svc, auth, proto, ver, rules),
          ),
      ).annotate({
        identifier: "DisableOrganizationAdminAccountRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DetectorId: S.String.pipe(T.HttpLabel("DetectorId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/detector/{DetectorId}/administrator/disassociate" }),
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
    case 5:
      return S.suspend(() =>
        S.Struct({ DetectorId: S.String.pipe(T.HttpLabel("DetectorId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/detector/{DetectorId}/master/disassociate" }),
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
    case 6:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          AccountIds: S.optional(__S(4)),
        })
          .pipe(S.encodeKeys({ AccountIds: "accountIds" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/member/disassociate" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "DisassociateMembersRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AdminAccountId: S.optional(S.String) })
          .pipe(S.encodeKeys({ AdminAccountId: "adminAccountId" }))
          .pipe(
            T.all(T.Http({ method: "POST", uri: "/admin/enable" }), svc, auth, proto, ver, rules),
          ),
      ).annotate({
        identifier: "EnableOrganizationAdminAccountRequest",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DetectorId: S.String.pipe(T.HttpLabel("DetectorId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detector/{DetectorId}/administrator" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAdministratorAccountRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          InvitationId: S.optional(S.String),
          RelationshipStatus: S.optional(S.String),
          InvitedAt: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            AccountId: "accountId",
            InvitationId: "invitationId",
            RelationshipStatus: "relationshipStatus",
            InvitedAt: "invitedAt",
          }),
        ),
      ).annotate({ identifier: "Administrator" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Administrator: S.optional(__S(105)) }).pipe(
          S.encodeKeys({ Administrator: "administrator" }),
        ),
      ).annotate({
        identifier: "GetAdministratorAccountResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Equals: S.optional(__S(4)), NotEquals: S.optional(__S(4)) }).pipe(
          S.encodeKeys({ Equals: "equals", NotEquals: "notEquals" }),
        ),
      ).annotate({ identifier: "CoverageFilterCondition" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CriterionKey: S.optional(S.String),
          FilterCondition: S.optional(__S(107)),
        }).pipe(S.encodeKeys({ CriterionKey: "criterionKey", FilterCondition: "filterCondition" })),
      ).annotate({ identifier: "CoverageFilterCriterion" });
    case 5:
      return S.Array(__S(108));
    case 6:
      return S.suspend(() =>
        S.Struct({ FilterCriterion: S.optional(__S(109)) }).pipe(
          S.encodeKeys({ FilterCriterion: "filterCriterion" }),
        ),
      ).annotate({ identifier: "CoverageFilterCriteria" });
    case 7:
      return S.Array(S.String);
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          FilterCriteria: S.optional(__S(110)),
          StatisticsType: S.optional(__S(111)),
        })
          .pipe(
            S.encodeKeys({ FilterCriteria: "filterCriteria", StatisticsType: "statisticsType" }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/coverage/statistics" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "GetCoverageStatisticsRequest",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          CountByResourceType: S.optional(__S(113)),
          CountByCoverageStatus: S.optional(__S(113)),
        }).pipe(
          S.encodeKeys({
            CountByResourceType: "countByResourceType",
            CountByCoverageStatus: "countByCoverageStatus",
          }),
        ),
      ).annotate({ identifier: "CoverageStatistics" });
    case 3:
      return S.suspend(() =>
        S.Struct({ CoverageStatistics: S.optional(__S(114)) }).pipe(
          S.encodeKeys({ CoverageStatistics: "coverageStatistics" }),
        ),
      ).annotate({
        identifier: "GetCoverageStatisticsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ RuleId: S.String.pipe(T.HttpLabel("RuleId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/custom-detection-rule/rule/{RuleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCustomDetectionRuleRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Expression: S.optional(S.String) }).pipe(
          S.encodeKeys({ Expression: "expression" }),
        ),
      ).annotate({ identifier: "RuleDefinition" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RuleId: S.optional(S.String),
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Severity: S.optional(S.String),
          DataSource: S.optional(S.String),
          Tactic: S.optional(S.String),
          Technique: S.optional(S.String),
          Service: S.optional(S.String),
          Definition: S.optional(__S(117)),
          Language: S.optional(S.String),
          Schema: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(
          S.encodeKeys({
            RuleId: "ruleId",
            Arn: "arn",
            Name: "name",
            Description: "description",
            Severity: "severity",
            DataSource: "dataSource",
            Tactic: "tactic",
            Technique: "technique",
            Service: "service",
            Definition: "definition",
            Language: "language",
            Schema: "schema",
            CreatedAt: "createdAt",
            UpdatedAt: "updatedAt",
          }),
        ),
      ).annotate({ identifier: "RuleDetail" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Rule: S.optional(__S(118)) }).pipe(S.encodeKeys({ Rule: "rule" })),
      ).annotate({
        identifier: "GetCustomDetectionRuleResponse",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RuleId: S.String.pipe(T.HttpLabel("RuleId")),
          AssociationId: S.String.pipe(T.HttpLabel("AssociationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/custom-detection-rule/rule/{RuleId}/association/{AssociationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCustomDetectionRuleAssociationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ RuleAssociation: S.optional(__S(8)), Tags: S.optional(__S(6)) }).pipe(
          S.encodeKeys({ RuleAssociation: "ruleAssociation", Tags: "tags" }),
        ),
      ).annotate({
        identifier: "GetCustomDetectionRuleAssociationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RuleId: S.String.pipe(T.HttpLabel("RuleId")),
          Mode: S.optional(S.String).pipe(T.HttpQuery("mode")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/custom-detection-rule/org-configuration/{RuleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCustomDetectionRuleOrgConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RuleId: S.optional(S.String),
          Mode: S.optional(S.String),
          Status: S.optional(S.String),
          StatusReason: S.optional(S.String),
          IncludeAccountIds: S.optional(__S(4)),
          ExcludeAccountIds: S.optional(__S(4)),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ExpiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(
          S.encodeKeys({
            RuleId: "ruleId",
            Mode: "mode",
            Status: "status",
            StatusReason: "statusReason",
            IncludeAccountIds: "includeAccountIds",
            ExcludeAccountIds: "excludeAccountIds",
            CreatedAt: "createdAt",
            UpdatedAt: "updatedAt",
            ExpiresAt: "expiresAt",
          }),
        ),
      ).annotate({
        identifier: "DetectionRuleOrgConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Configuration: S.optional(__S(123)) }).pipe(
          S.encodeKeys({ Configuration: "configuration" }),
        ),
      ).annotate({
        identifier: "GetCustomDetectionRuleOrgConfigurationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DetectorId: S.String.pipe(T.HttpLabel("DetectorId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detector/{DetectorId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDetectorRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Status: S.optional(S.String) }).pipe(S.encodeKeys({ Status: "status" })),
      ).annotate({
        identifier: "CloudTrailConfigurationResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AuditLogs: S.optional(__S(126)) }).pipe(
          S.encodeKeys({ AuditLogs: "auditLogs" }),
        ),
      ).annotate({
        identifier: "KubernetesConfigurationResult",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CloudTrail: S.optional(__S(126)),
          DNSLogs: S.optional(__S(126)),
          FlowLogs: S.optional(__S(126)),
          S3Logs: S.optional(__S(126)),
          Kubernetes: S.optional(__S(127)),
          MalwareProtection: S.optional(__S(24)),
        }).pipe(
          S.encodeKeys({
            CloudTrail: "cloudTrail",
            DNSLogs: "dnsLogs",
            FlowLogs: "flowLogs",
            S3Logs: "s3Logs",
            Kubernetes: "kubernetes",
            MalwareProtection: "malwareProtection",
          }),
        ),
      ).annotate({
        identifier: "DataSourceConfigurationsResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ManagedBy: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Status: "status",
            UpdatedAt: "updatedAt",
            ManagedBy: "managedBy",
          }),
        ),
      ).annotate({
        identifier: "DetectorAdditionalConfigurationResult",
      });
    case 2:
      return S.Array(__S(129));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AdditionalConfiguration: S.optional(__S(130)),
          ManagedBy: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Status: "status",
            UpdatedAt: "updatedAt",
            AdditionalConfiguration: "additionalConfiguration",
            ManagedBy: "managedBy",
          }),
        ),
      ).annotate({
        identifier: "DetectorFeatureConfigurationResult",
      });
    case 4:
      return S.Array(__S(131));
    case 5:
      return S.suspend(() =>
        S.Struct({
          CreatedAt: S.optional(S.String),
          FindingPublishingFrequency: S.optional(S.String),
          ServiceRole: S.optional(S.String),
          Status: S.optional(S.String),
          UpdatedAt: S.optional(S.String),
          DataSources: S.optional(__S(128)),
          Tags: S.optional(__S(6)),
          Features: S.optional(__S(132)),
        }).pipe(
          S.encodeKeys({
            CreatedAt: "createdAt",
            FindingPublishingFrequency: "findingPublishingFrequency",
            ServiceRole: "serviceRole",
            Status: "status",
            UpdatedAt: "updatedAt",
            DataSources: "dataSources",
            Tags: "tags",
            Features: "features",
          }),
        ),
      ).annotate({ identifier: "GetDetectorResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          FilterName: S.String.pipe(T.HttpLabel("FilterName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detector/{DetectorId}/filter/{FilterName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFilterRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Action: S.optional(S.String),
          Rank: S.optional(S.Number),
          FindingCriteria: S.optional(__S(29)),
          Tags: S.optional(__S(6)),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Version: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Description: "description",
            Action: "action",
            Rank: "rank",
            FindingCriteria: "findingCriteria",
            Tags: "tags",
            CreatedAt: "createdAt",
            UpdatedAt: "updatedAt",
            Version: "version",
          }),
        ),
      ).annotate({ identifier: "GetFilterResponse" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          FindingIds: S.optional(__S(4)),
          SortCriteria: S.optional(__S(76)),
        })
          .pipe(S.encodeKeys({ FindingIds: "findingIds", SortCriteria: "sortCriteria" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/findings/get" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "GetFindingsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccessKeyId: S.optional(S.String),
          PrincipalId: S.optional(S.String),
          UserName: S.optional(S.String),
          UserType: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            AccessKeyId: "accessKeyId",
            PrincipalId: "principalId",
            UserName: "userName",
            UserType: "userType",
          }),
        ),
      ).annotate({ identifier: "AccessKeyDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Id: S.optional(S.String) }).pipe(S.encodeKeys({ Id: "id" })),
      ).annotate({ identifier: "Owner" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }).pipe(
          S.encodeKeys({ Key: "key", Value: "value" }),
        ),
      ).annotate({ identifier: "Tag" });
    case 4:
      return S.Array(__S(139));
    case 5:
      return S.suspend(() =>
        S.Struct({
          EncryptionType: S.optional(S.String),
          KmsMasterKeyArn: S.optional(S.String),
        }).pipe(
          S.encodeKeys({ EncryptionType: "encryptionType", KmsMasterKeyArn: "kmsMasterKeyArn" }),
        ),
      ).annotate({
        identifier: "DefaultServerSideEncryption",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AllowsPublicReadAccess: S.optional(S.Boolean),
          AllowsPublicWriteAccess: S.optional(S.Boolean),
        }).pipe(
          S.encodeKeys({
            AllowsPublicReadAccess: "allowsPublicReadAccess",
            AllowsPublicWriteAccess: "allowsPublicWriteAccess",
          }),
        ),
      ).annotate({ identifier: "AccessControlList" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          IgnorePublicAcls: S.optional(S.Boolean),
          RestrictPublicBuckets: S.optional(S.Boolean),
          BlockPublicAcls: S.optional(S.Boolean),
          BlockPublicPolicy: S.optional(S.Boolean),
        }).pipe(
          S.encodeKeys({
            IgnorePublicAcls: "ignorePublicAcls",
            RestrictPublicBuckets: "restrictPublicBuckets",
            BlockPublicAcls: "blockPublicAcls",
            BlockPublicPolicy: "blockPublicPolicy",
          }),
        ),
      ).annotate({ identifier: "BlockPublicAccess" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccessControlList: S.optional(__S(142)),
          BucketPolicy: S.optional(__S(142)),
          BlockPublicAccess: S.optional(__S(143)),
        }).pipe(
          S.encodeKeys({
            AccessControlList: "accessControlList",
            BucketPolicy: "bucketPolicy",
            BlockPublicAccess: "blockPublicAccess",
          }),
        ),
      ).annotate({ identifier: "BucketLevelPermissions" });
    case 1:
      return S.suspend(() =>
        S.Struct({ BlockPublicAccess: S.optional(__S(143)) }).pipe(
          S.encodeKeys({ BlockPublicAccess: "blockPublicAccess" }),
        ),
      ).annotate({ identifier: "AccountLevelPermissions" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          BucketLevelPermissions: S.optional(__S(144)),
          AccountLevelPermissions: S.optional(__S(145)),
        }).pipe(
          S.encodeKeys({
            BucketLevelPermissions: "bucketLevelPermissions",
            AccountLevelPermissions: "accountLevelPermissions",
          }),
        ),
      ).annotate({ identifier: "PermissionConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PermissionConfiguration: S.optional(__S(146)),
          EffectivePermission: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            PermissionConfiguration: "permissionConfiguration",
            EffectivePermission: "effectivePermission",
          }),
        ),
      ).annotate({ identifier: "PublicAccess" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ObjectArn: S.optional(S.String),
          Key: S.optional(S.String),
          ETag: S.optional(S.String),
          Hash: S.optional(S.String),
          VersionId: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            ObjectArn: "objectArn",
            Key: "key",
            ETag: "eTag",
            Hash: "hash",
            VersionId: "versionId",
          }),
        ),
      ).annotate({ identifier: "S3ObjectDetail" });
    case 5:
      return S.Array(__S(148));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Type: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Owner: S.optional(__S(138)),
          Tags: S.optional(__S(140)),
          DefaultServerSideEncryption: S.optional(__S(141)),
          PublicAccess: S.optional(__S(147)),
          S3ObjectDetails: S.optional(__S(149)),
        }).pipe(
          S.encodeKeys({
            Arn: "arn",
            Name: "name",
            Type: "type",
            CreatedAt: "createdAt",
            Owner: "owner",
            Tags: "tags",
            DefaultServerSideEncryption: "defaultServerSideEncryption",
            PublicAccess: "publicAccess",
            S3ObjectDetails: "s3ObjectDetails",
          }),
        ),
      ).annotate({ identifier: "S3BucketDetail" });
    case 7:
      return S.Array(__S(150));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Id: S.optional(S.String) }).pipe(
          S.encodeKeys({ Arn: "arn", Id: "id" }),
        ),
      ).annotate({ identifier: "IamInstanceProfile" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PrivateDnsName: S.optional(S.String),
          PrivateIpAddress: S.optional(SensitiveString),
        }).pipe(
          S.encodeKeys({ PrivateDnsName: "privateDnsName", PrivateIpAddress: "privateIpAddress" }),
        ),
      ).annotate({ identifier: "PrivateIpAddressDetails" });
    case 2:
      return S.Array(__S(153));
    case 3:
      return S.suspend(() =>
        S.Struct({ GroupId: S.optional(S.String), GroupName: S.optional(S.String) }).pipe(
          S.encodeKeys({ GroupId: "groupId", GroupName: "groupName" }),
        ),
      ).annotate({ identifier: "SecurityGroup" });
    case 4:
      return S.Array(__S(155));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Ipv6Addresses: S.optional(__S(4)),
          NetworkInterfaceId: S.optional(S.String),
          PrivateDnsName: S.optional(S.String),
          PrivateIpAddress: S.optional(SensitiveString),
          PrivateIpAddresses: S.optional(__S(154)),
          PublicDnsName: S.optional(S.String),
          PublicIp: S.optional(S.String),
          SecurityGroups: S.optional(__S(156)),
          SubnetId: S.optional(S.String),
          VpcId: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Ipv6Addresses: "ipv6Addresses",
            NetworkInterfaceId: "networkInterfaceId",
            PrivateDnsName: "privateDnsName",
            PrivateIpAddress: "privateIpAddress",
            PrivateIpAddresses: "privateIpAddresses",
            PublicDnsName: "publicDnsName",
            PublicIp: "publicIp",
            SecurityGroups: "securityGroups",
            SubnetId: "subnetId",
            VpcId: "vpcId",
          }),
        ),
      ).annotate({ identifier: "NetworkInterface" });
    case 6:
      return S.Array(__S(157));
    case 7:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.String), ProductType: S.optional(S.String) }).pipe(
          S.encodeKeys({ Code: "productCodeId", ProductType: "productCodeType" }),
        ),
      ).annotate({ identifier: "ProductCode" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(159));
    case 1:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZone: S.optional(S.String),
          IamInstanceProfile: S.optional(__S(152)),
          ImageDescription: S.optional(S.String),
          ImageId: S.optional(S.String),
          InstanceId: S.optional(S.String),
          InstanceState: S.optional(S.String),
          InstanceType: S.optional(S.String),
          OutpostArn: S.optional(S.String),
          LaunchTime: S.optional(S.String),
          NetworkInterfaces: S.optional(__S(158)),
          Platform: S.optional(S.String),
          ProductCodes: S.optional(__S(160)),
          Tags: S.optional(__S(140)),
        }).pipe(
          S.encodeKeys({
            AvailabilityZone: "availabilityZone",
            IamInstanceProfile: "iamInstanceProfile",
            ImageDescription: "imageDescription",
            ImageId: "imageId",
            InstanceId: "instanceId",
            InstanceState: "instanceState",
            InstanceType: "instanceType",
            OutpostArn: "outpostArn",
            LaunchTime: "launchTime",
            NetworkInterfaces: "networkInterfaces",
            Platform: "platform",
            ProductCodes: "productCodes",
            Tags: "tags",
          }),
        ),
      ).annotate({ identifier: "InstanceDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          VpcId: S.optional(S.String),
          Status: S.optional(S.String),
          Tags: S.optional(__S(140)),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Arn: "arn",
            VpcId: "vpcId",
            Status: "status",
            Tags: "tags",
            CreatedAt: "createdAt",
          }),
        ),
      ).annotate({ identifier: "EksClusterDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Username: S.optional(S.String), Groups: S.optional(__S(4)) }).pipe(
          S.encodeKeys({ Username: "username", Groups: "groups" }),
        ),
      ).annotate({ identifier: "ImpersonatedUser" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Username: S.optional(S.String),
          Uid: S.optional(S.String),
          Groups: S.optional(__S(4)),
          SessionName: S.optional(__S(4)),
          ImpersonatedUser: S.optional(__S(163)),
        }).pipe(
          S.encodeKeys({
            Username: "username",
            Uid: "uid",
            Groups: "groups",
            SessionName: "sessionName",
            ImpersonatedUser: "impersonatedUser",
          }),
        ),
      ).annotate({ identifier: "KubernetesUserDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), MountPath: S.optional(S.String) }).pipe(
          S.encodeKeys({ Name: "name", MountPath: "mountPath" }),
        ),
      ).annotate({ identifier: "VolumeMount" });
    case 6:
      return S.Array(__S(165));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Privileged: S.optional(S.Boolean),
          AllowPrivilegeEscalation: S.optional(S.Boolean),
        }).pipe(
          S.encodeKeys({
            Privileged: "privileged",
            AllowPrivilegeEscalation: "allowPrivilegeEscalation",
          }),
        ),
      ).annotate({ identifier: "SecurityContext" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ContainerRuntime: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Image: S.optional(S.String),
          ImagePrefix: S.optional(S.String),
          VolumeMounts: S.optional(__S(166)),
          SecurityContext: S.optional(__S(167)),
        }).pipe(
          S.encodeKeys({
            ContainerRuntime: "containerRuntime",
            Id: "id",
            Name: "name",
            Image: "image",
            ImagePrefix: "imagePrefix",
            VolumeMounts: "volumeMounts",
            SecurityContext: "securityContext",
          }),
        ),
      ).annotate({ identifier: "Container" });
    case 1:
      return S.Array(__S(168));
    case 2:
      return S.suspend(() =>
        S.Struct({ Path: S.optional(S.String) }).pipe(S.encodeKeys({ Path: "path" })),
      ).annotate({ identifier: "HostPath" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), HostPath: S.optional(__S(170)) }).pipe(
          S.encodeKeys({ Name: "name", HostPath: "hostPath" }),
        ),
      ).annotate({ identifier: "Volume" });
    case 4:
      return S.Array(__S(171));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Type: S.optional(S.String),
          Uid: S.optional(S.String),
          Namespace: S.optional(S.String),
          HostNetwork: S.optional(S.Boolean),
          ServiceAccountName: S.optional(S.String),
          Containers: S.optional(__S(169)),
          Volumes: S.optional(__S(172)),
          HostIPC: S.optional(S.Boolean),
          HostPID: S.optional(S.Boolean),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Type: "type",
            Uid: "uid",
            Namespace: "namespace",
            HostNetwork: "hostNetwork",
            ServiceAccountName: "serviceAccountName",
            Containers: "containers",
            Volumes: "volumes",
            HostIPC: "hostIPC",
            HostPID: "hostPID",
          }),
        ),
      ).annotate({
        identifier: "KubernetesWorkloadDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          KubernetesUserDetails: S.optional(__S(164)),
          KubernetesWorkloadDetails: S.optional(__S(173)),
        }).pipe(
          S.encodeKeys({
            KubernetesUserDetails: "kubernetesUserDetails",
            KubernetesWorkloadDetails: "kubernetesWorkloadDetails",
          }),
        ),
      ).annotate({ identifier: "KubernetesDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ScannedVolumeDetails: S.optional(__S(82)),
          SkippedVolumeDetails: S.optional(__S(82)),
        }).pipe(
          S.encodeKeys({
            ScannedVolumeDetails: "scannedVolumeDetails",
            SkippedVolumeDetails: "skippedVolumeDetails",
          }),
        ),
      ).annotate({ identifier: "EbsVolumeDetails" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          DefinitionArn: S.optional(S.String),
          Version: S.optional(S.String),
          TaskCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StartedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StartedBy: S.optional(S.String),
          Tags: S.optional(__S(140)),
          Volumes: S.optional(__S(172)),
          Containers: S.optional(__S(169)),
          Group: S.optional(S.String),
          LaunchType: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Arn: "arn",
            DefinitionArn: "definitionArn",
            Version: "version",
            TaskCreatedAt: "createdAt",
            StartedAt: "startedAt",
            StartedBy: "startedBy",
            Tags: "tags",
            Volumes: "volumes",
            Containers: "containers",
            Group: "group",
            LaunchType: "launchType",
          }),
        ),
      ).annotate({ identifier: "EcsTaskDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          Status: S.optional(S.String),
          ActiveServicesCount: S.optional(S.Number),
          RegisteredContainerInstancesCount: S.optional(S.Number),
          RunningTasksCount: S.optional(S.Number),
          Tags: S.optional(__S(140)),
          TaskDetails: S.optional(__S(176)),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Arn: "arn",
            Status: "status",
            ActiveServicesCount: "activeServicesCount",
            RegisteredContainerInstancesCount: "registeredContainerInstancesCount",
            RunningTasksCount: "runningTasksCount",
            Tags: "tags",
            TaskDetails: "taskDetails",
          }),
        ),
      ).annotate({ identifier: "EcsClusterDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SubnetIds: S.optional(__S(4)),
          VpcId: S.optional(S.String),
          SecurityGroups: S.optional(__S(156)),
        }).pipe(
          S.encodeKeys({
            SubnetIds: "subnetIds",
            VpcId: "vpcId",
            SecurityGroups: "securityGroups",
          }),
        ),
      ).annotate({ identifier: "VpcConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FunctionArn: S.optional(S.String),
          FunctionName: S.optional(S.String),
          Description: S.optional(S.String),
          LastModifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RevisionId: S.optional(S.String),
          FunctionVersion: S.optional(S.String),
          Role: S.optional(S.String),
          VpcConfig: S.optional(__S(178)),
          Tags: S.optional(__S(140)),
        }).pipe(
          S.encodeKeys({
            FunctionArn: "functionArn",
            FunctionName: "functionName",
            Description: "description",
            LastModifiedAt: "lastModifiedAt",
            RevisionId: "revisionId",
            FunctionVersion: "functionVersion",
            Role: "role",
            VpcConfig: "vpcConfig",
            Tags: "tags",
          }),
        ),
      ).annotate({ identifier: "LambdaDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DbInstanceIdentifier: S.optional(S.String),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          DbClusterIdentifier: S.optional(S.String),
          DbInstanceArn: S.optional(S.String),
          DbiResourceId: S.optional(S.String),
          Tags: S.optional(__S(140)),
        }).pipe(
          S.encodeKeys({
            DbInstanceIdentifier: "dbInstanceIdentifier",
            Engine: "engine",
            EngineVersion: "engineVersion",
            DbClusterIdentifier: "dbClusterIdentifier",
            DbInstanceArn: "dbInstanceArn",
            DbiResourceId: "dbiResourceId",
            Tags: "tags",
          }),
        ),
      ).annotate({ identifier: "RdsDbInstanceDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DbShardGroupIdentifier: S.optional(S.String),
          DbShardGroupResourceId: S.optional(S.String),
          DbShardGroupArn: S.optional(S.String),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          DbClusterIdentifier: S.optional(S.String),
          Tags: S.optional(__S(140)),
        }).pipe(
          S.encodeKeys({
            DbShardGroupIdentifier: "dbShardGroupIdentifier",
            DbShardGroupResourceId: "dbShardGroupResourceId",
            DbShardGroupArn: "dbShardGroupArn",
            Engine: "engine",
            EngineVersion: "engineVersion",
            DbClusterIdentifier: "dbClusterIdentifier",
            Tags: "tags",
          }),
        ),
      ).annotate({ identifier: "RdsLimitlessDbDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          User: S.optional(S.String),
          Application: S.optional(S.String),
          Database: S.optional(S.String),
          Ssl: S.optional(S.String),
          AuthMethod: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            User: "user",
            Application: "application",
            Database: "database",
            Ssl: "ssl",
            AuthMethod: "authMethod",
          }),
        ),
      ).annotate({ identifier: "RdsDbUserDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({ SnapshotArn: S.optional(S.String) }).pipe(
          S.encodeKeys({ SnapshotArn: "snapshotArn" }),
        ),
      ).annotate({ identifier: "EbsSnapshotDetails" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ImageArn: S.optional(S.String) }).pipe(S.encodeKeys({ ImageArn: "imageArn" })),
      ).annotate({ identifier: "Ec2ImageDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }).pipe(S.encodeKeys({ StartTime: "startTime", EndTime: "endTime" })),
      ).annotate({
        identifier: "ScanConfigurationContinuousScanDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RecoveryPointArn: S.optional(S.String),
          BackupVaultName: S.optional(S.String),
          ContinuousScanDetails: S.optional(__S(185)),
        }).pipe(
          S.encodeKeys({
            RecoveryPointArn: "recoveryPointArn",
            BackupVaultName: "backupVaultName",
            ContinuousScanDetails: "continuousScanDetails",
          }),
        ),
      ).annotate({ identifier: "RecoveryPointDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Version: S.optional(S.String) }).pipe(
          S.encodeKeys({ Arn: "arn", Version: "version" }),
        ),
      ).annotate({ identifier: "BedrockGuardrail" });
    case 4:
      return S.Array(__S(187));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Confidence: S.optional(S.String),
          Action: S.optional(S.String),
        }).pipe(S.encodeKeys({ Type: "type", Confidence: "confidence", Action: "action" })),
      ).annotate({ identifier: "ContentPolicyFilter" });
    case 6:
      return S.Array(__S(189));
    case 7:
      return S.suspend(() =>
        S.Struct({
          GuardrailArn: S.optional(S.String),
          GuardrailVersion: S.optional(S.String),
          Guardrails: S.optional(__S(188)),
          GuardrailAction: S.optional(S.String),
          GuardrailSource: S.optional(S.String),
          ContentPolicyFilters: S.optional(__S(190)),
        }).pipe(
          S.encodeKeys({
            GuardrailArn: "guardrailArn",
            GuardrailVersion: "guardrailVersion",
            Guardrails: "guardrails",
            GuardrailAction: "guardrailAction",
            GuardrailSource: "guardrailSource",
            ContentPolicyFilters: "contentPolicyFilters",
          }),
        ),
      ).annotate({ identifier: "BedrockGuardrailDetails" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ModelId: S.optional(S.String) }).pipe(S.encodeKeys({ ModelId: "modelId" })),
      ).annotate({ identifier: "ModelDetail" });
    case 1:
      return S.Array(__S(192));
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccessKeyDetails: S.optional(__S(137)),
          S3BucketDetails: S.optional(__S(151)),
          InstanceDetails: S.optional(__S(161)),
          EksClusterDetails: S.optional(__S(162)),
          KubernetesDetails: S.optional(__S(174)),
          ResourceType: S.optional(S.String),
          EbsVolumeDetails: S.optional(__S(175)),
          EcsClusterDetails: S.optional(__S(177)),
          ContainerDetails: S.optional(__S(168)),
          LambdaDetails: S.optional(__S(179)),
          RdsDbInstanceDetails: S.optional(__S(180)),
          RdsLimitlessDbDetails: S.optional(__S(181)),
          RdsDbUserDetails: S.optional(__S(182)),
          EbsSnapshotDetails: S.optional(__S(183)),
          Ec2ImageDetails: S.optional(__S(184)),
          RecoveryPointDetails: S.optional(__S(186)),
          BedrockGuardrailDetails: S.optional(__S(191)),
          ModelDetails: S.optional(__S(193)),
        }).pipe(
          S.encodeKeys({
            AccessKeyDetails: "accessKeyDetails",
            S3BucketDetails: "s3BucketDetails",
            InstanceDetails: "instanceDetails",
            EksClusterDetails: "eksClusterDetails",
            KubernetesDetails: "kubernetesDetails",
            ResourceType: "resourceType",
            EbsVolumeDetails: "ebsVolumeDetails",
            EcsClusterDetails: "ecsClusterDetails",
            ContainerDetails: "containerDetails",
            LambdaDetails: "lambdaDetails",
            RdsDbInstanceDetails: "rdsDbInstanceDetails",
            RdsLimitlessDbDetails: "rdsLimitlessDbDetails",
            RdsDbUserDetails: "rdsDbUserDetails",
            EbsSnapshotDetails: "ebsSnapshotDetails",
            Ec2ImageDetails: "ec2ImageDetails",
            RecoveryPointDetails: "recoveryPointDetails",
            BedrockGuardrailDetails: "bedrockGuardrailDetails",
            ModelDetails: "modelDetails",
          }),
        ),
      ).annotate({ identifier: "Resource" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Domain: S.optional(S.String) }).pipe(S.encodeKeys({ Domain: "domain" })),
      ).annotate({ identifier: "DomainDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({ CityName: S.optional(S.String) }).pipe(S.encodeKeys({ CityName: "cityName" })),
      ).annotate({ identifier: "City" });
    case 5:
      return S.suspend(() =>
        S.Struct({ CountryCode: S.optional(S.String), CountryName: S.optional(S.String) }).pipe(
          S.encodeKeys({ CountryCode: "countryCode", CountryName: "countryName" }),
        ),
      ).annotate({ identifier: "Country" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Lat: S.optional(S.Number), Lon: S.optional(S.Number) }).pipe(
          S.encodeKeys({ Lat: "lat", Lon: "lon" }),
        ),
      ).annotate({ identifier: "GeoLocation" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Asn: S.optional(S.String),
          AsnOrg: S.optional(S.String),
          Isp: S.optional(S.String),
          Org: S.optional(S.String),
        }).pipe(S.encodeKeys({ Asn: "asn", AsnOrg: "asnOrg", Isp: "isp", Org: "org" })),
      ).annotate({ identifier: "Organization" });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          City: S.optional(__S(196)),
          Country: S.optional(__S(197)),
          GeoLocation: S.optional(__S(198)),
          IpAddressV4: S.optional(SensitiveString),
          IpAddressV6: S.optional(SensitiveString),
          Organization: S.optional(__S(199)),
        }).pipe(
          S.encodeKeys({
            City: "city",
            Country: "country",
            GeoLocation: "geoLocation",
            IpAddressV4: "ipAddressV4",
            IpAddressV6: "ipAddressV6",
            Organization: "organization",
          }),
        ),
      ).annotate({ identifier: "RemoteIpDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          Affiliated: S.optional(S.Boolean),
          AwsServiceName: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            AccountId: "accountId",
            Affiliated: "affiliated",
            AwsServiceName: "awsServiceName",
          }),
        ),
      ).annotate({ identifier: "RemoteAccountDetails" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Api: S.optional(S.String),
          CallerType: S.optional(S.String),
          DomainDetails: S.optional(__S(195)),
          ErrorCode: S.optional(S.String),
          UserAgent: S.optional(S.String),
          RemoteIpDetails: S.optional(__S(200)),
          ServiceName: S.optional(S.String),
          RemoteAccountDetails: S.optional(__S(201)),
          AffectedResources: S.optional(__S(202)),
        }).pipe(
          S.encodeKeys({
            Api: "api",
            CallerType: "callerType",
            DomainDetails: "domainDetails",
            ErrorCode: "errorCode",
            UserAgent: "userAgent",
            RemoteIpDetails: "remoteIpDetails",
            ServiceName: "serviceName",
            RemoteAccountDetails: "remoteAccountDetails",
            AffectedResources: "affectedResources",
          }),
        ),
      ).annotate({ identifier: "AwsApiCallAction" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Domain: S.optional(S.String),
          Protocol: S.optional(S.String),
          Blocked: S.optional(S.Boolean),
          DomainWithSuffix: S.optional(S.String),
          VpcOwnerAccountId: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Domain: "domain",
            Protocol: "protocol",
            Blocked: "blocked",
            DomainWithSuffix: "domainWithSuffix",
            VpcOwnerAccountId: "vpcOwnerAccountId",
          }),
        ),
      ).annotate({ identifier: "DnsRequestAction" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Port: S.optional(S.Number), PortName: S.optional(S.String) }).pipe(
          S.encodeKeys({ Port: "port", PortName: "portName" }),
        ),
      ).annotate({ identifier: "LocalPortDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          IpAddressV4: S.optional(SensitiveString),
          IpAddressV6: S.optional(SensitiveString),
        }).pipe(S.encodeKeys({ IpAddressV4: "ipAddressV4", IpAddressV6: "ipAddressV6" })),
      ).annotate({ identifier: "LocalIpDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Blocked: S.optional(S.Boolean),
          ConnectionDirection: S.optional(S.String),
          LocalPortDetails: S.optional(__S(205)),
          Protocol: S.optional(S.String),
          LocalIpDetails: S.optional(__S(206)),
          LocalNetworkInterface: S.optional(S.String),
          RemoteIpDetails: S.optional(__S(200)),
          RemotePortDetails: S.optional(__S(205)),
        }).pipe(
          S.encodeKeys({
            Blocked: "blocked",
            ConnectionDirection: "connectionDirection",
            LocalPortDetails: "localPortDetails",
            Protocol: "protocol",
            LocalIpDetails: "localIpDetails",
            LocalNetworkInterface: "localNetworkInterface",
            RemoteIpDetails: "remoteIpDetails",
            RemotePortDetails: "remotePortDetails",
          }),
        ),
      ).annotate({ identifier: "NetworkConnectionAction" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LocalPortDetails: S.optional(__S(205)),
          LocalIpDetails: S.optional(__S(206)),
          RemoteIpDetails: S.optional(__S(200)),
        }).pipe(
          S.encodeKeys({
            LocalPortDetails: "localPortDetails",
            LocalIpDetails: "localIpDetails",
            RemoteIpDetails: "remoteIpDetails",
          }),
        ),
      ).annotate({ identifier: "PortProbeDetail" });
    case 1:
      return S.Array(__S(208));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Blocked: S.optional(S.Boolean),
          PortProbeDetails: S.optional(__S(209)),
        }).pipe(S.encodeKeys({ Blocked: "blocked", PortProbeDetails: "portProbeDetails" })),
      ).annotate({ identifier: "PortProbeAction" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RequestUri: S.optional(S.String),
          Verb: S.optional(S.String),
          Resource: S.optional(S.String),
          Subresource: S.optional(S.String),
          Namespace: S.optional(S.String),
          ResourceName: S.optional(S.String),
          SourceIps: S.optional(__S(4)),
          UserAgent: S.optional(S.String),
          RemoteIpDetails: S.optional(__S(200)),
          StatusCode: S.optional(S.Number),
          Parameters: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            RequestUri: "requestUri",
            Verb: "verb",
            Resource: "resource",
            Subresource: "subresource",
            Namespace: "namespace",
            ResourceName: "resourceName",
            SourceIps: "sourceIPs",
            UserAgent: "userAgent",
            RemoteIpDetails: "remoteIpDetails",
            StatusCode: "statusCode",
            Parameters: "parameters",
          }),
        ),
      ).annotate({ identifier: "KubernetesApiCallAction" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Verb: S.optional(S.String),
          Resource: S.optional(S.String),
          Namespace: S.optional(S.String),
          Allowed: S.optional(S.Boolean),
        }).pipe(
          S.encodeKeys({
            Verb: "verb",
            Resource: "resource",
            Namespace: "namespace",
            Allowed: "allowed",
          }),
        ),
      ).annotate({
        identifier: "KubernetesPermissionCheckedDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Kind: S.optional(S.String),
          Name: S.optional(S.String),
          Uid: S.optional(S.String),
          RoleRefName: S.optional(S.String),
          RoleRefKind: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Kind: "kind",
            Name: "name",
            Uid: "uid",
            RoleRefName: "roleRefName",
            RoleRefKind: "roleRefKind",
          }),
        ),
      ).annotate({
        identifier: "KubernetesRoleBindingDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Kind: S.optional(S.String),
          Name: S.optional(S.String),
          Uid: S.optional(S.String),
        }).pipe(S.encodeKeys({ Kind: "kind", Name: "name", Uid: "uid" })),
      ).annotate({ identifier: "KubernetesRoleDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          User: S.optional(S.String),
          Application: S.optional(S.String),
          FailedLoginAttempts: S.optional(S.Number),
          SuccessfulLoginAttempts: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            User: "user",
            Application: "application",
            FailedLoginAttempts: "failedLoginAttempts",
            SuccessfulLoginAttempts: "successfulLoginAttempts",
          }),
        ),
      ).annotate({ identifier: "LoginAttribute" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(215));
    case 1:
      return S.suspend(() =>
        S.Struct({
          RemoteIpDetails: S.optional(__S(200)),
          LoginAttributes: S.optional(__S(216)),
        }).pipe(S.encodeKeys({ RemoteIpDetails: "remoteIpDetails" })),
      ).annotate({ identifier: "RdsLoginAttemptAction" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ActionType: S.optional(S.String),
          AwsApiCallAction: S.optional(__S(203)),
          DnsRequestAction: S.optional(__S(204)),
          NetworkConnectionAction: S.optional(__S(207)),
          PortProbeAction: S.optional(__S(210)),
          KubernetesApiCallAction: S.optional(__S(211)),
          KubernetesPermissionCheckedDetails: S.optional(__S(212)),
          KubernetesRoleBindingDetails: S.optional(__S(213)),
          KubernetesRoleDetails: S.optional(__S(214)),
          RdsLoginAttemptAction: S.optional(__S(217)),
        }).pipe(
          S.encodeKeys({
            ActionType: "actionType",
            AwsApiCallAction: "awsApiCallAction",
            DnsRequestAction: "dnsRequestAction",
            NetworkConnectionAction: "networkConnectionAction",
            PortProbeAction: "portProbeAction",
            KubernetesApiCallAction: "kubernetesApiCallAction",
            KubernetesPermissionCheckedDetails: "kubernetesPermissionCheckedDetails",
            KubernetesRoleBindingDetails: "kubernetesRoleBindingDetails",
            KubernetesRoleDetails: "kubernetesRoleDetails",
            RdsLoginAttemptAction: "rdsLoginAttemptAction",
          }),
        ),
      ).annotate({ identifier: "Action" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ThreatListName: S.optional(S.String),
          ThreatNames: S.optional(__S(4)),
          ThreatFileSha256: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            ThreatListName: "threatListName",
            ThreatNames: "threatNames",
            ThreatFileSha256: "threatFileSha256",
          }),
        ),
      ).annotate({ identifier: "ThreatIntelligenceDetail" });
    case 4:
      return S.Array(__S(219));
    case 5:
      return S.suspend(() =>
        S.Struct({ ThreatIntelligenceDetails: S.optional(__S(220)) }).pipe(
          S.encodeKeys({ ThreatIntelligenceDetails: "threatIntelligenceDetails" }),
        ),
      ).annotate({ identifier: "Evidence" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Value: S.optional(S.String), Type: S.optional(S.String) }).pipe(
          S.encodeKeys({ Value: "value", Type: "type" }),
        ),
      ).annotate({ identifier: "ServiceAdditionalInfo" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TotalGb: S.optional(S.Number),
          Files: S.optional(S.Number),
          Volumes: S.optional(S.Number),
        }).pipe(S.encodeKeys({ TotalGb: "totalGb", Files: "files", Volumes: "volumes" })),
      ).annotate({ identifier: "ScannedItemCount" });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Files: S.optional(S.Number) }).pipe(S.encodeKeys({ Files: "files" })),
      ).annotate({ identifier: "ThreatsDetectedItemCount" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Severity: S.optional(S.String),
          ThreatName: S.optional(S.String),
          Count: S.optional(S.Number),
        }).pipe(S.encodeKeys({ Severity: "severity", ThreatName: "threatName", Count: "count" })),
      ).annotate({
        identifier: "HighestSeverityThreatDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FilePath: S.optional(S.String),
          VolumeArn: S.optional(S.String),
          Hash: S.optional(S.String),
          FileName: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            FilePath: "filePath",
            VolumeArn: "volumeArn",
            Hash: "hash",
            FileName: "fileName",
          }),
        ),
      ).annotate({ identifier: "ScanFilePath" });
    case 3:
      return S.Array(__S(226));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Severity: S.optional(S.String),
          ItemCount: S.optional(S.Number),
          FilePaths: S.optional(__S(227)),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Severity: "severity",
            ItemCount: "itemCount",
            FilePaths: "filePaths",
          }),
        ),
      ).annotate({ identifier: "ScanThreatName" });
    case 5:
      return S.Array(__S(228));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ItemCount: S.optional(S.Number),
          UniqueThreatNameCount: S.optional(S.Number),
          Shortened: S.optional(S.Boolean),
          ThreatNames: S.optional(__S(229)),
        }).pipe(
          S.encodeKeys({
            ItemCount: "itemCount",
            UniqueThreatNameCount: "uniqueThreatNameCount",
            Shortened: "shortened",
            ThreatNames: "threatNames",
          }),
        ),
      ).annotate({ identifier: "ThreatDetectedByName" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ScannedItemCount: S.optional(__S(223)),
          ThreatsDetectedItemCount: S.optional(__S(224)),
          HighestSeverityThreatDetails: S.optional(__S(225)),
          ThreatDetectedByName: S.optional(__S(230)),
        }).pipe(
          S.encodeKeys({
            ScannedItemCount: "scannedItemCount",
            ThreatsDetectedItemCount: "threatsDetectedItemCount",
            HighestSeverityThreatDetails: "highestSeverityThreatDetails",
            ThreatDetectedByName: "threatDetectedByName",
          }),
        ),
      ).annotate({ identifier: "ScanDetections" });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ScanId: S.optional(S.String),
          ScanStartedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ScanCompletedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TriggerFindingId: S.optional(S.String),
          Sources: S.optional(__S(4)),
          ScanDetections: S.optional(__S(231)),
          ScanType: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            ScanId: "scanId",
            ScanStartedAt: "scanStartedAt",
            ScanCompletedAt: "scanCompletedAt",
            TriggerFindingId: "triggerFindingId",
            Sources: "sources",
            ScanDetections: "scanDetections",
            ScanType: "scanType",
          }),
        ),
      ).annotate({ identifier: "EbsVolumeScanDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          NamespacePid: S.optional(S.Number),
          UserId: S.optional(S.Number),
          Name: S.optional(S.String),
          Pid: S.optional(S.Number),
          Uuid: S.optional(S.String),
          ExecutablePath: S.optional(S.String),
          Euid: S.optional(S.Number),
          ParentUuid: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            StartTime: "startTime",
            NamespacePid: "namespacePid",
            UserId: "userId",
            Name: "name",
            Pid: "pid",
            Uuid: "uuid",
            ExecutablePath: "executablePath",
            Euid: "euid",
            ParentUuid: "parentUuid",
          }),
        ),
      ).annotate({ identifier: "LineageObject" });
    case 2:
      return S.Array(__S(233));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          ExecutablePath: S.optional(S.String),
          ExecutableSha256: S.optional(S.String),
          NamespacePid: S.optional(S.Number),
          Pwd: S.optional(S.String),
          Pid: S.optional(S.Number),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Uuid: S.optional(S.String),
          ParentUuid: S.optional(S.String),
          User: S.optional(S.String),
          UserId: S.optional(S.Number),
          Euid: S.optional(S.Number),
          Lineage: S.optional(__S(234)),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            ExecutablePath: "executablePath",
            ExecutableSha256: "executableSha256",
            NamespacePid: "namespacePid",
            Pwd: "pwd",
            Pid: "pid",
            StartTime: "startTime",
            Uuid: "uuid",
            ParentUuid: "parentUuid",
            User: "user",
            UserId: "userId",
            Euid: "euid",
            Lineage: "lineage",
          }),
        ),
      ).annotate({ identifier: "ProcessDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ModifyingProcess: S.optional(__S(235)),
          ModifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ScriptPath: S.optional(S.String),
          LibraryPath: S.optional(S.String),
          LdPreloadValue: S.optional(S.String),
          SocketPath: S.optional(S.String),
          RuncBinaryPath: S.optional(S.String),
          ReleaseAgentPath: S.optional(S.String),
          MountSource: S.optional(S.String),
          MountTarget: S.optional(S.String),
          FileSystemType: S.optional(S.String),
          Flags: S.optional(__S(4)),
          ModuleName: S.optional(S.String),
          ModuleFilePath: S.optional(S.String),
          ModuleSha256: S.optional(S.String),
          ShellHistoryFilePath: S.optional(S.String),
          TargetProcess: S.optional(__S(235)),
          AddressFamily: S.optional(S.String),
          IanaProtocolNumber: S.optional(S.Number),
          MemoryRegions: S.optional(__S(4)),
          ToolName: S.optional(S.String),
          ToolCategory: S.optional(S.String),
          ServiceName: S.optional(S.String),
          CommandLineExample: S.optional(S.String),
          ThreatFilePath: S.optional(S.String),
          FileOperation: S.optional(S.String),
          FilePath: S.optional(S.String),
          RelatedFilePaths: S.optional(__S(4)),
        }).pipe(
          S.encodeKeys({
            ModifyingProcess: "modifyingProcess",
            ModifiedAt: "modifiedAt",
            ScriptPath: "scriptPath",
            LibraryPath: "libraryPath",
            LdPreloadValue: "ldPreloadValue",
            SocketPath: "socketPath",
            RuncBinaryPath: "runcBinaryPath",
            ReleaseAgentPath: "releaseAgentPath",
            MountSource: "mountSource",
            MountTarget: "mountTarget",
            FileSystemType: "fileSystemType",
            Flags: "flags",
            ModuleName: "moduleName",
            ModuleFilePath: "moduleFilePath",
            ModuleSha256: "moduleSha256",
            ShellHistoryFilePath: "shellHistoryFilePath",
            TargetProcess: "targetProcess",
            AddressFamily: "addressFamily",
            IanaProtocolNumber: "ianaProtocolNumber",
            MemoryRegions: "memoryRegions",
            ToolName: "toolName",
            ToolCategory: "toolCategory",
            ServiceName: "serviceName",
            CommandLineExample: "commandLineExample",
            ThreatFilePath: "threatFilePath",
            FileOperation: "fileOperation",
            FilePath: "filePath",
            RelatedFilePaths: "relatedFilePaths",
          }),
        ),
      ).annotate({ identifier: "RuntimeContext" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Process: S.optional(__S(235)), Context: S.optional(__S(236)) }).pipe(
          S.encodeKeys({ Process: "process", Context: "context" }),
        ),
      ).annotate({ identifier: "RuntimeDetails" });
    case 6:
      return S.Array(S.Number);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Text: S.optional(__S(4)),
          Number: S.optional(__S(238)),
        }).pipe(S.encodeKeys({ Text: "text", Number: "number" })),
      ).annotate({ identifier: "Observations" });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ProfileType: S.optional(S.String),
          ProfileSubtype: S.optional(S.String),
          Observations: S.optional(__S(239)),
        }).pipe(
          S.encodeKeys({
            ProfileType: "profileType",
            ProfileSubtype: "profileSubtype",
            Observations: "observations",
          }),
        ),
      ).annotate({ identifier: "AnomalyObject" });
    case 1:
      return S.Array(__S(240));
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(241).pipe(S.optional));
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(242).pipe(S.optional));
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(240).pipe(S.optional));
    case 5:
      return S.Record(S.String, /*@__PURE__*/ __S(244).pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({ Behavior: S.optional(__S(245)) }).pipe(S.encodeKeys({ Behavior: "behavior" })),
      ).annotate({ identifier: "AnomalyUnusual" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Profiles: S.optional(__S(243)),
          Unusual: S.optional(__S(246)),
        }).pipe(S.encodeKeys({ Profiles: "profiles", Unusual: "unusual" })),
      ).annotate({ identifier: "Anomaly" });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Uid: S.optional(S.String), Name: S.optional(S.String) }).pipe(
          S.encodeKeys({ Uid: "uid", Name: "account" }),
        ),
      ).annotate({ identifier: "Account" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Uid: S.optional(S.String),
          Type: S.optional(S.String),
          CredentialUid: S.optional(S.String),
          Account: S.optional(__S(248)),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Uid: "uid",
            Type: "type",
            CredentialUid: "credentialUid",
            Account: "account",
          }),
        ),
      ).annotate({ identifier: "User" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Uid: S.optional(S.String),
          MfaStatus: S.optional(S.String),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Issuer: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Uid: "uid",
            MfaStatus: "mfaStatus",
            CreatedTime: "createdTime",
            Issuer: "issuer",
          }),
        ),
      ).annotate({ identifier: "Session" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Path: S.optional(S.String),
          Sha256: S.optional(S.String),
        }).pipe(S.encodeKeys({ Name: "name", Path: "path", Sha256: "sha256" })),
      ).annotate({ identifier: "ActorProcess" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          User: S.optional(__S(249)),
          Session: S.optional(__S(250)),
          Process: S.optional(__S(251)),
        }).pipe(S.encodeKeys({ Id: "id", User: "user", Session: "session", Process: "process" })),
      ).annotate({ identifier: "Actor" });
    case 5:
      return S.Array(__S(252));
    case 6:
      return S.suspend(() =>
        S.Struct({
          PublicAclAccess: S.optional(S.String),
          PublicPolicyAccess: S.optional(S.String),
          PublicAclIgnoreBehavior: S.optional(S.String),
          PublicBucketRestrictBehavior: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            PublicAclAccess: "publicAclAccess",
            PublicPolicyAccess: "publicPolicyAccess",
            PublicAclIgnoreBehavior: "publicAclIgnoreBehavior",
            PublicBucketRestrictBehavior: "publicBucketRestrictBehavior",
          }),
        ),
      ).annotate({
        identifier: "PublicAccessConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          OwnerId: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EncryptionType: S.optional(S.String),
          EncryptionKeyArn: S.optional(S.String),
          EffectivePermission: S.optional(S.String),
          PublicReadAccess: S.optional(S.String),
          PublicWriteAccess: S.optional(S.String),
          AccountPublicAccess: S.optional(__S(254)),
          BucketPublicAccess: S.optional(__S(254)),
          S3ObjectUids: S.optional(__S(4)),
        }).pipe(
          S.encodeKeys({
            OwnerId: "ownerId",
            CreatedAt: "createdAt",
            EncryptionType: "encryptionType",
            EncryptionKeyArn: "encryptionKeyArn",
            EffectivePermission: "effectivePermission",
            PublicReadAccess: "publicReadAccess",
            PublicWriteAccess: "publicWriteAccess",
            AccountPublicAccess: "accountPublicAccess",
            BucketPublicAccess: "bucketPublicAccess",
            S3ObjectUids: "s3ObjectUids",
          }),
        ),
      ).annotate({ identifier: "S3Bucket" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZone: S.optional(S.String),
          ImageDescription: S.optional(S.String),
          InstanceState: S.optional(S.String),
          IamInstanceProfile: S.optional(__S(152)),
          InstanceType: S.optional(S.String),
          OutpostArn: S.optional(S.String),
          Platform: S.optional(S.String),
          ProductCodes: S.optional(__S(160)),
          Ec2NetworkInterfaceUids: S.optional(__S(4)),
        }).pipe(
          S.encodeKeys({
            AvailabilityZone: "availabilityZone",
            ImageDescription: "imageDescription",
            InstanceState: "instanceState",
            InstanceType: "instanceType",
            OutpostArn: "outpostArn",
            Platform: "platform",
            ProductCodes: "productCodes",
            Ec2NetworkInterfaceUids: "ec2NetworkInterfaceUids",
          }),
        ),
      ).annotate({ identifier: "Ec2Instance" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PrincipalId: S.optional(S.String),
          UserName: S.optional(S.String),
          UserType: S.optional(S.String),
        }).pipe(
          S.encodeKeys({ PrincipalId: "principalId", UserName: "userName", UserType: "userType" }),
        ),
      ).annotate({ identifier: "AccessKey" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Ipv6Addresses: S.optional(__S(4)),
          PrivateIpAddresses: S.optional(__S(154)),
          PublicIp: S.optional(S.String),
          SecurityGroups: S.optional(__S(156)),
          SubNetId: S.optional(S.String),
          VpcId: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Ipv6Addresses: "ipv6Addresses",
            PrivateIpAddresses: "privateIpAddresses",
            PublicIp: "publicIp",
            SecurityGroups: "securityGroups",
            SubNetId: "subNetId",
            VpcId: "vpcId",
          }),
        ),
      ).annotate({ identifier: "Ec2NetworkInterface" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ETag: S.optional(S.String),
          Key: S.optional(S.String),
          VersionId: S.optional(S.String),
        }).pipe(S.encodeKeys({ ETag: "eTag", Key: "key", VersionId: "versionId" })),
      ).annotate({ identifier: "S3Object" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(S.String),
          VpcId: S.optional(S.String),
          Ec2InstanceUids: S.optional(__S(4)),
        }).pipe(
          S.encodeKeys({
            Arn: "arn",
            CreatedAt: "createdAt",
            Status: "status",
            VpcId: "vpcId",
            Ec2InstanceUids: "ec2InstanceUids",
          }),
        ),
      ).annotate({ identifier: "EksCluster" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ContainerUids: S.optional(__S(4)),
          Namespace: S.optional(S.String),
          KubernetesResourcesTypes: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            ContainerUids: "containerUids",
            Namespace: "namespace",
            KubernetesResourcesTypes: "type",
          }),
        ),
      ).annotate({ identifier: "KubernetesWorkload" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Image: S.optional(S.String), ImageUid: S.optional(S.String) }).pipe(
          S.encodeKeys({ Image: "image", ImageUid: "imageUid" }),
        ),
      ).annotate({ identifier: "ContainerFindingResource" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          Ec2InstanceUids: S.optional(__S(4)),
        }).pipe(S.encodeKeys({ Status: "status", Ec2InstanceUids: "ec2InstanceUids" })),
      ).annotate({ identifier: "EcsCluster" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TaskDefinitionArn: S.optional(S.String),
          LaunchType: S.optional(S.String),
          ContainerUids: S.optional(__S(4)),
        }).pipe(
          S.encodeKeys({
            CreatedAt: "createdAt",
            TaskDefinitionArn: "taskDefinitionArn",
            LaunchType: "launchType",
            ContainerUids: "containerUids",
          }),
        ),
      ).annotate({ identifier: "EcsTask" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Ec2InstanceUids: S.optional(__S(4)) }).pipe(
          S.encodeKeys({ Ec2InstanceUids: "ec2InstanceUids" }),
        ),
      ).annotate({ identifier: "IamInstanceProfileV2" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Ec2InstanceUids: S.optional(__S(4)) }).pipe(
          S.encodeKeys({ Ec2InstanceUids: "ec2InstanceUids" }),
        ),
      ).annotate({
        identifier: "AutoscalingAutoScalingGroup",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Ec2InstanceUids: S.optional(__S(4)),
          Version: S.optional(S.String),
        }).pipe(S.encodeKeys({ Ec2InstanceUids: "ec2InstanceUids", Version: "version" })),
      ).annotate({ identifier: "Ec2LaunchTemplate" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Version: S.optional(S.String),
          GuardrailAction: S.optional(S.String),
          GuardrailSource: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Version: "version",
            GuardrailAction: "guardrailAction",
            GuardrailSource: "guardrailSource",
          }),
        ),
      ).annotate({ identifier: "BedrockGuardrailResource" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          S3Bucket: S.optional(__S(255)),
          Ec2Instance: S.optional(__S(256)),
          AccessKey: S.optional(__S(257)),
          Ec2NetworkInterface: S.optional(__S(258)),
          S3Object: S.optional(__S(259)),
          EksCluster: S.optional(__S(260)),
          KubernetesWorkload: S.optional(__S(261)),
          Container: S.optional(__S(262)),
          EcsCluster: S.optional(__S(263)),
          EcsTask: S.optional(__S(264)),
          IamInstanceProfile: S.optional(__S(265)),
          AutoscalingAutoScalingGroup: S.optional(__S(266)),
          Ec2LaunchTemplate: S.optional(__S(267)),
          Ec2Vpc: S.optional(__S(265)),
          Ec2Image: S.optional(__S(265)),
          CloudformationStack: S.optional(__S(265)),
          BedrockGuardrail: S.optional(__S(268)),
        }).pipe(
          S.encodeKeys({
            S3Bucket: "s3Bucket",
            Ec2Instance: "ec2Instance",
            AccessKey: "accessKey",
            Ec2NetworkInterface: "ec2NetworkInterface",
            S3Object: "s3Object",
            EksCluster: "eksCluster",
            KubernetesWorkload: "kubernetesWorkload",
            Container: "container",
            EcsCluster: "ecsCluster",
            EcsTask: "ecsTask",
            IamInstanceProfile: "iamInstanceProfile",
            AutoscalingAutoScalingGroup: "autoscalingAutoScalingGroup",
            Ec2LaunchTemplate: "ec2LaunchTemplate",
            Ec2Vpc: "ec2Vpc",
            Ec2Image: "ec2Image",
            CloudformationStack: "cloudformationStack",
            BedrockGuardrail: "bedrockGuardrail",
          }),
        ),
      ).annotate({ identifier: "ResourceData" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Uid: S.optional(S.String),
          Name: S.optional(S.String),
          AccountId: S.optional(S.String),
          ResourceType: S.optional(S.String),
          Region: S.optional(S.String),
          Service: S.optional(S.String),
          CloudPartition: S.optional(S.String),
          Tags: S.optional(__S(140)),
          Data: S.optional(__S(269)),
        }).pipe(
          S.encodeKeys({
            Uid: "uid",
            Name: "name",
            AccountId: "accountId",
            ResourceType: "resourceType",
            Region: "region",
            Service: "service",
            CloudPartition: "cloudPartition",
            Tags: "tags",
            Data: "data",
          }),
        ),
      ).annotate({ identifier: "ResourceV2" });
    case 7:
      return S.Array(__S(270));
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          City: S.optional(S.String),
          Country: S.optional(S.String),
          Latitude: S.optional(S.Number),
          Longitude: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({ City: "city", Country: "country", Latitude: "lat", Longitude: "lon" }),
        ),
      ).annotate({ identifier: "NetworkGeoLocation" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Number: S.optional(S.Number) }).pipe(
          S.encodeKeys({ Name: "name", Number: "number" }),
        ),
      ).annotate({ identifier: "AutonomousSystem" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Direction: S.optional(S.String) }).pipe(
          S.encodeKeys({ Direction: "direction" }),
        ),
      ).annotate({ identifier: "NetworkConnection" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Ip: S.optional(S.String),
          Domain: S.optional(S.String),
          Port: S.optional(S.Number),
          Location: S.optional(__S(272)),
          AutonomousSystem: S.optional(__S(273)),
          Connection: S.optional(__S(274)),
        }).pipe(
          S.encodeKeys({
            Id: "id",
            Ip: "ip",
            Domain: "domain",
            Port: "port",
            Location: "location",
            AutonomousSystem: "autonomousSystem",
            Connection: "connection",
          }),
        ),
      ).annotate({ identifier: "NetworkEndpoint" });
    case 4:
      return S.Array(__S(275));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(S.String),
          Values: S.optional(__S(4)),
          Title: S.optional(S.String),
        }).pipe(S.encodeKeys({ Key: "key", Values: "values", Title: "title" })),
      ).annotate({ identifier: "Indicator" });
    case 6:
      return S.Array(__S(277));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Operation: S.optional(S.String),
          Service: S.optional(S.String),
          Error: S.optional(S.String),
          UserAgent: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Operation: "operation",
            Service: "service",
            Error: "error",
            UserAgent: "userAgent",
          }),
        ),
      ).annotate({ identifier: "ApiCall" });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(S.String), Api: S.optional(__S(279)) }).pipe(
          S.encodeKeys({ Type: "type", Api: "api" }),
        ),
      ).annotate({ identifier: "Activity" });
    case 1:
      return S.Array(__S(280));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Uid: S.optional(S.String),
          Type: S.optional(S.String),
          Description: S.optional(S.String),
          Name: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FirstSeenAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastSeenAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Severity: S.optional(S.Number),
          Count: S.optional(S.Number),
          ResourceUids: S.optional(__S(4)),
          ActorIds: S.optional(__S(4)),
          EndpointIds: S.optional(__S(4)),
          SignalIndicators: S.optional(__S(278)),
          Activities: S.optional(__S(281)),
        }).pipe(
          S.encodeKeys({
            Uid: "uid",
            Type: "type",
            Description: "description",
            Name: "name",
            CreatedAt: "createdAt",
            UpdatedAt: "updatedAt",
            FirstSeenAt: "firstSeenAt",
            LastSeenAt: "lastSeenAt",
            Severity: "severity",
            Count: "count",
            ResourceUids: "resourceUids",
            ActorIds: "actorIds",
            EndpointIds: "endpointIds",
            SignalIndicators: "signalIndicators",
            Activities: "activities",
          }),
        ),
      ).annotate({ identifier: "Signal" });
    case 3:
      return S.Array(__S(282));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Uid: S.optional(S.String),
          Description: S.optional(S.String),
          Actors: S.optional(__S(253)),
          Resources: S.optional(__S(271)),
          Endpoints: S.optional(__S(276)),
          Signals: S.optional(__S(283)),
          SequenceIndicators: S.optional(__S(278)),
          AdditionalSequenceTypes: S.optional(__S(4)),
        }).pipe(
          S.encodeKeys({
            Uid: "uid",
            Description: "description",
            Actors: "actors",
            Resources: "resources",
            Endpoints: "endpoints",
            Signals: "signals",
            SequenceIndicators: "sequenceIndicators",
            AdditionalSequenceTypes: "additionalSequenceTypes",
          }),
        ),
      ).annotate({ identifier: "Sequence" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Anomaly: S.optional(__S(247)), Sequence: S.optional(__S(284)) }).pipe(
          S.encodeKeys({ Anomaly: "anomaly", Sequence: "sequence" }),
        ),
      ).annotate({ identifier: "Detection" });
    case 6:
      return S.suspend(() =>
        S.Struct({ NestedItemPath: S.optional(S.String), Hash: S.optional(S.String) }).pipe(
          S.encodeKeys({ NestedItemPath: "nestedItemPath", Hash: "hash" }),
        ),
      ).annotate({ identifier: "ItemPath" });
    case 7:
      return S.Array(__S(286));
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ VersionId: S.optional(S.String), DeviceName: S.optional(S.String) }).pipe(
          S.encodeKeys({ VersionId: "versionId", DeviceName: "deviceName" }),
        ),
      ).annotate({ identifier: "AdditionalInfo" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String),
          ItemPath: S.optional(S.String),
          Hash: S.optional(S.String),
          AdditionalInfo: S.optional(__S(288)),
        }).pipe(
          S.encodeKeys({
            ResourceArn: "resourceArn",
            ItemPath: "itemPath",
            Hash: "hash",
            AdditionalInfo: "additionalInfo",
          }),
        ),
      ).annotate({ identifier: "ItemDetails" });
    case 2:
      return S.Array(__S(289));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Source: S.optional(S.String),
          ItemPaths: S.optional(__S(287)),
          Count: S.optional(S.Number),
          Hash: S.optional(S.String),
          ItemDetails: S.optional(__S(290)),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Source: "source",
            ItemPaths: "itemPaths",
            Count: "count",
            Hash: "hash",
            ItemDetails: "itemDetails",
          }),
        ),
      ).annotate({ identifier: "Threat" });
    case 4:
      return S.Array(__S(291));
    case 5:
      return S.suspend(() =>
        S.Struct({ BaselineResourceArn: S.optional(S.String) }).pipe(
          S.encodeKeys({ BaselineResourceArn: "baselineResourceArn" }),
        ),
      ).annotate({ identifier: "IncrementalScanDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TriggerType: S.optional(S.String),
          IncrementalScanDetails: S.optional(__S(293)),
        }).pipe(
          S.encodeKeys({
            TriggerType: "triggerType",
            IncrementalScanDetails: "incrementalScanDetails",
          }),
        ),
      ).annotate({
        identifier: "MalwareProtectionFindingsScanConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Threats: S.optional(__S(292)),
          ScanId: S.optional(S.String),
          ScanType: S.optional(S.String),
          ScanCategory: S.optional(S.String),
          ScanConfiguration: S.optional(__S(294)),
          UniqueThreatCount: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            Threats: "threats",
            ScanId: "scanId",
            ScanType: "scanType",
            ScanCategory: "scanCategory",
            ScanConfiguration: "scanConfiguration",
            UniqueThreatCount: "uniqueThreatCount",
          }),
        ),
      ).annotate({ identifier: "MalwareScanDetails" });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(__S(218)),
          Evidence: S.optional(__S(221)),
          Archived: S.optional(S.Boolean),
          Count: S.optional(S.Number),
          DetectorId: S.optional(S.String),
          EventFirstSeen: S.optional(S.String),
          EventLastSeen: S.optional(S.String),
          ResourceRole: S.optional(S.String),
          ServiceName: S.optional(S.String),
          UserFeedback: S.optional(S.String),
          AdditionalInfo: S.optional(__S(222)),
          FeatureName: S.optional(S.String),
          EbsVolumeScanDetails: S.optional(__S(232)),
          RuntimeDetails: S.optional(__S(237)),
          Detection: S.optional(__S(285)),
          MalwareScanDetails: S.optional(__S(295)),
        }).pipe(
          S.encodeKeys({
            Action: "action",
            Evidence: "evidence",
            Archived: "archived",
            Count: "count",
            DetectorId: "detectorId",
            EventFirstSeen: "eventFirstSeen",
            EventLastSeen: "eventLastSeen",
            ResourceRole: "resourceRole",
            ServiceName: "serviceName",
            UserFeedback: "userFeedback",
            AdditionalInfo: "additionalInfo",
            FeatureName: "featureName",
            EbsVolumeScanDetails: "ebsVolumeScanDetails",
            RuntimeDetails: "runtimeDetails",
            Detection: "detection",
            MalwareScanDetails: "malwareScanDetails",
          }),
        ),
      ).annotate({ identifier: "Service" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          Arn: S.optional(S.String),
          Confidence: S.optional(S.Number),
          CreatedAt: S.optional(S.String),
          Description: S.optional(S.String),
          Id: S.optional(S.String),
          Partition: S.optional(S.String),
          Region: S.optional(S.String),
          Resource: S.optional(__S(194)),
          SchemaVersion: S.optional(S.String),
          Service: S.optional(__S(296)),
          Severity: S.optional(S.Number),
          Title: S.optional(S.String),
          Type: S.optional(S.String),
          UpdatedAt: S.optional(S.String),
          AssociatedAttackSequenceArn: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            AccountId: "accountId",
            Arn: "arn",
            Confidence: "confidence",
            CreatedAt: "createdAt",
            Description: "description",
            Id: "id",
            Partition: "partition",
            Region: "region",
            Resource: "resource",
            SchemaVersion: "schemaVersion",
            Service: "service",
            Severity: "severity",
            Title: "title",
            Type: "type",
            UpdatedAt: "updatedAt",
            AssociatedAttackSequenceArn: "associatedAttackSequenceArn",
          }),
        ),
      ).annotate({ identifier: "Finding" });
    case 2:
      return S.Array(__S(297));
    case 3:
      return S.suspend(() =>
        S.Struct({ Findings: S.optional(__S(298)) }).pipe(S.encodeKeys({ Findings: "findings" })),
      ).annotate({ identifier: "GetFindingsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          FindingStatisticTypes: S.optional(__S(111)),
          FindingCriteria: S.optional(__S(29)),
          GroupBy: S.optional(S.String),
          OrderBy: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        })
          .pipe(
            S.encodeKeys({
              FindingStatisticTypes: "findingStatisticTypes",
              FindingCriteria: "findingCriteria",
              GroupBy: "groupBy",
              OrderBy: "orderBy",
              MaxResults: "maxResults",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/findings/statistics" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "GetFindingsStatisticsRequest",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          LastGeneratedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TotalFindings: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            AccountId: "accountId",
            LastGeneratedAt: "lastGeneratedAt",
            TotalFindings: "totalFindings",
          }),
        ),
      ).annotate({ identifier: "AccountStatistics" });
    case 7:
      return S.Array(__S(302));
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Date: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastGeneratedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Severity: S.optional(S.Number),
          TotalFindings: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            Date: "date",
            LastGeneratedAt: "lastGeneratedAt",
            Severity: "severity",
            TotalFindings: "totalFindings",
          }),
        ),
      ).annotate({ identifier: "DateStatistics" });
    case 1:
      return S.Array(__S(304));
    case 2:
      return S.suspend(() =>
        S.Struct({
          FindingType: S.optional(S.String),
          LastGeneratedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TotalFindings: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            FindingType: "findingType",
            LastGeneratedAt: "lastGeneratedAt",
            TotalFindings: "totalFindings",
          }),
        ),
      ).annotate({ identifier: "FindingTypeStatistics" });
    case 3:
      return S.Array(__S(306));
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          LastGeneratedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ResourceId: S.optional(S.String),
          ResourceType: S.optional(S.String),
          TotalFindings: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            AccountId: "accountId",
            LastGeneratedAt: "lastGeneratedAt",
            ResourceId: "resourceId",
            ResourceType: "resourceType",
            TotalFindings: "totalFindings",
          }),
        ),
      ).annotate({ identifier: "ResourceStatistics" });
    case 5:
      return S.Array(__S(308));
    case 6:
      return S.suspend(() =>
        S.Struct({
          LastGeneratedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Severity: S.optional(S.Number),
          TotalFindings: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            LastGeneratedAt: "lastGeneratedAt",
            Severity: "severity",
            TotalFindings: "totalFindings",
          }),
        ),
      ).annotate({ identifier: "SeverityStatistics" });
    case 7:
      return S.Array(__S(310));
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CountBySeverity: S.optional(__S(301)),
          GroupedByAccount: S.optional(__S(303)),
          GroupedByDate: S.optional(__S(305)),
          GroupedByFindingType: S.optional(__S(307)),
          GroupedByResource: S.optional(__S(309)),
          GroupedBySeverity: S.optional(__S(311)),
        }).pipe(
          S.encodeKeys({
            CountBySeverity: "countBySeverity",
            GroupedByAccount: "groupedByAccount",
            GroupedByDate: "groupedByDate",
            GroupedByFindingType: "groupedByFindingType",
            GroupedByResource: "groupedByResource",
            GroupedBySeverity: "groupedBySeverity",
          }),
        ),
      ).annotate({ identifier: "FindingStatistics" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          FindingStatistics: S.optional(__S(312)),
          NextToken: S.optional(S.String),
        }).pipe(S.encodeKeys({ FindingStatistics: "findingStatistics", NextToken: "nextToken" })),
      ).annotate({
        identifier: "GetFindingsStatisticsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          InvestigationId: S.String.pipe(T.HttpLabel("InvestigationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/detector/{DetectorId}/investigation/{InvestigationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetInvestigationRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Feature: S.optional(S.String) }).pipe(
          S.encodeKeys({ Name: "name", Feature: "feature" }),
        ),
      ).annotate({ identifier: "Product" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Version: S.optional(S.String), Product: S.optional(__S(315)) }).pipe(
          S.encodeKeys({ Version: "version", Product: "product" }),
        ),
      ).annotate({ identifier: "InvestigationMetadata" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Provider: S.optional(S.String),
          Region: S.optional(S.String),
          Account: S.optional(S.String),
        }).pipe(S.encodeKeys({ Provider: "provider", Region: "region", Account: "account" })),
      ).annotate({ identifier: "CloudDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          InvestigationId: S.optional(S.String),
          Status: S.optional(S.String),
          TriggerPrompt: S.optional(S.String),
          TriggeredBy: S.optional(S.String),
          Metadata: S.optional(__S(316)),
          Cloud: S.optional(__S(317)),
          RiskLevel: S.optional(S.String),
          Risk: S.optional(S.String),
          Confidence: S.optional(S.String),
          Summary: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Error: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            InvestigationId: "investigationId",
            Status: "status",
            TriggerPrompt: "triggerPrompt",
            TriggeredBy: "triggeredBy",
            Metadata: "metadata",
            Cloud: "cloud",
            RiskLevel: "riskLevel",
            Risk: "risk",
            Confidence: "confidence",
            Summary: "summary",
            StartTime: "startTime",
            EndTime: "endTime",
            Error: "error",
          }),
        ),
      ).annotate({ identifier: "Investigation" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Investigation: S.optional(__S(318)) }).pipe(
          S.encodeKeys({ Investigation: "investigation" }),
        ),
      ).annotate({ identifier: "GetInvestigationResponse" });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/invitation/count" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetInvitationsCountRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ InvitationsCount: S.optional(S.Number) }).pipe(
          S.encodeKeys({ InvitationsCount: "invitationsCount" }),
        ),
      ).annotate({
        identifier: "GetInvitationsCountResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          IpSetId: S.optional(S.String).pipe(T.HttpLabel("IpSetId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detector/{DetectorId}/ipset/{IpSetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetIPSetRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Format: S.optional(S.String),
          Location: S.optional(S.String),
          Status: S.optional(S.String),
          Tags: S.optional(__S(6)),
          ExpectedBucketOwner: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Format: "format",
            Location: "location",
            Status: "status",
            Tags: "tags",
            ExpectedBucketOwner: "expectedBucketOwner",
          }),
        ),
      ).annotate({ identifier: "GetIPSetResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MalwareProtectionPlanId: S.optional(S.String).pipe(
            T.HttpLabel("MalwareProtectionPlanId"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/malware-protection-plan/{MalwareProtectionPlanId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMalwareProtectionPlanRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.String), Message: S.optional(S.String) }).pipe(
          S.encodeKeys({ Code: "code", Message: "message" }),
        ),
      ).annotate({
        identifier: "MalwareProtectionPlanStatusReason",
      });
    case 6:
      return S.Array(__S(325));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Role: S.optional(S.String),
          ProtectedResource: S.optional(__S(37)),
          Actions: S.optional(__S(39)),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(S.String),
          StatusReasons: S.optional(__S(326)),
          Tags: S.optional(__S(6)),
        }).pipe(
          S.encodeKeys({
            Arn: "arn",
            Role: "role",
            ProtectedResource: "protectedResource",
            Actions: "actions",
            CreatedAt: "createdAt",
            Status: "status",
            StatusReasons: "statusReasons",
            Tags: "tags",
          }),
        ),
      ).annotate({
        identifier: "GetMalwareProtectionPlanResponse",
      });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ScanId: S.optional(S.String).pipe(T.HttpLabel("ScanId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/malware-scan/{ScanId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMalwareScanRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ DeviceName: S.optional(S.String) }).pipe(
          S.encodeKeys({ DeviceName: "deviceName" }),
        ),
      ).annotate({ identifier: "EbsSnapshot" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EbsVolume: S.optional(__S(81)),
          EbsSnapshot: S.optional(__S(329)),
        }).pipe(S.encodeKeys({ EbsVolume: "ebsVolume", EbsSnapshot: "ebsSnapshot" })),
      ).annotate({ identifier: "ScannedResourceDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ScannedResourceArn: S.optional(S.String),
          ScannedResourceType: S.optional(S.String),
          ScannedResourceStatus: S.optional(S.String),
          ScanStatusReason: S.optional(S.String),
          ResourceDetails: S.optional(__S(330)),
        }).pipe(
          S.encodeKeys({
            ScannedResourceArn: "scannedResourceArn",
            ScannedResourceType: "scannedResourceType",
            ScannedResourceStatus: "scannedResourceStatus",
            ScanStatusReason: "scanStatusReason",
            ResourceDetails: "resourceDetails",
          }),
        ),
      ).annotate({ identifier: "ScannedResource" });
    case 4:
      return S.Array(__S(331));
    case 5:
      return S.suspend(() =>
        S.Struct({
          BackupVaultName: S.optional(S.String),
          ContinuousScanDetails: S.optional(__S(185)),
        }).pipe(
          S.encodeKeys({
            BackupVaultName: "backupVaultName",
            ContinuousScanDetails: "continuousScanDetails",
          }),
        ),
      ).annotate({
        identifier: "ScanConfigurationRecoveryPoint",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Role: S.optional(S.String),
          TriggerDetails: S.optional(__S(78)),
          IncrementalScanDetails: S.optional(__S(293)),
          RecoveryPoint: S.optional(__S(333)),
        }).pipe(
          S.encodeKeys({
            Role: "role",
            TriggerDetails: "triggerDetails",
            IncrementalScanDetails: "incrementalScanDetails",
            RecoveryPoint: "recoveryPoint",
          }),
        ),
      ).annotate({ identifier: "ScanConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Source: S.optional(S.String),
          Count: S.optional(S.Number),
          Hash: S.optional(S.String),
          ItemDetails: S.optional(__S(290)),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Source: "source",
            Count: "count",
            Hash: "hash",
            ItemDetails: "itemDetails",
          }),
        ),
      ).annotate({ identifier: "ScanResultThreat" });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(335));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ScanResultStatus: S.optional(S.String),
          SkippedFileCount: S.optional(S.Number),
          FailedFileCount: S.optional(S.Number),
          ThreatFoundFileCount: S.optional(S.Number),
          TotalFileCount: S.optional(S.Number),
          TotalBytes: S.optional(S.Number),
          UniqueThreatCount: S.optional(S.Number),
          Threats: S.optional(__S(336)),
        }).pipe(
          S.encodeKeys({
            ScanResultStatus: "scanResultStatus",
            SkippedFileCount: "skippedFileCount",
            FailedFileCount: "failedFileCount",
            ThreatFoundFileCount: "threatFoundFileCount",
            TotalFileCount: "totalFileCount",
            TotalBytes: "totalBytes",
            UniqueThreatCount: "uniqueThreatCount",
            Threats: "threats",
          }),
        ),
      ).annotate({
        identifier: "GetMalwareScanResultDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ScanId: S.optional(S.String),
          DetectorId: S.optional(S.String),
          AdminDetectorId: S.optional(S.String),
          ResourceArn: S.optional(S.String),
          ResourceType: S.optional(S.String),
          ScannedResourcesCount: S.optional(S.Number),
          SkippedResourcesCount: S.optional(S.Number),
          FailedResourcesCount: S.optional(S.Number),
          ScannedResources: S.optional(__S(332)),
          ScanConfiguration: S.optional(__S(334)),
          ScanCategory: S.optional(S.String),
          ScanStatus: S.optional(S.String),
          ScanStatusReason: S.optional(S.String),
          ScanType: S.optional(S.String),
          ScanStartedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ScanCompletedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ScanResultDetails: S.optional(__S(337)),
        }).pipe(
          S.encodeKeys({
            ScanId: "scanId",
            DetectorId: "detectorId",
            AdminDetectorId: "adminDetectorId",
            ResourceArn: "resourceArn",
            ResourceType: "resourceType",
            ScannedResourcesCount: "scannedResourcesCount",
            SkippedResourcesCount: "skippedResourcesCount",
            FailedResourcesCount: "failedResourcesCount",
            ScannedResources: "scannedResources",
            ScanConfiguration: "scanConfiguration",
            ScanCategory: "scanCategory",
            ScanStatus: "scanStatus",
            ScanStatusReason: "scanStatusReason",
            ScanType: "scanType",
            ScanStartedAt: "scanStartedAt",
            ScanCompletedAt: "scanCompletedAt",
            ScanResultDetails: "scanResultDetails",
          }),
        ),
      ).annotate({ identifier: "GetMalwareScanResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ DetectorId: S.String.pipe(T.HttpLabel("DetectorId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detector/{DetectorId}/malware-scan-settings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMalwareScanSettingsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ MapEquals: S.optional(__S(140)) }).pipe(
          S.encodeKeys({ MapEquals: "mapEquals" }),
        ),
      ).annotate({ identifier: "ScanCondition" });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ __S(340).pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({ Include: S.optional(__S(341)), Exclude: S.optional(__S(341)) }).pipe(
          S.encodeKeys({ Include: "include", Exclude: "exclude" }),
        ),
      ).annotate({ identifier: "ScanResourceCriteria" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ScanResourceCriteria: S.optional(__S(342)),
          EbsSnapshotPreservation: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            ScanResourceCriteria: "scanResourceCriteria",
            EbsSnapshotPreservation: "ebsSnapshotPreservation",
          }),
        ),
      ).annotate({
        identifier: "GetMalwareScanSettingsResponse",
      });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DetectorId: S.String.pipe(T.HttpLabel("DetectorId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detector/{DetectorId}/master" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMasterAccountRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Master: S.optional(__S(105)) }).pipe(S.encodeKeys({ Master: "master" })),
      ).annotate({ identifier: "GetMasterAccountResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          AccountIds: S.optional(__S(4)),
        })
          .pipe(S.encodeKeys({ AccountIds: "accountIds" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/member/detector/get" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "GetMemberDetectorsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          DataSources: S.optional(__S(128)),
          Features: S.optional(__S(132)),
        }).pipe(
          S.encodeKeys({
            AccountId: "accountId",
            DataSources: "dataSources",
            Features: "features",
          }),
        ),
      ).annotate({
        identifier: "MemberDataSourceConfiguration",
      });
    case 4:
      return S.Array(__S(347));
    case 5:
      return S.suspend(() =>
        S.Struct({
          MemberDataSourceConfigurations: S.optional(__S(348)),
          UnprocessedAccounts: S.optional(__S(46)),
        }).pipe(
          S.encodeKeys({
            MemberDataSourceConfigurations: "members",
            UnprocessedAccounts: "unprocessedAccounts",
          }),
        ),
      ).annotate({
        identifier: "GetMemberDetectorsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          AccountIds: S.optional(__S(4)),
        })
          .pipe(S.encodeKeys({ AccountIds: "accountIds" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/member/get" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "GetMembersRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          DetectorId: S.optional(S.String),
          MasterId: S.optional(S.String),
          Email: S.optional(SensitiveString),
          RelationshipStatus: S.optional(S.String),
          InvitedAt: S.optional(S.String),
          UpdatedAt: S.optional(S.String),
          AdministratorId: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            AccountId: "accountId",
            DetectorId: "detectorId",
            MasterId: "masterId",
            Email: "email",
            RelationshipStatus: "relationshipStatus",
            InvitedAt: "invitedAt",
            UpdatedAt: "updatedAt",
            AdministratorId: "administratorId",
          }),
        ),
      ).annotate({ identifier: "Member" });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(351));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Members: S.optional(__S(352)),
          UnprocessedAccounts: S.optional(__S(46)),
        }).pipe(S.encodeKeys({ Members: "members", UnprocessedAccounts: "unprocessedAccounts" })),
      ).annotate({ identifier: "GetMembersResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/organization/statistics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetOrganizationStatisticsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          EnabledAccountsCount: S.optional(S.Number),
        }).pipe(S.encodeKeys({ Name: "name", EnabledAccountsCount: "enabledAccountsCount" })),
      ).annotate({
        identifier: "OrganizationFeatureStatisticsAdditionalConfiguration",
      });
    case 4:
      return S.Array(__S(355));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          EnabledAccountsCount: S.optional(S.Number),
          AdditionalConfiguration: S.optional(__S(356)),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            EnabledAccountsCount: "enabledAccountsCount",
            AdditionalConfiguration: "additionalConfiguration",
          }),
        ),
      ).annotate({
        identifier: "OrganizationFeatureStatistics",
      });
    case 6:
      return S.Array(__S(357));
    case 7:
      return S.suspend(() =>
        S.Struct({
          TotalAccountsCount: S.optional(S.Number),
          MemberAccountsCount: S.optional(S.Number),
          ActiveAccountsCount: S.optional(S.Number),
          EnabledAccountsCount: S.optional(S.Number),
          CountByFeature: S.optional(__S(358)),
        }).pipe(
          S.encodeKeys({
            TotalAccountsCount: "totalAccountsCount",
            MemberAccountsCount: "memberAccountsCount",
            ActiveAccountsCount: "activeAccountsCount",
            EnabledAccountsCount: "enabledAccountsCount",
            CountByFeature: "countByFeature",
          }),
        ),
      ).annotate({ identifier: "OrganizationStatistics" });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          OrganizationStatistics: S.optional(__S(359)),
        }).pipe(
          S.encodeKeys({
            UpdatedAt: "updatedAt",
            OrganizationStatistics: "organizationStatistics",
          }),
        ),
      ).annotate({ identifier: "OrganizationDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({ OrganizationDetails: S.optional(__S(360)) }).pipe(
          S.encodeKeys({ OrganizationDetails: "organizationDetails" }),
        ),
      ).annotate({
        identifier: "GetOrganizationStatisticsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DetectorId: S.String.pipe(T.HttpLabel("DetectorId")), AccountIds: __S(4) })
          .pipe(S.encodeKeys({ AccountIds: "accountIds" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/freeTrial/daysRemaining" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "GetRemainingFreeTrialDaysRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ FreeTrialDaysRemaining: S.optional(S.Number) }).pipe(
          S.encodeKeys({ FreeTrialDaysRemaining: "freeTrialDaysRemaining" }),
        ),
      ).annotate({ identifier: "DataSourceFreeTrial" });
    case 4:
      return S.suspend(() =>
        S.Struct({ AuditLogs: S.optional(__S(363)) }).pipe(
          S.encodeKeys({ AuditLogs: "auditLogs" }),
        ),
      ).annotate({
        identifier: "KubernetesDataSourceFreeTrial",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ScanEc2InstanceWithFindings: S.optional(__S(363)) }).pipe(
          S.encodeKeys({ ScanEc2InstanceWithFindings: "scanEc2InstanceWithFindings" }),
        ),
      ).annotate({
        identifier: "MalwareProtectionDataSourceFreeTrial",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CloudTrail: S.optional(__S(363)),
          DnsLogs: S.optional(__S(363)),
          FlowLogs: S.optional(__S(363)),
          S3Logs: S.optional(__S(363)),
          Kubernetes: S.optional(__S(364)),
          MalwareProtection: S.optional(__S(365)),
        }).pipe(
          S.encodeKeys({
            CloudTrail: "cloudTrail",
            DnsLogs: "dnsLogs",
            FlowLogs: "flowLogs",
            S3Logs: "s3Logs",
            Kubernetes: "kubernetes",
            MalwareProtection: "malwareProtection",
          }),
        ),
      ).annotate({ identifier: "DataSourcesFreeTrial" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          FreeTrialDaysRemaining: S.optional(S.Number),
        }).pipe(S.encodeKeys({ Name: "name", FreeTrialDaysRemaining: "freeTrialDaysRemaining" })),
      ).annotate({
        identifier: "FreeTrialFeatureConfigurationResult",
      });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(367));
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          DataSources: S.optional(__S(366)),
          Features: S.optional(__S(368)),
        }).pipe(
          S.encodeKeys({
            AccountId: "accountId",
            DataSources: "dataSources",
            Features: "features",
          }),
        ),
      ).annotate({ identifier: "AccountFreeTrialInfo" });
    case 2:
      return S.Array(__S(369));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Accounts: S.optional(__S(370)),
          UnprocessedAccounts: S.optional(__S(46)),
        }).pipe(S.encodeKeys({ Accounts: "accounts", UnprocessedAccounts: "unprocessedAccounts" })),
      ).annotate({
        identifier: "GetRemainingFreeTrialDaysResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          ThreatEntitySetId: S.optional(S.String).pipe(T.HttpLabel("ThreatEntitySetId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/detector/{DetectorId}/threatentityset/{ThreatEntitySetId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetThreatEntitySetRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Format: S.optional(S.String),
          Location: S.optional(S.String),
          ExpectedBucketOwner: S.optional(S.String),
          Status: S.optional(S.String),
          Tags: S.optional(__S(6)),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ErrorDetails: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Format: "format",
            Location: "location",
            ExpectedBucketOwner: "expectedBucketOwner",
            Status: "status",
            Tags: "tags",
            CreatedAt: "createdAt",
            UpdatedAt: "updatedAt",
            ErrorDetails: "errorDetails",
          }),
        ),
      ).annotate({
        identifier: "GetThreatEntitySetResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          ThreatIntelSetId: S.String.pipe(T.HttpLabel("ThreatIntelSetId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetThreatIntelSetRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Format: S.optional(S.String),
          Location: S.optional(S.String),
          Status: S.optional(S.String),
          Tags: S.optional(__S(6)),
          ExpectedBucketOwner: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Format: "format",
            Location: "location",
            Status: "status",
            Tags: "tags",
            ExpectedBucketOwner: "expectedBucketOwner",
          }),
        ),
      ).annotate({
        identifier: "GetThreatIntelSetResponse",
      });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          TrustedEntitySetId: S.String.pipe(T.HttpLabel("TrustedEntitySetId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/detector/{DetectorId}/trustedentityset/{TrustedEntitySetId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTrustedEntitySetRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountIds: S.optional(__S(4)),
          DataSources: S.optional(__S(111)),
          Resources: S.optional(__S(4)),
          Features: S.optional(__S(111)),
        }).pipe(
          S.encodeKeys({
            AccountIds: "accountIds",
            DataSources: "dataSources",
            Resources: "resources",
            Features: "features",
          }),
        ),
      ).annotate({ identifier: "UsageCriteria" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          UsageStatisticType: S.optional(S.String),
          UsageCriteria: S.optional(__S(377)),
          Unit: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        })
          .pipe(
            S.encodeKeys({
              UsageStatisticType: "usageStatisticsType",
              UsageCriteria: "usageCriteria",
              Unit: "unit",
              MaxResults: "maxResults",
              NextToken: "nextToken",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/usage/statistics" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "GetUsageStatisticsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Amount: S.optional(S.String), Unit: S.optional(S.String) }).pipe(
          S.encodeKeys({ Amount: "amount", Unit: "unit" }),
        ),
      ).annotate({ identifier: "Total" });
    case 4:
      return S.suspend(() =>
        S.Struct({ AccountId: S.optional(S.String), Total: S.optional(__S(379)) }).pipe(
          S.encodeKeys({ AccountId: "accountId", Total: "total" }),
        ),
      ).annotate({ identifier: "UsageAccountResult" });
    case 5:
      return S.Array(__S(380));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Feature: S.optional(S.String),
          Accounts: S.optional(__S(381)),
        }).pipe(S.encodeKeys({ Feature: "feature", Accounts: "accounts" })),
      ).annotate({ identifier: "UsageTopAccountsResult" });
    case 7:
      return S.Array(__S(382));
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DataSource: S.optional(S.String), Total: S.optional(__S(379)) }).pipe(
          S.encodeKeys({ DataSource: "dataSource", Total: "total" }),
        ),
      ).annotate({ identifier: "UsageDataSourceResult" });
    case 1:
      return S.Array(__S(384));
    case 2:
      return S.suspend(() =>
        S.Struct({ Resource: S.optional(S.String), Total: S.optional(__S(379)) }).pipe(
          S.encodeKeys({ Resource: "resource", Total: "total" }),
        ),
      ).annotate({ identifier: "UsageResourceResult" });
    case 3:
      return S.Array(__S(386));
    case 4:
      return S.suspend(() =>
        S.Struct({ Feature: S.optional(S.String), Total: S.optional(__S(379)) }).pipe(
          S.encodeKeys({ Feature: "feature", Total: "total" }),
        ),
      ).annotate({ identifier: "UsageFeatureResult" });
    case 5:
      return S.Array(__S(388));
    case 6:
      return S.suspend(() =>
        S.Struct({
          SumByAccount: S.optional(__S(381)),
          TopAccountsByFeature: S.optional(__S(383)),
          SumByDataSource: S.optional(__S(385)),
          SumByResource: S.optional(__S(387)),
          TopResources: S.optional(__S(387)),
          SumByFeature: S.optional(__S(389)),
        }).pipe(
          S.encodeKeys({
            SumByAccount: "sumByAccount",
            TopAccountsByFeature: "topAccountsByFeature",
            SumByDataSource: "sumByDataSource",
            SumByResource: "sumByResource",
            TopResources: "topResources",
            SumByFeature: "sumByFeature",
          }),
        ),
      ).annotate({ identifier: "UsageStatistics" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UsageStatistics: S.optional(__S(390)),
          NextToken: S.optional(S.String),
        }).pipe(S.encodeKeys({ UsageStatistics: "usageStatistics", NextToken: "nextToken" })),
      ).annotate({
        identifier: "GetUsageStatisticsResponse",
      });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          AccountIds: S.optional(__S(4)),
          DisableEmailNotification: S.optional(S.Boolean),
          Message: S.optional(S.String),
        })
          .pipe(
            S.encodeKeys({
              AccountIds: "accountIds",
              DisableEmailNotification: "disableEmailNotification",
              Message: "message",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/member/invite" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "InviteMembersRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ AttributeName: S.optional(S.String), OrderBy: S.optional(S.String) }).pipe(
          S.encodeKeys({ AttributeName: "attributeName", OrderBy: "orderBy" }),
        ),
      ).annotate({ identifier: "CoverageSortCriteria" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          FilterCriteria: S.optional(__S(110)),
          SortCriteria: S.optional(__S(393)),
        })
          .pipe(
            S.encodeKeys({
              NextToken: "nextToken",
              MaxResults: "maxResults",
              FilterCriteria: "filterCriteria",
              SortCriteria: "sortCriteria",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/coverage" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "ListCoverageRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ AddonVersion: S.optional(S.String), AddonStatus: S.optional(S.String) }).pipe(
          S.encodeKeys({ AddonVersion: "addonVersion", AddonStatus: "addonStatus" }),
        ),
      ).annotate({ identifier: "AddonDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClusterName: S.optional(S.String),
          CoveredNodes: S.optional(S.Number),
          CompatibleNodes: S.optional(S.Number),
          AddonDetails: S.optional(__S(395)),
          ManagementType: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            ClusterName: "clusterName",
            CoveredNodes: "coveredNodes",
            CompatibleNodes: "compatibleNodes",
            AddonDetails: "addonDetails",
            ManagementType: "managementType",
          }),
        ),
      ).annotate({
        identifier: "CoverageEksClusterDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Issues: S.optional(__S(4)), ManagementType: S.optional(S.String) }).pipe(
          S.encodeKeys({ Issues: "issues", ManagementType: "managementType" }),
        ),
      ).annotate({ identifier: "FargateDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CoveredContainerInstances: S.optional(S.Number),
          CompatibleContainerInstances: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            CoveredContainerInstances: "coveredContainerInstances",
            CompatibleContainerInstances: "compatibleContainerInstances",
          }),
        ),
      ).annotate({ identifier: "ContainerInstanceDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClusterName: S.optional(S.String),
          FargateDetails: S.optional(__S(397)),
          ContainerInstanceDetails: S.optional(__S(398)),
        }).pipe(
          S.encodeKeys({
            ClusterName: "clusterName",
            FargateDetails: "fargateDetails",
            ContainerInstanceDetails: "containerInstanceDetails",
          }),
        ),
      ).annotate({
        identifier: "CoverageEcsClusterDetails",
      });
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Version: S.optional(S.String) }).pipe(S.encodeKeys({ Version: "version" })),
      ).annotate({ identifier: "AgentDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InstanceId: S.optional(S.String),
          InstanceType: S.optional(S.String),
          ClusterArn: S.optional(S.String),
          AgentDetails: S.optional(__S(400)),
          ManagementType: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            InstanceId: "instanceId",
            InstanceType: "instanceType",
            ClusterArn: "clusterArn",
            AgentDetails: "agentDetails",
            ManagementType: "managementType",
          }),
        ),
      ).annotate({
        identifier: "CoverageEc2InstanceDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EksClusterDetails: S.optional(__S(396)),
          EcsClusterDetails: S.optional(__S(399)),
          Ec2InstanceDetails: S.optional(__S(401)),
          ResourceType: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            EksClusterDetails: "eksClusterDetails",
            EcsClusterDetails: "ecsClusterDetails",
            Ec2InstanceDetails: "ec2InstanceDetails",
            ResourceType: "resourceType",
          }),
        ),
      ).annotate({ identifier: "CoverageResourceDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceId: S.optional(S.String),
          DetectorId: S.optional(S.String),
          AccountId: S.optional(S.String),
          ResourceDetails: S.optional(__S(402)),
          CoverageStatus: S.optional(S.String),
          Issue: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(
          S.encodeKeys({
            ResourceId: "resourceId",
            DetectorId: "detectorId",
            AccountId: "accountId",
            ResourceDetails: "resourceDetails",
            CoverageStatus: "coverageStatus",
            Issue: "issue",
            UpdatedAt: "updatedAt",
          }),
        ),
      ).annotate({ identifier: "CoverageResource" });
    case 4:
      return S.Array(__S(403));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Resources: S.optional(__S(404)),
          NextToken: S.optional(S.String),
        }).pipe(S.encodeKeys({ Resources: "resources", NextToken: "nextToken" })),
      ).annotate({ identifier: "ListCoverageResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          RuleId: S.optional(S.String).pipe(T.HttpQuery("ruleId")),
          Mode: S.optional(S.String).pipe(T.HttpQuery("mode")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/custom-detection-rule/association" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCustomDetectionRuleAssociationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AssociationId: S.optional(S.String),
          Arn: S.optional(S.String),
          RuleId: S.optional(S.String),
          Mode: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ExpiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(
          S.encodeKeys({
            AssociationId: "associationId",
            Arn: "arn",
            RuleId: "ruleId",
            Mode: "mode",
            CreatedAt: "createdAt",
            UpdatedAt: "updatedAt",
            ExpiresAt: "expiresAt",
          }),
        ),
      ).annotate({ identifier: "AssociationSummary" });
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(407));
    case 1:
      return S.suspend(() =>
        S.Struct({
          RuleAssociations: S.optional(__S(408)),
          NextToken: S.optional(S.String),
        }).pipe(S.encodeKeys({ RuleAssociations: "ruleAssociations", NextToken: "nextToken" })),
      ).annotate({
        identifier: "ListCustomDetectionRuleAssociationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          Status: S.optional(S.String).pipe(T.HttpQuery("status")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/custom-detection-rule/org-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCustomDetectionRuleOrgConfigurationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RuleId: S.optional(S.String),
          Mode: S.optional(S.String),
          Status: S.optional(S.String),
          StatusReason: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ExpiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(
          S.encodeKeys({
            RuleId: "ruleId",
            Mode: "mode",
            Status: "status",
            StatusReason: "statusReason",
            CreatedAt: "createdAt",
            UpdatedAt: "updatedAt",
            ExpiresAt: "expiresAt",
          }),
        ),
      ).annotate({
        identifier: "DetectionRuleOrgConfigurationSummary",
      });
    case 4:
      return S.Array(__S(411));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Configurations: S.optional(__S(412)),
          NextToken: S.optional(S.String),
        }).pipe(S.encodeKeys({ Configurations: "configurations", NextToken: "nextToken" })),
      ).annotate({
        identifier: "ListCustomDetectionRuleOrgConfigurationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Values: S.optional(__S(4)),
          Condition: S.optional(S.String),
        }).pipe(S.encodeKeys({ Name: "name", Values: "values", Condition: "condition" })),
      ).annotate({ identifier: "DetectionRuleFilter" });
    case 7:
      return S.Array(__S(414));
  }
}
function __c52(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Filters: S.optional(__S(415)),
        })
          .pipe(
            S.encodeKeys({ MaxResults: "maxResults", NextToken: "nextToken", Filters: "filters" }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/custom-detection-rule/rule" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "ListCustomDetectionRulesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RuleId: S.optional(S.String),
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Severity: S.optional(S.String),
          DataSource: S.optional(S.String),
          Tactic: S.optional(S.String),
          Technique: S.optional(S.String),
          Service: S.optional(S.String),
          Language: S.optional(S.String),
          Schema: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(
          S.encodeKeys({
            RuleId: "ruleId",
            Arn: "arn",
            Name: "name",
            Description: "description",
            Severity: "severity",
            DataSource: "dataSource",
            Tactic: "tactic",
            Technique: "technique",
            Service: "service",
            Language: "language",
            Schema: "schema",
            CreatedAt: "createdAt",
            UpdatedAt: "updatedAt",
          }),
        ),
      ).annotate({ identifier: "RuleSummary" });
    case 2:
      return S.Array(__S(417));
    case 3:
      return S.suspend(() =>
        S.Struct({ Rules: S.optional(__S(418)), NextToken: S.optional(S.String) }).pipe(
          S.encodeKeys({ Rules: "rules", NextToken: "nextToken" }),
        ),
      ).annotate({
        identifier: "ListCustomDetectionRulesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/detector" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDetectorsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ DetectorIds: S.optional(__S(4)), NextToken: S.optional(S.String) }).pipe(
          S.encodeKeys({ DetectorIds: "detectorIds", NextToken: "nextToken" }),
        ),
      ).annotate({ identifier: "ListDetectorsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detector/{DetectorId}/filter" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListFiltersRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ FilterNames: S.optional(__S(4)), NextToken: S.optional(S.String) }).pipe(
          S.encodeKeys({ FilterNames: "filterNames", NextToken: "nextToken" }),
        ),
      ).annotate({ identifier: "ListFiltersResponse" });
  }
}
function __c53(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          FindingCriteria: S.optional(__S(29)),
          SortCriteria: S.optional(__S(76)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        })
          .pipe(
            S.encodeKeys({
              FindingCriteria: "findingCriteria",
              SortCriteria: "sortCriteria",
              MaxResults: "maxResults",
              NextToken: "nextToken",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/findings" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "ListFindingsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ FindingIds: S.optional(__S(4)), NextToken: S.optional(S.String) }).pipe(
          S.encodeKeys({ FindingIds: "findingIds", NextToken: "nextToken" }),
        ),
      ).annotate({ identifier: "ListFindingsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AttributeName: S.optional(S.String),
          OrderBy: S.optional(S.String),
        }).pipe(S.encodeKeys({ AttributeName: "attributeName", OrderBy: "orderBy" })),
      ).annotate({
        identifier: "InvestigationSortCriteria",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          SortCriteria: S.optional(__S(426)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        })
          .pipe(
            S.encodeKeys({
              SortCriteria: "sortCriteria",
              MaxResults: "maxResults",
              NextToken: "nextToken",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/investigation/list" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "ListInvestigationsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          InvestigationId: S.optional(S.String),
          Status: S.optional(S.String),
          TriggerPrompt: S.optional(S.String),
          RiskLevel: S.optional(S.String),
          Confidence: S.optional(S.String),
          Title: S.optional(S.String),
          AccountId: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(
          S.encodeKeys({
            InvestigationId: "investigationId",
            Status: "status",
            TriggerPrompt: "triggerPrompt",
            RiskLevel: "riskLevel",
            Confidence: "confidence",
            Title: "title",
            AccountId: "accountId",
            StartTime: "startTime",
            EndTime: "endTime",
          }),
        ),
      ).annotate({ identifier: "InvestigationSummary" });
    case 5:
      return S.Array(__S(428));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Investigations: S.optional(__S(429)),
          NextToken: S.optional(S.String),
        }).pipe(S.encodeKeys({ Investigations: "investigations", NextToken: "nextToken" })),
      ).annotate({
        identifier: "ListInvestigationsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/invitation" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListInvitationsRequest" });
  }
}
function __c54(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(105));
    case 1:
      return S.suspend(() =>
        S.Struct({ Invitations: S.optional(__S(432)), NextToken: S.optional(S.String) }).pipe(
          S.encodeKeys({ Invitations: "invitations", NextToken: "nextToken" }),
        ),
      ).annotate({ identifier: "ListInvitationsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detector/{DetectorId}/ipset" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListIPSetsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ IpSetIds: S.optional(__S(4)), NextToken: S.optional(S.String) }).pipe(
          S.encodeKeys({ IpSetIds: "ipSetIds", NextToken: "nextToken" }),
        ),
      ).annotate({ identifier: "ListIPSetsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/malware-protection-plan" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListMalwareProtectionPlansRequest",
      });
    case 5:
      return S.Array(__S(41));
    case 6:
      return S.suspend(() =>
        S.Struct({
          MalwareProtectionPlans: S.optional(__S(437)),
          NextToken: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            MalwareProtectionPlans: "malwareProtectionPlans",
            NextToken: "nextToken",
          }),
        ),
      ).annotate({
        identifier: "ListMalwareProtectionPlansResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ListMalwareScansCriterionKey: S.optional(S.String),
          FilterCondition: S.optional(__S(72)),
        }).pipe(
          S.encodeKeys({
            ListMalwareScansCriterionKey: "criterionKey",
            FilterCondition: "filterCondition",
          }),
        ),
      ).annotate({
        identifier: "ListMalwareScansFilterCriterion",
      });
  }
}
function __c55(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(439));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ListMalwareScansFilterCriterion: S.optional(__S(440)),
        }).pipe(S.encodeKeys({ ListMalwareScansFilterCriterion: "filterCriterion" })),
      ).annotate({
        identifier: "ListMalwareScansFilterCriteria",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          FilterCriteria: S.optional(__S(441)),
          SortCriteria: S.optional(__S(76)),
        })
          .pipe(S.encodeKeys({ FilterCriteria: "filterCriteria", SortCriteria: "sortCriteria" }))
          .pipe(
            T.all(T.Http({ method: "POST", uri: "/malware-scan" }), svc, auth, proto, ver, rules),
          ),
      ).annotate({ identifier: "ListMalwareScansRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String),
          ResourceType: S.optional(S.String),
          ScanId: S.optional(S.String),
          ScanStatus: S.optional(S.String),
          ScanResultStatus: S.optional(S.String),
          ScanType: S.optional(S.String),
          ScanStartedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ScanCompletedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(
          S.encodeKeys({
            ResourceArn: "resourceArn",
            ResourceType: "resourceType",
            ScanId: "scanId",
            ScanStatus: "scanStatus",
            ScanResultStatus: "scanResultStatus",
            ScanType: "scanType",
            ScanStartedAt: "scanStartedAt",
            ScanCompletedAt: "scanCompletedAt",
          }),
        ),
      ).annotate({ identifier: "MalwareScan" });
    case 4:
      return S.Array(__S(443));
    case 5:
      return S.suspend(() =>
        S.Struct({ Scans: S.optional(__S(444)), NextToken: S.optional(S.String) }).pipe(
          S.encodeKeys({ Scans: "scans", NextToken: "nextToken" }),
        ),
      ).annotate({ identifier: "ListMalwareScansResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          OnlyAssociated: S.optional(S.String).pipe(T.HttpQuery("onlyAssociated")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detector/{DetectorId}/member" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListMembersRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Members: S.optional(__S(352)), NextToken: S.optional(S.String) }).pipe(
          S.encodeKeys({ Members: "members", NextToken: "nextToken" }),
        ),
      ).annotate({ identifier: "ListMembersResponse" });
  }
}
function __c56(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/admin" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListOrganizationAdminAccountsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AdminAccountId: S.optional(S.String),
          AdminStatus: S.optional(S.String),
        }).pipe(S.encodeKeys({ AdminAccountId: "adminAccountId", AdminStatus: "adminStatus" })),
      ).annotate({ identifier: "AdminAccount" });
    case 2:
      return S.Array(__S(449));
    case 3:
      return S.suspend(() =>
        S.Struct({
          AdminAccounts: S.optional(__S(450)),
          NextToken: S.optional(S.String),
        }).pipe(S.encodeKeys({ AdminAccounts: "adminAccounts", NextToken: "nextToken" })),
      ).annotate({
        identifier: "ListOrganizationAdminAccountsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detector/{DetectorId}/publishingDestination" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPublishingDestinationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DestinationId: S.optional(S.String),
          DestinationType: S.optional(S.String),
          Status: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            DestinationId: "destinationId",
            DestinationType: "destinationType",
            Status: "status",
          }),
        ),
      ).annotate({ identifier: "Destination" });
    case 6:
      return S.Array(__S(453));
    case 7:
      return S.suspend(() =>
        S.Struct({ Destinations: S.optional(__S(454)), NextToken: S.optional(S.String) }).pipe(
          S.encodeKeys({ Destinations: "destinations", NextToken: "nextToken" }),
        ),
      ).annotate({
        identifier: "ListPublishingDestinationsResponse",
      });
  }
}
function __c57(j: number): any {
  switch (j) {
    case 0:
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
    case 1:
      return S.suspend(() =>
        S.Struct({ Tags: S.optional(__S(6)) }).pipe(S.encodeKeys({ Tags: "tags" })),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detector/{DetectorId}/threatentityset" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListThreatEntitySetsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ThreatEntitySetIds: S.optional(__S(4)),
          NextToken: S.optional(S.String),
        }).pipe(S.encodeKeys({ ThreatEntitySetIds: "threatEntitySetIds", NextToken: "nextToken" })),
      ).annotate({
        identifier: "ListThreatEntitySetsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detector/{DetectorId}/threatintelset" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListThreatIntelSetsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ThreatIntelSetIds: S.optional(__S(4)),
          NextToken: S.optional(S.String),
        }).pipe(S.encodeKeys({ ThreatIntelSetIds: "threatIntelSetIds", NextToken: "nextToken" })),
      ).annotate({
        identifier: "ListThreatIntelSetsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detector/{DetectorId}/trustedentityset" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTrustedEntitySetsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TrustedEntitySetIds: S.optional(__S(4)),
          NextToken: S.optional(S.String),
        }).pipe(
          S.encodeKeys({ TrustedEntitySetIds: "trustedEntitySetIds", NextToken: "nextToken" }),
        ),
      ).annotate({
        identifier: "ListTrustedEntitySetsResponse",
      });
  }
}
function __c58(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Bucket: S.optional(S.String),
          Key: S.optional(S.String),
          VersionId: S.optional(S.String),
        }).pipe(S.encodeKeys({ Bucket: "bucket", Key: "key", VersionId: "versionId" })),
      ).annotate({
        identifier: "S3ObjectForSendObjectMalwareScan",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ S3Object: S.optional(__S(464)) })
          .pipe(S.encodeKeys({ S3Object: "s3Object" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/object-malware-scan/send" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "SendObjectMalwareScanRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }).pipe(S.encodeKeys({ StartTime: "startTime", EndTime: "endTime" })),
      ).annotate({ identifier: "ContinuousScanDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          BackupVaultName: S.optional(S.String),
          ContinuousScanDetails: S.optional(__S(466)),
        }).pipe(
          S.encodeKeys({
            BackupVaultName: "backupVaultName",
            ContinuousScanDetails: "continuousScanDetails",
          }),
        ),
      ).annotate({ identifier: "RecoveryPoint" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Role: S.optional(S.String),
          IncrementalScanDetails: S.optional(__S(293)),
          RecoveryPoint: S.optional(__S(467)),
        }).pipe(
          S.encodeKeys({
            Role: "role",
            IncrementalScanDetails: "incrementalScanDetails",
            RecoveryPoint: "recoveryPoint",
          }),
        ),
      ).annotate({
        identifier: "StartMalwareScanConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ScanConfiguration: S.optional(__S(468)),
        })
          .pipe(
            S.encodeKeys({
              ResourceArn: "resourceArn",
              ClientToken: "clientToken",
              ScanConfiguration: "scanConfiguration",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/malware-scan/start" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "StartMalwareScanRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ScanId: S.optional(S.String) }).pipe(S.encodeKeys({ ScanId: "scanId" })),
      ).annotate({ identifier: "StartMalwareScanResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          AccountIds: S.optional(__S(4)),
        })
          .pipe(S.encodeKeys({ AccountIds: "accountIds" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/member/start" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "StartMonitoringMembersRequest",
      });
  }
}
function __c59(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          AccountIds: S.optional(__S(4)),
        })
          .pipe(S.encodeKeys({ AccountIds: "accountIds" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/member/stop" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "StopMonitoringMembersRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String).pipe(T.HttpLabel("ResourceArn")),
          Tags: __S(6),
        })
          .pipe(S.encodeKeys({ Tags: "tags" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/tags/{ResourceArn}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          FindingIds: S.optional(__S(4)),
        })
          .pipe(S.encodeKeys({ FindingIds: "findingIds" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/findings/unarchive" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "UnarchiveFindingsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagKeys: S.optional(__S(4)).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{ResourceArn}" }),
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
          RuleId: S.String.pipe(T.HttpLabel("RuleId")),
          AssociationId: S.String.pipe(T.HttpLabel("AssociationId")),
          Mode: S.optional(S.String),
        })
          .pipe(S.encodeKeys({ Mode: "mode" }))
          .pipe(
            T.all(
              T.Http({
                method: "PUT",
                uri: "/custom-detection-rule/rule/{RuleId}/association/{AssociationId}",
              }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdateCustomDetectionRuleAssociationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RuleId: S.String.pipe(T.HttpLabel("RuleId")),
          Mode: S.optional(S.String),
          IncludeAccountIds: S.optional(__S(4)),
          ExcludeAccountIds: S.optional(__S(4)),
        })
          .pipe(
            S.encodeKeys({
              Mode: "mode",
              IncludeAccountIds: "includeAccountIds",
              ExcludeAccountIds: "excludeAccountIds",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "PUT", uri: "/custom-detection-rule/org-configuration/{RuleId}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdateCustomDetectionRuleOrgConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          Enable: S.optional(S.Boolean),
          FindingPublishingFrequency: S.optional(S.String),
          DataSources: S.optional(__S(16)),
          Features: S.optional(__S(20)),
        })
          .pipe(
            S.encodeKeys({
              Enable: "enable",
              FindingPublishingFrequency: "findingPublishingFrequency",
              DataSources: "dataSources",
              Features: "features",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "UpdateDetectorRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          FilterName: S.String.pipe(T.HttpLabel("FilterName")),
          Description: S.optional(S.String),
          Action: S.optional(S.String),
          Rank: S.optional(S.Number),
          FindingCriteria: S.optional(__S(29)),
        })
          .pipe(
            S.encodeKeys({
              Description: "description",
              Action: "action",
              Rank: "rank",
              FindingCriteria: "findingCriteria",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/filter/{FilterName}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "UpdateFilterRequest" });
  }
}
function __c60(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          FindingIds: S.optional(__S(4)),
          Feedback: S.optional(S.String),
          Comments: S.optional(SensitiveString),
        })
          .pipe(
            S.encodeKeys({ FindingIds: "findingIds", Feedback: "feedback", Comments: "comments" }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/findings/feedback" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdateFindingsFeedbackRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          IpSetId: S.optional(S.String).pipe(T.HttpLabel("IpSetId")),
          Name: S.optional(S.String),
          Location: S.optional(S.String),
          Activate: S.optional(S.Boolean),
          ExpectedBucketOwner: S.optional(S.String),
        })
          .pipe(
            S.encodeKeys({
              Name: "name",
              Location: "location",
              Activate: "activate",
              ExpectedBucketOwner: "expectedBucketOwner",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/ipset/{IpSetId}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "UpdateIPSetRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ObjectPrefixes: S.optional(__S(4)) }).pipe(
          S.encodeKeys({ ObjectPrefixes: "objectPrefixes" }),
        ),
      ).annotate({ identifier: "UpdateS3BucketResource" });
    case 3:
      return S.suspend(() =>
        S.Struct({ S3Bucket: S.optional(__S(482)) }).pipe(S.encodeKeys({ S3Bucket: "s3Bucket" })),
      ).annotate({ identifier: "UpdateProtectedResource" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MalwareProtectionPlanId: S.String.pipe(T.HttpLabel("MalwareProtectionPlanId")),
          Role: S.optional(S.String),
          Actions: S.optional(__S(39)),
          ProtectedResource: S.optional(__S(483)),
        })
          .pipe(
            S.encodeKeys({
              Role: "role",
              Actions: "actions",
              ProtectedResource: "protectedResource",
            }),
          )
          .pipe(
            T.all(
              T.Http({
                method: "PATCH",
                uri: "/malware-protection-plan/{MalwareProtectionPlanId}",
              }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdateMalwareProtectionPlanRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          ScanResourceCriteria: S.optional(__S(342)),
          EbsSnapshotPreservation: S.optional(S.String),
        })
          .pipe(
            S.encodeKeys({
              ScanResourceCriteria: "scanResourceCriteria",
              EbsSnapshotPreservation: "ebsSnapshotPreservation",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/malware-scan-settings" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdateMalwareScanSettingsRequest",
      });
    case 6:
      return S.Array(__S(17));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          AdditionalConfiguration: S.optional(__S(486)),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Status: "status",
            AdditionalConfiguration: "additionalConfiguration",
          }),
        ),
      ).annotate({
        identifier: "MemberFeaturesConfiguration",
      });
  }
}
function __c61(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(487));
    case 1:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          AccountIds: S.optional(__S(4)),
          DataSources: S.optional(__S(16)),
          Features: S.optional(__S(488)),
        })
          .pipe(
            S.encodeKeys({
              AccountIds: "accountIds",
              DataSources: "dataSources",
              Features: "features",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/member/detector/update" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdateMemberDetectorsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AutoEnable: S.optional(S.Boolean) }).pipe(
          S.encodeKeys({ AutoEnable: "autoEnable" }),
        ),
      ).annotate({ identifier: "OrganizationEbsVolumes" });
    case 3:
      return S.suspend(() =>
        S.Struct({ EbsVolumes: S.optional(__S(490)) }).pipe(
          S.encodeKeys({ EbsVolumes: "ebsVolumes" }),
        ),
      ).annotate({
        identifier: "OrganizationScanEc2InstanceWithFindings",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ScanEc2InstanceWithFindings: S.optional(__S(491)),
        }).pipe(S.encodeKeys({ ScanEc2InstanceWithFindings: "scanEc2InstanceWithFindings" })),
      ).annotate({
        identifier: "OrganizationMalwareProtectionConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          S3Logs: S.optional(__S(87)),
          Kubernetes: S.optional(__S(88)),
          MalwareProtection: S.optional(__S(492)),
        }).pipe(
          S.encodeKeys({
            S3Logs: "s3Logs",
            Kubernetes: "kubernetes",
            MalwareProtection: "malwareProtection",
          }),
        ),
      ).annotate({
        identifier: "OrganizationDataSourceConfigurations",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          AutoEnable: S.optional(S.Boolean),
          DataSources: S.optional(__S(493)),
          Features: S.optional(__S(95)),
          AutoEnableOrganizationMembers: S.optional(S.String),
        })
          .pipe(
            S.encodeKeys({
              AutoEnable: "autoEnable",
              DataSources: "dataSources",
              Features: "features",
              AutoEnableOrganizationMembers: "autoEnableOrganizationMembers",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/detector/{DetectorId}/admin" }),
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
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          DestinationId: S.String.pipe(T.HttpLabel("DestinationId")),
          DestinationProperties: S.optional(__S(48)),
        })
          .pipe(S.encodeKeys({ DestinationProperties: "destinationProperties" }))
          .pipe(
            T.all(
              T.Http({
                method: "POST",
                uri: "/detector/{DetectorId}/publishingDestination/{DestinationId}",
              }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdatePublishingDestinationRequest",
      });
  }
}
function __c62(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          ThreatEntitySetId: S.optional(S.String).pipe(T.HttpLabel("ThreatEntitySetId")),
          Name: S.optional(S.String),
          Location: S.optional(S.String),
          ExpectedBucketOwner: S.optional(S.String),
          Activate: S.optional(S.Boolean),
        })
          .pipe(
            S.encodeKeys({
              Name: "name",
              Location: "location",
              ExpectedBucketOwner: "expectedBucketOwner",
              Activate: "activate",
            }),
          )
          .pipe(
            T.all(
              T.Http({
                method: "POST",
                uri: "/detector/{DetectorId}/threatentityset/{ThreatEntitySetId}",
              }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdateThreatEntitySetRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          ThreatIntelSetId: S.String.pipe(T.HttpLabel("ThreatIntelSetId")),
          Name: S.optional(S.String),
          Location: S.optional(S.String),
          Activate: S.optional(S.Boolean),
          ExpectedBucketOwner: S.optional(S.String),
        })
          .pipe(
            S.encodeKeys({
              Name: "name",
              Location: "location",
              Activate: "activate",
              ExpectedBucketOwner: "expectedBucketOwner",
            }),
          )
          .pipe(
            T.all(
              T.Http({
                method: "POST",
                uri: "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}",
              }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdateThreatIntelSetRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DetectorId: S.String.pipe(T.HttpLabel("DetectorId")),
          TrustedEntitySetId: S.String.pipe(T.HttpLabel("TrustedEntitySetId")),
          Name: S.optional(S.String),
          Location: S.optional(S.String),
          ExpectedBucketOwner: S.optional(S.String),
          Activate: S.optional(S.Boolean),
        })
          .pipe(
            S.encodeKeys({
              Name: "name",
              Location: "location",
              ExpectedBucketOwner: "expectedBucketOwner",
              Activate: "activate",
            }),
          )
          .pipe(
            T.all(
              T.Http({
                method: "POST",
                uri: "/detector/{DetectorId}/trustedentityset/{TrustedEntitySetId}",
              }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdateTrustedEntitySetRequest",
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
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
    case 23:
      return __c23(i & 7);
    case 24:
      return __c24(i & 7);
    case 25:
      return __c25(i & 7);
    case 26:
      return __c26(i & 7);
    case 27:
      return __c27(i & 7);
    case 28:
      return __c28(i & 7);
    case 29:
      return __c29(i & 7);
    case 30:
      return __c30(i & 7);
    case 31:
      return __c31(i & 7);
    case 32:
      return __c32(i & 7);
    case 33:
      return __c33(i & 7);
    case 34:
      return __c34(i & 7);
    case 35:
      return __c35(i & 7);
    case 36:
      return __c36(i & 7);
    case 37:
      return __c37(i & 7);
    case 38:
      return __c38(i & 7);
    case 39:
      return __c39(i & 7);
    case 40:
      return __c40(i & 7);
    case 41:
      return __c41(i & 7);
    case 42:
      return __c42(i & 7);
    case 43:
      return __c43(i & 7);
    case 44:
      return __c44(i & 7);
    case 45:
      return __c45(i & 7);
    case 46:
      return __c46(i & 7);
    case 47:
      return __c47(i & 7);
    case 48:
      return __c48(i & 7);
    case 49:
      return __c49(i & 7);
    case 50:
      return __c50(i & 7);
    case 51:
      return __c51(i & 7);
    case 52:
      return __c52(i & 7);
    case 53:
      return __c53(i & 7);
    case 54:
      return __c54(i & 7);
    case 55:
      return __c55(i & 7);
    case 56:
      return __c56(i & 7);
    case 57:
      return __c57(i & 7);
    case 58:
      return __c58(i & 7);
    case 59:
      return __c59(i & 7);
    case 60:
      return __c60(i & 7);
    case 61:
      return __c61(i & 7);
    case 62:
      return __c62(i & 7);
  }
}
