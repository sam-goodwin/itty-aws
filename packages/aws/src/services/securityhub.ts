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
  sdkId: "SecurityHub",
  serviceShapeName: "SecurityHubAPIService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "securityhub" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-10-26");
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
              `https://securityhub-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://securityhub-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://securityhub.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://securityhub.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalException
  extends /*@__PURE__*/ S.TaggedError<InternalException>()(
    "InternalException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidAccessException
  extends /*@__PURE__*/ S.TaggedError<InvalidAccessException>()(
    "InvalidAccessException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export class InvalidInputException
  extends /*@__PURE__*/ S.TaggedError<InvalidInputException>()(
    "InvalidInputException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class OrganizationalUnitNotFoundException
  extends /*@__PURE__*/ S.TaggedError<OrganizationalUnitNotFoundException>()(
    "OrganizationalUnitNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class OrganizationNotFoundException
  extends /*@__PURE__*/ S.TaggedError<OrganizationNotFoundException>()(
    "OrganizationNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceConflictException
  extends /*@__PURE__*/ S.TaggedError<ResourceConflictException>()(
    "ResourceConflictException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()(
    "ResourceInUseException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type NonEmptyString = string;
export interface AcceptAdministratorInvitationRequest {
  AdministratorId?: string;
  InvitationId?: string;
}
export interface AcceptAdministratorInvitationResponse {}
export interface AcceptInvitationRequest {
  MasterId?: string;
  InvitationId?: string;
}
export interface AcceptInvitationResponse {}
export type AutomationRulesArnsList = string[];
export interface BatchDeleteAutomationRulesRequest {
  AutomationRulesArns?: string[];
}
export interface UnprocessedAutomationRule {
  RuleArn?: string;
  ErrorCode?: number;
  ErrorMessage?: string;
}
export type UnprocessedAutomationRulesList = UnprocessedAutomationRule[];
export interface BatchDeleteAutomationRulesResponse {
  ProcessedAutomationRules?: string[];
  UnprocessedAutomationRules?: UnprocessedAutomationRule[];
}
export type StandardsSubscriptionArns = string[];
export interface BatchDisableStandardsRequest {
  StandardsSubscriptionArns?: string[];
}
export type StandardsInputParameterMap = { [key: string]: string | undefined };
export type StandardsStatus =
  | "PENDING"
  | "READY"
  | "FAILED"
  | "DELETING"
  | "INCOMPLETE"
  | (string & {});
export type StandardsControlsUpdatable =
  | "READY_FOR_UPDATES"
  | "NOT_READY_FOR_UPDATES"
  | (string & {});
export type StatusReasonCode =
  | "NO_AVAILABLE_CONFIGURATION_RECORDER"
  | "MAXIMUM_NUMBER_OF_CONFIG_RULES_EXCEEDED"
  | "NO_AVAILABLE_MULTICLOUD_CONNECTOR"
  | "INTERNAL_ERROR"
  | (string & {});
export interface StandardsStatusReason {
  StatusReasonCode?: StatusReasonCode;
}
export type StandardsProvider = "AWS" | "Azure" | (string & {});
export interface StandardsSubscription {
  StandardsSubscriptionArn?: string;
  StandardsArn?: string;
  StandardsInput?: { [key: string]: string | undefined };
  StandardsStatus?: StandardsStatus;
  StandardsControlsUpdatable?: StandardsControlsUpdatable;
  StandardsStatusReason?: StandardsStatusReason;
  Provider?: StandardsProvider;
}
export type StandardsSubscriptions = StandardsSubscription[];
export interface BatchDisableStandardsResponse {
  StandardsSubscriptions?: (StandardsSubscription & {
    StandardsSubscriptionArn: NonEmptyString;
    StandardsArn: NonEmptyString;
    StandardsInput: StandardsInputParameterMap;
    StandardsStatus: StandardsStatus;
    StandardsStatusReason: StandardsStatusReason & { StatusReasonCode: StatusReasonCode };
  })[];
}
export interface StandardsSubscriptionRequest {
  StandardsArn?: string;
  StandardsInput?: { [key: string]: string | undefined };
}
export type StandardsSubscriptionRequests = StandardsSubscriptionRequest[];
export interface BatchEnableStandardsRequest {
  StandardsSubscriptionRequests?: StandardsSubscriptionRequest[];
}
export interface BatchEnableStandardsResponse {
  StandardsSubscriptions?: (StandardsSubscription & {
    StandardsSubscriptionArn: NonEmptyString;
    StandardsArn: NonEmptyString;
    StandardsInput: StandardsInputParameterMap;
    StandardsStatus: StandardsStatus;
    StandardsStatusReason: StandardsStatusReason & { StatusReasonCode: StatusReasonCode };
  })[];
}
export interface BatchGetAutomationRulesRequest {
  AutomationRulesArns?: string[];
}
export type RuleStatus = "ENABLED" | "DISABLED" | (string & {});
export type RuleOrderValue = number;
export type StringFilterComparison =
  | "EQUALS"
  | "PREFIX"
  | "NOT_EQUALS"
  | "PREFIX_NOT_EQUALS"
  | "CONTAINS"
  | "NOT_CONTAINS"
  | "CONTAINS_WORD"
  | (string & {});
export interface StringFilter {
  Value?: string;
  Comparison?: StringFilterComparison;
}
export type StringFilterList = StringFilter[];
export type DateRangeUnit = "DAYS" | (string & {});
export type DateRangeComparison = "WITHIN" | "OLDER_THAN" | (string & {});
export interface DateRange {
  Value?: number;
  Unit?: DateRangeUnit;
  Comparison?: DateRangeComparison;
}
export interface DateFilter {
  Start?: string;
  End?: string;
  DateRange?: DateRange;
}
export type DateFilterList = DateFilter[];
export interface NumberFilter {
  Gte?: number;
  Lte?: number;
  Eq?: number;
  Gt?: number;
  Lt?: number;
}
export type NumberFilterList = NumberFilter[];
export type MapFilterComparison =
  | "EQUALS"
  | "NOT_EQUALS"
  | "CONTAINS"
  | "NOT_CONTAINS"
  | (string & {});
export interface MapFilter {
  Key?: string;
  Value?: string;
  Comparison?: MapFilterComparison;
}
export type MapFilterList = MapFilter[];
export interface AutomationRulesFindingFilters {
  ProductArn?: StringFilter[];
  AwsAccountId?: StringFilter[];
  Id?: StringFilter[];
  GeneratorId?: StringFilter[];
  Type?: StringFilter[];
  FirstObservedAt?: DateFilter[];
  LastObservedAt?: DateFilter[];
  CreatedAt?: DateFilter[];
  UpdatedAt?: DateFilter[];
  Confidence?: NumberFilter[];
  Criticality?: NumberFilter[];
  Title?: StringFilter[];
  Description?: StringFilter[];
  SourceUrl?: StringFilter[];
  ProductName?: StringFilter[];
  CompanyName?: StringFilter[];
  SeverityLabel?: StringFilter[];
  ResourceType?: StringFilter[];
  ResourceId?: StringFilter[];
  ResourcePartition?: StringFilter[];
  ResourceRegion?: StringFilter[];
  ResourceTags?: MapFilter[];
  ResourceDetailsOther?: MapFilter[];
  ComplianceStatus?: StringFilter[];
  ComplianceSecurityControlId?: StringFilter[];
  ComplianceAssociatedStandardsId?: StringFilter[];
  VerificationState?: StringFilter[];
  WorkflowStatus?: StringFilter[];
  RecordState?: StringFilter[];
  RelatedFindingsProductArn?: StringFilter[];
  RelatedFindingsId?: StringFilter[];
  NoteText?: StringFilter[];
  NoteUpdatedAt?: DateFilter[];
  NoteUpdatedBy?: StringFilter[];
  UserDefinedFields?: MapFilter[];
  ResourceApplicationArn?: StringFilter[];
  ResourceApplicationName?: StringFilter[];
  AwsAccountName?: StringFilter[];
  ResourceProvider?: StringFilter[];
  ResourceOwnerAccountId?: StringFilter[];
  ResourceOwnerOrgId?: StringFilter[];
}
export type AutomationRulesActionType = "FINDING_FIELDS_UPDATE" | (string & {});
export interface NoteUpdate {
  Text?: string;
  UpdatedBy?: string;
}
export type RatioScale = number;
export type SeverityLabel =
  | "INFORMATIONAL"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "CRITICAL"
  | (string & {});
export interface SeverityUpdate {
  Normalized?: number;
  Product?: number;
  Label?: SeverityLabel;
}
export type VerificationState =
  | "UNKNOWN"
  | "TRUE_POSITIVE"
  | "FALSE_POSITIVE"
  | "BENIGN_POSITIVE"
  | (string & {});
export type TypeList = string[];
export type FieldMap = { [key: string]: string | undefined };
export type WorkflowStatus = "NEW" | "NOTIFIED" | "RESOLVED" | "SUPPRESSED" | (string & {});
export interface WorkflowUpdate {
  Status?: WorkflowStatus;
}
export interface RelatedFinding {
  ProductArn?: string;
  Id?: string;
}
export type RelatedFindingList = RelatedFinding[];
export interface AutomationRulesFindingFieldsUpdate {
  Note?: NoteUpdate;
  Severity?: SeverityUpdate;
  VerificationState?: VerificationState;
  Confidence?: number;
  Criticality?: number;
  Types?: string[];
  UserDefinedFields?: { [key: string]: string | undefined };
  Workflow?: WorkflowUpdate;
  RelatedFindings?: RelatedFinding[];
}
export interface AutomationRulesAction {
  Type?: AutomationRulesActionType;
  FindingFieldsUpdate?: AutomationRulesFindingFieldsUpdate;
}
export type ActionList = AutomationRulesAction[];
export interface AutomationRulesConfig {
  RuleArn?: string;
  RuleStatus?: RuleStatus;
  RuleOrder?: number;
  RuleName?: string;
  Description?: string;
  IsTerminal?: boolean;
  Criteria?: AutomationRulesFindingFilters;
  Actions?: AutomationRulesAction[];
  CreatedAt?: Date;
  UpdatedAt?: Date;
  CreatedBy?: string;
}
export type AutomationRulesConfigList = AutomationRulesConfig[];
export interface BatchGetAutomationRulesResponse {
  Rules?: (AutomationRulesConfig & {
    Actions: (AutomationRulesAction & {
      FindingFieldsUpdate: AutomationRulesFindingFieldsUpdate & {
        Note: NoteUpdate & { Text: NonEmptyString; UpdatedBy: NonEmptyString };
        RelatedFindings: (RelatedFinding & { ProductArn: NonEmptyString; Id: NonEmptyString })[];
      };
    })[];
  })[];
  UnprocessedAutomationRules?: UnprocessedAutomationRule[];
}
export type Target =
  | { AccountId: string; OrganizationalUnitId?: never; RootId?: never }
  | { AccountId?: never; OrganizationalUnitId: string; RootId?: never }
  | { AccountId?: never; OrganizationalUnitId?: never; RootId: string };
export interface ConfigurationPolicyAssociation {
  Target?: Target;
}
export type ConfigurationPolicyAssociationsList = ConfigurationPolicyAssociation[];
export interface BatchGetConfigurationPolicyAssociationsRequest {
  ConfigurationPolicyAssociationIdentifiers?: ConfigurationPolicyAssociation[];
}
export type TargetType = "ACCOUNT" | "ORGANIZATIONAL_UNIT" | "ROOT" | (string & {});
export type AssociationType = "INHERITED" | "APPLIED" | (string & {});
export type ConfigurationPolicyAssociationStatus = "PENDING" | "SUCCESS" | "FAILED" | (string & {});
export interface ConfigurationPolicyAssociationSummary {
  ConfigurationPolicyId?: string;
  TargetId?: string;
  TargetType?: TargetType;
  AssociationType?: AssociationType;
  UpdatedAt?: Date;
  AssociationStatus?: ConfigurationPolicyAssociationStatus;
  AssociationStatusMessage?: string;
}
export type ConfigurationPolicyAssociationList = ConfigurationPolicyAssociationSummary[];
export interface UnprocessedConfigurationPolicyAssociation {
  ConfigurationPolicyAssociationIdentifiers?: ConfigurationPolicyAssociation;
  ErrorCode?: string;
  ErrorReason?: string;
}
export type UnprocessedConfigurationPolicyAssociationList =
  UnprocessedConfigurationPolicyAssociation[];
export interface BatchGetConfigurationPolicyAssociationsResponse {
  ConfigurationPolicyAssociations?: ConfigurationPolicyAssociationSummary[];
  UnprocessedConfigurationPolicyAssociations?: UnprocessedConfigurationPolicyAssociation[];
}
export type StringList = string[];
export interface BatchGetSecurityControlsRequest {
  SecurityControlIds?: string[];
}
export type SeverityRating = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL" | (string & {});
export type ControlStatus = "ENABLED" | "DISABLED" | (string & {});
export type UpdateStatus = "READY" | "UPDATING" | (string & {});
export type ParameterValueType = "DEFAULT" | "CUSTOM" | (string & {});
export type IntegerList = number[];
export type ParameterValue =
  | {
      Integer: number;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList: number[];
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double: number;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String: string;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList: string[];
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean: boolean;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum: string;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList: string[];
    };
export interface ParameterConfiguration {
  ValueType?: ParameterValueType;
  Value?: ParameterValue;
}
export type Parameters = { [key: string]: ParameterConfiguration | undefined };
export type AlphaNumericNonEmptyString = string;
export type SecurityControlsProvider = "AWS" | "Azure" | (string & {});
export interface SecurityControl {
  SecurityControlId?: string;
  SecurityControlArn?: string;
  Title?: string;
  Description?: string;
  RemediationUrl?: string;
  SeverityRating?: SeverityRating;
  SecurityControlStatus?: ControlStatus;
  UpdateStatus?: UpdateStatus;
  Parameters?: { [key: string]: ParameterConfiguration | undefined };
  LastUpdateReason?: string;
  Provider?: SecurityControlsProvider;
}
export type SecurityControls = SecurityControl[];
export type UnprocessedErrorCode =
  | "INVALID_INPUT"
  | "ACCESS_DENIED"
  | "NOT_FOUND"
  | "RESOURCE_NOT_FOUND"
  | "LIMIT_EXCEEDED"
  | (string & {});
export interface UnprocessedSecurityControl {
  SecurityControlId?: string;
  ErrorCode?: UnprocessedErrorCode;
  ErrorReason?: string;
}
export type UnprocessedSecurityControls = UnprocessedSecurityControl[];
export interface BatchGetSecurityControlsResponse {
  SecurityControls: (SecurityControl & {
    SecurityControlId: NonEmptyString;
    SecurityControlArn: NonEmptyString;
    Title: NonEmptyString;
    Description: NonEmptyString;
    RemediationUrl: NonEmptyString;
    SeverityRating: SeverityRating;
    SecurityControlStatus: ControlStatus;
    Parameters: {
      [key: string]: (ParameterConfiguration & { ValueType: ParameterValueType }) | undefined;
    };
  })[];
  UnprocessedIds?: (UnprocessedSecurityControl & {
    SecurityControlId: NonEmptyString;
    ErrorCode: UnprocessedErrorCode;
  })[];
}
export interface StandardsControlAssociationId {
  SecurityControlId?: string;
  StandardsArn?: string;
}
export type StandardsControlAssociationIds = StandardsControlAssociationId[];
export interface BatchGetStandardsControlAssociationsRequest {
  StandardsControlAssociationIds?: StandardsControlAssociationId[];
}
export type AssociationStatus = "ENABLED" | "DISABLED" | (string & {});
export type RelatedRequirementsList = string[];
export type StandardsControlArnList = string[];
export interface StandardsControlAssociationDetail {
  StandardsArn?: string;
  SecurityControlId?: string;
  SecurityControlArn?: string;
  AssociationStatus?: AssociationStatus;
  RelatedRequirements?: string[];
  UpdatedAt?: Date;
  UpdatedReason?: string;
  StandardsControlTitle?: string;
  StandardsControlDescription?: string;
  StandardsControlArns?: string[];
}
export type StandardsControlAssociationDetails = StandardsControlAssociationDetail[];
export interface UnprocessedStandardsControlAssociation {
  StandardsControlAssociationId?: StandardsControlAssociationId;
  ErrorCode?: UnprocessedErrorCode;
  ErrorReason?: string;
}
export type UnprocessedStandardsControlAssociations = UnprocessedStandardsControlAssociation[];
export interface BatchGetStandardsControlAssociationsResponse {
  StandardsControlAssociationDetails: (StandardsControlAssociationDetail & {
    StandardsArn: NonEmptyString;
    SecurityControlId: NonEmptyString;
    SecurityControlArn: NonEmptyString;
    AssociationStatus: AssociationStatus;
  })[];
  UnprocessedAssociations?: (UnprocessedStandardsControlAssociation & {
    StandardsControlAssociationId: StandardsControlAssociationId & {
      SecurityControlId: NonEmptyString;
      StandardsArn: NonEmptyString;
    };
    ErrorCode: UnprocessedErrorCode;
  })[];
}
export interface Severity {
  Product?: number;
  Label?: SeverityLabel;
  Normalized?: number;
  Original?: string;
}
export interface Recommendation {
  Text?: string;
  Url?: string;
}
export interface Remediation {
  Recommendation?: Recommendation;
}
export type MalwareType =
  | "ADWARE"
  | "BLENDED_THREAT"
  | "BOTNET_AGENT"
  | "COIN_MINER"
  | "EXPLOIT_KIT"
  | "KEYLOGGER"
  | "MACRO"
  | "POTENTIALLY_UNWANTED"
  | "SPYWARE"
  | "RANSOMWARE"
  | "REMOTE_ACCESS"
  | "ROOTKIT"
  | "TROJAN"
  | "VIRUS"
  | "WORM"
  | (string & {});
export type MalwareState = "OBSERVED" | "REMOVAL_FAILED" | "REMOVED" | (string & {});
export interface Malware {
  Name?: string;
  Type?: MalwareType;
  Path?: string;
  State?: MalwareState;
}
export type MalwareList = Malware[];
export type NetworkDirection = "IN" | "OUT" | (string & {});
export interface PortRange {
  Begin?: number;
  End?: number;
}
export interface Network {
  Direction?: NetworkDirection;
  Protocol?: string;
  OpenPortRange?: PortRange;
  SourceIpV4?: string;
  SourceIpV6?: string;
  SourcePort?: number;
  SourceDomain?: string;
  SourceMac?: string;
  DestinationIpV4?: string;
  DestinationIpV6?: string;
  DestinationPort?: number;
  DestinationDomain?: string;
}
export type PortRangeList = PortRange[];
export interface NetworkPathComponentDetails {
  Address?: string[];
  PortRanges?: PortRange[];
}
export interface NetworkHeader {
  Protocol?: string;
  Destination?: NetworkPathComponentDetails;
  Source?: NetworkPathComponentDetails;
}
export interface NetworkPathComponent {
  ComponentId?: string;
  ComponentType?: string;
  Egress?: NetworkHeader;
  Ingress?: NetworkHeader;
}
export type NetworkPathList = NetworkPathComponent[];
export interface ProcessDetails {
  Name?: string;
  Path?: string;
  Pid?: number;
  ParentPid?: number;
  LaunchedAt?: string;
  TerminatedAt?: string;
}
export interface FilePaths {
  FilePath?: string;
  FileName?: string;
  ResourceId?: string;
  Hash?: string;
}
export type FilePathList = FilePaths[];
export interface Threat {
  Name?: string;
  Severity?: string;
  ItemCount?: number;
  FilePaths?: FilePaths[];
}
export type ThreatList = Threat[];
export type ThreatIntelIndicatorType =
  | "DOMAIN"
  | "EMAIL_ADDRESS"
  | "HASH_MD5"
  | "HASH_SHA1"
  | "HASH_SHA256"
  | "HASH_SHA512"
  | "IPV4_ADDRESS"
  | "IPV6_ADDRESS"
  | "MUTEX"
  | "PROCESS"
  | "URL"
  | (string & {});
export type ThreatIntelIndicatorCategory =
  | "BACKDOOR"
  | "CARD_STEALER"
  | "COMMAND_AND_CONTROL"
  | "DROP_SITE"
  | "EXPLOIT_SITE"
  | "KEYLOGGER"
  | (string & {});
export interface ThreatIntelIndicator {
  Type?: ThreatIntelIndicatorType;
  Value?: string;
  Category?: ThreatIntelIndicatorCategory;
  LastObservedAt?: string;
  Source?: string;
  SourceUrl?: string;
}
export type ThreatIntelIndicatorList = ThreatIntelIndicator[];
export type Partition =
  | "aws"
  | "aws-cn"
  | "aws-us-gov"
  | "aws-us-iso"
  | "aws-us-iso-b"
  | "AzureCloud"
  | (string & {});
export type CloudProviderName = "Azure" | "AWS" | (string & {});
export interface ResourceOwnerAccount {
  Id?: string;
}
export interface ResourceOwnerOrg {
  Id?: string;
}
export interface ResourceOwner {
  Account?: ResourceOwnerAccount;
  Org?: ResourceOwnerOrg;
}
export interface ClassificationStatus {
  Code?: string;
  Reason?: string;
}
export interface Range {
  Start?: number;
  End?: number;
  StartColumn?: number;
}
export type Ranges = Range[];
export interface Page {
  PageNumber?: number;
  LineRange?: Range;
  OffsetRange?: Range;
}
export type Pages = Page[];
export interface Record {
  JsonPath?: string;
  RecordIndex?: number;
}
export type Records = Record[];
export interface Cell {
  Column?: number;
  Row?: number;
  ColumnName?: string;
  CellReference?: string;
}
export type Cells = Cell[];
export interface Occurrences {
  LineRanges?: Range[];
  OffsetRanges?: Range[];
  Pages?: Page[];
  Records?: Record[];
  Cells?: Cell[];
}
export interface SensitiveDataDetections {
  Count?: number;
  Type?: string;
  Occurrences?: Occurrences;
}
export type SensitiveDataDetectionsList = SensitiveDataDetections[];
export interface SensitiveDataResult {
  Category?: string;
  Detections?: SensitiveDataDetections[];
  TotalCount?: number;
}
export type SensitiveDataResultList = SensitiveDataResult[];
export interface CustomDataIdentifiersDetections {
  Count?: number;
  Arn?: string;
  Name?: string;
  Occurrences?: Occurrences;
}
export type CustomDataIdentifiersDetectionsList = CustomDataIdentifiersDetections[];
export interface CustomDataIdentifiersResult {
  Detections?: CustomDataIdentifiersDetections[];
  TotalCount?: number;
}
export interface ClassificationResult {
  MimeType?: string;
  SizeClassified?: number;
  AdditionalOccurrences?: boolean;
  Status?: ClassificationStatus;
  SensitiveData?: SensitiveDataResult[];
  CustomDataIdentifiers?: CustomDataIdentifiersResult;
}
export interface DataClassificationDetails {
  DetailedResultsLocation?: string;
  Result?: ClassificationResult;
}
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails {
  OnDemandAllocationStrategy?: string;
  OnDemandBaseCapacity?: number;
  OnDemandPercentageAboveBaseCapacity?: number;
  SpotAllocationStrategy?: string;
  SpotInstancePools?: number;
  SpotMaxPrice?: string;
}
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version?: string;
}
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails {
  InstanceType?: string;
  WeightedCapacity?: string;
}
export type AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList =
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails[];
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails {
  LaunchTemplateSpecification?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
  Overrides?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails[];
}
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails {
  InstancesDistribution?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails;
  LaunchTemplate?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails;
}
export interface AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails {
  Value?: string;
}
export type AwsAutoScalingAutoScalingGroupAvailabilityZonesList =
  AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails[];
export interface AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version?: string;
}
export interface AwsAutoScalingAutoScalingGroupDetails {
  LaunchConfigurationName?: string;
  LoadBalancerNames?: string[];
  HealthCheckType?: string;
  HealthCheckGracePeriod?: number;
  CreatedTime?: string;
  MixedInstancesPolicy?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails;
  AvailabilityZones?: AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails[];
  LaunchTemplate?: AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification;
  CapacityRebalance?: boolean;
}
export interface AwsCodeBuildProjectArtifactsDetails {
  ArtifactIdentifier?: string;
  EncryptionDisabled?: boolean;
  Location?: string;
  Name?: string;
  NamespaceType?: string;
  OverrideArtifactName?: boolean;
  Packaging?: string;
  Path?: string;
  Type?: string;
}
export type AwsCodeBuildProjectArtifactsList = AwsCodeBuildProjectArtifactsDetails[];
export interface AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails {
  Name?: string;
  Type?: string;
  Value?: string;
}
export type AwsCodeBuildProjectEnvironmentEnvironmentVariablesList =
  AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails[];
export interface AwsCodeBuildProjectEnvironmentRegistryCredential {
  Credential?: string;
  CredentialProvider?: string;
}
export interface AwsCodeBuildProjectEnvironment {
  Certificate?: string;
  EnvironmentVariables?: AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails[];
  PrivilegedMode?: boolean;
  ImagePullCredentialsType?: string;
  RegistryCredential?: AwsCodeBuildProjectEnvironmentRegistryCredential;
  Type?: string;
}
export interface AwsCodeBuildProjectSource {
  Type?: string;
  Location?: string;
  GitCloneDepth?: number;
  InsecureSsl?: boolean;
}
export interface AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails {
  GroupName?: string;
  Status?: string;
  StreamName?: string;
}
export interface AwsCodeBuildProjectLogsConfigS3LogsDetails {
  EncryptionDisabled?: boolean;
  Location?: string;
  Status?: string;
}
export interface AwsCodeBuildProjectLogsConfigDetails {
  CloudWatchLogs?: AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails;
  S3Logs?: AwsCodeBuildProjectLogsConfigS3LogsDetails;
}
export type NonEmptyStringList = string[];
export interface AwsCodeBuildProjectVpcConfig {
  VpcId?: string;
  Subnets?: string[];
  SecurityGroupIds?: string[];
}
export interface AwsCodeBuildProjectDetails {
  EncryptionKey?: string;
  Artifacts?: AwsCodeBuildProjectArtifactsDetails[];
  Environment?: AwsCodeBuildProjectEnvironment;
  Name?: string;
  Source?: AwsCodeBuildProjectSource;
  ServiceRole?: string;
  LogsConfig?: AwsCodeBuildProjectLogsConfigDetails;
  VpcConfig?: AwsCodeBuildProjectVpcConfig;
  SecondaryArtifacts?: AwsCodeBuildProjectArtifactsDetails[];
}
export interface AwsCloudFrontDistributionCacheBehavior {
  ViewerProtocolPolicy?: string;
}
export type AwsCloudFrontDistributionCacheBehaviorsItemList =
  AwsCloudFrontDistributionCacheBehavior[];
export interface AwsCloudFrontDistributionCacheBehaviors {
  Items?: AwsCloudFrontDistributionCacheBehavior[];
}
export interface AwsCloudFrontDistributionDefaultCacheBehavior {
  ViewerProtocolPolicy?: string;
}
export interface AwsCloudFrontDistributionLogging {
  Bucket?: string;
  Enabled?: boolean;
  IncludeCookies?: boolean;
  Prefix?: string;
}
export interface AwsCloudFrontDistributionOriginS3OriginConfig {
  OriginAccessIdentity?: string;
}
export interface AwsCloudFrontDistributionOriginSslProtocols {
  Items?: string[];
  Quantity?: number;
}
export interface AwsCloudFrontDistributionOriginCustomOriginConfig {
  HttpPort?: number;
  HttpsPort?: number;
  OriginKeepaliveTimeout?: number;
  OriginProtocolPolicy?: string;
  OriginReadTimeout?: number;
  OriginSslProtocols?: AwsCloudFrontDistributionOriginSslProtocols;
}
export interface AwsCloudFrontDistributionOriginItem {
  DomainName?: string;
  Id?: string;
  OriginPath?: string;
  S3OriginConfig?: AwsCloudFrontDistributionOriginS3OriginConfig;
  CustomOriginConfig?: AwsCloudFrontDistributionOriginCustomOriginConfig;
}
export type AwsCloudFrontDistributionOriginItemList = AwsCloudFrontDistributionOriginItem[];
export interface AwsCloudFrontDistributionOrigins {
  Items?: AwsCloudFrontDistributionOriginItem[];
}
export type AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList = number[];
export interface AwsCloudFrontDistributionOriginGroupFailoverStatusCodes {
  Items?: number[];
  Quantity?: number;
}
export interface AwsCloudFrontDistributionOriginGroupFailover {
  StatusCodes?: AwsCloudFrontDistributionOriginGroupFailoverStatusCodes;
}
export interface AwsCloudFrontDistributionOriginGroup {
  FailoverCriteria?: AwsCloudFrontDistributionOriginGroupFailover;
}
export type AwsCloudFrontDistributionOriginGroupsItemList = AwsCloudFrontDistributionOriginGroup[];
export interface AwsCloudFrontDistributionOriginGroups {
  Items?: AwsCloudFrontDistributionOriginGroup[];
}
export interface AwsCloudFrontDistributionViewerCertificate {
  AcmCertificateArn?: string;
  Certificate?: string;
  CertificateSource?: string;
  CloudFrontDefaultCertificate?: boolean;
  IamCertificateId?: string;
  MinimumProtocolVersion?: string;
  SslSupportMethod?: string;
}
export interface AwsCloudFrontDistributionDetails {
  CacheBehaviors?: AwsCloudFrontDistributionCacheBehaviors;
  DefaultCacheBehavior?: AwsCloudFrontDistributionDefaultCacheBehavior;
  DefaultRootObject?: string;
  DomainName?: string;
  ETag?: string;
  LastModifiedTime?: string;
  Logging?: AwsCloudFrontDistributionLogging;
  Origins?: AwsCloudFrontDistributionOrigins;
  OriginGroups?: AwsCloudFrontDistributionOriginGroups;
  ViewerCertificate?: AwsCloudFrontDistributionViewerCertificate;
  Status?: string;
  WebAclId?: string;
}
export interface AwsEc2InstanceNetworkInterfacesDetails {
  NetworkInterfaceId?: string;
}
export type AwsEc2InstanceNetworkInterfacesList = AwsEc2InstanceNetworkInterfacesDetails[];
export interface AwsEc2InstanceMetadataOptions {
  HttpEndpoint?: string;
  HttpProtocolIpv6?: string;
  HttpPutResponseHopLimit?: number;
  HttpTokens?: string;
  InstanceMetadataTags?: string;
}
export interface AwsEc2InstanceMonitoringDetails {
  State?: string;
}
export interface AwsEc2InstanceDetails {
  Type?: string;
  ImageId?: string;
  IpV4Addresses?: string[];
  IpV6Addresses?: string[];
  KeyName?: string;
  IamInstanceProfileArn?: string;
  VpcId?: string;
  SubnetId?: string;
  LaunchedAt?: string;
  NetworkInterfaces?: AwsEc2InstanceNetworkInterfacesDetails[];
  VirtualizationType?: string;
  MetadataOptions?: AwsEc2InstanceMetadataOptions;
  Monitoring?: AwsEc2InstanceMonitoringDetails;
}
export interface AwsEc2NetworkInterfaceAttachment {
  AttachTime?: string;
  AttachmentId?: string;
  DeleteOnTermination?: boolean;
  DeviceIndex?: number;
  InstanceId?: string;
  InstanceOwnerId?: string;
  Status?: string;
}
export interface AwsEc2NetworkInterfaceSecurityGroup {
  GroupName?: string;
  GroupId?: string;
}
export type AwsEc2NetworkInterfaceSecurityGroupList = AwsEc2NetworkInterfaceSecurityGroup[];
export interface AwsEc2NetworkInterfaceIpV6AddressDetail {
  IpV6Address?: string;
}
export type AwsEc2NetworkInterfaceIpV6AddressList = AwsEc2NetworkInterfaceIpV6AddressDetail[];
export interface AwsEc2NetworkInterfacePrivateIpAddressDetail {
  PrivateIpAddress?: string;
  PrivateDnsName?: string;
}
export type AwsEc2NetworkInterfacePrivateIpAddressList =
  AwsEc2NetworkInterfacePrivateIpAddressDetail[];
export interface AwsEc2NetworkInterfaceDetails {
  Attachment?: AwsEc2NetworkInterfaceAttachment;
  NetworkInterfaceId?: string;
  SecurityGroups?: AwsEc2NetworkInterfaceSecurityGroup[];
  SourceDestCheck?: boolean;
  IpV6Addresses?: AwsEc2NetworkInterfaceIpV6AddressDetail[];
  PrivateIpAddresses?: AwsEc2NetworkInterfacePrivateIpAddressDetail[];
  PublicDnsName?: string;
  PublicIp?: string;
}
export interface AwsEc2SecurityGroupUserIdGroupPair {
  GroupId?: string;
  GroupName?: string;
  PeeringStatus?: string;
  UserId?: string;
  VpcId?: string;
  VpcPeeringConnectionId?: string;
}
export type AwsEc2SecurityGroupUserIdGroupPairList = AwsEc2SecurityGroupUserIdGroupPair[];
export interface AwsEc2SecurityGroupIpRange {
  CidrIp?: string;
}
export type AwsEc2SecurityGroupIpRangeList = AwsEc2SecurityGroupIpRange[];
export interface AwsEc2SecurityGroupIpv6Range {
  CidrIpv6?: string;
}
export type AwsEc2SecurityGroupIpv6RangeList = AwsEc2SecurityGroupIpv6Range[];
export interface AwsEc2SecurityGroupPrefixListId {
  PrefixListId?: string;
}
export type AwsEc2SecurityGroupPrefixListIdList = AwsEc2SecurityGroupPrefixListId[];
export interface AwsEc2SecurityGroupIpPermission {
  IpProtocol?: string;
  FromPort?: number;
  ToPort?: number;
  UserIdGroupPairs?: AwsEc2SecurityGroupUserIdGroupPair[];
  IpRanges?: AwsEc2SecurityGroupIpRange[];
  Ipv6Ranges?: AwsEc2SecurityGroupIpv6Range[];
  PrefixListIds?: AwsEc2SecurityGroupPrefixListId[];
}
export type AwsEc2SecurityGroupIpPermissionList = AwsEc2SecurityGroupIpPermission[];
export interface AwsEc2SecurityGroupDetails {
  GroupName?: string;
  GroupId?: string;
  OwnerId?: string;
  VpcId?: string;
  IpPermissions?: AwsEc2SecurityGroupIpPermission[];
  IpPermissionsEgress?: AwsEc2SecurityGroupIpPermission[];
}
export interface AwsEc2VolumeAttachment {
  AttachTime?: string;
  DeleteOnTermination?: boolean;
  InstanceId?: string;
  Status?: string;
}
export type AwsEc2VolumeAttachmentList = AwsEc2VolumeAttachment[];
export interface AwsEc2VolumeDetails {
  CreateTime?: string;
  DeviceName?: string;
  Encrypted?: boolean;
  Size?: number;
  SnapshotId?: string;
  Status?: string;
  KmsKeyId?: string;
  Attachments?: AwsEc2VolumeAttachment[];
  VolumeId?: string;
  VolumeType?: string;
  VolumeScanStatus?: string;
}
export interface CidrBlockAssociation {
  AssociationId?: string;
  CidrBlock?: string;
  CidrBlockState?: string;
}
export type CidrBlockAssociationList = CidrBlockAssociation[];
export interface Ipv6CidrBlockAssociation {
  AssociationId?: string;
  Ipv6CidrBlock?: string;
  CidrBlockState?: string;
}
export type Ipv6CidrBlockAssociationList = Ipv6CidrBlockAssociation[];
export interface AwsEc2VpcDetails {
  CidrBlockAssociationSet?: CidrBlockAssociation[];
  Ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[];
  DhcpOptionsId?: string;
  State?: string;
}
export interface AwsEc2EipDetails {
  InstanceId?: string;
  PublicIp?: string;
  AllocationId?: string;
  AssociationId?: string;
  Domain?: string;
  PublicIpv4Pool?: string;
  NetworkBorderGroup?: string;
  NetworkInterfaceId?: string;
  NetworkInterfaceOwnerId?: string;
  PrivateIpAddress?: string;
}
export interface AwsEc2SubnetDetails {
  AssignIpv6AddressOnCreation?: boolean;
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  AvailableIpAddressCount?: number;
  CidrBlock?: string;
  DefaultForAz?: boolean;
  MapPublicIpOnLaunch?: boolean;
  OwnerId?: string;
  State?: string;
  SubnetArn?: string;
  SubnetId?: string;
  VpcId?: string;
  Ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[];
}
export interface AwsEc2NetworkAclAssociation {
  NetworkAclAssociationId?: string;
  NetworkAclId?: string;
  SubnetId?: string;
}
export type AwsEc2NetworkAclAssociationList = AwsEc2NetworkAclAssociation[];
export interface IcmpTypeCode {
  Code?: number;
  Type?: number;
}
export interface PortRangeFromTo {
  From?: number;
  To?: number;
}
export interface AwsEc2NetworkAclEntry {
  CidrBlock?: string;
  Egress?: boolean;
  IcmpTypeCode?: IcmpTypeCode;
  Ipv6CidrBlock?: string;
  PortRange?: PortRangeFromTo;
  Protocol?: string;
  RuleAction?: string;
  RuleNumber?: number;
}
export type AwsEc2NetworkAclEntryList = AwsEc2NetworkAclEntry[];
export interface AwsEc2NetworkAclDetails {
  IsDefault?: boolean;
  NetworkAclId?: string;
  OwnerId?: string;
  VpcId?: string;
  Associations?: AwsEc2NetworkAclAssociation[];
  Entries?: AwsEc2NetworkAclEntry[];
}
export interface AvailabilityZone {
  ZoneName?: string;
  SubnetId?: string;
}
export type AvailabilityZones = AvailabilityZone[];
export type SecurityGroups = string[];
export interface LoadBalancerState {
  Code?: string;
  Reason?: string;
}
export interface AwsElbv2LoadBalancerAttribute {
  Key?: string;
  Value?: string;
}
export type AwsElbv2LoadBalancerAttributes = AwsElbv2LoadBalancerAttribute[];
export interface AwsElbv2LoadBalancerDetails {
  AvailabilityZones?: AvailabilityZone[];
  CanonicalHostedZoneId?: string;
  CreatedTime?: string;
  DNSName?: string;
  IpAddressType?: string;
  Scheme?: string;
  SecurityGroups?: string[];
  State?: LoadBalancerState;
  Type?: string;
  VpcId?: string;
  LoadBalancerAttributes?: AwsElbv2LoadBalancerAttribute[];
}
export interface AwsElasticBeanstalkEnvironmentEnvironmentLink {
  EnvironmentName?: string;
  LinkName?: string;
}
export type AwsElasticBeanstalkEnvironmentEnvironmentLinks =
  AwsElasticBeanstalkEnvironmentEnvironmentLink[];
export interface AwsElasticBeanstalkEnvironmentOptionSetting {
  Namespace?: string;
  OptionName?: string;
  ResourceName?: string;
  Value?: string;
}
export type AwsElasticBeanstalkEnvironmentOptionSettings =
  AwsElasticBeanstalkEnvironmentOptionSetting[];
export interface AwsElasticBeanstalkEnvironmentTier {
  Name?: string;
  Type?: string;
  Version?: string;
}
export interface AwsElasticBeanstalkEnvironmentDetails {
  ApplicationName?: string;
  Cname?: string;
  DateCreated?: string;
  DateUpdated?: string;
  Description?: string;
  EndpointUrl?: string;
  EnvironmentArn?: string;
  EnvironmentId?: string;
  EnvironmentLinks?: AwsElasticBeanstalkEnvironmentEnvironmentLink[];
  EnvironmentName?: string;
  OptionSettings?: AwsElasticBeanstalkEnvironmentOptionSetting[];
  PlatformArn?: string;
  SolutionStackName?: string;
  Status?: string;
  Tier?: AwsElasticBeanstalkEnvironmentTier;
  VersionLabel?: string;
}
export interface AwsElasticsearchDomainDomainEndpointOptions {
  EnforceHTTPS?: boolean;
  TLSSecurityPolicy?: string;
}
export interface AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails {
  AvailabilityZoneCount?: number;
}
export interface AwsElasticsearchDomainElasticsearchClusterConfigDetails {
  DedicatedMasterCount?: number;
  DedicatedMasterEnabled?: boolean;
  DedicatedMasterType?: string;
  InstanceCount?: number;
  InstanceType?: string;
  ZoneAwarenessConfig?: AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails;
  ZoneAwarenessEnabled?: boolean;
}
export interface AwsElasticsearchDomainEncryptionAtRestOptions {
  Enabled?: boolean;
  KmsKeyId?: string;
}
export interface AwsElasticsearchDomainLogPublishingOptionsLogConfig {
  CloudWatchLogsLogGroupArn?: string;
  Enabled?: boolean;
}
export interface AwsElasticsearchDomainLogPublishingOptions {
  IndexSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
  SearchSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
  AuditLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
}
export interface AwsElasticsearchDomainNodeToNodeEncryptionOptions {
  Enabled?: boolean;
}
export interface AwsElasticsearchDomainServiceSoftwareOptions {
  AutomatedUpdateDate?: string;
  Cancellable?: boolean;
  CurrentVersion?: string;
  Description?: string;
  NewVersion?: string;
  UpdateAvailable?: boolean;
  UpdateStatus?: string;
}
export interface AwsElasticsearchDomainVPCOptions {
  AvailabilityZones?: string[];
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
  VPCId?: string;
}
export interface AwsElasticsearchDomainDetails {
  AccessPolicies?: string;
  DomainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions;
  DomainId?: string;
  DomainName?: string;
  Endpoint?: string;
  Endpoints?: { [key: string]: string | undefined };
  ElasticsearchVersion?: string;
  ElasticsearchClusterConfig?: AwsElasticsearchDomainElasticsearchClusterConfigDetails;
  EncryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions;
  LogPublishingOptions?: AwsElasticsearchDomainLogPublishingOptions;
  NodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions;
  ServiceSoftwareOptions?: AwsElasticsearchDomainServiceSoftwareOptions;
  VPCOptions?: AwsElasticsearchDomainVPCOptions;
}
export interface AwsS3BucketServerSideEncryptionByDefault {
  SSEAlgorithm?: string;
  KMSMasterKeyID?: string;
}
export interface AwsS3BucketServerSideEncryptionRule {
  ApplyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;
}
export type AwsS3BucketServerSideEncryptionRules = AwsS3BucketServerSideEncryptionRule[];
export interface AwsS3BucketServerSideEncryptionConfiguration {
  Rules?: AwsS3BucketServerSideEncryptionRule[];
}
export interface AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails {
  DaysAfterInitiation?: number;
}
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails {
  Key?: string;
  Value?: string;
}
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails {
  Prefix?: string;
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails;
  Type?: string;
}
export type AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList =
  AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[];
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails {
  Key?: string;
  Value?: string;
}
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails {
  Operands?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[];
  Prefix?: string;
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails;
  Type?: string;
}
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails {
  Predicate?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails;
}
export interface AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails {
  Days?: number;
  StorageClass?: string;
}
export type AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList =
  AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[];
export interface AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails {
  Date?: string;
  Days?: number;
  StorageClass?: string;
}
export type AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList =
  AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[];
export interface AwsS3BucketBucketLifecycleConfigurationRulesDetails {
  AbortIncompleteMultipartUpload?: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails;
  ExpirationDate?: string;
  ExpirationInDays?: number;
  ExpiredObjectDeleteMarker?: boolean;
  Filter?: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails;
  ID?: string;
  NoncurrentVersionExpirationInDays?: number;
  NoncurrentVersionTransitions?: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[];
  Prefix?: string;
  Status?: string;
  Transitions?: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[];
}
export type AwsS3BucketBucketLifecycleConfigurationRulesList =
  AwsS3BucketBucketLifecycleConfigurationRulesDetails[];
export interface AwsS3BucketBucketLifecycleConfigurationDetails {
  Rules?: AwsS3BucketBucketLifecycleConfigurationRulesDetails[];
}
export interface AwsS3AccountPublicAccessBlockDetails {
  BlockPublicAcls?: boolean;
  BlockPublicPolicy?: boolean;
  IgnorePublicAcls?: boolean;
  RestrictPublicBuckets?: boolean;
}
export interface AwsS3BucketLoggingConfiguration {
  DestinationBucketName?: string;
  LogFilePrefix?: string;
}
export interface AwsS3BucketWebsiteConfigurationRedirectTo {
  Hostname?: string;
  Protocol?: string;
}
export interface AwsS3BucketWebsiteConfigurationRoutingRuleCondition {
  HttpErrorCodeReturnedEquals?: string;
  KeyPrefixEquals?: string;
}
export interface AwsS3BucketWebsiteConfigurationRoutingRuleRedirect {
  Hostname?: string;
  HttpRedirectCode?: string;
  Protocol?: string;
  ReplaceKeyPrefixWith?: string;
  ReplaceKeyWith?: string;
}
export interface AwsS3BucketWebsiteConfigurationRoutingRule {
  Condition?: AwsS3BucketWebsiteConfigurationRoutingRuleCondition;
  Redirect?: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect;
}
export type AwsS3BucketWebsiteConfigurationRoutingRules =
  AwsS3BucketWebsiteConfigurationRoutingRule[];
export interface AwsS3BucketWebsiteConfiguration {
  ErrorDocument?: string;
  IndexDocumentSuffix?: string;
  RedirectAllRequestsTo?: AwsS3BucketWebsiteConfigurationRedirectTo;
  RoutingRules?: AwsS3BucketWebsiteConfigurationRoutingRule[];
}
export type AwsS3BucketNotificationConfigurationEvents = string[];
export type AwsS3BucketNotificationConfigurationS3KeyFilterRuleName =
  | "Prefix"
  | "Suffix"
  | (string & {});
export interface AwsS3BucketNotificationConfigurationS3KeyFilterRule {
  Name?: AwsS3BucketNotificationConfigurationS3KeyFilterRuleName;
  Value?: string;
}
export type AwsS3BucketNotificationConfigurationS3KeyFilterRules =
  AwsS3BucketNotificationConfigurationS3KeyFilterRule[];
export interface AwsS3BucketNotificationConfigurationS3KeyFilter {
  FilterRules?: AwsS3BucketNotificationConfigurationS3KeyFilterRule[];
}
export interface AwsS3BucketNotificationConfigurationFilter {
  S3KeyFilter?: AwsS3BucketNotificationConfigurationS3KeyFilter;
}
export interface AwsS3BucketNotificationConfigurationDetail {
  Events?: string[];
  Filter?: AwsS3BucketNotificationConfigurationFilter;
  Destination?: string;
  Type?: string;
}
export type AwsS3BucketNotificationConfigurationDetails =
  AwsS3BucketNotificationConfigurationDetail[];
export interface AwsS3BucketNotificationConfiguration {
  Configurations?: AwsS3BucketNotificationConfigurationDetail[];
}
export interface AwsS3BucketBucketVersioningConfiguration {
  IsMfaDeleteEnabled?: boolean;
  Status?: string;
}
export interface AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails {
  Days?: number;
  Mode?: string;
  Years?: number;
}
export interface AwsS3BucketObjectLockConfigurationRuleDetails {
  DefaultRetention?: AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails;
}
export interface AwsS3BucketObjectLockConfiguration {
  ObjectLockEnabled?: string;
  Rule?: AwsS3BucketObjectLockConfigurationRuleDetails;
}
export interface AwsS3BucketDetails {
  OwnerId?: string;
  OwnerName?: string;
  OwnerAccountId?: string;
  CreatedAt?: string;
  ServerSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;
  BucketLifecycleConfiguration?: AwsS3BucketBucketLifecycleConfigurationDetails;
  PublicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails;
  AccessControlList?: string;
  BucketLoggingConfiguration?: AwsS3BucketLoggingConfiguration;
  BucketWebsiteConfiguration?: AwsS3BucketWebsiteConfiguration;
  BucketNotificationConfiguration?: AwsS3BucketNotificationConfiguration;
  BucketVersioningConfiguration?: AwsS3BucketBucketVersioningConfiguration;
  ObjectLockConfiguration?: AwsS3BucketObjectLockConfiguration;
  Name?: string;
}
export interface AwsS3ObjectDetails {
  LastModified?: string;
  ETag?: string;
  VersionId?: string;
  ContentType?: string;
  ServerSideEncryption?: string;
  SSEKMSKeyId?: string;
}
export interface AwsSecretsManagerSecretRotationRules {
  AutomaticallyAfterDays?: number;
}
export interface AwsSecretsManagerSecretDetails {
  RotationRules?: AwsSecretsManagerSecretRotationRules;
  RotationOccurredWithinFrequency?: boolean;
  KmsKeyId?: string;
  RotationEnabled?: boolean;
  RotationLambdaArn?: string;
  Deleted?: boolean;
  Name?: string;
  Description?: string;
}
export type AwsIamAccessKeyStatus = "Active" | "Inactive" | (string & {});
export interface AwsIamAccessKeySessionContextAttributes {
  MfaAuthenticated?: boolean;
  CreationDate?: string;
}
export interface AwsIamAccessKeySessionContextSessionIssuer {
  Type?: string;
  PrincipalId?: string;
  Arn?: string;
  AccountId?: string;
  UserName?: string;
}
export interface AwsIamAccessKeySessionContext {
  Attributes?: AwsIamAccessKeySessionContextAttributes;
  SessionIssuer?: AwsIamAccessKeySessionContextSessionIssuer;
}
export interface AwsIamAccessKeyDetails {
  UserName?: string;
  Status?: AwsIamAccessKeyStatus;
  CreatedAt?: string;
  PrincipalId?: string;
  PrincipalType?: string;
  PrincipalName?: string;
  AccountId?: string;
  AccessKeyId?: string;
  SessionContext?: AwsIamAccessKeySessionContext;
}
export interface AwsIamAttachedManagedPolicy {
  PolicyName?: string;
  PolicyArn?: string;
}
export type AwsIamAttachedManagedPolicyList = AwsIamAttachedManagedPolicy[];
export interface AwsIamPermissionsBoundary {
  PermissionsBoundaryArn?: string;
  PermissionsBoundaryType?: string;
}
export interface AwsIamUserPolicy {
  PolicyName?: string;
}
export type AwsIamUserPolicyList = AwsIamUserPolicy[];
export interface AwsIamUserDetails {
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];
  CreateDate?: string;
  GroupList?: string[];
  Path?: string;
  PermissionsBoundary?: AwsIamPermissionsBoundary;
  UserId?: string;
  UserName?: string;
  UserPolicyList?: AwsIamUserPolicy[];
}
export interface AwsIamPolicyVersion {
  VersionId?: string;
  IsDefaultVersion?: boolean;
  CreateDate?: string;
}
export type AwsIamPolicyVersionList = AwsIamPolicyVersion[];
export interface AwsIamPolicyDetails {
  AttachmentCount?: number;
  CreateDate?: string;
  DefaultVersionId?: string;
  Description?: string;
  IsAttachable?: boolean;
  Path?: string;
  PermissionsBoundaryUsageCount?: number;
  PolicyId?: string;
  PolicyName?: string;
  PolicyVersionList?: AwsIamPolicyVersion[];
  UpdateDate?: string;
}
export interface AwsApiGatewayV2RouteSettings {
  DetailedMetricsEnabled?: boolean;
  LoggingLevel?: string;
  DataTraceEnabled?: boolean;
  ThrottlingBurstLimit?: number;
  ThrottlingRateLimit?: number;
}
export interface AwsApiGatewayAccessLogSettings {
  Format?: string;
  DestinationArn?: string;
}
export interface AwsApiGatewayV2StageDetails {
  ClientCertificateId?: string;
  CreatedDate?: string;
  Description?: string;
  DefaultRouteSettings?: AwsApiGatewayV2RouteSettings;
  DeploymentId?: string;
  LastUpdatedDate?: string;
  RouteSettings?: AwsApiGatewayV2RouteSettings;
  StageName?: string;
  StageVariables?: { [key: string]: string | undefined };
  AccessLogSettings?: AwsApiGatewayAccessLogSettings;
  AutoDeploy?: boolean;
  LastDeploymentStatusMessage?: string;
  ApiGatewayManaged?: boolean;
}
export interface AwsCorsConfiguration {
  AllowOrigins?: string[];
  AllowCredentials?: boolean;
  ExposeHeaders?: string[];
  MaxAge?: number;
  AllowMethods?: string[];
  AllowHeaders?: string[];
}
export interface AwsApiGatewayV2ApiDetails {
  ApiEndpoint?: string;
  ApiId?: string;
  ApiKeySelectionExpression?: string;
  CreatedDate?: string;
  Description?: string;
  Version?: string;
  Name?: string;
  ProtocolType?: string;
  RouteSelectionExpression?: string;
  CorsConfiguration?: AwsCorsConfiguration;
}
export interface AwsDynamoDbTableAttributeDefinition {
  AttributeName?: string;
  AttributeType?: string;
}
export type AwsDynamoDbTableAttributeDefinitionList = AwsDynamoDbTableAttributeDefinition[];
export interface AwsDynamoDbTableBillingModeSummary {
  BillingMode?: string;
  LastUpdateToPayPerRequestDateTime?: string;
}
export type SizeBytes = number;
export interface AwsDynamoDbTableKeySchema {
  AttributeName?: string;
  KeyType?: string;
}
export type AwsDynamoDbTableKeySchemaList = AwsDynamoDbTableKeySchema[];
export interface AwsDynamoDbTableProjection {
  NonKeyAttributes?: string[];
  ProjectionType?: string;
}
export interface AwsDynamoDbTableProvisionedThroughput {
  LastDecreaseDateTime?: string;
  LastIncreaseDateTime?: string;
  NumberOfDecreasesToday?: number;
  ReadCapacityUnits?: number;
  WriteCapacityUnits?: number;
}
export interface AwsDynamoDbTableGlobalSecondaryIndex {
  Backfilling?: boolean;
  IndexArn?: string;
  IndexName?: string;
  IndexSizeBytes?: number;
  IndexStatus?: string;
  ItemCount?: number;
  KeySchema?: AwsDynamoDbTableKeySchema[];
  Projection?: AwsDynamoDbTableProjection;
  ProvisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;
}
export type AwsDynamoDbTableGlobalSecondaryIndexList = AwsDynamoDbTableGlobalSecondaryIndex[];
export interface AwsDynamoDbTableLocalSecondaryIndex {
  IndexArn?: string;
  IndexName?: string;
  KeySchema?: AwsDynamoDbTableKeySchema[];
  Projection?: AwsDynamoDbTableProjection;
}
export type AwsDynamoDbTableLocalSecondaryIndexList = AwsDynamoDbTableLocalSecondaryIndex[];
export interface AwsDynamoDbTableProvisionedThroughputOverride {
  ReadCapacityUnits?: number;
}
export interface AwsDynamoDbTableReplicaGlobalSecondaryIndex {
  IndexName?: string;
  ProvisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;
}
export type AwsDynamoDbTableReplicaGlobalSecondaryIndexList =
  AwsDynamoDbTableReplicaGlobalSecondaryIndex[];
export interface AwsDynamoDbTableReplica {
  GlobalSecondaryIndexes?: AwsDynamoDbTableReplicaGlobalSecondaryIndex[];
  KmsMasterKeyId?: string;
  ProvisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;
  RegionName?: string;
  ReplicaStatus?: string;
  ReplicaStatusDescription?: string;
}
export type AwsDynamoDbTableReplicaList = AwsDynamoDbTableReplica[];
export interface AwsDynamoDbTableRestoreSummary {
  SourceBackupArn?: string;
  SourceTableArn?: string;
  RestoreDateTime?: string;
  RestoreInProgress?: boolean;
}
export interface AwsDynamoDbTableSseDescription {
  InaccessibleEncryptionDateTime?: string;
  Status?: string;
  SseType?: string;
  KmsMasterKeyArn?: string;
}
export interface AwsDynamoDbTableStreamSpecification {
  StreamEnabled?: boolean;
  StreamViewType?: string;
}
export interface AwsDynamoDbTableDetails {
  AttributeDefinitions?: AwsDynamoDbTableAttributeDefinition[];
  BillingModeSummary?: AwsDynamoDbTableBillingModeSummary;
  CreationDateTime?: string;
  GlobalSecondaryIndexes?: AwsDynamoDbTableGlobalSecondaryIndex[];
  GlobalTableVersion?: string;
  ItemCount?: number;
  KeySchema?: AwsDynamoDbTableKeySchema[];
  LatestStreamArn?: string;
  LatestStreamLabel?: string;
  LocalSecondaryIndexes?: AwsDynamoDbTableLocalSecondaryIndex[];
  ProvisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;
  Replicas?: AwsDynamoDbTableReplica[];
  RestoreSummary?: AwsDynamoDbTableRestoreSummary;
  SseDescription?: AwsDynamoDbTableSseDescription;
  StreamSpecification?: AwsDynamoDbTableStreamSpecification;
  TableId?: string;
  TableName?: string;
  TableSizeBytes?: number;
  TableStatus?: string;
  DeletionProtectionEnabled?: boolean;
}
export interface AwsApiGatewayMethodSettings {
  MetricsEnabled?: boolean;
  LoggingLevel?: string;
  DataTraceEnabled?: boolean;
  ThrottlingBurstLimit?: number;
  ThrottlingRateLimit?: number;
  CachingEnabled?: boolean;
  CacheTtlInSeconds?: number;
  CacheDataEncrypted?: boolean;
  RequireAuthorizationForCacheControl?: boolean;
  UnauthorizedCacheControlHeaderStrategy?: string;
  HttpMethod?: string;
  ResourcePath?: string;
}
export type AwsApiGatewayMethodSettingsList = AwsApiGatewayMethodSettings[];
export interface AwsApiGatewayCanarySettings {
  PercentTraffic?: number;
  DeploymentId?: string;
  StageVariableOverrides?: { [key: string]: string | undefined };
  UseStageCache?: boolean;
}
export interface AwsApiGatewayStageDetails {
  DeploymentId?: string;
  ClientCertificateId?: string;
  StageName?: string;
  Description?: string;
  CacheClusterEnabled?: boolean;
  CacheClusterSize?: string;
  CacheClusterStatus?: string;
  MethodSettings?: AwsApiGatewayMethodSettings[];
  Variables?: { [key: string]: string | undefined };
  DocumentationVersion?: string;
  AccessLogSettings?: AwsApiGatewayAccessLogSettings;
  CanarySettings?: AwsApiGatewayCanarySettings;
  TracingEnabled?: boolean;
  CreatedDate?: string;
  LastUpdatedDate?: string;
  WebAclArn?: string;
}
export interface AwsApiGatewayEndpointConfiguration {
  Types?: string[];
}
export interface AwsApiGatewayRestApiDetails {
  Id?: string;
  Name?: string;
  Description?: string;
  CreatedDate?: string;
  Version?: string;
  BinaryMediaTypes?: string[];
  MinimumCompressionSize?: number;
  ApiKeySource?: string;
  EndpointConfiguration?: AwsApiGatewayEndpointConfiguration;
}
export interface AwsCloudTrailTrailDetails {
  CloudWatchLogsLogGroupArn?: string;
  CloudWatchLogsRoleArn?: string;
  HasCustomEventSelectors?: boolean;
  HomeRegion?: string;
  IncludeGlobalServiceEvents?: boolean;
  IsMultiRegionTrail?: boolean;
  IsOrganizationTrail?: boolean;
  KmsKeyId?: string;
  LogFileValidationEnabled?: boolean;
  Name?: string;
  S3BucketName?: string;
  S3KeyPrefix?: string;
  SnsTopicArn?: string;
  SnsTopicName?: string;
  TrailArn?: string;
}
export interface AwsSsmComplianceSummary {
  Status?: string;
  CompliantCriticalCount?: number;
  CompliantHighCount?: number;
  CompliantMediumCount?: number;
  ExecutionType?: string;
  NonCompliantCriticalCount?: number;
  CompliantInformationalCount?: number;
  NonCompliantInformationalCount?: number;
  CompliantUnspecifiedCount?: number;
  NonCompliantLowCount?: number;
  NonCompliantHighCount?: number;
  CompliantLowCount?: number;
  ComplianceType?: string;
  PatchBaselineId?: string;
  OverallSeverity?: string;
  NonCompliantMediumCount?: number;
  NonCompliantUnspecifiedCount?: number;
  PatchGroup?: string;
}
export interface AwsSsmPatch {
  ComplianceSummary?: AwsSsmComplianceSummary;
}
export interface AwsSsmPatchComplianceDetails {
  Patch?: AwsSsmPatch;
}
export interface AwsCertificateManagerCertificateResourceRecord {
  Name?: string;
  Type?: string;
  Value?: string;
}
export interface AwsCertificateManagerCertificateDomainValidationOption {
  DomainName?: string;
  ResourceRecord?: AwsCertificateManagerCertificateResourceRecord;
  ValidationDomain?: string;
  ValidationEmails?: string[];
  ValidationMethod?: string;
  ValidationStatus?: string;
}
export type AwsCertificateManagerCertificateDomainValidationOptions =
  AwsCertificateManagerCertificateDomainValidationOption[];
export interface AwsCertificateManagerCertificateExtendedKeyUsage {
  Name?: string;
  OId?: string;
}
export type AwsCertificateManagerCertificateExtendedKeyUsages =
  AwsCertificateManagerCertificateExtendedKeyUsage[];
export interface AwsCertificateManagerCertificateKeyUsage {
  Name?: string;
}
export type AwsCertificateManagerCertificateKeyUsages = AwsCertificateManagerCertificateKeyUsage[];
export interface AwsCertificateManagerCertificateOptions {
  CertificateTransparencyLoggingPreference?: string;
}
export interface AwsCertificateManagerCertificateRenewalSummary {
  DomainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[];
  RenewalStatus?: string;
  RenewalStatusReason?: string;
  UpdatedAt?: string;
}
export interface AwsCertificateManagerCertificateDetails {
  CertificateAuthorityArn?: string;
  CreatedAt?: string;
  DomainName?: string;
  DomainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[];
  ExtendedKeyUsages?: AwsCertificateManagerCertificateExtendedKeyUsage[];
  FailureReason?: string;
  ImportedAt?: string;
  InUseBy?: string[];
  IssuedAt?: string;
  Issuer?: string;
  KeyAlgorithm?: string;
  KeyUsages?: AwsCertificateManagerCertificateKeyUsage[];
  NotAfter?: string;
  NotBefore?: string;
  Options?: AwsCertificateManagerCertificateOptions;
  RenewalEligibility?: string;
  RenewalSummary?: AwsCertificateManagerCertificateRenewalSummary;
  Serial?: string;
  SignatureAlgorithm?: string;
  Status?: string;
  Subject?: string;
  SubjectAlternativeNames?: string[];
  Type?: string;
}
export interface AwsRedshiftClusterClusterNode {
  NodeRole?: string;
  PrivateIpAddress?: string;
  PublicIpAddress?: string;
}
export type AwsRedshiftClusterClusterNodes = AwsRedshiftClusterClusterNode[];
export interface AwsRedshiftClusterClusterParameterStatus {
  ParameterName?: string;
  ParameterApplyStatus?: string;
  ParameterApplyErrorDescription?: string;
}
export type AwsRedshiftClusterClusterParameterStatusList =
  AwsRedshiftClusterClusterParameterStatus[];
export interface AwsRedshiftClusterClusterParameterGroup {
  ClusterParameterStatusList?: AwsRedshiftClusterClusterParameterStatus[];
  ParameterApplyStatus?: string;
  ParameterGroupName?: string;
}
export type AwsRedshiftClusterClusterParameterGroups = AwsRedshiftClusterClusterParameterGroup[];
export interface AwsRedshiftClusterClusterSecurityGroup {
  ClusterSecurityGroupName?: string;
  Status?: string;
}
export type AwsRedshiftClusterClusterSecurityGroups = AwsRedshiftClusterClusterSecurityGroup[];
export interface AwsRedshiftClusterClusterSnapshotCopyStatus {
  DestinationRegion?: string;
  ManualSnapshotRetentionPeriod?: number;
  RetentionPeriod?: number;
  SnapshotCopyGrantName?: string;
}
export interface AwsRedshiftClusterDeferredMaintenanceWindow {
  DeferMaintenanceEndTime?: string;
  DeferMaintenanceIdentifier?: string;
  DeferMaintenanceStartTime?: string;
}
export type AwsRedshiftClusterDeferredMaintenanceWindows =
  AwsRedshiftClusterDeferredMaintenanceWindow[];
export interface AwsRedshiftClusterElasticIpStatus {
  ElasticIp?: string;
  Status?: string;
}
export interface AwsRedshiftClusterEndpoint {
  Address?: string;
  Port?: number;
}
export interface AwsRedshiftClusterHsmStatus {
  HsmClientCertificateIdentifier?: string;
  HsmConfigurationIdentifier?: string;
  Status?: string;
}
export interface AwsRedshiftClusterIamRole {
  ApplyStatus?: string;
  IamRoleArn?: string;
}
export type AwsRedshiftClusterIamRoles = AwsRedshiftClusterIamRole[];
export interface AwsRedshiftClusterPendingModifiedValues {
  AutomatedSnapshotRetentionPeriod?: number;
  ClusterIdentifier?: string;
  ClusterType?: string;
  ClusterVersion?: string;
  EncryptionType?: string;
  EnhancedVpcRouting?: boolean;
  MaintenanceTrackName?: string;
  MasterUserPassword?: string;
  NodeType?: string;
  NumberOfNodes?: number;
  PubliclyAccessible?: boolean;
}
export interface AwsRedshiftClusterResizeInfo {
  AllowCancelResize?: boolean;
  ResizeType?: string;
}
export interface AwsRedshiftClusterRestoreStatus {
  CurrentRestoreRateInMegaBytesPerSecond?: number;
  ElapsedTimeInSeconds?: number;
  EstimatedTimeToCompletionInSeconds?: number;
  ProgressInMegaBytes?: number;
  SnapshotSizeInMegaBytes?: number;
  Status?: string;
}
export interface AwsRedshiftClusterVpcSecurityGroup {
  Status?: string;
  VpcSecurityGroupId?: string;
}
export type AwsRedshiftClusterVpcSecurityGroups = AwsRedshiftClusterVpcSecurityGroup[];
export interface AwsRedshiftClusterLoggingStatus {
  BucketName?: string;
  LastFailureMessage?: string;
  LastFailureTime?: string;
  LastSuccessfulDeliveryTime?: string;
  LoggingEnabled?: boolean;
  S3KeyPrefix?: string;
}
export interface AwsRedshiftClusterDetails {
  AllowVersionUpgrade?: boolean;
  AutomatedSnapshotRetentionPeriod?: number;
  AvailabilityZone?: string;
  ClusterAvailabilityStatus?: string;
  ClusterCreateTime?: string;
  ClusterIdentifier?: string;
  ClusterNodes?: AwsRedshiftClusterClusterNode[];
  ClusterParameterGroups?: AwsRedshiftClusterClusterParameterGroup[];
  ClusterPublicKey?: string;
  ClusterRevisionNumber?: string;
  ClusterSecurityGroups?: AwsRedshiftClusterClusterSecurityGroup[];
  ClusterSnapshotCopyStatus?: AwsRedshiftClusterClusterSnapshotCopyStatus;
  ClusterStatus?: string;
  ClusterSubnetGroupName?: string;
  ClusterVersion?: string;
  DBName?: string;
  DeferredMaintenanceWindows?: AwsRedshiftClusterDeferredMaintenanceWindow[];
  ElasticIpStatus?: AwsRedshiftClusterElasticIpStatus;
  ElasticResizeNumberOfNodeOptions?: string;
  Encrypted?: boolean;
  Endpoint?: AwsRedshiftClusterEndpoint;
  EnhancedVpcRouting?: boolean;
  ExpectedNextSnapshotScheduleTime?: string;
  ExpectedNextSnapshotScheduleTimeStatus?: string;
  HsmStatus?: AwsRedshiftClusterHsmStatus;
  IamRoles?: AwsRedshiftClusterIamRole[];
  KmsKeyId?: string;
  MaintenanceTrackName?: string;
  ManualSnapshotRetentionPeriod?: number;
  MasterUsername?: string;
  NextMaintenanceWindowStartTime?: string;
  NodeType?: string;
  NumberOfNodes?: number;
  PendingActions?: string[];
  PendingModifiedValues?: AwsRedshiftClusterPendingModifiedValues;
  PreferredMaintenanceWindow?: string;
  PubliclyAccessible?: boolean;
  ResizeInfo?: AwsRedshiftClusterResizeInfo;
  RestoreStatus?: AwsRedshiftClusterRestoreStatus;
  SnapshotScheduleIdentifier?: string;
  SnapshotScheduleState?: string;
  VpcId?: string;
  VpcSecurityGroups?: AwsRedshiftClusterVpcSecurityGroup[];
  LoggingStatus?: AwsRedshiftClusterLoggingStatus;
}
export interface AwsElbLoadBalancerBackendServerDescription {
  InstancePort?: number;
  PolicyNames?: string[];
}
export type AwsElbLoadBalancerBackendServerDescriptions =
  AwsElbLoadBalancerBackendServerDescription[];
export interface AwsElbLoadBalancerHealthCheck {
  HealthyThreshold?: number;
  Interval?: number;
  Target?: string;
  Timeout?: number;
  UnhealthyThreshold?: number;
}
export interface AwsElbLoadBalancerInstance {
  InstanceId?: string;
}
export type AwsElbLoadBalancerInstances = AwsElbLoadBalancerInstance[];
export interface AwsElbLoadBalancerListener {
  InstancePort?: number;
  InstanceProtocol?: string;
  LoadBalancerPort?: number;
  Protocol?: string;
  SslCertificateId?: string;
}
export interface AwsElbLoadBalancerListenerDescription {
  Listener?: AwsElbLoadBalancerListener;
  PolicyNames?: string[];
}
export type AwsElbLoadBalancerListenerDescriptions = AwsElbLoadBalancerListenerDescription[];
export interface AwsElbLoadBalancerAccessLog {
  EmitInterval?: number;
  Enabled?: boolean;
  S3BucketName?: string;
  S3BucketPrefix?: string;
}
export interface AwsElbLoadBalancerConnectionDraining {
  Enabled?: boolean;
  Timeout?: number;
}
export interface AwsElbLoadBalancerConnectionSettings {
  IdleTimeout?: number;
}
export interface AwsElbLoadBalancerCrossZoneLoadBalancing {
  Enabled?: boolean;
}
export interface AwsElbLoadBalancerAdditionalAttribute {
  Key?: string;
  Value?: string;
}
export type AwsElbLoadBalancerAdditionalAttributeList = AwsElbLoadBalancerAdditionalAttribute[];
export interface AwsElbLoadBalancerAttributes {
  AccessLog?: AwsElbLoadBalancerAccessLog;
  ConnectionDraining?: AwsElbLoadBalancerConnectionDraining;
  ConnectionSettings?: AwsElbLoadBalancerConnectionSettings;
  CrossZoneLoadBalancing?: AwsElbLoadBalancerCrossZoneLoadBalancing;
  AdditionalAttributes?: AwsElbLoadBalancerAdditionalAttribute[];
}
export interface AwsElbAppCookieStickinessPolicy {
  CookieName?: string;
  PolicyName?: string;
}
export type AwsElbAppCookieStickinessPolicies = AwsElbAppCookieStickinessPolicy[];
export interface AwsElbLbCookieStickinessPolicy {
  CookieExpirationPeriod?: number;
  PolicyName?: string;
}
export type AwsElbLbCookieStickinessPolicies = AwsElbLbCookieStickinessPolicy[];
export interface AwsElbLoadBalancerPolicies {
  AppCookieStickinessPolicies?: AwsElbAppCookieStickinessPolicy[];
  LbCookieStickinessPolicies?: AwsElbLbCookieStickinessPolicy[];
  OtherPolicies?: string[];
}
export interface AwsElbLoadBalancerSourceSecurityGroup {
  GroupName?: string;
  OwnerAlias?: string;
}
export interface AwsElbLoadBalancerDetails {
  AvailabilityZones?: string[];
  BackendServerDescriptions?: AwsElbLoadBalancerBackendServerDescription[];
  CanonicalHostedZoneName?: string;
  CanonicalHostedZoneNameID?: string;
  CreatedTime?: string;
  DnsName?: string;
  HealthCheck?: AwsElbLoadBalancerHealthCheck;
  Instances?: AwsElbLoadBalancerInstance[];
  ListenerDescriptions?: AwsElbLoadBalancerListenerDescription[];
  LoadBalancerAttributes?: AwsElbLoadBalancerAttributes;
  LoadBalancerName?: string;
  Policies?: AwsElbLoadBalancerPolicies;
  Scheme?: string;
  SecurityGroups?: string[];
  SourceSecurityGroup?: AwsElbLoadBalancerSourceSecurityGroup;
  Subnets?: string[];
  VpcId?: string;
}
export interface AwsIamGroupPolicy {
  PolicyName?: string;
}
export type AwsIamGroupPolicyList = AwsIamGroupPolicy[];
export interface AwsIamGroupDetails {
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];
  CreateDate?: string;
  GroupId?: string;
  GroupName?: string;
  GroupPolicyList?: AwsIamGroupPolicy[];
  Path?: string;
}
export type AwsIamRoleAssumeRolePolicyDocument = string;
export interface AwsIamInstanceProfileRole {
  Arn?: string;
  AssumeRolePolicyDocument?: string;
  CreateDate?: string;
  Path?: string;
  RoleId?: string;
  RoleName?: string;
}
export type AwsIamInstanceProfileRoles = AwsIamInstanceProfileRole[];
export interface AwsIamInstanceProfile {
  Arn?: string;
  CreateDate?: string;
  InstanceProfileId?: string;
  InstanceProfileName?: string;
  Path?: string;
  Roles?: AwsIamInstanceProfileRole[];
}
export type AwsIamInstanceProfileList = AwsIamInstanceProfile[];
export interface AwsIamRolePolicy {
  PolicyName?: string;
}
export type AwsIamRolePolicyList = AwsIamRolePolicy[];
export interface AwsIamRoleDetails {
  AssumeRolePolicyDocument?: string;
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];
  CreateDate?: string;
  InstanceProfileList?: AwsIamInstanceProfile[];
  PermissionsBoundary?: AwsIamPermissionsBoundary;
  RoleId?: string;
  RoleName?: string;
  RolePolicyList?: AwsIamRolePolicy[];
  MaxSessionDuration?: number;
  Path?: string;
}
export interface AwsKmsKeyDetails {
  AWSAccountId?: string;
  CreationDate?: number;
  KeyId?: string;
  KeyManager?: string;
  KeyState?: string;
  Origin?: string;
  Description?: string;
  KeyRotationStatus?: boolean;
}
export interface AwsLambdaFunctionCode {
  S3Bucket?: string;
  S3Key?: string;
  S3ObjectVersion?: string;
  ZipFile?: string;
}
export interface AwsLambdaFunctionDeadLetterConfig {
  TargetArn?: string;
}
export interface AwsLambdaFunctionEnvironmentError {
  ErrorCode?: string;
  Message?: string;
}
export interface AwsLambdaFunctionEnvironment {
  Variables?: { [key: string]: string | undefined };
  Error?: AwsLambdaFunctionEnvironmentError;
}
export interface AwsLambdaFunctionLayer {
  Arn?: string;
  CodeSize?: number;
}
export type AwsLambdaFunctionLayerList = AwsLambdaFunctionLayer[];
export interface AwsLambdaFunctionTracingConfig {
  Mode?: string;
}
export interface AwsLambdaFunctionVpcConfig {
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
  VpcId?: string;
}
export interface AwsLambdaFunctionDetails {
  Code?: AwsLambdaFunctionCode;
  CodeSha256?: string;
  DeadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;
  Environment?: AwsLambdaFunctionEnvironment;
  FunctionName?: string;
  Handler?: string;
  KmsKeyArn?: string;
  LastModified?: string;
  Layers?: AwsLambdaFunctionLayer[];
  MasterArn?: string;
  MemorySize?: number;
  RevisionId?: string;
  Role?: string;
  Runtime?: string;
  Timeout?: number;
  TracingConfig?: AwsLambdaFunctionTracingConfig;
  VpcConfig?: AwsLambdaFunctionVpcConfig;
  Version?: string;
  Architectures?: string[];
  PackageType?: string;
}
export type AwsLambdaLayerVersionNumber = number;
export interface AwsLambdaLayerVersionDetails {
  Version?: number;
  CompatibleRuntimes?: string[];
  CreatedDate?: string;
}
export interface AwsRdsDbInstanceAssociatedRole {
  RoleArn?: string;
  FeatureName?: string;
  Status?: string;
}
export type AwsRdsDbInstanceAssociatedRoles = AwsRdsDbInstanceAssociatedRole[];
export interface AwsRdsDbInstanceEndpoint {
  Address?: string;
  Port?: number;
  HostedZoneId?: string;
}
export interface AwsRdsDbInstanceVpcSecurityGroup {
  VpcSecurityGroupId?: string;
  Status?: string;
}
export type AwsRdsDbInstanceVpcSecurityGroups = AwsRdsDbInstanceVpcSecurityGroup[];
export interface AwsRdsDbParameterGroup {
  DbParameterGroupName?: string;
  ParameterApplyStatus?: string;
}
export type AwsRdsDbParameterGroups = AwsRdsDbParameterGroup[];
export interface AwsRdsDbSubnetGroupSubnetAvailabilityZone {
  Name?: string;
}
export interface AwsRdsDbSubnetGroupSubnet {
  SubnetIdentifier?: string;
  SubnetAvailabilityZone?: AwsRdsDbSubnetGroupSubnetAvailabilityZone;
  SubnetStatus?: string;
}
export type AwsRdsDbSubnetGroupSubnets = AwsRdsDbSubnetGroupSubnet[];
export interface AwsRdsDbSubnetGroup {
  DbSubnetGroupName?: string;
  DbSubnetGroupDescription?: string;
  VpcId?: string;
  SubnetGroupStatus?: string;
  Subnets?: AwsRdsDbSubnetGroupSubnet[];
  DbSubnetGroupArn?: string;
}
export interface AwsRdsPendingCloudWatchLogsExports {
  LogTypesToEnable?: string[];
  LogTypesToDisable?: string[];
}
export interface AwsRdsDbProcessorFeature {
  Name?: string;
  Value?: string;
}
export type AwsRdsDbProcessorFeatures = AwsRdsDbProcessorFeature[];
export interface AwsRdsDbPendingModifiedValues {
  DbInstanceClass?: string;
  AllocatedStorage?: number;
  MasterUserPassword?: string;
  Port?: number;
  BackupRetentionPeriod?: number;
  MultiAZ?: boolean;
  EngineVersion?: string;
  LicenseModel?: string;
  Iops?: number;
  DbInstanceIdentifier?: string;
  StorageType?: string;
  CaCertificateIdentifier?: string;
  DbSubnetGroupName?: string;
  PendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports;
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];
}
export interface AwsRdsDbOptionGroupMembership {
  OptionGroupName?: string;
  Status?: string;
}
export type AwsRdsDbOptionGroupMemberships = AwsRdsDbOptionGroupMembership[];
export interface AwsRdsDbStatusInfo {
  StatusType?: string;
  Normal?: boolean;
  Status?: string;
  Message?: string;
}
export type AwsRdsDbStatusInfos = AwsRdsDbStatusInfo[];
export interface AwsRdsDbDomainMembership {
  Domain?: string;
  Status?: string;
  Fqdn?: string;
  IamRoleName?: string;
}
export type AwsRdsDbDomainMemberships = AwsRdsDbDomainMembership[];
export interface AwsRdsDbInstanceDetails {
  AssociatedRoles?: AwsRdsDbInstanceAssociatedRole[];
  CACertificateIdentifier?: string;
  DBClusterIdentifier?: string;
  DBInstanceIdentifier?: string;
  DBInstanceClass?: string;
  DbInstancePort?: number;
  DbiResourceId?: string;
  DBName?: string;
  DeletionProtection?: boolean;
  Endpoint?: AwsRdsDbInstanceEndpoint;
  Engine?: string;
  EngineVersion?: string;
  IAMDatabaseAuthenticationEnabled?: boolean;
  InstanceCreateTime?: string;
  KmsKeyId?: string;
  PubliclyAccessible?: boolean;
  StorageEncrypted?: boolean;
  TdeCredentialArn?: string;
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];
  MultiAz?: boolean;
  EnhancedMonitoringResourceArn?: string;
  DbInstanceStatus?: string;
  MasterUsername?: string;
  AllocatedStorage?: number;
  PreferredBackupWindow?: string;
  BackupRetentionPeriod?: number;
  DbSecurityGroups?: string[];
  DbParameterGroups?: AwsRdsDbParameterGroup[];
  AvailabilityZone?: string;
  DbSubnetGroup?: AwsRdsDbSubnetGroup;
  PreferredMaintenanceWindow?: string;
  PendingModifiedValues?: AwsRdsDbPendingModifiedValues;
  LatestRestorableTime?: string;
  AutoMinorVersionUpgrade?: boolean;
  ReadReplicaSourceDBInstanceIdentifier?: string;
  ReadReplicaDBInstanceIdentifiers?: string[];
  ReadReplicaDBClusterIdentifiers?: string[];
  LicenseModel?: string;
  Iops?: number;
  OptionGroupMemberships?: AwsRdsDbOptionGroupMembership[];
  CharacterSetName?: string;
  SecondaryAvailabilityZone?: string;
  StatusInfos?: AwsRdsDbStatusInfo[];
  StorageType?: string;
  DomainMemberships?: AwsRdsDbDomainMembership[];
  CopyTagsToSnapshot?: boolean;
  MonitoringInterval?: number;
  MonitoringRoleArn?: string;
  PromotionTier?: number;
  Timezone?: string;
  PerformanceInsightsEnabled?: boolean;
  PerformanceInsightsKmsKeyId?: string;
  PerformanceInsightsRetentionPeriod?: number;
  EnabledCloudWatchLogsExports?: string[];
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];
  ListenerEndpoint?: AwsRdsDbInstanceEndpoint;
  MaxAllocatedStorage?: number;
}
export interface AwsSnsTopicSubscription {
  Endpoint?: string;
  Protocol?: string;
}
export type AwsSnsTopicSubscriptionList = AwsSnsTopicSubscription[];
export interface AwsSnsTopicDetails {
  KmsMasterKeyId?: string;
  Subscription?: AwsSnsTopicSubscription[];
  TopicName?: string;
  Owner?: string;
  SqsSuccessFeedbackRoleArn?: string;
  SqsFailureFeedbackRoleArn?: string;
  ApplicationSuccessFeedbackRoleArn?: string;
  FirehoseSuccessFeedbackRoleArn?: string;
  FirehoseFailureFeedbackRoleArn?: string;
  HttpSuccessFeedbackRoleArn?: string;
  HttpFailureFeedbackRoleArn?: string;
}
export interface AwsSqsQueueDetails {
  KmsDataKeyReusePeriodSeconds?: number;
  KmsMasterKeyId?: string;
  QueueName?: string;
  DeadLetterTargetArn?: string;
}
export interface WafAction {
  Type?: string;
}
export interface WafExcludedRule {
  RuleId?: string;
}
export type WafExcludedRuleList = WafExcludedRule[];
export interface WafOverrideAction {
  Type?: string;
}
export interface AwsWafWebAclRule {
  Action?: WafAction;
  ExcludedRules?: WafExcludedRule[];
  OverrideAction?: WafOverrideAction;
  Priority?: number;
  RuleId?: string;
  Type?: string;
}
export type AwsWafWebAclRuleList = AwsWafWebAclRule[];
export interface AwsWafWebAclDetails {
  Name?: string;
  DefaultAction?: string;
  Rules?: AwsWafWebAclRule[];
  WebAclId?: string;
}
export interface AwsRdsDbSnapshotDetails {
  DbSnapshotIdentifier?: string;
  DbInstanceIdentifier?: string;
  SnapshotCreateTime?: string;
  Engine?: string;
  AllocatedStorage?: number;
  Status?: string;
  Port?: number;
  AvailabilityZone?: string;
  VpcId?: string;
  InstanceCreateTime?: string;
  MasterUsername?: string;
  EngineVersion?: string;
  LicenseModel?: string;
  SnapshotType?: string;
  Iops?: number;
  OptionGroupName?: string;
  PercentProgress?: number;
  SourceRegion?: string;
  SourceDbSnapshotIdentifier?: string;
  StorageType?: string;
  TdeCredentialArn?: string;
  Encrypted?: boolean;
  KmsKeyId?: string;
  Timezone?: string;
  IamDatabaseAuthenticationEnabled?: boolean;
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];
  DbiResourceId?: string;
}
export interface AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute {
  AttributeName?: string;
  AttributeValues?: string[];
}
export type AwsRdsDbClusterSnapshotDbClusterSnapshotAttributes =
  AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute[];
export interface AwsRdsDbClusterSnapshotDetails {
  AvailabilityZones?: string[];
  SnapshotCreateTime?: string;
  Engine?: string;
  AllocatedStorage?: number;
  Status?: string;
  Port?: number;
  VpcId?: string;
  ClusterCreateTime?: string;
  MasterUsername?: string;
  EngineVersion?: string;
  LicenseModel?: string;
  SnapshotType?: string;
  PercentProgress?: number;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  DbClusterIdentifier?: string;
  DbClusterSnapshotIdentifier?: string;
  IamDatabaseAuthenticationEnabled?: boolean;
  DbClusterSnapshotAttributes?: AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute[];
}
export interface AwsRdsDbClusterAssociatedRole {
  RoleArn?: string;
  Status?: string;
}
export type AwsRdsDbClusterAssociatedRoles = AwsRdsDbClusterAssociatedRole[];
export interface AwsRdsDbClusterOptionGroupMembership {
  DbClusterOptionGroupName?: string;
  Status?: string;
}
export type AwsRdsDbClusterOptionGroupMemberships = AwsRdsDbClusterOptionGroupMembership[];
export interface AwsRdsDbClusterMember {
  IsClusterWriter?: boolean;
  PromotionTier?: number;
  DbInstanceIdentifier?: string;
  DbClusterParameterGroupStatus?: string;
}
export type AwsRdsDbClusterMembers = AwsRdsDbClusterMember[];
export interface AwsRdsDbClusterDetails {
  AllocatedStorage?: number;
  AvailabilityZones?: string[];
  BackupRetentionPeriod?: number;
  DatabaseName?: string;
  Status?: string;
  Endpoint?: string;
  ReaderEndpoint?: string;
  CustomEndpoints?: string[];
  MultiAz?: boolean;
  Engine?: string;
  EngineVersion?: string;
  Port?: number;
  MasterUsername?: string;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  ReadReplicaIdentifiers?: string[];
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];
  HostedZoneId?: string;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  DbClusterResourceId?: string;
  AssociatedRoles?: AwsRdsDbClusterAssociatedRole[];
  ClusterCreateTime?: string;
  EnabledCloudWatchLogsExports?: string[];
  EngineMode?: string;
  DeletionProtection?: boolean;
  HttpEndpointEnabled?: boolean;
  ActivityStreamStatus?: string;
  CopyTagsToSnapshot?: boolean;
  CrossAccountClone?: boolean;
  DomainMemberships?: AwsRdsDbDomainMembership[];
  DbClusterParameterGroup?: string;
  DbSubnetGroup?: string;
  DbClusterOptionGroupMemberships?: AwsRdsDbClusterOptionGroupMembership[];
  DbClusterIdentifier?: string;
  DbClusterMembers?: AwsRdsDbClusterMember[];
  IamDatabaseAuthenticationEnabled?: boolean;
  AutoMinorVersionUpgrade?: boolean;
}
export interface AwsEcsClusterClusterSettingsDetails {
  Name?: string;
  Value?: string;
}
export type AwsEcsClusterClusterSettingsList = AwsEcsClusterClusterSettingsDetails[];
export interface AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails {
  CloudWatchEncryptionEnabled?: boolean;
  CloudWatchLogGroupName?: string;
  S3BucketName?: string;
  S3EncryptionEnabled?: boolean;
  S3KeyPrefix?: string;
}
export interface AwsEcsClusterConfigurationExecuteCommandConfigurationDetails {
  KmsKeyId?: string;
  LogConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails;
  Logging?: string;
}
export interface AwsEcsClusterConfigurationDetails {
  ExecuteCommandConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationDetails;
}
export interface AwsEcsClusterDefaultCapacityProviderStrategyDetails {
  Base?: number;
  CapacityProvider?: string;
  Weight?: number;
}
export type AwsEcsClusterDefaultCapacityProviderStrategyList =
  AwsEcsClusterDefaultCapacityProviderStrategyDetails[];
export interface AwsEcsClusterDetails {
  ClusterArn?: string;
  ActiveServicesCount?: number;
  CapacityProviders?: string[];
  ClusterSettings?: AwsEcsClusterClusterSettingsDetails[];
  Configuration?: AwsEcsClusterConfigurationDetails;
  DefaultCapacityProviderStrategy?: AwsEcsClusterDefaultCapacityProviderStrategyDetails[];
  ClusterName?: string;
  RegisteredContainerInstancesCount?: number;
  RunningTasksCount?: number;
  Status?: string;
}
export interface AwsMountPoint {
  SourceVolume?: string;
  ContainerPath?: string;
}
export type AwsMountPointList = AwsMountPoint[];
export interface AwsEcsContainerDetails {
  Name?: string;
  Image?: string;
  MountPoints?: AwsMountPoint[];
  Privileged?: boolean;
}
export interface AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails {
  Condition?: string;
  ContainerName?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsDependsOnList =
  AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails[];
export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails {
  Name?: string;
  Value?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList =
  AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails[];
export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails {
  Type?: string;
  Value?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList =
  AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails[];
export interface AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails {
  Hostname?: string;
  IpAddress?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList =
  AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails[];
export interface AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails {
  Options?: { [key: string]: string | undefined };
  Type?: string;
}
export interface AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails {
  Command?: string[];
  Interval?: number;
  Retries?: number;
  StartPeriod?: number;
  Timeout?: number;
}
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails {
  Add?: string[];
  Drop?: string[];
}
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails {
  ContainerPath?: string;
  HostPath?: string;
  Permissions?: string[];
}
export type AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList =
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[];
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails {
  ContainerPath?: string;
  MountOptions?: string[];
  Size?: number;
}
export type AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList =
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[];
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails {
  Capabilities?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails;
  Devices?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[];
  InitProcessEnabled?: boolean;
  MaxSwap?: number;
  SharedMemorySize?: number;
  Swappiness?: number;
  Tmpfs?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[];
}
export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails {
  Name?: string;
  ValueFrom?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList =
  AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[];
export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails {
  LogDriver?: string;
  Options?: { [key: string]: string | undefined };
  SecretOptions?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[];
}
export interface AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails {
  ContainerPath?: string;
  ReadOnly?: boolean;
  SourceVolume?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsMountPointsList =
  AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails[];
export interface AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails {
  ContainerPort?: number;
  HostPort?: number;
  Protocol?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList =
  AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails[];
export interface AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails {
  CredentialsParameter?: string;
}
export interface AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails {
  Type?: string;
  Value?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList =
  AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails[];
export interface AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails {
  Name?: string;
  ValueFrom?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsSecretsList =
  AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails[];
export interface AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails {
  Namespace?: string;
  Value?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList =
  AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails[];
export interface AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails {
  HardLimit?: number;
  Name?: string;
  SoftLimit?: number;
}
export type AwsEcsTaskDefinitionContainerDefinitionsUlimitsList =
  AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails[];
export interface AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails {
  ReadOnly?: boolean;
  SourceContainer?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList =
  AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails[];
export interface AwsEcsTaskDefinitionContainerDefinitionsDetails {
  Command?: string[];
  Cpu?: number;
  DependsOn?: AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails[];
  DisableNetworking?: boolean;
  DnsSearchDomains?: string[];
  DnsServers?: string[];
  DockerLabels?: { [key: string]: string | undefined };
  DockerSecurityOptions?: string[];
  EntryPoint?: string[];
  Environment?: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails[];
  EnvironmentFiles?: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails[];
  Essential?: boolean;
  ExtraHosts?: AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails[];
  FirelensConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails;
  HealthCheck?: AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails;
  Hostname?: string;
  Image?: string;
  Interactive?: boolean;
  Links?: string[];
  LinuxParameters?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails;
  LogConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails;
  Memory?: number;
  MemoryReservation?: number;
  MountPoints?: AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails[];
  Name?: string;
  PortMappings?: AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails[];
  Privileged?: boolean;
  PseudoTerminal?: boolean;
  ReadonlyRootFilesystem?: boolean;
  RepositoryCredentials?: AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails;
  ResourceRequirements?: AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails[];
  Secrets?: AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails[];
  StartTimeout?: number;
  StopTimeout?: number;
  SystemControls?: AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails[];
  Ulimits?: AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails[];
  User?: string;
  VolumesFrom?: AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails[];
  WorkingDirectory?: string;
}
export type AwsEcsTaskDefinitionContainerDefinitionsList =
  AwsEcsTaskDefinitionContainerDefinitionsDetails[];
export interface AwsEcsTaskDefinitionInferenceAcceleratorsDetails {
  DeviceName?: string;
  DeviceType?: string;
}
export type AwsEcsTaskDefinitionInferenceAcceleratorsList =
  AwsEcsTaskDefinitionInferenceAcceleratorsDetails[];
export interface AwsEcsTaskDefinitionPlacementConstraintsDetails {
  Expression?: string;
  Type?: string;
}
export type AwsEcsTaskDefinitionPlacementConstraintsList =
  AwsEcsTaskDefinitionPlacementConstraintsDetails[];
export interface AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails {
  Name?: string;
  Value?: string;
}
export type AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList =
  AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[];
export interface AwsEcsTaskDefinitionProxyConfigurationDetails {
  ContainerName?: string;
  ProxyConfigurationProperties?: AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[];
  Type?: string;
}
export interface AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails {
  Autoprovision?: boolean;
  Driver?: string;
  DriverOpts?: { [key: string]: string | undefined };
  Labels?: { [key: string]: string | undefined };
  Scope?: string;
}
export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails {
  AccessPointId?: string;
  Iam?: string;
}
export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails {
  AuthorizationConfig?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails;
  FilesystemId?: string;
  RootDirectory?: string;
  TransitEncryption?: string;
  TransitEncryptionPort?: number;
}
export interface AwsEcsTaskDefinitionVolumesHostDetails {
  SourcePath?: string;
}
export interface AwsEcsTaskDefinitionVolumesDetails {
  DockerVolumeConfiguration?: AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails;
  EfsVolumeConfiguration?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails;
  Host?: AwsEcsTaskDefinitionVolumesHostDetails;
  Name?: string;
}
export type AwsEcsTaskDefinitionVolumesList = AwsEcsTaskDefinitionVolumesDetails[];
export interface AwsEcsTaskDefinitionDetails {
  ContainerDefinitions?: AwsEcsTaskDefinitionContainerDefinitionsDetails[];
  Cpu?: string;
  ExecutionRoleArn?: string;
  Family?: string;
  InferenceAccelerators?: AwsEcsTaskDefinitionInferenceAcceleratorsDetails[];
  IpcMode?: string;
  Memory?: string;
  NetworkMode?: string;
  PidMode?: string;
  PlacementConstraints?: AwsEcsTaskDefinitionPlacementConstraintsDetails[];
  ProxyConfiguration?: AwsEcsTaskDefinitionProxyConfigurationDetails;
  RequiresCompatibilities?: string[];
  TaskRoleArn?: string;
  Volumes?: AwsEcsTaskDefinitionVolumesDetails[];
  Status?: string;
}
export interface VolumeMount {
  Name?: string;
  MountPath?: string;
}
export type VolumeMountList = VolumeMount[];
export interface ContainerDetails {
  ContainerRuntime?: string;
  Name?: string;
  ImageId?: string;
  ImageName?: string;
  LaunchedAt?: string;
  VolumeMounts?: VolumeMount[];
  Privileged?: boolean;
}
export interface AwsRdsEventSubscriptionDetails {
  CustSubscriptionId?: string;
  CustomerAwsId?: string;
  Enabled?: boolean;
  EventCategoriesList?: string[];
  EventSubscriptionArn?: string;
  SnsTopicArn?: string;
  SourceIdsList?: string[];
  SourceType?: string;
  Status?: string;
  SubscriptionCreationTime?: string;
}
export interface AwsEcsServiceCapacityProviderStrategyDetails {
  Base?: number;
  CapacityProvider?: string;
  Weight?: number;
}
export type AwsEcsServiceCapacityProviderStrategyList =
  AwsEcsServiceCapacityProviderStrategyDetails[];
export interface AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails {
  Enable?: boolean;
  Rollback?: boolean;
}
export interface AwsEcsServiceDeploymentConfigurationDetails {
  DeploymentCircuitBreaker?: AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails;
  MaximumPercent?: number;
  MinimumHealthyPercent?: number;
}
export interface AwsEcsServiceDeploymentControllerDetails {
  Type?: string;
}
export interface AwsEcsServiceLoadBalancersDetails {
  ContainerName?: string;
  ContainerPort?: number;
  LoadBalancerName?: string;
  TargetGroupArn?: string;
}
export type AwsEcsServiceLoadBalancersList = AwsEcsServiceLoadBalancersDetails[];
export interface AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails {
  AssignPublicIp?: string;
  SecurityGroups?: string[];
  Subnets?: string[];
}
export interface AwsEcsServiceNetworkConfigurationDetails {
  AwsVpcConfiguration?: AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails;
}
export interface AwsEcsServicePlacementConstraintsDetails {
  Expression?: string;
  Type?: string;
}
export type AwsEcsServicePlacementConstraintsList = AwsEcsServicePlacementConstraintsDetails[];
export interface AwsEcsServicePlacementStrategiesDetails {
  Field?: string;
  Type?: string;
}
export type AwsEcsServicePlacementStrategiesList = AwsEcsServicePlacementStrategiesDetails[];
export interface AwsEcsServiceServiceRegistriesDetails {
  ContainerName?: string;
  ContainerPort?: number;
  Port?: number;
  RegistryArn?: string;
}
export type AwsEcsServiceServiceRegistriesList = AwsEcsServiceServiceRegistriesDetails[];
export interface AwsEcsServiceDetails {
  CapacityProviderStrategy?: AwsEcsServiceCapacityProviderStrategyDetails[];
  Cluster?: string;
  DeploymentConfiguration?: AwsEcsServiceDeploymentConfigurationDetails;
  DeploymentController?: AwsEcsServiceDeploymentControllerDetails;
  DesiredCount?: number;
  EnableEcsManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  HealthCheckGracePeriodSeconds?: number;
  LaunchType?: string;
  LoadBalancers?: AwsEcsServiceLoadBalancersDetails[];
  Name?: string;
  NetworkConfiguration?: AwsEcsServiceNetworkConfigurationDetails;
  PlacementConstraints?: AwsEcsServicePlacementConstraintsDetails[];
  PlacementStrategies?: AwsEcsServicePlacementStrategiesDetails[];
  PlatformVersion?: string;
  PropagateTags?: string;
  Role?: string;
  SchedulingStrategy?: string;
  ServiceArn?: string;
  ServiceName?: string;
  ServiceRegistries?: AwsEcsServiceServiceRegistriesDetails[];
  TaskDefinition?: string;
}
export interface AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails {
  DeleteOnTermination?: boolean;
  Encrypted?: boolean;
  Iops?: number;
  SnapshotId?: string;
  VolumeSize?: number;
  VolumeType?: string;
}
export interface AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails {
  DeviceName?: string;
  Ebs?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails;
  NoDevice?: boolean;
  VirtualName?: string;
}
export type AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList =
  AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[];
export interface AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails {
  Enabled?: boolean;
}
export interface AwsAutoScalingLaunchConfigurationMetadataOptions {
  HttpEndpoint?: string;
  HttpPutResponseHopLimit?: number;
  HttpTokens?: string;
}
export interface AwsAutoScalingLaunchConfigurationDetails {
  AssociatePublicIpAddress?: boolean;
  BlockDeviceMappings?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[];
  ClassicLinkVpcId?: string;
  ClassicLinkVpcSecurityGroups?: string[];
  CreatedTime?: string;
  EbsOptimized?: boolean;
  IamInstanceProfile?: string;
  ImageId?: string;
  InstanceMonitoring?: AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails;
  InstanceType?: string;
  KernelId?: string;
  KeyName?: string;
  LaunchConfigurationName?: string;
  PlacementTenancy?: string;
  RamdiskId?: string;
  SecurityGroups?: string[];
  SpotPrice?: string;
  UserData?: string;
  MetadataOptions?: AwsAutoScalingLaunchConfigurationMetadataOptions;
}
export interface AwsEc2VpnConnectionVgwTelemetryDetails {
  AcceptedRouteCount?: number;
  CertificateArn?: string;
  LastStatusChange?: string;
  OutsideIpAddress?: string;
  Status?: string;
  StatusMessage?: string;
}
export type AwsEc2VpnConnectionVgwTelemetryList = AwsEc2VpnConnectionVgwTelemetryDetails[];
export interface AwsEc2VpnConnectionOptionsTunnelOptionsDetails {
  DpdTimeoutSeconds?: number;
  IkeVersions?: string[];
  OutsideIpAddress?: string;
  Phase1DhGroupNumbers?: number[];
  Phase1EncryptionAlgorithms?: string[];
  Phase1IntegrityAlgorithms?: string[];
  Phase1LifetimeSeconds?: number;
  Phase2DhGroupNumbers?: number[];
  Phase2EncryptionAlgorithms?: string[];
  Phase2IntegrityAlgorithms?: string[];
  Phase2LifetimeSeconds?: number;
  PreSharedKey?: string;
  RekeyFuzzPercentage?: number;
  RekeyMarginTimeSeconds?: number;
  ReplayWindowSize?: number;
  TunnelInsideCidr?: string;
}
export type AwsEc2VpnConnectionOptionsTunnelOptionsList =
  AwsEc2VpnConnectionOptionsTunnelOptionsDetails[];
export interface AwsEc2VpnConnectionOptionsDetails {
  StaticRoutesOnly?: boolean;
  TunnelOptions?: AwsEc2VpnConnectionOptionsTunnelOptionsDetails[];
}
export interface AwsEc2VpnConnectionRoutesDetails {
  DestinationCidrBlock?: string;
  State?: string;
}
export type AwsEc2VpnConnectionRoutesList = AwsEc2VpnConnectionRoutesDetails[];
export interface AwsEc2VpnConnectionDetails {
  VpnConnectionId?: string;
  State?: string;
  CustomerGatewayId?: string;
  CustomerGatewayConfiguration?: string;
  Type?: string;
  VpnGatewayId?: string;
  Category?: string;
  VgwTelemetry?: AwsEc2VpnConnectionVgwTelemetryDetails[];
  Options?: AwsEc2VpnConnectionOptionsDetails;
  Routes?: AwsEc2VpnConnectionRoutesDetails[];
  TransitGatewayId?: string;
}
export interface AwsEcrContainerImageDetails {
  RegistryId?: string;
  RepositoryName?: string;
  Architecture?: string;
  ImageDigest?: string;
  ImageTags?: string[];
  ImagePublishedAt?: string;
}
export interface AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails {
  Enabled?: boolean;
  KmsKeyId?: string;
}
export interface AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails {
  Enabled?: boolean;
}
export interface AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails {
  AutomatedUpdateDate?: string;
  Cancellable?: boolean;
  CurrentVersion?: string;
  Description?: string;
  NewVersion?: string;
  UpdateAvailable?: boolean;
  UpdateStatus?: string;
  OptionalDeployment?: boolean;
}
export interface AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails {
  AvailabilityZoneCount?: number;
}
export interface AwsOpenSearchServiceDomainClusterConfigDetails {
  InstanceCount?: number;
  WarmEnabled?: boolean;
  WarmCount?: number;
  DedicatedMasterEnabled?: boolean;
  ZoneAwarenessConfig?: AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails;
  DedicatedMasterCount?: number;
  InstanceType?: string;
  WarmType?: string;
  ZoneAwarenessEnabled?: boolean;
  DedicatedMasterType?: string;
}
export interface AwsOpenSearchServiceDomainDomainEndpointOptionsDetails {
  CustomEndpointCertificateArn?: string;
  CustomEndpointEnabled?: boolean;
  EnforceHTTPS?: boolean;
  CustomEndpoint?: string;
  TLSSecurityPolicy?: string;
}
export interface AwsOpenSearchServiceDomainVpcOptionsDetails {
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
}
export interface AwsOpenSearchServiceDomainLogPublishingOption {
  CloudWatchLogsLogGroupArn?: string;
  Enabled?: boolean;
}
export interface AwsOpenSearchServiceDomainLogPublishingOptionsDetails {
  IndexSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
  SearchSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
  AuditLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
}
export interface AwsOpenSearchServiceDomainMasterUserOptionsDetails {
  MasterUserArn?: string;
  MasterUserName?: string;
  MasterUserPassword?: string;
}
export interface AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails {
  Enabled?: boolean;
  InternalUserDatabaseEnabled?: boolean;
  MasterUserOptions?: AwsOpenSearchServiceDomainMasterUserOptionsDetails;
}
export interface AwsOpenSearchServiceDomainDetails {
  Arn?: string;
  AccessPolicies?: string;
  DomainName?: string;
  Id?: string;
  DomainEndpoint?: string;
  EngineVersion?: string;
  EncryptionAtRestOptions?: AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails;
  NodeToNodeEncryptionOptions?: AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails;
  ServiceSoftwareOptions?: AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails;
  ClusterConfig?: AwsOpenSearchServiceDomainClusterConfigDetails;
  DomainEndpointOptions?: AwsOpenSearchServiceDomainDomainEndpointOptionsDetails;
  VpcOptions?: AwsOpenSearchServiceDomainVpcOptionsDetails;
  LogPublishingOptions?: AwsOpenSearchServiceDomainLogPublishingOptionsDetails;
  DomainEndpoints?: { [key: string]: string | undefined };
  AdvancedSecurityOptions?: AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails;
}
export interface AwsEc2VpcEndpointServiceServiceTypeDetails {
  ServiceType?: string;
}
export type AwsEc2VpcEndpointServiceServiceTypeList = AwsEc2VpcEndpointServiceServiceTypeDetails[];
export interface AwsEc2VpcEndpointServiceDetails {
  AcceptanceRequired?: boolean;
  AvailabilityZones?: string[];
  BaseEndpointDnsNames?: string[];
  ManagesVpcEndpoints?: boolean;
  GatewayLoadBalancerArns?: string[];
  NetworkLoadBalancerArns?: string[];
  PrivateDnsName?: string;
  ServiceId?: string;
  ServiceName?: string;
  ServiceState?: string;
  ServiceType?: AwsEc2VpcEndpointServiceServiceTypeDetails[];
}
export interface AwsXrayEncryptionConfigDetails {
  KeyId?: string;
  Status?: string;
  Type?: string;
}
export interface AwsWafRateBasedRuleMatchPredicate {
  DataId?: string;
  Negated?: boolean;
  Type?: string;
}
export type AwsWafRateBasedRuleMatchPredicateList = AwsWafRateBasedRuleMatchPredicate[];
export interface AwsWafRateBasedRuleDetails {
  MetricName?: string;
  Name?: string;
  RateKey?: string;
  RateLimit?: number;
  RuleId?: string;
  MatchPredicates?: AwsWafRateBasedRuleMatchPredicate[];
}
export interface AwsWafRegionalRateBasedRuleMatchPredicate {
  DataId?: string;
  Negated?: boolean;
  Type?: string;
}
export type AwsWafRegionalRateBasedRuleMatchPredicateList =
  AwsWafRegionalRateBasedRuleMatchPredicate[];
export interface AwsWafRegionalRateBasedRuleDetails {
  MetricName?: string;
  Name?: string;
  RateKey?: string;
  RateLimit?: number;
  RuleId?: string;
  MatchPredicates?: AwsWafRegionalRateBasedRuleMatchPredicate[];
}
export interface AwsEcrRepositoryImageScanningConfigurationDetails {
  ScanOnPush?: boolean;
}
export interface AwsEcrRepositoryLifecyclePolicyDetails {
  LifecyclePolicyText?: string;
  RegistryId?: string;
}
export interface AwsEcrRepositoryDetails {
  Arn?: string;
  ImageScanningConfiguration?: AwsEcrRepositoryImageScanningConfigurationDetails;
  ImageTagMutability?: string;
  LifecyclePolicy?: AwsEcrRepositoryLifecyclePolicyDetails;
  RepositoryName?: string;
  RepositoryPolicyText?: string;
}
export interface AwsEksClusterResourcesVpcConfigDetails {
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
  EndpointPublicAccess?: boolean;
}
export interface AwsEksClusterLoggingClusterLoggingDetails {
  Enabled?: boolean;
  Types?: string[];
}
export type AwsEksClusterLoggingClusterLoggingList = AwsEksClusterLoggingClusterLoggingDetails[];
export interface AwsEksClusterLoggingDetails {
  ClusterLogging?: AwsEksClusterLoggingClusterLoggingDetails[];
}
export interface AwsEksClusterDetails {
  Arn?: string;
  CertificateAuthorityData?: string;
  ClusterStatus?: string;
  Endpoint?: string;
  Name?: string;
  ResourcesVpcConfig?: AwsEksClusterResourcesVpcConfigDetails;
  RoleArn?: string;
  Version?: string;
  Logging?: AwsEksClusterLoggingDetails;
}
export interface FirewallPolicyStatefulRuleGroupReferencesDetails {
  ResourceArn?: string;
}
export type FirewallPolicyStatefulRuleGroupReferencesList =
  FirewallPolicyStatefulRuleGroupReferencesDetails[];
export interface StatelessCustomPublishMetricActionDimension {
  Value?: string;
}
export type StatelessCustomPublishMetricActionDimensionsList =
  StatelessCustomPublishMetricActionDimension[];
export interface StatelessCustomPublishMetricAction {
  Dimensions?: StatelessCustomPublishMetricActionDimension[];
}
export interface StatelessCustomActionDefinition {
  PublishMetricAction?: StatelessCustomPublishMetricAction;
}
export interface FirewallPolicyStatelessCustomActionsDetails {
  ActionDefinition?: StatelessCustomActionDefinition;
  ActionName?: string;
}
export type FirewallPolicyStatelessCustomActionsList =
  FirewallPolicyStatelessCustomActionsDetails[];
export interface FirewallPolicyStatelessRuleGroupReferencesDetails {
  Priority?: number;
  ResourceArn?: string;
}
export type FirewallPolicyStatelessRuleGroupReferencesList =
  FirewallPolicyStatelessRuleGroupReferencesDetails[];
export interface FirewallPolicyDetails {
  StatefulRuleGroupReferences?: FirewallPolicyStatefulRuleGroupReferencesDetails[];
  StatelessCustomActions?: FirewallPolicyStatelessCustomActionsDetails[];
  StatelessDefaultActions?: string[];
  StatelessFragmentDefaultActions?: string[];
  StatelessRuleGroupReferences?: FirewallPolicyStatelessRuleGroupReferencesDetails[];
}
export interface AwsNetworkFirewallFirewallPolicyDetails {
  FirewallPolicy?: FirewallPolicyDetails;
  FirewallPolicyArn?: string;
  FirewallPolicyId?: string;
  FirewallPolicyName?: string;
  Description?: string;
}
export interface AwsNetworkFirewallFirewallSubnetMappingsDetails {
  SubnetId?: string;
}
export type AwsNetworkFirewallFirewallSubnetMappingsList =
  AwsNetworkFirewallFirewallSubnetMappingsDetails[];
export interface AwsNetworkFirewallFirewallDetails {
  DeleteProtection?: boolean;
  Description?: string;
  FirewallArn?: string;
  FirewallId?: string;
  FirewallName?: string;
  FirewallPolicyArn?: string;
  FirewallPolicyChangeProtection?: boolean;
  SubnetChangeProtection?: boolean;
  SubnetMappings?: AwsNetworkFirewallFirewallSubnetMappingsDetails[];
  VpcId?: string;
}
export interface RuleGroupVariablesIpSetsDetails {
  Definition?: string[];
}
export interface RuleGroupVariablesPortSetsDetails {
  Definition?: string[];
}
export interface RuleGroupVariables {
  IpSets?: RuleGroupVariablesIpSetsDetails;
  PortSets?: RuleGroupVariablesPortSetsDetails;
}
export interface RuleGroupSourceListDetails {
  GeneratedRulesType?: string;
  TargetTypes?: string[];
  Targets?: string[];
}
export interface RuleGroupSourceStatefulRulesHeaderDetails {
  Destination?: string;
  DestinationPort?: string;
  Direction?: string;
  Protocol?: string;
  Source?: string;
  SourcePort?: string;
}
export type RuleGroupSourceStatefulRulesRuleOptionsSettingsList = string[];
export interface RuleGroupSourceStatefulRulesOptionsDetails {
  Keyword?: string;
  Settings?: string[];
}
export type RuleGroupSourceStatefulRulesOptionsList = RuleGroupSourceStatefulRulesOptionsDetails[];
export interface RuleGroupSourceStatefulRulesDetails {
  Action?: string;
  Header?: RuleGroupSourceStatefulRulesHeaderDetails;
  RuleOptions?: RuleGroupSourceStatefulRulesOptionsDetails[];
}
export type RuleGroupSourceStatefulRulesList = RuleGroupSourceStatefulRulesDetails[];
export interface RuleGroupSourceCustomActionsDetails {
  ActionDefinition?: StatelessCustomActionDefinition;
  ActionName?: string;
}
export type RuleGroupSourceCustomActionsList = RuleGroupSourceCustomActionsDetails[];
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts {
  FromPort?: number;
  ToPort?: number;
}
export type RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsList =
  RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts[];
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinations {
  AddressDefinition?: string;
}
export type RuleGroupSourceStatelessRuleMatchAttributesDestinationsList =
  RuleGroupSourceStatelessRuleMatchAttributesDestinations[];
export type RuleGroupSourceStatelessRuleMatchAttributesProtocolsList = number[];
export interface RuleGroupSourceStatelessRuleMatchAttributesSourcePorts {
  FromPort?: number;
  ToPort?: number;
}
export type RuleGroupSourceStatelessRuleMatchAttributesSourcePortsList =
  RuleGroupSourceStatelessRuleMatchAttributesSourcePorts[];
export interface RuleGroupSourceStatelessRuleMatchAttributesSources {
  AddressDefinition?: string;
}
export type RuleGroupSourceStatelessRuleMatchAttributesSourcesList =
  RuleGroupSourceStatelessRuleMatchAttributesSources[];
export interface RuleGroupSourceStatelessRuleMatchAttributesTcpFlags {
  Flags?: string[];
  Masks?: string[];
}
export type RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsList =
  RuleGroupSourceStatelessRuleMatchAttributesTcpFlags[];
export interface RuleGroupSourceStatelessRuleMatchAttributes {
  DestinationPorts?: RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts[];
  Destinations?: RuleGroupSourceStatelessRuleMatchAttributesDestinations[];
  Protocols?: number[];
  SourcePorts?: RuleGroupSourceStatelessRuleMatchAttributesSourcePorts[];
  Sources?: RuleGroupSourceStatelessRuleMatchAttributesSources[];
  TcpFlags?: RuleGroupSourceStatelessRuleMatchAttributesTcpFlags[];
}
export interface RuleGroupSourceStatelessRuleDefinition {
  Actions?: string[];
  MatchAttributes?: RuleGroupSourceStatelessRuleMatchAttributes;
}
export interface RuleGroupSourceStatelessRulesDetails {
  Priority?: number;
  RuleDefinition?: RuleGroupSourceStatelessRuleDefinition;
}
export type RuleGroupSourceStatelessRulesList = RuleGroupSourceStatelessRulesDetails[];
export interface RuleGroupSourceStatelessRulesAndCustomActionsDetails {
  CustomActions?: RuleGroupSourceCustomActionsDetails[];
  StatelessRules?: RuleGroupSourceStatelessRulesDetails[];
}
export interface RuleGroupSource {
  RulesSourceList?: RuleGroupSourceListDetails;
  RulesString?: string;
  StatefulRules?: RuleGroupSourceStatefulRulesDetails[];
  StatelessRulesAndCustomActions?: RuleGroupSourceStatelessRulesAndCustomActionsDetails;
}
export interface RuleGroupDetails {
  RuleVariables?: RuleGroupVariables;
  RulesSource?: RuleGroupSource;
}
export interface AwsNetworkFirewallRuleGroupDetails {
  Capacity?: number;
  Description?: string;
  RuleGroup?: RuleGroupDetails;
  RuleGroupArn?: string;
  RuleGroupId?: string;
  RuleGroupName?: string;
  Type?: string;
}
export interface AwsRdsDbSecurityGroupEc2SecurityGroup {
  Ec2SecurityGroupId?: string;
  Ec2SecurityGroupName?: string;
  Ec2SecurityGroupOwnerId?: string;
  Status?: string;
}
export type AwsRdsDbSecurityGroupEc2SecurityGroups = AwsRdsDbSecurityGroupEc2SecurityGroup[];
export interface AwsRdsDbSecurityGroupIpRange {
  CidrIp?: string;
  Status?: string;
}
export type AwsRdsDbSecurityGroupIpRanges = AwsRdsDbSecurityGroupIpRange[];
export interface AwsRdsDbSecurityGroupDetails {
  DbSecurityGroupArn?: string;
  DbSecurityGroupDescription?: string;
  DbSecurityGroupName?: string;
  Ec2SecurityGroups?: AwsRdsDbSecurityGroupEc2SecurityGroup[];
  IpRanges?: AwsRdsDbSecurityGroupIpRange[];
  OwnerId?: string;
  VpcId?: string;
}
export interface AwsKinesisStreamStreamEncryptionDetails {
  EncryptionType?: string;
  KeyId?: string;
}
export interface AwsKinesisStreamDetails {
  Name?: string;
  Arn?: string;
  StreamEncryption?: AwsKinesisStreamStreamEncryptionDetails;
  ShardCount?: number;
  RetentionPeriodHours?: number;
}
export interface AwsEc2TransitGatewayDetails {
  Id?: string;
  Description?: string;
  DefaultRouteTablePropagation?: string;
  AutoAcceptSharedAttachments?: string;
  DefaultRouteTableAssociation?: string;
  TransitGatewayCidrBlocks?: string[];
  AssociationDefaultRouteTableId?: string;
  PropagationDefaultRouteTableId?: string;
  VpnEcmpSupport?: string;
  DnsSupport?: string;
  MulticastSupport?: string;
  AmazonSideAsn?: number;
}
export interface AwsEfsAccessPointPosixUserDetails {
  Gid?: string;
  SecondaryGids?: string[];
  Uid?: string;
}
export interface AwsEfsAccessPointRootDirectoryCreationInfoDetails {
  OwnerGid?: string;
  OwnerUid?: string;
  Permissions?: string;
}
export interface AwsEfsAccessPointRootDirectoryDetails {
  CreationInfo?: AwsEfsAccessPointRootDirectoryCreationInfoDetails;
  Path?: string;
}
export interface AwsEfsAccessPointDetails {
  AccessPointId?: string;
  Arn?: string;
  ClientToken?: string;
  FileSystemId?: string;
  PosixUser?: AwsEfsAccessPointPosixUserDetails;
  RootDirectory?: AwsEfsAccessPointRootDirectoryDetails;
}
export interface AwsCloudFormationStackDriftInformationDetails {
  StackDriftStatus?: string;
}
export interface AwsCloudFormationStackOutputsDetails {
  Description?: string;
  OutputKey?: string;
  OutputValue?: string;
}
export type AwsCloudFormationStackOutputsList = AwsCloudFormationStackOutputsDetails[];
export interface AwsCloudFormationStackDetails {
  Capabilities?: string[];
  CreationTime?: string;
  Description?: string;
  DisableRollback?: boolean;
  DriftInformation?: AwsCloudFormationStackDriftInformationDetails;
  EnableTerminationProtection?: boolean;
  LastUpdatedTime?: string;
  NotificationArns?: string[];
  Outputs?: AwsCloudFormationStackOutputsDetails[];
  RoleArn?: string;
  StackId?: string;
  StackName?: string;
  StackStatus?: string;
  StackStatusReason?: string;
  TimeoutInMinutes?: number;
}
export interface AwsCloudWatchAlarmDimensionsDetails {
  Name?: string;
  Value?: string;
}
export type AwsCloudWatchAlarmDimensionsList = AwsCloudWatchAlarmDimensionsDetails[];
export interface AwsCloudWatchAlarmDetails {
  ActionsEnabled?: boolean;
  AlarmActions?: string[];
  AlarmArn?: string;
  AlarmConfigurationUpdatedTimestamp?: string;
  AlarmDescription?: string;
  AlarmName?: string;
  ComparisonOperator?: string;
  DatapointsToAlarm?: number;
  Dimensions?: AwsCloudWatchAlarmDimensionsDetails[];
  EvaluateLowSampleCountPercentile?: string;
  EvaluationPeriods?: number;
  ExtendedStatistic?: string;
  InsufficientDataActions?: string[];
  MetricName?: string;
  Namespace?: string;
  OkActions?: string[];
  Period?: number;
  Statistic?: string;
  Threshold?: number;
  ThresholdMetricId?: string;
  TreatMissingData?: string;
  Unit?: string;
}
export interface VpcInfoCidrBlockSetDetails {
  CidrBlock?: string;
}
export type VpcInfoCidrBlockSetList = VpcInfoCidrBlockSetDetails[];
export interface VpcInfoIpv6CidrBlockSetDetails {
  Ipv6CidrBlock?: string;
}
export type VpcInfoIpv6CidrBlockSetList = VpcInfoIpv6CidrBlockSetDetails[];
export interface VpcInfoPeeringOptionsDetails {
  AllowDnsResolutionFromRemoteVpc?: boolean;
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
export interface AwsEc2VpcPeeringConnectionVpcInfoDetails {
  CidrBlock?: string;
  CidrBlockSet?: VpcInfoCidrBlockSetDetails[];
  Ipv6CidrBlockSet?: VpcInfoIpv6CidrBlockSetDetails[];
  OwnerId?: string;
  PeeringOptions?: VpcInfoPeeringOptionsDetails;
  Region?: string;
  VpcId?: string;
}
export interface AwsEc2VpcPeeringConnectionStatusDetails {
  Code?: string;
  Message?: string;
}
export interface AwsEc2VpcPeeringConnectionDetails {
  AccepterVpcInfo?: AwsEc2VpcPeeringConnectionVpcInfoDetails;
  ExpirationTime?: string;
  RequesterVpcInfo?: AwsEc2VpcPeeringConnectionVpcInfoDetails;
  Status?: AwsEc2VpcPeeringConnectionStatusDetails;
  VpcPeeringConnectionId?: string;
}
export interface AwsWafRegionalRuleGroupRulesActionDetails {
  Type?: string;
}
export interface AwsWafRegionalRuleGroupRulesDetails {
  Action?: AwsWafRegionalRuleGroupRulesActionDetails;
  Priority?: number;
  RuleId?: string;
  Type?: string;
}
export type AwsWafRegionalRuleGroupRulesList = AwsWafRegionalRuleGroupRulesDetails[];
export interface AwsWafRegionalRuleGroupDetails {
  MetricName?: string;
  Name?: string;
  RuleGroupId?: string;
  Rules?: AwsWafRegionalRuleGroupRulesDetails[];
}
export interface AwsWafRegionalRulePredicateListDetails {
  DataId?: string;
  Negated?: boolean;
  Type?: string;
}
export type AwsWafRegionalRulePredicateList = AwsWafRegionalRulePredicateListDetails[];
export interface AwsWafRegionalRuleDetails {
  MetricName?: string;
  Name?: string;
  PredicateList?: AwsWafRegionalRulePredicateListDetails[];
  RuleId?: string;
}
export interface AwsWafRegionalWebAclRulesListActionDetails {
  Type?: string;
}
export interface AwsWafRegionalWebAclRulesListOverrideActionDetails {
  Type?: string;
}
export interface AwsWafRegionalWebAclRulesListDetails {
  Action?: AwsWafRegionalWebAclRulesListActionDetails;
  OverrideAction?: AwsWafRegionalWebAclRulesListOverrideActionDetails;
  Priority?: number;
  RuleId?: string;
  Type?: string;
}
export type AwsWafRegionalWebAclRulesList = AwsWafRegionalWebAclRulesListDetails[];
export interface AwsWafRegionalWebAclDetails {
  DefaultAction?: string;
  MetricName?: string;
  Name?: string;
  RulesList?: AwsWafRegionalWebAclRulesListDetails[];
  WebAclId?: string;
}
export interface AwsWafRulePredicateListDetails {
  DataId?: string;
  Negated?: boolean;
  Type?: string;
}
export type AwsWafRulePredicateList = AwsWafRulePredicateListDetails[];
export interface AwsWafRuleDetails {
  MetricName?: string;
  Name?: string;
  PredicateList?: AwsWafRulePredicateListDetails[];
  RuleId?: string;
}
export interface AwsWafRuleGroupRulesActionDetails {
  Type?: string;
}
export interface AwsWafRuleGroupRulesDetails {
  Action?: AwsWafRuleGroupRulesActionDetails;
  Priority?: number;
  RuleId?: string;
  Type?: string;
}
export type AwsWafRuleGroupRulesList = AwsWafRuleGroupRulesDetails[];
export interface AwsWafRuleGroupDetails {
  MetricName?: string;
  Name?: string;
  RuleGroupId?: string;
  Rules?: AwsWafRuleGroupRulesDetails[];
}
export interface AwsEcsTaskVolumeHostDetails {
  SourcePath?: string;
}
export interface AwsEcsTaskVolumeDetails {
  Name?: string;
  Host?: AwsEcsTaskVolumeHostDetails;
}
export type AwsEcsTaskVolumeDetailsList = AwsEcsTaskVolumeDetails[];
export type AwsEcsContainerDetailsList = AwsEcsContainerDetails[];
export interface AwsEcsTaskDetails {
  ClusterArn?: string;
  TaskDefinitionArn?: string;
  Version?: string;
  CreatedAt?: string;
  StartedAt?: string;
  StartedBy?: string;
  Group?: string;
  Volumes?: AwsEcsTaskVolumeDetails[];
  Containers?: AwsEcsContainerDetails[];
}
export interface AwsBackupBackupVaultNotificationsDetails {
  BackupVaultEvents?: string[];
  SnsTopicArn?: string;
}
export interface AwsBackupBackupVaultDetails {
  BackupVaultArn?: string;
  BackupVaultName?: string;
  EncryptionKeyArn?: string;
  Notifications?: AwsBackupBackupVaultNotificationsDetails;
  AccessPolicy?: string;
}
export interface AwsBackupBackupPlanAdvancedBackupSettingsDetails {
  BackupOptions?: { [key: string]: string | undefined };
  ResourceType?: string;
}
export type AwsBackupBackupPlanAdvancedBackupSettingsList =
  AwsBackupBackupPlanAdvancedBackupSettingsDetails[];
export interface AwsBackupBackupPlanLifecycleDetails {
  DeleteAfterDays?: number;
  MoveToColdStorageAfterDays?: number;
}
export interface AwsBackupBackupPlanRuleCopyActionsDetails {
  DestinationBackupVaultArn?: string;
  Lifecycle?: AwsBackupBackupPlanLifecycleDetails;
}
export type AwsBackupBackupPlanRuleCopyActionsList = AwsBackupBackupPlanRuleCopyActionsDetails[];
export interface AwsBackupBackupPlanRuleDetails {
  TargetBackupVault?: string;
  StartWindowMinutes?: number;
  ScheduleExpression?: string;
  RuleName?: string;
  RuleId?: string;
  EnableContinuousBackup?: boolean;
  CompletionWindowMinutes?: number;
  CopyActions?: AwsBackupBackupPlanRuleCopyActionsDetails[];
  Lifecycle?: AwsBackupBackupPlanLifecycleDetails;
}
export type AwsBackupBackupPlanRuleList = AwsBackupBackupPlanRuleDetails[];
export interface AwsBackupBackupPlanBackupPlanDetails {
  BackupPlanName?: string;
  AdvancedBackupSettings?: AwsBackupBackupPlanAdvancedBackupSettingsDetails[];
  BackupPlanRule?: AwsBackupBackupPlanRuleDetails[];
}
export interface AwsBackupBackupPlanDetails {
  BackupPlan?: AwsBackupBackupPlanBackupPlanDetails;
  BackupPlanArn?: string;
  BackupPlanId?: string;
  VersionId?: string;
}
export interface AwsBackupRecoveryPointCalculatedLifecycleDetails {
  DeleteAt?: string;
  MoveToColdStorageAt?: string;
}
export interface AwsBackupRecoveryPointCreatedByDetails {
  BackupPlanArn?: string;
  BackupPlanId?: string;
  BackupPlanVersion?: string;
  BackupRuleId?: string;
}
export interface AwsBackupRecoveryPointLifecycleDetails {
  DeleteAfterDays?: number;
  MoveToColdStorageAfterDays?: number;
}
export interface AwsBackupRecoveryPointDetails {
  BackupSizeInBytes?: number;
  BackupVaultArn?: string;
  BackupVaultName?: string;
  CalculatedLifecycle?: AwsBackupRecoveryPointCalculatedLifecycleDetails;
  CompletionDate?: string;
  CreatedBy?: AwsBackupRecoveryPointCreatedByDetails;
  CreationDate?: string;
  EncryptionKeyArn?: string;
  IamRoleArn?: string;
  IsEncrypted?: boolean;
  LastRestoreTime?: string;
  Lifecycle?: AwsBackupRecoveryPointLifecycleDetails;
  RecoveryPointArn?: string;
  ResourceArn?: string;
  ResourceType?: string;
  SourceBackupVaultArn?: string;
  Status?: string;
  StatusMessage?: string;
  StorageClass?: string;
}
export interface AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails {
  DeleteOnTermination?: boolean;
  Encrypted?: boolean;
  Iops?: number;
  KmsKeyId?: string;
  SnapshotId?: string;
  Throughput?: number;
  VolumeSize?: number;
  VolumeType?: string;
}
export interface AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails {
  DeviceName?: string;
  Ebs?: AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails;
  NoDevice?: string;
  VirtualName?: string;
}
export type AwsEc2LaunchTemplateDataBlockDeviceMappingSetList =
  AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails[];
export interface AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails {
  CapacityReservationId?: string;
  CapacityReservationResourceGroupArn?: string;
}
export interface AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails {
  CapacityReservationPreference?: string;
  CapacityReservationTarget?: AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails;
}
export interface AwsEc2LaunchTemplateDataCpuOptionsDetails {
  CoreCount?: number;
  ThreadsPerCore?: number;
}
export interface AwsEc2LaunchTemplateDataCreditSpecificationDetails {
  CpuCredits?: string;
}
export interface AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails {
  Type?: string;
}
export type AwsEc2LaunchTemplateDataElasticGpuSpecificationSetList =
  AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails[];
export interface AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails {
  Count?: number;
  Type?: string;
}
export type AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetList =
  AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails[];
export interface AwsEc2LaunchTemplateDataEnclaveOptionsDetails {
  Enabled?: boolean;
}
export interface AwsEc2LaunchTemplateDataHibernationOptionsDetails {
  Configured?: boolean;
}
export interface AwsEc2LaunchTemplateDataIamInstanceProfileDetails {
  Arn?: string;
  Name?: string;
}
export interface AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails {
  BlockDurationMinutes?: number;
  InstanceInterruptionBehavior?: string;
  MaxPrice?: string;
  SpotInstanceType?: string;
  ValidUntil?: string;
}
export interface AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails {
  MarketType?: string;
  SpotOptions?: AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails {
  Max?: number;
  Min?: number;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails {
  Max?: number;
  Min?: number;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails {
  Max?: number;
  Min?: number;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails {
  Max?: number;
  Min?: number;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails {
  Max?: number;
  Min?: number;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails {
  Max?: number;
  Min?: number;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails {
  Max?: number;
  Min?: number;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails {
  Max?: number;
  Min?: number;
}
export interface AwsEc2LaunchTemplateDataInstanceRequirementsDetails {
  AcceleratorCount?: AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails;
  AcceleratorManufacturers?: string[];
  AcceleratorNames?: string[];
  AcceleratorTotalMemoryMiB?: AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails;
  AcceleratorTypes?: string[];
  BareMetal?: string;
  BaselineEbsBandwidthMbps?: AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails;
  BurstablePerformance?: string;
  CpuManufacturers?: string[];
  ExcludedInstanceTypes?: string[];
  InstanceGenerations?: string[];
  LocalStorage?: string;
  LocalStorageTypes?: string[];
  MemoryGiBPerVCpu?: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails;
  MemoryMiB?: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails;
  NetworkInterfaceCount?: AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails;
  OnDemandMaxPricePercentageOverLowestPrice?: number;
  RequireHibernateSupport?: boolean;
  SpotMaxPricePercentageOverLowestPrice?: number;
  TotalLocalStorageGB?: AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails;
  VCpuCount?: AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails;
}
export interface AwsEc2LaunchTemplateDataLicenseSetDetails {
  LicenseConfigurationArn?: string;
}
export type AwsEc2LaunchTemplateDataLicenseSetList = AwsEc2LaunchTemplateDataLicenseSetDetails[];
export interface AwsEc2LaunchTemplateDataMaintenanceOptionsDetails {
  AutoRecovery?: string;
}
export interface AwsEc2LaunchTemplateDataMetadataOptionsDetails {
  HttpEndpoint?: string;
  HttpProtocolIpv6?: string;
  HttpTokens?: string;
  HttpPutResponseHopLimit?: number;
  InstanceMetadataTags?: string;
}
export interface AwsEc2LaunchTemplateDataMonitoringDetails {
  Enabled?: boolean;
}
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails {
  Ipv4Prefix?: string;
}
export type AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesList =
  AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails[];
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails {
  Ipv6Address?: string;
}
export type AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesList =
  AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails[];
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails {
  Ipv6Prefix?: string;
}
export type AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesList =
  AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails[];
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails {
  Primary?: boolean;
  PrivateIpAddress?: string;
}
export type AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesList =
  AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails[];
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails {
  AssociateCarrierIpAddress?: boolean;
  AssociatePublicIpAddress?: boolean;
  DeleteOnTermination?: boolean;
  Description?: string;
  DeviceIndex?: number;
  Groups?: string[];
  InterfaceType?: string;
  Ipv4PrefixCount?: number;
  Ipv4Prefixes?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails[];
  Ipv6AddressCount?: number;
  Ipv6Addresses?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails[];
  Ipv6PrefixCount?: number;
  Ipv6Prefixes?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails[];
  NetworkCardIndex?: number;
  NetworkInterfaceId?: string;
  PrivateIpAddress?: string;
  PrivateIpAddresses?: AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails[];
  SecondaryPrivateIpAddressCount?: number;
  SubnetId?: string;
}
export type AwsEc2LaunchTemplateDataNetworkInterfaceSetList =
  AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails[];
export interface AwsEc2LaunchTemplateDataPlacementDetails {
  Affinity?: string;
  AvailabilityZone?: string;
  GroupName?: string;
  HostId?: string;
  HostResourceGroupArn?: string;
  PartitionNumber?: number;
  SpreadDomain?: string;
  Tenancy?: string;
}
export interface AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails {
  EnableResourceNameDnsAAAARecord?: boolean;
  EnableResourceNameDnsARecord?: boolean;
  HostnameType?: string;
}
export interface AwsEc2LaunchTemplateDataDetails {
  BlockDeviceMappingSet?: AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails[];
  CapacityReservationSpecification?: AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails;
  CpuOptions?: AwsEc2LaunchTemplateDataCpuOptionsDetails;
  CreditSpecification?: AwsEc2LaunchTemplateDataCreditSpecificationDetails;
  DisableApiStop?: boolean;
  DisableApiTermination?: boolean;
  EbsOptimized?: boolean;
  ElasticGpuSpecificationSet?: AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails[];
  ElasticInferenceAcceleratorSet?: AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails[];
  EnclaveOptions?: AwsEc2LaunchTemplateDataEnclaveOptionsDetails;
  HibernationOptions?: AwsEc2LaunchTemplateDataHibernationOptionsDetails;
  IamInstanceProfile?: AwsEc2LaunchTemplateDataIamInstanceProfileDetails;
  ImageId?: string;
  InstanceInitiatedShutdownBehavior?: string;
  InstanceMarketOptions?: AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails;
  InstanceRequirements?: AwsEc2LaunchTemplateDataInstanceRequirementsDetails;
  InstanceType?: string;
  KernelId?: string;
  KeyName?: string;
  LicenseSet?: AwsEc2LaunchTemplateDataLicenseSetDetails[];
  MaintenanceOptions?: AwsEc2LaunchTemplateDataMaintenanceOptionsDetails;
  MetadataOptions?: AwsEc2LaunchTemplateDataMetadataOptionsDetails;
  Monitoring?: AwsEc2LaunchTemplateDataMonitoringDetails;
  NetworkInterfaceSet?: AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails[];
  Placement?: AwsEc2LaunchTemplateDataPlacementDetails;
  PrivateDnsNameOptions?: AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails;
  RamDiskId?: string;
  SecurityGroupIdSet?: string[];
  SecurityGroupSet?: string[];
  UserData?: string;
}
export interface AwsEc2LaunchTemplateDetails {
  LaunchTemplateName?: string;
  Id?: string;
  LaunchTemplateData?: AwsEc2LaunchTemplateDataDetails;
  DefaultVersionNumber?: number;
  LatestVersionNumber?: number;
}
export interface AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails {
  MinimumInstanceMetadataServiceVersion?: string;
}
export interface AwsSageMakerNotebookInstanceDetails {
  AcceleratorTypes?: string[];
  AdditionalCodeRepositories?: string[];
  DefaultCodeRepository?: string;
  DirectInternetAccess?: string;
  FailureReason?: string;
  InstanceMetadataServiceConfiguration?: AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails;
  InstanceType?: string;
  KmsKeyId?: string;
  NetworkInterfaceId?: string;
  NotebookInstanceArn?: string;
  NotebookInstanceLifecycleConfigName?: string;
  NotebookInstanceName?: string;
  NotebookInstanceStatus?: string;
  PlatformIdentifier?: string;
  RoleArn?: string;
  RootAccess?: string;
  SecurityGroups?: string[];
  SubnetId?: string;
  Url?: string;
  VolumeSizeInGB?: number;
}
export interface AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails {
  ImmunityTime?: number;
}
export interface AwsWafv2WebAclCaptchaConfigDetails {
  ImmunityTimeProperty?: AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails;
}
export interface AwsWafv2CustomHttpHeader {
  Name?: string;
  Value?: string;
}
export type AwsWafv2InsertHeadersList = AwsWafv2CustomHttpHeader[];
export interface AwsWafv2CustomRequestHandlingDetails {
  InsertHeaders?: AwsWafv2CustomHttpHeader[];
}
export interface AwsWafv2ActionAllowDetails {
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}
export interface AwsWafv2CustomResponseDetails {
  CustomResponseBodyKey?: string;
  ResponseCode?: number;
  ResponseHeaders?: AwsWafv2CustomHttpHeader[];
}
export interface AwsWafv2ActionBlockDetails {
  CustomResponse?: AwsWafv2CustomResponseDetails;
}
export interface AwsWafv2WebAclActionDetails {
  Allow?: AwsWafv2ActionAllowDetails;
  Block?: AwsWafv2ActionBlockDetails;
}
export interface AwsWafv2RulesActionCaptchaDetails {
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}
export interface AwsWafv2RulesActionCountDetails {
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}
export interface AwsWafv2RulesActionDetails {
  Allow?: AwsWafv2ActionAllowDetails;
  Block?: AwsWafv2ActionBlockDetails;
  Captcha?: AwsWafv2RulesActionCaptchaDetails;
  Count?: AwsWafv2RulesActionCountDetails;
}
export interface AwsWafv2VisibilityConfigDetails {
  CloudWatchMetricsEnabled?: boolean;
  MetricName?: string;
  SampledRequestsEnabled?: boolean;
}
export interface AwsWafv2RulesDetails {
  Action?: AwsWafv2RulesActionDetails;
  Name?: string;
  OverrideAction?: string;
  Priority?: number;
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
}
export type AwsWafv2RulesList = AwsWafv2RulesDetails[];
export interface AwsWafv2WebAclDetails {
  Name?: string;
  Arn?: string;
  ManagedbyFirewallManager?: boolean;
  Id?: string;
  Capacity?: number;
  CaptchaConfig?: AwsWafv2WebAclCaptchaConfigDetails;
  DefaultAction?: AwsWafv2WebAclActionDetails;
  Description?: string;
  Rules?: AwsWafv2RulesDetails[];
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
}
export interface AwsWafv2RuleGroupDetails {
  Capacity?: number;
  Description?: string;
  Id?: string;
  Name?: string;
  Arn?: string;
  Rules?: AwsWafv2RulesDetails[];
  Scope?: string;
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
}
export interface AssociationStateDetails {
  State?: string;
  StatusMessage?: string;
}
export interface AssociationSetDetails {
  AssociationState?: AssociationStateDetails;
  GatewayId?: string;
  Main?: boolean;
  RouteTableAssociationId?: string;
  RouteTableId?: string;
  SubnetId?: string;
}
export type AssociationSetList = AssociationSetDetails[];
export interface PropagatingVgwSetDetails {
  GatewayId?: string;
}
export type PropagatingVgwSetList = PropagatingVgwSetDetails[];
export interface RouteSetDetails {
  CarrierGatewayId?: string;
  CoreNetworkArn?: string;
  DestinationCidrBlock?: string;
  DestinationIpv6CidrBlock?: string;
  DestinationPrefixListId?: string;
  EgressOnlyInternetGatewayId?: string;
  GatewayId?: string;
  InstanceId?: string;
  InstanceOwnerId?: string;
  LocalGatewayId?: string;
  NatGatewayId?: string;
  NetworkInterfaceId?: string;
  Origin?: string;
  State?: string;
  TransitGatewayId?: string;
  VpcPeeringConnectionId?: string;
}
export type RouteSetList = RouteSetDetails[];
export interface AwsEc2RouteTableDetails {
  AssociationSet?: AssociationSetDetails[];
  OwnerId?: string;
  PropagatingVgwSet?: PropagatingVgwSetDetails[];
  RouteTableId?: string;
  RouteSet?: RouteSetDetails[];
  VpcId?: string;
}
export interface AwsAmazonMqBrokerEncryptionOptionsDetails {
  KmsKeyId?: string;
  UseAwsOwnedKey?: boolean;
}
export interface AwsAmazonMqBrokerLdapServerMetadataDetails {
  Hosts?: string[];
  RoleBase?: string;
  RoleName?: string;
  RoleSearchMatching?: string;
  RoleSearchSubtree?: boolean;
  ServiceAccountUsername?: string;
  UserBase?: string;
  UserRoleName?: string;
  UserSearchMatching?: string;
  UserSearchSubtree?: boolean;
}
export interface AwsAmazonMqBrokerLogsPendingDetails {
  Audit?: boolean;
  General?: boolean;
}
export interface AwsAmazonMqBrokerLogsDetails {
  Audit?: boolean;
  General?: boolean;
  AuditLogGroup?: string;
  GeneralLogGroup?: string;
  Pending?: AwsAmazonMqBrokerLogsPendingDetails;
}
export interface AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails {
  DayOfWeek?: string;
  TimeOfDay?: string;
  TimeZone?: string;
}
export interface AwsAmazonMqBrokerUsersDetails {
  PendingChange?: string;
  Username?: string;
}
export type AwsAmazonMqBrokerUsersList = AwsAmazonMqBrokerUsersDetails[];
export interface AwsAmazonMqBrokerDetails {
  AuthenticationStrategy?: string;
  AutoMinorVersionUpgrade?: boolean;
  BrokerArn?: string;
  BrokerName?: string;
  DeploymentMode?: string;
  EncryptionOptions?: AwsAmazonMqBrokerEncryptionOptionsDetails;
  EngineType?: string;
  EngineVersion?: string;
  HostInstanceType?: string;
  BrokerId?: string;
  LdapServerMetadata?: AwsAmazonMqBrokerLdapServerMetadataDetails;
  Logs?: AwsAmazonMqBrokerLogsDetails;
  MaintenanceWindowStartTime?: AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails;
  PubliclyAccessible?: boolean;
  SecurityGroups?: string[];
  StorageType?: string;
  SubnetIds?: string[];
  Users?: AwsAmazonMqBrokerUsersDetails[];
}
export interface AwsAppSyncGraphQlApiOpenIdConnectConfigDetails {
  AuthTtL?: number;
  ClientId?: string;
  IatTtL?: number;
  Issuer?: string;
}
export interface AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails {
  AuthorizerResultTtlInSeconds?: number;
  AuthorizerUri?: string;
  IdentityValidationExpression?: string;
}
export interface AwsAppSyncGraphQlApiUserPoolConfigDetails {
  AppIdClientRegex?: string;
  AwsRegion?: string;
  DefaultAction?: string;
  UserPoolId?: string;
}
export interface AwsAppSyncGraphQlApiLogConfigDetails {
  CloudWatchLogsRoleArn?: string;
  ExcludeVerboseContent?: boolean;
  FieldLogLevel?: string;
}
export interface AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails {
  AuthenticationType?: string;
  LambdaAuthorizerConfig?: AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails;
  OpenIdConnectConfig?: AwsAppSyncGraphQlApiOpenIdConnectConfigDetails;
  UserPoolConfig?: AwsAppSyncGraphQlApiUserPoolConfigDetails;
}
export type AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersList =
  AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails[];
export interface AwsAppSyncGraphQlApiDetails {
  ApiId?: string;
  Id?: string;
  OpenIdConnectConfig?: AwsAppSyncGraphQlApiOpenIdConnectConfigDetails;
  Name?: string;
  LambdaAuthorizerConfig?: AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails;
  XrayEnabled?: boolean;
  Arn?: string;
  UserPoolConfig?: AwsAppSyncGraphQlApiUserPoolConfigDetails;
  AuthenticationType?: string;
  LogConfig?: AwsAppSyncGraphQlApiLogConfigDetails;
  AdditionalAuthenticationProviders?: AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails[];
  WafWebAclArn?: string;
}
export interface AwsEventSchemasRegistryDetails {
  Description?: string;
  RegistryArn?: string;
  RegistryName?: string;
}
export interface AwsGuardDutyDetectorDataSourcesCloudTrailDetails {
  Status?: string;
}
export interface AwsGuardDutyDetectorDataSourcesDnsLogsDetails {
  Status?: string;
}
export interface AwsGuardDutyDetectorDataSourcesFlowLogsDetails {
  Status?: string;
}
export interface AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails {
  Status?: string;
}
export interface AwsGuardDutyDetectorDataSourcesKubernetesDetails {
  AuditLogs?: AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails;
}
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails {
  Reason?: string;
  Status?: string;
}
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails {
  EbsVolumes?: AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails;
}
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails {
  ScanEc2InstanceWithFindings?: AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails;
  ServiceRole?: string;
}
export interface AwsGuardDutyDetectorDataSourcesS3LogsDetails {
  Status?: string;
}
export interface AwsGuardDutyDetectorDataSourcesDetails {
  CloudTrail?: AwsGuardDutyDetectorDataSourcesCloudTrailDetails;
  DnsLogs?: AwsGuardDutyDetectorDataSourcesDnsLogsDetails;
  FlowLogs?: AwsGuardDutyDetectorDataSourcesFlowLogsDetails;
  Kubernetes?: AwsGuardDutyDetectorDataSourcesKubernetesDetails;
  MalwareProtection?: AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails;
  S3Logs?: AwsGuardDutyDetectorDataSourcesS3LogsDetails;
}
export interface AwsGuardDutyDetectorFeaturesDetails {
  Name?: string;
  Status?: string;
}
export type AwsGuardDutyDetectorFeaturesList = AwsGuardDutyDetectorFeaturesDetails[];
export interface AwsGuardDutyDetectorDetails {
  DataSources?: AwsGuardDutyDetectorDataSourcesDetails;
  Features?: AwsGuardDutyDetectorFeaturesDetails[];
  FindingPublishingFrequency?: string;
  ServiceRole?: string;
  Status?: string;
}
export interface AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails {
  LogGroupArn?: string;
}
export interface AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails {
  CloudWatchLogsLogGroup?: AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails;
}
export type AwsStepFunctionStateMachineLoggingConfigurationDestinationsList =
  AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails[];
export interface AwsStepFunctionStateMachineLoggingConfigurationDetails {
  Destinations?: AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails[];
  IncludeExecutionData?: boolean;
  Level?: string;
}
export interface AwsStepFunctionStateMachineTracingConfigurationDetails {
  Enabled?: boolean;
}
export interface AwsStepFunctionStateMachineDetails {
  Label?: string;
  LoggingConfiguration?: AwsStepFunctionStateMachineLoggingConfigurationDetails;
  Name?: string;
  RoleArn?: string;
  StateMachineArn?: string;
  Status?: string;
  TracingConfiguration?: AwsStepFunctionStateMachineTracingConfigurationDetails;
  Type?: string;
}
export interface AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails {
  EncryptionOption?: string;
  KmsKey?: string;
}
export interface AwsAthenaWorkGroupConfigurationResultConfigurationDetails {
  EncryptionConfiguration?: AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails;
}
export interface AwsAthenaWorkGroupConfigurationDetails {
  ResultConfiguration?: AwsAthenaWorkGroupConfigurationResultConfigurationDetails;
}
export interface AwsAthenaWorkGroupDetails {
  Name?: string;
  Description?: string;
  State?: string;
  Configuration?: AwsAthenaWorkGroupConfigurationDetails;
}
export interface AwsEventsEventbusDetails {
  Arn?: string;
  Name?: string;
  Policy?: string;
}
export interface AwsDmsEndpointDetails {
  CertificateArn?: string;
  DatabaseName?: string;
  EndpointArn?: string;
  EndpointIdentifier?: string;
  EndpointType?: string;
  EngineName?: string;
  ExternalId?: string;
  ExtraConnectionAttributes?: string;
  KmsKeyId?: string;
  Port?: number;
  ServerName?: string;
  SslMode?: string;
  Username?: string;
}
export interface AwsEventsEndpointEventBusesDetails {
  EventBusArn?: string;
}
export type AwsEventsEndpointEventBusesList = AwsEventsEndpointEventBusesDetails[];
export interface AwsEventsEndpointReplicationConfigDetails {
  State?: string;
}
export interface AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails {
  HealthCheck?: string;
}
export interface AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails {
  Route?: string;
}
export interface AwsEventsEndpointRoutingConfigFailoverConfigDetails {
  Primary?: AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails;
  Secondary?: AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails;
}
export interface AwsEventsEndpointRoutingConfigDetails {
  FailoverConfig?: AwsEventsEndpointRoutingConfigFailoverConfigDetails;
}
export interface AwsEventsEndpointDetails {
  Arn?: string;
  Description?: string;
  EndpointId?: string;
  EndpointUrl?: string;
  EventBuses?: AwsEventsEndpointEventBusesDetails[];
  Name?: string;
  ReplicationConfig?: AwsEventsEndpointReplicationConfigDetails;
  RoleArn?: string;
  RoutingConfig?: AwsEventsEndpointRoutingConfigDetails;
  State?: string;
  StateReason?: string;
}
export interface AwsDmsReplicationTaskDetails {
  CdcStartPosition?: string;
  CdcStartTime?: string;
  CdcStopPosition?: string;
  MigrationType?: string;
  Id?: string;
  ResourceIdentifier?: string;
  ReplicationInstanceArn?: string;
  ReplicationTaskIdentifier?: string;
  ReplicationTaskSettings?: string;
  SourceEndpointArn?: string;
  TableMappings?: string;
  TargetEndpointArn?: string;
  TaskData?: string;
}
export interface AwsDmsReplicationInstanceReplicationSubnetGroupDetails {
  ReplicationSubnetGroupIdentifier?: string;
}
export interface AwsDmsReplicationInstanceVpcSecurityGroupsDetails {
  VpcSecurityGroupId?: string;
}
export type AwsDmsReplicationInstanceVpcSecurityGroupsList =
  AwsDmsReplicationInstanceVpcSecurityGroupsDetails[];
export interface AwsDmsReplicationInstanceDetails {
  AllocatedStorage?: number;
  AutoMinorVersionUpgrade?: boolean;
  AvailabilityZone?: string;
  EngineVersion?: string;
  KmsKeyId?: string;
  MultiAZ?: boolean;
  PreferredMaintenanceWindow?: string;
  PubliclyAccessible?: boolean;
  ReplicationInstanceClass?: string;
  ReplicationInstanceIdentifier?: string;
  ReplicationSubnetGroup?: AwsDmsReplicationInstanceReplicationSubnetGroupDetails;
  VpcSecurityGroups?: AwsDmsReplicationInstanceVpcSecurityGroupsDetails[];
}
export interface AwsRoute53HostedZoneConfigDetails {
  Comment?: string;
}
export interface AwsRoute53HostedZoneObjectDetails {
  Id?: string;
  Name?: string;
  Config?: AwsRoute53HostedZoneConfigDetails;
}
export interface AwsRoute53HostedZoneVpcDetails {
  Id?: string;
  Region?: string;
}
export type AwsRoute53HostedZoneVpcsList = AwsRoute53HostedZoneVpcDetails[];
export type AwsRoute53HostedZoneNameServersList = string[];
export interface CloudWatchLogsLogGroupArnConfigDetails {
  CloudWatchLogsLogGroupArn?: string;
  HostedZoneId?: string;
  Id?: string;
}
export interface AwsRoute53QueryLoggingConfigDetails {
  CloudWatchLogsLogGroupArn?: CloudWatchLogsLogGroupArnConfigDetails;
}
export interface AwsRoute53HostedZoneDetails {
  HostedZone?: AwsRoute53HostedZoneObjectDetails;
  Vpcs?: AwsRoute53HostedZoneVpcDetails[];
  NameServers?: string[];
  QueryLoggingConfig?: AwsRoute53QueryLoggingConfigDetails;
}
export interface AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails {
  InCluster?: boolean;
  ClientBroker?: string;
}
export interface AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails {
  DataVolumeKMSKeyId?: string;
}
export interface AwsMskClusterClusterInfoEncryptionInfoDetails {
  EncryptionInTransit?: AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails;
  EncryptionAtRest?: AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails;
}
export interface AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails {
  Enabled?: boolean;
}
export interface AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails {
  Enabled?: boolean;
}
export interface AwsMskClusterClusterInfoClientAuthenticationSaslDetails {
  Iam?: AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails;
  Scram?: AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails;
}
export interface AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails {
  Enabled?: boolean;
}
export interface AwsMskClusterClusterInfoClientAuthenticationTlsDetails {
  CertificateAuthorityArnList?: string[];
  Enabled?: boolean;
}
export interface AwsMskClusterClusterInfoClientAuthenticationDetails {
  Sasl?: AwsMskClusterClusterInfoClientAuthenticationSaslDetails;
  Unauthenticated?: AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails;
  Tls?: AwsMskClusterClusterInfoClientAuthenticationTlsDetails;
}
export interface AwsMskClusterClusterInfoDetails {
  EncryptionInfo?: AwsMskClusterClusterInfoEncryptionInfoDetails;
  CurrentVersion?: string;
  NumberOfBrokerNodes?: number;
  ClusterName?: string;
  ClientAuthentication?: AwsMskClusterClusterInfoClientAuthenticationDetails;
  EnhancedMonitoring?: string;
}
export interface AwsMskClusterDetails {
  ClusterInfo?: AwsMskClusterClusterInfoDetails;
}
export interface AwsS3AccessPointVpcConfigurationDetails {
  VpcId?: string;
}
export interface AwsS3AccessPointDetails {
  AccessPointArn?: string;
  Alias?: string;
  Bucket?: string;
  BucketAccountId?: string;
  Name?: string;
  NetworkOrigin?: string;
  PublicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails;
  VpcConfiguration?: AwsS3AccessPointVpcConfigurationDetails;
}
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails {
  DirectoryId?: string;
}
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails {
  ClientRootCertificateChain?: string;
}
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails {
  SamlProviderArn?: string;
  SelfServiceSamlProviderArn?: string;
}
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsDetails {
  Type?: string;
  ActiveDirectory?: AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails;
  MutualAuthentication?: AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails;
  FederatedAuthentication?: AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails;
}
export type AwsEc2ClientVpnEndpointAuthenticationOptionsList =
  AwsEc2ClientVpnEndpointAuthenticationOptionsDetails[];
export interface AwsEc2ClientVpnEndpointConnectionLogOptionsDetails {
  Enabled?: boolean;
  CloudwatchLogGroup?: string;
  CloudwatchLogStream?: string;
}
export interface AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails {
  Code?: string;
  Message?: string;
}
export interface AwsEc2ClientVpnEndpointClientConnectOptionsDetails {
  Enabled?: boolean;
  LambdaFunctionArn?: string;
  Status?: AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails;
}
export interface AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails {
  Enabled?: boolean;
  BannerText?: string;
}
export interface AwsEc2ClientVpnEndpointDetails {
  ClientVpnEndpointId?: string;
  Description?: string;
  ClientCidrBlock?: string;
  DnsServer?: string[];
  SplitTunnel?: boolean;
  TransportProtocol?: string;
  VpnPort?: number;
  ServerCertificateArn?: string;
  AuthenticationOptions?: AwsEc2ClientVpnEndpointAuthenticationOptionsDetails[];
  ConnectionLogOptions?: AwsEc2ClientVpnEndpointConnectionLogOptionsDetails;
  SecurityGroupIdSet?: string[];
  VpcId?: string;
  SelfServicePortalUrl?: string;
  ClientConnectOptions?: AwsEc2ClientVpnEndpointClientConnectOptionsDetails;
  SessionTimeoutHours?: number;
  ClientLoginBannerOptions?: AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails;
}
export interface CodeRepositoryDetails {
  ProviderType?: string;
  ProjectName?: string;
  CodeSecurityIntegrationArn?: string;
}
export type AzureResourceDetails = unknown;
export interface ResourceDetails {
  AwsAutoScalingAutoScalingGroup?: AwsAutoScalingAutoScalingGroupDetails;
  AwsCodeBuildProject?: AwsCodeBuildProjectDetails;
  AwsCloudFrontDistribution?: AwsCloudFrontDistributionDetails;
  AwsEc2Instance?: AwsEc2InstanceDetails;
  AwsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails;
  AwsEc2SecurityGroup?: AwsEc2SecurityGroupDetails;
  AwsEc2Volume?: AwsEc2VolumeDetails;
  AwsEc2Vpc?: AwsEc2VpcDetails;
  AwsEc2Eip?: AwsEc2EipDetails;
  AwsEc2Subnet?: AwsEc2SubnetDetails;
  AwsEc2NetworkAcl?: AwsEc2NetworkAclDetails;
  AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;
  AwsElasticBeanstalkEnvironment?: AwsElasticBeanstalkEnvironmentDetails;
  AwsElasticsearchDomain?: AwsElasticsearchDomainDetails;
  AwsS3Bucket?: AwsS3BucketDetails;
  AwsS3AccountPublicAccessBlock?: AwsS3AccountPublicAccessBlockDetails;
  AwsS3Object?: AwsS3ObjectDetails;
  AwsSecretsManagerSecret?: AwsSecretsManagerSecretDetails;
  AwsIamAccessKey?: AwsIamAccessKeyDetails;
  AwsIamUser?: AwsIamUserDetails;
  AwsIamPolicy?: AwsIamPolicyDetails;
  AwsApiGatewayV2Stage?: AwsApiGatewayV2StageDetails;
  AwsApiGatewayV2Api?: AwsApiGatewayV2ApiDetails;
  AwsDynamoDbTable?: AwsDynamoDbTableDetails;
  AwsApiGatewayStage?: AwsApiGatewayStageDetails;
  AwsApiGatewayRestApi?: AwsApiGatewayRestApiDetails;
  AwsCloudTrailTrail?: AwsCloudTrailTrailDetails;
  AwsSsmPatchCompliance?: AwsSsmPatchComplianceDetails;
  AwsCertificateManagerCertificate?: AwsCertificateManagerCertificateDetails;
  AwsRedshiftCluster?: AwsRedshiftClusterDetails;
  AwsElbLoadBalancer?: AwsElbLoadBalancerDetails;
  AwsIamGroup?: AwsIamGroupDetails;
  AwsIamRole?: AwsIamRoleDetails;
  AwsKmsKey?: AwsKmsKeyDetails;
  AwsLambdaFunction?: AwsLambdaFunctionDetails;
  AwsLambdaLayerVersion?: AwsLambdaLayerVersionDetails;
  AwsRdsDbInstance?: AwsRdsDbInstanceDetails;
  AwsSnsTopic?: AwsSnsTopicDetails;
  AwsSqsQueue?: AwsSqsQueueDetails;
  AwsWafWebAcl?: AwsWafWebAclDetails;
  AwsRdsDbSnapshot?: AwsRdsDbSnapshotDetails;
  AwsRdsDbClusterSnapshot?: AwsRdsDbClusterSnapshotDetails;
  AwsRdsDbCluster?: AwsRdsDbClusterDetails;
  AwsEcsCluster?: AwsEcsClusterDetails;
  AwsEcsContainer?: AwsEcsContainerDetails;
  AwsEcsTaskDefinition?: AwsEcsTaskDefinitionDetails;
  Container?: ContainerDetails;
  Other?: { [key: string]: string | undefined };
  AwsRdsEventSubscription?: AwsRdsEventSubscriptionDetails;
  AwsEcsService?: AwsEcsServiceDetails;
  AwsAutoScalingLaunchConfiguration?: AwsAutoScalingLaunchConfigurationDetails;
  AwsEc2VpnConnection?: AwsEc2VpnConnectionDetails;
  AwsEcrContainerImage?: AwsEcrContainerImageDetails;
  AwsOpenSearchServiceDomain?: AwsOpenSearchServiceDomainDetails;
  AwsEc2VpcEndpointService?: AwsEc2VpcEndpointServiceDetails;
  AwsXrayEncryptionConfig?: AwsXrayEncryptionConfigDetails;
  AwsWafRateBasedRule?: AwsWafRateBasedRuleDetails;
  AwsWafRegionalRateBasedRule?: AwsWafRegionalRateBasedRuleDetails;
  AwsEcrRepository?: AwsEcrRepositoryDetails;
  AwsEksCluster?: AwsEksClusterDetails;
  AwsNetworkFirewallFirewallPolicy?: AwsNetworkFirewallFirewallPolicyDetails;
  AwsNetworkFirewallFirewall?: AwsNetworkFirewallFirewallDetails;
  AwsNetworkFirewallRuleGroup?: AwsNetworkFirewallRuleGroupDetails;
  AwsRdsDbSecurityGroup?: AwsRdsDbSecurityGroupDetails;
  AwsKinesisStream?: AwsKinesisStreamDetails;
  AwsEc2TransitGateway?: AwsEc2TransitGatewayDetails;
  AwsEfsAccessPoint?: AwsEfsAccessPointDetails;
  AwsCloudFormationStack?: AwsCloudFormationStackDetails;
  AwsCloudWatchAlarm?: AwsCloudWatchAlarmDetails;
  AwsEc2VpcPeeringConnection?: AwsEc2VpcPeeringConnectionDetails;
  AwsWafRegionalRuleGroup?: AwsWafRegionalRuleGroupDetails;
  AwsWafRegionalRule?: AwsWafRegionalRuleDetails;
  AwsWafRegionalWebAcl?: AwsWafRegionalWebAclDetails;
  AwsWafRule?: AwsWafRuleDetails;
  AwsWafRuleGroup?: AwsWafRuleGroupDetails;
  AwsEcsTask?: AwsEcsTaskDetails;
  AwsBackupBackupVault?: AwsBackupBackupVaultDetails;
  AwsBackupBackupPlan?: AwsBackupBackupPlanDetails;
  AwsBackupRecoveryPoint?: AwsBackupRecoveryPointDetails;
  AwsEc2LaunchTemplate?: AwsEc2LaunchTemplateDetails;
  AwsSageMakerNotebookInstance?: AwsSageMakerNotebookInstanceDetails;
  AwsWafv2WebAcl?: AwsWafv2WebAclDetails;
  AwsWafv2RuleGroup?: AwsWafv2RuleGroupDetails;
  AwsEc2RouteTable?: AwsEc2RouteTableDetails;
  AwsAmazonMqBroker?: AwsAmazonMqBrokerDetails;
  AwsAppSyncGraphQlApi?: AwsAppSyncGraphQlApiDetails;
  AwsEventSchemasRegistry?: AwsEventSchemasRegistryDetails;
  AwsGuardDutyDetector?: AwsGuardDutyDetectorDetails;
  AwsStepFunctionStateMachine?: AwsStepFunctionStateMachineDetails;
  AwsAthenaWorkGroup?: AwsAthenaWorkGroupDetails;
  AwsEventsEventbus?: AwsEventsEventbusDetails;
  AwsDmsEndpoint?: AwsDmsEndpointDetails;
  AwsEventsEndpoint?: AwsEventsEndpointDetails;
  AwsDmsReplicationTask?: AwsDmsReplicationTaskDetails;
  AwsDmsReplicationInstance?: AwsDmsReplicationInstanceDetails;
  AwsRoute53HostedZone?: AwsRoute53HostedZoneDetails;
  AwsMskCluster?: AwsMskClusterDetails;
  AwsS3AccessPoint?: AwsS3AccessPointDetails;
  AwsEc2ClientVpnEndpoint?: AwsEc2ClientVpnEndpointDetails;
  CodeRepository?: CodeRepositoryDetails;
  AzureResource?: any;
}
export interface Resource {
  Type?: string;
  Id?: string;
  Partition?: Partition;
  Region?: string;
  Provider?: CloudProviderName;
  Owner?: ResourceOwner;
  ResourceRole?: string;
  Tags?: { [key: string]: string | undefined };
  DataClassification?: DataClassificationDetails;
  Details?: ResourceDetails;
  ApplicationName?: string;
  ApplicationArn?: string;
}
export type ResourceList = Resource[];
export type ComplianceStatus = "PASSED" | "WARNING" | "FAILED" | "NOT_AVAILABLE" | (string & {});
export interface StatusReason {
  ReasonCode?: string;
  Description?: string;
}
export type StatusReasonsList = StatusReason[];
export interface AssociatedStandard {
  StandardsId?: string;
}
export type AssociatedStandardsList = AssociatedStandard[];
export interface SecurityControlParameter {
  Name?: string;
  Value?: string[];
}
export type SecurityControlParametersList = SecurityControlParameter[];
export interface Compliance {
  Status?: ComplianceStatus;
  RelatedRequirements?: string[];
  StatusReasons?: StatusReason[];
  SecurityControlId?: string;
  AssociatedStandards?: AssociatedStandard[];
  SecurityControlParameters?: SecurityControlParameter[];
}
export type WorkflowState =
  | "NEW"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "DEFERRED"
  | "RESOLVED"
  | (string & {});
export interface Workflow {
  Status?: WorkflowStatus;
}
export type RecordState = "ACTIVE" | "ARCHIVED" | (string & {});
export interface Note {
  Text?: string;
  UpdatedBy?: string;
  UpdatedAt?: string;
}
export interface SoftwarePackage {
  Name?: string;
  Version?: string;
  Epoch?: string;
  Release?: string;
  Architecture?: string;
  PackageManager?: string;
  FilePath?: string;
  FixedInVersion?: string;
  Remediation?: string;
  SourceLayerHash?: string;
  SourceLayerArn?: string;
}
export type SoftwarePackageList = SoftwarePackage[];
export interface Adjustment {
  Metric?: string;
  Reason?: string;
}
export type AdjustmentList = Adjustment[];
export interface Cvss {
  Version?: string;
  BaseScore?: number;
  BaseVector?: string;
  Source?: string;
  Adjustments?: Adjustment[];
}
export type CvssList = Cvss[];
export interface VulnerabilityVendor {
  Name?: string;
  Url?: string;
  VendorSeverity?: string;
  VendorCreatedAt?: string;
  VendorUpdatedAt?: string;
}
export type VulnerabilityFixAvailable = "YES" | "NO" | "PARTIAL" | (string & {});
export type VulnerabilityExploitAvailable = "YES" | "NO" | (string & {});
export interface CodeVulnerabilitiesFilePath {
  EndLine?: number;
  FileName?: string;
  FilePath?: string;
  StartLine?: number;
}
export interface VulnerabilityCodeVulnerabilities {
  Cwes?: string[];
  FilePath?: CodeVulnerabilitiesFilePath;
  SourceArn?: string;
}
export type VulnerabilityCodeVulnerabilitiesList = VulnerabilityCodeVulnerabilities[];
export interface Vulnerability {
  Id?: string;
  VulnerablePackages?: SoftwarePackage[];
  Cvss?: Cvss[];
  RelatedVulnerabilities?: string[];
  Vendor?: VulnerabilityVendor;
  ReferenceUrls?: string[];
  FixAvailable?: VulnerabilityFixAvailable;
  EpssScore?: number;
  ExploitAvailable?: VulnerabilityExploitAvailable;
  LastKnownExploitAt?: string;
  CodeVulnerabilities?: VulnerabilityCodeVulnerabilities[];
}
export type VulnerabilityList = Vulnerability[];
export interface PatchSummary {
  Id?: string;
  InstalledCount?: number;
  MissingCount?: number;
  FailedCount?: number;
  InstalledOtherCount?: number;
  InstalledRejectedCount?: number;
  InstalledPendingReboot?: number;
  OperationStartTime?: string;
  OperationEndTime?: string;
  RebootOption?: string;
  Operation?: string;
}
export interface IpOrganizationDetails {
  Asn?: number;
  AsnOrg?: string;
  Isp?: string;
  Org?: string;
}
export interface Country {
  CountryCode?: string;
  CountryName?: string;
}
export interface City {
  CityName?: string;
}
export interface GeoLocation {
  Lon?: number;
  Lat?: number;
}
export interface ActionRemoteIpDetails {
  IpAddressV4?: string;
  Organization?: IpOrganizationDetails;
  Country?: Country;
  City?: City;
  GeoLocation?: GeoLocation;
}
export interface ActionRemotePortDetails {
  Port?: number;
  PortName?: string;
}
export interface ActionLocalPortDetails {
  Port?: number;
  PortName?: string;
}
export interface NetworkConnectionAction {
  ConnectionDirection?: string;
  RemoteIpDetails?: ActionRemoteIpDetails;
  RemotePortDetails?: ActionRemotePortDetails;
  LocalPortDetails?: ActionLocalPortDetails;
  Protocol?: string;
  Blocked?: boolean;
}
export interface AwsApiCallActionDomainDetails {
  Domain?: string;
}
export interface AwsApiCallAction {
  Api?: string;
  ServiceName?: string;
  CallerType?: string;
  RemoteIpDetails?: ActionRemoteIpDetails;
  DomainDetails?: AwsApiCallActionDomainDetails;
  AffectedResources?: { [key: string]: string | undefined };
  FirstSeen?: string;
  LastSeen?: string;
}
export interface DnsRequestAction {
  Domain?: string;
  Protocol?: string;
  Blocked?: boolean;
}
export interface ActionLocalIpDetails {
  IpAddressV4?: string;
}
export interface PortProbeDetail {
  LocalPortDetails?: ActionLocalPortDetails;
  LocalIpDetails?: ActionLocalIpDetails;
  RemoteIpDetails?: ActionRemoteIpDetails;
}
export type PortProbeDetailList = PortProbeDetail[];
export interface PortProbeAction {
  PortProbeDetails?: PortProbeDetail[];
  Blocked?: boolean;
}
export interface Action {
  ActionType?: string;
  NetworkConnectionAction?: NetworkConnectionAction;
  AwsApiCallAction?: AwsApiCallAction;
  DnsRequestAction?: DnsRequestAction;
  PortProbeAction?: PortProbeAction;
}
export interface FindingProviderSeverity {
  Label?: SeverityLabel;
  Original?: string;
}
export interface FindingProviderFields {
  Confidence?: number;
  Criticality?: number;
  RelatedFindings?: RelatedFinding[];
  Severity?: FindingProviderSeverity;
  Types?: string[];
}
export interface GeneratorDetails {
  Name?: string;
  Description?: string;
  Labels?: string[];
}
export interface UserAccount {
  Uid?: string;
  Name?: string;
}
export interface ActorUser {
  Name?: string;
  Uid?: string;
  Type?: string;
  CredentialUid?: string;
  Account?: UserAccount;
}
export type ActorSessionMfaStatus = "ENABLED" | "DISABLED" | (string & {});
export interface ActorSession {
  Uid?: string;
  MfaStatus?: ActorSessionMfaStatus;
  CreatedTime?: number;
  Issuer?: string;
}
export interface Actor {
  Id?: string;
  User?: ActorUser;
  Session?: ActorSession;
}
export type ActorsList = Actor[];
export interface NetworkGeoLocation {
  City?: string;
  Country?: string;
  Lat?: number;
  Lon?: number;
}
export interface NetworkAutonomousSystem {
  Name?: string;
  Number?: number;
}
export type ConnectionDirection = "INBOUND" | "OUTBOUND" | (string & {});
export interface NetworkConnection {
  Direction?: ConnectionDirection;
}
export interface NetworkEndpoint {
  Id?: string;
  Ip?: string;
  Domain?: string;
  Port?: number;
  Location?: NetworkGeoLocation;
  AutonomousSystem?: NetworkAutonomousSystem;
  Connection?: NetworkConnection;
}
export type NetworkEndpointsList = NetworkEndpoint[];
export interface Indicator {
  Key?: string;
  Values?: string[];
  Title?: string;
  Type?: string;
}
export type IndicatorsList = Indicator[];
export interface Signal {
  Type?: string;
  Id?: string;
  Title?: string;
  ProductArn?: string;
  ResourceIds?: string[];
  SignalIndicators?: Indicator[];
  Name?: string;
  CreatedAt?: number;
  UpdatedAt?: number;
  FirstSeenAt?: number;
  LastSeenAt?: number;
  Severity?: number;
  Count?: number;
  ActorIds?: string[];
  EndpointIds?: string[];
}
export type SignalsList = Signal[];
export interface Sequence {
  Uid?: string;
  Actors?: Actor[];
  Endpoints?: NetworkEndpoint[];
  Signals?: Signal[];
  SequenceIndicators?: Indicator[];
}
export interface Detection {
  Sequence?: Sequence;
}
export interface AwsSecurityFinding {
  SchemaVersion?: string;
  Id?: string;
  ProductArn?: string;
  ProductName?: string;
  CompanyName?: string;
  Region?: string;
  GeneratorId?: string;
  AwsAccountId?: string;
  Types?: string[];
  FirstObservedAt?: string;
  LastObservedAt?: string;
  CreatedAt?: string;
  UpdatedAt?: string;
  Severity?: Severity;
  Confidence?: number;
  Criticality?: number;
  Title?: string;
  Description?: string;
  Remediation?: Remediation;
  SourceUrl?: string;
  ProductFields?: { [key: string]: string | undefined };
  UserDefinedFields?: { [key: string]: string | undefined };
  Malware?: Malware[];
  Network?: Network;
  NetworkPath?: NetworkPathComponent[];
  Process?: ProcessDetails;
  Threats?: Threat[];
  ThreatIntelIndicators?: ThreatIntelIndicator[];
  Resources?: Resource[];
  Compliance?: Compliance;
  VerificationState?: VerificationState;
  WorkflowState?: WorkflowState;
  Workflow?: Workflow;
  RecordState?: RecordState;
  RelatedFindings?: RelatedFinding[];
  Note?: Note;
  Vulnerabilities?: Vulnerability[];
  PatchSummary?: PatchSummary;
  Action?: Action;
  FindingProviderFields?: FindingProviderFields;
  Sample?: boolean;
  GeneratorDetails?: GeneratorDetails;
  ProcessedAt?: string;
  AwsAccountName?: string;
  Detection?: Detection;
}
export type BatchImportFindingsRequestFindingList = AwsSecurityFinding[];
export interface BatchImportFindingsRequest {
  Findings?: AwsSecurityFinding[];
}
export interface ImportFindingsError {
  Id?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type ImportFindingsErrorList = ImportFindingsError[];
export interface BatchImportFindingsResponse {
  FailedCount: number;
  SuccessCount: number;
  FailedFindings?: (ImportFindingsError & {
    Id: NonEmptyString;
    ErrorCode: NonEmptyString;
    ErrorMessage: NonEmptyString;
  })[];
}
export interface UpdateAutomationRulesRequestItem {
  RuleArn?: string;
  RuleStatus?: RuleStatus;
  RuleOrder?: number;
  Description?: string;
  RuleName?: string;
  IsTerminal?: boolean;
  Criteria?: AutomationRulesFindingFilters;
  Actions?: AutomationRulesAction[];
}
export type UpdateAutomationRulesRequestItemsList = UpdateAutomationRulesRequestItem[];
export interface BatchUpdateAutomationRulesRequest {
  UpdateAutomationRulesRequestItems?: UpdateAutomationRulesRequestItem[];
}
export interface BatchUpdateAutomationRulesResponse {
  ProcessedAutomationRules?: string[];
  UnprocessedAutomationRules?: UnprocessedAutomationRule[];
}
export interface AwsSecurityFindingIdentifier {
  Id?: string;
  ProductArn?: string;
}
export type AwsSecurityFindingIdentifierList = AwsSecurityFindingIdentifier[];
export interface BatchUpdateFindingsRequest {
  FindingIdentifiers?: AwsSecurityFindingIdentifier[];
  Note?: NoteUpdate;
  Severity?: SeverityUpdate;
  VerificationState?: VerificationState;
  Confidence?: number;
  Criticality?: number;
  Types?: string[];
  UserDefinedFields?: { [key: string]: string | undefined };
  Workflow?: WorkflowUpdate;
  RelatedFindings?: RelatedFinding[];
}
export interface BatchUpdateFindingsUnprocessedFinding {
  FindingIdentifier?: AwsSecurityFindingIdentifier;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type BatchUpdateFindingsUnprocessedFindingsList = BatchUpdateFindingsUnprocessedFinding[];
export interface BatchUpdateFindingsResponse {
  ProcessedFindings: (AwsSecurityFindingIdentifier & {
    Id: NonEmptyString;
    ProductArn: NonEmptyString;
  })[];
  UnprocessedFindings: (BatchUpdateFindingsUnprocessedFinding & {
    FindingIdentifier: AwsSecurityFindingIdentifier & {
      Id: NonEmptyString;
      ProductArn: NonEmptyString;
    };
    ErrorCode: NonEmptyString;
    ErrorMessage: NonEmptyString;
  })[];
}
export type MetadataUidList = string[];
export interface OcsfFindingIdentifier {
  CloudAccountUid?: string;
  FindingInfoUid?: string;
  MetadataProductUid?: string;
}
export type OcsfFindingIdentifierList = OcsfFindingIdentifier[];
export interface BatchUpdateFindingsV2Request {
  MetadataUids?: string[];
  FindingIdentifiers?: OcsfFindingIdentifier[];
  Comment?: string;
  SeverityId?: number;
  StatusId?: number;
}
export interface BatchUpdateFindingsV2ProcessedFinding {
  FindingIdentifier?: OcsfFindingIdentifier;
  MetadataUid?: string;
}
export type BatchUpdateFindingsV2ProcessedFindingsList = BatchUpdateFindingsV2ProcessedFinding[];
export type BatchUpdateFindingsV2UnprocessedFindingErrorCode =
  | "ResourceNotFoundException"
  | "ValidationException"
  | "InternalServerException"
  | "ConflictException"
  | (string & {});
export interface BatchUpdateFindingsV2UnprocessedFinding {
  FindingIdentifier?: OcsfFindingIdentifier;
  MetadataUid?: string;
  ErrorCode?: BatchUpdateFindingsV2UnprocessedFindingErrorCode;
  ErrorMessage?: string;
}
export type BatchUpdateFindingsV2UnprocessedFindingsList =
  BatchUpdateFindingsV2UnprocessedFinding[];
export interface BatchUpdateFindingsV2Response {
  ProcessedFindings: (BatchUpdateFindingsV2ProcessedFinding & {
    FindingIdentifier: OcsfFindingIdentifier & {
      CloudAccountUid: NonEmptyString;
      FindingInfoUid: NonEmptyString;
      MetadataProductUid: NonEmptyString;
    };
  })[];
  UnprocessedFindings: (BatchUpdateFindingsV2UnprocessedFinding & {
    FindingIdentifier: OcsfFindingIdentifier & {
      CloudAccountUid: NonEmptyString;
      FindingInfoUid: NonEmptyString;
      MetadataProductUid: NonEmptyString;
    };
  })[];
}
export interface StandardsControlAssociationUpdate {
  StandardsArn?: string;
  SecurityControlId?: string;
  AssociationStatus?: AssociationStatus;
  UpdatedReason?: string;
}
export type StandardsControlAssociationUpdates = StandardsControlAssociationUpdate[];
export interface BatchUpdateStandardsControlAssociationsRequest {
  StandardsControlAssociationUpdates?: StandardsControlAssociationUpdate[];
}
export interface UnprocessedStandardsControlAssociationUpdate {
  StandardsControlAssociationUpdate?: StandardsControlAssociationUpdate;
  ErrorCode?: UnprocessedErrorCode;
  ErrorReason?: string;
}
export type UnprocessedStandardsControlAssociationUpdates =
  UnprocessedStandardsControlAssociationUpdate[];
export interface BatchUpdateStandardsControlAssociationsResponse {
  UnprocessedAssociationUpdates?: (UnprocessedStandardsControlAssociationUpdate & {
    StandardsControlAssociationUpdate: StandardsControlAssociationUpdate & {
      StandardsArn: NonEmptyString;
      SecurityControlId: NonEmptyString;
      AssociationStatus: AssociationStatus;
    };
    ErrorCode: UnprocessedErrorCode;
  })[];
}
export interface CreateActionTargetRequest {
  Name?: string;
  Description?: string;
  Id?: string;
}
export interface CreateActionTargetResponse {
  ActionTargetArn: string;
}
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export type ClientToken = string;
export interface CreateAggregatorV2Request {
  RegionLinkingMode?: string;
  LinkedRegions?: string[];
  Tags?: { [key: string]: string | undefined };
  ClientToken?: string;
}
export interface CreateAggregatorV2Response {
  AggregatorV2Arn?: string;
  AggregationRegion?: string;
  RegionLinkingMode?: string;
  LinkedRegions?: string[];
}
export interface CreateAutomationRuleRequest {
  Tags?: { [key: string]: string | undefined };
  RuleStatus?: RuleStatus;
  RuleOrder?: number;
  RuleName?: string;
  Description?: string;
  IsTerminal?: boolean;
  Criteria?: AutomationRulesFindingFilters;
  Actions?: AutomationRulesAction[];
}
export interface CreateAutomationRuleResponse {
  RuleArn?: string;
}
export type RuleStatusV2 = "ENABLED" | "DISABLED" | (string & {});
export type RuleOrderValueV2 = number;
export type OcsfStringField =
  | "metadata.uid"
  | "activity_name"
  | "cloud.account.uid"
  | "cloud.provider"
  | "cloud.region"
  | "compliance.assessments.category"
  | "compliance.assessments.name"
  | "compliance.control"
  | "compliance.status"
  | "compliance.standards"
  | "finding_info.desc"
  | "finding_info.src_url"
  | "finding_info.title"
  | "finding_info.types"
  | "finding_info.uid"
  | "finding_info.related_events.traits.category"
  | "finding_info.related_events.uid"
  | "finding_info.related_events.product.uid"
  | "finding_info.related_events.title"
  | "metadata.product.name"
  | "metadata.product.uid"
  | "metadata.product.vendor_name"
  | "remediation.desc"
  | "remediation.references"
  | "resources.cloud_partition"
  | "resources.name"
  | "resources.owner.account.uid"
  | "resources.owner.org.uid"
  | "resources.owner.account.name"
  | "resources.provider"
  | "resources.region"
  | "resources.type"
  | "resources.uid"
  | "severity"
  | "status"
  | "comment"
  | "vulnerabilities.fix_coverage"
  | "class_name"
  | "databucket.encryption_details.algorithm"
  | "databucket.encryption_details.key_uid"
  | "databucket.file.data_classifications.classifier_details.type"
  | "evidences.actor.user.account.uid"
  | "evidences.api.operation"
  | "evidences.api.response.error_message"
  | "evidences.api.service.name"
  | "evidences.connection_info.direction"
  | "evidences.connection_info.protocol_name"
  | "evidences.dst_endpoint.autonomous_system.name"
  | "evidences.dst_endpoint.location.city"
  | "evidences.dst_endpoint.location.country"
  | "evidences.src_endpoint.autonomous_system.name"
  | "evidences.src_endpoint.hostname"
  | "evidences.src_endpoint.location.city"
  | "evidences.src_endpoint.location.country"
  | "finding_info.analytic.name"
  | "malware.name"
  | "malware_scan_info.uid"
  | "malware.severity"
  | "resources.cloud_function.layers.uid_alt"
  | "resources.cloud_function.runtime"
  | "resources.cloud_function.user.uid"
  | "resources.device.encryption_details.key_uid"
  | "resources.device.image.uid"
  | "resources.image.architecture"
  | "resources.image.registry_uid"
  | "resources.image.repository_name"
  | "resources.image.uid"
  | "resources.subnet_info.uid"
  | "resources.vpc_uid"
  | "vulnerabilities.affected_code.file.path"
  | "vulnerabilities.affected_packages.name"
  | "vulnerabilities.cve.epss.score"
  | "vulnerabilities.cve.uid"
  | "vulnerabilities.related_vulnerabilities"
  | "cloud.account.name"
  | "vendor_attributes.severity"
  | (string & {});
export interface OcsfStringFilter {
  FieldName?: OcsfStringField;
  Filter?: StringFilter;
}
export type OcsfStringFilterList = OcsfStringFilter[];
export type OcsfDateField =
  | "finding_info.created_time_dt"
  | "finding_info.first_seen_time_dt"
  | "finding_info.last_seen_time_dt"
  | "finding_info.modified_time_dt"
  | "resources.image.created_time_dt"
  | "resources.image.last_used_time_dt"
  | "resources.modified_time_dt"
  | (string & {});
export interface OcsfDateFilter {
  FieldName?: OcsfDateField;
  Filter?: DateFilter;
}
export type OcsfDateFilterList = OcsfDateFilter[];
export type OcsfBooleanField =
  | "compliance.assessments.meets_criteria"
  | "vulnerabilities.is_exploit_available"
  | "vulnerabilities.is_fix_available"
  | (string & {});
export interface BooleanFilter {
  Value?: boolean;
}
export interface OcsfBooleanFilter {
  FieldName?: OcsfBooleanField;
  Filter?: BooleanFilter;
}
export type OcsfBooleanFilterList = OcsfBooleanFilter[];
export type OcsfNumberField =
  | "activity_id"
  | "compliance.status_id"
  | "confidence_score"
  | "severity_id"
  | "status_id"
  | "finding_info.related_events_count"
  | "evidences.api.response.code"
  | "evidences.dst_endpoint.autonomous_system.number"
  | "evidences.dst_endpoint.port"
  | "evidences.src_endpoint.autonomous_system.number"
  | "evidences.src_endpoint.port"
  | "resources.image.in_use_count"
  | "vulnerabilities.cve.cvss.base_score"
  | "vendor_attributes.severity_id"
  | (string & {});
export interface OcsfNumberFilter {
  FieldName?: OcsfNumberField;
  Filter?: NumberFilter;
}
export type OcsfNumberFilterList = OcsfNumberFilter[];
export type OcsfMapField =
  | "resources.tags"
  | "compliance.control_parameters"
  | "databucket.tags"
  | "finding_info.tags"
  | (string & {});
export interface OcsfMapFilter {
  FieldName?: OcsfMapField;
  Filter?: MapFilter;
}
export type OcsfMapFilterList = OcsfMapFilter[];
export type OcsfIpField = "evidences.dst_endpoint.ip" | "evidences.src_endpoint.ip" | (string & {});
export interface IpFilter {
  Cidr?: string;
}
export interface OcsfIpFilter {
  FieldName?: OcsfIpField;
  Filter?: IpFilter;
}
export type OcsfIpFilterList = OcsfIpFilter[];
export type AllowedOperators = "AND" | "OR" | (string & {});
export interface CompositeFilter {
  StringFilters?: OcsfStringFilter[];
  DateFilters?: OcsfDateFilter[];
  BooleanFilters?: OcsfBooleanFilter[];
  NumberFilters?: OcsfNumberFilter[];
  MapFilters?: OcsfMapFilter[];
  IpFilters?: OcsfIpFilter[];
  NestedCompositeFilters?: CompositeFilter[];
  Operator?: AllowedOperators;
}
export type CompositeFilterList = CompositeFilter[];
export interface OcsfFindingFilters {
  CompositeFilters?: CompositeFilter[];
  CompositeOperator?: AllowedOperators;
}
export type Criteria = { OcsfFindingCriteria: OcsfFindingFilters };
export type AutomationRulesActionTypeV2 =
  | "FINDING_FIELDS_UPDATE"
  | "EXTERNAL_INTEGRATION"
  | (string & {});
export interface AutomationRulesFindingFieldsUpdateV2 {
  SeverityId?: number;
  Comment?: string;
  StatusId?: number;
}
export interface ExternalIntegrationConfiguration {
  ConnectorArn?: string;
}
export interface AutomationRulesActionV2 {
  Type?: AutomationRulesActionTypeV2;
  FindingFieldsUpdate?: AutomationRulesFindingFieldsUpdateV2;
  ExternalIntegrationConfiguration?: ExternalIntegrationConfiguration;
}
export type AutomationRulesActionListV2 = AutomationRulesActionV2[];
export interface CreateAutomationRuleV2Request {
  RuleName?: string;
  RuleStatus?: RuleStatusV2;
  Description?: string;
  RuleOrder?: number;
  Criteria?: Criteria;
  Actions?: AutomationRulesActionV2[];
  Tags?: { [key: string]: string | undefined };
  ClientToken?: string;
}
export interface CreateAutomationRuleV2Response {
  RuleArn?: string;
  RuleId?: string;
}
export type EnabledStandardIdentifierList = string[];
export type EnabledSecurityControlIdentifierList = string[];
export type DisabledSecurityControlIdentifierList = string[];
export interface SecurityControlCustomParameter {
  SecurityControlId?: string;
  Parameters?: { [key: string]: ParameterConfiguration | undefined };
}
export type SecurityControlCustomParametersList = SecurityControlCustomParameter[];
export interface SecurityControlsConfiguration {
  EnabledSecurityControlIdentifiers?: string[];
  DisabledSecurityControlIdentifiers?: string[];
  SecurityControlCustomParameters?: SecurityControlCustomParameter[];
}
export interface SecurityHubPolicy {
  ServiceEnabled?: boolean;
  EnabledStandardIdentifiers?: string[];
  SecurityControlsConfiguration?: SecurityControlsConfiguration;
}
export type Policy = { SecurityHub: SecurityHubPolicy };
export interface CreateConfigurationPolicyRequest {
  Name?: string;
  Description?: string;
  ConfigurationPolicy?: Policy;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateConfigurationPolicyResponse {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  UpdatedAt?: Date;
  CreatedAt?: Date;
  ConfigurationPolicy?: Policy;
}
export type ScopeType = "TENANT" | "SUBSCRIPTION" | (string & {});
export type ScopeValueList = string[];
export interface AzureScopeConfiguration {
  ScopeType?: ScopeType;
  ScopeValues?: string[];
}
export type AzureRegionList = string[];
export interface AzureProviderConfiguration {
  AWSConfigConnectorArn?: string;
  ScopeConfiguration?: AzureScopeConfiguration;
  AzureRegions?: string[];
}
export type CspmProviderConfiguration = { Azure: AzureProviderConfiguration };
export interface CreateConnectorRequest {
  Name?: string;
  Description?: string;
  Provider?: CspmProviderConfiguration;
  Tags?: { [key: string]: string | undefined };
  ClientToken?: string;
}
export type CspmConnectorStatus =
  | "CONNECTED"
  | "DEGRADED"
  | "FAILED_TO_CONNECT"
  | "UNKNOWN"
  | (string & {});
export type CspmEnablementStatus =
  | "ENABLED"
  | "PENDING_ENABLEMENT"
  | "PENDING_UPDATE"
  | "PENDING_DELETION"
  | (string & {});
export interface CreateConnectorResponse {
  ConnectorArn: string;
  ConnectorId: string;
  ConnectorStatus?: CspmConnectorStatus;
  EnablementStatus?: CspmEnablementStatus;
}
export interface JiraCloudProviderConfiguration {
  ProjectKey?: string;
}
export interface ServiceNowProviderConfiguration {
  InstanceName?: string;
  SecretArn?: string;
}
export type ProviderConfiguration =
  | { JiraCloud: JiraCloudProviderConfiguration; ServiceNow?: never; Azure?: never }
  | { JiraCloud?: never; ServiceNow: ServiceNowProviderConfiguration; Azure?: never }
  | { JiraCloud?: never; ServiceNow?: never; Azure: AzureProviderConfiguration };
export interface CreateConnectorV2Request {
  Name?: string;
  Description?: string;
  Provider?: ProviderConfiguration;
  KmsKeyArn?: string;
  Tags?: { [key: string]: string | undefined };
  ClientToken?: string;
}
export type ConnectorStatus =
  | "CONNECTED"
  | "DEGRADED"
  | "FAILED_TO_CONNECT"
  | "PENDING_AUTHORIZATION"
  | "PENDING_CONFIGURATION"
  | "UNKNOWN"
  | (string & {});
export type EnablementStatus =
  | "ENABLED"
  | "PENDING_ENABLEMENT"
  | "FAILED_TO_ENABLE"
  | "PENDING_UPDATE"
  | "FAILED_TO_UPDATE"
  | "PENDING_DELETION"
  | "FAILED_TO_DELETE"
  | (string & {});
export interface CreateConnectorV2Response {
  ConnectorArn: string;
  ConnectorId: string;
  AuthUrl?: string;
  ConnectorStatus?: ConnectorStatus;
  EnablementStatus?: EnablementStatus;
}
export interface CreateFindingAggregatorRequest {
  RegionLinkingMode?: string;
  Regions?: string[];
}
export interface CreateFindingAggregatorResponse {
  FindingAggregatorArn?: string;
  FindingAggregationRegion?: string;
  RegionLinkingMode?: string;
  Regions?: string[];
}
export type IpFilterList = IpFilter[];
export interface KeywordFilter {
  Value?: string;
}
export type KeywordFilterList = KeywordFilter[];
export type BooleanFilterList = BooleanFilter[];
export interface AwsSecurityFindingFilters {
  ProductArn?: StringFilter[];
  AwsAccountId?: StringFilter[];
  Id?: StringFilter[];
  GeneratorId?: StringFilter[];
  Region?: StringFilter[];
  Type?: StringFilter[];
  FirstObservedAt?: DateFilter[];
  LastObservedAt?: DateFilter[];
  CreatedAt?: DateFilter[];
  UpdatedAt?: DateFilter[];
  SeverityProduct?: NumberFilter[];
  SeverityNormalized?: NumberFilter[];
  SeverityLabel?: StringFilter[];
  Confidence?: NumberFilter[];
  Criticality?: NumberFilter[];
  Title?: StringFilter[];
  Description?: StringFilter[];
  RecommendationText?: StringFilter[];
  SourceUrl?: StringFilter[];
  ProductFields?: MapFilter[];
  ProductName?: StringFilter[];
  CompanyName?: StringFilter[];
  UserDefinedFields?: MapFilter[];
  MalwareName?: StringFilter[];
  MalwareType?: StringFilter[];
  MalwarePath?: StringFilter[];
  MalwareState?: StringFilter[];
  NetworkDirection?: StringFilter[];
  NetworkProtocol?: StringFilter[];
  NetworkSourceIpV4?: IpFilter[];
  NetworkSourceIpV6?: IpFilter[];
  NetworkSourcePort?: NumberFilter[];
  NetworkSourceDomain?: StringFilter[];
  NetworkSourceMac?: StringFilter[];
  NetworkDestinationIpV4?: IpFilter[];
  NetworkDestinationIpV6?: IpFilter[];
  NetworkDestinationPort?: NumberFilter[];
  NetworkDestinationDomain?: StringFilter[];
  ProcessName?: StringFilter[];
  ProcessPath?: StringFilter[];
  ProcessPid?: NumberFilter[];
  ProcessParentPid?: NumberFilter[];
  ProcessLaunchedAt?: DateFilter[];
  ProcessTerminatedAt?: DateFilter[];
  ThreatIntelIndicatorType?: StringFilter[];
  ThreatIntelIndicatorValue?: StringFilter[];
  ThreatIntelIndicatorCategory?: StringFilter[];
  ThreatIntelIndicatorLastObservedAt?: DateFilter[];
  ThreatIntelIndicatorSource?: StringFilter[];
  ThreatIntelIndicatorSourceUrl?: StringFilter[];
  ResourceType?: StringFilter[];
  ResourceId?: StringFilter[];
  ResourcePartition?: StringFilter[];
  ResourceRegion?: StringFilter[];
  ResourceTags?: MapFilter[];
  ResourceAwsEc2InstanceType?: StringFilter[];
  ResourceAwsEc2InstanceImageId?: StringFilter[];
  ResourceAwsEc2InstanceIpV4Addresses?: IpFilter[];
  ResourceAwsEc2InstanceIpV6Addresses?: IpFilter[];
  ResourceAwsEc2InstanceKeyName?: StringFilter[];
  ResourceAwsEc2InstanceIamInstanceProfileArn?: StringFilter[];
  ResourceAwsEc2InstanceVpcId?: StringFilter[];
  ResourceAwsEc2InstanceSubnetId?: StringFilter[];
  ResourceAwsEc2InstanceLaunchedAt?: DateFilter[];
  ResourceAwsS3BucketOwnerId?: StringFilter[];
  ResourceAwsS3BucketOwnerName?: StringFilter[];
  ResourceAwsIamAccessKeyUserName?: StringFilter[];
  ResourceAwsIamAccessKeyPrincipalName?: StringFilter[];
  ResourceAwsIamAccessKeyStatus?: StringFilter[];
  ResourceAwsIamAccessKeyCreatedAt?: DateFilter[];
  ResourceAwsIamUserUserName?: StringFilter[];
  ResourceContainerName?: StringFilter[];
  ResourceContainerImageId?: StringFilter[];
  ResourceContainerImageName?: StringFilter[];
  ResourceContainerLaunchedAt?: DateFilter[];
  ResourceDetailsOther?: MapFilter[];
  ComplianceStatus?: StringFilter[];
  VerificationState?: StringFilter[];
  WorkflowState?: StringFilter[];
  WorkflowStatus?: StringFilter[];
  RecordState?: StringFilter[];
  RelatedFindingsProductArn?: StringFilter[];
  RelatedFindingsId?: StringFilter[];
  NoteText?: StringFilter[];
  NoteUpdatedAt?: DateFilter[];
  NoteUpdatedBy?: StringFilter[];
  Keyword?: KeywordFilter[];
  FindingProviderFieldsConfidence?: NumberFilter[];
  FindingProviderFieldsCriticality?: NumberFilter[];
  FindingProviderFieldsRelatedFindingsId?: StringFilter[];
  FindingProviderFieldsRelatedFindingsProductArn?: StringFilter[];
  FindingProviderFieldsSeverityLabel?: StringFilter[];
  FindingProviderFieldsSeverityOriginal?: StringFilter[];
  FindingProviderFieldsTypes?: StringFilter[];
  Sample?: BooleanFilter[];
  ComplianceSecurityControlId?: StringFilter[];
  ComplianceAssociatedStandardsId?: StringFilter[];
  VulnerabilitiesExploitAvailable?: StringFilter[];
  VulnerabilitiesFixAvailable?: StringFilter[];
  ComplianceSecurityControlParametersName?: StringFilter[];
  ComplianceSecurityControlParametersValue?: StringFilter[];
  AwsAccountName?: StringFilter[];
  ResourceApplicationName?: StringFilter[];
  ResourceApplicationArn?: StringFilter[];
  ResourceOwnerAccountId?: StringFilter[];
  ResourceOwnerOrgId?: StringFilter[];
  ResourceProvider?: StringFilter[];
}
export interface CreateInsightRequest {
  Name?: string;
  Filters?: AwsSecurityFindingFilters;
  GroupByAttribute?: string;
}
export interface CreateInsightResponse {
  InsightArn: string;
}
export type AccountId = string;
export interface AccountDetails {
  AccountId?: string;
  Email?: string;
}
export type AccountDetailsList = AccountDetails[];
export interface CreateMembersRequest {
  AccountDetails?: AccountDetails[];
}
export interface Result {
  AccountId?: string;
  ProcessingResult?: string;
}
export type ResultList = Result[];
export interface CreateMembersResponse {
  UnprocessedAccounts?: Result[];
}
export type TicketCreationMode = "DRYRUN" | (string & {});
export interface CreateTicketV2Request {
  ConnectorId?: string;
  FindingMetadataUid?: string;
  ClientToken?: string;
  Mode?: TicketCreationMode;
}
export interface CreateTicketV2Response {
  TicketId: string;
  TicketSrcUrl?: string;
}
export type AccountIdList = string[];
export interface DeclineInvitationsRequest {
  AccountIds?: string[];
}
export interface DeclineInvitationsResponse {
  UnprocessedAccounts?: Result[];
}
export interface DeleteActionTargetRequest {
  ActionTargetArn: string;
}
export interface DeleteActionTargetResponse {
  ActionTargetArn: string;
}
export interface DeleteAggregatorV2Request {
  AggregatorV2Arn: string;
}
export interface DeleteAggregatorV2Response {}
export interface DeleteAutomationRuleV2Request {
  Identifier: string;
}
export interface DeleteAutomationRuleV2Response {}
export interface DeleteConfigurationPolicyRequest {
  Identifier: string;
}
export interface DeleteConfigurationPolicyResponse {}
export interface DeleteConnectorRequest {
  ConnectorId: string;
}
export interface DeleteConnectorResponse {
  EnablementStatus?: CspmEnablementStatus;
}
export interface DeleteConnectorV2Request {
  ConnectorId: string;
}
export interface DeleteConnectorV2Response {
  EnablementStatus?: EnablementStatus;
}
export interface DeleteFindingAggregatorRequest {
  FindingAggregatorArn: string;
}
export interface DeleteFindingAggregatorResponse {}
export interface DeleteInsightRequest {
  InsightArn: string;
}
export interface DeleteInsightResponse {
  InsightArn: string;
}
export interface DeleteInvitationsRequest {
  AccountIds?: string[];
}
export interface DeleteInvitationsResponse {
  UnprocessedAccounts?: Result[];
}
export interface DeleteMembersRequest {
  AccountIds?: string[];
}
export interface DeleteMembersResponse {
  UnprocessedAccounts?: Result[];
}
export type ArnList = string[];
export type NextToken = string;
export type MaxResults = number;
export interface DescribeActionTargetsRequest {
  ActionTargetArns?: string[];
  NextToken?: string;
  MaxResults?: number;
}
export interface ActionTarget {
  ActionTargetArn?: string;
  Name?: string;
  Description?: string;
}
export type ActionTargetList = ActionTarget[];
export interface DescribeActionTargetsResponse {
  ActionTargets: (ActionTarget & {
    ActionTargetArn: NonEmptyString;
    Name: NonEmptyString;
    Description: NonEmptyString;
  })[];
  NextToken?: string;
}
export interface DescribeHubRequest {
  HubArn?: string;
}
export type ControlFindingGenerator = "STANDARD_CONTROL" | "SECURITY_CONTROL" | (string & {});
export interface DescribeHubResponse {
  HubArn?: string;
  SubscribedAt?: string;
  AutoEnableControls?: boolean;
  ControlFindingGenerator?: ControlFindingGenerator;
}
export interface DescribeOrganizationConfigurationRequest {}
export type AutoEnableStandards = "NONE" | "DEFAULT" | (string & {});
export type OrganizationConfigurationConfigurationType = "CENTRAL" | "LOCAL" | (string & {});
export type OrganizationConfigurationStatus = "PENDING" | "ENABLED" | "FAILED" | (string & {});
export interface OrganizationConfiguration {
  ConfigurationType?: OrganizationConfigurationConfigurationType;
  Status?: OrganizationConfigurationStatus;
  StatusMessage?: string;
}
export interface DescribeOrganizationConfigurationResponse {
  AutoEnable?: boolean;
  MemberAccountLimitReached?: boolean;
  AutoEnableStandards?: AutoEnableStandards;
  OrganizationConfiguration?: OrganizationConfiguration;
}
export interface DescribeProductsRequest {
  NextToken?: string;
  MaxResults?: number;
  ProductArn?: string;
}
export type CategoryList = string[];
export type IntegrationType =
  | "SEND_FINDINGS_TO_SECURITY_HUB"
  | "RECEIVE_FINDINGS_FROM_SECURITY_HUB"
  | "UPDATE_FINDINGS_IN_SECURITY_HUB"
  | (string & {});
export type IntegrationTypeList = IntegrationType[];
export interface Product {
  ProductArn?: string;
  ProductName?: string;
  CompanyName?: string;
  Description?: string;
  Categories?: string[];
  IntegrationTypes?: IntegrationType[];
  MarketplaceUrl?: string;
  ActivationUrl?: string;
  ProductSubscriptionResourcePolicy?: string;
}
export type ProductsList = Product[];
export interface DescribeProductsResponse {
  Products: (Product & { ProductArn: NonEmptyString })[];
  NextToken?: string;
}
export interface DescribeProductsV2Request {
  NextToken?: string;
  MaxResults?: number;
}
export type IntegrationV2Type =
  | "SEND_FINDINGS_TO_SECURITY_HUB"
  | "RECEIVE_FINDINGS_FROM_SECURITY_HUB"
  | "UPDATE_FINDINGS_IN_SECURITY_HUB"
  | "EXTENDED_PLAN"
  | (string & {});
export type IntegrationV2TypeList = IntegrationV2Type[];
export interface ProductV2 {
  ProductV2Name?: string;
  CompanyName?: string;
  Description?: string;
  Categories?: string[];
  IntegrationV2Types?: IntegrationV2Type[];
  MarketplaceUrl?: string;
  ActivationUrl?: string;
  MarketplaceProductId?: string;
}
export type ProductsV2List = ProductV2[];
export interface DescribeProductsV2Response {
  ProductsV2: ProductV2[];
  NextToken?: string;
}
export interface DescribeSecurityHubV2Request {}
export type IsoString = string;
export type FeatureNameKey = string;
export type FeatureStatus = "ENABLED" | "DISABLED" | (string & {});
export interface FeatureDetail {
  FeatureStatus?: FeatureStatus;
  UpdatedAt?: Date;
}
export type Features = { [key: string]: FeatureDetail | undefined };
export interface DescribeSecurityHubV2Response {
  HubV2Arn?: string;
  SubscribedAt?: string;
  Features?: { [key: string]: FeatureDetail | undefined };
}
export type StandardsProviders = StandardsProvider[];
export interface DescribeStandardsRequest {
  NextToken?: string;
  MaxResults?: number;
  Providers?: StandardsProvider[];
}
export interface StandardsManagedBy {
  Company?: string;
  Product?: string;
}
export interface Standard {
  StandardsArn?: string;
  Name?: string;
  Description?: string;
  EnabledByDefault?: boolean;
  Provider?: StandardsProvider;
  StandardsManagedBy?: StandardsManagedBy;
}
export type Standards = Standard[];
export interface DescribeStandardsResponse {
  Standards?: Standard[];
  NextToken?: string;
}
export interface DescribeStandardsControlsRequest {
  StandardsSubscriptionArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface StandardsControl {
  StandardsControlArn?: string;
  ControlStatus?: ControlStatus;
  DisabledReason?: string;
  ControlStatusUpdatedAt?: Date;
  ControlId?: string;
  Title?: string;
  Description?: string;
  RemediationUrl?: string;
  SeverityRating?: SeverityRating;
  RelatedRequirements?: string[];
}
export type StandardsControls = StandardsControl[];
export interface DescribeStandardsControlsResponse {
  Controls?: StandardsControl[];
  NextToken?: string;
}
export interface DisableImportFindingsForProductRequest {
  ProductSubscriptionArn: string;
}
export interface DisableImportFindingsForProductResponse {}
export type SecurityHubFeature = "SecurityHub" | "SecurityHubV2" | (string & {});
export interface DisableOrganizationAdminAccountRequest {
  AdminAccountId?: string;
  Feature?: SecurityHubFeature;
}
export interface DisableOrganizationAdminAccountResponse {}
export interface DisableSecurityHubRequest {}
export interface DisableSecurityHubResponse {}
export type FeatureName = "NETWORK_SCANNING" | (string & {});
export interface DisableSecurityHubFeatureV2Request {
  FeatureName: FeatureName;
}
export interface DisableSecurityHubFeatureV2Response {}
export interface DisableSecurityHubV2Request {}
export interface DisableSecurityHubV2Response {}
export interface DisassociateFromAdministratorAccountRequest {}
export interface DisassociateFromAdministratorAccountResponse {}
export interface DisassociateFromMasterAccountRequest {}
export interface DisassociateFromMasterAccountResponse {}
export interface DisassociateMembersRequest {
  AccountIds?: string[];
}
export interface DisassociateMembersResponse {}
export interface EnableImportFindingsForProductRequest {
  ProductArn?: string;
}
export interface EnableImportFindingsForProductResponse {
  ProductSubscriptionArn?: string;
}
export interface EnableOrganizationAdminAccountRequest {
  AdminAccountId?: string;
  Feature?: SecurityHubFeature;
}
export interface EnableOrganizationAdminAccountResponse {
  AdminAccountId?: string;
  Feature?: SecurityHubFeature;
}
export interface EnableSecurityHubRequest {
  Tags?: { [key: string]: string | undefined };
  EnableDefaultStandards?: boolean;
  ControlFindingGenerator?: ControlFindingGenerator;
}
export interface EnableSecurityHubResponse {}
export interface EnableSecurityHubFeatureV2Request {
  FeatureName: FeatureName;
}
export interface EnableSecurityHubFeatureV2Response {}
export interface EnableSecurityHubV2Request {
  Tags?: { [key: string]: string | undefined };
}
export interface EnableSecurityHubV2Response {
  HubV2Arn?: string;
}
export interface GenerateRecommendedPolicyV2Request {
  MetadataUid: string;
}
export interface GenerateRecommendedPolicyV2Response {}
export interface GetAdministratorAccountRequest {}
export interface Invitation {
  AccountId?: string;
  InvitationId?: string;
  InvitedAt?: Date;
  MemberStatus?: string;
}
export interface GetAdministratorAccountResponse {
  Administrator?: Invitation;
}
export interface GetAggregatorV2Request {
  AggregatorV2Arn: string;
}
export interface GetAggregatorV2Response {
  AggregatorV2Arn?: string;
  AggregationRegion?: string;
  RegionLinkingMode?: string;
  LinkedRegions?: string[];
}
export interface GetAutomationRuleV2Request {
  Identifier: string;
}
export interface GetAutomationRuleV2Response {
  RuleArn?: string;
  RuleId?: string;
  RuleOrder?: number;
  RuleName?: string;
  RuleStatus?: RuleStatusV2;
  Description?: string;
  Criteria?: Criteria;
  Actions?: (AutomationRulesActionV2 & { Type: AutomationRulesActionTypeV2 })[];
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export interface GetConfigurationPolicyRequest {
  Identifier: string;
}
export interface GetConfigurationPolicyResponse {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  UpdatedAt?: Date;
  CreatedAt?: Date;
  ConfigurationPolicy?: Policy;
}
export interface GetConfigurationPolicyAssociationRequest {
  Target?: Target;
}
export interface GetConfigurationPolicyAssociationResponse {
  ConfigurationPolicyId?: string;
  TargetId?: string;
  TargetType?: TargetType;
  AssociationType?: AssociationType;
  UpdatedAt?: Date;
  AssociationStatus?: ConfigurationPolicyAssociationStatus;
  AssociationStatusMessage?: string;
}
export interface GetConnectorRequest {
  ConnectorId: string;
}
export type HealthIssueCode =
  | "AUTHENTICATION_FAILURE"
  | "STREAM_AUTHORIZATION_FAILURE"
  | "DISCOVERY_FAILURE"
  | "STREAM_LIMIT_EXCEEDED"
  | "STREAM_DISCONNECTED"
  | "RECORDING_FAILURE"
  | "NO_HEALTH_DATA"
  | (string & {});
export interface HealthIssue {
  Code?: HealthIssueCode;
  Message?: string;
}
export type HealthIssueList = HealthIssue[];
export interface CspmHealthCheck {
  ConnectorStatus?: CspmConnectorStatus;
  Message?: string;
  LastCheckedAt?: Date;
  Issues?: HealthIssue[];
}
export interface AzureDetail {
  AWSConfigConnectorArn?: string;
  ScopeConfiguration?: AzureScopeConfiguration;
  AzureRegions?: string[];
}
export type CspmProviderDetail = { Azure: AzureDetail };
export interface GetConnectorResponse {
  ConnectorArn?: string;
  ConnectorId: string;
  Name: string;
  Description?: string;
  CreatedAt: Date;
  LastUpdatedAt: Date;
  Health: CspmHealthCheck & {
    ConnectorStatus: CspmConnectorStatus;
    LastCheckedAt: Date;
    Issues: (HealthIssue & { Code: HealthIssueCode; Message: NonEmptyString })[];
  };
  ProviderDetail: CspmProviderDetail;
  CreatedBy?: string;
  EnablementStatus?: CspmEnablementStatus;
}
export interface GetConnectorV2Request {
  ConnectorId: string;
}
export interface HealthCheck {
  ConnectorStatus?: ConnectorStatus;
  Message?: string;
  LastCheckedAt?: Date;
  Issues?: HealthIssue[];
}
export type ConnectorAuthStatus = "ACTIVE" | "FAILED" | (string & {});
export interface JiraCloudDetail {
  CloudId?: string;
  ProjectKey?: string;
  Domain?: string;
  AuthUrl?: string;
  AuthStatus?: ConnectorAuthStatus;
}
export interface ServiceNowDetail {
  InstanceName?: string;
  SecretArn?: string;
  AuthStatus?: ConnectorAuthStatus;
}
export type ProviderDetail =
  | { JiraCloud: JiraCloudDetail; ServiceNow?: never; Azure?: never }
  | { JiraCloud?: never; ServiceNow: ServiceNowDetail; Azure?: never }
  | { JiraCloud?: never; ServiceNow?: never; Azure: AzureDetail };
export interface GetConnectorV2Response {
  ConnectorArn?: string;
  ConnectorId: string;
  Name: string;
  Description?: string;
  KmsKeyArn?: string;
  CreatedAt: Date;
  LastUpdatedAt: Date;
  Health: HealthCheck & {
    ConnectorStatus: ConnectorStatus;
    LastCheckedAt: Date;
    Issues: (HealthIssue & { Code: HealthIssueCode; Message: NonEmptyString })[];
  };
  ProviderDetail: ProviderDetail;
  EnablementStatus?: EnablementStatus;
  EnablementStatusReason?: string;
}
export interface GetEnabledStandardsRequest {
  StandardsSubscriptionArns?: string[];
  NextToken?: string;
  MaxResults?: number;
  Providers?: StandardsProvider[];
}
export interface GetEnabledStandardsResponse {
  StandardsSubscriptions?: (StandardsSubscription & {
    StandardsSubscriptionArn: NonEmptyString;
    StandardsArn: NonEmptyString;
    StandardsInput: StandardsInputParameterMap;
    StandardsStatus: StandardsStatus;
    StandardsStatusReason: StandardsStatusReason & { StatusReasonCode: StatusReasonCode };
  })[];
  NextToken?: string;
}
export interface GetFindingAggregatorRequest {
  FindingAggregatorArn: string;
}
export interface GetFindingAggregatorResponse {
  FindingAggregatorArn?: string;
  FindingAggregationRegion?: string;
  RegionLinkingMode?: string;
  Regions?: string[];
}
export interface GetFindingHistoryRequest {
  FindingIdentifier?: AwsSecurityFindingIdentifier;
  StartTime?: Date;
  EndTime?: Date;
  NextToken?: string;
  MaxResults?: number;
}
export type FindingHistoryUpdateSourceType =
  | "BATCH_UPDATE_FINDINGS"
  | "BATCH_IMPORT_FINDINGS"
  | (string & {});
export interface FindingHistoryUpdateSource {
  Type?: FindingHistoryUpdateSourceType;
  Identity?: string;
}
export interface FindingHistoryUpdate {
  UpdatedField?: string;
  OldValue?: string;
  NewValue?: string;
}
export type FindingHistoryUpdatesList = FindingHistoryUpdate[];
export interface FindingHistoryRecord {
  FindingIdentifier?: AwsSecurityFindingIdentifier;
  UpdateTime?: Date;
  FindingCreated?: boolean;
  UpdateSource?: FindingHistoryUpdateSource;
  Updates?: FindingHistoryUpdate[];
  NextToken?: string;
}
export type FindingHistoryRecordList = FindingHistoryRecord[];
export interface GetFindingHistoryResponse {
  Records?: (FindingHistoryRecord & {
    FindingIdentifier: AwsSecurityFindingIdentifier & {
      Id: NonEmptyString;
      ProductArn: NonEmptyString;
    };
  })[];
  NextToken?: string;
}
export type SortOrder = "asc" | "desc" | (string & {});
export interface SortCriterion {
  Field?: string;
  SortOrder?: SortOrder;
}
export type SortCriteria = SortCriterion[];
export interface GetFindingsRequest {
  Filters?: AwsSecurityFindingFilters;
  SortCriteria?: SortCriterion[];
  NextToken?: string;
  MaxResults?: number;
}
export type AwsSecurityFindingList = AwsSecurityFinding[];
export interface GetFindingsResponse {
  Findings: (AwsSecurityFinding & {
    SchemaVersion: NonEmptyString;
    Id: NonEmptyString;
    ProductArn: NonEmptyString;
    GeneratorId: NonEmptyString;
    AwsAccountId: NonEmptyString;
    CreatedAt: NonEmptyString;
    UpdatedAt: NonEmptyString;
    Title: NonEmptyString;
    Description: NonEmptyString;
    Resources: (Resource & { Type: NonEmptyString; Id: NonEmptyString })[];
    Malware: (Malware & { Name: NonEmptyString })[];
    Compliance: Compliance & { StatusReasons: (StatusReason & { ReasonCode: NonEmptyString })[] };
    RelatedFindings: (RelatedFinding & { ProductArn: NonEmptyString; Id: NonEmptyString })[];
    Note: Note & { Text: NonEmptyString; UpdatedBy: NonEmptyString; UpdatedAt: NonEmptyString };
    Vulnerabilities: (Vulnerability & {
      Id: NonEmptyString;
      Vendor: VulnerabilityVendor & { Name: NonEmptyString };
    })[];
    PatchSummary: PatchSummary & { Id: NonEmptyString };
    FindingProviderFields: FindingProviderFields & {
      RelatedFindings: (RelatedFinding & { ProductArn: NonEmptyString; Id: NonEmptyString })[];
    };
  })[];
  NextToken?: string;
}
export type GroupByField =
  | "activity_name"
  | "cloud.account.uid"
  | "cloud.provider"
  | "cloud.region"
  | "compliance.assessments.name"
  | "compliance.status"
  | "compliance.control"
  | "finding_info.title"
  | "finding_info.related_events.traits.category"
  | "finding_info.types"
  | "metadata.product.name"
  | "metadata.product.uid"
  | "resources.type"
  | "resources.cloud_partition"
  | "resources.name"
  | "resources.owner.account.uid"
  | "resources.owner.org.uid"
  | "resources.owner.account.name"
  | "resources.provider"
  | "resources.region"
  | "resources.uid"
  | "severity"
  | "status"
  | "vulnerabilities.fix_coverage"
  | "class_name"
  | "vulnerabilities.affected_packages.name"
  | "finding_info.analytic.name"
  | "compliance.standards"
  | "cloud.account.name"
  | "vendor_attributes.severity"
  | "metadata.product.vendor_name"
  | (string & {});
export interface GroupByRule {
  Filters?: OcsfFindingFilters;
  GroupByField?: GroupByField;
}
export type GroupByRules = GroupByRule[];
export interface AwsOrganizationScope {
  OrganizationId?: string;
  OrganizationalUnitId?: string;
}
export type AwsOrganizationScopeList = AwsOrganizationScope[];
export interface FindingScopes {
  AwsOrganizations?: AwsOrganizationScope[];
}
export type MaxStatisticResults = number;
export interface GetFindingStatisticsV2Request {
  GroupByRules?: GroupByRule[];
  Scopes?: FindingScopes;
  SortOrder?: SortOrder;
  MaxStatisticResults?: number;
}
export interface GroupByValue {
  FieldValue?: string;
  Count?: number;
}
export type GroupByValues = GroupByValue[];
export interface GroupByResult {
  GroupByField?: string;
  GroupByValues?: GroupByValue[];
}
export type GroupByResults = GroupByResult[];
export interface GetFindingStatisticsV2Response {
  GroupByResults?: GroupByResult[];
}
export type FindingsTrendsStringField =
  | "account_id"
  | "region"
  | "finding_types"
  | "finding_status"
  | "finding_cve_ids"
  | "finding_compliance_status"
  | "finding_control_id"
  | "finding_class_name"
  | "finding_provider"
  | "finding_activity_name"
  | "resource_cloud_providers"
  | "resource_regions"
  | "resource_owner_ids"
  | "resource_owner_organization_ids"
  | (string & {});
export interface FindingsTrendsStringFilter {
  FieldName?: FindingsTrendsStringField;
  Filter?: StringFilter;
}
export type FindingsTrendsStringFilterList = FindingsTrendsStringFilter[];
export interface FindingsTrendsCompositeFilter {
  StringFilters?: FindingsTrendsStringFilter[];
  NestedCompositeFilters?: FindingsTrendsCompositeFilter[];
  Operator?: AllowedOperators;
}
export type FindingsTrendsCompositeFilterList = FindingsTrendsCompositeFilter[];
export interface FindingsTrendsFilters {
  CompositeFilters?: FindingsTrendsCompositeFilter[];
  CompositeOperator?: AllowedOperators;
}
export interface GetFindingsTrendsV2Request {
  Filters?: FindingsTrendsFilters;
  StartTime?: Date;
  EndTime?: Date;
  NextToken?: string;
  MaxResults?: number;
}
export type GranularityField = "Daily" | "Weekly" | "Monthly" | (string & {});
export type TrendsValueCount = number;
export interface SeverityTrendsCount {
  Unknown?: number;
  Informational?: number;
  Low?: number;
  Medium?: number;
  High?: number;
  Critical?: number;
  Fatal?: number;
  Other?: number;
}
export interface TrendsValues {
  SeverityTrends?: SeverityTrendsCount;
}
export interface TrendsMetricsResult {
  Timestamp?: Date;
  TrendsValues?: TrendsValues;
}
export type TrendsMetrics = TrendsMetricsResult[];
export interface GetFindingsTrendsV2Response {
  Granularity: GranularityField;
  TrendsMetrics: (TrendsMetricsResult & {
    Timestamp: Date;
    TrendsValues: TrendsValues & {
      SeverityTrends: SeverityTrendsCount & {
        Unknown: TrendsValueCount;
        Informational: TrendsValueCount;
        Low: TrendsValueCount;
        Medium: TrendsValueCount;
        High: TrendsValueCount;
        Critical: TrendsValueCount;
        Fatal: TrendsValueCount;
        Other: TrendsValueCount;
      };
    };
  })[];
  NextToken?: string;
}
export interface GetFindingsV2Request {
  Filters?: OcsfFindingFilters;
  Scopes?: FindingScopes;
  SortCriteria?: SortCriterion[];
  NextToken?: string;
  MaxResults?: number;
}
export type OcsfFinding = unknown;
export type OcsfFindingsList = any[];
export interface GetFindingsV2Response {
  Findings?: any[];
  NextToken?: string;
}
export interface GetInsightResultsRequest {
  InsightArn: string;
}
export interface InsightResultValue {
  GroupByAttributeValue?: string;
  Count?: number;
}
export type InsightResultValueList = InsightResultValue[];
export interface InsightResults {
  InsightArn?: string;
  GroupByAttribute?: string;
  ResultValues?: InsightResultValue[];
}
export interface GetInsightResultsResponse {
  InsightResults: InsightResults & {
    InsightArn: NonEmptyString;
    GroupByAttribute: NonEmptyString;
    ResultValues: (InsightResultValue & { GroupByAttributeValue: NonEmptyString; Count: number })[];
  };
}
export interface GetInsightsRequest {
  InsightArns?: string[];
  NextToken?: string;
  MaxResults?: number;
}
export interface Insight {
  InsightArn?: string;
  Name?: string;
  Filters?: AwsSecurityFindingFilters;
  GroupByAttribute?: string;
}
export type InsightList = Insight[];
export interface GetInsightsResponse {
  Insights: (Insight & {
    InsightArn: NonEmptyString;
    Name: NonEmptyString;
    Filters: AwsSecurityFindingFilters;
    GroupByAttribute: NonEmptyString;
  })[];
  NextToken?: string;
}
export interface GetInvitationsCountRequest {}
export interface GetInvitationsCountResponse {
  InvitationsCount?: number;
}
export interface GetMasterAccountRequest {}
export interface GetMasterAccountResponse {
  Master?: Invitation;
}
export interface GetMembersRequest {
  AccountIds?: string[];
}
export interface Member {
  AccountId?: string;
  Email?: string;
  MasterId?: string;
  AdministratorId?: string;
  MemberStatus?: string;
  InvitedAt?: Date;
  UpdatedAt?: Date;
}
export type MemberList = Member[];
export interface GetMembersResponse {
  Members?: Member[];
  UnprocessedAccounts?: Result[];
}
export interface GetRecommendedPolicyV2Request {
  MetadataUid: string;
  NextToken?: string;
  MaxResults?: number;
}
export type RecommendationType = "UNUSED_PERMISSION_RECOMMENDATION" | (string & {});
export interface UnusedPermissionsRecommendationStep {
  RecommendedAction?: string;
  ExistingPolicy?: string;
  ExistingPolicyId?: string;
  PolicyUpdatedAt?: Date;
  RecommendedPolicy?: string;
}
export type RecommendationStep = { UnusedPermissions: UnusedPermissionsRecommendationStep };
export type RecommendationSteps = RecommendationStep[];
export interface RecommendationError {
  Code?: string;
  Message?: string;
}
export type RecommendationStatus = "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | (string & {});
export interface GetRecommendedPolicyV2Response {
  NextToken?: string;
  RecommendationType?: RecommendationType;
  RecommendationSteps?: RecommendationStep[];
  Error?: RecommendationError;
  Status?: RecommendationStatus;
  ResourceArn?: string;
}
export type RemediationStringUid = string;
export type RemediationStringField =
  | "Resource.Type"
  | "Priority"
  | "Status"
  | "Resource.Id"
  | "Resource.ResourceOwnerAccountId"
  | "Resource.CloudProvider"
  | (string & {});
export interface RemediationStringFilterCondition {
  Value?: string;
}
export interface RemediationStringFilter {
  FieldName?: RemediationStringField;
  Filter?: RemediationStringFilterCondition;
}
export type RemediationStringFilterList = RemediationStringFilter[];
export interface RemediationCompositeFilter {
  StringFilters?: RemediationStringFilter[];
}
export type RemediationCompositeFilterList = RemediationCompositeFilter[];
export interface RemediationFilters {
  CompositeFilters?: RemediationCompositeFilter[];
}
export type GuidanceFormat =
  | "All"
  | "AwsCli"
  | "Cli"
  | "Python"
  | "Terraform"
  | "Cdk"
  | "CloudFormation"
  | "IaC"
  | "Template"
  | (string & {});
export interface GetRemediationsV2Request {
  TargetUid?: string;
  MetadataUid?: string;
  Filters?: RemediationFilters;
  ShowGuidance?: boolean;
  GuidanceFormat?: GuidanceFormat;
  MaxResults?: number;
  NextToken?: string;
}
export interface RemediationOutcome {
  ResolvedFindingsCount?: number;
  SeverityReductionFindingsCount?: number;
  SeverityUnchangedCount?: number;
}
export type RemediationPriority = "Critical" | "High" | "Medium" | "Low" | (string & {});
export type RemediationStringList = string[];
export interface KbArticle {
  Title?: string;
  Url?: string;
}
export type KbArticleList = KbArticle[];
export interface RemediationSummaryDetail {
  Action?: string;
  Description?: string;
  IsImmediate?: boolean;
  PostRemediationSteps?: string[];
  KbArticles?: KbArticle[];
}
export interface RemediationResource {
  AccountId?: string;
  Region?: string;
  ResourceOwnerAccountId?: string;
  ResourceOwnerOrgId?: string;
  Type?: string;
  Name?: string;
  Id?: string;
  ResourceGuid?: string;
  ResourceRegion?: string;
  CloudProvider?: CloudProviderName;
}
export type RemediationStatus = "New" | "Updated" | "Resolved" | (string & {});
export interface RemediationTrait {
  Type?: string;
  Title?: string;
}
export interface RemediationGuidanceContext {
  ProblemStatement?: string;
  RiskAssessment?: string;
  AffectedScope?: string;
  Prerequisites?: string[];
}
export interface RemediationParameter {
  Name?: string;
  Type?: string;
  Description?: string;
  Required?: boolean;
}
export type RemediationParameterList = RemediationParameter[];
export interface RemediationStep {
  Phase?: string;
  Description?: string;
  Service?: string;
  Action?: string;
  Logic?: string;
  Inverse?: string;
  VerifyAfter?: string;
}
export type RemediationStepList = RemediationStep[];
export interface RemediationGuidanceSpecification {
  Parameters?: RemediationParameter[];
  Steps?: RemediationStep[];
  ExpectedEndState?: string;
  RequiredPermissions?: string[];
}
export interface RemediationGuidanceExamples {
  AwsCli?: string;
  Cli?: string;
  Python?: string;
  Terraform?: string;
  Cdk?: string;
  CloudFormation?: string;
  IaC?: string;
  Template?: string;
}
export interface RemediationGuidanceMetadata {
  ResourceType?: string;
  ExposureType?: string;
  TraitTitles?: string[];
  Reversibility?: string;
  FixEffect?: string;
  RiskLevel?: string;
  AutomationLevel?: string;
  HumanReviewRequired?: boolean;
  GeneratedAt?: Date;
  VerificationStatus?: string;
}
export interface RemediationGuidance {
  TargetTypeName?: string;
  Pattern?: string;
  Version?: string;
  Context?: RemediationGuidanceContext;
  Specification?: RemediationGuidanceSpecification;
  Examples?: RemediationGuidanceExamples;
  Metadata?: RemediationGuidanceMetadata;
}
export interface RemediationV2Item {
  TargetUid?: string;
  Outcome?: RemediationOutcome;
  Priority?: RemediationPriority;
  RemediationSummary?: RemediationSummaryDetail;
  Resource?: RemediationResource;
  Status?: RemediationStatus;
  Trait?: RemediationTrait;
  Guidance?: RemediationGuidance;
  UpdatedAt?: Date;
}
export type RemediationV2ItemList = RemediationV2Item[];
export interface GetRemediationsV2Response {
  Items: (RemediationV2Item & {
    TargetUid: NonEmptyString;
    Outcome: RemediationOutcome & {
      ResolvedFindingsCount: number;
      SeverityReductionFindingsCount: number;
      SeverityUnchangedCount: number;
    };
    Priority: RemediationPriority;
    RemediationSummary: RemediationSummaryDetail & {
      Action: NonEmptyString;
      IsImmediate: boolean;
      KbArticles: (KbArticle & { Title: NonEmptyString; Url: NonEmptyString })[];
    };
    Resource: RemediationResource & {
      AccountId: NonEmptyString;
      Region: NonEmptyString;
      Type: NonEmptyString;
      Id: NonEmptyString;
      ResourceRegion: NonEmptyString;
      CloudProvider: CloudProviderName;
    };
    Status: RemediationStatus;
    Trait: RemediationTrait & { Type: NonEmptyString; Title: NonEmptyString };
    Guidance: RemediationGuidance & {
      TargetTypeName: NonEmptyString;
      Pattern: NonEmptyString;
      Version: NonEmptyString;
      Context: RemediationGuidanceContext;
      Specification: RemediationGuidanceSpecification & {
        Parameters: (RemediationParameter & {
          Name: NonEmptyString;
          Type: NonEmptyString;
          Description: NonEmptyString;
        })[];
        Steps: (RemediationStep & {
          Phase: NonEmptyString;
          Description: NonEmptyString;
          Service: NonEmptyString;
          Action: NonEmptyString;
        })[];
      };
      Examples: RemediationGuidanceExamples;
      Metadata: RemediationGuidanceMetadata & {
        ResourceType: NonEmptyString;
        ExposureType: NonEmptyString;
        TraitTitles: RemediationStringList;
        Reversibility: NonEmptyString;
        FixEffect: NonEmptyString;
        RiskLevel: NonEmptyString;
      };
    };
  })[];
  NextToken?: string;
}
export type ResourceGroupByField =
  | "AccountId"
  | "AccountName"
  | "Region"
  | "ResourceProvider"
  | "ResourceOwnerAccountId"
  | "ResourceOwnerOrgId"
  | "ResourceCloudPartition"
  | "ResourceRegion"
  | "ResourceCategory"
  | "ResourceType"
  | "ResourceName"
  | "FindingsSummary.FindingType"
  | "ResourceSubCategory"
  | "DiscoveryType"
  | "ResourceInfo.AIDetails.HostResourceType"
  | "ResourceInfo.AIDetails.CanonicalId"
  | (string & {});
export type ResourcesStringField =
  | "ResourceGuid"
  | "ResourceId"
  | "AccountId"
  | "AccountName"
  | "Region"
  | "ResourceProvider"
  | "ResourceOwnerAccountId"
  | "ResourceOwnerOrgId"
  | "ResourceCloudPartition"
  | "ResourceRegion"
  | "ResourceCategory"
  | "ResourceType"
  | "ResourceName"
  | "FindingsSummary.FindingType"
  | "FindingsSummary.ProductName"
  | "ResourceSubCategory"
  | "DiscoveryType"
  | "ResourceInfo.AIDetails.HostResourceGuid"
  | "ResourceInfo.AIDetails.HostResourceType"
  | "ResourceInfo.AIDetails.CanonicalId"
  | (string & {});
export interface ResourcesStringFilter {
  FieldName?: ResourcesStringField;
  Filter?: StringFilter;
}
export type ResourcesStringFilterList = ResourcesStringFilter[];
export type ResourcesDateField =
  | "ResourceDetailCaptureTime"
  | "ResourceCreationTime"
  | (string & {});
export interface ResourcesDateFilter {
  FieldName?: ResourcesDateField;
  Filter?: DateFilter;
}
export type ResourcesDateFilterList = ResourcesDateFilter[];
export type ResourcesNumberField =
  | "FindingsSummary.TotalFindings"
  | "FindingsSummary.Severities.Other"
  | "FindingsSummary.Severities.Fatal"
  | "FindingsSummary.Severities.Critical"
  | "FindingsSummary.Severities.High"
  | "FindingsSummary.Severities.Medium"
  | "FindingsSummary.Severities.Low"
  | "FindingsSummary.Severities.Informational"
  | "FindingsSummary.Severities.Unknown"
  | "ResourceInfo.AIDetails.SelfHostedAIModelResourceCount"
  | "ResourceInfo.AIDetails.SelfHostedAIAgentResourceCount"
  | "ResourceInfo.AIDetails.SelfHostedAIModelServingResourceCount"
  | "ResourceInfo.AIDetails.SelfHostedAIExternalEndpointResourceCount"
  | "ResourceInfo.AIDetails.SelfHostedAIDevelopmentResourceCount"
  | "ResourceInfo.AIDetails.SelfHostedAIAgentFrameworkResourceCount"
  | "ResourceInfo.AIDetails.SelfHostedAIAgentToolsAndIdentityResourceCount"
  | "ResourceInfo.AIDetails.SelfHostedTotalAIResourceCount"
  | (string & {});
export interface ResourcesNumberFilter {
  FieldName?: ResourcesNumberField;
  Filter?: NumberFilter;
}
export type ResourcesNumberFilterList = ResourcesNumberFilter[];
export type ResourcesMapField = "ResourceTags" | (string & {});
export interface ResourcesMapFilter {
  FieldName?: ResourcesMapField;
  Filter?: MapFilter;
}
export type ResourcesMapFilterList = ResourcesMapFilter[];
export interface ResourcesCompositeFilter {
  StringFilters?: ResourcesStringFilter[];
  DateFilters?: ResourcesDateFilter[];
  NumberFilters?: ResourcesNumberFilter[];
  MapFilters?: ResourcesMapFilter[];
  NestedCompositeFilters?: ResourcesCompositeFilter[];
  Operator?: AllowedOperators;
}
export type ResourcesCompositeFilterList = ResourcesCompositeFilter[];
export interface ResourcesFilters {
  CompositeFilters?: ResourcesCompositeFilter[];
  CompositeOperator?: AllowedOperators;
}
export interface ResourceGroupByRule {
  GroupByField?: ResourceGroupByField;
  Filters?: ResourcesFilters;
}
export type ResourceGroupByRules = ResourceGroupByRule[];
export interface ResourceScopes {
  AwsOrganizations?: AwsOrganizationScope[];
}
export interface GetResourcesStatisticsV2Request {
  GroupByRules?: ResourceGroupByRule[];
  Scopes?: ResourceScopes;
  SortOrder?: SortOrder;
  MaxStatisticResults?: number;
}
export interface GetResourcesStatisticsV2Response {
  GroupByResults: GroupByResult[];
}
export type ResourcesTrendsStringField =
  | "account_id"
  | "region"
  | "resource_type"
  | "resource_category"
  | "resource_cloud_provider"
  | "resource_region"
  | "resource_owner_id"
  | "resource_owner_organization_id"
  | (string & {});
export interface ResourcesTrendsStringFilter {
  FieldName?: ResourcesTrendsStringField;
  Filter?: StringFilter;
}
export type ResourcesTrendsStringFilterList = ResourcesTrendsStringFilter[];
export interface ResourcesTrendsCompositeFilter {
  StringFilters?: ResourcesTrendsStringFilter[];
  NestedCompositeFilters?: ResourcesTrendsCompositeFilter[];
  Operator?: AllowedOperators;
}
export type ResourcesTrendsCompositeFilterList = ResourcesTrendsCompositeFilter[];
export interface ResourcesTrendsFilters {
  CompositeFilters?: ResourcesTrendsCompositeFilter[];
  CompositeOperator?: AllowedOperators;
}
export interface GetResourcesTrendsV2Request {
  Filters?: ResourcesTrendsFilters;
  StartTime?: Date;
  EndTime?: Date;
  NextToken?: string;
  MaxResults?: number;
}
export interface ResourcesCount {
  AllResources?: number;
}
export interface ResourcesTrendsValues {
  ResourcesCount?: ResourcesCount;
}
export interface ResourcesTrendsMetricsResult {
  Timestamp?: Date;
  TrendsValues?: ResourcesTrendsValues;
}
export type ResourcesTrendsMetrics = ResourcesTrendsMetricsResult[];
export interface GetResourcesTrendsV2Response {
  Granularity: GranularityField;
  TrendsMetrics: (ResourcesTrendsMetricsResult & {
    Timestamp: Date;
    TrendsValues: ResourcesTrendsValues & {
      ResourcesCount: ResourcesCount & { AllResources: TrendsValueCount };
    };
  })[];
  NextToken?: string;
}
export interface GetResourcesV2Request {
  Filters?: ResourcesFilters;
  Scopes?: ResourceScopes;
  SortCriteria?: SortCriterion[];
  NextToken?: string;
  MaxResults?: number;
}
export type ResourceCategory =
  | "Compute"
  | "Database"
  | "Storage"
  | "Code"
  | "AI/ML"
  | "Identity"
  | "Network"
  | "Messaging"
  | "Other"
  | (string & {});
export interface ResourceSeverityBreakdown {
  Other?: number;
  Fatal?: number;
  Critical?: number;
  High?: number;
  Medium?: number;
  Low?: number;
  Informational?: number;
  Unknown?: number;
}
export interface ResourceFindingsSummary {
  FindingType?: string;
  ProductName?: string;
  TotalFindings?: number;
  Severities?: ResourceSeverityBreakdown;
}
export type ResourceFindingsSummaryList = ResourceFindingsSummary[];
export interface ResourceTag {
  Key?: string;
  Value?: string;
}
export type ResourceTagList = ResourceTag[];
export type ResourceConfig = unknown;
export type ResourceSubCategory =
  | "Model"
  | "ModelServing"
  | "Agent"
  | "AgentFramework"
  | "AgentToolsAndIdentity"
  | "SafetyAndGuardrail"
  | "KnowledgeAndData"
  | "OrchestrationAndPipeline"
  | "ExternalEndpoint"
  | "Development"
  | "Other"
  | (string & {});
export type DiscoveryType = "Managed" | "SelfHosted" | (string & {});
export interface AIDetails {
  HostResourceGuid?: string;
  HostResourceType?: string;
  CanonicalId?: string;
  SelfHostedAIModelResourceCount?: number;
  SelfHostedAIAgentResourceCount?: number;
  SelfHostedAIModelServingResourceCount?: number;
  SelfHostedAIExternalEndpointResourceCount?: number;
  SelfHostedAIDevelopmentResourceCount?: number;
  SelfHostedAIAgentFrameworkResourceCount?: number;
  SelfHostedAIAgentToolsAndIdentityResourceCount?: number;
  SelfHostedTotalAIResourceCount?: number;
}
export interface ResourceInfo {
  AIDetails?: AIDetails;
}
export interface ResourceResult {
  ResourceGuid?: string;
  ResourceId?: string;
  AccountId?: string;
  AccountName?: string;
  Region?: string;
  ResourceProvider?: string;
  ResourceOwnerAccountId?: string;
  ResourceOwnerOrgId?: string;
  ResourceCloudPartition?: string;
  ResourceRegion?: string;
  ResourceCategory?: ResourceCategory;
  ResourceType?: string;
  ResourceName?: string;
  ResourceCreationTimeDt?: string;
  ResourceDetailCaptureTimeDt?: string;
  FindingsSummary?: ResourceFindingsSummary[];
  ResourceTags?: ResourceTag[];
  ResourceConfig?: any;
  ResourceSubCategory?: ResourceSubCategory;
  DiscoveryType?: DiscoveryType;
  ResourceInfo?: ResourceInfo;
}
export type Resources = ResourceResult[];
export interface GetResourcesV2Response {
  Resources: (ResourceResult & {
    ResourceId: NonEmptyString;
    AccountId: NonEmptyString;
    Region: NonEmptyString;
    ResourceType: NonEmptyString;
    ResourceDetailCaptureTimeDt: NonEmptyString;
    ResourceConfig: ResourceConfig;
    FindingsSummary: (ResourceFindingsSummary & {
      FindingType: NonEmptyString;
      ProductName: NonEmptyString;
      TotalFindings: number;
    })[];
    ResourceTags: (ResourceTag & { Key: NonEmptyString; Value: NonEmptyString })[];
  })[];
  NextToken?: string;
}
export interface GetSecurityControlDefinitionRequest {
  SecurityControlId?: string;
}
export type RegionAvailabilityStatus = "AVAILABLE" | "UNAVAILABLE" | (string & {});
export type SecurityControlProperty = "Parameters" | (string & {});
export type CustomizableProperties = SecurityControlProperty[];
export interface IntegerConfigurationOptions {
  DefaultValue?: number;
  Min?: number;
  Max?: number;
}
export interface IntegerListConfigurationOptions {
  DefaultValue?: number[];
  Min?: number;
  Max?: number;
  MaxItems?: number;
}
export interface DoubleConfigurationOptions {
  DefaultValue?: number;
  Min?: number;
  Max?: number;
}
export interface StringConfigurationOptions {
  DefaultValue?: string;
  Re2Expression?: string;
  ExpressionDescription?: string;
}
export interface StringListConfigurationOptions {
  DefaultValue?: string[];
  Re2Expression?: string;
  MaxItems?: number;
  ExpressionDescription?: string;
}
export interface BooleanConfigurationOptions {
  DefaultValue?: boolean;
}
export interface EnumConfigurationOptions {
  DefaultValue?: string;
  AllowedValues?: string[];
}
export interface EnumListConfigurationOptions {
  DefaultValue?: string[];
  MaxItems?: number;
  AllowedValues?: string[];
}
export type ConfigurationOptions =
  | {
      Integer: IntegerConfigurationOptions;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList: IntegerListConfigurationOptions;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double: DoubleConfigurationOptions;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String: StringConfigurationOptions;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList: StringListConfigurationOptions;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean: BooleanConfigurationOptions;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum: EnumConfigurationOptions;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList: EnumListConfigurationOptions;
    };
export interface ParameterDefinition {
  Description?: string;
  ConfigurationOptions?: ConfigurationOptions;
}
export type ParameterDefinitions = { [key: string]: ParameterDefinition | undefined };
export interface SecurityControlDefinition {
  SecurityControlId?: string;
  Title?: string;
  Description?: string;
  RemediationUrl?: string;
  SeverityRating?: SeverityRating;
  CurrentRegionAvailability?: RegionAvailabilityStatus;
  CustomizableProperties?: SecurityControlProperty[];
  ParameterDefinitions?: { [key: string]: ParameterDefinition | undefined };
  Provider?: SecurityControlsProvider;
}
export interface GetSecurityControlDefinitionResponse {
  SecurityControlDefinition: SecurityControlDefinition & {
    SecurityControlId: NonEmptyString;
    Title: NonEmptyString;
    Description: NonEmptyString;
    RemediationUrl: NonEmptyString;
    SeverityRating: SeverityRating;
    CurrentRegionAvailability: RegionAvailabilityStatus;
    ParameterDefinitions: {
      [key: string]:
        | (ParameterDefinition & {
            Description: NonEmptyString;
            ConfigurationOptions: ConfigurationOptions;
          })
        | undefined;
    };
  };
}
export interface InviteMembersRequest {
  AccountIds?: string[];
}
export interface InviteMembersResponse {
  UnprocessedAccounts?: Result[];
}
export interface ListAggregatorsV2Request {
  NextToken?: string;
  MaxResults?: number;
}
export interface AggregatorV2 {
  AggregatorV2Arn?: string;
}
export type AggregatorV2List = AggregatorV2[];
export interface ListAggregatorsV2Response {
  AggregatorsV2?: AggregatorV2[];
  NextToken?: string;
}
export interface ListAutomationRulesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface AutomationRulesMetadata {
  RuleArn?: string;
  RuleStatus?: RuleStatus;
  RuleOrder?: number;
  RuleName?: string;
  Description?: string;
  IsTerminal?: boolean;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  CreatedBy?: string;
}
export type AutomationRulesMetadataList = AutomationRulesMetadata[];
export interface ListAutomationRulesResponse {
  AutomationRulesMetadata?: AutomationRulesMetadata[];
  NextToken?: string;
}
export interface ListAutomationRulesV2Request {
  NextToken?: string;
  MaxResults?: number;
}
export interface AutomationRulesActionTypeObjectV2 {
  Type?: AutomationRulesActionTypeV2;
}
export type AutomationRulesActionTypeListV2 = AutomationRulesActionTypeObjectV2[];
export interface AutomationRulesMetadataV2 {
  RuleArn?: string;
  RuleId?: string;
  RuleOrder?: number;
  RuleName?: string;
  RuleStatus?: RuleStatusV2;
  Description?: string;
  Actions?: AutomationRulesActionTypeObjectV2[];
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export type AutomationRulesMetadataListV2 = AutomationRulesMetadataV2[];
export interface ListAutomationRulesV2Response {
  Rules?: AutomationRulesMetadataV2[];
  NextToken?: string;
}
export interface ListConfigurationPoliciesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ConfigurationPolicySummary {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  UpdatedAt?: Date;
  ServiceEnabled?: boolean;
}
export type ConfigurationPolicySummaryList = ConfigurationPolicySummary[];
export interface ListConfigurationPoliciesResponse {
  ConfigurationPolicySummaries?: ConfigurationPolicySummary[];
  NextToken?: string;
}
export interface AssociationFilters {
  ConfigurationPolicyId?: string;
  AssociationType?: AssociationType;
  AssociationStatus?: ConfigurationPolicyAssociationStatus;
}
export interface ListConfigurationPolicyAssociationsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: AssociationFilters;
}
export type ConfigurationPolicyAssociationSummaryList = ConfigurationPolicyAssociationSummary[];
export interface ListConfigurationPolicyAssociationsResponse {
  ConfigurationPolicyAssociationSummaries?: ConfigurationPolicyAssociationSummary[];
  NextToken?: string;
}
export type CspmConnectorProviderName = "AZURE" | (string & {});
export interface ListConnectorsRequest {
  NextToken?: string;
  MaxResults?: number;
  ProviderName?: CspmConnectorProviderName;
  ConnectorStatus?: CspmConnectorStatus;
  EnablementStatus?: CspmEnablementStatus;
}
export interface CspmProviderSummary {
  ProviderName?: CspmConnectorProviderName;
  ConnectorStatus?: CspmConnectorStatus;
  ProviderConfiguration?: CspmProviderDetail;
}
export interface CspmConnectorSummary {
  ConnectorArn?: string;
  ConnectorId?: string;
  Name?: string;
  Description?: string;
  ProviderSummary?: CspmProviderSummary;
  CreatedAt?: Date;
  CreatedBy?: string;
  EnablementStatus?: CspmEnablementStatus;
}
export type CspmConnectorSummaryList = CspmConnectorSummary[];
export interface ListConnectorsResponse {
  NextToken?: string;
  Connectors: CspmConnectorSummary[];
}
export type ConnectorProviderName = "JIRA_CLOUD" | "SERVICENOW" | "AZURE" | (string & {});
export interface ListConnectorsV2Request {
  NextToken?: string;
  MaxResults?: number;
  ProviderName?: ConnectorProviderName;
  ConnectorStatus?: ConnectorStatus;
  EnablementStatus?: EnablementStatus;
}
export interface ProviderSummary {
  ProviderName?: ConnectorProviderName;
  ConnectorStatus?: ConnectorStatus;
  ProviderConfiguration?: ProviderDetail;
}
export interface ConnectorSummary {
  ConnectorArn?: string;
  ConnectorId?: string;
  Name?: string;
  Description?: string;
  ProviderSummary?: ProviderSummary;
  CreatedAt?: Date;
  EnablementStatus?: EnablementStatus;
  EnablementStatusReason?: string;
}
export type ConnectorSummaryList = ConnectorSummary[];
export interface ListConnectorsV2Response {
  NextToken?: string;
  Connectors: (ConnectorSummary & {
    ConnectorId: NonEmptyString;
    Name: NonEmptyString;
    ProviderSummary: ProviderSummary;
    CreatedAt: Date;
  })[];
}
export interface ListEnabledProductsForImportRequest {
  NextToken?: string;
  MaxResults?: number;
}
export type ProductSubscriptionArnList = string[];
export interface ListEnabledProductsForImportResponse {
  ProductSubscriptions?: string[];
  NextToken?: string;
}
export interface ListExposuresByRemediationV2Request {
  TargetUid?: string;
  MaxResults?: number;
  NextToken?: string;
}
export type ExposureSeverity =
  | "Informational"
  | "Low"
  | "Medium"
  | "High"
  | "Critical"
  | (string & {});
export type ExposureImpact = "Reduces" | "Resolves" | "Unchanged" | (string & {});
export interface ExposureFinding {
  MetadataUid?: string;
  Title?: string;
  PreviousSeverity?: ExposureSeverity;
  ProjectedSeverity?: ExposureSeverity;
  Impact?: ExposureImpact;
}
export type ExposureFindingItemsList = ExposureFinding[];
export interface ListExposuresByRemediationV2Response {
  Items: (ExposureFinding & {
    MetadataUid: NonEmptyString;
    Title: NonEmptyString;
    PreviousSeverity: ExposureSeverity;
    ProjectedSeverity: ExposureSeverity;
    Impact: ExposureImpact;
  })[];
  TargetUid: string;
  Resource: RemediationResource & {
    AccountId: NonEmptyString;
    Region: NonEmptyString;
    Type: NonEmptyString;
    Id: NonEmptyString;
    ResourceRegion: NonEmptyString;
    CloudProvider: CloudProviderName;
  };
  TotalCount: number;
  Trait: RemediationTrait & { Type: NonEmptyString; Title: NonEmptyString };
  NextToken?: string;
}
export interface ListFindingAggregatorsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface FindingAggregator {
  FindingAggregatorArn?: string;
}
export type FindingAggregatorList = FindingAggregator[];
export interface ListFindingAggregatorsResponse {
  FindingAggregators?: FindingAggregator[];
  NextToken?: string;
}
export type FreeTrialAccountId = string;
export type FreeTrialAccountIdList = string[];
export type FreeTrialStatusValue = "ACTIVE" | "INACTIVE" | (string & {});
export type FreeTrialStatusValueList = FreeTrialStatusValue[];
export interface ListFreeTrialStatusesV2Request {
  AccountIds?: string[];
  Statuses?: FreeTrialStatusValue[];
  MaxResults?: number;
  NextToken?: string;
}
export type FreeTrialType = "SECURITY_HUB_V2" | "SECURITY_HUB_V2_MULTI_CLOUD_AZURE" | (string & {});
export interface FreeTrialStatus {
  FeatureType?: FreeTrialType;
  Status?: FreeTrialStatusValue;
  StartedAt?: Date;
  ExpiresAt?: Date;
}
export type FreeTrialStatusList = FreeTrialStatus[];
export interface AccountFreeTrialStatus {
  AccountId?: string;
  EvaluatedAt?: Date;
  FreeTrialStatuses?: FreeTrialStatus[];
}
export type AccountFreeTrialStatusList = AccountFreeTrialStatus[];
export interface ListFreeTrialStatusesV2Response {
  AccountFreeTrialStatuses: (AccountFreeTrialStatus & {
    AccountId: FreeTrialAccountId;
    EvaluatedAt: Date;
    FreeTrialStatuses: (FreeTrialStatus & {
      FeatureType: FreeTrialType;
      Status: FreeTrialStatusValue;
      StartedAt: Date;
      ExpiresAt: Date;
    })[];
  })[];
  NextToken?: string;
}
export type CrossAccountMaxResults = number;
export interface ListInvitationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export type InvitationList = Invitation[];
export interface ListInvitationsResponse {
  Invitations?: Invitation[];
  NextToken?: string;
}
export interface ListMembersRequest {
  OnlyAssociated?: boolean;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListMembersResponse {
  Members?: Member[];
  NextToken?: string;
}
export type AdminsMaxResults = number;
export interface ListOrganizationAdminAccountsRequest {
  MaxResults?: number;
  NextToken?: string;
  Feature?: SecurityHubFeature;
}
export type AdminStatus = "ENABLED" | "DISABLE_IN_PROGRESS" | (string & {});
export interface AdminAccount {
  AccountId?: string;
  Status?: AdminStatus;
}
export type AdminAccounts = AdminAccount[];
export interface ListOrganizationAdminAccountsResponse {
  AdminAccounts?: AdminAccount[];
  NextToken?: string;
  Feature?: SecurityHubFeature;
}
export type SecurityControlsProviders = SecurityControlsProvider[];
export interface ListSecurityControlDefinitionsRequest {
  StandardsArn?: string;
  NextToken?: string;
  MaxResults?: number;
  Providers?: SecurityControlsProvider[];
}
export type SecurityControlDefinitions = SecurityControlDefinition[];
export interface ListSecurityControlDefinitionsResponse {
  SecurityControlDefinitions: (SecurityControlDefinition & {
    SecurityControlId: NonEmptyString;
    Title: NonEmptyString;
    Description: NonEmptyString;
    RemediationUrl: NonEmptyString;
    SeverityRating: SeverityRating;
    CurrentRegionAvailability: RegionAvailabilityStatus;
    ParameterDefinitions: {
      [key: string]:
        | (ParameterDefinition & {
            Description: NonEmptyString;
            ConfigurationOptions: ConfigurationOptions;
          })
        | undefined;
    };
  })[];
  NextToken?: string;
}
export interface ListStandardsControlAssociationsRequest {
  SecurityControlId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface StandardsControlAssociationSummary {
  StandardsArn?: string;
  SecurityControlId?: string;
  SecurityControlArn?: string;
  AssociationStatus?: AssociationStatus;
  RelatedRequirements?: string[];
  UpdatedAt?: Date;
  UpdatedReason?: string;
  StandardsControlTitle?: string;
  StandardsControlDescription?: string;
}
export type StandardsControlAssociationSummaries = StandardsControlAssociationSummary[];
export interface ListStandardsControlAssociationsResponse {
  StandardsControlAssociationSummaries: (StandardsControlAssociationSummary & {
    StandardsArn: NonEmptyString;
    SecurityControlId: NonEmptyString;
    SecurityControlArn: NonEmptyString;
    AssociationStatus: AssociationStatus;
  })[];
  NextToken?: string;
}
export type ResourceArn = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
export interface RegisterConnectorV2Request {
  AuthCode?: string;
  AuthState?: string;
}
export interface RegisterConnectorV2Response {
  ConnectorArn?: string;
  ConnectorId: string;
}
export interface StartConfigurationPolicyAssociationRequest {
  ConfigurationPolicyIdentifier?: string;
  Target?: Target;
}
export interface StartConfigurationPolicyAssociationResponse {
  ConfigurationPolicyId?: string;
  TargetId?: string;
  TargetType?: TargetType;
  AssociationType?: AssociationType;
  UpdatedAt?: Date;
  AssociationStatus?: ConfigurationPolicyAssociationStatus;
  AssociationStatusMessage?: string;
}
export interface StartConfigurationPolicyDisassociationRequest {
  Target?: Target;
  ConfigurationPolicyIdentifier?: string;
}
export interface StartConfigurationPolicyDisassociationResponse {}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags?: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys?: string[];
}
export interface UntagResourceResponse {}
export interface UpdateActionTargetRequest {
  ActionTargetArn: string;
  Name?: string;
  Description?: string;
}
export interface UpdateActionTargetResponse {}
export interface UpdateAggregatorV2Request {
  AggregatorV2Arn: string;
  RegionLinkingMode?: string;
  LinkedRegions?: string[];
}
export interface UpdateAggregatorV2Response {
  AggregatorV2Arn?: string;
  AggregationRegion?: string;
  RegionLinkingMode?: string;
  LinkedRegions?: string[];
}
export interface UpdateAutomationRuleV2Request {
  Identifier: string;
  RuleStatus?: RuleStatusV2;
  RuleOrder?: number;
  Description?: string;
  RuleName?: string;
  Criteria?: Criteria;
  Actions?: AutomationRulesActionV2[];
}
export interface UpdateAutomationRuleV2Response {}
export interface UpdateConfigurationPolicyRequest {
  Identifier: string;
  Name?: string;
  Description?: string;
  UpdatedReason?: string;
  ConfigurationPolicy?: Policy;
}
export interface UpdateConfigurationPolicyResponse {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  UpdatedAt?: Date;
  CreatedAt?: Date;
  ConfigurationPolicy?: Policy;
}
export interface AzureUpdateConfiguration {
  ScopeConfiguration?: AzureScopeConfiguration;
  AzureRegions?: string[];
}
export type CspmProviderUpdateConfiguration = { Azure: AzureUpdateConfiguration };
export interface UpdateConnectorRequest {
  ConnectorId: string;
  Description?: string;
  Provider?: CspmProviderUpdateConfiguration;
}
export interface UpdateConnectorResponse {
  ConnectorStatus?: CspmConnectorStatus;
  EnablementStatus?: CspmEnablementStatus;
}
export interface JiraCloudUpdateConfiguration {
  ProjectKey?: string;
}
export interface ServiceNowUpdateConfiguration {
  SecretArn?: string;
}
export type ProviderUpdateConfiguration =
  | { JiraCloud: JiraCloudUpdateConfiguration; ServiceNow?: never; Azure?: never }
  | { JiraCloud?: never; ServiceNow: ServiceNowUpdateConfiguration; Azure?: never }
  | { JiraCloud?: never; ServiceNow?: never; Azure: AzureUpdateConfiguration };
export interface UpdateConnectorV2Request {
  ConnectorId: string;
  Description?: string;
  Provider?: ProviderUpdateConfiguration;
}
export interface UpdateConnectorV2Response {
  ConnectorStatus?: ConnectorStatus;
  EnablementStatus?: EnablementStatus;
}
export interface UpdateFindingAggregatorRequest {
  FindingAggregatorArn?: string;
  RegionLinkingMode?: string;
  Regions?: string[];
}
export interface UpdateFindingAggregatorResponse {
  FindingAggregatorArn?: string;
  FindingAggregationRegion?: string;
  RegionLinkingMode?: string;
  Regions?: string[];
}
export interface UpdateFindingsRequest {
  Filters?: AwsSecurityFindingFilters;
  Note?: NoteUpdate;
  RecordState?: RecordState;
}
export interface UpdateFindingsResponse {}
export interface UpdateInsightRequest {
  InsightArn: string;
  Name?: string;
  Filters?: AwsSecurityFindingFilters;
  GroupByAttribute?: string;
}
export interface UpdateInsightResponse {}
export interface UpdateOrganizationConfigurationRequest {
  AutoEnable?: boolean;
  AutoEnableStandards?: AutoEnableStandards;
  OrganizationConfiguration?: OrganizationConfiguration;
}
export interface UpdateOrganizationConfigurationResponse {}
export interface UpdateSecurityControlRequest {
  SecurityControlId?: string;
  Parameters?: { [key: string]: ParameterConfiguration | undefined };
  LastUpdateReason?: string;
}
export interface UpdateSecurityControlResponse {}
export interface UpdateSecurityHubConfigurationRequest {
  AutoEnableControls?: boolean;
  ControlFindingGenerator?: ControlFindingGenerator;
}
export interface UpdateSecurityHubConfigurationResponse {}
export interface UpdateStandardsControlRequest {
  StandardsControlArn: string;
  ControlStatus?: ControlStatus;
  DisabledReason?: string;
}
export interface UpdateStandardsControlResponse {}
export type AcceptAdministratorInvitationError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts.
 * For information, see Managing Security Hub CSPM administrator and member accounts with Organizations
 * in the *Security Hub CSPM User Guide*.
 *
 * Accepts the invitation to be a member account and be monitored by the Security Hub CSPM administrator
 * account that the invitation was sent from.
 *
 * This operation is only used by member accounts that are not added through
 * Organizations.
 *
 * When the member account accepts the invitation, permission is granted to the administrator
 * account to view findings generated in the member account.
 */
export const acceptAdministratorInvitation: API.OperationMethod<
  AcceptAdministratorInvitationRequest,
  AcceptAdministratorInvitationResponse,
  AcceptAdministratorInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<AcceptAdministratorInvitationRequest>,
  output: __S(1) as any as S.Schema<AcceptAdministratorInvitationResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptAdministratorInvitation",
}));

export type AcceptInvitationError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * This method is deprecated. Instead, use `AcceptAdministratorInvitation`.
 *
 * The Security Hub CSPM console continues to use `AcceptInvitation`. It will eventually change to use `AcceptAdministratorInvitation`. Any IAM policies that specifically control access to this function must continue to use `AcceptInvitation`. You should also add `AcceptAdministratorInvitation` to your policies to ensure that the correct permissions are in place after the console begins to use `AcceptAdministratorInvitation`.
 *
 * Accepts the invitation to be a member account and be monitored by the Security Hub CSPM administrator
 * account that the invitation was sent from.
 *
 * This operation is only used by member accounts that are not added through
 * Organizations.
 *
 * When the member account accepts the invitation, permission is granted to the administrator
 * account to view findings generated in the member account.
 */
export const acceptInvitation: API.OperationMethod<
  AcceptInvitationRequest,
  AcceptInvitationResponse,
  AcceptInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<AcceptInvitationRequest>,
  output: __S(3) as any as S.Schema<AcceptInvitationResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptInvitation",
}));

export type BatchDeleteAutomationRulesError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes one or more automation rules.
 */
export const batchDeleteAutomationRules: API.OperationMethod<
  BatchDeleteAutomationRulesRequest,
  BatchDeleteAutomationRulesResponse,
  BatchDeleteAutomationRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5) as any as S.Schema<BatchDeleteAutomationRulesRequest>,
  output: __S(8) as any as S.Schema<BatchDeleteAutomationRulesResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteAutomationRules",
}));

export type BatchDisableStandardsError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Disables the standards specified by the provided
 * `StandardsSubscriptionArns`.
 *
 * For more information, see Security Standards section of the Security Hub CSPM User
 * Guide.
 */
export const batchDisableStandards: API.OperationMethod<
  BatchDisableStandardsRequest,
  BatchDisableStandardsResponse,
  BatchDisableStandardsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<BatchDisableStandardsRequest>,
  output: __S(14) as any as S.Schema<BatchDisableStandardsResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDisableStandards",
}));

export type BatchEnableStandardsError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Enables the standards specified by the provided `StandardsArn`. To obtain the
 * ARN for a standard, use the `DescribeStandards`
 * operation.
 *
 * For more information, see the Security Standards
 * section of the *Security Hub CSPM User Guide*.
 */
export const batchEnableStandards: API.OperationMethod<
  BatchEnableStandardsRequest,
  BatchEnableStandardsResponse,
  BatchEnableStandardsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17) as any as S.Schema<BatchEnableStandardsRequest>,
  output: __S(14) as any as S.Schema<BatchEnableStandardsResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchEnableStandards",
}));

export type BatchGetAutomationRulesError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a list of details for automation rules based on rule Amazon Resource Names
 * (ARNs).
 */
export const batchGetAutomationRules: API.OperationMethod<
  BatchGetAutomationRulesRequest,
  BatchGetAutomationRulesResponse,
  BatchGetAutomationRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18) as any as S.Schema<BatchGetAutomationRulesRequest>,
  output: __S(40) as any as S.Schema<BatchGetAutomationRulesResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetAutomationRules",
}));

export type BatchGetConfigurationPolicyAssociationsError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns associations between an Security Hub CSPM configuration and a batch of target accounts, organizational units, or the root.
 * Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region. A configuration
 * can refer to a configuration policy or to a self-managed configuration.
 */
export const batchGetConfigurationPolicyAssociations: API.OperationMethod<
  BatchGetConfigurationPolicyAssociationsRequest,
  BatchGetConfigurationPolicyAssociationsResponse,
  BatchGetConfigurationPolicyAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44) as any as S.Schema<BatchGetConfigurationPolicyAssociationsRequest>,
  output: __S(49) as any as S.Schema<BatchGetConfigurationPolicyAssociationsResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetConfigurationPolicyAssociations",
}));

export type BatchGetSecurityControlsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Provides details about a batch of security controls for the current Amazon Web Services account and Amazon Web Services Region.
 */
export const batchGetSecurityControls: API.OperationMethod<
  BatchGetSecurityControlsRequest,
  BatchGetSecurityControlsResponse,
  BatchGetSecurityControlsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50) as any as S.Schema<BatchGetSecurityControlsRequest>,
  output: __S(59) as any as S.Schema<BatchGetSecurityControlsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetSecurityControls",
}));

export type BatchGetStandardsControlAssociationsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * For a batch of security controls and standards, identifies whether each control is currently enabled or disabled in a standard.
 *
 * Calls to this operation return a `RESOURCE_NOT_FOUND_EXCEPTION` error when the standard subscription for the association has a `NOT_READY_FOR_UPDATES` value for `StandardsControlsUpdatable`.
 */
export const batchGetStandardsControlAssociations: API.OperationMethod<
  BatchGetStandardsControlAssociationsRequest,
  BatchGetStandardsControlAssociationsResponse,
  BatchGetStandardsControlAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62) as any as S.Schema<BatchGetStandardsControlAssociationsRequest>,
  output: __S(67) as any as S.Schema<BatchGetStandardsControlAssociationsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetStandardsControlAssociations",
}));

export type BatchImportFindingsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Imports security findings generated by a finding provider into Security Hub CSPM.
 * This action is requested by the finding provider to import its findings into
 * Security Hub CSPM.
 *
 * `BatchImportFindings` must be called by one of the following:
 *
 * - The Amazon Web Services account that is associated with a finding if you are using
 * the default product ARN
 * or are a partner sending findings from within a customer's Amazon Web Services account.
 * In these cases, the identifier of the account that you are calling `BatchImportFindings`
 * from needs to be the same as the `AwsAccountId` attribute for the finding.
 *
 * - An Amazon Web Services account that Security Hub CSPM has allow-listed for an official partner
 * integration. In this case, you can call `BatchImportFindings` from the allow-listed
 * account and send findings from different customer accounts in the same batch.
 *
 * The maximum allowed size for a finding is 240 Kb. An error is returned for any finding
 * larger than 240 Kb.
 *
 * After a finding is created, `BatchImportFindings` cannot be used to update
 * the following finding fields and objects, which Security Hub CSPM customers use to manage their
 * investigation workflow.
 *
 * - `Note`
 *
 * - `UserDefinedFields`
 *
 * - `VerificationState`
 *
 * - `Workflow`
 *
 * Finding providers also should not use `BatchImportFindings` to update the following attributes.
 *
 * - `Confidence`
 *
 * - `Criticality`
 *
 * - `RelatedFindings`
 *
 * - `Severity`
 *
 * - `Types`
 *
 * Instead, finding providers use `FindingProviderFields` to provide values for these attributes.
 */
export const batchImportFindings: API.OperationMethod<
  BatchImportFindingsRequest,
  BatchImportFindingsResponse,
  BatchImportFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(814) as any as S.Schema<BatchImportFindingsRequest>,
  output: __S(817) as any as S.Schema<BatchImportFindingsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchImportFindings",
}));

export type BatchUpdateAutomationRulesError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates one or more automation rules based on rule Amazon Resource Names (ARNs)
 * and input parameters.
 */
export const batchUpdateAutomationRules: API.OperationMethod<
  BatchUpdateAutomationRulesRequest,
  BatchUpdateAutomationRulesResponse,
  BatchUpdateAutomationRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(820) as any as S.Schema<BatchUpdateAutomationRulesRequest>,
  output: __S(8) as any as S.Schema<BatchUpdateAutomationRulesResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateAutomationRules",
}));

export type BatchUpdateFindingsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Used by Security Hub CSPM customers to update information about their investigation into one or more findings.
 * Requested by administrator accounts or member accounts.
 * Administrator accounts can update findings for their account and their member accounts.
 * A member account can update findings only for their own account.
 * Administrator and member accounts can use this operation to update the following fields and objects for one or more findings:
 *
 * - `Confidence`
 *
 * - `Criticality`
 *
 * - `Note`
 *
 * - `RelatedFindings`
 *
 * - `Severity`
 *
 * - `Types`
 *
 * - `UserDefinedFields`
 *
 * - `VerificationState`
 *
 * - `Workflow`
 *
 * If you use this operation to update a finding, your updates don't affect the value for the `UpdatedAt` field of the finding.
 * Also note that it can take several minutes for Security Hub CSPM to process your request and update each finding specified in the request.
 *
 * You can configure IAM policies to restrict access to fields and field values.
 * For example, you might not want member accounts to be able to suppress findings or change the finding severity.
 * For more information see Configuring access to BatchUpdateFindings in the *Security Hub CSPM User Guide*.
 */
export const batchUpdateFindings: API.OperationMethod<
  BatchUpdateFindingsRequest,
  BatchUpdateFindingsResponse,
  BatchUpdateFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(823) as any as S.Schema<BatchUpdateFindingsRequest>,
  output: __S(826) as any as S.Schema<BatchUpdateFindingsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateFindings",
}));

export type BatchUpdateFindingsV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates information about a customer's investigation into a finding. Delegated administrator accounts can update findings for their account and their member accounts. Member accounts can update findings for their own account.
 *
 * `BatchUpdateFindings` and `BatchUpdateFindingsV2` both use `securityhub:BatchUpdateFindings` in the `Action` element of an IAM policy statement.
 * You must have permission to perform the `securityhub:BatchUpdateFindings` action.
 * You can configure IAM policies to restrict access to specific finding fields or field values by using the `securityhub:OCSFSyntaxPath/` condition key, where `` is one of the following supported fields: `SeverityId`, `StatusId`, or `Comment`.
 *
 * To prevent a user from updating a specific field, use a `Null` condition with `securityhub:OCSFSyntaxPath/` set to `"false"`.
 * To prevent a user from setting a field to a specific value, use a `StringEquals` condition with `securityhub:OCSFSyntaxPath/` set to the disallowed value or list of values.
 *
 * Updates from `BatchUpdateFindingsV2` don't affect the value of `finding_info.modified_time`, `finding_info.modified_time_dt`, `time`, or `time_dt` for a finding.
 */
export const batchUpdateFindingsV2: API.OperationMethod<
  BatchUpdateFindingsV2Request,
  BatchUpdateFindingsV2Response,
  BatchUpdateFindingsV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(829) as any as S.Schema<BatchUpdateFindingsV2Request>,
  output: __S(834) as any as S.Schema<BatchUpdateFindingsV2Response>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateFindingsV2",
}));

export type BatchUpdateStandardsControlAssociationsError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * For a batch of security controls and standards, this operation updates the enablement status of a control in a standard.
 */
export const batchUpdateStandardsControlAssociations: API.OperationMethod<
  BatchUpdateStandardsControlAssociationsRequest,
  BatchUpdateStandardsControlAssociationsResponse,
  BatchUpdateStandardsControlAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(837) as any as S.Schema<BatchUpdateStandardsControlAssociationsRequest>,
  output: __S(840) as any as S.Schema<BatchUpdateStandardsControlAssociationsResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateStandardsControlAssociations",
}));

export type CreateActionTargetError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceConflictException
  | CommonErrors;
/**
 * Creates a custom action target in Security Hub CSPM.
 *
 * You can use custom actions on findings and insights in Security Hub CSPM to trigger target actions
 * in Amazon CloudWatch Events.
 */
export const createActionTarget: API.OperationMethod<
  CreateActionTargetRequest,
  CreateActionTargetResponse,
  CreateActionTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(841) as any as S.Schema<CreateActionTargetRequest>,
  output: __S(842) as any as S.Schema<CreateActionTargetResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateActionTarget",
}));

export type CreateAggregatorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables aggregation across Amazon Web Services Regions.
 */
export const createAggregatorV2: API.OperationMethod<
  CreateAggregatorV2Request,
  CreateAggregatorV2Response,
  CreateAggregatorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(843) as any as S.Schema<CreateAggregatorV2Request>,
  output: __S(844) as any as S.Schema<CreateAggregatorV2Response>,
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
  operationName: "CreateAggregatorV2",
}));

export type CreateAutomationRuleError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Creates an automation rule based on input parameters.
 */
export const createAutomationRule: API.OperationMethod<
  CreateAutomationRuleRequest,
  CreateAutomationRuleResponse,
  CreateAutomationRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(845) as any as S.Schema<CreateAutomationRuleRequest>,
  output: __S(846) as any as S.Schema<CreateAutomationRuleResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAutomationRule",
}));

export type CreateAutomationRuleV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a V2 automation rule.
 */
export const createAutomationRuleV2: API.OperationMethod<
  CreateAutomationRuleV2Request,
  CreateAutomationRuleV2Response,
  CreateAutomationRuleV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(869) as any as S.Schema<CreateAutomationRuleV2Request>,
  output: __S(870) as any as S.Schema<CreateAutomationRuleV2Response>,
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
  operationName: "CreateAutomationRuleV2",
}));

export type CreateConfigurationPolicyError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceConflictException
  | CommonErrors;
/**
 * Creates a configuration policy with the defined configuration. Only the Security Hub CSPM delegated administrator
 * can invoke this operation from the home Region.
 */
export const createConfigurationPolicy: API.OperationMethod<
  CreateConfigurationPolicyRequest,
  CreateConfigurationPolicyResponse,
  CreateConfigurationPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(876) as any as S.Schema<CreateConfigurationPolicyRequest>,
  output: __S(877) as any as S.Schema<CreateConfigurationPolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConfigurationPolicy",
}));

export type CreateConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidAccessException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a connector to a third-party cloud provider in Security Hub CSPM. A connector establishes a connection between Security Hub CSPM and a third-party cloud provider, enabling Security Hub CSPM to ingest security findings and resource data from the connected environment.
 */
export const createConnector: API.OperationMethod<
  CreateConnectorRequest,
  CreateConnectorResponse,
  CreateConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(881) as any as S.Schema<CreateConnectorRequest>,
  output: __S(882) as any as S.Schema<CreateConnectorResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidAccessException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConnector",
}));

export type CreateConnectorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Grants permission to create a connectorV2 based on input parameters.
 */
export const createConnectorV2: API.OperationMethod<
  CreateConnectorV2Request,
  CreateConnectorV2Response,
  CreateConnectorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(886) as any as S.Schema<CreateConnectorV2Request>,
  output: __S(887) as any as S.Schema<CreateConnectorV2Response>,
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
  operationName: "CreateConnectorV2",
}));

export type CreateFindingAggregatorError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * The *aggregation Region* is now called the *home Region*.
 *
 * Used to enable cross-Region aggregation. This operation can be invoked from the home Region only.
 *
 * For information about how cross-Region aggregation works, see Understanding cross-Region aggregation in Security Hub CSPM in the *Security Hub CSPM User Guide*.
 */
export const createFindingAggregator: API.OperationMethod<
  CreateFindingAggregatorRequest,
  CreateFindingAggregatorResponse,
  CreateFindingAggregatorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(888) as any as S.Schema<CreateFindingAggregatorRequest>,
  output: __S(889) as any as S.Schema<CreateFindingAggregatorResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFindingAggregator",
}));

export type CreateInsightError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceConflictException
  | CommonErrors;
/**
 * Creates a custom insight in Security Hub CSPM. An insight is a consolidation of findings that relate
 * to a security issue that requires attention or remediation.
 *
 * To group the related findings in the insight, use the
 * `GroupByAttribute`.
 */
export const createInsight: API.OperationMethod<
  CreateInsightRequest,
  CreateInsightResponse,
  CreateInsightError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(895) as any as S.Schema<CreateInsightRequest>,
  output: __S(896) as any as S.Schema<CreateInsightResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateInsight",
}));

export type CreateMembersError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceConflictException
  | CommonErrors;
/**
 * Creates a member association in Security Hub CSPM between the specified accounts and the account
 * used to make the request, which is the administrator account. If you are integrated with
 * Organizations, then the administrator account is designated by the organization management account.
 *
 * `CreateMembers` is always used to add accounts that are not organization
 * members.
 *
 * For accounts that are managed using Organizations, `CreateMembers` is only used
 * in the following cases:
 *
 * - Security Hub CSPM is not configured to automatically add new organization accounts.
 *
 * - The account was disassociated or deleted in Security Hub CSPM.
 *
 * This action can only be used by an account that has Security Hub CSPM enabled. To enable Security Hub CSPM, you
 * can use the `EnableSecurityHub` operation.
 *
 * For accounts that are not organization members, you create the account association and
 * then send an invitation to the member account. To send the invitation, you use the
 * `InviteMembers` operation. If the account owner accepts
 * the invitation, the account becomes a member account in Security Hub CSPM.
 *
 * Accounts that are managed using Organizations don't receive an invitation. They
 * automatically become a member account in Security Hub CSPM.
 *
 * - If the organization account does not have Security Hub CSPM enabled, then Security Hub CSPM and the default standards are automatically enabled. Note that Security Hub CSPM cannot be enabled automatically for the organization management account. The organization management account must enable Security Hub CSPM before the administrator account enables it as a member account.
 *
 * - For organization accounts that already have Security Hub CSPM enabled, Security Hub CSPM does not make any other changes to those accounts. It does not change their enabled standards or controls.
 *
 * A permissions policy is added that permits the administrator account to view the findings
 * generated in the member account.
 *
 * To remove the association between the administrator and member accounts, use the `DisassociateFromMasterAccount` or `DisassociateMembers` operation.
 */
export const createMembers: API.OperationMethod<
  CreateMembersRequest,
  CreateMembersResponse,
  CreateMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(899) as any as S.Schema<CreateMembersRequest>,
  output: __S(902) as any as S.Schema<CreateMembersResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMembers",
}));

export type CreateTicketV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Grants permission to create a ticket in the chosen ITSM based on finding information for the provided finding metadata UID.
 */
export const createTicketV2: API.OperationMethod<
  CreateTicketV2Request,
  CreateTicketV2Response,
  CreateTicketV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(903) as any as S.Schema<CreateTicketV2Request>,
  output: __S(904) as any as S.Schema<CreateTicketV2Response>,
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
  operationName: "CreateTicketV2",
}));

export type DeclineInvitationsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts.
 * For information, see Managing Security Hub CSPM administrator and member accounts with Organizations
 * in the *Security Hub CSPM User Guide*.
 *
 * Declines invitations to become a Security Hub CSPM member account.
 *
 * A prospective member account uses this operation to decline an invitation to become a member.
 *
 * Only member accounts that aren't part of an Amazon Web Services organization should use this operation.
 * Organization accounts don't receive invitations.
 */
export const declineInvitations: API.OperationMethod<
  DeclineInvitationsRequest,
  DeclineInvitationsResponse,
  DeclineInvitationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(905) as any as S.Schema<DeclineInvitationsRequest>,
  output: __S(906) as any as S.Schema<DeclineInvitationsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeclineInvitations",
}));

export type DeleteActionTargetError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a custom action target from Security Hub CSPM.
 *
 * Deleting a custom action target does not affect any findings or insights that were
 * already sent to Amazon CloudWatch Events using the custom action.
 */
export const deleteActionTarget: API.OperationMethod<
  DeleteActionTargetRequest,
  DeleteActionTargetResponse,
  DeleteActionTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(907) as any as S.Schema<DeleteActionTargetRequest>,
  output: __S(842) as any as S.Schema<DeleteActionTargetResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteActionTarget",
}));

export type DeleteAggregatorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the Aggregator V2.
 */
export const deleteAggregatorV2: API.OperationMethod<
  DeleteAggregatorV2Request,
  DeleteAggregatorV2Response,
  DeleteAggregatorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(908) as any as S.Schema<DeleteAggregatorV2Request>,
  output: __S(3) as any as S.Schema<DeleteAggregatorV2Response>,
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
  operationName: "DeleteAggregatorV2",
}));

export type DeleteAutomationRuleV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a V2 automation rule.
 */
export const deleteAutomationRuleV2: API.OperationMethod<
  DeleteAutomationRuleV2Request,
  DeleteAutomationRuleV2Response,
  DeleteAutomationRuleV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(909) as any as S.Schema<DeleteAutomationRuleV2Request>,
  output: __S(3) as any as S.Schema<DeleteAutomationRuleV2Response>,
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
  operationName: "DeleteAutomationRuleV2",
}));

export type DeleteConfigurationPolicyError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a configuration policy. Only the Security Hub CSPM delegated administrator can invoke this operation
 * from the home Region. For the deletion to succeed, you must first disassociate a configuration policy from target accounts,
 * organizational units, or the root by invoking the `StartConfigurationPolicyDisassociation` operation.
 */
export const deleteConfigurationPolicy: API.OperationMethod<
  DeleteConfigurationPolicyRequest,
  DeleteConfigurationPolicyResponse,
  DeleteConfigurationPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(910) as any as S.Schema<DeleteConfigurationPolicyRequest>,
  output: __S(1) as any as S.Schema<DeleteConfigurationPolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceConflictException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfigurationPolicy",
}));

export type DeleteConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidAccessException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a CSPM connector. When you delete a connector, Security Hub CSPM stops ingesting findings and resource data from the connected cloud provider environment.
 */
export const deleteConnector: API.OperationMethod<
  DeleteConnectorRequest,
  DeleteConnectorResponse,
  DeleteConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(911) as any as S.Schema<DeleteConnectorRequest>,
  output: __S(912) as any as S.Schema<DeleteConnectorResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidAccessException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnector",
}));

export type DeleteConnectorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Grants permission to delete a connectorV2.
 */
export const deleteConnectorV2: API.OperationMethod<
  DeleteConnectorV2Request,
  DeleteConnectorV2Response,
  DeleteConnectorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(913) as any as S.Schema<DeleteConnectorV2Request>,
  output: __S(914) as any as S.Schema<DeleteConnectorV2Response>,
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
  operationName: "DeleteConnectorV2",
}));

export type DeleteFindingAggregatorError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * The *aggregation Region* is now called the *home Region*.
 *
 * Deletes a finding aggregator. When you delete the finding aggregator, you stop cross-Region aggregation. Finding replication stops
 * occurring from the linked Regions to the home Region.
 *
 * When you stop cross-Region aggregation, findings that were already replicated and sent to the home Region are still visible from
 * the home Region. However, new findings and finding updates are no longer replicated and sent to the home Region.
 */
export const deleteFindingAggregator: API.OperationMethod<
  DeleteFindingAggregatorRequest,
  DeleteFindingAggregatorResponse,
  DeleteFindingAggregatorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(915) as any as S.Schema<DeleteFindingAggregatorRequest>,
  output: __S(916) as any as S.Schema<DeleteFindingAggregatorResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFindingAggregator",
}));

export type DeleteInsightError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the insight specified by the `InsightArn`.
 */
export const deleteInsight: API.OperationMethod<
  DeleteInsightRequest,
  DeleteInsightResponse,
  DeleteInsightError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(917) as any as S.Schema<DeleteInsightRequest>,
  output: __S(896) as any as S.Schema<DeleteInsightResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInsight",
}));

export type DeleteInvitationsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts.
 * For information, see Managing Security Hub CSPM administrator and member accounts with Organizations
 * in the *Security Hub CSPM User Guide*.
 *
 * Deletes invitations to become a Security Hub CSPM member account.
 *
 * A Security Hub CSPM administrator account can use this operation to delete invitations sent to one or more prospective member accounts.
 *
 * This operation is only used to delete invitations that are sent to prospective member accounts that aren't part of an Amazon Web Services organization.
 * Organization accounts don't receive invitations.
 */
export const deleteInvitations: API.OperationMethod<
  DeleteInvitationsRequest,
  DeleteInvitationsResponse,
  DeleteInvitationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(918) as any as S.Schema<DeleteInvitationsRequest>,
  output: __S(906) as any as S.Schema<DeleteInvitationsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInvitations",
}));

export type DeleteMembersError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified member accounts from Security Hub CSPM.
 *
 * You can invoke this API only to delete accounts that became members through invitation. You can't invoke this
 * API to delete accounts that belong to an Organizations organization.
 */
export const deleteMembers: API.OperationMethod<
  DeleteMembersRequest,
  DeleteMembersResponse,
  DeleteMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(919) as any as S.Schema<DeleteMembersRequest>,
  output: __S(902) as any as S.Schema<DeleteMembersResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMembers",
}));

export type DescribeActionTargetsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of the custom action targets in Security Hub CSPM in your account.
 */
export const describeActionTargets: API.PaginatedOperationMethod<
  DescribeActionTargetsRequest,
  DescribeActionTargetsResponse,
  DescribeActionTargetsError,
  Credentials | HttpClient.HttpClient,
  ActionTarget
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(920) as any as S.Schema<DescribeActionTargetsRequest>,
  output: __S(923) as any as S.Schema<DescribeActionTargetsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeActionTargets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ActionTargets",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeHubError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns details about the Hub resource in your account, including the
 * `HubArn` and the time when you enabled Security Hub CSPM.
 */
export const describeHub: API.OperationMethod<
  DescribeHubRequest,
  DescribeHubResponse,
  DescribeHubError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(924) as any as S.Schema<DescribeHubRequest>,
  output: __S(925) as any as S.Schema<DescribeHubResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeHub",
}));

export type DescribeOrganizationConfigurationError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Returns information about the way your organization is configured in Security Hub CSPM. Only the
 * Security Hub CSPM administrator account can invoke this operation.
 */
export const describeOrganizationConfiguration: API.OperationMethod<
  DescribeOrganizationConfigurationRequest,
  DescribeOrganizationConfigurationResponse,
  DescribeOrganizationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(926) as any as S.Schema<DescribeOrganizationConfigurationRequest>,
  output: __S(928) as any as S.Schema<DescribeOrganizationConfigurationResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOrganizationConfiguration",
}));

export type DescribeProductsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Returns information about product integrations in Security Hub CSPM.
 *
 * You can optionally provide an integration ARN. If you provide an integration ARN, then
 * the results only include that integration.
 *
 * If you don't provide an integration ARN, then the results include all of the available
 * product integrations.
 */
export const describeProducts: API.PaginatedOperationMethod<
  DescribeProductsRequest,
  DescribeProductsResponse,
  DescribeProductsError,
  Credentials | HttpClient.HttpClient,
  Product
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(929) as any as S.Schema<DescribeProductsRequest>,
  output: __S(933) as any as S.Schema<DescribeProductsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProducts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Products",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeProductsV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the product integration.
 */
export const describeProductsV2: API.PaginatedOperationMethod<
  DescribeProductsV2Request,
  DescribeProductsV2Response,
  DescribeProductsV2Error,
  Credentials | HttpClient.HttpClient,
  ProductV2
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(934) as any as S.Schema<DescribeProductsV2Request>,
  output: __S(937) as any as S.Schema<DescribeProductsV2Response>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProductsV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ProductsV2",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeSecurityHubV2Error =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns details about the service resource in your account.
 */
export const describeSecurityHubV2: API.OperationMethod<
  DescribeSecurityHubV2Request,
  DescribeSecurityHubV2Response,
  DescribeSecurityHubV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(938) as any as S.Schema<DescribeSecurityHubV2Request>,
  output: __S(941) as any as S.Schema<DescribeSecurityHubV2Response>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSecurityHubV2",
}));

export type DescribeStandardsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | CommonErrors;
/**
 * Returns a list of the available standards in Security Hub CSPM.
 *
 * For each standard, the results include the standard ARN, the name, and a description.
 */
export const describeStandards: API.PaginatedOperationMethod<
  DescribeStandardsRequest,
  DescribeStandardsResponse,
  DescribeStandardsError,
  Credentials | HttpClient.HttpClient,
  Standard
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(942) as any as S.Schema<DescribeStandardsRequest>,
  output: __S(946) as any as S.Schema<DescribeStandardsResponse>,
  errors: [InternalException, InvalidAccessException, InvalidInputException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStandards",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Standards",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeStandardsControlsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of security standards controls.
 *
 * For each control, the results include information about whether it is currently enabled,
 * the severity, and a link to remediation information.
 *
 * This operation returns an empty list for standard subscriptions where `StandardsControlsUpdatable` has value `NOT_READY_FOR_UPDATES`.
 */
export const describeStandardsControls: API.PaginatedOperationMethod<
  DescribeStandardsControlsRequest,
  DescribeStandardsControlsResponse,
  DescribeStandardsControlsError,
  Credentials | HttpClient.HttpClient,
  StandardsControl
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(947) as any as S.Schema<DescribeStandardsControlsRequest>,
  output: __S(950) as any as S.Schema<DescribeStandardsControlsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStandardsControls",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Controls",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DisableImportFindingsForProductError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disables the integration of the specified product with Security Hub CSPM. After the integration is
 * disabled, findings from that product are no longer sent to Security Hub CSPM.
 */
export const disableImportFindingsForProduct: API.OperationMethod<
  DisableImportFindingsForProductRequest,
  DisableImportFindingsForProductResponse,
  DisableImportFindingsForProductError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(951) as any as S.Schema<DisableImportFindingsForProductRequest>,
  output: __S(1) as any as S.Schema<DisableImportFindingsForProductResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableImportFindingsForProduct",
}));

export type DisableOrganizationAdminAccountError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Disables a Security Hub CSPM administrator account. Can only be called by the organization
 * management account.
 */
export const disableOrganizationAdminAccount: API.OperationMethod<
  DisableOrganizationAdminAccountRequest,
  DisableOrganizationAdminAccountResponse,
  DisableOrganizationAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(952) as any as S.Schema<DisableOrganizationAdminAccountRequest>,
  output: __S(1) as any as S.Schema<DisableOrganizationAdminAccountResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableOrganizationAdminAccount",
}));

export type DisableSecurityHubError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disables Security Hub CSPM in your account only in the current Amazon Web Services Region. To disable Security Hub CSPM in all
 * Regions, you must submit one request per Region where you have enabled Security Hub CSPM.
 *
 * You can't disable Security Hub CSPM in an account that is currently the Security Hub CSPM administrator.
 *
 * When you disable Security Hub CSPM, your existing findings and insights and any Security Hub CSPM configuration
 * settings are deleted after 90 days and cannot be recovered. Any standards that were enabled
 * are disabled, and your administrator and member account associations are removed.
 *
 * If you want to save your existing findings, you must export them before you disable
 * Security Hub CSPM.
 */
export const disableSecurityHub: API.OperationMethod<
  DisableSecurityHubRequest,
  DisableSecurityHubResponse,
  DisableSecurityHubError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(953) as any as S.Schema<DisableSecurityHubRequest>,
  output: __S(3) as any as S.Schema<DisableSecurityHubResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableSecurityHub",
}));

export type DisableSecurityHubFeatureV2Error =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disables an opt-in feature for the calling account in the current Amazon Web Services Region. The operation is idempotent. If the feature is already disabled, no changes are made. You cannot disable a feature that is managed by an organization policy.
 */
export const disableSecurityHubFeatureV2: API.OperationMethod<
  DisableSecurityHubFeatureV2Request,
  DisableSecurityHubFeatureV2Response,
  DisableSecurityHubFeatureV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(954) as any as S.Schema<DisableSecurityHubFeatureV2Request>,
  output: __S(1) as any as S.Schema<DisableSecurityHubFeatureV2Response>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableSecurityHubFeatureV2",
}));

export type DisableSecurityHubV2Error =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disable the service for the current Amazon Web Services Region or specified Amazon Web Services Region. Disabling the service also disables all opt-in features that are currently enabled in that Region.
 */
export const disableSecurityHubV2: API.OperationMethod<
  DisableSecurityHubV2Request,
  DisableSecurityHubV2Response,
  DisableSecurityHubV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(955) as any as S.Schema<DisableSecurityHubV2Request>,
  output: __S(3) as any as S.Schema<DisableSecurityHubV2Response>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableSecurityHubV2",
}));

export type DisassociateFromAdministratorAccountError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disassociates the current Security Hub CSPM member account from the associated administrator
 * account.
 *
 * This operation is only used by accounts that are not part of an organization. For
 * organization accounts, only the administrator account can
 * disassociate a member account.
 */
export const disassociateFromAdministratorAccount: API.OperationMethod<
  DisassociateFromAdministratorAccountRequest,
  DisassociateFromAdministratorAccountResponse,
  DisassociateFromAdministratorAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(956) as any as S.Schema<DisassociateFromAdministratorAccountRequest>,
  output: __S(1) as any as S.Schema<DisassociateFromAdministratorAccountResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateFromAdministratorAccount",
}));

export type DisassociateFromMasterAccountError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * This method is deprecated. Instead, use `DisassociateFromAdministratorAccount`.
 *
 * The Security Hub CSPM console continues to use `DisassociateFromMasterAccount`. It will eventually change to use `DisassociateFromAdministratorAccount`. Any IAM policies that specifically control access to this function must continue to use `DisassociateFromMasterAccount`. You should also add `DisassociateFromAdministratorAccount` to your policies to ensure that the correct permissions are in place after the console begins to use `DisassociateFromAdministratorAccount`.
 *
 * Disassociates the current Security Hub CSPM member account from the associated administrator
 * account.
 *
 * This operation is only used by accounts that are not part of an organization. For
 * organization accounts, only the administrator account can
 * disassociate a member account.
 */
export const disassociateFromMasterAccount: API.OperationMethod<
  DisassociateFromMasterAccountRequest,
  DisassociateFromMasterAccountResponse,
  DisassociateFromMasterAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(957) as any as S.Schema<DisassociateFromMasterAccountRequest>,
  output: __S(1) as any as S.Schema<DisassociateFromMasterAccountResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateFromMasterAccount",
}));

export type DisassociateMembersError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disassociates the specified member accounts from the associated administrator account.
 *
 * Can be used to disassociate both accounts that are managed using Organizations and accounts that
 * were invited manually.
 */
export const disassociateMembers: API.OperationMethod<
  DisassociateMembersRequest,
  DisassociateMembersResponse,
  DisassociateMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(958) as any as S.Schema<DisassociateMembersRequest>,
  output: __S(3) as any as S.Schema<DisassociateMembersResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateMembers",
}));

export type EnableImportFindingsForProductError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceConflictException
  | CommonErrors;
/**
 * Enables the integration of a partner product with Security Hub CSPM. Integrated products send
 * findings to Security Hub CSPM.
 *
 * When you enable a product integration, a permissions policy that grants permission for
 * the product to send findings to Security Hub CSPM is applied.
 */
export const enableImportFindingsForProduct: API.OperationMethod<
  EnableImportFindingsForProductRequest,
  EnableImportFindingsForProductResponse,
  EnableImportFindingsForProductError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(959) as any as S.Schema<EnableImportFindingsForProductRequest>,
  output: __S(960) as any as S.Schema<EnableImportFindingsForProductResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableImportFindingsForProduct",
}));

export type EnableOrganizationAdminAccountError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Designates the Security Hub CSPM administrator account for an organization. Can only be called by
 * the organization management account.
 */
export const enableOrganizationAdminAccount: API.OperationMethod<
  EnableOrganizationAdminAccountRequest,
  EnableOrganizationAdminAccountResponse,
  EnableOrganizationAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(961) as any as S.Schema<EnableOrganizationAdminAccountRequest>,
  output: __S(962) as any as S.Schema<EnableOrganizationAdminAccountResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableOrganizationAdminAccount",
}));

export type EnableSecurityHubError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | LimitExceededException
  | ResourceConflictException
  | CommonErrors;
/**
 * Enables Security Hub CSPM for your account in the current Region or the Region you specify in the
 * request.
 *
 * When you enable Security Hub CSPM, you grant to Security Hub CSPM the permissions necessary to gather findings
 * from other services that are integrated with Security Hub CSPM.
 *
 * When you use the `EnableSecurityHub` operation to enable Security Hub CSPM, you also
 * automatically enable the following standards:
 *
 * - Center for Internet Security (CIS) Amazon Web Services Foundations Benchmark v1.2.0
 *
 * - Amazon Web Services Foundational Security Best Practices
 *
 * Other standards are not automatically enabled.
 *
 * To opt out of automatically enabled standards, set
 * `EnableDefaultStandards` to `false`.
 *
 * After you enable Security Hub CSPM, to enable a standard, use the `BatchEnableStandards` operation. To disable a standard, use the
 * `BatchDisableStandards` operation.
 *
 * To learn more, see the setup information in the *Security Hub CSPM User Guide*.
 */
export const enableSecurityHub: API.OperationMethod<
  EnableSecurityHubRequest,
  EnableSecurityHubResponse,
  EnableSecurityHubError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(963) as any as S.Schema<EnableSecurityHubRequest>,
  output: __S(3) as any as S.Schema<EnableSecurityHubResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    LimitExceededException,
    ResourceConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableSecurityHub",
}));

export type EnableSecurityHubFeatureV2Error =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables an opt-in feature for the calling account in the current Amazon Web Services Region. The service must be enabled before you can enable a feature. The operation is idempotent. If the feature is already enabled, no changes are made. You cannot enable a feature that is managed by an organization policy.
 */
export const enableSecurityHubFeatureV2: API.OperationMethod<
  EnableSecurityHubFeatureV2Request,
  EnableSecurityHubFeatureV2Response,
  EnableSecurityHubFeatureV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(964) as any as S.Schema<EnableSecurityHubFeatureV2Request>,
  output: __S(1) as any as S.Schema<EnableSecurityHubFeatureV2Response>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableSecurityHubFeatureV2",
}));

export type EnableSecurityHubV2Error =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables the service in account for the current Amazon Web Services Region or specified Amazon Web Services Region.
 */
export const enableSecurityHubV2: API.OperationMethod<
  EnableSecurityHubV2Request,
  EnableSecurityHubV2Response,
  EnableSecurityHubV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(965) as any as S.Schema<EnableSecurityHubV2Request>,
  output: __S(966) as any as S.Schema<EnableSecurityHubV2Response>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableSecurityHubV2",
}));

export type GenerateRecommendedPolicyV2Error =
  | AccessDeniedException
  | InternalServerException
  | InvalidInputException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Begins the recommended policy generation to remediate a Security Hub finding.
 * `GenerateRecommendedPolicyV2` only supports findings for unused permissions.
 */
export const generateRecommendedPolicyV2: API.OperationMethod<
  GenerateRecommendedPolicyV2Request,
  GenerateRecommendedPolicyV2Response,
  GenerateRecommendedPolicyV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(967) as any as S.Schema<GenerateRecommendedPolicyV2Request>,
  output: __S(1) as any as S.Schema<GenerateRecommendedPolicyV2Response>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidInputException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GenerateRecommendedPolicyV2",
}));

export type GetAdministratorAccountError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Provides the details for the Security Hub CSPM administrator account for the current member account.
 *
 * Can be used by both member accounts that are managed using Organizations and accounts that were
 * invited manually.
 */
export const getAdministratorAccount: API.OperationMethod<
  GetAdministratorAccountRequest,
  GetAdministratorAccountResponse,
  GetAdministratorAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(968) as any as S.Schema<GetAdministratorAccountRequest>,
  output: __S(970) as any as S.Schema<GetAdministratorAccountResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAdministratorAccount",
}));

export type GetAggregatorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the configuration of the specified Aggregator V2.
 */
export const getAggregatorV2: API.OperationMethod<
  GetAggregatorV2Request,
  GetAggregatorV2Response,
  GetAggregatorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(971) as any as S.Schema<GetAggregatorV2Request>,
  output: __S(972) as any as S.Schema<GetAggregatorV2Response>,
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
  operationName: "GetAggregatorV2",
}));

export type GetAutomationRuleV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns an automation rule for the V2 service.
 */
export const getAutomationRuleV2: API.OperationMethod<
  GetAutomationRuleV2Request,
  GetAutomationRuleV2Response,
  GetAutomationRuleV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(973) as any as S.Schema<GetAutomationRuleV2Request>,
  output: __S(974) as any as S.Schema<GetAutomationRuleV2Response>,
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
  operationName: "GetAutomationRuleV2",
}));

export type GetConfigurationPolicyError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Provides information about a configuration policy. Only the Security Hub CSPM delegated administrator can invoke
 * this operation from the home Region.
 */
export const getConfigurationPolicy: API.OperationMethod<
  GetConfigurationPolicyRequest,
  GetConfigurationPolicyResponse,
  GetConfigurationPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(975) as any as S.Schema<GetConfigurationPolicyRequest>,
  output: __S(877) as any as S.Schema<GetConfigurationPolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfigurationPolicy",
}));

export type GetConfigurationPolicyAssociationError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns the association between a configuration and a target account, organizational unit, or the root. The
 * configuration can be a configuration policy or self-managed behavior. Only the Security Hub CSPM delegated administrator can
 * invoke this operation from the home Region.
 */
export const getConfigurationPolicyAssociation: API.OperationMethod<
  GetConfigurationPolicyAssociationRequest,
  GetConfigurationPolicyAssociationResponse,
  GetConfigurationPolicyAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(976) as any as S.Schema<GetConfigurationPolicyAssociationRequest>,
  output: __S(45) as any as S.Schema<GetConfigurationPolicyAssociationResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfigurationPolicyAssociation",
}));

export type GetConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidAccessException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details for a CSPM connector based on the connector ID.
 */
export const getConnector: API.OperationMethod<
  GetConnectorRequest,
  GetConnectorResponse,
  GetConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(977) as any as S.Schema<GetConnectorRequest>,
  output: __S(983) as any as S.Schema<GetConnectorResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidAccessException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConnector",
}));

export type GetConnectorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Grants permission to retrieve details for a connectorV2 based on connector id.
 */
export const getConnectorV2: API.OperationMethod<
  GetConnectorV2Request,
  GetConnectorV2Response,
  GetConnectorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(984) as any as S.Schema<GetConnectorV2Request>,
  output: __S(988) as any as S.Schema<GetConnectorV2Response>,
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
  operationName: "GetConnectorV2",
}));

export type GetEnabledStandardsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Returns a list of the standards that are currently enabled.
 */
export const getEnabledStandards: API.PaginatedOperationMethod<
  GetEnabledStandardsRequest,
  GetEnabledStandardsResponse,
  GetEnabledStandardsError,
  Credentials | HttpClient.HttpClient,
  StandardsSubscription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(989) as any as S.Schema<GetEnabledStandardsRequest>,
  output: __S(990) as any as S.Schema<GetEnabledStandardsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEnabledStandards",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "StandardsSubscriptions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetFindingAggregatorError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * The *aggregation Region* is now called the *home Region*.
 *
 * Returns the current configuration in the calling account for cross-Region aggregation. A finding aggregator is a resource that establishes
 * the home Region and any linked Regions.
 */
export const getFindingAggregator: API.OperationMethod<
  GetFindingAggregatorRequest,
  GetFindingAggregatorResponse,
  GetFindingAggregatorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(991) as any as S.Schema<GetFindingAggregatorRequest>,
  output: __S(889) as any as S.Schema<GetFindingAggregatorResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingAggregator",
}));

export type GetFindingHistoryError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Returns the history of a Security Hub CSPM finding. The history includes changes made to any fields in
 * the Amazon Web Services Security Finding Format (ASFF) except top-level timestamp fields, such as the `CreatedAt` and
 * `UpdatedAt` fields.
 *
 * This operation might return fewer results than the maximum number of results (`MaxResults`) specified in a request, even
 * when more results are available. If this occurs, the response includes a `NextToken` value, which you should use to retrieve
 * the next set of results in the response. The presence of a `NextToken` value in a response doesn't necessarily indicate
 * that the results are incomplete. However, you should continue to specify a `NextToken` value until you receive a
 * response that doesn't include this value.
 */
export const getFindingHistory: API.PaginatedOperationMethod<
  GetFindingHistoryRequest,
  GetFindingHistoryResponse,
  GetFindingHistoryError,
  Credentials | HttpClient.HttpClient,
  FindingHistoryRecord
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(992) as any as S.Schema<GetFindingHistoryRequest>,
  output: __S(998) as any as S.Schema<GetFindingHistoryResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingHistory",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Records",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetFindingsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Returns a list of findings that match the specified criteria.
 *
 * If cross-Region aggregation is enabled, then when you call `GetFindings` from the home Region, the results include all of the matching findings from both the home Region and linked Regions.
 */
export const getFindings: API.PaginatedOperationMethod<
  GetFindingsRequest,
  GetFindingsResponse,
  GetFindingsError,
  Credentials | HttpClient.HttpClient,
  AwsSecurityFinding
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1001) as any as S.Schema<GetFindingsRequest>,
  output: __S(1002) as any as S.Schema<GetFindingsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindings",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Findings",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetFindingStatisticsV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | OrganizationalUnitNotFoundException
  | OrganizationNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns aggregated statistical data about findings.
 *
 * You can use the `Scopes` parameter to define the data boundary for the query. Currently, `Scopes` supports `AwsOrganizations`, which lets you aggregate findings from your entire organization or from specific organizational units. Only the delegated administrator account can use `Scopes`.
 *
 * `GetFindingStatisticsV2` uses `securityhub:GetAdhocInsightResults` in the `Action` element of an IAM policy statement.
 * You must have permission to perform the `securityhub:GetAdhocInsightResults` action.
 */
export const getFindingStatisticsV2: API.OperationMethod<
  GetFindingStatisticsV2Request,
  GetFindingStatisticsV2Response,
  GetFindingStatisticsV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1008) as any as S.Schema<GetFindingStatisticsV2Request>,
  output: __S(1013) as any as S.Schema<GetFindingStatisticsV2Response>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    OrganizationalUnitNotFoundException,
    OrganizationNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingStatisticsV2",
}));

export type GetFindingsTrendsV2Error =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns findings trend data based on the specified criteria. This operation helps you analyze patterns and changes in findings over time.
 */
export const getFindingsTrendsV2: API.PaginatedOperationMethod<
  GetFindingsTrendsV2Request,
  GetFindingsTrendsV2Response,
  GetFindingsTrendsV2Error,
  Credentials | HttpClient.HttpClient,
  TrendsMetricsResult
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1019) as any as S.Schema<GetFindingsTrendsV2Request>,
  output: __S(1024) as any as S.Schema<GetFindingsTrendsV2Response>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingsTrendsV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TrendsMetrics",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetFindingsV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | OrganizationalUnitNotFoundException
  | OrganizationNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of findings that match the specified criteria.
 *
 * You can use the `Scopes` parameter to define the data boundary for the query. Currently, `Scopes` supports `AwsOrganizations`, which lets you retrieve findings from your entire organization or from specific organizational units. Only the delegated administrator account can use `Scopes`.
 *
 * You can use the `Filters` parameter to refine results based on finding attributes. You can use `Scopes` and `Filters` independently or together. When both are provided, `Scopes` narrows the data set first, and then `Filters` refines results within that scoped data set.
 *
 * `GetFindings` and `GetFindingsV2` both use `securityhub:GetFindings` in the `Action` element of an IAM policy statement.
 * You must have permission to perform the `securityhub:GetFindings` action.
 */
export const getFindingsV2: API.PaginatedOperationMethod<
  GetFindingsV2Request,
  GetFindingsV2Response,
  GetFindingsV2Error,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1025) as any as S.Schema<GetFindingsV2Request>,
  output: __S(1027) as any as S.Schema<GetFindingsV2Response>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    OrganizationalUnitNotFoundException,
    OrganizationNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingsV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Findings",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetInsightResultsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the results of the Security Hub CSPM insight specified by the insight ARN.
 */
export const getInsightResults: API.OperationMethod<
  GetInsightResultsRequest,
  GetInsightResultsResponse,
  GetInsightResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1028) as any as S.Schema<GetInsightResultsRequest>,
  output: __S(1032) as any as S.Schema<GetInsightResultsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInsightResults",
}));

export type GetInsightsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists and describes insights for the specified insight ARNs.
 */
export const getInsights: API.PaginatedOperationMethod<
  GetInsightsRequest,
  GetInsightsResponse,
  GetInsightsError,
  Credentials | HttpClient.HttpClient,
  Insight
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1033) as any as S.Schema<GetInsightsRequest>,
  output: __S(1036) as any as S.Schema<GetInsightsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInsights",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Insights",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetInvitationsCountError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts.
 * For information, see Managing Security Hub CSPM administrator and member accounts with Organizations
 * in the *Security Hub CSPM User Guide*.
 *
 * Returns the count of all Security Hub CSPM membership invitations that were sent to the
 * calling member account, not including the currently accepted invitation.
 */
export const getInvitationsCount: API.OperationMethod<
  GetInvitationsCountRequest,
  GetInvitationsCountResponse,
  GetInvitationsCountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1037) as any as S.Schema<GetInvitationsCountRequest>,
  output: __S(1038) as any as S.Schema<GetInvitationsCountResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInvitationsCount",
}));

export type GetMasterAccountError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * This method is deprecated. Instead, use `GetAdministratorAccount`.
 *
 * The Security Hub CSPM console continues to use `GetMasterAccount`. It will eventually change to use `GetAdministratorAccount`. Any IAM policies that specifically control access to this function must continue to use `GetMasterAccount`. You should also add `GetAdministratorAccount` to your policies to ensure that the correct permissions are in place after the console begins to use `GetAdministratorAccount`.
 *
 * Provides the details for the Security Hub CSPM administrator account for the current member account.
 *
 * Can be used by both member accounts that are managed using Organizations and accounts that were
 * invited manually.
 */
export const getMasterAccount: API.OperationMethod<
  GetMasterAccountRequest,
  GetMasterAccountResponse,
  GetMasterAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1039) as any as S.Schema<GetMasterAccountRequest>,
  output: __S(1040) as any as S.Schema<GetMasterAccountResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMasterAccount",
}));

export type GetMembersError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns the details for the Security Hub CSPM member accounts for the specified account IDs.
 *
 * An administrator account can be either the delegated Security Hub CSPM administrator account for an
 * organization or an administrator account that enabled Security Hub CSPM manually.
 *
 * The results include both member accounts that are managed using Organizations and accounts that
 * were invited manually.
 */
export const getMembers: API.OperationMethod<
  GetMembersRequest,
  GetMembersResponse,
  GetMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1041) as any as S.Schema<GetMembersRequest>,
  output: __S(1044) as any as S.Schema<GetMembersResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMembers",
}));

export type GetRecommendedPolicyV2Error =
  | AccessDeniedException
  | InternalServerException
  | InvalidInputException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the recommended policy to remediate a Security Hub finding.
 * `GetRecommendedPolicyV2` only supports findings for unused permissions.
 */
export const getRecommendedPolicyV2: API.PaginatedOperationMethod<
  GetRecommendedPolicyV2Request,
  GetRecommendedPolicyV2Response,
  GetRecommendedPolicyV2Error,
  Credentials | HttpClient.HttpClient,
  RecommendationStep
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1045) as any as S.Schema<GetRecommendedPolicyV2Request>,
  output: __S(1050) as any as S.Schema<GetRecommendedPolicyV2Response>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidInputException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecommendedPolicyV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RecommendationSteps",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetRemediationsV2Error =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves remediation targets for the account, or for all member accounts if the caller is
 * the delegated administrator. Results are sorted by priority, highest first, and are paginated.
 * Use `TargetUid` or `MetadataUid` to scope the request to a single target
 * or finding.
 */
export const getRemediationsV2: API.PaginatedOperationMethod<
  GetRemediationsV2Request,
  GetRemediationsV2Response,
  GetRemediationsV2Error,
  Credentials | HttpClient.HttpClient,
  RemediationV2Item
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1056) as any as S.Schema<GetRemediationsV2Request>,
  output: __S(1074) as any as S.Schema<GetRemediationsV2Response>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRemediationsV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetResourcesStatisticsV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | OrganizationalUnitNotFoundException
  | OrganizationNotFoundException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves statistical information about Amazon Web Services resources and their associated security findings.
 *
 * You can use the `Scopes` parameter to define the data boundary for the query. Currently, `Scopes` supports `AwsOrganizations`, which lets you aggregate resources from your entire organization or from specific organizational units. Only the delegated administrator account can use `Scopes`.
 *
 * If you set `GroupByField` to `ResourceSubCategory`, `ResourceInfo.AIDetails.HostResourceType`, or `ResourceInfo.AIDetails.CanonicalId`, you must include a `ResourceCategory` string filter with comparison set to `EQUALS` and value `AI/ML` in the corresponding `ResourceGroupByRule`.
 */
export const getResourcesStatisticsV2: API.OperationMethod<
  GetResourcesStatisticsV2Request,
  GetResourcesStatisticsV2Response,
  GetResourcesStatisticsV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1080) as any as S.Schema<GetResourcesStatisticsV2Request>,
  output: __S(1013) as any as S.Schema<GetResourcesStatisticsV2Response>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    OrganizationalUnitNotFoundException,
    OrganizationNotFoundException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcesStatisticsV2",
}));

export type GetResourcesTrendsV2Error =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns resource trend data based on the specified criteria. This operation helps you analyze patterns and changes in resource compliance over time.
 */
export const getResourcesTrendsV2: API.PaginatedOperationMethod<
  GetResourcesTrendsV2Request,
  GetResourcesTrendsV2Response,
  GetResourcesTrendsV2Error,
  Credentials | HttpClient.HttpClient,
  ResourcesTrendsMetricsResult
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1084) as any as S.Schema<GetResourcesTrendsV2Request>,
  output: __S(1089) as any as S.Schema<GetResourcesTrendsV2Response>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcesTrendsV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TrendsMetrics",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetResourcesV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | OrganizationalUnitNotFoundException
  | OrganizationNotFoundException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of resources.
 *
 * You can use the `Scopes` parameter to define the data boundary for the query. Currently, `Scopes` supports `AwsOrganizations`, which lets you retrieve resources from your entire organization or from specific organizational units. Only the delegated administrator account can use `Scopes`.
 *
 * You can use the `Filters` parameter to refine results based on resource attributes. You can use `Scopes` and `Filters` independently or together. When both are provided, `Scopes` narrows the data set first, and then `Filters` refines results within that scoped data set.
 *
 * For AI/ML resources, the response includes the `ResourceSubCategory` field. For self-hosted AI resources and their host resources, the response also includes `ResourceInfo` with AI-specific details. Self-hosted AI resources use a `ResourceType` with the `SelfHosted::AI::` prefix, such as `SelfHosted::AI::Model`, `SelfHosted::AI::Agent`, `SelfHosted::AI::InferenceEndpoint`, and `SelfHosted::AI::ExternalEndpoint`.
 *
 * If you filter by `ResourceSubCategory`, you must also include a `ResourceCategory` string filter with comparison set to `EQUALS` and value `AI/ML` in the same request.
 */
export const getResourcesV2: API.PaginatedOperationMethod<
  GetResourcesV2Request,
  GetResourcesV2Response,
  GetResourcesV2Error,
  Credentials | HttpClient.HttpClient,
  ResourceResult
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1090) as any as S.Schema<GetResourcesV2Request>,
  output: __S(1100) as any as S.Schema<GetResourcesV2Response>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    OrganizationalUnitNotFoundException,
    OrganizationNotFoundException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcesV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Resources",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetSecurityControlDefinitionError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves the definition of a security control. The definition includes the control title, description, Region availability, parameter definitions, and other details.
 */
export const getSecurityControlDefinition: API.OperationMethod<
  GetSecurityControlDefinitionRequest,
  GetSecurityControlDefinitionResponse,
  GetSecurityControlDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1101) as any as S.Schema<GetSecurityControlDefinitionRequest>,
  output: __S(1113) as any as S.Schema<GetSecurityControlDefinitionResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSecurityControlDefinition",
}));

export type InviteMembersError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts.
 * For information, see Managing Security Hub CSPM administrator and member accounts with Organizations
 * in the *Security Hub CSPM User Guide*.
 *
 * Invites other Amazon Web Services accounts to become member accounts for the Security Hub CSPM administrator account that
 * the invitation is sent from.
 *
 * This operation is only used to invite accounts that don't belong to an Amazon Web Services organization.
 * Organization accounts don't receive invitations.
 *
 * Before you can use this action to invite a member, you must first use the `CreateMembers` action to create the member account in Security Hub CSPM.
 *
 * When the account owner enables Security Hub CSPM and accepts the invitation to become a member
 * account, the administrator account can view the findings generated in the member account.
 */
export const inviteMembers: API.OperationMethod<
  InviteMembersRequest,
  InviteMembersResponse,
  InviteMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1114) as any as S.Schema<InviteMembersRequest>,
  output: __S(902) as any as S.Schema<InviteMembersResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InviteMembers",
}));

export type ListAggregatorsV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of V2 aggregators.
 */
export const listAggregatorsV2: API.PaginatedOperationMethod<
  ListAggregatorsV2Request,
  ListAggregatorsV2Response,
  ListAggregatorsV2Error,
  Credentials | HttpClient.HttpClient,
  AggregatorV2
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1115) as any as S.Schema<ListAggregatorsV2Request>,
  output: __S(1118) as any as S.Schema<ListAggregatorsV2Response>,
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
  operationName: "ListAggregatorsV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AggregatorsV2",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAutomationRulesError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * A list of automation rules and their metadata for the calling account.
 */
export const listAutomationRules: API.OperationMethod<
  ListAutomationRulesRequest,
  ListAutomationRulesResponse,
  ListAutomationRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1119) as any as S.Schema<ListAutomationRulesRequest>,
  output: __S(1122) as any as S.Schema<ListAutomationRulesResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAutomationRules",
}));

export type ListAutomationRulesV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of automation rules and metadata for the calling account.
 */
export const listAutomationRulesV2: API.OperationMethod<
  ListAutomationRulesV2Request,
  ListAutomationRulesV2Response,
  ListAutomationRulesV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1123) as any as S.Schema<ListAutomationRulesV2Request>,
  output: __S(1128) as any as S.Schema<ListAutomationRulesV2Response>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAutomationRulesV2",
}));

export type ListConfigurationPoliciesError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Lists the configuration policies that the Security Hub CSPM delegated administrator has created for your
 * organization. Only the delegated administrator can invoke this operation from the home Region.
 */
export const listConfigurationPolicies: API.PaginatedOperationMethod<
  ListConfigurationPoliciesRequest,
  ListConfigurationPoliciesResponse,
  ListConfigurationPoliciesError,
  Credentials | HttpClient.HttpClient,
  ConfigurationPolicySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1129) as any as S.Schema<ListConfigurationPoliciesRequest>,
  output: __S(1132) as any as S.Schema<ListConfigurationPoliciesResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfigurationPolicies",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ConfigurationPolicySummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListConfigurationPolicyAssociationsError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Provides information about the associations for your configuration policies and self-managed behavior. Only the
 * Security Hub CSPM delegated administrator can invoke this operation from the home Region.
 */
export const listConfigurationPolicyAssociations: API.PaginatedOperationMethod<
  ListConfigurationPolicyAssociationsRequest,
  ListConfigurationPolicyAssociationsResponse,
  ListConfigurationPolicyAssociationsError,
  Credentials | HttpClient.HttpClient,
  ConfigurationPolicyAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1134) as any as S.Schema<ListConfigurationPolicyAssociationsRequest>,
  output: __S(1135) as any as S.Schema<ListConfigurationPolicyAssociationsResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfigurationPolicyAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ConfigurationPolicyAssociationSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListConnectorsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidAccessException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the CSPM connectors and their metadata for the calling account.
 */
export const listConnectors: API.OperationMethod<
  ListConnectorsRequest,
  ListConnectorsResponse,
  ListConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1136) as any as S.Schema<ListConnectorsRequest>,
  output: __S(1140) as any as S.Schema<ListConnectorsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidAccessException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnectors",
}));

export type ListConnectorsV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Grants permission to retrieve a list of connectorsV2 and their metadata for the calling account.
 */
export const listConnectorsV2: API.OperationMethod<
  ListConnectorsV2Request,
  ListConnectorsV2Response,
  ListConnectorsV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1141) as any as S.Schema<ListConnectorsV2Request>,
  output: __S(1145) as any as S.Schema<ListConnectorsV2Response>,
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
  operationName: "ListConnectorsV2",
}));

export type ListEnabledProductsForImportError =
  | InternalException
  | InvalidAccessException
  | LimitExceededException
  | CommonErrors;
/**
 * Lists all findings-generating solutions (products) that you are subscribed to receive
 * findings from in Security Hub CSPM.
 */
export const listEnabledProductsForImport: API.PaginatedOperationMethod<
  ListEnabledProductsForImportRequest,
  ListEnabledProductsForImportResponse,
  ListEnabledProductsForImportError,
  Credentials | HttpClient.HttpClient,
  NonEmptyString
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1146) as any as S.Schema<ListEnabledProductsForImportRequest>,
  output: __S(1147) as any as S.Schema<ListEnabledProductsForImportResponse>,
  errors: [InternalException, InvalidAccessException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEnabledProductsForImport",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ProductSubscriptions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListExposuresByRemediationV2Error =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the exposure findings tied to a specific remediation target. Results are sorted by
 * previous severity, highest first, and are paginated.
 */
export const listExposuresByRemediationV2: API.PaginatedOperationMethod<
  ListExposuresByRemediationV2Request,
  ListExposuresByRemediationV2Response,
  ListExposuresByRemediationV2Error,
  Credentials | HttpClient.HttpClient,
  ExposureFinding
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1148) as any as S.Schema<ListExposuresByRemediationV2Request>,
  output: __S(1151) as any as S.Schema<ListExposuresByRemediationV2Response>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExposuresByRemediationV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFindingAggregatorsError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * If cross-Region aggregation is enabled, then `ListFindingAggregators` returns the Amazon Resource Name (ARN)
 * of the finding aggregator. You can run this operation from any Amazon Web Services Region.
 */
export const listFindingAggregators: API.PaginatedOperationMethod<
  ListFindingAggregatorsRequest,
  ListFindingAggregatorsResponse,
  ListFindingAggregatorsError,
  Credentials | HttpClient.HttpClient,
  FindingAggregator
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1152) as any as S.Schema<ListFindingAggregatorsRequest>,
  output: __S(1155) as any as S.Schema<ListFindingAggregatorsResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFindingAggregators",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "FindingAggregators",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFreeTrialStatusesV2Error =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the free trial status of Security Hub features. A delegated Security Hub administrator can list the status for accounts in its organization. Any other account can list the status only for itself. Free trial status remains available after a feature is disabled.
 */
export const listFreeTrialStatusesV2: API.PaginatedOperationMethod<
  ListFreeTrialStatusesV2Request,
  ListFreeTrialStatusesV2Response,
  ListFreeTrialStatusesV2Error,
  Credentials | HttpClient.HttpClient,
  AccountFreeTrialStatus
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1156) as any as S.Schema<ListFreeTrialStatusesV2Request>,
  output: __S(1161) as any as S.Schema<ListFreeTrialStatusesV2Response>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFreeTrialStatusesV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AccountFreeTrialStatuses",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListInvitationsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts.
 * For information, see Managing Security Hub CSPM administrator and member accounts with Organizations
 * in the *Security Hub CSPM User Guide*.
 *
 * Lists all Security Hub CSPM membership invitations that were sent to the calling account.
 *
 * Only accounts that are managed by invitation can use this operation.
 * Accounts that are managed using the integration with Organizations don't receive invitations.
 */
export const listInvitations: API.PaginatedOperationMethod<
  ListInvitationsRequest,
  ListInvitationsResponse,
  ListInvitationsError,
  Credentials | HttpClient.HttpClient,
  Invitation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1162) as any as S.Schema<ListInvitationsRequest>,
  output: __S(1164) as any as S.Schema<ListInvitationsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
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

export type ListMembersError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Lists details about all member accounts for the current Security Hub CSPM administrator
 * account.
 *
 * The results include both member accounts that belong to an organization and member
 * accounts that were invited manually.
 */
export const listMembers: API.PaginatedOperationMethod<
  ListMembersRequest,
  ListMembersResponse,
  ListMembersError,
  Credentials | HttpClient.HttpClient,
  Member
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1165) as any as S.Schema<ListMembersRequest>,
  output: __S(1166) as any as S.Schema<ListMembersResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
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
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Lists the Security Hub CSPM administrator accounts. Can only be called by the organization
 * management account.
 */
export const listOrganizationAdminAccounts: API.PaginatedOperationMethod<
  ListOrganizationAdminAccountsRequest,
  ListOrganizationAdminAccountsResponse,
  ListOrganizationAdminAccountsError,
  Credentials | HttpClient.HttpClient,
  AdminAccount
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1167) as any as S.Schema<ListOrganizationAdminAccountsRequest>,
  output: __S(1170) as any as S.Schema<ListOrganizationAdminAccountsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
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

export type ListSecurityControlDefinitionsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Lists all of the security controls that apply to a specified standard.
 */
export const listSecurityControlDefinitions: API.PaginatedOperationMethod<
  ListSecurityControlDefinitionsRequest,
  ListSecurityControlDefinitionsResponse,
  ListSecurityControlDefinitionsError,
  Credentials | HttpClient.HttpClient,
  SecurityControlDefinition
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1171) as any as S.Schema<ListSecurityControlDefinitionsRequest>,
  output: __S(1173) as any as S.Schema<ListSecurityControlDefinitionsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSecurityControlDefinitions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SecurityControlDefinitions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListStandardsControlAssociationsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Specifies whether a control is currently enabled or disabled in each enabled standard in the calling account.
 *
 * This operation omits standards control associations for standard subscriptions where `StandardsControlsUpdatable` has value `NOT_READY_FOR_UPDATES`.
 */
export const listStandardsControlAssociations: API.PaginatedOperationMethod<
  ListStandardsControlAssociationsRequest,
  ListStandardsControlAssociationsResponse,
  ListStandardsControlAssociationsError,
  Credentials | HttpClient.HttpClient,
  StandardsControlAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1174) as any as S.Schema<ListStandardsControlAssociationsRequest>,
  output: __S(1177) as any as S.Schema<ListStandardsControlAssociationsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStandardsControlAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "StandardsControlAssociationSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of tags associated with a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1178) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(1179) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InternalException, InvalidInputException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type RegisterConnectorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Grants permission to complete the authorization based on input parameters.
 */
export const registerConnectorV2: API.OperationMethod<
  RegisterConnectorV2Request,
  RegisterConnectorV2Response,
  RegisterConnectorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1180) as any as S.Schema<RegisterConnectorV2Request>,
  output: __S(1181) as any as S.Schema<RegisterConnectorV2Response>,
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
  operationName: "RegisterConnectorV2",
}));

export type StartConfigurationPolicyAssociationError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Associates a target account, organizational unit, or the root with a specified configuration. The target can be
 * associated with a configuration policy or self-managed behavior. Only the Security Hub CSPM delegated administrator can
 * invoke this operation from the home Region.
 */
export const startConfigurationPolicyAssociation: API.OperationMethod<
  StartConfigurationPolicyAssociationRequest,
  StartConfigurationPolicyAssociationResponse,
  StartConfigurationPolicyAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1182) as any as S.Schema<StartConfigurationPolicyAssociationRequest>,
  output: __S(45) as any as S.Schema<StartConfigurationPolicyAssociationResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartConfigurationPolicyAssociation",
}));

export type StartConfigurationPolicyDisassociationError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disassociates a target account, organizational unit, or the root from a specified configuration. When you
 * disassociate a configuration from its target, the target inherits the configuration of the closest parent. If there's no
 * configuration to inherit, the target retains its settings but becomes a self-managed account. A target can be disassociated from
 * a configuration policy or self-managed behavior. Only the Security Hub CSPM delegated administrator can invoke this
 * operation from the home Region.
 */
export const startConfigurationPolicyDisassociation: API.OperationMethod<
  StartConfigurationPolicyDisassociationRequest,
  StartConfigurationPolicyDisassociationResponse,
  StartConfigurationPolicyDisassociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1183) as any as S.Schema<StartConfigurationPolicyDisassociationRequest>,
  output: __S(1) as any as S.Schema<StartConfigurationPolicyDisassociationResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartConfigurationPolicyDisassociation",
}));

export type TagResourceError =
  | InternalException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds one or more tags to a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1184) as any as S.Schema<TagResourceRequest>,
  output: __S(3) as any as S.Schema<TagResourceResponse>,
  errors: [InternalException, InvalidInputException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Removes one or more tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1185) as any as S.Schema<UntagResourceRequest>,
  output: __S(3) as any as S.Schema<UntagResourceResponse>,
  errors: [InternalException, InvalidInputException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateActionTargetError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the name and description of a custom action target in Security Hub CSPM.
 */
export const updateActionTarget: API.OperationMethod<
  UpdateActionTargetRequest,
  UpdateActionTargetResponse,
  UpdateActionTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1186) as any as S.Schema<UpdateActionTargetRequest>,
  output: __S(3) as any as S.Schema<UpdateActionTargetResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateActionTarget",
}));

export type UpdateAggregatorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Udpates the configuration for the Aggregator V2.
 */
export const updateAggregatorV2: API.OperationMethod<
  UpdateAggregatorV2Request,
  UpdateAggregatorV2Response,
  UpdateAggregatorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1187) as any as S.Schema<UpdateAggregatorV2Request>,
  output: __S(844) as any as S.Schema<UpdateAggregatorV2Response>,
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
  operationName: "UpdateAggregatorV2",
}));

export type UpdateAutomationRuleV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a V2 automation rule.
 */
export const updateAutomationRuleV2: API.OperationMethod<
  UpdateAutomationRuleV2Request,
  UpdateAutomationRuleV2Response,
  UpdateAutomationRuleV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1188) as any as S.Schema<UpdateAutomationRuleV2Request>,
  output: __S(3) as any as S.Schema<UpdateAutomationRuleV2Response>,
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
  operationName: "UpdateAutomationRuleV2",
}));

export type UpdateConfigurationPolicyError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates a configuration policy. Only the Security Hub CSPM delegated
 * administrator can invoke this operation from the home Region.
 */
export const updateConfigurationPolicy: API.OperationMethod<
  UpdateConfigurationPolicyRequest,
  UpdateConfigurationPolicyResponse,
  UpdateConfigurationPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1189) as any as S.Schema<UpdateConfigurationPolicyRequest>,
  output: __S(877) as any as S.Schema<UpdateConfigurationPolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceConflictException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConfigurationPolicy",
}));

export type UpdateConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidAccessException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a CSPM connector's configuration, such as the scope or regions for the connected cloud provider.
 */
export const updateConnector: API.OperationMethod<
  UpdateConnectorRequest,
  UpdateConnectorResponse,
  UpdateConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1192) as any as S.Schema<UpdateConnectorRequest>,
  output: __S(1193) as any as S.Schema<UpdateConnectorResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidAccessException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConnector",
}));

export type UpdateConnectorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Grants permission to update a connectorV2 based on its id and input parameters.
 */
export const updateConnectorV2: API.OperationMethod<
  UpdateConnectorV2Request,
  UpdateConnectorV2Response,
  UpdateConnectorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1196) as any as S.Schema<UpdateConnectorV2Request>,
  output: __S(1197) as any as S.Schema<UpdateConnectorV2Response>,
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
  operationName: "UpdateConnectorV2",
}));

export type UpdateFindingAggregatorError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * The *aggregation Region* is now called the *home Region*.
 *
 * Updates cross-Region aggregation settings. You can use this operation to update the Region linking mode and the list
 * of included or excluded Amazon Web Services Regions. However, you can't use this operation to change the home Region.
 *
 * You can invoke this operation from the current home Region only.
 */
export const updateFindingAggregator: API.OperationMethod<
  UpdateFindingAggregatorRequest,
  UpdateFindingAggregatorResponse,
  UpdateFindingAggregatorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1198) as any as S.Schema<UpdateFindingAggregatorRequest>,
  output: __S(889) as any as S.Schema<UpdateFindingAggregatorResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFindingAggregator",
}));

export type UpdateFindingsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * `UpdateFindings` is a deprecated operation. Instead of `UpdateFindings`, use
 * the `BatchUpdateFindings` operation.
 *
 * The `UpdateFindings` operation updates the `Note` and `RecordState` of the Security Hub CSPM aggregated
 * findings that the filter attributes specify. Any member account that can view the finding
 * can also see the update to the finding.
 *
 * Finding updates made with `UpdateFindings` aren't persisted if the same finding is later updated by the
 * finding provider through the `BatchImportFindings` operation. In addition, Security Hub CSPM doesn't
 * record updates made with `UpdateFindings` in the finding history.
 */
export const updateFindings: API.OperationMethod<
  UpdateFindingsRequest,
  UpdateFindingsResponse,
  UpdateFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1199) as any as S.Schema<UpdateFindingsRequest>,
  output: __S(3) as any as S.Schema<UpdateFindingsResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFindings",
}));

export type UpdateInsightError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the Security Hub CSPM insight identified by the specified insight ARN.
 */
export const updateInsight: API.OperationMethod<
  UpdateInsightRequest,
  UpdateInsightResponse,
  UpdateInsightError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1200) as any as S.Schema<UpdateInsightRequest>,
  output: __S(3) as any as S.Schema<UpdateInsightResponse>,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateInsight",
}));

export type UpdateOrganizationConfigurationError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the configuration of your organization in Security Hub CSPM. Only the
 * Security Hub CSPM administrator account can invoke this operation.
 */
export const updateOrganizationConfiguration: API.OperationMethod<
  UpdateOrganizationConfigurationRequest,
  UpdateOrganizationConfigurationResponse,
  UpdateOrganizationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1201) as any as S.Schema<UpdateOrganizationConfigurationRequest>,
  output: __S(1) as any as S.Schema<UpdateOrganizationConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceConflictException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOrganizationConfiguration",
}));

export type UpdateSecurityControlError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the properties of a security control.
 */
export const updateSecurityControl: API.OperationMethod<
  UpdateSecurityControlRequest,
  UpdateSecurityControlResponse,
  UpdateSecurityControlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1202) as any as S.Schema<UpdateSecurityControlRequest>,
  output: __S(3) as any as S.Schema<UpdateSecurityControlResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSecurityControl",
}));

export type UpdateSecurityHubConfigurationError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates configuration options for Security Hub CSPM.
 */
export const updateSecurityHubConfiguration: API.OperationMethod<
  UpdateSecurityHubConfigurationRequest,
  UpdateSecurityHubConfigurationResponse,
  UpdateSecurityHubConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1203) as any as S.Schema<UpdateSecurityHubConfigurationRequest>,
  output: __S(1) as any as S.Schema<UpdateSecurityHubConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSecurityHubConfiguration",
}));

export type UpdateStandardsControlError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Used to control whether an individual security standard control is enabled or
 * disabled.
 *
 * Calls to this operation return a `RESOURCE_NOT_FOUND_EXCEPTION` error when the standard subscription for the control has `StandardsControlsUpdatable` value `NOT_READY_FOR_UPDATES`.
 */
export const updateStandardsControl: API.OperationMethod<
  UpdateStandardsControlRequest,
  UpdateStandardsControlResponse,
  UpdateStandardsControlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1204) as any as S.Schema<UpdateStandardsControlRequest>,
  output: __S(3) as any as S.Schema<UpdateStandardsControlResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateStandardsControl",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AdministratorId: S.optional(S.String),
          InvitationId: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/administrator" }), svc, auth, proto, ver, rules),
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
        S.Struct({ MasterId: S.optional(S.String), InvitationId: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/master" }), svc, auth, proto, ver, rules),
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
        S.Struct({ AutomationRulesArns: S.optional(__S(4)) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/automationrules/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDeleteAutomationRulesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RuleArn: S.optional(S.String),
          ErrorCode: S.optional(S.Number),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UnprocessedAutomationRule",
      });
    case 7:
      return S.Array(__S(6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ProcessedAutomationRules: S.optional(__S(4)),
          UnprocessedAutomationRules: S.optional(__S(7)),
        }),
      ).annotate({
        identifier: "BatchDeleteAutomationRulesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ StandardsSubscriptionArns: S.optional(__S(4)) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/standards/deregister" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDisableStandardsRequest",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() => S.Struct({ StatusReasonCode: S.optional(S.String) })).annotate({
        identifier: "StandardsStatusReason",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StandardsSubscriptionArn: S.optional(S.String),
          StandardsArn: S.optional(S.String),
          StandardsInput: S.optional(__S(10)),
          StandardsStatus: S.optional(S.String),
          StandardsControlsUpdatable: S.optional(S.String),
          StandardsStatusReason: S.optional(__S(11)),
          Provider: S.optional(S.String),
        }),
      ).annotate({ identifier: "StandardsSubscription" });
    case 5:
      return S.Array(__S(12));
    case 6:
      return S.suspend(() => S.Struct({ StandardsSubscriptions: S.optional(__S(13)) })).annotate({
        identifier: "BatchDisableStandardsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StandardsArn: S.optional(S.String),
          StandardsInput: S.optional(__S(10)),
        }),
      ).annotate({
        identifier: "StandardsSubscriptionRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15));
    case 1:
      return S.suspend(() =>
        S.Struct({ StandardsSubscriptionRequests: S.optional(__S(16)) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/standards/register" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchEnableStandardsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AutomationRulesArns: S.optional(__S(4)) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/automationrules/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetAutomationRulesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Value: S.optional(S.String), Comparison: S.optional(S.String) }),
      ).annotate({ identifier: "StringFilter" });
    case 4:
      return S.Array(__S(19));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Value: S.optional(S.Number),
          Unit: S.optional(S.String),
          Comparison: S.optional(S.String),
        }),
      ).annotate({ identifier: "DateRange" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Start: S.optional(S.String),
          End: S.optional(S.String),
          DateRange: S.optional(__S(21)),
        }),
      ).annotate({ identifier: "DateFilter" });
    case 7:
      return S.Array(__S(22));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Gte: S.optional(S.Number),
          Lte: S.optional(S.Number),
          Eq: S.optional(S.Number),
          Gt: S.optional(S.Number),
          Lt: S.optional(S.Number),
        }),
      ).annotate({ identifier: "NumberFilter" });
    case 1:
      return S.Array(__S(24));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(S.String),
          Value: S.optional(S.String),
          Comparison: S.optional(S.String),
        }),
      ).annotate({ identifier: "MapFilter" });
    case 3:
      return S.Array(__S(26));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProductArn: S.optional(__S(20)),
          AwsAccountId: S.optional(__S(20)),
          Id: S.optional(__S(20)),
          GeneratorId: S.optional(__S(20)),
          Type: S.optional(__S(20)),
          FirstObservedAt: S.optional(__S(23)),
          LastObservedAt: S.optional(__S(23)),
          CreatedAt: S.optional(__S(23)),
          UpdatedAt: S.optional(__S(23)),
          Confidence: S.optional(__S(25)),
          Criticality: S.optional(__S(25)),
          Title: S.optional(__S(20)),
          Description: S.optional(__S(20)),
          SourceUrl: S.optional(__S(20)),
          ProductName: S.optional(__S(20)),
          CompanyName: S.optional(__S(20)),
          SeverityLabel: S.optional(__S(20)),
          ResourceType: S.optional(__S(20)),
          ResourceId: S.optional(__S(20)),
          ResourcePartition: S.optional(__S(20)),
          ResourceRegion: S.optional(__S(20)),
          ResourceTags: S.optional(__S(27)),
          ResourceDetailsOther: S.optional(__S(27)),
          ComplianceStatus: S.optional(__S(20)),
          ComplianceSecurityControlId: S.optional(__S(20)),
          ComplianceAssociatedStandardsId: S.optional(__S(20)),
          VerificationState: S.optional(__S(20)),
          WorkflowStatus: S.optional(__S(20)),
          RecordState: S.optional(__S(20)),
          RelatedFindingsProductArn: S.optional(__S(20)),
          RelatedFindingsId: S.optional(__S(20)),
          NoteText: S.optional(__S(20)),
          NoteUpdatedAt: S.optional(__S(23)),
          NoteUpdatedBy: S.optional(__S(20)),
          UserDefinedFields: S.optional(__S(27)),
          ResourceApplicationArn: S.optional(__S(20)),
          ResourceApplicationName: S.optional(__S(20)),
          AwsAccountName: S.optional(__S(20)),
          ResourceProvider: S.optional(__S(20)),
          ResourceOwnerAccountId: S.optional(__S(20)),
          ResourceOwnerOrgId: S.optional(__S(20)),
        }),
      ).annotate({
        identifier: "AutomationRulesFindingFilters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Text: S.optional(S.String), UpdatedBy: S.optional(S.String) }),
      ).annotate({ identifier: "NoteUpdate" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Normalized: S.optional(S.Number),
          Product: S.optional(S.Number),
          Label: S.optional(S.String),
        }),
      ).annotate({ identifier: "SeverityUpdate" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Status: S.optional(S.String) })).annotate({
        identifier: "WorkflowUpdate",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ProductArn: S.optional(S.String), Id: S.optional(S.String) }),
      ).annotate({ identifier: "RelatedFinding" });
    case 2:
      return S.Array(__S(33));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Note: S.optional(__S(29)),
          Severity: S.optional(__S(30)),
          VerificationState: S.optional(S.String),
          Confidence: S.optional(S.Number),
          Criticality: S.optional(S.Number),
          Types: S.optional(__S(4)),
          UserDefinedFields: S.optional(__S(31)),
          Workflow: S.optional(__S(32)),
          RelatedFindings: S.optional(__S(34)),
        }),
      ).annotate({
        identifier: "AutomationRulesFindingFieldsUpdate",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          FindingFieldsUpdate: S.optional(__S(35)),
        }),
      ).annotate({ identifier: "AutomationRulesAction" });
    case 5:
      return S.Array(__S(36));
    case 6:
      return S.suspend(() =>
        S.Struct({
          RuleArn: S.optional(S.String),
          RuleStatus: S.optional(S.String),
          RuleOrder: S.optional(S.Number),
          RuleName: S.optional(S.String),
          Description: S.optional(S.String),
          IsTerminal: S.optional(S.Boolean),
          Criteria: S.optional(__S(28)),
          Actions: S.optional(__S(37)),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CreatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "AutomationRulesConfig" });
    case 7:
      return S.Array(__S(38));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Rules: S.optional(__S(39)),
          UnprocessedAutomationRules: S.optional(__S(7)),
        }),
      ).annotate({
        identifier: "BatchGetAutomationRulesResponse",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ AccountId: S.String }),
        /*@__PURE__*/ S.Struct({ OrganizationalUnitId: S.String }),
        /*@__PURE__*/ S.Struct({ RootId: S.String }),
      ]);
    case 2:
      return S.suspend(() => S.Struct({ Target: S.optional(__S(41)) })).annotate({
        identifier: "ConfigurationPolicyAssociation",
      });
    case 3:
      return S.Array(__S(42));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ConfigurationPolicyAssociationIdentifiers: S.optional(__S(43)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configurationPolicyAssociation/batchget" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetConfigurationPolicyAssociationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConfigurationPolicyId: S.optional(S.String),
          TargetId: S.optional(S.String),
          TargetType: S.optional(S.String),
          AssociationType: S.optional(S.String),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          AssociationStatus: S.optional(S.String),
          AssociationStatusMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ConfigurationPolicyAssociationSummary",
      });
    case 6:
      return S.Array(__S(45));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConfigurationPolicyAssociationIdentifiers: S.optional(__S(42)),
          ErrorCode: S.optional(S.String),
          ErrorReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UnprocessedConfigurationPolicyAssociation",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(47));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ConfigurationPolicyAssociations: S.optional(__S(46)),
          UnprocessedConfigurationPolicyAssociations: S.optional(__S(48)),
        }),
      ).annotate({
        identifier: "BatchGetConfigurationPolicyAssociationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ SecurityControlIds: S.optional(__S(4)) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/securityControls/batchGet" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetSecurityControlsRequest",
      });
    case 3:
      return S.Array(S.Number);
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Integer: S.Number }),
        /*@__PURE__*/ S.Struct({ IntegerList: __S(51) }),
        /*@__PURE__*/ S.Struct({ Double: S.Number }),
        /*@__PURE__*/ S.Struct({ String: S.String }),
        /*@__PURE__*/ S.Struct({ StringList: __S(4) }),
        /*@__PURE__*/ S.Struct({ Boolean: S.Boolean }),
        /*@__PURE__*/ S.Struct({ Enum: S.String }),
        /*@__PURE__*/ S.Struct({ EnumList: __S(4) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({ ValueType: S.optional(S.String), Value: S.optional(__S(52)) }),
      ).annotate({ identifier: "ParameterConfiguration" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(53).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          SecurityControlId: S.optional(S.String),
          SecurityControlArn: S.optional(S.String),
          Title: S.optional(S.String),
          Description: S.optional(S.String),
          RemediationUrl: S.optional(S.String),
          SeverityRating: S.optional(S.String),
          SecurityControlStatus: S.optional(S.String),
          UpdateStatus: S.optional(S.String),
          Parameters: S.optional(__S(54)),
          LastUpdateReason: S.optional(S.String),
          Provider: S.optional(S.String),
        }),
      ).annotate({ identifier: "SecurityControl" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55));
    case 1:
      return S.suspend(() =>
        S.Struct({
          SecurityControlId: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          ErrorReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UnprocessedSecurityControl",
      });
    case 2:
      return S.Array(__S(57));
    case 3:
      return S.suspend(() =>
        S.Struct({
          SecurityControls: S.optional(__S(56)),
          UnprocessedIds: S.optional(__S(58)),
        }),
      ).annotate({
        identifier: "BatchGetSecurityControlsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ SecurityControlId: S.optional(S.String), StandardsArn: S.optional(S.String) }),
      ).annotate({
        identifier: "StandardsControlAssociationId",
      });
    case 5:
      return S.Array(__S(60));
    case 6:
      return S.suspend(() =>
        S.Struct({
          StandardsControlAssociationIds: S.optional(__S(61)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/associations/batchGet" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetStandardsControlAssociationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StandardsArn: S.optional(S.String),
          SecurityControlId: S.optional(S.String),
          SecurityControlArn: S.optional(S.String),
          AssociationStatus: S.optional(S.String),
          RelatedRequirements: S.optional(__S(4)),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedReason: S.optional(S.String),
          StandardsControlTitle: S.optional(S.String),
          StandardsControlDescription: S.optional(S.String),
          StandardsControlArns: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "StandardsControlAssociationDetail",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(63));
    case 1:
      return S.suspend(() =>
        S.Struct({
          StandardsControlAssociationId: S.optional(__S(60)),
          ErrorCode: S.optional(S.String),
          ErrorReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UnprocessedStandardsControlAssociation",
      });
    case 2:
      return S.Array(__S(65));
    case 3:
      return S.suspend(() =>
        S.Struct({
          StandardsControlAssociationDetails: S.optional(__S(64)),
          UnprocessedAssociations: S.optional(__S(66)),
        }),
      ).annotate({
        identifier: "BatchGetStandardsControlAssociationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Product: S.optional(S.Number),
          Label: S.optional(S.String),
          Normalized: S.optional(S.Number),
          Original: S.optional(S.String),
        }),
      ).annotate({ identifier: "Severity" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Text: S.optional(S.String), Url: S.optional(S.String) }),
      ).annotate({ identifier: "Recommendation" });
    case 6:
      return S.suspend(() => S.Struct({ Recommendation: S.optional(__S(69)) })).annotate({
        identifier: "Remediation",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Type: S.optional(S.String),
          Path: S.optional(S.String),
          State: S.optional(S.String),
        }),
      ).annotate({ identifier: "Malware" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(71));
    case 1:
      return S.suspend(() =>
        S.Struct({ Begin: S.optional(S.Number), End: S.optional(S.Number) }),
      ).annotate({ identifier: "PortRange" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Direction: S.optional(S.String),
          Protocol: S.optional(S.String),
          OpenPortRange: S.optional(__S(73)),
          SourceIpV4: S.optional(S.String),
          SourceIpV6: S.optional(S.String),
          SourcePort: S.optional(S.Number),
          SourceDomain: S.optional(S.String),
          SourceMac: S.optional(S.String),
          DestinationIpV4: S.optional(S.String),
          DestinationIpV6: S.optional(S.String),
          DestinationPort: S.optional(S.Number),
          DestinationDomain: S.optional(S.String),
        }),
      ).annotate({ identifier: "Network" });
    case 3:
      return S.Array(__S(73));
    case 4:
      return S.suspend(() =>
        S.Struct({ Address: S.optional(__S(4)), PortRanges: S.optional(__S(75)) }),
      ).annotate({
        identifier: "NetworkPathComponentDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Protocol: S.optional(S.String),
          Destination: S.optional(__S(76)),
          Source: S.optional(__S(76)),
        }),
      ).annotate({ identifier: "NetworkHeader" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ComponentId: S.optional(S.String),
          ComponentType: S.optional(S.String),
          Egress: S.optional(__S(77)),
          Ingress: S.optional(__S(77)),
        }),
      ).annotate({ identifier: "NetworkPathComponent" });
    case 7:
      return S.Array(__S(78));
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Path: S.optional(S.String),
          Pid: S.optional(S.Number),
          ParentPid: S.optional(S.Number),
          LaunchedAt: S.optional(S.String),
          TerminatedAt: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProcessDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          FilePath: S.optional(S.String),
          FileName: S.optional(S.String),
          ResourceId: S.optional(S.String),
          Hash: S.optional(S.String),
        }),
      ).annotate({ identifier: "FilePaths" });
    case 2:
      return S.Array(__S(81));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Severity: S.optional(S.String),
          ItemCount: S.optional(S.Number),
          FilePaths: S.optional(__S(82)),
        }),
      ).annotate({ identifier: "Threat" });
    case 4:
      return S.Array(__S(83));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Value: S.optional(S.String),
          Category: S.optional(S.String),
          LastObservedAt: S.optional(S.String),
          Source: S.optional(S.String),
          SourceUrl: S.optional(S.String),
        }),
      ).annotate({ identifier: "ThreatIntelIndicator" });
    case 6:
      return S.Array(__S(85));
    case 7:
      return S.suspend(() => S.Struct({ Id: S.optional(S.String) })).annotate({
        identifier: "ResourceOwnerAccount",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Account: S.optional(__S(87)), Org: S.optional(__S(87)) }),
      ).annotate({ identifier: "ResourceOwner" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.String), Reason: S.optional(S.String) }),
      ).annotate({ identifier: "ClassificationStatus" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Start: S.optional(S.Number),
          End: S.optional(S.Number),
          StartColumn: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Range" });
    case 3:
      return S.Array(__S(90));
    case 4:
      return S.suspend(() =>
        S.Struct({
          PageNumber: S.optional(S.Number),
          LineRange: S.optional(__S(90)),
          OffsetRange: S.optional(__S(90)),
        }),
      ).annotate({ identifier: "Page" });
    case 5:
      return S.Array(__S(92));
    case 6:
      return S.suspend(() =>
        S.Struct({ JsonPath: S.optional(S.String), RecordIndex: S.optional(S.Number) }),
      ).annotate({ identifier: "Record" });
    case 7:
      return S.Array(__S(94));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Column: S.optional(S.Number),
          Row: S.optional(S.Number),
          ColumnName: S.optional(S.String),
          CellReference: S.optional(S.String),
        }),
      ).annotate({ identifier: "Cell" });
    case 1:
      return S.Array(__S(96));
    case 2:
      return S.suspend(() =>
        S.Struct({
          LineRanges: S.optional(__S(91)),
          OffsetRanges: S.optional(__S(91)),
          Pages: S.optional(__S(93)),
          Records: S.optional(__S(95)),
          Cells: S.optional(__S(97)),
        }),
      ).annotate({ identifier: "Occurrences" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Count: S.optional(S.Number),
          Type: S.optional(S.String),
          Occurrences: S.optional(__S(98)),
        }),
      ).annotate({ identifier: "SensitiveDataDetections" });
    case 4:
      return S.Array(__S(99));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Category: S.optional(S.String),
          Detections: S.optional(__S(100)),
          TotalCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SensitiveDataResult" });
    case 6:
      return S.Array(__S(101));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Count: S.optional(S.Number),
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Occurrences: S.optional(__S(98)),
        }),
      ).annotate({
        identifier: "CustomDataIdentifiersDetections",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(103));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Detections: S.optional(__S(104)),
          TotalCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CustomDataIdentifiersResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MimeType: S.optional(S.String),
          SizeClassified: S.optional(S.Number),
          AdditionalOccurrences: S.optional(S.Boolean),
          Status: S.optional(__S(89)),
          SensitiveData: S.optional(__S(102)),
          CustomDataIdentifiers: S.optional(__S(105)),
        }),
      ).annotate({ identifier: "ClassificationResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DetailedResultsLocation: S.optional(S.String),
          Result: S.optional(__S(106)),
        }),
      ).annotate({
        identifier: "DataClassificationDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          OnDemandAllocationStrategy: S.optional(S.String),
          OnDemandBaseCapacity: S.optional(S.Number),
          OnDemandPercentageAboveBaseCapacity: S.optional(S.Number),
          SpotAllocationStrategy: S.optional(S.String),
          SpotInstancePools: S.optional(S.Number),
          SpotMaxPrice: S.optional(S.String),
        }),
      ).annotate({
        identifier:
          "AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LaunchTemplateId: S.optional(S.String),
          LaunchTemplateName: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({
        identifier:
          "AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ InstanceType: S.optional(S.String), WeightedCapacity: S.optional(S.String) }),
      ).annotate({
        identifier:
          "AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails",
      });
    case 7:
      return S.Array(__S(110));
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LaunchTemplateSpecification: S.optional(__S(109)),
          Overrides: S.optional(__S(111)),
        }),
      ).annotate({
        identifier: "AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InstancesDistribution: S.optional(__S(108)),
          LaunchTemplate: S.optional(__S(112)),
        }),
      ).annotate({
        identifier: "AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails",
      });
    case 2:
      return S.suspend(() => S.Struct({ Value: S.optional(S.String) })).annotate({
        identifier: "AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails",
      });
    case 3:
      return S.Array(__S(114));
    case 4:
      return S.suspend(() =>
        S.Struct({
          LaunchTemplateId: S.optional(S.String),
          LaunchTemplateName: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LaunchConfigurationName: S.optional(S.String),
          LoadBalancerNames: S.optional(__S(4)),
          HealthCheckType: S.optional(S.String),
          HealthCheckGracePeriod: S.optional(S.Number),
          CreatedTime: S.optional(S.String),
          MixedInstancesPolicy: S.optional(__S(113)),
          AvailabilityZones: S.optional(__S(115)),
          LaunchTemplate: S.optional(__S(116)),
          CapacityRebalance: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsAutoScalingAutoScalingGroupDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ArtifactIdentifier: S.optional(S.String),
          EncryptionDisabled: S.optional(S.Boolean),
          Location: S.optional(S.String),
          Name: S.optional(S.String),
          NamespaceType: S.optional(S.String),
          OverrideArtifactName: S.optional(S.Boolean),
          Packaging: S.optional(S.String),
          Path: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectArtifactsDetails",
      });
    case 7:
      return S.Array(__S(118));
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Type: S.optional(S.String),
          Value: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails",
      });
    case 1:
      return S.Array(__S(120));
    case 2:
      return S.suspend(() =>
        S.Struct({ Credential: S.optional(S.String), CredentialProvider: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsCodeBuildProjectEnvironmentRegistryCredential",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Certificate: S.optional(S.String),
          EnvironmentVariables: S.optional(__S(121)),
          PrivilegedMode: S.optional(S.Boolean),
          ImagePullCredentialsType: S.optional(S.String),
          RegistryCredential: S.optional(__S(122)),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectEnvironment",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Location: S.optional(S.String),
          GitCloneDepth: S.optional(S.Number),
          InsecureSsl: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectSource",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.optional(S.String),
          Status: S.optional(S.String),
          StreamName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EncryptionDisabled: S.optional(S.Boolean),
          Location: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectLogsConfigS3LogsDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CloudWatchLogs: S.optional(__S(125)),
          S3Logs: S.optional(__S(126)),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectLogsConfigDetails",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VpcId: S.optional(S.String),
          Subnets: S.optional(__S(4)),
          SecurityGroupIds: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectVpcConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          EncryptionKey: S.optional(S.String),
          Artifacts: S.optional(__S(119)),
          Environment: S.optional(__S(123)),
          Name: S.optional(S.String),
          Source: S.optional(__S(124)),
          ServiceRole: S.optional(S.String),
          LogsConfig: S.optional(__S(127)),
          VpcConfig: S.optional(__S(128)),
          SecondaryArtifacts: S.optional(__S(119)),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectDetails",
      });
    case 2:
      return S.suspend(() => S.Struct({ ViewerProtocolPolicy: S.optional(S.String) })).annotate({
        identifier: "AwsCloudFrontDistributionCacheBehavior",
      });
    case 3:
      return S.Array(__S(130));
    case 4:
      return S.suspend(() => S.Struct({ Items: S.optional(__S(131)) })).annotate({
        identifier: "AwsCloudFrontDistributionCacheBehaviors",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Bucket: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          IncludeCookies: S.optional(S.Boolean),
          Prefix: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionLogging",
      });
    case 6:
      return S.suspend(() => S.Struct({ OriginAccessIdentity: S.optional(S.String) })).annotate({
        identifier: "AwsCloudFrontDistributionOriginS3OriginConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(__S(4)), Quantity: S.optional(S.Number) }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionOriginSslProtocols",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          HttpPort: S.optional(S.Number),
          HttpsPort: S.optional(S.Number),
          OriginKeepaliveTimeout: S.optional(S.Number),
          OriginProtocolPolicy: S.optional(S.String),
          OriginReadTimeout: S.optional(S.Number),
          OriginSslProtocols: S.optional(__S(135)),
        }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionOriginCustomOriginConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.optional(S.String),
          Id: S.optional(S.String),
          OriginPath: S.optional(S.String),
          S3OriginConfig: S.optional(__S(134)),
          CustomOriginConfig: S.optional(__S(136)),
        }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionOriginItem",
      });
    case 2:
      return S.Array(__S(137));
    case 3:
      return S.suspend(() => S.Struct({ Items: S.optional(__S(138)) })).annotate({
        identifier: "AwsCloudFrontDistributionOrigins",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(__S(51)),
          Quantity: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionOriginGroupFailoverStatusCodes",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StatusCodes: S.optional(__S(140)),
        }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionOriginGroupFailover",
      });
    case 6:
      return S.suspend(() => S.Struct({ FailoverCriteria: S.optional(__S(141)) })).annotate({
        identifier: "AwsCloudFrontDistributionOriginGroup",
      });
    case 7:
      return S.Array(__S(142));
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Items: S.optional(__S(143)) })).annotate({
        identifier: "AwsCloudFrontDistributionOriginGroups",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AcmCertificateArn: S.optional(S.String),
          Certificate: S.optional(S.String),
          CertificateSource: S.optional(S.String),
          CloudFrontDefaultCertificate: S.optional(S.Boolean),
          IamCertificateId: S.optional(S.String),
          MinimumProtocolVersion: S.optional(S.String),
          SslSupportMethod: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionViewerCertificate",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CacheBehaviors: S.optional(__S(132)),
          DefaultCacheBehavior: S.optional(__S(130)),
          DefaultRootObject: S.optional(S.String),
          DomainName: S.optional(S.String),
          ETag: S.optional(S.String),
          LastModifiedTime: S.optional(S.String),
          Logging: S.optional(__S(133)),
          Origins: S.optional(__S(139)),
          OriginGroups: S.optional(__S(144)),
          ViewerCertificate: S.optional(__S(145)),
          Status: S.optional(S.String),
          WebAclId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionDetails",
      });
    case 3:
      return S.suspend(() => S.Struct({ NetworkInterfaceId: S.optional(S.String) })).annotate({
        identifier: "AwsEc2InstanceNetworkInterfacesDetails",
      });
    case 4:
      return S.Array(__S(147));
    case 5:
      return S.suspend(() =>
        S.Struct({
          HttpEndpoint: S.optional(S.String),
          HttpProtocolIpv6: S.optional(S.String),
          HttpPutResponseHopLimit: S.optional(S.Number),
          HttpTokens: S.optional(S.String),
          InstanceMetadataTags: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2InstanceMetadataOptions",
      });
    case 6:
      return S.suspend(() => S.Struct({ State: S.optional(S.String) })).annotate({
        identifier: "AwsEc2InstanceMonitoringDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          ImageId: S.optional(S.String),
          IpV4Addresses: S.optional(__S(4)),
          IpV6Addresses: S.optional(__S(4)),
          KeyName: S.optional(S.String),
          IamInstanceProfileArn: S.optional(S.String),
          VpcId: S.optional(S.String),
          SubnetId: S.optional(S.String),
          LaunchedAt: S.optional(S.String),
          NetworkInterfaces: S.optional(__S(148)),
          VirtualizationType: S.optional(S.String),
          MetadataOptions: S.optional(__S(149)),
          Monitoring: S.optional(__S(150)),
        }),
      ).annotate({ identifier: "AwsEc2InstanceDetails" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AttachTime: S.optional(S.String),
          AttachmentId: S.optional(S.String),
          DeleteOnTermination: S.optional(S.Boolean),
          DeviceIndex: S.optional(S.Number),
          InstanceId: S.optional(S.String),
          InstanceOwnerId: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2NetworkInterfaceAttachment",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ GroupName: S.optional(S.String), GroupId: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2NetworkInterfaceSecurityGroup",
      });
    case 2:
      return S.Array(__S(153));
    case 3:
      return S.suspend(() => S.Struct({ IpV6Address: S.optional(S.String) })).annotate({
        identifier: "AwsEc2NetworkInterfaceIpV6AddressDetail",
      });
    case 4:
      return S.Array(__S(155));
    case 5:
      return S.suspend(() =>
        S.Struct({ PrivateIpAddress: S.optional(S.String), PrivateDnsName: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2NetworkInterfacePrivateIpAddressDetail",
      });
    case 6:
      return S.Array(__S(157));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Attachment: S.optional(__S(152)),
          NetworkInterfaceId: S.optional(S.String),
          SecurityGroups: S.optional(__S(154)),
          SourceDestCheck: S.optional(S.Boolean),
          IpV6Addresses: S.optional(__S(156)),
          PrivateIpAddresses: S.optional(__S(158)),
          PublicDnsName: S.optional(S.String),
          PublicIp: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2NetworkInterfaceDetails",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GroupId: S.optional(S.String),
          GroupName: S.optional(S.String),
          PeeringStatus: S.optional(S.String),
          UserId: S.optional(S.String),
          VpcId: S.optional(S.String),
          VpcPeeringConnectionId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2SecurityGroupUserIdGroupPair",
      });
    case 1:
      return S.Array(__S(160));
    case 2:
      return S.suspend(() => S.Struct({ CidrIp: S.optional(S.String) })).annotate({
        identifier: "AwsEc2SecurityGroupIpRange",
      });
    case 3:
      return S.Array(__S(162));
    case 4:
      return S.suspend(() => S.Struct({ CidrIpv6: S.optional(S.String) })).annotate({
        identifier: "AwsEc2SecurityGroupIpv6Range",
      });
    case 5:
      return S.Array(__S(164));
    case 6:
      return S.suspend(() => S.Struct({ PrefixListId: S.optional(S.String) })).annotate({
        identifier: "AwsEc2SecurityGroupPrefixListId",
      });
    case 7:
      return S.Array(__S(166));
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          IpProtocol: S.optional(S.String),
          FromPort: S.optional(S.Number),
          ToPort: S.optional(S.Number),
          UserIdGroupPairs: S.optional(__S(161)),
          IpRanges: S.optional(__S(163)),
          Ipv6Ranges: S.optional(__S(165)),
          PrefixListIds: S.optional(__S(167)),
        }),
      ).annotate({
        identifier: "AwsEc2SecurityGroupIpPermission",
      });
    case 1:
      return S.Array(__S(168));
    case 2:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.optional(S.String),
          GroupId: S.optional(S.String),
          OwnerId: S.optional(S.String),
          VpcId: S.optional(S.String),
          IpPermissions: S.optional(__S(169)),
          IpPermissionsEgress: S.optional(__S(169)),
        }),
      ).annotate({
        identifier: "AwsEc2SecurityGroupDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AttachTime: S.optional(S.String),
          DeleteOnTermination: S.optional(S.Boolean),
          InstanceId: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEc2VolumeAttachment" });
    case 4:
      return S.Array(__S(171));
    case 5:
      return S.suspend(() =>
        S.Struct({
          CreateTime: S.optional(S.String),
          DeviceName: S.optional(S.String),
          Encrypted: S.optional(S.Boolean),
          Size: S.optional(S.Number),
          SnapshotId: S.optional(S.String),
          Status: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          Attachments: S.optional(__S(172)),
          VolumeId: S.optional(S.String),
          VolumeType: S.optional(S.String),
          VolumeScanStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEc2VolumeDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AssociationId: S.optional(S.String),
          CidrBlock: S.optional(S.String),
          CidrBlockState: S.optional(S.String),
        }),
      ).annotate({ identifier: "CidrBlockAssociation" });
    case 7:
      return S.Array(__S(174));
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AssociationId: S.optional(S.String),
          Ipv6CidrBlock: S.optional(S.String),
          CidrBlockState: S.optional(S.String),
        }),
      ).annotate({ identifier: "Ipv6CidrBlockAssociation" });
    case 1:
      return S.Array(__S(176));
    case 2:
      return S.suspend(() =>
        S.Struct({
          CidrBlockAssociationSet: S.optional(__S(175)),
          Ipv6CidrBlockAssociationSet: S.optional(__S(177)),
          DhcpOptionsId: S.optional(S.String),
          State: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEc2VpcDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          InstanceId: S.optional(S.String),
          PublicIp: S.optional(S.String),
          AllocationId: S.optional(S.String),
          AssociationId: S.optional(S.String),
          Domain: S.optional(S.String),
          PublicIpv4Pool: S.optional(S.String),
          NetworkBorderGroup: S.optional(S.String),
          NetworkInterfaceId: S.optional(S.String),
          NetworkInterfaceOwnerId: S.optional(S.String),
          PrivateIpAddress: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEc2EipDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AssignIpv6AddressOnCreation: S.optional(S.Boolean),
          AvailabilityZone: S.optional(S.String),
          AvailabilityZoneId: S.optional(S.String),
          AvailableIpAddressCount: S.optional(S.Number),
          CidrBlock: S.optional(S.String),
          DefaultForAz: S.optional(S.Boolean),
          MapPublicIpOnLaunch: S.optional(S.Boolean),
          OwnerId: S.optional(S.String),
          State: S.optional(S.String),
          SubnetArn: S.optional(S.String),
          SubnetId: S.optional(S.String),
          VpcId: S.optional(S.String),
          Ipv6CidrBlockAssociationSet: S.optional(__S(177)),
        }),
      ).annotate({ identifier: "AwsEc2SubnetDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NetworkAclAssociationId: S.optional(S.String),
          NetworkAclId: S.optional(S.String),
          SubnetId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2NetworkAclAssociation",
      });
    case 6:
      return S.Array(__S(181));
    case 7:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.Number), Type: S.optional(S.Number) }),
      ).annotate({ identifier: "IcmpTypeCode" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ From: S.optional(S.Number), To: S.optional(S.Number) }),
      ).annotate({ identifier: "PortRangeFromTo" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CidrBlock: S.optional(S.String),
          Egress: S.optional(S.Boolean),
          IcmpTypeCode: S.optional(__S(183)),
          Ipv6CidrBlock: S.optional(S.String),
          PortRange: S.optional(__S(184)),
          Protocol: S.optional(S.String),
          RuleAction: S.optional(S.String),
          RuleNumber: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AwsEc2NetworkAclEntry" });
    case 2:
      return S.Array(__S(185));
    case 3:
      return S.suspend(() =>
        S.Struct({
          IsDefault: S.optional(S.Boolean),
          NetworkAclId: S.optional(S.String),
          OwnerId: S.optional(S.String),
          VpcId: S.optional(S.String),
          Associations: S.optional(__S(182)),
          Entries: S.optional(__S(186)),
        }),
      ).annotate({ identifier: "AwsEc2NetworkAclDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ZoneName: S.optional(S.String), SubnetId: S.optional(S.String) }),
      ).annotate({ identifier: "AvailabilityZone" });
    case 5:
      return S.Array(__S(188));
    case 6:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsElbv2LoadBalancerAttribute",
      });
    case 7:
      return S.Array(__S(190));
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(__S(189)),
          CanonicalHostedZoneId: S.optional(S.String),
          CreatedTime: S.optional(S.String),
          DNSName: S.optional(S.String),
          IpAddressType: S.optional(S.String),
          Scheme: S.optional(S.String),
          SecurityGroups: S.optional(__S(4)),
          State: S.optional(__S(89)),
          Type: S.optional(S.String),
          VpcId: S.optional(S.String),
          LoadBalancerAttributes: S.optional(__S(191)),
        }),
      ).annotate({
        identifier: "AwsElbv2LoadBalancerDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ EnvironmentName: S.optional(S.String), LinkName: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsElasticBeanstalkEnvironmentEnvironmentLink",
      });
    case 2:
      return S.Array(__S(193));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Namespace: S.optional(S.String),
          OptionName: S.optional(S.String),
          ResourceName: S.optional(S.String),
          Value: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElasticBeanstalkEnvironmentOptionSetting",
      });
    case 4:
      return S.Array(__S(195));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Type: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElasticBeanstalkEnvironmentTier",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.optional(S.String),
          Cname: S.optional(S.String),
          DateCreated: S.optional(S.String),
          DateUpdated: S.optional(S.String),
          Description: S.optional(S.String),
          EndpointUrl: S.optional(S.String),
          EnvironmentArn: S.optional(S.String),
          EnvironmentId: S.optional(S.String),
          EnvironmentLinks: S.optional(__S(194)),
          EnvironmentName: S.optional(S.String),
          OptionSettings: S.optional(__S(196)),
          PlatformArn: S.optional(S.String),
          SolutionStackName: S.optional(S.String),
          Status: S.optional(S.String),
          Tier: S.optional(__S(197)),
          VersionLabel: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElasticBeanstalkEnvironmentDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ EnforceHTTPS: S.optional(S.Boolean), TLSSecurityPolicy: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsElasticsearchDomainDomainEndpointOptions",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ AvailabilityZoneCount: S.optional(S.Number) })).annotate({
        identifier: "AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DedicatedMasterCount: S.optional(S.Number),
          DedicatedMasterEnabled: S.optional(S.Boolean),
          DedicatedMasterType: S.optional(S.String),
          InstanceCount: S.optional(S.Number),
          InstanceType: S.optional(S.String),
          ZoneAwarenessConfig: S.optional(__S(200)),
          ZoneAwarenessEnabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsElasticsearchDomainElasticsearchClusterConfigDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), KmsKeyId: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsElasticsearchDomainEncryptionAtRestOptions",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CloudWatchLogsLogGroupArn: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsElasticsearchDomainLogPublishingOptionsLogConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          IndexSlowLogs: S.optional(__S(203)),
          SearchSlowLogs: S.optional(__S(203)),
          AuditLogs: S.optional(__S(203)),
        }),
      ).annotate({
        identifier: "AwsElasticsearchDomainLogPublishingOptions",
      });
    case 5:
      return S.suspend(() => S.Struct({ Enabled: S.optional(S.Boolean) })).annotate({
        identifier: "AwsElasticsearchDomainNodeToNodeEncryptionOptions",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AutomatedUpdateDate: S.optional(S.String),
          Cancellable: S.optional(S.Boolean),
          CurrentVersion: S.optional(S.String),
          Description: S.optional(S.String),
          NewVersion: S.optional(S.String),
          UpdateAvailable: S.optional(S.Boolean),
          UpdateStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElasticsearchDomainServiceSoftwareOptions",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(__S(4)),
          SecurityGroupIds: S.optional(__S(4)),
          SubnetIds: S.optional(__S(4)),
          VPCId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElasticsearchDomainVPCOptions",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccessPolicies: S.optional(S.String),
          DomainEndpointOptions: S.optional(__S(199)),
          DomainId: S.optional(S.String),
          DomainName: S.optional(S.String),
          Endpoint: S.optional(S.String),
          Endpoints: S.optional(__S(31)),
          ElasticsearchVersion: S.optional(S.String),
          ElasticsearchClusterConfig: S.optional(__S(201)),
          EncryptionAtRestOptions: S.optional(__S(202)),
          LogPublishingOptions: S.optional(__S(204)),
          NodeToNodeEncryptionOptions: S.optional(__S(205)),
          ServiceSoftwareOptions: S.optional(__S(206)),
          VPCOptions: S.optional(__S(207)),
        }),
      ).annotate({
        identifier: "AwsElasticsearchDomainDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ SSEAlgorithm: S.optional(S.String), KMSMasterKeyID: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsS3BucketServerSideEncryptionByDefault",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplyServerSideEncryptionByDefault: S.optional(__S(209)),
        }),
      ).annotate({
        identifier: "AwsS3BucketServerSideEncryptionRule",
      });
    case 3:
      return S.Array(__S(210));
    case 4:
      return S.suspend(() => S.Struct({ Rules: S.optional(__S(211)) })).annotate({
        identifier: "AwsS3BucketServerSideEncryptionConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ DaysAfterInitiation: S.optional(S.Number) })).annotate({
        identifier:
          "AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Prefix: S.optional(S.String),
          Tag: S.optional(__S(214)),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(215));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Operands: S.optional(__S(216)),
          Prefix: S.optional(S.String),
          Tag: S.optional(__S(214)),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Predicate: S.optional(__S(217)),
        }),
      ).annotate({
        identifier: "AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Days: S.optional(S.Number), StorageClass: S.optional(S.String) }),
      ).annotate({
        identifier:
          "AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails",
      });
    case 4:
      return S.Array(__S(219));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Date: S.optional(S.String),
          Days: S.optional(S.Number),
          StorageClass: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails",
      });
    case 6:
      return S.Array(__S(221));
    case 7:
      return S.suspend(() =>
        S.Struct({
          AbortIncompleteMultipartUpload: S.optional(__S(213)),
          ExpirationDate: S.optional(S.String),
          ExpirationInDays: S.optional(S.Number),
          ExpiredObjectDeleteMarker: S.optional(S.Boolean),
          Filter: S.optional(__S(218)),
          ID: S.optional(S.String),
          NoncurrentVersionExpirationInDays: S.optional(S.Number),
          NoncurrentVersionTransitions: S.optional(__S(220)),
          Prefix: S.optional(S.String),
          Status: S.optional(S.String),
          Transitions: S.optional(__S(222)),
        }),
      ).annotate({
        identifier: "AwsS3BucketBucketLifecycleConfigurationRulesDetails",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(223));
    case 1:
      return S.suspend(() => S.Struct({ Rules: S.optional(__S(224)) })).annotate({
        identifier: "AwsS3BucketBucketLifecycleConfigurationDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          BlockPublicAcls: S.optional(S.Boolean),
          BlockPublicPolicy: S.optional(S.Boolean),
          IgnorePublicAcls: S.optional(S.Boolean),
          RestrictPublicBuckets: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsS3AccountPublicAccessBlockDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DestinationBucketName: S.optional(S.String),
          LogFilePrefix: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsS3BucketLoggingConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Hostname: S.optional(S.String), Protocol: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsS3BucketWebsiteConfigurationRedirectTo",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          HttpErrorCodeReturnedEquals: S.optional(S.String),
          KeyPrefixEquals: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsS3BucketWebsiteConfigurationRoutingRuleCondition",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Hostname: S.optional(S.String),
          HttpRedirectCode: S.optional(S.String),
          Protocol: S.optional(S.String),
          ReplaceKeyPrefixWith: S.optional(S.String),
          ReplaceKeyWith: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsS3BucketWebsiteConfigurationRoutingRuleRedirect",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Condition: S.optional(__S(229)),
          Redirect: S.optional(__S(230)),
        }),
      ).annotate({
        identifier: "AwsS3BucketWebsiteConfigurationRoutingRule",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(231));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ErrorDocument: S.optional(S.String),
          IndexDocumentSuffix: S.optional(S.String),
          RedirectAllRequestsTo: S.optional(__S(228)),
          RoutingRules: S.optional(__S(232)),
        }),
      ).annotate({
        identifier: "AwsS3BucketWebsiteConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Value: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsS3BucketNotificationConfigurationS3KeyFilterRule",
      });
    case 3:
      return S.Array(__S(234));
    case 4:
      return S.suspend(() => S.Struct({ FilterRules: S.optional(__S(235)) })).annotate({
        identifier: "AwsS3BucketNotificationConfigurationS3KeyFilter",
      });
    case 5:
      return S.suspend(() => S.Struct({ S3KeyFilter: S.optional(__S(236)) })).annotate({
        identifier: "AwsS3BucketNotificationConfigurationFilter",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Events: S.optional(__S(4)),
          Filter: S.optional(__S(237)),
          Destination: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsS3BucketNotificationConfigurationDetail",
      });
    case 7:
      return S.Array(__S(238));
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Configurations: S.optional(__S(239)) })).annotate({
        identifier: "AwsS3BucketNotificationConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ IsMfaDeleteEnabled: S.optional(S.Boolean), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsS3BucketBucketVersioningConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Days: S.optional(S.Number),
          Mode: S.optional(S.String),
          Years: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DefaultRetention: S.optional(__S(242)),
        }),
      ).annotate({
        identifier: "AwsS3BucketObjectLockConfigurationRuleDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ObjectLockEnabled: S.optional(S.String),
          Rule: S.optional(__S(243)),
        }),
      ).annotate({
        identifier: "AwsS3BucketObjectLockConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OwnerId: S.optional(S.String),
          OwnerName: S.optional(S.String),
          OwnerAccountId: S.optional(S.String),
          CreatedAt: S.optional(S.String),
          ServerSideEncryptionConfiguration: S.optional(__S(212)),
          BucketLifecycleConfiguration: S.optional(__S(225)),
          PublicAccessBlockConfiguration: S.optional(__S(226)),
          AccessControlList: S.optional(S.String),
          BucketLoggingConfiguration: S.optional(__S(227)),
          BucketWebsiteConfiguration: S.optional(__S(233)),
          BucketNotificationConfiguration: S.optional(__S(240)),
          BucketVersioningConfiguration: S.optional(__S(241)),
          ObjectLockConfiguration: S.optional(__S(244)),
          Name: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsS3BucketDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LastModified: S.optional(S.String),
          ETag: S.optional(S.String),
          VersionId: S.optional(S.String),
          ContentType: S.optional(S.String),
          ServerSideEncryption: S.optional(S.String),
          SSEKMSKeyId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsS3ObjectDetails" });
    case 7:
      return S.suspend(() => S.Struct({ AutomaticallyAfterDays: S.optional(S.Number) })).annotate({
        identifier: "AwsSecretsManagerSecretRotationRules",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RotationRules: S.optional(__S(247)),
          RotationOccurredWithinFrequency: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          RotationEnabled: S.optional(S.Boolean),
          RotationLambdaArn: S.optional(S.String),
          Deleted: S.optional(S.Boolean),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsSecretsManagerSecretDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ MfaAuthenticated: S.optional(S.Boolean), CreationDate: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsIamAccessKeySessionContextAttributes",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          PrincipalId: S.optional(S.String),
          Arn: S.optional(S.String),
          AccountId: S.optional(S.String),
          UserName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsIamAccessKeySessionContextSessionIssuer",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Attributes: S.optional(__S(249)),
          SessionIssuer: S.optional(__S(250)),
        }),
      ).annotate({
        identifier: "AwsIamAccessKeySessionContext",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(S.String),
          Status: S.optional(S.String),
          CreatedAt: S.optional(S.String),
          PrincipalId: S.optional(S.String),
          PrincipalType: S.optional(S.String),
          PrincipalName: S.optional(S.String),
          AccountId: S.optional(S.String),
          AccessKeyId: S.optional(S.String),
          SessionContext: S.optional(__S(251)),
        }),
      ).annotate({ identifier: "AwsIamAccessKeyDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({ PolicyName: S.optional(S.String), PolicyArn: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsIamAttachedManagedPolicy",
      });
    case 6:
      return S.Array(__S(253));
    case 7:
      return S.suspend(() =>
        S.Struct({
          PermissionsBoundaryArn: S.optional(S.String),
          PermissionsBoundaryType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsIamPermissionsBoundary",
      });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ PolicyName: S.optional(S.String) })).annotate({
        identifier: "AwsIamUserPolicy",
      });
    case 1:
      return S.Array(__S(256));
    case 2:
      return S.suspend(() =>
        S.Struct({
          AttachedManagedPolicies: S.optional(__S(254)),
          CreateDate: S.optional(S.String),
          GroupList: S.optional(__S(4)),
          Path: S.optional(S.String),
          PermissionsBoundary: S.optional(__S(255)),
          UserId: S.optional(S.String),
          UserName: S.optional(S.String),
          UserPolicyList: S.optional(__S(257)),
        }),
      ).annotate({ identifier: "AwsIamUserDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          VersionId: S.optional(S.String),
          IsDefaultVersion: S.optional(S.Boolean),
          CreateDate: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsIamPolicyVersion" });
    case 4:
      return S.Array(__S(259));
    case 5:
      return S.suspend(() =>
        S.Struct({
          AttachmentCount: S.optional(S.Number),
          CreateDate: S.optional(S.String),
          DefaultVersionId: S.optional(S.String),
          Description: S.optional(S.String),
          IsAttachable: S.optional(S.Boolean),
          Path: S.optional(S.String),
          PermissionsBoundaryUsageCount: S.optional(S.Number),
          PolicyId: S.optional(S.String),
          PolicyName: S.optional(S.String),
          PolicyVersionList: S.optional(__S(260)),
          UpdateDate: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsIamPolicyDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DetailedMetricsEnabled: S.optional(S.Boolean),
          LoggingLevel: S.optional(S.String),
          DataTraceEnabled: S.optional(S.Boolean),
          ThrottlingBurstLimit: S.optional(S.Number),
          ThrottlingRateLimit: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsApiGatewayV2RouteSettings",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Format: S.optional(S.String), DestinationArn: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsApiGatewayAccessLogSettings",
      });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClientCertificateId: S.optional(S.String),
          CreatedDate: S.optional(S.String),
          Description: S.optional(S.String),
          DefaultRouteSettings: S.optional(__S(262)),
          DeploymentId: S.optional(S.String),
          LastUpdatedDate: S.optional(S.String),
          RouteSettings: S.optional(__S(262)),
          StageName: S.optional(S.String),
          StageVariables: S.optional(__S(31)),
          AccessLogSettings: S.optional(__S(263)),
          AutoDeploy: S.optional(S.Boolean),
          LastDeploymentStatusMessage: S.optional(S.String),
          ApiGatewayManaged: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsApiGatewayV2StageDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AllowOrigins: S.optional(__S(4)),
          AllowCredentials: S.optional(S.Boolean),
          ExposeHeaders: S.optional(__S(4)),
          MaxAge: S.optional(S.Number),
          AllowMethods: S.optional(__S(4)),
          AllowHeaders: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "AwsCorsConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApiEndpoint: S.optional(S.String),
          ApiId: S.optional(S.String),
          ApiKeySelectionExpression: S.optional(S.String),
          CreatedDate: S.optional(S.String),
          Description: S.optional(S.String),
          Version: S.optional(S.String),
          Name: S.optional(S.String),
          ProtocolType: S.optional(S.String),
          RouteSelectionExpression: S.optional(S.String),
          CorsConfiguration: S.optional(__S(265)),
        }),
      ).annotate({
        identifier: "AwsApiGatewayV2ApiDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AttributeName: S.optional(S.String), AttributeType: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsDynamoDbTableAttributeDefinition",
      });
    case 4:
      return S.Array(__S(267));
    case 5:
      return S.suspend(() =>
        S.Struct({
          BillingMode: S.optional(S.String),
          LastUpdateToPayPerRequestDateTime: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsDynamoDbTableBillingModeSummary",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AttributeName: S.optional(S.String), KeyType: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsDynamoDbTableKeySchema",
      });
    case 7:
      return S.Array(__S(270));
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NonKeyAttributes: S.optional(__S(4)),
          ProjectionType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsDynamoDbTableProjection",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LastDecreaseDateTime: S.optional(S.String),
          LastIncreaseDateTime: S.optional(S.String),
          NumberOfDecreasesToday: S.optional(S.Number),
          ReadCapacityUnits: S.optional(S.Number),
          WriteCapacityUnits: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsDynamoDbTableProvisionedThroughput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Backfilling: S.optional(S.Boolean),
          IndexArn: S.optional(S.String),
          IndexName: S.optional(S.String),
          IndexSizeBytes: S.optional(S.Number),
          IndexStatus: S.optional(S.String),
          ItemCount: S.optional(S.Number),
          KeySchema: S.optional(__S(271)),
          Projection: S.optional(__S(272)),
          ProvisionedThroughput: S.optional(__S(273)),
        }),
      ).annotate({
        identifier: "AwsDynamoDbTableGlobalSecondaryIndex",
      });
    case 3:
      return S.Array(__S(274));
    case 4:
      return S.suspend(() =>
        S.Struct({
          IndexArn: S.optional(S.String),
          IndexName: S.optional(S.String),
          KeySchema: S.optional(__S(271)),
          Projection: S.optional(__S(272)),
        }),
      ).annotate({
        identifier: "AwsDynamoDbTableLocalSecondaryIndex",
      });
    case 5:
      return S.Array(__S(276));
    case 6:
      return S.suspend(() => S.Struct({ ReadCapacityUnits: S.optional(S.Number) })).annotate({
        identifier: "AwsDynamoDbTableProvisionedThroughputOverride",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          IndexName: S.optional(S.String),
          ProvisionedThroughputOverride: S.optional(__S(278)),
        }),
      ).annotate({
        identifier: "AwsDynamoDbTableReplicaGlobalSecondaryIndex",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(279));
    case 1:
      return S.suspend(() =>
        S.Struct({
          GlobalSecondaryIndexes: S.optional(__S(280)),
          KmsMasterKeyId: S.optional(S.String),
          ProvisionedThroughputOverride: S.optional(__S(278)),
          RegionName: S.optional(S.String),
          ReplicaStatus: S.optional(S.String),
          ReplicaStatusDescription: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsDynamoDbTableReplica" });
    case 2:
      return S.Array(__S(281));
    case 3:
      return S.suspend(() =>
        S.Struct({
          SourceBackupArn: S.optional(S.String),
          SourceTableArn: S.optional(S.String),
          RestoreDateTime: S.optional(S.String),
          RestoreInProgress: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsDynamoDbTableRestoreSummary",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          InaccessibleEncryptionDateTime: S.optional(S.String),
          Status: S.optional(S.String),
          SseType: S.optional(S.String),
          KmsMasterKeyArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsDynamoDbTableSseDescription",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ StreamEnabled: S.optional(S.Boolean), StreamViewType: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsDynamoDbTableStreamSpecification",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AttributeDefinitions: S.optional(__S(268)),
          BillingModeSummary: S.optional(__S(269)),
          CreationDateTime: S.optional(S.String),
          GlobalSecondaryIndexes: S.optional(__S(275)),
          GlobalTableVersion: S.optional(S.String),
          ItemCount: S.optional(S.Number),
          KeySchema: S.optional(__S(271)),
          LatestStreamArn: S.optional(S.String),
          LatestStreamLabel: S.optional(S.String),
          LocalSecondaryIndexes: S.optional(__S(277)),
          ProvisionedThroughput: S.optional(__S(273)),
          Replicas: S.optional(__S(282)),
          RestoreSummary: S.optional(__S(283)),
          SseDescription: S.optional(__S(284)),
          StreamSpecification: S.optional(__S(285)),
          TableId: S.optional(S.String),
          TableName: S.optional(S.String),
          TableSizeBytes: S.optional(S.Number),
          TableStatus: S.optional(S.String),
          DeletionProtectionEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AwsDynamoDbTableDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MetricsEnabled: S.optional(S.Boolean),
          LoggingLevel: S.optional(S.String),
          DataTraceEnabled: S.optional(S.Boolean),
          ThrottlingBurstLimit: S.optional(S.Number),
          ThrottlingRateLimit: S.optional(S.Number),
          CachingEnabled: S.optional(S.Boolean),
          CacheTtlInSeconds: S.optional(S.Number),
          CacheDataEncrypted: S.optional(S.Boolean),
          RequireAuthorizationForCacheControl: S.optional(S.Boolean),
          UnauthorizedCacheControlHeaderStrategy: S.optional(S.String),
          HttpMethod: S.optional(S.String),
          ResourcePath: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsApiGatewayMethodSettings",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(287));
    case 1:
      return S.suspend(() =>
        S.Struct({
          PercentTraffic: S.optional(S.Number),
          DeploymentId: S.optional(S.String),
          StageVariableOverrides: S.optional(__S(31)),
          UseStageCache: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsApiGatewayCanarySettings",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DeploymentId: S.optional(S.String),
          ClientCertificateId: S.optional(S.String),
          StageName: S.optional(S.String),
          Description: S.optional(S.String),
          CacheClusterEnabled: S.optional(S.Boolean),
          CacheClusterSize: S.optional(S.String),
          CacheClusterStatus: S.optional(S.String),
          MethodSettings: S.optional(__S(288)),
          Variables: S.optional(__S(31)),
          DocumentationVersion: S.optional(S.String),
          AccessLogSettings: S.optional(__S(263)),
          CanarySettings: S.optional(__S(289)),
          TracingEnabled: S.optional(S.Boolean),
          CreatedDate: S.optional(S.String),
          LastUpdatedDate: S.optional(S.String),
          WebAclArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsApiGatewayStageDetails",
      });
    case 3:
      return S.suspend(() => S.Struct({ Types: S.optional(__S(4)) })).annotate({
        identifier: "AwsApiGatewayEndpointConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          CreatedDate: S.optional(S.String),
          Version: S.optional(S.String),
          BinaryMediaTypes: S.optional(__S(4)),
          MinimumCompressionSize: S.optional(S.Number),
          ApiKeySource: S.optional(S.String),
          EndpointConfiguration: S.optional(__S(291)),
        }),
      ).annotate({
        identifier: "AwsApiGatewayRestApiDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CloudWatchLogsLogGroupArn: S.optional(S.String),
          CloudWatchLogsRoleArn: S.optional(S.String),
          HasCustomEventSelectors: S.optional(S.Boolean),
          HomeRegion: S.optional(S.String),
          IncludeGlobalServiceEvents: S.optional(S.Boolean),
          IsMultiRegionTrail: S.optional(S.Boolean),
          IsOrganizationTrail: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          LogFileValidationEnabled: S.optional(S.Boolean),
          Name: S.optional(S.String),
          S3BucketName: S.optional(S.String),
          S3KeyPrefix: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          SnsTopicName: S.optional(S.String),
          TrailArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCloudTrailTrailDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          CompliantCriticalCount: S.optional(S.Number),
          CompliantHighCount: S.optional(S.Number),
          CompliantMediumCount: S.optional(S.Number),
          ExecutionType: S.optional(S.String),
          NonCompliantCriticalCount: S.optional(S.Number),
          CompliantInformationalCount: S.optional(S.Number),
          NonCompliantInformationalCount: S.optional(S.Number),
          CompliantUnspecifiedCount: S.optional(S.Number),
          NonCompliantLowCount: S.optional(S.Number),
          NonCompliantHighCount: S.optional(S.Number),
          CompliantLowCount: S.optional(S.Number),
          ComplianceType: S.optional(S.String),
          PatchBaselineId: S.optional(S.String),
          OverallSeverity: S.optional(S.String),
          NonCompliantMediumCount: S.optional(S.Number),
          NonCompliantUnspecifiedCount: S.optional(S.Number),
          PatchGroup: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsSsmComplianceSummary" });
    case 7:
      return S.suspend(() => S.Struct({ ComplianceSummary: S.optional(__S(294)) })).annotate({
        identifier: "AwsSsmPatch",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Patch: S.optional(__S(295)) })).annotate({
        identifier: "AwsSsmPatchComplianceDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Type: S.optional(S.String),
          Value: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCertificateManagerCertificateResourceRecord",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.optional(S.String),
          ResourceRecord: S.optional(__S(297)),
          ValidationDomain: S.optional(S.String),
          ValidationEmails: S.optional(__S(4)),
          ValidationMethod: S.optional(S.String),
          ValidationStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCertificateManagerCertificateDomainValidationOption",
      });
    case 3:
      return S.Array(__S(298));
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), OId: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsCertificateManagerCertificateExtendedKeyUsage",
      });
    case 5:
      return S.Array(__S(300));
    case 6:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "AwsCertificateManagerCertificateKeyUsage",
      });
    case 7:
      return S.Array(__S(302));
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ CertificateTransparencyLoggingPreference: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsCertificateManagerCertificateOptions",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainValidationOptions: S.optional(__S(299)),
          RenewalStatus: S.optional(S.String),
          RenewalStatusReason: S.optional(S.String),
          UpdatedAt: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCertificateManagerCertificateRenewalSummary",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CertificateAuthorityArn: S.optional(S.String),
          CreatedAt: S.optional(S.String),
          DomainName: S.optional(S.String),
          DomainValidationOptions: S.optional(__S(299)),
          ExtendedKeyUsages: S.optional(__S(301)),
          FailureReason: S.optional(S.String),
          ImportedAt: S.optional(S.String),
          InUseBy: S.optional(__S(4)),
          IssuedAt: S.optional(S.String),
          Issuer: S.optional(S.String),
          KeyAlgorithm: S.optional(S.String),
          KeyUsages: S.optional(__S(303)),
          NotAfter: S.optional(S.String),
          NotBefore: S.optional(S.String),
          Options: S.optional(__S(304)),
          RenewalEligibility: S.optional(S.String),
          RenewalSummary: S.optional(__S(305)),
          Serial: S.optional(S.String),
          SignatureAlgorithm: S.optional(S.String),
          Status: S.optional(S.String),
          Subject: S.optional(S.String),
          SubjectAlternativeNames: S.optional(__S(4)),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCertificateManagerCertificateDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NodeRole: S.optional(S.String),
          PrivateIpAddress: S.optional(S.String),
          PublicIpAddress: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterClusterNode",
      });
    case 4:
      return S.Array(__S(307));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ParameterName: S.optional(S.String),
          ParameterApplyStatus: S.optional(S.String),
          ParameterApplyErrorDescription: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterClusterParameterStatus",
      });
    case 6:
      return S.Array(__S(309));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClusterParameterStatusList: S.optional(__S(310)),
          ParameterApplyStatus: S.optional(S.String),
          ParameterGroupName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterClusterParameterGroup",
      });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(311));
    case 1:
      return S.suspend(() =>
        S.Struct({ ClusterSecurityGroupName: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRedshiftClusterClusterSecurityGroup",
      });
    case 2:
      return S.Array(__S(313));
    case 3:
      return S.suspend(() =>
        S.Struct({
          DestinationRegion: S.optional(S.String),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
          RetentionPeriod: S.optional(S.Number),
          SnapshotCopyGrantName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterClusterSnapshotCopyStatus",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DeferMaintenanceEndTime: S.optional(S.String),
          DeferMaintenanceIdentifier: S.optional(S.String),
          DeferMaintenanceStartTime: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterDeferredMaintenanceWindow",
      });
    case 5:
      return S.Array(__S(316));
    case 6:
      return S.suspend(() =>
        S.Struct({ ElasticIp: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRedshiftClusterElasticIpStatus",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Address: S.optional(S.String), Port: S.optional(S.Number) }),
      ).annotate({
        identifier: "AwsRedshiftClusterEndpoint",
      });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          HsmClientCertificateIdentifier: S.optional(S.String),
          HsmConfigurationIdentifier: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterHsmStatus",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ApplyStatus: S.optional(S.String), IamRoleArn: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRedshiftClusterIamRole",
      });
    case 2:
      return S.Array(__S(321));
    case 3:
      return S.suspend(() =>
        S.Struct({
          AutomatedSnapshotRetentionPeriod: S.optional(S.Number),
          ClusterIdentifier: S.optional(S.String),
          ClusterType: S.optional(S.String),
          ClusterVersion: S.optional(S.String),
          EncryptionType: S.optional(S.String),
          EnhancedVpcRouting: S.optional(S.Boolean),
          MaintenanceTrackName: S.optional(S.String),
          MasterUserPassword: S.optional(S.String),
          NodeType: S.optional(S.String),
          NumberOfNodes: S.optional(S.Number),
          PubliclyAccessible: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterPendingModifiedValues",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ AllowCancelResize: S.optional(S.Boolean), ResizeType: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRedshiftClusterResizeInfo",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CurrentRestoreRateInMegaBytesPerSecond: S.optional(S.Number),
          ElapsedTimeInSeconds: S.optional(S.Number),
          EstimatedTimeToCompletionInSeconds: S.optional(S.Number),
          ProgressInMegaBytes: S.optional(S.Number),
          SnapshotSizeInMegaBytes: S.optional(S.Number),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterRestoreStatus",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Status: S.optional(S.String), VpcSecurityGroupId: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRedshiftClusterVpcSecurityGroup",
      });
    case 7:
      return S.Array(__S(326));
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          BucketName: S.optional(S.String),
          LastFailureMessage: S.optional(S.String),
          LastFailureTime: S.optional(S.String),
          LastSuccessfulDeliveryTime: S.optional(S.String),
          LoggingEnabled: S.optional(S.Boolean),
          S3KeyPrefix: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterLoggingStatus",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AllowVersionUpgrade: S.optional(S.Boolean),
          AutomatedSnapshotRetentionPeriod: S.optional(S.Number),
          AvailabilityZone: S.optional(S.String),
          ClusterAvailabilityStatus: S.optional(S.String),
          ClusterCreateTime: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          ClusterNodes: S.optional(__S(308)),
          ClusterParameterGroups: S.optional(__S(312)),
          ClusterPublicKey: S.optional(S.String),
          ClusterRevisionNumber: S.optional(S.String),
          ClusterSecurityGroups: S.optional(__S(314)),
          ClusterSnapshotCopyStatus: S.optional(__S(315)),
          ClusterStatus: S.optional(S.String),
          ClusterSubnetGroupName: S.optional(S.String),
          ClusterVersion: S.optional(S.String),
          DBName: S.optional(S.String),
          DeferredMaintenanceWindows: S.optional(__S(317)),
          ElasticIpStatus: S.optional(__S(318)),
          ElasticResizeNumberOfNodeOptions: S.optional(S.String),
          Encrypted: S.optional(S.Boolean),
          Endpoint: S.optional(__S(319)),
          EnhancedVpcRouting: S.optional(S.Boolean),
          ExpectedNextSnapshotScheduleTime: S.optional(S.String),
          ExpectedNextSnapshotScheduleTimeStatus: S.optional(S.String),
          HsmStatus: S.optional(__S(320)),
          IamRoles: S.optional(__S(322)),
          KmsKeyId: S.optional(S.String),
          MaintenanceTrackName: S.optional(S.String),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
          MasterUsername: S.optional(S.String),
          NextMaintenanceWindowStartTime: S.optional(S.String),
          NodeType: S.optional(S.String),
          NumberOfNodes: S.optional(S.Number),
          PendingActions: S.optional(__S(4)),
          PendingModifiedValues: S.optional(__S(323)),
          PreferredMaintenanceWindow: S.optional(S.String),
          PubliclyAccessible: S.optional(S.Boolean),
          ResizeInfo: S.optional(__S(324)),
          RestoreStatus: S.optional(__S(325)),
          SnapshotScheduleIdentifier: S.optional(S.String),
          SnapshotScheduleState: S.optional(S.String),
          VpcId: S.optional(S.String),
          VpcSecurityGroups: S.optional(__S(327)),
          LoggingStatus: S.optional(__S(328)),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ InstancePort: S.optional(S.Number), PolicyNames: S.optional(__S(4)) }),
      ).annotate({
        identifier: "AwsElbLoadBalancerBackendServerDescription",
      });
    case 3:
      return S.Array(__S(330));
    case 4:
      return S.suspend(() =>
        S.Struct({
          HealthyThreshold: S.optional(S.Number),
          Interval: S.optional(S.Number),
          Target: S.optional(S.String),
          Timeout: S.optional(S.Number),
          UnhealthyThreshold: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsElbLoadBalancerHealthCheck",
      });
    case 5:
      return S.suspend(() => S.Struct({ InstanceId: S.optional(S.String) })).annotate({
        identifier: "AwsElbLoadBalancerInstance",
      });
    case 6:
      return S.Array(__S(333));
    case 7:
      return S.suspend(() =>
        S.Struct({
          InstancePort: S.optional(S.Number),
          InstanceProtocol: S.optional(S.String),
          LoadBalancerPort: S.optional(S.Number),
          Protocol: S.optional(S.String),
          SslCertificateId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElbLoadBalancerListener",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Listener: S.optional(__S(335)),
          PolicyNames: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "AwsElbLoadBalancerListenerDescription",
      });
    case 1:
      return S.Array(__S(336));
    case 2:
      return S.suspend(() =>
        S.Struct({
          EmitInterval: S.optional(S.Number),
          Enabled: S.optional(S.Boolean),
          S3BucketName: S.optional(S.String),
          S3BucketPrefix: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElbLoadBalancerAccessLog",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), Timeout: S.optional(S.Number) }),
      ).annotate({
        identifier: "AwsElbLoadBalancerConnectionDraining",
      });
    case 4:
      return S.suspend(() => S.Struct({ IdleTimeout: S.optional(S.Number) })).annotate({
        identifier: "AwsElbLoadBalancerConnectionSettings",
      });
    case 5:
      return S.Array(__S(190));
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccessLog: S.optional(__S(338)),
          ConnectionDraining: S.optional(__S(339)),
          ConnectionSettings: S.optional(__S(340)),
          CrossZoneLoadBalancing: S.optional(__S(205)),
          AdditionalAttributes: S.optional(__S(341)),
        }),
      ).annotate({
        identifier: "AwsElbLoadBalancerAttributes",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ CookieName: S.optional(S.String), PolicyName: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsElbAppCookieStickinessPolicy",
      });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(343));
    case 1:
      return S.suspend(() =>
        S.Struct({
          CookieExpirationPeriod: S.optional(S.Number),
          PolicyName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElbLbCookieStickinessPolicy",
      });
    case 2:
      return S.Array(__S(345));
    case 3:
      return S.suspend(() =>
        S.Struct({
          AppCookieStickinessPolicies: S.optional(__S(344)),
          LbCookieStickinessPolicies: S.optional(__S(346)),
          OtherPolicies: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "AwsElbLoadBalancerPolicies",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ GroupName: S.optional(S.String), OwnerAlias: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsElbLoadBalancerSourceSecurityGroup",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(__S(4)),
          BackendServerDescriptions: S.optional(__S(331)),
          CanonicalHostedZoneName: S.optional(S.String),
          CanonicalHostedZoneNameID: S.optional(S.String),
          CreatedTime: S.optional(S.String),
          DnsName: S.optional(S.String),
          HealthCheck: S.optional(__S(332)),
          Instances: S.optional(__S(334)),
          ListenerDescriptions: S.optional(__S(337)),
          LoadBalancerAttributes: S.optional(__S(342)),
          LoadBalancerName: S.optional(S.String),
          Policies: S.optional(__S(347)),
          Scheme: S.optional(S.String),
          SecurityGroups: S.optional(__S(4)),
          SourceSecurityGroup: S.optional(__S(348)),
          Subnets: S.optional(__S(4)),
          VpcId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElbLoadBalancerDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AttachedManagedPolicies: S.optional(__S(254)),
          CreateDate: S.optional(S.String),
          GroupId: S.optional(S.String),
          GroupName: S.optional(S.String),
          GroupPolicyList: S.optional(__S(257)),
          Path: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsIamGroupDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          AssumeRolePolicyDocument: S.optional(S.String),
          CreateDate: S.optional(S.String),
          Path: S.optional(S.String),
          RoleId: S.optional(S.String),
          RoleName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsIamInstanceProfileRole",
      });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(351));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          CreateDate: S.optional(S.String),
          InstanceProfileId: S.optional(S.String),
          InstanceProfileName: S.optional(S.String),
          Path: S.optional(S.String),
          Roles: S.optional(__S(352)),
        }),
      ).annotate({ identifier: "AwsIamInstanceProfile" });
    case 2:
      return S.Array(__S(353));
    case 3:
      return S.suspend(() =>
        S.Struct({
          AssumeRolePolicyDocument: S.optional(S.String),
          AttachedManagedPolicies: S.optional(__S(254)),
          CreateDate: S.optional(S.String),
          InstanceProfileList: S.optional(__S(354)),
          PermissionsBoundary: S.optional(__S(255)),
          RoleId: S.optional(S.String),
          RoleName: S.optional(S.String),
          RolePolicyList: S.optional(__S(257)),
          MaxSessionDuration: S.optional(S.Number),
          Path: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsIamRoleDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AWSAccountId: S.optional(S.String),
          CreationDate: S.optional(S.Number),
          KeyId: S.optional(S.String),
          KeyManager: S.optional(S.String),
          KeyState: S.optional(S.String),
          Origin: S.optional(S.String),
          Description: S.optional(S.String),
          KeyRotationStatus: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AwsKmsKeyDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          S3Bucket: S.optional(S.String),
          S3Key: S.optional(S.String),
          S3ObjectVersion: S.optional(S.String),
          ZipFile: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsLambdaFunctionCode" });
    case 6:
      return S.suspend(() => S.Struct({ TargetArn: S.optional(S.String) })).annotate({
        identifier: "AwsLambdaFunctionDeadLetterConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ErrorCode: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsLambdaFunctionEnvironmentError",
      });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Variables: S.optional(__S(31)),
          Error: S.optional(__S(359)),
        }),
      ).annotate({
        identifier: "AwsLambdaFunctionEnvironment",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), CodeSize: S.optional(S.Number) }),
      ).annotate({ identifier: "AwsLambdaFunctionLayer" });
    case 2:
      return S.Array(__S(361));
    case 3:
      return S.suspend(() => S.Struct({ Mode: S.optional(S.String) })).annotate({
        identifier: "AwsLambdaFunctionTracingConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SecurityGroupIds: S.optional(__S(4)),
          SubnetIds: S.optional(__S(4)),
          VpcId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsLambdaFunctionVpcConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Code: S.optional(__S(357)),
          CodeSha256: S.optional(S.String),
          DeadLetterConfig: S.optional(__S(358)),
          Environment: S.optional(__S(360)),
          FunctionName: S.optional(S.String),
          Handler: S.optional(S.String),
          KmsKeyArn: S.optional(S.String),
          LastModified: S.optional(S.String),
          Layers: S.optional(__S(362)),
          MasterArn: S.optional(S.String),
          MemorySize: S.optional(S.Number),
          RevisionId: S.optional(S.String),
          Role: S.optional(S.String),
          Runtime: S.optional(S.String),
          Timeout: S.optional(S.Number),
          TracingConfig: S.optional(__S(363)),
          VpcConfig: S.optional(__S(364)),
          Version: S.optional(S.String),
          Architectures: S.optional(__S(4)),
          PackageType: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsLambdaFunctionDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Version: S.optional(S.Number),
          CompatibleRuntimes: S.optional(__S(4)),
          CreatedDate: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsLambdaLayerVersionDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          RoleArn: S.optional(S.String),
          FeatureName: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRdsDbInstanceAssociatedRole",
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
          Address: S.optional(S.String),
          Port: S.optional(S.Number),
          HostedZoneId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsRdsDbInstanceEndpoint" });
    case 2:
      return S.suspend(() =>
        S.Struct({ VpcSecurityGroupId: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRdsDbInstanceVpcSecurityGroup",
      });
    case 3:
      return S.Array(__S(370));
    case 4:
      return S.suspend(() =>
        S.Struct({
          DbParameterGroupName: S.optional(S.String),
          ParameterApplyStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsRdsDbParameterGroup" });
    case 5:
      return S.Array(__S(372));
    case 6:
      return S.suspend(() =>
        S.Struct({
          SubnetIdentifier: S.optional(S.String),
          SubnetAvailabilityZone: S.optional(__S(302)),
          SubnetStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRdsDbSubnetGroupSubnet",
      });
    case 7:
      return S.Array(__S(374));
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DbSubnetGroupName: S.optional(S.String),
          DbSubnetGroupDescription: S.optional(S.String),
          VpcId: S.optional(S.String),
          SubnetGroupStatus: S.optional(S.String),
          Subnets: S.optional(__S(375)),
          DbSubnetGroupArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsRdsDbSubnetGroup" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LogTypesToEnable: S.optional(__S(4)),
          LogTypesToDisable: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "AwsRdsPendingCloudWatchLogsExports",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "AwsRdsDbProcessorFeature" });
    case 3:
      return S.Array(__S(378));
    case 4:
      return S.suspend(() =>
        S.Struct({
          DbInstanceClass: S.optional(S.String),
          AllocatedStorage: S.optional(S.Number),
          MasterUserPassword: S.optional(S.String),
          Port: S.optional(S.Number),
          BackupRetentionPeriod: S.optional(S.Number),
          MultiAZ: S.optional(S.Boolean),
          EngineVersion: S.optional(S.String),
          LicenseModel: S.optional(S.String),
          Iops: S.optional(S.Number),
          DbInstanceIdentifier: S.optional(S.String),
          StorageType: S.optional(S.String),
          CaCertificateIdentifier: S.optional(S.String),
          DbSubnetGroupName: S.optional(S.String),
          PendingCloudWatchLogsExports: S.optional(__S(377)),
          ProcessorFeatures: S.optional(__S(379)),
        }),
      ).annotate({
        identifier: "AwsRdsDbPendingModifiedValues",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ OptionGroupName: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRdsDbOptionGroupMembership",
      });
    case 6:
      return S.Array(__S(381));
    case 7:
      return S.suspend(() =>
        S.Struct({
          StatusType: S.optional(S.String),
          Normal: S.optional(S.Boolean),
          Status: S.optional(S.String),
          Message: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsRdsDbStatusInfo" });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(383));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Domain: S.optional(S.String),
          Status: S.optional(S.String),
          Fqdn: S.optional(S.String),
          IamRoleName: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsRdsDbDomainMembership" });
    case 2:
      return S.Array(__S(385));
    case 3:
      return S.suspend(() =>
        S.Struct({
          AssociatedRoles: S.optional(__S(368)),
          CACertificateIdentifier: S.optional(S.String),
          DBClusterIdentifier: S.optional(S.String),
          DBInstanceIdentifier: S.optional(S.String),
          DBInstanceClass: S.optional(S.String),
          DbInstancePort: S.optional(S.Number),
          DbiResourceId: S.optional(S.String),
          DBName: S.optional(S.String),
          DeletionProtection: S.optional(S.Boolean),
          Endpoint: S.optional(__S(369)),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          IAMDatabaseAuthenticationEnabled: S.optional(S.Boolean),
          InstanceCreateTime: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          PubliclyAccessible: S.optional(S.Boolean),
          StorageEncrypted: S.optional(S.Boolean),
          TdeCredentialArn: S.optional(S.String),
          VpcSecurityGroups: S.optional(__S(371)),
          MultiAz: S.optional(S.Boolean),
          EnhancedMonitoringResourceArn: S.optional(S.String),
          DbInstanceStatus: S.optional(S.String),
          MasterUsername: S.optional(S.String),
          AllocatedStorage: S.optional(S.Number),
          PreferredBackupWindow: S.optional(S.String),
          BackupRetentionPeriod: S.optional(S.Number),
          DbSecurityGroups: S.optional(__S(4)),
          DbParameterGroups: S.optional(__S(373)),
          AvailabilityZone: S.optional(S.String),
          DbSubnetGroup: S.optional(__S(376)),
          PreferredMaintenanceWindow: S.optional(S.String),
          PendingModifiedValues: S.optional(__S(380)),
          LatestRestorableTime: S.optional(S.String),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          ReadReplicaSourceDBInstanceIdentifier: S.optional(S.String),
          ReadReplicaDBInstanceIdentifiers: S.optional(__S(4)),
          ReadReplicaDBClusterIdentifiers: S.optional(__S(4)),
          LicenseModel: S.optional(S.String),
          Iops: S.optional(S.Number),
          OptionGroupMemberships: S.optional(__S(382)),
          CharacterSetName: S.optional(S.String),
          SecondaryAvailabilityZone: S.optional(S.String),
          StatusInfos: S.optional(__S(384)),
          StorageType: S.optional(S.String),
          DomainMemberships: S.optional(__S(386)),
          CopyTagsToSnapshot: S.optional(S.Boolean),
          MonitoringInterval: S.optional(S.Number),
          MonitoringRoleArn: S.optional(S.String),
          PromotionTier: S.optional(S.Number),
          Timezone: S.optional(S.String),
          PerformanceInsightsEnabled: S.optional(S.Boolean),
          PerformanceInsightsKmsKeyId: S.optional(S.String),
          PerformanceInsightsRetentionPeriod: S.optional(S.Number),
          EnabledCloudWatchLogsExports: S.optional(__S(4)),
          ProcessorFeatures: S.optional(__S(379)),
          ListenerEndpoint: S.optional(__S(369)),
          MaxAllocatedStorage: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AwsRdsDbInstanceDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Endpoint: S.optional(S.String), Protocol: S.optional(S.String) }),
      ).annotate({ identifier: "AwsSnsTopicSubscription" });
    case 5:
      return S.Array(__S(388));
    case 6:
      return S.suspend(() =>
        S.Struct({
          KmsMasterKeyId: S.optional(S.String),
          Subscription: S.optional(__S(389)),
          TopicName: S.optional(S.String),
          Owner: S.optional(S.String),
          SqsSuccessFeedbackRoleArn: S.optional(S.String),
          SqsFailureFeedbackRoleArn: S.optional(S.String),
          ApplicationSuccessFeedbackRoleArn: S.optional(S.String),
          FirehoseSuccessFeedbackRoleArn: S.optional(S.String),
          FirehoseFailureFeedbackRoleArn: S.optional(S.String),
          HttpSuccessFeedbackRoleArn: S.optional(S.String),
          HttpFailureFeedbackRoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsSnsTopicDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          KmsDataKeyReusePeriodSeconds: S.optional(S.Number),
          KmsMasterKeyId: S.optional(S.String),
          QueueName: S.optional(S.String),
          DeadLetterTargetArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsSqsQueueDetails" });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Type: S.optional(S.String) })).annotate({
        identifier: "WafAction",
      });
    case 1:
      return S.suspend(() => S.Struct({ RuleId: S.optional(S.String) })).annotate({
        identifier: "WafExcludedRule",
      });
    case 2:
      return S.Array(__S(393));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(__S(392)),
          ExcludedRules: S.optional(__S(394)),
          OverrideAction: S.optional(__S(392)),
          Priority: S.optional(S.Number),
          RuleId: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsWafWebAclRule" });
    case 4:
      return S.Array(__S(395));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          DefaultAction: S.optional(S.String),
          Rules: S.optional(__S(396)),
          WebAclId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsWafWebAclDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DbSnapshotIdentifier: S.optional(S.String),
          DbInstanceIdentifier: S.optional(S.String),
          SnapshotCreateTime: S.optional(S.String),
          Engine: S.optional(S.String),
          AllocatedStorage: S.optional(S.Number),
          Status: S.optional(S.String),
          Port: S.optional(S.Number),
          AvailabilityZone: S.optional(S.String),
          VpcId: S.optional(S.String),
          InstanceCreateTime: S.optional(S.String),
          MasterUsername: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          LicenseModel: S.optional(S.String),
          SnapshotType: S.optional(S.String),
          Iops: S.optional(S.Number),
          OptionGroupName: S.optional(S.String),
          PercentProgress: S.optional(S.Number),
          SourceRegion: S.optional(S.String),
          SourceDbSnapshotIdentifier: S.optional(S.String),
          StorageType: S.optional(S.String),
          TdeCredentialArn: S.optional(S.String),
          Encrypted: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          Timezone: S.optional(S.String),
          IamDatabaseAuthenticationEnabled: S.optional(S.Boolean),
          ProcessorFeatures: S.optional(__S(379)),
          DbiResourceId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsRdsDbSnapshotDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AttributeName: S.optional(S.String),
          AttributeValues: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute",
      });
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(399));
    case 1:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(__S(4)),
          SnapshotCreateTime: S.optional(S.String),
          Engine: S.optional(S.String),
          AllocatedStorage: S.optional(S.Number),
          Status: S.optional(S.String),
          Port: S.optional(S.Number),
          VpcId: S.optional(S.String),
          ClusterCreateTime: S.optional(S.String),
          MasterUsername: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          LicenseModel: S.optional(S.String),
          SnapshotType: S.optional(S.String),
          PercentProgress: S.optional(S.Number),
          StorageEncrypted: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          DbClusterIdentifier: S.optional(S.String),
          DbClusterSnapshotIdentifier: S.optional(S.String),
          IamDatabaseAuthenticationEnabled: S.optional(S.Boolean),
          DbClusterSnapshotAttributes: S.optional(__S(400)),
        }),
      ).annotate({
        identifier: "AwsRdsDbClusterSnapshotDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ RoleArn: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRdsDbClusterAssociatedRole",
      });
    case 3:
      return S.Array(__S(402));
    case 4:
      return S.suspend(() =>
        S.Struct({ DbClusterOptionGroupName: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRdsDbClusterOptionGroupMembership",
      });
    case 5:
      return S.Array(__S(404));
    case 6:
      return S.suspend(() =>
        S.Struct({
          IsClusterWriter: S.optional(S.Boolean),
          PromotionTier: S.optional(S.Number),
          DbInstanceIdentifier: S.optional(S.String),
          DbClusterParameterGroupStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsRdsDbClusterMember" });
    case 7:
      return S.Array(__S(406));
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AllocatedStorage: S.optional(S.Number),
          AvailabilityZones: S.optional(__S(4)),
          BackupRetentionPeriod: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          Status: S.optional(S.String),
          Endpoint: S.optional(S.String),
          ReaderEndpoint: S.optional(S.String),
          CustomEndpoints: S.optional(__S(4)),
          MultiAz: S.optional(S.Boolean),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          Port: S.optional(S.Number),
          MasterUsername: S.optional(S.String),
          PreferredBackupWindow: S.optional(S.String),
          PreferredMaintenanceWindow: S.optional(S.String),
          ReadReplicaIdentifiers: S.optional(__S(4)),
          VpcSecurityGroups: S.optional(__S(371)),
          HostedZoneId: S.optional(S.String),
          StorageEncrypted: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          DbClusterResourceId: S.optional(S.String),
          AssociatedRoles: S.optional(__S(403)),
          ClusterCreateTime: S.optional(S.String),
          EnabledCloudWatchLogsExports: S.optional(__S(4)),
          EngineMode: S.optional(S.String),
          DeletionProtection: S.optional(S.Boolean),
          HttpEndpointEnabled: S.optional(S.Boolean),
          ActivityStreamStatus: S.optional(S.String),
          CopyTagsToSnapshot: S.optional(S.Boolean),
          CrossAccountClone: S.optional(S.Boolean),
          DomainMemberships: S.optional(__S(386)),
          DbClusterParameterGroup: S.optional(S.String),
          DbSubnetGroup: S.optional(S.String),
          DbClusterOptionGroupMemberships: S.optional(__S(405)),
          DbClusterIdentifier: S.optional(S.String),
          DbClusterMembers: S.optional(__S(407)),
          IamDatabaseAuthenticationEnabled: S.optional(S.Boolean),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AwsRdsDbClusterDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsClusterClusterSettingsDetails",
      });
    case 2:
      return S.Array(__S(409));
    case 3:
      return S.suspend(() =>
        S.Struct({
          CloudWatchEncryptionEnabled: S.optional(S.Boolean),
          CloudWatchLogGroupName: S.optional(S.String),
          S3BucketName: S.optional(S.String),
          S3EncryptionEnabled: S.optional(S.Boolean),
          S3KeyPrefix: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          KmsKeyId: S.optional(S.String),
          LogConfiguration: S.optional(__S(411)),
          Logging: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsClusterConfigurationExecuteCommandConfigurationDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ExecuteCommandConfiguration: S.optional(__S(412)),
        }),
      ).annotate({
        identifier: "AwsEcsClusterConfigurationDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Base: S.optional(S.Number),
          CapacityProvider: S.optional(S.String),
          Weight: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEcsClusterDefaultCapacityProviderStrategyDetails",
      });
    case 7:
      return S.Array(__S(414));
  }
}
function __c52(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClusterArn: S.optional(S.String),
          ActiveServicesCount: S.optional(S.Number),
          CapacityProviders: S.optional(__S(4)),
          ClusterSettings: S.optional(__S(410)),
          Configuration: S.optional(__S(413)),
          DefaultCapacityProviderStrategy: S.optional(__S(415)),
          ClusterName: S.optional(S.String),
          RegisteredContainerInstancesCount: S.optional(S.Number),
          RunningTasksCount: S.optional(S.Number),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEcsClusterDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({ SourceVolume: S.optional(S.String), ContainerPath: S.optional(S.String) }),
      ).annotate({ identifier: "AwsMountPoint" });
    case 2:
      return S.Array(__S(417));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Image: S.optional(S.String),
          MountPoints: S.optional(__S(418)),
          Privileged: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AwsEcsContainerDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Condition: S.optional(S.String), ContainerName: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails",
      });
    case 5:
      return S.Array(__S(420));
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails",
      });
    case 7:
      return S.Array(__S(422));
  }
}
function __c53(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails",
      });
    case 1:
      return S.Array(__S(424));
    case 2:
      return S.suspend(() =>
        S.Struct({ Hostname: S.optional(S.String), IpAddress: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails",
      });
    case 3:
      return S.Array(__S(426));
    case 4:
      return S.suspend(() =>
        S.Struct({ Options: S.optional(__S(31)), Type: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Command: S.optional(__S(4)),
          Interval: S.optional(S.Number),
          Retries: S.optional(S.Number),
          StartPeriod: S.optional(S.Number),
          Timeout: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Add: S.optional(__S(4)), Drop: S.optional(__S(4)) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ContainerPath: S.optional(S.String),
          HostPath: S.optional(S.String),
          Permissions: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails",
      });
  }
}
function __c54(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(431));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ContainerPath: S.optional(S.String),
          MountOptions: S.optional(__S(4)),
          Size: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails",
      });
    case 2:
      return S.Array(__S(433));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Capabilities: S.optional(__S(430)),
          Devices: S.optional(__S(432)),
          InitProcessEnabled: S.optional(S.Boolean),
          MaxSwap: S.optional(S.Number),
          SharedMemorySize: S.optional(S.Number),
          Swappiness: S.optional(S.Number),
          Tmpfs: S.optional(__S(434)),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), ValueFrom: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails",
      });
    case 5:
      return S.Array(__S(436));
    case 6:
      return S.suspend(() =>
        S.Struct({
          LogDriver: S.optional(S.String),
          Options: S.optional(__S(31)),
          SecretOptions: S.optional(__S(437)),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ContainerPath: S.optional(S.String),
          ReadOnly: S.optional(S.Boolean),
          SourceVolume: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails",
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
          ContainerPort: S.optional(S.Number),
          HostPort: S.optional(S.Number),
          Protocol: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails",
      });
    case 2:
      return S.Array(__S(441));
    case 3:
      return S.suspend(() => S.Struct({ CredentialsParameter: S.optional(S.String) })).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails",
      });
    case 4:
      return S.Array(__S(424));
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), ValueFrom: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails",
      });
    case 6:
      return S.Array(__S(445));
    case 7:
      return S.suspend(() =>
        S.Struct({ Namespace: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails",
      });
  }
}
function __c56(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(447));
    case 1:
      return S.suspend(() =>
        S.Struct({
          HardLimit: S.optional(S.Number),
          Name: S.optional(S.String),
          SoftLimit: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails",
      });
    case 2:
      return S.Array(__S(449));
    case 3:
      return S.suspend(() =>
        S.Struct({ ReadOnly: S.optional(S.Boolean), SourceContainer: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails",
      });
    case 4:
      return S.Array(__S(451));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Command: S.optional(__S(4)),
          Cpu: S.optional(S.Number),
          DependsOn: S.optional(__S(421)),
          DisableNetworking: S.optional(S.Boolean),
          DnsSearchDomains: S.optional(__S(4)),
          DnsServers: S.optional(__S(4)),
          DockerLabels: S.optional(__S(31)),
          DockerSecurityOptions: S.optional(__S(4)),
          EntryPoint: S.optional(__S(4)),
          Environment: S.optional(__S(423)),
          EnvironmentFiles: S.optional(__S(425)),
          Essential: S.optional(S.Boolean),
          ExtraHosts: S.optional(__S(427)),
          FirelensConfiguration: S.optional(__S(428)),
          HealthCheck: S.optional(__S(429)),
          Hostname: S.optional(S.String),
          Image: S.optional(S.String),
          Interactive: S.optional(S.Boolean),
          Links: S.optional(__S(4)),
          LinuxParameters: S.optional(__S(435)),
          LogConfiguration: S.optional(__S(438)),
          Memory: S.optional(S.Number),
          MemoryReservation: S.optional(S.Number),
          MountPoints: S.optional(__S(440)),
          Name: S.optional(S.String),
          PortMappings: S.optional(__S(442)),
          Privileged: S.optional(S.Boolean),
          PseudoTerminal: S.optional(S.Boolean),
          ReadonlyRootFilesystem: S.optional(S.Boolean),
          RepositoryCredentials: S.optional(__S(443)),
          ResourceRequirements: S.optional(__S(444)),
          Secrets: S.optional(__S(446)),
          StartTimeout: S.optional(S.Number),
          StopTimeout: S.optional(S.Number),
          SystemControls: S.optional(__S(448)),
          Ulimits: S.optional(__S(450)),
          User: S.optional(S.String),
          VolumesFrom: S.optional(__S(452)),
          WorkingDirectory: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsDetails",
      });
    case 6:
      return S.Array(__S(453));
    case 7:
      return S.suspend(() =>
        S.Struct({ DeviceName: S.optional(S.String), DeviceType: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionInferenceAcceleratorsDetails",
      });
  }
}
function __c57(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(455));
    case 1:
      return S.suspend(() =>
        S.Struct({ Expression: S.optional(S.String), Type: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionPlacementConstraintsDetails",
      });
    case 2:
      return S.Array(__S(457));
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails",
      });
    case 4:
      return S.Array(__S(459));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ContainerName: S.optional(S.String),
          ProxyConfigurationProperties: S.optional(__S(460)),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionProxyConfigurationDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Autoprovision: S.optional(S.Boolean),
          Driver: S.optional(S.String),
          DriverOpts: S.optional(__S(31)),
          Labels: S.optional(__S(31)),
          Scope: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AccessPointId: S.optional(S.String), Iam: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails",
      });
  }
}
function __c58(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AuthorizationConfig: S.optional(__S(463)),
          FilesystemId: S.optional(S.String),
          RootDirectory: S.optional(S.String),
          TransitEncryption: S.optional(S.String),
          TransitEncryptionPort: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails",
      });
    case 1:
      return S.suspend(() => S.Struct({ SourcePath: S.optional(S.String) })).annotate({
        identifier: "AwsEcsTaskDefinitionVolumesHostDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DockerVolumeConfiguration: S.optional(__S(462)),
          EfsVolumeConfiguration: S.optional(__S(464)),
          Host: S.optional(__S(465)),
          Name: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionVolumesDetails",
      });
    case 3:
      return S.Array(__S(466));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ContainerDefinitions: S.optional(__S(454)),
          Cpu: S.optional(S.String),
          ExecutionRoleArn: S.optional(S.String),
          Family: S.optional(S.String),
          InferenceAccelerators: S.optional(__S(456)),
          IpcMode: S.optional(S.String),
          Memory: S.optional(S.String),
          NetworkMode: S.optional(S.String),
          PidMode: S.optional(S.String),
          PlacementConstraints: S.optional(__S(458)),
          ProxyConfiguration: S.optional(__S(461)),
          RequiresCompatibilities: S.optional(__S(4)),
          TaskRoleArn: S.optional(S.String),
          Volumes: S.optional(__S(467)),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), MountPath: S.optional(S.String) }),
      ).annotate({ identifier: "VolumeMount" });
    case 6:
      return S.Array(__S(469));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ContainerRuntime: S.optional(S.String),
          Name: S.optional(S.String),
          ImageId: S.optional(S.String),
          ImageName: S.optional(S.String),
          LaunchedAt: S.optional(S.String),
          VolumeMounts: S.optional(__S(470)),
          Privileged: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ContainerDetails" });
  }
}
function __c59(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CustSubscriptionId: S.optional(S.String),
          CustomerAwsId: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          EventCategoriesList: S.optional(__S(4)),
          EventSubscriptionArn: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          SourceIdsList: S.optional(__S(4)),
          SourceType: S.optional(S.String),
          Status: S.optional(S.String),
          SubscriptionCreationTime: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRdsEventSubscriptionDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Enable: S.optional(S.Boolean), Rollback: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DeploymentCircuitBreaker: S.optional(__S(473)),
          MaximumPercent: S.optional(S.Number),
          MinimumHealthyPercent: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEcsServiceDeploymentConfigurationDetails",
      });
    case 3:
      return S.suspend(() => S.Struct({ Type: S.optional(S.String) })).annotate({
        identifier: "AwsEcsServiceDeploymentControllerDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ContainerName: S.optional(S.String),
          ContainerPort: S.optional(S.Number),
          LoadBalancerName: S.optional(S.String),
          TargetGroupArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsServiceLoadBalancersDetails",
      });
    case 5:
      return S.Array(__S(476));
    case 6:
      return S.suspend(() =>
        S.Struct({
          AssignPublicIp: S.optional(S.String),
          SecurityGroups: S.optional(__S(4)),
          Subnets: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AwsVpcConfiguration: S.optional(__S(478)),
        }),
      ).annotate({
        identifier: "AwsEcsServiceNetworkConfigurationDetails",
      });
  }
}
function __c60(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Field: S.optional(S.String), Type: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsServicePlacementStrategiesDetails",
      });
    case 1:
      return S.Array(__S(480));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ContainerName: S.optional(S.String),
          ContainerPort: S.optional(S.Number),
          Port: S.optional(S.Number),
          RegistryArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsServiceServiceRegistriesDetails",
      });
    case 3:
      return S.Array(__S(482));
    case 4:
      return S.suspend(() =>
        S.Struct({
          CapacityProviderStrategy: S.optional(__S(415)),
          Cluster: S.optional(S.String),
          DeploymentConfiguration: S.optional(__S(474)),
          DeploymentController: S.optional(__S(475)),
          DesiredCount: S.optional(S.Number),
          EnableEcsManagedTags: S.optional(S.Boolean),
          EnableExecuteCommand: S.optional(S.Boolean),
          HealthCheckGracePeriodSeconds: S.optional(S.Number),
          LaunchType: S.optional(S.String),
          LoadBalancers: S.optional(__S(477)),
          Name: S.optional(S.String),
          NetworkConfiguration: S.optional(__S(479)),
          PlacementConstraints: S.optional(__S(458)),
          PlacementStrategies: S.optional(__S(481)),
          PlatformVersion: S.optional(S.String),
          PropagateTags: S.optional(S.String),
          Role: S.optional(S.String),
          SchedulingStrategy: S.optional(S.String),
          ServiceArn: S.optional(S.String),
          ServiceName: S.optional(S.String),
          ServiceRegistries: S.optional(__S(483)),
          TaskDefinition: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEcsServiceDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DeleteOnTermination: S.optional(S.Boolean),
          Encrypted: S.optional(S.Boolean),
          Iops: S.optional(S.Number),
          SnapshotId: S.optional(S.String),
          VolumeSize: S.optional(S.Number),
          VolumeType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DeviceName: S.optional(S.String),
          Ebs: S.optional(__S(485)),
          NoDevice: S.optional(S.Boolean),
          VirtualName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails",
      });
    case 7:
      return S.Array(__S(486));
  }
}
function __c61(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Enabled: S.optional(S.Boolean) })).annotate({
        identifier: "AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          HttpEndpoint: S.optional(S.String),
          HttpPutResponseHopLimit: S.optional(S.Number),
          HttpTokens: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAutoScalingLaunchConfigurationMetadataOptions",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AssociatePublicIpAddress: S.optional(S.Boolean),
          BlockDeviceMappings: S.optional(__S(487)),
          ClassicLinkVpcId: S.optional(S.String),
          ClassicLinkVpcSecurityGroups: S.optional(__S(4)),
          CreatedTime: S.optional(S.String),
          EbsOptimized: S.optional(S.Boolean),
          IamInstanceProfile: S.optional(S.String),
          ImageId: S.optional(S.String),
          InstanceMonitoring: S.optional(__S(488)),
          InstanceType: S.optional(S.String),
          KernelId: S.optional(S.String),
          KeyName: S.optional(S.String),
          LaunchConfigurationName: S.optional(S.String),
          PlacementTenancy: S.optional(S.String),
          RamdiskId: S.optional(S.String),
          SecurityGroups: S.optional(__S(4)),
          SpotPrice: S.optional(S.String),
          UserData: S.optional(S.String),
          MetadataOptions: S.optional(__S(489)),
        }),
      ).annotate({
        identifier: "AwsAutoScalingLaunchConfigurationDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AcceptedRouteCount: S.optional(S.Number),
          CertificateArn: S.optional(S.String),
          LastStatusChange: S.optional(S.String),
          OutsideIpAddress: S.optional(S.String),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2VpnConnectionVgwTelemetryDetails",
      });
    case 4:
      return S.Array(__S(491));
    case 5:
      return S.suspend(() =>
        S.Struct({
          DpdTimeoutSeconds: S.optional(S.Number),
          IkeVersions: S.optional(__S(4)),
          OutsideIpAddress: S.optional(S.String),
          Phase1DhGroupNumbers: S.optional(__S(51)),
          Phase1EncryptionAlgorithms: S.optional(__S(4)),
          Phase1IntegrityAlgorithms: S.optional(__S(4)),
          Phase1LifetimeSeconds: S.optional(S.Number),
          Phase2DhGroupNumbers: S.optional(__S(51)),
          Phase2EncryptionAlgorithms: S.optional(__S(4)),
          Phase2IntegrityAlgorithms: S.optional(__S(4)),
          Phase2LifetimeSeconds: S.optional(S.Number),
          PreSharedKey: S.optional(S.String),
          RekeyFuzzPercentage: S.optional(S.Number),
          RekeyMarginTimeSeconds: S.optional(S.Number),
          ReplayWindowSize: S.optional(S.Number),
          TunnelInsideCidr: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2VpnConnectionOptionsTunnelOptionsDetails",
      });
    case 6:
      return S.Array(__S(493));
    case 7:
      return S.suspend(() =>
        S.Struct({
          StaticRoutesOnly: S.optional(S.Boolean),
          TunnelOptions: S.optional(__S(494)),
        }),
      ).annotate({
        identifier: "AwsEc2VpnConnectionOptionsDetails",
      });
  }
}
function __c62(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DestinationCidrBlock: S.optional(S.String), State: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2VpnConnectionRoutesDetails",
      });
    case 1:
      return S.Array(__S(496));
    case 2:
      return S.suspend(() =>
        S.Struct({
          VpnConnectionId: S.optional(S.String),
          State: S.optional(S.String),
          CustomerGatewayId: S.optional(S.String),
          CustomerGatewayConfiguration: S.optional(S.String),
          Type: S.optional(S.String),
          VpnGatewayId: S.optional(S.String),
          Category: S.optional(S.String),
          VgwTelemetry: S.optional(__S(492)),
          Options: S.optional(__S(495)),
          Routes: S.optional(__S(497)),
          TransitGatewayId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2VpnConnectionDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RegistryId: S.optional(S.String),
          RepositoryName: S.optional(S.String),
          Architecture: S.optional(S.String),
          ImageDigest: S.optional(S.String),
          ImageTags: S.optional(__S(4)),
          ImagePublishedAt: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcrContainerImageDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), KmsKeyId: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AutomatedUpdateDate: S.optional(S.String),
          Cancellable: S.optional(S.Boolean),
          CurrentVersion: S.optional(S.String),
          Description: S.optional(S.String),
          NewVersion: S.optional(S.String),
          UpdateAvailable: S.optional(S.Boolean),
          UpdateStatus: S.optional(S.String),
          OptionalDeployment: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          InstanceCount: S.optional(S.Number),
          WarmEnabled: S.optional(S.Boolean),
          WarmCount: S.optional(S.Number),
          DedicatedMasterEnabled: S.optional(S.Boolean),
          ZoneAwarenessConfig: S.optional(__S(200)),
          DedicatedMasterCount: S.optional(S.Number),
          InstanceType: S.optional(S.String),
          WarmType: S.optional(S.String),
          ZoneAwarenessEnabled: S.optional(S.Boolean),
          DedicatedMasterType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsOpenSearchServiceDomainClusterConfigDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CustomEndpointCertificateArn: S.optional(S.String),
          CustomEndpointEnabled: S.optional(S.Boolean),
          EnforceHTTPS: S.optional(S.Boolean),
          CustomEndpoint: S.optional(S.String),
          TLSSecurityPolicy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsOpenSearchServiceDomainDomainEndpointOptionsDetails",
      });
  }
}
function __c63(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SecurityGroupIds: S.optional(__S(4)),
          SubnetIds: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "AwsOpenSearchServiceDomainVpcOptionsDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MasterUserArn: S.optional(S.String),
          MasterUserName: S.optional(S.String),
          MasterUserPassword: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsOpenSearchServiceDomainMasterUserOptionsDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          InternalUserDatabaseEnabled: S.optional(S.Boolean),
          MasterUserOptions: S.optional(__S(505)),
        }),
      ).annotate({
        identifier: "AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          AccessPolicies: S.optional(S.String),
          DomainName: S.optional(S.String),
          Id: S.optional(S.String),
          DomainEndpoint: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          EncryptionAtRestOptions: S.optional(__S(500)),
          NodeToNodeEncryptionOptions: S.optional(__S(488)),
          ServiceSoftwareOptions: S.optional(__S(501)),
          ClusterConfig: S.optional(__S(502)),
          DomainEndpointOptions: S.optional(__S(503)),
          VpcOptions: S.optional(__S(504)),
          LogPublishingOptions: S.optional(__S(204)),
          DomainEndpoints: S.optional(__S(31)),
          AdvancedSecurityOptions: S.optional(__S(506)),
        }),
      ).annotate({
        identifier: "AwsOpenSearchServiceDomainDetails",
      });
    case 4:
      return S.suspend(() => S.Struct({ ServiceType: S.optional(S.String) })).annotate({
        identifier: "AwsEc2VpcEndpointServiceServiceTypeDetails",
      });
    case 5:
      return S.Array(__S(508));
    case 6:
      return S.suspend(() =>
        S.Struct({
          AcceptanceRequired: S.optional(S.Boolean),
          AvailabilityZones: S.optional(__S(4)),
          BaseEndpointDnsNames: S.optional(__S(4)),
          ManagesVpcEndpoints: S.optional(S.Boolean),
          GatewayLoadBalancerArns: S.optional(__S(4)),
          NetworkLoadBalancerArns: S.optional(__S(4)),
          PrivateDnsName: S.optional(S.String),
          ServiceId: S.optional(S.String),
          ServiceName: S.optional(S.String),
          ServiceState: S.optional(S.String),
          ServiceType: S.optional(__S(509)),
        }),
      ).annotate({
        identifier: "AwsEc2VpcEndpointServiceDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          KeyId: S.optional(S.String),
          Status: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsXrayEncryptionConfigDetails",
      });
  }
}
function __c64(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DataId: S.optional(S.String),
          Negated: S.optional(S.Boolean),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsWafRateBasedRuleMatchPredicate",
      });
    case 1:
      return S.Array(__S(512));
    case 2:
      return S.suspend(() =>
        S.Struct({
          MetricName: S.optional(S.String),
          Name: S.optional(S.String),
          RateKey: S.optional(S.String),
          RateLimit: S.optional(S.Number),
          RuleId: S.optional(S.String),
          MatchPredicates: S.optional(__S(513)),
        }),
      ).annotate({
        identifier: "AwsWafRateBasedRuleDetails",
      });
    case 3:
      return S.suspend(() => S.Struct({ ScanOnPush: S.optional(S.Boolean) })).annotate({
        identifier: "AwsEcrRepositoryImageScanningConfigurationDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ LifecyclePolicyText: S.optional(S.String), RegistryId: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcrRepositoryLifecyclePolicyDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          ImageScanningConfiguration: S.optional(__S(515)),
          ImageTagMutability: S.optional(S.String),
          LifecyclePolicy: S.optional(__S(516)),
          RepositoryName: S.optional(S.String),
          RepositoryPolicyText: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEcrRepositoryDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SecurityGroupIds: S.optional(__S(4)),
          SubnetIds: S.optional(__S(4)),
          EndpointPublicAccess: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsEksClusterResourcesVpcConfigDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), Types: S.optional(__S(4)) }),
      ).annotate({
        identifier: "AwsEksClusterLoggingClusterLoggingDetails",
      });
  }
}
function __c65(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(519));
    case 1:
      return S.suspend(() => S.Struct({ ClusterLogging: S.optional(__S(520)) })).annotate({
        identifier: "AwsEksClusterLoggingDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          CertificateAuthorityData: S.optional(S.String),
          ClusterStatus: S.optional(S.String),
          Endpoint: S.optional(S.String),
          Name: S.optional(S.String),
          ResourcesVpcConfig: S.optional(__S(518)),
          RoleArn: S.optional(S.String),
          Version: S.optional(S.String),
          Logging: S.optional(__S(521)),
        }),
      ).annotate({ identifier: "AwsEksClusterDetails" });
    case 3:
      return S.suspend(() => S.Struct({ ResourceArn: S.optional(S.String) })).annotate({
        identifier: "FirewallPolicyStatefulRuleGroupReferencesDetails",
      });
    case 4:
      return S.Array(__S(523));
    case 5:
      return S.suspend(() => S.Struct({ Value: S.optional(S.String) })).annotate({
        identifier: "StatelessCustomPublishMetricActionDimension",
      });
    case 6:
      return S.Array(__S(525));
    case 7:
      return S.suspend(() => S.Struct({ Dimensions: S.optional(__S(526)) })).annotate({
        identifier: "StatelessCustomPublishMetricAction",
      });
  }
}
function __c66(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ PublishMetricAction: S.optional(__S(527)) })).annotate({
        identifier: "StatelessCustomActionDefinition",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ActionDefinition: S.optional(__S(528)),
          ActionName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FirewallPolicyStatelessCustomActionsDetails",
      });
    case 2:
      return S.Array(__S(529));
    case 3:
      return S.suspend(() =>
        S.Struct({ Priority: S.optional(S.Number), ResourceArn: S.optional(S.String) }),
      ).annotate({
        identifier: "FirewallPolicyStatelessRuleGroupReferencesDetails",
      });
    case 4:
      return S.Array(__S(531));
    case 5:
      return S.suspend(() =>
        S.Struct({
          StatefulRuleGroupReferences: S.optional(__S(524)),
          StatelessCustomActions: S.optional(__S(530)),
          StatelessDefaultActions: S.optional(__S(4)),
          StatelessFragmentDefaultActions: S.optional(__S(4)),
          StatelessRuleGroupReferences: S.optional(__S(532)),
        }),
      ).annotate({ identifier: "FirewallPolicyDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FirewallPolicy: S.optional(__S(533)),
          FirewallPolicyArn: S.optional(S.String),
          FirewallPolicyId: S.optional(S.String),
          FirewallPolicyName: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsNetworkFirewallFirewallPolicyDetails",
      });
    case 7:
      return S.suspend(() => S.Struct({ SubnetId: S.optional(S.String) })).annotate({
        identifier: "AwsNetworkFirewallFirewallSubnetMappingsDetails",
      });
  }
}
function __c67(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(535));
    case 1:
      return S.suspend(() =>
        S.Struct({
          DeleteProtection: S.optional(S.Boolean),
          Description: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallId: S.optional(S.String),
          FirewallName: S.optional(S.String),
          FirewallPolicyArn: S.optional(S.String),
          FirewallPolicyChangeProtection: S.optional(S.Boolean),
          SubnetChangeProtection: S.optional(S.Boolean),
          SubnetMappings: S.optional(__S(536)),
          VpcId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsNetworkFirewallFirewallDetails",
      });
    case 2:
      return S.suspend(() => S.Struct({ Definition: S.optional(__S(4)) })).annotate({
        identifier: "RuleGroupVariablesIpSetsDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          IpSets: S.optional(__S(538)),
          PortSets: S.optional(__S(538)),
        }),
      ).annotate({ identifier: "RuleGroupVariables" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          GeneratedRulesType: S.optional(S.String),
          TargetTypes: S.optional(__S(4)),
          Targets: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "RuleGroupSourceListDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Destination: S.optional(S.String),
          DestinationPort: S.optional(S.String),
          Direction: S.optional(S.String),
          Protocol: S.optional(S.String),
          Source: S.optional(S.String),
          SourcePort: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RuleGroupSourceStatefulRulesHeaderDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Keyword: S.optional(S.String),
          Settings: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "RuleGroupSourceStatefulRulesOptionsDetails",
      });
    case 7:
      return S.Array(__S(542));
  }
}
function __c68(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(S.String),
          Header: S.optional(__S(541)),
          RuleOptions: S.optional(__S(543)),
        }),
      ).annotate({
        identifier: "RuleGroupSourceStatefulRulesDetails",
      });
    case 1:
      return S.Array(__S(544));
    case 2:
      return S.suspend(() =>
        S.Struct({ FromPort: S.optional(S.Number), ToPort: S.optional(S.Number) }),
      ).annotate({
        identifier: "RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts",
      });
    case 3:
      return S.Array(__S(546));
    case 4:
      return S.suspend(() => S.Struct({ AddressDefinition: S.optional(S.String) })).annotate({
        identifier: "RuleGroupSourceStatelessRuleMatchAttributesDestinations",
      });
    case 5:
      return S.Array(__S(548));
    case 6:
      return S.Array(S.Number);
    case 7:
      return S.suspend(() =>
        S.Struct({ FromPort: S.optional(S.Number), ToPort: S.optional(S.Number) }),
      ).annotate({
        identifier: "RuleGroupSourceStatelessRuleMatchAttributesSourcePorts",
      });
  }
}
function __c69(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(551));
    case 1:
      return S.suspend(() =>
        S.Struct({ Flags: S.optional(__S(4)), Masks: S.optional(__S(4)) }),
      ).annotate({
        identifier: "RuleGroupSourceStatelessRuleMatchAttributesTcpFlags",
      });
    case 2:
      return S.Array(__S(553));
    case 3:
      return S.suspend(() =>
        S.Struct({
          DestinationPorts: S.optional(__S(547)),
          Destinations: S.optional(__S(549)),
          Protocols: S.optional(__S(550)),
          SourcePorts: S.optional(__S(552)),
          Sources: S.optional(__S(549)),
          TcpFlags: S.optional(__S(554)),
        }),
      ).annotate({
        identifier: "RuleGroupSourceStatelessRuleMatchAttributes",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Actions: S.optional(__S(4)),
          MatchAttributes: S.optional(__S(555)),
        }),
      ).annotate({
        identifier: "RuleGroupSourceStatelessRuleDefinition",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Priority: S.optional(S.Number),
          RuleDefinition: S.optional(__S(556)),
        }),
      ).annotate({
        identifier: "RuleGroupSourceStatelessRulesDetails",
      });
    case 6:
      return S.Array(__S(557));
    case 7:
      return S.suspend(() =>
        S.Struct({
          CustomActions: S.optional(__S(530)),
          StatelessRules: S.optional(__S(558)),
        }),
      ).annotate({
        identifier: "RuleGroupSourceStatelessRulesAndCustomActionsDetails",
      });
  }
}
function __c70(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RulesSourceList: S.optional(__S(540)),
          RulesString: S.optional(S.String),
          StatefulRules: S.optional(__S(545)),
          StatelessRulesAndCustomActions: S.optional(__S(559)),
        }),
      ).annotate({ identifier: "RuleGroupSource" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RuleVariables: S.optional(__S(539)),
          RulesSource: S.optional(__S(560)),
        }),
      ).annotate({ identifier: "RuleGroupDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Capacity: S.optional(S.Number),
          Description: S.optional(S.String),
          RuleGroup: S.optional(__S(561)),
          RuleGroupArn: S.optional(S.String),
          RuleGroupId: S.optional(S.String),
          RuleGroupName: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsNetworkFirewallRuleGroupDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Ec2SecurityGroupId: S.optional(S.String),
          Ec2SecurityGroupName: S.optional(S.String),
          Ec2SecurityGroupOwnerId: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRdsDbSecurityGroupEc2SecurityGroup",
      });
    case 4:
      return S.Array(__S(563));
    case 5:
      return S.suspend(() =>
        S.Struct({ CidrIp: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRdsDbSecurityGroupIpRange",
      });
    case 6:
      return S.Array(__S(565));
    case 7:
      return S.suspend(() =>
        S.Struct({
          DbSecurityGroupArn: S.optional(S.String),
          DbSecurityGroupDescription: S.optional(S.String),
          DbSecurityGroupName: S.optional(S.String),
          Ec2SecurityGroups: S.optional(__S(564)),
          IpRanges: S.optional(__S(566)),
          OwnerId: S.optional(S.String),
          VpcId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRdsDbSecurityGroupDetails",
      });
  }
}
function __c71(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EncryptionType: S.optional(S.String), KeyId: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsKinesisStreamStreamEncryptionDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          StreamEncryption: S.optional(__S(568)),
          ShardCount: S.optional(S.Number),
          RetentionPeriodHours: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AwsKinesisStreamDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Description: S.optional(S.String),
          DefaultRouteTablePropagation: S.optional(S.String),
          AutoAcceptSharedAttachments: S.optional(S.String),
          DefaultRouteTableAssociation: S.optional(S.String),
          TransitGatewayCidrBlocks: S.optional(__S(4)),
          AssociationDefaultRouteTableId: S.optional(S.String),
          PropagationDefaultRouteTableId: S.optional(S.String),
          VpnEcmpSupport: S.optional(S.String),
          DnsSupport: S.optional(S.String),
          MulticastSupport: S.optional(S.String),
          AmazonSideAsn: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEc2TransitGatewayDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Gid: S.optional(S.String),
          SecondaryGids: S.optional(__S(4)),
          Uid: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEfsAccessPointPosixUserDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          OwnerGid: S.optional(S.String),
          OwnerUid: S.optional(S.String),
          Permissions: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEfsAccessPointRootDirectoryCreationInfoDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CreationInfo: S.optional(__S(572)),
          Path: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEfsAccessPointRootDirectoryDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccessPointId: S.optional(S.String),
          Arn: S.optional(S.String),
          ClientToken: S.optional(S.String),
          FileSystemId: S.optional(S.String),
          PosixUser: S.optional(__S(571)),
          RootDirectory: S.optional(__S(573)),
        }),
      ).annotate({ identifier: "AwsEfsAccessPointDetails" });
    case 7:
      return S.suspend(() => S.Struct({ StackDriftStatus: S.optional(S.String) })).annotate({
        identifier: "AwsCloudFormationStackDriftInformationDetails",
      });
  }
}
function __c72(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          OutputKey: S.optional(S.String),
          OutputValue: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCloudFormationStackOutputsDetails",
      });
    case 1:
      return S.Array(__S(576));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Capabilities: S.optional(__S(4)),
          CreationTime: S.optional(S.String),
          Description: S.optional(S.String),
          DisableRollback: S.optional(S.Boolean),
          DriftInformation: S.optional(__S(575)),
          EnableTerminationProtection: S.optional(S.Boolean),
          LastUpdatedTime: S.optional(S.String),
          NotificationArns: S.optional(__S(4)),
          Outputs: S.optional(__S(577)),
          RoleArn: S.optional(S.String),
          StackId: S.optional(S.String),
          StackName: S.optional(S.String),
          StackStatus: S.optional(S.String),
          StackStatusReason: S.optional(S.String),
          TimeoutInMinutes: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsCloudFormationStackDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ActionsEnabled: S.optional(S.Boolean),
          AlarmActions: S.optional(__S(4)),
          AlarmArn: S.optional(S.String),
          AlarmConfigurationUpdatedTimestamp: S.optional(S.String),
          AlarmDescription: S.optional(S.String),
          AlarmName: S.optional(S.String),
          ComparisonOperator: S.optional(S.String),
          DatapointsToAlarm: S.optional(S.Number),
          Dimensions: S.optional(__S(410)),
          EvaluateLowSampleCountPercentile: S.optional(S.String),
          EvaluationPeriods: S.optional(S.Number),
          ExtendedStatistic: S.optional(S.String),
          InsufficientDataActions: S.optional(__S(4)),
          MetricName: S.optional(S.String),
          Namespace: S.optional(S.String),
          OkActions: S.optional(__S(4)),
          Period: S.optional(S.Number),
          Statistic: S.optional(S.String),
          Threshold: S.optional(S.Number),
          ThresholdMetricId: S.optional(S.String),
          TreatMissingData: S.optional(S.String),
          Unit: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCloudWatchAlarmDetails",
      });
    case 4:
      return S.suspend(() => S.Struct({ CidrBlock: S.optional(S.String) })).annotate({
        identifier: "VpcInfoCidrBlockSetDetails",
      });
    case 5:
      return S.Array(__S(580));
    case 6:
      return S.suspend(() => S.Struct({ Ipv6CidrBlock: S.optional(S.String) })).annotate({
        identifier: "VpcInfoIpv6CidrBlockSetDetails",
      });
    case 7:
      return S.Array(__S(582));
  }
}
function __c73(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AllowDnsResolutionFromRemoteVpc: S.optional(S.Boolean),
          AllowEgressFromLocalClassicLinkToRemoteVpc: S.optional(S.Boolean),
          AllowEgressFromLocalVpcToRemoteClassicLink: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "VpcInfoPeeringOptionsDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CidrBlock: S.optional(S.String),
          CidrBlockSet: S.optional(__S(581)),
          Ipv6CidrBlockSet: S.optional(__S(583)),
          OwnerId: S.optional(S.String),
          PeeringOptions: S.optional(__S(584)),
          Region: S.optional(S.String),
          VpcId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2VpcPeeringConnectionVpcInfoDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2VpcPeeringConnectionStatusDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccepterVpcInfo: S.optional(__S(585)),
          ExpirationTime: S.optional(S.String),
          RequesterVpcInfo: S.optional(__S(585)),
          Status: S.optional(__S(586)),
          VpcPeeringConnectionId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2VpcPeeringConnectionDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(__S(475)),
          Priority: S.optional(S.Number),
          RuleId: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsWafRegionalRuleGroupRulesDetails",
      });
    case 5:
      return S.Array(__S(588));
    case 6:
      return S.suspend(() =>
        S.Struct({
          MetricName: S.optional(S.String),
          Name: S.optional(S.String),
          RuleGroupId: S.optional(S.String),
          Rules: S.optional(__S(589)),
        }),
      ).annotate({
        identifier: "AwsWafRegionalRuleGroupDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MetricName: S.optional(S.String),
          Name: S.optional(S.String),
          PredicateList: S.optional(__S(513)),
          RuleId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsWafRegionalRuleDetails",
      });
  }
}
function __c74(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(__S(475)),
          OverrideAction: S.optional(__S(475)),
          Priority: S.optional(S.Number),
          RuleId: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsWafRegionalWebAclRulesListDetails",
      });
    case 1:
      return S.Array(__S(592));
    case 2:
      return S.suspend(() =>
        S.Struct({
          DefaultAction: S.optional(S.String),
          MetricName: S.optional(S.String),
          Name: S.optional(S.String),
          RulesList: S.optional(__S(593)),
          WebAclId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsWafRegionalWebAclDetails",
      });
    case 3:
      return S.Array(__S(512));
    case 4:
      return S.suspend(() =>
        S.Struct({
          MetricName: S.optional(S.String),
          Name: S.optional(S.String),
          PredicateList: S.optional(__S(595)),
          RuleId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsWafRuleDetails" });
    case 5:
      return S.Array(__S(588));
    case 6:
      return S.suspend(() =>
        S.Struct({
          MetricName: S.optional(S.String),
          Name: S.optional(S.String),
          RuleGroupId: S.optional(S.String),
          Rules: S.optional(__S(597)),
        }),
      ).annotate({ identifier: "AwsWafRuleGroupDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Host: S.optional(__S(465)) }),
      ).annotate({ identifier: "AwsEcsTaskVolumeDetails" });
  }
}
function __c75(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(599));
    case 1:
      return S.Array(__S(419));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ClusterArn: S.optional(S.String),
          TaskDefinitionArn: S.optional(S.String),
          Version: S.optional(S.String),
          CreatedAt: S.optional(S.String),
          StartedAt: S.optional(S.String),
          StartedBy: S.optional(S.String),
          Group: S.optional(S.String),
          Volumes: S.optional(__S(600)),
          Containers: S.optional(__S(601)),
        }),
      ).annotate({ identifier: "AwsEcsTaskDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          BackupVaultEvents: S.optional(__S(4)),
          SnsTopicArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsBackupBackupVaultNotificationsDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          BackupVaultArn: S.optional(S.String),
          BackupVaultName: S.optional(S.String),
          EncryptionKeyArn: S.optional(S.String),
          Notifications: S.optional(__S(603)),
          AccessPolicy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsBackupBackupVaultDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ BackupOptions: S.optional(__S(31)), ResourceType: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsBackupBackupPlanAdvancedBackupSettingsDetails",
      });
    case 6:
      return S.Array(__S(605));
    case 7:
      return S.suspend(() =>
        S.Struct({
          DeleteAfterDays: S.optional(S.Number),
          MoveToColdStorageAfterDays: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsBackupBackupPlanLifecycleDetails",
      });
  }
}
function __c76(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DestinationBackupVaultArn: S.optional(S.String),
          Lifecycle: S.optional(__S(607)),
        }),
      ).annotate({
        identifier: "AwsBackupBackupPlanRuleCopyActionsDetails",
      });
    case 1:
      return S.Array(__S(608));
    case 2:
      return S.suspend(() =>
        S.Struct({
          TargetBackupVault: S.optional(S.String),
          StartWindowMinutes: S.optional(S.Number),
          ScheduleExpression: S.optional(S.String),
          RuleName: S.optional(S.String),
          RuleId: S.optional(S.String),
          EnableContinuousBackup: S.optional(S.Boolean),
          CompletionWindowMinutes: S.optional(S.Number),
          CopyActions: S.optional(__S(609)),
          Lifecycle: S.optional(__S(607)),
        }),
      ).annotate({
        identifier: "AwsBackupBackupPlanRuleDetails",
      });
    case 3:
      return S.Array(__S(610));
    case 4:
      return S.suspend(() =>
        S.Struct({
          BackupPlanName: S.optional(S.String),
          AdvancedBackupSettings: S.optional(__S(606)),
          BackupPlanRule: S.optional(__S(611)),
        }),
      ).annotate({
        identifier: "AwsBackupBackupPlanBackupPlanDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          BackupPlan: S.optional(__S(612)),
          BackupPlanArn: S.optional(S.String),
          BackupPlanId: S.optional(S.String),
          VersionId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsBackupBackupPlanDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DeleteAt: S.optional(S.String), MoveToColdStorageAt: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsBackupRecoveryPointCalculatedLifecycleDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          BackupPlanArn: S.optional(S.String),
          BackupPlanId: S.optional(S.String),
          BackupPlanVersion: S.optional(S.String),
          BackupRuleId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsBackupRecoveryPointCreatedByDetails",
      });
  }
}
function __c77(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          BackupSizeInBytes: S.optional(S.Number),
          BackupVaultArn: S.optional(S.String),
          BackupVaultName: S.optional(S.String),
          CalculatedLifecycle: S.optional(__S(614)),
          CompletionDate: S.optional(S.String),
          CreatedBy: S.optional(__S(615)),
          CreationDate: S.optional(S.String),
          EncryptionKeyArn: S.optional(S.String),
          IamRoleArn: S.optional(S.String),
          IsEncrypted: S.optional(S.Boolean),
          LastRestoreTime: S.optional(S.String),
          Lifecycle: S.optional(__S(607)),
          RecoveryPointArn: S.optional(S.String),
          ResourceArn: S.optional(S.String),
          ResourceType: S.optional(S.String),
          SourceBackupVaultArn: S.optional(S.String),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          StorageClass: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsBackupRecoveryPointDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DeleteOnTermination: S.optional(S.Boolean),
          Encrypted: S.optional(S.Boolean),
          Iops: S.optional(S.Number),
          KmsKeyId: S.optional(S.String),
          SnapshotId: S.optional(S.String),
          Throughput: S.optional(S.Number),
          VolumeSize: S.optional(S.Number),
          VolumeType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DeviceName: S.optional(S.String),
          Ebs: S.optional(__S(617)),
          NoDevice: S.optional(S.String),
          VirtualName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails",
      });
    case 3:
      return S.Array(__S(618));
    case 4:
      return S.suspend(() =>
        S.Struct({
          CapacityReservationId: S.optional(S.String),
          CapacityReservationResourceGroupArn: S.optional(S.String),
        }),
      ).annotate({
        identifier:
          "AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CapacityReservationPreference: S.optional(S.String),
          CapacityReservationTarget: S.optional(__S(620)),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ CoreCount: S.optional(S.Number), ThreadsPerCore: S.optional(S.Number) }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataCpuOptionsDetails",
      });
    case 7:
      return S.suspend(() => S.Struct({ CpuCredits: S.optional(S.String) })).annotate({
        identifier: "AwsEc2LaunchTemplateDataCreditSpecificationDetails",
      });
  }
}
function __c78(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Type: S.optional(S.String) })).annotate({
        identifier: "AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails",
      });
    case 1:
      return S.Array(__S(624));
    case 2:
      return S.suspend(() =>
        S.Struct({ Count: S.optional(S.Number), Type: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails",
      });
    case 3:
      return S.Array(__S(626));
    case 4:
      return S.suspend(() => S.Struct({ Configured: S.optional(S.Boolean) })).annotate({
        identifier: "AwsEc2LaunchTemplateDataHibernationOptionsDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Name: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataIamInstanceProfileDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          BlockDurationMinutes: S.optional(S.Number),
          InstanceInterruptionBehavior: S.optional(S.String),
          MaxPrice: S.optional(S.String),
          SpotInstanceType: S.optional(S.String),
          ValidUntil: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MarketType: S.optional(S.String),
          SpotOptions: S.optional(__S(630)),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails",
      });
  }
}
function __c79(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Max: S.optional(S.Number), Min: S.optional(S.Number) }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Max: S.optional(S.Number), Min: S.optional(S.Number) }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AcceleratorCount: S.optional(__S(632)),
          AcceleratorManufacturers: S.optional(__S(4)),
          AcceleratorNames: S.optional(__S(4)),
          AcceleratorTotalMemoryMiB: S.optional(__S(632)),
          AcceleratorTypes: S.optional(__S(4)),
          BareMetal: S.optional(S.String),
          BaselineEbsBandwidthMbps: S.optional(__S(632)),
          BurstablePerformance: S.optional(S.String),
          CpuManufacturers: S.optional(__S(4)),
          ExcludedInstanceTypes: S.optional(__S(4)),
          InstanceGenerations: S.optional(__S(4)),
          LocalStorage: S.optional(S.String),
          LocalStorageTypes: S.optional(__S(4)),
          MemoryGiBPerVCpu: S.optional(__S(632)),
          MemoryMiB: S.optional(__S(633)),
          NetworkInterfaceCount: S.optional(__S(632)),
          OnDemandMaxPricePercentageOverLowestPrice: S.optional(S.Number),
          RequireHibernateSupport: S.optional(S.Boolean),
          SpotMaxPricePercentageOverLowestPrice: S.optional(S.Number),
          TotalLocalStorageGB: S.optional(__S(632)),
          VCpuCount: S.optional(__S(633)),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataInstanceRequirementsDetails",
      });
    case 3:
      return S.suspend(() => S.Struct({ LicenseConfigurationArn: S.optional(S.String) })).annotate({
        identifier: "AwsEc2LaunchTemplateDataLicenseSetDetails",
      });
    case 4:
      return S.Array(__S(635));
    case 5:
      return S.suspend(() => S.Struct({ AutoRecovery: S.optional(S.String) })).annotate({
        identifier: "AwsEc2LaunchTemplateDataMaintenanceOptionsDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          HttpEndpoint: S.optional(S.String),
          HttpProtocolIpv6: S.optional(S.String),
          HttpTokens: S.optional(S.String),
          HttpPutResponseHopLimit: S.optional(S.Number),
          InstanceMetadataTags: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataMetadataOptionsDetails",
      });
    case 7:
      return S.suspend(() => S.Struct({ Ipv4Prefix: S.optional(S.String) })).annotate({
        identifier: "AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails",
      });
  }
}
function __c80(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(639));
    case 1:
      return S.suspend(() => S.Struct({ Ipv6Address: S.optional(S.String) })).annotate({
        identifier: "AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails",
      });
    case 2:
      return S.Array(__S(641));
    case 3:
      return S.suspend(() => S.Struct({ Ipv6Prefix: S.optional(S.String) })).annotate({
        identifier: "AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails",
      });
    case 4:
      return S.Array(__S(643));
    case 5:
      return S.suspend(() =>
        S.Struct({ Primary: S.optional(S.Boolean), PrivateIpAddress: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails",
      });
    case 6:
      return S.Array(__S(645));
    case 7:
      return S.suspend(() =>
        S.Struct({
          AssociateCarrierIpAddress: S.optional(S.Boolean),
          AssociatePublicIpAddress: S.optional(S.Boolean),
          DeleteOnTermination: S.optional(S.Boolean),
          Description: S.optional(S.String),
          DeviceIndex: S.optional(S.Number),
          Groups: S.optional(__S(4)),
          InterfaceType: S.optional(S.String),
          Ipv4PrefixCount: S.optional(S.Number),
          Ipv4Prefixes: S.optional(__S(640)),
          Ipv6AddressCount: S.optional(S.Number),
          Ipv6Addresses: S.optional(__S(642)),
          Ipv6PrefixCount: S.optional(S.Number),
          Ipv6Prefixes: S.optional(__S(644)),
          NetworkCardIndex: S.optional(S.Number),
          NetworkInterfaceId: S.optional(S.String),
          PrivateIpAddress: S.optional(S.String),
          PrivateIpAddresses: S.optional(__S(646)),
          SecondaryPrivateIpAddressCount: S.optional(S.Number),
          SubnetId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails",
      });
  }
}
function __c81(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(647));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Affinity: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          GroupName: S.optional(S.String),
          HostId: S.optional(S.String),
          HostResourceGroupArn: S.optional(S.String),
          PartitionNumber: S.optional(S.Number),
          SpreadDomain: S.optional(S.String),
          Tenancy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataPlacementDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EnableResourceNameDnsAAAARecord: S.optional(S.Boolean),
          EnableResourceNameDnsARecord: S.optional(S.Boolean),
          HostnameType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          BlockDeviceMappingSet: S.optional(__S(619)),
          CapacityReservationSpecification: S.optional(__S(621)),
          CpuOptions: S.optional(__S(622)),
          CreditSpecification: S.optional(__S(623)),
          DisableApiStop: S.optional(S.Boolean),
          DisableApiTermination: S.optional(S.Boolean),
          EbsOptimized: S.optional(S.Boolean),
          ElasticGpuSpecificationSet: S.optional(__S(625)),
          ElasticInferenceAcceleratorSet: S.optional(__S(627)),
          EnclaveOptions: S.optional(__S(205)),
          HibernationOptions: S.optional(__S(628)),
          IamInstanceProfile: S.optional(__S(629)),
          ImageId: S.optional(S.String),
          InstanceInitiatedShutdownBehavior: S.optional(S.String),
          InstanceMarketOptions: S.optional(__S(631)),
          InstanceRequirements: S.optional(__S(634)),
          InstanceType: S.optional(S.String),
          KernelId: S.optional(S.String),
          KeyName: S.optional(S.String),
          LicenseSet: S.optional(__S(636)),
          MaintenanceOptions: S.optional(__S(637)),
          MetadataOptions: S.optional(__S(638)),
          Monitoring: S.optional(__S(205)),
          NetworkInterfaceSet: S.optional(__S(648)),
          Placement: S.optional(__S(649)),
          PrivateDnsNameOptions: S.optional(__S(650)),
          RamDiskId: S.optional(S.String),
          SecurityGroupIdSet: S.optional(__S(4)),
          SecurityGroupSet: S.optional(__S(4)),
          UserData: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LaunchTemplateName: S.optional(S.String),
          Id: S.optional(S.String),
          LaunchTemplateData: S.optional(__S(651)),
          DefaultVersionNumber: S.optional(S.Number),
          LatestVersionNumber: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ MinimumInstanceMetadataServiceVersion: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AcceleratorTypes: S.optional(__S(4)),
          AdditionalCodeRepositories: S.optional(__S(4)),
          DefaultCodeRepository: S.optional(S.String),
          DirectInternetAccess: S.optional(S.String),
          FailureReason: S.optional(S.String),
          InstanceMetadataServiceConfiguration: S.optional(__S(653)),
          InstanceType: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          NetworkInterfaceId: S.optional(S.String),
          NotebookInstanceArn: S.optional(S.String),
          NotebookInstanceLifecycleConfigName: S.optional(S.String),
          NotebookInstanceName: S.optional(S.String),
          NotebookInstanceStatus: S.optional(S.String),
          PlatformIdentifier: S.optional(S.String),
          RoleArn: S.optional(S.String),
          RootAccess: S.optional(S.String),
          SecurityGroups: S.optional(__S(4)),
          SubnetId: S.optional(S.String),
          Url: S.optional(S.String),
          VolumeSizeInGB: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsSageMakerNotebookInstanceDetails",
      });
    case 7:
      return S.suspend(() => S.Struct({ ImmunityTime: S.optional(S.Number) })).annotate({
        identifier: "AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails",
      });
  }
}
function __c82(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ImmunityTimeProperty: S.optional(__S(655)),
        }),
      ).annotate({
        identifier: "AwsWafv2WebAclCaptchaConfigDetails",
      });
    case 1:
      return S.suspend(() => S.Struct({ InsertHeaders: S.optional(__S(379)) })).annotate({
        identifier: "AwsWafv2CustomRequestHandlingDetails",
      });
    case 2:
      return S.suspend(() => S.Struct({ CustomRequestHandling: S.optional(__S(657)) })).annotate({
        identifier: "AwsWafv2ActionAllowDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CustomResponseBodyKey: S.optional(S.String),
          ResponseCode: S.optional(S.Number),
          ResponseHeaders: S.optional(__S(379)),
        }),
      ).annotate({
        identifier: "AwsWafv2CustomResponseDetails",
      });
    case 4:
      return S.suspend(() => S.Struct({ CustomResponse: S.optional(__S(659)) })).annotate({
        identifier: "AwsWafv2ActionBlockDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Allow: S.optional(__S(658)),
          Block: S.optional(__S(660)),
        }),
      ).annotate({
        identifier: "AwsWafv2WebAclActionDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Allow: S.optional(__S(658)),
          Block: S.optional(__S(660)),
          Captcha: S.optional(__S(658)),
          Count: S.optional(__S(658)),
        }),
      ).annotate({
        identifier: "AwsWafv2RulesActionDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CloudWatchMetricsEnabled: S.optional(S.Boolean),
          MetricName: S.optional(S.String),
          SampledRequestsEnabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsWafv2VisibilityConfigDetails",
      });
  }
}
function __c83(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(__S(662)),
          Name: S.optional(S.String),
          OverrideAction: S.optional(S.String),
          Priority: S.optional(S.Number),
          VisibilityConfig: S.optional(__S(663)),
        }),
      ).annotate({ identifier: "AwsWafv2RulesDetails" });
    case 1:
      return S.Array(__S(664));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          ManagedbyFirewallManager: S.optional(S.Boolean),
          Id: S.optional(S.String),
          Capacity: S.optional(S.Number),
          CaptchaConfig: S.optional(__S(656)),
          DefaultAction: S.optional(__S(661)),
          Description: S.optional(S.String),
          Rules: S.optional(__S(665)),
          VisibilityConfig: S.optional(__S(663)),
        }),
      ).annotate({ identifier: "AwsWafv2WebAclDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Capacity: S.optional(S.Number),
          Description: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          Rules: S.optional(__S(665)),
          Scope: S.optional(S.String),
          VisibilityConfig: S.optional(__S(663)),
        }),
      ).annotate({ identifier: "AwsWafv2RuleGroupDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({ State: S.optional(S.String), StatusMessage: S.optional(S.String) }),
      ).annotate({ identifier: "AssociationStateDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AssociationState: S.optional(__S(668)),
          GatewayId: S.optional(S.String),
          Main: S.optional(S.Boolean),
          RouteTableAssociationId: S.optional(S.String),
          RouteTableId: S.optional(S.String),
          SubnetId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssociationSetDetails" });
    case 6:
      return S.Array(__S(669));
    case 7:
      return S.suspend(() => S.Struct({ GatewayId: S.optional(S.String) })).annotate({
        identifier: "PropagatingVgwSetDetails",
      });
  }
}
function __c84(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(671));
    case 1:
      return S.suspend(() =>
        S.Struct({
          CarrierGatewayId: S.optional(S.String),
          CoreNetworkArn: S.optional(S.String),
          DestinationCidrBlock: S.optional(S.String),
          DestinationIpv6CidrBlock: S.optional(S.String),
          DestinationPrefixListId: S.optional(S.String),
          EgressOnlyInternetGatewayId: S.optional(S.String),
          GatewayId: S.optional(S.String),
          InstanceId: S.optional(S.String),
          InstanceOwnerId: S.optional(S.String),
          LocalGatewayId: S.optional(S.String),
          NatGatewayId: S.optional(S.String),
          NetworkInterfaceId: S.optional(S.String),
          Origin: S.optional(S.String),
          State: S.optional(S.String),
          TransitGatewayId: S.optional(S.String),
          VpcPeeringConnectionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "RouteSetDetails" });
    case 2:
      return S.Array(__S(673));
    case 3:
      return S.suspend(() =>
        S.Struct({
          AssociationSet: S.optional(__S(670)),
          OwnerId: S.optional(S.String),
          PropagatingVgwSet: S.optional(__S(672)),
          RouteTableId: S.optional(S.String),
          RouteSet: S.optional(__S(674)),
          VpcId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEc2RouteTableDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({ KmsKeyId: S.optional(S.String), UseAwsOwnedKey: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "AwsAmazonMqBrokerEncryptionOptionsDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Hosts: S.optional(__S(4)),
          RoleBase: S.optional(S.String),
          RoleName: S.optional(S.String),
          RoleSearchMatching: S.optional(S.String),
          RoleSearchSubtree: S.optional(S.Boolean),
          ServiceAccountUsername: S.optional(S.String),
          UserBase: S.optional(S.String),
          UserRoleName: S.optional(S.String),
          UserSearchMatching: S.optional(S.String),
          UserSearchSubtree: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsAmazonMqBrokerLdapServerMetadataDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Audit: S.optional(S.Boolean), General: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "AwsAmazonMqBrokerLogsPendingDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Audit: S.optional(S.Boolean),
          General: S.optional(S.Boolean),
          AuditLogGroup: S.optional(S.String),
          GeneralLogGroup: S.optional(S.String),
          Pending: S.optional(__S(678)),
        }),
      ).annotate({
        identifier: "AwsAmazonMqBrokerLogsDetails",
      });
  }
}
function __c85(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DayOfWeek: S.optional(S.String),
          TimeOfDay: S.optional(S.String),
          TimeZone: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ PendingChange: S.optional(S.String), Username: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsAmazonMqBrokerUsersDetails",
      });
    case 2:
      return S.Array(__S(681));
    case 3:
      return S.suspend(() =>
        S.Struct({
          AuthenticationStrategy: S.optional(S.String),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          BrokerArn: S.optional(S.String),
          BrokerName: S.optional(S.String),
          DeploymentMode: S.optional(S.String),
          EncryptionOptions: S.optional(__S(676)),
          EngineType: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          HostInstanceType: S.optional(S.String),
          BrokerId: S.optional(S.String),
          LdapServerMetadata: S.optional(__S(677)),
          Logs: S.optional(__S(679)),
          MaintenanceWindowStartTime: S.optional(__S(680)),
          PubliclyAccessible: S.optional(S.Boolean),
          SecurityGroups: S.optional(__S(4)),
          StorageType: S.optional(S.String),
          SubnetIds: S.optional(__S(4)),
          Users: S.optional(__S(682)),
        }),
      ).annotate({ identifier: "AwsAmazonMqBrokerDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AuthTtL: S.optional(S.Number),
          ClientId: S.optional(S.String),
          IatTtL: S.optional(S.Number),
          Issuer: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAppSyncGraphQlApiOpenIdConnectConfigDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AuthorizerResultTtlInSeconds: S.optional(S.Number),
          AuthorizerUri: S.optional(S.String),
          IdentityValidationExpression: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AppIdClientRegex: S.optional(S.String),
          AwsRegion: S.optional(S.String),
          DefaultAction: S.optional(S.String),
          UserPoolId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAppSyncGraphQlApiUserPoolConfigDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CloudWatchLogsRoleArn: S.optional(S.String),
          ExcludeVerboseContent: S.optional(S.Boolean),
          FieldLogLevel: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAppSyncGraphQlApiLogConfigDetails",
      });
  }
}
function __c86(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AuthenticationType: S.optional(S.String),
          LambdaAuthorizerConfig: S.optional(__S(685)),
          OpenIdConnectConfig: S.optional(__S(684)),
          UserPoolConfig: S.optional(__S(686)),
        }),
      ).annotate({
        identifier: "AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails",
      });
    case 1:
      return S.Array(__S(688));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApiId: S.optional(S.String),
          Id: S.optional(S.String),
          OpenIdConnectConfig: S.optional(__S(684)),
          Name: S.optional(S.String),
          LambdaAuthorizerConfig: S.optional(__S(685)),
          XrayEnabled: S.optional(S.Boolean),
          Arn: S.optional(S.String),
          UserPoolConfig: S.optional(__S(686)),
          AuthenticationType: S.optional(S.String),
          LogConfig: S.optional(__S(687)),
          AdditionalAuthenticationProviders: S.optional(__S(689)),
          WafWebAclArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAppSyncGraphQlApiDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          RegistryArn: S.optional(S.String),
          RegistryName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEventSchemasRegistryDetails",
      });
    case 4:
      return S.suspend(() => S.Struct({ Status: S.optional(S.String) })).annotate({
        identifier: "AwsGuardDutyDetectorDataSourcesCloudTrailDetails",
      });
    case 5:
      return S.suspend(() => S.Struct({ Status: S.optional(S.String) })).annotate({
        identifier: "AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AuditLogs: S.optional(__S(693)),
        }),
      ).annotate({
        identifier: "AwsGuardDutyDetectorDataSourcesKubernetesDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Reason: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier:
          "AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails",
      });
  }
}
function __c87(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EbsVolumes: S.optional(__S(695)),
        }),
      ).annotate({
        identifier:
          "AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ScanEc2InstanceWithFindings: S.optional(__S(696)),
          ServiceRole: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CloudTrail: S.optional(__S(692)),
          DnsLogs: S.optional(__S(692)),
          FlowLogs: S.optional(__S(692)),
          Kubernetes: S.optional(__S(694)),
          MalwareProtection: S.optional(__S(697)),
          S3Logs: S.optional(__S(692)),
        }),
      ).annotate({
        identifier: "AwsGuardDutyDetectorDataSourcesDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsGuardDutyDetectorFeaturesDetails",
      });
    case 4:
      return S.Array(__S(699));
    case 5:
      return S.suspend(() =>
        S.Struct({
          DataSources: S.optional(__S(698)),
          Features: S.optional(__S(700)),
          FindingPublishingFrequency: S.optional(S.String),
          ServiceRole: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsGuardDutyDetectorDetails",
      });
    case 6:
      return S.suspend(() => S.Struct({ LogGroupArn: S.optional(S.String) })).annotate({
        identifier:
          "AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CloudWatchLogsLogGroup: S.optional(__S(702)),
        }),
      ).annotate({
        identifier: "AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails",
      });
  }
}
function __c88(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(703));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Destinations: S.optional(__S(704)),
          IncludeExecutionData: S.optional(S.Boolean),
          Level: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsStepFunctionStateMachineLoggingConfigurationDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Label: S.optional(S.String),
          LoggingConfiguration: S.optional(__S(705)),
          Name: S.optional(S.String),
          RoleArn: S.optional(S.String),
          StateMachineArn: S.optional(S.String),
          Status: S.optional(S.String),
          TracingConfiguration: S.optional(__S(205)),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsStepFunctionStateMachineDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ EncryptionOption: S.optional(S.String), KmsKey: S.optional(S.String) }),
      ).annotate({
        identifier:
          "AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EncryptionConfiguration: S.optional(__S(707)),
        }),
      ).annotate({
        identifier: "AwsAthenaWorkGroupConfigurationResultConfigurationDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResultConfiguration: S.optional(__S(708)),
        }),
      ).annotate({
        identifier: "AwsAthenaWorkGroupConfigurationDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          State: S.optional(S.String),
          Configuration: S.optional(__S(709)),
        }),
      ).annotate({
        identifier: "AwsAthenaWorkGroupDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Policy: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEventsEventbusDetails" });
  }
}
function __c89(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CertificateArn: S.optional(S.String),
          DatabaseName: S.optional(S.String),
          EndpointArn: S.optional(S.String),
          EndpointIdentifier: S.optional(S.String),
          EndpointType: S.optional(S.String),
          EngineName: S.optional(S.String),
          ExternalId: S.optional(S.String),
          ExtraConnectionAttributes: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          Port: S.optional(S.Number),
          ServerName: S.optional(S.String),
          SslMode: S.optional(S.String),
          Username: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsDmsEndpointDetails" });
    case 1:
      return S.suspend(() => S.Struct({ EventBusArn: S.optional(S.String) })).annotate({
        identifier: "AwsEventsEndpointEventBusesDetails",
      });
    case 2:
      return S.Array(__S(713));
    case 3:
      return S.suspend(() => S.Struct({ HealthCheck: S.optional(S.String) })).annotate({
        identifier: "AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails",
      });
    case 4:
      return S.suspend(() => S.Struct({ Route: S.optional(S.String) })).annotate({
        identifier: "AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Primary: S.optional(__S(715)),
          Secondary: S.optional(__S(716)),
        }),
      ).annotate({
        identifier: "AwsEventsEndpointRoutingConfigFailoverConfigDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FailoverConfig: S.optional(__S(717)),
        }),
      ).annotate({
        identifier: "AwsEventsEndpointRoutingConfigDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Description: S.optional(S.String),
          EndpointId: S.optional(S.String),
          EndpointUrl: S.optional(S.String),
          EventBuses: S.optional(__S(714)),
          Name: S.optional(S.String),
          ReplicationConfig: S.optional(__S(150)),
          RoleArn: S.optional(S.String),
          RoutingConfig: S.optional(__S(718)),
          State: S.optional(S.String),
          StateReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEventsEndpointDetails" });
  }
}
function __c90(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CdcStartPosition: S.optional(S.String),
          CdcStartTime: S.optional(S.String),
          CdcStopPosition: S.optional(S.String),
          MigrationType: S.optional(S.String),
          Id: S.optional(S.String),
          ResourceIdentifier: S.optional(S.String),
          ReplicationInstanceArn: S.optional(S.String),
          ReplicationTaskIdentifier: S.optional(S.String),
          ReplicationTaskSettings: S.optional(S.String),
          SourceEndpointArn: S.optional(S.String),
          TableMappings: S.optional(S.String),
          TargetEndpointArn: S.optional(S.String),
          TaskData: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsDmsReplicationTaskDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ReplicationSubnetGroupIdentifier: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsDmsReplicationInstanceReplicationSubnetGroupDetails",
      });
    case 2:
      return S.suspend(() => S.Struct({ VpcSecurityGroupId: S.optional(S.String) })).annotate({
        identifier: "AwsDmsReplicationInstanceVpcSecurityGroupsDetails",
      });
    case 3:
      return S.Array(__S(722));
    case 4:
      return S.suspend(() =>
        S.Struct({
          AllocatedStorage: S.optional(S.Number),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          AvailabilityZone: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          MultiAZ: S.optional(S.Boolean),
          PreferredMaintenanceWindow: S.optional(S.String),
          PubliclyAccessible: S.optional(S.Boolean),
          ReplicationInstanceClass: S.optional(S.String),
          ReplicationInstanceIdentifier: S.optional(S.String),
          ReplicationSubnetGroup: S.optional(__S(721)),
          VpcSecurityGroups: S.optional(__S(723)),
        }),
      ).annotate({
        identifier: "AwsDmsReplicationInstanceDetails",
      });
    case 5:
      return S.suspend(() => S.Struct({ Comment: S.optional(S.String) })).annotate({
        identifier: "AwsRoute53HostedZoneConfigDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Config: S.optional(__S(725)),
        }),
      ).annotate({
        identifier: "AwsRoute53HostedZoneObjectDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Id: S.optional(S.String), Region: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRoute53HostedZoneVpcDetails",
      });
  }
}
function __c91(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(727));
    case 1:
      return S.suspend(() =>
        S.Struct({
          CloudWatchLogsLogGroupArn: S.optional(S.String),
          HostedZoneId: S.optional(S.String),
          Id: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CloudWatchLogsLogGroupArnConfigDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ CloudWatchLogsLogGroupArn: S.optional(__S(729)) }),
      ).annotate({
        identifier: "AwsRoute53QueryLoggingConfigDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          HostedZone: S.optional(__S(726)),
          Vpcs: S.optional(__S(728)),
          NameServers: S.optional(__S(4)),
          QueryLoggingConfig: S.optional(__S(730)),
        }),
      ).annotate({
        identifier: "AwsRoute53HostedZoneDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ InCluster: S.optional(S.Boolean), ClientBroker: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails",
      });
    case 5:
      return S.suspend(() => S.Struct({ DataVolumeKMSKeyId: S.optional(S.String) })).annotate({
        identifier: "AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EncryptionInTransit: S.optional(__S(732)),
          EncryptionAtRest: S.optional(__S(733)),
        }),
      ).annotate({
        identifier: "AwsMskClusterClusterInfoEncryptionInfoDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Iam: S.optional(__S(488)),
          Scram: S.optional(__S(488)),
        }),
      ).annotate({
        identifier: "AwsMskClusterClusterInfoClientAuthenticationSaslDetails",
      });
  }
}
function __c92(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Enabled: S.optional(S.Boolean) })).annotate({
        identifier: "AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CertificateAuthorityArnList: S.optional(__S(4)),
          Enabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsMskClusterClusterInfoClientAuthenticationTlsDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Sasl: S.optional(__S(735)),
          Unauthenticated: S.optional(__S(736)),
          Tls: S.optional(__S(737)),
        }),
      ).annotate({
        identifier: "AwsMskClusterClusterInfoClientAuthenticationDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EncryptionInfo: S.optional(__S(734)),
          CurrentVersion: S.optional(S.String),
          NumberOfBrokerNodes: S.optional(S.Number),
          ClusterName: S.optional(S.String),
          ClientAuthentication: S.optional(__S(738)),
          EnhancedMonitoring: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsMskClusterClusterInfoDetails",
      });
    case 4:
      return S.suspend(() => S.Struct({ ClusterInfo: S.optional(__S(739)) })).annotate({
        identifier: "AwsMskClusterDetails",
      });
    case 5:
      return S.suspend(() => S.Struct({ VpcId: S.optional(S.String) })).annotate({
        identifier: "AwsS3AccessPointVpcConfigurationDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccessPointArn: S.optional(S.String),
          Alias: S.optional(S.String),
          Bucket: S.optional(S.String),
          BucketAccountId: S.optional(S.String),
          Name: S.optional(S.String),
          NetworkOrigin: S.optional(S.String),
          PublicAccessBlockConfiguration: S.optional(__S(226)),
          VpcConfiguration: S.optional(__S(741)),
        }),
      ).annotate({ identifier: "AwsS3AccessPointDetails" });
    case 7:
      return S.suspend(() => S.Struct({ DirectoryId: S.optional(S.String) })).annotate({
        identifier: "AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails",
      });
  }
}
function __c93(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ClientRootCertificateChain: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SamlProviderArn: S.optional(S.String),
          SelfServiceSamlProviderArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          ActiveDirectory: S.optional(__S(743)),
          MutualAuthentication: S.optional(__S(744)),
          FederatedAuthentication: S.optional(__S(745)),
        }),
      ).annotate({
        identifier: "AwsEc2ClientVpnEndpointAuthenticationOptionsDetails",
      });
    case 3:
      return S.Array(__S(746));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          CloudwatchLogGroup: S.optional(S.String),
          CloudwatchLogStream: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2ClientVpnEndpointConnectionLogOptionsDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          LambdaFunctionArn: S.optional(S.String),
          Status: S.optional(__S(749)),
        }),
      ).annotate({
        identifier: "AwsEc2ClientVpnEndpointClientConnectOptionsDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), BannerText: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails",
      });
  }
}
function __c94(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClientVpnEndpointId: S.optional(S.String),
          Description: S.optional(S.String),
          ClientCidrBlock: S.optional(S.String),
          DnsServer: S.optional(__S(4)),
          SplitTunnel: S.optional(S.Boolean),
          TransportProtocol: S.optional(S.String),
          VpnPort: S.optional(S.Number),
          ServerCertificateArn: S.optional(S.String),
          AuthenticationOptions: S.optional(__S(747)),
          ConnectionLogOptions: S.optional(__S(748)),
          SecurityGroupIdSet: S.optional(__S(4)),
          VpcId: S.optional(S.String),
          SelfServicePortalUrl: S.optional(S.String),
          ClientConnectOptions: S.optional(__S(750)),
          SessionTimeoutHours: S.optional(S.Number),
          ClientLoginBannerOptions: S.optional(__S(751)),
        }),
      ).annotate({
        identifier: "AwsEc2ClientVpnEndpointDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProviderType: S.optional(S.String),
          ProjectName: S.optional(S.String),
          CodeSecurityIntegrationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "CodeRepositoryDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AwsAutoScalingAutoScalingGroup: S.optional(__S(117)),
          AwsCodeBuildProject: S.optional(__S(129)),
          AwsCloudFrontDistribution: S.optional(__S(146)),
          AwsEc2Instance: S.optional(__S(151)),
          AwsEc2NetworkInterface: S.optional(__S(159)),
          AwsEc2SecurityGroup: S.optional(__S(170)),
          AwsEc2Volume: S.optional(__S(173)),
          AwsEc2Vpc: S.optional(__S(178)),
          AwsEc2Eip: S.optional(__S(179)),
          AwsEc2Subnet: S.optional(__S(180)),
          AwsEc2NetworkAcl: S.optional(__S(187)),
          AwsElbv2LoadBalancer: S.optional(__S(192)),
          AwsElasticBeanstalkEnvironment: S.optional(__S(198)),
          AwsElasticsearchDomain: S.optional(__S(208)),
          AwsS3Bucket: S.optional(__S(245)),
          AwsS3AccountPublicAccessBlock: S.optional(__S(226)),
          AwsS3Object: S.optional(__S(246)),
          AwsSecretsManagerSecret: S.optional(__S(248)),
          AwsIamAccessKey: S.optional(__S(252)),
          AwsIamUser: S.optional(__S(258)),
          AwsIamPolicy: S.optional(__S(261)),
          AwsApiGatewayV2Stage: S.optional(__S(264)),
          AwsApiGatewayV2Api: S.optional(__S(266)),
          AwsDynamoDbTable: S.optional(__S(286)),
          AwsApiGatewayStage: S.optional(__S(290)),
          AwsApiGatewayRestApi: S.optional(__S(292)),
          AwsCloudTrailTrail: S.optional(__S(293)),
          AwsSsmPatchCompliance: S.optional(__S(296)),
          AwsCertificateManagerCertificate: S.optional(__S(306)),
          AwsRedshiftCluster: S.optional(__S(329)),
          AwsElbLoadBalancer: S.optional(__S(349)),
          AwsIamGroup: S.optional(__S(350)),
          AwsIamRole: S.optional(__S(355)),
          AwsKmsKey: S.optional(__S(356)),
          AwsLambdaFunction: S.optional(__S(365)),
          AwsLambdaLayerVersion: S.optional(__S(366)),
          AwsRdsDbInstance: S.optional(__S(387)),
          AwsSnsTopic: S.optional(__S(390)),
          AwsSqsQueue: S.optional(__S(391)),
          AwsWafWebAcl: S.optional(__S(397)),
          AwsRdsDbSnapshot: S.optional(__S(398)),
          AwsRdsDbClusterSnapshot: S.optional(__S(401)),
          AwsRdsDbCluster: S.optional(__S(408)),
          AwsEcsCluster: S.optional(__S(416)),
          AwsEcsContainer: S.optional(__S(419)),
          AwsEcsTaskDefinition: S.optional(__S(468)),
          Container: S.optional(__S(471)),
          Other: S.optional(__S(31)),
          AwsRdsEventSubscription: S.optional(__S(472)),
          AwsEcsService: S.optional(__S(484)),
          AwsAutoScalingLaunchConfiguration: S.optional(__S(490)),
          AwsEc2VpnConnection: S.optional(__S(498)),
          AwsEcrContainerImage: S.optional(__S(499)),
          AwsOpenSearchServiceDomain: S.optional(__S(507)),
          AwsEc2VpcEndpointService: S.optional(__S(510)),
          AwsXrayEncryptionConfig: S.optional(__S(511)),
          AwsWafRateBasedRule: S.optional(__S(514)),
          AwsWafRegionalRateBasedRule: S.optional(__S(514)),
          AwsEcrRepository: S.optional(__S(517)),
          AwsEksCluster: S.optional(__S(522)),
          AwsNetworkFirewallFirewallPolicy: S.optional(__S(534)),
          AwsNetworkFirewallFirewall: S.optional(__S(537)),
          AwsNetworkFirewallRuleGroup: S.optional(__S(562)),
          AwsRdsDbSecurityGroup: S.optional(__S(567)),
          AwsKinesisStream: S.optional(__S(569)),
          AwsEc2TransitGateway: S.optional(__S(570)),
          AwsEfsAccessPoint: S.optional(__S(574)),
          AwsCloudFormationStack: S.optional(__S(578)),
          AwsCloudWatchAlarm: S.optional(__S(579)),
          AwsEc2VpcPeeringConnection: S.optional(__S(587)),
          AwsWafRegionalRuleGroup: S.optional(__S(590)),
          AwsWafRegionalRule: S.optional(__S(591)),
          AwsWafRegionalWebAcl: S.optional(__S(594)),
          AwsWafRule: S.optional(__S(596)),
          AwsWafRuleGroup: S.optional(__S(598)),
          AwsEcsTask: S.optional(__S(602)),
          AwsBackupBackupVault: S.optional(__S(604)),
          AwsBackupBackupPlan: S.optional(__S(613)),
          AwsBackupRecoveryPoint: S.optional(__S(616)),
          AwsEc2LaunchTemplate: S.optional(__S(652)),
          AwsSageMakerNotebookInstance: S.optional(__S(654)),
          AwsWafv2WebAcl: S.optional(__S(666)),
          AwsWafv2RuleGroup: S.optional(__S(667)),
          AwsEc2RouteTable: S.optional(__S(675)),
          AwsAmazonMqBroker: S.optional(__S(683)),
          AwsAppSyncGraphQlApi: S.optional(__S(690)),
          AwsEventSchemasRegistry: S.optional(__S(691)),
          AwsGuardDutyDetector: S.optional(__S(701)),
          AwsStepFunctionStateMachine: S.optional(__S(706)),
          AwsAthenaWorkGroup: S.optional(__S(710)),
          AwsEventsEventbus: S.optional(__S(711)),
          AwsDmsEndpoint: S.optional(__S(712)),
          AwsEventsEndpoint: S.optional(__S(719)),
          AwsDmsReplicationTask: S.optional(__S(720)),
          AwsDmsReplicationInstance: S.optional(__S(724)),
          AwsRoute53HostedZone: S.optional(__S(731)),
          AwsMskCluster: S.optional(__S(740)),
          AwsS3AccessPoint: S.optional(__S(742)),
          AwsEc2ClientVpnEndpoint: S.optional(__S(752)),
          CodeRepository: S.optional(__S(753)),
          AzureResource: S.optional(S.Any),
        }),
      ).annotate({ identifier: "ResourceDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Id: S.optional(S.String),
          Partition: S.optional(S.String),
          Region: S.optional(S.String),
          Provider: S.optional(S.String),
          Owner: S.optional(__S(88)),
          ResourceRole: S.optional(S.String),
          Tags: S.optional(__S(31)),
          DataClassification: S.optional(__S(107)),
          Details: S.optional(__S(754)),
          ApplicationName: S.optional(S.String),
          ApplicationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Resource" });
    case 4:
      return S.Array(__S(755));
    case 5:
      return S.suspend(() =>
        S.Struct({ ReasonCode: S.optional(S.String), Description: S.optional(S.String) }),
      ).annotate({ identifier: "StatusReason" });
    case 6:
      return S.Array(__S(757));
    case 7:
      return S.suspend(() => S.Struct({ StandardsId: S.optional(S.String) })).annotate({
        identifier: "AssociatedStandard",
      });
  }
}
function __c95(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(759));
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(__S(4)) }),
      ).annotate({ identifier: "SecurityControlParameter" });
    case 2:
      return S.Array(__S(761));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          RelatedRequirements: S.optional(__S(4)),
          StatusReasons: S.optional(__S(758)),
          SecurityControlId: S.optional(S.String),
          AssociatedStandards: S.optional(__S(760)),
          SecurityControlParameters: S.optional(__S(762)),
        }),
      ).annotate({ identifier: "Compliance" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Text: S.optional(S.String),
          UpdatedBy: S.optional(S.String),
          UpdatedAt: S.optional(S.String),
        }),
      ).annotate({ identifier: "Note" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Version: S.optional(S.String),
          Epoch: S.optional(S.String),
          Release: S.optional(S.String),
          Architecture: S.optional(S.String),
          PackageManager: S.optional(S.String),
          FilePath: S.optional(S.String),
          FixedInVersion: S.optional(S.String),
          Remediation: S.optional(S.String),
          SourceLayerHash: S.optional(S.String),
          SourceLayerArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "SoftwarePackage" });
    case 6:
      return S.Array(__S(765));
    case 7:
      return S.suspend(() =>
        S.Struct({ Metric: S.optional(S.String), Reason: S.optional(S.String) }),
      ).annotate({ identifier: "Adjustment" });
  }
}
function __c96(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(767));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Version: S.optional(S.String),
          BaseScore: S.optional(S.Number),
          BaseVector: S.optional(S.String),
          Source: S.optional(S.String),
          Adjustments: S.optional(__S(768)),
        }),
      ).annotate({ identifier: "Cvss" });
    case 2:
      return S.Array(__S(769));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Url: S.optional(S.String),
          VendorSeverity: S.optional(S.String),
          VendorCreatedAt: S.optional(S.String),
          VendorUpdatedAt: S.optional(S.String),
        }),
      ).annotate({ identifier: "VulnerabilityVendor" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EndLine: S.optional(S.Number),
          FileName: S.optional(S.String),
          FilePath: S.optional(S.String),
          StartLine: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CodeVulnerabilitiesFilePath",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Cwes: S.optional(__S(4)),
          FilePath: S.optional(__S(772)),
          SourceArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "VulnerabilityCodeVulnerabilities",
      });
    case 6:
      return S.Array(__S(773));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          VulnerablePackages: S.optional(__S(766)),
          Cvss: S.optional(__S(770)),
          RelatedVulnerabilities: S.optional(__S(4)),
          Vendor: S.optional(__S(771)),
          ReferenceUrls: S.optional(__S(4)),
          FixAvailable: S.optional(S.String),
          EpssScore: S.optional(S.Number),
          ExploitAvailable: S.optional(S.String),
          LastKnownExploitAt: S.optional(S.String),
          CodeVulnerabilities: S.optional(__S(774)),
        }),
      ).annotate({ identifier: "Vulnerability" });
  }
}
function __c97(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(775));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          InstalledCount: S.optional(S.Number),
          MissingCount: S.optional(S.Number),
          FailedCount: S.optional(S.Number),
          InstalledOtherCount: S.optional(S.Number),
          InstalledRejectedCount: S.optional(S.Number),
          InstalledPendingReboot: S.optional(S.Number),
          OperationStartTime: S.optional(S.String),
          OperationEndTime: S.optional(S.String),
          RebootOption: S.optional(S.String),
          Operation: S.optional(S.String),
        }),
      ).annotate({ identifier: "PatchSummary" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Asn: S.optional(S.Number),
          AsnOrg: S.optional(S.String),
          Isp: S.optional(S.String),
          Org: S.optional(S.String),
        }),
      ).annotate({ identifier: "IpOrganizationDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({ CountryCode: S.optional(S.String), CountryName: S.optional(S.String) }),
      ).annotate({ identifier: "Country" });
    case 4:
      return S.suspend(() => S.Struct({ CityName: S.optional(S.String) })).annotate({
        identifier: "City",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Lon: S.optional(S.Number), Lat: S.optional(S.Number) }),
      ).annotate({ identifier: "GeoLocation" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          IpAddressV4: S.optional(S.String),
          Organization: S.optional(__S(778)),
          Country: S.optional(__S(779)),
          City: S.optional(__S(780)),
          GeoLocation: S.optional(__S(781)),
        }),
      ).annotate({ identifier: "ActionRemoteIpDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Port: S.optional(S.Number), PortName: S.optional(S.String) }),
      ).annotate({ identifier: "ActionRemotePortDetails" });
  }
}
function __c98(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ConnectionDirection: S.optional(S.String),
          RemoteIpDetails: S.optional(__S(782)),
          RemotePortDetails: S.optional(__S(783)),
          LocalPortDetails: S.optional(__S(783)),
          Protocol: S.optional(S.String),
          Blocked: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "NetworkConnectionAction" });
    case 1:
      return S.suspend(() => S.Struct({ Domain: S.optional(S.String) })).annotate({
        identifier: "AwsApiCallActionDomainDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Api: S.optional(S.String),
          ServiceName: S.optional(S.String),
          CallerType: S.optional(S.String),
          RemoteIpDetails: S.optional(__S(782)),
          DomainDetails: S.optional(__S(785)),
          AffectedResources: S.optional(__S(31)),
          FirstSeen: S.optional(S.String),
          LastSeen: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsApiCallAction" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Domain: S.optional(S.String),
          Protocol: S.optional(S.String),
          Blocked: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DnsRequestAction" });
    case 4:
      return S.suspend(() => S.Struct({ IpAddressV4: S.optional(S.String) })).annotate({
        identifier: "ActionLocalIpDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LocalPortDetails: S.optional(__S(783)),
          LocalIpDetails: S.optional(__S(788)),
          RemoteIpDetails: S.optional(__S(782)),
        }),
      ).annotate({ identifier: "PortProbeDetail" });
    case 6:
      return S.Array(__S(789));
    case 7:
      return S.suspend(() =>
        S.Struct({
          PortProbeDetails: S.optional(__S(790)),
          Blocked: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "PortProbeAction" });
  }
}
function __c99(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ActionType: S.optional(S.String),
          NetworkConnectionAction: S.optional(__S(784)),
          AwsApiCallAction: S.optional(__S(786)),
          DnsRequestAction: S.optional(__S(787)),
          PortProbeAction: S.optional(__S(791)),
        }),
      ).annotate({ identifier: "Action" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Label: S.optional(S.String), Original: S.optional(S.String) }),
      ).annotate({ identifier: "FindingProviderSeverity" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Confidence: S.optional(S.Number),
          Criticality: S.optional(S.Number),
          RelatedFindings: S.optional(__S(34)),
          Severity: S.optional(__S(793)),
          Types: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "FindingProviderFields" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Labels: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "GeneratorDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Uid: S.optional(S.String), Name: S.optional(S.String) }),
      ).annotate({ identifier: "UserAccount" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Uid: S.optional(S.String),
          Type: S.optional(S.String),
          CredentialUid: S.optional(S.String),
          Account: S.optional(__S(796)),
        }),
      ).annotate({ identifier: "ActorUser" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Uid: S.optional(S.String),
          MfaStatus: S.optional(S.String),
          CreatedTime: S.optional(S.Number),
          Issuer: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActorSession" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          User: S.optional(__S(797)),
          Session: S.optional(__S(798)),
        }),
      ).annotate({ identifier: "Actor" });
  }
}
function __c100(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(799));
    case 1:
      return S.suspend(() =>
        S.Struct({
          City: S.optional(S.String),
          Country: S.optional(S.String),
          Lat: S.optional(S.Number),
          Lon: S.optional(S.Number),
        }),
      ).annotate({ identifier: "NetworkGeoLocation" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Number: S.optional(S.Number) }),
      ).annotate({ identifier: "NetworkAutonomousSystem" });
    case 3:
      return S.suspend(() => S.Struct({ Direction: S.optional(S.String) })).annotate({
        identifier: "NetworkConnection",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Ip: S.optional(S.String),
          Domain: S.optional(S.String),
          Port: S.optional(S.Number),
          Location: S.optional(__S(801)),
          AutonomousSystem: S.optional(__S(802)),
          Connection: S.optional(__S(803)),
        }),
      ).annotate({ identifier: "NetworkEndpoint" });
    case 5:
      return S.Array(__S(804));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(S.String),
          Values: S.optional(__S(4)),
          Title: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "Indicator" });
    case 7:
      return S.Array(__S(806));
  }
}
function __c101(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Id: S.optional(S.String),
          Title: S.optional(S.String),
          ProductArn: S.optional(S.String),
          ResourceIds: S.optional(__S(4)),
          SignalIndicators: S.optional(__S(807)),
          Name: S.optional(S.String),
          CreatedAt: S.optional(S.Number),
          UpdatedAt: S.optional(S.Number),
          FirstSeenAt: S.optional(S.Number),
          LastSeenAt: S.optional(S.Number),
          Severity: S.optional(S.Number),
          Count: S.optional(S.Number),
          ActorIds: S.optional(__S(4)),
          EndpointIds: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "Signal" });
    case 1:
      return S.Array(__S(808));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Uid: S.optional(S.String),
          Actors: S.optional(__S(800)),
          Endpoints: S.optional(__S(805)),
          Signals: S.optional(__S(809)),
          SequenceIndicators: S.optional(__S(807)),
        }),
      ).annotate({ identifier: "Sequence" });
    case 3:
      return S.suspend(() => S.Struct({ Sequence: S.optional(__S(810)) })).annotate({
        identifier: "Detection",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SchemaVersion: S.optional(S.String),
          Id: S.optional(S.String),
          ProductArn: S.optional(S.String),
          ProductName: S.optional(S.String),
          CompanyName: S.optional(S.String),
          Region: S.optional(S.String),
          GeneratorId: S.optional(S.String),
          AwsAccountId: S.optional(S.String),
          Types: S.optional(__S(4)),
          FirstObservedAt: S.optional(S.String),
          LastObservedAt: S.optional(S.String),
          CreatedAt: S.optional(S.String),
          UpdatedAt: S.optional(S.String),
          Severity: S.optional(__S(68)),
          Confidence: S.optional(S.Number),
          Criticality: S.optional(S.Number),
          Title: S.optional(S.String),
          Description: S.optional(S.String),
          Remediation: S.optional(__S(70)),
          SourceUrl: S.optional(S.String),
          ProductFields: S.optional(__S(31)),
          UserDefinedFields: S.optional(__S(31)),
          Malware: S.optional(__S(72)),
          Network: S.optional(__S(74)),
          NetworkPath: S.optional(__S(79)),
          Process: S.optional(__S(80)),
          Threats: S.optional(__S(84)),
          ThreatIntelIndicators: S.optional(__S(86)),
          Resources: S.optional(__S(756)),
          Compliance: S.optional(__S(763)),
          VerificationState: S.optional(S.String),
          WorkflowState: S.optional(S.String),
          Workflow: S.optional(__S(32)),
          RecordState: S.optional(S.String),
          RelatedFindings: S.optional(__S(34)),
          Note: S.optional(__S(764)),
          Vulnerabilities: S.optional(__S(776)),
          PatchSummary: S.optional(__S(777)),
          Action: S.optional(__S(792)),
          FindingProviderFields: S.optional(__S(794)),
          Sample: S.optional(S.Boolean),
          GeneratorDetails: S.optional(__S(795)),
          ProcessedAt: S.optional(S.String),
          AwsAccountName: S.optional(S.String),
          Detection: S.optional(__S(811)),
        }),
      ).annotate({ identifier: "AwsSecurityFinding" });
    case 5:
      return S.Array(__S(812));
    case 6:
      return S.suspend(() =>
        S.Struct({ Findings: S.optional(__S(813)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/findings/import" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchImportFindingsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImportFindingsError" });
  }
}
function __c102(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(815));
    case 1:
      return S.suspend(() =>
        S.Struct({
          FailedCount: S.optional(S.Number),
          SuccessCount: S.optional(S.Number),
          FailedFindings: S.optional(__S(816)),
        }),
      ).annotate({
        identifier: "BatchImportFindingsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RuleArn: S.optional(S.String),
          RuleStatus: S.optional(S.String),
          RuleOrder: S.optional(S.Number),
          Description: S.optional(S.String),
          RuleName: S.optional(S.String),
          IsTerminal: S.optional(S.Boolean),
          Criteria: S.optional(__S(28)),
          Actions: S.optional(__S(37)),
        }),
      ).annotate({
        identifier: "UpdateAutomationRulesRequestItem",
      });
    case 3:
      return S.Array(__S(818));
    case 4:
      return S.suspend(() =>
        S.Struct({
          UpdateAutomationRulesRequestItems: S.optional(__S(819)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/automationrules/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchUpdateAutomationRulesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Id: S.optional(S.String), ProductArn: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsSecurityFindingIdentifier",
      });
    case 6:
      return S.Array(__S(821));
    case 7:
      return S.suspend(() =>
        S.Struct({
          FindingIdentifiers: S.optional(__S(822)),
          Note: S.optional(__S(29)),
          Severity: S.optional(__S(30)),
          VerificationState: S.optional(S.String),
          Confidence: S.optional(S.Number),
          Criticality: S.optional(S.Number),
          Types: S.optional(__S(4)),
          UserDefinedFields: S.optional(__S(31)),
          Workflow: S.optional(__S(32)),
          RelatedFindings: S.optional(__S(34)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/findings/batchupdate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchUpdateFindingsRequest",
      });
  }
}
function __c103(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FindingIdentifier: S.optional(__S(821)),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchUpdateFindingsUnprocessedFinding",
      });
    case 1:
      return S.Array(__S(824));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProcessedFindings: S.optional(__S(822)),
          UnprocessedFindings: S.optional(__S(825)),
        }),
      ).annotate({
        identifier: "BatchUpdateFindingsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CloudAccountUid: S.optional(S.String),
          FindingInfoUid: S.optional(S.String),
          MetadataProductUid: S.optional(S.String),
        }),
      ).annotate({ identifier: "OcsfFindingIdentifier" });
    case 4:
      return S.Array(__S(827));
    case 5:
      return S.suspend(() =>
        S.Struct({
          MetadataUids: S.optional(__S(4)),
          FindingIdentifiers: S.optional(__S(828)),
          Comment: S.optional(S.String),
          SeverityId: S.optional(S.Number),
          StatusId: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/findingsv2/batchupdatev2" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchUpdateFindingsV2Request",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FindingIdentifier: S.optional(__S(827)),
          MetadataUid: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchUpdateFindingsV2ProcessedFinding",
      });
    case 7:
      return S.Array(__S(830));
  }
}
function __c104(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FindingIdentifier: S.optional(__S(827)),
          MetadataUid: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchUpdateFindingsV2UnprocessedFinding",
      });
    case 1:
      return S.Array(__S(832));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProcessedFindings: S.optional(__S(831)),
          UnprocessedFindings: S.optional(__S(833)),
        }),
      ).annotate({
        identifier: "BatchUpdateFindingsV2Response",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StandardsArn: S.optional(S.String),
          SecurityControlId: S.optional(S.String),
          AssociationStatus: S.optional(S.String),
          UpdatedReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StandardsControlAssociationUpdate",
      });
    case 4:
      return S.Array(__S(835));
    case 5:
      return S.suspend(() =>
        S.Struct({
          StandardsControlAssociationUpdates: S.optional(__S(836)),
        }).pipe(
          T.all(T.Http({ method: "PATCH", uri: "/associations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchUpdateStandardsControlAssociationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StandardsControlAssociationUpdate: S.optional(__S(835)),
          ErrorCode: S.optional(S.String),
          ErrorReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UnprocessedStandardsControlAssociationUpdate",
      });
    case 7:
      return S.Array(__S(838));
  }
}
function __c105(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UnprocessedAssociationUpdates: S.optional(__S(839)),
        }),
      ).annotate({
        identifier: "BatchUpdateStandardsControlAssociationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Id: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/actionTargets" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateActionTargetRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ ActionTargetArn: S.optional(S.String) })).annotate({
        identifier: "CreateActionTargetResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RegionLinkingMode: S.optional(S.String),
          LinkedRegions: S.optional(__S(4)),
          Tags: S.optional(__S(31)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/aggregatorv2/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAggregatorV2Request",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AggregatorV2Arn: S.optional(S.String),
          AggregationRegion: S.optional(S.String),
          RegionLinkingMode: S.optional(S.String),
          LinkedRegions: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "CreateAggregatorV2Response",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Tags: S.optional(__S(31)),
          RuleStatus: S.optional(S.String),
          RuleOrder: S.optional(S.Number),
          RuleName: S.optional(S.String),
          Description: S.optional(S.String),
          IsTerminal: S.optional(S.Boolean),
          Criteria: S.optional(__S(28)),
          Actions: S.optional(__S(37)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/automationrules/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAutomationRuleRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ RuleArn: S.optional(S.String) })).annotate({
        identifier: "CreateAutomationRuleResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ FieldName: S.optional(S.String), Filter: S.optional(__S(19)) }),
      ).annotate({ identifier: "OcsfStringFilter" });
  }
}
function __c106(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(847));
    case 1:
      return S.suspend(() =>
        S.Struct({ FieldName: S.optional(S.String), Filter: S.optional(__S(22)) }),
      ).annotate({ identifier: "OcsfDateFilter" });
    case 2:
      return S.Array(__S(849));
    case 3:
      return S.suspend(() => S.Struct({ Value: S.optional(S.Boolean) })).annotate({
        identifier: "BooleanFilter",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ FieldName: S.optional(S.String), Filter: S.optional(__S(851)) }),
      ).annotate({ identifier: "OcsfBooleanFilter" });
    case 5:
      return S.Array(__S(852));
    case 6:
      return S.suspend(() =>
        S.Struct({ FieldName: S.optional(S.String), Filter: S.optional(__S(24)) }),
      ).annotate({ identifier: "OcsfNumberFilter" });
    case 7:
      return S.Array(__S(854));
  }
}
function __c107(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ FieldName: S.optional(S.String), Filter: S.optional(__S(26)) }),
      ).annotate({ identifier: "OcsfMapFilter" });
    case 1:
      return S.Array(__S(856));
    case 2:
      return S.suspend(() => S.Struct({ Cidr: S.optional(S.String) })).annotate({
        identifier: "IpFilter",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ FieldName: S.optional(S.String), Filter: S.optional(__S(858)) }),
      ).annotate({ identifier: "OcsfIpFilter" });
    case 4:
      return S.Array(__S(859));
    case 5:
      return S.suspend(() =>
        S.Struct({
          StringFilters: S.optional(__S(848)),
          DateFilters: S.optional(__S(850)),
          BooleanFilters: S.optional(__S(853)),
          NumberFilters: S.optional(__S(855)),
          MapFilters: S.optional(__S(857)),
          IpFilters: S.optional(__S(860)),
          NestedCompositeFilters: S.optional(
            S.suspend(() => __S(862)).annotate({ identifier: "CompositeFilterList" }),
          ),
          Operator: S.optional(S.String),
        }),
      ).annotate({ identifier: "CompositeFilter" });
    case 6:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<CompositeFilter> => __S(861)).annotate({
          identifier: "CompositeFilter",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          CompositeFilters: S.optional(__S(862)),
          CompositeOperator: S.optional(S.String),
        }),
      ).annotate({ identifier: "OcsfFindingFilters" });
  }
}
function __c108(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ OcsfFindingCriteria: __S(863) })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          SeverityId: S.optional(S.Number),
          Comment: S.optional(S.String),
          StatusId: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AutomationRulesFindingFieldsUpdateV2",
      });
    case 2:
      return S.suspend(() => S.Struct({ ConnectorArn: S.optional(S.String) })).annotate({
        identifier: "ExternalIntegrationConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          FindingFieldsUpdate: S.optional(__S(865)),
          ExternalIntegrationConfiguration: S.optional(__S(866)),
        }),
      ).annotate({ identifier: "AutomationRulesActionV2" });
    case 4:
      return S.Array(__S(867));
    case 5:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.optional(S.String),
          RuleStatus: S.optional(S.String),
          Description: S.optional(S.String),
          RuleOrder: S.optional(S.Number),
          Criteria: S.optional(__S(864)),
          Actions: S.optional(__S(868)),
          Tags: S.optional(__S(31)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/automationrulesv2/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAutomationRuleV2Request",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ RuleArn: S.optional(S.String), RuleId: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateAutomationRuleV2Response",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ SecurityControlId: S.optional(S.String), Parameters: S.optional(__S(54)) }),
      ).annotate({
        identifier: "SecurityControlCustomParameter",
      });
  }
}
function __c109(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(871));
    case 1:
      return S.suspend(() =>
        S.Struct({
          EnabledSecurityControlIdentifiers: S.optional(__S(4)),
          DisabledSecurityControlIdentifiers: S.optional(__S(4)),
          SecurityControlCustomParameters: S.optional(__S(872)),
        }),
      ).annotate({
        identifier: "SecurityControlsConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ServiceEnabled: S.optional(S.Boolean),
          EnabledStandardIdentifiers: S.optional(__S(4)),
          SecurityControlsConfiguration: S.optional(__S(873)),
        }),
      ).annotate({ identifier: "SecurityHubPolicy" });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ SecurityHub: __S(874) })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          ConfigurationPolicy: S.optional(__S(875)),
          Tags: S.optional(__S(31)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configurationPolicy/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConfigurationPolicyRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ConfigurationPolicy: S.optional(__S(875)),
        }),
      ).annotate({
        identifier: "CreateConfigurationPolicyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ScopeType: S.optional(S.String), ScopeValues: S.optional(__S(4)) }),
      ).annotate({ identifier: "AzureScopeConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AWSConfigConnectorArn: S.optional(S.String),
          ScopeConfiguration: S.optional(__S(878)),
          AzureRegions: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "AzureProviderConfiguration",
      });
  }
}
function __c110(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ Azure: __S(879) })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Provider: S.optional(__S(880)),
          Tags: S.optional(__S(31)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/connectors" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateConnectorRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ConnectorArn: S.optional(S.String),
          ConnectorId: S.optional(S.String),
          ConnectorStatus: S.optional(S.String),
          EnablementStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateConnectorResponse" });
    case 3:
      return S.suspend(() => S.Struct({ ProjectKey: S.optional(S.String) })).annotate({
        identifier: "JiraCloudProviderConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ InstanceName: S.optional(S.String), SecretArn: S.optional(S.String) }),
      ).annotate({
        identifier: "ServiceNowProviderConfiguration",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ JiraCloud: __S(883) }),
        /*@__PURE__*/ S.Struct({ ServiceNow: __S(884) }),
        /*@__PURE__*/ S.Struct({ Azure: __S(879) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Provider: S.optional(__S(885)),
          KmsKeyArn: S.optional(S.String),
          Tags: S.optional(__S(31)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/connectorsv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateConnectorV2Request" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConnectorArn: S.optional(S.String),
          ConnectorId: S.optional(S.String),
          AuthUrl: S.optional(S.String),
          ConnectorStatus: S.optional(S.String),
          EnablementStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateConnectorV2Response",
      });
  }
}
function __c111(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ RegionLinkingMode: S.optional(S.String), Regions: S.optional(__S(4)) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/findingAggregator/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateFindingAggregatorRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          FindingAggregatorArn: S.optional(S.String),
          FindingAggregationRegion: S.optional(S.String),
          RegionLinkingMode: S.optional(S.String),
          Regions: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "CreateFindingAggregatorResponse",
      });
    case 2:
      return S.Array(__S(858));
    case 3:
      return S.suspend(() => S.Struct({ Value: S.optional(S.String) })).annotate({
        identifier: "KeywordFilter",
      });
    case 4:
      return S.Array(__S(891));
    case 5:
      return S.Array(__S(851));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ProductArn: S.optional(__S(20)),
          AwsAccountId: S.optional(__S(20)),
          Id: S.optional(__S(20)),
          GeneratorId: S.optional(__S(20)),
          Region: S.optional(__S(20)),
          Type: S.optional(__S(20)),
          FirstObservedAt: S.optional(__S(23)),
          LastObservedAt: S.optional(__S(23)),
          CreatedAt: S.optional(__S(23)),
          UpdatedAt: S.optional(__S(23)),
          SeverityProduct: S.optional(__S(25)),
          SeverityNormalized: S.optional(__S(25)),
          SeverityLabel: S.optional(__S(20)),
          Confidence: S.optional(__S(25)),
          Criticality: S.optional(__S(25)),
          Title: S.optional(__S(20)),
          Description: S.optional(__S(20)),
          RecommendationText: S.optional(__S(20)),
          SourceUrl: S.optional(__S(20)),
          ProductFields: S.optional(__S(27)),
          ProductName: S.optional(__S(20)),
          CompanyName: S.optional(__S(20)),
          UserDefinedFields: S.optional(__S(27)),
          MalwareName: S.optional(__S(20)),
          MalwareType: S.optional(__S(20)),
          MalwarePath: S.optional(__S(20)),
          MalwareState: S.optional(__S(20)),
          NetworkDirection: S.optional(__S(20)),
          NetworkProtocol: S.optional(__S(20)),
          NetworkSourceIpV4: S.optional(__S(890)),
          NetworkSourceIpV6: S.optional(__S(890)),
          NetworkSourcePort: S.optional(__S(25)),
          NetworkSourceDomain: S.optional(__S(20)),
          NetworkSourceMac: S.optional(__S(20)),
          NetworkDestinationIpV4: S.optional(__S(890)),
          NetworkDestinationIpV6: S.optional(__S(890)),
          NetworkDestinationPort: S.optional(__S(25)),
          NetworkDestinationDomain: S.optional(__S(20)),
          ProcessName: S.optional(__S(20)),
          ProcessPath: S.optional(__S(20)),
          ProcessPid: S.optional(__S(25)),
          ProcessParentPid: S.optional(__S(25)),
          ProcessLaunchedAt: S.optional(__S(23)),
          ProcessTerminatedAt: S.optional(__S(23)),
          ThreatIntelIndicatorType: S.optional(__S(20)),
          ThreatIntelIndicatorValue: S.optional(__S(20)),
          ThreatIntelIndicatorCategory: S.optional(__S(20)),
          ThreatIntelIndicatorLastObservedAt: S.optional(__S(23)),
          ThreatIntelIndicatorSource: S.optional(__S(20)),
          ThreatIntelIndicatorSourceUrl: S.optional(__S(20)),
          ResourceType: S.optional(__S(20)),
          ResourceId: S.optional(__S(20)),
          ResourcePartition: S.optional(__S(20)),
          ResourceRegion: S.optional(__S(20)),
          ResourceTags: S.optional(__S(27)),
          ResourceAwsEc2InstanceType: S.optional(__S(20)),
          ResourceAwsEc2InstanceImageId: S.optional(__S(20)),
          ResourceAwsEc2InstanceIpV4Addresses: S.optional(__S(890)),
          ResourceAwsEc2InstanceIpV6Addresses: S.optional(__S(890)),
          ResourceAwsEc2InstanceKeyName: S.optional(__S(20)),
          ResourceAwsEc2InstanceIamInstanceProfileArn: S.optional(__S(20)),
          ResourceAwsEc2InstanceVpcId: S.optional(__S(20)),
          ResourceAwsEc2InstanceSubnetId: S.optional(__S(20)),
          ResourceAwsEc2InstanceLaunchedAt: S.optional(__S(23)),
          ResourceAwsS3BucketOwnerId: S.optional(__S(20)),
          ResourceAwsS3BucketOwnerName: S.optional(__S(20)),
          ResourceAwsIamAccessKeyUserName: S.optional(__S(20)),
          ResourceAwsIamAccessKeyPrincipalName: S.optional(__S(20)),
          ResourceAwsIamAccessKeyStatus: S.optional(__S(20)),
          ResourceAwsIamAccessKeyCreatedAt: S.optional(__S(23)),
          ResourceAwsIamUserUserName: S.optional(__S(20)),
          ResourceContainerName: S.optional(__S(20)),
          ResourceContainerImageId: S.optional(__S(20)),
          ResourceContainerImageName: S.optional(__S(20)),
          ResourceContainerLaunchedAt: S.optional(__S(23)),
          ResourceDetailsOther: S.optional(__S(27)),
          ComplianceStatus: S.optional(__S(20)),
          VerificationState: S.optional(__S(20)),
          WorkflowState: S.optional(__S(20)),
          WorkflowStatus: S.optional(__S(20)),
          RecordState: S.optional(__S(20)),
          RelatedFindingsProductArn: S.optional(__S(20)),
          RelatedFindingsId: S.optional(__S(20)),
          NoteText: S.optional(__S(20)),
          NoteUpdatedAt: S.optional(__S(23)),
          NoteUpdatedBy: S.optional(__S(20)),
          Keyword: S.optional(__S(892)),
          FindingProviderFieldsConfidence: S.optional(__S(25)),
          FindingProviderFieldsCriticality: S.optional(__S(25)),
          FindingProviderFieldsRelatedFindingsId: S.optional(__S(20)),
          FindingProviderFieldsRelatedFindingsProductArn: S.optional(__S(20)),
          FindingProviderFieldsSeverityLabel: S.optional(__S(20)),
          FindingProviderFieldsSeverityOriginal: S.optional(__S(20)),
          FindingProviderFieldsTypes: S.optional(__S(20)),
          Sample: S.optional(__S(893)),
          ComplianceSecurityControlId: S.optional(__S(20)),
          ComplianceAssociatedStandardsId: S.optional(__S(20)),
          VulnerabilitiesExploitAvailable: S.optional(__S(20)),
          VulnerabilitiesFixAvailable: S.optional(__S(20)),
          ComplianceSecurityControlParametersName: S.optional(__S(20)),
          ComplianceSecurityControlParametersValue: S.optional(__S(20)),
          AwsAccountName: S.optional(__S(20)),
          ResourceApplicationName: S.optional(__S(20)),
          ResourceApplicationArn: S.optional(__S(20)),
          ResourceOwnerAccountId: S.optional(__S(20)),
          ResourceOwnerOrgId: S.optional(__S(20)),
          ResourceProvider: S.optional(__S(20)),
        }),
      ).annotate({
        identifier: "AwsSecurityFindingFilters",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Filters: S.optional(__S(894)),
          GroupByAttribute: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/insights" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateInsightRequest" });
  }
}
function __c112(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ InsightArn: S.optional(S.String) })).annotate({
        identifier: "CreateInsightResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AccountId: S.optional(S.String), Email: S.optional(S.String) }),
      ).annotate({ identifier: "AccountDetails" });
    case 2:
      return S.Array(__S(897));
    case 3:
      return S.suspend(() =>
        S.Struct({ AccountDetails: S.optional(__S(898)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/members" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateMembersRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ AccountId: S.optional(S.String), ProcessingResult: S.optional(S.String) }),
      ).annotate({ identifier: "Result" });
    case 5:
      return S.Array(__S(900));
    case 6:
      return S.suspend(() => S.Struct({ UnprocessedAccounts: S.optional(__S(901)) })).annotate({
        identifier: "CreateMembersResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConnectorId: S.optional(S.String),
          FindingMetadataUid: S.optional(S.String),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Mode: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/ticketsv2" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTicketV2Request" });
  }
}
function __c113(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TicketId: S.optional(S.String), TicketSrcUrl: S.optional(S.String) }),
      ).annotate({ identifier: "CreateTicketV2Response" });
    case 1:
      return S.suspend(() =>
        S.Struct({ AccountIds: S.optional(__S(4)) }).pipe(
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
      return S.suspend(() => S.Struct({ UnprocessedAccounts: S.optional(__S(901)) })).annotate({
        identifier: "DeclineInvitationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ActionTargetArn: S.String.pipe(T.HttpLabel("ActionTargetArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/actionTargets/{ActionTargetArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteActionTargetRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ AggregatorV2Arn: S.String.pipe(T.HttpLabel("AggregatorV2Arn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/aggregatorv2/delete/{AggregatorV2Arn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAggregatorV2Request",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/automationrulesv2/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAutomationRuleV2Request",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/configurationPolicy/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConfigurationPolicyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ConnectorId: S.String.pipe(T.HttpLabel("ConnectorId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/connectors/{ConnectorId+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteConnectorRequest" });
  }
}
function __c114(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ EnablementStatus: S.optional(S.String) })).annotate({
        identifier: "DeleteConnectorResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ConnectorId: S.String.pipe(T.HttpLabel("ConnectorId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/connectorsv2/{ConnectorId+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteConnectorV2Request" });
    case 2:
      return S.suspend(() => S.Struct({ EnablementStatus: S.optional(S.String) })).annotate({
        identifier: "DeleteConnectorV2Response",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ FindingAggregatorArn: S.String.pipe(T.HttpLabel("FindingAggregatorArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/findingAggregator/delete/{FindingAggregatorArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteFindingAggregatorRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteFindingAggregatorResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ InsightArn: S.String.pipe(T.HttpLabel("InsightArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/insights/{InsightArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteInsightRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ AccountIds: S.optional(__S(4)) }).pipe(
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
        S.Struct({ AccountIds: S.optional(__S(4)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/members/delete" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteMembersRequest" });
  }
}
function __c115(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ActionTargetArns: S.optional(__S(4)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/actionTargets/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeActionTargetsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ActionTargetArn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActionTarget" });
    case 2:
      return S.Array(__S(921));
    case 3:
      return S.suspend(() =>
        S.Struct({ ActionTargets: S.optional(__S(922)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeActionTargetsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ HubArn: S.optional(S.String).pipe(T.HttpQuery("HubArn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/accounts" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeHubRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          HubArn: S.optional(S.String),
          SubscribedAt: S.optional(S.String),
          AutoEnableControls: S.optional(S.Boolean),
          ControlFindingGenerator: S.optional(S.String),
        }),
      ).annotate({ identifier: "DescribeHubResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/organization/configuration" }),
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
        S.Struct({
          ConfigurationType: S.optional(S.String),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "OrganizationConfiguration",
      });
  }
}
function __c116(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AutoEnable: S.optional(S.Boolean),
          MemberAccountLimitReached: S.optional(S.Boolean),
          AutoEnableStandards: S.optional(S.String),
          OrganizationConfiguration: S.optional(__S(927)),
        }),
      ).annotate({
        identifier: "DescribeOrganizationConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          ProductArn: S.optional(S.String).pipe(T.HttpQuery("ProductArn")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/products" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeProductsRequest" });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProductArn: S.optional(S.String),
          ProductName: S.optional(S.String),
          CompanyName: S.optional(S.String),
          Description: S.optional(S.String),
          Categories: S.optional(__S(4)),
          IntegrationTypes: S.optional(__S(930)),
          MarketplaceUrl: S.optional(S.String),
          ActivationUrl: S.optional(S.String),
          ProductSubscriptionResourcePolicy: S.optional(S.String),
        }),
      ).annotate({ identifier: "Product" });
    case 4:
      return S.Array(__S(931));
    case 5:
      return S.suspend(() =>
        S.Struct({ Products: S.optional(__S(932)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "DescribeProductsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/productsV2" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeProductsV2Request",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProductV2Name: S.optional(S.String),
          CompanyName: S.optional(S.String),
          Description: S.optional(S.String),
          Categories: S.optional(__S(4)),
          IntegrationV2Types: S.optional(__S(930)),
          MarketplaceUrl: S.optional(S.String),
          ActivationUrl: S.optional(S.String),
          MarketplaceProductId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProductV2" });
  }
}
function __c117(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(935));
    case 1:
      return S.suspend(() =>
        S.Struct({ ProductsV2: S.optional(__S(936)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeProductsV2Response",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/hubv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeSecurityHubV2Request",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FeatureStatus: S.optional(S.String),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "FeatureDetail" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(939).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          HubV2Arn: S.optional(S.String),
          SubscribedAt: S.optional(S.String),
          Features: S.optional(__S(940)),
        }),
      ).annotate({
        identifier: "DescribeSecurityHubV2Response",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          Providers: S.optional(__S(930)).pipe(T.HttpQuery("Providers")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/standards" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeStandardsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Company: S.optional(S.String), Product: S.optional(S.String) }),
      ).annotate({ identifier: "StandardsManagedBy" });
  }
}
function __c118(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StandardsArn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          EnabledByDefault: S.optional(S.Boolean),
          Provider: S.optional(S.String),
          StandardsManagedBy: S.optional(__S(943)),
        }),
      ).annotate({ identifier: "Standard" });
    case 1:
      return S.Array(__S(944));
    case 2:
      return S.suspend(() =>
        S.Struct({ Standards: S.optional(__S(945)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeStandardsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StandardsSubscriptionArn: S.String.pipe(T.HttpLabel("StandardsSubscriptionArn")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/standards/controls/{StandardsSubscriptionArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeStandardsControlsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StandardsControlArn: S.optional(S.String),
          ControlStatus: S.optional(S.String),
          DisabledReason: S.optional(S.String),
          ControlStatusUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ControlId: S.optional(S.String),
          Title: S.optional(S.String),
          Description: S.optional(S.String),
          RemediationUrl: S.optional(S.String),
          SeverityRating: S.optional(S.String),
          RelatedRequirements: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "StandardsControl" });
    case 5:
      return S.Array(__S(948));
    case 6:
      return S.suspend(() =>
        S.Struct({ Controls: S.optional(__S(949)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeStandardsControlsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProductSubscriptionArn: S.String.pipe(T.HttpLabel("ProductSubscriptionArn")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/productSubscriptions/{ProductSubscriptionArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisableImportFindingsForProductRequest",
      });
  }
}
function __c119(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AdminAccountId: S.optional(S.String),
          Feature: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/organization/admin/disable" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisableOrganizationAdminAccountRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/accounts" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisableSecurityHubRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ FeatureName: S.String.pipe(T.HttpLabel("FeatureName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/hubv2/feature/{FeatureName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisableSecurityHubFeatureV2Request",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/hubv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisableSecurityHubV2Request",
      });
    case 4:
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
    case 5:
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
    case 6:
      return S.suspend(() =>
        S.Struct({ AccountIds: S.optional(__S(4)) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/members/disassociate" }),
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
        S.Struct({ ProductArn: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/productSubscriptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "EnableImportFindingsForProductRequest",
      });
  }
}
function __c120(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ProductSubscriptionArn: S.optional(S.String) })).annotate({
        identifier: "EnableImportFindingsForProductResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AdminAccountId: S.optional(S.String),
          Feature: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/organization/admin/enable" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "EnableOrganizationAdminAccountRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AdminAccountId: S.optional(S.String), Feature: S.optional(S.String) }),
      ).annotate({
        identifier: "EnableOrganizationAdminAccountResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Tags: S.optional(__S(31)),
          EnableDefaultStandards: S.optional(S.Boolean),
          ControlFindingGenerator: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/accounts" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "EnableSecurityHubRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ FeatureName: S.String.pipe(T.HttpLabel("FeatureName")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/hubv2/feature/{FeatureName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "EnableSecurityHubFeatureV2Request",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Tags: S.optional(__S(31)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/hubv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "EnableSecurityHubV2Request",
      });
    case 6:
      return S.suspend(() => S.Struct({ HubV2Arn: S.optional(S.String) })).annotate({
        identifier: "EnableSecurityHubV2Response",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ MetadataUid: S.String.pipe(T.HttpLabel("MetadataUid")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/recommendedPolicyV2/{MetadataUid}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GenerateRecommendedPolicyV2Request",
      });
  }
}
function __c121(j: number): any {
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
          AccountId: S.optional(S.String),
          InvitationId: S.optional(S.String),
          InvitedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          MemberStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "Invitation" });
    case 2:
      return S.suspend(() => S.Struct({ Administrator: S.optional(__S(969)) })).annotate({
        identifier: "GetAdministratorAccountResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AggregatorV2Arn: S.String.pipe(T.HttpLabel("AggregatorV2Arn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/aggregatorv2/get/{AggregatorV2Arn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAggregatorV2Request" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AggregatorV2Arn: S.optional(S.String),
          AggregationRegion: S.optional(S.String),
          RegionLinkingMode: S.optional(S.String),
          LinkedRegions: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "GetAggregatorV2Response" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/automationrulesv2/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAutomationRuleV2Request",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RuleArn: S.optional(S.String),
          RuleId: S.optional(S.String),
          RuleOrder: S.optional(S.Number),
          RuleName: S.optional(S.String),
          RuleStatus: S.optional(S.String),
          Description: S.optional(S.String),
          Criteria: S.optional(__S(864)),
          Actions: S.optional(__S(868)),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "GetAutomationRuleV2Response",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/configurationPolicy/get/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfigurationPolicyRequest",
      });
  }
}
function __c122(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Target: S.optional(__S(41)) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configurationPolicyAssociation/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfigurationPolicyAssociationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ConnectorId: S.String.pipe(T.HttpLabel("ConnectorId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/connectors/{ConnectorId+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetConnectorRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({ identifier: "HealthIssue" });
    case 3:
      return S.Array(__S(978));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ConnectorStatus: S.optional(S.String),
          Message: S.optional(S.String),
          LastCheckedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Issues: S.optional(__S(979)),
        }),
      ).annotate({ identifier: "CspmHealthCheck" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AWSConfigConnectorArn: S.optional(S.String),
          ScopeConfiguration: S.optional(__S(878)),
          AzureRegions: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "AzureDetail" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ Azure: __S(981) })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConnectorArn: S.optional(S.String),
          ConnectorId: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          LastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Health: S.optional(__S(980)),
          ProviderDetail: S.optional(__S(982)),
          CreatedBy: S.optional(S.String),
          EnablementStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetConnectorResponse" });
  }
}
function __c123(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ConnectorId: S.String.pipe(T.HttpLabel("ConnectorId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/connectorsv2/{ConnectorId+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetConnectorV2Request" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CloudId: S.optional(S.String),
          ProjectKey: S.optional(S.String),
          Domain: S.optional(S.String),
          AuthUrl: S.optional(S.String),
          AuthStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "JiraCloudDetail" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          InstanceName: S.optional(S.String),
          SecretArn: S.optional(S.String),
          AuthStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServiceNowDetail" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ JiraCloud: __S(985) }),
        /*@__PURE__*/ S.Struct({ ServiceNow: __S(986) }),
        /*@__PURE__*/ S.Struct({ Azure: __S(981) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ConnectorArn: S.optional(S.String),
          ConnectorId: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          KmsKeyArn: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          LastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Health: S.optional(__S(980)),
          ProviderDetail: S.optional(__S(987)),
          EnablementStatus: S.optional(S.String),
          EnablementStatusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetConnectorV2Response" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StandardsSubscriptionArns: S.optional(__S(4)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          Providers: S.optional(__S(930)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/standards/get" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetEnabledStandardsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StandardsSubscriptions: S.optional(__S(13)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetEnabledStandardsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ FindingAggregatorArn: S.String.pipe(T.HttpLabel("FindingAggregatorArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/findingAggregator/get/{FindingAggregatorArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetFindingAggregatorRequest",
      });
  }
}
function __c124(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FindingIdentifier: S.optional(__S(821)),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/findingHistory/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFindingHistoryRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Identity: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FindingHistoryUpdateSource",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          UpdatedField: S.optional(S.String),
          OldValue: S.optional(S.String),
          NewValue: S.optional(S.String),
        }),
      ).annotate({ identifier: "FindingHistoryUpdate" });
    case 3:
      return S.Array(__S(994));
    case 4:
      return S.suspend(() =>
        S.Struct({
          FindingIdentifier: S.optional(__S(821)),
          UpdateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          FindingCreated: S.optional(S.Boolean),
          UpdateSource: S.optional(__S(993)),
          Updates: S.optional(__S(995)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "FindingHistoryRecord" });
    case 5:
      return S.Array(__S(996));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Records: S.optional(__S(997)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetFindingHistoryResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Field: S.optional(S.String), SortOrder: S.optional(S.String) }),
      ).annotate({ identifier: "SortCriterion" });
  }
}
function __c125(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(999));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(894)),
          SortCriteria: S.optional(__S(1000)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/findings" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetFindingsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Findings: S.optional(__S(813)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "GetFindingsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(863)),
          GroupByField: S.optional(S.String),
        }),
      ).annotate({ identifier: "GroupByRule" });
    case 4:
      return S.Array(__S(1003));
    case 5:
      return S.suspend(() =>
        S.Struct({
          OrganizationId: S.optional(S.String),
          OrganizationalUnitId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsOrganizationScope" });
    case 6:
      return S.Array(__S(1005));
    case 7:
      return S.suspend(() => S.Struct({ AwsOrganizations: S.optional(__S(1006)) })).annotate({
        identifier: "FindingScopes",
      });
  }
}
function __c126(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GroupByRules: S.optional(__S(1004)),
          Scopes: S.optional(__S(1007)),
          SortOrder: S.optional(S.String),
          MaxStatisticResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/findingsv2/statistics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetFindingStatisticsV2Request",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ FieldValue: S.optional(S.String), Count: S.optional(S.Number) }),
      ).annotate({ identifier: "GroupByValue" });
    case 2:
      return S.Array(__S(1009));
    case 3:
      return S.suspend(() =>
        S.Struct({ GroupByField: S.optional(S.String), GroupByValues: S.optional(__S(1010)) }),
      ).annotate({ identifier: "GroupByResult" });
    case 4:
      return S.Array(__S(1011));
    case 5:
      return S.suspend(() => S.Struct({ GroupByResults: S.optional(__S(1012)) })).annotate({
        identifier: "GetFindingStatisticsV2Response",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FieldName: S.optional(S.String),
          Filter: S.optional(__S(19)),
        }),
      ).annotate({
        identifier: "FindingsTrendsStringFilter",
      });
    case 7:
      return S.Array(__S(1014));
  }
}
function __c127(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StringFilters: S.optional(__S(1015)),
          NestedCompositeFilters: S.optional(
            S.suspend(() => __S(1017)).annotate({
              identifier: "FindingsTrendsCompositeFilterList",
            }),
          ),
          Operator: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FindingsTrendsCompositeFilter",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<FindingsTrendsCompositeFilter> => __S(1016)).annotate({
          identifier: "FindingsTrendsCompositeFilter",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          CompositeFilters: S.optional(__S(1017)),
          CompositeOperator: S.optional(S.String),
        }),
      ).annotate({ identifier: "FindingsTrendsFilters" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(1018)),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/findingsTrendsv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetFindingsTrendsV2Request",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Unknown: S.optional(S.Number),
          Informational: S.optional(S.Number),
          Low: S.optional(S.Number),
          Medium: S.optional(S.Number),
          High: S.optional(S.Number),
          Critical: S.optional(S.Number),
          Fatal: S.optional(S.Number),
          Other: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SeverityTrendsCount" });
    case 5:
      return S.suspend(() => S.Struct({ SeverityTrends: S.optional(__S(1020)) })).annotate({
        identifier: "TrendsValues",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          TrendsValues: S.optional(__S(1021)),
        }),
      ).annotate({ identifier: "TrendsMetricsResult" });
    case 7:
      return S.Array(__S(1022));
  }
}
function __c128(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Granularity: S.optional(S.String),
          TrendsMetrics: S.optional(__S(1023)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetFindingsTrendsV2Response",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(863)),
          Scopes: S.optional(__S(1007)),
          SortCriteria: S.optional(__S(1000)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/findingsv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetFindingsV2Request" });
    case 2:
      return S.Array(S.Any);
    case 3:
      return S.suspend(() =>
        S.Struct({ Findings: S.optional(__S(1026)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "GetFindingsV2Response" });
    case 4:
      return S.suspend(() =>
        S.Struct({ InsightArn: S.String.pipe(T.HttpLabel("InsightArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/insights/results/{InsightArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetInsightResultsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ GroupByAttributeValue: S.optional(S.String), Count: S.optional(S.Number) }),
      ).annotate({ identifier: "InsightResultValue" });
    case 6:
      return S.Array(__S(1029));
    case 7:
      return S.suspend(() =>
        S.Struct({
          InsightArn: S.optional(S.String),
          GroupByAttribute: S.optional(S.String),
          ResultValues: S.optional(__S(1030)),
        }),
      ).annotate({ identifier: "InsightResults" });
  }
}
function __c129(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ InsightResults: S.optional(__S(1031)) })).annotate({
        identifier: "GetInsightResultsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InsightArns: S.optional(__S(4)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/insights/get" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetInsightsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          InsightArn: S.optional(S.String),
          Name: S.optional(S.String),
          Filters: S.optional(__S(894)),
          GroupByAttribute: S.optional(S.String),
        }),
      ).annotate({ identifier: "Insight" });
    case 3:
      return S.Array(__S(1034));
    case 4:
      return S.suspend(() =>
        S.Struct({ Insights: S.optional(__S(1035)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "GetInsightsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/invitations/count" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetInvitationsCountRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ InvitationsCount: S.optional(S.Number) })).annotate({
        identifier: "GetInvitationsCountResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/master" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetMasterAccountRequest" });
  }
}
function __c130(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Master: S.optional(__S(969)) })).annotate({
        identifier: "GetMasterAccountResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AccountIds: S.optional(__S(4)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/members/get" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetMembersRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          Email: S.optional(S.String),
          MasterId: S.optional(S.String),
          AdministratorId: S.optional(S.String),
          MemberStatus: S.optional(S.String),
          InvitedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "Member" });
    case 3:
      return S.Array(__S(1042));
    case 4:
      return S.suspend(() =>
        S.Struct({ Members: S.optional(__S(1043)), UnprocessedAccounts: S.optional(__S(901)) }),
      ).annotate({ identifier: "GetMembersResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MetadataUid: S.String.pipe(T.HttpLabel("MetadataUid")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/recommendedPolicyV2/{MetadataUid}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRecommendedPolicyV2Request",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RecommendedAction: S.optional(S.String),
          ExistingPolicy: S.optional(S.String),
          ExistingPolicyId: S.optional(S.String),
          PolicyUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          RecommendedPolicy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UnusedPermissionsRecommendationStep",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ UnusedPermissions: __S(1046) })]);
  }
}
function __c131(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(1047));
    case 1:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({ identifier: "RecommendationError" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          RecommendationType: S.optional(S.String),
          RecommendationSteps: S.optional(__S(1048)),
          Error: S.optional(__S(1049)),
          Status: S.optional(S.String),
          ResourceArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetRecommendedPolicyV2Response",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FieldName: S.optional(S.String),
          Filter: S.optional(__S(525)),
        }),
      ).annotate({ identifier: "RemediationStringFilter" });
    case 4:
      return S.Array(__S(1051));
    case 5:
      return S.suspend(() => S.Struct({ StringFilters: S.optional(__S(1052)) })).annotate({
        identifier: "RemediationCompositeFilter",
      });
    case 6:
      return S.Array(__S(1053));
    case 7:
      return S.suspend(() => S.Struct({ CompositeFilters: S.optional(__S(1054)) })).annotate({
        identifier: "RemediationFilters",
      });
  }
}
function __c132(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TargetUid: S.optional(S.String),
          MetadataUid: S.optional(S.String),
          Filters: S.optional(__S(1055)),
          ShowGuidance: S.optional(S.Boolean),
          GuidanceFormat: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetRemediationsV2" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRemediationsV2Request" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResolvedFindingsCount: S.optional(S.Number),
          SeverityReductionFindingsCount: S.optional(S.Number),
          SeverityUnchangedCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RemediationOutcome" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Title: S.optional(S.String), Url: S.optional(S.String) }),
      ).annotate({ identifier: "KbArticle" });
    case 3:
      return S.Array(__S(1058));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(S.String),
          Description: S.optional(S.String),
          IsImmediate: S.optional(S.Boolean),
          PostRemediationSteps: S.optional(__S(4)),
          KbArticles: S.optional(__S(1059)),
        }),
      ).annotate({ identifier: "RemediationSummaryDetail" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          Region: S.optional(S.String),
          ResourceOwnerAccountId: S.optional(S.String),
          ResourceOwnerOrgId: S.optional(S.String),
          Type: S.optional(S.String),
          Name: S.optional(S.String),
          Id: S.optional(S.String),
          ResourceGuid: S.optional(S.String),
          ResourceRegion: S.optional(S.String),
          CloudProvider: S.optional(S.String),
        }),
      ).annotate({ identifier: "RemediationResource" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(S.String), Title: S.optional(S.String) }),
      ).annotate({ identifier: "RemediationTrait" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProblemStatement: S.optional(S.String),
          RiskAssessment: S.optional(S.String),
          AffectedScope: S.optional(S.String),
          Prerequisites: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "RemediationGuidanceContext",
      });
  }
}
function __c133(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Type: S.optional(S.String),
          Description: S.optional(S.String),
          Required: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "RemediationParameter" });
    case 1:
      return S.Array(__S(1064));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Phase: S.optional(S.String),
          Description: S.optional(S.String),
          Service: S.optional(S.String),
          Action: S.optional(S.String),
          Logic: S.optional(S.String),
          Inverse: S.optional(S.String),
          VerifyAfter: S.optional(S.String),
        }),
      ).annotate({ identifier: "RemediationStep" });
    case 3:
      return S.Array(__S(1066));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Parameters: S.optional(__S(1065)),
          Steps: S.optional(__S(1067)),
          ExpectedEndState: S.optional(S.String),
          RequiredPermissions: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "RemediationGuidanceSpecification",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AwsCli: S.optional(S.String),
          Cli: S.optional(S.String),
          Python: S.optional(S.String),
          Terraform: S.optional(S.String),
          Cdk: S.optional(S.String),
          CloudFormation: S.optional(S.String),
          IaC: S.optional(S.String),
          Template: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RemediationGuidanceExamples",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceType: S.optional(S.String),
          ExposureType: S.optional(S.String),
          TraitTitles: S.optional(__S(4)),
          Reversibility: S.optional(S.String),
          FixEffect: S.optional(S.String),
          RiskLevel: S.optional(S.String),
          AutomationLevel: S.optional(S.String),
          HumanReviewRequired: S.optional(S.Boolean),
          GeneratedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          VerificationStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RemediationGuidanceMetadata",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TargetTypeName: S.optional(S.String),
          Pattern: S.optional(S.String),
          Version: S.optional(S.String),
          Context: S.optional(__S(1063)),
          Specification: S.optional(__S(1068)),
          Examples: S.optional(__S(1069)),
          Metadata: S.optional(__S(1070)),
        }),
      ).annotate({ identifier: "RemediationGuidance" });
  }
}
function __c134(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TargetUid: S.optional(S.String),
          Outcome: S.optional(__S(1057)),
          Priority: S.optional(S.String),
          RemediationSummary: S.optional(__S(1060)),
          Resource: S.optional(__S(1061)),
          Status: S.optional(S.String),
          Trait: S.optional(__S(1062)),
          Guidance: S.optional(__S(1071)),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "RemediationV2Item" });
    case 1:
      return S.Array(__S(1072));
    case 2:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(__S(1073)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetRemediationsV2Response",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StringFilters: S.optional(__S(848)),
          DateFilters: S.optional(__S(850)),
          NumberFilters: S.optional(__S(855)),
          MapFilters: S.optional(__S(857)),
          NestedCompositeFilters: S.optional(
            S.suspend(() => __S(1076)).annotate({
              identifier: "ResourcesCompositeFilterList",
            }),
          ),
          Operator: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourcesCompositeFilter" });
    case 4:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<ResourcesCompositeFilter> => __S(1075)).annotate({
          identifier: "ResourcesCompositeFilter",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          CompositeFilters: S.optional(__S(1076)),
          CompositeOperator: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourcesFilters" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          GroupByField: S.optional(S.String),
          Filters: S.optional(__S(1077)),
        }),
      ).annotate({ identifier: "ResourceGroupByRule" });
    case 7:
      return S.Array(__S(1078));
  }
}
function __c135(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GroupByRules: S.optional(__S(1079)),
          Scopes: S.optional(__S(1007)),
          SortOrder: S.optional(S.String),
          MaxStatisticResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/resourcesv2/statistics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetResourcesStatisticsV2Request",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          StringFilters: S.optional(__S(1015)),
          NestedCompositeFilters: S.optional(
            S.suspend(() => __S(1082)).annotate({
              identifier: "ResourcesTrendsCompositeFilterList",
            }),
          ),
          Operator: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ResourcesTrendsCompositeFilter",
      });
    case 2:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<ResourcesTrendsCompositeFilter> => __S(1081)).annotate(
          { identifier: "ResourcesTrendsCompositeFilter" },
        ),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          CompositeFilters: S.optional(__S(1082)),
          CompositeOperator: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourcesTrendsFilters" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(1083)),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/resourcesTrendsv2" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetResourcesTrendsV2Request",
      });
    case 5:
      return S.suspend(() => S.Struct({ AllResources: S.optional(S.Number) })).annotate({
        identifier: "ResourcesCount",
      });
    case 6:
      return S.suspend(() => S.Struct({ ResourcesCount: S.optional(__S(1085)) })).annotate({
        identifier: "ResourcesTrendsValues",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          TrendsValues: S.optional(__S(1086)),
        }),
      ).annotate({
        identifier: "ResourcesTrendsMetricsResult",
      });
  }
}
function __c136(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(1087));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Granularity: S.optional(S.String),
          TrendsMetrics: S.optional(__S(1088)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetResourcesTrendsV2Response",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(1077)),
          Scopes: S.optional(__S(1007)),
          SortCriteria: S.optional(__S(1000)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/resourcesv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetResourcesV2Request" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Other: S.optional(S.Number),
          Fatal: S.optional(S.Number),
          Critical: S.optional(S.Number),
          High: S.optional(S.Number),
          Medium: S.optional(S.Number),
          Low: S.optional(S.Number),
          Informational: S.optional(S.Number),
          Unknown: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ResourceSeverityBreakdown",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FindingType: S.optional(S.String),
          ProductName: S.optional(S.String),
          TotalFindings: S.optional(S.Number),
          Severities: S.optional(__S(1091)),
        }),
      ).annotate({ identifier: "ResourceFindingsSummary" });
    case 5:
      return S.Array(__S(1092));
    case 6:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "ResourceTag" });
    case 7:
      return S.Array(__S(1094));
  }
}
function __c137(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          HostResourceGuid: S.optional(S.String),
          HostResourceType: S.optional(S.String),
          CanonicalId: S.optional(S.String),
          SelfHostedAIModelResourceCount: S.optional(S.Number),
          SelfHostedAIAgentResourceCount: S.optional(S.Number),
          SelfHostedAIModelServingResourceCount: S.optional(S.Number),
          SelfHostedAIExternalEndpointResourceCount: S.optional(S.Number),
          SelfHostedAIDevelopmentResourceCount: S.optional(S.Number),
          SelfHostedAIAgentFrameworkResourceCount: S.optional(S.Number),
          SelfHostedAIAgentToolsAndIdentityResourceCount: S.optional(S.Number),
          SelfHostedTotalAIResourceCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AIDetails" });
    case 1:
      return S.suspend(() => S.Struct({ AIDetails: S.optional(__S(1096)) })).annotate({
        identifier: "ResourceInfo",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceGuid: S.optional(S.String),
          ResourceId: S.optional(S.String),
          AccountId: S.optional(S.String),
          AccountName: S.optional(S.String),
          Region: S.optional(S.String),
          ResourceProvider: S.optional(S.String),
          ResourceOwnerAccountId: S.optional(S.String),
          ResourceOwnerOrgId: S.optional(S.String),
          ResourceCloudPartition: S.optional(S.String),
          ResourceRegion: S.optional(S.String),
          ResourceCategory: S.optional(S.String),
          ResourceType: S.optional(S.String),
          ResourceName: S.optional(S.String),
          ResourceCreationTimeDt: S.optional(S.String),
          ResourceDetailCaptureTimeDt: S.optional(S.String),
          FindingsSummary: S.optional(__S(1093)),
          ResourceTags: S.optional(__S(1095)),
          ResourceConfig: S.optional(S.Any),
          ResourceSubCategory: S.optional(S.String),
          DiscoveryType: S.optional(S.String),
          ResourceInfo: S.optional(__S(1097)),
        }),
      ).annotate({ identifier: "ResourceResult" });
    case 3:
      return S.Array(__S(1098));
    case 4:
      return S.suspend(() =>
        S.Struct({ Resources: S.optional(__S(1099)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "GetResourcesV2Response" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SecurityControlId: S.optional(S.String).pipe(T.HttpQuery("SecurityControlId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/securityControl/definition" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSecurityControlDefinitionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(S.Number),
          Min: S.optional(S.Number),
          Max: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "IntegerConfigurationOptions",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(__S(51)),
          Min: S.optional(S.Number),
          Max: S.optional(S.Number),
          MaxItems: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "IntegerListConfigurationOptions",
      });
  }
}
function __c138(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(S.String),
          Re2Expression: S.optional(S.String),
          ExpressionDescription: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StringConfigurationOptions",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(__S(4)),
          Re2Expression: S.optional(S.String),
          MaxItems: S.optional(S.Number),
          ExpressionDescription: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StringListConfigurationOptions",
      });
    case 2:
      return S.suspend(() => S.Struct({ DefaultValue: S.optional(S.Boolean) })).annotate({
        identifier: "BooleanConfigurationOptions",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DefaultValue: S.optional(S.String), AllowedValues: S.optional(__S(4)) }),
      ).annotate({ identifier: "EnumConfigurationOptions" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(__S(4)),
          MaxItems: S.optional(S.Number),
          AllowedValues: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "EnumListConfigurationOptions",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Integer: __S(1102) }),
        /*@__PURE__*/ S.Struct({ IntegerList: __S(1103) }),
        /*@__PURE__*/ S.Struct({ Double: __S(1102) }),
        /*@__PURE__*/ S.Struct({ String: __S(1104) }),
        /*@__PURE__*/ S.Struct({ StringList: __S(1105) }),
        /*@__PURE__*/ S.Struct({ Boolean: __S(1106) }),
        /*@__PURE__*/ S.Struct({ Enum: __S(1107) }),
        /*@__PURE__*/ S.Struct({ EnumList: __S(1108) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          ConfigurationOptions: S.optional(__S(1109)),
        }),
      ).annotate({ identifier: "ParameterDefinition" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(1110).pipe(S.optional));
  }
}
function __c139(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SecurityControlId: S.optional(S.String),
          Title: S.optional(S.String),
          Description: S.optional(S.String),
          RemediationUrl: S.optional(S.String),
          SeverityRating: S.optional(S.String),
          CurrentRegionAvailability: S.optional(S.String),
          CustomizableProperties: S.optional(__S(930)),
          ParameterDefinitions: S.optional(__S(1111)),
          Provider: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SecurityControlDefinition",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ SecurityControlDefinition: S.optional(__S(1112)) }),
      ).annotate({
        identifier: "GetSecurityControlDefinitionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AccountIds: S.optional(__S(4)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/members/invite" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "InviteMembersRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/aggregatorv2/list" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAggregatorsV2Request" });
    case 4:
      return S.suspend(() => S.Struct({ AggregatorV2Arn: S.optional(S.String) })).annotate({
        identifier: "AggregatorV2",
      });
    case 5:
      return S.Array(__S(1116));
    case 6:
      return S.suspend(() =>
        S.Struct({ AggregatorsV2: S.optional(__S(1117)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAggregatorsV2Response",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/automationrules/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAutomationRulesRequest",
      });
  }
}
function __c140(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RuleArn: S.optional(S.String),
          RuleStatus: S.optional(S.String),
          RuleOrder: S.optional(S.Number),
          RuleName: S.optional(S.String),
          Description: S.optional(S.String),
          IsTerminal: S.optional(S.Boolean),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CreatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "AutomationRulesMetadata" });
    case 1:
      return S.Array(__S(1120));
    case 2:
      return S.suspend(() =>
        S.Struct({
          AutomationRulesMetadata: S.optional(__S(1121)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAutomationRulesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/automationrulesv2/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAutomationRulesV2Request",
      });
    case 4:
      return S.suspend(() => S.Struct({ Type: S.optional(S.String) })).annotate({
        identifier: "AutomationRulesActionTypeObjectV2",
      });
    case 5:
      return S.Array(__S(1124));
    case 6:
      return S.suspend(() =>
        S.Struct({
          RuleArn: S.optional(S.String),
          RuleId: S.optional(S.String),
          RuleOrder: S.optional(S.Number),
          RuleName: S.optional(S.String),
          RuleStatus: S.optional(S.String),
          Description: S.optional(S.String),
          Actions: S.optional(__S(1125)),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "AutomationRulesMetadataV2",
      });
    case 7:
      return S.Array(__S(1126));
  }
}
function __c141(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Rules: S.optional(__S(1127)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAutomationRulesV2Response",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/configurationPolicy/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConfigurationPoliciesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ServiceEnabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ConfigurationPolicySummary",
      });
    case 3:
      return S.Array(__S(1130));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ConfigurationPolicySummaries: S.optional(__S(1131)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListConfigurationPoliciesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConfigurationPolicyId: S.optional(S.String),
          AssociationType: S.optional(S.String),
          AssociationStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssociationFilters" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          Filters: S.optional(__S(1133)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configurationPolicyAssociation/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConfigurationPolicyAssociationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConfigurationPolicyAssociationSummaries: S.optional(__S(46)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListConfigurationPolicyAssociationsResponse",
      });
  }
}
function __c142(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          ProviderName: S.optional(S.String).pipe(T.HttpQuery("ProviderName")),
          ConnectorStatus: S.optional(S.String).pipe(T.HttpQuery("ConnectorStatus")),
          EnablementStatus: S.optional(S.String).pipe(T.HttpQuery("EnablementStatus")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/connectors" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListConnectorsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProviderName: S.optional(S.String),
          ConnectorStatus: S.optional(S.String),
          ProviderConfiguration: S.optional(__S(982)),
        }),
      ).annotate({ identifier: "CspmProviderSummary" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ConnectorArn: S.optional(S.String),
          ConnectorId: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          ProviderSummary: S.optional(__S(1137)),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CreatedBy: S.optional(S.String),
          EnablementStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "CspmConnectorSummary" });
    case 3:
      return S.Array(__S(1138));
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          Connectors: S.optional(__S(1139)),
        }),
      ).annotate({ identifier: "ListConnectorsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          ProviderName: S.optional(S.String).pipe(T.HttpQuery("ProviderName")),
          ConnectorStatus: S.optional(S.String).pipe(T.HttpQuery("ConnectorStatus")),
          EnablementStatus: S.optional(S.String).pipe(T.HttpQuery("EnablementStatus")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/connectorsv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListConnectorsV2Request" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ProviderName: S.optional(S.String),
          ConnectorStatus: S.optional(S.String),
          ProviderConfiguration: S.optional(__S(987)),
        }),
      ).annotate({ identifier: "ProviderSummary" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConnectorArn: S.optional(S.String),
          ConnectorId: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          ProviderSummary: S.optional(__S(1142)),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EnablementStatus: S.optional(S.String),
          EnablementStatusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConnectorSummary" });
  }
}
function __c143(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(1143));
    case 1:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Connectors: S.optional(__S(1144)) }),
      ).annotate({ identifier: "ListConnectorsV2Response" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/productSubscriptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEnabledProductsForImportRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProductSubscriptions: S.optional(__S(4)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEnabledProductsForImportResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TargetUid: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListExposuresByRemediationV2" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListExposuresByRemediationV2Request",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MetadataUid: S.optional(S.String),
          Title: S.optional(S.String),
          PreviousSeverity: S.optional(S.String),
          ProjectedSeverity: S.optional(S.String),
          Impact: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExposureFinding" });
    case 6:
      return S.Array(__S(1149));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(__S(1150)),
          TargetUid: S.optional(S.String),
          Resource: S.optional(__S(1061)),
          TotalCount: S.optional(S.Number),
          Trait: S.optional(__S(1062)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListExposuresByRemediationV2Response",
      });
  }
}
function __c144(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/findingAggregator/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListFindingAggregatorsRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ FindingAggregatorArn: S.optional(S.String) })).annotate({
        identifier: "FindingAggregator",
      });
    case 2:
      return S.Array(__S(1153));
    case 3:
      return S.suspend(() =>
        S.Struct({
          FindingAggregators: S.optional(__S(1154)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListFindingAggregatorsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountIds: S.optional(__S(4)),
          Statuses: S.optional(__S(930)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/freetrial/statusv2/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListFreeTrialStatusesV2Request",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FeatureType: S.optional(S.String),
          Status: S.optional(S.String),
          StartedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ExpiresAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "FreeTrialStatus" });
    case 6:
      return S.Array(__S(1157));
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          EvaluatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          FreeTrialStatuses: S.optional(__S(1158)),
        }),
      ).annotate({ identifier: "AccountFreeTrialStatus" });
  }
}
function __c145(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(1159));
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountFreeTrialStatuses: S.optional(__S(1160)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListFreeTrialStatusesV2Response",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/invitations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListInvitationsRequest" });
    case 3:
      return S.Array(__S(969));
    case 4:
      return S.suspend(() =>
        S.Struct({ Invitations: S.optional(__S(1163)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListInvitationsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OnlyAssociated: S.optional(S.Boolean).pipe(T.HttpQuery("OnlyAssociated")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/members" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListMembersRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Members: S.optional(__S(1043)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListMembersResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          Feature: S.optional(S.String).pipe(T.HttpQuery("Feature")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/organization/admin" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListOrganizationAdminAccountsRequest",
      });
  }
}
function __c146(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AccountId: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({ identifier: "AdminAccount" });
    case 1:
      return S.Array(__S(1168));
    case 2:
      return S.suspend(() =>
        S.Struct({
          AdminAccounts: S.optional(__S(1169)),
          NextToken: S.optional(S.String),
          Feature: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListOrganizationAdminAccountsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StandardsArn: S.optional(S.String).pipe(T.HttpQuery("StandardsArn")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          Providers: S.optional(__S(930)).pipe(T.HttpQuery("Providers")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/securityControls/definitions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSecurityControlDefinitionsRequest",
      });
    case 4:
      return S.Array(__S(1112));
    case 5:
      return S.suspend(() =>
        S.Struct({
          SecurityControlDefinitions: S.optional(__S(1172)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSecurityControlDefinitionsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SecurityControlId: S.optional(S.String).pipe(T.HttpQuery("SecurityControlId")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/associations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListStandardsControlAssociationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StandardsArn: S.optional(S.String),
          SecurityControlId: S.optional(S.String),
          SecurityControlArn: S.optional(S.String),
          AssociationStatus: S.optional(S.String),
          RelatedRequirements: S.optional(__S(4)),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedReason: S.optional(S.String),
          StandardsControlTitle: S.optional(S.String),
          StandardsControlDescription: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StandardsControlAssociationSummary",
      });
  }
}
function __c147(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(1175));
    case 1:
      return S.suspend(() =>
        S.Struct({
          StandardsControlAssociationSummaries: S.optional(__S(1176)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListStandardsControlAssociationsResponse",
      });
    case 2:
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
    case 3:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(31)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ AuthCode: S.optional(S.String), AuthState: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/connectorsv2/register" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RegisterConnectorV2Request",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ConnectorArn: S.optional(S.String), ConnectorId: S.optional(S.String) }),
      ).annotate({
        identifier: "RegisterConnectorV2Response",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ConfigurationPolicyIdentifier: S.optional(S.String),
          Target: S.optional(__S(41)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configurationPolicyAssociation/associate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartConfigurationPolicyAssociationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Target: S.optional(__S(41)),
          ConfigurationPolicyIdentifier: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configurationPolicyAssociation/disassociate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartConfigurationPolicyDisassociationRequest",
      });
  }
}
function __c148(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          Tags: S.optional(__S(31)),
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
      ).annotate({ identifier: "TagResourceRequest" });
    case 1:
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
    case 2:
      return S.suspend(() =>
        S.Struct({
          ActionTargetArn: S.String.pipe(T.HttpLabel("ActionTargetArn")),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/actionTargets/{ActionTargetArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateActionTargetRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AggregatorV2Arn: S.String.pipe(T.HttpLabel("AggregatorV2Arn")),
          RegionLinkingMode: S.optional(S.String),
          LinkedRegions: S.optional(__S(4)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/aggregatorv2/update/{AggregatorV2Arn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAggregatorV2Request",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          RuleStatus: S.optional(S.String),
          RuleOrder: S.optional(S.Number),
          Description: S.optional(S.String),
          RuleName: S.optional(S.String),
          Criteria: S.optional(__S(864)),
          Actions: S.optional(__S(868)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/automationrulesv2/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAutomationRuleV2Request",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          UpdatedReason: S.optional(S.String),
          ConfigurationPolicy: S.optional(__S(875)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/configurationPolicy/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConfigurationPolicyRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ScopeConfiguration: S.optional(__S(878)),
          AzureRegions: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "AzureUpdateConfiguration" });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ Azure: __S(1190) })]);
  }
}
function __c149(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ConnectorId: S.String.pipe(T.HttpLabel("ConnectorId")),
          Description: S.optional(S.String),
          Provider: S.optional(__S(1191)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/connectors/{ConnectorId+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateConnectorRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ConnectorStatus: S.optional(S.String),
          EnablementStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "UpdateConnectorResponse" });
    case 2:
      return S.suspend(() => S.Struct({ SecretArn: S.optional(S.String) })).annotate({
        identifier: "ServiceNowUpdateConfiguration",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ JiraCloud: __S(883) }),
        /*@__PURE__*/ S.Struct({ ServiceNow: __S(1194) }),
        /*@__PURE__*/ S.Struct({ Azure: __S(1190) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ConnectorId: S.String.pipe(T.HttpLabel("ConnectorId")),
          Description: S.optional(S.String),
          Provider: S.optional(__S(1195)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/connectorsv2/{ConnectorId+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateConnectorV2Request" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConnectorStatus: S.optional(S.String),
          EnablementStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateConnectorV2Response",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FindingAggregatorArn: S.optional(S.String),
          RegionLinkingMode: S.optional(S.String),
          Regions: S.optional(__S(4)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/findingAggregator/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateFindingAggregatorRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(894)),
          Note: S.optional(__S(29)),
          RecordState: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "PATCH", uri: "/findings" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateFindingsRequest" });
  }
}
function __c150(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InsightArn: S.String.pipe(T.HttpLabel("InsightArn")),
          Name: S.optional(S.String),
          Filters: S.optional(__S(894)),
          GroupByAttribute: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/insights/{InsightArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateInsightRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AutoEnable: S.optional(S.Boolean),
          AutoEnableStandards: S.optional(S.String),
          OrganizationConfiguration: S.optional(__S(927)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/organization/configuration" }),
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
    case 2:
      return S.suspend(() =>
        S.Struct({
          SecurityControlId: S.optional(S.String),
          Parameters: S.optional(__S(54)),
          LastUpdateReason: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/securityControl/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSecurityControlRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AutoEnableControls: S.optional(S.Boolean),
          ControlFindingGenerator: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "PATCH", uri: "/accounts" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateSecurityHubConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StandardsControlArn: S.String.pipe(T.HttpLabel("StandardsControlArn")),
          ControlStatus: S.optional(S.String),
          DisabledReason: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/standards/control/{StandardsControlArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateStandardsControlRequest",
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
    case 63:
      return __c63(i & 7);
    case 64:
      return __c64(i & 7);
    case 65:
      return __c65(i & 7);
    case 66:
      return __c66(i & 7);
    case 67:
      return __c67(i & 7);
    case 68:
      return __c68(i & 7);
    case 69:
      return __c69(i & 7);
    case 70:
      return __c70(i & 7);
    case 71:
      return __c71(i & 7);
    case 72:
      return __c72(i & 7);
    case 73:
      return __c73(i & 7);
    case 74:
      return __c74(i & 7);
    case 75:
      return __c75(i & 7);
    case 76:
      return __c76(i & 7);
    case 77:
      return __c77(i & 7);
    case 78:
      return __c78(i & 7);
    case 79:
      return __c79(i & 7);
    case 80:
      return __c80(i & 7);
    case 81:
      return __c81(i & 7);
    case 82:
      return __c82(i & 7);
    case 83:
      return __c83(i & 7);
    case 84:
      return __c84(i & 7);
    case 85:
      return __c85(i & 7);
    case 86:
      return __c86(i & 7);
    case 87:
      return __c87(i & 7);
    case 88:
      return __c88(i & 7);
    case 89:
      return __c89(i & 7);
    case 90:
      return __c90(i & 7);
    case 91:
      return __c91(i & 7);
    case 92:
      return __c92(i & 7);
    case 93:
      return __c93(i & 7);
    case 94:
      return __c94(i & 7);
    case 95:
      return __c95(i & 7);
    case 96:
      return __c96(i & 7);
    case 97:
      return __c97(i & 7);
    case 98:
      return __c98(i & 7);
    case 99:
      return __c99(i & 7);
    case 100:
      return __c100(i & 7);
    case 101:
      return __c101(i & 7);
    case 102:
      return __c102(i & 7);
    case 103:
      return __c103(i & 7);
    case 104:
      return __c104(i & 7);
    case 105:
      return __c105(i & 7);
    case 106:
      return __c106(i & 7);
    case 107:
      return __c107(i & 7);
    case 108:
      return __c108(i & 7);
    case 109:
      return __c109(i & 7);
    case 110:
      return __c110(i & 7);
    case 111:
      return __c111(i & 7);
    case 112:
      return __c112(i & 7);
    case 113:
      return __c113(i & 7);
    case 114:
      return __c114(i & 7);
    case 115:
      return __c115(i & 7);
    case 116:
      return __c116(i & 7);
    case 117:
      return __c117(i & 7);
    case 118:
      return __c118(i & 7);
    case 119:
      return __c119(i & 7);
    case 120:
      return __c120(i & 7);
    case 121:
      return __c121(i & 7);
    case 122:
      return __c122(i & 7);
    case 123:
      return __c123(i & 7);
    case 124:
      return __c124(i & 7);
    case 125:
      return __c125(i & 7);
    case 126:
      return __c126(i & 7);
    case 127:
      return __c127(i & 7);
    case 128:
      return __c128(i & 7);
    case 129:
      return __c129(i & 7);
    case 130:
      return __c130(i & 7);
    case 131:
      return __c131(i & 7);
    case 132:
      return __c132(i & 7);
    case 133:
      return __c133(i & 7);
    case 134:
      return __c134(i & 7);
    case 135:
      return __c135(i & 7);
    case 136:
      return __c136(i & 7);
    case 137:
      return __c137(i & 7);
    case 138:
      return __c138(i & 7);
    case 139:
      return __c139(i & 7);
    case 140:
      return __c140(i & 7);
    case 141:
      return __c141(i & 7);
    case 142:
      return __c142(i & 7);
    case 143:
      return __c143(i & 7);
    case 144:
      return __c144(i & 7);
    case 145:
      return __c145(i & 7);
    case 146:
      return __c146(i & 7);
    case 147:
      return __c147(i & 7);
    case 148:
      return __c148(i & 7);
    case 149:
      return __c149(i & 7);
    case 150:
      return __c150(i & 7);
  }
}
